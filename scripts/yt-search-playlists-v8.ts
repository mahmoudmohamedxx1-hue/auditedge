/**
 * Scrape YouTube search (playlist filter) via ytInitialData — keyless.
 * Usage: bun scripts/yt-search-playlists-v8.ts "query" [limit]
 */
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"

function sliceJson(text: string, start: number): string | null {
  let depth = 0
  let inStr = false
  let esc = false
  for (let i = start; i < text.length; i++) {
    const ch = text[i]
    if (esc) { esc = false; continue }
    if (ch === "\\") { esc = true; continue }
    if (ch === '"') { inStr = !inStr
      continue }
    if (inStr) continue
    if (ch === "{") depth++
    else if (ch === "}") { depth--; if (depth === 0) return text.slice(start, i + 1) }
  }
  return null
}

type Hit = { listId: string; title: string; channel: string; count: string }

function extractPlaylists(data: unknown): Hit[] {
  const hits: Hit[] = []
  const seen = new Set<string>()
  const visit = (node: any) => {
    if (!node || typeof node !== "object") return
    if (Array.isArray(node)) { for (const n of node) visit(n); return }
    // lockupViewModel (new layout)
    const lvm = node.lockupViewModel
    if (lvm?.contentId && !seen.has(lvm.contentId)) {
      const t = lvm?.metadata?.lockupMetadataViewModel?.title?.content ?? ""
      const md = JSON.stringify(lvm?.metadata ?? {})
      const countMatch = md.match(/"content":"([^"]*videos?[^"]*)"/i)
      const chanMatch = md.match(/"content":"([^"]{2,60})"[^}]*?\}\],"?/i)
      if (t) {
        seen.add(lvm.contentId)
        hits.push({
          listId: lvm.contentId,
          title: t,
          channel: chanMatch?.[1] ?? "",
          count: countMatch?.[1] ?? "",
        })
      }
    }
    // playlistRenderer (old layout)
    const pr = node.playlistRenderer
    if (pr?.playlistId && !seen.has(pr.playlistId)) {
      seen.add(pr.playlistId)
      hits.push({
        listId: pr.playlistId,
        title: pr.title?.simpleText ?? pr.title?.runs?.[0]?.text ?? "",
        channel: pr.shortBylineText?.runs?.[0]?.text ?? "",
        count: pr.videoCount ?? "",
      })
    }
    for (const k of Object.keys(node)) {
      const c = node[k]
      if (c && typeof c === "object") visit(c)
    }
  }
  visit((data as any)?.contents)
  return hits
}

async function main() {
  const q = process.argv[2]
  const limit = Number(process.argv[3] ?? 12)
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}&sp=EgIQAw%3D%3D&hl=ar`
  const res = await fetch(url, {
    headers: { "User-Agent": UA, "Accept-Language": "ar,en;q=0.8" },
    signal: AbortSignal.timeout(20_000),
  })
  const html = await res.text()
  const marker = "var ytInitialData = "
  const idx = html.indexOf(marker)
  if (idx < 0) { console.log("no ytInitialData"); return }
  const jsonStart = html.indexOf("{", idx)
  const json = sliceJson(html, jsonStart)
  if (!json) { console.log("no json"); return }
  const hits = extractPlaylists(JSON.parse(json)).slice(0, limit)
  for (const h of hits) {
    console.log(`• ${h.title.slice(0, 75)} | ${h.channel} | ${h.count}\n  https://www.youtube.com/playlist?list=${h.listId}`)
  }
}

main().catch((e) => { console.error("FAILED:", e); process.exit(1) })
