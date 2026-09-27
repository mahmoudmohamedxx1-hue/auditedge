/**
 * Sector Risk Library content integrity test (v14).
 * Verifies the 20 bilingual sector profiles — now with the v14 deep dives
 * (management estimates, going-concern indicators, data analytics,
 * management inquiries) merged in and the expanded v13 arrays.
 *
 * Run: npx tsx scripts/test-sectors-v14.ts
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
    console.log(`  ✓ ${name}`)
  } else {
    fail++
    console.error(`  ✗ FAIL: ${name}`)
  }
}

console.log("Sector Risk Library — v14 content test\n")

// ---- overall shape ----
console.log(
  `[shape] ${SECTOR_PROFILES.length} sectors, ${SECTOR_TOTAL_PROCEDURES} procedures, ${SECTOR_TOTAL_RISK_ITEMS} risk items`
)
check("exactly 20 sectors", SECTOR_PROFILES.length === 20)
check("every cluster is represented", SECTOR_CLUSTERS.every((c) => SECTOR_PROFILES.some((s) => s.cluster === c.id)))
check("unique sector ids", new Set(SECTOR_PROFILES.map((s) => s.id)).size === SECTOR_PROFILES.length)
check("≥ 130 tailored procedures total", SECTOR_TOTAL_PROCEDURES >= 130)
check("≥ 260 risk items total (risks+fraud+mines+estimates+GC)", SECTOR_TOTAL_RISK_ITEMS >= 260)

const programSectionIds = [
  "methodology", "risk-assessment", "materiality", "sampling", "completion",
  "firm-risk", "industry-risks", "cash", "receivables", "inventory", "revenue",
  "fixed-assets", "payables", "payroll", "financing", "provisions", "related-parties",
]

for (const s of SECTOR_PROFILES) {
  const label = s.id

  // bilingual completeness (v13 base)
  check(`${label}: name/tagline EN+AR`, !!s.name.en && !!s.name.ar && !!s.tagline.en && !!s.tagline.ar)
  check(`${label}: overview ≥ 200 chars both languages`, s.overview.en.length >= 200 && s.overview.ar.length >= 200)
  check(`${label}: revenue model both languages`, s.revenueModel.en.length >= 120 && s.revenueModel.ar.length >= 120)
  check(`${label}: regulatory layer mentions an Egyptian authority`, /CBE|FRA|NTRA|Ministry|Authority|EgyptERA|MoSS|ETA|ITIDA|NFSA|EDA|EGX|Customs|EFSA|MoTA|Egypt/i.test(s.regulatory.en))

  // v13 structural floors — raised for v14
  check(`${label}: ≥ 4 significant accounts`, s.significantAccounts.length >= 4)
  check(`${label}: ≥ 4 inherent risks with refs`, s.inherentRisks.length >= 4 && s.inherentRisks.every((r) => r.refs.length > 0))
  check(`${label}: ≥ 5 fraud red flags`, s.fraudRedFlags.length >= 5)
  check(`${label}: ≥ 3 accounting minefields`, s.minefields.length >= 3)
  check(`${label}: ≥ 4 ratios with benchmarks`, s.ratios.length >= 4 && s.ratios.every((r) => !!r.benchmark))
  check(`${label}: ≥ 7 tailored procedures`, s.procedures.length >= 7)
  check(`${label}: ≥ 3 KAMs`, s.kams.length >= 3)
  check(`${label}: ≥ 3 pitfalls`, s.pitfalls.length >= 3)

  // v14 deep-dive fields
  check(
    `${label}: ≥ 3 management estimates (topic+detail+ref, EN+AR)`,
    s.estimates.length >= 3 &&
      s.estimates.every(
        (e) =>
          !!e.ref &&
          e.topic.en.length >= 5 && e.topic.ar.length >= 5 &&
          e.detail.en.length >= 80 && e.detail.ar.length >= 60
      )
  )
  check(
    `${label}: ≥ 3 going-concern indicators EN+AR`,
    s.goingConcern.length >= 3 && s.goingConcern.every((g) => g.en.length >= 30 && g.ar.length >= 25)
  )
  check(
    `${label}: ≥ 3 data-analytics opportunities EN+AR`,
    s.analytics.length >= 3 && s.analytics.every((a) => a.en.length >= 30 && a.ar.length >= 25)
  )
  check(
    `${label}: ≥ 4 management inquiries EN+AR`,
    s.inquiries.length >= 4 && s.inquiries.every((q) => q.en.length >= 30 && q.ar.length >= 25)
  )

  // assertion codes valid
  const codes = s.significantAccounts.flatMap((a) => a.assertions)
  check(
    `${label}: all assertion codes are known (${[...new Set(codes)].join(",")})`,
    codes.every((c) => c in ASSERTIONS)
  )

  // cross-links valid
  check(
    `${label}: relatedSections all exist in the Audit Program`,
    s.relatedSections.length > 0 && s.relatedSections.every((id) => programSectionIds.includes(id))
  )
  check(`${label}: cross-links the industry-risks section (AP-06)`, s.relatedSections.includes("industry-risks"))

  // no placeholder text
  const allText = JSON.stringify(s)
  check(`${label}: no TODO/placeholder markers`, !/TODO|PLACEHOLDER|lorem/i.test(allText))
}

// ---- known sectors present ----
const expectedIds = [
  "banks", "microfinance", "insurance", "manufacturing", "retail", "restaurants",
  "textiles", "agriculture", "trading", "construction", "realestate", "healthcare",
  "technology", "telecom", "energy", "logistics", "education", "tourism", "groups", "nonprofit",
]
for (const id of expectedIds) {
  check(`sector present: ${id}`, SECTOR_PROFILES.some((s) => s.id === id))
}

// ---- Egypt-specific knowledge spot checks (v13) ----
const banks = SECTOR_PROFILES.find((s) => s.id === "banks")!
check("banks: references IFRS 9 / ECL", JSON.stringify(banks).includes("IFRS 9"))
check("banks: references CBE / Law 194", /CBE|194\/2020/.test(banks.regulatory.en))
const insurance = SECTOR_PROFILES.find((s) => s.id === "insurance")!
check("insurance: references IFRS 17", JSON.stringify(insurance).includes("IFRS 17"))
check("insurance: references Law 10/1981", insurance.regulatory.en.includes("10/1981"))
const realestate = SECTOR_PROFILES.find((s) => s.id === "realestate")!
check("realestate: references Law 176/2007 off-plan", realestate.regulatory.en.includes("176/2007"))
const nonprofit = SECTOR_PROFILES.find((s) => s.id === "nonprofit")!
check("nonprofit: references NGO Law 149/2019", nonprofit.regulatory.en.includes("149/2019"))
const trading = SECTOR_PROFILES.find((s) => s.id === "trading")!
check("trading: references Customs Law 207/2020", trading.regulatory.en.includes("207/2020"))

// ---- v14 deep-dive spot checks ----
check("banks: estimates cover ECL model parameters", JSON.stringify(banks.estimates).includes("PD/LGD"))
check("banks: going-concern mentions depositor concentration", JSON.stringify(banks.goingConcern).toLowerCase().includes("deposit"))
check("construction: estimates cover percentage of completion", JSON.stringify(SECTOR_PROFILES.find((s) => s.id === "construction")!.estimates).includes("cost-to-cost"))
check("agriculture: estimates cover IAS 41 biological assets", JSON.stringify(SECTOR_PROFILES.find((s) => s.id === "agriculture")!.estimates).includes("IAS 41"))
check("groups: inquiries cover component materiality", JSON.stringify(SECTOR_PROFILES.find((s) => s.id === "groups")!.inquiries).includes("component"))
check("every estimate carries a standards reference", SECTOR_PROFILES.every((s) => s.estimates.every((e) => /ISA|IFRS|IAS|EAS|IFRIC|Law|contract|CBE|EFSA|donor|grant|NGO|framework|guidance|rules/i.test(e.ref))))

console.log(`\n${pass} passed, ${fail} failed`)
if (fail > 0) process.exit(1)
