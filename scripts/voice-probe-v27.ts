/** Voice capability probe — Task 27.
 *
 *  Tests all 7 TTS voices of the workspace built-in SDK with an English and
 *  an Arabic sample, reports ok/fail + audio duration for each. A voice that
 *  cannot speak a language typically errors or produces near-empty audio.
 *
 *  Run: bun scripts/voice-probe-v27.ts
 */

import ZAI from "z-ai-web-dev-sdk"
import fs from "fs"
import path from "path"

const OUT_DIR = path.join(process.cwd(), "scripts", "voice-probe")
fs.mkdirSync(OUT_DIR, { recursive: true })

const VOICES = ["tongtong", "chuichui", "xiaochen", "jam", "kazi", "douji", "luodo"] as const

const SAMPLES = {
  en: "Hello Mahmoud. This is a short sample of my voice for the audit tutor.",
  ar: "مرحباً محمود. هذه عينة قصيرة من صوتي لمساعد التدقيق.",
} as const

/** Canonical-WAV duration: data-chunk bytes / byte-rate. */
function wavSeconds(buf: Buffer): number | null {
  try {
    if (buf.length < 44 || buf.toString("ascii", 0, 4) !== "RIFF") return null
    const byteRate = buf.readUInt32LE(28)
    if (!byteRate) return null
    const dataLen = buf.readUInt32LE(40)
    if (dataLen <= 0 || 44 + dataLen > buf.length + 8) return null
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
  for (let attempt = 0; attempt < 3; attempt++) {
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
      if (attempt === 2) return { ok: false, seconds: null, size: 0, error: msg.slice(0, 120) }
      await new Promise((r) => setTimeout(r, 900 * (attempt + 1)))
    }
  }
  return { ok: false, seconds: null, size: 0, error: "unreachable" }
}

async function main() {
  console.log("ZAI.create()…")
  const zai = await ZAI.create()
  const rows: string[] = []

  for (const voice of VOICES) {
    for (const lang of ["en", "ar"] as const) {
      process.stdout.write(`voice=${voice.padEnd(9)} lang=${lang} … `)
      const r = await ttsWithRetry(zai, SAMPLES[lang], voice)
      const dur = r.seconds != null ? `${r.seconds.toFixed(1)}s` : "?"
      const line = `${voice.padEnd(9)} ${lang}  ${r.ok ? "OK " : "FAIL"}  ${dur.padStart(5)}  ${(r.size / 1024).toFixed(0)}KB${r.error ? "  ERR: " + r.error : ""}`
      console.log(line)
      rows.push(line)
      if (r.ok) {
        // keep one sample per voice+lang for potential listening
        const f = path.join(OUT_DIR, `${voice}-${lang}.wav`)
        const response = await zai.audio.tts.create({
          input: SAMPLES[lang],
          voice,
          speed: 1,
          response_format: "wav",
          stream: false,
        })
        fs.writeFileSync(f, Buffer.from(new Uint8Array(await response.arrayBuffer())))
      }
      await new Promise((r) => setTimeout(r, 400))
    }
  }

  fs.writeFileSync(path.join(OUT_DIR, "report.txt"), rows.join("\n") + "\n")
  console.log("\nReport → scripts/voice-probe/report.txt")
}

main().catch((e) => {
  console.error("PROBE FAILED:", e)
  process.exit(1)
})
