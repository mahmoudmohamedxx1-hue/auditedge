import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { generateOnce, type EngineMessage } from "@/lib/ai"
import { getSessionUser } from "@/lib/auth"
import { DEFAULT_MODEL, isAiModelId, resolveModel, type AiModelId } from "@/lib/models"
import { extractJsonObject, normalizeAiQuestionnaire } from "@/lib/toc/normalize"
import { NextRequest } from "next/server"

export const runtime = "nodejs"
export const maxDuration = 120

/** v37 — AI Test-of-Control generator.
 *
 *  POST { industry, caseContext, lang, model? }
 *  → { questionnaire: TocAiQuestionnaire, model, engine }
 *
 *  The user describes ANY industry (however niche) and the entity's case —
 *  size, systems, geographies, specific worries — and the AI designs a
 *  manager-interview ICQ (COSO 2013 six-domain structure, weights,
 *  criticals, probe hints) plus corroborating tests of controls. The reply
 *  is forced to JSON, then hardened through normalize.ts, so the client
 *  always receives a structurally-valid questionnaire. Two attempts are
 *  made before giving up. */

function buildPrompt(lang: "en" | "ar", industry: string, caseContext: string): { system: string; user: string } {
  if (lang === "ar") {
    return {
      system: `أنت "مصمم اختبار الرقابة" في منصة AuditEdge — مراجع حسابات أول ومتخصص في استبيانات الرقابة الداخلية (COSO 2013 وISA 315/330 ومعايير COBIT لأنظمة تقنية المعلومات)، بخبرة ميدانية في تصميم استبيانات تُطرح على الإدارة وتحديد قوة بيئة الرقابة.

المهمة: صمّم استبيان رقابة داخلية يُطرح على المديرين + إجراءات مراجعة corroborating لكل صناعة وكل حالة توصف لك.

الصناعة/الكيان: "${industry}"
${caseContext ? `وصف الحالة:\n${caseContext}\n` : ""}
أعد الآن JSON صالحًا فقط — بدون أي نص خارجه وبدون أسوار markdown — بالبنية التالية حرفيًا:

{
  "title": "عنوان قصير للاستبيان",
  "scope": "جملتان إلى ثلاث: ما فهمته من الكيان وحالته",
  "risks": ["أهم 4-6 مخاطر رقابية خاصة بهذا الكيان تحديدًا"],
  "procedures": [
    {"title": "عنوان الإجراء", "detail": "تفصيل الإجراء", "type": "inquiry أو inspection أو observation أو reperformance"}
  ],
  "questions": [
    {"domain": "control-environment", "q": "السؤال الموجه للمدير", "hint": "ما الذي تستقصيه وما شكل الإجابة الجيدة", "weight": 3, "critical": true}
  ]
}

قواعد صارمة:
1. عدد الأسئلة 14-18 سؤالًا، موزعة على المجالات الستة جميعها (control-environment / risk-assessment / control-activities / info-communication / monitoring / it-cyber) — أبقِ أسماء المجالات بالإنجليزية كما وردت.
2. كل سؤال يُطرح على المدير مباشرة وقابل للإجابة بنعم/لا، ومحدد بالصناعة والحالة الموصوفين — لا أسئلة عامة إنشائية.
3. weight: 3 = رقابة أساسية لا تقوم البيئة بدونها، 2 = مهمة، 1 = مساندة. اجعل 2-4 أسئلة فقط critical: true (نقاط الانهيار).
5. hint جملة واحدة تشرح ما يستقصيه المحاور وما تبدو عليه الإجابة الجيدة.
5. procedures: 6-8 إجراءات مراجعة تثبت إجابات المديرين، موزعة على أنواع الأدلة الأربعة.
6. استخدم مصطلحات COSO وISA 315/330 بدقة. لا تخترع فقرات معايير.
7. الرد كله JSON صالح فقط.`,
      user: `صمّم الاستبيان والإجراءات الآن لهذا الكيان: ${industry}${caseContext ? `\n\nالحالة: ${caseContext}` : ""}`,
    }
  }
  return {
    system: `You are the "Test of Control designer" inside AuditEdge — a senior external auditor and internal-control questionnaire specialist (COSO 2013 components, ISA 315/320/330 risk-and-response vocabulary, COBIT for IT general controls) who builds manager-interview ICQs that decide whether a firm's control environment can be relied upon.

TASK: design a manager-interview internal control questionnaire (ICQ) plus corroborating tests of controls, tailored to the described industry and case.

INDUSTRY / ENTITY: "${industry}"
${caseContext ? `CASE DESCRIPTION:\n${caseContext}\n` : ""}
Return ONLY valid JSON — no prose around it, no markdown fences — with exactly this shape:

{
  "title": "short questionnaire title",
  "scope": "2-3 sentences: what you understood of this entity and its case",
  "risks": ["the 4-6 control-risk areas that matter for THIS entity specifically"],
  "procedures": [
    {"title": "procedure title", "detail": "how it is performed", "type": "inquiry | inspection | observation | reperformance"}
  ],
  "questions": [
    {"domain": "control-environment", "q": "the question asked to the manager", "hint": "what to probe / what a good answer sounds like", "weight": 3, "critical": false}
  ]
}

Hard rules:
1. 14-18 questions covering ALL SIX domains (control-environment / risk-assessment / control-activities / info-communication / monitoring / it-cyber).
2. Every question is phrased to be ASKED OUT LOUD to a manager, answerable yes/no, and specific to this industry and case — never generic filler.
3. weight: 3 = keystone control (the environment fails without it), 2 = important, 1 = supporting. Mark critical:true for only 2-4 make-or-break questions.
4. hint: one sentence — what the interviewer should press on and what a good answer sounds like.
5. procedures: 6-8 tests of controls that corroborate the answers, mixing all four evidence types (inquiry / inspection / observation / reperformance).
6. Use COSO 2013 and ISA 315/330 terminology accurately; never invent clause numbers.
7. The entire reply must be the JSON object — nothing else.`,
    user: `Design the questionnaire and procedures now for: ${industry}${caseContext ? `\n\nCase: ${caseContext}` : ""}`,
  }
}

export async function POST(req: NextRequest) {
  const limited = aiRateLimit(req, AI_POLICIES.draft)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) return Response.json({ error: "unauthenticated" }, { status: 401 })

  let body: { industry?: string; caseContext?: string; lang?: string; model?: string }
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 })
  }

  const industry = String(body.industry ?? "").trim()
  if (!industry) return Response.json({ error: "industry is required" }, { status: 400 })
  if (industry.length > 120) return Response.json({ error: "industry name too long" }, { status: 400 })

  const caseContext = String(body.caseContext ?? "").trim().slice(0, 4000)
  const lang: "en" | "ar" = body.lang === "ar" ? "ar" : "en"

  let model: AiModelId = DEFAULT_MODEL
  if (isAiModelId(body.model)) model = body.model
  model = resolveModel(model, false)

  const { system, user } = buildPrompt(lang, industry, caseContext)
  const messages: EngineMessage[] = [
    { role: "system", content: system },
    { role: "user", content: user },
  ]

  // two attempts: reasoning models occasionally wrap JSON or drift schema
  let lastError = "no-response"
  for (let attempt = 0; attempt < 2; attempt++) {
    const result = await generateOnce({ model, thinking: true, messages })
    if (!result || !result.text.trim()) {
      lastError = "no-response"
      continue
    }
    const parsed = extractJsonObject(result.text)
    if (!parsed) {
      lastError = "unparseable-json"
      continue
    }
    const normalized = normalizeAiQuestionnaire(parsed, industry)
    if (!normalized.ok) {
      lastError = normalized.error
      continue
    }
    return Response.json({
      questionnaire: {
        ...normalized.data,
        id: `ai-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
        createdAt: Date.now(),
        input: { industry, caseContext, lang },
      },
      model: result.modelUsed,
      engine: result.engine,
    })
  }

  return Response.json({ error: `generation-failed (${lastError})` }, { status: 502 })
}
