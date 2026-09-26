import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { masteryByTag, readinessByArea } from "@/lib/analytics"

/** GET /api/analytics — mastery heatmap, exam-section readiness, history,
 *  simulation runs and CPE hours — the P1-4 analytics payload. */
export async function GET() {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  const [attempts, bankRows, exams, simRuns, progressRows, lessons, certificates, courses] =
    await Promise.all([
      db.bankAttempt.findMany({
        where: { userId: me.id },
        orderBy: { createdAt: "asc" },
        include: { question: { select: { standardTag: true, area: true, difficulty: true } } },
      }),
      db.bankQuestion.groupBy({ by: ["area"], _count: { _all: true } }),
      db.examSession.findMany({
        where: { userId: me.id, completedAt: { not: null } },
        orderBy: { startedAt: "desc" },
        take: 15,
        select: {
          id: true,
          mode: true,
          total: true,
          correct: true,
          score: true,
          startedAt: true,
          completedAt: true,
        },
      }),
      db.simRun.findMany({
        where: { userId: me.id },
        orderBy: { startedAt: "desc" },
        take: 10,
        select: { id: true, scenario: true, score: true, completedAt: true },
      }),
      db.lessonProgress.findMany({ where: { userId: me.id }, select: { lessonId: true } }),
      db.lesson.findMany({ select: { id: true, durationMin: true, type: true } }),
      db.certificate.findMany({ where: { userId: me.id }, select: { courseId: true } }),
      db.course.findMany({ select: { id: true, cpeHours: true }, where: { published: true } }),
    ])

  const attemptLike = attempts.map((a) => ({
    questionId: a.questionId,
    correct: a.correct,
    standardTag: a.question.standardTag,
    area: a.question.area,
    difficulty: a.question.difficulty,
    createdAt: a.createdAt,
  }))

  const bankSizes = bankRows.map((r) => ({ area: r.area, count: r._count._all }))

  // CPE hours (P2-13): completed lesson minutes + full-course certificates
  const durationById = new Map(lessons.map((l) => [l.id, l.durationMin]))
  const minutes = progressRows.reduce((a, p) => a + (durationById.get(p.lessonId) ?? 0), 0)
  const certCourses = new Set(certificates.map((c) => c.courseId))
  const certHours = courses
    .filter((c) => certCourses.has(c.id))
    .reduce((a, c) => a + c.cpeHours, 0)
  const cpeHours = Math.round(((minutes / 60) + certHours) * 10) / 10

  const practiceTotal = attempts.filter((a) => a.mode === "practice")
  const practiceCorrect = practiceTotal.filter((a) => a.correct).length

  return NextResponse.json({
    tags: masteryByTag(attemptLike),
    readiness: readinessByArea(attemptLike, bankSizes),
    examHistory: exams.map((e) => ({
      ...e,
      startedAt: e.startedAt.toISOString(),
      completedAt: e.completedAt?.toISOString() ?? null,
    })),
    practiceAccuracy: { correct: practiceCorrect, total: practiceTotal.length },
    simRuns: simRuns.map((s) => ({
      ...s,
      completedAt: s.completedAt?.toISOString() ?? null,
    })),
    cpeHours,
  })
}
