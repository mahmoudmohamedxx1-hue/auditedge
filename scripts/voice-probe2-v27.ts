/** Voice capability probe — Task 27, part 2 (remaining voices + fixed parser).
 *
 *  The TTS WAVs carry a non-canonical "AIGC" metadata chunk before "data",
 *  so duration = walk RIFF chunks → data-chunk bytes / byte-rate.
 *  Only probes jam / kazi / douji / luodo (tongtong, chuichui, xiaochen
 *  already verified OK in both languages) and re-durations the saved files.
 *
 *  Run: bun scripts/voice-probe2-v27.ts
 */

import ZAI from "z-ai-web-dev-sdk"
import fs from "fs"
import path from "path"

const OUT_DIR = path.join(process.cwd(), "scripts", "voice-probe")
fs.mkdirSync(OUT_DIR, { recursive: true })

const REMAINING = ["jam", "kazi", "douji", "luodo"] as const

const SAMPLES = {
  en: "Hello Mahmoud. This is a short sample of my voice for the audit tutor.",
  ar: "مرحباً محمود. هذه عينة قصيرة من صوتي لمساعد التدقيق.",
} as const

/** Walk RIFF chunks to the "data" chunk → duration in seconds. */
function wavSeconds(buf: Buffer): number | null {
  try {
    if (buf.length < 12 || buf.toString("ascii", 0, 4) !== "RIFF") return null
    let off = 12
    let byteRate = 0
    let dataLen = -1
    while (off + 8 <= buf.length) {
      const id = buf.toString("ascii", off, off + 4)
      const size = buf.readUInt32LE(off + 4)
      if (id === "fmt ") byteRate = buf.readUInt32LE(off + 16)
      if (id === "data") {
        dataLen = Math.min(size, buf.length - off - 8)
        break
      }
      off += 8 + size + (size % 2)
    }
    if (!byteRate || dataLen <= 0) return null
    return dataLen / byteRate
  } catch {
    return null
  }
}

async function ttsWithRetry(
  zai: InstanceType<typeof ZAI>,
  input: string,
  voice: string
): Promise<{ ok: boolean; seconds: number | null; size: number; error?: string }> {
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      const response = await zai.audio.tts.create({
        input,
        voice,
        speed: 1,
        response_format: "wav",
        stream: false,
      })
      const buffer = Buffer.from(new Uint8Array(await response.arrayBuffer()))
      if (buffer.length === 0) throw new Error("empty response")
      return { ok: true, seconds: wavSeconds(buffer), size: buffer.length }
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e)
      const is429 = msg.includes("429")
      if (attempt === 3) return { ok: false, seconds: null, size: 0, error: msg.slice(0, 120) }
      // rate limit → be patient (10s, 20s, 30s)
      await new Promise((r) => setTimeout(r, is429 ? 10000 * (attempt + 1) : 1500 * (attempt + 1)))
    }
  }
  return { ok: false, seconds: null, size: 0, error: "unreachable" }
}

async function main() {
  const zai = await ZAI.create()
  const rows: string[] = []

  // re-duration the already-saved samples with the fixed parser
  for (const f of fs.readdirSync(OUT_DIR)) {
    if (!f.endsWith(".wav")) continue
    const buf = fs.readFileSync(path.join(OUT_DIR, f))
    rows.push(`saved  ${f.padEnd(18)} ${wavSeconds(buf)?.toFixed(1) ?? "?"}s  ${(buf.length / 1024).toFixed(0)}KB`)
  }

  for (const voice of REMAINING) {
    for (const lang of ["en", "ar"] as const) {
      process.stdout.write(`voice=${voice.padEnd(9)} lang=${lang} … `)
      const r = await ttsWithRetry(zai, SAMPLES[lang], voice)
      const dur = r.seconds != null ? `${r.seconds.toFixed(1)}s` : "?"
      const line = `${voice.padEnd(9)} ${lang}  ${r.ok ? "OK " : "FAIL"}  ${dur.padStart(5)}  ${(r.size / 1024).toFixed(0)}KB${r.error ? "  ERR: " + r.error : ""}`
      console.log(line)
      rows.push(line)
      if (r.ok) {
        const response = await zai.audio.tts.create({
          input: SAMPLES[lang],
          voice,
          speed: 1,
          response_format: "wav",
          stream: false,
        })
        fs.writeFileSync(
          path.join(OUT_DIR, `${voice}-${lang}.wav`),
          Buffer.from(new Uint8Array(await response.arrayBuffer()))
        )
      }
      await new Promise((r) => setTimeout(r, 5000))
    }
  }

  fs.writeFileSync(path.join(OUT_DIR, "report2.txt"), rows.join("\n") + "\n")
  console.log("\nReport → scripts/voice-probe/report2.txt")
}

main().catch((e) => {
  console.error("PROBE FAILED:", e)
  process.exit(1)
})
