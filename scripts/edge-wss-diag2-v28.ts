/** Edge WSS upgrade test #2 — exact edge-tts 7.2.8 header set.
 *  Run: node scripts/edge-wss-diag2-v28.ts */
import https from "https"
import crypto from "crypto"

const TRUSTED_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4"
const CHROMIUM_FULL = "143.0.3650.75"
const CHROMIUM_MAJOR = "143"

function secMsGec(): string {
  const WIN_EPOCH = 11644473600
  let ticks = Date.now() / 1000 + WIN_EPOCH
  ticks -= ticks % 300
  const s = `${Math.round(ticks * 1e7)}${TRUSTED_TOKEN}`
  return crypto.createHash("sha256").update(s).digest("hex").toUpperCase()
}

function rawUpgrade(extra: Record<string, string>, label: string): Promise<string> {
  return new Promise((resolve) => {
    const qs =
      `TrustedClientToken=${TRUSTED_TOKEN}` +
      `&Sec-MS-GEC=${secMsGec()}` +
      `&Sec-MS-GEC-Version=1-${CHROMIUM_FULL}` +
      `&ConnectionId=${crypto.randomBytes(16).toString("hex")}`
    const key = crypto.randomBytes(16).toString("base64")
    const req = https.request({
      hostname: "speech.platform.bing.com",
      path: `/consumer/speech/synthesize/readaloud/edge/v1?${qs}`,
      headers: {
        Connection: "Upgrade",
        Upgrade: "websocket",
        "Sec-WebSocket-Key": key,
        "Sec-WebSocket-Version": "13",
        ...extra,
      },
      timeout: 10000,
    })
    req.on("upgrade", () => resolve(`${label}: UPGRADED 101 ✓`))
    req.on("response", (res) => resolve(`${label}: HTTP ${res.statusCode}`))
    req.on("error", (e) => resolve(`${label}: ERROR ${e.message}`))
    req.on("timeout", () => { req.destroy(); resolve(`${label}: TIMEOUT`) })
    req.end()
  })
}

const FULL: Record<string, string> = {
  Pragma: "no-cache",
  "Cache-Control": "no-cache",
  Origin: "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold",
  "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${CHROMIUM_MAJOR}.0.0.0 Safari/537.36 Edg/${CHROMIUM_MAJOR}.0.0.0`,
  "Accept-Encoding": "gzip, deflate, br, zstd",
  "Accept-Language": "en-US,en;q=0.9",
  Cookie: `muid=${crypto.randomBytes(16).toString("hex").toUpperCase()}`,
}

async function main() {
  console.log(await rawUpgrade(FULL, "full edge-tts headers"))
  console.log(await rawUpgrade({ ...FULL, Cookie: "" }, "full, no cookie    "))
  console.log(
    await rawUpgrade(
      { ...FULL, "Sec-WebSocket-Version": "13", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0" },
      "full, old UA 130  "
    )
  )
}
main()
