"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AiChatMessage, AiContext, AiConversationSummary } from "@/lib/audit-types"
import type { AiModelId } from "@/lib/models"

export type AiStatus = "idle" | "thinking" | "searching" | "writing"

/** An image the learner attached to a tutor message. */
export type AiImageAttachment = {
  /** Full-resolution data URL sent to the vision model */
  dataUrl: string
  /** Small thumbnail data URL persisted with the conversation */
  thumb: string
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
        image?: AiImageAttachment | null
      }
    ): Promise<{ ok: boolean; conversationId?: string; text?: string }> => {
      const message = text.trim()
      if (!message || abortRef.current) return { ok: false }

      setError(null)
      setSearchQuery(null)
      setSearchScope(null)
      setStatus("thinking")
      setMessages((prev) => [
        ...prev,
        {
          id: `tmp-u-${Date.now()}`,
          role: "user",
          content: message,
          sources: [],
          imageUrl: options?.image?.thumb ?? null,
        },
        { id: `tmp-a-${Date.now()}`, role: "assistant", content: "", sources: [] },
      ])

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
              if (cid) setConversationId(cid)
            } else if (evt.type === "meta") {
              // which engine served the answer (+ an informational notice)
              const modelUsed = (evt.model as string) ?? null
              const notice = (evt.notice as string) ?? null
              setMessages((prev) => {
                const next = [...prev]
                const last = next[next.length - 1]
                if (last) {
                  const updated: AiChatMessage = { ...last, modelUsed }
                  if (notice) updated.notice = notice
                  next[next.length - 1] = updated
                }
                return next
              })
            } else if (evt.type === "sources") {
              const sources = (evt.sources as AiChatMessage["sources"]) ?? []
              setMessages((prev) => {
                const next = [...prev]
                const last = next[next.length - 1]
                if (last) next[next.length - 1] = { ...last, sources }
                return next
              })
            } else if (evt.type === "delta") {
              const chunk = evt.text as string
              finalText += chunk
              setMessages((prev) => {
                const next = [...prev]
                const last = next[next.length - 1]
                if (last) next[next.length - 1] = { ...last, content: last.content + chunk }
                return next
              })
            } else if (evt.type === "done") {
              finalConversationId = evt.conversationId as string
              setConversationId(finalConversationId ?? null)
              setMessages((prev) => {
                const next = [...prev]
                const last = next[next.length - 1]
                if (last) next[next.length - 1] = { ...last, id: (evt.messageId as string) ?? last.id }
                return next
              })
            } else if (evt.type === "error") {
              throw new Error((evt.error as string) ?? "The tutor hit an error")
            }
          }
        }

        opts?.conversationsRefresh?.()
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
          setMessages((prev) => {
            const next = [...prev]
            const last = next[next.length - 1]
            if (last && !last.content) next.pop()
            return next
          })
        } else if (aborted) {
          // v21 stop-honesty: keep the partial answer and mark it — the server
          // persists exactly the same partial text with the same marker, so
          // reloading the conversation matches what the learner read
          setMessages((prev) => {
            const next = [...prev]
            const last = next[next.length - 1]
            if (last && last.role === "assistant" && last.content.trim() && !last.content.includes("*(stopped")) {
              next[next.length - 1] = { ...last, content: `${last.content}\n\n*(stopped · أُوقف)*` }
            }
            return next
          })
          opts?.conversationsRefresh?.()
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
   *  If the last message is the user's, an assistant reply may still be
   *  generating server-side (e.g. popup expanded mid-stream) — poll briefly. */
  const load = useCallback(
    async (id: string | null, attempt = 0) => {
      stop()
      setError(null)
      setConversationId(id)
      if (!id) {
        setMessages([])
        return
      }
      try {
        const res = await fetch(`/api/ai/conversations/${id}`)
        if (!res.ok) {
          setMessages([])
          return
        }
        const convo = await res.json()
        const msgs: AiChatMessage[] = convo.messages ?? []
        setMessages(msgs)
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
        setMessages([])
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

  const refresh = useCallback((q?: string) => {
    const url = q && q.trim() ? `/api/ai/conversations?q=${encodeURIComponent(q.trim())}` : "/api/ai/conversations"
    return fetch(url)
      .then((r) => (r.ok ? r.json() : null))
      .then((list) => {
        if (Array.isArray(list)) setConversations(list)
        return true
      })
      .catch(() => false)
  }, [])

  useEffect(() => {
    refresh()
  }, [refresh])

  const remove = useCallback(
    async (id: string) => {
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
    await fetch(`/api/ai/conversations/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "pin", pinned }),
    }).catch(() => {})
  }, [])

  return { conversations, refresh, remove, rename, setPinned }
}
