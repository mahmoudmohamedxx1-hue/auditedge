/** quick IFRS 16 depth probe (v38 test calibration). Run: bun scripts/measure-ifrs16.ts */
import { IFRS_16 } from "../src/lib/ifrs/standards/ifrs-16"

const words = (str: string) => (str.match(/[A-Za-z\u0600-\u06FF]+/g) || []).length

let en = 0
let ar = 0
let digits = 0
for (const b of IFRS_16.blocks) {
  const t = JSON.stringify(b)
  const enPart = (t.match(/"en":\s*"[^"]*"/g) || []).join(" ")
  const arPart = (t.match(/"ar":\s*"[^"]*"/g) || []).join(" ")
  en += words(enPart)
  ar += words(arPart)
  digits += (t.match(/\d[\d,.]*/g) || []).length
}

const journals = IFRS_16.blocks.filter((b) => b.kind === "journal")
const rows = journals.flatMap((j) => (j.kind === "journal" ? j.rows : []))
const rowsWithAmts = rows.filter((r) => /\d/.test(`${r.dr?.en ?? ""}${r.cr?.en ?? ""}`)).length

console.log({
  blocks: IFRS_16.blocks.length,
  wordsEn: en,
  wordsAr: ar,
  digits,
  journals: journals.length,
  journalRows: rows.length,
  rowsWithAmts,
  h: IFRS_16.blocks.filter((b) => b.kind === "h").length,
  examples: IFRS_16.blocks.filter((b) => b.kind === "example").length,
  tips: IFRS_16.blocks.filter((b) => b.kind === "tip").length,
})
