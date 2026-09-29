/** v25 family composer — turns template clusters into year-sitting papers.
 *
 *  Each exam family gets four additional dated sittings (Dec 2021, June 2022,
 *  Sept 2023, June 2024) on top of its existing flagship paper — five years
 *  of past papers per exam. The new IFRS diploma family ships five sittings
 *  (a 24-question flagship plus the four dated ones).
 *
 *  Composition is fully deterministic: seed = hash(family + sitting), so the
 *  bank is reproducible. A template may appear at most twice in one sitting
 *  (second use draws a different entity and parameter set). */
import {
  AUDIT_TEMPLATES } from "./tpl-audit"
import { FINREP_TEMPLATES } from "./tpl-finrep"
import { MGMT_TEMPLATES } from "./tpl-mgmt"
import { FM_TEMPLATES } from "./tpl-fm"
import { TAX_TEMPLATES, LAW_TEMPLATES } from "./tpl-tax-law"
import { BUS_TEMPLATES, EGYPT_TEMPLATES } from "./tpl-bus-egypt"
import {
  ENTITIES, hashOf, mulberry32, rotateByCode,
  type Area, type GenQ, type Template,
} from "./gen-lib"

export const CLUSTERS = {
  audit: AUDIT_TEMPLATES,
  finrep: FINREP_TEMPLATES,
  mgmt: MGMT_TEMPLATES,
  fm: FM_TEMPLATES,
  tax: TAX_TEMPLATES,
  law: LAW_TEMPLATES,
  bus: BUS_TEMPLATES,
  egypt: EGYPT_TEMPLATES,
} as const

export type ClusterId = keyof typeof CLUSTERS

export type FamilySpec = {
  /** template family selector (must appear in each drawn template's fams) */
  fam: string
  /** existing flagship paper id (null for the all-new IFRS family) */
  flagshipId: string | null
  /** new-paper id prefix, e.g. "acca-fr" → "acca-fr-2022" */
  idBase: string
  /** source label prefix: "<label> — June 2022 (adapted)" */
  sourceLabel: string
  /** cluster draw plan for one dated sitting */
  plan: { from: ClusterId; n: number }[]
  /** flagship sitting count (IFRS family only, 24) */
  flagshipCount?: number
  /** dated-sitting question count (default 18; APM's smaller template pool yields 15) */
  sittingCount?: number
}

export const FAMILIES: FamilySpec[] = [
  { fam: "BT",  flagshipId: "acca-bt",  idBase: "acca-bt",  sourceLabel: "ACCA BT past paper",  plan: [{ from: "bus", n: 18 }] },
  { fam: "MA",  flagshipId: "acca-ma",  idBase: "acca-ma",  sourceLabel: "ACCA MA past paper",  plan: [{ from: "mgmt", n: 18 }] },
  { fam: "FA",  flagshipId: "acca-fa",  idBase: "acca-fa",  sourceLabel: "ACCA FA past paper",  plan: [{ from: "finrep", n: 18 }] },
  { fam: "LW",  flagshipId: "acca-lw",  idBase: "acca-lw",  sourceLabel: "ACCA LW past paper",  plan: [{ from: "law", n: 18 }] },
  { fam: "PM",  flagshipId: "acca-pm",  idBase: "acca-pm",  sourceLabel: "ACCA PM past paper",  plan: [{ from: "mgmt", n: 18 }] },
  { fam: "TX",  flagshipId: "acca-tx",  idBase: "acca-tx",  sourceLabel: "ACCA TX past paper",  plan: [{ from: "tax", n: 18 }] },
  { fam: "FR",  flagshipId: "acca-fr",  idBase: "acca-fr",  sourceLabel: "ACCA FR past paper",  plan: [{ from: "finrep", n: 18 }] },
  { fam: "AA",  flagshipId: "acca-aa",  idBase: "acca-aa",  sourceLabel: "ACCA AA past paper",  plan: [{ from: "audit", n: 18 }] },
  { fam: "FM",  flagshipId: "acca-fm",  idBase: "acca-fm",  sourceLabel: "ACCA FM past paper",  plan: [{ from: "fm", n: 18 }] },
  { fam: "SBL", flagshipId: "acca-sbl", idBase: "acca-sbl", sourceLabel: "ACCA SBL past paper", plan: [{ from: "bus", n: 18 }] },
  { fam: "SBR", flagshipId: "acca-sbr", idBase: "acca-sbr", sourceLabel: "ACCA SBR past paper", plan: [{ from: "finrep", n: 18 }] },
  { fam: "AFM", flagshipId: "acca-afm", idBase: "acca-afm", sourceLabel: "ACCA AFM past paper", plan: [{ from: "fm", n: 18 }] },
  { fam: "APM", flagshipId: "acca-apm", idBase: "acca-apm", sourceLabel: "ACCA APM past paper", plan: [{ from: "mgmt", n: 6 }, { from: "bus", n: 9 }], sittingCount: 15 },
  { fam: "ATX", flagshipId: "acca-atx", idBase: "acca-atx", sourceLabel: "ACCA ATX past paper", plan: [{ from: "tax", n: 18 }] },
  { fam: "AAA", flagshipId: "acca-aaa", idBase: "acca-aaa", sourceLabel: "ACCA AAA past paper", plan: [{ from: "audit", n: 18 }] },
  { fam: "SOE", flagshipId: "soe-audit", idBase: "soe-audit", sourceLabel: "Egypt SOE audit past paper", plan: [{ from: "audit", n: 10 }, { from: "egypt", n: 8 }] },
  { fam: "DIP", flagshipId: null, idBase: "ifrs-dip", sourceLabel: "IFRS diploma past paper", plan: [{ from: "finrep", n: 18 }], flagshipCount: 24 },
]

/** The four dated sittings added to every family. */
export const SITTINGS: { label: string; slug: string }[] = [
  { label: "Dec 2021", slug: "2021d" },
  { label: "June 2022", slug: "2022j" },
  { label: "Sept 2023", slug: "2023s" },
  { label: "June 2024", slug: "2024j" },
]

/** Draw up to n distinct-by-position template picks from a cluster for a
 *  family, allowing each template at most twice within the sitting. */
function drawPool(pool: Template[], fam: string, r: ReturnType<typeof mulberry32>, n: number): Template[] {
  const matching = pool.filter((t) => t.fams.includes(fam))
  if (!matching.length) return []
  const picks: Template[] = []
  const used = new Map<Template, number>()
  let pass = 0
  while (picks.length < n && pass < 3) {
    for (const t of r.shuffle(matching)) {
      if (picks.length >= n) break
      const count = used.get(t) ?? 0
      if (count >= (pass === 0 ? 1 : 2)) continue
      used.set(t, count + 1)
      picks.push(t)
    }
    pass++
  }
  return picks.slice(0, n)
}

/** Compose one sitting paper for a family. Deterministic per (fam, sitting).
 *  `seenStems` (optional) enforces global stem uniqueness across the whole
 *  v25 set: on a collision the composer deterministically re-draws the
 *  entity (offset 2..31) until the stem is fresh. */
export function composeSitting(
  spec: FamilySpec,
  sitting: { label: string; slug: string },
  count: number,
  sitIdx: number,
  seenStems?: Set<string>
): GenQ[] {
  const seed = hashOf(`${spec.fam}|${sitting.slug}`)
  const r = mulberry32(seed)
  // larger papers (the 24-question IFRS flagship) scale the draw plan UP;
  // smaller sittings (APM 15) keep their plan as declared
  const scale = Math.max(1, count / 18)
  const picks = spec.plan
    .flatMap((p) => drawPool(CLUSTERS[p.from], spec.fam, r, Math.ceil(p.n * scale)))
    .slice(0, count)
  const source = `${spec.sourceLabel} — ${sitting.label} (adapted)`
  const out: GenQ[] = []
  picks.forEach((t, i) => {
    // Entity assignment is deterministic AND collision-free within a family:
    // sitting k, use u → entity (base + 4k + u) — the eight draws of one
    // template across four sittings land on eight DIFFERENT entities.
    const firstUse = picks.indexOf(t) === i
    const base =
      (hashOf(`${spec.fam}|${t.tag}`) + 4 * sitIdx + (firstUse ? 0 : 1)) % ENTITIES.length
    const draw = mulberry32(hashOf(`${spec.fam}|${sitting.slug}|${t.tag}|${i}`))
    // try the assigned entity first; on a global stem collision, walk
    // forward through the entity pool (deterministic order) until unique
    let entity = ENTITIES[base]
    let made = t.make(draw, entity)
    if (seenStems) {
      for (let off = 2; off < ENTITIES.length && seenStems.has(made.stem); off++) {
        entity = ENTITIES[(base + off) % ENTITIES.length]
        made = t.make(draw, entity)
      }
      seenStems.add(made.stem)
    }
    const gen = {
      code: `${spec.fam}-${sitIdx}-${String(i + 1).padStart(2, "0")}`,
      stem: made.stem,
      stemAr: made.stemAr,
      options: made.options,
      optionsAr: made.optionsAr,
      answerIndex: made.answerIndex,
      explanation: made.explanation,
      explanationAr: made.explanationAr,
      standardTag: t.tag,
      area: t.area as Area,
      difficulty: t.difficulty,
    }
    const rotated = rotateByCode(gen)
    out.push({ ...rotated, source })
  })
  return out
}

/** All v25 questions for every family × dated sitting (+ the IFRS flagship). */
export function composeV25(): GenQ[] {
  const all: GenQ[] = []
  const seenStems = new Set<string>()
  for (const spec of FAMILIES) {
    SITTINGS.forEach((s, idx) => {
      all.push(...composeSitting(spec, s, spec.sittingCount ?? 18, idx + 1, seenStems))
    })
    if (spec.fam === "DIP") {
      // the new IFRS diploma flagship — a full 24-question paper ("current spec")
      all.push(
        ...composeSitting(spec, { label: "current spec", slug: "flag" }, spec.flagshipCount ?? 24, 0, seenStems)
          .map((q) => ({ ...q, code: q.code.replace(/^DIP-0-/, "DIP-F-"), source: `${spec.sourceLabel} (adapted)` }))
      )
    }
  }
  return all
}
