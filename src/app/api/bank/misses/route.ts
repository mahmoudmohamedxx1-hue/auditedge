import { NextResponse } from "next/server"
import { getSessionUser } from "@/lib/auth"
import { missedQuestions } from "@/lib/bank"

/** GET /api/bank/misses — v21 mistake book.
 *  Questions whose latest attempt was wrong (a later correct answer
 *  redeems the question). Feeds the "drill my misses" practice mode. */
export async function GET() {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  const questions = await missedQuestions(me.id, 30)
  return NextResponse.json({ questions, count: questions.length })
}
