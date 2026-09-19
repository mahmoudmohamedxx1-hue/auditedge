"use client"

import { useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { PageHeader, PLATFORM_BADGES } from "./shared"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { tt } from "@/lib/i18n"
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle2,
  Globe,
  Loader2,
  PlayCircle,
  Plus,
  Search,
  Youtube,
} from "lucide-react"

type DiscoveredCourse = {
  platform: string
  title: string
  url: string
  snippet: string
  meta: string
}

const PLATFORM_ICONS: Record<string, typeof Globe> = {
  coursera: BookOpenCheck,
  edx: Globe,
  "mit-ocw": BookOpenCheck,
  openstax: BookOpenCheck,
  youtube: Youtube,
}

const SUGGESTIONS = [
  "auditing",
  "IFRS",
  "financial accounting",
  "internal audit",
  "معايير المراجعة",
  "IFRS بالعربي",
  "forensic accounting",
]

export function Discover() {
  const data = useAppStore((s) => s.data)
  const navigate = useAppStore((s) => s.navigate)
  const bootstrap = useAppStore((s) => s.bootstrap)
  const lang = useAppStore((s) => s.lang)

  const [query, setQuery] = useState("")
  const [searching, setSearching] = useState(false)
  const [searched, setSearched] = useState(false)
  const [results, setResults] = useState<DiscoveredCourse[]>([])
  const [importingUrl, setImportingUrl] = useState<string | null>(null)
  const [importedUrls, setImportedUrls] = useState<Record<string, string>>({})

  const [playlistUrl, setPlaylistUrl] = useState("")
  const [playlistCategory, setPlaylistCategory] = useState("Open Courses")
  const [maxVideos, setMaxVideos] = useState(60)
  const [importingPlaylist, setImportingPlaylist] = useState(false)

  if (!data) return null
  const isAdmin = data.user.role === "admin"

  if (!isAdmin) {
    return (
      <div className="rounded-xl border border-dashed py-16 text-center">
        <h1 className="font-serif text-[20px] font-semibold">{tt("discover.adminOnly", lang)}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{tt("discover.adminOnlySub", lang)}</p>
        <Button className="mt-6" onClick={() => navigate("courses")}>
          {tt("discover.browseCourses", lang)}
        </Button>
      </div>
    )
  }

  const search = async (q?: string) => {
    const term = (q ?? query).trim()
    if (!term || searching) return
    if (q) setQuery(q)
    setSearching(true)
    setSearched(true)
    try {
      const res = await fetch(`/api/discover?q=${encodeURIComponent(term)}`)
      if (!res.ok) throw new Error("search failed")
      const json = (await res.json()) as { results: DiscoveredCourse[] }
      setResults(json.results ?? [])
    } catch {
      toast.error(tt("discover.searchFailed", lang), { description: tt("discover.tryAgain", lang) })
      setResults([])
    } finally {
      setSearching(false)
    }
  }

  const importCourse = async (item: DiscoveredCourse) => {
    if (importingUrl) return
    setImportingUrl(item.url)
    try {
      const res = await fetch("/api/discover", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "import", item }),
      })
      const json = await res.json()
      if (!res.ok) {
        toast.error(json.error ?? tt("discover.couldNotImport", lang))
        return
      }
      setImportedUrls((prev) => ({ ...prev, [item.url]: json.courseId }))
      await bootstrap()
      toast.success(tt("discover.courseImported", lang), {
        description: `${json.title} ${tt("discover.nowInCatalog", lang)}`,
        action: {
          label: tt("discover.openWord", lang),
          onClick: () => navigate("course", { courseId: json.courseId }),
        },
      })
    } catch {
      toast.error(tt("discover.importFailed", lang))
    } finally {
      setImportingUrl(null)
    }
  }

  const importPlaylist = async () => {
    if (importingPlaylist) return
    if (!playlistUrl.trim()) {
      toast.error(tt("discover.pasteLinkFirst", lang))
      return
    }
    setImportingPlaylist(true)
    try {
      const res = await fetch("/api/discover", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "import-playlist",
          url: playlistUrl.trim(),
          category: playlistCategory,
          maxVideos,
        }),
      })
      const json = await res.json()
      if (!res.ok) {
        toast.error(json.error ?? tt("discover.couldNotImport", lang))
        return
      }
      await bootstrap()
      setPlaylistUrl("")
      toast.success(tt("discover.playlistImported", lang), {
        description: `${json.title} ${tt("discover.everyVideoLesson", lang)}`,
        action: {
          label: tt("discover.openWord", lang),
          onClick: () => navigate("course", { courseId: json.courseId }),
        },
      })
    } catch {
      toast.error(tt("discover.importFailed", lang))
    } finally {
      setImportingPlaylist(false)
    }
  }

  return (
    <div className="space-y-8">
      <PageHeader title={tt("discover.title", lang)} sub={tt("discover.subtitle", lang)} />

      {/* search */}
      <section aria-label={tt("discover.searchLabel", lang)}>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            void search()
          }}
          className="flex gap-2"
        >
          <div className="relative max-w-xl flex-1">
            <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={tt("discover.searchPh", lang)}
              className="h-10 ps-9"
              aria-label={tt("discover.searchLabel", lang)}
            />
          </div>
          <Button type="submit" disabled={searching || !query.trim()} className="h-10">
            {searching ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="me-1 h-4 w-4" />}
            {tt("discover.search", lang)}
          </Button>
        </form>

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          <span className="text-[11.5px] text-muted-foreground">{tt("discover.popular", lang)}</span>
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => void search(s)}
              disabled={searching}
              dir="auto"
              className="rounded-full border px-3 py-1 text-[12px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-ring"
            >
              {s}
            </button>
          ))}
        </div>

        {searching && (
          <div className="mt-6 space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-[92px] animate-pulse rounded-xl bg-secondary/60" />
            ))}
          </div>
        )}

        {!searching && searched && results.length === 0 && (
          <div className="mt-6 rounded-xl border border-dashed py-12 text-center">
            <p className="font-serif text-[16px] font-semibold">{tt("discover.noResults", lang)}</p>
            <p className="mt-1 text-sm text-muted-foreground">{tt("discover.noResultsSub", lang)}</p>
          </div>
        )}

        {!searching && results.length > 0 && (
          <div className="mt-6 space-y-3">
            {results.map((r) => {
              const badge = PLATFORM_BADGES[r.platform]
              const Icon = PLATFORM_ICONS[r.platform] ?? Globe
              const done = importedUrls[r.url]
              return (
                <div
                  key={r.url}
                  className="flex flex-col gap-3 rounded-xl border bg-card p-4 shadow-soft sm:flex-row sm:items-center"
                >
                  <div className="flex min-w-0 flex-1 items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground/70">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {badge && (
                          <Badge variant="outline" className={cn("text-[10px]", badge.className)}>
                            {badge.label}
                          </Badge>
                        )}
                        <span className="text-[10.5px] text-muted-foreground">{r.meta}</span>
                      </div>
                      <h3 dir="auto" className="mt-1 line-clamp-1 font-serif text-[15.5px] font-semibold">
                        {r.title}
                      </h3>
                      <p className="mt-0.5 line-clamp-2 text-[12.5px] leading-relaxed text-muted-foreground">
                        {r.snippet}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 sm:w-[132px]">
                    {done ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-9 w-full"
                        onClick={() => navigate("course", { courseId: done })}
                      >
                        <CheckCircle2 className="me-1 h-3.5 w-3.5 text-sage-deep" /> {tt("discover.openCourse", lang)}
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="h-9 w-full"
                        disabled={importingUrl !== null}
                        onClick={() => void importCourse(r)}
                      >
                        {importingUrl === r.url ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        ) : (
                          <Plus className="me-1 h-3.5 w-3.5" />
                        )}
                        {tt("discover.importWord", lang)}
                      </Button>
                    )}
                  </div>
                </div>
              )
            })}
            <p className="pt-1 text-center text-[11.5px] text-muted-foreground">
              {tt("discover.importedNote", lang)}
            </p>
          </div>
        )}
      </section>

      {/* playlist import */}
      <section
        aria-label={tt("discover.playlistTitle", lang)}
        className="rounded-xl border bg-secondary/30 p-5 sm:p-6"
      >
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <PlayCircle className="h-[18px] w-[18px]" />
          </div>
          <div>
            <h2 className="font-serif text-[17px] font-semibold">{tt("discover.playlistTitle", lang)}</h2>
            <p className="mt-1 max-w-xl text-[13px] leading-relaxed text-muted-foreground">
              {tt("discover.playlistDesc", lang)}
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_150px_120px_auto] sm:items-end">
          <div className="space-y-1.5">
            <Label htmlFor="playlist-url" className="text-[13px]">
              {tt("discover.playlistLink", lang)}
            </Label>
            <Input
              id="playlist-url"
              dir="ltr"
              value={playlistUrl}
              onChange={(e) => setPlaylistUrl(e.target.value)}
              placeholder="https://www.youtube.com/playlist?list=…"
              className="h-9"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-[13px]">{tt("discover.categoryLabel", lang)}</Label>
            <Select value={playlistCategory} onValueChange={setPlaylistCategory}>
              <SelectTrigger className="h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Open Courses">Open Courses</SelectItem>
                <SelectItem value="Arabic Academy">Arabic Academy</SelectItem>
                <SelectItem value="International Standards">International Standards</SelectItem>
                <SelectItem value="IFRS">IFRS</SelectItem>
                <SelectItem value="Internal Training">Internal Training</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="max-videos" className="text-[13px]">
              {tt("discover.maxVideos", lang)}
            </Label>
            <Input
              id="max-videos"
              type="number"
              min={1}
              max={100}
              value={maxVideos}
              onChange={(e) => setMaxVideos(Number(e.target.value))}
              className="h-9"
            />
          </div>
          <Button
            onClick={() => void importPlaylist()}
            disabled={importingPlaylist || !playlistUrl.trim()}
            className="h-9"
          >
            {importingPlaylist ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight className="me-1 h-4 w-4 rtl:rotate-180" />
            )}
            {tt("discover.importWord", lang)}
          </Button>
        </div>
      </section>
    </div>
  )
}
