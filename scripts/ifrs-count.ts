import { IFRS_SUMMARIES } from "../src/lib/ifrs/index"
for (const s of IFRS_SUMMARIES) {
  const kinds: Record<string, number> = {}
  for (const b of s.blocks) kinds[b.kind] = (kinds[b.kind] ?? 0) + 1
  console.log(
    s.code.padEnd(8),
    String(s.blocks.length).padStart(3),
    "blocks |",
    Object.entries(kinds).map(([k, v]) => `${k}:${v}`).join(" ")
  )
}
console.log("TOTAL standards:", IFRS_SUMMARIES.length)
const total = IFRS_SUMMARIES.reduce((a, s) => a + s.blocks.length, 0)
console.log("TOTAL blocks:", total)
