/** v40 focused retest — the two battery failures + the main-model policy:
 *  eqr partial payload, podcast/speak valid 2-turn shape, chat legacy model
 *  coercion, and the status endpoint. Run: bun scripts/test-v40-retest.ts */
const BASE = "http://127.0.0.1:3000"

async function post(name: string, path: string, payload: unknown, timeoutMs: number) {
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

    // SSE — read incrementally, cap at 8s of tokens
    if (ct.includes("event-stream")) {
      const reader = (res.body as ReadableStream<Uint8Array>).getReader()
      const dec = new TextDecoder()
      let body = ""
      const giveUp = Date.now() + 8000
      while (Date.now() < giveUp) {
        const { done, value } = await Promise.race([
          reader.read(),
          new Promise<{ done: true }>((r) => setTimeout(() => r({ done: true }), 3000)),
        ])
        if (done) break
        body += dec.decode(value, { stream: true })
        if (body.length > 3000) break
      }
      clearTimeout(timer)
      try {
        await reader.cancel()
      } catch {}
      const model = body.match(/"model":"([^"]+)"/)?.[1]
      const engine = body.match(/"engine":"([^"]+)"/)?.[1]
      console.log(`[${res.ok ? "WORKS" : "FAIL"}] ${name} — ${Date.now() - t0}ms — SSE ${body.length}B — model=${model} engine=${engine}`)
      return
    }

    const buf = await res.arrayBuffer()
    clearTimeout(timer)
    const ms = Date.now() - t0
    if (ct.startsWith("audio/")) {
      console.log(`[${res.ok && buf.byteLength > 1000 ? "WORKS" : "FAIL"}] ${name} — ${ms}ms — ${ct} ${buf.byteLength}B`)
      return
    }
    const body = new TextDecoder().decode(buf).replace(/\s+/g, " ")
    console.log(`[${res.ok ? "WORKS" : "FAIL"}] ${name} — ${ms}ms — ${res.status} — ${body.slice(0, 220)}`)
  } catch (e) {
    console.log(`[ERROR] ${name} — ${Date.now() - t0}ms — ${e instanceof Error ? e.message : e}`)
  }
}

async function get(name: string, path: string) {
  const t0 = Date.now()
  try {
    const res = await fetch(`${BASE}${path}`)
    const body = await res.text()
    console.log(`[${res.ok ? "WORKS" : "FAIL"}] ${name} — ${Date.now() - t0}ms — ${res.status} — ${body.slice(0, 160)}`)
  } catch (e) {
    console.log(`[ERROR] ${name} — ${e instanceof Error ? e.message : e}`)
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function main() {
  console.log(`v40 retest — ${new Date().toISOString()}\n`)

  // 1. eqr with the EXACT battery payload that 500'd (numeric materiality)
  await post(
    "eqr (numeric materiality — the 500 payload)",
    "/api/ai/eqr",
    {
      engagement: {
        client: "Delta Textiles SAE",
        periodEnd: "2026-06-30",
        risk: "Inventory existence at three factories — slow-moving stock understated in provisions",
        materiality: 8500000,
      },
    },
    150_000
  )
  await sleep(2000)

  // 2. eqr with a partial memo (missing numbers) — must also survive
  await post(
    "eqr (partial memo object)",
    "/api/ai/eqr",
    { engagement: { client: "Delta Textiles SAE", periodEnd: "2026-06-30", materiality: { rationale: "draft only" } } },
    150_000
  )
  await sleep(2000)

  // 3. podcast/speak with the VALID two-turn shape
  await post(
    "podcast/speak (2 turns)",
    "/api/ai/podcast/speak",
    {
      lang: "en",
      turns: [
        { speaker: "host", text: "Welcome to the AuditEdge podcast." },
        { speaker: "guest", text: "Happy to be here. Let's talk materiality." },
      ],
    },
    120_000
  )
  await sleep(2000)

  // 4. chat with a LEGACY pool model id — must coerce to the main model
  await post(
    "chat (legacy model id pool-kilo-auto)",
    "/api/ai/chat",
    { message: "In one short sentence: what does ISA 330 cover?", model: "pool-kilo-auto" },
    120_000
  )
  await sleep(2000)

  // 5. status — the main-model declaration
  await get("ai/status", "/api/ai/status")
}

main()
