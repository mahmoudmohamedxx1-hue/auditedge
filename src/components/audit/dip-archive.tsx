"use client"

import { useMemo, useState } from "react"
import {
  Archive,
  BookOpen,
  Download,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  HardDriveDownload,
  Languages,
  MonitorPlay,
  ShieldCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { tt, type Lang } from "@/lib/i18n"
import {
  DIP_RESOURCES,
  DIP_SITTINGS,
  DIP_SOURCE,
  type DipResourceKind,
  type DipSession,
  type DipSitting,
} from "@/lib/dipifr-archive"
import { ExamViewer, type ExamDoc } from "./exam-viewer"

/** v34 — the REAL DipIFR past-paper archive (Sameh Zidan / efham IFRS).
 *  v35 — every paper opens INSIDE the website: the sitting chips and the
 *  mirrored companion files open the in-app exam viewer instead of
 *  navigating to the author's CDN. Only the files too heavy to mirror
 *  (three examiner workbooks + the BPP kit) stay external downloads,
 *  clearly labelled with their size. */

const KIND_ICON: Record<DipResourceKind, typeof FileText> = {
  archive: Archive,
  workbook: FileSpreadsheet,
  study: BookOpen,
  glossary: Languages,
}

const KIND_CHIP: Record<DipResourceKind, string> = {
  archive: "border-plum/30 bg-plum/10 text-plum-deep",
  workbook: "border-teal-600/30 bg-teal-600/10 text-teal-700 dark:text-teal-300",
  study: "border-olive/30 bg-olive/10 text-olive-deep",
  glossary: "border-gold/40 bg-gold/10 text-gold-deep",
}

const KIND_LABEL: Record<DipResourceKind, string> = {
  archive: "exam.dipKindArchive",
  workbook: "exam.dipKindWorkbook",
  study: "exam.dipKindStudy",
  glossary: "exam.dipKindGlossary",
}

function SessionChip({
  sitting,
  lang,
  onOpen,
}: {
  sitting: DipSitting
  lang: Lang
  onOpen: (doc: ExamDoc) => void
}) {
  const answers = sitting.answers
  return (
    <button
      type="button"
      onClick={() =>
        onOpen({
          title: `${sitting.session === "june" ? tt("exam.dipJune", lang) : tt("exam.dipDecember", lang)} ${sitting.year} — ${tt("exam.dipArchiveShort", lang)}`,
          local: sitting.local,
          url: sitting.url,
          answers: sitting.answers,
        })
      }
      title={`${tt("exam.dipOpenPaper", lang)} — ${sitting.session === "june" ? tt("exam.dipJune", lang) : tt("exam.dipDecember", lang)} ${sitting.year}`}
      className={cn(
        "group inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition-all hover:-translate-y-px hover:shadow-pop focus-ring",
        answers
          ? "border-sage-deep/40 bg-sage/15 text-sage-deep hover:bg-sage/25"
          : "border-primary/30 bg-primary/[0.07] text-primary hover:bg-primary/[0.14]"
      )}
    >
      <MonitorPlay className="h-3.5 w-3.5 shrink-0" />
      <span className="tabular-nums">
        {sitting.session === "june" ? tt("exam.dipJune", lang) : tt("exam.dipDecember", lang)} {sitting.year}
      </span>
      {answers && (
        <span className="rounded-full bg-sage-deep/15 px-1.5 py-px text-[10px] font-semibold">
          {tt("exam.dipWithAnswers", lang)}
        </span>
      )}
    </button>
  )
}

export function DipArchivePanel({ lang }: { lang: Lang }) {
  /** collapsed → newest 5 years; one click opens the full 13-year history */
  const [expanded, setExpanded] = useState(false)
  /** the paper currently shown in the in-app viewer */
  const [doc, setDoc] = useState<ExamDoc | null>(null)

  const years = useMemo(() => {
    const byYear = new Map<number, { june?: DipSitting; december?: DipSitting }>()
    for (const s of DIP_SITTINGS) {
      const entry = byYear.get(s.year) ?? {}
      entry[s.session] = s
      byYear.set(s.year, entry)
    }
    return [...byYear.entries()].sort((a, b) => b[0] - a[0])
  }, [])

  const shown = expanded ? years : years.slice(0, 5)
  const rtl = lang === "ar"

  return (
    <section
      aria-label={tt("exam.dipArchiveTitle", lang)}
      className="mt-4 rounded-2xl border border-olive/25 bg-card p-5 shadow-soft sm:p-6"
    >
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 dir="auto" className="flex items-center gap-2 font-serif text-[17px] font-semibold leading-tight">
            <FileText className="h-4.5 w-4.5 shrink-0 text-olive-deep" />
            {tt("exam.dipArchiveTitle", lang)}
          </h3>
          <p dir="auto" className="mt-1.5 max-w-2xl text-[12.5px] leading-relaxed text-muted-foreground">
            {tt("exam.dipArchiveSub", lang)}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full border border-sage-deep/30 bg-sage/10 px-2 py-0.5 text-[10.5px] font-semibold text-sage-deep">
            <ShieldCheck className="h-3 w-3" /> {tt("exam.dipVerified", lang)}
          </span>
          <a
            href={DIP_SOURCE.url}
            target="_blank"
            rel="noopener noreferrer"
            dir="auto"
            className="inline-flex items-center gap-1 text-[11px] text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
          >
            {tt("exam.dipSource", lang)}: {lang === "ar" ? DIP_SOURCE.nameAr : DIP_SOURCE.nameEn}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* the real exam's shape */}
      <p
        dir={rtl ? "rtl" : "ltr"}
        className="mt-3 rounded-lg border border-primary/20 bg-primary/[0.05] px-3 py-2 text-[12px] font-medium text-primary"
      >
        {tt("exam.dipFormatFacts", lang)}
      </p>

      {/* papers — a row per year, newest first; each opens in-app */}
      <div className="mt-4 space-y-2">
        {shown.map(([year, s]) => (
          <div key={year} className="flex flex-wrap items-center gap-2">
            <span className="w-12 shrink-0 text-[13px] font-bold tabular-nums text-foreground/70">{year}</span>
            {s.june && <SessionChip sitting={s.june} lang={lang} onOpen={setDoc} />}
            {s.december && <SessionChip sitting={s.december} lang={lang} onOpen={setDoc} />}
            {!expanded && year === shown[shown.length - 1]?.[0] && (
              <button
                onClick={() => setExpanded(true)}
                className="ms-1 inline-flex items-center gap-1 rounded-full border border-dashed border-foreground/30 px-2.5 py-1 text-[11.5px] font-semibold text-muted-foreground transition-colors hover:border-foreground/50 hover:text-foreground focus-ring"
              >
                {tt("exam.dipShowAll", lang)} · {years.length - shown.length} {lang === "ar" ? "سنة" : "more years"}
              </button>
            )}
          </div>
        ))}
        {expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="ms-14 inline-flex items-center gap-1 rounded-full border border-dashed border-foreground/30 px-2.5 py-1 text-[11.5px] font-semibold text-muted-foreground transition-colors hover:border-foreground/50 hover:text-foreground focus-ring"
          >
            {tt("exam.dipShowLess", lang)}
          </button>
        )}
      </div>

      {/* companion shelf */}
      <div className="mt-5 border-t border-border pt-4">
        <h4 dir="auto" className="flex items-center gap-2 text-[13px] font-semibold">
          <BookOpen className="h-4 w-4 text-primary" /> {tt("exam.dipCompanion", lang)}
        </h4>
        <p dir="auto" className="mt-1 text-[11.5px] text-muted-foreground">
          {tt("exam.dipCompanionSub", lang)}
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {DIP_RESOURCES.map((r) => {
            const Icon = KIND_ICON[r.kind]
            const hosted = Boolean(r.local)
            const body = (hovering: boolean) => (
              <>
                <div className="flex items-start justify-between gap-2">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span
                    dir="auto"
                    className={cn("rounded-full border px-2 py-0.5 text-[10px] font-semibold", KIND_CHIP[r.kind])}
                  >
                    {tt(KIND_LABEL[r.kind], lang)}
                  </span>
                </div>
                <p dir="auto" className="text-[13px] font-semibold leading-snug group-hover:text-primary">
                  {lang === "ar" ? r.labelAr : r.labelEn}
                </p>
                <p dir="auto" className="flex-1 text-[11.5px] leading-relaxed text-muted-foreground">
                  {lang === "ar" ? r.descAr : r.descEn}
                </p>
                <span
                  className={cn(
                    "mt-auto inline-flex items-center gap-1 text-[11px] font-medium",
                    hovering ? "text-primary" : hosted ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {hosted ? (
                    <>
                      <MonitorPlay className="h-3 w-3" /> {tt("exam.dipHostedInApp", lang)}
                    </>
                  ) : (
                    <>
                      <Download className="h-3 w-3" />
                      {tt("exam.dipExternalDownload", lang)}
                      {r.externalMb ? ` · ${r.externalMb} MB` : ""}
                    </>
                  )}
                </span>
              </>
            )
            return hosted ? (
              <button
                key={r.id}
                type="button"
                onClick={() =>
                  setDoc({
                    title: lang === "ar" ? r.labelAr : r.labelEn,
                    local: r.local!,
                    url: r.url,
                  })
                }
                className="group flex h-full w-full flex-col gap-2 rounded-xl border bg-secondary/25 p-3.5 text-start transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-pop focus-ring"
              >
                {body(true)}
              </button>
            ) : (
              <a
                key={r.id}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="group flex h-full flex-col gap-2 rounded-xl border border-dashed bg-secondary/15 p-3.5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-pop focus-ring"
              >
                {body(false)}
                <span dir="auto" className="inline-flex items-center gap-1 text-[10.5px] text-muted-foreground/80">
                  <HardDriveDownload className="h-3 w-3" /> {tt("exam.dipExternalWhy", lang)}
                </span>
              </a>
            )
          })}
        </div>
      </div>

      {/* the in-app paper viewer */}
      <ExamViewer doc={doc} lang={lang} onClose={() => setDoc(null)} />
    </section>
  )
}
