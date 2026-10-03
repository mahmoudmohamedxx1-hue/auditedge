/** IAS 2 — Inventories */

import type { Standard } from "../types"

export const IAS_2: Standard = {
  code: "IAS 2",
  title: { en: "Inventories", ar: "المخزون" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 1995", ar: "سارٍ من ١ يناير ١٩٩٥" },
  blocks: [
    { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
    {
      kind: "p",
      text: {
        en: "Prescribe the accounting for inventories — assets held for sale in the ordinary course, in the process of production for sale, or in the form of materials/supplies to be consumed in production or service rendering. The twin questions: what goes into COST, and what is the CARRYING amount at each reporting date (the lower of cost and net realisable value). Excluded: work in progress under construction contracts (IFRS 15), financial instruments (IFRS 9), biological assets (IAS 41 — until harvest), and agricultural produce at harvest (IAS 2 takes over AFTER the harvest point).",
        ar: "يحدد محاسبة المخزون — أصول محتفظ بها للبيع في النشاط الاعتيادي، أو تحت التشغيل لأجل البيع، أو مواد تُستهلَك في الإنتاج أو الخدمة. والسؤالان: ماذا يدخل في التكلفة؟ وما القيمة الدفترية في كل تاريخ تقرير (الأدنى من التكلفة والقيمة الصافية الواقعية)؟ والمستبعد: أعمال إنشاء تحت التنفيذ (IFRS 15)، والأدوات المالية (IFRS 9)، والأصول الحيوية (IAS 41)، والمنتج الزراعي عند الحصاد (يتولاه IAS 2 بعد الحصاد).",
      },
    },
    { kind: "h", text: { en: "Cost — the four buckets", ar: "التكلفة — الحاويات الأربع" } },
    {
      kind: "list",
      items: [
        { en: "PURCHASE costs: price + import duties + transport/handling directly attributable − trade discounts, rebates, duty drawbacks", ar: "تكاليف الشراء: السعر + الرسوم الجمركية + النقل والمناولة المرتبطة مباشرة − الخصومات التجارية والمرتجعات والاستردادات" },
        { en: "CONVERSION costs: direct labour + a SYSTEMATIC allocation of FIXED production overheads based on NORMAL CAPACITY (actual production, normal idle time) — variable overheads allocated per actual use", ar: "تكاليف التحويل: العمالة المباشرة + توزيع منظم للتحميلات الصناعية الثابتة على أساس الطاقة الإنتاجية العادية — والمتحملات المتغيرة بحسب الاستخدام الفعلي" },
        { en: "OTHER costs — only if incurred to bring the inventory to its present location and condition (design for specific customers, producer licensing)", ar: "تكاليف أخرى — فقط لإيصال المخزون إلى موقعه وحالته (تصميم لعملاء محددين، رسوم منتج)" },
        { en: "ABNORMAL waste, storage (unless needed pre-production), admin overheads unrelated to production, selling costs, FX differences — NEVER inventoriable (borrowing costs: only via IAS 23 for qualifying assets)", ar: "الهالك غير الطبيعي، والتخزين (ما لم يلزم قبل الإنتاج)، والتحميلات الإدارية، وتكاليف البيع، وفروق العملة — لا تدخل أبدًا (وتكاليف الاقتراض عبر IAS 23 فقط)" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "NORMAL CAPACITY is the production achievable over several periods/seasons in normal circumstances, after allowing for planned maintenance — the fixed overhead absorbed per unit RISES when production is low, but abnormal idle-capacity costs go straight to expense. A wine producer's maturation or a long pre-production storage wait CAN be included if normal for the process.",
        ar: "الطاقة العادية هي المتاح إنتاجه عبر عدة فترات في ظروف طبيعية بعد الصيانة المخططة — فالمخصص الثابت للوحدة يرتفع عند انخفاض الإنتاج، بينما تُحمَّل تكاليف الطاقة المعطلة غير الطبيعية مصروفًا فورًا. وقد يدخل تخزين التعتيق الطويل إذا كان معتادًا في الصناعة.",
      },
    },
    { kind: "h", text: { en: "Cost formulas — FIFO & weighted average only", ar: "معادلات التكلفة — FIFO والمتوسط المرجح فقط" } },
    {
      kind: "tree",
      root: { en: "Which cost formula for interchangeable inventory items?", ar: "أي معادلة تكلفة لبنود المخزون القابلة للتبديل؟" },
      branches: [
        {
          when: { en: "FIRST-IN FIRST-OUT — the OLDEST goods sold first, newest stay in closing inventory (matches physical flow for perishables; closing inventory ≈ current prices)", ar: "الوارد أولًا صادر أولًا — أقدم البضائع تباع أولًا وأحدثها تبقى في الرصيد" },
          then: { en: "Cost of sales mirrors old prices; CLOSING inventory carries recent cost — inflation inflates PROFIT", ar: "تكلفة المبيعات بأسعار قديمة والرصيد الختامي بالحديثة — فالتضخم يرفع الربح", red: true },
        },
        {
          when: { en: "WEIGHTED AVERAGE cost (periodic or moving)", ar: "متوسط التكلفة المرجح (الدوري أو المتحرك)" },
          then: { en: "One blended cost per unit — smooths the price path", ar: "تكلفة ممتزة للوحدة تمهد مسار الأسعار", red: true },
        },
        {
          when: { en: "LIFO (last-in, first-out)", ar: "الوارد أخيرًا صادر أولًا" },
          then: { en: "BANNED under IFRS (allowed under US GAAP) — a favourite 'spot the violation' exam line", ar: "محظور وفق IFRS (مسموح وفق US GAAP) — سطر امتحاني محبب لكشف المخالفات", red: true },
        },
        {
          when: { en: "Specific identification for NON-interchangeable items ( Rolls Royce cars, jewellery, custom projects)", ar: "تحديد الهوية المحددة للبنود غير القابلة للتبديل (سيارات فاخرة، مجوهرات، مشروعات خاصة)" },
          then: { en: "Cost the actual units — the only option when the goods are distinguishable", ar: "تكلفة الوحدات الفعلية — الخيار الوحيد عند تميز البضائع", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Techniques allowed when results approximate cost: STANDARD COSTing (materials, labour, overheads at normal operating conditions — variances reviewed and written back) and the RETAIL METHOD (sales value less the normal gross margin — markups are watched and the average margin applied)",
        ar: "ويجوز استخدام تقنيات عند تقريبها للتكلفة: التكلفة المعيارية (مواد وعمالة وتحميلات بظروف تشغيل عادية مع مراجعة الانحرافات) وطريقة البيع بالتجزئة (قيمة البيع مطروحًا منها هامش الربح المعتاد).",
      },
    },
    { kind: "h", text: { en: "Net realisable value — the floor", ar: "القيمة الصافية الواقعية — الحد الأدنى" } },
    {
      kind: "formula",
      title: { en: "NRV & the write-down", ar: "القيمة الصافية والانقاص" },
      lines: [
        { en: "NRV = estimated selling price in the ordinary course − estimated costs of completion − estimated selling costs", ar: "القيمة الصافية = سعر البيع المقدر في النشاط الاعتيادي − تكاليف الإنجاز المقدرة − تكاليف البيع المقدرة" },
        { en: "Carrying amount = LOWER of cost and NRV, item by item — never at the whole class", ar: "القيمة الدفترية = الأدنى من التكلفة والقيمة الصافية، بندًا بندًا لا لفئة كاملة" },
        { en: "Write-down = cost − NRV when NRV < cost → expense in the period", ar: "الانقاص = التكلفة − القيمة الصافية عند نزولها ← مصروف الفترة" },
        { en: "REVERSAL (new evidence, NRV recovers): reverse up to the ORIGINAL cost — a REVERSAL is NEW in IAS 2 (unlike the old prohibition)", ar: "الرد (بدليل جديد وارتفاع القيمة الصافية): يرد حتى التكلفة الأصلية — والرد جائز وفق IAS 2" },
        { en: "Mats/write-down logic: materials held for production — write down ONLY if finished-goods NRV < cost; otherwise keep materials at cost", ar: "منطق المواد: لا تنقص قيمة المواد إلا إذا انخفضت القيمة الصافية للمنتج النهائي عن تكلفته؛ وإلا بقيت بتكلفتها" },
      ],
    },
    {
      kind: "example",
      title: { en: "Item-by-item NRV table", ar: "جدول القيمة الصافية بندًا بندًا" },
      lines: [
        { en: "Item A: cost 100, NRV 90 → carry 90 (write down 10) · Item B: cost 80, NRV 95 → carry 80 (no gain for free)", ar: "الصنف أ: تكلفة ١٠٠ وصافية ٩٠ ← يحمل بـ٩٠ (انقاص ١٠) · الصنف ب: تكلفة ٨٠ وصافية ٩٥ ← يحمل بـ٨٠ (لا ربح بلا بيع)" },
        { en: "Class total cost 180, class total NRV 185 → class-level would carry 180 — but item-by-item carries 170! IAS 2 mandates the item-by-item (or group-of-similar) discipline", ar: "إجمالي الفئة: تكلفة ١٨٠ وصافية ١٨٥ ← الفئة تحمل ١٨٠، لكن بندًا بندًا تحمل ١٧٠! وIAS 2 يوجب البند بالبند" },
        { en: "Next period NRV of A recovers to 98 → carry at 98 (reverse 8 of the 10 written down, capped at original cost)", ar: "الفترة التالية: ارتفعت صافية أ إلى ٩٨ ← يحمل بـ٩٨ (رد ٨ من ١٠ بحد أقصى التكلفة الأصلية)" },
        { en: "Service inventory: staff costs + directly attributable overheads for services not yet billed (IAS 2.19)", ar: "مخزون الخدمات: أجور العاملين + التحميلات المباشرة لخدمات لم تفاتر بعد (IAS 2.19)" },
      ],
    },
    { kind: "h", text: { en: "The purchase-to-P&L journal path", ar: "مسار القيود من الشراء إلى الأرباح" } },
    {
      kind: "journal",
      title: { en: "Inventoriable entries", ar: "قيود المخزون" },
      rows: [
        { dr: { en: "Inventory (goods for resale)", ar: "مخزون (بضاعة للبيع)" }, cr: { en: "Payables / cash (net of discounts)", ar: "دائنون/نقد (صافي الخصومات)" } },
        { dr: { en: "Inventory (WIP: materials → labour → absorbed overheads)", ar: "مخزون تحت التشغيل (مواد ← أجور ← تحميلات مدمجة)" }, cr: { en: "Materials control · Payroll · Production overheads absorbed", ar: "حساب المواد · الأجور • التحميلات المدمجة" } },
        { dr: { en: "Cost of sales", ar: "تكلفة المبيعات" }, cr: { en: "Inventory (goods sold: FIFO/WAVG)", ar: "مخزون (المبيع: FIFO أو المتوسط)" }, red: true },
        { dr: { en: "Write-down expense (loss on inventory)", ar: "مصروف انقاص المخزون" }, cr: { en: "Inventory (or provision: allowance to NRV)", ar: "مخزون (أو مخصص حتى القيمة الصافية)" }, red: true },
        { dr: { en: "Inventory", ar: "مخزون" }, cr: { en: "Reversal of write-down (P&L credit, capped at cost)", ar: "رد الانقاص (دائن بالأرباح بحد التكلفة)" } },
      ],
    },
    { kind: "h", text: { en: "By-products & other subtleties", ar: "المنتجات الثانوية وغيرها من الدقائق" } },
    {
      kind: "list",
      items: [
        { en: "BY-PRODUCTS: deduct their NRV from the cost of the MAIN product's inventory — the by-product 'carries' no cost of its own", ar: "المنتجات الثانوية: تُخصم قيمتها الصافية من تكلفة مخزون المنتج الرئيسي" },
        { en: "COMMITMENTS to buy finished goods for a price > NRV (a loss-making purchase contract) → IAS 37 onerous contract provision, not inventory", ar: "تعهدات بشراء سلع جاهزة بسعر أعلى من صافيتها ← مخصص عقد مفضِر وفق IAS 37 لا مخزون" },
        { en: "A manufacturer's OWN Selling expenses & advertising NEVER enter cost; distribution do not either — they belong to selling", ar: "مصاريف البيع والدعاية للمنتج لا تدخل التكلفة أبدًا" },
        { en: "Consignment goods: the CONSIGNOR keeps them in inventory — control, not location, decides (IFRS 15 vocabulary)", ar: "بضاعة الأمانة: تبقى لدى المُرسِل في المخزون — فالعبرة بالسيطرة لا بالموقع" },
        { en: "Inventory written down in an interim period can reverse later the same year (IAS 34 discrete logic)", ar: "ما نقص في مرحلة قد يرد في مرحلة لاحقة من السنة ذاتها (منطق IAS 34)" },
      ],
    },
    { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Classification: supplies · raw materials · WIP · finished goods · goods in transit/consigned out · advances paid", ar: "التبويب: لوازم · مواد خام · تحت التشغيل · تام · بضاعة بالطريق/أمانة صادرة · دفعات مقدمة" },
        { en: "Accounting policy for the cost formula (FIFO/WAVG) + the technique used (standard cost, retail)", ar: "سياسة معادلة التكلفة + التقنية المستخدمة" },
        { en: "Total carrying amount + by class; write-downs recognised & reversed in the period (amounts)", ar: "إجمالي القيمة الدفترية وتبويبها؛ والانقاصات المعترف بها والمردودة" },
        { en: "Inventories pledged as security for liabilities (amounts) · inventories recognised as expense in the period", ar: "المخزون المرهون ضمانًا للالتزامات · المخزون المحمَّل مصروفًا خلال الفترة" },
        { en: "Inventory of a service provider: the cost of services not yet rendered at the reporting date", ar: "مخزون مقدم الخدمة: تكلفة الخدمات غير المؤداة بتاريخ التقرير" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The FIFO inflation trap: in a rising market, FIFO books CHEAP old costs to COGS and NEW prices to the balance sheet — higher profit, higher tax, and analysts will rebuild weighted-average for comparison. Know which direction each formula pushes BOTH numbers.",
        ar: "فخ التضخم في FIFO: في سوق صاعدة تحمَّل تكاليف قديمة رخيصة على تكلفة المبيعات وأسعار حديثة على الميزانية — ربح أعلى وضريبة أعلى. اعرف اتجاه كل معادلة في الرقمين معًا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Write-down reversal is capped at the ORIGINAL cost, and it must flow through P&L as a gain (never through equity); the reversal condition is a NEW estimate tied to CURRENT NRV evidence — not wishful thinking.",
        ar: "رد الانقاص يُحد بالتكلفة الأصلية ويمر بالأرباح دائمًا لا بحقوق الملكية؛ وشرطه دليل جديد على القيمة الصافية الحالية — لا أمنيات.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Cost is not a static number: if a prior-period count was wrong, it is IAS 8 (errors), not IAS 2, that governs the correction.",
        ar: "التكلفة ليست رقمًا ثابتًا: إذا كان جرد فترة سابقة خاطئًا فIAS 8 (الأخطاء) — لا IAS 2 — هو الذي يحكم التصحيح.",
      },
    },
  ],
}
