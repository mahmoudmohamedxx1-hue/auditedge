/**
 * SM-2-lite spaced-repetition scheduler (P0-3).
 *
 * A deliberately small adaptation of SuperMemo's SM-2 for study flashcards:
 * four grades (again / hard / good / easy), one ease factor, one interval.
 * The full SM-2 repetition-count ladder is compressed because audit study
 * cards are short-lived exam prep, not decade-long language items —
 * learners should see a card a handful of times, not forever.
 */

export type ReviewGrade = 0 | 1 | 2 | 3 // again · hard · good · easy

export interface SrsState {
  ease: number
  intervalDays: number
  reps: number
  lapses: number
}

export interface SrsStateNext extends SrsState {
  dueAt: Date
}

const EASE_MIN = 1.3
const EASE_MAX = 2.8

/** Advance one card by one grade. Pure — no I/O, trivially unit-testable. */
export function scheduleNext(
  state: SrsState,
  grade: ReviewGrade,
  now: Date = new Date()
): SrsStateNext {
  let { ease, intervalDays, reps, lapses } = state
  reps += 1

  if (grade === 0) {
    // "again" — the card comes back within the same session (10 minutes),
    // the ease takes a hit and we count a lapse
    ease = clamp(ease - 0.2)
    intervalDays = 0
    lapses += 1
  } else if (grade === 1) {
    // "hard" — short step, small ease penalty
    ease = clamp(ease - 0.1)
    intervalDays = reps <= 1 ? 1 : Math.max(1, Math.round(intervalDays * 1.2))
  } else if (grade === 2) {
    // "good" — the standard SM-2 ladder
    intervalDays = reps <= 1 ? 1 : reps === 2 ? 3 : Math.round(intervalDays * ease)
  } else {
    // "easy" — accelerated ladder with an ease reward
    ease = clamp(ease + 0.15)
    intervalDays = reps <= 1 ? 3 : Math.round(intervalDays * ease * 1.3)
  }

  intervalDays = Math.min(intervalDays, 120) // cap: nothing schedules past ~4 months
  const dueAt = new Date(now.getTime())
  if (grade === 0) dueAt.setMinutes(dueAt.getMinutes() + 10)
  else dueAt.setUTCDate(dueAt.getUTCDate() + intervalDays)

  return { ease, intervalDays, reps, lapses, dueAt }
}

/** How many cards are due now (inclusive bound) — used for the Home badge. */
export function isDue(dueAt: Date, now: Date = new Date()): boolean {
  return dueAt.getTime() <= now.getTime()
}

function clamp(v: number): number {
  return Math.min(EASE_MAX, Math.max(EASE_MIN, Math.round(v * 100) / 100))
}
