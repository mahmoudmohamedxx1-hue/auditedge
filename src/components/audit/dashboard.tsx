"use client"

import { useAppStore } from "@/store/useAppStore"
import { levelForXp } from "@/lib/audit-types"
import { tt, XP_LEVEL_AR, dateLocaleOf } from "@/lib/i18n"
import {
  accentOf,
  courseCpeEarned,
  courseLessons,
  courseProgress,
  COURSE_ICONS,
  PageHeader,
} from "./shared"
import { ReviewHomeCard } from "./review"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpenCheck,
  Clock,
  Flame,
  History,
  Medal,
  PlayCircle,
  Users,
  Zap,
  Bookmark,
} from "lucide-react"

function greeting(lang: "en" | "ar") {
  const h = new Date().getHours()
  const key = h < 12 ? "dash.morning" : h < 17 ? "dash.afternoon" : "dash.evening"
  return tt(key, lang)
}

const levelName = (name: string, lang: "en" | "ar") =>
  lang === "ar" ? (XP_LEVEL_AR[name] ?? name) : name

/** v21: saved lessons (bookmarks) — the learner's keepers, one tap away. */
function SavedLessonsCard() {
  const data = useAppStore((s) => s.data)
  const navigate = useAppStore((s) => s.navigate)
  const lang = useAppStore((s) => s.lang)
  const bookmarks = useAppStore((s) => s.bookmarks)

  const saved = (() => {
    const out: { course: NonNullable<typeof data>["courses"][number]; lesson: { id: string; title: string; type: string; durationMin: number } }[] = []
    if (!data) return out
    for (const c of data.courses)
      for (const m of c.modules)
        for (const l of m.lessons)
          if (bookmarks.includes(l.id)) out.push({ course: c, lesson: l })
    return out
  })()

  if (saved.length === 0) return null

  return (
    <section className="rounded-xl border bg-card p-5 shadow-soft" aria-label={tt("lesson.savedLessons", lang)}>
      <div className="mb-3 flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-serif text-[16px] font-semibold tracking-tight">
          <Bookmark className="h-4 w-4 text-gold-deep" /> {tt("lesson.savedLessons", lang)}
        </h2>
        <span className="text-[12px] text-muted-foreground">{saved.length}</span>
      </div>
      <div className="space-y-1.5">
        {saved.slice(0, 5).map(({ course, lesson }) => (
          <button
            key={lesson.id}
            onClick={() =>
              navigate(lesson.type === "quiz" ? "quiz" : "lesson", { courseId: course.id, lessonId: lesson.id })
            }
            className="flex w-full items-center gap-3 rounded-lg border bg-secondary/25 px-3.5 py-2.5 text-start transition-colors hover:border-primary/30 hover:bg-secondary/50 focus-ring"
          >
            <Bookmark className="h-3.5 w-3.5 shrink-0 fill-current text-gold-deep" />
            <span dir="auto" className="min-w-0 flex-1 truncate text-[13px] font-medium">{lesson.title}</span>
            <span className="shrink-0 text-[11px] tabular-nums text-muted-foreground">
              {course.code} · {lesson.durationMin} {tt("misc20.min", lang)}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

/** Continue-where-you-left-off card (v20 quick win) — one tap back into the
 *  last lesson the learner opened, wherever it lives. */
function ResumeCard() {
  const data = useAppStore((s) => s.data)
  const navigate = useAppStore((s) => s.navigate)
  const lang = useAppStore((s) => s.lang)

  const last = data?.lastLessonId
    ? (() => {
        for (const c of data.courses)
          for (const m of c.modules) {
            const l = m.lessons.find((x) => x.id === data.lastLessonId)
            if (l) return { course: c, lesson: l }
          }
        return null
      })()
    : null

  if (!last) return null
  const accent = accentOf(last.course.accent)
  const Icon = COURSE_ICONS[last.course.icon] ?? BookOpenCheck
  const done = data?.completedLessonIds.includes(last.lesson.id)

  return (
    <div className="rounded-2xl border bg-card p-5 shadow-soft">
      <div className="flex items-center gap-3">
        <span className={cn("flex h-9 w-9 items-center justify-center rounded-lg", accent.icon)}>
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[14px] font-semibold">{tt("misc20.resume", lang)}</p>
          <p dir="auto" className="truncate text-[12.5px] text-muted-foreground">
            {last.lesson.title} · {last.course.code}
            {done ? " ✓" : ""}
          </p>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="h-8 shrink-0"
          onClick={() =>
            navigate(last.lesson.type === "quiz" ? "quiz" : "lesson", {
              courseId: last.course.id,
              lessonId: last.lesson.id,
            })
          }
        >
          <History className="me-1 h-3.5 w-3.5" /> {tt("misc20.resumeLesson", lang)}
        </Button>
      </div>
    </div>
  )
}

export function Dashboard() {
  const data = useAppStore((s) => s.data)
  const navigate = useAppStore((s) => s.navigate)
  const lang = useAppStore((s) => s.lang)
  if (!data) return null

  const { user, courses, enrollments, completedLessonIds, certificates } = data
  const lvl = levelForXp(user.xp)
  const totalCpe = courses.reduce((s, c) => s + courseCpeEarned(completedLessonIds, c), 0)
  const rank = data.users.findIndex((u) => u.id === user.id) + 1

  const enrolledCourses = courses.filter((c) => enrollments.some((e) => e.courseId === c.id))
  const inProgress = enrolledCourses
    .map((c) => ({ course: c, prog: courseProgress(completedLessonIds, c) }))
    .filter((x) => x.prog.total > 0 && x.prog.pct < 100) // zero-lesson courses can't be "in progress"
    .sort((a, b) => b.prog.pct - a.prog.pct)
  const nextLvl = lvl.next
  const lvlPct = nextLvl
    ? Math.round(((user.xp - lvl.current.min) / (nextLvl.min - lvl.current.min)) * 100)
    : 100

  const nextUpCourse = inProgress[0]?.course
  const nextUpLesson = nextUpCourse
    ? courseLessons(nextUpCourse).find((l) => !completedLessonIds.includes(l.id))
    : null
  const nextUpProg = nextUpCourse ? courseProgress(completedLessonIds, nextUpCourse) : null

  const topTeam = data.users.slice(0, 3)

  return (
    <div className="space-y-8">
      <PageHeader
        title={`${greeting(lang)}${lang === "ar" ? "،" : ","} ${user.name.split(" ")[0]}`}
        sub={new Date().toLocaleDateString(dateLocaleOf(lang), {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      />

      {/* stats */}
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
        <div className="card-lift rounded-xl border bg-card p-4 shadow-soft">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Zap className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-medium uppercase tracking-wider">{tt("dash.xp", lang)}</span>
          </div>
          <div className="mt-2 font-serif text-[22px] font-semibold leading-none">{user.xp}</div>
          <div className="mt-1.5 text-[11.5px] text-muted-foreground">
            {levelName(lvl.current.name, lang)}
            {nextLvl && ` · ${nextLvl.min - user.xp} ${tt("dash.toNext", lang)} ${levelName(nextLvl.name, lang)}`}
          </div>
          <Progress value={lvlPct} className="mt-2.5 h-1" />
        </div>
        <div className="card-lift rounded-xl border bg-card p-4 shadow-soft">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Flame className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-medium uppercase tracking-wider">{tt("dash.streak", lang)}</span>
          </div>
          <div className="mt-2 font-serif text-[22px] font-semibold leading-none">
            {user.streakDays}
            <span className="ms-1 text-sm font-normal text-muted-foreground">
              {user.streakDays === 1 ? tt("dash.day", lang) : tt("dash.days", lang)}
            </span>
          </div>
          <div className="mt-1.5 text-[11.5px] text-muted-foreground">{tt("dash.keepAlive", lang)}</div>
        </div>
        <div className="card-lift rounded-xl border bg-card p-4 shadow-soft">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-medium uppercase tracking-wider">{tt("dash.cpeHours", lang)}</span>
          </div>
          <div className="mt-2 font-serif text-[22px] font-semibold leading-none">
            {totalCpe.toFixed(1)}
            <span className="ms-1 text-sm font-normal text-muted-foreground">/ 40</span>
          </div>
          <Progress value={Math.min((totalCpe / 40) * 100, 100)} className="mt-2.5 h-1" />
        </div>
        <div className="card-lift rounded-xl border bg-card p-4 shadow-soft">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Award className="h-3.5 w-3.5 text-primary" />
            <span className="text-[11px] font-medium uppercase tracking-wider">{tt("dash.certificates", lang)}</span>
          </div>
          <div className="mt-2 font-serif text-[22px] font-semibold leading-none">{certificates.length}</div>
          <button
            onClick={() => navigate("achievements")}
            className="mt-1.5 inline-flex items-center gap-1 text-[11.5px] text-muted-foreground transition-colors hover:text-foreground"
          >
            {tt("dash.viewAchievements", lang)} <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* next up */}
      {nextUpCourse && nextUpLesson && nextUpProg ? (
        <section className="rounded-xl border bg-card p-5 shadow-soft sm:p-6" aria-label={tt("dash.continueLearning", lang)}>
          <div className="flex items-center justify-between gap-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {tt("dash.pickUp", lang)}
            </span>
            <Badge variant="outline" className={cn("font-mono text-[10px]", accentOf(nextUpCourse.accent).chip)}>
              {nextUpCourse.code}
            </Badge>
          </div>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl", accentOf(nextUpCourse.accent).icon)}>
              {(() => {
                const Icon = COURSE_ICONS[nextUpCourse.icon] ?? BookOpenCheck
                return <Icon className="h-5 w-5" />
              })()}
            </div>
            <div className="min-w-0 flex-1">
              <h2 dir="auto" className="truncate font-serif text-[19px] font-semibold leading-snug">
                {nextUpLesson.title}
              </h2>
              <p dir="auto" className="mt-0.5 text-[13px] text-muted-foreground">
                {nextUpCourse.title} · {tt("dash.lesson", lang)}{" "}
                {courseLessons(nextUpCourse).findIndex((l) => l.id === nextUpLesson.id) + 1} {tt("dash.of", lang)}{" "}
                {nextUpProg.total}
              </p>
              <Progress value={nextUpProg.pct} className="mt-3 h-1.5 max-w-md" />
            </div>
            <Button
              onClick={() =>
                navigate(nextUpLesson.type === "quiz" ? "quiz" : "lesson", {
                  courseId: nextUpCourse.id,
                  lessonId: nextUpLesson.id,
                })
              }
              className="h-10 shrink-0"
            >
              <PlayCircle className="me-1.5 h-4 w-4" />
              {nextUpLesson.type === "quiz" ? tt("dash.takeQuiz", lang) : tt("dash.continue", lang)}
            </Button>
          </div>
        </section>
      ) : (
        <section
          className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.07] via-card to-card p-6 shadow-soft sm:p-8"
          aria-label={tt("dash.startFirst", lang)}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -end-16 -top-16 h-56 w-56 rounded-full bg-primary/[0.06] blur-2xl"
          />
          <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/20">
                <BookOpenCheck className="h-6 w-6" />
              </span>
              <div>
                <h2 className="font-serif text-[20px] font-semibold tracking-tight">{tt("dash.startFirst", lang)}</h2>
                <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {tt("dash.startFirstSub", lang)}
                </p>
                <button
                  onClick={() => navigate("program")}
                  className="mt-2.5 inline-flex items-center gap-1.5 text-[13px] font-medium text-primary transition-colors hover:underline focus-ring"
                >
                  {tt("dash.exploreProgram", lang)} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                </button>
              </div>
            </div>
            <Button onClick={() => navigate("courses")} className="h-10 shrink-0">
              {tt("dash.browseCourses", lang)} <ArrowRight className="ms-1 h-4 w-4 rtl:rotate-180" />
            </Button>
          </div>
        </section>
      )}

      {/* v20: review queue + resume cards (P0-3 + quick win) */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ReviewHomeCard />
        <ResumeCard />
      </div>

      {/* v21: saved lessons (bookmarks) — one tap back to the keepers */}
      <SavedLessonsCard />

      {/* in progress list */}
      {inProgress.length > 0 && (
        <section aria-label={tt("dash.inProgressTitle", lang)}>
          <div className="mb-3.5 flex items-center justify-between">
            <h2 className="font-serif text-[18px] font-semibold tracking-tight">{tt("dash.inProgressTitle", lang)}</h2>
            <button
              onClick={() => navigate("courses")}
              className="inline-flex items-center gap-1 text-[13px] font-medium text-primary transition-colors hover:underline"
            >
              {tt("dash.allCourses", lang)} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </button>
          </div>
          <div className="space-y-2.5">
            {inProgress.slice(0, 4).map(({ course, prog }) => {
              const accent = accentOf(course.accent)
              const nextLesson = courseLessons(course).find((l) => !completedLessonIds.includes(l.id))
              return (
                <button
                  key={course.id}
                  onClick={() =>
                    nextLesson
                      ? navigate(nextLesson.type === "quiz" ? "quiz" : "lesson", {
                          courseId: course.id,
                          lessonId: nextLesson.id,
                        })
                      : navigate("course", { courseId: course.id })
                  }
                  className="flex w-full items-center gap-4 rounded-xl border bg-card p-4 text-start shadow-soft transition-colors hover:border-input focus-ring"
                >
                  <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg", accent.icon)}>
                    {(() => {
                      const Icon = COURSE_ICONS[course.icon] ?? BookOpenCheck
                      return <Icon className="h-4 w-4" />
                    })()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div dir="auto" className="truncate text-[14px] font-medium">{course.title}</div>
                    <div dir="auto" className="mt-0.5 truncate text-xs text-muted-foreground">
                      {prog.done}/{prog.total} {tt("card.lessons", lang)} · {nextLesson?.title.slice(0, 48)}
                      {(nextLesson?.title.length ?? 0) > 48 ? "…" : ""}
                    </div>
                    <Progress value={prog.pct} className="mt-2 h-1 max-w-sm" />
                  </div>
                  <span className="shrink-0 font-serif text-[15px] font-semibold text-muted-foreground">
                    {prog.pct}%
                  </span>
                </button>
              )
            })}
          </div>
        </section>
      )}

      {/* team pulse + certificates */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <section className="rounded-xl border bg-card p-5 shadow-soft" aria-label={tt("dash.teamPulse", lang)}>
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-[16px] font-semibold tracking-tight">{tt("dash.teamPulse", lang)}</h2>
            <button
              onClick={() => navigate("team")}
              className="text-[12.5px] font-medium text-primary transition-colors hover:underline"
            >
              {tt("dash.viewTeam", lang)}
            </button>
          </div>
          <div className="mt-3.5 space-y-2">
            {topTeam.map((u, i) => (
              <div key={u.id} className="flex items-center gap-3 rounded-lg px-1 py-1.5">
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold",
                    i === 0
                      ? "bg-primary/12 text-primary ring-1 ring-primary/25"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {u.initials}
                </span>
                <span className="min-w-0 flex-1 truncate text-[13.5px] font-medium">{u.name}</span>
                <span className="text-xs text-muted-foreground">{u.xp} XP</span>
                {u.id === user.id && (
                  <Badge variant="outline" className="text-[10px] text-primary">
                    {tt("dash.you", lang)}
                  </Badge>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-1.5 border-t border-border pt-3.5 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            {data.users.length} {tt("dash.onTheTeam", lang)}
            {rank > 0 && data.users.length > 1 ? ` · ${tt("dash.youRank", lang)} #${rank}` : ""}
          </div>
        </section>

        <section className="rounded-xl border bg-card p-5 shadow-soft" aria-label={tt("dash.recentCerts", lang)}>
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-[16px] font-semibold tracking-tight">{tt("dash.recentCerts", lang)}</h2>
            <button
              onClick={() => navigate("achievements")}
              className="text-[12.5px] font-medium text-primary transition-colors hover:underline"
            >
              {tt("dash.viewAll", lang)}
            </button>
          </div>
          {certificates.length ? (
            <div className="mt-3.5 space-y-2">
              {certificates.slice(0, 3).map((cert) => {
                const course = courses.find((c) => c.id === cert.courseId)
                return (
                  <button
                    key={cert.id}
                    onClick={() => navigate("certificate", { courseId: cert.courseId })}
                    className="flex w-full items-center gap-3 rounded-lg border border-border/70 px-3 py-2.5 text-start transition-colors hover:border-input focus-ring"
                  >
                    <Medal className="h-4 w-4 shrink-0 text-gold" />
                    <span dir="auto" className="min-w-0 flex-1 truncate text-[13.5px] font-medium">
                      {course?.title ?? tt("dash.course", lang)}
                    </span>
                    <span className="shrink-0 font-mono text-[10.5px] text-muted-foreground">{cert.serial}</span>
                  </button>
                )
              })}
            </div>
          ) : (
            <div className="mt-3 flex flex-col items-center gap-3 py-7 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold-deep ring-1 ring-gold/25">
                <Award className="h-5 w-5" />
              </span>
              <p className="max-w-[280px] text-[13px] leading-relaxed text-muted-foreground">
                {tt("dash.noCertsYet", lang)}
              </p>
              <button
                onClick={() => navigate("courses")}
                className="inline-flex items-center gap-1 text-[12.5px] font-medium text-primary transition-colors hover:underline focus-ring"
              >
                {tt("dash.browseCourses", lang)} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
