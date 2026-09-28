/** v23 seed data — FULL-LENGTH previous-exam papers (Auditing).
 *  Extends the v22 ACCA AA / AAA adapted papers to complete papers:
 *  AA → 30 questions (full Section-A length), AAA → 24 questions.
 *  Bilingual EN/AR, past-paper scenario MCQs, same source labels so the
 *  papers pick up every new question automatically. */

export type PastPaperSeedQ = {
  code: string
  stem: string
  stemAr: string
  options: string[]
  optionsAr: string[]
  answerIndex: number
  explanation: string
  explanationAr: string
  standardTag: string
  area: "auditing"
  difficulty: 1 | 2 | 3
  source: string
}

export const AA_FULL: PastPaperSeedQ[] = [
  {
    code: "AA-P1-13",
    stem: "Before accepting the audit of Delta Foods, the incoming auditor should agree the terms of the engagement. Under ISA 210, which item is LEAST likely to appear in the engagement letter?",
    stemAr: "قبل قبول مراجعة شركة دلتا للأغذية، ينبغي للمراجع الجديد الاتفاق على شروط المهمة. وفق ISA 210، أي بند يَرِدُ على الأرجح في خطاب المهمة؟",
    options: [
      "The auditor's responsibility to form an opinion on the financial statements",
      "The agreed form of any reports to be issued",
      "The detailed testing schedule for every account balance",
      "Management's responsibility for the financial statements",
    ],
    optionsAr: [
      "مسؤولية المراجع عن تكوين رأي في القوائم المالية",
      "الشكل المتفق عليه لأي تقارير ستُصدر",
      "جدول الفحص التفصيلي لكل رصيد حساب",
      "مسؤولية الإدارة عن القوائم المالية",
    ],
    answerIndex: 2,
    explanation:
      "ISA 210 lists the objective and scope, the form of reports, and both parties' responsibilities as required content. The detailed testing schedule is a product of planning (ISA 300), not a term of the engagement.",
    explanationAr:
      "يحدد ISA 210 الهدف والنطاق وشكل التقارير ومسؤوليات الطرفين كمحتوى واجب. أما جدول الفحص التفصيلي فهو ناتج التخطيط وفق ISA 300 وليس شرطًا من شروط المهمة.",
    standardTag: "ISA 210",
    area: "auditing",
    difficulty: 1,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-14",
    stem: "An audit assistant asks when the audit file must be finalised after the audit report date. Under ISA 230, assembly of the final audit file should ordinarily be completed within:",
    stemAr: "يسأل مساعد مراجعة: متى يجب إغلاق ملف المراجعة النهائي بعد تاريخ تقرير المراجعة؟ وفق ISA 230، يكتمل تجميع الملف النهائي عادةً خلال:",
    options: [
      "30 days of the audit report date",
      "60 days of the audit report date",
      "90 days of the balance sheet date",
      "One year of the audit report date",
    ],
    optionsAr: [
      "٣٠ يومًا من تاريخ تقرير المراجعة",
      "٦٠ يومًا من تاريخ تقرير المراجعة",
      "٩٠ يومًا من تاريخ الميزانية",
      "سنة من تاريخ تقرير المراجعة",
    ],
    answerIndex: 1,
    explanation:
      "ISA 230 requires completion of the assembly of the final audit file within 60 days of the date of the auditor's report, after which no documentation may be deleted or discarded before the retention period ends.",
    explanationAr:
      "يتطلب ISA 230 إتمام تجميع ملف المراجعة النهائي خلال ٦٠ يومًا من تاريخ تقرير المراجع، وبعدها لا يجوز حذف أي مستند قبل انتهاء مدة الحفظ.",
    standardTag: "ISA 230",
    area: "auditing",
    difficulty: 1,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-15",
    stem: "During the audit of Metro Retail, management refuses to investigate two suspected fraud cases found by the team. Under ISA 240, the auditor's FIRST course of action is to:",
    stemAr: "أثناء مراجعة مترو ريتيل، رفضت الإدارة التحقيق في حالتي غش مشتبه بهما اكتشفهما الفريق. وفق ISA 240، يبدأ المراجع بـ:",
    options: [
      "Report the refusal directly to the regulator",
      "Communicate the matter to those charged with governance",
      "Withdraw from the engagement immediately",
      "Issue an adverse opinion on the financial statements",
    ],
    optionsAr: [
      "إبلاغ الجهة الرقابية بالرفض مباشرة",
      "إبلاغ أصحاب الحكم والإدارة العليا بالأمر",
      "الانسحاب من المهمة فورًا",
      "إصدار رأي معاكس في القوائم المالية",
    ],
    answerIndex: 1,
    explanation:
      "ISA 240 requires the auditor to communicate to those charged with governance matters about fraud — including any refusal by management to investigate. Escalation to regulators or withdrawal follows only if the response is inadequate; the opinion depends on the financial statement effects.",
    explanationAr:
      "يوجب ISA 240 إبلاغ أصحاب الحكم والإدارة العليا بمسائل الغش — ومنها رفض الإدارة التحقيق. أما التصعيد للجهات الرقابية أو الانسحاب فلا يكونان إلا إذا كان الرد غير كافٍ، والرأي يتوقف على أثر الحالات على القوائم.",
    standardTag: "ISA 240",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-16",
    stem: "While testing payroll, the audit team discovers that the entity failed to deduct social insurance contributions correctly. Under ISA 250, the auditor should FIRST:",
    stemAr: "أثناء فحص المرتبات اكتشف الفريق أن المنشأة لم تخصم اشتراكات التأمينات الاجتماعية بشكل صحيح. وفق ISA 250، يبدأ المراجع بـ:",
    options: [
      "Report the non-compliance to the tax authority",
      "Document the finding and evaluate the effect on the financial statements, including possible disclosures",
      "Expand testing to every law the entity might breach",
      "Ask management to correct the social insurance law itself",
    ],
    optionsAr: [
      "الإبلاغ عن المخالفة لمصلحة الضرائب",
      "توثيق الملاحظة وتقييم أثرها على القوائم المالية بما يشمل الإفصاحات المحتملة",
      "توسيع الفحص لكل قانون قد تخالفه المنشأة",
      "طلب الإدارة تصحيح قانون التأمينات نفسه",
    ],
    answerIndex: 1,
    explanation:
      "ISA 250: on becoming aware of non-compliance, the auditor obtains an understanding of the matter, evaluates its effect on the financial statements and on the audit, and communicates with management and those charged with governance. External reporting is a defined exception path, not the first step.",
    explanationAr:
      "وفق ISA 250: عند العلم بمخالفة، يفهم المراجع المسألة ويقيّم أثرها على القوائم وعلى المراجعة، ويخاطب الإدارة وأصحاب الحكم. والإبلاغ الخارجي مسار استثنائي محدد وليس الخطوة الأولى.",
    standardTag: "ISA 250",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-17",
    stem: "Under ISA 260, which of the following is the auditor REQUIRED to communicate to those charged with governance?",
    stemAr: "وفق ISA 260، أي مما يلي يُلزَم المراجع بإبلاغه لأصحاب الحكم والإدارة العليا؟",
    options: [
      "The names of every audit team member and their billing rates",
      "The planned scope and timing of the audit, and significant findings",
      "The individual salaries of the client's accounting staff",
      "The full audit work programmes for every cycle",
    ],
    optionsAr: [
      "أسماء كل أعضاء فريق المراجعة وأسعار فوترة كل منهم",
      "النطاق والتوقيت المخططين للمراجعة والملاحظات الجوهرية",
      "رواتب موظفي الحسابات لدى العميل فردًا فردًا",
      "برامج العمل الكاملة لكل دورة مراجعة",
    ],
    answerIndex: 1,
    explanation:
      "ISA 260 requires communication of the auditor's responsibilities, the planned scope and timing of the audit, and significant findings (including significant difficulties, questionable judgements and uncorrected misstatements).",
    explanationAr:
      "يوجب ISA 260 إبلاغ أصحاب الحكم بمسؤوليات المراجع وبالنطاق والتوقيت المخططين للمراجعة وبالملاحظات الجوهرية (بما فيها الصعوبات الجوهرية والأحكام المشكوك فيها والتحريفات غير المصححة).",
    standardTag: "ISA 260",
    area: "auditing",
    difficulty: 1,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-18",
    stem: "The team identifies a significant deficiency in internal control over revenue recognition. Under ISA 265, when should the auditor communicate it to management and those charged with governance?",
    stemAr: "يكتشف الفريق قصورًا جوهريًا في الرقابة الداخلية على الاعتراف بالإيراد. وفق ISA 265، متى يبلغ المراجع الإدارة وأصحاب الحكم به؟",
    options: [
      "Only after the audit report is signed",
      "In writing, on a timely basis — sufficiently early for them to take action",
      "Only if management agrees the deficiency exists",
      "Orally at the closing meeting only",
    ],
    optionsAr: [
      "بعد توقيع تقرير المراجعة فقط",
      "كتابةً وفي وقت مناسب مبكر بما يكفي لاتخاذ إجراء",
      "فقط إذا وافقت الإدارة على وجود القصور",
      "شفهيًا في الاجتماع الختامي فقط",
    ],
    answerIndex: 1,
    explanation:
      "ISA 265 requires significant deficiencies to be communicated in writing to those charged with governance (and management) on a timely basis, enabling them to take corrective action; waiting for the signed report defeats that purpose.",
    explanationAr:
      "يوجب ISA 265 إبلاغ أصحاب الحكم والإدارة بالقصور الجوهري كتابةً وفي وقت مناسب يتيح التصحيح؛ فانتظار التقرير الموقع يفقد الإبلاغ غايته.",
    standardTag: "ISA 265",
    area: "auditing",
    difficulty: 1,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-19",
    stem: "Under ISQM 1, for which engagement MUST an engagement quality review be performed before the report is dated?",
    stemAr: "وفق ISQM 1، في أي مهمة يجب إجراء مراجعة جودة المهمة قبل تأريخ التقرير؟",
    options: [
      "Every audit of a listed entity",
      "Every review engagement, whatever the client",
      "Only first-year engagements of small entities",
      "Only where the audit opinion is modified",
    ],
    optionsAr: [
      "كل مراجعة لمنشأة مُدرجة",
      "كل مهمة فحص محدود أيًا كان العميل",
      "مهام السنة الأولى للمنشآت الصغيرة فقط",
      "فقط عند تعديل رأي المراجعة",
    ],
    answerIndex: 0,
    explanation:
      "The quality-management standard requires an engagement quality review for audits of listed entities (and for any engagement the firm's policies flag as high risk), performed before the date of the audit report.",
    explanationAr:
      "يتطلب معيار إدارة الجودة مراجعة جودة مهمة لمراجعات المنشآت المدرجة (ولأي مهمة تصنفها سياسات المكتب عالية المخاطر)، وتُجرى قبل تأريخ تقرير المراجعة.",
    standardTag: "ISQM 1",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-20",
    stem: "Which of the following correctly distinguishes the audit STRATEGY from the audit PLAN?",
    stemAr: "أي مما يلي يميز استراتيجية المراجعة عن خطة المراجعة بشكل صحيح؟",
    options: [
      "The strategy sets the overall scope, timing and direction; the plan details the procedures below that",
      "The strategy lists every substantive test; the plan sets the reporting date",
      "The plan is agreed with the client; the strategy is never documented",
      "The strategy is prepared after fieldwork ends; the plan before it starts",
    ],
    optionsAr: [
      "الاستراتيجية تحدد النطاق والتوقيت والاتجاه الكليين؛ والخطة تفصّل الإجراءات تحتها",
      "الاستراتيجية تعدد كل اختبار جوهري؛ والخطة تحدد تاريخ التقرير",
      "الخطة يُتفق عليها مع العميل؛ والاستراتيجية لا توثق أبدًا",
      "الاستراتيجية تعد بعد انتهاء العمل الميداني؛ والخطة قبله",
    ],
    answerIndex: 0,
    explanation:
      "ISA 300: the overall audit strategy sets the scope, timing and direction, and guides the development of the more detailed audit plan — the nature, timing and extent of risk procedures and further procedures. Both are documented and both precede fieldwork.",
    explanationAr:
      "وفق ISA 300: تحدد استراتيجية المراجعة الكلية نطاق المراجعة وتوقيتها واتجاهها، وتوجّه إعداد خطة المراجعة الأكثر تفصيلًا لطبيعة الإجراءات وتوقيتها ومداها. وكلاهما موثق ويسبق العمل الميداني.",
    standardTag: "ISA 300",
    area: "auditing",
    difficulty: 1,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-21",
    stem: "Nile Pharma sells a product line through many small distributor contracts. Materiality for the statements overall is EGP 2 million. The auditor sets a LOWER specific materiality for revenue. The most likely reason is:",
    stemAr: "تبيع النيل فارما خط منتجات عبر عقود توزيع صغيرة كثيرة. الأهمية الإجمالية للقوائم ٢ مليون جنيه، لكن المراجع خصص أهمية أدنى للإيرادات. السبب الأرجح:",
    options: [
      "Revenue is understated by definition in this industry",
      "Users of the financial statements would consider even smaller misstatements of revenue to be material",
      "The audit of revenue is cheaper than other areas",
      "Specific materiality must always equal half of overall materiality",
    ],
    optionsAr: [
      "الإيراد مقلل بطبيعته في هذه الصناعة",
      "مستخدمو القوائم يعتبرون تحريفات أصغر للإيراد جوهرية",
      "مراجعة الإيراد أرخص من غيرها",
      "الأهمية الخاصة يجب أن تساوي دائمًا نصف الأهمية الإجمالية",
    ],
    answerIndex: 1,
    explanation:
      "ISA 320 allows lower materiality for particular classes of transactions where the auditor expects users to focus on them (e.g. revenue for covenant or bonus purposes) — a judgement, not a fixed ratio.",
    explanationAr:
      "يجيز ISA 320 أهمية أدنى لفئات معينة من العمليات حين يتوقع المراجع انكباب المستخدمين عليها (كالإيراد لأغراض التعهدات أو الحوافز) — وهو حكم مهني لا نسبة ثابتة.",
    standardTag: "ISA 320",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-22",
    stem: "For payroll, the team decides NOT to test the controls it previously intended to rely on. Under ISA 330, the response should be to:",
    stemAr: "في المرتبات، قرر الفريق عدم اختبار الضوابط التي كان ينوي الاعتماد عليها. وفق ISA 330، يجب أن تكون الاستجابة:",
    options: [
      "Rely on last year's control results only",
      "Design and perform substantive procedures that provide sufficient appropriate evidence",
      "Issue a disclaimer on payroll balances",
      "Ask the client to re-perform the controls for the whole year",
    ],
    optionsAr: [
      "الاعتماد على نتائج ضوابط العام الماضي فقط",
      "تصميم وتنفيذ إجراءات جوهرية توفر أدلة كافية ومناسبة",
      "إصدار امتناع عن الرأي في أرصدة المرتبات",
      "طلب العميل إعادة تنفيذ الضوابط طوال العام",
    ],
    answerIndex: 1,
    explanation:
      "ISA 330: where the auditor does not test controls for a relevant assertion, or testing shows them ineffective, the auditor MUST address the risk entirely through substantive procedures — there is no option to rely on prior-year evidence for control risk.",
    explanationAr:
      "وفق ISA 330: إذا لم يختبر المراجع الضوابط لتأكيد ذي صلة، أو أظهر الاختبار عدم فعاليتها، فيجب أن يعالج الخطر كليًا بإجراءات جوهرية — ولا يجوز الاعتماد على أدلة العام السابق لمخاطر الضبط.",
    standardTag: "ISA 330",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-23",
    stem: "Cairo Cloud uses an outside payroll bureau for all salary calculations. Under ISA 402, the auditor of Cairo Cloud may treat the payroll assertions as lower risk if:",
    stemAr: "تستخدم كايرو كلاود شركة خدمات خارجية لكل حسابات المرتبات. وفق ISA 402، يمكن اعتبار تأكيدات المرتبات أقل خطورة إذا:",
    options: [
      "The bureau sends a generic brochure describing its services",
      "A service auditor's report shows controls at the bureau were suitably designed and operating effectively",
      "Management signs a letter saying the bureau is reliable",
      "The bureau is audited by the same firm",
    ],
    optionsAr: [
      "أرسلت شركة الخدمات كتيبًا عامًا يصف خدماتها",
      "أظهر تقرير مراجع الخدمات أن الضوابط لدى المكتب ملائمة التصميم وفعالة التشغيل",
      "وقعت الإدارة خطابًا بأن المكتب موثوق",
      "كان المكتب يُراجع من قبل نفس مكتب المراجعة",
    ],
    answerIndex: 1,
    explanation:
      "ISA 402: a type 2 service auditor's report covering design AND operating effectiveness lets the user auditor assess control risk for the outsourced process; a brochure or management assertion does not, and same-firm audits raise independence issues instead.",
    explanationAr:
      "وفق ISA 402: يتيح تقرير مراجع خدمات من النوع الثاني يغطي التصميم والفاعلية للمراجع المستخدم تقييم مخاطر الضبط للعملية المستَعان بها؛ أما الكتيب أو تأكيد الإدارة فلا يكفي، ومراجعة نفس المكتب تثير مخاطر استقلالية.",
    standardTag: "ISA 402",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-24",
    stem: "The client refuses to correct a EGP 150,000 misstatement; overall materiality is EGP 1 million and performance materiality EGP 700,000. Under ISA 450, the auditor should conclude the misstatement is:",
    stemAr: "رفض العميل تصحيح تحريف قدره ١٥٠ ألف جنيه؛ الأهمية الإجمالية مليون جنيه والأهمية التنفيذية ٧٠٠ ألف. وفق ISA 450، يخلص المراجع إلى أن التحريف:",
    options: [
      "Material — the opinion must be modified immediately",
      "Clearly trivial — no action needed",
      "Not material on its own, but must be evaluated together with all other uncorrected misstatements",
      "The auditor's responsibility, who should post the correction personally",
    ],
    optionsAr: [
      "جوهر — يجب تعديل الرأي فورًا",
      "تافه بوضوح — لا حاجة لأي إجراء",
      "غير جوهري بذاته، لكن يجب تقييمه مع كل التحريفات غير المصححة الأخرى",
      "مسؤولية المراجع الذي يثبت التصحيح بنفسه",
    ],
    answerIndex: 2,
    explanation:
      "ISA 450: misstatements below the clearly-trivial threshold are accumulated; the auditor evaluates them individually AND in aggregate against materiality, and communicates uncorrected items to management and those charged with governance.",
    explanationAr:
      "وفق ISA 450: تُجمَّع التحريفات دون حد التفاهة الواضحة، ويقيّمها المراجع فرادى ومجتمعة مقابل الأهمية النسبية، ويبلغ غير المصحح منها للإدارة وأصحاب الحكم.",
    standardTag: "ISA 450",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-25",
    stem: "Which source provides the LEAST reliable audit evidence for the existence of accounts receivable?",
    stemAr: "أي مصدر يوفر أقل الأدلة موثوقية لوجود أرصدة المدينين؟",
    options: [
      "External confirmations returned directly by debtors",
      "Subsequent cash receipts recorded in the client's own cash book",
      "Aged receivable listings reconciled to the ledger by the client",
      "Sales invoices and delivery notes held by the client",
    ],
    optionsAr: [
      "تأكيدات خارجية أعادها المدينون مباشرة للمراجع",
      "مقبوضات نقدية لاحقة مسجلة في دفتر النقدية لدى العميل نفسه",
      "كشوف أعمار الديون مطابقة للدفتر من العميل",
      "فواتير بيع وإشعارات تسليم بحوزة العميل",
    ],
    answerIndex: 3,
    explanation:
      "ISA 500 ranks evidence by relevance and reliability: documents generated and held by the client (D) are the weakest for existence; external confirmations (A) are the strongest; client-prepared reconciliations (C) need corroboration, and cash receipts (B) are entity records but are independently verifiable through the bank.",
    explanationAr:
      "يرتب ISA 500 الأدلة بالصلة والموثوقية: المستندات المُعدّة والمحفوظة لدى العميل (د) هي الأضعف لوجود الديون، والتأكيدات الخارجية (أ) هي الأقوى، وتسويات العميل (ج) تحتاج تأييدًا، والمقبوضات (ب) سجلات منشأة لكن يمكن التحقق منها مستقلًا عبر البنك.",
    standardTag: "ISA 500",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-26",
    stem: "For a large population of small, homogeneous receivable balances, the auditor uses NEGATIVE confirmations. This is appropriate only when:",
    stemAr: "لمجتمع كبير من أرصدة مدينين صغيرة متجانسة، استخدم المراجع التأكيد السلبي. لا يكون هذا مناسبًا إلا إذا:",
    options: [
      "The assessed risk of material misstatement is high and controls are weak",
      "Risk is low, a large sample is sent, and no reply is treated as evidence of accuracy",
      "Individual balances are very large",
      "The client requests it in writing",
    ],
    optionsAr: [
      "كانت مخاطر التحريف الجوهري المقدرة عالية والضوابط ضعيفة",
      "كانت المخاطر منخفضة وأُرسلت العينة كبيرة وعُدّ عدم الرد دليلًا على الصحة",
      "كانت الأرصدة الفردية كبيرة جدًا",
      "طلب العميل ذلك كتابةً",
    ],
    answerIndex: 1,
    explanation:
      "ISA 505: negative confirmation may be used when risk is low, the population is made of many small homogeneous items, a low rate of exceptions is expected, and the auditor has no reason to believe recipients will ignore the requests.",
    explanationAr:
      "وفق ISA 505: يجوز التأكيد السلبي عندما تكون المخاطر منخفضة والمجتمع من بنود صغيرة متجانسة كثيرة ويُتوقع معدل استثناءات ضئيل، ولا سبب للاعتقاد بأن المرسل إليهم سيتجاهلون الطلبات.",
    standardTag: "ISA 505",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-27",
    stem: "The team wants to use a substantive analytical procedure over interest expense. Which factor MOST improves the precision of the expectation?",
    stemAr: "يريد الفريق استخدام إجراء تحليلي جوهري على مصروف الفوائد. أي عامل يحسّن دقة التوقع أكثر؟",
    options: [
      "Disaggregating the loan schedule and recalculating interest month by month",
      "Comparing total interest to last year's total",
      "Reading the loan agreements only",
      "Interviewing the treasurer about market rates",
    ],
    optionsAr: [
      "تفكيك جدول القروض وإعادة حساب الفائدة شهرًا بشهر",
      "مقارنة إجمالي الفوائد بإجمالي العام الماضي",
      "قراءة عقود القروض فقط",
      "مقابلة أمين الخزينة عن أسعار السوق",
    ],
    answerIndex: 0,
    explanation:
      "ISA 520: predictability improves when the expectation is built at a disaggregated level from stable, verifiable data — recalculating interest from actual drawdowns and rates is close to reperformance; a year-on-year total comparison (B) is far too blunt.",
    explanationAr:
      "وفق ISA 520: تتحسن قابلية التوقع حين يُبنى على مستوى مفكك من بيانات ثابتة قابلة للتحقق — وإعادة حساب الفائدة من السحوبات الفعلية والأسعار قريب من إعادة الأداء، بينما مقارنة الإجماليات (ب) أداة أقل حساسية بكثير.",
    standardTag: "ISA 520",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-28",
    stem: "The auditor tests a sample of controls and, based on the results, concludes controls are effective when they are not. This type of sampling risk is known as:",
    stemAr: "يختبر المراجع عينة من الضوابط ويخلص — بناءً على النتائج — إلى فعاليتها وهي ليست كذلك. يُعرف هذا النوع من مخاطر العينة بـ:",
    options: [
      "The risk of incorrect rejection",
      "The risk of over-reliance",
      "Non-sampling risk",
      "Detection risk proper",
    ],
    optionsAr: [
      "خطر الرفض الخاطئ",
      "خطر الاعتماد الزائد",
      "خطر غير العينة",
      "خطر الاكتشاف بمفهومه الدقيق",
    ],
    answerIndex: 1,
    explanation:
      "ISA 530 defines the risk of over-reliance (concluding controls are effective when they are not) — it leads the auditor to assess control risk too low and reduce substantive work wrongly; incorrect rejection (A) affects efficiency, not effectiveness.",
    explanationAr:
      "يعرّف ISA 530 خطر الاعتماد الزائد (الاستنتاج بأن الضوابط فعالة وهي ليست كذلك) — فيقدّر المراجع مخاطر الضبط أقل من حقيقتها ويقلل العمل الجوهري خطأً؛ أما الرفض الخاطئ (أ) فيؤثر في الكفاءة لا الفاعلية.",
    standardTag: "ISA 530",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-29",
    stem: "The entity's impairment estimate of goodwill depends heavily on management's cash-flow forecasts. Under ISA 540 (Revised), which response is MOST appropriate for high estimation uncertainty?",
    stemAr: "تعتمد تقديرات الإدارة لاضمحلال الشهرة بشكل كبير على توقعاتها للتدفقات النقدية. وفق ISA 540 (المعدّل)، أي استجابة أنسب لعدم اليقين العالي في التقدير؟",
    options: [
      "Accept management's point estimate without testing, since it is judgemental",
      "Obtain evidence about how management made the estimate, and develop the auditor's own point estimate or range to evaluate reasonableness",
      "Report the matter directly as a KAM without any further work",
      "Replace management's model with the auditor's own model in the financial statements",
    ],
    optionsAr: [
      "قبول تقدير الإدارة دون فحص لأنه اجتهادي",
      "الحصول على أدلة عن كيفية إعداد الإدارة للتقدير، وتطوير تقدير أو مدى خاص بالمراجع لتقييم المعقولية",
      "الإبلاغ عن المسألة مباشرة كمسألة رئيسية دون أي عمل إضافي",
      "استبدال نموذج الإدارة بنموذج المراجع في القوائم المالية",
    ],
    answerIndex: 1,
    explanation:
      "ISA 540 (Revised) expects the auditor to test data, assumptions and the method, and to develop an auditor's point estimate or range when estimation uncertainty or complexity is high — never to accept it untested, and the auditor never substitutes their own figures for management's.",
    explanationAr:
      "يتوقع ISA 540 (المعدّل) من المراجع فحص البيانات والافتراضات والطريقة، وتطوير تقدير أو مدى خاص به عندما يكون عدم اليقين أو التعقيد عاليًا — فلا يقبل التقدير دون فحص أبدًا، ولا يحل أرقامه محل أرقام الإدارة.",
    standardTag: "ISA 540",
    area: "auditing",
    difficulty: 3,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-30",
    stem: "Under ISA 570, management's assessment of going concern covers at least:",
    stemAr: "وفق ISA 570، يغطي تقييم الإدارة للاستمرارية ما لا يقل عن:",
    options: [
      "The audit period already completed",
      "Twelve months from the date of approval of the financial statements",
      "Twelve months from the reporting date, and the auditor evaluates that assessment — while considering longer horizons where conditions point beyond",
      "Five years, as required for all listed entities",
    ],
    optionsAr: [
      "فترة المراجعة المنتهية",
      "اثني عشر شهرًا من تاريخ اعتماد القوائم المالية",
      "اثني عشر شهرًا من تاريخ التقرير، ويقيّم المراجع ذلك التقييم — مع النظر لمدد أطول إذا أشارت الظروف لما يتجاوزها",
      "خمس سنوات كما تشترطه كل المنشآت المدرجة",
    ],
    answerIndex: 2,
    explanation:
      "ISA 570: management assesses going concern for at least twelve months from the DATE OF THE FINANCIAL STATEMENTS (reporting date); the auditor evaluates that assessment, but nothing stops the auditor from considering a longer horizon if conditions point beyond it.",
    explanationAr:
      "وفق ISA 570: تقيّم الإدارة الاستمرارية لاثني عشر شهرًا على الأقل من تاريخ القوائم المالية (تاريخ التقرير)؛ ويقيّم المراجع تقييمها دون منعه من النظر لمدة أطول إذا أشارت الظروف إلى ما يتجاوزها.",
    standardTag: "ISA 570",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
]

/* ==================== ACCA AAA full extension (13–24) ==================== */

export const AAA_FULL: PastPaperSeedQ[] = [
  {
    code: "AAA-P1-13",
    stem: "In the group audit of Delta Group, a subsidiary in Jordan is a significant component due to its size. Under ISA 600 (Revised), the group engagement team's response includes:",
    stemAr: "في مراجعة مجموعة دلتا، تعد شركة تابعة في الأردن مكونًا جوهريًا بسبب حجمها. وفق ISA 600 (المعدّل)، تشمل استجابة فريق مراجعة المجموعة:",
    options: [
      "No work at all — the component auditor's report is always sufficient",
      "An audit of the financial information of the component using component materiality",
      "A review of the component's cash balances only",
      "Re-performing the entire component audit in all cases",
    ],
    optionsAr: [
      "لا عمل إطلاقًا — فتقرير مراجع المكون يكفي دائمًا",
      "مراجعة المعلومات المالية للمكون باستخدام أهمية المكون",
      "فحص محدود لأرصدة النقدية لدى المكون فقط",
      "إعادة تنفيذ مراجعة المكون كاملة في كل الأحوال",
    ],
    answerIndex: 1,
    explanation:
      "ISA 600 (Revised): for significant components the group team performs (or arranges) an AUDIT of the component's financial information using COMPONENT MATERIALITY, plus specified further procedures for significant classes of transactions.",
    explanationAr:
      "وفق ISA 600 (المعدّل): للمكونات الجوهرية ينفذ فريق المجموعة (أو يرتّب) مراجعة للمعلومات المالية للمكون بأهمية المكون، مع إجراءات إضافية محددة لفئات العمليات الجوهرية.",
    standardTag: "ISA 600",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-14",
    stem: "The consolidation schedule includes a material elimination of intra-group profit prepared by group management. Under ISA 600, the group engagement team should:",
    stemAr: "يتضمن جدول التجميع استبعادًا جوهريًا لأرباح المجموعة الداخلية أعدته إدارة المجموعة. وفق ISA 600، على فريق مراجعة المجموعة أن:",
    options: [
      "Treat it as management's estimate and skip testing — it cancels out",
      "Evaluate the appropriateness of consolidation adjustments and test the material ones by performing procedures on the underlying information",
      "Ask the component auditors to approve the adjustment",
      "Disclose the adjustment as a key audit matter regardless of its nature",
    ],
    optionsAr: [
      "اعتباره تقديرًا للإدارة وتركه دون فحص لأنه يتلاشى",
      "تقييم ملاءمة تسويات التجميع وفحص الجوهري منها بإجراءات على المعلومات الأساسية",
      "طلب موافقة مراجعي المكونات على التسوية",
      "الإفصاح عن التسوية كمسألة مراجعة رئيسية أياً كانت طبيعتها",
    ],
    answerIndex: 1,
    explanation:
      "ISA 600: consolidation adjustments are not a black box — the group team evaluates the appropriateness of adjustments arising from consolidation and tests their effect by performing procedures on the underlying information, including coordination with component auditors.",
    explanationAr:
      "وفق ISA 600: تسويات التجميع ليست صندوقًا أسود — إذ يقيّم فريق المجموعة ملاءمة التسويات الناشئة عن التجميع ويختبر آثارها بإجراءات على المعلومات الأساسية، بالتنسيق مع مراجعي المكونات.",
    standardTag: "ISA 600",
    area: "auditing",
    difficulty: 3,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-15",
    stem: "Valuing a complex derivative requires an actuary. Under ISA 620, before using the auditor's expert's work, the auditor should evaluate the expert's:",
    stemAr: "يتطلب تقييم مشتق معقد خبير اكتواري. وفق ISA 620، قبل الاستعانة بعمل خبير المراجع، يقيّم المراجع:",
    options: [
      "Fees only, since competence is presumed",
      "Competence, capabilities and objectivity, and the appropriateness of the expert's work for the auditor's purpose",
      "Qualifications only — objectivity is the client's responsibility",
      "Independence from the audit firm only",
    ],
    optionsAr: [
      "الأتعاب فقط، إذ تُفترض الكفاءة",
      "الكفاءة والقدرات والموضوعية، ومدى ملاءمة عمل الخبير لغرض المراجع",
      "المؤهلات فقط — فالموضوعية مسؤولية العميل",
      "الاستقلال عن مكتب المراجعة فقط",
    ],
    answerIndex: 1,
    explanation:
      "ISA 620 requires evaluating competence, capability and objectivity of the expert AND assessing whether the expert's work is appropriate for the auditor's purpose — qualifications alone are insufficient, and independence from the firm is not the relevant test.",
    explanationAr:
      "يتطلب ISA 620 تقييم كفاءة الخبير وقدراته وموضوعيته، وتقدير ملاءمة عمله لغرض المراجع — فالمؤهلات وحدها لا تكفي، والاستقلال عن المكتب ليس هو الاختبار الصحيح.",
    standardTag: "ISA 620",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-16",
    stem: "Under ISA 220, which task CANNOT be delegated by the engagement partner to the engagement team?",
    stemAr: "وفق ISA 220، أي مهمة لا يمكن لشريك المهمة تفويضها لفريق المهمة؟",
    options: [
      "Performing detailed tests of details on individual balances",
      "Evaluating the effect of identified misstatements on the opinion, while directing, supervising and reviewing the engagement",
      "Preparing the lead schedules",
      "Sending external confirmations",
    ],
    optionsAr: [
      "تنفيذ اختبارات تفصيلية على أرصدة بعينها",
      "تقييم أثر التحريفات المكتشفة على الرأي، مع توجيه العمل والإشراف عليه ومراجعته",
      "إعداد الجداول الرئيسية",
      "إرسال التأكيدات الخارجية",
    ],
    answerIndex: 1,
    explanation:
      "ISA 220: the engagement partner takes overall responsibility — directing, supervising, performing the reviews required by the standard, and evaluating the effect of matters on the opinion. Detail work and logistics are delegable; that judgement and oversight are not.",
    explanationAr:
      "وفق ISA 220: يتحمل شريك المهمة المسؤولية الكلية — توجيه الفريق والإشراف عليه وإجراء المراجعات المطلوبة وتقييم أثر المسائل على الرأي. أما أعمال التفصيل واللوجستيات فقابلة للتفويض، دون هذا الحكم والإشراف.",
    standardTag: "ISA 220",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-17",
    stem: "Total fees from one audit client represent 65% of the practice's income. Under the IESBA Code, this situation represents:",
    stemAr: "تمثل أتعاب عميل مراجعة واحد ٦٥٪ من دخل المكتب. وفق ميثاق IESBA، تمثل هذه الحالة:",
    options: [
      "A self-interest threat, to be evaluated and addressed with safeguards such as reducing the fee dependency",
      "An advocacy threat that always requires withdrawal",
      "A familiarity threat solved by rotating the audit team annually",
      "No threat, since audit fees are regulated",
    ],
    optionsAr: [
      "تهديد مصلحة ذاتية يقيَّم ويُعالج بضوابط مثل تقليل الاعتماد على الأتعاب",
      "تهديد مؤازرة يستوجب الانسحاب دائمًا",
      "تهديد أُلفة يعالجه تدوير فريق المراجعة سنويًا",
      "لا تهديد، لأن أتعاب المراجعة منظمة",
    ],
    answerIndex: 0,
    explanation:
      "Fee dominance is the textbook self-interest threat — the firm's financial interest in retaining the client may bias judgement. The IESBA code requires evaluation and safeguards (external quality review, reducing dependency, disclosure to those charged with governance); withdrawal only if safeguards cannot reduce the threat.",
    explanationAr:
      "هيمنة الأتعاب هي نموذج تهديد المصلحة الذاتية — فمصلحة المكتب المالية في استبقاء العميل قد تحرف الحكم. ويقتضي ميثاق IESBA التقييم والضوابط (مراجعة جودة خارجية، تقليل الاعتماد، إبلاغ أصحاب الحكم)، ولا يكون الانسحاب إلا إذا عجزت الضوابط.",
    standardTag: "IESBA Code",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-18",
    stem: "The firm represents an audit client in a tax dispute with the authorities, arguing the client's position before the tax appeal board. Under the IESBA Code this creates:",
    stemAr: "يمثل المكتب عميل مراجعة في نزاع ضريبي مع الجهات، ويدافع عن موقفه أمام لجنة الطعن الضريبي. وفق ميثاق IESBA ينشأ:",
    options: [
      "An advocacy threat to independence and objectivity",
      "A self-review threat, because tax work was performed",
      "No threat if the tax team is separate from the audit team",
      "An intimidation threat created by the tax authority",
    ],
    optionsAr: [
      "تهديد مؤازرة للاستقلالية والموضوعية",
      "تهديد مراجعة ذاتية لأن عملًا ضريبيًا أُدير",
      "لا تهديد إذا انفصل فريق الضرائب عن فريق المراجعة",
      "تهديد ترهيب منشأ من مصلحة الضرائب",
    ],
    answerIndex: 0,
    explanation:
      "Promoting the client's position to a third party is the definition of an advocacy threat. For an audit client this is prohibited when the subject matter becomes an audit matter; otherwise it must be evaluated — separation of teams (C) does not cure advocacy on its own.",
    explanationAr:
      "الدفع بموقف العميل أمام طرف ثالث هو تعريف تهديد المؤازرة. ويُحظر مع عميل المراجعة إذا أصبحت المسألة محل المراجعة، وإلا وجب تقييمه — وانفصال الفريقين (ج) لا يعالج المؤازرة بذاته.",
    standardTag: "IESBA Code",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-19",
    stem: "Over three years, management's bad-debt provision estimates have always been at the optimistic end of the auditor's range. Under ISA 540 (Revised), this pattern MOST likely indicates:",
    stemAr: "على مدى ثلاث سنوات، كانت تقديرات الإدارة لمخصص الديون دائمًا عند الحد المتفائل من مدى المراجع. وفق ISA 540 (المعدّل)، يشير هذا النمط على الأرجح إلى:",
    options: [
      "Acceptable use of judgement, consistent over time",
      "Possible management bias in accounting estimates",
      "A change in accounting policy requiring restatement",
      "Fraud, and the engagement must be reported to the regulator",
    ],
    optionsAr: [
      "استخدام مقبول للحكم المهني متسق عبر الزمن",
      "انحياز محتمل للإدارة في التقديرات المحاسبية",
      "تغيير في سياسة محاسبية يستوجب إعادة العرض",
      "غش يجب الإبلاغ عنه للجهة الرقابية",
    ],
    answerIndex: 1,
    explanation:
      "ISA 540 (Revised) explicitly requires indicators of possible management bias to be evaluated — a consistent pattern of one-sided estimates is such an indicator, to be challenged and, if unaddressed, reflected in the audit conclusions; it is not by itself proof of fraud.",
    explanationAr:
      "يوجب ISA 540 (المعدّل) تقييم مؤشرات الانحياز المحتمل للإدارة — فالنمط المتسق لتقديرات منحازة لجهة واحدة مؤشر من هذا القبيل يُناقش ويُعكس في الاستنتاجات إن لم يُعالج، لكنه ليس بذاته دليل غش.",
    standardTag: "ISA 540",
    area: "auditing",
    difficulty: 3,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-20",
    stem: "During fieldwork, the team identifies an undisclosed related-party transaction that management had not revealed. Under ISA 550, the auditor's FIRST step is to:",
    stemAr: "أثناء العمل الميداني يكتشف الفريق معاملة مع طرف ذي علاقة لم تكشف عنها الإدارة. وفق ISA 550، خطوة المراجع الأولى:",
    options: [
      "Modify the audit opinion immediately",
      "Communicate the finding to those charged with governance and request management to update its related-party disclosures",
      "Report the related party to the stock exchange",
      "Treat the transaction as fraudulent by definition",
    ],
    optionsAr: [
      "تعديل رأي المراجعة فورًا",
      "إبلاغ أصحاب الحكم بالملاحظة وطلب تحديث الإدارة لإفصاحات الأطراف ذاتيي العلاقة",
      "الإبلاغ عن الطرف ذي العلاقة للبورصة",
      "اعتبار المعاملة غشًا بحكم التعريف",
    ],
    answerIndex: 1,
    explanation:
      "ISA 550: if the auditor identifies related parties or significant transactions management has not previously identified or disclosed, the auditor communicates with management and those charged with governance, requests updated identification work and disclosures, then evaluates the audit implications.",
    explanationAr:
      "وفق ISA 550: إذا اكتشف المراجع أطرافًا ذاتي علاقة أو معاملات جوهرية لم تكشف عنها الإدارة، يخاطب الإدارة وأصحاب الحكم، ويطلب تحديث أعمال التحديد والإفصاح، ثم يقيّم الآثار.",
    standardTag: "ISA 550",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-21",
    stem: "A major customer went into liquidation two weeks AFTER the reporting date but BEFORE the report was signed; the debt arose from sales made before the year end. Under ISA 560, the financial statements should:",
    stemAr: "دخل عميل رئيسي التصفية بعد أسبوعين من تاريخ التقرير وقبل توقيعه؛ والدين نشأ عن مبيعات قبل نهاية السنة. وفق ISA 560، يجب على القوائم المالية أن:",
    options: [
      "Ignore the event entirely — it arose after the reporting date",
      "Adjust for it, since the condition (the doubtful debt) existed at the reporting date",
      "Disclose it only if requested by the tax authority",
      "Reissue the prior-year statements as well",
    ],
    optionsAr: [
      "تجاهل الحادث كليًا — فقد وقع بعد تاريخ التقرير",
      "إثبات تسوية له، لأن الظرف (الدين المشكوك فيه) كان قائمًا عند تاريخ التقرير",
      "الإفصاح عنه فقط إذا طلبت مصلحة الضرائب ذلك",
      "إعادة إصدار قوائم العام السابق أيضًا",
    ],
    answerIndex: 1,
    explanation:
      "ISA 560: facts arising after the reporting date that provide evidence of conditions existing AT the reporting date are adjusting events — the customer's insolvency is evidence the receivable was already impaired at the reporting date, so the provision must be adjusted, not merely disclosed.",
    explanationAr:
      "وفق ISA 560: الوقائع اللاحقة لتاريخ التقرير التي تعطي دليلًا على ظروف قائمة عند التقرير ذاته أحداث مُعدّلة — فإعسار العميل دليل على أن الدين كان مضمحلًا بالفعل عند التقرير، فيجب تعديل المخصص لا الاكتفاء بالإفصاح.",
    standardTag: "ISA 560",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-22",
    stem: "Material doubt about going concern was concluded to be alleviated by management's plans, which are adequately disclosed. Under ISA 570, the auditor's report should:",
    stemAr: "انتهى المراجع إلى زوال الشك الجوهري في الاستمرارية بفضل خطط الإدارة، وهي مفصح عنها على نحو ملائم. وفق ISA 570، يجب أن يتضمن تقرير المراجعة:",
    options: [
      "An unmodified opinion with no further reference to going concern",
      "An unmodified opinion and an Emphasis of Matter drawing attention to the going-concern disclosure",
      "A qualified opinion for the material uncertainty",
      "An adverse conclusion on going concern",
    ],
    optionsAr: [
      "رأيًا غير معدل دون أي إشارة أخرى للاستمرارية",
      "رأيًا غير معدل مع فقرة تركيز انتباه تحيل إلى الإفصاح عن الاستمرارية",
      "رأيًا مشروطًا بسبب عدم اليقين الجوهري",
      "خلاصة معاكسة بشأن الاستمرارية",
    ],
    answerIndex: 1,
    explanation:
      "ISA 570: where the plans remove the material doubt but the circumstances remain a matter needing users' attention, the auditor adds an Emphasis of Matter referencing the disclosure. A MURGC paragraph is only for UNCURED material uncertainty; a qualified opinion would mischaracterise adequate disclosure.",
    explanationAr:
      "وفق ISA 570: إذا أزالت الخطط الشك الجوهري وبقيت الظروف جديرة بانتباه المستخدمين، يضيف المراجع فقرة تركيز انتباه تحيل إلى الإفصاح. أما فقرة عدم اليقين فتشمل حالته غير المعالجة فقط، والرأي المشروط يسيء وصف إفصاح ملائم.",
    standardTag: "ISA 570",
    area: "auditing",
    difficulty: 3,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-23",
    stem: "Which statement BEST distinguishes a Key Audit Matter (ISA 701) from an Emphasis of Matter (ISA 706)?",
    stemAr: "أي عبارة تفرّق أفضل تمييز بين مسألة المراجعة الرئيسية (ISA 701) وفقرة تركيز الانتباه (ISA 706)؟",
    options: [
      "KAMs describe matters of most significance in the audit; an EoM highlights a disclosed matter fundamental to users' understanding",
      "KAMs are only used for going concern; EoMs for fraud",
      "KAMs modify the opinion; EoMs do not",
      "EoMs require TCWG communication; KAMs do not",
    ],
    optionsAr: [
      "المسائل الرئيسية تصف أهم ما في المراجعة؛ وتركيز الانتباه يبرز أمرًا مفصحًا عنه جوهريًا لفهم المستخدمين",
      "المسائل الرئيسية للاستمرارية فقط؛ وتركيز الانتباه للغش",
      "المسائل الرئيسية تعدل الرأي؛ وتركيز الانتباه لا يعدله",
      "تركيز الانتباه يستلزم إبلاغ أصحاب الحكم؛ والمسائل الرئيسية لا يستلزمه",
    ],
    answerIndex: 0,
    explanation:
      "ISA 701 KAMs are matters that, in the auditor's judgement, were of most significance in the audit — normally the significant risks and areas of significant judgement. ISA 706 EoMs highlight matters appropriately presented and disclosed that are fundamental to users' understanding; neither modifies the opinion.",
    explanationAr:
      "مسائل ISA 701 هي ما يحكم المراجع بأنه الأهم في المراجعة — عادة المخاطر الجوهرية ومناطق الحكم المهم. وفقرة ISA 706 تبرز أمورًا معروضة ومفصحًا عنها ملائمًا تكون أساسية لفهم المستخدمين؛ ولا أي منهما يعدل الرأي.",
    standardTag: "ISA 701",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-24",
    stem: "A material, but NOT pervasive, misstatement caused by inventory overvaluation remains uncorrected. Under ISA 705, the auditor should issue:",
    stemAr: "بقي دون تصحيح تحريف جوهري غير منتشر ناشئ عن مبالغة في تقييم المخزون. وفق ISA 705، يصدر المراجع:",
    options: [
      "An unmodified opinion with an Emphasis of Matter",
      "A qualified opinion ('except-for')",
      "An adverse opinion",
      "A disclaimer of opinion",
    ],
    optionsAr: [
      "رأيًا غير معدل مع فقرة تركيز انتباه",
      "رأيًا مشروطًا (استثناءً لـ...)",
      "رأيًا معاكسًا",
      "امتناعًا عن الرأي",
    ],
    answerIndex: 1,
    explanation:
      "ISA 705: material but not pervasive misstatements lead to a QUALIFIED opinion; material-and-pervasive leads to adverse; a pervasive inability to obtain evidence leads to disclaimer. An EoM never substitutes for a modification.",
    explanationAr:
      "وفق ISA 705: التحريفات الجوهرية غير المنتشرة تؤدي إلى رأي مشروط؛ والجوهري المنتشر إلى رأي معاكس؛ وتعذر الحصول على أدوات بشكل منتشر إلى امتناع عن الرأي. وتركيز الانتباه لا يحل محل التعديل أبدًا.",
    standardTag: "ISA 705",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
]
