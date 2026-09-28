/** v24 — professional cover thumbnails for EVERY course.
 *
 *  The video-course catalog ships real YouTube thumbnails; the in-house
 *  catalog and the free-course links had only icons / flat gradients. This
 *  module gives every course a designed cover: a subject-tinted gradient,
 *  a deterministic ledger / hatch / dot pattern (varies per course so the
 *  grid never looks stamped), a watermark of the subject mark, the course
 *  code in a mono chip, level and category chips — the visual grammar of a
 *  professional course marketplace card.
 *
 *  Purely presentational: takes plain props, imports nothing from the
 *  component graph (no cycles), and renders the same cover in LTR/RTL. */
import { BookOpenCheck, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/* deterministic per-course variety                                     */
/* ------------------------------------------------------------------ */

/** Small string hash → a stable 32-bit int (same course, same pattern). */
function hashOf(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** Three overlay patterns — audit-ledger lines, a 45° hatch, a dot matrix.
 *  Picked by hash so a course grid shows all three but each course always
 *  keeps its own. */
export function coverPattern(seed: string): React.CSSProperties {
  const variant = hashOf(seed) % 3
  if (variant === 0)
    return {
      backgroundImage:
        "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 14px)",
    }
  if (variant === 1)
    return {
      backgroundImage:
        "repeating-linear-gradient(45deg, rgba(255,255,255,0.09) 0px, rgba(255,255,255,0.09) 1px, transparent 1px, transparent 12px)",
    }
  return {
    backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1.6px)",
    backgroundSize: "14px 14px",
  }
}

/** Full-strength gradient pairs per accent key (light tints would read as
 *  background, not as a cover). Legacy keys map to their successor. */
const COVER_GRADS: Record<string, string> = {
  terracotta: "from-primary to-clay-deep",
  olive: "from-olive-deep to-olive",
  sage: "from-sage-deep to-sage",
  plum: "from-plum-deep to-plum",
  sand: "from-gold-deep to-gold",
  clay: "from-clay-deep to-primary",
  // legacy keys
  emerald: "from-sage-deep to-sage",
  gold: "from-gold-deep to-gold",
}

function gradOf(accent: string): string {
  return COVER_GRADS[accent] ?? COVER_GRADS.terracotta
}

/* ------------------------------------------------------------------ */
/* the in-house course cover                                            */
/* ------------------------------------------------------------------ */

export function CourseCover({
  icon: Icon,
  accent,
  code,
  category,
  level,
  lessons,
  seed,
  compact = false,
  className,
}: {
  icon: LucideIcon
  accent: string
  code: string
  category: string
  level: string
  lessons: number
  seed: string
  compact?: boolean
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative block w-full overflow-hidden bg-gradient-to-br",
        gradOf(accent),
        compact ? "h-[72px]" : "h-[104px]",
        className
      )}
    >
      {/* deterministic pattern layer */}
      <span className="absolute inset-0" style={coverPattern(seed)} />
      {/* soft top-start highlight — gives the cover depth */}
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.24),transparent_58%)]" />
      {/* the spine — a darker band on the start edge, like a bound ledger */}
      <span className="absolute inset-y-0 start-0 w-1.5 bg-black/20" />

      {/* watermark of the subject mark */}
      <Icon
        className={cn(
          "absolute -bottom-3 -end-3 text-white/15 transition-transform duration-300 group-hover:scale-110",
          compact ? "h-16 w-16" : "h-24 w-24"
        )}
        strokeWidth={1.4}
      />

      {/* code chip (start) */}
      <span className="absolute start-3 top-2.5 rounded-md bg-black/30 px-1.5 py-0.5 font-mono text-[10.5px] font-semibold tracking-wide text-white backdrop-blur-[2px]">
        {code}
      </span>
      {/* level chip (end) */}
      <span className="absolute end-3 top-2.5 rounded-md bg-white/20 px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-[2px]">
        {level}
      </span>

      {/* bottom rail: category + lesson count */}
      {!compact && (
        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 drop-shadow-sm">
            {category}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-black/30 px-1.5 py-0.5 text-[10px] font-semibold tabular-nums text-white backdrop-blur-[2px]">
            <BookOpenCheck className="h-3 w-3" /> {lessons}
          </span>
        </span>
      )}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* the free link-course cover                                           */
/* ------------------------------------------------------------------ */

export function LinkCourseCover({
  icon: Icon,
  grad,
  label,
  provider,
  level,
  language,
  seed,
  className,
}: {
  icon: LucideIcon
  grad: string
  label: string
  provider: string
  level: string
  language: string
  seed: string
  className?: string
}) {
  /** two leading words of the provider become a monogram, e.g. "MIT" */
  const monogram = provider
    .replace(/[—–-].*$/, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("")
  return (
    <span
      aria-hidden
      className={cn(
        "relative flex h-[96px] items-center justify-center overflow-hidden bg-gradient-to-br",
        grad,
        className
      )}
    >
      <span className="absolute inset-0" style={coverPattern(seed)} />
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_75%_18%,rgba(255,255,255,0.22),transparent_55%)]" />
      <Icon className="h-8 w-8 text-white/90 drop-shadow-sm" strokeWidth={1.6} />
      {/* provider monogram watermark */}
      <span className="absolute -bottom-2 end-2 font-serif text-[44px] font-bold leading-none text-white/15">
        {monogram}
      </span>
      {/* subject mark — start bottom */}
      <span className="absolute bottom-1.5 start-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/85">
        {label}
      </span>
      {/* level chip */}
      <span className="absolute end-2.5 top-2 rounded bg-black/25 px-1.5 py-px text-[9.5px] font-semibold text-white/95 backdrop-blur-[2px]">
        {level}
      </span>
      {/* language chip — mono, start top */}
      <span className="absolute start-2.5 top-2 rounded bg-black/25 px-1.5 py-px font-mono text-[9.5px] font-semibold text-white/95 backdrop-blur-[2px]">
        {language}
      </span>
    </span>
  )
}
