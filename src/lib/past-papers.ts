/** v22–v24 — previous-exam papers (ACCA + Egyptian) for the Exam Center.
 *
 *  Full past papers are adapted for AuditEdge in past-paper STYLE of the
 *  named professional exams (scenario MCQs, 2-mark single-topic items,
 *  examiner-style distractors). Each paper maps to a fixed slice of the
 *  bank via its `source` label, sits under a timed session and feeds the
 *  same results / mistakes / spaced-repetition machinery as any exam.
 *
 *  v24 — the whole ACCA syllabus is covered: every Applied Knowledge,
 *  Applied Skills and Strategic Professional paper (BT, MA, FA, LW, PM,
 *  TX, FR, AA, FM, SBL, SBR, AFM, APM, ATX, AAA) plus the Egyptian
 *  state-sector paper. `group` drives the grouped papers grid. */

import type { BankArea } from "@/lib/exam-blueprint"

export type PaperGroup = "knowledge" | "skills" | "strategic" | "egypt"

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
  /** v24 — syllabus level the paper belongs to (grouped UI) */
  group: PaperGroup
  blurbEn: string
  blurbAr: string
}

export const PAPER_GROUPS: { id: PaperGroup; labelEn: string; labelAr: string }[] = [
  { id: "knowledge", labelEn: "ACCA — Applied Knowledge", labelAr: "ACCA — المستوى المعرفي" },
  { id: "skills", labelEn: "ACCA — Applied Skills", labelAr: "ACCA — المستوى المهاري" },
  { id: "strategic", labelEn: "ACCA — Strategic Professional", labelAr: "ACCA — المستوى الاستراتيجي" },
  { id: "egypt", labelEn: "Egyptian practice", labelAr: "التطبيق المصري" },
]

export const PAST_PAPERS: PastPaper[] = [
  /* ==================== Applied Knowledge ==================== */
  {
    id: "acca-bt",
    titleEn: "Business & Technology (BT) — past paper",
    titleAr: "الأعمال والتكنولوجيا (BT) — امتحان سابق",
    body: "ACCA BT style",
    area: "accounting",
    source: "ACCA BT past paper (adapted)",
    count: 18,
    durationMin: 54,
    difficulty: 1,
    group: "knowledge",
    blurbEn:
      "The ACCA gateway paper — governance, stakeholders, organisation structure, leadership, teams, macro-economics, marketing and technology risks.",
    blurbAr:
      "ورقة بوابة ACCA — الحوكمة وأصحاب المصلحة وهيكل المنظمة والقيادة والفرق والاقتصاد الكلي والتسويق ومخاطر التكنولوجيا.",
  },
  {
    id: "acca-ma",
    titleEn: "Management Accounting (MA) — past paper",
    titleAr: "المحاسبة الإدارية (MA) — امتحان سابق",
    body: "ACCA MA style",
    area: "accounting",
    source: "ACCA MA past paper (adapted)",
    count: 18,
    durationMin: 54,
    difficulty: 1,
    group: "knowledge",
    blurbEn:
      "Cost behaviour, absorption and marginal costing, ABC, process costing, CVP, variances, budgeting and divisional measures.",
    blurbAr:
      "سلوك التكاليف والتحميل والحدية وABC والتكاليف المرحلية والتعادل والانحرافات والموازنات ومقاييس الأقسام.",
  },
  {
    id: "acca-fa",
    titleEn: "Financial Accounting (FA) — past paper",
    titleAr: "المحاسبة المالية (FA) — امتحان سابق",
    body: "ACCA FA style",
    area: "accounting",
    source: "ACCA FA past paper (adapted)",
    count: 18,
    durationMin: 54,
    difficulty: 1,
    group: "knowledge",
    blurbEn:
      "The ACCA foundations paper — double entry, control accounts, bank reconciliations, depreciation, accruals, IAS 2 inventory and basic ratios. The perfect first paper.",
    blurbAr:
      "ورقة ACCA التأسيسية — القيد المزدوج وحسابات المراقبة والتسويات البنكية والإهلاك والمصروفات المستحقة ومخزون IAS 2 والنسب الأساسية. الورقة الأولى المثالية.",
  },
  /* ==================== Applied Skills ==================== */
  {
    id: "acca-lw",
    titleEn: "Corporate & Business Law (LW) — past paper",
    titleAr: "قانون الشركات والأعمال (LW) — امتحان سابق",
    body: "ACCA LW style",
    area: "ethics",
    source: "ACCA LW past paper (adapted)",
    count: 24,
    durationMin: 72,
    difficulty: 2,
    group: "skills",
    blurbEn:
      "Contract formation and terms, negligence, employment law, company formation, directors' duties, share capital, insolvency and partnership/agency law.",
    blurbAr:
      "انعقاد العقد وشروطه والإهمال وقانون العمل وتأسيس الشركات وواجبات المديرين ورأس المال والتفسير وقانون الشراكة والوكالة.",
  },
  {
    id: "acca-pm",
    titleEn: "Performance Management (PM) — past paper",
    titleAr: "إدارة الأداء (PM) — امتحان سابق",
    body: "ACCA PM style",
    area: "accounting",
    source: "ACCA PM past paper (adapted)",
    count: 24,
    durationMin: 72,
    difficulty: 2,
    group: "skills",
    blurbEn:
      "The specialist techniques paper — ABC, target and lifecycle costing, throughput, pricing, mix & yield variances, planning variances, transfer pricing and the balanced scorecard.",
    blurbAr:
      "ورقة التقنيات المتخصصة — ABC والتكلفة المستهدفة ودورة الحياة والإنتاجية والتسعير وانحرافات المزيج والمردود والانحرافات التخطيطية وأسعار النقل وبطاقة الأداء المتوازن.",
  },
  {
    id: "acca-tx",
    titleEn: "Taxation (TX) — past paper",
    titleAr: "الضرائب (TX) — امتحان سابق",
    body: "ACCA TX style",
    area: "accounting",
    source: "ACCA TX past paper (adapted)",
    count: 24,
    durationMin: 72,
    difficulty: 2,
    group: "skills",
    blurbEn:
      "Trading-income adjustments, capital allowances, employment income and benefits, corporation tax, VAT, capital gains, loss relief and tax ethics.",
    blurbAr:
      "تسويات دخل النشاط وبدلات رأس المال ودخل التوظيف ومزاياه وضريبة الشركات والقيمة المضافة والمكاسب الرأسمالية وتخفيف الخسائر وأخلاقيات الضرائب.",
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
    group: "skills",
    blurbEn:
      "A FULL 30-question IFRS reporting paper — leases, impairments, revenue, financial instruments, deferred tax, groups and presentation.",
    blurbAr:
      "ورقة IFRS كاملة بثلاثين سؤالًا — الإيجارات والاضمحلال والإيرادات والأدوات المالية والضريبة المؤجلة والمجموعات والعرض.",
  },
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
    group: "skills",
    blurbEn:
      "A FULL Section-A length paper in the style of ACCA's Audit & Assurance exam — 30 scenario MCQs covering risk assessment, internal control, evidence, review and reporting.",
    blurbAr:
      "ورقة كاملة بطول القسم الأول من امتحان المراجعة والتأكيد لدى ACCA — ٣٠ سؤال سيناريو تغطي تقييم المخاطر والرقابة الداخلية والأدلة والمراجعة والتقرير.",
  },
  {
    id: "acca-fm",
    titleEn: "Financial Management (FM) — past paper",
    titleAr: "الإدارة المالية (FM) — امتحان سابق",
    body: "ACCA FM style",
    area: "accounting",
    source: "ACCA FM past paper (adapted)",
    count: 18,
    durationMin: 54,
    difficulty: 2,
    group: "skills",
    blurbEn:
      "The financial-management paper — NPV and IRR, WACC and CAPM, working capital, forex and interest-rate risk, plus Islamic finance (murabaha, ijara, sukuk).",
    blurbAr:
      "ورقة الإدارة المالية — NPV وIRR، وWACC وCAPM، ورأس المال العامل، ومخاطر الصرف والفائدة، مع التمويل الإسلامي (المرابحة والإجارة والصكوك).",
  },
  /* ==================== Strategic Professional ==================== */
  {
    id: "acca-sbl",
    titleEn: "Strategic Business Leader — past paper",
    titleAr: "القائد التجاري الاستراتيجي — امتحان سابق",
    body: "ACCA SBL style",
    area: "ethics",
    source: "ACCA SBL past paper (adapted)",
    count: 24,
    durationMin: 72,
    difficulty: 3,
    group: "strategic",
    blurbEn:
      "The scenario-led essentials paper — leadership, governance and committees, risk responses, strategy tools, technology and data, and professional-skills judgement.",
    blurbAr:
      "الورقة الجوهرية القائمة على السيناريو — القيادة والحوكمة واللجان واستجابات المخاطر وأدوات الاستراتيجية والتكنولوجيا والبيانات والحكم المهني.",
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
    group: "strategic",
    blurbEn:
      "The strategic reporting paper at full length — complex consolidation issues, ECL and hedge accounting, share-based payments, deferred tax and IFRS 18.",
    blurbAr:
      "ورقة التقارير الاستراتيجية بطول كامل — مشكلات التجميع المعقدة، وECL ومحاسبة التحوّط، والدفع بالأسهم، والضريبة المؤجلة وIFRS 18.",
  },
  {
    id: "acca-afm",
    titleEn: "Advanced Financial Management (AFM) — past paper",
    titleAr: "الإدارة المالية المتقدمة (AFM) — امتحان سابق",
    body: "ACCA AFM style",
    area: "accounting",
    source: "ACCA AFM past paper (adapted)",
    count: 18,
    durationMin: 54,
    difficulty: 3,
    group: "strategic",
    blurbEn:
      "The treasury paper at advanced level — APV, M&M and capital structure, options and futures, swaps, FRAs, currency hedging, sukuk and MBO finance.",
    blurbAr:
      "ورقة الخزانة المتقدمة — القيمة المعدلة وهيكل رأس المال والخيارات والمستقبليات والمقايضات والاتفاقيات الآجلة والتحوط من العملة والصكوك وتمويل شراء الإدارة.",
  },
  {
    id: "acca-apm",
    titleEn: "Advanced Performance Management (APM) — past paper",
    titleAr: "إدارة الأداء المتقدمة (APM) — امتحان سابق",
    body: "ACCA APM style",
    area: "accounting",
    source: "ACCA APM past paper (adapted)",
    count: 18,
    durationMin: 54,
    difficulty: 3,
    group: "strategic",
    blurbEn:
      "The performance-thinking paper — frameworks (BSC, building blocks, prism), value-based management, dysfunctional behaviour, VFM in NFPs and incentive design.",
    blurbAr:
      "ورقة تفكير الأداء — الأطر (البطاقة واللبنات والمنشور) والإدارة القائمة على القيمة والسلوك الخللي والاقتصادية في غير الربحي وتصميم الحوافز.",
  },
  {
    id: "acca-atx",
    titleEn: "Advanced Taxation (ATX) — past paper",
    titleAr: "الضرائب المتقدمة (ATX) — امتحان سابق",
    body: "ACCA ATX style",
    area: "accounting",
    source: "ACCA ATX past paper (adapted)",
    count: 18,
    durationMin: 54,
    difficulty: 3,
    group: "strategic",
    blurbEn:
      "The advisory tax paper — estate and gifts planning, reorganisations, incorporation, thin capitalisation, VAT on business sales, APAs and tax ethics.",
    blurbAr:
      "ورقة الضرائب الاستشارية — تخطيط التركات والهبات وإعادة الهيكلة والتحول والرسملة الهزيلة والضريبة على بيع الأنشطة والاتفاقيات المسبقة وأخلاقيات الضريبة.",
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
    group: "strategic",
    blurbEn:
      "The harder, judgement-heavy AA upgrade at full length — engagement acceptance, professional ethics, group audits, going concern and modified opinions.",
    blurbAr:
      "النسخة الأصعب الغنية بالحكم المهني وبطول كامل — قبول المهمة، أخلاقيات المهنة، مراجعة المجموعات، الاستمرارية وآراء المراجعة المعدلة.",
  },
  /* ==================== Egyptian practice ==================== */
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
    group: "egypt",
    blurbEn:
      "The full Egyptian practice paper for state-owned enterprises — EAS/ISA alignment, governance, syndicate rules, review engagements and public-sector audit types.",
    blurbAr:
      "الورقة المصرية الكاملة لشركات قطاع الأعمال العام — التوافق بين المعايير المصرية والدولية، الحوكمة، قواعد النقابة، الفحص المحدود وأنواع مراجعة القطاع العام.",
  },
]

export function getPastPaper(id: string): PastPaper | null {
  return PAST_PAPERS.find((p) => p.id === id) ?? null
}
