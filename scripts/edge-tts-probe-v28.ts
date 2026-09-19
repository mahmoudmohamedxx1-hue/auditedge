/** Edge neural-TTS probe — Task 28.
 *
 *  Tests Microsoft Edge's Read-Aloud TTS service (the same one the Edge
 *  browser uses) from this workspace: WSS handshake with the Sec-MS-GEC
 *  DRM token, SSML synthesis, binary audio frame reassembly.
 *  If this works we get 400+ natural neural voices incl. Egyptian Arabic.
 *
 *  Run: bun scripts/edge-tts-probe-v28.ts   (or: node — both have native WebSocket)
 */
import crypto from "crypto"
import fs from "fs"

const TRUSTED_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4"
const WSS_BASE =
  "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1"

/** Sec-MS-GEC DRM token: SHA-256 of (5-min-rounded Windows-epoch ticks + token). */
function secMsGec(): string {
  const WIN_EPOCH = 11644473600
  let ticks = Math.floor(Date.now() / 1000) + WIN_EPOCH
  ticks -= ticks % 300
  const str = `${ticks * 10000000}${TRUSTED_TOKEN}`
  return crypto.createHash("sha256").update(str).digest("hex").toUpperCase()
}

function hex32(): string {
  return crypto.randomBytes(16).toString("hex")
}

function escapeSsml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

function ssml(voice: string, text: string, ratePct: string): string {
  return (
    `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>` +
    `<voice name='${voice}'>` +
    `<prosody rate='${ratePct}' pitch='+0Hz' volume='+0%'>` +
    escapeSsml(text) +
    `</prosody></voice></speak>`
  )
}

/** Synthesize via Edge Read-Aloud. Returns mp3 Buffer. */
function edgeSynthesize(
  voice: string,
  text: string,
  ratePct = "+0%",
  timeoutMs = 15000
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const url =
      `${WSS_BASE}?TrustedClientToken=${TRUSTED_TOKEN}` +
      `&Sec-MS-GEC=${secMsGec()}` +
      `&Sec-MS-GEC-Version=1-131.0.2903.99` +
      `&ConnectionId=${hex32()}`

    const ws = new WebSocket(url)
    ws.binaryType = "arraybuffer"
    const chunks: Buffer[] = []
    let settled = false

    const finish = (err?: Error, buf?: Buffer) => {
      if (settled) return
      settled = true
      try {
        ws.close()
      } catch {}
      if (err) reject(err)
      else resolve(buf!)
    }

    const timer = setTimeout(() => finish(new Error("timeout")), timeoutMs)

    ws.onopen = () => {
      const date = new Date().toUTCString()
      // 1) speech config
      ws.send(
        `X-Timestamp:${date}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n` +
          JSON.stringify({
            context: {
              synthesis: {
                audio: {
                  metadataoptions: { sentenceBoundaryEnabled: "false", wordBoundaryEnabled: "false" },
                  outputFormat: "audio-24khz-48kbitrate-mono-mp3",
                },
              },
            },
          })
      )
      // 2) the SSML payload
      ws.send(
        `X-RequestId:${hex32()}\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:${date}Z\r\nPath:ssml\r\n\r\n` +
          ssml(voice, text, ratePct)
      )
    }

    ws.onmessage = (ev: MessageEvent) => {
      if (typeof ev.data === "string") {
        if (ev.data.includes("Path:turn.end")) {
          clearTimeout(timer)
          finish(undefined, Buffer.concat(chunks))
        }
        return
      }
      // binary frame: [2-byte BE header length][header][audio]
      const buf = Buffer.from(ev.data as ArrayBuffer)
      if (buf.length < 2) return
      const headerLen = buf.readUInt16BE(0)
      const header = buf.subarray(2, 2 + headerLen).toString()
      if (header.includes("Path:audio")) {
        const audio = buf.subarray(2 + headerLen)
        if (audio.length) chunks.push(audio)
      }
    }

    ws.onerror = () => {
      clearTimeout(timer)
      finish(new Error("wss error/blocked"))
    }
    ws.onclose = () => {
      clearTimeout(timer)
      if (!settled) finish(new Error("closed before turn.end"))
    }
  })
}

/** mp3 @ 48 kbps → seconds estimate. */
function estSeconds(buf: Buffer): number {
  return (buf.length * 8) / 48000
}

async function main() {
  const tests: Array<{ label: string; voice: string; text: string; rate?: string }> = [
    {
      label: "Salma ar-EG",
      voice: "ar-EG-SalmaNeural",
      text: "مرحباً محمود. أنا سلمى، صوت عربي مصري طبيعي لقراءة دروس المراجعة.",
    },
    {
      label: "Shakir ar-EG",
      voice: "ar-EG-ShakirNeural",
      text: "مرحباً محمود. أنا شاكر، صوت عربي مصري واضح للاستماع الطويل.",
    },
    {
      label: "Jenny en-US",
      voice: "en-US-JennyNeural",
      text: "Hello Mahmoud. I am Jenny, a natural neural voice for your audit lessons.",
    },
    {
      label: "Sonia en-GB @+25%",
      voice: "en-GB-SoniaNeural",
      text: "Good afternoon. This is Sonia, reading at one and a quarter speed.",
      rate: "+25%",
    },
  ]

  let pass = 0
  for (const t of tests) {
    process.stdout.write(`${t.label.padEnd(20)} … `)
    try {
      const mp3 = await edgeSynthesize(t.voice, t.text, t.rate ?? "+0%")
      const okMagic = mp3.length > 4 && (mp3[0] === 0xff || mp3.subarray(0, 3).toString() === "ID3")
      const f = `/tmp/edge-${t.label.split(" ")[0].toLowerCase()}.mp3`
      fs.writeFileSync(f, mp3)
      console.log(
        `OK  ${(mp3.length / 1024).toFixed(0)}KB  ~${estSeconds(mp3).toFixed(1)}s  mp3:${okMagic}`
      )
      pass++
    } catch (e) {
      console.log(`FAIL  ${e instanceof Error ? e.message : e}`)
    }
    await new Promise((r) => setTimeout(r, 700))
  }
  console.log(`\n${pass}/${tests.length} passed`)
}

main().catch((e) => {
  console.error("PROBE CRASHED:", e)
  process.exit(1)
})
