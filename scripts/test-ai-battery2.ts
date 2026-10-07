/** AI battery part 2 — the endpoints the first run never reached, with
 *  SSE-safe reading (consume incrementally, cancel early — never
 *  arrayBuffer() a live stream).
 *  Run: bun scripts/test-ai-battery2.ts */
import { readFileSync } from "node:fs"
import { join } from "node:path"

const BASE = "http://127.0.0.1:3000"
const ROOT = process.cwd()

async function post(name: string, path: string, payload: unknown, timeoutMs: number, isSSE = false): Promise<void> {
  const t0 = Date.now()
  try {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), timeoutMs)
    const res = await fetch(`${BASE}${path}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      signal: ctrl.signal,
    })
    const ms0 = Date.now() - t0
    const ct = res.headers.get("content-type") ?? ""

    if (isSSE || ct.includes("event-stream")) {
      // read the stream incrementally; stop after 6s of tokens or stream end
      const reader = (res.body as ReadableStream<Uint8Array>).getReader()
      const dec = new TextDecoder()
      let body = ""
      const giveUp = Date.now() + 6000
      while (Date.now() < giveUp) {
        const { done, value } = await Promise.race([reader.read(), new Promise((r) => setTimeout(() => r({ done: true }), 3000))])
        if (done) break
        body += dec.decode(value, { stream: true })
        if (body.length > 4000) break
      }
      clearTimeout(timer)
      try { await reader.cancel() } catch {}
      const ms = Date.now() - t0
      const ok = res.ok && body.includes("data:") && (body.includes("delta") || body.includes("token") || body.includes('"text"') || body.length > 500)
      console.log(`[${ok ? "WORKS" : "CHECK"}] ${name} — ${ms}ms — ${ct} — stream ${body.length}B: ${body.replace(/\s+/g, " ").slice(0, 150)}`)
      return
    }

    const buf = await res.arrayBuffer()
    clearTimeout(timer)
    const ms = Date.now() - t0
    const body = buf.byteLength < 100_000 ? new TextDecoder().decode(buf) : `[binary ${buf.byteLength}B]`
    if (ct.startsWith("audio/")) {
      console.log(`[${res.ok && buf.byteLength > 1000 ? "WORKS" : "FAIL"}] ${name} — ${ms}ms — ${ct} ${buf.byteLength}B`)
      return
    }
    console.log(`[${res.ok ? "WORKS" : "FAIL"}] ${name} — ${ms}ms — ${res.status} — ${body.replace(/\s+/g, " ").slice(0, 180)}`)
  } catch (e) {
    console.log(`[ERROR] ${name} — ${Date.now() - t0}ms — ${e instanceof Error ? e.message : e}`)
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function main() {
  console.log(`AI battery part 2 — ${new Date().toISOString()}`)

  await post("industry (SSE recheck)", "/api/ai/industry", { industry: "textile manufacturing", lang: "en" }, 90_000, true)
  await sleep(1500)

  await post("exam-generate", "/api/ai/exam-generate", { action: "chunk", area: "audit", topic: "ISA 315 risk assessment", count: 2, difficulty: "medium", lang: "en" }, 120_000)
  await sleep(1500)

  await post("toc-generate", "/api/ai/toc-generate", { industry: "garment manufacturing", caseContext: "family-owned exporter, 3 plants, EU clients, factored receivables", lang: "en" }, 180_000)
  await sleep(1500)

  await post("tts", "/api/ai/tts", { text: "Due diligence smoke test.", speed: 1 }, 90_000)

  const wavB64 = readFileSync(join(ROOT, "scripts/voice-probe/douji-en.wav")).toString("base64")
  await post("asr", "/api/ai/asr", { audio: wavB64, lang: "en" }, 120_000)
  await sleep(1500)

  await post("podcast/generate", "/api/ai/podcast/generate", { topic: "Why quality of earnings drives deal pricing", style: "two-host", minutes: 2, lang: "en" }, 180_000)
  await sleep(1500)

  await post("podcast/speak", "/api/ai/podcast/speak", { lang: "en", turns: [{ speaker: "host", text: "Welcome to the AuditEdge podcast." }] }, 120_000)

  await post("exam-mark (404=alive)", "/api/ai/exam-mark", { sessionId: "smoke-nonexistent" }, 30_000)

  console.log("part 2 done")
}

main()
