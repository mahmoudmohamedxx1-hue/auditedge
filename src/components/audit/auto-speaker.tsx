"use client"

import { useEffect, useRef } from "react"
import { useTtsQueue } from "@/hooks/use-tts-queue"

/** Invisible component that reads an answer aloud automatically.
 *
 *  The parent bumps `signal` (a fresh `{ nonce, text }` object) every time
 *  a streamed answer completes while automatic reading is enabled — this
 *  component then speaks it through the shared TTS pipeline. Because the
 *  effect keys on the signal object's identity, re-rendering with new
 *  `onDone` callbacks or changing `signal.text` mid-stream never restarts
 *  playback; only a brand-new signal (a new completed answer) does.
 *
 *  onDone(completed, hadError) mirrors useTtsQueue — hands-free mode uses
 *  it to open the microphone after the answer has been spoken. */
export function AutoSpeaker({
  signal,
  onDone,
}: {
  signal: { nonce: number; text: string } | null
  onDone?: (completed: boolean, hadError: boolean) => void
}) {
  const { speak } = useTtsQueue({ onDone })

  // speak() changes identity when the voice/speed pref changes — re-runs of
  // this effect must not restart playback, so gate on the signal's nonce
  const lastNonceRef = useRef(-1)
  useEffect(() => {
    if (!signal || !signal.text.trim()) return
    if (signal.nonce === lastNonceRef.current) return
    lastNonceRef.current = signal.nonce
    void speak(signal.text)
  }, [signal, speak])

  return null
}
