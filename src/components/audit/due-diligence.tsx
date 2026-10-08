"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { tt } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { getRouteParam, onRouteParams, setRouteParam } from "@/lib/deeplink"
import {
  DD_PROCEDURE_COUNT,
  DD_RED_FLAG_COUNT,
  DD_SCOPES,
  DD_SECTIONS,
  DD_SECTION_COUNT,
  ddSearch,
  ddSectionsOf,
  ddSection,
  type DdTailorResult,
  type DDSection,
  type DDScopeId,
} from "@/lib/dd"
import { PageHeader } from "./shared"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  Banknote,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Circle,
  CreditCard,
  Download,
  Factory,
  FileText,
  Gavel,
  Landmark,
  Lightbulb,
  ListChecks,
  Loader2,
  Network,
  Package,
  PackageCheck,
  Receipt,
  RotateCcw,
  Scale,
  Search,
  Settings,
  Shield,
  Sparkles,
  TrendingUp,
  Trash2,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react"

/** v39 — the Due Diligence hub.
 *
 *  Two tabs:
 *   1. The playbook — 3 scopes (Legal / Operational / Financial). The
 *      financial scope is PER ACCOUNT: one card per account workstream
 *      (clients & receivables, inventory, cash…), every instruction for
 *      that account in one place. Ticks persist per workstream.
 *   2. AI customizer — describe the target + the deal; the AI writes the
 *      deal memo, focus areas, extra instructions (dropped into the right
 *      sections) and extra requests. Applied results live in the playbook.
 *
 *  Deep links: #/dd?scope=financial, #/dd?section=receivables, #/dd?ai=1 */

const ICONS: Record<string, LucideIcon> = {
  landmark: Landmark,
  "file-text": FileText,
  gavel: Gavel,
  lightbulb: Lightbulb,
  "badge-check": CheckCircle2,
  users: Users,
  "building-2": Building2,
  network: Network,
  settings: Settings,
  server: ListChecks,
  truck: Truck,
  shield: Shield,
  activity: Activity,
  "trending-up": TrendingUp,
  "credit-card": CreditCard,
  package: Package,
  banknote: Banknote,
  factory: Factory,
  briefcase: Briefcase,
  "package-check": PackageCheck,
  scale: Scale,
  receipt: Receipt,
}

const PROGRESS_KEY = "auditedge-dd-progress-v39"
const AI_KEY = "auditedge-dd-ai-v39"
const AI_APPLIED_KEY = "auditedge-dd-ai-applied-v39"
const MAX_AI_SAVED = 12

/** sectionId → procId → done */
type DdProgress = Record<string, Record<string, boolean>>

function loadProgress(): DdProgress {
  try {
    const parsed = JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? "{}")
    return typeof parsed === "object" && parsed !== null ? (parsed as DdProgress) : {}
  } catch {
    return {}
  }
}

function loadSavedAi(): DdTailorResult[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(AI_KEY) ?? "[]")
    return Array.isArray(parsed) ? (parsed as DdTailorResult[]) : []
  } catch {
    return []
  }
}

function loadAppliedId(): string | null {
  try {
    return localStorage.getItem(AI_APPLIED_KEY)
  } catch {
    return null
  }
}

const pct = (done: number, total: number) => (total === 0 ? 0 : Math.round((done / total) * 100))

function sectionDone(progress: DdProgress, s: DDSection): number {
  const map = progress[s.id] ?? {}
  return s.procedures.filter((p) => map[p.id]).length
}

/* ------------------------------------------------------------------ */
/* markdown export — the working-paper deliverable                     */
/* ------------------------------------------------------------------ */

function sectionMarkdown(
  s: DDSection,
  progress: DdProgress,
  aiProcs: DdTailorResult["procs"],
  lang: "en" | "ar"
): string {
  const ticks = progress[s.id] ?? {}
  const L = (b: { en: string; ar: string }) => b[lang]
  const lines = [
    `# ${s.code} — ${L(s.title)}`,
    "",
    `*${L(s.scopeNote)}*`,
    "",
    "## " + tt("dd39.whyTitle", lang),
    ...s.why.map((w) => `- ${L(w)}`),
    "",
    ...(s.analytics?.length
      ? ["## " + tt("dd39.analyticsTitle", lang), ...s.analytics.map((a) => `- ${L(a)}`), ""]
      : []),
    "## " + tt("dd39.documentsTitle", lang),
    ...s.documents.map((d, i) => `${i + 1}. ${L(d)}`),
    "",
    "## " + tt("dd39.proceduresTitle", lang),
    ...s.procedures.map((p) => `- [${ticks[p.id] ? "x" : " "}] ${L(p.text)}${p.ref ? ` _(${p.ref})_` : ""}`),
    ...(aiProcs.length
      ? [
          "",
          `> ${tt("dd39.aiBadge", lang)}`,
          ...aiProcs.map((p) => `- ${L(p.text)}${p.ref ? ` _(${p.ref})_` : ""}`),
        ]
      : []),
    "",
    "## " + tt("dd39.redFlagsTitle", lang),
    ...s.redFlags.map(
      (f) => `- ${f.critical ? `**[${tt("dd39.dealBreakerWord", lang)}]** ` : ""}${L(f.text)}`
    ),
    "",
    `_Generated by AuditEdge Academy — Due Diligence ${s.code}_`,
  ]
  return lines.join("\n")
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

/* ------------------------------------------------------------------ */
/* a workstream card                                                   */
/* ------------------------------------------------------------------ */

function SectionCard({
  section,
  done,
  aiCount,
  onOpen,
}: {
  section: DDSection
  done: number
  aiCount: number
  onOpen: () => void
}) {
  const lang = useAppStore((s) => s.lang)
  const L = (b: { en: string; ar: string }) => b[lang]
  const Icon = ICONS[section.icon] ?? ListChecks
  const p = pct(done, section.procedures.length)
  const started = done > 0
  return (
    <button
      onClick={onOpen}
      className="group flex h-full flex-col rounded-xl border border-border/70 bg-card p-4 text-start shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md focus-ring"
    >
      <div className="flex items-start gap-3">
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
            section.scope === "legal"
              ? "border-amber-500/25 bg-amber-500/10 text-amber-600 dark:text-amber-400"
              : section.scope === "ops"
                ? "border-sky-500/25 bg-sky-500/10 text-sky-600 dark:text-sky-400"
                : "border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-semibold text-muted-foreground">{section.code}</span>
            {section.group === "accounts" && (
              <span className="rounded-full bg-emerald-500/10 px-1.5 py-px text-[9.5px] font-semibold text-emerald-600 dark:text-emerald-400">
                {tt("dd39.accountWord", lang)}
              </span>
            )}
            {aiCount > 0 && (
              <span className="rounded-full bg-primary/10 px-1.5 py-px text-[9.5px] font-semibold text-primary">
                +{aiCount} AI
              </span>
            )}
          </div>
          <h3 className="mt-0.5 text-[14.5px] font-semibold leading-snug text-foreground">{L(section.title)}</h3>
        </div>
      </div>
      <p className="mt-2 line-clamp-2 text-[12.5px] leading-relaxed text-muted-foreground">{L(section.scopeNote)}</p>
      <div className="mt-auto pt-3">
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <span className="tabular-nums">{section.procedures.length} {tt("dd39.proceduresWord", lang)}</span>
          <span aria-hidden>·</span>
          <span className="tabular-nums">{section.documents.length} {tt("dd39.documentsWord", lang)}</span>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-0.5 tabular-nums">
            <AlertTriangle className="h-3 w-3 text-amber-500" />
            {section.redFlags.length}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Progress value={p} className="h-1" />
          <span
            className={cn(
              "shrink-0 text-[10.5px] font-medium tabular-nums",
              p === 100 ? "text-emerald-600 dark:text-emerald-400" : started ? "text-primary" : "text-muted-foreground"
            )}
          >
            {p}%
          </span>
        </div>
      </div>
    </button>
  )
}

/* ------------------------------------------------------------------ */
/* the workstream detail — why + analytics + requests + checklist +    */
/* red flags                                                           */
/* ------------------------------------------------------------------ */

function SectionDetail({
  section,
  progress,
  aiProcs,
  onToggle,
  onReset,
  onBack,
  onExport,
}: {
  section: DDSection
  progress: DdProgress
  aiProcs: DdTailorResult["procs"]
  onToggle: (procId: string) => void
  onReset: () => void
  onBack: () => void
  onExport: () => void
}) {
  const lang = useAppStore((s) => s.lang)
  const L = (b: { en: string; ar: string }) => b[lang]
  const ticks = progress[section.id] ?? {}
  const done = section.procedures.filter((p) => ticks[p.id]).length
  const p = pct(done, section.procedures.length)

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <Button variant="outline" size="sm" onClick={onBack} className="mt-0.5 h-8 gap-1.5 px-2.5">
            <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
            <span className="hidden sm:inline">{tt("dd39.back", lang)}</span>
          </Button>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-semibold text-muted-foreground">{section.code}</span>
              <h2 className="font-serif text-[21px] font-semibold leading-tight text-foreground">{L(section.title)}</h2>
              {section.group === "accounts" && (
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10.5px] font-semibold text-emerald-600 dark:text-emerald-400">
                  {tt("dd39.accountWord", lang)}
                </span>
              )}
            </div>
            <p className="mt-1 max-w-3xl text-[13px] leading-relaxed text-muted-foreground">{L(section.scopeNote)}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onExport} className="h-8 gap-1.5">
            <Download className="h-3.5 w-3.5" /> {tt("dd39.exportMd", lang)}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="h-8 gap-1.5 text-muted-foreground"
            disabled={done === 0}
          >
            <RotateCcw className="h-3.5 w-3.5" /> {tt("dd39.reset", lang)}
          </Button>
        </div>
      </div>

      {/* progress bar */}
      <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-secondary/30 px-4 py-2.5">
        <Progress value={p} className="h-1.5 flex-1" />
        <span className="shrink-0 text-[12px] font-medium tabular-nums text-muted-foreground">
          {done}/{section.procedures.length} · {p}% {tt("dd39.progress", lang)}
        </span>
      </div>

      {/* why this matters */}
      <section className="rounded-xl border border-border/70 bg-card p-4">
        <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
          {tt("dd39.whyTitle", lang)}
        </h3>
        <ul className="mt-2.5 space-y-2">
          {section.why.map((w, i) => (
            <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed text-foreground/90">
              <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-primary rtl:rotate-180" />
              <span>{L(w)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* analytics (financial accounts) */}
      {section.analytics && section.analytics.length > 0 && (
        <section className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4">
          <h3 className="flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
            <TrendingUp className="h-3.5 w-3.5" /> {tt("dd39.analyticsTitle", lang)}
          </h3>
          <ul className="mt-2.5 space-y-1.5">
            {section.analytics.map((a, i) => (
              <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-foreground/85">
                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                <span>{L(a)}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* information to request */}
      <section className="rounded-xl border border-border/70 bg-card p-4">
        <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
          {tt("dd39.documentsTitle", lang)}
        </h3>
        <ol className="mt-2.5 grid gap-1.5 sm:grid-cols-2">
          {section.documents.map((d, i) => (
            <li key={i} className="flex gap-2 rounded-lg bg-secondary/40 px-3 py-2 text-[12.5px] leading-relaxed text-foreground/90">
              <span className="shrink-0 font-mono text-[10.5px] font-semibold text-primary">{i + 1}</span>
              <span>{L(d)}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* the instructions — the checklist */}
      <section className="rounded-xl border border-border/70 bg-card p-4">
        <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
          {tt("dd39.proceduresTitle", lang)}
        </h3>
        <ol className="mt-3 space-y-1">
          {section.procedures.map((proc, i) => {
            const on = !!ticks[proc.id]
            return (
              <li key={proc.id}>
                <button
                  onClick={() => onToggle(proc.id)}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-start transition-colors hover:bg-secondary/50 focus-ring",
                    on && "opacity-60"
                  )}
                >
                  {on ? (
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Circle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
                  )}
                  <span className="min-w-0 flex-1">
                    <span className={cn("block text-[13.5px] leading-relaxed", on && "line-through decoration-foreground/40")}>
                      <span className="me-1.5 font-mono text-[10.5px] font-semibold text-muted-foreground">{i + 1}.</span>
                      {L(proc.text)}
                    </span>
                    {proc.ref && (
                      <span className="mt-1 inline-block rounded bg-primary/8 px-1.5 py-px font-mono text-[10px] font-medium text-primary">
                        {proc.ref}
                      </span>
                    )}
                  </span>
                </button>
              </li>
            )
          })}
        </ol>

        {/* AI supplement procedures */}
        {aiProcs.length > 0 && (
          <div className="mt-4 rounded-lg border border-primary/25 bg-primary/[0.04] p-3">
            <div className="flex items-center gap-1.5 text-[12px] font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" /> {tt("dd39.aiBadge", lang)}
            </div>
            <ol className="mt-2 space-y-1">
              {aiProcs.map((proc, i) => (
                <li key={proc.id} className="flex gap-2.5 px-1 py-1 text-start text-[13px] leading-relaxed text-foreground/90">
                  <span className="shrink-0 font-mono text-[10.5px] font-semibold text-primary">AI-{i + 1}</span>
                  <span>
                    {L(proc.text)}
                    {proc.ref && <span className="ms-1.5 font-mono text-[10px] text-muted-foreground">({proc.ref})</span>}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}
      </section>

      {/* red flags */}
      <section className="rounded-xl border border-amber-500/25 bg-amber-500/[0.04] p-4">
        <h3 className="flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
          <AlertTriangle className="h-3.5 w-3.5" /> {tt("dd39.redFlagsTitle", lang)}
        </h3>
        <ul className="mt-2.5 space-y-2">
          {section.redFlags.map((f, i) => (
            <li
              key={i}
              className={cn(
                "flex gap-2.5 rounded-lg px-3 py-2 text-[13px] leading-relaxed",
                f.critical
                  ? "border border-red-500/30 bg-red-500/[0.06] text-foreground"
                  : "bg-secondary/40 text-foreground/85"
              )}
            >
              <span className="shrink-0 pt-px">
                {f.critical ? (
                  <Badge variant="destructive" className="h-[18px] rounded px-1.5 text-[9.5px] font-semibold">
                    {tt("dd39.dealBreakerWord", lang)}
                  </Badge>
                ) : (
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 text-amber-500" />
                )}
              </span>
              <span>{L(f.text)}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* the AI customizer tab                                               */
/* ------------------------------------------------------------------ */

type DealKind = "acquisition" | "investment" | "lending" | "partnership"
type SizeKind = "sme" | "mid" | "large"

const DEAL_KINDS: { id: DealKind; labelKey: string }[] = [
  { id: "acquisition", labelKey: "dd39.aiDealAcquisition" },
  { id: "investment", labelKey: "dd39.aiDealInvestment" },
  { id: "lending", labelKey: "dd39.aiDealLending" },
  { id: "partnership", labelKey: "dd39.aiDealPartnership" },
]
const SIZE_KINDS: { id: SizeKind; labelKey: string }[] = [
  { id: "sme", labelKey: "dd39.aiSizeSme" },
  { id: "mid", labelKey: "dd39.aiSizeMid" },
  { id: "large", labelKey: "dd39.aiSizeLarge" },
]

function AiPanel({
  saved,
  appliedId,
  onApply,
  onDelete,
}: {
  saved: DdTailorResult[]
  appliedId: string | null
  onApply: (id: string | null) => void
  onDelete: (id: string) => void
}) {
  const lang = useAppStore((s) => s.lang)
  const L = (b: { en: string; ar: string }) => b[lang]
  const [deal, setDeal] = useState<DealKind>("acquisition")
  const [size, setSize] = useState<SizeKind>("mid")
  const [target, setTarget] = useState("")
  const [concerns, setConcerns] = useState("")
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(false)
  const [result, setResult] = useState<DdTailorResult | null>(null)
  const resultRef = useRef<HTMLDivElement>(null)
  /* v40.1 — the main engine (keyless GLM-5.3-Flash on LLM7) is healthy?
   * Show the honest "community engines only" notice ONLY when every route
   * is down (llm7 unreachable AND no built-in engine AND no optional key) —
   * on a normal zero-config Vercel deploy llm7 is up, so users see nothing. */
  const [poolOnly, setPoolOnly] = useState(false)

  useEffect(() => {
    let alive = true
    fetch("/api/ai/status")
      .then((r) => (r.ok ? r.json() : null))
      .then((s: { key?: boolean; workspace?: boolean; llm7?: boolean } | null) => {
        if (alive && s && !s.llm7 && !s.key && !s.workspace) setPoolOnly(true)
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [])

  const generate = async () => {
    if (!target.trim() || busy) return
    setBusy(true)
    setError(false)
    setResult(null)
    try {
      const res = await fetch("/api/ai/dd-generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deal, size, target, concerns }),
      })
      const data = (await res.json()) as { tailor?: DdTailorResult; error?: string }
      if (!res.ok || !data.tailor) throw new Error(data.error ?? "failed")
      setResult(data.tailor)
      setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80)
    } catch {
      setError(true)
    } finally {
      setBusy(false)
    }
  }

  /** keep a generated result (id = timestamp) — returns the new id so the
   *  apply flow can use it in the same tick (the closure's `result` still
   *  carries the empty pre-save id). */
  const saveIt = (): string | null => {
    if (!result) return null
    if (result.id) return result.id
    const withId: DdTailorResult = { ...result, id: `dd-${Date.now()}` }
    window.dispatchEvent(new CustomEvent("dd-ai-saved", { detail: withId }))
    setResult(withId)
    return withId.id
  }

  const segBtn = (active: boolean) =>
    cn(
      "rounded-lg border px-3 py-1.5 text-[12.5px] font-medium transition-colors focus-ring",
      active
        ? "border-primary/50 bg-primary/10 text-primary"
        : "border-border/70 bg-card text-muted-foreground hover:text-foreground"
    )

  return (
    <div className="space-y-5">
      {/* intro */}
      <section className="rounded-xl border border-primary/20 bg-primary/[0.04] p-4">
        <h3 className="flex items-center gap-1.5 text-[14px] font-semibold text-foreground">
          <Sparkles className="h-4 w-4 text-primary" /> {tt("dd39.aiIntroTitle", lang)}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{tt("dd39.aiIntro", lang)}</p>
      </section>

      {/* keyless deployment notice (v39.0.2) */}
      {poolOnly && (
        <section className="rounded-xl border border-amber-500/40 bg-amber-500/[0.07] p-4">
          <h3 className="flex items-center gap-1.5 text-[13.5px] font-semibold text-amber-600 dark:text-amber-400">
            <AlertTriangle className="h-4 w-4" /> {tt("dd39.aiEngineHintTitle", lang)}
          </h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{tt("dd39.aiEngineHint", lang)}</p>
        </section>
      )}

      {/* the form */}
      <section className="rounded-xl border border-border/70 bg-card p-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[12px] font-semibold text-foreground">{tt("dd39.aiDeal", lang)}</label>
            <div className="flex flex-wrap gap-1.5">
              {DEAL_KINDS.map((k) => (
                <button key={k.id} type="button" onClick={() => setDeal(k.id)} className={segBtn(deal === k.id)}>
                  {tt(k.labelKey, lang)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-[12px] font-semibold text-foreground">{tt("dd39.aiSize", lang)}</label>
            <div className="flex flex-wrap gap-1.5">
              {SIZE_KINDS.map((k) => (
                <button key={k.id} type="button" onClick={() => setSize(k.id)} className={segBtn(size === k.id)}>
                  {tt(k.labelKey, lang)}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1.5 block text-[12px] font-semibold text-foreground">{tt("dd39.aiTarget", lang)}</label>
          <Textarea
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder={tt("dd39.aiTargetPh", lang)}
            rows={3}
            className="text-[13.5px]"
            dir="auto"
          />
        </div>
        <div className="mt-4">
          <label className="mb-1.5 block text-[12px] font-semibold text-foreground">{tt("dd39.aiConcerns", lang)}</label>
          <Textarea
            value={concerns}
            onChange={(e) => setConcerns(e.target.value)}
            placeholder={tt("dd39.aiConcernsPh", lang)}
            rows={3}
            className="text-[13.5px]"
            dir="auto"
          />
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Button onClick={() => void generate()} disabled={busy || !target.trim()} className="gap-2">
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            {busy ? tt("dd39.aiGenerating", lang) : tt("dd39.aiGenerate", lang)}
          </Button>
          {busy && <p className="text-[12px] text-muted-foreground">{tt("dd39.aiGeneratingNote", lang)}</p>}
        </div>
        {error && <p className="mt-3 text-[13px] font-medium text-red-500">{tt("dd39.aiFailed", lang)}</p>}
      </section>

      {/* the fresh result */}
      {result && (
        <div ref={resultRef}>
          <AiResultCard
            result={result}
            applied={result.id === appliedId}
            onApply={() => {
              if (result.id && result.id === appliedId) {
                onApply(null)
              } else {
                const id = result.id || saveIt()
                if (id) onApply(id)
              }
            }}
            onSave={() => void saveIt()}
          />
        </div>
      )}

      {/* saved list */}
      <section>
        <h3 className="mb-2 text-[14px] font-semibold text-foreground">{tt("dd39.aiMyTitle", lang)}</h3>
        {saved.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border p-4 text-[13px] text-muted-foreground">
            {tt("dd39.aiMyEmpty", lang)}
          </p>
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {saved.map((s) => (
              <AiResultCard
                key={s.id}
                result={s}
                applied={s.id === appliedId}
                onApply={() => onApply(s.id === appliedId ? null : s.id)}
                onDelete={() => onDelete(s.id)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

function AiResultCard({
  result,
  applied,
  onApply,
  onDelete,
  onSave,
}: {
  result: DdTailorResult
  applied: boolean
  onApply: () => void
  onDelete?: () => void
  onSave?: () => void
}) {
  const lang = useAppStore((s) => s.lang)
  const L = (b: { en: string; ar: string }) => b[lang]
  const bySection = new Map<string, typeof result.procs>()
  for (const p of result.procs) {
    const list = bySection.get(p.sectionId) ?? []
    list.push(p)
    bySection.set(p.sectionId, list)
  }

  return (
    <section className="rounded-xl border border-border/70 bg-card p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-[12px] font-semibold uppercase tracking-wide text-primary">
              {tt("dd39.aiMemoTitle", lang)}
            </span>
            <span className="rounded bg-secondary px-1.5 py-px font-mono text-[10px] text-muted-foreground">
              {result.model}
            </span>
            {applied && (
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                {tt("dd39.aiApplied", lang)}
              </span>
            )}
          </div>
          <p className="mt-2 max-w-3xl whitespace-pre-line text-[13.5px] leading-relaxed text-foreground/90">
            {L(result.summary)}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {onSave && !applied && (
            <Button variant="outline" size="sm" className="h-8" onClick={onSave}>
              {tt("dd39.save", lang)}
            </Button>
          )}
          <Button variant={applied ? "secondary" : "default"} size="sm" className="h-8 gap-1.5" onClick={onApply}>
            <CheckCircle2 className="h-3.5 w-3.5" />
            {applied ? tt("dd39.aiApplied", lang) : tt("dd39.aiApply", lang)}
          </Button>
          {onDelete && (
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground" onClick={onDelete} aria-label={tt("dd39.aiDelete", lang)}>
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          )}
        </div>
      </div>

      {result.focus.length > 0 && (
        <div className="mt-4">
          <h4 className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
            {tt("dd39.aiFocusTitle", lang)}
          </h4>
          <ul className="mt-2 space-y-1.5">
            {result.focus.map((f, i) => (
              <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-foreground/90">
                <ChevronRight className="mt-1 h-3.5 w-3.5 shrink-0 text-primary rtl:rotate-180" />
                <span>{L(f)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {result.procs.length > 0 && (
        <div className="mt-4">
          <h4 className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
            {tt("dd39.aiProcsTitle", lang)}
          </h4>
          <div className="mt-2 space-y-3">
            {[...bySection.entries()].map(([sectionId, procs]) => {
              const section = ddSection(sectionId)
              if (!section) return null
              return (
                <div key={sectionId} className="rounded-lg border border-border/60 bg-secondary/30 p-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10.5px] font-semibold text-muted-foreground">{section.code}</span>
                    <span className="text-[12.5px] font-semibold text-foreground">{L(section.title)}</span>
                  </div>
                  <ol className="mt-1.5 space-y-1">
                    {procs.map((p, i) => (
                      <li key={p.id} className="flex gap-2 text-[13px] leading-relaxed text-foreground/90">
                        <span className="shrink-0 font-mono text-[10.5px] font-semibold text-primary">AI-{i + 1}</span>
                        <span>
                          {L(p.text)}
                          {p.ref && <span className="ms-1.5 font-mono text-[10px] text-muted-foreground">({p.ref})</span>}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {result.requests.length > 0 && (
        <div className="mt-4">
          <h4 className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
            {tt("dd39.aiRequestsTitle", lang)}
          </h4>
          <ol className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {result.requests.map((r, i) => (
              <li key={i} className="flex gap-2 rounded-lg bg-secondary/40 px-3 py-2 text-[12.5px] leading-relaxed text-foreground/90">
                <span className="shrink-0 font-mono text-[10.5px] font-semibold text-primary">{i + 1}</span>
                <span>{L(r)}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* the hub                                                             */
/* ------------------------------------------------------------------ */

export function DueDiligence() {
  const lang = useAppStore((s) => s.lang)
  /* state hydrates through lazy initializers — pure localStorage/route reads
   * (both guards are SSR-safe: the loaders try/catch, the route helpers check
   * typeof window) — so no hydration effect is needed at all. */
  const [tab, setTab] = useState<"library" | "ai">(() =>
    getRouteParam("ai") === "1" ? "ai" : "library"
  )
  const [scope, setScope] = useState<DDScopeId>(() => {
    const p = getRouteParam("scope")
    return p === "ops" || p === "financial" ? p : "legal"
  })
  const [sectionId, setSectionId] = useState<string | null>(() => {
    const sec = getRouteParam("section")
    return sec && ddSection(sec) ? sec : null
  })
  const [query, setQuery] = useState("")
  const [progress, setProgress] = useState<DdProgress>(() => loadProgress())
  const [savedAi, setSavedAi] = useState<DdTailorResult[]>(() => loadSavedAi())
  const [appliedId, setAppliedId] = useState<string | null>(() => loadAppliedId())

  /* back/forward between deep links (#/dd?scope=…&section=… vs ?ai=1) — the
   * subscription is the only place state is set from the route, which is the
   * pattern the react-hooks lint rules want. */
  useEffect(() => {
    return onRouteParams((params) => {
      const scopeParam = params.get("scope")
      if (scopeParam === "legal" || scopeParam === "ops" || scopeParam === "financial") {
        setScope(scopeParam)
      }
      const sec = params.get("section")
      const valid = sec ? ddSection(sec) : undefined
      setSectionId(valid ? sec : null)
      setTab(params.get("ai") === "1" ? "ai" : "library")
    })
  }, [])

  /* the applied supplement's procedures, keyed by section */
  const applied = useMemo(() => savedAi.find((s) => s.id === appliedId) ?? null, [savedAi, appliedId])
  const aiProcsBySection = useMemo(() => {
    const map = new Map<string, DdTailorResult["procs"]>()
    if (!applied) return map
    for (const p of applied.procs) {
      const list = map.get(p.sectionId) ?? []
      list.push(p)
      map.set(p.sectionId, list)
    }
    return map
  }, [applied])

  /* persist helpers */
  const persistProgress = useCallback((next: DdProgress) => {
    setProgress(next)
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(next))
    } catch {}
  }, [])
  const toggleProc = useCallback(
    (sid: string, procId: string) => {
      setProgress((prev) => {
        const section = { ...(prev[sid] ?? {}) }
        if (section[procId]) delete section[procId]
        else section[procId] = true
        const next = { ...prev, [sid]: section }
        try {
          localStorage.setItem(PROGRESS_KEY, JSON.stringify(next))
        } catch {}
        return next
      })
    },
    []
  )
  const resetSection = useCallback((sid: string) => {
    if (!window.confirm(tt("dd39.resetConfirm", useAppStore.getState().lang))) return
    setProgress((prev) => {
      const next = { ...prev }
      delete next[sid]
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(next))
      } catch {}
      return next
    })
  }, [])

  /* AI customizer: listen for freshly kept results */
  useEffect(() => {
    const onSave = (e: Event) => {
      const r = (e as CustomEvent<DdTailorResult>).detail
      setSavedAi((prev) => {
        const next = [r, ...prev].slice(0, MAX_AI_SAVED)
        try {
          localStorage.setItem(AI_KEY, JSON.stringify(next))
        } catch {}
        return next
      })
    }
    window.addEventListener("dd-ai-saved", onSave)
    return () => window.removeEventListener("dd-ai-saved", onSave)
  }, [])

  const applyAi = useCallback((id: string | null) => {
    setAppliedId(id)
    try {
      if (id) localStorage.setItem(AI_APPLIED_KEY, id)
      else localStorage.removeItem(AI_APPLIED_KEY)
    } catch {}
  }, [])

  const deleteAi = useCallback((id: string) => {
    setSavedAi((prev) => {
      const next = prev.filter((s) => s.id !== id)
      try {
        localStorage.setItem(AI_KEY, JSON.stringify(next))
      } catch {}
      return next
    })
    setAppliedId((current) => {
      if (current !== id) return current
      try {
        localStorage.removeItem(AI_APPLIED_KEY)
      } catch {}
      return null
    })
  }, [])

  const openSection = (id: string) => {
    setSectionId(id)
    setRouteParam("section", id)
    window.scrollTo({ top: 0 })
  }
  const closeSection = () => {
    setSectionId(null)
    setRouteParam("section", null)
  }
  const switchScope = (s: DDScopeId) => {
    setScope(s)
    setSectionId(null)
    setRouteParam("scope", s)
    setRouteParam("section", null)
  }
  const switchTab = (t: "library" | "ai") => {
    setTab(t)
    setRouteParam("ai", t === "ai" ? "1" : null)
    if (t === "ai") setSectionId(null)
  }

  /* search across all scopes */
  const searchHits = useMemo(() => (query.trim().length >= 2 ? new Set(ddSearch(query)) : null), [query])

  const visibleSections = useMemo(() => {
    if (searchHits) return DD_SECTIONS.filter((s) => searchHits.has(s.id))
    return ddSectionsOf(scope)
  }, [scope, searchHits])

  const openSectionData = sectionId ? ddSection(sectionId) : undefined

  const exportSection = (s: DDSection) => {
    const text = sectionMarkdown(s, progress, aiProcsBySection.get(s.id) ?? [], lang)
    downloadMarkdown(`due-diligence-${s.code.toLowerCase()}-${s.id}.md`, text)
  }
  const exportScope = () => {
    const L = (b: { en: string; ar: string }) => b[lang]
    const meta = DD_SCOPES.find((m) => m.id === scope)!
    const parts = [
      `# Due Diligence — ${L(meta.title)}`,
      "",
      `*${L(meta.blurb)}*`,
      "",
      ...ddSectionsOf(scope).map(
        (s) => sectionMarkdown(s, progress, aiProcsBySection.get(s.id) ?? [], lang) + "\n\n---\n\n"
      ),
      `_Generated by AuditEdge Academy — Due Diligence (${L(meta.title)})_`,
    ]
    downloadMarkdown(`due-diligence-${scope}.md`, parts.join("\n"))
  }

  const scopeCount = (s: DDScopeId) => ddSectionsOf(s).length

  return (
    <div className="space-y-6">
      <PageHeader
        title={tt("dd39.title", lang)}
        sub={tt("dd39.subtitle", lang)}
        action={
          tab === "library" && !openSectionData ? (
            <Button variant="outline" size="sm" onClick={exportScope} className="gap-1.5">
              <Download className="h-3.5 w-3.5" /> {tt("dd39.exportScopeMd", lang)}
            </Button>
          ) : undefined
        }
      />

      {/* headline numbers */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12.5px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <ListChecks className="h-3.5 w-3.5 text-primary" />
          <b className="text-foreground">{DD_SECTION_COUNT}</b> {tt("dd39.workstreamsWord", lang)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <TrendingUp className="h-3.5 w-3.5 text-primary" />
          <b className="text-foreground">12</b> {tt("dd39.accountsWord", lang)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
          <b className="text-foreground">{DD_PROCEDURE_COUNT}</b> {tt("dd39.proceduresWord", lang)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
          <b className="text-foreground">{DD_RED_FLAG_COUNT}</b> {tt("dd39.redFlagsWord", lang)}
        </span>
      </div>

      <Tabs value={tab} onValueChange={(v) => switchTab(v as "library" | "ai")}>
        <TabsList>
          <TabsTrigger value="library" className="gap-1.5">
            <ListChecks className="h-3.5 w-3.5" /> {tt("dd39.libraryTab", lang)}
          </TabsTrigger>
          <TabsTrigger value="ai" className="gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> {tt("dd39.aiTab", lang)}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="library" className="mt-4 space-y-5">
          {openSectionData ? (
            <SectionDetail
              section={openSectionData}
              progress={progress}
              aiProcs={aiProcsBySection.get(openSectionData.id) ?? []}
              onToggle={(procId) => toggleProc(openSectionData.id, procId)}
              onReset={() => resetSection(openSectionData.id)}
              onBack={closeSection}
              onExport={() => exportSection(openSectionData)}
            />
          ) : (
            <>
              {/* how it works */}
              <details className="group rounded-xl border border-border/70 bg-card px-4 py-3">
                <summary className="flex cursor-pointer list-none items-center gap-2 text-[13.5px] font-semibold text-foreground">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[11px] text-primary">?</span>
                  {tt("dd39.howTitle", lang)}
                </summary>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{tt("dd39.howBody", lang)}</p>
              </details>

              {/* search */}
              <div className="relative">
                <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={tt("dd39.search", lang)}
                  className="ps-9 text-[13.5px]"
                />
              </div>

              {/* scope tabs (hidden while searching) */}
              {!searchHits && (
                <>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {DD_SCOPES.map((m) => {
                      const Icon = ICONS[m.icon] ?? ListChecks
                      const active = scope === m.id
                      return (
                        <button
                          key={m.id}
                          onClick={() => switchScope(m.id)}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[13px] font-medium transition-colors focus-ring",
                            active
                              ? "border-primary/50 bg-primary/10 text-primary"
                              : "border-border/70 bg-card text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {m.title[lang]}
                          <span className={cn("rounded-full px-1.5 text-[10.5px] tabular-nums", active ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground")}>
                            {scopeCount(m.id)}
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  {/* the scope blurb */}
                  {(() => {
                    const meta = DD_SCOPES.find((m) => m.id === scope)!
                    return (
                      <p className="rounded-xl border border-border/60 bg-secondary/30 px-4 py-3 text-[13px] leading-relaxed text-muted-foreground">
                        {meta.blurb[lang]}
                      </p>
                    )
                  })()}
                </>
              )}

              {/* the cards */}
              {visibleSections.length === 0 ? (
                <p className="rounded-xl border border-dashed border-border p-6 text-center text-[13px] text-muted-foreground">
                  {tt("dd39.noResults", lang)}
                </p>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {visibleSections.map((s) => (
                    <SectionCard
                      key={s.id}
                      section={s}
                      done={sectionDone(progress, s)}
                      aiCount={aiProcsBySection.get(s.id)?.length ?? 0}
                      onOpen={() => openSection(s.id)}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </TabsContent>

        <TabsContent value="ai" className="mt-4">
          <AiPanel saved={savedAi} appliedId={appliedId} onApply={applyAi} onDelete={deleteAi} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
