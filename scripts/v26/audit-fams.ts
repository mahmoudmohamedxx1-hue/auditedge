import { CLUSTERS } from "../../scripts/seed/v25/families"
const fams = new Set<string>()
for (const [cid, arr] of Object.entries(CLUSTERS)) {
  for (const t of arr as any[]) for (const f of t.fams) fams.add(f)
  console.log(`${cid}: ${(arr as any[]).length} templates`)
}
console.log("\nfam selectors:", [...fams].sort().join(", "))
