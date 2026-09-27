/**
 * Question-bank server helpers (P0-1): client shaping (the answer key never
 * ships to the browser) + stats aggregation.
 */
import { db } from "@/lib/db"
import type { BankQuestion } from "@prisma/client"
import type { BankQuestionClient as ClientQ, BankStats } from "@/lib/audit-types"

type RawBankQuestion = Omit<BankQuestion, "createdAt"> & { createdAt: Date }

export function questionForClient(q: RawBankQuestion): ClientQ {
  return {
    id: q.id,
    code: q.code,
    stem: q.stem,
    stemAr: q.stemAr,
    options: JSON.parse(q.options) as string[],
    optionsAr: q.optionsAr ? (JSON.parse(q.optionsAr) as string[]) : null,
    standardTag: q.standardTag,
    area: q.area,
    difficulty: q.difficulty,
  }
}

export async function bankStats(): Promise<BankStats> {
  const rows = await db.bankQuestion.findMany({
    select: { area: true, difficulty: true, standardTag: true, stemAr: true },
  })
  const byArea: Record<string, number> = {}
  const byDifficulty: Record<string, number> = {}
  const tagMap = new Map<string, { tag: string; area: string; count: number }>()
  let withArabic = 0
  for (const r of rows) {
    byArea[r.area] = (byArea[r.area] ?? 0) + 1
    byDifficulty[String(r.difficulty)] = (byDifficulty[String(r.difficulty)] ?? 0) + 1
    if (r.stemAr) withArabic += 1
    const t = tagMap.get(r.standardTag)
    if (t) t.count++
    else tagMap.set(r.standardTag, { tag: r.standardTag, area: r.area, count: 1 })
  }
  return {
    total: rows.length,
    byArea,
    byDifficulty,
    withArabic,
    tags: [...tagMap.values()].sort((a, b) => a.tag.localeCompare(b.tag)),
  }
}

/** Practice draw: filter by area/tag/difficulty, exclude recently seen. */
export async function drawPractice(opts: {
  count: number
  area?: string
  tag?: string
  difficulty?: number
  userId: string
  seed?: number
}): Promise<ClientQ[]> {
  const seen = await db.bankAttempt.findMany({
    where: { userId: opts.userId, createdAt: { gte: new Date(Date.now() - 14 * 86400_000) } },
    select: { questionId: true },
  })
  const seenIds = new Set(seen.map((s) => s.questionId))

  let pool = await db.bankQuestion.findMany({
    where: {
      ...(opts.area ? { area: opts.area } : {}),
      ...(opts.tag ? { standardTag: opts.tag } : {}),
      ...(opts.difficulty ? { difficulty: opts.difficulty } : {}),
    },
  })

  // prefer unseen questions; fall back to the full filter when exhausted
  const fresh = pool.filter((q) => !seenIds.has(q.id))
  if (fresh.length >= opts.count) pool = fresh

  const rand = mulberry32(opts.seed ?? Math.floor(Math.random() * 1e9))
  // v21: unbiased Fisher–Yates (the old sort(() => rand() - 0.5) is biased)
  const shuffled = [...pool]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, opts.count).map(questionForClient)
}

/** v21 mistake book: questions whose LATEST attempt was wrong (a later
 *  correct answer redeems the question). Returns them shuffled, capped. */
export async function missedQuestions(userId: string, cap = 30, seed?: number): Promise<ClientQ[]> {
  const attempts = await db.bankAttempt.findMany({
    where: { userId },
    orderBy: { createdAt: "asc" },
    select: { questionId: true, correct: true },
  })
  const latest = new Map<string, boolean>()
  for (const a of attempts) latest.set(a.questionId, a.correct)
  const missedIds = [...latest.entries()].filter(([, ok]) => !ok).map(([id]) => id)
  if (!missedIds.length) return []

  const rows = await db.bankQuestion.findMany({ where: { id: { in: missedIds } } })
  const rand = mulberry32(seed ?? Math.floor(Math.random() * 1e9))
  const shuffled = [...rows]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, cap).map(questionForClient)
}

export function mulberry32(seed: number) {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
