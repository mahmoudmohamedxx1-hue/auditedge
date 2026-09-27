/** Probe keyless pool providers with stream:true — do they honor SSE, and do
 *  they return reasoning (thinking) fields we can surface in the tutor UI? */
type Probe = {
  id: string
  url: string
  model: string
  headers: Record<string, string>
}

const PROVIDERS: Probe[] = [
  {
    id: "llm7-default",
    url: "https://api.llm7.io/v1/chat/completions",
    model: "default",
    headers: { Authorization: "Bearer unused" },
  },
  {
    id: "kilo-auto",
    url: "https://api.kilo.ai/api/gateway/chat/completions",
    model: "kilo-auto/free",
    headers: {},
  },
  {
    id: "pollinations-openai-fast",
    url: "https://text.pollinations.ai/openai",
    model: "openai-fast",
    headers: {},
  },
  {
    id: "ovh-gpt-oss-120b",
    url: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
    model: "gpt-oss-120b",
    headers: {},
  },
]

async function probe(p: Probe) {
  const t0 = Date.now()
  try {
    const res = await fetch(p.url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...p.headers },
      body: JSON.stringify({
        model: p.model,
        stream: true,
        messages: [
          {
            role: "user",
            content:
              "What is 17 x 23? Think briefly step by step, then give the final answer.",
          },
        ],
      }),
      signal: AbortSignal.timeout(30_000),
    })
    const ct = res.headers.get("content-type") ?? "?"
    console.log(`\n=== ${p.id} → HTTP ${res.status} (${ct}) in ${Date.now() - t0}ms ===`)
    if (!res.ok || !res.body) {
      const text = await res.text().catch(() => "")
      console.log("BODY:", text.slice(0, 300))
      return
    }
    const reader = res.body.getReader()
    const dec = new TextDecoder()
    let out = ""
    for (let i = 0; i < 40; i++) {
      const { done, value } = await reader.read()
      if (done) break
      out += dec.decode(value)
      if (out.length > 2200) break
    }
    try {
      await reader.cancel()
    } catch {
      /* ignore */
    }
    const hasReasoning = /reasoning/.test(out)
    const isSSE = out.trimStart().startsWith("data:")
    console.log(`isSSE=${isSSE} hasReasoningField=${hasReasoning}`)
    console.log(out.slice(0, 2000))
  } catch (e) {
    console.log(`\n=== ${p.id} → ERROR after ${Date.now() - t0}ms:`, e instanceof Error ? e.message : String(e))
  }
}

async function main() {
  for (const p of PROVIDERS) await probe(p)
}

main()
