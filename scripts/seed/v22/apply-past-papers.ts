/** v22 seed apply — previous-exam papers (IFRS + Auditing) into the bank.
 *  Standalone and idempotent: questions are created only when their `code`
 *  is absent; existing content is never overwritten.
 *
 *  Run: bun run scripts/seed/v22/apply-past-papers.ts */
import { PrismaClient } from "@prisma/client"
import { AA_PAPER, AAA_PAPER } from "./bank-past-papers-audit"
import { FR_PAPER, SBR_PAPER } from "./bank-past-papers-ifrs"
import { SOE_PAPER } from "./bank-past-papers-egypt"

const db = new PrismaClient()

const ALL = [...AA_PAPER, ...AAA_PAPER, ...FR_PAPER, ...SBR_PAPER, ...SOE_PAPER]

async function main() {
  let created = 0
  let existing = 0
  for (const q of ALL) {
    if (q.options.length !== 4) throw new Error(`${q.code}: options must be 4, got ${q.options.length}`)
    if (q.optionsAr.length !== 4) throw new Error(`${q.code}: optionsAr must be 4, got ${q.optionsAr.length}`)
    if (q.answerIndex < 0 || q.answerIndex > 3) throw new Error(`${q.code}: bad answerIndex ${q.answerIndex}`)
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
  const bySource = await db.bankQuestion.groupBy({
    by: ["source"],
    where: { source: { contains: "past paper" } },
    _count: { _all: true },
  })
  console.log(`past papers: created ${created}, existing ${existing}`)
  for (const s of bySource) console.log(`  ${s.source}: ${s._count._all}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
