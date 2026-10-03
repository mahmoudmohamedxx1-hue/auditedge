"use client"

import { useAppStore } from "@/store/useAppStore"
import { cn } from "@/lib/utils"
import { Wordmark } from "./shared"
import { LangToggle } from "./lang-toggle"
import { ThemeToggle } from "./theme-toggle"
import { ShareIconButton } from "./share-button"
import { tt } from "@/lib/i18n"
import {
  BarChart3,
  BookOpen,
  Briefcase,
  ClipboardCheck,
  Compass,
  Factory,
  FolderOpen,
  GraduationCap,
  Headphones,
  Layers,
  Medal,
  Moon,
  NotebookPen,
  PanelLeftClose,
  PanelLeftOpen,
  PenSquare,
  ShieldCheck,
  Sparkles,
  Home,
  Languages,
  Sun,
  Users,
  type LucideIcon,
} from "lucide-react"

function NavItem({
  icon: Icon,
  label,
  active,
  badge,
  onClick,
  collapsed = false,
}: {
  icon: LucideIcon
  label: string
  active: boolean
  badge?: string
  onClick: () => void
  collapsed?: boolean
}) {
  if (collapsed) {
    return (
      <button
        onClick={onClick}
        title={badge ? `${label} · ${badge}` : label}
        aria-label={label}
        aria-current={active ? "page" : undefined}
        className={cn(
          "relative flex h-10 w-full items-center justify-center rounded-lg transition-colors focus-ring",
          active
            ? "bg-card text-foreground shadow-soft ring-1 ring-border"
            : "text-foreground/70 hover:bg-sidebar-accent hover:text-foreground"
        )}
      >
        {active && (
          <span className="absolute start-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-e bg-primary" />
        )}
        <Icon className={cn("h-[18px] w-[18px]", active ? "text-primary" : "text-muted-foreground")} />
        {badge && (
          <span
            className="absolute end-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-primary"
            aria-hidden
          />
        )}
      </button>
    )
  }
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

/** Micro single-button toggles shown when the rail is collapsed — the pill
 *  toggles don't fit the 72px rail, so each becomes one small square button. */
function CollapsedFooterToggles() {
  const theme = useAppStore((s) => s.theme)
  const setTheme = useAppStore((s) => s.setTheme)
  const lang = useAppStore((s) => s.lang)
  const setLang = useAppStore((s) => s.setLang)
  return (
    <div className="flex items-center justify-center gap-1.5">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        title={theme === "dark" ? tt("nav.themeLight", lang) : tt("nav.themeDark", lang)}
        aria-label={theme === "dark" ? tt("nav.themeLight", lang) : tt("nav.themeDark", lang)}
        className="flex h-7 w-7 items-center justify-center rounded-md border bg-card text-muted-foreground transition-colors hover:text-foreground focus-ring"
      >
        {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
      </button>
      <button
        onClick={() => setLang(lang === "ar" ? "en" : "ar")}
        title={lang === "ar" ? "English" : "العربية"}
        aria-label={lang === "ar" ? "English" : "العربية"}
        className="flex h-7 w-7 items-center justify-center rounded-md border bg-card text-[10.5px] font-semibold text-muted-foreground transition-colors hover:text-foreground focus-ring"
      >
        {lang === "ar" ? (
          <span className="font-serif">EN</span>
        ) : (
          <Languages className="h-3.5 w-3.5" />
        )}
      </button>
    </div>
  )
}

function SidebarContent({
  onNavigate,
  collapsed = false,
  onToggleCollapse,
}: {
  onNavigate?: () => void
  /** icon-rail mode (desktop only — the mobile sheet always shows full) */
  collapsed?: boolean
  /** provided on desktop → renders the collapse/expand button */
  onToggleCollapse?: () => void
}) {
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
      {/* header: logo (click → home) + the collapse toggle (desktop only) */}
      <div
        className={cn(
          "flex shrink-0 items-center gap-1",
          collapsed ? "flex-col justify-center px-2 py-3" : "h-16 px-4 ps-5"
        )}
      >
        <button onClick={() => go("home")} className="focus-ring rounded-lg" aria-label={tt("nav.goHome", lang)}>
          <Wordmark lang={lang} compact={collapsed} />
        </button>
        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            aria-label={collapsed ? tt("nav.expandSidebar", lang) : tt("nav.collapseSidebar", lang)}
            title={collapsed ? tt("nav.expandSidebar", lang) : tt("nav.collapseSidebar", lang)}
            className={cn(
              "rounded-lg text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground focus-ring",
              collapsed ? "mt-1 p-1.5" : "ms-auto p-1.5"
            )}
          >
            {collapsed ? (
              <PanelLeftOpen className="h-[15px] w-[15px] rtl:-scale-x-100" />
            ) : (
              <PanelLeftClose className="h-[15px] w-[15px] rtl:-scale-x-100" />
            )}
          </button>
        )}
      </div>

      <nav
        className={cn(
          "flex-1 space-y-0.5 overflow-y-auto scroll-thin",
          collapsed ? "px-2.5 pb-4" : "px-3 pb-4"
        )}
        aria-label={tt("shell.navigation", lang)}
      >
        <NavItem collapsed={collapsed} icon={Home} label={tt("nav.home", lang)} active={view === "home"} onClick={() => go("home")} />
        <NavItem
          collapsed={collapsed}
          icon={Sparkles}
          label={tt("nav.aiTutor", lang)}
          active={view === "ai"}
          badge={tt("nav.free", lang)}
          onClick={() => go("ai")}
        />
        <NavItem
          collapsed={collapsed}
          icon={BookOpen}
          label={tt("nav.courses", lang)}
          active={view === "courses" || view === "course" || view === "lesson" || view === "quiz"}
          onClick={() => go("courses")}
        />
        <NavItem
          collapsed={collapsed}
          icon={GraduationCap}
          label={tt("nav20.exam", lang)}
          active={view === "exam"}
          onClick={() => go("exam")}
        />
        <NavItem
          collapsed={collapsed}
          icon={NotebookPen}
          label={tt("nav30.ifrs", lang)}
          active={view === "ifrs"}
          badge="41"
          onClick={() => go("ifrs")}
        />
        <NavItem
          collapsed={collapsed}
          icon={Layers}
          label={tt("nav20.review", lang)}
          active={view === "review"}
          badge={data?.reviewDue ? String(data.reviewDue) : undefined}
          onClick={() => go("review")}
        />
        <NavItem
          collapsed={collapsed}
          icon={Briefcase}
          label={tt("nav20.simulation", lang)}
          active={view === "simulation"}
          onClick={() => go("simulation")}
        />
        <NavItem
          collapsed={collapsed}
          icon={FolderOpen}
          label={tt("nav.library", lang)}
          active={view === "library"}
          badge={data?.materials.length ? String(data.materials.length) : undefined}
          onClick={() => go("library")}
        />
        <NavItem collapsed={collapsed} icon={ClipboardCheck} label={tt("nav.program", lang)} active={view === "program"} onClick={() => go("program")} />
        <NavItem collapsed={collapsed} icon={Factory} label={tt("nav.sectors", lang)} active={view === "sectors"} onClick={() => go("sectors")} />
        <NavItem collapsed={collapsed} icon={BarChart3} label={tt("nav20.analytics", lang)} active={view === "team"} onClick={() => go("team")} />
        <NavItem collapsed={collapsed} icon={Headphones} label={tt("nav20.podcast", lang)} active={view === "podcast"} onClick={() => go("podcast")} />
        <NavItem
          collapsed={collapsed}
          icon={Medal}
          label={tt("nav.achievements", lang)}
          active={view === "achievements" || view === "certificate"}
          onClick={() => go("achievements")}
        />

        {isAdmin && (
          <>
            {collapsed ? (
              <div className="mx-auto my-3 h-px w-6 bg-sidebar-border" />
            ) : (
              <div className="px-3 pb-1 pt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {tt("nav.studio", lang)}
              </div>
            )}
            <NavItem
              collapsed={collapsed}
              icon={PenSquare}
              label={tt("nav.courseBuilder", lang)}
              active={view === "studio" || view === "studio-course"}
              onClick={() => go("studio")}
            />
            <NavItem
              collapsed={collapsed}
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
      <div
        className={cn(
          "space-y-2 border-t border-sidebar-border",
          collapsed ? "p-2.5" : "p-3"
        )}
      >
        {collapsed ? (
          <CollapsedFooterToggles />
        ) : (
          <div className="flex items-center justify-center gap-2 px-2">
            <ThemeToggle />
            <LangToggle />
            {/* v32 — copy/share the current page's deep link */}
            <ShareIconButton />
          </div>
        )}
        <div
          className={cn(
            "flex w-full items-center rounded-lg",
            collapsed ? "justify-center p-1" : "gap-2.5 px-2 py-2"
          )}
          title={collapsed ? `${user?.name ?? ""} — ${user?.jobTitle ?? ""}` : undefined}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-[11.5px] font-semibold text-primary ring-1 ring-primary/20">
            {user?.initials}
          </span>
          {!collapsed && (
            <span className="min-w-0 flex-1 leading-tight">
              <span className="block truncate text-[13px] font-medium text-foreground">{user?.name}</span>
              <span className="block truncate text-[11px] text-muted-foreground">
                {user?.jobTitle}
              </span>
            </span>
          )}
          {isAdmin && !collapsed && (
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
  const collapsed = useAppStore((s) => s.sidebarCollapsed)
  const setSidebarCollapsed = useAppStore((s) => s.setSidebarCollapsed)
  return (
    <aside
      className={cn(
        "fixed inset-y-0 start-0 z-40 hidden border-e border-sidebar-border bg-sidebar transition-[width] duration-200 ease-out lg:block print:hidden",
        collapsed ? "w-[72px]" : "w-[248px]"
      )}
    >
      <SidebarContent collapsed={collapsed} onToggleCollapse={() => setSidebarCollapsed(!collapsed)} />
    </aside>
  )
}

export { SidebarContent }
