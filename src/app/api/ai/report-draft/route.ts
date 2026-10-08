import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { NextRequest, NextResponse } from "next/server"
import { getSessionUser } from "@/lib/auth"
import { generateOnce } from "@/lib/ai"
import { AI_TUNING } from "@/lib/ai-tuning"
import { engagementBundleMd, type Engagement } from "@/lib/engagement"
import { sseProgress, wantsProgress, type ProgressEmit } from "@/lib/ai-sse"

export const runtime = "nodejs"
export const maxDuration = 240

/** v42 — POST /api/ai/report-draft — the ISA 700 Auditor's Report drafter.
 *
 *  The last mile of the Closing Suite: the user's own engagement file
 *  (findings/SAD, materiality, GC conclusion, sign-offs, risk matrix) plus
 *  the KAMs drafted in the completion section feed a full independent
 *  auditor's report under ISA 700 / ESA 700 — opinion, basis for opinion,
 *  KAM section, EOM, responsibilities — bilingual EN/AR, with the opinion
 *  ladder applied honestly to what the file actually says (never inventing
 *  facts the bundle does not contain).
 *
 *  Progressive transport: X-AI-Progress: 1 → SSE stage events + result. */

type OpinionKind = "auto" | "unmodified" | "qualified" | "adverse" | "disclaimer"

const OPINIONS = new Set<OpinionKind>(["auto", "unmodified", "qualified", "adverse", "disclaimer"])

const OPINION_TEXT: Record<Exclude<OpinionKind, "auto">, string> = {
  unmodified:
    'Draft an UNMODIFIED opinion ("the financial statements present fairly, in all material respects") — but ONLY if the file supports it; if the bundle contradicts it, flag the contradiction in a short italic note under the draft instead of forcing the wording.',
  qualified:
    'Draft a QUALIFIED opinion ("present fairly, in all material respects, except for the effects of the matters described in the Basis for Qualified Opinion paragraph") — build the basis paragraph from the actual uncorrected differences / GC state in the bundle.',
  adverse:
    'Draft an ADVERSE opinion ("do not present fairly") — the basis paragraph must lay out the pervasive effects the bundle actually shows.',
  disclaimer:
    'Draft a DISCLAIMER OF OPINION ("we do not express an opinion") — the basis paragraph must trace the inability to obtain sufficient appropriate evidence the bundle actually shows.',
}

export async function POST(req: NextRequest) {
  const limited = aiRateLimit(req, AI_POLICIES.draft)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: {
    engagement?: unknown
    opinion?: unknown
    framework?: unknown
    kams?: unknown
    eom?: unknown
    notes?: unknown
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const eng = body?.engagement as Engagement | undefined
  if (!eng || typeof eng !== "object" || typeof eng.client !== "string") {
    return NextResponse.json({ error: "engagement payload required" }, { status: 400 })
  }

  const opinion = OPINIONS.has(body.opinion as OpinionKind) ? (body.opinion as OpinionKind) : "auto"
  const framework = body.framework === "eas" ? "eas" : "ifrs"
  const kams = typeof body.kams === "string" ? body.kams.trim().slice(0, 6_000) : ""
  const eom = typeof body.eom === "string" ? body.eom.trim().slice(0, 1_500) : ""
  const notes = typeof body.notes === "string" ? body.notes.trim().slice(0, 1_500) : ""

  // same defensive shape as the EQR route — a partial payload must never 500
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

  /** one core for both transports — emit() is only non-null on the SSE path */
  const run = async (emit: ProgressEmit | null) => {
    emit?.({ i: 0, id: "reading" })
    const bundle = engagementBundleMd(safeEng)

    const system = `You are the signing partner of an Egyptian external audit firm, drafting the INDEPENDENT AUDITOR'S REPORT for ${safeEng.client} (${safeEng.period}) under ISA 700 (Forming an Opinion and Reporting on Financial Statements) and the identical Egyptian ESA 700 of PM Decree 3725/2025, inside a learning platform.

The applicable framework: ${framework === "eas" ? "the Egyptian Accounting Standards (EAS) issued by the Ministry of Finance" : "IFRS Accounting Standards as issued by the International Accounting Standards Board"}.

${opinion === "auto" ? "OPINION: read the close-out bundle and DECIDE the appropriate opinion honestly — unmodified / qualified / adverse / disclaimer — applying the ladder: (a) uncorrected differences below performance materiality and no GC issue → unmodified; (b) material but not pervasive misstatements, or inadequate GC disclosure that is not pervasive → qualified; (c) pervasive misstatements → adverse; (d) inability to obtain sufficient appropriate evidence that is pervasive → disclaimer. State the reasoning in one short italic note under the draft." : `OPINION: ${OPINION_TEXT[opinion]}`}

Required elements, in ISA 700 order: Title (Independent Auditor's Report) · Addressee (Those Charged with Governance of ${safeEng.client}) · Opinion (naming the financial statements and the framework explicitly) · Basis for Opinion (reference to sufficient appropriate evidence, auditor independence and ethical responsibilities) ${kams ? "· Key Audit Matters (use the KAM text provided below, edited only for register)" : "· (no KAM section — none was provided)"} · Responsibilities of Management for the Financial Statements · Auditor's Responsibilities for the Audit of the Financial Statements · ${eom ? "Other Matter(s) drawn from the note below · " : ""}the reporting location and date (leave the signature block as placeholders: [Firm name], [Auditor name], [License no.], [Date]).

Hard rules:
1. Use ONLY facts in the bundle (SAD totals, PM/CTT, GC conclusion, materiality rationale, findings). NEVER invent numbers, disclosures or events.
2. Audit-report register throughout: passive, objective, no marketing language.
3. Quote the materiality numbers and SAD verdict from the bundle in the basis/opinion reasoning where they drive the ladder.
4. Bilingual: full report in English, then the full report in professional Arabic (فصحى مهنية).

Return EXACTLY this markdown structure:
## English
<the complete auditor's report>
${opinion === "auto" ? "*Note — opinion reasoning: <2-3 sentences why this opinion fits the file>*\n" : ""}
## العربية
<التقرير الكامل بالعربية الفصحى المهنية>
*(ISA 700 / ESA 700)*`

    const user = [
      "Draft the auditor's report now.",
      "",
      `Entity: ${safeEng.client} · Period: ${safeEng.period}`,
      kams ? `--- KEY AUDIT MATTERS (drafted in the completion section) ---\n${kams}` : "No KAM text provided — do not invent a KAM section with content.",
      eom ? `--- OTHER MATTER / EOM NOTE ---\n${eom}` : "",
      notes ? `--- ADDITIONAL NOTES ---\n${notes}` : "",
      "",
      "--- CLOSE-OUT BUNDLE (the audit file state) ---",
      bundle,
    ]
      .filter(Boolean)
      .join("\n")

    emit?.({ i: 1, id: "writing" })
    const result = await generateOnce({
      thinking: true,
      tuning: AI_TUNING.reportDraft, // v42 — the strictest register in the site
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
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
    console.error("[report-draft]", e)
    return NextResponse.json({ error: "The draft failed — try again" }, { status: 500 })
  }
}
