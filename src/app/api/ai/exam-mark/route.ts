import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { generateOnce } from "@/lib/ai"
import { AI_TUNING } from "@/lib/ai-tuning"
import { getCrTask, type CrTask } from "@/lib/cr-tasks"
import type { SessionSection } from "@/lib/paper-formats"

export const runtime = "nodejs"
export const maxDuration = 120

/** v27 — POST /api/ai/exam-mark — the AI EXAMINER.
 *
 *  Marks the constructed-response answers of a submitted real-format paper
 *  against the CERTIFIED SOLUTIONS of the exam-style questions (the
 *  examiner's guide authored with each task): for every requirement the AI
 *  compares the learner's answer with the certified solution and its
 *  marking points, and awards marks with feedback — exactly how a
 *  professional-exam marker works. The final paper score becomes the
 *  real-exam section-weighted blend (e.g. CPA 50% MCQ / 50% TBS,
 *  DipIFR 30% Section A / 70% Section B).
 *
 *  Reliability ladder: the AI is asked for strict JSON; if it fails or the
 *  network is down, a deterministic keyword/numeric fallback marker awards
 *  the same marks from the marking points, so a submitted paper ALWAYS
 *  finalises — never stuck in "marking…". */

type ReqAward = { awarded: number; feedback: string }
type TaskAwards = Record<string, ReqAward[]> // crTaskId → per-requirement

/** normalise a learner answer for keyword matching: lowercase, strip
 *  punctuation/Arabic diacritics, collapse spaces */
function normalise(s: string): string {
  return s
    .toLowerCase()
    .replace(/[\u064B-\u0652\u0640]/g, "")
    .replace(/[^\p{L}\p{N}\s%.$-]/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
}

/** parse the first number out of an answer ("egp 798,540" → 798540) */
function firstNumber(s: string): number | null {
  const m = normalise(s).replace(/,/g, "").match(/-?\d+(\.\d+)?/)
  return m ? Number(m[0]) : null
}

/** deterministic fallback marker — marking points + numeric tolerance */
function fallbackMark(task: CrTask, answers: string[]): ReqAward[] {
  return task.requirements.map((r, i) => {
    const ans = (answers[i] ?? "").trim()
    if (!ans) return { awarded: 0, feedback: "" }
    if (r.kind === "numeric" && r.numeric) {
      const n = firstNumber(ans)
      const target = r.numeric.value
      if (n !== null && Math.abs(n - target) <= Math.abs(target) * r.numeric.tolerance + 1e-9) {
        return { awarded: r.marks, feedback: "" }
      }
      // partial credit: right order of magnitude / within 5%
      if (n !== null && Math.abs(n - target) <= Math.abs(target) * 0.05 + 1e-9) {
        return { awarded: Math.max(1, Math.floor(r.marks / 2)), feedback: "" }
      }
      return { awarded: 0, feedback: "" }
    }
    const hay = normalise(ans)
    let hits = 0
    for (const p of [...r.pointsEn, ...r.pointsAr]) {
      if (hay.includes(normalise(p))) hits++
    }
    const total = r.pointsEn.length
    const ratio = total ? hits / total : 0
    const awarded = Math.min(r.marks, Math.round(ratio * r.marks))
    return { awarded, feedback: "" }
  })
}

const EXAMINER_PROMPT = (task: CrTask, answers: string[], lang: string) => `You are a certified examiner for a professional accounting qualification (${task.labelEn}). Mark the candidate's answers STRICTLY against the CERTIFIED SOLUTION below — the examiner's guide of this exam-style question. You are strict but fair: award credit for correct substance even if wording differs; award nothing for irrelevant or blank answers; never exceed the maximum marks.

CANDIDATE LANGUAGE: give the feedback in the candidate's own language (${lang === "ar" ? "العربية" : "English"}).

SCENARIO / EXHIBIT:
${task.exhibitEn}

${task.requirements
  .map(
    (r, i) => `REQUIREMENT ${i + 1} (${r.marks} marks)${r.numeric ? ` — numeric answer expected, certified value ${r.numeric.value} (tolerance ${Math.round(r.numeric.tolerance * 100)}%)` : ""}
${r.promptEn}
CERTIFIED SOLUTION: ${r.certifiedEn}
MARKING POINTS: ${r.pointsEn.join("; ")}
CANDIDATE ANSWER: ${(answers[i] ?? "").trim() || "(blank)"}`
  )
  .join("\n\n")}

OUTPUT — return ONLY a JSON array, one object per requirement in order, no markdown fences, no commentary:
[{"awarded": <integer 0..marks>, "feedback": "<= 240 chars, cite what earned or lost the marks>"}]`

export async function POST(req: Request) {
  const limited = aiRateLimit(req, AI_POLICIES.examMark)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { sessionId?: unknown; lang?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
  const sessionId = String(body?.sessionId ?? "")
  const lang = body?.lang === "ar" ? "ar" : "en"
  if (!sessionId) return NextResponse.json({ error: "sessionId required" }, { status: 400 })

  const session = await db.examSession.findFirst({ where: { id: sessionId, userId: me.id } })
  if (!session) return NextResponse.json({ error: "not found" }, { status: 404 })
  if (!session.completedAt) {
    return NextResponse.json({ error: "sitting not submitted yet" }, { status: 409 })
  }

  const sections = JSON.parse(session.sections) as SessionSection[]
  const crSections = sections.filter((s) => s.kind === "cr" && (s.crTaskIds ?? []).length)
  if (!crSections.length) {
    return NextResponse.json({ error: "this paper has no constructed-response sections" }, { status: 400 })
  }
  if (session.crStatus === "done") {
    // already finalised — return the stored awards
    return NextResponse.json({
      ok: true,
      alreadyMarked: true,
      crMarks: JSON.parse(session.crMarks),
      score: session.score,
    })
  }

  const written = JSON.parse(session.written) as Record<string, string[]>
  const awards: TaskAwards = {}
  const engines: string[] = []
  let aiTasks = 0
  let fallbackTasks = 0

  for (const sec of crSections) {
    for (const tid of sec.crTaskIds ?? []) {
      const task = getCrTask(tid)
      if (!task) continue
      const answers = written[tid] ?? []

      let taskAwards: ReqAward[] | null = null
      // two AI attempts before the deterministic fallback
      for (let attempt = 0; attempt < 2 && !taskAwards; attempt++) {
        try {
          const res = await generateOnce({
            tuning: AI_TUNING.examMark, // v41 — repeatable examiner judgment
            messages: [
              { role: "system", content: "You are a rigorous professional-exam marker. Output only valid JSON." },
              { role: "user", content: EXAMINER_PROMPT(task, answers, lang) },
            ],
          })
          const raw = (res?.text ?? "").replace(/```json|```/g, "").trim()
          const match = raw.match(/\[[\s\S]*\]/)
          if (!match) continue
          const parsed = JSON.parse(match[0]) as { awarded?: unknown; feedback?: unknown }[]
          if (!Array.isArray(parsed) || parsed.length !== task.requirements.length) continue
          const rows: ReqAward[] = parsed.map((p, i) => {
            const max = task.requirements[i].marks
            let a = Number(p?.awarded)
            if (!Number.isFinite(a)) a = 0
            a = Math.max(0, Math.min(max, Math.round(a)))
            const fb = typeof p?.feedback === "string" ? p.feedback.slice(0, 300) : ""
            return { awarded: a, feedback: fb }
          })
          taskAwards = rows
          if (res?.engine && res.engine !== "none") engines.push(res.engine)
          aiTasks++
        } catch {
          // fall through to the next attempt / fallback
        }
      }
      if (!taskAwards) {
        taskAwards = fallbackMark(task, answers)
        fallbackTasks++
      }
      awards[tid] = taskAwards
    }
  }

  /* ---- final blended score: section-weighted like the real exam ---- */
  const answered = JSON.parse(session.answered) as Record<string, number>
  const questionIds = JSON.parse(session.questionIds) as string[]
  const questions = await db.bankQuestion.findMany({ where: { id: { in: questionIds } } })
  const byId = new Map(questions.map((q) => [q.id, q]))

  let weighted = 0 // Σ section% × weight
  const weightSum = sections.reduce((a, s) => a + (s.weight ?? 0), 0) || 1
  for (const sec of sections) {
    const w = (sec.weight ?? 0) / weightSum
    if (sec.kind === "mcq") {
      const ids = sec.mcqIds ?? []
      if (!ids.length) continue
      let correct = 0
      for (const qid of ids) {
        const q = byId.get(qid)
        if (q && answered[qid] !== undefined && answered[qid] === q.answerIndex) correct++
      }
      weighted += (correct / ids.length) * w
    } else {
      let earned = 0
      let max = 0
      for (const tid of sec.crTaskIds ?? []) {
        const task = getCrTask(tid)
        if (!task) continue
        max += task.requirements.reduce((a, r) => a + r.marks, 0)
        earned += (awards[tid] ?? []).reduce((a, r) => a + r.awarded, 0)
      }
      if (max > 0) weighted += (earned / max) * w
    }
  }
  const finalScore = Math.round(weighted * 100)

  // CR XP: 1 XP per CR mark earned (on top of the MCQ XP already granted)
  let crXp = 0
  for (const tid of Object.keys(awards)) {
    crXp += awards[tid].reduce((a, r) => a + r.awarded, 0)
  }
  const prevCrMarks = JSON.parse(session.crMarks) as TaskAwards
  const prevXp = Object.values(prevCrMarks).reduce(
    (a, rows) => a + rows.reduce((x, r) => x + r.awarded, 0),
    0
  )
  const xpDelta = Math.max(0, crXp - prevXp)

  await db.$transaction([
    db.examSession.update({
      where: { id: session.id },
      data: {
        crMarks: JSON.stringify(awards),
        crStatus: "done",
        score: finalScore,
      },
    }),
    ...(xpDelta > 0
      ? [db.user.update({ where: { id: me.id }, data: { xp: { increment: xpDelta } } })]
      : []),
  ])

  return NextResponse.json({
    ok: true,
    crMarks: awards,
    score: finalScore,
    xpEarned: xpDelta,
    engine: engines[0] ?? null,
    markedByAi: aiTasks,
    markedByFallback: fallbackTasks,
  })
}
