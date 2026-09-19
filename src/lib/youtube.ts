/**
 * Keyless YouTube utilities — no API key, no quota.
 *
 * - fetchPlaylist(): playlist metadata + ordered video list, parsed from the
 *   public playlist page's ytInitialData (lockupViewModel layout, with a
 *   playlistVideoRenderer fallback for older pages).
 * - oembed(): title/author verification for a video or playlist URL.
 */

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

export type PlaylistVideo = {
  id: string
  title: string
  /** Real duration in minutes parsed from the playlist page (badge text like "10:26"), when available. */
  durationMin?: number
}

export type PlaylistInfo = {
  listId: string
  title: string
  channel: string
  videoCountText: string
  viewsText: string
  videos: PlaylistVideo[]
}

/** Extract a playlist id from most URL forms (list=..., /playlist?list=..., raw id). */
export function parseListId(input: string): string | null {
  const raw = input.trim()
  if (!raw) return null
  if (/^[A-Za-z0-9_-]{12,60}$/.test(raw)) return raw
  try {
    const url = new URL(raw.startsWith("http") ? raw : `https://${raw}`)
    const list = url.searchParams.get("list")
    if (list && /^[A-Za-z0-9_-]{12,60}$/.test(list)) return list
  } catch {
    // not a URL
  }
  const m = raw.match(/[?&]list=([A-Za-z0-9_-]{12,60})/)
  return m ? m[1] : null
}

/** Extract an 11-char video id from most YouTube URL forms. */
export function parseVideoId(input: string): string | null {
  const raw = input.trim()
  if (!raw) return null
  if (/^[A-Za-z0-9_-]{11}$/.test(raw)) return raw
  const patterns = [
    /(?:youtube\.com\/watch\?[^#]*v=)([\w-]{11})/i,
    /(?:youtu\.be\/)([\w-]{11})/i,
    /(?:youtube\.com\/shorts\/)([\w-]{11})/i,
    /(?:youtube\.com\/embed\/)([\w-]{11})/i,
    /(?:youtube\.com\/live\/)([\w-]{11})/i,
  ]
  for (const p of patterns) {
    const m = raw.match(p)
    if (m?.[1]) return m[1]
  }
  return null
}

/** Keyless oEmbed lookup for a video or playlist — returns null when unavailable. */
export async function oembed(
  url: string
): Promise<{ title: string; author_name: string; thumbnail_url?: string } | null> {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`,
      { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(10_000) }
    )
    if (!res.ok) return null
    return (await res.json()) as { title: string; author_name: string; thumbnail_url?: string }
  } catch {
    return null
  }
}

/** Find the matching closing brace for the JSON object starting at `start` (string-aware). */
function sliceJson(text: string, start: number): string | null {
  let depth = 0
  let inStr = false
  let esc = false
  for (let i = start; i < text.length; i++) {
    const ch = text[i]
    if (esc) {
      esc = false
      continue
    }
    if (ch === "\\") {
      esc = true
      continue
    }
    if (ch === '"') inStr = !inStr
    if (inStr) continue
    if (ch === "{") depth++
    else if (ch === "}") {
      depth--
      if (depth === 0) return text.slice(start, i + 1)
    }
  }
  return null
}

type Lockup = {
  contentId?: string
  metadata?: {
    lockupMetadataViewModel?: {
      title?: { content?: string }
    }
  }
  contentImage?: {
    thumbnailViewModel?: {
      overlays?: Array<{
        thumbnailBottomOverlayViewModel?: {
          badges?: Array<{ thumbnailBadgeViewModel?: { text?: string } }>
        }
      }>
    }
  }
}

/** "10:26" | "1:02:33" → minutes (rounded up, min 1). */
function parseDuration(text?: string): number | undefined {
  if (!text) return undefined
  const m = text.match(/^(?:(\d{1,2}):)?(\d{1,2}):(\d{2})$/)
  if (!m) return undefined
  const mins = m[1] ? Number(m[1]) * 60 + Number(m[2]) : Number(m[2])
  const secs = Number(m[3])
  return Math.max(1, Math.ceil((mins * 60 + secs) / 60))
}

/** Pull (id, title) pairs out of a parsed ytInitialData object. */
function extractVideos(data: unknown): { videos: PlaylistVideo[]; header: Record<string, string> } {
  const videos: PlaylistVideo[] = []
  const seen = new Set<string>()
  const header: Record<string, string> = {}

  const d = data as Record<string, any>

  // header metadata
  try {
    const h = d?.header?.playlistHeaderRenderer
    if (h) {
      header.title = h?.title?.simpleText ?? ""
      header.channel = h?.ownerText?.runs?.[0]?.text ?? ""
      header.videoCountText =
        h?.numVideosText?.runs?.map((r: { text?: string }) => r.text ?? "").join("") ?? ""
      header.viewsText = h?.viewCountText?.simpleText ?? ""
    }
  } catch {
    // header is best-effort
  }

  const visit = (node: any) => {
    if (!node || typeof node !== "object") return
    if (Array.isArray(node)) {
      for (const item of node) visit(item)
      return
    }

    // new layout: itemSectionRenderer.contents[] = [{lockupViewModel}]
    if (node.lockupViewModel) {
      const lvm = node.lockupViewModel as Lockup
      const id = lvm.contentId ?? ""
      const title = lvm.metadata?.lockupMetadataViewModel?.title?.content ?? ""
      if (/^[A-Za-z0-9_-]{11}$/.test(id) && !seen.has(id)) {
        seen.add(id)
        const badgeText =
          lvm.contentImage?.thumbnailViewModel?.overlays
            ?.flatMap((o) => o.thumbnailBottomOverlayViewModel?.badges ?? [])
            .map((b) => b.thumbnailBadgeViewModel?.text)
            .find((t) => /\d/.test(t ?? "")) ?? undefined
        videos.push({ id, title: title || "Untitled video", durationMin: parseDuration(badgeText) })
      }
    }

    // old layout: playlistVideoRenderer
    if (node.playlistVideoRenderer) {
      const pvr = node.playlistVideoRenderer
      const id = pvr?.videoId ?? ""
      const title = pvr?.title?.runs?.[0]?.text ?? ""
      if (/^[A-Za-z0-9_-]{11}$/.test(id) && !seen.has(id)) {
        seen.add(id)
        const lengthText = pvr?.lengthText?.simpleText
        videos.push({ id, title: title || "Untitled video", durationMin: parseDuration(lengthText) })
      }
    }

    for (const key of Object.keys(node)) {
      const child = node[key]
      if (child && typeof child === "object") visit(child)
    }
  }

  visit(d?.contents)
  return { videos, header }
}

/** Fetch a playlist page and parse metadata + ordered videos (no API key). */
export async function fetchPlaylist(listId: string): Promise<PlaylistInfo | null> {
  let html: string
  try {
    const res = await fetch(`https://www.youtube.com/playlist?list=${listId}`, {
      headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9,ar;q=0.8" },
      signal: AbortSignal.timeout(20_000),
    })
    if (!res.ok) return null
    html = await res.text()
  } catch {
    return null
  }

  let videos: PlaylistVideo[] = []
  let header: Record<string, string> = {}

  // primary: parse ytInitialData
  const marker = "var ytInitialData = "
  const markerIdx = html.indexOf(marker)
  if (markerIdx >= 0) {
    const jsonStart = html.indexOf("{", markerIdx)
    const json = jsonStart >= 0 ? sliceJson(html, jsonStart) : null
    if (json) {
      try {
        const parsed = extractVideos(JSON.parse(json))
        videos = parsed.videos
        header = parsed.header
      } catch {
        // fall through to regex mode
      }
    }
  }

  // fallback: ordered unique videoId scan (titles unknown — filled via oEmbed by caller if wanted)
  if (!videos.length) {
    const seen = new Set<string>()
    const re = /"videoId":"([A-Za-z0-9_-]{11})"/g
    let m: RegExpExecArray | null
    while ((m = re.exec(html)) !== null) {
      if (!seen.has(m[1])) {
        seen.add(m[1])
        videos.push({ id: m[1], title: "" })
      }
    }
  }

  if (!videos.length) return null

  // oEmbed fallback for missing metadata
  let title = header.title ?? ""
  let channel = header.channel ?? ""
  if (!title || !channel) {
    const meta = await oembed(`https://www.youtube.com/playlist?list=${listId}`)
    if (meta) {
      title = title || meta.title
      channel = channel || meta.author_name
    }
  }

  return {
    listId,
    title: title || "YouTube playlist",
    channel: channel || "Unknown channel",
    videoCountText: header.videoCountText ?? `${videos.length} videos`,
    viewsText: header.viewsText ?? "",
    videos: videos.slice(0, 100), // first page holds ~100; cap for safety
  }
}
