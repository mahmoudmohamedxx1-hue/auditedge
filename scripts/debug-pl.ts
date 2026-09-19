const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
const LIST = "PLTqx_awvJrAF2STUIoo7aZa1pdlkGPP35"
async function main() {
  const res = await fetch(`https://www.youtube.com/playlist?list=${LIST}`, {
    headers: { "User-Agent": UA, "Accept-Language": "en-US,en;q=0.9,ar;q=0.8" },
    signal: AbortSignal.timeout(20000),
  })
  console.log('HTTP', res.status, 'len hint')
  const html = await res.text()
  console.log('html length:', html.length)
  const marker = "var ytInitialData = "
  const idx = html.indexOf(marker)
  console.log('ytInitialData marker at:', idx)
  if (idx < 0) { console.log('FIRST 800 chars:', html.slice(0, 800)); return }
  // find a videoId and dump surrounding structure
  const vid = html.indexOf('"videoId"')
  console.log('--- context around first videoId (1200 chars):')
  console.log(html.slice(vid - 200, vid + 1000).replace(/,"/, ',\n"').slice(0, 1500))
  console.log('\n--- lockupViewModel count:', (html.match(/lockupViewModel/g)||[]).length)
  console.log('--- playlistVideoRenderer count:', (html.match(/playlistVideoRenderer/g)||[]).length)
  console.log('--- thumbnailBadgeViewModel count:', (html.match(/thumbnailBadgeViewModel/g)||[]).length)
  console.log('--- overlayBadgeViewModel count:', (html.match(/overlayBadgeViewModel/g)||[]).length)
  console.log('--- badge counts:', {
    thumbnailBadge: (html.match(/"thumbnailBadgeViewModel"/g)||[]).length,
    badgeViewModel: (html.match(/"badgeViewModel"/g)||[]).length,
    "lengthText": (html.match(/"lengthText"/g)||[]).length,
  })
}
main().catch(e => console.error(e))
