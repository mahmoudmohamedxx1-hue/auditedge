import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { NextRequest, NextResponse } from "next/server"
import { generateOnce } from "@/lib/ai"
import { normalizeModelId } from "@/lib/models"
import { getSessionUser } from "@/lib/auth"

export const runtime = "nodejs"
export const maxDuration = 120

/** Key Audit Matters drafter (ISA 701 / ESA 701, improvement #8).
 *  Takes the matter, why it is significant and how it was addressed in the
 *  audit, and returns a bilingual (EN + AR) draft KAM built on the standard's
 *  structure. Non-streaming: a single structured memo. */
export async function POST(req: NextRequest) {
  // v21: per-IP sliding-window guard — protects the AI quota if the URL leaks
  const limited = aiRateLimit(req, AI_POLICIES.draft)
  if (limited) return limited

  try {
    const me = await getSessionUser()
    if (!me) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

    const body = (await req.json()) as {
      topic?: string
      entity?: string
      periodEnd?: string
      whySignificant?: string
      howAddressed?: string
      listed?: boolean
      model?: string
    }

    const topic = body.topic?.trim()
    const entity = body.entity?.trim() || "the Company"
    const periodEnd = body.periodEnd?.trim() || "31 December 2025"
    const why = body.whySignificant?.trim()
    const how = body.howAddressed?.trim()

    if (!topic) return NextResponse.json({ error: "Choose the key audit matter first" }, { status: 400 })
    if (!why || why.length < 10)
      return NextResponse.json({ error: "Describe why the matter is significant (a few words at least)" }, { status: 400 })
    if (!how || how.length < 10)
      return NextResponse.json({ error: "Describe how the matter was addressed in the audit" }, { status: 400 })


    const system = `You are a senior external auditor drafting Key Audit Matters (KAMs) under ISA 701 (Communicating Key Audit Matters in the Independent Auditor's Report) and the identical Egyptian standard ESA 701 of PM Decree 3725/2025, for the auditor's report of ${entity} for the period ended ${periodEnd}.

Rules you must follow exactly:
1. A KAM describes: (a) THE MATTER — what it is and why it was considered a key audit matter; (b) WHY IT WAS CONSIDERED SIGNIFICANT — significant risk, or significant area of judgment / estimation uncertainty, tied to the entity's facts; (c) HOW IT WAS ADDRESSED IN THE AUDIT — the specific procedures performed. The KAM does NOT give a separate opinion on the matter.
2. Never imply the matter is an uncorrected misstatement, and never use wording that could be read as a qualification — a material misstatement belongs in the opinion section, not in a KAM.
3. Use professional, objective language; reference the applicable IFRS/EAS by number where relevant; keep the whole KAM tight (120–200 words per language).
4. Write in the passive audit-report register ("We considered…", "Our procedures included…").

Return EXACTLY this markdown structure and nothing else:

## English
**Key Audit Matter — <topic in English>**
<matter identification paragraph — 1-3 sentences describing the matter and the accounting involved>
<why it was a KAM — significance: significant risk / material judgment / estimation uncertainty / management bias risk, tied to the entity's facts>
<how it was addressed — the audit response: procedures, evidence sources, specialists, sampling>
*(ISA 701 / ESA 701)*

## العربية
**المسألة الجوهرية للمراجعة — <topic in Arabic>**
<the same three-part structure in professional Arabic فصحى مهنية>
*(ISA 701 / ESA 701)*`

    const user = `Draft the KAM now.

Matter (topic): ${topic}
Entity: ${entity}
Period end: ${periodEnd}
Why it is significant (auditor's raw notes): ${why}
How it was addressed in the audit (auditor's raw notes): ${how}
${body.listed ? "The entity is listed — KAM communication is mandatory." : "The entity is not listed — KAMs are reported voluntarily / by arrangement."}`

    // v40 — GLM 5.3 Flash is the site's main model; unknown/legacy ids normalize to it
    const model = normalizeModelId(body.model)
    const result = (await Promise.race([
      generateOnce({
        model,
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
      }),
      new Promise<never>((_, rej) => setTimeout(() => rej(new Error("Drafting timed out — try again")), 90_000)),
    ])) as { text: string } | null

    const draft = String(result?.text ?? "").trim()
    if (!draft) return NextResponse.json({ error: "The drafter returned nothing — try again" }, { status: 502 })

    return NextResponse.json({ draft })
  } catch (e) {
    console.error("[kam]", e)
    return NextResponse.json(
      { error: e instanceof Error && e.message ? e.message : "Could not draft the KAM" },
      { status: 500 }
    )
  }
}
