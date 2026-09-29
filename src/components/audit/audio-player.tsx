"use client"

/** v24 — the sticky in-website podcast player.
 *
 *  Rendered once at the app-shell level (src/app/page.tsx) so it keeps
 *  playing across every view change. Streams the lesson MP3s synthesized
 *  by /api/podcast/lesson/[id], caches their object URLs (see lib/player),
 *  wires lock-screen / media-key controls through the Media Session API,
 *  and offers the full transport: play/pause, ±10s, seek, speed, queue
 *  position, download and close. */
import { useCallback, useEffect, useRef, useState } from "react"
import {
  usePlayerStore,
  cachedObjectUrl,
  cacheObjectUrl,
  evictObjectUrl,
  PLAYER_RATES,
  currentTrack,
} from "@/lib/player"
import { useAppStore } from "@/store/useAppStore"
import { tt } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import {
  Download,
  Gauge,
  Loader2,
  Pause,
  Play,
  RotateCcw,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  X,
} from "lucide-react"

function fmt(sec: number): string {
  if (!Number.isFinite(sec) || sec < 0) return "0:00"
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${m}:${String(s).padStart(2, "0")}`
}

export function AudioPlayer() {
  const lang = useAppStore((s) => s.lang)
  const queue = usePlayerStore((s) => s.queue)
  const index = usePlayerStore((s) => s.index)
  const status = usePlayerStore((s) => s.status)
  const position = usePlayerStore((s) => s.position)
  const duration = usePlayerStore((s) => s.duration)
  const rate = usePlayerStore((s) => s.rate)
  const toggle = usePlayerStore((s) => s.toggle)
  const next = usePlayerStore((s) => s.next)
  const prev = usePlayerStore((s) => s.prev)
  const seek = usePlayerStore((s) => s.seek)
  const skip = usePlayerStore((s) => s.skip)
  const setRate = usePlayerStore((s) => s.setRate)
  const setStatus = usePlayerStore((s) => s.setStatus)
  const setPosition = usePlayerStore((s) => s.setPosition)
  const setDuration = usePlayerStore((s) => s.setDuration)
  const retry = usePlayerStore((s) => s.retry)
  const close = usePlayerStore((s) => s.close)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const objectUrlRef = useRef<string | null>(null)
  const [muted, setMuted] = useState(false)
  const [volume, setVolumeState] = useState(1)

  const track = queue[index] ?? null
  const loading = status === "loading"

  /* ---------- load + play the current track ---------- */
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !track || status === "idle") return

    let cancelled = false
    const wasPlaying = status === "playing" || status === "loading"

    const load = async () => {
      // instant replay from the in-memory cache
      const cached = cachedObjectUrl(track)
      if (cached) {
        if (objectUrlRef.current && objectUrlRef.current !== cached) {
          // previous URL stays in the cache map — only revoke when evicted
        }
        objectUrlRef.current = cached
        audio.src = cached
        audio.playbackRate = rate
        if (wasPlaying) void audio.play().catch(() => setStatus("paused"))
        return
      }
      try {
        setStatus("loading")
        // v26 — custom AI podcasts voice their two-person script instead of
        // fetching a lesson; the blob flow (cache, download) is identical
        const res = track.speak
          ? await fetch("/api/ai/podcast/speak", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ lang: track.lang, turns: track.speak.turns }),
            })
          : await fetch(`/api/podcast/lesson/${track.lessonId}${track.lang === "ar" ? "?lang=ar" : ""}`)
        if (!res.ok) throw new Error("synthesis failed")
        const blob = await res.blob()
        if (cancelled) return
        const url = URL.createObjectURL(blob)
        cacheObjectUrl(track, url)
        objectUrlRef.current = url
        audio.src = url
        audio.playbackRate = rate
        if (wasPlaying) void audio.play().catch(() => setStatus("paused"))
      } catch {
        if (!cancelled) setStatus("error")
      }
    }
    void load()

    return () => {
      cancelled = true
    }
  }, [track?.lessonId, track?.lang, index])

  /* ---------- transport effects ---------- */
  useEffect(() => {
    const audio = audioRef.current
    if (audio && status === "playing") void audio.play().catch(() => setStatus("paused"))
    if (audio && status === "paused") audio.pause()
  }, [status, setStatus])

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = rate
  }, [rate])

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = muted ? 0 : volume
  }, [muted, volume])

  /* ---------- seek requests from the store ---------- */
  const lastSeekRef = useRef(-1)
  useEffect(() => {
    const audio = audioRef.current
    if (audio && Math.abs(audio.currentTime - position) > 0.6 && lastSeekRef.current !== position) {
      lastSeekRef.current = position
      try {
        audio.currentTime = position
      } catch {
        /* not seekable yet */
      }
    }
  }, [position])

  /* ---------- lock-screen / media keys (Media Session API) ---------- */
  useEffect(() => {
    if (!track || typeof navigator === "undefined" || !("mediaSession" in navigator)) return
    const ms = navigator.mediaSession
    try {
      ms.metadata = new MediaMetadata({
        title: track.title,
        artist: track.courseCode,
        album: "AuditEdge Academy · Podcast",
      })
      ms.setActionHandler("play", () => usePlayerStore.setState({ status: "playing" }))
      ms.setActionHandler("pause", () => usePlayerStore.setState({ status: "paused" }))
      ms.setActionHandler("previoustrack", () => prev())
      ms.setActionHandler("nexttrack", () => next())
      ms.setActionHandler("seekbackward", () => skip(-10))
      ms.setActionHandler("seekforward", () => skip(10))
    } catch {
      /* MediaSession is best-effort */
    }
  }, [track, prev, next, skip])

  const onEnded = useCallback(() => {
    const s = usePlayerStore.getState()
    if (s.index < s.queue.length - 1) s.next()
    else s.setStatus("paused")
  }, [])

  const cycleRate = () => {
    const at = PLAYER_RATES.indexOf(rate as (typeof PLAYER_RATES)[number])
    setRate(PLAYER_RATES[(at + 1) % PLAYER_RATES.length])
  }

  const download = () => {
    if (!track || !objectUrlRef.current) return
    const a = document.createElement("a")
    a.href = objectUrlRef.current
    a.download = track.speak
      ? `auditedge-custom-podcast-${track.lang}.mp3`
      : `auditedge-${track.courseCode.toLowerCase()}-${track.lessonId.slice(-6)}${track.lang === "ar" ? "-ar" : ""}.mp3`
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  const doClose = () => {
    const audio = audioRef.current
    if (audio) audio.pause()
    if (objectUrlRef.current && track) evictObjectUrl(track)
    objectUrlRef.current = null
    close()
  }

  if (!track) return null

  const pct = duration > 0 ? Math.min(100, (position / duration) * 100) : 0

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur print:hidden"
      role="region"
      aria-label={tt("player.region", lang)}
    >
      {/* thin progress line on the very top edge */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-secondary">
        <div className="h-full bg-primary transition-[width] duration-300" style={{ width: `${pct}%` }} />
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={(e) => setPosition(e.currentTarget.currentTime)}
        onDurationChange={(e) => setDuration(e.currentTarget.duration || 0)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
        onEnded={onEnded}
        onPlay={() => usePlayerStore.setState({ status: "playing" })}
        onPause={() => usePlayerStore.getState().status === "playing" && usePlayerStore.setState({ status: "paused" })}
        onError={() => setStatus("error")}
        preload="auto"
        className="hidden"
      />

      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 pb-[calc(env(safe-area-inset-bottom)+0.6rem)] pt-2.5 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* now-synthesizing / now-playing title */}
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {loading ? (
                <Loader2 className="h-[18px] w-[18px] animate-spin" />
              ) : status === "error" ? (
                <RotateCcw className="h-[18px] w-[18px]" />
              ) : status === "playing" ? (
                <span className="flex h-4 items-end gap-[3px]" aria-hidden>
                  <span className="w-[3px] animate-eq bg-primary [animation-delay:0ms]" style={{ height: "60%" }} />
                  <span className="w-[3px] animate-eq bg-primary [animation-delay:150ms]" style={{ height: "100%" }} />
                  <span className="w-[3px] animate-eq bg-primary [animation-delay:300ms]" style={{ height: "40%" }} />
                </span>
              ) : (
                <Pause className="h-4 w-4" />
              )}
            </span>
            <div className="min-w-0">
              <p dir="auto" className="truncate text-[13px] font-semibold leading-tight">
                {track.title}
              </p>
              <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
                {status === "error"
                  ? tt("player.error", lang)
                  : loading
                    ? tt("player.synthesizing", lang)
                    : `${track.courseCode} · ${tt("player.episode", lang)} ${index + 1}/${queue.length}${track.lang === "ar" ? " · العربية" : ""}`}
              </p>
            </div>
          </div>

          {/* transport */}
          <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
            <button
              type="button"
              onClick={() => skip(-10)}
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring sm:flex"
              aria-label={tt("player.back10", lang)}
            >
              <SkipBack className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => (status === "error" ? retry() : toggle())}
              disabled={loading}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-105 disabled:opacity-60 focus-ring"
              aria-label={loading ? tt("player.synthesizing", lang) : status === "playing" ? tt("player.pause", lang) : tt("player.play", lang)}
            >
              {loading ? (
                <Loader2 className="h-[18px] w-[18px] animate-spin" />
              ) : status === "playing" ? (
                <Pause className="h-[18px] w-[18px] fill-current" />
              ) : (
                <Play className="ms-0.5 h-[18px] w-[18px] fill-current" />
              )}
            </button>
            <button
              type="button"
              onClick={() => skip(10)}
              className="hidden h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring sm:flex"
              aria-label={tt("player.fwd10", lang)}
            >
              <SkipForward className="h-4 w-4" />
            </button>
          </div>

          {/* utilities */}
          <div className="flex shrink-0 items-center gap-0.5">
            <button
              type="button"
              onClick={cycleRate}
              className="flex h-8 items-center gap-1 rounded-lg px-2 text-[11px] font-semibold tabular-nums text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring"
              aria-label={tt("player.speed", lang)}
              title={tt("player.speed", lang)}
            >
              <Gauge className="h-3.5 w-3.5" /> {rate}×
            </button>
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              className="hidden h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring sm:flex"
              aria-label={tt("player.mute", lang)}
            >
              {muted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={download}
              disabled={!objectUrlRef.current}
              className="hidden h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring disabled:opacity-40 sm:flex"
              aria-label={tt("player.download", lang)}
              title={tt("player.download", lang)}
            >
              <Download className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={doClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring"
              aria-label={tt("player.close", lang)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* seek rail */}
        <div className="flex items-center gap-2.5">
          <span className="w-10 shrink-0 text-end font-mono text-[10.5px] tabular-nums text-muted-foreground">
            {fmt(position)}
          </span>
          <input
            type="range"
            min={0}
            max={duration > 0 ? duration : 100}
            step={1}
            value={Math.min(position, duration || 100)}
            onChange={(e) => seek(Number(e.target.value))}
            aria-label={tt("player.seek", lang)}
            className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full"
            style={{
              background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${pct}%, var(--secondary) ${pct}%, var(--secondary) 100%)`,
            }}
          />
          <span className="w-10 shrink-0 font-mono text-[10.5px] tabular-nums text-muted-foreground">
            {duration > 0 ? fmt(duration) : "–:––"}
          </span>
        </div>
      </div>
    </div>
  )
}
