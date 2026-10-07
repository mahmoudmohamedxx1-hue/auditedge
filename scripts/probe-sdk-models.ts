/** Probe which model ids the workspace SDK engine actually honors.
 *  Each call sends a candidate model and reads back the `model` field of the
 *  response — if the engine honors the param, they will match.
 *  Non-stream + small delays to dodge the aggressive 429 rate limit. */
import ZAI from "z-ai-web-dev-sdk"

const CANDIDATES = [
  "glm-5.3-flash",
  "glm-5.3",
  "glm-5-flash",
  "glm-4.7-flash",
  "glm-4.6-flash",
  "glm-4.5-flash",
  "glm-4-flash",
  "glm-4-plus",
]

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function probe(zai: Awaited<ReturnType<typeof ZAI.create>>, model: string | null) {
  const t0 = Date.now()
  try {
    const body: Record<string, unknown> = {
      messages: [{ role: "user", content: "Reply with the single word OK" }],
    }
    if (model) body.model = model
    const c = (await zai.chat.completions.create(body as never)) as {
      model?: string
      choices?: { message?: { content?: string } }[]
      error?: unknown
    }
    const served = c?.model ?? "?"
    const text = (c?.choices?.[0]?.message?.content ?? "").slice(0, 40)
    console.log(
      `${String(model).padEnd(16)} -> served=${String(served).padEnd(14)} (${Date.now() - t0}ms) "${text}"`
    )
  } catch (e) {
    console.log(
      `${String(model).padEnd(16)} -> ERROR (${Date.now() - t0}ms): ${
        e instanceof Error ? e.message.slice(0, 90) : String(e)
      }`
    )
  }
}

async function main() {
  const zai = await ZAI.create()
  for (const m of [null, ...CANDIDATES]) {
    await probe(zai, m)
    await sleep(2500) // respect the rate limit between probes
  }
}

main()
