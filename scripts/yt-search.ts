/** YouTube search scraper — extract real video ids, titles, channels,
 *  durations and view counts from YouTube's search results page (no API
 *  key needed). Used to source real course/podcast content for v25.
 *
 *  Run: bun scripts/yt-search.ts "<query>" [limit] */
const query = process.argv[2] ?? "شرح IFRS"
const limit = Number(process.argv[3] ?? 12)

const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}&sp=EgIQAQ%253D%253D` // video-only filter
const res = await fetch(url, {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9,ar;q=0.8",
  },
})
const html = await res.text()
const m = html.match(/var ytInitialData = (\{.*?\});<\/script>/s)
if (!m) {
  console.error("no ytInitialData found")
  process.exit(1)
}

type Vid = { id: string; title: string; channel: string; length: string; views: string; published: string }
const out: Vid[] = []

const walk = (node: unknown): void => {
  if (!node || typeof node !== "object") return
  const obj = node as Record<string, unknown>
  // videoRenderer nodes carry the primary search hit
  if (obj.videoRenderer) {
    const vr = obj.videoRenderer as Record<string, any>
    const id = String(vr.videoId ?? "")
    const title = String(vr.title?.runs?.[0]?.text ?? "")
    const channel = String(vr.ownerText?.runs?.[0]?.text ?? vr.longBylineText?.runs?.[0]?.text ?? "")
    const length = String(vr.lengthText?.simpleText ?? "")
    const views = String(vr.shortViewCountText?.simpleText ?? "")
    const published = String(vr.publishedTimeText?.simpleText ?? "")
    if (id && title) out.push({ id, title, channel, length, views, published })
  }
  for (const v of Object.values(obj)) {
    if (Array.isArray(v)) v.forEach(walk)
    else if (v && typeof v === "object") walk(v)
  }
}
walk(JSON.parse(m[1]))

console.log(`query: ${query}`)
const seen = new Set<string>()
for (const v of out) {
  if (seen.has(v.id)) continue
  seen.add(v.id)
  if (seen.size > limit) break
  console.log(`${v.id}\t${v.length}\t${v.views}\t${v.channel}\t${v.title}`)
}
