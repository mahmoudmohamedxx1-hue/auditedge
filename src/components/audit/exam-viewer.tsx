"use client"

import { useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { tt, type Lang } from "@/lib/i18n"
import { dipIsSheet } from "@/lib/dipifr-archive"
import { Download, ExternalLink, FileSpreadsheet, FileText, Sparkles } from "lucide-react"

/** v35 — the in-app exam paper viewer.
 *
 * Every Sameh Zidan DipIFR paper now opens INSIDE the website: PDFs render
 * in a same-origin iframe (the browser's own viewer — zoom, search and
 * page navigation included), spreadsheets get a download card. The paper
 * never navigates the learner away to the source CDN; the original link
 * stays available as a secondary "open externally" action. */

export type ExamDoc = {
  /** what the viewer shows in its header */
  title: string
  /** self-hosted path inside the app, e.g. /exams/dipifr/2024-12.pdf */
  local: string
  /** the source CDN original — the "open externally" fallback */
  url: string
  answers?: boolean
}

export function ExamViewer({
  doc,
  lang,
  onClose,
}: {
  doc: ExamDoc | null
  lang: Lang
  onClose: () => void
}) {
  const sheet = doc ? dipIsSheet(doc.local) : false

  // ESC handled by Dialog; keep body behavior default. While a doc is open,
  // hint to the browser that this is a document view (mobile address bars).
  useEffect(() => {
    if (!doc) return
    const previous = document.title
    document.title = `${doc.title} — AuditEdge`
    return () => {
      document.title = previous
    }
  }, [doc])

  if (!doc) return null

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="flex h-[92vh] max-w-[97vw] flex-col gap-0 overflow-hidden rounded-2xl p-0 sm:max-w-[97vw] lg:max-w-[1200px]"
        aria-describedby={undefined}
      >
        <DialogHeader className="flex-row items-center gap-2 border-b border-border bg-secondary/30 px-4 py-3 sm:px-5">
          <DialogTitle dir="auto" className="flex min-w-0 items-center gap-2 text-[15px] font-semibold leading-tight">
            {sheet ? (
              <FileSpreadsheet className="h-4.5 w-4.5 shrink-0 text-teal-600 dark:text-teal-300" />
            ) : (
              <FileText className="h-4.5 w-4.5 shrink-0 text-olive-deep" />
            )}
            <span className="truncate">{doc.title}</span>
            {doc.answers && (
              <span className="hidden shrink-0 rounded-full border border-sage-deep/40 bg-sage/15 px-2 py-0.5 text-[10.5px] font-semibold text-sage-deep sm:inline-flex">
                <Sparkles className="me-1 h-3 w-3" />
                {tt("exam.dipWithAnswers", lang)}
              </span>
            )}
          </DialogTitle>
          <DialogDescription className="sr-only">{doc.title}</DialogDescription>
          <div className="ms-auto flex shrink-0 items-center gap-1.5">
            <Button asChild size="sm" variant="secondary" className="h-8 gap-1.5 px-2.5 text-[12px]" title={tt("exam.viewerDownload", lang)}>
              <a href={doc.local} download>
                <Download className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{tt("exam.viewerDownload", lang)}</span>
              </a>
            </Button>
            <Button asChild size="sm" variant="ghost" className="h-8 gap-1.5 px-2.5 text-[12px]" title={tt("exam.viewerExternal", lang)}>
              <a href={doc.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
                <span className="hidden lg:inline">{tt("exam.viewerExternal", lang)}</span>
              </a>
            </Button>
          </div>
        </DialogHeader>

        {sheet ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-secondary/20 p-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-600/30 bg-teal-600/10">
              <FileSpreadsheet className="h-8 w-8 text-teal-600 dark:text-teal-300" />
            </span>
            <div>
              <p dir="auto" className="text-[15px] font-semibold">
                {tt("exam.viewerSheetTitle", lang)}
              </p>
              <p dir="auto" className="mx-auto mt-1.5 max-w-md text-[12.5px] leading-relaxed text-muted-foreground">
                {tt("exam.viewerSheetNote", lang)}
              </p>
            </div>
            <Button asChild className="gap-2">
              <a href={doc.local} download>
                <Download className="h-4 w-4" /> {tt("exam.viewerDownloadFile", lang)}
              </a>
            </Button>
          </div>
        ) : (
          <iframe
            key={doc.local}
            src={doc.local}
            title={doc.title}
            className={cn("w-full flex-1 border-0 bg-white")}
            // let the browser's PDF chrome (zoom/search/print) do its job
          />
        )}
      </DialogContent>
    </Dialog>
  )
}
