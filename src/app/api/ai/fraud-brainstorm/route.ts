import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { NextRequest, NextResponse } from "next/server"
import { getSessionUser } from "@/lib/auth"
import { generateOnce } from "@/lib/ai"
import { AI_TUNING } from "@/lib/ai-tuning"
import { engagementBundleMd, type Engagement } from "@/lib/engagement"
import { sseProgress, wantsProgress, type ProgressEmit } from "@/lib/ai-sse"

export const runtime = "nodejs"
export const maxDuration = 240

/** v42 — POST /api/ai/fraud-brainstorm — the ISA 240 brainstorming session.
 *
 *  The engagement team's mandatory fraud brainstorm (ISA 240.15 / ESA 240):
 *  the AI facilitates the session for THIS entity — how fraud could hit
 *  this specific client (the fraud triangle: incentive, opportunity,
 *  rationalization; management override; revenue manipulation; concealed
 *  liabilities) — and returns a structured, ACTIONABLE log:
 *    - a short session memo (both languages)
 *    - 6-10 inquiries to put to TCWG / management / in-house counsel
 *      (ISA 240.16-17)
 *    - 4-6 fraud-risk hypotheses with ratings and the audit response for
 *      each — shaped exactly like a risk-matrix row, so the client can
 *      drop them straight into the AP-01 matrix with one click
 *
 *  Progressive transport: X-AI-Progress: 1 → SSE stage events + result. */

type RawInquiry = { textEn?: unknown; textAr?: unknown }
type RawHypo = {
  account?: unknown
  assertion?: unknown
  textEn?: unknown
  textAr?: unknown
  ir?: unknown
  cr?: unknown
  responseEn?: unknown
  responseAr?: unknown
}

const asText = (v: unknown, max = 500): string =>
  typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : ""

const asRating = (v: unknown): "low" | "med" | "high" => {
  const s = String(v ?? "").toLowerCase()
  return s === "low" || s === "med" || s === "high" ? (s as "low" | "med" | "high") : "med"
}

/** Pull the first JSON object out of a model answer (handles ```json fences,
 *  leading prose, trailing commentary) — same extractor contract as the
 *  DD customizer. */
function extractJson(text: string): Record<string, unknown> | null {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i)
  const candidate = fenced ? fenced[1] : text
  const start = candidate.indexOf("{")
  const end = candidate.lastIndexOf("}")
  if (start < 0 || end <= start) return null
  try {
    const parsed = JSON.parse(candidate.slice(start, end + 1))
    return typeof parsed === "object" && parsed !== null ? (parsed as Record<string, unknown>) : null
  } catch {
    return null
  }
}

export async function POST(req: NextRequest) {
  const limited = aiRateLimit(req, AI_POLICIES.draft)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { engagement?: unknown; notes?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const eng = body?.engagement as Engagement | undefined
  if (!eng || typeof eng !== "object" || typeof eng.client !== "string") {
    return NextResponse.json({ error: "engagement payload required" }, { status: 400 })
  }
  const notes = typeof body.notes === "string" ? body.notes.trim().slice(0, 1_500) : ""

  // defensive shape (same contract as the EQR route)
  const safeEng: Engagement = {
    ...eng,
    procedures: eng.procedures && typeof eng.procedures === "object" ? eng.procedures : {},
    pbc: eng.pbc && typeof eng.pbc === "object" ? eng.pbc : {},
    signoffs: eng.signoffs && typeof eng.signoffs === "object" ? eng.signoffs : {},
    findings: (Array.isArray(eng.findings) ? eng.findings : []).slice(0, 80),
    materiality:
      eng.materiality &&
      typeof eng.materiality === "object" &&
      typeof eng.materiality.om === "number" &&
      typeof eng.materiality.pm === "number" &&
      typeof eng.materiality.ctt === "number"
        ? eng.materiality
        : undefined,
  }

  const run = async (emit: ProgressEmit | null) => {
    emit?.({ i: 0, id: "reading" })
    const bundle = engagementBundleMd(safeEng)

    const system = `You are the engagement partner facilitating the MANDATORY FRAUD BRAINSTORMING SESSION for the audit of ${safeEng.client} (${safeEng.period}) under ISA 240 (The Auditor's Responsibilities Relating to Fraud in an Audit of Financial Statements) / ESA 240, inside a learning platform. The session happens at planning, BEFORE fieldwork — treat every hypothesis as a risk to design responses for, never as a finding.

Think like the fraudster first (incentive, opportunity, rationalization), then like the partner: how could THIS entity's management cook these statements and hide it? Weigh revenue manipulation (ISA 240.26), management override of controls (240.31 — ALWAYS a significant risk), concealed liabilities/commitments, undisclosed related parties, asset misappropriation that could be material, and the specific industry/structure risks the profile suggests.

Return STRICT JSON ONLY (no prose, no markdown fences) with exactly this shape:
{
  "memoEn": "90-150 word session memo: how the session ran, the fraud-triangle factors that stand out for THIS entity, and the overall posture the team is taking",
  "memoAr": "نفس المذكرة بالعربية الفصحى المهنية",
  "inquiries": [
    { "textEn": "One specific inquiry for TCWG / management / in-house counsel under ISA 240.16-17 — name WHO it is put to", "textAr": "نفس السؤال بالعربية" }
  ],
  "hypotheses": [
    { "account": "the account/cycle at risk (e.g. Revenue, Inventory, Payables)", "assertion": "the assertion at risk (EX/C/A/VA/RO/CO/CL/PR or free text)", "textEn": "The fraud risk hypothesis — one sharp sentence naming the mechanism", "textAr": "نفس الفرضية بالعربية", "ir": "low|med|high inherent risk OF THE FRAUD RISK", "cr": "low|med|high control risk", "responseEn": "The audit response — the specific ISA 240 procedure(s): unpredictability, journal-entry testing, retrospective review, corroboration, IT specialist…", "responseAr": "نفس الاستجابة بالعربية" }
  ]
}

Hard rules:
1. 6-10 inquiries, 4-6 hypotheses. Management override of controls is ALWAYS among the hypotheses (ISA 240.31) and marked high.
2. Every hypothesis must be specific to THIS entity (its sector, size, structure, systems — from the profile), never generic textbook filler.
3. Ratings are honest: not everything is high; justify through the response.
4. Bilingual: textEn/textAr carry the same professional content, not literal translations.
5. JSON only. Double quotes. No trailing commas. No comments.`

    const user = [
      "Run the brainstorming session now and return the JSON log.",
      notes ? `--- WHAT THE TEAM ALREADY SUSPECTS / NOTED ---\n${notes}` : "",
      "",
      "--- ENGAGEMENT PROFILE (client, sector, systems, concerns, risk matrix so far) ---",
      bundle,
    ]
      .filter(Boolean)
      .join("\n")

    // one automatic retry with a firmer instruction — same recovery contract
    // as the DD customizer (v39.0.2)
    let parsed: Record<string, unknown> | null = null
    let engine = "none"
    let modelUsed = ""
    for (let attempt = 0; attempt < 2; attempt++) {
      const reminder =
        attempt === 0
          ? "Facilitate the session for this entity now. Return the JSON object only."
          : "Your previous answer was NOT valid strict JSON (or was too thin). Answer AGAIN with the complete JSON object ONLY — no prose, no fences, 6-10 inquiries, 4-6 hypotheses, double quotes, no trailing commas."
      emit?.({ i: 1, id: attempt === 0 ? "thinking" : "tightening" })
      const result = await generateOnce({
        thinking: true,
        tuning: AI_TUNING.fraudBrainstorm, // v42 — sharp but grounded risk log
        messages: [
          { role: "system", content: system },
          { role: "user", content: reminder },
        ],
      })
      if (!result || !result.text.trim()) continue
      engine = result.engine ?? "none"
      modelUsed = result.modelUsed
      parsed = extractJson(result.text)
      if (parsed) break
    }

    if (!parsed) {
      return { ok: false as const, error: "The AI answer was unreadable — please try again", status: 502 }
    }

    emit?.({ i: 2, id: "structuring" })

    /* ---- validate + normalize into the client's shapes ---- */
    const inquiries = (Array.isArray(parsed.inquiries) ? (parsed.inquiries as RawInquiry[]) : [])
      .map((q) => ({ en: asText(q.textEn, 400), ar: asText(q.textAr, 400) }))
      .filter((q) => q.en.length > 10)
      .slice(0, 10)

    const hypotheses = (Array.isArray(parsed.hypotheses) ? (parsed.hypotheses as RawHypo[]) : [])
      .map((h) => ({
        account: asText(h.account, 80) || "General",
        assertion: asText(h.assertion, 24) || "",
        en: asText(h.textEn, 400),
        ar: asText(h.textAr, 400) || asText(h.textEn, 400),
        ir: asRating(h.ir),
        cr: asRating(h.cr),
        responseEn: asText(h.responseEn, 400),
        responseAr: asText(h.responseAr, 400) || asText(h.responseEn, 400),
      }))
      .filter((h) => h.en.length > 10 && h.responseEn.length > 10)
      .slice(0, 6)

    const memo = { en: asText(parsed.memoEn, 1200), ar: asText(parsed.memoAr, 1200) }

    if (!memo.en && !memo.ar && inquiries.length === 0 && hypotheses.length === 0) {
      return { ok: false as const, error: "The session log came back empty — please try again", status: 502 }
    }
    if (hypotheses.length < 3) {
      return { ok: false as const, error: "The AI answer was too thin — please try again", status: 502 }
    }

    emit?.({ i: 3, id: "done" })
    return {
      ok: true as const,
      payload: { memo, inquiries, hypotheses, model: modelUsed, engine },
    }
  }

  if (wantsProgress(req)) {
    return sseProgress((emit) => run(emit))
  }

  try {
    const out = await run(null)
    if (!out.ok) return NextResponse.json({ error: out.error }, { status: out.status })
    return NextResponse.json(out.payload)
  } catch (e) {
    console.error("[fraud-brainstorm]", e)
    return NextResponse.json({ error: "The brainstorm failed — try again" }, { status: 500 })
  }
}
