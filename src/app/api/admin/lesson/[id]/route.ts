import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { requireAdmin, sanitizeQuiz } from "@/lib/audit-server"

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  try {
    const admin = await requireAdmin()
    if (!admin) return NextResponse.json({ error: "Admin only" }, { status: 403 })

    const lesson = await db.lesson.findUnique({ where: { id } })
    if (!lesson) return NextResponse.json({ error: "Not found" }, { status: 404 })

    const data: Record<string, unknown> = {}
    if (typeof body.title === "string" && body.title.trim()) data.title = body.title.trim()
    if (body.durationMin !== undefined && Number(body.durationMin) > 0)
      data.durationMin = Math.trunc(Number(body.durationMin))
    if (body.xp !== undefined && Number(body.xp) >= 0) data.xp = Math.trunc(Number(body.xp))
    if (body.order !== undefined && Number.isFinite(Number(body.order)))
      data.order = Math.trunc(Number(body.order))
    if (body.content !== undefined) data.content = JSON.stringify(body.content)
    // v21: preserve/author the Arabic edition — previously a PATCH dropped it
    // ("" = no Arabic edition; the column is not nullable)
    if (body.contentAr !== undefined) {
      data.contentAr = body.contentAr == null ? "" : JSON.stringify(body.contentAr)
    }
    if (Array.isArray(body.attachments)) {
      data.attachments = JSON.stringify(body.attachments.filter((x: unknown) => typeof x === "string"))
    }
    if (typeof body.videoUrl === "string") data.videoUrl = body.videoUrl.trim().slice(0, 500)
    if (typeof body.externalUrl === "string")
      data.externalUrl = /^https?:\/\//i.test(body.externalUrl.trim())
        ? body.externalUrl.trim().slice(0, 500)
        : ""
    if (Object.keys(data).length) {
      await db.lesson.update({ where: { id }, data })
    }

    // quiz upsert (only when lesson is a quiz)
    if (lesson.type === "quiz" && body.quiz !== undefined) {
      const quiz = sanitizeQuiz(
        body.quiz as { title?: unknown; passScore?: unknown; questions?: unknown } | null,
        String(body.title ?? lesson.title)
      )
      if (quiz) {
        const existing = await db.quiz.findUnique({ where: { lessonId: id } })
        if (existing) {
          await db.quiz.update({
            where: { lessonId: id },
            data: {
              title: quiz.title,
              passScore: quiz.passScore,
              questions: JSON.stringify(quiz.questions),
            },
          })
        } else {
          const module_ = await db.module.findUnique({ where: { id: lesson.moduleId } })
          if (module_) {
            await db.quiz.create({
              data: {
                lessonId: id,
                courseId: module_.courseId,
                title: quiz.title,
                passScore: quiz.passScore,
                questions: JSON.stringify(quiz.questions),
              },
            })
          }
        }
      } else {
        // a quiz lesson with no gradable questions can never be completed —
        // refuse the save instead of silently blocking the course certificate
        return NextResponse.json(
          { error: "A knowledge check needs at least one complete question (question text + two options)" },
          { status: 400 }
        )
      }
    }

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error("lesson PATCH failed", e)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const admin = await requireAdmin()
  if (!admin) return NextResponse.json({ error: "Admin only" }, { status: 403 })

  const lesson = await db.lesson.findUnique({ where: { id } })
  if (!lesson) return NextResponse.json({ ok: true })
  await db.lesson.delete({ where: { id } })
  return NextResponse.json({ ok: true })
}
