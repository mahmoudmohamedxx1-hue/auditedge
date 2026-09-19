"use client"

/** Shared building blocks for the Audit Program tabs (program / PBC /
 *  findings / sign-offs) — UI language type, date & EGP formatting, the
 *  ISA 230 sign-off editor and the section picker. */

import { cn } from "@/lib/utils"
import { PROGRAM_SECTIONS } from "@/lib/program"
import type { Signoff } from "@/lib/engagement"
import { CheckCircle2, PenLine, X } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

/** UI language for the bilingual Audit Program */
export type Lang = "en" | "ar"

/* ------------------------------------------------------------------ */
/* formatting                                                          */
/* ------------------------------------------------------------------ */

export function fmtDate(ts: number | undefined, lang: Lang): string {
  if (!ts) return ""
  return new Intl.DateTimeFormat(lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB", {
    day: "numeric",
    month: "short",
  }).format(ts)
}

export function fmtNum(n: number): string {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n)
}

export function fmtEgp(n: number | undefined, lang: Lang): string {
  if (typeof n !== "number" || !isFinite(n)) return "—"
  return lang === "ar" ? `${fmtNum(n)} ج.م` : `EGP ${fmtNum(n)}`
}

/* ------------------------------------------------------------------ */
/* small inputs                                                        */
/* ------------------------------------------------------------------ */

export function TextInput({
  value,
  onChange,
  placeholder,
  className,
  mono,
  dirAuto,
  ariaLabel,
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  className?: string
  mono?: boolean
  dirAuto?: boolean
  ariaLabel?: string
}) {
  return (
    <input
      type="text"
      value={value}
      dir={dirAuto ? "auto" : undefined}
      aria-label={ariaLabel}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      maxLength={160}
      className={cn(
        "h-9 w-full min-w-0 rounded-lg border bg-background px-2.5 text-[13px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40",
        mono && "font-mono text-[12.5px]",
        className
      )}
    />
  )
}

export function NumInput({
  value,
  onChange,
  placeholder,
  ariaLabel,
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  ariaLabel?: string
}) {
  return (
    <input
      type="number"
      dir="ltr"
      inputMode="decimal"
      aria-label={ariaLabel}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder ?? "0"}
      className="h-9 w-full min-w-0 rounded-lg border bg-background px-2.5 text-[13px] tabular-nums outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/40"
    />
  )
}

/* ------------------------------------------------------------------ */
/* section picker                                                      */
/* ------------------------------------------------------------------ */

export function SectionSelect({
  value,
  onChange,
  lang,
  anyLabel,
}: {
  value: string
  onChange: (v: string) => void
  lang: Lang
  /** when set, adds an "all sections" option with this label and the value "all" */
  anyLabel?: string
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-9 min-w-0 rounded-lg border bg-background text-[13px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="max-h-72">
        {anyLabel && (
          <SelectItem value="all" className="text-[13px]">
            {anyLabel}
          </SelectItem>
        )}
        {PROGRAM_SECTIONS.map((s) => (
          <SelectItem key={s.id} value={s.id} className="text-[13px]">
            <span className="font-mono text-[11px] text-muted-foreground">{s.code}</span>
            <span dir="auto">{lang === "ar" ? s.title.ar : s.title.en}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

/* ------------------------------------------------------------------ */
/* ISA 230 sign-off editor                                             */
/* ------------------------------------------------------------------ */

const SO = {
  title: { en: "Section sign-off · ISA 230", ar: "اعتماد القسم · ISA 230" },
  prepared: { en: "Prepared by", ar: "أعده" },
  reviewed: { en: "Reviewed by", ar: "راجعه" },
  sign: { en: "Sign", ar: "اعتماد" },
  clear: { en: "Clear", ar: "مسح" },
  unsigned: { en: "not signed", ar: "غير معتمد" },
  incomplete: {
    en: "Section is not yet 100% resolved — consider completing the open procedures before signing off.",
    ar: "القسم لم يكتمل 100% بعد — يُفضَّل إتمام الإجراءات المفتوحة قبل الاعتماد.",
  },
  initialsPh: { en: "Initials (e.g. MA)", ar: "الأحرف (مثل MA)" },
}

export function SignoffEditor({
  signoff,
  lang,
  onChange,
  showIncompleteHint,
  compact,
}: {
  signoff: Signoff | undefined
  lang: Lang
  onChange: (patch: Partial<Signoff>) => void
  showIncompleteHint?: boolean
  compact?: boolean
}) {
  const t = (k: keyof typeof SO) => SO[k][lang]
  const rtl = lang === "ar"

  const row = (
    role: "prepared" | "reviewed",
    label: string,
    by: string | undefined,
    at: number | undefined
  ) => (
    <div className="flex min-w-0 flex-wrap items-center gap-2">
      <span className="w-20 shrink-0 text-[12px] font-medium text-muted-foreground">{label}</span>
      <TextInput
        value={by ?? ""}
        onChange={(v) => onChange({ [`${role}By`]: v } as Partial<Signoff>)}
        placeholder={t("initialsPh")}
        mono
        className="w-28"
        ariaLabel={label}
      />
      <button
        onClick={() => onChange({ [`${role}At`]: Date.now() } as Partial<Signoff>)}
        disabled={!by?.trim()}
        className="inline-flex h-9 items-center gap-1.5 rounded-lg border px-2.5 text-[12px] font-medium transition-colors hover:border-primary/40 hover:text-primary focus-ring disabled:opacity-40"
      >
        <PenLine className="h-3.5 w-3.5" />
        {at ? fmtDate(at, lang) : t("sign")}
      </button>
      {(by || at) && (
        <button
          onClick={() =>
            onChange({ [`${role}By`]: undefined, [`${role}At`]: undefined } as Partial<Signoff>)
          }
          className="inline-flex h-9 items-center gap-1 rounded-lg px-2 text-[12px] text-muted-foreground transition-colors hover:text-destructive focus-ring"
        >
          <X className="h-3.5 w-3.5" /> {t("clear")}
        </button>
      )}
      {by && !at && <span className="text-[11.5px] text-amber-600">{t("unsigned")}</span>}
      {by && at && (
        <span className="inline-flex items-center gap-1 text-[12px] font-medium text-sage-deep">
          <CheckCircle2 className="h-3.5 w-3.5" /> {by} · {fmtDate(at, lang)}
        </span>
      )}
    </div>
  )

  return (
    <div className={cn("rounded-2xl border bg-card", compact ? "p-3" : "p-4")}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {t("title")}
      </p>
      <div className="mt-2.5 space-y-2">
        {row("prepared", t("prepared"), signoff?.preparedBy, signoff?.preparedAt)}
        {row("reviewed", t("reviewed"), signoff?.reviewedBy, signoff?.reviewedAt)}
      </div>
      {showIncompleteHint && (
        <p className="mt-2.5 text-[11.5px] leading-relaxed text-amber-600" dir={rtl ? "rtl" : "ltr"}>
          ⚠ {t("incomplete")}
        </p>
      )}
    </div>
  )
}
