"use client"

/** v42 — the progressive-generation runline: what the model is doing right
 *  now, how long it has been at it, and an honest Cancel button.
 *
 *  Used by every long generator that speaks the SSE progress protocol
 *  (the Closing Suite documents, the DD customizer, the program tailor,
 *  the ToC designer, the exam writer). The caller passes already-localized
 *  stage labels in the order its route emits them; the ticker marks
 *  done/current/pending and counts the elapsed seconds live. */

import { useEffect, useState } from "react"
import { Check, CircleDashed, Loader2, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function StageTicker({
  busy,
  labels,
  stage,
  startedAt,
  onCancel,
  cancelLabel,
  runningLabel,
}: {
  busy: boolean
  /** localized stage labels, in the order the route emits them */
  labels: string[]
  /** the latest stage event (i = ordinal, id = stable id) — null = waiting */
  stage: { i: number; id: string } | null
  /** ms timestamp of when the run started (for the elapsed clock) */
  startedAt: number
  onCancel: () => void
  cancelLabel: string
  runningLabel: string
}) {
  const [, setTick] = useState(0)

  useEffect(() => {
    if (!busy) return
    const t = setInterval(() => setTick((n) => n + 1), 1000)
    return () => clearInterval(t)
  }, [busy, startedAt])

  if (!busy) return null

  const elapsed = Math.max(0, Math.floor((Date.now() - startedAt) / 1000))
  const current = stage && stage.i >= 0 && stage.i < labels.length ? stage.i : stage ? labels.length - 1 : -1

  return (
    <div className="rounded-xl border border-primary/25 bg-primary/[0.04] p-3.5">
      <div className="flex items-center justify-between gap-2">
        <p className="flex items-center gap-1.5 text-[12.5px] font-semibold text-primary">
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
          {runningLabel}
          <span className="font-mono text-[11.5px] font-normal text-muted-foreground">
            {Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, "0")}
          </span>
        </p>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11.5px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-ring"
        >
          <X className="h-3 w-3" /> {cancelLabel}
        </button>
      </div>
      <ul className="mt-2.5 space-y-1">
        {labels.map((label, i) => {
          const done = current > i
          const active = current === i
          return (
            <li
              key={label + i}
              className={cn(
                "flex items-center gap-2 text-[12.5px] leading-relaxed transition-colors",
                done ? "text-muted-foreground" : active ? "text-foreground" : "text-muted-foreground/50"
              )}
            >
              {done ? (
                <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />
              ) : active ? (
                <Loader2 className="h-3.5 w-3.5 shrink-0 animate-spin text-primary" />
              ) : (
                <CircleDashed className="h-3.5 w-3.5 shrink-0" />
              )}
              {label}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
