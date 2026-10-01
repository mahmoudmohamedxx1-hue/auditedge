/**
 * v27 — harvest a YouTube playlist's full lesson list from the live page
 * and VERIFY every video via oEmbed (the v26 gold standard):
 *   1. playlist page (Accept-Language: en) → ordered videoIds + durations
 *      from the lockupViewModel blocks
 *   2. oEmbed per video → the ORIGINAL (non-translated) title + channel,
 *      and proof that every id is live
 *
 * Usage: bun scripts/yt-harvest-v27.ts <playlistId> [maxLessons]
 * Output: one compact JSON line —
 *   {playlistId,title,channel,count,pageLessons,lessons:[{id,title,length}],failed:[ids]}
 */
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

const listId = process.argv[2]
const maxLessons = Number(process.argv[3] ?? 70)
if (!listId) {
  console.error("usage: bun scripts/yt-harvest-v27.ts <playlistId> [maxLessons]")
  process.exit(1)
}

type Lesson = { id: string; title: string; length: string }

function parseLockups(html: string): Lesson[] {
  const out: Lesson[] = []
  const seen = new Set<string>()
  const blocks = html.split('{"lockupViewModel":')
  for (const b of blocks.slice(1)) {
    const cid = b.match(/"contentId":"([A-Za-z0-9_-]{11})"/)
    if (!cid || seen.has(cid[1])) continue
    seen.add(cid[1])
    const dur = b.match(/"thumbnailBadgeViewModel":\{"text":"(\d+:\d+(?::\d+)?)"/)
    out.push({ id: cid[1], title: "", length: dur?.[1] ?? "" })
  }
  return out
}

async function oembed(id: string): Promise<{ title: string; channel: string } | null> {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(`https://www.youtube.com/watch?v=${id}`)}&format=json`,
      { headers: { "User-Agent": UA } }
    )
    if (!res.ok) return null
    const j = (await res.json()) as { title: string; author_name: string }
    return { title: j.title, channel: j.author_name }
  } catch {
    return null
  }
}

async function main() {
  const res = await fetch(`https://www.youtube.com/playlist?list=${listId}`, {
    headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9,ar;q=0.8" },
  })
  if (!res.ok) {
    console.error(`page HTTP ${res.status}`)
    process.exit(1)
  }
  const html = await res.text()
  let plTitle = ""
  {
    const m = html.match(/"playlistHeaderRenderer":\{"(?:[^{]*?)"title":\{"simpleText":"((?:[^"\\]|\\.)*)"/)
    if (m) plTitle = JSON.parse(`"${m[1]}"`)
  }
  let plChannel = ""
  {
    const m = html.match(/"ownerText":\{"runs":\[\{"text":"((?:[^"\\]|\\.)*)"/)
    if (m) plChannel = JSON.parse(`"${m[1]}"`)
  }

  const all = parseLockups(html)
  const trimmed = all.slice(0, maxLessons)
  const failed: string[] = []
  let channel = plChannel
  for (const l of trimmed) {
    const oe = await oembed(l.id)
    if (!oe) {
      failed.push(l.id)
      continue
    }
    l.title = oe.title
    if (!channel) channel = oe.channel
  }
  const lessons = trimmed.filter((l) => l.title)

  // total duration in minutes
  let secs = 0
  for (const l of lessons) {
    const parts = l.length.split(":").map(Number)
    if (!parts.length || parts.some(isNaN)) continue
    if (parts.length === 3) secs += parts[0] * 3600 + parts[1] * 60 + parts[2]
    else if (parts.length === 2) secs += parts[0] * 60 + parts[1]
  }

  console.log(
    JSON.stringify({
      playlistId: listId,
      title: plTitle,
      channel,
      pageLessons: all.length,
      totalMinutes: Math.round(secs / 60),
      lessons,
      failed,
    })
  )
}

void main()
