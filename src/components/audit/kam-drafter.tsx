"use client"

import { useEffect, useState } from "react"
import { SpeakButton } from "./speak-button"
import { VoicePicker } from "./voice-picker"
import { Markdown } from "./markdown"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { Check, Copy, FileSignature, Loader2, Sparkles } from "lucide-react"

type Lang = "en" | "ar"

const T = {
  title: { en: "KAM drafter — ISA 701 / ESA 701", ar: "مسوّد المسائل الجوهرية — ISA 701 / ESA 701" },
  subtitle: {
    en: "Turn your significant risks into a properly structured Key Audit Matter: what the matter is, why it was significant, and how the audit addressed it — drafted in English and Arabic.",
    ar: "حوّل مخاطرك الجوهرية إلى مسألة جوهرية للمراجعة مبنية بشكل صحيح: ما المسألة، ولماذا كانت جوهرية، وكيف عالجتها المراجعة — بصياغة إنجليزية وعربية.",
  },
  topic: { en: "Key audit matter", ar: "المسألة الجوهرية" },
  entity: { en: "Entity name", ar: "اسم المنشأة" },
  entityPh: { en: "e.g. Delta Trading Co. (S.A.E.)", ar: "مثال: شركة دلتا للتجارة" },
  period: { en: "Period end", ar: "نهاية الفترة" },
  why: { en: "Why it is significant (risk / judgment / estimation uncertainty)", ar: "لماذا تعتبر جوهرية (خطر / حكم مهني / عدم يقين في التقدير)" },
  whyPh: {
    en: "e.g. ECL model under IFRS 9 involves significant judgment on forward-looking macro scenarios; the portfolio is 40% of total assets",
    ar: "مثال: نموذج الخسائر المتوقعة وفق IFRS 9 ينطوي على حكم مهني كبير في السيناريوهات الاقتصادية؛ والمحفظة 40% من إجمالي الأصول",
  },
  how: { en: "How it was addressed in the audit (procedures performed)", ar: "كيف عولجت في المراجعة (الإجراءات المنفذة)" },
  howPh: {
    en: "e.g. evaluated the model methodology and assumptions, tested staging of a sample against repayment data, involved an IT specialist on the model's logic",
    ar: "مثال: تقييم منهجية النموذج والافتراضات، واختبار تصنيف عينة مقابل بيانات السداد، وإشراك أخصائي تقنية على منطق النموذج",
  },
  listed: { en: "Listed entity (KAM mandatory)", ar: "شركة مقيدة (المسائل الجوهرية إلزامية)" },
  generate: { en: "Draft the KAM", ar: "أنشئ المسودة" },
  generating: { en: "Drafting…", ar: "جارٍ الصياغة…" },
  criteria: { en: "What qualifies as a KAM", ar: "ما الذي يؤهل لتكون مسألة جوهرية" },
  criteriaBody: {
    en: "Matters communicated to those charged with governance · drawn from significant risks (ISA 315/240) or areas of significant judgment and estimation uncertainty (ISA 540) · matters requiring significant auditor attention · NOT trivial, NOT routine — and never a disguised qualification.",
    ar: "أمور نوقشت مع المسؤولين عن الحوكمة · مستمدة من المخاطر الجوهرية (ISA 315/240) أو مناطق الحكم المهني وعدم اليقين في التقدير (ISA 540) · أمور تطلبت اهتمامًا كبيرًا من المراجع · ليست تافهة ولا روتينية — وليست أبدًا تحفظًا متنكرًا.",
  },
  draft: { en: "Draft — review, then edit in your report", ar: "المسودة — راجعها ثم حررها في تقريرك" },
  copy: { en: "Copy", ar: "نسخ" },
  copied: { en: "Copied", ar: "تم النسخ" },
  draftNote: {
    en: "AI-assisted draft grounded in ISA 701's structure. It is your professional responsibility to verify every statement before it enters the auditor's report.",
    ar: "مسودة بمساعدة الذكاء الاصطناعي مبنية على هيكل ISA 701. مسؤوليتك المهنية التحقق من كل عبارة قبل دخولها تقرير المراجع.",
  },
} as const

const t = (k: keyof typeof T, lang: Lang) => T[k][lang]

/** Common KAM areas across industries. */
const TOPICS: { en: string; ar: string }[] = [
  { en: "Revenue recognition", ar: "الاعتراف بالإيراد" },
  { en: "Expected credit losses on financial assets (IFRS 9)", ar: "الخسائر الائتمانية المتوقعة للأصول المالية (IFRS 9)" },
  { en: "Impairment of goodwill and intangibles", ar: "انهيار قيمة الشهرة والأصول غير الملموسة" },
  { en: "Inventory valuation and net realizable value", ar: "تقييم المخزون وصافي القيمة البيعية" },
  { en: "Going concern", ar: "الاستمرارية" },
  { en: "Valuation of investment properties", ar: "تقييم الاستثمارات العقارية" },
  { en: "Provisions and contingencies (litigation)", ar: "المخصصات والالتزامات المحتملة (التقاضي)" },
  { en: "Capitalization of development costs", ar: "رأسمالية تكاليف التطوير" },
  { en: "Recognition of construction revenue (percentage of completion)", ar: "الاعتراف بإيرادات التشييد (نسبة الإتمام)" },
  { en: "IT systems implementation and data migration", ar: "تطبيق أنظمة المعلومات وترحيل البيانات" },
  { en: "Deferred tax recognition", ar: "الاعتراف بالضرائب المؤجلة" },
  { en: "Business combination valuation (PPA)", ar: "تقييم اندماج الأعمال (توزيع سعر الشراء)" },
]

const DRAFT_KEY = "auditedge-kam-draft"

/** Key Audit Matters drafter (improvement #8): structured bilingual KAM
 *  drafts from the auditor's own risk and response notes. */
export function KamDrafter({ lang }: { lang: Lang }) {
  const rtl = lang === "ar"
  const [topic, setTopic] = useState("")
  const [customTopic, setCustomTopic] = useState("")
  const [entity, setEntity] = useState("")
  const [periodEnd, setPeriodEnd] = useState("31 December 2025")
  const [why, setWhy] = useState("")
  const [how, setHow] = useState("")
  const [listed, setListed] = useState(false)
  const [busy, setBusy] = useState(false)
  const [draft, setDraft] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  // restore the last draft after hydration
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY)
      if (saved) setDraft(saved)
    } catch {}
  }, [])

  const effectiveTopic = customTopic.trim() || topic

  const generate = async () => {
    if (!effectiveTopic || why.trim().length < 10 || how.trim().length < 10) {
      toast.error(
        lang === "ar"
          ? "اختر المسألة واملأ سبب الجوهرية والإجراءات أولًا"
          : "Pick the matter and fill in why it is significant and how it was addressed"
      )
      return
    }
    setBusy(true)
    try {
      const res = await fetch("/api/ai/kam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          topic: effectiveTopic,
          entity: entity.trim() || undefined,
          periodEnd: periodEnd.trim() || undefined,
          whySignificant: why,
          howAddressed: how,
          listed,
        }),
      })
      const j = (await res.json().catch(() => ({}))) as { draft?: string; error?: string }
      if (!res.ok || !j.draft) throw new Error(j.error || "Drafting failed")
      setDraft(j.draft)
      try {
        localStorage.setItem(DRAFT_KEY, j.draft)
      } catch {}
    } catch (e) {
      toast.error(e instanceof Error && e.message ? e.message : "Could not draft the KAM")
    } finally {
      setBusy(false)
    }
  }

  const copyDraft = async () => {
    if (!draft) return
    try {
      await navigator.clipboard.writeText(draft)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      toast.error("Could not copy — your browser blocked clipboard access")
    }
  }

  const input =
    "mt-1 h-9 w-full rounded-lg border bg-background px-2.5 text-[13px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40"

  return (
    <div dir={rtl ? "rtl" : "ltr"} className="rounded-2xl border bg-card p-4 shadow-soft sm:p-5 print:hidden">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <FileSignature className="h-4 w-4 text-primary" />
        </span>
        <h3 className="font-serif text-[15.5px] font-semibold tracking-tight">{t("title", lang)}</h3>
      </div>
      <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">{t("subtitle", lang)}</p>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <label className="block">
          <span className="text-[11.5px] font-medium text-muted-foreground">{t("topic", lang)}</span>
          <select value={topic} onChange={(e) => setTopic(e.target.value)} className={input}>
            <option value="">{lang === "ar" ? "— اختر أو اكتب أدناه —" : "— pick one or type below —"}</option>
            {TOPICS.map((tp) => (
              <option key={tp.en} value={tp.en}>
                {lang === "ar" ? tp.ar : tp.en}
              </option>
            ))}
          </select>
          <input
            dir="auto"
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            placeholder={lang === "ar" ? "أو اكتب مسألة مخصصة…" : "or type a custom matter…"}
            className={cn(input, "mt-1.5")}
          />
        </label>
        <label className="block">
          <span className="text-[11.5px] font-medium text-muted-foreground">{t("entity", lang)}</span>
          <input dir="auto" value={entity} onChange={(e) => setEntity(e.target.value)} placeholder={t("entityPh", lang)} className={input} />
          <span className="mt-1.5 block text-[11.5px] font-medium text-muted-foreground">{t("period", lang)}</span>
          <input dir="auto" value={periodEnd} onChange={(e) => setPeriodEnd(e.target.value)} className={input} />
        </label>
        <label className="block md:col-span-2">
          <span className="text-[11.5px] font-medium text-muted-foreground">{t("why", lang)}</span>
          <textarea
            dir="auto"
            value={why}
            onChange={(e) => setWhy(e.target.value)}
            placeholder={t("whyPh", lang)}
            rows={3}
            className="mt-1 w-full resize-y rounded-lg border bg-background px-2.5 py-2 text-[13px] leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40"
          />
        </label>
        <label className="block md:col-span-2">
          <span className="text-[11.5px] font-medium text-muted-foreground">{t("how", lang)}</span>
          <textarea
            dir="auto"
            value={how}
            onChange={(e) => setHow(e.target.value)}
            placeholder={t("howPh", lang)}
            rows={3}
            className="mt-1 w-full resize-y rounded-lg border bg-background px-2.5 py-2 text-[13px] leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40"
          />
        </label>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <label className="inline-flex cursor-pointer items-center gap-2 text-[12.5px] text-foreground/80">
          <input
            type="checkbox"
            checked={listed}
            onChange={(e) => setListed(e.target.checked)}
            className="h-4 w-4 rounded border-input accent-sage"
          />
          {t("listed", lang)}
        </label>
        <button
          onClick={() => void generate()}
          disabled={busy}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-[12.5px] font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90 disabled:opacity-60 focus-ring"
        >
          {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Sparkles className="h-3.5 w-3.5" />}
          {busy ? t("generating", lang) : t("generate", lang)}
        </button>
      </div>

      {/* criteria reminder */}
      <details className="mt-3 rounded-xl border bg-background/60 p-3">
        <summary className="cursor-pointer text-[12px] font-medium text-foreground/70">
          {t("criteria", lang)} (ISA 701)
        </summary>
        <p dir="auto" className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">
          {t("criteriaBody", lang)}
        </p>
      </details>

      {/* generated draft */}
      {draft && (
        <div className="mt-4 rounded-xl border bg-background/60 p-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {t("draft", lang)}
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => void copyDraft()}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11.5px] text-muted-foreground transition-colors hover:text-foreground focus-ring"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-sage" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? t("copied", lang) : t("copy", lang)}
              </button>
              <VoicePicker lang={lang} variant="icon" />
              <SpeakButton text={draft.replace(/##\s*(English|العربية)/g, "")} className="p-1" />
            </div>
          </div>
          <div className="prose-note mt-2 text-[13px]">
            <Markdown content={draft} />
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">⚖ {t("draftNote", lang)}</p>
        </div>
      )}
    </div>
  )
}
