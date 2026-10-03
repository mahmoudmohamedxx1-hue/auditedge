"use client"

import { useMemo } from "react"
import { useAppStore } from "@/store/useAppStore"
import { tt, arOr, COURSE_CATEGORY_AR, COURSE_LEVEL_AR } from "@/lib/i18n"
import {
  accentOf,
  courseCpeEarned,
  courseLessons,
  courseProgress,
  COURSE_ICONS,
} from "./shared"
import { CourseCover } from "./course-cover"
import { ShareButton } from "./share-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  BookOpenCheck,
  CheckCircle2,
  ChevronLeft,
  CircleHelp,
  CircleSlash,
  Clock,
  FileQuestion,
  PlayCircle,
  Star,
  Users,
} from "lucide-react"

export function CourseDetail() {
  const data = useAppStore((s) => s.data)
  const courseId = useAppStore((s) => s.selectedCourseId)
  const navigate = useAppStore((s) => s.navigate)
  const enroll = useAppStore((s) => s.enroll)
  const lang = useAppStore((s) => s.lang)

  const course = data?.courses.find((c) => c.id === courseId)
  const enrolled = useMemo(
    () => (course && data ? data.enrollments.some((e) => e.courseId === course.id) : false),
    [course, data]
  )

  if (data && !course) {
    // a shared deep link whose course no longer exists — never a blank page
    return (
      <div className="mx-auto max-w-md py-16 text-center">
        <CircleSlash className="mx-auto h-10 w-10 text-muted-foreground/60" />
        <h1 className="mt-4 font-serif text-xl font-semibold">{tt("detail.notFoundTitle", lang)}</h1>
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{tt("detail.notFoundBody", lang)}</p>
        <Button onClick={() => navigate("courses")} className="mt-5 h-10">
          <ChevronLeft className="h-4 w-4 rtl:rotate-180" /> {tt("detail.allCourses", lang)}
        </Button>
      </div>
    )
  }

  if (!course || !data) return null

  const accent = accentOf(course.accent)
  const Icon = COURSE_ICONS[course.icon] ?? BookOpenCheck
  const lessons = courseLessons(course)
  const prog = courseProgress(data.completedLessonIds, course)
  const cpeEarned = courseCpeEarned(data.completedLessonIds, course)
  const totalMin = lessons.reduce((s, l) => s + l.durationMin, 0)
  const nextLesson = lessons.find((l) => !data.completedLessonIds.includes(l.id))

  const start = async () => {
    if (!enrolled) await enroll(course.id)
    if (nextLesson) {
      navigate(nextLesson.type === "quiz" ? "quiz" : "lesson", {
        courseId: course.id,
        lessonId: nextLesson.id,
      })
    } else {
      // nothing left to do here — open the course outline
      navigate("course", { courseId: course.id })
    }
  }

  return (
    <div>
      <button
        onClick={() => navigate("courses")}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-ring"
      >
        <ChevronLeft className="h-4 w-4 rtl:rotate-180" /> {tt("detail.allCourses", lang)}
      </button>

      {/* v24 — the course hero: its designed pro thumbnail */}
      <div className="mt-5 overflow-hidden rounded-2xl border shadow-soft">
        <CourseCover
          icon={Icon}
          accent={course.accent}
          code={course.code}
          category={arOr(COURSE_CATEGORY_AR, course.category, lang)}
          level={arOr(COURSE_LEVEL_AR, course.level, lang)}
          lessons={lessons.length}
          seed={course.id}
          className="h-[148px] sm:h-[180px]"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        {/* main column */}
        <div>
          <div className="flex items-start gap-4">
            <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-xl", accent.icon)}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge variant="outline" className={cn("font-mono text-[10.5px]", accent.chip)}>
                  {course.code}
                </Badge>
                <Badge variant="outline" className="text-[10.5px] font-normal text-muted-foreground">
                  {arOr(COURSE_CATEGORY_AR, course.category, lang)}
                </Badge>
                {!course.published && (
                  <Badge variant="outline" className="border-dashed text-[10.5px] text-muted-foreground">
                    {tt("card.draft", lang)}
                  </Badge>
                )}
              </div>
              <h1 dir="auto" className="mt-2.5 font-serif text-[26px] font-semibold leading-tight tracking-tight sm:text-[30px]">
                {course.title}
              </h1>
              <p dir="auto" className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{course.subtitle}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CircleHelp className="h-4 w-4" /> {arOr(COURSE_LEVEL_AR, course.level, lang)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {Math.round(totalMin / 60 * 10) / 10} {tt("detail.hours", lang)} · {course.cpeHours} CPE
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BookOpenCheck className="h-4 w-4" /> {lessons.length} {tt("detail.lessons", lang)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4" /> {course.enrolledCount} {tt("detail.enrolled", lang)}
            </span>
            {course.rating > 0 && (
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-gold text-gold" /> {course.rating.toFixed(1)}
              </span>
            )}
            {/* v32 — share this course's deep link (#/course/<id>) */}
            <span className="ms-auto">
              <ShareButton label={tt("share32.shareLabel", lang)} title={`${course.code} — ${course.title}`} />
            </span>
          </div>

          {/* description */}
          <section className="mt-8" aria-label={tt("detail.about", lang)}>
            <h2 className="font-serif text-[18px] font-semibold tracking-tight">{tt("detail.about", lang)}</h2>
            <p dir="auto" className="mt-3 whitespace-pre-line text-[14.5px] leading-[1.75] text-foreground/80">
              {course.description}
            </p>
          </section>

          {/* instructor */}
          {course.instructorName && (
            <section className="mt-8" aria-label={tt("detail.instructor", lang)}>
              <h2 className="font-serif text-[18px] font-semibold tracking-tight">{tt("detail.instructor", lang)}</h2>
              <div className="mt-3 flex items-start gap-4 rounded-xl border bg-card p-4 shadow-soft">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-[13px] font-semibold text-secondary-foreground">
                  {course.instructorName
                    .split(" ")
                    .slice(0, 2)
                    .map((p) => p[0])
                    .join("")}
                </span>
                <div>
                  <div className="text-[14.5px] font-semibold">{course.instructorName}</div>
                  <div dir="auto" className="text-[13px] text-muted-foreground">{course.instructorTitle}</div>
                  {course.instructorBio && (
                    <p dir="auto" className="mt-2 text-[13px] leading-relaxed text-foreground/70">{course.instructorBio}</p>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* curriculum */}
          <section className="mt-8" aria-label={tt("detail.curriculum", lang)}>
            <h2 className="font-serif text-[18px] font-semibold tracking-tight">{tt("detail.curriculum", lang)}</h2>
            <div className="mt-3 space-y-5">
              {course.modules.map((m, mi) => (
                <div key={m.id}>
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-mono text-[11px] font-medium text-muted-foreground">
                      {String(mi + 1).padStart(2, "0")}
                    </span>
                    <h3 dir="auto" className="font-serif text-[15.5px] font-semibold">{m.title}</h3>
                    <span className="text-[11.5px] text-muted-foreground">
                      {m.lessons.length} {tt("detail.lessons", lang)}
                    </span>
                  </div>
                  {m.description && (
                    <p dir="auto" className="ms-[34px] mt-1 text-[13px] text-muted-foreground">{m.description}</p>
                  )}
                  <div className="mt-2.5 space-y-1">
                    {m.lessons.map((l) => {
                      const done = data.completedLessonIds.includes(l.id)
                      return (
                        <button
                          key={l.id}
                          onClick={() =>
                            navigate(l.type === "quiz" ? "quiz" : "lesson", {
                              courseId: course.id,
                              lessonId: l.id,
                            })
                          }
                          className="group flex w-full items-center gap-3 rounded-lg border border-transparent px-2.5 py-2.5 text-start transition-colors hover:border-border hover:bg-card focus-ring"
                        >
                          {done ? (
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-sage" />
                          ) : l.type === "quiz" ? (
                            <FileQuestion className="h-4 w-4 shrink-0 text-muted-foreground" />
                          ) : (
                            <PlayCircle className="h-4 w-4 shrink-0 text-muted-foreground/60 group-hover:text-primary" />
                          )}
                          <span
                            dir="auto"
                            className={cn(
                              "min-w-0 flex-1 truncate text-[13.5px]",
                              done ? "text-muted-foreground" : "font-medium"
                            )}
                          >
                            {l.title}
                          </span>
                          <span className="shrink-0 text-[11.5px] text-muted-foreground">
                            {l.type === "quiz" ? tt("detail.quiz", lang) : `${l.durationMin} ${tt("detail.min", lang)}`}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
              {!course.modules.length && (
                <div className="rounded-xl border border-dashed py-10 text-center text-sm text-muted-foreground">
                  {tt("detail.noModules", lang)}
                </div>
              )}
            </div>
          </section>
        </div>

        {/* side card */}
        <aside>
          <div className="sticky top-8 space-y-4 rounded-xl border bg-card p-5 shadow-soft">
            {enrolled && (
              <div>
                <div className="mb-1.5 flex justify-between text-[12px] text-muted-foreground">
                  <span>{prog.pct === 100 ? tt("detail.completed", lang) : tt("detail.yourProgress", lang)}</span>
                  <span className="font-semibold text-foreground">{prog.pct}%</span>
                </div>
                <Progress value={prog.pct} className="h-1.5" />
                <p className="mt-2 text-[12px] text-muted-foreground">
                  {prog.done} {tt("detail.lessonsOf", lang)} {prog.total} {tt("detail.lessons", lang)} ·{" "}
                  {cpeEarned.toFixed(1)} {tt("detail.lessonsOf", lang)} {course.cpeHours} {tt("detail.cpeEarned", lang)}
                </p>
              </div>
            )}
            {prog.pct === 100 && enrolled ? (
              <Button className="h-10 w-full" variant="outline" onClick={() => navigate("certificate", { courseId: course.id })}>
                {tt("detail.viewCertificate", lang)}
              </Button>
            ) : (
              <Button className="h-10 w-full" onClick={start}>
                <PlayCircle className="me-1.5 h-4 w-4" />
                {enrolled
                  ? nextLesson
                    ? tt("detail.continueCourse", lang)
                    : tt("detail.reviewCourse", lang)
                  : tt("detail.enrollStart", lang)}
              </Button>
            )}
            <div className="flex items-start gap-2.5 rounded-xl border border-gold/30 bg-gold/[0.06] px-3.5 py-3 text-[12.5px] leading-relaxed text-gold-deep">
              <Star className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {tt("detail.certificate", lang)} · {tt("detail.onCompletion", lang)} ·{" "}
                {course.cpeHours} {tt("detail.cpeHours", lang)}
              </span>
            </div>
            {course.instructorName && (
              <div className="flex items-center gap-2.5 border-t border-border pt-4 text-[13px]">
                <span className="text-muted-foreground">{tt("detail.instructor", lang)}</span>
                <span dir="auto" className="min-w-0 flex-1 truncate text-end font-medium">
                  {course.instructorName}
                </span>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
