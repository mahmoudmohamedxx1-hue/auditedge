"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { tt, dateLocaleOf } from "@/lib/i18n"
import { PAPER_FAMILIES, PAPER_GROUPS, PAPER_SITTINGS, getPastPaper, type PaperFamily } from "@/lib/past-papers"
import { getRouteParam, onRouteParams, setRouteParam, shareUrlFor } from "@/lib/deeplink"
import { ShareButton } from "./share-button"
import { formatForPaper, type PaperFormat } from "@/lib/paper-formats"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import type {
  BankQuestionClient,
  BankStats,
  CrTaskClient,
  ExamSessionClient,
  ExamSummaryRow,
} from "@/lib/audit-types"
import {
  AlarmClock,
  BadgeCheck,
  BookOpenCheck,
  CheckCircle2,
  ChevronLeft,
  ClipboardCheck,
  FileText,
  FileWarning,
  History,
  Flag,
  Layers,
  ListChecks,
  Loader2,
  PenLine,
  RotateCcw,
  Search,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Trophy,
  Wand2,
  XCircle,
} from "lucide-react"

const LETTERS = ["A", "B", "C", "D"]
const AREA_KEYS: Record<string, string> = {
  auditing: "exam.areaAuditing",
  accounting: "exam.areaAccounting",
  egypt: "exam.areaEgypt",
  ethics: "exam.areaEthics",
}

/** v29 — one-tap qualification filters over the paper families: the real
 *  exams now lead the hub, so the long catalog stays scannable by
 *  qualification (ACCA folds its three syllabus levels into one chip). */
const QUAL_CHIPS: { id: string; labelEn: string; labelAr: string; groups: string[] }[] = [
  { id: "all", labelEn: "All", labelAr: "الكل", groups: [] },
  { id: "ifrs", labelEn: "IFRS", labelAr: "IFRS", groups: ["ifrs"] },
  { id: "acca", labelEn: "ACCA", labelAr: "ACCA", groups: ["knowledge", "skills", "strategic"] },
  { id: "cpa", labelEn: "CPA", labelAr: "CPA", groups: ["cpa"] },
  { id: "cfa", labelEn: "CFA", labelAr: "CFA", groups: ["cfa"] },
  { id: "cma", labelEn: "CMA", labelAr: "CMA", groups: ["cma"] },
  { id: "egypt", labelEn: "Egyptian practice", labelAr: "التطبيق المصري", groups: ["egypt"] },
]

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

  // v21: practice flavour — free practice vs. mistake-book drill
  const [pMode, setPMode] = useState<"practice" | "misses">("practice")
  const [missCount, setMissCount] = useState<number | null>(null)

  // v21: one-shot weak-topic prefill from the analytics heatmap
  const prefill = useAppStore((s) => s.examTagPrefill)
  const clearPrefill = useAppStore((s) => s.clearExamTagPrefill)
  useEffect(() => {
    if (prefill) {
      setFTag(prefill)
      clearPrefill()
    }
  }, [prefill, clearPrefill])

  // v21: outstanding misses count (for the hub card)
  useEffect(() => {
    let alive = true
    void (async () => {
      const res = await fetch("/api/bank/misses")
      if (!res.ok || !alive) return
      const data = (await res.json()) as { count: number }
      if (alive) setMissCount(data.count)
    })()
    return () => {
      alive = false
    }
  }, [phase])

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
    setPMode("practice")
    setPractice(questions)
    setPIdx(0)
    setPPicked(null)
    setPVerdict(null)
    setPScore({ correct: 0, total: 0 })
    setPracticeDone(false)
    setPhase("practice")
  }

  /** v21 mistake book: drill exactly the questions whose latest attempt was
   *  wrong. A correct answer here redeems the question in the book. */
  const startMisses = async () => {
    setPLoading(true)
    const res = await fetch("/api/bank/misses")
    setPLoading(false)
    if (!res.ok) return
    const { questions } = (await res.json()) as { questions: BankQuestionClient[] }
    if (!questions.length) return
    setPMode("misses")
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
    timedOut: boolean
    avgSecs: number | null
    key: Record<string, number>
    explanations: Record<string, string>
    explanationsAr: Record<string, string>
  } | null>(null)
  const submitLock = useRef(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  // v21 pacing: seconds spent on each question (first answer only)
  const timingsRef = useRef<Record<string, number>>({})
  const [qShownAt, setQShownAt] = useState(0)

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
    setSecIdx(0)
    setSecStarted(false)
    setCrIdx(0)
    setWrittenDraft({})
    setMarking(false)
    setMarkInfo(null)
    setPhase("sitting")
  }

  /* ---------- v22: previous-exam paper sitting ---------- */
  const [paperLoading, setPaperLoading] = useState<string | null>(null)
  // v27 — the per-exam paper picker: every family opens a dialog listing its
  // flagship + four dated sittings so the learner CHOOSES between the
  // previous exams
  const [pickerFamily, setPickerFamily] = useState<PaperFamily | null>(null)
  // v32 — deep-linkable paper picker: #/exam?paper=cpa-far opens that exact
  // exam family (shareable), and back/forward keeps the picker in step
  const openPicker = (f: PaperFamily | null) => {
    setPickerFamily(f)
    setRouteParam("paper", f?.id ?? null)
  }
  useEffect(() => {
    const id = getRouteParam("paper")
    const fam = id ? PAPER_FAMILIES.find((f) => f.id === id) : null
    if (fam) setPickerFamily(fam)
    return onRouteParams((params) => {
      const pid = params.get("paper")
      const f = pid ? PAPER_FAMILIES.find((x) => x.id === pid) : null
      setPickerFamily(f ?? null)
    })
  }, [])
  // v27 — sectioned sitting state (testlets / Section A-B / sessions)
  const [secIdx, setSecIdx] = useState(0)
  const [secStarted, setSecStarted] = useState(false)
  const [crIdx, setCrIdx] = useState(0)
  const [writtenDraft, setWrittenDraft] = useState<Record<string, string[]>>({})
  const [savedTask, setSavedTask] = useState<string | null>(null)
  // v27 — AI examiner marking (results phase)
  const [marking, setMarking] = useState(false)
  const [markInfo, setMarkInfo] = useState<{ ai: number; fallback: number } | null>(null)
  // v26 — papers search lifted to the store ("ifrs", "cpa", "aa"…): the
  // Courses page deep-links here with the track pre-filled, and the query
  // survives navigation like the catalog filters do
  const familyQuery = useAppStore((s) => s.examSearch)
  const setFamilyQuery = useAppStore((s) => s.setExamSearch)
  const familyQ = familyQuery.trim().toLowerCase()
  // v29 — qualification filter chips over the paper families (the real
  // qualifications lead the hub now, so one-tap filtering keeps the long
  // catalog scannable: All · IFRS · ACCA · CPA · CFA · CMA · Egypt)
  const [qualFilter, setQualFilter] = useState<string>("all")
  /* v29 — performance overview: the hub opens with the learner's own
   *  numbers (attempts / average / best / pass rate) computed from the
   *  completed sittings, before any paper is picked. */
  const graded = useMemo(
    () => history.filter((h) => h.completedAt && h.score !== null),
    [history]
  )
  const perf = useMemo(() => {
    const scores = graded.map((h) => h.score ?? 0)
    const n = scores.length
    return {
      attempts: n,
      avg: n ? Math.round(scores.reduce((a, b) => a + b, 0) / n) : null,
      best: n ? Math.max(...scores) : null,
      pass: n ? Math.round((scores.filter((s) => s >= 50).length / n) * 100) : null,
    }
  }, [graded])
  /** v29 — per-family attempt stats (badge on every family card): how many
   *  of this exam's five papers the learner sat, and their best score. */
  const familyStats = useCallback(
    (f: PaperFamily) => {
      const ids = new Set([f.flagship.id, ...f.sittings.map((s) => s.id)])
      const rows = history.filter(
        (h) => h.completedAt && h.mode.startsWith("paper:") && ids.has(h.mode.slice(6))
      )
      const scores = rows.map((r) => r.score ?? 0)
      return { attempts: rows.length, best: scores.length ? Math.max(...scores) : null }
    },
    [history]
  )
  const startPaper = async (paperId: string) => {
    setPaperLoading(paperId)
    const res = await fetch("/api/bank/exam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paper: paperId }),
    })
    setPaperLoading(null)
    if (!res.ok) {
      toast.error(tt("exam.paperFailed", lang))
      return
    }
    const { session } = (await res.json()) as { session: ExamSessionClient }
    setExam(session)
    setEIdx(0)
    setEResult(null)
    setSecondsLeft(session.durationMin * 60)
    // v27 — sectioned sitting bootstrap
    setSecIdx(0)
    setSecStarted(false)
    setCrIdx(0)
    setWrittenDraft({ ...(session.written ?? {}) })
    setSavedTask(null)
    setMarking(false)
    setMarkInfo(null)
    setPickerFamily(null)
    setRouteParam("paper", null)
    setPhase("sitting")
  }

  /* ---------- v22: AI custom-exam builder (client-driven chunks) ----------
   *  v23: named sizes — micro (5) / mini (10) / standard (15) / full (24) */
  const [customOpen, setCustomOpen] = useState(false)
  const [cTopic, setCTopic] = useState("")
  const [cArea, setCArea] = useState("auditing")
  const [cDiff, setCDiff] = useState("2")
  const [cCount, setCCount] = useState("10")
  const [cLang, setCLang] = useState("bilingual")
  const [cLoading, setCLoading] = useState(false)
  const [cProgress, setCProgress] = useState(0)
  const [cError, setCError] = useState<string | null>(null)

  const EXAM_SIZES: { count: string; labelKey: string }[] = [
    { count: "5", labelKey: "exam.sizeMicro" },
    { count: "10", labelKey: "exam.sizeMini" },
    { count: "15", labelKey: "exam.sizeStandard" },
    { count: "24", labelKey: "exam.sizeFull" },
  ]

  const startCustomExam = async () => {
    if (!cTopic.trim() || cLoading) return
    setCLoading(true)
    setCError(null)
    setCProgress(0)
    const target = Number(cCount)
    const collected: unknown[] = []
    let failures = 0
    // chunked generation — each request writes a small batch (serverless-safe);
    // a micro exam (5) fits in a single batch
    const batch = target <= 5 ? 5 : 3
    while (collected.length < target && failures < 2) {
      const res = await fetch("/api/ai/exam-generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "chunk",
          topic: cTopic.trim(),
          area: cArea,
          difficulty: Number(cDiff),
          lang: cLang,
          count: Math.min(batch, target - collected.length),
          avoid: (collected as { stem?: unknown }[]).map((q) => String(q?.stem ?? "")),
        }),
      }).catch(() => null)
      if (!res || !res.ok) {
        failures++
        await new Promise((r) => setTimeout(r, 1500))
        continue
      }
      const data = (await res.json()) as { questions?: unknown[] }
      if (!data.questions?.length) {
        failures++
        continue
      }
      collected.push(...data.questions)
      setCProgress(Math.min(collected.length, target))
    }
    if (collected.length < 3) {
      setCLoading(false)
      setCError(tt("exam.customFailed", lang))
      return
    }
    // finalize — persist + open the sitting
    const fin = await fetch("/api/ai/exam-generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "finalize",
        topic: cTopic.trim(),
        area: cArea,
        difficulty: Number(cDiff),
        timed: true,
        questions: collected,
      }),
    }).catch(() => null)
    setCLoading(false)
    if (!fin || !fin.ok) {
      const j = fin ? ((await fin.json().catch(() => ({}))) as { error?: string }) : {}
      setCError(j.error ?? tt("exam.customFailed", lang))
      return
    }
    const { session } = (await fin.json()) as { session: ExamSessionClient }
    setCustomOpen(false)
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
    // v21 pacing: record the first-answer dwell time for this question
    if (!(q.id in exam.answered) && qShownAt) {
      timingsRef.current[q.id] = Math.max(1, Math.round((Date.now() - qShownAt) / 1000))
    }
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

  // v21: reset the per-question clock whenever the sitting question changes
  useEffect(() => {
    if (phase === "sitting") setQShownAt(Date.now())
  }, [eIdx, phase])

  /* ---------- v27: constructed-response answer saving ---------- */
  const saveWritten = async (taskId: string) => {
    if (!exam) return
    const values = writtenDraft[taskId]
    if (!values) return
    setSavedTask(taskId)
    await fetch(`/api/bank/exam/${exam.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "answerWritten", taskId, values }),
    }).catch(() => null)
  }

  /** v27 — the AI examiner pass: after submit, the written answers are
   *  marked against the certified solutions and the blended final score
   *  replaces the provisional MCQ score. */
  const runAiMarking = useCallback(
    async (sessionId: string) => {
      setMarking(true)
      setMarkInfo(null)
      const res = await fetch("/api/ai/exam-mark", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, lang }),
      }).catch(() => null)
      if (res && res.ok) {
        const data = (await res.json()) as {
          crMarks?: Record<string, { awarded: number; feedback: string }[]>
          score?: number
          markedByAi?: number
          markedByFallback?: number
        }
        setMarkInfo({ ai: data.markedByAi ?? 0, fallback: data.markedByFallback ?? 0 })
        // reload the session: final score + certified solutions revealed
        const full = await fetch(`/api/bank/exam/${sessionId}`)
        if (full.ok) {
          const d = (await full.json()) as { session: ExamSessionClient }
          setExam(d.session)
          if (data.score !== undefined) {
            setEResult((r) => (r ? { ...r, score: data.score! } : r))
          }
        }
      }
      setMarking(false)
      void useAppStore.getState().bootstrap()
    },
    [lang]
  )

  const submitExam = useCallback(
    async (auto = false) => {
      if (!exam || submitLock.current) return
      if (!auto && !window.confirm(tt("exam.confirmSubmit", lang))) return
      submitLock.current = true
      // flush any unsaved CR drafts before grading
      const crIds = (exam.sections ?? []).flatMap((s) => s.crTaskIds ?? [])
      for (const tid of crIds) await saveWritten(tid)
      const res = await fetch(`/api/bank/exam/${exam.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "submit" }),
      })
      submitLock.current = false
      if (!res.ok) return
      const result = (await res.json()) as {
        score: number
        correct: number
        total: number
        xpEarned: number
        timedOut: boolean
        crPending?: boolean
      }
      // v21 pacing: average seconds per answered question
      const timings = Object.values(timingsRef.current)
      const avgSecs = timings.length ? Math.round(timings.reduce((a, b) => a + b, 0) / timings.length) : null
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
          timedOut: result.timedOut ?? false,
          avgSecs,
          key: data.session.key ?? {},
          explanations: data.session.explanations ?? {},
          explanationsAr: data.session.explanationsAr ?? {},
        })
      }
      setPhase("results")
      void useAppStore.getState().bootstrap()
      // v27 — written sections: hand the answers to the AI examiner
      if (result.crPending) void runAiMarking(exam.id)
    },
    [exam, lang, writtenDraft]
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
      <div className="mx-auto max-w-5xl">
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

        {/* v29 — PERFORMANCE OVERVIEW: the learner's own numbers open the
            hub (completed sittings / average / best / pass rate) so progress
            reads at a glance before any paper is picked. */}
        <section
          className="mb-6 grid grid-cols-2 gap-3 rounded-2xl border bg-card p-4 shadow-soft sm:grid-cols-4"
          aria-label={tt("exam29.overviewTitle", lang)}
        >
          {(
            [
              { icon: ClipboardCheck, label: tt("exam29.attempts", lang), value: perf.attempts, suffix: "" },
              { icon: TrendingUp, label: tt("exam29.avgScore", lang), value: perf.avg, suffix: "%" },
              { icon: Trophy, label: tt("exam29.bestScore", lang), value: perf.best, suffix: "%" },
              { icon: BadgeCheck, label: tt("exam29.passRate", lang), value: perf.pass, suffix: "%" },
            ] as const
          ).map((s) => (
            <div key={s.label} className="rounded-xl border bg-secondary/25 px-3.5 py-3">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                <s.icon className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span className="truncate">{s.label}</span>
              </div>
              <div className="mt-1.5 font-serif text-[22px] font-semibold tabular-nums leading-none">
                {s.value === null ? "—" : `${s.value}${s.suffix}`}
              </div>
            </div>
          ))}
        </section>
        {perf.attempts === 0 && (
          <p className="mb-6 rounded-xl border border-dashed px-4 py-3 text-center text-[12.5px] text-muted-foreground">
            {tt("exam29.noAttempts", lang)}
          </p>
        )}

        {/* v22–v25 — previous exam papers: every family grouped by syllabus
            *  level, each carrying FIVE sittings (flagship + four dated
            *  years) + a search box so the IFRS diploma is impossible to miss.
            *  v29 — the papers now LEAD the hub (they are the heart of the
            *  section), with one-tap qualification filter chips. */}
        <section className="rounded-2xl border bg-card p-6 shadow-soft" aria-label={tt("exam.papersTitle", lang)}>
          <h2 className="flex flex-wrap items-center gap-2 font-serif text-[18px] font-semibold">
            <FileText className="h-4 w-4 text-primary" /> {tt("exam.papersTitle", lang)}
            <span className="rounded-full border border-olive/30 bg-olive/10 px-2 py-px text-[10px] font-semibold text-olive-deep">
              {tt("exam29.papersLead", lang)}
            </span>
          </h2>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{tt("exam.papersDesc", lang)}</p>

          {/* v29 — one-tap qualification filter (All · IFRS · ACCA · CPA · CFA · CMA · Egypt) */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5" aria-label={tt("exam29.filterBy", lang)}>
            <span className="me-0.5 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              {tt("exam29.filterBy", lang)}
            </span>
            {QUAL_CHIPS.map((c) => {
              const n =
                c.id === "all"
                  ? PAPER_FAMILIES.length
                  : PAPER_FAMILIES.filter((f) => c.groups.includes(f.group)).length
              return (
                <button
                  key={c.id}
                  onClick={() => setQualFilter(c.id)}
                  aria-pressed={qualFilter === c.id}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] transition-colors focus-ring",
                    qualFilter === c.id
                      ? "border-primary/35 bg-primary/10 font-semibold text-primary"
                      : "bg-card/60 text-muted-foreground hover:text-foreground"
                  )}
                >
                  {c.id === "all" ? tt("exam29.filterAll", lang) : lang === "ar" ? c.labelAr : c.labelEn}
                  <span
                    className={cn(
                      "rounded-full px-1.5 text-[10px] tabular-nums",
                      qualFilter === c.id ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"
                    )}
                  >
                    {n}
                  </span>
                </button>
              )
            })}
          </div>

          {/* v25 — find-any-paper search ("ifrs", "tax", "aa"…) */}
          <div className="relative mt-3 max-w-sm">
            <Search className="pointer-events-none absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={familyQuery}
              onChange={(e) => setFamilyQuery(e.target.value)}
              placeholder={tt("exam.paperSearchPh", lang)}
              className="h-9 bg-background ps-8 text-[13px]"
            />
          </div>

          {PAPER_GROUPS.filter((g) => {
            const chip = QUAL_CHIPS.find((q) => q.id === qualFilter)
            return !chip || chip.id === "all" || chip.groups.includes(g.id)
          }).map((g) => {
            const fams = PAPER_FAMILIES.filter(
              (f) =>
                f.group === g.id &&
                (!familyQ ||
                  `${f.titleEn} ${f.titleAr} ${f.flagship.body} ${f.flagship.blurbEn} ${f.flagship.blurbAr}`
                    .toLowerCase()
                    .includes(familyQ))
            )
            if (!fams.length) return null
            return (
              <div key={g.id} className="mt-5">
                {/* syllabus-level header */}
                <div className="mb-3 flex items-center gap-2.5">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full",
                      g.id === "ifrs" && "bg-olive",
                      g.id === "knowledge" && "bg-olive",
                      g.id === "skills" && "bg-primary",
                      g.id === "strategic" && "bg-plum",
                      g.id === "egypt" && "bg-gold",
                      // v26 — the CPA / CFA / CMA course tracks
                      g.id === "cpa" && "bg-clay-deep",
                      g.id === "cfa" && "bg-teal-600",
                      g.id === "cma" && "bg-sage-deep"
                    )}
                  />
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {lang === "ar" ? g.labelAr : g.labelEn}
                  </h3>
                  <span className="rounded-full bg-secondary px-1.5 py-px text-[10px] tabular-nums text-muted-foreground">
                    {fams.length}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {fams.map((f) => {
                    const flagship = f.flagship
                    // v27 — real-exam format preview on the family card
                    const fmt = formatForPaper(f.id)
                    const structLine = fmt
                      ? fmt.sections
                          .map((s) =>
                            s.kind === "mcq"
                              ? `${s.titleEn.split(" — ")[0]} · ${s.count} Q`
                              : `${s.titleEn.split(" — ")[0]} · ${s.tasks} ${
                                  lang === "ar" ? "مهام" : s.id.startsWith("t") ? "TBS" : "tasks"
                                }`
                          )
                          .join(" → ")
                      : `${flagship.count} Q · ${flagship.durationMin}${tt("exam.minutesShort", lang)}`
                    return (
                      <div
                        key={f.id}
                        className="flex flex-col rounded-xl border bg-secondary/25 p-4 transition-colors hover:border-primary/30"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 dir="auto" className="text-[14px] font-semibold leading-snug">
                            {lang === "ar" ? f.titleAr : f.titleEn}
                          </h3>
                          <span className="flex shrink-0 flex-col items-end gap-1">
                            <span className="rounded-full border border-plum/30 bg-plum/10 px-2 py-0.5 text-[10px] font-semibold text-plum-deep">
                              {flagship.body}
                            </span>
                            {/* full-length flagship badge */}
                            {flagship.count >= 24 && (
                              <span className="rounded-full border border-olive/30 bg-olive/10 px-2 py-0.5 text-[10px] font-semibold text-olive-deep">
                                {tt("exam.paperFull", lang)}
                              </span>
                            )}
                            {/* v27 — real-format badge */}
                            {fmt && (
                              <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/[0.07] px-2 py-0.5 text-[10px] font-semibold text-primary">
                                <BadgeCheck className="h-3 w-3" /> {tt("exam.paperRealFormat", lang)}
                              </span>
                            )}
                            {/* v29 — this learner's attempts on this exam */}
                            {(() => {
                              const fs = familyStats(f)
                              if (!fs.attempts) return null
                              return (
                                <span className="rounded-full border border-sage/40 bg-sage/10 px-2 py-0.5 text-[10px] font-semibold text-sage-deep">
                                  {fs.attempts}× {tt("exam29.attempted", lang)} · {tt("exam29.best", lang)} {fs.best}%
                                </span>
                              )
                            })()}
                          </span>
                        </div>
                        <p dir="auto" className="mt-1.5 flex-1 text-[12px] leading-relaxed text-muted-foreground">
                          {lang === "ar" ? flagship.blurbAr : flagship.blurbEn}
                        </p>
                        {/* v27 — structure line (testlets / sections / sessions) */}
                        <p dir="auto" className="mt-2 text-[11px] font-medium text-primary/90">
                          {structLine}
                        </p>
                        {/* v29 — the five papers at a glance: flagship + the
                            four dated years, so the five-sitting promise is
                            visible without opening the picker */}
                        <div className="mt-2 flex flex-wrap items-center gap-1">
                          <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[9.5px] font-semibold text-primary">
                            {tt("exam29.flagshipChip", lang)}
                          </span>
                          {f.sittings.map((s, i) => {
                            const label = PAPER_SITTINGS[i]?.label ?? s.titleEn.split(" — ").pop() ?? ""
                            const labelAr = PAPER_SITTINGS[i]?.labelAr ?? s.titleAr.split(" — ").pop() ?? ""
                            return (
                              <span
                                key={s.id}
                                className="rounded bg-secondary/70 px-1.5 py-0.5 text-[9.5px] font-medium text-muted-foreground"
                              >
                                {lang === "ar" ? labelAr : label}
                              </span>
                            )
                          })}
                          {/* v32 — share this exact exam family (#/exam?paper=…) */}
                          <span className="ms-auto">
                            <ShareButton
                              url={shareUrlFor("exam", { param: ["paper", f.id] })}
                              title={lang === "ar" ? f.titleAr : f.titleEn}
                              variant="ghost"
                              className="h-6 w-6 px-0"
                            />
                          </span>
                        </div>
                        {/* v27 — one button opens the paper picker: choose
                            between the flagship + the four dated sittings */}
                        <div className="mt-3">
                          <button
                            onClick={() => openPicker(f)}
                            disabled={paperLoading !== null || eLoading !== null}
                            className={cn(
                              "inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-primary/35 bg-primary/[0.07] px-2.5 py-1.5 text-[11.5px] font-semibold text-primary transition-colors hover:bg-primary/[0.14] focus-ring disabled:opacity-50"
                            )}
                          >
                            {paperLoading ? (
                              <Loader2 className="h-3 w-3 animate-spin" />
                            ) : (
                              <ClipboardCheck className="h-3.5 w-3.5" />
                            )}
                            {tt("exam.paperPicker", lang)} · {1 + f.sittings.length}
                          </button>
                        </div>
                      </div>
                    )
                  })}

                  {/* AI custom exam builder card rides along the last group */}
                  {g.id === "egypt" && (
                    <div className="flex flex-col rounded-xl border border-dashed border-primary/35 bg-primary/[0.04] p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 dir="auto" className="text-[14px] font-semibold leading-snug">
                          {tt("exam.customTitle", lang)}
                        </h3>
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-olive/30 bg-olive/10 px-2 py-0.5 text-[10px] font-semibold text-olive-deep">
                          <Wand2 className="h-3 w-3" /> AI
                        </span>
                      </div>
                      <p dir="auto" className="mt-1.5 flex-1 text-[12px] leading-relaxed text-muted-foreground">
                        {tt("exam.customDesc", lang)}
                      </p>
                      <div className="mt-3 flex justify-end">
                        <Button size="sm" className="h-8" variant="secondary" onClick={() => setCustomOpen(true)}>
                          <Sparkles className="me-1 h-3.5 w-3.5" /> {tt("exam.customOpen", lang)}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </section>

        {/* v29 — QUICK TOOLS below the real papers: the practice builder and
            the 60/90-minute mocks stay one tap away, but the qualification
            papers — the heart of the section — now lead. */}
        <h2 className="mb-3 mt-6 flex items-center gap-2 font-serif text-[18px] font-semibold">
          <Target className="h-4 w-4 text-primary" /> {tt("exam29.quickTools", lang)}
        </h2>
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
              {missCount !== null && missCount > 0 && (
                <Button
                  variant="secondary"
                  onClick={() => void startMisses()}
                  disabled={pLoading}
                  className="h-10 w-full"
                >
                  <Target className="me-1.5 h-4 w-4" />
                  {tt("exam.drillMisses", lang)} ({missCount})
                </Button>
              )}
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
                    {h.mode === "ai-custom"
                      ? tt("exam.aiCustomLabel", lang)
                      : h.mode.startsWith("paper:")
                        ? (() => {
                            const p = getPastPaper(h.mode.slice(6))
                            return p ? (lang === "ar" ? p.titleAr : p.titleEn) : h.mode
                          })()
                        : h.mode === "exam90"
                          ? "90 min"
                          : "60 min"} ·{" "}
                    {new Date(h.startedAt).toLocaleDateString(dateLocaleOf(lang))}
                  </span>
                  <span className="flex items-center gap-3">
                    {h.timedOut && (
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                        {tt("exam.timedOutBadge", lang)}
                      </span>
                    )}
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

        {/* v22: AI custom-exam builder dialog */}
        <Dialog open={customOpen} onOpenChange={(v) => (v ? setCustomOpen(true) : (setCustomOpen(false), setCError(null)))}>
          <DialogContent className="sm:max-w-[480px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 font-serif">
                <Wand2 className="h-4 w-4 text-primary" /> {tt("exam.customTitle", lang)}
              </DialogTitle>
              <DialogDescription>{tt("exam.customDesc", lang)}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="cexam-topic">{tt("exam.customTopic", lang)}</Label>
                <Input
                  id="cexam-topic"
                  dir="auto"
                  value={cTopic}
                  onChange={(e) => setCTopic(e.target.value)}
                  placeholder={tt("exam.customTopicPh", lang)}
                  maxLength={300}
                />
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["ISA 315 risk assessment", "IFRS 16 leases", "Going concern — ISA 570", "IFRS 15 revenue", "Audit evidence — ISA 500"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setCTopic(s)}
                      className="rounded-full border bg-secondary/50 px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label>{tt("exam.customArea", lang)}</Label>
                  <Select value={cArea} onValueChange={setCArea}>
                    <SelectTrigger className="h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auditing">{tt("exam.areaAuditing", lang)}</SelectItem>
                      <SelectItem value="accounting">{tt("exam.areaAccounting", lang)}</SelectItem>
                      <SelectItem value="egypt">{tt("exam.areaEgypt", lang)}</SelectItem>
                      <SelectItem value="ethics">{tt("exam.areaEthics", lang)}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label>{tt("exam.customDiff", lang)}</Label>
                  <Select value={cDiff} onValueChange={setCDiff}>
                    <SelectTrigger className="h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">{tt("exam.easy", lang)}</SelectItem>
                      <SelectItem value="2">{tt("exam.medium", lang)}</SelectItem>
                      <SelectItem value="3">{tt("exam.hard", lang)}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* v23 — exam size: micro / mini / standard / full mock */}
              <div className="space-y-1.5">
                <Label>{tt("exam.customSize", lang)}</Label>
                <div className="grid grid-cols-2 gap-2">
                  {EXAM_SIZES.map((s) => (
                    <button
                      key={s.count}
                      type="button"
                      onClick={() => setCCount(s.count)}
                      aria-pressed={cCount === s.count}
                      className={cn(
                        "rounded-lg border px-3 py-2 text-start text-[12px] leading-snug transition-colors focus-ring",
                        cCount === s.count
                          ? "border-primary/40 bg-primary/10 font-semibold text-primary"
                          : "bg-card/60 text-muted-foreground hover:border-input hover:text-foreground"
                      )}
                    >
                      {tt(s.labelKey as never, lang)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label>{tt("exam.customLang", lang)}</Label>
                <Select value={cLang} onValueChange={setCLang}>
                  <SelectTrigger className="h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bilingual">{tt("exam.customLangBi", lang)}</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ar">العربية</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {cError && (
                <p className="rounded-lg border border-gold/35 bg-gold/[0.08] px-3 py-2 text-[12.5px] text-gold-deep" dir="auto">
                  {cError}
                </p>
              )}
            </div>
            <DialogFooter>
              <Button onClick={() => void startCustomExam()} disabled={!cTopic.trim() || cLoading} className="w-full sm:w-auto">
                {cLoading ? <Loader2 className="me-1.5 h-4 w-4 animate-spin" /> : <Sparkles className="me-1.5 h-4 w-4" />}
                {cLoading
                  ? `${tt("exam.customGenerating", lang)} ${cProgress}/${Number(cCount)}`
                  : tt("exam.customGenerate", lang)}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* v27 — the per-exam PAPER PICKER: a separate popup per exam showing
            every previous paper to choose between (flagship + 4 sittings),
            each with its structure, duration and the real-exam blueprint. */}
        <Dialog open={!!pickerFamily} onOpenChange={(v) => !v && openPicker(null)}>
          <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-[560px]">
            {pickerFamily && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 font-serif" dir="auto">
                    <FileText className="h-4 w-4 text-primary" />
                    {lang === "ar" ? pickerFamily.titleAr : pickerFamily.titleEn} —{" "}
                    {tt("exam.paperPicker", lang)}
                  </DialogTitle>
                  <DialogDescription>{tt("exam.paperPickerDesc", lang)}</DialogDescription>
                </DialogHeader>

                {/* the real exam's blueprint */}
                {(() => {
                  const fmt = formatForPaper(pickerFamily.id)
                  if (!fmt) return null
                  return (
                    <div className="rounded-xl border border-primary/25 bg-primary/[0.05] p-3.5">
                      <div className="flex items-center gap-1.5 text-[12px] font-semibold text-primary">
                        <BadgeCheck className="h-3.5 w-3.5" /> {tt("exam.paperPickerReal", lang)}
                      </div>
                      <p dir="auto" className="mt-1.5 text-[12.5px] leading-relaxed text-foreground/80">
                        {lang === "ar" ? fmt.realAr : fmt.realEn}
                      </p>
                      <div className="mt-2.5 space-y-1.5">
                        {fmt.sections.map((s) => (
                          <div
                            key={s.id}
                            className="flex items-center justify-between gap-2 rounded-lg bg-card/70 px-3 py-1.5 text-[12px]"
                          >
                            <span dir="auto" className="flex items-center gap-1.5 font-medium">
                              {s.kind === "mcq" ? (
                                <ListChecks className="h-3.5 w-3.5 text-muted-foreground" />
                              ) : (
                                <PenLine className="h-3.5 w-3.5 text-muted-foreground" />
                              )}
                              {lang === "ar" ? s.titleAr : s.titleEn}
                            </span>
                            <span className="shrink-0 tabular-nums text-muted-foreground">
                              {s.kind === "mcq"
                                ? `${s.count} Q`
                                : `${s.tasks} ${lang === "ar" ? "مهام" : "tasks"}`}{" "}
                              · {Math.round(s.weight * 100)}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })()}

                {/* the papers: flagship first, then dated sittings */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                    {tt("exam.paperPickerStructure", lang)} · {1 + pickerFamily.sittings.length}
                  </div>
                  {[
                    { p: pickerFamily.flagship, label: tt("exam.paperPickerFlagship", lang), primary: true },
                    ...pickerFamily.sittings.map((s) => ({
                      p: s,
                      label:
                        lang === "ar"
                          ? PAPER_SITTINGS.find((x) => x.slug === s.id.split("-").pop())?.labelAr
                          : (s.titleEn.split(" — ").pop() as string),
                      primary: false,
                    })),
                  ].map(({ p, label, primary }) => (
                    <button
                      key={p.id}
                      onClick={() => void startPaper(p.id)}
                      disabled={paperLoading !== null || eLoading !== null}
                      className={cn(
                        "flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-start transition-colors focus-ring disabled:opacity-50",
                        primary
                          ? "border-primary/35 bg-primary/[0.06] hover:bg-primary/[0.1]"
                          : "bg-card/60 hover:border-primary/30"
                      )}
                    >
                      <span className="min-w-0">
                        <span dir="auto" className="flex items-center gap-2 text-[13.5px] font-semibold">
                          {paperLoading === p.id && <Loader2 className="h-3.5 w-3.5 animate-spin text-primary" />}
                          {label}
                          {primary && (
                            <span className="rounded-full border border-olive/30 bg-olive/10 px-1.5 py-px text-[10px] font-semibold text-olive-deep">
                              {p.count} Q
                            </span>
                          )}
                        </span>
                        <span className="mt-0.5 block text-[12px] text-muted-foreground">
                          {p.count} Q · {p.durationMin} {tt("exam.minutesShort", lang)}
                          {formatForPaper(p.id) ? ` · ${tt("exam.paperRealFormat", lang)}` : ""}
                        </span>
                      </span>
                      <ClipboardCheck className="h-4 w-4 shrink-0 text-primary" />
                    </button>
                  ))}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
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
            <h1 className="mt-5 font-serif text-[24px] font-semibold">
            {pMode === "misses" ? tt("exam.missesDone", lang) : tt("exam.practiceDone", lang)}
          </h1>
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
    const sections = exam.sections ?? []
    const sectioned = sections.length > 0

    /* ---------- v27: sectioned sitting (testlets / A-B / sessions) ---------- */
    if (sectioned) {
      const sec = sections[Math.min(secIdx, sections.length - 1)]
      // plain map — recomputed per render (no conditional hooks)
      const qIdxGlobal = new Map(exam.questions.map((q, i) => [q.id, i] as const))

      /* ----- section landing view ----- */
      if (!secStarted) {
        const secQCount = sec.kind === "mcq" ? (sec.mcqIds ?? []).length : 0
        const secTCount = sec.kind === "cr" ? (sec.crTaskIds ?? []).length : 0
        return (
          <div className="mx-auto max-w-2xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-[13px] text-muted-foreground">
                {tt("exam.sectionNav", lang)} {secIdx + 1}/{sections.length}
              </span>
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

            <div className="mt-6 rounded-2xl border bg-card p-8 shadow-soft">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold",
                  sec.kind === "mcq" ? "bg-secondary text-foreground" : "border border-primary/30 bg-primary/[0.07] text-primary"
                )}
              >
                {sec.kind === "mcq" ? (
                  <ListChecks className="h-3.5 w-3.5" />
                ) : (
                  <PenLine className="h-3.5 w-3.5" />
                )}
                {sec.kind === "mcq" ? tt("exam.sectionMcq", lang) : tt("exam.sectionCr", lang)}
              </span>
              <h1 dir="auto" className="mt-4 font-serif text-[24px] font-semibold leading-tight">
                {lang === "ar" ? sec.titleAr : sec.titleEn}
              </h1>
              <p dir="auto" className="mt-2.5 text-[13.5px] leading-relaxed text-muted-foreground">
                {lang === "ar" ? sec.noteAr : sec.noteEn}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2 text-[12.5px]">
                <span className="rounded-full bg-secondary px-2.5 py-1 font-medium tabular-nums">
                  {sec.kind === "mcq" ? `${secQCount} Q` : `${secTCount} ${lang === "ar" ? "مهام" : "tasks"}`}
                </span>
                <span className="rounded-full border px-2.5 py-1 tabular-nums text-muted-foreground">
                  {tt("exam.sectionWeight", lang)}: {Math.round(sec.weight * 100)}%
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <Button
                  className="h-10"
                  onClick={() => {
                    if (sec.kind === "mcq") {
                      const firstId = (sec.mcqIds ?? [])[0]
                      const gi = firstId ? qIdxGlobal.get(firstId) : undefined
                      setEIdx(gi ?? 0)
                    } else {
                      setCrIdx(0)
                    }
                    setSecStarted(true)
                  }}
                >
                  <BookOpenCheck className="me-1.5 h-4 w-4" /> {tt("exam.sectionBegin", lang)}
                </Button>
                {secIdx > 0 && (
                  <Button
                    variant="ghost"
                    className="h-10"
                    onClick={() => {
                      setSecIdx(secIdx - 1)
                      setSecStarted(true)
                    }}
                  >
                    <ChevronLeft className="me-1 h-4 w-4 rtl:rotate-180" /> {sections[secIdx - 1].titleEn.split(" — ")[0]}
                  </Button>
                )}
              </div>
            </div>

            {/* section pills overview */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {sections.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setSecIdx(i)
                    setSecStarted(false)
                  }}
                  className={cn(
                    "rounded-full border px-3 py-1 text-[11.5px] font-medium transition-colors focus-ring",
                    i === secIdx
                      ? "border-primary bg-primary text-white"
                      : "bg-card/70 text-foreground/75 hover:border-primary/30"
                  )}
                >
                  {i + 1}. {lang === "ar" ? s.titleAr : s.titleEn}
                </button>
              ))}
            </div>
          </div>
        )
      }

      /* ----- running section ----- */
      if (sec.kind === "mcq") {
        const secQIds = sec.mcqIds ?? []
        const localIdx = Math.max(0, secQIds.indexOf(exam.questions[eIdx]?.id ?? ""))
        const q = exam.questions[eIdx]
        if (!q) return null
        const picked = exam.answered[q.id]
        const isFlagged = exam.flagged.includes(q.id)
        const secAnswered = secQIds.filter((qid) => exam.answered[qid] !== undefined).length
        const showAr = lang === "ar" && q.stemAr && q.optionsAr
        const stem = showAr ? q.stemAr! : q.stem
        const options = showAr ? q.optionsAr! : q.options
        return (
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
                <span className="rounded-full bg-secondary px-2.5 py-1 font-medium" dir="auto">
                  {lang === "ar" ? sec.titleAr : sec.titleEn}
                </span>
                <span>
                  {localIdx + 1}/{secQIds.length} · {secAnswered} {tt("exam.answered", lang)}
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

            <div className="mt-4 flex flex-wrap gap-1.5" aria-label={tt("exam.sectionNav", lang)}>
              {secQIds.map((qid, i) => {
                const gi = qIdxGlobal.get(qid) ?? 0
                const isCurrent = exam.questions[eIdx]?.id === qid
                return (
                  <button
                    key={qid}
                    onClick={() => setEIdx(gi)}
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-[12px] font-medium transition-colors focus-ring",
                      isCurrent && "border-primary bg-primary text-white",
                      !isCurrent && exam.flagged.includes(qid) && "border-gold/60 bg-gold/10 text-gold-deep",
                      !isCurrent &&
                        exam.answered[qid] !== undefined &&
                        !exam.flagged.includes(qid) &&
                        "border-sage/50 bg-sage/10 text-sage-deep",
                      !isCurrent &&
                        exam.answered[qid] === undefined &&
                        !exam.flagged.includes(qid) &&
                        "border-border bg-secondary/40 text-muted-foreground"
                    )}
                    aria-label={`Q${i + 1}`}
                  >
                    {exam.flagged.includes(qid) && !isCurrent ? <Flag className="h-3 w-3" /> : i + 1}
                  </button>
                )
              })}
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
                {stem}
              </h1>
              <div className="mt-6 space-y-2.5">
                {options.map((opt, i) => {
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
                  onClick={() => {
                    if (localIdx === 0) {
                      if (secIdx > 0) {
                        const prev = sections[secIdx - 1]
                        setSecIdx(secIdx - 1)
                        if (prev.kind === "mcq") {
                          const lastId = (prev.mcqIds ?? []).slice(-1)[0]
                          const gi = lastId ? qIdxGlobal.get(lastId) : undefined
                          if (gi !== undefined) setEIdx(gi)
                        }
                        setSecStarted(true)
                      }
                    } else {
                      setEIdx(qIdxGlobal.get(secQIds[localIdx - 1]) ?? 0)
                    }
                  }}
                  disabled={secIdx === 0 && localIdx === 0}
                  className="h-10"
                >
                  <ChevronLeft className="me-1 h-4 w-4 rtl:rotate-180" /> {tt("exam.backLabel", lang)}
                </Button>
                {localIdx === secQIds.length - 1 ? (
                  secIdx === sections.length - 1 ? (
                    <Button onClick={() => void submitExam(false)} className="h-10">
                      <FileWarning className="me-1.5 h-4 w-4" /> {tt("exam.submitExam", lang)}
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="h-10"
                      onClick={() => {
                        setSecIdx(secIdx + 1)
                        setSecStarted(false)
                      }}
                    >
                      {sections[secIdx + 1].titleEn.split(" — ")[0]}{" "}
                      <ChevronLeft className="ms-1 h-4 w-4 rotate-180 rtl:rotate-0" />
                    </Button>
                  )
                ) : (
                  <Button
                    variant="outline"
                    className="h-10"
                    onClick={() => setEIdx(qIdxGlobal.get(secQIds[localIdx + 1]) ?? 0)}
                  >
                    {localIdx + 2} <ChevronLeft className="ms-1 h-4 w-4 rotate-180 rtl:rotate-0" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        )
      }

      /* ----- CR (written tasks) section ----- */
      const taskIds = sec.crTaskIds ?? []
      const taskId = taskIds[Math.min(crIdx, taskIds.length - 1)]
      const task = (exam.crTasks ?? []).find((t) => t.id === taskId)
      if (!task) return null
      const draft = writtenDraft[task.id] ?? task.requirements.map(() => "")
      const setDraft = (i: number, v: string) => {
        const next = [...draft]
        next[i] = v
        setWrittenDraft({ ...writtenDraft, [task.id]: next })
      }
      return (
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
              <span className="rounded-full bg-secondary px-2.5 py-1 font-medium" dir="auto">
                {lang === "ar" ? sec.titleAr : sec.titleEn}
              </span>
              <span>
                {crIdx + 1}/{taskIds.length} · {task.totalMarks} {tt("exam.marksShort", lang)}
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

          {/* task navigator */}
          <div className="mt-4 flex flex-wrap gap-1.5" aria-label={tt("exam.taskNav", lang)}>
            {taskIds.map((tid, i) => {
              const t = (exam.crTasks ?? []).find((x) => x.id === tid)
              const answeredAll = (writtenDraft[tid] ?? []).some((v) => v.trim())
              return (
                <button
                  key={tid}
                  onClick={() => {
                    void saveWritten(task.id)
                    setCrIdx(i)
                  }}
                  className={cn(
                    "flex h-8 min-w-8 items-center justify-center rounded-lg border px-2 text-[12px] font-medium transition-colors focus-ring",
                    i === crIdx && "border-primary bg-primary text-white",
                    i !== crIdx && answeredAll && "border-sage/50 bg-sage/10 text-sage-deep",
                    i !== crIdx && !answeredAll && "border-border bg-secondary/40 text-muted-foreground"
                  )}
                >
                  {t ? (lang === "ar" ? t.labelAr.split(" — ")[0] : t.labelEn.split(" — ")[0]) : i + 1}
                </button>
              )
            })}
          </div>

          {/* the task: exhibit + requirements */}
          <div className="mt-5 rounded-2xl border bg-card p-6 shadow-soft sm:p-8">
            <div className="flex items-center justify-between">
              <h2 dir="auto" className="font-serif text-[16px] font-semibold">
                {lang === "ar" ? task.labelAr : task.labelEn}
              </h2>
              {savedTask === task.id && (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-sage-deep">
                  <CheckCircle2 className="h-3.5 w-3.5" /> {tt("exam.savedAnswer", lang)}
                </span>
              )}
            </div>
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/[0.04] p-4">
              <div className="flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-primary">
                <FileText className="h-3.5 w-3.5" /> {tt("exam.exhibit", lang)}
              </div>
              <p dir="auto" className="mt-2 text-[13.5px] leading-[1.8] text-foreground/85">
                {lang === "ar" ? task.exhibitAr : task.exhibitEn}
              </p>
            </div>

            <div className="mt-5 space-y-5">
              {task.requirements.map((r, i) => (
                <div key={i} className="rounded-xl border bg-secondary/25 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <p dir="auto" className="text-[13.5px] font-medium leading-relaxed">
                      <span className="me-1.5 font-bold text-primary">
                        {tt("exam.requirement", lang)} {i + 1} ({r.marks} {tt("exam.marksShort", lang)})
                      </span>
                      {lang === "ar" ? r.promptAr : r.promptEn}
                    </p>
                  </div>
                  {r.kind === "numeric" ? (
                    <div className="mt-3">
                      <Label className="text-[12px] text-muted-foreground" htmlFor={`cr-${task.id}-${i}`}>
                        {tt("exam.numericAnswer", lang)}
                        {r.numeric?.unit ? ` (${r.numeric.unit})` : ""}
                      </Label>
                      <Input
                        id={`cr-${task.id}-${i}`}
                        inputMode="decimal"
                        dir="ltr"
                        value={draft[i] ?? ""}
                        onChange={(e) => setDraft(i, e.target.value)}
                        onBlur={() => void saveWritten(task.id)}
                        placeholder="0.00"
                        className="mt-1.5 max-w-[240px] bg-background font-mono"
                      />
                    </div>
                  ) : (
                    <div className="mt-3">
                      <Label className="text-[12px] text-muted-foreground" htmlFor={`cr-${task.id}-${i}`}>
                        {tt("exam.textAnswer", lang)}
                      </Label>
                      <Textarea
                        id={`cr-${task.id}-${i}`}
                        dir="auto"
                        value={draft[i] ?? ""}
                        onChange={(e) => setDraft(i, e.target.value)}
                        onBlur={() => void saveWritten(task.id)}
                        rows={r.marks >= 5 ? 7 : 5}
                        className="mt-1.5 bg-background text-[13.5px] leading-relaxed"
                        placeholder={lang === "ar" ? "اكتب إجابتك هنا…" : "Write your answer here…"}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-between">
              <Button
                variant="ghost"
                className="h-10"
                disabled={crIdx === 0 && secIdx === 0}
                onClick={() => {
                  void saveWritten(task.id)
                  if (crIdx > 0) setCrIdx(crIdx - 1)
                  else if (secIdx > 0) {
                    setSecIdx(secIdx - 1)
                    setSecStarted(true)
                  }
                }}
              >
                <ChevronLeft className="me-1 h-4 w-4 rtl:rotate-180" />
              </Button>
              {crIdx === taskIds.length - 1 ? (
                secIdx === sections.length - 1 ? (
                  <Button onClick={() => void submitExam(false)} className="h-10">
                    <FileWarning className="me-1.5 h-4 w-4" /> {tt("exam.submitExam", lang)}
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    className="h-10"
                    onClick={() => {
                      void saveWritten(task.id)
                      setSecIdx(secIdx + 1)
                      setSecStarted(false)
                    }}
                  >
                    {sections[secIdx + 1].titleEn.split(" — ")[0]}{" "}
                    <ChevronLeft className="ms-1 h-4 w-4 rotate-180 rtl:rotate-0" />
                  </Button>
                )
              ) : (
                <Button
                  variant="outline"
                  className="h-10"
                  onClick={() => {
                    void saveWritten(task.id)
                    setCrIdx(crIdx + 1)
                  }}
                >
                  {tt("exam.nextTask", lang)}
                  <ChevronLeft className="ms-1 h-4 w-4 rotate-180 rtl:rotate-0" />
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

    /* ---------- classic linear sitting (unchanged) ---------- */
    const q = exam.questions[eIdx]
    const picked = exam.answered[q.id]
    const isFlagged = exam.flagged.includes(q.id)
    const answeredCount = Object.keys(exam.answered).length
    const showAr = lang === "ar" && q.stemAr && q.optionsAr
    const stem = showAr ? q.stemAr! : q.stem
    const options = showAr ? q.optionsAr! : q.options
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
            {stem}
          </h1>
          <div className="mt-6 space-y-2.5">
            {options.map((opt, i) => {
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
    // v27 — CR parts of this paper (if any)
    const crSections = (exam.sections ?? []).filter((s) => s.kind === "cr" && (s.crTaskIds ?? []).length)
    const hasCr = crSections.length > 0
    const crTaskById = new Map((exam.crTasks ?? []).map((t) => [t.id, t]))
    const writtenById = exam.written ?? {}
    const marksById = exam.crMarks ?? {}

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
            {hasCr && <span className="ms-1.5 text-[12px] text-primary">· {tt("exam.blendedScore", lang)}</span>}
          </p>
          <div className="mx-auto mt-5 max-w-xs">
            <Progress value={eResult.score} className="h-1.5" />
          </div>
          <p className="mt-4 text-[12.5px] text-muted-foreground">
            {tt("exam.missedToReview", lang)}
          </p>
          {(eResult.timedOut || eResult.avgSecs !== null) && (
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[12.5px]">
              {eResult.timedOut && (
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-medium text-primary">
                  <AlarmClock className="me-1 inline h-3.5 w-3.5" />
                  {tt("exam.timedOutBadge", lang)}
                </span>
              )}
              {eResult.avgSecs !== null && (
                <span className="rounded-full border bg-secondary px-3 py-1 text-muted-foreground">
                  <Timer className="me-1 inline h-3.5 w-3.5" />
                  {tt("exam.avgPace", lang)}: <b className="text-foreground">{eResult.avgSecs}s</b>
                  {tt("exam.pacePerQ", lang)}
                </span>
              )}
            </div>
          )}

          {/* v27 — the AI examiner pass over the written answers */}
          {hasCr && (
            <div className="mt-5">
              {marking ? (
                <div className="rounded-xl border border-primary/25 bg-primary/[0.05] px-4 py-3 text-[13px] font-medium text-primary">
                  <Loader2 className="me-1.5 inline h-4 w-4 animate-spin" />
                  {tt("exam.aiMarking", lang)}
                </div>
              ) : markInfo ? (
                <div className="rounded-xl border border-sage/30 bg-sage/[0.07] px-4 py-3 text-[12.5px] text-sage-deep">
                  <BadgeCheck className="me-1.5 inline h-4 w-4" />
                  {tt("exam.aiMarkingDone", lang)}
                  {markInfo.ai === 0 && markInfo.fallback > 0 ? (
                    <span className="ms-1.5 text-foreground/60">({tt("exam.aiMarkingFallback", lang)})</span>
                  ) : null}
                </div>
              ) : null}
            </div>
          )}

          <Button onClick={backToHub} className="mt-6 h-10">
            {tt("exam.backToExam", lang)}
          </Button>
        </div>

        {/* v27 — the examiner's marks on every written task */}
        {hasCr && !marking && (
          <section className="mt-6 space-y-4">
            <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold">
              <PenLine className="h-4 w-4 text-primary" /> {tt("exam.crPart", lang)}
            </h2>
            {crSections.flatMap((s) =>
              (s.crTaskIds ?? []).map((tid) => {
                const task = crTaskById.get(tid)
                if (!task) return null
                const awards = marksById[tid] ?? []
                const myAnswers = writtenById[tid] ?? []
                const earned = awards.reduce((a, r) => a + r.awarded, 0)
                return (
                  <div key={tid} className="rounded-2xl border bg-card p-5 shadow-soft">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 dir="auto" className="text-[14px] font-semibold">
                        {lang === "ar" ? task.labelAr : task.labelEn}
                      </h3>
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-[12px] font-semibold tabular-nums",
                          earned >= task.totalMarks * 0.5 ? "bg-sage/15 text-sage-deep" : "bg-primary/10 text-primary"
                        )}
                      >
                        {earned}/{task.totalMarks} {tt("exam.marksAwarded", lang)}
                      </span>
                    </div>
                    <div className="mt-4 space-y-3">
                      {task.requirements.map((r, i) => {
                        const award = awards[i]
                        const certified = lang === "ar" ? r.certifiedAr : r.certifiedEn
                        return (
                          <div key={i} className="rounded-xl border bg-secondary/25 p-3.5">
                            <div className="flex items-start justify-between gap-3">
                              <p dir="auto" className="text-[13px] font-medium leading-relaxed">
                                <span className="me-1.5 font-bold text-primary">
                                  {tt("exam.requirement", lang)} {i + 1}
                                </span>
                                {lang === "ar" ? r.promptAr : r.promptEn}
                              </p>
                              {award && (
                                <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[11.5px] font-semibold tabular-nums">
                                  {award.awarded}/{r.marks}
                                </span>
                              )}
                            </div>
                            <p dir="auto" className="mt-2 text-[12.5px] leading-relaxed text-foreground/75">
                              <b className="text-foreground">{tt("exam.yourAnswer", lang)}:</b>{" "}
                              {myAnswers[i]?.trim() || "—"}
                            </p>
                            {award?.feedback && (
                              <p dir="auto" className="mt-1.5 rounded-lg bg-primary/[0.06] px-2.5 py-1.5 text-[12.5px] leading-relaxed">
                                <b className="text-primary">{tt("exam.examinerFeedback", lang)}:</b> {award.feedback}
                              </p>
                            )}
                            {certified && (
                              <details className="mt-2">
                                <summary className="cursor-pointer text-[12px] font-semibold text-muted-foreground hover:text-foreground">
                                  {tt("exam.certifiedSolution", lang)}
                                </summary>
                                <p dir="auto" className="mt-1.5 rounded-lg border bg-card px-3 py-2 text-[12.5px] leading-[1.75] text-foreground/80">
                                  {certified}
                                </p>
                              </details>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })
            )}
          </section>
        )}

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

        {/* v21: score trend across past sittings */}
        {history.length >= 2 && (
          <section className="mt-6 rounded-2xl border bg-card p-6 shadow-soft">
            <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold">
              <TrendingUp className="h-4 w-4 text-primary" /> {tt("exam.scoreTrend", lang)}
            </h2>
            <div className="mt-4 flex items-end gap-2" dir="ltr">
              {history
                .slice()
                .reverse()
                .slice(-12)
                .map((h) => (
                  <div key={h.id} className="flex flex-1 flex-col items-center gap-1.5">
                    <span className="text-[11px] font-semibold tabular-nums text-muted-foreground">{h.score ?? 0}</span>
                    <div
                      className={cn(
                        "w-full rounded-t-md",
                        (h.score ?? 0) >= 70 ? "bg-sage/70" : "bg-primary/50"
                      )}
                      style={{ height: `${Math.max(6, Math.round(((h.score ?? 0) / 100) * 72))}px` }}
                      title={`${h.mode === "exam90" ? "90" : "60"} min · ${h.score ?? 0}%`}
                    />
                    <span className="text-[10px] tabular-nums text-muted-foreground">
                      {new Date(h.startedAt).toLocaleDateString(dateLocaleOf(lang), { day: "numeric", month: "short" })}
                    </span>
                  </div>
                ))}
            </div>
          </section>
        )}

        <section className="mt-6 space-y-3">
          {exam.questions.map((qq, i) => {
            const myPick = exam.answered[qq.id]
            const answer = eResult.key[qq.id]
            const gotIt = myPick === answer
            const rShowAr = lang === "ar" && qq.stemAr && qq.optionsAr
            const rStem = rShowAr ? qq.stemAr! : qq.stem
            const rOptions = rShowAr ? qq.optionsAr! : qq.options
            const rExpl =
              lang === "ar" && eResult.explanationsAr[qq.id]
                ? eResult.explanationsAr[qq.id]
                : eResult.explanations[qq.id]
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
                <p dir="auto" className="mt-2 text-[14px] font-medium leading-relaxed">{rStem}</p>
                {!gotIt && (
                  <p dir="auto" className="mt-2 text-[13px] text-primary">
                    {tt("exam.notCorrect", lang)} {LETTERS[answer]} — {rOptions[answer]}
                  </p>
                )}
                <p dir="auto" className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {rExpl}
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
