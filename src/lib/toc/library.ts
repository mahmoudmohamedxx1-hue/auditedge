import { TOC_CORE_QUESTIONS } from "./core"
import { ENERGY_INDUSTRIES } from "./industries-energy"
import { FINANCE_INDUSTRIES } from "./industries-finance"
import { MANUFACTURING_INDUSTRIES } from "./industries-manufacturing"
import { PRIMARY_INDUSTRIES } from "./industries-primary"
import { PROPERTY_INDUSTRIES } from "./industries-property"
import { PUBLIC_INDUSTRIES } from "./industries-public"
import { SERVICES_INDUSTRIES } from "./industries-services"
import { TECH_INDUSTRIES } from "./industries-tech"
import { TRADE_INDUSTRIES } from "./industries-trade"
import { TRANSPORT_INDUSTRIES } from "./industries-transport"
import { TOC_SECTORS, type TocIndustry } from "./types"

export { TOC_SECTORS }

/** v37 — the Test of Control industry library: every sector file merged
 *  into one ordered registry. `tocIndustry()` also merges the universal
 *  core questionnaire ahead of the industry module, so the runner gets a
 *  single combined questionnaire per industry. */

export const TOC_INDUSTRIES: TocIndustry[] = [
  ...PRIMARY_INDUSTRIES,
  ...MANUFACTURING_INDUSTRIES,
  ...ENERGY_INDUSTRIES,
  ...PROPERTY_INDUSTRIES,
  ...TRANSPORT_INDUSTRIES,
  ...TRADE_INDUSTRIES,
  ...FINANCE_INDUSTRIES,
  ...TECH_INDUSTRIES,
  ...SERVICES_INDUSTRIES,
  ...PUBLIC_INDUSTRIES,
]

export function tocIndustry(id: string): TocIndustry | undefined {
  return TOC_INDUSTRIES.find((i) => i.id === id)
}

/** The sidebar badge count — plain number so the sidebar stays a thin import. */
export const TOC_INDUSTRIES_COUNT = TOC_INDUSTRIES.length

/** The full questionnaire for an industry: the universal core (shared
 *  question ids across industries — answers persist and follow the user)
 *  followed by the industry-specific module, grouped in domain order. */
export function tocFullQuestions(industry: TocIndustry) {
  return [...TOC_CORE_QUESTIONS, ...industry.questions]
}

/** The core ids — used by the UI to badge which questions come from the
 *  universal checklist versus the industry module. */
export const TOC_CORE_IDS = new Set(TOC_CORE_QUESTIONS.map((q) => q.id))

export function tocSectorName(id: string): string {
  return TOC_SECTORS.find((s) => s.id === id)?.name ?? id
}

/** Total industry questions in the library (module questions only). */
export const TOC_MODULE_QUESTION_COUNT = TOC_INDUSTRIES.reduce(
  (sum, i) => sum + i.questions.length,
  0
)

/** Every question a user could ever be asked from the built-in library
 *  (unique ids), including the shared core once. */
export function tocLibraryQuestionCount(): number {
  return TOC_CORE_QUESTIONS.length + TOC_MODULE_QUESTION_COUNT
}

/** Search helper — matches industry name, blurb, sector and risks. */
export function tocSearch(industries: TocIndustry[], query: string): TocIndustry[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  if (!terms.length) return industries
  return industries.filter((i) => {
    const hay = [i.name, i.blurb, tocSectorName(i.sector), ...i.risks]
      .join(" \u0000 ")
      .toLowerCase()
    return terms.every((t) => hay.includes(t))
  })
}
