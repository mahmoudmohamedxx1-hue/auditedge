/** Sector Risk Library — deep bilingual industry risk profiles.
 *
 *  Where the Audit Program's AP-06 gives each industry a single working
 *  paragraph, the Sector Risk Library is the deep reference behind it:
 *  how each industry makes money, which accounts fail and on which
 *  assertions, where judgment lives, what fraud looks like there, who
 *  regulates it in Egypt, which ratios to benchmark — and the procedures
 *  that actually answer those risks.
 *
 *  v14 split the data in two layers so the dense base content never has
 *  to be re-edited when the deep dive grows:
 *  - SectorProfileBase (sectors-a/b.ts): the original v13 profile.
 *  - SectorDeepDive (sectors-deep-a/b/c/d.ts): the v14+ knowledge
 *    dimensions — ISA 540 estimates, ISA 570 going-concern indicators,
 *    data-analytics opportunities, management inquiries — plus `extra*`
 *    arrays that top up the base arrays to the library floors
 *    (fraud ≥5, minefields ≥3, ratios ≥4, procedures ≥7, KAMs ≥3,
 *    pitfalls ≥3). sectors.ts merges the two at load time. */

import type { Lang } from "./types"

export type SectorCluster = "financial" | "industrial" | "infrastructure" | "services" | "structures"

export type SignificantAccount = {
  account: Lang
  /** Assertion codes — same vocabulary as the Audit Program (EX, C, A, VA, RO, CO, CL, PR) */
  assertions: string[]
  /** Why this account is significant / where it breaks in this industry */
  why: Lang
}

export type SectorRisk = {
  title: Lang
  detail: Lang
  /** Standards / frameworks references */
  refs: string[]
}

export type SectorMinefield = {
  topic: Lang
  detail: Lang
  ref: string
}

export type SectorRatio = {
  name: Lang
  /** Typical benchmark / how to compute */
  benchmark: string
  redFlag: Lang
}

export type SectorProcedure = {
  text: Lang
  ref: string
}

/* ---------------------------------------------------------------- */
/* v14 deep-dive types                                               */
/* ---------------------------------------------------------------- */

/** A management estimate / hard judgment area under ISA 540 (Revised). */
export type SectorEstimate = {
  /** The estimate or judgment area (e.g. "ECL PD/LGD assumptions") */
  area: Lang
  /** Why it is hard, where management bias bites, and what the auditor challenges */
  why: Lang
  ref: string
}

/** The v14+ deep-dive dimensions for one sector. */
export type SectorDeepDive = {
  /** Management estimates & hard judgments — ISA 540 (Revised) / ESA 540 */
  estimates: SectorEstimate[]
  /** Going-concern & liquidity indicators specific to the sector — ISA 570 / ESA 570 */
  goingConcern: Lang[]
  /** Data-analytics opportunities (JE testing targets, Benford, sector-specific analytics) */
  analytics: Lang[]
  /** Questions to ask management & those charged with governance (always 4) */
  inquiries: Lang[]
  /* extra* arrays top up the base profile to the library floors */
  extraFraud?: Lang[]
  extraMines?: SectorMinefield[]
  extraRatios?: SectorRatio[]
  extraProcedures?: SectorProcedure[]
  extraKams?: Lang[]
  extraPitfalls?: Lang[]
}

/** The stable ids of the 20 library sectors (compile-time completeness). */
export type SectorId =
  | "banks"
  | "microfinance"
  | "insurance"
  | "manufacturing"
  | "retail"
  | "restaurants"
  | "textiles"
  | "agriculture"
  | "trading"
  | "construction"
  | "realestate"
  | "healthcare"
  | "technology"
  | "telecom"
  | "energy"
  | "logistics"
  | "education"
  | "tourism"
  | "groups"
  | "nonprofit"

/** The original v13 profile shape — sectors-a/b.ts are typed with this. */
export type SectorProfileBase = {
  id: string
  cluster: SectorCluster
  /** lucide icon key — mapped in the sectors view */
  icon: string
  name: Lang
  /** One-line identity of the industry */
  tagline: Lang
  /** Business model & economics — 3-5 sentences */
  overview: Lang
  /** How money enters the business; seasonality and cut-off pressure */
  revenueModel: Lang
  significantAccounts: SignificantAccount[]
  inherentRisks: SectorRisk[]
  /** How fraud typically presents in this industry */
  fraudRedFlags: Lang[]
  /** IFRS / EAS judgment areas specific to the sector */
  minefields: SectorMinefield[]
  /** The Egyptian regulatory layer for this industry */
  regulatory: Lang
  ratios: SectorRatio[]
  procedures: SectorProcedure[]
  /** Typical Key Audit Matters for the sector (ISA 701 / ESA 701) */
  kams: Lang[]
  pitfalls: Lang[]
  /** Audit Program section ids to cross-link (e.g. "industry-risks") */
  relatedSections: string[]
}

/** The full profile a learner sees: base content merged with the deep dive. */
export type SectorProfile = SectorProfileBase & {
  estimates: SectorEstimate[]
  goingConcern: Lang[]
  analytics: Lang[]
  inquiries: Lang[]
}
