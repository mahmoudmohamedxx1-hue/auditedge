import { fetchPlaylist } from '../src/lib/youtube'
const IDS = [
  "PLw7BcZ9DXQcBnevMKTzHpxNL9Z1VLOYp_",
  "PLORzSxoXX4ut10rICf68r-cTJCcWP4FfW",
  "PLnNt-7uefZIkPB9mxqraqeFYmWgTeGpoU",
  "PL5LkH0wbMBsswKbU6JoHojzmkwlnEyEdm",
  "PL_a6OcyEJVukJ07O5fWiIVM9BmbtptUii",
  "PLpwHU9rNXAVv6k9TaA6GWdDKsfQmecUDU",
  "PL2MXY0X4flhkVOp5ymt7Mse6wrPIsyX2R",
  "PLTqx_awvJrAF2STUIoo7aZa1pdlkGPP35",
  "PL__sFii8qz1lAV7uuBj3T53MRiIj-_SDm",
]
async function main() {
  for (const id of IDS) {
    const pl = await fetchPlaylist(id)
    if (!pl) { console.log(`FAIL ${id}`); continue }
    const mins = pl.videos.reduce((s, v) => s + (v.durationMin ?? 0), 0)
    console.log(`${id} | "${pl.title.slice(0,70)}" | ch="${pl.channel}" | ${pl.videoCountText} | real=${(mins/60).toFixed(1)}h`)
  }
}
main().catch(e => { console.error(e); process.exit(1) })
