import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { findScenario, SIM_SCENARIOS, type SimScenario } from "@/lib/sim-scenario"
import { generateOnce } from "@/lib/ai"
import { AI_TUNING } from "@/lib/ai-tuning"
import type { SimScenarioClient } from "@/lib/audit-types"

/** Strip scoring from the scenario before shipping it to the browser. */
function scenarioForClient(s: SimScenario): SimScenarioClient {
  return {
    slug: s.slug,
    title: s.title,
    company: s.company,
    sector: s.sector,
    summary: s.summary,
    maxScore: s.maxScore,
    stages: s.stages.map((st) => ({
      id: st.id,
      title: st.title,
      brief: st.brief,
      docs: st.docs,
      decisions: st.decisions.map((d) => ({
        id: d.id,
        prompt: d.prompt,
        ...(d.context ? { context: d.context } : {}),
        ...(d.options ? { options: d.options.map((o) => ({ id: o.id, label: o.label })) } : {}),
        ...(d.freeText ? { freeText: true } : {}),
      })),
    })),
  }
}

/** GET /api/sim — scenario list (client shape) + the learner's runs. */
export async function GET() {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })
  const runs = await db.simRun.findMany({
    where: { userId: me.id },
    orderBy: { startedAt: "desc" },
    take: 10,
  })
  return NextResponse.json({
    scenarios: SIM_SCENARIOS.map(scenarioForClient),
    runs: runs.map((r) => ({
      id: r.id,
      scenario: r.scenario,
      status: r.status,
      stage: r.stage,
      decisions: JSON.parse(r.decisions),
      score: r.score,
      startedAt: r.startedAt.toISOString(),
      completedAt: r.completedAt?.toISOString() ?? null,
    })),
  })
}

/**
 * POST /api/sim — {action}
 *   start   {scenario}                → creates a run, returns it
 *   decide  {runId, decisionId, picked? | text?} → judgment + feedback
 *   complete{runId}                   → final score + XP + AI debrief
 */
export async function POST(req: Request) {
  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: {
    action?: unknown
    scenario?: unknown
    runId?: unknown
    decisionId?: unknown
    picked?: unknown
    text?: unknown
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  const action = String(body?.action)

  if (action === "start") {
    const slug = String(body?.scenario)
    const scenario = findScenario(slug)
    if (!scenario) return NextResponse.json({ error: "scenario not found" }, { status: 404 })
    const run = await db.simRun.create({
      data: { userId: me.id, scenario: slug, status: "active", stage: 0, decisions: "[]" },
    })
    return NextResponse.json({
      run: {
        id: run.id,
        scenario: run.scenario,
        status: run.status,
        stage: run.stage,
        decisions: [],
        score: run.score,
        startedAt: run.startedAt.toISOString(),
        completedAt: null,
      },
    })
  }

  const runId = typeof body?.runId === "string" ? body.runId : ""
  const run = runId
    ? await db.simRun.findFirst({ where: { id: runId, userId: me.id } })
    : null
  if (!run) return NextResponse.json({ error: "run not found" }, { status: 404 })

  const scenario = findScenario(run.scenario)
  if (!scenario) return NextResponse.json({ error: "scenario missing" }, { status: 500 })
  const decisions = JSON.parse(run.decisions) as {
    stageId: string
    decisionId: string
    picked?: string
    text?: string
    judged?: boolean
    score?: number
    feedback?: string
  }[]

  if (action === "decide") {
    if (run.status !== "active") {
      return NextResponse.json({ error: "run already completed" }, { status: 409 })
    }
    const decisionId = String(body?.decisionId)
    const decision = scenario.stages
      .flatMap((s) => s.decisions)
      .find((d) => d.id === decisionId)
    if (!decision) return NextResponse.json({ error: "decision not found" }, { status: 404 })
    if (decisions.some((d) => d.decisionId === decisionId)) {
      return NextResponse.json({ error: "decision already made" }, { status: 409 })
    }
    const stage = scenario.stages.find((s) => s.decisions.some((d) => d.id === decisionId))!

    let score = 0
    let feedback = ""
    let picked: string | undefined
    let text: string | undefined
    let judged = false

    if (decision.freeText) {
      text = typeof body?.text === "string" ? body.text.trim().slice(0, 4000) : ""
      if (text.length < 30) {
        return NextResponse.json(
          { error: "write at least a couple of sentences for the judgment call" },
          { status: 400 }
        )
      }
      const graded = await gradeFreeText(scenario.title, decision.prompt, decision.rubric ?? "", text)
      score = graded.score
      feedback = graded.feedback
      judged = graded.judged
    } else {
      picked = String(body?.picked)
      const option = decision.options?.find((o) => o.id === picked)
      if (!option) return NextResponse.json({ error: "invalid option" }, { status: 400 })
      score = option.points
      feedback = option.feedback
    }

    decisions.push({
      stageId: stage.id,
      decisionId,
      ...(picked ? { picked } : {}),
      ...(text ? { text } : {}),
      ...(judged ? { judged } : {}),
      score,
      feedback,
    })
    const stageIndex = scenario.stages.findIndex((s) => s.id === stage.id)
    await db.simRun.update({
      where: { id: run.id },
      data: {
        decisions: JSON.stringify(decisions),
        stage: Math.max(run.stage, stageIndex + 1),
      },
    })
    return NextResponse.json({ ok: true, score, feedback, maxForDecision: 4 })
  }

  if (action === "complete") {
    if (run.status === "completed") {
      return NextResponse.json({ error: "run already completed" }, { status: 409 })
    }
    const totalDecisions = scenario.stages.reduce((a, s) => a + s.decisions.length, 0)
    if (decisions.length < totalDecisions) {
      return NextResponse.json(
        { error: `finish all decisions first (${decisions.length}/${totalDecisions})` },
        { status: 400 }
      )
    }
    const earned = decisions.reduce((a, d) => a + (d.score ?? 0), 0)
    const maxScore = scenario.maxScore
    const finalScore = Math.round((earned / Math.max(1, maxScore)) * 100)

    // XP: 2 per decision point earned, capped at 120 — a strong run ≈ 1-2 lessons
    const xp = Math.min(120, earned * 2)
    await db.$transaction([
      db.simRun.update({
        where: { id: run.id },
        data: {
          status: "completed",
          score: finalScore,
          completedAt: new Date(),
        },
      }),
      db.user.update({ where: { id: me.id }, data: { xp: { increment: xp } } }),
    ])

    // AI debrief — best-effort; the deterministic per-decision feedback
    // already covers the learning value
    let debrief: string | null = null
    try {
      const transcript = decisions
        .map((d) => `[${d.decisionId}] score ${d.score}/4 :: ${d.feedback}`)
        .join("\n")
      const res = await generateOnce({
        tuning: AI_TUNING.simDebrief, // v41 — warm, tight partner note
        messages: [
          {
            role: "system",
            content:
              "You are the engagement partner reviewing a senior's simulation debrief. Write 4-6 sentences: the strongest judgment shown, the weakest pattern to work on, and one concrete study pointer (name the exact ISA). Be direct and warm. No lists.",
          },
          {
            role: "user",
            content: `Scenario: ${scenario.title}\n\nDecisions:\n${transcript}\n\nTotal: ${earned}/${maxScore} (${finalScore}%).`,
          },
        ],
      })
      if (res?.text) debrief = res.text.trim().slice(0, 2000)
    } catch {}

    return NextResponse.json({ ok: true, score: finalScore, earned, maxScore, xp, debrief })
  }

  return NextResponse.json({ error: "unknown action" }, { status: 400 })
}

/* ------------------------- free-text AI grading ------------------------- */

async function gradeFreeText(
  scenarioTitle: string,
  prompt: string,
  rubric: string,
  answer: string
): Promise<{ score: number; feedback: string; judged: boolean }> {
  try {
    const res = await generateOnce({
      tuning: AI_TUNING.simGrade, // v41 — repeatable rubric grading
      messages: [
        {
          role: "system",
          content:
            "You are a marking senior grading an audit trainee's written judgment against a rubric. Reply with STRICT JSON only: {\"score\": <0-4 integer>, \"feedback\": \"<3-5 sentences: what was right, what was missing, and the correct professional position>\"}. Score 4 = rubric fully covered; 3 = mostly covered with one gap; 2 = right direction, material gaps; 1 = partially relevant; 0 = misses the point.",
        },
        {
          role: "user",
          content: `SCENARIO: ${scenarioTitle}\nQUESTION: ${prompt}\nRUBRIC: ${rubric}\n\nTRAINEE'S ANSWER:\n${answer}`,
        },
      ],
    })
    if (res?.text) {
      const m = res.text.match(/\{[\s\S]*\}/)
      if (m) {
        const parsed = JSON.parse(m[0]) as { score?: unknown; feedback?: unknown }
        const score = Math.min(4, Math.max(0, Math.floor(Number(parsed.score))))
        if (Number.isFinite(score) && typeof parsed.feedback === "string" && parsed.feedback) {
          return { score, feedback: parsed.feedback, judged: true }
        }
      }
    }
  } catch {}
  // engine unavailable — neutral mid score + rubric-based self-study feedback
  return {
    score: 2,
    judged: false,
    feedback: `The AI grader is unreachable right now, so this judgment was provisionally scored 2/4. Self-assess against the marking rubric:\n\n${rubric}`,
  }
}
