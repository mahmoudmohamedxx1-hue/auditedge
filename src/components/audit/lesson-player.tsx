"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { courseLessons, accentOf } from "./shared"
import { ShareButton } from "./share-button"
import { formatBytes } from "@/lib/audit-types"
import { tt } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import type { LessonNoteClient, LessonContent } from "@/lib/audit-types"
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
  Highlighter,
  KeyRound,
  Languages,
  Lightbulb,
  ListChecks,
  MessageCircleQuestion,
  Paperclip,
  PlayCircle,
  Sparkles,
  Bookmark,
  StickyNote,
  Trash2,
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

/** Safely parse a lesson's Arabic content JSON (null when absent/broken). */
function parseArContent(json: string): LessonContent | null {
  if (!json) return null
  try {
    const v = JSON.parse(json) as LessonContent
    return v && Array.isArray(v.sections) ? v : null
  } catch {
    return null
  }
}

export function LessonPlayer() {
  const data = useAppStore((s) => s.data)
  const courseId = useAppStore((s) => s.selectedCourseId)
  const lessonId = useAppStore((s) => s.selectedLessonId)
  const navigate = useAppStore((s) => s.navigate)
  const completeLesson = useAppStore((s) => s.completeLesson)
  const openTutor = useAppStore((s) => s.openTutor)
  const setAiPresetQuestion = useAppStore((s) => s.setAiPresetQuestion)
  const lang = useAppStore((s) => s.lang)
  // v21: lesson bookmark (saved lessons, Home card)
  const bookmarks = useAppStore((s) => s.bookmarks)
  const toggleBookmark = useAppStore((s) => s.toggleBookmark)
  const bookmarked = bookmarks.includes(lessonId ?? "")

  /* ---------- v20: notes & highlights (P2-9) ---------- */
  const [notes, setNotes] = useState<LessonNoteClient[]>([])
  const [notesOpen, setNotesOpen] = useState(false)
  const [noteText, setNoteText] = useState("")
  const articleRef = useRef<HTMLElement>(null)
  const [selectionBox, setSelectionBox] = useState<{ x: number; y: number; text: string } | null>(null)

  /* ---------- v20: Arabic edition toggle (P1-6) ---------- */
  const [preferAr, setPreferAr] = useState(true)

  const course = data?.courses.find((c) => c.id === courseId)
  const lesson = useMemo(
    () => course?.modules.flatMap((m) => m.lessons).find((l) => l.id === lessonId),
    [course, lessonId]
  )

  // track the last-opened lesson (resume card) — fire and forget
  useEffect(() => {
    if (lessonId) {
      void fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, action: "open" }),
      })
    }
  }, [lessonId])

  useEffect(() => {
    let alive = true
    void (async () => {
      if (!lessonId) return
      const res = await fetch(`/api/notes?lessonId=${lessonId}`)
      if (!res.ok || !alive) return
      const j = (await res.json()) as { notes: LessonNoteClient[] }
      if (alive) setNotes(j.notes)
    })()
    return () => {
      alive = false
    }
  }, [lessonId])

  const saveNote = async (kind: "note" | "highlight", text: string, quote = "") => {
    if (!lessonId) return
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId, kind, text, quote, color: kind === "highlight" ? "amber" : "sky" }),
    })
    if (res.ok) {
      const j = (await res.json()) as { note: LessonNoteClient }
      setNotes((n) => [j.note, ...n])
    }
  }

  const deleteNote = async (id: string) => {
    await fetch(`/api/notes?id=${id}`, { method: "DELETE" })
    setNotes((n) => n.filter((x) => x.id !== id))
  }

  // floating highlight button when the learner selects lesson text
  useEffect(() => {
    const onUp = () => {
      const sel = window.getSelection()
      const text = sel?.toString().trim() ?? ""
      if (
        sel &&
        text.length > 12 &&
        articleRef.current &&
        articleRef.current.contains(sel.anchorNode)
      ) {
        const rect = sel.getRangeAt(0).getBoundingClientRect()
        setSelectionBox({ x: rect.left + rect.width / 2, y: rect.top - 44, text })
      } else {
        setSelectionBox(null)
      }
    }
    document.addEventListener("mouseup", onUp)
    document.addEventListener("touchend", onUp)
    return () => {
      document.removeEventListener("mouseup", onUp)
      document.removeEventListener("touchend", onUp)
    }
  }, [])

  const askAboutSection = (heading: string, body: string) => {
    setAiPresetQuestion(
      lang === "ar"
        ? `اشرح لي قسم «${heading}» من درس «${lesson?.title ?? ""}» بأسلوب مبسط مع مثال عملي من واقع المراجعة المصرية. نص القسم: ${body.slice(0, 400)}`
        : `Explain the section "${heading}" of the lesson "${lesson?.title ?? ""}" simply, with a practical Egyptian audit example. Section text: ${body.slice(0, 400)}`
    )
    navigate("ai")
  }

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

  if (data && (!course || !lesson)) {
    // a shared deep link whose lesson no longer exists — never a blank page
    return (
      <div className="mx-auto max-w-md py-16 text-center">
        <FileQuestion className="mx-auto h-10 w-10 text-muted-foreground/60" />
        <h1 className="mt-4 font-serif text-xl font-semibold">{tt("lesson.notFoundTitle", lang)}</h1>
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{tt("lesson.notFoundBody", lang)}</p>
        <Button onClick={() => navigate("courses")} className="mt-5 h-10">
          <ChevronLeft className="h-4 w-4 rtl:rotate-180" /> {tt("detail.allCourses", lang)}
        </Button>
      </div>
    )
  }

  if (!course || !lesson) return null
  const accent = accentOf(course.accent)

  // Arabic edition (P1-6): render the AR rendition when the UI is Arabic and
  // the lesson has one; the learner can still force the English original
  const arContent = parseArContent(lesson.contentAr)
  const useArEdition = lang === "ar" && preferAr && !!arContent?.sections?.length
  const c = useArEdition ? arContent! : lesson.content
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
      {/* floating highlight button (P2-9) — appears over selected lesson text */}
      {selectionBox && (
        <button
          onClick={() => {
            void saveNote("highlight", selectionBox.text.slice(0, 400), selectionBox.text)
            window.getSelection()?.removeAllRanges()
            setSelectionBox(null)
            toast.success(tt("notes.highlighted", lang))
          }}
          style={{ left: selectionBox.x, top: selectionBox.y }}
          className="fixed z-50 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-primary/40 bg-card px-3.5 py-1.5 text-[12px] font-semibold text-primary shadow-soft focus-ring"
        >
          <Highlighter className="h-3.5 w-3.5" /> {tt("notes.highlight", lang)}
        </button>
      )}

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
        {/* v32 — share this exact lesson (#/lesson/<id>?c=…) */}
        <ShareButton variant="ghost" title={lesson.title} className="h-7 w-7 px-0" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1fr)_260px]">
        {/* reading column */}
        <article className="max-w-[680px]" ref={articleRef}>
          {useArEdition && (
            <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/[0.05] px-3 py-1 text-[11.5px] font-medium text-primary">
              <Languages className="h-3 w-3" /> {tt("notes.arabicOn", lang)}
            </p>
          )}
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
            {lang === "ar" && arContent && (
              <button
                onClick={() => setPreferAr((v) => !v)}
                title={useArEdition ? "English" : tt("notes.arabicVersion", lang)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors focus-ring",
                  useArEdition ? "border-primary/40 bg-primary/10 text-primary" : "border-border text-muted-foreground hover:text-foreground"
                )}
              >
                <Languages className="h-3.5 w-3.5" />
                {useArEdition ? "English" : "العربية"}
              </button>
            )}
            <button
              onClick={() => {
                openTutor({ view: "lesson", courseId: course.id, lessonId: lesson.id })
              }}
              className="ms-auto inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/[0.06] px-3 py-1.5 text-[12px] font-medium text-primary transition-all hover:-translate-y-px hover:border-primary/50 hover:bg-primary/[0.12] hover:shadow-soft focus-ring"
            >
              <Sparkles className="h-3.5 w-3.5" /> {tt("lesson.askAi", lang)}
            </button>
            {/* v21: bookmark this lesson — surfaces on the Home saved card */}
            <button
              onClick={() => toggleBookmark(lesson.id)}
              aria-pressed={bookmarked}
              title={bookmarked ? tt("lesson.unsave", lang) : tt("lesson.save", lang)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors focus-ring",
                bookmarked
                  ? "border-gold/50 bg-gold/10 text-gold-deep"
                  : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
              )}
            >
              <Bookmark className={cn("h-3.5 w-3.5", bookmarked && "fill-current")} />
              {bookmarked ? tt("lesson.saved", lang) : tt("lesson.save", lang)}
            </button>
            <button
              onClick={() => setNotesOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-[12px] font-medium text-muted-foreground transition-colors hover:text-foreground focus-ring"
            >
              <StickyNote className="h-3.5 w-3.5" /> {tt("notes.open", lang)}
              {notes.length > 0 && (
                <span className="rounded-full bg-primary/15 px-1.5 text-[10.5px] font-semibold text-primary">
                  {notes.length}
                </span>
              )}
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
              <div className="flex items-start justify-between gap-3">
                <h2 dir="auto" className="font-serif text-[19px] font-semibold tracking-tight">{s.heading}</h2>
                <button
                  onClick={() => askAboutSection(s.heading, s.body || "")}
                  title={tt("notes.askTutorSection", lang)}
                  className="mt-0.5 shrink-0 rounded-lg p-1.5 text-muted-foreground/60 transition-colors hover:bg-secondary hover:text-primary focus-ring"
                >
                  <MessageCircleQuestion className="h-4 w-4" />
                </button>
              </div>
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

      {/* notes & highlights drawer (P2-9) */}
      <Sheet open={notesOpen} onOpenChange={setNotesOpen}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-md">
          <SheetHeader>
            <SheetTitle>{tt("notes.title", lang)}</SheetTitle>
            <SheetDescription dir="auto" className="line-clamp-1">{lesson.title}</SheetDescription>
          </SheetHeader>
          <div className="mt-4 space-y-4 px-4 pb-8">
            <div className="flex gap-2">
              <textarea
                dir="auto"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                rows={3}
                placeholder={tt("notes.addNote", lang)}
                className="w-full rounded-xl border bg-background p-3 text-[13.5px] leading-relaxed focus-ring"
              />
            </div>
            <Button
              className="h-9 w-full"
              disabled={noteText.trim().length < 2}
              onClick={() => {
                void saveNote("note", noteText.trim())
                setNoteText("")
              }}
            >
              {tt("notes.save", lang)}
            </Button>

            {notes.length === 0 ? (
              <p className="rounded-xl border border-dashed p-6 text-center text-[12.5px] text-muted-foreground">
                {tt("notes.empty", lang)}
              </p>
            ) : (
              <div className="space-y-2.5">
                {notes.map((n) => (
                  <div key={n.id} className={cn("rounded-xl border p-3.5", n.kind === "highlight" ? "border-gold/40 bg-gold/[0.06]" : "bg-card")}>
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        {n.kind === "highlight" && n.quote && (
                          <p dir="auto" className="mb-1.5 border-s-2 border-gold/60 ps-2 text-[12px] italic leading-relaxed text-muted-foreground">
                            {n.quote.slice(0, 220)}
                            {n.quote.length > 220 ? "…" : ""}
                          </p>
                        )}
                        <p dir="auto" className="whitespace-pre-line text-[13px] leading-relaxed">{n.text}</p>
                        <p className="mt-1.5 text-[11px] text-muted-foreground">
                          {new Date(n.createdAt).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB")}
                        </p>
                      </div>
                      <button
                        onClick={() => void deleteNote(n.id)}
                        className="shrink-0 rounded-lg p-1.5 text-muted-foreground/60 transition-colors hover:text-primary focus-ring"
                        aria-label="delete"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => {
                openTutor({ view: "lesson", courseId: course.id, lessonId: lesson.id })
                setNotesOpen(false)
              }}
              className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-primary/30 bg-primary/[0.05] px-4 py-3 text-[13px] font-medium text-primary transition-colors hover:bg-primary/[0.1] focus-ring"
            >
              <Sparkles className="h-4 w-4" /> {tt("notes.askTutor", lang)}
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
