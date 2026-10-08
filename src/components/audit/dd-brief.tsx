"use client"

/**
 * v42 — the Due Diligence deal-brief closer panel.
 *
 *  The DD playbook's third tab: the fieldwork you have actually ticked
 *  across the 25 workstreams (plus the applied AI supplement) condenses
 *  into a one-page, decision-grade deal brief — state of play, what the
 *  open items mean for THIS kind of deal, conditions before money moves,
 *  the deal-breaker watch list, and an honest recommendation. Grounded
 *  strictly in the tick state: it never asserts a finding that was not
 *  cleared. Progressive (SSE stages + cancel), bilingual, exports .md. */

import { useEffect, useMemo, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { aiJson, type AiStageEvent } from "@/lib/ai-client"
import { StageTicker } from "./ai-progress"
import { Markdown } from "./markdown"
import { SpeakButton } from "./speak-button"
import { VoicePicker } from "./voice-picker"
import { tt } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Check, Copy, Download, FileBarChart, Loader2, Sparkles } from "lucide-react"

type DealKind = "acquisition" | "investment" | "lending" | "partnership"
type SizeKind = "sme" | "mid" | "large"

/** the last customizer form, persisted by the AI tab so the brief is prefilled */
export const DD_FORM_KEY = "auditedge-dd-form-v42"

const KINDS: { id: DealKind; labelKey: string }[] = [
  { id: "acquisition", labelKey: "dd42.dealAcquisition" },
  { id: "investment", labelKey: "dd42.dealInvestment" },
  { id: "lending", labelKey: "dd42.dealLending" },
  { id: "partnership", labelKey: "dd42.dealPartnership" },
]
const SIZES: { id: SizeKind; labelKey: string }[] = [
  { id: "sme", labelKey: "dd42.sizeSme" },
  { id: "mid", labelKey: "dd42.sizeMid" },
  { id: "large", labelKey: "dd42.sizeLarge" },
]

export function DealBriefPanel({
  progress,
  aiProcsBySection,
  sections,
}: {
  /** sectionId → procId → done — the real tick state */
  progress: Record<string, Record<string, boolean>>
  /** sectionId → applied AI supplement procedures */
  aiProcsBySection: Map<string, unknown[]>
  sections: {
    id: string
    code: string
    title: { en: string; ar: string }
    scope: "legal" | "ops" | "financial"
    procedures: unknown[]
  }[]
}) {
  const lang = useAppStore((s) => s.lang)
  const [deal, setDeal] = useState<DealKind>("acquisition")
  const [size, setSize] = useState<SizeKind>("mid")
  const [target, setTarget] = useState("")
  const [concerns, setConcerns] = useState("")
  const [notes, setNotes] = useState("")
  const [busy, setBusy] = useState(false)
  const [startedAt, setStartedAt] = useState(0)
  const [stage, setStage] = useState<AiStageEvent | null>(null)
  const [draft, setDraft] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const abortRef = useRef<AbortController | null>(null)

  /* prefill from the customizer's last form */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DD_FORM_KEY)
      if (raw) {
        const f = JSON.parse(raw) as Partial<{ deal: DealKind; size: SizeKind; target: string; concerns: string }>
        if (f.deal) setDeal(f.deal)
        if (f.size) setSize(f.size)
        if (f.target) setTarget(f.target)
        if (f.concerns) setConcerns(f.concerns)
      }
      const saved = localStorage.getItem("auditedge-dd-brief")
      if (saved) setDraft(saved)
    } catch {}
  }, [])

  /* the harvested fieldwork state — what is actually cleared */
  const harvested = useMemo(
    () =>
      sections.map((s) => {
        const map = progress[s.id] ?? {}
        const done = (s.procedures as { id: string }[]).filter((p) => map[p.id]).length
        return {
          sectionId: s.id,
          code: s.code,
          title: s.title[lang] || s.title.en,
          scope: s.scope,
          done,
          total: s.procedures.length,
          ai: aiProcsBySection.get(s.id)?.length ?? 0,
        }
      }),
    [sections, progress, aiProcsBySection, lang]
  )

  const coverage = useMemo(() => {
    const total = harvested.reduce((a, w) => a + w.total, 0)
    const done = harvested.reduce((a, w) => a + w.done, 0)
    const touched = harvested.filter((w) => w.done > 0).length
    return { total, done, touched, pct: total ? Math.round((done / total) * 100) : 0 }
  }, [harvested])

  const generate = async () => {
    if (busy) return
    if (coverage.done === 0) {
      toast.error(tt("dd42.needTicks", lang))
      return
    }
    setBusy(true)
    setStartedAt(Date.now())
    setStage(null)
    abortRef.current?.abort()
    abortRef.current = new AbortController()
    try {
      const data = await aiJson<{ draft?: string; error?: string }>(
        "/api/ai/dd-brief",
        { deal, size, target, concerns, notes, workstreams: harvested },
        { onStage: setStage, signal: abortRef.current.signal }
      )
      if (!data.draft) throw new Error(data.error || "failed")
      setDraft(data.draft)
      try {
        localStorage.setItem("auditedge-dd-brief", data.draft)
      } catch {}
    } catch (e) {
      if (e instanceof DOMException && e.name === "AbortError") toast.info(tt("dd42.cancelled", lang))
      else toast.error(e instanceof Error && e.message ? e.message : tt("dd42.failed", lang))
    } finally {
      setBusy(false)
      abortRef.current = null
    }
  }

  const copyDraft = async () => {
    if (!draft) return
    try {
      await navigator.clipboard.writeText(draft)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      toast.error(lang === "ar" ? "تعذر النسخ" : "Could not copy")
    }
  }

  const download = () => {
    if (!draft) return
    const blob = new Blob([draft], { type: "text/markdown;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `dd-deal-brief-${deal}.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  const segBtn = (active: boolean) =>
    cn(
      "rounded-lg border px-3 py-1.5 text-[12.5px] font-medium transition-colors focus-ring",
      active
        ? "border-primary/50 bg-primary/10 text-primary"
        : "border-border/70 bg-card text-muted-foreground hover:text-foreground"
    )

  return (
    <div className="space-y-5">
      {/* intro */}
      <section className="rounded-xl border border-primary/20 bg-primary/[0.04] p-4">
        <h3 className="flex items-center gap-1.5 text-[14px] font-semibold text-foreground">
          <FileBarChart className="h-4 w-4 text-primary" /> {tt("dd42.introTitle", lang)}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{tt("dd42.intro", lang)}</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12px] text-muted-foreground">
          <span>
            <b className="text-foreground tabular-nums">{coverage.done}</b>/{coverage.total}{" "}
            {tt("dd42.instructionsWord", lang)}
          </span>
          <span>
            <b className="text-foreground tabular-nums">{coverage.touched}</b>/{harvested.length}{" "}
            {tt("dd42.workstreamsTouched", lang)}
          </span>
          <span className="rounded-full bg-secondary px-2 py-0.5 font-semibold tabular-nums text-foreground">
            {coverage.pct}%
          </span>
        </div>
      </section>

      {/* the form */}
      <section className="rounded-xl border border-border/70 bg-card p-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[12px] font-semibold text-foreground">{tt("dd42.deal", lang)}</label>
            <div className="flex flex-wrap gap-1.5">
              {KINDS.map((k) => (
                <button key={k.id} type="button" onClick={() => setDeal(k.id)} className={segBtn(deal === k.id)}>
                  {tt(k.labelKey, lang)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-[12px] font-semibold text-foreground">{tt("dd42.size", lang)}</label>
            <div className="flex flex-wrap gap-1.5">
              {SIZES.map((k) => (
                <button key={k.id} type="button" onClick={() => setSize(k.id)} className={segBtn(size === k.id)}>
                  {tt(k.labelKey, lang)}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-1.5 block text-[12px] font-semibold text-foreground">{tt("dd42.target", lang)}</label>
          <Textarea
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder={tt("dd42.targetPh", lang)}
            rows={2}
            className="text-[13.5px]"
            dir="auto"
          />
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-[12px] font-semibold text-foreground">{tt("dd42.concerns", lang)}</label>
            <Textarea
              value={concerns}
              onChange={(e) => setConcerns(e.target.value)}
              placeholder={tt("dd42.concernsPh", lang)}
              rows={2}
              className="text-[13.5px]"
              dir="auto"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-[12px] font-semibold text-foreground">{tt("dd42.notes", lang)}</label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={tt("dd42.notesPh", lang)}
              rows={2}
              className="text-[13.5px]"
              dir="auto"
            />
          </div>
        </div>
        <div className="mt-4">
          <Button onClick={() => void generate()} disabled={busy} className="gap-2">
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
            {busy ? tt("dd42.generating", lang) : tt("dd42.generate", lang)}
          </Button>
        </div>
        <div className="mt-3">
          <StageTicker
            busy={busy}
            labels={[
              tt("dd42.stageReading", lang),
              tt("dd42.stageWriting", lang),
              tt("dd42.stageFinalizing", lang),
            ]}
            stage={stage}
            startedAt={startedAt}
            onCancel={() => abortRef.current?.abort()}
            cancelLabel={tt("dd42.cancel", lang)}
            runningLabel={tt("dd42.generating", lang)}
          />
        </div>
      </section>

      {/* the brief */}
      {draft && (
        <section className="rounded-xl border border-border/70 bg-card p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-[12px] font-semibold uppercase tracking-wide text-primary">
              {tt("dd42.briefTitle", lang)}
            </p>
            <div className="flex items-center gap-1">
              <button
                onClick={() => void copyDraft()}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11.5px] text-muted-foreground transition-colors hover:text-foreground focus-ring"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? tt("dd42.copiedWord", lang) : tt("dd42.copyWord", lang)}
              </button>
              <button
                onClick={download}
                className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11.5px] text-muted-foreground transition-colors hover:text-foreground focus-ring"
              >
                <Download className="h-3.5 w-3.5" /> {tt("dd42.download", lang)}
              </button>
              <VoicePicker lang={lang} variant="icon" />
              <SpeakButton text={draft.replace(/##\s*(English|العربية)/g, "")} className="p-1" />
            </div>
          </div>
          <div className="prose-note mt-2 text-[13px]">
            <Markdown content={draft} />
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">⚖ {tt("dd42.briefNote", lang)}</p>
        </section>
      )}
    </div>
  )
}
