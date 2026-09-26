import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"

/**
 * GET /api/user-data — export ALL of the learner's data as one JSON file
 * (the P1-7 escape hatch: on serverless deploys with the snapshot database,
 * user data is rebuilt from the seed on every redeploy — export first).
 *
 * POST /api/user-data — import a previously exported file back
 * ({payload: <exported json>}). Rows are upserted, never duplicated.
 */

type ExportPayload = {
  version: 1
  exportedAt: string
  user: { name: string; email: string; jobTitle: string; xp: number }
  enrollments: { courseId: string; startedAt: string; completedAt: string | null }[]
  completedLessonIds: string[]
  quizAttempts: {
    quizId: string
    score: number
    correct: number
    total: number
    passed: boolean
    createdAt: string
  }[]
  certificates: { courseId: string; serial: string; issuedAt: string }[]
  bankAttempts: {
    questionCode: string
    picked: number
    correct: boolean
    mode: string
    createdAt: string
  }[]
  examSessions: {
    mode: string
    durationMin: number
    total: number
    score: number | null
    correct: number | null
    startedAt: string
    completedAt: string | null
    sectionScores: string
  }[]
  reviewItems: {
    refKey: string
    kind: string
    refId: string
    title: string
    front: string
    back: string
    ease: number
    intervalDays: number
    dueAt: string
    reps: number
    lapses: number
  }[]
  simRuns: { scenario: string; status: string; stage: number; decisions: string; score: number; startedAt: string; completedAt: string | null }[]
  lessonNotes: { lessonId: string; kind: string; text: string; quote: string; color: string; createdAt: string }[]
  studyPlans: { title: string; goal: string; horizonWeeks: number; plan: string; progress: number; createdAt: string }[]
  conversations: { title: string; createdAt: string; messages: { role: string; content: string; createdAt: string }[] }[]
}

export async function GET() {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  const [
    user,
    enrollments,
    progress,
    quizAttempts,
    certificates,
    bankAttempts,
    examSessions,
    reviewItems,
    simRuns,
    lessonNotes,
    studyPlans,
    conversations,
  ] = await Promise.all([
    db.user.findUnique({ where: { id: me.id } }),
    db.enrollment.findMany({ where: { userId: me.id } }),
    db.lessonProgress.findMany({ where: { userId: me.id } }),
    db.quizAttempt.findMany({ where: { userId: me.id }, orderBy: { createdAt: "asc" } }),
    db.certificate.findMany({ where: { userId: me.id } }),
    db.bankAttempt.findMany({
      where: { userId: me.id },
      orderBy: { createdAt: "asc" },
      include: { question: { select: { code: true } } },
    }),
    db.examSession.findMany({ where: { userId: me.id } }),
    db.reviewItem.findMany({ where: { userId: me.id } }),
    db.simRun.findMany({ where: { userId: me.id } }),
    db.lessonNote.findMany({ where: { userId: me.id } }),
    db.studyPlan.findMany({ where: { userId: me.id } }),
    db.aiConversation.findMany({
      where: { userId: me.id },
      include: { messages: { orderBy: { createdAt: "asc" } } },
    }),
  ])

  const payload: ExportPayload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    user: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      jobTitle: user?.jobTitle ?? "",
      xp: user?.xp ?? 0,
    },
    enrollments: enrollments.map((e) => ({
      courseId: e.courseId,
      startedAt: e.startedAt.toISOString(),
      completedAt: e.completedAt?.toISOString() ?? null,
    })),
    completedLessonIds: progress.map((p) => p.lessonId),
    quizAttempts: quizAttempts.map((a) => ({
      quizId: a.quizId,
      score: a.score,
      correct: a.correct,
      total: a.total,
      passed: a.passed,
      createdAt: a.createdAt.toISOString(),
    })),
    certificates: certificates.map((c) => ({
      courseId: c.courseId,
      serial: c.serial,
      issuedAt: c.issuedAt.toISOString(),
    })),
    bankAttempts: bankAttempts.map((a) => ({
      questionCode: a.question.code,
      picked: a.picked,
      correct: a.correct,
      mode: a.mode,
      createdAt: a.createdAt.toISOString(),
    })),
    examSessions: examSessions.map((e) => ({
      mode: e.mode,
      durationMin: e.durationMin,
      total: e.total,
      score: e.score,
      correct: e.correct,
      startedAt: e.startedAt.toISOString(),
      completedAt: e.completedAt?.toISOString() ?? null,
      sectionScores: e.sectionScores,
    })),
    reviewItems: reviewItems.map((r) => ({
      refKey: r.refKey,
      kind: r.kind,
      refId: r.refId,
      title: r.title,
      front: r.front,
      back: r.back,
      ease: r.ease,
      intervalDays: r.intervalDays,
      dueAt: r.dueAt.toISOString(),
      reps: r.reps,
      lapses: r.lapses,
    })),
    simRuns: simRuns.map((s) => ({
      scenario: s.scenario,
      status: s.status,
      stage: s.stage,
      decisions: s.decisions,
      score: s.score,
      startedAt: s.startedAt.toISOString(),
      completedAt: s.completedAt?.toISOString() ?? null,
    })),
    lessonNotes: lessonNotes.map((n) => ({
      lessonId: n.lessonId,
      kind: n.kind,
      text: n.text,
      quote: n.quote,
      color: n.color,
      createdAt: n.createdAt.toISOString(),
    })),
    studyPlans: studyPlans.map((p) => ({
      title: p.title,
      goal: p.goal,
      horizonWeeks: p.horizonWeeks,
      plan: p.plan,
      progress: p.progress,
      createdAt: p.createdAt.toISOString(),
    })),
    conversations: conversations.map((c) => ({
      title: c.title,
      createdAt: c.createdAt.toISOString(),
      messages: c.messages.map((m) => ({
        role: m.role,
        content: m.content,
        createdAt: m.createdAt.toISOString(),
      })),
    })),
  }

  return new NextResponse(JSON.stringify(payload, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="auditedge-user-data-${new Date().toISOString().slice(0, 10)}.json"`,
    },
  })
}

export async function POST(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { payload?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  const p = body?.payload as ExportPayload | undefined
  if (!p || p.version !== 1 || !Array.isArray(p.completedLessonIds)) {
    return NextResponse.json({ error: "not a valid AuditEdge export file" }, { status: 400 })
  }

  let imported = { lessons: 0, quizAttempts: 0, reviewItems: 0, notes: 0, plans: 0, exams: 0 }

  // completed lessons (only ids that still exist)
  const lessons = await db.lesson.findMany({
    where: { id: { in: p.completedLessonIds } },
    select: { id: true, xp: true },
  })
  for (const l of lessons) {
    await db.lessonProgress.upsert({
      where: { userId_lessonId: { userId: me.id, lessonId: l.id } },
      create: { userId: me.id, lessonId: l.id },
      update: {},
    })
    imported.lessons++
  }

  for (const a of p.quizAttempts ?? []) {
    if (!(await db.quiz.findUnique({ where: { id: a.quizId } }))) continue
    await db.quizAttempt.create({
      data: {
        userId: me.id,
        quizId: a.quizId,
        score: a.score,
        correct: a.correct,
        total: a.total,
        passed: a.passed,
        createdAt: new Date(a.createdAt),
      },
    })
    imported.quizAttempts++
  }

  for (const r of p.reviewItems ?? []) {
    await db.reviewItem.upsert({
      where: { userId_refKey: { userId: me.id, refKey: r.refKey } },
      create: {
        userId: me.id,
        refKey: r.refKey,
        kind: r.kind,
        refId: r.refId,
        title: r.title,
        front: r.front,
        back: r.back,
        ease: r.ease,
        intervalDays: r.intervalDays,
        dueAt: new Date(r.dueAt),
        reps: r.reps,
        lapses: r.lapses,
      },
      update: {},
    })
    imported.reviewItems++
  }

  for (const n of p.lessonNotes ?? []) {
    if (!(await db.lesson.findUnique({ where: { id: n.lessonId } }))) continue
    await db.lessonNote.create({
      data: {
        userId: me.id,
        lessonId: n.lessonId,
        kind: n.kind,
        text: n.text,
        quote: n.quote,
        color: n.color,
        createdAt: new Date(n.createdAt),
      },
    })
    imported.notes++
  }

  for (const pl of p.studyPlans ?? []) {
    await db.studyPlan.create({
      data: {
        userId: me.id,
        title: pl.title,
        goal: pl.goal,
        horizonWeeks: pl.horizonWeeks,
        plan: pl.plan,
        progress: pl.progress,
        createdAt: new Date(pl.createdAt),
      },
    })
    imported.plans++
  }

  for (const e of p.examSessions ?? []) {
    await db.examSession.create({
      data: {
        userId: me.id,
        mode: e.mode,
        durationMin: e.durationMin,
        total: e.total,
        score: e.score,
        correct: e.correct,
        questionIds: "[]",
        startedAt: new Date(e.startedAt),
        completedAt: e.completedAt ? new Date(e.completedAt) : null,
        sectionScores: e.sectionScores,
      },
    })
    imported.exams++
  }

  return NextResponse.json({ ok: true, imported })
}
