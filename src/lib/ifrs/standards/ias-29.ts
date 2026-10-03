/** IAS 29 — Financial Reporting in Hyperinflationary Economies */

import type { Standard } from "../types"

export const IAS_29: Standard = {
  code: "IAS 29",
  title: { en: "Financial Reporting in Hyperinflationary Economies", ar: "التقارير المالية في الاقتصادات ذات التضخم الجامح" },
  topic: "specialized",
  effective: { en: "Effective 1 Jan 1990 · operationalised by IFRIC 7", ar: "سارٍ من ١ يناير ١٩٩٠ · فسّره IFRIC 7" },
  blocks: [
    { kind: "h", text: { en: "Objective — restating into today's money", ar: "الهدف — إعادة عرض بنقود اليوم" } },
    {
      kind: "p",
      text: {
        en: "When an economy's currency collapses, nominal statements stop meaning anything: a machine bought five years ago for 100 sits uselessly beside today's prices measured in millions. IAS 29 forces the entity whose FUNCTIONAL currency is hyperinflationary to RESTATE its statements into the measuring unit CURRENT at the reporting date — so the numbers speak one language: today's money.",
        ar: "حين تنهار عملة اقتصاد تفقد القوائم الاسمية معناها: آلة اشتريت قبل خمس سنوات بمئة تجلس عبثًا بجانب أسعار اليوم بالملايين. يلزم IAS 29 المنشأة التي عملتها الوظيفية جامحة التضخم بإعادة عرض قوائمها بوحدة قياس تاريخ التقرير — فتنطق الأرقام لغة واحدة: نقود اليوم.",
      },
    },
    { kind: "h", text: { en: "Scope — who restates", ar: "النطاق — من يعيد العرض" } },
    {
      kind: "p",
      text: {
        en: "IAS 29 follows the FUNCTIONAL currency, not the presentation currency: it bites on entities whose primary economic environment is hyperinflationary, at the level of each individual entity. A parent consolidating such an operation drags the restatement into the group numbers before anything else happens. An entity whose functional currency is stable but which chooses to PRESENT in a hyperinflationary currency has an IAS 21 translation question, not an IAS 29 restatement question. The assessment is continuous — the verdict is reviewed at every reporting date.",
        ar: "يتبع IAS 29 العملة الوظيفية لا عملة العرض: فينطبق على المنشآت التي بيئتها الاقتصادية الرئيسية جامحة التضخم، على مستوى كل منشأة على حدة. والأم التي تجمع عملية كذلك تجر إعادة العرض إلى أرقام المجموعة قبل أي شيء آخر. أما المنشأة المستقرة عملتها الوظيفية والمختارة العرض بعملة جامحة فمسألتها ترجمة وفق IAS 21 لا إعادة عرض وفق IAS 29. والتقييم مستمر — إذ تراجع الحكم في كل تاريخ تقرير.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Entities whose FUNCTIONAL currency is the currency of a hyperinflationary economy — restatement is mandatory, no option", ar: "المنشآت التي عملتها الوظيفية عملة اقتصاد جامح التضخم — إعادة العرض إلزامية بلا خيار" },
        { en: "Presenting in a stable currency while the functional is hyperinflationary → restate FIRST (IAS 29), then translate into the presentation currency at closing rates", ar: "العرض بعملة مستقرة والوظيفية جامحة ← أعد أولًا (IAS 29) ثم ترجم إلى عملة العرض بأسعار الإقفال" },
        { en: "A parent translating a hyperinflationary subsidiary: the sub's statements are restated before the group machinery touches them", ar: "الأم التي تترجم تابعة جامحة: تعد قوائم التابعة قبل أن تمسها آلة المجموعة" },
        { en: "A stable functional currency is NEVER dragged into restatement by the presentation choice — that is an IAS 21 question", ar: "العملة الوظيفية المستقرة لا تُجر أبدًا إلى إعادة العرض بخيار العرض — فتلك مسألة IAS 21" },
      ],
    },
    { kind: "h", text: { en: "The characteristics of hyperinflation", ar: "خصائص التضخم الجامح" } },
    {
      kind: "list",
      items: [
        { en: "The population prefers NON-MONETARY assets — keeps wealth in goods, real estate, hard currency", ar: "تفضل السكان الأصول غير النقدية — يحتجزون الثروة سلعًا وعقارات وعملة قوية" },
        { en: "Prices are quoted in a STABLE CURRENCY (the USD), and credit sales happen at prices that compensate for the expected loss of purchasing power", ar: "الأسعار تُنسب إلى عملة مستقرة (كالدولار)، والبيع بالأجل بأسعار تعوض الفقد المتوقع للقوة الشرائية" },
        { en: "Interest rates, wages and prices are INDEXED to a price index", ar: "الأسعار والأجور والفوائد مفهرسة بمؤشر أسعار" },
        { en: "Cumulative inflation over THREE YEARS approaches or exceeds 100% (the workable benchmark — the standard's own list is indicative, not a mechanical test)", ar: "التضخم التراكمي ثلاث سنوات يقارب أو يتجاوز ١٠٠٪ (المعيار العملي — وقائمة المعيار استرشادية لا ميكانيكية)" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "The 100% test is a benchmark, not a switch: the assessment is holistic — a country at 88% with full indexation and currency substitution is likely hyperinflationary; 110% with none may not be.",
        ar: "اختبار ١٠٠٪ معيار عملي لا مفتاح: فالتقييم كلي — بلد عند ٨٨٪ مع فهرسة كاملة واستبدال للعملة أرجح جامحًا؛ و١١٠٪ بلا ذلك قد لا يكون.",
      },
    },
    {
      kind: "p",
      text: {
        en: "The assessment is a judgement about the economy, made at every reporting date and disclosed when it flips. The IASB's benchmark — cumulative inflation approaching 100% over three years — sits alongside the behavioural indicators: currency substitution, indexation, prices quoted in a stable unit. Once the verdict is hyperinflationary, IAS 29 applies in full — there is no partial or phased application; and when the verdict reverses, the machinery stops dead.",
        ar: "التقييم حكم على الاقتصاد يصنع في كل تاريخ تقرير ويُفصح عنه عند انقلابه. ومعيار المجلس — تضخم تراكمي يقارب ١٠٠٪ عبر ثلاث سنوات — يجلس بجانب المؤشرات السلوكية: استبدال العملة، والفهرسة، والأسعار المنسوبة لعملة مستقرة. وحالما يصدر الحكم بالجماح يطبق IAS 29 كاملًا — فلا تطبيق جزئي ولا مرحلي؛ وإذا انعكس الحكم توقفت الآلة فورًا.",
      },
    },
    { kind: "h", text: { en: "The measuring unit — the key ideas", ar: "وحدة القياس — الأفكار المفتاحية" } },
    {
      kind: "p",
      text: {
        en: "Everything is expressed in the MEASURING UNIT CURRENT at the reporting date, scaled by a GENERAL price index — not the item's own price. The IAS 21 monetary/non-monetary split returns with the treatment flipped: NON-monetary items ride the index machine from their acquisition dates, while MONETARY items are already in current units and instead produce the purchasing-power GAIN or LOSS. Equity restates with its own dates, and the income statement restates from when each transaction occurred.",
        ar: "يعبر عن كل شيء بوحدة القياس السائدة بتاريخ التقرير، مقيَسة بمؤشر أسعار عام — لا بسعر البند ذاته. وتعود ثنائية النقدي/غير النقدي من IAS 21 بمعالجة معكوسة: فالبنود غير النقدية تركب آلة المؤشر من تواريخ اقتنائها، بينما النقدية هي بوحدات جارية أصلًا وتنتج بدلًا من ذلك ربح أو خسارة القوة الشرائية. وحقوق الملكية تعاد بتواريخها، وقائمة الأرباح من وقت حدوث كل معاملة.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "MONETARY items (cash, receivables, payables, borrowings) — already in closing units; their net position makes the P&L gain/loss", ar: "البنود النقدية (نقد، مدينون، دائنون، اقتراضات) — بوحدات الإقفال أصلًا؛ ومركزها الصافي يصنع ربح/خسارة الأرباح" },
        { en: "NON-MONETARY at historical cost (PPE, inventory at cost, intangibles, equity) — indexed from their OWN dates", ar: "غير النقدية بالتكلفة التاريخية (ممتلكات، مخزون بالتكلفة، غير ملموسة، حقوق ملكية) — تفهرس من تواريخها هي" },
        { en: "NON-MONETARY at fair value measured at the reporting date (revalued land, inventory at NRV) — NO restatement: already in closing units", ar: "غير النقدية بالقيمة العادلة بتاريخ التقرير (أرض معاد تقييمها، مخزون بصافي القيمة البيعية) — لا إعادة عرض: هي بوحدات الإقفال أصلًا" },
      ],
    },
    { kind: "h", text: { en: "The restatement machinery", ar: "آلية إعادة العرض" } },
    {
      kind: "p",
      text: {
        en: "Restatement keeps the cost model's logic but re-denominates it: the uplift flows into the restated opening equity and the bigger depreciation and cost of sales — never into OCI or a revaluation surplus. The engine is a general index applied from the date each figure was born, so a five-year-old machine and yesterday's electricity bill land in the same units. The technique is a re-denomination of history, not a revaluation of the business.",
        ar: "تحافظ إعادة العرض على منطق نموذج التكلفة لكنها تعدل عملته: فالزيادة تتدفق إلى حقوق الملكية الافتتاحية المعادة وإلى الإهلاك وتكلفة المبيعات الأكبر — لا إلى الدخل الشامل ولا فائض إعادة تقييم أبدًا. والمحرك مؤشر عام يطبق من تاريخ ميلاد كل رقم، فآلة عمرها خمس سنوات وفاتورة كهرباء الأمس تحطان بالوحدات ذاتها. والأسلوب إعادة تسمية للتاريخ لا إعادة تقييم للنشاط.",
      },
    },
    {
      kind: "formula",
      title: { en: "The index engine", ar: "محرك المؤشر" },
      lines: [
        { en: "Restated amount = historical (or previously restated) amount × (general price index at reporting date ÷ index at the item's date)", ar: "المعاد عرضه = المبلغ التاريخي × (مؤشر تاريخ التقرير ÷ مؤشر تاريخ البند)" },
        { en: "NON-MONETARY items (PPE, inventory, intangibles, equity): restate from their ACQUISITION dates via the index — carrying amounts, depreciation, cost of sales all restate", ar: "غير النقدية (ممتلكات، مخزون، غير ملموسة، حقوق ملكية): تعاد من تواريخ اقتنائها — والقيم والإهلاك وتكلفة المبيعات جميعها" },
        { en: "The income statement: every item restated from the DATES the transactions occurred (or a practical proportional index by month)", ar: "قائمة الأرباح: كل بند يعاد من تواريخ المعاملات (أو توزيع عملي بالشهور)" },
        { en: "MONETARY items (cash, receivables, payables): already in current units — the GAIN/LOSS on their NET position goes to P&L as a separate line", ar: "النقدية (نقد، مدينون، دائنون): هي بوحدات جارية أصلا — وربح/خسارة المركز الصافي سطر مستقل بالأرباح" },
        { en: "The gain/loss on net monetary position = the purchasing power lost by holding net monetary ASSETS (or gained by owing net monetary LIABILITIES) during the period", ar: "ربح/خسارة المركز النقدي الصافي = القوة الشرائية المفقودة بحيازة أصول نقدية صافية (أو المكتسبة بديون نقدية صافية)" },
      ],
    },
    {
      kind: "steps",
      items: [
        { en: "Split the balance sheet: MONETARY (cash, receivables, payables, borrowings) vs NON-MONETARY (PPE, inventory, intangibles, equity)", ar: "قسم الميزانية: نقدية (نقد، مدينون، دائنون، اقتراضات) مقابل غير نقدية (ممتلكات، مخزون، غير ملموسة، حقوق ملكية)" },
        { en: "Restate every NON-MONETARY figure from its OWN date — cost, accumulated depreciation, cost of sales, equity lines", ar: "أعد كل رقم غير نقدي من تاريخه هو — التكلفة والإهلاك المجمع وتكلفة المبيعات وبنود حقوق الملكية" },
        { en: "Leave MONETARY items untouched and compute the net monetary position's purchasing-power GAIN/LOSS", ar: "اترك النقدية وشأنها واحسب ربح/خسارة القوة الشرائية للمركز النقدي الصافي" },
        { en: "Restate the income statement from the transaction dates (or the monthly average index per item)", ar: "أعد قائمة الأرباح من تواريخ المعاملات (أو متوسط المؤشر الشهري لكل بند)" },
        { en: "Recompute the tax figures — income tax restated like any expense; deferred tax via IAS 12 on the RESTATED temporary differences", ar: "أعد حساب الأرقام الضريبية — ضريبة الدخل تعاد كأي مصروف؛ والمؤجلة وفق IAS 12 على الفروق المؤقتة المعادة" },
        { en: "Restate the COMPARATIVES into the current reporting date's units and disclose the index used", ar: "أعد المقارنات إلى وحدات تاريخ التقرير الحالي وأفصح عن المؤشر المستخدم" },
      ],
    },
    {
      kind: "tree",
      root: { en: "How does the index machine treat this item?", ar: "كيف تعامله آلة المؤشر؟" },
      branches: [
        {
          when: { en: "MONETARY item — money held, or a fixed currency amount to receive/pay", ar: "بند نقدي — نقد محتجز أو مبلغ ثابت يُستلم/يسدد" },
          then: { en: "NO restatement — already in closing units; the net position's purchasing-power loss/gain → P&L", ar: "لا إعادة عرض — بوحدات الإقفال أصلًا؛ وخسارة/ربح المركز الصافي ← الأرباح", red: true },
        },
        {
          when: { en: "NON-MONETARY item measured at HISTORICAL COST — PPE, inventory at cost, intangibles, equity", ar: "بند غير نقدي بالتكلفة التاريخية — ممتلكات، مخزون بالتكلفة، غير ملموسة، حقوق ملكية" },
          then: { en: "RESTATE from the item's acquisition date via the general index — cost, depreciation, cost of sales", ar: "أعد العرض من تاريخ اقتنائه بالمؤشر العام — التكلفة والإهلاك وتكلفة المبيعات", red: true },
        },
        {
          when: { en: "NON-MONETARY item at FAIR VALUE determined at the reporting date — revalued land, inventory at NRV", ar: "بند غير نقدي بالقيمة العادلة بتاريخ التقرير — أرض معاد تقييمها، مخزون بصافي القيمة البيعية" },
          then: { en: "NO restatement — the fair value is already expressed in closing units", ar: "لا إعادة عرض — فالقيمة العادلة معبر عنها بوحدات الإقفال أصلًا", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Restating the income statement", ar: "إعادة عرض قائمة الأرباح" } },
    {
      kind: "p",
      text: {
        en: "Every income and expense item restates from the date it arose — transaction-date indices when the detail exists, or a proportional monthly spread when it does not. Revenue earned evenly through the year takes the average index; the machine bought years ago takes its depreciation restated from the asset's own date. Cost of sales restates with the inventory, and depreciation restates with the restated PPE, so the margin is measured in one money. The result is a profit figure in CLOSING units that finally means something.",
        ar: "يعاد كل بند إيراد ومصروف من تاريخ نشوئه — بمؤشرات تواريخ المعاملات إن وُجد التفصيل، أو بتوزيع شهري تناسبي إن لم يوجد. فالإيراد المكتسب بانتظام خلال السنة يأخذ المؤشر المتوسط؛ والآلة المشتراة قبل سنوات يأخذ إهلاكها معادًا من تاريخ الأصل ذاته. وتكلفة المبيعات تعاد مع المخزون، والإهلاك يعاد مع الممتلكات المعادة، فيقاس الهامش بنقد واحد. والناتج رقم ربح بوحدات الإقفال يصير له معنى أخيرًا.",
      },
    },
    { kind: "h", text: { en: "The net monetary position — the engine of IAS 29", ar: "المركز النقدي الصافي — محرك IAS 29" } },
    {
      kind: "p",
      text: {
        en: "Hold net monetary ASSETS through inflation and purchasing power drains away — a loss recognised in P&L as a separate line. Owe net monetary LIABILITIES and inflation erodes the debt — a gain. Where the items bear interest or indexation that compensates for the lost purchasing power, the loss shrinks accordingly: the compensation is already in the finance cost. This is the standard's punchline — the balance-sheet discipline of not holding idle cash is priced into the statements themselves.",
        ar: "أمسك أصولًا نقدية صافية عبر التضخم تنز قوتك الشرائية — خسارة تعترف بها بالأرباح سطرًا مستقلًا. وائتزم التزامات نقدية صافية فيذيب التضخم الدين — مكسبًا. وحيث تحمل البنود فوائد أو فهرسة تعوض الفقد المفقود تنكمش الخسارة تبعًا: فالتعويض قائم في تكلفة التمويل أصلًا. وهذه خلاصة المعيار — فانضباط الميزانية بعدم احتجاز نقد خامل يسعَّر داخل القوائم ذاتها.",
      },
    },
    {
      kind: "formula",
      title: { en: "The net monetary gain/loss", ar: "ربح/خسارة المركز النقدي" },
      lines: [
        { en: "Net monetary position = monetary assets − monetary liabilities (cash, receivables, payables, borrowings)", ar: "المركز النقدي الصافي = الأصول النقدية − الالتزامات النقدية (نقد، مدينون، دائنون، اقتراضات)" },
        { en: "LOSS on net monetary assets = position × (1 − opening index ÷ closing index)", ar: "الخسارة على الأصول النقدية الصافية = المركز × (١ − المؤشر الافتتاحي ÷ المؤشر الختامي)" },
        { en: "GAIN on net monetary liabilities = net liabilities × (1 − I₀ ÷ I₁) — inflation repays part of the debt for you", ar: "المكسب على الالتزامات النقدية الصافية = الالتزامات × (١ − المؤشر الافتتاحي ÷ الختامي) — فالتضخم يسدد عنك جزءًا من الدين" },
        { en: "Interest & indexation that COMPENSATE the lost purchasing power reduce the loss — the offset is already in finance costs", ar: "الفوائد والفهرسة المعوضة للفقد تقلص الخسارة — فالمقابل قائم في تكاليف التمويل أصلًا" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Restatement entries (illustrative)", ar: "قيود إعادة العرض (توضيحية)" },
      rows: [
        { dr: { en: "PPE (index uplift of carrying)", ar: "ممتلكات (زيادة المؤشر للدفترية)" }, cr: { en: "Restated depreciation & retained earnings (opening equity restate)", ar: "إهلاك معاد وأرباح محتجزة معاد عرضها" }, red: true },
        { dr: { en: "Cost of sales (restated)", ar: "تكلفة مبيعات (معاد عرضها)" }, cr: { en: "Inventory (restated)", ar: "مخزون (معاد عرضه)" } },
        { dr: { en: "Loss on net monetary position (cash & receivables lost purchasing power)", ar: "خسارة المركز النقدي الصافي (فقد النقد والمدينين قوته الشرائية)" }, cr: { en: "P&L — the separate line", ar: "الأرباح — السطر المستقل" }, red: true },
        { dr: { en: "P&L — net monetary gain (net liabilities during inflation)", ar: "الأرباح — مكسب نقدي صافٍ (التزامات صافية زمن التضخم)" }, cr: { en: "Monetary items' effect", ar: "أثر البنود النقدية" } },
      ],
    },
    {
      kind: "journal",
      title: { en: "The net monetary position both ways (index 250 → 500)", ar: "المركز النقدي في الاتجاهين (المؤشر من ٢٥٠ إلى ٥٠٠)" },
      rows: [
        { dr: { en: "Loss on net monetary position 300 (P&L)", ar: "خسارة مركز نقدي صافٍ ٣٠٠ (بالأرباح)" }, cr: { en: "Net monetary assets 600 held all period × (1 − 250/500) = 300", ar: "أصول نقدية صافية ٦٠٠ طوال الفترة × (١ − ٢٥٠÷٥٠٠) = ٣٠٠" }, red: true },
        { dr: { en: "Net monetary liabilities 600 held all period", ar: "التزامات نقدية صافية ٦٠٠ طوال الفترة" }, cr: { en: "Gain on net monetary position 300 (P&L) — inflation melted the debt", ar: "مكسب مركز نقدي صافٍ ٣٠٠ (بالأرباح) — أذاب التضخم الدين" }, red: true },
        { cr: { en: "An index-linked deposit pays the inflation compensation inside its interest — the loss on it is already offset", ar: "وديعة مفهرسة تدفع تعويض التضخم داخل فوائدها — فخسارتها معدلة أصلًا" } },
      ],
    },
    {
      kind: "example",
      title: { en: "Two-line restatement", ar: "إعادة عرض بسطرين" },
      lines: [
        { en: "Opening machinery cost 1,000 (index 200) · reporting-date index 500 → restated cost 2,500", ar: "آلة بافتتاحي ١٬٠٠٠ (مؤشر ٢٠٠) · ومؤشر التقرير ٥٠٠ ← المعاد ٢٬٥٠٠" },
        { en: "Annual depreciation restated the same way: 100 historical × 500/200 = 250", ar: "الإهلاك السنوي بالطريقة ذاتها: ١٠٠ × ٥٠٠÷٢٠٠ = ٢٥٠" },
        { en: "Net monetary position: receivables 800 (no restatement needed) held all period while prices doubled → purchasing-power LOSS 800 × (500−250)/500 = 400 → P&L", ar: "المركز النقدي: مدينون ٨٠٠ طوال الفترة تضاعفت فيها الأسعار ← خسارة قوة شرائية ٤٠٠ ← الأرباح" },
        { en: "Offsetting debt of 800 instead → a GAIN 400: inflation shrinks what you owe", ar: "لو كان دينًا بـ٨٠٠ ← مكسب ٤٠٠: فالتضخم يذيب ما عليك" },
      ],
    },
    { kind: "h", text: { en: "A full year restated — the worked example", ar: "سنة كاملة معاد عرضها — المثال العملي" } },
    {
      kind: "example",
      title: { en: "The whole income statement through the index", ar: "قائمة الأرباح كلها عبر المؤشر" },
      lines: [
        { en: "Indices: machinery acquired at 200 · opening 250 · year average 400 · closing 500 · machinery cost 1,000, annual depreciation 100 (historical)", ar: "المؤشرات: اقتناء الآلة عند ٢٠٠ · افتتاحي ٢٥٠ · متوسط السنة ٤٠٠ · ختامي ٥٠٠ · تكلفة الآلة ١٬٠٠٠ وإهلاكها السنوي ١٠٠ (تاريخي)" },
        { en: "Revenue 3,600 & cost of sales 2,000 & other expenses 800 — all arising evenly (average index 400)", ar: "إيراد ٣٬٦٠٠ وتكلفة مبيعات ٢٬٠٠٠ ومصاريف أخرى ٨٠٠ — كلها تنشأ بالتساوي (متوسط ٤٠٠)" },
        { en: "Revenue 3,600 × 500/400 = 4,500 · cost of sales 2,000 × 500/400 = 2,500 · other expenses 800 × 500/400 = 1,000", ar: "الإيراد ٣٬٦٠٠ × ٥٠٠÷٤٠٠ = ٤٬٥٠٠ · تكلفة المبيعات ٢٬٠٠٠ × ٥٠٠÷٤٠٠ = ٢٬٥٠٠ · المصاريف ٨٠٠ × ٥٠٠÷٤٠٠ = ١٬٠٠٠" },
        { en: "Depreciation 100 × 500/200 = 250 (the machine's OWN date, not the average) → restated operating profit = 4,500 − 2,500 − 1,000 − 250 = 750", ar: "الإهلاك ١٠٠ × ٥٠٠÷٢٠٠ = ٢٥٠ (بتاريخ الآلة ذاته لا بالمتوسط) ← الربح التشغيلي المعاد = ٤٬٥٠٠ − ٢٬٥٠٠ − ١٬٠٠٠ − ٢٥٠ = ٧٥٠" },
        { en: "Net monetary assets 600 held all period: loss = 600 × (1 − 250/500) = 300", ar: "أصول نقدية صافية ٦٠٠ طوال الفترة: الخسارة = ٦٠٠ × (١ − ٢٥٠÷٥٠٠) = ٣٠٠" },
        { en: "Restated profit for the year = 750 − 300 = 450 — in closing units, one money, one meaning", ar: "ربح السنة المعاد = ٧٥٠ − ٣٠٠ = ٤٥٠ — بوحدات الإقفال، نقد واحد ومعنى واحد" },
      ],
    },
    { kind: "h", text: { en: "Tax on restated figures", ar: "الضريبة على الأرقام المعادة" } },
    {
      kind: "p",
      text: {
        en: "Income tax expense restates like any other income-statement item — from the dates the tax arose. The deferred-tax machinery then runs on the RESTATED temporary differences: carrying amounts and tax bases are both expressed in closing units before IAS 12 computes the differences. IFRIC 7 confirms the loop closes inside the restatement itself, so the deferred tax balance and its movements are consistent with the restated statements rather than the abandoned nominal ones.",
        ar: "يعاد مصروف ضريبة الدخل كأي بند آخر بقائمة الأرباح — من تواريخ نشوء الضريبة. ثم تدير آلة الضريبة المؤجلة الفروق المؤقتة المعادة: فتعبَّر القيم الدفترية والأسس الضريبية كلتها بوحدات الإقفال قبل أن يحسب IAS 12 الفروق. ويؤكد IFRIC 7 أن الحلقة تُغلق داخل إعادة العرض ذاتها، فيتسق رصيد الضريبة المؤجلة وحركاته مع القوائم المعادة لا مع الاسمية المهجورة.",
      },
    },
    { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "The RESTATED figures are the primary statements — not a supplementary memo beside the nominal ones", ar: "الأرقام المعادة هي القوائم الأولية — لا مذكرة تكميلية بجانب الاسمية" },
        { en: "Comparatives restated into the CURRENT reporting date's units — both columns speak the same money", ar: "المقارنات تعاد إلى وحدات تاريخ التقرير الحالي — فالعمودان ينطقان بالنقد ذاته" },
        { en: "The fact of restatement + the price index used and its level at the reporting date", ar: "واقعة إعادة العرض + المؤشر المستخدم ومستواه بتاريخ التقرير" },
        { en: "The gain or loss on the NET MONETARY POSITION disclosed separately", ar: "ربح أو خسارة المركز النقدي الصافي تفصح منفصلة" },
        { en: "Whether the entity was, or ceased to be, hyperinflationary during the period", ar: "هل كانت المنشأة جامحة التضخم أم كفت عن ذلك خلال الفترة" },
      ],
    },
    { kind: "h", text: { en: "IFRIC 7 — the start & stop machinery", ar: "تفسير IFRIC 7 — آلية البدء والتوقف" } },
    {
      kind: "p",
      text: {
        en: "IFRIC 7 operationalises the transitions. START: when the economy first becomes hyperinflationary, the entity restates the opening balances of the latest preceding balance sheet into the units current at the FIRST reporting date under IAS 29 — the non-monetary assets enter the index machine from their own dates, and the deferred-tax consequences follow IAS 12. STOP: when the economy ceases to be hyperinflationary, restatement stops and the last restated amounts become the new cost baseline. And when the FUNCTIONAL CURRENCY changes away from the hyperinflationary one, IAS 21's changeover mechanics translate the restated amounts at the date of change.",
        ar: "يفعّل IFRIC 7 الانتقالات. البدء: حين يصير الاقتصاد جامحًا أول مرة، تعيد المنشأة عرض الأرصدة الافتتاحية لآخر ميزانية سابقة إلى الوحدات السائدة بأول تاريخ تقرير تحت IAS 29 — فتدخل الأصول غير النقدية آلة المؤشر من تواريخها، وتتبع الآثار الضريبية المؤجلة IAS 12. التوقف: حين يكف الاقتصاد عن الجماح تتوقف إعادة العرض وتصير آخر المبالغ المعادة أساس التكلفة الجديد. وعندما تتغير العملة الوظيفية بعيدًا عن الجامحة، تترجم ميكانيكا التحول في IAS 21 المبالغ المعادة بسعر تاريخ التغيير.",
      },
    },
    {
      kind: "tree",
      root: { en: "The hyperinflation status of the functional currency just changed", ar: "تغير للتو مركز التضخم الجامح للعملة الوظيفية" },
      branches: [
        {
          when: { en: "START — the economy BECOMES hyperinflationary", ar: "بدء — يصير الاقتصاد جامح التضخم" },
          then: { en: "Restate the latest preceding balance sheet's opening balances into units current at the FIRST IAS 29 reporting date; deferred tax per IAS 12", ar: "أعد الأرصدة الافتتاحية لآخر ميزانية سابقة إلى وحدات أول تاريخ تقرير تحت IAS 29؛ والمؤجلة وفق IAS 12", red: true },
        },
        {
          when: { en: "STOP — the economy CEASES to be hyperinflationary", ar: "توقف — يكف الاقتصاد عن الجماح" },
          then: { en: "Stop restating — the last restated amounts stand as the new historical cost baseline (no reverse-indexation)", ar: "توقف عن الإعادة — تقوم آخر المبالغ المعادة أساسًا تاريخيًا جديدًا (بلا فهرسة عكسية)", red: true },
        },
        {
          when: { en: "The FUNCTIONAL CURRENCY changes away from the hyperinflationary one", ar: "تتغير العملة الوظيفية بعيدًا عن الجامحة" },
          then: { en: "IAS 21 changeover: translate the restated amounts into the new functional currency at the DATE-OF-CHANGE rate", ar: "تحول IAS 21: ترجم المبالغ المعادة إلى العملة الوظيفية الجديدة بسعر تاريخ التغيير", red: true },
        },
      ],
    },
    {
      kind: "steps",
      items: [
        { en: "Identify the first reporting date at which the functional currency is hyperinflationary", ar: "حدد أول تاريخ تقرير تكون عنده العملة الوظيفية جامحة" },
        { en: "Take the OPENING balances of the latest preceding balance sheet — the latest set of figures already reported", ar: "خذ الأرصدة الافتتاحية لآخر ميزانية سابقة — آخر مجموعة أرقام سبق تقريرها" },
        { en: "Restate the non-monetary assets & liabilities into units current at that first reporting date via the general index", ar: "أعد الأصول والالتزامات غير النقدية إلى وحدات ذلك التاريخ الأول بالمؤشر العام" },
        { en: "Compute the deferred-tax consequences of the restatement under IAS 12 on the restated temp differences", ar: "احسب الآثار الضريبية المؤجلة لإعادة العرض وفق IAS 12 على الفروق المعادة" },
        { en: "From that date onward, the full IAS 29 machinery runs every period", ar: "من ذلك التاريخ فصاعدًا تعمل آلة IAS 29 كاملة كل فترة" },
      ],
    },
    { kind: "h", text: { en: "The group interface — IAS 21 interlock", ar: "تقاطع المجموعة — تشابك IAS 21" } },
    {
      kind: "p",
      text: {
        en: "A parent consolidating a hyperinflationary operation works in a fixed order: restate the subsidiary under IAS 29 into closing units FIRST, then translate into the presentation currency at the closing rate. Because the restated comparatives are already in closing units, they too translate at the closing rate — every column of the group statements ends up in the same money. Goodwill and the CTA reserve then ride the ordinary IAS 21 machinery on top.",
        ar: "تعمل الأم التي تجمع عملية جامحة بترتيب مقرر: أعد التابعة وفق IAS 29 إلى وحدات الإقفال أولًا، ثم ترجم إلى عملة العرض بسعر الإقفال. ولأن المقارنات المعادة بوحدات الإقفال أصلًا فإنها تترجم بسعر الإقفال كذلك — فينتهي كل عمود بقوائم المجموعة بالنقد ذاته. ثم تركب الشهرة واحتياطي الفروق آلة IAS 21 المعتادة فوق ذلك.",
      },
    },
    {
      kind: "tree",
      root: { en: "Consolidating an operation that may be hyperinflationary", ar: "تجميع عملية قد تكون جامحة التضخم" },
      branches: [
        {
          when: { en: "The subsidiary's FUNCTIONAL currency is hyperinflationary", ar: "العملة الوظيفية للتابعة جامحة" },
          then: { en: "RESTATE (IAS 29) first, THEN translate at closing (IAS 21) — the order never flips", ar: "أعد العرض (IAS 29) أولًا ثم ترجم بالإقفال (IAS 21) — الترتيب لا ينقلب أبدًا", red: true },
        },
        {
          when: { en: "The subsidiary's functional currency is stable but its books transact in the collapsing currency", ar: "عملة التابعة الوظيفية مستقرة لكن دفاترها تتعامل بالعملة المنهارة" },
          then: { en: "No IAS 29 — ordinary foreign-currency TRANSACTION mechanics (closing rate on monetary items)", ar: "لا IAS 29 — ميكانيكا المعاملات بالعملة الأجنبية المعتادة (سعر الإقفال للنقدية)" },
        },
        {
          when: { en: "The PARENT's own functional currency is hyperinflationary", ar: "عملة الأم ذاتها الوظيفية جامحة" },
          then: { en: "The parent's own statements restate under IAS 29 — and each foreign sub translates INTO that currency", ar: "قوائم الأم ذاتها تعاد وفق IAS 29 — وتترجم كل تابعة أجنبية إلى تلك العملة", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Interactions with other standards", ar: "التفاعل مع المعايير الأخرى" } },
    {
      kind: "list",
      items: [
        { en: "IAS 21: the restate-first-then-translate order for hyperinflationary functionals; comparatives translate at closing too", ar: "IAS 21: ترتيب أعد أولًا ثم ترجم للوظيفية الجامحة؛ والمقارنات تترجم بالإقفال كذلك" },
        { en: "IAS 12: income tax restated with the income statement; deferred tax computed on the RESTATED temporary differences", ar: "IAS 12: تعاد ضريبة الدخل مع قائمة الأرباح؛ والمؤجلة تحسب على الفروق المؤقتة المعادة" },
        { en: "IFRIC 7: the start, stop and currency-change transitions", ar: "IFRIC 7: انتقالات البدء والتوقف وتغيير العملة" },
        { en: "IAS 16 / IAS 36: depreciation and impairment now run on the restated carrying amounts", ar: "IAS 16 وIAS 36: الإهلاك وانخفاض القيمة يجريان على القيم الدفترية المعادة" },
        { en: "IFRS 13: fair values measured at the reporting date are already in closing units — the index machine leaves them alone", ar: "IFRS 13: القيم العادلة بتاريخ التقرير بوحدات الإقفال أصلًا — فآلة المؤشر تتركها" },
        { en: "IAS 34: interim statements restate into the INTERIM date's units", ar: "IAS 34: القوائم المرحلية تعاد إلى وحدات تاريخ المرحلة" },
        { en: "IAS 8: corrections and estimate changes are absorbed inside the restated figures", ar: "IAS 8: التصحيحات وتغيرات التقدير تمتص داخل الأرقام المعادة" },
      ],
    },
    { kind: "h", text: { en: "Transition & effective dates", ar: "الانتقال وتواريخ السريان" } },
    {
      kind: "p",
      text: {
        en: "IAS 29 was issued in 1989 and took effect on 1 January 1990 — then lay dormant for decades until economies tipped into hyperinflation (Zimbabwe, Venezuela being the modern showcases). IFRIC 7, issued December 2005 and effective 1 March 2006, supplies the transition machinery: first-time application, the deferred-tax loop, and the currency-change cases. There is no entity-level transition choice — the hyperinflation verdict itself is the trigger, and the restatement mechanism is inherently retrospective.",
        ar: "صدر IAS 29 عام ١٩٨٩ وسري من ١ يناير ١٩٩٠ — ثم بقي خامدًا عقودًا حتى انزلقت اقتصادات في الجماح (زيمبابوي وفنزويلا أحدث الاستعراضات). وصدر IFRIC 7 في ديسمبر ٢٠٠٥ نافذًا من ١ مارس ٢٠٠٦ ليقدم آلية الانتقال: التطبيق الأول، وحلقة الضريبة المؤجلة، وحالات تغيير العملة. ولا خيار انتقال على مستوى المنشأة — فحكم الجماح ذاته هو المفجر، وآلية إعادة العرض رجعية بطبيعتها.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The exam trio: (1) restatement uses a GENERAL price index (not specific prices); (2) monetary items are NOT restated — their GAIN/LOSS goes to P&L; (3) the group must wait: a parent retranslates only after the subsidiary's IAS 29 restatement. Write all three before the numbers.",
        ar: "الثلاثية الامتحانية: (١) الإعادة بمؤشر أسعار عام لا بأسعار خاصة؛ (٢) النقدية لا تعاد بل ربحها/خسارتها للأرباح؛ (٣) المجموعة تنتظر: لا تعيد الأم الترجمة إلا بعد إعادة التابعة. اكتبها الثلاثة قبل الأرقام.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Restatement is NOT revaluation: IAS 29 keeps the COST model's logic but in today's units — no OCI, no revaluation surplus; the uplift lands in the restated opening equity and depreciation.",
        ar: "الإعادة ليست إعادة تقييم: يبقى IAS 29 منطق نموذج التكلفة لكن بوحدات اليوم — لا دخل شامل ولا فائض إعادة تقييم؛ فالزيادة تذهب لحقوق الملكية الافتتاحية المعادة والإهلاك.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Never index a MONETARY item — receivables, cash and payables are already in closing units; applying the index to them double-counts the inflation. The monetary side's job is the net gain/loss line, nothing else.",
        ar: "لا تفهرس بندًا نقديًا أبدًا — فالنقد والمدينون والدائنون بوحدات الإقفال أصلًا؛ وتطبيق المؤشر عليها يحسب التضخم مرتين. ومهمة الجانب النقدي سطر الربح/الخسارة الصافي فحسب.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The net monetary LOSS is a P&L line — never an equity reserve. Candidates confuse it with IAS 21's CTA (which lives in equity until disposal); the two standards park their differences in different places.",
        ar: "خسارة المركز النقدي سطر بالأرباح — لا احتياطي حقوق ملكية أبدًا. فالمرشحون يخلطونها بفروق الترجمة في IAS 21 (الساكنة حقوق ملكية حتى التخرد)؛ والمعياران يضعان فروقهما في مكانين مختلفين.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "IFRIC 7's start point is the LATEST PRECEDING balance sheet — not the entity's whole history. The index machine picks up the already-reported figures and re-expresses them; nothing re-runs from the original acquisition dates except through those balances.",
        ar: "نقطة انطلاق IFRIC 7 آخر ميزانية سابقة — لا تاريخ المنشأة كله. فآلة المؤشر تلتقط الأرقام المبلغة سلفًا وتعيد التعبير عنها؛ ولا شيء يعاد من تواريخ الاقتناء الأصلية إلا عبر تلك الأرصدة.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Each year's statements were restated into THAT year's closing units when reported; the comparative column is then re-expressed into THIS year's units — so both columns of the published statements speak the same money.",
        ar: "قوائم كل سنة أعيدت عند تقريرها إلى وحدات إقفال تلك السنة؛ ثم يعاد التعبير عن عمود المقارنة بوحدات هذه السنة — فينطق عمودا القوائم المنشورة بالنقد ذاته.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Revenue that 'grew' 80% with flat volumes did not grow at all — the measuring unit shrank. Restated margins compare like with like; the nominal growth was an illusion of the collapsing unit.",
        ar: "الإيراد الذي «نما» ٨٠٪ بحجم مبيعات ثابت لم ينمُ أصلًا — بل انكمشت وحدة القياس. فالهوامش المعادة تقارن المتماثل بالمتماثل؛ أما النمو الاسمي فكان سراب الوحدة المنهارة.",
      },
    },
  ],
}
