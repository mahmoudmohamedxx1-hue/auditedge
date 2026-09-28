/** v24 — the in-website podcast player store.
 *
 *  Podcasts used to be download-only: the MP3 synthesis endpoint existed,
 *  but the only thing you could do with it was save a file. This store
 *  gives the workspace a real audio player — a queue of lesson episodes
 *  that streams inside the site while you keep browsing (the player bar
 *  lives at the app-shell level and survives every navigation).
 *
 *  The <audio> element itself is owned by the AudioPlayer component; this
 *  store owns the queue, the transport state and a small in-memory objectURL
 *  cache (re-playing or re-seeking an episode you just heard is instant —
 *  the synthesizer is not hit twice). */
import { create } from "zustand"

export type PlayerTrack = {
  lessonId: string
  title: string
  courseCode: string
  /** "en" | "ar" rendition */
  lang: "en" | "ar"
}

export type PlayerStatus = "idle" | "loading" | "playing" | "paused" | "error"

const PLAYER_RATE_KEY = "auditedge-player-rate"

/** In-memory blob cache — MP3s are a few MB each; cap it. */
const MAX_CACHED = 6
const blobCache = new Map<string, string>()

function cacheKey(t: PlayerTrack): string {
  return `${t.lessonId}:${t.lang}`
}

export function cacheObjectUrl(t: PlayerTrack, url: string) {
  const key = cacheKey(t)
  if (blobCache.has(key)) URL.revokeObjectURL(url)
  else {
    blobCache.set(key, url)
    if (blobCache.size > MAX_CACHED) {
      const oldest = blobCache.keys().next().value as string
      const url2 = blobCache.get(oldest)
      if (url2) URL.revokeObjectURL(url2)
      blobCache.delete(oldest)
    }
  }
}

export function cachedObjectUrl(t: PlayerTrack): string | null {
  return blobCache.get(cacheKey(t)) ?? null
}

export function evictObjectUrl(t: PlayerTrack) {
  const key = cacheKey(t)
  const url = blobCache.get(key)
  if (url) URL.revokeObjectURL(url)
  blobCache.delete(key)
}

export const PLAYER_RATES = [0.75, 1, 1.25, 1.5, 2] as const

export function defaultRate(): number {
  if (typeof window === "undefined") return 1
  const v = Number(window.localStorage.getItem(PLAYER_RATE_KEY))
  return (PLAYER_RATES as readonly number[]).includes(v) ? v : 1
}

interface PlayerState {
  queue: PlayerTrack[]
  index: number
  status: PlayerStatus
  /** seconds into the current episode */
  position: number
  duration: number
  rate: number
  /** how many seconds the synthesizer has been quiet-failed, for retry UI */
  lastErrorAt: number | null

  /** Replace the queue and start at `startIndex`. */
  playAll: (tracks: PlayerTrack[], startIndex?: number) => void
  /** Replace the queue with a single track and play it. */
  playTrack: (track: PlayerTrack) => void
  /** Append to the end of the queue (no transport change). */
  enqueue: (track: PlayerTrack) => void
  toggle: () => void
  next: () => void
  prev: () => void
  seek: (sec: number) => void
  skip: (delta: number) => void
  setRate: (rate: number) => void
  setStatus: (s: PlayerStatus) => void
  setPosition: (sec: number) => void
  setDuration: (sec: number) => void
  /** retry the current track after an error */
  retry: () => void
  close: () => void
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
  queue: [],
  index: 0,
  status: "idle",
  position: 0,
  duration: 0,
  rate: 1,
  lastErrorAt: null,

  playAll: (tracks, startIndex = 0) =>
    set({ queue: tracks, index: Math.min(startIndex, Math.max(tracks.length - 1, 0)), status: "loading", position: 0, duration: 0, lastErrorAt: null }),

  playTrack: (track) => set({ queue: [track], index: 0, status: "loading", position: 0, duration: 0, lastErrorAt: null }),

  enqueue: (track) => {
    const { queue, index } = get()
    // already queued? jump attention to it instead of duplicating
    const at = queue.findIndex((t) => t.lessonId === track.lessonId && t.lang === track.lang)
    if (at >= 0) return
    set({ queue: [...queue, track], index: queue.length > 0 ? index : 0 })
  },

  toggle: () => {
    const { status } = get()
    if (status === "playing") set({ status: "paused" })
    else if (status === "paused" || status === "error") set({ status: "playing" })
  },

  next: () => {
    const { queue, index } = get()
    if (index < queue.length - 1)
      set({ index: index + 1, status: "loading", position: 0, duration: 0, lastErrorAt: null })
  },

  prev: () => {
    const { queue, index, position } = get()
    // standard player behaviour: restart the episode if we're >3s in
    if (position > 3) {
      set({ position: 0 })
      return
    }
    if (index > 0) set({ index: index - 1, status: "loading", position: 0, duration: 0, lastErrorAt: null })
  },

  seek: (sec) => set({ position: Math.max(0, sec) }),
  skip: (delta) => {
    const { position, duration } = get()
    const target = Math.min(Math.max(position + delta, 0), duration || Infinity)
    set({ position: target })
  },

  setRate: (rate) => {
    if (typeof window !== "undefined") window.localStorage.setItem(PLAYER_RATE_KEY, String(rate))
    set({ rate })
  },

  setStatus: (status) =>
    set((s) => (status === "error" ? { status, lastErrorAt: Date.now() } : { status, ...(status === "playing" ? { lastErrorAt: null } : {}) })),
  setPosition: (position) => set({ position }),
  setDuration: (duration) => set({ duration }),

  retry: () => set({ status: "loading", position: 0, duration: 0, lastErrorAt: null }),

  close: () => {
    for (const key of [...blobCache.keys()]) {
      const url = blobCache.get(key)
      if (url) URL.revokeObjectURL(url)
      blobCache.delete(key)
    }
    set({ queue: [], index: 0, status: "idle", position: 0, duration: 0, lastErrorAt: null })
  },
}))

/** Convenience selector — the track under the cursor (null when empty). */
export function currentTrack(s: Pick<PlayerState, "queue" | "index">): PlayerTrack | null {
  return s.queue[s.index] ?? null
}
