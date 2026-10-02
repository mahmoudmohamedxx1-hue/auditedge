"use client"

/** v28 — the AI program customizer.
 *
 *  1. AiTailorDialog   — describe the client (sector, size, listed status,
 *                        systems, concerns) → POST /api/ai/program-tailor →
 *                        preview the memo / focus areas / extra procedures →
 *                        apply them to the engagement.
 *  2. AiTailorMemoCard — the engagement memo card shown at the top of the
 *                        Program tab once a customization is applied.
 *  3. AiProcRow        — one AI-added procedure rendered inline in its
 *                        program section: tickable exactly like a built-in
 *                        (same ProcState store, same WP-ref/note flow) with
 *                        an individual remove button. */

import { useMemo, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { SECTOR_PROFILES } from "@/lib/program/sectors"
import { PROGRAM_SECTIONS } from "@/lib/program"
import { aiProcsFor, type AiProc, type AiTailor, type Engagement, type ProcState } from "@/lib/engagement"
import { tt, type Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { describeEngine } from "@/lib/models"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  CheckCircle2,
  FileText,
  Loader2,
  Minus,
  Radar,
  Sparkles,
  Target,
  Trash2,
  Wand2,
  X,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/* the settings form + result preview                                  */
/* ------------------------------------------------------------------ */

type TailorDraft = {
  summary: { en: string; ar: string }
  focus: { en: string; ar: string }[]
  procs: AiProc[]
  pbc: { sectionId: string; text: { en: string; ar: string } }[]
  model: string
  engine: string
}

export function AiTailorDialog({
  open,
  onOpenChange,
  eng,
  lang,
  onApply,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  eng: Engagement
  lang: Lang
  onApply: (tailor: AiTailor) => void
}) {
  const [sector, setSector] = useState(eng.sectorId ?? "")
  const [sectorFree, setSectorFree] = useState("")
  const [size, setSize] = useState<"sme" | "mid" | "listed">("mid")
  const [listed, setListed] = useState(false)
  const [systems, setSystems] = useState("")
  const [concerns, setConcerns] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [draft, setDraft] = useState<TailorDraft | null>(null)

  const sectorOptions = useMemo(
    () => SECTOR_PROFILES.map((s) => ({ id: s.id, en: s.name.en, ar: s.name.ar })),
    []
  )
  const chosenSector =
    sector && sectorOptions.some((s) => s.id === sector)
      ? lang === "ar"
        ? sectorOptions.find((s) => s.id === sector)!.ar
        : sectorOptions.find((s) => s.id === sector)!.en
      : ""

  const generate = async () => {
    const effectiveSector = (sectorFree.trim() || chosenSector || "").trim()
    if (!effectiveSector || loading) return
    setLoading(true)
    setError(null)
    setDraft(null)
    try {
      const res = await fetch("/api/ai/program-tailor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sector: effectiveSector,
          size,
          listed,
          systems: systems.trim(),
          concerns: concerns.trim(),
        }),
      })
      const data = (await res.json().catch(() => ({}))) as { tailor?: TailorDraft; error?: string }
      if (!res.ok || !data.tailor) {
        setError(data.error ?? tt("program28.failed", lang))
        return
      }
      setDraft(data.tailor)
    } catch {
      setError(tt("program28.failed", lang))
    } finally {
      setLoading(false)
    }
  }

  const apply = () => {
    if (!draft) return
    onApply({
      generatedAt: Date.now(),
      model: draft.model,
      engine: draft.engine,
      sector: sectorFree.trim() || chosenSector,
      size,
      listed,
      systems: systems.trim(),
      concerns: concerns.trim(),
      summary: draft.summary,
      focus: draft.focus,
      procs: draft.procs,
      pbc: draft.pbc,
    })
    setDraft(null)
    onOpenChange(false)
    toast.success(tt("program28.applied", lang))
  }

  const sizes: { id: "sme" | "mid" | "listed"; key: "sizeSME" | "sizeMid" | "sizeListed" }[] = [
    { id: "sme", key: "sizeSME" },
    { id: "mid", key: "sizeMid" },
    { id: "listed", key: "sizeListed" },
  ]

  return (
    <Dialog open={open} onOpenChange={(v) => (v ? onOpenChange(true) : onOpenChange(false))}>
      <DialogContent className="max-h-[88vh] overflow-y-auto sm:max-w-[560px] scroll-thin">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-serif">
            <Wand2 className="h-4 w-4 text-primary" /> {tt("program28.tailorTitle", lang)}
          </DialogTitle>
          <DialogDescription>{tt("program28.tailorDesc", lang)}</DialogDescription>
        </DialogHeader>

        {!draft ? (
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label>{tt("program28.sector", lang)}</Label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="h-9 w-full rounded-lg border bg-background px-3 text-[13px] outline-none focus:border-primary/40"
              >
                <option value="">{lang === "ar" ? "اختر قطاعًا…" : "Pick a sector…"}</option>
                {sectorOptions.map((s) => (
                  <option key={s.id} value={s.id}>
                    {lang === "ar" ? s.ar : s.en}
                  </option>
                ))}
              </select>
              <Input
                dir="auto"
                value={sectorFree}
                onChange={(e) => setSectorFree(e.target.value)}
                placeholder={lang === "ar" ? "أو اكتب قطاعًا حرًا (مثلًا: مطاعم، تعدين، تقنية مالية)" : "or type any industry (e.g. restaurants, mining, fintech)"}
                className="mt-1.5 h-9 text-[13px]"
                maxLength={120}
              />
            </div>

            <div className="space-y-1.5">
              <Label>{tt("program28.size", lang)}</Label>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSize(s.id)}
                    aria-pressed={size === s.id}
                    className={cn(
                      "rounded-lg border px-2 py-2 text-[12px] font-medium transition-colors focus-ring",
                      size === s.id
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "bg-card/60 text-muted-foreground hover:border-input hover:text-foreground"
                    )}
                  >
                    {tt(`program28.${s.key}` as never, lang)}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label>{tt("program28.listedQ", lang)}</Label>
              <div className="grid grid-cols-2 gap-2">
                {(
                  [
                    { v: true, key: "yes" },
                    { v: false, key: "no" },
                  ] as const
                ).map((o) => (
                  <button
                    key={o.key}
                    type="button"
                    onClick={() => setListed(o.v)}
                    aria-pressed={listed === o.v}
                    className={cn(
                      "rounded-lg border px-2 py-2 text-[12px] font-medium transition-colors focus-ring",
                      listed === o.v
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "bg-card/60 text-muted-foreground hover:border-input hover:text-foreground"
                    )}
                  >
                    {tt(`program28.${o.key}` as never, lang)}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="tailor-systems">{tt("program28.systems", lang)}</Label>
              <Input
                id="tailor-systems"
                dir="auto"
                value={systems}
                onChange={(e) => setSystems(e.target.value)}
                placeholder={lang === "ar" ? "مثلًا: Oracle Fusion، دفاتر إكسل، QuickBooks" : "e.g. Oracle Fusion, Excel ledgers, QuickBooks"}
                className="h-9 text-[13px]"
                maxLength={200}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="tailor-concerns">{tt("program28.concerns", lang)}</Label>
              <Textarea
                id="tailor-concerns"
                dir="auto"
                value={concerns}
                onChange={(e) => setConcerns(e.target.value)}
                placeholder={tt("program28.concernsPh", lang)}
                className="min-h-[76px] text-[13px]"
                maxLength={600}
              />
            </div>

            {error && (
              <p className="rounded-lg border border-gold/35 bg-gold/[0.08] px-3 py-2 text-[12.5px] text-gold-deep" dir="auto">
                {error}
              </p>
            )}
          </div>
        ) : (
          /* ---------- result preview ---------- */
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-olive/30 bg-olive/10 px-2.5 py-1 text-[11px] font-semibold text-olive-deep">
                <Sparkles className="h-3.5 w-3.5" /> {draft.procs.length} {tt("program28.aiProcCount", lang)} ·{" "}
                {draft.pbc.length} PBC
              </span>
              <span className="text-[11px] text-muted-foreground">{describeEngine(draft.engine).label}</span>
            </div>
            <p dir="auto" className="rounded-xl border bg-secondary/40 p-3.5 text-[13px] leading-relaxed text-foreground/85">
              {lang === "ar" ? draft.summary.ar : draft.summary.en}
            </p>
            {draft.focus.length > 0 && (
              <ul className="space-y-1.5">
                {draft.focus.map((f, i) => (
                  <li key={i} dir="auto" className="flex gap-2 text-[12.5px] leading-relaxed text-foreground/80">
                    <Target className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {lang === "ar" ? f.ar : f.en}
                  </li>
                ))}
              </ul>
            )}
            <div className="max-h-56 space-y-1.5 overflow-y-auto pe-1 scroll-thin">
              {draft.procs.map((p) => {
                const sec = PROGRAM_SECTIONS.find((s) => s.id === p.sectionId)
                return (
                  <div key={p.id} className="rounded-lg border bg-card/70 px-3 py-2 text-[12.5px] leading-relaxed">
                    <span className="me-1.5 font-mono text-[10.5px] text-muted-foreground">{sec?.code ?? p.sectionId}</span>
                    <span dir="auto" className="text-foreground/85">{lang === "ar" ? p.text.ar : p.text.en}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <DialogFooter>
          {!draft ? (
            <Button
              onClick={() => void generate()}
              disabled={loading || (!sectorFree.trim() && !chosenSector)}
              className="w-full sm:w-auto"
            >
              {loading ? <Loader2 className="me-1.5 h-4 w-4 animate-spin" /> : <Wand2 className="me-1.5 h-4 w-4" />}
              {loading ? tt("program28.generating", lang) : tt("program28.generate", lang)}
            </Button>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => setDraft(null)} className="text-muted-foreground">
                {tt("program28.regen", lang)}
              </Button>
              <Button onClick={apply} className="w-full sm:w-auto">
                <CheckCircle2 className="me-1.5 h-4 w-4" /> {tt("program28.apply", lang)}
              </Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/* ------------------------------------------------------------------ */
/* the applied-customization memo card (top of the Program tab)        */
/* ------------------------------------------------------------------ */

export function AiTailorMemoCard({
  eng,
  lang,
  onReopen,
  onRemove,
}: {
  eng: Engagement
  lang: Lang
  onReopen: () => void
  onRemove: () => void
}) {
  const tailor = eng.aiTailor
  if (!tailor) return null
  const doneCount = tailor.procs.filter((p) => eng.procedures[p.id]?.status === "done").length
  const engine = describeEngine(tailor.engine)

  return (
    <section className="mt-4 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.06] via-card to-card p-5 shadow-soft print:border-primary/15">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Radar className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h3 className="font-serif text-[16px] font-semibold">{tt("program28.memoTitle", lang)}</h3>
            <p className="mt-0.5 text-[11.5px] text-muted-foreground">
              {tailor.sector} · {tt(`program28.size${tailor.size === "sme" ? "SME" : tailor.size === "mid" ? "Mid" : "Listed"}` as never, lang)}
              {tailor.listed ? ` · ${lang === "ar" ? "خاضعة للرقابة" : "regulated"}` : ""} ·{" "}
              {engine.label}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 print:hidden">
          <Button variant="outline" size="sm" className="h-8" onClick={onReopen}>
            <Wand2 className="me-1 h-3.5 w-3.5" /> {tt("program28.regen", lang)}
          </Button>
          <Button variant="ghost" size="sm" className="h-8 text-muted-foreground hover:text-destructive" onClick={onRemove}>
            <Trash2 className="me-1 h-3.5 w-3.5" /> {tt("program28.removeTailor", lang)}
          </Button>
        </div>
      </div>

      <p dir="auto" className="mt-3 text-[13.5px] leading-relaxed text-foreground/85">
        {lang === "ar" ? tailor.summary.ar : tailor.summary.en}
      </p>

      {tailor.focus.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tailor.focus.map((f, i) => (
            <span
              key={i}
              dir="auto"
              className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/[0.05] px-2.5 py-1 text-[11.5px] text-foreground/80"
            >
              <Target className="h-3 w-3 text-primary" /> {lang === "ar" ? f.ar : f.en}
            </span>
          ))}
        </div>
      )}

      <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <b className="font-semibold text-foreground">{tailor.procs.length}</b> {tt("program28.aiProcCount", lang)}
        </span>
        <span>
          <b className="font-semibold text-foreground">{doneCount}</b> {tt("program28.doneCount", lang)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FileText className="h-3.5 w-3.5 text-primary" />
          +{tailor.pbc.length} PBC
        </span>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* one AI-added procedure row (inline in its program section)          */
/* ------------------------------------------------------------------ */

export function AiProcRow({
  proc,
  eng,
  lang,
  onSetProc,
  onRemove,
}: {
  proc: AiProc
  eng: Engagement
  lang: Lang
  onSetProc: (procId: string, patch: Partial<ProcState> | null) => void
  onRemove: (procId: string) => void
}) {
  const st = eng.procedures[proc.id]
  const isDone = st?.status === "done"
  const isNa = st?.status === "na"

  const toggleDone = () => {
    if (isDone) onSetProc(proc.id, { status: undefined, date: undefined })
    else onSetProc(proc.id, { status: "done", date: Date.now() })
  }
  const setNa = () => {
    if (isNa) onSetProc(proc.id, { status: undefined, date: undefined })
    else onSetProc(proc.id, { status: "na", date: Date.now() })
  }

  return (
    <li
      className={cn(
        "rounded-xl border transition-colors",
        isDone
          ? "border-sage/40 bg-sage/[0.06]"
          : isNa
            ? "border-border bg-secondary/30"
            : "border-primary/25 bg-primary/[0.03]"
      )}
    >
      <div className="flex items-start gap-3 p-3.5">
        <button
          onClick={toggleDone}
          aria-pressed={isDone}
          className={cn(
            "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[11px] font-semibold transition-colors focus-ring",
            isDone
              ? "border-sage bg-sage text-white"
              : isNa
                ? "border-muted-foreground bg-secondary text-muted-foreground"
                : "border-input bg-background text-transparent hover:border-sage/60"
          )}
        >
          {isDone ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Minus className="h-3.5 w-3.5" />}
        </button>

        <div className="min-w-0 flex-1">
          <button onClick={toggleDone} className="w-full text-start focus-ring rounded-md">
            <span className="me-1.5 inline-flex items-center gap-1 rounded-full border border-primary/25 bg-primary/[0.06] px-1.5 py-px text-[9.5px] font-semibold uppercase tracking-wide text-primary">
              <Sparkles className="h-2.5 w-2.5" /> {tt("program28.aiAdded", lang)}
            </span>
            {proc.ref && <span className="me-2 font-mono text-[11px] text-muted-foreground">{proc.ref}</span>}
            <span
              dir="auto"
              className={cn(
                "text-[13.5px] leading-relaxed",
                isDone ? "text-muted-foreground line-through decoration-sage/50" : "text-foreground/85"
              )}
            >
              {lang === "ar" ? proc.text.ar : proc.text.en}
            </span>
          </button>
          {isNa && st?.naReason && (
            <p dir="auto" className="mt-1 text-[11.5px] italic text-muted-foreground">{st.naReason}</p>
          )}
        </div>

        <span className="flex shrink-0 items-center gap-1 print:hidden">
          <button
            onClick={setNa}
            title="N/A"
            aria-pressed={isNa}
            className={cn(
              "rounded-md p-1 text-[11px] transition-colors focus-ring",
              isNa ? "text-foreground" : "text-muted-foreground/60 hover:text-foreground"
            )}
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => onRemove(proc.id)}
            title={tt("program28.removeTailor", lang)}
            className="rounded-md p-1 text-muted-foreground/60 transition-colors hover:text-destructive focus-ring"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </span>
      </div>
    </li>
  )
}

/** All AI-added procedure ids of an engagement (used to clear ticks). */
export function aiProcIds(eng: Engagement): string[] {
  return (eng.aiTailor?.procs ?? []).map((p) => p.id)
}

/** SectionView helper — the AI procedures block for a section (null when none). */
export function aiProcsBlock(eng: Engagement, sectionId: string): AiProc[] {
  return aiProcsFor(eng, sectionId)
}
