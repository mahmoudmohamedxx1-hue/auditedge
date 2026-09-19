import sharp from "sharp"

async function analyze(file: string) {
  const { data, info } = await sharp(file)
    .resize(64, 64)
    .raw()
    .toBuffer({ resolveWithObject: true })
  let r = 0, g = 0, b = 0
  const px = info.width * info.height
  for (let i = 0; i < data.length; i += info.channels) {
    r += data[i]; g += data[i + 1]; b += data[i + 2]
  }
  r = Math.round(r / px); g = Math.round(g / px); b = Math.round(b / px)
  const lum = Math.round(0.2126 * r + 0.7152 * g + 0.0722 * b)
  console.log(`${file.split("/").pop()}: avg rgb(${r},${g},${b}) luminance=${lum} → ${lum > 128 ? "LIGHT" : "DARK"}`)
}

async function main() {
  for (const f of [
    "research/dark-landing.png",
    "research/lesson.png",
    "research/cert.png",
    "research/leaderboard.png",
    "research/catalog.png",
    "research/paths.png",
    "research/course-detail.png",
  ]) {
    try { await analyze(f) } catch { console.log(`${f}: ERROR`) }
  }
}
main()
