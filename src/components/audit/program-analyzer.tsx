"use client"

import { useCallback, useMemo, useRef, useState } from "react"
import {
  AnalysisResult,
  DetectedColumns,
  JE_TEMPLATE,
  TB_TEMPLATE,
  analyze,
  detectColumns,
  fmt,
  parseCsv,
  type ParsedCsv,
  type Severity,
} from "@/lib/tb-analysis"
import { useAppStore } from "@/store/useAppStore"
import { cn } from "@/lib/utils"
import {
  AlertTriangle,
  ChevronDown,
  Download,
  FileSpreadsheet,
  Info,
  Loader2,
  Save,
  SearchCheck,
  Sparkles,
  Upload,
  X,
} from "lucide-react"

type Lang = "en" | "ar"

const T = {
  title: { en: "Journal entry & trial balance analyzer", ar: "محلل القيود وميزان المراجعة" },
  subtitle: {
    en: "Upload a CSV export of the trial balance or the journal entry listing. Everything runs in your browser — the file never leaves this machine. The tests mirror ISA 240 journal-entry testing: Benford's law, duplicates, round numbers, weekend and period-end postings, threshold splitting.",
    ar: "ارفع مستخرج CSV لميزان المراجعة أو قائمة القيود. كل شيء يعمل داخل متصفحك — الملف لا يغادر جهازك أبدًا. الاختبارات تحاكي اختبار القيود وفق ISA 240: قانون بينفورد، والتكرارات، والأرقام المقربة، وترحيلات العطلات ونهاية الفترة، وتجزئة الحدود.",
  },
  upload: { en: "Drop a CSV here or click to browse", ar: "أفلت ملف CSV هنا أو اضغط للاختيار" },
  uploadHint: { en: "UTF-8 CSV · comma, semicolon or tab separated", ar: "CSV بترميز UTF-8 · فواصل أو نقطة فاصلة أو Tab" },
  detected: { en: "Detected columns (adjust if needed)", ar: "الأعمدة المكتشفة (عدّل إذا لزم)" },
  colDate: { en: "Date", ar: "التاريخ" },
  colDesc: { en: "Description", ar: "البيان" },
  colAccount: { en: "Account", ar: "الحساب" },
  colAmount: { en: "Amount / Balance", ar: "المبلغ / الرصيد" },
  colDebit: { en: "Debit", ar: "مدين" },
  colCredit: { en: "Credit", ar: "دائن" },
  colVoucher: { en: "Voucher / Entry no.", ar: "رقم القيد / السند" },
  colUser: { en: "User", ar: "المستخدم" },
  none: { en: "— none —", ar: "— لا شيء —" },
  mode: { en: "Mode", ar: "الوضع" },
  modeTb: { en: "Trial balance", ar: "ميزان مراجعة" },
  modeJe: { en: "Journal entries", ar: "قيود يومية" },
  rows: { en: "rows", ar: "صفًا" },
  accounts: { en: "accounts", ar: "حسابًا" },
  range: { en: "Period", ar: "الفترة" },
  totalDebit: { en: "Total debits", ar: "إجمالي المدين" },
  totalCredit: { en: "Total credits", ar: "إجمالي الدائن" },
  totalValue: { en: "Total |value|", ar: "إجمالي القيمة المطلقة" },
  thresholdLabel: { en: "Review threshold (e.g. performance materiality)", ar: "حد المراجعة (مثل أهمية الأداء)" },
  thresholdPh: { en: "e.g. 390000", ar: "مثال 390000" },
  findings: { en: "Findings", ar: "النتائج" },
  noFindings: { en: "No exceptions surfaced — the data passed these tests.", ar: "لا استثناءات — البيانات اجتازت هذه الاختبارات." },
  benford: { en: "Benford first-digit distribution", ar: "توزيع الرقم الأول (بينفورد)" },
  benfordExpected: { en: "dashed = expected", ar: "المتقطع = المتوقع" },
  exportCsv: { en: "Export findings (CSV)", ar: "تصدير النتائج (CSV)" },
  askAi: { en: "Interpret with the AI tutor", ar: "فسّر النتائج مع المساعد الذكي" },
  templateTb: { en: "TB template", ar: "قالب الميزان" },
  templateJe: { en: "JE template", ar: "قالب القيود" },
  clear: { en: "Clear", ar: "مسح" },
  samples: { en: "Examples", ar: "أمثلة" },
  parseError: { en: "Could not read that file as CSV — check the encoding and delimiter.", ar: "تعذر قراءة الملف كـ CSV — تحقق من الترميز والفاصل." },
  tooFew: { en: "That file has too few rows to analyze (need at least 5).", ar: "الملف يحتوي صفوفًا أقل من اللازم للتحليل (المطلوب 5 على الأقل)." },
  severeHigh: { en: "High", ar: "مرتفع" },
  severeMedium: { en: "Medium", ar: "متوسط" },
  severeInfo: { en: "Review", ar: "للمراجعة" },
} as const

const t = (k: keyof typeof T, lang: Lang) => T[k][lang]

function download(name: string, content: string, type = "text/csv;charset=utf-8") {
  const url = URL.createObjectURL(new Blob([content], { type }))
  const a = document.createElement("a")
  a.href = url
  a.download = name
  a.click()
  URL.revokeObjectURL(url)
}

/** Journal-entry / trial-balance analyzer (improvement #7): real client-side
 *  ISA 240 data analytics on the auditor's own CSV exports. */
export function JournalEntryAnalyzer({
  lang,
  onSave,
}: {
  lang: Lang
  /** v21: persist the JE-testing summary into the engagement (AP-01) */
  onSave?: (s: { population: number; exceptions: number; note: string }) => void
}) {
  const rtl = lang === "ar"
  const setAiPresetQuestion = useAppStore((s) => s.setAiPresetQuestion)
  const navigate = useAppStore((s) => s.navigate)

  const [fileName, setFileName] = useState<string | null>(null)
  const [parsed, setParsed] = useState<ParsedCsv | null>(null)
  const [cols, setCols] = useState<DetectedColumns | null>(null)
  const [threshold, setThreshold] = useState("")
  const [openFinding, setOpenFinding] = useState<string | null>(null)
  const [reading, setReading] = useState(false)
  const [fileError, setFileError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const onFile = useCallback(async (file: File) => {
    setFileError(null)
    setReading(true)
    try {
      const text = await file.text()
      const p = parseCsv(text)
      if (p.rows.length < 5) {
        setFileError(t("tooFew", lang))
        setParsed(null)
        setCols(null)
        setFileName(null)
      } else {
        setParsed(p)
        setCols(detectColumns(p))
        setFileName(file.name)
      }
    } catch {
      setFileError(t("parseError", lang))
      setParsed(null)
      setCols(null)
      setFileName(null)
    } finally {
      setReading(false)
    }
  }, [lang])

  const result: AnalysisResult | null = useMemo(() => {
    if (!parsed || !cols) return null
    const tNum = parseFloat(threshold.replace(/[,\s]/g, ""))
    return analyze(parsed, cols, {
      threshold: isFinite(tNum) && tNum > 0 ? tNum : null,
      weekend: [5, 6],
      tailDays: 7,
    })
  }, [parsed, cols, threshold])

  const exportFindings = () => {
    if (!result) return
    const head = ["Severity", "Finding (EN)", "Finding (AR)", "Count", "Value", "Examples"]
    const lines = [head.join(",")]
    for (const f of result.findings)
      lines.push(
        [
          f.severity,
          `"${f.titleEn.replace(/"/g, '""')}"`,
          `"${f.titleAr.replace(/"/g, '""')}"`,
          f.count,
          f.value ?? "",
          `"${f.samples.join(" | ").replace(/"/g, '""')}"`,
        ].join(",")
      )
    download(`audit-findings-${new Date().toISOString().slice(0, 10)}.csv`, "\uFEFF" + lines.join("\n"))
  }

  const askAi = () => {
    if (!result) return
    const s = result.summary
    const stats = [
      `${t("mode", lang)}: ${s.mode === "tb" ? t("modeTb", lang) : t("modeJe", lang)}`,
      `${t("rows", lang)}: ${fmt(s.rows)} · ${t("accounts", lang)}: ${fmt(s.accounts)}`,
      s.dateRange ? `${t("range", lang)}: ${s.dateRange.from.toISOString().slice(0, 10)} → ${s.dateRange.to.toISOString().slice(0, 10)}` : "",
      s.totalDebit !== null ? `${t("totalDebit", lang)}: ${fmt(s.totalDebit)}` : "",
      s.totalCredit !== null ? `${t("totalCredit", lang)}: ${fmt(s.totalCredit)}` : "",
      s.totalValue !== null ? `${t("totalValue", lang)}: ${fmt(s.totalValue)}` : "",
      s.benford ? `Benford MAD: ${(s.benford.mad * 100).toFixed(2)}% (n=${fmt(s.benford.n)})` : "",
      `${t("findings", lang)}: ${result.findings.map((f) => `[${f.severity}] ${lang === "ar" ? f.titleAr : f.titleEn} (×${fmt(f.count)}${f.value !== null ? `, ${fmt(f.value)}` : ""})`).join("; ") || "none"}`,
    ]
      .filter(Boolean)
      .join("\n")
    const q =
      lang === "ar"
        ? `أجريت تحليل بيانات مراجعة على «${fileName ?? ""}» بنتائج:\n${stats}\n\nاكتب لي مذكرة موجزة كمحاسب قانوني: تفسير كل نتيجة، ما الذي يستدعي إجراءات إضافية وفق ISA 240/330، وكيف أصوغ الاستجابة في برنامج المراجعة.`
        : `I ran audit data analytics on "${fileName ?? ""}" with these results:\n${stats}\n\nAs an external auditor, draft a short memo: interpret each finding, what needs additional procedures under ISA 240/330, and how to word the response in the audit program.`
    setAiPresetQuestion(q)
    navigate("ai")
  }

  const colSelect = (
    label: string,
    key: keyof DetectedColumns,
    numeric = false
  ) => (
    <label className="block min-w-0">
      <span className="text-[11px] font-medium text-muted-foreground">{label}</span>
      <select
        value={cols?.[key] ?? ""}
        onChange={(e) =>
          setCols((c) => (c ? { ...c, [key]: e.target.value || null } : c))
        }
        disabled={!parsed}
        className="mt-1 h-8 w-full min-w-0 rounded-lg border bg-background px-2 text-[12px] outline-none transition-colors focus:border-primary/40 disabled:opacity-50"
      >
        <option value="">{t("none", lang)}</option>
        {parsed?.headers.map((h) => (
          <option key={h} value={h}>
            {h}
          </option>
        ))}
      </select>
      {numeric && cols?.[key] && (
        <span className="mt-0.5 block text-[10px] text-muted-foreground">
          {parsed?.rows.filter((r) => r[cols[key] as string]).length ?? 0} {t("rows", lang)}
        </span>
      )}
    </label>
  )

  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      className="rounded-2xl border bg-card p-4 shadow-soft sm:p-5 print:hidden"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <SearchCheck className="h-4 w-4 text-primary" />
          </span>
          <h3 className="font-serif text-[15.5px] font-semibold tracking-tight">{t("title", lang)}</h3>
        </div>
        {parsed && (
          <button
            onClick={() => {
              setParsed(null)
              setCols(null)
              setFileName(null)
              setThreshold("")
              if (inputRef.current) inputRef.current.value = ""
            }}
            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11.5px] text-muted-foreground transition-colors hover:text-destructive focus-ring"
          >
            <X className="h-3 w-3" /> {t("clear", lang)}
          </button>
        )}
      </div>
      <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">{t("subtitle", lang)}</p>

      {/* upload zone */}
      <input
        ref={inputRef}
        type="file"
        accept=".csv,text/csv"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0]
          if (f) void onFile(f)
        }}
      />
      {!parsed && (
        <div
          role="button"
          tabIndex={0}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault()
            const f = e.dataTransfer.files?.[0]
            if (f) void onFile(f)
          }}
          className="mt-3 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-background/60 px-4 py-8 text-center transition-colors hover:border-primary/40 focus-ring"
        >
          {reading ? (
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          ) : (
            <Upload className="h-6 w-6 text-muted-foreground" />
          )}
          <p className="mt-2 text-[13px] font-medium">{t("upload", lang)}</p>
          <p className="mt-1 text-[11px] text-muted-foreground">{t("uploadHint", lang)}</p>
          {fileError && (
            <p className="mt-2 rounded-lg bg-destructive/10 px-2 py-1 text-[11.5px] text-destructive">{fileError}</p>
          )}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
            <span className="text-[11px] text-muted-foreground">{lang === "ar" ? "جرب بـ" : "Try with"}:</span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                download("trial-balance-template.csv", TB_TEMPLATE)
              }}
              className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] transition-colors hover:border-primary/40 hover:text-primary focus-ring"
            >
              <FileSpreadsheet className="h-3 w-3" /> {t("templateTb", lang)}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                download("journal-entries-template.csv", JE_TEMPLATE)
              }}
              className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] transition-colors hover:border-primary/40 hover:text-primary focus-ring"
            >
              <FileSpreadsheet className="h-3 w-3" /> {t("templateJe", lang)}
            </button>
          </div>
        </div>
      )}

      {/* column mapping */}
      {parsed && cols && (
        <>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium">
              <FileSpreadsheet className="h-3 w-3 text-primary" />
              <span dir="auto">{fileName}</span> · {fmt(parsed.rows.length)} {t("rows", lang)}
            </span>
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
              {result?.summary.mode === "tb" ? t("modeTb", lang) : t("modeJe", lang)}
            </span>
          </div>

          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {t("detected", lang)}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-4">
            {colSelect(t("colDate", lang), "date")}
            {colSelect(t("colAccount", lang), "account")}
            {colSelect(t("colDesc", lang), "description")}
            {colSelect(t("colVoucher", lang), "voucher")}
            {colSelect(t("colAmount", lang), "amount")}
            {colSelect(t("colDebit", lang), "debit")}
            {colSelect(t("colCredit", lang), "credit")}
            {colSelect(t("colUser", lang), "user")}
          </div>

          <label className="mt-3 block max-w-xs">
            <span className="text-[11px] font-medium text-muted-foreground">{t("thresholdLabel", lang)}</span>
            <input
              dir="ltr"
              inputMode="decimal"
              value={threshold}
              onChange={(e) => setThreshold(e.target.value)}
              placeholder={t("thresholdPh", lang)}
              className="mt-1 h-8 w-full rounded-lg border bg-background px-2.5 text-[12.5px] tabular-nums outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40"
            />
          </label>

          {/* summary chips */}
          {result && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {result.summary.dateRange && (
                <span className="rounded-full border bg-secondary/50 px-2.5 py-1 text-[11px] tabular-nums">
                  {t("range", lang)}: {result.summary.dateRange.from.toISOString().slice(0, 10)} →{" "}
                  {result.summary.dateRange.to.toISOString().slice(0, 10)}
                </span>
              )}
              {result.summary.accounts > 0 && (
                <span className="rounded-full border bg-secondary/50 px-2.5 py-1 text-[11px] tabular-nums">
                  {fmt(result.summary.accounts)} {t("accounts", lang)}
                </span>
              )}
              {result.summary.totalDebit !== null && (
                <span className="rounded-full border bg-secondary/50 px-2.5 py-1 text-[11px] tabular-nums">
                  {t("totalDebit", lang)}: {fmt(result.summary.totalDebit)}
                </span>
              )}
              {result.summary.totalCredit !== null && (
                <span className="rounded-full border bg-secondary/50 px-2.5 py-1 text-[11px] tabular-nums">
                  {t("totalCredit", lang)}: {fmt(result.summary.totalCredit)}
                </span>
              )}
              {result.summary.totalValue !== null && (
                <span className="rounded-full border bg-secondary/50 px-2.5 py-1 text-[11px] tabular-nums">
                  {t("totalValue", lang)}: {fmt(result.summary.totalValue)}
                </span>
              )}
            </div>
          )}

          {/* Benford chart */}
          {result?.summary.benford && (
            <div className="mt-4 rounded-xl border bg-background/60 p-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {t("benford", lang)} · <span className="normal-case tracking-normal">{t("benfordExpected", lang)}</span>
              </p>
              <div className="mt-2 flex items-end gap-1.5" style={{ height: 72 }}>
                {result.summary.benford.digits.map((d) => {
                  const scale = 30.1 // log10(2) highest expected
                  return (
                    <div key={d.digit} className="flex min-w-0 flex-1 flex-col items-center justify-end gap-1">
                      <span className="text-[9px] tabular-nums text-muted-foreground">
                        {(d.actual * 100).toFixed(0)}%
                      </span>
                      <div className="relative flex h-full w-full items-end justify-center">
                        <div
                          aria-hidden
                          className="absolute inset-x-[15%] border-t border-dashed border-muted-foreground/60"
                          style={{ bottom: `${(d.expected / scale) * 100}%` }}
                        />
                        <div
                          className={cn(
                            "w-[55%] rounded-t-sm",
                            Math.abs(d.actual - d.expected) > 0.05 ? "bg-destructive/80" : "bg-primary/70"
                          )}
                          style={{ height: `${(d.actual / scale) * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-medium tabular-nums">{d.digit}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* findings */}
          {result && (
            <div className="mt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {t("findings", lang)} ({result.findings.length})
              </p>
              {result.findings.length === 0 ? (
                <p className="mt-2 rounded-xl border bg-secondary/40 px-3 py-2.5 text-[12.5px] text-muted-foreground">
                  ✓ {t("noFindings", lang)}
                </p>
              ) : (
                <div className="mt-2 space-y-1.5">
                  {result.findings.map((f) => {
                    const open = openFinding === f.id
                    const sev = f.severity as Severity
                    return (
                      <div key={f.id} className="rounded-xl border bg-background/60">
                        <button
                          onClick={() => setOpenFinding(open ? null : f.id)}
                          aria-expanded={open}
                          className="flex w-full items-start gap-2.5 p-3 text-start transition-colors hover:bg-secondary/30 focus-ring rounded-xl"
                        >
                          <span
                            className={cn(
                              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                              sev === "high" && "bg-destructive/15 text-destructive",
                              sev === "medium" && "bg-gold/25 text-gold-deep",
                              sev === "info" && "bg-primary/10 text-primary"
                            )}
                          >
                            {sev === "info" ? <Info className="h-3 w-3" /> : <AlertTriangle className="h-3 w-3" />}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span dir="auto" className="block text-[13px] font-medium leading-snug">
                              {lang === "ar" ? f.titleAr : f.titleEn}
                            </span>
                            <span className="mt-0.5 flex flex-wrap gap-x-2 text-[11px] tabular-nums text-muted-foreground">
                              <span
                                className={cn(
                                  "font-semibold",
                                  sev === "high" && "text-destructive",
                                  sev === "medium" && "text-gold-deep",
                                  sev === "info" && "text-primary"
                                )}
                              >
                                {sev === "high" ? t("severeHigh", lang) : sev === "medium" ? t("severeMedium", lang) : t("severeInfo", lang)}
                              </span>
                              {f.value !== null && <span>{fmt(f.value)}</span>}
                            </span>
                          </span>
                          <ChevronDown
                            className={cn(
                              "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                              open && "rotate-180"
                            )}
                          />
                        </button>
                        {open && (
                          <div className="border-t px-3 py-2.5">
                            <p dir="auto" className="text-[12.5px] leading-relaxed text-foreground/80">
                              {lang === "ar" ? f.detailAr : f.detailEn}
                            </p>
                            {f.samples.length > 0 && (
                              <>
                                <p className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                                  {t("samples", lang)}
                                </p>
                                <ul className="mt-1 space-y-1">
                                  {f.samples.map((s, i) => (
                                    <li
                                      key={i}
                                      dir="auto"
                                      className="truncate rounded-lg bg-secondary/50 px-2 py-1 font-mono text-[10.5px] text-foreground/70"
                                    >
                                      {s}
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}

              <div className="mt-3 flex flex-wrap gap-1.5">
                <button
                  onClick={exportFindings}
                  disabled={result.findings.length === 0}
                  className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-2.5 py-1.5 text-[12px] font-medium transition-colors hover:border-primary/30 hover:text-primary disabled:opacity-50 focus-ring"
                >
                  <Download className="h-3.5 w-3.5" /> {t("exportCsv", lang)}
                </button>
                <button
                  onClick={askAi}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/[0.06] px-2.5 py-1.5 text-[12px] font-medium text-primary transition-colors hover:bg-primary/10 focus-ring"
                >
                  <Sparkles className="h-3.5 w-3.5" /> {t("askAi", lang)}
                </button>
                {/* v21: write the JE-testing summary back into the engagement
                    file — population, exceptions, date — for the close-out bundle */}
                {onSave && (
                  <button
                    onClick={() =>
                      onSave({
                        population: result.summary.rows,
                        exceptions: result.findings.reduce((a, f) => a + f.count, 0),
                        note: result.findings
                          .slice(0, 6)
                          .map((f) => (lang === "ar" ? f.titleAr : f.titleEn))
                          .join(" · "),
                      })
                    }
                    className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-2.5 py-1.5 text-[12px] font-medium transition-colors hover:border-primary/30 hover:text-primary focus-ring"
                  >
                    <Save className="h-3.5 w-3.5" />
                    {lang === "ar" ? "احفظ في المهمة" : "Save to engagement"}
                  </button>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
