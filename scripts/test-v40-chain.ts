/** v40 offline verification — the GLM 5.3 Flash main-model policy:
 *  chain order, normalization, and the GLM-only picker. No network. */
import { planEngineChain, generateStream } from "@/lib/ai"
import { DEFAULT_MODEL, SELECTABLE_MODELS, normalizeModelId, describeEngine } from "@/lib/models"

let pass = 0
let fail = 0
function check(name: string, actual: unknown, expected: unknown) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected)
  if (ok) pass++
  else fail++
  console.log(`${ok ? "PASS" : "FAIL"} ${name}${ok ? "" : ` — got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)}`}`)
}

// 1. main model chain: SDK workspace LEADS, then (no key/llm7 here) pool tail
const chain = planEngineChain("glm-5.3-flash", false, [{ role: "user", content: "hi" }])
check(
  "glm-5.3-flash chain = [workspace, pollinations, llm7, kilo, ovh]",
  chain.map((s) => ("engine" in s ? `pool:${s.engine}` : s.kind)),
  ["workspace", "pool:pollinations", "pool:llm7", "pool:kilo", "pool:ovh"]
)

// 2. key-tier selection keeps the key first, then the SDK engine
const keyed = planEngineChain("glm-4-plus", false, [{ role: "user", content: "hi" }])
check(
  "glm-4-plus chain = [key, workspace, pollinations, llm7, kilo, ovh]",
  keyed.map((s) => ("engine" in s ? `pool:${s.engine}` : s.kind)),
  ["key", "workspace", "pool:pollinations", "pool:llm7", "pool:kilo", "pool:ovh"]
)

// 3. vision messages route to the keyless vision pool before the tail
const vision = planEngineChain("glm-4.6v-flash", false, [
  { role: "user", content: [{ type: "text", text: "look" }, { type: "image_url", image_url: { url: "data:image/png;base64,x" } }] },
])
check(
  "vision chain puts ovh-vision before the pool tail",
  vision.map((s) => ("engine" in s ? `pool:${s.engine}` : s.kind)),
  ["key", "pool:ovh-vision", "workspace", "pool:pollinations", "pool:llm7", "pool:kilo", "pool:ovh"]
)

// 4. normalization — legacy pool ids and junk coerce to the main model
check("normalizeModelId('pool-kilo-auto') → main", normalizeModelId("pool-kilo-auto"), "glm-5.3-flash")
check("normalizeModelId('pool-qwen3.5-397b') → main", normalizeModelId("pool-qwen3.5-397b"), "glm-5.3-flash")
check("normalizeModelId('junk') → main", normalizeModelId("junk"), DEFAULT_MODEL)
check("normalizeModelId(undefined) → main", normalizeModelId(undefined), DEFAULT_MODEL)
check("normalizeModelId('glm-4-plus') kept", normalizeModelId("glm-4-plus"), "glm-4-plus")

// 5. the picker is GLM-only: main model + key tier, no pool ids, no vision
check(
  "SELECTABLE_MODELS = [glm-5.3-flash, glm-4.7-flash, glm-4-plus]",
  SELECTABLE_MODELS.map((m) => m.id),
  ["glm-5.3-flash", "glm-4.7-flash", "glm-4-plus"]
)

// 6. engine badge labels
check("describeEngine('workspace')", describeEngine("workspace").label, "GLM engine · Z.ai SDK")
check("describeEngine('zai-key')", describeEngine("zai-key").label, "Your Z.ai key · GLM")
check("describeEngine('llm7-glm')", describeEngine("llm7-glm").label, "GLM-5.3 · LLM7")

// 7. generateStream normalizes a legacy pool id instead of crashing
//    (no network needed — the first chain step will be attempted and fail
//    fast in this offline context, or serve from the workspace engine)
const res = await generateStream({
  model: "pool-kilo-auto" as never, // a legacy id that must normalize
  messages: [{ role: "user", content: "Reply with the single word OK" }],
})
check("generateStream legacy id → modelUsed = main", res?.modelUsed, "glm-5.3-flash")
console.log(`\n${fail === 0 ? "ALL GREEN" : "FAILURES"} — ${pass} passed, ${fail} failed`)
process.exit(fail === 0 ? 0 : 1)
