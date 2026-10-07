"use client"

import { useEffect, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { useIndustryAnalysis } from "@/hooks/use-industry-analysis"
import { Markdown } from "@/components/audit/markdown"
import { SpeakButton } from "@/components/audit/speak-button"
import { VoicePicker } from "@/components/audit/voice-picker"
import { SELECTABLE_MODELS, getAiModel, describeEngine, type AiModelId } from "@/lib/models"
import type { Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Check,
  ChevronDown,
  Copy,
  History,
  Loader2,
  Radar,
  Search,
  Sparkles,
  Trash2,
  X,
} from "lucide-react"

/** Industries NOT in the built-in library — one-click suggestions. */
const SUGGESTIONS = [
  { en: "Water & sanitation utilities", ar: "مرافق المياه والصرف الصحي" },
  { en: "Pharmaceuticals", ar: "صناعة الأدوية" },
  { en: "Aviation & airlines", ar: "الطيران وشركات الطيران" },
  { en: "Media & entertainment", ar: "الإعلام والترفيه" },
  { en: "Mining & quarrying", ar: "التعدين والمحاجر" },
  { en: "Automotive dealerships", ar: "معارض السيارات" },
  { en: "Fintech & payments", ar: "التقنية المالية والمدفوعات" },
  { en: "Maritime shipping", ar: "الشحن البحري" },
]

const UI = {
  title: { en: "AI Industry Risk Analyst", ar: "محلل مخاطر القطاعات بالذكاء الاصطناعي" },
  subtitle: {
    en: "Ask about ANY industry — even ones not in the library — and get a deep 16-section audit-risk profile, grounded in live web search with sources.",
    ar: "اسأل عن أي قطاع — حتى لو لم يكن في المكتبة — واحصل على ملف مخاطر عميق من 16 قسمًا، مدعومًا ببحث حي في الويب مع المصادر.",
  },
  placeholder: {
    en: "e.g. Water utilities, Pharmaceuticals, Aviation…",
    ar: "مثلًا: مرافق المياه، صناعة الأدوية، الطيران…",
  },
  analyze: { en: "Deep analysis", ar: "تحليل عميق" },
  stop: { en: "Stop", ar: "إيقاف" },
  searching: { en: "Searching the web for sources…", ar: "جارٍ البحث في الويب عن المصادر…" },
  searchFailed: {
    en: "Web search unavailable — the analyst will answer from expertise (verify current facts).",
    ar: "بحث الويب غير متاح — سيجيب المحلل من خبرته (تحقق من الوقائع الحالية).",
  },
  writing: { en: "Writing the deep profile…", ar: "جارٍ كتابة الملف العميق…" },
  sources: { en: "Sources", ar: "المصادر" },
  copy: { en: "Copy", ar: "نسخ" },
  copied: { en: "Copied", ar: "تم النسخ" },
  continue: { en: "Continue in the AI Tutor", ar: "تابع مع المساعد الذكي" },
  history: { en: "Saved analyses", ar: "التحليلات المحفوظة" },
  newAnalysis: { en: "New analysis", ar: "تحليل جديد" },
  disclaimer: {
    en: "AI-generated analysis for learning — always verify against the applicable standards before relying on it in practice.",
    ar: "تحليل مولد بالذكاء الاصطناعي لأغراض التعلم — تحقق دائمًا من المعايير المنطبقة قبل الاعتماد عليه عمليًا.",
  },
  engine: { en: "Engine", ar: "المحرك" },
  main: { en: "Main", ar: "الرئيسي" },
  free: { en: "Free", ar: "مجاني" },
  plus: { en: "Plus", ar: "Plus" },
} as const

const t = (k: keyof typeof UI, lang: Lang) => UI[k][lang]

export function IndustryAsker({
  lang,
  presetIndustry,
  presetToken,
}: {
  lang: Lang
  /** When set (with a fresh token), the asker pre-fills and auto-runs. */
  presetIndustry?: string | null
  presetToken?: number
}) {
  const rtl = lang === "ar"
  const navigate = useAppStore((s) => s.navigate)
  const setAiPresetQuestion = useAppStore((s) => s.setAiPresetQuestion)
  const aiModel = useAppStore((s) => s.aiModel)
  const setAiModel = useAppStore((s) => s.setAiModel)

  const a = useIndustryAnalysis()
  const [input, setInput] = useState("")
  const [copied, setCopied] = useState(false)
  const [engineOpen, setEngineOpen] = useState(false)
  /** collapsed by default — the panel is powerful but shouldn't dominate the page */
  const [open, setOpen] = useState(false)
  const presetRef = useRef<number | undefined>(undefined)

  // auto-run an external preset (the "AI deep-dive" button on a profile).
  // State updates are deferred to a microtask so the effect body itself
  // performs no synchronous setState (react-hooks/set-state-in-effect).
  useEffect(() => {
    if (presetIndustry && presetToken !== presetRef.current) {
      presetRef.current = presetToken
      const industry = presetIndustry
      void Promise.resolve().then(() => {
        setOpen(true)
        setInput(industry)
        void a.ask(industry, lang, aiModel)
      })
    }
  }, [presetIndustry, presetToken])

  const run = (name: string) => {
    const clean = name.trim()
    if (!clean || a.busy) return
    void a.ask(clean, lang, aiModel)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(a.content)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {}
  }

  const currentModel = getAiModel(aiModel)
  const showResult = a.busy || !!a.content || !!a.error

  return (
    <section className="overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-b from-primary/[0.06] to-transparent">
      {/* header — click to expand / collapse the analyst */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3.5 p-5 text-start transition-colors hover:bg-primary/[0.02] focus-ring sm:p-6"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <Radar className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span dir="auto" className="flex flex-wrap items-center gap-2">
            <span className="font-serif text-[19px] font-semibold tracking-tight">
              {t("title", lang)}
            </span>
            <span className="rounded-full border border-primary/25 bg-primary/[0.05] px-2 py-0.5 text-[10px] font-medium text-primary dark:border-primary/45 dark:bg-primary/15">
              AI
            </span>
          </span>
          {!open && (
            <span dir="auto" className="mt-0.5 block truncate text-[12.5px] text-muted-foreground">
              {t("subtitle", lang)}
            </span>
          )}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
        <p className="mt-0 max-w-2xl text-[13px] leading-relaxed text-muted-foreground">
          {t("subtitle", lang)}
        </p>

        {/* engine selector + input */}
        <div className="mt-4 flex flex-col gap-2.5 lg:flex-row">
          <div className="relative">
            <button
              onClick={() => setEngineOpen((v) => !v)}
              className="flex h-11 w-full items-center justify-between gap-2 rounded-xl border bg-card px-3.5 text-[13px] font-medium focus-ring lg:w-[218px]"
            >
              <span className="flex items-center gap-2 truncate">
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span className="truncate">{currentModel.name}</span>
                <span
                  className={cn(
                    "shrink-0 rounded-md px-1.5 py-0.5 font-mono text-[9.5px] font-semibold uppercase",
                    currentModel.tier === "keyless"
                      ? "bg-olive/20 text-olive-deep"
                      : currentModel.tier === "free"
                        ? "bg-sage/20 text-sage-deep"
                        : "bg-gold/25 text-gold-deep"
                  )}
                >
                  {currentModel.tier === "keyless"
                    ? t("main", lang)
                    : currentModel.tier === "free"
                      ? t("free", lang)
                      : t("plus", lang)}
                </span>
              </span>
              <ChevronDown
                className={cn("h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform", engineOpen && "rotate-180")}
              />
            </button>
            {engineOpen && (
              <div className="absolute z-20 mt-1.5 w-full min-w-[240px] overflow-hidden rounded-xl border bg-popover shadow-lg">
                {SELECTABLE_MODELS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setAiModel(m.id)
                      setEngineOpen(false)
                    }}
                    className={cn(
                      "flex w-full flex-col items-start gap-0.5 border-b px-3.5 py-2.5 text-start transition-colors last:border-0 hover:bg-secondary/60",
                      m.id === aiModel && "bg-primary/[0.07]"
                    )}
                  >
                    <span className="flex w-full items-center justify-between gap-2">
                      <span className="text-[13px] font-semibold">{m.name}</span>
                      <span
                        className={cn(
                          "rounded-md px-1.5 py-0.5 font-mono text-[9.5px] font-semibold uppercase",
                          m.tier === "keyless"
                            ? "bg-olive/20 text-olive-deep"
                            : m.tier === "free"
                              ? "bg-sage/20 text-sage-deep"
                              : "bg-gold/25 text-gold-deep"
                        )}
                      >
                        {m.tier === "keyless"
                          ? t("main", lang)
                          : m.tier === "free"
                            ? t("free", lang)
                            : t("plus", lang)}
                      </span>
                    </span>
                    <span className="text-[11.5px] leading-snug text-muted-foreground">
                      {m.note[lang]}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground rtl:right-3.5 rtl:left-auto" />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.nativeEvent.isComposing) run(input)
              }}
              placeholder={t("placeholder", lang)}
              dir="auto"
              disabled={a.busy}
              className="h-11 w-full rounded-xl border bg-card ps-10 pe-4 text-[13.5px] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/40 disabled:opacity-60"
            />
          </div>

          {a.busy ? (
            <Button variant="outline" className="h-11 shrink-0 gap-1.5 px-5" onClick={a.stop}>
              <X className="h-3.5 w-3.5" /> {t("stop", lang)}
            </Button>
          ) : (
            <Button className="h-11 shrink-0 gap-1.5 px-5" onClick={() => run(input)} disabled={!input.trim()}>
              <Sparkles className="h-3.5 w-3.5" /> {t("analyze", lang)}
            </Button>
          )}
        </div>

        {/* suggestion chips */}
        <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1">
          {SUGGESTIONS.map((s) => (
            <button
              key={s.en}
              onClick={() => {
                setInput(lang === "ar" ? s.ar : s.en)
                run(lang === "ar" ? s.ar : s.en)
              }}
              disabled={a.busy}
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1 text-[12px] text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary focus-ring disabled:opacity-50"
            >
              {lang === "ar" ? s.ar : s.en}
            </button>
          ))}
        </div>

        {/* status ticker */}
        {a.busy && (
          <div className="mt-3 flex items-center gap-2 text-[12.5px] text-muted-foreground">
            <Loader2 className="h-3.5 w-3.5 animate-spin text-primary" />
            {a.status === "searching" && t("searching", lang)}
            {a.status === "search-failed" && t("searchFailed", lang)}
            {a.status === "writing" && t("writing", lang)}
          </div>
        )}
        {!a.busy && a.status === "search-failed" && (
          <p className="mt-3 text-[12.5px] text-gold-deep">⚠ {t("searchFailed", lang)}</p>
        )}
      </div>
      )}

      {/* result */}
      {open && showResult && (
        <div className="border-t bg-card p-5 sm:p-6">
          {a.error ? (
            <p className="rounded-xl border border-primary/30 bg-primary/[0.05] p-4 text-[13.5px] text-destructive">
              {a.error}
            </p>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 dir="auto" className="font-serif text-[16px] font-semibold tracking-tight">
                  {a.viewing ? a.viewing.industry : a.industry}
                </h3>
                <div className="flex items-center gap-1.5">
                  {a.modelUsed && (
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-medium text-primary">
                      {describeEngine(a.modelUsed).label}
                    </span>
                  )}
                  {!!a.content && !a.busy && (
                    <>
                      <VoicePicker lang={lang} variant="icon" />
                      <SpeakButton text={a.content} className="h-7 w-7" />
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 gap-1.5 px-2.5 text-[11.5px]"
                        onClick={copy}
                      >
                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        {copied ? t("copied", lang) : t("copy", lang)}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 gap-1.5 px-2.5 text-[11.5px]"
                        onClick={() => {
                          setAiPresetQuestion(
                            lang === "ar"
                              ? `تابع معي تحليل مخاطر مراجعة قطاع «${a.industry}» الذي بدأته محلل القطاعات: ما أهم إجراءين إضافيين ستنفذهما عمليًا في أول أسبوع من التخطيط؟`
                              : `Following up on the ${a.industry} industry risk profile from the Sector Analyst: what are the two extra procedures you would actually run in the first planning week?`
                          )
                          navigate("ai")
                        }}
                      >
                        <ArrowRight className="h-3 w-3 rtl:rotate-180" />
                        <span className="hidden sm:inline">{t("continue", lang)}</span>
                      </Button>
                    </>
                  )}
                </div>
              </div>

              {a.notice && (
                <p className="mt-2 rounded-lg border border-gold/35 bg-gold/[0.08] px-3 py-2 text-[12px] leading-relaxed text-gold-deep">
                  ⚠ {a.notice}
                </p>
              )}

              {a.sources.length > 0 && (
                <div className="mt-3">
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    {t("sources", lang)} ({a.sources.length})
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {a.sources.map((s, i) => (
                      <a
                        key={i}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={s.snippet?.slice(0, 200)}
                        className="max-w-[240px] truncate rounded-full border bg-secondary/50 px-2.5 py-1 font-mono text-[10.5px] text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                      >
                        [{i + 1}] {s.host_name}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4">
                {a.content ? (
                  <Markdown content={a.content} />
                ) : (
                  <div className="space-y-2.5 py-4">
                    <div className="h-3 w-2/3 animate-pulse rounded bg-secondary" />
                    <div className="h-3 w-full animate-pulse rounded bg-secondary" />
                    <div className="h-3 w-5/6 animate-pulse rounded bg-secondary" />
                  </div>
                )}
              </div>

              <p className="mt-5 border-t pt-3 text-[11.5px] leading-relaxed text-muted-foreground">
                {t("disclaimer", lang)}
              </p>
            </>
          )}
        </div>
      )}

      {/* history */}
      {a.history.length > 0 && (
        <div className="border-t bg-secondary/25 px-5 py-4 sm:px-6">
          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              <History className="h-3 w-3" /> {t("history", lang)}
            </p>
            {(a.viewing || a.content) && !a.busy && (
              <button
                onClick={a.clearViewing}
                className="rounded-md px-2 py-0.5 text-[11px] text-primary hover:underline focus-ring"
              >
                + {t("newAnalysis", lang)}
              </button>
            )}
          </div>
          <div className="mt-2 flex gap-1.5 overflow-x-auto pb-0.5">
            {a.history.map((h) => (
              <div
                key={h.id}
                className={cn(
                  "group flex shrink-0 items-center gap-1 rounded-full border bg-card py-1 pe-1 ps-2.5 text-[11.5px] transition-colors",
                  a.viewing?.id === h.id
                    ? "border-primary/30 text-primary"
                    : "text-muted-foreground hover:border-primary/25"
                )}
              >
                <button
                  dir="auto"
                  onClick={() => a.viewAnalysis(h)}
                  className="max-w-[180px] truncate focus-ring"
                  title={h.industry}
                >
                  {h.lang === "ar" ? "ع" : "EN"} · {h.industry}
                </button>
                <button
                  onClick={() => a.removeHistory(h.id)}
                  aria-label="Delete analysis"
                  className="rounded-full p-1 text-muted-foreground/60 transition-colors hover:bg-primary/10 hover:text-primary focus-ring"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
