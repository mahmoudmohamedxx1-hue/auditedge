/** Inspect ytInitialData structure of a saved YouTube playlist page. */
const html = await Bun.file("research/playlist-sample.html").text()
const start = html.indexOf("var ytInitialData = ")
if (start < 0) {
  console.error("ytInitialData not found")
  process.exit(1)
}
const jsonStart = html.indexOf("{", start)
// find matching closing brace by scanning with brace depth (string-aware, simplified)
let depth = 0
let end = -1
let inStr = false
let esc = false
for (let i = jsonStart; i < html.length; i++) {
  const ch = html[i]
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
    if (depth === 0) {
      end = i + 1
      break
    }
  }
}
const data = JSON.parse(html.slice(jsonStart, end))

const tabs =
  data?.contents?.twoColumnBrowseResultsRenderer?.tabs ?? []
console.log("tabs:", tabs.length)
for (const t of tabs) {
  const tr = t?.tabRenderer
  if (!tr) continue
  console.log("tab:", tr.title)
  const content = tr.content
  console.log("  content keys:", Object.keys(content ?? {}))
  const slr = content?.sectionListRenderer
  if (slr) {
    for (const [i, c] of (slr.contents ?? []).entries()) {
      console.log(`  section[${i}] keys:`, Object.keys(c ?? {}))
      const isr = c?.itemSectionRenderer
      if (isr) {
        for (const [j, cc] of (isr.contents ?? []).entries()) {
          console.log(`    item[${j}] keys:`, Object.keys(cc ?? {}))
          const pvlr = cc?.playlistVideoListRenderer
          if (pvlr) {
            console.log("      playlistVideoList contents:", (pvlr.contents ?? []).length)
            const first = pvlr.contents?.[0]
            console.log("      first item keys:", Object.keys(first ?? {}))
            const lvm = first?.lockupViewModel
            if (lvm) {
              console.log("      lockup contentId:", lvm.contentId)
              console.log(
                "      lockup title:",
                lvm?.metadata?.lockupMetadataViewModel?.title?.content
              )
            }
          }
        }
      }
    }
  }
}
// locate the playlist items: itemSectionRenderer.contents[] = [{lockupViewModel}, ...]
let items: any[] = []
try {
  const secs =
    data.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents
  for (const s of secs) {
    const isr = s?.itemSectionRenderer
    if (!isr) continue
    for (const it of isr.contents ?? []) {
      if (it?.lockupViewModel) items.push(it.lockupViewModel)
    }
  }
} catch {}
if (items.length) {
  const vids: { id: string; title: string }[] = []
  for (const lvm of items) {
    const id = lvm.contentId
    const title = lvm?.metadata?.lockupMetadataViewModel?.title?.content ?? ""
    if (id && /^[A-Za-z0-9_-]{11}$/.test(id)) vids.push({ id, title })
  }
  console.log(`\nPLAYLIST VIDEOS PARSED: ${vids.length}`)
  for (const v of vids.slice(0, 6)) console.log(" ", v.id, "→", v.title.slice(0, 90))
  const header = data?.header?.playlistHeaderRenderer
  if (header) {
    console.log("\nHEADER:", JSON.stringify({
      title: header?.title?.simpleText,
      owner: header?.ownerText?.runs?.[0]?.text,
      numVideosText: header?.numVideosText?.runs?.map((r: any) => r.text).join(""),
      viewCountText: header?.viewCountText?.simpleText,
    }, null, 2))
  }
} else {
  console.log("\nNO ITEMS FOUND — check structure above")
}
