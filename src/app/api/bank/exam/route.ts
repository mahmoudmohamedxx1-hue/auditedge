import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { questionForClient } from "@/lib/bank"
import { sampleExam, EXAM_MODES, type ExamMode } from "@/lib/exam-blueprint"
import { getPastPaper } from "@/lib/past-papers"
import { buildSections, formatForPaper } from "@/lib/paper-formats"
import { getCrTask, type CrTask } from "@/lib/cr-tasks"

/** GET /api/bank/exam — past sittings (most recent first). */
export async function GET() {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  const sessions = await db.examSession.findMany({
    where: { userId: me.id },
    orderBy: { startedAt: "desc" },
    take: 20,
    select: {
      id: true,
      mode: true,
      total: true,
      correct: true,
      score: true,
      startedAt: true,
      completedAt: true,
      timedOut: true,
    },
  })
  return NextResponse.json({ sessions })
}

/** POST /api/bank/exam — start a timed sitting:
 *  {mode: "exam60" | "exam90"} blueprint sitting, or
 *  {paper: "acca-aa" | "acca-aaa" | "acca-fr" | "acca-sbr" | "soe-audit"}
 *  for a previous-exam paper (fixed question set, source-selected). */
export async function POST(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { mode?: unknown; paper?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  // only one active sitting at a time — a fresh start abandons the old one
  await db.examSession.updateMany({
    where: { userId: me.id, completedAt: null },
    data: { completedAt: new Date() },
  })

  /* ---- v22: previous-exam paper sitting ----
   *  v27 — families carrying a real-exam FORMAT (CPA testlets + TBS,
   *  DipIFR Section A/B, AA A/B/C, SBL/SBR case papers, CMA MCQ + essay,
   *  CFA sessions) are built section-by-section, with constructed-response
   *  tasks rotated per sitting. */
  if (body.paper !== undefined) {
    const paper = getPastPaper(String(body.paper))
    if (!paper) {
      return NextResponse.json({ error: "unknown paper" }, { status: 400 })
    }
    const pool = await db.bankQuestion.findMany({
      where: { source: paper.source },
      select: { id: true, difficulty: true },
    })
    if (pool.length < Math.min(paper.count, 15)) {
      return NextResponse.json({ error: "paper bank incomplete" }, { status: 503 })
    }
    // deterministic draw in code order (stable past-paper sitting)
    const ordered = pool.sort((a, b) => a.id.localeCompare(b.id))
    const format = formatForPaper(paper.id)
    const built = format
      ? buildSections(paper.id, ordered.map((q) => q.id))
      : { sections: [], questionIds: ordered.slice(0, paper.count).map((q) => q.id), crTaskIds: [] }
    const questionIds = built.questionIds
    // CR tasks extend the clock (~10 min per scenario task, real-exam pace)
    const durationMin = paper.durationMin + built.crTaskIds.length * 10
    const session = await db.examSession.create({
      data: {
        userId: me.id,
        mode: `paper:${paper.id}`,
        blueprint: JSON.stringify([{ paper: paper.id, count: questionIds.length, picked: questionIds.length }]),
        questionIds: JSON.stringify(questionIds),
        sections: JSON.stringify(built.sections),
        durationMin,
        total: questionIds.length,
        ...(built.crTaskIds.length ? { crStatus: "pending" } : {}),
      },
    })
    const questions = await db.bankQuestion.findMany({ where: { id: { in: questionIds } } })
    const order = new Map(questionIds.map((id, i) => [id, i]))
    questions.sort((a, b) => (order.get(a.id) ?? 0) - (order.get(b.id) ?? 0))
    // v28 — ship the CR tasks with the sitting response: the sectioned
    // sitting view needs them the moment it opens (a CR section with no
    // task data rendered a blank screen before this)
    const crTasks = built.crTaskIds
      .map((tid) => getCrTask(tid))
      .filter((t): t is CrTask => !!t)
    return NextResponse.json({
      session: {
        id: session.id,
        mode: session.mode,
        durationMin: session.durationMin,
        total: session.total,
        startedAt: session.startedAt.toISOString(),
        completedAt: null,
        score: null,
        correct: null,
        sectionScores: {},
        sections: built.sections,
        questions: questions.map(questionForClient),
        answered: {},
        flagged: [],
        written: {},
        crMarks: {},
        // certified solutions stay hidden until submit (same shape as GET)
        crTasks: crTasks.map((t) => ({
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
          })),
        })),
        blueprint: [{ paper: paper.id, count: questionIds.length, picked: questionIds.length }],
      },
    })
  }

  const mode = String(body?.mode) as ExamMode
  if (!(mode in EXAM_MODES)) {
    return NextResponse.json({ error: "mode must be exam60 or exam90" }, { status: 400 })
  }

  const pool = await db.bankQuestion.findMany({
    select: { id: true, area: true, difficulty: true },
  })
  if (pool.length < 20) {
    return NextResponse.json({ error: "question bank is too small to sit an exam" }, { status: 503 })
  }

  const seed = Math.floor(Math.random() * 1e9)
  const { questionIds, plan } = sampleExam(pool, mode, seed)
  const config = EXAM_MODES[mode]

  const session = await db.examSession.create({
    data: {
      userId: me.id,
      mode,
      blueprint: JSON.stringify(plan),
      questionIds: JSON.stringify(questionIds),
      durationMin: config.durationMin,
      total: questionIds.length,
    },
  })

  const questions = await db.bankQuestion.findMany({
    where: { id: { in: questionIds } },
  })
  const order = new Map(questionIds.map((id, i) => [id, i]))
  questions.sort((a, b) => (order.get(a.id) ?? 0) - (order.get(b.id) ?? 0))

  return NextResponse.json({
    session: {
      id: session.id,
      mode: session.mode,
      durationMin: session.durationMin,
      total: session.total,
      startedAt: session.startedAt.toISOString(),
      completedAt: null,
      score: null,
      correct: null,
      sectionScores: {},
      questions: questions.map(questionForClient),
      answered: {},
      flagged: [],
      blueprint: plan,
    },
  })
}
