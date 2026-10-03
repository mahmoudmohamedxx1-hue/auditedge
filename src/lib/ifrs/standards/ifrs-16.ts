/** IFRS 16 — Leases */

import type { Standard } from "../types"

export const IFRS_16: Standard = {
  code: "IFRS 16",
  title: { en: "Leases", ar: "الإيجارات" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 2019 · lessee model — almost every lease on balance sheet", ar: "سارٍ من ١ يناير ٢٠١٩ · نموذج المستأجر — كل إيجار تقريبًا في الميزانية" },
  blocks: [
    { kind: "h", text: { en: "Is there a lease at all?", ar: "هل ثمّة إيجار أصلًا؟" } },
    {
      kind: "tree",
      root: { en: "A contract conveys the right to CONTROL the use of an identified asset for a period in exchange for consideration", ar: "عقد يمنح حق السيطرة على استخدام أصل محدد لفترة مقابل عوض" },
      branches: [
        {
          when: { en: "IDENTIFIED ASSET — explicitly or implicitly specified; no substantive substitution right (the supplier can't swap it without the customer's agreement and gains no benefit from swapping)", ar: "أصل محدد — معين صراحة أو ضمنًا؛ ولا حق إحلال جوهري (لا يستطيع المورد استبداله دون موافقة العميل دون منفعة من الاستبدال)" },
          then: { en: "Gate 1 passed — check economic control", ar: "البوابة الأولى عبرت — اختبر السيطرة الاقتصادية" },
        },
        {
          when: { en: "Right to substantially all ECONOMIC BENEFITS from use throughout the period", ar: "حق الحصول على جوهر المنافع الاقتصادية من الاستخدام طوال الفترة" },
          then: { en: "Gate 2 passed", ar: "البوابة الثانية عبرت" },
        },
        {
          when: { en: "Right to DIRECT the use — deciding how & for what purpose (or the use is predetermined and the customer designed the asset / operates it without supplier ability to change those instructions)", ar: "حق توجيه الاستخدام — تقرير الكيفية والغرض (أو الاستخدام محدد مسبقًا والعميل صمم الأصل أو شغّله دون قدرة المورد على تغيير التوجيهات)" },
          then: { en: "IT IS A LEASE — separate lease components from service components", ar: "إنه إيجار — فصل مكونات الإيجار عن مكونات الخدمة", red: true },
        },
        {
          when: { en: "Substitution right IS substantive (supplier benefits from swapping, practically able to swap)", ar: "حق الإحلال جوهري (ينتفع المورد من الاستبدال وقادر عليه عمليًا)" },
          then: { en: "NOT a lease — it's a service contract", ar: "ليس إيجارًا — إنه عقد خدمة", red: true },
        },
      ],
    },
    {
      kind: "note",
      text: {
        en: "PORTIONS of an asset can be identified: a floor of a building, a fibre-optic line's capacity. Capacity portions (a pipeline's 40%) qualify only if physically distinct; otherwise you must hold substantially all the capacity.",
        ar: "أجزاء من الأصل قد تكون محددة: طابق مبنى، سعة خط ألياف. وتقديرات السعة (٤٠٪ من أنبوب) تصلح فقط إذا كانت متميزة ماديًا؛ وإلا وجب حيازة جوهر السعة.",
      },
    },
    { kind: "h", text: { en: "Lessee model — one model, two exemptions", ar: "نموذج المستأجر — نموذج واحد وإعفاءان" } },
    {
      kind: "list",
      items: [
        { en: "SHORT-TERM (lease term ≤ 12 months, no purchase option reasonably certain) — expense straight-line; the option is BY CLASS of underlying asset", ar: "قصير الأجل (≤ ١٢ شهرًا بلا خيار شراء مرجح) — مصروف بالقسط الثابت؛ والخيار بفئة الأصل" },
        { en: "LOW-VALUE assets (when new: ~USD 5,000; laptops, phones, small furniture — NOT cars for a fleet) — expense straight-line", ar: "منخفضة القيمة (جديدة بنحو ٥٬٠٠٠ دولار: حواسيب وهواتف وأثاث صغير — لا سيارات أسطول) — مصروف بالقسط الثابت" },
        { en: "EVERYTHING ELSE: RIGHT-OF-USE asset + LEASE LIABILITY on balance sheet — the IFRS 16 revolution", ar: "كل ما عدا ذلك: أصل حق استخدام + التزام إيجار في الميزانية — ثورة IFRS 16" },
      ],
    },
    { kind: "h", text: { en: "Initial measurement — the lessee engine", ar: "القياس الأولي — محرك المستأجر" } },
    {
      kind: "formula",
      title: { en: "Day-one amounts", ar: "مقادير اليوم الأول" },
      lines: [
        { en: "Lease liability = PV of UNPAID lease payments, discounted at the RATE IMPLICIT IN THE LEASE (or the lessee's INCREMENTAL BORROWING RATE when the implicit rate is not readily determinable)", ar: "التزام الإيجار = القيمة الحالية لمدفوعات الإيجار غير المسددة بمعدل الإيجار الضمني (أو معدل الاقتراض الحدي للمستأجر عند تعذر تعيين الضمني)" },
        { en: "Lease payments = fixed payments (incl. in-substance fixed) − lease incentives receivable + purchase-option price (if reasonably certain) + termination penalties (if term reflects exercise) + EXPECTED payments under residual-value guarantees", ar: "مدفوعات الإيجار = الثابتة (ومنها الثابتة في الجوهر) − حوافز الإيجار + ثمن خيار الشراء (إن رجح) + غرامات الإنهاء (إذا انعكس الأجل على ممارستها) + المدفوعات المتوقعة بموجب ضمانات القيمة المتبقية" },
        { en: "ROU asset = liability + prepaid lease payments + initial DIRECT costs + restoration/dismantling estimate (IAS 37) − incentives received", ar: "أصل الحق = الالتزام + مدفوعات مقدمة + تكاليف مباشرة أولية + تقدير الفك/الإعادة (IAS 37) − الحوافز المقبوضة" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The LEASE TERM: non-cancellable period + extension periods when the lessee is REASONABLY CERTAIN to extend + termination periods when reasonably certain NOT to exercise — reassessed on triggering events (a lease modification is NOT one). Variable payments that depend on an INDEX or RATE enter the liability at the CURRENT index rate; only when the cash flows actually CHANGE (the index moves) do you remeasure against a REVISED discount rate.",
        ar: "أجل الإيجار: الفترة غير القابلة للإلغاء + فترات التمديد المرجح تمديدها + فترات الإنهاء المرجح عدم ممارستها — ويعاد تقييمه عند أحداث محفزة (وليس عند تعديل الإيجار). والمدفوعات المتغيرة المعتمدة على مؤشر أو معدل تدخل بالسعر الجاري؛ وعند تغير التدفقات فعليًا يعاد القياس بمعدل خصم منقح.",
      },
    },
    { kind: "h", text: { en: "Subsequent measurement — lessee", ar: "القياس اللاحق — المستأجر" } },
    {
      kind: "tree",
      root: { en: "Carry the ROU asset forward", ar: "اسحب أصل الحق قدمًا" },
      branches: [
        {
          when: { en: "COST MODEL (default): cost − accumulated depreciation − accumulated impairment; depreciate over the SHORTER of useful life and lease term — unless ownership TRANSFERS or a purchase option is reasonably certain → then the USEFUL LIFE", ar: "نموذج التكلفة (الافتراضي): التكلفة − مجمع الإهلاك − مجمع الانخفاض؛ ويهلك على الأقصر من العمر الإنتاجي وأجل الإيجار — إلا إذا انتقلت الملكية أو رجح خيار الشراء ← فالعمر الإنتاجي" },
          then: { en: "Straight-line (or another systematic pattern) + interest accretion on the liability at the FIXED rate", ar: "بالقسط الثابت (أو نمط منتظم آخر) + استحقاق فائدة على الالتزام بالمعدل الثابت", red: true },
        },
        {
          when: { en: "The ROU class meets the INVESTMENT PROPERTY definition and the entity uses the IAS 40 FAIR VALUE model", ar: "بأت أصول الحق عقارًا استثماريًا والمنشأة على نموذج القيمة العادلة (IAS 40)" },
          then: { en: "Measure the ROU asset at FAIR VALUE — the only way an ROU leaves the cost model", ar: "يقاس أصل الحق بالقيمة العادلة — الطريق الوحيد لخروجه من نموذج التكلفة", red: true },
        },
        {
          when: { en: "REVALUATION: ROU assets that meet the IAS 16 definition may follow the IAS 16 revaluation model — but ONLY if the related PPE class is ALSO revalued", ar: "إعادة التقييم: أصول الحق المستوفية تعريف IAS 16 قد تتبع نموذجه — بشرط إعادة تقييم فئة الممتلكات ذاتها أيضًا" },
          then: { en: "OCI corridor mechanics (IAS 16 rules apply)", ar: "ممر الدخل الشامل بقواعد IAS 16" },
        },
      ],
    },
    {
      kind: "journal",
      title: { en: "Lessee entries — 5-year lease, 100/yr, IBR 6%", ar: "قيود المستأجر — إيجار ٥ سنوات بـ١٠٠ سنويًا ومعدل ٦٪" },
      rows: [
        { dr: { en: "Right-of-use asset 446", ar: "أصل حق استخدام ٤٤٦" }, cr: { en: "Lease liability 446", ar: "التزام إيجار ٤٤٦" }, red: true },
        { dr: { en: "Lease liability 73.2", ar: "التزام إيجار ٧٣٫٢" } },
        { dr: { en: "Interest expense 26.8", ar: "مصروف فوائد ٢٦٫٨" }, cr: { en: "Cash 100 (payment 1)", ar: "نقد ١٠٠ (القسط الأول)" } },
        { dr: { en: "Depreciation 89.2", ar: "إهلاك ٨٩٫٢" }, cr: { en: "Accumulated depreciation — ROU", ar: "مجمع إهلاك أصل الحق" } },
        { cr: { en: "Years 2–5: the interest share FALLS as the liability amortises (front-loaded total expense)", ar: "السنوات ٢–٥: تنخفض حصة الفائدة مع تسديد الالتزام (المصروف الإجمالي أكبر مبكرًا)" } },
        { cr: { en: "P&L geography: depreciation (operating) + interest (finance) — NOT one operating rent line anymore", ar: "خريطة الأرباح: إهلاك (تشغيلي) + فائدة (تمويلي) — لا سطر إيجار تشغيلي واحد بعد الآن" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Modifications & reassessments", ar: "التعديلات وإعادة التقييم" } },
    {
      kind: "tree",
      root: { en: "The deal changed mid-flight", ar: "تغير العقد في منتصف الطريق" },
      branches: [
        {
          when: { en: "INCREASE in scope by ADDING right-of-use assets at a standalone price", ar: "زيادة النطاق بإضافة حقوق استخدام بسعر مستقل" },
          then: { en: "A SEPARATE new lease (renegotiated-decrease scope? no — added scope only); the old lease continues untouched", ar: "إيجار جديد مستقل — والقديم يستمر دون مساس", red: true },
        },
        {
          when: { en: "Modification NOT a separate lease (price change, term change, partial decrease of scope)", ar: "تعديل ليس إيجارًا مستقلًا (تغير سعر أو أجل أو تقليص نطاق جزئي)" },
          then: { en: "REMEASURE the liability at a REVISED discount rate; adjust the ROU asset symmetrically", ar: "يعاد قياس الالتزام بمعدل خصم منقح ويعدل أصل الحق بمقابله", red: true },
        },
        {
          when: { en: "Decrease in scope: reduce the ROU asset proportionately, book the P&L gain/loss on the part terminated", ar: "تقليص النطاق: يقل أصل الحق بالتناسب ويعترف بربح/خسارة الجزء المنتهي في الأرباح" },
          then: { en: "Gain/loss = reduction in liability for the terminated part − reduction in ROU", ar: "الربح/الخسارة = نقص التزام الجزء المنتهي − نقص الأصل", red: true },
        },
        {
          when: { en: "Reassessment of a purchase/extension option or index (triggering event occurred)", ar: "إعادة تقييم خيار شراء/تمديد أو مؤشر (حدث محفز وقع)" },
          then: { en: "Index/rate change → UNCHANGED discount rate (unless the flows come from FLOATING interest rates) — a subtle contrast with modifications", ar: "تغير المؤشر ← بمعدل خصم دون تغيير (إلا إذا نتج عن معدلات فائدة عائمة) — تباين دقيق مع التعديلات", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Lessor accounting — the old two-way", ar: "محاسبة المؤجر — المسار القديم ذو الاتجاهين" } },
    {
      kind: "tree",
      root: { en: "Lessor classifies the lease", ar: "يصنف المؤجر الإيجار" },
      branches: [
        {
          when: { en: "Transfers SUBSTANTIALLY ALL risks & rewards incidental to ownership (the IAS 17 test survives)", ar: "ينقل جوهر مخاطر ومنافع الملكية (اختبار IAS 17 الباقي)" },
          then: { en: "FINANCE lease: derecognise the asset, recognise NET INVESTMENT IN LEASE at the implicit rate; income = interest over the pattern of the net investment; the ROU interplay for subleases: classify the SUBLEASE by reference to the head-lease ROU asset, not the underlying asset", ar: "إيجار تمويلي: يستبعد الأصل ويعترف باستثمار صافٍ في الإيجار بالمعدل الضمني؛ والدخل فائدة عبر نمط الاستثمار الصافي؛ والإيجار الفرعي يصنف بالعودة إلى أصل الحق الرئيسي لا للأصل محل العقد", red: true },
        },
        {
          when: { en: "Risks & rewards stay with the lessor", ar: "تبقى المخاطر والمنافع لدى المؤجر" },
          then: { en: "OPERATING lease: keep the asset, continue its depreciation (IAS 16/IAS 40/IAS 38 as applicable); recognise lease income STRAIGHT-LINE (or another systematic basis); initial DIRECT costs added to the asset's carrying and expensed over the term", ar: "إيجار تشغيلي: يبقى الأصل ويستمر إهلاكه؛ ويكون دخل الإيجار بالقسط الثابت (أو أساس منتظم آخر)؛ وتضاف التكاليف المباشرة الأولية للأصل وتحمَّل على مدى الأجل", red: true },
        },
        {
          when: { en: "Manufacturer/Dealer lessor: revenue at the LOWER of the lease's fair value and the PV of lease receipts (IFRS 15 day-one), selling profit = the market price at sale; finance lease assumed unless the discount (interest rate implicit) is clearly artificial", ar: "مؤجر صانع/تاجر: الإيراد بالأدنى من القيمة العادلة والقيمة الحقيقة للمقبوضات؛ وربح البيع بسعر السوق؛ ويفترض الإيجار التمويلي ما لم يكن الخصم مصطنعًا بوضوح" },
          then: { en: "Day-one selling profit + interest income over the term; costs expensed when incurred (matching IFRS 15)", ar: "ربح بيع في اليوم الأول + فائدة عبر الأجل؛ والمصروفات عند حدوثها", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Sale & leaseback", ar: "البيع وإعادة الإيجار" } },
    {
      kind: "steps",
      items: [
        { en: "Does the transfer qualify as a SALE under IFRS 15 (control passes to the buyer-lessor)?", ar: "هل يعد النقل بيعًا وفق IFRS 15 (تنتقل السيطرة للمشتري المؤجر)؟" },
        { en: "YES → seller-lessee derecognises the asset and recognises a ROU asset = the RETAINED right of use (measured by the proportion of the previous carrying amount); the buyer-lessor accounts for the purchase (PPE or IP) and the lease", ar: "نعم ← يستبعد البائع الأصل ويعترف بأصل حق استخدام = الحق المحتفظ به (بنسبة القيمة الدفترية السابقة)؛ والمشتري المؤجر يعالج الشراء والإيجار" },
        { en: "Adjusted selling price: when the price is BELOW market, the difference is PREPAID RENT (add to ROU); ABOVE market → additional financing (a receivable/liability adjustment)", ar: "السعر المعدل: إذا كان أدنى من السوق فالفرق إيجار مقدم (يزاد في الأصل)؛ وأعلى منه ← تمويل إضافي" },
        { en: "GAIN/LOSS recognition: only the gain or loss ATTRIBUTABLE TO THE RIGHTS TRANSFERRED may hit P&L — the rest is deferred in the ROU asset (no full 'profit' on your own retained use)", ar: "الربح/الخسارة: يظهر في الأرباح فقط ما يُنسب للحقوق المنتقلة — والباقي يؤجل في أصل الحق" },
        { en: "NOT a sale (control stays) → the 'seller' keeps the asset and treats the proceeds as a FINANCING (a loan); no ROU asset arises at all", ar: "ليس بيعًا (تبقى السيطرة) ← يبقى الأصل لدى «البائع» ويعامل المتحصلات تمويلًا (قرضًا) — ولا أصل حق إطلاقًا" },
      ],
    },
    {
      kind: "example",
      title: { en: "Sale & leaseback numbers", ar: "أرقام البيع وإعادة الإيجار" },
      lines: [
        { en: "Building carrying 800 · FV 1,000 · sold for 1,000 and leased back for 18 of its 20-year remaining life (right retained = 18/20 = 90%)", ar: "مبنى دفتريته ٨٠٠ وقيمته العادلة ١٬٠٠٠؛ بيع بـ١٬٠٠٠ وأعيد تأجيره ١٨ سنة من ٢٠ متبقية (الحق المحتفظ = ٩٠٪)" },
        { en: "ROU asset = 800 × 90% = 720 · Derecognise 800 → 'sale' of carrying 720 + gain attributable to transferred rights", ar: "أصل الحق = ٨٠٠ × ٩٠٪ = ٧٢٠ · ويستبعد ٨٠٠ كأنه بيع بجزء محتفظ به" },
        { en: "Gain = (1,000 − 800) = 200 × rights transferred (10%) = 20 → P&L; the remaining 180? No — deferred INTO the ROU via the proportionate method; total gain recognized in P&L = 20 only", ar: "الربح = (١٬٠٠٠ − ٨٠٠) = ٢٠٠ × الحقوق المنتقلة (١٠٪) = ٢٠ ← للأرباح فقط؛ والباقي مؤجل عبر الطريقة التناسبية" },
        { en: "If the price had been 900 (100 below FV): prepaid rent 100 → ROU = 720 + 100 = 820 with zero P&L gain", ar: "لو كان السعر ٩٠٠ (أقل بـ١٠٠): إيجار مقدم ← الأصل = ٧٢٠ + ١٠٠ = ٨٢٠ ولا ربح في الأرباح" },
      ],
    },
    { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Lessee P&L: DEPRECIATION within operating expenses + INTEREST in finance costs; cash flow: principal → financing, interest → operating or financing", ar: "أرباح المستأجر: الإهلاك ضمن التشغيلية والفائدة ضمن التمويلية؛ والتدفقات: الأصل تمويلي والفائدة حسب السياسة" },
        { en: "ROU assets by class (PPE-like disclosure, incl. additions, closed leases, impairment, depreciation); maturity analyses of lease liabilities; the interest rate spectrum & terms", ar: "أصول الحق بالفئات (بإفصاحات شبيهة بالممتلكات)؛ وتحليل استحقاقات الالتزامات وطيف المعدلات والآجال" },
        { en: "Short-term/low-value expense amounts, extension options & their terms, variable payments NOT in the liability, sale-and-leaseback gains/losses and terms", ar: "مصروف القصير ومنخفض القيمة، وخيارات التمديد، والمدفوعات المتغيرة خارج الالتزام، وأرباح البيع الراجع وشروطه" },
        { en: "Lessor: finance-lease income by category, operating-lease income, the net-investment reconciliation, residual-risk management", ar: "المؤجر: دخل التمويلي بالفئات ودخل التشغيلي وتسوية الاستثمار الصافي وإدارة مخاطر المتبقي" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "IBR or implicit? The lessee uses the implicit rate when it is READILY DETERMINABLE — in most third-party leases it isn't (the lessor's residual assumptions are invisible), so the IBR rules the exam answer. Say WHY in one clause.",
        ar: "المعدل الضمني أم معدل الاقتراض الحدي؟ يستخدم المستأجر الضمني عند سهولة تعيينه — وغالبًا لا يتيسر (افتراضات المؤجر للمتبقي خفية) فيسود معدل الاقتراض الحدي. اذكر السبب بعبارة واحدة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Front-loaded expense: total year-1 expense (depreciation + interest) EXCEEDS the old straight-line rent — then falls. Analysts rebuild the 'rent-equivalent' (depreciation + interest − principal) to compare across firms; know the shape, not just the total.",
        ar: "المصروف أكبر مبكرًا: مصروف السنة الأولى (إهلاك + فائدة) يتجاوز الإيجار الثابت القديم ثم ينحدر. والمحللون يعيدون بناء «مكافئ الإيجار» للمقارنة؛ فاحفظ شكل المنحنى لا الإجمالي فقط.",
      },
    },
    {
      kind: "note",
      text: {
        en: "In a business combination, the acquirer remeasures existing lease liabilities to market — the rate gap creates new assets or liabilities (the IFRS 3 + IFRS 16 interplay).",
        ar: "التزامات الإيجار في الاندماج: يعيد المقتني قياس التزامات الإيجار القائمة بقيمة السوق — ففرق المعدلات يولد أصولًا أو التزامات جديدة (تفاعل IFRS 3 مع IFRS 16).",
      },
    },
  ],
}
