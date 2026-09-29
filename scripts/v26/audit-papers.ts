import { PAPER_FAMILIES, PAPER_SITTINGS } from "../../src/lib/past-papers"
console.log("families:", PAPER_FAMILIES.length)
const tracks: Record<string, string[]> = {}
for (const f of PAPER_FAMILIES) {
  const t = f.track ?? "?"
  tracks[t] = tracks[t] ?? []
  tracks[t].push(f.id)
}
for (const [t, ids] of Object.entries(tracks)) console.log(`\n[${t}] (${ids.length})`, ids.join(", "))
console.log("\nsittings per family (first):", JSON.stringify(PAPER_SITTINGS[PAPER_FAMILIES[0].id]?.map(s=>s.id)))
