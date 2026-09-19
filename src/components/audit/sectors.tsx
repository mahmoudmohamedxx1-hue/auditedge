"use client"

import { useEffect, useMemo, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import {
  SECTOR_PROFILES,
  SECTOR_CLUSTERS,
  SECTOR_TOTAL_PROCEDURES,
  SECTOR_TOTAL_RISK_ITEMS,
  type SectorProfile,
} from "@/lib/program/sectors"
import { ASSERTIONS, PROGRAM_SECTIONS } from "@/lib/program"
import { tt, type Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { IndustryAsker } from "@/components/audit/industry-asker"
import {
  AlertTriangle,
  ArrowLeft,
  Banknote,
  BarChart3,
  Building2,
  Calculator,
  ClipboardCheck,
  Compass,
  Cpu,
  Factory,
  Gauge,
  GraduationCap,
  HandCoins,
  HardHat,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Lightbulb,
  MessagesSquare,
  MessageSquarePlus,
  Network,
  Palmtree,
  Percent,
  Radar,
  Scale,
  ScrollText,
  Search,
  ShieldAlert,
  Ship,
  Shirt,
  ShoppingCart,
  Sprout,
  Stethoscope,
  TowerControl,
  Truck,
  Umbrella,
  Utensils,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react"

const ICONS: Record<string, LucideIcon> = {
  landmark: Landmark,
  "hand-coins": HandCoins,
  umbrella: Umbrella,
  factory: Factory,
  cart: ShoppingCart,
  utensils: Utensils,
  shirt: Shirt,
  sprout: Sprout,
  ship: Ship,
  "hard-hat": HardHat,
  building: Building2,
  stethoscope: Stethoscope,
  cpu: Cpu,
  "tower-control": TowerControl,
  zap: Zap,
  truck: Truck,
  "graduation-cap": GraduationCap,
  palmtree: Palmtree,
  network: Network,
  "heart-handshake": HeartHandshake,
}

const UI = {
  title: { en: "Sector Risk Library", ar: "مكتبة مخاطر القطاعات" },
  subtitle: {
    en: "How each industry makes money, where its accounts break, what fraud looks like there, and which procedures answer it — the deep reference behind AP-06 of the Audit Program.",
    ar: "كيف يكسب كل قطاع ماله، وأين تنكسر بنوده، وكيف يبدو التزييف فيه، وأي الإجراءات تجيب عنه — المرجع العميق خلف القسم AP-06 في برنامج المراجعة.",
  },
  sectorsWord: { en: "sectors", ar: "قطاعًا" },
  proceduresWord: { en: "procedures", ar: "إجراء" },
  riskItemsWord: { en: "risk items", ar: "بند مخاطر" },
  searchPh: {
    en: "Search sectors, risks, regulators… (e.g. ECL, off-plan, customs)",
    ar: "ابحث في القطاعات والمخاطر والجهات المنظمة… (مثلًا: خسائر متوقعة، على الخارطة، جمارك)",
  },
  results: { en: "Results", ar: "النتائج" },
  noResults: { en: "No sectors match your search.", ar: "لا توجد قطاعات مطابقة للبحث." },
  overview: { en: "How this industry works", ar: "كيف يعمل هذا القطاع" },
  revenueModel: { en: "How the money flows", ar: "كيف يتدفق المال" },
  significantAccounts: { en: "Significant accounts & assertions", ar: "البنود الجوهرية والتأكيدات" },
  account: { en: "Account", ar: "البند" },
  why: { en: "Why it matters", ar: "لماذا يهم" },
  inherentRisks: { en: "Inherent risks", ar: "المخاطر المتأصلة" },
  fraudRedFlags: { en: "Fraud red flags", ar: "أعلام خطر التزييف" },
  minefields: { en: "Accounting minefields", ar: "حقول الألغام المحاسبية" },
  regulatory: { en: "The Egyptian regulatory layer", ar: "الطبقة التنظيمية المصرية" },
  ratios: { en: "Ratios & benchmarks", ar: "النسب والمعايير" },
  ratio: { en: "Ratio", ar: "النسبة" },
  benchmark: { en: "Benchmark", ar: "المعيار" },
  redFlag: { en: "Red flag", ar: "علم الخطر" },
  procedures: { en: "Tailored procedures", ar: "إجراءات مصممة" },
  kams: { en: "Typical KAMs", ar: "قضايا المراجعة الجوهرية النموذجية" },
  pitfalls: { en: "Common pitfalls", ar: "أخطاء شائعة" },
  askAi: { en: "Ask the tutor about this sector", ar: "اسأل المساعد عن هذا القطاع" },
  aiDeepDive: { en: "AI deep-dive", ar: "تحليل ذكي معمق" },
  estimates: { en: "Management estimates & hard judgments (ISA 540)", ar: "تقديرات الإدارة وأحكامها الصعبة (ISA 540)" },
  goingConcern: { en: "Going-concern & liquidity indicators (ISA 570)", ar: "مؤشرات الاستمرارية والسيولة (ISA 570)" },
  analytics: { en: "Data analytics opportunities", ar: "فرص تحليلات البيانات" },
  inquiries: { en: "Questions for management & TCWG", ar: "أسئلة للإدارة ومسؤولي الحوكمة" },
  back: { en: "Sector library", ar: "مكتبة القطاعات" },
  openProgram: { en: "Open AP-06 in the Audit Program", ar: "افتح AP-06 في برنامج المراجعة" },
  relatedSections: { en: "Related program sections", ar: "أقسام البرنامج ذات الصلة" },
} as const

const t = (k: keyof typeof UI, lang: Lang) => UI[k][lang]

/** Search haystack for a sector — EN + AR across the meaningful fields. */
function sectorMatches(s: SectorProfile, q: string): boolean {
  const hay = [
    s.name.en,
    s.name.ar,
    s.tagline.en,
    s.tagline.ar,
    s.overview.en,
    s.overview.ar,
    s.revenueModel.en,
    s.revenueModel.ar,
    s.regulatory.en,
    s.regulatory.ar,
    ...s.inherentRisks.flatMap((r) => [r.title.en, r.title.ar, r.detail.en, r.detail.ar, r.refs.join(" ")]),
    ...s.fraudRedFlags.flatMap((f) => [f.en, f.ar]),
    ...s.minefields.flatMap((m) => [m.topic.en, m.topic.ar, m.detail.en, m.detail.ar, m.ref]),
    ...s.procedures.flatMap((p) => [p.text.en, p.text.ar, p.ref]),
    ...s.kams.flatMap((k) => [k.en, k.ar]),
    ...s.significantAccounts.flatMap((a) => [a.account.en, a.account.ar, a.why.en, a.why.ar]),
    ...s.ratios.flatMap((r) => [r.name.en, r.name.ar, r.redFlag.en, r.redFlag.ar]),
  ]
    .join(" \u0000 ")
    .toLowerCase()
  return q
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => hay.includes(term))
}

/* ---------------------------------------------------------------- */

export function SectorLibrary() {
  const navigate = useAppStore((s) => s.navigate)
  const setAiPresetQuestion = useAppStore((s) => s.setAiPresetQuestion)
  const lang = useAppStore((s) => s.lang)
  const rtl = lang === "ar"

  const [activeId, setActiveId] = useState<string>(SECTOR_PROFILES[0].id)
  const [query, setQuery] = useState("")
  const [askPreset, setAskPreset] = useState<{ industry: string; token: number } | null>(null)

  // restore the last-viewed sector after hydration (SSR renders the default)
  useEffect(() => {
    const restore = () => {
      try {
        const saved = localStorage.getItem("auditedge-sectors-active")
        if (saved && SECTOR_PROFILES.some((s) => s.id === saved)) setActiveId(saved)
      } catch {}
    }
    restore()
  }, [])

  const goSector = (id: string) => {
    setActiveId(id)
    try {
      localStorage.setItem("auditedge-sectors-active", id)
    } catch {}
  }

  const results = useMemo(() => {
    const q = query.trim()
    if (!q) return null
    return SECTOR_PROFILES.filter((s) => sectorMatches(s, q))
  }, [query])

  const active = SECTOR_PROFILES.find((s) => s.id === activeId) ?? SECTOR_PROFILES[0]

  return (
    <div dir={rtl ? "rtl" : "ltr"} className="pb-6">
      {/* header */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-[26px] font-semibold leading-tight tracking-tight sm:text-[30px]">
            {t("title", lang)}
          </h1>
          <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {t("subtitle", lang)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-9 gap-1.5"
            onClick={() => navigate("program")}
          >
            <ClipboardCheck className="h-3.5 w-3.5" /> {t("openProgram", lang)}
          </Button>
        </div>
      </div>

      {/* stats + search */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="text-[12.5px] font-medium text-muted-foreground">
          {SECTOR_PROFILES.length} {t("sectorsWord", lang)} · {SECTOR_TOTAL_PROCEDURES}{" "}
          {t("proceduresWord", lang)} · {SECTOR_TOTAL_RISK_ITEMS} {t("riskItemsWord", lang)}
        </div>
        <div className="relative sm:ms-auto sm:w-80">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground rtl:right-3 rtl:left-auto" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPh", lang)}
            dir="auto"
            className="h-10 w-full rounded-xl border bg-card ps-9 pe-9 text-[13.5px] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/40"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-0.5 text-muted-foreground hover:text-foreground rtl:left-3 rtl:right-auto"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* AI Industry Risk Analyst — ask about ANY industry */}
      <div className="mt-6">
        <IndustryAsker lang={lang} presetIndustry={askPreset?.industry} presetToken={askPreset?.token} />
      </div>

      {results ? (
        /* ---------------- search results ---------------- */
        <div className="mt-6">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {t("results", lang)} ({results.length})
          </h2>
          {results.length === 0 ? (
            <p className="mt-3 text-[13px] text-muted-foreground">{t("noResults", lang)}</p>
          ) : (
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {results.map((s) => {
                const Icon = ICONS[s.icon] ?? Factory
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      goSector(s.id)
                      setQuery("")
                    }}
                    className="group flex items-start gap-3 rounded-xl border bg-card p-4 text-start shadow-soft transition-colors hover:border-input focus-ring"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span dir="auto" className="block text-[14px] font-semibold">
                        {lang === "ar" ? s.name.ar : s.name.en}
                      </span>
                      <span dir="auto" className="mt-0.5 block line-clamp-2 text-[12.5px] leading-relaxed text-muted-foreground">
                        {lang === "ar" ? s.tagline.ar : s.tagline.en}
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      ) : (
        /* ---------------- rail + content ---------------- */
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          {/* rail */}
          <nav
            aria-label={t("title", lang)}
            className="hidden lg:block print:hidden"
          >
            <div className="sticky top-8 space-y-4">
              {SECTOR_CLUSTERS.map((cluster) => {
                const items = SECTOR_PROFILES.filter((s) => s.cluster === cluster.id)
                if (!items.length) return null
                return (
                  <div key={cluster.id}>
                    <p className="px-2 pb-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {cluster.label[lang]}
                    </p>
                    <div className="space-y-0.5">
                      {items.map((s) => {
                        const Icon = ICONS[s.icon] ?? Factory
                        const isActive = s.id === active.id
                        return (
                          <button
                            key={s.id}
                            onClick={() => goSector(s.id)}
                            className={cn(
                              "flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-[12.5px] transition-colors focus-ring",
                              isActive
                                ? "bg-card font-medium text-foreground shadow-soft ring-1 ring-border"
                                : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                            )}
                          >
                            <Icon
                              className={cn(
                                "h-3.5 w-3.5 shrink-0",
                                isActive ? "text-primary" : "text-muted-foreground"
                              )}
                            />
                            <span className="truncate">{lang === "ar" ? s.name.ar : s.name.en}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </nav>

          {/* mobile chips */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 lg:hidden print:hidden">
            {SECTOR_PROFILES.map((s) => (
              <button
                key={s.id}
                onClick={() => goSector(s.id)}
                className={cn(
                  "shrink-0 rounded-full border px-3 py-1 text-[12px] transition-colors focus-ring",
                  s.id === active.id
                    ? "border-primary/30 bg-primary/10 font-medium text-primary"
                    : "border-border text-muted-foreground"
                )}
              >
                {lang === "ar" ? s.name.ar : s.name.en}
              </button>
            ))}
          </div>

          {/* content */}
          <SectorPanel
            sector={active}
            lang={lang}
            onAsk={setAiPresetQuestion}
            onDeepDive={(name) => {
              setAskPreset({ industry: name, token: Date.now() })
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          />
        </div>
      )}
    </div>
  )
}

/* ================================================================ */

function SectionHead({
  icon: Icon,
  children,
}: {
  icon: LucideIcon
  children: React.ReactNode
}) {
  return (
    <h2 className="flex items-center gap-2 font-serif text-[17px] font-semibold tracking-tight">
      <Icon className="h-4 w-4 text-primary" />
      {children}
    </h2>
  )
}

function SectorPanel({
  sector,
  lang,
  onAsk,
  onDeepDive,
}: {
  sector: SectorProfile
  lang: Lang
  onAsk: (q: string) => void
  onDeepDive: (industry: string) => void
}) {
  const navigate = useAppStore((s) => s.navigate)
  const rtl = lang === "ar"
  const Icon = ICONS[sector.icon] ?? Factory
  const name = lang === "ar" ? sector.name.ar : sector.name.en

  const related = PROGRAM_SECTIONS.filter((s) => sector.relatedSections.includes(s.id))

  const askQuestion =
    lang === "ar"
      ? `اشرح لي مخاطر مراجعة قطاع «${sector.name.ar}» في مصر: البنود الجوهرية، وأين يحدث التزييف عادة، وما أهم ثلاثة إجراءات مراجعة يجب أن أنفذها، مع الإشارة إلى المعايير ذات الصلة.`
      : `Explain the audit risks of the ${sector.name.en} sector in Egypt: the significant accounts, where fraud typically happens, and the three most important audit procedures I should perform — with reference to the relevant standards.`

  return (
    <article className="min-w-0 space-y-8">
      {/* identity header */}
      <header className="rounded-2xl border bg-card p-5 shadow-soft sm:p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h2 dir="auto" className="font-serif text-[22px] font-semibold leading-tight tracking-tight sm:text-[24px]">
              {name}
            </h2>
            <p dir="auto" className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
              {lang === "ar" ? sector.tagline.ar : sector.tagline.en}
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Button
            size="sm"
            className="h-8 gap-1.5"
            onClick={() => {
              onAsk(askQuestion)
              navigate("ai")
            }}
          >
            <MessageSquarePlus className="h-3.5 w-3.5" /> {t("askAi", lang)}
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-8 gap-1.5"
            onClick={() => onDeepDive(lang === "ar" ? sector.name.ar : sector.name.en)}
          >
            <Radar className="h-3.5 w-3.5" /> {t("aiDeepDive", lang)}
          </Button>
          {related.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11.5px] text-muted-foreground">{t("relatedSections", lang)}:</span>
              {related.map((s) => (
                <button
                  key={s.id}
                  onClick={() => navigate("program")}
                  title={lang === "ar" ? s.title.ar : s.title.en}
                  className="rounded-full border bg-secondary/50 px-2.5 py-0.5 font-mono text-[10.5px] text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary focus-ring"
                >
                  {s.code}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* overview + revenue model */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="rounded-2xl border bg-card p-5">
          <SectionHead icon={Compass}>{t("overview", lang)}</SectionHead>
          <p dir="auto" className="mt-3 text-[14px] leading-[1.85] text-foreground/85">
            {lang === "ar" ? sector.overview.ar : sector.overview.en}
          </p>
        </div>
        <div className="rounded-2xl border bg-card p-5">
          <SectionHead icon={Banknote}>{t("revenueModel", lang)}</SectionHead>
          <p dir="auto" className="mt-3 text-[14px] leading-[1.85] text-foreground/85">
            {lang === "ar" ? sector.revenueModel.ar : sector.revenueModel.en}
          </p>
        </div>
      </section>

      {/* significant accounts */}
      <section className="rounded-2xl border bg-card p-5">
        <SectionHead icon={ScrollText}>{t("significantAccounts", lang)}</SectionHead>
        <div className="mt-3.5 space-y-2.5">
          {sector.significantAccounts.map((a, i) => (
            <div key={i} className="rounded-xl border border-border/70 bg-secondary/25 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span dir="auto" className="text-[14px] font-semibold">
                  {lang === "ar" ? a.account.ar : a.account.en}
                </span>
                <span className="flex flex-wrap gap-1">
                  {a.assertions.map((code) => (
                    <span
                      key={code}
                      title={ASSERTIONS[code] ? ASSERTIONS[code][lang] : code}
                      className="rounded-md bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-primary"
                    >
                      {code}
                    </span>
                  ))}
                </span>
              </div>
              <p dir="auto" className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                {lang === "ar" ? a.why.ar : a.why.en}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* inherent risks */}
      <section>
        <SectionHead icon={Gauge}>{t("inherentRisks", lang)}</SectionHead>
        <div className="mt-3.5 grid grid-cols-1 gap-3 xl:grid-cols-2">
          {sector.inherentRisks.map((r, i) => (
            <div key={i} className="rounded-2xl border bg-card p-4.5 shadow-soft">
              <div className="flex items-start justify-between gap-2">
                <h3 dir="auto" className="text-[14px] font-semibold leading-snug">
                  {lang === "ar" ? r.title.ar : r.title.en}
                </h3>
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              </div>
              <p dir="auto" className="mt-2 text-[13px] leading-[1.75] text-foreground/80">
                {lang === "ar" ? r.detail.ar : r.detail.en}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1">
                {r.refs.map((ref) => (
                  <span
                    key={ref}
                    className="rounded-md border bg-secondary/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* fraud + minefields */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="rounded-2xl border border-primary/25 bg-primary/[0.04] p-5">
          <SectionHead icon={ShieldAlert}>{t("fraudRedFlags", lang)}</SectionHead>
          <ul className="mt-3.5 space-y-2.5">
            {sector.fraudRedFlags.map((f, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] leading-[1.7] text-foreground/80">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                <span dir="auto">{lang === "ar" ? f.ar : f.en}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border bg-card p-5">
          <SectionHead icon={Calculator}>{t("minefields", lang)}</SectionHead>
          <div className="mt-3.5 space-y-3">
            {sector.minefields.map((m, i) => (
              <div key={i} className="rounded-xl border border-border/70 p-3.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 dir="auto" className="text-[13.5px] font-semibold">
                    {lang === "ar" ? m.topic.ar : m.topic.en}
                  </h3>
                  <span className="shrink-0 rounded-md bg-secondary/60 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                    {m.ref}
                  </span>
                </div>
                <p dir="auto" className="mt-1.5 text-[13px] leading-[1.7] text-muted-foreground">
                  {lang === "ar" ? m.detail.ar : m.detail.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* regulatory */}
      <section className="rounded-2xl border border-sage/30 bg-sage/[0.05] p-5">
        <SectionHead icon={Landmark}>{t("regulatory", lang)}</SectionHead>
        <p dir="auto" className="mt-3 text-[14px] leading-[1.85] text-foreground/85">
          {lang === "ar" ? sector.regulatory.ar : sector.regulatory.en}
        </p>
      </section>

      {/* ratios */}
      <section className="overflow-hidden rounded-2xl border bg-card">
        <div className="border-b bg-secondary/40 px-5 py-4">
          <SectionHead icon={Percent}>{t("ratios", lang)}</SectionHead>
        </div>
        <div className="divide-y divide-border">
          {sector.ratios.map((r, i) => (
            <div key={i} className="grid grid-cols-1 gap-2 px-5 py-3.5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1.4fr)] sm:gap-4">
              <div dir="auto" className="text-[13px] font-semibold">
                {lang === "ar" ? r.name.ar : r.name.en}
              </div>
              <div dir="ltr" className="font-mono text-[12px] text-muted-foreground sm:text-start">
                {r.benchmark}
              </div>
              <div dir="auto" className="text-[12.5px] leading-relaxed text-gold-deep">
                ⚑ {lang === "ar" ? r.redFlag.ar : r.redFlag.en}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* procedures */}
      <section className="rounded-2xl border bg-card p-5">
        <SectionHead icon={ClipboardCheck}>{t("procedures", lang)}</SectionHead>
        <ol className="mt-3.5 space-y-2.5">
          {sector.procedures.map((p, i) => (
            <li key={i} className="flex gap-3 rounded-xl border border-border/60 p-3.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-mono text-[11px] font-semibold text-primary">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p dir="auto" className="text-[13.5px] leading-[1.75] text-foreground/85">
                  {lang === "ar" ? p.text.ar : p.text.en}
                </p>
                <span className="mt-1.5 inline-block rounded-md border bg-secondary/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                  {p.ref}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* estimates (ISA 540) */}
      <section className="rounded-2xl border bg-card p-5">
        <SectionHead icon={Scale}>{t("estimates", lang)}</SectionHead>
        <div className="mt-3.5 grid grid-cols-1 gap-3 xl:grid-cols-2">
          {sector.estimates.map((e, i) => (
            <div key={i} className="rounded-xl border border-border/70 bg-secondary/20 p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 dir="auto" className="text-[13.5px] font-semibold leading-snug">
                  {lang === "ar" ? e.area.ar : e.area.en}
                </h3>
                <span className="shrink-0 rounded-md bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-primary">
                  ISA 540
                </span>
              </div>
              <p dir="auto" className="mt-1.5 text-[13px] leading-[1.75] text-foreground/80">
                {lang === "ar" ? e.why.ar : e.why.en}
              </p>
              <span className="mt-2 inline-block rounded-md border bg-secondary/50 px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                {e.ref}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* going concern + analytics */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-5">
          <SectionHead icon={HeartPulse}>{t("goingConcern", lang)}</SectionHead>
          <ul className="mt-3.5 space-y-2.5">
            {sector.goingConcern.map((g, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] leading-[1.7] text-foreground/80">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <span dir="auto">{lang === "ar" ? g.ar : g.en}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border bg-card p-5">
          <SectionHead icon={BarChart3}>{t("analytics", lang)}</SectionHead>
          <ul className="mt-3.5 space-y-2.5">
            {sector.analytics.map((an, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] leading-[1.7] text-foreground/80">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <span dir="auto">{lang === "ar" ? an.ar : an.en}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* inquiries */}
      <section className="rounded-2xl border border-gold/30 bg-gold/[0.04] p-5">
        <SectionHead icon={MessagesSquare}>{t("inquiries", lang)}</SectionHead>
        <ol className="mt-3.5 grid grid-cols-1 gap-2.5 xl:grid-cols-2">
          {sector.inquiries.map((q, i) => (
            <li key={i} className="flex gap-3 rounded-xl border border-border/60 bg-card/60 p-3.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 font-mono text-[11px] font-semibold text-gold-deep">
                Q{i + 1}
              </span>
              <p dir="auto" className="text-[13.5px] leading-[1.7] text-foreground/85">
                {lang === "ar" ? q.ar : q.en}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* KAMs + pitfalls */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="rounded-2xl border border-gold/35 bg-gold/[0.05] p-5">
          <SectionHead icon={ScrollText}>{t("kams", lang)}</SectionHead>
          <ul className="mt-3.5 space-y-2.5">
            {sector.kams.map((k, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] leading-[1.7] text-foreground/80">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span dir="auto">{lang === "ar" ? k.ar : k.en}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border bg-card p-5">
          <SectionHead icon={Lightbulb}>{t("pitfalls", lang)}</SectionHead>
          <ul className="mt-3.5 space-y-2.5">
            {sector.pitfalls.map((p, i) => (
              <li key={i} className="flex gap-2.5 text-[13.5px] leading-[1.7] text-foreground/80">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                <span dir="auto">{lang === "ar" ? p.ar : p.en}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* footer nav */}
      <div className="flex items-center justify-between border-t border-border pt-5">
        <p className="text-[11.5px] text-muted-foreground">{tt("nav.sectors", lang)} · {tt("nav.program", lang)}</p>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 gap-1.5 text-muted-foreground"
          onClick={() => {
            onAsk(askQuestion)
            navigate("ai")
          }}
        >
          <ArrowLeft className={cn("h-3.5 w-3.5 rtl:rotate-180")} />
          {t("askAi", lang)}
        </Button>
      </div>
    </article>
  )
}
