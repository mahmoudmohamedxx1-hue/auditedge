import { qs, type RawBankQ, type ArQ } from "../v20/seed-types"

/** v21 — IFRS 18 question bank (12 items, tag "IFRS 18", area "accounting",
 *  difficulty mix 1-3, codes IFRS18-01..12; three true/false items and three
 *  short-scenario stems). RawBankQ carries no Arabic fields (v20 authoring
 *  type), so the Arabic variants live in AR_IFRS18 keyed by question code —
 *  the AR_BANK pattern from v20/bank-ar.ts, applied idempotently by the
 *  v21 runner (apply-ifrs18.ts). */

const items: RawBankQ[] = [
  {
    code: "IFRS18-01",
    diff: 1,
    stem: "IFRS 18 changes when income and expenses are recognized and how assets and liabilities are measured.",
    options: [
      "False — it changes presentation and disclosure only; recognition and measurement are untouched",
      "True — it introduces new recognition criteria for the operating category",
    ],
    answer: 0,
    explanation:
      "IFRS 18 is a presentation-and-disclosure standard: totals do not move — where they sit, which subtotals appear and which notes must exist do.",
  },
  {
    code: "IFRS18-02",
    diff: 1,
    stem: "IFRS 18 is effective for annual reporting periods beginning on or after 1 January 2027, and early application is permitted.",
    options: [
      "True — with disclosure when early application is chosen",
      "False — it is effective from 2025, at the same time as IFRS 19's original proposal date",
    ],
    answer: 0,
    explanation:
      "Issued April 2024; mandatory from 1 January 2027 with early application permitted and disclosed. IFRS 19 shares the 2027 effective date.",
  },
  {
    code: "IFRS18-03",
    diff: 1,
    stem: "The three new defined categories for income and expenses in the statement of profit or loss are:",
    options: [
      "Operating, investing and financing",
      "Current, non-current and equity",
      "Recurring, non-recurring and held for sale",
      "Cash, accrual and deferred",
    ],
    answer: 0,
    explanation:
      "The three new categories are completed by income taxes and discontinued operations, which keep their separate presentation below them.",
  },
  {
    code: "IFRS18-04",
    diff: 2,
    stem: "The operating category under IFRS 18 is best described as:",
    options: [
      "The default category: income and expenses from main business activities plus everything not classified in investing or financing",
      "Only items that generate cash inflows",
      "Only revenue-related items",
      "Items presented below operating profit",
    ],
    answer: 0,
    explanation:
      "Residual logic: whatever is not classified as investing or financing lands in operating by default — which is why unmapped accounts default silently there and completeness of the mapping is the audit concern.",
  },
  {
    code: "IFRS18-05",
    diff: 2,
    stem: "Delta Textiles, an unlisted Egyptian exporter, has: (i) an FX loss on USD trade receivables; (ii) interest on EGP working-capital loans; (iii) a share of profit of an equity-accounted associate. Under IFRS 18 these typically sit in:",
    options: [
      "(i) operating; (ii) financing; (iii) investing",
      "(i) financing; (ii) financing; (iii) operating",
      "(i) investing; (ii) operating; (iii) financing",
      "All three in operating",
    ],
    answer: 0,
    explanation:
      "FX on trade receivables arises from operations → operating; borrowing interest → financing; equity-accounted associate returns → investing. Same currency, same period — different categories, because classification follows the underlying item, not the label.",
  },
  {
    code: "IFRS18-06",
    diff: 2,
    stem: "The two new mandatory subtotals in the IFRS 18 statement of profit or loss are:",
    options: [
      "Operating profit or loss; and profit or loss before financing and income taxes",
      "EBITDA and EBIT",
      "Gross profit and operating profit",
      "Profit before tax and total comprehensive income",
    ],
    answer: 0,
    explanation:
      "Two defined, comparable subtotals — operating profit (total of the operating category) and profit before financing and income taxes (operating plus investing). EBIT and EBITDA remain non-IFRS labels.",
  },
  {
    code: "IFRS18-07",
    diff: 2,
    stem: "A group presents operating expenses by function on the face of the income statement. IFRS 18 additionally requires a note disclosing specified expenses by nature, which include:",
    options: [
      "Employee benefits, depreciation and amortisation, impairment losses and inventory write-downs, and raw materials and consumables used",
      "Cost of sales only",
      "Selling and distribution expenses only",
      "Nothing — nature disclosure replaces function presentation",
    ],
    answer: 0,
    explanation:
      "The function-or-nature choice survives on the face, but function presenters must still disclose the specified natural expenses — a new note that cross-checks payroll, the fixed-asset register and the inventory system from a different direction.",
  },
  {
    code: "IFRS18-08",
    diff: 2,
    stem: "Nile Retail is drafting its first IFRS 18 cash flow statement; the finance director wants to keep interest paid within operating activities 'as we always did under our IAS 7 policy choice'. The correct position:",
    options: [
      "The amended IAS 7 removes that choice — for a typical non-financial group, interest paid belongs in financing activities",
      "The policy choice continues unchanged under IFRS 18",
      "Interest paid is now a non-cash item",
      "Interest paid is split evenly between operating and financing",
    ],
    answer: 0,
    explanation:
      "The IAS 7 amendments that travel with IFRS 18 fix the classification for typical non-financial groups (interest and dividends paid → financing; interest and dividends received → investing) and anchor the indirect method to operating profit.",
  },
  {
    code: "IFRS18-09",
    diff: 3,
    stem: "Which of the following is a management-defined performance measure (MPM) under IFRS 18?",
    options: [
      "'Adjusted EBITDA' used in the entity's published investor presentation, disclosed in a single note with a reconciliation to operating profit",
      "Operating profit as defined by IFRS 18",
      "A budget-variance figure used only in board packs and never published",
      "Total assets as reported on the statement of financial position",
    ],
    answer: 0,
    explanation:
      "All three definitional limbs: publicly used, communicates management's view, and not specified by IFRS. IFRS-defined subtotals, unpublished internal metrics and balance-sheet aggregates fall outside the definition.",
  },
  {
    code: "IFRS18-10",
    diff: 3,
    stem: "A group's 'adjusted operating profit' adds back restructuring charges that have recurred in each of the last four years — a different programme every year, an addback every year. The most appropriate audit response:",
    options: [
      "Test the MPM note's reconciliation arithmetic and completeness, and evaluate whether the recurring adjustment signals management bias in the 'why this measure is useful' narrative",
      "Require management to remove the measure entirely",
      "Ignore it — non-IFRS measures sit outside the financial statement audit",
      "Qualify the opinion automatically",
    ],
    answer: 0,
    explanation:
      "The measure may survive (management's view), but the note is now audited FS content: re-perform the bridge, verify tax/NCI effects, test definitional consistency — and read the four-year pattern as a bias indicator.",
  },
  {
    code: "IFRS18-11",
    diff: 3,
    stem: "Under IFRS 19, an eligible subsidiary:",
    options: [
      "Applies full IFRS recognition, measurement and presentation, but with substantially reduced disclosure requirements",
      "May use simplified measurement models for its financial instruments",
      "Is exempt from IFRS altogether and applies the local framework only",
      "Must still produce full IFRS disclosures unless its parent is itself unlisted",
    ],
    answer: 0,
    explanation:
      "Two eligibility limbs — the subsidiary is not publicly accountable (not traded; no fiduciary-holding main business) and the parent/ultimate parent publishes IFRS statements. Relief is disclosure-only; consolidated statements are never eligible.",
  },
  {
    code: "IFRS18-12",
    diff: 3,
    stem: "On transition to IFRS 18, the entity restates comparative information into the new categories and subtotals, and — because recognition and measurement do not change — there is no adjustment to opening retained earnings.",
    options: ["True", "False"],
    answer: 0,
    explanation:
      "IAS 8 retrospective application with reclassification-only effects: numbers move between line items, not into or out of equity. The transition disclosures quantify the reclassifications instead.",
  },
]

export const IFRS18_BANK = qs("IFRS 18", "accounting", items)

/** Arabic variants for all 12 v21 IFRS 18 bank questions (AR_BANK pattern —
 *  keyed by question code; applied idempotently by apply-ifrs18.ts). */
export const AR_IFRS18: ArQ[] = [
  {
    code: "IFRS18-01",
    stem: "يغير IFRS 18 توقيت الاعتراف بالإيرادات والمصروفات وقياس الأصول والالتزامات.",
    options: [
      "خطأ — يغير العرض والإفصاح فقط؛ الاعتراف والقياس لم يُمسّا",
      "صحيح — يستحدث معايير اعتراف جديدة لفئة التشغيل",
    ],
    explanation: "IFRS 18 معيار عرض وإفصاح: الإجماليات لا تتغير — إنما مكان الأرقام والمجاميع الجزئية والإفصاحات الواجبة.",
  },
  {
    code: "IFRS18-02",
    stem: "يسري IFRS 18 على الفترات السنوية التي تبدأ في 1 يناير 2027 أو بعدها، والسماح بالتطبيق المبكر.",
    options: [
      "صحيح — مع الإفصاح عند اختيار التطبيق المبكر",
      "خطأ — يسري من 2025 بالتزامن مع تاريخ اقتراح IFRS 19 الأصلي",
    ],
    explanation: "صدر في أبريل 2024؛ والإلزام من 1 يناير 2027 مع سماح مبكر معلن. ويشاركه IFRS 19 تاريخ السريان ذاته.",
  },
  {
    code: "IFRS18-03",
    stem: "الفئات الثلاث الجديدة المعرفة للإيرادات والمصروفات في قائمة الأرباح أو الخسائر هي:",
    options: [
      "التشغيل والاستثمار والتمويل",
      "الجاري وغير الجاري وحقوق الملكية",
      "المتكرر وغير المتكرر ومحتجز للبيع",
      "النقدي والاستحقاقي والمؤجل",
    ],
    explanation: "تكتمل الفئات الثلاث الجديدة بضرائب الدخل والأنشطة المتوقفة اللتين تحتفظان بعرضهما المنفصل أسفلها.",
  },
  {
    code: "IFRS18-04",
    stem: "أفضل وصف لفئة التشغيل بموجب IFRS 18:",
    options: [
      "الفئة الافتراضية: أنشطة المنشأة الرئيسية وكل ما لم يُصنف استثمارًا أو تمويلًا",
      "البنود المولدة للتدفقات الداخلة فقط",
      "بنود الإيراد فقط",
      "البنود المعروضة أسفل ربح التشغيل",
    ],
    explanation: "منطق البقايا: ما لم يُصنف استثمارًا أو تمويلًا يستقر في التشغيل افتراضًا — ولذلك يهم اكتمال خريطة الربط لأن الحسابات غير المربوطة تنزلق إليها بصمت.",
  },
  {
    code: "IFRS18-05",
    stem: "دلتا تيكستايلز، مصدّرة مصرية غير مدرجة، لديها: (1) خسارة عملة على ذمم تصدير بالدولار؛ (2) فوائد قروض تشغيل بالجنيه؛ (3) نصيب من أرباح زميلة بطريقة حقوق الملكية. وفق IFRS 18 تستقر هذه عادة في:",
    options: [
      "(1) التشغيل؛ (2) التمويل؛ (3) الاستثمار",
      "(1) التمويل؛ (2) التمويل؛ (3) التشغيل",
      "(1) الاستثمار؛ (2) التشغيل؛ (3) التمويل",
      "الثلاثة في التشغيل",
    ],
    explanation: "فروق العملة على الذمم التجارية وليدة العمليات؛ وفوائد الاقتراض تمويل؛ وعوائد الزميلة بطريقة حقوق الملكية استثمار. العملة ذاتها والفترة ذاتها — والفئات مختلفة لأن التصنيف يتبع البند الأصلي لا الملصق.",
  },
  {
    code: "IFRS18-06",
    stem: "المجموعان الجزئيان الإلزاميان الجديدان في قائمة الأرباح أو الخسائر بموجب IFRS 18 هما:",
    options: [
      "ربح أو خسارة التشغيل؛ والربح أو الخسارة قبل التمويل وضرائب الدخل",
      "EBITDA وEBIT",
      "إجمالي الربح وربح التشغيل",
      "الربح قبل الضريبة وإجمالي الدخل الشامل",
    ],
    explanation: "مجموعان معرفان قابلان للمقارنة عبر المنشآت — ربح التشغيل (إجمالي فئة التشغيل) والربح قبل التمويل والضرائب (التشغيل مضافًا إليه الاستثمار). وتبقى EBITDA وEBIT ملصقات غير معرفة في IFRS.",
  },
  {
    code: "IFRS18-07",
    stem: "تعرض مجموعة مصروفات التشغيل بالوظيفة على وجه القائمة. يوجب IFRS 18 إضافة ملاحظة بمصروفات محددة بطبيعتها تشمل:",
    options: [
      "مزايا العاملين، والإهلاك والاستنفاد، وخسائر الانخفاض وخفض المخزون، والمواد الخام والمستلزمات المستخدمة",
      "تكلفة المبيعات فقط",
      "المصروفات البيعية والتوزيع فقط",
      "لا شيء — إفصاح الطبيعة يحل محل عرض الوظيفة",
    ],
    explanation: "يبقى خيار الوظيفة أو الطبيعة على وجه القائمة، لكن من يعرض بالوظيفة يظل ملزمًا بإفصاح المصروفات الطبيعية المحددة — ملاحظة جديدة تعاين الرواتب وسجل الأصول الثابتة ونظام المخزون من اتجاه مغاير.",
  },
  {
    code: "IFRS18-08",
    stem: "تُعد «نايل ريتيل» أول قائمة تدفقات لها وفق IFRS 18، ويريد المدير المالي إبقاء الفوائد المدفوعة ضمن الأنشطة التشغيلية «كما كنا نفعل بخيارنا في IAS 7». الموقف الصحيح:",
    options: [
      "IAS 7 المعدّل ألغى ذلك الخيار — وللمجموعة غير المالية النمطية تقع الفوائد المدفوعة في الأنشطة التمويلية",
      "يستمر خيار السياسة دون تغيير بموجب IFRS 18",
      "الفوائد المدفوعة صارت بندًا غير نقدي",
      "تقسم الفوائد المدفوعة مناصفة بين التشغيل والتمويل",
    ],
    explanation: "تعديلات IAS 7 المرافقة لـ IFRS 18 تثبت التصنيف للمجموعات غير المالية النمطية (الفوائد والتوزيعات المدفوعة تمويلًا؛ والمستقبَلة استثمارًا) وترسو بالطريقة غير المباشرة على ربح التشغيل.",
  },
  {
    code: "IFRS18-09",
    stem: "أي مما يلي مقياس أداء معرَّف إداريًا (MPM) بموجب IFRS 18؟",
    options: [
      "«EBITDA المعدلة» المستخدمة في عرض المستثمرين المنشور، مع الإفصاح عنها في ملاحظة واحدة ومطابقتها إلى ربح التشغيل",
      "ربح التشغيل كما يعرّفه IFRS 18",
      "رقم انحراف موازنة يستخدم في أوراق مجلس الإدارة وحده ولا يُنشر",
      "إجمالي الأصول كما يظهر في قائمة المركز المالي",
    ],
    explanation: "أركان التعريف الثلاثة: استخدام علني، وإيصال نظرة الإدارة، وعدم تحديد IFRS له. فالمجاميع المعرّفة في IFRS والمقاييس الداخلية غير المنشورة ومجتمعات الميزانية خارج التعريف.",
  },
  {
    code: "IFRS18-10",
    stem: "تضيف «ربح التشغيل المعدل» لمجموعة تكاليف إعادة هيكلة تكررت في كل من السنوات الأربع الأخيرة — برنامج مختلف كل عام، وإضافة مختلفة كل عام. أنسب استجابة مراجعة:",
    options: [
      "اختبار حسابات مطابقة ملاحظة MPM واكتمالها، وتقدير ما إذا يفصح التكرار عن انحياز إدارة في سردية «لماذا هذا المقياس نافع»",
      "إلزام الإدارة بحذف المقياس كليًا",
      "تجاهله — فالمقاييس غير المبنية على IFRS خارج مراجعة القوائم المالية",
      "التحفظ على الرأي تلقائيًا",
    ],
    explanation: "قد يبقى المقياس (نظرة الإدارة)، لكن الملاحظة صارت محتوى قوائم مراجَعًا: أعد أداء الجسر، وتحقق من أثر الضريبة والأقلية، واختبر اتساق التعريف — واقرأ نمط السنوات الأربع بوصفه مؤشر انحياز.",
  },
  {
    code: "IFRS18-11",
    stem: "بموجب IFRS 19، الشركة التابعة المؤهلة:",
    options: [
      "تطبق IFRS كاملًا في الاعتراف والقياس والعرض، مع تخفيف جوهري لمتطلبات الإفصاح",
      "لها استخدام نماذج قياس مبسطة لأدواتها المالية",
      "معفاة من IFRS كليًا وتطبق الإطار المحلي وحده",
      "تلزمها الإفصاحات الكاملة إلا إذا كانت أمها ذاتها غير مدرجة",
    ],
    explanation: "شعبتا الأهلية: لا مسؤولية جمهورية على التابعة (لا تداول لأدواتها، ولا نشاط رئيسي لاحتفاظ بالأصول بالوكالة)، وأم أو أم نهائية تنشر قوائم IFRS. والتخفيف إفصاحي فحسب؛ والقوائم الموحدة لا تكون مؤهلة أبدًا.",
  },
  {
    code: "IFRS18-12",
    stem: "عند الانتقال إلى IFRS 18 تعاد صياغة أرقام المقارنة وفق الفئات والمجاميع الجديدة، ولا يوجد — لعدم تغير الاعتراف والقياس — تعديل على الأرباح المرحلة الافتتاحية.",
    options: ["صحيح", "خطأ"],
    explanation: "تطبيق بأثر رجعي عبر آلية IAS 8 ذو آثار إعادة تصنيف فحسب: الأرقام تتحرك بين البنود لا إلى حقوق الملكية أو منها. وإفصاحات الانتقال هي التي تُظهر عمليات إعادة التصنيف كميًا.",
  },
]
