/** Probe the built-in workspace SDK engine: what works keylessly?
 *  - plain stream (no thinking param)
 *  - thinking disabled (the currently-FAILING fallback call shape)
 *  - model "glm-5.3-flash" (the requested keyless GLM 5.3 Flash)
 *  - thinking enabled (reasoning stream for the "show thinking" feature)
 */
import ZAI from "z-ai-web-dev-sdk"

async function tryCall(label: string, body: Record<string, unknown>) {
  const t0 = Date.now()
  try {
    const zai = await ZAI.create()
    const c = await zai.chat.completions.create(body as never)
    if (c instanceof ReadableStream) {
      const reader = c.getReader()
      const dec = new TextDecoder()
      let out = ""
      for (let i = 0; i < 30; i++) {
        const { done, value } = await reader.read()
        if (done) break
        out += dec.decode(value)
        if (out.length > 1500) break
      }
      try {
        await reader.cancel()
      } catch {
        /* ignore */
      }
      console.log(`\n[${label}] STREAM (${Date.now() - t0}ms):\n${out.slice(0, 1500)}`)
    } else {
      console.log(`\n[${label}] NON-STREAM (${Date.now() - t0}ms):`, JSON.stringify(c).slice(0, 700))
    }
  } catch (e) {
    console.log(`\n[${label}] ERROR (${Date.now() - t0}ms):`, e instanceof Error ? e.message : String(e))
  }
}

async function main() {
  await tryCall("plain-stream", {
    messages: [{ role: "user", content: "Say OK" }],
    stream: true,
  })
  await tryCall("thinking-disabled (current failing shape)", {
    messages: [{ role: "user", content: "Say OK" }],
    stream: true,
    thinking: { type: "disabled" },
  })
  await tryCall("glm-5.3-flash", {
    model: "glm-5.3-flash",
    messages: [{ role: "user", content: "Say OK" }],
    stream: true,
  })
  await tryCall("thinking-enabled", {
    messages: [{ role: "user", content: "What is 2+2? Answer with just the number." }],
    stream: true,
    thinking: { type: "enabled" },
  })
}

main()
