/** v26 — verify the four studio voices actually synthesize via Edge TTS
 *  (host/guest × EN/AR). Writes tiny probe wavs? No — checks the raw MP3
 *  buffer length and header so the studio never ships with a dead voice. */
import { edgeSynthesize } from "../../src/lib/edge-tts"

const VOICES = [
  "en-GB-RyanNeural",
  "en-US-ChristopherNeural",
  "ar-EG-SalmaNeural",
  "ar-EG-ShakirNeural",
]

async function main() {
  let ok = 0
  for (const v of VOICES) {
    try {
      const mp3 = await edgeSynthesize(v, "Hello from the AuditEdge podcast studio. مرحبًا من استوديو البودكاست.", "+0%", 30_000)
      const head = Buffer.from(mp3).subarray(0, 2).toString("latin1")
      const size = mp3.length
      const valid = (head === "ID" || (mp3[0] === 0xff && (mp3[1]! & 0xe0) === 0xe0)) && size > 2000
      console.log(`${valid ? "OK " : "BAD"} ${v} — ${size} bytes, header ${JSON.stringify(head)}`)
      if (valid) ok++
    } catch (e) {
      console.log(`ERR ${v} — ${e instanceof Error ? e.message : e}`)
    }
  }
  console.log(`\n${ok}/${VOICES.length} voices verified`)
  process.exit(ok === VOICES.length ? 0 : 1)
}

void main()
