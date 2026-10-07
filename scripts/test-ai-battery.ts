/** AI battery — live test of EVERY AI endpoint against the running dev
 *  server (127.0.0.1:3000). Answers one question: which AI features work
 *  right now, and which are broken — with the exact error each one gives.
 *
 *  Covers: dd-generate (the reported broken one), chat, translate,
 *  industry, toc-generate, exam-generate, eqr, kam, program-tailor, tts,
 *  asr (real wav fixture), podcast generate + speak, exam-mark (alive
 *  check via 404 path).
 *
 *  Draft-policy endpoints are spaced so the 8/2min limiter never bites.
 *  Run: bun scripts/test-ai-battery.ts   (server must be up on :3000) */
import { readFileSync } from "node:fs"
import { join } from "node:path"

const BASE = "http://127.0.0.1:3000"
const ROOT = process.cwd()

type Result = { name: string; status: number; ms: number; verdict: string; detail: string }

const results: Result[] = []

async function call(
  name: string,
  path: string,
  payload: unknown,
  opts: { timeoutMs?: number; validate?: (r: Response, body: string, buf: ArrayBuffer) => string } = {},
): Promise<void> {
  const t0 = Date.now()
  try {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), opts.timeoutMs ?? 150_000)
    const res = await fetch(`${BASE}${path}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      signal: ctrl.signal,
    })
    clearTimeout(timer)
    const ms = Date.now() - t0
    const buf = await res.arrayBuffer().catch(() => new ArrayBuffer(0))
    const body = buf.byteLength < 200_000 ? new TextDecoder().decode(buf) : `[${buf.byteLength} bytes binary]`
    let verdict = res.ok ? "WORKS" : "FAIL"
    let detail = `${res.status} ${res.statusText} — ${body.slice(0, 220)}`
    if (res.ok && opts.validate) {
      const v = opts.validate(res, body, buf)
      if (v) {
        verdict = "WORKS"
        detail = v
      } else {
        verdict = "BROKEN-RESPONSE"
        detail = `200 but bad payload — ${body.slice(0, 260)}`
      }
    }
    results.push({ name, status: res.status, ms, verdict, detail })
    console.log(`[${verdict}] ${name} — ${ms}ms — ${detail.slice(0, 200)}`)
  } catch (e) {
    const ms = Date.now() - t0
    const msg = e instanceof Error ? e.message : String(e)
    results.push({ name, status: 0, ms, verdict: "ERROR", detail: msg })
    console.log(`[ERROR] ${name} — ${ms}ms — ${msg}`)
  }
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function main() {
  console.log(`AI battery against ${BASE} — ${new Date().toISOString()}\n`)

  /* ---- 1. DD customizer (the reported broken one) ---- */
  await call(
    "dd-generate",
    "/api/ai/dd-generate",
    {
      deal: "acquisition",
      size: "mid",
      target:
        "Delta Textiles SAE — Egyptian family-owned textile manufacturer, EGP 340m revenue, 3 factories in Mahalla, 40% exports to EU, founder holds 85%, 900 employees",
      concerns: "related-party sales to the founder's trading company and slow-moving inventory",
    },
    {
      timeoutMs: 240_000,
      validate: (_r, body) => {
        try {
          const j = JSON.parse(body)
          const t = j?.tailor
          if (!t) return ""
          const n = Array.isArray(t.procs) ? t.procs.length : 0
          const valid = Array.isArray(t.procs) && t.procs.every((p: { sectionId?: string }) => typeof p.sectionId === "string" && p.sectionId.length > 0)
          return `tailor ok — ${n} procs (all sectionIds valid: ${valid}), focus ${t.focus?.length ?? 0}, requests ${t.requests?.length ?? 0}, engine ${t.engine}`
        } catch {
          return ""
        }
      },
    },
  )

  /* ---- 2. chat (SSE) ---- */
  await call(
    "chat (tutor)",
    "/api/ai/chat",
    { message: "In one short sentence: what does ISA 315 cover?" },
    {
      timeoutMs: 120_000,
      validate: (res, body) => {
        const ct = res.headers.get("content-type") ?? ""
        if (!ct.includes("event-stream") && !body.includes("data:")) return ""
        const hasText = /data:/.test(body) && body.length > 80
        return hasText ? `SSE stream ok — ${ct} — first bytes: ${body.slice(0, 90)}` : ""
      },
    },
  )

  /* ---- 3. translate ---- */
  await call("translate", "/api/ai/translate", { text: "Due diligence is the process of investigating a target before committing capital.", target: "ar" }, {
    timeoutMs: 90_000,
    validate: (_r, body) => {
      try {
        const j = JSON.parse(body)
        return j && (j.translation || j.text || j.result) ? `translated — ${String(j.translation ?? j.text ?? j.result).slice(0, 80)}` : ""
      } catch {
        return ""
      }
    },
  })
  await sleep(2000)

  /* ---- 4. industry ---- */
  await call(
    "industry",
    "/api/ai/industry",
    { industry: "textile manufacturing", lang: "en" },
    {
      timeoutMs: 150_000,
      validate: (_r, body) => {
        try {
          const j = JSON.parse(body)
          const keys = Object.keys(j ?? {})
          return keys.length ? `keys: ${keys.slice(0, 6).join(",")}` : ""
        } catch {
          return ""
        }
      },
    },
  )
  await sleep(2000)

  /* ---- 5. kam ---- */
  await call(
    "kam drafter",
    "/api/ai/kam",
    {
      topic: "Impairment of the Mahalla plant machinery",
      entity: "Delta Textiles SAE (FRA-listed)",
      periodEnd: "2026-06-30",
      whySignificant: "CGU carrying value rose 30% while capacity utilization fell to 58%",
      howAddressed: "VImpairment testing with independent valuation specialist; disclosed in note 14",
      listed: true,
    },
    {
      timeoutMs: 150_000,
      validate: (_r, body) => {
        try {
          const j = JSON.parse(body)
          return j && (j.kam || j.text || j.draft) ? "draft ok" : ""
        } catch {
          return ""
        }
      },
    },
  )
  await sleep(2000)

  /* ---- 6. program-tailor ---- */
  await call(
    "program-tailor",
    "/api/ai/program-tailor",
    { sector: "textiles", size: "mid", listed: false, systems: "Oracle NetSuite", concerns: "export receivables factoring" },
    {
      timeoutMs: 150_000,
      validate: (_r, body) => {
        try {
          const j = JSON.parse(body)
          return j && (j.program || j.tailor || j.sections) ? "tailored program ok" : ""
        } catch {
          return ""
        }
      },
    },
  )
  await sleep(2000)

  /* ---- 7. eqr ---- */
  await call(
    "eqr",
    "/api/ai/eqr",
    {
      engagement: {
        client: "Delta Textiles SAE",
        periodEnd: "2026-06-30",
        risk: "Inventory existence at three factories — slow-moving stock understated in provisions",
        materiality: 8500000,
      },
    },
    {
      timeoutMs: 150_000,
      validate: (_r, body) => {
        try {
          const j = JSON.parse(body)
          return j && Object.keys(j).length ? `keys: ${Object.keys(j).slice(0, 6).join(",")}` : ""
        } catch {
          return ""
        }
      },
    },
  )
  await sleep(2000)

  /* ---- 8. exam-generate ---- */
  await call(
    "exam-generate",
    "/api/ai/exam-generate",
    { action: "chunk", area: "audit", topic: "ISA 315 risk assessment", count: 2, difficulty: "medium", lang: "en" },
    {
      timeoutMs: 150_000,
      validate: (_r, body) => {
        try {
          const j = JSON.parse(body)
          return j && (j.questions || j.items || j.done || Object.keys(j).length) ? `keys: ${Object.keys(j).slice(0, 6).join(",")}` : ""
        } catch {
          return ""
        }
      },
    },
  )
  await sleep(2000)

  /* ---- 9. toc-generate ---- */
  await call(
    "toc-generate",
    "/api/ai/toc-generate",
    { industry: "garment manufacturing", caseContext: "family-owned exporter, 3 plants, EU clients, factored receivables", lang: "en" },
    {
      timeoutMs: 200_000,
      validate: (_r, body) => {
        try {
          const j = JSON.parse(body)
          return j && (j.toc || j.lineItems || j.trials || Object.keys(j).length) ? `keys: ${Object.keys(j).slice(0, 6).join(",")}` : ""
        } catch {
          return ""
        }
      },
    },
  )
  await sleep(2000)

  /* ---- 10. tts ---- */
  await call("tts", "/api/ai/tts", { text: "Due diligence smoke test.", speed: 1 }, {
    timeoutMs: 90_000,
    validate: (res, _b, buf) => {
      const ct = res.headers.get("content-type") ?? ""
      return ct.startsWith("audio/") && buf.byteLength > 1000 ? `${ct}, ${buf.byteLength} bytes` : ""
    },
  })

  /* ---- 11. asr (real wav fixture) ---- */
  const wavB64 = readFileSync(join(ROOT, "scripts/voice-probe/douji-en.wav")).toString("base64")
  await call("asr", "/api/ai/asr", { audio: wavB64, lang: "en" }, {
    timeoutMs: 120_000,
    validate: (_r, body) => {
      try {
        const j = JSON.parse(body)
        return j && (j.text || j.transcript) ? `heard: ${String(j.text ?? j.transcript).slice(0, 80)}` : ""
      } catch {
        return ""
      }
    },
  })

  /* ---- 12. podcast generate ---- */
  await call(
    "podcast/generate",
    "/api/ai/podcast/generate",
    { topic: "Why quality of earnings drives deal pricing", style: "two-host", minutes: 2, lang: "en" },
    {
      timeoutMs: 200_000,
      validate: (_r, body) => {
        try {
          const j = JSON.parse(body)
          const turns = j?.turns ?? j?.script
          return Array.isArray(turns) && turns.length ? `${turns.length} turns` : ""
        } catch {
          return ""
        }
      },
    },
  )

  /* ---- 13. podcast speak ---- */
  await call(
    "podcast/speak",
    "/api/ai/podcast/speak",
    { lang: "en", turns: [{ speaker: "host", text: "Welcome to the AuditEdge podcast." }] },
    {
      timeoutMs: 120_000,
      validate: (res, _b, buf) => {
        const ct = res.headers.get("content-type") ?? ""
        return ct.startsWith("audio/") && buf.byteLength > 1000 ? `${ct}, ${buf.byteLength} bytes` : ""
      },
    },
  )

  /* ---- 14. exam-mark (alive check — 404 proves route+auth+DB wired) ---- */
  await call("exam-mark", "/api/ai/exam-mark", { sessionId: "smoke-nonexistent" }, { timeoutMs: 30_000 })

  /* ---- summary ---- */
  console.log("\n================ AI BATTERY SUMMARY ================")
  for (const r of results) {
    const icon = r.verdict === "WORKS" ? "✓" : r.verdict === "FAIL" && r.status === 404 ? "✓" : "✗"
    console.log(`${icon} ${r.name.padEnd(18)} ${r.verdict.padEnd(16)} ${r.status} ${r.ms}ms`)
  }
  const broken = results.filter((r) => !(r.verdict === "WORKS" || (r.verdict === "FAIL" && r.status === 404)))
  console.log(`\n${results.length - broken.length}/${results.length} healthy, ${broken.length} broken`)
  if (broken.length) {
    console.log("\nBroken details:")
    for (const b of broken) console.log(`  ✗ ${b.name}: ${b.detail.slice(0, 300)}`)
  }
  process.exit(broken.length ? 1 : 0)
}

main().catch((e) => {
  console.error("battery crashed:", e)
  process.exit(2)
})
