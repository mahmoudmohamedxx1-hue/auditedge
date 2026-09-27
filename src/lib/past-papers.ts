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
    titleEn: "Audit & Assurance — past paper",
    titleAr: "المراجعة والتأكيد — امتحان سابق",
    body: "ACCA AA style",
    area: "auditing",
    source: "ACCA AA past paper (adapted)",
    count: 12,
    durationMin: 36,
    difficulty: 2,
    blurbEn:
      "Scenario MCQs in the style of ACCA's Audit & Assurance paper — risk assessment, internal control, evidence, review and reporting.",
    blurbAr:
      "أسئلة سيناريو على نمط امتحان المراجعة والتأكيد من ACCA — تقييم المخاطر، الرقابة الداخلية، الأدلة، والمراجعة والتقرير.",
  },
  {
    id: "acca-aaa",
    titleEn: "Advanced Audit & Assurance — past paper",
    titleAr: "المراجعة والتأكيد المتقدمة — امتحان سابق",
    body: "ACCA AAA style",
    area: "auditing",
    source: "ACCA AAA past paper (adapted)",
    count: 12,
    durationMin: 40,
    difficulty: 3,
    blurbEn:
      "The harder, judgement-heavy AA upgrade — engagement acceptance, professional ethics, group audits, going concern and modified opinions.",
    blurbAr:
      "النسخة الأصعب الغنية بالحكم المهني — قبول المهمة، أخلاقيات المهنة، مراجعة المجموعات، الاستمرارية وآراء المراجعة المعدلة.",
  },
  {
    id: "acca-fr",
    titleEn: "Financial Reporting (IFRS) — past paper",
    titleAr: "إعداد التقارير المالية (IFRS) — امتحان سابق",
    body: "ACCA FR style",
    area: "accounting",
    source: "ACCA FR past paper (adapted)",
    count: 12,
    durationMin: 36,
    difficulty: 2,
    blurbEn:
      "IFRS reporting questions in FR style — leases, impairments, revenue, financial instruments and consolidated basics.",
    blurbAr:
      "أسئلة تقارير دولية على نمط FR — الإيجارات، الاضمحلال، الإيرادات، الأدوات المالية وأساسيات التجميع.",
  },
  {
    id: "acca-sbr",
    titleEn: "Strategic Business Reporting — past paper",
    titleAr: "التقارير الاستراتيجية — امتحان سابق",
    body: "ACCA SBR style",
    area: "accounting",
    source: "ACCA SBR past paper (adapted)",
    count: 12,
    durationMin: 40,
    difficulty: 3,
    blurbEn:
      "The strategic reporting paper — complex consolidation issues, hedge accounting, deferred tax and the current-versus-proposed standard debates.",
    blurbAr:
      "ورقة التقارير الاستراتيجية — مشكلات التجميع المعقدة، محاسبة التحوّط، الضريبة المؤجلة والفروق بين المعايير الحالية والمقترحة.",
  },
  {
    id: "soe-audit",
    titleEn: "Egyptian state-sector audit — past paper",
    titleAr: "مراجعة قطاع الأعمال العام — امتحان سابق",
    body: "SOE / EEC style",
    area: "egypt",
    source: "Egypt SOE audit past paper (adapted)",
    count: 12,
    durationMin: 36,
    difficulty: 2,
    blurbEn:
      "Egyptian practice-exam style for state-owned enterprises — EAS/ISA alignment, Central Audit Organization context, SOE governance and reporting.",
    blurbAr:
      "على نمط امتحانات الممارسة المصرية لشركات قطاع الأعمال العام — التوافق بين المعايير المصرية والدولية، سياق الجهاز المركزي للمحاسبات، الحوكمة والتقرير.",
  },
]

export function getPastPaper(id: string): PastPaper | null {
  return PAST_PAPERS.find((p) => p.id === id) ?? null
}
