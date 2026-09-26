import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { seedReviewFromQuestion } from "@/lib/review"

/** POST /api/bank/answer — grade one practice answer, server-side.
 *  A wrong practice answer also feeds the review queue (P0-1 → P0-3). */
export async function POST(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { questionId?: unknown; picked?: unknown; mode?: unknown; examId?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const questionId = typeof body?.questionId === "string" ? body.questionId : ""
  const pickedRaw = Number(body?.picked)
  const mode = ["practice", "review"].includes(String(body?.mode)) ? String(body?.mode) : "practice"
  const examId = typeof body?.examId === "string" ? body.examId : null
  if (!questionId || !Number.isInteger(pickedRaw) || pickedRaw < 0 || pickedRaw > 3) {
    return NextResponse.json({ error: "questionId and picked (0-3) required" }, { status: 400 })
  }

  const q = await db.bankQuestion.findUnique({ where: { id: questionId } })
  if (!q) return NextResponse.json({ error: "question not found" }, { status: 404 })

  const options = JSON.parse(q.options) as string[]
  if (pickedRaw >= options.length) {
    return NextResponse.json({ error: "picked out of range" }, { status: 400 })
  }

  const correct = pickedRaw === q.answerIndex
  await db.bankAttempt.create({
    data: {
      userId: me.id,
      questionId,
      picked: pickedRaw,
      correct,
      mode,
      examId,
    },
  })

  // a miss becomes a flashcard (answers inside exams are seeded on submit
  // instead — see the exam route — so the queue is not flooded mid-sitting)
  if (!correct && mode === "practice") {
    try {
      await seedReviewFromQuestion(me.id, questionId)
    } catch {}
  }

  const optionsAr = q.optionsAr ? (JSON.parse(q.optionsAr) as string[]) : null
  return NextResponse.json({
    correct,
    answerIndex: q.answerIndex,
    explanation: q.explanation,
    explanationAr: q.explanationAr,
    optionsAr,
  })
}
