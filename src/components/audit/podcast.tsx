"use client"

import { useMemo, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { tt } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { courseLessons } from "./shared"
import {
  CheckCircle2,
  Download,
  Headphones,
  ListVideo,
  Loader2,
  Trash2,
} from "lucide-react"

type QueueItem = {
  lessonId: string
  title: string
  courseCode: string
  status: "waiting" | "preparing" | "done"
}

export function Podcast() {
  const data = useAppStore((s) => s.data)
  const lang = useAppStore((s) => s.lang)
  const [courseId, setCourseId] = useState<string>("")
  const [queue, setQueue] = useState<QueueItem[]>([])
  const [current, setCurrent] = useState<string | null>(null)
  const [bulkBusy, setBulkBusy] = useState(false)

  const courses = useMemo(
    () =>
      (data?.courses ?? [])
        .map((c) => ({ id: c.id, code: c.code, title: c.title, lessons: courseLessons(c).filter((l) => l.type === "lesson") }))
        .filter((c) => c.lessons.length > 0),
    [data]
  )
  const course = courses.find((c) => c.id === courseId) ?? courses[0]
  const lessons = course?.lessons ?? []

  const startDownload = async (lessonId: string, title: string, ar: boolean) => {
    setCurrent(lessonId)
    setQueue((q) => {
      const existing = q.find((x) => x.lessonId === lessonId && x.status !== "done")
      if (existing) return q
      return [...q, { lessonId, title, courseCode: course?.code ?? "", status: "waiting" }]
    })
    setQueue((q) => q.map((x) => (x.lessonId === lessonId ? { ...x, status: "preparing" } : x)))
    try {
      const res = await fetch(`/api/podcast/lesson/${lessonId}${ar ? "?lang=ar" : ""}`)
      if (!res.ok) throw new Error("synthesis failed")
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `auditedge-${(course?.code ?? "lesson").toLowerCase()}-${lessonId.slice(-6)}${ar ? "-ar" : ""}.mp3`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
      setQueue((q) => q.map((x) => (x.lessonId === lessonId ? { ...x, status: "done" } : x)))
    } catch {
      setQueue((q) => q.filter((x) => x.lessonId !== lessonId))
    } finally {
      setCurrent(null)
    }
  }

  const inQueue = (lessonId: string) => queue.some((q) => q.lessonId === lessonId && q.status !== "done")

  /** v20.1 (P2-11 completion): queue the whole course, then drain it
   *  sequentially — one download at a time, status visible in the queue. */
  const downloadAll = async (lang: "en" | "ar") => {
    if (!course || bulkBusy) return
    setBulkBusy(true)
    const targets = lessons.filter((l) => !queue.some((q) => q.lessonId === l.id && q.status === "done"))
    for (const lesson of targets) {
      setQueue((q) => [
        ...q.filter((x) => x.lessonId !== lesson.id),
        { lessonId: lesson.id, title: lesson.title, courseCode: course.code, status: "waiting" },
      ])
      setQueue((q) => q.map((x) => (x.lessonId === lesson.id ? { ...x, status: "preparing" } : x)))
      try {
        const res = await fetch(`/api/podcast/lesson/${lesson.id}${lang === "ar" ? "?lang=ar" : ""}`)
        if (res.ok) {
          const blob = await res.blob()
          const url = URL.createObjectURL(blob)
          const a = document.createElement("a")
          a.href = url
          a.download = `auditedge-${course.code.toLowerCase()}-${lesson.id.slice(-6)}${lang === "ar" ? "-ar" : ""}.mp3`
          document.body.appendChild(a)
          a.click()
          a.remove()
          URL.revokeObjectURL(url)
          setQueue((q) => q.map((x) => (x.lessonId === lesson.id ? { ...x, status: "done" } : x)))
        } else {
          setQueue((q) => q.filter((x) => x.lessonId !== lesson.id))
        }
      } catch {
        setQueue((q) => q.filter((x) => x.lessonId !== lesson.id))
      }
    }
    setBulkBusy(false)
  }

  return (
    <div className="mx-auto max-w-4xl">
      <header className="mb-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Headphones className="h-5 w-5" />
          </span>
          <div>
            <h1 className="font-serif text-[26px] font-semibold tracking-tight">{tt("podcast.title", lang)}</h1>
            <p className="text-[13.5px] text-muted-foreground">{tt("podcast.subtitle", lang)}</p>
          </div>
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-3">
        <section className="lg:col-span-2 rounded-2xl border bg-card p-6 shadow-soft">
          <Select value={course?.id ?? ""} onValueChange={setCourseId}>
            <SelectTrigger className="h-10">
              <SelectValue placeholder={tt("podcast.pickCourse", lang)} />
            </SelectTrigger>
            <SelectContent className="max-h-72">
              {courses.map((c) => (
                <SelectItem key={c.id} value={c.id}>
                  {c.code} — {c.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="mt-3 flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8"
              disabled={bulkBusy || !course}
              onClick={() => void downloadAll("en")}
            >
              {bulkBusy ? <Loader2 className="me-1.5 h-3.5 w-3.5 animate-spin" /> : <ListVideo className="me-1.5 h-3.5 w-3.5" />}
              {tt("podcast.queueAll", lang)} (EN)
            </Button>
            {lang === "ar" && (
              <Button
                variant="outline"
                size="sm"
                className="h-8"
                disabled={bulkBusy || !course}
                onClick={() => void downloadAll("ar")}
              >
                {bulkBusy ? <Loader2 className="me-1.5 h-3.5 w-3.5 animate-spin" /> : <ListVideo className="me-1.5 h-3.5 w-3.5" />}
                {tt("podcast.queueAll", lang)} (العربية)
              </Button>
            )}
          </div>

          <div className="mt-4 space-y-1.5">
            {lessons.map((l, i) => {
              const hasAr = Boolean(l.contentAr)
              const busy = current === l.id || inQueue(l.id)
              const done = queue.some((q) => q.lessonId === l.id && q.status === "done")
              return (
                <div
                  key={l.id}
                  className="flex items-center justify-between gap-3 rounded-xl border bg-secondary/25 px-4 py-3"
                >
                  <div className="min-w-0" dir="auto">
                    <p className="truncate text-[13.5px] font-medium">
                      {i + 1}. {l.title}
                    </p>
                    <p className="text-[11.5px] text-muted-foreground">
                      {hasAr ? tt("podcast.arAvailable", lang) : tt("podcast.enOnly", lang)} · {l.durationMin} min
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5">
                    {lang === "ar" && hasAr && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8"
                        disabled={busy}
                        onClick={() => void startDownload(l.id, l.title, true)}
                      >
                        {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
                        <span className="mx-1">AR</span>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant={done ? "outline" : "default"}
                      className={cn("h-8", done && "text-sage-deep")}
                      disabled={busy}
                      onClick={() => void startDownload(l.id, l.title, false)}
                    >
                      {busy ? (
                        <Loader2 className="me-1 h-3.5 w-3.5 animate-spin" />
                      ) : done ? (
                        <CheckCircle2 className="me-1 h-3.5 w-3.5" />
                      ) : (
                        <Download className="me-1 h-3.5 w-3.5" />
                      )}
                      {busy ? tt("podcast.downloading", lang) : done ? tt("podcast.ready", lang) : tt("podcast.download", lang)}
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* download queue */}
        <section className="rounded-2xl border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-[15px] font-semibold">{tt("podcast.queue", lang)}</h2>
            {queue.length > 0 && (
              <Button variant="ghost" size="sm" className="h-7 text-muted-foreground" onClick={() => setQueue([])}>
                <Trash2 className="me-1 h-3.5 w-3.5" /> {tt("podcast.clear", lang)}
              </Button>
            )}
          </div>
          {queue.length === 0 ? (
            <p className="mt-4 rounded-xl border border-dashed p-5 text-center text-[12.5px] text-muted-foreground">
              {tt("podcast.subtitle", lang)}
            </p>
          ) : (
            <div className="mt-4 space-y-1.5">
              {queue.map((q) => (
                <div key={q.lessonId} className="flex items-center justify-between gap-2 rounded-lg border bg-secondary/25 px-3 py-2 text-[12.5px]">
                  <span dir="auto" className="truncate">{q.courseCode} · {q.title}</span>
                  {q.status === "done" ? (
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-sage-deep" />
                  ) : (
                    <Loader2 className={cn("h-3.5 w-3.5 shrink-0", q.status === "preparing" && "animate-spin text-primary")} />
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
