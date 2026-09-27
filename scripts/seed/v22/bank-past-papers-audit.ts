/** v22 seed data — previous-exam papers (Auditing): ACCA AA-style and
 *  ACCA AAA-style adapted papers. Bilingual EN/AR, past-paper scenario MCQs.
 *  Sources identify the paper slice: "ACCA AA past paper (adapted)" /
 *  "ACCA AAA past paper (adapted)". */

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

/* ============================ ACCA AA paper ============================ */

export const AA_PAPER: PastPaperSeedQ[] = [
  {
    code: "AA-P1-01",
    stem: "You are planning the audit of Delta Textiles, a new listed client. Which of the following is the PRIMARY purpose of understanding the entity and its environment under ISA 315 (Revised 2019)?",
    stemAr: "أنت تخطط لمراجعة شركة دلتا للمنسوجات، عميل جديد مُدرج بالبورصة. ما الغرض الأساسي من فهم المنشأة وبيئتها وفق ISA 315 (المعدّل 2019)؟",
    options: [
      "To design audit procedures that detect every misstatement in the financial statements",
      "To identify and assess the risks of material misstatement, whether due to fraud or error",
      "To obtain sufficient appropriate evidence to support the audit opinion",
      "To determine the auditor's fees and the timing of fieldwork",
    ],
    optionsAr: [
      "لتصميم إجراءات تكتشف كل التحريفات في القوائم المالية",
      "لتحديد وتقييم مخاطر التحريف الجوهرية، سواء الناتجة عن الغش أو الخطأ",
      "لالحصول على أدلة كافية ومناسبة لدعم رأي المراجع",
      "لتحديد أتعاب المراجع وتوقيت أعمال الفحص الميداني",
    ],
    answerIndex: 1,
    explanation:
      "ISA 315 requires the auditor to understand the entity and its environment (including internal control) in order to identify and assess the risks of material misstatement at the financial-statement and assertion levels — this risk assessment then drives the design of further audit procedures under ISA 330. Detecting 'every' misstatement is never the purpose (A overstates assurance); obtaining evidence is the objective of procedures, not of the understanding phase (C).",
    explanationAr:
      "يتطلب ISA 315 من المراجع فهم المنشأة وبيئتها (بما فيها الرقابة الداخلية) لتحديد وتقييم مخاطر التحريف الجوهرية على مستوى القوائم وعلى مستوى التأكيدات، ثم يُبنى على هذا التقييم تصميم إجراءات المراجعة الإضافية وفق ISA 330. اكتشاف «كل» التحريفات ليس غرضًا قط (الخيار أ مبالغ فيه)، والحصول على الأدلة هو هدف الإجراءات لا مرحلة الفهم (ج).",
    standardTag: "ISA 315",
    area: "auditing",
    difficulty: 1,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-02",
    stem: "During the audit of Nile Foods, the auditor is setting performance materiality as a percentage of overall materiality. Which factor would most likely justify setting a LOWER percentage?",
    stemAr: "أثناء مراجعة شركة النيل للأغذية، يحدد المراجع الأهمية التنفيذية كنسبة من الأهمية الإجمالية. أي عامل يبرر على الأرجح اختيار نسبة أدنى؟",
    options: [
      "The entity has stable, predictable earnings with no indications of fraud",
      "There were many uncorrected misstatements identified in the previous audit",
      "The audit team expects fewer than two uncorrected misstatements this year",
      "The entity operates in a low-risk, cash-based business with strong controls",
    ],
    optionsAr: [
      "المنشأة ذات أرباح مستقرة يمكن التنبؤ بها دون مؤشرات على غش",
      "كانت هناك تحريفات غير مصححة كثيرة في مراجعة العام السابق",
      "يتوقع فريق المراجعة أقل من تحريفين غير مصححين هذا العام",
      "تعمل المنشأة في نشاط نقدي منخفض المخاطر بضوابط قوية",
    ],
    answerIndex: 1,
    explanation:
      "ISA 320 points to factors such as expectations of misstatements, prior-period experience and the entity's risk environment: a history of many uncorrected misstatements (B) drives a lower performance materiality so that accumulated errors are caught before they approach the overall figure. Options A, C and D all describe low-risk environments that support a higher percentage.",
    explanationAr:
      "يشير ISA 320 إلى عوامل مثل توقعات التحريفات وخبرة الفترة السابقة وبيئة مخاطر المنشأة: فتاريخ التحريفات غير المصححة الكثيرة (ب) يدفع لخفض الأهمية التنفيذية بحيث تُكتشف الأخطاء المتراكمة قبل اقترابها من الأهمية الإجمالية. أما الخيارات (أ، ج، د) فتصف بيئات منخفضة المخاطر تسوّغ نسبة أعلى.",
    standardTag: "ISA 320",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-03",
    stem: "For an assertion where the auditor plans to rely on controls, which combination of procedures is required by ISA 330?",
    stemAr: "بالنسبة لتأكيد يعتزم المراجع الاعتماد فيه على الضوابط، أي توليفة إجراءات يوجبها ISA 330؟",
    options: [
      "Tests of details only, since substantive procedures are always required",
      "Tests of controls to confirm operating effectiveness, plus substantive procedures",
      "Analytical procedures alone, given a low assessed risk",
      "Inquiry of management only, as the controls are automated",
    ],
    optionsAr: [
      "اختبارات تفصيلية فقط، لأن الإجراءات الجوهرية مطلوبة دائمًا",
      "اختبارات الضوابط للتأكد من فاعلية التشغيل، مع إجراءات جوهرية",
      "إجراءات تحليلية فقط، نظرًا لانخفاض المخاطر المقيَّمة",
      "الاستفسار من الإدارة فقط، لأن الضوابط مؤتمتة",
    ],
    answerIndex: 1,
    explanation:
      "Where the auditor intends to rely on controls to reduce substantive work, ISA 330 requires tests of the operating effectiveness of those controls, and substantive procedures are never eliminated entirely for significant transactions — the required nature, timing and extent of substantive work is merely reduced. Inquiry alone never provides sufficient evidence (D), and analytical procedures alone are insufficient for significant assertions (C).",
    explanationAr:
      "عندما ينوي المراجع الاعتماد على الضوابط لتقليل العمل الجوهري، يوجب ISA 330 اختبارات لفاعلية تشغيل تلك الضوابط، ولا تُلغى الإجراءات الجوهرية كليًا أبدًا للعمليات الجوهرية — بل يُخفَّض قدرها وتوقيتها وطبيعتها فقط. والاستفسار وحده لا يوفر أدلة كافية (د)، والإجراءات التحليلية وحدها لا تكفي للتأكيدات الجوهرية (ج).",
    standardTag: "ISA 330",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-04",
    stem: "Management of Orasud Construction refuses to perform any going-concern assessment beyond twelve months from the reporting date. What is the auditor's most appropriate response under ISA 570 if the construction backlog extends three years?",
    stemAr: "ترفض إدارة شركة أوراسود للإنشاءات إجراء أي تقييم للاستمرارية يتجاوز اثني عشر شهرًا من تاريخ التقرير. ما أنسب استجابة للمراجع وفق ISA 570 إذا كان رصيد الأعمال المتعاقد عليها يمتد ثلاث سنوات؟",
    options: [
      "Accept management's twelve-month horizon, as ISA 570 prescribes exactly twelve months",
      "Treat the refusal as a scope limitation and modify the opinion immediately",
      "Evaluate management's assessment over a period of at least twelve months from the date of approval of the financial statements, considering whether a longer horizon is appropriate given the three-year backlog",
      "Withdraw from the engagement, as going-concern evaluation is solely management's responsibility",
    ],
    optionsAr: [
      "قبول أفق الاثني عشر شهرًا، لأن ISA 570 يحدد اثني عشر شهرًا بالضبط",
      "معاملة الرفض كتقييد للنطاق وتعديل الرأي فورًا",
      "تقييم تقييم الإدارة على مدى لا يقل عن اثني عشر شهرًا من تاريخ اعتماد القوائم المالية، مع تقدير مدى الحاجة لأفق أطول في ضوء رصيد الأعمال ثلاثي السنوات",
      "الانسحاب من المهمة، لأن تقييم الاستمرارية مسؤولية الإدارة وحدها",
    ],
    answerIndex: 2,
    explanation:
      "ISA 570 requires management's assessment to cover at least twelve months from the date of approval of the financial statements — not merely the reporting date — and the auditor must evaluate whether that horizon is appropriate for the entity's business (a three-year construction backlog makes a longer look-forward relevant). Immediate modification (B) or withdrawal (D) is premature; the fixed-twelve-month reading in A misstates the standard.",
    explanationAr:
      "يتطلب ISA 570 أن يغطي تقييم الإدارة مدة لا تقل عن اثني عشر شهرًا من تاريخ اعتماد القوائم المالية — لا من تاريخ التقرير فحسب — وعلى المراجع تقدير مدى ملاءمة هذا الأفق لطبيعة النشاط (رصيد أعمال ثلاثي السنوات يجعل النظر لمدة أطول ضروريًا). أما التعديل الفوري (ب) أو الانسحاب (د) فمبكران، والقراءة الحرفية في (أ) تخالف المعيار.",
    standardTag: "ISA 570",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-05",
    stem: "Which of the following written representations would NOT be appropriate to request under ISA 580?",
    stemAr: "أي مما يلي من الإقرارات الخطية لا يكون مناسبًا طلبُه وفق ISA 580؟",
    options: [
      "Confirmation that management has disclosed all related-party relationships",
      "Confirmation that all subsequent events requiring adjustment or disclosure have been reported",
      "Confirmation that the trial balance arithmetically agrees to the ledger in every respect",
      "Confirmation that management believes the entity is a going concern",
    ],
    optionsAr: [
      "تأكيد بأن الإدارة أفصحت عن جميع علاقات الأطراف ذات العلاقة",
      "تأكيد بأن جميع الأحداث اللاحقة التي تتطلب تعديلًا أو إفصاحًا قد أُبلغ عنها",
      "تأكيد بأن ميزان المراجعة يطابق دفتر الأستاذ حسابيًّا في كل وجه",
      "تأكيد بأن الإدارة تعتقد أن المنشأة مستمرة",
    ],
    answerIndex: 2,
    explanation:
      "Written representations cover matters where management's knowledge and belief are relevant — related parties (A), subsequent events (B) and the going-concern view (D) are all standard ISA 580 representations. Arithmetical agreement of the trial balance to the ledger is verifiable directly by the auditor from the entity's records; it is a matter for audit evidence, not a representation of belief.",
    explanationAr:
      "تتناول الإقرارات الخطية المسائل التي تكون فيها معرفة الإدارة ومعتقدها ذات صلة — الأطراف ذات العلاقة (أ) والأحداث اللاحقة (ب) ونظرة الاستمرارية (د) كلها إقرارات معتادة وفق ISA 580. أما التطابق الحسابي لميزان المراجعة مع دفتر الأستاذ فيمكن للمراجع التحقق منه مباشرة من سجلات المنشأة، فهو من مسائل أدلة المراجعة لا من مسائل الاعتقاد.",
    standardTag: "ISA 580",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-06",
    stem: "An audit senior replaced a working paper's original documentation with a cleaner version and discarded the superseded draft. Under ISA 230, this is:",
    stemAr: "استبدل كبير مراجعي الفريق ورقة عمل أصليّة بنسخة أنظف وأتلف المسودة المستبدلة. وفق ISA 230، هذا يُعد:",
    options: [
      "Acceptable, provided the new version is reviewed by the manager",
      "Acceptable, because final documentation may replace drafts at any time before the audit report date",
      "A documentation deficiency — the auditor must retain superseded documentation and document the review of amendments",
      "A documentation deficiency, but only if the file is assembled more than 60 days later",
    ],
    optionsAr: [
      "مقبول، بشرط مراجعة النسخة الجديدة من المدير",
      "مقبول، لأن التوثيق النهائي يجوز أن يحل محل المسودات في أي وقت قبل تاريخ تقرير المراجعة",
      "قصورًا في التوثيق — إذ يجب على المراجع الاحتفاظ بالتوثيق المستبدل وتوثيق مراجعة التعديلات",
      "قصورًا في التوثيق، لكن فقط إذا جُمِّع الملف بعد ستين يومًا أو أكثر",
    ],
    answerIndex: 2,
    explanation:
      "ISA 230 requires the auditor to retain superseded or amended documentation and to document when amendments were made and by whom — 'clean copies' that erase the audit trail are prohibited. The 60-day assembly period in (D) relates to finalizing the file after the audit report date, not to destroying records.",
    explanationAr:
      "يتطلب ISA 230 من المراجع الاحتفاظ بالتوثيق المستبدل أو المعدَّل وتوثيق وقت التعديل ومَن أجراه — و«النسخ النظيفة» التي تمحو مسار المراجعة محظورة. وفترة الستين يومًا في (د) تخص اكتمال تجميع الملف بعد تاريخ تقرير المراجعة، لا إتلاف السجلات.",
    standardTag: "ISA 230",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-07",
    stem: "Under ISA 240, which of the following best describes the auditor's presumption about fraud risk in revenue recognition?",
    stemAr: "وفق ISA 240، أي مما يلي يصف على أفضل وجه افتراض المراجع بشأن خطر الغش في الاعتراف بالإيراد؟",
    options: [
      "Revenue fraud risk is presumed only for listed entities",
      "There is a presumed risk of fraud in revenue recognition, which the auditor may rebut with documented reasoning",
      "Revenue fraud risk must always be treated as a significant risk and can never be rebutted",
      "The presumption applies only when revenue is earned from related parties",
    ],
    optionsAr: [
      "يُفترض خطر غش الإيراد للكيانات المُدرجة بالبورصة فقط",
      "هناك خطر مفترَض للغش في الاعتراف بالإيراد، يجوز للمراجع نقضه بأسباب موثقة",
      "يجب معاملة خطر غش الإيراد دائمًا كخطر جوهري ولا يمكن نقضه أبدًا",
      "ينطبق الافتراض فقط عندما يتحقق الإيراد من أطراف ذات علاقة",
    ],
    answerIndex: 1,
    explanation:
      "ISA 240 establishes a rebuttable presumption that there is a risk of fraud in revenue recognition; the auditor may conclude the presumption is not applicable in the circumstances, but must document that reasoning — making B correct and C wrong. The presumption is not limited to listed entities (A) or related-party revenue (D).",
    explanationAr:
      "ينشئ ISA 240 افتراضًا قابلًا للنقض بوجود خطر غش في الاعتراف بالإيراد؛ ويجوز للمراجع استنتاج عدم انطباق الافتراض في ظروف معينة، لكن عليه توثيق أسباب ذلك — لذا (ب) صحيح و(ج) خطأ. والافتراض ليس مقصورًا على المُدرجة (أ) ولا على إيرادات الأطراف ذات العلاقة (د).",
    standardTag: "ISA 240",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-08",
    stem: "Marina Auditors are the incoming auditors of Port Shipping. Regarding the OPENING BALANCES under ISA 510, the auditor's primary objective is to obtain sufficient evidence that:",
    stemAr: "تولت دار مارينا للمراجعة مراجعة شركة بورت للملاحة. بشأن الأرصدة الافتتاحية وفق ISA 510، الهدف الأساسي للمراجع هو الحصول على أدلة كافية بأن:",
    options: [
      "The prior period was audited without qualification",
      "Opening balances do not contain misstatements that materially affect the current period, and accounting policies are consistently applied",
      "The previous auditor is willing to hold re-performing discussions",
      "Closing balances of the prior year equal opening balances exactly in every account",
    ],
    optionsAr: [
      "أن الفترة السابقة روجعت دون تحفظ",
      "الأرصدة الافتتاحية لا تتضمن تحريفات تؤثر جوهريًا على الفترة الحالية، وأن السياسات المحاسبية تُطبَّق باتساق",
      "أن المراجع السابق مستعد لعقد مناقشات لإعادة الأداء",
      "أن أرصدة إقفال العام السابق تساوي الأرصدة الافتتاحية تمامًا في كل حساب",
    ],
    answerIndex: 1,
    explanation:
      "ISA 510's objectives are to obtain sufficient appropriate evidence that opening balances do not contain misstatements that materially affect the current financial statements, and that accounting policies are consistently applied or properly reclassified. Whether the prior audit was qualified (A) is contextual, not the objective; the prior auditor's availability (C) is a procedure, not an objective.",
    explanationAr:
      "أهداف ISA 510 هي الحصول على أدلة كافية ومناسبة بأن الأرصدة الافتتاحية لا تتضمن تحريفات تؤثر جوهريًا على القوائم الحالية، وبأن السياسات المحاسبية تُطبَّق باتساق أو يُعاد تصنيفها على النحو الواجب. أما تحفظ مراجعة العام السابق (أ) فقرينة سياقية لا هدف، وتوافر المراجع السابق (ج) إجراء لا هدف.",
    standardTag: "ISA 510",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-09",
    stem: "During fieldwork, the auditor accumulates misstatements of EGP 420,000 against performance materiality of EGP 500,000. Under ISA 450, the fact that the accumulation is approaching performance materiality most directly indicates that the auditor should:",
    stemAr: "أثناء العمل الميداني، جمَّع المراجع تحريفات بقيمة 420,000 جنيه مقابل أهمية تنفيذية 500,000 جنيه. وفق ISA 450، إن اقتراب المجموع من الأهمية التنفيذية يشير مباشرةً إلى أن على المراجع أن:",
    options: [
      "Issue an unmodified opinion, since uncorrected misstatements are below overall materiality",
      "Issue a qualified opinion immediately because the accumulated total is close to performance materiality",
      "Consider whether the misstatements indicate an underestimated risk assessment requiring more extensive procedures, and evaluate uncorrected misstatements qualitatively as well as quantitatively",
      "Request management to correct only the misstatements that individually exceed EGP 100,000",
    ],
    optionsAr: [
      "إصدار رأي غير معدَّل، لأن التحريفات غير المصححة أدنى من الأهمية الإجمالية",
      "إصدار رأي متحفظ فورًا لأن الإجمالي المجمَّع يقترب من الأهمية التنفيذية",
      "أن يقدّر ما إذا كانت التحريفات تكشف عن تقييم مخاطر أقل من الواقع يستوجب إجراءات أوسع، وأن يقيّم التحريفات غير المصححة نوعيًا لا كميًا فحسب",
      "أن يطلب من الإدارة تصحيح التحريفات التي تتجاوز 100,000 جنيه فرديًا فقط",
    ],
    answerIndex: 2,
    explanation:
      "ISA 450 requires evaluating uncorrected misstatements both quantitatively and qualitatively, and staying alert that an accumulation approaching performance materiality may signal that risks were underestimated — prompting a reassessment of risk and more extensive procedures. Neither an automatic unmodified (A) nor automatic qualified (B) opinion follows from the arithmetic alone.",
    explanationAr:
      "يتطلب ISA 450 تقييم التحريفات غير المصححة كميًا ونوعيًا معًا، والانتباه إلى أن اقتراب التحريفات المجمعة من الأهمية التنفيذية قد يدل على تقدير للمخاطر بأقل من حقيقتها — بما يستوجب إعادة تقييم المخاطر وإجراءات أوسع. ولا يترتب على الحساب وحده رأي غير معدَّل تلقائي (أ) ولا متحفظ تلقائي (ب).",
    standardTag: "ISA 450",
    area: "auditing",
    difficulty: 3,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-10",
    stem: "Which of the following matters is communicated as a Key Audit Matter rather than an Emphasis of Matter paragraph?",
    stemAr: "أي المسائل التالية يُبلَّغ عنها كمسألة مراجعة جوهرية (KAM) بدلًا من فقرة تركيز الانتباه؟",
    options: [
      "A significant risk of impairment of goodwill that was subject to especially challenging auditor judgement",
      "A subsequent event occurring after the reporting date that is adequately disclosed in the notes",
      "A material uncertainty related to going concern that is adequately disclosed",
      "A catastrophe occurring after the date of the audit report affecting the entity's operations",
    ],
    optionsAr: [
      "خطر جوهري في اضمحلال الشهرة خضع لحكم مراجع بالغ الصعوبة",
      "حدث لاحق وقع بعد تاريخ التقرير ومفصح عنه على النحو الواجب في الإيضاحات",
      "عدم يقين جوهري متعلق بالاستمرارية مفصح عنه على النحو الواجب",
      "كارثة تقع بعد تاريخ تقرير المراجعة وتؤثر على عمليات المنشأة",
    ],
    answerIndex: 0,
    explanation:
      "KAMs (ISA 701) are those matters that, in the auditor's judgement, were of most significance in the audit — typically areas of higher assessed risk or significant management judgement, as in the goodwill impairment (A). Going-concern material uncertainty (C), subsequent events (B) and post-report catastrophes (D) are classic Emphasis of Matter / Other Matter territory under ISA 706.",
    explanationAr:
      "مسائل المراجعة الجوهرية (ISA 701) هي المسائل التي كانت — بحكم المراجع — الأهم في المراجعة، وعادةً مناطق المخاطر الأعلى تقييمًا أو الحكم المهني الكبير للإدارة، كاضمحلال الشهرة (أ). أما عدم اليقين في الاستمرارية (ج) والأحداث اللاحقة (ب) والكوارث بعد التقرير (د) فمن صميم فقرات تركيز الانتباه وفق ISA 706.",
    standardTag: "ISA 701",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-11",
    stem: "In the sales system of Cairo Retail, the same clerk records customer orders, approves credit limits and posts cash receipts. The most direct risk arising is:",
    stemAr: "في نظام مبيعات شركة القاهرة للتجزئة، يقوم موظف واحد بتسجيل أوامر العملاء واعتماد حدود الائتمان وترحيل المقبوضات. أخطر ما ينشأ مباشرةً هو:",
    options: [
      "Increased audit risk, because detection procedures will be more extensive",
      "Fraud risk from incompatible duties — the clerk can conceal misappropriation of cash by adjusting customer balances",
      "Business risk from slow order processing",
      "Control risk is eliminated because the clerk knows the whole system",
    ],
    optionsAr: [
      "ارتفاع خطر المراجعة، لأن إجراءات الاكتشاف ستكون أوسع",
      "خطر غش ناتج عن مهام متعارضة — إذ يستطيع الموظف إخفاء اختلاس النقدية بتعديل أرصدة العملاء",
      "خطر تشغيلي ناتج عن بطء معالجة الأوامر",
      "زوال خطر الضبط لأن الموظف يعرف النظام كاملًا",
    ],
    answerIndex: 1,
    explanation:
      "Combining custody (cash posting) with recording and authorization (orders, credit) is the classic segregation-of-duties failure: the clerk can misappropriate receipts and conceal the theft by lapping or adjusting receivable records. This elevates fraud risk (B) — not audit risk directly (A), which the auditor controls through procedures. Control risk is increased, never eliminated (D).",
    explanationAr:
      "الجمع بين الحفظ (ترحيل النقدية) والتسجيل والاعتماد (الأوامر والائتمان) هو الإخفاق الكلاسيكي في الفصل بين المهام: يستطيع الموظف اختلاس المقبوضات وإخفاء السرقة عبر التلاعب بأرصدة المدينين، فيرتفع خطر الغش (ب) — لا خطر المراجعة مباشرة (أ) الذي يضبطه المراجع بإجراءاته. وخطر الضبط يزداد ولا يزول أبدًا (د).",
    standardTag: "Internal control",
    area: "auditing",
    difficulty: 1,
    source: "ACCA AA past paper (adapted)",
  },
  {
    code: "AA-P1-12",
    stem: "Under ISA 505, when is the use of NEGATIVE confirmations most likely to provide appropriate evidence about accounts receivable?",
    stemAr: "وفق ISA 505، متى يكون استخدام التأكيدات السلبية على الأرجح موفرًا لأدلة مناسبة عن الذمم المدينة؟",
    options: [
      "When the account balances are large, few in number and involve significant individual risks",
      "When the assessed risk of material misstatement is low, balances are many and small, and no circumstances cause the auditor to believe recipients will disregard the requests",
      "When the auditor is unable to use positive confirmations for any recipient",
      "When internal control over receivables is weak and management override is likely",
    ],
    optionsAr: [
      "عندما تكون الأرصدة كبيرة وقليلة العدد وذات مخاطر فردية جوهرية",
      "عندما يكون خطر التحريف الجوهري المقيَّم منخفضًا، والأرصدة كثيرة وصغيرة، ولا توجد ظروف تدفع المراجع للاعتقاد بأن المستلمين سيتجاهلون الطلبات",
      "عندما يعجز المراجع عن استخدام التأكيدات الإيجابية لأي مستلم",
      "عندما تكون الرقابة الداخلية على الذمم ضعيفة والتجاوز من الإدارة مرجحًا",
    ],
    answerIndex: 1,
    explanation:
      "Negative confirmations alone provide less persuasive evidence than positive ones, so ISA 505 limits them to conditions of low assessed risk, many small homogeneous balances and no expectation that recipients will disregard them (B). Large or risky balances require positive confirmation or alternatives (A, D), and unavailability of addresses (C) drives alternative procedures rather than negative requests.",
    explanationAr:
      "التأكيدات السلبية وحدها أقل إقناعًا من الإيجابية، لذا يقصرها ISA 505 على حالات انخفاض المخاطر المقيَّمة، وتعدد الأرصدة الصغيرة المتجانسة، وعدم وجود ما يدفع للاعتقاد بتجاهل المستلمين للطلبات (ب). أما الأرصدة الكبيرة أو عالية المخاطر فتتطلب تأكيدًا إيجابيًا أو إجراءات بديلة (أ، د)، وعدم توافر العناوين (ج) يقود لإجراءات بديلة لا للتأكيدات السلبية.",
    standardTag: "ISA 505",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AA past paper (adapted)",
  },
]

/* =========================== ACCA AAA paper =========================== */

export const AAA_PAPER: PastPaperSeedQ[] = [
  {
    code: "AAA-P1-01",
    stem: "Zamalek Assurance has audited Heliopolis Metals for nine years and has now been invited to provide internal audit outsourcing to the same client. Under the IESBA Code, which threat arises if the internal audit work is extensive and includes management responsibilities?",
    stemAr: "تتولى دار الزمالك للمراجعة فحص شركة حلوان للمعادن منذ تسع سنوات، ودُعيت الآن لتقديم التعهيد الداخلي للمراجعة لنفس العميل. وفق ميثاق IESBA، أي تهديد ينشأ إذا كانت أعمال المراجعة الداخلية واسعة وتتضمن مسؤوليات إدارية؟",
    options: [
      "Self-review threat, because the firm may end up reviewing its own outsourced work",
      "Advocacy threat, because the firm promotes the client's internal audit function",
      "Familiarity threat only, arising solely from the nine-year tenure",
      "No threat, as internal audit outsourcing is always permitted for audit clients",
    ],
    optionsAr: [
      "تهديد المراجعة الذاتية، لأن الدار قد ينتهي بها الأمر مراجعة أعمالها المعهَّدة ذاتها",
      "تهديد الترويج، لأن الدار تروّج وظيفة المراجعة الداخلية لدى العميل",
      "تهديد الألفة فقط، الناشئ حصرًا عن السنوات التسع",
      "لا تهديد، إذ إن تعهيد المراجعة الداخلية مسموح دائمًا لعملاء المراجعة",
    ],
    answerIndex: 0,
    explanation:
      "Outsourcing internal audit to an audit client creates a self-review threat when the external auditor, in the audit, relies on or evaluates work the firm itself performed (IESBA Section 602). Familiarity (C) may coexist from the long tenure but the direct threat here is self-review; internal audit outsourcing is not 'always permitted' (D) — safeguards or refusal are considered based on the materiality of the outsourced function.",
    explanationAr:
      "ينشئ تعهيد المراجعة الداخلية لعميل مراجعة تهديد مراجعة ذاتية عندما يعتمد المراجع الخارجي في مراجعته على أعمال نفذتها داره أو يقيّمها (القسم 602 من ميثاق IESBA). وقد يتزامن تهديد الألفة (ج) من طول المدة، لكن التهديد المباشر هنا هو المراجعة الذاتية؛ والتعهيد ليس «مسموحًا دائمًا» (د) بل تُقيَّم الضوابط أو الرفض بحسب جوهرية الوظيفة المعهَّدة.",
    standardTag: "Ethics",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-02",
    stem: "Under ISA 600 (Revised), for a component that is NOT of individual financial significance to the group, the group engagement team performs:",
    stemAr: "وفق ISA 600 (المعدّل)، بالنسبة لمكوِّن ليست له أهمية مالية فردية للمجموعة، يقوم فريق مراجعة المجموعة بـ:",
    options: [
      "A full-scope component audit using component auditors, with the group team reviewing the component auditor's entire file",
      "Analytical procedures at group level, and work at the component only where significant risks identified at group level exist in that component",
      "A review of the component's financial information in accordance with ISRE 2400 in all cases",
      "No procedures whatsoever, as insignificant components are excluded from the group audit",
    ],
    optionsAr: [
      "مراجعة كاملة النطاق للمكوِّن بمراجعين مكونات، مع مراجعة الفريق لملف مراجع المكوِّن كاملًا",
      "إجراءات تحليلية على مستوى المجموعة، وأعمال في المكوِّن فقط حيث توجد مخاطر جوهرية مُحدَّدة على مستوى المجموعة تخص ذلك المكوِّن",
      "فحصًا محدودًا للمعلومات المالية للمكوِّن وفق ISRE 2400 في جميع الأحوال",
      "لا إجراءات إطلاقًا، إذ تُستثنى المكوِّنات غير المؤثرة من مراجعة المجموعة",
    ],
    answerIndex: 1,
    explanation:
      "For components that are not of individual financial significance, the group team performs analytical procedures at group level, and allocates work to such components only when a significant risk identified at group level exists there — no full-scope audit (A) or mandatory ISRE 2400 review (C), and never zero work (D), because the group auditor's opinion still covers those components through aggregation.",
    explanationAr:
      "للمكوِّنات غير ذات الأهمية المالية الفردية، يجري فريق المجموعة إجراءات تحليلية على مستوى المجموعة، ولا يخصص أعمالًا لتلك المكوِّنات إلا عندما توجد فيها مخاطر جوهرية حُددت على مستوى المجموعة — فلا مراجعة كاملة النطاق (أ) ولا فحصًا محدودًا وجوبيًا وفق ISRE 2400 (ج)، ولا انعدام إجراءات (د)، لأن رأي مراجع المجموعة يظل يغطيها عبر التجميع.",
    standardTag: "ISA 600",
    area: "auditing",
    difficulty: 3,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-03",
    stem: "A material uncertainty related to going concern is adequately disclosed in the notes. The auditor's report should include:",
    stemAr: "عدم يقين جوهري متعلق بالاستمرارية مفصح عنه على النحو الواجب في الإيضاحات. يجب أن يتضمن تقرير المراجع:",
    options: [
      "An unmodified opinion with an Emphasis of Matter paragraph referring to the disclosure",
      "An unmodified opinion with a separate section 'Material Uncertainty Related to Going Concern', placed directly after the opinion",
      "A qualified opinion with an 'except-for' explanation",
      "An adverse opinion because a material uncertainty exists",
    ],
    optionsAr: [
      "رأيًا غير معدَّل مع فقرة تركيز انتباه تشير إلى الإفصاح",
      "رأيًا غير معدَّل مع قسم منفصل بعنوان «عدم يقين جوهري متعلق بالاستمرارية» يوضع مباشرةً بعد الرأي",
      "رأيًا متحفظًا مع إيضاح استثنائي",
      "رأيًا سلبيًا لوجود عدم يقين جوهري",
    ],
    answerIndex: 1,
    explanation:
      "Where going-concern disclosure is adequate, ISA 570 requires an unmodified opinion plus a dedicated 'Material Uncertainty Related to Going Concern' section immediately after the opinion — not merely an EoM paragraph (A), and never a modification (C, D), because adequate disclosure removes the grounds for qualification.",
    explanationAr:
      "عندما يكون الإفصاح عن الاستمرارية وافيًا، يوجب ISA 570 رأيًا غير معدَّل مع قسم مخصص بعنوان «عدم يقين جوهري متعلق بالاستمرارية» يلي الرأي مباشرة — لا مجرد فقرة تركيز انتباه (أ)، ولا تعديل للرأي أبدًا (ج، د)، لأن الإفصاح الوافي يزيل أساس التحفظ.",
    standardTag: "ISA 570",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-04",
    stem: "The financial statements contain a pervasive material misstatement from an unacceptable, unjustifiable change in depreciation policy. The auditor should issue:",
    stemAr: "تتضمن القوائم المالية تحريفًا جوهريًا منتشرًا ناتجًا عن تغيير غير مقبول وغير مبرر في سياسة الإهلاك. ينبغي للمراجع إصدار:",
    options: [
      "A qualified opinion with an 'except for' basis paragraph",
      "An adverse opinion with a basis for adverse opinion section",
      "A disclaimer of opinion",
      "An unmodified opinion with an Other Matter paragraph",
    ],
    optionsAr: [
      "رأي متحفظ مع فقرة أساس استثنائي",
      "رأي سلبي مع قسم أساس الرأي السلبي",
      "امتناعًا عن إبداء الرأي",
      "رأي غير معدَّل مع فقرة مسألة أخرى",
    ],
    answerIndex: 1,
    explanation:
      "A material AND pervasive misstatement (the unjustified policy change affects depreciation across all asset classes) calls for an adverse opinion under ISA 705 — the statements as a whole do not present fairly. A qualification (A) suits material-but-not-pervasive effects; a disclaimer (C) suits impossible or inadequate evidence; an unmodified opinion (D) is never appropriate when a known pervasive misstatement exists.",
    explanationAr:
      "التحريف الجوهري والمنتشر معًا (تغيير السياسة غير المبرر يمس الإهلاك في كل فئات الأصول) يستوجب رأيًا سلبيًا وفق ISA 705 — إذ لا تظهر القوائم بعدالة في مجملها. التحفظ (أ) يناسب الأثر الجوهري غير المنتشر، والامتناع (ج) يناسب تعذر الحصول على الأدلة، والرأي غير المعدَّل (د) لا يستقيم مع تحريف جوهري منتشر معلوم.",
    standardTag: "ISA 705",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-05",
    stem: "Under ISA 220, an engagement quality review (EQR) is required for:",
    stemAr: "وفق ISA 220، يلزم إجراء مراجعة جودة المهمة (EQR) لـ:",
    options: [
      "All statutory audits, regardless of listed status or risk",
      "Audits of listed entities, plus any other engagements where the firm's policies determine an EQR is appropriate",
      "Only audits where a modified opinion is expected",
      "Only first-year engagements of new clients",
    ],
    optionsAr: [
      "جميع المراجعات القانونية بغض النظر عن الإدراج أو المخاطر",
      "مراجعات الكيانات المُدرجة، وأي مهام أخرى تحدد سياسات الدار وجوب مراجعة الجودة لها",
      "المراجعات المتوقع فيها رأي معدَّل فقط",
      "مهام السنة الأولى للعملاء الجدد فقط",
    ],
    answerIndex: 1,
    explanation:
      "ISA 220 mandates an EQR for audits of listed entities and empowers the firm's quality-control policies to require EQRs for other engagements (e.g., high-risk clients). A universal EQR on every audit (A) exceeds the standard; modified-opinion (C) or new-client (D) triggers alone are not the rule.",
    explanationAr:
      "يلزم ISA 220 مراجعة جودة لمهام مراجعة الكيانات المُدرجة، وتجيز سياسات الدار طلبها لمهام أخرى (كالعملاء عاليي المخاطر). فالشمول لكل مراجعة (أ) تجاوز للمعيار، وارتكازها على الرأي المعدَّل (ج) أو العميل الجديد (د) وحده ليس هو القاعدة.",
    standardTag: "ISA 220",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-06",
    stem: "The auditor discovers that the client is discharging untreated industrial waste into the Nile in breach of environmental law. Under the NOCLAR framework, the auditor's FIRST step is to:",
    stemAr: "يكتشف المراجع أن العميل يصرف مخلفات صناعية غير معالجة إلى النيل مخالفًا قانون حماية البيئة. وفق منهج NOCLAR، خطوة المراجع الأولى هي:",
    options: [
      "Report the matter directly to the environmental regulator",
      "Discuss the matter with management and those charged with governance to seek corrective action",
      "Withdraw from the engagement immediately",
      "Disclose the breach prominently in the auditor's report",
    ],
    optionsAr: [
      "الإبلاغ مباشرةً إلى الجهة البيئية المختصة",
      "مناقشة الأمر مع الإدارة وأصحاب الحوكمة لطلب اتخاذ إجراء تصحيحي",
      "الانسحاب من المهمة فورًا",
      "الإفصاح عن المخالفة بوضوح في تقرير المراجعة",
    ],
    answerIndex: 1,
    explanation:
      "Under the IESBA NOCLAR provisions, the auditor first discusses the non-compliance with management and those charged with governance, urging rectification and adequate treatment in the financial statements; escalation to regulators or withdrawal is a later, conditional step when the response is inadequate or the public interest is at stake. Automatic reporting (A), automatic withdrawal (C) or report disclosure (D) are not first responses.",
    explanationAr:
      "وفق قواعد IESBA بشأن عدم الامتثال للقوانين والأنظمة (NOCLAR)، يناقش المراجع أولًا المخالفة مع الإدارة وأصحاب الحوكمة ساعيًا للتصحيح ومعالجة الأثر في القوائم؛ أما التصعيد للجهات الرقابية أو الانسحاب فخطوة لاحقة مشروطة بعدم كفاية الاستجابة أو تعرض المصلحة العامة للخطر. فالإبلاغ التلقائي (أ) والانسحاب التلقائي (ج) والإفصاح في التقرير (د) ليست الاستجابة الأولى.",
    standardTag: "Ethics",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-07",
    stem: "Under ISA 550, which audit response addresses the significant risk that a DOMINANT related party conducted transactions with the entity outside the normal course of business?",
    stemAr: "وفق ISA 550، أي استجابة مراجعة تعالج الخطر الجوهري المتمثل في أن طرفًا ذا علاقة مسيطرًا أجرى عمليات مع المنشأة خارج نطاق نشاطها الاعتيادي؟",
    options: [
      "Confirm the balances of ALL trade receivables using positive confirmations",
      "Inspect the underlying contracts, evaluate the business rationale, and perform appropriate procedures on the disclosed terms and disclosures",
      "Rely on management's written representation alone that terms are equivalent to arm's length",
      "Reduce substantive procedures because the related parties are known to the auditor",
    ],
    optionsAr: [
      "تأكيد أرصدة جميع الذمم التجارية تأكيدًا إيجابيًا",
      "فحص العقود المتحصلة، وتقييم المسوغ التجاري، وإجراء الإجراءات المناسبة على الشروط المفصح عنها وعلى الإفصاحات ذاتها",
      "الاكتفاء بإقرار الإدارة الخطي بأن الشروط تعادل شروط التعامل مع الغير",
      "تخفيف الإجراءات الجوهرية لأن الأطراف ذات العلاقة معروفة للمراجع",
    ],
    answerIndex: 1,
    explanation:
      "For significant related-party risks outside the normal course of business, ISA 550 requires inspecting the underlying agreements, evaluating the business rationale (or lack of it) and testing the disclosure of terms — including whether the transaction may indicate fraud. Blanket receivable confirmations (A) miss the point, a representation alone (C) is never sufficient for a significant risk, and risk is increased rather than reduced by dominance (D).",
    explanationAr:
      "لمخاطر الأطراف ذات العلاقة الجوهرية خارج النشاط الاعتيادي، يوجب ISA 550 فحص الاتفاقيات المتحصلة وتقييم المسوغ التجاري (أو غيابه) واختبار الإفصاح عن الشروط — بما قد يكشف عن مؤشرات غش. فالتأكيد الشامل للذمم (أ) لا يصيب المقصود، والإقرار وحده (ج) لا يكفي أبدًا لخطر جوهري، والمخاطر تزداد بالسيطرة ولا تنقص (د).",
    standardTag: "ISA 550",
    area: "auditing",
    difficulty: 2,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-08",
    stem: "A major customer's bankruptcy, caused by financial distress that existed at the reporting date, is discovered two weeks after the reporting period but before the auditor's report is signed. Under ISA 560 the auditor should:",
    stemAr: "يُكتشف إفلاس عميل رئيسي — ناتج عن ضائقة مالية كانت قائمة في تاريخ التقرير — بعد أسبوعين من نهاية الفترة وقبل توقيع تقرير المراجعة. وفق ISA 560 ينبغي للمراجع أن:",
    options: [
      "Take no action, because the bankruptcy occurred after the reporting period",
      "Perform procedures on the event and require management to adjust the allowance for doubtful debts, since the event confirms conditions existing at the reporting date",
      "Require adjustment in all cases, because bankruptcy after the reporting date is always an adjusting event",
      "Withdraw from the engagement, as the evidence base has changed",
    ],
    optionsAr: [
      "عدم اتخاذ أي إجراء، لأن الإفلاس وقع بعد نهاية الفترة",
      "إجراء فحوص على الحدث ومطالبة الإدارة بتعديل مخصص الديون المشكوك فيها، لأن الحدث يؤكد ظروفًا كانت قائمة في تاريخ التقرير",
      "المطالبة بالتعديل في جميع الأحوال، لأن الإفلاس بعد نهاية الفترة حدث تعديلي دائمًا",
      "الانسحاب من المهمة لأن قاعدة الأدلة تغيرت",
    ],
    answerIndex: 1,
    explanation:
      "Facts arising after the reporting date that provide evidence of conditions existing AT the reporting date (the customer's distress) are adjusting events: the auditor performs procedures and asks management to adjust. But bankruptcy is not automatically adjusting (C) — if the failure arose from a post-period cause, it is non-adjusting with disclosure. The post-period occurrence does not end the auditor's responsibility before the report date (A), and withdrawal (D) is unnecessary.",
    explanationAr:
      "الوقائع الناشئة بعد تاريخ التقرير الدالة على ظروف قائمة في تاريخ التقرير ذاته (الضائقة المالية للعميل) أحداث تعديلية: يجري المراجع فحوصه ويطلب من الإدارة التعديل. لكن الإفلاس ليس تعديليًا تلقائيًا (ج) — فإن نشأ عن سبب لاحق للفترة فهو غير تعديلي مع الإفصاح. ووقوعه بعد الفترة لا ينهي مسؤولية المراجع قبل تاريخ التقرير (أ)، والانسحاب (د) غير لازم.",
    standardTag: "ISA 560",
    area: "auditing",
    difficulty: 3,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-09",
    stem: "Where the external auditor uses the work of INTERNAL AUDITORS, ISA 610 distinguishes between using their WORK and using them to provide DIRECT ASSISTANCE. Which statement is TRUE?",
    stemAr: "حين يستعين المراجع الخارجي بأعمال مراجعين داخليين، يفرق ISA 610 بين الاستفادة من أعمالهم واستخدامهم للمساعدة المباشرة. أي العبارات صحيح؟",
    options: [
      "Direct assistance may be used without evaluating the internal audit function at all",
      "The external auditor must evaluate the internal audit function and apply procedures to its work before relying on it, and direct assistance additionally requires safeguards against threats to internal-auditor objectivity",
      "Internal auditors may independently perform judgement-heavy procedures such as evaluating accounting estimates",
      "Using internal audit work eliminates the need for any substantive procedures",
    ],
    optionsAr: [
      "يجوز استخدام المساعدة المباشرة دون تقييم وظيفة المراجعة الداخلية إطلاقًا",
      "يجب على المراجع الخارجي تقييم وظيفة المراجعة الداخلية وتطبيق إجراءات على أعمالها قبل الاعتماد عليها، وتستلزم المساعدة المباشرة زيادةً ضوابط لتهديدات موضوعية المراجعين الداخليين",
      "يجوز للمراجعين الداخليين تنفيذ إجراءات كثيفة الحكم — كتقييم التقديرات المحاسبية — باستقلال",
      "الاستفادة من أعمال المراجعة الداخلية تلغي الحاجة إلى أي إجراءات جوهرية",
    ],
    answerIndex: 1,
    explanation:
      "ISA 610 requires evaluating internal audit's objectivity and technical competence plus reperforming or testing samples of its work before placing reliance; direct assistance — where internal auditors perform procedures under the external auditor's direction — requires the same evaluation plus additional safeguards and is limited to less-judgemental procedures. Options A, C and D each overstate what ISA 610 permits.",
    explanationAr:
      "يتطلب ISA 610 تقييم موضوعية المراجعة الداخلية وكفاءتها الفنية وإعادة أداء أو اختبار عينات من أعمالها قبل الاعتماد عليها؛ أما المساعدة المباشرة — تنفيذ المراجعين الداخليين إجراءات بتوجيه المراجع الخارجي — فتستلزم التقييم ذاته مع ضوابط إضافية وتقتصر على إجراءات أقل حكمًا. والخيارات (أ، ج، د) تبالغ جميعًا فيما يسمح به المعيار.",
    standardTag: "ISA 610",
    area: "auditing",
    difficulty: 3,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-10",
    stem: "Which of the following is the strongest indicator that professional skepticism was insufficient during the audit?",
    stemAr: "أي مما يلي أقوى مؤشر على أن الشك المهني كان غير كافٍ أثناء المراجعة؟",
    options: [
      "The auditor accepted management's oral explanation for a variance without any corroborating evidence",
      "The auditor extended sample sizes where internal control deviations were found",
      "The auditor involved an independent valuation expert for a complex fair value estimate",
      "The auditor discussed accounting policy choices with those charged with governance",
    ],
    optionsAr: [
      "قبول المراجع شرحًا شفهيًا من الإدارة لانحراف ما دون أي أدلة مؤيدة",
      "توسيع المراجع أحجام العينات عند اكتشاف انحرافات في الضبط الداخلي",
      "استعانة المراجع بخبير تقييم مستقل لتقدير قيمة عادلة معقد",
      "مناقشة المراجع خيارات السياسات المحاسبية مع أصحاب الحوكمة",
    ],
    answerIndex: 0,
    explanation:
      "Accepting uncorroborated management representations for a variance is the textbook failure of professional skepticism — audit evidence must be independent of the assertion maker where risk is high. Options B, C and D are all examples of skepticism being APPLIED (extending work, involving experts, engaging governance).",
    explanationAr:
      "قبول أقوال الإدارة الشفهية دون أدلة مؤيدة لتفسير انحراف ما هو النموذج المرجعي لغياب الشك المهني — إذ يجب أن يكون الدليل مستقلًا عن صاحب التأكيد حيث تكون المخاطر مرتفعة. أما (ب، ج، د) فأمثلة على تطبيق الشك المهني فعلًا (توسيع الأعمال، الاستعانة بخبراء، إشراك الحوكمة).",
    standardTag: "ISA 200",
    area: "auditing",
    difficulty: 1,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-11",
    stem: "Sphinx Capital, an audit client, asks the firm to value its unlisted subsidiary for a buy-sell agreement between shareholders. Under IESBA rules on management-decision participation, the firm should:",
    stemAr: "تطلب شركة سفينكس كابيتال — عميل مراجعة — من الدار تقييم شركة تابعة غير مُدرجة لاتفاق بيع وشراء بين المساهمين. وفق قواعد IESBA بشأن المشاركة في قرارات الإدارة، ينبغي للدار أن:",
    options: [
      "Accept the valuation if the fees are well below the audit fees",
      "Refuse the engagement, because a valuation that directly determines transaction amounts between shareholders constitutes participation in management decisions",
      "Accept the valuation if a separate team performs it",
      "Accept the valuation and disclose it as a Key Audit Matter",
    ],
    optionsAr: [
      "قبول التقييم إذا كانت الأتعاب أدنى بكثير من أتعاب المراجعة",
      "رفض المهمة، لأن تقييمًا يحدد مباشرةً مبالغ معاملات بين المساهمين يمثل مشاركة في اتخاذ قرارات الإدارة",
      "قبول التقييم إذا نفذه فريق آخر منفصل",
      "قبول التقييم والإفصاح عنه كمسألة مراجعة جوهرية",
    ],
    answerIndex: 1,
    explanation:
      "Performing a valuation whose result directly determines transaction amounts between shareholders is treated under the IESBA Code as assuming a management responsibility and participating in management decisions — prohibited regardless of fee size (A), team separation (C) or disclosure (D). The firm may only provide factual, methodological input that management evaluates and owns.",
    explanationAr:
      "إعداد تقييم تحدد نتيجته مباشرةً مبالغ معاملات بين المساهمين يُعد وفق ميثاق IESBA توليًا لمسؤوليات الإدارة ومشاركةً في قراراتها — وهو محظور بصرف النظر عن حجم الأتعاب (أ) أو فصل الفريق (ج) أو الإفصاح (د). ويجوز للدار فقط تقديم مدخلات واقعية ومنهجية تتولى الإدارة تقييمها وتبنّيها.",
    standardTag: "Ethics",
    area: "auditing",
    difficulty: 3,
    source: "ACCA AAA past paper (adapted)",
  },
  {
    code: "AAA-P1-12",
    stem: "In an audit of a bank, management's model for expected credit losses (ECL) uses a macroeconomic scenario weighting that changed significantly from last year without documentation of the rationale. The auditor's most appropriate action is to:",
    stemAr: "في مراجعة أحد البنوك، غيّرت الإدارة ترجيح السيناريوهات الاقتصادية الكلية في نموذج الخسائر الائتمانية المتوقعة (ECL) تغييرًا كبيرًا عن العام الماضي دون توثيق المسوغ. أنسب إجراء للمراجع:",
    options: [
      "Accept the change, as ECL models are inherently judgemental and management's prerogative",
      "Treat it as a significant risk, evaluate the reasonableness and consistency of the new weighting, involve a specialist if needed, and evaluate the adequacy of disclosure of the estimation uncertainty",
      "Qualify the opinion immediately, because any model change without documentation is a material misstatement",
      "Compare the model only to the prior-year numbers and roll forward the weighting unchanged",
    ],
    optionsAr: [
      "قبول التغيير، فنماذج ECL تقديرية بطبيعتها وحق خالص للإدارة",
      "معاملته كخطر جوهري، وتقييم معقولية الترجيح الجديد واتساقه، والاستعانة بمتخصص عند الحاجة، وتقدير كفاية الإفصاح عن عدم اليقين في التقدير",
      "تحفظ الرأي فورًا، لأن أي تغيير نموذجي دون توثيق تحريف جوهري",
      "مقارنة النموذج بأرقام العام السابق فقط وترحيل الترجيح دون تغيير",
    ],
    answerIndex: 1,
    explanation:
      "An undocumented, significant change to a bank's most judgemental estimate is a significant risk under ISA 315 (Revised): the auditor evaluates the reasonableness and consistency of scenario weightings (with specialist help if needed), tests the data and model, and scrutinizes the disclosure of estimation uncertainty under IFRS 9 and IFRS 7. Blanket acceptance (A) is a skepticism failure; immediate qualification (C) presumes a misstatement before evidence is gathered; rolling forward unchanged (D) ignores the actual current model.",
    explanationAr:
      "التغيير الجوهري غير الموثق في أكثر تقديرات البنك حكمًا خطر جوهري وفق ISA 315 (المعدّل): يقيّم المراجع معقولية ترجيح السيناريوهات واتساقه (بمتخصص عند اللزوم)، ويختبر البيانات والنموذج، ويدقق الإفصاح عن عدم اليقين التقديري وفق IFRS 9 وIFRS 7. أما القبول المطلق (أ) فإخفاق في الشك المهني، والتحفظ الفوري (ج) يفترض تحريفًا قبل جمع الأدلة، والترحيل دون تغيير (د) يتجاهل النموذج الفعلي الحالي.",
    standardTag: "ISA 540",
    area: "auditing",
    difficulty: 3,
    source: "ACCA AAA past paper (adapted)",
  },
]
