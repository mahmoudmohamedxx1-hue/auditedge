/**
 * AI engine test (v15) — the user-key engine (Z.ai Open Platform) with the
 * model registry, vision routing, thinking control and fallback chain.
 *
 * Run:  npx tsx scripts/test-models-v15.ts   (with .env + .env.local in env)
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
const check = (name: string, cond: boolean, extra = "") => {
  if (cond) {
    pass++
    console.log(`  ✓ ${name}${extra ? ` — ${extra}` : ""}`)
  } else {
    fail++
    console.error(`  ✗ FAIL: ${name}${extra ? ` — ${extra}` : ""}`)
  }
}

async function main() {
  console.log("AI engine — v15 test\n")

  // NOTE: ai.ts reads process.env at module scope — so it MUST be imported
  // (dynamically) only AFTER the env files above are loaded into process.env.
  const { consumeSSEStream, generateOnce, generateStream, userKeyEngineReady } = await import(
    "../src/lib/ai"
  )
  const { resolveModel, VISION_MODEL, DEFAULT_MODEL, isAiModelId } = await import("../src/lib/models")

  console.log(`engine ready (key configured): ${userKeyEngineReady()}`)

  /* ---- pure logic ---- */
  check("registry: default model is glm-4.7-flash", DEFAULT_MODEL === "glm-4.7-flash")
  check("registry: vision model is glm-4.6v-flash", VISION_MODEL === "glm-4.6v-flash")
  check("registry: rejects unknown model ids", !isAiModelId("gpt-9"))
  check("routing: image + non-vision selection → vision model", resolveModel("glm-4-plus", true) === VISION_MODEL)
  check("routing: no image keeps the selected model", resolveModel("glm-4-plus", false) === "glm-4-plus")
  check("routing: vision model + image stays vision", resolveModel(VISION_MODEL, true) === VISION_MODEL)

  /* ---- text generation: glm-4.7-flash (free) ---- */
  console.log("\n[1] glm-4.7-flash — non-streaming, thinking enabled")
  const t1 = await generateOnce({
    model: "glm-4.7-flash",
    thinking: true,
    messages: [
      { role: "system", content: "Answer with exactly one standard code, nothing else." },
      { role: "user", content: "Which International Standard on Auditing covers the auditor's responsibilities relating to going concern?" },
    ],
  })
  check("flash answers (reasoning)", !!t1?.text, `model=${t1?.modelUsed}, text="${t1?.text?.slice(0, 40)}"`)
  check("flash reasoning answer is ISA 570", /570/.test(t1?.text ?? ""))

  /* ---- glm-4-plus (premium; no balance on the test account) ---- */
  console.log("\n[2] glm-4-plus — non-streaming (balance fallback expected)")
  const t2 = await generateOnce({
    model: "glm-4-plus",
    messages: [
      { role: "system", content: "Answer with exactly one word." },
      { role: "user", content: "What standard deals with audit evidence? Answer with just the standard code." },
    ],
  })
  check("plus request returns something (direct or fallback)", !!t2?.text, `model=${t2?.modelUsed}${t2?.notice ? `, notice=${t2.notice}` : ""}`)

  /* ---- vision: glm-4.6v-flash with a solid-red test image ---- */
  console.log("\n[3] glm-4.6v-flash — vision")
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
    check("vision model answers about the image", !!t3?.text, `model=${t3?.modelUsed}, text="${t3?.text?.slice(0, 40)}"`)

    /* ---- routing: image forces vision through generateStream path too ---- */
    console.log("\n[4] vision routing — image with a non-vision model selected")
    const routed = resolveModel("glm-4.7-flash", true)
    check("auto-route sends image questions to the vision model", routed === VISION_MODEL)
  }

  /* ---- streaming: glm-4.7-flash ---- */
  console.log("\n[5] glm-4.7-flash — streaming")
  const s1 = await generateStream({
    model: "glm-4.7-flash",
    thinking: false,
    messages: [
      { role: "system", content: "You are terse. Answer in at most 15 words." },
      { role: "user", content: "Name the two underlying assertions an auditor cares about for accounts receivable." },
    ],
  })
  check("stream opens", !!s1.stream, `model=${s1.modelUsed}`)
  if (s1.stream) {
    let chunks = 0
    const full = await consumeSSEStream(s1.stream, () => {
      chunks++
    })
    check("stream delivers content", full.trim().length > 10, `${chunks} chunks, ${full.length} chars`)
  }

  console.log(`\n${pass} passed, ${fail} failed`)
  process.exit(fail > 0 ? 1 : 0)
}

void main()
