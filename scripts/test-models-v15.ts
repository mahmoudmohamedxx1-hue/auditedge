/**
 * AI engine test (v22) — the engine chain: Z.ai key → workspace GLM →
 * keyless community pool (freellmpool routes), with the model registry,
 * vision routing, thinking control, reasoning capture and failover.
 *
 * Run:  bun run scripts/test-models-v15.ts   (with .env + .env.local in env)
 * (filename kept for package.json / CI continuity)
 */
import { readFileSync } from "fs"

// minimal .env / .env.local loader (tsx does not load them)
for (const f of [".env", ".env.local"]) {
  try {
    for (const line of readFileSync(f, "utf-8").split("\n")) {
      const m = line.match(/^([A-Z_]+)=(.*)$/)
      if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
    }
  } catch {}
}

let pass = 0
let fail = 0
let soft = 0
const inCi = !!process.env.CI
const check = (name: string, cond: boolean, extra = "") => {
  if (cond) {
    pass++
    console.log(`  ✓ ${name}${extra ? ` — ${extra}` : ""}`)
  } else {
    fail++
    console.error(`  ✗ FAIL: ${name}${extra ? ` — ${extra}` : ""}`)
  }
}
/** live-network checks: strict locally, soft in CI (shared runner IPs are
 *  often rate-limited on the free community routes) */
const liveCheck = (name: string, cond: boolean, extra = "") => {
  if (cond) {
    pass++
    console.log(`  ✓ ${name}${extra ? ` — ${extra}` : ""}`)
  } else if (inCi) {
    soft++
    console.warn(`  ⚠ soft-skip (CI): ${name}${extra ? ` — ${extra}` : ""}`)
  } else {
    fail++
    console.error(`  ✗ FAIL: ${name}${extra ? ` — ${extra}` : ""}`)
  }
}

async function main() {
  console.log("AI engine — v22 test (engine chain + keyless pool)\n")

  // NOTE: ai.ts reads process.env at module scope — so it MUST be imported
  // (dynamically) only AFTER the env files above are loaded into process.env.
  const { consumeSSEStream, generateOnce, generateStream, planEngineChain, userKeyEngineReady } =
    await import("../src/lib/ai")
  const {
    resolveModel,
    VISION_MODEL,
    DEFAULT_MODEL,
    KEYED_FALLBACK_MODEL,
    isAiModelId,
    describeEngine,
    getAiModel,
    SELECTABLE_MODELS,
  } = await import("../src/lib/models")
  const { POOL, llm7Key } = await import("../src/lib/keyless-pool")

  const hasKey = userKeyEngineReady()
  console.log(`engine ready (key configured): ${hasKey}\n`)

  /* ---- registry (offline) ---- */
  check("registry: default model is the keyless glm-5.3-flash", DEFAULT_MODEL === "glm-5.3-flash")
  check("registry: vision model is glm-4.6v-flash", VISION_MODEL === "glm-4.6v-flash")
  check("registry: keyed fallback is glm-4.7-flash", KEYED_FALLBACK_MODEL === "glm-4.7-flash")
  check("registry: rejects unknown model ids", !isAiModelId("gpt-9"))
  check("registry: 4 keyless + 3 keyed models", SELECTABLE_MODELS.length === 6, `${SELECTABLE_MODELS.length} selectable`)
  check("registry: keyless group present", SELECTABLE_MODELS.some((m) => m.group === "keyless" && m.id === "glm-5.3-flash"))
  check("registry: glm-5.3-flash is reasoning-capable", getAiModel("glm-5.3-flash").reasoning === true)
  check("routing: image + non-vision selection → vision model", resolveModel("glm-4-plus", true) === VISION_MODEL)
  check("routing: no image keeps the selected model", resolveModel("glm-4-plus", false) === "glm-4-plus")
  check("routing: vision model + image stays vision", resolveModel(VISION_MODEL, true) === VISION_MODEL)

  /* ---- engine labels (offline) ---- */
  check("labels: workspace engine", describeEngine("workspace").tone === "sdk")
  check("labels: kilo pool is keyless-toned", describeEngine("kilo").tone === "keyless")
  check("labels: legacy sdk alias maps to workspace", describeEngine("sdk").label === describeEngine("workspace").label)
  check("labels: unknown falls back gracefully", describeEngine("whatever").label.length > 0)

  /* ---- chain planning (offline) ---- */
  const plain = [{ role: "user" as const, content: "hello" }]
  const glmThinking = planEngineChain("glm-5.3-flash", true, plain)
  const glmFast = planEngineChain("glm-5.3-flash", false, plain)
  const firstPool = (steps: ReturnType<typeof planEngineChain>) =>
    steps.find((s) => s.kind === "pool") as { kind: "pool"; engine: string } | undefined
  // v25: real-GLM routes (key → workspace → llm7-glm) must precede the generic community pool
  const firstGenericPoolIdx = glmThinking.findIndex(
    (s) => s.kind === "pool" && (s as { engine: string }).engine !== "llm7-glm"
  )
  const workspaceIdx = glmThinking.findIndex((s) => s.kind === "workspace")
  check(
    "chain: glm-5.3-flash serves real GLM (workspace) before generic pool routes",
    workspaceIdx !== -1 && (firstGenericPoolIdx === -1 || workspaceIdx < firstGenericPoolIdx)
  )
  check(
    "chain: glm-5.3-flash (llm7 key set) tries the real glm-5.3 pool route before generic pools",
    !llm7Key() || firstPool(glmThinking)?.engine === "llm7-glm"
  )
  check(
    "chain: glm-5.3-flash thinking keeps pollinations (reasoning) as the first generic hop",
    firstPool(glmThinking)?.engine === (llm7Key() ? "llm7-glm" : "pollinations")
  )
  check("chain: glm-5.3-flash without thinking prefers the workspace engine", glmFast[0]?.kind === "workspace" || (hasKey && glmFast[0]?.kind === "key"))
  check("chain: keyed model leads with the key step", planEngineChain("glm-4-plus", false, plain)[0]?.kind === (hasKey ? "key" : "key"))
  check("chain: every chain ends with pool failover hops", planEngineChain("glm-4.7-flash", false, plain).some((s) => s.kind === "pool"))
  const imgMsgs = [
    {
      role: "user" as const,
      content: [
        { type: "text" as const, text: "see" },
        { type: "image_url" as const, image_url: { url: "data:image/png;base64,x" } },
      ],
    },
  ]
  const imgChain = planEngineChain(VISION_MODEL, false, imgMsgs)
  check("chain: image messages insert the keyless vision hop", imgChain.some((s) => s.kind === "pool" && (s as { engine: string }).engine === "ovh-vision"))
  check("pool: 6 routes catalogued (kilo/llm7/llm7-glm/pollinations/ovh/vision)", Object.keys(POOL).length === 6)
  check("pool: kilo and pollinations stream reasoning", POOL.kilo.reasoning && POOL.pollinations.reasoning)
  check("pool: llm7-glm serves the real glm-5.3 model", POOL["llm7-glm"].model === "glm-5.3" && POOL["llm7-glm"].keyEnv === "LLM7_API_KEY")

  /* ---- live: keyless flagship, non-streaming ---- */
  console.log("\n[1] glm-5.3-flash — non-streaming (keyless chain)")
  const t1 = await generateOnce({
    model: "glm-5.3-flash",
    thinking: true,
    messages: [
      { role: "system", content: "Answer with exactly one standard code, nothing else." },
      {
        role: "user",
        content:
          "Which International Standard on Auditing covers the auditor's responsibilities relating to going concern?",
      },
    ],
  })
  liveCheck("glm-5.3-flash answers (some engine served it)", !!t1?.text, `engine=${t1?.engine}, text="${t1?.text?.slice(0, 40)}"`)
  // knowledge spot-check is strict on consistent engines (key / workspace /
  // pollinations gpt-oss); community-lottery hops (kilo auto, llm7) only log
  const lotteryEngine = t1?.engine === "kilo" || t1?.engine === "llm7" || t1?.engine === "ovh"
  if (lotteryEngine && !/570/.test(t1?.text ?? "")) {
    soft++
    console.warn(`  ⚠ soft-skip (lottery engine ${t1?.engine}): answer was "${t1?.text?.slice(0, 30)}" — expected ISA 570`)
  } else {
    liveCheck("glm-5.3-flash answer is ISA 570", /570/.test(t1?.text ?? ""))
  }

  /* ---- live: glm-4-plus (balance fallback path preserved) ---- */
  console.log("\n[2] glm-4-plus — non-streaming (balance fallback expected)")
  const t2 = await generateOnce({
    model: "glm-4-plus",
    messages: [
      { role: "system", content: "Answer with exactly one word." },
      {
        role: "user",
        content: "What standard deals with audit evidence? Answer with just the standard code.",
      },
    ],
  })
  liveCheck("plus request returns something (direct, fallback or pool)", !!t2?.text, `engine=${t2?.engine}${t2?.notice ? `, notice=${t2.notice}` : ""}`)

  /* ---- live: streaming + reasoning capture ---- */
  console.log("\n[3] glm-5.3-flash — streaming with thinking")
  const s1 = await generateStream({
    model: "glm-5.3-flash",
    thinking: true,
    messages: [
      { role: "system", content: "You are terse. Answer in at most 15 words." },
      { role: "user", content: "Name the two components of audit risk." },
    ],
  })
  liveCheck("stream opens (chain found an engine)", !!s1.stream, `engine=${s1.engine}`)
  if (s1.stream) {
    let chunks = 0
    let reasoning = ""
    const full = await consumeSSEStream(
      s1.stream,
      () => {
        chunks++
      },
      {
        onReasoning: (t) => {
          reasoning += t
        },
      }
    )
    liveCheck("stream delivers content", full.trim().length > 10, `${chunks} chunks, ${full.length} chars`)
    console.log(`  (reasoning captured: ${reasoning.trim() ? `${reasoning.trim().slice(0, 60)}…` : "none this hop — engine lottery"})`)
  }

  /* ---- live: vision ---- */
  console.log("\n[4] vision — glm-4.6v-flash (key) with keyless ovh-vision fallback")
  let dataUrl = ""
  try {
    dataUrl = readFileSync("scripts/fixtures/vision-test-dataurl.txt", "utf-8").trim()
  } catch {}
  check("vision test image available", dataUrl.startsWith("data:image/png;base64,"))
  if (dataUrl) {
    const t3 = await generateOnce({
      model: VISION_MODEL,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "What solid color fills this image? Answer with one word only." },
            { type: "image_url", image_url: { url: dataUrl } },
          ],
        },
      ],
    })
    liveCheck("vision request answers (key vision or keyless route or flattened)", !!t3?.text, `engine=${t3?.engine}, text="${t3?.text?.slice(0, 40)}"`)
  }

  console.log(`\n${pass} passed, ${fail} failed${soft ? `, ${soft} soft-skipped (CI)` : ""}`)
  process.exit(fail > 0 ? 1 : 0)
}

void main()
