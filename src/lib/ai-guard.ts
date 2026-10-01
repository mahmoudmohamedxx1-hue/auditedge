/**
 * v21 — in-memory rate limit guard for the AI routes.
 *
 * The workspace is single-user, but the deployed URL can leak (shared with a
 * colleague, indexed, brute-forced) and every AI call spends either the
 * user's Z.ai key quota or the workspace engine's capacity. Every visitor
 * resolves to the same session user, so the guard keys on the client IP
 * (x-forwarded-for on Vercel) with generous, human-scale budgets: a learner
 * chatting, transcribing and listening should never hit the ceiling — a
 * script looping the endpoint will, within seconds.
 *
 * Per-server-instance memory (module scope) is intentional: on Vercel each
 * instance guards itself, which is enough to blunt abuse bursts.
 */

type Bucket = { hits: number[] }

const buckets = new Map<string, Bucket>()

export type RateLimitPolicy = {
  /** unique route key */
  key: string
  /** max requests inside the window */
  limit: number
  /** sliding window (ms) */
  windowMs: number
}

/** Chat is the heaviest endpoint (search + LLM): 20 / 2 min.
 *  TTS/ASR are per-chunk/per-clip: 60 / 2 min.
 *  One-shot drafting endpoints (KAM / industry / translate / EQR): 8 / 2 min. */
export const AI_POLICIES = {
  chat: { key: "ai-chat", limit: 20, windowMs: 120_000 },
  tts: { key: "ai-tts", limit: 60, windowMs: 120_000 },
  asr: { key: "ai-asr", limit: 30, windowMs: 120_000 },
  draft: { key: "ai-draft", limit: 8, windowMs: 120_000 },
  /** v22: AI custom-exam generation (chunked: ~2-7 calls per exam build) */
  examGen: { key: "ai-examgen", limit: 8, windowMs: 120_000 },
  /** v27: AI examiner marking of constructed-response answers (one call
   *  per CR task, 1-3 tasks per paper) */
  examMark: { key: "ai-exammark", limit: 12, windowMs: 120_000 },
  /** v26: AI custom-podcast script writing (one call per episode) */
  podcast: { key: "ai-podcast", limit: 6, windowMs: 120_000 },
  /** v26: custom-podcast voice synthesis (one call per full episode) */
  podcastSpeak: { key: "ai-podcast-speak", limit: 12, windowMs: 120_000 },
} as const satisfies Record<string, RateLimitPolicy>

export function clientIpOf(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for")
  if (fwd) return fwd.split(",")[0].trim()
  return req.headers.get("x-real-ip") ?? "local"
}

/** Check + consume one hit. Returns null when allowed, or a Response to
 *  return directly from the route. */
export function aiRateLimit(req: Request, policy: RateLimitPolicy): Response | null {
  const ip = clientIpOf(req)
  const now = Date.now()
  let bucket = buckets.get(`${policy.key}:${ip}`)
  if (!bucket) {
    bucket = { hits: [] }
    buckets.set(`${policy.key}:${ip}`, bucket)
  }
  // drop hits outside the window
  bucket.hits = bucket.hits.filter((t) => now - t < policy.windowMs)
  if (bucket.hits.length >= policy.limit) {
    const retryAfterSec = Math.ceil(policy.windowMs / 1000)
    // housekeeping: never let the map grow unbounded
    if (buckets.size > 5000) {
      for (const [k, b] of buckets) {
        if (b.hits.every((t) => now - t >= policy.windowMs)) buckets.delete(k)
      }
    }
    return new Response(
      JSON.stringify({
        error:
          "Too many AI requests in a short window — wait a minute and try again. (This protects the workspace's AI quota.)",
      }),
      {
        status: 429,
        headers: { "Content-Type": "application/json", "Retry-After": String(retryAfterSec) },
      }
    )
  }
  bucket.hits.push(now)
  return null
}
