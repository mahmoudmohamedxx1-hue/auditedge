/** IAS 19 — Employee Benefits */

import type { Standard } from "../types"

export const IAS_19: Standard = {
  code: "IAS 19",
  title: { en: "Employee Benefits", ar: "مزايا العاملين" },
  topic: "revenue",
  effective: { en: "Effective 1 Jan 2013 · amended 2014 (funding & plan amendments)", ar: "سارٍ من ١ يناير ٢٠١٣ · معدل ٢٠١٤" },
  blocks: [
    { kind: "h", text: { en: "Objective & the four categories", ar: "الهدف والفئات الأربع" } },
    {
      kind: "p",
      text: {
        en: "Prescribe the accounting for every form of employee benefit except share-based payment (IFRS 2 owns that). The recognition principle is a single sentence: recognise the expense when the EMPLOYEE renders the service that earns the benefit — the entity records a liability (or prepayment) for the unsettled part. Four categories, each with its own machinery.",
        ar: "يحدد محاسبة كل صور مزايا العاملين عدا الدفع بالأسهم (مملوك IFRS 2). ومبدأ الاعتراف جملة واحدة: يحمَّل المصروف عندما يؤدي العامل الخدمة المكتسبة للمنفعة — مع إثبات التزام (أو مدفوع مقدما) عن الجزء غير المسوى. أربع فئات لكل منها آلتها.",
      },
    },
    {
      kind: "tree",
      root: { en: "Which category is the benefit?", ar: "أي فئة هذه المنفعة؟" },
      branches: [
        {
          when: { en: "SHORT-TERM — due within 12 months of service (salaries, social security, paid leave, bonuses, profit-share, medical); undiscounted", ar: "قصيرة الأجل — تُسوى خلال ١٢ شهرًا من الخدمة (أجور، تأمينات، إجازات مدفوعة، مكافآت، مشاركة أرباح، طبية)؛ بلا خصم" },
          then: { en: "Accrue when the service is rendered — the simplest case", ar: "تستحق عند أداء الخدمة — أبسط الحالات", red: true },
        },
        {
          when: { en: "POST-EMPLOYMENT — after retirement: pensions, retiree medical, life cover", ar: "ما بعد التوظيف — بعد التقاعد: معاشات، طبية للمتقاعدين، تأمين حياة" },
          then: { en: "Defined CONTRIBUTION (a fixed pot) vs Defined BENEFIT (a promise) — the giant split below", ar: "اشتراكات محددة مقابل مزايا محددة — الانقسام الكبير أدناه", red: true },
        },
        {
          when: { en: "OTHER LONG-TERM — beyond 12 months: long-service leave, long-term disability, sabbaticals, profit-share paid ≥ 12 months later", ar: "طويلة الأجل أخرى — بعد ١٢ شهرًا: إجازات طويلة الخدمة، عجز طويل، إجازات بحثية، أرباح تدفع لاحقًا" },
          then: { en: "DISCOUNTED actuarial-style measurement, remeasured at each reporting date — a mini defined-benefit engine", ar: "قياس اكتواري مخصوم يعاد في كل تقرير — محرك مزايا محددة مصغر", red: true },
        },
        {
          when: { en: "TERMINATION — end-of-service lump sums, redundancy", ar: "إنهاء الخدمة — مكافآت نهاية الخدمة، تسريح" },
          then: { en: "Recognise the FULL liability when the entity is DEMONSTRABLY COMMITTED (plan announced with detail) — earlier than IAS 37's restructuring trigger", ar: "يعترف بالالتزام كاملًا عند الالتزام الواضح (خطة معلنة مفصلة) — أبكر من محفز إعادة الهيكلة في IAS 37", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Short-term subtleties", ar: "دقائق القصيرة الأجل" } },
    {
      kind: "list",
      items: [
        { en: "PAID ABSENCES: vest at the reporting date (holiday earned) or carry forward — accrue the expected amount for the UNUSED entitlement that vests; non-vesting carry-forwards accrue only if the entity expects payment", ar: "الغيابات المدفوعة: تستحق بتاريخ التقرير (إجازة مكتسبة) أو تُرحَّل — يستحق المتوقع من الرصيد غير المستخدم المتحقق" },
        { en: "PROFIT-SHARING & BONUSES: recognise when (a) the entity has a legal/constructive obligation, and (b) a reliable estimate exists — which requires the FORMAL APPROVED plan before the reporting date; estimates of turnover/pay rates fold in", ar: "مشاركة الأرباح والمكافآت: تعترف عند وجود التزام قانوني/ضمني وتقدير موثوق — ويشترط خطة رسمية معتمدة قبل تاريخ التقرير" },
        { en: "Expected-but-unpaid holiday bonuses riding an accrual — IAS 19.16's 'expected cost of accumulating compensated absences'", ar: "مكافآت الإجازات المتوقعة ضمن الاستحقاق — كلفة الإجازات المتراكمة المتوقعة" },
      ],
    },
    { kind: "h", text: { en: "The pension split", ar: "تقسيم المعاشات" } },
    {
      kind: "tree",
      root: { en: "Post-employment plan", ar: "خطة ما بعد التوظيف" },
      branches: [
        {
          when: { en: "DEFINED CONTRIBUTION — fixed contributions into a fund; the entity's obligation ENDS with the payment", ar: "اشتراكات محددة — اشتراكات ثابتة لصندوق؛ وينتهي التزام المنشأة بالسداد" },
          then: { en: "Expense = contributions payable for the period. No balance-sheet liability beyond unpaid contributions — the INVESTMENT RISK is the employee's", ar: "المصروف = الاشتراكات المستحقة عن الفترة — ولا التزام بعدها؛ ومخاطرة الاستثمار على العامل", red: true },
        },
        {
          when: { en: "DEFINED BENEFIT — the entity underwrites the promise (final salary × years of service, a lump sum per service year)", ar: "مزايا محددة — المنشأة تضمن الوعد (آخر راتب × سنوات الخدمة، مبلغ إجمالي لكل سنة)" },
          then: { en: "The full actuarial engine: DBO, plan assets, service cost, net interest, remeasurements → OCI", ar: "المحرك الاكتواري الكامل: الالتزام وأصول الخطة وتكلفة الخدمة والفائدة الصافية وإعادة القياسات ← الدخل الشامل", red: true },
        },
        {
          when: { en: "Multi-employer plans: if the defined-benefit exposure cannot be identified → treat like defined contribution + disclose the exposure; state-sector 'multi-employer' plans judged 'defined benefit in substance' get full DB treatment", ar: "خطط متعددة أصحاب العمل: إن تعذر تحديد الانكشاف فعاملها كاشتراكات محددة مع الإفصاح؛ وما كان منها جوهريًا مزايا محددة يعامل بالمعالجة الكاملة" },
          then: { en: "Look for the 'mutual risk-sharing' clue in the scenario", ar: "ابحث عن تلميح تقاسم المخاطر في السيناريو" },
        },
        {
          when: { en: "Group plans (a parent-employee in the GROUP's plan): DB accounting if the host contract gives the entity rights to refunds or contributions holidays", ar: "خطط المجموعة: معالجة المزايا المحددة إذا منح العقد حق استرداد أو إعفاء من اشتراكات" },
          then: { en: "Otherwise — DC treatment for that entity", ar: "وإلا فمعالجة اشتراكات محددة" },
        },
      ],
    },
    { kind: "h", text: { en: "The defined-benefit engine — the four moving parts", ar: "محرك المزايا المحددة — الأجزاء الأربعة" } },
    {
      kind: "formula",
      title: { en: "P&L vs OCI — who gets what", ar: "الأرباح مقابل الدخل الشامل — من يأخذ ماذا" },
      lines: [
        { en: "Net defined benefit LIABILITY (asset) = DBO − fair value of plan assets (adjusted for asset ceilings)", ar: "صافي التزام المزايا = الالتزام بالمزايا المحددة − القيمة العادلة لأصول الخطة (بحدود سقف الأصل)" },
        { en: "P&L = current service cost + past service cost (immediately!) + net interest on the net liability/(asset) + gains/losses on settlements & curtailments", ar: "الأرباح = تكلفة الخدمة الجارية + تكلفة الخدمات السابقة (فورًا) + الفائدة الصافية + مكاسب/خسائر التسويات والتقليص" },
        { en: "NET INTEREST = net defined benefit liability (asset) × DISCOUNT RATE (high-quality corporate bonds) — grows the gap", ar: "الفائدة الصافية = صافي الالتزام × معدل الخصم (سندات شركات عالية الجودة) — تنمي الفجوة" },
        { en: "OCI (never recycled) = actuarial gains/losses (demographic/financial assumptions vs reality) + RETURN ON PLAN ASSETS excluding amounts in net interest", ar: "الدخل الشامل (لا يعاد تدويره أبدًا) = الفروق الاكتوارية + عائد أصول الخطة عدا ما في الفائدة الصافية" },
        { en: "ASSET CEILING: a plan SURPLUS is recognised only to the extent of the economic benefit available — refunds from the plan or reductions in future contributions", ar: "سقف الأصل: لا يعترف بفائض الخطة إلا بحد المنفعة المتاحة — استردادات أو تخفيض اشتراكات مستقبلية" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The engine's philosophy: service cost and net interest are EMPLOYMENT + FINANCE costs (P&L); the actuarial noise belongs to OCI and is never recycled — the 2011 revision removed the old 'corridor' (10% smoothing) forever. Past service cost (a plan improvement) hits P&L IMMEDIATELY at the amendment date, even when benefits VEST over future years (the old spreading died too). Settlements and curtailments: determine the DB position at the settlement/curtailment DATE, recognise the related gain/loss in P&L.",
        ar: "فلسفة المحرك: تكلفة الخدمة والفائدة تكاليف توظيف وتمويل (بالأرباح)؛ والضوضاء الاكتوارية للدخل الشامل بلا تدوير — وقد أزال تعديل ٢٠١١ «الممر» (تنعيم ١٠٪) نهائيًا. وتكلفة الخدمات السابقة تضرب بالأرباح فور التعديل ولو تحققت المنافع مستقبلًا (ومات التوزيع القديم أيضًا). وعند التسوية أو التقليص يحدد المركز بتاريخه ويعترف بالربح/الخسارة في الأرباح.",
      },
    },
    {
      kind: "journal",
      title: { en: "The DB charge set", ar: "مجموعة قيود المزايا المحددة" },
      rows: [
        { dr: { en: "Staff cost — service cost (incl. past service cost)", ar: "مصروف عاملين — تكلفة الخدمة (ومنها الخدمات السابقة)" }, cr: { en: "Net DB liability", ar: "صافي التزام المزايا" } },
        { dr: { en: "Finance cost — net interest", ar: "مصروف تمويلي — الفائدة الصافية" }, cr: { en: "Net DB liability", ar: "صافي التزام المزايا" }, red: true },
        { dr: { en: "OCI — remeasurement (actuarial loss)", ar: "الدخل الشامل — إعادة قياس (خسارة)" }, cr: { en: "Net DB liability", ar: "صافي التزام المزايا" }, red: true },
        { dr: { en: "Net DB liability (remeasurement gain)", ar: "صافي الالتزام (مكسب إعادة قياس)" }, cr: { en: "OCI — remeasurement gain", ar: "الدخل الشامل — مكسب" } },
        { dr: { en: "Plan assets", ar: "أصول الخطة" }, cr: { en: "Cash — employer contributions paid", ar: "نقد — اشتراكات مدفوعة" } },
        { dr: { en: "Net DB liability", ar: "صافي الالتزام" }, cr: { en: "Cash — benefits paid directly", ar: "نقد — مزايا مدفوعة مباشرة" } },
      ],
    },
    {
      kind: "example",
      title: { en: "The DB rollforward", ar: "الاستقصاء التراكمي للمزايا المحددة" },
      lines: [
        { en: "Opening DBO 1,000 · plan assets 900 → net liability 100 · discount rate 5%", ar: "التزام افتتاحي ١٬٠٠٠ وأصول خطة ٩٠٠ ← صافي ١٠٠ بمعدل ٥٪" },
        { en: "Service cost 80 · benefits paid 60 (reduces BOTH DBO and assets) · contributions 50 · actual asset return 55 · actuarial loss on DBO 25", ar: "تكلفة خدمة ٨٠ · مزايا مدفوعة ٦٠ (تخفض الالتزام والأصول معًا) · اشتراكات ٥٠ · عائد فعلي ٥٥ · خسارة اكتوارية ٢٥" },
        { en: "P&L charge = service 80 + net interest (100 × 5%) 5 = 85", ar: "حمولة الأرباح = تكلفة خدمة ٨٠ + فائدة صافية (١٠٠ × ٥٪) ٥ = ٨٥" },
        { en: "OCI = actuarial loss 25 − asset-return excess (55 − 45 expected) 10 = net loss 15", ar: "الدخل الشامل = خسارة اكتوارية ٢٥ − فائض عائد الأصول (٥٥ − ٤٥) ١٠ ← خسارة صافية ١٥" },
        { en: "Closing DBO = 1,000 + 80 + 25 + 50 (interest unwind 5% × 1,000) − 60 = 1,095 · assets = 900 + 55 + 50 − 60 = 945 → net liability 150 = 100 + 85 − 50 + 15 ✓", ar: "الختامي: الالتزام = ١٬٠٠٠ + ٨٠ + ٢٥ + ٥٠ (فك الفائدة) − ٦٠ = ١٬٠٩٥ · والأصول = ٩٤٥ ← الصافي ١٥٠ = ١٠٠ + ٨٥ − ٥٠ + ١٥ ✓" },
      ],
    },
    { kind: "h", text: { en: "Assumptions & the discount rate", ar: "الافتراضات ومعدل الخصم" } },
    {
      kind: "list",
      items: [
        { en: "ACTUARIAL assumptions: demographic (turnover, mortality, disability) + financial (salary growth, medical inflation, benefit escalation) — unbiased and mutually compatible", ar: "الافتراضات الاكتوارية: ديموغرافية (دوران، وفيات، عجز) ومالية (نمو أجور، تضخم طبي) — غير متحيزة ومتوافقة" },
        { en: "DISCOUNT RATE: market yields on HIGH-QUALITY CORPORATE BONDS at the reporting date, matching the currency & duration of the obligations — NOT the plan's expected return", ar: "معدل الخصم: عوائد سندات شركات عالية الجودة بتاريخ التقرير بعملة الالتزام وأجله — لا العائد المتوقع للخطة" },
        { en: "The old 'expected return on assets' line DIED in 2011 — only net interest survives; do not put an asset expected-return credit in P&L", ar: "سطر «العائد المتوقع للأصول» مات في ٢٠١١ — لا يبقى إلا الفائدة الصافية؛ فلا تضع دائنًا بالعائد في الأرباح" },
        { en: "Actuarial gains/losses arise when experience differs OR assumptions change — the Remeasurement family", ar: "تنشأ الفروق الاكتوارية باختلاف التجربة أو تغير الافتراضات — عائلة إعادة القياس" },
      ],
    },
    { kind: "h", text: { en: "Settlements, curtailments & past service", ar: "التسويات والتقليص والخدمات السابقة" } },
    {
      kind: "tree",
      root: { en: "Plan change or event", ar: "تغير أو حدث في الخطة" },
      branches: [
        {
          when: { en: "SETTLEMENT — the entity buys an irrevocable transfer of the obligation (annuity purchase, lump-sum window)", ar: "تسوية — تحويل قاطع للالتزام (شراء سندي، سداد إجمالي)" },
          then: { en: "Gain/loss = difference between the settlement price and the net liability REMEASURED at the settlement date → P&L", ar: "الربح/الخسارة = فرق سعر التسوية عن الصافي المعاد قياسه بتاريخها ← الأرباح", red: true },
        },
        {
          when: { en: "CURTAILMENT — a significant reduction in the scheme (closure, headcount cut)", ar: "تقليص — خفض جوهري للمخطط (إغلاق، تسريح)" },
          then: { en: "Recognise the reduction in DBO (a past-service-cost-style gain) + proportional remeasurement recognition → P&L", ar: "يعترف بنقص الالتزام + النسبة الملائمة من إعادة القياس ← الأرباح", red: true },
        },
        {
          when: { en: "PLAN AMENDMENT (better or worse benefits for PAST service)", ar: "تعديل الخطة (تحسين أو تقليل منافع خدمة سابقة)" },
          then: { en: "Past service cost → P&L IMMEDIATELY (negative balances first offset gains from related plan changes)", ar: "تكلفة الخدمات السابقة ← الأرباح فورًا (والسوالب تقاص أولا بأرباح التعديلات المرتبطة)", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Presentation & disclosure essentials", ar: "أساسيات العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "B/S: plan surplus as an ASSET (up to the asset ceiling) — NEVER offset different plans; split current/non-current", ar: "الميزانية: فائض الخطة أصل (بسقف الأصل) — ولا تقاص بين خطط مختلفة" },
        { en: "Reconciliation of the net liability: opening → service, interest, contributions, benefits, remeasurements → closing; a sensitivity analysis for every major actuarial assumption", ar: "تسوية الصافي: افتتاحي ← تكلفة، فائدة، اشتراكات، مزايا، إعادة قياس ← ختامي؛ وتحليل حساسية لكل افتراض جوهري" },
        { en: "Maturity profile of the DBO, the funding policy & expected contributions", ar: "نضج الالتزام وسياسة التمويل والاشتراكات المتوقعة" },
        { en: "Termination benefits: the nature & amount; short-term vs other classification", ar: "مزايا الإنهاء: طبيعتها ومقدارها وتبويبها" },
        { en: "The 2014 amendments: high-quality bond availability and plan amendments' remeasurement timing", ar: "تعديلات ٢٠١٤: توافر السندات عالية الجودة وتوقيت إعادة قياس تعديلات الخطة" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Remeasurements go to OCI and are NEVER recycled — the single most-tested IAS 19 rule. Past service cost is IMMEDIATE (no spreading); net interest replaces the old expected-return; the corridor is dead. Three 'old world' habits the exam still sets as traps.",
        ar: "إعادة القياسات للدخل الشامل ولا تعاد تدويرها أبدًا — أشهر قاعدة في IAS 19. والخدمات السابقة فورية (لا توزيع)؛ والفائدة الصافية حلت محل العائد المتوقع؛ والممر مات. ثلاث عادات قديمة تنصب كفخاخ.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Termination benefits trigger EARLIER than IAS 37 restructuring: 'demonstrably committed' (announcement of a detailed plan) vs 'valid expectation raised' — if the scenario offers both a redundancy plan and a pension settlement, time each separately.",
        ar: "مزايا الإنهاء تتحقق أبكر من إعادة هيكلة IAS 37: «الالتزام الواضح» (إعلان خطة مفصلة) مقابل «إثارة توقع معقول» — وإذا عرض السيناريو خطة تسريح وتسوية معاش معًا فاضبط توقيت كل منهما.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The net interest trick: it applies to the NET position — a net ASSET earns interest income (a credit), a net liability costs interest; the same single rate both ways.",
        ar: "حيلة الفائدة الصافية: تطبق على المركز الصافي — فالأصل الصافي يدر فائدة دائنة والالتزام الصافي يكلفها؛ وبالمعدل الواحد ذاته في الاتجاهين.",
      },
    },
  ],
}
