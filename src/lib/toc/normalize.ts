import type { TocAiProcedure, TocDomain, TocQuestion } from "./types"

/** v37 — normalization of AI-generated Test-of-Control questionnaires.
 *
 *  The LLM is instructed to answer in strict JSON, but models drift:
 *  markdown fences, near-miss domain names, weights out of range, plain
 *  string procedures. This module turns whatever came back into a
 *  guaranteed-valid questionnaire (or explains why it cannot). It is pure
 *  and dependency-free so scripts/test-v37.ts unit-tests it directly. */

const VALID_DOMAINS: TocDomain[] = [
  "control-environment",
  "risk-assessment",
  "control-activities",
  "info-communication",
  "monitoring",
  "it-cyber",
]

function mapDomain(raw: unknown): TocDomain | null {
  if (typeof raw !== "string") return null
  const key = raw.toLowerCase().trim().replace(/[\s_]+/g, "-")
  if ((VALID_DOMAINS as string[]).includes(key)) return key as TocDomain
  if (key.includes("control-env")) return "control-environment"
  if (key.includes("risk")) return "risk-assessment"
  if (key.includes("control-act")) return "control-activities"
  if (key.includes("info") || key.includes("communication")) return "info-communication"
  if (key.includes("monitor")) return "monitoring"
  if (key.includes("cyber") || key.includes("it") || key.includes("technology")) return "it-cyber"
  return null
}

/** Pull the first balanced JSON object out of an LLM reply. Handles the
 *  field's real failure modes: markdown fences, prose before/after the
 *  JSON, reasoning prefixes that contain stray braces, and (as a last
 *  resort) multiple candidate objects — returns the first that parses.
 *  String-aware, so braces inside JSON string values do not confuse it. */
export function extractJsonObject(text: string): unknown | null {
  const t = text
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```\s*$/i, "")
    .trim()

  // attempt 1: the whole span from the first { to the last }
  const first = t.indexOf("{")
  const last = t.lastIndexOf("}")
  if (first !== -1 && last > first) {
    try {
      return JSON.parse(t.slice(first, last + 1))
    } catch {
      /* fall through to the scanner */
    }
  }

  // attempt 2: scan brace-balanced candidate objects, string-aware
  for (let start = t.indexOf("{"); start !== -1; start = t.indexOf("{", start + 1)) {
    let depth = 0
    let inStr = false
    let esc = false
    for (let i = start; i < t.length; i++) {
      const c = t[i]
      if (inStr) {
        if (esc) esc = false
        else if (c === "\\") esc = true
        else if (c === '"') inStr = false
        continue
      }
      if (c === '"') inStr = true
      else if (c === "{") depth++
      else if (c === "}") {
        depth--
        if (depth === 0) {
          try {
            return JSON.parse(t.slice(start, i + 1))
          } catch {
            break // unparseable object starting here — try the next {
          }
        }
      }
    }
  }
  return null
}

const PROC_TYPES: TocAiProcedure["type"][] = ["inquiry", "inspection", "observation", "reperformance"]

function mapProcType(raw: unknown): TocAiProcedure["type"] {
  if (typeof raw === "string") {
    const key = raw.toLowerCase().trim()
    if ((PROC_TYPES as string[]).includes(key)) return key as TocAiProcedure["type"]
    if (key.includes("inspect") || key.includes("document") || key.includes("check")) return "inspection"
    if (key.includes("observ") || key.includes("witness")) return "observation"
    if (key.includes("reperform") || key.includes("recalculat") || key.includes("test")) return "reperformance"
  }
  return "inquiry"
}

function str(x: unknown, max = 600): string {
  return typeof x === "string" ? x.trim().slice(0, max) : ""
}

/** Coerce a value into an array — weak pool models sometimes deliver the
 *  questions/procedures as a JSON-encoded STRING rather than an array. */
function asArray(x: unknown): unknown[] {
  if (Array.isArray(x)) return x
  if (typeof x === "string") {
    const s = x.trim()
    if (s.startsWith("[") || s.startsWith("{")) {
      try {
        const parsed = JSON.parse(s)
        return Array.isArray(parsed) ? parsed : [parsed]
      } catch {
        return []
      }
    }
  }
  return []
}

/** Weak models sometimes nest the real payload inside a wrapper key. */
const WRAPPER_KEYS = ["questionnaire", "data", "result", "output", "toc"]

function unwrapPayload(obj: Record<string, unknown>): Record<string, unknown> {
  let current = obj
  for (let depth = 0; depth < 2; depth++) {
    if (Array.isArray(asArray(current.questions)) && asArray(current.questions).length) return current
    let descended = false
    for (const key of WRAPPER_KEYS) {
      const inner = current[key]
      if (inner && typeof inner === "object" && !Array.isArray(inner)) {
        current = inner as Record<string, unknown>
        descended = true
        break
      }
    }
    if (!descended) return current
  }
  return current
}

const QUESTION_TEXT_KEYS = ["q", "question", "text", "prompt", "questionText"]

function questionText(q: Record<string, unknown>): string {
  for (const key of QUESTION_TEXT_KEYS) {
    const v = str(q[key], 500)
    if (v) return v
  }
  return ""
}

function mapWeight(raw: unknown): 1 | 2 | 3 {
  if (typeof raw === "string") {
    const w = raw.toLowerCase().trim()
    if (w.startsWith("high") || w.startsWith("critical") || w.startsWith("key")) return 3
    if (w.startsWith("med")) return 2
    if (w.startsWith("low") || w.startsWith("minor")) return 1
  }
  const n = Number(raw)
  if (Number.isFinite(n)) return n >= 2.5 ? 3 : n >= 1.5 ? 2 : 1
  return 2
}

export type NormalizedTocAi = {
  title: string
  scope: string
  risks: string[]
  procedures: TocAiProcedure[]
  questions: TocQuestion[]
}

export type NormalizeResult =
  | { ok: true; data: NormalizedTocAi }
  | { ok: false; error: string }

/** Minimum viable AI questionnaire — below this the answer is too thin to
 *  run an assessment on. */
export const MIN_AI_QUESTIONS = 8
export const MAX_AI_QUESTIONS = 30

export function normalizeAiQuestionnaire(parsed: unknown, fallbackTitle: string): NormalizeResult {
  if (!parsed || typeof parsed !== "object") return { ok: false, error: "not-an-object" }
  let obj = parsed as Record<string, unknown>

  // a bare top-level array of questions
  if (Array.isArray(parsed)) obj = { questions: parsed as unknown[] }

  obj = unwrapPayload(obj)

  const rawQuestions = asArray(obj.questions)
  const questions: TocQuestion[] = []
  const usedIds = new Set<string>()
  let index = 0
  for (const rq of rawQuestions) {
    if (index >= MAX_AI_QUESTIONS) break
    if (!rq || typeof rq !== "object") continue
    const q = rq as Record<string, unknown>
    const text = questionText(q)
    if (!text) continue
    const domain = mapDomain(q.domain ?? q.component ?? q.area)
    if (!domain) continue
    let id = str(q.id, 40)
    if (!id || usedIds.has(id)) id = `ai-${index + 1}`
    usedIds.add(id)
    questions.push({
      id,
      domain,
      q: text,
      hint: str(q.hint, 500) || "Probe for documentary evidence of the control operating.",
      weight: mapWeight(q.weight ?? q.significance),
      critical: q.critical === true || q.critical === "true" || q.critical === "yes",
    })
    index++
  }

  if (questions.length < MIN_AI_QUESTIONS) {
    return { ok: false, error: `too-few-questions (${questions.length})` }
  }

  const procedures: TocAiProcedure[] = []
  for (const rp of asArray(obj.procedures)) {
    if (typeof rp === "string") {
      const t = str(rp, 400)
      if (t) procedures.push({ title: t, detail: "", type: "inquiry" })
      continue
    }
    if (!rp || typeof rp !== "object") continue
    const p = rp as Record<string, unknown>
    const title = str(p.title ?? p.name ?? questionText(p), 200)
    if (!title) continue
    procedures.push({
      title,
      detail: str(p.detail ?? p.description, 600),
      type: mapProcType(p.type),
    })
  }
  if (!procedures.length) {
    return { ok: false, error: "no-procedures" }
  }

  const risks = asArray(obj.risks)
    .map((r) => (typeof r === "string" ? str(r, 160) : ""))
    .filter(Boolean)
    .slice(0, 8)
  if (!risks.length) risks.push("Key control risks for the described entity")

  return {
    ok: true,
    data: {
      title: str(obj.title, 120) || fallbackTitle,
      scope: str(obj.scope ?? obj.summary, 900) || fallbackTitle,
      risks,
      procedures,
      questions,
    },
  }
}
