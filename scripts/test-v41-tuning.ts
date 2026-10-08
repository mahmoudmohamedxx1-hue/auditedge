/** v41 test battery — the AI tuning pass:
 *
 *   1. Registry integrity — 16 named task profiles, all values in range,
 *      near-deterministic tasks always capped (validateTuningRegistry)
 *   2. Family sanity — deterministic ≤ 0.2, professional drafts 0.3-0.6,
 *      generative ≥ 0.7; every non-streaming task capped
 *   3. Sampling-body translation — tuningToSamplingBody maps AiTuning →
 *      OpenAI keys (temperature / top_p / max_tokens), omitting unset keys
 *   4. Live threading — callPoolOnce sends the tuning keys in the actual
 *      HTTP request body (fetch mocked + captured)
 *   5. Wiring — NO untuned call site: every api route that calls
 *      generateOnce/generateStream must pass a tuning profile
 *
 *  Run: bun scripts/test-v41-tuning.ts */
import { readFileSync, readdirSync, statSync } from "node:fs"
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

async function main() {
  console.log("v41 — every AI feature tuned: per-task sampling profiles threaded through the engine chain\n")

  const tuning = await import("../src/lib/ai-tuning")
  const { AI_TUNING, validateTuningRegistry } = tuning
  const pool = await import("../src/lib/keyless-pool")
  const { tuningToSamplingBody, callPoolOnce } = pool

  /* ---------------- 1. registry integrity ---------------- */
  console.log("── 1. Registry integrity ──")
  const expected = [
    "tutorChat",
    "router",
    "summarize",
    "examWrite",
    "examMark",
    "ddTailor",
    "programTailor",
    "tocDesign",
    "eqrReview",
    "kamDraft",
    "industryDossier",
    "translate",
    "podcastScript",
    "studyPlan",
    "simDebrief",
    "simGrade",
  ]
  const names = Object.keys(AI_TUNING)
  check("16 task profiles present", names.length === 16, String(names.length))
  check("exact task set", expected.every((n) => names.includes(n)) && names.length === expected.length)

  const validation = validateTuningRegistry()
  check("all values in range (validateTuningRegistry)", validation.ok, validation.problems.join("; "))
  if (!validation.ok) for (const p of validation.problems) console.log(`      · ${p}`)

  /* ---------------- 2. family sanity ---------------- */
  console.log("── 2. Family sanity ──")
  const T = AI_TUNING as Record<string, { temperature?: number; topP?: number; maxTokens?: number }>

  const deterministic = ["router", "examMark", "simGrade", "translate"]
  check(
    "deterministic family: temperature ≤ 0.2",
    deterministic.every((n) => (T[n].temperature ?? 1) <= 0.2),
    deterministic.map((n) => `${n}=${T[n].temperature}`).join(", ")
  )
  check(
    "deterministic family: every one capped (maxTokens set)",
    deterministic.every((n) => typeof T[n].maxTokens === "number"),
    deterministic.map((n) => `${n}≤${T[n].maxTokens}`).join(", ")
  )

  const professional = ["ddTailor", "programTailor", "eqrReview", "kamDraft", "studyPlan", "tocDesign", "summarize"]
  check(
    "professional-draft family: temperature 0.3-0.6",
    professional.every((n) => (T[n].temperature ?? 0) >= 0.3 && (T[n].temperature ?? 0) <= 0.6),
    professional.map((n) => `${n}=${T[n].temperature}`).join(", ")
  )
  check(
    "professional-draft family: every one capped",
    professional.every((n) => typeof T[n].maxTokens === "number")
  )

  const generative = ["tutorChat", "examWrite", "podcastScript"]
  check(
    "generative family: temperature ≥ 0.7",
    generative.every((n) => (T[n].temperature ?? 0) >= 0.7),
    generative.map((n) => `${n}=${T[n].temperature}`).join(", ")
  )

  // streaming tasks: chat is uncapped (legitimate answer-length variance) —
  // but everything non-streaming must carry a cap
  const uncapped = names.filter((n) => T[n].maxTokens === undefined)
  check("only the streaming tutor-chat path is uncapped", uncapped.join(",") === "tutorChat", uncapped.join(","))

  // the high-frequency hidden calls are the cheapest — quota conservation
  check("router cap ≤ 200 tokens (runs on EVERY chat message)", (T.router.maxTokens ?? 1e9) <= 200, String(T.router.maxTokens))
  check("summarize cap ≤ 640 tokens (every 8 messages)", (T.summarize.maxTokens ?? 1e9) <= 640, String(T.summarize.maxTokens))

  // the biggest JSON generators have enough headroom for their payloads
  check("ddTailor cap ≥ 4096 (16 bilingual procedures)", (T.ddTailor.maxTokens ?? 0) >= 4096, String(T.ddTailor.maxTokens))
  check("tocDesign cap ≥ 4096 (18 questions + 8 procedures)", (T.tocDesign.maxTokens ?? 0) >= 4096, String(T.tocDesign.maxTokens))
  check("podcastScript cap ≥ 5120 (30 dialogue turns)", (T.podcastScript.maxTokens ?? 0) >= 5120, String(T.podcastScript.maxTokens))

  /* ---------------- 3. sampling-body translation ---------------- */
  console.log("── 3. Sampling-body translation ──")
  const empty = tuningToSamplingBody(undefined)
  check("no profile → no sampling keys", Object.keys(empty).length === 0, JSON.stringify(empty))
  const partial = tuningToSamplingBody({ temperature: 0.4 })
  check("partial profile → only set keys", JSON.stringify(partial) === '{"temperature":0.4}', JSON.stringify(partial))
  const full = tuningToSamplingBody({ temperature: 0.9, topP: 0.95, maxTokens: 5600 })
  check(
    "full profile → OpenAI keys temperature/top_p/max_tokens",
    JSON.stringify(full) === '{"temperature":0.9,"top_p":0.95,"max_tokens":5600}',
    JSON.stringify(full)
  )

  /* ---------------- 4. live threading (fetch mocked) ---------------- */
  console.log("── 4. Live threading through the pool ──")
  const realFetch = globalThis.fetch
  let captured: { url: string; body: Record<string, unknown> } | null = null
  globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
    captured = {
      url: String(url),
      body: JSON.parse(String(init?.body ?? "{}")) as Record<string, unknown>,
    }
    return new Response(JSON.stringify({ choices: [{ message: { content: "ok" } }] }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  }) as typeof fetch
  try {
    const text = await callPoolOnce(
      "llm7",
      [{ role: "user", content: "ping" }],
      5_000,
      AI_TUNING.router
    )
    check("mocked pool call returned the text", text === "ok", String(text))
    check(
      "request body carries the tuning keys",
      Boolean(
        captured &&
          captured.body.model === "default" &&
          captured.body.temperature === 0 &&
          typeof captured.body.top_p === "number" &&
          typeof captured.body.max_tokens === "number"
      ),
      captured ? JSON.stringify(captured.body) : "no request captured"
    )
    check(
      "messages + stream still intact alongside tuning",
      Boolean(captured && captured.body.stream === false && Array.isArray(captured.body.messages))
    )
  } finally {
    globalThis.fetch = realFetch
  }

  /* ---------------- 5. wiring: no untuned call site ---------------- */
  console.log("── 5. Wiring — no untuned AI call site ──")
  const walk = (dir: string): string[] =>
    readdirSync(dir).flatMap((f) => {
      const p = join(dir, f)
      return statSync(p).isDirectory() ? walk(p) : p.endsWith("route.ts") ? [p] : []
    })
  const apiRoutes = walk(join(ROOT, "src/app/api"))
  const calling = apiRoutes.filter((p) => {
    const src = readFileSync(p, "utf8")
    return /generateOnce\(|generateStream\(/.test(src)
  })
  check("13 route files call the generation chain", calling.length === 13, String(calling.length))
  const untuned = calling.filter((p) => !readFileSync(p, "utf8").includes("AI_TUNING."))
  check("every calling route passes a tuning profile", untuned.length === 0, untuned.map((p) => p.replace(ROOT + "/", "")).join(", ") || "all tuned")

  const libAi = readFileSync(join(ROOT, "src/lib/ai.ts"), "utf8")
  check("the router decision (decideSearch) is tuned", libAi.includes("AI_TUNING.router"))
  // 6 explicit `tuning: opts.tuning` passes (key main + key retry + pool hop,
  // in BOTH generateStream and generateOnce) + 2 SDK body spreads
  const threaded = (libAi.match(/opts\.tuning/g) ?? []).length
  check(
    "all 3 engine paths thread tuning (key body, SDK body, pool calls)",
    threaded >= 8,
    `${threaded} references to opts.tuning`
  )
  const poolSrc = readFileSync(join(ROOT, "src/lib/keyless-pool.ts"), "utf8")
  check(
    "both pool call paths spread the sampling body",
    (poolSrc.match(/\.\.\.tuningToSamplingBody\(tuning\)/g) ?? []).length === 2
  )

  /* ---------------- verdict ---------------- */
  console.log(`\n${pass} passed, ${fail} failed`)
  if (fail > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
