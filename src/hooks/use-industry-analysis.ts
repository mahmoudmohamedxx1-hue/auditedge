"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import type { AiModelId } from "@/lib/models"

/** The AI Industry Risk Analyst hook: streams a deep-dive profile for any
 *  industry from /api/ai/industry, keeps a small local history (per language
 *  badge), and aborts cleanly on unmount. */

export type IndustrySource = {
  url: string
  name: string
  snippet: string
  host_name: string
}

export type IndustryAnalysis = {
  id: string
  industry: string
  lang: "en" | "ar"
  /** The profile has been generated if the analysis came from history */
  content: string
  sources: IndustrySource[]
  createdAt: number
  /** which engine served the analysis (model id or engine id; null = unknown) */
  model: string | null
}

export type IndustryStatus = "idle" | "searching" | "search-failed" | "writing"

const HISTORY_KEY = "auditedge-industry-analyses-v1"
const HISTORY_MAX = 8

function loadHistory(): IndustryAnalysis[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as IndustryAnalysis[]
    return Array.isArray(parsed) ? parsed.slice(0, HISTORY_MAX) : []
  } catch {
    return []
  }
}

export function useIndustryAnalysis() {
  const [status, setStatus] = useState<IndustryStatus>("idle")
  const [industry, setIndustry] = useState("")
  const [content, setContent] = useState("")
  const [sources, setSources] = useState<IndustrySource[]>([])
  const [modelUsed, setModelUsed] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [history, setHistory] = useState<IndustryAnalysis[]>([])
  const [viewing, setViewing] = useState<IndustryAnalysis | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  // hydrate history after SSR
  useEffect(() => {
    setHistory(loadHistory())
  }, [])

  // abort on unmount
  useEffect(
    () => () => {
      abortRef.current?.abort()
    },
    []
  )

  const stop = useCallback(() => {
    abortRef.current?.abort()
    abortRef.current = null
    setStatus("idle")
  }, [])

  const persist = useCallback((entry: IndustryAnalysis) => {
    setHistory((prev) => {
      const next = [entry, ...prev.filter((h) => h.id !== entry.id)].slice(0, HISTORY_MAX)
      try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(next))
      } catch {}
      return next
    })
  }, [])

  const removeHistory = useCallback((id: string) => {
    setHistory((prev) => {
      const next = prev.filter((h) => h.id !== id)
      try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(next))
      } catch {}
      return next
    })
    setViewing((v) => (v?.id === id ? null : v))
  }, [])

  /** Ask the analyst about an industry. */
  const ask = useCallback(
    async (name: string, lang: "en" | "ar", model?: AiModelId) => {
      const clean = name.trim()
      if (!clean || abortRef.current) return

      const controller = new AbortController()
      abortRef.current = controller

      setError(null)
      setNotice(null)
      setModelUsed(null)
      setViewing(null)
      setIndustry(clean)
      setContent("")
      setSources([])
      setStatus("searching")

      try {
        const res = await fetch("/api/ai/industry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({ industry: clean, lang, model }),
        })
        if (!res.ok || !res.body) {
          const j = await res.json().catch(() => ({}))
          throw new Error(j?.error ?? "The analyst is unavailable right now")
        }

        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let buffer = ""
        let full = ""
        let gotSources: IndustrySource[] = []
        let usedModel: string | null = null

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
              if (s === "searching") setStatus("searching")
              else if (s === "search-failed") setStatus("search-failed")
              else if (s === "writing") setStatus("writing")
            } else if (evt.type === "sources") {
              gotSources = (evt.sources as IndustrySource[]) ?? []
              setSources(gotSources)
            } else if (evt.type === "meta") {
              usedModel = ((evt.engine as string) ?? (evt.model as string)) ?? null
              setModelUsed(usedModel)
              if (typeof evt.notice === "string") setNotice(evt.notice)
            } else if (evt.type === "delta") {
              full += evt.text as string
              setContent(full)
            } else if (evt.type === "error") {
              throw new Error((evt.error as string) ?? "The analyst hit an error")
            }
          }
        }

        if (full.trim()) {
          persist({
            id: `ia-${Date.now()}`,
            industry: clean,
            lang,
            content: full,
            sources: gotSources,
            createdAt: Date.now(),
            model: usedModel,
          })
        }
      } catch (e) {
        const aborted = e instanceof DOMException && e.name === "AbortError"
        if (!aborted) {
          setError(e instanceof Error ? e.message : "The analyst hit an error. Please try again.")
        }
      } finally {
        abortRef.current = null
        setStatus("idle")
      }
    },
    [persist]
  )

  const viewAnalysis = useCallback((entry: IndustryAnalysis) => {
    stop()
    setError(null)
    setViewing(entry)
    setIndustry(entry.industry)
    setContent(entry.content)
    setSources(entry.sources)
    setModelUsed(entry.model)
    setNotice(null)
  }, [stop])

  const clearViewing = useCallback(() => {
    stop()
    setViewing(null)
    setContent("")
    setSources([])
    setIndustry("")
    setModelUsed(null)
  }, [stop])

  const busy = status !== "idle"

  return {
    status,
    busy,
    industry,
    content,
    sources,
    modelUsed,
    notice,
    error,
    history,
    viewing,
    ask,
    stop,
    removeHistory,
    viewAnalysis,
    clearViewing,
  }
}
