import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { initialsOf } from "@/lib/audit-server"
import { getSessionUser, requireAdminSession } from "@/lib/auth"

export async function GET() {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  const users = await db.user.findMany({
    orderBy: [{ xp: "desc" }, { name: "asc" }],
    include: {
      enrollments: { include: { course: true } },
      lessonProgress: { select: { lessonId: true } },
      certificates: { include: { course: true } },
    },
  })

  const courses = await db.course.findMany({
    include: { modules: { include: { lessons: { select: { id: true } } } } },
  })
  const courseLessonIds = new Map(courses.map((c) => [c.id, c.modules.flatMap((m) => m.lessons.map((l) => l.id))]))

  const members = users.map((u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    role: u.role,
    jobTitle: u.jobTitle,
    initials: u.initials || initialsOf(u.name),
    xp: u.xp,
    streakDays: u.streakDays,
    lastActiveAt: u.lastActiveAt.toISOString(),
    lessonsDone: u.lessonProgress.length,
    certificatesCount: u.certificates.length,
    enrollments: u.enrollments.map((e) => {
      const ids = courseLessonIds.get(e.courseId) ?? []
      const done = u.lessonProgress.filter((p) => ids.includes(p.lessonId)).length
      return {
        courseId: e.courseId,
        courseTitle: e.course.title,
        code: e.course.code,
        pct: ids.length ? Math.round((done / ids.length) * 100) : 0,
      }
    }),
    certificates: u.certificates.map((c) => ({
      id: c.id,
      courseTitle: c.course.title,
      code: c.course.code,
      serial: c.serial,
      issuedAt: c.issuedAt.toISOString(),
    })),
  }))

  return NextResponse.json(members)
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  try {
    const admin = await requireAdminSession()
    if (!admin) {
      return NextResponse.json({ error: "Only admins can add members" }, { status: 403 })
    }

    const name = String(body.name ?? "").trim()
    const email = String(body.email ?? "").trim().toLowerCase()
    const jobTitle = String(body.jobTitle ?? "").trim() || "External Auditor"
    const role = body.role === "admin" ? "admin" : "learner"

    if (!name) return NextResponse.json({ error: "Name is required" }, { status: 400 })
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 })
    }
    const existing = await db.user.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ error: "This email is already on the team" }, { status: 400 })
    }

    const user = await db.user.create({
      data: {
        name,
        email,
        jobTitle,
        role,
        initials: initialsOf(name),
      },
    })
    return NextResponse.json({ id: user.id })
  } catch (e) {
    console.error("team POST failed", e)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
