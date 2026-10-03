"use client"

/**
 * v30 — IfrsSheet: renders one IFRS standard summary as a handwritten
 * study-notes sheet — the web rendition of the user's IFRS 15 notes PDF.
 *
 * Paper: ruled lines + a red margin line (globals.css .ifrs-paper).
 * Inks: graphite for the body, red pen for asterisk headings, numbers,
 * outcomes and the wavy-underlined exam tips. English body uses Caveat
 * (cursive), Arabic uses Aref Ruqaa (the everyday Arabic handwriting
 * style) — and the `note` blocks render the OTHER language beside the
 * main body, exactly like the margin annotations in the notes PDF.
 */

import type { Block, Bi, TreeOutcome } from "@/lib/ifrs/types"
import { pick, type Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import { PenLine } from "lucide-react"

/* ---------- tiny shared pieces ---------- */

/** Red-asterisk section heading — * Objective * — the notes' signature. */
function AsteriskHeading({ text, lang }: { text: Bi; lang: Lang }) {
  return (
    <h3
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={cn(
        "ifrs-ink-red mt-9 text-center text-[25px] font-semibold leading-snug sm:text-[28px]",
        lang === "ar" ? "ifrs-hand-ar" : "ifrs-hand-en"
      )}
    >
      <span aria-hidden className="me-2">
        *
      </span>
      {pick(text, lang)}
      <span aria-hidden className="ms-2">
        *
      </span>
    </h3>
  )
}

/** Handwriting font/size per language (Caveat needs a bigger base size). */
const ink = (lang: Lang) => (lang === "ar" ? "ifrs-hand-ar text-[17.5px]" : "ifrs-hand-en text-[21px]")

/** The other-language margin annotation (Arabic notes beside the English
 *  body — and vice-versa), faded like pencil notes in the margin. */
function MarginNote({ text, lang }: { text: Bi; lang: Lang }) {
  const other: Lang = lang === "en" ? "ar" : "en"
  return (
    <p
      dir={other === "ar" ? "rtl" : "ltr"}
      className={cn(
        "ifrs-ink-soft my-1.5 max-w-[92%] rounded-e-lg border-s-2 ps-3 text-[16px] sm:text-[17px]",
        "border-[color:var(--note-red-soft)]/50",
        other === "ar" ? "ifrs-hand-ar" : "ifrs-hand-en"
      )}
    >
      {pick(text, other)}
    </p>
  )
}

/** A hand-drawn wobble box (the notes' rectangles). */
function Wobble({
  children,
  red,
  className,
  dir,
}: {
  children: React.ReactNode
  red?: boolean
  className?: string
  dir?: "ltr" | "rtl"
}) {
  return (
    <div
      dir={dir}
      className={cn(
        "px-4 py-2 text-center",
        red ? "ifrs-wobble-red ifrs-ink-red" : "ifrs-wobble",
        className
      )}
    >
      {children}
    </div>
  )
}

/** One branch row: condition box → outcome box (the decision trees). */
function BranchRow({
  when,
  then,
  children,
  lang,
  depth,
}: {
  when: Bi
  then: TreeOutcome
  children?: React.ReactNode
  lang: Lang
  depth: number
}) {
  const red = then.red === true
  return (
    <div className="ms-3 sm:ms-6" style={{ marginInlineStart: depth ? depth * 18 : undefined }}>
      <div className="flex flex-col items-stretch gap-1 py-1.5 sm:flex-row sm:items-center sm:gap-3">
        <Wobble className={cn(ink(lang), "grow sm:max-w-[52%]")} dir={lang === "ar" ? "rtl" : "ltr"}>
          {pick(when, lang)}
        </Wobble>
        <span
          aria-hidden
          className="ifrs-ink-red ifrs-hand-en mx-auto select-none text-[22px] leading-none sm:mx-0"
        >
          →
        </span>
        <Wobble
          red={red}
          className={cn(ink(lang), red && "font-semibold", "grow sm:max-w-[48%]")}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {pick(then, lang)}
        </Wobble>
      </div>
      {children}
    </div>
  )
}

/** T-account journal block — the notes' Dr/Cr columns. */
function JournalTable({
  title,
  rows,
  lang,
}: {
  title?: Bi
  rows: { dr?: Bi; cr?: Bi; red?: boolean }[]
  lang: Lang
}) {
  const rtl = lang === "ar"
  return (
    <figure className="my-4">
      {title && (
        <figcaption
          dir={rtl ? "rtl" : "ltr"}
          className={cn("ifrs-ink-soft mb-1", ink(lang))}
        >
          {pick(title, lang)}:
        </figcaption>
      )}
      <table className="ifrs-taccount w-full max-w-xl" dir="ltr">
        <thead>
          <tr className={cn("ifrs-ink-red", ink(lang))}>
            <th className="w-1/2 text-start text-[18px] font-semibold">Dr</th>
            <th className="ifrs-tbar w-1/2 text-start text-[18px] font-semibold">Cr</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={cn(ink(lang), r.red && "ifrs-ink-red font-semibold")}>
              <td className="align-baseline text-start">{r.dr ? pick(r.dr, lang) : ""}</td>
              <td className="ifrs-tbar align-baseline text-start">{r.cr ? pick(r.cr, lang) : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}

/* ---------- the sheet ---------- */

export function IfrsBlockView({ block, lang }: { block: Block; lang: Lang }) {
  switch (block.kind) {
    case "h":
      return <AsteriskHeading text={block.text} lang={lang} />
    case "p":
      return (
        <p dir={lang === "ar" ? "rtl" : "ltr"} className={cn("my-2", ink(lang))}>
          {pick(block.text, lang)}
        </p>
      )
    case "note":
      return <MarginNote text={block.text} lang={lang} />
    case "list":
      return (
        <ul className="my-2 space-y-0.5">
          {block.items.map((item, i) => (
            <li key={i} dir={lang === "ar" ? "rtl" : "ltr"} className={cn("flex gap-2.5", ink(lang))}>
              <span aria-hidden className="ifrs-ink-red select-none font-bold">
                •
              </span>
              <span className="min-w-0">{pick(item, lang)}</span>
            </li>
          ))}
        </ul>
      )
    case "steps":
      return (
        <div className="my-2">
          {block.title && <AsteriskHeading text={block.title} lang={lang} />}
          <ol className="space-y-1.5">
            {block.items.map((item, i) => (
              <li key={i} dir={lang === "ar" ? "rtl" : "ltr"} className={cn("flex items-start gap-3", ink(lang))}>
                <span
                  aria-hidden
                  className="ifrs-wobble-red ifrs-ink-red mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[15px] font-bold leading-none"
                >
                  {i + 1}
                </span>
                <span className="min-w-0 pt-0.5">{pick(item, lang)}</span>
              </li>
            ))}
          </ol>
        </div>
      )
    case "tree":
      return (
        <div className="my-5">
          {block.title && <AsteriskHeading text={block.title} lang={lang} />}
          <div className="flex justify-center">
            <Wobble
              className={cn(ink(lang), "max-w-xl grow font-semibold sm:grow-0")}
              dir={lang === "ar" ? "rtl" : "ltr"}
            >
              {pick(block.root, lang)}
            </Wobble>
          </div>
          <div className="ifrs-ink-red ifrs-hand-en select-none text-center text-[22px] leading-none" aria-hidden>
            ↓
          </div>
          <div className="space-y-1">
            {block.branches.map((b, i) => (
              <BranchRow key={i} when={b.when} then={b.then} lang={lang} depth={0}>
                {b.children?.length ? (
                  <div className="space-y-1 border-s border-dashed border-[color:var(--note-box)] ps-2">
                    {b.children.map((c, j) => (
                      <BranchRow key={j} when={c.when} then={c.then} lang={lang} depth={1}>
                        {c.children?.map((g, k) => (
                          <BranchRow key={k} when={g.when} then={g.then} lang={lang} depth={2} />
                        ))}
                      </BranchRow>
                    ))}
                  </div>
                ) : null}
              </BranchRow>
            ))}
          </div>
        </div>
      )
    case "journal":
      return <JournalTable title={block.title} rows={block.rows} lang={lang} />
    case "formula":
      return (
        <div className="my-4">
          {block.title && <AsteriskHeading text={block.title} lang={lang} />}
          <div className="space-y-0.5">
            {block.lines.map((line, i) => (
              <p
                key={i}
                dir={lang === "ar" ? "rtl" : "ltr"}
                className={cn(
                  ink(lang),
                  "text-[19px] sm:text-[22px]",
                  lang === "en" && "text-[22px] sm:text-[25px]"
                )}
              >
                {pick(line, lang)}
              </p>
            ))}
          </div>
        </div>
      )
    case "tip":
      return (
        <p
          dir={lang === "ar" ? "rtl" : "ltr"}
          className={cn("my-4 flex items-start gap-2.5", ink(lang))}
        >
          <PenLine aria-hidden className="ifrs-ink-red mt-1 h-[18px] w-[18px] shrink-0" />
          <span className="ifrs-wavy">{pick(block.text, lang)}</span>
        </p>
      )
    case "example":
      return (
        <div className="my-4">
          <div className="ifrs-wobble-red inline-block px-5 py-3">
            <p
              dir={lang === "ar" ? "rtl" : "ltr"}
              className={cn("ifrs-ink-red mb-1 font-semibold", ink(lang))}
            >
              {pick(block.title, lang)}
            </p>
            <div className="space-y-0.5">
              {block.lines.map((line, i) => (
                <p key={i} dir={lang === "ar" ? "rtl" : "ltr"} className={ink(lang)}>
                  {pick(line, lang)}
                </p>
              ))}
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}

export function IfrsSheet({
  code,
  title,
  effective,
  replaces,
  flagship,
  blocks,
  lang,
  showNotes,
}: {
  code: string
  title: Bi
  effective: Bi
  replaces?: Bi
  flagship?: boolean
  blocks: Block[]
  lang: Lang
  showNotes: boolean
}) {
  const rtl = lang === "ar"
  return (
    <article className="ifrs-paper print:border-0 rounded-lg py-8 shadow-pop pe-5 ps-16 sm:pe-8 sm:ps-20 print:shadow-none">
      {/* sheet title block */}
      <header className="mb-6">
        <p className="ifrs-ink-soft ifrs-hand-en mb-1 text-[15px] tracking-wide" dir="ltr">
          — {code} —
        </p>
        <h2
          dir={rtl ? "rtl" : "ltr"}
          className={cn(
            "font-bold",
            rtl ? "ifrs-hand-ar text-[26px] leading-[1.7]" : "ifrs-hand-en text-[34px] leading-tight sm:text-[38px]"
          )}
        >
          {pick(title, lang)}
        </h2>
        <p dir={rtl ? "rtl" : "ltr"} className={cn("ifrs-ink-soft mt-1 text-[15px]", ink(lang))}>
          {pick(effective, lang)}
        </p>
        {replaces && (
          <p dir={rtl ? "rtl" : "ltr"} className={cn("ifrs-ink-red mt-0.5 text-[15px] font-semibold", ink(lang))}>
            {pick(replaces, lang)}
          </p>
        )}
        {flagship && (
          <p dir={rtl ? "rtl" : "ltr"} className="ifrs-ink-red ifrs-hand-en mt-1 text-[16px]" aria-hidden>
            ★ ★ ★
          </p>
        )}
      </header>

      {/* the notes themselves */}
      <div dir={rtl ? "rtl" : "ltr"} className="max-w-3xl">
        {blocks.map((block, i) =>
          block.kind === "note" && !showNotes ? null : <IfrsBlockView key={i} block={block} lang={lang} />
        )}
      </div>
    </article>
  )
}
