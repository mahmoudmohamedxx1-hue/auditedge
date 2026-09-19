import { SECTORS_DEEP_A } from "../src/lib/program/sectors-deep-a"
import { SECTORS_DEEP_B } from "../src/lib/program/sectors-deep-b"
import { SECTORS_DEEP_C } from "../src/lib/program/sectors-deep-c"
import { SECTORS_DEEP_D } from "../src/lib/program/sectors-deep-d"

const all = { ...SECTORS_DEEP_A, ...SECTORS_DEEP_B, ...SECTORS_DEEP_C, ...SECTORS_DEEP_D }
const ids = Object.keys(all)
console.log("sectors:", ids.length)
const expected = ["banks","microfinance","insurance","manufacturing","retail","restaurants","textiles","agriculture","trading","construction","realestate","healthcare","technology","telecom","energy","logistics","education","tourism","groups","nonprofit"]
const missing = expected.filter(e => !ids.includes(e))
console.log("missing:", missing.length ? missing : "none")
for (const [id, d] of Object.entries(all)) {
  console.log(`${id} | est:${d.estimates.length} gc:${d.goingConcern.length} an:${d.analytics.length} iq:${d.inquiries.length} xf:${d.extraFraud?.length ?? 0} xm:${d.extraMines?.length ?? 0} xr:${d.extraRatios?.length ?? 0} xp:${d.extraProcedures?.length ?? 0} xk:${d.extraKams?.length ?? 0} xpit:${d.extraPitfalls?.length ?? 0}`)
}
