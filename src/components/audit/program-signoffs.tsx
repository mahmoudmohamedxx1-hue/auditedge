"use client"

/** Sign-offs summary — one view of preparer/reviewer sign-off status across
 *  all 17 program sections (ISA 230 documentation discipline), plus the
 *  tick-off CSV export (evidence of work performed). */

import { useMemo, useState } from "react"
import { PROGRAM_SECTIONS } from "@/lib/program"
import { exportTickoffCsv, sectionProgress, type Engagement, type Signoff } from "@/lib/engagement"
import { cn } from "@/lib/utils"
import { fmtDate, SignoffEditor, type Lang } from "./program-shared"
import { CheckCircle2, ChevronDown, Download, PenLine } from "lucide-react"

const T = {
  title: { en: "Section sign-offs", ar: "اعتمادات الأقسام" },
  intro: {
    en: "ISA 230 requires the documentation to identify who prepared and who reviewed each section, and when. Sign each section off as you complete it — review before the report is dated.",
    ar: "يتطلب ISA 230 أن تحدد أوراق العمل مَن أعده ومَن راجعه ومتى. اعتمد كل قسم عند اكتماله — ويجب أن تتم المراجعة قبل تاريخ التقرير.",
  },
  prepared: { en: "Prepared by", ar: "أعده" },
  reviewed: { en: "Reviewed by", ar: "راجعه" },
  preparedCount: { en: "sections prepared", ar: "قسمًا معتمدًا للإعداد" },
  reviewedCount: { en: "sections reviewed", ar: "قسمًا معتمدًا للمراجعة" },
  exportCsv: { en: "Export tick-off status (CSV)", ar: "تصدير حالة التنفيذ (CSV)" },
  unsigned: { en: "—", ar: "—" },
  progress: { en: "Progress", ar: "التقدم" },
  edit: { en: "Sign / edit", ar: "اعتماد / تعديل" },
}

export function SignoffSummary({
  lang,
  eng,
  onSetSignoff,
}: {
  lang: Lang
  eng: Engagement
  onSetSignoff: (sectionId: string, patch: Partial<Signoff>) => void
}) {
  const t = (k: keyof typeof T) => T[k][lang]
  const [openId, setOpenId] = useState<string | null>(null)

  const rows = useMemo(
    () =>
      PROGRAM_SECTIONS.map((s) => ({
        section: s,
        prog: sectionProgress(eng, s.id),
        so: eng.signoffs[s.id],
      })),
    [eng]
  )
  const prepared = rows.filter((r) => r.so?.preparedBy && r.so?.preparedAt).length
  const reviewed = rows.filter((r) => r.so?.reviewedBy && r.so?.reviewedAt).length

  return (
    <div className="mt-5">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <PenLine className="h-5 w-5 text-primary" />
          </span>
          <div>
            <h2 className="font-serif text-[20px] font-semibold leading-tight tracking-tight">{t("title")}</h2>
            <p className="text-[12px] text-muted-foreground">
              {eng.client} · {eng.period} — {prepared}/{PROGRAM_SECTIONS.length} {t("preparedCount")} ·{" "}
              {reviewed}/{PROGRAM_SECTIONS.length} {t("reviewedCount")}
            </p>
          </div>
        </div>
        <button
          onClick={() => exportTickoffCsv(eng, lang)}
          className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-2.5 py-1.5 text-[12px] font-medium transition-colors hover:border-primary/30 hover:text-primary focus-ring"
        >
          <Download className="h-3.5 w-3.5" /> {t("exportCsv")}
        </button>
      </div>
      <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-muted-foreground">{t("intro")}</p>

      {/* section rows */}
      <div className="mt-4 overflow-hidden rounded-2xl border bg-card">
        {rows.map(({ section, prog, so }, i) => {
          const isOpen = openId === section.id
          const fullyPrepared = !!(so?.preparedBy && so?.preparedAt)
          const fullyReviewed = !!(so?.reviewedBy && so?.reviewedAt)
          return (
            <div key={section.id} className={cn(i > 0 && "border-t")}>
              <button
                onClick={() => setOpenId(isOpen ? null : section.id)}
                aria-expanded={isOpen}
                className="flex w-full flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-3 text-start transition-colors hover:bg-secondary/40 focus-ring"
              >
                <span className="w-14 shrink-0 font-mono text-[11px] text-muted-foreground">{section.code}</span>
                <span dir="auto" className="min-w-0 flex-1 truncate text-[13px] font-medium">
                  {lang === "ar" ? section.title.ar : section.title.en}
                </span>
                <span className="flex shrink-0 items-center gap-1.5 text-[11px] tabular-nums text-muted-foreground">
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5",
                      prog.pct === 100
                        ? "bg-sage/15 font-medium text-sage-deep"
                        : "bg-secondary"
                    )}
                  >
                    {prog.done + prog.na}/{prog.total} · {prog.pct}%
                  </span>
                </span>
                <span className="flex w-36 shrink-0 items-center gap-1.5 text-[11.5px]">
                  {fullyPrepared ? (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-sage-deep" />
                      <span className="truncate font-medium text-sage-deep">
                        {so?.preparedBy} · {fmtDate(so?.preparedAt, lang)}
                      </span>
                    </>
                  ) : (
                    <span className="text-muted-foreground/60">
                      {t("prepared")}: {t("unsigned")}
                    </span>
                  )}
                </span>
                <span className="flex w-36 shrink-0 items-center gap-1.5 text-[11.5px]">
                  {fullyReviewed ? (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-sage-deep" />
                      <span className="truncate font-medium text-sage-deep">
                        {so?.reviewedBy} · {fmtDate(so?.reviewedAt, lang)}
                      </span>
                    </>
                  ) : (
                    <span className="text-muted-foreground/60">
                      {t("reviewed")}: {t("unsigned")}
                    </span>
                  )}
                </span>
                <ChevronDown
                  className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform", isOpen && "rotate-180")}
                />
              </button>
              {isOpen && (
                <div className="border-t bg-secondary/20 px-4 py-3">
                  <SignoffEditor
                    signoff={so}
                    lang={lang}
                    onChange={(patch) => onSetSignoff(section.id, patch)}
                    showIncompleteHint={prog.pct < 100}
                    compact
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
