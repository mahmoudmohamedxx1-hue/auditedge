"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { splitForTts, stripMarkdown } from "@/lib/audio"
import { claimTts, releaseTts, stopAllTts, stopTtsFor, ttsOwner } from "@/lib/tts-playback"

/** The app's single TTS playback pipeline (v19).
 *
 *  Powers every read-aloud surface: the manual SpeakButton, the automatic
 *  answer reading in the tutor (AutoSpeaker) and hands-free voice mode.
 *  One playback at a time across the whole app — coordinated through the
 *  shared tts-playback registry, so an auto-started answer is interrupted
 *  by any manual speak/preview exactly like a manual playback would be.
 *
 *  onDone(completed, hadError) fires once per speak() call when the queue
 *  finishes: completed=true only when every chunk played out naturally
 *  (false when interrupted by another playback or a stop). onError(msg)
 *  fires when speech generation itself fails (manual surfaces toast it). */
export function useTtsQueue(opts?: {
  onDone?: (completed: boolean, hadError: boolean) => void
  /** Called with a human-readable message when speech generation fails.
   *  Manual buttons turn this into a toast; auto-speak stays silent. */
  onError?: (msg: string) => void
}) {
  const [state, setState] = useState<"idle" | "loading" | "playing">("idle")
  const ownerRef = useRef<symbol>(Symbol())
  const [isCurrent, setIsCurrent] = useState(false)
  const voice = useAppStore((s) => s.ttsVoice)
  const speed = useAppStore((s) => s.ttsSpeed)

  // keep the callbacks fresh without re-creating speak()
  const onDoneRef = useRef(opts?.onDone)
  const onErrorRef = useRef(opts?.onError)
  useEffect(() => {
    onDoneRef.current = opts?.onDone
    onErrorRef.current = opts?.onError
  }, [opts?.onDone, opts?.onError])

  // reflect when another surface's playback takes over
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
  const fetchChunk = useCallback(
    async (chunk: string, v: string, s: number): Promise<Blob> => {
      for (let attempt = 0; attempt < 2; attempt++) {
        const res = await fetch("/api/ai/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: chunk, voice: v, speed: s }),
        })
        if (res.ok) return res.blob()
        const j = (await res.json().catch(() => ({}))) as { error?: string }
        if (attempt === 1) throw new Error(j.error || "Speech generation failed")
        await new Promise((r) => setTimeout(r, 700))
      }
      throw new Error("Speech generation failed")
    },
    []
  )

  const speak = useCallback(
    async (text: string) => {
      // take over from any other playback (other buttons + voice previews)
      stopAllTts()

      const owner = Symbol()
      ownerRef.current = owner
      let aborted = false
      let hadError = false
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
          const blob = await fetchChunk(chunk, voice, speed)
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
        hadError = true
        const msg =
          e instanceof Error && e.message ? e.message : "Could not generate speech"
        onErrorRef.current?.(msg)
      } finally {
        const completed = !aborted && !hadError
        releaseTts(owner)
        setState("idle")
        setIsCurrent(false)
        onDoneRef.current?.(completed, hadError)
      }
    },
    [fetchChunk, voice, speed]
  )

  return { state, isCurrent, speak, stop }
}
