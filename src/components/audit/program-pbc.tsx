"use client"

/** PBC (prepared-by-client) tracker — every "document to obtain" from every
 *  Audit Program section in one request list with requested/received
 *  statuses, exportable as a client-facing CSV. */

import { useMemo, useState } from "react"
import { PROGRAM_SECTIONS } from "@/lib/program"
import { exportPbcCsv, pbcItems, pbcStats, type Engagement, type PbcState } from "@/lib/engagement"
import { cn } from "@/lib/utils"
import { fmtDate, SectionSelect, type Lang } from "./program-shared"
import { CheckCircle2, Clock, Download, FileText, Minus, Send } from "lucide-react"

const T = {
  title: { en: "PBC request tracker", ar: "متابعة المستندات المطلوبة من العميل" },
  intro: {
    en: "Every document the program asks you to obtain, across all sections. Mark items as requested and received — then export the list and send it to the client.",
    ar: "كل مستند يطلبه البرنامج منك عبر جميع الأقسام. علّم ما طُلب وما استُلم ثم صدّر القائمة وأرسلها للعميل.",
  },
  allSections: { en: "All sections", ar: "جميع الأقسام" },
  pending: { en: "Pending", ar: "لم تُطلب" },
  requested: { en: "Requested", ar: "مطلوبة" },
  received: { en: "Received", ar: "مستلمة" },
  na: { en: "N/A", ar: "لا ينطبق" },
  all: { en: "All", ar: "الكل" },
  exportCsv: { en: "Export client list (CSV)", ar: "تصدير قائمة العميل (CSV)" },
  requestedOn: { en: "Requested", ar: "طُلبت" },
  receivedOn: { en: "Received", ar: "استُلمت" },
  empty: { en: "No documents match this filter.", ar: "لا توجد مستندات مطابقة لهذا التصنيف." },
  items: { en: "items", ar: "بندًا" },
}

type Filter = "all" | "pending" | "requested" | "received" | "na"

export function PbcTracker({
  lang,
  eng,
  onSetPbc,
}: {
  lang: Lang
  eng: Engagement
  onSetPbc: (key: string, patch: Partial<PbcState> | null) => void
}) {
  const t = (k: keyof typeof T) => T[k][lang]
  const rtl = lang === "ar"
  const [filter, setFilter] = useState<Filter>("all")
  const [sectionId, setSectionId] = useState("all")

  const stats = useMemo(() => pbcStats(eng), [eng])
  const items = useMemo(() => pbcItems(eng), [eng])

  const visible = useMemo(
    () =>
      items.filter((it) => {
        if (sectionId !== "all" && it.sectionId !== sectionId) return false
        const st = it.state
        if (filter === "pending") return !st
        if (filter === "all") return true
        return st?.status === filter
      }),
    [items, filter, sectionId]
  )

  /** status setters with sensible toggle semantics */
  const setRequested = (key: string, st: PbcState | null) => {
    if (st?.status === "requested") onSetPbc(key, null) // back to pending
    else onSetPbc(key, { status: "requested", requestedAt: st?.requestedAt ?? Date.now() })
  }
  const setReceived = (key: string, st: PbcState | null) => {
    if (st?.status === "received") onSetPbc(key, { status: "requested", requestedAt: st.requestedAt }) // un-receive
    else
      onSetPbc(key, {
        status: "received",
        requestedAt: st?.requestedAt ?? Date.now(),
        receivedAt: Date.now(),
      })
  }
  const setNa = (key: string, st: PbcState | null) => {
    if (st?.status === "na") onSetPbc(key, null)
    else onSetPbc(key, { status: "na" })
  }

  const chips: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: t("all"), count: stats.total },
    { id: "pending", label: t("pending"), count: stats.pending },
    { id: "requested", label: t("requested"), count: stats.requested },
    { id: "received", label: t("received"), count: stats.received },
    { id: "na", label: t("na"), count: stats.na },
  ]

  return (
    <div className="mt-5">
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <FileText className="h-5 w-5 text-primary" />
          </span>
          <div>
            <h2 className="font-serif text-[20px] font-semibold leading-tight tracking-tight">{t("title")}</h2>
            <p className="text-[12px] text-muted-foreground">
              {eng.client} · {eng.period} — {stats.total} {t("items")}
            </p>
          </div>
        </div>
        <button
          onClick={() => exportPbcCsv(eng)}
          className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-2.5 py-1.5 text-[12px] font-medium transition-colors hover:border-primary/30 hover:text-primary focus-ring"
        >
          <Download className="h-3.5 w-3.5" /> {t("exportCsv")}
        </button>
      </div>
      <p className="mt-3 max-w-3xl text-[13px] leading-relaxed text-muted-foreground">{t("intro")}</p>

      {/* filters */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {chips.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors focus-ring",
              filter === c.id
                ? "border-primary/40 bg-primary/10 text-primary"
                : "bg-card text-foreground/70 hover:border-primary/30"
            )}
          >
            {c.label} <span className="tabular-nums opacity-70">{c.count}</span>
          </button>
        ))}
        <div className="ms-auto w-full max-w-56 min-w-44">
          <SectionSelect value={sectionId} onChange={setSectionId} lang={lang} anyLabel={t("allSections")} />
        </div>
      </div>

      {/* list grouped by section */}
      {visible.length === 0 ? (
        <p className="mt-6 text-[13px] text-muted-foreground">{t("empty")}</p>
      ) : (
        <div className="mt-4 space-y-4">
          {PROGRAM_SECTIONS.map((s) => {
            const rows = visible.filter((it) => it.sectionId === s.id)
            if (rows.length === 0) return null
            return (
              <div key={s.id} className="rounded-2xl border bg-card">
                <div className="flex items-center justify-between gap-2 border-b px-4 py-2.5">
                  <p dir="auto" className="text-[12.5px] font-semibold">
                    <span className="me-2 font-mono text-[11px] text-muted-foreground">{s.code}</span>
                    {lang === "ar" ? s.title.ar : s.title.en}
                  </p>
                  <span className="text-[11px] tabular-nums text-muted-foreground">
                    {rows.length} {t("items")}
                  </span>
                </div>
                <ul>
                  {rows.map((it) => {
                    const st = it.state
                    const isRequested = st?.status === "requested"
                    const isReceived = st?.status === "received"
                    const isNa = st?.status === "na"
                    return (
                      <li
                        key={it.key}
                        className={cn(
                          "flex flex-wrap items-center gap-x-3 gap-y-2 border-b px-4 py-2.5 last:border-b-0",
                          isReceived && "bg-sage/[0.05]",
                          isNa && "bg-secondary/30 opacity-70"
                        )}
                      >
                        <span dir="auto" className={cn("min-w-0 flex-1 text-[13px] leading-relaxed", isReceived && "text-muted-foreground", isNa && "line-through")}>
                          {lang === "ar" ? it.title.ar : it.title.en}
                        </span>
                        {(st?.requestedAt || st?.receivedAt) && (
                          <span className="shrink-0 text-[10.5px] tabular-nums text-muted-foreground" dir={rtl ? "rtl" : "ltr"}>
                            {st.requestedAt && (
                              <>
                                {t("requestedOn")} {fmtDate(st.requestedAt, lang)}
                              </>
                            )}
                            {st.requestedAt && st.receivedAt && " · "}
                            {st.receivedAt && (
                              <>
                                {t("receivedOn")} {fmtDate(st.receivedAt, lang)}
                              </>
                            )}
                          </span>
                        )}
                        <span className="flex shrink-0 items-center gap-1">
                          <StatusBtn
                            active={isRequested}
                            onClick={() => setRequested(it.key, st)}
                            lang={lang}
                            label={t("requested")}
                            icon={<Send className="h-3 w-3" />}
                            activeClass="border-amber-500/50 bg-amber-50 text-amber-800"
                          />
                          <StatusBtn
                            active={isReceived}
                            onClick={() => setReceived(it.key, st)}
                            lang={lang}
                            label={t("received")}
                            icon={<CheckCircle2 className="h-3 w-3" />}
                            activeClass="border-sage bg-sage/10 text-sage-deep"
                          />
                          <StatusBtn
                            active={isNa}
                            onClick={() => setNa(it.key, st)}
                            lang={lang}
                            label={t("na")}
                            icon={<Minus className="h-3 w-3" />}
                            activeClass="border-muted-foreground bg-secondary text-muted-foreground"
                          />
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      )}

      <p className="mt-4 flex items-center gap-1.5 text-[11.5px] text-muted-foreground">
        <Clock className="h-3.5 w-3.5" />
        {lang === "ar"
          ? "انقر الزر النشط مرة أخرى للتراجع (مستلمة ← مطلوبة ← لم تُطلب)."
          : "Click an active button again to step back (received → requested → pending)."}
      </p>
    </div>
  )
}

function StatusBtn({
  active,
  onClick,
  label,
  icon,
  activeClass,
  lang,
}: {
  active: boolean
  onClick: () => void
  label: string
  icon: React.ReactNode
  activeClass: string
  lang: Lang
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      title={label}
      className={cn(
        "inline-flex h-7 items-center gap-1 rounded-lg border px-2 text-[11px] font-medium transition-colors focus-ring",
        active ? activeClass : "text-muted-foreground hover:border-primary/30 hover:text-foreground"
      )}
    >
      {icon}
      <span className={lang === "ar" ? "hidden sm:inline" : "hidden md:inline"}>{label}</span>
    </button>
  )
}
