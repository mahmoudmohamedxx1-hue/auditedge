const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
const LIST = "PLTqx_awvJrAF2STUIoo7aZa1pdlkGPP35"
function sliceJson(text: string, start: number): string | null {
  let depth = 0, inStr = false, esc = false
  for (let i = start; i < text.length; i++) {
    const ch = text[i]
    if (esc) { esc = false; continue }
    if (ch === "\\") { esc = true; continue }
    if (ch === '"') { inStr = !inStr; continue }
    if (inStr) continue
    if (ch === "{") depth++
    else if (ch === "}") { depth--; if (depth === 0) return text.slice(start, i + 1) }
  }
  return null
}
async function main() {
  const res = await fetch(`https://www.youtube.com/playlist?list=${LIST}`, {
    headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9,ar;q=0.8" }, signal: AbortSignal.timeout(20000) })
  const html = await res.text()
  const marker = "var ytInitialData = "
  const idx = html.indexOf(marker)
  const jsonStart = html.indexOf("{", idx)
  const json = sliceJson(html, jsonStart)
  const data = JSON.parse(json!)
  // find first lockupViewModel with an 11-char contentId
  let found: any = null
  const visit = (n: any): void => {
    if (found || !n || typeof n !== 'object') return
    if (Array.isArray(n)) { for (const x of n) visit(x); return }
    if (n.lockupViewModel && /^[A-Za-z0-9_-]{11}$/.test(n.lockupViewModel.contentId ?? '')) { found = n.lockupViewModel; return }
    for (const k of Object.keys(n)) if (n[k] && typeof n[k] === 'object') visit(n[k])
  }
  visit(data)
  console.log(JSON.stringify(found, null, 1).slice(0, 4000))
}
main().catch(e => console.error(e))
