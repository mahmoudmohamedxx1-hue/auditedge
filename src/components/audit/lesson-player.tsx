"use client"

import { useMemo } from "react"
import { useAppStore } from "@/store/useAppStore"
import { courseLessons, accentOf } from "./shared"
import { formatBytes } from "@/lib/audit-types"
import { tt } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  CircleHelp,
  Clock,
  Download,
  ExternalLink,
  FileQuestion,
  FileText,
  KeyRound,
  Lightbulb,
  ListChecks,
  Paperclip,
  PlayCircle,
  Sparkles,
  Zap,
} from "lucide-react"
import { toast } from "sonner"

const PLATFORM_NAMES: Record<string, string> = {
  coursera: "Coursera",
  edx: "edX",
  "mit-ocw": "MIT OpenCourseWare",
  openstax: "OpenStax",
  youtube: "YouTube",
}

/** Extract a YouTube video id from most link formats (watch, youtu.be, shorts, embed). */
export function youtubeIdOf(url: string): string | null {
  if (!url) return null
  const patterns = [
    /(?:youtube\.com\/watch\?[^#]*v=)([\w-]{6,})/i,
    /(?:youtu\.be\/)([\w-]{6,})/i,
    /(?:youtube\.com\/shorts\/)([\w-]{6,})/i,
    /(?:youtube\.com\/embed\/)([\w-]{6,})/i,
    /(?:youtube\.com\/live\/)([\w-]{6,})/i,
  ]
  for (const p of patterns) {
    const m = url.match(p)
    if (m?.[1]) return m[1]
  }
  return null
}

export function LessonPlayer() {
  const data = useAppStore((s) => s.data)
  const courseId = useAppStore((s) => s.selectedCourseId)
  const lessonId = useAppStore((s) => s.selectedLessonId)
  const navigate = useAppStore((s) => s.navigate)
  const completeLesson = useAppStore((s) => s.completeLesson)
  const openAiPopup = useAppStore((s) => s.openAiPopup)
  const setAiContext = useAppStore((s) => s.setAiContext)
  const lang = useAppStore((s) => s.lang)

  const course = data?.courses.find((c) => c.id === courseId)
  const lesson = useMemo(
    () => course?.modules.flatMap((m) => m.lessons).find((l) => l.id === lessonId),
    [course, lessonId]
  )

  const flat = useMemo(() => (course ? courseLessons(course) : []), [course])
  const idx = flat.findIndex((l) => l.id === lesson?.id)
  const prev = idx > 0 ? flat[idx - 1] : null
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null
  const moduleOf = course?.modules.find((m) => m.id === lesson?.moduleId)

  const done = !!data?.completedLessonIds.includes(lesson?.id ?? "")
  const attachments = useMemo(
    () => (data && lesson ? data.materials.filter((m) => lesson.attachments.includes(m.id)) : []),
    [data, lesson]
  )
  const videoId = lesson ? youtubeIdOf(lesson.videoUrl) : null

  if (!course || !lesson) return null
  const accent = accentOf(course.accent)
  const c = lesson.content
  const courseProg = flat.length
    ? Math.round(
        (flat.filter((l) => data!.completedLessonIds.includes(l.id)).length / flat.length) * 100
      )
    : 0

  const onComplete = async () => {
    await completeLesson(lesson.id)
    toast.success(`+${lesson.xp} ${tt("lesson.xpEarned", lang)}`, {
      description: tt("lesson.xpToast", lang),
    })
  }

  const goTo = (l: (typeof flat)[number]) => {
    navigate(l.type === "quiz" ? "quiz" : "lesson", { courseId: course.id, lessonId: l.id })
  }

  return (
    <div>
      <button
        onClick={() => navigate("course", { courseId: course.id })}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-ring"
      >
        <ChevronLeft className="h-4 w-4 rtl:rotate-180" /> {course.code} · {tt("lesson.coursePage", lang)}
      </button>

      {/* course progress line */}
      <div className="mt-4 flex items-center gap-3">
        <Progress value={courseProg} className="h-1 flex-1" />
        <span className="shrink-0 text-[11.5px] text-muted-foreground">
          {idx + 1} / {flat.length} · {courseProg}%
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_260px]">
        {/* reading column */}
        <article className="max-w-[680px]">
          <div className="flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            <span className={cn("font-mono normal-case tracking-normal", accent.text)}>{course.code}</span>
            <span className="text-border">/</span>
            <span dir="auto" className="truncate">{moduleOf?.title}</span>
          </div>

          <h1
            dir="auto"
            className="mt-3 font-serif text-[28px] font-semibold leading-tight tracking-tight"
          >
            {lesson.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-[12.5px] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {lesson.durationMin} {tt("lesson.min", lang)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-primary" /> {lesson.xp} XP
            </span>
            {done && (
              <span className="inline-flex items-center gap-1.5 text-sage-deep">
                <CheckCircle2 className="h-3.5 w-3.5" /> {tt("lesson.completed", lang)}
              </span>
            )}
            <button
              onClick={() => {
                setAiContext({ view: "lesson", courseId: course.id, lessonId: lesson.id })
                openAiPopup()
              }}
              className="ms-auto inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/[0.06] px-3 py-1.5 text-[12px] font-medium text-primary transition-all hover:-translate-y-px hover:border-primary/50 hover:bg-primary/[0.12] hover:shadow-soft focus-ring"
            >
              <Sparkles className="h-3.5 w-3.5" /> {tt("lesson.askAi", lang)}
            </button>
          </div>

          {lesson.externalUrl && (
            <a
              href={lesson.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-3 rounded-xl border border-primary/25 bg-primary/[0.05] px-5 py-4 transition-colors hover:border-primary/45 hover:bg-primary/[0.09] focus-ring"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ExternalLink className="h-[18px] w-[18px]" />
              </span>
              <span className="min-w-0 flex-1">
                <span dir="auto" className="block text-[14.5px] font-semibold text-foreground">
                  {tt("lesson.continueOn", lang)}{" "}
                  {PLATFORM_NAMES[course.sourcePlatform] ?? tt("lesson.thePlatform", lang)}
                </span>
                <span dir="ltr" className="block truncate text-[12px] text-muted-foreground">
                  {lesson.externalUrl}
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-primary rtl:rotate-180" />
            </a>
          )}

          {videoId && (
            <figure className="mt-7">
              <div className="overflow-hidden rounded-xl border shadow-soft">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
                  title={`${lesson.title} — video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="aspect-video w-full"
                />
              </div>
              <figcaption className="mt-2 flex items-center gap-1.5 text-[11.5px] text-muted-foreground">
                <PlayCircle className="h-3.5 w-3.5" /> {tt("lesson.videoCaption", lang)}
              </figcaption>
            </figure>
          )}

          {c.intro && (
            <p dir="auto" className="mt-7 border-s-2 border-primary/40 ps-4 text-[16px] leading-[1.8] text-foreground/80">
              {c.intro}
            </p>
          )}

          {c.sections.map((s, i) => (
            <section key={i} className="mt-8">
              <h2 dir="auto" className="font-serif text-[19px] font-semibold tracking-tight">{s.heading}</h2>
              {s.body && (
                <p dir="auto" className="mt-3 whitespace-pre-line text-[14.5px] leading-[1.8] text-foreground/85">{s.body}</p>
              )}
              {s.bullets && s.bullets.length > 0 && (
                <ul className="mt-4 space-y-2.5">
                  {s.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 text-[14px] leading-[1.7] text-foreground/85">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span dir="auto">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {c.example && (
            <section className="mt-8 rounded-xl border bg-secondary/40 p-5">
              <div className="flex items-center gap-2">
                <CircleHelp className="h-4 w-4 text-primary" />
                <h3 dir="auto" className="font-serif text-[15.5px] font-semibold">
                  {tt("lesson.fieldCase", lang)} {c.example.title}
                </h3>
              </div>
              <p dir="auto" className="mt-3 text-[13.5px] leading-[1.75] text-foreground/80">
                <span className="font-semibold text-foreground">{tt("lesson.situation", lang)}</span>
                {c.example.context}
              </p>
              <p dir="auto" className="mt-2.5 text-[13.5px] leading-[1.75] text-foreground/80">
                <span className="font-semibold text-foreground">{tt("lesson.analysis", lang)}</span>
                {c.example.analysis}
              </p>
            </section>
          )}

          {c.keyPoints.length > 0 && (
            <section className="mt-8 rounded-xl border bg-card p-5 shadow-soft">
              <div className="flex items-center gap-2">
                <KeyRound className="h-4 w-4 text-primary" />
                <h3 className="font-serif text-[15.5px] font-semibold">{tt("lesson.keyPoints", lang)}</h3>
              </div>
              <ul className="mt-3.5 space-y-2.5">
                {c.keyPoints.map((k, i) => (
                  <li key={i} className="flex gap-3 text-[13.5px] leading-[1.7]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                    <span dir="auto">{k}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {c.takeaway && (
            <section className="mt-8 flex gap-3.5 rounded-xl border border-primary/20 bg-primary/[0.04] p-5">
              <Lightbulb className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-serif text-[15px] font-semibold">{tt("lesson.takeaway", lang)}</h3>
                <p dir="auto" className="mt-1.5 text-[14px] leading-[1.75] text-foreground/80">{c.takeaway}</p>
              </div>
            </section>
          )}

          {attachments.length > 0 && (
            <section className="mt-8" aria-label={tt("lesson.materials", lang)}>
              <div className="flex items-center gap-2">
                <Paperclip className="h-4 w-4 text-muted-foreground" />
                <h3 className="font-serif text-[15.5px] font-semibold">{tt("lesson.materials", lang)}</h3>
              </div>
              <div className="mt-3 space-y-2">
                {attachments.map((m) => (
                  <a
                    key={m.id}
                    href={`/api/files/${m.fileName}?download=1`}
                    className="group flex items-center gap-3 rounded-lg border bg-card px-3.5 py-3 transition-colors hover:border-input focus-ring"
                  >
                    <FileText className="h-4 w-4 shrink-0 text-primary" />
                    <span className="min-w-0 flex-1">
                      <span dir="auto" className="block truncate text-[13.5px] font-medium">{m.title}</span>
                      <span dir="ltr" className="block text-[11.5px] text-muted-foreground">
                        {m.originalName} · {formatBytes(m.sizeBytes)}
                      </span>
                    </span>
                    <Download className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* footer actions */}
          <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled={!prev} onClick={() => prev && goTo(prev)} className="h-9">
                <ArrowLeft className="me-1 h-3.5 w-3.5 rtl:rotate-180" /> {tt("lesson.previous", lang)}
              </Button>
              <Button variant="outline" size="sm" disabled={!next} onClick={() => next && goTo(next)} className="h-9">
                {tt("lesson.next", lang)} <ArrowRight className="ms-1 h-3.5 w-3.5 rtl:rotate-180" />
              </Button>
            </div>
            {done ? (
              next ? (
                <Button size="sm" onClick={() => goTo(next)} className="h-9">
                  {tt("lesson.continueLearning", lang)} <ArrowRight className="ms-1 h-3.5 w-3.5 rtl:rotate-180" />
                </Button>
              ) : (
                <Button size="sm" variant="outline" onClick={() => navigate("course", { courseId: course.id })} className="h-9">
                  {tt("lesson.backToCourse", lang)}
                </Button>
              )
            ) : (
              <Button size="sm" onClick={onComplete} className="h-9">
                <CheckCircle2 className="me-1.5 h-4 w-4" /> {tt("lesson.markComplete", lang)} · +{lesson.xp} XP
              </Button>
            )}
          </div>
        </article>

        {/* contents sidebar */}
        <aside className="hidden xl:block">
          <div className="sticky top-8">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <ListChecks className="h-3.5 w-3.5" /> {tt("lesson.contents", lang)}
            </div>
            <nav className="mt-3 space-y-4" aria-label={tt("lesson.contents", lang)}>
              {course.modules.map((m) => (
                <div key={m.id}>
                  <div dir="auto" className="text-[12px] font-semibold text-foreground/70">{m.title}</div>
                  <div className="mt-1.5 space-y-0.5">
                    {m.lessons.map((l) => {
                      const lDone = data!.completedLessonIds.includes(l.id)
                      const active = l.id === lesson.id
                      return (
                        <button
                          key={l.id}
                          onClick={() => goTo(l)}
                          className={cn(
                            "relative flex w-full items-start gap-2 rounded-md px-2 py-1.5 text-start text-[12.5px] leading-snug transition-colors focus-ring",
                            active
                              ? "bg-primary/[0.07] font-medium text-primary"
                              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                          )}
                        >
                          {active && (
                            <span aria-hidden className="absolute inset-y-1 start-0 w-[2.5px] rounded-full bg-primary" />
                          )}
                          {lDone ? (
                            <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-sage" />
                          ) : l.type === "quiz" ? (
                            <FileQuestion className="mt-[2px] h-3.5 w-3.5 shrink-0" />
                          ) : (
                            <PlayCircle className="mt-[2px] h-3.5 w-3.5 shrink-0" />
                          )}
                          <span dir="auto" className="min-w-0">{l.title}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </div>
  )
}
