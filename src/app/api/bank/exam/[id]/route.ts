import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { questionForClient } from "@/lib/bank"
import { seedReviewFromQuestion } from "@/lib/review"
import { getCrTask, type CrTask } from "@/lib/cr-tasks"
import type { SessionSection } from "@/lib/paper-formats"

type Params = { params: Promise<{ id: string }> }

async function loadSession(userId: string, id: string) {
  return db.examSession.findFirst({ where: { id, userId } })
}

/** v27 — CR task payload for the client. The certified solution is stripped
 *  until the sitting is submitted (no peeking), then revealed for review. */
function crTaskForClient(t: CrTask, reveal: boolean) {
  return {
    id: t.id,
    family: t.family,
    labelEn: t.labelEn,
    labelAr: t.labelAr,
    exhibitEn: t.exhibitEn,
    exhibitAr: t.exhibitAr,
    totalMarks: t.requirements.reduce((a, r) => a + r.marks, 0),
    requirements: t.requirements.map((r) => ({
      promptEn: r.promptEn,
      promptAr: r.promptAr,
      kind: r.kind,
      marks: r.marks,
      ...(reveal
        ? { certifiedEn: r.certifiedEn, certifiedAr: r.certifiedAr, numeric: r.numeric }
        : {}),
    })),
  }
}

/** GET /api/bank/exam/[id] — resume or review a sitting. */
export async function GET(_req: Request, { params }: Params) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  const { id } = await params
  const session = await loadSession(me.id, id)
  if (!session) return NextResponse.json({ error: "not found" }, { status: 404 })

  const questionIds = JSON.parse(session.questionIds) as string[]
  const questions = await db.bankQuestion.findMany({ where: { id: { in: questionIds } } })
  const order = new Map(questionIds.map((qid, i) => [qid, i]))
  questions.sort((a, b) => (order.get(a.id) ?? 0) - (order.get(b.id) ?? 0))

  // after completion the answer key ships too (results screen needs it)
  const key: Record<string, number> = {}
  const explanations: Record<string, string> = {}
  const explanationsAr: Record<string, string> = {}
  if (session.completedAt) {
    for (const q of questions) {
      key[q.id] = q.answerIndex
      explanations[q.id] = q.explanation
      if (q.explanationAr) explanationsAr[q.id] = q.explanationAr
    }
  }

  const sections = JSON.parse(session.sections) as SessionSection[]
  const crTaskIds = sections.flatMap((s) => s.crTaskIds ?? [])
  const crTasks = crTaskIds
    .map((tid) => getCrTask(tid))
    .filter((t): t is CrTask => !!t)

  return NextResponse.json({
    session: {
      id: session.id,
      mode: session.mode,
      durationMin: session.durationMin,
      total: session.total,
      startedAt: session.startedAt.toISOString(),
      completedAt: session.completedAt?.toISOString() ?? null,
      score: session.score,
      correct: session.correct,
      timedOut: session.timedOut,
      crStatus: session.crStatus || undefined,
      sectionScores: JSON.parse(session.sectionScores) as Record<
        string,
        { correct: number; total: number }
      >,
      sections,
      questions: questions.map(questionForClient),
      answered: JSON.parse(session.answered) as Record<string, number>,
      flagged: JSON.parse(session.flagged) as string[],
      written: JSON.parse(session.written) as Record<string, string[]>,
      crMarks: session.completedAt ? (JSON.parse(session.crMarks) as object) : {},
      crTasks: crTasks.map((t) => crTaskForClient(t, !!session.completedAt)),
      blueprint: JSON.parse(session.blueprint) as {
        area: string
        count: number
        picked: number
      }[],
      ...(session.completedAt ? { key, explanations, explanationsAr } : {}),
    },
  })
}

/** PATCH /api/bank/exam/[id] — {action: "answer" | "flag" | "submit"}. */
export async function PATCH(req: Request, { params }: Params) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  const { id } = await params
  const session = await loadSession(me.id, id)
  if (!session) return NextResponse.json({ error: "not found" }, { status: 404 })

  let body: {
    action?: unknown
    questionId?: unknown
    picked?: unknown
    flagged?: unknown
    taskId?: unknown
    values?: unknown
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  const action = String(body?.action)
  const questionId = typeof body?.questionId === "string" ? body.questionId : ""

  /* ---- v27: constructed-response answers (CR tasks) ---- */
  if (action === "answerWritten") {
    if (session.completedAt) {
      return NextResponse.json({ error: "sitting already submitted" }, { status: 409 })
    }
    const taskId = String(body?.taskId ?? "")
    const sections = JSON.parse(session.sections) as SessionSection[]
    const valid = sections.some((s) => (s.crTaskIds ?? []).includes(taskId))
    if (!taskId || !valid) {
      return NextResponse.json({ error: "task not in this sitting" }, { status: 400 })
    }
    const task = getCrTask(taskId)
    if (!task) return NextResponse.json({ error: "unknown task" }, { status: 400 })
    const raw = Array.isArray(body?.values) ? (body!.values as unknown[]) : []
    const values = task.requirements.map((_, i) =>
      typeof raw[i] === "string" ? (raw[i] as string).slice(0, 4000) : ""
    )
    const written = JSON.parse(session.written) as Record<string, string[]>
    written[taskId] = values
    await db.examSession.update({
      where: { id: session.id },
      data: { written: JSON.stringify(written) },
    })
    return NextResponse.json({ ok: true })
  }

  if (action === "answer" || action === "flag") {
    if (session.completedAt) {
      return NextResponse.json({ error: "sitting already submitted" }, { status: 409 })
    }
    const questionIds = JSON.parse(session.questionIds) as string[]
    if (questionId && !questionIds.includes(questionId)) {
      return NextResponse.json({ error: "question not in this sitting" }, { status: 400 })
    }

    if (action === "answer") {
      const picked = Number(body?.picked)
      if (!Number.isInteger(picked) || picked < 0 || picked > 3) {
        return NextResponse.json({ error: "picked (0-3) required" }, { status: 400 })
      }
      const answered = JSON.parse(session.answered) as Record<string, number>
      answered[questionId] = picked
      await db.examSession.update({
        where: { id: session.id },
        data: { answered: JSON.stringify(answered) },
      })
    } else {
      const flagged = new Set(JSON.parse(session.flagged) as string[])
      if (body?.flagged) flagged.add(questionId)
      else flagged.delete(questionId)
      await db.examSession.update({
        where: { id: session.id },
        data: { flagged: JSON.stringify([...flagged]) },
      })
    }
    return NextResponse.json({ ok: true })
  }

  if (action === "submit") {
    if (session.completedAt) {
      return NextResponse.json({ error: "sitting already submitted" }, { status: 409 })
    }
    const questionIds = JSON.parse(session.questionIds) as string[]
    const answered = JSON.parse(session.answered) as Record<string, number>
    const questions = await db.bankQuestion.findMany({ where: { id: { in: questionIds } } })
    const byId = new Map(questions.map((q) => [q.id, q]))

    // v27 — sections carrying constructed-response tasks?
    const sections = JSON.parse(session.sections) as SessionSection[]
    const hasCr = sections.some((s) => s.kind === "cr" && (s.crTaskIds ?? []).length > 0)

    let correct = 0
    const sectionScores: Record<string, { correct: number; total: number }> = {}
    const attemptRows: {
      userId: string
      questionId: string
      picked: number
      correct: boolean
      mode: string
      examId: string
    }[] = []
    const missed: string[] = []

    for (const qid of questionIds) {
      const q = byId.get(qid)
      if (!q) continue
      const sec = (sectionScores[q.area] ??= { correct: 0, total: 0 })
      sec.total += 1
      const picked = answered[qid]
      const isCorrect = picked !== undefined && picked === q.answerIndex
      if (isCorrect) {
        correct += 1
        sec.correct += 1
      } else if (picked !== undefined) {
        missed.push(qid)
      }
      if (picked !== undefined) {
        attemptRows.push({
          userId: me.id,
          questionId: qid,
          picked,
          correct: isCorrect,
          mode: "exam",
          examId: session.id,
        })
      }
    }

    const answeredCount = Object.keys(answered).length
    // provisional MCQ score — the AI marking pass replaces it with the
    // blended section-weighted score for CR papers
    const score = Math.round((correct / Math.max(1, questionIds.length)) * 100)
    const xpEarned = correct * 3 // exam XP: 3 per correct answer

    // v21: server-side clock — a submission that lands after the deadline
    // (plus a 45 s network grace) is graded but flagged as timed out, so a
    // crashed tab can never silently inflate a mock-exam score.
    const deadline = session.startedAt.getTime() + session.durationMin * 60_000
    const timedOut = session.durationMin > 0 && Date.now() > deadline + 45_000

    await db.$transaction([
      ...attemptRows.map((r) => db.bankAttempt.create({ data: r })),
      db.examSession.update({
        where: { id: session.id },
        data: {
          completedAt: new Date(),
          correct,
          score,
          timedOut,
          sectionScores: JSON.stringify(sectionScores),
          ...(hasCr ? { crStatus: "pending" } : {}),
        },
      }),
      ...(xpEarned > 0
        ? [db.user.update({ where: { id: me.id }, data: { xp: { increment: xpEarned } } })]
        : []),
    ])

    // every missed answered question joins the review queue (P0-1 → P0-3)
    for (const qid of missed) {
      try {
        await seedReviewFromQuestion(me.id, qid)
      } catch {}
    }

    return NextResponse.json({
      ok: true,
      score,
      correct,
      total: questionIds.length,
      xpEarned,
      timedOut,
      crPending: hasCr,
    })
  }

  return NextResponse.json({ error: "unknown action" }, { status: 400 })
}
