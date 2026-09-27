/**
 * v21 — Arabic parity for the egypt area of the question bank.
 * Idempotent: fills stemAr/optionsAr/explanationAr for the AR_EGYPT entries
 * only where the question has no Arabic yet (skips anything already translated).
 * Run: bun run scripts/seed/v21/apply-egypt-ar.ts
 */
import { PrismaClient } from "@prisma/client"
import { AR_EGYPT } from "./bank-ar-egypt"

const db = new PrismaClient()

async function main() {
  let applied = 0
  let skipped = 0
  let missing = 0
  for (const item of AR_EGYPT) {
    const q = await db.bankQuestion.findUnique({ where: { code: item.code } })
    if (!q) {
      console.warn(`[egypt-ar] missing question ${item.code}`)
      missing++
      continue
    }
    if (q.stemAr) {
      skipped++
      continue
    }
    await db.bankQuestion.update({
      where: { id: q.id },
      data: { stemAr: item.stem, optionsAr: JSON.stringify(item.options), explanationAr: item.explanation },
    })
    applied++
  }
  console.log(`[egypt-ar] +${applied} questions given Arabic · ${skipped} already had Arabic · ${missing} missing`)

  // summary: egypt-area AR coverage after the pass
  const [egyptTotal, egyptAr] = await Promise.all([
    db.bankQuestion.count({ where: { area: "egypt" } }),
    db.bankQuestion.count({ where: { area: "egypt", stemAr: { not: null } } }),
  ])
  console.log("---")
  console.log(`egypt area AR coverage: ${egyptAr}/${egyptTotal}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
