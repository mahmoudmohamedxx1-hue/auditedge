"use client"

import { Course, Lesson } from "@/lib/audit-types"
import { cn } from "@/lib/utils"
import { tt, arOr, COURSE_LEVEL_AR } from "@/lib/i18n"
import {
  BookOpenCheck,
  Crown,
  Crosshair,
  FileQuestion,
  FolderSearch,
  Landmark,
  Layers,
  LineChart,
  PlayCircle,
  Rocket,
  Scale,
  ShieldAlert,
  Sprout,
  Star,
  ArrowUpRight,
  Clock,
  Users,
  FileText,
  type LucideIcon,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useAppStore } from "@/store/useAppStore"

export const COURSE_ICONS: Record<string, LucideIcon> = {
  crosshair: Crosshair,
  layers: Layers,
  scale: Scale,
  landmark: Landmark,
  "folder-search": FolderSearch,
  "shield-alert": ShieldAlert,
  "book-open-check": BookOpenCheck,
  "line-chart": LineChart,
  sprout: Sprout,
  rocket: Rocket,
  crown: Crown,
  "play-circle": PlayCircle,
}

export const PLATFORM_BADGES: Record<string, { label: string; className: string }> = {
  youtube: {
    label: "YouTube",
    className:
      "border-primary/25 bg-primary/[0.07] text-primary dark:border-primary/45 dark:bg-primary/15",
  },
  coursera: {
    label: "Coursera",
    className:
      "border-sage/30 bg-sage/[0.08] text-sage-deep dark:border-sage/45 dark:bg-sage/20",
  },
  edx: {
    label: "edX",
    className:
      "border-plum/30 bg-plum/[0.08] text-plum-deep dark:border-plum/45 dark:bg-plum/20",
  },
  "mit-ocw": {
    label: "MIT OCW",
    className:
      "border-olive/30 bg-olive/[0.08] text-olive-deep dark:border-olive/45 dark:bg-olive/20",
  },
  openstax: {
    label: "OpenStax",
    className:
      "border-gold/35 bg-gold/[0.12] text-gold-deep dark:border-gold/50 dark:bg-gold/20",
  },
}

export const ACCENTS: Record<
  string,
  { chip: string; icon: string; bar: string; text: string }
> = {
  // chips/icons carry dark: bumps — low opacity tints vanish on dark surfaces
  terracotta: {
    chip: "bg-primary/10 text-primary border-primary/20 dark:bg-primary/20 dark:border-primary/40",
    icon: "bg-primary/10 text-primary dark:bg-primary/20",
    bar: "bg-primary",
    text: "text-primary",
  },
  olive: {
    chip: "bg-olive/12 text-olive-deep border-olive/25 dark:bg-olive/20 dark:border-olive/45",
    icon: "bg-olive/12 text-olive-deep dark:bg-olive/20",
    bar: "bg-olive",
    text: "text-olive-deep",
  },
  sage: {
    chip: "bg-sage/12 text-sage-deep border-sage/25 dark:bg-sage/20 dark:border-sage/45",
    icon: "bg-sage/12 text-sage dark:bg-sage/20",
    bar: "bg-sage",
    text: "text-sage-deep",
  },
  plum: {
    chip: "bg-plum/12 text-plum-deep border-plum/25 dark:bg-plum/20 dark:border-plum/45",
    icon: "bg-plum/12 text-plum-deep dark:bg-plum/20",
    bar: "bg-plum",
    text: "text-plum-deep",
  },
  sand: {
    chip: "bg-gold/15 text-gold-deep border-gold/30 dark:bg-gold/20 dark:border-gold/45",
    icon: "bg-gold/15 text-gold-deep dark:bg-gold/20",
    bar: "bg-gold",
    text: "text-gold-deep",
  },
  clay: {
    chip: "bg-clay/12 text-clay-deep border-clay/25 dark:bg-clay/20 dark:border-clay/45",
    icon: "bg-clay/12 text-clay-deep dark:bg-clay/20",
    bar: "bg-clay",
    text: "text-clay-deep",
  },
  // legacy keys map gracefully
  emerald: {
    chip: "bg-sage/12 text-sage-deep border-sage/25 dark:bg-sage/20 dark:border-sage/45",
    icon: "bg-sage/12 text-sage dark:bg-sage/20",
    bar: "bg-sage",
    text: "text-sage-deep",
  },
  gold: {
    chip: "bg-gold/15 text-gold-deep border-gold/30 dark:bg-gold/20 dark:border-gold/45",
    icon: "bg-gold/15 text-gold-deep dark:bg-gold/20",
    bar: "bg-gold",
    text: "text-gold-deep",
  },
}

export function accentOf(a: string) {
  return ACCENTS[a] ?? ACCENTS.terracotta
}

export function courseLessons(course: Course): Lesson[] {
  return course.modules.flatMap((m) => m.lessons)
}

export function courseProgress(completed: string[], course: Course) {
  const lessons = courseLessons(course)
  const done = lessons.filter((l) => completed.includes(l.id)).length
  const pct = lessons.length ? Math.round((done / lessons.length) * 100) : 0
  return { done, total: lessons.length, pct }
}

export function courseCpeEarned(completed: string[], course: Course) {
  const lessons = courseLessons(course)
  if (!lessons.length) return 0
  const done = lessons.filter((l) => completed.includes(l.id)).length
  return (done / lessons.length) * course.cpeHours
}

export function fileIconFor(mimeType: string): LucideIcon {
  if (mimeType.includes("pdf")) return FileText
  if (mimeType.includes("image")) return FileText
  if (mimeType.includes("video")) return FileText
  if (mimeType.includes("sheet") || mimeType.includes("excel") || mimeType.includes("csv"))
    return Layers
  return FileText
}

export function CourseCard({ course, compact = false }: { course: Course; compact?: boolean }) {
  const navigate = useAppStore((s) => s.navigate)
  const data = useAppStore((s) => s.data)
  const lang = useAppStore((s) => s.lang)
  const accent = accentOf(course.accent)
  const Icon = COURSE_ICONS[course.icon] ?? BookOpenCheck
  const enrolled = data?.enrollments.some((e) => e.courseId === course.id)
  const prog = data ? courseProgress(data.completedLessonIds, course) : null
  const lessons = courseLessons(course).length

  return (
    <button
      onClick={() => navigate("course", { courseId: course.id })}
      className={cn(
        "group relative flex w-full flex-col rounded-xl border bg-card p-5 text-start shadow-soft card-lift focus-ring",
        !course.published && "opacity-90"
      )}
      aria-label={`${tt("card.openCourse", lang)} ${course.title}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", accent.icon)}>
          <Icon className="h-[18px] w-[18px]" />
        </div>
        <div className="flex items-center gap-1.5">
          {!course.published && (
            <Badge variant="outline" className="border-dashed text-[10px] text-muted-foreground">
              Draft
            </Badge>
          )}
          {course.featured && course.published && (
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          )}
          <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 transition-all group-hover:text-primary group-hover:opacity-100 rtl:rotate-180" />
        </div>
      </div>

      <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
        <Badge variant="outline" className={cn("font-mono text-[10px] tracking-wide", accent.chip)}>
          {course.code}
        </Badge>
        <Badge variant="outline" className="text-[10px] font-normal text-muted-foreground">
          {arOr(COURSE_LEVEL_AR, course.level, lang)}
        </Badge>
        {course.sourcePlatform && PLATFORM_BADGES[course.sourcePlatform] && (
          <Badge
            variant="outline"
            className={cn("text-[10px] font-normal", PLATFORM_BADGES[course.sourcePlatform].className)}
          >
            {PLATFORM_BADGES[course.sourcePlatform].label}
          </Badge>
        )}
        {course.supplementary && (
          <Badge variant="outline" className="border-dashed text-[10px] font-normal text-muted-foreground">
            {tt("misc20.supplementary", lang)}
          </Badge>
        )}
        {(() => {
          // assessment badge (v20 quick win): how many quizzes this course carries
          const quizzes = course.modules
            .flatMap((m) => m.lessons)
            .filter((l) => l.type === "quiz" || l.quiz).length
          if (!quizzes) return null
          return (
            <Badge variant="outline" className="border-sage/40 text-[10px] font-normal text-sage-deep">
              <FileQuestion className="me-1 h-3 w-3" />
              {quizzes} {quizzes === 1 ? tt("misc20.quizCount", lang) : tt("misc20.quizCountPlural", lang)}
            </Badge>
          )
        })()}
      </div>

      <h3
        dir="auto"
        className="mt-2.5 line-clamp-2 font-serif text-[17px] font-semibold leading-snug text-foreground"
      >
        {course.title}
      </h3>
      {!compact && (
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
          {course.subtitle}
        </p>
      )}

      <div className="mt-auto flex items-center gap-3.5 pt-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <BookOpenCheck className="h-3.5 w-3.5" /> {lessons}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" /> {course.cpeHours} CPE
        </span>
        {course.enrolledCount > 0 && (
          <span className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" /> {course.enrolledCount}
          </span>
        )}
      </div>

      {enrolled && prog ? (
        <div className="mt-3.5">
          <div className="mb-1.5 flex justify-between text-[11px] text-muted-foreground">
            <span>{prog.pct === 100 ? tt("card.completed", lang) : tt("card.inProgress", lang)}</span>
            <span className="font-medium text-foreground">{prog.pct}%</span>
          </div>
          <Progress value={prog.pct} className="h-1.5" />
        </div>
      ) : (
        <div className="mt-3.5 text-[13px] font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          {tt("card.viewCourse", lang)} <span className="rtl:rotate-180 inline-block">→</span>
        </div>
      )}
    </button>
  )
}

export function PageHeader({
  title,
  sub,
  action,
}: {
  title: string
  sub?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-serif text-[26px] font-semibold leading-tight tracking-tight text-foreground sm:text-[30px]">
          {title}
        </h1>
        {sub && <p className="mt-1.5 text-sm text-muted-foreground">{sub}</p>}
      </div>
      {action && <div className="flex items-center gap-2.5">{action}</div>}
    </div>
  )
}

export function CertificateSeal({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/60 bg-gold/10",
        className
      )}
    >
      <Star className="h-6 w-6 fill-gold text-gold" />
    </div>
  )
}

export function Wordmark({
  compact = false,
  lang = "en",
}: {
  compact?: boolean
  lang?: "en" | "ar"
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
          <path d="M12 22V12M4 7l8 5 8-5" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="font-serif text-[15px] font-semibold tracking-tight text-foreground">
            AuditEdge
          </span>
          <span className="block text-[9px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
            {lang === "ar" ? "مساحة العمل" : "Workspace"}
          </span>
        </span>
      )}
    </span>
  )
}
