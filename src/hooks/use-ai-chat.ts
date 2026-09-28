"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AiChatMessage, AiContext, AiConversationSummary } from "@/lib/audit-types"
import type { AiModelId } from "@/lib/models"
import {
  deriveTitle,
  idbDeleteConversation,
  idbGetConversation,
  idbPatchConversation,
  idbSaveConversation,
  idbConversationsSummary,
} from "@/lib/chat-idb"

export type AiStatus = "idle" | "thinking" | "searching" | "writing"

/** An image the learner attached to a tutor message. */
export type AiImageAttachment = {
  /** Full-resolution data URL sent to the vision model */
  dataUrl: string
  /** Small thumbnail data URL persisted with the conversation */
  thumb: string
}

/** History entry sent to the server so a conversation resumed after a
 *  server-side reset keeps its context (v23). */
type HistoryEntry = { role: "user" | "assistant"; content: string }

/** Merge locally-streamed artifacts (the visible thinking process, image
 *  thumbs) into the server copy of the transcript, aligning from the end. */
function mergeLocalArtifacts(serverMsgs: AiChatMessage[], localMsgs: AiChatMessage[]): AiChatMessage[] {
  if (!localMsgs.length) return serverMsgs
  return serverMsgs.map((m, i) => {
    const j = localMsgs.length - serverMsgs.length + i
    const lm = j >= 0 ? localMsgs[j] : null
    if (!lm || lm.role !== m.role) return m
    let merged = m
    if (lm.reasoning && !m.reasoning) merged = { ...merged, reasoning: lm.reasoning }
    if (lm.imageUrl && !m.imageUrl) merged = { ...merged, imageUrl: lm.imageUrl }
    return merged
  })
}

/** v23 — persist a finished exchange into IndexedDB.
 *
 *  Strategy: save the locally-streamed transcript FIRST (guaranteed — the
 *  browser is ours), then try the authoritative server copy and overwrite
 *  when it is reachable (it also carries the final title). When the server
 *  issued a different conversation id than the one the client held (fresh
 *  ephemeral database on serverless), the old record migrates to the new id
 *  so the rail never shows duplicates. */
async function persistExchange(opts: {
  originalId: string | null
  serverId: string | null
  msgs: AiChatMessage[]
  titleSeed: string
  /** wait before asking the server (aborted answers persist slightly later) */
  delayMs?: number
}) {
  const { originalId, serverId, msgs, titleSeed } = opts
  if (!msgs.length) return
  // carry over metadata when the id changes (ephemeral server re-issue)
  const migrating = !!(originalId && serverId && originalId !== serverId)
  const prev = await idbGetConversation(originalId ?? serverId ?? "")
  if (serverId) {
    await idbSaveConversation(serverId, prev?.title ?? deriveTitle(titleSeed), msgs, { serverId: true })
  } else if (originalId) {
    await idbSaveConversation(originalId, prev?.title ?? deriveTitle(titleSeed), msgs)
  } else {
    return
  }
  const targetId = serverId ?? originalId ?? ""
  if (migrating && originalId) await idbDeleteConversation(originalId)
  // best-effort authoritative copy (title + server-persisted partial text)
  if (opts.delayMs) await new Promise((r) => setTimeout(r, opts.delayMs))
  const full = await fetch(`/api/ai/conversations/${targetId}`)
    .then((r) => (r.ok ? r.json() : null))
    .catch(() => null)
  if (full?.messages?.length) {
    const serverMsgs = full.messages as AiChatMessage[]
    await idbSaveConversation(
      targetId,
      full.title ?? prev?.title ?? deriveTitle(titleSeed),
      mergeLocalArtifacts(serverMsgs, msgs),
      { serverId: true }
    )
  }
}

export function useAiChat(opts?: { conversationsRefresh?: () => void }) {
  const [messages, setMessages] = useState<AiChatMessage[]>([])
  const [conversationId, setConversationId] = useState<string | null>(null)
  const [status, setStatus] = useState<AiStatus>("idle")
  const [searchQuery, setSearchQuery] = useState<string | null>(null)
  const [searchScope, setSearchScope] = useState<"web" | "library" | null>(null)
  const [error, setError] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)
  const pollTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const busy = status !== "idle"

  // v23: mirror of the transcript for persistence (state is async to read)
  const messagesRef = useRef<AiChatMessage[]>([])
  useEffect(() => {
    messagesRef.current = messages
  }, [messages])

  const stop = useCallback(() => {
    abortRef.current?.abort()
    abortRef.current = null
    if (pollTimer.current) {
      clearTimeout(pollTimer.current)
      pollTimer.current = null
    }
    setStatus("idle")
    setSearchQuery(null)
    setSearchScope(null)
  }, [])

  /** Send a message. Returns when the full answer finished streaming. */
  const send = useCallback(
    async (
      text: string,
      context?: AiContext | null,
      options?: {
        forceSearch?: boolean
        forceLibrary?: boolean
        model?: AiModelId
        /** v22: show the thinking process for reasoning engines */
        thinking?: boolean
        image?: AiImageAttachment | null
      }
    ): Promise<{ ok: boolean; conversationId?: string; text?: string }> => {
      const message = text.trim()
      if (!message || abortRef.current) return { ok: false }

      setError(null)
      setSearchQuery(null)
      setSearchScope(null)
      setStatus("thinking")

      // v23: local transcript mirror — persisted to IndexedDB when done
      const baseMsgs = messagesRef.current
      const userMsg: AiChatMessage = {
        id: `tmp-u-${Date.now()}`,
        role: "user",
        content: message,
        sources: [],
        imageUrl: options?.image?.thumb ?? null,
      }
      let assistantMsg: AiChatMessage = { id: `tmp-a-${Date.now()}`, role: "assistant", content: "", sources: [] }
      const pushUpdate = (patch: Partial<AiChatMessage>) => {
        assistantMsg = { ...assistantMsg, ...patch }
        setMessages([...baseMsgs, userMsg, assistantMsg])
      }
      setMessages([...baseMsgs, userMsg, assistantMsg])

      // v23: recent history travels with resumed conversations so a wiped
      // serverless database still gives the tutor the earlier context
      const history: HistoryEntry[] = baseMsgs
        .filter((m) => m.role === "user" || m.role === "assistant")
        .slice(-12)
        .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }))

      const originalConvoId = conversationId
      let serverConvoId: string | null = null
      const controller = new AbortController()
      abortRef.current = controller

      try {
        const res = await fetch("/api/ai/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            conversationId,
            message,
            context: context ?? undefined,
            forceSearch: options?.forceSearch,
            forceLibrary: options?.forceLibrary,
            model: options?.model,
            thinking: options?.thinking,
            history: conversationId ? history : undefined,
            image: options?.image
              ? { dataUrl: options.image.dataUrl, thumb: options.image.thumb }
              : undefined,
          }),
        })
        if (!res.ok || !res.body) {
          const j = await res.json().catch(() => ({}))
          throw new Error(j?.error ?? "The tutor is unavailable right now")
        }

        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let buffer = ""
        let finalConversationId: string | undefined
        let finalText = "" // the full answer, returned for auto-read-aloud

        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          buffer += decoder.decode(value, { stream: true })
          const parts = buffer.split("\n\n")
          buffer = parts.pop() ?? ""
          for (const part of parts) {
            const line = part.trim()
            if (!line.startsWith("data:")) continue
            let evt: Record<string, unknown>
            try {
              evt = JSON.parse(line.slice(5).trim())
            } catch {
              continue
            }

            if (evt.type === "status") {
              const s = evt.status as string
              if (s === "searching") {
                setStatus("searching")
                setSearchQuery((evt.query as string) ?? null)
                setSearchScope(evt.scope === "library" ? "library" : "web")
              } else if (s === "writing") setStatus("writing")
              else setStatus("thinking")
            } else if (evt.type === "conversation") {
              // know the conversation id as soon as the server creates it
              const cid = evt.conversationId as string | undefined
              if (cid) {
                serverConvoId = cid
                setConversationId(cid)
              }
            } else if (evt.type === "meta") {
              // which engine served the answer (+ an informational notice)
              const modelUsed = (evt.model as string) ?? null
              const engine = (evt.engine as string) ?? null
              const notice = (evt.notice as string) ?? null
              const next: AiChatMessage = { ...assistantMsg, modelUsed, engine }
              if (notice) next.notice = notice
              pushUpdate(next)
            } else if (evt.type === "reasoning") {
              // v22: the model's thinking process, streamed live
              pushUpdate({ reasoning: (assistantMsg.reasoning ?? "") + (evt.text as string) })
            } else if (evt.type === "sources") {
              const sources = (evt.sources as AiChatMessage["sources"]) ?? []
              pushUpdate({ sources })
            } else if (evt.type === "delta") {
              const chunk = evt.text as string
              finalText += chunk
              pushUpdate({ content: assistantMsg.content + chunk })
            } else if (evt.type === "done") {
              finalConversationId = evt.conversationId as string
              if (finalConversationId) serverConvoId = finalConversationId
              setConversationId(finalConversationId ?? null)
              pushUpdate({ id: (evt.messageId as string) ?? assistantMsg.id })
            } else if (evt.type === "error") {
              throw new Error((evt.error as string) ?? "The tutor hit an error")
            }
          }
        }

        // v23 — save the exchange to the browser (conversations survive sessions)
        const titleSeed = baseMsgs.find((m) => m.role === "user")?.content ?? message
        void persistExchange({
          originalId: originalConvoId,
          serverId: serverConvoId,
          msgs: [...baseMsgs, userMsg, assistantMsg],
          titleSeed,
        }).finally(() => opts?.conversationsRefresh?.())

        return { ok: true, conversationId: finalConversationId, text: finalText }
      } catch (e) {
        const aborted = e instanceof DOMException && e.name === "AbortError"
        if (!aborted) {
          const msg =
            e instanceof Error && e.message !== "The user aborted a request."
              ? e.message
              : "The tutor hit an error. Please try again."
          setError(msg)
          // drop the empty placeholder assistant bubble
          if (!assistantMsg.content && !assistantMsg.reasoning) {
            setMessages([...baseMsgs, userMsg, assistantMsg].slice(0, -1))
          } else {
            // partial answer streamed before the failure — keep AND persist it
            const kept = [...baseMsgs, userMsg, assistantMsg]
            setMessages(kept)
            void persistExchange({
              originalId: originalConvoId,
              serverId: serverConvoId,
              msgs: kept,
              titleSeed: baseMsgs.find((m) => m.role === "user")?.content ?? message,
            })
          }
        } else if (aborted) {
          // v21 stop-honesty: keep the partial answer and mark it — the server
          // persists exactly the same partial text with the same marker, so
          // reloading the conversation matches what the learner read
          if (assistantMsg.content.trim() && !assistantMsg.content.includes("*(stopped")) {
            pushUpdate({ content: `${assistantMsg.content}\n\n*(stopped · أُوقف)*` })
          }
          const stoppedMsgs = [...baseMsgs, userMsg, assistantMsg]
          setMessages(stoppedMsgs)
          // v23 — a stopped answer is still part of the session history
          void persistExchange({
            originalId: originalConvoId,
            serverId: serverConvoId,
            msgs: stoppedMsgs,
            titleSeed: baseMsgs.find((m) => m.role === "user")?.content ?? message,
            delayMs: 1200,
          }).finally(() => opts?.conversationsRefresh?.())
        }
        return { ok: false }
      } finally {
        abortRef.current = null
        setStatus("idle")
        setSearchQuery(null)
        setSearchScope(null)
      }
    },
    [conversationId, opts]
  )

  /** Load an existing conversation (or reset for a new one).
   *  v23: the browser's IndexedDB copy is the first source (instant, and
   *  survives serverless database resets); the server copy is the fallback
   *  for history created before v23 or on another device, and it is cached
   *  into IndexedDB on first read. If the last message is the user's, an
   *  assistant reply may still be generating server-side (e.g. popup
   *  expanded mid-stream) — poll briefly. */
  const load = useCallback(
    async (id: string | null, attempt = 0) => {
      stop()
      setError(null)
      setConversationId(id)
      if (!id) {
        setMessages([])
        return
      }
      // 1) browser copy first (attempt 0) — the whole point of v23
      if (attempt === 0) {
        const local = await idbGetConversation(id)
        if (local?.messages?.length) {
          setMessages(local.messages)
          const last = local.messages[local.messages.length - 1]
          if (last?.role === "user" && !abortRef.current) {
            if (pollTimer.current) clearTimeout(pollTimer.current)
            pollTimer.current = setTimeout(() => {
              pollTimer.current = null
              void load(id, 1)
            }, 4000)
          }
          return
        }
      }
      // 2) server copy — pre-v23 history, another browser, or a poll refresh
      try {
        const res = await fetch(`/api/ai/conversations/${id}`)
        if (!res.ok) {
          if (attempt === 0) setMessages([])
          return
        }
        const convo = await res.json()
        const msgs: AiChatMessage[] = convo.messages ?? []
        setMessages(msgs)
        // cache into the browser so it survives from now on
        if (msgs.length) {
          void idbSaveConversation(id, convo.title ?? deriveTitle(msgs[0]?.content ?? "Conversation"), msgs, {
            serverId: true,
          })
        }
        if (
          attempt < 6 &&
          msgs.length > 0 &&
          msgs[msgs.length - 1].role === "user" &&
          !abortRef.current
        ) {
          if (pollTimer.current) clearTimeout(pollTimer.current)
          pollTimer.current = setTimeout(() => {
            pollTimer.current = null
            void load(id, attempt + 1)
          }, 4000)
        }
      } catch {
        if (attempt === 0) setMessages([])
      }
    },
    [stop]
  )

  useEffect(
    () => () => {
      abortRef.current?.abort()
      if (pollTimer.current) clearTimeout(pollTimer.current)
    },
    []
  )

  return {
    messages,
    setMessages,
    conversationId,
    setConversationId,
    status,
    busy,
    searchQuery,
    searchScope,
    error,
    send,
    stop,
    load,
  }
}

export function useAiConversations() {
  const [conversations, setConversations] = useState<AiConversationSummary[] | null>(null)

  /** v23 — the rail reads from IndexedDB (persists across sessions) and
   *  back-fills anything the browser is missing from the server.
   *  Promise-chain style: every setState lives inside a .then callback
   *  (after I/O), never synchronously in the caller. */
  const refresh = useCallback((q?: string) => {
    const query = q?.trim().toLowerCase() ?? ""
    const applyFilter = (list: AiConversationSummary[]) =>
      query ? list.filter((c) => c.title.toLowerCase().includes(query)) : list

    // 1) the browser copy first — instant, survives sessions
    return idbConversationsSummary()
      .then((local) => {
        if (local.length) setConversations(applyFilter(local))
        // 2) server back-fill (pre-v23 history, other browsers) — best effort
        return fetch("/api/ai/conversations")
          .then((r) => (r.ok ? r.json() : null))
          .catch(() => null)
          .then((list) => ({ local, list }))
      })
      .then(({ local, list }) => {
        if (!Array.isArray(list)) return true
        const have = new Set(local.map((c) => c.id))
        const missing = (list as AiConversationSummary[])
          .filter((s) => !have.has(s.id))
          .slice(0, 30)
        if (!missing.length) return true
        return Promise.all(
          missing.map((s) =>
            fetch(`/api/ai/conversations/${s.id}`)
              .then((r) => (r.ok ? r.json() : null))
              .catch(() => null)
              .then((full) => {
                const msgs = full?.messages
                if (Array.isArray(msgs) && msgs.length) {
                  return idbSaveConversation(
                    s.id,
                    s.title ?? full.title ?? "Conversation",
                    msgs,
                    { serverId: true }
                  ).then(() => true)
                }
                return false
              })
          )
        ).then((imported: boolean[]) => {
          if (imported.some(Boolean)) {
            return idbConversationsSummary().then((merged) => {
              setConversations(applyFilter(merged))
              return true
            })
          }
          return true
        })
      })
      .catch(() => true)
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  const remove = useCallback(
    async (id: string) => {
      await idbDeleteConversation(id) // v23 — the browser copy goes too
      await fetch(`/api/ai/conversations/${id}`, { method: "DELETE" }).catch(() => {})
      setConversations((prev) => prev?.filter((c) => c.id !== id) ?? null)
    },
    []
  )

  /** v21: rename a conversation (optimistic, server-clamped title). */
  const rename = useCallback(async (id: string, title: string) => {
    const clean = title.trim().slice(0, 90)
    if (!clean) return
    setConversations((prev) => prev?.map((c) => (c.id === id ? { ...c, title: clean } : c)) ?? null)
    await idbPatchConversation(id, { title: clean }) // v23
    await fetch(`/api/ai/conversations/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "rename", title: clean }),
    }).catch(() => {})
  }, [])

  /** v21: pin/unpin a conversation to the top of the rail. */
  const setPinned = useCallback(async (id: string, pinned: boolean) => {
    setConversations(
      (prev) =>
        prev
          ?.map((c) => (c.id === id ? { ...c, pinned } : c))
          .sort((a, b) => Number(b.pinned ?? false) - Number(a.pinned ?? false)) ?? null
    )
    await idbPatchConversation(id, { pinned }) // v23
    await fetch(`/api/ai/conversations/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "pin", pinned }),
    }).catch(() => {})
  }, [])

  return { conversations, refresh, remove, rename, setPinned }
}
