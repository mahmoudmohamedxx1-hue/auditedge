"use client"

import { useEffect, useRef, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { SELECTABLE_MODELS, DEFAULT_MODEL, type AiModelInfo } from "@/lib/models"
import type { Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { ChevronDown, KeyRound, Sparkles, Zap } from "lucide-react"

/** Compact AI engine switcher (v22: keyless community tier + Z.ai key tier).
 *  Shared by the AI Tutor header, the floating assistant and anywhere the
 *  engine choice matters. Selection persists in the app store. */

const LABELS = {
  keyless: { en: "Keyless", ar: "بدون مفتاح" },
  free: { en: "Free", ar: "مجاني" },
  plus: { en: "Plus", ar: "Plus" },
} as const

const GROUPS = {
  keyless: { en: "Keyless — zero setup, always on", ar: "بدون مفتاح — بدون إعداد، تعمل دائمًا" },
  zai: { en: "Your Z.ai key", ar: "مفتاح Z.ai الخاص بك" },
} as const

function TierBadge({ tier, lang }: { tier: AiModelInfo["tier"]; lang: Lang }) {
  return (
    <span
      className={cn(
        "shrink-0 rounded px-1.5 py-0.5 font-mono text-[9px] font-semibold uppercase",
        tier === "keyless"
          ? "bg-olive/20 text-olive-deep"
          : tier === "free"
            ? "bg-sage/20 text-sage-deep"
            : "bg-gold/25 text-gold-deep"
      )}
    >
      {LABELS[tier][lang]}
    </span>
  )
}

export function ModelPicker({
  lang,
  variant = "header",
}: {
  lang: Lang
  variant?: "header" | "chip"
}) {
  const aiModel = useAppStore((s) => s.aiModel)
  const setAiModel = useAppStore((s) => s.setAiModel)
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const current = SELECTABLE_MODELS.find((m) => m.id === aiModel) ?? SELECTABLE_MODELS[0]

  // close on outside click
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onDown)
    return () => document.removeEventListener("mousedown", onDown)
  }, [open])

  const keyless = SELECTABLE_MODELS.filter((m) => m.group === "keyless")
  const keyed = SELECTABLE_MODELS.filter((m) => m.group === "zai")

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border transition-colors focus-ring",
          variant === "header"
            ? "h-8 px-2.5 text-[11.5px] font-medium"
            : "h-7 px-2 text-[11px]"
        )}
        title={current.note[lang]}
      >
        <Sparkles className="h-3 w-3 shrink-0 text-primary" />
        <span className="max-w-[110px] truncate">{current.name}</span>
        <TierBadge tier={current.tier} lang={lang} />
        <ChevronDown
          className={cn("h-3 w-3 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute z-30 mt-1.5 max-h-[380px] w-[268px] overflow-y-auto overflow-hidden rounded-xl border bg-popover shadow-lg end-0"
        >
          {(
            [
              ["keyless", keyless, Zap],
              ["zai", keyed, KeyRound],
            ] as const
          ).map(([group, models, Icon]) =>
            models.length === 0 ? null : (
              <div key={group}>
                <div className="flex items-center gap-1.5 border-b bg-secondary/50 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  <Icon className="h-3 w-3" />
                  {GROUPS[group][lang]}
                </div>
                {models.map((m) => (
                  <button
                    key={m.id}
                    role="option"
                    aria-selected={m.id === aiModel}
                    onClick={() => {
                      setAiModel(m.id)
                      setOpen(false)
                    }}
                    className={cn(
                      "flex w-full flex-col items-start gap-0.5 border-b px-3.5 py-2.5 text-start transition-colors last:border-0 hover:bg-secondary/60",
                      m.id === aiModel && "bg-primary/[0.07]"
                    )}
                  >
                    <span className="flex w-full items-center justify-between gap-2">
                      <span className="text-[13px] font-semibold">
                        {m.name}
                        {m.id === DEFAULT_MODEL && (
                          <span className="ms-1.5 rounded bg-primary/10 px-1 py-px text-[9px] font-semibold uppercase text-primary">
                            {lang === "ar" ? "افتراضي" : "default"}
                          </span>
                        )}
                      </span>
                      <TierBadge tier={m.tier} lang={lang} />
                    </span>
                    <span className="text-[11.5px] leading-snug text-muted-foreground">{m.note[lang]}</span>
                  </button>
                ))}
              </div>
            )
          )}
        </div>
      )}
    </div>
  )
}
