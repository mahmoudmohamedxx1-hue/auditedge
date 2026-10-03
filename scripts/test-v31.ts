/** v31 test battery — IFRS Summaries COMPREHENSIVE REWRITE: the user asked
 *  for every standard's summary to be as comprehensive as the IFRS 15 notes
 *  PDF sample. This battery enforces the new depth bar:
 *
 *  · one file per standard under src/lib/ifrs/standards/ (41 files)
 *  · every standard ≥ 12 blocks (was 5–10 before v31)
 *  · ≥ 4 red-asterisk headings per standard
 *  · decision trees / journals / worked examples across nearly all standards
 *  · catalog totals: 800+ revision blocks (was 328)
 *  · depth chips in the hub UI + catalog stats + i18n ifrs31 keys
 *
 *  Run: bun scripts/test-v31.ts */
import { readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"

let pass = 0
let fail = 0
function check(name: string, ok: boolean, detail = "") {
  const mark = ok ? "✓" : "✗"
  console.log(`  ${mark} ${name}${detail ? ` — ${detail}` : ""}`)
  if (ok) pass++
  else fail++
}

const ROOT = process.cwd()

async function main() {
  console.log("v31 — IFRS Summaries: every standard written to the PDF's depth bar\n")

  /* ---------------- 1. the per-standard architecture ---------------- */
  console.log("── 1. Per-standard architecture ──")
  const files = readdirSync(join(ROOT, "src/lib/ifrs/standards")).filter((f) => f.endsWith(".ts"))
  check("41 per-standard files under standards/", files.length === 41, `${files.length} files`)

  const expectedFiles = new Set([
    "ifrs-01","ifrs-02","ifrs-03","ifrs-05","ifrs-06","ifrs-07","ifrs-08","ifrs-09",
    "ifrs-10","ifrs-11","ifrs-12","ifrs-13","ifrs-14","ifrs-15","ifrs-16","ifrs-17",
    "ias-01","ias-02","ias-07","ias-08","ias-10","ias-12","ias-16","ias-19","ias-20",
    "ias-21","ias-23","ias-24","ias-26","ias-27","ias-28","ias-29","ias-32","ias-33",
    "ias-34","ias-36","ias-37","ias-38","ias-39","ias-40","ias-41",
  ])
  const actualStems = new Set(files.map((f) => f.replace(/\.ts$/, "")))
  check("file names match the effective-standard catalogue", 
    [...expectedFiles].every((f) => actualStems.has(f)) && actualStems.size === expectedFiles.size)

  for (const group of ["data-presentation", "data-assets", "data-revenue", "data-finstruments", "data-groups", "data-specialized"]) {
    const src = readFileSync(join(ROOT, `src/lib/ifrs/${group}.ts`), "utf8")
    check(`${group}.ts is a thin array importing from standards/`, src.includes("./standards/"))
  }
  check("the flagship lives in standards/ifrs-15.ts (flagship: true)", 
    readFileSync(join(ROOT, "src/lib/ifrs/standards/ifrs-15.ts"), "utf8").includes("flagship: true"))

  /* ---------------- 2. the depth bar ---------------- */
  console.log("── 2. The depth bar (the user's ask) ──")
  const { IFRS_SUMMARIES, depthOf, catalogStats } = await import("../src/lib/ifrs")

  const total = IFRS_SUMMARIES.reduce((a, s) => a + s.blocks.length, 0)
  check("catalog total ≥ 750 revision blocks (was 328 before v31)", total >= 750, `${total} blocks`)
  check("average depth ≥ 18 blocks per standard", total / IFRS_SUMMARIES.length >= 18, (total / IFRS_SUMMARIES.length).toFixed(1))

  const shallowest = IFRS_SUMMARIES.reduce((min, s) => Math.min(min, s.blocks.length), Infinity)
  check("no standard below 12 blocks", shallowest >= 12, `shallowest = ${shallowest}`)

  const headingsOk = IFRS_SUMMARIES.filter((s) => depthOf(s).headings >= 4).length
  check("every standard carries ≥ 4 red-asterisk headings", headingsOk === 41, `${headingsOk}/41`)

  const withTrees = IFRS_SUMMARIES.filter((s) => depthOf(s).trees >= 1).length
  check("decision trees in ≥ 39 of 41 standards", withTrees >= 39, `${withTrees}/41`)
  const withJournalOrFormula = IFRS_SUMMARIES.filter(
    (s) => depthOf(s).journals >= 1 || depthOf(s).formulas >= 1
  ).length
  check("journals or formula panels in ≥ 40 of 41 standards", withJournalOrFormula >= 40, `${withJournalOrFormula}/41`)
  const withExamples = IFRS_SUMMARIES.filter((s) => depthOf(s).examples >= 1).length
  check("worked examples in ≥ 36 of 41 standards", withExamples >= 36, `${withExamples}/41`)
  const withTips = IFRS_SUMMARIES.filter((s) => depthOf(s).tips >= 1).length
  check("every standard carries exam tips", withTips === 41, `${withTips}/41`)

  /* the major standards — the exam big-hitters must be deep */
  const depthByCode: Record<string, number> = {}
  IFRS_SUMMARIES.forEach((s) => (depthByCode[s.code] = s.blocks.length))
  const majors: Array<[string, number]> = [
    ["IFRS 9", 20], ["IFRS 16", 20], ["IFRS 15", 40], ["IFRS 3", 18], ["IFRS 10", 18],
    ["IAS 16", 20], ["IAS 36", 18], ["IAS 12", 20], ["IAS 19", 18], ["IAS 38", 18],
    ["IAS 2", 18], ["IAS 33", 20], ["IAS 21", 16],
  ]
  majors.forEach(([code, floor]) => {
    check(`${code} meets the major-standard floor (${floor}+ blocks)`, depthByCode[code] >= floor, `${depthByCode[code]} blocks`)
  })

  /* ---------------- 3. stats helpers ---------------- */
  console.log("── 3. Catalog stats helpers (drive the UI chips) ──")
  const st = catalogStats()
  check("catalogStats().blocks matches the manual sum", st.blocks === total, `${st.blocks}`)
  check("catalogStats().standards = 41", st.standards === 41)
  const manualTrees = IFRS_SUMMARIES.reduce(
    (a, s) => a + s.blocks.filter((b) => b.kind === "tree").length, 0)
  check("tree count consistent", st.trees === manualTrees && st.trees >= 60, `${st.trees} trees`)
  check("journal count consistent", st.journals >= 30, `${st.journals} journal sets`)
  check("worked examples counted", st.examples >= 35, `${st.examples} examples`)
  const depthSample = depthOf(IFRS_SUMMARIES.find((s) => s.code === "IFRS 15")!)
  check("depthOf(IFRS 15) reports the flagship's 64 blocks", depthSample.blocks >= 60, `${depthSample.blocks}`)

  /* ---------------- 4. bilingual depth (all new content) ---------------- */
  console.log("── 4. Bilingual integrity of the rewritten content ──")
  const everyStringBilingual = IFRS_SUMMARIES.every((s) =>
    s.blocks.every((b) => {
      const pairs: { en: string; ar: string }[] = []
      if (b.kind === "h" || b.kind === "p" || b.kind === "note" || b.kind === "tip") pairs.push(b.text)
      if (b.kind === "list" || b.kind === "steps") b.items.forEach((i) => pairs.push(i))
      if (b.kind === "example" || b.kind === "formula") b.lines.forEach((l) => pairs.push(l))
      if (b.kind === "tree") {
        pairs.push(b.root)
        const walk = (brs: { when: { en: string; ar: string }; then: { en: string; ar: string }; children?: unknown[] }[]) =>
          brs.forEach((x) => {
            pairs.push(x.when, x.then)
            if (x.children) walk(x.children as never)
          })
        if (b.title) pairs.push(b.title)
        walk(b.branches as never)
      }
      if (b.kind === "journal") b.rows.forEach((r) => { if (r.dr) pairs.push(r.dr); if (r.cr) pairs.push(r.cr) })
      return pairs.every((p) => p.en.trim() && p.ar.trim() && /[\u0600-\u06FF]/.test(p.ar))
    })
  )
  check("every block of every standard is bilingual with real Arabic script", everyStringBilingual)

  /* ---------------- 5. UI depth chips ---------------- */
  console.log("── 5. Hub UI shows the comprehensiveness ──")
  const hub = readFileSync(join(ROOT, "src/components/audit/ifrs-summaries.tsx"), "utf8")
  check("hub imports depthOf + catalogStats", hub.includes("depthOf") && hub.includes("catalogStats"))
  check("cards render device chips (trees/journals/formulas)", hub.includes("ListTree") && hub.includes("Table2") && hub.includes("Sigma"))
  check("hub header carries the catalog totals strip", hub.includes("ifrs31.blocks") && hub.includes("ifrs31.examples"))
  check("detail view carries per-standard depth chips", hub.includes("ifrs31.trees"))

  /* ---------------- 6. i18n ---------------- */
  console.log("── 6. i18n ──")
  const { tt } = await import("../src/lib/i18n")
  const keys = ["ifrs31.standards", "ifrs31.blocks", "ifrs31.trees", "ifrs31.journals", "ifrs31.formulas", "ifrs31.examples", "ifrs31.tips", "ifrs31.catalog"]
  const i18nOk = keys.every((k) => tt(k as never, "en") !== k && tt(k as never, "ar") !== k)
  check("all 8 ifrs31 keys resolve in EN and AR", i18nOk)

  /* ---------------- 7. version ---------------- */
  console.log("── 7. Version ──")
  const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"))
  // v32 relaxed the hard pin to a floor: the catalog keeps growing
  check("package.json at v31 or later", Number(pkg.version.split(".")[0]) >= 31, pkg.version)
  const testScript = pkg.scripts.test as string
  check("test-v31 wired into the main suite", testScript.includes("test-v31.ts"))

  console.log(`\n${pass} passed · ${fail} failed`)
  if (fail > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
