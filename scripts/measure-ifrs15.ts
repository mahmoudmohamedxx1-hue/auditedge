/** Audit the true depth of an IFRS Summaries standard vs the user's
 *  12-page IFRS 15 notes PDF benchmark. Run: bun scripts/measure-ifrs15.ts */
import { IFRS_15 } from "../src/lib/ifrs/standards/ifrs-15"

const blocks = IFRS_15.blocks
let wordsEn = 0
let topics: string[] = []
let journalSets = 0, journalRows = 0
let examples = 0, exampleLines = 0
let numericMentions = 0

for (const b of blocks) {
  const count = (t: { en: string }) => {
    wordsEn += t.en.split(/\s+/).filter(Boolean).length
    if (/\d/.test(t.en)) numericMentions++
  }
  if (b.kind === "h") { topics.push(b.text.en); count(b.text) }
  if (b.kind === "p" || b.kind === "note" || b.kind === "tip") count(b.text)
  if (b.kind === "list" || b.kind === "steps") b.items.forEach(count)
  if (b.kind === "example") { examples++; b.lines.forEach(count); exampleLines += b.lines.length }
  if (b.kind === "formula") b.lines.forEach(count)
  if (b.kind === "tree") {
    count(b.root)
    const walk = (br: typeof b.branches) => br.forEach((x) => { count(x.when); count(x.then); if (x.children) walk(x.children) })
    walk(b.branches)
  }
  if (b.kind === "journal") {
    journalSets++
    if (b.title) count(b.title)
    for (const row of b.rows) {
      journalRows++
      if (row.dr) count(row.dr)
      if (row.cr) count(row.cr)
    }
  }
}

console.log("IFRS 15 depth audit (the user's benchmark: a 12-page notes PDF)")
console.log("  blocks:", blocks.length)
console.log("  topics (h blocks):", topics.length)
console.log("  English words:", wordsEn)
console.log("  journal sets:", journalSets, "| journal T-account rows:", journalRows)
console.log("  worked examples:", examples, "| example lines:", exampleLines)
console.log("  strings containing digits:", numericMentions)
console.log("  ≈ words per topic:", Math.round(wordsEn / Math.max(1, topics.length)))
console.log("\n  topics:")
topics.forEach((t, i) => console.log(`    ${i + 1}. ${t}`))
