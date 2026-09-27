import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { NextRequest } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import {
  AiSource,
  buildContextBlock,
  consumeSSEStream,
  decideSearch,
  formatLibraryResults,
  formatSearchResults,
  generateOnce,
  generateStream,
  type ContentPart,
  type EngineMessage,
  LibraryHit,
  searchFailedBlock,
  searchLibrary,
  searchWeb,
  tutorSystemPrompt,
} from "@/lib/ai"
import { DEFAULT_MODEL, getAiModel, isAiModelId, resolveModel, type AiModelId } from "@/lib/models"

export const runtime = "nodejs"
export const maxDuration = 120

const HISTORY_LIMIT = 16
/** Full-resolution vision payload cap (data URL chars ≈ 1.37 × bytes). */
const MAX_IMAGE_CHARS = 4_000_000
/** Thumbnail cap — thumbnails are stored in the conversation history. */
const MAX_THUMB_CHARS = 200_000

export async function POST(req: NextRequest) {
  // v21: per-IP sliding-window guard — protects the AI quota if the URL leaks
  const limited = aiRateLimit(req, AI_POLICIES.chat)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) {
    return Response.json({ error: "unauthenticated" }, { status: 401 })
  }

  let body: {
    conversationId?: string
    message?: string
    context?: { view?: string; courseId?: string; lessonId?: string }
    forceSearch?: boolean
    forceLibrary?: boolean
    model?: string
    /** v22: show the model's thinking process (default: on for reasoning engines) */
    thinking?: boolean
    image?: { dataUrl?: string; thumb?: string }
  }
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 })
  }

  const message = String(body.message ?? "").trim()
  if (!message) return Response.json({ error: "Message is required" }, { status: 400 })
  if (message.length > 4000) {
    return Response.json({ error: "Message is too long (max 4000 characters)" }, { status: 400 })
  }

  // optional image attachment → routed to the vision model automatically
  const dataUrl = typeof body.image?.dataUrl === "string" ? body.image.dataUrl : ""
  const thumb = typeof body.image?.thumb === "string" ? body.image.thumb : ""
  if (dataUrl && !/^data:image\/(png|jpe?g|webp|gif);base64,/i.test(dataUrl)) {
    return Response.json({ error: "Unsupported image format" }, { status: 400 })
  }
  if (dataUrl.length > MAX_IMAGE_CHARS) {
    return Response.json({ error: "Image is too large (max ~3MB)" }, { status: 400 })
  }
  if (thumb.length > MAX_THUMB_CHARS) {
    return Response.json({ error: "Thumbnail too large" }, { status: 400 })
  }

  let model: AiModelId = DEFAULT_MODEL
  if (isAiModelId(body.model)) model = body.model
  model = resolveModel(model, !!dataUrl)
  // v22 thinking: on by default for reasoning-capable engines (the visible
  // thinking process), overridable per request from the tutor header toggle
  const wantThinking = typeof body.thinking === "boolean" ? body.thinking : getAiModel(model).reasoning

  // load or create conversation (must belong to the session user)
  let conversationId = typeof body.conversationId === "string" ? body.conversationId : null
  let priorSummary = ""
  if (conversationId) {
    const convo = await db.aiConversation.findUnique({ where: { id: conversationId } })
    if (!convo || convo.userId !== me.id) conversationId = null
    else priorSummary = convo.summary || ""
  }
  if (!conversationId) {
    const title = message.length > 48 ? `${message.slice(0, 48).trim()}…` : message
    const convo = await db.aiConversation.create({
      data: { userId: me.id, title },
    })
    conversationId = convo.id
  }
  const convoId = conversationId

  // persist the user message (with the small thumbnail when an image was sent)
  await db.aiMessage.create({
    data: {
      conversationId: convoId,
      role: "user",
      content: message,
      imageUrl: thumb || (dataUrl.length <= MAX_THUMB_CHARS ? dataUrl : null),
    },
  })

  // conversation history for the model
  const history = await db.aiMessage.findMany({
    where: { conversationId: convoId },
    orderBy: { createdAt: "asc" },
  })
  const recent = history.slice(-HISTORY_LIMIT)

  /* v21 rolling summary: once messages fall out of the 16-message window,
   * fold them into a stored summary every 8 messages so long tutoring arcs
   * keep their earlier teaching (level, decisions, drilled topics) alive. */
  const older = history.slice(0, -HISTORY_LIMIT)
  let summary = priorSummary
  if (older.length >= 8 && older.length % 8 === 0) {
    try {
      const text = older
        .map((m) => `${m.role === "user" ? "Learner" : "Tutor"}: ${m.content.slice(0, 800)}`)
        .join("\n")
        .slice(-8000)
      const res = await generateOnce({
        messages: [
          {
            role: "user",
            content: [
              "Update the running memory of this tutoring conversation. Keep: the learner's stated level and goals, topics already taught and the tutor's key conclusions, agreed examples, and any open follow-ups. Be concise (max 220 words), plain prose, no headings.",
              priorSummary ? `\nCurrent running memory:\n${priorSummary}` : "",
              `\nConversation so far (older messages):\n${text}`,
              "\nReply with the updated memory only.",
            ].join("\n"),
          },
        ],
      })
      const next = res?.text?.trim()
      if (next) {
        summary = next.slice(0, 2500)
        await db.aiConversation.update({ where: { id: convoId }, data: { summary } }).catch(() => {})
      }
    } catch {
      // summarization is best-effort — never block the answer
    }
  }

  // tutor context (current lesson/course awareness)
  const contextBlock = await buildContextBlock(body.context)

  const encoder = new TextEncoder()
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      // once the client disconnects, enqueue throws — swallow so persistence still runs
      let clientGone = false
      const send = (obj: Record<string, unknown>) => {
        if (clientGone) return
        try {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(obj)}\n\n`))
        } catch {
          clientGone = true
        }
      }
      // the client may disconnect mid-stream (abort/unmount) — close() must
      // never throw after that, or the error masks the real persist outcome
      const safeClose = () => {
        try {
          controller.close()
        } catch {
          // already closed — nothing to do
        }
      }
      try {
        // let the client know the conversation id immediately (popup → tab handoff)
        send({ type: "conversation", conversationId: convoId })

        /* -------- 1. decide whether a web search is needed -------- */
        let sources: AiSource[] = []
        const historyText = recent
          .slice(0, -1)
          .map((m) => `${m.role === "user" ? "User" : "Tutor"}: ${m.content}`)
          .join("\n")

        let doSearch = body.forceSearch === true
        let doLibrary = body.forceLibrary === true
        let query = message
        let libraryQuery = message
        if (!doSearch || !doLibrary) {
          send({ type: "status", status: "thinking" })
          const decision = await decideSearch(historyText, message)
          if (!doSearch) {
            doSearch = decision.search
            if (doSearch && decision.query) query = decision.query
          }
          if (!doLibrary) {
            doLibrary = decision.library
            if (doLibrary && decision.libraryQuery) libraryQuery = decision.libraryQuery
          }
        }

        /* -------- 2. run the searches -------- */
        if (doSearch) {
          send({ type: "status", status: "searching", query, scope: "web" })
          sources = await searchWeb(query)
        }
        let libraryHits: LibraryHit[] = []
        if (doLibrary) {
          send({ type: "status", status: "searching", query: libraryQuery, scope: "library" })
          libraryHits = await searchLibrary(libraryQuery)
        }
        if (sources.length || libraryHits.length) {
          const librarySources: AiSource[] = libraryHits.map((h) => ({
            url: `/api/files/${h.fileName}`,
            name: `${h.title} — ${h.category}`,
            host_name: "Office Library",
            snippet: h.excerpt.slice(0, 240),
          }))
          send({ type: "sources", sources: [...sources, ...librarySources] })
        }

        /* -------- 3. stream the tutor's answer -------- */
        send({ type: "status", status: "writing" })
        const allSources: AiSource[] = [
          ...sources,
          ...libraryHits.map((h) => ({
            url: `/api/files/${h.fileName}`,
            name: `${h.title} — ${h.category}`,
            host_name: "Office Library",
            snippet: h.excerpt.slice(0, 240),
          })),
        ]

        const messages: EngineMessage[] = [
          {
            role: "system",
            content: tutorSystemPrompt({
              userName: me.name,
              userRole: me.jobTitle || "External Auditor",
              contextBlock,
            }),
          },
        ]
        // v21: inject the rolling memory of messages beyond the window
        if (summary.trim()) {
          messages.push({
            role: "system",
            content: `Earlier in this conversation (running memory of the first ${older.length} messages — treat as established context, do not re-teach unless asked):
${summary}`,
          })
        }
        for (const m of recent) {
          messages.push({ role: m.role === "user" ? "user" : "assistant", content: m.content })
        }

        // if we searched, enrich the current user message with the results
        // (or, if a search came back empty, be honest about it)
        const parts: string[] = []
        if (sources.length) parts.push(formatSearchResults(sources))
        else if (doSearch) parts.push(searchFailedBlock(query))
        if (libraryHits.length) parts.push(formatLibraryResults(libraryHits, sources.length))
        else if (doLibrary)
          parts.push(
            `A search of the office's uploaded library was attempted for "${libraryQuery}" but found no matching documents. Answer from your own expertise, and let the learner know the office library had no match (they can upload relevant materials to the Library page).`
          )
        const searchBlock = parts.join("\n\n---\n\n")
        // the latest user message gets the search block and (if present) the image
        const lastUserIdx = messages.map((m) => m.role).lastIndexOf("user")
        if (lastUserIdx >= 0) {
          const priorText = messages[lastUserIdx].content
          const textWithSearch = searchBlock
            ? `${typeof priorText === "string" ? priorText : ""}\n\n---\n${searchBlock}`
            : priorText
          if (dataUrl) {
            const parts: ContentPart[] = [
              { type: "text", text: typeof textWithSearch === "string" ? textWithSearch : message },
              { type: "image_url", image_url: { url: dataUrl } },
            ]
            messages[lastUserIdx] = { role: "user", content: parts }
          } else if (searchBlock) {
            messages[lastUserIdx] = { role: "user", content: textWithSearch }
          }
        }

        let full = ""
        let savedMessageId: string | null = null
        let saved = false
        let stopped = false
        const persistAssistant = async () => {
          if (saved || !full.trim()) return
          saved = true
          try {
            const message = await db.aiMessage.create({
              data: {
                conversationId: convoId,
                role: "assistant",
                content: stopped ? `${full}\n\n*(stopped · أُوقف)*` : full,
                sources: JSON.stringify(allSources),
              },
            })
            savedMessageId = message.id
            await db.aiConversation.update({ where: { id: convoId }, data: { updatedAt: new Date() } })
          } catch (e) {
            console.error("failed to persist assistant message", e)
          }
        }

        try {
          const { stream: upstream, modelUsed, engine, notice } = await generateStream({
            model,
            messages,
            thinking: wantThinking,
          })
          send({ type: "meta", model: modelUsed, engine, notice })

          if (upstream) {
            full = await consumeSSEStream(
              upstream,
              (text) => {
                send({ type: "delta", text })
              },
              {
                // v21 stop-honesty: when the learner hits Stop, the client abort
                // propagates through req.signal — stop consuming, persist the
                // partial answer, and stop burning upstream tokens.
                shouldStop: () => {
                  if (req.signal.aborted) {
                    stopped = true
                    return true
                  }
                  return false
                },
                // v22: the visible thinking process (GLM reasoning_content /
                // pool reasoning tokens) — streamed live before the answer
                onReasoning: (text) => {
                  send({ type: "reasoning", text })
                },
              }
            )
          }
        } catch (streamErr) {
          // upstream failed mid-stream — keep whatever we have
          console.error("ai stream error", streamErr)
        }

        if (!full.trim()) {
          // honest failure: tell the client this attempt produced nothing —
          // do NOT persist a canned "I couldn't generate…" string into the
          // conversation history, where it would be replayed as context
          send({ type: "error", error: "The tutor couldn't generate a response — please try again." })
          safeClose()
          return
        }

        /* -------- 4. persist the assistant message -------- */
        await persistAssistant()
        send({ type: "done", conversationId: convoId, messageId: savedMessageId ?? undefined })
        safeClose()
      } catch (e) {
        console.error("ai chat error", e)
        send({ type: "error", error: "The tutor hit an error. Please try again." })
        safeClose()
      }
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  })
}
