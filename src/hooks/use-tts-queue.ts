"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { splitForTts, stripMarkdown } from "@/lib/audio"
import {
  claimTts,
  isTtsPaused,
  registerTtsAudio,
  releaseTts,
  stopAllTts,
  stopTtsFor,
  toggleTtsPause,
  ttsOwner,
} from "@/lib/tts-playback"

/** The app's single TTS playback pipeline (v19).
 *
 *  Powers every read-aloud surface: the manual SpeakButton, the automatic
 *  answer reading in the tutor (AutoSpeaker) and hands-free voice mode.
 *  One playback at a time across the whole app — coordinated through the
 *  shared tts-playback registry, so an auto-started answer is interrupted
 *  by any manual speak/preview exactly like a manual playback would be.
 *
 *  v21: (a) double-buffered prefetch — chunk N+1 is fetched while chunk N
 *  plays, killing the audible gap between chunks on long answers; (b) global
 *  pause/resume — a user pause holds the current chunk open (the queue
 *  waits) instead of treating it as a stop.
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
  const [paused, setPaused] = useState(false)
  const voice = useAppStore((s) => s.ttsVoice)
  const speed = useAppStore((s) => s.ttsSpeed)
  // v21: per-language voice memory (sent along so the route's "auto"
  // resolution can honor Shakir-for-Arabic + Ryan-for-English preferences)
  const voiceAr = useAppStore((s) => s.ttsVoiceAr)
  const voiceEn = useAppStore((s) => s.ttsVoiceEn)

  // keep the callbacks fresh without re-creating speak()
  const onDoneRef = useRef(opts?.onDone)
  const onErrorRef = useRef(opts?.onError)
  useEffect(() => {
    onDoneRef.current = opts?.onDone
    onErrorRef.current = opts?.onError
  }, [opts?.onDone, opts?.onError])

  // reflect when another surface's playback takes over (+ pause state)
  useEffect(() => {
    const check = () => {
      const mine = ttsOwner() === ownerRef.current
      setIsCurrent(mine)
      setPaused(mine && isTtsPaused())
    }
    const iv = setInterval(check, 400)
    return () => clearInterval(iv)
  }, [])

  const stop = useCallback(() => {
    stopTtsFor(ownerRef.current)
    setState("idle")
    setIsCurrent(false)
  }, [])

  /** v21: pause/resume the CURRENT playback (acts globally through the
   *  registry, so any SpeakButton can control an auto-started answer). */
  const togglePause = useCallback(() => {
    toggleTtsPause()
    setPaused(isTtsPaused())
  }, [])

  /** Fetch one TTS chunk; the route already retries transient upstream
   *  failures — one extra client retry covers a route-level hiccup. */
  const fetchChunk = useCallback(
    async (chunk: string, v: string, s: number): Promise<Blob> => {
      for (let attempt = 0; attempt < 2; attempt++) {
        const res = await fetch("/api/ai/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: chunk,
            voice: v,
            speed: s,
            ...(v === "auto" ? { voiceAr, voiceEn } : {}),
          }),
        })
        if (res.ok) return res.blob()
        const j = (await res.json().catch(() => ({}))) as { error?: string }
        if (attempt === 1) throw new Error(j.error || "Speech generation failed")
        await new Promise((r) => setTimeout(r, 700))
      }
      throw new Error("Speech generation failed")
    },
    [voiceAr, voiceEn]
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
        registerTtsAudio(null)
      })
      setState("loading")
      setIsCurrent(true)

      try {
        const clean = stripMarkdown(text)
        const chunks = splitForTts(clean)
        // v21 double-buffer: the next chunk's audio is fetched while the
        // current one plays — no dead air between chunks
        let prefetch: Promise<Blob | null> | null = null
        for (let i = 0; i < chunks.length; i++) {
          if (aborted) break
          let blob: Blob | null = null
          try {
            blob = prefetch ? await prefetch : await fetchChunk(chunks[i], voice, speed)
          } catch {
            blob = null
          }
          prefetch = null
          if (aborted) break
          // prefetch failed or first fetch failed — one fresh attempt inline
          if (!blob) {
            try {
              blob = await fetchChunk(chunks[i], voice, speed)
            } catch (e) {
              throw e // normal error path — toast + end the queue
            }
          }
          if (aborted) break
          // kick off the next fetch while this chunk plays
          if (i + 1 < chunks.length) {
            prefetch = fetchChunk(chunks[i + 1], voice, speed).catch(() => null)
          }
          setState("playing")
          await new Promise<void>((resolve) => {
            const url = URL.createObjectURL(blob!)
            const audio = new Audio(url)
            activeAudio = audio
            registerTtsAudio(audio)
            let settled = false
            const done = () => {
              if (settled) return
              settled = true
              URL.revokeObjectURL(url)
              activeAudio = null
              registerTtsAudio(null)
              resolve()
            }
            audio.onended = done
            audio.onerror = done // don't kill the whole queue over one chunk
            // v21: a USER pause holds this promise open (the registry knows
            // it was a deliberate pause); a stop/claim interrupt resolves it
            audio.onpause = () => {
              if (isTtsPaused()) return
              done()
            }
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
        setPaused(false)
        onDoneRef.current?.(completed, hadError)
      }
    },
    [fetchChunk, voice, speed]
  )

  return { state, isCurrent, paused, speak, stop, togglePause }
}
