"use client"

import { useAppStore } from "@/store/useAppStore"
import { levelForXp, BadgeDef } from "@/lib/audit-types"
import { tt, XP_LEVEL_AR, dateLocaleOf } from "@/lib/i18n"
import { courseCpeEarned, courseLessons, courseProgress, PageHeader } from "./shared"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  Award,
  BookOpen,
  Briefcase,
  ClipboardCheck,
  Clock,
  Flame,
  GraduationCap,
  Layers,
  Medal,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react"

const BADGE_ICONS: Record<string, typeof Sparkles> = {
  sparkles: Sparkles,
  flame: Flame,
  target: Target,
  clock: Clock,
  book: BookOpen,
  award: Award,
  clipboard: ClipboardCheck,
  briefcase: Briefcase,
  trophy: Trophy,
  layers: Layers,
  graduation: GraduationCap,
}

const levelName = (name: string, lang: "en" | "ar") =>
  lang === "ar" ? (XP_LEVEL_AR[name] ?? name) : name

export function Achievements() {
  const data = useAppStore((s) => s.data)
  const navigate = useAppStore((s) => s.navigate)
  const lang = useAppStore((s) => s.lang)
  if (!data) return null

  const { user, courses, completedLessonIds, quizAttempts, certificates } = data
  const lvl = levelForXp(user.xp)
  const totalCpe = courses.reduce((s, c) => s + courseCpeEarned(completedLessonIds, c), 0)
  const nextLvl = lvl.next
  const lvlPct = nextLvl
    ? Math.round(((user.xp - lvl.current.min) / (nextLvl.min - lvl.current.min)) * 100)
    : 100

  const badges: (BadgeDef & { progress?: { value: number; max: number } })[] = [
    {
      id: "first-steps",
      name: tt("ach.badgeFirstSteps", lang),
      description: tt("ach.badgeFirstStepsD", lang),
      icon: "sparkles",
      earned: completedLessonIds.length >= 1,
      progress: { value: Math.min(completedLessonIds.length, 1), max: 1 },
    },
    {
      id: "on-fire",
      name: tt("ach.badgeOnFire", lang),
      description: tt("ach.badgeOnFireD", lang),
      icon: "flame",
      earned: user.streakDays >= 3,
      progress: { value: Math.min(user.streakDays, 3), max: 3 },
    },
    {
      id: "quiz-ace",
      name: tt("ach.badgeQuizAce", lang),
      description: tt("ach.badgeQuizAceD", lang),
      icon: "target",
      earned: quizAttempts.some((a) => a.score === 100),
    },
    {
      id: "cpe-collector",
      name: tt("ach.badgeCpeCollector", lang),
      description: tt("ach.badgeCpeCollectorD", lang),
      icon: "clock",
      earned: totalCpe >= 10,
      progress: { value: Math.round(Math.min(totalCpe, 10) * 10) / 10, max: 10 },
    },
    {
      id: "isa-scholar",
      name: tt("ach.badgeIsaScholar", lang),
      description: tt("ach.badgeIsaScholarD", lang),
      icon: "book",
      earned: courses.some((c) => c.category === "International Standards" && courseProgress(completedLessonIds, c).pct === 100),
      progress: {
        value: Math.max(
          0,
          ...courses
            .filter((c) => c.category === "International Standards" && courseLessons(c).length > 0)
            .map((c) => courseProgress(completedLessonIds, c).done),
          0
        ),
        max: Math.min(
          Math.max(
            1,
            ...courses
              .filter((c) => c.category === "International Standards")
              .map((c) => courseLessons(c).length || 1)
          ),
          999
        ),
      },
    },
    {
      id: "certified",
      name: tt("ach.badgeCertified", lang),
      description: tt("ach.badgeCertifiedD", lang),
      icon: "award",
      earned: certificates.length >= 1,
      progress: { value: Math.min(certificates.length, 1), max: 1 },
    },
    /* ---------- v20.1 — exam / simulation / review engagement badges ---------- */
    {
      id: "exam-sitter",
      name: tt("ach.badgeExamSitter", lang),
      description: tt("ach.badgeExamSitterD", lang),
      icon: "clipboard",
      earned: (data?.examCount ?? 0) >= 1,
      progress: { value: Math.min(data?.examCount ?? 0, 1), max: 1 },
    },
    {
      id: "exam-ready",
      name: tt("ach.badgeExamReady", lang),
      description: tt("ach.badgeExamReadyD", lang),
      icon: "target",
      earned: (data?.examBest ?? 0) >= 70,
      progress: { value: data?.examBest ?? 0, max: 70 },
    },
    {
      id: "sim-engagement",
      name: tt("ach.badgeSimEngagement", lang),
      description: tt("ach.badgeSimEngagementD", lang),
      icon: "briefcase",
      earned: (data?.simCompleted ?? 0) >= 1,
      progress: { value: Math.min(data?.simCompleted ?? 0, 1), max: 1 },
    },
    {
      id: "sim-partner",
      name: tt("ach.badgeSimPartner", lang),
      description: tt("ach.badgeSimPartnerD", lang),
      icon: "trophy",
      earned: (data?.simBest ?? 0) >= 80,
      progress: { value: data?.simBest ?? 0, max: 80 },
    },
    {
      id: "review-habit",
      name: tt("ach.badgeReviewHabit", lang),
      description: tt("ach.badgeReviewHabitD", lang),
      icon: "layers",
      earned: (data?.reviewGraded ?? 0) >= 25,
      progress: { value: Math.min(data?.reviewGraded ?? 0, 25), max: 25 },
    },
    {
      id: "bank-driller",
      name: tt("ach.badgeBankDriller", lang),
      description: tt("ach.badgeBankDrillerD", lang),
      icon: "graduation",
      earned: (data?.practiceAnswered ?? 0) >= 100,
      progress: { value: Math.min(data?.practiceAnswered ?? 0, 100), max: 100 },
    },
  ]

  return (
    <div className="space-y-8">
      <PageHeader title={tt("ach.title", lang)} sub={tt("ach.subtitle", lang)} />

      {/* level */}
      <section className="rounded-xl border bg-card p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <div className="font-serif text-[22px] font-semibold leading-tight">
                {levelName(lvl.current.name, lang)}
              </div>
              <div className="text-[13px] text-muted-foreground">
                {user.xp} {tt("ach.xpTotal", lang)}
                {nextLvl
                  ? ` · ${nextLvl.min - user.xp} ${tt("ach.xpTo", lang)} ${levelName(nextLvl.name, lang)}`
                  : ` · ${tt("ach.topLevel", lang)}`}
              </div>
            </div>
          </div>
          <div className="w-full max-w-xs">
            <Progress value={lvlPct} className="h-2" />
            <div className="mt-1.5 flex justify-between text-[11px] text-muted-foreground">
              <span>{levelName(lvl.current.name, lang)}</span>
              <span>{nextLvl ? levelName(nextLvl.name, lang) : tt("ach.max", lang)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* badges */}
      <section aria-label={tt("ach.badges", lang)}>
        <h2 className="font-serif text-[18px] font-semibold tracking-tight">{tt("ach.badges", lang)}</h2>
        <div className="mt-3.5 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {badges.map((b) => {
            const Icon = BADGE_ICONS[b.icon] ?? Sparkles
            const pct = b.progress ? Math.round((b.progress.value / b.progress.max) * 100) : 0
            return (
              <div
                key={b.id}
                className={cn(
                  "flex flex-col rounded-xl border p-4 text-center transition-colors",
                  b.earned
                    ? "border-gold/40 bg-gold/[0.06] shadow-soft"
                    : "border-dashed bg-card/40"
                )}
              >
                <div
                  className={cn(
                    "mx-auto flex h-11 w-11 items-center justify-center rounded-full",
                    b.earned ? "bg-gold/15 text-gold-deep" : "bg-secondary text-muted-foreground/70"
                  )}
                >
                  <Icon className={cn("h-5 w-5", !b.earned && "opacity-70")} />
                </div>
                <div className={cn("mt-2.5 text-[13.5px] font-semibold", !b.earned && "text-muted-foreground")}>
                  {b.name}
                </div>
                <div className="mt-1 flex-1 text-[11.5px] leading-relaxed text-muted-foreground">
                  {b.earned ? (
                    <span className="inline-flex items-center gap-1 font-medium text-gold-deep">
                      <Medal className="h-3 w-3" /> {tt("ach.earned", lang)}
                    </span>
                  ) : (
                    <>
                      {b.description}
                      {b.progress && b.progress.value > 0 && (
                        <span className="mt-1.5 block">
                          <Progress value={pct} className="mx-auto h-1 max-w-[110px]" />
                          <span className="mt-1 block text-[10.5px] tabular-nums">
                            {b.progress.value}/{b.progress.max}
                          </span>
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* certificates */}
      <section aria-label={tt("ach.certificates", lang)}>
        <h2 className="font-serif text-[18px] font-semibold tracking-tight">
          {tt("ach.certificates", lang)} {certificates.length > 0 && <span className="text-muted-foreground">({certificates.length})</span>}
        </h2>
        {certificates.length ? (
          <div className="mt-3.5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {certificates.map((cert) => {
              const course = courses.find((c) => c.id === cert.courseId)
              return (
                <button
                  key={cert.id}
                  onClick={() => navigate("certificate", { courseId: cert.courseId })}
                  className="group flex min-w-0 items-center gap-4 rounded-xl border bg-card p-5 text-start shadow-soft card-lift focus-ring"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold/50 bg-gold/10">
                    <Medal className="h-5 w-5 text-gold-deep" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div dir="auto" className="truncate font-serif text-[15.5px] font-semibold">
                      {course?.title ?? tt("dash.course", lang)}
                    </div>
                    <div dir="auto" className="mt-0.5 truncate text-[12px] text-muted-foreground">
                      {course?.code} · {tt("ach.issued", lang)}{" "}
                      {new Date(cert.issuedAt).toLocaleDateString(dateLocaleOf(lang), {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <div className="mt-0.5 truncate font-mono text-[10.5px] text-muted-foreground">{cert.serial}</div>
                  </div>
                  <span className="shrink-0 text-[12.5px] font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    {tt("ach.view", lang)} →
                  </span>
                </button>
              )
            })}
          </div>
        ) : (
          <div className="mt-3.5 rounded-xl border border-dashed py-12 text-center">
            <Award className="mx-auto h-7 w-7 text-muted-foreground/50" />
            <p className="mt-3 font-serif text-[15.5px] font-semibold">{tt("ach.noCertificates", lang)}</p>
            <p className="mx-auto mt-1 max-w-sm text-[13px] leading-relaxed text-muted-foreground">
              {tt("ach.certExplainer", lang)}
            </p>
            <Button variant="outline" className="mt-5" onClick={() => navigate("courses")}>
              {tt("ach.browseCourses", lang)}
            </Button>
          </div>
        )}
      </section>
    </div>
  )
}
