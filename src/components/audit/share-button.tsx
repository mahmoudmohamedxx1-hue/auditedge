"use client"

/**
 * v32 — ShareButton: copies (or natively shares) the current page's deep link.
 *
 * Every page of the app now lives at its own URL (#/course/…, #/ifrs?std=…,
 * #/exam?paper=…), so this button is the universal "send this page to a
 * friend" affordance: on mobile it opens the native share sheet, everywhere
 * else it copies the link to the clipboard with a confirmation toast.
 */

import { useState } from "react"
import { toast } from "sonner"
import { Check, Link2, Share2 } from "lucide-react"
import type { VariantProps } from "class-variance-authority"
import { Button } from "@/components/ui/button"
import { useAppStore } from "@/store/useAppStore"
import { tt } from "@/lib/i18n"
import type { ViewName } from "@/lib/audit-types"
import { cn } from "@/lib/utils"

type BtnVariant = VariantProps<typeof Button>["variant"]
type BtnSize = VariantProps<typeof Button>["size"]

export function ShareButton({
  url,
  title,
  variant = "outline",
  size = "sm",
  label,
  className,
}: {
  /** Defaults to the current page's URL; pass a built one to share another page. */
  url?: string
  /** Title for the native share sheet (defaults to the site + view name). */
  title?: string
  /** Show a text label beside the icon. */
  label?: string
  variant?: BtnVariant
  size?: BtnSize
  className?: string
}) {
  const lang = useAppStore((s) => s.lang)
  const view = useAppStore((s) => s.view)
  const [copied, setCopied] = useState(false)

  const share = async () => {
    const href = url ?? (typeof window !== "undefined" ? window.location.href : "")
    if (!href) return
    const shareTitle = title ?? `${tt("share32.site", lang)} — ${viewTitle(view, lang)}`
    // 1) native share sheet where the platform offers one (mobile / desktop)
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: shareTitle, url: href })
        return
      }
    } catch (err) {
      // AbortError = the user dismissed the sheet — not a failure; anything
      // else falls through to the clipboard so the link is never lost
      if ((err as DOMException)?.name === "AbortError") return
    }
    // 2) clipboard copy + toast
    try {
      await navigator.clipboard.writeText(href)
    } catch {
      copyViaTextarea(href)
    }
    setCopied(true)
    toast.success(tt("share32.copied", lang), { description: href })
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={() => void share()}
      title={tt("share32.share", lang)}
      className={cn("h-9 print:hidden", className)}
    >
      {copied ? (
        <Check className="h-4 w-4 text-sage-deep" />
      ) : label ? (
        <Share2 className="h-4 w-4" />
      ) : (
        <Link2 className="h-4 w-4" />
      )}
      {label && <span>{label}</span>}
    </Button>
  )
}

/** Small square icon-only variant for tight bars (sidebar / mobile header). */
export function ShareIconButton({
  className,
  small = false,
}: {
  className?: string
  /** 28px square (sidebar full mode) instead of 7×7 utility sizing. */
  small?: boolean
}) {
  const lang = useAppStore((s) => s.lang)
  const view = useAppStore((s) => s.view)
  const [copied, setCopied] = useState(false)

  const share = async () => {
    const href = typeof window !== "undefined" ? window.location.href : ""
    if (!href) return
    try {
      if (navigator.share) {
        await navigator.share({ title: `${tt("share32.site", lang)} — ${viewTitle(view, lang)}`, url: href })
        return
      }
    } catch (err) {
      if ((err as DOMException)?.name === "AbortError") return
    }
    try {
      await navigator.clipboard.writeText(href)
    } catch {
      copyViaTextarea(href)
    }
    setCopied(true)
    toast.success(tt("share32.copied", lang))
    setTimeout(() => setCopied(false), 1600)
  }

  return (
    <button
      onClick={() => void share()}
      title={tt("share32.share", lang)}
      aria-label={tt("share32.share", lang)}
      className={cn(
        "flex items-center justify-center rounded-md border bg-card text-muted-foreground transition-colors hover:text-foreground focus-ring",
        small ? "h-7 w-7" : "h-7 w-7",
        className
      )}
    >
      {copied ? <Check className="h-3.5 w-3.5 text-sage-deep" /> : <Link2 className="h-3.5 w-3.5" />}
    </button>
  )
}

/** Legacy clipboard fallback for non-secure contexts. */
function copyViaTextarea(text: string) {
  const ta = document.createElement("textarea")
  ta.value = text
  ta.style.position = "fixed"
  ta.style.opacity = "0"
  document.body.appendChild(ta)
  ta.select()
  try {
    document.execCommand("copy")
  } catch {}
  document.body.removeChild(ta)
}

/* Local view-title (lightweight — the shell keeps its own richer copy). */
function viewTitle(view: ViewName, lang: "en" | "ar"): string {
  switch (view) {
    case "ai":
      return tt("nav.aiTutor", lang)
    case "courses":
    case "course":
    case "lesson":
    case "quiz":
      return tt("nav.courses", lang)
    case "exam":
      return tt("nav20.exam", lang)
    case "ifrs":
      return tt("nav30.ifrs", lang)
    case "review":
      return tt("nav20.review", lang)
    case "simulation":
      return tt("nav20.simulation", lang)
    case "podcast":
      return tt("nav20.podcast", lang)
    case "library":
      return tt("nav.library", lang)
    case "program":
      return tt("nav.program", lang)
    case "sectors":
      return tt("nav.sectors", lang)
    case "team":
      return tt("nav20.analytics", lang)
    default:
      return tt("nav.home", lang)
  }
}
