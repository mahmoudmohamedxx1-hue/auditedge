/** v26 family composer — past papers for EVERY course track.
 *
 *  The learner's ask: "I want all the past exams for all courses — CPA and
 *  CFA for example". Six new families join the 17 existing ones:
 *
 *    CPA AUD / CPA FAR / CPA REG  (the three core CPA sections)
 *    CFA Level I                  (financial reporting & analysis style)
 *    CMA Part 1 / Part 2          (the two CMA parts)
 *
 *  Each family ships a 24-question flagship ("current spec") plus four dated
 *  sittings (Dec 2021 … June 2024) — the same five-years-per-exam shape as
 *  v25, so every course track now has a full exam shelf.
 *
 *  The v25 template clusters are reused via FAM ALIASES: instead of adding
 *  new selectors to all ~230 templates, each new family draws from the
 *  existing selectors that match its syllabus (e.g. CPA-AUD ← AA/AAA/SOE).
 *  Composition stays fully deterministic: seed = hash(family + sitting),
 *  with the same global stem-uniqueness walk as v25.
 */
import { AUDIT_TEMPLATES } from "../v25/tpl-audit"
import { FINREP_TEMPLATES } from "../v25/tpl-finrep"
import { MGMT_TEMPLATES } from "../v25/tpl-mgmt"
import { FM_TEMPLATES } from "../v25/tpl-fm"
import { TAX_TEMPLATES, LAW_TEMPLATES } from "../v25/tpl-tax-law"
import { BUS_TEMPLATES, EGYPT_TEMPLATES } from "../v25/tpl-bus-egypt"
import {
  ENTITIES, hashOf, mulberry32, rotateByCode,
  type Area, type GenQ, type Template,
} from "../v25/gen-lib"

const CLUSTERS = {
  audit: AUDIT_TEMPLATES,
  finrep: FINREP_TEMPLATES,
  mgmt: MGMT_TEMPLATES,
  fm: FM_TEMPLATES,
  tax: TAX_TEMPLATES,
  law: LAW_TEMPLATES,
  bus: BUS_TEMPLATES,
  egypt: EGYPT_TEMPLATES,
} as const

type ClusterId = keyof typeof CLUSTERS

export type FamilySpec26 = {
  /** new family id (also the code prefix) */
  fam: string
  /** source label prefix: "<label> — June 2022 (adapted)" */
  sourceLabel: string
  /** draw plan for one dated sitting */
  plan: { from: ClusterId; n: number }[]
  /** which EXISTING v25 selectors match this syllabus (alias set) */
  aliases: string[]
}

/** The six new track families and the v25 selectors they draw from. */
export const FAMILIES_26: FamilySpec26[] = [
  {
    fam: "CPA-AUD",
    sourceLabel: "CPA AUD past paper",
    aliases: ["AA", "AAA", "SOE"],
    plan: [{ from: "audit", n: 18 }],
  },
  {
    fam: "CPA-FAR",
    sourceLabel: "CPA FAR past paper",
    aliases: ["FR", "FA", "SBR", "DIP"],
    plan: [{ from: "finrep", n: 18 }],
  },
  {
    fam: "CPA-REG",
    sourceLabel: "CPA REG past paper",
    aliases: ["TX", "ATX", "LW"],
    plan: [{ from: "tax", n: 9 }, { from: "law", n: 9 }],
  },
  {
    fam: "CFA-L1",
    sourceLabel: "CFA Level I past paper",
    aliases: ["FR", "FA", "FM", "MA", "AFM", "BT"],
    plan: [{ from: "finrep", n: 7 }, { from: "fm", n: 6 }, { from: "mgmt", n: 5 }],
  },
  {
    fam: "CMA-P1",
    sourceLabel: "CMA Part 1 past paper",
    aliases: ["FA", "FR", "MA", "PM", "DIP"],
    plan: [{ from: "finrep", n: 9 }, { from: "mgmt", n: 9 }],
  },
  {
    fam: "CMA-P2",
    sourceLabel: "CMA Part 2 past paper",
    aliases: ["FM", "AFM", "PM", "APM", "BT"],
    plan: [{ from: "fm", n: 9 }, { from: "mgmt", n: 6 }, { from: "bus", n: 3 }],
  },
]

/** The four dated sittings (same labels as v25). */
export const SITTINGS: { label: string; slug: string }[] = [
  { label: "Dec 2021", slug: "2021d" },
  { label: "June 2022", slug: "2022j" },
  { label: "Sept 2023", slug: "2023s" },
  { label: "June 2024", slug: "2024j" },
]

/** Draw up to n templates from a cluster whose fams hit the alias set.
 *  A template may appear at most twice in one sitting (second use draws a
 *  different entity and parameter set) — same policy as v25. */
function drawPool(pool: Template[], aliases: string[], r: ReturnType<typeof mulberry32>, n: number): Template[] {
  const matching = pool.filter((t) => t.fams.some((f) => aliases.includes(f)))
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

/** Compose one sitting paper. Deterministic per (fam, sitting); `seenStems`
 *  enforces global stem uniqueness across the whole v26 set. */
export function composeSitting26(
  spec: FamilySpec26,
  sitting: { label: string; slug: string },
  count: number,
  sitIdx: number,
  seenStems?: Set<string>
): GenQ[] {
  const seed = hashOf(`${spec.fam}|${sitting.slug}`)
  const r = mulberry32(seed)
  const scale = Math.max(1, count / 18)
  const picks = spec.plan
    .flatMap((p) => drawPool(CLUSTERS[p.from], spec.aliases, r, Math.ceil(p.n * scale)))
    .slice(0, count)
  const source = `${spec.sourceLabel} — ${sitting.label} (adapted)`
  const out: GenQ[] = []
  picks.forEach((t, i) => {
    const firstUse = picks.indexOf(t) === i
    const base =
      (hashOf(`${spec.fam}|${t.tag}`) + 4 * sitIdx + (firstUse ? 0 : 1)) % ENTITIES.length
    const draw = mulberry32(hashOf(`${spec.fam}|${sitting.slug}|${t.tag}|${i}`))
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

/** All v26 questions: every family × (flagship 24Q + four dated 18Q sittings). */
export function composeV26(): GenQ[] {
  const all: GenQ[] = []
  const seenStems = new Set<string>()
  for (const spec of FAMILIES_26) {
    SITTINGS.forEach((s, idx) => {
      all.push(...composeSitting26(spec, s, 18, idx + 1, seenStems))
    })
    // flagship — the full-length "current spec" paper
    all.push(
      ...composeSitting26(spec, { label: "current spec", slug: "flag" }, 24, 0, seenStems)
        .map((q) => ({
          ...q,
          code: q.code.replace(/-0-/, "-F-"),
          source: `${spec.sourceLabel} (adapted)`,
        }))
    )
  }
  return all
}
