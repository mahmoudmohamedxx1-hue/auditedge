"use client"

import { useEffect, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { tt } from "@/lib/i18n"
import type { ViewName } from "@/lib/audit-types"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  BookOpen,
  Briefcase,
  ClipboardCheck,
  Compass,
  Factory,
  FolderOpen,
  Headphones,
  Home,
  Layers,
  Medal,
  PenSquare,
  Search,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react"

type Entry = {
  id: string
  group: "views" | "courses" | "lessons" | "standards" | "conversations"
  label: string
  hint?: string
  icon: LucideIcon
  action: () => void
}

/** Global command palette (P2-12) — Ctrl/Cmd+K from anywhere. */
export function CommandPalette() {
  const open = useAppStore((s) => s.paletteOpen)
  const setOpen = useAppStore((s) => s.setPaletteOpen)
  const data = useAppStore((s) => s.data)
  const navigate = useAppStore((s) => s.navigate)
  const setCatalogQuery = useAppStore((s) => s.setCatalogQuery)
  const setLibraryPresetQuery = useAppStore((s) => s.setLibraryPresetQuery)
  const lang = useAppStore((s) => s.lang)
  const setLang = useAppStore((s) => s.setLang)
  const [query, setQuery] = useState("")
  const [cursor, setCursor] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  // global hotkey
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        // toggle through the store directly — safe from any render context
        useAppStore.setState({ paletteOpen: !useAppStore.getState().paletteOpen })
      }
      if (e.key === "Escape") useAppStore.setState({ paletteOpen: false })
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // reset the palette whenever it opens — derived-state-during-render (the
  // React-blessed alternative to resetting inside an effect)
  const [prevOpen, setPrevOpen] = useState(false)
  if (open && !prevOpen) {
    setPrevOpen(true)
    setQuery("")
    setCursor(0)
  } else if (!open && prevOpen) {
    setPrevOpen(false)
  }
  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => inputRef.current?.focus(), 30)
    return () => clearTimeout(t)
  }, [open])

  const go = (v: ViewName) => {
    navigate(v)
    setOpen(false)
  }

  if (!open) return null

  // computed on open only (the component renders null while closed) — plain
  // code, no memo: the react-compiler cannot preserve the original useMemo
  const entries: Entry[] = (() => {
    const list: Entry[] = []
    const navViews: { v: ViewName; label: string; icon: LucideIcon }[] = [
      { v: "home", label: tt("nav.home", lang), icon: Home },
      { v: "ai", label: tt("nav.aiTutor", lang), icon: Sparkles },
      { v: "exam", label: tt("nav20.exam", lang), icon: ClipboardCheck },
      { v: "review", label: tt("nav20.review", lang), icon: Layers },
      { v: "simulation", label: tt("nav20.simulation", lang), icon: Briefcase },
      { v: "courses", label: tt("nav.courses", lang), icon: BookOpen },
      { v: "podcast", label: tt("nav20.podcast", lang), icon: Headphones },
      { v: "library", label: tt("nav.library", lang), icon: FolderOpen },
      { v: "program", label: tt("nav.program", lang), icon: PenSquare },
      { v: "sectors", label: tt("nav.sectors", lang), icon: Factory },
      { v: "team", label: tt("nav20.analytics", lang), icon: BarChart3 },
      { v: "achievements", label: tt("nav.achievements", lang), icon: Medal },
      { v: "discover", label: tt("nav.discover", lang), icon: Compass },
      { v: "studio", label: tt("nav.studio", lang), icon: Users },
    ]
    for (const nv of navViews) {
      list.push({
        id: `view-${nv.v}`,
        group: "views",
        label: nv.label,
        icon: nv.icon,
        action: () => go(nv.v),
      })
    }
    list.push({
      id: "action-lang",
      group: "views",
      label: lang === "en" ? "العربية" : "English",
      hint: lang === "en" ? "Switch language" : "تغيير اللغة",
      icon: Search,
      action: () => {
        setLang(lang === "ar" ? "en" : "ar")
        setOpen(false)
      },
    })
    for (const c of data?.courses ?? []) {
      list.push({
        id: `course-${c.id}`,
        group: "courses",
        label: `${c.code} — ${c.title}`,
        hint: c.category,
        icon: BookOpen,
        action: () => go("courses"),
      })
      for (const m of c.modules) {
        for (const l of m.lessons) {
          list.push({
            id: `lesson-${l.id}`,
            group: "lessons",
            label: l.title,
            hint: `${c.code} · ${l.durationMin} min`,
            icon: BookOpen,
            action: () => {
              navigate(l.type === "quiz" ? "quiz" : "lesson", { courseId: c.id, lessonId: l.id })
              setOpen(false)
            },
          })
        }
      }
    }
    for (const mat of data?.materials ?? []) {
      list.push({
        id: `mat-${mat.id}`,
        group: "standards",
        label: mat.title,
        hint: mat.category,
        icon: FolderOpen,
        action: () => {
          setLibraryPresetQuery(mat.title.slice(0, 40))
          go("library")
        },
      })
    }
    return list
  })()

  const filtered: Entry[] = (() => {
    const q = query.trim().toLowerCase()
    if (!q) return entries.filter((e) => e.group === "views")
    return entries
      .filter((e) => e.label.toLowerCase().includes(q) || e.hint?.toLowerCase().includes(q))
      .slice(0, 30)
  })()

  const grouped: [string, Entry[]][] = (() => {
    const g = new Map<string, Entry[]>()
    for (const e of filtered) {
      const list = g.get(e.group) ?? []
      list.push(e)
      g.set(e.group, list)
    }
    return [...g.entries()]
  })()

  const runAt = (idx: number) => {
    const e = filtered[idx]
    if (e) e.action()
  }

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center bg-background/60 pt-[12vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={tt("palette.open", lang)}
    >
      <div
        className="mx-4 w-full max-w-xl overflow-hidden rounded-2xl border bg-card shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2.5 border-b px-4">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            ref={inputRef}
            value={query}
            dir="auto"
            onChange={(e) => {
              setQuery(e.target.value)
              setCursor(0)
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault()
                setCursor((c) => Math.min(c + 1, filtered.length - 1))
              } else if (e.key === "ArrowUp") {
                e.preventDefault()
                setCursor((c) => Math.max(c - 1, 0))
              } else if (e.key === "Enter") {
                e.preventDefault()
                runAt(cursor)
              }
            }}
            placeholder={tt("palette.placeholder", lang)}
            className="h-12 w-full bg-transparent text-[14.5px] outline-none placeholder:text-muted-foreground"
          />
          <kbd className="rounded border bg-secondary px-1.5 py-0.5 text-[10.5px] text-muted-foreground">Esc</kbd>
        </div>

        <div className="max-h-[52vh] overflow-y-auto scroll-thin p-2">
          {grouped.length === 0 ? (
            <p className="px-4 py-8 text-center text-[13px] text-muted-foreground">{tt("palette.noResults", lang)}</p>
          ) : (
            grouped.map(([group, items]) => {
              // biome-ignore lint: label lookup
              const groupLabel = tt(`palette.${group === "views" ? "views" : group}`, lang)
              return (
                <div key={group} className="mb-1.5">
                  <p className="px-3 pb-1 pt-2 text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {groupLabel}
                  </p>
                  {items.map((e) => {
                    const idx = filtered.indexOf(e)
                    const active = idx === cursor
                    return (
                      <button
                        key={e.id}
                        onClick={() => runAt(idx)}
                        onMouseEnter={() => setCursor(idx)}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-start transition-colors",
                          active ? "bg-primary/10" : "hover:bg-secondary/60"
                        )}
                      >
                        <e.icon className={cn("h-4 w-4 shrink-0", active ? "text-primary" : "text-muted-foreground")} />
                        <span dir="auto" className="min-w-0 flex-1 truncate text-[13.5px]">
                          {e.label}
                        </span>
                        {e.hint && (
                          <span dir="auto" className="shrink-0 text-[11.5px] text-muted-foreground">
                            {e.hint}
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              )
            })
          )}
        </div>

        <div className="border-t px-4 py-2 text-[11px] text-muted-foreground">
          ↹ {tt("palette.hint", lang)}
        </div>
      </div>
    </div>
  )
}
