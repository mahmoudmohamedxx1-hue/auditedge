import type { QuizQuestion } from "@/lib/audit-types"

/** v21 — IFRS 18 course seed (Presentation & Disclosure in Financial
 *  Statements). Follows the v20 spine authoring shape (isa-spine-1.ts):
 *  one compact course → modules → lessons carrying full content JSON,
 *  closing with a quiz lesson. v21 delta: the course is authored bilingual
 *  from the start — each lesson carries contentAr and each quiz question
 *  carries questionAr/optionsAr/explanationAr inline (the platform renders
 *  both natively; see LessonContent / QuizQuestion in lib/audit-types). */

export type SpineLesson = {
  title: string
  durationMin: number
  content: {
    intro: string
    sections: { heading: string; body: string; bullets?: string[] }[]
    keyPoints: string[]
    example?: { title: string; context: string; analysis: string }
    takeaway: string
  }
  /** Arabic edition of the same content (v21 — authored alongside the EN,
   *  same shape the v20 ar-parity files write into lesson.contentAr). */
  contentAr?: {
    intro: string
    sections: { heading: string; body: string }[]
    keyPoints: string[]
    takeaway: string
  }
}

export type SpineQuiz = {
  lessonTitle: string
  questions: QuizQuestion[]
}

export type SpineCourse = {
  code: string
  title: string
  subtitle: string
  description: string
  category: string
  level: string
  cpeHours: number
  icon: string
  accent: string
  featured: boolean
  modules: { title: string; description: string; lessons: SpineLesson[] }[]
  quiz: SpineQuiz
}

export const IFRS18_COURSE: SpineCourse = {
  code: "IFRS18",
  title: "IFRS 18 — Presentation & Disclosure (2027 transition)",
  subtitle: "IFRS 18 · IAS 7 · IFRS 19 — the 2027 presentation overhaul and the auditor's readiness file",
  description:
    "IFRS 18 'Presentation and Disclosure in Financial Statements', issued in April 2024, replaces IAS 1 for annual reporting periods beginning on or after 1 January 2027 — early application is permitted and the transition is retrospective, so comparatives get restated. This compact course gives Egyptian auditors the full transition map: the three income categories (operating, investing, financing), the two new mandatory subtotals, expense disaggregation and the no-relocation rule, the management-defined performance measures (MPM) disclosure regime, the IAS 7 cash-flow changes, IFRS 19's reduced disclosures for eligible subsidiaries — and how to build the 2026-27 readiness file so the first IFRS 18 audit is a quiet one.",
  category: "IFRS",
  level: "Intermediate",
  cpeHours: 2,
  icon: "layers",
  accent: "plum",
  featured: false,
  modules: [
    {
      title: "From IAS 1 to IFRS 18 — the new architecture",
      description: "Why the presentation layer was rebuilt, and the category-plus-subtotal skeleton auditors will test",
      lessons: [
        {
          title: "Why IFRS 18 — the biggest presentation change in decades",
          durationMin: 13,
          content: {
            intro:
              "For fifty years the income statement's interior was mostly presentation discretion. IFRS 18 ends that era — not by measuring anything differently, but by fixing where things sit and which subtotals users can trust.",
            sections: [
              {
                heading: "A fifty-year-old skeleton meets investor frustration",
                body: "IAS 1 in its modern form dates from 1997, and its bones are older still — a standard that told preparers which statements to publish but left the income statement's interior largely to judgment. Nothing in IAS 1 defined 'operating profit'; EBIT and EBITDA were never IFRS terms; associate returns, foreign-exchange movements and interest could sit almost anywhere a preparer found convenient. Two companies in the same industry, with identical economics, could publish materially different 'operating' figures — and both comply. Investors responded rationally: they built their own adjusted measures in earnings releases, far from the audited statements, and comparability died quietly. The IASB's Primary Financial Statements project set out to fix exactly this. Its output, IFRS 18 'Presentation and Disclosure in Financial Statements', issued on 9 April 2024, is the most consequential redesign of the face of the income statement in decades — a presentation standard, but one that changes what users can and cannot do with the numbers.",
              },
              {
                heading: "The dates that drive every engagement plan",
                body: "IFRS 18 is effective for annual reporting periods beginning on or after 1 January 2027, with early application permitted (and disclosed) — and it applies retrospectively, so comparatives follow the new rules. Work the dates forward for a calendar-year Egyptian listed group: the FY2027 statements, signed in 2028, are the first IFRS 18 statements, and the FY2026 figures inside them must be restated into the new categories and subtotals. That means the FY2026 audit season — fieldwork in early 2027 — audits the last IAS 1-based statements this client will ever publish, while certifying numbers that will be re-presented a year later. The mapping, dual-run and disclosure work has to happen during 2025 and 2026, before the mandatory year arrives. Consequential amendments travel with the standard: IAS 7's cash-flow changes, the new subtotals in IFRS 18-based interim reporting, and knock-ons across the presentation-related guidance. Early application remains a live option for groups wanting a quieter first year.",
              },
              {
                heading: "What does NOT change — and why that calms the audit",
                body: "What IFRS 18 does not change is its most calming feature. Recognition and measurement are untouched: revenue still follows IFRS 15's five steps, expected credit losses still stage under IFRS 9, leases still capitalize under IFRS 16, impairment math still belongs to IAS 36. Total profit or loss, and total comprehensive income, do not move by one pound — what changes is where income and expenses sit, which subtotals appear, and which notes must exist. The statement of financial position keeps its shape; the cash-flow statement keeps its three-section architecture, though amended IAS 7 changes its starting point and some classifications. For the auditor this reframes the transition audit: it is a presentation-and-disclosure audit — classification accuracy, subtotal arithmetic, disaggregation adequacy and disclosure completeness — not a re-measurement exercise. Risk assessment targets where numbers moved, and the presentation and disclosure assertions carry the weight.",
              },
            ],
            keyPoints: [
              "IFRS 18 was issued on 9 April 2024 and replaces IAS 1 for periods beginning on or after 1 January 2027; early application is permitted and it applies retrospectively.",
              "Recognition and measurement are untouched — totals stay the same; categories, subtotals and disclosures change.",
              "For a calendar-year group, FY2027 is the first IFRS 18 year and FY2026 comparatives are restated — the last IAS 1 audit happens in early 2027.",
              "Amended IAS 7 travels with IFRS 18: the indirect-method cash flow starts from operating profit, and the old interest/dividend classification choices disappear.",
            ],
            takeaway: "IFRS 18 rearranges the furniture without moving the building — learn the new map now, before your clients' comparatives need it.",
          },
          contentAr: {
            intro:
              "لخمسين عامًا كان باطن قائمة الدخل فضاءً واسعًا للاجتهاد في العرض. ينهي IFRS 18 هذا العصر — لا بقياس أي شيء على نحو مختلف، بل بتثبيت مكان الأرقام والمجاميع التي يستطيع المستخدمون الوثوق بها.",
            sections: [
              {
                heading: "هيكل عمره عقود يقابل إحباط المستثمرين",
                body: "يعود IAS 1 بصيغته الحديثة إلى عام 1997، وهيكله أقدم من ذلك بكثير: معيارٌ يحدد أي القوائم تُنشر لكنه يترك باطن قائمة الدخل للاجتهاد إلى حد بعيد. لم يعرّف IAS 1 قط «ربح التشغيل»؛ ولم تكن EBIT أو EBITDA يومًا مصطلحات IFRS؛ وكانت نتائج الشركات الزميلة وفروق العملات والفوائد يمكن أن تجلس حيثما رأى المُعِدّ أنه مناسب. شركتان في القطاع نفسه وباقتصاديات متطابقة كانتا تنشران رقمي «تشغيل» مختلفين جوهريًا — وكلتاهما ملتزمة. فرد المستثمرون بعقلانية: بنوا مقاييسهم المعدلة في بيانات الأرباح، بعيدًا عن القوائم المراجَعة، وماتت قابلية المقارنة بهدوء. مشروع القوائم المالية الرئيسية في مجلس معايير المحاسبة الدولية جاء ليعالج هذا تحديدًا، وكان ناتجه IFRS 18 «العرض والإفصاح في القوائم المالية» الصادر في 9 أبريل 2024 — أكثر إعادة تصميم جوهرية لواجهة قائمة الدخل منذ عقود: معيار عرضٍ، لكنه يغير ما يستطيع المستخدم فعله بالأرقام وما يعجز عنه.",
              },
              {
                heading: "التواريخ التي تحكم خطة كل مهمة",
                body: "يسري IFRS 18 على الفترات السنوية التي تبدأ في 1 يناير 2027 أو بعدها، مع السماح بالتطبيق المبكر (مع الإفصاح عنه)، ويطبق بأثر رجعي فتتبع أرقام المقارنة القواعد الجديدة. احسب التواريخ لمجموعة مصرية مدرجة سنتها المالية ميلادية: قوائم 2027 الموقعة في 2028 هي أول قوائم IFRS 18، ويجب إعادة عرض أرقام 2026 داخلها وفق الفئات والمجاميع الجزئية الجديدة. أي أن موسم مراجعة 2026 — بالعمل الميداني في أوائل 2027 — يراجع آخر قوائم تُعد على IAS 1، ويشهد على أرقام ستُعاد صياغتها بعد عام. أما أعمال الربط والتشغيل المزدوج وقوائم الإفصاح فمكانها 2025 و2026 قبل حلول السنة الإلزامية. وترافق مع المعيار تعديلاتٌ تبعية: تغييرات IAS 7 لقائمة التدفقات، والمجاميع الجديدة في التقرير المرحلي، وأثر ممتد عبر أدبيات العرض. ويبقى التطبيق المبكر خيارًا واقعيًا للمجموعات الراغبة في سنة أولى أهدأ.",
              },
              {
                heading: "ما الذي لا يتغير — ولماذا يطمئن ذلك المراجع",
                body: "أكثر ما يطمئن في IFRS 18 هو ما لا يغيره. الاعتراف والقياس بمنأى: الإيراد ما زال بخطوات IFRS 15 الخمس، والخسائر الائتمانية المتوقعة بمراحلها في IFRS 9، والإيجارات برسملتها في IFRS 16، وحسابات الانخفاض لأصول IAS 36. إجمالي الربح أو الخسارة، وإجمالي الدخل الشامل، لا يتحرك جنيهًا واحدًا — ما يتغير هو مكان الإيرادات والمصروفات، والمجاميع الجزئية الظاهرة، والملاحظات الواجبة. قائمة المركز المالي تحتفظ بشكلها؛ وقائمة التدفقات النقدية تحتفظ بأقسامها الثلاثة وإن غيّر IAS 7 المعدّل نقطة انطلاقها وبعض تصنيفاتها. هذا يعيد تعريف مراجعة الانتقال للمراجع: إنها مراجعة عرض وإفصاح — دقة التصنيف، وحساب المجاميع الجزئية، وكفاية التفصيل، واكتمال الإفصاح — لا إعادة قياس. يتركز تقييم المخاطر حيث تحركت الأرقام، وتحمل تأكيدات العرض والإفصاح عبء العمل.",
              },
            ],
            keyPoints: [
              "صدر IFRS 18 في 9 أبريل 2024 ويحل محل IAS 1 اعتبارًا من الفترات التي تبدأ في 1 يناير 2027 أو بعدها؛ التطبيق المبكر جائز والتطبيق بأثر رجعي.",
              "الاعتراف والقياس لم يُمسّا — الإجماليات كما هي؛ ما يتغير هو الفئات والمجاميع الجزئية والإفصاحات.",
              "لسنة ميلادية: قوائم 2027 أول سنوات IFRS 18 وتُعاد صياغة أرقام مقارنة 2026 — وآخر مراجعة على IAS 1 تجري في أوائل 2027.",
              "يسافل معه IAS 7 المعدل: التدفق غير المباشر يبدأ من ربح التشغيل، وتختفي خيارات تصنيف الفوائد والتوزيعات القديمة.",
            ],
            takeaway: "IFRS 18 يعيد ترتيب الأثاث دون تحريك المبنى — أتقن الخريطة الجديدة قبل أن تحتاجها أرقام مقارنة عملائك.",
          },
        },
        {
          title: "The three income categories and two new subtotals",
          durationMin: 14,
          content: {
            intro:
              "IFRS 18's engine room is a residual-definition game: three named categories, two mandatory subtotals, and classification logic that bends to the business model. Auditors who understand the bends can test the mapping; auditors who don't will re-perform subtotals and hope.",
            sections: [
              {
                heading: "Operating, investing, financing — the residual logic",
                body: "IFRS 18 sorts income and expenses into five categories: the three new ones — operating, investing and financing — plus income taxes and discontinued operations, which keep their familiar separate homes. The logic is residual: operating is the default category, capturing the results of the entity's main business activities and everything not classified elsewhere. The investing category carries returns from associates and joint ventures (equity-accounted) and from assets that generate returns individually and largely independently of the business's other resources — a trading group's investment property or returns on standing cash. The financing category carries income and expenses from liabilities that involve only raising finance: borrowings and bonds, including interest on lease liabilities for a typical lessee. The definitions bend to the business model: a bank's lending margin and deposit costs are operating, an investment-property group's rental income and fair-value gains are operating — for them, those are main business activities. For the auditor, this makes transition a mapping exercise: chart of accounts to category, with business-model judgment at the joints.",
              },
              {
                heading: "Two subtotals and one waterfall",
                body: "Two subtotals are now mandatory. Operating profit or loss — the total of the operating category — becomes a defined, comparable anchor for the first time; every adjusted-EBITDA narrative will now reconcile to it. Profit or loss before financing and income taxes — operating profit plus the investing category — shows performance before capital-structure effects, the closest IFRS cousin to EBIT. Below it come the financing category, income taxes, and discontinued operations, in that order, down to profit. Within operating expenses, the by-function or by-nature choice survives; but function presenters must add a note disclosing specified natural expenses — employee benefits, depreciation and amortisation, impairment losses, inventory write-downs, and raw materials and consumables used. Aggregation now follows principle, not habit: group items sharing characteristics, disaggregate where characteristics differ, and never bury material detail in 'other'. A relocation rule protects the result: what IFRS requires on the face of a primary statement stays there, and what belongs in the notes stays in the notes.",
              },
              {
                heading: "What auditors actually test",
                body: "Audit work concentrates where classification judgment lives. Foreign-exchange losses on export receivables belong in operating — they arise from operations; the same currency movement on dollar borrowings belongs in financing. Associate results sit in investing; lease interest in financing for a typical non-financial lessee; dividend income from a passive stake in investing. Then the mechanics: re-perform both new subtotals; test the completeness of the operating residual — accounts no one mapped default silently into operating; check consistency with restated comparatives; and tie the nature-expense note to payroll, the fixed-asset register and the inventory system, because these disclosures cross-check the ledger from a new direction. The IAS 7 amendments land in the same file: the indirect-method cash flow now starts from operating profit, and for a typical non-financial group interest paid and dividends paid are financing, while interest and dividends received are investing — the old policy choices are gone. Every difference from last year's presentation needs a home in the transition disclosures.",
              },
            ],
            keyPoints: [
              "Operating is the residual category — main business activities plus everything not classified as investing or financing.",
              "Mandatory subtotals: operating profit or loss, and profit or loss before financing and income taxes.",
              "Function presenters must disclose specified natural expenses: employee benefits, depreciation and amortisation, impairments and inventory write-downs, raw materials consumed.",
              "Amended IAS 7: indirect cash flow starts from operating profit; for typical non-financial groups interest and dividends paid are financing, interest and dividends received are investing.",
            ],
            example: {
              title: "The associate that flattered operating profit",
              context:
                "An Egyptian distributor's first IFRS 18 draft shows its 21m share of profit from a logistics joint venture inside operating income — 'it's part of how we run the business' — with borrowing interest below the new subtotals.",
              analysis:
                "For a trading group, equity-accounted associate returns belong in the investing category, below operating profit. Leaving the 21m inside operating overstates the new subtotal by the same amount, distorting every KPI and covenant keyed to 'operating profit', and giving the MPM note (if adjusted EBITDA is reconciled from there) a wrong base. The correction is mechanical — reclassify, re-add the subtotal — but the audit insight is not: the classification was a choice, and choices near subtotals deserve challenge.",
            },
            takeaway: "Classification is a mapping exercise with business-model bends — build the chart-of-accounts map once, then test it every period.",
          },
          contentAr: {
            intro:
              "قلب IFRS 18 لعبة تعريفات بقايا: ثلاث فئات مسماة، ومجموعان جزئيان إلزاميان، ومنطق تصنيف ينحني لنموذج العمل. من يفهم الانحناءات يستطيع اختبار الربط؛ ومن لا يفهمها سيكتفي بإعادة حساب المجاميع على أمل ألا يكون ثمة خطأ.",
            sections: [
              {
                heading: "التشغيل والاستثمار والتمويل — منطق البقايا",
                body: "يصنف IFRS 18 الإيرادات والمصروفات في خمس فئات: الثلاث الجديدة — التشغيل والاستثمار والتمويل — إضافة إلى ضرائب الدخل والأنشطة المتوقفة التي تحتفظ بموضعيهما المعروف. والمنطق منطق بقايا: فئة التشغيل هي الفئة الافتراضية، تستقبل نتائج الأنشطة الرئيسية للمنشأة وكل ما لم يُصنف في فئة أخرى. وتحمل فئة الاستثمار عوائد الشركات الزميلة والمشاريع المشتركة (بطريقة حقوق الملكية) وعوائد الأصول التي تولّد مردودًا كلٌّ على حدة وبمعزل شبه تام عن موارد النشاط الأخرى — كالعقارات الاستثمارية لمجموعة تجارية أو عوائد النقد القائم. وتحمل فئة التمويل إيرادات ومصروفات الالتزامات التي لا تقتضي سوى الحصول على تمويل: القروض والسندات، ومنها فوائد التزامات الإيجار لدى المستأجر النمطي. ثم تنحني التعريفات لنموذج العمل: هامش الإقراض وكلفة الودائع لدى البنك تشغيلية، وإيجارات العقارات ومكاسب القيمة العادلة لدى مجموعة عقارية تشغيلية — فهي أنشطتها الرئيسية. وللمراجع يصبح الانتقال تمرين ربط: دليل الحسابات إلى الفئات، مع حكم على نموذج العمل عند المفاصل.",
              },
              {
                heading: "مجموعان جزئيان وشلال واحد",
                body: "صار مجموعان جزئيين إلزاميين. «ربح أو خسارة التشغيل» — إجمالي فئة التشغيل — يصير للمرة الأولى نقطة ارتكازٍ معرفة وقابلة للمقارنة، وإليه ستُردّ كل سردية EBITDA المعدلة. و«الربح أو الخسارة قبل التمويل وضرائب الدخل» — ربح التشغيل مضافًا إليه فئة الاستثمار — يُظهر الأداء قبل آثار هيكل التمويل، وهو أقرب قريب IFRS لمفهوم EBIT. وتحته تأتي فئة التمويل ثم ضرائب الدخل ثم الأنشطة المتوقفة بهذا الترتيب حتى الربح. وداخل مصروفات التشغيل يبقى خيار العرض بالوظيفة أو بالطبيعة؛ لكن من يعرض بالوظيفة يضيف ملاحظة تُفصح عن مصروفات محددة بطبيعتها: مزايا العاملين، والإهلاك والاستنفاد، وخسائر الانخفاض، وخفض قيمة المخزون، والمواد الخام والمستلزمات المستخدمة. ويصبح التجميع على مبدأ لا على عادة: اجمع ما تتشارك خصائصه، وفصّل حيث تختلف الخصائص، ولا تدفن جوهريًا في «أخرى». وقاعدة انتقال تحمي النتيجة: ما يوجب IFRS عرضه على وجه القائمة الأساسية يبقى فيه، وما محله الملاحظات يبقى فيها.",
              },
              {
                heading: "ما الذي يختبره المراجع فعلًا",
                body: "يتركز عمل المراجعة حيث يسكن حكم التصنيف. فروق العملة على الذمم التصديرية تشغيلية — فهي وليدة العمليات؛ والحركة نفسها على قروض الدولار تمويلية. ونتائج الزميلة في الاستثمار؛ وفوائد الإيجار في التمويل لدى مستأجر غير مالي نمطي؛ وعوائد حصص مالية سلبية في الاستثمار. ثم الميكانيكا: أعد أداء المجموعين الجزئيين؛ واختبر اكتمال بقايا التشغيل — فالحسابات التي لم يربطها أحد تنزلق إليها بصمت؛ وراقب الاتساق مع أرقام المقارنة المعاد عرضها؛ واربط ملاحظة المصروفات الطبيعية بالرواتب وسجل الأصول الثابتة ونظام المخزون، فهذه الإفصاحات تعاين الدفاتر من اتجاه جديد. وتحل تعديلات IAS 7 في الملف ذاته: قائمة التدفقات بالطريقة غير المباشرة تبدأ الآن من ربح التشغيل، وللمجموعة غير المالية النمطية تدفع الفوائد والتوزيعات ضمن الأنشطة التمويلية بينما تُستقبل الفوائد والتوزيعات ضمن الأنشطة الاستثمارية — وقد زالت خيارات السياسة القديمة. وكل خلاف عن عرض العام الماضي يحتاج موضعًا في إفصاحات الانتقال.",
              },
            ],
            keyPoints: [
              "فئة التشغيل هي فئة البقايا — الأنشطة الرئيسية وكل ما لم يُصنف استثمارًا أو تمويلًا.",
              "مجموعان إلزاميان: ربح أو خسارة التشغيل، والربح أو الخسارة قبل التمويل وضرائب الدخل.",
              "من يعرض بالوظيفة يفصح عن مصروفات محددة بطبيعتها: مزايا العاملين، والإهلاك والاستنفاد، والانخفاضات وخفض المخزون، والمواد المستخدمة.",
              "IAS 7 المعدل: التدفق غير المباشر يبدأ من ربح التشغيل؛ ولمجموعة غير مالية نمطية تدفع الفوائد والتوزيعات تمويلًا وتستقبلهما استثمارًا.",
            ],
            takeaway: "التصنيف تمرين ربط ينحني لنموذج العمل — ابنِ خريطة دليل الحسابات مرة، ثم اختبرها كل فترة.",
          },
        },
      ],
    },
    {
      title: "MPMs, transition and the 2027 readiness file",
      description: "Where non-IFRS measures meet the statements, and how to plan the transition audit",
      lessons: [
        {
          title: "Management-defined performance measures (MPMs)",
          durationMin: 13,
          content: {
            intro:
              "Adjusted EBITDA, core earnings, funds from operations — companies shout them in earnings releases and keep them far from the audited statements. IFRS 18 does not silence the shouting; it drags the measures into a single, audited, reconciled note.",
            sections: [
              {
                heading: "Which measures are caught",
                body: "An MPM is a subtotal of income and expenses that management uses in public communications outside the financial statements to convey its view of an aspect of financial performance, and that is not itself a total or subtotal specified by IFRS. All three limbs matter. Public use is the trigger: 'adjusted operating profit' in an investor deck or earnings release is caught; the same calculation in a board pack or bonus scheme is not. Management's view distinguishes MPMs from IFRS-specified measures: operating profit, profit before financing and income taxes and profit for the period are outside the definition — IFRS already defines them. And 'subtotal of income and expenses' sets the perimeter: cash-flow-based measures like free cash flow, or balance-sheet measures like net debt, fall outside the label — though other IFRS 18 presentation principles still shape how they appear. The standard takes no view on whether a measure is good or bad; it makes the definition, calculation and bridge to IFRS auditable.",
              },
              {
                heading: "The disclosure package",
                body: "Every MPM is disclosed in a single note, which must state that the measure reflects management's view and is not necessarily comparable with measures that other entities use; explain why the measure provides useful information about the entity's performance and how it is calculated; and present a reconciliation from the most directly comparable IFRS-specified subtotal or total — operating profit, typically — to the MPM, item by item. For each reconciling item, the note discloses the income-tax effect, and in consolidated statements the effect on non-controlling interests, where applicable. The single-note discipline matters: investors get one place to find every management-defined measure, defined consistently across periods. Definition changes between periods must not pass silently — comparability is the point of the exercise. And because the note is inside the financial statements, its content is inside the audit opinion too.",
                bullets: [
                  "Not-necessarily-comparable statement — management's view, not an IFRS measure.",
                  "Why the measure is useful, and how it is calculated.",
                  "Item-by-item reconciliation to the nearest IFRS-specified subtotal or total.",
                  "Income-tax effect (and NCI effect in consolidated statements) per reconciling item.",
                ],
              },
              {
                heading: "Audit implications — the perimeter moves",
                body: "Historically, non-IFRS measures lived in the unaudited half of the earnings release; auditors engaged with them, if at all, through ISA 720-type procedures on other information. IFRS 18 redraws the line: the MPM note is financial-statement content, and misstatement risk attaches to it like any other note. Four testing surfaces emerge. Completeness: is every publicly used measure in the note? The population is the client's public communications — earnings releases, investor presentations, press interviews — not management's memory. Accuracy: re-perform the reconciliation arithmetic from the reported IFRS subtotal. Consistency: does the disclosed definition match the one actually used publicly, period over period? Effects: are the tax and NCI amounts per reconciling item supportable? Overlay the fraud lens: recurring 'one-off' addbacks — restructuring every year, FX every year — are management bias made visible, and the reconciliation is where the pattern shows. The rest of the earnings release remains other information; the perimeter moved, it did not swallow the document.",
              },
            ],
            keyPoints: [
              "MPM = a subtotal of income and expenses used publicly, communicating management's view, and not specified by IFRS — adjusted EBITDA and friends.",
              "One note: the not-necessarily-comparable statement, why it is useful and how calculated, and an item-by-item reconciliation to the nearest IFRS subtotal.",
              "Each reconciling item discloses its income-tax effect (and NCI effect in consolidated statements).",
              "The MPM note is inside the opinion — completeness, accuracy, consistency and effects are now misstatement surfaces.",
            ],
            example: {
              title: "The one-off that never ends",
              context:
                "A listed food group's 'adjusted operating profit' adds back restructuring charges that have recurred in each of the last four years — a different program every year, an addback every year.",
              analysis:
                "The measure itself may survive — IFRS 18 does not judge management's view. But the auditor tests the reconciliation, verifies the tax and NCI effects, and reads the pattern: a 'one-off' with a four-year history is a recurring operating cost by any economic definition, and the 'why this measure is useful' narrative now sits inside the audited statements. The audit question is whether the disclosures, taken together, are capable of misleading — and the answer drives challenge, not silence.",
            },
            takeaway: "IFRS 18 does not police what management calls performance — it makes the bridge from opinion to IFRS visible, comparable and auditable.",
          },
          contentAr: {
            intro:
              "«EBITDA المعدلة» و«الأرباح الجوهرية» و«التدفقات من العمليات» — تصرخ بها الشركات في بيانات الأرباح وتُبعد بها عن القوائم المراجَعة. لا يسكت IFRS 18 الصراخ؛ بل يسحب المقاييس إلى ملاحظة واحدة مراجَعة ومطابَقة إلى IFRS.",
            sections: [
              {
                heading: "أي المقاييس يقع في التعريف",
                body: "المقياس المعرَّف إداريًا (MPM) هو مجموع جزئي من الإيرادات والمصروفات تستخدمه الإدارة في اتصالاتها العلنية خارج القوائم المالية لعرض نظرتها إلى جانب من الأداء المالي، وليس هو ذاته إجماليًا أو مجموعًا جزئيًا حدده IFRS. وكل الأركان الثلاثة بليغة. الاستخدام العلني هو الفتيل: «ربح التشغيل المعدل» في عرض المستثمرين أو بيان الأرباح يقع في التعريف؛ أما الحسبة ذاتها في أوراق مجلس الإدارة أو نظام الحوافز فلا. ونظرة الإدارة تميز MPM عن مقاييس IFRS: فربح التشغيل، والربح قبل التمويل وضرائب الدخل، وربح الفترة، خارجون عن التعريف لأن IFRS سبق أن عرّفهم. و«مجموع جزئي من الإيرادات والمصروفات» يرسم المحيط: فالمقاييس المبنية على النقد كالتدفق الحر، أو على الميزانية كصافي الدين، تقع خارج الوصف — وإن ظلت مبادئ العرض في IFRS 18 تؤطر طريقة ظهورها. والمعيار لا يحكم على المقياس حسنًا أو سوءًا؛ بل يجعل تعريفه وحسابه وجسره إلى IFRS قابلًا للمراجعة.",
              },
              {
                heading: "حزمة الإفصاح",
                body: "يُفصح عن كل MPM في ملاحظة واحدة تنص على أن المقياس يعكس نظرة الإدارة وليس بالضرورة قابلًا للمقارنة مع مقاييس المنشآت الأخرى؛ وتشرح لماذا يوفر المقياس معلومات نافعة عن أداء المنشأة وكيف يُحسب؛ وتعرض مطابقة من أقرب مجموع جزئي أو إجمالي حدده IFRS — ربح التشغيل غالبًا — إلى المقياس بندًا بندًا. ولكل بند تسوية يُفصح عن أثر ضريبة الدخل، وفي القوائم الموحدة عن أثر حقوق الملكية غير المسيطرة حيث ينطبق. ونظام الملاحظة الواحدة مقصود لذاته: مكان واحد يجد فيه المستثمر كل مقاييس الإدارة بتعريف ثابت عبر الفترات. وتغييرات التعريف بين الفترات لا تمر بصمت — فقابلية المقارنة هي غاية التمرين كله. ولأن الملاحظة داخل القوائم المالية، فمحتواها داخل رأي المراجعة أيضًا.",
              },
              {
                heading: "آثار المراجعة — المحيط يتحرك",
                body: "تاريخيًا عاشت المقاييس غير المبنية على IFRS في النصف غير المراجَع من بيان الأرباح؛ وكان تعامل المراجعين معها — إن جرى — عبر إجراءات شبيهة بـ ISA 720 على المعلومات الأخرى. يعيد IFRS 18 رسم الخط: فملاحظة MPM صارت محتوى قوائم مالية، يلتحق بها خطر التحريف كأي ملاحظة. تنشأ أربعة أسطح اختبار. الاكتمال: هل كل مقياس مستخدم علنًا موجود في الملاحظة؟ والمجتمع هو اتصالات العميل العلنية — بيانات الأرباح وعروض المستثمرين والمقابلات — لا ذاكرة الإدارة. والدقة: أعد أداء حسابات المطابقة من المجموع الجزئي المبلغ. والاتساق: هل التعريف المفصح عنه هو ذاته المستخدم علنًا، فترة بعد فترة؟ والآثار: هل مبالغ الضريبة وحصص الأقلية لكل بند تسوية قابلة للتأييد؟ ثم ضع عدسة الاحتيال: الإضافات المتكررة «لمرة واحدة» — إعادة هيكلة كل عام وفروق عملة كل عام — انحياز إدارة صار مرئيًا، والمطابقة هي حيث يظهر النمط. أما بقية بيان الأرباح فتبقى معلومات أخرى؛ فالمحيط تحرك ولم يبتلع الوثيقة.",
              },
            ],
            keyPoints: [
              "MPM = مجموع جزئي من الإيرادات والمصروفات، مستخدم علنًا، يعكس نظرة الإدارة، ولم يحدده IFRS — وعلى رأسهم EBITDA المعدلة.",
              "ملاحظة واحدة: نص عدم قابلية المقارنة بالضرورة، وسبب النفع وكيفية الحساب، ومطابقة بندًا بندًا إلى أقرب مجموع في IFRS.",
              "لكل بند تسوية أثره في ضريبة الدخل (وفي القوائم الموحدة أثره في حقوق الملكية غير المسيطرة).",
              "ملاحظة MPM داخل الرأي — فالاكتمال والدقة والاتساق والآثار أسطح تحريف جديدة.",
            ],
            takeaway: "لا يحاسب IFRS 18 الإدارة على تسميتها للأداء — لكنه يجعل الجسر من الرأي إلى IFRS مرئيًا وقابلًا للمقارنة وقابلًا للمراجعة.",
          },
        },
        {
          title: "Transition, IFRS 19 and the auditor's 2026-27 readiness file",
          durationMin: 14,
          content: {
            intro:
              "The 2027 income statement is prepared in 2026. This closing lesson assembles the transition file: retrospective restatement without re-measurement, IFRS 19's reduced-disclosure route for eligible subsidiaries, and the readiness checklist that keeps the first IFRS 18 audit boring — as good audits are.",
            sections: [
              {
                heading: "Retrospective application — reclassification, not re-measurement",
                body: "IFRS 18 applies retrospectively through the IAS 8 machinery: the comparative period in the first IFRS 18 statements is restated into the new categories and subtotals. Because recognition and measurement do not change, there is in substance no adjustment to opening retained earnings — the transition moves numbers between line items, adds the new subtotals, and builds the new notes; total equity, total profit and the balance sheet are unmoved. The first IFRS 18 statements carry transition disclosures identifying the line items and amounts reclassified and the nature of the changes. And IFRS 18 does not land alone: the post-2023 amendment wave clusters in the same 2025-2027 window — the IAS 1 amendments on current/non-current classification and covenant disclosure that carry forward into IFRS 18, IFRS 16's sale-and-leaseback amendment, IAS 21's lack-of-exchangeability guidance, and the IFRS 9 / IFRS 7 classification-and-measurement package. Teams that manage IFRS 18 as a single-standard event will be surprised by the stack; readiness plans should track the wave together.",
              },
              {
                heading: "IFRS 19 — reduced disclosures for eligible subsidiaries",
                body: "Issued in May 2024 and effective for periods beginning on or after 1 January 2027 (early application permitted), IFRS 19 lets an eligible subsidiary prepare stand-alone statements with substantially reduced disclosure. Eligibility has two limbs: the subsidiary itself must not be publicly accountable — its debt or equity is not traded in a public market, and it does not hold assets in a fiduciary capacity for outsiders as one of its main businesses, which excludes banks, insurers and similar financial entities — and its parent or ultimate parent must publish publicly available, IFRS-compliant general-purpose financial statements. The reduction is disclosure only: recognition, measurement and presentation remain full IFRS. For Egyptian groups with a listed parent and a ring of trading subsidiaries, stand-alone subsidiary statements can slim down considerably. The auditor's angles: eligibility is a documented, reassessed-each-year facts-and-circumstances conclusion; fiduciary capacity is the trap for groups with captive finance or escrow activity; and consolidated statements are never eligible.",
              },
              {
                heading: "The 2026-27 readiness file",
                body: "Assemble five workstreams. First, the dual-run: map the chart of accounts to the categories and prepare a shadow FY2026 income statement under IFRS 18 — classification differences surface while they are still cheap. Second, the disclosure checklist: MPM note, nature-expense schedule, aggregation policy, amended IAS 7 mechanics, transition disclosures — each with an owner and a first-draft date. Third, systems: consolidation tagging, closing-checklist changes, and report-formatting work in the ERP. Fourth, stakeholders: loan covenants, bonus plans and regulation-driven KPIs keyed to 'operating profit' or 'EBITDA' must be re-papered — IFRS 18 makes operating profit a defined subtotal, so an agreement drafted on the old free-for-all may now diverge from the reported figure; and going-concern and viability narratives must be rewritten against restated comparatives so the ISA 570 file and the front half of the annual report tell one story. Fifth, the audit plan: update the risk assessment for presentation and disclosure assertions, sample-test the classification mapping, read the MPM population against actual public communications, and brief those charged with governance on the transition timeline before the mandatory year starts.",
                bullets: [
                  "Dual-run the FY2026 income statement — find classification gaps while they are cheap.",
                  "Disclosure checklist with owners and dates: MPM note, nature expenses, IAS 7, transition.",
                  "Re-paper covenants, bonus plans and KPI definitions keyed to old subtotals.",
                  "Refresh the audit risk assessment for presentation and disclosure assertions.",
                ],
              },
            ],
            keyPoints: [
              "Retrospective application restates comparatives — but with no recognition or measurement change, there is no opening-equity adjustment: reclassification plus disclosure.",
              "IFRS 19 (effective 2027) reduces disclosures — never recognition, measurement or presentation — for non-publicly-accountable subsidiaries of IFRS-publishing parents.",
              "Covenants, bonus plans and KPIs keyed to old subtotals must be re-papered before FY2027 reporting.",
              "The readiness file: dual-run P&L, disclosure checklist, systems mapping, stakeholder re-papering, and an updated audit risk assessment.",
            ],
            takeaway: "A boring first IFRS 18 audit is earned in 2026 — the readiness file is where you earn it.",
          },
          contentAr: {
            intro:
              "قائمة الدخل الخاصة بعام 2027 تُعد فعلًا في 2026. هذا الدرس الختامي يجمع ملف الانتقال: إعادة العرض بأثر رجعي دون إعادة قياس، ومسار IFRS 19 للإفصاح المخفف، وقائمة الجاهزية التي تجعل أول مراجعة IFRS 18 مملة — فالمراجعة الجيدة مملة.",
            sections: [
              {
                heading: "التطبيق بأثر رجعي — إعادة تصنيف لا إعادة قياس",
                body: "يطبق IFRS 18 بأثر رجعي عبر آلية IAS 8: فترة المقارنة في أول قوائم IFRS 18 تُعاد صياغتها في الفئات والمجاميع الجزئية الجديدة. ولأن الاعتراف والقياس لا يتغيران، فلا يوجد جوهريًا تعديل على الأرباح المرحلة الافتتاحية — فالانتقال يحرك الأرقام بين البنود، ويضيف المجاميع الجديدة، ويبني الملاحظات الجديدة؛ أما إجمالي حقوق الملكية وإجمالي الربح والميزانية فلا تمسها. وتحمل أول قوائم IFRS 18 إفصاحات انتقال تحدد البنود والمبالغ المعاد تصنيفها وطبيعة التغيرات. ولا يهبط IFRS 18 منفردًا: فموجة التعديلات بعد 2023 تتكوم في النافذة ذاتها 2025-2027 — تعديلات IAS 1 بشأن التصنيف الجاري/غير الجاري والإفصاح عن التعهدات وقد انتقلت إلى IFRS 18، وتعديل البيع ثم إعادة الإيجار في IFRS 16، وإرشادات عدم توافر قابلية التحويل في IAS 21، وحزمة التصنيف والقياس في IFRS 9 وIFRS 7. ومن يدير IFRS 18 بوصفه حدث معيار واحد ستفاجئه الحزمة المتراكبة؛ فلتُدر الموجة كلها معًا في خطة الجاهزية.",
              },
              {
                heading: "IFRS 19 — إفصاح مخفف للشركات التابعة المؤهلة",
                body: "صدر في مايو 2024 ويسري على الفترات التي تبدأ في 1 يناير 2027 أو بعدها (مع السماح بالتطبيق المبكر)، ويجيز IFRS 19 للشركة التابعة المؤهلة إعداد قوائمها المستقلة بإفصاح مخفف جوهريًا. وللأهلية شعبتان: أن تكون التابعة ذاتها غير مسؤولة أمام الجمهور — فلا يتداول دينها أو حقوق ملكيتها في سوق عام، ولا تحتفظ بأصول لأطراف خارجية بالوكالة بوصفه أحد أنشطتها الرئيسية، وهو ما يقصي البنوك وشركات التأمين ونظائرها — وأن تنشر شركتها الأم أو الأم النهائية قوائم غرض عام متاحة للجمهور وفق IFRS. والتخفيض إفصاحي فحسب: فالاعتراف والقياس والعرض يبقون IFRS كاملًا. وللمجموعات المصرية ذات الأم المدرجة وحلقة الشركات التابعة التجارية، يمكن للقوائم المستقلة أن تنحف كثيرًا. وزوايا المراجع: الأهلية خلاصة موثقة من وقائع وظروف يُعاد تقييمها سنويًا؛ والاحتفاظ بالأصول بالوكالة هو الفخ لمجموعات التمويل الداخلي أو حسابات السداد؛ والقوائم الموحدة لا تكون مؤهلة أبدًا.",
              },
              {
                heading: "ملف الجاهزية 2026-2027",
                body: "اجمع خمسة مسارات عمل. أولًا التشغيل المزدوج: اربط دليل الحسابات بالفئات وأعد قائمة دخل موازية لعام 2026 وفق IFRS 18 — فتنكشف فروق التصنيف وهي ما تزال رخيصة. ثانيًا قائمة الإفصاحات: ملاحظة MPM، وجدول المصروفات الطبيعية، وسياسة التجميع، وآليات IAS 7 المعدل، وإفصاحات الانتقال — لكل بند مالك وتاريخ مسودة أولى. ثالثًا الأنظمة: وسم التوحيد، وتغييرات قائمة الإقفال، وأعمال قوالب التقارير في النظام. رابعًا أصحاب المصلحة: تعهدات التمويل وخطط الحوافز ومؤشرات التنظيم المربوطة بـ «ربح التشغيل» أو «EBITDA» يجب إعادة تحريرها — فقد صار ربح التشغيل مجموعًا معرفًا، وقد يتباعد اتفاق بُني على الفوضى القديمة عن الرقم المبلغ؛ كما تُعاد كتابة سردية الاستمرارية والجدوى على أرقام المقارنة المعاد عرضها حتى يروي ملف ISA 570 والنصف الأول من التقرير السنوي قصة واحدة. خامسًا خطة المراجعة: حدّث تقييم المخاطر لتأكيدات العرض والإفصاح، واختبر عينيًا خريطة التصنيف، واقرأ مجتمع MPM مقابل الاتصالات العلنية الفعلية، وأبلغ الجهات المسؤولة عن الحوكمة بالجدول الزمني قبل انطلاق السنة الإلزامية.",
              },
            ],
            keyPoints: [
              "التطبيق بأثر رجعي يعيد عرض أرقام المقارنة — وبغياب تغيير الاعتراف أو القياس لا يوجد تعديل افتتاحي على حقوق الملكية: إعادة تصنيف وإفصاح.",
              "IFRS 19 (السريان 2027) يخفض الإفصاح — لا الاعتراف ولا القياس ولا العرض أبدًا — للشركات التابعة غير المسؤولة أمام الجمهور لأمهات تنشر IFRS.",
              "التعهدات وخطط الحوافز والمؤشرات المربوطة بالمجاميع القديمة يجب إعادة تحريرها قبل إبلاغ 2027.",
              "ملف الجاهزية: قائمة دخل بالتشغيل المزدوج، وقائمة إفصاحات، وربط أنظمة، وإعادة تحرير اتفاقيات، وتحديث تقييم مخاطر المراجعة.",
            ],
            takeaway: "أول مراجعة IFRS 18 الهادئة تُكتسب في 2026 — وملف الجاهزية هو حيث تكتسبها.",
          },
        },
      ],
    },
  ],
  quiz: {
    lessonTitle: "IFRS 18 — Knowledge Check",
    questions: [
      {
        question:
          "An unlisted Egyptian trading group's first IFRS 18 statement of profit or loss shows: revenue 480m; cost of sales 300m; other operating expenses 110m; share of profit of an associate 21m; interest expense on long-term borrowings 24m; FX loss on those borrowings 6m; income tax 12m. What is the 'profit before financing and income taxes' subtotal?",
        options: [
          "91m — operating profit (70m) plus the investing category (the 21m associate share)",
          "70m — operating profit only",
          "67m — operating profit plus the associate, less interest expense",
          "61m — after all items except income tax",
        ],
        correctIndex: 0,
        explanation:
          "Profit before financing and income taxes = operating profit (480 − 300 − 110 = 70m) plus the investing category (21m) = 91m. Borrowing interest and the related FX loss sit in the financing category below the subtotal; tax never enters it.",
        questionAr:
          "مجموعة تجارية مصرية غير مدرجة تُعد أول قوائمها وفق IFRS 18: إيراد 480 مليونًا؛ تكلفة مبيعات 300؛ مصروفات تشغيلية أخرى 110؛ نصيب من أرباح زميلة 21؛ فوائد قروض طويلة الأجل 24؛ خسارة عملة على القروض ذاتها 6؛ ضريبة دخل 12. كم يبلغ مجموع «الربح قبل التمويل وضرائب الدخل»؟",
        optionsAr: [
          "91 مليونًا — ربح التشغيل (70) مضافًا إليه فئة الاستثمار (21)",
          "70 مليونًا — ربح التشغيل فقط",
          "67 مليونًا — ربح التشغيل مع الزميلة ناقص فوائد القروض",
          "61 مليونًا — بعد كل البنود عدا ضريبة الدخل",
        ],
        explanationAr:
          "الربح قبل التمويل والضرائب = ربح التشغيل (480 − 300 − 110 = 70) + فئة الاستثمار (21) = 91. فوائد القروض وخسارة العملة عليها تجلسان في فئة التمويل أسفل المجموع، والضريبة لا تدخله أبدًا.",
      },
      {
        question:
          "Under the IAS 7 amendments that accompany IFRS 18, the operating section of a typical non-financial group's indirect-method cash flow statement starts from:",
        options: [
          "Operating profit or loss as defined by IFRS 18",
          "Profit or loss for the period",
          "Revenue for the period",
          "Total comprehensive income",
        ],
        correctIndex: 0,
        explanation:
          "Amended IAS 7 anchors the indirect method to IFRS 18's operating profit subtotal — the income statement and cash flow statement now tell their story from the same first line.",
        questionAr:
          "بموجب تعديلات IAS 7 المرافقة لـ IFRS 18، يبدأ قسم الأنشطة التشغيلية في قائمة التدفقات بالطريقة غير المباشرة لمجموعة غير مالية نمطية من:",
        optionsAr: [
          "ربح أو خسارة التشغيل كما يعرّفه IFRS 18",
          "ربح أو خسارة الفترة",
          "إيراد الفترة",
          "إجمالي الدخل الشامل",
        ],
        explanationAr:
          "يرسو IAS 7 المعدّل الطريقة غير المباشرة على مجموع ربح التشغيل في IFRS 18 — فتتسق قائمة الدخل وقائمة التدفقات من السطر الأول نفسه.",
      },
      {
        question:
          "A consumer-goods company presents 'adjusted operating profit' in its quarterly investor presentation, excluding 'restructuring and one-off items'. Under IFRS 18, the auditor's first confirmation in the financial statements audit is that:",
        options: [
          "The measure is disclosed in a single MPM note with an item-by-item reconciliation to the nearest IFRS subtotal, including the tax and NCI effect of each adjustment",
          "The measure is removed from the investor presentation",
          "The measure is redefined to equal IFRS 18 operating profit",
          "The auditor expresses a separate conclusion on the presentation inside the same opinion",
        ],
        correctIndex: 0,
        explanation:
          "MPMs survive — they are management's view — but the single note, the reconciliation, the tax/NCI effects and the not-necessarily-comparable statement become audited financial-statement content.",
        questionAr:
          "تعرض شركة سلع استهلاكية «ربح التشغيل المعدل» في عرضها الربع سنوي للمستثمرين مستبعدة «إعادة الهيكلة والبنود لمرة واحدة». بموجب IFRS 18، أول ما يتحقق منه المراجع في مراجعة القوائم المالية أن:",
        optionsAr: [
          "المقياس مفصح عنه في ملاحظة MPM واحدة مع مطابقة بندًا بندًا إلى أقرب مجموع IFRS، بأثر الضريبة والأقلية لكل تعديل",
          "المقياس محذوف من عرض المستثمرين",
          "المقياس معاد تعريفه ليساوي ربح التشغيل وفق IFRS 18",
          "يُبدى المراجع استنتاجًا منفصلًا عن العرض داخل الرأي ذاته",
        ],
        explanationAr:
          "يبقى المقياس — فهو نظرة الإدارة — لكن الملاحظة الواحدة والمطابقة وأثر الضريبة والأقلية ونص عدم قابلية المقارنة تصبح محتوى قوائم مالية مراجَعًا.",
      },
      {
        question:
          "A Cairo holding company asks whether its wholly-owned trading subsidiary can apply IFRS 19 in its separate financial statements. The subsidiary is unlisted and holds no assets in a fiduciary capacity; the parent publishes IFRS consolidated statements. The correct answer:",
        options: [
          "Yes — eligibility is met, so the subsidiary may use IFRS 19's reduced disclosures while keeping full IFRS recognition, measurement and presentation",
          "Yes — and it may also simplify recognition and measurement for its financial instruments",
          "No — IFRS 19 is available only to listed subsidiaries",
          "No — IFRS 19 applies only to consolidated statements",
        ],
        correctIndex: 0,
        explanation:
          "Both limbs of the eligibility test are met: no public accountability at the subsidiary, an IFRS-publishing parent. IFRS 19 reduces disclosure only — recognition, measurement and presentation remain full IFRS.",
        questionAr:
          "شركة قابضة قاهرية تسأل إن كان لشركتها التابعة التجارية الكاملة تطبيق IFRS 19 في قوائمها المالية المستقلة. التابعة غير مدرجة ولا تحتفظ بأصول بالوكالة، والأم تنشر قوائم موحدة وفق IFRS. الجواب الصحيح:",
        optionsAr: [
          "نعم — استُوفت الأهلية، فلها استخدام إفصاحات IFRS 19 المخففة مع إبقاء الاعتراف والقياس والعرض IFRS كاملًا",
          "نعم — ولها أيضًا تبسيط الاعتراف والقياس لأدواتها المالية",
          "لا — IFRS 19 متاح للشركات المدرجة فقط",
          "لا — IFRS 19 يخص القوائم الموحدة فقط",
        ],
        explanationAr:
          "شعبتا اختبار الأهلية متحققتان: لا مسؤولية جمهورية على التابعة، وأم تنشر IFRS. وIFRS 19 يخفض الإفصاح وحده — فالاعتراف والقياس والعرض يبقون IFRS كاملًا.",
      },
      {
        question:
          "During the FY2026 audit (fieldwork March 2027) of a calendar-year listed Egyptian group applying IFRS 18 from FY2027, the most appropriate transition-readiness work includes:",
        options: [
          "Reviewing the draft IFRS 18 category mapping and a dual-run of the FY2026 income statement, and flagging covenant definitions keyed to old subtotals",
          "Restating the FY2026 published statements to IFRS 18 and issuing a revised auditor's report on them",
          "Applying IFRS 18 presentation within the FY2026 audit report itself",
          "Nothing — IFRS 18 only matters for the FY2028 audit season",
        ],
        correctIndex: 0,
        explanation:
          "Readiness work in the last IAS 1 year: mapping review, dual-run, disclosure-gap and covenant scanning. The FY2026 statements remain IAS 1-based — but they become the restated comparatives a year later.",
        questionAr:
          "أثناء مراجعة عام 2026 (عمل ميداني في مارس 2027) لمجموعة مصرية مدرجة سنتها الميلادية ستطبق IFRS 18 من 2027، أنسب أعمال جاهزية الانتقال أن تشمل:",
        optionsAr: [
          "مراجعة مسودة خريطة فئات IFRS 18 وتشغيلًا مزدوجًا لقائمة دخل 2026، ورصد تعريفات التعهدات المربوطة بالمجاميع القديمة",
          "إعادة عرض قوائم 2026 المنشورة وفق IFRS 18 وإصدار تقرير مراجعة منقح عليها",
          "تطبيق عرض IFRS 18 داخل تقرير المراجعة على قوائم 2026 ذاتها",
          "لا شيء — فشأن IFRS 18 موسم مراجعة 2028 فقط",
        ],
        explanationAr:
          "الجاهزية في سنة IAS 1 الأخيرة: مراجعة الربط والتشغيل المزدوج ومسح فجوات الإفصاح والتعهدات. فقوائم 2026 تبقى على IAS 1 — لكنها أرقام المقارنة التي ستُعاد صياغتها بعد عام.",
      },
    ],
  },
}
