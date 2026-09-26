import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { gradeReviewItem } from "@/lib/review"

/** GET /api/review — due cards (ordered) + queue stats. */
export async function GET(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  const limit = Math.min(
    100,
    Math.max(5, Number(new URL(req.url).searchParams.get("limit")) || 20)
  )

  const now = new Date()
  const [due, total, newToday] = await Promise.all([
    db.reviewItem.findMany({
      where: { userId: me.id, dueAt: { lte: now } },
      orderBy: [{ dueAt: "asc" }, { updatedAt: "desc" }],
      take: limit,
    }),
    db.reviewItem.count({ where: { userId: me.id } }),
    db.reviewItem.count({
      where: { userId: me.id, createdAt: { gte: startOfToday() } },
    }),
  ])

  // consecutive-day review streak: days (ending today/yesterday) on which the
  // learner graded at least one card — the "do it daily" motivator
  const graded = await db.reviewItem.findMany({
    where: { userId: me.id, lastGrade: { not: null } },
    select: { updatedAt: true },
  })
  const dayKey = (d: Date) => d.toISOString().slice(0, 10)
  const days = new Set(graded.map((g) => dayKey(g.updatedAt)))
  const today = new Date()
  let streak = 0
  const cursorDate = new Date(today)
  // allow the streak to be "alive" if yesterday was the last graded day
  if (!days.has(dayKey(cursorDate))) cursorDate.setDate(cursorDate.getDate() - 1)
  while (days.has(dayKey(cursorDate))) {
    streak++
    cursorDate.setDate(cursorDate.getDate() - 1)
  }

  return NextResponse.json({
    cards: due.map((c) => ({
      id: c.id,
      kind: c.kind,
      refId: c.refId,
      title: c.title,
      front: c.front,
      back: c.back,
      frontAr: c.frontAr,
      backAr: c.backAr,
      dueAt: c.dueAt.toISOString(),
      intervalDays: c.intervalDays,
      ease: c.ease,
      reps: c.reps,
      lapses: c.lapses,
    })),
    stats: { due: due.length, total, todayNew: newToday, streakOfReviews: streak },
  })
}

/** POST /api/review — {action: "grade", itemId, grade: 0-3} or
 *  {action: "add", lessonId} to pull a lesson's key points forward. */
export async function POST(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { action?: unknown; itemId?: unknown; grade?: unknown; lessonId?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  const action = String(body?.action)

  if (action === "grade") {
    const itemId = typeof body?.itemId === "string" ? body.itemId : ""
    const gradeRaw = Number(body?.grade)
    if (!itemId || ![0, 1, 2, 3].includes(gradeRaw)) {
      return NextResponse.json({ error: "itemId and grade (0-3) required" }, { status: 400 })
    }
    const updated = await gradeReviewItem(me.id, itemId, gradeRaw as 0 | 1 | 2 | 3)
    if (!updated) return NextResponse.json({ error: "card not found" }, { status: 404 })
    return NextResponse.json({
      ok: true,
      intervalDays: updated.intervalDays,
      dueAt: updated.dueAt.toISOString(),
    })
  }

  if (action === "add") {
    const lessonId = typeof body?.lessonId === "string" ? body.lessonId : ""
    if (!lessonId) return NextResponse.json({ error: "lessonId required" }, { status: 400 })
    const { seedReviewFromLesson } = await import("@/lib/review")
    await seedReviewFromLesson(me.id, lessonId)
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: "unknown action" }, { status: 400 })
}

function startOfToday(): Date {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}
