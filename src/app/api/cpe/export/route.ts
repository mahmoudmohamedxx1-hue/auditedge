import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"

/** GET /api/cpe/export — CSV evidence export for SOXE / license renewals. */
export async function GET() {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  const [progress, courses, certificates] = await Promise.all([
    db.lessonProgress.findMany({
      where: { userId: me.id },
      select: { lessonId: true, completedAt: true },
    }),
    db.course.findMany({ select: { id: true, code: true, title: true, cpeHours: true } }),
    db.certificate.findMany({ where: { userId: me.id } }),
  ])
  const lessons = await db.lesson.findMany({
    where: { id: { in: progress.map((p) => p.lessonId) } },
    select: { id: true, moduleId: true, durationMin: true },
  })
  const modules = await db.module.findMany({
    where: { id: { in: lessons.map((l) => l.moduleId) } },
    select: { id: true, courseId: true },
  })
  const moduleCourse = new Map(modules.map((m) => [m.id, m.courseId]))

  const agg = new Map<string, { minutes: number; lessons: number; lastAt: Date | null }>()
  for (const l of lessons) {
    const courseId = moduleCourse.get(l.moduleId)
    if (!courseId) continue
    const row = agg.get(courseId) ?? { minutes: 0, lessons: 0, lastAt: null }
    row.minutes += l.durationMin
    row.lessons += 1
    const at = progress.find((p) => p.lessonId === l.id)?.completedAt ?? null
    if (at && (!row.lastAt || at > row.lastAt)) row.lastAt = at
    agg.set(courseId, row)
  }

  const esc = (v: string | number | null) => `"${String(v ?? "").replace(/"/g, '""')}"`
  const lines = [
    "Course code,Course title,Lesson hours,Lessons completed,Certificate hours,Certificate serial,Last activity,Total hours",
  ]
  let total = 0
  const courseRows = courses.filter((c) => agg.has(c.id))
  for (const c of courseRows) {
    const row = agg.get(c.id)!
    const cert = certificates.find((x) => x.courseId === c.id)
    const hours = Math.round((row.minutes / 60) * 10) / 10
    const certHours = cert ? c.cpeHours : 0
    total += hours + certHours
    lines.push(
      [c.code, c.title, hours, row.lessons, certHours, cert?.serial ?? "", row.lastAt?.toISOString().slice(0, 10) ?? "", (hours + certHours).toFixed(1)]
        .map(esc)
        .join(",")
    )
  }
  lines.push("")
  lines.push([esc("TOTAL"), esc(""), esc(""), esc(""), esc(""), esc(""), esc(""), esc(Math.round(total * 10) / 10)].join(","))

  const csv = "\uFEFF" + lines.join("\r\n") // BOM so Excel reads Arabic correctly
  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="auditedge-cpe-log-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  })
}
