/**
 * v42 — the Closing Suite + progressive transport + durable-data battery.
 *
 * Covers the three pillars of the release, offline and cheap (a live SSE
 * smoke test is included but only runs with LIVE=1 so the daily battery
 * never burns the keyless LLM7 quota):
 *
 *   1. TUNING — the 4 new Closing Suite profiles exist, sit in the
 *      professional-draft family, and are token-capped.
 *   2. PROGRESSIVE TRANSPORT — the SSE helper emits the exact wire format
 *      (stage / heartbeat / result / error), the client parser resolves a
 *      result event and rejects an error event, and the plain-JSON
 *      fallback still works.
 *   3. WIRING — the 4 new routes exist, are rate-limited, auth-guarded
 *      and tuned; the 4 retrofitted generators speak BOTH transports;
 *      the clients (DD third tab, closing-suite mounts, tickers) are in
 *      place; the dd42/ai42 i18n keys resolve; the engagement-docs /
 *      report-draft prompts are grounded in the engagement bundle; the
 *      fraud hypotheses carry the risk-matrix bridge; the Postgres seed
 *      path is wired into db-deploy and /api/health reports the db mode.
 *
 * Run: bun scripts/test-v42-closing.ts          (offline battery)
 *      LIVE=1 bun scripts/test-v42-closing.ts   (+ one live SSE smoke)
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs"
import { join } from "node:path"

let pass = 0
let fail = 0
function check(name: string, ok: boolean, detail = "") {
  const mark = ok ? "✓" : "✗"
  console.log(`  ${mark} ${name}${detail ? ` — ${detail}` : ""}`)
  if (ok) pass++
  else fail++
}

const ROOT = process.cwd()
const read = (p: string) => readFileSync(join(ROOT, p), "utf8")

async function main() {
  console.log("v42 — the Closing Suite: ISA 700/240/210/300 + DD deal brief, progressive transport, durable data\n")

  /* ---------------- 1. tuning ---------------- */
  console.log("── 1. The four Closing Suite tuning profiles ──")
  const { AI_TUNING, validateTuningRegistry } = await import("../src/lib/ai-tuning")
  const suite: [keyof typeof AI_TUNING, number][] = [
    ["reportDraft", 0.3],
    ["dealBrief", 0.4],
    ["fraudBrainstorm", 0.5],
    ["engagementDoc", 0.4],
  ]
  for (const [name, temp] of suite) {
    const p = AI_TUNING[name] as { temperature?: number; maxTokens?: number } | undefined
    check(`${name} exists in the registry`, Boolean(p))
    check(`${name} is a professional draft (temperature ${temp})`, p?.temperature === temp)
    check(`${name} is token-capped (quota discipline)`, typeof p?.maxTokens === "number" && (p?.maxTokens ?? 0) >= 800, String(p?.maxTokens))
  }
  const reg = validateTuningRegistry()
  check("the whole registry still validates (ranges, near-deterministic caps)", reg.ok, reg.problems.join("; "))

  /* ---------------- 2. progressive transport ---------------- */
  console.log("── 2. The SSE progressive transport ──")
  const sse = await import("../src/lib/ai-sse")
  check("wantsProgress reads the X-AI-Progress header", sse.wantsProgress(new Request("http://x/", { headers: { "x-ai-progress": "1" } })))
  check("wantsProgress is false without the header", !sse.wantsProgress(new Request("http://x/")))

  // server: a work fn's stages + result must land in the stream, in order
  const res = sse.sseProgress(async (emit) => {
    emit({ i: 0, id: "reading" })
    emit({ i: 1, id: "writing" })
    return { ok: true, payload: { hello: "world" } }
  })
  check("sseProgress answers text/event-stream", (res.headers.get("content-type") ?? "").includes("text/event-stream"))
  const raw = await new Response(res.body!).text()
  check("the stream carries both stage events", raw.includes('event: stage') && raw.split("event: stage").length - 1 === 2)
  check("the stream ends with the result event + payload", raw.includes('event: result') && raw.includes('"hello":"world"'))
  const errRes = sse.sseProgress(async () => ({ ok: false, error: "boom", status: 502 }))
  const errRaw = await new Response(errRes.body!).text()
  check("an error outcome maps to the error event", errRaw.includes('event: error') && errRaw.includes('"error":"boom"'))

  // client: the parser resolves result events and rejects error events
  const { aiJson } = await import("../src/lib/ai-client")
  const sseResponse = (events: string) =>
    new Response(events, { status: 200, headers: { "content-type": "text/event-stream" } })
  const realFetch = globalThis.fetch
  try {
    const stages: { i: number; id: string }[] = []
    globalThis.fetch = (async () =>
      sseResponse(
        'event: stage\ndata: {"i":0,"id":"reading"}\n\nevent: stage\ndata: {"i":1,"id":"writing"}\n\nevent: result\ndata: {"draft":"ok"}\n\n'
      )) as unknown as typeof fetch
    const out = await aiJson<{ draft: string }>("/api/ai/x", {}, { onStage: (s) => stages.push(s) })
    check("aiJson resolves the result payload from the stream", out.draft === "ok")
    check("aiJson dispatched every stage live", stages.length === 2 && stages[1].id === "writing")

    globalThis.fetch = (async () =>
      sseResponse('event: error\ndata: {"error":"the model is busy","status":502}\n\n')) as unknown as typeof fetch
    let rejected = ""
    try {
      await aiJson("/api/ai/x", {})
    } catch (e) {
      rejected = e instanceof Error ? e.message : ""
    }
    check("aiJson rejects with the server's error message", rejected === "the model is busy", rejected)

    globalThis.fetch = (async () =>
      new Response(JSON.stringify({ draft: "plain" }), { status: 200, headers: { "content-type": "application/json" } })) as unknown as typeof fetch
    const plain = await aiJson<{ draft: string }>("/api/ai/x", {})
    check("aiJson falls back to plain JSON transparently", plain.draft === "plain")
  } finally {
    globalThis.fetch = realFetch
  }

  /* ---------------- 3. wiring: routes ---------------- */
  console.log("── 3. Route wiring — the Closing Suite + the retrofitted generators ──")
  const newRoutes = [
    ["src/app/api/ai/report-draft/route.ts", "reportDraft", "engagementBundleMd"],
    ["src/app/api/ai/dd-brief/route.ts", "dealBrief", "workstreams"],
    ["src/app/api/ai/fraud-brainstorm/route.ts", "fraudBrainstorm", "engagementBundleMd"],
    ["src/app/api/ai/engagement-docs/route.ts", "engagementDoc", "engagementBundleMd"],
  ] as const
  for (const [path, tuning, grounding] of newRoutes) {
    const src = read(path)
    check(`${path.split("/").at(-2)} exists and is tuned (${tuning})`, src.includes(`AI_TUNING.${tuning}`))
    check(`${path.split("/").at(-2)} is rate-limited + auth-guarded`, src.includes("aiRateLimit") && src.includes("getSessionUser"))
    check(`${path.split("/").at(-2)} is grounded in the engagement (${grounding})`, src.includes(grounding))
    check(`${path.split("/").at(-2)} speaks the progressive transport natively`, src.includes("sseProgress") && src.includes("wantsProgress"))
  }

  const retrofitted = [
    "src/app/api/ai/dd-generate/route.ts",
    "src/app/api/ai/program-tailor/route.ts",
    "src/app/api/ai/toc-generate/route.ts",
    "src/app/api/ai/exam-generate/route.ts",
  ]
  for (const p of retrofitted) {
    const src = read(p)
    check(`${p.split("/").at(-2)} carries BOTH transports (backward compatible)`, src.includes("sseProgress") && src.includes("wantsProgress") && src.includes("Response.json(out.payload)"))
  }

  /* ---------------- 4. wiring: clients + i18n ---------------- */
  console.log("── 4. Client wiring — mounts, tickers, i18n ──")
  check("the DD hub has the third deal-brief tab", read("src/components/audit/due-diligence.tsx").includes('value="brief"'))
  check("the DD customizer runs progressively with a cancel", read("src/components/audit/due-diligence.tsx").includes("aiJson") && read("src/components/audit/due-diligence.tsx").includes("StageTicker"))
  const ddBrief = read("src/components/audit/dd-brief.tsx")
  check("the deal-brief panel harvests the real tick state", ddBrief.includes("progress[") && ddBrief.includes("workstreams: harvested"))
  const closing = read("src/components/audit/closing-suite.tsx")
  check("the fraud hypotheses bridge into the risk matrix (significant: true)", closing.includes("significant: true") && closing.includes("riskMatrix"))
  check("the ISA 700 drafter prefills the KAM text from the completion section", closing.includes('"auditedge-kam-draft"'))
  const program = read("src/components/audit/program.tsx")
  check("the letter + brainstorm mount in methodology, the memo in risk-assessment", program.includes('section.id === "methodology"') && program.includes('kind="letter"') && program.includes('kind="memo"'))
  check("the ISA 700 drafter mounts in the close-out tab", program.includes("<Isa700Drafter"))
  for (const c of ["src/components/audit/program-tailor.tsx", "src/components/audit/toc-hub.tsx", "src/components/audit/exam-center.tsx"]) {
    check(`${c.split("/").at(-1)} runs progressively (aiJson + StageTicker)`, read(c).includes("aiJson") && read(c).includes("StageTicker"))
  }

  const i18n = read("src/lib/i18n.ts")
  for (const key of ["dd42.tabTitle", "dd42.generate", "dd42.needTicks", "dd42.aiStageWriting", "ai42.cancel", "ai42.stageStructuring"]) {
    check(`i18n key ${key} resolves`, i18n.includes(key.split(".")[1] + ":"))
  }
  const { tt } = await import("../src/lib/i18n")
  check("tt('dd42.tabTitle') returns real text (not the path)", tt("dd42.tabTitle", "en") === "Deal brief" && tt("dd42.tabTitle", "ar") === "موجز الصفقة")

  /* ---------------- 5. durable data ---------------- */
  console.log("── 5. Durable data — the Postgres upgrade path ──")
  const seed = read("scripts/db-seed-postgres.ts")
  check("the seeder exists and is postgres-guarded", existsSync(join(ROOT, "scripts/db-seed-postgres.ts")) && seed.includes("postgres(ql)?") === false ? seed.includes("process.exit(0)") && seed.includes("DATABASE_URL") : true)
  check("the seeder seeds in FK order (User → Course → … → BankQuestion)", seed.indexOf('"User"') < seed.indexOf('"Course"') && seed.indexOf('"Course"') < seed.indexOf('"Module"') && seed.indexOf('"Module"') < seed.indexOf('"Lesson"') && seed.indexOf('"Lesson"') < seed.indexOf('"Quiz"') && seed.indexOf('"Quiz"') < seed.indexOf('"BankQuestion"'))
  check("the seeder maps sqlite booleans + dates for Postgres", seed.includes("toBool") && seed.includes("toDate"))
  check("db-deploy runs the seed after the schema push", read("scripts/db-deploy.ts").includes("db-seed-postgres"))
  const health = read("src/app/api/health/route.ts")
  check("/api/health reports the db mode + counts", health.includes('"postgres"') && health.includes('"snapshot"') && health.includes("bankQuestion"))
  check("the Neon walkthrough exists", existsSync(join(ROOT, "docs/DURABLE-DATA-SETUP.md")))

  /* ---------------- 6. live smoke (optional) ---------------- */
  if (process.env.LIVE === "1") {
    console.log("── 6. LIVE smoke — one SSE round-trip through the real keyless chain ──")
    try {
      const live = await fetch("http://localhost:3000/api/ai/dd-brief", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-AI-Progress": "1" },
        body: JSON.stringify({
          deal: "lending",
          size: "mid",
          target: "a mid-market Egyptian food distributor, EGP 400m revenue",
          concerns: "",
          workstreams: [
            { sectionId: "cash", code: "FIN-CSH", title: "Cash & banking", scope: "financial", done: 6, total: 8, ai: 0 },
            { sectionId: "borrowings", code: "FIN-DBT", title: "Borrowings", scope: "financial", done: 2, total: 9, ai: 0 },
          ],
        }),
      })
      const text = await live.text()
      check("live SSE answers the wire format end-to-end", text.includes("event: stage") && text.includes("event: result"), text.slice(0, 80))
    } catch (e) {
      check("live SSE smoke (dev server on :3000 required)", false, e instanceof Error ? e.message : String(e))
    }
  } else {
    console.log("── 6. LIVE smoke skipped (LIVE=1 to run — keeps the battery quota-free) ──")
  }

  /* ---------------- verdict ---------------- */
  console.log(`\n${pass} passed, ${fail} failed`)
  if (fail > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
