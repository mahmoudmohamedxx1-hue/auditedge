/** Bilingual audit-program content — every user-facing string has EN + AR. */
export type Lang = { en: string; ar: string }

export type ProgramProcedure = {
  id: string
  text: Lang
  /** ISA / ESA / IFRS / EAS reference shown next to the step */
  ref?: string
}

export type ProgramGroup = "methodology" | "accounts"

export type ProgramSection = {
  id: string
  code: string
  group: ProgramGroup
  icon: string
  title: Lang
  scope: Lang
  objectives: Lang[]
  /** Assertion codes: EX, C, A, VA, RO, CO, CL, PR */
  assertions?: string[]
  risks: Lang[]
  documents: Lang[]
  procedures: ProgramProcedure[]
  pitfalls: Lang[]
  standards: string[]
}

/** Assertion code → bilingual label (used across all sections). */
export const ASSERTIONS: Record<string, Lang> = {
  EX: { en: "Existence", ar: "الوجود" },
  C: { en: "Completeness", ar: "الاكتمال" },
  A: { en: "Accuracy", ar: "الدقة" },
  VA: { en: "Valuation & allocation", ar: "التقييم والتوزيع" },
  RO: { en: "Rights & obligations", ar: "الحقوق والالتزامات" },
  CO: { en: "Cut-off", ar: "الاستقطاع" },
  CL: { en: "Classification", ar: "التصنيف" },
  PR: { en: "Presentation & disclosure", ar: "العرض والإفصاح" },
}

/** Poisson reliability factors — n = RF ÷ tolerable rate (attribute sampling)
 *  and n = (RF × population) ÷ tolerable misstatement (MUS). */
export const RELIABILITY_FACTORS: Record<"5" | "10", number[]> = {
  "5": [3.0, 4.75, 6.3, 7.76],
  "10": [2.31, 3.89, 5.33, 6.69],
}

/** Common materiality benchmarks with typical practice ranges. */
export const MATERIALITY_BENCHMARKS = [
  { key: "pbt", label: { en: "Profit before tax", ar: "ربح النشاط قبل الضريبة" }, pct: 5, range: "5% – 10%", note: { en: "Default for profit-oriented entities; volatile profits reduce reliability.", ar: "الأساس الافتراضي للشركات الهادفة للربح؛ تذبذب الأرباح يضعف موثوقيته." } },
  { key: "revenue", label: { en: "Total revenue", ar: "إجمالي الإيرادات" }, pct: 0.5, range: "0.5% – 1%", note: { en: "Use when profit is marginal, a loss, or highly volatile.", ar: "يُستخدم عندما يكون الربح هامشيًا أو خسارة أو شديد التذبذب." } },
  { key: "assets", label: { en: "Total assets", ar: "إجمالي الأصول" }, pct: 0.5, range: "0.5% – 1%", note: { en: "Asset-intensive entities, funds, and newly established companies.", ar: "الشركات كثيفة الأصول والصناديق والشركات حديثة التأسيس." } },
  { key: "equity", label: { en: "Total equity", ar: "حقوق الملكية" }, pct: 1, range: "1% – 2%", note: { en: "Investment and not-for-profit style entities focused on capital.", ar: "شركات الاستثمار والكيانات غير الهادفة للربح التي يهمها رأس المال." } },
] as const
