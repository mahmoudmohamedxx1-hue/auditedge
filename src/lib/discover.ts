/**
 * Discover & import free courses from the open internet — no API keys, no cost.
 *
 * Sources (all keyless):
 *  - Coursera: courses sitemap (~22k slugs, cached) + catalog lookup by slug
 *    (official course names & descriptions via api.coursera.org)
 *  - edX / MIT OpenCourseWare / OpenStax / YouTube playlists: web search with
 *    platform-tuned queries, filtered by URL pattern
 *  - YouTube playlists additionally enriched by parsing the public playlist page
 *    (video count, channel)
 *
 * Import: turn any discovered item (or a raw YouTube playlist URL) into a real
 * course in the workspace catalog.
 */

import { db } from "@/lib/db"
import { uniqueSlug } from "@/lib/audit-server"
import { fetchPlaylist, parseListId } from "@/lib/youtube"
import { getZai } from "@/lib/ai"

export type Platform = "coursera" | "edx" | "mit-ocw" | "openstax" | "youtube"

export const PLATFORM_LABELS: Record<Platform, string> = {
  coursera: "Coursera",
  edx: "edX",
  "mit-ocw": "MIT OpenCourseWare",
  openstax: "OpenStax",
  youtube: "YouTube",
}

export type DiscoveredCourse = {
  platform: Platform
  title: string
  url: string
  snippet: string
  meta: string // e.g. "EN · free to audit" or "76 videos · Mahmoud Hamouda"
}

/* ---------------- Coursera: sitemap + slug catalog lookup ---------------- */

let courseraCache: { slugs: string[]; fetchedAt: number } | null = null
const COURSERA_TTL = 24 * 60 * 60 * 1000 // refresh daily

async function getCourseraSlugs(): Promise<string[]> {
  if (courseraCache && Date.now() - courseraCache.fetchedAt < COURSERA_TTL) {
    return courseraCache.slugs
  }
  try {
    const res = await fetch("https://www.coursera.org/sitemap~www~courses.xml", {
      headers: { "User-Agent": "Mozilla/5.0" },
      signal: AbortSignal.timeout(25_000),
    })
    if (!res.ok) return courseraCache?.slugs ?? []
    const xml = await res.text()
    const slugs: string[] = []
    const re = /<loc>https:\/\/www\.coursera\.org\/learn\/([^<]+)<\/loc>/g
    let m: RegExpExecArray | null
    while ((m = re.exec(xml)) !== null) slugs.push(m[1])
    if (slugs.length) courseraCache = { slugs, fetchedAt: Date.now() }
    return slugs
  } catch {
    return courseraCache?.slugs ?? []
  }
}

function rankSlugs(slugs: string[], tokens: string[], limit: number): string[] {
  const scored = slugs
    .map((slug) => {
      let score = 0
      for (const t of tokens) {
        const idx = slug.indexOf(t)
        if (idx >= 0) score += t.length >= 5 ? 3 : 2
      }
      return { slug, score }
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
  return scored.slice(0, limit).map((s) => s.slug)
}

type CourseraCourse = {
  slug: string
  name: string
  description: string
  primaryLanguages: string[]
}

async function courseraBySlug(slug: string): Promise<CourseraCourse | null> {
  try {
    const res = await fetch(
      `https://api.coursera.org/api/courses.v1?q=slug&slug=${encodeURIComponent(
        slug
      )}&fields=name,description,primaryLanguages`,
      { headers: { "User-Agent": "Mozilla/5.0" }, signal: AbortSignal.timeout(10_000) }
    )
    if (!res.ok) return null
    const json = (await res.json()) as {
      elements?: { slug?: string; name?: string; description?: string; primaryLanguages?: string[] }[]
    }
    const el = json.elements?.[0]
    if (!el?.name) return null
    return {
      slug,
      name: el.name,
      description: el.description ?? "",
      primaryLanguages: el.primaryLanguages ?? ["en"],
    }
  } catch {
    return null
  }
}

async function searchCoursera(query: string, limit = 6): Promise<DiscoveredCourse[]> {
  const tokens = query
    .toLowerCase()
    .split(/[^a-z0-9\u0600-\u06ff]+/)
    .filter((t) => t.length >= 3)
  if (!tokens.length) return []
  const slugs = await getCourseraSlugs()
  if (!slugs.length) return []
  const top = rankSlugs(slugs, tokens, limit)
  const found = await Promise.all(top.map((s) => courseraBySlug(s)))
  return found
    .filter((c): c is CourseraCourse => !!c)
    .map((c) => ({
      platform: "coursera" as const,
      title: c.name,
      url: `https://www.coursera.org/learn/${c.slug}`,
      snippet: c.description.replace(/\s+/g, " ").slice(0, 260),
      meta: `${(c.primaryLanguages ?? ["en"])[0].toUpperCase()} · free to audit`,
    }))
}

/* ---------------- web-search based platforms ---------------- */

type WebResult = { url: string; name: string; snippet: string; host_name: string }

async function webSearch(query: string, num = 8): Promise<WebResult[]> {
  try {
    const zai = await getZai()
    const results = (await zai.functions.invoke("web_search", { query, num })) as unknown as WebResult[]
    return Array.isArray(results) ? results : []
  } catch {
    return []
  }
}

const PLATFORM_PATTERNS: { platform: Platform; re: RegExp; query: (q: string) => string }[] = [
  {
    platform: "edx",
    re: /^https?:\/\/(www\.)?edx\.org\/learn\/[a-z0-9-]+\/[a-z0-9-]+/i,
    query: (q) => `edX online course ${q}`,
  },
  {
    platform: "mit-ocw",
    re: /^https?:\/\/ocw\.mit\.edu\/courses\/[a-z0-9.-]+/i,
    query: (q) => `MIT OpenCourseWare course ${q}`,
  },
  {
    platform: "openstax",
    re: /^https?:\/\/(www\.)?openstax\.org\/details\/books\/[a-z0-9-]+/i,
    query: (q) => `OpenStax free textbook ${q}`,
  },
  {
    platform: "youtube",
    re: /^https?:\/\/(www\.)?youtube\.com\/playlist\?list=[A-Za-z0-9_-]+/i,
    query: (q) => `${q} playlist youtube`,
  },
]

function cleanTitle(title: string): string {
  return title
    .replace(/\s*[|\-–—]\s*(edX|MIT OpenCourseWare|OpenStax|Coursera|YouTube)\s*$/i, "")
    .replace(/\s*-\s*YouTube\s*$/i, "")
    .trim()
}

async function searchViaWeb(platform: Platform, query: string): Promise<DiscoveredCourse[]> {
  const cfg = PLATFORM_PATTERNS.find((p) => p.platform === platform)
  if (!cfg) return []
  const results = await webSearch(cfg.query(query), 8)
  const seen = new Set<string>()
  const out: DiscoveredCourse[] = []
  for (const r of results) {
    const url = r.url.split("?")[0].replace(/\/$/, "")
    if (!cfg.re.test(r.url)) continue
    if (seen.has(url)) continue
    seen.add(url)
    out.push({
      platform,
      title: cleanTitle(r.name),
      url: r.url,
      snippet: r.snippet.replace(/\s+/g, " ").slice(0, 260),
      meta: platform === "youtube" ? "YouTube playlist" : "free access",
    })
  }
  return out.slice(0, 4)
}

/** Enrich the top YouTube hits with real playlist metadata (video counts, channel). */
async function enrichYouTube(results: DiscoveredCourse[]): Promise<DiscoveredCourse[]> {
  const enriched = await Promise.all(
    results.slice(0, 3).map(async (r) => {
      const listId = parseListId(r.url)
      if (!listId) return r
      const info = await fetchPlaylist(listId)
      if (!info) return r
      return {
        ...r,
        title: info.title || r.title,
        meta: `${info.videos.length} videos · ${info.channel}`.trim(),
        snippet: info.videoCountText ? `${info.videoCountText} — ${info.channel}` : r.snippet,
      }
    })
  )
  return [...enriched, ...results.slice(3)]
}

/* ---------------- aggregate search ---------------- */

export async function searchFreeCourses(query: string): Promise<DiscoveredCourse[]> {
  const q = query.trim().slice(0, 120)
  if (!q) return []
  // Coursera uses its sitemap + catalog API (no web-search quota); the other
  // four run through the shared web-search function, so stagger them slightly
  // and retry once to ride out burst rate limits (429s).
  const staggered = async (platform: Platform, delayMs: number): Promise<DiscoveredCourse[]> => {
    await new Promise((r) => setTimeout(r, delayMs))
    let res = await searchViaWeb(platform, q)
    if (!res.length) {
      await new Promise((r) => setTimeout(r, 1_500))
      res = await searchViaWeb(platform, q)
    }
    return res
  }
  const [coursera, mit, edx, openstax, youtubeRaw] = await Promise.all([
    searchCoursera(q, 6),
    staggered("mit-ocw", 0),
    staggered("edx", 700),
    staggered("openstax", 1_400),
    staggered("youtube", 2_100),
  ])
  const youtube = await enrichYouTube(youtubeRaw)
  const all = [...coursera, ...edx, ...mit, ...openstax, ...youtube]
  // stable order: coursera (enriched) first, then MIT, edX, OpenStax, YouTube
  const order: Platform[] = ["coursera", "mit-ocw", "edx", "openstax", "youtube"]
  return all.sort((a, b) => order.indexOf(a.platform) - order.indexOf(b.platform))
}

/* ---------------- import into the catalog ---------------- */

const CODE_PREFIX: Record<Platform, string> = {
  coursera: "CR",
  edx: "EDX",
  "mit-ocw": "MIT",
  openstax: "OSX",
  youtube: "YT",
}

const ACCENT_BY_PLATFORM: Record<Platform, string> = {
  coursera: "sage",
  edx: "plum",
  "mit-ocw": "olive",
  openstax: "sand",
  youtube: "terracotta",
}

const ICON_BY_PLATFORM: Record<Platform, string> = {
  coursera: "layers",
  edx: "rocket",
  "mit-ocw": "book-open-check",
  openstax: "sprout",
  youtube: "play-circle",
}

function randomCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  let code = ""
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)]
  return code
}

export type ImportResult =
  | { ok: true; courseId: string; title: string }
  | { ok: false; error: string }

/** Import a discovered MOOC/textbook as a link-out course with an overview lesson. */
export async function importExternalCourse(item: {
  platform: Platform
  title: string
  url: string
  snippet: string
  category?: string
}): Promise<ImportResult> {
  const platform = item.platform
  if (!PLATFORM_LABELS[platform]) return { ok: false, error: "Unknown platform" }
  if (!/^https?:\/\//i.test(item.url)) return { ok: false, error: "Invalid course URL" }

  const existing = await db.course.findFirst({ where: { sourceUrl: item.url } })
  if (existing) {
    return { ok: false, error: `"${existing.title}" is already in the catalog` }
  }

  const label = PLATFORM_LABELS[platform]
  const title = item.title.trim().slice(0, 140) || `${label} course`
  const courseId = await db.$transaction(async (tx) => {
    const course = await tx.course.create({
      data: {
        slug: await uniqueSlug(`${platform}-${title.slice(0, 40)}`),
        code: `${CODE_PREFIX[platform]}-${randomCode()}`,
        title,
        subtitle: `Free course on ${label}`,
        description:
          (item.snippet || "").trim() ||
          `A free course imported from ${label}. Open the link to study it, then come back to track progress and ask the AI tutor.`,
        category: item.category ?? "Open Courses",
        level: "Intermediate",
        cpeHours: 0,
        instructorName: label,
        instructorTitle: "Free online course",
        instructorBio: `Imported from ${label} — free to access.`,
        rating: 0,
        ratingCount: 0,
        studentsCount: 0,
        icon: ICON_BY_PLATFORM[platform],
        accent: ACCENT_BY_PLATFORM[platform],
        published: true,
        sourcePlatform: platform,
        sourceUrl: item.url,
      },
    })
    const module_ = await tx.module.create({
      data: {
        courseId: course.id,
        title: "Course on " + label,
        description: `Study the course on ${label} (free access), then mark it complete here.`,
        order: 1,
      },
    })
    await tx.lesson.create({
      data: {
        moduleId: module_.id,
        title: `Open the course on ${label}`,
        type: "lesson",
        durationMin: 10,
        xp: 0,
        externalUrl: item.url,
        order: 1,
        content: JSON.stringify({
          intro: `This course is studied on ${label}'s website — the free "audit"/open-access track is enough, no paid certificate required. Click the button below to open it.`,
          sections: [
            {
              heading: "About this course",
              body: item.snippet || title,
            },
            {
              heading: "How to study it",
              bullets: [
                `Open the course on ${label} using the button below (or the link at the top of this lesson).`,
                "Work through the free materials at your own pace — videos, readings and ungraded exercises.",
                "Return here to mark the lesson complete, and use the AI tutor whenever something needs explaining.",
                "Ask the office admin to add a knowledge check (quiz) if the team should be tested on this material.",
              ],
            },
          ],
          keyPoints: [
            "Free access (audit track) is enough — paid certificates are optional.",
            "The AI tutor can answer questions about the material while you study.",
          ],
          takeaway: `Imported from ${label} — ${item.url}`,
        }),
      },
    })
    return course.id
  })
  return { ok: true, courseId, title }
}

/** Import a YouTube playlist as a full video course (one lesson per video). */
export async function importPlaylistAsCourse(
  playlistUrl: string,
  opts?: {
    category?: string
    title?: string
    subtitle?: string
    description?: string
    level?: string
    accent?: string
    featured?: boolean
    maxVideos?: number
  }
): Promise<ImportResult> {
  const listId = parseListId(playlistUrl)
  if (!listId) return { ok: false, error: "That doesn't look like a YouTube playlist link" }

  const canonical = `https://www.youtube.com/playlist?list=${listId}`
  const existing = await db.course.findFirst({ where: { sourceUrl: canonical } })
  if (existing) return { ok: false, error: `"${existing.title}" is already in the catalog` }

  const info = await fetchPlaylist(listId)
  if (!info || !info.videos.length) {
    return { ok: false, error: "Could not read that playlist — check the link and try again" }
  }

  const max = Math.min(Math.max(opts?.maxVideos ?? 60, 1), 100)
  const videos = info.videos.slice(0, max)
  const title = (opts?.title ?? info.title).trim().slice(0, 140) || "YouTube course"
  // honest CPE estimate from the REAL video durations published on the playlist
  // (falls back to 0 when YouTube doesn't expose durations)
  const knownMinutes = videos.reduce((s, v) => s + (v.durationMin ?? 0), 0)
  // honest CPE = real total watch time, rounded to 0.1h — no artificial floor
  // (a 12-minute playlist must NOT claim a full CPE hour)
  const cpe = Math.round((knownMinutes / 60) * 10) / 10

  const courseId = await db.$transaction(async (tx) => {
    const course = await tx.course.create({
      data: {
        // Arabic titles slugify to nothing — seed with the random course code
        // so slugs stay unique and meaningful (yt-<code>) instead of yt-2, yt-3…
        slug: await uniqueSlug(`yt-${randomCode().toLowerCase()}${randomCode().toLowerCase()}`),
        code: `YT-${randomCode()}`,
        title,
        subtitle: opts?.subtitle ?? `${videos.length} video lessons · ${info.channel}`,
        description:
          opts?.description ??
          `Imported from YouTube — "${info.title}" by ${info.channel} (${info.videoCountText}). Every video is a lesson: watch it here, ask the AI tutor about anything unclear, and earn XP as you go.`,
        category: opts?.category ?? "Open Courses",
        level: opts?.level ?? "Foundation",
        cpeHours: cpe,
        instructorName: info.channel,
        instructorTitle: "YouTube channel",
        instructorBio: `Free public YouTube course by ${info.channel}.`,
        rating: 0,
        ratingCount: 0,
        studentsCount: 0,
        icon: "play-circle",
        accent: opts?.accent ?? "terracotta",
        published: true,
        featured: opts?.featured ?? false,
        sourcePlatform: "youtube",
        sourceUrl: canonical,
      },
    })

    const chunk = 12
    for (let i = 0; i < videos.length; i += chunk) {
      const part = videos.slice(i, i + chunk)
      const moduleIdx = Math.floor(i / chunk) + 1
      const module_ = await tx.module.create({
        data: {
          courseId: course.id,
          title: `Part ${moduleIdx} · Videos ${i + 1}–${i + part.length}`,
          description: `Lectures ${i + 1} to ${i + part.length} of "${info.title}" by ${info.channel}.`,
          order: moduleIdx,
        },
      })
      let order = 1
      for (const v of part) {
        await tx.lesson.create({
          data: {
            moduleId: module_.id,
            title: v.title || `Video lecture ${i + order}`,
            type: "lesson",
            durationMin: v.durationMin ?? 10,
            xp: 10,
            videoUrl: `https://www.youtube.com/watch?v=${v.id}`,
            order: order++,
            content: JSON.stringify({
              intro:
                "شاهد المحاضرة كاملة ثم علّم الدرس كمكتمل — واستخدم مساعد الذكاء الاصطناعي في أي جزء غير واضح. Watch the full lecture, then mark the lesson complete — and ask the AI tutor about anything unclear.",
              sections: [
                {
                  heading: "About this lecture",
                  body: `${v.title || "Video lecture"} — ${info.channel} (${info.title}).`,
                },
              ],
              keyPoints: [],
              takeaway:
                "جرّب سؤال المساعد الذكائي: «لخّص لي أهم النقاط في هذه المحاضرة» أو «اختبر فهمي بأسئلة». Try asking the AI tutor: \"summarize the key points of this lecture\" or \"quiz me on this\".",
            }),
          },
        })
      }
    }
    return course.id
  })

  return { ok: true, courseId, title }
}
