"use client"

import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { MATERIALITY_BENCHMARKS, RELIABILITY_FACTORS } from "@/lib/program"
import { Calculator, Layers } from "lucide-react"

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

export function MaterialityCalculator({ lang }: { lang: Lang }) {
  const t = (k: keyof typeof T) => T[k][lang]
  const [figs, setFigs] = useState({ pbt: "", revenue: "", assets: "", equity: "" })
  const [bench, setBench] = useState<(typeof MATERIALITY_BENCHMARKS)[number]["key"]>("pbt")
  const [pct, setPct] = useState("5")
  const [pmPct, setPmPct] = useState("65")
  const [cttPct, setCttPct] = useState("5")

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

  const tdrNum = parseFloat(tdr) || 0
  const attrN = tdrNum > 0 ? Math.ceil(RELIABILITY_FACTORS[risk][expected] / (tdrNum / 100)) : null
  const popNum = parseFloat(pop) || 0
  const tmNum = parseFloat(tm) || 0
  const musN = popNum > 0 && tmNum > 0 ? Math.ceil((RELIABILITY_FACTORS[risk][expected] * popNum) / tmNum) : null
  const interval = musN && musN > 0 ? popNum / musN : null

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
      </div>
    </div>
  )
}
