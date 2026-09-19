"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { audioBlobToWavBase64 } from "@/lib/audio"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { AudioLines, Mic, Square } from "lucide-react"

const MAX_MS = 60_000 // hard cap: one minute per recording

/** Microphone button for the AI tutor composers: click to record, click to
 *  stop — the clip is converted to WAV and transcribed into the composer. */
export function MicButton({
  onTranscript,
  disabled,
  compact,
}: {
  onTranscript: (text: string) => void
  disabled?: boolean
  compact?: boolean
}) {
  const [state, setState] = useState<"idle" | "recording" | "transcribing">("idle")
  const [seconds, setSeconds] = useState(0)
  const recorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])
  const streamRef = useRef<MediaStream | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const cleanup = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = null
    recorderRef.current?.stream.getTracks().forEach((t) => t.stop())
    recorderRef.current = null
    streamRef.current?.getTracks().forEach((t) => t.stop())
    streamRef.current = null
  }, [])

  useEffect(() => () => cleanup(), [cleanup])

  const transcribe = async (blob: Blob) => {
    setState("transcribing")
    try {
      const base64 = await audioBlobToWavBase64(blob)
      const res = await fetch("/api/ai/asr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ audio: base64 }),
      })
      const j = (await res.json().catch(() => ({}))) as { text?: string; error?: string }
      if (!res.ok || !j.text) throw new Error(j.error || "Transcription failed")
      onTranscript(j.text)
    } catch (e) {
      toast.error(e instanceof Error && e.message ? e.message : "Could not transcribe your speech")
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
      toast.error("Your browser does not support microphone recording")
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
          toast.error("Recording was too short — tap the mic, then speak for a few seconds")
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
          toast.info("Recording stopped at one minute")
          stopRecording()
        }
      }, 500)
    } catch {
      cleanup()
      toast.error("Microphone access was denied — allow it in your browser permissions")
      setState("idle")
    }
  }

  const size = compact ? "h-7 w-7" : "h-8 w-8"

  return (
    <button
      type="button"
      onClick={() => void start()}
      disabled={disabled || state === "transcribing"}
      aria-label={state === "recording" ? "Stop recording and transcribe" : "Speak your question"}
      title={state === "recording" ? "Stop and transcribe" : state === "transcribing" ? "Transcribing…" : "Speak your question"}
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
