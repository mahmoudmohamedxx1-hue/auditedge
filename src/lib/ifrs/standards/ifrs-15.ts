/**
 * IFRS 15 — Revenue from Contracts with Customers. THE FLAGSHIP summary:
 * it mirrors, section for section, the user's handwritten IFRS 15 notes PDF
 * and sets the depth bar every other standard in this folder is written to.
 */

import type { Standard } from "../types"

export const IFRS_15: Standard = {
    code: "IFRS 15",
    title: { en: "Revenue from Contracts with Customers", ar: "الإيراد من العقود مع العملاء" },
    topic: "revenue",
    effective: { en: "Effective 1 Jan 2018 · issued May 2014", ar: "سارٍ من ١ يناير ٢٠١٨ · صدر مايو ٢٠١٤" },
    replaces: {
      en: "Replaces IAS 11, IAS 18, IFRIC 13 / 15 / 18 and SIC-31",
      ar: "يحل محل IAS 11 وIAS 18 والتفسيرات IFRIC 13/15/18 وSIC-31",
    },
    flagship: true,
    blocks: [
      {
        kind: "p",
        text: {
          en: "Core principle — recognise revenue when (or as) the entity transfers the promised good or service to the customer, in an amount that reflects the consideration to which the entity expects to be entitled in exchange. \"Transfer\" means the customer obtains CONTROL: the ability to direct the use of, and obtain substantially all the remaining benefits from, the good or service.",
          ar: "المبدأ الأساسي — يُعترف بالإيراد عندما (أو بقدر ما) تنقل المنشأة السلعة أو الخدمة المتعاقد عليها إلى العميل، بمبلغ يعكس المقابل الذي تتوقع المنشأة استحقاقه نظيرها. و«التحويل» يعني حصول العميل على السيطرة: القدرة على توجيه استخدام السلعة أو الخدمة والحصول على منافعها المتبقية جوهرها.",
        },
      },
      {
        kind: "note",
        text: {
          en: "Revenue follows the transfer of CONTROL — not delivery, not legal title, not invoicing. Control can pass over time or at a point in time.",
          ar: "الإيراد يتبع انتقال السيطرة — لا التسليم ولا الملكية القانونية ولا الفوترة. والسيطرة قد تنتقل بمرور الوقت أو في لحظة معينة.",
        },
      },
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "One single model that applies to every contract with a customer and every industry. It prescribes when (timing) and how much (amount) revenue is recognised, and the useful information an entity discloses about the nature, amount, timing and uncertainty of that revenue and its related cash flows.",
          ar: "نموذج واحد يُطبق على كل عقد مع عميل وكل صناعة: يحدد متى (التوقيت) وبأي مبلغ (القياس) يُعترف بالإيراد، وما يُفصح عنه من معلومات مفيدة عن طبيعته ومبلغه وتوقيته ودرجة عدم التأكد فيه وفي تدفقاته النقدية.",
        },
      },
      { kind: "h", text: { en: "The five-step model", ar: "نموذج الخطوات الخمس" } },
      {
        kind: "steps",
        items: [
          { en: "Identify the CONTRACT with the customer", ar: "تحديد العقد مع العميل" },
          { en: "Identify the PERFORMANCE OBLIGATIONS in the contract", ar: "تحديد التزامات الأداء في العقد" },
          { en: "Determine the TRANSACTION PRICE", ar: "تحديد سعر المعاملة" },
          { en: "ALLOCATE the transaction price to the performance obligations", ar: "توزيع سعر المعاملة على التزامات الأداء" },
          { en: "RECOGNISE revenue when (or as) each obligation is satisfied by transferring control", ar: "الاعتراف بالإيراد عند (أو بقدر ما) الوفاء بكل التزام بانتقال السيطرة" },
        ],
      },
      { kind: "h", text: { en: "Step 1 — Identifying the contract", ar: "الخطوة ١ — تحديد العقد" } },
      {
        kind: "p",
        text: {
          en: "An enforceable contract exists only when ALL five criteria are met. Missing any one → no revenue; cash received is a contract liability (deposit) until the criteria are met or it becomes non-refundable.",
          ar: "لا يوجد عقد ملزم إلا عند تحقق الشروط الخمسة جميعًا. وعدم تحقق أيٍّ منها → لا إيراد؛ ويُعامل النقد المقبوض كالتزام تعاقدي (عربون) حتى تتحقق الشروط أو يصبح المبلغ غير قابل للاسترداد.",
        },
      },
      {
        kind: "list",
        items: [
          { en: "The contract is approved AND both parties are committed to perform", ar: "العقد معتمد والطرفان ملتزمان بالأداء" },
          { en: "Each party's RIGHTS over the goods/services are identifiable", ar: "حقوق كل طرف على السلع/الخدمات قابلة للتحديد" },
          { en: "PAYMENT TERMS are identifiable", ar: "شروط السداد قابلة للتحديد" },
          { en: "The contract has COMMERCIAL SUBSTANCE", ar: "العقد ذو جوهر تجاري" },
          { en: "It is PROBABLE that the entity collects the consideration", ar: "التحصيل مرجح (غالب الظن)" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Contract fails later? Keep reassessing each period. If the criteria are never met, recognise the deposit as revenue when the contract terminates OR the consideration becomes non-refundable.",
          ar: "إذا لم تتحقق الشروط لاحقًا أعد التقييم كل فترة؛ وإن لم تتحقق أبدًا فاعترف بالعربون إيرادًا عند انتهاء العقد أو عند صيرورة المبلغ غير قابل للاسترداد.",
        },
      },
      { kind: "h", text: { en: "Step 2 — Performance obligations", ar: "الخطوة ٢ — التزامات الأداء" } },
      {
        kind: "p",
        text: {
          en: "A promised good or service is DISTINCT — a separate performance obligation — only if BOTH tests pass:",
          ar: "تكون السلعة أو الخدمة الموعودة «متميزة» — أي التزام أداء مستقل — فقط باجتياز اختبارين معًا:",
        },
      },
      {
        kind: "list",
        items: [
          { en: "Capable of being distinct — the customer can benefit from it on its own or together with readily available resources", ar: "قابل للتمييز بذاته — يمكن للعميل الانتفاع به وحده أو مع موارد متاحة بسهولة" },
          { en: "Separately identifiable within the contract — the promise is not significantly integrated with, does not modify, and is not highly interdependent with the other promises", ar: "قابل للتحديد كلًا على حدة داخل العقد — الوعد غير مدمج جوهريًا ولا معدِّل ولا شديد الاعتماد المتبادل مع بقية الوعود" },
        ],
      },
      {
        kind: "p",
        text: {
          en: "Series rule: a bundle of identical distinct goods/services transferred in the same pattern over time (e.g. daily cleaning) = ONE performance obligation satisfied over time.",
          ar: "قاعدة السلسلة: حزمة من سلع/خدمات متميزة متماثلة تُنقل بنمط واحد بمرور الوقت (كالتنظيف اليومي) = التزام أداء واحد يُوفى به بمرور الوقت.",
        },
      },
      {
        kind: "note",
        text: {
          en: "Distinct ≠ separate! Integration, customisation, and high interdependence all point to ONE combined obligation (e.g. construction + design).",
          ar: "متميز ≠ منفصل! الدمج والتخصيص والاعتماد المتبادل العالي تشير جميعها إلى التزام واحد مُجمَّع (كالإنشاء مع التصميم).",
        },
      },
      { kind: "h", text: { en: "Step 3 — Determining the transaction price", ar: "الخطوة ٣ — تحديد سعر المعاملة" } },
      {
        kind: "p",
        text: {
          en: "The consideration the entity EXPECTS to be entitled to — excluding amounts collected on behalf of third parties (sales VAT). Watch for five features:",
          ar: "هو المقابل الذي تتوقع المنشأة استحقاقه — مستبعدًا ما يُحصَّل لحساب الغير (ضريبة القيمة المضافة). وانتبه لخمس سمات:",
        },
      },
      {
        kind: "list",
        items: [
          { en: "Variable consideration — estimate by EXPECTED VALUE (large portfolio of similar contracts) or MOST LIKELY AMOUNT (two outcomes: bonus or penalty)", ar: "المقابل المتغير — قدِّره بالقيمة المتوقعة (محفظة عقود متماثلة) أو بالمبلغ الأرجح (نتيجتان: مكافأة أو غرامة)" },
          { en: "The CONSTRAINT — include variable consideration only to the extent it is highly probable that a significant reversal will NOT occur when the uncertainty resolves", ar: "قيد المتغير — لا يُدرج إلا إذا رجح غالبًا عدم حدوث انعكاس جوهري للإيراد عند زوال عدم التأكد" },
          { en: "Significant financing component — adjust for the time value of money when payment terms exceed one year (expedient: ignore ≤ 12 months)", ar: "عنصر تمويل جوهري — عدِّل بالقيمة الزمنية للنقد عند تجاوز أجل السداد سنة (مخرج عملي: تجاهل ما لا يزيد على ١٢ شهرًا)" },
          { en: "Non-cash consideration — measure at FAIR VALUE (unusual, not quoted, not varying)", ar: "المقابل غير النقدي — يقاس بالقيمة العادلة" },
          { en: "Consideration PAYABLE to the customer (coupons, vouchers) — deduct from revenue unless it pays for a distinct good/service at fair value", ar: "المقابل المستحق للعميل (كوبونات وقسائم) — يُخصم من الإيراد إلا إذا كان مقابل سلعة/خدمة متميزة بقيمتها العادلة" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Pick the estimation method per contract, not per portfolio — then ALWAYS run the constraint before booking any variable amount.",
          ar: "اختر طريقة التقدير لكل عقد على حدة — ثم طبّق قيد الانعكاس دائمًا قبل إثبات أي مقابل متغير.",
        },
      },
      { kind: "h", text: { en: "Step 4 — Allocating the transaction price", ar: "الخطوة ٤ — توزيع سعر المعاملة" } },
      {
        kind: "p",
        text: {
          en: "Allocate to each performance obligation in proportion to STANDALONE SELLING PRICES at contract inception:",
          ar: "يُوزع على كل التزام أداء بنسبة أسعاره البيعية المستقلة وقت نشأة العقد:",
        },
      },
      {
        kind: "list",
        items: [
          { en: "Observable price of the good/service sold separately (best evidence)", ar: "السعر الملاحظ لبيع السلعة/الخدمة منفردة (أفضل دليل)" },
          { en: "Adjusted market assessment approach — what would the market pay?", ar: "أسلوب تقدير السوق المعدَّل — ماذا سيدفع السوق؟" },
          { en: "Expected cost plus a margin", ar: "التكلفة المتوقعة زائد هامش ربح" },
          { en: "Residual approach — only when the selling price is highly variable or uncertain", ar: "أسلوب البواقي — فقط عند تقلب سعر البيع بشدة أو عدم التأكد منه" },
        ],
      },
      {
        kind: "p",
        text: {
          en: "A DISCOUNT is allocated proportionately to all obligations — unless the evidence shows it relates only to specific ones. Variable consideration can be allocated entirely to ONE obligation when its terms relate to that obligation alone and a split would misstate the revenue pattern.",
          ar: "يُوزع الخصم تناسبيًا على جميع الالتزامات — إلا إذا دلّ الدليل على تعلقه ببعضها دون بعض. ويمكن توزيع المقابل المتغير كله على التزام واحد عندما يتعلق شرطه به وحده ويؤدي التقسيم إلى تحريف نمط الإيراد.",
        },
      },
      { kind: "h", text: { en: "Step 5 — Recognising revenue", ar: "الخطوة ٥ — الاعتراف بالإيراد" } },
      {
        kind: "p",
        text: {
          en: "Over time — when ANY of these holds:",
          ar: "بمرور الوقت — عند تحقق أيٍّ مما يلي:",
        },
      },
      {
        kind: "list",
        items: [
          { en: "The customer simultaneously receives AND consumes the benefits as the entity performs (routine/recurring services)", ar: "العميل يستلم المنافع ويستهلكها تزامنًا أثناء أداء المنشأة (خدمات دورية متكررة)" },
          { en: "The customer CONTROLS the asset as it is created (building on the customer's land)", ar: "العميل يسيطر على الأصل أثناء إنشائه (بناء على أرض العميل)" },
          { en: "The asset has NO alternative use to the entity AND there is an enforceable right to payment for performance completed to date", ar: "لا استخدام بديل للأصل لدى المنشأة + حق سداد قابل للتنفيذ عن الأداء المنجز حتى تاريخه" },
        ],
      },
      {
        kind: "p",
        text: {
          en: "Otherwise — point in time. Indicators that control has passed: present right to payment · legal title · physical possession · significant risks and rewards · customer acceptance.",
          ar: "وإلا — فينبغِ الاعتراف في لحظة معينة. ومؤشرات انتقال السيطرة: حق حال في السداد · الملكية القانونية · الحيازة المادية · مخاطر ومنافع جوهرية · قبول العميل.",
        },
      },
      {
        kind: "note",
        text: {
          en: "Over time = transfer of control is continuous; point in time = control passes at a single moment (usually delivery).",
          ar: "بمرور الوقت = انتقال السيطرة مستمر؛ وفي اللحظة المعينة = تنتقل في لحظة واحدة (غالبًا عند التسليم).",
        },
      },
      { kind: "h", text: { en: "Contract costs", ar: "تكاليف العقد" } },
      {
        kind: "tree",
        title: { en: "Costs to obtain the contract", ar: "تكاليف الحصول على العقد" },
        root: { en: "Incremental costs of obtaining (would not exist without winning the contract — e.g. sales commission)", ar: "تكاليف تضافية لولا الفوز بالعقد ما كانت لتحدث — كعمولة البيع" },
        branches: [
          {
            when: { en: "Expected to be recovered", ar: "يُتوقع استردادها" },
            then: { en: "CAPITALISE — amortise consistently with the transfer of the goods/services (practical expedient: expense outright when the amortisation period would be ≤ 1 year)", ar: "رسملة — تُستهلك بما يتفق مع نقل السلع/الخدمات (مخرج عملي: مصروف مباشرة إذا كانت مدة الإهلاك ≤ سنة)", red: true },
          },
          {
            when: { en: "Not expected to be recovered", ar: "لا يُتوقع استردادها" },
            then: { en: "Expense when incurred", ar: "مصروف عند حدوثها" },
          },
        ],
      },
      {
        kind: "tree",
        title: { en: "Costs to fulfil the contract", ar: "تكاليف الوفاء بالعقد" },
        root: { en: "Direct + incremental costs of performing (e.g. mobilisation, design work)", ar: "التكاليف المباشرة والتضافية للتنفيذ (كالتجهيز والتصميم)" },
        branches: [
          {
            when: { en: "Within the scope of another standard (IAS 2 / 16 / 38)", ar: "تندرج تحت معيار آخر (IAS 2 / 16 / 38)" },
            then: { en: "Apply THAT standard (inventory, PPE, intangible)", ar: "طبِّق ذلك المعيار (مخزون، ممتلكات، أصول غير ملموسة)" },
          },
          {
            when: { en: "Otherwise", ar: "غير ذلك" },
            then: { en: "See the two §91 tests →", ar: "انظر اختبارَي §91 ←" },
            children: [
              {
                when: { en: "Directly related to the contract + generates/enhances resources used to satisfy future obligations + expected to be recovered", ar: "متعلقة مباشرة بالعقد + تنشئ موارد للوفاء بالتزامات مستقبلية + يُتوقع استردادها" },
                then: { en: "CAPITALISE — amortise on a systematic basis consistent with the transfer", ar: "رسملة — إهلاك منظم بما يتفق مع الانتقال", red: true },
              },
              {
                when: { en: "Any test fails", ar: "عدم تحقق أي اختبار" },
                then: { en: "Expense when incurred (also: general & administrative, waste, inefficiency)", ar: "مصروف عند حدوثها (وكذلك العمومية والإدارية والهالك وعدم الكفاءة)" },
              },
            ],
          },
        ],
      },
      { kind: "h", text: { en: "Warranty", ar: "الضمان" } },
      {
        kind: "tree",
        root: { en: "Warranty offered with the sale", ar: "ضمان مقدم مع البيع" },
        branches: [
          {
            when: { en: "Customer can purchase it separately, or it is longer/more extensive than the legal minimum (a service beyond assurance)", ar: "يمكن شراؤه منفصلًا، أو هو أطول/أوسع من الحد القانوني (خدمة تتجاوز مجرد الطمأنة)" },
            then: { en: "SERVICE-TYPE warranty → a SEPARATE performance obligation: allocate part of the transaction price to it", ar: "ضمان خدمي → التزام أداء مستقل: يُخصص له جزء من سعر المعاملة", red: true },
          },
          {
            when: { en: "Only assures the good works as specified", ar: "مجرد طمأنة بأن السلعة تعمل كما هو متفق" },
            then: { en: "ASSURANCE-TYPE warranty → accrue a provision under IAS 37 (no revenue allocation)", ar: "ضمان اطمئنان → مخصص بموجب IAS 37 (بلا تخصيص إيراد)" },
          },
        ],
      },
      { kind: "h", text: { en: "Principal vs agent", ar: "الأصيل والوكيل" } },
      {
        kind: "p",
        text: {
          en: "Whoever CONTROLS the good or service before it transfers to the customer is the principal → GROSS revenue. The other party is an agent → NET (fee / commission).",
          ar: "من يسيطر على السلعة أو الخدمة قبل نقلها إلى العميل هو الأصيل → إيراد إجمالي. والآخر وكيل → صافي العمولة فقط.",
        },
      },
      {
        kind: "journal",
        title: { en: "Principal — gross (marketplace sells its own inventory)", ar: "الأصيل — إجمالي (المنصة تبيع مخزونها)" },
        rows: [
          { dr: { en: "Cash 100", ar: "النقد ١٠٠" }, cr: { en: "Revenue 100", ar: "إيراد ١٠٠" }, red: true },
          { dr: { en: "Cost of sales 80", ar: "تكلفة المبيعات ٨٠" }, cr: { en: "Inventory 80", ar: "مخزون ٨٠" } },
        ],
      },
      {
        kind: "journal",
        title: { en: "Agent — net (marketplace lists a third party's goods, 20% fee)", ar: "الوكيل — صافي (المنصة تعرض سلع الغير بعمولة ٢٠٪)" },
        rows: [
          { dr: { en: "Cash 100", ar: "النقد ١٠٠" }, cr: { en: "Payable to the seller 80", ar: "مستحق للبائع ٨٠" } },
          { cr: { en: "Commission revenue 20", ar: "إيراد عمولة ٢٠" }, red: true },
        ],
      },
      {
        kind: "list",
        items: [
          { en: "Indicators of control: primary responsibility for fulfilment · inventory risk before/after transfer · discretion in setting the price", ar: "مؤشرات السيطرة: المسؤولية الأساسية عن الوفاء · مخاطر المخزون قبل/بعد النقل · سلطة تحديد السعر" },
        ],
      },
      {
        kind: "note",
        text: {
          en: "Gross vs net changes revenue but almost never profit — it is a presentation question the examiners love.",
          ar: "الإجمالي مقابل الصافي يغير الإيراد لا الربح غالبًا — مسألة عرض يحبها الممتحنون.",
        },
      },
      { kind: "h", text: { en: "Bill-and-hold arrangements", ar: "ترتيبات البيع مع الاحتفاظ" } },
      {
        kind: "p",
        text: {
          en: "Revenue can still be recognised while the entity physically holds the goods — but ONLY if the customer has obtained control of them:",
          ar: "يجوز الاعتراف بالإيراد رغم حيازة المنشأة الفعلية للسلع — لكن فقط إذا اكتسب العميل السيطرة عليها:",
        },
      },
      {
        kind: "list",
        items: [
          { en: "A SUBSTANTIVE reason for the arrangement (customer-requested, e.g. space limits)", ar: "سبب جوهري للترتيب (بطلب العميل، كضيق المساحة)" },
          { en: "The goods are identified SEPARATELY as belonging to the customer", ar: "السلع محددة بذاتها كملك للعميل" },
          { en: "Ready for physical TRANSFER now", ar: "جاهزة للنقل المادي حالًا" },
          { en: "The entity CANNOT use them or direct them to another customer", ar: "لا تستطيع المنشأة استخدامها أو توجيهها لعميل آخر" },
        ],
      },
      { kind: "h", text: { en: "Repurchase agreements", ar: "اتفاقيات إعادة الشراء" } },
      {
        kind: "p",
        text: {
          en: "The seller sells, then holds an obligation or option to buy the asset back. The customer usually never obtains control → it was never a sale:",
          ar: "يبيع البائع ثم يحتفظ بالتزام أو خيار لشراء الأصل обратно. والعميل غالبًا لا يكتسب السيطرة أصلًا → فليس هناك بيع:",
        },
      },
      {
        kind: "tree",
        root: { en: "Asset sold with a repurchase clause", ar: "أصل مباع مع شرط إعادة شراء" },
        branches: [
          {
            when: { en: "Forward or CALL OPTION — the ENTITY holds the right to repurchase", ar: "عقد آجل أو خيار شراء — الحق بيد المنشأة" },
            then: { en: "FINANCING ARRANGEMENT — keep the asset on the books; recognise a financial liability that grows to the repurchase price", ar: "ترتيب تمويلي — يبقى الأصل بالدفاتر مع التزام مالي ينمو حتى سعر إعادة الشراء", red: true },
          },
          {
            when: { en: "PUT OPTION — the CUSTOMER holds the right, repurchase price < original (a significant economic incentive to exercise)", ar: "خيار بيع — الحق بيد العميل وسعر إعادة الشراء < الأصلي (حافز جوهري للممارسة)" },
            then: { en: "LEASE — the customer is paying for the USE of the asset", ar: "عقد إيجار — العميل يدفع مقابل استخدام الأصل", red: true },
          },
          {
            when: { en: "Put option with repurchase price ≥ original price", ar: "خيار بيع وسعر إعادة الشراء ≥ الأصلي" },
            then: { en: "FINANCING ARRANGEMENT", ar: "ترتيب تمويلي", red: true },
          },
        ],
      },
      {
        kind: "journal",
        title: { en: "Financing arrangement — the entries", ar: "الترتيب التمويلي — القيود" },
        rows: [
          { dr: { en: "Cash (sale proceeds)", ar: "النقد (حصيلة البيع)" }, cr: { en: "Financial liability", ar: "التزام مالي" } },
          { dr: { en: "Interest expense (the price difference accrues over the term)", ar: "مصروف فوائد (يتراكم فرق السعر عبر المدة)" }, cr: { en: "Financial liability", ar: "التزام مالي" } },
          { dr: { en: "Financial liability (at repurchase)", ar: "التزام مالي (عند إعادة الشراء)" }, cr: { en: "Cash (repurchase price)", ar: "النقد (سعر إعادة الشراء)" } },
        ],
      },
      {
        kind: "journal",
        title: { en: "Lease treatment (put option below original price)", ar: "المعالجة كإيجار (خيار بيع دون السعر الأصلي)" },
        rows: [
          { dr: { en: "Cash (proceeds)", ar: "النقد (الحصيلة)" }, cr: { en: "Deferred revenue (contract liability)", ar: "إيراد مؤجل (التزام تعاقدي)" } },
          { cr: { en: "Lease revenue — released over the lease term", ar: "إيراد إيجار — يُسترد عبر مدة الإيجار" }, red: true },
        ],
      },
      {
        kind: "note",
        text: {
          en: "The asset never left the balance sheet in either case — keep depreciating it.",
          ar: "الأصل لم يغادر الميزانية في الحالتين — استمر في إهلاكه.",
        },
      },
      { kind: "h", text: { en: "Consignment inventory", ar: "المخزون بالعمولة" } },
      {
        kind: "list",
        items: [
          { en: "The inventory at the dealer's location is controlled by the ENTITY and can be moved to another customer at will", ar: "المخزون لدى الوكيل تحت سيطرة المنشأة ويمكن نقله لعميل آخر متى شاءت" },
          { en: "The dealer has NO unconditional obligation to pay — payment is only triggered by the on-sale", ar: "لا التزامًا مطلقًا على الوكيل بالسداد — فالسداد لا ينشأ إلا بالبيع للغير" },
          { en: "The dealer MUST return the unsold goods (no inventory risk)", ar: "يلزم الوكيل برد غير المبيع (لا مخاطرة مخزون عليه)" },
        ],
      },
      {
        kind: "p",
        text: {
          en: "⇒ Control has NOT transferred when the goods ship to the dealer. Keep the inventory on the entity's SoFP; recognise revenue only when the dealer sells to the third party.",
          ar: "⇒ لم تنتقل السيطرة بشحن السلع إلى الوكيل: يبقى المخزون بميزانية المنشأة، ولا يُعترف بالإيراد إلا عند بيع الوكيل للطرف الثالث.",
        },
      },
      { kind: "h", text: { en: "Sale with a right of return", ar: "البيع مع حق الإرجاع" } },
      {
        kind: "p",
        text: {
          en: "Recognise revenue only for the consideration NOT expected to be refunded; the rest is a REFUND LIABILITY. Recover the returned inventory at its former carrying amount less expected recovery costs — as a RIGHT-TO-RECOVER ASSET, not inventory.",
          ar: "يُعترف بالإيراد بالمقابل الذي لا يُتوقع رده فقط؛ والباقي التزام رد. ويُسترد المخزون المرتجع بقيمته الدفترية السابقة مخصومًا منها تكاليف الاسترداد المتوقعة — كأصل حق استرداد لا كمخزون.",
        },
      },
      {
        kind: "journal",
        title: { en: "Returns estimable reliably (expect 5% back)", ar: "المرتجعات قابلة للتقدير الموثوق (متوقع ٥٪)" },
        rows: [
          { dr: { en: "Cash 100", ar: "النقد ١٠٠" }, cr: { en: "Revenue 95", ar: "إيراد ٩٥" }, red: true },
          { cr: { en: "Refund liability 5", ar: "التزام رد ٥" } },
          { dr: { en: "Cost of sales 76", ar: "تكلفة مبيعات ٧٦" }, cr: { en: "Inventory 80", ar: "مخزون ٨٠" } },
          { dr: { en: "Right-to-recover asset 4", ar: "أصل حق استرداد ٤" } },
        ],
      },
      {
        kind: "journal",
        title: { en: "Returns NOT reliably estimable", ar: "المرتجعات غير قابلة للتقدير الموثوق" },
        rows: [
          { dr: { en: "Cash 100", ar: "النقد ١٠٠" }, cr: { en: "Contract liability (deferred revenue) 100", ar: "التزام تعاقدي (إيراد مؤجل) ١٠٠" } },
          { cr: { en: "Recognise revenue only when the return period lapses or the estimate becomes reliable", ar: "يُعترف بالإيراد عند انقضاء مهلة الإرجاع أو صيرورة التقدير موثوقًا" }, red: true },
        ],
      },
      { kind: "h", text: { en: "Customer options — material rights", ar: "خيارات العميل — الحقوق الجوهرية" } },
      {
        kind: "p",
        text: {
          en: "An option giving the customer something it would not get without the contract (a discount voucher, reward points, a free second renewal) is a MATERIAL RIGHT → a separate performance obligation. Defer part of the transaction price until the right is exercised or expires.",
          ar: "الخيار الذي يمنح العميل ما لم يكن ليحصل عليه لولا العقد (قسيمة خصم، نقاط مكافآت، تجديد مجاني) حق جوهري → التزام أداء مستقل: يُؤجَّل جزء من سعر المعاملة حتى ممارسة الحق أو سقوطه.",
        },
      },
      { kind: "h", text: { en: "Measuring progress — long-term contracts", ar: "قياس التقدم — العقود طويلة الأجل" } },
      {
        kind: "p",
        text: {
          en: "Over-time contracts measure progress by an OUTPUT method (surveys of work performed, milestones reached, units produced — a faithful depiction of the transfer) or an INPUT method (costs incurred). Under the input method, exclude uninstalled materials and abnormal waste/inefficiencies from the percentage — they do not depict the transfer.",
          ar: "تُقاس درجة التقدم للعقود الزمنية بطريقة المخرجات (مسح للأعمال المنجزة، مراحل مكتملة، وحدات منتجة — تصوير أمين للانتقال) أو طريقة المدخلات (التكاليف المتكبدة). وفي طريقة المدخلات تُستبعد المواد غير المركبة والهالك غير الطبيعي من نسبة التقدم — فهي لا تصور الانتقال.",
        },
      },
      {
        kind: "formula",
        title: { en: "Percentage of completion (input method)", ar: "نسبة الإتمام (طريقة المدخلات)" },
        lines: [
          { en: "% complete = cost to date ÷ total estimated cost", ar: "نسبة الإتمام = التكلفة حتى التاريخ ÷ إجمالي التكلفة المقدرة" },
          { en: "Revenue to date = contract price × % complete", ar: "الإيراد حتى التاريخ = قيمة العقد × نسبة الإتمام" },
          { en: "Revenue this period = revenue to date − revenue previously recognised", ar: "إيراد الفترة = الإيراد حتى التاريخ − الإيراد المعترف به سابقًا" },
          { en: "Cost to date = materials + labour + overheads incurred", ar: "التكلفة حتى التاريخ = مواد + أجور + تحميلات متكبدة" },
        ],
      },
      {
        kind: "example",
        title: { en: "Worked example", ar: "مثال عملي" },
        lines: [
          { en: "Contract price 1,000 · cost to date 600 · total estimated cost 800", ar: "قيمة العقد ١٬٠٠٠ · التكلفة حتى التاريخ ٦٠٠ · إجمالي التكلفة المقدرة ٨٠٠" },
          { en: "% complete = 600 ÷ 800 = 75% → revenue to date = 1,000 × 75% = 750", ar: "نسبة الإتمام = ٦٠٠ ÷ ٨٠٠ = ٧٥٪ ← الإيراد حتى التاريخ = ١٬٠٠٠ × ٧٥٪ = ٧٥٠" },
          { en: "Previously recognised 450 → revenue this period = 300", ar: "المعترف به سابقًا ٤٥٠ ← إيراد الفترة = ٣٠٠" },
          { en: "Total cost estimate rises above the price? → recognise the FULL expected loss at once (IAS 37 onerous contract)", ar: "إذا تجاوزت تقديرات التكلفة قيمة العقد ← اعترف فورًا بكامل الخسارة المتوقعة (عقد مفضر وفق IAS 37)" },
        ],
      },
      { kind: "h", text: { en: "Contract asset vs contract liability", ar: "أصل العقد والتزام العقد" } },
      {
        kind: "tree",
        root: { en: "Compare cumulative revenue recognised with cumulative billings", ar: "قارن الإيراد التراكمي بالفوترة التراكمية" },
        branches: [
          {
            when: { en: "Revenue > billings (unbilled performance)", ar: "الإيراد > الفوترة (أداء غير مفوتر)" },
            then: { en: "CONTRACT ASSET — a conditional right to consideration (ECL under IFRS 9)", ar: "أصل عقد — حق مشروط في المقابل (خسائر ائتمان متوقعة وفق IFRS 9)", red: true },
          },
          {
            when: { en: "Revenue < billings (paid in advance for undelivered work)", ar: "الإيراد < الفوترة (سداد مقدَّم عن عمل لم يُسلَّم)" },
            then: { en: "CONTRACT LIABILITY = deferred revenue — إيراد مؤجل", ar: "التزام عقد = إيراد مؤجل", red: true },
          },
          {
            when: { en: "Billed and the due date has passed (unconditional right)", ar: "مفوتر وحل أجله (حق غير مشروط)" },
            then: { en: "Trade RECEIVABLE = cumulative billings − cash received", ar: "مدينون تجاريون = الفوترة التراكمية − النقد المحصل" },
          },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "The impairment model for contract assets is IFRS 9 ECL — and the discount rate for any significant financing component is ALWAYS the rate that would apply in a separate financing between the entity and THAT customer at inception.",
          ar: "نموذج انخفاض قيمة أصول العقد هو خسائر الائتمان المتوقعة في IFRS 9 — ومعدل الخصم لأي عنصر تمويل جوهري هو دائمًا معدل تمويل منفصل بين المنشأة وهذا العميل تحديدًا وقت نشأة العقد.",
        },
      },
    ],
}
