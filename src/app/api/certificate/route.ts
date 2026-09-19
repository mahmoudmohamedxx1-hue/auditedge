import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { generateSerial } from "@/lib/audit-server"

export async function POST(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { courseId?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  const courseId = typeof body?.courseId === "string" ? body.courseId : ""
  if (!courseId) {
    return NextResponse.json({ error: "courseId required" }, { status: 400 })
  }

  const course = await db.course.findUnique({ where: { id: courseId } })
  if (!course) {
    return NextResponse.json({ error: "course not found" }, { status: 404 })
  }

  const existing = await db.certificate.findUnique({
    where: { userId_courseId: { userId: me.id, courseId } },
  })
  if (existing) return NextResponse.json(existing)

  const courseLessons = await db.lesson.findMany({
    where: { module: { courseId } },
    select: { id: true },
  })
  if (!courseLessons.length) {
    return NextResponse.json({ error: "course has no lessons" }, { status: 400 })
  }
  const progress = await db.lessonProgress.findMany({
    where: { userId: me.id, lessonId: { in: courseLessons.map((l) => l.id) } },
  })
  if (progress.length < courseLessons.length) {
    return NextResponse.json({ error: "course not complete" }, { status: 400 })
  }

  try {
    const certificate = await db.certificate.create({
      data: { userId: me.id, courseId, serial: generateSerial() },
    })
    return NextResponse.json(certificate)
  } catch {
    // unique(userId, courseId) race — another request issued it first
    const winner = await db.certificate.findUnique({
      where: { userId_courseId: { userId: me.id, courseId } },
    })
    if (winner) return NextResponse.json(winner)
    return NextResponse.json({ error: "Could not issue certificate" }, { status: 500 })
  }
}
