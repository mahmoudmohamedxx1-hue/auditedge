import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"

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
  if (!course || !course.published) {
    return NextResponse.json({ error: "course not found" }, { status: 404 })
  }
  const existing = await db.enrollment.findUnique({
    where: { userId_courseId: { userId: me.id, courseId } },
  })
  if (!existing) {
    try {
      await db.enrollment.create({ data: { userId: me.id, courseId } })
    } catch (e) {
      // unique(userId, courseId) race — another tab enrolled first; that's fine
      const code = (e as { code?: string })?.code
      if (code !== "P2002") throw e
    }
  }
  return NextResponse.json({ ok: true })
}
