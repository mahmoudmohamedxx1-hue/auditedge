/** IAS 32 — Financial Instruments: Presentation */

import type { Standard } from "../types"

export const IAS_32: Standard = {
  code: "IAS 32",
  title: { en: "Financial Instruments: Presentation", ar: "الأدوات المالية: العرض" },
  topic: "instruments",
  effective: { en: "Effective 1 Jan 2005 · amended 2020 (fixed-for-fixed & costs)", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل ٢٠٢٠ (الثابت مقابل الثابت والتكاليف)" },
  blocks: [
    { kind: "h", text: { en: "Objective — the boundary question", ar: "الهدف — سؤال الحدود" } },
    {
      kind: "p",
      text: {
        en: "IAS 32 answers ONE question better than any other standard: is the instrument a FINANCIAL LIABILITY or an EQUITY instrument — and who eats the risk? It also handles compound instruments, treasury shares, offsetting, and the interest/dividends/accounting classification that follows from the initial answer. Substance over legal form is the whole game: the name (share, bond, note) means nothing; the CONTRACTUAL terms decide. The classification is made at INITIAL recognition and, with narrow exceptions, never revisited — so day one carries the whole decision.",
        ar: "يجيب IAS 32 عن سؤال واحد أفضل من غيره: هل الأداة التزام مالي أم أداة ملكية — ومن يتحمل المخاطر؟ ويعالج الأدوات المركبة والأسهم الخزانية والمقاصة وتصنيف الفوائد والتوزيعات التابع للجواب الأول. والجوهر على الشكل القانوني هي اللعبة كلها: فالاسم (سهم، سند، صك) لا يعني شيئًا؛ والشروط التعاقدية تحسم. ويُتخذ التصنيف عند الاعتراف الأولي ولا يعاد النظر فيه إلا باستثناءات ضيقة — فاليوم الأول يحمل القرار كله.",
      },
    },
    { kind: "h", text: { en: "Scope & the instrument definitions", ar: "النطاق وتعريفات الأداة" } },
    {
      kind: "p",
      text: {
        en: "IAS 32 applies to all entities and every type of financial instrument — issued, held, bought, sold — and works hand in glove with IFRS 9 (measurement) and IFRS 7 (disclosures): this standard draws the boundary, IFRS 9 measures each side, IFRS 7 tells the story. A financial instrument is a contract giving one party a FINANCIAL ASSET and the other a financial LIABILITY or an EQUITY instrument. The presentation rules bite hardest on what an entity ISSUES: preference shares, convertibles, perpetuals, units in funds.",
        ar: "يطبق IAS 32 على كل المنشآت وكل أنواع الأدوات المالية — مصدرة ومحملة ومشتراة ومبيعة — ويعمل يدًا بيد مع IFRS 9 (القياس) وIFRS 7 (الإفصاح): فهذا المعيار يرسم الحدود، وIFRS 9 يقيس كل جانب، وIFRS 7 يحكي الحكاية. والأداة المالية عقد يمنح طرفًا أصلًا ماليًا والآخر التزامًا ماليًا أو أداة ملكية. وتنشق قواعد العرض أقساها على ما تصدره المنشأة: الأسهم الممتازة والقابلة للتحويل والدائمة ووحدات الصناديق.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Financial instrument = a contract giving ONE party a financial ASSET and the other a financial LIABILITY or EQUITY instrument", ar: "الأداة المالية = عقد يمنح طرفًا أصلًا ماليًا والآخر التزامًا ماليًا أو أداة ملكية" },
        { en: "A financial asset includes: cash, an EQUITY instrument of another entity, a contractual RIGHT to receive cash/another financial asset, a contract exchangeable on favourable terms, a derivative benefiting the holder", ar: "الأصل المالي يشمل: النقد، وأداة ملكية لمنشأة أخرى، وحقًا تعاقديًا بتلقي نقد أو أصل مالي، وعقدًا للمبادلة بشروط مواتية، ومشتقًا ينفع الحائز" },
        { en: "NOT financial: physical assets (gold, commodities), prepaid expenses, deferred revenue (settling with GOODS not cash), tax liabilities (statutory not contractual), employee-benefit obligations", ar: "غير مالية: الأصول العينية (ذهب، سلع)، والمصروفات المقدمة، والإيراد المؤجل (يسوى بسلع)، والالتزامات الضريبية (قانونية لا تعاقدية)، والتزامات مزايا العاملين" },
      ],
    },
    { kind: "h", text: { en: "The classification test — liability or equity?", ar: "اختبار التصنيف — التزام أم ملكية؟" } },
    {
      kind: "tree",
      root: { en: "Does the instrument carry a CONTRACTUAL OBLIGATION the entity cannot avoid?", ar: "هل تحمل الأداة التزامًا تعاقديًا لا تستطيع المنشأة تفاديه؟" },
      branches: [
        {
          when: { en: "An UNAVOIDABLE obligation to deliver cash or another financial asset — or to EXCHANGE financial instruments on potentially UNFAVOURABLE terms (e.g. a written option to issue shares at a loss)", ar: "التزام حتمي بتسليم نقد أو أصل مالي آخر — أو بالمبادلة بشروط قد تكون مجحفة (كخيار مكتوب لإصدار أسهم بخسارة)" },
          then: { en: "FINANCIAL LIABILITY — even if called a 'share'; even if the outflow is contingent", ar: "التزام مالي — ولو سمي «سهمًا»؛ ولو كان التدفق مشروطًا", red: true },
        },
        {
          when: { en: "Settlement in the entity's OWN SHARES — the FIXED-FOR-FIXED test: a fixed amount of cash for a FIXED number of shares (and nothing else variable)", ar: "تسليم بأسهم المنشأة ذاتها — اختبار الثابت مقابل الثابت: مبلغ نقدي ثابت مقابل عدد ثابت من الأسهم" },
          then: { en: "Fixed-for-fixed passes → EQUITY; any variability (a variable cash amount, a variable share count, a choice to net-settle in cash) → LIABILITY", ar: "نجاح الاختبار ← ملكية؛ وأي تقلب (مبلغ متغير أو عدد متغير أو خيار التسوية النقدية) ← التزام", red: true },
        },
        {
          when: { en: "NO obligation at all — a residual interest in the assets after deducting all liabilities", ar: "لا التزام أصلًا — مصلحة متبقية في الأصول بعد طرح كل الالتزامات" },
          then: { en: "EQUITY INSTRUMENT (an ordinary share)", ar: "أداة ملكية (سهم عادي)", red: true },
        },
        {
          when: { en: "A CONTINGENT SETTLEMENT provision — the obligation triggers only on uncertain future events outside the control of both parties (a regulator approval, an IPO)", ar: "بند تسوية مشروط — يتفعل الالتزام بحدث مستقبلي غير مؤكد خارج سيطرة الطرفين (موافقة جهة، طرح عام)" },
          then: { en: "LIABILITY unless the contingency is not genuine or arises only on liquidation", ar: "التزام ما لم يكن الشرط غير حقيقي أو لا ينشأ إلا عند التصفية", red: true },
        },
        {
          when: { en: "PUTTABLE instruments & obligations arising only on liquidation (the exception for cooperative/member shares)", ar: "أدوات قابلة للرد والتزامات لا تنشأ إلا عند التصفية (استثناء أسهم التعاونيات والعضويات)" },
          then: { en: "EQUITY — if the class is the most subordinate, has pro-rata rights, and the put is the whole class's deepest claim (strict conditions)", ar: "ملكية — إذا كانت الفئة الأعمق وبحقوق تناسبية والرد يستهدف الفئة كلها بشروط دقيقة", red: true },
        },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Economic compulsion does NOT count — only a CONTRACTUAL obligation matters; a board's discretion to pay dividends never creates a liability.",
        ar: "الإلحاح الاقتصادي لا يعتبر — العبرة بالالتزام التعاقدي؛ وتقدير المجلس في التوزيع لا ينشئ التزامًا أبدًا.",
      },
    },
    { kind: "h", text: { en: "The fixed-for-fixed test in practice", ar: "اختبار الثابت مقابل الثابت عمليًا" } },
    {
      kind: "p",
      text: {
        en: "The test is literally fixed for fixed: a FIXED number of shares against a FIXED amount of cash (any currency — the 2020 amendments confirmed currency variability does not break the test, but the amount must be fixed in some currency at issue). A bond convertible into 40 shares per 100 nominal: equity conversion feature. A bond convertible into shares 'to the value of 100' (a VARIABLE number): the whole instrument is a liability, and the conversion feature is an embedded derivative to separate. The 2020 amendments also extended the test to items the entity must settle by delivering a variable number of its own shares — the 'own-shares-as-cash' idea — and cleaned up the costs of equity transactions.",
        ar: "الاختبار ثابت مقابل ثابت حرفيًا: عدد ثابت من الأسهم مقابل مبلغ نقدي ثابت (بأي عملة — وأكدت تعديلات ٢٠٢٠ أن اختلاف العملة لا يكسر الاختبار، لكن يجب أن يكون المبلغ ثابتًا بعملة ما عند الإصدار). فسند يتحول إلى ٤٠ سهمًا لكل ١٠٠ اسمية: سمة تحويل ملكوية. وسند يتحول إلى أسهم «بقيمة ١٠٠» (عدد متغير): الأداة كلها التزام، وسمة التحويل مشتق مضمن يفصل. ووسّعت تعديلات ٢٠٢٠ الاختبار إلى البنود التي تسوى بتسليم عدد متغير من الأسهم الذاتية — فكرة «الأسهم كنقد» — ونقحت تكاليف معاملات الملكية.",
      },
    },
    {
      kind: "tree",
      root: { en: "An instrument with settlement ALTERNATIVES — which classification?", ar: "أداة ببدائل تسوية — أي تصنيف؟" },
      branches: [
        {
          when: { en: "The ISSUER's choice of settlement (cash OR shares)", ar: "اختيار المُصدر للتسوية (نقد أو أسهم)" },
          then: { en: "Consider whether the holder can demand cash: if any alternative is CASH → the WHOLE instrument is a liability (unless fixed-for-fixed for the share leg)", ar: "انظر هل يستطيع الحامل طلب النقد: فإن كان أي بديل نقدًا ← الأداة كلها التزام (إلا إذا اجتازت رِجل الأسهم الثابت مقابل الثابت)", red: true },
        },
        {
          when: { en: "The HOLDER's choice (cash OR a fixed number of shares)", ar: "اختيار الحامل (نقد أو عدد ثابت من الأسهم)" },
          then: { en: "Compound thinking: the holder holds an option — the instrument contains a liability for the cash alternative; classify on the most adverse alternative to the issuer", ar: "تفكير الأداة المركبة: الحامل يملك خيارًا — فالأداة تحوي التزامًا لبديل النقد؛ صنّف على أسوأ البدائل على المُصدر", red: true },
        },
        {
          when: { en: "ALL alternatives are fixed-for-fixed equity settlement (no cash anywhere)", ar: "كل البدائل أسهم ثابتة مقابل ثابت (لا نقد في أي مكان)" },
          then: { en: "EQUITY — no obligation to deliver cash or a variable share count exists", ar: "ملكية — فلا التزام بتسليم نقد ولا بعدد أسهم متغير", red: true },
        },
      ],
    },
    {
      kind: "example",
      title: { en: "The classification gallery — five instruments, one test", ar: "معرض التصنيف — خمس أدوات واختبار واحد" },
      lines: [
        { en: "A. Redeemable preference shares, mandatory redemption at 100 in four years → FINANCIAL LIABILITY at the PV of 100 (an unavoidable cash outflow — the 'share' label is noise)", ar: "أ. أسهم ممتازة قابلة للاسترداد إلزاميًا عند ١٠٠ خلال أربع سنوات ← التزام مالي بالقيمة الحالية لـ١٠٠ (تدفق نقدي حتمي — ومسمى «السهم» ضجيج)" },
        { en: "B. Perpetual preference shares, dividends ENTIRELY at the board's discretion → EQUITY (no obligation exists, ever)", ar: "ب. أسهم ممتازة دائمة بتوزيعات تقديرية كليًا للمجلس ← ملكية (لا التزام أبدًا)" },
        { en: "C. Convertible bond: fixed coupons + conversion into a FIXED 40 shares per 100 → COMPOUND: split into liability (PV of the bond) + equity (the residual conversion option)", ar: "ج. سند قابل للتحويل: كوبونات ثابتة + تحويل إلى ٤٠ سهمًا ثابتة لكل ١٠٠ ← أداة مركبة: تقسم إلى التزام (القيمة الحالية للسند) وملكية (باقي خيار التحويل)" },
        { en: "D. Instrument where the HOLDER can demand cash equal to the shares' market value → whole instrument a LIABILITY (variable number of own shares = cash-equivalent)", ar: "د. أداة يستطيع حاملها طلب نقد يعادل القيمة السوقية للأسهم ← الأداة كلها التزام (عدد متغير من الأسهم الذاتية = مكافئ نقدي)" },
        { en: "E. Convertible whose conversion is into shares 'worth 100' → the conversion fails fixed-for-fixed: liability + embedded derivative", ar: "ه. سند يتحول إلى أسهم «بقيمة ١٠٠» ← يفشل التحويل في الثابت مقابل الثابت: التزام + مشتق مضمن" },
      ],
    },
    { kind: "h", text: { en: "Compound instruments — split accounting", ar: "الأدوات المركبة — محاسبة الفصل" } },
    {
      kind: "p",
      text: {
        en: "A convertible bond is two instruments welded in one: a straight bond (a liability — unavoidable coupons and principal) and a conversion option (equity — a residual, fixed-for-fixed). IFRS requires the split because the liability element is a present obligation TODAY, whatever happens at conversion; the equity element is a contingent claim that may never crystallise. The mechanics are deliberate: measure the LIABILITY first at the market rate for similar straight debt, and define EQUITY as the residual — never the other way round. On conversion, both components simply move to share capital: no gain, no loss, no fresh measurement.",
        ar: "السند القابل للتحويل أداتان ملحومتان في واحدة: سند مستقيم (التزام — كوبونات وأصل حتمية) وخيار تحويل (ملكية — باقٍ ثابت مقابل ثابت). ويوجب المعيار الفصل لأن عنصر الالتزام التزام قائم اليوم أيًّا كان ما يقع عند التحويل؛ وعنصر الملكية مطالبة مشروطة قد لا تتبلور قط. والميكانيكا مقصودة: قِس الالتزام أولًا بمعدل السوق لديون مشابهة، وعرِّف الملكية بأنها الباقي — لا العكس أبدًا. وعند التحويل ينتقل العنصران ببساطة إلى رأس المال: لا ربح ولا خسارة ولا قياسًا جديدًا.",
      },
    },
    {
      kind: "steps",
      items: [
        { en: "Identify the LIABILITY component: the cash flows the instrument promises (coupon + redemption) discounted at the market rate for SIMILAR instruments WITHOUT a conversion feature", ar: "حدد مكوّن الالتزام: التدفقات الموعودة (كوبون + استرداد) مخصومة بمعدل السوق لأدوات مشابهة بلا تحويل" },
        { en: "The EQUITY component = the RESIDUAL: total proceeds − liability component (measured to zero first; never negative)", ar: "مكوّن الملكية = الباقي: إجمالي المتحصلات − الالتزام (يقاس أولًا ولا يكون سالبًا أبدًا)" },
        { en: "Book both at inception; afterwards the liability runs at amortised cost (EIR) and the equity component NEVER gets remeasured", ar: "يثبت العنصران عند النشأة؛ ثم يسري الالتزام بالتكلفة المطفأة ولا يعاد قياس الملكية أبدًا" },
        { en: "CONVERSION: carrying of the liability → equity (share capital + premium); NO gain or loss", ar: "التحويل: القيمة الدفترية للالتزام ← حقوق ملكية (رأس مال وعلاوة)؛ ولا ربح أو خسارة" },
        { en: "REDEMPTION (never converted): repay the liability and TRANSFER the equity component to retained earnings — it never runs through P&L", ar: "الاسترداد (دون تحويل): يسدد الالتزام ويحول مكوّن الملكية إلى الأرباح المحتجزة — لا يمس قائمة الأرباح" },
      ],
    },
    {
      kind: "example",
      title: { en: "Convertible bond split", ar: "فصل سند قابل للتحويل" },
      lines: [
        { en: "2,000 convertible 5% bonds, face 100 each (proceeds 200,000), convertible into 40 shares each; similar straight bonds yield 8%", ar: "٢٬٠٠٠ سند قابل للتحويل كوبونه ٥٪ واسميته ١٠٠ (متحصلات ٢٠٠ ألف)، يتحول كل سند إلى ٤٠ سهمًا؛ والمستقيم المشابه يعطي ٨٪" },
        { en: "Liability = PV of [5/yr coupons × 5 yrs + 100 at maturity] at 8% ≈ 88.0 per bond → 176,000", ar: "الالتزام = القيمة الحالية لكوبونات ٥ سنويًا لخمس سنوات و١٠٠ عند الاستحقاق بـ٨٪ ≈ ٨٨ للسند ← ١٧٦٬٠٠٠" },
        { en: "Equity residual = 200,000 − 176,000 = 24,000 (a conversion equity, inside equity forever)", ar: "الباقي الملكوي = ٢٠٠ ألف − ١٧٦ ألف = ٢٤ ألف (ملكية تحويل تسكن حقوق الملكية للأبد)" },
        { en: "The equity component gets NO subsequent measurement — the 8% vs 5% gap accretes through the liability's EIR", ar: "لا يعاد قياس مكوّن الملكية — والفارق ٨٪ مقابل ٥٪ يتضخم عبر فائدة الالتزام الفعلية" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The residual equity split", ar: "فصل الباقي الملكوي" },
      lines: [
        { en: "Liability = PV (contractual coupons + redemption) discounted at the MARKET rate for similar straight debt", ar: "الالتزام = القيمة الحالية (الكوبونات التعاقدية + الاسترداد) مخصومة بمعدل السوق لدين مستقيم مشابه" },
        { en: "Equity = total proceeds − liability — ALWAYS the residual, never independently valued in the books", ar: "الملكية = إجمالي المتحصلات − الالتزام — الباقي دائمًا ولا يقاس مستقلًا في الدفاتر أبدًا" },
        { en: "On conversion: Dr liability carrying → Cr share capital & premium (difference between par and carrying goes to premium)", ar: "عند التحويل: مدين دفترية الالتزام ← دائن رأس المال والعلاوة (فرق الاسمي عن الدفتري إلى العلاوة)" },
        { en: "On redemption: Dr liability + equity component → Cr cash / retained earnings — no P&L anywhere", ar: "عند الاسترداد: مدين الالتزام ومكوّن الملكية ← دائن النقد والأرباح المحتجزة — لا أرباح في أي موضع" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Issue costs of a compound instrument are allocated between the two components in proportion to the split of the proceeds: costs attributed to the liability component reduce its initial carrying amount (and hence feed the EIR), while costs attributed to the equity component are netted against it inside equity. The day-one arithmetic therefore runs twice — once for the proceeds, once for the costs — but the residual logic never changes: the liability is measured first, equity takes what remains.",
        ar: "توزَّع تكاليف إصدار الأداة المركبة على المكوّنين بنسبة توزيع المتحصلات: فما نُسب إلى عنصر الالتزام يخفض قيمته الأولية (ومن ثم يغذي الفائدة الفعلية)، وما نُسب إلى عنصر الملكية يصفَّط منه داخل حقوق الملكية. لذا تدور حسابات اليوم الأول مرتين — مرة للمتحصلات ومرة للتكاليف — لكن منطق الباقي لا يتغير أبدًا: يقاس الالتزام أولًا وتأخذ الملكية ما بقي.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Valuing the conversion option directly with option pricing — NEVER in the books: equity is the residual, full stop", ar: "تقييم خيار التحويل مباشرة بنماذج الخيارات — لا في الدفاتر أبدًا: فالملكية هي الباقي ونقطة" },
        { en: "Discounting the liability at the COUPON rate instead of the market rate for similar straight debt", ar: "خصم الالتزام بمعدل الكوبون بدل معدل السوق للدين المستقيم المشابه" },
        { en: "Remeasuring the equity component when the share price moves — it is measured ONCE, at inception, and never again", ar: "إعادة قياس مكوّن الملكية بتحرك سعر السهم — يقاس مرة واحدة عند النشأة ولا مرة بعدها" },
        { en: "Booking a gain or loss at conversion — both components simply transfer to share capital and premium", ar: "إثبات ربح أو خسارة عند التحويل — العنصران ينتقلان ببساطة إلى رأس المال والعلاوة" },
        { en: "Forgetting the accretion: the gap between the 8% market rate and the 5% coupon unwinds through the liability's EIR over the life", ar: "نسيان التضخم: فارق معدل السوق ٨٪ عن الكوبون ٥٪ ينفك عبر فائدة الالتزام الفعلية على مدى الحياة" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Compound instrument entries", ar: "قيود الأداة المركبة" },
      rows: [
        { dr: { en: "Cash 200,000", ar: "نقد ٢٠٠٬٠٠٠" }, cr: { en: "Convertible bond liability 176,000", ar: "التزام السند القابل للتحويل ١٧٦٬٠٠٠" }, red: true },
        { cr: { en: "Conversion equity (own equity) 24,000", ar: "ملكية التحويل ٢٤٬٠٠٠" }, red: true },
        { dr: { en: "Finance cost (EIR 8% × carrying)", ar: "مصروف تمويلي (٨٪ × الدفترية)" }, cr: { en: "Convertible bond liability (accretion)", ar: "التزام السند (تضخم)" } },
        { dr: { en: "Convertible bond liability (final carrying)", ar: "الالتزام (الدفترية الختامية)" }, cr: { en: "Share capital & premium (on conversion)", ar: "رأس مال وعلاوة (عند التحويل)" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Interest, distributions & the P&L geography", ar: "الفوائد والتوزيعات وجغرافيا الأرباح" } },
    {
      kind: "p",
      text: {
        en: "The classification decision dictates where the returns go: INTEREST, dividends and other returns on instruments classified as LIABILITIES are EXPENSES in P&L (they are returns on borrowed money); DISTRIBUTIONS to holders of equity instruments go straight to equity — declared in the statement of changes in equity, debited against retained earnings. Once a dividend is declared, the payable to shareholders is itself a financial liability. Tax effects follow the same river: the tax on liability-classified distributions runs through P&L like any finance cost; the tax on equity distributions adjusts equity.",
        ar: "قرار التصنيف يملي أين تذهب العوائد: الفوائد والتوزيعات وسائر عوائد الأدوات المصنفة التزامات مصروفات بالأرباح (فعوائد مال مقترض)؛ أما التوزيعات لحاملي أدوات الملكية فإلى حقوق الملكية مباشرة — تعلن في قائمة التغيرات وتخصم من الأرباح المحتجزة. وبمجرد إعلان التوزيع يصبح المستحق للمساهمين ذاته التزامًا ماليًا. والآثار الضريبية تتبع النهر نفسه: ضريبة توزيعات الالتزامات تمر بالأرباح كأي مصروف تمويلي؛ وضريبة توزيعات الملكية تعدل حقوق الملكية.",
      },
    },
    {
      kind: "journal",
      title: { en: "Interest on a liability-classified preference share vs an ordinary dividend", ar: "فائدة أسهم ممتازة مصنفة التزامًا مقابل توزيع أسهم عادية" },
      rows: [
        { dr: { en: "Finance cost (P&L) 12,000", ar: "مصروف تمويلي (بالأرباح) ١٢٬٠٠٠" }, cr: { en: "Cash 12,000 — 6% coupon on 200,000 redeemable prefs (a LIABILITY)", ar: "نقد ١٢٬٠٠٠ — كوبون ٦٪ على ٢٠٠٬٠٠٠ أسهم ممتازة مستردة (التزام)" }, red: true },
        { dr: { en: "Retained earnings 30,000", ar: "الأرباح المحتجزة ٣٠٬٠٠٠" }, cr: { en: "Dividends payable 30,000 — ordinary dividend DECLARED", ar: "توزيعات مستحقة ٣٠٬٠٠٠ — توزيع أسهم عادية معلن" }, red: true },
        { cr: { en: "— — the declared dividend payable is now a financial liability", ar: "— — التوزيع المعلن المستحق صار التزامًا ماليًا الآن" } },
      ],
    },
    { kind: "h", text: { en: "Treasury shares & own-equity dealings", ar: "الأسهم الخزانية ومعاملات حقوق الملكية الذاتية" } },
    {
      kind: "list",
      items: [
        { en: "Own shares repurchased (treasury shares) → a DEDUCTION from equity, at cost, in the statement of financial position", ar: "الأسهم الذاتية المشتراة (خزينة) ← خفض من حقوق الملكية بالتكلفة" },
        { en: "Gains/losses on buying/selling/cancelling/issuing OWN equity instruments → NEVER to P&L; they move within equity (like a dividend-in-reverse)", ar: "أرباح/خسائر شراء أو بيع أو إلغاء أو إصدار أدوات الملكية الذاتية ← لا تمس الأرباح أبدًا؛ تتحرك داخل حقوق الملكية" },
        { en: "Transaction costs of an equity transaction are equity account entries (net against proceeds), net of related tax effects", ar: "تكاليف معاملات حقوق الملكية تقيَّد في حقوق الملكية (صافي المتحصلات) بعد الآثار الضريبية" },
        { en: "Distributions to holders of EQUITY instruments → the statement of changes in equity; INTEREST & other returns to holders of LIABILITIES → P&L expense", ar: "التوزيعات لحاملي أدوات الملكية ← قائمة التغيرات؛ والفوائد لحاملي الالتزامات ← مصروف بالأرباح" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Treasury shares — buy back 10,000 at 12, reissue 4,000 at 15, cancel 6,000 (par 1)", ar: "أسهم خزانية — إعادة شراء ١٠٬٠٠٠ عند ١٢، إعادة إصدار ٤٬٠٠٠ عند ١٥، إلغاء ٦٬٠٠٠ (اسمي ١)" },
      rows: [
        { dr: { en: "Treasury shares (equity deduction) 120,000", ar: "أسهم خزانية (خفض حقوق الملكية) ١٢٠٬٠٠٠" }, cr: { en: "Cash 120,000", ar: "نقد ١٢٠٬٠٠٠" }, red: true },
        { dr: { en: "Cash 60,000", ar: "نقد ٦٠٬٠٠٠" }, cr: { en: "Treasury shares 48,000", ar: "أسهم خزانية ٤٨٬٠٠٠" } },
        { cr: { en: "Share premium 12,000 — the gain NEVER touches P&L", ar: "علاوة إصدار ١٢٬٠٠٠ — المكسب لا يمس الأرباح أبدًا" }, red: true },
        { dr: { en: "Share capital 6,000 + share premium 66,000", ar: "رأس المال ٦٬٠٠٠ + علاوة إصدار ٦٦٬٠٠٠" }, cr: { en: "Treasury shares 72,000 — cancelled, within equity", ar: "أسهم خزانية ٧٢٬٠٠٠ — أُلغيت داخل حقوق الملكية" } },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Own shares are the only 'asset' that is never an asset: treasury shares deduct from equity at cost, and every dealing in them lives and dies inside the equity section — buying low and selling high books NOTHING to profit.",
        ar: "الأسهم الذاتية «الأصل» الوحيد الذي ليس أصلًا أبدًا: تُخصم الأسهم الخزانية من حقوق الملكية بالتكلفة، وكل معاملة فيها تولد وتموت داخل حقوق الملكية — فالشراء رخيصًا والبيع غاليًا لا يثبت في الأرباح شيئًا.",
      },
    },
    { kind: "h", text: { en: "Offsetting", ar: "المقاصة" } },
    {
      kind: "tree",
      root: { en: "Present a financial asset and a financial liability net?", ar: "عرض أصل مالي والتزام مالي صافيًا؟" },
      branches: [
        {
          when: { en: "A LEGALLY ENFORCEABLE RIGHT to set off the amounts + the intention to settle NET (or simultaneously)", ar: "حق قانوني نافذ في المقاصة + نية التسوية الصافية (أو المتزامنة)" },
          then: { en: "Offset — IAS 32.42's twin gates", ar: "قاص — بوابتا IAS 32.42", red: true },
        },
        {
          when: { en: "Only a MASTER NETTING AGREEMENT (the right exists but settlement is gross)", ar: "اتفاقية إطار مقاصة فقط (الحق قائم والتسوية إجمالية)" },
          then: { en: "NO offsetting — disclose the existence and effect of the agreement", ar: "لا مقاصة — أفصح عن الاتفاقية وأثرها", red: true },
        },
        {
          when: { en: "Rights arising from events after the reporting period or from an intention the counterparty does not share", ar: "حقوق تنشأ عن أحداث لاحقة للفترة أو نية لا يشارك فيها الطرف الآخر" },
          then: { en: "Not offsetting criteria — gross presentation stands", ar: "ليست معايير مقاصة — يبقى العرض الإجمالي" },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The right of set-off must be legally enforceable NOW — in the normal course of business, on default, or on insolvency — and the intention to settle net (or simultaneously) must exist at the reporting date. A master netting agreement usually provides the right while the cash still moves gross, so banks disclose rather than offset; the 2011 amendments pushed the effect into IFRS 7's quantitative disclosures. Timing matters: rights that arise only when a default happens still qualify; intentions that depend on a future event do not.",
        ar: "يجب أن يكون حق المقاصة نافذًا قانونيًا الآن — في النشاط الاعتيادي أو عند الإخلال أو الإعسار — وأن توجد نية التسوية الصافية (أو المتزامنة) بتاريخ التقرير. واتفاقية الإطار توفر الحق غالبًا بينما يتحرك النقد إجماليًا، فتفصح البنوك بدل أن تقاص؛ ودفع تعديل ٢٠١١ الأثر إلى الإفصاحات الكمية في IFRS 7. والتوقيت يهم: الحقوق التي تنشأ عند الإخلال فقط تظل مؤهلة؛ والنيات المتوقفة على حدث مستقبلي لا تؤهل.",
      },
    },
    {
      kind: "journal",
      title: { en: "Offsetting in presentation — derivative receivable 60 vs deposit payable 80, master netting + intent to settle net", ar: "المقاصة في العرض — مستحق مشتقات ٦٠ مقابل ودائع دائنة ٨٠ مع إطار مقاصة ونية التسوية الصافية" },
      rows: [
        { dr: { en: "Deposit liability (gross, before offset) 80,000", ar: "التزام ودائع (إجماليًا قبل المقاصة) ٨٠٬٠٠٠" }, cr: { en: "Derivative receivable 60,000", ar: "مستحق مشتقات ٦٠٬٠٠٠" }, red: true },
        { cr: { en: "— — the offset entry nets 60 against 80", ar: "— — قيد المقاصة يصافح ٦٠ من ٨٠" } },
        { dr: { en: "Balance sheet shows: deposit liability 20,000", ar: "الميزانية تعرض: التزام ودائع ٢٠٬٠٠٠" }, cr: { en: "— — only with the RIGHT + INTENTION both present", ar: "— — فقط بحضور الحق والنية معًا" } },
      ],
    },
    { kind: "h", text: { en: "Puttable instruments & obligations on liquidation", ar: "الأدوات القابلة للرد والتزامات التصفية" } },
    {
      kind: "p",
      text: {
        en: "The puttable exception saves member-owned entities from classifying their members' shares as liabilities: shares the holder can put back to the entity for cash look like liabilities by the general test, yet they represent the members' OWNERSHIP of the entity. The exception applies only to the MOST SUBORDINATE class — the deepest claim in liquidation — with strictly identical features across the class. The same exception covers obligations arising only on liquidation (cooperatives' statutory unwind rights). Everything else follows the general test: a liability is a liability.",
        ar: "يُنقذ استثناء الأدوات القابلة للرد الكيانات المملوكة للأعضاء من تصنيف أسهم أعضائها التزامات: فالأسهم التي يردها الحامل للمنشأة نقدًا تبدو التزامات بالاختبار العام، لكنها تجسد ملكية الأعضاء للكيان ذاته. ويطبق الاستثناء على الفئة الأعمق فقط — أعمق مطالبة عند التصفية — بسمات متطابقة تمامًا عبر الفئة. ويغطي الاستثناء ذاته الالتزامات الناشئة فقط عند التصفية (حقوق الحل التعاونية القانونية). وما عدا ذلك يتبع الاختبار العام: فالالتزام التزام.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "The class entitles the holder to the MOST SUBORDINATE claim on liquidation (the last in the queue)", ar: "تمنح الفئة حاملها أعمق مطالبة عند التصفية (آخر الصف)" },
        { en: "ALL instruments in the class have identical features (pro-rata, same put terms)", ar: "جميع أدوات الفئة بسمات متطابقة (تناسبية وبشروط رد واحدة)" },
        { en: "The put operates across the WHOLE class — no side deals with senior classes", ar: "الرد يسري على الفئة كلها — لا صفقات جانبية مع فئات أعمق أولوية" },
        { en: "Apart from the put, the instrument has no other obligation to deliver cash", ar: "عدا الرد، لا على الأداة التزام آخر بتسليم نقد" },
        { en: "Disclosures are the price of the exception: the class's terms, amounts, and how the put price is determined", ar: "الإفصاحات ثمن الاستثناء: شروط الفئة ومقاديرها وكيفية تحديد سعر الرد" },
      ],
    },
    { kind: "h", text: { en: "Contingent settlement provisions", ar: "بنود التسوية المشروطة" } },
    {
      kind: "p",
      text: {
        en: "Some instruments only oblige the issuer if an uncertain event happens — a regulator blocks a project, revenues miss a target, an IPO fails to occur. IAS 32's answer is blunt: the CONTINGENCY does not excuse the liability. The instrument is a financial liability unless the contingency (a) is not genuine (so unrealistic it will never drive settlement — judgement, disclosed), or (b) arises only on liquidation and the instrument sits in the most-subordinate puttable-style class. A 'conversion to shares if the IPO succeeds, cash if it fails' structure is therefore a liability from day one — the cash alternative is real.",
        ar: "بعض الأدوات لا تلزم المُصدر إلا إذا وقع حدث غير مؤكد — فتحجب جهة رقابية مشروعًا، أو تخفق الإيرادات في هدف، أو لا يقع الطرح العام. وجواب IAS 32 صارم: المشروطية لا تعفي الالتزام. فالأداة التزام مالي إلا إذا كان الشرط (أ) غير حقيقي (غير واقعي لدرجة أنه لن يدفع تسوية أبدًا — بحكم يفصح عنه)، أو (ب) لا ينشأ إلا عند التصفية وتقع الأداة في الفئة الأعمق على نمط القابلة للرد. فبنية «تحويل إلى أسهم إن نجح الطرح ونقد إن فشل» إذن التزام منذ اليوم الأول — فبديل النقد حقيقي.",
      },
    },
    { kind: "h", text: { en: "Rights issues & the currency edge", ar: "حقوق الأولوية وحافة العملة" } },
    {
      kind: "p",
      text: {
        en: "Rights issues offered PRO RATA to existing shareholders for a fixed amount of currency are classified as equity even when the fixed price is denominated in a currency other than the entity's functional currency — the deliberate exception that stops FX movements turning a rights option into a derivative liability. The classification follows the contract at issuance: fixed price in some currency, fixed shares on exercise, pro rata across the class. Anything that reintroduces variability (a strike re-set to market) puts the instrument back into liability territory.",
        ar: "حقوق الأولوية المقدمة بالتناسب للمساهمين الحاليين مقابل مبلغ نقدي ثابت تصنف ملكية حتى لو كان السعر الثابت بعملة غير عملة المنشأة الوظيفية — استثناء مقصود يمنع تحركات العملة من تحويل حق أولوية إلى التزام مشتق. ويتبع التصنيف العقد عند الإصدار: سعر ثابت بعملة ما، وأسهم ثابتة عند الممارسة، وتناسب عبر الفئة. وأي ما يعيد التقلب (إعادة ضرب سعر ممارسة على السوق) يعيد الأداة إلى أرض الالتزامات.",
      },
    },
    { kind: "h", text: { en: "The classification procedure — five moves", ar: "إجراء التصنيف — خمس حركات" } },
    {
      kind: "steps",
      items: [
        { en: "1. Read the CONTRACTUAL terms — not the label on the cover page ('share', 'note', 'unit')", ar: "١. اقرأ الشروط التعاقدية — لا المسمى على صفحة الغلاف («سهمًا» أو «صكًا» أو «وحدة»)" },
        { en: "2. Hunt for an UNAVOIDABLE obligation: cash, another financial asset, or exchange on unfavourable terms — found → LIABILITY", ar: "٢. ابحث عن التزام حتمي: نقد أو أصل مالي آخر أو مبادلة بشروط مجحفة — وُجد ← التزام" },
        { en: "3. If settlement is in OWN SHARES, run FIXED-FOR-FIXED: a fixed number for a fixed amount → equity; any variability → liability", ar: "٣. إن كانت التسوية بأسهم ذاتية طبّق الثابت مقابل الثابت: عدد ثابت مقابل مبلغ ثابت ← ملكية؛ وأي تقلب ← التزام" },
        { en: "4. If both worlds live in one instrument (coupons + conversion) → COMPOUND: split the liability first, equity is the residual", ar: "٤. إن سكن العالمان أداةً واحدة (كوبونات + تحويل) ← أداة مركبة: فاصل الالتزام أولًا والملكية باقٍ" },
        { en: "5. Route the RETURNS from the classification: interest on liabilities → P&L; distributions on equity → SOCIE; own-share dealings → within equity, never P&L", ar: "٥. وجّه العوائد من التصنيف: فوائد الالتزامات ← الأرباح؛ وتوزيعات الملكية ← قائمة التغيرات؛ ومعاملات الأسهم الذاتية ← داخل حقوق الملكية لا الأرباح أبدًا" },
      ],
    },
    { kind: "h", text: { en: "The EPS shadow", ar: "ظل ربح السهم" } },
    {
      kind: "p",
      text: {
        en: "Every IAS 32 answer casts an IAS 33 shadow: instruments classified as LIABILITIES reduce the EPS numerator — their coupons/interest are expenses, so the redeemable preference dividend comes off earnings — while instruments classified as EQUITY leave the numerator alone (ordinary dividends do not touch it). A convertible bond, once split, adds back the liability's finance cost to the diluted-EPS numerator and brings the converted shares into the denominator under the if-converted method. Classify first, then let EPS follow — one boundary decision drives two standards' numbers.",
        ar: "لكل إجابة IAS 32 ظل في IAS 33: فالأدوات المصنفة التزامات تخفض بسط ربح السهم — فكوبوناتها وفوائدها مصروفات، وتوزيع الأسهم الممتازة المستردة يُحسم من الأرباح — بينما تترك الأدوات المصنفة ملكية البسط وسليمًا (فتوزيعات العادية لا تمسه). والسند القابل للتحويل، بعد الفصل، يعيد مصروف تمويل الالتزام إلى بسط ربح السهم المخفف ويُدخل الأسهم المحولة إلى المقام بأسلوب «لو حوّل». صنّف أولًا ثم ليتبع ربح السهم — فقرار حدود واحد يقود أرقام معيارين.",
      },
    },
    { kind: "h", text: { en: "Disclosure bridge", ar: "جسر الإفصاح" } },
    {
      kind: "p",
      text: {
        en: "IAS 32's presentation decisions feed IFRS 1-style flows into other standards: the liability/equity split drives EPS (IAS 33 — the liability's interest reduces the numerator and can trigger dilution machinery), the EIR drives interest expense, and IFRS 7 tells the story. The 2020 amendment also cleaned the costs of an equity transaction and 'fixed-for-fixed' wording for converted items — minor, examinable. Offsetting disclosures moved to IFRS 7 in 2011; what remains here is the classification, the split, the treasury accounting and the offsetting presentation rule itself.",
        ar: "تغذي قرارات عرض IAS 32 معايير أخرى: تقسيم الالتزام/الملكية يقود ربح السهم (فائدة الالتزام تخفض البسط وقد تفعّل آلة التخفيف)، والفائدة الفعلية تقود مصروف الفائدة، وIFRS 7 يحكي القصة. ونقح تعديل ٢٠٢٠ تكاليف معاملات الملكية وصياغة «الثابت مقابل الثابت» للبنود المحولة — يسيرة وقابلة للامتحان. وانتقلت إفصاحات المقاصة إلى IFRS 7 في ٢٠١١؛ وبقي هنا التصنيف والفصل ومحاسبة الخزانية وقاعدة عرض المقاصة ذاتها.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The exam question is always 'who bears the risk?' — an unavoidable outflow (whatever the label) = liability; a residual interest = equity. Redeemable preference shares = LIABILITY (a put!); perpetuals with discretionary coupons = EQUITY.",
        ar: "السؤال دائمًا «من يتحمل الخطر؟» — تدفق حتمي (أيًّا كان المسمى) = التزام؛ ومصلحة متبقية = ملكية. الأسهم الممتازة القابلة للاسترداد = التزام (حق رد!)؛ والدائمة بكوبونات تقديرية = ملكية.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Split accounting's residual rule: EQUITY is ALWAYS the residual — never attempt to value the conversion option directly in the books (that is a valuation-science exercise, not the accounting answer).",
        ar: "قاعدة الباقي في الفصل: الملكية دائمًا الباقي — لا تحاول تقييم خيار التحويل مباشرة في الدفاتر (فذلك تمرين تقييم لا جواب محاسبي).",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Preference shares are the trap family: mandatory redemption → liability; coupons that are NOT discretionary → liability (accrued!); discretionary perpetual coupons → equity; conversion into a VARIABLE number of shares → liability. Read the preference terms line by line before answering.",
        ar: "الأسهم الممتازة عائلة الفخاخ: استرداد إلزامي ← التزام؛ وكوبونات غير تقديرية ← التزام (تتراكم!)؛ وكوبونات دائمة تقديرية ← ملكية؛ وتحويل إلى عدد متغير من الأسهم ← التزام. اقرأ شروط الامتياز سطرًا سطرًا قبل الإجابة.",
      },
    },
    {
      kind: "note",
      text: {
        en: "IAS 32 draws the boundary, IFRS 9 measures both sides (the liability at amortised cost, the embedded derivatives at FVTPL), IFRS 7 discloses — one instrument, three standards, one story.",
        ar: "IAS 32 يرسم الحدود، وIFRS 9 يقيس الجانبين (الالتزام بالتكلفة المطفأة والمشتقات المضمنة بـFVTPL)، وIFRS 7 يفصح — أداة واحدة وثلاثة معايير وحكاية واحدة.",
      },
    },
    { kind: "h", text: { en: "Transition & interactions", ar: "الانتقال والتفاعلات" } },
    {
      kind: "p",
      text: {
        en: "IAS 32 has applied since 2005, with the 2008 puttable-instruments amendment (post the fund crisis), the 2011 shift of offsetting disclosures to IFRS 7, and the 2020 fixed-for-fixed/costs amendment refining the edges. It interacts everywhere: IFRS 9 for measurement of both sides, IFRS 13 for any fair-value moments (embedded derivatives at bifurcation), IAS 33 for the EPS effects of the liability interest, IFRS 2 when own shares are granted to employees, and IAS 1 for the equity presentation itself. For the exam: classify under IAS 32 FIRST — every later number depends on that one answer.",
        ar: "يعمل IAS 32 منذ ٢٠٠٥، مع تعديل الأدوات القابلة للرد ٢٠٠٨ (بعد أزمة الصناديق)، وتحويل إفصاحات المقاصة إلى IFRS 7 في ٢٠١١، وتعديل ٢٠٢٠ للثابت مقابل الثابت والتكاليف ينقّح الحواف. ويتفاعل في كل مكان: IFRS 9 لقياس الجانبين، وIFRS 13 للحظات العادلة (المشتقات المضمنة عند الفصل)، وIAS 33 لآثار فائدة الالتزام في ربح السهم، وIFRS 2 عند منح الأسهم الذاتية للعاملين، وIAS 1 لعرض حقوق الملكية ذاتها. وللامتحان: صنّف وفق IAS 32 أولًا — فكل رقم لاحق يتوقف على ذلك الجواب الواحد.",
      },
    },
  ],
}
