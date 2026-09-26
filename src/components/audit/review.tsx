"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { tt } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ReviewCardClient } from "@/lib/audit-types"
import {
  BookOpenCheck,
  Layers,
  RotateCcw,
  Sparkles,
} from "lucide-react"

/** Shared queue loader (view + home card). */
export function useReviewQueue(limit = 20) {
  const [cards, setCards] = useState<ReviewCardClient[]>([])
  const [totalCards, setTotalCards] = useState(0)
  const [loading, setLoading] = useState(true)

  const reload = useCallback(async () => {
    const res = await fetch(`/api/review?limit=${limit}`)
    if (res.ok) {
      const data = (await res.json()) as { cards: ReviewCardClient[]; stats: { total: number } }
      setCards(data.cards)
      setTotalCards(data.stats.total)
    }
    setLoading(false)
  }, [limit])

  useEffect(() => {
    let alive = true
    void (async () => {
      const res = await fetch(`/api/review?limit=${limit}`)
      if (!res.ok) {
        if (alive) setLoading(false)
        return
      }
      const data = (await res.json()) as { cards: ReviewCardClient[]; stats: { total: number } }
      if (!alive) return
      setCards(data.cards)
      setTotalCards(data.stats.total)
      setLoading(false)
    })()
    return () => {
      alive = false
    }
  }, [limit])

  return { cards, setCards, totalCards, loading, reload }
}

/** Flip a card: front (prompt) ↔ back (answer). Bilingual. */
function Flashcard({
  card,
  flipped,
  lang,
  onFlip,
}: {
  card: ReviewCardClient
  flipped: boolean
  lang: "en" | "ar"
  onFlip: () => void
}) {
  const useAr = lang === "ar" && card.frontAr && card.backAr
  const front = useAr ? card.frontAr! : card.front
  const back = useAr ? card.backAr! : card.back
  return (
    <button
      onClick={onFlip}
      className="block w-full rounded-2xl border bg-card p-6 text-start shadow-soft transition-colors hover:border-input focus-ring sm:p-8"
      dir="auto"
    >
      <div className="flex items-center justify-between text-[12px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          {card.kind === "question" ? <Sparkles className="h-3.5 w-3.5 text-primary" /> : <BookOpenCheck className="h-3.5 w-3.5 text-sage-deep" />}
          {card.kind === "question" ? card.title : tt("notes.arabicVersion", lang) === "Arabic version" ? "Lesson key point" : "نقطة أساسية"}
        </span>
        <span>
          {tt("review.nextIn", lang)} {card.intervalDays}
          {tt("review.days", lang)} · EF {card.ease.toFixed(1)}
        </span>
      </div>
      <p className={cn("mt-4 whitespace-pre-line font-serif leading-[1.75]", flipped ? "text-[15px]" : "text-[18px] font-semibold")}>
        {flipped ? back : front}
      </p>
      {!flipped && (
        <p className="mt-4 text-[12.5px] text-muted-foreground">↻ {tt("review.showAnswer", lang)}</p>
      )}
    </button>
  )
}

/** The four SM-2-lite grade buttons. */
function GradeButtons({
  lang,
  onGrade,
  disabled,
}: {
  lang: "en" | "ar"
  onGrade: (g: 0 | 1 | 2 | 3) => void
  disabled?: boolean
}) {
  const grades: { g: 0 | 1 | 2 | 3; key: string; cls: string }[] = [
    { g: 0, key: "review.again", cls: "border-primary/40 text-primary hover:bg-primary/10" },
    { g: 1, key: "review.hard", cls: "border-gold/50 text-gold-deep hover:bg-gold/10" },
    { g: 2, key: "review.good", cls: "border-sage/50 text-sage-deep hover:bg-sage/10" },
    { g: 3, key: "review.easy", cls: "border-olive/50 text-olive-deep hover:bg-olive/10" },
  ]
  return (
    <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
      {grades.map(({ g, key, cls }) => (
        <Button
          key={g}
          variant="outline"
          disabled={disabled}
          onClick={() => onGrade(g)}
          className={cn("h-10", cls)}
        >
          {tt(key, lang)}
        </Button>
      ))}
    </div>
  )
}

/** Full-page review session. */
export function ReviewSession() {
  const lang = useAppStore((s) => s.lang)
  const bootstrap = useAppStore((s) => s.bootstrap)
  const { cards, setCards, totalCards, loading, reload } = useReviewQueue(40)
  const [flipped, setFlipped] = useState(false)
  const [doneCount, setDoneCount] = useState(0)

  const dueInitially = useMemo(() => cards.length, [loading])  
  void dueInitially

  const grade = async (g: 0 | 1 | 2 | 3) => {
    const card = cards[0]
    if (!card) return
    await fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "grade", itemId: card.id, grade: g }),
    })
    setFlipped(false)
    setDoneCount((c) => c + 1)
    setCards((cs) => cs.slice(1))
    if (cards.length <= 1) void bootstrap()
  }

  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BookOpenCheck className="h-5 w-5" />
          </span>
          <div>
            <h1 className="font-serif text-[26px] font-semibold tracking-tight">{tt("review.title", lang)}</h1>
            <p className="text-[13.5px] text-muted-foreground">{tt("review.subtitle", lang)}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-4 text-[13px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-primary" />
            <b className="font-semibold text-foreground">{cards.length}</b> {tt("review.dueNow", lang)}
          </span>
          <span>
            <b className="font-semibold text-foreground">{totalCards}</b> {tt("review.totalCards", lang)}
          </span>
          {doneCount > 0 && (
            <span className="flex items-center gap-1.5 text-sage-deep">
              <RotateCcw className="h-3.5 w-3.5" /> +{doneCount}
            </span>
          )}
        </div>
      </header>

      {loading ? (
        <div className="rounded-2xl border bg-card p-12 text-center text-sm text-muted-foreground shadow-soft">…</div>
      ) : cards.length === 0 ? (
        <div className="rounded-2xl border bg-card p-12 text-center shadow-soft">
          <div className="text-[32px]">✅</div>
          <h2 className="mt-3 font-serif text-[20px] font-semibold">{tt("review.allCaughtUp", lang)}</h2>
          <p className="mx-auto mt-2 max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
            {tt("review.allCaughtUpDesc", lang)}
          </p>
          {dueInitially > 0 && (
            <Button variant="outline" className="mt-5 h-9" onClick={() => void reload()}>
              <RotateCcw className="me-1.5 h-4 w-4" /> {tt("review.startReview", lang)}
            </Button>
          )}
        </div>
      ) : (
        <>
          <Flashcard card={cards[0]} flipped={flipped} lang={lang} onFlip={() => setFlipped((f) => !f)} />
          {flipped ? (
            <GradeButtons lang={lang} onGrade={(g) => void grade(g)} />
          ) : (
            <Button className="mt-5 h-10 w-full" onClick={() => setFlipped(true)}>
              {tt("review.showAnswer", lang)}
            </Button>
          )}
        </>
      )}
    </div>
  )
}

/** Compact Home card: due count + inline flip for the first card. */
export function ReviewHomeCard() {
  const lang = useAppStore((s) => s.lang)
  const navigate = useAppStore((s) => s.navigate)
  const { cards, loading, reload } = useReviewQueue(1)
  const [flipped, setFlipped] = useState(false)

  if (loading) return null

  if (cards.length === 0) {
    return (
      <div className="rounded-2xl border bg-card p-5 shadow-soft">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sage/12 text-sage-deep">
            <BookOpenCheck className="h-4.5 w-4.5 h-[18px] w-[18px]" />
          </span>
          <div className="min-w-0">
            <p className="text-[14px] font-semibold">{tt("review.homeDone", lang)}</p>
            <p className="truncate text-[12.5px] text-muted-foreground">{tt("review.subtitle", lang)}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border bg-card p-5 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <BookOpenCheck className="h-[18px] w-[18px]" />
          </span>
          <div>
            <p className="text-[14px] font-semibold">{tt("review.homeTitle", lang)}</p>
            <p className="text-[12.5px] text-muted-foreground">
              {cards.length}+ {tt("review.homeDue", lang)}
            </p>
          </div>
        </div>
        <Button size="sm" variant="outline" className="h-8" onClick={() => navigate("review")}>
          {tt("review.startReview", lang)}
        </Button>
      </div>
      <div className="mt-4">
        <Flashcard card={cards[0]} flipped={flipped} lang={lang} onFlip={() => setFlipped((f) => !f)} />
        {flipped && (
          <GradeButtons
            lang={lang}
            onGrade={(g) => {
              const card = cards[0]
              void fetch("/api/review", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action: "grade", itemId: card.id, grade: g }),
              }).then(() => {
                setFlipped(false)
                void reload()
              })
            }}
          />
        )}
      </div>
    </div>
  )
}
