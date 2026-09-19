"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { splitForTts, stripMarkdown } from "@/lib/audio"
import { claimTts, releaseTts, stopAllTts, stopTtsFor, ttsOwner } from "@/lib/tts-playback"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { Loader2, Square, Volume2 } from "lucide-react"

/** Speak an AI answer aloud: markdown stripped, sentence-aware chunking
 *  (TTS API limit), chunks fetched and played in order. The voice and
 *  speed come from the app store (set via the VoicePicker, persisted).
 *  One playback at a time across the whole app — coordinated through the
 *  shared tts-playback registry with the picker's preview button.
 *  Shows a stop button while playing; stop halts the CURRENT chunk too. */
export function SpeakButton({ text, className }: { text: string; className?: string }) {
  const [state, setState] = useState<"idle" | "loading" | "playing">("idle")
  const ownerRef = useRef<symbol>(Symbol())
  const [isCurrent, setIsCurrent] = useState(false)
  const voice = useAppStore((s) => s.ttsVoice)
  const speed = useAppStore((s) => s.ttsSpeed)

  // reflect when another button's playback takes over
  useEffect(() => {
    const check = () => setIsCurrent(ttsOwner() === ownerRef.current)
    const iv = setInterval(check, 400)
    return () => clearInterval(iv)
  }, [])

  const stop = useCallback(() => {
    stopTtsFor(ownerRef.current)
    setState("idle")
    setIsCurrent(false)
  }, [])

  /** Fetch one TTS chunk; the route already retries transient upstream
   *  failures — one extra client retry covers a route-level hiccup. */
  const fetchChunk = async (chunk: string): Promise<Blob> => {
    for (let attempt = 0; attempt < 2; attempt++) {
      const res = await fetch("/api/ai/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: chunk, voice, speed }),
      })
      if (res.ok) return res.blob()
      const j = (await res.json().catch(() => ({}))) as { error?: string }
      if (attempt === 1) throw new Error(j.error || "Speech generation failed")
      await new Promise((r) => setTimeout(r, 700))
    }
    throw new Error("Speech generation failed")
  }

  const speak = async () => {
    if (state !== "idle") {
      stop()
      return
    }
    // take over from any other playback (other buttons + voice previews)
    stopAllTts()

    const owner = Symbol()
    ownerRef.current = owner
    let aborted = false
    let activeAudio: HTMLAudioElement | null = null
    claimTts(owner, () => {
      aborted = true
      // halt the chunk that is playing RIGHT NOW, not just the next ones
      if (activeAudio) {
        activeAudio.pause()
        activeAudio.src = ""
      }
    })
    setState("loading")
    setIsCurrent(true)

    try {
      const clean = stripMarkdown(text)
      const chunks = splitForTts(clean)
      for (const chunk of chunks) {
        if (aborted) break
        const blob = await fetchChunk(chunk)
        if (aborted) break
        setState("playing")
        await new Promise<void>((resolve) => {
          const url = URL.createObjectURL(blob)
          const audio = new Audio(url)
          activeAudio = audio
          let settled = false
          const done = () => {
            if (settled) return
            settled = true
            URL.revokeObjectURL(url)
            activeAudio = null
            resolve()
          }
          audio.onended = done
          audio.onpause = done // stop button pauses → resolve immediately
          audio.onerror = done // don't kill the whole queue over one chunk
          void audio.play().catch(() => {
            // autoplay blocked etc. — don't kill the queue
            done()
          })
        })
      }
    } catch (e) {
      if (!aborted)
        toast.error(e instanceof Error && e.message ? e.message : "Could not generate speech")
    } finally {
      releaseTts(owner)
      setState("idle")
      setIsCurrent(false)
    }
  }

  return (
    <button
      onClick={() => void speak()}
      aria-label={state === "idle" ? "Read answer aloud" : "Stop reading"}
      title={state === "idle" ? "Read aloud" : "Stop reading"}
      className={cn(
        "rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring",
        isCurrent && state !== "idle" && "text-primary",
        className
      )}
    >
      {state === "loading" ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : state === "playing" ? (
        <Square className="h-3.5 w-3.5 fill-current" />
      ) : (
        <Volume2 className="h-3.5 w-3.5" />
      )}
    </button>
  )
}
