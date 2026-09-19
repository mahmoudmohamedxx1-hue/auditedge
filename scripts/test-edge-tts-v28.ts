/** Smoke-test src/lib/edge-tts.ts — Arabic (Egyptian) + English + speed.
 *  Run: bun scripts/test-edge-tts-v28.ts */
import { edgeSynthesize, edgeEstSeconds } from "../src/lib/edge-tts"
import fs from "fs"

async function main() {
  const tests: Array<{ label: string; voice: string; text: string; rate?: string }> = [
    {
      label: "Salma ar-EG",
      voice: "ar-EG-SalmaNeural",
      text: "مرحباً محمود. أنا سلمى، صوت عربي مصري طبيعي لقراءة دروس المراجعة والتدقيق.",
    },
    {
      label: "Shakir ar-EG",
      voice: "ar-EG-ShakirNeural",
      text: "أهلاً بك. أنا شاكر، وسأقرأ لك معايير التدقيق الدولية بصوت عربي واضح.",
    },
    {
      label: "Jenny en-US",
      voice: "en-US-JennyNeural",
      text: "Hello Mahmoud. I am Jenny, a natural neural voice for your audit lessons.",
    },
    {
      label: "Sonia en-GB +25%",
      voice: "en-GB-SoniaNeural",
      text: "Good afternoon. This is Sonia reading at one and a quarter times speed.",
      rate: "+25%",
    },
  ]

  let pass = 0
  for (const t of tests) {
    process.stdout.write(`${t.label.padEnd(18)} … `)
    try {
      const mp3 = await edgeSynthesize(t.voice, t.text, t.rate ?? "+0%", 20000)
      const isMp3 = mp3.length > 4 && (mp3[0] === 0xff || mp3.subarray(0, 3).toString() === "ID3")
      if (!isMp3) throw new Error(`not mp3 (first bytes: ${mp3.subarray(0, 4).toString("hex")})`)
      fs.writeFileSync(`/tmp/edge-client-${t.label.split(" ")[0].toLowerCase()}.mp3`, mp3)
      console.log(`OK  ${(mp3.length / 1024).toFixed(0)}KB  ~${edgeEstSeconds(mp3).toFixed(1)}s`)
      pass++
    } catch (e) {
      console.log(`FAIL ${JSON.stringify(e).slice(0, 140)}`)
    }
    await new Promise((r) => setTimeout(r, 600))
  }
  console.log(`\n${pass}/${tests.length} passed`)
  process.exit(pass === tests.length ? 0 : 1)
}

main()
