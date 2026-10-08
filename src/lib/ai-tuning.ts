/** v41 — Per-task AI tuning profiles.
 *
 *  Before v41 every AI call in the site ran on PROVIDER DEFAULT sampling:
 *  no temperature, no top_p, no output cap — a creative podcast and a strict
 *  JSON marker were sampled identically, and small utility calls (the search
 *  router, the rolling summary) could emit unbounded prose, burning the
 *  keyless LLM7 per-IP daily token quota for nothing.
 *
 *  Every AI feature now picks ONE named profile from this registry, and the
 *  values are threaded through the whole engine chain (keyless GLM-5.3-Flash
 *  on LLM7 → the Z.ai SDK engine → the optional Z.ai key → the community
 *  pool) so a request is sampled the same way whichever engine serves it.
 *
 *  Design rules:
 *  - temperature 0.0-0.2 → deterministic tasks (classification, marking,
 *    grading, translation fidelity)
 *  - temperature 0.3-0.6 → professional drafting (memos, tailors, reviews)
 *  - temperature 0.7-0.9 → generative variety (tutoring voice, question
 *    banks, podcast dialogue)
 *  - maxTokens is ALWAYS set for non-streaming tasks: it bounds runaway
 *    generations AND conserves the keyless LLM7 daily quota (a capped
 *    router call costs ~160 tokens instead of a possible essay)
 *  - streaming features (tutor chat, industry dossier) get no hard cap on
 *    the chat path (answer length legitimately varies) but the dossier —
 *    whose prompt pins 1,200-2,200 words — gets a generous ceiling
 */

export type AiTuning = {
  /** Sampling temperature — lower = more deterministic (0 = greedy). */
  temperature?: number
  /** Nucleus sampling cutoff (top_p). */
  topP?: number
  /** Hard cap on generated completion tokens (max_tokens) — also conserves
   *  the keyless LLM7 per-IP daily token quota. */
  maxTokens?: number
}

/** The tuning profile of every AI task in the site. Call sites reference
 *  these by name — raw numbers at call sites are forbidden so the policy
 *  stays auditable in one place. */
export const AI_TUNING = {
  /** Tutor chat (streaming) — alive but disciplined teaching voice. */
  tutorChat: { temperature: 0.7, topP: 0.9 } as AiTuning,
  /** Chat search-router decision — strict JSON classification, ~50 tokens. */
  router: { temperature: 0, topP: 0.6, maxTokens: 160 } as AiTuning,
  /** Rolling conversation summary — concise factual memory, ≤ 220 words. */
  summarize: { temperature: 0.3, topP: 0.85, maxTokens: 480 } as AiTuning,
  /** Custom exam writer — variety across batches, big bilingual JSON. */
  examWrite: { temperature: 0.85, topP: 0.95, maxTokens: 2600 } as AiTuning,
  /** AI examiner — repeatable marking against certified solutions. */
  examMark: { temperature: 0.05, topP: 0.7, maxTokens: 768 } as AiTuning,
  /** Due-diligence customizer — deal-tailored professional JSON. */
  ddTailor: { temperature: 0.45, topP: 0.9, maxTokens: 4600 } as AiTuning,
  /** Audit-program customizer — client-tailored professional JSON. */
  programTailor: { temperature: 0.45, topP: 0.9, maxTokens: 4200 } as AiTuning,
  /** Test-of-Control designer — ICQ with structured variety. */
  tocDesign: { temperature: 0.6, topP: 0.95, maxTokens: 4600 } as AiTuning,
  /** EQR partner review — grounded, never inventive. */
  eqrReview: { temperature: 0.3, topP: 0.85, maxTokens: 900 } as AiTuning,
  /** KAM drafter (ISA 701) — tight bilingual report register. */
  kamDraft: { temperature: 0.35, topP: 0.9, maxTokens: 900 } as AiTuning,
  /** Industry risk dossier (streaming) — rich but grounded, word-capped by prompt. */
  industryDossier: { temperature: 0.6, topP: 0.95, maxTokens: 3600 } as AiTuning,
  /** EN↔AR translation — fidelity first, preserve structure exactly. */
  translate: { temperature: 0.15, topP: 0.85, maxTokens: 4600 } as AiTuning,
  /** Podcast script — a REAL conversation, maximum natural variety. */
  podcastScript: { temperature: 0.9, topP: 0.95, maxTokens: 5600 } as AiTuning,
  /** Study planner — structured, standard-specific tasks. */
  studyPlan: { temperature: 0.5, topP: 0.9, maxTokens: 2200 } as AiTuning,
  /** Simulation debrief — warm 4-6 sentence partner note. */
  simDebrief: { temperature: 0.55, topP: 0.9, maxTokens: 384 } as AiTuning,
  /** Simulation free-text grader — strict rubric JSON. */
  simGrade: { temperature: 0.05, topP: 0.7, maxTokens: 512 } as AiTuning,
} as const

export type TuningTask = keyof typeof AI_TUNING

/** Every task in the registry is a valid profile (compile-time guard for
 *  the runtime validation below). */
export function tuningOf(task: TuningTask): AiTuning {
  return AI_TUNING[task]
}

/** Validate the whole registry at once — used by the offline test battery
 *  (test-v41) so a bad edit can never ship. */
export function validateTuningRegistry(): { ok: boolean; problems: string[] } {
  const problems: string[] = []
  for (const [name, t] of Object.entries(AI_TUNING)) {
    const { temperature, topP, maxTokens } = t as AiTuning
    if (temperature !== undefined && (temperature < 0 || temperature > 2))
      problems.push(`${name}: temperature ${temperature} out of range [0,2]`)
    if (topP !== undefined && (topP <= 0 || topP > 1))
      problems.push(`${name}: topP ${topP} out of range (0,1]`)
    if (maxTokens !== undefined && (!Number.isInteger(maxTokens) || maxTokens < 8))
      problems.push(`${name}: maxTokens ${maxTokens} must be an integer ≥ 8`)
    // deterministic tasks must be capped — an uncapped classification call
    // can still sprawl into prologue prose
    if ((temperature ?? 1) <= 0.2 && maxTokens === undefined)
      problems.push(`${name}: near-deterministic task without a maxTokens cap`)
  }
  return { ok: problems.length === 0, problems }
}
