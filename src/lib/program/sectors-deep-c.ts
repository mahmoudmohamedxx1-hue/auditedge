import type { SectorDeepDive } from "./sectors-types"

/** Sector Risk Library — deep dives, part C: property, healthcare, tech, telecom & energy. */

export const SECTORS_DEEP_C: Record<string, SectorDeepDive> = {
  /* ================================================================ */
  /* REAL ESTATE                                                      */
  /* ================================================================ */
  realestate: {
    estimates: [
      {
        area: { en: "Revenue recognition on off-plan sales (IFRS 15)", ar: "الاعتراف بالإيراد في البيع على الخارطة" },
        why: {
          en: "Developers recognizing over time must prove the customer controls the unit as it is built or that it is customized; otherwise point-in-time on handover applies — a swing that moves entire years of revenue. Egyptian installment plans complicate the timing test.",
          ar: "يتعين على المطورين المعترفين بالإيراد بمرور الوقت إثبات أن العميل يسيطر على الوحدة أثناء بنائها أو أنها مخصصة له؛ وإلا طبق الاعتراف لحظة التسليم — تحول يحرك إيراد سنوات كاملة. وتعقّد خطط التقسيط المصرية اختبار التوقيت.",
        },
        ref: "IFRS 15 / EAS 48 · ISA 540 (Revised)",
      },
      {
        area: { en: "Inventory (land & units) at lower of cost / NRV", ar: "المخزون (أراضٍ ووحدات) بالأقل من التكلفة أو صافي القيمة" },
        why: {
          en: "Land banks held for years at historical EGP cost look cheap against today's prices — but unsold finished units in a stalled market must go to NRV. The slow-moving-unit provision is where judgment bites.",
          ar: "البنوك الأرضية المحتفظ بها سنوات بتكلفة تاريخية تبدو رخيصة بأسعار اليوم — لكن الوحدات المكتملة غير المباعة في سوق متعثرة تذهب إلى صافي القيمة البيعية. ومخصص الوحدات بطيئة الحركة هو موضع الحكم.",
        },
        ref: "IAS 2 · ISA 540 (Revised)",
      },
      {
        area: { en: "Estimated costs to complete projects", ar: "التكاليف المقدرة حتى إتمام المشروعات" },
        why: {
          en: "Over-time revenue depends on estimated remaining construction cost; underestimating it pulls tomorrow's loss into today's margin. Every cost line (finishing, infrastructure, utilities hookup) is an estimate.",
          ar: "يعتمد الإيراد بمرور الوقت على التكلفة الإنشائية المتبقية المقدرة؛ وتبخيسها يسحب خسارة الغد إلى هامش اليوم. وكل بند تكلفة (تشطيب، بنية أساسية، توصيل مرافق) تقدير.",
        },
        ref: "IFRS 15 · ISA 540 (Revised)",
      },
    ],
    goingConcern: [
      {
        en: "Presales-to-delivery cash bridge: collections must fund construction on every project site.",
        ar: "جسر النقد من البيع المسبق إلى التسليم: يجب أن تمول التحصيلات الإنشاء في كل موقع.",
      },
      {
        en: "Construction-cost inflation repricing contractor agreements mid-project.",
        ar: "تضخم تكاليف الإنشاء يعيد تسعير عقود المقاولين منتصف المشروع.",
      },
      {
        en: "Customer-default rates on installment plans rising with household squeeze.",
        ar: "معدلات تعثر العملاء على خطط التقسيط ترتفع مع الضغط على الأسر.",
      },
      {
        en: "Debt maturity towers against refinancing terms in a tight EGP credit market.",
        ar: "أبراج استحقاق الدين مقابل شروط إعادة التمويل في سوق ائتمان بالجنيه ضيقة.",
      },
    ],
    analytics: [
      {
        en: "Contract-by-contract profit analytics: cumulative catch-up adjustments clustered at year-end.",
        ar: "تحليلات الربح عقدًا بعقد: تسويات التراكمية المتجمعة في نهاية السنة.",
      },
      {
        en: "Down-payment-to-construction-progress matching: collections running behind progress flags liquidity risk.",
        ar: "مطابقة الدفوعات المقدمة بتقدم الإنشاء: تحصيلات متأخرة عن التقدم ترشد إلى خطر سيولة.",
      },
      {
        en: "Unit-registry to GL revenue reconciliation by project phase.",
        ar: "مطابقة سجل الوحدات مع إيراد الأستاذ لكل مرحلة مشروع.",
      },
      {
        en: "JE testing on land-cost capitalizations and infrastructure cost allocations between phases.",
        ar: "اختبار القيود على رسملة تكاليف الأراضي وتوزيع تكاليف البنية الأساسية بين المراحل.",
      },
    ],
    inquiries: [
      {
        en: "For over-time projects, what evidence supports the customer-control or customization test?",
        ar: "للمشروعات ذات الإيراد بمرور الوقت، ما الدليل على اختبار سيطرة العميل أو التخصيص؟",
      },
      {
        en: "Which finished units are unsold beyond twelve months, and what NRV test was applied to them?",
        ar: "أي الوحدات المكتملة لم تُبع بعد اثني عشر شهرًا، وأي اختبار لصافي القيمة طُبق عليها؟",
      },
      {
        en: "How are infrastructure and utilities costs allocated between phases, and who approves the keys?",
        ar: "كيف توزع تكاليف البنية الأساسية والمرافق بين المراحل، ومن يعتمد مفاتيح التوزيع؟",
      },
      {
        en: "What is the collections-aging on installments, and how do down-payment forfeitures work?",
        ar: "ما أعمار تحصيلات الأقساط، وكيف تعمل مصادرة الدفوعات المقدمة؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Recalculate over-time revenue on the two largest projects including the cost-to-complete estimate and cumulative catch-up.",
          ar: "أعد حساب الإيراد بمرور الوقت في أكبر مشروعين شاملًا تقدير التكلفة حتى الإتمام والتسوية التراكمية.",
        },
        ref: "IFRS 15 · ISA 540 (Revised)",
      },
      {
        text: {
          en: "Physically inspect completed unsold units and compare condition to the NRV assumptions.",
          ar: "معاينة مادية للوحدات المكتملة غير المباعة ومقارنة حالتها بافتراضات صافي القيمة.",
        },
        ref: "ISA 501 · IAS 2",
      },
    ],
    extraFraud: [
      {
        en: "Fake off-plan contracts with related parties to recognize revenue, cancelled quietly post-year-end.",
        ar: "عقود بيع على الخارطة وهمية مع أطراف ذات علاقة لاعتراف بإيراد، تُلغى بهدوء بعد نهاية السنة.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Customer loans & financing receivables", ar: "قروض العملاء والذمم التمويلية" },
        detail: {
          en: "Developers financing customer installments hold financial assets under IFRS 9, not trade receivables — ECL and derecognition rules apply differently, and the distinction is often missed.",
          ar: "المطورون الذين يمولون أقساط العملاء يحملون أصولًا مالية وفق IFRS 9 لا ذمم تجارية — قواعد الخسائر المتوقعة وإلغاء الاعتراف تختلف، والتمييز يفوت كثيرًا.",
        },
        ref: "IFRS 9 / EAS 47",
      },
    ],
    extraRatios: [
      {
        name: { en: "Presales coverage of remaining cost", ar: "تغطية البيع المسبق للتكلفة المتبقية" },
        benchmark: "Contracted presale collections ÷ remaining construction cost; <100% needs funding",
        redFlag: {
          en: "Coverage below 100% on multiple projects simultaneously — one refinancing event from distress.",
          ar: "تغطية تحت 100% في عدة مشروعات معًا — على مسافة حدث تمويل واحد من الضيق.",
        },
      },
    ],
    extraKams: [
      {
        en: "Revenue recognition timing on real-estate units and estimated costs to complete.",
        ar: "توقيت الاعتراف بإيراد الوحدات العقارية والتكاليف المقدرة حتى الإتمام.",
      },
    ],
    extraPitfalls: [
      {
        en: "Treating all presales as revenue drivers without reading each contract's control-transfer terms.",
        ar: "معاملة كل البيع المسبق كمولد للإيراد دون قراءة شروط انتقال السيطرة في كل عقد.",
      },
    ],
  },

  /* ================================================================ */
  /* HEALTHCARE                                                       */
  /* ================================================================ */
  healthcare: {
    estimates: [
      {
        area: { en: "Patient-receivable collectability", ar: "قابلية تحصيل ذمم المرضى" },
        why: {
          en: "A blend of private insurers (reimbursement disputes, coding rejections), cash patients and government programs (delayed payments) makes ECL segmentation essential. The uninsured-emergency allowance is the sensitive estimate.",
          ar: "مزيج من شركات التأمين الخاصة (منازعات وصرف مرفوض) ومرضى نقدي وبرامج حكومية (مدفوعات متأخرة) يجعل تجزئة الخسائر المتوقعة حتمية. ومخصص الطوارئ غير المؤمن عليها هو التقدير الأشد حساسية.",
        },
        ref: "IFRS 9 / EAS 47 · ISA 540 (Revised)",
      },
      {
        area: { en: "Medical-malpractice provisions (IAS 37)", ar: "مخصصات سوء الممارسة الطبية" },
        why: {
          en: "Open claims develop over years; the provision is actuarial judgment on incident reports, legal opinions and settlement history. Under-provisioning is systematic where the claims register is incomplete.",
          ar: "تتطور المطالبات المفتوحة سنوات؛ والمخصص حكم اكتواري على تقارير الحوادث وآراء قانونية وتاريخ التسويات. والتبخيس منهجي حيث سجل المطالبات ناقص.",
        },
        ref: "IAS 37 · ISA 540 (Revised)",
      },
      {
        area: { en: "Equipment & building useful lives", ar: "الأعمار الإنتاجية للمعدات والمباني" },
        why: {
          en: "MRI and linear-accelerator machines are depreciated over lives set by utilization and technology cycles — extending lives by two years materially lifts margin in a thin-margin hospital.",
          ar: "تُستهلك أجهزة الرنين والتسريع الخطي على أعمار تحددها الاستخدامة ودورات التقنية — مد العمر عامين يرفع الهامش جوهريًا في مستشفى هامشه رقيق.",
        },
        ref: "IAS 16 · ISA 540 (Revised)",
      },
    ],
    goingConcern: [
      {
        en: "Payer-mix deterioration: government-program payment delays funding private-patient working capital.",
        ar: "تدهور مزيج الدافعين: تأخر مدفوعات البرامج الحكومية يمول رأس مال عامل للمرضى الخاصين.",
      },
      {
        en: "Medical-staff cost inflation (EGP devaluation pressure on dollar-linked packages).",
        ar: "تضخم تكاليف الطواقم الطبية (ضغط انخفاض الجنيه على حزم مرتبطة بالدولار).",
      },
      {
        en: "Imported consumables and reagents priced in hard currency against regulated local fees.",
        ar: "مستهلكات وكواشف مستوردة بعملة صعبة مقابل رسوم محلية منظمة.",
      },
      {
        en: "Debt-service on equipment financing against occupancy rates.",
        ar: "خدمة دين تمويل المعدات مقابل معدلات الإشغال.",
      },
    ],
    analytics: [
      {
        en: "Claim-denial analytics by insurer: denial rates, aging and write-off patterns expose both revenue risk and ECL gaps.",
        ar: "تحليلات رفض المطالبات لكل شركة تأمين: معدلات الرفض والأعمار وأنماط الإعدام تكشف خطر الإيراد وفجوات المخصص معًا.",
      },
      {
        en: "Procedure-volume to revenue-per-case analytics: outlier revenue per case flags upcoding.",
        ar: "تحليلات حجم العمليات مقابل الإيراد لكل حالة: حالات إيراد شاذة ترشد إلى ترميز مبالغ فيه.",
      },
      {
        en: "Pharmacy inventory consumption vs. procedure volumes regression.",
        ar: "انحدار استهلاك مخزون الصيدلية مقابل أحجام العمليات.",
      },
      {
        en: "JE testing on revenue-cycle credit adjustments and contractual allowances.",
        ar: "اختبار القيود على تسويات الدائن في دورة الإيراد والتنزيلات التعاقدية.",
      },
    ],
    inquiries: [
      {
        en: "How are contractual allowances per insurer estimated, and how often reconciled to actual remittances?",
        ar: "كيف تقدر التنزيلات التعاقدية لكل شركة تأمين، وكم مرة تطابق مع التحويلات الفعلية؟",
      },
      {
        en: "Walk us through the open-claims register — how many claims lack legal opinion?",
        ar: "اشرح لنا سجل المطالبات المفتوحة — كم مطالبة بلا رأي قانوني؟",
      },
      {
        en: "What payer-mix shift happened this year, and how did it change allowance rates?",
        ar: "أي تحول في مزيج الدافعين حدث هذا العام، وكيف غير نسب المخصصات؟",
      },
      {
        en: "How are equipment useful lives benchmarked — manufacturer guidance or hospital experience?",
        ar: "كيف تقارن الأعمار الإنتاجية للمعدات — إرشادات المصنع أم خبرة المستشفى؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Reperform ECL segmentation on the patient receivables ledger by payer class and age.",
          ar: "أعد تنفيذ تجزئة الخسائر المتوقعة على أستاذ ذمم المرضى حسب فئة الدافع والعمر.",
        },
        ref: "IFRS 9 · ISA 540 (Revised)",
      },
      {
        text: {
          en: "Review legal files on the ten largest malpractice claims and test the provision against settlement trajectories.",
          ar: "راجع الملفات القانونية لأكبر عشر مطالبات ممارسة واختبر المخصص مقابل مسارات التسوية.",
        },
        ref: "IAS 37 · ISA 500",
      },
    ],
    extraFraud: [
      {
        en: "Ghost patient billing to insurance funds — invoices for treatments never delivered.",
        ar: "فواتير مرضى وهميين لصناديق التأمين — علاج لم يقدم قط.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Capitation & bundled-fee arrangements", ar: "ترتيبات رأس المال والرسوم المجمعة" },
        detail: {
          en: "Fixed per-member fees create a contract-liability (deferred revenue) that must be released on service delivery — unrecognized liability sits in the balance sheet and pops out as revenue.",
          ar: "الرسوم الثابتة لكل عضو تنشئ التزامًا تعاقديًا (إيراد مؤجل) يجب تحريره عند تقديم الخدمة — الالتزام غير المعترف به يقبع في الميزانية ويقفز إيرادًا.",
        },
        ref: "IFRS 15 / EAS 48",
      },
    ],
    extraRatios: [
      {
        name: { en: "Collection rate by payer", ar: "معدل التحصيل لكل دافع" },
        benchmark: "Cash collected ÷ gross charges by payer class; private insurers typically 75–90%",
        redFlag: {
          en: "One payer's collection rate collapsing while its revenue share grows — concentration meets deterioration.",
          ar: "انهيار معدل تحصيل دافع واحد بينما تنمو حصته من الإيراد — تركز يلتقي تدهورًا.",
        },
      },
    ],
    extraKams: [
      {
        en: "Valuation of patient receivables and adequacy of the medical-malpractice provision.",
        ar: "تقييم ذمم المرضى وكفاية مخصص سوء الممارسة الطبية.",
      },
    ],
    extraPitfalls: [
      {
        en: "Testing the hospital's ledger while skipping the revenue-cycle system — the two reconcile, but only at the summary level where fraud hides.",
        ar: "اختبار أستاذ المستشفى وتجاهل نظام دورة الإيراد — يتطابقان لكن عند مستوى الإجمالي حيث يختبئ الاحتيال.",
      },
    ],
  },

  /* ================================================================ */
  /* TECHNOLOGY & SOFTWARE                                            */
  /* ================================================================ */
  technology: {
    estimates: [
      {
        area: { en: "Capitalized development costs (IAS 38)", ar: "تكاليف التطوير المرسبة" },
        why: {
          en: "The research/development boundary and technical-feasibility gate decide what hits P&L vs. the balance sheet; amortization lives (2–5 years?) drive margin. Egyptian software houses capitalize aggressively around funding rounds.",
          ar: "حدود البحث والتطوير وبوابة الجدوى الفنية تحدد ما يذهب للقوائم مقابل الميزانية؛ وأعمار الإطفاء تحرك الهامش. وترسم شركات البرمجيات المصرية بشراهة حول جولات التمويل.",
        },
        ref: "IAS 38 · ISA 540 (Revised)",
      },
      {
        area: { en: "SaaS contract revenue & deferred income", ar: "إيراد عقود الخدمات السحابية والدخل المؤجل" },
        why: {
          en: "Subscription allocation across performance obligations (platform, support, updates), variable usage fees and setup-fee amortization are estimates that concentrate revenue timing risk at renewal dates.",
        ar: "توزيع الاشتراك على الالتزامات (منصة ودعم وتحديثات) ورسوم الاستخدام المتغيرة وإطفاء رسوم التجهيز تقديرات تركز خطر توقيت الإيراد عند تواريخ التجديد.",
        },
        ref: "IFRS 15 / EAS 48 · ISA 540 (Revised)",
      },
      {
        area: { en: "Goodwill & intangibles impairment (IAS 36)", ar: "انخفاض قيمة الشهرة والأصول غير الملموسة" },
        why: {
          en: "Acquired tech companies carry goodwill tested against cash-generating-unit forecasts; growth-rate and discount-rate assumptions near the boundary flip impairment on and off. Compare forecast vs. actual for the last three years.",
          ar: "تحمل الشركات التقنية المقتناة شهرة تختبر بتوقعات وحدة النقد؛ وافتراضات النمو والخصم قرب الحافة تقلب الانخفاض تشغيلًا وإيقافًا. قارن التوقع بالفعلي لآخر ثلاث سنوات.",
        },
        ref: "IAS 36 · ISA 540 (Revised)",
      },
    ],
    goingConcern: [
      {
        en: "Runway: monthly burn vs. cash and the next funding milestone.",
        ar: "المدرج: الحرق الشهري مقابل النقد و المحطة التمويلية القادمة.",
      },
      {
        en: "Customer-concentration on two or three enterprise accounts.",
        ar: "تركز العملاء في حسابين أو ثلاثة مؤسسية.",
      },
      {
        en: "Cloud-infrastructure costs in hard currency against EGP-denominated contracts.",
        ar: "تكاليف البنية السحابية بعملة صعبة مقابل عقود بالجنيه.",
      },
      {
        en: "Talent retention costs — salary dollarization pressure on the engineering payroll.",
        ar: "تكاليف الاحتفاظ بالكفاءات — ضغط الدولرة على رواتب الهندسة.",
      },
    ],
    analytics: [
      {
        en: "Capitalization-ratio analytics: capitalized vs. expensed R&D by quarter against headcount growth.",
        ar: "تحليلات نسبة الرسملة: المرسب مقابل المرسمل للبحث والتطوير ربعيًا مقابل نمو العمالة.",
      },
      {
        en: "Cohort-based net revenue retention: logo churn hidden inside flat total revenue.",
        ar: "الاحتفاظ الصافي بالإيراد بالأفواج: فقدان عملاء يحجبه إيراد إجمالي ثابت.",
      },
      {
        en: "Deferred-revenue release curve vs. contract start dates — straight-lining hides usage reality.",
        ar: "منحنى تحرير الدخل المؤجل مقابل تواريخ بدء العقود — التوزيع الخطي يخفي حقيقة الاستخدام.",
      },
      {
        en: "JE testing on capitalization entries — each should map to a time-sheet and a feasibility-approved project.",
        ar: "اختبار القيود على بنود الرسملة — كل قيد يفترض أن يقابل كشف وقت ومشروعًا اجتاز بوابة الجدوى.",
      },
    ],
    inquiries: [
      {
        en: "Show the technical-feasibility documentation for every capitalized project — who approved it and when?",
        ar: "أظهر وثائق الجدوى الفنية لكل مشروع مرسب — من اعتمدها ومتى؟",
      },
      {
        en: "What is the amortization life per product line, and what utilization evidence supports it?",
        ar: "ما عمر الإطفاء لكل خط منتج، وما دليل الاستخدام المساند؟",
      },
      {
        en: "How many months of runway at current burn, and what triggers the contingency plan?",
        ar: "كم شهر مدرجًا بالحرق الحالي، وما الذي يحرك خطة الطوارئ؟",
      },
      {
        en: "Which enterprise contracts renew in the next two quarters, and at what renegotiation risk?",
        ar: "أي العقود المؤسسية تجدد في الربعين القادمين، وبأي خطر إعادة تفاوض؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Test capitalized development costs to time-sheets, approved feasibility studies and the capitalization policy boundary.",
          ar: "اختبر تكاليف التطوير المرسبة بكشوف الوقت ودراسات الجدوى المعتمدة وحدود سياسة الرسملة.",
        },
        ref: "IAS 38 · ISA 500",
      },
      {
        text: {
          en: "Reperform the goodwill impairment test's forecast vs. actual history for each CGU and challenge growth in perpetuity.",
          ar: "أعد تنفيذ تاريخ التوقع مقابل الفعلي في اختبار انخفاض الشهرة لكل وحدة وتحدى النمو الأبدي.",
        },
        ref: "IAS 36 · ISA 540 (Revised)",
      },
    ],
    extraFraud: [
      {
        en: "Round-trip revenue: related-party 'customers' paying inflated invoices funded by the company itself.",
        ar: "إيراد متداول: «عملاء» من الأطراف ذات العلاقة يدفعون فواتير منفوخة تمولها الشركة نفسها.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Open-source license obligations", ar: "التزامات التراخيص المفتوحة" },
        detail: {
          en: "Copyleft components (AGPL) inside proprietary products create legal contingencies — a disclosure and provision issue most tech audits skip.",
          ar: "مكونات الترخيص المتبادل (AGPL) داخل منتجات مملوكة تنشئ التزامات قانونية محتملة — مسألة إفصاح ومخصص تتخطاها أغلب مراجعات التقنية.",
        },
        ref: "IAS 37 · ISA 250",
      },
    ],
    extraRatios: [
      {
        name: { en: "Net revenue retention (NRR)", ar: "الاحتفاظ الصافي بالإيراد" },
        benchmark: "Current-year revenue from last year's customers ÷ their last-year revenue; healthy SaaS >110%",
        redFlag: {
          en: "NRR below 100% offset by new logos — a treadmill that hides product-market decay.",
          ar: "احتفاظ دون 100% يعوض بعملاء جدد — جري في المكان يخفي تدهور ملاءمة المنتج للسوق.",
        },
      },
    ],
    extraKams: [
      {
        en: "Capitalization of development costs and recoverability of capitalized intangibles and goodwill.",
        ar: "رسملة تكاليف التطوير وقابلية استرداد الأصول غير الملموسة والشهرة المرسبة.",
      },
    ],
    extraPitfalls: [
      {
        en: "Reading cap-table and funding-round jargon without re-perning the revenue that justifies it.",
        ar: "قراءة مصطلحات جدول الملكية وجولات التمويل دون إعادة اختبار الإيراد الذي يسوغها.",
      },
    ],
  },

  /* ================================================================ */
  /* TELECOM                                                          */
  /* ================================================================ */
  telecom: {
    estimates: [
      {
        area: { en: "Revenue from bundles & handset financing", ar: "إيراد الحزم وتمويل الأجهزة" },
        why: {
          en: "A single price covers service, handset and content — allocation on stand-alone selling prices is estimate-heavy, and handset financing creates a financing component. Revenue timing for prepaid vs. postpaid follows different clocks.",
          ar: "سعر واحد يغطي الخدمة والجهاز والمحتوى — والتوزيع على أسعار البيع المنفصلة كثيف التقدير، وتمويل الأجهزة ينشئ عنصر تمويل. وتوقيت الإيراد مسبق الدفع يختلف عن لاحقه.",
        },
        ref: "IFRS 15 / EAS 48 · ISA 540 (Revised)",
      },
      {
        area: { en: "Spectrum licenses & network asset lives", ar: "تراخيص الطيف وأعمار أصول الشبكة" },
        why: {
          en: "Spectrum rights and tower/equipment lives (especially with technology sunsets like 3G shutdown) drive depreciation and impairment — the useful-life review is annual judgment with P&L impact measured in billions of EGP at scale.",
          ar: "حقوق الطيف وأعمار الأبراج والمعدات (خاصة مع إغلاق تقنيات كـ3G) تقود الاستهلاك والانخفاض — مراجعة العمر حكم سنوي بأثر بالمليارات في الشركات الكبرى.",
        },
        ref: "IAS 8 · IAS 16 · IFRS 16 · ISA 540 (Revised)",
      },
      {
        area: { en: "ECL on postpaid & dealer balances", ar: "الخسائر المتوقعة على لاحق الدفع وأرصدة الوكلاء" },
        why: {
          en: "Postpaid billing cycles, dealer commissions claw-back and device installments create receivables with credit characteristics of consumer finance; segmentation by product and vintage is the minimum defensible granularity.",
          ar: "دورات فوترة لاحق الدفع واسترداد عمولات الوكلاء وأقساط الأجهزة تنشئ ذممًا بخصائص ائتمانية للتمويل الاستهلاكي؛ والتجزئة بالمنتج والتوليد هي الحد الأدنى المقبول.",
        },
        ref: "IFRS 9 / EAS 47",
      },
    ],
    goingConcern: [
      {
        en: "Debt-service in hard currency against EGP-denominated service revenue.",
        ar: "خدمة دين بعملة صعبة مقابل إيراد خدمات بالجنيه.",
      },
      {
        en: "Spectrum-fee installment schedule vs. operating cash generation.",
        ar: "جدول أقساط رسوم الطيف مقابل التوليد النقدي التشغيلي.",
      },
      {
        en: "Tower-sharing and infrastructure cost pressures from energy inflation.",
        ar: "ضغوط مشاركة الأبراج وتكاليف البنية من تضخم الطاقة.",
      },
      {
        en: "Regulatory price interventions (termination rates, tariff caps) compressing margins.",
        ar: "تدخلات تنظيمية في الأسعار (رسوم الربط، سقوف التعريفات) تضغط الهوامش.",
      },
    ],
    analytics: [
      {
        en: "Revenue-assurance analytics: switch-record to billing-engine to GL matching on call/data volumes.",
        ar: "تحليلات ضمان الإيراد: مطابقة سجلات البدائل بمحرك الفوترة فالأستاذ لأحجام المكالمات والبيانات.",
      },
      {
        en: "Dealer-commission claw-back analytics vs. subscriber churn cohorts.",
        ar: "تحليلات استرداد عمولات الوكلاء مقابل أفواج فقدان المشتركين.",
      },
      {
        en: "Prepaid breakage (unused credit) analytics — recognition assumptions vs. actual usage decay.",
        ar: "تحليلات رصيد مسبق الدفع غير المستخدم — افتراضات الاعتراف مقابل تحلل الاستخدام الفعلي.",
      },
      {
        en: "JE testing on manually-posted interconnect settlements with other operators.",
        ar: "اختبار القيود على تسويات الربط اليدوية مع المشغلين الآخرين.",
      },
    ],
    inquiries: [
      {
        en: "How are stand-alone selling prices determined for each bundle component, and who validates them?",
        ar: "كيف تحدد أسعار البيع المنفصلة لكل مكون حزمة، ومن يتحقق منها؟",
      },
      {
        en: "What triggered the last useful-life review for network assets, and what did it change?",
        ar: "ما الذي حرك آخر مراجعة عمر لأصول الشبكة، وماذا غيرت؟",
      },
      {
        en: "How much interconnect receivable is disputed with other operators, and for how long?",
        ar: "كم مستحق الربط المتنازع عليه مع المشغلين الآخرين، ومنذ متى؟",
      },
      {
        en: "What is the FX-mismatch between debt service and revenue, and how is it hedged?",
        ar: "ما عدم التطابق العملتي بين خدمة الدين والإيراد، وكيف يتحوط؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Reperform bundle-allocation on a sample of postpaid plans, testing stand-alone selling prices and the financing component.",
          ar: "أعد تنفيذ توزيع الحزم على عينة خطط لاحق الدفع باختبار أسعار البيع المنفصلة وعنصر التمويل.",
        },
        ref: "IFRS 15 · ISA 540 (Revised)",
      },
      {
        text: {
          en: "Obtain NTRA filings and reconcile regulatory-fee accruals to license terms.",
          ar: "احصل على ملفات الجهاز القومي لتنظيم الاتصالات وطابق مخصصات الرسوم التنظيمية بشروط التراخيص.",
        },
        ref: "ISA 250 · NTRA rules",
      },
    ],
    extraFraud: [
      {
        en: "Sim-box fraud revenue leakage booked as expense — international termination revenue intercepted off-network.",
        ar: "تسريب إيراد صناديق الشريحة يُسجل كمصروف — إيراد إنهاء دولي يعترض خارج الشبكة.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Fiber & towers: lease vs. service concession", ar: "الألياف والأبراج: إيجار مقابل امتياز خدمة" },
        detail: {
          en: "Passive infrastructure built for government or utility clients may fall under IFRIC 12 service-concession accounting (intangible/financial asset) instead of the usual lease or fixed-asset models — the classification changes revenue, financing and impairment entirely.",
          ar: "البنية السلبية المنشأة لعملاء حكوميين أو مرافق قد تدخل محاسبة امتياز الخدمة (IFRIC 12) كأصل غير ملموس أو مالي بدل نماذج الإيجار أو الأصول الثابتة — والتصنيف يغير الإيراد والتمويل والانخفاض كليًا.",
        },
        ref: "IFRIC 12 · IFRS 16",
      },
    ],
    extraRatios: [
      {
        name: { en: "ARPU (average revenue per user)", ar: "متوسط الإيراد للمستخدم" },
        benchmark: "Total service revenue ÷ average subscribers; track by prepaid/postpaid mix",
        redFlag: {
          en: "ARPU rising while subscriber base falls — harvesting a shrinking estate.",
          ar: "المتوسط يرتفع وقاعدة المشتركين تتراجع — حصاد أرض تنكمش.",
        },
      },
    ],
    extraKams: [
      {
        en: "Allocation of bundled revenue and estimated useful lives of network and spectrum assets.",
        ar: "توزيع إيراد الحزم والأعمار المقدرة لأصول الشبكة والطيف.",
      },
    ],
    extraPitfalls: [
      {
        en: "Auditing billing summaries without touching the switch records — telecom evidence starts where the call starts.",
        ar: "مراجعة ملخصات الفوترة دون لمس سجلات المقاسم — دليل الاتصالات يبدأ حيث تبدأ المكالمة.",
      },
    ],
  },

  /* ================================================================ */
  /* ENERGY & UTILITIES                                               */
  /* ================================================================ */
  energy: {
    estimates: [
      {
        area: { en: "Decommissioning & well-closure provisions", ar: "مخصصات تفكيك المنشآت وإغلاق الآبار" },
        why: {
          en: "Offshore platforms, wells and power-plant restoration obligations are discounted at a risk-adjusted rate with annual unwinding — both the cost estimate and the rate live for decades. Egypt's East-Mediterranean gas fields carry provisions of this class.",
          ar: "منصات بحرية وآبار والتزامات إعادة حال محطات تقاس بسعر خصم معدل بالمخاطرة مع فائدة تراكمية — التقدير والسعر يعيشان عقودًا. وتحمل حقول الغاز شرق المتوسط مخصصات من هذه الفئة.",
        },
        ref: "IAS 16 · IAS 37 · IFRIC 1 · ISA 540 (Revised)",
      },
      {
        area: { en: "Oil & gas reserves in impairment testing", ar: "الاحتياطيات في اختبار الانخفاض" },
        why: {
          en: "Reserve reports (1P/2P) drive E&P cash-flow forecasts; a reserve downgrade forces impairment. The independent reservoir engineer's report is specialist evidence under ISA 620 — assess its scope, not just its number.",
          ar: "تقارير الاحتياطي تقود توقعات التدفق لشركات الاستكشاف والإنتاج؛ وخفض الاحتياطي يفرض انخفاضًا. وتقرير مهندس المكمن المستقل دليل خبير وفق ISA 620 — قيّم نطاقه لا رقمه فقط.",
        },
        ref: "IAS 36 · ISA 620",
      },
      {
        area: { en: "PPA & take-or-pay contract provisions", ar: "اتفاقيات شراء الطاقة والعقود الملزمة بالشراء" },
        why: {
          en: "Take-or-pay capacity charges and power-purchase-agreement tariffs with availability penalties create onerous-contract assessments whenever market prices move against the contract.",
        ar: "رسوم السعة الملزمة بالشراء وتعريفات اتفاقيات الشراء بغرامات الإتاحة تنشئ تقييمات عقود مرجحة للخسارة كلما تحركت الأسعار ضد العقد.",
        },
        ref: "IAS 37 · ISA 540 (Revised)",
      },
    ],
    goingConcern: [
      {
        en: "Receivable from government offtakers — payment delays cascade into supplier and debt-service stress.",
        ar: "مستحقات من مشترين حكوميين — تأخر السداد يتسلسل إلى ضغط موردين وخدمة دين.",
      },
      {
        en: "Fuel-supply security (gas allocation changes) affecting dispatch and availability payments.",
        ar: "أمن إمداد الوقود (تغيير تخصيصات الغاز) يؤثر على التشغيل ومدفوعات الإتاحة.",
      },
      {
        en: "FX mismatch: USD-denominated debt and turbine spares against EGP tariff indexation lags.",
        ar: "عدم تطابق العملة: دين وقطع بالدولار مقابل تعويض تعريفي بالجنيه متأخر.",
      },
      {
        en: "Subsidy-reform trajectory changing the collectability of receivables from public entities.",
        ar: "مسار إصلاح الدعم يغير قابلية تحصيل الذمم من الجهات العامة.",
      },
    ],
    analytics: [
      {
        en: "Metered-volume to billing reconciliation by offtaker; losses (technical vs. commercial) analytics.",
        ar: "مطابقة الأحجام المقاسة بالفوترة لكل مشترٍ؛ وتحليلات الفقد (فني مقابل تجاري).",
      },
      {
        en: "Heat-rate regression: fuel consumed vs. electricity dispatched — deviations expose dispatch-data manipulation.",
        ar: "انحدار المعدل الحراري: وقود مستهلك مقابل كهرباء موزعة — الانحرافات تكشف تلاعبًا في بيانات التشغيل.",
      },
      {
        en: "JE testing on provision unwinding entries and discount-rate changes.",
        ar: "اختبار القيود على الفائدة التراكمية للمخصصات وتغيرات سعر الخصم.",
      },
      {
        en: "Receivable-aging analytics by government entity against historical collection curves.",
        ar: "تحليلات أعمار الذمم لكل جهة حكومية مقابل منحنيات التحصيل التاريخية.",
      },
    ],
    inquiries: [
      {
        en: "What discount rate and cost inflation are embedded in the decommissioning provision, and when were they last reviewed?",
        ar: "أي سعر خصم وتضخم تكاليف داخل مخصص التفكيك، ومتى راجعا آخر مرة؟",
      },
      {
        en: "Which reserve report feeds the impairment model, and what is the reserve engineer's scope of work?",
        ar: "أي تقرير احتياطي يغذي نموذج الانخفاض، وما نطاق عمل مهندس المكمن؟",
      },
      {
        en: "How are take-or-pay shortfalls assessed for onerous contracts, and at what trigger point?",
        ar: "كيف تقيَّم نواقص الالتزام بالشراء للعقود المرجحة، وعند أي عتبة؟",
      },
      {
        en: "What is the aging of government receivables and what collection experience supports their classification?",
        ar: "ما أعمار الذمم الحكومية وأي خبرة تحصيل تسند تصنيفها؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Engage a petroleum/decommissioning specialist (ISA 620) to reperform the provision on the largest field or plant.",
          ar: "استعن بخبير نفط/تفكيك (ISA 620) لإعادة حساب المخصص في أكبر حقل أو محطة.",
        },
        ref: "ISA 620 · ISA 540 (Revised)",
      },
      {
        text: {
          en: "Reconcile metered offtake to invoiced volumes and to cash collected for each government offtaker.",
          ar: "طابق الكميات المقاسة بالمفوتر وبالمحصل لكل مشترٍ حكومي.",
        },
        ref: "ISA 330 · ISA 505",
      },
    ],
    extraFraud: [
      {
        en: "Meter-tampering losses capitalized as network assets; or fuel oil diverted and sold off-books.",
        ar: "خسائر التلاعب بالعدادات ترسب ضمن أصول الشبكة؛ أو وقود يحرف ويباع خارج الدفاتر.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Government-grant accounting for tariff support", ar: "محاسبة المنح الداعمة للتعريفة" },
        detail: {
          en: "Tariff differential support and capacity payments from public funds can be grants (IAS 20), receivables or equity injections — the classification changes both profit and the going-concern narrative.",
          ar: "دعم فروق التعريفة ومدفوعات السعة من أموال عامة قد تكون منحًا (IAS 20) أو ذممًا أو زيادات رأس مال — والتصنيف يغير الربح وسرد الاستمرارية معًا.",
        },
        ref: "IAS 20 · ISA 250",
      },
    ],
    extraRatios: [
      {
        name: { en: "Collection days — government offtakers", ar: "أيام التحصيل — المشترون الحكوميون" },
        benchmark: "Government receivables ÷ annualized billed revenue × 365; Egyptian utilities often 90–240 days",
        redFlag: {
          en: "Days trending up across two years with no provision movement — collectability assumption frozen.",
          ar: "الأيام ترتفع عامين متتاليين بلا حركة مخصص — افتراض التحصيل متجمد.",
        },
      },
    ],
    extraKams: [
      {
        en: "Decommissioning and restoration provisions, and recoverability of receivables from public offtakers.",
        ar: "مخصصات التفكيك وإعادة الحال وقابلية استرداد الذمم من المشترين الحكوميين.",
      },
    ],
    extraPitfalls: [
      {
        en: "Accepting the reserve report's headline number without checking whether the engineer actually visited the asset.",
        ar: "قبول رقم تقرير الاحتياطي الرئيس دون فحص هل زار المهندس الأصل فعلًا.",
      },
    ],
  },
}
