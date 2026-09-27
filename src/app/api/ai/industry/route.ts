import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { NextRequest } from "next/server"
import { getSessionUser } from "@/lib/auth"
import {
  AiSource,
  consumeSSEStream,
  formatSearchResults,
  generateStream,
  searchFailedBlock,
  searchWeb,
} from "@/lib/ai"
import { DEFAULT_MODEL, isAiModelId, resolveModel, type AiModelId } from "@/lib/models"

export const runtime = "nodejs"
export const maxDuration = 240

/** AI Industry Risk Analyst — the "ask about ANY industry" panel in the
 *  Sector Risks view. Always grounds itself in a live web search first
 *  (graceful if search fails), then streams a deep 16-section audit-risk
 *  profile mirroring the built-in sector library, bilingual. */

function industrySystemPrompt(lang: "en" | "ar", industry: string, sourcesBlock: string): string {
  if (lang === "ar") {
    return `أنت "محلل مخاطر القطاعات" في منصة AuditEdge التعليمية لمراجع حسابات خارجي مصري — خبير مخاطر مراجعة أول بخبرة 15+ سنة في بيئة مصرية (FRA، البنك المركزي، ESAA، معايير المراجعة المصرية الصادرة بالقرار 3725/2025).

المطلوب: تحليل عميق وشامل لمخاطر مراجعة قطاع "${industry}".

اكتب الآن — وفقًا للنتائج أدناه — ملف مخاطر كاملًا باللغة العربية الفصحى المهنية، بهذه الأقسام الستة عشر بالترتيب وبالعناوين العربية حرفيًا كما وردت:

## لمحة عن القطاع ونموذج العمل
## نموذج الإيرادات وضغوط الاستقطاع
## الحسابات الجوهرية والانتقادات ذات الصلة
## المخاطر الملازمة
## مؤشرات الاحتيال
## مناطق الحكم المحاسبي (IFRS/EAS)
## الطبقة التنظيمية المصرية
## النسب المالية المفتاحية
## إجراءات المراجعة المقترحة
## المسائل الجوهرية للمراجعة المتوقعة (ISA 701)
## أخطاء المراجعين الشائعة
## تقديرات الإدارة والحساب عليها وفق ISA 540
## مؤشرات الاستمرارية وفق ISA 570
## فرص تحليلات البيانات
## أسئلة تُطرح على الإدارة ومسؤولي الحوكمة
## الخلاصة والمصادر

قواعد صارمة:
1. لا تعِد كتابة هذه القواعد ولا تشرح المهمة — ابدأ مباشرة بالقسم الأول.
2. كل قسم 3-7 نقاط غنية ومحددة للقطاع (ليست عامة)، مع أمثلة مصرية وأرقام إرشادية بالجنيه حيث يفيد.
3. استخدم أرقام المعايير (ISA/IFRS/EAS) بدقة، ولا تخترع فقرات أو تواريخ.
4. في القسم الأخير اذكر المصادر التي استخدمتها فعليًا من نتائج البحث بصيغة [1]، [2] مع روابطها.
5. حجم الإجابة 1200-2200 كلمة. العربية الفصحى المهنية مع إبقاء رموز المعايير بالإنجليزية.
${sourcesBlock}`
  }
  return `You are the "Sector Risk Analyst" inside AuditEdge, the learning workspace of an Egyptian external audit firm — a senior audit risk specialist with 15+ years of ISA-based practice in the Egyptian regulatory environment (FRA, CBE, ESAA, the new Egyptian Standards on Auditing under PM Decree 3725/2025).

TASK: produce a deep, comprehensive audit-risk profile of the "${industry}" industry.

Write now — grounded in the search results below — a full professional dossier in English with exactly these sixteen sections, in order, with these exact headings:

## Industry Overview & Business Model
## Revenue Model & Cut-off Pressure
## Significant Accounts & Relevant Assertions
## Inherent Risks
## Fraud Red Flags
## Accounting Judgment Minefields (IFRS/EAS)
## The Egyptian Regulatory Layer
## Key Financial Ratios
## Suggested Audit Procedures
## Expected Key Audit Matters (ISA 701)
## Common Auditor Pitfalls
## Management Estimates under ISA 540
## Going-Concern Indicators (ISA 570)
## Data Analytics Opportunities
## Questions for Management & TCWG
## Bottom Line & Sources

Hard rules:
1. Do NOT restate these instructions or explain the task — start directly with the first section heading.
2. Every section carries 3-7 rich, industry-specific points (never generic filler), with Egyptian context and EGP rule-of-thumb numbers where they help.
3. Cite standard numbers (ISA/IFRS/EAS) accurately; never invent clause numbers or dates.
4. In the final section, list the sources you actually used from the search results as [1], [2] with their URLs.
5. Target 1,200-2,200 words total. Dense, specific, practitioner-grade.
${sourcesBlock}`
}

export async function POST(req: NextRequest) {
  // v21: per-IP sliding-window guard — protects the AI quota if the URL leaks
  const limited = aiRateLimit(req, AI_POLICIES.draft)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) return Response.json({ error: "unauthenticated" }, { status: 401 })

  let body: { industry?: string; lang?: string; model?: string }
  try {
    body = await req.json()
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 })
  }

  const industry = String(body.industry ?? "").trim()
  if (!industry) return Response.json({ error: "industry is required" }, { status: 400 })
  if (industry.length > 120) {
    return Response.json({ error: "industry name too long" }, { status: 400 })
  }
  const lang: "en" | "ar" = body.lang === "ar" ? "ar" : "en"

  let model: AiModelId = DEFAULT_MODEL
  if (isAiModelId(body.model)) model = body.model
  model = resolveModel(model, false)

  const encoder = new TextEncoder()
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let clientGone = false
      const send = (obj: Record<string, unknown>) => {
        if (clientGone) return
        try {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify(obj)}\n\n`))
        } catch {
          clientGone = true
        }
      }
      try {
        /* 1. ALWAYS ground in a live web search */
        send({ type: "status", status: "searching" })
        const query =
          lang === "ar"
            ? `${industry} مخاطر مراجعة الحسابات مصر تنظيم`
            : `${industry} audit risks Egypt regulation accounting`
        let sources: AiSource[] = []
        try {
          sources = await searchWeb(query)
        } catch {
          sources = []
        }

        const sourcesBlock = sources.length
          ? `\n\nWEB SEARCH RESULTS (ground every current fact in these; cite inline as [1], [2]; ignore irrelevant hits):\n\n${formatSearchResults(sources)}`
          : `\n\n(A live web search was attempted but returned no usable results — answer from your professional expertise, say so briefly in the sources section, and avoid asserting current regulatory status.)`

        if (sources.length) send({ type: "sources", sources })
        else send({ type: "status", status: "search-failed" })

        /* 2. stream the deep analysis (thinking enabled for reasoning models) */
        send({ type: "status", status: "writing" })
        const { stream: upstream, modelUsed, engine, notice } = await generateStream({
          model,
          thinking: true,
          messages: [
            { role: "system", content: industrySystemPrompt(lang, industry, sourcesBlock) },
            {
              role: "user",
              content:
                lang === "ar"
                  ? `حلل الآن قطاع: ${industry}`
                  : `Analyze the ${industry} industry now.`,
            },
          ],
        })
        send({ type: "meta", model: modelUsed, engine, notice })

        let full = ""
        if (upstream) {
          full = await consumeSSEStream(upstream, (text) => send({ type: "delta", text }))
        }

        if (!full.trim()) {
          send({
            type: "error",
            error: "The analyst couldn't generate the profile — please try again.",
          })
          controller.close()
          return
        }
        send({ type: "done" })
        controller.close()
      } catch (e) {
        console.error("industry analyst error", e)
        send({ type: "error", error: "The analyst hit an error. Please try again." })
        try {
          controller.close()
        } catch {
          /* already closed */
        }
      }
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  })
}
