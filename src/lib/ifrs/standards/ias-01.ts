/** IAS 1 — Presentation of Financial Statements */

import type { Standard } from "../types"

export const IAS_1: Standard = {
  code: "IAS 1",
  title: { en: "Presentation of Financial Statements", ar: "عرض القوائم المالية" },
  topic: "presentation",
  effective: { en: "Effective 1 Jan 2010 · revised for IFRS 18 (see note)", ar: "سارٍ من ١ يناير ٢٠١٠ · معدل لحساب IFRS 18 (انظر الملاحظة)" },
  blocks: [
    { kind: "h", text: { en: "Objective — the complete set", ar: "الهدف — المجموعة الكاملة" } },
    {
      kind: "p",
      text: {
        en: "IAS 1 prescribes the basis for presentation of a COMPLETE SET of financial statements and the minimum line items on the face of each statement. A complete set: (1) statement of financial position, (2) statement of profit or loss and other comprehensive income (or two statements: P/L then a statement of OCI beginning with profit or loss), (3) statement of changes in equity, (4) statement of cash flows, (5) notes — comprising significant accounting policies and other explanatory information, (6) comparative information for the previous period (and a third statement of financial position when a retrospective restatement requires it), (7) the corresponding IFRS statements of the PREVIOUS period for a first-time adopter.",
        ar: "يحدد IAS 1 أساس عرض المجموعة الكاملة من القوائم المالية وبنودها الدنيا. وتشمل: (١) قائمة المركز المالي، (٢) قائمة الأرباح أو الخسائر والدخل الشامل الآخر (أو قائمتين: الأرباح ثم قائمة دخل شامل تبدأ بالربح)، (٣) قائمة التغيرات في حقوق الملكية، (٤) قائمة التدفقات النقدية، (٥) الإيضاحات متضمنة السياسات المحاسبية الهامة، (٦) معلومات مقارنة عن الفترة السابقة (وقائمة مركز مالي ثالثة عند إعادة عرض رجعية)، (٧) قوائم الفترة السابقة للمتبني الأول.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Fair presentation + COMPLIANCE disclosure: statements compliant with IFRS only if they comply with EVERY applicable Standard — an explicit 'compliance with IFRS' statement is required in the notes.",
        ar: "العرض العادل + إفصاح الالتزام: لا تعد القوائم متوافقة إلا إذا التزمت بكل معيار قابل للتطبيق — مع إقرار صريح بالالتزام في الإيضاحات.",
      },
    },
    { kind: "h", text: { en: "Going concern", ar: "الاستمرارية" } },
    {
      kind: "p",
      text: {
        en: "Prepare the statements on a GOING-CONCERN basis unless management intends to liquidate or cease trading, or has no realistic alternative. Assess at least twelve months from the reporting date (operating cycle if longer). If material uncertainty exists and is adequately disclosed, keep the basis but flag it prominently; if the basis is NOT going concern, disclose that fact, the basis used and the reason — IAS 1 does not prescribe the break-up basis, but it demands honesty about which basis was used.",
        ar: "تُعد القوائم على أساس الاستمرارية ما لم تنو الإدارة التصفية أو التوقف أو انتفى البديل الواقعي. والتقييم يغطي اثني عشر شهرًا على الأقل من تاريخ التقرير. وإذا وجد عدم تأكد جوهري مُفصح عنه بما يكفي فيبقى الأساس مع الإبراز الواضح؛ وإن لم يكن الأساس الاستمرارية فيفصح عن ذلك والأساس المتبع وسببه.",
      },
    },
    { kind: "h", text: { en: "Core concepts driving presentation", ar: "المفاهيم الحاكمة للعرض" } },
    {
      kind: "list",
      items: [
        { en: "ACCRUAL BASIS for everything except the cash-flow statement", ar: "أساس الاستحقاق لكل القوائم عدا قائمة التدفقات" },
        { en: "MATERIALITY & AGGREGATION — group similar items, separate dissimilar material items; a line item may need splitting, or the notes may carry it", ar: "الأهمية والتجميع — تُجمَّع البنود المتماثلة وتُفصل المختلفة الجوهرية" },
        { en: "OFFSETTING PROHIBITED between assets & liabilities, income & expenses — unless another Standard requires or permits it (IAS 32 netting, IAS 12 offset)", ar: "يحظر المقاصة بين الأصول والالتزامات وبين الإيرادات والمصروفات — إلا إذا أجازها معيار آخر" },
        { en: "FREQUENCY — at least annually; a shorter period is NOT allowed as the 'annual' statements", ar: "دورية التقارير — سنويًا على الأقل؛ ولا يجوز تقديم فترة أقصر بوصفها قوائم سنوية" },
        { en: "COMPARATIVES for all narrative and numerical information, and CONSISTENCY of presentation and classification between periods", ar: "معلومات مقارنة لكل البيانات الوصفية والرقمية، وثبات العرض والتبويب بين الفترات" },
        { en: "CLASSIFICATION of expenses: NATURE (depreciation, purchases, wages) or FUNCTION (cost of sales, admin) — whichever is chosen, disclose it; present 'cost of sales' separately if the function format is used", ar: "تبويب المصروفات: بالطبيعة (إهلاك، مشتريات، أجور) أو الوظيفة (تكلفة مبيعات، عمومية) — مع الإفصاح عما اختير" },
      ],
    },
    { kind: "h", text: { en: "Current / non-current — the 12-month test", ar: "المتداول وغير المتداول — اختبار الاثني عشر شهرًا" } },
    {
      kind: "tree",
      root: { en: "Classify an asset as current when ANY holds", ar: "يُبوب الأصل متداولًا عند تحقق أيٍّ مما يلي" },
      branches: [
        {
          when: { en: "Expected to be realised in the NORMAL COURSE of the operating cycle (inventory → receivable → cash)", ar: "يُتوقع تحصيله في دورة التشغيل المعتادة (مخزون ← مدينون ← نقد)" },
          then: { en: "CURRENT", ar: "متداول" },
        },
        {
          when: { en: "Held primarily for TRADING", ar: "محتفظ به أساسًا للمتاجرة" },
          then: { en: "CURRENT", ar: "متداول" },
        },
        {
          when: { en: "Expected to be realised within 12 months of the reporting date", ar: "يُحقق خلال ١٢ شهرًا من تاريخ التقرير" },
          then: { en: "CURRENT", ar: "متداول" },
        },
        {
          when: { en: "Cash or cash equivalent with no restriction on use (unless restricted → then non-current)", ar: "نقد أو شبه نقد بلا قيود على الاستخدام" },
          then: { en: "CURRENT", ar: "متداول" },
        },
        {
          when: { en: "None of the above", ar: "لا شيء مما سبق" },
          then: { en: "NON-CURRENT — all other assets", ar: "غير متداول — ما عدا ذلك" },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "For LIABILITIES the mirror applies — current when settled in the normal course of the operating cycle, held for trading, due within 12 months, or when the entity does NOT have an unconditional right to defer settlement for at least 12 months after the reporting date. The covenant trap: if a long-term loan's covenants are BREACHED at the reporting date such that the loan becomes callable, the liability is CURRENT — unless lenders agreed to waive or the breach was cured before the statements were authorised (an adjusting-condition question under IAS 10).",
        ar: "وتنطبق الصورة المعكوسة على الالتزامات — متداول عند تسويه في دورة التشغيل، أو المتاجرة، أو الاستحقاق خلال ١٢ شهرًا، أو انتفاء الحق غير المشروط في تأجيل السداد ١٢ شهرًا على الأقل. وكمين التعهدات: إذا انتهكت شروط قرض طويل الأجل بتاريخ التقرير فصار مستحق الطلب فالالتزام متداول — إلا إذا تنازل المقرضون أو عولج الإخلال قبل اعتماد القوائم.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Investment entity / recycling note: deferred tax is ALWAYS presented as non-current under IAS 1. And a financial guarantee liability follows the timing of the cash outflows.",
        ar: "الضريبة المؤجلة تُعرض دائمًا غير متداولة وفق IAS 1. وضمان التمويل يتبع توقيت التدفقات النقدية.",
      },
    },
    { kind: "h", text: { en: "The statement of financial position", ar: "قائمة المركز المالي" } },
    {
      kind: "list",
      items: [
        { en: "Minimum line items: PPE; investment property; intangibles; financial assets (excluding the above); investments accounted for by the equity method; biological assets; inventory; trade & other receivables; cash & equivalents; assets held for sale; trade & other payables; provisions; financial liabilities (excl. above); current tax liabilities/liabilities & assets for current tax; deferred tax; provisions; lease liabilities; interest-bearing borrowings; NCI within equity; issued capital & reserves attributable to owners", ar: "بنود دنيا: ممتلكات؛ عقارات استثمارية؛ أصول غير ملموسة؛ أصول مالية؛ استثمارات بطريقة الحصة؛ أصول حيوية؛ مخزون؛ مدينون؛ نقد؛ أصول محتفظ بها للبيع؛ دائنون؛ مخصصات؛ التزامات مالية؛ ضريبة جارية؛ ضريبة مؤجلة؛ التزامات إيجار؛ اقتراضات bearing فائدة؛ حصص غير مسيطرة؛ رأس مال واحتياطيات" },
        { en: "Supplementary line items, subtotals and groupings when another IFRS requires them, or when presentation is relevant to understanding", ar: "بنود وكيوف إضافية عند اشتراط معيار آخر أو عند أهميتها للفهم" },
        { en: "Current/non-current split required unless a LIQUIDITY presentation is more relevant (e.g. banks) — say which is used", ar: "التفرقة متداول/غير متداول واجبة إلا إذا كان عرض السيولة أكثر ملاءمة (كالبنوك) — مع بيان المستخدم" },
        { en: "Equity = share capital, share premium, retained earnings, OCI reserves (FVOCI reserve, revaluation surplus, hedging, CTA), treasury shares as a DEDUCTION", ar: "حقوق الملكية = رأس المال، علاوة الإصدار، أرباح محتجزة، احتياطيات الدخل الشامل، وأسهم خزينة كخفض" },
      ],
    },
    { kind: "h", text: { en: "OCI — the two recycling families", ar: "الدخل الشامل الآخر — عائلتا التدوير" } },
    {
      kind: "p",
      text: {
        en: "Other comprehensive income items are presented in TWO columns: items that WILL be reclassified to profit or loss in later periods, and items that will NEVER be. The never-recycled family: remeasurements of defined-benefit plans (IAS 19), the equity-instrument FVOCI election (IFRS 9), own credit risk on liabilities designated at FVTPL (IFRS 9), and share of the never-recycled OCI of equity-accounted investees. The recycled family: FVOCI debt instruments (IFRS 9), cash-flow hedges, revaluation surpluses on disposal (IAS 16/38 — but the surplus goes through OCI → retained earnings, never P/L), exchange differences (IAS 21 — recycled on disposal).",
        ar: "تعرض بنود الدخل الشامل الآخر في عمودين: ما سيعاد تصنيفه إلى الأرباح أو الخسائر لاحقًا، وما لن يعاد أبدًا. عائلة عدم التدوير: إعادة قياس خطط المزايا المحددة (IAS 19)، وخيار أدوات الملكية FVOCI (IFRS 9)، ومخاطر الائتمان الذاتي (IFRS 9)، والحصة غير المعاد تدويرها من المستثمَر فيه. وعائلة التدوير: أدوات الدين FVOCI، وتغطية التدفقات، وفوائض إعادة التقييم عند التخرد، وفروق الصرف.",
      },
    },
    {
      kind: "example",
      title: { en: "OCI column logic (mini case)", ar: "منطق عمودي الدخل الشامل (حالة مصغرة)" },
      lines: [
        { en: "FVOCI bond: fair-value gain 40 in 2025, sold in 2026 realising a total lifetime gain 60 (40 already in OCI)", ar: "سند FVOCI: مكسب قيمة عادلة ٤٠ في ٢٠٢٥، وبِيع في ٢٠٢٦ بمكسب إجمالي ٦٠ (٤٠ منها في الدخل الشامل سابقًا)" },
        { en: "2025: OCI 40 (recycled column) · 2026 on sale: gain in P/L = 60 − 40 = 20, and MINUS 40 recycled OUT of OCI into P/L — no double count", ar: "٢٠٢٥: دخل شامل ٤٠ (عمود المعاد تدويره) · ٢٠٢٦ عند البيع: مكسب بقائمة الأرباح = ٦٠ − ٤٠ = ٢٠، ويُستبعد ٤٠ من الدخل الشامل — دون ازدواج" },
        { en: "DB remeasurement loss 100 → OCI 100 in the NEVER-recycled column; it stays in equity forever", ar: "خسارة إعادة قياس مزايا محددة ١٠٠ ← دخل شامل ١٠٠ في عمود عدم التدوير؛ وتبقى في حقوق الملكية أبدًا" },
      ],
    },
    { kind: "h", text: { en: "Statement of changes in equity", ar: "قائمة التغيرات في حقوق الملكية" } },
    {
      kind: "p",
      text: {
        en: "Present a reconciliation of each equity component — share capital, premium, each reserve, retained earnings, NCI — between the opening and closing balances, separately for total comprehensive income, profit distributions to owners, and each retrospective application/restatement. Dividends per share and dividends declared before the statements were authorised go to the NOTES; the statement shows the movement in retained earnings (or a dividend line as an equity decrease).",
        ar: "تعرض القائمة تسوية لكل مكون من مكونات حقوق الملكية — رأس المال والعلاوة وكل احتياطي والأرباح المحتجزة والحصص غير المسيطرة — بين الرصيد الافتتاحي والختامي، منفصلةً عن الدخل الشامل الإجمالي والتوزيعات على الملاك وكل إعادة عرض. وتذهب تفاصيل التوزيعات إلى الإيضاحات.",
      },
    },
    { kind: "h", text: { en: "Notes — the four disclosures IAS 1 owns", ar: "الإيضاحات — الإفصاحات الأربعة الخاصة بـ IAS 1" } },
    {
      kind: "list",
      items: [
        { en: "ACCOUNTING POLICIES — the material policies, not a laundry list: measurement bases, recognition criteria, the expense-classification choice", ar: "السياسات المحاسبية — السياسات الهامة لا قائمة مرجعية: أسس القياس ومعايير الاعتراف وخيار تبويب المصروفات" },
        { en: "JUDGEMENTS — the areas where management judgement has the biggest effect on the numbers (impairment assumptions, functional currency, control conclusions)", ar: "أحكام القياس — المجالات الأشد أثرًا في الأرقام (افتراضات الانخفاض، العملة الوظيفية، خلاصات السيطرة)" },
        { en: "ESTIMATION UNCERTAINTY — assumptions about the future with significant risk of material ADJUSTMENT in the next year, with sensitivity where reasonable", ar: "عدم تأكد التقديرات — الافتراضات المستقبلية ذات خطر جوهري لتعديل مادي في السنة القادمة، مع التحليل الحساسي عند الإمكان" },
        { en: "CAPITAL MANAGEMENT —the entity's objectives, policies and processes for managing capital, plus quantitative data and whether the targets were met (or not!)", ar: "إدارة رأس المال — الأهداف والسياسات وعمليات إدارته مع بيانات كمية وهل تحققت المستهدفات" },
      ],
    },
    { kind: "h", text: { en: "Reclassification & comparability rules", ar: "قواعد إعادة التبويب والمقارنة" } },
    {
      kind: "p",
      text: {
        en: "A change in presentation is allowed only when the new presentation is relevant, or a Standard forces it. Restate COMPARATIVES unless impracticable. Titles, classification of expenses and the liquidity/current formats must be consistent. When classification of a retired item changes (discontinued operations — IFRS 5), restate everything presented. A mistake found AFTER publication? IAS 10 governs; IAS 1 never authorises retrospective 'tweaks' to issued statements.",
        ar: "لا يجوز تغيير العرض إلا إذا كان الجديد ملائمًا أو ألزم معيار. وتُعاد عرض المقارنات إلا إذا تعذر. ويجب اتساق المسميات وتبويب المصروفات وصيَغ العرض. وعند تغيير تبويك بند متخرد (عمليات متوقفة وفق IFRS 5) تعاد عرض كل المعروض. وما عُثر عليه بعد النشر فمحكمه IAS 10.",
      },
    },
    {
      kind: "journal",
      title: { en: "The covenant-breach reclass (illustrative)", ar: "إعادة تبويب إخلال التعهدات (توضيحية)" },
      rows: [
        { dr: { en: "Non-current borrowings 1,000", ar: "اقتراضات غير متداولة ١٬٠٠٠" }, cr: { en: "Current borrowings 1,000", ar: "اقتراضات متداولة ١٬٠٠٠" }, red: true },
        { cr: { en: "Disclosure: covenant breach at reporting date; waiver obtained 15 Feb (post-reporting, before authorisation) — check IAS 10 adjustment vs disclosure", ar: "إفصاح: إخلال بتاريخ التقرير؛ وتنازل في ١٥ فبراير بعده وقبل الاعتماد — ميّز في IAS 10 بين التعديل والإفصاح" } },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The single most-examined IAS 1 trap: a breached covenant makes the borrowing CURRENT at the reporting date even though the lender has not demanded payment — the unconditional right to defer is what counts, not the lender's patience.",
        ar: "أشهر مصائد IAS 1: إخلال التعهدات يجعل الاقتراض متداولًا بتاريخ التقرير وإن لم يطالب المقرض — فالعبرة بالحق غير المشروط في التأجيل لا بصبر المقرض.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "IFRS 18 (Presentation and Disclosure in Financial Statements, effective 2027) will REPLACE IAS 1's P/L architecture — three defined categories (operating, investing, financing) and two new mandatory subtotals. Learn IAS 1 now; tag IFRS 18 changes when they bite.",
        ar: "سيحل IFRS 18 (سارٍ ٢٠٢٧) محل معمارية قائمة الأرباح في IAS 1 — ثلاث فئات محددة (تشغيلي، استثماري، تمويلي) ومجموعان فرعيان جديدان إلزاميان. أتقن IAS 1 الآن وراقب تغيرات IFRS 18 عند سريانها.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Materiality is entity-specific: what matters is whether omitting or misstating the item could influence the users' economic decisions — smaller items can be material by their NATURE (a related-party sale, an illegal payment).",
        ar: "الأهمية خاصة بالمنشأة: العبرة بتأثير الحذف أو الخطأ في قرارات المستخدمين — وقد تكون البنود الصغيرة جوهرية بطبيعتها (بيع لطرف ذي علاقة، دفعة غير مشروعة).",
      },
    },
  ],
}
