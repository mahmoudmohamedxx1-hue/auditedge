/** Edge WSS diagnostics — raw HTTP upgrade status + general WSS egress test.
 *  Run: node scripts/edge-wss-diag-v28.ts */
import https from "https"
import crypto from "crypto"

const TRUSTED_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4"

function secMsGecBig(): string {
  const WIN_EPOCH = 11644473600n
  let ticks = BigInt(Math.floor(Date.now() / 1000)) + WIN_EPOCH
  ticks -= ticks % 300n
  const product = ticks * 10000000n
  return crypto.createHash("sha256").update(product.toString() + TRUSTED_TOKEN).digest("hex").toUpperCase()
}

function secMsGecFloat(): string {
  // mimic Python edge-tts exactly: float math, .0f formatting
  let ticks = Date.now() / 1000 + 11644473600
  ticks = ticks - (ticks % 300)
  const product = ticks * 1e7
  const formatted = Math.round(product).toString() // ~ .0f
  return crypto.createHash("sha256").update(formatted + TRUSTED_TOKEN).digest("hex").toUpperCase()
}

function rawUpgrade(url: URL, label: string): Promise<string> {
  return new Promise((resolve) => {
    const key = crypto.randomBytes(16).toString("base64")
    const req = https.request({
      hostname: url.hostname,
      path: url.pathname + url.search,
      headers: {
        Connection: "Upgrade",
        Upgrade: "websocket",
        "Sec-WebSocket-Key": key,
        "Sec-WebSocket-Version": "13",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0",
        Origin: "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold",
      },
      timeout: 10000,
    })
    req.on("upgrade", (res) => resolve(`${label}: UPGRADED 101 (proto=${res.headers["sec-websocket-protocol"] ?? "none"})`))
    req.on("response", (res) => resolve(`${label}: HTTP ${res.statusCode} ${res.headers["x-content-type-options"] ?? ""} :: ${JSON.stringify(res.headers).slice(0, 180)}`))
    req.on("error", (e) => resolve(`${label}: ERROR ${e.message}`))
    req.on("timeout", () => { req.destroy(); resolve(`${label}: TIMEOUT`) })
    req.end()
  })
}

async function main() {
  console.log("GEC big  :", secMsGecBig().slice(0, 16) + "…")
  console.log("GEC float:", secMsGecFloat().slice(0, 16) + "…")
  console.log("same     :", secMsGecBig() === secMsGecFloat())

  // 1) Edge endpoint with DRM token, big-int variant
  const u1 = new URL(
    `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TRUSTED_TOKEN}&Sec-MS-GEC=${secMsGecBig()}&Sec-MS-GEC-Version=1-130.0.2849.68&ConnectionId=${crypto.randomBytes(16).toString("hex")}`
  )
  console.log(await rawUpgrade(u1, "edge+GEC(big)   "))

  // 2) Edge endpoint WITHOUT any GEC token (control: does token matter?)
  const u2 = new URL(
    `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TRUSTED_TOKEN}&ConnectionId=${crypto.randomBytes(16).toString("hex")}`
  )
  console.log(await rawUpgrade(u2, "edge no-GEC     "))

  // 3) Edge endpoint with a GARBAGE GEC token (control)
  const u3 = new URL(
    `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TRUSTED_TOKEN}&Sec-MS-GEC=DEADBEEF&Sec-MS-GEC-Version=1-130.0.2849.68&ConnectionId=${crypto.randomBytes(16).toString("hex")}`
  )
  console.log(await rawUpgrade(u3, "edge garbage-GEC"))

  // 4) Generic public WSS echo (is WSS egress allowed at all?)
  console.log(await rawUpgrade(new URL("wss://ws.postman-echo.com/raw"), "postman-echo    "))
}

main()
