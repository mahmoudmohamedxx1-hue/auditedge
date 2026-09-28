"use client"

import { useMemo, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { CourseCard, PageHeader } from "./shared"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { tt, arOr, COURSE_CATEGORY_AR } from "@/lib/i18n"
import { FREE_COURSES, type FreeCourse } from "@/lib/free-courses"
import { LinkCourseCover } from "@/components/audit/course-cover"
import { VIDEO_CATEGORIES, VIDEO_COURSES, ytThumb, ytEmbed, type VideoCourse } from "@/lib/video-courses"
import {
  Award,
  BookOpen,
  Calculator,
  ExternalLink,
  Eye,
  FileSpreadsheet,
  GraduationCap,
  Landmark,
  Languages,
  LineChart,
  MonitorPlay,
  PenTool,
  Play,
  Plus,
  Scale,
  Search,
  SlidersHorizontal,
  Youtube,
  type LucideIcon,
} from "lucide-react"

/* ---------- v23: pro cover thumbnails for the link-course catalog ---------- */

const FREE_COVER: Record<FreeCourse["category"], { icon: LucideIcon; grad: string; label: string }> = {
  accounting: { icon: Calculator, grad: "from-olive/80 to-olive-deep/90", label: "Accounting" },
  ifrs: { icon: Scale, grad: "from-plum/80 to-plum-deep/90", label: "IFRS" },
  audit: { icon: Landmark, grad: "from-primary/70 to-primary/90", label: "Audit" },
  cfa: { icon: LineChart, grad: "from-teal-600/80 to-cyan-800/90", label: "CFA" },
  reference: { icon: BookOpen, grad: "from-sage/80 to-sage-deep/90", label: "Reference" },
  arabic: { icon: Languages, grad: "from-gold/80 to-gold-deep/90", label: "بالعربية" },
  skills: { icon: PenTool, grad: "from-plum/60 to-primary/80", label: "Skills" },
}

const FREE_CATS: (FreeCourse["category"] | "all")[] = [
  "all",
  "accounting",
  "ifrs",
  "audit",
  "cfa",
  "reference",
  "arabic",
  "skills",
]

export function Courses() {
  const data = useAppStore((s) => s.data)
  const query = useAppStore((s) => s.catalogQuery)
  const setQuery = useAppStore((s) => s.setCatalogQuery)
  const navigate = useAppStore((s) => s.navigate)
  const lang = useAppStore((s) => s.lang)
  // category + query live together in the store so filters persist across navigation
  const category = useAppStore((s) => s.catalogCategory)
  const setCategory = useAppStore((s) => s.setCatalogCategory)
  const isAdmin = data?.user.role === "admin"
  // v22 — free-courses catalog section filter
  const [freeCat, setFreeCat] = useState<string>("all")
  const freeFiltered = useMemo(
    () => (freeCat === "all" ? FREE_COURSES : FREE_COURSES.filter((c) => c.category === freeCat)),
    [freeCat]
  )
  // v23 — video-course section filter + in-app player
  const [videoCat, setVideoCat] = useState<string>("all")
  const videoFiltered = useMemo(
    () => (videoCat === "all" ? VIDEO_COURSES : VIDEO_COURSES.filter((c) => c.category === videoCat)),
    [videoCat]
  )
  const [openCourse, setOpenCourse] = useState<VideoCourse | null>(null)
  const [lessonIdx, setLessonIdx] = useState(0)

  const categories = useMemo(() => {
    if (!data) return []
    const counts = new Map<string, number>()
    for (const c of data.courses) counts.set(c.category, (counts.get(c.category) ?? 0) + 1)
    return Array.from(counts.entries()).map(([id, count]) => ({ id, count }))
  }, [data])

  const courses = useMemo(() => {
    if (!data) return []
    const q = query.trim().toLowerCase()
    return data.courses.filter((c) => {
      if (category && c.category !== category) return false
      if (!q) return true
      return (
        c.title.toLowerCase().includes(q) ||
        c.subtitle.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q)
      )
    })
  }, [data, query, category])

  if (!data) return null

  return (
    <div className="space-y-6">
      <PageHeader
        title={tt("courses.title", lang)}
        sub={`${data.courses.length} ${tt("courses.subtitle", lang)}`}
        action={
          isAdmin ? (
            <Button onClick={() => navigate("studio")} variant="outline" className="h-9">
              <Plus className="me-1 h-4 w-4" /> {tt("courses.newCourse", lang)}
            </Button>
          ) : undefined
        }
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative max-w-sm flex-1">
          <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={tt("courses.searchPh", lang)}
            className="h-9 ps-9"
            aria-label={tt("courses.searchLabel", lang)}
          />
        </div>
        {categories.length > 1 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scroll-thin">
            <SlidersHorizontal className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            <button
              onClick={() => setCategory(null)}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] transition-colors focus-ring",
                !category
                  ? "border-primary/35 bg-primary/10 font-semibold text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-input hover:text-foreground"
              )}
            >
              {tt("courses.all", lang)}
              <span
                className={cn(
                  "rounded-full px-1.5 py-px text-[10px] tabular-nums",
                  !category ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"
                )}
              >
                {data.courses.length}
              </span>
            </button>
            {categories.map(({ id: c, count }) => (
              <button
                key={c}
                onClick={() => setCategory(category === c ? null : c)}
                aria-pressed={category === c}
                className={cn(
                  "flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] transition-colors focus-ring",
                  category === c
                    ? "border-primary/35 bg-primary/10 font-semibold text-primary"
                    : "border-border bg-card text-muted-foreground hover:border-input hover:text-foreground"
                )}
              >
                {arOr(COURSE_CATEGORY_AR, c, lang)}
                <span
                  className={cn(
                    "rounded-full px-1.5 py-px text-[10px] tabular-nums",
                    category === c ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"
                  )}
                >
                  {count}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* v23 — full video courses with pro thumbnails, playable in-app */}
      <section className="rounded-2xl border border-plum/25 bg-plum/[0.04] p-5 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-plum/15 text-plum-deep">
              <MonitorPlay className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-serif text-[17px] font-semibold">{tt("courses.videoTitle", lang)}</h2>
              <p className="text-[12.5px] text-muted-foreground">{tt("courses.videoDesc", lang)}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {VIDEO_CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setVideoCat(c.id)}
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[11px] transition-colors",
                  videoCat === c.id
                    ? "border-plum/40 bg-plum/15 font-medium text-plum-deep"
                    : "bg-card/60 text-muted-foreground hover:text-foreground"
                )}
              >
                {lang === "ar" ? c.labelAr : c.labelEn}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {videoFiltered.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setOpenCourse(c)
                setLessonIdx(0)
              }}
              className="group flex flex-col overflow-hidden rounded-xl border bg-card/80 text-start transition-all hover:-translate-y-0.5 hover:border-plum/40 hover:shadow-soft focus-ring"
            >
              {/* the pro thumbnail — straight from the source video */}
              <span className="relative block aspect-video w-full overflow-hidden bg-secondary">
                <img
                  src={ytThumb(c.lessons[0].id)}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-plum-deep shadow-pop">
                    <Play className="h-5 w-5 fill-current" />
                  </span>
                </span>
                <span className="absolute bottom-1.5 end-1.5 rounded bg-black/75 px-1.5 py-0.5 text-[10px] font-semibold tabular-nums text-white">
                  {c.lessons[0].length}
                </span>
                <span className="absolute start-1.5 top-1.5 flex gap-1">
                  <span className="rounded bg-black/70 px-1.5 py-0.5 text-[9.5px] font-semibold text-white">
                    {c.language === "AR" ? tt("courses.videoArabic", lang) : "English"}
                  </span>
                  {c.lessons.length > 1 && (
                    <span className="rounded bg-plum-deep/85 px-1.5 py-0.5 text-[9.5px] font-semibold text-white">
                      {c.lessons.length} {tt("courses.videoLessons", lang)}
                    </span>
                  )}
                </span>
              </span>
              <span className="flex flex-1 flex-col p-3.5">
                <span dir="auto" className="text-[13.5px] font-semibold leading-snug">
                  {lang === "ar" ? c.titleAr : c.titleEn}
                </span>
                <span className="mt-0.5 text-[11.5px] font-medium text-plum-deep">{c.channel}</span>
                <span dir="auto" className="mt-1.5 line-clamp-2 flex-1 text-[12px] leading-relaxed text-muted-foreground">
                  {lang === "ar" ? c.descAr : c.descEn}
                </span>
                <span className="mt-2.5 flex items-center justify-between gap-2 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <span className="rounded bg-secondary/70 px-1.5 py-0.5">{c.hours}</span>
                    <span className="rounded bg-secondary/70 px-1.5 py-0.5">{c.level}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-plum-deep">
                    <Eye className="h-3 w-3" /> {c.views}
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* v22 — pro free courses anyone can access (ACCA / MIT / OU / Edraak…) */}
      <section className="rounded-2xl border border-olive/25 bg-olive/[0.04] p-5 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-olive/15 text-olive-deep">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-serif text-[17px] font-semibold">{tt("courses.freeTitle", lang)}</h2>
              <p className="text-[12.5px] text-muted-foreground">{tt("courses.freeDesc", lang)}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {FREE_CATS.map((c) => (
              <button
                key={c}
                onClick={() => setFreeCat(c)}
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[11px] transition-colors",
                  freeCat === c
                    ? "border-olive/40 bg-olive/15 font-medium text-olive-deep"
                    : "bg-card/60 text-muted-foreground hover:text-foreground"
                )}
              >
                {tt(`courses.freeCat_${c}` as never, lang)}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
          {freeFiltered.map((c) => {
            const cover = FREE_COVER[c.category]
            const Icon = cover.icon
            return (
              <a
                key={c.id}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-xl border bg-card/80 transition-all hover:-translate-y-px hover:border-olive/40 hover:shadow-soft"
              >
                {/* v24 — designed pro cover (pattern + monogram + chips) */}
                <LinkCourseCover
                  icon={Icon}
                  grad={cover.grad}
                  label={cover.label}
                  provider={c.provider}
                  level={c.level}
                  language={c.language}
                  seed={c.id}
                />
                <span className="flex flex-1 flex-col p-4">
                  <span className="flex items-start justify-between gap-2">
                    <span dir="auto" className="text-[13.5px] font-semibold leading-snug">
                      {lang === "ar" ? c.titleAr : c.titleEn}
                    </span>
                    {c.certificate && (
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-1.5 py-0.5 text-[9.5px] font-semibold text-gold-deep">
                        <Award className="h-2.5 w-2.5" /> {tt("courses.freeCert", lang)}
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 text-[11.5px] font-medium text-olive-deep">{c.provider}</span>
                  <span dir="auto" className="mt-1.5 flex-1 text-[12px] leading-relaxed text-muted-foreground">
                    {lang === "ar" ? c.descAr : c.descEn}
                  </span>
                  <span className="mt-3 flex items-center justify-between gap-2 text-[11px] text-muted-foreground">
                    <span className="flex flex-wrap items-center gap-1.5">
                      <span className="rounded bg-secondary/70 px-1.5 py-0.5">{c.level}</span>
                      <span className="rounded bg-secondary/70 px-1.5 py-0.5">{c.hours}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground transition-colors group-hover:text-foreground">
                      <ExternalLink className="h-3 w-3" /> {tt("courses.freeOpen", lang)}
                    </span>
                  </span>
                </span>
              </a>
            )
          })}
        </div>
      </section>

      {courses.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed py-16 text-center">
          <p className="font-serif text-[16px] font-semibold">{tt("courses.noneFound", lang)}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {query ? tt("courses.nothingMatches", lang) : tt("courses.noneInCategory", lang)}
          </p>
          {(query || category) && (
            <Button
              variant="outline"
              className="mt-5 h-9"
              onClick={() => {
                setQuery("")
                setCategory(null)
              }}
            >
              {tt("courses.clearFilters", lang)}
            </Button>
          )}
        </div>
      )}

      {/* v23 — in-app video course player */}
      <Dialog open={!!openCourse} onOpenChange={(v) => !v && setOpenCourse(null)}>
        <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-[720px] scroll-thin">
          {openCourse && (
            <>
              <DialogHeader>
                <DialogTitle dir="auto" className="flex items-center gap-2 font-serif">
                  <Youtube className="h-4 w-4 shrink-0 text-plum-deep" />
                  <span className="truncate">{lang === "ar" ? openCourse.titleAr : openCourse.titleEn}</span>
                </DialogTitle>
                <DialogDescription dir="auto">
                  {openCourse.channel} · {openCourse.hours} · {openCourse.level} ·{" "}
                  {openCourse.language === "AR" ? tt("courses.videoArabic", lang) : "English"}
                </DialogDescription>
              </DialogHeader>
              <div className="overflow-hidden rounded-xl border bg-black">
                <div className="aspect-video w-full">
                  <iframe
                    key={openCourse.lessons[lessonIdx]?.id}
                    src={ytEmbed(openCourse.lessons[lessonIdx]?.id ?? openCourse.lessons[0].id)}
                    title={openCourse.lessons[lessonIdx]?.title ?? openCourse.titleEn}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              </div>
              <p dir="auto" className="text-[12.5px] leading-relaxed text-muted-foreground">
                {lang === "ar" ? openCourse.descAr : openCourse.descEn}
              </p>
              {openCourse.lessons.length > 1 && (
                <div className="max-h-56 space-y-1.5 overflow-y-auto pe-1 scroll-thin">
                  {openCourse.lessons.map((l, i) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => setLessonIdx(i)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-start transition-colors focus-ring",
                        i === lessonIdx
                          ? "border-plum/40 bg-plum/10"
                          : "bg-card/60 hover:border-input"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold tabular-nums",
                          i === lessonIdx ? "bg-plum-deep text-white" : "bg-secondary text-muted-foreground"
                        )}
                      >
                        {i === lessonIdx ? <Play className="h-3 w-3 fill-current" /> : i + 1}
                      </span>
                      <span dir="auto" className="min-w-0 flex-1 truncate text-[12.5px]">
                        {l.title}
                      </span>
                      <span className="shrink-0 text-[11px] tabular-nums text-muted-foreground">{l.length}</span>
                    </button>
                  ))}
                </div>
              )}
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <FileSpreadsheet className="h-3.5 w-3.5" /> {openCourse.views}
                </span>
                <a
                  href={`https://www.youtube.com/watch?v=${openCourse.lessons[lessonIdx]?.id ?? openCourse.lessons[0].id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-[12px] font-medium text-muted-foreground transition-colors hover:border-plum/40 hover:text-foreground focus-ring"
                >
                  <Youtube className="h-3.5 w-3.5 text-plum-deep" /> {tt("courses.videoOpenYt", lang)}
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
