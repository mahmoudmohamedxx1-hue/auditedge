import { ProgramSection } from "./types"
import { METHODOLOGY_SECTIONS } from "./methodology"
import { RISK_SECTIONS } from "./risk"
import { ACCOUNTS_A } from "./accounts-a"
import { ACCOUNTS_B } from "./accounts-b"

export * from "./types"

/** The complete bilingual audit program — 7 methodology sections in the
 *  order of the engagement cycle (overview → risk assessment → materiality
 *  → sampling → completion → the firm's own risks → industry risks),
 *  followed by 10 account areas. */
const byId = (sections: ProgramSection[], id: string) =>
  sections.find((s) => s.id === id) as ProgramSection

export const PROGRAM_SECTIONS: ProgramSection[] = [
  byId(METHODOLOGY_SECTIONS, "methodology"), // AP-00 overview
  byId(RISK_SECTIONS, "risk-assessment"), // AP-01 risk assessment
  byId(METHODOLOGY_SECTIONS, "materiality"), // AP-02 materiality
  byId(METHODOLOGY_SECTIONS, "sampling"), // AP-03 sampling
  byId(METHODOLOGY_SECTIONS, "completion"), // AP-04 completion & reporting
  byId(RISK_SECTIONS, "firm-risk"), // AP-05 the firm's own risks
  byId(RISK_SECTIONS, "industry-risks"), // AP-06 industry risk library
  ...ACCOUNTS_A, // AP-07..AP-10
  ...ACCOUNTS_B, // AP-11..AP-16
]

export const PROGRAM_TOTAL_PROCEDURES = PROGRAM_SECTIONS.reduce(
  (n, s) => n + s.procedures.length,
  0
)
