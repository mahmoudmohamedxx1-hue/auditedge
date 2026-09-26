import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { coursesForClient, materialsForClient } from "@/lib/audit-server"

export async function GET() {
  const user = await getSessionUser()
  if (!user) {
    return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  }

  const [courses, materials, enrollments, progress, attempts, certificates, users, reviewDue, meRow, v20stats] =
    await Promise.all([
      coursesForClient(),
      materialsForClient(),
      db.enrollment.findMany({ where: { userId: user.id } }),
      db.lessonProgress.findMany({ where: { userId: user.id } }),
      db.quizAttempt.findMany({ where: { userId: user.id }, orderBy: { createdAt: "asc" } }),
      db.certificate.findMany({ where: { userId: user.id } }),
      db.user.findMany({
        orderBy: [{ xp: "desc" }, { name: "asc" }],
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
          jobTitle: true,
          initials: true,
          xp: true,
          streakDays: true,
        },
      }),
      db.reviewItem.count({ where: { userId: user.id, dueAt: { lte: new Date() } } }),
      db.user.findUnique({ where: { id: user.id } }),
      // v20.1 — achievement stats: simulation, exams, review discipline, drills
      (async () => {
        const [sims, exams, reviewTotal, reviewGraded, practiceAnswered] = await Promise.all([
          db.simRun.findMany({
            where: { userId: user.id, status: "completed" },
            select: { score: true },
          }),
          db.examSession.findMany({
            where: { userId: user.id, completedAt: { not: null }, score: { not: null } },
            select: { score: true },
          }),
          db.reviewItem.count({ where: { userId: user.id } }),
          db.reviewItem.count({ where: { userId: user.id, lastGrade: { not: null } } }),
          db.bankAttempt.count({ where: { userId: user.id, mode: "practice" } }),
        ])
        return {
          simCompleted: sims.length,
          simBest: sims.length ? Math.max(...sims.map((x) => x.score)) : 0,
          examCount: exams.length,
          examBest: exams.length ? Math.max(...exams.map((x) => x.score ?? 0)) : 0,
          reviewTotal,
          reviewGraded,
          practiceAnswered,
        }
      })(),
    ])

  return NextResponse.json({
    user,
    users,
    courses,
    materials,
    enrollments,
    completedLessonIds: progress.map((p) => p.lessonId),
    quizAttempts: attempts,
    certificates,
    reviewDue,
    lastLessonId: meRow?.lastLessonId ?? null,
    ...v20stats,
  })
}
