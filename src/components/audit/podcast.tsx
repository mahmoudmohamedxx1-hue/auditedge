"use client"

import { useMemo, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { tt } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
  Search,
  Sparkles,
  Trash2,
  Youtube,
} from "lucide-react"

type QueueItem = {
  lessonId: string
  title: string
  courseCode: string
  status: "waiting" | "preparing" | "done"
}

/* ==================== v26 — the AI podcast studio ==================== */

type StudioTurn = { speaker: "host" | "guest"; text: string }

type StudioScript = {
  title: string
  lang: "en" | "ar"
  minutes: number
  host: string
  guest: string
  turns: StudioTurn[]
  engine: string
  notice: string | null
}

const STUDIO_MINUTES = [10, 15, 20] as const
const STUDIO_STYLES = [
  { id: "interview", en: "Interview", ar: "لقاء" },
  { id: "lesson", en: "Guided lesson", ar: "درس موجّه" },
  { id: "debate", en: "Friendly debate", ar: "مناظرة ودية" },
  { id: "examprep", en: "Exam coaching", ar: "تدريب امتحاني" },
] as const

/** Settings panel → AI writes a two-person script → the sticky player voices
 *  it with two different neural voices (host + guest). */
function PodcastStudio({ lang }: { lang: "en" | "ar" }) {
  const playTrack = usePlayerStore((s) => s.playTrack)
  const [topic, setTopic] = useState("")
  const [pLang, setPLang] = useState<"en" | "ar">(lang)
  const [minutes, setMinutes] = useState<(typeof STUDIO_MINUTES)[number]>(15)
  const [style, setStyle] = useState<(typeof STUDIO_STYLES)[number]["id"]>("interview")
  const [host, setHost] = useState("")
  const [guest, setGuest] = useState("")
  const [script, setScript] = useState<StudioScript | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [downloading, setDownloading] = useState(false)

  const generate = async () => {
    if (topic.trim().length < 3 || loading) return
    setLoading(true)
    setError(null)
    setScript(null)
    try {
      const res = await fetch("/api/ai/podcast/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim(), lang: pLang, minutes, style, host, guest }),
      })
      if (!res.ok) throw new Error("generation failed")
      const data = (await res.json()) as StudioScript & { error?: string }
      if (data.error) throw new Error(data.error)
      setScript(data)
    } catch {
      setError(tt("podcast.studioFailed", lang))
    } finally {
      setLoading(false)
    }
  }

  const play = () => {
    if (!script) return
    playTrack({
      lessonId: `custom-pod-${Date.now()}`,
      title: script.title,
      courseCode: tt("podcast.studioBadge", lang),
      lang: script.lang,
      speak: { turns: script.turns },
    })
  }

  const download = async () => {
    if (!script || downloading) return
    setDownloading(true)
    try {
      const res = await fetch("/api/ai/podcast/speak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lang: script.lang, turns: script.turns }),
      })
      if (!res.ok) throw new Error("synthesis failed")
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `auditedge-custom-podcast-${script.lang}.mp3`
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch {
      setError(tt("podcast.studioSpeakFailed", lang))
    } finally {
      setDownloading(false)
    }
  }

  const chip = (active: boolean) =>
    cn(
      "rounded-full border px-3 py-1 text-[11.5px] transition-colors",
      active
        ? "border-primary/40 bg-primary/10 font-medium text-primary"
        : "bg-secondary/40 text-muted-foreground hover:text-foreground"
    )

  return (
    <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.05] via-card to-card p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Sparkles className="h-[18px] w-[18px]" />
        </span>
        <div>
          <h2 className="font-serif text-[17px] font-semibold">{tt("podcast.studioTitle", lang)}</h2>
          <p className="text-[12.5px] text-muted-foreground">{tt("podcast.studioDesc", lang)}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && void generate()}
            placeholder={tt("podcast.studioTopicPh", lang)}
            className="h-10 bg-background text-[13.5px]"
            aria-label={tt("podcast.studioTopicPh", lang)}
          />
        </div>
        <div className="flex flex-wrap items-center gap-1.5 sm:col-span-2">
          <span className="me-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            {tt("podcast.studioLang", lang)}
          </span>
          <button type="button" onClick={() => setPLang("en")} className={chip(pLang === "en")}>English</button>
          <button type="button" onClick={() => setPLang("ar")} className={chip(pLang === "ar")}>العربية</button>
          <span className="mx-1 hidden h-4 w-px bg-border sm:block" />
          <span className="me-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            {tt("podcast.studioMinutes", lang)}
          </span>
          {STUDIO_MINUTES.map((m) => (
            <button key={m} type="button" onClick={() => setMinutes(m)} className={chip(minutes === m)}>
              ~{m} min{lang === "ar" ? " د" : ""}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-1.5 sm:col-span-2">
          <span className="me-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
            {tt("podcast.studioStyle", lang)}
          </span>
          {STUDIO_STYLES.map((s) => (
            <button key={s.id} type="button" onClick={() => setStyle(s.id)} className={chip(style === s.id)}>
              {lang === "ar" ? s.ar : s.en}
            </button>
          ))}
        </div>
        <Input
          value={host}
          onChange={(e) => setHost(e.target.value)}
          placeholder={tt("podcast.studioHostPh", lang)}
          className="h-9 bg-background text-[13px]"
          aria-label={tt("podcast.studioHostPh", lang)}
        />
        <Input
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
          placeholder={tt("podcast.studioGuestPh", lang)}
          className="h-9 bg-background text-[13px]"
          aria-label={tt("podcast.studioGuestPh", lang)}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Button size="sm" className="h-9" disabled={loading || topic.trim().length < 3} onClick={() => void generate()}>
          {loading ? <Loader2 className="me-1.5 h-3.5 w-3.5 animate-spin" /> : <Sparkles className="me-1.5 h-3.5 w-3.5" />}
          {loading ? tt("podcast.studioGenerating", lang) : tt("podcast.studioGenerate", lang)}
        </Button>
        {script && (
          <span className="text-[11.5px] text-muted-foreground">
            {tt("podcast.studioTurns", lang).replace("{n}", String(script.turns.length))} · ~{script.minutes} min
          </span>
        )}
      </div>

      {error && (
        <p className="mt-3 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-[12px] text-destructive">
          {error}
        </p>
      )}

      {script && (
        <div className="mt-4 rounded-xl border bg-background/70 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p dir="auto" className="text-[14px] font-semibold leading-snug">{script.title}</p>
            <div className="flex gap-2">
              <Button size="sm" className="h-8" onClick={play}>
                <Play className="me-1 h-3.5 w-3.5 fill-current" /> {tt("podcast.studioPlay", lang)}
              </Button>
              <Button size="sm" variant="outline" className="h-8" disabled={downloading} onClick={() => void download()}>
                {downloading ? <Loader2 className="me-1.5 h-3.5 w-3.5 animate-spin" /> : <Download className="me-1.5 h-3.5 w-3.5" />}
                {tt("podcast.download", lang)}
              </Button>
            </div>
          </div>
          {script.notice === "script-fallback" && (
            <p className="mt-2 text-[11.5px] text-muted-foreground">{tt("podcast.studioFallback", lang)}</p>
          )}
          <p className="mt-1 text-[11px] text-muted-foreground">
            {tt("podcast.studioHostLabel", lang)}: {script.host} · {tt("podcast.studioGuestLabel", lang)}: {script.guest}
          </p>
          {/* script preview — the first turns, the whole conversation in order */}
          <div className="mt-3 max-h-72 space-y-2 overflow-y-auto pe-1">
            {script.turns.map((t, i) => (
              <div key={i} className="text-[12.5px] leading-relaxed">
                <span
                  className={cn(
                    "me-1.5 font-semibold",
                    t.speaker === "host" ? "text-primary" : "text-plum-deep"
                  )}
                >
                  {t.speaker === "host" ? script.host : script.guest}:
                </span>
                <span dir="auto">{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
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
  // v26 — bilingual search: every episode is findable in English AND Arabic
  // ("qawain" / "قوائم" both land the Qawaim accounting podcast)
  const [ytQuery, setYtQuery] = useState("")
  const ytQ = ytQuery.trim().toLowerCase()
  const ytEpisodes = useMemo(() => {
    const byCat = ytCat === "all" ? YT_EPISODES : YT_EPISODES.filter((e) => e.category === ytCat)
    if (!ytQ) return byCat
    return byCat.filter((e) =>
      `${e.titleEn} ${e.titleAr} ${e.channel} ${e.blurbEn} ${e.blurbAr}`.toLowerCase().includes(ytQ)
    )
  }, [ytCat, ytQ])

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

      {/* v26 — the AI podcast studio: the learner's ask was "make a podcast
          with the settings I want, by the AI" — topic, language, length,
          style and host names, then two AI voices carry the episode. */}
      <PodcastStudio lang={lang} />

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

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          {/* v26 — find-any-episode search across BOTH languages */}
          <div className="relative sm:w-72">
            <Search className="pointer-events-none absolute start-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={ytQuery}
              onChange={(e) => setYtQuery(e.target.value)}
              placeholder={tt("podcast.searchPh", lang)}
              className="h-9 bg-background ps-8 text-[13px]"
              aria-label={tt("podcast.searchPh", lang)}
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
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
        </div>

        {ytEpisodes.length === 0 ? (
          <p className="mt-5 rounded-xl border border-dashed p-6 text-center text-[12.5px] text-muted-foreground">
            {tt("podcast.searchNone", lang)}
          </p>
        ) : (
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
        )}
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
  // v26 — both languages always visible: the active one leads, the other
  // sits right under it, so the catalog is English AND Arabic at once
  const title = lang === "ar" ? ep.titleAr : ep.titleEn
  const altTitle = lang === "ar" ? ep.titleEn : ep.titleAr
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border bg-secondary/20">
      {playing ? (
        <div className="aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${ep.id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      ) : (
        <button type="button" onClick={onPlay} className="group relative aspect-video w-full" aria-label={title}>
          <img
            src={`https://i.ytimg.com/vi/${ep.id}/hqdefault.jpg`}
            alt={title}
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
        <p dir="auto" className="text-[13px] font-semibold leading-snug">{title}</p>
        <p dir="auto" className="mt-0.5 line-clamp-1 text-[11px] text-muted-foreground/75">
          {altTitle}
        </p>
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
