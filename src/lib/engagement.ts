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
}

export type Signoff = {
  preparedBy?: string
  preparedAt?: number
  reviewedBy?: string
  reviewedAt?: number
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

export type SectionProgress = {
  done: number
  na: number
  total: number
  /** done + na / total */
  pct: number
}

export function sectionProgress(eng: Engagement, sectionId: string): SectionProgress {
  const section = PROGRAM_SECTIONS.find((s) => s.id === sectionId)
  const total = section?.procedures.length ?? 0
  let done = 0
  let na = 0
  if (section)
    for (const p of section.procedures) {
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

/** Flatten every section's "documents to obtain" into one trackable list. */
export function pbcItems(eng: Engagement): PbcItem[] {
  const out: PbcItem[] = []
  for (const s of PROGRAM_SECTIONS)
    s.documents.forEach((d, i) => {
      const key = `${s.id}:${i}`
      out.push({ key, sectionId: s.id, code: s.code, title: d, state: eng.pbc[key] ?? null })
    })
  return out
}

export type PbcStats = { total: number; pending: number; requested: number; received: number; na: number }

export function pbcStats(eng: Engagement): PbcStats {
  const stats: PbcStats = { total: 0, pending: 0, requested: 0, received: 0, na: 0 }
  for (const s of PROGRAM_SECTIONS)
    s.documents.forEach((_, i) => {
      const st = eng.pbc[`${s.id}:${i}`]
      stats.total++
      if (!st) stats.pending++
      else stats[st.status]++
    })
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
