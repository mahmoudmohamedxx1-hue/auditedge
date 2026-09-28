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
import { YT_CATEGORIES, YT_EPISODES, type PodcastEpisode } from "@/lib/podcast-episodes"
import { usePlayerStore, type PlayerTrack } from "@/lib/player"
import { courseLessons } from "./shared"
import {
  CheckCircle2,
  Download,
  ExternalLink,
  Headphones,
  ListVideo,
  Loader2,
  Pause,
  Play,
  Trash2,
  Youtube,
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

  // v24 — the in-website player: queue the course and listen while you browse
  const playAll = usePlayerStore((s) => s.playAll)
  const playerQueue = usePlayerStore((s) => s.queue)
  const playerIndex = usePlayerStore((s) => s.index)
  const playerStatus = usePlayerStore((s) => s.status)
  const playerToggle = usePlayerStore((s) => s.toggle)
  const activeTrack: PlayerTrack | null = playerQueue[playerIndex] ?? null

  // v22 — curated Arabic YouTube podcast section
  const [ytCat, setYtCat] = useState<(typeof YT_CATEGORIES)[number]["id"]>("all")
  const [playing, setPlaying] = useState<string | null>(null)
  const ytEpisodes = useMemo(
    () => (ytCat === "all" ? YT_EPISODES : YT_EPISODES.filter((e) => e.category === ytCat)),
    [ytCat]
  )

  const courses = useMemo(
    () =>
      (data?.courses ?? [])
        .map((c) => ({ id: c.id, code: c.code, title: c.title, lessons: courseLessons(c).filter((l) => l.type === "lesson") }))
        .filter((c) => c.lessons.length > 0),
    [data]
  )
  const course = courses.find((c) => c.id === courseId) ?? courses[0]
  const lessons = course?.lessons ?? []

  /** v24 — build player tracks for a slice of this course's lessons. */
  const tracksOf = (from: number, langWanted: "en" | "ar"): PlayerTrack[] =>
    lessons
      .slice(from)
      .filter((l) => langWanted === "en" || Boolean(l.contentAr))
      .map((l) => ({
        lessonId: l.id,
        title: l.title,
        courseCode: course?.code ?? "",
        lang: langWanted,
      }))

  const playCourse = (l: "en" | "ar") => {
    const tracks = tracksOf(0, l)
    if (tracks.length) playAll(tracks, 0)
  }

  const playFrom = (lessonId: string, l: "en" | "ar") => {
    const at = lessons.findIndex((x) => x.id === lessonId)
    if (at < 0) return
    const tracks = tracksOf(at, l)
    if (tracks.length) playAll(tracks, 0)
  }

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
            {/* v24 — listen inside the site while you keep browsing */}
            <Button
              size="sm"
              className="h-8"
              disabled={!course || lessons.length === 0 || (lang === "ar" && !lessons.some((l) => l.contentAr))}
              onClick={() => playCourse(lang === "ar" && lessons.some((l) => l.contentAr) ? "ar" : "en")}
            >
              <Play className="me-1 h-3.5 w-3.5 fill-current" /> {tt("podcast.playAll", lang)}
            </Button>
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
              // v24 — is THIS row the episode currently in the player?
              const isNowPlaying =
                activeTrack?.lessonId === l.id &&
                (activeTrack.lang === "ar" ? hasAr : true) &&
                playerStatus !== "idle"
              return (
                <div
                  key={l.id}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-xl border bg-secondary/25 px-4 py-3 transition-colors",
                    isNowPlaying && "border-primary/35 bg-primary/[0.06]"
                  )}
                >
                  <div className="min-w-0" dir="auto">
                    <p className="truncate text-[13.5px] font-medium">
                      {isNowPlaying ? (
                        <span className="me-1.5 inline-flex h-3 items-end gap-[2px] align-middle" aria-hidden>
                          <span className="w-[2.5px] animate-eq bg-primary" style={{ height: "55%" }} />
                          <span className="w-[2.5px] animate-eq bg-primary [animation-delay:150ms]" style={{ height: "100%" }} />
                          <span className="w-[2.5px] animate-eq bg-primary [animation-delay:300ms]" style={{ height: "40%" }} />
                        </span>
                      ) : null}
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
                        onClick={() =>
                          isNowPlaying && activeTrack?.lang === "ar"
                            ? playerToggle()
                            : playFrom(l.id, "ar")
                        }
                      >
                        {isNowPlaying && activeTrack?.lang === "ar" ? (
                          playerStatus === "playing" ? (
                            <Pause className="h-3.5 w-3.5 fill-current" />
                          ) : (
                            <Play className="h-3.5 w-3.5 fill-current" />
                          )
                        ) : (
                          <Play className="h-3.5 w-3.5" />
                        )}
                        <span className="mx-1">AR</span>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8"
                      onClick={() =>
                        isNowPlaying && activeTrack?.lang === "en" ? playerToggle() : playFrom(l.id, "en")
                      }
                      aria-label={`${tt("podcast.playFromHere", lang)} — ${l.title}`}
                    >
                      {isNowPlaying && activeTrack?.lang === "en" ? (
                        playerStatus === "playing" ? (
                          <Pause className="h-3.5 w-3.5 fill-current" />
                        ) : (
                          <Play className="h-3.5 w-3.5 fill-current" />
                        )
                      ) : (
                        <Play className="h-3.5 w-3.5" />
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8"
                      disabled={busy}
                      onClick={() => void startDownload(l.id, l.title, lang === "ar" && hasAr)}
                      aria-label={tt("podcast.download", lang)}
                    >
                      {busy ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : done ? (
                        <CheckCircle2 className="h-3.5 w-3.5 text-sage-deep" />
                      ) : (
                        <Download className="h-3.5 w-3.5" />
                      )}
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

      {/* v22 — curated Arabic YouTube podcasts (CPA Talks and friends) */}
      <section className="mt-8 rounded-2xl border bg-card p-6 shadow-soft">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-clay/15 text-clay-deep">
            <Youtube className="h-[18px] w-[18px]" />
          </span>
          <div>
            <h2 className="font-serif text-[17px] font-semibold">{tt("podcast.youtubeTitle", lang)}</h2>
            <p className="text-[12.5px] text-muted-foreground">{tt("podcast.youtubeDesc", lang)}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {YT_CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setYtCat(c.id)
                setPlaying(null)
              }}
              className={cn(
                "rounded-full border px-3 py-1 text-[11.5px] transition-colors",
                ytCat === c.id
                  ? "border-primary/40 bg-primary/10 font-medium text-primary"
                  : "bg-secondary/40 text-muted-foreground hover:text-foreground"
              )}
            >
              {lang === "ar" ? c.labelAr : c.labelEn}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {ytEpisodes.map((ep) => (
            <YtEpisodeCard
              key={ep.id}
              ep={ep}
              lang={lang}
              playing={playing === ep.id}
              onPlay={() => setPlaying(playing === ep.id ? null : ep.id)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

/** One curated YouTube episode: thumbnail with click-to-play inline embed,
 *  channel/length/views line, a short blurb and an open-on-YouTube link. */
function YtEpisodeCard({
  ep,
  lang,
  playing,
  onPlay,
}: {
  ep: PodcastEpisode
  lang: "en" | "ar"
  playing: boolean
  onPlay: () => void
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border bg-secondary/20">
      {playing ? (
        <div className="aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${ep.id}?autoplay=1&rel=0`}
            title={ep.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      ) : (
        <button type="button" onClick={onPlay} className="group relative aspect-video w-full" aria-label={ep.title}>
          <img
            src={`https://i.ytimg.com/vi/${ep.id}/hqdefault.jpg`}
            alt={ep.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/40">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600/90 text-white shadow-soft">
              <Play className="ms-0.5 h-5 w-5 fill-current" />
            </span>
          </span>
          <span className="absolute bottom-1.5 end-1.5 rounded bg-black/75 px-1.5 py-0.5 font-mono text-[10.5px] text-white">
            {ep.length}
          </span>
        </button>
      )}
      <div className="flex flex-1 flex-col p-3.5">
        <p dir="auto" className="text-[13px] font-semibold leading-snug">{ep.title}</p>
        <p className="mt-1 text-[11.5px] text-muted-foreground">
          {ep.channel} · {ep.views} {tt("podcast.views", lang)}
        </p>
        <p dir="auto" className="mt-1.5 flex-1 text-[12px] leading-relaxed text-muted-foreground/90">
          {lang === "ar" ? ep.blurbAr : ep.blurbEn}
        </p>
        <a
          href={`https://www.youtube.com/watch?v=${ep.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 inline-flex items-center gap-1 text-[11.5px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ExternalLink className="h-3 w-3" /> {tt("podcast.youtubeOpen", lang)}
        </a>
      </div>
    </div>
  )
}
