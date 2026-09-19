import type { SectorProfile, SectorProfileBase, SectorCluster, SectorId } from "./sectors-types"
import { SECTORS_A } from "./sectors-a"
import { SECTORS_B } from "./sectors-b"
import { SECTORS_DEEP } from "./sectors-deep"

/** Merge a base profile with its deep dive (topping up the base arrays with
 *  the deep dive's `extra*` items so floors are met without ever editing the
 *  dense base content). Throws loudly at load time if a dive is missing so a
 *  forgotten sector can never ship silently. */
function mergeSector(base: SectorProfileBase): SectorProfile {
  const deep = SECTORS_DEEP[base.id as SectorId]
  if (!deep) {
    throw new Error(`Sector Risk Library: no deep dive for sector "${base.id}"`)
  }
  return {
    ...base,
    fraudRedFlags: [...base.fraudRedFlags, ...(deep.extraFraud ?? [])],
    minefields: [...base.minefields, ...(deep.extraMines ?? [])],
    ratios: [...base.ratios, ...(deep.extraRatios ?? [])],
    procedures: [...base.procedures, ...(deep.extraProcedures ?? [])],
    kams: [...base.kams, ...(deep.extraKams ?? [])],
    pitfalls: [...base.pitfalls, ...(deep.extraPitfalls ?? [])],
    estimates: deep.estimates,
    goingConcern: deep.goingConcern,
    analytics: deep.analytics,
    inquiries: deep.inquiries,
  }
}

/** All 20 sector risk profiles (base + deep dive), in library order. */
export const SECTOR_PROFILES: SectorProfile[] = [...SECTORS_A, ...SECTORS_B].map(mergeSector)

export const SECTOR_CLUSTERS: { id: SectorCluster; label: { en: string; ar: string } }[] = [
  { id: "financial", label: { en: "Financial services", ar: "الخدمات المالية" } },
  { id: "industrial", label: { en: "Industry & trade", ar: "الصناعة والتجارة" } },
  { id: "infrastructure", label: { en: "Infrastructure & property", ar: "البنية التحتية والعقارات" } },
  { id: "services", label: { en: "Services", ar: "الخدمات" } },
  { id: "structures", label: { en: "Group structures", ar: "الهياكل الجماعية" } },
]

export type { SectorProfile, SectorProfileBase, SectorCluster, SectorId } from "./sectors-types"

/** Count of procedures across all sectors (header stat). */
export const SECTOR_TOTAL_PROCEDURES = SECTOR_PROFILES.reduce(
  (n, s) => n + s.procedures.length,
  0
)

/** Total risk knowledge items across all sectors: inherent risks, fraud red
 *  flags, judgment minefields, KAMs, pitfalls and going-concern indicators. */
export const SECTOR_TOTAL_RISK_ITEMS = SECTOR_PROFILES.reduce(
  (n, s) =>
    n +
    s.inherentRisks.length +
    s.fraudRedFlags.length +
    s.minefields.length +
    s.kams.length +
    s.pitfalls.length +
    s.goingConcern.length,
  0
)

/** Icon keys used by sector profiles → mapped to lucide icons in the view. */
export const SECTOR_ICON_KEYS = Array.from(new Set(SECTOR_PROFILES.map((s) => s.icon)))
