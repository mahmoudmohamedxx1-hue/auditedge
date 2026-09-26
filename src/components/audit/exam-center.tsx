"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { tt, dateLocaleOf } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import type {
  BankQuestionClient,
  BankStats,
  ExamSessionClient,
  ExamSummaryRow,
} from "@/lib/audit-types"
import {
  AlarmClock,
  CheckCircle2,
  ChevronLeft,
  ClipboardCheck,
  FileWarning,
  History,
  Flag,
  Layers,
  ListChecks,
  Loader2,
  RotateCcw,
  Timer,
  Trophy,
  XCircle,
} from "lucide-react"

const LETTERS = ["A", "B", "C", "D"]
const AREA_KEYS: Record<string, string> = {
  auditing: "exam.areaAuditing",
  accounting: "exam.areaAccounting",
  egypt: "exam.areaEgypt",
  ethics: "exam.areaEthics",
}

type Phase = "hub" | "practice" | "sitting" | "results"

export function ExamCenter() {
  const lang = useAppStore((s) => s.lang)
  const [phase, setPhase] = useState<Phase>("hub")
  const [stats, setStats] = useState<BankStats | null>(null)

  const loadStats = async () => {
    const res = await fetch("/api/bank")
    if (res.ok) setStats((await res.json()) as BankStats)
  }

  /* ---------- past sittings (v20.1) ---------- */
  const [history, setHistory] = useState<ExamSummaryRow[]>([])
  useEffect(() => {
    let alive = true
    void (async () => {
      const res = await fetch("/api/bank/exam")
      if (!res.ok || !alive) return
      const data = (await res.json()) as { sessions: ExamSummaryRow[] }
      if (alive) setHistory(data.sessions.filter((x) => x.completedAt))
    })()
    return () => {
      alive = false
    }
  }, [phase])
  useEffect(() => {
    let alive = true
    void (async () => {
      const res = await fetch("/api/bank")
      if (!res.ok || !alive) return
      const data = (await res.json()) as BankStats
      if (alive) setStats(data)
    })()
    return () => {
      alive = false
    }
  }, [])

  /* ---------- practice mode ---------- */
  const [practice, setPractice] = useState<BankQuestionClient[]>([])
  const [pIdx, setPIdx] = useState(0)
  const [pPicked, setPPicked] = useState<number | null>(null)
  const [pVerdict, setPVerdict] = useState<{
    correct: boolean
    answerIndex: number
    explanation: string
    explanationAr: string | null
  } | null>(null)
  const [pScore, setPScore] = useState({ correct: 0, total: 0 })
  const [pLoading, setPLoading] = useState(false)
  const [practiceDone, setPracticeDone] = useState(false)

  // filters
  const [fArea, setFArea] = useState("all")
  const [fTag, setFTag] = useState("all")
  const [fDiff, setFDiff] = useState("all")

  const startPractice = async () => {
    setPLoading(true)
    const res = await fetch("/api/bank", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        count: 10,
        ...(fArea !== "all" ? { area: fArea } : {}),
        ...(fTag !== "all" ? { tag: fTag } : {}),
        ...(fDiff !== "all" ? { difficulty: Number(fDiff) } : {}),
      }),
    })
    setPLoading(false)
    if (!res.ok) return
    const { questions } = (await res.json()) as { questions: BankQuestionClient[] }
    setPractice(questions)
    setPIdx(0)
    setPPicked(null)
    setPVerdict(null)
    setPScore({ correct: 0, total: 0 })
    setPracticeDone(false)
    setPhase("practice")
  }

  const checkPracticeAnswer = async () => {
    if (pPicked === null || pVerdict) return
    const q = practice[pIdx]
    const res = await fetch("/api/bank/answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questionId: q.id, picked: pPicked, mode: "practice" }),
    })
    if (!res.ok) return
    const verdict = (await res.json()) as {
      correct: boolean
      answerIndex: number
      explanation: string
      explanationAr: string | null
    }
    setPVerdict(verdict)
    setPScore((s) => ({ correct: s.correct + (verdict.correct ? 1 : 0), total: s.total + 1 }))
  }

  const nextPractice = () => {
    if (pIdx === practice.length - 1) {
      setPracticeDone(true)
    } else {
      setPIdx((i) => i + 1)
      setPPicked(null)
      setPVerdict(null)
    }
  }

  /* ---------- exam mode ---------- */
  const [exam, setExam] = useState<ExamSessionClient | null>(null)
  const [eIdx, setEIdx] = useState(0)
  const [eLoading, setELoading] = useState<string | null>(null)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [eResult, setEResult] = useState<{
    score: number
    correct: number
    total: number
    xpEarned: number
    key: Record<string, number>
    explanations: Record<string, string>
    explanationsAr: Record<string, string>
  } | null>(null)
  const submitLock = useRef(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startExam = async (mode: "exam60" | "exam90") => {
    setELoading(mode)
    const res = await fetch("/api/bank/exam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode }),
    })
    setELoading(null)
    if (!res.ok) return
    const { session } = (await res.json()) as { session: ExamSessionClient }
    setExam(session)
    setEIdx(0)
    setEResult(null)
    setSecondsLeft(session.durationMin * 60)
    setPhase("sitting")
  }

  // countdown — auto-submit through a ref so the effect never depends on
  // the (later-declared) submitExam callback
  const submitRef = useRef<((auto?: boolean) => Promise<void>) | null>(null)
  useEffect(() => {
    if (phase !== "sitting") {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (timerRef.current) clearInterval(timerRef.current)
          void submitRef.current?.(true)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
     
  }, [phase])

  const examAnswer = async (picked: number) => {
    if (!exam) return
    const q = exam.questions[eIdx]
    setExam({ ...exam, answered: { ...exam.answered, [q.id]: picked } })
    await fetch(`/api/bank/exam/${exam.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "answer", questionId: q.id, picked }),
    })
  }

  const toggleFlag = async () => {
    if (!exam) return
    const q = exam.questions[eIdx]
    const flagged = exam.flagged.includes(q.id)
      ? exam.flagged.filter((f) => f !== q.id)
      : [...exam.flagged, q.id]
    setExam({ ...exam, flagged })
    await fetch(`/api/bank/exam/${exam.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "flag", questionId: q.id, flagged: !exam.flagged.includes(q.id) }),
    })
  }

  const submitExam = useCallback(
    async (auto = false) => {
      if (!exam || submitLock.current) return
      if (!auto && !window.confirm(tt("exam.confirmSubmit", lang))) return
      submitLock.current = true
      const res = await fetch(`/api/bank/exam/${exam.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "submit" }),
      })
      submitLock.current = false
      if (!res.ok) return
      const result = (await res.json()) as { score: number; correct: number; total: number; xpEarned: number }
      // reload with the answer key for the results screen
      const full = await fetch(`/api/bank/exam/${exam.id}`)
      if (full.ok) {
        const data = (await full.json()) as {
          session: ExamSessionClient & {
            key: Record<string, number>
            explanations: Record<string, string>
            explanationsAr: Record<string, string>
          }
        }
        setExam(data.session)
        setEResult({
          score: result.score,
          correct: result.correct,
          total: result.total,
          xpEarned: result.xpEarned,
          key: data.session.key ?? {},
          explanations: data.session.explanations ?? {},
          explanationsAr: data.session.explanationsAr ?? {},
        })
      }
      setPhase("results")
      void useAppStore.getState().bootstrap()
    },
    [exam, lang]
  )
  // keep the countdown's ref pointing at the latest closure
  useEffect(() => {
    submitRef.current = submitExam
  }, [submitExam])

  const backToHub = () => {
    setPhase("hub")
    setExam(null)
    setEResult(null)
    setPractice([])
    void loadStats()
  }

  const mmss = (secs: number) =>
    `${String(Math.floor(secs / 60)).padStart(2, "0")}:${String(secs % 60).padStart(2, "0")}`

  /* ================================================================ */
  /* HUB                                                               */
  /* ================================================================ */
  if (phase === "hub") {
    return (
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ClipboardCheck className="h-5 w-5" />
            </span>
            <div>
              <h1 className="font-serif text-[26px] font-semibold tracking-tight">
                {tt("exam.title", lang)}
              </h1>
              <p className="text-[13.5px] text-muted-foreground">{tt("exam.subtitle", lang)}</p>
            </div>
          </div>
          {stats && (
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-primary" />
                <b className="font-semibold text-foreground">{stats.total}</b> {tt("exam.bankSize", lang)}
              </span>
              <span>
                {stats.byArea.auditing ?? 0} {tt("exam.areaAuditing", lang)} ·{" "}
                {stats.byArea.accounting ?? 0} {tt("exam.areaAccounting", lang)} ·{" "}
                {stats.byArea.egypt ?? 0} {tt("exam.areaEgypt", lang)} ·{" "}
                {stats.byArea.ethics ?? 0} {tt("exam.areaEthics", lang)}
              </span>
              <span>
                <b className="font-semibold text-foreground">{stats.withArabic}</b> {tt("exam.withArabic", lang)}
              </span>
            </div>
          )}
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {/* practice card */}
          <section className="rounded-2xl border bg-card p-6 shadow-soft">
            <h2 className="font-serif text-[18px] font-semibold">{tt("exam.practiceTitle", lang)}</h2>
            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
              {tt("exam.practiceDesc", lang)}
            </p>
            <div className="mt-5 space-y-3">
              <Select value={fArea} onValueChange={setFArea}>
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{tt("exam.allAreas", lang)}</SelectItem>
                  <SelectItem value="auditing">{tt("exam.areaAuditing", lang)}</SelectItem>
                  <SelectItem value="accounting">{tt("exam.areaAccounting", lang)}</SelectItem>
                  <SelectItem value="egypt">{tt("exam.areaEgypt", lang)}</SelectItem>
                  <SelectItem value="ethics">{tt("exam.areaEthics", lang)}</SelectItem>
                </SelectContent>
              </Select>
              <Select value={fTag} onValueChange={setFTag}>
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-72">
                  <SelectItem value="all">{tt("exam.allStandards", lang)}</SelectItem>
                  {stats?.tags.map((t) => (
                    <SelectItem key={t.tag} value={t.tag}>
                      {t.tag} ({t.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={fDiff} onValueChange={setFDiff}>
                <SelectTrigger className="h-10">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{tt("exam.allLevels", lang)}</SelectItem>
                  <SelectItem value="1">{tt("exam.easy", lang)}</SelectItem>
                  <SelectItem value="2">{tt("exam.medium", lang)}</SelectItem>
                  <SelectItem value="3">{tt("exam.hard", lang)}</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={() => void startPractice()} disabled={pLoading} className="h-10 w-full">
                {pLoading ? <Loader2 className="me-1.5 h-4 w-4 animate-spin" /> : <ListChecks className="me-1.5 h-4 w-4" />}
                {tt("exam.startPractice", lang)}
              </Button>
            </div>
          </section>

          {/* exam card */}
          <section className="rounded-2xl border bg-card p-6 shadow-soft">
            <h2 className="font-serif text-[18px] font-semibold">{tt("exam.examTitle", lang)}</h2>
            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
              {tt("exam.examDesc", lang)}
            </p>
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-2 rounded-xl border bg-secondary/30 px-3.5 py-3 text-[13px]">
                <Timer className="h-4 w-4 text-primary" />
                <span>
                  <b>40 Q · 60 min</b> — 45% {tt("exam.areaAuditing", lang)}, 30% {tt("exam.areaAccounting", lang)}, 15% {tt("exam.areaEgypt", lang)}, 10% {tt("exam.areaEthics", lang)}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border bg-secondary/30 px-3.5 py-3 text-[13px]">
                <Timer className="h-4 w-4 text-primary" />
                <span>
                  <b>60 Q · 90 min</b> — {tt("exam.sectionBreakdown", lang)} · {tt("exam.flag", lang)}
                </span>
              </div>
              <Button variant="outline" onClick={() => void startExam("exam60")} disabled={eLoading !== null} className="h-10 w-full">
                {eLoading === "exam60" ? <Loader2 className="me-1.5 h-4 w-4 animate-spin" /> : <AlarmClock className="me-1.5 h-4 w-4" />}
                {tt("exam.sit60", lang)}
              </Button>
              <Button variant="outline" onClick={() => void startExam("exam90")} disabled={eLoading !== null} className="h-10 w-full">
                {eLoading === "exam90" ? <Loader2 className="me-1.5 h-4 w-4 animate-spin" /> : <AlarmClock className="me-1.5 h-4 w-4" />}
                {tt("exam.sit90", lang)}
              </Button>
            </div>
          </section>
        </div>

        {/* past sittings (v20.1 — P0-1 completion) */}
        {history.length > 0 && (
          <section className="mt-6 rounded-2xl border bg-card p-6 shadow-soft" aria-label={tt("exam.examHistory", lang)}>
            <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold">
              <History className="h-4 w-4 text-primary" /> {tt("exam.examHistory", lang)}
            </h2>
            <div className="mt-4 space-y-2">
              {history.slice(0, 8).map((h) => (
                <div key={h.id} className="flex items-center justify-between gap-3 rounded-xl border bg-secondary/25 px-4 py-2.5 text-[13px]">
                  <span className="text-muted-foreground">
                    {h.mode === "exam90" ? "90 min" : "60 min"} ·{" "}
                    {new Date(h.startedAt).toLocaleDateString(dateLocaleOf(lang))}
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-muted-foreground">
                      {h.correct ?? 0}/{h.total} {tt("exam.correctAns", lang)}
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-[12px] font-semibold tabular-nums",
                        (h.score ?? 0) >= 70 ? "bg-sage/15 text-sage-deep" : "bg-primary/10 text-primary"
                      )}
                    >
                      {h.score}%
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    )
  }

  /* ================================================================ */
  /* PRACTICE                                                          */
  /* ================================================================ */
  if (phase === "practice") {
    if (practiceDone) {
      const pct = Math.round((100 * pScore.correct) / Math.max(1, pScore.total))
      return (
        <div className="mx-auto max-w-xl py-10">
          <div className="rounded-2xl border bg-card p-8 text-center shadow-soft">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Trophy className="h-7 w-7" />
            </div>
            <h1 className="mt-5 font-serif text-[24px] font-semibold">{tt("exam.practiceDone", lang)}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {tt("exam.yourAccuracy", lang)}:{" "}
              <b className="text-foreground">
                {pScore.correct}/{pScore.total} ({pct}%)
              </b>
            </p>
            <div className="mx-auto mt-5 max-w-xs">
              <Progress value={pct} className="h-1.5" />
            </div>
            <div className="mt-7 flex flex-col justify-center gap-2.5 sm:flex-row">
              <Button variant="outline" onClick={() => void startPractice()} className="h-10">
                <RotateCcw className="me-1.5 h-4 w-4" /> {tt("exam.retryPractice", lang)}
              </Button>
              <Button onClick={backToHub} className="h-10">
                {tt("exam.backToExam", lang)}
              </Button>
            </div>
          </div>
        </div>
      )
    }

    const q = practice[pIdx]
    const showAr = lang === "ar" && q.stemAr && q.optionsAr
    const stem = showAr ? q.stemAr! : q.stem
    const options = showAr ? q.optionsAr! : q.options
    return (
      <div className="mx-auto max-w-2xl">
        <button
          onClick={backToHub}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-ring"
        >
          <ChevronLeft className="h-4 w-4 rtl:rotate-180" /> {tt("exam.backToExam", lang)}
        </button>
        <div className="mt-4 flex items-center justify-between text-[12.5px] text-muted-foreground">
          <span dir="auto" className="font-medium">
            {q.standardTag} · {tt(AREA_KEYS[q.area] ?? "exam.areaAuditing", lang)} ·{" "}
            {tt(q.difficulty === 1 ? "exam.easy" : q.difficulty === 3 ? "exam.hard" : "exam.medium", lang)}
          </span>
          <span>
            {pIdx + 1} / {practice.length}
          </span>
        </div>
        <Progress value={((pIdx + (pVerdict ? 1 : 0)) / practice.length) * 100} className="mt-2 h-1" />

        <div className="mt-6 rounded-2xl border bg-card p-6 shadow-soft sm:p-8">
          <h1 dir="auto" className="font-serif text-[20px] font-semibold leading-snug tracking-tight">
            {stem}
          </h1>
          <div className="mt-6 space-y-2.5">
            {options.map((opt, i) => {
              const isPicked = pPicked === i
              const isCorrect = pVerdict && i === pVerdict.answerIndex
              const isWrong = pVerdict && isPicked && !pVerdict.correct
              return (
                <button
                  key={i}
                  onClick={() => !pVerdict && setPPicked(i)}
                  disabled={!!pVerdict}
                  className={cn(
                    "flex w-full items-center gap-3.5 rounded-xl border px-4 py-3.5 text-start transition-all focus-ring",
                    isCorrect && "border-sage bg-sage/[0.07]",
                    isWrong && "border-primary bg-primary/[0.05]",
                    pVerdict && !isCorrect && !isWrong && "border-border opacity-55",
                    !pVerdict && isPicked && "border-primary bg-primary/[0.04] ring-1 ring-primary/25",
                    !pVerdict && !isPicked && "border-border hover:border-input hover:bg-secondary/40"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[12px] font-semibold",
                      isCorrect && "border-sage bg-sage text-white",
                      isWrong && "border-primary bg-primary text-white",
                      !pVerdict && isPicked && "border-primary bg-primary text-white",
                      (!pVerdict || (!isCorrect && !isWrong)) && "border-border bg-secondary text-muted-foreground"
                    )}
                  >
                    {isCorrect ? <CheckCircle2 className="h-4 w-4" /> : isWrong ? <XCircle className="h-4 w-4" /> : LETTERS[i]}
                  </span>
                  <span dir="auto" className="text-[14px] leading-relaxed">{opt}</span>
                </button>
              )
            })}
          </div>

          {pVerdict && (
            <div className="mt-5 rounded-xl border border-primary/20 bg-primary/[0.04] p-4">
              <div className="flex items-center gap-2 text-[13px] font-semibold">
                {pVerdict.correct ? (
                  <span className="flex items-center gap-1.5 text-sage-deep">
                    <CheckCircle2 className="h-4 w-4" /> {tt("exam.correct", lang)}
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-primary">
                    <XCircle className="h-4 w-4" /> {tt("exam.notCorrect", lang)} {LETTERS[pVerdict.answerIndex]}
                  </span>
                )}
              </div>
              <p dir="auto" className="mt-2 text-[13.5px] leading-[1.7] text-foreground/80">
                {lang === "ar" && pVerdict.explanationAr ? pVerdict.explanationAr : pVerdict.explanation}
              </p>
            </div>
          )}

          <div className="mt-7 flex justify-end">
            {pVerdict ? (
              <Button onClick={nextPractice} className="h-10">
                {pIdx === practice.length - 1 ? tt("exam.finishPractice", lang) : tt("exam.nextQuestion", lang)}
              </Button>
            ) : (
              <Button onClick={() => void checkPracticeAnswer()} disabled={pPicked === null} className="h-10">
                {tt("exam.checkAnswer", lang)}
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  /* ================================================================ */
  /* SITTING (timed exam)                                              */
  /* ================================================================ */
  if (phase === "sitting" && exam) {
    const q = exam.questions[eIdx]
    const picked = exam.answered[q.id]
    const isFlagged = exam.flagged.includes(q.id)
    const answeredCount = Object.keys(exam.answered).length
    return (
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
            <span className="rounded-full bg-secondary px-2.5 py-1 font-medium">
              {tt("exam.examTitle", lang)} · {exam.total} Q
            </span>
            <span>
              {answeredCount}/{exam.total} {tt("exam.answered", lang)}
            </span>
          </div>
          <div
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[14px] font-semibold tabular-nums",
              secondsLeft < 300 ? "border-primary/40 bg-primary/10 text-primary" : "border-border bg-card"
            )}
          >
            <AlarmClock className="h-4 w-4" />
            {mmss(secondsLeft)}
          </div>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1" aria-label={tt("exam.questionNav", lang)}>
          {exam.questions.map((qq, i) => (
            <button
              key={qq.id}
              onClick={() => setEIdx(i)}
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-[12px] font-medium transition-colors focus-ring",
                i === eIdx && "border-primary bg-primary text-white",
                i !== eIdx && exam.flagged.includes(qq.id) && "border-gold/60 bg-gold/10 text-gold-deep",
                i !== eIdx && exam.answered[qq.id] !== undefined && !exam.flagged.includes(qq.id) && "border-sage/50 bg-sage/10 text-sage-deep",
                i !== eIdx && exam.answered[qq.id] === undefined && !exam.flagged.includes(qq.id) && "border-border bg-secondary/40 text-muted-foreground"
              )}
              aria-label={`Q${i + 1}`}
            >
              {exam.flagged.includes(qq.id) && i !== eIdx ? <Flag className="h-3 w-3" /> : i + 1}
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border bg-card p-6 shadow-soft sm:p-8">
          <div className="flex items-center justify-between text-[12.5px] text-muted-foreground">
            <span dir="auto">{q.standardTag}</span>
            <button
              onClick={() => void toggleFlag()}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[12px] font-medium transition-colors focus-ring",
                isFlagged ? "border-gold/60 bg-gold/10 text-gold-deep" : "border-border hover:bg-secondary/50"
              )}
            >
              <Flag className="h-3.5 w-3.5" />
              {isFlagged ? tt("exam.flagged", lang) : tt("exam.flag", lang)}
            </button>
          </div>
          <h1 dir="auto" className="mt-3 font-serif text-[19px] font-semibold leading-snug tracking-tight">
            {q.stem}
          </h1>
          <div className="mt-6 space-y-2.5">
            {(q.options).map((opt, i) => {
              const isPicked = picked === i
              return (
                <button
                  key={i}
                  onClick={() => void examAnswer(i)}
                  className={cn(
                    "flex w-full items-center gap-3.5 rounded-xl border px-4 py-3.5 text-start transition-all focus-ring",
                    isPicked && "border-primary bg-primary/[0.04] ring-1 ring-primary/25",
                    !isPicked && "border-border hover:border-input hover:bg-secondary/40"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[12px] font-semibold",
                      isPicked ? "border-primary bg-primary text-white" : "border-border bg-secondary text-muted-foreground"
                    )}
                  >
                    {LETTERS[i]}
                  </span>
                  <span dir="auto" className="text-[14px] leading-relaxed">{opt}</span>
                </button>
              )
            })}
          </div>

          <div className="mt-7 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setEIdx((i) => Math.max(0, i - 1))}
              disabled={eIdx === 0}
              className="h-10"
            >
              <ChevronLeft className="me-1 h-4 w-4 rtl:rotate-180" /> {eIdx}
            </Button>
            {eIdx === exam.questions.length - 1 ? (
              <Button onClick={() => void submitExam(false)} className="h-10">
                <FileWarning className="me-1.5 h-4 w-4" /> {tt("exam.submitExam", lang)}
              </Button>
            ) : (
              <Button variant="outline" onClick={() => setEIdx((i) => i + 1)} className="h-10">
                {eIdx + 2} <ChevronLeft className="ms-1 h-4 w-4 rotate-180 rtl:rotate-0" />
              </Button>
            )}
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <Button variant="ghost" size="sm" onClick={() => void submitExam(false)} className="text-muted-foreground">
            {tt("exam.submitExam", lang)}
          </Button>
        </div>
      </div>
    )
  }

  /* ================================================================ */
  /* RESULTS                                                           */
  /* ================================================================ */
  if (phase === "results" && exam && eResult) {
    const sectionRows = Object.entries(exam.sectionScores) as [string, { correct: number; total: number }][]
    return (
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border bg-card p-8 text-center shadow-soft">
          <div
            className={cn(
              "mx-auto flex h-16 w-16 items-center justify-center rounded-full",
              eResult.score >= 70 ? "bg-sage/12 text-sage-deep" : "bg-primary/10 text-primary"
            )}
          >
            <Trophy className="h-7 w-7" />
          </div>
          <h1 className="mt-5 font-serif text-[24px] font-semibold">{tt("exam.results", lang)}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            <b className="text-foreground">
              {eResult.correct}/{eResult.total}
            </b>{" "}
            {tt("exam.correctAns", lang)} — <b className="text-foreground">{eResult.score}%</b> · +{eResult.xpEarned} XP
          </p>
          <div className="mx-auto mt-5 max-w-xs">
            <Progress value={eResult.score} className="h-1.5" />
          </div>
          <p className="mt-4 text-[12.5px] text-muted-foreground">{tt("exam.missedToReview", lang)}</p>
          <Button onClick={backToHub} className="mt-6 h-10">
            {tt("exam.backToExam", lang)}
          </Button>
        </div>

        <section className="mt-6 rounded-2xl border bg-card p-6 shadow-soft">
          <h2 className="font-serif text-[16px] font-semibold">{tt("exam.sectionBreakdown", lang)}</h2>
          <div className="mt-4 space-y-3">
            {sectionRows.map(([area, s]) => (
              <div key={area} className="flex items-center gap-3">
                <span className="w-40 shrink-0 text-[13px] font-medium">{tt(AREA_KEYS[area] ?? "exam.areaAuditing", lang)}</span>
                <Progress value={s.total ? (100 * s.correct) / s.total : 0} className="h-2" />
                <span className="w-16 shrink-0 text-end text-[12.5px] tabular-nums text-muted-foreground">
                  {s.correct}/{s.total}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 space-y-3">
          {exam.questions.map((qq, i) => {
            const myPick = exam.answered[qq.id]
            const answer = eResult.key[qq.id]
            const gotIt = myPick === answer
            return (
              <div key={qq.id} className={cn("rounded-2xl border bg-card p-5 shadow-soft", gotIt ? "border-sage/30" : "border-primary/30")}>
                <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
                  {gotIt ? (
                    <CheckCircle2 className="h-4 w-4 text-sage-deep" />
                  ) : (
                    <XCircle className="h-4 w-4 text-primary" />
                  )}
                  <span>
                    Q{i + 1} · {qq.standardTag}
                  </span>
                </div>
                <p dir="auto" className="mt-2 text-[14px] font-medium leading-relaxed">{qq.stem}</p>
                {!gotIt && (
                  <p dir="auto" className="mt-2 text-[13px] text-primary">
                    {tt("exam.notCorrect", lang)} {LETTERS[answer]} — {qq.options[answer]}
                  </p>
                )}
                <p dir="auto" className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {eResult.explanations[qq.id]}
                </p>
              </div>
            )
          })}
        </section>
      </div>
    )
  }

  return null
}
