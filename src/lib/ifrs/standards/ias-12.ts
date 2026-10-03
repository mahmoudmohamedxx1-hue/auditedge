/** IAS 12 — Income Taxes */

import type { Standard } from "../types"

export const IAS_12: Standard = {
  code: "IAS 12",
  title: { en: "Income Taxes", ar: "ضرائب الدخل" },
  topic: "revenue",
  effective: { en: "Effective 1 Jan 1998 · amended by IFRIC 23 (uncertainty)", ar: "سارٍ من ١ يناير ١٩٩٨ · معدل بتفسير IFRIC 23" },
  blocks: [
    { kind: "h", text: { en: "Objective & the two taxes", ar: "الهدف والضريبتان" } },
    {
      kind: "p",
      text: {
        en: "IAS 12 accounts for CURRENT tax (this period's liability to the tax authority) and DEFERRED tax (the future tax consequences of temporary differences between carrying amounts and tax bases) using the BALANCE-SHEET LIABILITY method: look at what is on the balance sheet today, ask how it will be taxed tomorrow, and book the future tax now. Income taxes include all domestic/foreign taxes based on taxable profits, plus withholding taxes — but NOT VAT or sales taxes (those are IFRS 15 collection-on-behalf issues) and not IFRS 2 share-based taxes.",
        ar: "يعالج IAS 12 الضريبة الجارية (التزام هذه الفترة للهيئة الضريبية) والمؤجلة (الآثار الضريبية المستقبلية للفروق المؤقتة بين القيم الدفترية والأسس الضريبية) بأسلوب الالتزام في قائمة المركز المالي: انظر ما في الميزانية اليوم واسأل كيف سيُفرض عليه غدًا واحجز الضريبة الآن. وتشمل كل الضرائب على الأرباح الخاضعة محليًا وأجنبيًا والجباية عند المنبع — دون ضريبة القيمة المضافة (فهي تحصيل لحساب الغير وفق IFRS 15).",
      },
    },
    { kind: "h", text: { en: "Current tax", ar: "الضريبة الجارية" } },
    {
      kind: "list",
      items: [
        { en: "Liability (asset) for the period's estimated payable (recoverable) tax — an adjusting-events question when the authority assesses later (IAS 10)", ar: "التزام (أصل) بالضريبة المستحقة (القابلة للاسترداد) المقدرة للفترة — ومسألة أحداث معدلة عند تقدير الهيئة لاحقًا" },
        { en: "IFRIC 23 (uncertainty over income tax treatments): treat the uncertainty like IAS 37 — most-likely or expected-value on the tax in dispute, and DISCLOSE", ar: "تفسير IFRIC 23 (عدم تأكد المعالجات الضريبية): عامله كـIAS 37 — المبلغ الأرجح أو القيمة المتوقعة للضريبة محل النزاع مع الإفصاح" },
        { en: "Current tax = taxable profit × CURRENT enacted rates; an over/under-provision from last year adjusts THIS year's tax expense (not the opening balance)", ar: "الجارية = الربح الخاضع × المعدلات النافذة؛ والزيادة/النقصان في مخصص السنة الماضية يعدل مصروف هذه السنة" },
      ],
    },
    { kind: "h", text: { en: "The tax base — definitions that unlock everything", ar: "الأساس الضريبي — تعريفات تفتح كل شيء" } },
    {
      kind: "formula",
      title: { en: "Temporary differences", ar: "الفروق المؤقتة" },
      lines: [
        { en: "ASSET: tax base = the amount the tax authority will allow as DEDUCTIBLE in future periods as the carrying amount is recovered", ar: "الأصل: الأساس الضريبي = ما ستسمح به الهيئة خصمًا مستقبلًا عند استرداد القيمة الدفترية" },
        { en: "LIABILITY: tax base = carrying amount − amounts deductible in future (revenue already taxed now, or will never be taxed)", ar: "الالتزام: الأساس = الدفترية − ما يُخصم مستقبلًا (إيراد ضُرب الآن أو لن يُفرض عليه أبدًا)" },
        { en: "TEMPORARY difference = carrying amount − tax base (an accounting difference that will REVERSE in future periods)", ar: "الفرق المؤقت = القيمة الدفترية − الأساس الضريبي (فرق ينعكس مستقبلًا)" },
        { en: "Taxable difference (carrying > base) → DEFERRED TAX LIABILITY (future taxable amounts)", ar: "الفرق الخاضع (الدفترية > الأساس) ← التزام مؤجل (مبالغ ستُفرض مستقبلًا)" },
        { en: "Deductible difference (carrying < base) → DEFERRED TAX ASSET (future deductions)", ar: "الفرق الخصم (الدفترية < الأساس) ← أصل مؤجل (خصومات مستقبلية)" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Quick felt-sense: depreciation — cost 1,000, carrying 600, tax base 400 (accelerated tax depreciation taken) → taxable difference 200 → DTL at the enacted rate. A provision for warranty costs 100 (carrying; tax base NIL because deductible only when paid) → deductible difference 100 → DTA. Unused tax losses and credits ARE deductible temporary differences (carryforwards) — subject to the recognition test below.",
        ar: "إحساس سريع: إهلاك — تكلفة ١٬٠٠٠ ودفترية ٦٠٠ وأساس ضريبي ٤٠٠ (إهلاك ضريبي معجل) ← فرق خاضع ٢٠٠ ← التزام مؤجل بالمعدل النافذ. ومخصص ضمان ١٠٠ (أساسه الضريبي صفر لأنه لا يخصم إلا عند الدفع) ← فرق خصم ١٠٠ ← أصل مؤجل. والخسائر غير المستخدمة فروق خصم (رصيد مُرحَّل) خاضعة لاختبار الاعتراف أدناه.",
      },
    },
    { kind: "h", text: { en: "Recognising DTAs — the profitability gate", ar: "الاعتراف بالأصول المؤجلة — بوابة الربحية" } },
    {
      kind: "tree",
      root: { en: "A deductible temporary difference arose", ar: "نشأ فرق خصم مؤقت" },
      branches: [
        {
          when: { en: "Probable (more likely than not) that future taxable profit will be available to absorb the deduction", ar: "مرجح توافر ربح خاضع مستقبلي يستوعب الخصم" },
          then: { en: "RECOGNISE the DTA at the enacted rates expected to apply", ar: "اعترف بالأصل المؤجل بالمعدلات النافذة المتوقعة", red: true },
        },
        {
          when: { en: "Doubtful future profits (a history of losses)", ar: "شك في الأرباح المستقبلية (تاريخ خسائر)" },
          then: { en: "Recognise ONLY to the extent of taxable temporary differences reversing in the SAME period (a natural hedge) or other convincing evidence (loss carryback, profitable history, binding contracts)", ar: "اعترف بحد الفروق الخاضعة المنعكسة في الفترة ذاتها أو بدليل آخر مقنع (ترحيل للخلف، تاريخ ربحي، عقود ملزمة)", red: true },
        },
        {
          when: { en: "The DTA comes from NEGATIVE goodwill or a primary P&L item in a business combination", ar: "أصل ناشئ عن شهرة سالبة أو بند رئيسي في اندماج" },
          then: { en: "Special combination rules — the acquirer always books DTAs for the acquiree's losses IF profitability is probable", ar: "قواعد خاصة بالاندماج — يثبته المقتني إذا رجحت الربحية" },
        },
        {
          when: { en: "Unutilised losses at each reporting date — reassess EVERY date; a turnaround means START recognising", ar: "خسائر غير مستفاد منها — تعاد مراجعتها كل تقرير؛ والتعافي يبدأ الاعتراف" },
          then: { en: "Change in recoverability → adjust through CURRENT tax expense (P&L), never through equity for the original item", ar: "تغير القابلية للاسترداد ← يعدل بمصروف الضريبة الجارية" },
        },
      ],
    },
    { kind: "h", text: { en: "The initial-recognition exceptions", ar: "استثناءات الاعتراف الأولي" } },
    {
      kind: "list",
      items: [
        { en: "GOODWILL: no DTL on the goodwill's taxable difference (amortisation is never deductible and the IASB froze the loop) — recognised ONLY when the goodwill arises in a combination for tax purposes", ar: "الشهرة: لا التزام مؤجل على فرقها الخاضع (استهلاكها غير قابل للخصم والأصل أنجز الحلقة) — يعترف به فقط عند نشوء الشهرة في اندماج لأغراض ضريبية" },
        { en: "INITIAL RECOGNITION exception: no deferred tax on an asset/liability's first recognition in a transaction that (a) is not a business combination AND (b) affects NEITHER accounting nor taxable profit — the classic: government grants (IAS 20 deductible-asset route) and IFRS 16 ROU assets/liabilities at commencement", ar: "استثناء الاعتراف الأولي: لا ضريبة مؤجلة عند أول إثبات لأصل/التزام في معاملة ليست اندماجًا ولا تمس الربح المحاسبي ولا الخاضع — الكلاسيكي: المنح الحكومية وأصول/التزامات الحق في الاستخدام عند بدء الإيجار" },
        { en: "The exception applies only to the INITIAL amount — subsequent movements (e.g. an index-driven lease remeasurement) DO give deferred tax", ar: "الاستثناء للمبلغ الأولي فقط — والحركات اللاحقة (إعادة قياس الإيجار بمؤشر) تولد ضريبة مؤجلة" },
        { en: "INVESTMENTS in subsidiaries/associates/JVs: recognise a DTL on taxable differences UNLESS the parent can control the reversal AND it is probable the difference will not reverse in the foreseeable future (the 12.39 exemption — e.g. a plan to hold forever, or a group that can dictate dividend policy)", ar: "الاستثمارات في التابعات والزميلات والمشتركة: يعترف بالالتزام المؤجل إلا إذا سيطر المستثمر على الانعكاس ورجح عدم حدوثه في المستقبل المنظور (إعفاء ١٢.٣٩ — كخطة احتفاظ دائم أو قدرة على تقرير سياسة التوزيعات)" },
      ],
    },
    { kind: "h", text: { en: "Measurement & the rate rules", ar: "القياس وقواعد المعدل" } },
    {
      kind: "list",
      items: [
        { en: "Measure deferred tax at the rates ENACTED or SUBSTANTIVELY ENACTED by the reporting date, expected to apply when the item reverses — the announced-but-not-enacted rate waits", ar: "يقاس بالمعدلات النافذة أو المشروعة جوهريًا بتاريخ التقرير والمتوقع تطبيقها عند الانعكاس — والمعلن دون تشريع ينتظر" },
        { en: "NEVER discount deferred tax; review DTA carrying at EVERY reporting date", ar: "لا خصم للضريبة المؤجلة أبدًا؛ ويراجع الأصل المؤجل في كل تاريخ تقرير" },
        { en: "Deferred tax follows the item: differences from P&L items → tax expense (P&L); from OCI items (revaluation surplus, FVOCI, cash-flow hedges, translation differences) → OCI/equity", ar: "الضريبة تتبع البند: فروق بنود الأرباح ← مصروف الضريبة؛ وفروق بنود الدخل الشامل أو حقوق الملكية ← الدخل الشامل" },
        { en: "Classification: deferred tax is ALWAYS non-current; current tax follows the related asset/liability (but expect the 2021 amendment-style presentation as non-current in practice)", ar: "التبويب: المؤجلة غير متداولة دائمًا؛ والجارية تتبع البند ذا الصلة" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The deferred entries", ar: "قيود الضريبة المؤجلة" },
      rows: [
        { dr: { en: "Deferred tax expense (P&L)", ar: "مصروف ضريبة مؤجلة (بالأرباح)" }, cr: { en: "Deferred tax liability (growth)", ar: "التزام ضريبة مؤجلة (نمو)" }, red: true },
        { dr: { en: "Deferred tax asset (recognition/recovery)", ar: "أصل ضريبة مؤجلة (اعتراف/استرداد)" }, cr: { en: "Deferred tax income (P&L)", ar: "إيراد ضريبة مؤجلة (بالأرباح)" }, red: true },
        { dr: { en: "Income tax expense — current", ar: "مصروف ضريبة الدخل — جارية" }, cr: { en: "Current tax payable", ar: "ضريبة جارية مستحقة" } },
        { dr: { en: "OCI — revaluation surplus", ar: "الدخل الشامل — فائض إعادة التقييم" }, cr: { en: "Deferred tax liability on the uplift", ar: "التزام مؤجل على الزيادة" }, red: true },
        { dr: { en: "Current tax payable", ar: "ضريبة جارية مستحقة" }, cr: { en: "Cash (payment to the authority)", ar: "نقد (سداد للهيئة)" } },
      ],
    },
    {
      kind: "example",
      title: { en: "A temp-difference table", ar: "جدول الفروق المؤقتة" },
      lines: [
        { en: "Machine: cost 1,000 · accounting carrying 600 · tax base 400 · rate 25%", ar: "آلة: تكلفة ١٬٠٠٠ · دفترية محاسبية ٦٠٠ · أساس ضريبي ٤٠٠ · معدل ٢٥٪" },
        { en: "Taxable difference 200 → DTL 50", ar: "فرق خاضع ٢٠٠ ← التزام مؤجل ٥٠" },
        { en: "Warranty provision 100 · tax base 0 → deductible difference 100 → DTA 25", ar: "مخصص ضمان ١٠٠ وأساسه صفر ← فرق خصم ١٠٠ ← أصل مؤجل ٢٥" },
        { en: "Loss carried forward 80 (probable future profits) → DTA 20; interest receivable accrued 40 taxed on receipt → DTL 10", ar: "خسارة مرحلة ٨٠ (أرباح مرجحة) ← أصل ٢٠؛ وفوائد مستحقة ٤٠ تضرب عند القبض ← التزام ١٠" },
        { en: "Net deferred position: DTL (50 + 10) 60 vs DTA (25 + 20) 45 → net DTL 15", ar: "المركز الصافي: التزام (٥٠ + ١٠) ٦٠ مقابل أصل (٢٥ + ٢٠) ٤٥ ← التزام صافٍ ١٥" },
      ],
    },
    { kind: "h", text: { en: "Offsetting & presentation", ar: "المقاصة والعرض" } },
    {
      kind: "p",
      text: {
        en: "Offset a current/deferred tax ASSET against a LIABILITY (or vice versa) only when the entity has a LEGALLY ENFORCEABLE RIGHT to set off and the amounts relate to the SAME taxation authority. Intragroup current tax balances of a group can offset if permission exists. In P&L, disclose the tax expense's major components: current, deferred, adjustments, and a reconciliation between the tax expense and the accounting profit × the statutory rate (a favourite disclosure question).",
        ar: "تقاص الأصل بالالتزام (أو العكس) فقط عند وجود حق قانوني نافذ في المقاصة وارتباط المبالغ بالهيئة الضريبية ذاتها. وفي الأرباح يفصح عن المكونات الرئيسية: الجارية والمؤجلة والتسويات، وتسوية بين مصروف الضريبة وحاصل ضرب الربح المحاسبي في المعدل القانوني.",
      },
    },
    { kind: "h", text: { en: "IFRS 3 & deferred tax inside combinations", ar: "الضريبة المؤجلة داخل الاندماجات" } },
    {
      kind: "list",
      items: [
        { en: "The acquirer books DTAs/DTLs on the acquiree's IDENTIFIABLE assets at fair value — tax effects adjust the goodwill equation (a bigger DTL means MORE goodwill)", ar: "يثبت المقتني أصولًا والتزامات مؤجلة على الأصول المحددة للمقتنى بالقيمة العادلة — والآثار تعدل معادلة الشهرة (التزام أكبر يعني شهرة أكبر)" },
        { en: "The acquiree's PRE-EXISTING DTA for unused losses counts as an identifiable asset if future profitability is probable", ar: "أصل المقتنى المؤجل المسبق عن خسائر مرحلة أصل محدد إذا رجحت الربحية" },
        { en: "After the measurement period, adjustments flow through P&L (IFRS 3) with the tax effect of the adjustment computed at the original rates", ar: "بعد فترة القياس تجري التسويات بالأرباح (IFRS 3) بأثرها الضريبي بالمعدلات الأصلية" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The three exam killers: (1) DTL always recognised EXCEPT the two initial-recognition exceptions + goodwill + 12.39 investments; (2) DTA needs the profitability test; (3) deferred tax follows the SOURCE (OCI items → OCI). Master the trio and IAS 12 is gift marks.",
        ar: "قتلة الامتحان الثلاثة: (١) الالتزام المؤجل يعترف به دائمًا إلا في استثناءي الاعتراف الأولي والشهرة واستثمار ١٢.٣٩؛ (٢) الأصل يحتاج اختبار الربحية؛ (٣) الضريبة تتبع المصدر (بنود الدخل الشامل ← الدخل الشامل). أتقن الثلاثية تسهل درجات IAS 12.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "A lease's ROU asset and lease liability gross up BOTH a DTL (liability > asset early on) and a DTA later — but the INITIAL recognition exception spares the day-one amounts only; afterwards it's an ordinary temp-difference pair.",
        ar: "أصل الحق والتزامه يولدان التزامًا مؤجلًا مبكرًا (الالتزام أكبر) وأصلًا لاحقًا — لكن استثناء الاعتراف الأولي يعفي مقادير اليوم الأول فقط؛ ثم يصبحان زوج فروق عاديًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Permanent differences (non-deductible fines, entertainment costs) create NO deferred tax — they hit the current tax computation every period with no future reversal.",
        ar: "الفروق الدائمة (غرامات غير قابلة للخصم، مصاريف ترفيهية) لا تنشئ ضريبة مؤجلة — إنها تدخل في احتساب الضريبة الجارية كل فترة دون انعكاس مستقبلي.",
      },
    },
  ],
}
