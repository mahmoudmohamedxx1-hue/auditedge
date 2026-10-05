/**
 * v38 — shared retry/backoff math for every AI engine layer (pure, testable).
 *
 * The v37 state audit caught the live pool eating 429 rate-limits: engines
 * that said "slow down" were retried at a fixed cadence or dropped with no
 * memory, so request bursts kept hammering the same route. Every AI caller
 * now runs the same three rules:
 *
 *   1. EXPONENTIAL backoff — 900ms → 1.8s → 3.6s → 7.2s per attempt
 *   2. Retry-After WINS — when the server states its own cooldown (seconds
 *      or an HTTP-date), that value overrides the exponential schedule
 *   3. JITTER — ±30% so concurrent requests never retry in lockstep
 *
 * Capped at MAX_BACKOFF_MS so a hostile Retry-After can't stall a request
 * forever; floored at MIN_BACKOFF_MS so a "0" header still breathes.
 */

export const MIN_BACKOFF_MS = 250
export const MAX_BACKOFF_MS = 15_000
/** The longest any request should WAIT IN-REQUEST before failing over —
 *  longer waits belong to the per-engine cooldown, not the request path. */
export const MAX_IN_REQUEST_WAIT_MS = 4_000
/** Default parking time for an engine that just answered 429 with no
 *  Retry-After header: the chain fails over to other engines meanwhile. */
export const DEFAULT_COOLDOWN_MS = 60_000

/** Parse a Retry-After header (delay-seconds or HTTP-date) → ms from now.
 *  Returns 0 for absent/invalid values — callers treat 0 as "not stated". */
export function parseRetryAfterMs(header: string | null | undefined, nowMs = Date.now()): number {
  if (!header) return 0
  const trimmed = header.trim()
  if (!trimmed) return 0
  const secs = Number(trimmed)
  if (Number.isFinite(secs) && secs >= 0) return Math.min(secs * 1000, MAX_BACKOFF_MS)
  const date = Date.parse(trimmed)
  if (Number.isFinite(date)) return Math.max(0, Math.min(date - nowMs, MAX_BACKOFF_MS))
  return 0
}

/** Backoff for attempt N (1-based): exponential schedule, Retry-After
 *  override, ±30% jitter, clamped to [MIN_BACKOFF_MS, MAX_BACKOFF_MS]. */
export function computeBackoffMs(
  attempt: number,
  retryAfterHeader: string | null | undefined,
  nowMs = Date.now()
): number {
  const n = Math.max(1, Math.floor(attempt))
  const exponential = Math.round(900 * 2 ** Math.min(n - 1, 3))
  const stated = parseRetryAfterMs(retryAfterHeader, nowMs)
  const base = Math.max(exponential, stated)
  const jitter = 0.7 + Math.random() * 0.6 // ±30%
  return Math.max(MIN_BACKOFF_MS, Math.min(MAX_BACKOFF_MS, Math.round(base * jitter)))
}

/** Should this wait happen inside the request (fast) or should the engine
 *  be parked and the caller fail over (slow)? */
export function isWaitInRequestViable(waitMs: number): boolean {
  return waitMs <= MAX_IN_REQUEST_WAIT_MS
}
