/** Keyless community pool — freellmpool-curated OpenAI-compatible providers
 *  that need NO api key and NO signup (github.com/0xzr/freellmpool catalog).
 *
 *  These routes keep every AI feature alive on deployments with zero
 *  environment variables (e.g. a fresh Vercel deploy) and act as the
 *  failover tier under the user's Z.ai key engine and the workspace GLM
 *  engine. Each route is tried in order; the first that answers serves.
 *
 *  v40.1 — `llm7-glm` is no longer a failover: it is the site's MAIN engine,
 *  serving the REAL GLM-5.3-Flash model on LLM7 totally keyless (live-
 *  verified 2026-10-08: /v1/models and /v1/chat/completions authenticate
 *  with NO auth header; an optional free LLM7_API_KEY only raises the
 *  per-IP daily token quota — dash.llm7.io).
 *
 *  Endpoints live-verified 2026-10-08:
 *   - LLM7           — KEYLESS (no auth header needed); per-IP daily token
 *                      quota → 429 {code:"quota_exceeded", retry_after:<s>};
 *                      hosts the real GLM-5.3-Flash (400k ctx, reasoning)
 *   - Pollinations   — no auth, gpt-oss-20b, streams `delta.reasoning`
 *   - Kilo Gateway   — auth-walled as of 2026-10-07 (INVALID_TOKEN)
 *   - OVHcloud       — Forbidden as of 2026-10-07 (kept for revival) */

import type { EngineMessage } from "@/lib/ai"
import type { AiTuning } from "@/lib/ai-tuning"
import { withTimeout } from "@/lib/ai"
import {
  computeBackoffMs,
  DEFAULT_COOLDOWN_MS,
  isWaitInRequestViable,
  MAX_IN_REQUEST_WAIT_MS,
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
}

/** v40.1 — the optional FREE LLM7 key. NOT required: every LLM7 route
 *  authenticates keyless. When set, it is attached as a bearer token and
 *  lifts the per-IP daily token quota (dash.llm7.io). */
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
  /* v40.1 — THE MAIN ENGINE OF THE ENTIRE SITE: the real GLM-5.3-Flash
   *  model on LLM7, totally keyless (model id live-verified against
   *  https://api.llm7.io/v1/models on 2026-10-08 — 400k context, reasoning,
   *  tools; no native json_mode, which the JSON-extractor retries absorb). */
  "llm7-glm": {
    id: "llm7-glm",
    label: "GLM-5.3 Flash via LLM7",
    url: "https://api.llm7.io/v1/chat/completions",
    model: "GLM-5.3-Flash",
    headers: {},
    reasoning: true,
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

/* ---------------- v40.1 — quota-aware rate-limit handling ---------------- */

/** v40.1 — LLM7 states its quota window INSIDE the JSON body
 *  ({"error":{"code":"quota_exceeded","retry_after":<seconds>}}), not in
 *  the Retry-After header (live-verified 2026-10-08). A daily-quota 429 must
 *  park the engine for the stated window instead of burning in-request
 *  retries against a wall. */
function parseBodyRetryAfterSec(body: string): number {
  try {
    const j = JSON.parse(body) as { error?: { retry_after?: unknown }; retry_after?: unknown }
    const n = Number(j?.error?.retry_after ?? j?.retry_after)
    return Number.isFinite(n) && n > 0 ? Math.min(n, 1800) : 0
  } catch {
    return 0
  }
}

/** Longest an engine may be parked on a stated quota window — LLM7 daily
 *  quotas can state hours (live: Retry-After 15418s); one fresh probe after
 *  30 minutes is cheaper than parking the main engine until tomorrow. */
const MAX_COOLDOWN_MS = 30 * 60_000
const MAX_COOLDOWN_SEC = MAX_COOLDOWN_MS / 1000

/** Raw Retry-After header in SECONDS for PARKING decisions — deliberately
 *  NOT capped by backoff.MAX_BACKOFF_MS (that 15s cap governs in-request
 *  sleeps only); parking may legitimately reach the 30-minute cap. */
function parseRetryAfterSecForParking(header: string | null): number {
  if (!header) return 0
  const secs = Number(header.trim())
  return Number.isFinite(secs) && secs > 0 ? Math.min(secs, MAX_COOLDOWN_SEC) : 0
}

/** Shared 429/503 handler for both call paths. Returns true when the caller
 *  should RETRY (short backoff fits inside the request), false when the
 *  engine must be parked and the chain fail over. */
async function handleRateLimit(
  engine: PoolEngine,
  res: Response,
  attempt: number,
  bodyRetryAfterSec = 0
): Promise<boolean> {
  const retryAfter = res.headers.get("retry-after")
  // parking window: the raw header seconds, else the JSON body's retry_after
  // (LLM7 quota errors) — both capped at 30 minutes
  const statedSec = parseRetryAfterSecForParking(retryAfter) || Math.min(bodyRetryAfterSec, MAX_COOLDOWN_SEC)
  const wait = computeBackoffMs(attempt, retryAfter)
  // a stated window longer than the in-request budget parks the engine NOW
  if (isWaitInRequestViable(wait) && attempt <= 2 && statedSec * 1000 <= MAX_IN_REQUEST_WAIT_MS) {
    await sleep(wait)
    return true
  }
  // too long to wait in-request (or retries exhausted) — park the engine
  const parkMs = statedSec > 0 ? statedSec * 1000 : DEFAULT_COOLDOWN_MS
  markPoolCooldown(engine.id, parkMs)
  console.warn(
    `keyless pool ${engine.label} rate-limited (HTTP ${res.status}) — parked ${Math.round(parkMs / 1000)}s${retryAfter ? ` (Retry-After: ${retryAfter})` : bodyRetryAfterSec ? ` (body retry_after: ${bodyRetryAfterSec}s)` : ""}`
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

/** v41 — translate the task profile into OpenAI-compatible sampling keys.
 *  Every pool route speaks the OpenAI chat-completions dialect, so
 *  temperature / top_p / max_tokens are safe on all of them; keys are
 *  omitted entirely when the profile leaves a value unset (engines keep
 *  their own default for that dimension). Also test-exported. */
export function tuningToSamplingBody(tuning?: AiTuning): Record<string, number> {
  if (!tuning) return {}
  const body: Record<string, number> = {}
  if (tuning.temperature !== undefined) body.temperature = tuning.temperature
  if (tuning.topP !== undefined) body.top_p = tuning.topP
  if (tuning.maxTokens !== undefined) body.max_tokens = tuning.maxTokens
  return body
}

/** Call a keyless pool route in streaming mode. Returns a normalized SSE
 *  ReadableStream (pool-native SSE passed through, JSON responses wrapped),
 *  or null when this route is down/rate-limited — the caller fails over.
 *  v38: rate-limited engines are skipped while cooling down and get one
 *  bounded in-request retry with Retry-After-aware backoff.
 *  v41: the task's tuning profile is applied to every attempt. */
export async function callPoolStream(
  engineId: PoolEngineId,
  messages: EngineMessage[],
  timeoutMs = 20_000,
  tuning?: AiTuning
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
            ...tuningToSamplingBody(tuning),
          }),
        }),
        timeoutMs
      )
      if (!res.ok) {
        if (res.status === 429 || res.status === 503) {
          const bodyText = await res.text().catch(() => "")
          if (await handleRateLimit(engine, res, attempt, parseBodyRetryAfterSec(bodyText))) continue
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
 *  v38: same cooldown + Retry-After-aware retry as the streaming path.
 *  v41: the task's tuning profile is applied to every attempt. */
export async function callPoolOnce(
  engineId: PoolEngineId,
  messages: EngineMessage[],
  timeoutMs = 45_000,
  tuning?: AiTuning
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
            ...tuningToSamplingBody(tuning),
          }),
        }),
        timeoutMs
      )
      if (!res.ok) {
        if (res.status === 429 || res.status === 503) {
          const bodyText = await res.text().catch(() => "")
          if (await handleRateLimit(engine, res, attempt, parseBodyRetryAfterSec(bodyText))) continue
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
