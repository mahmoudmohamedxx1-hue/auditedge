/**
 * v30 — IFRS Summaries · Assets group:
 * IAS 2, IAS 16, IAS 36, IAS 38, IAS 40, IFRS 5, IFRS 16, IAS 41.
 */

import type { Standard } from "./types"

export const ASSET_STANDARDS: Standard[] = [
  {
    code: "IAS 2",
    title: { en: "Inventories", ar: "المخزون" },
    topic: "assets",
    effective: { en: "Effective 1 Jan 1995", ar: "سارٍ من ١ يناير ١٩٩٥" },
    blocks: [
      { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
      {
        kind: "p",
        text: {
          en: "Inventory — assets held for sale in the ordinary course of business, in the process of production, or as materials/supplies — is measured at the LOWER of cost and net realisable value (NRV). Excludes work in progress under IFRS 15 construction contracts, financial instruments, biological assets and agricultural produce at harvest.",
          ar: "المخزون — أصول مقتناة للبيع في النشاط الاعتيادي، أو قيد الإنتاج، أو مواد ومستلزمات — يقاس بالأدنى من التكلفة وصافي القيمة البيعية. ويستثنى إنشاءات IFRS 15 الجارية والأدوات المالية والأصول الحيوية ومنتجات الحصاد.",
        },
      },
      { kind: "h", text: { en: "Cost formulas", ar: "صيغ التكلفة" } },
      {
        kind: "tree",
        root: { en: "Bringing inventory to its present location and condition", ar: "جلب المخزون إلى موقعه وحالته الحالية" },
        branches: [
          {
            when: { en: "Purchase cost — purchase price + import duties + transport + handling, LESS trade discounts and rebates", ar: "تكلفة الشراء — الثمن + الرسوم الجمركية + النقل + المناولة، مخصومًا الخصومات التجارية" },
            then: { en: "Include · EXCLUDE selling costs, storage of finished goods, admin overheads, abnormal waste", ar: "تُدرج · وتستبعد تكاليف البيع وتخزين المنتج التام والعمومية الإدارية والهالك غير الطبيعي", red: true },
          },
          {
            when: { en: "Conversion — direct labour + a SYSTEMATIC allocation of fixed + variable production overheads (at NORMAL capacity)", ar: "التحويل — أجور مباشرة + توزيع منظم للتحميلات الثابتة والمتغيرة (بالطاقة الطبيعية)" },
            then: { en: "Include, even if produced in a quiet period (fixed OH spread over actual units, not diluted)", ar: "تُدرج حتى في فترات الركود (توزع الثابتة على الوحدات الفعلية لا تخفف)", red: true },
          },
          {
            when: { en: "Techniques — standard costing, retail method (allowed if the result approximates cost)", ar: "الأساليب — التكلفة المعيارية وطريقة التجزئة (إذا اقتربت النتيجة من التكلفة)" },
            then: { en: "Permitted with regular reviews of assumptions", ar: "جائزة مع مراجعة دورية للافتراضات" },
          },
        ],
      },
      {
        kind: "list",
        items: [
          { en: "Cost flow: FIRST-IN FIRST-OUT (FIFO) or weighted average — LIFO is BANNED under IFRS", ar: "تدفق التكلفة: الوارد أولًا صادر أولًا أو المتوسط المرجح — والمردود أخيرًا محظور في IFRS" },
          { en: "Interchangeable items → formula; specific identification ONLY for items not ordinarily interchangeable or segregated for a specific project", ar: "البنود القابلة للتبديل ← صيغة عامة؛ والتحديد المخصص للبنود غير القابلة للتبديل أو المعزولة لمشروع معين فقط" },
          { en: "NRV = estimated selling price in the ordinary course − costs of completion − costs to sell; write-down by item (or group) — usually item-by-item", ar: "صافي القيمة البيعية = سعر البيع المتوقع − تكاليف الإتمام − تكاليف البيع؛ والتخفيض بندًا بندًا عادة" },
          { en: "Reversal of a write-down → recognised as a REDUCTION of cost of sales when the NRV recovers (new carrying amount ≤ the original cost)", ar: "رد التخفيض ← يخفض تكلفة المبيعات عند تعافي صافي القيمة البيعية (بما لا يجاوز التكلفة الأصلية)" },
        ],
      },
      {
        kind: "example",
        title: { en: "Worked example", ar: "مثال عملي" },
        lines: [
          { en: "Cost 100 · selling price now 92 · selling costs 5 → NRV 87", ar: "التكلفة ١٠٠ · سعر البيع ٩٢ · تكاليف بيع ٥ ← صافي القيمة البيعية ٨٧" },
          { en: "Carry at 87 (write-down 13 to cost of sales)", ar: "يحمل بـ ٨٧ (تخفيض ١٣ على تكلفة المبيعات)" },
          { en: "Price recovers to 110 next year → NRV 105 → carry at the ORIGINAL cost 100, reversing 13", ar: "وإذا ارتفع السعر إلى ١١٠ ← صافي ١٠٥ ← يحمل بالتكلفة الأصلية ١٠٠ برد ١٣" },
        ],
      },
    ],
  },

  {
    code: "IAS 16",
    title: { en: "Property, Plant and Equipment", ar: "الممتلكات والآلات والمعدات" },
    topic: "assets",
    effective: { en: "Effective 1 Jan 2005 · 2020 amendment (revenue-related dismantling)", ar: "سارٍ من ١ يناير ٢٠٠٥ · تعديل ٢٠٢٠ (تكاليف الفك المتعلقة بالإيراد)" },
    blocks: [
      { kind: "h", text: { en: "Objective & recognition", ar: "الهدف والاعتراف" } },
      {
        kind: "p",
        text: {
          en: "Tangible items held for use in production/supply of goods or services, rental or administration, over more than ONE period. Recognise when probable future economic benefits flow and the cost can be measured reliably — regardless of whether the entity takes title.",
          ar: "أصول ملموسة تُستخدم في الإنتاج أو التوريد أو التأجير أو الإدارة لأكثر من فترة واحدة. ويعترف بها عند رجحان تدفق المنافع الاقتصادية وإمكان قياس التكلفة موثوقًا — بغض النظر عن الملكية القانونية.",
        },
      },
      { kind: "h", text: { en: "What goes into cost?", ar: "ما يدخل في التكلفة؟" } },
      {
        kind: "list",
        items: [
          { en: "Purchase price + import duties − discounts/rebates · directly attributable costs: site preparation, delivery, installation, assembly, professional fees, testing", ar: "ثمن الشراء + الرسوم − الخصومات · والتكاليف المباشرة المنسوبة: إعداد الموقع والنقل والتركيب والتجميع والأتعاب المهنية والاختبار" },
          { en: "Initial estimate of dismantling/removal/restoration obligations (IAS 37, discounted — 2020: capitalise the difference caused by future revenue-related changes via a depreciation adjustment)", ar: "التقدير الابتدائي لالتزامات الفك والإزالة والإصلاح (وفق IAS 37 مخصومة — وتعديل ٢٠٢٠: فرق التغيرات المرتبطة بالإيراد يعدل به الإهلاك)" },
          { en: "Estimated future dismantling cost differences arising from production of inventory during the current period → the cost of THAT inventory", ar: "فروق تكاليف الفك الناشئة عن إنتاج المخزون بالفترة الحالية ← تكلفة ذلك المخزون ذاته" },
          { en: "NOT: opening-the-new-facility costs, staff training, admin overheads, abnormal wastage, relocation", ar: "لا تُدرج: تكاليف افتتاح المنشأة وتدريب العاملين والعمومية الإدارية والهالك والنقل لموقع آخر" },
        ],
      },
      { kind: "h", text: { en: "The measurement model choice", ar: "خيار نموذج القياس" } },
      {
        kind: "tree",
        root: { en: "Subsequent measurement", ar: "القياس اللاحق" },
        branches: [
          {
            when: { en: "COST MODEL — carrying amount = cost − accumulated depreciation − impairment", ar: "نموذج التكلفة = التكلفة − مجمع الإهلاك − انخفاض القيمة" },
            then: { en: "Default; the class policy applies to an entire class of assets", ar: "الافتراضي؛ وتطبق سياسته على فئة كاملة", red: true },
          },
          {
            when: { en: "REVALUATION MODEL — fair value at the revaluation date − subsequent depreciation/impairment", ar: "نموذج إعادة التقييم = القيمة العادلة − الإهلاك/الانخفاض اللاحق" },
            then: { en: "Fair value from ACTIVE markets (land, buildings — rarely plant); revalue the WHOLE class regularly", ar: "قيمة عادلة من سوق نشطة (أراضٍ ومبانٍ نادرًا الآلات)؛ وتعاد تقييم الفئة كاملة بانتظام", red: true },
          },
        ],
      },
      {
        kind: "formula",
        lines: [
          { en: "Depreciable amount = cost − residual value · charged systematically over the USEFUL LIFE", ar: "المبلغ القابل للإهلاك = التكلفة − القيمة المتبقية · يحمَّل منظمًا على العمر الإنتاجي" },
          { en: "Land is NOT depreciated · review life, method and residual EVERY year (IAS 8 prospective change in estimate)", ar: "الأرض لا تُهلك · ويراجع العمر والأسلوب والمتبقية كل سنة (تغير تقدير مستقبلي)" },
          { en: "Revaluation surplus → OCI (recycled to P&L on disposal); keep depreciation charging on the revalued amount", ar: "فائض إعادة التقييم ← دخل شامل (يعاد تدويره عند الاستبعاد)؛ والاستهلاك يستمر على المبلغ المعاد تقييمه" },
        ],
      },
      {
        kind: "journal",
        title: { en: "Disposal entry (cost-model asset)", ar: "قيد الاستبعاد (أصل بنموذج التكلفة)" },
        rows: [
          { dr: { en: "Cash (proceeds)", ar: "النقد (الحصيلة)" }, cr: { en: "Asset cost", ar: "تكلفة الأصل" } },
          { dr: { en: "Accumulated depreciation", ar: "مجمع الإهلاك" } },
          { dr: { en: "Loss on disposal (if negative)", ar: "خسارة استبعاد (إن وجدت)" }, cr: { en: "Gain on disposal (if positive)", ar: "ربح استبعاد (إن وجد)" }, red: true },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Depreciation starts when the asset is READY FOR USE (not when it starts being used) and never stops for idleness — it only pauses when the asset is classified held-for-sale under IFRS 5.",
          ar: "يبدأ الإهلاك عند جهوزية الأصل للاستخدام (لا عند بدء استخدامه فعلًا) ولا يتوقف بالخمول — بل يتوقف فقط عند تصنيفه محتفظًا به للبيع وفق IFRS 5.",
        },
      },
    ],
  },

  {
    code: "IAS 36",
    title: { en: "Impairment of Assets", ar: "انخفاض قيمة الأصول" },
    topic: "assets",
    effective: { en: "Effective 1 Jan 2005 · amended by IFRS 13 & IFRS 16", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل بـ IFRS 13 وIFRS 16" },
    blocks: [
      { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
      {
        kind: "p",
        text: {
          en: "Assets are not carried at more than their recoverable amount: the HIGHER of fair value less costs of disposal (FVLCD) and value in use (VIU). Applies to PPE, intangibles, goodwill, investment-property on the cost model, right-of-use assets, associates/JVs at equity — inventory and financial assets have their own regimes.",
          ar: "لا تحمل الأصول بأكثر من المبلغ القابل للاسترداد: الأعلى من القيمة العادلة مخصومة تكاليف البيع والقيمة في الاستخدام. ويسري على الممتلكات وغير الملموسة والشهرة والعقارات الاستثمارية بنموذج التكلفة وأصول حق الاستخدام والزميلات والمشروعات بطريقة الحصة — أما المخزون والأدوات المالية فلهما نظاماهما.",
        },
      },
      { kind: "h", text: { en: "When to test", ar: "متى يُختبر" } },
      {
        kind: "list",
        items: [
          { en: "External sources: market value falls, adverse technology/market/economic/legal changes, interest-rate rises, net assets > market cap", ar: "مصادر خارجية: هبوط القيمة السوقية، تغيرات تقنية/سوقية/اقتصادية/قانونية ضارة، ارتفاع معدلات الفائدة، تجاوز صافي الأصول للرسملة السوقية" },
          { en: "Internal sources: obsolescence/physical damage, plans to discontinue or restructure, worse economic performance than budgeted", ar: "مصادر داخلية: تقادم أو تلف مادي، خطط إيقاف أو إعادة هيكلة، أداء اقتصادي أسوأ من المخطط" },
          { en: "ANNUAL test regardless of indicators: intangibles with an INDEFINITE life, intangibles NOT YET available for use, and GOODWILL acquired in a business combination", ar: "اختبار سنوي بلا حاجة لمؤشرات: غير الملموسة بعمر غير محدد، وغير الجاهزة للاستخدام بعد، والشهرة المقتناة بعملية اندماج" },
        ],
      },
      { kind: "h", text: { en: "The impairment machinery", ar: "آلية الاختبار" } },
      {
        kind: "formula",
        lines: [
          { en: "VIU = present value of future cash flows (pre-tax, own-asset assumptions, stable/declining growth ≤ long-term average)", ar: "القيمة في الاستخدام = القيمة الحالية للتدفقات النقدية المستقبلية (قبل الضريبة بافتراضات الأصل ذاته ونمو لا يزيد على المتوسط طويل الأجل)" },
          { en: "FVLCD = the IFRS 13 exit price − costs of disposal", ar: "القيمة العادلة مخصومة التكاليف = سعر الخروج وفق IFRS 13 − تكاليف التصرف" },
          { en: "Carrying amount > recoverable amount → write down to recoverable; build a provision for the loss; reversal (NOT goodwill) capped at the carrying amount it would have had net of depreciation", ar: "إذا جاوز الحمل المبلغ القابل للاسترداد ← خُفِّض إليه؛ ويرد التخفيض (لا الشهرة أبدًا) بحد أقصى القيمة الدفترية التي كانت ستكون عليها بعد الإهلاك" },
        ],
      },
      { kind: "h", text: { en: "Cash-generating units (CGU)", ar: "الوحدات المولدة للنقد" } },
      {
        kind: "steps",
        items: [
          { en: "Test each ASSET first; anything without its own cash inflows joins its CGU (the smallest identifiable group generating largely independent inflows)", ar: "اختبر كل أصل أولًا؛ وما لا تدفقات مستقلة له ينضم إلى وحدته المولدة للنقد (أصغر مجموعة شبه مستقلة التدفقات)" },
          { en: "Goodwill is tested at the CGU/group of CGUs it was allocated to (from the TOP down)", ar: "الشهرة تختبر على مستوى الوحدة أو مجموعة الوحدات التي وُزعت عليها (من الأعلى للأسفل)" },
          { en: "Corporate assets (head-office buildings, shared R&D) are tested with the CGU(s) they serve", ar: "الأصول المؤسسية (مبانٍ إدارية، بحث مشترك) تختبر مع الوحدات التي تخدمها" },
        ],
      },
      {
        kind: "tree",
        root: { en: "CGU impaired — where does the loss go?", ar: "وحدة معانة من انخفاض — أين تذهب الخسارة؟" },
        branches: [
          {
            when: { en: "First", ar: "أولًا" },
            then: { en: "Reduce GOODWILL allocated to the unit", ar: "تخفيض الشهرة الموزعة على الوحدة", red: true },
          },
          {
            when: { en: "Then", ar: "ثم" },
            then: { en: "Reduce the OTHER assets PRO RATA on carrying amounts", ar: "تخفيض بقية الأصول بنسبة قيمها الدفترية", red: true },
          },
          {
            when: { en: "Floor", ar: "الحد الأدنى" },
            then: { en: "Never below the HIGHEST of: FVLCD, VIU, zero (that asset's own recoverable logic)", ar: "لا ينزل دون الأعلى من: القيمة العادلة الصافية أو القيمة في الاستخدام أو صفر", red: true },
          },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "The most-tested sequence: goodwill first → pro-rata → floors. And a goodwill impairment can NEVER be reversed — even under the reversal rules of other standards.",
          ar: "أشهر تسلسل في الامتحانات: الشهرة أولًا ← بالتناسب ← الحدود الدنيا. وخسارة انخفاض الشهرة لا ترد أبدًا — ولو تحت قواعد رد التخفيض في المعايير الأخرى.",
        },
      },
    ],
  },

  {
    code: "IAS 38",
    title: { en: "Intangible Assets", ar: "الأصول غير الملموسة" },
    topic: "assets",
    effective: { en: "Effective 1 Jan 2005 · amended 2024 (business-restructuring charges)", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل ٢٠٢٤ (تكاليف إعادة هيكلة الأعمال)" },
    blocks: [
      { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
      {
        kind: "p",
        text: {
          en: "An intangible asset is an IDENTIFIABLE non-monetary asset without physical substance — identifiable when separable (can be sold/licensed) or arising from contractual/legal rights. Never recognised internally generated goodwill or brands/mastheads/customer lists.",
          ar: "الأصل غير الملموس أصل غير نقدي قابل للتحديد بلا جوهر مادي — وتحديده إما بقابلية الفصل (بيع/ترخيص) أو بنشأته من حقوق تعاقدية أو قانونية. ولا يعترف أبدًا بالشهرة أو العلامات أو قوائم العملاء المولدة داخليًا.",
        },
      },
      {
        kind: "tree",
        root: { en: "Where does it come from?", ar: "من أين نشأ؟" },
        branches: [
          {
            when: { en: "SEPARATE ACQUISITION — cost = purchase price + directly attributable costs", ar: "اقتناء منفصل — التكلفة = الثمن + التكاليف المباشرة" },
            then: { en: "ALWAYS RECOGNISE (probability & measurability automatically satisfied)", ar: "اعترف به دائمًا (الرجحان والقياس متحققان تلقائيًا)", red: true },
          },
          {
            when: { en: "BUSINESS COMBINATION — cost = fair value at acquisition", ar: "عملية اندماج — التكلفة = القيمة العادلة عند الاقتناء" },
            then: { en: "Recognise (even in-process R&D, brands, customer lists — if identifiable)", ar: "اعترف به (حتى البحث والتطوير الجاري والعلامات وقوائم العملاء — إن كانت قابلة للتحديد)", red: true },
          },
          {
            when: { en: "GOVERNMENT GRANT — nominal amount possibly (free or nominal consideration)", ar: "منحة حكومية — قد يكون بالمبلغ الاسمي" },
            then: { en: "Recognise initially at fair value or nominal amount", ar: "يعترف به ابتداءً بالقيمة العادلة أو الاسمية", red: true },
          },
          {
            when: { en: "EXCHANGE of assets — fair value unless the exchange lacks commercial substance", ar: "مقايضة بأصل — القيمة العادلة ما لم يخلُ التبادل من جوهر تجاري" },
            then: { en: "Measure at the exchange's fair value or carrying amount", ar: "يقاس بالقيمة العادلة أو القيمة الدفترية" },
          },
        ],
      },
      { kind: "h", text: { en: "Internally generated — the research/development wall", ar: "المولد داخليًا — جدار البحث والتطوير" } },
      {
        kind: "tree",
        root: { en: "Internal project", ar: "مشروع داخلي" },
        branches: [
          {
            when: { en: "RESEARCH phase (new knowledge, search, alternatives, formulation)", ar: "مرحلة البحث (معرفة جديدة، استقصاء، بدائل، صياغة)" },
            then: { en: "ALWAYS EXPENSE — never capitalise", ar: "مصروف دائمًا — لا رسملة", red: true },
          },
          {
            when: { en: "DEVELOPMENT phase (design, construction, testing of a proven pre-commercial prototype) — ALL six PIRATE criteria met", ar: "مرحلة التطوير (تصميم وبناء واختبار نموذج أولي مثبت) — بتحقق معايير PIRATE الستة" },
            then: { en: "CAPITALISE from the point the criteria are first met (Probable benefits · Intention · Resources · Ability to use · Expenditure measured · Technical feasibility)", ar: "رسملة من لحظة تحقق المعايير (منافع مرجحة · نية إتمام · موارد كافية · قدرة على الاستخدام · قياس الإنفاق · جدوى تقنية)", red: true },
          },
          {
            when: { en: "Internally generated BRANDS, mastheads, publishing titles, customer lists, goodwill · start-up, training, advertising & promotion, relocation & restructuring", ar: "العلامات والعناوين وقوائم العملاء والشهرة الداخلية · وتأسيس وتدريب وإعلان ونقل وإعادة هيكلة" },
            then: { en: "NEVER an asset — expense always", ar: "ليست أصلًا أبدًا — مصروف دائمًا", red: true },
          },
        ],
      },
      {
        kind: "formula",
        lines: [
          { en: "FINITE life → amortise over the useful life (reflect the pattern of consumption; straight-line if none); residual value zero unless a third party commits to buy", ar: "عمر محدد ← يستنفد على العمر الإنتاجي (بنمط الاستهلاك؛ أو بالقسط الثابت)؛ والقيمة المتبقية صفر ما لم يلتزم طرف ثالث بالشراء" },
          { en: "INDEFINITE life → NO amortisation but an ANNUAL impairment test + review of 'indefiniteness' each period", ar: "عمر غير محدد ← لا استنفاد مع اختبار انخفاض سنوي ومراجعة استمرار «عدم التحديد» كل فترة" },
          { en: "Revaluation model allowed only with an ACTIVE market (rare: taxi licences, fishing quotas) — surplus → OCI", ar: "نموذج إعادة التقييم لا يجوز إلا بسوق نشطة (نادر: تراخيص سيارات الأجرة وحصص الصيد) — والفائض للدخل الشامل" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "You cannot revalue an asset unless an active market exists for that exact asset type — most internally developed and acquired intangibles stay on the cost model. And the revaluation surplus never touches the P&L until disposal.",
          ar: "لا يجوز إعادة تقييم أصل دون سوق نشطة لنوعه بعينه — فأغلب غير الملموسة تبقى على نموذج التكلفة. وفائض إعادة التقييم لا يختمر الأرباح والخسائر إلا عند الاستبعاد.",
        },
      },
    ],
  },

  {
    code: "IAS 40",
    title: { en: "Investment Property", ar: "العقارات الاستثمارية" },
    topic: "assets",
    effective: { en: "Effective 1 Jan 2005 · amended by IFRS 16 (leases)", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل بـ IFRS 16" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "Property (land/building/part of a building — or both) held to EARN RENTALS or for CAPITAL APPRECIATION (or both) — NOT for own use in production/supply/admin, NOT for sale in the ordinary course (that is inventory).",
          ar: "عقار (أرض/مبنى/جزء من مبنى) محتفظ به لتحقيق إيجارات أو نمو رأس المال أو كليهما — لا للاستخدام الذاتي ولا للبيع في النشاط الاعتيادي (فذاك مخزون).",
        },
      },
      { kind: "h", text: { en: "The classification tests", ar: "اختبارات التصنيف" } },
      {
        kind: "tree",
        root: { en: "Property owned", ar: "عقار مملوك" },
        branches: [
          {
            when: { en: "Held for rentals / appreciation — including property leased out to a third party under an operating lease", ar: "محتفظ به لإيجار أو نمو — ومنه المؤجر لطرف ثالث بإيجار تشغيلي" },
            then: { en: "INVESTMENT PROPERTY (IFRS → IAS 40)", ar: "عقار استثماري (IAS 40)", red: true },
          },
          {
            when: { en: "Owner-occupied (own admin offices, factory)", ar: "مشغول بالذات (مكاتب إدارية، مصنع)" },
            then: { en: "PPE under IAS 16", ar: "ممتلكات وفق IAS 16", red: true },
          },
          {
            when: { en: "Held for sale in the ordinary course", ar: "للبيع في النشاط الاعتيادي" },
            then: { en: "Inventory under IAS 2 (e.g. a property developer)", ar: "مخزون وفق IAS 2 (كالمطور العقاري)", red: true },
          },
          {
            when: { en: "Mixed use — can be sold separately (e.g. offices upstairs, rented shops below)", ar: "استخدام مختلط قابل للفصل (مكاتب بأعلى ومتاجر مؤجرة بأسفل)" },
            then: { en: "SPLIT: investment property part under IAS 40, the rest under IAS 16 — otherwise the whole is PPE unless the other part is insignificant", ar: "يقسم: الجزء الاستثماري بـ IAS 40 والباقي بـ IAS 16 — وإلا فكله ممتلكات ما لم يكن الجزء الآخر غير جوهري" },
          },
        ],
      },
      { kind: "h", text: { en: "The two models", ar: "النموذجان" } },
      {
        kind: "p",
        text: {
          en: "FAIR VALUE MODEL is permitted (not just cost): remeasure to fair value EVERY period through PROFIT OR LOSS — no depreciation, no impairment (IAS 36 applies only on the cost model). Transfers out of the fair-value model are prohibited unless the property becomes owner-occupied or starts development for sale.",
          ar: "يجوز نموذج القيمة العادلة (لا التكلفة فقط): يعاد القياس للقيمة العادلة كل فترة عبر الأرباح والخسائر — بلا إهلاك ولا اختبار انخفاض (فـ IAS 36 على نموذج التكلفة فقط). ويحظر الانتقال من نموذج القيمة العادلة إلا إذا صار العقار مشغولًا بالذات أو بدأ تطويره للبيع.",
        },
      },
      {
        kind: "journal",
        title: { en: "Cost model entries", ar: "قيود نموذج التكلفة" },
        rows: [
          { dr: { en: "Rental income received", ar: "إيراد إيجار متحصل" }, cr: { en: "Rental income (P&L, IFRS 16 operating lease income)", ar: "إيراد إيجار (الأرباح والخسائر)" }, red: true },
          { dr: { en: "Fair-value gain (fair value model)", ar: "ربح قيمة عادلة (نموذج القيمة العادلة)" }, cr: { en: "Fair-value gain — P&L, NOT OCI", ar: "ربح قيمة عادلة — بالأرباح والخسائر لا بالدخل الشامل" }, red: true },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Contrast with IAS 16 revaluations: investment-property fair-value gains go to P&L, PPE revaluation surpluses go to OCI. A property interest held under a LEASE can also be investment property (property held under an operating lease — the 'property held for appreciation' choice).",
          ar: "قارن بإعادة تقييم IAS 16: أرباح القيمة العادلة للعقارات الاستثمارية بالأرباح والخسائر، أما فوائض الممتلكات فبالدخل الشامل. ويجوز أن يكون العقار مستأجرًا ويظل استثماريًا (العقار المستأجر لإيجاره من الباطن أو للنمو).",
        },
      },
    ],
  },

  {
    code: "IFRS 5",
    title: { en: "Non-current Assets Held for Sale and Discontinued Operations", ar: "الأصول غير المتداولة المحتفظ بها للبيع والعمليات المتوقفة" },
    topic: "assets",
    effective: { en: "Effective 1 Jan 2005", ar: "سارٍ من ١ يناير ٢٠٠٥" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "Assets (or disposal groups) ready for immediate sale in their present condition, actively marketed, at a reasonable price, with a highly-probable sale within ONE YEAR of classification — carve them out of the balance sheet into a single 'held for sale' line, stop depreciation, measure at the lower of carrying amount and fair value less costs to sell.",
          ar: "الأصول (أو المجموعات) جاهزة للبيع الفوري بحالتها الحالية، معروضة بنشاط، بسعر معقول، ويُرجح بيعها خلال سنة من التصنيف — تُفرد في بند «محتفظ به للبيع» بالميزانية، ويتوقف الإهلاك، وتقاس بالأدنى من القيمة الدفترية والقيمة العادلة مخصومة تكاليف البيع.",
        },
      },
      { kind: "h", text: { en: "The five criteria", ar: "المعايير الخمسة" } },
      {
        kind: "list",
        items: [
          { en: "Management committed to a plan to sell · actively looking for a buyer at a reasonable price", ar: "التزام الإدارة بخطة بيع · وبحث نشط عن مشترٍ بسعر معقول" },
          { en: "The asset is available for IMMEDIATE sale in its present condition", ar: "الأصل متاح للبيع الفوري بحالته الحالية" },
          { en: "Sale highly probable within 12 months of classification (extensions allowed only for external delays outside the entity's control)", ar: "البيع مرجح غالبًا خلال ١٢ شهرًا من التصنيف (ويمدد فقط لتأخير خارجي خارج سيطرة المنشأة)" },
          { en: "Remote-possibility of the plan being withdrawn or significantly changed · actively marketed at a reasonable price", ar: "بعد احتمال إلغاء الخطة أو تغييرها الجوهري · وعرض نشط بسعر معقول" },
          { en: "Actions to complete the plan indicate it is unlikely there will be significant changes or withdrawal", ar: "أفعال إتمام الخطة تدل على عدم رجوح تغير جوهري أو إلغاء" },
        ],
      },
      { kind: "h", text: { en: "Measurement rules", ar: "قواعد القياس" } },
      {
        kind: "list",
        items: [
          { en: "STOP DEPRECIATION/AMORTISATION from the date of classification — even before the sale", ar: "توقف الإهلاك والاستنفاد من تاريخ التصنيف — ولو قبل البيع" },
          { en: "Carry at the LOWER of carrying amount and FVLCS; an initial write-down is a loss; later RECOVERIES are recognised up to the carrying amount it never left", ar: "يحمل بالأدنى من الدفترية والقيمة العادلة الصافية؛ والتخفيض الابتدائي خسارة؛ وما يرد منها بحد أقصى القيمة التي خرجت منها" },
          { en: "Impairment follows IAS 36 (FVLCS replaces VIU for held-for-sale assets) — recognised in a disposal group BEFORE goodwill allocation", ar: "الانخفاض وفق IAS 36 (تحل القيمة العادلة الصافية محل القيمة في الاستخدام) — ويعترف به في مجموعة التصرف قبل توزيع الشهرة" },
          { en: "DO NOT reclassify held-for-sale on the balance sheet if criteria are no longer met → back to the old class, at the LOWER of the pre-classification carrying amount (net of depreciation it would have had) and the recoverable amount", ar: "إذا انتفت المعايير يعاد التصنيف إلى الفئة القديمة بالأدنى من القيمة الدفترية قبل التصنيف (بعد إهلاكه المفترض) والمبلغ القابل للاسترداد" },
        ],
      },
      { kind: "h", text: { en: "Discontinued operations", ar: "العمليات المتوقفة" } },
      {
        kind: "p",
        text: {
          en: "A component either disposed of or classified held for sale that is a separate MAJOR line of business or geographical area, part of a co-ordinated plan to dispose of such a line, or a subsidiary acquired exclusively for resale. Present a SINGLE amount in the statement of profit or loss, and restate every comparative to the same split.",
          ar: "مكون إما مستبعد أو مصنف محتفظًا به للبيع، ويمثل خط نشاط أو منطقة جغرافية رئيسة مستقلة، أو جزءًا من خطة منسقة للتخلي عن ذلك الخط، أو شركة تابعة مقتناة بغرض البيع. يعرض بمبلغ واحد في قائمة الأرباح، وتعاد المقارنات كلها على النسق ذاته.",
        },
      },
      {
        kind: "tip",
        text: {
          en: "Held-for-sale is a PRESENTATION standard as much as a measurement one: one line in the SOFP, one line in the P&L, but the cash flows of discontinued operations still get their own split in IAS 7.",
          ar: "IFRS 5 معيار عرض بقدر ما هو معيار قياس: بند واحد بالمركز المالي وبند واحد بالأرباح — مع عرض مستقل لتدفقات العمليات المتوقفة في قائمة التدفقات.",
        },
      },
    ],
  },

  {
    code: "IFRS 16",
    title: { en: "Leases", ar: "الإيجارات" },
    topic: "assets",
    effective: { en: "Effective 1 Jan 2019 · lessee model — almost every lease on balance sheet", ar: "سارٍ من ١ يناير ٢٠١٩ · نموذج المستأجر — كل إيجار تقريبًا في الميزانية" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "A contract conveys a lease when it gives the customer the RIGHT TO CONTROL the use of an identified asset for a period in exchange for consideration (identified asset + substantially all economic benefits + the right to direct its use).",
          ar: "ينقل العقد إيجارًا عندما يمنح العميل حق السيطرة على استخدام أصل محدد لمدة مقابل مقابل مالي (أصل محدد + جميع المنافع الاقتصادية جوهريًا + حق توجيه الاستخدام).",
        },
      },
      { kind: "h", text: { en: "The lessee model (right-of-use)", ar: "نموذج المستأجر (أصل حق الاستخدام)" } },
      {
        kind: "formula",
        lines: [
          { en: "ROU asset = initial measurement = lease liability + prepayments + initial direct costs + restoration cost estimate − incentives received", ar: "أصل حق الاستخدام = الالتزام + مدفوعات مقدمة + تكاليف مباشرة ابتدائية + تقدير تكاليف الإصلاح − الحوافز المتلقاه" },
          { en: "Lease liability = PV of UNPAID lease payments, discounted at the rate IMPLICIT in the lease (or the lessee's incremental borrowing rate)", ar: "التزام الإيجار = القيمة الحالية للمدفوعات غير المسددة بمعدل الإيجار الضمني (أو معدل اقتراض المستأجر التضافي)" },
          { en: "Subsequently: interest on the liability (IAS 36 → effective interest) + depreciation of the ROU asset (IAS 16 → straight-line normally)", ar: "لاحقًا: فوائد على الالتزام (بالفائدة الفعلية) + إهلاك أصل حق الاستخدام (قسط ثابت عادة)" },
        ],
      },
      {
        kind: "journal",
        title: { en: "The core entries", ar: "القيود الجوهرية" },
        rows: [
          { dr: { en: "Right-of-use asset", ar: "أصل حق الاستخدام" }, cr: { en: "Lease liability", ar: "التزام إيجار" } },
          { dr: { en: "Interest expense (on the liability)", ar: "مصروف فوائد" }, cr: { en: "Lease liability", ar: "التزام إيجار" } },
          { dr: { en: "Depreciation of the ROU asset", ar: "إهلاك أصل حق الاستخدام" }, cr: { en: "Accumulated depreciation — ROU", ar: "مجمع إهلاك أصل حق الاستخدام" } },
          { dr: { en: "Lease liability (payment split)", ar: "التزام الإيجار (السداد)" }, cr: { en: "Cash", ar: "النقد" }, red: true },
        ],
      },
      {
        kind: "list",
        items: [
          { en: "Short-term (≤ 12 months) and low-value (≈ ≤ 5k USD new) leases → straight-line expense EXEMPTION (policy choice by class)", ar: "قصيرة الأجل (≤ ١٢ شهرًا) ومنخفضة القيمة (≈ ≤ ٥ آلاف دولار جديدة) ← إعفاء بمصروف منتظم (سياسة لكل فئة)" },
          { en: "The pattern: total expense is FRONT-LOADED (interest is higher early) vs the old straight-line operating expense", ar: "النمط: المصروف الإجمالي مثقل في أول المدة (فوائد أعلى مبكرًا) مقارنة بالمصروط المنتظم القديم" },
          { en: "Cash flows: PRINCIPAL → financing; INTEREST → operating or financing (consistent with IAS 7 policy); short-term/low-value → operating", ar: "التدفقات: أصل الدين ← تمويلي؛ والفوائد ← تشغيلي أو تمويلي بثبات؛ والقصيرة ومنخفضة القيمة ← تشغيلي" },
        ],
      },
      { kind: "h", text: { en: "The lessor split", ar: "تقسيم المؤجر" } },
      {
        kind: "tree",
        root: { en: "Lessor classification", ar: "تصنيف المؤجر" },
        branches: [
          {
            when: { en: "Transfers substantially all risks and rewards of ownership", ar: "ينقل جميع مخاطر ومنافع الملكية جوهريًا" },
            then: { en: "FINANCE lease — derecognise the asset, recognise a NET INVESTMENT in the lease (a receivable at the implicit rate); income = interest", ar: "إيجار تمويلي — يستبعد الأصل ويعترف بصافي استثمار في الإيجار (مدين بالمعدل الضمني)؛ والدخل فوائد", red: true },
          },
          {
            when: { en: "Otherwise", ar: "غير ذلك" },
            then: { en: "OPERATING lease — the asset stays on the lessor's books; straight-line lease income; IAS 36 optional for investment-property fair-value lessors", ar: "إيجار تشغيلي — يبقى الأصل بدفاتر المؤجر؛ ودخل منتظم؛ مع خيار IAS 36 للمؤجرين العقاريين بالقيمة العادلة", red: true },
          },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Sale-and-leaseback: apply IFRS 15 to the sale FIRST — if the transfer is not a sale (or a repurchase clause exists), the whole deal is a financing. If it is a sale, the seller-lessee remeasures the retained ROU at the proportion of the previous carrying amount — any 'gain' is restricted to the rights actually transferred.",
          ar: "البيع وإعادة الإيجار: طبق IFRS 15 على البيع أولًا — فإن لم يكن نقلًا (أو وُجد شرط إعادة شراء) فالصفقة تمويل بأكملها. وإن كان بيعًا فأصل الاستخدام المُبقى يقاس بنسبة من القيمة الدفترية السابقة — ولا يُعترف من الربح إلا بقدر الحقوق المنتقلة فعلًا.",
        },
      },
    ],
  },

  {
    code: "IAS 41",
    title: { en: "Agriculture", ar: "الزراعة" },
    topic: "assets",
    effective: { en: "Effective 1 Jan 2003 · amended by IFRS 13 & IFRS 16", ar: "سارٍ من ١ يناير ٢٠٠٣ · معدل بـ IFRS 13 وIFRS 16" },
    blocks: [
      { kind: "h", text: { en: "Objective & the biological ladder", ar: "الهدف وسلم الأصول الحيوية" } },
      {
        kind: "p",
        text: {
          en: "Account for activity that manages the BIOLOGICAL TRANSFORMATION of living animals or plants: growth, degeneration, production and procreation. Three layers: biological assets (living) → produce at the point of harvest (grapes, milk) → then IAS 2 inventory takes over.",
          ar: "محاسبة النشاط الذي يدير التحول الحيوي للحيوانات والنباتات: نمو وتدهور وإنتاج وتكاثر. ثلاث طبقات: الأصول الحيوية (الحية) ← المنتجات وقت الحصاد (عنب، لبن) ← ثم يتولى المخزون وفق IAS 2.",
        },
      },
      {
        kind: "tree",
        root: { en: "The asset ladder", ar: "سلّم الأصول" },
        branches: [
          {
            when: { en: "Bearer plant (vines, fruit trees) — related IAS 16 amendment", ar: "نبات حامل (كروم، أشجار فاكهة) — بتعديل IAS 16" },
            then: { en: "PPE under IAS 16! (depreciate the vines; IAS 41 only for the produce growing on them)", ar: "ممتلكات وفق IAS 16! (تُهلك الأشجار؛ وIAS 41 للمنتج النامي عليها فقط)", red: true },
          },
          {
            when: { en: "Biological asset — living animal or plant (dairy cattle, sheep in growth)", ar: "أصل حيوي — حيوان أو نبات حي (أبقار حلوب، أغنام نامية)" },
            then: { en: "IAS 41: measure at FAIR VALUE LESS COSTS TO SELL at each reporting date — gains/losses → P&L", ar: "IAS 41: يقاس بالقيمة العادلة مخصومة تكاليف البيع كل فترة — وفروقها بالأرباح والخسائر", red: true },
          },
          {
            when: { en: "Produce AT THE POINT OF HARVEST", ar: "المنتج وقت الحصاد" },
            then: { en: "Measured at fair value less costs to sell AT HARVEST — that becomes IAS 2 COST when it enters inventory", ar: "يقاس بالقيمة العادلة الصافية وقت الحصاد — وتصير تلك تكلفة IAS 2 بدخوله المخزون", red: true },
          },
        ],
      },
      { kind: "h", text: { en: "Recognition & measurement", ar: "الاعتراف والقياس" } },
      {
        kind: "list",
        items: [
          { en: "Recognise a biological asset when the entity controls it, it is probable that future benefits flow, and the fair value or cost is reliably measurable", ar: "يعترف بالأصل الحيوي عند سيطرة المنشأة عليه وترجح تدفق المنافع وإمكان قياس القيمة العادلة أو التكلفة موثوقًا" },
          { en: "Bearer plants before the 2016 amendment are now PPE: cost accumulates until the plant matures, then depreciated over its life", ar: "النباتات الحاملة قبل تعديل ٢٠١٦ صارت ممتلكات: تتجمع التكلفة حتى النضج ثم تُهلك على عمرها" },
          { en: "If an active market exists for the biological asset at its location and condition, the LISTED market price is the best evidence of fair value", ar: "إن وُجدت سوق نشطة للأصل الحيوي في موقعه وحالته فالسعر المدرج أفضل دليل على القيمة العادلة" },
          { en: "Unconditional government grants for a biological asset → income WHEN the grant is receivable (conditional → when the conditions are met)", ar: "المنح الحكومية غير المشروطة للأصل الحيوي ← إيراد عند استحقاق المنحة (والمشروطة عند تحقق الشروط)" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "IAS 41 is the ONLY standard with mandatory fair value through P&L for non-financial assets at each reporting date — no cost model allowed unless fair value cannot be measured reliably at initial recognition (very rare, and never for a living animal).",
          ar: "IAS 41 المعيار الوحيد الملزم بالقيمة العادلة عبر الأرباح والخسائر لأصول غير مالية في كل فترة — ولا مجال لنموذج التكلفة إلا عند تعذر القياس الموثوق ابتداءً (نادر جدًا، ولا يحصل أبدًا لحيوان حي).",
        },
      },
    ],
  },
]
