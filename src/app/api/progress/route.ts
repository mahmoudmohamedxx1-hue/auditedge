import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { markLessonComplete } from "@/lib/audit-server"

export async function POST(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { lessonId?: unknown; action?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  const lessonId = typeof body?.lessonId === "string" ? body.lessonId : ""
  if (!lessonId) {
    return NextResponse.json({ error: "lessonId required" }, { status: 400 })
  }

  // v20 quick win: `action: "open"` just records the last-opened lesson so
  // Home can offer a one-tap resume card — no completion semantics
  if (body?.action === "open") {
    await db.user.update({
      where: { id: me.id },
      data: { lastLessonId: lessonId, lastLessonAt: new Date() },
    })
    return NextResponse.json({ ok: true })
  }

  const result = await markLessonComplete(me.id, lessonId)
  if (!result.created) {
    // distinguish "unknown lesson" from "already completed" for honest client feedback
    const lesson = await db.lesson.findUnique({ where: { id: lessonId } })
    if (!lesson) {
      return NextResponse.json({ error: "lesson not found" }, { status: 404 })
    }
  }
  return NextResponse.json(result)
}
