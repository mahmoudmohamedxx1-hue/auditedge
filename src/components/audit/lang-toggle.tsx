"use client"

import { useAppStore } from "@/store/useAppStore"
import { cn } from "@/lib/utils"
import type { Lang } from "@/lib/i18n"

/**
 * The site-wide EN / عربي toggle. One control, one store field — every view,
 * the Audit Program included, follows it. Shown in the sidebar footer
 * (desktop), the mobile top bar and the Audit Program header.
 */
export function LangToggle({ compact = false }: { compact?: boolean }) {
  const lang = useAppStore((s) => s.lang)
  const setLang = useAppStore((s) => s.setLang)

  const btn = (l: Lang, label: string) => (
    <button
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      className={cn(
        "flex-1 rounded-md px-2 py-1 text-[11.5px] font-medium transition-colors focus-ring",
        lang === l
          ? "bg-primary text-primary-foreground shadow-soft"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
    </button>
  )

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-lg border bg-card p-0.5",
        compact ? "w-[104px]" : "w-[124px]"
      )}
      role="group"
      aria-label="Language / اللغة"
    >
      {btn("en", "English")}
      {btn("ar", "عربي")}
    </div>
  )
}
