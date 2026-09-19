import type { SectorDeepDive } from "./sectors-types"

/** Sector Risk Library — deep dives, part B: consumer, agriculture, trade & construction. */

export const SECTORS_DEEP_B: Record<string, SectorDeepDive> = {
  /* ================================================================ */
  /* RESTAURANTS & CAFÉS                                              */
  /* ================================================================ */
  restaurants: {
    estimates: [
      {
        area: { en: "Franchise & marketing-fund accruals", ar: "مخصصات الامتياز وصناديق التسويق" },
        why: {
          en: "Royalties on franchisee sales and contributions to advertising funds are accrued from franchisee-reported figures that arrive late and unaudited. Estimate risk concentrates in the percentage applied, and in local marketing contributions with refund clauses.",
          ar: "تستحق العوائد على مبيعات الممنوحين وإسهامات صناديق الإعلان من أرقام يبلغ عنها الممنوحون متأخرة وغير مراجعة. يتركز خطر التقدير في النسبة المطبقة وفي إسهامات التسويق المحلية ذات بنود الاسترداد.",
        },
        ref: "IFRS 15 / EAS 48 · ISA 540 (Revised)",
      },
      {
        area: { en: "Lease modifications & CPI escalations", ar: "تعديلات الإيجار وتصاعد التضخم" },
        why: {
          en: "IFRS 16 remeasures the lease liability on modification, and Egyptian CPI escalation clauses create annual remeasurements few systems compute cleanly. Under-accrued escalations quietly overstate both profit and right-of-use assets.",
          ar: "يعيد IFRS 16 قياس التزام الإيجار عند التعديل، وتُنشئ بنود التصاعد بالتضخم المصري إعادة قياس سنوية لا تحسبها الأنظمة بدقة. الاستحقاقات الناقصة تبخس المصروف وتضخم أصل الحق في الاستخدام معًا.",
        },
        ref: "IFRS 16 / EAS 49",
      },
      {
        area: { en: "Impairment of loss-making outlets", ar: "انخفاض قيمة الفروع الخاسرة" },
        why: {
          en: "Each outlet is a cash-generating unit whose recoverable amount rests on post-COVID footfall forecasts. Chains keep zombie branches open on optimistic turnaround plans; test the CGU-level assumptions against branch-level data.",
          ar: "كل فرع وحدة منتجة للنقد يعتمد مبلغه القابل للاسترداد على توقعات الإقبال بعد الجائحة. تستمر السلاسل في فروع غائبة على خطط إنقاذ متفائلة؛ اختبر افتراضات الوحدة ببيانات الفرع نفسه.",
        },
        ref: "IAS 36 · ISA 540 (Revised)",
      },
    ],
    goingConcern: [
      {
        en: "Food-cost inflation (imported proteins, oils) vs. menu-price resistance in a price-sensitive market.",
        ar: "تضخم تكلفة الغذاء (بروتين وزيوت مستوردة) مقابل مقاومة أسعار القوائم في سوق حساسة للسعر.",
      },
      {
        en: "Delivery-platform commission squeeze on already-thin margins.",
        ar: "ضغط عمولات منصات التوصيل على هوامش أصلًا رقيقة.",
      },
      {
        en: "Renewal risk on flagship locations with turnover-based rent clauses.",
        ar: "خطر تجديد المواقع الرئيسية ببنود إيجار مرتبطة بحجم المبيعات.",
      },
      {
        en: "Labor cost step-ups from minimum-wage and social-insurance base increases.",
        ar: "زيادات أجور الاندماج من ارتفاع الحد الأدنى وقواعد التأمينات.",
      },
    ],
    analytics: [
      {
        en: "POS-level void/no-sale and discount analytics per waiter terminal.",
        ar: "تحليلات الإلغاء والخصم على مستوى نقطة البيع لكل طرفية نادل.",
      },
      {
        en: "Food-cost percentage by outlet vs. theoretical recipe cost — variance exposes unrecorded waste or theft.",
        ar: "نسبة تكلفة الغذاء لكل فرع مقابل التكلفة النظرية للوصفات — الانحراف يكشف هدرًا أو سرقة غير مسجلة.",
      },
      {
        en: "Daily cash deposits vs. POS cash sales lag analysis — growing gaps signal skimming.",
        ar: "تحليل تأخر الإيداعات النقدية اليومية عن مبيعات النقد — اتساع الفجوة يوحى بالاختلاس.",
      },
      {
        en: "JE testing on intercompany management-fee charges between outlets and the parent.",
        ar: "اختبار القيود على رسوم الإدارة البينية بين الفروع والشركة الأم.",
      },
    ],
    inquiries: [
      {
        en: "How are franchisee sales reported, verified and reconciled before royalty revenue is booked?",
        ar: "كيف تُبلَّغ مبيعات الممنوحين وتُوثق وتُطابق قبل تسجيل إيراد العوائد؟",
      },
      {
        en: "Which outlets missed their break-even plan this year, and what supports keeping them open?",
        ar: "أي الفروع أخفقت في خطة التعادل هذا العام، وما مسوغ استمرارها؟",
      },
      {
        en: "How were CPI escalations computed on the ten largest leases this year?",
        ar: "كيف حُسبت تصاعدات التضخم على أكبر عشرة عقود إيجار هذا العام؟",
      },
      {
        en: "What inventory of fresh items is written off daily, and who approves it?",
        ar: "ما المخزون اليومي من الأصناف الطازجة الذي يُعدم، ومن يعتمده؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Vouch a month of daily Z-reports to bank deposits for three outlets, including weekends and holidays.",
          ar: "استند إلى تقارير الإغلاق اليومية لشهر كامل مقابل إيداعات بنكية لثلاثة فروع شاملة العطلات.",
        },
        ref: "ISA 330 · ISA 240",
      },
      {
        text: {
          en: "Recalculate lease escalations and modifications on the five largest locations and trace to the liability roll-forward.",
          ar: "أعد حساب تصاعدات وتعديلات الإيجار في أكبر خمسة مواقع وتتبعها بحركة الالتزام.",
        },
        ref: "IFRS 16 / EAS 49 · ISA 540 (Revised)",
      },
    ],
    extraFraud: [
      {
        en: "Off-menu catering events invoiced personally by the branch manager — revenue never sees the books.",
        ar: "مناسبات تقديم خارج القائمة تُفوتر شخصيًا لمدير الفرع — إيراد لا يرى الدفاتر أبدًا.",
      },
      {
        en: "Supplier kickbacks on fresh-produce procurement booked as higher food cost.",
        ar: "عمولات موردي المشتريات الطازجة تُسجل ضمن تكلفة غذاء مرتفعة.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Revenue gross-up on delivery platforms", ar: "تضخيم الإيراد عبر منصات التوصيل" },
        detail: {
          en: "If the platform controls the customer relationship and takes inventory risk on returns, the chain may be an agent — presenting gross platform sales inflates revenue while margins stay thin.",
          ar: "إذا كانت المنصة تملك علاقة العميل وتتحمل خطر المرتجعات، فقد تكون السلسلة وكيلًا — عرض مبيعات المنصة بالإجمالي ينفخ الإيراد بينما يبقى الهامش رقيقًا.",
        },
        ref: "IFRS 15 / EAS 48",
      },
    ],
    extraRatios: [
      {
        name: { en: "Food cost percentage", ar: "نسبة تكلفة الغذاء" },
        benchmark: "Cost of food ÷ food revenue; typical 28–35% by concept",
        redFlag: {
          en: "Stable percentage despite input inflation — portioning or purchasing controls slipping silently.",
          ar: "نسبة ثابتة رغم تضخم المدخلات — ضبط الكميات أو المشتريات ينزلق بصمت.",
        },
      },
    ],
    extraKams: [
      {
        en: "Impairment assessment of loss-making outlets and their lease liabilities.",
        ar: "تقييم انخفاض قيمة الفروع الخاسرة والتزامات إيجارها.",
      },
    ],
    extraPitfalls: [
      {
        en: "Auditing the consolidated P&L while the fraud lives at branch level — plan procedures at outlet granularity.",
        ar: "مراجعة قوائم المجموعة بينما يسكن الاحتيال مستوى الفرع — خطط الإجراءات بدقة المنفذ الواحد.",
      },
    ],
  },

  /* ================================================================ */
  /* TEXTILES & APPAREL                                               */
  /* ================================================================ */
  textiles: {
    estimates: [
      {
        area: { en: "Inventory NRV on seasonal fashion", ar: "صافي القيمة البيعية لمخزون الأزياء الموسمية" },
        why: {
          en: "Fashion stock loses value by the week; end-of-season leftovers must be marked to clearance value. Egyptian exporters holding USD-cost inventory while selling into a devaluing local market face NRV squeeze from both directions.",
          ar: "مخزون الأزياء يفقد قيمته أسبوعيًا؛ وبقايا نهاية الموسم تقيَّم بقيمة التصريف. يواجه المصدررون المصريون مخزونًا بتكلفة دولارية وبيعًا في سوق محلية بعملة تتدهور — ضغط على صافي القيمة من الاتجاهين.",
        },
        ref: "IAS 2 · ISA 540 (Revised)",
      },
      {
        area: { en: "Export rebates & duty drawback claims", ar: "مطالبات حوافز التصدير والرد الجمركي" },
        why: {
          en: "Export incentive claims (reimbursements tied to FOB values and documentation) are government grants measured at fair value of receivable — recognition timing and claim eligibility are estimates that can be gamed by inflating declared export values.",
          ar: "مطالبات حوافز التصدير المرتبطة بقيم التسليم الفعلي والتوثيق منح حكومية تقاس بالقيمة العادلة للمستحق — وتوقيت الاعتراف والأهلية تقديران يمكن التلاعب بهما بتضخيم قيم التصدير المصرح بها.",
        },
        ref: "IAS 20 · ISA 540 (Revised)",
      },
      {
        area: { en: "Cotton & FX hedging effectiveness", ar: "فاعلية تحوط القطن والعملات" },
        why: {
          en: "Forward contracts on USD purchases or cotton positions must pass hedge-effectiveness testing to stay in OCI; failed hedges dump volatility into P&L at once.",
          ar: "يجب أن تجتاز عقود الشراء الدولارية أو مراكز القطن اختبار فاعلية التحوط لتبقى في الأرباح الشاملة؛ والتحوطات الفاشلة تركم التذبذب في الأرباح دفعة واحدة.",
        },
        ref: "IFRS 9 §6",
      },
    ],
    goingConcern: [
      {
        en: "Order book from European buyers vs. freight and FX cost shocks.",
        ar: "دفتر طلبات المشترين الأوروبيين مقابل صدمات الشحن والعملة.",
      },
      {
        en: "Working-capital cycle: cotton purchased months before garment cash comes back.",
        ar: "دورة رأس المال العامل: قطن يشترى قبل أشهر من تحصيل نقديات الملابس.",
      },
      {
        en: "Energy-intensive wet-processing stages facing gas tariff repricing.",
        ar: "مراحل المعالجة الرطبة كثيفة الطاقة أمام إعادة تسعير الغاز.",
      },
      {
        en: "Buyer concentration — one retail chain's delisting decision can strand a production line.",
        ar: "تركز المشترين — قرار إلغاء إدراج من سلسلة واحدة قد يجمد خط إنتاج.",
      },
    ],
    analytics: [
      {
        en: "Cut-make-trim yield analytics: fabric consumption per style vs. standard — over-consumption hides waste or theft.",
        ar: "تحليلات مردود القص والتشغيل: استهلاك القماش لكل موديل مقابل المعياري — الاستهلاك الزائد يخفي هدرًا أو سرقة.",
      },
      {
        en: "Export-invoice values vs. customs declaration matching on the full year file.",
        ar: "مطابقة قيم فواتير التصدير مع البيانات الجمركية على ملف السنة كاملة.",
      },
      {
        en: "Benford screening on subcontractor invoices and on piece-rate payroll.",
        ar: "فحص بنفورد على فواتير المقاولين من الباطن وعلى أجور القطعة.",
      },
      {
        en: "JE testing on revaluation entries of year-end cotton positions.",
        ar: "اختبار القيود على إعادة تقييم مراكز القطن نهاية السنة.",
      },
    ],
    inquiries: [
      {
        en: "How is the clearance value determined for last season's stock, and who approves it?",
        ar: "كيف تحدد قيمة التصريف لمخزون الموسم الماضي ومن يعتمدها؟",
      },
      {
        en: "What export rebate claims were rejected or reduced by the reviewing authority this year, and why?",
        ar: "أي مطالبات حوافز التصدير رفضت أو خفضت هذا العام ولماذا؟",
      },
      {
        en: "Which subcontractors produce for us, and how are their labor and compliance conditions monitored?",
        ar: "أي المقاولين من الباطن ينتجون لنا، وكيف تُراقب ظروف العمل والالتزام لديهم؟",
      },
      {
        en: "How did the gas tariff repricing change the cost structure of dyeing and finishing?",
        ar: "كيف غيّرت إعادة تسعير الغاز هيكل تكاليف الصباغة والتشطيب؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Test NRV of season-end stock against post-year-end clearance price lists and record the impact.",
          ar: "اختبر صافي القيمة البيعية لمخزون نهاية الموسم بقوائم أسعار التصريف بعد نهاية السنة وسجل الأثر.",
        },
        ref: "IAS 2 · ISA 540 (Revised)",
      },
      {
        text: {
          en: "Trace export rebate claims to customs Form 13 and bank export proceeds documentation.",
          ar: "تتبع مطالبات حوافز التصدير إلى شهادة التصدير الجمركية ومستندات تحصيل العائد.",
        },
        ref: "IAS 20 · ISA 500",
      },
    ],
    extraFraud: [
      {
        en: "Inflated export invoices to claim higher rebates, with the difference kicked back by the buyer.",
        ar: "فواتير تصدير منفوخة للمطالبة بحوافز أعلى، ويسترد المشتري الفارق جانبيًا.",
      },
      {
        en: "Cotton sales to related parties at below-market prices, profit parked outside.",
        ar: "بيع قطن لأطراف ذات علاقة دون سعر السوق، والربح يُركن خارج الشركة.",
      },
    ],
    extraMines: [
      {
        topic: { en: "By-product & waste revenue completeness", ar: "اكتمال إيراد المخلفات والمنتجات الثانوية" },
        detail: {
          en: "Fabric offcuts and yarn waste carry real value sold to recyclers in cash-heavy markets; completeness of that revenue stream is the classic textile gap.",
          ar: "قصاصات القماش وهدر الغزل لها قيمة فعلية تباع لمعامل التدوير في أسواق يغلب عليها النقد؛ واكتمال هذا البند هو الفجوة الكلاسيكية في النسيج.",
        },
        ref: "ISA 315 (2019)",
      },
    ],
    extraRatios: [
      {
        name: { en: "Fabric utilization rate", ar: "معدل استغلال القماش" },
        benchmark: "Output fabric ÷ input fabric; efficient cutters 85–92%",
        redFlag: {
          en: "Utilization improving while waste-sale quantities fall — one of the two numbers is wrong.",
          ar: "الاستغلال يتحسن بينما تتراجع كميات بيع الهدر — أحد الرقمين خطأ.",
        },
      },
    ],
    extraKams: [
      {
        en: "Net realizable value of seasonal and export-committed inventory under FX volatility.",
        ar: "صافي القيمة البيعية للمخزون الموسمي والمرتبط بالتصدير تحت تقلب العملة.",
      },
    ],
    extraPitfalls: [
      {
        en: "Using the customs file as the only export evidence without checking proceeds actually returned through the banking system.",
        ar: "الاكتفاء بالملف الجمركي كدليل تصدير دون التحقق من عودة المتحصلات فعلًا عبر الجهاز المصرفي.",
      },
    ],
  },

  /* ================================================================ */
  /* AGRICULTURE                                                      */
  /* ================================================================ */
  agriculture: {
    estimates: [
      {
        area: { en: "Biological asset fair value (IAS 41)", ar: "القيمة العادلة للأصول الحيوية" },
        why: {
          en: "Orchards, livestock and fish farms are measured at fair value less costs to sell, with changes through P&L — the value comes from market prices adjusted for age/yield mix, a genuine estimate. Egyptian active markets exist for some livestock but rarely for standing crops.",
          ar: "تقاس البساتين والثروة الحيوانية والمزارع السمكية بالقيمة العادلة ناقص تكاليف البيع، وتتغير التغيرات عبر الأرباح — القيمة من أسعار السوق معدلة لتركيب العمر والإنتاجية، وهو تقدير حقيقي. توجد أسواق نشطة لبعض الثروة الحيوانية في مصر لكن نادرًا للمحاصيل القائمة.",
        },
        ref: "IAS 41 / EAS · ISA 540 (Revised)",
      },
      {
        area: { en: "Harvest-period revenue cut-off", ar: "استقطاع إيراد موسم الحصاد" },
        why: {
          en: "Crop revenue concentrates in a few weeks; a few days of cut-off error moves the year. Government procurement prices vs. free-market sales split the same harvest between two price regimes.",
          ar: "يتركز إيراد المحصول في أسابيع؛ وأيام قليلة من خطأ الاستقطال تحرك السنة كلها. وينقسم الحصاد نفسه بين نظامي سعر: التوريد الحكومي والبيع في السوق الحرة.",
        },
        ref: "IFRS 15 / EAS 48 · ISA 315 (2019)",
      },
      {
        area: { en: "Land & water rights capitalized", ar: "رسملة حقوق الأرض والمياه" },
        why: {
          en: "Reclaimed-desert land costs, wells and irrigation networks blur between capitalizable development and period expense — the judgment is where 'making the land ready' ends.",
          ar: "تكاليف استصلاح أراضي الصحراء والآبار وشبكات الري تتشابه بين تطوير قابل للرسملة ومصروف فترة — والحكم في متى تنتهي مرحلة «تجهيز الأرض».",
        },
        ref: "IAS 16 · IAS 40 · ISA 540 (Revised)",
      },
    ],
    goingConcern: [
      {
        en: "Water availability and quota changes for irrigated farms.",
        ar: "توافر المياه وتغييرات الحصص للمزارع المروية.",
      },
      {
        en: "Single-crop dependency meeting a disease or weather event (the banana and tomato cycles).",
        ar: "الاعتماد على محصول واحد يصادف وباء أو حدثًا مناخيًا (دورات الموز والطماطم).",
      },
      {
        en: "Subsidized-input programs changing terms mid-season (fertilizer and fuel allocations).",
        ar: "تغيير برامج المدخلات المدعمة لشروطها منتصف الموسم (تخصيصات السماد والوقود).",
      },
      {
        en: "Buyer creditworthiness — cooperatives and processors paying months after delivery.",
        ar: "ملاءة المشترين — تعاونات ومصانع تدفع بعد التسليم بأشهر.",
      },
    ],
    analytics: [
      {
        en: "Yield-per-feddan analytics vs. regional norms by crop and season — impossible yields hide unrecorded sales or theft.",
        ar: "تحليلات الإنتاجية للفدان مقابل المعايير الإقليمية لكل محصول وموسم — الإنتاجيات المستحيلة تخفي مبيعات غير مسجلة أو سرقة.",
      },
      {
        en: "Seed/fertilizer purchase quantities vs. planted area reconciliation.",
        ar: "مطابقة كميات شراء البذور والأسمدة مع المساحة المزروعة.",
      },
      {
        en: "Payroll-to-hectare analytics: ghost farm workers are the sector's classic fraud.",
        ar: "تحليلات الأجور مقابل الهكتار: العمالة الوهمية هي احتيال القطاع الكلاسيكي.",
      },
      {
        en: "JE testing on biological-asset revaluation entries at each quarter close.",
        ar: "اختبار القيود على إعادة تقييم الأصول الحيوية في كل إغلاق ربعي.",
      },
    ],
    inquiries: [
      {
        en: "How are fair values sourced for biological assets — which markets, which price lists, whose adjustments?",
        ar: "من أين تُستمد القيم العادلة للأصول الحيوية — أي أسواق وأي قوائم أسعار ومن يعدلها؟",
      },
      {
        en: "What was the harvest revenue recognized after year-end for pre-year-end delivery, and how was cut-off evidenced?",
        ar: "ما إيراد الحصاد المعترف به بعد نهاية السنة عن تسليمات سابقة لها، وبماذا وثق الاستقطاع؟",
      },
      {
        en: "Which government procurement or subsidy claims are pending, and on what conditions?",
        ar: "أي مطالبات التوريد الحكومي أو الدعم قائمة، وبأي شروط؟",
      },
      {
        en: "How is satellite/GIS crop data used, if at all, to evidence planted areas?",
        ar: "كيف تستخدم بيانات الأقمار الصناعية ونظم المعلومات الجغرافية، إن استُخدمت، لإثبات المساحات المزروعة؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Attend crop counts and observe harvest weighing at the collection centers for the two largest crops.",
          ar: "احضر جرد المحاصيل وراقب وزن الحصاد في مراكز التجميع لأكبر محصولين.",
        },
        ref: "ISA 501",
      },
      {
        text: {
          en: "Obtain an independent agronomist valuation (ISA 620) of biological assets at the reporting date and compare.",
          ar: "احصل على تقييم خبير زراعي مستقل (ISA 620) للأصول الحيوية في تاريخ التقرير وقارن.",
        },
        ref: "ISA 620 · IAS 41",
      },
    ],
    extraFraud: [
      {
        en: "Phantom harvests: sales invoices for crops never grown, matched by fake warehouse receipts.",
        ar: "محاصيل وهمية: فواتير بيع لمحاصيل لم تزرع قط، تقابلها إيصالات مخازن مزيفة.",
      },
      {
        en: "Subsidy farming: inflated planted-area declarations to draw government inputs.",
        ar: "زراعة الدعم: تصريحات مساحات منفوخة لسحب المدخلات الحكومية.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Bearer warehouse receipts as collateral", ar: "إيصالات المخازن لحاملها كضمان" },
        detail: {
          en: "Where crop receipts circulate as negotiable instruments, the same stack of grain can be pledged twice — confirm holdings directly with silo operators.",
          ar: "حيث تتداول إيصالات المحاصيل كأوراق قابلة للتداول، يمكن رهن نفس كومة الحبوب مرتين — أكد الحيازة مباشرة مع مشغلي الصوامع.",
        },
        ref: "ISA 505 · ISA 550",
      },
    ],
    extraRatios: [
      {
        name: { en: "Yield per feddan", ar: "الإنتاجية للفدان" },
        benchmark: "Output tonnes ÷ planted feddans; benchmark to governorate agriculture-directorate norms",
        redFlag: {
          en: "Yields far above regional agronomic ceilings — either exceptional farming or fictitious output.",
          ar: "إنتاجيات تفوق السقوف الزراعية الإقليمية بكثير — إما زراعة استثنائية أو إنتاج خيالي.",
        },
      },
    ],
    extraKams: [
      {
        en: "Fair value measurement of biological assets and the harvest cut-off.",
        ar: "قياس القيمة العادلة للأصول الحيوية واستقطاع الحصاد.",
      },
    ],
    extraPitfalls: [
      {
        en: "Auditing from the office — in agriculture, the evidence is standing in the field on the reporting date.",
        ar: "المراجعة من المكتب — في الزراعة الدليل قائم في الحقل بتاريخ التقرير.",
      },
    ],
  },

  /* ================================================================ */
  /* TRADING & DISTRIBUTION                                           */
  /* ================================================================ */
  trading: {
    estimates: [
      {
        area: { en: "Rebate & volume-incentive accruals", ar: "مخصصات الخصومات وحوافز الحجم" },
        why: {
          en: "Distributor income is invoice price minus a web of retrospective rebates, volume tiers and marketing support. The accrual percentage applied at year-end is an estimate; sellers systematically under-accrue it because it directly reduces revenue.",
          ar: "دخل الموزع هو سعر الفاتورة ناقص شبكة من الخصومات الرجعية وشرائح الحجم والدعم التسويقي. والنسبة المخصومة نهاية السنة تقدير؛ والبائعون يبخسونه منهجيًا لأنه يخفض الإيراد مباشرة.",
        },
        ref: "IFRS 15 / EAS 48 · ISA 540 (Revised)",
      },
      {
        area: { en: "Slow-moving stock & obsolescence", ar: "المخزون بطيء الحركة والتقادم" },
        why: {
          en: "Distributor warehouses hold thousands of SKUs; provision percentages by age band are estimated from experience, and import-cost step-ups (FX) make historical percentages stale.",
          ar: "تخزن مستودعات الموزعين آلاف الأصناف؛ ونسب المخصص لكل شريحة عمر تقدَّر من الخبرة، وقفزات تكلفة الاستيراد (العملة) تجعل النسب التاريخية متقادمة.",
        },
        ref: "IAS 2 · ISA 540 (Revised)",
      },
      {
        area: { en: "Credit-loss estimation on customer balances", ar: "تقدير خسائر الائتمان على أرصدة العملاء" },
        why: {
          en: "The receivables book is wide and shallow — hundreds of retail customers with no collateral. A simplified-approach lifetime ECL still needs segmentation and loss-rate evidence, not a single blended 1%.",
          ar: "دفتر الذمم واسع ضحل — مئات عملاء التجزئة بلا ضمان. وخاصر العمر الكامل المبسط يحتاج تجزئة شرائح وأدلة معدلات خسارة، لا نسبة ممتزجة واحدة.",
        },
        ref: "IFRS 9 · ISA 540 (Revised)",
      },
    ],
    goingConcern: [
      {
        en: "Supplier agency agreements up for renewal — losing a principal franchise removes the business model.",
        ar: "اتفاقيات الوكالة التجارية قيد التجديد — فقدان امتياز موفر رئيسي يزيل نموذج العمل كله.",
      },
      {
        en: "LC margin requirements hardening as EGP volatility rises, squeezing working capital.",
        ar: "اشتداد متطلبات هامش الاعتمادات مع ارتفاع تقلب الجنيه يضغط رأس المال العامل.",
      },
      {
        en: "Customer payment-term extension requests becoming systematic.",
        ar: "تحول طلبات تمديد آجال سداد العملاء إلى نمط منتظم.",
      },
      {
        en: "Warehouse rent escalations and fuel-driven distribution costs.",
        ar: "تصاعد إيجارات المستودعات وتكاليف التوزيع المدفوعة بأسعار الوقود.",
      },
    ],
    analytics: [
      {
        en: "Rebate-accrual vs. actual-settlement variance analytics over three years — persistent under-accrual is systemic.",
        ar: "تحليلات انحراف مخصص الخصومات عن التسوية الفعلية عبر ثلاث سنوات — النقص المستمر جهاز منهجي.",
      },
      {
        en: "Gross-margin-by-SKU anomaly scan: negative-margin lines are mispriced rebates or side deals.",
        ar: "مسح شواذ الهامش لكل صنف: الخطوط سالبة الهامش إما خصومات مغلوطة أو صفقات جانبية.",
      },
      {
        en: "Sales-return analytics per customer around incentive-threshold dates.",
        ar: "تحليلات مرتجعات البيع لكل عميل حول تواريخ عتبات الحوافز.",
      },
      {
        en: "Warehouse-to-ledger quantity reconciliation for the top-value SKUs.",
        ar: "مطابقة كميات المستودع مع الأستاذ لأصناف القيمة الأعلى.",
      },
    ],
    inquiries: [
      {
        en: "Show the rebate contracts in force — how are tier thresholds computed and who reconciles them monthly?",
        ar: "أظهر عقود الخصومات السارية — كيف تحسب عتبات الشرائح ومن يطابقها شهريًا؟",
      },
      {
        en: "Which agencies expire in the next 12 months and what renewal risk does management assess?",
        ar: "أي الوكالات تنتهي خلال 12 شهرًا وما خطر التجديد الذي تقدره الإدارة؟",
      },
      {
        en: "What credit limits changed this year, and were any overrides approved by sales rather than finance?",
        ar: "أي حدود ائتمان تغيرت هذا العام، وهل اعتمدت تجاوزات من البيع لا من المالية؟",
      },
      {
        en: "How are consignment stocks at customer sites counted and reconciled?",
        ar: "كيف تجرد مخزونات الأمانة لدى العملاء وتطابق؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Recalculate year-end rebate accruals from the contract terms on the top 20 customers and book differences.",
          ar: "أعد حساب مخصصات الخصومات نهاية السنة من شروط العقود لأكبر 20 عميلًا وسجل الفروق.",
        },
        ref: "IFRS 15 · ISA 540 (Revised)",
      },
      {
        text: {
          en: "Circular-confirm receivable balances and agency terms with major customers and principals.",
          ar: "أرسل تأكيدات دائرية بأرصدة الذمم وشروط الوكالة لكبار العملاء والموفرين.",
        },
        ref: "ISA 505",
      },
    ],
    extraFraud: [
      {
        en: "Rebate side letters outside the ERP — discounts promised verbally and settled in cash.",
        ar: "خطابات خصومات جانبية خارج النظام — خصومات تُوعد شفهيًا وتسوى نقدًا.",
      },
      {
        en: "Channel stuffing: fake sell-in to distributors before bonus deadlines with returns booked next year.",
        ar: "حشو القناة: بيع وهمي للموزعين قبل مواعيد الحوافز ومرتجعات تحجز السنة التالية.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Principal-vs-agent on agency distribution", ar: "أصيل أم وكيل في التوزيع بالوكالة" },
        detail: {
          en: "Does the distributor bear inventory risk and set prices? If the principal retains them, gross revenue presentation is wrong and the business is a commission agent.",
          ar: "هل يتحمل الموزع خطر المخزون ويحدد الأسعار؟ إن احتفظ بهما الموفر فالعرض بالإجمالي خطأ والنشاط وكيل بعمولة.",
        },
        ref: "IFRS 15 / EAS 48",
      },
    ],
    extraRatios: [
      {
        name: { en: "Inventory turnover (times per year)", ar: "معدل دوران المخزون (مرة سنويًا)" },
        benchmark: "COGS ÷ average inventory; food distribution 8–15×",
        redFlag: {
          en: "Turnover slowing while sales grow — growth financed by aging stock.",
          ar: "الدوران يتباطأ والنمو مستمر — نمو يمول من مخزون يشيخ.",
        },
      },
    ],
    extraKams: [
      {
        en: "Recognition of variable consideration (rebates and incentives) against revenue.",
        ar: "الاعتراف بالاعتبار المتغير (الخصومات والحوافز) مقابل الإيراد.",
      },
    ],
    extraPitfalls: [
      {
        en: "Confirming balances but not terms — the receivable number can be right while the rebate liability is fiction.",
        ar: "تأكيد الأرصدة دون الشروط — رقم الذمم قد يكون صحيحًا بينما التزام الخصومات خيال.",
      },
    ],
  },

  /* ================================================================ */
  /* CONSTRUCTION & CONTRACTING                                       */
  /* ================================================================ */
  construction: {
    estimates: [
      {
        area: { en: "Percentage of completion / cost-to-cost", ar: "نسبة الإنجاز وفق التكلفة إلى التكلفة" },
        why: {
          en: "Revenue is recognized on estimated total contract cost — every EGP of cost estimate error flows straight into profit. Contractors under pressure understate estimated costs to complete; test the cost-to-complete build-up on every major contract, not just the top five.",
          ar: "يعترف بالإيراد على أساس إجمالي التكلفة التعاقدية المقدرة — كل جنيه خطأ في التقدير يمر مباشرة إلى الربح. المتعاقدون تحت الضغط يبخسون التكاليف حتى الإتمام؛ اختبر مكونات التكلفة حتى الإتمام لكل عقد كبير لا لأكبر خمسة فقط.",
        },
        ref: "IFRS 15 / EAS 48 · ISA 540 (Revised)",
      },
      {
        area: { en: "Variation orders & claims recognition", ar: "أوامر التغيير والاعتراف بالمطالبات" },
        why: {
          en: "Variations are recognized when the price is probable and measurable — pending, disputed or 'constructive' variations are judgment calls that swing contract profit. Claims against owners (delays, disruptions) rarely survive legal scrutiny but sit in some work-in-progress files.",
          ar: "تُعترف أوامر التغيير عندما يصبح السعر محتملًا وقابلًا للقياس — والمتعلقة والمنازعة والضمنية أحكام تتأرجح بها أرباح العقود. ومطالبات المالك (تأخير وتعطيل) نادرًا ما تصمد قانونيًا لكنها تسكن ملفات تحت التشغيل.",
        },
        ref: "IFRS 15 · ISA 540 (Revised)",
      },
      {
        area: { en: "Liquidated damages & delay provisions", ar: "الغرامات الجزائية ومخصصات التأخير" },
        why: {
          en: "LDs for missed milestones are probable obligations when delay is management's own forecast; some contractors accrue nothing until the owner invokes the clause. Read the contract's LD schedule against the program.",
          ar: "الغرامات عن المعالم الفائتة التزامات محتملة عندما يكون التأخير من تقدير الإدارة نفسها؛ وبعض المتعاقدين لا يخصصون شيئًا حتى يحرك المالك البند. اقرأ جدول الغرامات مقابل البرنامج الزمني.",
        },
        ref: "IAS 37 · ISA 540 (Revised)",
      },
    ],
    goingConcern: [
      {
        en: "Under-recovery on fixed-price government contracts locked before input inflation.",
        ar: "استرداد ناقص على عقود حكومية بأسعار ثابتة أُقفلت قبل تضخم المدخلات.",
      },
      {
        en: "Milestone-certification delays stretching the cash cycle to 180+ days.",
        ar: "تأخر اعتماد المستخلصات يمط دورة النقد إلى أكثر من 180 يومًا.",
      },
      {
        en: "Retention balances held on completed projects; recovery depends on final-account negotiation.",
        ar: "أرصدة محتجزة على مشروعات منتهية؛ واستردادها رهن تسوية الحساب النهائي.",
      },
      {
        en: "Performance-bond and advance-payment-guarantee line usage approaching bank limits.",
        ar: "استخدام خطوط خطابات الضمان والضمانات المسبقة يقترب من حدود البنوك.",
      },
    ],
    analytics: [
      {
        en: "Cost-to-cost curve analytics per contract — flat progress with heavy billing front-loads revenue.",
        ar: "تحليلات منحنى التكلفة إلى التكلفة لكل عقد — تقدم منعدم مع فوترة كثيفة يستبق الإيراد.",
      },
      {
        en: "JE testing on cost-to-complete revisions at each closing (the estimate most often walked backwards).",
        ar: "اختبار القيود على مراجعات التكلفة حتى الإتمام في كل إقفال (التقدير الأكثر تراجعًا للخلف).",
      },
      {
        en: "Subcontractor cost vs. their progress certifications — inflated interim certifications are common.",
        ar: "تكلفة المقاول من الباطن مقابل مستخلصاته — تضخيم المستخلصات المرحلية شائع.",
      },
      {
        en: "Margin-by-contract trend: loss-making contracts that stay 'on plan' for three straight closings.",
        ar: "اتجاه الهامش لكل عقد: عقود خاسرة تبقى «على الخطة» ثلاث إقفالات متتالية.",
      },
    ],
    inquiries: [
      {
        en: "For each contract over the materiality threshold, walk us through the cost-to-complete and who signed it off.",
        ar: "لكل عقد يتجاوز حد الأهمية، اشرح لنا التكلفة حتى الإتمام ومن وقع اعتمادها.",
      },
      {
        en: "Which variation orders are awaiting owner approval, and on what basis are they in revenue today?",
        ar: "أي أوامر التغيير تنتظر موافقة المالك، وعلى أي أساس هي في الإيراد الآن؟",
      },
      {
        en: "What is the claim register — delay claims, their legal advice and probability assessment?",
        ar: "ما سجل المطالبات — مطالبات التأخير والرأي القانوني وتقييم الاحتمالية؟",
      },
      {
        en: "Which projects are in dispute, and are LD provisions held against every one of them?",
        ar: "أي المشروعات في نزاع، وهل وُفرت مخصصات الغرامات مقابل كل منها؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Engage a quantity surveyor (ISA 620) to independently verify percentage of completion on the two largest contracts.",
          ar: "استعن بمساح كميات (ISA 620) للتحقق المستقل من نسبة الإنجاز في أكبر عقدين.",
        },
        ref: "ISA 620 · ISA 540 (Revised)",
      },
      {
        text: {
          en: "Vouch cost-to-complete components to purchase orders, labor plans and subcontracts still unexecuted.",
          ar: "استند بمكونات التكلفة حتى الإتمام إلى أوامر الشراء وخطط العمالة والعقود من الباطن غير المنفذة.",
        },
        ref: "ISA 500 · ISA 540 (Revised)",
      },
    ],
    extraFraud: [
      {
        en: "Phony progress billings on state projects with complicit consultants, cashed and parked off-shore.",
        ar: "مستخلصات تقدم وهمية على مشروعات الدولة باستشاريين متواطئين، تُصرف وتُركن خارج الدفاتر.",
      },
      {
        en: "Cost-to-complete understated at year-end then 'revised' after the audit report is signed.",
        ar: "تبخيس التكلفة حتى الإتمام نهاية السنة ثم «مراجعتها» بعد توقيع تقرير المراجعة.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Unapproved change orders in revenue", ar: "أوامر تغيير غير معتمدة داخل الإيراد" },
        detail: {
          en: "IFRS 15 allows variation revenue only when the price change is probable — including constructive changes without paperwork invites reversal when the owner rejects.",
          ar: "يسمح IFRS 15 بإيراد التغيير فقط عند احتمال تغير السعر — وإدراج تغييرات ضمنية بلا أوراق يدعو للعكس عند رفض المالك.",
        },
        ref: "IFRS 15 / EAS 48",
      },
    ],
    extraRatios: [
      {
        name: { en: "Work-in-progress to net assets", ar: "تحت التشغيل إلى صافي الأصول" },
        benchmark: "Total WIP ÷ shareholders' equity; >150% signals estimate concentration",
        redFlag: {
          en: "WIP growing faster than billings on fixed-price work — profit recognized ahead of cash.",
          ar: "تحت التشغيل ينمو أسرع من الفوترة في أعمال السعر الثابت — ربح يعترف به قبل النقد.",
        },
      },
    ],
    extraKams: [
      {
        en: "Revenue recognition on long-term contracts and the estimation of costs to complete.",
        ar: "الاعتراف بالإيراد في العقود طويلة الأجل وتقدير التكاليف حتى الإتمام.",
      },
    ],
    extraPitfalls: [
      {
        en: "Accepting the site engineer's progress report as audit evidence — it is management's assertion, not evidence.",
        ar: "قبول تقرير التقدم من مهندس الموقع كدليل مراجعة — هو تأكيد الإدارة لا دليل.",
      },
    ],
  },
}
