"use client"

import { useAppStore } from "@/store/useAppStore"
import { cn } from "@/lib/utils"
import { Moon, Sun } from "lucide-react"
import { tt } from "@/lib/i18n"

/**
 * The site-wide light/dark theme toggle — a compact icon pill that matches
 * the LangToggle. Drives the `dark` class on <html> (see globals.css palette)
 * and persists the choice under "auditedge-theme".
 */
export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const theme = useAppStore((s) => s.theme)
  const setTheme = useAppStore((s) => s.setTheme)
  const lang = useAppStore((s) => s.lang)

  const btn = (mode: "light" | "dark", label: string, Icon: typeof Sun) => (
    <button
      onClick={() => setTheme(mode)}
      aria-pressed={theme === mode}
      aria-label={label}
      title={label}
      className={cn(
        "flex flex-1 items-center justify-center rounded-md py-1 transition-colors focus-ring",
        compact ? "px-1.5" : "px-2",
        theme === mode
          ? "bg-primary text-primary-foreground shadow-soft"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      <Icon className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
    </button>
  )

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-lg border bg-card p-0.5",
        compact ? "w-[64px]" : "w-[76px]"
      )}
      role="group"
      aria-label={tt("nav.theme", lang)}
    >
      {btn("light", tt("nav.themeLight", lang), Sun)}
      {btn("dark", tt("nav.themeDark", lang), Moon)}
    </div>
  )
}
