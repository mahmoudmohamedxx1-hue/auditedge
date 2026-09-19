"use client"

import { useMemo, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { CourseCard, PageHeader } from "./shared"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { tt, arOr, COURSE_CATEGORY_AR } from "@/lib/i18n"
import { Plus, Search, SlidersHorizontal } from "lucide-react"

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
    </div>
  )
}
