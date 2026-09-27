"use client"

import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { MATERIALITY_BENCHMARKS, RELIABILITY_FACTORS } from "@/lib/program"
import type { MaterialityMemo } from "@/lib/engagement"
import { Calculator, Layers, Save } from "lucide-react"

type Lang = "en" | "ar"

const T = {
  inputs: { en: "Financial figures (EGP)", ar: "الأرقام المالية (جنيه)" },
  benchmark: { en: "Choose the benchmark", ar: "اختر أساس الحساب" },
  pct: { en: "Percentage", ar: "النسبة" },
  results: { en: "Your thresholds", ar: "الحدود المحسوبة" },
  om: { en: "Overall materiality", ar: "الأهمية النسبية الإجمالية" },
  pm: { en: "Performance materiality", ar: "أهمية الأداء" },
  ctt: { en: "Clearly-trivial threshold", ar: "حد الأهمية التافه" },
  pmPct: { en: "Performance materiality %", ar: "نسبة أهمية الأداء" },
  cttPct: { en: "Clearly-trivial %", ar: "نسبة الأهمية التافه" },
  hint: {
    en: "Log every uncorrected misstatement above the clearly-trivial threshold in the SAD.",
    ar: "سجّل كل خطأ غير مصحح يتجاوز حد الأهمية التافه في ملخص فروق المراجعة.",
  },
  attrTitle: { en: "Attribute sampling (controls)", ar: "عينة السمات (الضوابط)" },
  musTitle: { en: "Monetary Unit Sampling (details)", ar: "عينة الوحدات النقدية (الفحص التفصيلي)" },
  risk: { en: "Sampling risk", ar: "مخاطرة العينة" },
  expected: { en: "Expected deviations", ar: "الانحرافات المتوقعة" },
  tdr: { en: "Tolerable deviation rate %", ar: "نسبة الانحراف المسموحة %" },
  pop: { en: "Population value (EGP)", ar: "قيمة المجتمع (جنيه)" },
  tm: { en: "Tolerable misstatement (EGP)", ar: "الخطأ المسموح (جنيه)" },
  sampleSize: { en: "Sample size", ar: "حجم العينة" },
  interval: { en: "Sampling interval", ar: "فاصل الاختيار" },
  formula: { en: "Formula", ar: "المعادلة" },
  items: { en: "items", ar: "بندًا" },
  enterFigures: { en: "Enter your figures to compute.", ar: "أدخل الأرقام لحساب النتائج." },
  rationale: { en: "Benchmark rationale (ISA 320.10 — why this benchmark?)", ar: "تعليل الأساس (ISA 320.10 — لماذا هذا الأساس؟)" },
  saveMemo: { en: "Save to this engagement", ar: "احفظ في هذه المهمة" },
  memoSaved: { en: "Materiality memo saved — the SAD now evaluates against it.", ar: "حُفظ مذكرة الأهمية — وسيقوّم ملخص الفروق بناءً عليها." },
  selectTitle: { en: "Systematic selection", ar: "الاختيار المنهجي" },
  popCount: { en: "Population count (items)", ar: "عدد بنود المجتمع" },
  pick: { en: "Examine items", ar: "افحص البنود" },
  seed: { en: "Seed", ar: "البذرة" },
  reroll: { en: "Re-roll", ar: "بذرة جديدة" },
  copyList: { en: "Copy list", ar: "انسخ القائمة" },
  selectHint: {
    en: "ISA 530 discipline: record method, size, seed and the selected items in the working paper.",
    ar: "انتظام ISA 530: وثّق المنهج والحجم والبذرة والبنود المختارة في ورقة العمل.",
  },
  copied: { en: "List copied", ar: "نُسخت القائمة" },
}

function fmt(n: number | null): string {
  if (n === null || !isFinite(n)) return "—"
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n)
}

function NumInput({
  value,
  onChange,
  placeholder,
  suffix,
  step,
  min,
  max,
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  suffix?: string
  step?: string
  min?: number
  max?: number
}) {
  return (
    <div className="flex items-center gap-1.5 rounded-lg border bg-background px-2.5 py-2 transition-colors focus-within:border-primary/40">
      <input
        type="number"
        dir="ltr"
        inputMode="decimal"
        value={value}
        step={step}
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "0"}
        className="w-full min-w-0 border-0 bg-transparent p-0 text-[13.5px] tabular-nums outline-none placeholder:text-muted-foreground/60"
      />
      {suffix && <span className="shrink-0 text-[11.5px] text-muted-foreground">{suffix}</span>}
    </div>
  )
}

export function MaterialityCalculator({
  lang,
  memo,
  onSave,
}: {
  lang: Lang
  /** v21: the engagement's saved memo — prefills the calculator */
  memo?: MaterialityMemo
  /** v21: persist the ISA 320 memo to the engagement */
  onSave?: (m: MaterialityMemo) => void
}) {
  const t = (k: keyof typeof T) => T[k][lang]
  const [figs, setFigs] = useState({ pbt: "", revenue: "", assets: "", equity: "" })
  const [bench, setBench] = useState<(typeof MATERIALITY_BENCHMARKS)[number]["key"]>("pbt")
  const [pct, setPct] = useState("5")
  const [pmPct, setPmPct] = useState("65")
  const [cttPct, setCttPct] = useState("5")
  const [rationale, setRationale] = useState(memo?.rationale ?? "")

  const values = useMemo(
    () => ({
      pbt: parseFloat(figs.pbt) || 0,
      revenue: parseFloat(figs.revenue) || 0,
      assets: parseFloat(figs.assets) || 0,
      equity: parseFloat(figs.equity) || 0,
    }),
    [figs]
  )
  const selected = MATERIALITY_BENCHMARKS.find((b) => b.key === bench)!
  const benchValue = values[bench] // works: keys align
  const pctNum = Math.min(Math.max(parseFloat(pct) || 0, 0.01), 100)
  const om = benchValue > 0 ? (benchValue * pctNum) / 100 : null
  const pmPctNum = Math.min(Math.max(parseFloat(pmPct) || 0, 1), 100)
  const cttPctNum = Math.min(Math.max(parseFloat(cttPct) || 0, 0.1), 100)
  const pm = om !== null ? (om * pmPctNum) / 100 : null
  const ctt = om !== null ? (om * cttPctNum) / 100 : null

  return (
    <div className="rounded-2xl border bg-card p-4 shadow-soft sm:p-5" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <Calculator className="h-4 w-4 text-primary" />
        </span>
        <h3 className="font-serif text-[15.5px] font-semibold tracking-tight">
          {lang === "ar" ? "حاسبة الأهمية النسبية" : "Materiality calculator"}
        </h3>
      </div>

      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {t("inputs")}
      </p>
      <div className="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
        {MATERIALITY_BENCHMARKS.map((b) => (
          <NumInput
            key={b.key}
            value={figs[b.key]}
            onChange={(v) => setFigs((f) => ({ ...f, [b.key]: v }))}
            placeholder={b.label[lang]}
          />
        ))}
      </div>

      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        {t("benchmark")}
      </p>
      <div className="mt-2 grid gap-2 md:grid-cols-2">
        {MATERIALITY_BENCHMARKS.map((b) => {
          const v = values[b.key]
          const active = bench === b.key
          return (
            <button
              key={b.key}
              onClick={() => {
                setBench(b.key)
                setPct(String(b.pct))
              }}
              className={cn(
                "rounded-xl border p-3 text-start transition-colors focus-ring",
                active ? "border-primary/40 bg-primary/[0.06]" : "bg-background/60 hover:border-input"
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[13px] font-medium">{b.label[lang]}</span>
                <span className="rounded-full bg-secondary px-1.5 py-0.5 text-[10.5px] tabular-nums text-muted-foreground">
                  {b.range}
                </span>
              </div>
              <p className="mt-1 text-[11.5px] leading-relaxed text-muted-foreground">{b.note[lang]}</p>
              {v > 0 && (
                <p className="mt-1.5 text-[12px] tabular-nums text-primary">
                  {b.pct}% = <b>{fmt((v * b.pct) / 100)}</b>
                </p>
              )}
            </button>
          )
        })}
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <div>
          <label className="text-[11.5px] font-medium text-muted-foreground">
            {t("pct")} — {selected.label[lang]}
          </label>
          <div className="mt-1">
            <NumInput value={pct} onChange={setPct} suffix="%" step="0.5" min={0.01} max={100} />
          </div>
        </div>
        <div>
          <label className="text-[11.5px] font-medium text-muted-foreground">{t("pmPct")}</label>
          <div className="mt-1 flex gap-1.5">
            {["50", "65", "75"].map((p) => (
              <button
                key={p}
                onClick={() => setPmPct(p)}
                className={cn(
                  "flex-1 rounded-lg border py-2 text-[12px] tabular-nums transition-colors focus-ring",
                  pmPct === p ? "border-primary/40 bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {p}%
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-[11.5px] font-medium text-muted-foreground">{t("cttPct")}</label>
          <div className="mt-1">
            <NumInput value={cttPct} onChange={setCttPct} suffix="%" step="0.5" min={0.1} max={100} />
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-2 rounded-xl border bg-secondary/40 p-3.5 sm:grid-cols-3">
        {[
          { label: t("om"), value: om, strong: true },
          { label: t("pm"), value: pm },
          { label: t("ctt"), value: ctt },
        ].map((r) => (
          <div key={r.label}>
            <p className="text-[11px] text-muted-foreground">{r.label}</p>
            <p
              className={cn(
                "mt-0.5 font-serif tabular-nums tracking-tight",
                r.strong ? "text-[20px] font-semibold text-primary" : "text-[17px] font-semibold"
              )}
            >
              {r.value === null ? t("enterFigures") : fmt(r.value)}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-2.5 text-[11.5px] leading-relaxed text-muted-foreground">💡 {t("hint")}</p>

      {/* v21: persist the ISA 320 memo to the engagement — the SAD and the
          close-out bundle evaluate against it */}
      {onSave && (
        <div className="mt-3 rounded-xl border border-primary/20 bg-primary/[0.04] p-3">
          <label className="text-[11.5px] font-medium text-muted-foreground">{t("rationale")}</label>
          <textarea
            dir="auto"
            value={rationale}
            onChange={(e) => setRationale(e.target.value)}
            rows={2}
            className="mt-1.5 w-full resize-none rounded-lg border bg-background p-2 text-[12.5px] leading-relaxed focus:border-primary/40 focus:outline-none"
            placeholder={lang === "ar" ? "لماذا هذا الأساس؟ (تركيز المستخدمين، استقرار الأساس، طبيعة المنشأة…)" : "Why this benchmark? (users' focus, stability of the benchmark, entity nature…)"}
          />
          <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
            <span className="text-[11px] text-muted-foreground">
              {memo
                ? lang === "ar"
                  ? `محفوظة: ${new Date(memo.savedAt).toLocaleDateString("ar-EG")}`
                  : `Saved: ${new Date(memo.savedAt).toLocaleDateString("en-GB")}`
                : ""}
            </span>
            <button
              onClick={() => {
                if (om === null || pm === null || ctt === null) return
                onSave({
                  om,
                  benchmark: selected.label.en,
                  pmPct: pmPctNum,
                  pm,
                  cttPct: cttPctNum,
                  ctt,
                  rationale: rationale.trim(),
                  savedAt: Date.now(),
                })
              }}
              disabled={om === null}
              className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-primary px-3 text-[12.5px] font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-ring disabled:opacity-40"
            >
              <Save className="h-3.5 w-3.5" /> {t("saveMemo")}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export function SamplingCalculator({ lang }: { lang: Lang }) {
  const t = (k: keyof typeof T) => T[k][lang]
  const [risk, setRisk] = useState<"10" | "5">("10")
  const [expected, setExpected] = useState(0)
  const [tdr, setTdr] = useState("5")
  const [pop, setPop] = useState("")
  const [tm, setTm] = useState("")
  // v21: systematic selection engine
  const [popCount, setPopCount] = useState("")
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 99999))

  const tdrNum = parseFloat(tdr) || 0
  const attrN = tdrNum > 0 ? Math.ceil(RELIABILITY_FACTORS[risk][expected] / (tdrNum / 100)) : null
  const popNum = parseFloat(pop) || 0
  const tmNum = parseFloat(tm) || 0
  const musN = popNum > 0 && tmNum > 0 ? Math.ceil((RELIABILITY_FACTORS[risk][expected] * popNum) / tmNum) : null
  const interval = musN && musN > 0 ? popNum / musN : null
  // v21: the selection uses whichever sample size is active (MUS if set,
  // else attribute), against the entered population count
  const activeSize = musN ?? attrN
  const popCountNum = Math.floor(parseFloat(popCount) || 0)
  const selection =
    activeSize !== null && popCountNum > 0 ? systematicSelection(popCountNum, activeSize, seed) : null

  const RiskButtons = (
    <div className="flex gap-1.5">
      {(["10", "5"] as const).map((r) => (
        <button
          key={r}
          onClick={() => setRisk(r)}
          className={cn(
            "flex-1 rounded-lg border py-2 text-[12px] tabular-nums transition-colors focus-ring",
            risk === r ? "border-primary/40 bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {r}%
        </button>
      ))}
    </div>
  )
  const ExpectedButtons = (
    <div className="flex gap-1.5">
      {[0, 1, 2, 3].map((e) => (
        <button
          key={e}
          onClick={() => setExpected(e)}
          className={cn(
            "flex-1 rounded-lg border py-2 text-[12px] tabular-nums transition-colors focus-ring",
            expected === e ? "border-primary/40 bg-primary/10 font-medium text-primary" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {e}
        </button>
      ))}
    </div>
  )

  return (
    <div className="grid gap-4 lg:grid-cols-2" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Attribute sampling */}
      <div className="rounded-2xl border bg-card p-4 shadow-soft sm:p-5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Layers className="h-4 w-4 text-primary" />
          </span>
          <h3 className="font-serif text-[15.5px] font-semibold tracking-tight">{t("attrTitle")}</h3>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div>
            <label className="text-[11.5px] font-medium text-muted-foreground">{t("risk")}</label>
            <div className="mt-1">{RiskButtons}</div>
          </div>
          <div>
            <label className="text-[11.5px] font-medium text-muted-foreground">{t("expected")}</label>
            <div className="mt-1">{ExpectedButtons}</div>
          </div>
          <div>
            <label className="text-[11.5px] font-medium text-muted-foreground">{t("tdr")}</label>
            <div className="mt-1">
              <NumInput value={tdr} onChange={setTdr} suffix="%" step="0.5" min={0.1} max={100} />
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-xl border bg-secondary/40 p-3.5">
          <p className="text-[11px] text-muted-foreground">{t("sampleSize")}</p>
          <p className="mt-0.5 font-serif text-[20px] font-semibold tabular-nums text-primary">
            {attrN === null ? "—" : `${fmt(attrN)} ${t("items")}`}
          </p>
          <p className="mt-1.5 text-[11px] tabular-nums text-muted-foreground" dir="ltr">
            n = RF({RELIABILITY_FACTORS[risk][expected]}) ÷ TDR({tdrNum || "—"}%)
          </p>
        </div>
      </div>

      {/* MUS */}
      <div className="rounded-2xl border bg-card p-4 shadow-soft sm:p-5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Layers className="h-4 w-4 text-primary" />
          </span>
          <h3 className="font-serif text-[15.5px] font-semibold tracking-tight">{t("musTitle")}</h3>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <div>
            <label className="text-[11.5px] font-medium text-muted-foreground">{t("pop")}</label>
            <div className="mt-1">
              <NumInput value={pop} onChange={setPop} placeholder="0" />
            </div>
          </div>
          <div>
            <label className="text-[11.5px] font-medium text-muted-foreground">{t("tm")}</label>
            <div className="mt-1">
              <NumInput value={tm} onChange={setTm} placeholder="0" />
            </div>
          </div>
          <div>
            <label className="text-[11.5px] font-medium text-muted-foreground">{t("risk")}</label>
            <div className="mt-1">{RiskButtons}</div>
          </div>
          <div>
            <label className="text-[11.5px] font-medium text-muted-foreground">{t("expected")}</label>
            <div className="mt-1">{ExpectedButtons}</div>
          </div>
        </div>
        <div className="mt-4 grid gap-2 rounded-xl border bg-secondary/40 p-3.5 sm:grid-cols-2">
          <div>
            <p className="text-[11px] text-muted-foreground">{t("sampleSize")}</p>
            <p className="mt-0.5 font-serif text-[20px] font-semibold tabular-nums text-primary">
              {musN === null ? "—" : `${fmt(musN)} ${t("items")}`}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-muted-foreground">{t("interval")}</p>
            <p className="mt-0.5 font-serif text-[20px] font-semibold tabular-nums">
              {interval === null ? "—" : fmt(interval)}
            </p>
          </div>
        </div>
        <p className="mt-2 text-[11px] tabular-nums text-muted-foreground" dir="ltr">
          n = (RF × population) ÷ tolerable misstatement
        </p>

        {/* v21: systematic selection engine — which item numbers to examine,
            seeded and documented (method + seed + items = the ISA 530 WP) */}
        <div className="mt-3 rounded-xl border bg-secondary/40 p-3.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {t("selectTitle")} · ISA 530
          </p>
          <div className="mt-2 grid gap-2 sm:grid-cols-[1fr_auto_auto]">
            <div>
              <label className="text-[11.5px] font-medium text-muted-foreground">{t("popCount")}</label>
              <div className="mt-1">
                <NumInput value={popCount} onChange={setPopCount} placeholder="0" />
              </div>
            </div>
            <div className="self-end">
              <label className="text-[11.5px] font-medium text-muted-foreground">{t("seed")}</label>
              <p className="mt-2 h-9 px-2 font-mono text-[12.5px] tabular-nums leading-9 text-muted-foreground">
                #{seed}
              </p>
            </div>
            <button
              onClick={() => setSeed(Math.floor(Math.random() * 99999))}
              className="self-end rounded-lg border px-3 py-2 text-[12px] font-medium text-muted-foreground transition-colors hover:text-foreground focus-ring"
            >
              {t("reroll")}
            </button>
          </div>
          {selection !== null && (
            <div className="mt-2.5">
              <p className="text-[11.5px] font-medium text-muted-foreground">
                {t("pick")} ({selection.length} {t("items")}):
              </p>
              <p className="mt-1 max-h-24 overflow-y-auto rounded-lg border bg-background p-2 font-mono text-[12px] leading-relaxed tabular-nums scroll-thin" dir="ltr">
                {selection.join(", ")}
              </p>
              <div className="mt-1.5 flex items-center justify-between gap-2">
                <p className="text-[10.5px] text-muted-foreground">{t("selectHint")}</p>
                <button
                  onClick={() => {
                    void navigator.clipboard.writeText(selection.join(", ")).then(() => toastOk(t("copied")))
                  }}
                  className="shrink-0 rounded-md border px-2 py-1 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground focus-ring"
                >
                  {t("copyList")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/** v21: seeded systematic selection — random start in [1, interval], then
 *  every interval-th item. Same seed + inputs → same items (documentable). */
function systematicSelection(n: number, size: number, seed: number): number[] | null {
  if (!Number.isFinite(n) || !Number.isFinite(size) || n < 1 || size < 1 || size > n) return null
  const rnd = mulberryLite(seed)
  const interval = n / size
  const start = Math.floor(rnd() * interval) + 1
  const out: number[] = []
  for (let i = 0; i < size; i++) {
    const item = Math.round(start + i * interval)
    if (item >= 1 && item <= n && !out.includes(item)) out.push(item)
  }
  return out.length ? out : null
}

function mulberryLite(seed: number) {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function toastOk(msg: string) {
  // sonner is loaded lazily here to keep this tool module dependency-light
  if (typeof window !== "undefined") {
    void import("sonner").then((m) => m.toast.success(msg))
  }
}
