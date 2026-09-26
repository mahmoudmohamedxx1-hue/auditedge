/**
 * Mock-exam blueprint + sampler for the Exam Simulation Center (P0-1).
 *
 * Section weightings are modeled on the Egyptian professional-practice
 * exam blueprint (SOXE / EEC style) that over-samples auditing and
 * financial accounting vs. ethics and local regulation:
 *
 *   auditing 45% · accounting 30% · egypt 15% · ethics 10%
 *
 * Two sitting lengths are offered: 40 questions / 60 minutes and
 * 60 questions / 90 minutes. Sampling is difficulty-stratified inside
 * each section and deterministic for a given seed (reproducible sittings
 * for testing, yet effectively random per sitting).
 */

export type BankArea = "auditing" | "accounting" | "egypt" | "ethics"

export interface BlueprintSection {
  area: BankArea
  /** share of the paper, summing to 1 */
  weight: number
}

export const BLUEPRINT: BlueprintSection[] = [
  { area: "auditing", weight: 0.45 },
  { area: "accounting", weight: 0.3 },
  { area: "egypt", weight: 0.15 },
  { area: "ethics", weight: 0.1 },
]

export type ExamMode = "exam60" | "exam90"

export const EXAM_MODES: Record<ExamMode, { durationMin: number; questionCount: number }> = {
  exam60: { durationMin: 60, questionCount: 40 },
  exam90: { durationMin: 90, questionCount: 60 },
}

export interface SamplableQuestion {
  id: string
  area: string
  difficulty: number
}

/** Split `total` questions across blueprint sections (largest-remainder). */
export function allocateByBlueprint(total: number, blueprint: BlueprintSection[] = BLUEPRINT) {
  const raw = blueprint.map((s) => ({ area: s.area, share: s.weight * total }))
  const counts = raw.map((r) => ({ area: r.area, count: Math.floor(r.share) }))
  let remainder = total - counts.reduce((a, c) => a + c.count, 0)
  // hand out leftover seats to the sections with the largest fractional parts
  const byFraction = [...raw]
    .map((r, i) => ({ i, frac: r.share - Math.floor(r.share) }))
    .sort((a, b) => b.frac - a.frac)
  let cursor = 0
  while (remainder > 0 && byFraction.length) {
    counts[byFraction[cursor % byFraction.length].i].count += 1
    remainder -= 1
    cursor += 1
  }
  return counts as { area: BankArea; count: number }[]
}

/** Deterministic PRNG (mulberry32) — same seed, same paper. */
export function seededRandom(seed: number) {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Draw a difficulty-stratified sample for one exam sitting.
 * Under-filled sections borrow seats from the largest surplus section so a
 * thin bank never silently shrinks the paper.
 */
export function sampleExam<
  Q extends SamplableQuestion,
>(pool: Q[], mode: ExamMode, seed: number): { questionIds: string[]; plan: { area: string; count: number; picked: number }[] } {
  const rand = seededRandom(seed)
  const target = EXAM_MODES[mode].questionCount
  let plan = allocateByBlueprint(target).map((s) => ({ ...s, picked: 0 }))

  const byArea = new Map<string, Q[]>()
  for (const q of pool) {
    const list = byArea.get(q.area) ?? []
    list.push(q)
    byArea.set(q.area, list)
  }

  const chosen: Q[] = []
  const pickFrom = (area: string, n: number) => {
    const candidates = (byArea.get(area) ?? []).filter((q) => !chosen.includes(q))
    // stratify: easy/medium/hard in roughly 30/45/25 proportion when possible
    const byDiff = [1, 2, 3].map((d) => candidates.filter((q) => q.difficulty === d))
    const want = [0.3, 0.45, 0.25].map((share) => Math.round(n * share))
    const picked: Q[] = []
    for (let d = 0; d < 3; d++) {
      const list = byDiff[d]
      for (let i = 0; i < want[d] && list.length && picked.length < n; i++) {
        const idx = Math.floor(rand() * list.length)
        picked.push(list.splice(idx, 1)[0])
      }
    }
    // top up within the section if stratification came up short
    const rest = candidates.filter((q) => !picked.includes(q))
    while (picked.length < n && rest.length) {
      const idx = Math.floor(rand() * rest.length)
      picked.push(rest.splice(idx, 1)[0])
    }
    return picked.slice(0, n)
  }

  for (const section of plan as { area: BankArea; count: number; picked: number }[]) {
    const picked = pickFrom(section.area, section.count)
    section.picked = picked.length
    chosen.push(...picked)
  }

  // borrow seats for any under-filled section
  const deficit = target - chosen.length
  if (deficit > 0) {
    const surplusAreas = [...byArea.keys()].filter(
      (a) => !plan.some((p) => p.area === a) || (byArea.get(a)?.length ?? 0) > chosen.filter((c) => c.area === a).length
    )
    for (const area of surplusAreas) {
      const extra = pickFrom(area, deficit)
      if (extra.length) {
        plan.push({ area: area as BankArea, count: deficit, picked: extra.length })
        chosen.push(...extra)
        break
      }
    }
  }

  // hard invariant: the sitting never exceeds its question count (rounding
  // in stratification is clamped, but belt-and-braces here too)
  if (chosen.length > target) chosen.length = target

  // shuffle the sitting order deterministically
  for (let i = chosen.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[chosen[i], chosen[j]] = [chosen[j], chosen[i]]
  }

  return {
    questionIds: chosen.map((q) => q.id),
    plan: plan.filter((p) => p.picked > 0),
  }
}
