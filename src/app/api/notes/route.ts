import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"

/** GET /api/notes?lessonId=... — the learner's notes + highlights for a lesson. */
export async function GET(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  const lessonId = new URL(req.url).searchParams.get("lessonId")
  const where = lessonId ? { userId: me.id, lessonId } : { userId: me.id }
  const notes = await db.lessonNote.findMany({
    where,
    orderBy: { createdAt: "desc" },
    take: 200,
  })
  return NextResponse.json({
    notes: notes.map((n) => ({
      id: n.id,
      lessonId: n.lessonId,
      kind: n.kind as "note" | "highlight",
      text: n.text,
      quote: n.quote,
      color: n.color,
      createdAt: n.createdAt.toISOString(),
    })),
  })
}

/** POST /api/notes — {lessonId, kind, text, quote?, color?}. */
export async function POST(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: {
    lessonId?: unknown
    kind?: unknown
    text?: unknown
    quote?: unknown
    color?: unknown
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const lessonId = typeof body?.lessonId === "string" ? body.lessonId : ""
  const kind = body?.kind === "highlight" ? "highlight" : "note"
  const text = typeof body?.text === "string" ? body.text.trim().slice(0, 4000) : ""
  const quote = typeof body?.quote === "string" ? body.quote.trim().slice(0, 1000) : ""
  const color = typeof body?.color === "string" ? body.color.slice(0, 20) : "amber"
  if (!lessonId || !text) {
    return NextResponse.json({ error: "lessonId and text required" }, { status: 400 })
  }
  const lesson = await db.lesson.findUnique({ where: { id: lessonId } })
  if (!lesson) return NextResponse.json({ error: "lesson not found" }, { status: 404 })

  const note = await db.lessonNote.create({
    data: { userId: me.id, lessonId, kind, text, quote, color },
  })
  return NextResponse.json({
    note: {
      id: note.id,
      lessonId: note.lessonId,
      kind: note.kind as "note" | "highlight",
      text: note.text,
      quote: note.quote,
      color: note.color,
      createdAt: note.createdAt.toISOString(),
    },
  })
}

/** DELETE /api/notes?id=... */
export async function DELETE(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  const id = new URL(req.url).searchParams.get("id")
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 })
  const note = await db.lessonNote.findFirst({ where: { id, userId: me.id } })
  if (!note) return NextResponse.json({ error: "not found" }, { status: 404 })
  await db.lessonNote.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
