import { aiRateLimit, AI_POLICIES } from "@/lib/ai-guard"
import { NextRequest, NextResponse } from "next/server"
import { getSessionUser } from "@/lib/auth"
import { generateOnce } from "@/lib/ai"

export const runtime = "nodejs"
export const maxDuration = 120

/** v26 — "make a podcast with the settings I want, by the AI".
 *
 * The learner's ask: pick a topic, a language, a length and a style, and the
 * AI writes a REAL two-person podcast — a host and a guest in dialogue, the
 * same format as the curated conversation episodes. The script comes back as
 * structured turns (speaker + text), which /api/ai/podcast/speak then voices
 * with two different neural voices.
 *
 * POST { topic, lang: "en"|"ar", minutes: 10|15|20, style, host, guest } →
 *      { title, turns: [{ speaker: "host"|"guest", text }], engine, notice }
 */

export type PodcastTurn = { speaker: "host" | "guest"; text: string }

const STYLES = ["interview", "lesson", "debate", "examprep"] as const
type Style = (typeof STYLES)[number]

const MINUTES = [10, 15, 20] as const

/** Turns needed for the target length: ~15 speaking turns per 10 minutes of
 *  podcast (two voices, natural pacing ≈ 130 wpm, ~80 words a turn). */
function turnsFor(minutes: number): number {
  return Math.round((minutes / 10) * 15)
}

function styleBrief(style: Style, lang: "en" | "ar"): string {
  const en: Record<Style, string> = {
    interview: "a curious HOST interviewing a knowledgeable GUEST about their experience with the topic — questions, stories, practical examples",
    lesson: "a friendly teacher-style conversation where the HOST walks the GUEST (and the listener) through the topic step by step with worked examples",
    debate: "a respectful disagreement: HOST and GUEST argue two sides of the topic, challenge each other's claims, and land on what a professional should actually do",
    examprep: "an exam-coaching session: HOST quizzes GUEST with exam-style questions on the topic, GUEST answers, HOST explains why each answer is right or wrong",
  }
  const ar: Record<Style, string> = {
    interview: "مُقدّم فضولي يستضيف ضيفًا خبيرًا يتحدث عن خبرته في الموضوع — أسئلة وقصص وأمثلة عملية",
    lesson: "حوار تعليمي ودود يشرح فيه المُقدّم الموضوع خطوة بخطوة مع الضيف والمستمع بأمثلة محلولة",
    debate: "خلاف محترم: يتبادل المُقدّم والضيف وجهتي نظر متقابلتين حول الموضوع ويتحديان حجج بعضهما حتى يصلان إلى ما ينبغي للمحترف فعله",
    examprep: "جلسة تدريب على الامتحان: يسأل المُقدّم الضيف أسئلة بأسلوب الامتحانات، ويجيب الضيف، ويشرح المُقدّم لماذا يكون كل جواب صحيحًا أو خاطئًا",
  }
  return lang === "ar" ? ar[style] : en[style]
}

function buildMessages(opts: {
  topic: string
  lang: "en" | "ar"
  minutes: number
  style: Style
  host: string
  guest: string
  turnCount: number
}) {
  const { topic, lang, minutes, style, host, guest, turnCount } = opts
  const langLine =
    lang === "ar"
      ? "اكتب الحوار كاملًا بالعربية الفصحى الواضحة (مصطلحات المحاسبة والمراجعة يجوز تركها بالإنجليزية بين قوسين عند الحاجة)."
      : "Write the entire dialogue in clear, natural English."
  const system =
    "You are an award-winning accounting & audit podcast producer. You write REAL podcasts: two people in a genuine conversation — interruptions, reactions, concrete numbers, real standard references (IFRS/ISA names), and a hook in the first turn. Never a lecture transcript, never one voice monologuing."
  const user = `Produce a two-person podcast episode.

TOPIC: ${topic}
LENGTH: about ${minutes} minutes (${turnCount} speaking turns total)
FORMAT: ${styleBrief(style, lang)}
SPEAKERS: the host is "${host}", the guest is "${guest}". Address each other by name occasionally.
${langLine}

Rules:
- Alternate speakers starting with the host; vary turn length (2-6 sentences); keep every claim technically correct.
- ${lang === "ar" ? "اذكر أرقامًا وأمثلة محاسبية واقعية داخل الحوار." : "Weave in realistic accounting figures and worked mini-examples."}
- ${lang === "ar" ? "اختم الحلقة بخلاصة عملية واحدة يستمع إليها الطالب." : "End with one practical takeaway the listener can act on."}

Return ONLY valid JSON, no markdown fences, exactly:
{"title": "<episode title in ${lang === "ar" ? "Arabic" : "English"}>",
 "turns": [{"speaker": "host"|"guest", "text": "..."}, ...]}
with exactly ${turnCount} turns.`
  return [
    { role: "system" as const, content: system },
    { role: "user" as const, content: user },
  ]
}

/** Parse the model's JSON (tolerating fences / stray prose). */
function parseScript(raw: string): { title: string; turns: PodcastTurn[] } | null {
  const cleaned = raw
    .replace(/^[\s\S]*?```(?:json)?\n?/, "")
    .replace(/\n?```[\s\S]*$/, "")
    .trim()
  const at = cleaned.indexOf("{")
  const end = cleaned.lastIndexOf("}")
  if (at < 0 || end <= at) return null
  try {
    const parsed = JSON.parse(cleaned.slice(at, end + 1)) as {
      title?: unknown
      turns?: { speaker?: unknown; text?: unknown }[]
    }
    const turns = (parsed.turns ?? [])
      .map((t) => ({
        speaker: t.speaker === "guest" ? ("guest" as const) : ("host" as const),
        text: String(t.text ?? "").replace(/\s+/g, " ").trim(),
      }))
      .filter((t) => t.text.length > 0)
      .slice(0, 36)
    if (turns.length < 6) return null
    return { title: String(parsed.title ?? "").trim() || "Custom podcast", turns }
  } catch {
    return null
  }
}

/** Deterministic offline fallback — keeps the studio usable even when every
 *  AI engine is quiet: a real (if generic) two-person script on the topic. */
function fallbackScript(opts: {
  topic: string
  lang: "en" | "ar"
  host: string
  guest: string
  turnCount: number
}): { title: string; turns: PodcastTurn[] } {
  const { topic, lang, host, guest, turnCount } = opts
  const en = [
    `Welcome back — today, ${host} and ${guest} take on ${topic}. ${guest}, where should a listener start?`,
    `Great question. With ${topic}, I always begin with the question a professional is actually trying to answer — everything else follows from that.`,
    `Give me the concrete first step.`,
    `Define the scope, then the framework. If it touches the financial statements, name the standard that governs it before you touch a single number.`,
    `And where do people go wrong?`,
    `They memorize rules before understanding the transaction. Read the facts, draw the entries, then check the standard — in that order.`,
    `Say more about the exam angle.`,
    `Examiners test judgement, not recall. They give you a scenario where two rules collide, and the answer is the one with the better reasoning.`,
    `Walk me through a quick example.`,
    `Take a straightforward sale: who transferred control of the goods, when, and at what price? Answer those three and the accounting follows.`,
    `And what would you check first in an audit of this?`,
    `The completeness assertion — unrecorded liabilities hide in the year-end cut-off, and no analytical procedure catches them.`,
    `What is the one takeaway?`,
    `Pick one real transaction from your own work this week and explain it out loud in under two minutes. That is the whole skill.`,
    `That is a wrap — thanks for listening, and study well.`,
  ]
  const ar = [
    `أهلًا بكم — اليوم يتبادل ${host} و${guest} الحديث عن ${topic}. ${guest}، من أين يبدأ المستمع؟`,
    `سؤال جميل. أنا أبدأ دائمًا بالسؤال الذي يحاول المحترف الإجابة عنه فعلًا — وكل شيء بعد ذلك يترتب عليه.`,
    `ما الخطوة العملية الأولى؟`,
    `حدد النطاق أولًا ثم الإطار. وإذا كان الموضوع يمس القوائم المالية فسمِّ المعيار الحاكم له قبل أي رقم.`,
    `وأين يخطئ الناس؟`,
    `يحفظون القواعد قبل فهم العملية. اقرأ الواقعة، وارسم القيود، ثم راجع المعيار — بهذا الترتيب.`,
    `حدثني عن زاوية الامتحان.`,
    `الممتحنون يختبرون الحكم المهني لا الحفظ. يعطونك موقفًا يتصادم فيه معياران، والجواب الصحيح هو الأقوى تعليلًا.`,
    `امشِ معي على مثال سريع.`,
    `خذ عملية بيع بسيطة: من نقل السيطرة على البضاعة، ومتى، وبأي سعر؟ أجب عن الثلاثة وتتبعها المعالجة المحاسبية.`,
    `وما أول ما تفحصه في مراجعة هذا؟`,
    `تأكيد الاكتمال — الالتزامات غير المسجلة تختبئ في قطع نهاية العام، ولا تلتقطها أي إجراءات تحليلية.`,
    `وما الخلاصة؟`,
    `اختر عملية حقيقية من عملك هذا الأسبوع واشرحها بصوت مسموع في أقل من دقيقتين. هذه هي المهارة كلها.`,
    `إلى هنا نلتقي — شكرًا لكم ونذاكر بعافية.`,
  ]
  const base = lang === "ar" ? ar : en
  const turns: PodcastTurn[] = []
  for (let i = 0; i < turnCount; i++) {
    const t = base[i % base.length]
    turns.push({ speaker: i % 2 === 0 ? "host" : "guest", text: t })
  }
  return {
    title: lang === "ar" ? `حوار عن ${topic}` : `A conversation about ${topic}`,
    turns,
  }
}

export async function POST(req: NextRequest) {
  const limited = aiRateLimit(req, AI_POLICIES.podcast)
  if (limited) return limited

  const me = await getSessionUser()
  if (!me) return NextResponse.json({ error: "unauthenticated" }, { status: 401 })

  let body: { topic?: unknown; lang?: unknown; minutes?: unknown; style?: unknown; host?: unknown; guest?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const topic = String(body.topic ?? "").trim().slice(0, 300)
  if (topic.length < 3) return NextResponse.json({ error: "topic is required" }, { status: 400 })
  const lang: "en" | "ar" = body.lang === "ar" ? "ar" : "en"
  const minutesRaw = Number(body.minutes)
  const minutes = (MINUTES as readonly number[]).includes(minutesRaw) ? minutesRaw : 15
  const style: Style = (STYLES as readonly string[]).includes(String(body.style)) ? (body.style as Style) : "interview"
  const host = String(body.host ?? "").trim().slice(0, 40) || (lang === "ar" ? "المُقدّم" : "Host")
  const guest = String(body.guest ?? "").trim().slice(0, 40) || (lang === "ar" ? "الضيف" : "Guest")
  const turnCount = turnsFor(minutes)

  // two attempts: long JSON scripts occasionally come back truncated or
  // prose-wrapped — a fresh ask is cheaper than a fallback
  let script: { title: string; turns: PodcastTurn[] } | null = null
  let attempt: Awaited<ReturnType<typeof generateOnce>> = null
  for (let i = 0; i < 2 && !script; i++) {
    attempt = await generateOnce({
      messages: buildMessages({ topic, lang, minutes, style, host, guest, turnCount }),
    })
    if (attempt?.text) script = parseScript(attempt.text)
  }
  let notice: string | undefined = attempt?.notice
  if (!script) {
    // the engines were quiet or the JSON did not parse twice — still
    // deliver a usable two-person script so the studio never dead-ends
    script = fallbackScript({ topic, lang, host, guest, turnCount })
    notice = notice ?? "script-fallback"
  }

  return NextResponse.json({
    title: script.title,
    lang,
    minutes,
    style,
    host,
    guest,
    turns: script.turns,
    engine: attempt?.engine ?? "fallback",
    notice: notice ?? null,
  })
}
