import { NextResponse } from "next/server"
import { getSessionUser } from "@/lib/auth"
import { markLessonComplete } from "@/lib/audit-server"

export async function POST(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { lessonId?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  const lessonId = typeof body?.lessonId === "string" ? body.lessonId : ""
  if (!lessonId) {
    return NextResponse.json({ error: "lessonId required" }, { status: 400 })
  }
  const result = await markLessonComplete(me.id, lessonId)
  if (!result.created) {
    // distinguish "unknown lesson" from "already completed" for honest client feedback
    const { db } = await import("@/lib/db")
    const lesson = await db.lesson.findUnique({ where: { id: lessonId } })
    if (!lesson) {
      return NextResponse.json({ error: "lesson not found" }, { status: 404 })
    }
  }
  return NextResponse.json(result)
}
