import { SECTORS_A } from "../src/lib/program/sectors-a"
import { SECTORS_B } from "../src/lib/program/sectors-b"

const all = [...SECTORS_A, ...SECTORS_B]
console.log("count:", all.length)
for (const s of all) {
  console.log(
    `${s.id} | fraud:${s.fraudRedFlags.length} mines:${s.minefields.length} ratios:${s.ratios.length} proc:${s.procedures.length} kams:${s.kams.length} pits:${s.pitfalls.length} risks:${s.inherentRisks.length} accts:${s.significantAccounts.length}`
  )
}
