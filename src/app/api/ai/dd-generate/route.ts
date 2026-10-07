import { NextRequest } from "next/server"
import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { getSessionUser } from "@/lib/auth"
import { generateOnce } from "@/lib/ai"
import { normalizeModelId, resolveModel, type AiModelId } from "@/lib/models"
import { DD_SECTIONS } from "@/lib/dd"

export const runtime = "nodejs"
export const maxDuration = 240

/** v39 — AI Due Diligence customizer: describe the TARGET (the company
 *  being bought into, invested in, lent to, or partnered with) and the
 *  deal, and the AI tailors the DD playbook to it — a deal memo, focus
 *  areas, extra field-ready instructions dropped into the right playbook
 *  sections (validated against the real library), and extra information
 *  requests. Always bilingual (EN/AR), grounded in the playbook's scopes
 *  (legal / operational / financial per-account) and real frameworks
 *  (IFRS/IAS, Egyptian law, FRA rules, DD practice).
 *
 *  Non-streaming (one JSON payload) — the client shows a progress state
 *  and applies the result when it lands. */

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
  requestsEn?: unknown
  requestsAr?: unknown
}

const MAX_PROC_TOTAL = 16
const MAX_PROC_PER_SECTION = 3
const MAX_REQUESTS = 8

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
  deal: string
  size: string
  target: string
  concerns: string
}): string {
  const sectionList = DD_SECTIONS.map((s) => `${s.id} (${s.code} — ${s.title.en} [${s.scope}])`).join("\n")
  const dealText =
    body.deal === "acquisition"
      ? "a buy-side acquisition (the user is considering BUYING control of this company)"
      : body.deal === "investment"
        ? "a minority investment (the user is considering INVESTING in a non-controlling stake)"
        : body.deal === "lending"
          ? "a lending / credit decision (the user is considering LENDING to this company)"
          : "a partnership or joint venture (the user is considering PARTNERING with this company)"
  const sizeText =
    body.size === "sme"
      ? "a small/medium owner-managed entity (lean structures, founder-centric)"
      : body.size === "large"
        ? "a large or listed entity (full structures, regulated reporting)"
        : "a mid-market entity (established structures)"
  return `You are the due diligence engagement leader of a Big-4 style advisory team. Tailor the firm's standard due diligence playbook to ONE specific target and ONE specific deal.

THE DEAL
- Type: ${dealText}
- Target size: ${sizeText}
- The target company: ${body.target}
- Specific concerns: ${body.concerns || "none stated — infer the target's top deal risks from its description"}

THE PLAYBOOK'S SECTIONS (sectionId — title [scope]). Extra instructions may ONLY target these sectionIds:
${sectionList}

Write the tailored supplement and return STRICT JSON ONLY (no prose, no markdown fences) with exactly this shape:
{
  "summaryEn": "140-220 word deal memo: what kind of deal this is, what the diligence must resolve before money moves, and the three questions that decide it",
  "summaryAr": "نفس المذكرة بالعربية الفصحى المهنية (140-220 كلمة)",
  "focusEn": ["3-6 focus areas, each one concrete sentence naming the risk and where it hides"],
  "focusAr": ["نفس مناطق التركيز بالعربية"],
  "procedures": [
    { "sectionId": "one of the ids above", "ref": "IFRS 15 / Egyptian Labor Law / DD practice — a real framework only", "textEn": "One field-ready diligence instruction, specific to THIS target (what to obtain, inspect, reconcile, or ask)", "textAr": "نفس التعليمة بالعربية" }
  ],
  "requestsEn": ["3-6 documents to demand from THIS target's data room that the standard list misses"],
  "requestsAr": ["نفس المستندات بالعربية"]
}

Hard rules:
1. 8-16 procedures total, concentrated on the sections that matter MOST for this deal's risks (for a lending deal, weigh financial scope sections like debt, receivables, cash; for an acquisition, weigh legal title, key people and QoE too). Never more than 3 per section.
2. Every instruction must be performable and evidence-based (obtain X, reconcile Y to Z, confirm with W, inspect, test, quantify) — never generic filler like "assess the risks".
3. Ground refs in real frameworks only: IFRS/IAS numbers, Egyptian law (Companies Law 159/1981, Labor Law 14/2025, IP Law 82/2002, VAT Law 67/2016...), or "DD practice". Never invent clause numbers.
4. The instructions must reflect the deal type: what a lender needs differs from what an acquirer needs.
5. Bilingual: textEn and textAr carry the same professional content (not literal translations).
6. JSON only. Double quotes. No trailing commas. No comments.`
}

export async function POST(req: NextRequest) {
  // one-shot generation — the draft policy guards the quota
  const limited = aiRateLimit(req, AI_POLICIES.draft)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) return Response.json({ error: "unauthenticated" }, { status: 401 })

  let body: {
    deal?: unknown
    size?: unknown
    target?: unknown
    concerns?: unknown
    model?: unknown
  }
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 })
  }

  const deal = ["acquisition", "investment", "lending", "partnership"].includes(String(body.deal))
    ? String(body.deal)
    : "acquisition"
  const size = body.size === "sme" || body.size === "large" ? body.size : "mid"
  const target = String(body.target ?? "").trim().slice(0, 900)
  if (target.length < 8) return Response.json({ error: "target is required" }, { status: 400 })
  const concerns = String(body.concerns ?? "").trim().slice(0, 900)

  // v40 — GLM 5.3 Flash is the site's main model; unknown/legacy ids normalize to it
  let model: AiModelId = normalizeModelId(body.model)
  model = resolveModel(model, false)

  // v39.0.2 — small keyless engines (community pool on zero-config deploys)
  // sometimes wrap the JSON in prose or return a thin answer. One automatic
  // retry with a firmer instruction recovers most of those instead of
  // surfacing a 502 to the user.
  let result: Awaited<ReturnType<typeof generateOnce>> = null
  let parsed: RawTailor | null = null
  for (let attempt = 0; attempt < 2; attempt++) {
    const reminder =
      attempt === 0
        ? "Tailor the due diligence playbook for this target and deal now. Return the JSON object only."
        : "Your previous answer was NOT valid strict JSON (or was too thin). Answer AGAIN with the complete JSON object ONLY — no prose before or after, no markdown fences, 8-16 procedures, double quotes, no trailing commas."
    result = await generateOnce({
      model,
      thinking: true,
      messages: [
        { role: "system", content: tailorPrompt({ deal, size, target, concerns }) },
        { role: "user", content: reminder },
      ],
    })
    if (!result || !result.text.trim()) continue
    parsed = extractJson(result.text) as unknown as RawTailor | null
    if (parsed) break
  }

  if (!result || !result.text.trim()) {
    return Response.json({ error: "The AI could not tailor the playbook — please try again." }, { status: 502 })
  }

  if (!parsed) {
    return Response.json({ error: "The AI answer was unreadable — please try again." }, { status: 502 })
  }

  /* ---- validate + normalize against the real playbook sections ---- */
  const validIds = new Set(DD_SECTIONS.map((s) => s.id))
  const perSection = new Map<string, number>()

  const procs: { id: string; sectionId: string; ref?: string; text: { en: string; ar: string } }[] = []
  if (Array.isArray(parsed.procedures)) {
    for (const raw of parsed.procedures as RawProc[]) {
      if (procs.length >= MAX_PROC_TOTAL) break
      const sectionId = typeof raw?.sectionId === "string" ? raw.sectionId.trim() : ""
      if (!validIds.has(sectionId)) continue
      const used = perSection.get(sectionId) ?? 0
      if (used >= MAX_PROC_PER_SECTION) continue
      const textEn = asText(raw.textEn, 460)
      const textAr = asText(raw.textAr, 460)
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
    .map((f) => asText(f, 260))
    .filter(Boolean)
    .slice(0, 6)
  const focusAr = (Array.isArray(parsed.focusAr) ? parsed.focusAr : [])
    .map((f) => asText(f, 260))
    .filter(Boolean)
    .slice(0, 6)
  const requestsEn = (Array.isArray(parsed.requestsEn) ? parsed.requestsEn : [])
    .map((f) => asText(f, 220))
    .filter(Boolean)
    .slice(0, MAX_REQUESTS)
  const requestsAr = (Array.isArray(parsed.requestsAr) ? parsed.requestsAr : [])
    .map((f) => asText(f, 220))
    .filter(Boolean)
    .slice(0, MAX_REQUESTS)

  const summaryEn = asText(parsed.summaryEn, 1600)
  const summaryAr = asText(parsed.summaryAr, 1600)

  if (!summaryEn && !summaryAr && procs.length === 0) {
    return Response.json({ error: "The AI returned an empty customization — please try again." }, { status: 502 })
  }
  if (procs.length < 4) {
    return Response.json({ error: "The AI answer was too thin — please try again." }, { status: 502 })
  }

  return Response.json({
    tailor: {
      id: "",
      summary: { en: summaryEn, ar: summaryAr },
      focus: focusEn.map((en, i) => ({ en, ar: focusAr[i] ?? focusAr[0] ?? en })).filter((f) => f.en && f.ar),
      procs,
      requests: requestsEn
        .map((en, i) => ({ en, ar: requestsAr[i] ?? requestsAr[0] ?? en }))
        .filter((r) => r.en && r.ar),
      model: result.modelUsed,
      engine: result.engine ?? "none",
    },
  })
}
