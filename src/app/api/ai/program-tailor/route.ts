import { NextRequest } from "next/server"
import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { getSessionUser } from "@/lib/auth"
import { generateOnce } from "@/lib/ai"
import { AI_TUNING } from "@/lib/ai-tuning"
import { normalizeModelId, resolveModel, type AiModelId } from "@/lib/models"
import { sseProgress, wantsProgress, type ProgressEmit } from "@/lib/ai-sse"
import { PROGRAM_SECTIONS } from "@/lib/program"

export const runtime = "nodejs"
export const maxDuration = 240

/** v28 — AI program customizer: describe the client (industry, size, listed
 *  status, systems, specific concerns) and the AI tailors the workspace's
 *  audit program to it — an engagement memo, focus areas, extra tickable
 *  procedures dropped straight into the right program sections, and extra
 *  PBC requests. Always bilingual, grounded in the ISAs + the Egyptian
 *  standards (PM Decree 3725/2025) + IFRS/EAS.
 *
 *  Non-streaming (one JSON payload) — the client shows a progress state and
 *  applies the result to the engagement when it lands. */

type RawProc = {
  sectionId?: unknown
  ref?: unknown
  textEn?: unknown
  textAr?: unknown
}
type RawTailor = {
  summaryEn?: unknown
  summaryAr?: unknown
  focusEn?: unknown
  focusAr?: unknown
  procedures?: unknown
  pbcEn?: unknown
  pbcAr?: unknown
}

const MAX_PROC_TOTAL = 16
const MAX_PROC_PER_SECTION = 4
const MAX_PBC = 8

/** Pull the first JSON object out of a model answer (handles ```json fences,
 *  leading prose, trailing commentary). */
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

const asText = (v: unknown, max = 600): string =>
  typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : ""

function tailorPrompt(body: {
  sector: string
  size: string
  listed: boolean
  systems: string
  concerns: string
}): string {
  const sectionList = PROGRAM_SECTIONS.map((s) => `${s.id} (${s.code} — ${s.title.en})`).join("\n")
  const sizeText =
    body.size === "sme"
      ? "a small/medium entity (owner-managed, lean finance function)"
      : body.size === "mid"
        ? "a mid-market entity (established finance function, likely FRA-supervised)"
        : "a large/listed entity (full finance department, FRA-listed, IFRS/EAS reporter)"
  return `You are the senior audit manager of an Egyptian external audit firm. Tailor the firm's standard ISA-based audit program to ONE specific client.

CLIENT PROFILE
- Industry / sector: ${body.sector}
- Size: ${sizeText}
- FRA-listed or regulated: ${body.listed ? "yes" : "no"}
- ERP / accounting systems: ${body.systems || "not stated — assume a mid-range ERP with manual journals"}
- Specific concerns or fraud risks: ${body.concerns || "none stated — infer the sector's top fraud risks"}

THE PROGRAM'S SECTIONS (sectionId — title). Extra procedures may ONLY target these sectionIds:
${sectionList}

Write a tailored supplement and return STRICT JSON ONLY (no prose, no markdown fences) with exactly this shape:
{
  "summaryEn": "120-200 word engagement memo: how this client's risks change the audit approach",
  "summaryAr": "نفس المذكرة بالعربية الفصحى المهنية (120-200 كلمة)",
  "focusEn": ["3-6 focus areas, each one concrete sentence"],
  "focusAr": ["نفس مناطق التركيز بالعربية"],
  "procedures": [
    { "sectionId": "one of the ids above", "ref": "ISA 315", "textEn": "One field-ready audit procedure, specific to THIS client (what to obtain/test/compare)", "textAr": "نفس الإجراء بالعربية" }
  ],
  "pbcEn": ["2-5 documents to request from this specific client that the standard list misses"],
  "pbcAr": ["نفس المستندات بالعربية"]
}

Hard rules:
1. 10-16 procedures total, spread across the 3-6 sections that matter MOST for this client's risks. Never more than 4 per section.
2. Every procedure must be performable and evidence-based (obtain X, agree Y to Z, recompute, inspect, confirm, walk through) — never generic filler like "review internal controls".
3. Ground refs in real standards: ISA/ESA numbers, IFRS/IAS/EAS where relevant. Never invent clause numbers.
4. Bilingual: textEn and textAr carry the same professional content (not literal translations).
5. JSON only. Double quotes. No trailing commas. No comments.`
}

export async function POST(req: NextRequest) {
  // one-shot generation — the draft policy guards the quota
  const limited = aiRateLimit(req, AI_POLICIES.draft)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) return Response.json({ error: "unauthenticated" }, { status: 401 })

  let body: {
    sector?: unknown
    size?: unknown
    listed?: unknown
    systems?: unknown
    concerns?: unknown
    model?: unknown
  }
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 })
  }

  const sector = String(body.sector ?? "").trim().slice(0, 120)
  if (!sector) return Response.json({ error: "sector is required" }, { status: 400 })
  const size = body.size === "mid" || body.size === "listed" ? body.size : "sme"
  const listed = body.listed === true || body.listed === "true"
  const systems = String(body.systems ?? "").trim().slice(0, 200)
  const concerns = String(body.concerns ?? "").trim().slice(0, 600)

  // v40 — GLM 5.3 Flash is the site's main model; unknown/legacy ids normalize to it
  let model: AiModelId = normalizeModelId(body.model)
  model = resolveModel(model, false)

  /** v42 — one core, two transports (plain JSON + SSE progress) */
  const run = async (emit: ProgressEmit | null) => {
    emit?.({ i: 0, id: "reading" })
    emit?.({ i: 1, id: "writing" })
    const result = await generateOnce({
      model,
      thinking: true,
      tuning: AI_TUNING.programTailor, // v41 — client-tailored professional JSON, capped
      messages: [
        { role: "system", content: tailorPrompt({ sector, size, listed, systems, concerns }) },
        {
          role: "user",
          content: `Tailor the audit program for this client now. Return the JSON object only.`,
        },
      ],
    })

    if (!result || !result.text.trim()) {
      return { ok: false as const, error: "The AI could not tailor the program — please try again.", status: 502 }
    }

    emit?.({ i: 2, id: "structuring" })
    const parsed = extractJson(result.text) as unknown as RawTailor | null
    if (!parsed) {
      return { ok: false as const, error: "The AI answer was unreadable — please try again.", status: 502 }
    }

    /* ---- validate + normalize against the real program sections ---- */
    const validIds = new Set(PROGRAM_SECTIONS.map((s) => s.id))
    const perSection = new Map<string, number>()

    const procs: { id: string; sectionId: string; ref?: string; text: { en: string; ar: string } }[] = []
    if (Array.isArray(parsed.procedures)) {
      for (const raw of parsed.procedures as RawProc[]) {
        if (procs.length >= MAX_PROC_TOTAL) break
        const sectionId = typeof raw?.sectionId === "string" ? raw.sectionId.trim() : ""
        if (!validIds.has(sectionId)) continue
        const used = perSection.get(sectionId) ?? 0
        if (used >= MAX_PROC_PER_SECTION) continue
        const textEn = asText(raw.textEn, 420)
        const textAr = asText(raw.textAr, 420)
        if (textEn.length < 12 || textAr.length < 12) continue
        perSection.set(sectionId, used + 1)
        procs.push({
          id: `ai-${procs.length + 1}`,
          sectionId,
          ref: asText(raw.ref, 40) || undefined,
          text: { en: textEn, ar: textAr },
        })
      }
    }

    const focusEn = (Array.isArray(parsed.focusEn) ? parsed.focusEn : [])
      .map((f) => asText(f, 240))
      .filter(Boolean)
      .slice(0, 6)
    const focusAr = (Array.isArray(parsed.focusAr) ? parsed.focusAr : [])
      .map((f) => asText(f, 240))
      .filter(Boolean)
      .slice(0, 6)
    const pbcEn = (Array.isArray(parsed.pbcEn) ? parsed.pbcEn : [])
      .map((f) => asText(f, 200))
      .filter(Boolean)
      .slice(0, MAX_PBC)
    const pbcAr = (Array.isArray(parsed.pbcAr) ? parsed.pbcAr : [])
      .map((f) => asText(f, 200))
      .filter(Boolean)
      .slice(0, MAX_PBC)

    const summaryEn = asText(parsed.summaryEn, 1400)
    const summaryAr = asText(parsed.summaryAr, 1400)

    if (!summaryEn && !summaryAr && procs.length === 0) {
      return { ok: false as const, error: "The AI returned an empty customization — please try again.", status: 502 }
    }

    /* attach each PBC suggestion to the section it serves (by keyword overlap,
       defaulting to risk assessment) */
    const pbc: { sectionId: string; text: { en: string; ar: string } }[] = []
    pbcEn.forEach((en, i) => {
      const ar = pbcAr[i] ?? pbcAr[0] ?? en
      const hay = `${en} ${ar}`.toLowerCase()
      const target = /revenue|sales|customer|مبيعات|إيراد/.test(hay)
        ? "revenue"
        : /inventory|stock|مخزون|جرد/.test(hay)
          ? "inventory"
          : /payroll|hr|رواتب|أجور/.test(hay)
            ? "payroll"
            : /fixed asset|الأصول الثابتة|الاصول/.test(hay)
              ? "fixed-assets"
              : /bank|treasury|نقدية|بنك/.test(hay)
                ? "cash"
                : "risk-assessment"
      if (validIds.has(target)) pbc.push({ sectionId: target, text: { en, ar } })
    })

    return {
      ok: true as const,
      payload: {
        tailor: {
          summary: { en: summaryEn, ar: summaryAr },
          focus: focusEn.map((en, i) => ({ en, ar: focusAr[i] ?? focusAr[0] ?? en })).filter((f) => f.en && f.ar),
          procs,
          pbc,
          model: result.modelUsed,
          engine: result.engine ?? "none",
        },
      },
    }
  }

  if (wantsProgress(req)) {
    return sseProgress((emit) => run(emit))
  }

  try {
    const out = await run(null)
    if (!out.ok) return Response.json({ error: out.error }, { status: out.status })
    return Response.json(out.payload)
  } catch (e) {
    console.error("[program-tailor]", e)
    return Response.json({ error: "The customization failed — please try again." }, { status: 500 })
  }
}
