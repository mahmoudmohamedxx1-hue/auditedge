"use client"

/**
 * v21 — the Close-out tab of the Audit Program: everything a senior needs
 * to assemble the file (ISA 230.14) in one place:
 *   1. the close-out dashboard (progress · PBC · SAD vs PM · GC · unsigned)
 *   2. the AI partner EQR review of the whole file
 *   3. the assertion coverage map (ISA 315/330 linkage)
 *   4. the working-paper index (duplicate / missing-ref discipline)
 *   5. the ISA 570 going-concern checklist
 *   6. the interactive risk matrix (IR × CR → RMM → response)
 *   7. the workspace backup round-trip (engagements · KAM drafts · analyses)
 */

import { useMemo, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { Markdown } from "./markdown"
import {
  type Engagement,
  type GcChecklist,
  type RiskRow,
  assertionCoverage,
  downloadEngagementBundle,
  downloadWorkspaceLocalBackup,
  engagementBundleMd,
  importWorkspaceLocalJson,
  pbcAging,
  pbcStats,
  overallProgress,
  sadVerdict,
  uncorrectedTotal,
  wpIndex,
} from "@/lib/engagement"
import { ASSERTIONS } from "@/lib/program/types"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  AlertTriangle,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileCheck2,
  Grid3X3,
  ListChecks,
  Loader2,
  Plus,
  ShieldCheck,
  Trash2,
  Upload,
} from "lucide-react"

type Lang = "en" | "ar"

const UI = {
  title: { en: "Close-out & file review", ar: "الإقفال ومراجعة الملف" },
  dash: { en: "Close-out dashboard", ar: "لوحة الإقفال" },
  procs: { en: "procedures performed", ar: "إجراء منجزًا" },
  pbcReceived: { en: "PBC received", ar: "مستندات مستلمة" },
  uncorrected: { en: "uncorrected (EGP)", ar: "غير مصححة (ج.م)" },
  unsigned: { en: "sections awaiting sign-off", ar: "قسمًا بانتظار الاعتماد" },
  verdict: { en: "SAD verdict", ar: "تقييم الفروقات" },
  bundleDl: { en: "Download close-out bundle", ar: "تنزيل ملف الإقفال" },
  bundleHint: { en: "One Markdown document: progress, materiality, SAD, PBC aging, WP index, GC, risk matrix, findings.", ar: "مستند واحد: التقدم والأهمية والفروقات وأعمار المستندات وفهرس أوراق العمل والاستمرارية والمخاطر والملاحظات." },
  eqrTitle: { en: "AI partner review (EQR)", ar: "مراجعة شريك ذكية (EQR)" },
  eqrRun: { en: "Review my file", ar: "راجع ملفي" },
  eqrRunning: { en: "Reviewing the file…", ar: "يراجع الملف…" },
  eqrHint: { en: "The reviewer reads the whole close-out bundle and answers like an engagement quality reviewer: file-breakers, judgment risks, good discipline, and the one fix first.", ar: "يقرأ المراجع ملف الإقفال كاملًا ويجيب كمراجع جودة مهمة: ما يكسر الملف ومخاطر الحكم وما أُحسن والخطوة الأولى." },
  assertTitle: { en: "Assertion coverage map", ar: "خريطة تغطية التأكيدات" },
  assertHint: { en: "How much of each assertion's program is performed — the linkage a reviewer asks for under ISA 315/330.", ar: "كم أُنجز من برنامج كل تأكيد — الربط الذي يسأل عنه المراجع وفق 315/330." },
  performed: { en: "performed", ar: "منجز" },
  naWord: { en: "N/A", ar: "لا ينطبق" },
  wpTitle: { en: "Working-paper index", ar: "فهرس أوراق العمل" },
  wpRef: { en: "WP ref", ar: "المرجع" },
  wpSections: { en: "Sections", ar: "الأقسام" },
  wpProcs: { en: "Procedures", ar: "الإجراءات" },
  wpMissing: { en: "done procedures have no WP reference", ar: "إجراء منجز بلا مرجع ورقة عمل" },
  wpDup: { en: "reused WP references — check the cross-reference", ar: "مرجع مستخدم أكثر من مرة — راجع الإحالة" },
  wpEmpty: { en: "No WP references recorded yet — tick procedures with their WP refs to build the index.", ar: "لا مراجع مسجلة بعد — أنجز الإجراءات مع مراجعها لبناء الفهرس." },
  gcTitle: { en: "Going-concern checklist (ISA 570)", ar: "قائمة الاستمرارية (ISA 570)" },
  gcObserved: { en: "Indicators observed", ar: "المؤشرات الملاحظة" },
  gcNotes: { en: "Evidence obtained · WFGI notes", ar: "الأدلة المُحصّلة · ملاحظات التواصل مع الحوكمة" },
  gcConclusion: { en: "Conclusion", ar: "الخلاصة" },
  gcPending: { en: "— still assessing —", ar: "— ما زال التقييم جاريًا —" },
  gcAdequate: { en: "Adequate disclosure — unmodified opinion + MURGC paragraph", ar: "إفصاح كافٍ — رأي غير معدل مع فقرة عدم اليقين" },
  gcInadDisclosed: { en: "Inadequate disclosure — qualified / adverse depending on pervasiveness", ar: "إفصاح غير كافٍ — متحفظ أو سلبي حسب الانتشار" },
  gcInadUndisclosed: { en: "Management refuses to disclose — escalate to TCWG, opinion at risk", ar: "ترفض الإدارة الإفصاح — صعّد للحوكمة، الرأي في خطر" },
  gcSave: { en: "Save checklist", ar: "حفظ القائمة" },
  gcSaved: { en: "Checklist saved to the engagement", ar: "حُفظت القائمة في المهمة" },
  riskTitle: { en: "Risk assessment matrix (ISA 315/330)", ar: "مصفوفة تقييم المخاطر" },
  riskAccount: { en: "Account / cycle", ar: "الحساب / الدورة" },
  riskAssertion: { en: "Assertion", ar: "التأكيد" },
  riskSig: { en: "Significant risk", ar: "خطر جوهري" },
  riskResponse: { en: "Planned response", ar: "الاستجابة المخططة" },
  riskAdd: { en: "Add risk row", ar: "أضف صف مخاطرة" },
  riskRmm: { en: "RMM", ar: "خطر التحريف" },
  riskEmpty: { en: "No rows yet — map the significant accounts: what breaks, where, and how you respond.", ar: "لا صفوف بعد — خطط للحسابات الجوهرية: ما ينكسر وأين وكيف تستجيب." },
  backupTitle: { en: "Workspace backup", ar: "نسخة احتياطية لمساحة العمل" },
  backupHint: { en: "The engagement file, KAM drafts and industry analyses live in this browser only — the server backup cannot see them. Download a backup regularly and import it after a browser reset.", ar: "ملف المهمة ومسودات الرأي والتحليلات تعيش في هذا المتصفح فقط — النسخة الخادمية لا تراها. نزّل نسخة احتياطية دوريًا واستوردها بعد أي إعادة ضبط." },
  backupDl: { en: "Download backup", ar: "تنزيل النسخة" },
  backupImport: { en: "Import backup", ar: "استيراد النسخة" },
  backupDone: { en: "Backup downloaded", ar: "تم تنزيل النسخة" },
  importDone: { en: "backup imported", ar: "تم استيراد النسخة" },
  importFail: { en: "Could not read that backup file", ar: "تعذر قراءة ملف النسخة" },
  aging: { en: "Outstanding PBC requests", ar: "طلبات مستندات معلقة" },
  days: { en: "days", ar: "يوم" },
} as const

const t = (k: keyof typeof UI, lang: Lang) => UI[k][lang]

/** Fixed ISA 570 indicator vocabulary (bilingual). */
const GC_INDICATORS: { id: string; en: string; ar: string }[] = [
  { id: "net-liab", en: "Net liability position or repeated operating losses", ar: "مركز خصوم صافٍ أو خسائر تشغيلية متكررة" },
  { id: "default", en: "Loan defaults, withdrawals of lender support, breached covenants", ar: "تعثر قروض أو سحب دعم المقرضين أو خرق التعهدات" },
  { id: "arrears", en: "Arrears in dividends, salaries, taxes or trade payables", ar: "تأخر أرباح أو رواتب أو ضرائب أو ذمم دائنة" },
  { id: "reliance", en: "Reliance on disposal of a core asset to fund operations", ar: "الاعتماد على بيع أصل جوهري لتمويل النشاط" },
  { id: "plans", en: "Management plans need unrealistic margins or new capital", ar: "خطط الإدارة تتطلب هوامش غير واقعية أو رأسمالًا جديدًا" },
  { id: "going-concern-basis", en: "Doubt the going-concern basis itself (liquidation intended)", ar: "شك في أساس الاستمرارية ذاته (نية تصفية)" },
]

const RISK_RATINGS = ["low", "med", "high"] as const

/** IR × CR → RMM reading. */
function rmmOf(ir: RiskRow["ir"], cr: RiskRow["cr"]): "low" | "med" | "high" {
  const score = (x: RiskRow["ir"]) => (x === "high" ? 3 : x === "med" ? 2 : 1)
  const s = score(ir) * score(cr)
  return s >= 6 ? "high" : s >= 3 ? "med" : "low"
}

const uid = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `r-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

export function CloseOutPanel({
  lang,
  eng,
  onPatchEng,
}: {
  lang: Lang
  eng: Engagement
  onPatchEng: (patch: Partial<Engagement>) => void
}) {
  /* ---------- close-out dashboard ---------- */
  const prog = overallProgress(eng)
  const ps = pbcStats(eng)
  const unc = uncorrectedTotal(eng)
  const verdict = sadVerdict(eng)
  const aged = pbcAging(eng)
  const unsignedCount = useMemo(
    () =>
      // sections with work performed but not prepared+reviewed
      (Object.keys(eng.signoffs).length >= 0 ? 0 : 0) +
      (eng.signoffs ? 0 : 0) +
      countUnsigned(eng),
    [eng]
  )

  /* ---------- EQR review ---------- */
  const [eqr, setEqr] = useState<string | null>(null)
  const [eqrBusy, setEqrBusy] = useState(false)

  const runEqr = async () => {
    setEqrBusy(true)
    try {
      const res = await fetch("/api/ai/eqr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ engagement: eng }),
      })
      const j = (await res.json().catch(() => ({}))) as { review?: string; error?: string }
      if (!res.ok || !j.review) throw new Error(j.error || "failed")
      setEqr(j.review)
    } catch {
      toast.error(lang === "ar" ? "تعذرت المراجعة — حاول مجددًا" : "The review failed — try again")
    } finally {
      setEqrBusy(false)
    }
  }

  /* ---------- assertion coverage ---------- */
  const coverage = useMemo(
    () => assertionCoverage(eng, Object.entries(ASSERTIONS).map(([code]) => ({ code }))),
    [eng]
  )

  /* ---------- WP index ---------- */
  const wp = useMemo(() => wpIndex(eng), [eng])

  /* ---------- GC checklist ---------- */
  const [gcDraft, setGcDraft] = useState<GcChecklist>(
    () =>
      eng.gc ?? {
        indicators: {},
        notes: "",
        conclusion: "pending",
        savedAt: 0,
      }
  )
  const saveGc = () => {
    onPatchEng({ gc: { ...gcDraft, savedAt: Date.now() } })
    toast.success(t("gcSaved", lang))
  }

  /* ---------- risk matrix ---------- */
  const rows = eng.riskMatrix ?? []
  const addRow = () =>
    onPatchEng({
      riskMatrix: [
        ...rows,
        { id: uid(), account: "", assertion: "EX", ir: "high", cr: "med", significant: false, response: "", savedAt: Date.now() },
      ],
    })
  const setRow = (id: string, patch: Partial<RiskRow>) =>
    onPatchEng({
      riskMatrix: rows.map((r) => (r.id === id ? { ...r, ...patch, savedAt: Date.now() } : r)),
    })
  const delRow = (id: string) => onPatchEng({ riskMatrix: rows.filter((r) => r.id !== id) })

  /* ---------- backup ---------- */
  const fileRef = useRef<HTMLInputElement>(null)
  const onImport = async (f: File | undefined) => {
    if (!f) return
    try {
      const res = await importWorkspaceLocalJson(f)
      toast.success(
        lang === "ar"
          ? `تم الاستيراد: ${res.engagements} مهمة (${res.restored.join(" · ")})`
          : `Imported: ${res.engagements} engagement(s) (${res.restored.join(" · ")})`
      )
      // reload so the merged engagement store is visible
      setTimeout(() => window.location.reload(), 900)
    } catch {
      toast.error(t("importFail", lang))
    }
  }

  return (
    <div className="mt-4 space-y-6">
      {/* ============ 1. dashboard ============ */}
      <section className="rounded-2xl border bg-card p-5 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold">
            <ClipboardCheck className="h-4 w-4 text-primary" /> {t("dash", lang)}
          </h2>
          <Button variant="outline" size="sm" className="h-8 gap-1.5" onClick={() => { downloadEngagementBundle(eng); toast.success(t("backupDone", lang)) }}>
            <Download className="h-3.5 w-3.5" /> {t("bundleDl", lang)}
          </Button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard label={t("procs", lang)} value={`${prog.done}/${prog.total}`} sub={`${prog.pct}%`} />
          <StatCard label={t("pbcReceived", lang)} value={`${ps.received}/${ps.total}`} sub={`${ps.requested} ${lang === "ar" ? "مطلوبة" : "requested"}`} />
          <StatCard
            label={t("uncorrected", lang)}
            value={unc.total.toLocaleString()}
            sub={verdict.level}
            tone={verdict.level === "material" ? "bad" : verdict.level === "evaluate" ? "warn" : "ok"}
          />
          <StatCard label={t("unsigned", lang)} value={String(unsignedCount)} tone={unsignedCount > 0 ? "warn" : "ok"} />
        </div>
        <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground" dir="auto">
          {verdict[lang]} · {t("bundleHint", lang)}
        </p>
        {aged.length > 0 && (
          <div className="mt-3 rounded-xl border border-gold/30 bg-gold/[0.06] p-3">
            <p className="text-[12px] font-semibold text-gold-deep">
              {t("aging", lang)} · {aged.length}
            </p>
            <p dir="auto" className="mt-1 text-[12px] leading-relaxed text-foreground/75">
              {aged
                .slice(0, 4)
                .map((a) => `${a.code} — ${a.daysOutstanding} ${t("days", lang)}`)
                .join(" · ")}
              {aged.length > 4 ? " …" : ""}
            </p>
          </div>
        )}
      </section>

      {/* ============ 2. EQR review ============ */}
      <section className="rounded-2xl border bg-card p-5 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold">
            <Brain className="h-4 w-4 text-primary" /> {t("eqrTitle", lang)}
          </h2>
          <Button size="sm" className="h-8 gap-1.5" onClick={() => void runEqr()} disabled={eqrBusy}>
            {eqrBusy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <ShieldCheck className="h-3.5 w-3.5" />}
            {eqrBusy ? t("eqrRunning", lang) : t("eqrRun", lang)}
          </Button>
        </div>
        <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground" dir="auto">
          {t("eqrHint", lang)}
        </p>
        {eqrBusy && (
          <div className="mt-4 space-y-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 animate-pulse rounded bg-secondary/60" style={{ width: `${88 - i * 9}%` }} />
            ))}
          </div>
        )}
        {eqr && !eqrBusy && (
          <div className="mt-4 rounded-xl border bg-secondary/25 p-4">
            <Markdown content={eqr} />
          </div>
        )}
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* ============ 3. assertion coverage ============ */}
        <section className="rounded-2xl border bg-card p-5 shadow-soft">
          <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold">
            <Grid3X3 className="h-4 w-4 text-primary" /> {t("assertTitle", lang)}
          </h2>
          <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground" dir="auto">
            {t("assertHint", lang)}
          </p>
          <div className="mt-4 space-y-2.5">
            {coverage.rows.map((r) => {
              const pct = r.total ? Math.round((100 * r.done) / r.total) : 0
              const label = ASSERTIONS[r.code]?.[lang] ?? r.code
              return (
                <div key={r.code} className="flex items-center gap-3">
                  <span dir="auto" className="w-36 shrink-0 truncate text-[12.5px] font-medium" title={label}>
                    {r.code} · {label}
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div
                      className={cn("h-full rounded-full transition-all", pct >= 70 ? "bg-sage" : pct >= 35 ? "bg-gold" : "bg-primary/60")}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-24 shrink-0 text-end text-[11px] tabular-nums text-muted-foreground">
                    {r.done}/{r.total} {t("performed", lang)}
                    {r.na > 0 ? ` · ${r.na} ${t("naWord", lang)}` : ""}
                  </span>
                </div>
              )
            })}
          </div>
        </section>

        {/* ============ 4. WP index ============ */}
        <section className="rounded-2xl border bg-card p-5 shadow-soft">
          <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold">
            <ListChecks className="h-4 w-4 text-primary" /> {t("wpTitle", lang)}
          </h2>
          {wp.entries.length === 0 ? (
            <p className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground" dir="auto">
              {t("wpEmpty", lang)}
            </p>
          ) : (
            <>
              <div className="mt-3 overflow-hidden rounded-xl border">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="bg-secondary/60 text-start">
                      <th className="px-2.5 py-1.5 text-start font-semibold">{t("wpRef", lang)}</th>
                      <th className="px-2.5 py-1.5 text-start font-semibold">{t("wpSections", lang)}</th>
                      <th className="px-2.5 py-1.5 text-end font-semibold">{t("wpProcs", lang)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wp.entries.map((e) => (
                      <tr key={e.ref} className="border-t">
                        <td dir="ltr" className="px-2.5 py-1.5 font-mono">{e.ref}</td>
                        <td className="px-2.5 py-1.5 text-muted-foreground">{e.sections.join(", ")}</td>
                        <td className="px-2.5 py-1.5 text-end tabular-nums">{e.procIds.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {wp.missing.length > 0 && (
                <p className="mt-2.5 flex items-start gap-1.5 text-[12px] text-primary" dir="auto">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {wp.missing.length} {t("wpMissing", lang)}
                </p>
              )}
              {wp.duplicates.length > 0 && (
                <p className="mt-1.5 flex items-start gap-1.5 text-[12px] text-gold-deep" dir="auto">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {wp.duplicates.map((d) => d.ref).join(", ")} — {t("wpDup", lang)}
                </p>
              )}
            </>
          )}
        </section>

        {/* ============ 5. GC checklist ============ */}
        <section className="rounded-2xl border bg-card p-5 shadow-soft">
          <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold">
            <FileCheck2 className="h-4 w-4 text-primary" /> {t("gcTitle", lang)}
          </h2>
          <div className="mt-3 space-y-1.5">
            {GC_INDICATORS.map((ind) => (
              <label key={ind.id} className="flex cursor-pointer items-start gap-2.5 rounded-lg px-1.5 py-1 text-[12.5px] leading-relaxed transition-colors hover:bg-secondary/50">
                <input
                  type="checkbox"
                  checked={!!gcDraft.indicators[ind.id]}
                  onChange={(e) =>
                    setGcDraft((g) => ({
                      ...g,
                      indicators: { ...g.indicators, [ind.id]: e.target.checked },
                    }))
                  }
                  className="mt-0.5 h-3.5 w-3.5 accent-primary"
                />
                <span dir="auto">{lang === "ar" ? ind.ar : ind.en}</span>
              </label>
            ))}
          </div>
          <Textarea
            dir="auto"
            value={gcDraft.notes}
            onChange={(e) => setGcDraft((g) => ({ ...g, notes: e.target.value }))}
            placeholder={t("gcNotes", lang)}
            className="mt-3 min-h-[64px] text-[12.5px]"
          />
          <select
            value={gcDraft.conclusion}
            onChange={(e) => setGcDraft((g) => ({ ...g, conclusion: e.target.value as GcChecklist["conclusion"] }))}
            className="mt-3 h-9 w-full rounded-lg border bg-background px-2.5 text-[12.5px] focus:border-primary/40 focus:outline-none"
            aria-label={t("gcConclusion", lang)}
          >
            <option value="pending">{t("gcPending", lang)}</option>
            <option value="adequate">{t("gcAdequate", lang)}</option>
            <option value="inadequate-disclosed">{t("gcInadDisclosed", lang)}</option>
            <option value="inadequate-undisclosed">{t("gcInadUndisclosed", lang)}</option>
          </select>
          <Button size="sm" className="mt-3 h-8 gap-1.5" onClick={saveGc}>
            <CheckCircle2 className="h-3.5 w-3.5" /> {t("gcSave", lang)}
          </Button>
        </section>

        {/* ============ 6. risk matrix ============ */}
        <section className="rounded-2xl border bg-card p-5 shadow-soft">
          <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold">
            <Grid3X3 className="h-4 w-4 text-primary" /> {t("riskTitle", lang)}
          </h2>
          {rows.length === 0 ? (
            <p className="mt-3 text-[12.5px] leading-relaxed text-muted-foreground" dir="auto">
              {t("riskEmpty", lang)}
            </p>
          ) : (
            <div className="mt-3 space-y-2.5">
              {rows.map((r) => {
                const rmm = rmmOf(r.ir, r.cr)
                return (
                  <div key={r.id} className="rounded-xl border bg-secondary/25 p-3">
                    <div className="flex items-center gap-2">
                      <input
                        dir="auto"
                        value={r.account}
                        onChange={(e) => setRow(r.id, { account: e.target.value })}
                        placeholder={t("riskAccount", lang)}
                        className="h-8 min-w-0 flex-1 rounded-lg border bg-background px-2 text-[12.5px] focus:border-primary/40 focus:outline-none"
                      />
                      <select
                        value={r.assertion}
                        onChange={(e) => setRow(r.id, { assertion: e.target.value })}
                        className="h-8 shrink-0 rounded-lg border bg-background px-1.5 text-[12px] focus:outline-none"
                        aria-label={t("riskAssertion", lang)}
                      >
                        {Object.keys(ASSERTIONS).map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                      <span
                        className={cn(
                          "shrink-0 rounded-md px-2 py-1 font-mono text-[10.5px] font-semibold",
                          rmm === "high" ? "bg-primary/15 text-primary" : rmm === "med" ? "bg-gold/15 text-gold-deep" : "bg-sage/15 text-sage-deep"
                        )}
                        title={t("riskRmm", lang)}
                      >
                        {rmm}
                      </span>
                      <button
                        onClick={() => delRow(r.id)}
                        aria-label="delete row"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-ring"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-[11.5px]">
                      IR:
                      {RISK_RATINGS.map((v) => (
                        <button
                          key={`ir-${v}`}
                          onClick={() => setRow(r.id, { ir: v })}
                          className={cn(
                            "rounded-full border px-2 py-0.5 transition-colors focus-ring",
                            r.ir === v ? "border-primary/50 bg-primary/10 font-semibold text-primary" : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {v}
                        </button>
                      ))}
                      <span className="text-muted-foreground">· CR:</span>
                      {RISK_RATINGS.map((v) => (
                        <button
                          key={`cr-${v}`}
                          onClick={() => setRow(r.id, { cr: v })}
                          className={cn(
                            "rounded-full border px-2 py-0.5 transition-colors focus-ring",
                            r.cr === v ? "border-primary/50 bg-primary/10 font-semibold text-primary" : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {v}
                        </button>
                      ))}
                      <label className="ms-auto flex cursor-pointer items-center gap-1.5 text-muted-foreground">
                        <input
                          type="checkbox"
                          checked={r.significant}
                          onChange={(e) => setRow(r.id, { significant: e.target.checked })}
                          className="h-3.5 w-3.5 accent-primary"
                        />
                        {t("riskSig", lang)}
                      </label>
                    </div>
                    <input
                      dir="auto"
                      value={r.response}
                      onChange={(e) => setRow(r.id, { response: e.target.value })}
                      placeholder={t("riskResponse", lang)}
                      className="mt-2 h-8 w-full rounded-lg border bg-background px-2 text-[12.5px] focus:border-primary/40 focus:outline-none"
                    />
                  </div>
                )
              })}
            </div>
          )}
          <Button variant="outline" size="sm" className="mt-3 h-8 gap-1.5" onClick={addRow}>
            <Plus className="h-3.5 w-3.5" /> {t("riskAdd", lang)}
          </Button>
        </section>
      </div>

      {/* ============ 7. backup ============ */}
      <section className="rounded-2xl border bg-card p-5 shadow-soft">
        <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold">
          <ShieldCheck className="h-4 w-4 text-primary" /> {t("backupTitle", lang)}
        </h2>
        <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground" dir="auto">
          {t("backupHint", lang)}
        </p>
        <div className="mt-3 flex flex-wrap gap-2.5">
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5"
            onClick={() => {
              downloadWorkspaceLocalBackup()
              toast.success(t("backupDone", lang))
            }}
          >
            <Download className="h-3.5 w-3.5" /> {t("backupDl", lang)}
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(e) => {
              void onImport(e.target.files?.[0])
              e.target.value = ""
            }}
          />
          <Button variant="outline" size="sm" className="h-8 gap-1.5" onClick={() => fileRef.current?.click()}>
            <Upload className="h-3.5 w-3.5" /> {t("backupImport", lang)}
          </Button>
        </div>
      </section>
    </div>
  )
}

function StatCard({
  label,
  value,
  sub,
  tone,
}: {
  label: string
  value: string
  sub?: string
  tone?: "ok" | "warn" | "bad"
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-3",
        tone === "bad" ? "border-primary/40 bg-primary/[0.05]" : tone === "warn" ? "border-gold/40 bg-gold/[0.06]" : "bg-secondary/25"
      )}
    >
      <p dir="auto" className="text-[11px] font-medium leading-tight text-muted-foreground">{label}</p>
      <p className="mt-1 font-serif text-[19px] font-semibold leading-none tabular-nums">{value}</p>
      {sub && <p className="mt-1 text-[10.5px] tabular-nums text-muted-foreground">{sub}</p>}
    </div>
  )
}

/** Sections with work performed but not both prepared AND reviewed. */
function countUnsigned(eng: Engagement): number {
  // counts require the program shape; reuse the bundle builder's logic cheaply
  const md = engagementBundleMd(eng)
  const m = md.match(/^## 7\. Sections awaiting sign-off\n([\s\S]*?)(?=\n## )/)
  if (!m) return 0
  const lines = m[1].split("\n").filter((l) => l.trim().startsWith("- ") && !l.includes("All active sections"))
  return lines.length
}
