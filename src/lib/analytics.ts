/**
 * Mastery & readiness analytics (P1-4).
 *
 * Per-standard mastery = recent accuracy, exponentially decayed by
 * recency so an 80% from three weeks ago matters less than yesterday's
 * 70%, and damped by sample-size confidence so one lucky answer never
 * shows as "mastered". Readiness per exam section blends coverage
 * (how much of the bank you have attempted) with that accuracy.
 *
 * All functions are pure — the /api/analytics route feeds them rows.
 */

import type { BankArea } from "@/lib/exam-blueprint"

export interface AttemptLike {
  questionId: string
  correct: boolean
  standardTag: string
  area: string
  difficulty: number
  createdAt: string | Date
}

export interface TagMastery {
  tag: string
  area: string
  attempts: number
  /** 0-100 — accuracy after recency decay + confidence damping */
  mastery: number
  /** 0-100 — raw accuracy, for comparison */
  accuracy: number
  confidence: number // 0-1 — how much evidence backs the mastery number
}

const HALF_LIFE_DAYS = 21
const CONFIDENCE_K = 6 // ~6 recent attempts = full confidence

/** Per-question latest attempt wins (repeats were study, not evidence). */
export function dedupeLatest(attempts: AttemptLike[]): AttemptLike[] {
  const latest = new Map<string, AttemptLike>()
  for (const a of [...attempts].sort(
    (x, y) => new Date(y.createdAt).getTime() - new Date(x.createdAt).getTime()
  )) {
    if (!latest.has(a.questionId)) latest.set(a.questionId, a)
  }
  return [...latest.values()]
}

export function masteryByTag(attempts: AttemptLike[], now: Date = new Date()): TagMastery[] {
  const latest = dedupeLatest(attempts)
  const byTag = new Map<string, AttemptLike[]>()
  for (const a of latest) {
    const list = byTag.get(a.standardTag) ?? []
    list.push(a)
    byTag.set(a.standardTag, list)
  }

  const out: TagMastery[] = []
  for (const [tag, list] of byTag) {
    let weightSum = 0
    let scoreSum = 0
    let correctCount = 0
    for (const a of list) {
      const ageDays = Math.max(
        0,
        (now.getTime() - new Date(a.createdAt).getTime()) / (1000 * 60 * 60 * 24)
      )
      const weight = Math.pow(0.5, ageDays / HALF_LIFE_DAYS)
      weightSum += weight
      scoreSum += weight * (a.correct ? 1 : 0)
      if (a.correct) correctCount += 1
    }
    const decayed = weightSum > 0 ? scoreSum / weightSum : 0
    const accuracy = list.length ? correctCount / list.length : 0
    const confidence = Math.min(1, list.length / CONFIDENCE_K)
    // mastery = decayed accuracy pulled toward 50/50 by low confidence
    const mastery = Math.round(100 * (decayed * confidence + 0.5 * (1 - confidence)))
    out.push({
      tag,
      area: list[0]?.area ?? "auditing",
      attempts: list.length,
      mastery,
      accuracy: Math.round(100 * accuracy),
      confidence: Math.round(100 * confidence) / 100,
    })
  }
  return out.sort((a, b) => a.mastery - b.mastery || b.attempts - a.attempts)
}

export interface AreaReadiness {
  area: BankArea | string
  bankSize: number
  attempted: number
  coverage: number // 0-100
  accuracy: number // 0-100 (latest-attempt based)
  /** 0-100 — the headline number: how exam-ready this section is */
  readiness: number
}

export function readinessByArea(
  attempts: AttemptLike[],
  bankSizes: { area: string; count: number }[]
): AreaReadiness[] {
  const latest = dedupeLatest(attempts)
  return bankSizes.map((b) => {
    const mine = latest.filter((a) => a.area === b.area)
    const attempted = mine.length
    const coverage = b.count > 0 ? Math.min(100, Math.round((100 * attempted) / b.count)) : 0
    const accuracy = attempted > 0 ? Math.round((100 * mine.filter((a) => a.correct).length) / attempted) : 0
    // readiness: accuracy damped by coverage (attempting 5 questions does
    // not make a section "ready" even at 100% accuracy)
    const covFactor = Math.min(1, attempted / 15)
    const readiness = Math.round(accuracy * covFactor)
    return { area: b.area, bankSize: b.count, attempted, coverage, accuracy, readiness }
  })
}

/** Group tags into coarse buckets for the dashboard heatmap legend. */
export function masteryBucket(mastery: number): "weak" | "shaky" | "ok" | "strong" {
  if (mastery < 50) return "weak"
  if (mastery < 70) return "shaky"
  if (mastery < 85) return "ok"
  return "strong"
}
