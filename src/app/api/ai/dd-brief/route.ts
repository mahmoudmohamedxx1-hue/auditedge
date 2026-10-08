import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { NextRequest, NextResponse } from "next/server"
import { getSessionUser } from "@/lib/auth"
import { generateOnce } from "@/lib/ai"
import { AI_TUNING } from "@/lib/ai-tuning"
import { sseProgress, wantsProgress, type ProgressEmit } from "@/lib/ai-sse"

export const runtime = "nodejs"
export const maxDuration = 240

/** v42 — POST /api/ai/dd-brief — the Due Diligence deal-brief closer.
 *
 *  Closes the loop on the DD playbook: the user works the 25 workstreams
 *  (ticking instructions as evidence lands); this endpoint condenses THAT
 *  fieldwork state into a one-page deal briefing — state of play, what is
 *  cleared vs what is still open and why it matters for THIS kind of deal,
 *  the conditions/next steps before money moves, and the deal-breaker
 *  watch list. Bilingual EN/AR, grounded strictly in the tick state the
 *  client sends (it never invents findings that were not ticked).
 *
 *  Progressive transport: X-AI-Progress: 1 → SSE stage events + result. */

type RawWorkstream = {
  sectionId?: unknown
  code?: unknown
  title?: unknown
  scope?: unknown
  done?: unknown
  total?: unknown
  ai?: unknown
}

type Workstream = {
  sectionId: string
  code: string
  title: string
  scope: string
  done: number
  total: number
  ai: number
}

const asText = (v: unknown, max = 300): string =>
  typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : ""

const asInt = (v: unknown, fallback = 0): number =>
  typeof v === "number" && Number.isFinite(v) ? Math.max(0, Math.floor(v)) : fallback

export async function POST(req: NextRequest) {
  const limited = aiRateLimit(req, AI_POLICIES.draft)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: {
    deal?: unknown
    size?: unknown
    target?: unknown
    concerns?: unknown
    workstreams?: unknown
    notes?: unknown
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const deal = ["acquisition", "investment", "lending", "partnership"].includes(String(body.deal))
    ? String(body.deal)
    : "acquisition"
  const size = body.size === "sme" || body.size === "large" ? body.size : "mid"
  const target = String(body.target ?? "").trim().slice(0, 900)
  if (target.length < 8) return NextResponse.json({ error: "target is required" }, { status: 400 })
  const concerns = String(body.concerns ?? "").trim().slice(0, 900)
  const notes = String(body.notes ?? "").trim().slice(0, 1_500)

  const workstreams: Workstream[] = (Array.isArray(body.workstreams) ? (body.workstreams as RawWorkstream[]) : [])
    .map((w) => ({
      sectionId: asText(w.sectionId, 60),
      code: asText(w.code, 12),
      title: asText(w.title, 160),
      scope: ["legal", "ops", "financial"].includes(String(w.scope)) ? String(w.scope) : "legal",
      done: asInt(w.done),
      total: asInt(w.total),
      ai: asInt(w.ai),
    }))
    .filter((w) => w.sectionId && w.total > 0)
    .slice(0, 30)

  if (workstreams.length === 0) {
    return NextResponse.json(
      { error: "no fieldwork progress yet — tick some instructions in the playbook first" },
      { status: 400 }
    )
  }

  const dealText =
    deal === "acquisition"
      ? "a buy-side acquisition (the user is considering BUYING control of this company)"
      : deal === "investment"
        ? "a minority investment (the user is considering INVESTING in a non-controlling stake)"
        : deal === "lending"
          ? "a lending / credit decision (the user is considering LENDING to this company)"
          : "a partnership or joint venture (the user is considering PARTNERING with this company)"

  const run = async (emit: ProgressEmit | null) => {
    emit?.({ i: 0, id: "reading" })

    const wsTable = [
      "| Workstream | Scope | Cleared |",
      "| --- | --- | --- |",
      ...workstreams.map((w) => `| ${w.code} — ${w.title} | ${w.scope} | ${w.done}/${w.total}${w.ai ? ` (+${w.ai} AI)` : ""} |`),
    ].join("\n")

    const system = `You are the due diligence engagement leader of a Big-4 style advisory team, closing out a diligence workstream. Your team has been working the firm's 25-workstream playbook (legal / operational / financial per-account) and you now write THE DEAL BRIEF for the investment committee — one page, decision-grade.

THE DEAL
- Type: ${dealText}
- Target size: ${size === "sme" ? "small/medium owner-managed" : size === "large" ? "large or listed" : "mid-market"}
- The target company: ${target}
- Specific concerns: ${concerns || "none stated"}

THE FIELDWORK STATE (what the team has actually cleared — the ONLY evidence you may rely on):
${wsTable}

Write the deal brief. Structure it EXACTLY as:

## English
**Deal brief — <target, deal type>**
1. **State of play** (3-5 sentences: overall coverage across the three scopes, which areas are substantially cleared, where the work is thin — name the workstream codes).
2. **What the open items mean for this deal** (the 3-6 still-open areas that matter MOST for THIS deal type — for a lender weigh cash, debt, receivables; for an acquirer weigh legal title, key people, QoE — and what specifically could be hiding in each).
3. **Conditions before money moves** (3-6 concrete conditions / confirmations, tied to the open areas).
4. **Deal-breaker watch list** (2-4 named observations that, if confirmed, reprice or kill THIS deal — framed as hypotheses to close out, NOT as findings).
5. **Recommendation** (one honest sentence: proceed / proceed with conditions / hold — driven by coverage + concerns, never a hidden finding).

## العربية
<نفس الموجز بالعربية الفصحى المهنية — نفس الأقسام الخمسة>

Hard rules:
1. Ground EVERY statement in the fieldwork table and the concerns — you know which areas are cleared and which are not; you do NOT know what was found. Never assert a finding that was not ticked.
2. The workstream codes (e.g. LEG-01, OPS-03, FIN-RCV) are the team's language — quote them.
3. Decision-grade prose: no filler, no disclaimers about being an AI, 500-700 words per language.
4. Arabic is a professional rendition, not a literal translation.
5. Markdown only — no code fences around the whole answer.`

    const user = [
      "Write the deal brief now.",
      notes ? `--- OPEN ISSUES THE TEAM NOTED ---\n${notes}` : "",
      "If a workstream shows 0/N cleared, treat it as an OPEN area — that is the whole point of the brief.",
    ]
      .filter(Boolean)
      .join("\n")

    emit?.({ i: 1, id: "writing" })
    const result = await generateOnce({
      thinking: true,
      tuning: AI_TUNING.dealBrief, // v42 — grounded one-page decision memo
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    })

    const draft = result?.text?.trim() ?? ""
    if (!result || !draft)
      return { ok: false as const, error: "The brief returned nothing — try again", status: 502 }
    emit?.({ i: 2, id: "done" })
    return { ok: true as const, payload: { draft, model: result.modelUsed, engine: result.engine ?? "none" } }
  }

  if (wantsProgress(req)) {
    return sseProgress((emit) => run(emit))
  }

  try {
    const out = await run(null)
    if (!out.ok) return NextResponse.json({ error: out.error }, { status: out.status })
    return NextResponse.json(out.payload)
  } catch (e) {
    console.error("[dd-brief]", e)
    return NextResponse.json({ error: "The brief failed — try again" }, { status: 500 })
  }
}
