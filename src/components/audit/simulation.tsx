"use client"

import { useEffect, useMemo, useState, useCallback } from "react"
import { useAppStore } from "@/store/useAppStore"
import { tt } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { SimRunClient, SimScenarioClient, SimStageClient, SimDecisionClient } from "@/lib/audit-types"
import {
  Briefcase,
  ChevronRight,
  FileText,
  Loader2,
  Play,
  Sparkles,
  Trophy,
} from "lucide-react"

type DecisionResult = { score: number; feedback: string; maxForDecision: number; judged?: boolean }

export function Simulation() {
  const lang = useAppStore((s) => s.lang)
  const bootstrap = useAppStore((s) => s.bootstrap)
  const [scenario, setScenario] = useState<SimScenarioClient | null>(null)
  const [runs, setRuns] = useState<SimRunClient[]>([])
  const [active, setActive] = useState<SimRunClient | null>(null)
  const [busy, setBusy] = useState(false)
  // per-decision UI state
  const [feedback, setFeedback] = useState<DecisionResult | null>(null)
  const [textValue, setTextValue] = useState("")
  const [chosen, setChosen] = useState<string | null>(null)
  const [finalResult, setFinalResult] = useState<{
    score: number
    earned: number
    maxScore: number
    xp: number
    debrief: string | null
  } | null>(null)

  const load = useCallback(async () => {
    const res = await fetch("/api/sim")
    if (!res.ok) return
    const data = (await res.json()) as { scenarios: SimScenarioClient[]; runs: SimRunClient[] }
    setScenario(data.scenarios[0] ?? null)
    setRuns(data.runs)
  }, [])
  useEffect(() => {
    let alive = true
    void (async () => {
      const res = await fetch("/api/sim")
      if (!res.ok) return
      const data = (await res.json()) as { scenarios: SimScenarioClient[]; runs: SimRunClient[] }
      if (!alive) return
      setScenario(data.scenarios[0] ?? null)
      setRuns(data.runs)
    })()
    return () => {
      alive = false
    }
  }, [])

  const start = async () => {
    if (!scenario) return
    setBusy(true)
    const res = await fetch("/api/sim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "start", scenario: scenario.slug }),
    })
    setBusy(false)
    if (!res.ok) return
    const { run } = (await res.json()) as { run: SimRunClient }
    setActive(run)
    setFeedback(null)
    setTextValue("")
    setChosen(null)
    setFinalResult(null)
  }

  const resume = (run: SimRunClient) => {
    setActive(run)
    setFeedback(null)
    setTextValue("")
    setChosen(null)
    setFinalResult(null)
  }

  // the next undecided decision in scenario order (plain computation — the
  // loops' early returns are fine outside useMemo)
  let nextDecision: { stage: SimStageClient; decision: SimDecisionClient } | null = null
  if (scenario && active) {
    const done = new Set(active.decisions.map((d) => d.decisionId))
    outer: for (const stage of scenario.stages) {
      for (const d of stage.decisions) {
        if (!done.has(d.id)) {
          nextDecision = { stage, decision: d }
          break outer
        }
      }
    }
  }

  const stageProgress = useMemo(() => {
    if (!scenario || !active) return 0
    const done = new Set(active.decisions.map((d) => d.decisionId))
    let completedStages = 0
    for (const stage of scenario.stages) {
      if (stage.decisions.every((d) => done.has(d.id))) completedStages++
    }
    return completedStages
  }, [scenario, active])

  const decide = async (picked?: string, text?: string) => {
    if (!active || !nextDecision) return
    setBusy(true)
    const res = await fetch("/api/sim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "decide",
        runId: active.id,
        decisionId: nextDecision.decision.id,
        ...(picked ? { picked } : {}),
        ...(text ? { text } : {}),
      }),
    })
    setBusy(false)
    if (!res.ok) return
    const result = (await res.json()) as DecisionResult
    setFeedback(result)
    setChosen(picked ?? null)
    // refresh the run quietly
    const refreshed = await fetch("/api/sim")
    if (refreshed.ok) {
      const data = (await refreshed.json()) as { runs: SimRunClient[] }
      setRuns(data.runs)
      setActive(data.runs.find((r) => r.id === active.id) ?? active)
    }
  }

  const complete = async () => {
    if (!active) return
    setBusy(true)
    const res = await fetch("/api/sim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "complete", runId: active.id }),
    })
    setBusy(false)
    if (!res.ok) return
    const result = (await res.json()) as {
      score: number
      earned: number
      maxScore: number
      xp: number
      debrief: string | null
    }
    setFinalResult(result)
    void bootstrap()
    void load()
  }

  /* ================= INTRO / RESULTS ================= */
  if (!scenario) return null

  if (!active) {
    const lastRun = runs[0]
    return (
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Briefcase className="h-5 w-5" />
            </span>
            <div>
              <h1 className="font-serif text-[26px] font-semibold tracking-tight">{tt("sim.title", lang)}</h1>
              <p className="text-[13.5px] text-muted-foreground">{tt("sim.subtitle", lang)}</p>
            </div>
          </div>
        </header>

        <div className="rounded-2xl border bg-card p-7 shadow-soft">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 dir="auto" className="font-serif text-[19px] font-semibold">{scenario.title}</h2>
              <p dir="auto" className="mt-1 text-[13px] text-muted-foreground">{scenario.sector}</p>
            </div>
            <Button onClick={() => void start()} disabled={busy} className="h-10">
              {busy ? <Loader2 className="me-1.5 h-4 w-4 animate-spin" /> : <Play className="me-1.5 h-4 w-4" />}
              {tt("sim.start", lang)}
            </Button>
          </div>
          <p dir="auto" className="mt-4 text-[14px] leading-[1.8] text-foreground/85">{scenario.summary}</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-5">
            {scenario.stages.map((s, i) => (
              <div key={s.id} className="rounded-xl border bg-secondary/30 px-3 py-2.5 text-[12px]">
                <span className="text-muted-foreground">{i + 1}. </span>
                <span dir="auto" className="font-medium">{s.title.split("—")[1] ?? s.title}</span>
              </div>
            ))}
          </div>
        </div>

        {runs.length > 0 && (
          <section className="mt-6">
            <h3 className="text-[13px] font-semibold uppercase tracking-wide text-muted-foreground">
              {tt("sim.pastRuns", lang)}
            </h3>
            <div className="mt-3 space-y-2">
              {runs.slice(0, 5).map((r) => (
                <div key={r.id} className="flex items-center justify-between rounded-xl border bg-card px-4 py-3 shadow-soft">
                  <div className="text-[13.5px]">
                    <span className="font-medium">
                      {r.status === "completed" ? tt("sim.completed", lang) : tt("sim.inProgress", lang)}
                    </span>
                    <span className="ms-2 text-muted-foreground">
                      {r.decisions.length}/{scenario.stages.reduce((a, s) => a + s.decisions.length, 0)} {tt("sim.decision", lang)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {r.status === "completed" && (
                      <span className="text-[13px] font-semibold tabular-nums">{r.score}%</span>
                    )}
                    <Button
                      size="sm"
                      variant={r.status === "completed" ? "outline" : "default"}
                      className="h-8"
                      onClick={() => resume(r)}
                    >
                      {r.status === "completed" ? tt("sim.completed", lang) : tt("sim.resume", lang)}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        {lastRun?.status === "active" && (
          <Button variant="outline" className="mt-4 h-10" onClick={() => resume(lastRun)}>
            {tt("sim.resume", lang)} — {lastRun.decisions.length} {tt("sim.decision", lang)}
          </Button>
        )}
      </div>
    )
  }

  /* ================= FINAL ================= */
  if (finalResult) {
    return (
      <div className="mx-auto max-w-2xl py-6">
        <div className="rounded-2xl border bg-card p-8 text-center shadow-soft">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Trophy className="h-7 w-7" />
          </div>
          <h1 className="mt-5 font-serif text-[24px] font-semibold">{tt("sim.finalScore", lang)}</h1>
          <p className="mt-2 text-3xl font-bold tabular-nums">
            {finalResult.score}%
            <span className="ms-2 text-[15px] font-normal text-muted-foreground">
              {finalResult.earned}/{finalResult.maxScore} {tt("sim.scoreEarned", lang)} · +{finalResult.xp} XP
            </span>
          </p>
        </div>
        {finalResult.debrief && (
          <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/[0.03] p-6">
            <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold">
              <Sparkles className="h-4 w-4 text-primary" /> {tt("sim.debrief", lang)}
            </h2>
            <p dir="auto" className="mt-3 whitespace-pre-line text-[14px] leading-[1.8] text-foreground/85">
              {finalResult.debrief}
            </p>
          </div>
        )}
        <div className="mt-5 flex justify-center gap-2.5">
          <Button variant="outline" className="h-10" onClick={() => void start()}>
            {tt("sim.newRun", lang)}
          </Button>
          <Button className="h-10" onClick={() => setActive(null)}>
            {tt("sim.pastRuns", lang)}
          </Button>
        </div>
      </div>
    )
  }

  /* ================= RUN ================= */
  const stage = nextDecision?.stage
  const decision = nextDecision?.decision
  const stageIndex = stage ? scenario.stages.indexOf(stage) + 1 : scenario.stages.length

  return (
    <div className="mx-auto max-w-3xl">
      {/* progress rail */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[12.5px] text-muted-foreground">
          <span className="rounded-full bg-secondary px-2.5 py-1 font-medium">
            {tt("sim.stage", lang)} {stageIndex} {tt("sim.of", lang)} {scenario.stages.length}
          </span>
          <span>
            {active.decisions.length}/{scenario.stages.reduce((a, s) => a + s.decisions.length, 0)} {tt("sim.decision", lang)}
          </span>
        </div>
        <div className="flex gap-1">
          {scenario.stages.map((s, i) => (
            <span
              key={s.id}
              className={cn(
                "h-1.5 w-8 rounded-full",
                i < stageProgress ? "bg-sage" : i === stageProgress - 0 ? "bg-primary" : "bg-border"
              )}
            />
          ))}
        </div>
      </div>

      {stage && (
        <>
          <div className="rounded-2xl border bg-card p-6 shadow-soft sm:p-7">
            <h2 dir="auto" className="font-serif text-[19px] font-semibold">{stage.title}</h2>
            <p dir="auto" className="mt-2 text-[14px] leading-[1.8] text-foreground/80">{stage.brief}</p>
          </div>

          <details className="group mt-4 rounded-2xl border bg-secondary/25 p-5" open>
            <summary className="flex cursor-pointer items-center gap-2 text-[13.5px] font-semibold">
              <FileText className="h-4 w-4 text-primary" /> {tt("sim.docs", lang)}
              <ChevronRight className="ms-auto h-4 w-4 transition-transform group-open:rotate-90 rtl:-scale-x-100" />
            </summary>
            <div className="mt-4 space-y-3">
              {stage.docs.map((d) => (
                <div key={d.label} className="rounded-xl border bg-card p-4">
                  <p dir="auto" className="text-[12px] font-semibold uppercase tracking-wide text-primary">
                    {d.label}
                  </p>
                  <p dir="auto" className="mt-1.5 whitespace-pre-line text-[13px] leading-[1.75] text-foreground/85">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </details>
        </>
      )}

      {decision ? (
        <div className="mt-5 rounded-2xl border bg-card p-6 shadow-soft sm:p-8">
          <div className="text-[12px] font-semibold uppercase tracking-wide text-muted-foreground">
            {tt("sim.decision", lang)} · {active.decisions.length + 1}
          </div>
          {decision.context && (
            <p dir="auto" className="mt-2 rounded-lg border border-gold/30 bg-gold/[0.06] p-3 text-[13px] leading-relaxed">
              💡 {decision.context}
            </p>
          )}
          <h3 dir="auto" className="mt-3 font-serif text-[17px] font-semibold leading-snug">
            {decision.prompt}
          </h3>

          {decision.freeText ? (
            <div className="mt-5">
              <label className="text-[13px] font-medium text-muted-foreground" dir="auto">
                {tt("sim.writeJudgment", lang)} — {tt("sim.judgmentHint", lang)}
              </label>
              <textarea
                dir="auto"
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                rows={6}
                disabled={!!feedback}
                className="mt-2 w-full rounded-xl border bg-background p-4 text-[14px] leading-relaxed focus-ring"
              />
              {!feedback && (
                <Button
                  className="mt-3 h-10"
                  disabled={busy || textValue.trim().length < 30}
                  onClick={() => void decide(undefined, textValue)}
                >
                  {busy ? <Loader2 className="me-1.5 h-4 w-4 animate-spin" /> : null}
                  {tt("sim.submitDecision", lang)}
                </Button>
              )}
            </div>
          ) : (
            <div className="mt-5 space-y-2.5">
              {decision.options?.map((o) => {
                const isChosen = chosen === o.id
                return (
                  <button
                    key={o.id}
                    disabled={!!feedback || busy}
                    onClick={() => void decide(o.id)}
                    dir="auto"
                    className={cn(
                      "w-full rounded-xl border px-4 py-3.5 text-start text-[14px] leading-relaxed transition-all focus-ring",
                      !feedback && "hover:border-input hover:bg-secondary/40",
                      feedback && isChosen
                        ? feedback.score >= 3
                          ? "border-sage bg-sage/[0.07]"
                          : feedback.score >= 1
                            ? "border-gold/60 bg-gold/[0.06]"
                            : "border-primary bg-primary/[0.05]"
                        : feedback && "border-border opacity-55"
                    )}
                  >
                    {o.label}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border bg-card p-8 text-center shadow-soft">
          <Trophy className="mx-auto h-8 w-8 text-gold" />
          <p className="mt-3 text-[15px] font-semibold">{tt("sim.finishSim", lang)}</p>
          <Button className="mt-5 h-10" disabled={busy} onClick={() => void complete()}>
            {busy ? <Loader2 className="me-1.5 h-4 w-4 animate-spin" /> : null}
            {tt("sim.finishSim", lang)}
          </Button>
        </div>
      )}

      {feedback && (
        <div className="mt-5 rounded-2xl border border-primary/25 bg-primary/[0.04] p-6">
          <div className="flex flex-wrap items-center gap-2 text-[13px] font-semibold">
            <span className="rounded-full bg-primary px-2.5 py-1 text-white">
              {feedback.score}/{feedback.maxForDecision} {tt("sim.scoreEarned", lang)}
            </span>
            {decision?.freeText && (
              <span className="text-[12px] font-medium text-muted-foreground">
                {feedback.judged ? tt("sim.aiGraded", lang) : tt("sim.provisional", lang)}
              </span>
            )}
          </div>
          <h4 className="mt-3 font-serif text-[15px] font-semibold">{tt("sim.partnerFeedback", lang)}</h4>
          <p dir="auto" className="mt-2 whitespace-pre-line text-[14px] leading-[1.8] text-foreground/85">
            {feedback.feedback}
          </p>
          <div className="mt-5 flex justify-end">
            <Button
              variant="outline"
              className="h-9"
              onClick={() => {
                setFeedback(null)
                setTextValue("")
                setChosen(null)
              }}
            >
              {nextDecision ? tt("sim.continue", lang) : tt("sim.finishSim", lang)}{" "}
              <ChevronRight className="ms-1 h-4 w-4 rtl:rotate-180" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
