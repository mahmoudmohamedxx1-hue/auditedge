import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { requireAdmin, sanitizeQuiz } from "@/lib/audit-server"

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  try {
    const admin = await requireAdmin()
    if (!admin) return NextResponse.json({ error: "Admin only" }, { status: 403 })

    const moduleId = String(body.moduleId ?? "")
    const title = String(body.title ?? "").trim()
    if (!moduleId || !title) {
      return NextResponse.json({ error: "Module and title are required" }, { status: 400 })
    }

    const module_ = await db.module.findUnique({ where: { id: moduleId } })
    if (!module_) return NextResponse.json({ error: "Module not found" }, { status: 404 })

    const count = await db.lesson.count({ where: { moduleId } })
    const type = body.type === "quiz" ? "quiz" : "lesson"

    // a quiz lesson must carry at least one gradable question — otherwise it
    // can never be completed and silently blocks the course certificate
    if (type === "quiz") {
      const quiz = sanitizeQuiz(
        body.quiz as { title?: unknown; passScore?: unknown; questions?: unknown } | null,
        title
      )
      if (!quiz) {
        return NextResponse.json(
          { error: "A knowledge check needs at least one complete question (question text + two options)" },
          { status: 400 }
        )
      }
    }

    const lesson = await db.lesson.create({
      data: {
        moduleId,
        title,
        type,
        durationMin: Math.max(1, Math.trunc(Number(body.durationMin) || 12)),
        xp: Math.max(0, Math.trunc(Number(body.xp) || 10)),
        content: JSON.stringify(body.content ?? {}),
        attachments: JSON.stringify(
          Array.isArray(body.attachments) ? body.attachments.filter((x: unknown) => typeof x === "string") : []
        ),
        videoUrl: typeof body.videoUrl === "string" ? body.videoUrl.trim().slice(0, 500) : "",
        externalUrl:
          typeof body.externalUrl === "string" && /^https?:\/\//i.test(body.externalUrl.trim())
            ? body.externalUrl.trim().slice(0, 500)
            : "",
        order: count + 1,
      },
    })

    if (type === "quiz") {
      const quiz = sanitizeQuiz(
        body.quiz as { title?: unknown; passScore?: unknown; questions?: unknown } | null,
        title
      )
      if (quiz) {
        await db.quiz.create({
          data: {
            lessonId: lesson.id,
            courseId: module_.courseId,
            title: quiz.title,
            passScore: quiz.passScore,
            questions: JSON.stringify(quiz.questions),
          },
        })
      }
    }

    return NextResponse.json({ id: lesson.id })
  } catch (e) {
    console.error("lesson POST failed", e)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
