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

/** Pull the first balanced JSON object out of an LLM reply: strips code
 *  fences, finds the outermost braces, parses. Returns null when there is
 *  no parseable object. */
export function extractJsonObject(text: string): unknown | null {
  let t = text.trim()
  t = t.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "").trim()
  const first = t.indexOf("{")
  const last = t.lastIndexOf("}")
  if (first === -1 || last === -1 || last <= first) return null
  const slice = t.slice(first, last + 1)
  try {
    return JSON.parse(slice)
  } catch {
    return null
  }
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
  const obj = parsed as Record<string, unknown>

  const rawQuestions = Array.isArray(obj.questions) ? obj.questions : []
  const questions: TocQuestion[] = []
  const usedIds = new Set<string>()
  let index = 0
  for (const rq of rawQuestions) {
    if (index >= MAX_AI_QUESTIONS) break
    if (!rq || typeof rq !== "object") continue
    const q = rq as Record<string, unknown>
    const text = str(q.q, 500) || str(q.question, 500)
    if (!text) continue
    const domain = mapDomain(q.domain ?? q.component)
    if (!domain) continue
    const weightRaw = Number(q.weight)
    const weight: 1 | 2 | 3 =
      Number.isFinite(weightRaw) && weightRaw >= 2.5 ? 3 : Number.isFinite(weightRaw) && weightRaw >= 1.5 ? 2 : 1
    let id = str(q.id, 40)
    if (!id || usedIds.has(id)) id = `ai-${index + 1}`
    usedIds.add(id)
    questions.push({
      id,
      domain,
      q: text,
      hint: str(q.hint, 500) || "Probe for documentary evidence of the control operating.",
      weight,
      critical: q.critical === true || q.critical === "true",
    })
    index++
  }

  if (questions.length < MIN_AI_QUESTIONS) {
    return { ok: false, error: `too-few-questions (${questions.length})` }
  }

  const rawProcedures = Array.isArray(obj.procedures) ? obj.procedures : []
  const procedures: TocAiProcedure[] = []
  for (const rp of rawProcedures.slice(0, 14)) {
    if (typeof rp === "string") {
      const t = str(rp, 400)
      if (t) procedures.push({ title: t, detail: "", type: "inquiry" })
      continue
    }
    if (!rp || typeof rp !== "object") continue
    const p = rp as Record<string, unknown>
    const title = str(p.title ?? p.name, 200)
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

  const rawRisks = Array.isArray(obj.risks) ? obj.risks : []
  const risks = rawRisks.map((r) => str(r, 160)).filter(Boolean).slice(0, 8)
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
