/** Keyless community pool — freellmpool-curated OpenAI-compatible providers
 *  that need NO api key and NO signup (github.com/0xzr/freellmpool catalog).
 *
 *  These routes keep every AI feature alive on deployments with zero
 *  environment variables (e.g. a fresh Vercel deploy) and act as the
 *  failover tier under the user's Z.ai key engine and the workspace GLM
 *  engine. Each route is tried in order; the first that answers serves.
 *
 *  Endpoints live-verified 2026-09-27:
 *   - Kilo Gateway   — no auth header, ~200 req/hr/IP, streams `delta.reasoning`
 *   - LLM7           — optional key ("unused" works), SSE deltas
 *   - Pollinations   — no auth, gpt-oss-20b, streams `delta.reasoning`
 *   - OVHcloud       — no auth, large open models (often IP rate-limited) */

import type { EngineMessage } from "@/lib/ai"
import { withTimeout } from "@/lib/ai"

export type PoolEngineId = "kilo" | "llm7" | "pollinations" | "ovh" | "ovh-vision"

export type PoolEngine = {
  id: PoolEngineId
  /** Label shown in notices/logs */
  label: string
  url: string
  model: string
  headers: Record<string, string>
  /** Streams `delta.reasoning` (visible thinking process) */
  reasoning: boolean
  /** Accepts OpenAI image_url content parts */
  vision: boolean
}

export const POOL: Record<PoolEngineId, PoolEngine> = {
  kilo: {
    id: "kilo",
    label: "Kilo Gateway",
    url: "https://api.kilo.ai/api/gateway/chat/completions",
    model: "kilo-auto/free",
    headers: {},
    reasoning: true,
    vision: false,
  },
  llm7: {
    id: "llm7",
    label: "LLM7",
    url: "https://api.llm7.io/v1/chat/completions",
    model: "default",
    headers: { Authorization: "Bearer unused" },
    reasoning: false,
    vision: false,
  },
  pollinations: {
    id: "pollinations",
    label: "Pollinations",
    url: "https://text.pollinations.ai/openai",
    model: "openai-fast",
    headers: {},
    reasoning: true,
    vision: false,
  },
  ovh: {
    id: "ovh",
    label: "OVHcloud",
    url: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
    model: "gpt-oss-120b",
    headers: {},
    reasoning: true,
    vision: false,
  },
  "ovh-vision": {
    id: "ovh-vision",
    label: "OVHcloud Vision",
    url: "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1/chat/completions",
    model: "Qwen2.5-VL-72B-Instruct",
    headers: {},
    reasoning: false,
    vision: true,
  },
}

function toPoolMessages(
  messages: EngineMessage[],
  engine: PoolEngine
): { role: string; content: string | unknown[] }[] {
  return messages.map((m) => {
    if (typeof m.content === "string") return { role: m.role, content: m.content }
    if (engine.vision) return { role: m.role, content: m.content }
    // text-only route — keep the text, replace the image with a marker
    const text = m.content.map((p) => (p.type === "text" ? p.text : "[image attached]")).join("\n")
    return { role: m.role, content: text }
  })
}

/** Build a one-shot synthetic SSE stream from a non-stream JSON completion —
 *  lets callers keep a single consumeSSEStream code path. Emits the reasoning
 *  chunk first (thinking happens before the answer), then the content. */
function jsonToSseStream(json: unknown): ReadableStream<Uint8Array> | null {
  const completion = json as {
    choices?: { message?: { content?: string; reasoning?: string } }[]
  }
  const message = completion?.choices?.[0]?.message
  const content = message?.content ?? ""
  const reasoning = message?.reasoning ?? ""
  if (!content && !reasoning) return null
  const encoder = new TextEncoder()
  const chunks: string[] = []
  if (reasoning) chunks.push(JSON.stringify({ choices: [{ delta: { reasoning } }] }))
  if (content) chunks.push(JSON.stringify({ choices: [{ delta: { content } }] }))
  return new ReadableStream<Uint8Array>({
    start(controller) {
      for (const c of chunks) controller.enqueue(encoder.encode(`data: ${c}\n\n`))
      controller.close()
    },
  })
}

/** Call a keyless pool route in streaming mode. Returns a normalized SSE
 *  ReadableStream (pool-native SSE passed through, JSON responses wrapped),
 *  or null when this route is down/rate-limited — the caller fails over. */
export async function callPoolStream(
  engineId: PoolEngineId,
  messages: EngineMessage[],
  timeoutMs = 20_000
): Promise<ReadableStream<Uint8Array> | null> {
  const engine = POOL[engineId]
  try {
    const res = await withTimeout(
      fetch(engine.url, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...engine.headers },
        body: JSON.stringify({
          model: engine.model,
          messages: toPoolMessages(messages, engine),
          stream: true,
        }),
      }),
      timeoutMs
    )
    if (!res.ok) {
      const body = await res.text().catch(() => "")
      console.warn(`keyless pool ${engine.label} HTTP ${res.status}: ${body.slice(0, 160)}`)
      return null
    }
    if (!res.body) return null
    const ct = res.headers.get("content-type") ?? ""
    if (ct.includes("application/json")) {
      // route ignored stream:true — wrap the JSON completion
      const json = await res.json().catch(() => null)
      return jsonToSseStream(json)
    }
    return res.body
  } catch (e) {
    console.warn(`keyless pool ${engine.label} failed:`, e instanceof Error ? e.message : e)
    return null
  }
}

/** Call a keyless pool route non-streaming (router decisions, drafters,
 *  generators). Returns the answer text or null on failure. */
export async function callPoolOnce(
  engineId: PoolEngineId,
  messages: EngineMessage[],
  timeoutMs = 45_000
): Promise<string | null> {
  const engine = POOL[engineId]
  try {
    const res = await withTimeout(
      fetch(engine.url, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...engine.headers },
        body: JSON.stringify({
          model: engine.model,
          messages: toPoolMessages(messages, engine),
          stream: false,
        }),
      }),
      timeoutMs
    )
    if (!res.ok) {
      console.warn(`keyless pool ${engine.label} (once) HTTP ${res.status}`)
      return null
    }
    const json = (await res.json().catch(() => null)) as {
      choices?: { message?: { content?: string } }[]
    }
    const text = json?.choices?.[0]?.message?.content ?? ""
    return text || null
  } catch (e) {
    console.warn(`keyless pool ${engine.label} (once) failed:`, e instanceof Error ? e.message : e)
    return null
  }
}
