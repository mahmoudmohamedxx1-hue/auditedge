/** Trial-balance & journal-entry data analysis for fieldwork (ISA 240 / ISA 330).
 *  Real client-side analytics: CSV parsing, column auto-detection, Benford's
 *  first-digit test, duplicate and round-number detection, weekend postings,
 *  period-end clustering and threshold tests. No data leaves the browser. */

// ---------- CSV parsing (RFC-4180-ish, delimiter sniffing) ----------

export type Row = Record<string, string>

export interface ParsedCsv {
  headers: string[]
  rows: Row[]
}

export function parseCsv(text: string): ParsedCsv {
  const clean = text.replace(/^\uFEFF/, "")
  const lines = splitLines(clean)
  if (lines.length === 0) return { headers: [], rows: [] }

  const delim = sniffDelimiter(lines)
  const table: string[][] = []
  let field = ""
  let row: string[] = []
  let inQuotes = false

  for (let i = 0; i < clean.length; i++) {
    const c = clean[i]
    if (inQuotes) {
      if (c === '"') {
        if (clean[i + 1] === '"') {
          field += '"'
          i++
        } else inQuotes = false
      } else field += c
    } else if (c === '"') {
      inQuotes = true
    } else if (c === delim) {
      row.push(field.trim())
      field = ""
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && clean[i + 1] === "\n") i++
      row.push(field.trim())
      field = ""
      if (row.some((f) => f !== "")) table.push(row)
      row = []
    } else field += c
  }
  row.push(field.trim())
  if (row.some((f) => f !== "")) table.push(row)

  if (table.length < 2) return { headers: table[0] ?? [], rows: [] }

  // header = first row; if it looks numeric (no headers), synthesize names
  const first = table[0]
  const headerish = first.some((h) => h && !isNumericLike(h))
  const headers = headerish
    ? first.map((h, i) => h || `Column ${i + 1}`)
    : first.map((_, i) => `Column ${i + 1}`)
  const dataRows = headerish ? table.slice(1) : table
  const rows: Row[] = dataRows.map((r) => {
    const o: Row = {}
    headers.forEach((h, i) => (o[h] = r[i] ?? ""))
    return o
  })
  return { headers, rows }
}

function splitLines(text: string): string[] {
  return text.split(/\r?\n/).filter((l) => l.trim() !== "")
}

function sniffDelimiter(lines: string[]): string {
  const sample = lines.slice(0, 10).join("\n")
  // inside quotes doesn't matter for sniffing counts at this scale
  const candidates = [",", ";", "\t", "|"]
  let best = ","
  let bestScore = -1
  for (const d of candidates) {
    const score = (sample.match(new RegExp(escapeRe(d), "g")) ?? []).length
    if (score > bestScore) {
      bestScore = score
      best = d
    }
  }
  return best
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

// ---------- column auto-detection ----------

export interface DetectedColumns {
  date: string | null
  description: string | null
  account: string | null
  amount: string | null
  debit: string | null
  credit: string | null
  voucher: string | null
  user: string | null
}

const PATTERNS = {
  date: [/date|تاريخ|trx|trans|posting/i],
  description: [/desc|narrat|particul|details|memo|بيان|وصف|تفاصيل|البيان/i],
  account: [/account|ledger|gl\s?code|حساب|الحساب|رقم الحساب/i, /^code$/i],
  amount: [/amount|value|net|total|amt|المبلغ|القيمة|صافي/i, /balance|رصيد/i],
  debit: [/debit|dr\b|مدين|مدين/i],
  credit: [/credit|cr\b|دائن|ائتمان/i],
  voucher: [/entry|voucher|journal|قيد|سند|مرجع/i],
  user: [/user|posted by|prepared|entry by|مستخدم|بواسطة|أعد/i],
}

function headerScore(header: string, patterns: RegExp[]): number {
  // +2 when a pattern matches → prefers specific names over generic ones
  return patterns.some((p) => p.test(header)) ? 2 : 0
}

function numericRatio(rows: Row[], col: string): number {
  let n = 0
  let numeric = 0
  for (const r of rows.slice(0, 300)) {
    const v = r[col]
    if (v && v.trim()) {
      n++
      if (isNumericLike(v)) numeric++
    }
  }
  return n === 0 ? 0 : numeric / n
}

export function isNumericLike(v: string): boolean {
  const t = v.trim().replace(/[,\s]/g, "").replace(/[()]/g, "")
  if (!t || !/[\d]/.test(t)) return false
  return /^-?\d*\.?\d+([eE][-+]?\d+)?$/.test(t)
}

export function toNumber(v: string): number {
  const neg = /^\(.*\)$/.test(v.trim())
  const t = v.trim().replace(/[,\s]/g, "").replace(/[()]/g, "")
  const n = parseFloat(t)
  if (!isFinite(n)) return NaN
  return neg ? -n : n
}

export function detectColumns(parsed: ParsedCsv): DetectedColumns {
  const pick = (patterns: RegExp[], exclude: string[] = []): string | null => {
    let best: string | null = null
    let bestScore = 0
    for (const h of parsed.headers) {
      if (exclude.includes(h)) continue
      const s = headerScore(h, patterns)
      if (s > bestScore) {
        bestScore = s
        best = h
      }
    }
    return best
  }

  const debit = pick(PATTERNS.debit)
  const credit = debit ? pick(PATTERNS.credit, [debit]) : pick(PATTERNS.credit)
  const date = pick(PATTERNS.date, [debit, credit].filter(Boolean) as string[])
  const account = pick(PATTERNS.account, [debit, credit].filter(Boolean) as string[])
  const description = pick(PATTERNS.description)
  const voucher = pick(PATTERNS.voucher, [date, description].filter(Boolean) as string[])
  const user = pick(PATTERNS.user)

  // amount: prefer a dedicated amount column that is actually numeric
  let amount: string | null = null
  let bestScore = 0
  for (const h of parsed.headers) {
    if ([debit, credit].includes(h)) continue
    const s = headerScore(h, PATTERNS.amount)
    const nr = numericRatio(parsed.rows, h)
    if (s > 0 && nr > 0.7 && s + nr > bestScore) {
      bestScore = s + nr
      amount = h
    }
  }

  return { date, description, account, amount, debit, credit, voucher, user }
}

// ---------- date parsing ----------

export function parseDate(v: string): Date | null {
  const t = v.trim()
  if (!t) return null
  // 2024-01-31 / 2024/01/31 (with optional time)
  let m = t.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/)
  if (m) return safeDate(+m[1], +m[2], +m[3])
  // 31-01-2024 / 31/01/2024 / 31.01.2024 — assume D-M-Y (common outside the US)
  m = t.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})/)
  if (m) {
    const d1 = +m[1]
    const d2 = +m[2]
    // ambiguous: if first number > 12 it must be the day
    if (d1 > 12) return safeDate(+m[3], d2, d1)
    return safeDate(+m[3], d1, d2)
  }
  const dt = new Date(t)
  if (!isNaN(dt.getTime())) return dt
  return null
}

function safeDate(y: number, m: number, d: number): Date | null {
  const dt = new Date(y, m - 1, d)
  if (dt.getFullYear() !== y || dt.getMonth() !== m - 1 || dt.getDate() !== d) return null
  return isNaN(dt.getTime()) ? null : dt
}

// ---------- Benford's first-digit test ----------

export interface BenfordResult {
  digits: { digit: number; actual: number; expected: number; count: number }[]
  /** chi-square statistic */
  chi2: number
  /** mean absolute deviation (Nigrini thresholds: <0.006 close, <0.012
   *  acceptable, <0.015 marginal, >=0.015 nonconformity) */
  mad: number
  n: number
}

const BENFORD_EXPECTED = Array.from({ length: 9 }, (_, i) => Math.log10(1 + 1 / (i + 1)))

export function benfordFirstDigit(values: number[]): BenfordResult | null {
  const digits = new Array(9).fill(0)
  let n = 0
  for (const v of values) {
    const a = Math.abs(v)
    if (a < 1) continue // ignore sub-unit amounts (noise)
    const s = String(Math.floor(a))
    const d = s[0] === "0" ? s.replace(/^0+/, "")[0] : s[0]
    const di = parseInt(d, 10)
    if (di >= 1 && di <= 9) {
      digits[di - 1]++
      n++
    }
  }
  if (n < 30) return null // too few for a meaningful test
  let chi2 = 0
  let mad = 0
  const rows = digits.map((count, i) => {
    const actual = count / n
    const expected = BENFORD_EXPECTED[i]
    const eCount = expected * n
    chi2 += ((count - eCount) * (count - eCount)) / eCount
    mad += Math.abs(actual - expected)
    return { digit: i + 1, actual, expected, count }
  })
  return { digits: rows, chi2, mad: mad / 9, n }
}

// ---------- analysis engine ----------

export type Severity = "high" | "medium" | "info"

export interface Finding {
  id: string
  severity: Severity
  titleEn: string
  titleAr: string
  detailEn: string
  detailAr: string
  count: number
  value: number | null
  samples: string[]
}

export interface AnalysisSummary {
  mode: "tb" | "je"
  rows: number
  columns: DetectedColumns
  dateRange: { from: Date; to: Date } | null
  totalDebit: number | null
  totalCredit: number | null
  totalValue: number | null
  accounts: number
  benford: BenfordResult | null
}

export interface AnalysisResult {
  summary: AnalysisSummary
  findings: Finding[]
}

interface AnalyzeOptions {
  /** review threshold for "large amounts" (e.g. performance materiality) */
  threshold: number | null
  /** weekend days: 5=Fri, 6=Sat (Egypt) */
  weekend: number[]
  /** period-end window in days */
  tailDays: number
}

export const DEFAULT_OPTIONS: AnalyzeOptions = {
  threshold: null,
  weekend: [5, 6],
  tailDays: 7,
}

export function analyze(
  parsed: ParsedCsv,
  cols: DetectedColumns,
  opts: AnalyzeOptions = DEFAULT_OPTIONS
): AnalysisResult {
  const findings: Finding[] = []
  const rows = parsed.rows
  const mode: "tb" | "je" = !!cols.date ? "je" : "tb"

  // ---- normalize records ----
  interface Rec {
    account: string
    desc: string
    amount: number | null
    debit: number | null
    credit: number | null
    date: Date | null
    voucher: string
    user: string
    raw: string
  }
  const recs: Rec[] = []
  for (const r of rows) {
    const account = cols.account ? r[cols.account] : ""
    const desc = cols.description ? r[cols.description] : ""
    const debit = cols.debit && r[cols.debit] ? toNumber(r[cols.debit]) : null
    const credit = cols.credit && r[cols.credit] ? toNumber(r[cols.credit]) : null
    const amount =
      cols.amount && r[cols.amount] ? toNumber(r[cols.amount]) : netOf(debit, credit)
    const date = cols.date ? parseDate(r[cols.date]) : null
    recs.push({
      account,
      desc,
      amount,
      debit,
      credit,
      date,
      voucher: cols.voucher ? r[cols.voucher] : "",
      user: cols.user ? r[cols.user] : "",
      raw: Object.values(r).filter(Boolean).join(" · "),
    })
  }

  const dated = recs.filter((r) => r.date) as (Rec & { date: Date })[]
  const dateRange =
    dated.length > 0
      ? {
          from: dated.reduce((a, b) => (a.date < b.date ? a : b)).date,
          to: dated.reduce((a, b) => (a.date > b.date ? a : b)).date,
        }
      : null

  const accountSet = new Set(recs.map((r) => r.account).filter(Boolean))
  const values = recs.map((r) => r.amount).filter((v): v is number => v !== null && isFinite(v))
  const totalDebit = cols.debit
    ? recs.reduce((s, r) => s + (r.debit && isFinite(r.debit) ? r.debit : 0), 0)
    : null
  const totalCredit = cols.credit
    ? recs.reduce((s, r) => s + (r.credit && isFinite(r.credit) ? r.credit : 0), 0)
    : null
  const totalValue = values.length
    ? values.reduce((s, v) => s + Math.abs(v), 0)
    : null

  const benford = benfordFirstDigit(values)

  const add = (f: Finding) => {
    if (f.count > 0) findings.push(f)
  }

  // ---- trial balance integrity (TB mode only: in a JE listing the debit
  // and credit columns are per-line sides of entries, not ledger totals) ----
  if (mode === "tb" && totalDebit !== null && totalCredit !== null) {
    const diff = Math.abs(totalDebit - totalCredit)
    if (diff > 0.5)
      add({
        id: "tb-imbalance",
        severity: "high",
        titleEn: "Trial balance does not balance",
        titleAr: "ميزان المراجعة غير متوازن",
        detailEn: `Total debits (${fmt(totalDebit)}) minus total credits (${fmt(totalCredit)}) leaves ${fmt(diff)} unexplained. Obtain the reconciliation before relying on this extract.`,
        detailAr: `إجمالي المدين (${fmt(totalDebit)}) ناقص إجمالي الدائن (${fmt(totalCredit)}) يترك ${fmt(diff)} غير مفسَّر. اطلب التسوية قبل الاعتماد على هذا المستخرج.`,
        count: 1,
        value: diff,
        samples: [],
      })
  } else if (mode === "tb" && totalValue !== null) {
    const net = values.reduce((s, v) => s + v, 0)
    if (Math.abs(net) > 0.5 && values.length > 5)
      add({
        id: "tb-net",
        severity: "medium",
        titleEn: "Balances do not net to zero",
        titleAr: "الأرصدة لا تُصافِر إلى صفر",
        detailEn: `Signed balances sum to ${fmt(net)} instead of zero — accounts may be missing from the extract or classified inconsistently.`,
        detailAr: `مجموع الأرصدة بالإشارة ${fmt(net)} بدلًا من الصفر — قد تكون حسابات ناقصة من المستخرج أو مصنفة بشكل غير متسق.`,
        count: 1,
        value: Math.abs(net),
        samples: [],
      })
  }

  // ---- Benford ----
  if (benford) {
    const verdict =
      benford.mad >= 0.015
        ? { en: "nonconformity — investigate which populations drive the deviation", ar: "عدم توافق — افحص المجتمعات التي تسبب الانحراف" }
        : benford.mad >= 0.012
          ? { en: "marginal conformity — worth a look", ar: "توافق حدّي — يستحق الفحص" }
          : { en: "conformity within acceptable range", ar: "توافق داخل النطاق المقبول" }
    if (benford.mad >= 0.012)
      add({
        id: "benford",
        severity: benford.mad >= 0.015 ? "medium" : "info",
        titleEn: `Benford first-digit deviation (MAD ${(benford.mad * 100).toFixed(2)}%)`,
        titleAr: `انحراف رقم بينفورد الأول (متوسط الانحراف المطلق ${(benford.mad * 100).toFixed(2)}%)`,
        detailEn: `Across ${fmt(benford.n)} amounts the first-digit distribution deviates from Benford's law (${verdict.en}). Digit over-representation often signals fabricated or rounded numbers.`,
        detailAr: `عبر ${fmt(benford.n)} مبلغًا ينحرف توزيع الرقم الأول عن قانون بينفورد (${verdict.ar}). تمركز أرقام معينة كثيرًا ما يشير إلى أرقام ملفقة أو مقرّبة.`,
        count: benford.n,
        value: null,
        samples: benford.digits
          .slice()
          .sort((a, b) => Math.abs(b.actual - b.expected) - Math.abs(a.actual - a.expected))
          .slice(0, 3)
          .map((d) => `${d.digit}: ${(d.actual * 100).toFixed(1)}% vs ${(d.expected * 100).toFixed(1)}% expected (${fmt(d.count)})`),
      })
  }

  // ---- round numbers ----
  const round1k = recs.filter(
    (r) => r.amount !== null && Math.abs(r.amount) >= 1000 && Math.abs(r.amount) % 1000 === 0
  )
  if (recs.length > 20 && round1k.length / recs.length > 0.35)
    add({
      id: "round",
      severity: "info",
      titleEn: `Round numbers: ${Math.round((round1k.length / recs.length) * 100)}% of amounts are multiples of 1,000`,
      titleAr: `أرقام مقربة: ${Math.round((round1k.length / recs.length) * 100)}% من المبالغ مضاعفات 1,000`,
      detailEn: "Some rounding is normal (accruals, provisions, transfers). Heavy rounding in transactional data suggests estimates booked as fact or manually keyed entries.",
      detailAr: "بعض التقريب طبيعي (مستحقات، مخصصات، تحويلات). التقريب الكثيف في بيانات المعاملات يوحي بتقديرات مسجلة كوقائع أو قيود مدخلة يدويًا.",
      count: round1k.length,
      value: round1k.reduce((s, r) => s + Math.abs(r.amount ?? 0), 0),
      samples: round1k.slice(0, 6).map((r) => r.raw),
    })

  // ---- journal-entry specific tests ----
  if (mode === "je" && dated.length > 0) {
    // per-voucher balance: debits must equal credits inside each voucher
    if (cols.voucher && cols.debit && cols.credit) {
      const perVoucher = new Map<string, { dr: number; cr: number; lines: Rec[] }>()
      for (const r of recs) {
        if (!r.voucher) continue
        const cur = perVoucher.get(r.voucher) ?? { dr: 0, cr: 0, lines: [] }
        cur.dr += r.debit && isFinite(r.debit) ? r.debit : 0
        cur.cr += r.credit && isFinite(r.credit) ? r.credit : 0
        cur.lines.push(r)
        perVoucher.set(r.voucher, cur)
      }
      const unbalanced = [...perVoucher.entries()].filter(
        ([, v]) => Math.abs(v.dr - v.cr) > 0.5
      )
      if (unbalanced.length > 0)
        add({
          id: "vouchers-unbalanced",
          severity: "high",
          titleEn: `${fmt(unbalanced.length)} vouchers whose debits do not equal credits`,
          titleAr: `${fmt(unbalanced.length)} سندًا لا يتساوى مدينه مع دائنه`,
          detailEn: "An unbalanced voucher cannot exist in a healthy ledger — either the extract is incomplete (filter cut lines) or the entry itself is broken. Obtain a complete re-extract of these vouchers.",
          detailAr: "السند غير المتوازن لا يمكن أن يوجد في دفتر سليم — إما أن المستخرج ناقص (مرشح قصّ الأسطر) أو أن القيد نفسه معطوب. اطلب إعادة استخراج كاملة لهذه السندات.",
          count: unbalanced.length,
          value: unbalanced.reduce((s, [, v]) => s + Math.abs(v.dr - v.cr), 0),
          samples: unbalanced.slice(0, 6).map(([id, v]) => `${id}: dr ${fmt(v.dr)} vs cr ${fmt(v.cr)}`),
        })
    }

    // weekend postings
    const weekend = dated.filter((r) => opts.weekend.includes(r.date.getDay()))
    if (weekend.length > 0)
      add({
        id: "weekend",
        severity: weekend.length > dated.length * 0.03 ? "medium" : "info",
        titleEn: `${fmt(weekend.length)} entries posted on weekends (Fri/Sat)`,
        titleAr: `${fmt(weekend.length)} قيدًا مرحّلًا في عطلة نهاية الأسبوع (الجمعة/السبت)`,
        detailEn: `Total ${fmt(weekend.reduce((s, r) => s + Math.abs(r.amount ?? 0), 0))}. Legitimate weekend posting exists (hotels, retail), but for office-based clients it deserves an explanation — a classic override indicator (ISA 240).`,
        detailAr: `إجمالي ${fmt(weekend.reduce((s, r) => s + Math.abs(r.amount ?? 0), 0))}. الترحيل في العطلة وارد قانونيًا (فنادق، تجزئة)، لكن في العملاء المكتبيين يستحق تفسيرًا — مؤشر كلاسيكي على تجاوز الإدارة (ISA 240).`,
        count: weekend.length,
        value: weekend.reduce((s, r) => s + Math.abs(r.amount ?? 0), 0),
        samples: weekend.slice(0, 6).map((r) => r.raw),
      })

    // period-end clustering
    const { to } = dateRange as { from: Date; to: Date }
    const tailStart = new Date(to.getTime() - opts.tailDays * 86400_000)
    const tail = dated.filter((r) => r.date >= tailStart)
    const tailValue = tail.reduce((s, r) => s + Math.abs(r.amount ?? 0), 0)
    const allValue = dated.reduce((s, r) => s + Math.abs(r.amount ?? 0), 0)
    if (allValue > 0 && tailValue / allValue > 0.25 && tail.length < dated.length * 0.2)
      add({
        id: "period-end",
        severity: "medium",
        titleEn: `Period-end clustering: ${Math.round((tailValue / allValue) * 100)}% of value in the last ${opts.tailDays} days`,
        titleAr: `تركّز نهاية الفترة: ${Math.round((tailValue / allValue) * 100)}% من القيمة في آخر ${opts.tailDays} يومًا`,
        detailEn: `Only ${fmt(tail.length)} of ${fmt(dated.length)} entries carry a quarter of the value. Scrutinize top-down: top-down JE testing at period end is the core management-override response.`,
        detailAr: `${fmt(tail.length)} فقط من ${fmt(dated.length)} قيدًا تحمل ربع القيمة. افحص تنازليًا: اختبار القيود تنازليًا عند نهاية الفترة هو جوهر الاستجابة لخطر تجاوز الإدارة.`,
        count: tail.length,
        value: tailValue,
        samples: tail
          .slice()
          .sort((a, b) => Math.abs(b.amount ?? 0) - Math.abs(a.amount ?? 0))
          .slice(0, 6)
          .map((r) => r.raw),
      })

    // duplicates (same account + amount + date)
    const seen = new Map<string, Rec[]>()
    for (const r of recs) {
      if (r.amount === null || !isFinite(r.amount) || r.amount === 0) continue
      const key = `${r.account || "-"}|${r.amount.toFixed(2)}|${r.date ? r.date.toISOString().slice(0, 10) : "-"}`
      const list = seen.get(key)
      if (list) list.push(r)
      else seen.set(key, [r])
    }
    const dupGroups = [...seen.values()].filter((g) => g.length > 1)
    if (dupGroups.length > 0)
      add({
        id: "duplicates",
        severity: "high",
        titleEn: `${fmt(dupGroups.length)} duplicated (account, amount, date) combinations`,
        titleAr: `${fmt(dupGroups.length)} توليفة مكررة (حساب، مبلغ، تاريخ)`,
        detailEn: `Duplicate postings can be accidental (double keying) or intentional (inflating expenses/revenue). Vouch each group to supporting documents.`,
        detailAr: `الترحيل المكرر قد يكون عرضيًا (إدخال مزدوج) أو مقصودًا (تضخيم مصروفات/إيرادات). افحص كل مجموعة إلى مستنداتها.`,
        count: dupGroups.reduce((s, g) => s + g.length, 0),
        value: dupGroups.reduce((s, g) => s + Math.abs(g[0].amount ?? 0) * (g.length - 1), 0),
        samples: dupGroups.slice(0, 6).map((g) => `${g.length}× ${g[0].raw}`),
      })

    // large + just-below-threshold
    const t = opts.threshold
    if (t && t > 0) {
      const large = recs.filter((r) => r.amount !== null && Math.abs(r.amount) >= t)
      if (large.length > 0)
        add({
          id: "large",
          severity: "info",
          titleEn: `${fmt(large.length)} entries at or above your review threshold`,
          titleAr: `${fmt(large.length)} قيدًا عند حد المراجعة الذي حددته أو أعلاه`,
          detailEn: `Threshold ${fmt(t)} — vouch the largest of these to source documents and approvals; they carry the audit risk.`,
          detailAr: `الحد ${fmt(t)} — افحص أكبرها إلى مستندات المصدر والاعتمادات؛ فهي التي تحمل مخاطر المراجعة.`,
          count: large.length,
          value: large.reduce((s, r) => s + Math.abs(r.amount ?? 0), 0),
          samples: large
            .slice()
            .sort((a, b) => Math.abs(b.amount ?? 0) - Math.abs(a.amount ?? 0))
            .slice(0, 6)
            .map((r) => r.raw),
        })
      const below = recs.filter(
        (r) =>
          r.amount !== null &&
          Math.abs(r.amount) >= t * 0.9 &&
          Math.abs(r.amount) < t
      )
      if (below.length >= 3)
        add({
          id: "below-threshold",
          severity: "medium",
          titleEn: `${fmt(below.length)} entries just below the threshold (90%–100% of ${fmt(t)})`,
          titleAr: `${fmt(below.length)} قيدًا أسفل الحد مباشرة (90%–100% من ${fmt(t)})`,
          detailEn: "A cluster immediately under an approval or review threshold is a classic splitting pattern — entries split to stay under authorization limits (ISA 240).",
          detailAr: "تمركز القيود أسفل حد الاعتماد أو المراجعة مباشرة نمط تجزئة كلاسيكي — قيود مقسومة للبقاء تحت حدود الصلاحيات (ISA 240).",
          count: below.length,
          value: below.reduce((s, r) => s + Math.abs(r.amount ?? 0), 0),
          samples: below.slice(0, 6).map((r) => r.raw),
        })
    }

    // unusual account combinations within one voucher
    if (cols.voucher) {
      const REVENUE = /revenue|sales|إيراد|إيرادات|بيع|المبيعات/i
      const COST = /expense|cost|cogs|مصروف|تكلفة|مشتريات|المشتريات/i
      const byVoucher = new Map<string, Rec[]>()
      for (const r of recs) {
        if (!r.voucher) continue
        const list = byVoucher.get(r.voucher)
        if (list) list.push(r)
        else byVoucher.set(r.voucher, [r])
      }
      const mixed: string[] = []
      for (const [, lines] of byVoucher) {
        const hasRev = lines.some((l) => REVENUE.test(l.account) || REVENUE.test(l.desc))
        const hasCost = lines.some((l) => COST.test(l.account) || COST.test(l.desc))
        if (hasRev && hasCost && lines.length >= 2)
          mixed.push(`${r0(lines[0].voucher)}: ${lines.map((l) => l.account || l.desc).join(" ↔ ")}`)
      }
      if (mixed.length > 0)
        add({
          id: "mixed-combo",
          severity: "info",
          titleEn: `${fmt(mixed.length)} vouchers mixing revenue and cost/expense accounts`,
          titleAr: `${fmt(mixed.length)} سندًا يخلط حسابات الإيراد بحسابات التكلفة/المصروف`,
          detailEn: "One-sided conventions usually separate these. A mix can be legitimate (sales returns with cost) — review the top items for business sense.",
          detailAr: "العرف يقضي بفصلهما غالبًا. الخلط قد يكون مشروعًا (مرتجعات بيع بتكلفتها) — راجع أكبر البنود لمعقوليتها التجارية.",
          count: mixed.length,
          value: null,
          samples: mixed.slice(0, 6),
        })
    }
  }

  // ---- TB concentration ----
  if (mode === "tb" && accountSet.size > 5) {
    const byAccount = new Map<string, number>()
    for (const r of recs) {
      if (r.amount === null || !isFinite(r.amount)) continue
      byAccount.set(r.account || "-", (byAccount.get(r.account || "-") ?? 0) + Math.abs(r.amount))
    }
    const totals = [...byAccount.entries()].sort((a, b) => b[1] - a[1])
    const grand = totals.reduce((s, [, v]) => s + v, 0)
    const top10 = totals.slice(0, 10).reduce((s, [, v]) => s + v, 0)
    if (grand > 0 && top10 / grand > 0.8)
      add({
        id: "concentration",
        severity: "info",
        titleEn: `Top 10 accounts carry ${Math.round((top10 / grand) * 100)}% of the balance`,
        titleAr: `أكبر 10 حسابات تمثل ${Math.round((top10 / grand) * 100)}% من الرصيد`,
        detailEn: "Concentrate substantive effort where the money is — the tail accounts can be covered analytically.",
        detailAr: "ركّز الجهد الجوهري حيث المال — حسابات الذيل يمكن تغطيتها تحليليًا.",
        count: 10,
        value: top10,
        samples: totals.slice(0, 5).map(([acc, v]) => `${acc}: ${fmt(v)}`),
      })

    const negatives = recs.filter((r) => r.amount !== null && r.amount < 0)
    if (negatives.length > 0 && negatives.length <= 30)
      add({
        id: "negative-balances",
        severity: "info",
        titleEn: `${fmt(negatives.length)} accounts with negative balances`,
        titleAr: `${fmt(negatives.length)} حسابًا بأرصدة سالبة`,
        detailEn: "Some are normal (accumulated depreciation, contra accounts, refunds received). Unexpected signs (negative inventory, negative cash) are red flags — verify the abnormal ones.",
        detailAr: "بعضها طبيعي (مجمع الإهلاك، الحسابات المقابلة، مرتجعات مستلمة). الإشارات غير المتوقعة (مخزون سالب، نقدية سالبة) إنذارات — تحقق من الشاذ منها.",
        count: negatives.length,
        value: null,
        samples: negatives.slice(0, 8).map((r) => r.raw),
      })
  }

  const severityRank: Record<Severity, number> = { high: 0, medium: 1, info: 2 }
  findings.sort((a, b) => severityRank[a.severity] - severityRank[b.severity] || b.count - a.count)

  return {
    summary: {
      mode,
      rows: rows.length,
      columns: cols,
      dateRange,
      totalDebit,
      totalCredit,
      totalValue,
      accounts: accountSet.size,
      benford,
    },
    findings,
  }
}

function netOf(debit: number | null, credit: number | null): number | null {
  if (debit !== null && isFinite(debit) && credit !== null && isFinite(credit)) {
    if (debit === 0 && credit === 0) return 0
    if (credit === 0) return debit
    if (debit === 0) return -credit
    return debit - credit
  }
  if (debit !== null && isFinite(debit) && debit !== 0) return debit
  if (credit !== null && isFinite(credit) && credit !== 0) return -credit
  return null
}

function r0(s: string): string {
  return s.length > 24 ? s.slice(0, 24) + "…" : s
}

export function fmt(n: number): string {
  if (!isFinite(n)) return "—"
  const abs = Math.abs(n)
  if (abs >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)}B`
  if (abs >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n)
}

/** Template CSVs (headers only) so teams know the expected shapes. */
export const TB_TEMPLATE = `Account,Description,Balance
1010 Cash on hand,Cash,150000
1020 Bank — CIB,Bank,2850000`

export const JE_TEMPLATE = `Voucher,Date,Account,Description,Debit,Credit
JV-2025-0001,2025-01-15,1010 Cash on hand,Cash withdrawal,50000,0
JV-2025-0001,2025-01-15,5010 Salaries expense,Payroll funding,0,50000`
