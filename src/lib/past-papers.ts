/** v22 — previous-exam papers (IFRS + Auditing) for the Exam Center.
 *
 *  Full past papers are adapted for AuditEdge in past-paper STYLE of the
 *  named professional exams (scenario MCQs, 2-mark single-topic items,
 *  examiner-style distractors). Each paper maps to a fixed slice of the
 *  bank via its `source` label, sits under a timed session and feeds the
 *  same results / mistakes / spaced-repetition machinery as any exam. */

import type { BankArea } from "@/lib/exam-blueprint"

export type PastPaper = {
  id: string
  titleEn: string
  titleAr: string
  /** body label shown on the card */
  body: string
  area: BankArea
  /** BankQuestion.source filter that selects this paper's questions */
  source: string
  count: number
  durationMin: number
  difficulty: 1 | 2 | 3
  blurbEn: string
  blurbAr: string
}

export const PAST_PAPERS: PastPaper[] = [
  {
    id: "acca-aa",
    titleEn: "Audit & Assurance — full past paper",
    titleAr: "المراجعة والتأكيد — امتحان سابق كامل",
    body: "ACCA AA style",
    area: "auditing",
    source: "ACCA AA past paper (adapted)",
    count: 30,
    durationMin: 90,
    difficulty: 2,
    blurbEn:
      "A FULL Section-A length paper in the style of ACCA's Audit & Assurance exam — 30 scenario MCQs covering risk assessment, internal control, evidence, review and reporting.",
    blurbAr:
      "ورقة كاملة بطول القسم الأول من امتحان المراجعة والتأكيد لدى ACCA — ٣٠ سؤال سيناريو تغطي تقييم المخاطر والرقابة الداخلية والأدلة والمراجعة والتقرير.",
  },
  {
    id: "acca-aaa",
    titleEn: "Advanced Audit & Assurance — full past paper",
    titleAr: "المراجعة والتأكيد المتقدمة — امتحان سابق كامل",
    body: "ACCA AAA style",
    area: "auditing",
    source: "ACCA AAA past paper (adapted)",
    count: 24,
    durationMin: 72,
    difficulty: 3,
    blurbEn:
      "The harder, judgement-heavy AA upgrade at full length — engagement acceptance, professional ethics, group audits, going concern and modified opinions.",
    blurbAr:
      "النسخة الأصعب الغنية بالحكم المهني وبطول كامل — قبول المهمة، أخلاقيات المهنة، مراجعة المجموعات، الاستمرارية وآراء المراجعة المعدلة.",
  },
  {
    id: "acca-fr",
    titleEn: "Financial Reporting (IFRS) — full past paper",
    titleAr: "إعداد التقارير المالية (IFRS) — امتحان سابق كامل",
    body: "ACCA FR style",
    area: "accounting",
    source: "ACCA FR past paper (adapted)",
    count: 30,
    durationMin: 90,
    difficulty: 2,
    blurbEn:
      "A FULL 30-question IFRS reporting paper — leases, impairments, revenue, financial instruments, deferred tax, groups and presentation.",
    blurbAr:
      "ورقة IFRS كاملة بثلاثين سؤالًا — الإيجارات والاضمحلال والإيرادات والأدوات المالية والضريبة المؤجلة والمجموعات والعرض.",
  },
  {
    id: "acca-sbr",
    titleEn: "Strategic Business Reporting — full past paper",
    titleAr: "التقارير الاستراتيجية — امتحان سابق كامل",
    body: "ACCA SBR style",
    area: "accounting",
    source: "ACCA SBR past paper (adapted)",
    count: 24,
    durationMin: 72,
    difficulty: 3,
    blurbEn:
      "The strategic reporting paper at full length — complex consolidation issues, ECL and hedge accounting, share-based payments, deferred tax and IFRS 18.",
    blurbAr:
      "ورقة التقارير الاستراتيجية بطول كامل — مشكلات التجميع المعقدة، وECL ومحاسبة التحوّط، والدفع بالأسهم، والضريبة المؤجلة وIFRS 18.",
  },
  {
    id: "soe-audit",
    titleEn: "Egyptian state-sector audit — full past paper",
    titleAr: "مراجعة قطاع الأعمال العام — امتحان سابق كامل",
    body: "SOE / EEC style",
    area: "egypt",
    source: "Egypt SOE audit past paper (adapted)",
    count: 24,
    durationMin: 72,
    difficulty: 2,
    blurbEn:
      "The full Egyptian practice paper for state-owned enterprises — EAS/ISA alignment, governance, syndicate rules, review engagements and public-sector audit types.",
    blurbAr:
      "الورقة المصرية الكاملة لشركات قطاع الأعمال العام — التوافق بين المعايير المصرية والدولية، الحوكمة، قواعد النقابة، الفحص المحدود وأنواع مراجعة القطاع العام.",
  },
  /* ---------- v23: NEW ACCA papers — FA (F3) and FM (F9) ---------- */
  {
    id: "acca-fa",
    titleEn: "Financial Accounting (F3) — past paper",
    titleAr: "المحاسبة المالية (F3) — امتحان سابق",
    body: "ACCA FA style",
    area: "accounting",
    source: "ACCA FA past paper (adapted)",
    count: 18,
    durationMin: 54,
    difficulty: 1,
    blurbEn:
      "The ACCA foundations paper — double entry, control accounts, bank reconciliations, depreciation, accruals, IAS 2 inventory and basic ratios. The perfect first paper.",
    blurbAr:
      "ورقة ACCA التأسيسية — القيد المزدوج وحسابات المراقبة والتسويات البنكية والإهلاك والمصروفات المستحقة ومخزون IAS 2 والنسب الأساسية. الورقة الأولى المثالية.",
  },
  {
    id: "acca-fm",
    titleEn: "Financial Management (F9) — past paper",
    titleAr: "الإدارة المالية (F9) — امتحان سابق",
    body: "ACCA FM style",
    area: "accounting",
    source: "ACCA FM past paper (adapted)",
    count: 18,
    durationMin: 54,
    difficulty: 2,
    blurbEn:
      "The financial-management paper — NPV and IRR, WACC and CAPM, working capital, forex and interest-rate risk, plus Islamic finance (murabaha, ijara, sukuk).",
    blurbAr:
      "ورقة الإدارة المالية — NPV وIRR، وWACC وCAPM، ورأس المال العامل، ومخاطر الصرف والفائدة، مع التمويل الإسلامي (المرابحة والإجارة والصكوك).",
  },
]

export function getPastPaper(id: string): PastPaper | null {
  return PAST_PAPERS.find((p) => p.id === id) ?? null
}
