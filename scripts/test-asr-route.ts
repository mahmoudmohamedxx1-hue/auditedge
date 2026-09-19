/** Quick check of the /api/ai/asr route with a real WAV payload. */
import fs from "fs"

async function main() {
  const b64 = fs.readFileSync("/tmp/tts-en.wav").toString("base64")
  const res = await fetch("http://localhost:3000/api/ai/asr", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ audio: b64 }),
  })
  console.log("status:", res.status)
  const j = await res.json()
  console.log("text:", JSON.stringify(j))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
