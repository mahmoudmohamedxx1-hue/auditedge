import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { generateOnce } from "@/lib/ai"
import { AI_TUNING } from "@/lib/ai-tuning"
import { masteryByTag } from "@/lib/analytics"

/** GET /api/study-plan — the active plan (if any) + past plans. */
export async function GET() {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  const plans = await db.studyPlan.findMany({
    where: { userId: me.id },
    orderBy: { createdAt: "desc" },
    take: 10,
  })
  return NextResponse.json({
    active: (() => {
      const p = plans.find((x) => x.active)
      return p ? serialize(p) : null
    })(),
    plans: plans.map(serialize),
  })
}

/** POST /api/study-plan — generate + persist an AI study plan:
 *  {goal, horizonWeeks, hoursPerWeek}. */
export async function POST(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { goal?: unknown; horizonWeeks?: unknown; hoursPerWeek?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  const goal = typeof body?.goal === "string" ? body.goal.trim().slice(0, 300) : ""
  const horizonWeeks = Math.min(12, Math.max(1, Math.floor(Number(body?.horizonWeeks) || 4)))
  const hoursPerWeek = Math.min(40, Math.max(1, Math.floor(Number(body?.hoursPerWeek) || 6)))
  if (!goal) return NextResponse.json({ error: "goal required" }, { status: 400 })

  // evidence base: the learner's current mastery profile
  const attempts = await db.bankAttempt.findMany({
    where: { userId: me.id },
    orderBy: { createdAt: "asc" },
    include: { question: { select: { standardTag: true, area: true, difficulty: true } } },
  })
  const tags = masteryByTag(
    attempts.map((a) => ({
      questionId: a.questionId,
      correct: a.correct,
      standardTag: a.question.standardTag,
      area: a.question.area,
      difficulty: a.question.difficulty,
      createdAt: a.createdAt,
    }))
  )
  const weakness = tags.filter((t) => t.mastery < 70).slice(0, 12).map((t) => t.tag)
  const strength = tags.filter((t) => t.mastery >= 85).slice(0, 8).map((t) => t.tag)

  const prompt = [
    `Learner: ${me.name} — senior associate in an Egyptian external audit firm studying for the SOXE/EEC-style professional exams.`,
    `Goal: ${goal}`,
    `Horizon: ${horizonWeeks} weeks at about ${hoursPerWeek} hours/week.`,
    weakness.length ? `Measured weak standards: ${weakness.join(", ")}.` : "No measured weaknesses yet — build a broad foundation first.",
    strength.length ? `Measured strong standards: ${strength.join(", ")} (maintain, do not over-invest).` : "",
    "",
    "Produce a study plan. Reply with STRICT JSON only:",
    '{"title": "<short plan title>", "weeks": [{"focus": "<theme of the week>", "items": [{"label": "<one concrete task, 6-16 words, referencing the specific ISA/EAS/IFRS and the activity>"}]}]}',
    `Rules: exactly ${horizonWeeks} week objects; 3-5 items per week; alternate learning (course lessons), drilling (Exam Center practice), spaced review, and one engagement-simulation run per 2 weeks; all items concrete and standard-specific; no exams in week 1; a full mock exam in the final week.`,
  ]
    .filter(Boolean)
    .join("\n")

  let weeks: { focus: string; items: { label: string; done: boolean }[] }[] | null = null
  let title = `Study plan — ${goal.slice(0, 60)}`
  try {
    const res = await generateOnce({
      tuning: AI_TUNING.studyPlan, // v41 — structured, standard-specific planning
      messages: [{ role: "user", content: prompt }],
    })
    if (res?.text) {
      const m = res.text.match(/\{[\s\S]*\}/)
      if (m) {
        const parsed = JSON.parse(m[0]) as {
          title?: unknown
          weeks?: { focus?: unknown; items?: { label?: unknown }[] }[]
        }
        if (Array.isArray(parsed.weeks) && parsed.weeks.length) {
          weeks = parsed.weeks.slice(0, horizonWeeks).map((w) => ({
            focus: typeof w.focus === "string" ? w.focus.slice(0, 120) : "Study week",
            items: (Array.isArray(w.items) ? w.items : [])
              .filter((it) => typeof it?.label === "string" && it.label.trim())
              .slice(0, 6)
              .map((it) => ({ label: String(it.label).slice(0, 160), done: false })),
          }))
          if (typeof parsed.title === "string" && parsed.title.trim()) {
            title = parsed.title.trim().slice(0, 120)
          }
        }
      }
    }
  } catch {}

  if (!weeks) {
    // deterministic fallback plan — always useful, engine-independent
    const weak = weakness.length ? weakness : ["ISA 315", "ISA 330", "ISA 570", "IFRS 15", "ISA 700"]
    weeks = Array.from({ length: horizonWeeks }, (_, i) => ({
      focus:
        i === 0
          ? "Baseline + diagnostic"
          : i === horizonWeeks - 1
            ? "Full mock exam + final review"
            : `Deep-dive: ${weak[(i - 1) % weak.length]}`,
      items: [
        i === 0
          ? "Sit a 20-question diagnostic practice set across all areas"
          : `Study the ${weak[(i - 1) % weak.length]} course lessons + key points`,
        i === 0
          ? "Clear the daily review queue every day this week"
          : `Drill 15 Exam Center questions tagged ${weak[(i - 1) % weak.length]}`,
        i % 2 === 1 ? "Run one stage of the engagement simulation" : "Clear the daily review queue daily",
        ...(i === horizonWeeks - 1 ? ["Sit the full 90-minute mock exam"] : []),
      ].map((label) => ({ label, done: false })),
    }))
  }

  // deactivate previous plans — one active plan at a time
  await db.studyPlan.updateMany({ where: { userId: me.id, active: true }, data: { active: false } })
  const plan = await db.studyPlan.create({
    data: {
      userId: me.id,
      title,
      goal,
      horizonWeeks,
      plan: JSON.stringify({ weeks }),
    },
  })
  return NextResponse.json({ plan: serialize(plan) })
}

/** PATCH /api/study-plan — {planId, itemWeek, itemIndex, done} toggles a task;
 *  {planId, deactivate} retires the plan. */
export async function PATCH(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: {
    planId?: unknown
    itemWeek?: unknown
    itemIndex?: unknown
    done?: unknown
    deactivate?: unknown
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  const planId = typeof body?.planId === "string" ? body.planId : ""
  const plan = planId
    ? await db.studyPlan.findFirst({ where: { id: planId, userId: me.id } })
    : null
  if (!plan) return NextResponse.json({ error: "plan not found" }, { status: 404 })

  if (body?.deactivate) {
    await db.studyPlan.update({ where: { id: plan.id }, data: { active: false } })
    return NextResponse.json({ ok: true })
  }

  const weekIdx = Number(body?.itemWeek)
  const itemIdx = Number(body?.itemIndex)
  const done = Boolean(body?.done)
  const parsed = JSON.parse(plan.plan) as { weeks: { focus: string; items: { label: string; done: boolean }[] }[] }
  if (
    !Number.isInteger(weekIdx) ||
    !Number.isInteger(itemIdx) ||
    !parsed.weeks[weekIdx] ||
    !parsed.weeks[weekIdx].items[itemIdx]
  ) {
    return NextResponse.json({ error: "item not found" }, { status: 400 })
  }
  parsed.weeks[weekIdx].items[itemIdx].done = done
  const allItems = parsed.weeks.flatMap((w) => w.items)
  const progress = allItems.length
    ? Math.round((100 * allItems.filter((i) => i.done).length) / allItems.length)
    : 0
  const updated = await db.studyPlan.update({
    where: { id: plan.id },
    data: { plan: JSON.stringify(parsed), progress },
  })
  return NextResponse.json({ plan: serialize(updated) })
}

function serialize(p: {
  id: string
  title: string
  goal: string
  horizonWeeks: number
  plan: string
  progress: number
  active: boolean
  createdAt: Date
}) {
  let weeks: { focus: string; items: { label: string; done: boolean }[] }[] = []
  try {
    weeks = (JSON.parse(p.plan) as { weeks: typeof weeks }).weeks ?? []
  } catch {}
  return {
    id: p.id,
    title: p.title,
    goal: p.goal,
    horizonWeeks: p.horizonWeeks,
    weeks,
    progress: p.progress,
    createdAt: p.createdAt.toISOString(),
  }
}
