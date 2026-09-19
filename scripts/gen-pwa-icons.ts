/**
 * Generate PWA icons (192/512 + apple-touch 180 + favicon 32) from an inline SVG.
 * Uses sharp (already installed). Run: bun run scripts/gen-pwa-icons.ts
 */
import sharp from "sharp"
import { promises as fs } from "fs"

const SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="108" fill="#C9633F"/>
  <path d="M256 96 L376 152 v108 c0 74-51 128-120 156 C187 388 136 334 136 260 V152 Z"
        fill="none" stroke="#FAF9F5" stroke-width="26" stroke-linejoin="round"/>
  <path d="M205 262 l38 38 70-84" fill="none" stroke="#FAF9F5" stroke-width="30"
        stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

async function main() {
  await fs.writeFile("public/icon.svg", SVG)
  await sharp(Buffer.from(SVG)).resize(512, 512).png().toFile("public/icon-512.png")
  await sharp(Buffer.from(SVG)).resize(192, 192).png().toFile("public/icon-192.png")
  await sharp(Buffer.from(SVG)).resize(180, 180).png().toFile("public/apple-touch-icon.png")
  await sharp(Buffer.from(SVG)).resize(32, 32).png().toFile("public/favicon.png")
  console.log("icons written: icon.svg, icon-512.png, icon-192.png, apple-touch-icon.png, favicon.png")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
