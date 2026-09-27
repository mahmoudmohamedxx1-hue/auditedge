/** v22 seed data — previous-exam papers (IFRS reporting): ACCA FR-style and
 *  ACCA SBR-style adapted papers. Bilingual EN/AR, past-paper MCQs.
 *  Sources: "ACCA FR past paper (adapted)" / "ACCA SBR past paper (adapted)". */

import type { PastPaperSeedQ } from "./bank-past-papers-audit"

/* ============================ ACCA FR paper ============================ */

export const FR_PAPER: PastPaperSeedQ[] = [
  {
    code: "FR-P1-01",
    stem: "On 1 January, Giza Logistics signed a five-year lease for a warehouse. Payments of EGP 500,000 are made annually in arrears, and the incremental borrowing rate is 10%. The initial measurement of the right-of-use asset under IFRS 16 includes:",
    stemAr: "في أول يناير، وقّعت شركة الجيزة للخدمات اللوجستية عقد إيجار خمس سنوات لمخزن. تُدفع دفعات سنوية مقدمةً في نهاية كل سنة بقيمة 500,000 جنيه، ومعدل الاقتراض الحدي 10%. يشمل القياس الأولي لأصل حق الاستخدام وفق IFRS 16:",
    options: [
      "The total of the five undiscounted payments (EGP 2,500,000)",
      "The initial measurement of the lease liability (present value of payments) plus initial direct costs and prepayments",
      "Only the first year's payment, with the rest expensed as incurred",
      "The fair value of the warehouse at commencement",
    ],
    optionsAr: [
      "إجمالي الدفعات الخمس غير المخصومة (2,500,000 جنيه)",
      "القياس الأولي لالتزام الإيجار (القيمة الحالية للدفعات) مضافًا إليه التكاليف المباشرة الأولية والمدفوعات المقدمة",
      "دفعة السنة الأولى فقط، وتحميل الباقي على المصروفات عند حدوثها",
      "القيمة العادلة للمخزن عند بدء العقد",
    ],
    answerIndex: 1,
    explanation:
      "IFRS 16 measures the right-of-use asset at cost: the initial lease liability (present value of unpaid payments, discounted at the rate implicit in the lease or the IBR) plus payments made at or before commencement, initial direct costs and restoration obligations. Undiscounted totals (A) ignore discounting; annual expensing (C) is the old IAS 17 operating-lease treatment; fair value (D) applies in limited re-measurement cases, not initial cost.",
    explanationAr:
      "يقيس IFRS 16 أصل حق الاستخدام بالتكلفة: التزام الإيجار أوليًا (القيمة الحالية للدفعات غير المسددة، مخصومةً بمعدل العقد الضمني أو المعدل الحدي) مضافًا إليه المدفوعات عند بدء العقد أو قبله والتكاليف المباشرة الأولية والتزامات الإعادة لحالة الحال. فالإجمالي غير المخصوم (أ) يتجاهل الخصم، والتحميل السنوي (ج) معالجة IAS 17 القديمة للإيجارات التشغيلية، والقيمة العادلة (د) حالات إعادة قياس محدودة لا القياس الأولي.",
    standardTag: "IFRS 16",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-02",
    stem: "Alexandria Properties revalued a building from EGP 8m (cost) to EGP 12m (fair value). Accumulated depreciation to date was EGP 2m. Under IAS 16, the correct revaluation treatment (no transfer policy under the revaluation model) is:",
    stemAr: "أعادت شركة الإسكندرية العقارية تقييم مبنى من 8 ملايين جنيه (تكلفة) إلى 12 مليون جنيه (قيمة عادلة)، وكان مجمع الإهلاك 2 مليون جنيه. وفق IAS 16، المعالجة الصحيحة لإعادة التقييم (بنموذج إعادة التقييم دون سياسة تحويل) هي:",
    options: [
      "Dr accumulated depreciation EGP 2m; Dr building EGP 4m; Cr revaluation surplus EGP 6m",
      "Dr building EGP 4m; Cr profit or loss EGP 4m",
      "Dr building EGP 4m; Dr accumulated depreciation EGP 2m; Cr revaluation surplus EGP 6m with the credit split between the asset and accumulated depreciation proportionally",
      "Make no entry until the building is sold",
    ],
    optionsAr: [
      "مدين مجمع الإهلاك 2 مليون؛ مدين المبنى 4 ملايين؛ دائن فائض إعادة التقييم 6 ملايين",
      "مدين المبنى 4 ملايين؛ دائن الأرباح أو الخسائر 4 ملايين",
      "إعادة التقييم بإثبات فائض إعادة التقييم في حقوق الملكية (فائض إعادة التقييم 6 ملايين) مع إما إلغاء مجمع الإهلاك أو إعادة تقييمه تناسبيًا مع المبنى",
      "لا قيد محاسبي حتى يباع المبنى",
    ],
    answerIndex: 2,
    explanation:
      "Under the revaluation model, the carrying amount is restated to fair value and the uplift (12m − 6m carrying = 6m) is recognised in other comprehensive income and accumulated in equity as revaluation surplus — never in profit or loss (B). IAS 16 permits two presentation approaches: eliminating accumulated depreciation against cost (gross) or restating it proportionally — both end with the same net carrying amount. No-entry deferral (D) is wrong.",
    explanationAr:
      "بنموذج إعادة التقييم، يُعاد عرض القيمة الدفترية عند القيمة العادلة ويُعترف بالزيادة (12 − 6 = 6 ملايين) في الدخل الشامل الآخر ويُراكم في حقوق الملكية كفائض إعادة تقييم — لا في الأرباح أو الخسائر أبدًا (ب). ويسمح IAS 16 بطريقتي عرض: إلغاء مجمع الإهلاك مقابل التكلفة أو إعادة تقييمه تناسبيًا — وكلتاهما تنتهيان بنفس القيمة الدفترية الصافية. والتأجيل دون قيد (د) خطأ.",
    standardTag: "IAS 16",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-03",
    stem: "A machine's carrying amount is EGP 900,000, fair value less costs of disposal is EGP 700,000, and value in use is EGP 780,000. Under IAS 36, the impairment loss is:",
    stemAr: "القيمة الدفترية لآلة 900,000 جنيه، وقيمتها العادلة ناقصة تكاليف التصرف 700,000 جنيه، وقيمتها الاستخدامية 780,000 جنيه. وفق IAS 36، خسارة الاضمحلال تساوي:",
    options: ["EGP 200,000", "EGP 120,000", "EGP 80,000", "Nil — no impairment is recognized"],
    optionsAr: ["200,000 جنيه", "120,000 جنيه", "80,000 جنيه", "صفر — لا يُعترف باضمحلال"],
    answerIndex: 1,
    explanation:
      "Recoverable amount is the HIGHER of fair value less costs of disposal (700,000) and value in use (780,000) = 780,000. Impairment loss = carrying amount − recoverable amount = 900,000 − 780,000 = 120,000. Choosing the lower figure (A) confuses the definition; EGP 80,000 (C) uses FVLCD as recoverable amount incorrectly.",
    explanationAr:
      "المبلغ القابل للاسترداد هو الأعلى من القيمة العادلة ناقصة تكاليف التصرف (700,000) والقيمة الاستخدامية (780,000) = 780,000. فخسارة الاضمحلال = 900,000 − 780,000 = 120,000 جنيه. واختيار الرقم الأدنى (أ) يخلط في التعريف، و80,000 (ج) يستخدم القيمة العادلة ناقصة التكاليف خطأً كمبلغ قابل للاسترداد.",
    standardTag: "IAS 36",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-04",
    stem: "Sahara Online, an e-commerce platform, sells airline tickets as an AGENT of the airlines. Under IFRS 15, revenue recognized should be:",
    stemAr: "تبيع شركة صحارى أونلاين — منصة تجارة إلكترونية — تذاكر طيران بوصفها وكيلاً عن شركات الطيران. وفق IFRS 15، الإيراد المعترف به يجب أن يكون:",
    options: [
      "The gross ticket price billed to travellers",
      "The commission (net amount retained) only, since the entity is an agent",
      "The gross price in the first year and net thereafter",
      "Either gross or net, based on management's presentation preference",
    ],
    optionsAr: [
      "سعر التذكرة الإجمالي المحصّل من المسافرين",
      "العمولة (المبلغ الصافي المحتفظ به) فقط، لأن المنشأة وكيل",
      "الإجمالي في السنة الأولى والصافي بعد ذلك",
      "الإجمالي أو الصافي وفق تفضيل الإدارة في العرض",
    ],
    answerIndex: 1,
    explanation:
      "An agent does not obtain control of the goods or services before transfer — it recognizes only the fee or commission (net). The gross/net choice is not a presentation preference (D): IFRS 15 requires assessing control indicators (primary responsibility, inventory risk, pricing discretion) which, for an agent, point to net presentation.",
    explanationAr:
      "الوكيل لا يحصل على السيطرة على السلع أو الخدمات قبل تحويلها — فيعترف بالعمولة فقط (صافي). وليس الاختيار بين الإجمالي والصافي تفضيلًا عرضيًا (د): يوجب IFRS 15 تقييم مؤشرات السيطرة (المسؤولية الأساسية، مخاطر المخزون، سلطة التسعير) التي تشير — للوكيل — إلى العرض الصافي.",
    standardTag: "IFRS 15",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-05",
    stem: "Which of the following development expenditure MUST be capitalized under IAS 38 (all criteria met, technical feasibility demonstrated)?",
    stemAr: "أي من نفقات التطوير التالية يجب رسملتها وفق IAS 38 (استوفت جميع المعايير وثبتت الجدوى الفنية)؟",
    options: [
      "Research into new battery chemistry in the laboratory phase",
      "Development of a marketable software product after feasibility confirmation, with intention and ability to complete",
      "Staff training on the new software after go-live",
      "Branding and launch advertising for the product",
    ],
    optionsAr: [
      "البحث في تركيب بطاريات جديدة في مرحلة المعمل",
      "تطوير منتج برمجي قابل للتسويق بعد تأكيد الجدوى، مع النية والقدرة على الإتمام",
      "تدريب الموظفين على البرمجيات الجديدة بعد التشغيل الفعلي",
      "العلامة التجارية وإعلانات إطلاق المنتج",
    ],
    answerIndex: 1,
    explanation:
      "IAS 38 prohibits capitalizing research (A), training (C) and advertising/promotion (D) in all cases. Development expenditure MUST be capitalized when all six criteria are met — technical feasibility, intention, ability, future benefits, availability of resources, measurability — as in (B); expensing it would understate assets.",
    explanationAr:
      "يحظر IAS 38 رسملة البحث (أ) والتدريب (ج) والإعلان والترويج (د) في جميع الأحوال. أما نفقات التطوير فيجب رسملها متى استوفت المعايير الستة كلها — الجدوى الفنية، والنية، والقدرة، والمنافع المستقبلية، وتوافر الموارد، وقابلية القياس — كما في (ب)؛ إذ يقلل تحميلها على المصروفات من الأصول.",
    standardTag: "IAS 38",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-06",
    stem: "Under IFRS 9, a trade receivable with no significant financing component is initially measured and then accounted for under:",
    stemAr: "وفق IFRS 9، الذمم التجارية التي لا تتضمن مكوّن تمويل جوهري تُقاس أوليًا ثم تُعالج وفق:",
    options: [
      "Fair value through profit or loss, subsequently at amortized cost with a 12-month expected credit loss provision",
      "Amortized cost with a lifetime expected credit loss allowance",
      "Fair value through other comprehensive income",
      "Cost with impairment recognized only after default occurs",
    ],
    optionsAr: [
      "القيمة العادلة عبر الأرباح أو الخسائر، ثم بالتكلفة المطفأة مع مخصص خسائر ائتمانية متوقعة لاثني عشر شهرًا",
      "التكلفة المطفأة مع مخصص خسائر ائتمانية متوقعة طوال العمر",
      "القيمة العادلة عبر الدخل الشامل الآخر",
      "التكلفة مع الاعتراف بالاضمحلال بعد التخلف عن السداد فقط",
    ],
    answerIndex: 1,
    explanation:
      "Trade receivables without a significant financing component fall in the 'simplified approach' of IFRS 9: measured at amortized cost, with a loss allowance ALWAYS at lifetime ECL (no staging assessment). The 12-month ECL (A) applies to performing financial assets at amortized cost under the general approach — not to the simplified approach; OCI classification (C) is a debt-instrument election; incurred-loss models (D) are the revoked IAS 39 approach.",
    explanationAr:
      "تتبع الذمم التجارية دون مكوّن تمويل جوهري «المدخل المبسط» في IFRS 9: تُقاس بالتكلفة المطفأة مع مخصص خسائر دائمًا عن الخسائر الائتمانية المتوقعة طوال العمر (دون تقييم مراحل). أما خسائر الاثني عشر شهرًا (أ) فتسري على الأصول المالية السليمة بالتكلفة المطفأة في المدخل العام، والتصنيف في الدخل الشامل الآخر (ج) خيار لأدوات الدين، ونموذج الخسائر المتحققة (د) معالجة IAS 39 الملغاة.",
    standardTag: "IFRS 9",
    area: "accounting",
    difficulty: 3,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-07",
    stem: "Luxor Retail has a policy of refunding customers beyond the legal 14-day period — in practice up to 60 days, advertised as 'no-questions returns'. A present obligation arises under IAS 37 from:",
    stemAr: "تتبع شركة الأقصر للتجزئة سياسة رد أموال العملاء تتجاوز المدة القانونية البالغة 14 يومًا — فتصل عمليًا إلى 60 يومًا وتُعلن كـ«إرجاع بلا أسئلة». ينشأ التزام قائم وفق IAS 37 نتيجة:",
    options: [
      "The legal 14-day rights of customers only",
      "The valid expectation created by the published practice — a constructive obligation covering the 60-day period",
      "Neither, as refund policies never create provisions",
      "Only when a specific customer actually requests a refund",
    ],
    optionsAr: [
      "الحقوق القانونية للعملاء في الـ14 يومًا فقط",
      "التوقع المشروع الذي أوجدته الممارسة المعلنة — التزام تعاقدي/ضمني يغطي فترة الستين يومًا",
      "لا هذا ولا ذاك، فسياسات الاسترداد لا تنشئ مخصصات أبدًا",
      "فقط عند طلب عميل بعينه الاسترداد فعليًا",
    ],
    answerIndex: 1,
    explanation:
      "A constructive obligation arises from an established past practice and communicated policy that creates a valid expectation in counterparties — the advertised 60-day no-questions return is the classic example, so the provision must cover the longer constructive practice, not merely the legal minimum (A). Provisions require a present obligation from a past event; refund policies plainly can create them (C), and waiting for an actual claim (D) ignores the present obligation.",
    explanationAr:
      "ينشأ الالتزام الضمني/النشاطي من ممارسة راسخة وسياسة معلنة تخلق توقعًا مشروعًا لدى المتعاملين — وسياسة الإرجاع «بلا أسئلة» لستين يومًا هي المثال الكلاسيكي، فيجب أن يغطي المخصص الممارسة الأطول لا الحد القانوني الأدنى فقط (أ). والمخصصات تتطلب التزامًا قائمًا من حدث ماضٍ، وسياسات الاسترداد تنشئها قطعًا (ج)، وانتظار مطالبة فعلية (د) يتجاهل الالتزام القائم.",
    standardTag: "IAS 37",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-08",
    stem: "Inventory costing EGP 400,000 can be sold for EGP 520,000 after modification costs of EGP 90,000 and selling costs of EGP 30,000. Under IAS 2, the closing inventory is carried at:",
    stemAr: "مخزون تكلفتُه 400,000 جنيه يمكن بيعه بمبلغ 520,000 جنيه بعد تكاليف تعديل 90,000 جنيه وتكاليف بيع 30,000 جنيه. وفق IAS 2، يُعرض المخزون الختامي بقيمة:",
    options: ["EGP 400,000 (cost)", "EGP 490,000", "EGP 430,000", "EGP 520,000"],
    optionsAr: ["400,000 جنيه (التكلفة)", "490,000 جنيه", "430,000 جنيه", "520,000 جنيه"],
    answerIndex: 0,
    explanation:
      "Net realizable value = 520,000 − 90,000 − 30,000 = 400,000. Inventory is measured at the LOWER of cost (400,000) and NRV (400,000) — equal here, so EGP 400,000. Option B wrongly deducts only modification costs from selling price; C deducts everything from cost; D is simply the selling price.",
    explanationAr:
      "القيمة البيعية الصافية = 520,000 − 90,000 − 30,000 = 400,000 جنيه. ويُقاس المخزون عند الأدنى من التكلفة (400,000) والقيمة الصافية (400,000) — وهما متساويتان هنا، فالقيمة 400,000 جنيه. والخيار (ب) يخصم تكاليف التعديل فقط من سعر البيع خطأً، و(ج) يخصم كل شيء من التكلفة، و(د) هو سعر البيع مجردًا.",
    standardTag: "IAS 2",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-09",
    stem: "After the reporting period but before authorization, a major customer went into liquidation owing the entity a material receivable that arose before the year end. Under IAS 10, the appropriate treatment is:",
    stemAr: "بعد نهاية الفترة المالية وقبل اعتماد القوائم، أُعسر عميل رئيسي مدينًا للمنشأة بذمة جوهرية نشأت قبل نهاية السنة. وفق IAS 10، المعالجة الواجبة:",
    options: [
      "Disclose only — all post-reporting-date events are non-adjusting",
      "Adjust the financial statements — the liquidation provides evidence of the receivable's condition at the reporting date",
      "Adjust only if the customer is a related party",
      "Ignore the event entirely because it occurred after the reporting date",
    ],
    optionsAr: [
      "الإفصاح فقط — فكل الأحداث اللاحقة غير تعديلية",
      "تعديل القوائم المالية — فالتصفية يقدم دليلًا على حالة الذمة في تاريخ التقرير",
      "التعديل فقط إذا كان العميل طرفًا ذا علاقة",
      "تجاهل الحدث كليًا لوقوعه بعد نهاية الفترة",
    ],
    answerIndex: 1,
    explanation:
      "Events after the reporting date that provide EVIDENCE of conditions existing AT the reporting date are adjusting — the customer's pre-existing distress was present at year end, so the receivable's recoverability must be reassessed (adjust the ECL allowance). Not all post-date events are non-adjusting (A); related-party status is irrelevant (C); complete ignorance (D) breaches IAS 10's disclosure minimum.",
    explanationAr:
      "الأحداث اللاحقة لتاريخ التقرير التي تقدم دليلًا على ظروف قائمة في تاريخ التقرير ذاته أحداث تعديلية — فضائقة العميل كانت قائمة قبل نهاية السنة، فيجب إعادة تقييم قابلية تحصيل الذمة (تعديل مخصص الخسائر الائتمانية). وليست كل الأحداث اللاحقة غير تعديلية (أ)، وصفة الطرف ذي العلاقة غير ذات صلة (ج)، والتجاهل التام (د) يخالف الحد الأدنى من الإفصاح في IAS 10.",
    standardTag: "IAS 10",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-10",
    stem: "Under IFRS 10, which indicator ALONE is sufficient to establish control of an investee?",
    stemAr: "وفق IFRS 10، أي مؤشر يكفي وحده لإثبات السيطرة على شركة مستثمَر فيها؟",
    options: [
      "Holding more than 50% of the voting rights",
      "Exposure to variable returns and power over those returns, with the ability to use that power to affect the returns, existing in combination",
      "Board representation plus significant influence over operating policy",
      "Being the largest shareholder with day-to-day management involvement",
    ],
    optionsAr: [
      "حيازة أكثر من 50% من حقوق التصويت",
      "التعرض لعوائد متغيرة مع السلطة على تلك العوائد، والقدرة على استخدام السلطة للتأثير في العوائد، مجتمعةً",
      "تمثيل مجلس الإدارة مع تأثير هام على السياسة التشغيلية",
      "أن تكون أكبر مسهم مع مشاركة في الإدارة اليومية",
    ],
    answerIndex: 1,
    explanation:
      "IFRS 10's control definition requires ALL THREE elements in combination: power, exposure to variable returns, and the ability to use power to affect those returns. Majority voting (A) is only a presumption rebuttable by contractual arrangements (e.g., outvoted by substantive potential voting rights); (C) and (D) describe significant influence, which is associates territory under IAS 28.",
    explanationAr:
      "تعريف السيطرة في IFRS 10 يتطلب العناصر الثلاثة مجتمعة: السلطة، والتعرض لعوائد متغيرة، والقدرة على استخدام السلطة للتأثير في تلك العوائد. وأغلبية التصويت (أ) قرينة قابلة للنقض بترتيبات تعاقدية (كأن يُقهر المراجع بحقوق تصويت كامنة جوهرية)، و(ج) و(د) يصفان التأثير الهام وهو نطاق الشركات الزميلة وفق IAS 28.",
    standardTag: "IFRS 10",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-11",
    stem: "Mansoura Motors recognized a provision for warranty costs of EGP 2m. For tax purposes, warranty costs are deductible only when actually incurred. Under IAS 12, this creates:",
    stemAr: "كوّنت شركة المنصورة للسيارات مخصصًا لتكاليف الضمان بمبلغ 2 مليون جنيه. ولأغراض ضريبية، لا تُخصم تكاليف الضمان إلا عند تحققها فعليًا. وفق IAS 12، ينشأ عن ذلك:",
    options: [
      "A taxable temporary difference and a deferred tax liability",
      "A deductible temporary difference and a deferred tax asset (subject to recoverability)",
      "A permanent difference with no deferred tax",
      "A deferred tax liability only if the warranty exceeds five years",
    ],
    optionsAr: [
      "فرق مؤقت خاضع للضريبة والتزام ضريبي مؤجل",
      "فرق مؤقت قابل للخصم وأصل ضريبي مؤجل (بشرط قابلية الاسترداد)",
      "فرق دائم دون ضريبة مؤجلة",
      "التزام ضريبي مؤجل فقط إذا تجاوز الضمان خمس سنوات",
    ],
    answerIndex: 1,
    explanation:
      "The provision's carrying amount (2m) is less than its tax base (nil, since nothing is deductible yet): carrying amount < tax base creates a deductible temporary difference, giving a deferred tax asset to the extent future taxable profits are probable. A taxable difference (A) reverses the logic; the timing (not permanence) nature makes (C) wrong; the five-year idea (D) is invented.",
    explanationAr:
      "القيمة الدفترية للمخصص (2 مليون) تقل عن أساسه الضريبي (صفر، إذ لا يُخصم شيء بعد): فالقيمة الدفترية < الأساس الضريبي ينشئ فرقًا مؤقتًا قابلًا للخصم، وأصلًا ضريبيًا مؤجلًا بالقدر المرجح توافر أرباح ضريبية مستقبلية. والفرق الخاضع (أ) يعكس المنطق، وطبيعة الفرق «توقيتية» لا دائمة فالخيار (ج) خطأ، وفكرة السنوات الخمس (د) مختلقة.",
    standardTag: "IAS 12",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-12",
    stem: "Actuarial gains and losses on a DEFINED BENEFIT pension plan under IAS 19 are:",
    stemAr: "المكاسب والخسائر الاكتوارية على نظام مزايا محددة وفق IAS 19 تُعالج:",
    options: [
      "Recognized in profit or loss in full as they occur",
      "Recognized in other comprehensive income with no subsequent recycling to profit or loss",
      "Deferred and amortized over employees' remaining service lives",
      "Recognized directly in retained earnings through equity movement only",
    ],
    optionsAr: [
      "بالاعتراف بها كاملةً في الأرباح أو الخسائر عند حدوثها",
      "بالاعتراف بها في الدخل الشامل الآخر دون إعادة تدوير لاحقة إلى الأرباح أو الخسائر",
      "بتأجيلها وإطفائها على مدى الخدمة المتبقية للموظفين",
      "بالاعتراف بها مباشرةً في الأرباح المحتجزة عبر حركة حقوق الملكية فقط",
    ],
    answerIndex: 1,
    explanation:
      "IAS 19 (2011) requires the remeasurement component of defined benefit cost — actuarial gains and losses — to be recognized in OTHER COMPREHENSIVE INCOME and never reclassified (recycled) to profit or loss in later periods. Full P&L recognition (A) was never the model; corridor amortization (C) was eliminated by the 2011 revision.",
    explanationAr:
      "يتطلب IAS 19 (المعدل 2011) الاعتراف بمكوّن إعادة القياس لتكلفة المزايا المحددة — المكاسب والخسائر الاكتوارية — في الدخل الشامل الآخر دون إعادة تصنيفه (تدويره) إلى الأرباح أو الخسائر في الفترات اللاحقة. فالاعتراف الكامل في الأرباح (أ) لم يكن النموذج قط، وإطفاء الممر (ج) ألغاه تعديل 2011.",
    standardTag: "IAS 19",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
]

/* =========================== ACCA SBR paper =========================== */

export const SBR_PAPER: PastPaperSeedQ[] = [
  {
    code: "SBR-P1-01",
    stem: "Parent P acquires 80% of S for cash of EGP 9m. Fair value of the identifiable net assets at acquisition is EGP 10m, and the non-controlling interest is measured at fair value of EGP 2.2m. Goodwill under IFRS 3 is:",
    stemAr: "استحوذت الشركة الأم (P) على 80% من الشركة (S) مقابل نقدية 9 ملايين جنيه. القيمة العادلة لصافي الأصول القابلة للتحديد عند الاستحواذ 10 ملايين جنيه، وقيمة الحصة غير المسيطرة مقومة بالقيمة العادلة 2.2 مليون جنيه. الشهرة وفق IFRS 3 تساوي:",
    options: ["EGP 1.0m", "EGP 1.2m", "EGP 3.0m", "EGP 0.8m"],
    optionsAr: ["1.0 مليون جنيه", "1.2 مليون جنيه", "3.0 ملايين جنيه", "0.8 مليون جنيه"],
    answerIndex: 1,
    explanation:
      "Goodwill = consideration transferred (9.0) + NCI at fair value (2.2) − fair value of identifiable net assets acquired (10.0) = 1.2m. Option A omits the NCI; C misstates the formula's direction; D applies the old IFRS 3 (2004) partial-goodwill arithmetic (80% of the excess).",
    explanationAr:
      "الشهرة = المقابل المحوَّل (9.0) + الحصة غير المسيطرة بالقيمة العادلة (2.2) − القيمة العادلة لصافي الأصول القابلة للتحديد (10.0) = 1.2 مليون. والخيار (أ) يغفل الحصة غير المسيطرة، و(ج) يعكس معادلة الحساب، و(د) يطبق حسابات شهرة الجزء القديمة في IFRS 2004 (80% من الفرق).",
    standardTag: "IFRS 3",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-02",
    stem: "During the year, Parent P sold goods to subsidiary S (80%-owned) at a mark-up of 25% on cost. EGP 400,000 (at transfer price) of these goods remain in S's closing inventory. The unrealized profit to eliminate on consolidation is:",
    stemAr: "خلال السنة، باعت الشركة الأم (P) بضائع لشركتها التابعة (S) المملوكة بنسبة 80% بهامش 25% على التكلفة. بقي من هذه البضائع في مخزون (S) الختامي ما قيمته 400,000 جنيه (بسعر التحويل). الربح غير المتحقق الواجب استبعاده عند التجميع:",
    options: ["EGP 100,000", "EGP 80,000", "EGP 320,000", "EGP 64,000"],
    optionsAr: ["100,000 جنيه", "80,000 جنيه", "320,000 جنيه", "64,000 جنيه"],
    answerIndex: 1,
    explanation:
      "With a 25% mark-up ON COST, the transfer price is 125% of cost: unrealized profit = price × 25/125 = 400,000 × 0.2 = 80,000. The FULL unrealized profit is eliminated against the selling group (100% regardless of ownership — B), not 80% (D); 100,000 (A) wrongly applies 25% directly to the price.",
    explanationAr:
      "بهامش 25% على التكلفة، يكون سعر التحويل 125% من التكلفة: فالربح غير المتحقق = السعر × 25/125 = 400,000 × 0.2 = 80,000 جنيه. ويُستبعد كامل الربح غير المتحقق من المجموعة البائعة (100% بصرف النظر عن نسبة الملكية — ب)، لا 80% (د)، و100,000 (أ) يطبق 25% على السعر مباشرةً خطأً.",
    standardTag: "IFRS 10",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-03",
    stem: "Under IFRS 9 hedge accounting, for a CASH FLOW hedge of a forecast commodity purchase with the highly effective designation, the effective portion of the gain or loss on the hedging instrument is initially recognized in:",
    stemAr: "وفق محاسبة التحوّط في IFRS 9، في تحوّط التدفقات النقدية لشراء سلع متوقع بتعيين عالي الفاعلية، يُعترف بالجزء الفعال من مكسب أو خسارة أداة التحوّط أوليًا في:",
    options: [
      "Profit or loss immediately",
      "Other comprehensive income (cash flow reserve), recycled to profit or loss when the hedged item affects profit or loss",
      "Equity directly with no recycling ever",
      "A separate 'hedging reserve' outside the statement of financial position",
    ],
    optionsAr: [
      "الأرباح أو الخسائر فورًا",
      "الدخل الشامل الآخر (احتياطي التدفقات النقدية)، ويُعاد تدويره إلى الأرباح أو الخسائر عندما يؤثر البند المتحوَّط فيه على الأرباح أو الخسائر",
      "حقوق الملكية مباشرةً دون إعادة تدوير أبدًا",
      "«احتياطي تحوّط» منفصل خارج قائمة المركز المالي",
    ],
    answerIndex: 1,
    explanation:
      "The effective portion of a cash flow hedge goes to the cash flow hedge reserve in OCI, and is reclassified to profit or loss in the same period the hedged item affects profit or loss (e.g., when the purchased commodity is consumed). Immediate P&L (A) applies to the ineffective portion; no-recycling equity (D) describes remeasurements like the own-use building election, not cash flow hedges; (D) also invents an off-balance-sheet reserve.",
    explanationAr:
      "الجزء الفعال من تحوّط التدفقات النقدية يذهب إلى احتياطي تحوّط التدفقات في الدخل الشامل الآخر، ويُعاد تصنيفه إلى الأرباح أو الخسائر في نفس الفترة التي يؤثر فيها البند المتحوَّط فيه على الأرباح (كموعد استهلاك السلعة المشتراة). والاعتراف الفوري في الأرباح (أ) يخص الجزء غير الفعال، ومنع إعادة التدوير (ج) يوصف إعادة قياسات أخرى، و(د) يخترع احتياطيًا خارج الميزانية.",
    standardTag: "IFRS 9",
    area: "accounting",
    difficulty: 3,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-04",
    stem: "In a business combination, the fair value of net assets acquired exceeds the consideration transferred plus NCI (bargain purchase). Under IFRS 3, the acquirer should:",
    stemAr: "في اتحاد تجاري، تتجاوز القيمة العادلة لصافي الأصول المكتسبة المقابل المحوَّل مضافًا إليه الحصة غير المسيطرة (شراء بالمفايدة). وفق IFRS 3، على المستحوذ أن:",
    options: [
      "Recognize the excess as negative goodwill in equity immediately, with no re-assessment",
      "Reassess the identification and measurement of assets, liabilities and consideration; after correcting any errors, recognize any remaining excess as a gain in profit or loss on the acquisition date",
      "Recognize the excess as deferred income amortized over ten years",
      "Reduce the fair values of identifiable intangible assets until the excess disappears",
    ],
    optionsAr: [
      "الاعتراف بالزيادة كشهرة سالبة في حقوق الملكية فورًا دون إعادة تقييم",
      "إعادة تقييم تحديد وقياس الأصول والالتزامات والمقابل، وبعد تصحيح أي أخطاء الاعتراف بأي زيادة متبقية كمكسب في الأرباح أو الخسائر بتاريخ الاستحواذ",
      "الاعتراف بالزيادة كإيراد مؤجل يُطفأ على عشر سنوات",
      "خفض القيم العادلة للأصول غير الملموسة القابلة للتحديد حتى تختفي الزيادة",
    ],
    answerIndex: 1,
    explanation:
      "IFRS 3 mandates a reassessment of the acquisition-date measurements first; a genuine bargain purchase that survives the reassessment is recognized as a gain in P&L on the acquisition date (typically a forced sale by a distressed seller). Equity treatment (A) was the old standard; deferred income (C) is prohibited; arbitrary write-downs (D) would misstate the assets.",
    explanationAr:
      "يوجب IFRS 3 إعادة تقييم قياسات تاريخ الاستحواذ أولًا؛ فإذا بقي شراء بالمفايدة حقيقي بعد إعادة التقييم يُعترف به مكسبًا في الأرباح أو الخسائر بتاريخ الاستحواذ (كبيع مُجبر من بائع متعثر عادةً). والمعالجة في حقوق الملكية (أ) كانت المعيار القديم، والإيراد المؤجل (ج) محظور، والخفض التعسفي (د) يشوه قياس الأصول.",
    standardTag: "IFRS 3",
    area: "accounting",
    difficulty: 3,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-05",
    stem: "On consolidation, a subsidiary's assets are fair-valued upward, but its individual tax accounts recognize no deferred tax on that uplift. Under IAS 12 consolidated adjustments:",
    stemAr: "عند التجميع، تُعاد قيم أصول الشركة التابعة إلى القيمة العادلة بزيادة، بينما لا تعترف حساباتها الضريبية الفردية بضريبة مؤجلة على هذه الزيادة. وفق تعديلات التجميع في IAS 12:",
    options: [
      "No deferred tax arises, because the subsidiary's own books are unchanged",
      "Deferred tax liability on the fair value uplift must be recognized, reducing the consolidated net assets and increasing goodwill",
      "Deferred tax asset arises from the future tax deductions on the uplift",
      "The uplift is reversed to eliminate the deferred tax effect",
    ],
    optionsAr: [
      "لا تنشأ ضريبة مؤجلة، لأن دفاتر التابعة الفردية لم تتغير",
      "يجب الاعتراف بالتزام ضريبي مؤجل على زيادة إعادة التقييم، بما يخفض صافي أصول المجموعة ويرفع الشهرة",
      "ينشأ أصل ضريبي مؤجل من الخصومات الضريبية المستقبلية على الزيادة",
      "تُلغى الزيادة لإزالة أثر الضريبة المؤجلة",
    ],
    answerIndex: 1,
    explanation:
      "The consolidated entity takes over the subsidiary's assets at fair value while the tax base stays at the subsidiary's historical carrying amounts — creating taxable temporary differences that require deferred tax liabilities in the consolidated accounts. This reduces the fair value of net assets at acquisition and therefore increases goodwill (as the deduction is made before computing the excess).",
    explanationAr:
      "تتسلم المنشأة المجمعة أصول التابعة بالقيمة العادلة بينما يبقى الأساس الضريبي على القيم الدفترية التاريخية للتابعة — فتنشأ فروق مؤقتة خاضعة تستوجب التزامات ضريبية مؤجلة في القوائم المجمعة، بما يخفض القيمة العادلة لصافي الأصول عند الاستحواذ ومن ثم يرفع الشهرة (إذ يُخصم الفارق قبل احتساب الزيادة).",
    standardTag: "IAS 12",
    area: "accounting",
    difficulty: 3,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-06",
    stem: "Under IFRS 15, when a contract contains a variable consideration (rebate linked to annual purchase volume), the transaction price initially includes:",
    stemAr: "وفق IFRS 15، حين يتضمن العقد مقابلًا متغيرًا (خصمًا مرتبطًا بحجم الشراء السنوي)، يشمل سعر المعاملة أوليًا:",
    options: [
      "The full invoice value, with rebates expensed as paid",
      "The variable amount only to the extent it is highly probable that a significant reversal will NOT occur when the uncertainty resolves",
      "None of the variable consideration until volume targets are certain",
      "The expected value method's full amount regardless of reversal risk",
    ],
    optionsAr: [
      "قيمة الفاتورة كاملةً، وتحميل الخصومات على المصروفات عند سدادها",
      "المبلغ المتغير بالقدر المرجح جدًا عدم حدوث انعكاس جوهري عند زوال عدم اليقين",
      "لا شيء من المقابل المتغير حتى تتحقق مستهدفات الحجم",
      "كامل المبلغ وفق أسلوب القيمة المتوقعة بصرف النظر عن خطر الانعكاس",
    ],
    answerIndex: 1,
    explanation:
      "Variable consideration is estimated (expected value or most likely amount) and included only up to the amount highly probable not to reverse significantly — the constraint protects profit from recognizing revenue that later unwinds. Options A, C and D ignore, over-restrict or bypass the constraint respectively.",
    explanationAr:
      "يُقدَّر المقابل المتغير (بالقيمة المتوقعة أو المبلغ الأرجح) ويُدرج بالقدر المرجح جدًا عدم انعكاسه جوهريًا — فالقيد يحمي الربح من الاعتراف بإيراد ينقلب لاحقًا. والخيارات (أ، ج، د) تتجاهل القيد أو تقيّده زيادةً أو تتجاوزه.",
    standardTag: "IFRS 15",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-07",
    stem: "Seller-lessee Delta transfers a building to Buyer-lessor for EGP 10m (fair value) and leases it back for 10 years at EGP 1m per year, while the building's carrying amount was EGP 7m. Under the IFRS 16 sale and leaseback requirements (transfer qualifying as a sale), the seller-lessee should:",
    stemAr: "تنقل المؤجِرة-المستأجرة دلتا مبنى إلى المشتري-المؤجر مقابل 10 ملايين جنيه (القيمة العادلة) وتعيد استئجاره عشر سنوات بمليون جنيه سنويًا، وكانت القيمة الدفترية للمبنى 7 ملايين. وفق متطلبات البيع وإعادة الإيجار في IFRS 16 (ناقلًا بيعًا)، على البائعة-المستأجرة أن:",
    options: [
      "Recognize the full EGP 3m gain in profit or loss immediately",
      "Recognize gain only to the extent of the rights transferred, measuring the leaseback at the proportion of the previous carrying amount retained, and recognize the rest as a right-of-use asset",
      "Defer the entire gain and amortize it over the lease term",
      "Recognize no gain because the asset remains in use by the seller",
    ],
    optionsAr: [
      "الاعتراف بكامل الربح (3 ملايين) في الأرباح أو الخسائر فورًا",
      "الاعتراف بالربح بالقدر المقابل للحقوق المنقولة فقط، بقياس إعادة الإيجار كنسبة من القيمة الدفترية السابقة المحتفظ بها، واعتبار الباقي أصل حق استخدام",
      "تأجيل الربح كله وإطفاؤه على مدى عقد الإيجار",
      "عدم الاعتراف بأي ربح لبقاء الأصل مستخدمًا من البائع",
    ],
    answerIndex: 1,
    explanation:
      "When the transfer qualifies as a sale, the seller-lessee derecognizes the asset and recognizes a right-of-use asset at the proportion of the PREVIOUS carrying amount that relates to the rights retained; gain recognized = total gain × (rights transferred / total rights). Full immediate gain (A) overstates; deferral-amortization (C) and no-gain (D) misapply the model.",
    explanationAr:
      "حين يُعد النقل بيعًا، تشطب البائعة-المستأجرة الأصل وتعترف بأصل حق استخدام بنسبة القيمة الدفترية السابقة المتعلقة بالحقوق المحتفظ بها؛ والربح المعترف به = إجمالي الربح × (الحقوق المنقولة ÷ إجمالي الحقوق). فالاعتراف الكامل الفوري (أ) مبالغة، والتأجيل والإطفاء (ج) وعدم الاعتراف (د) تطبيق خاطئ للنموذج.",
    standardTag: "IFRS 16",
    area: "accounting",
    difficulty: 3,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-08",
    stem: "An impairment loss recognized three years ago on a piece of equipment (no change in use) has now reversed because recoverable amount rose. Under IAS 36, reversal of the impairment:",
    stemAr: "خسارة اضمحلال اعتُرف بها قبل ثلاث سنوات على معدات (دون تغيير في الاستخدام) انعكست الآن لارتفاع المبلغ القابل للاسترداد. وفق IAS 36، انعكاس الاضمحلال:",
    options: [
      "Is prohibited for all assets once impaired",
      "Is allowed up to the carrying amount that would have existed (net of depreciation) had no impairment occurred, with the reversal recognized in profit or loss",
      "Is allowed without limit, credited directly to revaluation surplus",
      "Requires restating the prior-period financial statements",
    ],
    optionsAr: [
      "محظور لجميع الأصول بعد الاضمحلال",
      "جائز حتى القيمة الدفترية التي كانت ستوجد (بعد خصم الإهلاك) لو لم يقع اضمحلال، ويُعترف بالانعكاس في الأرباح أو الخسائر",
      "جائز بلا حد، ويُقيَّد مباشرةً في فائض إعادة التقييم",
      "يتطلب إعادة عرض قوائم الفترة السابقة",
    ],
    answerIndex: 1,
    explanation:
      "Reversals are permitted for assets other than goodwill, capped at the depreciated carrying amount that would have applied absent the impairment, and taken to profit or loss (or OCI for revalued assets, per IAS 16). Prohibition (A) applies only to goodwill; unlimited OCI credit (C) breaches the cap; reversals are current-period events, not restatements (D).",
    explanationAr:
      "يُسمح بانعكاس الاضمحلال لجميع الأصول عدا الشهرة، بحد أقصى القيمة الدفترية بعد الإهلاك التي كانت ستطبق لولا الاضمحلال، ويُحمَّل على الأرباح أو الخسائر (أو الدخل الشامل الآخر للأصول المعاد تقييمها وفق IAS 16). والحظر (أ) يخص الشهرة وحدها، والقيود بلا حد (ج) تخالف السقف، والانعكاس حدث للفترة الجارية لا إعادة عرض (د).",
    standardTag: "IAS 36",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-09",
    stem: "Under IFRS 13, which valuation input is classified as LEVEL 2 in the fair value hierarchy?",
    stemAr: "وفق IFRS 13، أي مدخلات تقييم تصنف ضمن المستوى الثاني في التسلسل الهرمي للقيمة العادلة؟",
    options: [
      "Quoted prices in active markets for identical assets",
      "Observable inputs other than quoted prices — such as quoted prices for similar assets in active markets, or observable rates and spreads",
      "Unobservable entity-developed cash flow forecasts",
      "Historical cost less accumulated depreciation",
    ],
    optionsAr: [
      "الأسعار المقتبسة في أسواق نشطة لأصول مطابقة",
      "مدخلات قابلة للملاحظة غير الأسعار المقتبسة — كأسعار مقتبسة لأصول مماثلة في أسواق نشطة، أو معدلات وفروقات قابلة للملاحظة",
      "توقعات تدفقات نقدية طورت المنشأة بنفسها وغير قابلة للملاحظة",
      "التكلفة التاريخية ناقص مجمع الإهلاك",
    ],
    answerIndex: 1,
    explanation:
      "Level 1 = quoted prices for identical items in active markets (A). Level 2 = other observable inputs, including prices for SIMILAR items and market-corroborated inputs (B). Level 3 = unobservable inputs (C). Historical cost (D) is not a fair value measurement at all.",
    explanationAr:
      "المستوى الأول = أسعار مقتبسة لبنود مطابقة في أسواق نشطة (أ). والمستوى الثاني = مدخلات أخرى قابلة للملاحظة، ومنها أسعار بنود مماثلة ومدخلات مؤكدة من السوق (ب). والمستوى الثالث = مدخلات غير قابلة للملاحظة (ج). والتكلفة التاريخية (د) ليست قياس قيمة عادلة أصلًا.",
    standardTag: "IFRS 13",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-10",
    stem: "A first-time adopter of IFRS (IFRS 1) prepares its opening IFRS statement of financial position. Which statement is TRUE about the standard's general approach?",
    stemAr: "معِدّ للتبني الأول للمعايير الدولية (IFRS 1) يعد قائمة مركز مالي افتتاحية دولية. أي عبارة صحيحة بشأن المدخل العام للمعيار؟",
    options: [
      "Retrospective application of all IFRS with limited exemptions and practical expedients, starting from the earliest period presented",
      "Prospective application from the transition date with no restatement",
      "Fair-valuing all assets and liabilities on the transition date as a fresh start",
      "Adoption only after three years of dual reporting in both frameworks",
    ],
    optionsAr: [
      "تطبيق رجعي لجميع المعايير الدولية مع إعفاءات محدودة ومسارات عملية، انطلاقًا من أقدم فترة معروضة",
      "تطبيق مستقبلي من تاريخ التحول دون إعادة عرض",
      "إعادة تقييم كل الأصول والالتزامات بالقيمة العادلة في تاريخ التحول كبداية جديدة",
      "التبني فقط بعد ثلاث سنوات من التقارير المزدوجة في الإطارين",
    ],
    answerIndex: 0,
    explanation:
      "IFRS 1's baseline is full retrospective application — as if the entity had always applied IFRS — subject to specific optional exemptions (e.g., business combinations relief, deemed cost) and mandatory exceptions. Prospective-only (B) and fresh-start fair valuing (C) contradict the standard; dual reporting periods (D) are not a requirement.",
    explanationAr:
      "خط الأساس في IFRS 1 هو التطبيق الرجعي الكامل — كأن المنشأة كانت تطبق المعايير الدولية دائمًا — مع إعفاءات اختيارية محددة (كتخفيف اتحادات الأعمال والتكلفة المفترضة) واستثناءات وجوبية. فالتطبيق المستقبلي فقط (ب) وإعادة التقييم الشاملة (ج) تخالفان المعيار، وفترات التقارير المزدوجة (د) ليست شرطًا.",
    standardTag: "IFRS 1",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-11",
    stem: "IFRS 18 'Presentation and Disclosure in Financial Statements' (replacing IAS 1) introduces which MAJOR income-statement change for adopters?",
    stemAr: "يُدخل معيار IFRS 18 «العرض والإفصاح في القوائم المالية» (البديل عن IAS 1) أي تغيير رئيسي في قائمة الدخل للمطبِّقين؟",
    options: [
      "Removal of OCI as a statement",
      "Defined categories for income and expenses — operating, investing, financing (with specified classification principles) — plus new management-defined performance measures disclosures",
      "Mandatory single-step income statement for all entities",
      "Elimination of the notes to the financial statements",
    ],
    optionsAr: [
      "إلغاء قائمة الدخل الشامل الآخر",
      "فئات محددة للإيرادات والمصروفات — تشغيلية، واستثمارية، وتمويلية (بمبادئ تصنيف محددة) — مع إفصاحات جديدة عن مقاييس الأداء المحددة من الإدارة",
      "قائمة دخل أحادية الخطوة إلزاميةً لجميع المنشآت",
      "إلغاء الإيضاحات المتممة للقوائم المالية",
    ],
    answerIndex: 1,
    explanation:
      "IFRS 18 (effective 2027) restructures the income statement into operating, investing and financing categories with two new subcategories for specified items, tightens aggregation/disaggregation, and requires disclosure of management-defined performance measures (MPMs) in a single note. OCI remains (A is false); the statement format is principles-based, not single-step mandated (C); notes remain (D).",
    explanationAr:
      "يعيد IFRS 18 (الساري من 2027) هيكلة قائمة الدخل إلى فئات تشغيلية واستثمارية وتمويلية مع فئتين فرعيتين محددتين، ويشدّد قواعد التجميع والتفصيل، ويلزم بالإفصاح عن مقاييس الأداء المحددة من الإدارة (MPMs) في إيضاح واحد. ويبقى الدخل الشامل الآخر (أ خطأ)، والشكل مبني على المبادئ لا أحادي الخطأ الإلزامي (ج)، وتبقى الإيضاحات (د).",
    standardTag: "IFRS 18",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-12",
    stem: "Under IAS 21, a monetary receivable denominated in a foreign currency is retranslated at the closing rate, while a non-monetary asset carried at historical cost is translated at:",
    stemAr: "وفق IAS 21، يعاد ترجمة ذمة نقدية مقومة بعملة أجنبية بسعر الإقفال، بينما تُترجم أصول غير نقدية مقومة بالتكلفة التاريخية بسعر:",
    options: [
      "The closing rate, like all assets",
      "The historical rate at the initial transaction date",
      "The average rate for the period",
      "No translation applies — non-monetary items stay in the foreign currency",
    ],
    optionsAr: [
      "سعر الإقفال كجميع الأصول",
      "السعر التاريخي بتاريخ العملية الأولي",
      "المتوسط المرجح للفترة",
      "لا ترجمة — تبقى البنود غير النقدية بالعملة الأجنبية",
    ],
    answerIndex: 1,
    explanation:
      "Non-monetary items measured at historical cost in the foreign currency are translated at the historical rate (they are not retranslated); non-monetary items at FAIR VALUE are translated at the rate on the fair-value measurement date. Closing rate (A) is for monetary items; average rates (C) are a convenience for flows like income; (D) misstates presentation.",
    explanationAr:
      "البنود غير النقدية المقاسة بالتكلفة التاريخية بالعملة الأجنبية تُترجم بالسعر التاريخي (دون إعادة ترجمة)؛ والبنود غير النقدية بالقيمة العادلة تُترجم بسعر تاريخ قياس القيمة العادلة. فسعر الإقفال (أ) للبنود النقدية، والمتوسط (ج) وسيلة تيسير للتدفقات كالإيرادات، و(د) يخالف قواعد العرض.",
    standardTag: "IAS 21",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
]
