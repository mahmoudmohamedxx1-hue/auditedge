import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { markLessonComplete, parseQuizQuestions } from "@/lib/audit-server"

export async function POST(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { quizId?: unknown; correct?: unknown; total?: unknown; picks?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const quizId = typeof body?.quizId === "string" ? body.quizId : ""
  if (!quizId) {
    return NextResponse.json({ error: "quizId is required" }, { status: 400 })
  }
  const quiz = await db.quiz.findUnique({ where: { id: quizId } })
  if (!quiz) {
    return NextResponse.json({ error: "quiz not found" }, { status: 404 })
  }
  const questions = parseQuizQuestions(quiz.questions)
  if (!questions.length) {
    return NextResponse.json({ error: "This quiz has no questions" }, { status: 400 })
  }
  const total = questions.length

  /* Grading — the server is the source of truth.
   * Preferred: the client submits the picked option index per question
   * (`picks`) and the server grades against the stored answer key, so a
   * self-reported score can never award XP or issue a certificate.
   * Legacy clients may still report `correct` (honor system). */
  let correct: number
  const picks = Array.isArray(body?.picks) ? body.picks : null
  if (picks) {
    if (picks.length !== total) {
      return NextResponse.json(
        { error: "picks must contain one entry per question" },
        { status: 400 }
      )
    }
    correct = 0
    for (let i = 0; i < total; i++) {
      const p = picks[i]
      if (p === null || p === undefined) continue // unanswered
      if (typeof p === "number" && Number.isInteger(p) && p >= 0 && p < questions[i].options.length) {
        if (p === questions[i].correctIndex) correct++
      }
    }
  } else {
    const reported = Math.floor(Number(body?.correct))
    if (!Number.isFinite(reported) || reported < 0 || reported > total) {
      return NextResponse.json(
        { error: "picks (preferred) or correct (0..question count) required" },
        { status: 400 }
      )
    }
    correct = reported
  }

  const score = Math.round((correct / total) * 100)
  const passed = score >= quiz.passScore

  await db.quizAttempt.create({
    data: { userId: me.id, quizId, score, correct, total, passed },
  })

  // passing completes the quiz lesson (XP + certificate check)
  let certificate: Awaited<ReturnType<typeof markLessonComplete>>["certificate"] = null
  if (passed) {
    const result = await markLessonComplete(me.id, quiz.lessonId)
    certificate = result.certificate
  }

  return NextResponse.json({ score, passed, correct, total, certificate })
}
