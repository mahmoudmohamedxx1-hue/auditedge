import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { NextRequest, NextResponse } from "next/server"
import { getSessionUser } from "@/lib/auth"
import { generateOnce } from "@/lib/ai"
import { engagementBundleMd, type Engagement } from "@/lib/engagement"

export const runtime = "nodejs"
export const maxDuration = 120

/** POST /api/ai/eqr — AI engagement-quality review of the whole file.
 *  v21: the client serializes its engagement (tick-offs, WP refs, findings,
 *  PM/CTT, sign-offs, GC, risk matrix) into a close-out bundle; the reviewer
 *  responds like an EQR partner would (ISQM 1 / ISA 220 hot-review lens):
 *  what breaks the file, what's missing, what's good discipline. */
export async function POST(req: NextRequest) {
  // v21: per-IP sliding-window guard — protects the AI quota if the URL leaks
  const limited = aiRateLimit(req, AI_POLICIES.draft)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { engagement?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const eng = body?.engagement as Engagement | undefined
  if (!eng || typeof eng !== "object" || typeof eng.client !== "string") {
    return NextResponse.json({ error: "engagement payload required" }, { status: 400 })
  }

  // defensive: cap the serialized payload (findings + procedures could grow)
  // and default every record/array field — a partial engagement payload
  // (e.g. missing `procedures`) must never 500 the reviewer (v39.0.2)
  const safeEng: Engagement = {
    ...eng,
    procedures:
      eng.procedures && typeof eng.procedures === "object" ? eng.procedures : {},
    pbc: eng.pbc && typeof eng.pbc === "object" ? eng.pbc : {},
    signoffs: eng.signoffs && typeof eng.signoffs === "object" ? eng.signoffs : {},
    findings: (Array.isArray(eng.findings) ? eng.findings : []).slice(0, 80),
  }

  const bundle = engagementBundleMd(safeEng)

  try {
    const res = await generateOnce({
      messages: [
        {
          role: "user",
          content: [
            "You are the engagement quality reviewer (EQR partner) of an Egyptian external audit firm, reviewing a junior team's simulated audit file inside a learning platform. The file state is a close-out bundle below.",
            "",
            "Write a partner-level EQR review in the SAME LANGUAGE AS THE BUNDLE'S CLIENT NAME SUGGESTS — default to English, but reply fully in Arabic if the bundle contains Arabic content or the client name is Arabic.",
            "Structure it as:",
            "1. **File-breakers** — what would embarrass the firm at regulator/litigation level (unsigned sections, missing WP refs, N/A without reasons, SAD at/above PM, GC indicators with pending conclusion).",
            "2. **Judgment risks** — materiality rationale quality, risk-matrix gaps (high IR × high CR without response), qualitative findings ignored, sampling/JE-testing gaps.",
            "3. **Good discipline** — what the team did right (be specific, 2-4 bullets).",
            "4. **The one fix first** — the single highest-leverage action before the file assembles (ISA 230.14).",
            "",
            "Rules: quote the specific section codes (AP-xx) and numbers from the bundle; never invent facts not in the bundle; 220-380 words; markdown with bold key terms.",
            "",
            "--- CLOSE-OUT BUNDLE ---",
            bundle,
          ].join("\n"),
        },
      ],
    })
    const review = res?.text?.trim()
    if (!review) {
      return NextResponse.json({ error: "The reviewer produced no output — try again" }, { status: 502 })
    }
    return NextResponse.json({ review })
  } catch (e) {
    console.error("[eqr]", e)
    return NextResponse.json({ error: "The review failed — try again" }, { status: 500 })
  }
}
