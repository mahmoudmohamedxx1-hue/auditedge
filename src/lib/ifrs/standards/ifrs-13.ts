/** IFRS 13 — Fair Value Measurement */

import type { Standard } from "../types"

export const IFRS_13: Standard = {
  code: "IFRS 13",
  title: { en: "Fair Value Measurement", ar: "قياس القيمة العادلة" },
  topic: "instruments",
  effective: { en: "Effective 1 Jan 2013 · one framework for every fair value in IFRS", ar: "سارٍ من ١ يناير ٢٠١٣ · إطار واحد لكل قيمة عادلة في المعايير" },
  blocks: [
    { kind: "h", text: { en: "The definition — every word earns marks", ar: "التعريف — كل كلمة بدرجات" } },
    {
      kind: "p",
      text: {
        en: "Fair value is the price that would be received to sell an ASSET or paid to TRANSFER a LIABILITY in an ORDERLY transaction between MARKET PARTICIPANTS at the MEASUREMENT DATE. It is an EXIT price — what you would get, not what you would pay to buy (an entry price). It assumes an orderly transaction (not a forced sale or fire-sale liquidation) in the PRINCIPAL (or most advantageous) market — the market with the greatest volume and level of activity for the asset. The measurement is a MARKET-based view: what the market would pay, never what the asset is worth to THIS entity.",
        ar: "القيمة العادلة هي الثمن الذي يُقبض لبيع أصل أو يُدفع لنقل التزام في معاملة منتظمة بين مشاركي السوق بتاريخ القياس. وهي سعر خروج — ما ستناله، لا ما ستدفعه للشراء (سعر دخول). وتفترض معاملة منتظمة (لا بيعًا جبريًا أو تصفية بمخفضات) في السوق الرئيسية (أو الأكثر ملاءمة) — السوق الأعلى حجمًا ونشاطًا للأصل. والقياس منظر قائم على السوق: ما سيدفعه السوق، لا قيمة الأصل لهذه المنشأة بعينها أبدًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Market participants are independent, knowledgeable, able and willing — NOT the entity's actual counterpart, and NOT a specific buyer with synergies.",
        ar: "مشاركو السوق مستقلون عارفون قادرون راغبون — لا نظيرك الفعلي ولا مشتر بعينه يملك تآزرًا خاصًا.",
      },
    },
    { kind: "h", text: { en: "Scope — when IFRS 13 applies (and when not)", ar: "النطاق — متى يطبق IFRS 13 ومتى لا" } },
    {
      kind: "p",
      text: {
        en: "IFRS 13 applies WHENEVER another standard requires or permits a fair-value measurement or fair-value disclosure — IFRS 9 instruments, IAS 40 investment property, IAS 41 biological assets, IFRS 3 acquisition-date values, IAS 36 fair-value-less-costs-of-disposal, share-plan measurements that reference fair value. It never decides WHEN to use fair value; it only defines HOW once the choice is made. The lookalikes are excluded because they are NOT fair value, and the exclusion list is exam gold: net realisable value (IAS 2) and value in use (IAS 36) carry costs and entity-specific assumptions a market exit price never would.",
        ar: "يطبق IFRS 13 كلما طلب معيار آخر قياسًا أو إفصاحًا بالقيمة العادلة أو أجازه — أدوات IFRS 9، وعقارات الاستثمار IAS 40، والأصول البيولوجية IAS 41، وقيم تاريخ الاستحواذ IFRS 3، والعادلة ناقص تكاليف التصرف في IAS 36، وقياسات خطط الأسهم المرجعة إلى العادلة. وهو لا يقرر متى تستخدم العادلة أبدًا؛ بل يعرّف كيف متى اتُّخذ القرار. والمشابهات مستبعدة لأنها ليست قيمة عادلة، وقائمة الاستبعاد ذهب امتحاني: القيمة البيعية الصافية (IAS 2) والقيمة الاستخدامية (IAS 36) تحملان تكاليف وافتراضات خاصة بالمنشأة لن يحملها سعر خروج سوقي.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "IN: every fair value another standard requires — financial instruments (IFRS 9), investment property (IAS 40), biological assets (IAS 41), impairment's FVLCD (IAS 36), business-combination values (IFRS 3), lessee and lessor measurements that reference FV", ar: "داخل: كل قيمة عادلة يطلبها معيار آخر — الأدوات المالية (IFRS 9)، وعقارات الاستثمار (IAS 40)، والأصول البيولوجية (IAS 41)، والعادلة ناقص تكاليف في IAS 36، وقيم الاندماج (IFRS 3)، وقياسات الإيجار المرجعة للعادلة" },
        { en: "OUT (lookalikes, not fair value): net realisable value (IAS 2) and value in use (IAS 36) — both are net of costs and entity-specific", ar: "خارج (مشابهات لا عادلة): القيمة البيعية الصافية (IAS 2) والقيمة الاستخدامية (IAS 36) — كلتاهما صافية التكاليف وخاصة بالمنشأة" },
        { en: "OUT: share-based payment measurements under IFRS 2 (its own fair-value machinery) and lease measurements whose own standards define them", ar: "خارج: قياسات المدفوعات المقومة بالأسهم وفق IFRS 2 (بآلته الخاصة)، وقياسات الإيجار التي تعرفها معاييرها" },
        { en: "The standard applies to BOTH initial and subsequent measurements, and to DISCLOSURES about fair value even when the item is not carried at FV", ar: "يطبق المعيار على القياس الأولي واللاحق معًا، وعلى الإفصاحات عن العادلة حتى لو لم يُحمل البند بها" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "PRINCIPAL vs MOST ADVANTAGEOUS market: the principal market is the one with the greatest volume and level of activity for the asset — and the entity MUST have access to it. When a principal market exists, its price is the fair value EVEN IF another market would pay more. Only in its absence does the entity use the most advantageous market — the one that maximises the proceeds (after transaction and transport costs, which point to the market but never enter the price itself). A London share quoted also in Frankfurt: London's quote wins, full stop.",
        ar: "السوق الرئيسية مقابل الأكثر ملاءمة: الرئيسية هي الأعلى حجمًا ونشاطًا للأصل — ويجب أن يكون للمنشأة إليها سبيل. ومتى وجدت سوق رئيسية فسعرها هو القيمة العادلة ولو دفع سوق آخر أكثر. وفي غيابها فقط تستخدم المنشأة الأكثر ملاءمة — التي تعظم المتحصلات (بعد تكاليف المعاملة والنقل التي تشير إلى السوق ولا تدخل السعر ذاته أبدًا). فسهم لندني مقتبس أيضًا في فرانكفورت: اقتباس لندن يحسم دون نقاش.",
      },
    },
    {
      kind: "tree",
      root: { en: "Which market's price is the fair value?", ar: "سعر أي سوق هو القيمة العادلة؟" },
      branches: [
        {
          when: { en: "A PRINCIPAL market exists (greatest volume & activity) AND the entity can access it", ar: "توجد سوق رئيسية (الأعلى حجمًا ونشاطًا) وللمنشأة إليها سبيل" },
          then: { en: "Use the principal market's price — even if a different market would maximise proceeds", ar: "خذ سعر السوق الرئيسية — ولو عظّم سوق آخر المتحصلات", red: true },
        },
        {
          when: { en: "No principal market (thin, specialised assets)", ar: "لا سوق رئيسية (أصول رقيقة أو متخصصة)" },
          then: { en: "MOST ADVANTAGEOUS market: the one maximising proceeds net of transaction & transport costs", ar: "السوق الأكثر ملاءمة: التي تعظم المتحصلات صافية تكاليف المعاملة والنقل", red: true },
        },
        {
          when: { en: "No market at all (a bespoke liability, a private stake)", ar: "لا سوق أصلًا (التزام مصنوع خصيصًا، حصة خاصة)" },
          then: { en: "A HYPOTHETICAL transaction from the entity's perspective — an assumed sale/transfer to a market participant, priced by valuation technique", ar: "معاملة افتراضية من منظور المنشأة — بيع أو نقل مفترض لمشارك سوق، يسعَّر بتقنية تقييم", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Key definitions", ar: "التعريفات المفتاحية" } },
    {
      kind: "list",
      items: [
        { en: "EXIT PRICE — the price to sell the asset / transfer the liability; the measurement objective of every fair value", ar: "سعر الخروج — ثمن بيع الأصل أو نقل الالتزام؛ وهو هدف القياس لكل قيمة عادلة" },
        { en: "ENTRY PRICE — the price to acquire; equals fair value only by coincidence (IFRS 9's day-one discipline tests the gap)", ar: "سعر الدخول — ثمن الاقتناء؛ ولا يساوي العادلة إلا مصادفةً (وانضباط اليوم الأول في IFRS 9 يختبر الفجوة)" },
        { en: "PRINCIPAL MARKET — greatest volume + level of activity; MOST ADVANTAGEOUS — maximises proceeds when no principal exists", ar: "السوق الرئيسية — الأعلى حجمًا ونشاطًا؛ والأكثر ملاءمة — تعظم المتحصلات عند غياب الرئيسية" },
        { en: "HIGHEST AND BEST USE — the use that maximises the value of the asset (or a group of assets): physically possible, legally permissible, financially feasible", ar: "أفضل وأعلى استخدام — الاستخدام الذي يعظم قيمة الأصل (أو مجموعة أصول): ممكن ماديًا، جائز قانونيًا، مجدٍ ماليًا" },
        { en: "VALUATION PREMISE — IN-USE (value depends on other assets in a group) vs IN-EXCHANGE (stand-alone value)", ar: "فرضية التقييم — الاستخدام مع غيره (تتوقف القيمة على أصول متممة) مقابل الاستقلال (قيمة منفردة)" },
        { en: "TRANSPORT COSTS — the cost of getting the asset to the market: deducted from the principal-market price to arrive at fair value", ar: "تكاليف النقل — كلفة نقل الأصل إلى السوق: تُخصم من سعر السوق الرئيسية للوصول إلى العادلة" },
        { en: "TRANSACTION COSTS — dealing costs of the sale: NOT part of fair value at all (they are specific to the transaction, not to the market)", ar: "تكاليف المعاملة — تكاليف تنفيذ البيع: ليست جزءًا من العادلة أصلًا (خاصة بالمعاملة لا بالسوق)" },
      ],
    },
    { kind: "h", text: { en: "The fair-value measurement approach — the standard's own sequence", ar: "أسلوب قياس القيمة العادلة — تسلسل المعيار ذاته" } },
    {
      kind: "steps",
      items: [
        { en: "1. Determine the ASSET or LIABILITY (the unit of account: a single instrument, unless a portfolio exception applies)", ar: "١. حدد الأصل أو الالتزام (وحدة القياس: أداة واحدة إلا في استثناء المحفظة)" },
        { en: "2. Determine the VALUATION PREMISE — for non-financial assets: in-use or in-exchange (highest and best use decides)", ar: "٢. حدد فرضية التقييم — للأصول غير المالية: مع غيره أو مستقلًا (يحسمها أفضل استخدام)" },
        { en: "3. Determine the PRINCIPAL (or most advantageous) market and the market participants", ar: "٣. حدد السوق الرئيسية (أو الأكثر ملاءمة) ومشاركي السوق" },
        { en: "4. Determine the appropriate VALUATION TECHNIQUE(S) — market, income, cost — maximising observable inputs", ar: "٤. حدد تقنيات التقييم المناسبة — السوق، الدخل، التكلفة — بتعظيم المدخلات الملحوظة" },
        { en: "5. Determine the INPUTS and the hierarchy level, then calibrate to any day-one transaction price and disclose", ar: "٥. حدد المدخلات ومستوى التدرج، ثم عاير على سعر معاملة اليوم الأول وأفصح" },
      ],
    },
    { kind: "h", text: { en: "Valuation — the asset's perspective & highest and best use", ar: "التقييم — منظور الأصل وأفضل وأعلى استخدام" } },
    {
      kind: "tree",
      root: { en: "Highest and best use (non-financial assets)", ar: "أفضل وأعلى استخدام (الأصول غير المالية)" },
      branches: [
        {
          when: { en: "PHYSICALLY possible · legally permissible · financially feasible — the use a market participant would choose, maximizing the asset's value (or a group's)", ar: "ممكن ماديًا وجائز قانونيًا ومجدٍ ماليًا — الاستخدام الذي سيختاره مشارك السوق معظمًا لقيمة الأصل" },
          then: { en: "The valuation premise follows: IN-USE (value depends on other assets; assumes the complementary assets are available to market participants) vs IN-EXCHANGE (stand-alone)", ar: "تعتمد فرضية التقييم: الاستخدام مع غيره (تتوقف القيمة على أصول متممة متاحة للمشاركين) أو الاستقلال (منفردًا)", red: true },
        },
        {
          when: { en: "LIABILITIES & own equity instruments: the transfer concept — what a market participant would demand to assume the obligation; non-performance risk included", ar: "الالتزامات وأدوات حقوق الملكية: مفهوم النقل — ما يطلبه مشارك السوق لتحمل الالتزام؛ متضمنًا مخاطر عدم الأداء" },
          then: { en: "The exit price embeds the entity's own credit standing (own credit risk for liabilities)", ar: "سعر الخروج يدمج مركز الائتمان الذاتي للمنشأة", red: true },
        },
        {
          when: { en: "Restricted assets (shares with a sale restriction): the restriction's effect on value enters IF market participants would consider it", ar: "الأصول المقيدة (أسهم مقيدة البيع): يدخل أثر القيد إن أخذه مشاركو السوق بالحسبان" },
          then: { en: "Measure the restriction's effect — not ignore it by default", ar: "قِس أثر القيد — ولا تهمله افتراضيًا" },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Highest and best use is judged from a MARKET PARTICIPANT's perspective, and the entity's own intention is irrelevant: land the entity farms residentially is measured at its development value if participants would redevelop — the entity does not have to intend, or be able, to redevelop itself. The asset is measured at its HBU whether it is used standalone (in-exchange) or with other assets (in-use, assuming participants can obtain the complementary assets). Restriction effects enter when participants would price them — and an entity-specific covenant nobody else bears never does.",
        ar: "يُحكم على أفضل وأعلى استخدام من منظور مشارك السوق، ونية المنشأة ذاتها لا وزن لها: فأرض تزرعها المنشأة سكنيًا تقاس بقيمتها التطويرية لو كان المشاركون سيعيدون التطوير — دون حاجة لأن تنوي المنشأة ذلك أو تقدر عليه. ويقاس الأصل بأفضل استخدامه سواء استُعمل منفردًا (استقلالًا) أو مع أصول أخرى (مع غيرها، بافتراض قدرة المشاركين على نيل الأصول المتممة). وتدخل آثار القيود حين يسعّرها المشاركون — أما شرط تعاقدي خاص بالمنشأة لا يحمله غيرها فلا يدخل أبدًا.",
      },
    },
    {
      kind: "example",
      title: { en: "Highest and best use — the land that outgrew its farm", ar: "أفضل وأعلى استخدام — الأرض التي تجاوزت مزرعتها" },
      lines: [
        { en: "Land carried in use as residential: identical plots in the same street trade at 1.0m (Level 1 comparable)", ar: "أرض محملة استخدامًا سكنيًا: قطع مطابقة في الشارع ذاته تتداول عند ١٫٠ مليون (مقارنة مستوى أول)" },
        { en: "Obtaining commercial rezoning is legally permissible and would lift the value to 1.6m; the rezoning costs 0.2m", ar: "الحصول على إعادة تقسيم تجارية جائز قانونيًا ويرفع القيمة إلى ١٫٦ مليون؛ وتكلفة إعادة التقسيم ٠٫٢ مليون" },
        { en: "Fair value = 1.6m − 0.2m = 1.4m — market participants would bid the development value, so HBU (commercial) beats the current use even though the entity will never rezone", ar: "القيمة العادلة = ١٫٦ − ٠٫٢ = ١٫٤ مليون — سيزايد المشاركون على قيمة التطوير، فيغلب الاستخدام التجاري الاستخدامَ الراهن ولو لم تُعد المنشأة التقسيم أبدًا" },
        { en: "The entity's intention (keep farming) changes nothing — that is the market-based measurement discipline", ar: "نية المنشأة (الاستمرار زراعةً) لا تغير شيئًا — هذا هو انضباط القياس القائم على السوق" },
      ],
    },
    { kind: "h", text: { en: "Liabilities & own equity instruments", ar: "الالتزامات وأدوات حقوق الملكية" } },
    {
      kind: "p",
      text: {
        en: "A liability's fair value is the price a market participant would demand to ASSUME the obligation at the measurement date — a transfer, not a settlement. That price embeds NON-PERFORMANCE RISK: the risk the entity will not fulfil, including its own credit standing — a weakening entity's liability gets cheaper, and under IFRS 9 that own-credit slice parks in OCI. When no transfer market exists, a hypothetical one is assumed, often priced by reference to the asset side (what a participant holding the identical instrument as an ASSET would pay).",
        ar: "عادلة الالتزام هي الثمن الذي سيطلبه مشارك سوق لتحمل الالتزام بتاريخ القياس — نقلًا لا تسوية. ويستوعب هذا الثمن مخاطر عدم الأداء: خطر ألا تفي المنشأة، بما فيها مركزها الائتماني — فالتزام المنشأة المتدهورة يرخص، وتُركن تلك الشحة تحت IFRS 9 في الدخل الشامل. وعند غياب سوق نقل يفترض سوق افتراضي، ويسعَّر غالبًا بمرجعية جانب الأصل (ما يدفعه مشارك يحمل الأداة ذاتها أصلًا).",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Non-performance risk (own credit) is IN — a liability's FV falls as the issuer's credit deteriorates", ar: "مخاطر عدم الأداء (الائتمان الذاتي) داخلة — تنخفض عادلة الالتزام بسوء ائتمان المصدر" },
        { en: "A quoted price for the TRANSFER of an identical liability (or for the identical instrument held as an asset) = Level 1", ar: "سعر مقتبس لنقل التزام مطابق (أو للأداة ذاتها محمولة أصلًا) = المستوى الأول" },
        { en: "Obligations the entity will settle by its own performance (IFRS 15's performance obligations) have their own fair-value rule in IFRS 15 — the amount it would receive UPFRONT", ar: "الالتزامات التي ستفيها المنشأة بأدائها ذاته (التزامات أداء IFRS 15) لها قاعدة عادلتها في IFRS 15 — المبلغ الذي يتقاضى مقدَّمًا" },
      ],
    },
    { kind: "h", text: { en: "The three valuation techniques", ar: "التقنيات الثلاث للتقييم" } },
    {
      kind: "list",
      items: [
        { en: "MARKET approach: prices from identical/comparable transactions and markets — multiples, matrix pricing (quoted prices of comparable instruments)", ar: "أسلوب السوق: أسعار معاملات مطابقة أو مقارنة — مضاعفات، تسعير مصفوفي (أسعار أدوات مشابهة)" },
        { en: "INCOME approach: discounting future cash flows — DCF models, option-pricing (Black-Scholes, binomial), multi-period excess earnings", ar: "أسلوب الدخل: خصم تدفقات مستقبلية — نماذج التدفق المخصوم، نماذج الخيارات (بلاك-شولز، ثنائية)، مكاسب تتجاوز الدخل" },
        { en: "COST approach: current replacement cost — what it would cost to build a substitute with the same utility (adjusted for obsolescence)", ar: "أسلوب التكلفة: تكلفة الاستبدال الحالية — ما يلزم لبناء بديل بالمنفعة ذاتها (معدلة للتقادم)" },
        { en: "CALIBRATION: when a transaction price exists, calibrate the technique's unobservable inputs to that day-one price", ar: "المعايرة: عند وجود سعر معاملة، عاير المدخلات غير الملحوظة عليه في اليوم الأول" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Technique selection is not a free choice: use the technique for which observable data exist, that the market would use, and that captures the asset's risk-return; MAXIMISE the use of observable inputs. Valuation techniques must be consistent: same technique, consistently applied period to period, unless a change adds accuracy or a market change forces it. When multiple techniques compete, weight the one the evidence supports — often the market approach outranks a model it can calibrate against.",
        ar: "ليس انتقاء التقنية اختيارًا حرًا: استخدم التقنية التي تتوفر لها بيانات ملحوظة، والتي سيستخدمها السوق، والتي تلتقط مخاطر الأصل وعوائده؛ وعظّم استخدام المدخلات الملحوظة. ويجب اتساق التقنيات: التقنية ذاتها تطبق فترةً بعد فترة، إلا إذا زاد تغييرها الدقة أو أجبر تغير السوق عليه. وعند تنافس تقنيات متعددة رجّح التي يسندها الدليل — وغالبًا يتفوق أسلوب السوق على نموذج يمكنه معايرته.",
      },
    },
    { kind: "h", text: { en: "The 3-level hierarchy — the heart of the standard", ar: "التدرج الثلاثي — قلب المعيار" } },
    {
      kind: "tree",
      root: { en: "Classify EVERY fair value by the lowest level of significant input", ar: "صنف كل قيمة عادلة بأدنى مستوى لمدخلها الجوهري" },
      branches: [
        {
          when: { en: "LEVEL 1 — QUOTED prices in ACTIVE markets for IDENTICAL assets/liabilities the entity can access at the measurement date", ar: "المستوى ١ — أسعار مقتبسة في أسواق نشطة لأدوات مطابقة يمكن للمنشأة الوصول إليها" },
          then: { en: "Use the price WITHOUT adjustment (blockage discounts banned for Level 1; a big block trades at the same quoted price)", ar: "خذ السعر دون تعديل (خصومات الكتل محظورة في المستوى الأول)", red: true },
        },
        {
          when: { en: "LEVEL 2 — inputs OBSERVABLE, directly or indirectly: quoted prices for SIMILAR items, quotes in INACTIVE markets, observable rates/yields/volatilities, correlation-derived prices", ar: "المستوى ٢ — مدخلات ملحوظة مباشرة أو ضمنًا: أسعار أدوات مشابهة، أسعار أسواق غير نشطة، معدلات وتقلبات ملحوظة، أسعار مستنبطة بالارتباط" },
          then: { en: "Adjust for differences (unit counts, condition, location) with OBSERVABLE data", ar: "عدّل للفروق (الوحدات، الحالة، الموقع) ببيانات ملحوظة", red: true },
        },
        {
          when: { en: "LEVEL 3 — UNOBSERVABLE inputs: the entity's own assumptions about what market participants would use (a DCF's growth rate, a private share's discount for lack of marketability)", ar: "المستوى ٣ — مدخلات غير ملحوظة: افتراضات المنشأة عما سيستخدمه المشاركون (معدل نمو نموذج، خصم عدم قابلية التداول لسهم خاصة)" },
          then: { en: "Maximise observable inputs; disclose the rollforward, sensitivity and the measurement-uncertainty narrative", ar: "عظّم المدخلات الملحوظة؛ وأفصح عن التسوية والحساسية وسرد عدم التأكد", red: true },
        },
      ],
    },
    {
      kind: "list",
      items: [
        { en: "L1: an exchange-listed share; an on-the-run government bond; a commodity with a quoted close", ar: "المستوى ١: سهم مقتبس في بورصة؛ سند حكومي جارٍ؛ سلعة بسعر إقفال مقتبس" },
        { en: "L2: a corporate bond priced off the yield curve; a swapped fixed leg off an observable swap curve; matrix-priced MBS; an inactive-market quote still observable; a restricted share priced off an identical share minus a restriction discount", ar: "المستوى ٢: سند شركات مسعَّر من منحنى العائد؛ طرف ثابت من مبادلة بمنحنى ملحوظ؛ صكوك مقومة مصفوفيًا؛ سعر سوق غير نشطة ما يزال ملحوظًا؛ سهم مقيد مسعَّر من سهم مطابق بخصم القيد" },
        { en: "L3: a private equity stake (DLOM assumptions); a DCF on unobservable growth; an option priced with house volatility; IP repayment models for unquoted lending", ar: "المستوى ٣: حصة خاصة (افتراضات خصم التداول)، ونموذج تدفق مخصوم بنمو غير ملحوظ، وخيار بتقلب داخلي، ونماذج تسديد الإقراض غير المقتبس" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "TRANSFERS between levels happen when the inputs' observability changes — recognise at the START of the period in which the change occurs and disclose the level, reason and amount. A market becoming INACTIVE (a crisis) does not automatically demote Level 1 to 2 — the price may still be Level 1 if transactions occur at that quote; judgement and disclosure carry the story. The level says how much of the MEASUREMENT rests on your own assumptions — it is not a quality grade of the asset.",
        ar: "تنتقل الأدوات بين المستويات عند تغير قابلية ملاحظة المدخلات — يعترف بها في بداية الفترة التي يقع فيها التغير مع الإفصاح عن المستوى والسبب والمقدار. وسوق تصبح غير نشطة لا يحط تلقائيًا من المستوى ١ إلى ٢ — فقد يظل السعر مستوى أولًا إذا جرت المعاملات به؛ والحكم والإفصاح يحملان القصة. والمستوى يقول كم من القياس يقوم على افتراضاتك أنت — وليس درجة جودة للأصل.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Quoted-price discipline: Level 1 prices are taken WITHOUT adjustment — blockage and volume discounts are banned, so a 20% stake in a thinly-traded quote still prices at the quote. The entity must pick a bid-ask policy and apply it consistently: bid for long assets, ask for liabilities is the norm, though any point within the range is permitted. A derivative quoted mid but exposed to counterparty credit gets a credit adjustment — observable, so still Level 2. Level is about the INPUT, never the technique: a DCF running on observable yield-curve inputs stays Level 2.",
        ar: "انضباط الأسعار المقتبسة: تُؤخذ أسعار المستوى الأول دون تعديل — فخصومات الكتل والحجم محظورة، فحصة ٢٠٪ في اقتباس ضئيل التداول تسعَّر بالاقتباس ذاته. وعلى المنشأة اختيار سياسة عرض-طلب وتطبيقها باتساق: العرض للأصول والطلب للالتزامات هو الأصل، وإن جاز أي موضع داخل النطاق. ومشتق مقتبس في المنتصف لكنه منكشف لمخاطر النظير يعدَّل ائتمانيًا — تعديل ملحوظ فيبقى مستوى ثانيًا. والمستوى شأن المدخل لا التقنية أبدًا: فنموذج تدفق مخصوم يعمل بمدخلات منحنى عائد ملحوظ يبقى مستوى ثانيًا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "A quoted price for a SIMILAR asset is Level 2, an INACTIVE market quote may still be Level 2 (if observable), and only your OWN assumptions drop to Level 3 — the hierarchy follows the INPUT, not the technique (a DCF calibrated to observables can stay Level 2).",
        ar: "سعر مقتبس لأصل مشابه مستوى ثانٍ، وسعر سوق غير نشطة قد يظل ثانيًا (إن ظل ملحوظًا)، وافتراضاتك الذاتية وحدها تهبط بالمستوى الثالث — فالتدرج يتبع المدخل لا التقنية (نموذج تدفق مخصوم معاير بملحوظات قد يبقى ثانيًا).",
      },
    },
    { kind: "h", text: { en: "Initial recognition — the day-one question", ar: "الاعتراف الأولي — سؤال اليوم الأول" } },
    {
      kind: "p",
      text: {
        en: "The transaction price is usually the best evidence of day-one fair value — but they can differ (a dealer's spread, a forced buyer, transaction costs). When another valuation technique indicates the fair value differs from the price, the DAY-ONE GAIN/LOSS is recognised — unless it is within the bid-ask spread. Transaction costs are NOT part of the fair value itself (they add to the asset's carrying amount or net against proceeds, per each standard's rules). The presumption is strong: absent a different-technique witness, price = fair value and day-one profit is nothing.",
        ar: "سعر المعاملة عادة أفضل دليل على عادلة اليوم الأول — لكنهما قد يفترقان (فارق صانع السوق، مشترٍ مجبر، تكاليف المعاملة). وعندما تشير تقنية أخرى إلى فرق يعترف بـ«ربح/خسارة اليوم الأول» — إلا إذا كان ضمن فارق العرض والطلب. وتكاليف المعاملة ليست جزءًا من العادلة ذاتها (تنضم إلى القيمة الدفترية أو تخصم من المتحصلات وفق قواعد كل معيار). والافتراض قوي: فبغياب شاهد تقنية أخرى، السعر = العادلة وربح اليوم الأول صفر.",
      },
    },
    {
      kind: "journal",
      title: { en: "A Level-1 purchase — transaction costs NEVER touch fair value (listed shares at 20,000, commission 200)", ar: "شراء بمستوى أول — تكاليف المعاملة لا تمس العادلة أبدًا (أسهم مدرجة ٢٠٬٠٠٠ وعمولة ٢٠٠)" },
      rows: [
        { dr: { en: "Financial asset at FVTPL (fair value = the QUOTE) 20,000", ar: "أصل مالي بـFVTPL (العادلة = الاقتباس) ٢٠٬٠٠٠" }, cr: { en: "Cash 20,200", ar: "نقد ٢٠٬٢٠٠" }, red: true },
        { dr: { en: "Transaction costs expense (P&L) 200", ar: "مصروف تكاليف المعاملة (بالأرباح) ٢٠٠" }, cr: { en: "— — FVTPL: costs expensed, never capitalised", ar: "— — FVTPL: التكاليف مصروف ولا ترسمل أبدًا" }, red: true },
        { dr: { en: "Debt at FVOCI — same deal 20,200", ar: "دين بـFVOCI — الصفقة ذاتها ٢٠٬٢٠٠" }, cr: { en: "Cash 20,200", ar: "نقد ٢٠٬٢٠٠" } },
        { cr: { en: "— — AC/FVOCI-debt: costs JOIN the carrying amount (still not the fair value)", ar: "— — التكلفة المطفأة/ديون FVOCI: تنضم التكاليف للقيمة الدفترية (وليست العادلة مع ذلك)" } },
      ],
    },
    {
      kind: "journal",
      title: { en: "A Level-3 remeasurement — the FV changes, the LEVEL is only a disclosure (stake bought 500, model now says 462)", ar: "إعادة قياس بمستوى ثالث — العادلة تتغير والمستوى مجرد إفصاح (حصة اشتريت ٥٠٠ والنموذج يقول ٤٦٢)" },
      rows: [
        { dr: { en: "Financial asset at FVTPL 500 (calibrated at day 1)", ar: "أصل مالي بـFVTPL ٥٠٠ (معاير يوم الأول)" }, cr: { en: "Cash 500", ar: "نقد ٥٠٠" } },
        { dr: { en: "FV loss (P&L) 38", ar: "خسارة عادلة (بالأرباح) ٣٨" }, cr: { en: "Financial asset at FVTPL 38", ar: "أصل مالي بـFVTPL ٣٨" }, red: true },
        { dr: { en: "NO ENTRY for the L2 → L3 move itself", ar: "لا قيد للانتقال من المستوى ٢ إلى ٣ ذاته" }, cr: { en: "— — the level transfer is a DISCLOSURE event (IFRS 7), not a journal", ar: "— — انتقال المستوى واقعة إفصاح (IFRS 7) لا قيدًا" }, red: true },
      ],
    },
    { kind: "h", text: { en: "The Level-3 machine", ar: "آلة المستوى الثالث" } },
    {
      kind: "p",
      text: {
        en: "Level 3 is a discipline, not a confession: maximise the observable (calibrate the model to day-one prices, use observable yield curves up to where they reach), disclose the unobservable inputs that matter and their sensitivity, and tell the story of the valuation process. The rollforward — opening, P&L gains/losses, OCI, purchases/sales/issues/settlements, closing — lets a user trace how the unobservable balance moved during the year. The longer a Level 3 balance sits untraded, the more the narrative matters.",
        ar: "المستوى الثالث انضباط لا اعتراف: عظّم الملحوظ (عاير النموذج على أسعار اليوم الأول، واستخدم منحنيات العائد الملحوظة إلى حيث تصل)، وأفصح عن المدخلات غير الملحوظة المؤثرة وحساسيتها، واحكِ قصة عملية التقييم. والتسوية — أول الفترة، مكاسب/خسائر الأرباح، الدخل الشامل، مشتريات/مبيعات/إصدارات/تسويات، آخر الفترة — تمكن المستخدم من تتبع كيف تحرك الرصيد غير الملحوظ خلال السنة. وكلما طال جلوس رصيد المستوى الثالث بلا تداول تعظمت أهمية السرد.",
      },
    },
    {
      kind: "example",
      title: { en: "A Level-3 build", ar: "بناء مستوى ثالث" },
      lines: [
        { en: "Private equity stake: latest round at 20/share (Level 2 comparable) but a 20% lack-of-marketability discount for the stake's size and lock-up", ar: "حصة خاصة: آخر جولة عند ٢٠ للسهم (مستوى ثانٍ مقارنًا) مع خصم ٢٠٪ لعدم قابلية التداول لحجم الحصة وقيد التسييل" },
        { en: "Fair value = 20 × (1 − 20%) = 16 — the discount is an unobservable assumption → LEVEL 3 classification", ar: "العادلة = ٢٠ × (١ − ٢٠٪) = ١٦ — والخصم افتراض غير ملحوظ ← تصنيف المستوى الثالث" },
        { en: "Disclose: the technique (market × DLOM), the input's value (20%) and how sensitivity moves the measurement", ar: "أفصح: التقنية والمدخل (٢٠٪) وكيف تحرك الحساسية القياس" },
        { en: "Sensitivity story for market risk (IFRS 7): a 1% rate move changes FV by X — tell it for the whole portfolio", ar: "قصة الحساسية للمخاطر السوقية (IFRS 7): تحرك ١٪ يغير العادلة بمقدار كذا — للمحفظة كلها" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The fair-value arithmetic", ar: "حسابيات القيمة العادلة" },
      lines: [
        { en: "Fair value = EXIT price in the PRINCIPAL market (or most advantageous, if no principal exists) − transport costs", ar: "العادلة = سعر الخروج في السوق الرئيسية (أو الأكثر ملاءمة عند غيابها) − تكاليف النقل" },
        { en: "Day-one gain/loss = transaction price − model-indicated fair value (recognised unless within the bid-ask spread)", ar: "ربح/خسارة اليوم الأول = سعر المعاملة − عادلة النموذج (يعترف به إلا إذا كان ضمن فارق العرض والطلب)" },
        { en: "Level assignment = the LOWEST level of any input that is SIGNIFICANT to the entire measurement", ar: "تحديد المستوى = أدنى مستوى لأي مدخل جوهري في القياس كله" },
        { en: "HBU value = the use (physically possible · legally permissible · financially feasible) that maximises the asset's value", ar: "قيمة أفضل استخدام = الاستخدام (الممكن ماديًا والجائز قانونيًا والمجدي ماليًا) الذي يعظم قيمة الأصل" },
        { en: "Net position (assets vs liabilities) is permitted for market-risk-participating counterparties with a master netting arrangement — an offset-flavoured presentation choice", ar: "يجوز عرض المركز الصافي عند مشاركة مخاطر السوق مع اتفاقية إطار مقاصة — خيار عرض بنكهة المقاصة" },
      ],
    },
    { kind: "h", text: { en: "What fair value is NOT", ar: "ما ليست القيمة العادلة إياه" } },
    {
      kind: "p",
      text: {
        en: "Fair value is not VALUE IN USE — IAS 36's entity-specific cash flows, entity-specific assumptions and post-tax discount rates are a private number the market never quotes. It is not NRV — the IAS 2 selling price less costs of completion and selling, an exit-ish but entity-specific measure. It is not a forced-sale or liquidation price — 'orderly' rules that out. It is never net of transaction costs, never the entity's own intention, and never the price it paid unless the market agrees. When an exam scenario says 'the entity believes it is worth X', cross out the belief and price the market.",
        ar: "القيمة العادلة ليست القيمة الاستخدامية — فتدفقات IAS 36 الخاصة بالمنشأة وافتراضاتها ومعدلات خصمها بعد الضريبة رقم خاص لن يقتبسه السوق أبدًا. وليست القيمة البيعية الصافية — سعر بيع IAS 2 مخصومًا منه تكاليف الإتمام والبيع، قريبة من الخروج لكنها خاصة بالمنشأة. وليست سعر بيع جبري أو تصفية — فكلمة «منتظمة» تنفي ذلك. ولا تكون صافية تكاليف المعاملة أبدًا، ولا نية المنشأة الذاتية، ولا ما دفعته إلا أن يوافق السوق. فإذا قال سيناريو الامتحان «تعتقد المنشأة أنها تسوى كذا» فاشطب الاعتقاد وسعّر السوق.",
      },
    },
    { kind: "h", text: { en: "Disclosures — the two sets", ar: "الإفصاحات — المجموعتان" } },
    {
      kind: "list",
      items: [
        { en: "Recurring: the hierarchy-level split at each reporting date, transfers between levels 1↔2 with reasons, Level 3 rollforwards (opening → gains/losses → purchases/sales → issues/settlements → closing) split into P&L vs OCI", ar: "المتكررة: توزيع المستويات في كل تقرير، والانتقالات بين ١ و٢ بأسبابها، وتسويات المستوى الثالث مقسومة بين الأرباح والدخل الشامل" },
        { en: "For Level 3: valuation processes, the quantitative unobservable inputs, the interrelationships, and the sensitivity of the measurement to a change in each input", ar: "للمستوى الثالث: عمليات التقييم والمدخلات الكمية والعلاقات المتبادلة وحساسية كل مدخل" },
        { en: "Non-recurring (asset HFS, IAS 36 FVLCD, IFRS 3 consideration): the reason, the level, the technique, and for Level 3 the inputs used", ar: "غير المتكررة (أصول للبيع، عادلة ناقص تكاليف في IAS 36، مقابل الاندماج): السبب والمستوى والتقنية والمدخلات" },
        { en: "IFRS 13 ≠ the measurement standard — it never says WHEN to measure at fair value (each IFRS does that); it defines HOW to do it when another standard says so", ar: "IFRS 13 ليس معيار توقيت القياس — لا يقول متى تقاس بالعادلة (تقوله المعايير الأخرى) بل كيف حين يُطلب" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The recurring set paints every balance carried at fair value each period; the non-recurring set catches the one-off fair-value moments — an impairment write-down to FVLCD, a held-for-sale designation, IFRS 3's acquisition-date values and contingent consideration. Level transfers are disclosed as they happen with level, amount and reason. If a fair value is disclosed for something not carried at FV (an amortised-cost loan), it comes with its level — or with a statement that no reliable fair value can be determined, together with the puzzle's description.",
        ar: "المجموعة المتكررة تصور كل رصيد يحمل بالعادلة كل فترة؛ وغير المتكررة تلتقط لحظات العادلة الفريدة — خفض IAS 36 إلى العادلة ناقص التكاليف، وتصنيف للبيع، وقيم IFRS 3 بتاريخ الاستحواذ ومقابله المشروط. وتفصح انتقالات المستويات حين تقوع بمستواها ومقدارها وسببها. وإن أُفصح عن عادلة لبند لا يحمل بها (قرض بالتكلفة المطفأة) جاءت بمستواها — أو ببيان تعذر تحديد عادلة موثوقة مع وصف المعضلة.",
      },
    },
    { kind: "h", text: { en: "Interaction with the other standards", ar: "التفاعل مع المعايير الأخرى" } },
    {
      kind: "p",
      text: {
        en: "IFRS 13 is the calculator every other standard borrows: IFRS 9's FVTPL/FVOCI measurements and day-one discipline, IAS 36's fair-value-less-costs-of-disposal (an IFRS 13 fair value MINUS disposal costs — the only place costs intrude, by IAS 36's own rule), IFRS 3's acquisition-date values, IAS 40's investment-property model, IAS 41's biological assets (FV less costs to sell), IAS 16's revaluation option. IFRS 7 publishes the hierarchy story; IFRS 2 has its own fair-value machine. The exam hook: name the measuring standard FIRST, then say 'measured under IFRS 13' — the definition, market, technique and level.",
        ar: "IFRS 13 هو الحاسبة التي تستعيرها المعايير الأخرى: قياسات FVTPL/FVOCI وانضباط اليوم الأول في IFRS 9، والعادلة ناقص تكاليف التصرف في IAS 36 (عادلة IFRS 13 مخصومًا منها تكاليف التصرف — الموضع الوحيد الذي تتسلل إليه التكاليف بقاعدة IAS 36 ذاته)، وقيم IFRS 3 بتاريخ الاستحواذ، ونموذج عقارات الاستثمار في IAS 40، والأصول البيولوجية في IAS 41 (عادلة ناقص تكاليف البيع)، وخيار إعادة التقييم في IAS 16. وينشر IFRS 7 حكاية المستويات؛ وIFRS 2 له آلته الخاصة. والخطاف الامتحاني: سمِّ المعيار القائس أولًا ثم قل «يقاس وفق IFRS 13» — بالتعريف والسوق والتقنية والمستوى.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Fair value is a MARKET-based measurement; value in use is ENTITY-specific — the exam trap is a scenario sliding one into the other. 'What it is worth to us' never answers a fair-value question.",
        ar: "القيمة العادلة قياس قائم على السوق؛ والقيمة الاستخدامية خاصة بالمنشأة — وفخ الامتحان سيناريو ينزلق بينهما. «ما تساويه لنا» لا تجيب عن سؤال قيمة عادلة أبدًا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Write the definition's five words in order — exit · orderly · market participants · measurement date · principal market — then map the scenario onto them; each unmapped word is a lost mark.",
        ar: "اكتب كلمات التعريف الخمس مرتبة — خروج · منتظمة · مشاركو السوق · تاريخ القياس · السوق الرئيسية — ثم طابق السيناريو عليها؛ فكل كلمة بلا مقابل درجة ضائعة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Transaction costs never touch FAIR VALUE — but they DO enter an amortised-cost carrying amount and they are EXPENSED for FVTPL. Same fee, three destinations: know which instrument type you are holding before you book it.",
        ar: "تكاليف المعاملة لا تمس القيمة العادلة — لكنها تدخل القيمة الدفترية بالتكلفة المطفأة وتُصرف تحت FVTPL. العمولة ذاتها بثلاثة مصائر: اعرف نوع الأداة التي تحملها قبل إثباتها.",
      },
    },
    { kind: "h", text: { en: "Transition & effective date", ar: "الانتقال وتاريخ السريان" } },
    {
      kind: "p",
      text: {
        en: "IFRS 13 became effective 1 January 2013, applied retrospectively — opening-balance adjustments to equity, with new disclosure from that date. The standard's lasting effect is uniformity: before it, 'fair value' meant a different thing in different standards; after it, one definition, one hierarchy, one disclosure language serve the whole IFRS corpus, and later standards (IFRS 9 above all) lean on it without restating it.",
        ar: "صار IFRS 13 نافذًا في ١ يناير ٢٠١٣ مطبقًا بأثر رجعي — بتعديلات أرصدة افتتاحية في حقوق الملكية وإفصاح جديد من ذلك التاريخ. وأثره الباقي هو التوحيد: قبله كانت «القيمة العادلة» تعني شيئًا مختلفًا في كل معيار؛ وبعده صار تعريف واحد وتدرج واحد ولغة إفصاح واحدة تخدم مدونة IFRS كلها، وتستند إليها المعايير اللاحقة (IFRS 9 قبل الجميع) دون إعادة صياغة.",
      },
    },
  ],
}
