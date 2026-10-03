/** v36 test battery — the IFRS 15 flagship rewritten to the FULL
 *  comprehensiveness of the user's 12-page notes PDF.
 *
 *  The v31/v32 depth bar counted BLOCKS; the user's verdict — "the
 *  summaries isn't as comprehensive as mine" — proved that structural
 *  count ≠ comprehensiveness. This battery enforces the real bar:
 *
 *  · ≥ 4,000 English words of notes (was 1,746) with Arabic parity
 *  · ≥ 24 red-asterisk topics, covering every section a complete set of
 *    DipIFR notes must carry (incl. variable consideration, the
 *    financing component, licensing, modifications, presentation)
 *  · ≥ 12 journal sets / ≥ 24 T-account rows, ≥ 60% of them carrying
 *    amounts (real Dr/Cr numbers, not just descriptions)
 *  · ≥ 12 worked numeric examples · ≥ 80 digit-carrying strings
 *  · one running worked case threaded through all five steps, its
 *    allocation numbers internally consistent
 *
 *  Every other standard keeps the v32 floor (≥ 45 blocks) until its own
 *  true-depth rewrite lands in a following release.
 *
 *  Run: bun scripts/test-v36.ts */
import { readFileSync } from "node:fs"
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

function depthOf(standard: typeof import("../src/lib/ifrs").IFRS_SUMMARIES[number]) {
  let wordsEn = 0
  let wordsAr = 0
  let digits = 0
  let journals = 0
  let journalRows = 0
  let journalRowsWithAmounts = 0
  let examples = 0
  let topics: string[] = []
  const count = (t: { en: string; ar: string }) => {
    wordsEn += t.en.split(/\s+/).filter(Boolean).length
    wordsAr += t.ar.split(/\s+/).filter(Boolean).length
    if (/\d/.test(t.en)) digits++
  }
  for (const b of standard.blocks) {
    if (b.kind === "h") { topics.push(b.text.en); count(b.text) }
    if (b.kind === "p" || b.kind === "note" || b.kind === "tip") count(b.text)
    if (b.kind === "list" || b.kind === "steps") b.items.forEach(count)
    if (b.kind === "example") { examples++; b.lines.forEach(count); count(b.title) }
    if (b.kind === "formula") { b.lines.forEach(count); if (b.title) count(b.title) }
    if (b.kind === "tree") {
      count(b.root)
      if (b.title) count(b.title)
      const walk = (br: import("../src/lib/ifrs/types").TreeBranch[]) =>
        br.forEach((x) => { count(x.when); count(x.then); if (x.children) walk(x.children) })
      walk(b.branches)
    }
    if (b.kind === "journal") {
      journals++
      if (b.title) count(b.title)
      for (const row of b.rows) {
        journalRows++
        let carriesAmount = false
        if (row.dr) { count(row.dr); if (/\d/.test(row.dr.en)) carriesAmount = true }
        if (row.cr) { count(row.cr); if (/\d/.test(row.cr.en)) carriesAmount = true }
        if (carriesAmount) journalRowsWithAmounts++
      }
    }
  }
  return { wordsEn, wordsAr, digits, journals, journalRows, journalRowsWithAmounts, examples, topics }
}

async function main() {
  console.log("v36 — IFRS 15 at the true depth of the user's notes PDF\n")

  const { IFRS_SUMMARIES } = await import("../src/lib/ifrs")
  const ifrs15 = IFRS_SUMMARIES.find((s) => s.code === "IFRS 15")!
  const d = depthOf(ifrs15)

  /* ---------------- 1. volume ---------------- */
  console.log("── 1. Volume (words, not blocks) ──")
  check("≥ 4,000 English words of notes", d.wordsEn >= 4000, String(d.wordsEn))
  check("Arabic parity — AR words ≥ 80% of EN", d.wordsAr >= 0.8 * d.wordsEn, `${d.wordsAr} vs ${d.wordsEn}`)
  check("≥ 24 red-asterisk topics", d.topics.length >= 24, String(d.topics.length))
  check("≥ 80 strings carry amounts/figures", d.digits >= 80, String(d.digits))

  /* ---------------- 2. the topic map ---------------- */
  console.log("\n── 2. Topic coverage (every section a complete set carries) ──")
  const mustCover = [
    "Objective", "five-step", "Step 1", "Step 2", "Step 3", "Step 4", "Step 5",
    "Variable consideration", "financing component", "Allocating",
    "Measuring progress", "Contract costs", "Warranty", "Principal vs agent",
    "Consignment", "Bill-and-hold", "Repurchase", "right of return",
    "material rights", "Licensing", "Contract asset", "Presentation",
    "Contract modifications", "Transition",
  ]
  const joined = d.topics.join(" § ")
  for (const t of mustCover) check(`topic present: ${t}`, joined.toLowerCase().includes(t.toLowerCase()))

  /* ---------------- 3. journals with amounts ---------------- */
  console.log("\n── 3. Journal entries that actually carry amounts ──")
  check("≥ 12 journal sets", d.journals >= 12, String(d.journals))
  check("≥ 24 T-account rows", d.journalRows >= 24, String(d.journalRows))
  check("≥ 60% of journal rows carry amounts", d.journalRowsWithAmounts >= 0.6 * d.journalRows, `${d.journalRowsWithAmounts}/${d.journalRows}`)
  check("≥ 12 worked numeric examples", d.examples >= 12, String(d.examples))

  /* ---------------- 4. the running case ---------------- */
  console.log("\n── 4. The running worked case (one case through all five steps) ──")
  const src = readFileSync(join(ROOT, "src/lib/ifrs/standards/ifrs-15.ts"), "utf-8")
  check("the case is introduced (Nile Co)", src.includes("Nile Co"))
  check("bundled price 132,000 present", src.includes("132,000"))
  for (const n of ["91,667", "18,333", "22,000"]) check(`Step 4 allocation figure ${n} present`, src.includes(n))
  check("cost-to-cost worked contract (5,000 price / 4,000 cost)", src.includes("5,000") && src.includes("4,000"))
  check("financing example (121,000 ÷ 1.21 = 100,000)", src.includes("121,000") && src.includes("100,000"))

  /* ---------------- 5. the v32 floor for everyone ---------------- */
  console.log("\n── 5. The other 40 standards hold the v32 floor ──")
  const total = IFRS_SUMMARIES.reduce((t, s) => t + s.blocks.length, 0)
  check("every standard still ≥ 45 blocks", IFRS_SUMMARIES.every((s) => s.blocks.length >= 45))
  check("catalog total ≥ 2,125 blocks (grew with the flagship)", total >= 2125, String(total))
  check("IFRS 15 remains the deepest summary", ifrs15.blocks.length >= Math.max(...IFRS_SUMMARIES.filter((s) => s.code !== "IFRS 15").map((s) => s.blocks.length)))

  /* ---------------- 6. version sync ---------------- */
  console.log("\n── 6. Version sync ──")
  const sw = readFileSync(join(ROOT, "public/sw.js"), "utf-8")
  const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf-8"))
  const major = Number(pkg.version.split(".")[0])
  check("sw: cache stamp tracks the app version (auditedge-v36)", sw.includes(`VERSION = "auditedge-v${major}"`), `v${major}`)
  check("package.json: version is 36.0.0", pkg.version === "36.0.0", pkg.version)
  check("test-v36 wired into the test chain", (pkg.scripts?.test ?? "").includes("test-v36"))

  /* ---------------- done ---------------- */
  console.log(`\n${pass} passed · ${fail} failed`)
  if (fail > 0) process.exit(1)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
