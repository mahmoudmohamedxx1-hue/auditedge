import ZAI from "z-ai-web-dev-sdk"
import { db } from "@/lib/db"

/* ---------------- ZAI singleton (backend only) ---------------- */

let zaiPromise: Promise<ZAI> | null = null
export function getZai(): Promise<ZAI> {
  if (!zaiPromise) {
    const p = ZAI.create()
    // a transient create failure must not poison the singleton forever —
    // reset so the next call can retry instead of failing until restart
    p.catch(() => {
      if (zaiPromise === p) zaiPromise = null
    })
    zaiPromise = p
  }
  return zaiPromise
}

/* ---------------- types ---------------- */

export type AiSource = {
  url: string
  name: string
  snippet: string
  host_name: string
}

export type AiContext = {
  view?: string
  courseId?: string
  lessonId?: string
}

export type LibraryHit = {
  id: string
  title: string
  category: string
  fileName: string
  excerpt: string
  score: number
}

/* ---------------- tutor system prompt (external audit expertise) ---------------- */

export function tutorSystemPrompt(opts: {
  userName: string
  userRole: string
  contextBlock?: string
}): string {
  return `You are "AuditEdge Tutor" — the resident AI tutor inside AuditEdge, the learning workspace of an external audit firm in Egypt.

WHO YOU ARE
- A senior external auditor and instructor with 15+ years of ISA-based statutory audit practice, deep knowledge of the Egyptian regulatory environment, and IFRS financial reporting.
- A patient tutor. You teach — you don't just answer. You adapt depth to the learner's level, use concrete examples (Egyptian context: FRA-listed companies, banking portfolios, EGP amounts), and check understanding.

EXPERTISE
- International Standards on Auditing (the full IAASB handbook): ISA 200 overall objectives; 210 engagement terms; 220 quality control; 230 documentation; 240 fraud responsibilities; 250 laws & regulations; 260/265 communication with those charged with governance; 300 planning; 315 (2019) risk identification and assessment; 320 materiality; 330 responses to assessed risks; 402 service organizations; 450 evaluation of misstatements; 500/501/505 audit evidence, specific considerations, external confirmations; 510 initial engagements; 520 analytical procedures; 530 audit sampling; 540 accounting estimates; 550 related parties; 560 subsequent events; 570 going concern; 580 written representations; 600 group audits; 610 using the work of internal audit; 620 using experts; 700/700R forming an opinion; 701 key audit matters; 705 modifications to opinions; 706 emphasis of matter / other matters; 710 comparatives; 720 other information.
- Egyptian framework: Egyptian Standards on Auditing and their alignment with ISA, ESAA (Egyptian Society of Accountants and Auditors), FRA (Financial Regulatory Authority) requirements, CBE (Central Bank of Egypt) circulars relevant to audited financial institutions, Companies Law 159/1981 and its amendments, and common Egyptian practice points (tax positions, payroll, related-party lending).
- IFRS/IAS: IFRS 15 revenue (5-step model), IFRS 9 financial instruments and ECL, IFRS 16 leases, IAS 36 impairment, IAS 1 presentation, IFRS 13 fair value hierarchy, going-concern and liquidity disclosures.
- Audit craft: engagement acceptance, planning memos, risk assessment procedures, understanding the entity and its controls, tests of controls vs substantive procedures, substantive analytics, sampling, working-paper discipline (ISA 230), professional skepticism, the fraud triangle, completion and partner review, engagement quality control (ISQM 1), independence and the IESBA Code of Ethics.
- Data & analytics: Benford's law, journal-entry testing, regression-based analytics, CAATs.

THE IFAC ARCHITECTURE (know who issues what)
- IFAC (International Federation of Accountants): the global organization of the accountancy profession (est. 1977; 180+ member organizations). ESAA is an IFAC associate/member body — through IFAC's Statements of Membership Obligations (SMOs), Egyptian adoption of ISA is an expected commitment.
- IAASB (International Auditing and Assurance Standards Board, facilitated by IFAC): issues the ISAs, ISQM 1 & 2 (quality management), ISREs (review), ISAEs (assurance incl. ISAE 3000 and ISAE 3420), ISRSs (related services), ISSA 5000 (sustainability assurance, effective periods beginning 15 Dec 2026) and IAPNs (practice notes). The 2025 IAASB Handbook is the current edition.
- IESBA: the International Code of Ethics for Professional Accountants — five fundamental principles: integrity, objectivity, professional competence and due care, confidentiality, professional behaviour. Part 4A covers independence for audit engagements (financial interest, loans, family relationships, fees, non-assurance services, contingency fees, long association of senior personnel).
- IPSASB: public-sector standards (IPSAS) — relevant when the firm audits public entities or donors' projects.
- IAEP: International Accounting Education Standards Board — the IES (International Education Standards) that shape professional accounting training (competence-based learning, CPD requirements). When designing the office's training plan, align it with IES 4 (professional values, ethics and attitudes), IES 6 (assessment), and IES 7 (continuing professional development).

THE FRA & EGYPTIAN OVERSIGHT MAP (who regulates what)
- FRA (Financial Regulatory Authority — الهيئة العامة للرقابة المالية): established by Law 10/2009, supervises non-bank financial services (capital market, insurance, mortgage finance, factoring, microfinance) AND oversees the audit profession for the entities within its mandate — including the registration/licensing of auditors eligible to audit its supervised entities, quality review of their work, and the standing committee for Egyptian Accounting Standards and Egyptian Standards on Auditing (Prime Ministerial Decree 2115/2023 re-formed this committee).
- Egyptian Accounting Standards: issued by ministerial decree (originally 110/2015, amended by Decree 69/2019 — which added standards 47 financial instruments, 48 revenue from contracts with customers, 49 leases — with FRA publishing the consolidated Arabic text). They are IFRS-based with local adaptations.
- Egyptian Standards on Auditing: ISA-aligned; PM Decree 3725/2025 (published in the Official Gazette on 15 October 2025) replaced the 2008-generation framework with a full new package — the library holds its complete Arabic text, standard-by-standard.
- Law 159/1981 (companies), Law 95/1996 (capital market auditors), Law 10/2009 (FRA), and the Syndicate of Accountants and Auditors (Law 133/1951) frame the profession in Egypt. CBE circulars govern auditing of banks and their subsidiaries.

THE OFFICE LIBRARY CONTAINS THE OFFICIAL TEXTS — USE THEM
- The firm's library includes the FULL TEXT of: (1) the 2025 IAASB Handbook (every ISA, ISQM and IAPN, split standard-by-standard); (2) the Egyptian Accounting Standards (FRA 2019 Arabic text); (3) the Egyptian Standards on Auditing, Review, Limited Examination and Other Assurance Engagements — the complete PM Decree 3725/2025 package (Official Gazette 15 Oct 2025, effective for financial years beginning on/after 1 Jan 2027): 44 pronouncements in Arabic (ESA 200–810, quality control ESQM 1, review ESRE 2410, assurance ESAE 3000/3402/3410/3420, related services ESRS 4410, practice note 1000) — the Egyptian equivalents of the ISAs; (4) the FRA auditor ethics rules (Decree 175/2024) and quality-control rules (Decree 174/2024); and (5) the official IFRS texts (IAS 1–41, IFRS 1–17 and IFRIC interpretations — EU-adopted consolidated version) for financial-reporting questions.
- When a learner asks what a specific standard requires — ISA, Egyptian auditing, Egyptian accounting, ethics or IFRS — SEARCH THE LIBRARY and ground your answer in the official text; cite the document you used. For Egyptian standards questions, answer from the Egyptian Arabic text (quote the relevant paragraphs in Arabic) and relate them to their ISA/IFRS counterparts. Do not rely on memory for clause-level detail when the library can give you the real wording.

THE 2025–2026 LANDSCAPE (know this; verify details with web search when asked)
- Egypt: The new Egyptian Standards on Auditing, Review, Limited Examination and Other Assurance Engagements were issued by PM Decree 3725/2025 (Official Gazette 15 October 2025) — the first major overhaul since the 2008 framework. They include a new firm-level quality-control standard (ESQM 1) and tighter requirements in high-risk areas (accounting estimates, fraud, going concern, documentation). They take effect for financial years beginning on or after 1 January 2027; until then the 2008-generation framework continues to apply — but firms should be preparing now, and the library already holds the full new Arabic texts. FRA is also developing dedicated SME accounting and auditing standards.
- IAASB: ISA 240 (Revised) on the auditor's responsibilities relating to fraud was issued and appears in the 2025 IAASB Handbook (not yet effective — know both the current and revised versions when asked). Narrow-scope amendments on using the work of experts are effective for periods beginning on or after 15 December 2026. ISSA 5000, the new sustainability assurance standard, is effective for periods beginning on or after 15 December 2026 — increasingly relevant as Egyptian listed companies face ESG disclosure expectations.
- When learners ask about "which version applies" or effective dates, walk through the timeline (current framework now → January 2027 transition) and offer to verify the latest status with a live web search.

HOW YOU TEACH
- Structure answers with short headings, tight paragraphs and bullet lists; bold the key terms.
- Use EGP amounts where numbers make an example concrete.
- LENGTH BUDGET: default to 150–400 words unless the learner asks for depth or a full lesson — conversational answers stay tight (they are often read aloud), and you offer to expand afterwards.
- When asked — or when it clearly helps learning — give practice questions (exam-style or field-style) and wait for the learner's answer before revealing solutions.
- If the learner is studying a specific lesson (context provided below), ground your explanation in that lesson's content first, then extend it.
- Be honest: if you are unsure, or if your sources conflict, say so plainly. NEVER invent standard clause numbers, effective dates, or sources.

DECISION FRAMEWORKS YOU TEACH BY HEART (walk through them as processes, not definitions)
- Materiality (ISA 320/450): benchmark choice (profit-oriented: 5% PBT / 0.5–1% revenue / 1–2% total assets, with reasons), performance materiality (50–75% of OM), the clearly-trivial threshold (1–5% of OM), and the difference between specific vs classes-of-transactions materiality. Always end with: "what changes if the benchmark turns out to be volatile?"
- Audit-opinion ladder (ISA 700/705/706): misstatement material but not pervasive → qualified; material AND pervasive → adverse; unable to obtain sufficient appropriate evidence (limitation) → qualified or disclaimer depending on pervasiveness. Route Emphasis-of-Matter vs KAM vs Other Matter correctly (KAM: listed entities only, matters communicated to TCWG; EoM: presentation/disclosure matters; OM: anything else material to understanding).
- Going concern (ISA 570): triggers (net liability position, loan defaults, management plans needing unrealistic margins), the 12-month horizon, events-after-date escalation, WFGI obligations, and the disclosure-adequacy → MURGC-paragraph → opinion-modification ladder.
- Risk model: inherent risk × control risk = RMM; significant risks get STAND-ALONE responses (no controls reliance without tests of details for fraud risks); assertion-level linkage from risk to procedure (what breaks where: EX/C/A/VA/RO/CO/CL/PR).
- Egyptian tax layer (when audit issues touch tax): Income Tax Law 91/2005 positions, VAT Law 67/2016, the e-invoicing/e-receipt mandates and their audit implications (transaction completeness, sequenced invoice numbers), payroll tax and social insurance exposure in provisions testing.
- Public sector / SOE questions: the Central Auditing Organization (الجهاز المركزي للمحاسبات) audits state entities; SOE governance reforms under Law 144/2019 and the state-ownership policy document; IPSAS as the reference framework for public entities — distinguish clearly between FRA-supervised audits and CAO audits.
- Exam blueprint: the learner's mock exams weight auditing 45%, accounting 30%, Egyptian framework 15%, ethics 10% (SOXE/EEC style). When drilling or planning revision, allocate effort to that weighting — and for English-medium candidates, note ACCA AA/AAA equivalents where they help.

HOW YOU COACH LEARNING (the learner is a Senior Associate developing toward engagement manager)
- Diagnose before you teach: when the learner's level is unclear, ask ONE short calibration question, then pitch depth accordingly (new junior vs senior vs exam candidate).
- Objective-first lessons: for any substantial topic, state up front what the learner will be able to DO afterwards, teach, then close with 2–3 self-check questions that test application, not recall.
- Senior-associate craft: beyond standards, coach the skills of the grade — supervising and reviewing juniors' working papers, briefing and delegating fieldwork, leading client interviews and PBC chasing, budget-vs-actual tracking, clearing review notes, coaching staff in the field, and escalation judgment.
- Engagement simulation: on request ("simulate an engagement", "role-play a client", "case study"), run a realistic interactive scenario — e.g. the senior on a FRA-listed manufacturer with revenue recognition pressure — ONE decision point at a time, with consequences, debriefs and the ISA references that govern each call.
- Exam-board rigor: when drilling, write questions the way examining bodies do (short scenario stem; requirement verbs like identify / evaluate / recommend / justify), mark the learner's attempt against a model answer, and give examiner-style feedback: what earned marks, what didn't, and the one fix that gains the most.
- Study planning: given a goal and timeline (e.g. "master ISA 315 risk assessment in two weeks, 40 minutes an evening"), produce a day-by-day plan mixing library readings, practice tasks and spaced reviews.
- Retrieval and spacing: when the learner returns to a topic you have taught, open with two quick recall questions before extending; end multi-session arcs with a cumulative review.

LANGUAGE
- Reply in the same language as the learner's message (Arabic or English). Keep standard codes (e.g. ISA 315) and established technical terms in English, with a brief Arabic explanation when replying in Arabic.
- Arabic terminology consistency (use these canonical equivalents in Arabic answers): الأهمية النسبية (materiality) · خطر جوهري (significant risk) · أدلة المراجعة (audit evidence) · مخاطر الرقابة (control risk) · خطر متأصل (inherent risk) · الاستمرارية (going concern) · بيان المراجعة (audit report/opinion) · مسائل المراجعة الجوهرية (key audit matters) · تمثيلات الإدارة (written representations) · الأنشطة الجوهرية بين الأطراف ذات العلاقة (related parties).

WEB SEARCH
- You have live web access. When web search results are provided in the conversation, use them for anything current (amendments, effective dates, regulatory news) and cite them inline as [1], [2]. List the sources at the end under a "Sources" heading only when you actually used them. Never fabricate citations. If no results are provided and the question needs current information, tell the learner your information may not be the latest.

OFFICE LIBRARY
- The learner's firm uploads its own materials (standards, templates, working papers, policies) to the workspace library. When OFFICE LIBRARY RESULTS are provided, treat them as the firm's authoritative internal references: ground firm-specific answers in them, cite inline with the given numbers, and mention which document you used. If a question seems to call for the firm's own documents but no library results are provided, suggest the learner search the Library or phrase the question mentioning "office library".

THE LEARNER
- Name: ${opts.userName}
- Role at the office: ${opts.userRole}${opts.contextBlock ? `\n\nCURRENT CONTEXT\n${opts.contextBlock}` : ""}`
}

/* ---------------- search router prompt ---------------- */

const ROUTER_PROMPT = `You are a search router for an external-audit tutor inside a firm's learning workspace. Decide whether answering the user's latest message requires (a) a live web search and/or (b) a search of the office's uploaded library (PDFs, standards, templates, working papers, policies the firm uploaded).

Respond ONLY with compact JSON, no markdown fences:
{"search": true, "query": "...", "library": true, "libraryQuery": "..."}
Set unused flags to false and their queries to "".

Web search ("search": true) when the user asks about: recent/latest/current developments; standards updates, amendments or effective dates; regulatory or Egypt audit news; CBE, FRA, ESAA, IAASB announcements; anything that may have changed recently or needs verification against live sources.

Library search ("library": true) when the user references: the office/firm library or its uploaded materials, documents, PDFs, templates, checklists, working papers, firm methodology or policies; asks what the office has on a topic; wants an answer grounded in the firm's own reference documents; or mentions a specific document by a name that could exist in the library (e.g. "the ISA 315 quick reference", "engagement checklist", "ethics card"). ALSO set "library": true when the user asks about the CONTENT or REQUIREMENTS of a specific standard — e.g. "what does ISA 315 require", "explain ISA 570 going concern", "ماذا يقول معيار ٥٤٠", "المعيار المصري للمراجعة ٣١٥", ISQM 1, IAPN, IFRS/IAS standards, Egyptian accounting or auditing standards, FRA ethics or quality-control rules — because the library holds the full official texts of the 2025 IAASB Handbook, the Egyptian Accounting Standards, the Egyptian Standards on Auditing (PM Decree 3725/2025), the FRA ethics/QC decrees, and the IFRS/IAS standards.

Do NOT search either for: conceptual explanations of established standards; definitions and methodology; practice questions, quizzes or calculations; general tutoring; greetings or meta questions about the tutor.`

export type RouterDecision = {
  search: boolean
  query: string
  library: boolean
  libraryQuery: string
}

export async function decideSearch(
  historyText: string,
  question: string
): Promise<RouterDecision> {
  try {
    const result = await generateOnce({
      messages: [
        { role: "system", content: ROUTER_PROMPT },
        {
          role: "user",
          content: `Conversation so far (may be empty):\n${historyText.slice(-1500) || "(new conversation)"}\n\nLatest message:\n${question}`,
        },
      ],
    })
    const raw = result?.text ?? ""
    const jsonText = raw.replace(/```json|```/g, "").trim()
    const match = jsonText.match(/\{[\s\S]*\}/)
    if (match) {
      const parsed = JSON.parse(match[0])
      if (typeof parsed.search === "boolean") {
        return {
          search: parsed.search === true,
          query: typeof parsed.query === "string" ? parsed.query.slice(0, 200) : "",
          library: parsed.library === true,
          libraryQuery:
            typeof parsed.libraryQuery === "string" && parsed.libraryQuery.trim()
              ? parsed.libraryQuery.slice(0, 200)
              : question.slice(0, 200),
        }
      }
    }
  } catch {
    // router failure should never block the answer
  }
  return { search: false, query: "", library: false, libraryQuery: "" }
}

export function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined
  const timeout = new Promise<T>((_, reject) => {
    timer = setTimeout(() => reject(new Error("timeout")), ms)
  })
  return Promise.race([p, timeout]).finally(() => clearTimeout(timer))
}

/* ---------------- web search ---------------- */

export async function searchWeb(query: string): Promise<AiSource[]> {
  try {
    const zai = await getZai()
    const results = (await withTimeout(
      zai.functions.invoke("web_search", {
        query,
        num: 6,
      }),
      25_000
    )) as unknown as Array<{
      url: string
      name: string
      snippet: string
      host_name: string
    }>
    if (!Array.isArray(results)) return []
    return results.slice(0, 6).map((r) => ({
      url: r.url,
      name: r.name,
      snippet: r.snippet,
      host_name: r.host_name,
    }))
  } catch (e) {
    console.error("web search failed:", e instanceof Error ? e.message : e)
    return []
  }
}

export function formatSearchResults(sources: AiSource[]): string {
  if (!sources.length) return ""
  return (
    `WEB SEARCH RESULTS (for anything current — recent updates, news, dates — prefer these and cite inline as [1], [2]; ignore them if irrelevant to the question):\n\n` +
    sources
      .map((s, i) => `[${i + 1}] ${s.name} (${s.host_name})\nURL: ${s.url}\n${s.snippet}`)
      .join("\n\n")
  )
}

/* ---------------- office library search (RAG over uploads) ---------------- */

const STOPWORDS = new Set([
  "the", "and", "for", "are", "was", "were", "been", "have", "has", "had", "you", "your",
  "our", "what", "which", "who", "whom", "this", "that", "these", "those", "with", "from",
  "about", "into", "over", "under", "how", "why", "when", "where", "does", "did", "doing",
  "can", "could", "should", "would", "will", "shall", "must", "may", "might", "there",
  "according", "please", "tell", "explain", "give", "show", "find", "list", "any", "all",
  "document", "documents", "file", "files",
])

/** Canonical form for Arabic text search: the official Egyptian standards PDF
 *  extracts some lam-alef ligatures reversed (لا → ال), mixed with correct ones.
 *  Mapping every لا → ال on BOTH the query and the searched text makes the two
 *  forms interchangeable, so searches match regardless of extraction artifacts. */
export function canonArabic(s: string): string {
  return s.replace(/\u0644\u0627/g, "\u0627\u0644") // لا → ال
}

function tokenize(q: string): string[] {
  // NFKC folds Arabic presentation forms (from legacy PDFs) into standard letters;
  // canonArabic then neutralizes reversed lam-alef ligature artifacts
  const normalized = canonArabic(q.normalize("NFKC").toLowerCase())
  return [...new Set(
    normalized
      .split(/[^a-z0-9\u0600-\u06ff]+/)
      .filter((t) => t.length >= 3 && !STOPWORDS.has(t))
      .map((t) => canonArabic(t))
  )].slice(0, 12)
}

function bestExcerpt(text: string, tokens: string[]): string {
  const clean = canonArabic(text.normalize("NFKC")).replace(/\s+/g, " ").trim()
  if (!tokens.length) return clean.slice(0, 1100)
  // find the densest window around the first strong token hit
  const lower = clean.toLowerCase()
  let bestPos = -1
  let bestCount = 0
  for (let i = 0; i < tokens.length; i++) {
    const idx = lower.indexOf(tokens[i])
    if (idx < 0) continue
    // count hits within a 1100-char window starting at idx
    let count = 0
    for (const t of tokens) {
      let p = lower.indexOf(t, Math.max(0, idx - 200))
      while (p >= 0 && p < idx + 900) {
        count++
        p = lower.indexOf(t, p + t.length)
      }
    }
    if (count > bestCount) {
      bestCount = count
      bestPos = idx
    }
  }
  if (bestPos < 0) return clean.slice(0, 1100)
  const start = Math.max(0, bestPos - 200)
  const end = Math.min(clean.length, start + 1100)
  return (start > 0 ? "… " : "") + clean.slice(start, end) + (end < clean.length ? " …" : "")
}

/** Keyword search over the office's uploaded materials (title, description, extracted text). */

type SearchDoc = {
  id: string
  title: string
  category: string
  fileName: string
  description: string
  titleCanon: string
  descCanon: string
  bodyCanon: string
  rawText: string
}

// The full-text index is expensive to build (146+ materials, some 300 KB each),
// so it is cached in memory and invalidated as soon as the materials table
// changes (cheap count+latest-createdAt fingerprint checked per search).
// PATCHes don't change the fingerprint — they call invalidateLibraryIndex().
let indexCache: { key: string; docs: SearchDoc[] } | null = null

/** Force the next searchLibrary() call to rebuild the in-memory index. */
export function invalidateLibraryIndex() {
  indexCache = null
}

async function getSearchIndex(): Promise<SearchDoc[]> {
  const stats = await db.material.aggregate({ _count: { id: true }, _max: { createdAt: true } })
  const key = `${stats._count.id}:${stats._max.createdAt?.getTime() ?? 0}`
  if (indexCache && indexCache.key === key) return indexCache.docs

  const materials = await db.material.findMany({
    where: { OR: [{ textContent: { not: "" } }, { title: { not: "" } }] },
    select: { id: true, title: true, description: true, category: true, fileName: true, textContent: true },
  })
  const docs: SearchDoc[] = materials.map((m) => ({
    id: m.id,
    title: m.title,
    category: m.category,
    fileName: m.fileName,
    description: m.description ?? "",
    titleCanon: canonArabic(m.title.toLowerCase()),
    descCanon: canonArabic((m.description ?? "").toLowerCase()),
    bodyCanon: canonArabic((m.textContent ?? "").normalize("NFKC").toLowerCase()),
    rawText: m.textContent ?? "",
  }))
  indexCache = { key, docs }
  return docs
}

export async function searchLibrary(query: string): Promise<LibraryHit[]> {
  try {
    const tokens = tokenize(query)
    if (!tokens.length) return []
    const qLower = canonArabic(query.normalize("NFKC").toLowerCase())
    const docs = await getSearchIndex()

    const hits: LibraryHit[] = []
    for (const m of docs) {
      let score = 0
      if (m.titleCanon.includes(qLower) && qLower.length >= 4) score += 12
      for (const t of tokens) {
        if (m.titleCanon.includes(t)) score += 8
        if (m.descCanon.includes(t)) score += 4
        let p = m.bodyCanon.indexOf(t)
        let occurrences = 0
        while (p >= 0 && occurrences < 12) {
          occurrences++
          p = m.bodyCanon.indexOf(t, p + t.length)
        }
        score += occurrences
      }
      if (score >= 6) {
        hits.push({
          id: m.id,
          title: m.title,
          category: m.category,
          fileName: m.fileName,
          excerpt: bestExcerpt(m.rawText || `${m.title}. ${m.description}`, tokens),
          score,
        })
      }
    }
    return hits.sort((a, b) => b.score - a.score).slice(0, 4)
  } catch (e) {
    console.error("library search failed:", e instanceof Error ? e.message : e)
    return []
  }
}

/** Build the context block fed to the model for library hits.
 *  startNumber continues the citation numbering after any web sources. */
export function formatLibraryResults(
  hits: LibraryHit[],
  startNumber = 0
): string {
  if (!hits.length) return ""
  return (
    `OFFICE LIBRARY RESULTS (documents uploaded by the learner's firm — authoritative INTERNAL references; prefer them over your general knowledge for firm-specific questions and cite inline as [${startNumber + 1}], [${startNumber + 2}]…; ignore them if irrelevant):\n\n` +
    hits
      .map(
        (h, i) =>
          `[${startNumber + i + 1}] ${h.title} (${h.category})\nExcerpt:\n${h.excerpt}`
      )
      .join("\n\n")
  )
}

/** Note appended when a search was attempted but returned nothing,
 *  so the tutor answers honestly instead of pretending it browsed. */
export function searchFailedBlock(query: string): string {
  return `A live web search was attempted for "${query}" but returned no usable results. Answer from your own expertise, and briefly tell the learner that live verification was unavailable so the information should be double-checked.`
}

/* ---------------- lesson context block ---------------- */

export async function buildContextBlock(
  ctx?: AiContext
): Promise<string | undefined> {
  if (!ctx?.lessonId && !ctx?.courseId) return undefined

  if (ctx.lessonId) {
    const lesson = await db.lesson.findUnique({
      where: { id: ctx.lessonId },
      include: { module: { include: { course: true } } },
    })
    if (!lesson) return undefined
    const course = lesson.module.course
    let excerpt = ""
    try {
      const c = JSON.parse(lesson.content) as {
        intro?: string
        sections?: { heading: string; body: string }[]
        keyPoints?: string[]
      }
      excerpt = [c.intro ?? "", ...(c.sections ?? []).slice(0, 3).map((s) => `${s.heading}\n${s.body}`)]
        .join("\n\n")
        .slice(0, 1800)
      if (c.keyPoints?.length) excerpt += `\n\nKey points: ${c.keyPoints.join(" · ")}`
    } catch {
      excerpt = ""
    }
    return `The learner is currently studying the lesson "${lesson.title}" in the course ${course.code} — ${course.title} (module: ${lesson.module.title}). Lesson content excerpt:\n${excerpt}`
  }

  if (ctx.courseId) {
    const course = await db.course.findUnique({ where: { id: ctx.courseId } })
    if (!course) return undefined
    return `The learner is currently browsing the course ${course.code} — ${course.title} (${course.level}, ${course.cpeHours} CPE hours).`
  }
  return undefined
}

/* ---------------- user-key engine (Z.ai Open Platform) ---------------- */

import type { AiModelId } from "@/lib/models"
import { DEFAULT_MODEL, getAiModel, resolveModel } from "@/lib/models"

const ZAI_OPEN_BASE = process.env.ZAI_OPEN_BASE_URL || "https://api.z.ai/api/paas/v4"
const ZAI_OPEN_KEY = process.env.ZAI_OPEN_API_KEY || ""

/** Content parts for vision requests (OpenAI-compatible multimodal format). */
export type ContentPart =
  | { type: "text"; text: string }
  | { type: "image_url"; image_url: { url: string } }

export type EngineMessage = {
  role: "system" | "user" | "assistant"
  content: string | ContentPart[]
}

export function userKeyEngineReady(): boolean {
  return ZAI_OPEN_KEY.length > 20
}

/** Flatten an engine message for the built-in SDK, which only accepts text:
 *  vision parts are reduced to their text + a placeholder for the image. */
function engineToSdkMessage(m: EngineMessage): { role: "system" | "user" | "assistant"; content: string } {
  if (typeof m.content === "string") return { role: m.role, content: m.content }
  const text = m.content
    .map((p) => (p.type === "text" ? p.text : "[image attached]"))
    .join("\n")
  return { role: m.role, content: text }
}

/** Result of an engine attempt: either a usable stream/text or a failure
 *  classification the caller can act on (balance errors fall back to flash). */
type EngineOutcome =
  | { ok: true; kind: "stream"; stream: ReadableStream<Uint8Array> }
  | { ok: true; kind: "text"; text: string }
  | { ok: false; reason: "no-key" | "balance" | "error" }

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function callUserKey(opts: {
  model: AiModelId
  messages: EngineMessage[]
  stream: boolean
  thinking: boolean
  /** internal: retries left for transient (429/5xx) failures */
  retries?: number
}): Promise<EngineOutcome> {
  if (!userKeyEngineReady()) return { ok: false, reason: "no-key" }

  const model = getAiModel(opts.model)
  // only reasoning models accept the thinking parameter
  const thinking = model.reasoning ? { type: opts.thinking ? "enabled" : "disabled" } : undefined
  const retries = opts.retries ?? 2

  try {
    const res = await withTimeout(
      fetch(`${ZAI_OPEN_BASE}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ZAI_OPEN_KEY}`,
        },
        body: JSON.stringify({
          model: opts.model,
          messages: opts.messages,
          stream: opts.stream,
          ...(thinking ? { thinking } : {}),
        }),
      }),
      opts.stream ? 30_000 : 90_000
    )

    if (!res.ok) {
      const body = await res.text().catch(() => "")
      // 1113 = insufficient balance / no resource package on the Z.ai platform
      if (res.status === 401 || body.includes("1113") || body.includes("Insufficient balance")) {
        return { ok: false, reason: "balance" }
      }
      // 429 / 1305 / 5xx = transient overload on the free tier — back off and retry
      const transient =
        res.status === 429 ||
        res.status >= 500 ||
        body.includes("1305") ||
        body.includes("overloaded")
      if (transient && retries > 0) {
        await sleep(2500)
        return callUserKey({ ...opts, retries: retries - 1 })
      }
      console.error(`user-key engine ${opts.model} HTTP ${res.status}:`, body.slice(0, 300))
      return { ok: false, reason: "error" }
    }

    if (opts.stream) {
      if (!res.body) return { ok: false, reason: "error" }
      return { ok: true, kind: "stream", stream: res.body }
    }
    const json = (await res.json()) as {
      choices?: { message?: { content?: string } }[]
    }
    const text = json?.choices?.[0]?.message?.content ?? ""
    if (!text) return { ok: false, reason: "error" }
    return { ok: true, kind: "text", text }
  } catch (e) {
    // network errors can also be transient — one retry for those
    if (retries > 0) {
      await sleep(2000)
      return callUserKey({ ...opts, retries: retries - 1 })
    }
    console.error("user-key engine call failed:", e instanceof Error ? e.message : e)
    return { ok: false, reason: "error" }
  }
}

/** The single generation entry point for AI features. Resolution order:
 *  1. the requested model on the user's key
 *  2. if that failed for balance (e.g. GLM-4 Plus with no credit): the free
 *     flash model on the user's key — with a notice so the learner knows
 *  3. the built-in workspace SDK (no key needed, no model choice)
 *  Returns which engine+model actually served the answer and an optional
 *  human-readable notice for the UI. */
export async function generateStream(opts: {
  model: AiModelId
  messages: EngineMessage[]
  thinking?: boolean
}): Promise<{ stream: ReadableStream<Uint8Array> | null; modelUsed: AiModelId | "sdk"; notice?: string }> {
  const attempt = await callUserKey({
    model: opts.model,
    messages: opts.messages,
    stream: true,
    thinking: opts.thinking ?? false,
  })
  if (attempt.ok && attempt.kind === "stream") {
    return { stream: attempt.stream, modelUsed: opts.model }
  }

  if (!attempt.ok && attempt.reason !== "no-key" && opts.model !== DEFAULT_MODEL) {
    // e.g. GLM-4 Plus selected but the account has no balance → free flash
    const retry = await callUserKey({
      model: DEFAULT_MODEL,
      messages: opts.messages,
      stream: true,
      thinking: opts.thinking ?? false,
    })
    if (retry.ok && retry.kind === "stream") {
      const model = getAiModel(opts.model)
      return {
        stream: retry.stream,
        modelUsed: DEFAULT_MODEL,
        notice: `${model.name} is unavailable on the configured account (no balance) — answered with GLM-4.7 Flash (free) instead.`,
      }
    }
  }

  // built-in SDK fallback (images cannot be served here — flatten to text)
  try {
    const zai = await getZai()
    const completion = await withTimeout(
      zai.chat.completions.create({
        messages: opts.messages.map(engineToSdkMessage),
        stream: true,
        thinking: { type: "disabled" },
      }),
      30_000
    )
    if (completion instanceof ReadableStream) return { stream: completion, modelUsed: "sdk" }
    const full = String((completion as { choices?: { message?: { content?: string } }[] })?.choices?.[0]?.message?.content ?? "")
    if (full) {
      // wrap a non-stream completion in a one-chunk stream so callers stay simple
      const encoder = new TextEncoder()
      const stream = new ReadableStream<Uint8Array>({
        start(controller) {
          controller.enqueue(encoder.encode(JSON.stringify({ choices: [{ delta: { content: full } }] })))
          controller.close()
        },
      })
      return { stream, modelUsed: "sdk" }
    }
  } catch (e) {
    console.error("sdk fallback failed:", e instanceof Error ? e.message : e)
  }
  return { stream: null, modelUsed: "sdk" }
}

/** Non-streaming variant (router decisions, KAM drafter, small utility calls). */
export async function generateOnce(opts: {
  model?: AiModelId
  messages: EngineMessage[]
  thinking?: boolean
}): Promise<{ text: string; modelUsed: AiModelId | "sdk"; notice?: string } | null> {
  const model = opts.model ?? DEFAULT_MODEL
  const attempt = await callUserKey({
    model,
    messages: opts.messages,
    stream: false,
    thinking: opts.thinking ?? false,
  })
  if (attempt.ok && attempt.kind === "text") return { text: attempt.text, modelUsed: model }

  if (!attempt.ok && attempt.reason !== "no-key" && model !== DEFAULT_MODEL) {
    const retry = await callUserKey({
      model: DEFAULT_MODEL,
      messages: opts.messages,
      stream: false,
      thinking: opts.thinking ?? false,
    })
    if (retry.ok && retry.kind === "text") {
      return { text: retry.text, modelUsed: DEFAULT_MODEL, notice: "fallback-to-flash" }
    }
  }

  try {
    const zai = await getZai()
    const completion = await withTimeout(
      zai.chat.completions.create({
        messages: opts.messages.map(engineToSdkMessage),
        thinking: { type: "disabled" },
      }),
      60_000
    )
    const text = String(completion?.choices?.[0]?.message?.content ?? "")
    if (text) return { text, modelUsed: "sdk" }
  } catch (e) {
    console.error("sdk fallback (once) failed:", e instanceof Error ? e.message : e)
  }
  return null
}

export { resolveModel }

/* ---------------- SSE upstream parsing ---------------- */

/** Parses an SSE ReadableStream from the GLM API and calls onDelta per token. */
export async function consumeSSEStream(
  stream: ReadableStream<Uint8Array>,
  onDelta: (text: string) => void,
  /** v21: polled after every chunk — return true to stop consuming (Stop
   *  button honesty: cancel the reader so upstream tokens stop burning). */
  shouldStop?: () => boolean
): Promise<string> {
  const reader = stream.getReader()
  const decoder = new TextDecoder()
  let buffer = ""
  let full = ""

  const processLine = (line: string) => {
    const trimmed = line.trim()
    if (!trimmed.startsWith("data:")) return
    const payload = trimmed.slice(5).trim()
    if (!payload || payload === "[DONE]") return
    try {
      const json = JSON.parse(payload)
      const delta: string =
        json?.choices?.[0]?.delta?.content ?? json?.choices?.[0]?.message?.content ?? ""
      if (delta) {
        full += delta
        onDelta(delta)
      }
    } catch {
      // partial JSON — skip
    }
  }

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split("\n")
    buffer = lines.pop() ?? ""
    for (const line of lines) processLine(line)
    if (shouldStop?.()) {
      // cancel the underlying stream — for fetch bodies this tears down the
      // connection instead of letting the model finish out of sight
      await reader.cancel().catch(() => {})
      break
    }
  }
  // upstream may close with a complete final line that never got its newline
  if (buffer && !shouldStop?.()) processLine(buffer)
  return full
}
