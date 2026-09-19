"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { formatBytes, MATERIAL_CATEGORIES } from "@/lib/audit-types"
import { tt, arOr, MATERIAL_CATEGORY_AR, dateLocaleOf } from "@/lib/i18n"
import { PageHeader } from "./shared"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import {
  FileArchive,
  FileImage,
  FileSpreadsheet,
  FileText,
  FileVideo,
  FolderOpen,
  Plus,
  Search,
  Trash2,
  UploadCloud,
  X,
} from "lucide-react"

function iconFor(mime: string, name: string) {
  if (mime.includes("pdf")) return FileText
  if (mime.includes("spreadsheet") || mime.includes("excel") || /\.(xlsx?|csv)$/i.test(name))
    return FileSpreadsheet
  if (mime.includes("image")) return FileImage
  if (mime.includes("video")) return FileVideo
  if (mime.includes("zip") || /\.(zip|rar)$/i.test(name)) return FileArchive
  return FileText
}

const ACCEPT =
  ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.csv,.txt,.md,.png,.jpg,.jpeg,.webp,.gif,.mp4,.webm,.zip"

export function Library() {
  const data = useAppStore((s) => s.data)
  const deleteMaterial = useAppStore((s) => s.deleteMaterial)
  const bootstrap = useAppStore((s) => s.bootstrap)
  const presetQuery = useAppStore((s) => s.libraryPresetQuery)
  const setPresetQuery = useAppStore((s) => s.setLibraryPresetQuery)
  const lang = useAppStore((s) => s.lang)
  const isAdmin = data?.user.role === "admin"

  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<string | null>(null)
  const [uploadOpen, setUploadOpen] = useState(false)
  const [deleting, setDeleting] = useState<string | null>(null)

  // consume a deep link (e.g. an ISA chip in the Audit Program): adjust state
  // during render (official React pattern) so the search is prefilled at once
  const [lastPreset, setLastPreset] = useState<string | null>(null)
  if (presetQuery !== lastPreset) {
    setLastPreset(presetQuery)
    if (presetQuery) {
      setQuery(presetQuery)
      setCategory(null)
    }
  }
  // clear the one-shot preset once consumed (external system update)
  useEffect(() => {
    if (lastPreset) setPresetQuery(null)
  }, [lastPreset, setPresetQuery])

  const materials = useMemo(() => {
    if (!data) return []
    const q = query.trim().toLowerCase()
    // every search word must appear in the title, description or file name
    const terms = q.split(/\s+/).filter(Boolean)
    return data.materials.filter((m) => {
      if (category && m.category !== category) return false
      if (!terms.length) return true
      const title = m.title.toLowerCase()
      const description = (m.description ?? "").toLowerCase()
      const originalName = m.originalName.toLowerCase()
      return terms.every(
        (t) => title.includes(t) || description.includes(t) || originalName.includes(t)
      )
    })
  }, [data, query, category])

  const categories = useMemo(() => {
    if (!data) return []
    const used = new Map<string, number>()
    for (const m of data.materials) used.set(m.category, (used.get(m.category) ?? 0) + 1)
    return MATERIAL_CATEGORIES.filter((c) => used.has(c)).map((c) => ({ id: c, count: used.get(c) ?? 0 }))
  }, [data])

  if (!data) return null

  const remove = async (id: string, title: string) => {
    setDeleting(id)
    const err = await deleteMaterial(id)
    setDeleting(null)
    if (err) toast.error(err)
    else toast.success(tt("lib.removedToast", lang), { description: title })
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={tt("lib.title", lang)}
        sub={tt("lib.subtitle", lang)}
        action={
          isAdmin ? (
            <Button onClick={() => setUploadOpen(true)} className="h-9">
              <Plus className="me-1 h-4 w-4" /> {tt("lib.upload", lang)}
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
            placeholder={tt("lib.searchPh", lang)}
            className="h-9 ps-9"
            aria-label={tt("lib.searchLabel", lang)}
          />
        </div>
        {categories.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scroll-thin">
            <button
              onClick={() => setCategory(null)}
              className={cn(
                "flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] transition-colors focus-ring",
                !category
                  ? "border-primary/35 bg-primary/10 font-semibold text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-input hover:text-foreground"
              )}
            >
              {tt("lib.all", lang)}
              <span
                className={cn(
                  "rounded-full px-1.5 py-px text-[10px] tabular-nums",
                  !category ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"
                )}
              >
                {data.materials.length}
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
                {arOr(MATERIAL_CATEGORY_AR, c, lang)}
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

      {materials.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {materials.map((m) => {
            const Icon = iconFor(m.mimeType, m.originalName)
            return (
              <div
                key={m.id}
                className="group flex flex-col rounded-xl border bg-card p-5 shadow-soft card-lift"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-[10.5px] font-medium text-muted-foreground">
                    {arOr(MATERIAL_CATEGORY_AR, m.category, lang)}
                  </span>
                </div>
                <h3 dir="auto" className="mt-3.5 line-clamp-2 min-h-[2.6em] font-serif text-[16px] font-semibold leading-snug">{m.title}</h3>
                <p dir="auto" className="mt-1 line-clamp-2 min-h-[2.4em] text-[12.5px] leading-relaxed text-muted-foreground">
                  {m.description || m.originalName}
                </p>
                <div dir="ltr" className="mt-3 text-[11.5px] text-muted-foreground">
                  {formatBytes(m.sizeBytes)} · {new Date(m.createdAt).toLocaleDateString(dateLocaleOf(lang), {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                  {m.uploaderName ? ` · ${m.uploaderName}` : ""}
                </div>
                <div className="mt-4 flex items-center gap-2 border-t border-border pt-3.5">
                  {m.hasFile ? (
                    <>
                      <a
                        href={`/api/files/${m.fileName}?download=1`}
                        className="inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-lg border bg-card text-[12.5px] font-medium transition-colors hover:border-input hover:bg-secondary/50 focus-ring"
                      >
                        {tt("lib.download", lang)}
                      </a>
                      {m.mimeType === "application/pdf" && (
                        <a
                          href={`/api/files/${m.fileName}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-8 items-center justify-center rounded-lg border px-3 text-[12.5px] font-medium transition-colors hover:border-input hover:bg-secondary/50 focus-ring"
                        >
                          {tt("lib.view", lang)}
                        </a>
                      )}
                    </>
                  ) : m.sourceUrl ? (
                    <a
                      href={m.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 flex-1 items-center justify-center gap-1.5 rounded-lg border border-primary/25 bg-primary/[0.05] text-[12.5px] font-medium text-primary transition-colors hover:bg-primary/[0.1] focus-ring"
                    >
                      {tt("lib.openSource", lang)} ↗
                    </a>
                  ) : null}
                  {isAdmin && (
                    <button
                      onClick={() => void remove(m.id, m.title)}
                      disabled={deleting === m.id}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-destructive/25 text-destructive/70 transition-colors hover:border-destructive/50 hover:bg-destructive/10 hover:text-destructive focus-ring disabled:opacity-50"
                      aria-label={`${tt("lib.deleteAria", lang)} ${m.title}`}
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed py-16 text-center">
          <FolderOpen className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <p className="mt-3 font-serif text-[16px] font-semibold">
            {query || category ? tt("lib.notFound", lang) : tt("lib.empty", lang)}
          </p>
          <p className="mx-auto mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {query || category
              ? tt("lib.tryDifferent", lang)
              : isAdmin
                ? tt("lib.emptyAdmin", lang)
                : tt("lib.emptyLearner", lang)}
          </p>
          {isAdmin && !query && !category && (
            <Button onClick={() => setUploadOpen(true)} className="mt-5">
              <UploadCloud className="me-1.5 h-4 w-4" /> {tt("lib.uploadFirst", lang)}
            </Button>
          )}
        </div>
      )}

      {isAdmin && (
        <UploadDialog
          open={uploadOpen}
          onClose={() => setUploadOpen(false)}
          onDone={() => void bootstrap()}
        />
      )}
    </div>
  )
}

/* ---------------- upload dialog ---------------- */

function UploadDialog({
  open,
  onClose,
  onDone,
}: {
  open: boolean
  onClose: () => void
  onDone: () => void
}) {
  const lang = useAppStore((s) => s.lang)
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState<string>("Reference")
  const [description, setDescription] = useState("")
  const [dragOver, setDragOver] = useState(false)
  const [progress, setProgress] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const reset = () => {
    setFile(null)
    setTitle("")
    setCategory("Reference")
    setDescription("")
    setProgress(null)
    setError(null)
  }

  const close = () => {
    if (progress !== null && progress < 100) return // uploading — don't close
    reset()
    onClose()
  }

  const choose = (f: File | null | undefined) => {
    if (!f) return
    if (f.size > 80 * 1024 * 1024) {
      setError(tt("lib.tooLarge", lang))
      return
    }
    setError(null)
    setFile(f)
    if (!title) setTitle(f.name.replace(/\.[^.]+$/, ""))
  }

  const upload = () => {
    if (!file) return
    setError(null)
    setProgress(0)

    const form = new FormData()
    form.append("file", file)
    form.append("title", title || file.name)
    form.append("category", category)
    form.append("description", description)

    const xhr = new XMLHttpRequest()
    xhr.open("POST", "/api/materials")
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100))
    }
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        setProgress(100)
        toast.success(tt("lib.uploadedToast", lang), {
          description: `${title || file.name} ${tt("lib.availableToast", lang)}`,
        })
        onDone()
        reset()
        onClose()
      } else {
        setProgress(null)
        try {
          setError(JSON.parse(xhr.responseText).error ?? tt("lib.uploadFailed", lang))
        } catch {
          setError(tt("lib.uploadFailed", lang))
        }
      }
    }
    xhr.onerror = () => {
      setProgress(null)
      setError(tt("lib.networkError", lang))
    }
    xhr.send(form)
  }

  const uploading = progress !== null && progress < 100

  return (
    <Dialog open={open} onOpenChange={(o) => (!o ? close() : null)}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-[19px]">{tt("lib.uploadTitle", lang)}</DialogTitle>
          <DialogDescription>{tt("lib.uploadDesc", lang)}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {!file ? (
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault()
                setDragOver(true)
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault()
                setDragOver(false)
                choose(e.dataTransfer.files?.[0])
              }}
              className={cn(
                "flex w-full flex-col items-center justify-center gap-2.5 rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors focus-ring",
                dragOver ? "border-primary bg-primary/[0.04]" : "border-input hover:border-primary/50"
              )}
            >
              <UploadCloud className="h-7 w-7 text-muted-foreground" />
              <span className="text-[14px] font-medium">{tt("lib.dropHere", lang)}</span>
              <span className="text-[12px] text-muted-foreground">{tt("lib.fileTypes", lang)}</span>
            </button>
          ) : (
            <div className="flex items-center gap-3 rounded-xl border bg-secondary/40 px-4 py-3">
              <FileText className="h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0 flex-1">
                <div className="truncate text-[13.5px] font-medium">{file.name}</div>
                <div className="text-[11.5px] text-muted-foreground">{formatBytes(file.size)}</div>
              </div>
              {!uploading && (
                <button
                  type="button"
                  onClick={() => setFile(null)}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring"
                  aria-label={tt("lib.removeFile", lang)}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          )}

          <input
            ref={inputRef}
            type="file"
            accept={ACCEPT}
            className="hidden"
            onChange={(e) => {
              choose(e.target.files?.[0])
              e.target.value = ""
            }}
          />

          <div className="space-y-1.5">
            <Label htmlFor="mat-title" className="text-[13px]">
              {tt("lib.titleLabel", lang)}
            </Label>
            <Input
              id="mat-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={tt("lib.titlePh", lang)}
              className="h-9"
            />
          </div>

          <div className="space-y-1.5">
            <Label className="text-[13px]">{tt("lib.categoryLabel", lang)}</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {MATERIAL_CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c}>
                    {arOr(MATERIAL_CATEGORY_AR, c, lang)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="mat-desc" className="text-[13px]">
              {tt("lib.descLabel", lang)} <span className="text-muted-foreground">{tt("lib.optional", lang)}</span>
            </Label>
            <Textarea
              id="mat-desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={tt("lib.descPh", lang)}
              className="min-h-[70px] resize-none"
            />
          </div>

          {progress !== null && (
            <div>
              <Progress value={progress} className="h-1.5" />
              <p className="mt-1.5 text-[12px] text-muted-foreground">
                {uploading ? `${tt("lib.uploading", lang)} ${progress}%` : tt("lib.done", lang)}
              </p>
            </div>
          )}

          {error && <p className="text-[13px] text-destructive">{error}</p>}
        </div>

        <DialogFooter>
          <Button type="button" variant="ghost" onClick={close} disabled={uploading} className="h-9">
            {tt("lib.cancel", lang)}
          </Button>
          <Button type="button" onClick={upload} disabled={!file || uploading} className="h-9">
            {uploading ? tt("lib.uploading", lang) : tt("lib.uploadToLibrary", lang)}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
