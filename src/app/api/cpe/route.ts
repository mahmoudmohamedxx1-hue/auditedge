import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"

/** GET /api/cpe — the CPE evidence log (P2-13): completed lessons +
 *  certificates, aggregated per course with a total. */
export async function GET() {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  const [progress, courses, certificates] = await Promise.all([
    db.lessonProgress.findMany({
      where: { userId: me.id },
      orderBy: { completedAt: "asc" },
      select: { lessonId: true, completedAt: true },
    }),
    db.course.findMany({
      select: { id: true, code: true, title: true, cpeHours: true },
    }),
    db.certificate.findMany({ where: { userId: me.id } }),
  ])
  void courses

  const lessons = await db.lesson.findMany({
    where: { id: { in: progress.map((p) => p.lessonId) } },
    select: { id: true, moduleId: true, durationMin: true },
  })
  const modules = await db.module.findMany({
    where: { id: { in: lessons.map((l) => l.moduleId) } },
    select: { id: true, courseId: true },
  })
  const moduleCourse = new Map(modules.map((m) => [m.id, m.courseId]))
  const completedAtByLesson = new Map(progress.map((p) => [p.lessonId, p.completedAt]))

  type Row = {
    courseId: string
    code: string
    title: string
    minutes: number
    lessons: number
    lastAt: Date | null
    certificateHours: number
    certificateSerial: string | null
  }
  const byCourse = new Map<string, Row>()
  for (const l of lessons) {
    const courseId = moduleCourse.get(l.moduleId)
    if (!courseId) continue
    const course = courses.find((c) => c.id === courseId)
    if (!course) continue
    const row =
      byCourse.get(courseId) ??
      ({
        courseId,
        code: course.code,
        title: course.title,
        minutes: 0,
        lessons: 0,
        lastAt: null,
        certificateHours: 0,
        certificateSerial: null,
      } as Row)
    row.minutes += l.durationMin
    row.lessons += 1
    const at = completedAtByLesson.get(l.id)
    if (at && (!row.lastAt || at > row.lastAt)) row.lastAt = at
    byCourse.set(courseId, row)
  }
  for (const cert of certificates) {
    const row = byCourse.get(cert.courseId)
    const course = courses.find((c) => c.id === cert.courseId)
    if (row && course) {
      row.certificateHours = course.cpeHours
      row.certificateSerial = cert.serial
    }
  }

  const rows = [...byCourse.values()]
    .map((r) => ({
      courseId: r.courseId,
      code: r.code,
      title: r.title,
      hours: Math.round((r.minutes / 60) * 10) / 10,
      lessons: r.lessons,
      certificateHours: r.certificateHours,
      certificateSerial: r.certificateSerial,
      lastAt: r.lastAt?.toISOString() ?? null,
    }))
    .sort((a, b) => b.hours + b.certificateHours - (a.hours + a.certificateHours))

  const totalHours =
    Math.round(rows.reduce((a, r) => a + r.hours + r.certificateHours, 0) * 10) / 10

  return NextResponse.json({
    rows,
    totalHours,
    certificates: certificates.map((c) => ({
      serial: c.serial,
      issuedAt: c.issuedAt.toISOString(),
      courseCode: courses.find((co) => co.id === c.courseId)?.code ?? "",
      courseTitle: courses.find((co) => co.id === c.courseId)?.title ?? "",
    })),
  })
}
