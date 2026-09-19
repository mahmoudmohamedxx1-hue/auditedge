/**
 * Test: keyless YouTube playlist scraping.
 * 1) oEmbed for playlist metadata (title, channel)
 * 2) playlist page HTML → ordered videoId list
 * 3) oEmbed per video → titles
 * Usage: bun scripts/test-playlist-scrape.ts <playlistId>
 */
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

async function oembed(url: string) {
  const res = await fetch(
    `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`,
    { headers: { "User-Agent": UA } }
  )
  if (!res.ok) return null
  return (await res.json()) as {
    title: string
    author_name: string
    thumbnail_url: string
  }
}

async function main() {
  const listId = process.argv[2]
  if (!listId) {
    console.error("usage: bun scripts/test-playlist-scrape.ts <playlistId>")
    process.exit(1)
  }

  // 1) playlist metadata
  const meta = await oembed(`https://www.youtube.com/playlist?list=${listId}`)
  console.log("PLAYLIST META:", JSON.stringify(meta, null, 2))

  // 2) fetch playlist page, extract ordered unique videoIds
  const res = await fetch(`https://www.youtube.com/playlist?list=${listId}`, {
    headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9,ar;q=0.8" },
  })
  console.log("page status:", res.status)
  const html = await res.text()
  console.log("html length:", html.length)

  // try playlistVideoRenderer blocks first (classic), then raw videoId sequence
  const ids: string[] = []
  const seen = new Set<string>()
  const re = /"videoId":"([A-Za-z0-9_-]{11})"/g
  let m: RegExpExecArray | null
  while ((m = re.exec(html)) !== null) {
    const id = m[1]
    if (!seen.has(id)) {
      seen.add(id)
      ids.push(id)
    }
  }
  console.log("unique videoIds found:", ids.length)
  console.log("first 5:", ids.slice(0, 5))

  // also try extracting titles from playlistVideoRenderer for comparison
  const titleRe =
    /"playlistVideoRenderer":\{"videoId":"([A-Za-z0-9_-]{11})".*?"title":\{"runs":\[\{"text":"((?:[^"\\]|\\.)*)"/g
  const titled: { id: string; title: string }[] = []
  while ((m = titleRe.exec(html)) !== null) {
    titled.push({ id: m[1], title: m[2] })
  }
  console.log("playlistVideoRenderer entries:", titled.length)
  if (titled.length) console.log("first 3 titled:", titled.slice(0, 3))

  // 3) oEmbed titles for first 3 ids
  for (const id of ids.slice(0, 3)) {
    const v = await oembed(`https://www.youtube.com/watch?v=${id}`)
    console.log(`oembed ${id}:`, v?.title ?? "FAILED", "|", v?.author_name ?? "")
  }
}

main().catch((e) => {
  console.error("FAILED:", e)
  process.exit(1)
})
