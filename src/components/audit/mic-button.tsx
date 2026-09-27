"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { audioBlobToWavBase64 } from "@/lib/audio"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { AudioLines, Mic, Square } from "lucide-react"
import { useAppStore } from "@/store/useAppStore"
import { tt } from "@/lib/i18n"

const MAX_MS = 60_000 // hard cap: one minute per recording

/** Microphone button for the AI tutor composers: click to record, click to
 *  stop — the clip is converted to WAV and transcribed into the composer.
 *  `autoStartSignal` lets a parent start recording programmatically (hands-
 *  free voice mode bumps a counter after the spoken answer finishes); it is
 *  ignored while recording/transcribing so it can never interrupt itself.
 *  v21: fully bilingual toasts/aria labels + the UI language is passed to
 *  the ASR route as a hint (ar → Egyptian-Arabic-friendly transcription). */
export function MicButton({
  onTranscript,
  disabled,
  compact,
  autoStartSignal,
}: {
  onTranscript: (text: string) => void
  disabled?: boolean
  compact?: boolean
  autoStartSignal?: number
}) {
  const lang = useAppStore((s) => s.lang)
  const [state, setState] = useState<"idle" | "recording" | "transcribing">("idle")
  const [seconds, setSeconds] = useState(0)
  const recorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const streamRef = useRef<MediaStream | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const stateRef = useRef(state)
  const startRef = useRef<(() => Promise<void>) | null>(null)
  stateRef.current = state

  const cleanup = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = null
    recorderRef.current?.stream.getTracks().forEach((t) => t.stop())
    recorderRef.current = null
    streamRef.current?.getTracks().forEach((t) => t.stop())
    streamRef.current = null
  }, [])

  useEffect(() => () => cleanup(), [cleanup])

  // hands-free voice mode: the parent bumps autoStartSignal to open the mic
  // (e.g. right after a spoken answer finishes). Ignored while recording or
  // transcribing so it can never interrupt an in-flight capture.
  const lastSignalRef = useRef<number | null>(null)
  useEffect(() => {
    if (autoStartSignal == null || autoStartSignal === lastSignalRef.current) return
    lastSignalRef.current = autoStartSignal
    if (stateRef.current === "idle" && startRef.current) {
      setTimeout(() => {
        if (stateRef.current === "idle") void startRef.current?.()
      }, 350) // let the spoken answer's audio tail die down first
    }
  }, [autoStartSignal])

  const transcribe = async (blob: Blob) => {
    setState("transcribing")
    try {
      const base64 = await audioBlobToWavBase64(blob)
      const res = await fetch("/api/ai/asr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ audio: base64, lang }),
      })
      const j = (await res.json().catch(() => ({}))) as { text?: string; error?: string }
      if (!res.ok || !j.text) throw new Error(j.error || tt("ai.asrFailed", lang))
      onTranscript(j.text)
    } catch (e) {
      toast.error(e instanceof Error && e.message ? e.message : tt("ai.asrFailed", lang))
    } finally {
      setState("idle")
      setSeconds(0)
    }
  }

  const stopRecording = () => {
    const rec = recorderRef.current
    if (rec && rec.state !== "inactive") rec.stop() // onstop handler sends to transcribe
  }

  const start = async () => {
    if (state !== "idle") {
      if (state === "recording") stopRecording()
      return
    }
    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      toast.error(tt("ai.micUnsupported", lang))
      return
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      const rec = new MediaRecorder(stream)
      recorderRef.current = rec
      chunksRef.current = []

      rec.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data)
      }
      rec.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: rec.mimeType || "audio/webm" })
        cleanup()
        if (blob.size < 1000) {
          toast.error(tt("ai.micTooShort", lang))
          setState("idle")
          setSeconds(0)
          return
        }
        await transcribe(blob)
      }

      rec.start()
      setState("recording")
      setSeconds(0)
      const startedAt = Date.now()
      timerRef.current = setInterval(() => {
        const s = Math.floor((Date.now() - startedAt) / 1000)
        setSeconds(s)
        if (Date.now() - startedAt >= MAX_MS) {
          toast.info(tt("ai.micCapped", lang))
          stopRecording()
        }
      }, 500)
    } catch {
      cleanup()
      toast.error(tt("ai.micDenied", lang))
      setState("idle")
    }
  }
  startRef.current = () => start()

  const size = compact ? "h-7 w-7" : "h-8 w-8"

  return (
    <button
      type="button"
      onClick={() => void start()}
      disabled={disabled || state === "transcribing"}
      aria-label={state === "recording" ? tt("ai.micStop", lang) : tt("ai.micSpeak", lang)}
      title={
        state === "recording"
          ? tt("ai.micStop", lang)
          : state === "transcribing"
            ? tt("ai.micTranscribing", lang)
            : tt("ai.micSpeak", lang)
      }
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center rounded-full transition-colors focus-ring",
        size,
        state === "idle" && "text-muted-foreground hover:bg-secondary hover:text-foreground",
        state === "recording" && "bg-destructive text-white",
        state === "transcribing" && "text-primary"
      )}
    >
      {state === "recording" ? (
        <>
          <Square className={compact ? "h-2.5 w-2.5" : "h-3 w-3"} fill="currentColor" />
          <span className="absolute -right-2 -top-2 rounded-full bg-destructive px-1.5 py-px text-[9px] font-semibold tabular-nums text-white shadow-sm">
            {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}
          </span>
        </>
      ) : state === "transcribing" ? (
        <AudioLines className={compact ? "h-3.5 w-3.5 animate-pulse" : "h-4 w-4 animate-pulse"} />
      ) : (
        <Mic className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
      )}
    </button>
  )
}
