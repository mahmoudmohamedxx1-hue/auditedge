"use client"

import { useEffect, useMemo, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { ASSERTIONS, PROGRAM_SECTIONS, PROGRAM_TOTAL_PROCEDURES, type ProgramSection } from "@/lib/program"
import { SECTOR_PROFILES } from "@/lib/program/sectors"
import {
  loadEngagements,
  saveEngagements,
  newEngagement,
  newFinding,
  sectionProgress,
  overallProgress,
  pbcStats,
  type Engagement,
  type EngagementStore,
  type ProcState,
  type PbcState,
  type Signoff,
} from "@/lib/engagement"
import { MaterialityCalculator, SamplingCalculator } from "./program-tools"
import { JournalEntryAnalyzer } from "./program-analyzer"
import { KamDrafter } from "./kam-drafter"
import { SignoffEditor, fmtDate, type Lang } from "./program-shared"
import { PbcTracker } from "./program-pbc"
import { FindingsSad } from "./program-findings"
import { SignoffSummary } from "./program-signoffs"
import { CloseOutPanel } from "./program-closeout"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  AlertTriangle,
  Banknote,
  Building2,
  CheckCircle2,
  CheckSquare,
  ChevronDown,
  ClipboardCheck,
  Compass,
  CreditCard,
  Factory,
  FileText,
  Gauge,
  Landmark,
  Layers,
  Link2,
  Minus,
  Package,
  Pencil,
  Plus,
  Printer,
  RotateCcw,
  Search,
  ShieldAlert,
  ShoppingCart,
  Sparkles,
  Square,
  Target,
  Trash2,
  TrendingUp,
  Users,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react"

const ICONS: Record<string, LucideIcon> = {
  compass: Compass,
  calculator: Target,
  layers: Layers,
  "check-circle": CheckCircle2,
  gauge: Gauge,
  factory: Factory,
  banknote: Banknote,
  "credit-card": CreditCard,
  package: Package,
  "trending-up": TrendingUp,
  building: Building2,
  "shopping-cart": ShoppingCart,
  users: Users,
  landmark: Landmark,
  "shield-alert": ShieldAlert,
  link: Link2,
}

const UI = {
  sectionTitle: { en: "Audit Program", ar: "برنامج المراجعة" },
  subtitle: {
    en: "Field-ready procedures for every account — run them per engagement, tick each step as you perform it, and track documents, findings and sign-offs in one place. Grounded in the ISAs, the Egyptian standards (PM Decree 3725/2025), IFRS and the EAS.",
    ar: "إجراءات عملية جاهزة للعمل الميداني لكل بند — نفّذها لكل مهمة مراجعة، وعلّم على كل خطوة أثناء تنفيذها، وتابع المستندات والملاحظات والاعتمادات في مكان واحد. مستندة إلى معايير المراجعة الدولية والمعايير المصرية (قرار 3725 لسنة 2025) وIFRS والمعايير المصرية للمحاسبة.",
  },
  methodology: { en: "Methodology", ar: "المنهجية" },
  accounts: { en: "Account programs", ar: "برامج البنود" },
  search: { en: "Search procedures… (e.g. bank confirmation)", ar: "ابحث في الإجراءات… (مثلًا: تأكيد البنوك)" },
  results: { en: "Results", ar: "النتائج" },
  objectives: { en: "Audit objectives", ar: "أهداف المراجعة" },
  assertions: { en: "Assertions covered", ar: "التأكيدات المغطاة" },
  risks: { en: "Key risks", ar: "المخاطر الرئيسية" },
  documents: { en: "Documents to obtain", ar: "المستندات المطلوبة" },
  procedures: { en: "Procedures", ar: "إجراءات المراجعة" },
  pitfalls: { en: "Common pitfalls", ar: "أخطاء شائعة" },
  standards: { en: "Standards", ar: "المعايير" },
  progress: { en: "Progress", ar: "التقدم" },
  done: { en: "done", ar: "منجزة" },
  naCount: { en: "N/A", ar: "لا ينطبق" },
  reset: { en: "Reset section", ar: "إعادة تعيين القسم" },
  resetFull: { en: "Reset section (clears ticks, WP refs, notes and sign-off)", ar: "إعادة تعيين القسم (يمسح التعليمات ومراجع الأوراق والملاحظات والاعتماد)" },
  askAi: { en: "Ask the tutor about this", ar: "اسأل المساعد الذكي عن هذا القسم" },
  print: { en: "Print", ar: "طباعة" },
  overall: { en: "Overall progress", ar: "التقدم الكلي" },
  noResults: { en: "No procedures match your search.", ar: "لا توجد إجراءات مطابقة للبحث." },
  calcMateriality: { en: "Interactive calculator", ar: "حاسبة تفاعلية" },
  // engagement bar
  engagements: { en: "Engagements", ar: "مهام المراجعة" },
  newEngagement: { en: "New engagement", ar: "مهمة مراجعة جديدة" },
  editEngagement: { en: "Edit engagement", ar: "تعديل المهمة" },
  client: { en: "Client", ar: "العميل" },
  clientPh: { en: "e.g. Nile Trading Co.", ar: "مثلًا: شركة النيل للتجارة" },
  period: { en: "Period", ar: "الفترة" },
  periodPh: { en: "e.g. FY 2026", ar: "مثلًا: 2026/2025" },
  save: { en: "Save", ar: "حفظ" },
  cancel: { en: "Cancel", ar: "إلغاء" },
  create: { en: "Create", ar: "إنشاء" },
  delete: { en: "Delete", ar: "حذف" },
  deleteEngageQ: { en: "Delete this engagement? All its ticks, PBC statuses, findings and sign-offs will be removed.", ar: "حذف هذه المهمة؟ ستُمسح جميع التعليمات وحالات المستندات والملاحظات والاعتمادات الخاصة بها." },
  openInLibrary: { en: "Open in the Library", ar: "افتح في المكتبة" },
  noLibraryText: { en: "No text of this standard in the Library yet", ar: "لا يوجد نص لهذا المعيار في المكتبة بعد" },
  // tabs
  tabProgram: { en: "Program", ar: "البرنامج" },
  tabPbc: { en: "PBC Tracker", ar: "مستندات العميل" },
  tabFindings: { en: "Findings & SAD", ar: "الملاحظات والفروقات" },
  tabSignoffs: { en: "Sign-offs", ar: "الاعتمادات" },
  tabCloseout: { en: "Close-out", ar: "الإقفال" },
  procs: { en: "procedures", ar: "إجراء" },
  pbcShort: { en: "PBC", ar: "مستندات" },
  findingsShort: { en: "findings", ar: "ملاحظة" },
  openWord: { en: "open", ar: "مفتوحة" },
  receivedWord: { en: "received", ar: "مستلمة" },
  loading: { en: "Loading your engagements…", ar: "جارٍ تحميل مهام المراجعة…" },
  // procedure detail
  detailDone: { en: "Done", ar: "منجز" },
  detailNa: { en: "N/A", ar: "لا ينطبق" },
  detailClear: { en: "Clear", ar: "مسح" },
  naReasonPh: { en: "Why is it not applicable? (required by ISA 230)", ar: "لماذا لا ينطبق؟ (يتطلبه ISA 230)" },
  wpRef: { en: "WP reference", ar: "مرجع ورقة العمل" },
  wpPh: { en: "e.g. B-120", ar: "مثلًا B-120" },
  preparedBy: { en: "Prepared by", ar: "المُعِد" },
  dateWord: { en: "Date", ar: "التاريخ" },
  noteWord: { en: "Note", ar: "ملاحظة" },
  notePh: { en: "What did you find / test? Link the working paper…", ar: "ماذا وجدت أو اختبرت؟ اربط ورقة العمل…" },
} as const

const t = (k: keyof typeof UI, lang: Lang) => UI[k][lang]

const ACTIVE_KEY = "auditedge-program-active"
const TAB_KEY = "auditedge-program-tab"

/** Map a standards chip to a Library search query (null = no text in the library). */
export function libraryQueryFor(standard: string): string | null {
  const s = standard.trim()
  let m = s.match(/^ESA (\d+)$/)
  if (m) return `للمراجعة (${m[1]})`
  m = s.match(/^ESQM (\d+)$/)
  if (m) return `مراقبة الجودة (${m[1]})`
  if (s.startsWith("ESA (")) return "المعايير المصرية"
  if (s.startsWith("FRA Decree 175")) return "175 لسنة 2024"
  if (s.startsWith("FRA Decree 174")) return "174 لسنة 2024"
  if (/^(ISA|ISQM|IESBA|IFRS|IAS|IFRIC)\b/.test(s)) return s.replace(/\s*\([^)]*\)\s*$/, "").trim()
  return null // EAS, Labor Law — no text in the library yet
}

type Tab = "program" | "pbc" | "findings" | "signoffs" | "closeout"
const TABS: { id: Tab; key: keyof typeof UI }[] = [
  { id: "program", key: "tabProgram" },
  { id: "pbc", key: "tabPbc" },
  { id: "findings", key: "tabFindings" },
  { id: "signoffs", key: "tabSignoffs" },
  { id: "closeout", key: "tabCloseout" },
]

export function AuditProgram() {
  const navigate = useAppStore((s) => s.navigate)
  const setAiPresetQuestion = useAppStore((s) => s.setAiPresetQuestion)
  const setLibraryPresetQuery = useAppStore((s) => s.setLibraryPresetQuery)
  // site-wide language (v13): one toggle in the sidebar drives every view,
  // the Audit Program included — persisted under "auditedge-lang"
  const lang = useAppStore((s) => s.lang)
  const setLang = useAppStore((s) => s.setLang)

  const [activeId, setActiveId] = useState<string>("methodology")
  const [tab, setTab] = useState<Tab>("program")
  const [query, setQuery] = useState("")
  const [store, setStore] = useState<EngagementStore>({ engagements: [], activeId: "" })
  const [ready, setReady] = useState(false)

  // restore persisted state after hydration (SSR renders the defaults);
  // the UI language itself is hydrated globally in the app shell (page.tsx)
  useEffect(() => {
    const restore = () => {
      try {
        const a = localStorage.getItem(ACTIVE_KEY)
        if (a && PROGRAM_SECTIONS.some((s) => s.id === a)) setActiveId(a)
        const tb = localStorage.getItem(TAB_KEY) as Tab | null
        if (tb && TABS.some((x) => x.id === tb)) setTab(tb)
        setStore(loadEngagements())
      } catch {}
      setReady(true)
    }
    restore()
  }, [])

  const persist = (next: EngagementStore) => {
    setStore(next)
    saveEngagements(next)
  }

  const eng = useMemo(
    () => store.engagements.find((e) => e.id === store.activeId) ?? store.engagements[0],
    [store]
  )

  /** update the active engagement immutably and persist */
  const updateEng = (fn: (e: Engagement) => Engagement) =>
    persist({
      ...store,
      engagements: store.engagements.map((e) =>
        e.id === eng.id ? { ...fn(e), updatedAt: Date.now() } : e
      ),
    })

  /* ---------------- engagement CRUD ---------------- */

  const createEngagement = (client: string, period: string, sectorId?: string) => {
    const e = { ...newEngagement(client, period), ...(sectorId ? { sectorId } : {}) }
    persist({ engagements: [...store.engagements, e], activeId: e.id })
  }

  const updateEngagementMeta = (id: string, client: string, period: string, sectorId?: string) =>
    persist({
      ...store,
      engagements: store.engagements.map((e) =>
        e.id === id
          ? { ...e, client: client.trim() || e.client, period: period.trim() || e.period, ...(sectorId !== undefined ? { sectorId } : {}) }
          : e
      ),
    })

  const deleteEngagement = (id: string) => {
    const rest = store.engagements.filter((e) => e.id !== id)
    if (rest.length === 0) return
    persist({ engagements: rest, activeId: store.activeId === id ? rest[0].id : store.activeId })
  }

  /* ---------------- per-engagement state setters ---------------- */

  const setProc = (procId: string, patch: Partial<ProcState> | null) =>
    updateEng((e) => {
      const procedures = { ...e.procedures }
      if (patch === null) delete procedures[procId]
      else procedures[procId] = { ...procedures[procId], ...patch }
      return { ...e, procedures }
    })

  const setPbc = (key: string, patch: Partial<PbcState> | null) =>
    updateEng((e) => {
      const pbc = { ...e.pbc }
      if (patch === null) delete pbc[key]
      else pbc[key] = { ...pbc[key], ...patch }
      return { ...e, pbc }
    })

  const setSignoff = (sectionId: string, patch: Partial<Signoff>) =>
    updateEng((e) => {
      const signoffs = { ...e.signoffs }
      const current = signoffs[sectionId] ?? {}
      const next: Signoff = { ...current }
      for (const [k, v] of Object.entries(patch)) {
        if (v === undefined || v === "") delete (next as Record<string, unknown>)[k]
        else (next as Record<string, unknown>)[k] = v
      }
      if (Object.keys(next).length === 0) delete signoffs[sectionId]
      else signoffs[sectionId] = next
      return { ...e, signoffs }
    })

  const addFinding = (
    sectionId: string,
    description: string,
    amount?: number,
    extras?: { wp?: string; qualitative?: boolean; adj?: { dr?: string; cr?: string; amount?: number } }
  ) =>
    updateEng((e) => ({
      ...e,
      findings: [...e.findings, { ...newFinding(sectionId, description, amount), ...extras }],
    }))

  const updateFinding = (
    id: string,
    patch: Partial<{ status: "open" | "passed" | "corrected"; wp?: string; qualitative?: boolean; adj?: { dr?: string; cr?: string; amount?: number } }>
  ) =>
    updateEng((e) => ({
      ...e,
      findings: e.findings.map((f) => (f.id === id ? { ...f, ...patch } : f)),
    }))

  const deleteFinding = (id: string) =>
    updateEng((e) => ({ ...e, findings: e.findings.filter((f) => f.id !== id) }))

  const setMateriality = (pm?: number, ctt?: number) =>
    updateEng((e) => ({
      ...e,
      pm: typeof pm === "number" && pm > 0 ? pm : undefined,
      ctt: typeof ctt === "number" && ctt > 0 ? ctt : undefined,
    }))

  /* ---------------- derived ---------------- */

  const active = PROGRAM_SECTIONS.find((s) => s.id === activeId) ?? PROGRAM_SECTIONS[0]
  const rtl = lang === "ar"

  const prog = useMemo(() => (eng ? overallProgress(eng) : { done: 0, na: 0, total: PROGRAM_TOTAL_PROCEDURES, pct: 0 }), [eng])
  const pbc = useMemo(() => (eng ? pbcStats(eng) : { total: 0, pending: 0, requested: 0, received: 0, na: 0 }), [eng])
  const openFindings = eng ? eng.findings.filter((f) => f.status === "open").length : 0

  const goTab = (tb: Tab) => {
    setTab(tb)
    try {
      localStorage.setItem(TAB_KEY, tb)
    } catch {}
    window.scrollTo({ top: 0 })
  }

  const goSection = (id: string) => {
    setActiveId(id)
    try {
      localStorage.setItem(ACTIVE_KEY, id)
    } catch {}
  }

  const askAi = () => {
    if (!eng) return
    const q =
      lang === "ar"
        ? `نراجع بند «${active.title.ar}» لعميل ${eng.client} (${eng.period}). أعطني شرحًا عمليًا للعمل الميداني: أهم الإجراءات وما يخطئ فيه الفريق عادة وأوراق العمل الواجب الاحتفاظ بها.`
        : `We are auditing "${active.title.en}" for ${eng.client} (${eng.period}). Give me a field-ready walkthrough: the key procedures, what usually goes wrong, and the workpapers I must keep.`
    setAiPresetQuestion(q)
    navigate("ai")
  }

  const openStandard = (standard: string) => {
    const q = libraryQueryFor(standard)
    if (!q) return
    setLibraryPresetQuery(q)
    navigate("library")
  }

  const q = query.trim().toLowerCase()
  const searchResults = useMemo(() => {
    if (q.length < 2 || !eng) return null
    const out: { section: ProgramSection; id: string; text: string; ref?: string; done: boolean }[] = []
    for (const s of PROGRAM_SECTIONS)
      for (const p of s.procedures) {
        if (
          p.text.en.toLowerCase().includes(q) ||
          p.text.ar.includes(query.trim()) ||
          s.title.en.toLowerCase().includes(q) ||
          s.title.ar.includes(query.trim())
        )
          out.push({
            section: s,
            id: p.id,
            text: lang === "ar" ? p.text.ar : p.text.en,
            ref: p.ref,
            done: eng.procedures[p.id]?.status === "done",
          })
      }
    return out.slice(0, 30)
  }, [q, query, lang, eng])

  return (
    <div dir={rtl ? "rtl" : "ltr"} className="pb-6">
      {/* header */}
      <div className="print:hidden">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <ClipboardCheck className="h-5.5 w-5.5 text-primary" />
            </span>
            <div>
              <h1 className="font-serif text-[24px] font-semibold leading-tight tracking-tight">
                {t("sectionTitle", lang)}
              </h1>
              <p className="mt-0.5 text-[12px] text-muted-foreground">
                {PROGRAM_SECTIONS.length} {lang === "ar" ? "قسمًا" : "sections"} ·{" "}
                {PROGRAM_TOTAL_PROCEDURES} {lang === "ar" ? "إجراء" : "procedures"} ·{" "}
                {lang === "ar" ? "عربي / English" : "Arabic / English"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* language toggle — wired to the site-wide store (v13) */}
            <div className="flex rounded-full border bg-card p-0.5" role="group" aria-label="Language / اللغة">
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[12.5px] font-medium transition-colors focus-ring",
                  lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ar")}
                className={cn(
                  "rounded-full px-3 py-1.5 text-[12.5px] font-medium transition-colors focus-ring",
                  lang === "ar" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                عربي
              </button>
            </div>
          </div>
        </div>
        <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-muted-foreground">
          {t("subtitle", lang)}
        </p>

        {/* engagement bar */}
        {ready && eng ? (
          <EngagementBar
            store={store}
            eng={eng}
            lang={lang}
            onCreate={createEngagement}
            onSwitch={(id) => persist({ ...store, activeId: id })}
            onEditMeta={updateEngagementMeta}
            onDelete={deleteEngagement}
          />
        ) : (
          <div className="mt-4 h-[72px] animate-pulse rounded-2xl border bg-card/60" />
        )}
      </div>

      {/* tabs — sticky while scrolling 167 procedures. Lives at the view root:
          a sticky bar only sticks inside its parent, and the header div above
          is too short to carry it down the page. (mobile: under the top bar) */}
      <div className="sticky top-14 z-20 -mx-4 mt-4 border-y border-border/60 bg-background/90 px-4 py-2 backdrop-blur-md sm:-mx-6 sm:px-6 lg:top-0 print:hidden print:static print:bg-transparent print:backdrop-blur-none">
          <div className="flex gap-1.5 overflow-x-auto scroll-thin">
            {TABS.map((tb) => (
              <button
                key={tb.id}
                onClick={() => goTab(tb.id)}
                aria-pressed={tab === tb.id}
                className={cn(
                  "min-h-[36px] shrink-0 rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-colors focus-ring",
                  tab === tb.id
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "bg-card text-foreground/70 hover:border-primary/30 hover:text-foreground"
                )}
              >
                {t(tb.key, lang)}
              </button>
            ))}
          </div>
        </div>

      {/* search (program tab only) */}
      {tab === "program" && (
        <div className="relative mt-4 max-w-md print:hidden">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground rtl:right-3 rtl:left-auto" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("search", lang)}
              dir="auto"
              className="h-10 w-full rounded-xl border bg-card ps-9 pe-9 text-[13.5px] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/40 rtl:ps-9 rtl:pe-9"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-0.5 text-muted-foreground hover:text-foreground rtl:left-3 rtl:right-auto"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        )}

      {/* overall progress (program tab only) */}
      {tab === "program" && eng && (
        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border bg-card px-3.5 py-2.5 print:hidden">
            <span className="text-[12px] font-medium text-muted-foreground">{t("overall", lang)}</span>
            <div className="h-2 min-w-24 flex-1 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${(prog.done / prog.total) * 100}%` }}
              />
            </div>
            <span className="text-[12px] tabular-nums font-medium text-primary">
              {prog.done}/{prog.total}
              {prog.na > 0 && <span className="text-muted-foreground"> · {prog.na} {t("naCount", lang)}</span>}
            </span>
          </div>
        )}

      {/* body */}
      {!ready ? (
        <p className="mt-8 text-center text-[13px] text-muted-foreground">{t("loading", lang)}</p>
      ) : !eng ? null : tab === "pbc" ? (
        <PbcTracker lang={lang} eng={eng} onSetPbc={setPbc} />
      ) : tab === "findings" ? (
        <FindingsSad
          lang={lang}
          eng={eng}
          onAdd={addFinding}
          onUpdate={updateFinding}
          onDelete={deleteFinding}
          onSetMateriality={setMateriality}
          onGoMateriality={() => {
            goTab("program")
            goSection("materiality")
            window.scrollTo({ top: 0 })
          }}
        />
      ) : tab === "signoffs" ? (
        <SignoffSummary lang={lang} eng={eng} onSetSignoff={setSignoff} />
      ) : tab === "closeout" ? (
        <CloseOutPanel lang={lang} eng={eng} onPatchEng={(patch) => updateEng((e) => ({ ...e, ...patch }))} />
      ) : searchResults ? (
        /* search results mode */
        <div className="mt-5 space-y-2 print:hidden">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {t("results", lang)} ({searchResults.length})
          </p>
          {searchResults.length === 0 && (
            <p className="text-[13px] text-muted-foreground">{t("noResults", lang)}</p>
          )}
          {searchResults.map((r) => (
            <button
              key={r.id}
              onClick={() => {
                goSection(r.section.id)
                setQuery("")
                window.scrollTo({ top: 0 })
              }}
              className="flex w-full items-start gap-3 rounded-xl border bg-card p-3.5 text-start transition-colors hover:border-primary/30 focus-ring"
            >
              <span className="mt-0.5 shrink-0 rounded-md bg-secondary px-1.5 py-0.5 font-mono text-[10.5px] text-muted-foreground">
                {r.section.code}
              </span>
              <span className="min-w-0">
                <span dir="auto" className={cn("block text-[13px] leading-relaxed", r.done && "text-muted-foreground line-through decoration-sage/50")}>
                  {r.text}
                </span>
                <span className="mt-1 block text-[11.5px] text-muted-foreground">
                  {lang === "ar" ? r.section.title.ar : r.section.title.en} {r.ref ? `· ${r.ref}` : ""}
                </span>
              </span>
              {r.done && <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sage" />}
            </button>
          ))}
        </div>
      ) : (
        <div className="mt-5 grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
          {/* section rail */}
          <aside className="min-w-0 print:hidden">
            <div className="lg:sticky lg:top-6">
              {/* desktop rail */}
              <div className="hidden lg:block">
                {(["methodology", "accounts"] as const).map((g) => (
                  <div key={g} className="mb-4">
                    <p className="px-2 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t(g, lang)}
                    </p>
                    <div className="space-y-0.5">
                      {PROGRAM_SECTIONS.filter((s) => s.group === g).map((s) => {
                        const Icon = ICONS[s.icon] ?? Square
                        const sp = sectionProgress(eng, s.id)
                        const isActive = s.id === activeId
                        return (
                          <button
                            key={s.id}
                            onClick={() => goSection(s.id)}
                            className={cn(
                              "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-start text-[13px] transition-colors focus-ring",
                              isActive
                                ? "bg-card font-medium text-foreground shadow-soft ring-1 ring-border"
                                : "text-foreground/70 hover:bg-secondary/70"
                            )}
                          >
                            <Icon className={cn("h-4 w-4 shrink-0", isActive ? "text-primary" : "text-muted-foreground")} />
                            <span dir="auto" className="min-w-0 flex-1 truncate">
                              {lang === "ar" ? s.title.ar : s.title.en}
                            </span>
                            {sp.done + sp.na > 0 && (
                              <span className="shrink-0 rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium tabular-nums text-primary">
                                {sp.done + sp.na}/{sp.total}
                              </span>
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* mobile chips */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 scroll-thin lg:hidden">
                {PROGRAM_SECTIONS.map((s) => {
                  const Icon = ICONS[s.icon] ?? Square
                  const isActive = s.id === activeId
                  return (
                    <button
                      key={s.id}
                      onClick={() => goSection(s.id)}
                      className={cn(
                        "flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] transition-colors focus-ring",
                        isActive ? "border-primary/40 bg-primary/10 font-medium text-primary" : "bg-card text-foreground/70"
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span dir="auto">{lang === "ar" ? s.title.ar : s.title.en}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </aside>

          {/* active section */}
          <SectionView
            section={active}
            lang={lang}
            eng={eng}
            onSetProc={setProc}
            onResetSection={() =>
              updateEng((e) => {
                const procedures = { ...e.procedures }
                for (const p of active.procedures) delete procedures[p.id]
                const signoffs = { ...e.signoffs }
                delete signoffs[active.id]
                return { ...e, procedures, signoffs }
              })
            }
            onAskAi={askAi}
            onSignoff={(patch) => setSignoff(active.id, patch)}
            onOpenStandard={openStandard}
            onGoPbc={() => goTab("pbc")}
            onPatchEng={(patch) => updateEng((e) => ({ ...e, ...patch }))}
          />
        </div>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* engagement switcher bar                                              */
/* ------------------------------------------------------------------ */

function EngagementBar({
  store,
  eng,
  lang,
  onCreate,
  onSwitch,
  onEditMeta,
  onDelete,
}: {
  store: EngagementStore
  eng: Engagement
  lang: Lang
  onCreate: (client: string, period: string, sectorId?: string) => void
  onSwitch: (id: string) => void
  onEditMeta: (id: string, client: string, period: string, sectorId?: string) => void
  onDelete: (id: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [dialog, setDialog] = useState<{
    mode: "create" | "edit"
    target?: Engagement
    client: string
    period: string
    sectorId: string
  } | null>(null)
  const [confirmId, setConfirmId] = useState<string | null>(null)

  const prog = overallProgress(eng)
  const pbc = pbcStats(eng)
  const openFindings = eng.findings.filter((f) => f.status === "open").length

  return (
    <div className="mt-4">
      <Popover open={open} onOpenChange={(v) => { setOpen(v); setConfirmId(null) }}>
        <PopoverTrigger asChild>
          <button className="flex w-full max-w-2xl flex-wrap items-center gap-3 rounded-2xl border bg-card px-4 py-3 text-start shadow-soft transition-colors hover:border-primary/30 focus-ring">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Building2 className="h-4.5 w-4.5 text-primary" />
            </span>
            <span className="min-w-0 flex-1">
              <span dir="auto" className="block truncate text-[14.5px] font-semibold tracking-tight">
                {eng.client} <span className="font-normal text-muted-foreground">· {eng.period}</span>
              </span>
              <span className="mt-0.5 block text-[11.5px] text-muted-foreground">
                {prog.done + prog.na}/{prog.total} {t("procs", lang)} · {pbc.received}/{pbc.total}{" "}
                {t("pbcShort", lang)} {lang === "ar" ? "مستلمة" : "received"} · {openFindings}{" "}
                {openFindings === 1 ? (lang === "ar" ? "ملاحظة مفتوحة" : "finding open") : lang === "ar" ? "ملاحظات مفتوحة" : "findings open"}
              </span>
            </span>
            <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180 rtl:-rotate-180")} />
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-[min(92vw,380px)] p-2">
          <p className="px-2 pb-1.5 pt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {t("engagements", lang)}
          </p>
          <div className="max-h-64 space-y-0.5 overflow-y-auto scroll-thin">
            {store.engagements.map((e) => {
              const ep = overallProgress(e)
              const ebp = pbcStats(e)
              const ef = e.findings.filter((f) => f.status === "open").length
              const isActive = e.id === eng.id
              if (confirmId === e.id)
                return (
                  <div key={e.id} className="rounded-xl border border-destructive/30 bg-destructive/[0.04] p-2.5">
                    <p dir="auto" className="text-[12px] leading-relaxed text-foreground/80">
                      {t("deleteEngageQ", lang)}
                    </p>
                    <div className="mt-2 flex gap-1.5">
                      <button
                        onClick={() => {
                          onDelete(e.id)
                          setConfirmId(null)
                        }}
                        className="rounded-lg bg-destructive px-2.5 py-1.5 text-[12px] font-medium text-white transition-colors hover:bg-destructive/90 focus-ring"
                      >
                        {t("delete", lang)}
                      </button>
                      <button
                        onClick={() => setConfirmId(null)}
                        className="rounded-lg border px-2.5 py-1.5 text-[12px] font-medium transition-colors hover:bg-secondary focus-ring"
                      >
                        {t("cancel", lang)}
                      </button>
                    </div>
                  </div>
                )
              return (
                <div
                  key={e.id}
                  className={cn(
                    "group flex items-center gap-2 rounded-xl px-2 py-2 transition-colors",
                    isActive ? "bg-primary/[0.07]" : "hover:bg-secondary/60"
                  )}
                >
                  <button
                    onClick={() => {
                      onSwitch(e.id)
                      setOpen(false)
                    }}
                    className="flex min-w-0 flex-1 items-center gap-2 text-start focus-ring rounded-lg"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                      {isActive && <CheckCircle2 className="h-4 w-4 text-primary" />}
                    </span>
                    <span className="min-w-0">
                      <span dir="auto" className="block truncate text-[13px] font-medium">
                        {e.client} <span className="font-normal text-muted-foreground">· {e.period}</span>
                      </span>
                      <span className="block text-[10.5px] text-muted-foreground">
                        {ep.done + ep.na}/{ep.total} · {t("pbcShort", lang)} {ebp.received}/{ebp.total} · {ef}{" "}
                        {t("findingsShort", lang)}
                      </span>
                    </span>
                  </button>
                  <button
                    onClick={() => setDialog({ mode: "edit", target: e, client: e.client, period: e.period, sectorId: e.sectorId ?? "" })}
                    aria-label={t("editEngagement", lang)}
                    className="shrink-0 rounded-md p-1.5 text-muted-foreground opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity hover:text-primary focus-ring"
                  >
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                  {store.engagements.length > 1 && (
                    <button
                      onClick={() => setConfirmId(e.id)}
                      aria-label={t("delete", lang)}
                      className="shrink-0 rounded-md p-1.5 text-muted-foreground opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity hover:text-destructive focus-ring"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              )
            })}
          </div>
          <button
            onClick={() => {
              setDialog({ mode: "create", client: "", period: "FY 2026", sectorId: "" })
              setOpen(false)
            }}
            className="mt-1.5 flex w-full items-center gap-2 rounded-xl border border-dashed px-2.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-ring"
          >
            <Plus className="h-4 w-4" /> {t("newEngagement", lang)}
          </button>
        </PopoverContent>
      </Popover>

      <EngagementDialog
        open={!!dialog}
        mode={dialog?.mode ?? "create"}
        lang={lang}
        client={dialog?.client ?? ""}
        period={dialog?.period ?? ""}
        sectorId={dialog?.sectorId ?? ""}
        onClientChange={(v) => setDialog((d) => (d ? { ...d, client: v } : d))}
        onPeriodChange={(v) => setDialog((d) => (d ? { ...d, period: v } : d))}
        onSectorChange={(v) => setDialog((d) => (d ? { ...d, sectorId: v } : d))}
        onClose={() => setDialog(null)}
        onSave={() => {
          if (!dialog || !dialog.client.trim()) return
          if (dialog.mode === "create") onCreate(dialog.client, dialog.period, dialog.sectorId || undefined)
          else if (dialog.target) onEditMeta(dialog.target.id, dialog.client, dialog.period, dialog.sectorId || undefined)
          setDialog(null)
        }}
      />
    </div>
  )
}

function EngagementDialog({
  open,
  mode,
  lang,
  client,
  period,
  sectorId,
  onClientChange,
  onPeriodChange,
  onSectorChange,
  onClose,
  onSave,
}: {
  open: boolean
  mode: "create" | "edit"
  lang: Lang
  client: string
  period: string
  sectorId: string
  onClientChange: (v: string) => void
  onPeriodChange: (v: string) => void
  onSectorChange: (v: string) => void
  onClose: () => void
  onSave: () => void
}) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? t("newEngagement", lang) : t("editEngagement", lang)}
          </DialogTitle>
          <DialogDescription>
            {lang === "ar"
              ? "كل مهمة لها تعليمات ومستندات وملاحظات واعتمادات مستقلة تمامًا."
              : "Each engagement keeps its own ticks, PBC statuses, findings and sign-offs."}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div>
            <label className="text-[12px] font-medium text-muted-foreground">{t("client", lang)}</label>
            <input
              value={client}
              onChange={(e) => onClientChange(e.target.value)}
              placeholder={t("clientPh", lang)}
              dir="auto"
              maxLength={80}
              className="mt-1 h-10 w-full rounded-xl border bg-background px-3 text-[13.5px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40"
            />
          </div>
          <div>
            <label className="text-[12px] font-medium text-muted-foreground">{t("period", lang)}</label>
            <input
              value={period}
              onChange={(e) => onPeriodChange(e.target.value)}
              placeholder={t("periodPh", lang)}
              dir="auto"
              maxLength={40}
              className="mt-1 h-10 w-full rounded-xl border bg-background px-3 text-[13.5px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40"
            />
          </div>
          {/* v21: link the engagement to an industry sector — the risk library
              and the close-out bundle pick it up */}
          <div>
            <label className="text-[12px] font-medium text-muted-foreground">
              {lang === "ar" ? "القطاع (اختياري)" : "Industry sector (optional)"}
            </label>
            <select
              value={sectorId}
              onChange={(e) => onSectorChange(e.target.value)}
              className="mt-1 h-10 w-full rounded-xl border bg-background px-3 text-[13.5px] outline-none transition-colors focus:border-primary/40"
              aria-label={lang === "ar" ? "القطاع" : "Industry sector"}
            >
              <option value="">{lang === "ar" ? "— بلا قطاع —" : "— no sector —"}</option>
              {SECTOR_PROFILES.map((s) => (
                <option key={s.id} value={s.id}>
                  {lang === "ar" ? s.name.ar : s.name.en}
                </option>
              ))}
            </select>
          </div>
        </div>
        <DialogFooter>
          <button
            onClick={onClose}
            className="rounded-lg border px-3 py-2 text-[13px] font-medium transition-colors hover:bg-secondary focus-ring"
          >
            {t("cancel", lang)}
          </button>
          <button
            onClick={onSave}
            disabled={!client.trim()}
            className="rounded-lg bg-primary px-3 py-2 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-ring disabled:opacity-40"
          >
            {mode === "create" ? t("create", lang) : t("save", lang)}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/* ------------------------------------------------------------------ */
/* active section                                                      */
/* ------------------------------------------------------------------ */

function SectionView({
  section,
  lang,
  eng,
  onSetProc,
  onResetSection,
  onAskAi,
  onSignoff,
  onOpenStandard,
  onGoPbc,
  onPatchEng,
}: {
  section: ProgramSection
  lang: Lang
  eng: Engagement
  onSetProc: (procId: string, patch: Partial<ProcState> | null) => void
  onResetSection: () => void
  onAskAi: () => void
  onSignoff: (patch: Partial<Signoff>) => void
  onOpenStandard: (standard: string) => void
  onGoPbc: () => void
  /** v21: patch the whole engagement (materiality memo, JE summary) */
  onPatchEng: (patch: Partial<Engagement>) => void
}) {
  const [confirmReset, setConfirmReset] = useState(false)
  const rtl = lang === "ar"
  const tt = (k: keyof typeof UI) => UI[k][lang]
  const Icon = ICONS[section.icon] ?? Square
  const sp = sectionProgress(eng, section.id)
  const pct = sp.pct

  return (
    <article className="min-w-0">
      {/* print-only evidence header */}
      <div className="hidden print:mb-4 print:block">
        <p className="text-[12px] font-medium">
          {eng.client} · {eng.period} — {section.code}{" "}
          {lang === "ar" ? section.title.ar : section.title.en} · {sp.done + sp.na}/{sp.total}
        </p>
      </div>

      {/* section header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </span>
          <div>
            <p className="font-mono text-[11px] text-muted-foreground">{section.code}</p>
            <h2 dir="auto" className="font-serif text-[20px] font-semibold leading-tight tracking-tight">
              {lang === "ar" ? section.title.ar : section.title.en}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-1.5 print:hidden">
          <button
            onClick={onAskAi}
            className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-2.5 py-1.5 text-[12px] font-medium transition-colors hover:border-primary/30 hover:text-primary focus-ring"
          >
            <Sparkles className="h-3.5 w-3.5" /> {tt("askAi")}
          </button>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-2.5 py-1.5 text-[12px] font-medium transition-colors hover:border-primary/30 hover:text-primary focus-ring"
          >
            <Printer className="h-3.5 w-3.5" /> {tt("print")}
          </button>
        </div>
      </div>

      <p dir="auto" className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">
        {lang === "ar" ? section.scope.ar : section.scope.en}
      </p>

      {/* progress */}
      <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border bg-card px-3.5 py-2.5 print:hidden">
        <span className="text-[12px] font-medium text-muted-foreground">{tt("progress")}</span>
        <div className="h-2 min-w-20 flex-1 overflow-hidden rounded-full bg-secondary">
          <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} />
        </div>
        <span className="text-[12px] tabular-nums font-medium text-primary">
          {sp.done}/{sp.total} {tt("done")}
          {sp.na > 0 && (
            <span className="text-muted-foreground">
              {" "}
              · {sp.na} {tt("naCount")}
            </span>
          )}{" "}
          · {pct}%
        </span>
        {sp.done + sp.na > 0 && (
          <span className="relative">
            {!confirmReset ? (
              <button
                onClick={() => setConfirmReset(true)}
                title={tt("resetFull")}
                className="inline-flex items-center gap-1 rounded-md px-1.5 py-1 text-[11.5px] text-muted-foreground transition-colors hover:text-destructive focus-ring"
              >
                <RotateCcw className="h-3 w-3" /> {tt("reset")}
              </button>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-destructive/30 bg-destructive/[0.05] px-1.5 py-0.5">
                <span className="text-[11.5px] font-medium text-destructive">
                  {lang === "ar" ? "تأكيد المسح؟" : "Confirm reset?"}
                </span>
                <button
                  onClick={() => {
                    onResetSection()
                    setConfirmReset(false)
                  }}
                  className="rounded-md bg-destructive px-2 py-0.5 text-[11px] font-medium text-white transition-colors hover:bg-destructive/90 focus-ring"
                >
                  {lang === "ar" ? "نعم" : "Yes"}
                </button>
                <button
                  onClick={() => setConfirmReset(false)}
                  className="rounded-md px-1.5 py-0.5 text-[11px] text-muted-foreground hover:text-foreground focus-ring"
                >
                  {lang === "ar" ? "لا" : "No"}
                </button>
              </span>
            )}
          </span>
        )}
      </div>

      {/* assertions + standards chips */}
      {(section.assertions?.length || section.standards.length) > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {section.assertions?.map((a) => (
            <span
              key={a}
              title={ASSERTIONS[a] ? (lang === "ar" ? ASSERTIONS[a].ar : ASSERTIONS[a].en) : a}
              className="inline-flex items-center gap-1 rounded-full border bg-secondary/60 px-2.5 py-1 text-[11px] font-medium text-foreground/70"
            >
              <b className="font-mono text-primary">{a}</b> {ASSERTIONS[a] ? (lang === "ar" ? ASSERTIONS[a].ar : ASSERTIONS[a].en) : ""}
            </span>
          ))}
          {section.standards.map((s) => {
            const query = libraryQueryFor(s)
            return query ? (
              <button
                key={s}
                onClick={() => onOpenStandard(s)}
                title={tt("openInLibrary")}
                className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/[0.05] px-2.5 py-1 font-mono text-[10.5px] text-primary transition-colors hover:border-primary/40 hover:bg-primary/10 focus-ring"
              >
                {s} <Link2 className="h-3 w-3" />
              </button>
            ) : (
              <span
                key={s}
                title={tt("noLibraryText")}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.05] px-2.5 py-1 font-mono text-[10.5px] text-primary/70"
              >
                {s}
              </span>
            )
          })}
        </div>
      )}

      {/* objectives + risks grid */}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-card p-4">
          <h3 className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-foreground/70">
            <Target className="h-4 w-4 text-primary" /> {tt("objectives")}
          </h3>
          <ul className="mt-2.5 space-y-2">
            {section.objectives.map((o, i) => (
              <li key={i} dir="auto" className="flex gap-2 text-[13px] leading-relaxed text-foreground/80">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                {lang === "ar" ? o.ar : o.en}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-destructive/20 bg-destructive/[0.03] p-4">
          <h3 className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-destructive">
            <AlertTriangle className="h-4 w-4" /> {tt("risks")}
          </h3>
          <ul className="mt-2.5 space-y-2">
            {section.risks.map((r, i) => (
              <li key={i} dir="auto" className="flex gap-2 text-[13px] leading-relaxed text-foreground/80">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />
                {lang === "ar" ? r.ar : r.en}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* documents */}
      <div className="mt-4 rounded-2xl border bg-sidebar/50 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-foreground/70">
            <FileText className="h-4 w-4 text-primary" /> {tt("documents")}
          </h3>
          <button
            onClick={onGoPbc}
            className="inline-flex items-center gap-1 rounded-lg border bg-card px-2 py-1 text-[11.5px] font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary focus-ring print:hidden"
          >
            {lang === "ar" ? "← تتبع الطلبات في مستندات العميل" : "Track requests in the PBC Tracker →"}
          </button>
        </div>
        <ul className="mt-2.5 grid gap-2 md:grid-cols-2">
          {section.documents.map((d, i) => (
            <li key={i} dir="auto" className="flex gap-2 text-[13px] leading-relaxed text-foreground/80">
              <span className="mt-[3px] shrink-0 text-primary/70">▪</span>
              {lang === "ar" ? d.ar : d.en}
            </li>
          ))}
        </ul>
      </div>

      {/* interactive tools attached to their sections */}
      {(section.id === "materiality" || section.id === "sampling") && (
        <p className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground print:hidden">
          <Wrench className="h-3.5 w-3.5" /> {tt("calcMateriality")}
        </p>
      )}
      {section.id === "materiality" && (
        <div className="mt-3">
          {/* v21: the calculator persists its ISA 320 memo to the engagement
              (and syncs PM/CTT so the SAD evaluates against it) */}
          <MaterialityCalculator
            lang={lang}
            memo={eng.materiality}
            onSave={(m) => {
              onPatchEng({ materiality: m, pm: m.pm, ctt: m.ctt })
              toast.success(
                lang === "ar"
                  ? "حُفظت مذكرة الأهمية — وسيقوّم ملخص الفروق بناءً عليها."
                  : "Materiality memo saved — the SAD now evaluates against it."
              )
            }}
          />
        </div>
      )}
      {section.id === "sampling" && (
        <div className="mt-3">
          <SamplingCalculator lang={lang} />
        </div>
      )}
      {section.id === "risk-assessment" && (
        <div className="mt-3">
          {/* v21: the JE-testing summary persists into the engagement file */}
          <JournalEntryAnalyzer
            lang={lang}
            onSave={(s) => {
              onPatchEng({ jeSummary: { ...s, savedAt: Date.now() } })
              toast.success(
                lang === "ar"
                  ? "حُفظ ملخص اختبار القيود في ملف المهمة."
                  : "JE-testing summary saved to the engagement file."
              )
            }}
          />
        </div>
      )}
      {section.id === "completion" && (
        <div className="mt-3">
          <KamDrafter lang={lang} />
        </div>
      )}

      {/* procedures checklist */}
      <div className="mt-5">
        <h3 className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-foreground/70">
          <CheckSquare className="h-4 w-4 text-primary" /> {tt("procedures")}
          <span className="rounded-full bg-secondary px-2 py-0.5 text-[10.5px] font-medium tabular-nums text-muted-foreground">
            {sp.done + sp.na}/{sp.total} {tt("done")}
          </span>
        </h3>
        <ol className="mt-2.5 space-y-1.5">
          {section.procedures.map((p, i) => (
            <ProcRow
              key={p.id}
              procId={p.id}
              index={i}
              sectionCode={section.code}
              text={lang === "ar" ? p.text.ar : p.text.en}
              ref={p.ref}
              lang={lang}
              st={eng.procedures[p.id]}
              onSetProc={onSetProc}
            />
          ))}
        </ol>
      </div>

      {/* sign-off */}
      <div className="mt-5">
        <SignoffEditor
          signoff={eng.signoffs[section.id]}
          lang={lang}
          onChange={onSignoff}
          showIncompleteHint={pct < 100}
        />
      </div>

      {/* pitfalls */}
      <div className="mt-5 rounded-2xl border border-gold/40 bg-gold/[0.06] p-4">
        <h3 className="flex items-center gap-2 text-[12.5px] font-semibold uppercase tracking-[0.08em] text-gold-deep">
          <AlertTriangle className="h-4 w-4" /> {tt("pitfalls")}
        </h3>
        <ul className="mt-2.5 space-y-2">
          {section.pitfalls.map((p, i) => (
            <li key={i} dir="auto" className="flex gap-2 text-[13px] leading-relaxed text-foreground/80">
              <span className="mt-[3px] shrink-0 text-gold">▲</span>
              {lang === "ar" ? p.ar : p.en}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

/* ------------------------------------------------------------------ */
/* one tick-off procedure row (ISA 230: status, WP ref, initials, date) */
/* ------------------------------------------------------------------ */

function ProcRow({
  procId,
  index,
  sectionCode,
  text,
  ref,
  lang,
  st,
  onSetProc,
}: {
  procId: string
  index: number
  sectionCode: string
  text: string
  ref?: string
  lang: Lang
  st?: ProcState
  onSetProc: (procId: string, patch: Partial<ProcState> | null) => void
}) {
  const [expanded, setExpanded] = useState(false)
  const tt = (k: keyof typeof UI) => UI[k][lang]
  const isDone = st?.status === "done"
  const isNa = st?.status === "na"

  const toggleDone = () => {
    if (isDone) onSetProc(procId, { status: undefined, date: undefined }) // keep WP ref / note
    else onSetProc(procId, { status: "done", date: Date.now() })
  }
  const setNa = () => {
    if (isNa) onSetProc(procId, { status: undefined, date: undefined })
    else onSetProc(procId, { status: "na", date: Date.now() })
  }

  return (
    <li
      className={cn(
        "rounded-xl border transition-colors",
        isDone
          ? "border-sage/40 bg-sage/[0.06]"
          : isNa
            ? "border-border bg-secondary/30"
            : "border-border bg-card"
      )}
    >
      <div className="flex items-start gap-3 p-3.5">
        <button
          onClick={toggleDone}
          aria-pressed={isDone}
          aria-label={isDone ? tt("detailDone") : isNa ? tt("detailNa") : tt("detailDone")}
          className={cn(
            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[11px] font-semibold transition-colors focus-ring",
            isDone
              ? "border-sage bg-sage text-white"
              : isNa
                ? "border-muted-foreground bg-secondary text-muted-foreground"
                : "border-input bg-background text-transparent hover:border-sage/60"
          )}
        >
          {isDone ? <CheckCircle2 className="h-3.5 w-3.5" /> : isNa ? <Minus className="h-3.5 w-3.5" /> : <CheckCircle2 className="h-3.5 w-3.5" />}
        </button>

        <button onClick={toggleDone} className="min-w-0 flex-1 text-start focus-ring rounded-md">
          <span className="me-2 font-mono text-[11px] text-muted-foreground">
            {sectionCode}-{index + 1}
          </span>
          <span
            dir="auto"
            className={cn(
              "text-[13.5px] leading-relaxed",
              isDone ? "text-muted-foreground line-through decoration-sage/50" : "text-foreground/85"
            )}
          >
            {text}
          </span>
          {(st?.wp || st?.initials || st?.date || isNa) && (
            <span className="mt-1.5 flex flex-wrap items-center gap-1.5">
              {st?.wp && (
                <span className="rounded-md bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                  WP {st.wp}
                </span>
              )}
              {st?.initials && (
                <span className="rounded-md bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                  {st.initials}
                </span>
              )}
              {st?.date && (
                <span className="rounded-md bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                  {fmtDate(st.date, lang)}
                </span>
              )}
              {isNa && (
                <span className="rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-800" dir="auto">
                  N/A{st.naReason ? ` — ${st.naReason}` : ""}
                </span>
              )}
            </span>
          )}
        </button>

        {ref && (
          <span className="mt-0.5 shrink-0 rounded-md bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            {ref}
          </span>
        )}

        <button
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-label={lang === "ar" ? "تفاصيل الإجراء" : "Procedure details"}
          className="mt-0.5 shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground focus-ring print:hidden"
        >
          <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} />
        </button>
      </div>

      {expanded && (
        <div className="border-t px-3.5 py-3 print:hidden">
          {/* status setters */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={toggleDone}
              aria-pressed={isDone}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[12px] font-medium transition-colors focus-ring",
                isDone ? "border-sage bg-sage/10 text-sage-deep" : "text-muted-foreground hover:border-primary/30 hover:text-foreground"
              )}
            >
              <CheckCircle2 className="h-3.5 w-3.5" /> {tt("detailDone")}
            </button>
            <button
              onClick={setNa}
              aria-pressed={isNa}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[12px] font-medium transition-colors focus-ring",
                isNa ? "border-amber-500 bg-amber-50 text-amber-800" : "text-muted-foreground hover:border-primary/30 hover:text-foreground"
              )}
            >
              <Minus className="h-3.5 w-3.5" /> {tt("detailNa")}
            </button>
            {st && (
              <button
                onClick={() => onSetProc(procId, null)}
                className="inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[12px] font-medium text-muted-foreground transition-colors hover:border-destructive/30 hover:text-destructive focus-ring"
              >
                <X className="h-3.5 w-3.5" /> {tt("detailClear")}
              </button>
            )}
          </div>

          {isNa && (
            <div className="mt-3">
              <label className="text-[11.5px] font-medium text-muted-foreground">{tt("naReasonPh")}</label>
              <input
                value={st?.naReason ?? ""}
                onChange={(e) => onSetProc(procId, { naReason: e.target.value })}
                dir="auto"
                maxLength={160}
                placeholder={lang === "ar" ? "مثال: الشركة ليس لديها فروع" : "e.g. the entity has no branches"}
                className="mt-1 h-9 w-full rounded-lg border bg-background px-2.5 text-[13px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40"
              />
            </div>
          )}

          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <div>
              <label className="text-[11.5px] font-medium text-muted-foreground">{tt("wpRef")}</label>
              <input
                value={st?.wp ?? ""}
                onChange={(e) => onSetProc(procId, { wp: e.target.value })}
                dir="ltr"
                maxLength={24}
                placeholder={tt("wpPh")}
                className="mt-1 h-9 w-full rounded-lg border bg-background px-2.5 font-mono text-[12.5px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40"
              />
            </div>
            <div>
              <label className="text-[11.5px] font-medium text-muted-foreground">{tt("preparedBy")}</label>
              <input
                value={st?.initials ?? ""}
                onChange={(e) => onSetProc(procId, { initials: e.target.value })}
                dir="ltr"
                maxLength={8}
                placeholder="MA"
                className="mt-1 h-9 w-full rounded-lg border bg-background px-2.5 font-mono text-[12.5px] uppercase outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40"
              />
            </div>
            <div>
              <label className="text-[11.5px] font-medium text-muted-foreground">{tt("dateWord")}</label>
              <p className="mt-1 flex h-9 items-center rounded-lg border bg-secondary/40 px-2.5 font-mono text-[12.5px] text-muted-foreground">
                {st?.date ? fmtDate(st.date, lang) : "—"}
              </p>
            </div>
          </div>

          <div className="mt-3">
            <label className="text-[11.5px] font-medium text-muted-foreground">{tt("noteWord")}</label>
            <textarea
              value={st?.note ?? ""}
              onChange={(e) => onSetProc(procId, { note: e.target.value })}
              dir="auto"
              rows={2}
              maxLength={600}
              placeholder={tt("notePh")}
              className="mt-1 w-full resize-y rounded-lg border bg-background px-2.5 py-2 text-[13px] leading-relaxed outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40"
            />
          </div>
        </div>
      )}
    </li>
  )
}


