"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { tt } from "@/lib/i18n"
import { aiJson, type AiStageEvent } from "@/lib/ai-client"
import { StageTicker } from "./ai-progress"
import { cn } from "@/lib/utils"
import { getRouteParam, onRouteParams, setRouteParam } from "@/lib/deeplink"
import {
  TOC_CORE_IDS,
  TOC_INDUSTRIES,
  TOC_SECTORS,
  tocFullQuestions,
  tocIndustry,
  tocLibraryQuestionCount,
  tocSearch,
  tocSectorName,
} from "@/lib/toc/library"
import type { TocAiQuestionnaire, TocAnswer, TocAnswerMap, TocQuestion } from "@/lib/toc/types"
import { evaluateToc } from "@/lib/toc/scoring"
import { TocRunner, tocDomainLabel, type TocProcedureView } from "./toc-runner"
import { PageHeader } from "./shared"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  Bed,
  Briefcase,
  Building2,
  Car,
  ShoppingCart,
  ChefHat,
  Clapperboard,
  Cloud,
  Coins,
  Cpu,
  Factory,
  Fish,
  FlaskConical,
  Fuel,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Leaf,
  ListChecks,
  Loader2,
  Mountain,
  Moon,
  Network,
  Palmtree,
  Pill,
  Plane,
  Recycle,
  Search,
  Server,
  ShieldCheck,
  Ship,
  Shirt,
  Sparkles,
  Sprout,
  Stethoscope,
  Store,
  TowerControl,
  TrainFront,
  Trees,
  Truck,
  Umbrella,
  Utensils,
  Wallet,
  Warehouse,
  Zap,
  HardHat,
  KeyRound,
  Trash2,
  ChevronRight,
  type LucideIcon,
} from "lucide-react"

/** v37 — the Test of Control hub.
 *
 *  Two tabs:
 *   1. Industry library — 45 industries × (22-question universal core ICQ +
 *      industry module). Answers persist per questionnaire (industry or AI
 *      id — the core is re-asked per entity, because two firms in two
 *      industries are two different control environments).
 *   2. AI generator — any custom industry + case description → a tailored
 *      questionnaire + corroborating procedures, run through the same
 *      runner and verdict engine.
 *
 *  Deep links: #/toc?ind=<industryId> opens that questionnaire; #/toc?ai=1
 *  opens the AI tab. */

const ICONS: Record<string, LucideIcon> = {
  sprout: Sprout, fish: Fish, trees: Trees, mountain: Mountain, fuel: Fuel,
  factory: Factory, utensils: Utensils, pill: Pill, flask: FlaskConical, car: Car,
  shirt: Shirt, cpu: Cpu, zap: Zap, leaf: Leaf, recycle: Recycle,
  "hard-hat": HardHat, building: Building2, key: KeyRound, truck: Truck, plane: Plane,
  ship: Ship, train: TrainFront, store: Store, cart: ShoppingCart, warehouse: Warehouse,
  landmark: Landmark, moon: Moon, umbrella: Umbrella, chart: BarChart3, wallet: Wallet,
  coin: Coins, cloud: Cloud, tower: TowerControl, network: Network, server: Server,
  clapperboard: Clapperboard, stethoscope: Stethoscope, "graduation-cap": GraduationCap,
  bed: Bed, chef: ChefHat, briefcase: Briefcase, palmtree: Palmtree, "heart-handshake": HeartHandshake,
}

const ANSWERS_KEY = "auditedge-toc-answers-v37"
const AI_KEY = "auditedge-toc-ai-v37"
const MAX_AI_SAVED = 12

type Active =
  | { kind: "industry"; id: string }
  | { kind: "ai"; q: TocAiQuestionnaire }
  | null

function loadAnswers(): TocAnswerMap {
  try {
    return JSON.parse(localStorage.getItem(ANSWERS_KEY) ?? "{}") as TocAnswerMap
  } catch {
    return {}
  }
}

function loadSavedAi(): TocAiQuestionnaire[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(AI_KEY) ?? "[]")
    return Array.isArray(parsed) ? (parsed as TocAiQuestionnaire[]) : []
  } catch {
    return []
  }
}

/* ------------------------------------------------------------------ */
/* an industry card                                                    */
/* ------------------------------------------------------------------ */

function IndustryCard({
  industry,
  answered,
  total,
  onOpen,
}: {
  industry: (typeof TOC_INDUSTRIES)[number]
  answered: number
  total: number
  onOpen: () => void
}) {
  const lang = useAppStore((s) => s.lang)
  const Icon = ICONS[industry.icon] ?? Factory
  const inProgress = answered > 0 && answered < total
  const done = answered === total
  return (
    <button
      onClick={onOpen}
      className="group flex h-full flex-col rounded-2xl border bg-card p-5 text-start shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/30 focus-ring"
    >
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-[21px] w-[21px]" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-[15.5px] font-semibold leading-snug text-foreground">{industry.name}</h3>
          <p className="mt-0.5 text-[11.5px] font-medium uppercase tracking-wide text-muted-foreground">
            {tocSectorName(industry.sector)}
          </p>
        </div>
        {inProgress && (
          <span className="rounded-full bg-amber-500/10 px-2 py-px text-[10.5px] font-semibold text-amber-600 dark:text-amber-400">
            {tt("toc37.inProgress", lang)}
          </span>
        )}
        {done && (
          <span className="rounded-full bg-emerald-500/10 px-2 py-px text-[10.5px] font-semibold text-emerald-600 dark:text-emerald-400">
            {tt("toc37.assessed", lang)}
          </span>
        )}
      </div>
      <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">{industry.blurb}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {industry.risks.slice(0, 3).map((r) => (
          <span key={r} className="rounded-full bg-secondary px-2 py-0.5 text-[11px] text-muted-foreground">
            {r}
          </span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between pt-4 text-[12.5px] font-medium">
        <span className="text-muted-foreground">
          {total} {tt("toc37.questionsWord", lang)} · {industry.procedures.length} {tt("toc37.proceduresWord", lang)}
        </span>
        <span className="flex items-center gap-0.5 text-primary">
          {answered > 0 ? tt("toc37.resume", lang) : tt("toc37.start", lang)}
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
        </span>
      </div>
    </button>
  )
}

/* ------------------------------------------------------------------ */
/* the hub                                                             */
/* ------------------------------------------------------------------ */

export function TocHub() {
  const lang = useAppStore((s) => s.lang)
  const navigate = useAppStore((s) => s.navigate)
  const setProgramTailorPrefill = useAppStore((s) => s.setProgramTailorPrefill)
  const [tab, setTab] = useState<"library" | "ai">("library")
  const [query, setQuery] = useState("")
  const [sector, setSector] = useState<string>("all")
  const [active, setActive] = useState<Active>(null)
  const [answers, setAnswers] = useState<TocAnswerMap>({})
  const [savedAi, setSavedAi] = useState<TocAiQuestionnaire[]>([])
  const [aiIndustry, setAiIndustry] = useState("")
  const [aiCase, setAiCase] = useState("")
  const [aiBusy, setAiBusy] = useState(false)
  const aiBusyRef = useRef(false)
  const [aiError, setAiError] = useState("")
  /* v42 — the progressive runline (SSE stages + cancel) */
  const [aiStage, setAiStage] = useState<AiStageEvent | null>(null)
  const [aiStartedAt, setAiStartedAt] = useState(0)
  const aiAbortRef = useRef<AbortController | null>(null)

  /* ---------- hydration + deep links ---------- */
  useEffect(() => {
    setAnswers(loadAnswers())
    setSavedAi(loadSavedAi())
    const shared = getRouteParam("ind")
    if (shared && tocIndustry(shared)) setActive({ kind: "industry", id: shared })
    else if (getRouteParam("ai") === "1") setTab("ai")
    const unsub = onRouteParams((params) => {
      const ind = params.get("ind")
      if (ind && tocIndustry(ind)) setActive({ kind: "industry", id: ind })
      else if (!ind) setActive(null)
      setTab(params.get("ai") === "1" ? "ai" : "library")
    })
    return unsub
  }, [])

  const persistAnswers = useCallback((next: TocAnswerMap) => {
    try {
      localStorage.setItem(ANSWERS_KEY, JSON.stringify(next))
    } catch {}
  }, [])

  const persistAi = useCallback((next: TocAiQuestionnaire[]) => {
    try {
      localStorage.setItem(AI_KEY, JSON.stringify(next))
    } catch {}
  }, [])

  /* ---------- helpers ---------- */
  const activeKey = active ? (active.kind === "industry" ? active.id : active.q.id) : ""

  const scopedAnswers = useMemo(() => {
    if (!activeKey) return {}
    const prefix = `${activeKey}::`
    const out: TocAnswerMap = {}
    for (const [k, v] of Object.entries(answers)) {
      if (k.startsWith(prefix)) out[k.slice(prefix.length)] = v
    }
    return out
  }, [answers, activeKey])

  const setAnswer = useCallback(
    (qid: string, a: TocAnswer) => {
      setAnswers((prev) => {
        const next = { ...prev, [`${activeKey}::${qid}`]: a }
        persistAnswers(next)
        return next
      })
    },
    [activeKey, persistAnswers]
  )

  const resetActive = useCallback(() => {
    setAnswers((prev) => {
      const next = { ...prev }
      for (const k of Object.keys(next)) {
        if (k.startsWith(`${activeKey}::`)) delete next[k]
      }
      persistAnswers(next)
      return next
    })
  }, [activeKey, persistAnswers])

  const openIndustry = (id: string) => {
    setActive({ kind: "industry", id })
    setRouteParam("ind", id)
    setRouteParam("ai", null)
    window.scrollTo({ top: 0 })
  }

  const backToHub = () => {
    setActive(null)
    setRouteParam("ind", null)
  }

  const answeredCountFor = useCallback(
    (key: string, questionIds: string[]) => {
      const prefix = `${key}::`
      return questionIds.filter((id) => answers[`${prefix}${id}`]).length
    },
    [answers]
  )

  /* ---------- AI generation (one path for form + regenerate) ---------- */
  const runGeneration = useCallback(
    async (industry: string, caseContext: string) => {
      if (!industry.trim() || aiBusyRef.current) return
      aiBusyRef.current = true
      setAiBusy(true)
      setAiError("")
      setAiStage(null)
      setAiStartedAt(Date.now())
      aiAbortRef.current?.abort()
      aiAbortRef.current = new AbortController()
      try {
        // v42 — progressive transport: real stages + heartbeat instead of a frozen skeleton
        const data = await aiJson<{ questionnaire?: TocAiQuestionnaire; error?: string }>(
          "/api/ai/toc-generate",
          { industry: industry.trim(), caseContext: caseContext.trim(), lang },
          { onStage: setAiStage, signal: aiAbortRef.current.signal }
        )
        if (!data.questionnaire) throw new Error(data.error ?? "failed")
        const q = data.questionnaire
        setSavedAi((prev) => {
          const next = [q, ...prev.filter((s) => s.id !== q.id)].slice(0, MAX_AI_SAVED)
          persistAi(next)
          return next
        })
        setActive({ kind: "ai", q })
        setRouteParam("ind", null)
        window.scrollTo({ top: 0 })
      } catch (e) {
        if (!(e instanceof DOMException && e.name === "AbortError")) setAiError(tt("toc37.aiFailed", lang))
      } finally {
        aiBusyRef.current = false
        setAiBusy(false)
        aiAbortRef.current = null
      }
    },
    [lang, persistAi]
  )

  const generateAi = () => {
    setAiIndustry((ind) => {
      void runGeneration(ind, aiCase)
      return ind
    })
  }

  const deleteAi = (id: string) => {
    setSavedAi((prev) => {
      const next = prev.filter((s) => s.id !== id)
      persistAi(next)
      return next
    })
  }

  /* ---------- v38 — the ToC → audit-program bridge ----------
   * Carries the entity (industry), its case and the LIVE control verdict —
   * including the gaps management admitted — into the AI program customizer
   * on the Audit Program view, so the tailored program lands grounded in
   * what the ICQ just found. */
  const tailorProgram = (industryName: string, caseContext: string, questions: TocQuestion[]) => {
    const evaluation = evaluateToc(questions, scopedAnswers)
    const gaps = evaluation.gaps
      .slice(0, 5)
      .map((g) => g.q)
      .join("; ")
    const concerns = [
      `Test of Control ICQ verdict: ${evaluation.verdict} control environment (${evaluation.pct}% weighted score, ${evaluation.failedCriticals.length} critical control failures).`,
      gaps ? `Control gaps admitted by management: ${gaps}.` : "",
      caseContext,
    ]
      .filter(Boolean)
      .join(" ")
    setProgramTailorPrefill({
      sectorFree: industryName.trim().slice(0, 110),
      concerns: concerns.slice(0, 580),
    })
    navigate("program")
  }

  /* ---------- the hub's filtered list (before early returns: hooks order) ---------- */
  const filtered = useMemo(() => {
    let list = tocSearch(TOC_INDUSTRIES, query)
    if (sector !== "all") list = list.filter((i) => i.sector === sector)
    return list
  }, [query, sector])

  /* ---------- the active questionnaire ---------- */
  if (active) {
    if (active.kind === "industry") {
      const ind = tocIndustry(active.id)!
      const questions = tocFullQuestions(ind)
      const procedures: TocProcedureView[] = ind.procedures.map((p) => ({ title: p }))
      return (
        <TocRunner
          title={ind.name}
          subtitle={ind.blurb}
          risks={ind.risks}
          procedures={procedures}
          questions={questions}
          answers={scopedAnswers}
          coreIds={TOC_CORE_IDS}
          onAnswer={setAnswer}
          onReset={resetActive}
          onBack={backToHub}
          onTailorProgram={() => tailorProgram(ind.name, ind.blurb, questions)}
        />
      )
    }
    const q = active.q
    return (
      <TocRunner
        title={q.title}
        subtitle={q.scope}
        risks={q.risks}
        procedures={q.procedures.map((p) => ({ title: p.title, detail: p.detail, type: p.type }))}
        questions={q.questions}
        answers={scopedAnswers}
        coreIds={TOC_CORE_IDS}
        badge={tt("toc37.aiBadge", lang)}
        onAnswer={setAnswer}
        onReset={resetActive}
        onBack={backToHub}
        onTailorProgram={() => tailorProgram(q.input.industry || q.title, `${q.scope} ${q.input.caseContext}`.trim(), q.questions)}
        onRegenerate={
          q.input.industry
            ? () => {
                setAiIndustry(q.input.industry)
                setAiCase(q.input.caseContext)
                setTab("ai")
                void runGeneration(q.input.industry, q.input.caseContext)
              }
            : undefined
        }
      />
    )
  }

  /* ---------- the hub itself ---------- */
  return (
    <div className="space-y-6">
      <PageHeader
        title={tt("toc37.title", lang)}
        sub={tt("toc37.subtitle", lang)}
        action={
          <div className="flex items-center gap-2 rounded-xl border bg-card px-3.5 py-2 shadow-soft">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span className="text-[13px] font-semibold tabular-nums text-foreground">
              {TOC_INDUSTRIES.length}
            </span>
            <span className="text-[12.5px] text-muted-foreground">{tt("toc37.industriesWord", lang)}</span>
            <span className="h-4 w-px bg-border" />
            <ListChecks className="h-4 w-4 text-primary" />
            <span className="text-[13px] font-semibold tabular-nums text-foreground">{tocLibraryQuestionCount()}</span>
            <span className="text-[12.5px] text-muted-foreground">{tt("toc37.questionsWord", lang)}</span>
          </div>
        }
      />

      {/* methodology strip */}
      <section className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-5 sm:p-6">
        <h2 className="flex items-center gap-2 text-[14.5px] font-semibold text-foreground">
          <ShieldCheck className="h-4.5 w-4.5 text-primary" /> {tt("toc37.how", lang)}
        </h2>
        <p className="mt-2 max-w-4xl text-[13.5px] leading-relaxed text-muted-foreground">{tt("toc37.howBody", lang)}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["control-environment", "risk-assessment", "control-activities", "info-communication", "monitoring", "it-cyber"].map(
            (d) => (
              <span key={d} className="rounded-full border border-primary/25 bg-background px-2.5 py-1 text-[11.5px] font-medium text-foreground/80">
                {tocDomainLabel(d, lang)}
              </span>
            )
          )}
        </div>
      </section>

      <Tabs value={tab} onValueChange={(v) => {
        setTab(v as "library" | "ai")
        setRouteParam("ai", v === "ai" ? "1" : null)
      }}>
        <TabsList>
          <TabsTrigger value="library">{tt("toc37.libraryTab", lang)}</TabsTrigger>
          <TabsTrigger value="ai">
            <Sparkles className="me-1.5 h-3.5 w-3.5" />
            {tt("toc37.aiTab", lang)}
          </TabsTrigger>
        </TabsList>

        {/* ------------------------- library ------------------------- */}
        <TabsContent value="library" className="mt-4 space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={tt("toc37.search", lang)}
                className="h-10 bg-card ps-9"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSector("all")}
              className={cn(
                "rounded-full border px-3 py-1.5 text-[12.5px] font-medium transition-colors focus-ring",
                sector === "all"
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-foreground/25 hover:text-foreground"
              )}
            >
              {tt("toc37.allSectors", lang)} · {TOC_INDUSTRIES.length}
            </button>
            {TOC_SECTORS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSector(s.id)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-[12.5px] font-medium transition-colors focus-ring",
                  sector === s.id
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-foreground/25 hover:text-foreground"
                )}
              >
                {s.name}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="rounded-2xl border border-dashed p-8 text-center text-sm text-muted-foreground">
              {tt("toc37.noResults", lang)}
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((ind) => {
                const ids = tocFullQuestions(ind).map((q) => q.id)
                return (
                  <IndustryCard
                    key={ind.id}
                    industry={ind}
                    answered={answeredCountFor(ind.id, ids)}
                    total={ids.length}
                    onOpen={() => openIndustry(ind.id)}
                  />
                )
              })}
            </div>
          )}
          <p className="pt-1 text-[12.5px] leading-relaxed text-muted-foreground">{tt("toc37.coreNote", lang)}</p>
        </TabsContent>

        {/* ------------------------- AI generator ------------------------- */}
        <TabsContent value="ai" className="mt-4 space-y-5">
          <section className="rounded-2xl border bg-card p-5 shadow-soft sm:p-6">
            <h2 className="flex items-center gap-2 text-[15.5px] font-semibold text-foreground">
              <Sparkles className="h-4.5 w-4.5 text-primary" /> {tt("toc37.aiIntroTitle", lang)}
            </h2>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{tt("toc37.aiIntro", lang)}</p>
            <div className="mt-4 space-y-3.5">
              <div>
                <label htmlFor="toc-ai-industry" className="text-[13px] font-medium text-foreground">
                  {tt("toc37.aiIndustry", lang)}
                </label>
                <Input
                  id="toc-ai-industry"
                  value={aiIndustry}
                  onChange={(e) => setAiIndustry(e.target.value)}
                  placeholder={tt("toc37.aiIndustryPh", lang)}
                  maxLength={120}
                  className="mt-1.5 h-11 bg-background"
                />
              </div>
              <div>
                <label htmlFor="toc-ai-case" className="text-[13px] font-medium text-foreground">
                  {tt("toc37.aiCase", lang)}
                </label>
                <Textarea
                  id="toc-ai-case"
                  value={aiCase}
                  onChange={(e) => setAiCase(e.target.value)}
                  placeholder={tt("toc37.aiCasePh", lang)}
                  maxLength={4000}
                  rows={5}
                  className="mt-1.5 bg-background"
                />
              </div>
              {aiError && (
                <p className="rounded-lg border border-red-500/30 bg-red-500/[0.06] px-3 py-2 text-[13px] text-red-600 dark:text-red-400">
                  {aiError}
                </p>
              )}
              <Button onClick={() => void generateAi()} disabled={aiBusy || !aiIndustry.trim()} className="h-11">
                {aiBusy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
                {aiBusy ? tt("toc37.aiGenerating", lang) : tt("toc37.aiGenerate", lang)}
              </Button>
            </div>
          </section>

          {aiBusy && (
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-2xl border bg-card p-5 shadow-soft">
                <Skeleton className="h-11 w-11 rounded-xl" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
              {/* v42 — the progressive runline: what the designer is doing, how long, cancel */}
              <StageTicker
                busy={aiBusy}
                labels={[
                  tt("ai42.stageReading", lang),
                  tt("ai42.stageWriting", lang),
                  tt("ai42.stageTightening", lang),
                  tt("ai42.stageStructuring", lang),
                ]}
                stage={aiStage}
                startedAt={aiStartedAt}
                onCancel={() => aiAbortRef.current?.abort()}
                cancelLabel={tt("ai42.cancel", lang)}
                runningLabel={tt("toc37.aiGeneratingNote", lang)}
              />
            </div>
          )}

          <section className="space-y-3">
            <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
              {tt("toc37.aiMyTitle", lang)} · {savedAi.length}
            </h3>
            {savedAi.length === 0 ? (
              <p className="rounded-2xl border border-dashed p-6 text-center text-[13px] text-muted-foreground">
                {tt("toc37.aiMyEmpty", lang)}
              </p>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {savedAi.map((s) => (
                  <div key={s.id} className="flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-soft">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Sparkles className="h-[18px] w-[18px]" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[14px] font-semibold text-foreground">{s.title}</p>
                      <p className="mt-0.5 line-clamp-2 text-[12px] leading-relaxed text-muted-foreground">{s.scope}</p>
                      <p className="mt-1 text-[11.5px] text-muted-foreground">
                        {s.questions.length} {tt("toc37.questionsWord", lang)} · {s.procedures.length} {tt("toc37.proceduresWord", lang)}
                      </p>
                      <div className="mt-2 flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8"
                          onClick={() => {
                            setActive({ kind: "ai", q: s })
                            window.scrollTo({ top: 0 })
                          }}
                        >
                          {tt("toc37.aiOpen", lang)}
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 text-muted-foreground" onClick={() => deleteAi(s.id)}>
                          <Trash2 className="h-3.5 w-3.5" /> {tt("toc37.aiDelete", lang)}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </TabsContent>
      </Tabs>
    </div>
  )
}
