/** v23 seed apply — FULL-LENGTH previous-exam papers into the bank.
 *  Standalone and idempotent: questions are created only when their `code`
 *  is absent; existing content is never overwritten.
 *
 *  Adds:
 *    - AA 12→30, AAA 12→24, FR 12→30, SBR 12→24, SOE 12→24 (full papers)
 *    - NEW papers: ACCA FA (18 Q) and ACCA FM (18 Q)
 *
 *  Run: bun run scripts/seed/v23/apply-full-papers.ts */
import { PrismaClient } from "@prisma/client"
import { AA_FULL, AAA_FULL } from "./bank-v23-audit"
import { FR_FULL, SBR_FULL } from "./bank-v23-accounting"
import { SOE_FULL, FA_PAPER, FM_PAPER } from "./bank-v23-acca-extra"

const db = new PrismaClient()

const ALL = [...AA_FULL, ...AAA_FULL, ...FR_FULL, ...SBR_FULL, ...SOE_FULL, ...FA_PAPER, ...FM_PAPER]

async function main() {
  let created = 0
  let existing = 0
  const codes = new Set<string>()
  for (const q of ALL) {
    if (codes.has(q.code)) throw new Error(`duplicate code in seed: ${q.code}`)
    codes.add(q.code)
    if (q.options.length !== 4) throw new Error(`${q.code}: options must be 4, got ${q.options.length}`)
    if (q.optionsAr.length !== 4) throw new Error(`${q.code}: optionsAr must be 4, got ${q.optionsAr.length}`)
    if (q.answerIndex < 0 || q.answerIndex > 3) throw new Error(`${q.code}: bad answerIndex ${q.answerIndex}`)
    if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== 4)
      throw new Error(`${q.code}: duplicate option text`)
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
  console.log(`v23 full papers: created ${created}, existing ${existing}`)
  for (const s of bySource.sort((a, b) => b._count._all - a._count._all)) console.log(`  ${s._count._all} · ${s.source}`)
  console.log(`TOTAL BANK: ${await db.bankQuestion.count()}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
