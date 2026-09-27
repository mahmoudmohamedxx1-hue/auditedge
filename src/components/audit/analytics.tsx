"use client"

import { useEffect, useMemo, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { tt, dateLocaleOf } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import type {
  AnalyticsPayload,
  StudyPlanClient,
} from "@/lib/audit-types"
import { Team } from "./team"
import {
  Activity,
  BarChart3,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  Download,
  Flame,
  GraduationCap,
  Loader2,
  Plus,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react"

const AREA_KEYS: Record<string, string> = {
  auditing: "exam.areaAuditing",
  accounting: "exam.areaAccounting",
  egypt: "exam.areaEgypt",
  ethics: "exam.areaEthics",
}

function masteryColor(m: number) {
  if (m < 50) return "bg-primary/85 text-white"
  if (m < 70) return "bg-primary/25 text-primary"
  if (m < 85) return "bg-gold/25 text-gold-deep"
  return "bg-sage/25 text-sage-deep"
}

/** v21: resolve a study-plan item into a one-tap deep link — matching a
 *  measured standard tag (drill prefill), a course, or a workspace area. */
type PlanAction =
  | { view: "exam"; tag?: string }
  | { view: "review" }
  | { view: "simulation" }
  | { view: "course"; courseId: string }

function planAction(
  label: string,
  tags: string[],
  courses: { id: string; title: string; code: string }[]
): PlanAction | null {
  const l = label.toLowerCase()
  // 1. a measured standard tag inside the label → pre-filtered drill
  const tag = tags.find((t) => t && l.includes(t.toLowerCase()))
  if (tag) return { view: "exam", tag }
  // 2. a course whose code/title clearly appears in the label
  const course = courses.find(
    (c) =>
      (c.code && l.includes(c.code.toLowerCase())) ||
      (c.title.length > 8 && l.includes(c.title.toLowerCase().split(":")[0].slice(0, 24)))
  )
  if (course) return { view: "course", courseId: course.id }
  // 3. workspace-area keywords
  if (/simulat|engagement run|nile textiles/.test(l)) return { view: "simulation" }
  if (/review queue|spaced|flash ?cards|daily review/.test(l)) return { view: "review" }
  if (/mock exam|practice|drill|exam center|questions/.test(l)) return { view: "exam" }
  return null
}

export function Analytics() {
  const data = useAppStore((s) => s.data)
  const lang = useAppStore((s) => s.lang)
  const navigate = useAppStore((s) => s.navigate)
  const [payload, setPayload] = useState<AnalyticsPayload | null>(null)
  const [cpe, setCpe] = useState<{ totalHours: number; rows: { code: string; title: string; hours: number; lessons: number; certificateHours: number }[] } | null>(null)
  const [plan, setPlan] = useState<StudyPlanClient | null>(null)
  const [goal, setGoal] = useState("")
  const [weeks, setWeeks] = useState(4)
  const [hours, setHours] = useState(6)
  const [generating, setGenerating] = useState(false)

  useEffect(() => {
    void fetch("/api/analytics").then(async (r) => {
      if (r.ok) setPayload((await r.json()) as AnalyticsPayload)
    })
    void fetch("/api/cpe").then(async (r) => {
      if (r.ok) setCpe(await r.json())
    })
    void fetch("/api/study-plan").then(async (r) => {
      if (r.ok) {
        const j = (await r.json()) as { active: StudyPlanClient | null }
        setPlan(j.active)
      }
    })
  }, [])

  const generatePlan = async () => {
    if (!goal.trim()) return
    setGenerating(true)
    const res = await fetch("/api/study-plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goal, horizonWeeks: weeks, hoursPerWeek: hours }),
    })
    setGenerating(false)
    if (res.ok) {
      const j = (await res.json()) as { plan: StudyPlanClient }
      setPlan(j.plan)
    }
  }

  const toggleItem = async (weekIdx: number, itemIdx: number, done: boolean) => {
    if (!plan) return
    const res = await fetch("/api/study-plan", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planId: plan.id, itemWeek: weekIdx, itemIndex: itemIdx, done: !done }),
    })
    if (res.ok) {
      const j = (await res.json()) as { plan: StudyPlanClient }
      setPlan(j.plan)
    }
  }

  const lessonsDone = data?.completedLessonIds.length ?? 0
  const hoursStudied = useMemo(() => {
    if (!data) return 0
    let minutes = 0
    for (const c of data.courses)
      for (const m of c.modules)
        for (const l of m.lessons)
          if (data.completedLessonIds.includes(l.id)) minutes += l.durationMin
    return Math.round((minutes / 60) * 10) / 10
  }, [data])

  return (
    <div className="mx-auto max-w-5xl">
      <header className="mb-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BarChart3 className="h-5 w-5" />
          </span>
          <div>
            <h1 className="font-serif text-[26px] font-semibold tracking-tight">{tt("analytics.title", lang)}</h1>
            <p className="text-[13.5px] text-muted-foreground">{tt("analytics.subtitle", lang)}</p>
          </div>
        </div>
      </header>

      {/* stat strip */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { icon: Flame, label: tt("analytics.streak", lang), value: data?.user.streakDays ?? 0 },
          { icon: GraduationCap, label: tt("analytics.lessonsDone", lang), value: lessonsDone },
          { icon: Clock, label: tt("analytics.hoursStudied", lang), value: hoursStudied },
          { icon: Zap, label: "XP", value: data?.user.xp ?? 0 },
        ].map((s, i) => (
          <div key={i} className="rounded-2xl border bg-card p-4 shadow-soft">
            <div className="flex items-center gap-2 text-muted-foreground">
              <s.icon className="h-4 w-4 text-primary" />
              <span className="text-[12px] font-medium">{s.label}</span>
            </div>
            <p className="mt-1.5 text-[22px] font-bold tabular-nums">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-5">
        {/* mastery heatmap */}
        <section className="lg:col-span-3 rounded-2xl border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-[16px] font-semibold">{tt("analytics.masteryHeatmap", lang)}</h2>
            <span className="text-[11.5px] text-muted-foreground">{tt("analytics.weakFirst", lang)}</span>
          </div>
          {payload && payload.tags.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {payload.tags.map((t) => (
                <button
                  key={t.tag}
                  onClick={() => {
                    // v21: jump straight into a pre-filtered drill on this weak topic
                    useAppStore.getState().setExamTagPrefill(t.tag)
                    navigate("exam")
                  }}
                  title={`${t.mastery}% · ${t.attempts} attempts`}
                  className={cn(
                    "rounded-lg px-2.5 py-1.5 text-[12px] font-semibold transition-transform hover:scale-105 focus-ring",
                    masteryColor(t.mastery)
                  )}
                >
                  {t.tag} · {t.mastery}%
                </button>
              ))}
            </div>
          ) : (
            <p className="mt-4 rounded-xl border border-dashed p-5 text-center text-[13px] text-muted-foreground">
              {tt("analytics.noDataYet", lang)}
            </p>
          )}

          {/* readiness */}
          <h2 className="mt-7 font-serif text-[16px] font-semibold">{tt("analytics.readiness", lang)}</h2>
          <div className="mt-4 space-y-3.5">
            {payload?.readiness.map((r) => (
              <div key={r.area}>
                <div className="flex items-center justify-between text-[12.5px]">
                  <span className="font-medium">{tt(AREA_KEYS[r.area] ?? "exam.areaAuditing", lang)}</span>
                  <span className="tabular-nums text-muted-foreground">
                    {r.readiness}% · {tt("analytics.coverage", lang)} {r.coverage}% · {tt("analytics.accuracy", lang)} {r.accuracy}%
                  </span>
                </div>
                <Progress value={r.readiness} className="mt-1.5 h-2" />
              </div>
            ))}
          </div>
        </section>

        {/* study plan */}
        <section className="lg:col-span-2 space-y-5">
          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold">
              <Sparkles className="h-4 w-4 text-primary" /> {tt("analytics.studyPlan", lang)}
            </h2>
            {plan ? (
              <>
                <p dir="auto" className="mt-2 text-[13.5px] font-medium">{plan.title}</p>
                <div className="mt-1 flex items-center gap-2 text-[12px] text-muted-foreground">
                  <Progress value={plan.progress} className="h-1.5 max-w-[160px]" />
                  <span className="tabular-nums">{plan.progress}% {tt("analytics.progress", lang)}</span>
                </div>
                <div className="mt-4 max-h-80 space-y-3 overflow-y-auto scroll-thin pe-1">
                  {plan.weeks.map((w, wi) => (
                    <div key={wi} className="rounded-xl border bg-secondary/25 p-3.5">
                      <p dir="auto" className="text-[12px] font-semibold text-primary">
                        {tt("analytics.week", lang)} {wi + 1} · {w.focus}
                      </p>
                      <div className="mt-2 space-y-1">
                        {w.items.map((it, ii) => {
                          const action = planAction(
                            it.label,
                            payload?.tags.map((t) => t.tag) ?? [],
                            data?.courses.map((c) => ({ id: c.id, title: c.title, code: c.code })) ?? []
                          )
                          return (
                            <div key={ii} className="group/item flex items-start gap-1">
                              <button
                                onClick={() => void toggleItem(wi, ii, it.done)}
                                className="flex flex-1 items-start gap-2 rounded-lg px-1.5 py-1 text-start text-[12.5px] leading-relaxed transition-colors hover:bg-secondary/60 focus-ring"
                              >
                                <CheckCircle2
                                  className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", it.done ? "text-sage-deep" : "text-muted-foreground/50")}
                                />
                                <span dir="auto" className={cn(it.done && "text-muted-foreground line-through")}>{it.label}</span>
                              </button>
                              {action && (
                                <button
                                  onClick={() => {
                                    if (action.view === "exam" && action.tag) {
                                      useAppStore.getState().setExamTagPrefill(action.tag)
                                    }
                                    navigate(action.view === "course" ? "course" : action.view, action.view === "course" ? { courseId: action.courseId } : undefined)
                                  }}
                                  title={tt("analytics.planGoTo", lang)}
                                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-muted-foreground/60 opacity-0 transition-opacity hover:bg-secondary hover:text-primary focus-ring group-hover/item:opacity-100"
                                >
                                  <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
                                </button>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="mt-3 space-y-3">
                <p className="text-[12.5px] text-muted-foreground">{tt("analytics.noPlan", lang)}</p>
                <Input
                  dir="auto"
                  placeholder={tt("analytics.goalPh", lang)}
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="h-10"
                />
                <div className="grid grid-cols-2 gap-2">
                  <label className="text-[12px] text-muted-foreground">
                    {tt("analytics.weeks", lang)}
                    <Input type="number" min={1} max={12} value={weeks} onChange={(e) => setWeeks(Number(e.target.value))} className="mt-1 h-9" />
                  </label>
                  <label className="text-[12px] text-muted-foreground">
                    {tt("analytics.hoursWeek", lang)}
                    <Input type="number" min={1} max={40} value={hours} onChange={(e) => setHours(Number(e.target.value))} className="mt-1 h-9" />
                  </label>
                </div>
                <Button className="h-10 w-full" disabled={generating || !goal.trim()} onClick={() => void generatePlan()}>
                  {generating ? <Loader2 className="me-1.5 h-4 w-4 animate-spin" /> : <Sparkles className="me-1.5 h-4 w-4" />}
                  {generating ? tt("analytics.generating", lang) : tt("analytics.generate", lang)}
                </Button>
              </div>
            )}
          </div>

          {/* CPE card */}
          <div className="rounded-2xl border bg-card p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-[16px] font-semibold">{tt("analytics.cpeTitle", lang)}</h2>
              <Button
                size="sm"
                variant="outline"
                className="h-8"
                onClick={() => window.open("/api/cpe/export", "_blank")}
              >
                <Download className="me-1.5 h-3.5 w-3.5" /> {tt("analytics.cpeExport", lang)}
              </Button>
            </div>
            <p className="mt-3 text-[28px] font-bold tabular-nums">
              {cpe?.totalHours ?? payload?.cpeHours ?? 0}
              <span className="ms-1.5 text-[13px] font-normal text-muted-foreground">{tt("analytics.cpeHours", lang)}</span>
            </p>
            <div className="mt-3 space-y-1.5">
              {cpe?.rows.slice(0, 5).map((r) => (
                <div key={r.code} className="flex items-center justify-between text-[12.5px]">
                  <span dir="auto" className="truncate text-muted-foreground">
                    {r.code} · {r.title}
                  </span>
                  <span className="ms-2 shrink-0 font-semibold tabular-nums">
                    {(r.hours + r.certificateHours).toFixed(1)}h
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* pulse: exams + sims */}
      <section className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border bg-card p-6 shadow-soft">
          <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold">
            <Activity className="h-4 w-4 text-primary" /> {tt("analytics.examsTitle", lang)}
          </h2>
          {payload && payload.examHistory.length > 0 ? (
            <div className="mt-3 space-y-2">
              {payload.examHistory.slice(0, 5).map((e) => (
                <div key={e.id} className="flex items-center justify-between text-[13px]">
                  <span className="text-muted-foreground">
                    {e.mode === "exam90" ? "90 min" : "60 min"} · {new Date(e.startedAt).toLocaleDateString(dateLocaleOf(lang))}
                  </span>
                  <span className="font-semibold tabular-nums">{e.score}%</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-[13px] text-muted-foreground">{tt("exam.noHistory", lang)}</p>
          )}
          {payload && payload.practiceAccuracy.total > 0 && (
            <p className="mt-3 border-t pt-3 text-[12.5px] text-muted-foreground">
              {tt("analytics.practiceAcc", lang)}:{" "}
              <b className="text-foreground">
                {payload.practiceAccuracy.correct}/{payload.practiceAccuracy.total}
              </b>
            </p>
          )}
        </div>
        <div className="rounded-2xl border bg-card p-6 shadow-soft">
          <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold">
            <Trophy className="h-4 w-4 text-primary" /> {tt("analytics.simsTitle", lang)}
          </h2>
          {payload && payload.simRuns.length > 0 ? (
            <div className="mt-3 space-y-2">
              {payload.simRuns.slice(0, 5).map((s) => (
                <div key={s.id} className="flex items-center justify-between text-[13px]">
                  <span className="text-muted-foreground">
                    {s.scenario === "nile-textiles-fy26" ? "Nile Textiles" : s.scenario}
                    {s.completedAt ? "" : ` · ${tt("sim.inProgress", lang)}`}
                  </span>
                  {s.completedAt && <span className="font-semibold tabular-nums">{s.score}%</span>}
                </div>
              ))}
            </div>
          ) : (
            <button
              onClick={() => navigate("simulation")}
              className="mt-3 flex w-full items-center justify-between rounded-xl border border-dashed px-4 py-4 text-[13px] text-muted-foreground transition-colors hover:text-foreground focus-ring"
            >
              {tt("sim.subtitle", lang)}
              <ChevronRight className="h-4 w-4 rtl:rotate-180" />
            </button>
          )}
        </div>
      </section>

      {/* workspace members (admin) */}
      {data?.user.role === "admin" && (
        <details className="group mt-6 rounded-2xl border bg-card shadow-soft">
          <summary className="flex cursor-pointer items-center gap-2 px-6 py-4 text-[15px] font-semibold">
            <Plus className="h-4 w-4 text-primary transition-transform group-open:rotate-45" />
            {tt("analytics.membersAdmin", lang)}
          </summary>
          <div className="border-t px-6 pb-6 pt-2">
            <Team />
          </div>
        </details>
      )}
    </div>
  )
}
