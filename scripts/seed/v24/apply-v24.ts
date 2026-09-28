/** v24 seed apply — the rest of the ACCA syllabus into the bank.
 *
 *  Standalone and idempotent: questions are created only when their `code`
 *  is absent; existing content is never overwritten.
 *
 *  Adds 9 new full papers (186 questions):
 *    Applied Knowledge : BT (18 Q), MA (18 Q)
 *    Applied Skills    : LW (24), PM (24), TX (24)
 *    Strategic Prof.   : SBL (24), AFM (18), APM (18), ATX (18)
 *
 *  Answer positions are deterministically rotated per question (hash of
 *  the question code) so the sitting never has a predictable answer key,
 *  while re-runs stay stable (same code → same rotation).
 *
 *  Run: bun run scripts/seed/v24/apply-v24.ts */
import { PrismaClient } from "@prisma/client"
import type { PaperSeedQ } from "./bank-v24-knowledge"
import { BT_PAPER, MA_PAPER } from "./bank-v24-knowledge"
import { LW_PAPER, PM_PAPER, TX_PAPER } from "./bank-v24-skills"
import { SBL_PAPER, AFM_PAPER, APM_PAPER, ATX_PAPER } from "./bank-v24-strategic"

const db = new PrismaClient()

/** Deterministic 32-bit string hash (FNV-1a). */
function hashOf(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** Rotate options so the correct answer sits at a code-derived position —
 *  spreads the key across A/B/C/D without changing content. */
function rotate(q: PaperSeedQ): PaperSeedQ {
  const target = hashOf(q.code) % 4
  const from = q.answerIndex
  if (target === from) return q
  const rotateArr = <T,>(a: T[]): T[] => {
    const out: T[] = []
    for (let i = 0; i < a.length; i++) {
      // move each element from its old slot to its new slot
      out[(i + (target - from + 4)) % 4] = a[i]
    }
    return out
  }
  return {
    ...q,
    options: rotateArr(q.options),
    optionsAr: rotateArr(q.optionsAr),
    answerIndex: target,
  }
}

const ALL: PaperSeedQ[] = [
  ...BT_PAPER,
  ...MA_PAPER,
  ...LW_PAPER,
  ...PM_PAPER,
  ...TX_PAPER,
  ...SBL_PAPER,
  ...AFM_PAPER,
  ...APM_PAPER,
  ...ATX_PAPER,
].map(rotate)

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
  console.log(`v24 ACCA papers: created ${created}, existing ${existing}`)
  for (const s of bySource.sort((a, b) => b._count._all - a._count._all)) console.log(`  ${s._count._all} · ${s.source}`)
  const positions = await db.bankQuestion.findMany({
    where: { code: { in: [...codes] } },
    select: { answerIndex: true },
  })
  const dist = [0, 0, 0, 0]
  for (const p of positions) dist[p.answerIndex]++
  console.log(`answer-position distribution (v24): A=${dist[0]} B=${dist[1]} C=${dist[2]} D=${dist[3]}`)
  console.log(`TOTAL BANK: ${await db.bankQuestion.count()}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => db.$disconnect())
