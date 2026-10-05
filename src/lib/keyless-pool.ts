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
import {
  computeBackoffMs,
  DEFAULT_COOLDOWN_MS,
  isWaitInRequestViable,
  parseRetryAfterMs,
} from "@/lib/backoff"

export type PoolEngineId = "kilo" | "llm7" | "llm7-glm" | "pollinations" | "ovh" | "ovh-vision"

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
  /** v25 — when set, this route needs the named env var (a FREE key from
   *  the provider's dashboard) and is skipped when it is not configured.
   *  LLM7's `default` route stays keyless; its named models (glm-5.3) need
   *  a free key — dash.llm7.io. */
  keyEnv?: string
}

/** v25 — the optional free LLM7 key unlocks the real glm-5.3 route. */
export function llm7Key(): string {
  return (process.env.LLM7_API_KEY ?? "").trim()
}

/** Auth headers for an engine — LLM7 routes attach the free key when set. */
function engineHeaders(engine: PoolEngine): Record<string, string> {
  if ((engine.id === "llm7" || engine.id === "llm7-glm") && llm7Key()) {
    return { Authorization: `Bearer ${llm7Key()}` }
  }
  return engine.headers
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
  "llm7-glm": {
    id: "llm7-glm",
    label: "GLM-5.3 via LLM7",
    url: "https://api.llm7.io/v1/chat/completions",
    model: "glm-5.3",
    headers: {},
    reasoning: true,
    vision: false,
    keyEnv: "LLM7_API_KEY",
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

/* ---------------- v38 — 429 resilience: per-engine cooldown ---------------- */

/** An engine that just rate-limited us is PARKED here for a cooldown window
 *  (or its own Retry-After when stated). The engine chain fails over to the
 *  next engine instead of hammering the one that said "slow down" — bursts
 *  were the exact failure the v37 state audit observed live. */
const engineCooldowns = new Map<PoolEngineId, number>()

/** ms remaining in this engine's cooldown (0 = free to try). Test-exported. */
export function poolEngineCoolingDown(id: PoolEngineId, now = Date.now()): number {
  const until = engineCooldowns.get(id) ?? 0
  return Math.max(0, until - now)
}

/** Park an engine for `ms` (default 60s; Retry-After overrides). Test-exported. */
export function markPoolCooldown(id: PoolEngineId, ms = DEFAULT_COOLDOWN_MS, now = Date.now()): void {
  engineCooldowns.set(id, now + ms)
}

/** Test hook — release every cooldown. */
export function resetPoolCooldowns(): void {
  engineCooldowns.clear()
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

/** Shared 429/503 handler for both call paths. Returns true when the caller
 *  should RETRY (short backoff fits inside the request), false when the
 *  engine must be parked and the chain fail over. */
async function handleRateLimit(
  engine: PoolEngine,
  res: Response,
  attempt: number
): Promise<boolean> {
  const retryAfter = res.headers.get("retry-after")
  const stated = parseRetryAfterMs(retryAfter)
  const wait = computeBackoffMs(attempt, retryAfter)
  if (isWaitInRequestViable(wait) && attempt <= 2) {
    await sleep(wait)
    return true
  }
  // too long to wait in-request (or retries exhausted) — park the engine
  markPoolCooldown(engine.id, stated > 0 ? stated : DEFAULT_COOLDOWN_MS)
  console.warn(
    `keyless pool ${engine.label} rate-limited (HTTP ${res.status}) — parked ${Math.round((stated > 0 ? stated : DEFAULT_COOLDOWN_MS) / 1000)}s${retryAfter ? ` (Retry-After: ${retryAfter})` : ""}`
  )
  return false
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
 *  or null when this route is down/rate-limited — the caller fails over.
 *  v38: rate-limited engines are skipped while cooling down and get one
 *  bounded in-request retry with Retry-After-aware backoff. */
export async function callPoolStream(
  engineId: PoolEngineId,
  messages: EngineMessage[],
  timeoutMs = 20_000
): Promise<ReadableStream<Uint8Array> | null> {
  const engine = POOL[engineId]
  const cooling = poolEngineCoolingDown(engineId)
  if (cooling > 0) {
    console.warn(`keyless pool ${engine.label} cooling down (${Math.round(cooling / 1000)}s) — skipping`)
    return null
  }
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await withTimeout(
        fetch(engine.url, {
          method: "POST",
          headers: { "Content-Type": "application/json", ...engineHeaders(engine) },
          body: JSON.stringify({
            model: engine.model,
            messages: toPoolMessages(messages, engine),
            stream: true,
          }),
        }),
        timeoutMs
      )
      if (!res.ok) {
        if (res.status === 429 || res.status === 503) {
          if (await handleRateLimit(engine, res, attempt)) continue
          return null
        }
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
  return null
}

/** Call a keyless pool route non-streaming (router decisions, drafters,
 *  generators). Returns the answer text or null on failure.
 *  v38: same cooldown + Retry-After-aware retry as the streaming path. */
export async function callPoolOnce(
  engineId: PoolEngineId,
  messages: EngineMessage[],
  timeoutMs = 45_000
): Promise<string | null> {
  const engine = POOL[engineId]
  const cooling = poolEngineCoolingDown(engineId)
  if (cooling > 0) {
    console.warn(`keyless pool ${engine.label} cooling down (${Math.round(cooling / 1000)}s) — skipping`)
    return null
  }
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await withTimeout(
        fetch(engine.url, {
          method: "POST",
          headers: { "Content-Type": "application/json", ...engineHeaders(engine) },
          body: JSON.stringify({
            model: engine.model,
            messages: toPoolMessages(messages, engine),
            stream: false,
          }),
        }),
        timeoutMs
      )
      if (!res.ok) {
        if (res.status === 429 || res.status === 503) {
          if (await handleRateLimit(engine, res, attempt)) continue
          return null
        }
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
  return null
}
