"use client"

/**
 * v30/v31 — IFRS Summaries hub: every effective IFRS & IAS as a bilingual
 * handwritten study-notes sheet, styled after the user's IFRS 15 notes
 * PDF (ruled paper, red-asterisk headings, decision trees, T-accounts,
 * formulas, margin annotations in the other language).
 *
 * v31 — COMPREHENSIVE REWRITE: every standard is now written to the depth
 * bar of the flagship PDF (the catalog grew from 328 to 800+ revision
 * blocks). The hub shows catalog-wide totals, and every card carries depth
 * chips (blocks · trees · journals · examples) so the comprehensiveness is
 * visible before you open a sheet.
 */

import { useEffect, useMemo, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { IFRS_SUMMARIES, searchStandards, topicsOf, depthOf, catalogStats } from "@/lib/ifrs"
import type { Standard, TopicId } from "@/lib/ifrs/types"
import { getRouteParam, onRouteParams, setRouteParam } from "@/lib/deeplink"
import { pick, tt } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { IfrsSheet } from "./ifrs-sheet"
import { ShareButton } from "./share-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ArrowRight, ListTree, NotebookPen, Printer, Search, Sigma, Star, Table2 } from "lucide-react"

/** Accent classes for the topic tags (theme-aware palette tints). */
const ACCENT_CHIP: Record<string, string> = {
  gold: "border-gold/40 bg-gold/10 text-gold-deep dark:text-gold",
  sage: "border-sage/40 bg-sage/10 text-sage-deep dark:text-sage",
  clay: "border-clay/40 bg-clay/10 text-clay-deep dark:text-clay",
  plum: "border-plum/40 bg-plum/10 text-plum-deep dark:text-plum",
  olive: "border-olive/40 bg-olive/10 text-olive-deep dark:text-olive",
}
const ACCENT_STRIP: Record<string, string> = {
  gold: "from-gold/25",
  sage: "from-sage/25",
  clay: "from-clay/25",
  plum: "from-plum/25",
  olive: "from-olive/25",
}

/** A small ruled-paper strip preview on each card — the visual signature
 *  of the notes style (three faint rules + a red margin tick). */
function PaperStrip({ code }: { code: string }) {
  return (
    <div
      aria-hidden
      className="relative h-9 overflow-hidden rounded-md border border-border/60 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_10px,rgba(56,106,177,0.18)_10px,rgba(56,106,177,0.18)_11px)]"
    >
      <span className="absolute inset-y-0 start-2.5 w-px bg-clay/50" />
      <span className="ifrs-hand-en absolute start-5 top-[-4px] text-[19px] leading-9 text-foreground/70">
        {code} <span className="ifrs-ink-red">*</span>
      </span>
    </div>
  )
}

function StandardCard({
  std,
  lang,
  onOpen,
}: {
  std: Standard
  lang: "en" | "ar"
  onOpen: () => void
}) {
  const topic = topicsOf().find((t) => t.id === std.topic)
  const depth = depthOf(std)
  return (
    <button
      onClick={onOpen}
      className="group flex h-full flex-col gap-2.5 rounded-xl border bg-card p-4 text-start shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-pop focus-ring"
    >
      <PaperStrip code={std.code} />
      <div className="flex items-center gap-2">
        <span className="font-mono text-[12.5px] font-semibold tracking-wide text-foreground/80">
          {std.code}
        </span>
        {std.flagship && (
          <span className="flex items-center gap-1 rounded-full border border-gold/40 bg-gold/10 px-1.5 py-0.5 text-[10.5px] font-semibold text-gold-deep dark:text-gold">
            <Star className="h-3 w-3" /> {tt("ifrs30.flagship", lang)}
          </span>
        )}
      </div>
      <p dir="auto" className="line-clamp-2 text-[14px] font-medium leading-snug text-foreground">
        {pick(std.title, lang)}
      </p>
      {/* v31 depth chips — the PDF device set, visible before opening */}
      <div className="flex flex-wrap items-center gap-1 text-[10.5px] text-muted-foreground">
        <span className="rounded-full border bg-background/60 px-1.5 py-0.5 font-medium">
          {depth.blocks} {tt("ifrs30.sections", lang)}
        </span>
        {depth.trees > 0 && (
          <span className="flex items-center gap-0.5 rounded-full border bg-background/60 px-1.5 py-0.5">
            <ListTree className="h-3 w-3" /> {depth.trees}
          </span>
        )}
        {depth.journals > 0 && (
          <span className="flex items-center gap-0.5 rounded-full border bg-background/60 px-1.5 py-0.5">
            <Table2 className="h-3 w-3" /> {depth.journals}
          </span>
        )}
        {depth.formulas > 0 && (
          <span className="flex items-center gap-0.5 rounded-full border bg-background/60 px-1.5 py-0.5">
            <Sigma className="h-3 w-3" /> {depth.formulas}
          </span>
        )}
      </div>
      <div className="mt-auto flex items-center justify-between gap-2">
        <span
          dir="auto"
          className={cn(
            "truncate rounded-full border px-2 py-0.5 text-[11px] font-medium",
            ACCENT_CHIP[topic?.accent ?? "gold"]
          )}
        >
          {topic ? pick(topic.label, lang) : ""}
        </span>
      </div>
    </button>
  )
}

export function IfrsSummaries() {
  const lang = useAppStore((s) => s.lang)
  // v32 — deep-linkable sheet: #/ifrs?std=IFRS+15 opens the standard directly
  const [selected, setSelected] = useState<string | null>(() => {
    const code = getRouteParam("std")
    return code && IFRS_SUMMARIES.some((s) => s.code === code) ? code : null
  })
  const [query, setQuery] = useState("")
  const [topic, setTopic] = useState<TopicId | "all">("all")
  const [showNotes, setShowNotes] = useState(true)

  // open/close a sheet while keeping the URL in step (back button walks sheets)
  const openStd = (code: string | null) => {
    setSelected(code)
    setRouteParam("std", code)
  }

  // browser back / forward / hand-edited URL → re-read the std param
  useEffect(
    () =>
      onRouteParams((params) => {
        const code = params.get("std")
        setSelected(code && IFRS_SUMMARIES.some((s) => s.code === code) ? code : null)
      }),
    []
  )

  const topics = topicsOf()
  const rtl = lang === "ar"

  const filtered = useMemo(() => {
    const base = topic === "all" ? IFRS_SUMMARIES : IFRS_SUMMARIES.filter((s) => s.topic === topic)
    return searchStandards(query, base)
  }, [query, topic])

  const current = selected ? IFRS_SUMMARIES.find((s) => s.code === selected) : null
  const currentIndex = current ? IFRS_SUMMARIES.indexOf(current) : -1
  const prev = currentIndex > 0 ? IFRS_SUMMARIES[currentIndex - 1] : null
  const next = currentIndex >= 0 && currentIndex < IFRS_SUMMARIES.length - 1 ? IFRS_SUMMARIES[currentIndex + 1] : null

  /* ---------------- detail: one handwritten sheet ---------------- */
  if (current) {
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 print:hidden">
          <Button variant="outline" size="sm" onClick={() => openStd(null)} className="h-9">
            <ArrowLeft className={cn("h-4 w-4", rtl && "-scale-x-100")} />
            {tt("ifrs30.back", lang)}
          </Button>
          <div className="ms-auto flex items-center gap-2">
            <label className="flex cursor-pointer items-center gap-1.5 rounded-lg border bg-card px-2.5 py-1.5 text-[12px] text-muted-foreground transition-colors hover:text-foreground">
              <input
                type="checkbox"
                checked={showNotes}
                onChange={(e) => setShowNotes(e.target.checked)}
                className="h-3.5 w-3.5 accent-[var(--primary)]"
              />
              {tt("ifrs30.notesToggle", lang)}
            </label>
            {/* v32 — share this exact sheet (#/ifrs?std=…) */}
            <ShareButton label={tt("share32.shareLabel", lang)} title={`${current.code} — ${pick(current.title, lang)}`} />
            <Button variant="outline" size="sm" onClick={() => window.print()} className="h-9">
              <Printer className="h-4 w-4" />
              {tt("ifrs30.print", lang)}
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 print:hidden">
          {(() => {
            const d = depthOf(current)
            const chips: Array<[string, string]> = [
              [`${d.blocks} ${tt("ifrs30.sections", lang)}`, ""],
              [`${d.trees} ${tt("ifrs31.trees", lang)}`, "tree"],
              [`${d.journals} ${tt("ifrs31.journals", lang)}`, "journal"],
              [`${d.formulas} ${tt("ifrs31.formulas", lang)}`, "formula"],
              [`${d.examples} ${tt("ifrs31.examples", lang)}`, "example"],
              [`${d.tips} ${tt("ifrs31.tips", lang)}`, "tip"],
            ]
            return chips
              .filter(([label]) => !label.startsWith("0"))
              .map(([label, key]) => (
                <span
                  key={key || label}
                  className="rounded-full border bg-card px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                >
                  {label}
                </span>
              ))
          })()}
        </div>

        <IfrsSheet
          code={current.code}
          title={current.title}
          effective={current.effective}
          replaces={current.replaces}
          flagship={current.flagship}
          blocks={current.blocks}
          lang={lang}
          showNotes={showNotes}
        />

        {/* prev / next through the catalog */}
        <div className="flex items-stretch justify-between gap-3 print:hidden">
          {prev ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => openStd(prev.code)}
              className="h-auto max-w-[45%] flex-col items-start gap-0.5 px-3 py-2 text-start"
            >
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <ArrowLeft className={cn("h-3.5 w-3.5", rtl && "-scale-x-100")} /> {tt("ifrs30.prev", lang)}
              </span>
              <span dir="auto" className="line-clamp-1 text-[12.5px] font-medium">
                {prev.code} · {pick(prev.title, lang)}
              </span>
            </Button>
          ) : (
            <span />
          )}
          {next ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => openStd(next.code)}
              className="h-auto max-w-[45%] flex-col items-end gap-0.5 px-3 py-2 text-end"
            >
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                {tt("ifrs30.next", lang)} <ArrowRight className={cn("h-3.5 w-3.5", rtl && "-scale-x-100")} />
              </span>
              <span dir="auto" className="line-clamp-1 text-[12.5px] font-medium">
                {next.code} · {pick(next.title, lang)}
              </span>
            </Button>
          ) : (
            <span />
          )}
        </div>
      </div>
    )
  }

  /* ---------------- hub: the catalog ---------------- */
  return (
    <div className="space-y-6">
      <header className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <NotebookPen className="h-6 w-6" />
        </div>
        <div className="min-w-0">
          <h1 className="font-serif text-2xl font-semibold tracking-tight sm:text-[27px]">
            {tt("ifrs30.title", lang)}
          </h1>
          <p className="mt-1 max-w-2xl text-[13.5px] leading-relaxed text-muted-foreground">
            {tt("ifrs30.subtitle", lang)}
          </p>
          {/* v31 — the comprehensiveness strip: what the whole catalog holds */}
          {(() => {
            const st = catalogStats()
            const chips: Array<[string, string]> = [
              [String(st.standards), tt("ifrs31.standards", lang)],
              [st.blocks.toLocaleString(), tt("ifrs31.blocks", lang)],
              [String(st.trees), tt("ifrs31.trees", lang)],
              [String(st.journals), tt("ifrs31.journals", lang)],
              [String(st.examples), tt("ifrs31.examples", lang)],
            ]
            return (
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                {chips.map(([n, label]) => (
                  <span
                    key={label}
                    className="rounded-full border bg-card px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                  >
                    <span className="font-semibold text-foreground">{n}</span>{" "}
                    {label}
                  </span>
                ))}
              </div>
            )
          })()}
          <p className="mt-2 max-w-2xl text-[12.5px] italic leading-relaxed text-muted-foreground/80">
            {tt("ifrs31.catalog", lang)}
          </p>
        </div>
      </header>

      {/* search + topic chips */}
      <div className="space-y-3 print:hidden">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={tt("ifrs30.search", lang)}
            className="h-10 ps-9"
            dir="auto"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setTopic("all")}
            className={cn(
              "rounded-full border px-3 py-1 text-[12px] font-medium transition-colors focus-ring",
              topic === "all"
                ? "border-primary/40 bg-primary/10 text-primary"
                : "bg-card text-muted-foreground hover:text-foreground"
            )}
          >
            {tt("ifrs30.all", lang)}
            <span className="ms-1.5 opacity-70">{IFRS_SUMMARIES.length}</span>
          </button>
          {topics.map((t) => {
            const count = IFRS_SUMMARIES.filter((s) => s.topic === t.id).length
            return (
              <button
                key={t.id}
                onClick={() => setTopic(t.id)}
                className={cn(
                  "rounded-full border px-3 py-1 text-[12px] font-medium transition-colors focus-ring",
                  topic === t.id
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "bg-card text-muted-foreground hover:text-foreground"
                )}
              >
                {pick(t.label, lang)}
                <span className="ms-1.5 opacity-70">{count}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* the cards */}
      {filtered.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted-foreground">{tt("ifrs30.empty", lang)}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((std) => (
            <StandardCard key={std.code} std={std} lang={lang} onOpen={() => openStd(std.code)} />
          ))}
        </div>
      )}
    </div>
  )
}
