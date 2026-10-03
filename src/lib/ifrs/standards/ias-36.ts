/** IAS 36 — Impairment of Assets */

import type { Standard } from "../types"

export const IAS_36: Standard = {
  code: "IAS 36",
  title: { en: "Impairment of Assets", ar: "انخفاض قيمة الأصول" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 2005 · amended by IFRS 13 & IFRS 16", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل بـ IFRS 13 وIFRS 16" },
  blocks: [
    { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
    {
      kind: "p",
      text: {
        en: "Ensure assets are carried at NO MORE than their recoverable amount, so that the balance sheet never overstates what an impaired asset can still deliver. Applies to: PPE (incl. right-of-use), intangibles, goodwill, investment property measured at COST, equity-method investments, and CGUs. NOT applied to: inventories (IAS 2), deferred tax (IAS 12), employee-benefit assets (IAS 19), financial instruments (IFRS 9), investment property at fair value (IAS 40), non-current assets held for sale (IFRS 5), biological assets (IAS 41) — each has its own impairment machinery.",
        ar: "يكفل ألا تُحمل الأصول بأكثر من المبلغ القابل للاسترداد، فلا تبالغ الميزانية فيما يستطيع الأصل المتدني تحقيقه بعد. ويطبق على: الممتلكات (ومنها أصول الحق في الاستخدام)، وغير الملموسة، والشهرة، والعقارات الاستثمارية بالتكلفة، واستثمارات طريقة الحصة، ووحدات توليد النقد. ولا يطبق على: المخزون (IAS 2)، والضريبة المؤجلة (IAS 12)، وأصول المزايا (IAS 19)، والأدوات المالية (IFRS 9)، والعقارات بالقيمة العادلة (IAS 40)، والأصول المحتفظ بها للبيع (IFRS 5)، والأصول الحيوية (IAS 41) — لكل منها آلته الخاصة.",
      },
    },
    {
      kind: "note",
      text: {
        en: "One sentence carries the standard: CARRYING AMOUNT ≤ RECOVERABLE AMOUNT, and recoverable = the HIGHER of value in use and fair value less costs of disposal — you keep an impaired asset at the better of its two exits.",
        ar: "جملة واحدة تحمل المعيار: القيمة الدفترية ≤ المبلغ القابل للاسترداد، والاسترداد = الأعلى من قيمة الاستخدام والقيمة العادلة ناقص تكاليف التخرد — فتحتفظ بالأصل المتدني عند أفضل مخرجيه.",
      },
    },
    { kind: "h", text: { en: "When to test — triggers vs the annual trio", ar: "متى يُختبر — المحفزات مقابل الثلاثي السنوي" } },
    {
      kind: "tree",
      root: { en: "Impairment testing trigger", ar: "مقدمة اختبار الانخفاض" },
      branches: [
        {
          when: { en: "ANNUAL test regardless of indicators: goodwill · intangibles with INDEFINITE life · intangibles NOT YET AVAILABLE FOR USE — test for impairment every year (timing flexible per asset; goodwill CGU timing: reorganisation within 6 months of the annual test allows a fresh test)", ar: "اختبار سنوي بلا مؤشرات: الشهرة · غير الملموسة ذات العمر غير المحدد · غير الجاهزة للاستخدام بعد — اختبار كل سنة (التوقيت مرن لكل أصل؛ ووحدة الشهرة: إعادة الهيكلة خلال ٦ أشهر من الاختبار السنوي تجيز اختبارًا جديدًا)" },
          then: { en: "Annual test compulsory — same time each year per asset/CGU", ar: "اختبار سنوي إلزامي — في التوقيت ذاته سنويًا لكل أصل/وحدة", red: true },
        },
        {
          when: { en: "EXTERNAL indicators: significant market-value decline beyond use/time; material adverse changes in technological/market/economic/LEGAL environment; increases in market interest rates cutting discount rates", ar: "مؤشرات خارجية: هبوط جوهري بالقيمة السوقية، تغيرات سلبية بالتقنية أو السوق أو البيئة الاقتصادية/القانونية، ارتفاع أسعار الفائدة" },
          then: { en: "Test at the reporting date", ar: "اختبر بتاريخ التقرير", red: true },
        },
        {
          when: { en: "INTERNAL indicators: obsolescence/damage, plans to discontinue/restructure/dispose, worse economic performance than budgeted, dividends from a subsidiary exceed its comprehensive income while the sub carries the goodwill internally", ar: "مؤشرات داخلية: تقادم/تلف، خطط توقف/إعادة هيكلة/تخرد، أداء أسوأ من المخطط، توزيعات من تابعة تتجاوز دخلها الشامل" },
          then: { en: "Test at the reporting date", ar: "اختبر بتاريخ التقرير", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The ANNUAL trio is unconditional: goodwill, indefinite-life intangibles, and intangibles not yet available for use are tested EVERY year even with no indicator in sight — their recoverable amount is simply too fragile to trust. Timing is flexible per asset but must be consistent year to year, and a goodwill CGU reorganised within six months of its annual test date gets a fresh test on the new structure. Everything else waits for an indicator: external (market value falls, the economy turns, rates rise) or internal (damage, restructuring, budgets missed, a subsidiary distributing more than it earns).",
        ar: "الثلاثي السنوي غير مشروط: فالشهرة وغير الملموسة غير محددة العمر وغير الجاهزة للاستخدام بعد تُختبر كل سنة ولو خلت الأفق من مؤشر — فمبلغها القابل للاسترداد هش أدق من أن يوثق به. والتوقيت مرن لكل أصل لكنه ثابت من سنة لسنة، ووحدة الشهرة التي أُعيدت هيكلتها خلال ستة أشهر من تاريخ اختبارها السنوي تجري اختبارًا جديدًا على الهيكل الجديد. وما عدا ذلك ينتظر مؤشرًا: خارجيًا (هبوط القيمة السوقية، انقلاب الاقتصاد، ارتفاع الفائدة) أو داخليًا (تلف، إعادة هيكلة، خروج عن الموازنات، تابعة توزع أكثر مما تكسب).",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Goodwill — annual, at the CGU level, grossed up for partial-NCI subs (see below)", ar: "الشهرة — سنويًا، على مستوى الوحدة، مضخمة للتابعات ذات الحصص غير المسيطرة الجزئية (انظر أدناه)" },
        { en: "Intangible with an INDEFINITE useful life — annual, individually (or in its CGU)", ar: "غير الملموس بعمر إنتاجي غير محدد — سنويًا، منفردًا (أو ضمن وحدته)" },
        { en: "Intangible NOT YET available for use — annual, even though nothing has been amortised yet", ar: "غير الملموس غير الجاهز للاستخدام بعد — سنويًا، ولو لم يستنفد منه شيء بعد" },
      ],
    },
    { kind: "h", text: { en: "Recoverable amount — the higher of", ar: "المبلغ القابل للاسترداد — الأعلى من" } },
    {
      kind: "formula",
      title: { en: "The measurement engines + the floors", ar: "محركات القياس + الحدود" },
      lines: [
        { en: "Recoverable amount = MAX ( fair value less costs of disposal , value in use ) — if EITHER one exceeds carrying, the asset is NOT impaired", ar: "المبلغ القابل للاسترداد = الأعلى من (القيمة العادلة مطروحًا منها تكاليف التخرد، قيمة الاستخدام) — وإن جاوز أحدهما الدفترية فالأصل غير متدنٍ" },
        { en: "FVLCD = IFRS 13 exit price − incremental costs of disposal (legal fees, stamp duty, closing costs — EXCLUDING income tax and interest)", ar: "القيمة العادلة ناقص التكاليف = سعر الخروج وفق IFRS 13 − تكاليف التخرد التضافية (أتعاب قانونية، رسوم، مصاريف إغلاق — دون ضريبة الدخل والفائدة)" },
        { en: "VIU = Σ ( pre-tax cash flow of year t ÷ (1 + pre-tax rate)^t ) — from CONTINUED use + disposal, at management's best estimates", ar: "قيمة الاستخدام = مجموع (تدفق نقدي قبل الضريبة للسنة ت ÷ (١ + معدل قبل الضريبة)^ت) — من الاستخدام المستمر + التخرد، بتقديرات الإدارة المثلى" },
        { en: "Impairment loss = carrying amount − recoverable amount → P&L (revaluation assets: the surplus within equity eats first)", ar: "خسارة الانخفاض = القيمة الدفترية − القابل للاسترداد ← الأرباح (والمعاد تقييمه يستنزف الفائض داخل حقوق الملكية أولًا)" },
        { en: "Per-asset floor in a CGU allocation = HIGHEST of FVLCD (if determinable) · VIU (if determinable) · ZERO", ar: "حد كل أصل في توزيع الوحدة = الأعلى من: القيمة العادلة ناقص التكاليف (إن أمكن تعيينها) · قيمة الاستخدام (إن أمكن تعيينها) · الصفر" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "VIU mechanics examiners love: cash-flow projections over a maximum 5-year horizon unless a longer period can be justified; a growth rate for later years that does not exceed the LONG-TERM average for the market unless a higher rate is justifiable; include the working-capital effects and the overheads ALLOCATABLE to the asset's use; EXCLUDE cash inflows/outflows from financing and income taxes, and exclude future CAPEX that improves or extends (only maintenance capex enters); double-counting — the discount rate must reflect the same risk assumptions as the flows.",
        ar: "تفاصيل قيمة الاستخدام المحببة للممتحنين: توقعات لخمس سنوات كحد أقصى ما لم يبرر أطول؛ ومعدل نمو للسنوات اللاحقة لا يتجاوز المتوسط طويل الأجل للسوق؛ وتشمل أثر رأس المال العامل والتحميلات القابلة للتوزيع؛ وتستبعد تمويل وضرائب الدخل والإنفاق الرأسمالي المحسِّن/الممدد (يدخل الرأسمالي الصياني فقط)؛ ولا ازدواجًا — فمعدل الخصم يعكس افتراضات مخاطر التدفقات ذاتها.",
      },
    },
    {
      kind: "tree",
      title: { en: "FVLCD or VIU?", ar: "القيمة العادلة ناقص التكاليف أم قيمة الاستخدام؟" },
      root: { en: "Which engine drives the recoverable amount?", ar: "أي محرك يقود المبلغ القابل للاسترداد؟" },
      branches: [
        {
          when: { en: "The asset is held for CONTINUED USE and no sale is contemplated", ar: "الأصل محتفظ به للاستخدام المستمر ولا بيع مطروحًا" },
          then: { en: "VIU drives the test (FVLCD often indeterminable for specialised plant)", ar: "قيمة الاستخدام تقود الاختبار (وكثيرًا يتعذر تعيين العادلة ناقص التكاليف لمصنع متخصص)", red: true },
        },
        {
          when: { en: "A DISPOSAL is planned or in progress — the asset is about to be sold", ar: "تخرد مخطط أو جارٍ — الأصل على وشك البيع" },
          then: { en: "FVLCD is the more useful measure (market exit pricing, not a use-based model)", ar: "القيمة العادلة ناقص التكاليف أشد نفعًا (تسعير خروج سوقي لا نموذجًا قائمًا على الاستخدام)", red: true },
        },
        {
          when: { en: "Neither is determinable — no exit market and unreliable flows", ar: "لا يتعين أي منهما — لا سوق خروج وتدفقات غير موثوقة" },
          then: { en: "The recoverable amount falls back to the single determinable engine — estimate the one you can and disclose it", ar: "يرتد المبلغ القابل للاسترداد إلى المحرك الوحيد القابل للتعيين — قدّر ما تستطيع وأفصح عنه", red: true },
        },
      ],
    },
    {
      kind: "example",
      title: { en: "VIU discounting worked", ar: "خصم قيمة الاستخدام بالأرقام" },
      lines: [
        { en: "Pre-tax flows of 200 a year for years 1–3 (disposal proceeds inside the final flow) · pre-tax discount rate 10%", ar: "تدفقات قبل الضريبة ٢٠٠ سنويًا للسنوات ١–٣ (متحصلات التخرد داخل التدفق الأخير) · معدل خصم قبل الضريبة ١٠٪" },
        { en: "VIU = 200 × 2.487 (3-year annuity at 10%) = 497", ar: "قيمة الاستخدام = ٢٠٠ × ٢٫٤٨٧ (مرتبة ٣ سنوات بـ١٠٪) = ٤٩٧" },
        { en: "FVLCD = 430 (a bid exists) → recoverable amount = MAX(430, 497) = 497", ar: "القيمة العادلة ناقص التكاليف = ٤٣٠ (يوجد عرض شراء) ← المبلغ القابل للاسترداد = الأعلى(٤٣٠، ٤٩٧) = ٤٩٧" },
        { en: "Carrying amount 560 → impairment loss = 560 − 497 = 63 to P&L", ar: "القيمة الدفترية ٥٦٠ ← خسارة الانخفاض = ٥٦٠ − ٤٩٧ = ٦٣ بالأرباح" },
      ],
    },
    { kind: "h", text: { en: "The discount rate", ar: "معدل الخصم" } },
    {
      kind: "p",
      text: {
        en: "The rate is PRE-TAX, reflects CURRENT market assessments of the time value of money, and prices the RISKS SPECIFIC to the asset that the cash-flow projections have not already adjusted for — never both, or the risk is counted twice. The entity's own incremental borrowing rate is only a starting point: adjust it to the asset's risk and strip the tax. Only a post-tax market rate observable? Derive the pre-tax equivalent before discounting pre-tax flows.",
        ar: "المعدل قبل الضريبة، ويعكس تقييمات السوق الجارية للقيمة الزمنية للنقد، ويسعّر المخاطر الخاصة بالأصل التي لم تعالجها توقعات التدفق النقدي أصلًا — لا الاثنان معًا وإلا عدّت المخاطرة مرتين. ومعدل الاقتراض الحدي للمنشأة نقطة انطلاق فحسب: فعّده على مخاطرة الأصل ونزّهه من الضريبة. ولا يتوافر إلا معدل سوقي بعد الضريبة؟ اشتق مكافئه قبل الضريبة قبل خصم التدفقات قبل الضريبية.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "VIU is PRE-TAX in BOTH the flows and the discount rate — the classic exam error is discounting pre-tax flows at a POST-TAX rate (or the reverse). If only a post-tax rate is observable, adjust it before using.",
        ar: "قيمة الاستخدام قبل الضريبة في التدفقات ومعدل الخصم معًا — والخطأ الكلاسيكي خصم تدفقات قبل الضريبة بمعدل بعدها (أو العكس). فإن لم يتوافر إلا معدل بعد الضريبة فعدّله أولًا.",
      },
    },
    { kind: "h", text: { en: "Cash-generating units — identifying the unit", ar: "وحدات توليد النقد — تحديد الوحدة" } },
    {
      kind: "p",
      text: {
        en: "When the asset's cash flows are not independent, test the SMALLEST identifiable group of assets generating largely independent cash inflows — the CGU. GOODWILL is allocated to the CGU (or group of CGUs) expected to benefit from the acquisition's synergies — never larger than an operating segment before aggregation (rebuttable). CORPORATE ASSETS (head office, a research lab) join the CGU tests on a reasonable allocation basis or are tested as a group of CGUs. The CGU must be IDENTIFIABLE: cash inflows largely independent of other assets' inflows.",
        ar: "عندما لا تكون تدفقات الأصل مستقلة تُختبر أصغر مجموعة أصول يمكن تحديدها تولّد تدفقات داخلية مستقلة إلى حد كبير — وحدة توليد النقد. وتوزع الشهرة على الوحدة (أو مجموعة وحدات) المنتظر استفادتها من تآزر الاستحواذ — وبحجم لا يتجاوز قطاعًا تشغيليًا قبل التجميع (قابل للدحض). والأصول المؤسسية (المقر الرئيسي، معمل أبحاث) تنضم لاختبارات الوحدات بأساس توزيع معقول أو تختبر كمجموعة وحدات. ويشترط أن تكون تدفقات الوحدة مستقلة إلى حد كبير.",
      },
    },
    {
      kind: "p",
      text: {
        en: "The CGU's CARRYING AMOUNT is its own discipline: include goodwill allocated to it, include corporate assets allocated on a reasonable and consistent basis, and include working capital the unit needs — but EXCLUDE liabilities unless the recoverable-amount measure requires them (net selling price of a CGU sold with its payables). The receiving line: how management MONITORS the business internally (product lines, locations, divisions) is the strongest evidence of what the CGUs are — but the inflows must still be largely independent at that level.",
        ar: "القيمة الدفترية للوحدة انضباط قائم بذاته: ضمّن الشهرة الموزعة عليها، والأصول المؤسسية الموزعة بأساس معقول ثابت، ورأس المال العامل الذي تحتاجه — واستبعد الالتزامات إلا إذا اقتضى مقياس الاسترداد ذلك (سعر بيع صافٍ لوحدة تباع مع دائنيها). وخط الاستقبال: كيف تراقب الإدارة العمل داخليًا (خطوط إنتاج، مواقع، قطاعات) هو أقوى دليل على ماهية الوحدات — لكن يلزم أن تكون التدفقات عند ذلك المستوى مستقلة إلى حد كبير.",
      },
    },
    {
      kind: "tree",
      title: { en: "Identifying the CGU", ar: "تحديد الوحدة" },
      root: { en: "The asset's inflows are not independent — what is the unit?", ar: "تدفقات الأصل غير مستقلة — فما الوحدة؟" },
      branches: [
        {
          when: { en: "The SMALLEST identifiable group of assets whose inflows are largely INDEPENDENT of the rest (a factory line, a retail store, a country operation)", ar: "أصغر مجموعة أصول يمكن تحديدها تدفقاتها مستقلة إلى حد كبير عن الباقي (خط إنتاج، فرع تجزئة، تشغيل بلد)" },
          then: { en: "THAT is the CGU — one level below it the inflows stop being independent", ar: "تلك هي الوحدة — وتحتها يصير المستوى غير مستقل", red: true },
        },
        {
          when: { en: "Management monitors at a coarser level (divisions, regions) — is that the CGU?", ar: "تراقب الإدارة عند مستوى أكبر (قطاعات، أقاليم) — أهذه الوحدة؟" },
          then: { en: "Monitoring is EVIDENCE, not the definition — the test is the independence of the smallest group's inflows", ar: "الرقابة دليل لا تعريف — فالاختبار استقلال تدفقات أصغر مجموعة", red: true },
        },
        {
          when: { en: "Goodwill from an acquisition sits above the units", ar: "شهرة استحواذ تسبق الوحدات في الجلوس فوقها" },
          then: { en: "Allocate to the smallest group of CGUs expected to enjoy the synergies — never above an operating segment pre-aggregation", ar: "وزّعها على أصغر مجموعة وحدات منتظر استفادتها من التآزر — ولا تتجاوز قطاعًا تشغيليًا قبل التجميع", red: true },
        },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Corporate assets with no individual cash flows (the HQ building) are tested only as part of CGU tests — the exam hint 'head office not allocated' means it joins the smallest CGU group benefiting from it.",
        ar: "الأصول المؤسسية عديمة التدفقات المستقلة (مبنى المقر) تختبر ضمن وحدات فقط — وتلميح «المقر الرئيسي غير موزع» يعني انضمامه لأصغر مجموعة وحدات مستفيدة منه.",
      },
    },
    { kind: "h", text: { en: "Goodwill allocation & the gross-up", ar: "توزيع الشهرة وتضخيمها" } },
    {
      kind: "p",
      text: {
        en: "When goodwill recognised at acquisition is only the PARENT's share (partial method), a CGU whose carrying NCI exceeds its carrying goodwill must GROSS UP both the goodwill and the NCI for the impairment test — the test must run on 100% of the goodwill. The purpose is fairness: the recoverable amount of the CGU reflects ALL its net assets, so the carrying it is compared with must reflect all the goodwill inside it. Any impairment loss is then attributed between parent and NCI on the same basis the group's profit or loss is allocated.",
        ar: "حين تكون الشهرة المعترف بها عند الاستحواذ حصة الأم فقط (الطريقة الجزئية)، ويجاوز في الوحدةَ الحصةَ غير المسيطرة الدفتريةُ الشهرةَ الدفترية، وجب تضخيم الشهرة والحصة معًا لأجل الاختبار — إذ يجري على ١٠٠٪ من الشهرة. والغاية الإنصاف: فالمبلغ القابل للاسترداد للوحدة يعكس صافي أصولها كلها، فوجب أن يعكس المقابل الدفتري كل الشهرة الكامنة فيها. ثم تُسند الخسارة بين الأم والحصة غير المسيطرة على الأساس ذاته الذي يوزع به ربح المجموعة وخسارتها.",
      },
    },
    {
      kind: "example",
      title: { en: "The gross-up worked (80% parent)", ar: "التضخيم بالأرقام (أم بـ٨٠٪)" },
      lines: [
        { en: "Parent owns 80% · goodwill recognised (parent's share, partial method) 400 · identifiable net assets of the sub 1,500 · NCI (20% × 1,500) 300", ar: "الأم تملك ٨٠٪ · الشهرة المعترف بها (حصة الأم، الطريقة الجزئية) ٤٠٠ · صافي الأصول المحددة للتابعة ١٬٥٠٠ · الحصة غير المسيطرة (٢٠٪ × ١٬٥٠٠) ٣٠٠" },
        { en: "Book carrying of the CGU = 1,500 + 400 + 300 = 2,200 · recoverable amount 2,000 → the NAIVE test says loss 200", ar: "الدفترية الدفترية للوحدة = ١٬٥٠٠ + ٤٠٠ + ٣٠٠ = ٢٬٢٠٠ · والمسترد ٢٬٠٠٠ ← الاختبار الساذج يقول خسارة ٢٠٠" },
        { en: "Gross-up: implied full goodwill = 400 ÷ 0.8 = 500 → add the unrecognised NCI goodwill 100 → test on 2,300 → TRUE loss = 300", ar: "التضخيم: الشهرة الكاملة الضمنية = ٤٠٠ ÷ ٠٫٨ = ٥٠٠ ← أضف شهرة الحصة غير المعترف بها ١٠٠ ← اختبر على ٢٬٣٠٠ ← الخسارة الحقيقية = ٣٠٠" },
        { en: "Loss all against grossed-up goodwill 500, attributed 80/20: parent 240 (goodwill 400 → 160) · NCI absorbs 60 (300 → 240)", ar: "الخسارة كلها على الشهرة المضخمة ٥٠٠، تسند ٨٠/٢٠: الأم ٢٤٠ (الشهرة ٤٠٠ ← ١٦٠) والحصة غير المسيطرة تستوعب ٦٠ (٣٠٠ ← ٢٤٠)" },
      ],
    },
    { kind: "h", text: { en: "The allocation drill", ar: "تمرين التوزيع" } },
    {
      kind: "steps",
      title: { en: "The six-step impairment sequence", ar: "تسلسل الانخفاض ذو الست خطوات" },
      items: [
        { en: "Identify the CGU and allocate goodwill to the lowest level that benefits from the synergies (never above an operating segment pre-aggregation)", ar: "حدد الوحدة ووزّع الشهرة على أدنى مستوى ينتفع بتآزر الاستحواذ (ولا يتجاوز قطاعًا تشغيليًا قبل التجميع)" },
        { en: "Determine the CGU's CARRYING AMOUNT: unit assets + allocated goodwill (grossed up for partial NCI) + reasonably allocated corporate assets", ar: "حدد القيمة الدفترية للوحدة: أصول الوحدة + الشهرة الموزعة (مضخمة للحصة غير المسيطرة الجزئية) + الأصول المؤسسية الموزعة معقولًا" },
        { en: "Determine the RECOVERABLE AMOUNT = higher of FVLCD and VIU (pre-tax engine throughout)", ar: "حدد المبلغ القابل للاسترداد = الأعلى من العادلة ناقص التكاليف وقيمة الاستخدام (محرك قبل الضريبة من أوله لآخره)" },
        { en: "LOSS = carrying − recoverable (only if positive) → P&L (revalued assets: the surplus within equity first)", ar: "الخسارة = الدفترية − المسترد (إن كانت موجبة فقط) ← الأرباح (والمعاد تقييمه: الفائض داخل حقوق الملكية أولًا)" },
        { en: "Reduce GOODWILL first — down to zero, floor-free", ar: "خفض الشهرة أولًا — حتى الصفر بلا حد واقٍ" },
        { en: "Then the other assets PRO RATA on carrying amounts, each floored at the highest of FVLCD / VIU / zero; blocked amounts re-allocate to the remaining assets — a residual goes to liabilities only if another standard requires", ar: "ثم بقية الأصول بالتناسب على القيم الدفترية، وكل أصل بحد الأعلى من العادلة ناقص التكاليف / قيمة الاستخدام / الصفر؛ وما حظره الحد يعاد توزيعه على الباقي — والفضلة تذهب لالتزامات فقط إن أوجبها معيار آخر" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The per-asset floors keep the allocation reasonable and prudent: an asset whose FVLCD or VIU is determinable never carries below that measure, and nothing carries below zero. A loss blocked by one asset's floor does not vanish — it re-allocates pro rata to the remaining assets of the unit, cascading until fully absorbed or reduced to zero across the board. Goodwill itself has NO floor: it goes first and it goes whole.",
        ar: "حدود الأصول تحفظ للتوزيع منطقه المعقول المتحوط: فالأصل القابل لتعيين عادلته ناقص التكاليف أو قيمة استخدامه لا يحمل دون ذلك المقياس، ولا يحمل شيء دون الصفر. والخسارة التي يحجبها حد أحد الأصول لا تتلاشى — بل تعاد بالتناسب على أصول الوحدة الباقية، متتالية حتى تستوعب كاملةً أو تنعدم عبر الجميع. أما الشهرة فلا حد لها: تذهب أولًا وتذهب كاملةً.",
      },
    },
    {
      kind: "journal",
      title: { en: "CGU allocation with floor rules", ar: "توزيع خسارة الوحدة بحدود" },
      rows: [
        { dr: { en: "Impairment loss — first reduce goodwill", ar: "خسارة انخفاض — تخفض الشهرة أولًا" }, cr: { en: "Goodwill", ar: "الشهرة" }, red: true },
        { dr: { en: "— then other assets pro-rata on carrying amounts", ar: "— ثم بقية الأصول بالتناسب على القيم الدفترية" }, cr: { en: "PPE / intangibles / ROU assets", ar: "ممتلكات/غير ملموسة/أصول حق استخدام" }, red: true },
        { cr: { en: "FLOOR per asset: never below the HIGHEST of FVLCD (if determinable), VIU (if determinable), and ZERO", ar: "حد لكل أصل: لا ينزل عن الأعلى من القيمة العادلة ناقص التكاليف وقيمة الاستخدام إن أمكن تعيينهما والصفر" }, red: true },
        { cr: { en: "Any unallocatable loss → goodwill again (or the CGU's other assets)", ar: "ما يتعذر توزيعه يعود للشهرة (أو لبقية أصول الوحدة)" } },
      ],
    },
    {
      kind: "example",
      title: { en: "CGU impairment allocation", ar: "توزيع انخفاض وحدة" },
      lines: [
        { en: "CGU carrying: goodwill 100 · patent 200 · PPE 500 · (total 800). Recoverable amount 560 → loss 240", ar: "وحدة بقيم: شهرة ١٠٠ · براءة ٢٠٠ · ممتلكات ٥٠٠ (الإجمالي ٨٠٠). والقابل للاسترداد ٥٦٠ ← خسارة ٢٤٠" },
        { en: "Step 1: goodwill wiped: 100 → 0", ar: "الخطوة ١: تمحو الشهرة: ١٠٠ ← صفر" },
        { en: "Step 2: remaining 140 pro-rata on patent/PPE (200:500): patent −40 → 160 · PPE −100 → 400", ar: "الخطوة ٢: المتبقي ١٤٠ بالتناسب (٢٠٠:٥٠٠): البراءة −٤٠ ← ١٦٠ · الممتلكات −١٠٠ ← ٤٠٠" },
        { en: "If the patent's FVLCD were 170: the floor bites — patent stops at 170 (loss 30 only) and the excess 10 reallocates to PPE (loss 110)", ar: "لو كانت القيمة العادلة ناقص التكاليف للبراءة ١٧٠: يوقف الحدُّ البراءةَ عند ١٧٠ (خسارة ٣٠ فقط) ويحال الفارق ١٠ للممتلكات (خسارة ١١٠)" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Allocation order is a fixed drill: goodwill FIRST, then the rest pro-rata with per-asset floors. Reversal order is the mirror (goodwill last/never). Write the drill on your exam plan before the numbers.",
        ar: "ترتيب التوزيع تمرين ثابت: الشهرة أولًا ثم الباقي بالتناسب مع حدود الأصول. والرد عكسه (الشهرة أخيرًا/أبدًا). اكتب التمرين في خطة الإجابة قبل الأرقام.",
      },
    },
    { kind: "h", text: { en: "Reversals — the goodwill wall", ar: "الرد — وجدار الشهرة" } },
    {
      kind: "tree",
      root: { en: "Impairment loss reversing?", ar: "هل تُرد خسارة الانخفاض؟" },
      branches: [
        {
          when: { en: "GOODWILL impairment — never reversed (the deal's economics cannot be un-proven)", ar: "انخفاض الشهرة — لا يرد أبدًا (اقتصاديات الصفقة لا يمكن نفيها بعد وقوعها)" },
          then: { en: "NO reversal — the single most-tested IAS 36 rule", ar: "لا رد — أشهر قاعدة في IAS 36", red: true },
        },
        {
          when: { en: "Other assets: reversal ONLY if the estimate change came from an actual change in the assumptions (not the unwinding of discounting)", ar: "بقية الأصول: الرد فقط إذا نشأ التقدير الجديد عن تغير فعلي في الافتراضات لا عن فك الخصم بمرور الزمن" },
          then: { en: "Reverse through P&L up to the carrying amount that WOULD have existed (net of depreciation) absent the impairment", ar: "يُرد بالأرباح حتى القيمة الدفترية التي كانت ستكون (صافي الإهلاك) لولا الانخفاض", red: true },
        },
        {
          when: { en: "Asset carried at the REVALUATION model (IAS 16/38)", ar: "أصل بنموذج إعادة التقييم (IAS 16/38)" },
          then: { en: "The reversal follows the REVALUATION rules — first the revaluation surplus, then P&L", ar: "يتبع الرد قواعد إعادة التقييم — الفائض أولًا ثم الأرباح", red: true },
        },
        {
          when: { en: "Reversal allocated to a CGU", ar: "رد موزع على وحدة" },
          then: { en: "Pro-rata on carrying amounts EXCEPT goodwill (which never rises back); same per-asset floors apply in reverse", ar: "بالتناسب على القيم الدفترية عدا الشهرة (لا ترتفع أبدًا)؛ وبالحدود ذاتها عكسيًا" },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The reversal wall: the restored carrying amount may never exceed the carrying amount that WOULD have existed — net of depreciation — had no impairment ever been recognised. Recompute that notional first, cap the reversal at it, and credit the difference to P&L. Two classic exclusions: the passage of time (VIU rising merely because the discount unwinds) is NOT a reversal, and goodwill's wall never opens — an acquisition's goodwill, once written down, stays written down.",
        ar: "جدار الرد: لا يجوز أن يتجاوز المبلغ الدفتري المسترد القيمة الدفترية التي كانت ستكون — صافي الإهلاك — لو لم يعترف بانخفاض قط. أعد حساب ذلك الافتراضي أولًا، وحدّ الرد عنده، وقيّد الفرق دائنًا بالأرباح. واستثناءان كلاسيكيان: مرور الزمن (ارتفاع قيمة الاستخدام لمجرد فك الخصم) ليس ردًا، وجدار الشهرة لا ينفتح أبدًا — فشهرة الاستحواذ المكتوبة هبوطًا تبقى هابطة.",
      },
    },
    {
      kind: "journal",
      title: { en: "Loss then capped reversal — one asset's story", ar: "خسارة ثم رد محدد — قصة أصل واحد" },
      rows: [
        { dr: { en: "Impairment loss (P&L) 120", ar: "خسارة انخفاض (بالأرباح) ١٢٠" }, cr: { en: "Accumulated impairment 120", ar: "مجمع الانخفاض ١٢٠" }, red: true },
        { cr: { en: "Carrying falls 600 → 480; depreciation recomputed over the revised 6-year remaining life → 80/yr", ar: "تهبط الدفترية ٦٠٠ ← ٤٨٠؛ ويعاد حساب الإهلاك على ٦ سنوات متبقية معدلة ← ٨٠ سنويًا" } },
        { dr: { en: "Accumulated impairment 80", ar: "مجمع الانخفاض ٨٠" }, cr: { en: "Impairment reversal (P&L) 80 — capped at the not-impairment carrying 400, not at recoverable 440", ar: "رد انخفاض (بالأرباح) ٨٠ — محددًا عند الدفترية بلا انخفاض ٤٠٠ لا عند المسترد ٤٤٠" }, red: true },
      ],
    },
    {
      kind: "example",
      title: { en: "The reversal cap worked", ar: "حد الرد بالأرقام" },
      lines: [
        { en: "Cost 1,000 · 10-year life · after 4 years carrying 600 · impairment year 4: recoverable 480 → loss 120 → carrying 480 over 6 remaining years → 80/yr", ar: "تكلفة ١٬٠٠٠ · عمر ١٠ سنوات · بعد ٤ سنوات دفترية ٦٠٠ · انخفاض السنة الرابعة: المسترد ٤٨٠ ← خسارة ١٢٠ ← دفترية ٤٨٠ على ٦ سنوات متبقية ← ٨٠ سنويًا" },
        { en: "Two years later: carrying = 480 − 160 = 320 · new recoverable amount 440", ar: "بعد سنتين: الدفترية = ٤٨٠ − ١٦٠ = ٣٢٠ · والمسترد الجديد ٤٤٠" },
        { en: "Carrying that WOULD have existed (no impairment): 600 − (100 × 2) = 400 → reversal = 400 − 320 = 80 (the cap binds below 440)", ar: "الدفترية التي كانت ستكون (بلا انخفاض): ٦٠٠ − (١٠٠ × ٢) = ٤٠٠ ← الرد = ٤٠٠ − ٣٢٠ = ٨٠ (الحد يقيّد دون ٤٤٠)" },
        { en: "Restored carrying 400; future depreciation runs on the remaining 4-year life", ar: "الدفترية المستردة ٤٠٠؛ والإهلاك اللاحق على العمر المتبقي ٤ سنوات" },
      ],
    },
    { kind: "h", text: { en: "Corporate assets & head office — the two tests", ar: "الأصول المؤسسية والمقر الرئيسي — الاختباران" } },
    {
      kind: "p",
      text: {
        en: "CORPORATE ASSETS (head-office building, a central research lab, group IT) have no independent inflows, so they only ever join CGU tests. If their use is specific to one unit's cash flows, allocate the carrying amount on a REASONABLE AND CONSISTENT basis (head-office costs per unit's headcount, the lab per project hours). If no reasonable allocation basis exists, they are tested only at the GROUP level.",
        ar: "الأصول المؤسسية (مبنى المقر الرئيسي، معمل أبحاث مركزي، تقنية معلومات المجموعة) لا تدفقات مستقلة لها، فلا تنضم إلا لاختبارات الوحدات. فإن كان استخدامها خاصًا بتدفقات وحدة واحدة، وزّع قيمتها الدفترية بأساس معقول ثابت (تكاليف المقر بعدد العاملين بالوحدة، والمعمل بساعات المشروعات). وإن انتفى أساس معقول، لم تختبر إلا على مستوى المجموعة.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "TEST 1 — the CGU test: allocate the corporate asset's carrying to each unit on a reasonable, consistent basis and include it in that unit's carrying amount", ar: "الاختبار ١ — اختبار الوحدة: وزّع الدفترية للأصل المؤسسي على كل وحدة بأساس معقول ثابت وضمّنها في دفترية الوحدة" },
        { en: "TEST 2 — the group test (when no reasonable allocation exists): compare the carrying amount of the smallest GROUP of CGUs including the corporate asset with that group's recoverable amount", ar: "الاختبار ٢ — اختبار المجموعة (عند غياب أساس معقول): قارن الدفترية لأصغر مجموعة وحدات تشمل الأصل المؤسسي بمبلغها القابل للاسترداد كمجموعة" },
        { en: "Both tests matter in the same period — the exam's 'head office' line is bait for forgetting test 2", ar: "الاختباران يهمان في الفترة ذاتها — وسطر «المقر الرئيسي» في الامتحان طُعم لنسيان الاختبار الثاني" },
      ],
    },
    { kind: "h", text: { en: "Revaluation-model assets — OCI eats first", ar: "أصول إعادة التقييم — الدخل الشامل يستوعب أولًا" } },
    {
      kind: "p",
      text: {
        en: "For an asset carried under the IAS 16/38 revaluation model, an impairment loss is a REVALUATION DECREASE in substance: first eliminate the asset's own revaluation surplus within equity (OCI), and only the excess goes to P&L. The reversal mirrors the corridor: restore the P&L loss first, then the surplus. This is the corridor logic of IAS 16 wearing an impairment coat — the same per-asset surplus, the same order, the same direction.",
        ar: "للأصل المحمل بنموذج إعادة التقييم في IAS 16/38، خسارة الانخفاض إعادةُ تقييم لأسفل في الجوهر: استنزف أولًا فائض الأصل ذاته داخل حقوق الملكية (الدخل الشامل)، ولا تذهب الزيادة وحدها للأرباح. والرد يعكس الممر: رد خسارة الأرباح أولًا ثم الفائض. هذا منطق ممر IAS 16 بمعطف انخفاض — الفائض ذاته لكل أصل، والترتيب ذاته، والاتجاه ذاته.",
      },
    },
    {
      kind: "journal",
      title: { en: "Revalued asset impairment — the corridor entries", ar: "انخفاض أصل معاد تقييمه — قيود الممر" },
      rows: [
        { dr: { en: "Revaluation surplus (equity) 200 — the asset's own", ar: "احتياطي إعادة التقييم (حقوق الملكية) ٢٠٠ — فائض الأصل ذاته" }, cr: { en: "Accumulated impairment 200", ar: "مجمع الانخفاض ٢٠٠" } },
        { dr: { en: "Impairment loss (P&L) 200 — the excess only", ar: "خسارة انخفاض (بالأرباح) ٢٠٠ — الزيادة فقط" }, cr: { en: "Accumulated impairment 200", ar: "مجمع الانخفاض ٢٠٠" }, red: true },
        { cr: { en: "Building revalued carrying 900 · own surplus 200 · recoverable 500 → total loss 400 = equity 200 + P&L 200", ar: "مبنى معاد تقييمه دفتريته ٩٠٠ وفائضه ٢٠٠ والمسترد ٥٠٠ ← خسارة كلية ٤٠٠ = حقوق ملكية ٢٠٠ + أرباح ٢٠٠" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Impairment losses & reversals in P&L for each class of assets; the line items affected", ar: "الخسائر والردود في الأرباح لكل فئة أصول والبنود المتأثرة" },
        { en: "For each material impairment: events & circumstances; the CGU's description; the recoverable amount and WHICH measure (FVLCD/VIU); the discount rate", ar: "لكل انخفاض جوهري: الأحداث والظروف؛ وصف الوحدة؛ والمبلغ القابل للاسترداد وأي مقياس؛ ومعدل الخصم" },
        { en: "For goodwill: the carrying amount by CGU/segment; the reason the tested value exceeds carrying (headroom) and the key assumptions' sensitivity", ar: "للشهرة: القيمة الدفترية لكل وحدة/قطاع؛ وهامش الأمان وافتراضاته وحساسيته" },
        { en: "For CGUs with goodwill / indefinite-life intangibles: the way goodwill was allocated and the reason the CGU can absorb it", ar: "للوحدات ذات شهرة أو غير ملموسة غير محددة العمر: كيفية توزيع الشهرة وسبب قدرة الوحدة على استيعابها" },
        { en: "Estimation-uncertainty disclosures interact with IAS 1 (judgement + sensitivity)", ar: "التقاطع مع إفصاحات عدم تأكد التقديرات في IAS 1" },
      ],
    },
    { kind: "h", text: { en: "Interactions with the rest of the corpus", ar: "التقاطعات مع بقية المعايير" } },
    {
      kind: "list",
      items: [
        { en: "IAS 16 / IAS 38 — the carrying amount their models produce is what IAS 36 tests; revalued assets route the loss through the surplus first; the impaired asset then depreciates over its REVISED remaining life", ar: "IAS 16 / IAS 38 — القيمة الدفترية التي تنتجها نماذجهما هي ما يختبره IAS 36؛ والمعاد تقييمه يمرر الخسارة عبر الفائض أولًا؛ ثم يهلك المتدني على عمره المتبقي المعدل" },
        { en: "IFRS 3 / IFRS 10 — the gross-up machinery exists because IFRS 3 allows partial goodwill; a goodwill loss is attributed to parent and NCI on the profit-allocation basis", ar: "IFRS 3 / IFRS 10 — آلية التضخيم قائمة لأن IFRS 3 يجيز الشهرة الجزئية؛ وخسارة الشهرة تسند بين الأم والحصة غير المسيطرة على أساس توزيع الأرباح" },
        { en: "IFRS 5 — once an asset (or disposal group) is held for sale, IAS 36 stands down: fair value less costs to sell and no depreciation take over", ar: "IFRS 5 — متى صنّف الأصل (أو مجموعة تخرد) محتفظًا به للبيع ينسحب IAS 36: وتتولى القيمة العادلة ناقص تكاليف البيع مع توقف الإهلاك" },
        { en: "IAS 23 — capitalisation of borrowing costs on an asset under construction continues while activities continue; the asset is tested with those costs inside its carrying amount, and an extended interruption is both a suspension and an indicator", ar: "IAS 23 — تستمر رسملة تكاليف الاقتراض لأصل تحت الإنشاء ما دامت الأنشطة مستمرة؛ ويختبر الأصل بتلك التكاليف داخل دفتريته، والانقطاع الممتد تعليق ومؤشر معًا" },
        { en: "IAS 12 — impairment losses often create deductible temporary differences: the deferred tax asset runs through IAS 12's own recoverability test", ar: "IAS 12 — خسائر الانخفاض كثيرًا ما تنشئ فروقًا زمنية خصومة: وأصل الضريبة المؤجلة يجري على اختبار استرداده في IAS 12 ذاته" },
        { en: "IFRS 13 — FVLCD is an IFRS 13 measurement: exit price, market participants, costs of disposal that are directly attributable", ar: "IFRS 13 — العادلة ناقص التكاليف قياس وفق IFRS 13: سعر خروج، ومشاركو سوق، وتكاليف تخرد مرتبطة مباشرةً" },
      ],
    },
    { kind: "h", text: { en: "The exam traps of IAS 36", ar: "فخاخ IAS 36 الامتحانية" } },
    {
      kind: "list",
      items: [
        { en: "The CGU is the SMALLEST identifiable group with largely independent inflows — management's monitoring levels are evidence, not the definition", ar: "الوحدة هي أصغر مجموعة يمكن تحديدها بتدفقات مستقلة إلى حد كبير — ومستويات رقابة الإدارة دليل لا تعريف" },
        { en: "Head office: TWO tests (allocated CGU test + the group test when no reasonable allocation exists) — one without the other is half an answer", ar: "المقر الرئيسي: اختباران (اختبار الوحدة بالتوزيع + اختبار المجموعة عند غياب أساس معقول) — أحدهما بلا الآخر نصف إجابة" },
        { en: "Discount rate: PRE-TAX and asset-specific — a post-tax rate against pre-tax flows is the classic computed error", ar: "معدل الخصم: قبل الضريبة وخاص بالأصل — فمعدل بعد الضريبة مع تدفقات قبلها الخطأ الحسابي الكلاسيكي" },
        { en: "Goodwill: gross up for partial NCI, reduce first, NEVER reverse", ar: "الشهرة: ضخّمها للحصة غير المسيطرة الجزئية، وخفضها أولًا، ولا ترد أبدًا" },
        { en: "Reversal cap: the not-impairment carrying amount NET OF DEPRECIATION — recompute it before touching the new recoverable amount", ar: "حد الرد: القيمة الدفترية بلا انخفاض صافي الإهلاك — أعد حسابها قبل لمس المبلغ المسترد الجديد" },
        { en: "VIU rising only because the discount unwinds (time passing) is NOT a reversal", ar: "ارتفاع قيمة الاستخدام لمجرد فك الخصم (مرور الزمن) ليس ردًا" },
        { en: "The unwinding of the discount on a DECOMMISSIONING provision is an IAS 23 borrowing cost, not an impairment event", ar: "فك الخصم على مخصص الفك تكلفة اقتراض وفق IAS 23 لا حدث انخفاض قيمة" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Write the six-step sequence BEFORE the numbers: CGU + goodwill level → carrying (grossed-up) → recoverable (max of the two engines) → loss → goodwill first → pro-rata with floors. The examiner marks the drill as much as the arithmetic.",
        ar: "اكتب التسلسل ذا الست خطوات قبل الأرقام: الوحدة ومستوى الشهرة ← الدفترية (المضخمة) ← المسترد (الأعلى من المحركين) ← الخسارة ← الشهرة أولًا ← التناسب مع الحدود. فالممتحن يدرّج التمرين بقدر ما يدرّج الحساب.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Why goodwill never reverses: after a write-down the CGU's carrying no longer contains the purchased synergies — a later recovery in the unit's value is presumed to be INTERNAL goodwill generated by the business itself, which IAS 38 prohibits recognising. The wall is the two standards shaking hands.",
        ar: "لماذا لا ترد الشهرة أبدًا: بعد الكتابة الهابطة لم تعد دفترية الوحدة تحوي تآزر الشراء — فيُفترض أن تعافي قيمتها لاحقًا شهرة داخلية ولدها العمل ذاته، يحظر IAS 38 الاعتراف بها. والجدار مصافحة بين المعيارين.",
      },
    },
  ],
}
