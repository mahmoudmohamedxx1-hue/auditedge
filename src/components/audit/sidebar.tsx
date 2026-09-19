"use client"

import { useAppStore } from "@/store/useAppStore"
import { cn } from "@/lib/utils"
import { Wordmark } from "./shared"
import { LangToggle } from "./lang-toggle"
import { ThemeToggle } from "./theme-toggle"
import { tt } from "@/lib/i18n"
import {
  BookOpen,
  ClipboardCheck,
  Compass,
  Factory,
  FolderOpen,
  Medal,
  PenSquare,
  ShieldCheck,
  Sparkles,
  Home,
  Users,
  type LucideIcon,
} from "lucide-react"

function NavItem({
  icon: Icon,
  label,
  active,
  badge,
  onClick,
}: {
  icon: LucideIcon
  label: string
  active: boolean
  badge?: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex min-h-[40px] w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13.5px] transition-colors focus-ring",
        active
          ? "bg-card font-medium text-foreground shadow-soft ring-1 ring-border"
          : "text-foreground/70 hover:bg-sidebar-accent hover:text-foreground"
      )}
      aria-current={active ? "page" : undefined}
    >
      <Icon className={cn("h-4 w-4 shrink-0", active ? "text-primary" : "text-muted-foreground")} />
      <span className="truncate">{label}</span>
      {badge && (
        <span
          className={cn(
            "ms-auto rounded-full px-1.5 py-0.5 text-[10px] font-medium",
            badge === tt("nav.free", "en") || badge === tt("nav.free", "ar")
              ? "border border-primary/30 text-primary/90" // marketing tag — quiet outline
              : "bg-primary/10 text-primary" // real count — filled tint
          )}
        >
          {badge}
        </span>
      )}
    </button>
  )
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const view = useAppStore((s) => s.view)
  const data = useAppStore((s) => s.data)
  const navigate = useAppStore((s) => s.navigate)
  const lang = useAppStore((s) => s.lang)
  const user = data?.user
  const isAdmin = user?.role === "admin"

  const go = (v: Parameters<typeof navigate>[0]) => {
    navigate(v)
    onNavigate?.()
  }

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex h-16 items-center px-5">
        <button onClick={() => go("home")} className="focus-ring rounded-lg" aria-label={tt("nav.goHome", lang)}>
          <Wordmark lang={lang} />
        </button>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 pb-4 scroll-thin" aria-label={tt("shell.navigation", lang)}>
        <NavItem icon={Home} label={tt("nav.home", lang)} active={view === "home"} onClick={() => go("home")} />
        <NavItem
          icon={Sparkles}
          label={tt("nav.aiTutor", lang)}
          active={view === "ai"}
          badge={tt("nav.free", lang)}
          onClick={() => go("ai")}
        />
        <NavItem
          icon={BookOpen}
          label={tt("nav.courses", lang)}
          active={view === "courses" || view === "course" || view === "lesson" || view === "quiz"}
          onClick={() => go("courses")}
        />
        <NavItem
          icon={FolderOpen}
          label={tt("nav.library", lang)}
          active={view === "library"}
          badge={data?.materials.length ? String(data.materials.length) : undefined}
          onClick={() => go("library")}
        />
        <NavItem icon={ClipboardCheck} label={tt("nav.program", lang)} active={view === "program"} onClick={() => go("program")} />
        <NavItem icon={Factory} label={tt("nav.sectors", lang)} active={view === "sectors"} onClick={() => go("sectors")} />
        <NavItem icon={Users} label={tt("nav.team", lang)} active={view === "team"} onClick={() => go("team")} />
        <NavItem
          icon={Medal}
          label={tt("nav.achievements", lang)}
          active={view === "achievements" || view === "certificate"}
          onClick={() => go("achievements")}
        />

        {isAdmin && (
          <>
            <div className="px-3 pb-1 pt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {tt("nav.studio", lang)}
            </div>
            <NavItem
              icon={PenSquare}
              label={tt("nav.courseBuilder", lang)}
              active={view === "studio" || view === "studio-course"}
              onClick={() => go("studio")}
            />
            <NavItem
              icon={Compass}
              label={tt("nav.discover", lang)}
              badge={tt("nav.free", lang)}
              active={view === "discover"}
              onClick={() => go("discover")}
            />
          </>
        )}
      </nav>

      {/* language + theme toggles, current user (single-member workspace) */}
      <div className="space-y-2 border-t border-sidebar-border p-3">
        <div className="flex items-center justify-center gap-2 px-2">
          <ThemeToggle />
          <LangToggle />
        </div>
        <div className="flex w-full items-center gap-2.5 rounded-lg px-2 py-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-[11.5px] font-semibold text-primary ring-1 ring-primary/20">
            {user?.initials}
          </span>
          <span className="min-w-0 flex-1 leading-tight">
            <span className="block truncate text-[13px] font-medium text-foreground">{user?.name}</span>
            <span className="block truncate text-[11px] text-muted-foreground">
              {user?.jobTitle}
            </span>
          </span>
          {isAdmin && (
            <ShieldCheck
              className="h-3.5 w-3.5 shrink-0 text-primary"
              aria-label={tt("nav.adminBadge", lang)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 start-0 z-40 hidden w-[248px] border-e border-sidebar-border lg:block print:hidden">
      <SidebarContent />
    </aside>
  )
}

export { SidebarContent }
