"use client"

/** Findings & SAD (Summary of Audit Differences) register — log every
 *  misstatement the program uncovers, track open/passed/corrected status,
 *  and evaluate the aggregate uncorrected amount against performance
 *  materiality and the clearly-trivial threshold (ISA 450). */

import { useMemo, useState } from "react"
import { PROGRAM_SECTIONS } from "@/lib/program"
import {
  exportFindingsCsv as exportFindingsCsvUtil,
  sadVerdict,
  uncorrectedTotal,
  type Engagement,
  type Finding,
  type FindingStatus,
} from "@/lib/engagement"
import { cn } from "@/lib/utils"
import { fmtEgp, fmtNum, NumInput, SectionSelect, TextInput, type Lang } from "./program-shared"
import { AlertTriangle, Calculator, CheckCircle2, ClipboardList, Download, MinusCircle, Plus, Trash2 } from "lucide-react"

const T = {
  title: { en: "Findings & Summary of Audit Differences", ar: "الملاحظات وملخص فروق المراجعة" },
  intro: {
    en: "Log every misstatement you find while performing the program. Items the client corrects leave the uncorrected total; items they pass (waive) stay in it. The aggregate is evaluated against your materiality thresholds per ISA 450.",
    ar: "سجّل كل فرق تحده أثناء تنفيذ البرنامج. البنود التي تصححها الإدارة تخرج من إجمالي الفروقات غير المصححة، والبنود المتجاوز عنها تبقى فيه. يُقيَّم الإجمالي مقابل حدود الأهمية وفق ISA 450.",
  },
  // materiality card
  materiality: { en: "Engagement materiality (EGP)", ar: "الأهمية النسبية للمهمة (جنيه)" },
  pm: { en: "Performance materiality", ar: "أهمية الأداء" },
  ctt: { en: "Clearly-trivial threshold", ar: "حد الأهمية التافه" },
  openCalc: { en: "Derive in the AP-02 calculator", ar: "احسبها في حاسبة AP-02" },
  // verdict
  uncorrected: { en: "Aggregate uncorrected misstatements", ar: "إجمالي الفروقات غير المصححة" },
  openCount: { en: "Open", ar: "مفتوحة" },
  passedCount: { en: "Passed (uncorrected)", ar: "متجاوز عنها (غير مصححة)" },
  correctedCount: { en: "Corrected", ar: "مصححة" },
  // add form
  addTitle: { en: "Log a finding", ar: "تسجيل ملاحظة" },
  description: { en: "What did you find?", ar: "ما الذي وجدته؟" },
  descPh: {
    en: "e.g. Invoice #4521 dated 30 June recorded in July — cut-off error",
    ar: "مثال: الفاتورة 4521 المؤرخة 30 يونيو سُجلت في يوليو — خطأ استقطاع",
  },
  amount: { en: "Amount (EGP, optional)", ar: "القيمة (جنيه، اختياري)" },
  add: { en: "Add finding", ar: "إضافة" },
  // list
  empty: {
    en: "No findings yet — a clean SAD is good news. Log every misstatement above the clearly-trivial threshold as you test.",
    ar: "لا توجد ملاحظات بعد — ملخص نظيف خبر جيد. سجّل كل فرق يتجاوز حد الأهمية التافه أثناء الفحص.",
  },
  status: { en: "Status", ar: "الحالة" },
  stOpen: { en: "Open", ar: "مفتوحة" },
  stPassed: { en: "Passed", ar: "متجاوزة" },
  stCorrected: { en: "Corrected", ar: "مصححة" },
  delete: { en: "Delete", ar: "حذف" },
  confirmDel: { en: "Delete this finding?", ar: "حذف هذه الملاحظة؟" },
  yes: { en: "Yes", ar: "نعم" },
  no: { en: "No", ar: "لا" },
  qualitative: {
    en: "Even when trivial quantitatively, consider qualitative factors — fraud, covenants, key metrics, regulatory limits (ISA 450.12).",
    ar: "حتى لو كانت تافهة كمّيًا، راعِ الأسباب النوعية — الاحتيال والتعهدات والمؤشرات الرئيسية والحدود التنظيمية (ISA 450.12).",
  },
  // v21: register upgrades
  exportCsv: { en: "Export SAD (CSV)", ar: "تصدير الملخص (CSV)" },
  wpRef: { en: "WP ref", ar: "مرجع الورقة" },
  qualFlag: { en: "Qualitative", ar: "نوعية" },
  adjDr: { en: "Adj — Dr account", ar: "تسوية — حساب مدين" },
  adjCr: { en: "Adj — Cr account", ar: "تسوية — حساب دائن" },
  qualChip: { en: "qualitative", ar: "نوعية" },
  proposedAdj: { en: "proposed adj", ar: "تسوية مقترحة" },
} as const

const VERDICT_STYLE: Record<string, string> = {
  setup: "border-border bg-secondary/40 text-foreground/70",
  ok: "border-sage/40 bg-sage/[0.06] text-sage-deep",
  trivial: "border-sage/40 bg-sage/[0.06] text-sage-deep",
  evaluate: "border-amber-500/40 bg-amber-50 text-amber-800",
  material: "border-destructive/40 bg-destructive/[0.05] text-destructive",
}

const VERDICT_ICON: Record<string, React.ReactNode> = {
  setup: <Calculator className="h-4 w-4" />,
  ok: <CheckCircle2 className="h-4 w-4" />,
  trivial: <CheckCircle2 className="h-4 w-4" />,
  evaluate: <AlertTriangle className="h-4 w-4" />,
  material: <AlertTriangle className="h-4 w-4" />,
}

export function FindingsSad({
  lang,
  eng,
  onAdd,
  onUpdate,
  onDelete,
  onSetMateriality,
  onGoMateriality,
}: {
  lang: Lang
  eng: Engagement
  onAdd: (
    sectionId: string,
    description: string,
    amount?: number,
    extras?: { wp?: string; qualitative?: boolean; adj?: { dr?: string; cr?: string; amount?: number } }
  ) => void
  onUpdate: (id: string, patch: Partial<Pick<Finding, "status" | "wp" | "qualitative" | "adj">>) => void
  onDelete: (id: string) => void
  onSetMateriality: (pm?: number, ctt?: number) => void
  onGoMateriality: () => void
}) {
  const t = (k: keyof typeof T) => T[k][lang]
  const rtl = lang === "ar"

  const [sectionId, setSectionId] = useState(PROGRAM_SECTIONS[0].id)
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [confirmDel, setConfirmDel] = useState<string | null>(null)
  // v21: register upgrades — WP ref, qualitative flag, proposed adjustment
  const [wp, setWp] = useState("")
  const [qualitative, setQualitative] = useState(false)
  const [adjDr, setAdjDr] = useState("")
  const [adjCr, setAdjCr] = useState("")
  const [adjAmount, setAdjAmount] = useState("")

  const verdict = useMemo(() => sadVerdict(eng), [eng])
  const totals = useMemo(() => uncorrectedTotal(eng), [eng])
  const counts = useMemo(
    () => ({
      open: eng.findings.filter((f) => f.status === "open").length,
      passed: eng.findings.filter((f) => f.status === "passed").length,
      corrected: eng.findings.filter((f) => f.status === "corrected").length,
    }),
    [eng]
  )

  const add = () => {
    if (!description.trim()) return
    const n = parseFloat(amount)
    const adjAmountN = parseFloat(adjAmount)
    onAdd(sectionId, description, isFinite(n) ? n : undefined, {
      ...(wp.trim() ? { wp: wp.trim() } : {}),
      ...(qualitative ? { qualitative: true } : {}),
      ...(adjDr.trim() || adjCr.trim() || isFinite(adjAmountN)
        ? { adj: { dr: adjDr.trim() || undefined, cr: adjCr.trim() || undefined, amount: isFinite(adjAmountN) ? adjAmountN : undefined } }
        : {}),
    })
    setDescription("")
    setAmount("")
    setWp("")
    setQualitative(false)
    setAdjDr("")
    setAdjCr("")
    setAdjAmount("")
  }

  const sectionCode = (id: string) => PROGRAM_SECTIONS.find((s) => s.id === id)?.code ?? "—"

  return (
    <div className="mt-5">
      {/* header */}
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <ClipboardList className="h-5 w-5 text-primary" />
        </span>
        <div>
          <h2 className="font-serif text-[20px] font-semibold leading-tight tracking-tight">{t("title")}</h2>
          <p className="text-[12px] text-muted-foreground">
            {eng.client} · {eng.period} — {eng.findings.length} {lang === "ar" ? "ملاحظة" : "findings"}
          </p>
        </div>
      </div>
      <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-muted-foreground">{t("intro")}</p>

      {eng.findings.length > 0 && (
        <button
          onClick={() => exportFindingsCsvUtil(eng, lang)}
          className="mt-3 inline-flex h-8 items-center gap-1.5 rounded-lg border px-3 text-[12px] font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary focus-ring"
        >
          <Download className="h-3.5 w-3.5" /> {t("exportCsv")}
        </button>
      )}

      {/* materiality inputs + verdict */}
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border bg-card p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-foreground/70">
              {t("materiality")}
            </p>
            <button
              onClick={onGoMateriality}
              className="inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-[11.5px] font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary focus-ring"
            >
              <Calculator className="h-3.5 w-3.5" /> {t("openCalc")}
            </button>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-[11.5px] font-medium text-muted-foreground">{t("pm")}</label>
              <div className="mt-1">
                <NumInput
                  value={eng.pm ? String(eng.pm) : ""}
                  onChange={(v) => {
                    const n = parseFloat(v)
                    onSetMateriality(isFinite(n) && n > 0 ? n : undefined, eng.ctt)
                  }}
                  placeholder="600,000"
                  ariaLabel={t("pm")}
                />
              </div>
            </div>
            <div>
              <label className="text-[11.5px] font-medium text-muted-foreground">{t("ctt")}</label>
              <div className="mt-1">
                <NumInput
                  value={eng.ctt ? String(eng.ctt) : ""}
                  onChange={(v) => {
                    const n = parseFloat(v)
                    onSetMateriality(eng.pm, isFinite(n) && n > 0 ? n : undefined)
                  }}
                  placeholder="30,000"
                  ariaLabel={t("ctt")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={cn("rounded-2xl border p-4", VERDICT_STYLE[verdict.level])}>
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]">
            {VERDICT_ICON[verdict.level]} {t("uncorrected")}
          </p>
          <p className="mt-1.5 font-serif text-[26px] font-semibold leading-none tabular-nums tracking-tight">
            {fmtEgp(totals.total, lang)}
          </p>
          <p dir={rtl ? "rtl" : "ltr"} className="mt-2 text-[12.5px] leading-relaxed">
            {verdict[lang]}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11.5px] font-medium">
            <span>{t("openCount")}: {counts.open}</span>
            <span>{t("passedCount")}: {counts.passed}</span>
            <span>{t("correctedCount")}: {counts.corrected}</span>
            {eng.pm ? <span className="opacity-80">PM {fmtNum(eng.pm)}</span> : null}
            {eng.ctt ? <span className="opacity-80">CTT {fmtNum(eng.ctt)}</span> : null}
          </div>
        </div>
      </div>

      {/* add finding */}
      <div className="mt-4 rounded-2xl border bg-card p-4">
        <p className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-foreground/70">{t("addTitle")}</p>
        <div className="mt-3 grid gap-2.5 md:grid-cols-[190px_minmax(0,1fr)_150px_auto]">
          <SectionSelect value={sectionId} onChange={setSectionId} lang={lang} />
          <TextInput
            value={description}
            onChange={setDescription}
            placeholder={t("descPh")}
            dirAuto
            ariaLabel={t("description")}
          />
          <NumInput value={amount} onChange={setAmount} placeholder={t("amount")} ariaLabel={t("amount")} />
          <button
            onClick={add}
            disabled={!description.trim()}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 text-[12.5px] font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-ring disabled:opacity-40"
          >
            <Plus className="h-3.5 w-3.5" /> {t("add")}
          </button>
        </div>
        {/* v21: WP ref · qualitative flag · proposed adjustment entry */}
        <div className="mt-2.5 grid gap-2.5 md:grid-cols-[130px_auto_minmax(0,1fr)_minmax(0,1fr)_120px]">
          <TextInput value={wp} onChange={setWp} placeholder={t("wpRef")} ariaLabel={t("wpRef")} />
          <label className="flex cursor-pointer items-center gap-1.5 px-1 text-[12px] text-muted-foreground">
            <input
              type="checkbox"
              checked={qualitative}
              onChange={(e) => setQualitative(e.target.checked)}
              className="h-3.5 w-3.5 accent-primary"
            />
            {t("qualFlag")}
          </label>
          <TextInput value={adjDr} onChange={setAdjDr} placeholder={t("adjDr")} ariaLabel={t("adjDr")} dirAuto />
          <TextInput value={adjCr} onChange={setAdjCr} placeholder={t("adjCr")} ariaLabel={t("adjCr")} dirAuto />
          <NumInput value={adjAmount} onChange={setAdjAmount} placeholder={t("amount")} ariaLabel={`${t("proposedAdj")} — ${t("amount")}`} />
        </div>
      </div>

      {/* findings list */}
      {eng.findings.length === 0 ? (
        <p className="mt-4 rounded-2xl border border-dashed bg-card/50 p-5 text-center text-[13px] leading-relaxed text-muted-foreground" dir="auto">
          {t("empty")}
        </p>
      ) : (
        <ul className="mt-4 space-y-2">
          {eng.findings.map((f) => (
            <FindingRow
              key={f.id}
              f={f}
              lang={lang}
              code={sectionCode(f.sectionId)}
              confirmDel={confirmDel === f.id}
              onAskConfirm={() => setConfirmDel(f.id)}
              onCancelConfirm={() => setConfirmDel(null)}
              onUpdate={onUpdate}
              onDelete={() => {
                onDelete(f.id)
                setConfirmDel(null)
              }}
            />
          ))}
        </ul>
      )}

      {eng.findings.length > 0 && (
        <p className="mt-4 text-[11.5px] leading-relaxed text-muted-foreground" dir="auto">
          {t("qualitative")}
        </p>
      )}
    </div>
  )
}

function FindingRow({
  f,
  lang,
  code,
  confirmDel,
  onAskConfirm,
  onCancelConfirm,
  onUpdate,
  onDelete,
}: {
  f: Finding
  lang: Lang
  code: string
  confirmDel: boolean
  onAskConfirm: () => void
  onCancelConfirm: () => void
  onUpdate: (id: string, patch: Partial<Pick<Finding, "status" | "wp" | "qualitative" | "adj">>) => void
  onDelete: () => void
}) {
  const t = (k: keyof typeof T) => T[k][lang]

  const stBtn = (status: FindingStatus, label: string, activeClass: string) => (
    <button
      key={status}
      onClick={() => onUpdate(f.id, { status })}
      aria-pressed={f.status === status}
      className={cn(
        "h-7 rounded-lg border px-2 text-[11px] font-medium transition-colors focus-ring",
        f.status === status ? activeClass : "text-muted-foreground hover:border-primary/30 hover:text-foreground"
      )}
    >
      {label}
    </button>
  )

  return (
    <li
      className={cn(
        "rounded-xl border bg-card p-3.5",
        f.status === "corrected" && "border-sage/30 bg-sage/[0.04]",
        f.status === "passed" && "border-destructive/25 bg-destructive/[0.03]"
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="flex min-w-0 flex-1 items-start gap-2.5">
          <span className="mt-0.5 shrink-0 rounded-md bg-secondary px-1.5 py-0.5 font-mono text-[10.5px] text-muted-foreground">
            {code}
          </span>
          <div className="min-w-0">
            <p dir="auto" className={cn("text-[13px] leading-relaxed", f.status === "corrected" && "text-muted-foreground line-through decoration-sage/50")}>
              {f.description}
            </p>
            <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
              {typeof f.amount === "number" && <span className="font-medium tabular-nums text-foreground/80">{fmtEgp(f.amount, lang)}</span>}
              {f.wp && (
                <span dir="ltr" className="rounded bg-secondary px-1.5 font-mono text-[10px]">{f.wp}</span>
              )}
              {f.qualitative && (
                <span className="rounded bg-gold/15 px-1.5 text-[10px] font-medium text-gold-deep">{t("qualChip")}</span>
              )}
              {f.adj && (f.adj.dr || f.adj.cr || typeof f.adj.amount === "number") && (
                <span dir="auto" className="text-foreground/70">
                  {t("proposedAdj")}: {f.adj.dr || "—"} / {f.adj.cr || "—"}
                  {typeof f.adj.amount === "number" ? ` · ${fmtEgp(f.adj.amount, lang)}` : ""}
                </span>
              )}
              <span suppressHydrationWarning>{new Date(f.createdAt).toLocaleDateString(lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB", { day: "numeric", month: "short" })}</span>
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          {stBtn("open", t("stOpen"), "border-amber-500/60 bg-amber-50 text-amber-800")}
          {stBtn("passed", t("stPassed"), "border-destructive/50 bg-destructive/[0.07] text-destructive")}
          {stBtn("corrected", t("stCorrected"), "border-sage bg-sage/10 text-sage-deep")}
          {!confirmDel ? (
            <button
              onClick={onAskConfirm}
              aria-label={t("delete")}
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-destructive focus-ring"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </button>
          ) : (
            <span className="inline-flex items-center gap-1 rounded-lg border border-destructive/30 bg-destructive/[0.05] px-1.5 py-0.5">
              <span className="text-[10.5px] font-medium text-destructive">{t("confirmDel")}</span>
              <button onClick={onDelete} className="rounded-md bg-destructive px-1.5 py-0.5 text-[10.5px] font-medium text-white focus-ring">
                {t("yes")}
              </button>
              <button onClick={onCancelConfirm} className="rounded-md px-1 py-0.5 text-[10.5px] text-muted-foreground focus-ring">
                {t("no")}
              </button>
            </span>
          )}
        </div>
      </div>
    </li>
  )
}
