"use client"

import { useEffect, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { Sidebar, SidebarContent } from "@/components/audit/sidebar"
import { Dashboard } from "@/components/audit/dashboard"
import { Courses } from "@/components/audit/courses"
import { CourseDetail } from "@/components/audit/course-detail"
import { LessonPlayer } from "@/components/audit/lesson-player"
import { QuizPlayer } from "@/components/audit/quiz-player"
import { Library } from "@/components/audit/library"
import { AuditProgram } from "@/components/audit/program"
import { SectorLibrary } from "@/components/audit/sectors"
import { Team } from "@/components/audit/team"
import { Achievements } from "@/components/audit/achievements"
import { CertificateView } from "@/components/audit/certificate-view"
import { Studio } from "@/components/audit/studio"
import { CourseBuilder } from "@/components/audit/course-builder"
import { Discover } from "@/components/audit/discover"
import { AiTutor } from "@/components/audit/ai-tutor"
import { AiAssistant } from "@/components/audit/ai-assistant"
import { Wordmark } from "@/components/audit/shared"
import { LangToggle } from "@/components/audit/lang-toggle"
import { ThemeToggle } from "@/components/audit/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Menu } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { tt } from "@/lib/i18n"

/** Shown only if the workspace data could not be loaded (e.g. server down). */
function RetryScreen() {
  const checkAuth = useAppStore((s) => s.checkAuth)
  const lang = useAppStore((s) => s.lang)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center">
      <Wordmark />
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
        {tt("shell.retryTitle", lang)}
      </p>
      <Button onClick={() => void checkAuth()} className="h-10">
        {tt("shell.retry", lang)}
      </Button>
    </div>
  )
}

function LoadingScreen() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-40" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
      <Skeleton className="mt-10 h-40 rounded-2xl" />
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-24 rounded-xl" />
        ))}
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-56 rounded-xl" />
        ))}
      </div>
    </div>
  )
}

/** Nav-style title for the current view — shown in the mobile top bar. */
function viewTitleOf(view: string, lang: "en" | "ar"): string {
  switch (view) {
    case "home":
      return tt("nav.home", lang)
    case "ai":
      return tt("nav.aiTutor", lang)
    case "courses":
    case "course":
    case "lesson":
    case "quiz":
      return tt("nav.courses", lang)
    case "library":
      return tt("nav.library", lang)
    case "program":
      return tt("nav.program", lang)
    case "sectors":
      return tt("nav.sectors", lang)
    case "team":
      return tt("nav.team", lang)
    case "achievements":
    case "certificate":
      return tt("nav.achievements", lang)
    case "studio":
    case "studio-course":
      return tt("nav.studio", lang)
    case "discover":
      return tt("nav.discover", lang)
    default:
      return tt("nav.home", lang)
  }
}

export default function Home() {
  const view = useAppStore((s) => s.view)
  const loading = useAppStore((s) => s.loading)
  const data = useAppStore((s) => s.data)
  const authChecked = useAppStore((s) => s.authChecked)
  const checkAuth = useAppStore((s) => s.checkAuth)
  const selectedCourseId = useAppStore((s) => s.selectedCourseId)
  const lang = useAppStore((s) => s.lang)
  const hydrateLang = useAppStore((s) => s.hydrateLang)
  const hydrateTheme = useAppStore((s) => s.hydrateTheme)
  const hydrateAiModel = useAppStore((s) => s.hydrateAiModel)
  const hydrateTtsPrefs = useAppStore((s) => s.hydrateTtsPrefs)
  const navigate = useAppStore((s) => s.navigate)
  const [menuOpen, setMenuOpen] = useState(false)
  const rtl = lang === "ar"

  useEffect(() => {
    hydrateLang()
    hydrateTheme()
    hydrateAiModel()
    hydrateTtsPrefs()
  }, [hydrateLang, hydrateTheme, hydrateAiModel, hydrateTtsPrefs])

  useEffect(() => {
    void checkAuth()
  }, [checkAuth])

  // single-user workspace: loading → app; only a server failure reaches the retry screen
  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        {authChecked && !loading ? <RetryScreen /> : <LoadingScreen />}
      </div>
    )
  }

  const isAiView = view === "ai"

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* mobile top bar */}
      <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/90 px-4 backdrop-blur lg:hidden print:hidden">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-secondary focus-ring"
              aria-label={tt("nav.openMenu", lang)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side={rtl ? "right" : "left"} className="w-[260px] border-sidebar-border bg-sidebar p-0">
            <SheetTitle className="sr-only">{tt("shell.navigation", lang)}</SheetTitle>
            <SheetDescription className="sr-only">{tt("shell.navDesc", lang)}</SheetDescription>
            <SidebarContent onNavigate={() => setMenuOpen(false)} />
          </SheetContent>
        </Sheet>
        <button onClick={() => navigate("home")} aria-label={tt("nav.goHome", lang)}>
          <Wordmark compact />
        </button>
        {/* current view label — orientation on small screens */}
        <span
          dir="auto"
          className="min-w-0 truncate border-s border-border ps-3 text-[13.5px] font-medium text-foreground/80"
        >
          {viewTitleOf(view, lang)}
        </span>
        <div className="ms-auto flex items-center gap-1.5">
          <ThemeToggle compact />
          <LangToggle compact />
        </div>
      </header>

      <main className="lg:ps-[248px] print:ps-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={view + (selectedCourseId ?? "")}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              // The AI tutor is a true full page: it fills the whole viewport
              // (minus the mobile top bar) with no width cap — the chat IS the page.
              isAiView
                ? "flex h-[calc(100dvh-3.5rem)] min-h-0 flex-col lg:h-dvh"
                : "mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10"
            )}
          >
            {loading ? (
              <LoadingScreen />
            ) : (
              <>
                {view === "home" && <Dashboard />}
                {view === "ai" && <AiTutor />}
                {view === "courses" && <Courses />}
                {view === "course" && <CourseDetail />}
                {view === "lesson" && <LessonPlayer />}
                {view === "quiz" && <QuizPlayer />}
                {view === "library" && <Library />}
                {view === "program" && <AuditProgram />}
                {view === "sectors" && <SectorLibrary />}
                {view === "team" && <Team />}
                {view === "achievements" && <Achievements />}
                {view === "certificate" && <CertificateView />}
                {view === "studio" && <Studio />}
                {view === "studio-course" && <CourseBuilder />}
                {view === "discover" && <Discover />}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* floating AI tutor popup (everywhere except the full AI tab) */}
      <AiAssistant />
    </div>
  )
}
