/** v26 seed apply — past papers for the CPA / CFA / CMA course tracks.
 *
 *  Standalone and idempotent (same pattern as apply-v25): questions are
 *  created only when their `code` is absent; existing content is never
 *  overwritten.
 *
 *  Adds 6 families × (24-question flagship + 4 × 18-question dated
 *  sittings) = 6 × 96 = 576 new bilingual questions → bank ~2,109 → ~2,685.
 *
 *  Run: bun run scripts/seed/v26/apply-v26.ts */
import { PrismaClient } from "@prisma/client"
import { composeV26, FAMILIES_26, SITTINGS } from "./families-v26"

const db = new PrismaClient()

async function main() {
  const all = composeV26()

  // ---- validate the generated set ----
  const codes = new Set<string>()
  for (const q of all) {
    if (codes.has(q.code)) throw new Error(`duplicate code in generated set: ${q.code}`)
    codes.add(q.code)
    if (q.options.length !== 4) throw new Error(`${q.code}: options must be 4, got ${q.options.length}`)
    if (q.optionsAr.length !== 4) throw new Error(`${q.code}: optionsAr must be 4, got ${q.optionsAr.length}`)
    if (q.answerIndex < 0 || q.answerIndex > 3) throw new Error(`${q.code}: bad answerIndex ${q.answerIndex}`)
    if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== 4)
      throw new Error(`${q.code}: duplicate option text — ${q.options.join(" | ")}`)
    if (!q.stem.trim() || !q.stemAr.trim() || !q.explanation.trim() || !q.explanationAr.trim())
      throw new Error(`${q.code}: empty bilingual field`)
  }
  // determinism guard — compose twice, expect identical output
  const again = composeV26()
  if (JSON.stringify(again) !== JSON.stringify(all)) throw new Error("generator is not deterministic")

  // ---- upsert into the bank ----
  let created = 0
  let existing = 0
  for (const q of all) {
    const found = await db.bankQuestion.findUnique({ where: { code: q.code } })
    if (found) {
      existing++
      continue
    }
    await db.bankQuestion.create({
      data: {
        code: q.code,
        stem: q.stem,
        stemAr: q.stemAr,
        options: JSON.stringify(q.options),
        optionsAr: JSON.stringify(q.optionsAr),
        answerIndex: q.answerIndex,
        explanation: q.explanation,
        explanationAr: q.explanationAr,
        standardTag: q.standardTag,
        area: q.area,
        difficulty: q.difficulty,
        source: q.source,
      },
    })
    created++
  }

  console.log(`v26 track papers: created ${created}, existing ${existing}`)
  const bySource = await db.bankQuestion.groupBy({
    by: ["source"],
    where: { source: { contains: "past paper" } },
    _count: { _all: true },
  })
  const rows = bySource.sort((a, b) => b._count._all - a._count._all)
  console.log(`past-paper sources: ${rows.length}`)
  for (const f of FAMILIES_26) {
    const mine = rows.filter((r) => r.source.startsWith(f.sourceLabel))
    console.log(`  ${f.fam}: ${mine.length} sittings (${mine.map((m) => m._count._all).join(", ")})`)
  }
  const dist = [0, 0, 0, 0]
  for (const q of all) dist[q.answerIndex]++
  console.log(`answer-position distribution (v26): A=${dist[0]} B=${dist[1]} C=${dist[2]} D=${dist[3]}`)
  console.log(`TOTAL BANK: ${await db.bankQuestion.count()}`)
  console.log(`sitting labels: ${SITTINGS.map((s) => s.label).join(", ")} + flagship`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
