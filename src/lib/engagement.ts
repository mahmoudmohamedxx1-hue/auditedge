/** Engagement state for the Audit Program — one isolated workspace per
 *  client/period. Persisted client-side (localStorage) so the program,
 *  PBC tracker, findings and sign-offs all work offline (PWA fieldwork).
 *
 *  Everything here is single-user honest data: no fake engagements are
 *  ever created beyond the one empty starter engagement. */

import { PROGRAM_SECTIONS } from "./program"

export type ProcStatus = "done" | "na"

export type ProcState = {
  /** absent = not yet ticked, but metadata (WP ref / initials / note) may exist */
  status?: ProcStatus
  /** why the procedure is not applicable */
  naReason?: string
  /** working-paper reference, e.g. "B-120" (ISA 230) */
  wp?: string
  /** preparer initials, e.g. "MA" */
  initials?: string
  /** when the procedure was ticked (ms) */
  date?: number
  note?: string
}

export type PbcStatus = "requested" | "received" | "na"

export type PbcState = {
  status: PbcStatus
  requestedAt?: number
  receivedAt?: number
}

export type FindingStatus = "open" | "passed" | "corrected"

export type Finding = {
  id: string
  sectionId: string
  description: string
  /** gross misstatement amount in EGP (optional — some findings are qualitative) */
  amount?: number
  status: FindingStatus
  createdAt: number
  /** v21: working-paper reference for the misstatement schedule */
  wp?: string
  /** v21: qualitative flag — matters regardless of size (ISA 450.11) */
  qualitative?: boolean
  /** v21: the proposed adjustment entry management could post */
  adj?: { dr?: string; cr?: string; amount?: number }
}

export type Signoff = {
  preparedBy?: string
  preparedAt?: number
  reviewedBy?: string
  reviewedAt?: number
}

/** v21: the ISA 320 materiality memo saved from the AP-02 calculator. */
export type MaterialityMemo = {
  om: number
  benchmark: string
  pmPct: number
  pm: number
  cttPct: number
  ctt: number
  rationale: string
  savedAt: number
}

/** v21: ISA 570 going-concern checklist state. */
export type GcChecklist = {
  /** indicator id → observed by the team */
  indicators: Record<string, boolean>
  /** evidence obtained / WFGI notes */
  notes: string
  /** adequate-disclosure → MURGC paragraph; inadequate → modification ladder */
  conclusion: "pending" | "adequate" | "inadequate-disclosed" | "inadequate-undisclosed"
  savedAt: number
}

/** v21: one row of the interactive risk-assessment matrix (ISA 315/330). */
export type RiskRating = "low" | "med" | "high"

export type RiskRow = {
  id: string
  account: string
  /** assertion code (EX/C/A/VA/RO/CO/CL/PR) or free text */
  assertion: string
  ir: RiskRating
  cr: RiskRating
  /** significant risk → stands-alone response (ISA 240/315) */
  significant: boolean
  response: string
  savedAt: number
}

/** v21: JE/TB analyzer summary persisted into the engagement (AP-01). */
export type JeSummary = {
  savedAt: number
  population: number
  exceptions: number
  note: string
}

/** v28 — one AI-tailored procedure inserted into a program section by the
 *  AI program customizer. Tickable/removable exactly like a built-in. */
export type AiProc = {
  /** stable id inside the tailor result — "ai-1", "ai-2"… */
  id: string
  /** must match a PROGRAM_SECTIONS id (validated when applied) */
  sectionId: string
  /** standard reference chip, e.g. "ISA 315" */
  ref?: string
  text: { en: string; ar: string }
}

/** v28 — the AI program customization stored on the engagement: the
 *  engagement memo + focus areas + extra procedures + extra PBC requests
 *  generated from the client profile the user described. */
export type AiTailor = {
  generatedAt: number
  model: string
  engine: string
  sector: string
  size: "sme" | "mid" | "listed"
  listed: boolean
  systems: string
  concerns: string
  summary: { en: string; ar: string }
  focus: { en: string; ar: string }[]
  procs: AiProc[]
  pbc: { sectionId: string; text: { en: string; ar: string } }[]
}

export type Engagement = {
  id: string
  client: string
  /** period covered, e.g. "FY 2026" */
  period: string
  createdAt: number
  updatedAt?: number
  /** procedure id → tick-off state */
  procedures: Record<string, ProcState>
  /** PBC key `${sectionId}:${docIndex}` → request state */
  pbc: Record<string, PbcState>
  findings: Finding[]
  /** sectionId → preparer/reviewer sign-off */
  signoffs: Record<string, Signoff>
  /** performance materiality (EGP) for the ISA 450 evaluation */
  pm?: number
  /** clearly-trivial threshold (EGP) */
  ctt?: number
  /** v21: linked industry sector — tailors the risk view + KAM seeds */
  sectorId?: string
  /** v21: the saved ISA 320 materiality memo (AP-02) */
  materiality?: MaterialityMemo
  /** v21: ISA 570 going-concern checklist (AP-04) */
  gc?: GcChecklist
  /** v21: risk-assessment matrix rows (AP-01) */
  riskMatrix?: RiskRow[]
  /** v21: JE-testing summary written back from the analyzer (AP-01) */
  jeSummary?: JeSummary
  /** v28 — the AI program customization (memo + AI-added procedures/PBC) */
  aiTailor?: AiTailor
}

export type EngagementStore = {
  engagements: Engagement[]
  activeId: string
}

const KEY = "auditedge-engagements-v1"
/** legacy v10/v11 flat tick-off blob */
const LEGACY_DONE_KEY = "auditedge-program-done-v1"

const uid = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `e-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

export function newFinding(sectionId: string, description: string, amount?: number): Finding {
  return {
    id: uid(),
    sectionId,
    description: description.trim(),
    amount: typeof amount === "number" && isFinite(amount) ? amount : undefined,
    status: "open",
    createdAt: Date.now(),
  }
}

export function newEngagement(client: string, period: string): Engagement {
  return {
    id: uid(),
    client: client.trim() || "Untitled client",
    period: period.trim() || "FY",
    createdAt: Date.now(),
    updatedAt: Date.now(),
    procedures: {},
    pbc: {},
    findings: [],
    signoffs: {},
  }
}

/** Load the engagement store, migrating the legacy flat tick-off blob on
 *  first run so nobody loses progress made in v10/v11. Always returns at
 *  least one engagement. */
export function loadEngagements(): EngagementStore {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as EngagementStore
      if (parsed && Array.isArray(parsed.engagements) && parsed.engagements.length > 0) {
        // defensive normalisation — every engagement must have all maps
        const engagements = parsed.engagements.map((e) => ({
          ...e,
          procedures: e.procedures ?? {},
          pbc: e.pbc ?? {},
          findings: Array.isArray(e.findings) ? e.findings : [],
          signoffs: e.signoffs ?? {},
        }))
        const activeId = engagements.some((e) => e.id === parsed.activeId)
          ? parsed.activeId
          : engagements[0].id
        return { engagements, activeId }
      }
    }
  } catch {}

  // first run (or corrupt store) — migrate legacy ticks if any
  const eng = newEngagement("Untitled client", "FY 2026")
  try {
    const legacy = JSON.parse(localStorage.getItem(LEGACY_DONE_KEY) ?? "{}")
    if (legacy && typeof legacy === "object") {
      const now = Date.now()
      for (const [id, v] of Object.entries(legacy)) {
        if (v === true) eng.procedures[id] = { status: "done", date: now }
      }
    }
  } catch {}
  return { engagements: [eng], activeId: eng.id }
}

export function saveEngagements(store: EngagementStore) {
  try {
    localStorage.setItem(KEY, JSON.stringify(store))
  } catch {}
}

/* ------------------------------------------------------------------ */
/* progress helpers                                                    */
/* ------------------------------------------------------------------ */

/** v28 — the AI-added procedures attached to one section (empty when the
 *  engagement is not AI-customized). */
export function aiProcsFor(eng: Engagement, sectionId: string): AiProc[] {
  return (eng.aiTailor?.procs ?? []).filter((p) => p.sectionId === sectionId)
}

export type SectionProgress = {
  done: number
  na: number
  total: number
  /** done + na / total */
  pct: number
}

export function sectionProgress(eng: Engagement, sectionId: string): SectionProgress {
  const section = PROGRAM_SECTIONS.find((s) => s.id === sectionId)
  const total = (section?.procedures.length ?? 0) + aiProcsFor(eng, sectionId).length
  let done = 0
  let na = 0
  if (section)
    for (const p of section.procedures) {
      const st = eng.procedures[p.id]
      if (st?.status === "done") done++
      else if (st?.status === "na") na++
    }
  // v28 — AI-added procedures tick with the same ProcState store
  for (const p of aiProcsFor(eng, sectionId)) {
    const st = eng.procedures[p.id]
    if (st?.status === "done") done++
    else if (st?.status === "na") na++
  }
  return { done, na, total, pct: total === 0 ? 0 : Math.round(((done + na) / total) * 100) }
}

export function overallProgress(eng: Engagement): SectionProgress {
  let done = 0
  let na = 0
  let total = 0
  for (const s of PROGRAM_SECTIONS) {
    total += s.procedures.length
    for (const p of s.procedures) {
      const st = eng.procedures[p.id]
      if (st?.status === "done") done++
      else if (st?.status === "na") na++
    }
  }
  // v28 — AI-added procedures count toward the engagement's progress
  for (const p of eng.aiTailor?.procs ?? []) {
    total += 1
    const st = eng.procedures[p.id]
    if (st?.status === "done") done++
    else if (st?.status === "na") na++
  }
  return { done, na, total, pct: total === 0 ? 0 : Math.round(((done + na) / total) * 100) }
}

/* ------------------------------------------------------------------ */
/* PBC (prepared-by-client) aggregation                                */
/* ------------------------------------------------------------------ */

export type PbcItem = {
  key: string
  sectionId: string
  code: string
  title: { en: string; ar: string }
  /** null = not yet requested from the client */
  state: PbcState | null
}

/** Flatten every section's "documents to obtain" into one trackable list —
 *  v28: AI-recommended PBC requests ride along (keys `${sectionId}:ai${i}`)
 *  so they flow through the same requested/received tracker + CSV export. */
export function pbcItems(eng: Engagement): PbcItem[] {
  const out: PbcItem[] = []
  for (const s of PROGRAM_SECTIONS) {
    s.documents.forEach((d, i) => {
      const key = `${s.id}:${i}`
      out.push({ key, sectionId: s.id, code: s.code, title: d, state: eng.pbc[key] ?? null })
    })
    ;(eng.aiTailor?.pbc ?? [])
      .filter((d) => d.sectionId === s.id)
      .forEach((d, i) => {
        const key = `${s.id}:ai${i}`
        out.push({ key, sectionId: s.id, code: s.code, title: d.text, state: eng.pbc[key] ?? null })
      })
  }
  return out
}

export type PbcStats = { total: number; pending: number; requested: number; received: number; na: number }

export function pbcStats(eng: Engagement): PbcStats {
  const stats: PbcStats = { total: 0, pending: 0, requested: 0, received: 0, na: 0 }
  // v28 — derived from pbcItems so AI-added requests count too
  for (const it of pbcItems(eng)) {
    stats.total++
    if (!it.state) stats.pending++
    else stats[it.state.status]++
  }
  return stats
}

/* ------------------------------------------------------------------ */
/* findings / SAD roll-up (ISA 450 evaluation of misstatements)        */
/* ------------------------------------------------------------------ */

/** Aggregate uncorrected misstatements = open + passed (waived by the
 *  client). Corrected entries are excluded — they no longer misstate. */
export function uncorrectedTotal(eng: Engagement): { total: number; open: number; passed: number } {
  let open = 0
  let passed = 0
  for (const f of eng.findings) {
    if (f.status === "open" && typeof f.amount === "number" && isFinite(f.amount)) open += f.amount
    if (f.status === "passed" && typeof f.amount === "number" && isFinite(f.amount)) passed += f.amount
  }
  return { total: open + passed, open, passed }
}

export type SadLevel = "ok" | "trivial" | "evaluate" | "material" | "setup"

export type SadVerdict = {
  level: SadLevel
  en: string
  ar: string
}

/** ISA 450-style evaluation of aggregate uncorrected misstatements. */
export function sadVerdict(eng: Engagement): SadVerdict {
  const { total } = uncorrectedTotal(eng)
  const { pm, ctt } = eng
  if (typeof pm !== "number" || typeof ctt !== "number" || pm <= 0 || ctt <= 0)
    return {
      level: "setup",
      en: "Set performance materiality and the clearly-trivial threshold (AP-02) to activate the evaluation.",
      ar: "أدخل أهمية الأداء وحد الأهمية التافه (AP-02) لتفعيل التقييم.",
    }
  if (total === 0)
    return {
      level: "ok",
      en: "No uncorrected misstatements recorded. Keep logging every item above the clearly-trivial threshold.",
      ar: "لا توجد فروقات غير مصححة مسجلة. استمر في تسجيل كل بند يتجاوز حد الأهمية التافه.",
    }
  if (total < ctt)
    return {
      level: "trivial",
      en: "Aggregate uncorrected misstatements are below the clearly-trivial threshold — clearly trivial on a quantitative basis (still consider qualitative factors).",
      ar: "إجمالي الفروقات غير المصححة أقل من حد الأهمية التافه — تافهة كمّيًا (مع مراعاة الأسباب النوعية أيضًا).",
    }
  if (total < pm)
    return {
      level: "evaluate",
      en: "Aggregate uncorrected misstatements exceed the clearly-trivial threshold but remain below performance materiality. Evaluate with management, consider qualitative factors, and propose adjustments where warranted.",
      ar: "إجمالي الفروقات غير المصححة تجاوز حد الأهمية التافه لكنه أقل من أهمية الأداء. ناقشها مع الإدارة وقوّم الأسباب النوعية واقترح التسويات عند اللزوم.",
    }
  return {
    level: "material",
    en: "Aggregate uncorrected misstatements reach performance materiality. Material misstatement risk — obtain corrections before concluding; an unmodified opinion is at risk if management refuses.",
    ar: "إجمالي الفروقات غير المصححة يبلغ أهمية الأداء. خطر تحريف جوهري — يجب الحصول على تسويات قبل إصدار الرأي، ويرتبط رأي غير معدّل بالرفض.",
  }
}

/* ------------------------------------------------------------------ */
/* CSV export                                                          */
/* ------------------------------------------------------------------ */

/** CSV cell — guard against spreadsheet formula injection (= + - @). */
function csvCell(v: string | number | undefined | null): string {
  const s = v === undefined || v === null ? "" : String(v)
  const guarded = /^[=+\-@]/.test(s) ? `'${s}` : s
  return `"${guarded.replace(/"/g, '""')}"`
}

function csvDate(ts?: number): string {
  if (!ts) return ""
  return new Date(ts).toISOString().slice(0, 10)
}

function downloadCsv(name: string, rows: string[][]) {
  const csv = rows.map((r) => r.map(csvCell).join(",")).join("\r\n")
  // BOM so Excel opens Arabic correctly
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = name
  a.click()
  URL.revokeObjectURL(url)
}

/** Full tick-off export — evidence of work performed (ISA 230). */
export function exportTickoffCsv(eng: Engagement, lang: "en" | "ar") {
  const rows: string[][] = [
    lang === "ar"
      ? ["القسم", "البند", "رقم الإجراء", "الإجراء", "الحالة", "مرجع ورقة العمل", "المُعِد", "التاريخ", "سبب عدم الانطباق", "ملاحظات"]
      : ["Section", "Account area", "Procedure ID", "Procedure", "Status", "WP ref", "Prepared by", "Date", "N/A reason", "Notes"],
  ]
  for (const s of PROGRAM_SECTIONS)
    s.procedures.forEach((p, i) => {
      const st = eng.procedures[p.id]
      rows.push([
        s.code,
        lang === "ar" ? s.title.ar : s.title.en,
        `${s.code}-${i + 1}`,
        lang === "ar" ? p.text.ar : p.text.en,
        st?.status === "done" ? (lang === "ar" ? "منجز" : "Done") : st?.status === "na" ? "N/A" : "",
        st?.wp ?? "",
        st?.initials ?? "",
        csvDate(st?.date),
        st?.status === "na" ? (st.naReason ?? "") : "",
        st?.note ?? "",
      ])
    })
  const slug = eng.client.replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "").toLowerCase() || "engagement"
  downloadCsv(`audit-program-${slug}-${eng.period.replace(/\s+/g, "")}.csv`, rows)
}

/** Client-facing PBC request list with current statuses. */
export function exportPbcCsv(eng: Engagement) {
  const rows: string[][] = [
    ["Section", "Document (EN)", "المستند", "Status", "Requested", "Received"],
  ]
  for (const s of PROGRAM_SECTIONS)
    s.documents.forEach((d, i) => {
      const st = eng.pbc[`${s.id}:${i}`]
      const status =
        st?.status === "received" ? "Received" : st?.status === "requested" ? "Requested" : st?.status === "na" ? "N/A" : "Pending"
      rows.push([s.code, d.en, d.ar, status, csvDate(st?.requestedAt), csvDate(st?.receivedAt)])
    })
  const slug = eng.client.replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "").toLowerCase() || "engagement"
  downloadCsv(`pbc-list-${slug}.csv`, rows)
}

/* ------------------------------------------------------------------ */
/* v21 — findings register export (SAD with proposed adjustments)      */
/* ------------------------------------------------------------------ */

/** The summary of adjusted differences as management can post it. */
export function exportFindingsCsv(eng: Engagement, lang: "en" | "ar") {
  const rows: string[][] = [
    lang === "ar"
      ? ["القسم", "الوصف", "المبلغ (ج.م)", "الحالة", "نوعية؟", "مرجع ورقة العمل", "تسوية مقترحة — مدين", "تسوية مقترحة — دائن", "المبلغ المقترح"]
      : ["Section", "Description", "Amount (EGP)", "Status", "Qualitative?", "WP ref", "Proposed adj — Dr", "Proposed adj — Cr", "Proposed amount"],
  ]
  const statusAr: Record<FindingStatus, string> = { open: "قائمة", passed: "مُجازة", corrected: "مصححة" }
  for (const f of eng.findings) {
    rows.push([
      f.sectionId,
      f.description,
      typeof f.amount === "number" ? String(f.amount) : "",
      lang === "ar" ? statusAr[f.status] : f.status,
      f.qualitative ? (lang === "ar" ? "نعم" : "Yes") : "",
      f.wp ?? "",
      f.adj?.dr ?? "",
      f.adj?.cr ?? "",
      typeof f.adj?.amount === "number" ? String(f.adj.amount) : "",
    ])
  }
  const slug = eng.client.replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "").toLowerCase() || "engagement"
  downloadCsv(`sad-${slug}-${eng.period.replace(/\s+/g, "")}.csv`, rows)
}

/* ------------------------------------------------------------------ */
/* v21 — working-paper index (ISA 230 cross-reference discipline)      */
/* ------------------------------------------------------------------ */

export type WpIndexEntry = {
  ref: string
  procIds: string[]
  sections: string[]
}

export type WpIndexReport = {
  entries: WpIndexEntry[]
  /** done procedures with no WP ref at all */
  missing: { procId: string; sectionCode: string; text: string }[]
  /** the same WP ref used by procedures in different sections */
  duplicates: WpIndexEntry[]
}

export function wpIndex(eng: Engagement, sections = PROGRAM_SECTIONS): WpIndexReport {
  const byRef = new Map<string, WpIndexEntry>()
  const missing: WpIndexReport["missing"] = []
  for (const s of sections)
    s.procedures.forEach((p) => {
      const st = eng.procedures[p.id]
      if (st?.status !== "done") return
      const ref = st.wp?.trim()
      if (!ref) {
        missing.push({ procId: p.id, sectionCode: s.code, text: p.text.en })
        return
      }
      const norm = ref.toUpperCase().replace(/\s+/g, "")
      const e = byRef.get(norm) ?? { ref, procIds: [], sections: [] }
      e.procIds.push(p.id)
      if (!e.sections.includes(s.code)) e.sections.push(s.code)
      byRef.set(norm, e)
    })
  const entries = [...byRef.values()].sort((a, b) => a.ref.localeCompare(b.ref))
  const duplicates = entries.filter((e) => e.procIds.length > 1)
  return { entries, missing, duplicates }
}

/* ------------------------------------------------------------------ */
/* v21 — assertion coverage map (ISA 315/330 linkage)                   */
/* ------------------------------------------------------------------ */

export type AssertionCoverage = {
  /** assertion code → covered / total across ticked procedures */
  rows: { code: string; done: number; na: number; total: number }[]
  /** sections carrying this assertion vocabulary */
  totalSections: number
}

export function assertionCoverage(eng: Engagement, assertions: { code: string }[], sections = PROGRAM_SECTIONS): AssertionCoverage {
  const rows = assertions.map((a) => ({ code: a.code, done: 0, na: 0, total: 0 }))
  const byCode = new Map(rows.map((r) => [r.code, r]))
  for (const s of sections)
    for (const code of s.assertions ?? []) {
      const r = byCode.get(code)
      if (!r) continue
      for (const p of s.procedures) {
        const st = eng.procedures[p.id]
        r.total++
        if (st?.status === "done") r.done++
        else if (st?.status === "na") r.na++
      }
    }
  return { rows, totalSections: sections.filter((s) => (s.assertions ?? []).length > 0).length }
}

/* ------------------------------------------------------------------ */
/* v21 — PBC aging (chaser discipline)                                  */
/* ------------------------------------------------------------------ */

export type AgedPbc = PbcItem & { daysOutstanding: number }

/** Requested-but-not-received items, oldest chaser first. */
export function pbcAging(eng: Engagement): AgedPbc[] {
  const now = Date.now()
  return pbcItems(eng)
    .filter((it) => it.state?.status === "requested")
    .map((it) => ({
      ...it,
      daysOutstanding: it.state?.requestedAt ? Math.floor((now - it.state.requestedAt) / 86_400_000) : 0,
    }))
    .sort((a, b) => b.daysOutstanding - a.daysOutstanding)
}

/* ------------------------------------------------------------------ */
/* v21 — engagement close-out bundle (Markdown, ISA 230.14 assembly)   */
/* ------------------------------------------------------------------ */

function mdEscape(s: string): string {
  return s.replace(/\|/g, "\\|")
}

/** The one-document engagement summary: progress, PBC, SAD vs PM,
 *  unsigned sections, GC conclusion — printable, archivable. */
export function engagementBundleMd(eng: Engagement, sections = PROGRAM_SECTIONS): string {
  const prog = overallProgress(eng)
  const ps = pbcStats(eng)
  const unc = uncorrectedTotal(eng)
  const verdict = sadVerdict(eng)
  const wp = wpIndex(eng, sections)
  const aged = pbcAging(eng)
  const unsigned = sections.filter((s) => {
    const so = eng.signoffs[s.id]
    return sectionProgress(eng, s.id).pct > 0 && !(so?.preparedBy && so?.reviewedBy)
  })

  const lines: string[] = [
    `# Audit file close-out — ${eng.client} (${eng.period})`,
    "",
    `Generated ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} · AuditEdge Academy`,
    "",
    "## 1. Fieldwork progress",
    `- Procedures performed: **${prog.done}** done + ${prog.na} N/A of ${prog.total} (**${prog.pct}%**)`,
    ...(eng.sectorId ? [`- Industry sector: ${eng.sectorId}`] : []),
    "",
    "## 2. Materiality (ISA 320)",
    // v40 — a partial materiality memo (missing om/pm/ctt numbers, e.g. from
    // a legacy record) must never crash the close-out bundle: each line is
    // printed only when its number exists, and a fully-empty memo reads as
    // "not yet saved" instead of a 500.
    ...(eng.materiality &&
    (typeof eng.materiality.om === "number" ||
      typeof eng.materiality.pm === "number" ||
      typeof eng.materiality.ctt === "number")
      ? [
          ...(typeof eng.materiality.om === "number"
            ? [
                `- Overall materiality: EGP ${eng.materiality.om.toLocaleString()}${eng.materiality.benchmark ? ` (${eng.materiality.benchmark})` : ""}`,
              ]
            : []),
          ...(typeof eng.materiality.pm === "number"
            ? [
                `- Performance materiality: EGP ${eng.materiality.pm.toLocaleString()}${typeof eng.materiality.pmPct === "number" ? ` (${eng.materiality.pmPct}% of OM)` : ""}`,
              ]
            : []),
          ...(typeof eng.materiality.ctt === "number"
            ? [`- Clearly-trivial threshold: EGP ${eng.materiality.ctt.toLocaleString()}`]
            : []),
          `- Rationale: ${eng.materiality.rationale || "—"}`,
        ]
      : ["- Not yet saved from the AP-02 calculator."]),
    "",
    "## 3. Summary of adjusted differences (ISA 450)",
    `- Open: EGP ${unc.open.toLocaleString()} · waived: EGP ${unc.passed.toLocaleString()} · **aggregate uncorrected: EGP ${unc.total.toLocaleString()}**`,
    `- Verdict: ${verdict.en}`,
    `- Qualitative findings: ${eng.findings.filter((f) => f.qualitative).length}`,
    "",
    "## 4. PBC status",
    `- Received ${ps.received}/${ps.total} · requested ${ps.requested} · pending ${ps.pending}`,
    ...(aged.length
      ? [
          `- Outstanding requests (oldest first): ${aged
            .slice(0, 5)
            .map((a) => `${a.code} (${a.daysOutstanding}d)`)
            .join(", ")}${aged.length > 5 ? " …" : ""}`,
        ]
      : ["- No outstanding requests."]),
    "",
    "## 5. Working-paper index (ISA 230)",
    ...(wp.entries.length
      ? [
          "| WP ref | Sections | Procedures |",
          "| --- | --- | --- |",
          ...wp.entries.map((e) => `| ${mdEscape(e.ref)} | ${e.sections.join(", ")} | ${e.procIds.length} |`),
        ]
      : ["- No WP references recorded yet."]),
    ...(wp.missing.length ? [`- Done procedures with no WP ref: ${wp.missing.length}`] : []),
    ...(wp.duplicates.length ? [`- Reused WP refs (check): ${wp.duplicates.map((d) => d.ref).join(", ")}`] : []),
    "",
    "## 6. Going concern (ISA 570)",
    ...(eng.gc
      ? [
          `- Indicators observed: ${Object.values(eng.gc.indicators).filter(Boolean).length}`,
          `- Conclusion: ${eng.gc.conclusion}`,
          ...(eng.gc.notes ? [`- Notes: ${eng.gc.notes}`] : []),
        ]
      : ["- Checklist not yet completed."]),
    "",
    "## 7. Sections awaiting sign-off",
    ...(unsigned.length
      ? unsigned.map((s) => `- ${s.code} — ${s.title.en} (${sectionProgress(eng, s.id).pct}% performed)`)
      : ["- All active sections prepared and reviewed."]),
    "",
    "## 8. Risk matrix (ISA 315/330)",
    ...(eng.riskMatrix?.length
      ? [
          "| Account | Assertion | IR | CR | Significant | Response |",
          "| --- | --- | --- | --- | --- | --- |",
          ...eng.riskMatrix.map(
            (r) => `| ${mdEscape(r.account)} | ${r.assertion} | ${r.ir} | ${r.cr} | ${r.significant ? "yes" : ""} | ${mdEscape(r.response)} |`
          ),
        ]
      : ["- Risk matrix not yet built."]),
    "",
    "## 9. JE / TB analytics (ISA 240)",
    eng.jeSummary
      ? `- Population ${eng.jeSummary.population.toLocaleString()} entries · ${eng.jeSummary.exceptions} exceptions flagged · saved ${csvDate(eng.jeSummary.savedAt)}`
      : "- Analyzer results not yet saved to this engagement.",
    "",
    "## 10. Open findings register",
    ...(eng.findings.length
      ? [
          "| Section | Description | EGP | Status |",
          "| --- | --- | --- | --- |",
          ...eng.findings.map(
            (f) => `| ${f.sectionId} | ${mdEscape(f.description)} | ${typeof f.amount === "number" ? f.amount.toLocaleString() : "—"} | ${f.status} |`
          ),
        ]
      : ["- No findings recorded."]),
    "",
  ]
  return lines.join("\n")
}

export function downloadEngagementBundle(eng: Engagement) {
  const md = engagementBundleMd(eng)
  const slug = eng.client.replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, "").toLowerCase() || "engagement"
  const blob = new Blob([`\uFEFF${md}`], { type: "text/markdown;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `closeout-${slug}-${eng.period.replace(/\s+/g, "")}.md`
  a.click()
  URL.revokeObjectURL(url)
}

/* ------------------------------------------------------------------ */
/* v21 — localStorage workspaces in the backup round-trip              */
/* ------------------------------------------------------------------ */

/** Everything the server-side /api/user-data export CANNOT see: the
 *  engagement store (tick-offs, findings, sign-offs, PBC), KAM drafts and
 *  industry-analysis history. One JSON file the learner can re-import. */
export function exportWorkspaceLocalJson(): string {
  const ls = typeof localStorage === "undefined" ? null : localStorage
  const payload: Record<string, unknown> = {
    version: 21,
    exportedAt: new Date().toISOString(),
    engagements: JSON.parse(ls?.getItem("auditedge-engagements-v1") ?? '{"engagements":[],"activeId":null}'),
  }
  for (const key of ["auditedge-kam-draft", "auditedge-industry-analyses-v1", "auditedge-bookmarks"]) {
    const raw = ls?.getItem(key)
    if (raw) {
      try {
        payload[key] = JSON.parse(raw)
      } catch {
        payload[key] = raw
      }
    }
  }
  return JSON.stringify(payload, null, 2)
}

export function downloadWorkspaceLocalBackup() {
  const slug = new Date().toISOString().slice(0, 10)
  const blob = new Blob([exportWorkspaceLocalJson()], { type: "application/json" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `auditedge-workspace-backup-${slug}.json`
  a.click()
  URL.revokeObjectURL(url)
}

/** Import a workspace backup — merges engagements by id (never deletes
 *  current work) and restores KAM/industry history only when absent. */
export async function importWorkspaceLocalJson(file: File): Promise<{ engagements: number; restored: string[] }> {
  const text = await file.text()
  const data = JSON.parse(text) as Record<string, unknown>
  const restored: string[] = []
  let count = 0

  const store = loadEngagements()
  const incoming = (data.engagements as EngagementStore | undefined)?.engagements
  if (Array.isArray(incoming) && incoming.length) {
    const byId = new Map(store.engagements.map((e) => [e.id, e]))
    for (const e of incoming) {
      if (!e || typeof e.id !== "string") continue
      if (!byId.has(e.id)) {
        // defensive normalisation — same shape as loadEngagements
        byId.set(e.id, {
          ...e,
          procedures: e.procedures ?? {},
          pbc: e.pbc ?? {},
          findings: Array.isArray(e.findings) ? e.findings : [],
          signoffs: e.signoffs ?? {},
        })
        count++
      }
    }
    store.engagements = [...byId.values()]
    saveEngagements(store)
    restored.push("engagements")
  }

  for (const key of ["auditedge-kam-draft", "auditedge-industry-analyses-v1", "auditedge-bookmarks"]) {
    if (data[key] !== undefined && !localStorage.getItem(key)) {
      localStorage.setItem(key, typeof data[key] === "string" ? data[key] : JSON.stringify(data[key]))
      restored.push(key)
    }
  }
  return { engagements: count, restored }
}
