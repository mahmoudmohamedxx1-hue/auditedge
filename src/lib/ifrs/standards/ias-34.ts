/** IAS 34 — Interim Financial Reporting */

import type { Standard } from "../types"

export const IAS_34: Standard = {
  code: "IAS 34",
  title: { en: "Interim Financial Reporting", ar: "التقارير المالية المرحلية" },
  topic: "presentation",
  effective: { en: "Effective 1 Jul 1999 · not mandatory, but securities regulators demand it", ar: "سارٍ من ١ يوليو ١٩٩٩ · غير إلزامي لكن الهيئات الرقابية تشترطه" },
  blocks: [
    { kind: "h", text: { en: "Objective & timing", ar: "الهدف والتوقيت" } },
    {
      kind: "p",
      text: {
        en: "IAS 34 defines the MINIMUM content of an interim financial report and the recognition principles for the half-year, quarter or other interim period. It does NOT mandate interim reporting — the obligation comes from securities regulators, lenders or the entity's own policy — but once you publish an interim report, IAS 34 governs its content. Interim statements are a FRESH measurement of the period, not just an arithmetic cut of the annual numbers: 'Interim' means a reporting period SHORTER than a full financial year.",
        ar: "يحدد IAS 34 الحد الأدنى لمحتوى التقرير المالي المرحلي ومبادئ الاعتراف لنصف السنة أو الربع أو أي فترة مرحلية. وهو لا يوجب التقارير المرحلية — فالإلزام من الهيئات الرقابية أو المقرضين أو سياسة المنشأة — لكن متى نُشر التقرير حكمه IAS 34. والتقرير المرحلي قياس جديد للفترة لا مجرد تجزئة حسابي للأرقام السنوية.",
      },
    },
    { kind: "h", text: { en: "Contents — the condensed set", ar: "المحتويات — المجموعة المختصرة" } },
    {
      kind: "list",
      items: [
        { en: "CONDENSED statement of financial position (minimum line items per IAS 1) — or a FULL IAS 1 statement by choice", ar: "قائمة مركز مالي مختصرة (بالبنود الدنيا وفق IAS 1) — أو كاملة بالخيار" },
        { en: "CONDENSED P/L + condensed OCI (or a single condensed statement), condensed changes in equity, condensed cash flows", ar: "أرباح ودخل شامل مختصران (أو قائمة موحدة)، وتغيرات حقوق ملكية وتدفقات مختصرة" },
        { en: "Selected explanatory notes — focused on NEW transactions, events and circumstances since the last ANNUAL report", ar: "إيضاحات مختارة — تركز على الجديد من معاملات وأحداث وظروف منذ التقرير السنوي الأخير" },
        { en: "Comparatives: balance sheet as at the preceding ANNUAL reporting date + balance sheet at the start of the prior comparable interim period (when the entity restates) + P/L/OCI/equity/cash flows for the comparable interim period (year-to-date and, if published, the 12 months to date)", ar: "مقارنات: ميزانية نهاية السنة السابقة + ميزانية بداية الفترة المرحلية المقارنة + قوائم الفترة المقارلة (التراكمية وحتى ١٢ شهرًا عند النشر)" },
        { en: "Basic & diluted EPS for the interim periods presented (IAS 33 applies in full)", ar: "ربح السهم الأساسي والمخفض للفترات المعروضة (يطبق IAS 33 كاملًا)" },
      ],
    },
    { kind: "h", text: { en: "The governing principles", ar: "المبادئ الحاكمة" } },
    {
      kind: "tree",
      root: { en: "Two principles rule every interim question", ar: "مبدآن يحكمان كل مسألة مرحلية" },
      branches: [
        {
          when: { en: "PRINCIPLE 1 — same accounting policies as the ANNUAL statements", ar: "المبدأ الأول — السياسات ذاتها المطبقة في القوائم السنوية" },
          then: { en: "No interim-specific policies; IFRS applies the same way at 30 June as at 31 December", ar: "لا سياسات خاصة بالمرحلي؛ فالمعايير تطبق في ٣٠ يونيو كما في ٣١ ديسمبر", red: true },
        },
        {
          when: { en: "PRINCIPLE 2 — frequency, planning and seasonality should NOT affect interim measurement — each interim is measured as a DISCRETE period", ar: "المبدأ الثاني — لا أثر لتكرار التقارير أو الموسمية أو التخطيط؛ فكل فترة تقاس بوصفها فترة مستقلة" },
          then: { en: "Costs benefiting the year cannot ALL be dumped into one interim just because it is convenient; allocated on the correct basis", ar: "لا يجوز إلقاء تكاليف تعود على السنة كلها في فترة واحدة؛ بل توزع على أساس صحيح", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The discrete-period logic with its practical overlay: revenues and costs are recognised when they occur in the interim (a one-off bonus earned in Q1 is a Q1 expense even though paid in Q3); but estimates built over the year use the YEAR-TO-DATE method: estimate the annual amount, then subtract the amounts already recognised in earlier interims of the same year. Example: the annual audit fee is estimated and allocated across quarters; inventory NRV is tested at each interim with reversals allowed within the year (a write-down in Q1 can reverse in Q2 if conditions recover — IAS 36 reversals too, on new evidence).",
        ar: "منطق الفترة المستقلة مع غلافه العملي: تُعترف الإيرادات والتكاليف عند حدوثها في المرحلة (مكافأة مكتسبة في الربع الأول مصروفه وإن دفعت في الثالث)؛ لكن التقديرات المبنية على السنة تستخدم طريقة التراكمي: قدّر المبلغ السنوي ثم اطرح ما اعتُرف في المراحل السابقة. مثال: أتعاب المراجعة السنوية تقدر وتوزع على الأرباع؛ والقيمة الصافية للمخزون تختبر في كل مرحلة مع جواز الرد داخل السنة.",
      },
    },
    { kind: "h", text: { en: "Seasonality & the gross profit promise", ar: "الموسمية ووعد الإيراد" } },
    {
      kind: "p",
      text: {
        en: "Highly seasonal businesses (agriculture, retail, tourism) must DISCLOSE the seasonal nature of their operations — and IAS 34 discourages splitting annual costs 'evenly' when the pattern of benefit is not even. If revenue lands in one quarter and costs in another, the interim P/L shows the lumpiness; the notes explain it. Entities that publish a 12-month rolling statement satisfy much of this analytically; those that do not should add a seasonality note.",
        ar: "على الأعمال شديدة الموسمية (زراعة، تجزئة، سياحة) الإفصاح عن طبيعتها الموسمية — وينهى IAS 34 عن توزيع التكاليف السنوية بالتساوي حينما يكون نمط المنفعة غير متساو. فإذا تحقق الإيراد في ربع والتكاليف في آخر ظهر التفاوت في قائمة المرحلة وفسرته الإيضاحات.",
      },
    },
    { kind: "h", text: { en: "Use of estimates at interim", ar: "التقديرات في المرحلة" } },
    {
      kind: "list",
      items: [
        { en: "Interim measurement RELIES heavily on estimates — but they must be made with the same care as annual ones, and the year-to-date method handles mid-year corrections of estimate without restating the earlier interim (a change in estimate, IAS 8, prospective)", ar: "يعتمد القياس المرحلي على التقديرات — لكن بذات العناية السنوية، وتتكفل طريقة التراكمي بتصحيح التقدير منتصف السنة دون إعادة عرض المرحلة السابقة (تغير تقدير وفق IAS 8)" },
        { en: "Bonus/provision accruals: accrue if the entity has a legal/constructive obligation at the interim date and the amount can be estimated reliably", ar: "مخصصات المكافآت: تستحق إذا وُجد التزام قانوني/ضمني بتاريخ المرحلة وأمكن تقدير المبلغ موثوقًا" },
        { en: "Impairment at interim: recognise when indicators arise; reversal of a SAME-YEAR interim impairment is allowed on new evidence", ar: "انخفاض القيمة مرحليًا: اعترف عند المؤشرات؛ ويرد ما أنزلته مرحلة سابقة من السنة ذاتها بدليل جديد" },
        { en: "Annual costs unevenly flagged: if a cost cannot be allocated to interims on a rational basis, ACCRUE and allocate to the interim periods expected to benefit", ar: "تكاليف يصعب توزيعها بأساس منطقي: تستحق وتوزع على المراحل المستفيدة" },
      ],
    },
    { kind: "h", text: { en: "Going concern & inventory at interim", ar: "الاستمرارية والمخزون مرحليًا" } },
    {
      kind: "p",
      text: {
        en: "The going-concern assessment happens at EACH interim date for the remaining 12 months — a material uncertainty discovered at Q3 must be disclosed even if it may resolve by year-end. Inventory NRV tests at interim use the interim's evidence; however — costs expected to be recovered by YEAR-END price increases are NOT written down if the volume is on hand and prices genuinely recover before year-end (a classic exam nuance).",
        ar: "يُقيَّم الاستمرارية في كل تاريخ مرحلي عن الاثني عشر شهرًا الباقية — وعدم التأكد المكتشف بالربع الثالث يفصح عنه وإن كان مرجى زواله بنهاية السنة. وتختبر القيمة الصافية للمخزون بأدلة المرحلة؛ غير أن التكاليف المرتقب استردادها بارتفاع الأسعار قبل نهاية السنة لا ينقص قيمتها إذا توافرت الكميات والأدلة على التعافي فعليًا.",
      },
    },
    {
      kind: "example",
      title: { en: "Year-to-date allocation in action", ar: "التوزيع التراكمي عمليًا" },
      lines: [
        { en: "Annual audit fee estimate: 400 · recognised Q1 = 100, Q2 = 100", ar: "أتعاب مراجعة سنوية مقدرة: ٤٠٠ · المعترف به: الربع الأول ١٠٠ والثاني ١٠٠" },
        { en: "Q3 estimate revised to 480 → YTD charge needed at Q3 = 480 × 9/12 = 360 → Q3 expense = 360 − 200 = 160 (not 120)", ar: "الربع الثالث: روجع التقدير إلى ٤٨٠ ← تراكمي ٩ أشهر = ٣٦٠ ← مصروف الربع = ٣٦٠ − ٢٠٠ = ١٦٠ (لا ١٢٠)" },
        { en: "The YTD method self-corrects the earlier under-estimate without restating Q1/Q2", ar: "طريقة التراكمي تصحح ذاتيًا نقص التقدير السابق دون إعادة عرض الربعين" },
        { en: "Interim P/L formula: interim expense = YTD estimate − cumulative expense already recognised", ar: "معادلة المرحلة: مصروف المرحلة = التراكمي المقدر − المعترف به سابقًا" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The interim period relationships", ar: "علاقات الفترة المرحلية" },
      lines: [
        { en: "Year-to-date profit = Σ interim profits (after same-year estimate corrections)", ar: "الربح التراكمي = مجموع أرباح المراحل (بعد تصحيحات التقدير في السنة ذاتها)" },
        { en: "Interim revenue/expense = YTD estimate for the year × fraction of benefit − prior interims' charge", ar: "إيراد/مصروف المرحلة = التقدير التراكمي × نسبة المنفعة − ما حمل سابقًا" },
        { en: "Interim EPS = interim attributable profit ÷ WANS of the interim period (bonus issues restate intra-year too)", ar: "ربح سهم المرحلة = ربح المرحلة ÷ متوسط أسهمها (والمجانية تعاد بعرضها داخل السنة كذلك)" },
      ],
    },
    { kind: "h", text: { en: "Events after the interim date", ar: "الأحداث بعد التاريخ المرحلي" } },
    {
      kind: "p",
      text: {
        en: "IAS 10 applies to interims: the window runs from the interim date to the date of AUTHORISATION of the interim report. Adjusting events (customer bankruptcy evidencing a pre-date condition) adjust the interim numbers; non-adjusting events (post-date fire, an acquisition) are disclosed. Because interims are produced quickly, the window is short — but the discipline is identical.",
        ar: "يطبق IAS 10 على المرحلي: من تاريخ المرحلة حتى اعتماد تقريرها. فالأحداث المعدلة تعدل الأرقام، وغير المعدلة تفصح. وبسبب سرعة الإصدار تكون النافذة قصيرة — لكن الانضباط واحد.",
      },
    },
    { kind: "h", text: { en: "Disclosure essentials", ar: "أساسيات الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Statement that the SAME accounting policies as the last annual statements are followed — or describe every change", ar: "إقرار اتباع السياسات ذاتها في آخر قوائم سنوية — أو وصف كل تغيير" },
        { en: "Nature & amount of items affecting assets/liabilities/equity/income that are unusual because of nature, SIZE or incidence", ar: "طبيعة ومقدار البنود غير الاعتيادية بطبيعتها أو حجمها أو تكرارها" },
        { en: "Changes in accounting estimates, policies or corrections of errors since the annual statements", ar: "تغيرات التقديرات والسياسات وتصحيحات الأخطاء منذ القوائم السنوية" },
        { en: "Events & transactions since the last annual report — impairments, reversals, restructurings, share issues, purchases/sales, debt, dividends, segment shifts, discontinued operations (IFRS 5)", ar: "الأحداث والمعاملات منذ التقرير السنوي — انخفاض قيمة، ردوده، إعادة هيكلة، إصدارات، اقتناء/تخرد، ديون، توزيعات، تغيرات قطاعية، عمليات متوقفة" },
        { en: "IAS 34 does NOT require: full IAS 1 line items (condensed OK), a full notes suite, segment stuff beyond IFRS 8 requirements, or a P/L forecast for the rest of the year (encouraged, not required)", ar: "لا يشترط IAS 34: بنود IAS 1 كاملة (يكفي المختصر)، أو إيضاحات سنوية شاملة، أو توقعًا لأرباح بقية السنة (مستحسن لا واجب)" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The exam trick: 'the entity charged the full annual audit fee to Q4 because that is when the audit happens' — WRONG. Allocate on a rational basis across the interims (or when the obligation arises), because each interim is a discrete period of its own.",
        ar: "الحيلة الامتحانية: «حمّلت أتعاب المراجعة السنوية على الربع الرابع لأنها تحدث فيه» — خطأ. وزّع بأساس منطقي على المراحل لأن كل مرحلة فترة مستقلة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Materiality is judged for the INTERIM figures, and may need a LOWER threshold than annual — but an item material by NATURE (related party, fraud) is disclosed however small.",
        ar: "تُقدَّر الأهمية على أرقام المرحلة وقد يلزم حد أدنى من الأهمية أخفض من السنوي — والبند الجوهري بطبيعته (طرف ذو علاقة، تدليس) يفصح عنه أيًّا كان صغيرًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "An entity reporting quarterly publishes the Q4 as a YTD (12-month) statement only — a standalone 'Q4 report' would need comparatives nobody has; that is why Q4 comes bundled with the annual report.",
        ar: "من يصدر ربعيًا ينشر الربع الرابع تراكميًا (١٢ شهرًا) فقط — فتقرير رابع مستقل يحتاج مقارنات لا تتوفر؛ ولهذا يأتي الرابع مدمجًا مع التقرير السنوي.",
      },
    },
  ],
}
