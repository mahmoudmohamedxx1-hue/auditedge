/** Dump a YouTube playlist (ordered ids, titles, durations) — v26 course sourcing. */
import { fetchPlaylist } from "../../src/lib/youtube"

async function main() {
  const listId = process.argv[2]
  if (!listId) { console.error("usage: bunx tsx scripts/v26/dump-playlist.ts <playlistId>"); process.exit(1) }
  const info = await fetchPlaylist(listId)
  if (!info) { console.error("fetch failed"); process.exit(1) }
  console.log(`PLAYLIST: ${info.title} — ${info.channel} — ${info.videos.length} videos`)
  let totalMin = 0
  info.videos.forEach((v, i) => {
    totalMin += v.durationMin ?? 0
    console.log(`${String(i + 1).padStart(2)} ${v.id} ${String(Math.round(v.durationMin ?? 0)).padStart(4)}min ${(v.title ?? "").slice(0, 75)}`)
  })
  console.log(`TOTAL: ${(totalMin / 60).toFixed(1)}h`)
}
void main()
