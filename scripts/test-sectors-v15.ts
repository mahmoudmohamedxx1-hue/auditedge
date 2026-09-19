/**
 * Sector Risk Library content integrity test (v15 — supersedes v13/v14).
 * Verifies the 20 bilingual sector profiles AND the v14 deep-dive layers
 * (ISA 540 estimates, ISA 570 going-concern indicators, data analytics,
 * management inquiries) are complete, structurally sound and internally
 * consistent — no placeholder content ships.
 *
 * Run: npx tsx scripts/test-sectors-v15.ts
 */
import {
  SECTOR_PROFILES,
  SECTOR_CLUSTERS,
  SECTOR_TOTAL_PROCEDURES,
  SECTOR_TOTAL_RISK_ITEMS,
} from "../src/lib/program/sectors"
import { ASSERTIONS } from "../src/lib/program/types"

let pass = 0
let fail = 0
const check = (name: string, cond: boolean) => {
  if (cond) {
    pass++
  } else {
    fail++
    console.error(`  ✗ FAIL: ${name}`)
  }
}

console.log("Sector Risk Library — v15 content test\n")

// ---- overall shape ----
console.log(`[shape] ${SECTOR_PROFILES.length} sectors · ${SECTOR_TOTAL_PROCEDURES} procedures · ${SECTOR_TOTAL_RISK_ITEMS} risk items`)
check("exactly 20 sectors", SECTOR_PROFILES.length === 20)
check("every cluster is represented", SECTOR_CLUSTERS.every((c) => SECTOR_PROFILES.some((s) => s.cluster === c.id)))
check("unique sector ids", new Set(SECTOR_PROFILES.map((s) => s.id)).size === SECTOR_PROFILES.length)
check("≥ 140 tailored procedures total (v14 floor: 20 × 7)", SECTOR_TOTAL_PROCEDURES >= 140)
check("≥ 350 risk items total", SECTOR_TOTAL_RISK_ITEMS >= 350)

const programSectionIds = [
  "methodology", "risk-assessment", "materiality", "sampling", "completion",
  "firm-risk", "industry-risks", "cash", "receivables", "inventory", "revenue",
  "fixed-assets", "payables", "payroll", "financing", "provisions", "related-parties",
]

const EXPECTED_IDS = new Set([
  "banks", "microfinance", "insurance", "manufacturing", "retail", "restaurants",
  "textiles", "agriculture", "trading", "construction", "realestate", "healthcare",
  "technology", "telecom", "energy", "logistics", "education", "tourism",
  "groups", "nonprofit",
])

for (const s of SECTOR_PROFILES) {
  const label = s.id
  check(`${label}: expected sector id`, EXPECTED_IDS.has(s.id))

  // bilingual completeness — base
  check(`${label}: name/tagline EN+AR`, !!s.name.en && !!s.name.ar && !!s.tagline.en && !!s.tagline.ar)
  check(`${label}: overview ≥ 200 chars both languages`, s.overview.en.length >= 200 && s.overview.ar.length >= 200)
  check(`${label}: revenue model both languages`, s.revenueModel.en.length >= 120 && s.revenueModel.ar.length >= 120)
  check(`${label}: regulatory layer mentions an Egyptian authority`, /CBE|FRA|NTRA|Ministry|Authority|EgyptERA|MoSS|ETA|ITIDA|NFSA|EDA|EGX|Customs|قانون|هيئة|وزارة|مركزي/i.test(s.regulatory.en + s.regulatory.ar))

  // structural floors — base arrays (v14 floors)
  check(`${label}: ≥ 4 significant accounts`, s.significantAccounts.length >= 4)
  check(`${label}: ≥ 4 inherent risks with refs`, s.inherentRisks.length >= 4 && s.inherentRisks.every((r) => r.refs.length > 0))
  check(`${label}: ≥ 5 fraud red flags (v14 floor)`, s.fraudRedFlags.length >= 5)
  check(`${label}: fraud red flags bilingual`, s.fraudRedFlags.every((f) => f.en.length > 15 && f.ar.length > 10))
  check(`${label}: ≥ 3 accounting minefields (v14 floor)`, s.minefields.length >= 3)
  check(`${label}: ≥ 4 ratios with benchmarks (v14 floor)`, s.ratios.length >= 4 && s.ratios.every((r) => !!r.benchmark))
  check(`${label}: ≥ 7 tailored procedures (v14 floor)`, s.procedures.length >= 7)
  check(`${label}: ≥ 3 KAMs (v14 floor)`, s.kams.length >= 3)
  check(`${label}: ≥ 3 pitfalls (v14 floor)`, s.pitfalls.length >= 3)

  // v14 deep-dive floors
  check(`${label}: ≥ 3 ISA 540 estimates`, s.estimates.length >= 3)
  check(`${label}: estimates bilingual with refs`, s.estimates.every((e) => e.area.en.length > 8 && e.area.ar.length > 8 && e.why.en.length > 60 && e.why.ar.length > 40 && !!e.ref))
  check(`${label}: ≥ 3 going-concern indicators (ISA 570)`, s.goingConcern.length >= 3)
  check(`${label}: going-concern bilingual`, s.goingConcern.every((g) => g.en.length > 20 && g.ar.length > 15))
  check(`${label}: ≥ 3 analytics opportunities`, s.analytics.length >= 3)
  check(`${label}: analytics bilingual`, s.analytics.every((a) => a.en.length > 20 && a.ar.length > 15))
  check(`${label}: exactly 4 management inquiries`, s.inquiries.length === 4)
  check(`${label}: inquiries bilingual`, s.inquiries.every((q) => q.en.length > 20 && q.ar.length > 15))

  // assertion codes valid
  const validAssertions = new Set(Object.keys(ASSERTIONS))
  check(
    `${label}: assertion codes valid`,
    s.significantAccounts.every((a) => a.assertions.length > 0 && a.assertions.every((code) => validAssertions.has(code)))
  )

  // program cross-links valid
  check(
    `${label}: relatedSections all exist in the Audit Program`,
    s.relatedSections.length > 0 && s.relatedSections.every((id) => programSectionIds.includes(id))
  )

  // no placeholders
  const allText = JSON.stringify(s)
  check(`${label}: no placeholder text`, !/TODO|FIXME|lorem|PLACEHOLDER|TBD/i.test(allText))
}

// ---- v14 deep-dive spot checks (content quality, not just shape) ----
const banks = SECTOR_PROFILES.find((s) => s.id === "banks")!
check("banks: estimates cover ECL PD/LGD", JSON.stringify(banks.estimates).includes("PD"))
check("banks: estimates mention staging", JSON.stringify(banks.estimates.en ?? banks.estimates).includes("Stage") || banks.estimates.some((e) => e.area.en.includes("Staging")))
check("banks: going-concern mentions depositor concentration", banks.goingConcern.some((g) => g.en.includes("epositor")))
check("insurance: estimates reference IFRS 17", JSON.stringify(banks ? SECTOR_PROFILES.find((s) => s.id === "insurance")!.estimates : []).includes("IFRS 17"))
const construction = SECTOR_PROFILES.find((s) => s.id === "construction")!
check("construction: estimates cover percentage of completion", construction.estimates.some((e) => e.area.en.includes("Percentage") || e.area.en.includes("completion")))
const agriculture = SECTOR_PROFILES.find((s) => s.id === "agriculture")!
check("agriculture: estimates cover biological assets (IAS 41)", agriculture.estimates.some((e) => e.area.en.includes("Biological")))
const realestate = SECTOR_PROFILES.find((s) => s.id === "realestate")!
check("realestate: estimates cover off-plan revenue", realestate.estimates.some((e) => e.area.en.includes("off-plan") || e.area.en.toLowerCase().includes("over-time")))
const nonprofit = SECTOR_PROFILES.find((s) => s.id === "nonprofit")!
check("nonprofit: estimates cover conditional grants", nonprofit.estimates.some((e) => e.area.en.includes("Conditional") || e.area.en.includes("grant")))
check("energy: estimates mention decommissioning", SECTOR_PROFILES.find((s) => s.id === "energy")!.estimates.some((e) => e.area.en.includes("Decommissioning")))
check("AP-06 pointers: industry-12 mentions the Sector Risk Library", (() => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const risk = require("../src/lib/program/risk")
    const section = (risk.RISK_SECTIONS ?? risk.PROGRAM_RISK_SECTIONS ?? []).find?.((x: { id: string }) => x.id === "industry-risks")
    if (!section) return false
    return section.procedures.some((p: { id: string; text: { en: string } }) => p.id === "industry-12" && p.text.en.includes("Sector Risk Library"))
  } catch {
    return false
  }
})())

console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail > 0 ? 1 : 0)
