import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { NextRequest, NextResponse } from "next/server"
import { getSessionUser } from "@/lib/auth"
import { generateOnce } from "@/lib/ai"
import { AI_TUNING } from "@/lib/ai-tuning"
import { engagementBundleMd, type Engagement } from "@/lib/engagement"
import { sseProgress, wantsProgress, type ProgressEmit } from "@/lib/ai-sse"

export const runtime = "nodejs"
export const maxDuration = 240

/** v42 — POST /api/ai/engagement-docs — the ISA 210 engagement letter and
 *  the ISA 300 planning memo, drafted FROM the active engagement.
 *
 *  kind: "letter" — the ISA 210 / ESA 210 engagement letter with every
 *         required element (objective and scope of the audit, the
 *         applicable framework, the form of the expected report,
 *         responsibilities of management, acknowledgment request for
 *         TCWG, fees/billing placeholders, the note that non-audit
 *         services sit in a separate letter, [Firm] placeholders).
 *  kind: "memo"   — the ISA 300 / ESA 300 audit strategy & planning memo:
 *         scope/timing/direction, the linked materiality, the risk areas
 *         from the client profile, team and expert needs, milestones
 *         (planning → fieldwork → close), deliverables.
 *
 *  Prefilled from the engagement's own facts (client, period, sector, the
 *  AI-tailored client profile, risk matrix so far) and honest placeholders
 *  where the user must fill in (fees, dates, names). Bilingual EN/AR.
 *
 *  Progressive transport: X-AI-Progress: 1 → SSE stage events + result. */

export async function POST(req: NextRequest) {
  const limited = aiRateLimit(req, AI_POLICIES.draft)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { kind?: unknown; engagement?: unknown; extras?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const kind = body.kind === "memo" ? "memo" : "letter"
  const eng = body?.engagement as Engagement | undefined
  if (!eng || typeof eng !== "object" || typeof eng.client !== "string") {
    return NextResponse.json({ error: "engagement payload required" }, { status: 400 })
  }
  const extras = typeof body.extras === "string" ? body.extras.trim().slice(0, 1_500) : ""

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

    const letterSystem = `You are the signing partner of an Egyptian external audit firm, drafting the ENGAGEMENT LETTER for the statutory audit of ${safeEng.client} (${safeEng.period}) under ISA 210 (Agreeing the Terms of Audit Engagements) / ESA 210 of PM Decree 3725/2025, inside a learning platform.

Include EVERY ISA 210.10 element, in professional letter order: letterhead placeholders ([Firm name] · [Address] · [Registration no.]) · date and addressee (Those Charged with Governance of ${safeEng.client}) · the objective and scope of the audit (an independent opinion on the financial statements, prepared for each period) · the applicable framework (IFRS as issued by the IASB / the Egyptian Accounting Standards — mirror what the profile suggests) · the responsibilities of management (preparation and fair presentation, internal control, providing access to all records, confirming completeness of related-party disclosures in writing, safe custody and handover of the auditor's documentation) · the responsibilities of the auditor (reasonable assurance, professional judgment and skepticism, communication of planned scope and timing, the auditor's report) · the form of the expected report (an independent auditor's report under ISA 700) · a request that TCWG ACKNOWLEDGE and reply to confirm the terms (ISA 210.11) · fees and billing placeholders ([Fee basis] · [Billing schedule]) · the note that any non-audit services are covered by a separate letter (IESBA / ES 1 separation) · signature placeholders ([Partner name] · [License no.]).

Rules:
1. Use the client profile facts (sector, size, systems, concerns) to sharpen the scope and risk-relevant sentences — nothing generic beyond the standard's own language.
2. Honest placeholders in [square brackets] for everything the file cannot know (names, fees, dates, addresses) — never invent them.
3. Formal letter register, tight sentences, 350-500 words per language.
4. Bilingual: the full letter in English, then the full letter in professional Arabic (فصحى مهنية).

Return EXACTLY this markdown structure:
## English
<the complete engagement letter>
## العربية
<خطاب التكليف الكامل بالعربية الفصحى المهنية>
*(ISA 210 / ESA 210)*`

    const memoSystem = `You are the engagement partner of an Egyptian external audit firm, writing the AUDIT STRATEGY & PLANNING MEMO for ${safeEng.client} (${safeEng.period}) under ISA 300 (Planning an Audit of Financial Statements) / ESA 300, inside a learning platform. It is addressed to the engagement file, not to the client.

Structure the memo EXACTLY as:
1. **Engagement snapshot** — client, period, sector, structure facts from the profile.
2. **Scope, timing and direction** — what drives this audit (the identified risk areas from the profile and risk matrix), the reporting deadline placeholder, team deployment thinking (interim vs final), and where specialists are needed (IT, valuation — infer honestly from systems/risks, or say none identified).
3. **Materiality** — quote the ISA 320 memo from the bundle if saved; otherwise the plan to set it (benchmark thinking, [to be computed at planning]).
4. **The risk areas and the planned response** — the 4-7 areas that will get the most hours, each one line of risk + one line of response, drawn from the profile's focus areas and the risk matrix.
5. **Milestones** — planning → interim fieldwork ([date]) → final fieldwork ([date]) → close-out and report ([date]) with placeholders.
6. **Deliverables** — the auditor's report (ISA 700), the management letter (ISA 265), KAMs where applicable, other communications to TCWG (ISA 260).

Rules:
1. Ground every risk statement in the profile/risk matrix the bundle shows — never invent transactions, balances or events.
2. Honest placeholders in [square brackets] for dates, hours, names.
3. Internal memo register: direct, partner-voiced, 400-600 words per language.
4. Bilingual: the full memo in English, then the full memo in professional Arabic (فصحى مهنية).

Return EXACTLY this markdown structure:
## English
<the complete planning memo>
## العربية
<مذكرة التخطيط الكاملة بالعربية الفصحى المهنية>
*(ISA 300 / ESA 300)*`

    emit?.({ i: 1, id: "writing" })
    const result = await generateOnce({
      thinking: true,
      tuning: AI_TUNING.engagementDoc, // v42 — formal engagement documents
      messages: [
        {
          role: "system",
          content: kind === "memo" ? memoSystem : letterSystem,
        },
        {
          role: "user",
          content: [
            `Draft the ${kind === "memo" ? "planning memo" : "engagement letter"} now.`,
            extras ? `--- TERMS / NOTES FROM THE TEAM ---\n${extras}` : "",
            "",
            "--- ENGAGEMENT PROFILE (client, sector, systems, concerns, risk matrix) ---",
            bundle,
          ]
            .filter(Boolean)
            .join("\n"),
        },
      ],
    })

    const draft = result?.text?.trim() ?? ""
    if (!result || !draft)
      return { ok: false as const, error: "The drafter returned nothing — try again", status: 502 }
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
    console.error("[engagement-docs]", e)
    return NextResponse.json({ error: "The draft failed — try again" }, { status: 500 })
  }
}
