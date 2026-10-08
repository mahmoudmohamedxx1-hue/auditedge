"use client"

/**
 * v42 — the Closing Suite: the documents that complete the audit lifecycle,
 * drafted by the keyless GLM-5.3-Flash engine from the engagement's own
 * facts, progressive (SSE stages + cancel) and bilingual.
 *
 *   · EngagementDocCard  (kind: "letter") — the ISA 210 / ESA 210 engagement
 *     letter, mounted in the Program's methodology section (planning).
 *   · EngagementDocCard  (kind: "memo")   — the ISA 300 / ESA 300 audit
 *     strategy & planning memo, mounted in the risk-assessment section.
 *   · FraudBrainstorm    — the ISA 240 / ESA 240 mandatory fraud
 *     brainstorming session: a session memo, TCWG inquiries, and fraud-risk
 *     hypotheses that drop straight into the AP-01 risk matrix.
 *   · Isa700Drafter      — the ISA 700 / ESA 700 independent auditor's
 *     report, mounted in the close-out tab next to the EQR review.
 *
 *  All four persist their last draft in localStorage, export markdown,
 *  and speak their output through the standard voice stack. */

import { useEffect, useMemo, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { aiJson, type AiStageEvent } from "@/lib/ai-client"
import { StageTicker } from "./ai-progress"
import { Markdown } from "./markdown"
import { SpeakButton } from "./speak-button"
import { VoicePicker } from "./voice-picker"
import type { Engagement, RiskRow } from "@/lib/engagement"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import {
  AlertTriangle,
  Check,
  Copy,
  Download,
  FileSignature,
  FileText,
  Loader2,
  Mail,
  Plus,
  ScrollText,
  ShieldAlert,
  Sparkles,
} from "lucide-react"

type Lang = "en" | "ar"

/* ------------------------------------------------------------------ */
/* shared plumbing                                                     */
/* ------------------------------------------------------------------ */

function useAbortable() {
  const ctrl = useRef<AbortController | null>(null)
  const stop = () => {
    ctrl.current?.abort()
    ctrl.current = null
  }
  const start = () => {
    stop()
    ctrl.current = new AbortController()
    return ctrl.current.signal
  }
  useEffect(() => () => stop(), [])
  return { start, stop }
}

function downloadMarkdown(name: string, text: string) {
  const blob = new Blob([text], { type: "text/markdown;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = name
  a.click()
  URL.revokeObjectURL(url)
}

const COMMON = {
  generate: { en: "Draft it", ar: "أنشئ المسودة" },
  generating: { en: "Working…", ar: "جارٍ الإنشاء…" },
  cancel: { en: "Cancel", ar: "إلغاء" },
  copy: { en: "Copy", ar: "نسخ" },
  copied: { en: "Copied", ar: "تم النسخ" },
  download: { en: "Download .md", ar: "تنزيل .md" },
  failed: { en: "The draft failed — try again", ar: "فشل الإنشاء — حاول مجددًا" },
  cancelled: { en: "Draft cancelled", ar: "تم الإلغاء" },
  reviewNote: {
    en: "AI-assisted draft grounded in the standard's required elements. It is your professional responsibility to verify every statement and complete every [placeholder] before use.",
    ar: "مسودة بمساعدة الذكاء الاصطناعي مبنية على عناصر المعيار الإلزامية. مسؤوليتك المهنية التحقق من كل عبارة وإكمال كل [عنصر نائب] قبل الاستخدام.",
  },
} as const

/* ------------------------------------------------------------------ */
/* B4 — the ISA 210 engagement letter & the ISA 300 planning memo      */
/* ------------------------------------------------------------------ */

const DOC_UI = {
  letter: {
    icon: Mail,
    title: { en: "Engagement letter drafter — ISA 210 / ESA 210", ar: "مسوّد خطاب التكليف — ISA 210 / ESA 210" },
    subtitle: {
      en: "The engagement letter for this client, drafted from the active engagement's own facts — every ISA 210.10 element: scope, framework, the form of the report, management's responsibilities, the TCWG acknowledgment, fees placeholders, and the separate-letter note for non-audit services.",
      ar: "خطاب التكليف لهذا العميل بصياغة مستمدة من بيانات المهمة النشطة ذاتها — كل عنصر من عناصر ISA 210.10: النطاق والإطار المعياري وشكل التقرير ومسؤوليات الإدارة وإقرار الحوكمة وموضعات الأتعاب وملاحظة الخطاب المنفصل للخدمات غير المراجعية.",
    },
    extrasLabel: { en: "Terms to bake in (fees basis, timing, specific arrangements)", ar: "شروط تريد تضمينها (أساس الأتعاب، التوقيت، ترتيبات خاصة)" },
    extrasPh: {
      en: "e.g. fee is a fixed EGP 120k billed 40/40/20 across planning/fieldwork/final; fieldwork starts 1 Feb; the group component audit is done by another firm",
      ar: "مثال: أتعاب ثابتة 120 ألف ج.م تُدفع 40/40/20 عبر التخطيط والعمل الميداني والإقفال؛ يبدأ الميداني 1 فبراير؛ مراجعة مكوّن المجموعة لدى مكتب آخر",
    },
    stages: [
      { en: "Reading the client profile", ar: "قراءة ملف العميل" },
      { en: "Writing the letter (EN + AR)", ar: "صياغة الخطاب (إنجليزي + عربي)" },
      { en: "Finalizing", ar: "اللمسات الأخيرة" },
    ],
    storage: "auditedge-isa210-letter",
    file: "engagement-letter",
  },
  memo: {
    icon: ScrollText,
    title: { en: "Planning memo drafter — ISA 300 / ESA 300", ar: "مسوّد مذكرة التخطيط — ISA 300 / ESA 300" },
    subtitle: {
      en: "The audit strategy & planning memo for this engagement — scope, timing and direction driven by the client's actual risk profile, the linked materiality, the risk areas and their responses, milestones and deliverables.",
      ar: "مذكرة استراتيجية المراجعة والتخطيط لهذه المهمة — النطاق والتوقيت والتوجيه وفقًا لملف مخاطر العميل الفعلي، والأهمية المرتبطة، ومناطق المخاطر واستجاباتها، والمحطات والمخرجات.",
    },
    extrasLabel: { en: "Direction notes (deadlines, team, interim/final split, specialists)", ar: "ملاحظات التوجيه (مواعيد، الفريق، تقسيم المرحلة المؤقتة/النهائية، المتخصصون)" },
    extrasPh: {
      en: "e.g. FRA deadline 30 April; interim inventory count 28 Dec; IT specialist needed on the new ERP; senior 60% allocated",
      ar: "مثال: موعد الهيئة 30 أبريل؛ جرد منتصف العام 28 ديسمبر؛ مطلوب أخصائي تقنية للنظام الجديد؛ المراجع الأول بنسبة 60%",
    },
    stages: [
      { en: "Reading the client profile", ar: "قراءة ملف العميل" },
      { en: "Writing the memo (EN + AR)", ar: "صياغة المذكرة (إنجليزي + عربي)" },
      { en: "Finalizing", ar: "اللمسات الأخيرة" },
    ],
    storage: "auditedge-isa300-memo",
    file: "planning-memo",
  },
} as const

export function EngagementDocCard({
  kind,
  lang,
  eng,
}: {
  kind: "letter" | "memo"
  lang: Lang
  eng: Engagement
}) {
  const rtl = lang === "ar"
  const D = DOC_UI[kind]
  const Icon = D.icon
  const [extras, setExtras] = useState("")
  const [busy, setBusy] = useState(false)
  const [startedAt, setStartedAt] = useState(0)
  const [stage, setStage] = useState<AiStageEvent | null>(null)
  const [draft, setDraft] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const { start, stop } = useAbortable()

  useEffect(() => {
    try {
      const saved = localStorage.getItem(D.storage)
      if (saved) setDraft(saved)
    } catch {}
  }, [D.storage])

  const generate = async () => {
    setBusy(true)
    setStartedAt(Date.now())
    setStage(null)
    try {
      const data = await aiJson<{ draft?: string; error?: string }>(
        "/api/ai/engagement-docs",
        { kind, engagement: eng, extras },
        { onStage: setStage, signal: start() }
      )
      if (!data.draft) throw new Error(data.error || "failed")
      setDraft(data.draft)
      try {
        localStorage.setItem(D.storage, data.draft)
      } catch {}
    } catch (e) {
      if (e instanceof DOMException && e.name === "AbortError") toast.info(COMMON.cancelled[lang])
      else toast.error(e instanceof Error && e.message ? e.message : COMMON.failed[lang])
    } finally {
      setBusy(false)
      stop()
    }
  }

  const copyDraft = async () => {
    if (!draft) return
    try {
      await navigator.clipboard.writeText(draft)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      toast.error(lang === "ar" ? "تعذر النسخ" : "Could not copy")
    }
  }

  const input =
    "mt-1 w-full resize-y rounded-lg border bg-background px-2.5 py-2 text-[13px] leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40"

  return (
    <div dir={rtl ? "rtl" : "ltr"} className="rounded-2xl border bg-card p-4 shadow-soft sm:p-5 print:hidden">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-4 w-4 text-primary" />
        </span>
        <h3 className="font-serif text-[15.5px] font-semibold tracking-tight">{D.title[lang]}</h3>
      </div>
      <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">{D.subtitle[lang]}</p>

      <label className="mt-4 block">
        <span className="text-[11.5px] font-medium text-muted-foreground">{D.extrasLabel[lang]}</span>
        <textarea
          dir="auto"
          value={extras}
          onChange={(e) => setExtras(e.target.value)}
          placeholder={D.extrasPh[lang]}
          rows={3}
          className={input}
        />
      </label>

      <div className="mt-3 flex items-center justify-end gap-2">
        <button
          onClick={() => void generate()}
          disabled={busy}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-[12.5px] font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90 disabled:opacity-60 focus-ring"
        >
          {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Sparkles className="h-3.5 w-3.5" />}
          {busy ? COMMON.generating[lang] : COMMON.generate[lang]}
        </button>
      </div>

      <div className="mt-3">
        <StageTicker
          busy={busy}
          labels={D.stages.map((s) => s[lang])}
          stage={stage}
          startedAt={startedAt}
          onCancel={() => stop()}
          cancelLabel={COMMON.cancel[lang]}
          runningLabel={COMMON.generating[lang]}
        />
      </div>

      {draft && (
        <div className="mt-4 rounded-xl border bg-background/60 p-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {kind === "letter" ? (lang === "ar" ? "المسودة — راجعها قبل الإرسال" : "The draft — review before sending") : lang === "ar" ? "المسودة — راجعها ثم حررها" : "The draft — review, then edit in the file"}
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => void copyDraft()}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11.5px] text-muted-foreground transition-colors hover:text-foreground focus-ring"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? COMMON.copied[lang] : COMMON.copy[lang]}
              </button>
              <button
                onClick={() => downloadMarkdown(`${D.file}-${eng.client.toLowerCase().replace(/\s+/g, "-")}.md`, draft)}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11.5px] text-muted-foreground transition-colors hover:text-foreground focus-ring"
              >
                <Download className="h-3.5 w-3.5" /> {COMMON.download[lang]}
              </button>
              <VoicePicker lang={lang} variant="icon" />
              <SpeakButton text={draft.replace(/##\s*(English|العربية)/g, "")} className="p-1" />
            </div>
          </div>
          <div className="prose-note mt-2 text-[13px]">
            <Markdown content={draft} />
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">⚖ {COMMON.reviewNote[lang]}</p>
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* B3 — the ISA 240 fraud brainstorming session                        */
/* ------------------------------------------------------------------ */

type Hypothesis = {
  account: string
  assertion: string
  en: string
  ar: string
  ir: "low" | "med" | "high"
  cr: "low" | "med" | "high"
  responseEn: string
  responseAr: string
}

type BrainstormLog = {
  memo: { en: string; ar: string }
  inquiries: { en: string; ar: string }[]
  hypotheses: Hypothesis[]
}

const FB_UI = {
  title: { en: "Fraud brainstorming session — ISA 240 / ESA 240", ar: "جلسة العصف الذهني للاحتيال — ISA 240 / ESA 240" },
  subtitle: {
    en: "The mandatory planning session the file must evidence (ISA 240.15): how fraud could hit THIS client — incentive, opportunity, rationalization — then the inquiries to put to TCWG and the fraud-risk hypotheses with their audit responses, ready to drop into the risk matrix.",
    ar: "الجلسة التخطيطية الإلزامية التي يجب أن يثبتها الملف (ISA 240.15): كيف يمكن أن يقع الاحتيال على هذا العميل تحديدًا — الدافع والفرصة والتبرير — ثم أسئلة تُطرح على الحوكمة وفرضيات مخاطر الاحتيال مع استجابات المراجعة، جاهزة للإسقاط في مصفوفة المخاطر.",
  },
  notesLabel: { en: "What the team already suspects (optional)", ar: "ما يشك فيه الفريق بالفعل (اختياري)" },
  notesPh: {
    en: "e.g. the sales manager overrides prices near quarter-end; the new ERP migration lost the audit trail for Q2",
    ar: "مثال: مدير المبيعات يتجاوز الأسعار قرب نهاية الربع؛ ترحيل النظام الجديد أضاع مسار التدقيق للربع الثاني",
  },
  memoTitle: { en: "Session memo", ar: "مذكرة الجلسة" },
  inquiriesTitle: { en: "Inquiries for TCWG · management · counsel (ISA 240.16-17)", ar: "أسئلة للحوكمة والإدارة والمستشار القانوني (ISA 240.16-17)" },
  hypothesesTitle: { en: "Fraud-risk hypotheses (ISA 240 — always significant risks)", ar: "فرضيات مخاطر الاحتيال (ISA 240 — دائمًا مخاطر جوهرية)" },
  addToMatrix: { en: "Add to risk matrix", ar: "أضف إلى مصفوفة المخاطر" },
  added: { en: "Added ✓", ar: "أُضيفت ✓" },
  response: { en: "Audit response", ar: "استجابة المراجعة" },
  stages: [
    { en: "Reading the client profile", ar: "قراءة ملف العميل" },
    { en: "Thinking like a fraudster", ar: "التفكير بعقلية المحتال" },
    { en: "Structuring the risk log", ar: "بناء سجل المخاطر" },
  ],
} as const

const RATE_COLORS: Record<"low" | "med" | "high", string> = {
  low: "bg-secondary text-muted-foreground",
  med: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  high: "bg-red-500/15 text-red-700 dark:text-red-400",
}

export function FraudBrainstorm({
  lang,
  eng,
  onPatchEng,
}: {
  lang: Lang
  eng: Engagement
  onPatchEng: (patch: Partial<Engagement>) => void
}) {
  const rtl = lang === "ar"
  const L = (b: { en: string; ar: string }) => b[lang]
  const [notes, setNotes] = useState("")
  const [busy, setBusy] = useState(false)
  const [startedAt, setStartedAt] = useState(0)
  const [stage, setStage] = useState<AiStageEvent | null>(null)
  const [log, setLog] = useState<BrainstormLog | null>(null)
  const [added, setAdded] = useState<Set<number>>(new Set())
  const { start, stop } = useAbortable()

  useEffect(() => {
    try {
      const saved = localStorage.getItem("auditedge-isa240-log")
      if (saved) setLog(JSON.parse(saved))
    } catch {}
  }, [])

  const generate = async () => {
    setBusy(true)
    setStartedAt(Date.now())
    setStage(null)
    try {
      const data = await aiJson<BrainstormLog & { error?: string }>(
        "/api/ai/fraud-brainstorm",
        { engagement: eng, notes },
        { onStage: setStage, signal: start() }
      )
      if (!data.hypotheses?.length) throw new Error(data.error || "failed")
      const next: BrainstormLog = {
        memo: data.memo ?? { en: "", ar: "" },
        inquiries: data.inquiries ?? [],
        hypotheses: data.hypotheses,
      }
      setLog(next)
      setAdded(new Set())
      try {
        localStorage.setItem("auditedge-isa240-log", JSON.stringify(next))
      } catch {}
    } catch (e) {
      if (e instanceof DOMException && e.name === "AbortError") toast.info(COMMON.cancelled[lang])
      else toast.error(e instanceof Error && e.message ? e.message : COMMON.failed[lang])
    } finally {
      setBusy(false)
      stop()
    }
  }

  const addRow = (h: Hypothesis, i: number) => {
    const row: RiskRow = {
      id: `fr-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
      account: h.account,
      assertion: h.assertion,
      ir: h.ir,
      cr: h.cr,
      // ISA 240.32 — a risk of material misstatement due to fraud is a
      // significant risk by definition
      significant: true,
      response: lang === "ar" ? h.responseAr : h.responseEn,
      savedAt: Date.now(),
    }
    onPatchEng({ riskMatrix: [...(eng.riskMatrix ?? []), row] })
    setAdded((prev) => new Set(prev).add(i))
    toast.success(
      lang === "ar" ? "أُضيفت الفرضية إلى مصفوفة المخاطر (AP-01)" : "Hypothesis added to the risk matrix (AP-01)"
    )
  }

  const input =
    "mt-1 w-full resize-y rounded-lg border bg-background px-2.5 py-2 text-[13px] leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40"

  return (
    <div dir={rtl ? "rtl" : "ltr"} className="rounded-2xl border bg-card p-4 shadow-soft sm:p-5 print:hidden">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
          <ShieldAlert className="h-4 w-4 text-red-500" />
        </span>
        <h3 className="font-serif text-[15.5px] font-semibold tracking-tight">{FB_UI.title[lang]}</h3>
      </div>
      <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">{FB_UI.subtitle[lang]}</p>

      <label className="mt-4 block">
        <span className="text-[11.5px] font-medium text-muted-foreground">{FB_UI.notesLabel[lang]}</span>
        <textarea
          dir="auto"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={FB_UI.notesPh[lang]}
          rows={2}
          className={input}
        />
      </label>

      <div className="mt-3 flex items-center justify-end">
        <button
          onClick={() => void generate()}
          disabled={busy}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-[12.5px] font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90 disabled:opacity-60 focus-ring"
        >
          {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Sparkles className="h-3.5 w-3.5" />}
          {busy ? COMMON.generating[lang] : (lang === "ar" ? "اعقد الجلسة" : "Run the session")}
        </button>
      </div>

      <div className="mt-3">
        <StageTicker
          busy={busy}
          labels={FB_UI.stages.map((s) => s[lang])}
          stage={stage}
          startedAt={startedAt}
          onCancel={() => stop()}
          cancelLabel={COMMON.cancel[lang]}
          runningLabel={COMMON.generating[lang]}
        />
      </div>

      {log && (
        <div className="mt-4 space-y-4">
          {((lang === "ar" && log.memo.ar) || log.memo.en) && (
            <div className="rounded-xl border bg-background/60 p-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {FB_UI.memoTitle[lang]}
              </p>
              <p dir="auto" className="mt-1.5 text-[13px] leading-relaxed text-foreground/90">
                {L(log.memo)}
              </p>
            </div>
          )}

          {log.inquiries.length > 0 && (
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {FB_UI.inquiriesTitle[lang]}
              </p>
              <ol className="mt-2 space-y-1.5">
                {log.inquiries.map((q, i) => (
                  <li key={i} dir="auto" className="flex gap-2.5 rounded-lg bg-secondary/40 px-3 py-2 text-[12.5px] leading-relaxed text-foreground/90">
                    <span className="shrink-0 font-mono text-[10.5px] font-semibold text-primary">{i + 1}</span>
                    <span>{L(q)}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {log.hypotheses.length > 0 && (
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {FB_UI.hypothesesTitle[lang]}
              </p>
              <div className="mt-2 space-y-2.5">
                {log.hypotheses.map((h, i) => (
                  <div key={i} className="rounded-xl border border-red-500/20 bg-red-500/[0.03] p-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="flex min-w-0 flex-wrap items-center gap-1.5">
                        <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-red-500" />
                        <span className="text-[13px] font-semibold">{h.account}</span>
                        {h.assertion && (
                          <span className="rounded bg-secondary px-1.5 py-px font-mono text-[10px] text-muted-foreground">
                            {h.assertion}
                          </span>
                        )}
                        <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-semibold", RATE_COLORS[h.ir])}>
                          IR: {h.ir.toUpperCase()}
                        </span>
                        <span className={cn("rounded-full px-2 py-0.5 text-[10px] font-semibold", RATE_COLORS[h.cr])}>
                          CR: {h.cr.toUpperCase()}
                        </span>
                      </div>
                      <button
                        onClick={() => addRow(h, i)}
                        disabled={added.has(i)}
                        className={cn(
                          "inline-flex shrink-0 items-center gap-1 rounded-lg border px-2.5 py-1 text-[11.5px] font-medium transition-colors focus-ring",
                          added.has(i)
                            ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                            : "border-border/70 bg-card hover:border-primary/30 hover:text-primary"
                        )}
                      >
                        {added.has(i) ? <Check className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                        {added.has(i) ? FB_UI.added[lang] : FB_UI.addToMatrix[lang]}
                      </button>
                    </div>
                    <p dir="auto" className="mt-1.5 text-[13px] leading-relaxed text-foreground/90">{L({ en: h.en, ar: h.ar })}</p>
                    <p dir="auto" className="mt-1.5 border-s-2 border-primary/30 ps-2.5 text-[12.5px] leading-relaxed text-muted-foreground">
                      <span className="font-semibold text-foreground/80">{FB_UI.response[lang]}: </span>
                      {L({ en: h.responseEn, ar: h.responseAr })}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* B1 — the ISA 700 independent auditor's report                       */
/* ------------------------------------------------------------------ */

const R7_UI = {
  title: { en: "Auditor's report drafter — ISA 700 / ESA 700", ar: "مسوّد تقرير المراجع المستقل — ISA 700 / ESA 700" },
  subtitle: {
    en: "The independent auditor's report assembled from THIS file: the opinion ladder applied to your SAD verdict and going-concern conclusion, the KAMs drafted in the completion section embedded, and honest [placeholders] where only you can fill in.",
    ar: "تقرير المراجع المستقل مُجمَّع من هذا الملف: سلم الرأي مطبقًا على تقييم فروقاتك وخلاصة الاستمرارية، والمسائل الجوهرية التي صغتها في قسم الإقفال مُدمجة، وموضعات صادقة [بين أقواس] حيث لا يملأها غيرك.",
  },
  opinion: { en: "Opinion", ar: "الرأي" },
  opinionAuto: { en: "Let the file decide (recommended)", ar: "ليقرر الملف (موصى به)" },
  opinionUnmodified: { en: "Unmodified", ar: "غير معدل" },
  opinionQualified: { en: "Qualified", ar: "متحفظ" },
  opinionAdverse: { en: "Adverse", ar: "سلبي" },
  opinionDisclaimer: { en: "Disclaimer of opinion", ar: "امتناع عن إبداء الرأي" },
  framework: { en: "Applicable framework", ar: "الإطار المعياري المطبق" },
  frameworkIfrs: { en: "IFRS (IASB)", ar: "المعايير الدولية (IASB)" },
  frameworkEas: { en: "Egyptian Accounting Standards (EAS)", ar: "المعايير المصرية (EAS)" },
  kams: { en: "Key Audit Matters (from the completion section)", ar: "المسائل الجوهرية (من قسم الإقفال)" },
  kamsPh: {
    en: "Paste your drafted KAMs here — or draft them first in the Completion section and they appear automatically.",
    ar: "الصق مسائلك الجوهرية هنا — أو صغها أولًا في قسم الإقفال فتظهر هنا تلقائيًا.",
  },
  eom: { en: "Other Matter / Emphasis of Matter (optional)", ar: "أمور أخرى / تركيز على أمر (اختياري)" },
  eomPh: {
    en: "e.g. the prior-year figures were audited by another firm; a subsequent-event note the reader must see",
    ar: "مثال: أرقام العام السابق روجعها مكتب آخر؛ ملاحظة لاحقة يجب أن يراها القارئ",
  },
  stages: [
    { en: "Reading the close-out bundle", ar: "قراءة ملف الإقفال" },
    { en: "Drafting the report (EN + AR)", ar: "صياغة التقرير (إنجليزي + عربي)" },
    { en: "Finalizing", ar: "اللمسات الأخيرة" },
  ],
} as const

const OPINION_OPTIONS = [
  { id: "auto", labelKey: "opinionAuto" },
  { id: "unmodified", labelKey: "opinionUnmodified" },
  { id: "qualified", labelKey: "opinionQualified" },
  { id: "adverse", labelKey: "opinionAdverse" },
  { id: "disclaimer", labelKey: "opinionDisclaimer" },
] as const

export function Isa700Drafter({ lang, eng }: { lang: Lang; eng: Engagement }) {
  const rtl = lang === "ar"
  const L = (b: { en: string; ar: string }) => b[lang]
  const [opinion, setOpinion] = useState<(typeof OPINION_OPTIONS)[number]["id"]>("auto")
  const [framework, setFramework] = useState<"ifrs" | "eas">("ifrs")
  const [kams, setKams] = useState("")
  const [eom, setEom] = useState("")
  const [busy, setBusy] = useState(false)
  const [startedAt, setStartedAt] = useState(0)
  const [stage, setStage] = useState<AiStageEvent | null>(null)
  const [draft, setDraft] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const { start, stop } = useAbortable()

  /* prefill the KAM text from the completion section's drafter */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("auditedge-kam-draft")
      if (saved) setKams(saved.slice(0, 6000))
    } catch {}
  }, [])
  useEffect(() => {
    try {
      const saved = localStorage.getItem("auditedge-isa700-report")
      if (saved) setDraft(saved)
    } catch {}
  }, [])

  const generate = async () => {
    setBusy(true)
    setStartedAt(Date.now())
    setStage(null)
    try {
      const data = await aiJson<{ draft?: string; error?: string }>(
        "/api/ai/report-draft",
        { engagement: eng, opinion, framework, kams, eom },
        { onStage: setStage, signal: start() }
      )
      if (!data.draft) throw new Error(data.error || "failed")
      setDraft(data.draft)
      try {
        localStorage.setItem("auditedge-isa700-report", data.draft)
      } catch {}
    } catch (e) {
      if (e instanceof DOMException && e.name === "AbortError") toast.info(COMMON.cancelled[lang])
      else toast.error(e instanceof Error && e.message ? e.message : COMMON.failed[lang])
    } finally {
      setBusy(false)
      stop()
    }
  }

  const copyDraft = async () => {
    if (!draft) return
    try {
      await navigator.clipboard.writeText(draft)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      toast.error(lang === "ar" ? "تعذر النسخ" : "Could not copy")
    }
  }

  const input =
    "mt-1 w-full resize-y rounded-lg border bg-background px-2.5 py-2 text-[13px] leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40"
  const select = "mt-1 h-9 w-full rounded-lg border bg-background px-2.5 text-[13px] outline-none transition-colors focus:border-primary/40"

  return (
    <div dir={rtl ? "rtl" : "ltr"} className="rounded-2xl border bg-card p-4 shadow-soft sm:p-5 print:hidden">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <FileSignature className="h-4 w-4 text-primary" />
        </span>
        <h3 className="font-serif text-[15.5px] font-semibold tracking-tight">{R7_UI.title[lang]}</h3>
      </div>
      <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">{R7_UI.subtitle[lang]}</p>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <label className="block">
          <span className="text-[11.5px] font-medium text-muted-foreground">{R7_UI.opinion[lang]}</span>
          <select value={opinion} onChange={(e) => setOpinion(e.target.value as typeof opinion)} className={select}>
            {OPINION_OPTIONS.map((o) => (
              <option key={o.id} value={o.id}>
                {R7_UI[o.labelKey][lang]}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-[11.5px] font-medium text-muted-foreground">{R7_UI.framework[lang]}</span>
          <select value={framework} onChange={(e) => setFramework(e.target.value as typeof framework)} className={select}>
            <option value="ifrs">{R7_UI.frameworkIfrs[lang]}</option>
            <option value="eas">{R7_UI.frameworkEas[lang]}</option>
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="text-[11.5px] font-medium text-muted-foreground">{R7_UI.kams[lang]}</span>
          <textarea
            dir="auto"
            value={kams}
            onChange={(e) => setKams(e.target.value)}
            placeholder={R7_UI.kamsPh[lang]}
            rows={3}
            className={input}
          />
        </label>
        <label className="block md:col-span-2">
          <span className="text-[11.5px] font-medium text-muted-foreground">{R7_UI.eom[lang]}</span>
          <textarea
            dir="auto"
            value={eom}
            onChange={(e) => setEom(e.target.value)}
            placeholder={R7_UI.eomPh[lang]}
            rows={2}
            className={input}
          />
        </label>
      </div>

      <div className="mt-3 flex items-center justify-end">
        <button
          onClick={() => void generate()}
          disabled={busy}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-[12.5px] font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90 disabled:opacity-60 focus-ring"
        >
          {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Sparkles className="h-3.5 w-3.5" />}
          {busy ? COMMON.generating[lang] : COMMON.generate[lang]}
        </button>
      </div>

      <div className="mt-3">
        <StageTicker
          busy={busy}
          labels={R7_UI.stages.map((s) => s[lang])}
          stage={stage}
          startedAt={startedAt}
          onCancel={() => stop()}
          cancelLabel={COMMON.cancel[lang]}
          runningLabel={COMMON.generating[lang]}
        />
      </div>

      {draft && (
        <div className="mt-4 rounded-xl border bg-background/60 p-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {lang === "ar" ? "المسودة — راجعها قبل التوقيع" : "The draft — review before signing"}
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => void copyDraft()}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11.5px] text-muted-foreground transition-colors hover:text-foreground focus-ring"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? COMMON.copied[lang] : COMMON.copy[lang]}
              </button>
              <button
                onClick={() => downloadMarkdown(`auditors-report-${eng.client.toLowerCase().replace(/\s+/g, "-")}.md`, draft)}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11.5px] text-muted-foreground transition-colors hover:text-foreground focus-ring"
              >
                <Download className="h-3.5 w-3.5" /> {COMMON.download[lang]}
              </button>
              <VoicePicker lang={lang} variant="icon" />
              <SpeakButton text={draft.replace(/##\s*(English|العربية)/g, "")} className="p-1" />
            </div>
          </div>
          <div className="prose-note mt-2 text-[13px]">
            <Markdown content={draft} />
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">⚖ {COMMON.reviewNote[lang]}</p>
        </div>
      )}
    </div>
  )
}

/* a small convenience re-export so program.tsx mounts read cleanly */
export const ClosingSuiteIcons = { FileText }
