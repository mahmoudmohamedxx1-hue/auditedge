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
    { kind: "h", text: { en: "The restatement machinery", ar: "آلية إعادة العرض" } },
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
      kind: "example",
      title: { en: "Two-line restatement", ar: "إعادة عرض بسطرين" },
      lines: [
        { en: "Opening machinery cost 1,000 (index 200) · reporting-date index 500 → restated cost 2,500", ar: "آلة بافتتاحي ١٬٠٠٠ (مؤشر ٢٠٠) · ومؤشر التقرير ٥٠٠ ← المعاد ٢٬٥٠٠" },
        { en: "Annual depreciation restated the same way: 100 historical × 500/200 = 250", ar: "الإهلاك السنوي بالطريقة ذاتها: ١٠٠ × ٥٠٠÷٢٠٠ = ٢٥٠" },
        { en: "Net monetary position: receivables 800 (no restatement needed) held all period while prices doubled → purchasing-power LOSS 800 × (500−250)/500 = 400 → P&L", ar: "المركز النقدي: مدينون ٨٠٠ طوال الفترة تضاعفت فيها الأسعار ← خسارة قوة شرائية ٤٠٠ ← الأرباح" },
        { en: "Offsetting debt of 800 instead → a GAIN 400: inflation shrinks what you owe", ar: "لو كان دينًا بـ٨٠٠ ← مكسب ٤٠٠: فالتضخم يذيب ما عليك" },
      ],
    },
    { kind: "h", text: { en: "Presentation, tax & the IFRIC 7 interface", ar: "العرض والضريبة وتقاطع IFRIC 7" } },
    {
      kind: "list",
      items: [
        { en: "Present the restated numbers as the PRIMARY statements (not a supplementary memo) — comparatives in the CURRENT reporting date's units too", ar: "تعرض الأرقام المعادة بوصفها القوائم الأولية — والمقارنات بوحدات تاريخ التقرير ذاته" },
        { en: "Restate INCOME TAX on the restated income; the deferred-tax machinery follows IAS 12 on restated temp differences", ar: "تعاد ضريبة الدخل على الأرباح المعادة؛ والمؤجلة وفق IAS 12 على الفروق المعادة" },
        { en: "IFRIC 7: when hyperinflation STARTS, restate from the latest set's opening balances — the non-monetary assets carried at the last non-hyperinflationary date enter the index machine; an entity BECOMES hyperinflationary mid-period restates from that date's balance sheet", ar: "تفسير IFRIC 7: عند بدء الجماح تعاد العرض من أرصدة أول مجموعة — وغير النقدية المحمولة قبل الجماح تدخل آلة المؤشر؛ ومن يصبح جامحًا في منتصف الفترة يعيد من ميزانية ذلك التاريخ" },
        { en: "When the economy STOPS being hyperinflationary: STOP restating — carry the last restated amounts as the new historical baseline", ar: "وإذا توقف الجماح: توقف عن إعادة العرض — واحمل آخر المبالغ المعادة أساسًا تاريخيًا جديدًا" },
        { en: "Foreign parents translating a hyperinflationary subsidiary (IAS 21): restate FIRST (IAS 29), then translate at closing rates", ar: "الأم تترجم تابعة جامحة (IAS 21): أعد أولًا ثم ترجم بأسعار الإقفال" },
      ],
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
  ],
}
