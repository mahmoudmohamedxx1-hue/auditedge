import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { NextRequest, NextResponse } from "next/server"
import { getSessionUser } from "@/lib/auth"
import { generateOnce } from "@/lib/ai"
import { AI_TUNING } from "@/lib/ai-tuning"

export const runtime = "nodejs"
export const maxDuration = 60

/** POST /api/ai/translate — one-tap EN↔AR translation of a tutor answer.
 *  v21: the core study action for a bilingual Egyptian exam candidate —
 *  SOXE/EEC papers are English while the Egyptian standards texts are
 *  Arabic, so answers often need to live in the other language.
 *  Body: { text, target: "en" | "ar" } */
export async function POST(req: NextRequest) {
  // v21: per-IP sliding-window guard — protects the AI quota if the URL leaks
  const limited = aiRateLimit(req, AI_POLICIES.draft)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { text?: unknown; target?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const text = typeof body?.text === "string" ? body.text.trim() : ""
  const target = body?.target === "en" ? "en" : body?.target === "ar" ? "ar" : null
  if (!text) return NextResponse.json({ error: "text required" }, { status: 400 })
  if (text.length > 12_000) return NextResponse.json({ error: "text too long" }, { status: 400 })
  if (!target) return NextResponse.json({ error: 'target must be "en" or "ar"' }, { status: 400 })

  try {
    const res = await generateOnce({
      tuning: AI_TUNING.translate, // v41 — translation fidelity, structure preserved
      messages: [
        {
          role: "user",
          content: [
            `Translate the following audit-study answer into ${target === "ar" ? "Arabic (Egyptian professional register)" : "English (professional audit register)"}.`,
            "Rules:",
            "- Preserve ALL markdown structure (headings, lists, tables, bold, italics) exactly as given.",
            "- Keep standard codes (ISA 315, IFRS 9, EAS 47, ESQM 1) untranslated, and established technical terms in parentheses when first used in the target language.",
            "- Keep numbers, amounts, dates and currencies unchanged.",
            "- Do not add commentary, preambles or notes — reply with the translation only.",
            "",
            text,
          ].join("\n"),
        },
      ],
    })
    const translation = res?.text?.trim()
    if (!translation) {
      return NextResponse.json({ error: "Translation produced no output — try again" }, { status: 502 })
    }
    return NextResponse.json({ translation })
  } catch (e) {
    console.error("[translate]", e)
    return NextResponse.json({ error: "Translation failed — try again" }, { status: 500 })
  }
}
