"use client"

import { useTtsQueue } from "@/hooks/use-tts-queue"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { useAppStore } from "@/store/useAppStore"
import { tt } from "@/lib/i18n"
import { Loader2, Pause, Play, Square, Volume2 } from "lucide-react"

/** Speak an AI answer aloud: markdown stripped, sentence-aware chunking
 *  (TTS API limit), chunks fetched (double-buffered) and played in order
 *  (useTtsQueue — the pipeline shared with automatic answer reading and
 *  hands-free mode). The voice and speed come from the app store (set via
 *  the VoicePicker, persisted). One playback at a time across the whole
 *  app. v21: while playing, the button becomes pause/resume + a stop
 *  control — pause holds the current chunk open, stop halts it. */
export function SpeakButton({ text, className }: { text: string; className?: string }) {
  const lang = useAppStore((s) => s.lang)
  const { state, isCurrent, paused, speak, stop, togglePause } = useTtsQueue({
    onError: (msg) => toast.error(msg),
  })
  const playing = isCurrent && state === "playing"

  return (
    <span className={cn("inline-flex items-center gap-0.5", className)}>
      {playing ? (
        <>
          <button
            onClick={togglePause}
            aria-label={paused ? tt("tts.resume", lang) : tt("tts.pause", lang)}
            title={paused ? tt("tts.resume", lang) : tt("tts.pause", lang)}
            className="rounded-lg p-1.5 text-primary transition-colors hover:bg-primary/10 focus-ring"
          >
            {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          </button>
          <button
            onClick={stop}
            aria-label={tt("tts.stop", lang)}
            title={tt("tts.stop", lang)}
            className="rounded-lg p-1.5 text-primary/80 transition-colors hover:bg-secondary focus-ring"
          >
            <Square className="h-3 w-3 fill-current" />
          </button>
        </>
      ) : (
        <button
          onClick={() => (state === "idle" ? void speak(text) : stop())}
          aria-label={state === "idle" ? tt("tts.speak", lang) : tt("tts.stop", lang)}
          title={state === "idle" ? tt("tts.speak", lang) : tt("tts.stop", lang)}
          className={cn(
            "rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring",
            isCurrent && state !== "idle" && "text-primary",
            className
          )}
        >
          {state === "loading" ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Volume2 className="h-3.5 w-3.5" />
          )}
        </button>
      )}
    </span>
  )
}
