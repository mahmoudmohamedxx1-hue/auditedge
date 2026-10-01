/** v27 — constructed-response (CR) exam tasks, each carrying the CERTIFIED
 *  SOLUTION of the real exam-style question — the reference the AI examiner
 *  marks against when you submit a real-format paper.
 *
 *  These power the sections of the real exams that plain MCQs cannot
 *  reproduce:
 *    · CPA          — task-based simulations (TBS): a case exhibit followed
 *                     by numeric-entry and short-paragraph requirements
 *    · IFRS diploma — Section B multi-task questions (70% of the real
 *                     DipIFR paper): scenario MTQs with calculations and
 *                     written explanations
 *    · ACCA FR      — Section B 35-mark scenario questions
 *    · ACCA AA/AAA  — Section C constructed-response questions
 *    · ACCA SBL/SBR — the whole paper: 50-mark scenario tasks
 *    · CMA          — the essay scenarios of Parts 1 & 2
 *
 *  Every requirement states its marks, its certified solution (the
 *  examiner's guide) and explicit marking points, so the AI marking pass
 *  has an objective reference — and the deterministic keyword fallback can
 *  award a fair score even with no network.
 *
 *  All content is bilingual (EN + AR), matching the v26 standard. */

export type CrRequirement = {
  promptEn: string
  promptAr: string
  /** numeric → short figure input (compared with tolerance); text → written
   *  response marked against the marking points */
  kind: "numeric" | "text"
  marks: number
  /** the certified solution — what the real examiner's guide awards marks for */
  certifiedEn: string
  certifiedAr: string
  /** marking points — phrases/figures that earn credit (fallback marking + AI guide) */
  pointsEn: string[]
  pointsAr: string[]
  /** for numeric requirements: the certified figure + relative tolerance */
  numeric?: { value: number; tolerance: number; unit?: string }
}

export type CrTask = {
  id: string
  /** paper family base id — e.g. "cpa-aud" (see past-papers.ts FAMILIES) */
  family: string
  labelEn: string
  labelAr: string
  exhibitEn: string
  exhibitAr: string
  requirements: CrRequirement[]
}

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

export function crTotalMarks(t: CrTask): number {
  return t.requirements.reduce((a, r) => a + r.marks, 0)
}

export function getCrTask(id: string): CrTask | null {
  return CR_TASKS.find((t) => t.id === id) ?? null
}

export function crTasksFor(family: string): CrTask[] {
  return CR_TASKS.filter((t) => t.family === family)
}

/** Deterministic rotation — a paper draws `count` consecutive tasks from
 *  its family shelf, starting at `seed % shelf.length`. Flagship (seed 0)
 *  always opens with the family's first tasks; each dated sitting rotates. */
export function pickCrTasks(family: string, count: number, seed: number): CrTask[] {
  const shelf = crTasksFor(family)
  if (!shelf.length) return []
  const start = ((seed % shelf.length) + shelf.length) % shelf.length
  const picked: CrTask[] = []
  for (let i = 0; i < Math.min(count, shelf.length); i++) {
    picked.push(shelf[(start + i) % shelf.length])
  }
  return picked
}

/* ================================================================== */
/* CPA — Auditing & Attestation (AUD): task-based simulations          */
/* ================================================================== */

const CPA_AUD_TASKS: CrTask[] = [
  {
    id: "cpa-aud-tbs-1",
    family: "cpa-aud",
    labelEn: "TBS 1 — Engagement acceptance and audit risk",
    labelAr: "محاكاة ١ — قبول الارتباط ومخاطر المراجعة",
    exhibitEn:
      "Rahim & Partners, CPAs, has been asked to accept the December 31, 2025 audit of Nile Furniture Ltd, a 400-employee manufacturer. Preliminary work reveals: (1) the prior auditor resigned after a fee dispute; (2) inventory of EGP 48 million represents 62% of total assets; (3) the company recently installed a new ERP system and the old system is no longer accessible; (4) management intends to grant the engagement team restricted access to the production facility. The expected audit fee is EGP 1.2 million. Total company revenue is EGP 9.5 million… the board expects an unqualified opinion within three weeks of year end.",
    exhibitAr:
      "طلبت شركة رحيم وشركاؤه للمحاسبين القانونيين قبول مراجعة شركة أثاث النيل للمفروشات (٤٠٠ موظف) عن الفترة المنتهية في ٣١ ديسمبر ٢٠٢٥. أظهرت الأعمال الأولية: (١) استقالة المراجع السابق بعد نزاع حول الأتعاب؛ (٢) المخزون البالغ ٤٨ مليون جنيه يمثل ٦٢٪ من إجمالي الأصول؛ (٣) تركيب نظام ERP جديد مع عدم توفر النظام القديم؛ (٤) نية الإدارة لمنح فريق المراجعة وصولًا محدودًا لمصنع الإنتاج. الأتعاب المتوقعة ١٫٢ مليون جنيه. توقعت الإدارة رأيًا غير معدل خلال ثلاثة أسابيع من نهاية السنة.",
    requirements: [
      {
        promptEn: "Compute the audit risk model component that restricted facility access primarily affects — state the resulting risk of material misstatement as high / moderate / low.",
        promptAr: "حدد مكوّن نموذج مخاطر المراجعة الذي يؤثر فيه بشكل أساسي تقييد الوصول للمصنع، واذكر مستوى خطر التحريف الجوهري الناتج (مرتفع / متوسط / منخفض).",
        kind: "text",
        marks: 4,
        certifiedEn:
          "Restricted access to the production facility weakens control activities (a component of control risk, and control risk is part of the risk of material misbursement). With a new ERP and inaccessible legacy system, control risk is high, so the risk of material misstatement is HIGH, and detection risk must be reduced by more extensive substantive procedures.",
        certifiedAr:
          "تقييد الوصول للمصنع يُضعف أنشطة الرقابة (مكوّن من مخاطر الرقابة التي تدخل في خطر التحريف الجوهري). ومع نظام ERP جديد ونظام قديم غير متاح تكون مخاطر الرقابة مرتفعة، ومن ثم خطر التحريف الجوهري مرتفع، ويجب خفض مخاطر الاكتشاف بإجراءات جوهرية أوسع.",
        pointsEn: ["control risk", "risk of material misstatement", "high", "detection risk", "substantive procedures"],
        pointsAr: ["مخاطر الرقابة", "خطر التحريف الجوهري", "مرتفع", "مخاطر الاكتشاف", "إجراءات جوهرية"],
      },
      {
        promptEn: "Under AICPA rule on fees and independence, what is the maximum fee percentage above which Rahim & Partners would lose independence if it audits this client for several consecutive years (enter the percentage number only)?",
        promptAr: "وفق قاعدة الأتعاب والاستقلالية لدى AICPA، ما النسبة القصوى للأتعاب التي إذا تجاوزتها أتعاب العميل من إجمالي أتعاب المكتب لعدة سنوات متتالية فقد المكتب استقلاليته؟ (أدخل الرقم فقط)",
        kind: "numeric",
        marks: 2,
        certifiedEn: "Fees from an attest client exceeding 15% of a firm's total fees for two consecutive years — pre-approval by the client's audit committee / those charged with governance is required to retain independence.",
        certifiedAr:
          "تجاوز أتعاب عميل التأكيد ١٥٪ من إجمالي أتعاب المكتب لسنتين متتاليتين يستلزم موافقة مسبقة من لجنة المراجعة/أصحاب الرقابة للحفاظ على الاستقلالية.",
        pointsEn: ["15%", "15 percent", "fifteen percent", "audit committee pre-approval"],
        pointsAr: ["١٥٪", "١٥ بالمئة", "موافقة لجنة المراجعة"],
        numeric: { value: 15, tolerance: 0.001, unit: "%" },
      },
      {
        promptEn: "Before accepting, list the three communications the successor auditor must complete with the predecessor auditor.",
        promptAr: "قبل قبول الارتباط، اذكر صور الاتصال الثلاث الواجبة بين المراجع الخلف والمراجع السابق.",
        kind: "text",
        marks: 4,
        certifiedEn:
          "The successor auditor must: (1) request that management authorise the predecessor to respond fully to the inquiries; (2) ask the predecessor about facts that might bear on the integrity of management, disagreements on accounting/auditing matters, and the predecessor's understanding of the reason for the change of auditors; (3) assess the replies together with other acceptance due diligence before deciding to accept. AU-C 210 / PCAOB AS 2610.",
        certifiedAr:
          "على المراجع الخلف: (١) طلب تفويض الإدارة للمراجع السابق للرد الكامل على الاستفسارات؛ (٢) سؤال السابق عن وقائع تتعلق بنزاهة الإدارة والخلافات المحاسبية والمراجعية وفهمه لأسباب تغيير المراجع؛ (٣) تقييم الردود مع إجراءات العناية الواجبة قبل القبول، وفق AU-C 210 وPCAOB AS 2610.",
        pointsEn: ["integrity of management", "disagreements", "reason for change of auditors", "authorise the predecessor to respond", "AU-C 210"],
        pointsAr: ["نزاهة الإدارة", "الخلافات", "أسباب تغيير المراجع", "تفويض الرد", "AU-C 210"],
      },
    ],
  },
  {
    id: "cpa-aud-tbs-2",
    family: "cpa-aud",
    labelEn: "TBS 2 — Sample size and audit sampling",
    labelAr: "محاكاة ٢ — حجم العينة وأخذ العينات",
    exhibitEn:
      "In testing controls over purchase approvals at Delta Trading Co., the auditor determined: tolerable deviation rate 7%, expected population deviation rate 2%, sampling risk 5%. A sample of 55 purchase orders was examined and 2 deviations were found. The auditor uses the AICPA statistical tables for attribute sampling.",
    exhibitAr:
      "عند اختبار الضوابط على اعتماد المشتريات بشركة دلتا للتجارة، حدد المراجع: معدل الانحراف المسموح ٧٪، ومعدل الانحراف المتوقع ٢٪، ومخاطر المعاينة ٥٪. فحصت عينة من ٥٥ أمر شراء ووُجد انحرافان، مع استخدام جداول AICPA الإحصائية لأخذ عينات الخصائص.",
    requirements: [
      {
        promptEn: "Using the AICPA table (5% risk of overreliance, 2 deviations in a sample of 55), the achieved upper deviation rate is closest to which percentage (enter the number only)?",
        promptAr: "باستخدام جدول AICPA (مخاطر اعتماد زائد ٥٪، وانحرافان في عينة ٥٥)، ما النسبة المقاربة للحد الأعلى المحقق لمعدل الانحراف؟ (أدخل الرقم فقط)",
        kind: "numeric",
        marks: 3,
        certifiedEn:
          "From the AICPA attribute-sampling table, 2 deviations in 55 items at 5% risk of overreliance gives an upper deviation rate of approximately 10.9% (roughly 10-11%). Because 10.9% exceeds the tolerable rate of 7%, the control cannot be relied upon.",
        certifiedAr:
          "من جدول أخذ عينات الخصائص لدى AICPA، انحرافان في ٥٥ بندًا بمخاطر اعتماد زائد ٥٪ يعطي حدًا أعلى لمعدل الانحراف يقارب ١٠٫٩٪ (نحو ١٠–١١٪). وبما أن ١٠٫٩٪ تتجاوز المسموح ٧٪ فلا يجوز الاعتماد على الضابط.",
        pointsEn: ["10.9", "10-11%", "exceeds tolerable rate", "cannot rely on the control"],
        pointsAr: ["١٠٫٩", "١٠–١١٪", "تتجاوز المسموح", "لا يمكن الاعتماد على الضابط"],
        numeric: { value: 10.9, tolerance: 0.06, unit: "%" },
      },
      {
        promptEn: "State the two courses of action now open to the auditor with respect to the assessed level of control risk.",
        promptAr: "اذكر المسارين المتاحين للمراجع بخصوص مستوى مخاطر الرقابة المُقيَّم.",
        kind: "text",
        marks: 4,
        certifiedEn:
          "The auditor may either (1) increase the assessed level of control risk and enlarge substantive testing of the affected assertions (increase sample sizes, test at interim vs year-end, or perform 100% examination), or (2) test additional items / extend the control test to reach a revised conclusion. Given the upper deviation rate exceeds the tolerable rate, option 1 — raising control risk and extending substantive procedures — is the standard response.",
        certifiedAr:
          "يمكن للمراجع إما (١) رفع مستوى مخاطر الرقابة المقيَّم وتوسيع الاختبارات الجوهرية للتأكيدات المتأثرة (زيادة أحجام العينات أو الفحص الشامل)، أو (٢) اختبار بنود إضافية لتوسيع اختبار الضابط ومراجعة الاستنتاج. وبما أن الحد الأعلى يتجاوز المسموح، فالمسار المعتاد هو رفع مخاطر الرقابة وتوسيع الإجراءات الجوهرية.",
        pointsEn: ["increase control risk", "extend substantive testing", "larger samples", "revise the conclusion"],
        pointsAr: ["رفع مخاطر الرقابة", "توسيع الاختبارات الجوهرية", "عينات أكبر", "تعديل الاستنتاج"],
      },
    ],
  },
  {
    id: "cpa-aud-tbs-3",
    family: "cpa-aud",
    labelEn: "TBS 3 — Subsequent events and the audit report",
    labelAr: "محاكاة ٣ — الأحداث اللاحقة وتقرير المراجعة",
    exhibitEn:
      "The auditor fieldwork for Marakon Industries ended March 5, 2026; the financial statements (December 31, 2025 year end) were issued March 20, 2026. On February 10, 2026, a major customer of Marakon filed for bankruptcy owing EGP 12 million (recorded as receivable at year end; the allowance was EGP 1.4 million). On March 24, 2026, a warehouse fire destroyed inventory insured for only 60% of its EGP 30 million carrying value.",
    exhibitAr:
      "انتهى عمل الفريق لشركة ماركون في ٥ مارس ٢٠٢٦ وصدرت القوائم المالية (عن السنة المنتهية ٣١ ديسمبر ٢٠٢٥) في ٢٠ مارس ٢٠٢٦. في ١٠ فبراير ٢٠٢٦ أُعلن إفلاس عميل رئيسي مدينًا بمبلغ ١٢ مليون جنيه (مقيّد كمدينون في نهاية السنة ومخصص مشكوك فيه ١٫٤ مليون). وفي ٢٤ مارس ٢٠٢٦ أتلف حريق مستودعًا مخزونًا مؤمَّنًا بنسبة ٦٠٪ فقط من قيمته الدفترية البالغة ٣٠ مليون جنيه.",
    requirements: [
      {
        promptEn: "For the customer bankruptcy (February 10, 2026), state the appropriate treatment and the adjusted allowance the auditor should propose (enter the minimum total allowance in EGP million as a number).",
        promptAr: "بخصوص إفلاس العميل (١٠ فبراير ٢٠٢٦)، اذكر المعالجة المناسبة ومقدار المخصص المعدل الذي ينبغي للمراجع اقتراحه (أدخل إجمالي المخصص الأدنى بالمليون جنيه رقمًا).",
        kind: "numeric",
        marks: 3,
        certifiedEn:
          "The bankruptcy occurred after the balance-sheet date but before issuance and confirms a condition existing at the balance date (the customer's financial distress). It is a recognized Type 1 subsequent event: the receivable must be written down — the allowance should be increased to the full EGP 12 million (100% provision).",
        certifiedAr:
          "وقع الإفلاس بعد تاريخ الميزانية وقبل الإصدار ويؤكد وضعًا قائمًا في تاريخ الميزانية، فهو حدث لاحق من النوع الأول: يجب تحميل كامل المبلغ وتسوية المخصص إلى ١٢ مليون جنيه كاملة (مخصص ١٠٠٪).",
        pointsEn: ["adjust the financial statements", "type 1 / recognized", "write off the receivable", "12"],
        pointsAr: ["تسوية القوائم المالية", "النوع الأول", "شطب المدينين", "١٢"],
        numeric: { value: 12, tolerance: 0.001, unit: "EGP m" },
      },
      {
        promptEn: "For the warehouse fire (March 24, 2026), state whether it requires adjustment, disclosure, both or neither — and name the report date responsibility the auditor still carries.",
        promptAr: "بخصوص حريق المستودع (٢٤ مارس ٢٠٢٦)، هل يستلزم تسوية أم إفصاحًا أم كليهما أم لا شيء؟ واذكر مسؤولية المراجع المتبقية عن تاريخ التقرير.",
        kind: "text",
        marks: 4,
        certifiedEn:
          "The fire arose after the balance-sheet date from a condition that did NOT exist at year end — it is a non-recognized (Type 2) subsequent event. Because the statements were already issued on March 20, no adjustment or disclosure is required in those statements; had it occurred before issuance, disclosure of the financial effect would be required. The auditor has no continuing responsibility for events after the report release date unless the auditor becomes aware and the statements are about to be reissued.",
        certifiedAr:
          "نشأ الحريق بعد تاريخ الميزانية عن وضعٍ لم يكن قائمًا في نهاية السنة — حدث لاحق من النوع الثاني (غير مُقيَّد). وبما أن القوائم صدرت في ٢٠ مارس فلا تُطلب تسوية ولا إفصاح فيها؛ ولو وقع قبل الإصدار للزم الإفصاح عن الأثر المالي. ولا يتحمل المراجع مسؤولية مستمرة عن الأحداث بعد تاريخ إصدار التقرير ما لم يطّلع عليها والقوائم على وشك إعادة الإصدار.",
        pointsEn: ["type 2 / non-recognized", "no adjustment", "disclosure only if before issuance", "no responsibility after report date"],
        pointsAr: ["النوع الثاني", "لا تسوية", "الإفصاح فقط قبل الإصدار", "لا مسؤولية بعد تاريخ التقرير"],
      },
    ],
  },
  {
    id: "cpa-aud-tbs-4",
    family: "cpa-aud",
    labelEn: "TBS 4 — Internal control deficiencies (COSO)",
    labelAr: "محاكاة ٤ — نقص الرقابة الداخلية (COSO)",
    exhibitEn:
      "In the audit of Sabre Logistics, the team identified: (A) the credit manager approves credit limits and also posts cash receipts to customer accounts; (B) the IT director is the only person who administers user access and there is no review of the system's activity log; (C) quarterly bank reconciliations are performed but the CFO signs them off without inspecting reconciling items; (D) the warehouse uses pre-numbered goods-out notes, and the sequence is checked monthly.",
    exhibitAr:
      "عند مراجعة شركة صابر للخدمات اللوجستية، رصد الفريق: (أ) مدير الائتمان يعتمد حدود الائتمان ويسجل التحصيلات النقدية في حسابات العملاء؛ (ب) مدير تقنية المعلومات الشخص الوحيد الذي يدير صلاحيات المستخدمين دون مراجعة سجل النشاط؛ (ج) إعداد التسويات البنكية ربع السنوية لكن المدير المالي يعتمدها دون فحص بنود التسوية؛ (د) استخدام إشعارات صرف مرقمة مسبقًا في المخزن مع فحص التسلسل شهريًا.",
    requirements: [
      {
        promptEn: "Classify each of items A, B, C and D as a deficiency, significant deficiency or no deficiency, and identify the COSO component affected for each.",
        promptAr: "صنّف كلًّا من البنود أ، ب، ج، د كنقص أو نقص جوهري أو لا نقص، وحدد مكوّن COSO المتأثر لكل بند.",
        kind: "text",
        marks: 6,
        certifiedEn:
          "A — segregation-of-dutches failure (recording vs authorization) over cash receipts: at least a significant deficiency, control activities component. B — lack of monitoring over IT access and no independent review of privileged activity: significant deficiency, monitoring / control activities. C — supervisory control exists in form but not substance (sign-off without review): deficiency (or significant deficiency), control activities. D — pre-numbered documents with monthly sequence checks: no deficiency, a functioning control activity.",
        certifiedAr:
          "أ — إخفاق في الفصل بين الواجبات (الاعتماد مقابل التسجيل) على التحصيلات: نقص جوهري على الأقل، مكوّن أنشطة الرقابة. ب — غياب الرقابة على صلاحيات تقنية المعلومات دون مراجعة مستقلة لنشاط المميزين: نقص جوهري، مكوّن الرقابة/الأنشطة الرقابية. ج — رقابة إشرافية شكلية دون فحص فعلي: نقص (أو نقص جوهري)، أنشطة الرقابة. د — مستندات مرقمة مع فحص تسلسل شهري: لا نقص، ضابط يعمل بكفاءة.",
        pointsEn: ["A segregation of duties", "B monitoring / privileged access", "C review not performed", "D no deficiency", "significant deficiency", "control activities"],
        pointsAr: ["أ فصل الواجبات", "ب الرقابة والصلاحيات المميزة", "ج عدم الفحص الفعلي", "د لا نقص", "نقص جوهري", "أنشطة الرقابة"],
      },
    ],
  },
]

/* ================================================================== */
/* CPA — Financial Accounting & Reporting (FAR): task-based simulations */
/* ================================================================== */

const CPA_FAR_TASKS: CrTask[] = [
  {
    id: "cpa-far-tbs-1",
    family: "cpa-far",
    labelEn: "TBS 1 — IFRS 16 lease schedule (lessee)",
    labelAr: "محاكاة ١ — جدول إيجار IFRS 16 (المستأجر)",
    exhibitEn:
      "On January 1, 2025, Zephyr Co. signed a 5-year lease for a machine. Annual payments of EGP 200,000 are due each December 31 (in arrears). The rate implicit in the lease is not determinable; Zephyr's incremental borrowing rate is 8%. The machine's useful life is 6 years, residual value zero, straight-line depreciation. Present value factors at 8% for 5 years: ordinary annuity 3.9927.",
    exhibitAr:
      "في ١ يناير ٢٠٢٥ وقّعت شركة زفير عقد إيجار لمدة ٥ سنوات لآلة، بدفعات سنوية ٢٠٠٠٠٠ جنيه تُسدد في ٣١ ديسمبر من كل سنة. يتعذر تحديد المعدل الضمني، والمعدب التراكمي الإضافي الاقتراضي للشركة ٨٪. عمر الآلة الإنتاجي ٦ سنوات بقيمة متبقية صفر وإهلاك قسط ثابت. معامل القيمة الحالية عند ٨٪ لـ٥ سنوات (دفعة عادية) ٣٫٩٩٢٧.",
    requirements: [
      {
        promptEn: "Compute the initial right-of-use asset recognised on January 1, 2025 (enter the EGP amount as a number, e.g. 798540).",
        promptAr: "احسب أصل حق الاستخدام المقيّد في ١ يناير ٢٠٢٥ (أدخل المبلغ بالجنيه رقمًا، مثل 798540).",
        kind: "numeric",
        marks: 3,
        certifiedEn:
          "ROU asset = PV of payments = 200,000 × 3.9927 = EGP 798,540. Journal: Dr ROU asset 798,540 / Cr Lease liability 798,540.",
        certifiedAr:
          "أصل حق الاستخدام = القيمة الحالية للدفعات = ٢٠٠٠٠٠ × ٣٫٩٩٢٧ = ٧٩٨٥٤٠ جنيه. القيد: من ح/ أصل حق استخدام ٧٩٨٥٤٠ إلى ح/ التزام الإيجار ٧٩٨٥٤٠.",
        pointsEn: ["798540", "200000 × 3.9927", "present value"],
        pointsAr: ["٧٩٨٥٤٠", "القيمة الحالية", "٢٠٠٠٠٠ × ٣٫٩٩٢٧"],
        numeric: { value: 798540, tolerance: 0.01, unit: "EGP" },
      },
      {
        promptEn: "Compute the interest expense for 2025 and the closing lease liability at December 31, 2025 (enter the closing liability as a number).",
        promptAr: "احسب مصروف الفوائد عن ٢٠٢٥ والتزام الإيجار الختامي في ٣١ ديسمبر ٢٠٢٥ (أدخل الالتزام الختامي رقمًا).",
        kind: "numeric",
        marks: 3,
        certifiedEn:
          "2025 interest = 8% × 798,540 = EGP 63,883. Liability after payment = 798,540 + 63,883 − 200,000 = EGP 662,423.",
        certifiedAr:
          "فوائد ٢٠٢٥ = ٨٪ × ٧٩٨٥٤٠ = ٦٣٨٨٣ جنيه. الالتزام بعد السداد = ٧٩٨٥٤٠ + ٦٣٨٨٣ − ٢٠٠٠٠٠ = ٦٦٢٤٢٣ جنيه.",
        pointsEn: ["63883", "662423", "8% × 798540"],
        pointsAr: ["٦٣٨٨٣", "٦٦٢٤٢٣", "٨٪ × ٧٩٨٥٤٠"],
        numeric: { value: 662423, tolerance: 0.01, unit: "EGP" },
      },
      {
        promptEn: "State the total 2025 lease-related expense Zephyr reports under IFRS 16 and why it differs from the straight-line rent of EGP 200,000.",
        promptAr: "اذكر إجمالي مصروف الإيجار لعام ٢٠٢٥ بموجب IFRS 16 وسبب اختلافه عن الإيجار الثابت البالغ ٢٠٠٠٠٠ جنيه.",
        kind: "text",
        marks: 4,
        certifiedEn:
          "2025 expense = depreciation 798,540/5 = 159,708 + interest 63,883 = EGP 223,591 — higher than the straight-line rent because the liability is largest at the start, so front-loaded interest makes the total expense decline over the term (interest declines as the liability amortises).",
        certifiedAr:
          "مصروف ٢٠٢٥ = إهلاك ٧٩٨٥٤٠ ÷ ٥ = ١٥٩٧٠٨ + فوائد ٦٣٨٨٣ = ٢٢٣٥٩١ جنيه، وهو أعلى من الإيجار الثابت لأن الالتزام أكبر في البداية فتتركز الفوائد في السنوات الأولى ويتناقص إجمالي المصروف مع الزمن.",
        pointsEn: ["223591", "159708 depreciation", "63883 interest", "front-loaded", "declines over the lease term"],
        pointsAr: ["٢٢٣٥٩١", "إهلاك ١٥٩٧٠٨", "فوائد ٦٣٨٨٣", "مقدم التحميل", "يتناقص مع مدة الإيجار"],
      },
    ],
  },
  {
    id: "cpa-far-tbs-2",
    family: "cpa-far",
    labelEn: "TBS 2 — IFRS 15 revenue with a financing component",
    labelAr: "محاكاة ٢ — إيراد IFRS 15 بمكوّن تمويلي",
    exhibitEn:
      "On January 1, 2025, Helios Solar sells equipment with a normal cash price of EGP 1,000,000 (cost EGP 700,000) to a customer on a 2-year interest-free instalment plan: EGP 550,000 due each December 31 of 2025 and 2026 (total EGP 1,100,000). The customer's borrowing rate is 10%. PV of EGP 1 at 10%: year 1 = 0.9091, year 2 = 0.8264.",
    exhibitAr:
      "في ١ يناير ٢٠٢٥ تبيع شركة هليوس للطاقة الشمسية معداتًا سعرها النقدي المعتاد ١٠٠٠٠٠٠ جنيه (تكلفتها ٧٠٠٠٠٠) لعميل بالتقسيط دون فوائد لمدة سنتين: ٥٥٠٠٠٠ جنيه تُسدد في نهاية كل من ٢٠٢٥ و٢٠٢٦ (الإجمالي ١١٠٠٠٠٠). معدل اقتراض العميل ١٠٪. القيمة الحالية لجنيه واحد عند ١٠٪: السنة الأولى ٠٫٩٠٩١ والثانية ٠٫٨٢٦٤.",
    requirements: [
      {
        promptEn: "Compute the revenue recognised on January 1, 2025 (enter the EGP number).",
        promptAr: "احسب الإيراد المقيّد في ١ يناير ٢٠٢٥ (أدخل المبلغ رقمًا).",
        kind: "numeric",
        marks: 3,
        certifiedEn:
          "Revenue = PV of the consideration = (550,000 × 0.9091) + (550,000 × 0.8264) = 500,005 + 454,520 = EGP 954,525. The difference of 145,475 is treated as interest income over 2 years (significant financing component).",
        certifiedAr:
          "الإيراد = القيمة الحالية للمقابل = (٥٥٠٠٠٠ × ٠٫٩٠٩١) + (٥٥٠٠٠٠ × ٠٫٨٢٦٤) = ٥٠٠٠٠٥ + ٤٥٤٥٢٠ = ٩٥٤٥٢٥ جنيه، ويُعالج الفرق ١٤٥٤٧٥ كإيراد فوائد على سنتين (مكوّن تمويلي جوهري).",
        pointsEn: ["954525", "present value", "financing component 145475"],
        pointsAr: ["٩٥٤٥٢٥", "القيمة الحالية", "مكوّن تمويلي ١٤٥٤٧٥"],
        numeric: { value: 954525, tolerance: 0.01, unit: "EGP" },
      },
      {
        promptEn: "Compute the total interest income recognised in 2025 (enter the EGP number).",
        promptAr: "احسب إجمالي إيراد الفوائد المقيّد عن ٢٠٢٥ (أدخل المبلغ رقمًا).",
        kind: "numeric",
        marks: 3,
        certifiedEn:
          "2025 interest = 10% × 954,525 = EGP 95,453. The receivable at year end = 954,525 + 95,453 − 550,000 = EGP 499,978; 2026 interest = 49,978 bringing cumulative interest to 145,431 (≈ the 145,475 difference, rounding).",
        certifiedAr:
          "فوائد ٢٠٢٥ = ١٠٪ × ٩٥٤٥٢٥ = ٩٥٤٥٣ جنيه. المدينون نهاية السنة = ٩٥٤٥٢٥ + ٩٥٤٥٣ − ٥٥٠٠٠٠ = ٤٩٩٩٧٨ جنيه، وفوائد ٢٠٢٦ = ٤٩٩٧٨ ليصل الإجمالي التراكمي نحو ١٤٥٤٣١ (تقريبًا الفرق ١٤٥٤٧٥).",
        pointsEn: ["95453", "10% × 954525", "receivable 499978"],
        pointsAr: ["٩٥٤٥٣", "١٠٪ × ٩٥٤٥٢٥", "مدينون ٤٩٩٩٧٨"],
        numeric: { value: 95453, tolerance: 0.01, unit: "EGP" },
      },
      {
        promptEn: "Explain briefly why IFRS 15 requires separating the financing component, and how the gross margin on the equipment is affected.",
        promptAr: "اشرح بإيجاز لماذا يشترط IFRS 15 فصل المكوّن التمويلي، وكيف يتأثر هامش ربح المعدات.",
        kind: "text",
        marks: 3,
        certifiedEn:
          "Separating the financing component ensures revenue reflects the cash selling price — the amount the entity would receive for immediate cash transfer — while the time value of money is presented as interest income (finance item), not as revenue. Gross margin is therefore measured on EGP 954,525 of revenue (254,525 vs cost 700,000), not on 1,100,000.",
        certifiedAr:
          "يضمن فصل المكوّن التمويلي أن يعكس الإيراد سعر البيع النقدي — أي المبلغ الذي كان سيُتقاضى مقابل تسليم فوري — وأن تُعرض القيمة الزمنية للنقود كإيراد فوائد بندًا ماليًا لا إيرادًا. لذلك يُقاس هامش الربح على إيراد ٩٥٤٥٢٥ جنيه (٢٥٤٥٢٥ فوق تكلفة ٧٠٠٠٠٠) لا على ١١٠٠٠٠٠.",
        pointsEn: ["cash selling price", "interest income not revenue", "time value of money", "margin on 954525"],
        pointsAr: ["سعر البيع النقدي", "فوائد لا إيراد", "القيمة الزمنية للنقود", "الهامش على ٩٥٤٥٢٥"],
      },
    ],
  },
  {
    id: "cpa-far-tbs-3",
    family: "cpa-far",
    labelEn: "TBS 3 — Business combination and goodwill",
    labelAr: "محاكاة ٣ — اندماج الأعمال والشهرة",
    exhibitEn:
      "On April 1, 2025, Parent Co. acquired 80% of Sub Co. for cash of EGP 4,000,000. Fair values at acquisition: identifiable net assets EGP 4,200,000 (book value EGP 3,800,000; the excess is a patent with 4 remaining years). Goodwill is tested for impairment annually and is not amortised. During 2025-26, an impairment review indicates recoverable amount of the cash-generating unit (including goodwill) is EGP 3,900,000 while its carrying amount is EGP 4,300,000.",
    exhibitAr:
      "في ١ أبريل ٢٠٢٥ استحوذت الشركة الأم على ٨٠٪ من الشركة التابعة مقابل ٤٠٠٠٠٠٠ جنيه نقدًا. القيم العادلة عند الاستحواذ: صافي الأصول المحددة ٤٢٠٠٠٠٠ جنيه (القيمة الدفترية ٣٨٠٠٠٠٠ والفرق براءة اختراع متبقٍ ٤ سنوات). تُختبر الشهرة سنويًا للاضمحلال ولا تُهلك. أظهر اختبار الاضمحلال أن المبلغ القابل للاسترداد لوحدة توليد النقد (مع الشهرة) ٣٩٠٠٠٠٠ جنيه وقيمتها الدفترية ٤٣٠٠٠٠٠ جنيه.",
    requirements: [
      {
        promptEn: "Compute the goodwill recognised at acquisition under the partial goodwill method (enter the EGP number).",
        promptAr: "احسب الشهرة المقيّدة عند الاستحواذ وفق طريقة الشهرة الجزئية (أدخل المبلغ رقمًا).",
        kind: "numeric",
        marks: 3,
        certifiedEn:
          "Partial goodwill = consideration − share of FV of identifiable net assets = 4,000,000 − (80% × 4,200,000) = 4,000,000 − 3,360,000 = EGP 640,000.",
        certifiedAr:
          "الشهرة الجزئية = المقابل − نصيب الأم من القيمة العادلة لصافي الأصول المحددة = ٤٠٠٠٠٠٠ − (٨٠٪ × ٤٢٠٠٠٠٠) = ٦٤٠٠٠٠ جنيه.",
        pointsEn: ["640000", "80% × 4200000", "partial goodwill"],
        pointsAr: ["٦٤٠٠٠٠", "٨٠٪ × ٤٢٠٠٠٠٠", "الشهرة الجزئية"],
        numeric: { value: 640000, tolerance: 0.01, unit: "EGP" },
      },
      {
        promptEn: "Compute the impairment loss to be recognised and state how much of it is charged to the parent (enter the impairment number).",
        promptAr: "احسب خسارة الاضمحلال الواجب قيدها وحدد نصيب الشركة الأم منها (أدخل رقم خسارة الاضمحلال).",
        kind: "numeric",
        marks: 3,
        certifiedEn:
          "Impairment = carrying amount − recoverable amount = 4,300,000 − 3,900,000 = EGP 400,000. Goodwill (640,000) is written down first, so the full loss is an impairment of goodwill. Under partial goodwill, the parent's share is 80% × 400,000 = EGP 320,000 charged in the parent's separate/consolidated P&L allocation (the remaining 80,000 relates to NCI under full goodwill method only).",
        certifiedAr:
          "الاضمحلال = القيمة الدفترية − القابل للاسترداد = ٤٣٠٠٠٠٠ − ٣٩٠٠٠٠٠ = ٤٠٠٠٠٠ جنيه، وتُخفض الشهرة (٦٤٠٠٠٠) أولًا. وبموجب الشهرة الجزئية يكون نصيب الأم ٨٠٪ × ٤٠٠٠٠٠ = ٣٢٠٠٠٠ جنيه (والـ ٨٠٠٠٠ الباقية تخص حقوق الأقلية في طريقة الشهرة الكاملة فقط).",
        pointsEn: ["400000", "goodwill written down first", "parent share 320000"],
        pointsAr: ["٤٠٠٠٠٠", "تخفيض الشهرة أولًا", "نصيب الأم ٣٢٠٠٠٠"],
        numeric: { value: 400000, tolerance: 0.01, unit: "EGP" },
      },
      {
        promptEn: "The parent's CFO proposes to amortise goodwill over 10 years 'to match the patent's life'. Respond under IFRS 3 / IAS 36.",
        promptAr: "يقترح المدير المالي إهلاك الشهرة على ١٠ سنوات 'لموافقة عمر البراءة'. رُدّ وفق IFRS 3 وIAS 36.",
        kind: "text",
        marks: 3,
        certifiedEn:
          "Incorrect. IFRS 3 prohibits amortisation of goodwill; it is tested annually for impairment (and when indicators exist) under IAS 36 by comparing the CGU's carrying amount with its recoverable amount (higher of fair value less costs of disposal and value in use). Only the patent (an identifiable intangible) is amortised over its 4-year life.",
        certifiedAr:
          "غير صحيح؛ يحظر IFRS 3 إهلاك الشهرة، وتُختبر سنويًا للاضمحلال (وعند وجود مؤشرات) وفق IAS 36 بمقارنة القيمة الدفترية لوحدة توليد النقد بمبلغها القابل للاسترداد (الأعلى من القيمة العادلة مطروحًا منها تكاليف البيع والقيمة الاستخدامية). أما البراءة (أصل محدد) فتُهلك على ٤ سنوات.",
        pointsEn: ["prohibited", "annual impairment test", "CGU recoverable amount", "patent amortised over 4 years"],
        pointsAr: ["محظور", "اختبار اضمحلال سنوي", "وحدة توليد النقد", "إهلاك البراءة على ٤ سنوات"],
      },
    ],
  },
  {
    id: "cpa-far-tbs-4",
    family: "cpa-far",
    labelEn: "TBS 4 — EPS and potential shares",
    labelAr: "محاكاة ٤ — ربحية السهم والأسهم المحتملة",
    exhibitEn:
      "Athena Corp. reports for 2025: net income EGP 1,600,000; preference dividends declared EGP 100,000; 1,000,000 ordinary shares outstanding all year. On July 1, 2025 the company issued 400,000 share options with an exercise price of EGP 12 while the average market price for the year was EGP 20. Tax rate 25%.",
    exhibitAr:
      "تعرض شركة أثينا عن ٢٠٢٥: صافي ربح ١٦٠٠٠٠٠ جنيه وتوزيعات أسهم ممتازة معلنة ١٠٠٠٠٠ جنيه وعدد أسهم عادية قائمة ١٠٠٠٠٠٠ سهم طوال السنة. وفي ١ يوليو ٢٠٢٥ أُصدرت ٤٠٠٠٠٠ خيار شراء بسعر تنفيذ ١٢ جنيهًا بينما متوسط سعر السوق للسنة ٢٠ جنيهًا. معدل الضريبة ٢٥٪.",
    requirements: [
      {
        promptEn: "Compute basic EPS for 2025 (enter the number, 2 decimals).",
        promptAr: "احسب ربحية السهم الأساسية عن ٢٠٢٥ (رقمًا بخانتين عشريتين).",
        kind: "numeric",
        marks: 2,
        certifiedEn: "Basic EPS = (1,600,000 − 100,000) / 1,000,000 = EGP 1.50 per share.",
        certifiedAr: "ربحية السهم الأساسية = (١٦٠٠٠٠٠ − ١٠٠٠٠٠) ÷ ١٠٠٠٠٠٠ = ١٫٥٠ جنيه للسهم.",
        pointsEn: ["1.50", "deduct preference dividend", "1,500,000 ÷ 1,000,000", "earnings 1500000"],
        pointsAr: ["١٫٥٠", "خصم توزيعات الممتازة", "١٥٠٠٠٠٠ ÷ ١٠٠٠٠٠٠"],
        numeric: { value: 1.5, tolerance: 0.01, unit: "EGP" },
      },
      {
        promptEn: "Compute diluted EPS for 2025 (enter the number, 2 decimals).",
        promptAr: "احسب ربحية السهم المخفضة عن ٢٠٢٥ (رقمًا بخانتين عشريتين).",
        kind: "numeric",
        marks: 4,
        certifiedEn:
          "Incremental shares = 400,000 × (20 − 12)/20 = 400,000 × 0.4 = 160,000. Diluted EPS = 1,500,000 / 1,160,000 = EGP 1.29 (1.2931). Options issued July 1 use year-average price; no proceeds adjustment is needed beyond the treasury-stock method.",
        certifiedAr:
          "الأسهم الإضافية = ٤٠٠٠٠٠ × (٢٠ − ١٢) ÷ ٢٠ = ١٦٠٠٠٠ سهم. ربحية السهم المخفضة = ١٥٠٠٠٠٠ ÷ ١١٦٠٠٠٠ = ١٫٢٩ جنيه (١٫٢٩٣١)، باستخدام طريقة الأسهم الخزينة.",
        pointsEn: ["160000 incremental shares", "treasury stock method", "1.29", "1160000"],
        pointsAr: ["١٦٠٠٠٠ سهمًا إضافيًا", "طريقة الأسهم الخزينة", "١٫٢٩", "١١٦٠٠٠٠"],
        numeric: { value: 1.29, tolerance: 0.02, unit: "EGP" },
      },
    ],
  },
]

/* ================================================================== */
/* CPA — Regulation (REG): task-based simulations                      */
/* ================================================================== */

const CPA_REG_TASKS: CrTask[] = [
  {
    id: "cpa-reg-tbs-1",
    family: "cpa-reg",
    labelEn: "TBS 1 — Individual federal taxation",
    labelAr: "محاكاة ١ — الضرائب الفيدرالية على الأفراد",
    exhibitEn:
      "Taxpayer (single, 2025) has: salary EGP equivalent $92,000; qualified dividends $3,000; municipal bond interest $1,500; corporate bond interest $800; short-term capital gain $2,200; long-term capital loss carryover from 2024 of $1,000. She made a $2,500 cash donation to a registered public charity and paid $12,000 of itemized deductible interest. The standard deduction for single filers is $15,000.",
    exhibitAr:
      "ممول (أعزب، ٢٠٢٥): راتب يعادل ٩٢٠٠٠ دولار؛ أرباح موزعة مؤهلة ٣٠٠٠؛ فوائد سندات بلدية ١٥٠٠ (معفاة)؛ فوائد سندات شركات ٨٠٠؛ مكسب رأسمالي قصير الأجل ٢٢٠٠؛ خسارة رأسمالية طويلة منقولة من ٢٠٢٤ قدرها ١٠٠٠. تبرعت نقديًا بمبلغ ٢٥٠٠ لجمعية خيرية مسجلة ودفعت ١٢٠٠٠ فوائد خاضعة للجدولة. الخصم القياسي للأعزب ١٥٠٠٠ دولار.",
    requirements: [
      {
        promptEn: "Compute AGI (enter the $ number).",
        promptAr: "احسب الدخل الإجمالي المعدل (أدخل الرقم بالدولار).",
        kind: "numeric",
        marks: 4,
        certifiedEn:
          "AGI = 92,000 salary + 800 corporate bond interest + 1,200 net capital gain (2,200 ST gain − 1,000 LT loss carryover) + 3,000 qualified dividends = $97,000. Municipal bond interest ($1,500) is excluded from gross income.",
        certifiedAr:
          "الدخل المعدل = ٩٢٠٠٠ + ٨٠٠ + صافي المكاسب (٢٢٠٠ − ١٠٠٠ = ١٢٠٠) + ٣٠٠٠ = ٩٧٠٠٠ دولار، مع استبعاد فوائد البلدية المعفاة.",
        pointsEn: ["97000", "municipal excluded", "net capital gain 1200"],
        pointsAr: ["٩٧٠٠٠", "استبعاد البلدية", "صافي المكاسب ١٢٠٠"],
        numeric: { value: 97000, tolerance: 0.001, unit: "$" },
      },
      {
        promptEn: "Should she take the standard deduction or itemize? Compute taxable income (enter the $ number).",
        promptAr: "هل تأخذ الخصم القياسي أم تجدول البنود؟ احسب الدخل الخاضع للضريبة (أدخل الرقم بالدولار).",
        kind: "numeric",
        marks: 3,
        certifiedEn:
          "Itemized = 12,000 interest + 2,500 donation = 14,500 < 15,000 standard deduction, so she claims the standard deduction. Taxable income = 97,000 − 15,000 = $82,000.",
        certifiedAr:
          "الجدولة = ١٢٠٠٠ + ٢٥٠٠ = ١٤٥٠٠ أقل من الخصم القياسي ١٥٠٠٠، فيُعتمد القياسي. الدخل الخاضع = ٩٧٠٠٠ − ١٥٠٠٠ = ٨٢٠٠٠ دولار.",
        pointsEn: ["standard deduction", "82000", "14500 less than 15000"],
        pointsAr: ["الخصم القياسي", "٨٢٠٠٠", "١٤٥٠٠ أقل من ١٥٠٠٠"],
        numeric: { value: 82000, tolerance: 0.001, unit: "$" },
      },
    ],
  },
  {
    id: "cpa-reg-tbs-2",
    family: "cpa-reg",
    labelEn: "TBS 2 — Corporate formation (Section 351)",
    labelAr: "محاكاة ٢ — تأسيس الشركات (القسم 351)",
    exhibitEn:
      "A, B and C form ABC Corp. A transfers land (basis $120,000, FMV $200,000), B transfers equipment (basis $80,000, FMV $150,000), C performs accounting services worth $50,000. Each receives one-third of the shares. The corporation assumes A's mortgage on the land of $60,000.",
    exhibitAr:
      "كوّن أ وب وج شركة ABC. نقل أ أرضًا (أساس ١٢٠٠٠٠ وقيمة سوقية ٢٠٠٠٠٠)، ونقل ب معدات (أساس ٨٠٠٠٠ وقيمة سوقية ١٥٠٠٠٠)، وقدّم ج خدمات محاسبية بقيمة ٥٠٠٠٠، وتقاضى كل منهم ثلث الأسهم. وتحملت الشركة رهنًا على الأرض قدره ٦٠٠٠٠.",
    requirements: [
      {
        promptEn: "Determine A's recognized gain on the transfer (enter the $ number).",
        promptAr: "حدد المكسب المحقق لأ (أدخل الرقم بالدولار).",
        kind: "numeric",
        marks: 4,
        certifiedEn:
          "Section 351 requires: transferors of PROPERTY (A and B) own 80%+ of the shares immediately after — C's service contribution is not property but does not prevent Section 351. A's recognized gain = liability relieved exceeding basis: boot = mortgage 60,000. Gain recognized = lesser of realized gain (80,000) or boot (60,000) = $60,000. Stock basis = 120,000 + 60,000 − 60,000 = $120,000.",
        certifiedAr:
          "يشترط القسم ٣٥١ أن يملك ناقلو الممتلكات (أ وب) ٨٠٪ أو أكثر بعد التأسيس — خدمات ج ليست ممتلكات لكنها لا تمنع التطبيق. مكسب أ المحقق = الأقل من الربح المحقق (٨٠٠٠٠) أو المقابل النقدي (الرهن ٦٠٠٠٠) = ٦٠٠٠٠ دولار. وأساس الأسهم = ١٢٠٠٠٠ + ٦٠٠٠٠ − ٦٠٠٠٠ = ١٢٠٠٠٠.",
        pointsEn: ["60000", "boot / liability relief", "stock basis 120000", "Section 351"],
        pointsAr: ["٦٠٠٠٠", "المقابل النقدي/تحمل الالتزام", "أساس الأسهم ١٢٠٠٠٠", "القسم ٣٥١"],
        numeric: { value: 60000, tolerance: 0.001, unit: "$" },
      },
      {
        promptEn: "How is C's service-for-shares exchange treated? Answer in one sentence with the recognized amount.",
        promptAr: "كيف تُعالج مقايضة ج للخدمات بالأسهم؟ أجب بجملة واحدة مع المبلغ المحقق.",
        kind: "text",
        marks: 3,
        certifiedEn:
          "C has ordinary (compensation) income of $50,000 — services are not property, so no Section 351 deferral for C; stock basis = $50,000.",
        certifiedAr:
          "يحقق ج دخلًا عاديًا (تعويضًا) قدره ٥٠٠٠٠ دولار — الخدمات ليست ممتلكات فلا يؤجَّل وفق القسم ٣٥١، وأساس أسهمه ٥٠٠٠٠.",
        pointsEn: ["ordinary income", "50000", "not property", "basis 50000"],
        pointsAr: ["دخل عادي", "٥٠٠٠٠", "ليست ممتلكات", "الأساس ٥٠٠٠٠"],
      },
    ],
  },
  {
    id: "cpa-reg-tbs-3",
    family: "cpa-reg",
    labelEn: "TBS 3 — Secured transactions and bankruptcy priorities",
    labelAr: "محاكاة ٣ — المعاملات المضمونة وأولويات الإفلاس",
    exhibitEn:
      "Omega Corp files Chapter 7. The estate liquidates for $500,000. Claims: secured bank loan with a perfected security interest in collateral sold for $180,000 (loan balance $220,000); unpaid wages of $150,000 to 30 employees earned within 180 days (each under the cap); administration expenses $60,000; unsecured trade payables $400,000; federal income taxes $50,000.",
    exhibitAr:
      "تقدمت شركة أوميغا لطلب التصفية (الفصل السابع). بيعت أموال التصفية بـ٥٠٠٠٠٠ دولار. المطالبات: قرض بنكي مضمون بضمانة مشهرة بيعت بـ١٨٠٠٠٠ (رصيد القرض ٢٢٠٠٠٠)؛ أجور غير مدفوعة ١٥٠٠٠٠ لـ٣٠ عاملًا اكتسبت خلال ١٨٠ يومًا؛ مصاريف إدارة التصفية ٦٠٠٠٠؛ دائنون عاديون ٤٠٠٠٠٠؛ ضرائب دخل فيدرالية ٥٠٠٠٠.",
    requirements: [
      {
        promptEn: "Distribute the $500,000 in order — state the amount unsecured trade payables receive in total (enter the $ number).",
        promptAr: "وزّع الـ٥٠٠٠٠٠ دولار بالترتيب، وحدد ما تحصل عليه المطالبات العادية إجمالًا (أدخل الرقم بالدولار).",
        kind: "numeric",
        marks: 5,
        certifiedEn:
          "1) Secured bank: 180,000 from collateral; remaining 40,000 becomes an unsecured claim. 2) Administration expenses 60,000. 3) Priority wages 150,000. 4) Taxes 50,000. Residue for unsecured: 500,000 − 180,000 − 60,000 − 150,000 − 50,000 = 60,000. Unsecured pool claims = 400,000 trade + 40,000 bank = 440,000 → each receives 60,000/440,000 ≈ 13.6 cents; trade payables receive 400,000 × 0.1364 ≈ $54,545.",
        certifiedAr:
          "١) البنك المضمون: ١٨٠٠٠٠ من الضمانة، ويتحول الباقي ٤٠٠٠٠ إلى مطالبة عادية. ٢) مصاريف الإدارة ٦٠٠٠٠. ٣) الأجور ذات الأولوية ١٥٠٠٠٠. ٤) الضرائب ٥٠٠٠٠. المتبقي للعاديين: ٥٠٠٠٠٠ − ١٨٠٠٠٠ − ٦٠٠٠٠ − ١٥٠٠٠٠ − ٥٠٠٠٠ = ٦٠٠٠٠، والمطالبات العادية ٤٤٠٠٠٠ (٤٠٠٠٠٠ + ٤٠٠٠٠) فيحصل كل جنيه بنحو ١٣٫٦ سنتًا، وللتجار نحو ٥٤٥٤٥ دولارًا.",
        pointsEn: ["secured first from collateral", "administration expenses second", "wages priority", "taxes priority", "54545"],
        pointsAr: ["المضمون أولًا من الضمانة", "مصاريف الإدارة ثانيًا", "أولوية الأجور", "أولوية الضرائب", "٥٤٥٤٥"],
        numeric: { value: 54545, tolerance: 0.02, unit: "$" },
      },
    ],
  },
]

/* ================================================================== */
/* IFRS diploma (DipIFR) — Section B scenario multi-task questions    */
/* ================================================================== */

const IFRS_DIP_TASKS: CrTask[] = [
  {
    id: "ifrs-dip-mtq-1",
    family: "ifrs-dip",
    labelEn: "Section B Q1 — Consolidated statement of profit or loss",
    labelAr: "القسم ب س١ — قائمة الربح أو الخسارة المجمعة",
    exhibitEn:
      "Parent acquired 75% of Sub's ordinary shares years ago; goodwill is unimpaired. For the year ended March 31, 2026: Parent's revenue $840,000 and cost of sales $520,000; Sub's revenue $300,000 and cost of sales $180,000. During the year Parent sold goods to Sub for $50,000 at a mark-up of 25% on cost; $20,000 (at transfer price) of these goods remained in Sub's inventory at year end. Non-controlling interest is measured at its proportionate share of Sub's identifiable net assets.",
    exhibitAr:
      "استحوذت الأم على ٧٥٪ من أسهم التابعة قبل سنوات، والشهرة غير مصابة بالاضمحلال. عن السنة المنتهية في ٣١ مارس ٢٠٢٦: إيراد الأم ٨٤٠٠٠٠ وتكلفة المبيعات ٥٢٠٠٠٠؛ إيراد التابعة ٣٠٠٠٠٠ وتكلفتها ١٨٠٠٠٠. وباعت الأم للتابعة بضائع بـ٥٠٠٠٠ بهامش ٢٥٪ على التكلفة، وبقي منها ما قيمته (بسعر التحويل) ٢٠٠٠٠ في مخزون التابعة نهاية السنة. وتُقاس حقوق الملكية غير المسيطرة بنسبتها من صافي الأصول المحددة.",
    requirements: [
      {
        promptEn: "Compute the unrealised profit in closing inventory to be eliminated on consolidation (enter the $ number).",
        promptAr: "احسب الربح غير المحقق في مخزون آخر المدة الواجب استبعاده عند التجميع (أدخل الرقم بالدولار).",
        kind: "numeric",
        marks: 3,
        certifiedEn:
          "Mark-up on cost 25% → profit element = 20,000 × 25/125 = $4,000. Adjustments: reduce group inventory and retained earnings (attributable to Parent) by $4,000; the sale itself is eliminated as intra-group revenue and cost (50,000 each).",
        certifiedAr:
          "هامش ٢٥٪ على التكلفة ← عنصر الربح = ٢٠٠٠٠ × ٢٥ ÷ ١٢٥ = ٤٠٠٠ دولار. والتعديلات: تخفيض مخزون المجموعة والأرباح المحتجزة (نصيب الأم) بمقدار ٤٠٠٠، مع استبعاد البيع ذاته كإيراد وتكلفة داخل المجموعة (٥٠٠٠٠ لكل منهما).",
        pointsEn: ["4000", "25/125", "unrealised profit", "reduce inventory and retained earnings"],
        pointsAr: ["٤٠٠٠", "٢٥ ÷ ١٢٥", "الربح غير المحقق", "تخفيض المخزون والأرباح المحتجزة"],
        numeric: { value: 4000, tolerance: 0.001, unit: "$" },
      },
      {
        promptEn: "Compute consolidated revenue and consolidated cost of sales for the year (enter revenue as the number).",
        promptAr: "احسب الإيراد المجمّع وتكلفة المبيعات المجمّعة عن السنة (أدخل الإيراد رقمًا).",
        kind: "numeric",
        marks: 4,
        certifiedEn:
          "Consolidated revenue = 840,000 + 300,000 − 50,000 intra-group sale = $1,090,000. Consolidated cost of sales = 520,000 + 180,000 − 50,000 + 4,000 unrealised profit = $654,000. Group gross profit = 436,000.",
        certifiedAr:
          "الإيراد المجمّع = ٨٤٠٠٠٠ + ٣٠٠٠٠٠ − ٥٠٠٠٠ بيعًا داخل المجموعة = ١٠٩٠٠٠٠ دولار. وتكلفة المبيعات المجمّعة = ٥٢٠٠٠٠ + ١٨٠٠٠٠ − ٥٠٠٠٠ + ٤٠٠٠ ربح غير محقق = ٦٥٤٠٠٠. ومجمل الربح ٤٣٦٠٠٠.",
        pointsEn: ["1090000", "eliminate 50000", "cost of sales 654000", "add back 4000"],
        pointsAr: ["١٠٩٠٠٠٠", "استبعاد ٥٠٠٠٠", "التكلفة ٦٥٤٠٠٠", "إضافة ٤٠٠٠"],
        numeric: { value: 1090000, tolerance: 0.001, unit: "$" },
      },
    ],
  },
  {
    id: "ifrs-dip-mtq-2",
    family: "ifrs-dip",
    labelEn: "Section B Q2 — IAS 36 impairment of a cash-generating unit",
    labelAr: "القسم ب س٢ — اضمحلال وحدة توليد النقد وفق IAS 36",
    exhibitEn:
      "A CGU comprises: goodwill $200,000; patent $150,000; machinery $450,000; inventory $100,000. The recoverable amount of the CGU is measured at $720,000. Inventory is carried at the lower of cost and net realisable value (its NRV is $100,000).",
    exhibitAr:
      "تتألف وحدة توليد النقد من: شهرة ٢٠٠٠٠٠؛ براءة ١٥٠٠٠٠؛ آلات ٤٥٠٠٠٠؛ مخزون ١٠٠٠٠٠. والمبلغ القابل للاسترداد للوحدة ٧٢٠٠٠٠. والمخزون مقيد بالأدنى من التكلفة وصافي القيمة البيعية (قيمته البيعية ١٠٠٠٠٠).",
    requirements: [
      {
        promptEn: "Compute the impairment loss and state where it is charged (enter the loss as a number).",
        promptAr: "احسب خسارة الاضمحلال وحدد أين تُقيد (أدخل الخسارة رقمًا).",
        kind: "numeric",
        marks: 3,
        certifiedEn:
          "Carrying amount of the CGU = 200,000 + 150,000 + 450,000 + 100,000 = 900,000. Impairment = 900,000 − 720,000 = $180,000, charged first to goodwill (limited to 200,000) — so goodwill is reduced to 20,000 and the whole loss is an impairment expense in profit or loss.",
        certifiedAr:
          "القيمة الدفترية للوحدة = ٢٠٠٠٠٠ + ١٥٠٠٠٠ + ٤٥٠٠٠٠ + ١٠٠٠٠٠ = ٩٠٠٠٠٠. والاضمحلال = ٩٠٠٠٠٠ − ٧٢٠٠٠٠ = ١٨٠٠٠٠ دولار، يُحمّل أولًا على الشهرة (في حدود ٢٠٠٠٠٠) فتنخفض إلى ٢٠٠٠٠، وتُقيد الخسارة كاملة كمصروف اضمحلال في الربح أو الخسارة.",
        pointsEn: ["180000", "goodwill first", "profit or loss"],
        pointsAr: ["١٨٠٠٠٠", "الشهرة أولًا", "الربح أو الخسارة"],
        numeric: { value: 180000, tolerance: 0.001, unit: "$" },
      },
      {
        promptEn: "The CFO asks whether inventory can absorb part of the impairment instead. Explain briefly why not.",
        promptAr: "يسأل المدير المالي إن كان يمكن تحميل جزء من الاضمحلال على المخزون. اشرح بإيجاز لماذا لا.",
        kind: "text",
        marks: 3,
        certifiedEn:
          "IAS 36 allocates the loss pro rata to the assets' carrying amounts, but two floors apply: an asset cannot be reduced below the highest of fair value less costs of disposal, value in use (if determinable) and zero; and IAS 2 already carries inventory at the lower of cost and NRV, so its $100,000 carrying amount is already at its IAS 2 floor and the allocation is limited to zero — the excess stays with goodwill/other assets.",
        certifiedAr:
          "يوزّع IAS 36 الخسارة بالتناسب مع القيم الدفترية مع حدّين: لا يُخفض أي أصل عن الأعلى من القيمة العادلة مطروحة تكاليف البيع أو القيمة الاستخدامية أو صفر؛ والمخزون مقيد أصلًا وفق IAS 2 بالأدنى من التكلفة وصافي القيمة البيعية فقيمته ١٠٠٠٠٠ عند حده الأدنى ولا يتحمل مزيدًا، فيبقى الفائض على الشهرة والأصول الأخرى.",
        pointsEn: ["IAS 2 lower of cost and NRV", "allocation floor", "excess to other assets"],
        pointsAr: ["IAS 2 الأدنى من التكلفة والبيعية", "حد التوزيع", "الفائض للأصول الأخرى"],
      },
    ],
  },
  {
    id: "ifrs-dip-mtq-3",
    family: "ifrs-dip",
    labelEn: "Section B Q3 — Financial instruments under IFRS 9",
    labelAr: "القسم ب س٣ — الأدوات المالية بموجب IFRS 9",
    exhibitEn:
      "On January 1, 2025, Mervat Ltd buys a bond at par for $500,000 carrying a fixed 6% coupon, and a second equity investment (2% of a listed company) at $150,000. The bond's business model is hold-to-collect; the equity stake is held for trading. At December 31, 2025 the bond's fair value is $505,000 and the equity investment's fair value is $138,000. During the year there is no significant increase in credit risk on the bond (12-month ECL $2,500).",
    exhibitAr:
      "في ١ يناير ٢٠٢٥ اشترت شركة مروة سندًا بالقيمة الاسمية ٥٠٠٠٠٠ بعائد ثابت ٦٪، واستثمارًا في أسهم بنسبة ٢٪ من شركة مدرجة بـ١٥٠٠٠٠. نموذج العمل للسند هو الاحتفاظ حتى التحصيل، والأسهم محتفظ بها للمضاربة. وفي ٣١ ديسمبر ٢٠٢٥ بلغت القيمة العادلة للسند ٥٠٥٠٠٠ وللأسهم ١٣٨٠٠٠، دون ارتفاع جوهري في مخاطر الائتمان (خسائر ائتمانية متوقعة لـ١٢ شهرًا ٢٥٠٠).",
    requirements: [
      {
        promptEn: "State the measurement categories and where each instrument's 2025 gains/losses are recognised.",
        promptAr: "حدد فئتَي القياس لكل أداة وأين يُقاس ربح أو خسارة كل منهما عن ٢٠٢٥.",
        kind: "text",
        marks: 5,
        certifiedEn:
          "Bond: amortised cost (SPPI + hold-to-collect model) — interest of $30,000 in P&L; the $5,000 fair-value increase is NOT recognised. Loss allowance of $2,500 (12-month ECL) is an impairment loss in P&L, so the bond's carrying amount becomes 500,000 − 2,500 = 497,500. Equity: FVTPL (held for trading) — the $12,000 fall is a loss in P&L with the investment carried at 138,000.",
        certifiedAr:
          "السند: بالتكلفة المطفأة (نموذج الاحتفاظ حتى التحصيل مع اختبار SPPI) — فوائد ٣٠٠٠٠ في الربح أو الخسارة ولا يُقاس ارتفاع القيمة ٥٠٠٠. ومخصص الخسائر ٢٥٠٠ (ECL لـ١٢ شهرًا) مصروف اضمحلال، فتكون القيمة الدفترية ٤٩٧٥٠٠. الأسهم: بالقيمة العادلة عبر الربح أو الخسارة (مضاربة) — انخفاض ١٢٠٠٠ خسارة في القائمة والاستثمار مقيد بـ١٣٨٠٠٠.",
        pointsEn: ["amortised cost", "FVTPL for trading", "12-month ECL", "interest 30000", "equity loss 12000"],
        pointsAr: ["التكلفة المطفأة", "القيمة العادلة عبر الربح للمضاربة", "ECL لـ١٢ شهرًا", "فوائد ٣٠٠٠٠", "خسارة الأسهم ١٢٠٠٠"],
      },
      {
        promptEn: "If instead the business model were 'hold to collect and sell', how would the classification change?",
        promptAr: "لو كان نموذج العمل «الاحتفاظ للتحصيل والبيع» فكيف يتغير التصنيف؟",
        kind: "text",
        marks: 2,
        certifiedEn:
          "The bond would be classified at FVOCI — interest and ECL still in P&L, but fair-value movements go to other comprehensive income (recycled to P&L on derecognition); the contractual cash flows still pass SPPI.",
        certifiedAr:
          "يُصنف السند بالقيمة العادلة عبر الدخل الشامل الآخر — الفوائد وECL في الربح أو الخسارة، وتغيرات القيمة العادلة في الدخل الشامل الآخر (تُعاد تدويرها عند إلغاء الاعتراف)، مع اجتياز اختبار التدفقات التعاقدية SPPI.",
        pointsEn: ["FVOCI", "recycled to P&L", "SPPI still passes"],
        pointsAr: ["FVOCI", "إعادة التدوير", "اجتياز SPPI"],
      },
    ],
  },
  {
    id: "ifrs-dip-mtq-4",
    family: "ifrs-dip",
    labelEn: "Section B Q4 — Deferred tax (IAS 12)",
    labelAr: "القسم ب س٤ — الضريبة المؤجلة (IAS 12)",
    exhibitEn:
      "At December 31, 2025 Sahl Inc. owns equipment costing $600,000; accumulated depreciation in the financial statements is $180,000 (straight-line over 10 years), while accumulated tax depreciation is $270,000 (30% reducing balance). The carrying amount of a provision for warranties is $40,000 (accepted when the goods are sold for tax). The tax rate is 22%.",
    exhibitAr:
      "في ٣١ ديسمبر ٢٠٢٥ تمتلك شركة ساحل معداتًا تكلفتها ٦٠٠٠٠٠؛ وإهلاكها المتراكم محاسبيًا ١٨٠٠٠٠ (قسط ثابت على ١٠ سنوات) بينما الإهلاك الضريبي المتراكم ٢٧٠٠٠٠ (قسط متناقص ٣٠٪). ومخصص ضمان قيمته الدفترية ٤٠٠٠٠ لا يُقبل ضريبيًا إلا عند البيع. ومعدل الضريبة ٢٢٪.",
    requirements: [
      {
        promptEn: "Compute the deferred tax liability on the equipment (enter the $ number).",
        promptAr: "احسب التزام الضريبة المؤجلة على المعدات (أدخل الرقم بالدولار).",
        kind: "numeric",
        marks: 3,
        certifiedEn:
          "Carrying amount 420,000 vs tax base 330,000 → taxable temporary difference 90,000 → DTL = 90,000 × 22% = $19,800.",
        certifiedAr:
          "القيمة الدفترية ٤٢٠٠٠٠ مقابل الأساس الضريبي ٣٣٠٠٠٠ ← فرق مؤقت خاضع ٩٠٠٠٠ ← التزام مؤجل = ٩٠٠٠٠ × ٢٢٪ = ١٩٨٠٠ دولار.",
        pointsEn: ["420000 vs 330000", "90000 difference", "19800"],
        pointsAr: ["٤٢٠٠٠٠ مقابل ٣٣٠٠٠٠", "فرق ٩٠٠٠٠", "١٩٨٠٠"],
        numeric: { value: 19800, tolerance: 0.001, unit: "$" },
      },
      {
        promptEn: "Compute the deferred tax asset on the warranty provision (enter the $ number).",
        promptAr: "احسب أصل الضريبة المؤجلة على مخصص الضمان (أدخل الرقم بالدولار).",
        kind: "numeric",
        marks: 2,
        certifiedEn:
          "Provision carrying amount 40,000, tax base nil → deductible temporary difference 40,000 → DTA = 40,000 × 22% = $8,800 (recognised to the extent profits will be available).",
        certifiedAr:
          "القيمة الدفترية للمخصص ٤٠٠٠٠ وأساسه الضريبي صفر ← فرق مؤقت قابل للخصم ← أصل مؤجل = ٤٠٠٠٠ × ٢٢٪ = ٨٨٠٠ دولار (بقدر توافر أرباح مستقبلية).",
        pointsEn: ["40000", "8800", "deductible temporary difference"],
        pointsAr: ["٤٠٠٠٠", "٨٨٠٠", "فرق قابل للخصم"],
        numeric: { value: 8800, tolerance: 0.001, unit: "$" },
      },
    ],
  },
  {
    id: "ifrs-dip-mtq-5",
    family: "ifrs-dip",
    labelEn: "Section B Q5 — IFRS 15 construction contract",
    labelAr: "القسم ب س٥ — عقد إنشاءات IFRS 15",
    exhibitEn:
      "Nilebuild signs a fixed-price contract of $12,000,000 (expected cost $9,000,000) over three years. Progress is measured by cost-to-cost. Cumulative figures: year 1 — costs incurred $3,600,000; year 2 — further costs $4,500,000 (cumulative $8,100,000); total expected costs have NOT changed. Billings each year: $4,000,000 and $4,600,000.",
    exhibitAr:
      "توقع شركة بناء النيل عقدًا بسعر ثابت ١٢٠٠٠٠٠٠ (تكلفة متوقعة ٩٠٠٠٠٠٠) على ثلاث سنوات، ويقاس التقدم بالتكلفة إلى التكلفة. الأرقام التراكمية: السنة الأولى تكاليف ٣٦٠٠٠٠٠؛ الثانية تكاليف إضافية ٤٥٠٠٠٠٠ (تراكمي ٨١٠٠٠٠٠) دون تغير في التكلفة المتوقعة. المستخلصات: ٤٠٠٠٠٠٠ ثم ٤٦٠٠٠٠٠.",
    requirements: [
      {
        promptEn: "Compute the revenue recognised in year 2 (enter the $ number).",
        promptAr: "احسب الإيراد المقيّد في السنة الثانية (أدخل الرقم بالدولار).",
        kind: "numeric",
        marks: 4,
        certifiedEn:
          "Year 1: 3,600,000/9,000,000 = 40% → revenue 4,800,000. Year 2: 8,100,000/9,000,000 = 90% → cumulative revenue 10,800,000, so year 2 revenue = 10,800,000 − 4,800,000 = $6,000,000.",
        certifiedAr:
          "السنة الأولى: ٣٦٠٠٠٠٠ ÷ ٩٠٠٠٠٠٠ = ٤٠٪ ← إيراد ٤٨٠٠٠٠٠. الثانية: ٨١٠٠٠٠٠ ÷ ٩٠٠٠٠٠٠ = ٩٠٪ ← إيراد تراكمي ١٠٨٠٠٠٠٠، فإيراد السنة الثانية = ١٠٨٠٠٠٠٠ − ٤٨٠٠٠٠٠ = ٦٠٠٠٠٠٠ دولار.",
        pointsEn: ["40% year 1", "90% cumulative", "6000000"],
        pointsAr: ["٤٠٪ سنة أولى", "٩٠٪ تراكمي", "٦٠٠٠٠٠٠"],
        numeric: { value: 6000000, tolerance: 0.001, unit: "$" },
      },
      {
        promptEn: "Explain how the contract appears in the statement of financial position at the end of year 1 (given billings of $4,000,000).",
        promptAr: "اشرح كيف يظهر العقد في المركز المالي نهاية السنة الأولى (بمستخلصات ٤٠٠٠٠٠٠).",
        kind: "text",
        marks: 3,
        certifiedEn:
          "Year 1: revenue 4,800,000 less cost of sales 3,600,000 leaves a contract asset position. Costs to date 3,600,000 + profit recognised (4,800,000 − 3,600,000 = 1,200,000) = 4,800,000 net position, less progress billings 4,000,000 → contract asset of $800,000 presented as 'contract asset' (a receivable only to the extent of an unconditional right).",
        certifiedAr:
          "السنة الأولى: إيراد ٤٨٠٠٠٠٠ مطروحة تكلفة مبيعات ٣٦٠٠٠٠٠ ينتج عنها مركز. التكاليف ٣٦٠٠٠٠٠ + الربح المحقق ١٢٠٠٠٠٠ = ٤٨٠٠٠٠٠ صافي المركز، مطروحًا منها المستخلصات ٤٠٠٠٠٠٠ ← أصل عقد ٨٠٠٠٠٠ يُعرض كأصل عقد (ولا يُعد مدينين إلا في حدود حق غير مشروط).",
        pointsEn: ["contract asset 800000", "profit 1200000", "billings offset"],
        pointsAr: ["أصل عقد ٨٠٠٠٠٠", "الربح ١٢٠٠٠٠٠", "خصم المستخلصات"],
      },
    ],
  },
  {
    id: "ifrs-dip-mtq-6",
    family: "ifrs-dip",
    labelEn: "Section B Q6 — First-time adoption (IFRS 1)",
    labelAr: "القسم ب س٦ — التطبيق الأول (IFRS 1)",
    exhibitEn:
      "Adopting IFRS for the first time on January 1, 2026, Horizon Ltd's previous GAAP capitalised borrowing costs on a self-constructed asset before production began, expensed development expenditure, and did not recognise actuarial losses on its defined benefit plan. Under IFRS the borrowing costs would be expensed ($150,000), development expenditure qualified for capitalisation ($220,000, 5 remaining years... amortisation from year-1), and actuarial losses to date total $90,000.",
    exhibitAr:
      "عند تطبيق المعايير الدولية أول مرة في ١ يناير ٢٠٢٦، رسملت شركة الأفق وفق المعايير السابقة تكاليف الاقتراض لإنشاء ذاتي قبل بدء الإنتاج، وحمّلت التطوير على المصروف، ولم تعترف بالخسائر الاكتوارية لميزة محددة. وبموجب IFRS تُحمّل تكاليف الاقتراض على مصروف (١٥٠٠٠٠)، ويجوز رسملة التطوير (٢٢٠٠٠٠ على ٥ سنوات)، وإجمالي الخسائر الاكتوارية ٩٠٠٠٠.",
    requirements: [
      {
        promptEn: "State, with figures, the adjustments Horizon makes to opening retained earnings under IFRS 1 (enter the NET adjustment as a number: positive = increase).",
        promptAr: "اذكر بالأرقام تسويات الأفق على أرباح بداية الاحتفاظ وفق IFRS 1 (أدخل صافي التسوية رقمًا: موجب = زيادة).",
        kind: "numeric",
        marks: 5,
        certifiedEn:
          "1) Derecognise capitalised borrowing costs: −150,000 (asset removed, expense taken to opening retained earnings). 2) Capitalise development: +220,000 asset, credit opening retained earnings. 3) Recognise actuarial losses: −90,000 (Retroactively through retained earnings is NOT required — IFRS 1 allows them to be taken to opening retained earnings or at transition date; typical exam answer: −90,000 to retained earnings). Net adjustment = −150,000 + 220,000 − 90,000 = −20,000 (a net $20,000 decrease).",
        certifiedAr:
          "١) إلغاء رسملة تكاليف الاقتراض: −١٥٠٠٠٠. ٢) رسملة التطوير: +٢٢٠٠٠٠. ٣) الاعتراف بالخسائر الاكتوارية: −٩٠٠٠٠ في أرباح بداية الاحتفاظ. صافي التسوية = −١٥٠٠٠٠ + ٢٢٠٠٠٠ − ٩٠٠٠٠ = −٢٠٠٠٠ (انخفاض صافٍ ٢٠٠٠٠ دولار).",
        pointsEn: ["-150000 borrowing costs", "+220000 development", "-90000 actuarial", "net -20000"],
        pointsAr: ["−١٥٠٠٠٠ تكاليف اقتراض", "+٢٢٠٠٠٠ تطوير", "−٩٠٠٠٠ اكتوارية", "الصافي −٢٠٠٠٠"],
        numeric: { value: -20000, tolerance: 0.001, unit: "$" },
      },
    ],
  },
]

/* ================================================================== */
/* ACCA Financial Reporting (FR) — Section B scenario questions        */
/* ================================================================== */

const ACCA_FR_TASKS: CrTask[] = [
  {
    id: "acca-fr-mtq-1",
    family: "acca-fr",
    labelEn: "Section B Q1 — Consolidated SFP with NCI",
    labelAr: "القسم ب س١ — المركز المالي المجمّع مع حقوق الأقلية",
    exhibitEn:
      "P acquired 60% of S on the date S was incorporated — no goodwill arose. At 31 December 2025 S's share capital and retained earnings total $500,000 (share capital $200,000; post-acquisition profits $300,000). P's own retained earnings are $1,400,000 (includes dividends received from S of $18,000). During the year P sold goods to S making a profit of $10,000 of which $4,000 remains unrealised in S's inventory.",
    exhibitAr:
      "استحوذت P على ٦٠٪ من S عند تأسيسها فلم تنشأ شهرة. وفي ٣١ ديسمبر ٢٠٢٥ يبلغ رأس مال S وأرباحها المحتجزة ٥٠٠٠٠٠ (رأس المال ٢٠٠٠٠٠ والأرباح بعد الاستحواذ ٣٠٠٠٠٠). وأرباح P المحتجزة ١٤٠٠٠٠٠ (تضم توزيعات واردة من S قدرها ١٨٠٠٠). وباعت P للس S بتحقيق ربح ١٠٠٠٠ لم يتحقق منه ٤٠٠٠ في مخزون نهاية المدة.",
    requirements: [
      {
        promptEn: "Compute consolidated retained earnings at 31 December 2025 (enter the $ number).",
        promptAr: "احسب الأرباح المحتجزة المجمعة في ٣١ ديسمبر ٢٠٢٥ (أدخل الرقم بالدولار).",
        kind: "numeric",
        marks: 5,
        certifiedEn:
          "Group retained earnings = P 1,400,000 + 60% × S's post-acquisition profits (300,000) = 180,000 − unrealised profit 4,000 = $1,576,000. (Dividends received from S of 18,000 are already eliminated within P's books against investment income — no further adjustment needed as it is intra-group.)",
        certifiedAr:
          "الأرباح المحتجزة للمجموعة = ١٤٠٠٠٠٠ + ٦٠٪ × أرباح S بعد الاستحواذ (٣٠٠٠٠٠) = ١٨٠٠٠٠ − الربح غير المحقق ٤٠٠٠ = ١٥٧٦٠٠٠ دولار. (التوزيعات الواردة ١٨٠٠٠ استُبعدت ضمنياً بوصفها داخل المجموعة.)",
        pointsEn: ["1400000", "60% of 300000", "less 4000", "1576000"],
        pointsAr: ["١٤٠٠٠٠٠", "٦٠٪ من ٣٠٠٠٠٠", "خصم ٤٠٠٠", "١٥٧٦٠٠٠"],
        numeric: { value: 1576000, tolerance: 0.001, unit: "$" },
      },
      {
        promptEn: "Compute non-controlling interests at 31 December 2025 (enter the $ number).",
        promptAr: "احسب حقوق الملكية غير المسيطرة في ٣١ ديسمبر ٢٠٢٥ (أدخل الرقم بالدولار).",
        kind: "numeric",
        marks: 3,
        certifiedEn:
          "NCI (proportionate share) = 40% × 500,000 = $200,000. (No goodwill; incorporation-date acquisition.)",
        certifiedAr: "حقوق الأقلية (الحصة التناسبية) = ٤٠٪ × ٥٠٠٠٠٠ = ٢٠٠٠٠٠ دولار.",
        pointsEn: ["40% × 500000", "200000", "share capital + retained earnings", "no goodwill at incorporation"],
        pointsAr: ["٤٠٪ × ٥٠٠٠٠٠", "٢٠٠٠٠٠", "رأس المال + الأرباح المحتجزة", "لا شهرة عند التأسيس"],
        numeric: { value: 200000, tolerance: 0.001, unit: "$" },
      },
    ],
  },
  {
    id: "acca-fr-mtq-2",
    family: "acca-fr",
    labelEn: "Section B Q2 — Cash generated from operations",
    labelAr: "القسم ب س٢ — النقد المتولد من الأنشطة",
    exhibitEn:
      "For the year ended 30 June 2026, Beheira Ltd reports: profit before tax $340,000; depreciation $55,000; loss on disposal of equipment $18,000; interest expense $20,000 (paid in cash); inventory increased $34,000; receivables increased $27,000; payables increased $41,000; income tax expense $85,000 with an opening liability of $22,000 and a closing liability of $16,000.",
    exhibitAr:
      "عن السنة المنتهية في ٣٠ يونيو ٢٠٢٦، تعرض شركة البحيرة: ربح قبل الضريبة ٣٤٠٠٠٠؛ إهلاك ٥٥٠٠٠؛ خسارة بيع معدات ١٨٠٠٠؛ مصروف فوائد ٢٠٠٠٠ مدفوع نقدًا؛ زيادة مخزون ٣٤٠٠٠؛ زيادة مدينين ٢٧٠٠٠؛ زيادة دائنين ٤١٠٠٠؛ مصروف ضريبة ٨٥٠٠٠ والتزام افتتاحي ٢٢٠٠٠ وختامي ١٦٠٠٠.",
    requirements: [
      {
        promptEn: "Compute cash generated from operations (indirect method, before interest and tax paid) (enter the $ number).",
        promptAr: "احسب النقد المتولد من العمليات (الطريقة غير المباشرة قبل فوائد وضرائب مدفوعة) (أدخل الرقم بالدولار).",
        kind: "numeric",
        marks: 5,
        certifiedEn:
          "Start 340,000 + depreciation 55,000 + loss on disposal 18,000 − inventory increase 34,000 − receivables increase 27,000 + payables increase 41,000 = $393,000.",
        certifiedAr:
          "٣٤٠٠٠٠ + إهلاك ٥٥٠٠٠ + خسارة بيع ١٨٠٠٠ − زيادة مخزون ٣٤٠٠٠ − زيادة مدينين ٢٧٠٠٠ + زيادة دائنين ٤١٠٠٠ = ٣٩٣٠٠٠ دولار.",
        pointsEn: ["add back depreciation", "add loss on disposal", "working capital changes", "393000"],
        pointsAr: ["إضافة الإهلاك", "إضافة خسارة البيع", "تغيرات رأس المال العامل", "٣٩٣٠٠٠"],
        numeric: { value: 393000, tolerance: 0.001, unit: "$" },
      },
      {
        promptEn: "Compute income tax paid in the year (enter the $ number).",
        promptAr: "احسب ضريبة الدخل المدفوعة خلال السنة (أدخل الرقم بالدولار).",
        kind: "numeric",
        marks: 2,
        certifiedEn: "Tax paid = expense 85,000 + opening liability 22,000 − closing liability 16,000 = $91,000.",
        certifiedAr: "الضريبة المدفوعة = ٨٥٠٠٠ + ٢٢٠٠٠ − ١٦٠٠٠ = ٩١٠٠٠ دولار.",
        pointsEn: ["91000", "opening less closing liability", "85000 + 22000 − 16000", "cash outflow in operating activities"],
        pointsAr: ["٩١٠٠٠", "الافتتاحي ناقص الختامي", "٨٥٠٠٠ + ٢٢٠٠٠ − ١٦٠٠٠", "تدفق خارج ضمن الأنشطة"],
        numeric: { value: 91000, tolerance: 0.001, unit: "$" },
      },
    ],
  },
  {
    id: "acca-fr-mtq-3",
    family: "acca-fr",
    labelEn: "Section B Q3 — Foreign currency translation",
    labelAr: "القسم ب س٣ — ترجمة العملات الأجنبية",
    exhibitEn:
      "An Egyptian company's foreign subsidiary (functional currency: the euro) reports: non-current assets €400,000 acquired when the rate was EGP 34/€; closing equity (including retained earnings since acquisition) €250,000 at an average rate of EGP 36/€; the closing rate is EGP 37/€. On translation to the presentation currency (EGP), all items translate at closing rate except goodwill/history-based items.",
    exhibitAr:
      "شركة تابعة أجنبية (عملتها الوظيفية اليورو) تعرض: أصول غير متداولة ٤٠٠٠٠٠ يورو اقتُنت بسعر ٣٤ جنيهًا؛ حقوق ملكية ختامية ٢٥٠٠٠٠ يورو بمتوسط ٣٦ جنيهًا؛ وسعر الإقفال ٣٧ جنيهًا. وعند الترجمة إلى الجنيه تُترجم كل البنود بسعر الإقفال.",
    requirements: [
      {
        promptEn: "Explain the IAS 21 translation rule for a subsidiary whose functional currency differs from the parent's presentation currency.",
        promptAr: "اشرح قاعدة الترجمة في IAS 21 لتابعة تختلف عملتها الوظيفية عن عملة العرض للأم.",
        kind: "text",
        marks: 3,
        certifiedEn:
          "Assets and liabilities translate at the closing rate; income and expenses at the transaction-date rate (or a representative average, e.g. EGP 36/€); the resulting exchange differences go to a separate component of equity (translation reserve / OCI) until disposal, when they are recycled to profit or loss.",
        certifiedAr:
          "تُترجم الأصول والالتزامات بسعر الإقفال، والإيرادات والمصروفات بسعر تاريخ العملية (أو متوسط ممثل مثل ٣٦ جنيهًا)، وتُقيّد فروق الصرف في مكوّن مستقل من حقوق الملكية (احتياطي الترجمة ضمن الدخل الشامل الآخر) حتى التصفية حيث يعاد تدويرها إلى الربح أو الخسارة.",
        pointsEn: ["closing rate", "average rate", "OCI / translation reserve", "recycled on disposal"],
        pointsAr: ["سعر الإقفال", "المتوسط", "احتياطي الترجمة", "إعادة التدوير عند التصفية"],
      },
      {
        promptEn: "Compute the EGP carrying amount of the subsidiary's non-current assets at the closing date, and the translated equity if the average rate applied to post-acquisition profits (enter the non-current assets figure as the number).",
        promptAr: "احسب القيمة الدفترية بالجنيه للأصول غير المتداولة للتابعة في تاريخ الإقفال، وحقوق الملكية المترجمة بمتوسط السعر للأرباح بعد الاستحواذ (أدخل رقم الأصول غير المتداولة).",
        kind: "numeric",
        marks: 4,
        certifiedEn:
          "Non-current assets: €400,000 × closing rate EGP 37 = EGP 14,800,000 (closing rate applies to all assets and liabilities regardless of the acquisition-date rate). Equity components translate at their historical rates: share capital at the rate when acquired, retained earnings at the rates when the profits arose (average 36 for post-acquisition profits), and the balancing difference is the translation reserve in OCI — equity is NOT translated at a single closing rate.",
        certifiedAr:
          "الأصول غير المتداولة: ٤٠٠٠٠٠ × سعر الإقفال ٣٧ = ١٤٨٠٠٠٠٠ جنيه (يُطبق سعر الإقفال على كل الأصول والالتزامات بغض النظر عن سعر الاقتناء). أما مكونات حقوق الملكية فتترجم بأسعارها التاريخية: رأس المال بسعر الاقتناء والأرباح المحتجزة بأسعار نشوئها (متوسط ٣٦ لما بعد الاستحواذ) والفرق الموازن هو احتياطي الترجمة في الدخل الشامل الآخر — فلا تترجم حقوق الملكية بسعر إقفال واحد.",
        pointsEn: ["400000 × 37", "14800000", "equity at historical rates", "translation reserve difference"],
        pointsAr: ["٤٠٠٠٠٠ × ٣٧", "١٤٨٠٠٠٠٠", "حقوق الملكية بالأسعار التاريخية", "فرق احتياطي الترجمة"],
        numeric: { value: 14800000, tolerance: 0.001, unit: "EGP" },
      },
    ],
  },
  {
    id: "acca-fr-mtq-4",
    family: "acca-fr",
    labelEn: "Section B Q4 — Provisions and contingencies (IAS 37)",
    labelAr: "القسم ب س٤ — المخصصات والالتزامات المحتملة (IAS 37)",
    exhibitEn:
      "At year end a company faces: (i) a lawsuit where legal advisers assess a 70% probability of losing $500,000; (ii) a second lawsuit with a 40% probability of losing $200,000; (iii) a refund of $80,000 owed to customers under a settled insurance claim; (iv) a plan to retrain 50 staff next year costing $150,000.",
    exhibitAr:
      "في نهاية السنة تواجه الشركة: (١) دعوى باحتمال ٧٠٪ لخسارة ٥٠٠٠٠٠؛ (٢) دعوى ثانية باحتمال ٤٠٪ لخسارة ٢٠٠٠٠٠؛ (٣) مبالغ رد ٨٠٠٠٠ مستحقة للعملاء بمطالبة تسوية؛ (٤) خطة لتدريب ٥٠ موظفًا العام القادم بتكلفة ١٥٠٠٠٠.",
    requirements: [
      {
        promptEn: "State the IAS 37 treatment of each item (i)–(iv) and the total provision recognised (enter the $ number).",
        promptAr: "حدد معالجة IAS 37 لكل بند من (١) إلى (٤) وإجمالي المخصص المقيّد (أدخل الرقم بالدولار).",
        kind: "numeric",
        marks: 5,
        certifiedEn:
          "(i) 70% probable outflow — recognise a provision of $500,000. (ii) 40% — not probable (only possible) → disclose a contingent liability, no provision. (iii) The refund is a liability (not a provision — present obligation to pay is certain) → recognise $80,000 as a payable. (iv) Future retraining is not a present obligation → no provision, no disclosure required. Total provision = $500,000.",
        certifiedAr:
          "(١) احتمال ٧٠٪ ← مخصص ٥٠٠٠٠٠. (٢) ٤٠٪ احتمال ممكن فقط ← إفصاح عن التزام محتمل دون مخصص. (٣) المردودات دين مؤكد لا مخصص ← دائن ٨٠٠٠٠. (٤) التدريب المستقبلي ليس التزامًا قائمًا ← لا مخصص. إجمالي المخصص = ٥٠٠٠٠٠ دولار.",
        pointsEn: ["provision 500000", "contingent liability", "payable not provision", "no provision for future costs"],
        pointsAr: ["مخصص ٥٠٠٠٠٠", "التزام محتمل", "دائن لا مخصص", "لا مخصص للتكاليف المستقبلية"],
        numeric: { value: 500000, tolerance: 0.001, unit: "$" },
      },
    ],
  },
]

/* ================================================================== */
/* ACCA Audit & Assurance (AA) — Section C constructed response        */
/* ================================================================== */

const ACCA_AA_TASKS: CrTask[] = [
  {
    id: "acca-aa-cr-1",
    family: "acca-aa",
    labelEn: "Section C Q1 — Audit of the sales system (controls)",
    labelAr: "القسم ج س١ — مراجعة نظام المبيعات (الضوابط)",
    exhibitEn:
      "Cedar Retail sells furniture online. Customers order through the website; the system automatically checks credit limits before accepting an order; despatch notes are raised by the warehouse; the sales ledger is updated by the system from despatch notes; credit notes require authorisation by the finance director; monthly statements are sent to customers; the aged receivables report is reviewed by the credit controller who chases overdue balances. During the audit the team placed reliance on these controls.",
    exhibitAr:
      "تبيع شركة أرز للأثاث عبر الإنترنت. يطلب العملاء من الموقع؛ ويتحقق النظام تلقائيًا من حدود الائتمان قبل قبول الطلب؛ وتصدر إشعارات الصرف من المخزن؛ ويُحدَّث دفتر المبيعات من إشعارات الصرف آليًا؛ وتتطلب إشعارات الدائن اعتماد المدير المالي؛ وتُرسل كشوف الحساب الشهرية للعملاء؛ ويراجع أمين الائتمان تقرير أعمار المدينين لمتابعة المتأخرات، وقد اعتمد فريق المراجعة على هذه الضوابط.",
    requirements: [
      {
        promptEn: "Identify TWO strengths and state the assertion each one supports.",
        promptAr: "حدد نقطتين قويتين واذكر التأكيد الذي تدعمه كل منهما.",
        kind: "text",
        marks: 4,
        certifiedEn:
          "Strength 1 — automatic credit-limit checking before order acceptance: supports the valuation assertion on receivables (prevents sales to customers unlikely to pay → accurate allowance). Strength 2 — credit notes authorised by the finance director: supports accuracy of revenue (prevents unauthorised reductions of amounts due). Also acceptable: system update of the sales ledger from despatch notes supports completeness of revenue; monthly customer statements support existence/valuation through customer confirmation.",
        certifiedAr:
          "القوة الأولى — التحقق الآلي من حد الائتمان قبل قبول الطلب: تدعم تأكيد التقييم للمدينين (تمنع البيع لعملاء غير قادرين على السداد). القوة الثانية — اعتماد المدير المالي لإشعارات الدائن: تدعم دقة الإيراد (تمنع التخفيضات غير المعتمدة). ويُقبل أيضًا: تحديث دفتر المبيعات من إشعارات الصرف يدعم اكتمال الإيراد، وكشوف الحساب الشهرية تدعم الوجود والتقييم.",
        pointsEn: ["credit limit check — valuation", "credit note authorisation — accuracy", "completeness", "statements"],
        pointsAr: ["فحص حد الائتمان — التقييم", "اعتماد إشعارات الدائن — الدقة", "الاكتمال", "كشوف الحساب"],
      },
      {
        promptEn: "The audit team found that monthly statements were NOT sent for the last four months. Explain the impact on the audit approach.",
        promptAr: "وجد الفريق أن كشوف الحساب لم تُرسل في الأشهر الأربعة الأخيرة. اشرح الأثر على منهجية المراجعة.",
        kind: "text",
        marks: 4,
        certifiedEn:
          "A control that the team relied on has not operated throughout the period — control risk for the valuation/existence of receivables increases. Responses: reduce reliance, extend substantive testing — send external confirmations to a larger sample of customers, review subsequent cash receipts, perform a more detailed aged-analysis review and consider the adequacy of the allowance for doubtful accounts; and communicate the deficiency to management / those charged with governance (ISA 265).",
        certifiedAr:
          "ضابط موثوق به لم يعمل طوال الفترة، فترتفع مخاطر الرقابة على تقييم ووجود المدينين. الاستجابات: تقليل الاعتماد وتوسيع الاختبارات الجوهرية — إرسال تأكيدات خارجية لعينة أكبر، وفحص التحصيلات اللاحقة، وتحليل أعمار مفصل، ومراجعة كفاية مخصص الديون المشكوك فيها، وإبلاغ الإدارة وأصحاب الرقابة بالنقص وفق ISA 265.",
        pointsEn: ["reduce control reliance", "external confirmations", "subsequent cash receipts", "ISA 265 communication"],
        pointsAr: ["تقليل الاعتماد على الضوابط", "تأكيدات خارجية", "التحصيلات اللاحقة", "الإبلاغ وفق ISA 265"],
      },
    ],
  },
  {
    id: "acca-aa-cr-2",
    family: "acca-aa",
    labelEn: "Section C Q2 — Going concern and modified opinions",
    labelAr: "القسم ج س٢ — الاستمرارية وآراء المراجعة المعدلة",
    exhibitEn:
      "Daman Foods' draft statements show net liabilities of $1.2m; the CFO has prepared a cash-flow forecast supported by a binding refinancing agreement signed one week before the audit report date but conditions attached make drawdown uncertain. Management refuses to disclose the refinancing terms in the notes. The board states the forecast shows viability for at least 18 months.",
    exhibitAr:
      "تُظهر مسودة قوائم شركة دمن للأغذية صافي التزامات ١٫٢ مليون؛ وأعد المدير المالي توقعات تدفق نقدي مدعومة باتفاقية تمويل معاد موقعة قبل تاريخ التقرير بأسبوع لكن شروطها تجعل السحب غير مؤكد. وترفض الإدارة الإفصاح عن شروط التمويل، وترى المجلس أن التوقعات تظهر استمرارية ١٨ شهرًا على الأقل.",
    requirements: [
      {
        promptEn: "Describe the auditor's responsibilities regarding going concern under ISA 570 (Revised).",
        promptAr: "صف مسؤوليات المراجع بخصوص الاستمرارية وفق ISA 570 (المعدل).",
        kind: "text",
        marks: 5,
        certifiedEn:
          "ISA 570 (Revised): the auditor must remain alert throughout the audit for events or conditions that may cast significant doubt on going concern; evaluate management's assessment covering at least 12 months from the date of approval (here 18 months satisfies the minimum); assess the adequacy of the cash-flow forecast's underlying data and assumptions (refinancing uncertainty); consider whether the material uncertainty is adequately disclosed; and conclude on the impact for the report — adequate disclosure → unmodified opinion with a Material Uncertainty Related to Going Concern (MURGC) paragraph; inadequate disclosure → qualified/adverse opinion.",
        certifiedAr:
          "يتعين على المراجع بموجب ISA 570 (المعدل) التيقظ طوال المراجعة لظروف قد تثير شكًا جوهريًا في الاستمرارية؛ وتقييم تقييم الإدارة الذي يغطي ١٢ شهرًا على الأقل من تاريخ الاعتماد (١٨ شهرًا هنا تفي بالحد الأدنى)؛ وفحص كفاية بيانات التوقعات وافتراضاتها (عدم تأكد التمويل)؛ وتقييم كفاية الإفصاح عن عدم التأكد الجوهري؛ ثم تحديد أثره على التقرير — إفصاح كافٍ ← رأي غير معدل مع فقرة عدم التأكد الجوهري MURGC؛ وإفصاح غير كافٍ ← رأي متحفظ أو معاكس.",
        pointsEn: ["12 months minimum", "evaluate management's assessment", "material uncertainty disclosure", "MURGC paragraph", "qualified if not disclosed"],
        pointsAr: ["١٢ شهرًا حدًا أدنى", "تقييم تقييم الإدارة", "الإفصاح عن عدم التأكد", "فقرة MURGC", "متحفظ عند عدم الإفصاح"],
      },
      {
        promptEn: "Given the refusal to disclose the refinancing terms, state the expected audit opinion and its form.",
        promptAr: "بالنظر إلى رفض الإفصاح عن شروط التمويل، حدد رأي المراجعة المتوقع وصيغته.",
        kind: "text",
        marks: 3,
        certifiedEn:
          "A qualified opinion ('except for') — the omission of the material uncertainty disclosure is a material but not pervasive misstatement (unless the going-concern basis itself is inappropriate, which would make it adverse). The Basis for Qualified Opinion paragraph describes the omitted disclosure; if the entity were clearly not a going concern, an adverse opinion would be required.",
        certifiedAr:
          "رأي متحفظ «باستثناء» — إغفال الإفصاح عن عدم التأكد الجوهري تحريف جوهري غير منتشر (ما لم يكن أساس الاستمرارية ذاته غير مناسب فيكون الرأي معاكسًا)، مع فقرة أساس التحفظ describing الإغفال.",
        pointsEn: ["qualified / except for", "material not pervasive", "basis for qualified opinion paragraph", "adverse if basis inappropriate"],
        pointsAr: ["متحفظ / باستثناء", "جوهري غير منتشر", "فقرة أساس التحفظ", "معاكس إن انتفى الأساس"],
      },
    ],
  },
  {
    id: "acca-aa-cr-3",
    family: "acca-aa",
    labelEn: "Section C Q3 — Ethics: threats and safeguards",
    labelAr: "القسم ج س٣ — الأخلاقيات: التهديدات والضمانات",
    exhibitEn:
      "Your firm has audited Port Said Steel for nine years. This year the audit partner is approached to join the client's board after the audit. The firm also provides internal audit outsourcing and a valuation service to value the company's land for its financial statements. Total fees from the client represent 35% of the firm's revenue. The audit committee has asked for the fee for this year to be contingent on obtaining bank financing.",
    exhibitAr:
      "يؤدي مكتبك مراجعة شركة بورسعيد للحديد منذ تسع سنوات. وطُلب من شريك المراجعة الانضمام لمجلس الشركة بعد المراجعة، ويقدم المكتب أيضًا التزامات مراجعة داخلية وخدمة تقييم لتقدير أراضي الشركة في قوائمها، وتمثل أتعاب العميل ٣٥٪ من إيراد المكتب، وطلبت لجنة المراجعة أن تكون أتعاب العام مشروطة بالحصول على تمويل مصرفي.",
    requirements: [
      {
        promptEn: "Identify each threat to independence and its category under the IESBA Code.",
        promptAr: "حدد كل تهديد للاستقلالية وصنفه وفق ميثاق IESBA.",
        kind: "text",
        marks: 5,
        certifiedEn:
          "(1) Partner joining the board — familiarity and self-interest threat. (2) Internal audit outsourcing — self-review threat (and management responsibility threat). (3) Valuation of land for the financial statements — self-review threat (the firm would be auditing its own work). (4) Fee reliance at 35% — self-interest / fee dependency threat. (5) Contingent fee for an assurance engagement — prohibited outright (self-interest); contingent fees for audits are never acceptable.",
        certifiedAr:
          "(١) انضمام الشريك للمجلس — تهديد ألفة ومصلحة ذاتية. (٢) التزامات المراجعة الداخلية — تهديد مراجعة الذات (ومسؤوليات الإدارة). (٣) تقييم الأراضي للقوائم — تهديد مراجعة الذات (مراجعة عمل المكتب ذاته). (٤) اعتماد الأتعاب ٣٥٪ — تهديد مصلحة ذاتية/اعتماد على الأتعاب. (٥) الأتعاب المشروطة — محظورة حظرًا تامًا (مصلحة ذاتية).",
        pointsEn: ["familiarity", "self-review", "self-interest", "fee dependency 35%", "contingent fee prohibited"],
        pointsAr: ["الألفة", "مراجعة الذات", "المصلحة الذاتية", "الاعتماد على الأتعاب ٣٥٪", "حظر الأتعاب المشروطة"],
      },
      {
        promptEn: "Recommend the safeguards or action required for the valuation service and the contingent fee.",
        promptAr: "اقترح الضمانات أو الإجراء اللازم لخدمة التقييم وللأتعاب المشروطة.",
        kind: "text",
        marks: 4,
        certifiedEn:
          "Valuation service: material and self-review threat with no safeguard — decline the engagement (or have it performed by another firm and do not audit its output). Contingent fee: prohibited for assurance engagements — must be refused; offer a normal fixed/pre-agreed fee basis instead. Safeguards for fee dependency: rotate the engagement partner, seek an external quality review, reduce fee reliance, and use an engagement quality reviewer.",
        certifiedAr:
          "خدمة التقييم: تهديد جوهري لمراجعة الذات لا ضمان له — يجب رفض الارتباط (أو تنفيذه عبر مكتب آخر دون مراجعة مخرجاته). والأتعاب المشروطة محظورة لارتباطات التأكيد — ترفض ويُقترح أساس أتعاب ثابت متفق مسبقًا. وللاعتماد على الأتعاب: تدوير شريك الارتباط، ومراجعة جودة خارجية، وتقليل نسبة الأتعاب، ومراجع جودة ارتباط.",
        pointsEn: ["decline the valuation", "contingent fee must be refused", "partner rotation", "engagement quality review"],
        pointsAr: ["رفض التقييم", "رفض الأتعاب المشروطة", "تدوير الشريك", "مراجعة جودة الارتباط"],
      },
    ],
  },
  {
    id: "acca-aa-cr-4",
    family: "acca-aa",
    labelEn: "Section C Q4 — Inventory count attendance",
    labelAr: "القسم ج س٤ — حضور جرد المخزون",
    exhibitEn:
      "The auditor attends the year-end inventory count of a food distributor with three warehouses. Pre-numbered count sheets are used; counters work in pairs; one pair counts while the other records; slow-moving items are stored separately; the client insists the auditor count only a small sample 'to save time'; the last despatch of the year leaves at 23:40 on count night; some goods held on consignment are stored in warehouse 2.",
    exhibitAr:
      "يحضر المراجع جرد نهاية السنة لموزع أغذية لديه ثلاثة مستودعات. تُستخدم كشوف جرد مرقمة مسبقًا؛ ويعمل العُدّادون ثنائيات؛ ويعمل فريق العد بينما يسجل آخر؛ وتُخزن الأصناف بطيئة الحركة منفصلة؛ وتصر الشركة على أن يعُد المراجع عينة صغيرة «توفيرًا للوقت»؛ وتغادر آخر شحنة في ٢٣:٤٠ ليلة الجرد؛ وتُخزن أمانة بيع (كونسيجنشن) في المستودع الثاني.",
    requirements: [
      {
        promptEn: "List the procedures the auditor should perform AT the count (during attendance).",
        promptAr: "اذكر الإجراءات التي ينفذها المراجع أثناء حضور الجرد.",
        kind: "text",
        marks: 5,
        certifiedEn:
          "Observe the client's counting procedures; perform sample counts (in BOTH directions — auditor-to-sheet and sheet-to-auditor) at a sample appropriate to risk, not the client's convenience; record the final despatch/receipt numbers (23:40) for cut-off testing; inspect the condition of goods (damaged/slow-moving); identify goods held on consignment (belong to third parties — exclude from inventory) and goods held for third parties; control the count sheets (pre-numbered sequence, all sheets returned); obtain the final reconciliation of counts to the ledger.",
        certifiedAr:
          "ملاحظة إجراءات العد لدى الشركة؛ وإجراء عينات عد بالاتجاهين (من المراجع للكشف والعكس) بحجم مناسب للمخاطر لا بحسب رغبة الشركة؛ وتسجيل أرقام آخر صواب/استلام (٢٣:٤٠) لاختبار الحد الفاصل؛ وفحص حالة البضائع (تالفة/بطيئة)؛ وتحديد أمانات البيع للغير (تُستبعد من المخزون) والبضائع المودعة للغير؛ وضبط تسلسل كشوف الجرد واستردادها كلها؛ والحصول على تسوية الجرد مع الدفاتر.",
        pointsEn: ["observe client procedures", "two-directional test counts", "cut-off — last despatch numbers", "condition + slow-moving", "consignment goods excluded"],
        pointsAr: ["ملاحظة إجراءات العد", "عينات بالاتجاهين", "الحد الفاصل وآخر صواب", "الحالة وبطيئة الحركة", "استبعاد أمانات البيع"],
      },
      {
        promptEn: "Respond to the client's request that the auditor count only a small sample.",
        promptAr: "رُد على طلب الشركة أن يعُد المراجع عينة صغيرة فقط.",
        kind: "text",
        marks: 3,
        certifiedEn:
          "The sample size is the auditor's professional judgement driven by risk, not a client concession — inventory is likely material (food distributor). If the client restricts audit evidence, the auditor considers it a scope limitation, discusses with those charged with governance, and may need to qualify the opinion for insufficient appropriate evidence (ISA 500/705).",
        certifiedAr:
          "حجم العينة قرار مهني للمراجع تحدده المخاطر لا تنازل من الشركة — فالمخزون غالبًا جوهري لموزع أغذية. وإذا قُيّد الدليل عدّه المراجع قيدًا على النطاق وناقش أصحاب الرقابة وقد يتحفظ الرأي لعدم كفاية الأدلة (ISA 500/705).",
        pointsEn: ["auditor determines sample", "scope limitation", "qualify opinion", "ISA 500/705"],
        pointsAr: ["العينة قرار المراجع", "قيد على النطاق", "تحفظ الرأي", "ISA 500/705"],
      },
    ],
  },
]

/* ================================================================== */
/* ACCA SBL / SBR — full scenario papers                               */
/* ================================================================== */

const ACCA_SBL_TASKS: CrTask[] = [
  {
    id: "acca-sbl-sc-1",
    family: "acca-sbl",
    labelEn: "Scenario task 1 — Governance and board committees",
    labelAr: "مهمة سيناريو ١ — الحوكمة ولجان المجلس",
    exhibitEn:
      "Kafr Engineering is a family-controlled listed contractor. The chair is the founder's son; the CEO is his cousin; the audit committee consists of the CFO, a long-serving non-executive friend of the family and a retired site manager; no nomination committee exists; board meetings routinely approve related-party transactions with family firms; the company secretary keeps no minutes of committee discussions; risk management is 'handled by the CFO when time permits'. The board asks whether any of this matters before an IPO-seeking investor completes due diligence.",
    exhibitAr:
      "شركة كفر للهندسة مقاول عام مساهم تسيطر عليه عائلة. رئيس المجلس نجل المؤسس والمدير التنفيذي ابن عمه؛ وتتكون لجنة المراجعة من المدير المالي وصديق قديم للعائلة غير تنفيذي ومدير موقع متقاعد؛ ولا توجد لجنة ترشيحات؛ ويعتمد المجلس بانتظام معاملات مع أطراف ذات علاقة مع شركات عائلية؛ ولا يحتفظ أمين الشركة بمحاضر لمناقشات اللجان؛ وتدار المخاطر «من المدير المالي متى سمح الوقت». ويسأل المجلس عما إذا كان لذلك أهمية قبل أن تكمل مستثمرة تبحث عن الطرح اهتمامها العناية الواجبة.",
    requirements: [
      {
        promptEn: "Evaluate the governance weaknesses and prioritise the THREE most urgent fixes for the investor due diligence.",
        promptAr: "قيّم مواطن ضعف الحوكمة ورتب ثلاث إصلاحات عاجلة قبل العناية الواجبة للمستثمرة.",
        kind: "text",
        marks: 6,
        certifiedEn:
          "Weaknesses: combined chair/CEO family dominance (no separation, duality risk); audit committee lacks independence and financial expertise (CFO is a member — prohibited) and is not properly constituted (should be entirely non-executive with at least one financial expert); no nomination committee → family succession; unmanaged related-party transactions (no declaration/audit process); poor documentation (minutes) undermines transparency; no risk-management framework (COSO/ISO 31000 absent). Urgent fixes: (1) reconstitute the audit committee of independent non-executives with a financial expert, chaired by someone unrelated to the family, excluding the CFO; (2) establish a related-party transactions policy — declarations of interest, pre-approval by the audit committee, disclosure; (3) appoint independent non-executive directors (and a senior independent director) with a nomination committee, and formalise risk management with board ownership. These address the investor's key risks: manipulation, tunnelling and weak oversight.",
        certifiedAr:
          "مواطن الضعف: هيمنة عائلية تجمع الرئاسة والتنفيذ دون فصل؛ لجنة مراجعة فاقدة الاستقلالية والخبرة المالية (عضوية المدير المالي محظورة) وغير مشكلة على النحو الواجب (ينبغي أن تكون من غير تنفيذيين بخبير مالي واحد على الأقل)؛ غياب لجنة الترشيحات؛ معاملات أطراف ذات علاقة بلا ضوابط؛ ضعف التوثيق والمحاضر؛ وغياب إطار إدارة مخاطر. الإصلاحات العاجلة: (١) إعادة تشكيل لجنة المراجعة من مستقلين غير تنفيذيين بخبير مالي برئاسة غير مرتبطة بالعائلة، (٢) سياسة معاملات الأطراف ذات العلاقة بت declarations واعتماد مسبق من لجنة المراجعة وإفصاح، (٣) تعيين أعضاء مستقلين ومدير مستقل أول مع لجنة ترشيحات وتنظيم رسمي لإدارة المخاطر تحت إشراف المجلس.",
        pointsEn: ["audit committee independence", "CFO must not sit", "related-party controls", "nomination committee", "risk framework", "independent NEDs"],
        pointsAr: ["استقلالية لجنة المراجعة", "حظر عضوية المدير المالي", "ضوابط الأطراف ذات العلاقة", "لجنة الترشيحات", "إطار المخاطر", "أعضاء مستقلون"],
      },
    ],
  },
  {
    id: "acca-sbl-sc-2",
    family: "acca-sbl",
    labelEn: "Scenario task 2 — Technology and data strategy",
    labelAr: "مهمة سيناريو ٢ — استراتيجية التكنولوجيا والبيانات",
    exhibitEn:
      "Kafr Engineering still runs site reports on spreadsheets emailed between offices; three regional offices use different ERP instances; site engineers photograph paper job tickets; project profitability is only known months after completion; the CFO wants a single cloud ERP with mobile ticketing and a live dashboard, but site managers resist — 'we have always done it this way'. The board worries about cost (EGP 25m) against annual revenue of EGP 800m and cyber risk.",
    exhibitAr:
      "ما زالت شركة كفر تدير تقارير المواقع عبر جداول بريدية، ولديها ثلاثة مكاتب إقليمية بأنظمة ERP مختلفة، ويصور مهندسو المواقع تذاكر عمل ورقية، ولا تُعرف ربحية المشروعات إلا بعد شهور من الانتهاء. يريد المدير المالي نظام ERP سحابيًا موحدًا بتذاكر محمولة ولوحة متابعة حية، لكن مديري المواقع يقاومون «هكذا اعتدنا»، ويقلق المجلس من التكلفة (٢٥ مليون جنيه) مقابل إيراد سنوي ٨٠٠ مليون ومن المخاطر السيبرانية.",
    requirements: [
      {
        promptEn: "Recommend how the board should evaluate and govern the ERP investment (financial + non-financial).",
        promptAr: "أوصِ بكيفية تقييم المجلس وحوكمة استثمار الـERP (ماليًا وغير مالي).",
        kind: "text",
        marks: 6,
        certifiedEn:
          "Financial: build a business case with lifecycle costs (licence, implementation, integration, training, run costs) against measurable benefits — earlier over-run detection (margin leakage on projects), working-capital and cash-flow visibility, reduced rework and audit effort; use payback/NPV with sensitivity analysis, and stage the investment in phases to limit capital at risk. Non-financial: data quality and one version of the truth; cyber security (access controls, ISO 27001, incident response), vendor lock-in and exit clauses, GDPR/data protection, staff capability plan. Governance: a board-sponsored steering committee with executive sponsorship, a benefits-realisation owner, KPI dashboard from day one, phased rollout pilots (one region first), change management for site managers (consultation, champions, training, quick wins) — addressing resistance as a people/leadership issue, not a technology one.",
        certifiedAr:
          "ماليًا: بناء دراسة جدوى بالتكاليف الكاملة للدورة (تراخيص وتطبيق وتكامل وتدريب وتشغيل) مقابل منافع قابلة للقياس — الاكتشاف المبكر لتجاوزات التكلفة، ووضوح رأس المال العامل، وتقليل إعادة العمل؛ باستخدام فترة الاسترداد وصافي القيمة الحالية وتحليل الحساسية والتقسيم المرحلي لتقليل المخاطرة. غير المالي: جودة البيانات ونسخة واحدة للحقيقة، والأمن السيبراني (ضوابط الوصول وISO 27001 والاستجابة للحوادث)، والاعتماد على المورد وشروط الخروج، وحماية البيانات، وخطة قدرات الموظفين. حوكمةً: لجنة توجيه برعاية المجلس مع رعاية تنفيذية، ومسؤول تحقق المنافع، ومؤشرات أداء من اليوم الأول، وتشغيل تجريبي بمنطقة واحدة، وإدارة تغيير لمديري المواقع (مشاورات وأبطال وتدريب ومكاسب سريعة) فالمقاومة قضية قيادة لا تكنولوجيا.",
        pointsEn: ["lifecycle cost business case", "NPV / payback with sensitivities", "phased rollout", "cyber security", "steering committee", "change management"],
        pointsAr: ["دراسة جدوى بالتكاليف الكاملة", "NPV والاسترداد", "تقسيم مراحلي", "الأمن السيبراني", "لجنة توجيه", "إدارة التغيير"],
      },
    ],
  },
]

const ACCA_SBR_TASKS: CrTask[] = [
  {
    id: "acca-sbr-sc-1",
    family: "acca-sbr",
    labelEn: "Scenario task 1 — Complex consolidation issues",
    labelAr: "مهمة سيناريو ١ — مسائل تجميع معقدة",
    exhibitEn:
      "Group acquired 80% of Delta when Delta's retained earnings were $100,000; consideration was $1,500,000 cash. At acquisition Delta's identifiable net assets at fair value were $1,600,000. Delta's land was undervalued by $400,000. Full goodwill method is in use; NCI at acquisition measured at $350,000. An associate (30%) sold goods to the group during the year making a profit of $30,000, of which $10,000 remains in group inventory. Impairment review at year end: goodwill carrying $460,000, recoverable amount $380,000.",
    exhibitAr:
      "استحوذت المجموعة على ٨٠٪ من دلتا حين كانت أرباحها المحتجزة ١٠٠٠٠٠ مقابل مقابل نقدي ١٥٠٠٠٠٠. وعند الاستحواذ بلغت صافي الأصول المحددة بالقيمة العادلة ١٦٠٠٠٠٠، وكانت أراضي دلتا مقيّمة بأقل ٤٠٠٠٠٠. وتُستخدم طريقة الشهرة الكاملة وقُيّمت حقوق الأقلية عند الاستحواذ بـ٣٥٠٠٠٠. وباعت شركة زميلة (٣٠٪) بضائع للمجموعة محققة ربحًا ٣٠٠٠٠ بقي منه ١٠٠٠٠ في المخزون. وفي مراجعة الاضمحلال: الشهرة الدفترية ٤٦٠٠٠٠ والمسترد ٣٨٠٠٠٠.",
    requirements: [
      {
        promptEn: "Compute goodwill at acquisition under the full goodwill method (enter the $ number).",
        promptAr: "احسب الشهرة عند الاستحواذ بطريقة الشهرة الكاملة (أدخل الرقم بالدولار).",
        kind: "numeric",
        marks: 4,
        certifiedEn:
          "Full goodwill = consideration 1,500,000 + NCI 350,000 − FV of identifiable net assets at acquisition 1,600,000 = $250,000.",
        certifiedAr:
          "الشهرة الكاملة = المقابل ١٥٠٠٠٠٠ + حقوق الأقلية ٣٥٠٠٠٠ − القيمة العادلة لصافي الأصول ١٦٠٠٠٠٠ = ٢٥٠٠٠٠ دولار.",
        pointsEn: ["1500000 + 350000", "minus 1600000", "250000"],
        pointsAr: ["١٥٠٠٠٠٠ + ٣٥٠٠٠٠", "خصم ١٦٠٠٠٠٠", "٢٥٠٠٠٠"],
        numeric: { value: 250000, tolerance: 0.001, unit: "$" },
      },
      {
        promptEn: "Compute the impairment loss attributable to the group and to the NCI (enter the group's share as a number).",
        promptAr: "احسب خسارة الاضمحلال المنسوبة للمجموعة ولحقوق الأقلية (أدخل نصيب المجموعة رقمًا).",
        kind: "numeric",
        marks: 3,
        certifiedEn:
          "Impairment = 460,000 − 380,000 = 80,000. Under full goodwill, split by ownership: group 80% = 64,000; NCI 20% = 16,000.",
        certifiedAr:
          "الاضمحلال = ٤٦٠٠٠٠ − ٣٨٠٠٠٠ = ٨٠٠٠٠. وبالشهرة الكاملة يوزع بنسب الملكية: المجموعة ٨٠٪ = ٦٤٠٠٠، والأقلية ٢٠٪ = ١٦٠٠٠.",
        pointsEn: ["80000", "64.000 group", "16000 NCI", "full goodwill split"],
        pointsAr: ["٨٠٠٠٠", "٦٤٠٠٠ للمجموعة", "١٦٠٠٠ للأقلية", "توزيع الشهرة الكاملة"],
        numeric: { value: 64000, tolerance: 0.001, unit: "$" },
      },
      {
        promptEn: "Explain the treatment of the associate's sale profit in the group accounts.",
        promptAr: "اشرح معالجة ربح بيع الشركة الزميلة في قوائم المجموعة.",
        kind: "text",
        marks: 4,
        certifiedEn:
          "The group is the buyer here (upstream sale from associate to group). Under equity accounting the group's share of the unrealised profit is eliminated: the inventory is reduced and the investment in associate is reduced by the group's share — 30% × 10,000 = $3,000. Downstream (group→associate) would adjust the group's own revenue/cost instead.",
        certifiedAr:
          "المجموعة هي المشتري (بيع من الزميلة إلى المجموعة). وبموجب طريقة الحصصة يستبعد نصيب المجموعة من الربح غير المحقق: يُخفض المخزون والاستثمار في الزميلة بنصيب المجموعة — ٣٠٪ × ١٠٠٠٠ = ٣٠٠٠ دولار. أما البيع في الاتجاه المعاكس فيعدل إيراد وتكلفة المجموعة ذاتها.",
        pointsEn: ["upstream sale", "reduce inventory", "reduce investment in associate", "30% × 10000 = 3000"],
        pointsAr: ["بيع صاعد", "تخفيض المخزون", "تخفيض الاستثمار في الزميلة", "٣٠٪ × ١٠٠٠٠ = ٣٠٠٠"],
      },
    ],
  },
  {
    id: "acca-sbr-sc-2",
    family: "acca-sbr",
    labelEn: "Scenario task 2 — IFRS 18 presentation and ESG-linked liabilities",
    labelAr: "مهمة سيناريو ٢ — عرض IFRS 18 والتزامات مرتبطة بالاستدامة",
    exhibitEn:
      "A listed manufacturer is preparing for IFRS 18 (mandatory 2027). It currently reports 'revenue' including agent-collected consumption taxes, presents interest paid within operating cash flows, and aggregates all operating expenses in one line. It also issues green bonds whose coupon steps up by 1% if emissions targets are missed; the probability of missing the target is assessed at 40%.",
    exhibitAr:
      "مصنع مساهم يستعد لتطبيق IFRS 18 (إلزامي ٢٠٢٧). يعرض حاليًا «الإيراد» شاملًا ضرائب الاستهلاك المحصلة كوكيل، ويعرض الفوائد المدفوعة داخل التدفقات التشغيلية، ويجمع كل المصروفات التشغيلية في بند واحد. كما يصدر سندات خضراء يرتفع كوبونها ١٪ عند الإخلال بأهداف الانبعاثات، واحتمال الإخلال ٤٠٪.",
    requirements: [
      {
        promptEn: "Explain the THREE IFRS 18 changes most relevant to this entity.",
        promptAr: "اشرح أهم ثلاثة تغييرات يفرضها IFRS 18 على هذه المنشأة.",
        kind: "text",
        marks: 5,
        certifiedEn:
          "(1) Revenue must be presented net of collected consumption taxes (agent amounts excluded) — the gross figure overstates the new defined 'revenue' category. (2) Cash-flow statement: interest paid and dividends must move to a single consistent classification (operating or financing) applied consistently — remove interest from operating if the policy places it in financing. (3) Expense presentation: the three new defined subtotals require grouping by nature (operating expenses into categories like cost of sales, other operating) with enhanced disclosures including management-defined performance measures (MPMs) reconciled to IFRS totals.",
        certifiedAr:
          "(١) عرض الإيراد صافيًا من ضرائب الاستهلاك المحصلة كوكيل — فالإجمالي يبالغ في فئة الإيراد المعرّفة الجديدة. (٢) قائمة التدفقات: إعادة تصنيف الفوائد المدفوعة والتوزيعات تصنيفًا واحدًا متسقًا (تشغيلي أو تمويلي) بحسب السياسة المعلنة. (٣) عرض المصروفات: المجاميع الفرعية الجديدة تلزم تجميع المصروفات التشغيلية حسب الطبيعة مع إفصاحات معززة تشمل المقاييس المعرّفة من الإدارة وربطها بالإجماليات وفق المعايير.",
        pointsEn: ["net of consumption taxes", "interest paid classification", "expense categories by nature", "MPM disclosure"],
        pointsAr: ["صافي ضرائب الاستهلاك", "تصنيف الفوائد المدفوعة", "تجميع المصروفات حسب الطبيعة", "الإفصاح عن مقاييس الإدارة"],
      },
      {
        promptEn: "How should the green bond's step-up coupon be accounted for at issuance?",
        promptAr: "كيف يُعالج الكوبون المتدرج للسندات الخضراء عند الإصدار؟",
        kind: "text",
        marks: 4,
        certifiedEn:
          "The bond is a financial liability at amortised cost. The coupon step-up contingent on emissions targets is NOT recognised as a liability in advance: the contractual coupon (initial rate) is the basis, with interest expense at the effective rate; a change in the estimate of whether the step-up applies is accounted for prospectively once the trigger event becomes probable (IFRIC agenda decisions treat it as a change in cash flows → recalculate the effective interest rate, subject to IFRS 9 modification guidance). Under IAS 37 no provision is made for the extra 1% at 40% probability, as it is neither a present obligating event (the performance condition has not yet failed) nor probable.",
        certifiedAr:
          "السند التزام مالي بالتكلفة المطفأة. ولا يُعترف مقدمًا بالكوبون الإضافي المشروط بأهداف الانبعاثات: يُحسب مصروف الفائدة بالمعدل الفعلي على أساس الكوبون التعاقدي الابتدائي، وأي تغير في تقدير وجوب الزيادة يعالج مستقبليًا عند صيرورة الشرط مرجحًا (إعادة احتساب المعدل الفعلي وفق قرارات IFRIC وتوجيهات تعديل IFRS 9). ولا يُكوَّن مخصص وفق IAS 37 عند احتمال ٤٠٪ لعدم وجود حدث مُلزم قائم ولعدم الترجيح.",
        pointsEn: ["amortised cost", "no provision at 40%", "effective interest recalculation", "prospective treatment"],
        pointsAr: ["التكلفة المطفأة", "لا مخصص عند ٤٠٪", "إعادة حساب المعدل الفعلي", "معالجة مستقبلية"],
      },
    ],
  },
]

/* ================================================================== */
/* CMA Parts 1 & 2 — essay scenarios                                   */
/* ================================================================== */

const CMA_P1_TASKS: CrTask[] = [
  {
    id: "cma-p1-essay-1",
    family: "cma-p1",
    labelEn: "Essay 1 — Flexible budget and variances",
    labelAr: "مقال ١ — الموازنة المرنة والانحرافات",
    exhibitEn:
      "El Nasr Bottling planned 10,000 units with variable costs of $4.00/unit (materials $2.50, labour $1.50) and fixed overhead $30,000. Actual production was 12,000 units: materials $31,200 for 12,000 units, labour $17,100 for 12,000 units, fixed overhead $31,500. The standard allows 0.5 kg of material per unit at $5.00/kg and 0.25 labour hours per unit at $6.00/hour.",
    exhibitAr:
      "خططت شركة النصر للتعبئة لإنتاج ١٠٠٠٠ وحدة بتكاليف متغيرة ٤ دولار للوحدة (مواد ٢٫٥ وعمالة ١٫٥) وتكاليف ثابتة ٣٠٠٠٠. بلغ الإنتاج الفعلي ١٢٠٠٠ وحدة: مواد ٣١٢٠٠ وعمالة ١٧١٠٠ وثابتة ٣١٥٠٠. والمعيار يسمح بـ٠٫٥ كجم مواد للوحدة بسعر ٥ دولارات/كجم و٠٫٢٥ ساعة عمالة بسعر ٦ دولارات/ساعة.",
    requirements: [
      {
        promptEn: "Prepare the flexible budget for 12,000 units and compute the total flexible-budget variance (enter the variance as a number; positive = unfavourable).",
        promptAr: "أعد الموازنة المرنة لـ١٢٠٠٠ وحدة واحسب إجمالي انحراف الموازنة المرنة (أدخل الانحراف رقمًا؛ الموجب = غير مواتٍ).",
        kind: "numeric",
        marks: 5,
        certifiedEn:
          "Flexible budget at 12,000 units: materials 30,000 + labour 18,000 + fixed 30,000 = 78,000. Actual total = 31,200 + 17,100 + 31,500 = 79,800. Flexible-budget variance = 79,800 − 78,000 = $1,800 unfavourable (materials 1,200 U; labour 900 F; fixed 1,500 U).",
        certifiedAr:
          "الموازنة المرنة عند ١٢٠٠٠ وحدة: مواد ٣٠٠٠٠ + عمالة ١٨٠٠٠ + ثابتة ٣٠٠٠٠ = ٧٨٠٠٠. والفعلي ٣١٢٠٠ + ١٧١٠٠ + ٣١٥٠٠ = ٧٩٨٠٠. فالانحراف = ١٨٠٠ دولار غير مواتٍ (مواد ١٢٠٠ غير مواتٍ، وعمالة ٩٠٠ مواتٍ، وثابتة ١٥٠٠ غير مواتٍ).",
        pointsEn: ["78000 flexible budget", "79800 actual", "1800 unfavourable", "flexible at 12000"],
        pointsAr: ["٧٨٠٠٠ موازنة مرنة", "٧٩٨٠٠ فعلي", "١٨٠٠ غير مواتٍ", "المرنة عند ١٢٠٠٠"],
        numeric: { value: 1800, tolerance: 0.001, unit: "$" },
      },
      {
        promptEn: "Compute the materials price variance and materials usage (quantity) variance, stating favourable/unfavourable (enter the price variance as a number; positive = unfavourable).",
        promptAr: "احسب انحراف سعر المواد وانحراف كمية المواد محددًا الموافق/غير الموافق (أدخل انحراف السعر رقمًا؛ الموجب = غير مواتٍ).",
        kind: "numeric",
        marks: 4,
        certifiedEn:
          "Actual quantity used = 12,000 × 0.5 = 6,000 kg; actual price = 31,200/6,000 = $5.20/kg. Price variance = 6,000 × (5.20 − 5.00) = $1,200 U. Usage variance: standard usage for actual output = 6,000 kg, actual = 6,000 kg → $0 (no usage variance).",
        certifiedAr:
          "الكمية الفعلية المستخدمة = ١٢٠٠٠ × ٠٫٥ = ٦٠٠٠ كجم، والسعر الفعلي ٣١٢٠٠ ÷ ٦٠٠٠ = ٥٫٢ دولار/كجم. انحراف السعر = ٦٠٠٠ × (٥٫٢ − ٥٫٠٠) = ١٢٠٠ دولار غير مواتٍ. وانحراف الكمية صفر لطابقة الكمية المعيارية مع الفعلية.",
        pointsEn: ["5.20 per kg", "1200 U price", "usage zero"],
        pointsAr: ["٥٫٢ للكجم", "سعر ١٢٠٠ غير مواتٍ", "كمية صفر"],
        numeric: { value: 1200, tolerance: 0.001, unit: "$" },
      },
    ],
  },
  {
    id: "cma-p1-essay-2",
    family: "cma-p1",
    labelEn: "Essay 2 — Internal controls over cash",
    labelAr: "مقال ٢ — الرقابة الداخلية على النقدية",
    exhibitEn:
      "A retail chain's stores deposit cash daily; the store manager opens the safe, records deposits, reconciles the bank account and approves voided sales. Head office receives monthly bank statements directly. Losses have been detected at one store.",
    exhibitAr:
      "سلسلة تجزئة تودع متاجرها النقد يوميًا؛ ومدير المتجر يفتح الخزنة ويسجل الإيداعات ويجري التسوية البنكية ويعتمد إلغاءات البيع؛ ويستلم المركز الرئيسي كشوف الحساب الشهرية مباشرة، ورُصدت خسائر في أحد المتاجر.",
    requirements: [
      {
        promptEn: "Identify the segregation-of-duties failures and recommend specific controls, noting which existing control IS effective.",
        promptAr: "حدد إخفاقات فصل الواجبات واقترح ضوابط محددة مع الإشارة إلى الضابط القائم الفعال.",
        kind: "text",
        marks: 5,
        certifiedEn:
          "Failures: the same manager has custody (safe), recording (deposits), reconciliation (bank) and authorisation (voids) — each pairing violates segregation: custody+recording enables theft and concealment; approving voids combined with custody allows fraudulent refunds. Effective control: bank statements sent directly to head office. Recommendations: dual custody for safe opening; deposit slips prepared by the manager but reconciled independently by head office; voids approved by head office or a second person with exception reports; surprise cash counts; CCTV; mandatory vacations; data analytics on void/refund patterns per employee.",
        certifiedAr:
          "الإخفاقات: جمع المدير بين الحيازة (الخزنة) والتسجيل (الإيداعات) والتسوية (البنك) والاعتماد (الإلغاءات) — كل اقتران يخل بالفصل: الحيازة مع التسجيل تمكن من السرقة والتخفي، واعتماد الإلغاءات مع الحيازة يتيح ردودًا احتيالية. والضابط الفعال: وصول كشوف الحساب للمركز مباشرة. التوصيات: حيازة مزدوجة لفتح الخزنة، وتسوية مستقلة من المركز، واعتماد الإلغاءات من طرف ثانٍ مع تقارير استثناء، وجرد مفاجئ، وكاميرات، وإجازات إلزامية، وتحليلات بيانات لنماذج الإلغاء والاسترداد.",
        pointsEn: ["custody + recording", "voids authorisation", "statements to head office effective", "dual custody", "independent reconciliation"],
        pointsAr: ["الحيازة مع التسجيل", "اعتماد الإلغاءات", "فعالية وصول الكشوف للمركز", "حيازة مزدوجة", "تسوية مستقلة"],
      },
    ],
  },
  {
    id: "cma-p1-essay-3",
    family: "cma-p1",
    labelEn: "Essay 3 — Costing methods (job vs process)",
    labelAr: "مقال ٣ — طرق التكاليف (الأوامر والمراحل)",
    exhibitEn:
      "A furniture maker produces custom kitchens (unique jobs) AND a standard cabinet line (continuous production). Custom kitchens consume premium materials and heavy design labour; cabinets run through three processes with losses at the second stage. The CFO wants a single plant-wide overhead rate based on machine hours 'for simplicity'.",
    exhibitAr:
      "صانع أثاث ينتج مطابخ مخصصة (أوامر فريدة) وخط خزائن قياسي (إنتاج مستمر). تستهلك المطابخ مواد فاخرة وعمالة تصميم مكثفة، وتمر الخزائن بثلاث مراحل مع فواقد في المرحلة الثانية، ويريد المدير المالي معدل تحميل واحد على مستوى المصنع بالساعات الآلية «للبساطة».",
    requirements: [
      {
        promptEn: "Advise on the appropriate costing system for each product line and critique the single overhead rate.",
        promptAr: "انصح بنظام التكاليف المناسب لكل خط وانتقد فكرة المعدل الواحد.",
        kind: "text",
        marks: 5,
        certifiedEn:
          "Custom kitchens: job costing — costs traced to each job (materials requisitions, design labour hours), overhead applied on a driver reflecting design effort. Cabinets: process costing — costs accumulated by process with equivalent units (weighted average or FIFO) and normal loss accounted at the second stage (spread over good units, or to disposal value). A single plant-wide rate based on machine hours distorts both: kitchens are design-labour-intensive (machine hours under-recover them) while cabinets are machine-intensive (cross-subsidisation — kitchen jobs under-costed, cabinets over-costed). Activity-based costing or at least separate departmental rates would align cost causation.",
        certifiedAr:
          "المطابخ: تكاليف أوامر — تتبع التكاليف لكل أمر بأذونات صرف وساعات تصميم مع تحميل على أساس مُحمِّل يعكس جهد التصميم. الخزائن: تكاليف مراحل — تجميع التكاليف بكل مرحلة بوحدات مكافئة (متوسط مرجح أو FIFO) ومعالجة الفاقد الطبيعي بالمرحلة الثانية (يوزع على الوحدات الجيدة). والمعدل الواحد بالساعات الآلية يشوه الاثنين: المطابخ كثيفة عمالة تصميم فتُحمَّل أقل من واقعها والخزائن كثيفة آليًا فتعوّض الفرق — تكسّب متقاطع؛ والحل ABC أو معدلات قسمية على الأقل.",
        pointsEn: ["job costing for kitchens", "process costing for cabinets", "equivalent units", "normal loss", "cross-subsidisation / ABC"],
        pointsAr: ["أوامر للمطابخ", "مراحل للخزائن", "وحدات مكافئة", "الفاقد الطبيعي", "التكسّب المتقاطع / ABC"],
      },
    ],
  },
]

const CMA_P2_TASKS: CrTask[] = [
  {
    id: "cma-p2-essay-1",
    family: "cma-p2",
    labelEn: "Essay 1 — NPV and capital rationing",
    labelAr: "مقال ١ — صافي القيمة الحالية وتقنين رأس المال",
    exhibitEn:
      "Zahra Foods evaluates two mutually exclusive projects (cost of capital 10%): Project A costs $200,000 and returns $70,000/year for 4 years; Project B costs $120,000 and returns $45,000/year for 4 years. PV annuity factor 4 years @10% = 3.1699. Capital available is only $200,000. The company uses a 3-year payback screen.",
    exhibitAr:
      "تقيّم شركة زهرة للأغذية مشروعين متنافرين (تكلفة رأس المال ١٠٪): أ يكلف ٢٠٠٠٠٠ ويعيد ٧٠٠٠٠ سنويًا لأربع سنوات؛ وب يكلف ١٢٠٠٠٠ ويعيد ٤٥٠٠٠ سنويًا لأربع سنوات. معامل القيمة الحالية لأربع سنوات عند ١٠٪ = ٣٫١٦٩٩، ورأس المال المتاح ٢٠٠٠٠٠ فقط، وتستخدم الشركة حد استرداد ثلاث سنوات.",
    requirements: [
      {
        promptEn: "Compute the NPV of each project (enter Project A's NPV as the number).",
        promptAr: "احسب صافي القيمة الحالية لكل مشروع (أدخل NPV للمشروع أ رقمًا).",
        kind: "numeric",
        marks: 4,
        certifiedEn:
          "A: 70,000 × 3.1699 = 221,893 − 200,000 = $21,893. B: 45,000 × 3.1699 = 142,646 − 120,000 = $22,646. Both acceptable; B has the higher NPV and a higher profitability index (B: 1.19 vs A: 1.11).",
        certifiedAr:
          "أ: ٧٠٠٠٠ × ٣٫١٦٩٩ = ٢٢١٨٩٣ − ٢٠٠٠٠٠ = ٢١٨٩٣. ب: ٤٥٠٠٠ × ٣٫١٦٩٩ = ١٤٢٦٤٦ − ١٢٠٠٠٠ = ٢٢٦٤٦. كلاهما مقبول، وب أعلى قيمة حالية ومعامل ربحية أعلى (١٫١٩ مقابل ١٫١١).",
        pointsEn: ["221893", "22646", "annuity × 3.1699"],
        pointsAr: ["٢٢١٨٩٣", "٢٢٦٤٦", "المعامل ٣٫١٦٩٩"],
        numeric: { value: 21893, tolerance: 0.01, unit: "$" },
      },
      {
        promptEn: "Discuss which project should be chosen given the payback screen and the capital limit, mentioning one limitation of the payback method.",
        promptAr: "ناقش المشروع الواجب اختياره مع حد الاسترداد وتقنين رأس المال، مذكرًا قيدًا واحدًا لطريقة الاسترداد.",
        kind: "text",
        marks: 4,
        certifiedEn:
          "Payback: A recovers 200,000 at ~2.86 years (200,000/70,000); B recovers 120,000 at ~2.67 years — both pass the 3-year screen. With $200,000 available, choosing B (cost 120,000, NPV 22,646) leaves $80,000 for other uses; choosing A consumes the full budget for NPV 21,893 — B dominates on NPV, PI and payback, so B is preferred. Payback limitation: it ignores cash flows beyond the cut-off and the time value within the period (and is not a measure of profitability).",
        certifiedAr:
          "الاسترداد: أ يسترد خلال ٢٫٨٦ سنة و٢٠٠٠٠٠ ÷ ٧٠٠٠٠، وب خلال ٢٫٦٧ سنة (١٢٠٠٠٠ ÷ ٤٥٠٠٠) — كلاهما يجتاز حد الثلاث سنوات. وبتوافر ٢٠٠٠٠٠ يفضل ب (تكلفة ١٢٠٠٠٠ وقيمة ٢٢٦٤٦) تاركًا ٨٠٠٠٠ لاستخدامات أخرى، بينما يستهلك أ كامل الموازنة بقيمة أدنى — ب يتفوق بالقيمة الحالية ومعامل الربحية والاسترداد. وقيد الاسترداد: يتجاهل التدفقات بعد حد القطع والقيمة الزمنية داخل الفترة.",
        pointsEn: ["B preferred", "profitability index", "budget left for other uses", "payback ignores later cash flows"],
        pointsAr: ["تفضيل ب", "معامل الربحية", "بقاء جزء من الموازنة", "تجاهل التدفقات اللاحقة"],
      },
    ],
  },
  {
    id: "cma-p2-essay-2",
    family: "cma-p2",
    labelEn: "Essay 2 — Financial statement analysis and DuPont",
    labelAr: "مقال ٢ — تحليل القوائم ودوبونت",
    exhibitEn:
      "Two competitors in the same industry (FY2026, $m): Norther — sales 800, net income 48, total assets 500, equity 320. Souther — sales 600, net income 42, total assets 380, equity 200. The industry ROTA is about 9% and leverage multiplier around 1.6.",
    exhibitAr:
      "منافسان في الصناعة ذاتها (٢٠٢٦ بالمليون): نورثر — مبيعات ٨٠٠ وصافي ربح ٤٨ وأصول ٥٠٠ وحقوق ٣٢٠. ساوثر — مبيعات ٦٠٠ وربح ٤٢ وأصول ٣٨٠ وحقوق ٢٠٠. ومعدل العائد على أصول الصناعة نحو ٩٪ ومعامل الرفع المالي نحو ١٫٦.",
    requirements: [
      {
        promptEn: "Using the DuPont analysis, decompose each company's ROE and identify the driver of the difference (enter Norther's ROE % as a number, 1 decimal).",
        promptAr: "باستخدام تحليل دوبونت، فكك عائد حقوق الملكية لكل شركة وحدد محرك الفرق (أدخل عائد نورثر رقمًا بنسبة مئوية بخانة عشرية).",
        kind: "numeric",
        marks: 5,
        certifiedEn:
          "Norther: margin 6.0% × turnover 1.6 × leverage 1.5625 (500/320) → ROE = 15.0%. Souther: margin 7.0% × turnover 1.579 × leverage 1.9 (380/200) → ROE = 21.0%. Souther's higher ROE is driven by its higher profit margin AND much higher financial leverage; Norther's lower leverage (more conservative financing) dilutes its ROE despite comparable efficiency.",
        certifiedAr:
          "نورثر: هامش ٦٪ × دوران ١٫٦ × رفع ١٫٥٦٢٥ (٥٠٠ ÷ ٣٢٠) ← عائد ١٥٪. ساوثر: هامش ٧٪ × دوران ١٫٥٧٩ × رفع ١٫٩ (٣٨٠ ÷ ٢٠٠) ← عائد ٢١٪. يرجع تفوق ساوثر لهامشه الأعلى ورفعه المالي الأكبر، بينما يخفف رفع نورثر الأدنى عائده رغم كفاءة مقاربة.",
        pointsEn: ["15% Norther", "21% Souther", "margin × turnover × leverage", "leverage driver"],
        pointsAr: ["١٥٪ نورثر", "٢١٪ ساوثر", "هامش × دوران × رفع", "الرفع محرك الفرق"],
        numeric: { value: 15, tolerance: 0.01, unit: "%" },
      },
      {
        promptEn: "Comment on the risk implication of the leverage difference for a lender.",
        promptAr: "علّق على دلالة الخطر لفرق الرفع من منظور مقرض.",
        kind: "text",
        marks: 3,
        certifiedEn:
          "Souther's multiplier of 1.9 vs the industry 1.6 and Norther's 1.56 signals greater financial risk — more of the asset base is debt-funded, so earnings volatility translates into larger ROE swings and weaker debt-service headroom. A lender would demand stronger covenant protection or pricing; Norther has the more conservative, resilient structure.",
        certifiedAr:
          "معامل ساوثر ١٫٩ مقابل ١٫٦ للصناعة و١٫٥٦ لنورثر يشير إلى مخاطر مالية أعلى — نسبة أكبر من الأصول ممولة بالدين فتتضخم تقلبات العائد وتتراجع هوامش خدمة الدين، ويطالب المقرض بضمانات تعاقدية أقوى أو تسعيرًا أعلى، بينما نورثر أكثر تحفظًا ومرونة.",
        pointsEn: ["higher financial risk", "debt-funded assets", "covenants / pricing", "Norther conservative"],
        pointsAr: ["مخاطر مالية أعلى", "تمويل بالدين", "ضمانات وتسعير", "تحفظ نورثر"],
      },
    ],
  },
  {
    id: "cma-p2-essay-3",
    family: "cma-p2",
    labelEn: "Essay 3 — Working capital and cash conversion cycle",
    labelAr: "مقال ٣ — رأس المال العامل ودورة التحويل النقدي",
    exhibitEn:
      "Sherif Distribution reports: inventory days 85, receivable days 60, payable days 40. Purchases are 80% of cost of sales which is 70% of sales. A supplier offers a 2/15 net 60 discount; the company currently pays on day 60. Its bank overdraft costs 18% per year.",
    exhibitAr:
      "تعرض شركة شريف للتوزيع: أيام مخزون ٨٥ وأيام مدينين ٦٠ وأيام دائنين ٤٠. والمشتريات ٨٠٪ من تكلفة المبيعات البالغة ٧٠٪ من المبيعات. ويقدم مورد خصم ٢٪ للسداد في ١٥ يومًا وإلا كامل المبلغ في ٦٠، وتسدد الشركة حاليًا في اليوم ٦٠، وسحبها على المكشوف يكلف ١٨٪ سنويًا.",
    requirements: [
      {
        promptEn: "Compute the cash conversion cycle (enter the number of days).",
        promptAr: "احسب دورة التحويل النقدي (أدخل عدد الأيام).",
        kind: "numeric",
        marks: 3,
        certifiedEn: "CCC = inventory days 85 + receivable days 60 − payable days 40 = 105 days.",
        certifiedAr: "الدورة = ٨٥ + ٦٠ − ٤٠ = ١٠٥ يومًا.",
        pointsEn: ["105", "85 + 60 − 40", "inventory days 85", "receivable days 60", "payable days 40"],
        pointsAr: ["١٠٥", "٨٥ + ٦٠ − ٤٠", "أيام المخزون ٨٥", "أيام المدينين ٦٠", "أيام الدائنين ٤٠"],
        numeric: { value: 105, tolerance: 0.001, unit: "days" },
      },
      {
        promptEn: "Evaluate whether the company should take the supplier's 2/15 net 60 discount (support with the annualised cost of not taking it).",
        promptAr: "قيّم ما إذا كان على الشركة اقتناص خصم المورد ٢/١٥ صافي ٦٠، مدعمًا إجابتك بالتكلفة السنوية لعدم الاقتناص.",
        kind: "text",
        marks: 5,
        certifiedEn:
          "Cost of forgoing the discount = (2/98) × (365/(60−15)) = 2.0408% × 8.111 = 16.55% annualised. Compare with the 18% overdraft cost: paying on day 60 costs 16.55% implicit — slightly cheaper than the 18% overdraft, so financing via the supplier (not taking the discount) is marginally the cheaper source; however if the company can fund early payment from cheaper cash (e.g., 12% facilities) it should take the discount. A rigorous answer computes 16.55% and benchmarks it against the marginal financing cost.",
        certifiedAr:
          "تكلفة التنازل عن الخصم = (٢ ÷ ٩٨) × (٣٦٥ ÷ ٤٥) = ٢٫٠٤٠٨٪ × ٨٫١١١ = ١٦٫٥٥٪ سنويًا. وبمقارنتها بتكلفة السحب على المكشوف ١٨٪ يكون تجاهل الخصم (تمويل من المورد) أرخص قليلًا، أما إن توافرت سيولة أرخص (مثل تسهيلات ١٢٪) فينبغي اقتناص الخصم. والإجابة المحكمة تحسب ١٦٫٥٥٪ وتقارنها بالتكلفة الحدية للتمويل.",
        pointsEn: ["16.55% (2/98 × 365/45)", "compare with 18%", "take discount if cheaper funds", "implicit annualised cost"],
        pointsAr: ["١٦٫٥٥٪ (٢÷٩٨ × ٣٦٥÷٤٥)", "المقارنة بـ١٨٪", "الاقتناص عند توافر تمويل أرخص", "التكلفة الضمنية السنوية"],
      },
    ],
  },
]

/* ================================================================== */
/* registry                                                            */
/* ================================================================== */

export const CR_TASKS: CrTask[] = [
  ...CPA_AUD_TASKS,
  ...CPA_FAR_TASKS,
  ...CPA_REG_TASKS,
  ...IFRS_DIP_TASKS,
  ...ACCA_FR_TASKS,
  ...ACCA_AA_TASKS,
  ...ACCA_SBL_TASKS,
  ...ACCA_SBR_TASKS,
  ...CMA_P1_TASKS,
  ...CMA_P2_TASKS,
]
