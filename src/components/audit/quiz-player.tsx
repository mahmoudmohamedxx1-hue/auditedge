"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { courseLessons } from "./shared"
import { tt } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  Award,
  CheckCircle2,
  ChevronLeft,
  FileQuestion,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react"

const LETTERS = ["A", "B", "C", "D", "E", "F"]

export function QuizPlayer() {
  const data = useAppStore((s) => s.data)
  const courseId = useAppStore((s) => s.selectedCourseId)
  const lessonId = useAppStore((s) => s.selectedLessonId)
  const navigate = useAppStore((s) => s.navigate)
  const submitQuiz = useAppStore((s) => s.submitQuiz)
  const lang = useAppStore((s) => s.lang)

  const course = data?.courses.find((c) => c.id === courseId)
  const lesson = useMemo(
    () => course?.modules.flatMap((m) => m.lessons).find((l) => l.id === lessonId),
    [course, lessonId]
  )
  const quiz = lesson?.quiz

  const [qIdx, setQIdx] = useState(0)
  const [picks, setPicks] = useState<(number | null)[]>([])
  const [picked, setPicked] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [finished, setFinished] = useState(false)
  // the server's graded verdict — the single source of truth for the results screen
  const [verdict, setVerdict] = useState<{ score: number; passed: boolean; correct: number; total: number } | null>(null)
  const certTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // never auto-navigate after the player unmounted
  useEffect(
    () => () => {
      if (certTimer.current) clearTimeout(certTimer.current)
    },
    []
  )

  if (!course || !lesson || !quiz || !quiz.questions.length) {
    if (course) {
      return (
        <div className="mx-auto max-w-2xl py-16 text-center">
          <FileQuestion className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <h1 className="mt-4 font-serif text-[22px] font-semibold">{tt("quiz.notAvailable", lang)}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{tt("quiz.noQuestions", lang)}</p>
          <Button variant="outline" className="mt-6" onClick={() => navigate("course", { courseId: course.id })}>
            <ChevronLeft className="me-1.5 h-4 w-4 rtl:rotate-180" /> {tt("quiz.backToCourse", lang)}
          </Button>
        </div>
      )
    }
    return null
  }

  const correct = picks.filter((p, i) => p !== null && p === quiz.questions[i]?.correctIndex).length
  const question = quiz.questions[qIdx]

  const pick = (i: number) => {
    if (revealed) return
    setPicked(i)
  }

  const check = async () => {
    if (picked === null || revealed) return
    setRevealed(true)
    setPicks((arr) => [...arr, picked])
  }

  const next = async () => {
    const isLast = qIdx === quiz.questions.length - 1
    if (isLast) {
      // the SERVER grades the picks against the stored key — its rounded score
      // is authoritative (no client/server rounding drift)
      const result = await submitQuiz(quiz.id, picks)
      setVerdict(result)
      setFinished(true)
      if (result.passed) {
        const flat = courseLessons(course)
        const allDone = flat.every((l) =>
          [...(data?.completedLessonIds ?? []), lesson.id].includes(l.id)
        )
        if (allDone) {
          // cancel any pending auto-navigation (e.g. user already clicked a button)
          if (certTimer.current) clearTimeout(certTimer.current)
          certTimer.current = setTimeout(() => {
            certTimer.current = null
            navigate("certificate", { courseId: course.id })
          }, 1600)
        }
      }
    } else {
      setQIdx((i) => i + 1)
      setPicked(null)
      setRevealed(false)
    }
  }

  const retake = () => {
    setQIdx(0)
    setPicks([])
    setPicked(null)
    setRevealed(false)
    setFinished(false)
    setVerdict(null)
  }

  /* ---------- results ---------- */
  if (finished) {
    const score = verdict?.score ?? Math.round((correct / quiz.questions.length) * 100)
    const passed = verdict?.passed ?? false
    const shownCorrect = verdict?.correct ?? correct
    const shownTotal = verdict?.total ?? quiz.questions.length
    return (
      <div className="mx-auto max-w-xl py-8">
        <div className="rounded-2xl border bg-card p-8 text-center shadow-soft">
          <div
            className={cn(
              "mx-auto flex h-16 w-16 items-center justify-center rounded-full",
              passed ? "bg-sage/12 text-sage-deep" : "bg-primary/10 text-primary"
            )}
          >
            {passed ? <Trophy className="h-7 w-7" /> : <RotateCcw className="h-7 w-7" />}
          </div>
          <h1 className="mt-5 font-serif text-[24px] font-semibold tracking-tight">
            {passed ? tt("quiz.passed", lang) : tt("quiz.notQuite", lang)}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {tt("quiz.youScored", lang)}{" "}
            <span className="font-semibold text-foreground">{shownCorrect} {tt("quiz.of", lang)} {shownTotal}</span> —{" "}
            {score}% ({quiz.passScore}% {tt("quiz.neededToPass", lang)}).
          </p>
          <div className="mx-auto mt-5 max-w-xs">
            <Progress value={score} className="h-1.5" />
          </div>
          <div className="mt-7 flex flex-col justify-center gap-2.5 sm:flex-row">
            {!passed && (
              <Button variant="outline" onClick={retake} className="h-10">
                <RotateCcw className="me-1.5 h-4 w-4" /> {tt("quiz.retake", lang)}
              </Button>
            )}
            <Button
              variant={passed ? "default" : "outline"}
              onClick={() => navigate("course", { courseId: course.id })}
              className="h-10"
            >
              {passed ? tt("quiz.backToCourse", lang) : tt("quiz.reviewLessons", lang)}
            </Button>
          </div>
        </div>
        {passed && (
          <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-[13px] text-muted-foreground">
            <Award className="h-4 w-4 text-gold" />
            {lesson.xp} XP · {tt("quiz.certNote", lang)}
          </p>
        )}
      </div>
    )
  }

  /* ---------- question flow ---------- */
  const showArQ =
    lang === "ar" && question.questionAr && question.optionsAr?.length === question.options.length
  const qText = showArQ ? question.questionAr! : question.question
  const qOptions = showArQ ? question.optionsAr! : question.options
  const qExplanation =
    lang === "ar" && question.explanationAr ? question.explanationAr : question.explanation

  return (
    <div className="mx-auto max-w-2xl">
      <button
        onClick={() => navigate("course", { courseId: course.id })}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-ring"
      >
        <ChevronLeft className="h-4 w-4 rtl:rotate-180" /> {course.code} · {tt("quiz.coursePage", lang)}
      </button>

      <div className="mt-5">
        <div className="flex items-center justify-between text-[12.5px] text-muted-foreground">
          <span dir="auto" className="font-medium">
            {quiz.title}
          </span>
          <span>
            {tt("quiz.question", lang)} {qIdx + 1} {tt("quiz.of", lang)} {quiz.questions.length}
          </span>
        </div>
        <Progress
          value={((qIdx + (revealed ? 1 : 0)) / quiz.questions.length) * 100}
          className="mt-2 h-1"
        />
      </div>

      <div className="mt-6 rounded-2xl border bg-card p-6 shadow-soft sm:p-8">
        <h1 dir="auto" className="font-serif text-[20px] font-semibold leading-snug tracking-tight">
          {qText}
        </h1>

        <div className="mt-6 space-y-2.5" role="listbox" aria-label={tt("quiz.answersLabel", lang)}>
          {qOptions.map((opt, i) => {
            const isPicked = picked === i
            const isCorrect = i === question.correctIndex
            return (
              <button
                key={i}
                role="option"
                aria-selected={isPicked}
                onClick={() => pick(i)}
                disabled={revealed}
                className={cn(
                  "flex w-full items-center gap-3.5 rounded-xl border px-4 py-3.5 text-start transition-all focus-ring",
                  revealed && isCorrect && "border-sage bg-sage/[0.07]",
                  revealed && isPicked && !isCorrect && "border-primary bg-primary/[0.05]",
                  revealed && !isCorrect && !isPicked && "border-border opacity-55",
                  !revealed && isPicked && "border-primary bg-primary/[0.04] ring-1 ring-primary/25",
                  !revealed && !isPicked && "border-border hover:border-input hover:bg-secondary/40"
                )}
              >
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[12px] font-semibold transition-colors",
                    revealed && isCorrect && "border-sage bg-sage text-white",
                    revealed && isPicked && !isCorrect && "border-primary bg-primary text-white",
                    !revealed && isPicked && "border-primary bg-primary text-white",
                    (!revealed || (!isCorrect && !isPicked)) && "border-border bg-secondary text-muted-foreground"
                  )}
                >
                  {revealed && isCorrect ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : revealed && isPicked && !isCorrect ? (
                    <XCircle className="h-4 w-4" />
                  ) : (
                    LETTERS[i]
                  )}
                </span>
                <span dir="auto" className="text-[14px] leading-relaxed">{opt}</span>
              </button>
            )
          })}
        </div>

        {revealed && (
          <div className="mt-5 rounded-xl border border-primary/20 bg-primary/[0.04] p-4">
            <div className="flex items-center gap-2 text-[13px] font-semibold">
              {picked === question.correctIndex ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-sage-deep" />
                  <span className="text-sage-deep">{tt("quiz.correct", lang)}</span>
                </>
              ) : (
                <>
                  <XCircle className="h-4 w-4 text-primary" />
                  <span className="text-primary">
                    {tt("quiz.notQuiteAnswer", lang)} {LETTERS[question.correctIndex]}
                  </span>
                </>
              )}
            </div>
            <p dir="auto" className="mt-2 text-[13.5px] leading-[1.7] text-foreground/80">{qExplanation}</p>
          </div>
        )}

        <div className="mt-7 flex justify-end">
          {revealed ? (
            <Button onClick={next} className="h-10">
              {qIdx === quiz.questions.length - 1 ? tt("quiz.seeResults", lang) : tt("quiz.nextQuestion", lang)}
            </Button>
          ) : (
            <Button onClick={check} disabled={picked === null} className="h-10">
              {tt("quiz.checkAnswer", lang)}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
