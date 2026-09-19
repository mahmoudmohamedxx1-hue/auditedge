import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { coursesForClient, materialsForClient } from "@/lib/audit-server"

export async function GET() {
  const user = await getSessionUser()
  if (!user) {
    return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  }

  const [courses, materials, enrollments, progress, attempts, certificates, users] =
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
  })
}
