"use client"

import { useTtsQueue } from "@/hooks/use-tts-queue"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { Loader2, Square, Volume2 } from "lucide-react"

/** Speak an AI answer aloud: markdown stripped, sentence-aware chunking
 *  (TTS API limit), chunks fetched and played in order (useTtsQueue — the
 *  pipeline shared with automatic answer reading and hands-free mode).
 *  The voice and speed come from the app store (set via the VoicePicker,
 *  persisted). One playback at a time across the whole app. Shows a stop
 *  button while playing; stop halts the CURRENT chunk too. */
export function SpeakButton({ text, className }: { text: string; className?: string }) {
  const { state, isCurrent, speak, stop } = useTtsQueue({
    onError: (msg) => toast.error(msg),
  })

  return (
    <button
      onClick={() => (state === "idle" ? void speak(text) : stop())}
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
