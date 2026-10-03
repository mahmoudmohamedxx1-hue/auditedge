/** IAS 23 — Borrowing Costs */

import type { Standard } from "../types"

export const IAS_23: Standard = {
  code: "IAS 23",
  title: { en: "Borrowing Costs", ar: "تكاليف الاقتراض" },
  topic: "revenue",
  effective: { en: "Effective 1 Jan 2009 (revised — capitalisation mandatory)", ar: "سارٍ من ١ يناير ٢٠٠٩ (بعد المراجعة — الرسملة إلزامية)" },
  blocks: [
    { kind: "h", text: { en: "Objective & the capitalisation principle", ar: "الهدف ومبدأ الرسملة" } },
    {
      kind: "p",
      text: {
        en: "The 2007 revision removed the choice: borrowing costs DIRECTLY ATTRIBUTABLE to the acquisition, construction or production of a QUALIFYING ASSET must be CAPITALISED as part of that asset's cost; all other borrowing costs are expense in the period incurred. The matching logic: an asset that takes time to build accrues finance while it is being made — the finance belongs to its cost as much as the bricks do.",
        ar: "أزالت مراجعة ٢٠٠٧ الخيار: تكاليف الاقتراض المرتبطة مباشرة باقتناء أو إنشاء أو إنتاج أصل مؤهل تُرسمل ضمن تكلفته؛ وما عداها مصروف للفترة. ومنطق المقابلة: الأصل الذي يحتاج وقتًا لبنائه تتراكم عليه تكلفة تمويل وهو يُصنع — فالتمويل من تكلفته كالطوب تمامًا.",
      },
    },
    { kind: "h", text: { en: "Qualifying assets & borrowing costs", ar: "الأصول المؤهلة وتكاليف الاقتراض" } },
    {
      kind: "tree",
      root: { en: "What is a QUALIFYING asset?", ar: "ما الأصل المؤهل؟" },
      branches: [
        {
          when: { en: "An asset that NECESSARILY TAKES A SUBSTANTIAL PERIOD OF TIME to get ready for its intended use or sale", ar: "أصل يستلزم بالضرورة فترة جوهرية ليصبح جاهزًا لاستخدامه أو بيعه المقصودين" },
          then: { en: "Qualifies: buildings, power plants, intangibles under development, inventories requiring long maturation (wine, cheese) or long construction (ships, aircraft, bespoke machines)", ar: "مؤهل: مبانٍ، محطات، أصول غير ملموسة تحت التطوير، مخزون يتطلب تعتيقًا أو إنشاءً طويلًا (نبيج، أجبان، سفن، طائرات، آلات مصنوعة خصيصًا)", red: true },
        },
        {
          when: { en: "Assets produced REPEATEDLY in quantity over SHORT periods (normal inventories)", ar: "أصول تُنتج تكرارًا وبكميات خلال فترات قصيرة (المخزون الاعتيادي)" },
          then: { en: "NOT qualifying — the finance is an ordinary cost of the working capital cycle", ar: "غير مؤهل — فالتمويل تكلفة اعتيادية لدورة رأس المال العامل", red: true },
        },
        {
          when: { en: "BORROWING COSTS = interest on bank overdrafts/short & long borrowings computed by the EFFECTIVE INTEREST method + amortisation of discounts/premiums + ancillary costs (loan origination fees) + the finance-lease interest under IFRS 16 + exchange differences regarded as an adjustment to interest (to the extent they represent the adjustment of interest costs)", ar: "تكاليف الاقتراض = فوائد السحب المكشوف والقروض بطريقة الفائدة الفعلية + استنفاد العلاوات/الخصومات + التكاليف الملحقة (رسوم إصدار القرض) + فوائد الإيجار التمويلي وفق IFRS 16 + فروق العملة بوصفها تعديلًا للفوائد (بقدر ما تمثل تعديل الفوائد)" },
          then: { en: "The capitalisable pool — note the EIR method, not the coupon", ar: "وعاء الرسملة — ولاحظ طريقة الفائدة الفعلية لا الكوبون", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "When does capitalisation start, stop, pause?", ar: "متى تبدأ الرسملة وتتوقف وتتعطل؟" } },
    {
      kind: "steps",
      items: [
        { en: "COMMENCE when ALL three are happening: (1) expenditure on the asset is being incurred, (2) borrowing costs are being incurred, (3) activities to prepare the asset are IN PROGRESS", ar: "تبدأ عند تحقق الثلاثة: (١) تكبد الإنفاق على الأصل، (٢) تكبد تكاليف الاقتراض، (٣) تواصل الأنشطة المُعدّة للأصل" },
        { en: "SUSPEND during EXTENDED interruptions of active development (technical/administrative hold-ups, labour disputes) — keep expensing", ar: "تتعطل أثناء الانقطاعات الممتدة للتنفيذ النشط (تعطيلات فنية أو إدارية، نزاعات عمالية) — استمر في المصروف" },
        { en: "Short interruptions & technical work-in-progress storage (wine maturing) do NOT suspend", ar: "الانقطاعات القصيرة والتخزين الجوهري أثناء الإنجاز (تعتيق النبيج) لا تعطل" },
        { en: "CEASE when substantially ALL activities necessary to prepare the asset are COMPLETE — the date it is ready for its intended use, even if construction invoices keep arriving", ar: "تنتهي عند اكتمال جوهر الأنشطة اللازمة — تاريخ الجاهزية للاستخدام المقصود ولو استمرت فواتير الإنشاء" },
        { en: "Parts completed early: capitalise per part (a plant built in stages — each stage's cost closes when that stage is ready)", ar: "الأجزاء المكتملة مبكرًا: ترسمل جزئيًا (محطة بمراحل — كل مرحلة تُقفل عند جاهزيتها)" },
      ],
    },
    { kind: "h", text: { en: "Amount — the two-borrowing machinery", ar: "المبلغ — آلية الاقتراضين" } },
    {
      kind: "formula",
      title: { en: "Specific & general borrowings", ar: "القروض المحددة والعامة" },
      lines: [
        { en: "SPECIFIC borrowing: capitalise the ACTUAL costs incurred on that borrowing MINUS investment income on its temporary surplus (depositing the drawn-but-unspent funds)", ar: "القرض المحدد: تُرسمل التكاليف الفعلية عليه مطروحًا منها دخل استثمار فائضه المؤقت (وديعة السحب غير المستخدم)" },
        { en: "GENERAL pool: capitalisation rate = WEIGHTED AVERAGE cost of the entity's other outstanding borrowings (EXCLUDING borrowings made for specific assets)", ar: "الوعاء العام: معدل الرسملة = المتوسط المرجح لتكلفة بقية الاقتراضات القائمة (مستبعدًا قروض الأصول المحددة)" },
        { en: "Capitalised = expenditure incurred to date (cumulative, net of grants/progress payments) × capitalisation rate — for the periods the expenditure was outstanding", ar: "المرسمل = الإنفاق المتكبد تراكميًا (صافي المنح والدفعات) × معدل الرسملة — لفترات قيام الإنفاق" },
        { en: "CAP: never capitalise more than the TOTAL borrowing costs actually incurred in the period", ar: "الحد: لا رسملة تتجاوز إجمالي تكاليف الاقتراض المتكبدة فعليًا في الفترة" },
        { en: "Investment-income offset is ONLY for specific borrowings (before the asset spend begins), NOT for the general pool", ar: "خصم دخل الاستثمار للقروض المحددة فقط (قبل بدء الصرف على الأصل) لا للوعاء العام" },
      ],
    },
    {
      kind: "example",
      title: { en: "General-pool calculation", ar: "حساب الوعاء العام" },
      lines: [
        { en: "Borrowings outstanding all year: 5m at 8% and 3m at 6% → pool cost = (400 + 180) ÷ 8m = 7.25%", ar: "اقتراضات طوال السنة: ٥ مليون بـ٨٪ و٣ مليون بـ٦٪ ← كلفة الوعاء = (٤٠٠ + ١٨٠) ÷ ٨ = ٧٫٢٥٪" },
        { en: "Construction: 2m spent on 1 Jan + 3m on 1 Oct (weighted: 2m × 12/12 + 3m × 3/12 = 2.75m)", ar: "الإنشاء: ٢ مليون في ١ يناير و٣ مليون في ١ أكتوبر (المرجح = ٢ + ٠٫٧٥ = ٢٫٧٥)" },
        { en: "Capitalised borrowing cost = 2.75m × 7.25% = 199,375", ar: "التكلفة المرسملة = ٢٫٧٥ × ٧٫٢٥٪ = ١٩٩٬٣٧٥" },
        { en: "A 4m loan was drawn specifically for the project? Then route its actual cost (minus surplus income) through FIRST; only the un-funded expenditure drinks from the general pool", ar: "قرض ٤ مليون محدد للمشروع؟ يمر بفعليته (بصافي دخل الفائض) أولًا؛ وما لم يغطِّه يشرب من الوعاء العام" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The capitalisation entries", ar: "قيود الرسملة" },
      rows: [
        { dr: { en: "PPE / qualifying asset (capitalised borrowing costs)", ar: "ممتلكات/أصل مؤهل (تكاليف مرسملة)" }, cr: { en: "Interest payable / loan account", ar: "فوائد مستحقة/حساب القرض" }, red: true },
        { dr: { en: "Finance cost (non-qualifying share)", ar: "مصروف تمويلي (الحصة غير المؤهلة)" }, cr: { en: "Interest payable", ar: "فوائد مستحقة" } },
        { dr: { en: "Cash (investment income on the drawn-but-unspent funds)", ar: "نقد (دخل استثمار الأموال المسحوبة غير المنفقة)" }, cr: { en: "Qualifying asset (offset)", ar: "الأصل المؤهل (خصمًا)" } },
      ],
    },
    { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Disclose the amount of borrowing costs capitalised in the period AND the capitalisation rate used", ar: "أفصح عن مقدار التكاليف المرسملة في الفترة ومعدل الرسملة المستخدم" },
        { en: "Disclose the capitalisation policy for exchange differences treated as interest adjustments", ar: "أفصح عن سياسة رسملة فروق العملة المعاملة تعديلًا للفوائد" },
        { en: "The asset's carrying amount reflects capitalised costs; depreciation starts when the WHOLE asset (or stage) is ready — the capitalised interest then depreciates with it", ar: "القيمة الدفترية تعكس المرمل؛ ويبدأ الإهلاك بجاهزية الأصل كاملًا (أو مرحلته) — فيهلك معه المرمل" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The 'ready for intended use' test outranks 'construction finished': a plant handed over but awaiting the production line's installation keeps capitalising until it can actually run; on the other hand, inventory produced repeatedly does NOT qualify even if the factory took years.",
        ar: "اختبار «الجاهزية للاستخدام المقصود» يغلب «اكتمال الإنشاء»: مصنع سُلم لكنه ينتظر تركيب خط الإنتاج يستمر في الرسملة حتى يعمل فعلًا؛ وبالمقابل فالمخزون المتكرر إنتاجه لا يؤهل ولو استغرق المصنع سنوات.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Suspension logic is exam-tested with a strike: an IDLE 4-month halt = suspend; a 4-month SEASONAL technical pause written into the plan = no suspension. Read the scenario for whether the interruption is in the plan.",
        ar: "منطق التعطل امتحاني مع الإضرابات: توقف خامل ٤ أشهر = تعطل؛ و4 أشهر تقنية موسمية مخططة في المشروع = لا تعطل. اقرأ في السيناريو هل الانقطاع داخل الخطة.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The temporary-surplus investment income is NOT P&L income: it offsets the specific borrowing's capitalisable cost — it never touches the income statement.",
        ar: "دخل استثمار الفائض المؤقت ليس دخلًا للأرباح: يخصم من التكلفة المرسملة للقرض المحدد — ولا يمس قائمة الدخل إطلاقًا.",
      },
    },
  ],
}
