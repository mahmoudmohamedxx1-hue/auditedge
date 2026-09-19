import type { SectorDeepDive } from "./sectors-types"

/** Sector Risk Library — deep dives, part D: logistics, education, tourism, group structures & not-for-profit. */

export const SECTORS_DEEP_D: Record<string, SectorDeepDive> = {
  /* ================================================================ */
  /* LOGISTICS & TRANSPORT                                             */
  /* ================================================================ */
  logistics: {
    estimates: [
      {
        area: { en: "Fleet useful lives & residual values", ar: "الأعمار الإنتاجية للأسطول والقيم المتبقية" },
        why: {
          en: "Trucks, trailers and vessels are depreciated over lives and residuals set by utilization, maintenance regime and resale markets — a one-year life extension on a 500-truck fleet is a material margin decision. Egyptian resale markets are thin and price-volatile.",
          ar: "تُستهلك الشاحنات والمقطورات والسفن على أعمار وقيم متبقية تحددها الاستخدامة ونظام الصيانة وأسواق إعادة البيع — تمديد عمر عام واحد لأسطول 500 شاحنة قرار هامشي جوهري. وأسواق إعادة البيع المصرية رقيقة ومتقلبة الأسعار.",
        },
        ref: "IAS 16 · ISA 540 (Revised)",
      },
      {
        area: { en: "Maintenance-provision estimation", ar: "تقدير مخصص الصيانة" },
        why: {
          en: "Heavy overhauls on engines and vessels are provisioned or depreciated prospectively; splitting routine maintenance (expense) from major inspections (capitalize) is judgment that shifts costs across years.",
          ar: "يُخصص للإصلاحات الشاملة للمحركات والسفن أو تُستهلك مستقبليًا؛ والفصل بين الصيانة الدورية (مصروف) والفحوص الكبرى (رسملة) حكم ينقل التكاليف بين السنوات.",
        },
        ref: "IAS 16 §14 · ISA 540 (Revised)",
      },
      {
        area: { en: "Freight-rate derivatives & fuel surcharges", ar: "مشتقات أسعار الشحن ورسوم الوقود الإضافية" },
        why: {
          en: "Bunker-adjustment and fuel-surcharge formulas pass costs to customers with a lag; embedded derivatives in contracts may require separation. Hedging freight-rate exposure needs effectiveness testing.",
          ar: "صيغ تعويض الوقود تنقل التكلفة للعملاء بتأخير؛ والمشتقات المدمجة في العقود قد تلزم فصلها. والتحوط من أسعار الشحن يحتاج اختبار فاعلية.",
        },
        ref: "IFRS 9 §6 · IFRS 15",
      },
    ],
    goingConcern: [
      {
        en: "Fuel-price pass-through lag when global oil moves faster than surcharge clauses reset.",
        ar: "تأخر نقل أسعار الوقود عندما تتحرك البترول العالمية أسرع من إعادة ضبط بنود التعويض.",
      },
      {
        en: "Customer concentration on a few forwarding or industrial contracts.",
        ar: "تركز العملاء في عقود شحن أو صناعية قليلة.",
      },
      {
        en: "Debt-financed fleet expansion meeting a freight-rate downcycle.",
        ar: "توسع أسطول ممول بالدين يصادف دورة هبوط لأسعار الشحن.",
      },
      {
        en: "Cross-border route disruptions (Red Sea rerouting) raising insurance and transit costs.",
        ar: "تعطلات المسارات العابرة (تحويلات البحر الأحمر) ترفع تكاليف التأمين والعبور.",
      },
    ],
    analytics: [
      {
        en: "Revenue per available truck-day vs. fuel cost per km regression — margin decay shows up here first.",
        ar: "انحدار الإيراد لكل يوم شاحنة متاح مقابل تكلفة الوقود للكيلومتر — تدهور الهامش يظهر هنا أولًا.",
      },
      {
        en: "Fuel-card consumption vs. GPS mileage matching; fuel fraud is the sector's classic.",
        ar: "مطابقة استهلاك بطاقات الوقود بالكيلومترات الم-tracking؛ واحتيال الوقود كلاسيكية القطاع.",
      },
      {
        en: "Tire-and-parts procurement analytics: same SKU prices varying by branch flag kickbacks.",
        ar: "تحليلات شراء الإطارات والقطع: تفاوت سعر نفس الصنف بالفرع يرشد إلى عمولات.",
      },
      {
        en: "JE testing on disposal gains/losses of fleet assets at year-end.",
        ar: "اختبار القيود على مكاسب/خسائر استبعاد أصول الأسطول نهاية السنة.",
      },
    ],
    inquiries: [
      {
        en: "What utilization and resale data support current fleet lives and residuals?",
        ar: "أي بيانات استخدامة وإعادة بيع تسند الأعمار والقيم المتبقية الحالية؟",
      },
      {
        en: "How is the lag on fuel surcharge recovery computed, and who monitors it?",
        ar: "كيف يحسب تأخر استرداد رسوم الوقود ومن يراقبه؟",
      },
      {
        en: "Which contracts have embedded derivatives or indexation that haven't been assessed?",
        ar: "أي العقود فيها مشتقات مدمجة أو فوهرسة لم تقيَّم؟",
      },
      {
        en: "What is the accident and claims history, and is the provision consistent with it?",
        ar: "ما تاريخ الحوادث والمطالبات، وهل المخصص متسق معه؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Physically inspect a sample of the fleet, matching units to the register, condition to residual values.",
          ar: "معاينة عينة من الأسطول ومطابقتها بالسجل وحالتها بالقيم المتبقية.",
        },
        ref: "ISA 501",
      },
      {
        text: {
          en: "Recompute depreciation on the largest 20 assets under current lives and under a one-year shorter life; quantify sensitivity.",
          ar: "أعد حساب الاستهلاك لأكبر 20 أصلًا بالأعمار الحالية وبعمر أقصر بعام؛ وقس الحساسية.",
        },
        ref: "ISA 540 (Revised) · IAS 16",
      },
    ],
    extraFraud: [
      {
        en: "Ghost trucks: assets on the register (and depreciating) that were sold years ago, proceeds pocketed.",
        ar: "شاحنات وهمية: أصول في السجل تُستهلك وقد بيعت منذ سنوات وتُجنى متحصلاتها خارجًا.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Revenue recognition on multi-leg freight", ar: "الاعتراف بإيراد الشحن متعدد الأرجل" },
        detail: {
          en: "Where the company subcontracts legs, principal-vs-agent determines gross vs net revenue; shipping lines and airlines acting as carriers differ from consolidators acting as agents.",
          ar: "حيث تُتعهد الأرجل من الباطن، يحدد أصيل/وكيل العرض بالإجمالي أو الصافي؛ والناقل المباشر يختلف عن المجمِّع الوكيل.",
        },
        ref: "IFRS 15 / EAS 48",
      },
    ],
    extraRatios: [
      {
        name: { en: "Fleet utilization rate", ar: "معدل استغلال الأسطول" },
        benchmark: "Revenue-generating truck-days ÷ available truck-days; >85% is strong",
        redFlag: {
          en: "Utilization falling while fleet size grows — capital chasing declining demand.",
          ar: "الاستغلال يتراجع والأسطول يتوسع — رأس مال يطارد طلبًا منكمشًا.",
        },
      },
    ],
    extraKams: [
      {
        en: "Depreciation of the fleet, estimated useful lives and residual values.",
        ar: "استهلاك الأسطول والأعمار والقيم المتبقية المقدرة.",
      },
    ],
    extraPitfalls: [
      {
        en: "Never visiting the yard — a fleet audit that never sees a truck is a paper audit.",
        ar: "عدم زيارة الساحة — مراجعة أسطول لا ترى شاحنة واحدة مراجعة ورقية.",
      },
    ],
  },

  /* ================================================================ */
  /* EDUCATION                                                        */
  /* ================================================================ */
  education: {
    estimates: [
      {
        area: { en: "Deferred revenue on tuition & courses", ar: "الإيراد المؤجل على الرسوم والدورات" },
        why: {
          en: "Academic-year tuition received in advance must be released over the teaching calendar, while summer programs, transport and meals are separate performance obligations; mis-allocated release timing moves revenue between years.",
        ar: "الرسوم المقبوضة مقدما للعام الدراسي تحرر وفق تقويم التدريس، والبرامج الصيفية والنقل والغذاء التزامات أداء مستقلة؛ وسوء توزيع التحرير ينقل الإيراد بين السنوات.",
        },
        ref: "IFRS 15 / EAS 48 · ISA 540 (Revised)",
      },
      {
        area: { en: "Goodwill & campus-asset impairment", ar: "انخفاض قيمة الشهرة وأصول الحرم" },
        why: {
          en: "Acquired school groups carry goodwill tested on enrollment forecasts; birth-rate and emigration trends make the forecast the riskiest number in the statements. Campus expansions depreciated over 40-year lives embed a bet on decades of demand.",
          ar: "تحمل المجموعات المدرسية المقتناة شهرة تختبر بتوقعات الالتحاق؛ واتجاهات المواليد والهجرة تجعل التوقع أخطر رقم في القوائم. وتوسعات الحرم المستهلكة على أربعين عامًا رهان على عقود من الطلب.",
        },
        ref: "IAS 36 · ISA 540 (Revised)",
      },
      {
        area: { en: "Teacher-pension & end-of-service provisions", ar: "مخصصات معاشات وتعويض نهاية الخدمة" },
        why: {
          en: "Defined-benefit-like end-of-service arrangements require actuarial valuation of salary growth, attrition and discount rates — a genuine ISA 540 estimate most schools under-provide.",
          ar: "تتطلب ترتيبات نهاية الخدمة الشبيهة بالمزايا المحددة تقييمًا اكتواريًا لنمو الأجور والاستنزاف وأسعار الخصم — تقدير ISA 540 حقيقي تبخسه أغلب المدارس.",
        },
        ref: "IAS 19 · ISA 540 (Revised) · ISA 620",
      },
    ],
    goingConcern: [
      {
        en: "Enrollment pipeline vs. capacity-cost base built on pre-expansion demand.",
        ar: "خط الالتحاق مقابل قاعدة تكاليف الطاقة المبنية على طلب ما قبل التوسع.",
      },
      {
        en: "Fee-increase ceilings (regulator or market resistance) against inflation-driven payroll.",
        ar: "سقوف زيادة الرسوم (تنظيمية أو مقاومة السوق) مقابل أجور تقودها التضخم.",
      },
      {
        en: "Foreign-curriculum licensing and teacher-recruitment costs in hard currency.",
        ar: "تكاليف ترخيص المناهج الأجنبية واستقطاب المعلمين بعملة صعبة.",
      },
      {
        en: "Tuition-fee receivables from families under economic pressure, term by term.",
        ar: "ذمم رسوم من أسر تحت ضغط اقتصادي، فصلًا بفصل.",
      },
    ],
    analytics: [
      {
        en: "Enrollment-to-invoicing-to-collections reconciliation by grade level.",
        ar: "مطابقة الالتحاق بالفوترة فبالتحصيل لكل صف دراسي.",
      },
      {
        en: "Student attrition cohort analytics vs. revenue forecast assumptions.",
        ar: "تحليلات أفواج تسرب الطلاب مقابل افتراضات توقع الإيراد.",
      },
      {
        en: "Payroll-to-student-ratio analytics: ghost teachers on the payroll of acquired schools.",
        ar: "تحليلات نسبة الأجور للطلاب: معلمون وهميون على كشوف مدارس مقتناة.",
      },
      {
        en: "JE testing on deferred-revenue release entries at each term end.",
        ar: "اختبار القيود على تحرير الإيراد المؤجل نهاية كل فصل.",
      },
    ],
    inquiries: [
      {
        en: "How is the teaching calendar mapped to the revenue-release schedule, and who approves it?",
        ar: "كيف يربط تقويم التدريس بجدول تحرير الإيراد ومن يعتمده؟",
      },
      {
        en: "What enrollment assumptions drive the goodwill test, and how did actual compare last two years?",
        ar: "أي افتراضات التحاق تقود اختبار الشهرة، وكيف قورن الفعلي في العامين الماضيين؟",
      },
      {
        en: "Which fee concessions and scholarships were granted, and under whose authority?",
        ar: "أي تنزلات ومنح دراسية مُنحت، وبأي صفة؟",
      },
      {
        en: "How are end-of-service benefits computed and when was the last actuarial valuation?",
        ar: "كيف تحسب تعويضات نهاية الخدمة ومتى آخر تقييم اكتواري؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Reperform deferred-revenue release for one term on a sample of programs against the teaching calendar.",
          ar: "أعد تنفيذ تحرير الإيراد المؤجل لفصل واحد على عينة برامج مقابل تقويم التدريس.",
        },
        ref: "IFRS 15 · ISA 540 (Revised)",
      },
      {
        text: {
          en: "Vouch enrollment records (student information system) to invoiced revenue for the largest segment.",
          ar: "استند بسجلات الالتحاق (نظام معلومات الطلاب) إلى الإيراد المفوتر لأكبر قطاع.",
        },
        ref: "ISA 500 · ISA 330",
      },
    ],
    extraFraud: [
      {
        en: "Cash tuition collected off-books for private tutoring under the school's brand.",
        ar: "رسوم نقدية تجبى خارج الدفاتر لدروس خاصة تحت اسم المدرسة.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Government education-entity classification", ar: "تصنيف الكيانات التعليمية الحكومية" },
        detail: {
          en: "Whether an entity counts as a government-related not-for-profit or a commercial school changes EAS disclosures, related-party rules and tax exposure — the legal form and the substance must agree.",
          ar: "كون الكيان تعليميًا حكوميًا غير ربحيًا أم مدرسة تجارية يغير الإفصاحات وقواعد الأطراف ذات العلاقة والانكشاف الضريبي — الشكل القانوني والجوهر يجب أن يتفقا.",
        },
        ref: "IAS 24 · ISA 250",
      },
    ],
    extraRatios: [
      {
        name: { en: "Student : teacher ratio", ar: "نسبة الطلاب للمعلم" },
        benchmark: "Enrolled students ÷ full-time-equivalent teachers; international-school norm 10–15:1",
        redFlag: {
          en: "Ratio drifting below plan while revenue per student stagnates — payroll bloat or ghost staff.",
          ar: "النسبة تنزل عن الخطة وركود الإيراد للطالب — انتفاخ أجور أو عمالة وهمية.",
        },
      },
    ],
    extraKams: [
      {
        en: "Release of deferred tuition revenue and impairment of goodwill in acquired school operations.",
        ar: "تحرير إيراد الرسوم المؤجل وانخفاض قيمة الشهرة في العمليات المدرسية المقتناة.",
      },
    ],
    extraPitfalls: [
      {
        en: "Trusting the fee schedule without reconciling to the student information system — discounts hide there.",
        ar: "الثقة بجدول الرسوم دون مطابقته بنظام معلومات الطلاب — التنزلات تختبئ هناك.",
      },
    ],
  },

  /* ================================================================ */
  /* TOURISM & HOSPITALITY                                             */
  /* ================================================================ */
  tourism: {
    estimates: [
      {
        area: { en: "Seasonal inventory & room-NRV", ar: "المخزون الموسمي وصافي قيمة الغرف" },
        why: {
          en: "Hotel 'inventory' is perishable room-nights — prepaid maintenance, ground arrangements and loyalty-program points create accrual estimates; operator-versus-owner lease structures (management contracts, franchise) split the estimates between two sets of books.",
          ar: "«مخزون» الفندق ليالٍ قابلة للتلف — الصيانة المدفوعة مقدما والترتيبات الأرضية ونقاط الولاء تنشئ مخصصات تقديرية؛ وهياكل الإيجار بين المشغل والمالك (عقود إدارة وامتياز) تقسم التقديرات بين دفاترين.",
        },
        ref: "IFRS 15 · ISA 540 (Revised)",
      },
      {
        area: { en: "Loyalty-program liability", ar: "التزام برامج الولاء" },
        why: {
          en: "Hotel loyalty points across a network are recognized at standalone value with breakage estimates — where a chain joined a global program, the liability measurement is management's estimate of future redemption cost.",
          ar: "نقاط الولاء عبر الشبكة تعترف بالقيمة المنفصلة مع تقديرات عدم الاسترداد — وحيث انضمت سلسلة لبرنامج عالمي يكون قياس الالتزام تقدير الإدارة لتكلفة الاسترداد المقبلة.",
        },
        ref: "IFRS 15 · ISA 540 (Revised)",
      },
      {
        area: { en: "Impairment of season-exposed properties", ar: "انخفاض قيمة المنشآت الموسمية" },
        why: {
          en: "Resort CGUs are tested on occupancy forecasts driven by source markets (Russia, Germany, Gulf); war, aviation and currency shocks flip forecasts within a season — the recoverable-amount model needs stress-testing.",
          ar: "تختبر وحدات المنتجعات بتوقعات إشغال تحركها أسواق المصدر (روسيا وألمانيا والخليج)؛ وصدمات الحرب والطيران والعملة تقلب التوقعات في موسم واحد — ونموذج المبلغ القابل للاسترداد يحتاج اختبار إجهاد.",
        },
        ref: "IAS 36 · ISA 540 (Revised)",
      },
    ],
    goingConcern: [
      {
        en: "Season cash bridge: high-season collections must fund the low-season fixed costs.",
        ar: "جسر النقد الموسمي: تحصيلات الموسم العالي يجب أن تمول التكاليف الثابتة للموسم المنخفض.",
      },
      {
        en: "Operator/owner disputes freezing renovation funds and capex.",
        ar: "منازعات المشغل والمالك تجمد أموال التجديد والإنفاق الرأسمالي.",
      },
      {
        en: "FX mismatch: hard-currency debt and supplier contracts against EGP room rates.",
        ar: "عدم تطابق العملة: دين وعقود موردين بالعملة الصعبة مقابل أسعار غرف بالجنيه.",
      },
      {
        en: "Booking-platform commission squeeze and direct-booking share.",
        ar: "ضغط عمولات منصات الحجز وحصة الحجز المباشر.",
      },
    ],
    analytics: [
      {
        en: "Occupancy-to-revenue (RevPAR) analytics by property against market-strata benchmarks.",
        ar: "تحليلات الإشغال إلى الإيراد (RevPAR) لكل منشأة مقابل معايير شريحة السوق.",
      },
      {
        en: "F&B mini-bar and outlet cash-sales analytics vs. purchase-to-consumption models.",
        ar: "تحليلات الميني بار والمنافذ النقدية مقابل نماذج الشراء إلى الاستهلاك.",
      },
      {
        en: "OTA-commission reconciliation to booking-engine records.",
        ar: "مطابقة عمولات منصات الحجز بسجلات محرك الحجوزات.",
      },
      {
        en: "JE testing on manager-bonus accruals tied to GOP — the operator's incentive to manage the number.",
        ar: "اختبار القيود على مخصصات حوافز المدير المرتبطة بالربح التشغيلي — حافز المشغل لإدارة الرقم.",
      },
    ],
    inquiries: [
      {
        en: "How is the loyalty liability measured, and what redemption experience supports the breakage rate?",
        ar: "كيف يقاس التزام الولاء، وأي خبرة استرداد تسند نسبة عدم الاسترداد؟",
      },
      {
        en: "Which properties missed their seasonal forecast, and were their CGU values retested?",
        ar: "أي المنشآت أخفقت في توقعها الموسمي، وهل أعيد اختبار قيم وحداتها؟",
      },
      {
        en: "What does the management contract say about capex responsibilities and who funds the backlog?",
        ar: "ماذا يقول عقد الإدارة عن مسؤوليات الإنفاق الرأسمالي ومن يمول المتأخر منه؟",
      },
      {
        en: "How are room rates set for group and OTA business, and who approves off-season discounts?",
        ar: "كيف تحدد أسعار الغرف للجماعات ومنصات الحجز، ومن يعتمد خصوص الموسم المنخفض؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Reperform the loyalty-liability measurement and trace redemptions in the following season.",
          ar: "أعد تنفيذ قياس التزام الولاء وتتبع الاستردادات في الموسم التالي.",
        },
        ref: "IFRS 15 · ISA 540 (Revised)",
      },
      {
        text: {
          en: "Test occupancy statistics to the property-management system and reconcile to invoiced room revenue.",
          ar: "اختبر إحصاءات الإشغال بنظام إدارة الفندق وطابقها بإيراد الغرف المفوتر.",
        },
        ref: "ISA 500 · ISA 330",
      },
    ],
    extraFraud: [
      {
        en: "Walk-in cash guests recorded as staff occupancy or companion stays — the room is sold, the cash is not.",
        ar: "ضيوف نقديون بلا حجز يسجلون كإشغال موظفين أو مرافقين — الغرفة تُباع والنقد لا يُسجل.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Management-fee structures & related operators", ar: "هياكل أتعاب الإدارة والمشغلون ذوو العلاقة" },
        detail: {
          en: "Base fees on total revenue and incentive fees on GOP create estimation and related-party pressure at once — the operator controls the numbers its fees are computed on.",
          ar: "الأتعاب الأساسية على الإيراد الإجمالي والتحفيزية على الربح التشغيلي تنشئ ضغط تقدير وأطراف ذات علاقة معًا — فالمشغل يتحكم في الأرقام التي تحسب عليها أتعابه.",
        },
        ref: "IAS 24 · ISA 550",
      },
    ],
    extraRatios: [
      {
        name: { en: "RevPAR (revenue per available room)", ar: "الإيراد لكل غرفة متاحة" },
        benchmark: "Room revenue ÷ available room-nights; compare to stratum and destination benchmarks",
        redFlag: {
          en: "RevPAR falling with stable occupancy — rate erosion hidden by volume.",
          ar: "المؤشر يتراجع مع ثبات الإشغال — تآكل سعر يحجبه الحجم.",
        },
      },
    ],
    extraKams: [
      {
        en: "Impairment assessment of resort properties and loyalty-program liabilities.",
        ar: "تقييم انخفاض قيمة المنشآت السياحية والتزامات برامج الولاء.",
      },
    ],
    extraPitfalls: [
      {
        en: "Reading the operator's reports without reconciling them to the owner's books — two sets of GAAP for one hotel.",
        ar: "قراءة تقارير المشغل دون مطابقتها بدفاتر المالك — مجموعتان محاسبيتان لفندق واحد.",
      },
    ],
  },

  /* ================================================================ */
  /* GROUPS & HOLDING STRUCTURES                                      */
  /* ================================================================ */
  groups: {
    estimates: [
      {
        area: { en: "Goodwill allocation across CGUs (IAS 36)", ar: "توزيع الشهرة على الوحدات المنتجة للنقد" },
        why: {
          en: "Goodwill acquired in a business combination must be allocated to CGUs expected to benefit — the allocation basis (and later reallocations) determines which unit's impairment absorbs the loss. Holding structures make cross-holding value chains opaque.",
          ar: "توزع الشهرة المتولدة من اندماج الأعمال على الوحدات المتوقع أن تستفيد — أساس التوزيع (وإعادة التوزيع لاحقًا) يحدد أي وحدة يستوعب انخفاضها الخسارة. والهياكل القابضة تجعل سلاسل القيمة البينية معتمة.",
        },
        ref: "IAS 36 · ISA 540 (Revised) · ISA 600",
      },
      {
        area: { en: "Intercompany pricing & cost-sharing", ar: "التسعير البيني وتقاسم التكاليف" },
        why: {
          en: "Management fees, royalties and cost-pool allocations between group members shift profit across entities and jurisdictions; each entity's standalone position is an estimate — and Egypt's transfer-tax scrutiny makes the evidence matter beyond IFRS.",
          ar: "أتعاب الإدارة والعوائد وتوزيعات بلا التكاليف بين شركات المجموعة تنقل الربح بين الكيانات والاختصاصات؛ وموقف كل كيان منفردًا تقدير — والتدقيق الضريبي المصري يجعل الدليل مهمًا بعد معايير المراجعة.",
        },
        ref: "IAS 24 · ISA 550 · Egyptian transfer-pricing rules",
      },
      {
        area: { en: "Consolidation perimeter & control assessment", ar: "نطاق التوحيد وتقييم السيطرة" },
        why: {
          en: "Structured entities, shareholder agreements with veto rights, and de-facto control determine which entities consolidate — a perimeter mistake restates everything. ISA 600 requires the component materiality analysis to be documented.",
          ar: "الكيانات المنظمة واتفاقيات المساهمين بحقوق النقض والسيطرة الفعلية تحدد أي الكيانات توحد — وخطأ النطاق يعيد عرض كل شيء. ويطلب ISA 600 توثيق تحليل أهمية المكونات.",
        },
        ref: "IFRS 10 · ISA 600",
      },
    ],
    goingConcern: [
      {
        en: "Double-leverage: holding debt serviced by dividends from leveraged subsidiaries.",
        ar: "ازدواج الرافعة: دين قابض يخدم بأرباح توزعها شركات رافعة نفسها.",
      },
      {
        en: "Upstream cash traps: regulatory or covenant restrictions on subsidiary dividends.",
        ar: "مصائد النقد الصاعدة: قيود تنظيمية أو تعهدات على توزيعات الشركات التابعة.",
      },
      {
        en: "Cross-guarantees and intercompany loans that make one member's distress everyone's.",
        ar: "ضمانات متبادلة وقروض بينية تجعل ضيق عضن واحد ضيق الجميع.",
      },
      {
        en: "Minority buy-outs funded by debt with no standalone cash generation at holdco.",
        ar: "شراء حصص الأقلية بدين بلا توليد نقدي مستقل في الشركة القابضة.",
      },
    ],
    analytics: [
      {
        en: "Intercompany-matching analytics: every IC receivable/payable pair reconciled across the group ledger.",
        ar: "تحليلات مطابقة البيني: كل زوج ذمم بينية يطابق عبر أستاذ المجموعة.",
      },
      {
        en: "Consolidation-elimination completeness testing: eliminations equal the IC map, not a plug.",
        ar: "اختبار اكتمال الاستبعادات: الاستبعادات تساوي خريطة البيني لا رقمًا تسوويًا.",
      },
      {
        en: "Component-materiality analytics: which components' uncorrected misstatements matter at group level.",
        ar: "تحليلات أهمية المكونات: أي فروق المكونات غير المصححة تهم على مستوى المجموعة.",
      },
      {
        en: "JE testing on management-fee charges at each quarter close across entities.",
        ar: "اختبار القيود على رسوم الإدارة في كل إغلاق ربعي عبر الكيانات.",
      },
    ],
    inquiries: [
      {
        en: "Walk us through the consolidation checklist — which entities were excluded and under what control assessment?",
        ar: "اشرح لنا قائمة التوحيد — أي الكيانات استبعدت وبأي تقييم سيطرة؟",
      },
      {
        en: "How is goodwill allocated to CGUs, and what would justify reallocating it?",
        ar: "كيف وزعت الشهرة على الوحدات، وما الذي يسوغ إعادة توزيعها؟",
      },
      {
        en: "What are the terms of the largest intercompany loans — interest, subordination, repayment?",
        ar: "ما شروط أكبر القروض البينية — فائدة وأولوية وسدادا؟",
      },
      {
        en: "Which subsidiaries have dividend restrictions, and how does the group model around them?",
        ar: "أي الشركات التابعة عليها قيود توزيع، وكيف تصمم المجموعة حولها؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Map the intercompany matrix (who owes whom, in what currency, on what terms) and reconcile every pair.",
          ar: "ارسم مصفوفة البيني (من يدين لمن، بأي عملة، بأي شروط) وطابق كل زوج.",
        },
        ref: "ISA 550 · ISA 600",
      },
      {
        text: {
          en: "Test goodwill allocation to the acquisition agreement's benefit-assumption and each CGU's impairment model.",
          ar: "اختبر توزيع الشهرة بفرضية المنفعة في اتفاقية الاستحواذ ونموذج انخفاض كل وحدة.",
        },
        ref: "IAS 36 · ISA 540 (Revised)",
      },
    ],
    extraFraud: [
      {
        en: "Round-tripping through a 'trading' subsidiary that buys from and sells to the group at margins that fabricate consolidated growth.",
        ar: "تداول دائري عبر شركة «تجارية» تشتري من المجموعة وتبيع لها بهوامش تفبرك نموًا موحدًا.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Investment-entity & structured-entity exceptions", ar: "استثناءات كيانات الاستثمار والكيانات المنظمة" },
        detail: {
          en: "IFRS 10 lets investment entities measure subsidiaries at fair value — misclassifying an operating group under this exception changes the entire measurement basis.",
          ar: "يسمح IFRS 10 لكيانات الاستثمار بقياس الشركات التابعة بالقيمة العادلة — وسوء تصنيف مجموعة تشغيلية بهذا الاستثناء يغير أساس القياس كله.",
        },
        ref: "IFRS 10",
      },
    ],
    extraRatios: [
      {
        name: { en: "Holdco cash-flow coverage", ar: "تغطية التدفق النقدي للقابضة" },
        benchmark: "Dividends & service fees received ÷ holdco debt service; <1.0× means refinancing dependence",
        redFlag: {
          en: "Coverage below 1.0× with rising holdco admin costs — the structure runs on lender patience.",
          ar: "تغطية دون 1.0× مع صعود تكاليف القابضة — الهيكل يعمل على صبر الممولين.",
        },
      },
    ],
    extraKams: [
      {
        en: "Goodwill impairment assessment and valuation of intercompany balances across the group.",
        ar: "تقييم انخفاض الشهرة وقياس الأرصدة البينية عبر المجموعة.",
      },
    ],
    extraPitfalls: [
      {
        en: "Auditing each subsidiary separately and calling it a group audit — ISA 600 work is designed at group level first.",
        ar: "مراجعة كل تابعة منفردة وتسميتها مراجعة مجموعة — عمل ISA 600 يصمم على مستوى المجموعة أولًا.",
      },
    ],
  },

  /* ================================================================ */
  /* NON-PROFIT & NGOs                                                */
  /* ================================================================ */
  nonprofit: {
    estimates: [
      {
        area: { en: "Conditional grant recognition", ar: "الاعتراف بالمنح المشروطة" },
        why: {
          en: "Donor funds with service conditions are deferred until conditions are met; unspent balances may be refundable. The grant \"earned\" each period is an estimate driven by activity reporting — inflating beneficiary numbers inflates revenue.",
        ar: "أموال المانحين المشروطة بخدمات تؤجل حتى استيفاء الشروط؛ والأرصدة غير المنفقة قد تكون قابلة للاسترداد. والمنحة «المحققة» كل فترة تقدير يقوده التقرير عن الأنشطة — تضخيم أعداد المستفيدين يضخم الإيراد.",
        },
        ref: "IAS 20 · IFRS 15 analog · ISA 540 (Revised)",
      },
      {
        area: { en: "In-kind donations & contributed services", ar: "التبرعات العينية والخدمات التطوعية" },
        why: {
          en: "Medicine, food and volunteer professional services are measured at fair value — estimating value of in-kind stock received in bulk (and its subsequent distribution) is a genuine ISA 540 estimate, and completeness is nearly unverifiable without donor confirmations.",
          ar: "الأدوية والأغذية والخدمات المهنية التطوعية تقاس بالقيمة العادلة — تقدير قيمة المخزون العيني المستلم بالجملة وتوزيعه اللاحق تقدير ISA 540 حقيقي، والاكتمال يتعذر إثباته دون تأكيدات المانحين.",
        },
        ref: "IAS 20 · ISA 540 (Revised)",
      },
      {
        area: { en: "Program-cost allocation", ar: "توزيع التكاليف على البرامج" },
        why: {
          en: "Joint costs split between program delivery and fundraising/administration determine the \"efficiency ratio\" donors rate — the allocation key is an estimate with a strong incentive to bias.",
          ar: "التكاليف المشتركة تتوزع بين تنفيذ البرامج والتعبئة والإدارة فتحدد «نسبة الكفاءة» التي يقيّم بها المانحون — ومفتاح التوزيع تقدير بدافع قوي للتحيز.",
        },
        ref: "ISA 540 (Revised) · donor reporting frameworks",
      },
    ],
    goingConcern: [
      {
        en: "Donor-concentration: one institutional grant covering 60%+ of the budget.",
        ar: "تركز المانحين: منحة مؤسسية واحدة تغطي أكثر من 60% من الموازنة.",
      },
      {
        en: "Grant-cycle cliffs: flagship programs ending before renewals are secured.",
        ar: "منحرفات المنح: برامج رئيسية تنتهي قبل تأمين التجديد.",
      },
      {
        en: "Currency: hard-currency donations converted to EGP operations with devaluation risk on the cost side.",
        ar: "العملة: تبرعات بعملة صعبة تحول لعمليات بالجنيه مع خطر تدهور على جانب التكلفة.",
      },
      {
        en: "Regulatory registration renewals and foreign-funding approvals (Central Bank NGO account regime).",
        ar: "تجديدات التسجيل التنظيمي وموافقات التمويل الأجنبي (نظام حسابات المنظمات لدى البنك المركزي).",
      },
    ],
    analytics: [
      {
        en: "Beneficiary-count analytics: attendance and distribution lists vs. reported program output.",
        ar: "تحليلات أعداد المستفيدين: كشوف الحضور والتوزيع مقابل المخرجات المبلغة.",
      },
      {
        en: "Procurement analytics: sole-source supplier concentration in relief purchases.",
        ar: "تحليلات المشتريات: تركز الموردين بالتعيين المباشر في مشتريات الإغاثة.",
      },
      {
        en: "Grant-life cycle reconciliation: received vs. expended vs. reported per donor schedule.",
        ar: "مطابقة دورة حياة المنحة: المقبوض مقابل المنفق مقابل المبلغ عنه لكل جدول مانح.",
      },
      {
        en: "JE testing on grant-release entries at each donor reporting deadline.",
        ar: "اختبار القيود على تحرير المنح في كل موعد تقرير للمانحين.",
      },
    ],
    inquiries: [
      {
        en: "Which grants have unmet conditions at year-end, and what refund exposure exists?",
        ar: "أي المنح بشروط غير مستوفاة نهاية السنة، وما التعرض للاسترداد؟",
      },
      {
        en: "How are beneficiary numbers counted and independently verified?",
        ar: "كيف تعد أعداد المستفيدين ومن يتحقق منها بشكل مستقل؟",
      },
      {
        en: "What key drives the program/fundraising/admin cost split, and when did the board approve it?",
        ar: "ما المفتاح الذي يقود توزيع التكاليف، ومتى اعتمده مجلس الإدارة؟",
      },
      {
        en: "How is the fair value of in-kind donations determined, and by whom?",
        ar: "كيف تحدد القيمة العادلة للتبرعات العينية، ومن يحددها؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Confirm grant balances and conditions directly with the major institutional donors (ISA 505 adapted).",
          ar: "أكد أرصدة المنح وشروطها مباشرة مع المانحين المؤسسيين الرئيسيين (وفق نسخة من ISA 505).",
        },
        ref: "ISA 505 · ISA 540 (Revised)",
      },
      {
        text: {
          en: "Observe a distribution event and reconcile quantities distributed to inventory issued and to beneficiary lists.",
          ar: "راقب حدث توزيع وطابق الكميات الموزعة بالمصروف من المخزون وبكشوف المستفيدين.",
        },
        ref: "ISA 501 · ISA 330",
      },
    ],
    extraFraud: [
      {
        en: "Ghost beneficiaries: relief distributions to names that exist only on the list, executed by staff who pocket the goods.",
        ar: "مستفيدون وهميون: توزيعات إغاثة لأسماء لا وجود لها إلا في الكشف، ينفذها موظفون يقتنصون البضاعة.",
      },
    ],
    extraMines: [
      {
        topic: { en: "NGO law & foreign-funding regime", ar: "قانون الجمعيات ونظام التمويل الأجنبي" },
        detail: {
          en: "Egyptian NGO law restricts activities, foreign funding and asset use — noncompliance is not just a reporting issue but an entity-survival issue; ISA 250 requires the legal framework to be understood and tested.",
          ar: "يقيد قانون الجمعيات المصري الأنشطة والتمويل الأجنبي واستخدام الأصول — والإخلال ليس مسألة إبلاغ بل مسألة بقاء الكيان؛ ويستلزم ISA 250 فهم الإطار القانوني واختباره.",
        },
        ref: "ISA 250 · Egyptian NGO Law 149/2019",
      },
    ],
    extraRatios: [
      {
        name: { en: "Program spend ratio", ar: "نسبة الإنفاق على البرامج" },
        benchmark: "Program expenses ÷ total expenses; institutional donors expect >70%",
        redFlag: {
          en: "Ratio improving while program output declines — reclassification, not efficiency.",
          ar: "النسبة تتحسن والمخرجات تتراجع — إعادة تصنيف لا كفاءة.",
        },
      },
    ],
    extraKams: [
      {
        en: "Recognition of conditional grant income and valuation of in-kind donations.",
        ar: "الاعتراف بإيراد المنح المشروطة وتقييم التبرعات العينية.",
      },
    ],
    extraPitfalls: [
      {
        en: "Applying commercial-audit instincts to a charity — the risk here is mission failure and donor-reporting fraud, not earnings management.",
        ar: "تطبيق غرائز مراجعة تجارية على جمعية — الخطر هنا فشل الرسالة واحتيال تقارير المانحين لا إدارة الأرباح.",
      },
    ],
  },
}
