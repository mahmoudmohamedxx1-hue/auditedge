/** IAS 2 — Inventories */

import type { Standard } from "../types"

export const IAS_2: Standard = {
  code: "IAS 2",
  title: { en: "Inventories", ar: "المخزون" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 1995", ar: "سارٍ من ١ يناير ١٩٩٥" },
  blocks: [
    { kind: "h", text: { en: "Objective & core principle", ar: "الهدف والمبدأ الأساسي" } },
    {
      kind: "p",
      text: {
        en: "IAS 2 prescribes the accounting for INVENTORIES — assets held for sale in the ordinary course of business, in the process of production for that sale, or in the form of materials and supplies to be consumed in production or in rendering services. Two questions drive the whole standard: what goes into COST (the accumulation question), and what is the CARRYING AMOUNT at each reporting date — the LOWER OF COST AND NET REALISABLE VALUE (the measurement question). Every write-down and every reversal flows through profit or loss in the period it occurs.",
        ar: "يحدد IAS 2 معالجة المخزون — الأصول المحتفظ بها للبيع في النشاط الاعتيادي، أو التي في طور الإنتاج لأجل ذلك البيع، أو في صورة مواد ومستلزمات تُستهلك في الإنتاج أو تأدية الخدمات. والمعيار كله يقوم على سؤالين: ماذا يدخل في التكلفة (سؤال التجميع)؟ وما القيمة الدفترية في كل تاريخ تقرير — وهي الأدنى من التكلفة وصافي القيمة البيعية (سؤال القياس)؟ وكل انقاص وكل رد يمر بقائمة الأرباح والخسائر في فترة حدوثه.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Prudence in one line: the balance sheet must never carry inventory above what it can actually deliver in cash — hence the NRV test at EVERY reporting date, item by item.",
        ar: "الحيطة في سطر واحد: لا يجوز أن تحمل الميزانية المخزون بأكثر مما يستطيع فعليًا تحويله إلى نقد — ومن هنا اختبار صافي القيمة البيعية في كل تاريخ تقرير، بندًا بندًا.",
      },
    },
    { kind: "h", text: { en: "Scope & exclusions", ar: "النطاق والاستبعادات" } },
    {
      kind: "p",
      text: {
        en: "The standard applies to ALL inventories except the categories other standards own. A SERVICE provider's inventories are IN scope: the operating costs of services for which revenue has not yet been recognised — primarily staff costs and directly attributable overheads. Producers' inventories of assets used in production (machinery spare parts, packaging) follow the same test as goods for resale.",
        ar: "يطبق المعيار على كل المخزون عدا الفئات التي تحكمها معايير أخرى. ومخزون مقدم الخدمات داخل النطاق: تكاليف تشغيل خدمات لم يُعترف بإيرادها بعد — وأساسها أجور العاملين والتحميلات المباشرة. ومخزون المنتج من لوازم الإنتاج (قطع غيار الماكينات، مواد التعبئة) يجري عليه الاختبار ذاته كبضاعة البيع.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Work in progress arising from CONSTRUCTION CONTRACTS (including directly related service contracts) → IFRS 15", ar: "الأعمال تحت التنفيذ الناشئة عن عقود الإنشاء (ومنها الخدمات المرتبطة مباشرة) ← IFRS 15" },
        { en: "FINANCIAL INSTRUMENTS → IFRS 9", ar: "الأدوات المالية ← IFRS 9" },
        { en: "BIOLOGICAL ASSETS related to agricultural activity → IAS 41", ar: "الأصول الحيوية المتصلة بالنشاط الزراعي ← IAS 41" },
        { en: "Agricultural produce AT THE POINT OF HARVEST → measured under IAS 41; IAS 2 takes over only AFTER that point", ar: "المنتج الزراعي عند نقطة الحصاد ← يقاس وفق IAS 41؛ ولا يتولى IAS 2 إلا بعد تلك النقطة" },
        { en: "Non-current assets HELD FOR SALE → IFRS 5 (measured at fair value less costs to sell, no further write-downs under IAS 2)", ar: "الأصول غير المتداولة المحتفظ بها للبيع ← IFRS 5 (بالقيمة العادلة ناقص تكاليف البيع، بلا مزيد من الانقاص وفق IAS 2)" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Classic exam line: at harvest, the IAS 41 amount (fair value less costs to sell) BECOMES the IAS 2 'cost' for everything that happens afterwards — storage, processing, sale.",
        ar: "سطر امتحاني كلاسيكي: عند الحصاد يصبح مبلغ IAS 41 (القيمة العادلة ناقص تكاليف البيع) هو «التكلفة» بمعنى IAS 2 لكل ما يلي ذلك من تخزين وتشغيل وبيع.",
      },
    },
    { kind: "h", text: { en: "Key definitions", ar: "التعاريف الأساسية" } },
    {
      kind: "p",
      text: {
        en: "NET REALISABLE VALUE is the estimated selling price in the ordinary course of business, less the estimated costs of completion and the estimated costs necessary to make the sale. FAIR VALUE is a different animal: a market-participant exit price under IFRS 13, whereas NRV is ENTITY-SPECIFIC — what THIS entity expects to net. The two can differ, and only NRV runs the IAS 2 test.",
        ar: "صافي القيمة البيعية هو سعر البيع المقدر في النشاط الاعتيادي مطروحًا منه تكاليف الإنجاز المقدرة وتكاليف البيع اللازمة المقدرة. أما القيمة العادلة فمخلوق آخر: سعر خروج لمشاركي السوق وفق IFRS 13، بينما صافي القيمة البيعية خاص بالمنشأة — ما تتوقع هذه المنشأة تحصيله صافيًا. وقد يفترقان، ولا يجري اختبار IAS 2 إلا بصافي القيمة البيعية.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "NORMAL CAPACITY — the production achievable on average over several periods or seasons in normal circumstances, after allowance for planned maintenance; fixed overheads are absorbed on it", ar: "الطاقة الإنتاجية العادية — ما يمكن إنتاجه بمتوسط عدة فترات أو مواسم في ظروف طبيعية بعد الصيانة المخططة؛ وعليها تستوعب التحميلات الثابتة" },
        { en: "ABNORMAL AMOUNTS — abnormal waste, idle capacity, abnormal freight and handling: they NEVER join the cost", ar: "المبالغ غير الطبيعية — الهالك غير الطبيعي والطاقة المعطلة والنقل والمناولة غير الاعتيادية: لا تدخل التكلفة أبدًا" },
        { en: "COST OF INVENTORIES = costs of purchase + costs of conversion + other costs incurred to bring the inventories to their present location and condition", ar: "تكلفة المخزون = تكاليف الشراء + تكاليف التحويل + تكاليف أخرى تُكبَّد لإيصال المخزون إلى موقعه وحالته الراهنة" },
        { en: "BY-PRODUCT — incidental output of a joint process with minor value relative to the main product; its NRV is DEDUCTED from the main product's cost", ar: "المنتج الثانوي — ناتج عرضي لعملية مشتركة قيمته ضئيلة نسبة إلى المنتج الرئيسي؛ وتُخصم قيمته البيعية الصافية من تكلفة المنتج الرئيسي" },
      ],
    },
    { kind: "h", text: { en: "What enters cost — the recognition machinery", ar: "ما يدخل التكلفة — آلية الاعتراف" } },
    {
      kind: "p",
      text: {
        en: "The test for every cost item: was it incurred to bring the inventory to its PRESENT LOCATION AND CONDITION? Purchase costs are net of trade discounts, rebates and duty drawbacks. Conversion costs include direct labour AND a systematic allocation of both fixed and variable production overheads. Anything spent after the inventory is ready — selling, advertising, distribution to customers, administrative overheads — fails the test and is expensed as incurred.",
        ar: "اختبار كل بند تكلفة: هل كُبِّد لإيصال المخزون إلى موقعه وحالته الراهنين؟ وتكاليف الشراء تُقاس صافيةً من الخصومات التجارية والمرتجعات والاستردادات الجمركية. وتكاليف التحويل تشمل العمالة المباشرة وتوزيعًا منظمًا للتحميلات الصناعية الثابتة والمتغيرة معًا. وكل ما يُنفق بعد جاهزية المخزون — البيع والدعاية والتوزيع للعملاء والتحميلات الإدارية — يسقط من الاختبار ويُحمَّل مصروفًا عند تكبده.",
      },
    },
    {
      kind: "tree",
      title: { en: "Does it enter the cost of inventories?", ar: "هل يدخل في تكلفة المخزون؟" },
      root: { en: "A cost incurred on inventory", ar: "تكلفة متكبدة على المخزون" },
      branches: [
        {
          when: { en: "Purchase price, import duties, transport & handling DIRECTLY attributable to the purchase", ar: "ثمن الشراء والرسوم الجمركية والنقل والمناولة المرتبطة مباشرة بالشراء" },
          then: { en: "INCLUDE — cost of purchase (net of trade discounts and rebates)", ar: "يُدرج — تكلفة الشراء (صافي الخصومات التجارية والمرتجعات)", red: true },
        },
        {
          when: { en: "Direct labour + production overheads allocated on NORMAL capacity", ar: "عمالة مباشرة + تحميلات صناعية موزعة على الطاقة العادية" },
          then: { en: "INCLUDE — cost of conversion", ar: "يُدرج — تكلفة التحويل", red: true },
        },
        {
          when: { en: "Abnormal waste · storage unless needed in a production process with a break before a further production stage · admin overheads unrelated to production · selling costs · foreign-exchange differences", ar: "الهالك غير الطبيعي · التخزين ما لم يلزم لعملية إنتاج يسبقها انقطاع قبل مرحلة إنتاجية لاحقة · التحميلات الإدارية غير المتصلة بالإنتاج · تكاليف البيع · فروق العملة" },
          then: { en: "EXCLUDE — expense as incurred", ar: "يُستبعد — مصروف عند تكبده", red: true },
        },
        {
          when: { en: "Borrowing costs on an inventory that is a QUALIFYING ASSET (long maturation or construction — wine, spirits, ships)", ar: "تكاليف اقتراض على مخزون هو أصل مؤهل (تعتيق أو إنشاء طويل — نبيذ، مشروبات روحية، سفن)" },
          then: { en: "Only through IAS 23's capitalisation machinery — never directly under IAS 2", ar: "عبر آلية رسملة IAS 23 فقط — لا مباشرةً وفق IAS 2 أبدًا", red: true },
        },
      ],
    },
    {
      kind: "list",
      items: [
        { en: "PURCHASE costs: price + import duties + transport/handling directly attributable − trade discounts, rebates, duty drawbacks", ar: "تكاليف الشراء: الثمن + الرسوم الجمركية + النقل والمناولة المرتبطة مباشرة − الخصومات التجارية والمرتجعات والاستردادات الجمركية" },
        { en: "CONVERSION costs: direct labour + a SYSTEMATIC allocation of FIXED production overheads based on NORMAL CAPACITY — variable overheads allocated per actual use", ar: "تكاليف التحويل: العمالة المباشرة + توزيع منظم للتحميلات الصناعية الثابتة على أساس الطاقة العادية — والمتحملات المتغيرة بحسب الاستخدام الفعلي" },
        { en: "OTHER costs — only if incurred to bring the inventory to its present location and condition (design for a specific customer, producer licensing)", ar: "تكاليف أخرى — فقط إذا كُبِّدت لإيصال المخزون إلى موقعه وحالته (تصميم لعميل بعينه، رسوم مُنتِج)" },
        { en: "Long maturation or pre-production storage CAN be included when it is normal for the process (wine, whisky, cheese)", ar: "التعتيق الطويل أو التخزين قبل الإنتاج يجوز إدراجه إذا كان معتادًا في الصناعة (نبيذ، ويسكي، أجبان)" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "NORMAL CAPACITY is the production achievable over several periods or seasons in normal circumstances, after allowing for planned maintenance. When actual production is LOW, the fixed overhead absorbed per unit RISES — but only up to the normal-capacity level; idle-capacity costs beyond that are expensed immediately. This is the allocation discipline that stops management smoothing profit through overhead rates.",
        ar: "الطاقة العادية هي المتاح إنتاجه عبر عدة فترات أو مواسم في ظروف طبيعية بعد الصيانة المخططة. وعند انخفاض الإنتاج الفعلي يرتفع نصيب الوحدة من التحميلات الثابتة المدمجة — لكن حتى مستوى الطاقة العادية فحسب؛ وما بعده من تكاليف طاقة معطلة يُحمَّل مصروفًا فورًا. هذا هو انضباط التوزيع الذي يمنع الإدارة من تمهيد الربح عبر معدلات التحميل.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Interest and FX belong to financing, not to making goods: the only borrowing costs ever inside inventory cost are IAS 23's, on a qualifying asset.",
        ar: "الفوائد وفروق العملة من طبيعة التمويل لا الصناعة: تكاليف الاقتراض الوحيدة داخل تكلفة المخزون هي ما تجيزه رسملة IAS 23 لأصل مؤهل.",
      },
    },
    { kind: "h", text: { en: "Techniques that approximate cost", ar: "تقنيات تقارب التكلفة" } },
    {
      kind: "p",
      text: {
        en: "When results APPROXIMATE cost, two techniques are allowed: STANDARD COSTing (materials, labour and overheads at normal operating conditions — variances reviewed each period and written back if material) and the RETAIL METHOD (sales value less the normal gross margin applied to each group — mark-ups watched and the average margin applied). Trading houses use the retail method; manufacturers use standard costing.",
        ar: "عندما تكون النتائج مقارِبة للتكلفة تجوز تقنيتان: التكلفة المعيارية (مواد وعمالة وتحميلات بظروف تشغيل عادية — مع مراجعة الانحرافات كل فترة وردّها إن كانت جوهرية) وطريقة التجزئة (قيمة البيع مطروحًا منها هامش مجمل الربح المعتاد لكل مجموعة — مع مراقبة الإضافات على السعر وتطبيق متوسط الهامش). بيوت التجزئة تستعمل طريقة التجزئة، والمصانع التكلفة المعيارية.",
      },
    },
    { kind: "h", text: { en: "Cost formulas — FIFO & weighted average only", ar: "معادلات التكلفة — الوارد أولًا والمتوسط المرجح فقط" } },
    {
      kind: "p",
      text: {
        en: "For INTERCHANGEABLE items the cost of what remains in inventory is determined by FIRST-IN FIRST-OUT or WEIGHTED AVERAGE cost. The SAME formula applies to all inventories of a similar nature and use — a different formula per class is fine (machinery components FIFO, beverages weighted average), but cherry-picking formulas item by item is not. SPECIFIC IDENTIFICATION is reserved for items that are NOT ordinarily interchangeable: bespoke projects, jewellery, cars by chassis number.",
        ar: "للبنود القابلة للتبديل تُحدد تكلفة الباقي في المخزون بطريقة الوارد أولًا صادر أولًا أو متوسط التكلفة المرجح. وتُطبق المعادلة ذاتها على كل المخزون المتماثل طبيعة واستخدامًا — ويجوز اختلاف المعادلة بين الفئات (مكونات الماكينات بالوارد أولًا والمشروبات بالمتوسط) أما انتقاء المعادلات بندًا بندًا فلا. والتحديد الهوية المحدد محجوز للبنود غير القابلة للتبديل عادةً: مشروعات خاصة، مجوهرات، سيارات برقم الهيكل.",
      },
    },
    {
      kind: "tree",
      title: { en: "Which cost formula?", ar: "أي معادلة تكلفة؟" },
      root: { en: "Which cost formula for the inventory items?", ar: "أي معادلة تكلفة لبنود المخزون؟" },
      branches: [
        {
          when: { en: "FIRST-IN FIRST-OUT — the OLDEST goods sold first, the newest stay in closing inventory", ar: "الوارد أولًا صادر أولًا — أقدم البضائع تباع أولًا وأحدثها تبقى في الرصيد الختامي" },
          then: { en: "Cost of sales mirrors OLD prices; closing inventory carries RECENT cost — in inflation this inflates PROFIT", ar: "تكلفة المبيعات بأسعار قديمة والرصيد الختامي بالتكلفة الحديثة — فالتضخم يرفع الربح", red: true },
        },
        {
          when: { en: "WEIGHTED AVERAGE cost (periodic or moving)", ar: "متوسط التكلفة المرجح (الدوري أو المتحرك)" },
          then: { en: "One blended cost per unit — smooths the price path through both sides of the accounts", ar: "تكلفة ممتزجة للوحدة تمهد مسار الأسعار في جانبي الحسابات معًا", red: true },
        },
        {
          when: { en: "LIFO (last-in, first-out)", ar: "الوارد أخيرًا صادر أولًا" },
          then: { en: "BANNED under IFRS (allowed under US GAAP) — a favourite 'spot the violation' exam line", ar: "محظور وفق IFRS (مسموح وفق US GAAP) — سطر امتحاني محبب لكشف المخالفات", red: true },
        },
        {
          when: { en: "Specific identification for NON-interchangeable items (custom projects, jewellery, luxury cars)", ar: "التحديد الهوية المحددة للبنود غير القابلة للتبديل (مشروعات خاصة، مجوهرات، سيارات فاخرة)" },
          then: { en: "Cost the ACTUAL units — the only option when the goods are distinguishable", ar: "تكلفة الوحدات الفعلية — الخيار الوحيد عند تمايز البضائع", red: true },
        },
      ],
    },
    {
      kind: "example",
      title: { en: "FIFO vs weighted average — the worked comparison", ar: "الوارد أولًا مقابل المتوسط المرجح — مقارنة عملية" },
      lines: [
        { en: "Opening 100 units @ 10 = 1,000 · purchases 200 units @ 13 = 2,600 → 300 units, total cost 3,600, weighted average = 3,600 ÷ 300 = 12", ar: "رصيد افتتاحي ١٠٠ وحدة بـ١٠ = ١٬٠٠٠ · مشتريات ٢٠٠ وحدة بـ١٣ = ٢٬٦٠٠ ← ٣٠٠ وحدة بتكلفة كلية ٣٬٦٠٠ والمتوسط المرجح = ٣٬٦٠٠ ÷ ٣٠٠ = ١٢" },
        { en: "Sales 250 units @ 20 → revenue 5,000", ar: "المبيعات ٢٥٠ وحدة بسعر ٢٠ ← الإيراد ٥٬٠٠٠" },
        { en: "FIFO: cost of sales = (100 × 10) + (150 × 13) = 1,000 + 1,950 = 2,950 · closing inventory = 50 × 13 = 650", ar: "الوارد أولًا: تكلفة المبيعات = (١٠٠ × ١٠) + (١٥٠ × ١٣) = ١٬٠٠٠ + ١٬٩٥٠ = ٢٬٩٥٠ · والرصيد الختامي = ٥٠ × ١٣ = ٦٥٠" },
        { en: "Weighted average: cost of sales = 250 × 12 = 3,000 · closing inventory = 50 × 12 = 600", ar: "المتوسط المرجح: تكلفة المبيعات = ٢٥٠ × ١٢ = ٣٬٠٠٠ · والرصيد الختامي = ٦٠٠" },
        { en: "Gross profit: FIFO = 5,000 − 2,950 = 2,050 · WAVG = 5,000 − 3,000 = 2,000 → FIFO books the HIGHER profit (by 50) in a rising market", ar: "الربح الإجمالي: الوارد أولًا = ٥٬٠٠٠ − ٢٬٩٥٠ = ٢٬٠٥٠ · والمتوسط = ٥٬٠٠٠ − ٣٬٠٠٠ = ٢٬٠٠٠ ← فالوارد أولًا يظهر ربحًا أعلى (بمقدار ٥٠) في سوق صاعدة" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The FIFO inflation trap: in a rising market FIFO books CHEAP old costs to cost of sales and NEW prices to the balance sheet — higher profit, higher tax. Know which direction each formula pushes BOTH numbers (profit and closing inventory).",
        ar: "فخ التضخم في الوارد أولًا: في سوق صاعدة تُحمَّل تكاليف قديمة رخيصة على تكلفة المبيعات وأسعار حديثة على الميزانية — ربح أعلى وضريبة أعلى. اعرف اتجاه كل معادلة في الرقمين معًا (الربح والرصيد الختامي).",
      },
    },
    { kind: "h", text: { en: "Measurement — the lower of cost and NRV", ar: "القياس — الأدنى من التكلفة وصافي القيمة البيعية" } },
    {
      kind: "formula",
      title: { en: "NRV & the write-down", ar: "صافي القيمة البيعية والانقاص" },
      lines: [
        { en: "NRV = estimated selling price in the ordinary course − estimated costs of completion − estimated costs necessary to make the sale", ar: "صافي القيمة البيعية = سعر البيع المقدر في النشاط الاعتيادي − تكاليف الإنجاز المقدرة − تكاليف البيع اللازمة المقدرة" },
        { en: "Carrying amount = LOWER of cost and NRV, item by item (groups of similar items permitted — never the whole class)", ar: "القيمة الدفترية = الأدنى من التكلفة وصافي القيمة البيعية، بندًا بندًا (وتجوز مجموعات البنود المتماثلة — لا الفئة كاملة أبدًا)" },
        { en: "Write-down = cost − NRV when NRV < cost → expense in the period of the fall", ar: "الانقاص = التكلفة − الصافي عند نزول الصافي عن التكلفة ← مصروف في فترة الهبوط" },
        { en: "REVERSAL: new evidence lifts NRV → reverse up to the ORIGINAL cost — a gain in current P&L", ar: "الرد: دليل جديد يرفع الصافي ← يُرد الانقاص بحد أقصى التكلفة الأصلية — مكسب في أرباح الفترة الجارية" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The item-by-item discipline bites: writing down a whole class lets healthy items offset sick ones, which the standard forbids. Inventories are NOT revalued — a rise in NRV above cost NEVER writes inventory up; the reversal only restores a previous write-down, capped at cost. Estimates are also PURPOSE-DRIVEN: an item held to satisfy a firm sales contract is tested at the CONTRACT PRICE, and the NRV of a quantity in excess of the contract rides the general market price.",
        ar: "ينبع انضباط البند بالبند: فانقاص فئة كاملة يتيح للبنود السليمة تعويض المريضة، وهو ما يحظره المعيار. والمخزون لا يُعاد تقييمه — فارتفاع الصافي فوق التكلفة لا يرفع المخزون أبدًا؛ والرد يستعيد انقاصًا سابقًا فقط بحد أقصى التكلفة. والتقديرات مقصودة التوجيه: البند المحتفظ به لتنفيذ عقد بيع محدد يُختبر بسعر العقد، وما زاد على الكمية المتعاقد عليها يُختبر بسعر السوق العام.",
      },
    },
    {
      kind: "example",
      title: { en: "Item-by-item NRV table", ar: "جدول صافي القيمة البيعية بندًا بندًا" },
      lines: [
        { en: "Item A: cost 100, NRV 90 → carry 90 (write down 10) · Item B: cost 80, NRV 95 → carry 80 (no gain for free)", ar: "الصنف أ: تكلفة ١٠٠ وصافي ٩٠ ← يُحمل بـ٩٠ (انقاص ١٠) · الصنف ب: تكلفة ٨٠ وصافي ٩٥ ← يُحمل بـ٨٠ (لا ربح بلا بيع)" },
        { en: "Class total cost 180, class total NRV 185 → class-level would carry 180 — but item-by-item carries 170! IAS 2 mandates the item-by-item (or group) discipline", ar: "إجمالي الفئة: تكلفة ١٨٠ وصافي ١٨٥ ← على مستوى الفئة تُحمل بـ١٨٠، لكن بندًا بندًا تُحمل بـ١٧٠! وIAS 2 يوجب البند بالبند (أو مجموعة البنود المتماثلة)" },
        { en: "Next period NRV of A recovers to 98 → carry at 98 (reverse 8 of the 10, capped at original cost 100)", ar: "الفترة التالية: ارتفع صافي أ إلى ٩٨ ← يُحمل بـ٩٨ (رد ٨ من ١٠ بحد أقصى التكلفة الأصلية ١٠٠)" },
        { en: "Service inventory: the unbilled staff costs + directly attributable overheads of services not yet rendered (IAS 2.19)", ar: "مخزون الخدمة: أجور العاملين غير المفوتَرة + التحميلات المباشرة لخدمات لم تُؤدَّ بعد (IAS 2.19)" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "MATERIALS held for production get a special test: they are NOT written down while the finished goods they feed will sell at or above cost. Only when the finished product's own NRV falls below its cost are the materials written down — to their REPLACEMENT COST where that is the appropriate NRV proxy. Raw copper does not follow the copper price down if the finished cables still sell at a profit.",
        ar: "المواد المحتفظ بها للإنتاج لها اختبار خاص: لا تُنقص ما دامت المنتجات النهائية التي تغذيها ستُباع بتكلفتها أو أعلى. ولا تُنقص إلا إذا هبط صافي المنتج النهائي ذاته عن تكلفته — وحينئذٍ تنقص إلى تكلفة الاستبدال حيث تكون بديلًا مناسبًا عن الصافي. فالنحاس الخام لا يتبع هبوط سعر النحاس ما دانت الكابلات النهائية تُباع بربح.",
      },
    },
    {
      kind: "tree",
      title: { en: "Each subsequent reporting date", ar: "في كل تاريخ تقرير لاحق" },
      root: { en: "Subsequent measurement — item by item", ar: "القياس اللاحق — بندًا بندًا" },
      branches: [
        {
          when: { en: "Cost ≤ NRV", ar: "التكلفة ≤ الصافي" },
          then: { en: "Carry at COST — nothing to book", ar: "يُحمل بالتكلفة — لا قيد يُجرى", red: true },
        },
        {
          when: { en: "NRV < cost (merchandise & finished goods)", ar: "الصافي < التكلفة (بضاعة ومنتجات تامة)" },
          then: { en: "WRITE DOWN to NRV — loss in current P&L", ar: "انقاص إلى الصافي — خسارة في أرباح الفترة الجارية", red: true },
        },
        {
          when: { en: "Materials for production: finished goods still sell at or above cost", ar: "مواد للإنتاج: المنتجات التامة ما زالت تباع بالتكلفة أو أعلى" },
          then: { en: "Keep materials at COST — no write-down", ar: "تبقى المواد بتكلفتها — لا انقاص", red: true },
        },
        {
          when: { en: "Materials for production: finished-goods NRV < their cost", ar: "مواد للإنتاج: صافي المنتجات التامة أقل من تكلفتها" },
          then: { en: "Write materials down to their NRV (replacement cost where appropriate)", ar: "تنقص المواد إلى صافي قيمتها البيعية (تكلفة الاستبدال حيث تلائم)", red: true },
        },
        {
          when: { en: "NRV recovers after a write-down", ar: "ارتفع الصافي بعد انقاص سابق" },
          then: { en: "REVERSE the write-down in P&L, capped at original cost", ar: "رد الانقاص في الأرباح بحد أقصى التكلفة الأصلية", red: true },
        },
      ],
    },
    {
      kind: "note",
      text: {
        en: "A write-down is not a revaluation: inventory never rises above cost — the reversal only UNDOES a past write-down, and never beyond it.",
        ar: "الانقاص ليس إعادة تقييم: فالمخزون لا يعلو عن التكلفة أبدًا — والرد لا يفك انقاصًا سابقًا فحسب، ولا يتجاوزه.",
      },
    },
    { kind: "h", text: { en: "The purchase-to-P&L journal path", ar: "مسار القيود من الشراء إلى الأرباح" } },
    {
      kind: "journal",
      title: { en: "Purchase → production → sale", ar: "الشراء ← الإنتاج ← البيع" },
      rows: [
        { dr: { en: "Inventory — goods for resale (net of trade discounts)", ar: "مخزون — بضاعة للبيع (صافي الخصومات التجارية)" }, cr: { en: "Payables / cash", ar: "دائنون / نقد" } },
        { dr: { en: "Work in progress (materials issued)", ar: "مخزون تحت التشغيل (مواد مصروفة)" }, cr: { en: "Raw materials control", ar: "حساب المواد الخام" } },
        { dr: { en: "Work in progress (direct labour + overheads absorbed at normal capacity)", ar: "مخزون تحت التشغيل (عمالة مباشرة + تحميلات مدمجة بالطاقة العادية)" }, cr: { en: "Payroll · Production overhead control", ar: "الأجور · حساب تحميلات الإنتاج" } },
        { dr: { en: "Cost of sales (on each sale)", ar: "تكلفة المبيعات (عند كل عملية بيع)" }, cr: { en: "Inventory (FIFO / weighted average)", ar: "المخزون (بالوارد أولًا أو المتوسط المرجح)" }, red: true },
      ],
    },
    {
      kind: "journal",
      title: { en: "Write-down → reversal (NRV recovery)", ar: "الانقاص ← الرد (تعافي الصافي)" },
      rows: [
        { dr: { en: "Write-down expense (loss on inventories)", ar: "مصروف انقاص المخزون (خسارة هبوط القيمة)" }, cr: { en: "Inventory write-down allowance (or inventory directly)", ar: "مخصص انقاص المخزون (أو المخزون مباشرةً)" }, red: true },
        { dr: { en: "Inventory write-down allowance", ar: "مخصص انقاص المخزون" }, cr: { en: "Reversal of write-down — P&L credit, capped at cost", ar: "رد الانقاص — دائن بالأرباح بحد أقصى التكلفة" }, red: true },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Reversal rules: capped at the ORIGINAL cost, credited to P&L as a gain (never through equity), and justified only by NEW NRV evidence tied to current conditions — not wishful thinking about next season's prices.",
        ar: "قواعد الرد: بحد أقصى التكلفة الأصلية، دائنًا بالأرباح (لا عبر حقوق الملكية أبدًا)، ولا يسوغه إلا دليل جديد على الصافي مربوط بالظروف الجارية — لا أمنيات بأسعار الموسم القادم.",
      },
    },
    { kind: "h", text: { en: "By-products & other subtleties", ar: "المنتجات الثانوية وغيرها من الدقائق" } },
    {
      kind: "p",
      text: {
        en: "JOINT processes make more than one product. The BY-PRODUCT (minor sales value) never carries its own cost: its NRV is DEDUCTED from the joint cost, and only the balance sits in the MAIN product's inventory. The exam subtlety: this deduction happens whether or not the by-product has yet been sold — its NRV is recoverable in principle.",
        ar: "العمليات المشتركة تنتج أكثر من منتج. والمنتج الثانوي (قيمته البيعية الضئيلة) لا يحمل تكلفة خاصة به: بل تُخصم قيمته البيعية الصافية من التكلفة المشتركة، ولا يستقر في مخزون المنتج الرئيسي إلا الباقي. والدقيقة الامتحانية: يجري هذا الخصم بيع المنتج الثانوي أم لم يبع — فصافيه قابل للاسترداد من حيث المبدأ.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "A manufacturer's OWN selling expenses, advertising and distribution NEVER enter cost — they are period expenses", ar: "مصاريف البيع والدعاية والتوزيع لدى المنتج لا تدخل التكلفة أبدًا — فمصاريف فترة" },
        { en: "CONSIGNMENT goods: the CONSIGNOR keeps them in inventory — control, not location, decides (IFRS 15 vocabulary)", ar: "بضاعة الأمانة: يبقيها المُرسِل في مخزونه — فالعبرة بالسيطرة لا بالموقع (بمصطلحات IFRS 15)" },
        { en: "Purchase commitments to buy finished goods for a price ABOVE their NRV → an IAS 37 onerous-contract provision, not an inventory write-down", ar: "التعهد بشراء منتجات تامة بسعر أعلى من صافيها ← مخصص عقد مُفضِر وفق IAS 37 لا انقاص مخزون" },
        { en: "An interim-period write-down can reverse LATER THE SAME YEAR when NRV recovers (IAS 34 logic)", ar: "ما نُقص في مرحلة مرحلية قد يُرد في مرحلة لاحقة من السنة ذاتها عند تعافي الصافي (منطق IAS 34)" },
      ],
    },
    { kind: "h", text: { en: "Interactions with the rest of the corpus", ar: "التقاطعات مع بقية المعايير" } },
    {
      kind: "list",
      items: [
        { en: "IAS 23 — borrowing costs join inventory cost ONLY for a qualifying asset (long maturation: wine, spirits; long construction: ships, bespoke machinery)", ar: "IAS 23 — لا تدخل تكاليف الاقتراض تكلفة المخزون إلا لأصل مؤهل (تعتيق طويل: نبيذ ومشروبات؛ إنشاء طويل: سفن وآلات خاصة)" },
        { en: "IAS 36 — NEVER applies to inventories: the NRV floor IS the impairment machinery for inventory; a CGU test never absorbs stock into it", ar: "IAS 36 — لا يطبق على المخزون أبدًا: فحد صافي القيمة البيعية هو آلية انخفاض قيمة المخزون ذاتها؛ ولا يبتلع اختبار الوحدة المخزون فيها" },
        { en: "IFRS 5 — once non-current inventory is held for sale, IAS 2 measurement stops (fair value less costs to sell takes over)", ar: "IFRS 5 — متى صنّف المخزون غير المتداول محتفظًا به للبيع توقف قياس IAS 2 (وتتولى القيمة العادلة ناقص تكاليف البيع)" },
        { en: "IAS 8 — a prior-period count error is an ERROR correction (restate), never a change in estimate", ar: "IAS 8 — خطأ الجرد في فترة سابقة تصحيح خطأ (إعادة عرض) لا تغير تقدير" },
        { en: "IAS 34 — interim write-downs and reversals are judged discretely per interim period", ar: "IAS 34 — يُقدَّر الانقاص والرد المرحليان كل فترة مرحلية على حدة" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Cost is not a static number: if a prior-period count was wrong, IAS 8 (errors) — not IAS 2 — governs the correction; IAS 2 only governs the going-forward test.",
        ar: "التكلفة ليست رقمًا ثابتًا: إذا كان جرد فترة سابقة خاطئًا فIAS 8 (الأخطاء) — لا IAS 2 — هو الذي يحكم التصحيح؛ أما IAS 2 فيحكم الاختبار من فترة التصحيح فصاعدًا.",
      },
    },
    { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
    {
      kind: "p",
      text: {
        en: "Inventories are presented as CURRENT assets, classified in a way appropriate to the entity. Two disclosures examiners ask for by name: the ACCOUNTING POLICY for the cost formula (FIFO / weighted average) and the AMOUNT OF INVENTORIES RECOGNISED AS EXPENSE in the period — the cost-of-sales bridge.",
        ar: "يُعرض المخزون أصلًا متداولًا، مبوبًا بما يناسب المنشأة. وإفصاحان يسأل عنهما الممتحنون باسمهما: السياسة المحاسبية لمعادلة التكلفة (الوارد أولًا / المتوسط المرجح)، ومقدار المخزون المعترف به مصروفًا خلال الفترة — جسر تكلفة المبيعات.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Classification: supplies · raw materials · work in progress · finished goods · goods in transit / consigned out · advances paid to suppliers", ar: "التبويب: مستلزمات · مواد خام · تحت التشغيل · منتجات تامة · بضاعة بالطريق / أمانة صادرة · دفعات مقدمة للموردين" },
        { en: "The cost formula used + the technique (standard cost, retail) and the change in formula if any", ar: "معادلة التكلفة المستخدمة + التقنية (تكلفة معيارية، تجزئة) وأي تغيير في المعادلة" },
        { en: "Total carrying amount + by class; write-downs recognised and reversed in the period (amounts)", ar: "إجمالي القيمة الدفترية وتبويبها؛ والانقاصات المعترف بها والمردودة في الفترة (بالمقادير)" },
        { en: "Inventories PLEDGED as security for liabilities (amounts) · circumstances of write-down reversals", ar: "المخزون المرهون ضمانًا للالتزامات (بالمقادير) · ظروف ردود الانقاص" },
      ],
    },
    { kind: "h", text: { en: "The period-end drill", ar: "تسلسل نهاية الفترة" } },
    {
      kind: "steps",
      items: [
        { en: "CUT-OFF: goods in transit (FOB shipping point = buyer's), consignment out, goods on approval — count what you CONTROL", ar: "القطع: البضاعة بالطريق (تسليم الشاحن = مشتريها)، والأمانة الصادرة، وسلع الموافقة — اجرد ما تسيطر عليه" },
        { en: "COST each layer by the formula (FIFO / weighted average) or the technique (standard cost / retail)", ar: "كلِّف كل شريحة بمعادلة التكلفة (الوارد أولًا / المتوسط) أو بالتقنية (معيارية / تجزئة)" },
        { en: "TEST NRV item by item (or by groups of similar items) — materials via the finished-goods route", ar: "اختبر الصافي بندًا بندًا (أو مجموعات متماثلة) — والمواد عبر مسار المنتجات التامة" },
        { en: "BOOK write-downs (or reversals, capped at cost) through P&L", ar: "سجِّل الانقاصات (أو الردود بحد التكلفة) عبر الأرباح والخسائر" },
        { en: "CHARGE cost of sales for the period's sales; reconcile the inventory ledger to the physical count", ar: "حمِّل تكلفة مبيعات الفترة؛ وطابق دفتر المخزون مع الجرد الفعلي" },
        { en: "DISCLOSE by class: carrying amounts, write-down movements, pledges, expense amounts", ar: "أفصح بكل فئة: القيم الدفترية وحركات الانقاص والرهون ومقادير المصروف" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Cut-off is where the marks hide: FOB-shipping-point goods in transit belong to the BUYER; goods on consignment still belong to the CONSIGNOR; the seller keeps title-retention stock until control passes (IFRS 15). Draw the two columns — theirs / ours — before touching numbers.",
        ar: "القطع مخبأ الدرجات: بضاعة الطريق بشرط تسليم الشاحن ملك المشتري؛ وبضاعة الأمانة ملك المُرسِل؛ ويحتفظ البائع ببضاعة الاحتفاظ بالملكية حتى تنتقل السيطرة (IFRS 15). ارسم العمودين — لهم / لنا — قبل لمس الأرقام.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The loss-making purchase commitment trap: a firm order to buy finished goods above NRV is an IAS 37 ONEROUS provision (lower of fulfilling-cost and penalty) — it never writes the inventory down, because the loss lives in the CONTRACT, not the goods.",
        ar: "فخ تعهد الشراء الخاسر: الأمر المؤكد بشراء منتجات تامة بأعلى من صافيها مخصَّص عقد مُفضِر وفق IAS 37 (بالأدنى من تكلفة الوفاء والغرامة) — ولا ينقص المخزون أبدًا، فالخسارة تسكن العقد لا البضاعة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "IAS 34 interim logic: a write-down booked in Q1 reverses in Q3 when NRV recovers by year-end — the discrete method tests each interim on its own evidence, so recoveries DO reverse in the same fiscal year.",
        ar: "منطق IAS 34 المرحلي: ما نُقص في الربع الأول يُرد في الثالث إذا تعافى الصافي بنهاية السنة — فطريقة الفترات المنفصلة تختبر كل مرحلة بدليلها، والتعافي يُرد في السنة المالية ذاتها.",
      },
    },
  ],
}
