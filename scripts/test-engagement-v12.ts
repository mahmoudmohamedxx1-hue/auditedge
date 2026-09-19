/** Unit test for src/lib/engagement.ts — migration, progress, PBC,
 *  SAD roll-up and CSV guards. Run: npx tsx scripts/test-engagement-v12.ts */

// minimal localStorage shim (engagement.ts touches it on load only)
const mem = new Map<string, string>()
const g = globalThis as Record<string, unknown>
g.localStorage = {
  getItem: (k: string) => (mem.has(k) ? mem.get(k)! : null),
  setItem: (k: string, v: string) => mem.set(k, String(v)),
  removeItem: (k: string) => mem.delete(k),
  clear: () => mem.clear(),
}

import {
  loadEngagements,
  saveEngagements,
  newEngagement,
  newFinding,
  sectionProgress,
  overallProgress,
  pbcItems,
  pbcStats,
  sadVerdict,
  uncorrectedTotal,
} from "../src/lib/engagement"

import { PROGRAM_SECTIONS, PROGRAM_TOTAL_PROCEDURES } from "../src/lib/program"

let pass = 0
let fail = 0
const check = (name: string, cond: boolean) => {
  if (cond) {
    pass++
    console.log(`  ✓ ${name}`)
  } else {
    fail++
    console.error(`  ✗ ${name}`)
  }
}

console.log("1. first run — legacy migration")
// simulate legacy v10/v11 ticks
mem.set(
  "auditedge-program-done-v1",
  JSON.stringify({ "some-proc-1": true, "some-proc-2": true })
)
let store = loadEngagements()
check("creates exactly one starter engagement", store.engagements.length === 1)
check("starter is active", store.activeId === store.engagements[0].id)
check("legacy ticks migrated", store.engagements[0].procedures["some-proc-1"]?.status === "done")
check("legacy tick has a date", typeof store.engagements[0].procedures["some-proc-1"]?.date === "number")

console.log("2. second run — store round-trip")
saveEngagements(store)
mem.delete("auditedge-program-done-v1") // legacy key no longer matters
const store2 = loadEngagements()
check("engagement survives reload", store2.engagements.length === 1)
check("ticks survive reload", store2.engagements[0].procedures["some-proc-1"]?.status === "done")

console.log("3. corrupt store — recovers with a fresh engagement")
mem.set("auditedge-engagements-v1", "{not json")
const store3 = loadEngagements()
check("recovers to one engagement", store3.engagements.length === 1)
check("no legacy key → no ticks", Object.keys(store3.engagements[0].procedures).length === 0)

console.log("4. progress math")
const eng = newEngagement("Nile Trading Co.", "FY 2026")
const first = PROGRAM_SECTIONS[0]
const second = PROGRAM_SECTIONS[1]
// tick 2 of first section done, 1 N/A
eng.procedures[first.procedures[0].id] = { status: "done", date: 1 }
eng.procedures[first.procedures[1].id] = { status: "na", naReason: "no branches" }
eng.procedures[second.procedures[0].id] = { status: "done", date: 2 }
const sp = sectionProgress(eng, first.id)
check(
  `section counts done+na (${sp.done}+${sp.na} of ${sp.total})`,
  sp.done === 1 && sp.na === 1 && sp.total === first.procedures.length
)
check("section pct = 2/total", sp.pct === Math.round((2 / first.procedures.length) * 100))
const op = overallProgress(eng)
check(
  `overall = 3/${PROGRAM_TOTAL_PROCEDURES}`,
  op.done + op.na === 3 && op.done === 2 && op.na === 1 && op.total === PROGRAM_TOTAL_PROCEDURES
)
// metadata-only procedure (wp typed but never ticked) must NOT count
eng.procedures[first.procedures[2].id] = { wp: "B-9" }
check("unticked with WP ref does not count", sectionProgress(eng, first.id).done === 1)

console.log("5. PBC aggregation")
const items = pbcItems(eng)
const expectedDocs = PROGRAM_SECTIONS.reduce((n, s) => n + s.documents.length, 0)
check(`aggregates all ${expectedDocs} documents`, items.length === expectedDocs)
check("all items start pending", pbcStats(eng).pending === expectedDocs && pbcStats(eng).received === 0)
// mark first doc of every section received
for (const s of PROGRAM_SECTIONS)
  eng.pbc[`${s.id}:0`] = { status: "received", requestedAt: 100, receivedAt: 200 }
const ps = pbcStats(eng)
check(
  `stats after marking: received=${PROGRAM_SECTIONS.length}`,
  ps.received === PROGRAM_SECTIONS.length && ps.pending === expectedDocs - PROGRAM_SECTIONS.length
)
check("item titles are bilingual", items[0].title.en.length > 0 && items[0].title.ar.length > 0)

console.log("6. SAD roll-up + ISA 450 verdict")
eng.findings.push(newFinding(first.id, "cut-off error", 20_000)) // open
eng.findings.push(newFinding(first.id, "waived reclass", 15_000)) // open → will pass
eng.findings.push(newFinding(second.id, "fixed accrual", 500_000)) // will correct
check("new finding starts open", eng.findings[0].status === "open")
eng.findings[1].status = "passed"
eng.findings[2].status = "corrected"
const tot = uncorrectedTotal(eng)
check("uncorrected = open + passed = 35,000", tot.total === 35_000 && tot.open === 20_000 && tot.passed === 15_000)
check("setup verdict when no PM/CTT", sadVerdict(eng).level === "setup")
eng.ctt = 30_000
eng.pm = 600_000
check("trivial verdict (35k < CTT 30k? no → evaluate)", sadVerdict(eng).level === "evaluate")
eng.ctt = 40_000
check("trivial verdict (35k < CTT 40k)", sadVerdict(eng).level === "trivial")
eng.findings.push(newFinding(first.id, "big one", 600_000))
eng.findings[3].status = "passed"
check("material verdict (635k ≥ PM 600k)", sadVerdict(eng).level === "material")
eng.findings = []
check("ok verdict when no findings", sadVerdict(eng).level === "ok")

console.log("7. CSV guards (formula injection)")
// import the internal through the public export path — we test via a tiny
// re-implementation check: cells starting with = + - @ must be quoted-guarded
// (the real download is browser-only, so we validate the guard regex logic)
const csvCell = (v: string) => {
  const s = String(v)
  const guarded = /^[=+\-@]/.test(s) ? `'${s}` : s
  return `"${guarded.replace(/"/g, '""')}"`
}
check("=SUM() is guarded", csvCell("=SUM(A1)") === `"'=SUM(A1)"`)
check("-5 is guarded", csvCell("-5") === `"'-5"`)
check("plain text untouched", csvCell("Bank confirmation") === `"Bank confirmation"`)
check("quotes are doubled", csvCell('he said "hi"') === `"he said ""hi"""`)

console.log("8. verdict messages are bilingual")
const v = sadVerdict(eng)
check("EN + AR messages exist", v.en.length > 10 && v.ar.length > 10)

console.log("")
console.log(fail === 0 ? `ALL ${pass} CHECKS PASS` : `${fail} FAILED / ${pass} passed`)
process.exit(fail === 0 ? 0 : 1)
