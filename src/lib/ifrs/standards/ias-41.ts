/** IAS 41 — Agriculture */

import type { Standard } from "../types"

export const IAS_41: Standard = {
  code: "IAS 41",
  title: { en: "Agriculture", ar: "الزراعة" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 2003 · amended by IFRS 13 & IFRS 16", ar: "سارٍ من ١ يناير ٢٠٠٣ · معدل بـ IFRS 13 وIFRS 16" },
  blocks: [
    {
      kind: "p",
      text: {
        en: "IAS 41 governs the LIVING side of agriculture: BIOLOGICAL ASSETS (living animals and plants — a sheep, a tree), AGRICULTURAL PRODUCE at the POINT OF HARVEST (the shorn wool, the picked fruit), and the related government grants. The single idea: measure living assets at FAIR VALUE LESS COSTS TO SELL and take every fair-value movement to P&L as it happens — growth, degeneration and price change never wait for a sale.",
        ar: "يحكم IAS 41 الجانب الحي من الزراعة: الأصول الحيوية (الحيوانات والنباتات الحية — شاة، شجرة)، والمنتج الزراعي عند نقطة الحصاد (الصوف المجزوز، الثمرة المنتقاة)، والمنح الحكومية المرتبطة. والفكرة الواحدة: تقاس الأصول الحية بالقيمة العادلة مطروحًا منها تكاليف البيع، وتمر كل حركة بالقيمة إلى الأرباح فور حدوثها — فالنمو والتدهور وتغير الأسعار لا تنتظر بيعًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The boundary is LIFE: living → IAS 41; harvested (picked / slaughtered) → IAS 2 from the harvest gate; bearer PLANTS are the one living exception (IAS 16 since the 2016 amendment).",
        ar: "الحد هو الحياة: الحي ← IAS 41؛ والمحصود (المقطوف/المذبوح) ← IAS 2 من بوابة الحصاد؛ والنباتات الحاملة هي الاستثناء الحي الوحيد (IAS 16 منذ تعديل ٢٠١٦).",
      },
    },
    { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
    {
      kind: "p",
      text: {
        en: "Objective — prescribe the accounting for agricultural activity: managing the biological transformation of living animals and plants (growth, degeneration, procreation) and the initial recognition of agricultural produce at harvest. The fair-value engine answers two questions at once — the asset's carrying amount AND the period's gain: biological profit is earned by GROWING, not by selling, so income appears before any invoice exists.",
        ar: "الهدف — تحديد المحاسبة عن النشاط الزراعي: إدارة التحول الحيوي للحيوانات والنباتات الحية (نمو وتدهور وتوالد) والاعتراف الأولي بالمنتج الزراعي عند الحصاد. ويجيب محرك القيمة العادلة عن سؤالين معًا — القيمة الدفترية للأصل وربح الفترة: فالربح الحيوي يُكتسب بالنمو لا بالبيع، فيظهر الدخل قبل أن توجد فاتورة أصلًا.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Land related to agricultural activity → IAS 16 PPE or IAS 40 (investment property); never measured by IAS 41", ar: "الأرض المرتبطة بالنشاط الزراعي ← IAS 16 أو IAS 40 (عقار استثماري)؛ ولا يقيسها IAS 41 أبدًا" },
        { en: "Bearer plants (vines, palms, fruit trees — the living plant itself) → IAS 16 since the 2016 amendment", ar: "النباتات الحاملة (الكرم، النخيل، أشجار الفاكهة — النبات الحي ذاته) ← IAS 16 منذ تعديل ٢٠١٦" },
        { en: "Produce growing ON a bearer plant (grapes on the vine) → IAS 41 until harvest", ar: "المنتج النامي على نبات حامل (عنب على الكرمة) ← IAS 41 حتى الحصاد" },
        { en: "Bearer ANIMALS (dairy cattle, breeding ewes) → STAY in IAS 41 — the 2016 amendment moved PLANTS only", ar: "الحيوانات الحاملة (أبقار الحليب، نعاج التوالد) ← تبقى في IAS 41 — فتعديل ٢٠١٦ نقل النباتات فقط" },
        { en: "Post-harvest processing (wine-making, juice, spinning) → IAS 2 conversion costs", ar: "المعالجة بعد الحصاد (تعتيق، عصائر، غزل) ← تكاليف تحويل IAS 2" },
        { en: "Intangibles (quotas, water rights, marketing rights) → IAS 38; grants → the IAS 41/IAS 20 machinery below", ar: "غير الملموسة (حصص، حقوق مياه، حقوق تسويق) ← IAS 38؛ والمنح ← آلية IAS 41/IAS 20 أدناه" },
      ],
    },
    { kind: "h", text: { en: "Key definitions", ar: "التعريفات الرئيسة" } },
    {
      kind: "list",
      items: [
        { en: "Biological asset: a LIVING animal or plant", ar: "الأصل الحيوي: حيوان أو نبات حي" },
        { en: "Agricultural produce: the harvested product of the entity's biological assets", ar: "المنتج الزراعي: المنتج المحصود من أصول المنشأة الحيوية" },
        { en: "Bearer plant: a plant used in production/supply of agricultural produce, expected to bear produce for MORE THAN ONE period, with only a remote likelihood of being sold as produce except as incidental scrap", ar: "النبات الحامل: نبات يُستخدم في إنتاج أو توريد منتج زراعي، ويُتوقع إثماره أكثر من فترة واحدة، واحتمال بيعه منتجًا زراعيًا بعيد إلا بيعًا عرضيًا للخردة" },
        { en: "Costs to sell: the INCREMENTAL costs directly attributable to disposing of the asset (commissions, levies at the selling point) — transport to market EXCLUDED", ar: "تكاليف البيع: التكاليف التضافية المرتبطة مباشرة بتخرد الأصل (عمولات ورسوم عند نقطة البيع) — والنقل إلى السوق مستبعد" },
        { en: "Harvest: the detachment of produce from a biological asset or the cessation of an animal's biological processes", ar: "الحصاد: انفصال المنتج عن الأصل الحيوي أو توقف العمليات الحيوية للحيوان" },
        { en: "Biological transformation: growth, degeneration, and procreation — the three engines the standard measures", ar: "التحول الحيوي: نمو وتدهور وتوالد — المحركات الثلاثة التي يقيسها المعيار" },
      ],
    },
    { kind: "h", text: { en: "The agricultural trinity — scope tree", ar: "ثلاثية الزراعة — شجرة النطاق" } },
    {
      kind: "tree",
      root: { en: "What are you looking at?", ar: "ما الذي أمامك؟" },
      branches: [
        {
          when: { en: "CONSUMABLE biological asset (livestock for meat, annual crops) — the entity will harvest or slaughter it", ar: "أصل حيوي استهلاكي (مواش للحوم، محاصيل موسمية) — سيُحصد أو يُذبح" },
          then: { en: "IAS 41: FV−CTS at each reporting date, changes → P&L", ar: "IAS 41: القيمة العادلة ناقص التكاليف في كل تقرير وتغيراتها للأرباح", red: true },
        },
        {
          when: { en: "BEARER PLANT (a tree that bears fruit over more than one period: grapevines, oil palms, apple trees) — the LIVING PLANT itself", ar: "نبات حامل (شجرة تثمر أكثر من فترة: كرم، نخيل زيت، تفاح) — النبات الحي ذاته" },
          then: { en: "IAS 16 PPE! The 2016 amendment moved bearer plants OUT of IAS 41 — cost (or revaluation) + depreciation over the productive life", ar: "ممتلكات IAS 16! تعديل ٢٠١٦ أخرج النباتات الحاملة — التكلفة (أو إعادة التقييم) مع الإهلاك عبر العمر الإنتاجي", red: true },
        },
        {
          when: { en: "PRODUCE GROWING ON a bearer plant (the grapes still on the vine)", ar: "منتج نامٍ على نبات حامل (عنقود لم يُقطف بعد)" },
          then: { en: "STILL IAS 41: FV−CTS while it grows — until harvest, then IAS 2 takes over", ar: "يبقى IAS 41: العادلة ناقص التكاليف أثناء النمو — حتى الحصاد ثم يتولى IAS 2", red: true },
        },
        {
          when: { en: "A bearer ANIMAL (a dairy cow milked for years)", ar: "حيوان حامل (بقرة حلوب تُحلب سنين)" },
          then: { en: "IAS 41 keeps it at FV−CTS — the 2016 amendment moved bearer PLANTS only, never animals", ar: "يُبقيه IAS 41 بالعادلة ناقص التكاليف — فتعديل ٢٠١٦ نقل النباتات الحاملة فقط لا الحيوانات أبدًا", red: true },
        },
        {
          when: { en: "Agricultural LAND", ar: "أرض زراعية" },
          then: { en: "IAS 16 PPE or IAS 40 investment property (land with an indefinite life is never depreciated)", ar: "IAS 16 أو IAS 40 عقار استثماري (والأرض غير محددة العمر لا تهلك)", red: true },
        },
        {
          when: { en: "Post-harvest processing (wine-making, juice, wool-spinning) + intangibles (quotas, water rights)", ar: "معالجة بعد الحصاد (تعتيق نبيذ، غزل صوف) وغير الملموسة (حصص، حقوق مياه)" },
          then: { en: "IAS 2 inventories / IAS 38 — IAS 41's story ends at the harvest gate", ar: "مخزون IAS 2 / IAS 38 — تنتهي قصة IAS 41 عند بوابة الحصاد", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Biological transformation has three engines: GROWTH (the animal fattens, the crop ripens), DEGENERATION (ageing, disease), and PROCREATION (births, new planting). The fair-value machinery records each engine's effect in P&L as it works: a newborn calf is income at birth (measured at FV−CTS), daily weight-gain is income, and an epidemic's toll is a loss in the period it strikes. Selling is merely a change from one asset to cash at a value already on the books.",
        ar: "للتحول الحيوي ثلاثة محركات: النمو (تسمين الحيوان ونضج المحصول)، والتدهور (هرم ومرض)، والتوالد (ولادات وزراعة جديدة). وتسجل آلية القيمة العادلة أثر كل محرك في الأرباح أثناء عمله: فالعجل المولود دخلٌ لحظة ولادته (بالعادلة ناقص التكاليف)، والزيادة اليومية في الوزن دخل، وضربة الوباء خسارة في فترتها. والبيع مجرد تحول من أصل إلى نقد بقيمة مسجلة أصلًا بالدفاتر.",
      },
    },
    { kind: "h", text: { en: "Recognition — when a living asset qualifies", ar: "الاعتراف — متى يحقق الأصل الحي الشروط" } },
    {
      kind: "list",
      items: [
        { en: "Recognise a biological asset when: the entity CONTROLS it (past event — purchase or birth), it is PROBABLE that benefits flow, and the FAIR VALUE or cost is measurable reliably", ar: "يعترف بالأصل الحيوي عند: سيطرة المنشأة عليه (حدث ماضٍ — شراء أو ولادة)، وترجيح تدفق المنافع، وقابلية قياس العادلة أو التكلفة موثوقًا" },
        { en: "FV−CTS at INITIAL recognition AND at every reporting date — with the movement (Δ) recognised in P&L in the period it arises", ar: "العادلة ناقص التكاليف عند الاعتراف الأولي وفي كل تقرير — والفرق يُعترف به في الأرباح فور نشوئه" },
        { en: "A NEW-BORN animal enters at FV−CTS — the birth itself is a gain event; daily growth accretes through P&L", ar: "المولود الجديد يدخل بالعادلة ناقص التكاليف — فالولادة ذاتها حدث ربح، والنمو اليومي يتضخم عبر الأرباح" },
        { en: "A PURCHASED animal enters at cost — presumed equal to FV−CTS at recognition, so no gain on buying", ar: "الحيوان المشتري يدخل بالتكلفة — مفترضة معادلة للعادلة ناقص التكاليف عند الاعتراف، فلا ربح بالشراء" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Initial recognition captures the moment of control: purchase, birth, or the planting the entity controls. Costs of MATURING the asset (feed, veterinary care, fertiliser) are expensed as incurred — under the FV model the market's verdict replaces cost accumulation, so each period's profit is the fair-value movement net of those running costs. The balance sheet grows by appreciation, not by accumulation.",
        ar: "يلتقط الاعتراف الأولي لحظة السيطرة: شراء أو ولادة أو زراعة تسيطر عليها المنشأة. وتكاليف الإنضاج (أعلاف وبيطرة وأسمدة) مصروفات عند تكبدها — ففي نموذج القيمة العادلة يحل حكم السوق محل تراكم التكاليف، ويكون ربح كل فترة هو حركة العادلة صافيةً تلك التكاليف الجارية. فالميزانية تنمو بالارتفاع لا بالتراكم.",
      },
    },
    { kind: "h", text: { en: "Measurement — fair value less costs to sell", ar: "القياس — القيمة العادلة ناقص تكاليف البيع" } },
    {
      kind: "p",
      text: {
        en: "Fair-value hierarchy for the living: an ACTIVE MARKET's quoted price is the best evidence (adjust for the asset's condition and location — a sick ewe is not the market lot's twin); otherwise a recent market transaction, sector benchmarks (beef prices per kg by class), or sector budgets discounted where the growth cycle is long (young timber). The fair value is the MARKET's — in the asset's present location and condition, stripped of the entity's own intentions.",
        ar: "تسلسل القيمة العادلة للأحياء: سعر معلن في سوق نشطة هو أفضل دليل (مع تعديل حالة الأصل وموقعه — فالنعجة المريضة ليست توأم وحدة السوق)؛ وإلا فمعاملة سوق حديثة، أو معايير قطاعية (أسعار اللحوم بالكيلو لكل فئة)، أو موازنات قطاعية مخصومة حين يطول دورة النمو (أخشاب فتية). والقيمة العادلة قيمة السوق — بموقع الأصل وحالته الراهنين، مجردةً من نوايا المنشأة ذاتها.",
      },
    },
    {
      kind: "formula",
      title: { en: "The living asset & harvest equations", ar: "معادلات الأصل الحي والحصاد" },
      lines: [
        { en: "Biological asset at every date = FAIR VALUE − COSTS TO SELL (commissions and levies at the selling point; transport to market EXCLUDED)", ar: "الأصل الحيوي في كل تاريخ = القيمة العادلة − تكاليف البيع (عمولات ورسوم عند نقطة البيع؛ والنقل إلى السوق مستبعد)" },
        { en: "P&L movement = closing FV−CTS − opening FV−CTS − purchases/births measured directly + carrying amount of disposals removed", ar: "حركة الأرباح = الختامي − الافتتاحي − مشتريات/ولادات مقيسة مباشرة + دفترية المتخردات" },
        { en: "At harvest: produce measured at its HARVEST-DATE FV−CTS — that number becomes the IAS 2 inventory COST", ar: "عند الحصاد: يقاس المنتج بالعادلة ناقص التكاليف بتاريخ الحصاد — ويصبح هذا الرقم تكلفة مخزون IAS 2" },
        { en: "Bearer plant (IAS 16): carrying = cost − accumulated depreciation − impairment, depreciated over the productive life", ar: "النبات الحامل (IAS 16): الدفترية = التكلفة − مجمع الإهلاك − الانخفاض، مُهلكًا عبر العمر الإنتاجي" },
      ],
    },
    { kind: "h", text: { en: "Journal entries — the herd lifecycle", ar: "قيود اليومية — دورة حياة القطيع" } },
    {
      kind: "journal",
      title: { en: "Getting assets onto the books", ar: "إدخال الأصول إلى الدفاتر" },
      rows: [
        { dr: { en: "Biological assets (newborns at FV−CTS 8,000)", ar: "أصول حيوية (مواليد بالعادلة ناقص التكاليف ٨٬٠٠٠)" }, cr: { en: "P&L — gain on births 8,000", ar: "الأرباح — ربح الولادات ٨٬٠٠٠" }, red: true },
        { dr: { en: "Biological assets (purchase at FV−CTS)", ar: "أصول حيوية (شراء بالعادلة ناقص التكاليف)" }, cr: { en: "Cash — cost presumed equal to FV−CTS: NO gain on buying", ar: "النقد — التكلفة مفترضة معادلة للعادلة ناقص التكاليف: لا ربح بالشراء" }, red: true },
        { dr: { en: "Biological assets (growth & price accretion)", ar: "أصول حيوية (نمو وارتفاع أسعار)" }, cr: { en: "Fair-value gain (P&L)", ar: "مكسب القيمة العادلة (بالأرباح)" }, red: true },
        { dr: { en: "Cash (sale 20,000)", ar: "النقد (بيع ٢٠٠٠٠)" }, cr: { en: "Biological assets (carrying at sale 18,500) + gain on sale 1,500", ar: "أصول حيوية (الدفترية عند البيع ١٨٬٥٠٠) + ربح بيع ١٬٥٠٠" } },
      ],
    },
    {
      kind: "journal",
      title: { en: "The harvest & sale entries", ar: "قيود الحصاد والبيع" },
      rows: [
        { dr: { en: "Inventory — agricultural produce (harvest-date FV−CTS)", ar: "مخزون — منتج زراعي (العادلة ناقص التكاليف وقت الحصاد)" }, cr: { en: "Biological assets (transfer out)", ar: "أصول حيوية (تحويل خارج)" }, red: true },
        { dr: { en: "Inventory (conversion costs — cold storage, grading)", ar: "مخزون (تكاليف تحويل — تخزين مبرد وفرز)" }, cr: { en: "Cash / payables", ar: "نقد / دائنون" } },
        { dr: { en: "Cash (sale of produce 108,000)", ar: "النقد (بيع المنتج ١٠٨٬٠٠٠)" }, cr: { en: "Revenue 108,000", ar: "إيراد ١٠٨٬٠٠٠" } },
        { dr: { en: "Cost of produce sold (IAS 2) 105,000", ar: "تكلفة المنتج المبيع (IAS 2) ١٠٥٬٠٠٠" }, cr: { en: "Inventory 105,000 — an ordinary IAS 2 margin", ar: "مخزون ١٠٥٬٠٠٠ — هامش IAS 2 اعتيادي" } },
      ],
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
          then: { en: "IAS 20 normal rules apply — deduct from cost or defer as income", ar: "تطبق قواعد IAS 20 الاعتيادية — خصم من التكلفة أو تأجيل كدخل", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The override has a logic: grants tied to a FAIR-VALUED living asset are measured in the same currency (fair value), so the old matching idea dies — an unconditional grant is income the moment it is receivable. Grants related to bearer plants (IAS 16 territory) revert to IAS 20's deferred machinery, and a grant whose conditions remain unmet is NOT income until they are met.",
        ar: "للتجاوز منطق: المنح المرتبطة بأصل حي مقاس بالقيمة العادلة تقاس بالعملة ذاتها (العادلة)، فيموت مبدأ المقابلة القديم — فالمنحة غير المشروطة دخل لحظة قابليتها للقبض. ومنح النباتات الحاملة (أرض IAS 16) ترجع لآلية التأجيل في IAS 20، والمنحة التي لم تُستوف شروطها ليست دخلًا بعد.",
      },
    },
    {
      kind: "journal",
      title: { en: "Grant entries — immediate vs conditional", ar: "قيود المنح — الفوري مقابل المشروط" },
      rows: [
        { dr: { en: "Grant receivable", ar: "منحة مستحقة" }, cr: { en: "Grant income (P&L) — unconditional, receivable now", ar: "دخل المنحة (بالأرباح) — غير مشروطة وقابلة للقبض الآن" }, red: true },
        { dr: { en: "Cash", ar: "النقد" }, cr: { en: "Deferred income — conditional grant received", ar: "دخل مؤجل — منحة مشروطة مقبوضة" }, red: true },
        { dr: { en: "Deferred income", ar: "دخل مؤجل" }, cr: { en: "Grant income (P&L) — as conditions are met", ar: "دخل المنحة (بالأرباح) — عند استيفاء الشروط" } },
        { dr: { en: "Deferred income", ar: "دخل مؤجل" }, cr: { en: "Cash — repayment when conditions fail", ar: "النقد — الرد عند إخفاق الشروط" } },
      ],
    },
    { kind: "h", text: { en: "Harvest — the gate to IAS 2", ar: "الحصاد — البوابة إلى IAS 2" } },
    {
      kind: "steps",
      items: [
        { en: "DETACH the produce (pick, shear, slaughter) — the biological processes end", ar: "افصل المنتج (اقطف، اجزُ، اذبح) — تنتهي العمليات الحيوية" },
        { en: "MEASURE the harvested produce at its FV−CTS at the harvest date", ar: "قِس المنتج المحصود بعادلته ناقص التكاليف بتاريخ الحصاد" },
        { en: "TRANSFER: that FV−CTS becomes the IAS 2 inventory COST (dr Inventory / cr Biological assets)", ar: "حوّل: تلك العادلة ناقص التكاليف تغدو تكلفة مخزون IAS 2 (من ح/ المخزون إلى ح/ الأصول الحيوية)" },
        { en: "Post-harvest spend (storage, processing, packaging) joins the inventory as IAS 2 conversion costs", ar: "إنفاق ما بعد الحصاد (تخزين ومعالجة وتغليف) ينضم للمخزون كتكاليف تحويل IAS 2" },
        { en: "SALE of the produce is an ordinary IAS 2 sale — revenue less inventory cost, no second 'biological' gain", ar: "بيع المنتج بيع IAS 2 اعتيادي — إيراد مقابل تكلفة مخزون، بلا ربح «حيوي» ثانٍ" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "No harvest profit is booked twice: the gain earned while the produce grew has already ridden the biological-asset movement lines, so the transfer to inventory happens at a value the P&L has already seen. Post-harvest costs — cold storage, processing, packaging — are IAS 2 conversion costs, never 'biological' costs; the boundary question (was the cost incurred before or after detachment?) decides the line.",
        ar: "لا يُعترف بربح الحصاد مرتين: فالربح المكتسب أثناء نمو المنتج مرّ سابقًا بخطوط حركة الأصل الحيوي، فيجري التحويل إلى المخزون بقيمة رأتها الأرباح بالفعل. وتكاليف ما بعد الحصاد — التخزين المبرد والمعالجة والتغليف — تكاليف تحويل IAS 2 لا تكاليف «حيوية» أبدًا؛ وسؤال الحدود (أُنفقت التكلفة قبل الانفصال أم بعده؟) يحدد السطر.",
      },
    },
    {
      kind: "example",
      title: { en: "A year in the flock", ar: "سنة مع القطيع" },
      lines: [
        { en: "Sheep flock: opening FV−CTS 50,000 · lambs born (FV−CTS at birth) 8,000 · growth during the year 12,000 · FV falls (market) −5,000 · sold for 20,000 (carrying at sale 18,500)", ar: "قطيع: افتتاحي ٥٠٬٠٠٠ · حملان مولودة ٨٬٠٠٠ · نمو ١٢٬٠٠٠ · هبوط سوقي ٥٬٠٠٠− · بيع بـ٢٠٬٠٠٠ (دفتريتها عند البيع ١٨٬٥٠٠)" },
        { en: "P&L: gain on births 8,000 + growth 12,000 − FV decline 5,000 + sale profit 1,500 = 16,500", ar: "الأرباح: ربح ولادات ٨٬٠٠٠ + نمو ١٢٬٠٠٠ − هبوط ٥٬٠٠٠ + ربح بيع ١٬٥٠٠ = ١٦٬٥٠٠" },
        { en: "Wool shorn (produce) at harvest FV−CTS 6,000 → inventory at 6,000 — the shearing gain already rode the biological-asset movements", ar: "صوف مجزوز بالعادلة ناقص التكاليف ٦٬٠٠٠ ← مخزون بـ٦٬٠٠٠ — وربح الجز قد مرّ ضمن حركات الأصل الحيوي" },
        { en: "Bearer-plant twist: the sheep's pastureland → IAS 16; a dairy cow (a bearer ANIMAL) → STAYS in IAS 41 at FV−CTS — only bearer PLANTS moved to IAS 16; and the milk → IAS 41 until collected, then IAS 2", ar: "التواء الحوامل: مرعى الأغنام ← IAS 16؛ والبقرة الحلوب (حيوان حامل) ← تبقى في IAS 41 بالعادلة ناقص التكاليف — فتعديل ٢٠١٦ نقل النباتات فقط؛ واللبن ← IAS 41 حتى الحلب ثم IAS 2" },
      ],
    },
    {
      kind: "example",
      title: { en: "The orchard — bearer plants plus produce", ar: "البستان — نباتات حاملة ومنتج" },
      lines: [
        { en: "Orchard: 1,000 apple trees (bearer plants) planted at cost 500,000; 20-year productive life → IAS 16: no depreciation while immature; from the first crop, 25,000 a year", ar: "بستان: ١٬٠٠٠ شجرة تفاح (نباتات حاملة) زُرعت بتكلفة ٥٠٠٬٠٠٠؛ عمر إنتاجي ٢٠ سنة ← IAS 16: لا إهلاك قبل النضج، ثم ٢٥٬٠٠٠ سنويًا من أول محصول" },
        { en: "Apples growing at the reporting date: FV−CTS 90,000 → IAS 41 asset; at harvest the apples measure 100,000 → harvest-period gain 10,000 (90,000 → 100,000)", ar: "تفاح نامٍ بتاريخ التقرير: عادلة ناقص تكاليف ٩٠٬٠٠٠ ← أصل IAS 41؛ وعند الحصاد يقاس التفاح ١٠٠٬٠٠٠ ← مكسب فترة الحصاد ١٠٬٠٠٠ (من ٩٠٬٠٠٠ إلى ١٠٠٬٠٠٠)" },
        { en: "Harvest entry: dr Inventory (IAS 2) 100,000 / cr Biological assets (produce) 100,000 — the 100,000 is now the inventory cost", ar: "قيد الحصاد: من ح/ مخزون (IAS 2) ١٠٠٬٠٠٠ إلى ح/ أصول حيوية (المنتج) ١٠٠٬٠٠٠ — فالـ١٠٠٬٠٠٠ هي الآن تكلفة المخزون" },
        { en: "Cold storage and grading 5,000 → IAS 2 conversion costs; sold for 108,000 → IAS 2 margin 3,000 (108,000 − 100,000 − 5,000)", ar: "التخزين المبرد والفرز ٥٬٠٠٠ ← تكاليف تحويل IAS 2؛ والبيع بـ١٠٨٬٠٠٠ ← هامش IAS 2 قدره ٣٬٠٠٠ (١٠٨٬٠٠٠ − ١٠٠٬٠٠٠ − ٥٬٠٠٠)" },
      ],
    },
    { kind: "h", text: { en: "The reliability escape hatch", ar: "مخرج الموثوقية" } },
    {
      kind: "p",
      text: {
        en: "If active-market quotations are UNAVAILABLE and the alternative estimates (recent market transactions, sector benchmarks, present values of cash-flow budgets) are clearly unreliable, IAS 41 permits the biological asset at COST − accumulated depreciation − accumulated impairment UNTIL the fair value becomes measurable — rare, but tested. Disclose WHY the escape applied.",
        ar: "إذا انتفت عروض السوق النشطة وبان أن البدائل (معاملات سوق حديثة، معايير قطاعية، قيم حالية لموازنات التدفقات) غير موثوقة بوضوح، أجاز IAS 41 قياس الأصل الحيوي بالتكلفة − مجمع الإهلاك − مجمع الانخفاض إلى أن تتيسر العادلة — حالة نادرة لكنها امتحانية. وأفصح عن سبب الاستخدام.",
      },
    },
    {
      kind: "tree",
      root: { en: "Can the fair value be measured reliably?", ar: "هل يمكن قياس القيمة العادلة موثوقًا؟" },
      branches: [
        {
          when: { en: "Active market price or dependable estimate exists", ar: "يوجد سعر سوق نشطة أو تقدير معتمد" },
          then: { en: "Measure at FV−CTS at INITIAL recognition AND each reporting date; movements → P&L", ar: "القياس بالعادلة ناقص التكاليف عند الاعتراف الأولي وفي كل تقرير؛ والحركات للأرباح", red: true },
        },
        {
          when: { en: "No active market AND alternative estimates clearly unreliable", ar: "لا سوق نشطة والبدائل غير موثوقة بوضوح" },
          then: { en: "The ESCAPE HATCH: cost − accumulated depreciation − accumulated impairment, until FV becomes measurable", ar: "مخرج الموثوقية: التكلفة − مجمع الإهلاك − مجمع الانخفاض، إلى أن تتيسر العادلة", red: true },
        },
        {
          when: { en: "While carried at cost under the hatch", ar: "أثناء الحمل بالتكلفة تحت المخرج" },
          then: { en: "IAS 36 impairment machinery applies + DISCLOSE the escape and why", ar: "تطبق آلية انخفاض القيمة IAS 36 + الإفصاح عن المخرج وسببه", red: true },
        },
        {
          when: { en: "Fair value becomes measurable again", ar: "تعود العادلة قابلة للقياس" },
          then: { en: "Switch back to FV−CTS with the full movement to P&L at the switch — and STAY at FV−CTS until disposal", ar: "ارجع للعادلة ناقص التكاليف بكامل الحركة إلى الأرباح عند التحويل — وابقَ عليها حتى التخرد", red: true },
        },
      ],
    },
    {
      kind: "example",
      title: { en: "The escape hatch in numbers", ar: "مخرج الموثوقية بالأرقام" },
      lines: [
        { en: "Young timber plantation: no active market and the alternative estimates clearly unreliable → carried at cost 300, with IAS 36 as the only value check", ar: "مشجر أخشاب فتي: لا سوق نشطة والبدائل غير موثوقة بوضوح ← يحمل بتكلفة ٣٠٠، وIAS 36 هو فحص القيمة الوحيد" },
        { en: "At year 3, comparable timber transactions create a dependable estimate: FV−CTS 480", ar: "في السنة ٣، تنشئ معاملات أخشاب مماثلة تقديرًا معتمدًا: عادلة ناقص تكاليف ٤٨٠" },
        { en: "Switch entry: dr Biological assets 180 / cr P&L — change in FV−CTS 180; and the asset STAYS at FV−CTS until disposal", ar: "قيد التحويل: من ح/ أصول حيوية ١٨٠ إلى ح/ الأرباح — تغير العادلة ناقص التكاليف ١٨٠؛ ويبقى الأصل عليها حتى التخرد" },
        { en: "Disclose the escape period and WHY fair value had been unreliable — the hatch is audited, not assumed", ar: "أفصح عن فترة المخرج وسبب عدم موثوقية العادلة — فالمخرج يُراجع ولا يُفترض" },
      ],
    },
    { kind: "h", text: { en: "Presentation — where the profit lands", ar: "العرض — أين يحط الربح" } },
    {
      kind: "p",
      text: {
        en: "The FV−CTS movements present in P&L — often shown as 'change in fair value less costs to sell of biological assets' — as OPERATING income of the agricultural activity, not OCI and not IFRS 15 revenue (produce sold is an IAS 2 inventory sale). Because the profit arrives before cash, a paper profit can sit beside a real tax bill — which is exactly why the disclosure demands the split between physical change and price change.",
        ar: "تعرض حركات العادلة ناقص التكاليف في الأرباح — غالبًا ببند «التغير في القيمة العادلة ناقص تكاليف البيع للأصول الحيوية» — دخلًا تشغيليًا للنشاط الزراعي، لا دخلًا شاملًا آخر ولا إيراد IFRS 15 (فبيع المنتج بيع مخزون IAS 2). ولأن الربح يسبق النقد قد يجلس ربح دفتري بجوار فاتورة ضريبية حقيقية — ولهذا بعينه يطلب الإفصاح فصل التغير المادي عن تغير السعر.",
      },
    },
    {
      kind: "p",
      text: {
        en: "The disclosure split users demand: for each group of biological assets, separate the PHYSICAL change (growth, degeneration, procreation — the transformation) from the PRICE change (market movement on the same physical quantity). A herd's profit earned by husbandry and a profit earned by a market boom tell completely different stories about the entity's operating quality.",
        ar: "الفصل الذي يطلبه المستخدمون: لكل مجموعة أصول حيوية، افصل التغير المادي (نمو وتدهور وتوالد — التحول) عن تغير السعر (حركة السوق على الكمية المادية ذاتها). فربح قطيع اكتسبه حسن التربية وربح اكتسبته موجة سوقية يحكيان قصتين مختلفتين تمامًا عن جودة تشغيل المنشأة.",
      },
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
    { kind: "h", text: { en: "Interactions — IAS 2, IAS 16, IAS 36, IAS 20", ar: "التزامن — IAS 2 وIAS 16 وIAS 36 وIAS 20" } },
    {
      kind: "list",
      items: [
        { en: "IAS 2: the harvest-date FV−CTS becomes the inventory cost; post-harvest spend is conversion cost", ar: "IAS 2: العادلة ناقص التكاليف وقت الحصاد تغدو تكلفة المخزون؛ وإنفاق ما بعد الحصاد تكلفة تحويل" },
        { en: "IAS 16: bearer plants at cost (or revaluation), depreciated over the productive life once mature", ar: "IAS 16: النباتات الحاملة بالتكلفة (أو إعادة التقييم)، وتُهلك عبر العمر الإنتاجي متى نضجت" },
        { en: "IAS 36: NO separate impairment while an asset rides at FV−CTS — the fair value already absorbs value declines; under the cost escape hatch IAS 36 applies", ar: "IAS 36: لا انخفاض قيمة مستقل ما دام الأصل بالعادلة ناقص التكاليف — فالقيمة العادلة تمتص هبوط القيمة أصلًا؛ وعند مخرج التكلفة يطبق IAS 36" },
        { en: "IAS 20 ↔ IAS 41: unconditional grants for fair-valued biological assets = immediate income when receivable (the IAS 20 deferral overridden); conditional grants follow IAS 20", ar: "IAS 20 ↔ IAS 41: المنح غير المشروطة للأصول الحيوية المقاسة بالعادلة = دخل فوري عند الاستحقاق (يتجاوز تأجيل IAS 20)؛ والمشروطة تتبع IAS 20" },
        { en: "IFRS 13: the fair value is market-based — condition and location adjustments, no entity-specific value in use", ar: "IFRS 13: القيمة العادلة قائمة على السوق — تعديلات الحالة والموقع، ولا قيمة استخدام خاصة بالمنشأة" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "A farm's balance sheet is a standards map, never one number: land (IAS 16 or IAS 40), bearer plants (IAS 16), the produce still growing (IAS 41), and the harvested inventory (IAS 2) all present as separate balances. Inseparability on the ground never merges the standards — each asset class keeps its own measurement engine.",
        ar: "ميزانية المزرعة خريطة معايير لا رقمًا واحدًا أبدًا: الأرض (IAS 16 أو IAS 40)، والنباتات الحاملة (IAS 16)، والمنتج النامي (IAS 41)، والمخزون المحصود (IAS 2) تظهر جميعها أرصدة منفصلة. وعدم قابلية الفصل على الأرض لا يمزج المعايير قط — فكل فئة أصول تحتفظ بمحرك قياسها.",
      },
    },
    { kind: "h", text: { en: "Effective dates & amendments", ar: "تواريخ السريان والتعديلات" } },
    {
      kind: "p",
      text: {
        en: "Issued December 2000 and effective 1 January 2003; the Bearer Plants amendment (issued June 2014, effective 1 January 2016) moved the living plants to IAS 16 while keeping their produce in IAS 41; IFRS 13 (2013) rebuilt the fair-value measurement input; IFRS 16 removed the old lease references. Grants policy follows the IAS 41/IAS 20 pair exactly as above.",
        ar: "صدر في ديسمبر ٢٠٠٠ وسارٍ من ١ يناير ٢٠٠٣؛ وتعديل النباتات الحاملة (الصادر يونيو ٢٠١٤، السارٍ من ١ يناير ٢٠١٦) نقل النباتات الحية إلى IAS 16 وأبقى منتجها في IAS 41؛ وأعاد IFRS 13 (٢٠١٣) بناء مدخل قياس القيمة العادلة؛ وأزال IFRS 16 إشارات الإيجار القديمة. وسياسة المنح تتبع ثنائي IAS 41/IAS 20 تمامًا كما فوق.",
      },
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
        en: "Bearer ANIMALS stay in IAS 41; bearer PLANTS left for IAS 16 in the 2016 amendment. The dairy cow and her pasture sit in different standards: cow IAS 41, field IAS 16, milk IAS 41-until-collected.",
        ar: "الحيوانات الحاملة تبقى في IAS 41؛ والنباتات الحاملة انتقلت إلى IAS 16 بتعديل ٢٠١٦. والبقرة ومرعاها يجلسان في معايير مختلفة: البقرة IAS 41، والمرعى IAS 16، واللبن IAS 41 حتى الحلب.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Harvest-date FV−CTS becomes the produce's COST — so a strawberry crop's winter glasshouse costs belong to the biological-asset measurement while growing, then freeze into inventory at harvest; post-harvest cold storage is an IAS 2 cost, never a 'biological' cost.",
        ar: "العادلة ناقص التكاليف وقت الحصاد تصبح تكلفة المنتج — فتكاليف البيوت المحمية الشتوية تنضم لقياس الأصل أثناء النمو ثم تتجمد في المخزون عند الحصاد؛ والتخزين المبرد لاحقًا تكلفة IAS 2 لا تكلفة حيوية.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "A purchased animal enters at cost (no gain); a BORN animal enters at FV−CTS and the whole amount is P&L gain. One asset, two doors — and the exam loves asking which door you used.",
        ar: "الحيوان المشتري يدخل بالتكلفة (بلا ربح)؛ والمولود يدخل بالعادلة ناقص التكاليف بكاملها ربحًا. أصل واحد وبابان — والامتحان يعشق السؤال أي باب استُخدم.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Terminology: 'costs to sell' INCLUDES broker commissions and levies and EXCLUDES transport to market — counter-intuitive; IAS 41 explicitly notes transport is not a cost to sell.",
        ar: "المصطلح: «تكاليف البيع» تشمل عمولات السماسرة والرسوم وتستبعد النقل إلى السوق — وهو عكس أغلب التصورات؛ يذكر IAS 41 صراحة أن النقل ليس من تكاليف البيع.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Bearer-plant depreciation starts when the plant reaches maturity and begins bearing — not at planting; immature bearer plants sit at cost, growing into the productive orchard.",
        ar: "يبدأ إهلاك النبات الحامل عند بلوغه بدء الإثمار لا عند الزراعة؛ فالحوامل غير الناضجة تجلس بالتكلفة تنمو داخل البستان الإنتاجي.",
      },
    },
  ],
}
