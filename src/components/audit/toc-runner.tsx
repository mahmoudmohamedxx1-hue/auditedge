"use client"

import { useMemo, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { tt } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { evaluateToc, tocVerdictExplanation, type TocVerdict } from "@/lib/toc/scoring"
import { TOC_DOMAINS, type TocAnswerMap, type TocAnswer, type TocQuestion } from "@/lib/toc/types"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Check,
  Download,
  Minus,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  X,
  type LucideIcon,
} from "lucide-react"

/** v37 — the questionnaire runner + verdict view shared by every industry
 *  questionnaire and every AI-generated one. Pure presentational flow:
 *  answers live in the parent (persisted per question id), the evaluation
 *  is recomputed from props on every render. */

export type TocProcedureView = { title: string; detail?: string; type?: string }

const VERDICT_STYLE: Record<TocVerdict, { ring: string; text: string; bg: string; icon: LucideIcon }> = {
  strong: {
    ring: "border-emerald-500/40",
    text: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    icon: ShieldCheck,
  },
  moderate: {
    ring: "border-amber-500/40",
    text: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
    icon: TriangleAlert,
  },
  weak: {
    ring: "border-red-500/40",
    text: "text-red-600 dark:text-red-400",
    bg: "bg-red-500/10",
    icon: TriangleAlert,
  },
}

export function tocDomainLabel(domain: string, lang: "en" | "ar"): string {
  switch (domain) {
    case "control-environment":
      return tt("toc37.domainCE", lang)
    case "risk-assessment":
      return tt("toc37.domainRA", lang)
    case "control-activities":
      return tt("toc37.domainCA", lang)
    case "info-communication":
      return tt("toc37.domainIC", lang)
    case "monitoring":
      return tt("toc37.domainMO", lang)
    default:
      return tt("toc37.domainIT", lang)
  }
}

const domainLabel = tocDomainLabel

/* ------------------------------------------------------------------ */
/* one question                                                        */
/* ------------------------------------------------------------------ */

function QuestionCard({
  q,
  index,
  answer,
  isCore,
  onAnswer,
}: {
  q: TocQuestion
  index: number
  answer: TocAnswer | undefined
  isCore: boolean
  onAnswer: (id: string, a: TocAnswer) => void
}) {
  const lang = useAppStore((s) => s.lang)
  const [openHint, setOpenHint] = useState(false)
  const options: { value: TocAnswer; label: string; on: string }[] = [
    { value: "yes", label: tt("toc37.yes", lang), on: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/40" },
    { value: "no", label: tt("toc37.no", lang), on: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/40" },
    { value: "na", label: tt("toc37.na", lang), on: "bg-secondary border-foreground/30 text-foreground" },
  ]
  return (
    <article className="rounded-2xl border bg-card p-4 shadow-soft sm:p-5">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-[11px] font-semibold tabular-nums text-muted-foreground">
          {index}
        </span>
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
            {q.critical && (
              <span className="rounded-full bg-red-500/10 px-2 py-px text-[10.5px] font-semibold text-red-600 dark:text-red-400">
                {tt("toc37.criticalTag", lang)}
              </span>
            )}
            {isCore ? (
              <span className="rounded-full bg-primary/10 px-2 py-px text-[10.5px] font-medium text-primary">
                {tt("toc37.coreBadge", lang)}
              </span>
            ) : (
              <span className="rounded-full bg-secondary px-2 py-px text-[10.5px] font-medium text-muted-foreground">
                {tt("toc37.moduleBadge", lang)}
              </span>
            )}
            <span
              className="ms-auto flex items-center gap-1"
              title={tt("toc37.weightLabel", lang)}
              aria-label={`${tt("toc37.weightLabel", lang)}: ${q.weight}/3`}
            >
              {[1, 2, 3].map((d) => (
                <span
                  key={d}
                  className={cn("h-1.5 w-1.5 rounded-full", d <= q.weight ? "bg-primary/70" : "bg-muted-foreground/20")}
                />
              ))}
            </span>
          </div>
          <p className="text-[15px] leading-relaxed text-foreground">{q.q}</p>
          <button
            onClick={() => setOpenHint((v) => !v)}
            className="mt-2 text-[12.5px] font-medium text-primary/90 transition-colors hover:text-primary focus-ring rounded"
            aria-expanded={openHint}
          >
            {tt("toc37.probe", lang)} {openHint ? "▾" : "▸"}
          </button>
          {openHint && (
            <p className="mt-1.5 rounded-xl border border-dashed bg-secondary/30 p-3 text-[13px] leading-relaxed text-muted-foreground">
              {q.hint}
            </p>
          )}
          <div className="mt-3.5 flex gap-1.5" role="radiogroup" aria-label={q.q}>
            {options.map((o) => {
              const selected = answer === o.value
              return (
                <button
                  key={o.value}
                  role="radio"
                  aria-checked={selected}
                  onClick={() => onAnswer(q.id, o.value)}
                  className={cn(
                    "h-9 min-w-[64px] flex-1 rounded-lg border text-[13px] font-medium transition-all focus-ring sm:flex-none sm:px-4",
                    selected
                      ? o.on
                      : "border-border bg-transparent text-muted-foreground hover:border-foreground/25 hover:text-foreground"
                  )}
                >
                  {selected && o.value === "yes" && <Check className="me-1 inline h-3.5 w-3.5" aria-hidden />}
                  {selected && o.value === "no" && <X className="me-1 inline h-3.5 w-3.5" aria-hidden />}
                  {selected && o.value === "na" && <Minus className="me-1 inline h-3.5 w-3.5" aria-hidden />}
                  {o.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}

/* ------------------------------------------------------------------ */
/* the runner                                                          */
/* ------------------------------------------------------------------ */

export function TocRunner({
  title,
  subtitle,
  risks,
  procedures,
  questions,
  answers,
  coreIds,
  badge,
  onAnswer,
  onReset,
  onBack,
  onRegenerate,
}: {
  title: string
  subtitle: string
  risks: string[]
  procedures: TocProcedureView[]
  questions: TocQuestion[]
  answers: TocAnswerMap
  coreIds: Set<string>
  badge?: string
  onAnswer: (id: string, a: TocAnswer) => void
  onReset: () => void
  onBack: () => void
  onRegenerate?: () => void
}) {
  const lang = useAppStore((s) => s.lang)
  const sidebarCollapsed = useAppStore((s) => s.sidebarCollapsed)
  const [stage, setStage] = useState<"run" | "results">("run")

  const answered = questions.filter((q) => answers[q.id]).length
  const complete = answered === questions.length
  const evaluation = useMemo(
    () => evaluateToc(questions, answers),
    [questions, answers]
  )

  const grouped = useMemo(() => {
    return TOC_DOMAINS.map((d) => ({
      domain: d.id,
      items: questions
        .map((q, i) => ({ q, i }))
        .filter(({ q }) => q.domain === d.id),
    })).filter((g) => g.items.length > 0)
  }, [questions])

  const exportMarkdown = () => {
    const dom = (d: string) => domainLabel(d, "en")
    const lines: string[] = [
      `# Test of Control — ${title}`,
      "",
      subtitle,
      "",
      `**Key risk areas:** ${risks.join(" · ")}`,
      "",
      `**Verdict: ${evaluation.verdict.toUpperCase()} — ${evaluation.pct}%** (${evaluation.earnedWeight}/${evaluation.possibleWeight} weighted points)`,
      "",
      tocVerdictExplanation(evaluation.verdict),
      "",
      "## Answers",
      "",
      "| # | Component | Question | Answer | Weight | Critical |",
      "|---|-----------|----------|--------|--------|----------|",
      ...questions.map((q, i) =>
        `| ${i + 1} | ${dom(q.domain)} | ${q.q.replace(/\|/g, "/")} | ${answers[q.id]?.toUpperCase() ?? "—"} | ${q.weight} | ${q.critical ? "yes" : ""} |`
      ),
      "",
      "## Component scores",
      "",
      ...evaluation.domainScores
        .filter((d) => d.possible > 0 || d.answered > 0)
        .map((d) => `- **${dom(d.domain)}:** ${d.pct}% (${d.earned}/${d.possible})`),
      "",
      ...(evaluation.failedCriticals.length
        ? ["## Critical control failures", "", ...evaluation.failedCriticals.map((q) => `- ${q.q}`), ""]
        : []),
      ...(evaluation.gaps.length
        ? ["## Control gaps (answered no)", "", ...evaluation.gaps.map((q) => `- ${q.q}\n  - Probe: ${q.hint}`), ""]
        : []),
      "## Corroborating procedures",
      "",
      ...procedures.map((p) => `- ${p.type ? `*(${p.type})* ` : ""}${p.title}${p.detail ? ` — ${p.detail}` : ""}`),
      "",
      `_Generated by AuditEdge Academy — Test of Control_`,
    ]
    const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `test-of-control-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 48)}.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  /* ------------------------------ results ------------------------------ */
  if (stage === "results" && complete) {
    const v = evaluation.verdict
    const style = VERDICT_STYLE[v]
    const VIcon = style.icon
    return (
      <div className="space-y-5">
        {/* verdict banner */}
        <section className={cn("rounded-2xl border p-6 sm:p-8", style.ring, style.bg)}>
          <div className="flex flex-wrap items-center gap-4">
            <span className={cn("flex h-12 w-12 items-center justify-center rounded-2xl bg-background/60", style.text)}>
              <VIcon className="h-6 w-6" />
            </span>
            <div className="min-w-0 flex-1">
              <p className={cn("font-serif text-2xl font-semibold", style.text)}>
                {v === "strong" ? tt("toc37.verdictStrong", lang) : v === "moderate" ? tt("toc37.verdictModerate", lang) : tt("toc37.verdictWeak", lang)}
                <span className="ms-3 text-3xl tabular-nums">{evaluation.pct}%</span>
              </p>
              <p className="mt-1 text-[13.5px] leading-relaxed text-foreground/80">{tocVerdictExplanation(v)}</p>
            </div>
          </div>
        </section>

        {/* domain bars */}
        <section className="rounded-2xl border bg-card p-5 shadow-soft sm:p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{tt("toc37.domainScores", lang)}</h3>
          <div className="mt-4 space-y-3.5">
            {evaluation.domainScores
              .filter((d) => d.possible > 0 || d.answered > 0)
              .map((d) => (
                <div key={d.domain} className="flex items-center gap-3">
                  <span className="w-36 shrink-0 truncate text-[13px] font-medium text-foreground/90 sm:w-48">
                    {domainLabel(d.domain, lang)}
                  </span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all",
                        d.pct >= 80 ? "bg-emerald-500" : d.pct >= 50 ? "bg-amber-500" : "bg-red-500"
                      )}
                      style={{ width: `${d.pct}%` }}
                    />
                  </div>
                  <span className="w-12 shrink-0 text-end text-[13px] font-semibold tabular-nums text-foreground/80">{d.pct}%</span>
                </div>
              ))}
          </div>
        </section>

        {/* critical failures */}
        {evaluation.failedCriticals.length > 0 && (
          <section className="rounded-2xl border border-red-500/40 bg-red-500/[0.06] p-5 sm:p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-red-600 dark:text-red-400">
              <TriangleAlert className="h-4 w-4" /> {tt("toc37.criticalFailures", lang)}
            </h3>
            <ul className="mt-3 space-y-2.5">
              {evaluation.failedCriticals.map((q) => (
                <li key={q.id} className="text-[14px] leading-relaxed text-foreground/90">
                  <span className="me-2 rounded bg-red-500/15 px-1.5 py-px text-[11px] font-semibold text-red-600 dark:text-red-400">
                    {tt("toc37.criticalTag", lang)}
                  </span>
                  {q.q}
                  <p className="mt-1 ps-1 text-[12.5px] text-muted-foreground">{q.hint}</p>
                </li>
              ))}
            </ul>
          </section>
        )}
        {evaluation.failedCriticals.length === 0 && (
          <p className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.06] p-4 text-[13.5px] text-emerald-700 dark:text-emerald-400">
            {tt("toc37.noCritical", lang)}
          </p>
        )}

        {/* gaps */}
        <section className="rounded-2xl border bg-card p-5 shadow-soft sm:p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{tt("toc37.gaps", lang)}</h3>
          {evaluation.gaps.length === 0 ? (
            <p className="mt-3 text-[13.5px] text-muted-foreground">{tt("toc37.noGaps", lang)}</p>
          ) : (
            <ul className="mt-3 space-y-2.5">
              {evaluation.gaps.map((q) => (
                <li key={q.id} className="text-[14px] leading-relaxed text-foreground/90">
                  • {q.q}
                  <p className="mt-1 ps-3 text-[12.5px] text-muted-foreground">{q.hint}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* procedures */}
        <section className="rounded-2xl border bg-card p-5 shadow-soft sm:p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{tt("toc37.proceduresTitle", lang)}</h3>
          <ul className="mt-3 space-y-2.5">
            {procedures.map((p, i) => (
              <li key={i} className="text-[14px] leading-relaxed text-foreground/90">
                {p.type && (
                  <span className="me-2 rounded bg-primary/10 px-1.5 py-px text-[11px] font-semibold uppercase text-primary">{p.type}</span>
                )}
                {p.title}
                {p.detail && <span className="block text-[12.5px] text-muted-foreground">{p.detail}</span>}
              </li>
            ))}
          </ul>
        </section>

        {/* actions */}
        <div className="flex flex-wrap gap-2.5">
          <Button variant="outline" onClick={() => setStage("run")}>
            <ArrowLeft className="h-4 w-4" /> {tt("toc37.changeAnswers", lang)}
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              onReset()
              setStage("run")
            }}
          >
            <RotateCcw className="h-4 w-4" /> {tt("toc37.retake", lang)}
          </Button>
          <Button onClick={exportMarkdown}>
            <Download className="h-4 w-4" /> {tt("toc37.exportMd", lang)}
          </Button>
          {onRegenerate && (
            <Button variant="outline" onClick={onRegenerate}>
              <Sparkles className="h-4 w-4" /> {tt("toc37.aiRegenerate", lang)}
            </Button>
          )}
          <Button variant="ghost" onClick={onBack}>
            {tt("toc37.back", lang)}
          </Button>
        </div>
      </div>
    )
  }

  /* ------------------------------ run ------------------------------ */
  return (
    <div className="space-y-5 pb-24">
      {/* header */}
      <section className="rounded-2xl border bg-card p-5 shadow-soft sm:p-6">
        <div className="flex items-start gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            aria-label={tt("toc37.back", lang)}
            className="mt-0.5 h-8 px-2.5"
          >
            <ArrowLeft className="h-4 w-4 rtl:-scale-x-100" />
          </Button>
          <div className="min-w-0 flex-1">
            {badge && (
              <span className="mb-1.5 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-px text-[11px] font-semibold text-primary">
                <Sparkles className="h-3 w-3" /> {badge}
              </span>
            )}
            <h1 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-foreground">{title}</h1>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">{subtitle}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {risks.slice(0, 6).map((r) => (
                <span key={r} className="rounded-full bg-secondary px-2.5 py-1 text-[11.5px] font-medium text-muted-foreground">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* progress + domain quick-nav */}
        <div className="mt-5">
          <div className="flex items-center justify-between text-[12.5px] font-medium text-muted-foreground">
            <span>
              {answered}/{questions.length} {tt("toc37.answered", lang)}
            </span>
            <span>{complete ? tt("toc37.ready", lang) : `${questions.length - answered} ${tt("toc37.left", lang)}`}</span>
          </div>
          <Progress value={Math.round((answered / questions.length) * 100)} className="mt-1.5 h-2" />
          <div className="mt-3 flex flex-wrap gap-1.5">
            {grouped.map((g) => (
              <button
                key={g.domain}
                onClick={() =>
                  document.getElementById(`toc-dom-${g.domain}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
                }
                className="rounded-full border border-border px-2.5 py-1 text-[11.5px] font-medium text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground focus-ring"
              >
                {domainLabel(g.domain, lang)} · {g.items.length}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* questions by domain */}
      {grouped.map((g) => (
        <section key={g.domain} id={`toc-dom-${g.domain}`} className="scroll-mt-20 space-y-3">
          <div className="sticky top-14 z-10 -mx-1 flex items-center gap-2 bg-background/90 px-1 py-2 backdrop-blur lg:top-0">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-foreground/70">
              {domainLabel(g.domain, lang)}
            </h2>
            <span className="rounded-full bg-secondary px-2 py-px text-[11px] font-medium text-muted-foreground">
              {g.items.filter(({ q }) => answers[q.id]).length}/{g.items.length}
            </span>
          </div>
          {g.items.map(({ q, i }) => (
            <QuestionCard key={q.id} q={q} index={i + 1} answer={answers[q.id]} isCore={coreIds.has(q.id)} onAnswer={onAnswer} />
          ))}
        </section>
      ))}

      {/* sticky evaluate bar — aligned with the main content area (the
          sidebar keeps its own lane on desktop) */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/90 backdrop-blur transition-[padding] duration-200 ease-out print:hidden",
          sidebarCollapsed ? "lg:ps-[72px]" : "lg:ps-[248px]"
        )}
      >
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3 sm:px-6">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12.5px] font-medium text-muted-foreground">
              {answered}/{questions.length} {tt("toc37.answered", lang)}
              {!complete && ` · ${questions.length - answered} ${tt("toc37.left", lang)}`}
            </p>
            <Progress value={Math.round((answered / questions.length) * 100)} className="mt-1 h-1.5" />
          </div>
          <Button
            disabled={!complete}
            onClick={() => {
              setStage("results")
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="h-10 shrink-0"
          >
            <ShieldCheck className="h-4 w-4" />
            {tt("toc37.evaluate", lang)}
          </Button>
        </div>
      </div>
    </div>
  )
}
