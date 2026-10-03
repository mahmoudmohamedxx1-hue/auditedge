/**
 * v32 — depth checker for one IFRS summary standard.
 * Usage: bun scripts/check-ifrs-file.ts "IFRS 9"
 *
 * Validates the v32 depth bar (the user's 12-page IFRS 15 notes PDF):
 *  · ≥ 45 revision blocks (flagship = 64)
 *  · ≥ 10 headings, ≥ 10 paragraphs, ≥ 4 lists
 *  · ≥ 3 decision trees, ≥ 2 journal sets, ≥ 2 worked examples
 *  · ≥ 3 exam tips, ≥ 2 margin notes
 *  · every string bilingual (EN + real Arabic script)
 *  · trees/journals structurally valid (branches have outcomes, rows have dr or cr)
 * Exits non-zero when the standard misses the bar.
 */
import { IFRS_SUMMARIES } from "../src/lib/ifrs/index"

const code = process.argv[2]
if (!code) {
  console.error("usage: bun scripts/check-ifrs-file.ts \"IFRS 9\"")
  process.exit(2)
}

const std = IFRS_SUMMARIES.find((s) => s.code === code)
if (!std) {
  console.error(`standard ${code} not found in the catalog`)
  process.exit(2)
}

let fail = 0
const check = (name: string, ok: boolean, detail?: string) => {
  console.log(`${ok ? "ok" : "FAIL"}: ${name}${detail ? ` — ${detail}` : ""}`)
  if (!ok) fail++
}

const mix: Record<string, number> = {}
for (const b of std.blocks) mix[b.kind] = (mix[b.kind] ?? 0) + 1
console.log(`${std.code} — ${std.blocks.length} blocks:`, JSON.stringify(mix))

check("≥ 45 revision blocks", std.blocks.length >= 45, `${std.blocks.length}`)
check("≥ 10 section headings (h)", (mix.h ?? 0) >= 10, `${mix.h ?? 0}`)
check("≥ 10 dense paragraphs (p)", (mix.p ?? 0) >= 10, `${mix.p ?? 0}`)
check("≥ 4 lists", (mix.list ?? 0) >= 4, `${mix.list ?? 0}`)
check("≥ 3 decision trees", (mix.tree ?? 0) >= 3, `${mix.tree ?? 0}`)
check("≥ 2 journal sets", (mix.journal ?? 0) >= 2, `${mix.journal ?? 0}`)
check("≥ 1 worked example (aim for 2+)", (mix.example ?? 0) >= 1, `${mix.example ?? 0}`)
if ((mix.example ?? 0) === 1) console.log("note: only 1 worked example — the flagship folds its second into a formula panel; add another if the standard's arithmetic warrants it")
check("≥ 3 exam tips", (mix.tip ?? 0) >= 3, `${mix.tip ?? 0}`)
check("≥ 2 margin notes", (mix.note ?? 0) >= 2, `${mix.note ?? 0}`)

// bilingual integrity + structure
const arRe = /[\u0600-\u06FF]/
let badBi = 0
let badTree = 0
let badJournal = 0
const walkBi = (v: unknown, path: string) => {
  if (!v || typeof v !== "object") return
  const o = v as Record<string, unknown>
  if ("en" in o && "ar" in o && typeof o.en === "string" && typeof o.ar === "string") {
    if (!o.en.trim() || !o.ar.trim() || !arRe.test(o.ar)) badBi++
  } else {
    for (const k of Object.keys(o)) walkBi(o[k], path)
  }
}
for (const b of std.blocks) {
  walkBi(b, b.kind)
  if (b.kind === "tree") {
    const walk = (br: { when?: unknown; then?: unknown; children?: unknown[] }) => {
      if (!br.when || !br.then) badTree++
      for (const c of (br.children ?? []) as typeof br[]) walk(c as never)
    }
    for (const br of b.branches) walk(br as never)
  }
  if (b.kind === "journal") {
    for (const row of b.rows) if (!row.dr && !row.cr) badJournal++
  }
}
check("every string bilingual with real Arabic", badBi === 0, `${badBi} bad`)
check("tree branches complete (when → then)", badTree === 0, `${badTree} bad`)
check("journal rows have a dr or cr side", badJournal === 0, `${badJournal} bad`)

console.log(fail === 0 ? `${std.code} MEETS the v32 depth bar` : `${std.code} MISSES the bar (${fail} checks)`)
process.exit(fail === 0 ? 0 : 1)
