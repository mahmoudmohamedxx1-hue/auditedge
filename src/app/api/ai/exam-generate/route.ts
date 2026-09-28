import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSessionUser } from "@/lib/auth"
import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { generateOnce } from "@/lib/ai"
import { questionForClient } from "@/lib/bank"
import type { BankArea } from "@/lib/exam-blueprint"

export const runtime = "nodejs"
export const maxDuration = 120

/** v22 — AI custom-exam builder: POST /api/ai/exam-generate
 *
 *  Client-driven chunked generation (serverless-friendly — every request
 *  finishes well under the 60s function cap):
 *    {action: "chunk", topic, area, difficulty, lang, avoid: [stems]}
 *      → generates ONE batch of up to 3 exam-style MCQs through the engine
 *        chain (key / workspace / keyless pool), validated + salvage-parsed,
 *        returns { questions, engine }. The client repeats with the growing
 *        avoid-list until it has enough, showing progress.
 *    {action: "finalize", topic, area, difficulty, timed, questions: [...]}
 *      → re-validates, inserts into the bank (source "AI custom exam") and
 *        opens a timed ExamSession; misses flow into mistakes + SRS like any
 *        exam sitting. */

const AREAS: BankArea[] = ["auditing", "accounting", "egypt", "ethics"]

/** angle rotation — varies each batch's emphasis (anti-repeat + cache-bust) */
const ANGLES = [
  "core concepts and definitions",
  "practical scenario application",
  "judgement calls and common misconceptions",
  "documentation, communication and reporting angles",
  "edge cases and exam traps",
]

type GeneratedQ = {
  stem: string
  stemAr?: string
  options: string[]
  optionsAr?: string[]
  answerIndex: number
  explanation: string
  explanationAr?: string
  standardTag?: string
}

const PROMPT = (opts: {
  topic: string
  area: string
  count: number
  difficulty: number
  bilingual: boolean
}) => `You are an examiner for professional accounting and auditing qualifications (ACCA AA/SBR, CPA, Egyptian SOE practice exams). Write ${opts.count} multiple-choice exam questions about:

TOPIC: ${opts.topic}
SECTION: ${opts.area} (auditing = ISA-based audit practice; accounting = IFRS financial reporting; egypt = Egyptian standards/regulation/SOE context; ethics = IESBA code)
DIFFICULTY: ${opts.difficulty === 1 ? "easy — fundamentals, direct application" : opts.difficulty === 2 ? "medium — scenario application" : "hard — complex, judgement-heavy scenarios with strong distractors"}

RULES
- Each question: a focused stem (scenario style for difficulty 2-3), exactly 4 options, ONE correct answer, and a 2-3 sentence explanation citing the standard (e.g. ISA 315.26, IFRS 15.31) where relevant.
- Distractors must be plausible and professional (common misconceptions, near-miss numbers, reversed rules) — never silly.
- No trick questions, no "all of the above", no opinion questions.
- ${opts.bilingual ? "Provide stemAr, optionsAr and explanationAr as faithful Arabic translations for every question." : "Arabic fields are optional; include them only if you can translate faithfully."}

OUTPUT — return ONLY a JSON array, no markdown fences, no commentary:
[{"stem":"...","stemAr":"...","options":["A","B","C","D"],"optionsAr":["...","...","...","..."],"answerIndex":0,"explanation":"...","explanationAr":"...","standardTag":"ISA 315"}]`

function validateQ(q: unknown): GeneratedQ | null {
  if (!q || typeof q !== "object") return null
  const o = q as Record<string, unknown>
  const stem = typeof o.stem === "string" ? o.stem.trim() : ""
  const options = Array.isArray(o.options) ? o.options.map((x) => String(x ?? "").trim()) : []
  const explanation = typeof o.explanation === "string" ? o.explanation.trim() : ""
  const answerIndex = Number(o.answerIndex)
  if (!stem || stem.length < 20) return null
  if (options.length !== 4 || options.some((x) => !x)) return null
  if (options.some((x, i) => options.findIndex((y) => y === x) !== i)) return null // dupes
  if (!Number.isInteger(answerIndex) || answerIndex < 0 || answerIndex > 3) return null
  if (!explanation || explanation.length < 20) return null
  const g: GeneratedQ = { stem, options, answerIndex, explanation, standardTag: undefined }
  if (typeof o.stemAr === "string" && o.stemAr.trim()) g.stemAr = o.stemAr.trim()
  if (
    Array.isArray(o.optionsAr) &&
    o.optionsAr.length === 4 &&
    o.optionsAr.every((x) => typeof x === "string" && x.trim())
  ) {
    g.optionsAr = (o.optionsAr as string[]).map((x) => x.trim())
  }
  if (typeof o.explanationAr === "string" && o.explanationAr.trim()) g.explanationAr = o.explanationAr.trim()
  if (typeof o.standardTag === "string" && o.standardTag.trim()) g.standardTag = o.standardTag.trim().slice(0, 40)
  return g
}

/** Parse the engine's JSON array, salvaging complete items when the output
 *  was truncated by a token cap: cut back to the last complete `}` at depth 1
 *  and close the array. Returns the parsed array (possibly shorter). */
function parseQuestions(text: string): unknown[] | null {
  const cleaned = text.replace(/```json|```/g, "").trim()
  const start = cleaned.indexOf("[")
  if (start < 0) return null
  let body = cleaned.slice(start)
  let parsed: unknown = null
  try {
    parsed = JSON.parse(body)
  } catch {
    // truncated — salvage: walk to the last complete top-level object
    let depth = 0
    let inStr = false
    let esc = false
    let lastComplete = -1
    for (let i = 0; i < body.length; i++) {
      const c = body[i]
      if (esc) {
        esc = false
        continue
      }
      if (c === "\\") {
        esc = true
        continue
      }
      if (c === '"') inStr = !inStr
      if (inStr) continue
      if (c === "{" || c === "[") depth++
      else if (c === "}" || c === "]") {
        depth--
        // depth 1 → closed one top-level object of the array
        if (depth === 1 && c === "}") lastComplete = i
      }
    }
    if (lastComplete < 0) return null
    body = body.slice(0, lastComplete + 1) + "]"
    try {
      parsed = JSON.parse(body)
    } catch {
      return null
    }
  }
  return Array.isArray(parsed) ? parsed : null
}

export async function POST(req: Request) {
  const limited = aiRateLimit(req, AI_POLICIES.examGen)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: {
    action?: unknown
    topic?: unknown
    area?: unknown
    count?: unknown
    difficulty?: unknown
    lang?: unknown
    timed?: unknown
    avoid?: unknown
    questions?: unknown
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const action = body.action === "finalize" ? "finalize" : "chunk"
  const topic = String(body.topic ?? "").trim().slice(0, 300)
  if (topic.length < 3) {
    return NextResponse.json({ error: "topic is required (describe the exam focus)" }, { status: 400 })
  }
  const area = AREAS.includes(String(body.area) as BankArea) ? (String(body.area) as BankArea) : "auditing"
  const difficulty = ([1, 2, 3] as const).includes(Number(body.difficulty) as 1 | 2 | 3)
    ? (Number(body.difficulty) as 1 | 2 | 3)
    : 2
  const bilingual = body.lang !== "en" // en → optional AR; ar/bilingual → required AR

  /* ============================ CHUNK ============================ */
  if (action === "chunk") {
    const avoid = Array.isArray(body.avoid)
      ? body.avoid
          .filter((x): x is string => typeof x === "string")
          .map((s) => s.slice(0, 160))
          .slice(0, 24)
      : []
    // v23: micro exams (≤5) ask for the whole batch in one request
    const ask = Math.min(5, Math.max(1, Number(body.count) || 3))
    const avoidBlock = avoid.length
      ? `\nQuestions already written in earlier batches (do NOT repeat or paraphrase them):\n${avoid
          .map((s) => `- ${s}`)
          .join("\n")}`
      : ""
    const angleSeed = avoid.length + Math.floor(Math.random() * ANGLES.length)
    const angle = `\nEmphasize: ${ANGLES[angleSeed % ANGLES.length]}.`
    const gen = await generateOnce({
      thinking: true,
      messages: [
        {
          role: "system",
          content:
            "You are a professional exam writer. You output only valid JSON arrays of exam questions. Every question is factually correct under current ISA/IFRS/IESBA standards. Keep each question compact so the whole array fits within your output limit.",
        },
        {
          role: "user",
          content: PROMPT({ topic, area, count: ask, difficulty, bilingual }) + angle + avoidBlock,
        },
      ],
    })
    if (!gen?.text?.trim()) {
      return NextResponse.json({ error: "The AI engine is busy — try again." }, { status: 502 })
    }
    const parsed = parseQuestions(gen.text)
    if (!parsed) {
      return NextResponse.json({ error: "The AI response was malformed — try again." }, { status: 502 })
    }
    const valid: GeneratedQ[] = []
    const seen = new Set<string>(avoid.map((s) => s.slice(0, 120).toLowerCase()))
    for (const item of parsed.map(validateQ)) {
      if (!item) continue
      const key = item.stem.slice(0, 120).toLowerCase()
      if (seen.has(key)) continue
      seen.add(key)
      valid.push(item)
    }
    if (!valid.length) {
      return NextResponse.json({ error: "No fresh questions this batch — try again." }, { status: 502 })
    }
    return NextResponse.json({ questions: valid, engine: gen.engine })
  }

  /* =========================== FINALIZE =========================== */
  const timed = body.timed !== false
  const incoming = Array.isArray(body.questions) ? body.questions : []
  const valid = incoming.map(validateQ).filter((q): q is GeneratedQ => q !== null)
  if (valid.length < 3) {
    return NextResponse.json(
      { error: `Only ${valid.length} valid questions survived — generate some more or try again.` },
      { status: 400 }
    )
  }

  // persist as bank questions (source "AI custom exam") so misses flow into SRS
  const tagBase = valid[0]?.standardTag?.split(" ")[0] ?? "AI"
  const stamp = Date.now().toString(36)
  const inserted: Awaited<ReturnType<typeof db.bankQuestion.create>>[] = []
  for (let i = 0; i < valid.length; i++) {
    const q = valid[i]
    inserted.push(
      await db.bankQuestion.create({
        data: {
          code: `AICX-${stamp}-${i}`,
          stem: q.stem,
          stemAr: q.stemAr ?? null,
          options: JSON.stringify(q.options),
          optionsAr: q.optionsAr ? JSON.stringify(q.optionsAr) : null,
          answerIndex: q.answerIndex,
          explanation: q.explanation,
          explanationAr: q.explanationAr ?? null,
          standardTag: q.standardTag ?? `${tagBase} (AI)`,
          area,
          difficulty,
          source: "AI custom exam",
        },
      })
    )
  }

  // one active sitting at a time
  await db.examSession.updateMany({
    where: { userId: me.id, completedAt: null },
    data: { completedAt: new Date() },
  })

  const durationMin = timed ? Math.max(10, Math.round(valid.length * 2)) : 90
  const session = await db.examSession.create({
    data: {
      userId: me.id,
      mode: "ai-custom",
      blueprint: JSON.stringify([{ topic: topic.slice(0, 120), count: valid.length, picked: valid.length }]),
      questionIds: JSON.stringify(inserted.map((q) => q.id)),
      durationMin,
      total: valid.length,
    },
  })

  return NextResponse.json({
    session: {
      id: session.id,
      mode: session.mode,
      durationMin: session.durationMin,
      total: session.total,
      startedAt: session.startedAt.toISOString(),
      completedAt: null,
      score: null,
      correct: null,
      sectionScores: {},
      questions: inserted.map(questionForClient),
      answered: {},
      flagged: [],
      blueprint: [{ topic: topic.slice(0, 120), count: valid.length, picked: valid.length }],
    },
  })
}
