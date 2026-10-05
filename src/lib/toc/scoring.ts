import { TOC_DOMAINS, type TocAnswerMap, type TocDomain, type TocQuestion } from "./types"

/** v37 — the Test of Control scoring engine.
 *
 *  HOW THE VERDICT IS FORMED
 *  ─────────────────────────
 *  - Every question carries a significance weight (1-3). "Yes" earns its
 *    weight, "No" earns nothing, "N/A" is removed from the denominator
 *    entirely (an entity must not be punished for a control that genuinely
 *    does not apply).
 *  - Domain scores are computed the same way, per COSO component.
 *  - CRITICAL OVERRIDE: questions flagged `critical` are keystone controls.
 *    A "no" on any of them is a red flag regardless of the aggregate, so:
 *      strong    needs score ≥ 80% AND zero critical failures
 *      moderate  needs score ≥ 50% AND at most two critical failures
 *      weak      anything else (score < 50% or 3+ critical failures)
 *  - The engine is pure (no React, no IO) so scripts/test-v37.ts unit-tests
 *    the boundaries directly. */

export type TocVerdict = "strong" | "moderate" | "weak"

export type TocDomainScore = {
  domain: TocDomain
  answered: number
  na: number
  earned: number
  possible: number
  pct: number
}

export type TocEvaluation = {
  verdict: TocVerdict
  /** 0-100, the weighted overall score. */
  pct: number
  answeredCount: number
  unansweredCount: number
  naCount: number
  earnedWeight: number
  possibleWeight: number
  domainScores: TocDomainScore[]
  /** Critical questions answered "no" — the red-flag list. */
  failedCriticals: TocQuestion[]
  /** Every question answered "no" — the gap list shown for remediation. */
  gaps: TocQuestion[]
  /** False when unanswered questions make the verdict unreliable. */
  complete: boolean
}

export function evaluateToc(questions: TocQuestion[], answers: TocAnswerMap): TocEvaluation {
  const failedCriticals: TocQuestion[] = []
  const gaps: TocQuestion[] = []
  let earnedWeight = 0
  let possibleWeight = 0
  let answeredCount = 0
  let naCount = 0

  const perDomain = new Map<TocDomain, TocDomainScore>(
    TOC_DOMAINS.map((d) => [
      d.id,
      { domain: d.id, answered: 0, na: 0, earned: 0, possible: 0, pct: 0 },
    ])
  )

  for (const question of questions) {
    const answer = answers[question.id]
    if (!answer) continue
    answeredCount++
    const d = perDomain.get(question.domain)
    if (answer === "na") {
      naCount++
      if (d) d.na++
      continue // excluded from the denominator entirely
    }
    possibleWeight += question.weight
    if (d) {
      d.answered++
      d.possible += question.weight
    }
    if (answer === "yes") {
      earnedWeight += question.weight
      if (d) {
        d.earned += question.weight
      }
    } else {
      gaps.push(question)
      if (question.critical) failedCriticals.push(question)
    }
  }

  const domainScores = TOC_DOMAINS.map((d) => {
    const s = perDomain.get(d.id)!
    s.pct = s.possible > 0 ? Math.round((s.earned / s.possible) * 100) : 100
    return s
  })

  const pct = possibleWeight > 0 ? Math.round((earnedWeight / possibleWeight) * 100) : 100
  const criticalCount = failedCriticals.length
  const unansweredCount = questions.length - answeredCount

  let verdict: TocVerdict
  if (pct >= 80 && criticalCount === 0) verdict = "strong"
  else if (pct >= 50 && criticalCount <= 2) verdict = "moderate"
  else verdict = "weak"

  return {
    verdict,
    pct,
    answeredCount,
    unansweredCount,
    naCount,
    earnedWeight,
    possibleWeight,
    domainScores,
    failedCriticals,
    gaps,
    complete: unansweredCount === 0,
  }
}

/** The one-line explanation under each verdict — shared by the results
 *  panel and the markdown export. */
export function tocVerdictExplanation(verdict: TocVerdict): string {
  switch (verdict) {
    case "strong":
      return "Controls are designed and operating consistently — the auditor may plan reliance on controls and reduce substantive testing (ISA 330.8), with the noted gaps remediated."
    case "moderate":
      return "A workable framework with real gaps — controls exist but are unevenly applied. Plan a mixed approach: test the key controls that work, test substantively where they do not."
    case "weak":
      return "The control environment cannot be relied upon — plan a fully substantive approach with extended testing, heightened fraud skepticism (ISA 240), and consider a reportable findings memo to those charged with governance."
  }
}
