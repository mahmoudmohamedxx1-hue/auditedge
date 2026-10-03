/** IAS 41 — Agriculture */

import type { Standard } from "../types"

export const IAS_41: Standard = {
  code: "IAS 41",
  title: { en: "Agriculture", ar: "الزراعة" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 2003 · amended by IFRS 13 & IFRS 16", ar: "سارٍ من ١ يناير ٢٠٠٣ · معدل بـ IFRS 13 وIFRS 16" },
  blocks: [
    { kind: "h", text: { en: "Objective & the agricultural trinity", ar: "الهدف وثلاثية الزراعة" } },
    {
      kind: "p",
      text: {
        en: "IAS 41 governs the LIVING side of agriculture: BIOLOGICAL ASSETS (living animals and plants — a sheep, an orange tree), AGRICULTURAL PRODUCE at the POINT OF HARVEST (the shorn wool, the picked oranges), and the related government grants. The single idea: measure biological assets at FAIR VALUE LESS COSTS TO SELL, and take every fair-value movement to P&L as it happens — growth, degeneration and price changes never wait for a sale.",
        ar: "يحكم IAS 41 الجانب الحي من الزراعة: الأصول الحيوية (الحيوانات والنباتات الحية — شجرة برتقال)، والمنتج الزراعي عند نقطة الحصاد (البرتقال المنتقى)، والمنح الحكومية المرتبطة. والفكرة الواحدة: تقاس الأصول الحيوية بالقيمة العادلة مطروحًا منها تكاليف البيع، وتمر كل حركة بالقيمة إلى الأرباح فورًا — فالنمو والتدهور وتغير الأسعار لا تنتظر بيعًا.",
      },
    },
    {
      kind: "tree",
      title: { en: "Scope — the bearable bearer amendment", ar: "النطاق — تعديل النباتات الحاملة" },
      root: { en: "What are you looking at?", ar: "ما الذي أمامك؟" },
      branches: [
        {
          when: { en: "CONSUMABLE biological asset (livestock for meat, annual crops) — the entity will harvest or slaughter it", ar: "أصل حيوي استهلاكي (مواش للحوم، محاصيل موسمية) — سيُحصد أو يُذبح" },
          then: { en: "IAS 41: FV−CTS at each reporting date, changes → P&L", ar: "IAS 41: القيمة العادلة ناقص التكاليف في كل تقرير وتغيراتها للأرباح", red: true },
        },
        {
          when: { en: "BEARER PLANT (a tree that bears fruit over more than one period: grapevines, oil palms, apple trees) — the LIVING PLANT itself", ar: "نبات حامل (شجرة تثمر أكثر من فترة: عنب، نخيل زيت، تفاح) — النبات الحي ذاته" },
          then: { en: "IAS 16 PPE! The 2016 amendment moved bearer plants OUT of IAS 41 — cost (or revaluation) + depreciation over productive life", ar: "ممتلكات IAS 16! تعديل ٢٠١٦ أخرج النباتات الحاملة — التكلفة (أو إعادة التقييم) مع الإهلاك عبر العمر الإنتاجي", red: true },
        },
        {
          when: { en: "PRODUCE GROWING ON a bearer plant (the grapes still on the vine)", ar: "منتج على نبات حامل (عنقود لم يُقطف بعد)" },
          then: { en: "STILL IAS 41: FV−CTS while it grows — until harvest, then IAS 2 takes over", ar: "يبقى IAS 41: العادلة ناقص التكاليف أثناء النمو — حتى الحصاد ثم يتولى IAS 2", red: true },
        },
        {
          when: { en: "Agricultural LAND — always outside IAS 41's measurement", ar: "أرض زراعية — خارج قياس IAS 41 دائمًا" },
          then: { en: "IAS 16 PPE or IAS 40 investment property (land with an indefinite life is never depreciated)", ar: "IAS 16 أو IAS 40 عقار استثماري (والأرض غير محددة العمر لا تهلك)", red: true },
        },
        {
          when: { en: "Post-harvest processing (wine-making, juice, wool-spinning) + intangibles (quotas, water rights)", ar: "معالجة بعد الحصاد (تعتيق نبيج، غزل صوف) وغير الملموسة (حصص، حقوق مياه)" },
          then: { en: "IAS 2 inventories / IAS 38 — IAS 41's story ends at the harvest gate", ar: "مخزون IAS 2 / IAS 38 — تنتهي قصة IAS 41 عند بوابة الحصاد", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Recognition & the fair-value rule", ar: "الاعتراف وقاعدة القيمة العادلة" } },
    {
      kind: "list",
      items: [
        { en: "Recognise a biological asset when: the entity CONTROLS it (past event — purchase or birth), it is PROBABLE that benefits flow, and the FAIR VALUE or cost is measurable reliably", ar: "يعترف بالأصل الحيوي عند: سيطرة المنشأة عليه (حدث ماضٍ — شراء أو ولادة)، وترجيح تدفق المنافع، وقابلية قياس العادلة أو التكلفة موثوقًا" },
        { en: "FV−CTS at INITIAL recognition AND at every reporting date — with the movement (Δ) recognised in P&L in the period it arises", ar: "العادلة ناقص التكاليف عند الاعتراف الأولي وفي كل تقرير — والفرق يُعترف به في الأرباح فور نشوئه" },
        { en: "COSTS TO SELL: the incremental costs of getting the asset to market — commissions, levies, transport to market EXCLUDED (only costs at the selling point count: the standard excludes transport & other costs of getting to market)", ar: "تكاليف البيع: التكاليف التضافية حتى السوق — عمولات ورسوم؛ وتُستبعد تكاليف النقل إلى السوق (لا تُعد إلا تكاليف نقطة البيع)" },
        { en: "A NEW-BORN animal enters at FV−CTS — the birth itself is a gain event; daily growth accretes through P&L", ar: "المولود الجديد يدخل بالعادلة ناقص التكاليف — فالولادة ذاتها حدث ربح، والنمو اليومي يتضخم عبر الأرباح" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The harvest equations", ar: "معادلات الحصاد" },
      lines: [
        { en: "Biological asset gain/loss = (FV−CTS at closing) − (FV−CTS at opening) − increases from purchases/births measured directly + sales/collections removed", ar: "ربح/خسارة الأصل الحيوي = (العادلة ناقص التكاليف ختاميًا) − (افتتاحيًا) − الإضافات المقيسة مباشرة + المخرجات" },
        { en: "At harvest: agricultural produce enters IAS 2 inventory AT ITS HARVEST-DATE FV−CTS — that becomes the inventory COST", ar: "عند الحصاد: يدخل المنتج مخزون IAS 2 بالقيمة العادلة ناقص التكاليف بتاريخ الحصاد — فتصبح تكلفة المخزون" },
        { en: "Harvest gain already recognised as biological-asset movement during growth — NO separate harvest profit again", ar: "ربح النمو اعتُرف أثناء النمو ضمن حركة الأصل — فلا ربح حصاد مرة ثانية" },
        { en: "Subsequent processing costs join the inventory per IAS 2 (conversion costs)", ar: "تكاليف المعالجة اللاحقة تنضم للمخزون وفق IAS 2 (تكاليف تحويل)" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The herd entries", ar: "قيود القطيع" },
      rows: [
        { dr: { en: "Biological assets (FV−CTS at birth/purchase)", ar: "أصول حيوية (العادلة ناقص التكاليف عند الولادة/الشراء)" }, cr: { en: "Cash / payables · P&L — gain on births", ar: "نقد/دائنون · أرباح — ربح الولادات" } },
        { dr: { en: "Biological assets (growth & price accretion)", ar: "أصول حيوية (نمو وارتفاع أسعار)" }, cr: { en: "Fair-value gain (P&L)", ar: "مكسب القيمة العادلة (بالأرباح)" }, red: true },
        { dr: { en: "Inventory — agricultural produce (harvest-date FV−CTS)", ar: "مخزون — منتج زراعي (العادلة ناقص التكاليف وقت الحصاد)" }, cr: { en: "Biological assets (transfer out)", ar: "أصول حيوية (تحويل خارج)" }, red: true },
        { dr: { en: "Cash (sale)", ar: "نقد (بيع)" }, cr: { en: "Inventory — cost of produce sold · P&L margin as revenue less cost", ar: "مخزون — تكلفة المبيع · وفرق الإيراد والتكلفة بالأرباح" } },
      ],
    },
    {
      kind: "example",
      title: { en: "A year in the flock", ar: "سنة مع القطيع" },
      lines: [
        { en: "Sheep flock: opening FV−CTS 50,000 · lambs born (FV−CTS at birth) 8,000 · growth during the year 12,000 · FV falls (market) −5,000 · sold for 20,000 (carrying at sale 18,500)", ar: "قطيع: افتتاحي ٥٠٬٠٠٠ · حملان مولودة ٨٬٠٠٠ · نمو ١٢٬٠٠٠ · هبوط سوقي ٥٬٠٠٠− · بيع بـ٢٠٬٠٠٠ (دفتريتها عند البيع ١٨٬٥٠٠)" },
        { en: "P&L: gain on births 8,000 + growth 12,000 − FV decline 5,000 + sale profit 1,500 = 16,500", ar: "الأرباح: ربح ولادات ٨٬٠٠٠ + نمو ١٢٬٠٠٠ − هبوط ٥٬٠٠٠ + ربح بيع ١٬٥٠٠ = ١٦٬٥٠٠" },
        { en: "Wool shorn (produce) at harvest FV−CTS 6,000 → inventory at 6,000 — the shearing gain already rode the biological-asset movements", ar: "صوف مجزوز بالعادلة ناقص التكاليف ٦٬٠٠٠ ← مخزون بـ٦٬٠٠٠ — وربح الجز قد مرّ ضمن حركات الأصل الحيوي" },
        { en: "Bearer-plant twist: the sheep's pastureland → IAS 16; a dairy cow (bearer — milked for years) → IAS 16 too; the milk → IAS 41 until collected!", ar: "التواء النباتات الحاملة: المرعى ← IAS 16؛ والبقرة الحلوب (حاملة) ← IAS 16 أيضًا؛ أما اللبن ← IAS 41 حتى الحلب" },
      ],
    },
    { kind: "h", text: { en: "The reliability escape hatch", ar: "مخرج الموثوقية" } },
    {
      kind: "p",
      text: {
        en: "If the active market quotations are UNAVAILABLE and the alternative estimates (recent market transactions, sector benchmarks, present values of cash flows) are clearly unreliable, IAS 41 permits the biological asset at COST − accumulated depreciation − accumulated impairment UNTIL the fair value becomes measurable — rare, but tested. Disclose WHY the escape applied.",
        ar: "إذا انتفت عروض السوق النشطة وبان أن البدائل (معاملات سوق حديثة، معايير قطاعية، قيم حالية للتدفقات) غير موثوقة بوضوح، أجاز IAS 41 قياس الأصل الحيوي بالتكلفة − مجمع الإهلاك − مجمع الانخفاض إلى أن تتيسر العادلة — حالة نادرة لكنها امتحانية. وأفصح عن سبب الاستخدام.",
      },
    },
    { kind: "h", text: { en: "Government grants — the IAS 20 override", ar: "المنح الحكومية — تجاوز IAS 20" } },
    {
      kind: "tree",
      root: { en: "Grant related to biological assets (measured at FV−CTS)", ar: "منحة متعلقة بأصل حيوي (مقاس بالعادلة ناقص التكاليف)" },
      branches: [
        {
          when: { en: "UNCONDITIONAL — no attached conditions requiring future activity", ar: "غير مشروطة — بلا شروط تلزم بنشاط مستقبلي" },
          then: { en: "Income in P&L WHEN the grant is RECEIVABLE — no deferral, no IAS 20 spreading", ar: "دخل بالأرباح عند قابلية القبض — دون تأجيل ودون توزيع IAS 20", red: true },
        },
        {
          when: { en: "CONDITIONAL (conditions remain: serve 5 years, produce N litres, no sale within X)", ar: "مشروطة (شروط باقية: خدمة ٥ سنوات، إنتاج كمية، عدم بيع)" },
          then: { en: "Recognise as income ONLY when the conditions are MET — IAS 20's deferred-income route also opens; repayment duties restore the liability", ar: "دخل عند استيفاء الشروط فقط — ويفتح مسار الدخل المؤجل وفق IAS 20؛ وواجب الرد يستعيد الالتزام", red: true },
        },
        {
          when: { en: "Grant related to a BEARER PLANT (IAS 16 territory)", ar: "منحة لنبات حامل (أرض IAS 16)" },
          then: { en: "IAS 20 normal rules apply — deduct from cost or defer as income", ar: "تطبق قواعد IAS 20 — خصم من التكلفة أو تأجيل كدخل", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Disclosure essentials", ar: "أساسيات الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "The gain/loss for the period with its SPLIT: physical change (growth/degeneration) vs PRICE change — the analysis users demand", ar: "الربح/الخسارة للفترة مفصولًا: التغير المادي (نمو/تدهور) مقابل تغير السعر" },
        { en: "Reconciliation of the change in carrying amounts: purchases, births, sales, harvest transfers, FV movements, FX (a living rollforward)", ar: "تسوية تغير القيم الدفترية: شراء، ولادة، بيع، تحويلات حصاد، حركات عادلة، فروق عملة" },
        { en: "Grouping of biological assets (consumable vs bearer-linked, mature vs immature) + the measurement methods & key assumptions (yield, price curves, discounting of young herds)", ar: "تجميع الأصول الحيوية (استهلاكية مقابل مرتبطة بحاملة، ناضجة مقابل غير ناضجة) وطرق القياس وافتراضاتها" },
        { en: "Restrictions, commitments & security interests over the assets; the nature of activities per group", ar: "القيود والتعهدات وحقوق الرهن على الأصول؛ وطبيعة الأنشطة لكل مجموعة" },
        { en: "Grants: the nature, unmet conditions, and amounts expected/recognised; the FV-relief escape-hatch explanations", ar: "المنح: طبيعتها وشروطها غير المستوفاة والمقادير؛ وشرح مخرج الموثوقية" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Bearer vs consumable is the highest-yield IAS 41 mark: the TREE is IAS 16, the FRUIT is IAS 41, the HARVESTED fruit is IAS 2 — three standards on one orchard. Draw the orchard and label it.",
        ar: "أعلى مرداد في IAS 41: الحاملة مقابل الاستهلاكية — الشجرة IAS 16 والثمرة IAS 41 والثمرة المحصودة IAS 2: ثلاثة معايير في بستان واحد. ارسم البستان وسمِّه.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Harvest-date FV−CTS becomes the produce's COST — so a strawberry crop's winter glasshouse costs belong to the biological-asset measurement while growing, then freeze into inventory at harvest; post-harvest cold storage is an IAS 2 cost, never a 'biological' cost.",
        ar: "العادلة ناقص التكاليف وقت الحصاد تصبح تكلفة المنتج — فتكاليف البيوت المحمية تنضم لقياس الأصل أثناء النمو ثم تتجمد في المخزون عند الحصاد؛ والتخزين المبرد لاحقًا تكلفة IAS 2 لا تكلفة حيوية.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Terminology: 'costs to sell' INCLUDES broker commissions and levies and EXCLUDES transport to market — counter-intuitive; IAS 41 explicitly notes transport is not a cost to sell.",
        ar: "المصطلح: «تكاليف البيع» تشمل عمولات السماسرة والرسوم وتستبعد النقل إلى السوق — وهو عكس أغلب التصورات؛ يذكر IAS 41 صراحة أن النقل ليس من تكاليف البيع.",
      },
    },
  ],
}
