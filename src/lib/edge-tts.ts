/** Server-side client for Microsoft Edge's Read-Aloud neural TTS service.
 *
 *  The same service the Edge browser uses for "Read aloud" — 400+ natural
 *  neural voices (including Egyptian Arabic Salma/Shakir) with no API key.
 *  Protocol ported from the verified reference implementation (edge-tts
 *  7.2.8, probe-confirmed working from this workspace on 2026-09-19):
 *
 *  - WSS to speech.platform.bing.com with the extension's TrustedClientToken
 *  - Sec-MS-GEC DRM token: SHA-256 of (5-min-rounded Windows-epoch ticks +
 *    token) — REJECTS stale User-Agents, so we send a current Chromium/Edg
 *    UA (143 at time of writing) plus a muid cookie
 *  - Two messages: speech.config (output format) then Path:ssml (payload)
 *  - Binary frames: [2-byte BE header length][headers][mp3 audio]
 *  - Text frames carry Path:turn.end when the audio is complete
 *
 *  SERVER-ONLY — never import from client components. */

import crypto from "crypto"
import WebSocket from "ws"

const TRUSTED_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4"
const WSS_URL = `wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TRUSTED_TOKEN}`
const CHROMIUM_FULL = "143.0.3650.75"
const CHROMIUM_MAJOR = CHROMIUM_FULL.split(".", 1)[0]
const SEC_MS_GEC_VERSION = `1-${CHROMIUM_FULL}`

const WSS_HEADERS = {
  Pragma: "no-cache",
  "Cache-Control": "no-cache",
  Origin: "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold",
  "User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${CHROMIUM_MAJOR}.0.0.0 Safari/537.36 Edg/${CHROMIUM_MAJOR}.0.0.0`,
  "Accept-Encoding": "gzip, deflate, br, zstd",
  "Accept-Language": "en-US,en;q=0.9",
  Cookie: `muid=${crypto.randomBytes(16).toString("hex").toUpperCase()}`,
} as const

/** Clock skew correction (seconds) — adjusted from a 403's Date header. */
let clockSkew = 0

/** Sec-MS-GEC DRM token (see edge-tts DRM.generate_sec_ms_gec). */
function secMsGec(): string {
  const WIN_EPOCH = 11644473600
  let ticks = Date.now() / 1000 + clockSkew + WIN_EPOCH
  ticks -= ticks % 300
  // .0f formatting of the float product mirrors the reference exactly
  const strToHash = `${Math.round(ticks * 1e7)}${TRUSTED_TOKEN}`
  return crypto.createHash("sha256").update(strToHash, "ascii").digest("hex").toUpperCase()
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

/** Remove XML-incompatible control chars (mirrors the reference). */
function removeIncompatible(text: string): string {
  return text.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "")
}

function mkSsml(voice: string, text: string, ratePct: string): string {
  return (
    `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>` +
    `<voice name='${voice}'>` +
    `<prosody rate='${ratePct}' pitch='+0Hz' volume='+0%'>` +
    escapeSsml(removeIncompatible(text)) +
    `</prosody></voice></speak>`
  )
}

export type EdgeTtsError =
  | { kind: "timeout" }
  | { kind: "rejected"; status: number; dateHeader?: string }
  | { kind: "no-audio" }
  | { kind: "error"; message: string }

function synthesizeOnce(
  voice: string,
  text: string,
  ratePct: string,
  timeoutMs: number
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const url =
      `${WSS_URL}&Sec-MS-GEC=${secMsGec()}` +
      `&Sec-MS-GEC-Version=${SEC_MS_GEC_VERSION}` +
      `&ConnectionId=${hex32()}`

    const ws = new WebSocket(url, { headers: { ...WSS_HEADERS }, handshakeTimeout: Math.min(timeoutMs, 12000) })
    const chunks: Buffer[] = []
    let gotAudio = false
    let settled = false

    const done = (err?: unknown, buf?: Buffer) => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      try {
        ws.close()
      } catch {}
      if (err) reject(err)
      else if (!gotAudio) reject({ kind: "no-audio" } as EdgeTtsError)
      else resolve(buf!)
    }

    const timer = setTimeout(() => done({ kind: "timeout" } as EdgeTtsError), timeoutMs)

    ws.on("open", () => {
      const date = new Date().toUTCString()
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
      ws.send(
        `X-RequestId:${hex32()}\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:${date}Z\r\nPath:ssml\r\n\r\n` +
          mkSsml(voice, text, ratePct)
      )
    })

    ws.on("message", (data: Buffer, isBinary: boolean) => {
      if (isBinary) {
        if (data.length < 2) return
        const headerLen = data.readUInt16BE(0)
        if (headerLen > data.length) return
        const header = data.subarray(2, 2 + headerLen).toString()
        if (header.includes("Path:audio")) {
          const audio = data.subarray(2 + headerLen)
          if (audio.length) {
            gotAudio = true
            chunks.push(audio)
          }
        }
      } else {
        const s = data.toString()
        if (s.includes("Path:turn.end")) done(undefined, Buffer.concat(chunks))
      }
    })

    // 403 handshake rejections surface here — the response's Date header
    // lets us correct clock skew and retry once (same as the reference).
    ws.on("unexpected-response", (_req, res) => {
      done({
        kind: "rejected",
        status: res.statusCode ?? 0,
        dateHeader: res.headers?.date,
      } as EdgeTtsError)
    })
    ws.on("error", (e: Error) => done({ kind: "error", message: e.message } as EdgeTtsError))
    ws.on("close", () => {
      if (!settled) done(undefined, Buffer.concat(chunks))
    })
  })
}

/** Parse an HTTP Date header into unix seconds (NaN if unparseable). */
function httpDateToUnix(dateHeader?: string): number {
  if (!dateHeader) return NaN
  const t = Date.parse(dateHeader)
  return Number.isNaN(t) ? NaN : t / 1000
}

/** Synthesize `text` with an Edge neural voice → mp3 Buffer.
 *  One SSML message per call; callers keep chunks ≤ 900 chars (well under
 *  the reference's 4096-byte message limit). Retries once on a 403 with
 *  clock-skew correction. Throws on failure — the caller falls back to the
 *  workspace Z.ai TTS engine. */
export async function edgeSynthesize(
  voice: string,
  text: string,
  ratePct = "+0%",
  timeoutMs = 20000
): Promise<Buffer> {
  try {
    return await synthesizeOnce(voice, text, ratePct, timeoutMs)
  } catch (e) {
    const err = e as EdgeTtsError
    if (err && typeof err === "object" && err.kind === "rejected" && err.status === 403) {
      const serverDate = httpDateToUnix(err.dateHeader)
      if (!Number.isNaN(serverDate)) {
        // adjust skew, regenerate the token, retry once
        clockSkew = serverDate - Date.now() / 1000
        if (Math.abs(clockSkew) > 1) {
          return synthesizeOnce(voice, text, ratePct, timeoutMs)
        }
      }
    }
    throw e
  }
}

/** mp3 @ 48 kbps CBR → estimated seconds (for probe/testing only). */
export function edgeEstSeconds(mp3: Buffer): number {
  return (mp3.length * 8) / 48000
}
