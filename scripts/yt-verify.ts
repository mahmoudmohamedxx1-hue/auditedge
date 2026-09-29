/** Verify YouTube video ids via the public oEmbed endpoint (no key needed):
 *  confirms the video exists, its exact title and channel. Run:
 *  bun scripts/yt-verify.ts id1 id2 id3 ... */
const ids = process.argv.slice(2)
if (!ids.length) {
  console.error("usage: bun scripts/yt-verify.ts <videoId>...")
  process.exit(1)
}

for (const id of ids) {
  const url = `https://www.youtube.com/oembed?url=${encodeURIComponent(
    `https://www.youtube.com/watch?v=${id}`
  )}&format=json`
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })
    if (!res.ok) {
      console.log(`${id}\t✗ HTTP ${res.status}`)
      continue
    }
    const j = (await res.json()) as { title: string; author_name: string }
    console.log(`${id}\t✓\t${j.author_name}\t${j.title}`)
  } catch (e) {
    console.log(`${id}\t✗ ${e instanceof Error ? e.message : "error"}`)
  }
}
