/** v39 — the Due Diligence library types.
 *
 *  The Due Diligence section answers one deal question: *before we buy,
 *  invest in, lend to, or partner with this company — what must we examine,
 *  and what could kill or reprice the deal?*
 *
 *  Three scopes, each a self-contained workstream:
 *    legal      — the company's legal right to exist, own, and contract
 *    ops        — whether the business actually runs without its founders
 *    financial  — per-ACCOUNT workstreams (one section = one account area,
 *                 e.g. "Customers & trade receivables"), because a DD team
 *                 staffs and reports by account, not by standard.
 *
 *  The shape is deliberately identical across scopes so the base stays
 *  extensible: adding a new section is a data-only change — the registry
 *  (`index.ts`), the view, the search index, the AI customizer validation
 *  and the test suite all pick it up automatically. */

/** Bilingual string — every user-facing word in the library has EN + AR. */
export type Lang = { en: string; ar: string }

/** The three DD scopes. */
export type DDScopeId = "legal" | "ops" | "financial"

/** One instruction inside a DD section — phrased as an action the deal team
 *  performs (obtain / inspect / verify / analyze / confirm), never filler. */
export type DDProcedure = {
  id: string
  text: Lang
  /** Grounding reference shown beside the step — real frameworks only
   *  (IFRS/IAS, Egyptian law, FRA/CBD rules, market DD practice). */
  ref?: string
}

/** A red flag is an observation that warrants escalation; a deal breaker is
 *  one that can reprice or terminate the transaction on its own. */
export type DDRiskFlag = {
  text: Lang
  /** true = can kill the deal on its own (shown with the red banner) */
  critical?: boolean
}

/** One DD workstream. For the financial scope each section IS an account
 *  area (`group: "accounts"`), so every instruction for that account lives
 *  in one place — exactly how a Big-4 DD team staffs and reports. */
export type DDSection = {
  id: string
  /** display code, e.g. "L-01", "O-03", "F-07" */
  code: string
  scope: DDScopeId
  /** "accounts" for the financial scope, null otherwise (drives the UI copy:
   *  financial cards say "Account workstream", others say "Workstream"). */
  group: "accounts" | null
  icon: string
  title: Lang
  /** what this workstream covers — one professional sentence. */
  scopeNote: Lang
  /** why it matters on a deal: 2-4 objectives, each one sentence. */
  why: Lang[]
  /** the information request list (the VDR checklist for this workstream). */
  documents: Lang[]
  /** the step-by-step instructions, 8-12 per section. */
  procedures: DDProcedure[]
  /** ratios & analytical focus (financial sections; null elsewhere). */
  analytics?: Lang[]
  /** red flags — observations that escalate, some flagged critical
   *  (deal breakers). 3-5 per section. */
  redFlags: DDRiskFlag[]
}
