/** v37 — Test of Control: the types behind the industry internal-control
 *  questionnaire (ICQ) library.
 *
 *  A questionnaire for an industry = the universal CORE (22 questions every
 *  entity on earth should be asked — COSO 2013 components + IT/cyber) plus
 *  the industry MODULE (10-13 questions aimed at that industry's own
 *  revenue, inventory, regulatory and fraud cycles).
 *
 *  Answers are manager-interview style (yes / no / not-applicable). The
 *  scoring engine (scoring.ts) weighs each answer by significance and
 *  overrides the score when a *critical* control is answered "no". */

/** The COSO 2013 five components + the practical sixth domain auditors
 *  always test separately: IT & cyber (general controls). */
export type TocDomain =
  | "control-environment"
  | "risk-assessment"
  | "control-activities"
  | "info-communication"
  | "monitoring"
  | "it-cyber"

export const TOC_DOMAINS: { id: TocDomain; order: number }[] = [
  { id: "control-environment", order: 1 },
  { id: "risk-assessment", order: 2 },
  { id: "control-activities", order: 3 },
  { id: "info-communication", order: 4 },
  { id: "monitoring", order: 5 },
  { id: "it-cyber", order: 6 },
]

/** One question put to management. */
export type TocQuestion = {
  id: string
  domain: TocDomain
  /** The question itself — phrased to be asked out loud in the interview. */
  q: string
  /** What to probe / what a good answer sounds like — the follow-up the
   *  interviewer should press on. */
  hint: string
  /** Significance to the control environment: 3 = keystone control,
   *  2 = important, 1 = supporting. */
  weight: 1 | 2 | 3
  /** A "no" here is a red flag that overrides the aggregate score. */
  critical?: boolean
}

/** The answer a manager gave, or nothing yet. */
export type TocAnswer = "yes" | "no" | "na"
export type TocAnswerMap = Record<string, TocAnswer>

/** The ten sectors that organize the industry library. */
export type TocSectorId =
  | "primary"
  | "manufacturing"
  | "energy"
  | "property"
  | "transport"
  | "trade"
  | "finance"
  | "tech"
  | "services"
  | "public"

export type TocSector = {
  id: TocSectorId
  name: string
}

export const TOC_SECTORS: TocSector[] = [
  { id: "primary", name: "Primary & Extractive" },
  { id: "manufacturing", name: "Manufacturing" },
  { id: "energy", name: "Energy & Utilities" },
  { id: "property", name: "Construction & Real Estate" },
  { id: "transport", name: "Transport & Logistics" },
  { id: "trade", name: "Retail & Wholesale" },
  { id: "finance", name: "Financial Services" },
  { id: "tech", name: "Technology & Media" },
  { id: "services", name: "Services" },
  { id: "public", name: "Public Sector & Non-Profit" },
]

/** One industry in the library. */
export type TocIndustry = {
  id: string
  sector: TocSectorId
  name: string
  /** lucide icon key (see the ICONS map in the hub UI). */
  icon: string
  /** 1-2 sentence scope of what this industry covers. */
  blurb: string
  /** The industry's defining risk areas (shown on the card + results). */
  risks: string[]
  /** Recommended tests of controls (inquiry / inspection / observation /
   *  reperformance) — what the auditor does to corroborate the answers. */
  procedures: string[]
  /** Industry-specific questions (the module combined with the core). */
  questions: TocQuestion[]
}

/** An AI-generated questionnaire — same shape as an industry but with the
 *  generation context attached and procedures structured for display. */
export type TocAiProcedure = {
  title: string
  detail: string
  type: "inquiry" | "inspection" | "observation" | "reperformance"
}

export type TocAiQuestionnaire = {
  id: string
  title: string
  /** One-paragraph scope the AI understood of the industry + case. */
  scope: string
  risks: string[]
  procedures: TocAiProcedure[]
  questions: TocQuestion[]
  createdAt: number
  /** The exact inputs that produced it (for regeneration / audit trail). */
  input: { industry: string; caseContext: string; lang: "en" | "ar" }
}
