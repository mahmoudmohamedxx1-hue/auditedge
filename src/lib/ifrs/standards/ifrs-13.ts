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
        en: "Fair value is the price that would be received to sell an ASSET or paid to TRANSFER a LIABILITY in an ORDERLY transaction between MARKET PARTICIPANTS at the MEASUREMENT DATE. It is an EXIT price — what you would get, not what you would pay to buy (an entry price). It assumes an orderly transaction (not a forced sale or fire-sale liquidation) in the PRINCIPAL (or most advantageous) market — the market with the greatest volume and level of activity for the asset.",
        ar: "القيمة العادلة الثمن الذي يُقبض لبيع أصل أو يُدفع لنقل التزام في معاملة منتظمة بين مشاركي السوق بتاريخ القياس. وهي سعر خروج — ما ستناله، لا ما ستدفعه للشراء (سعر دخول). وتفترض معاملة منتظمة (لا بيعًا جبريًا أو تصفية) في السوق الرئيسية (أو الأكثر ملاءمة) — السوق الأعلى حجما ونشاطا للأصل.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Market participants are independent, knowledgeable, able and willing — NOT the entity's actual counterpart, and NOT a specific buyer with synergies.",
        ar: "مشاركو السوق مستقلون عارفون قادرون راغبون — لا نظيرك الفعلي ولا مشتر بعينه يملك تآزرًا خاصًا.",
      },
    },
    { kind: "h", text: { en: "Valuation — the asset's perspective", ar: "التقييم — منظور الأصل" } },
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
    { kind: "h", text: { en: "The three techniques", ar: "التقنيات الثلاث" } },
    {
      kind: "list",
      items: [
        { en: "MARKET approach: prices from identical/comparable transactions and markets — multiples, matrix pricing (quoted prices of comparable instruments)", ar: "أسلوب السوق: أسعار معاملات مطابقة أو مقارنة — مضاعفات، تسعير مصفوفي (أسعار أدوات مشابهة)" },
        { en: "INCOME approach: discounting future cash flows — DCF models, option-pricing (Black-Scholes, binomial), multi-period excess earnings", ar: "أسلوب الدخل: خصم تدفقات مستقبلية — نماذج التدفق المخصوم، نماذج الخيارات (بلاك-شولز، ثنائية)، مكاسب تتجاوز الدخل" },
        { en: "COST approach: current replacement cost — what it would cost to build a substitute with the same utility (adjusted for obsolescence)", ar: "أسلوب التكلفة: تكلفة الاستبدال الحالية — ما يلزم لبناء بديل بالمنفعة ذاتها (معدلة للتقادم)" },
        { en: "CALIBRATION: when a transaction price exists, calibrate the technique's unobservable inputs to that day-one price", ar: "المعايرة: عند وجود سعر معاملة، عاير المدخلات غير الملحوظة عليه في اليوم الأول" },
      ],
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
          when: { en: "LEVEL 2 — inputs OBSERVABLE, directly or indirectly: quoted prices for SIMILAR items, quotes in INACTIVE markets, observable rates/yields/volatilities, Correlation-derived prices", ar: "المستوى ٢ — مدخلات ملحوظة مباشرة أو ضمنًا: أسعار أدوات مشابهة، أسعار أسواق غير نشطة، معدلات وتقلبات ملحوظة، أسعار مستنبطة بالارتباط" },
          then: { en: "Adjust for differences (unit counts, condition, location) with OBSERVABLE data", ar: "عدّل للفروق (الوحدات، الحالة، الموقع) ببيانات ملحوظة", red: true },
        },
        {
          when: { en: "LEVEL 3 — UNOBSERVABLE inputs: the entity's own assumptions about what market participants would use (a DCF's growth rate, a private share's discount for lack of marketability)", ar: "المستوى ٣ — مدخلات غير ملحوظة: افتراضات المنشأة عما سيستخدمه المشاركون (معدل نمو نموذج، خصم عدم قابلية التداول لسهم خاصة)" },
          then: { en: "Maximise observable inputs; disclose the rollforward, sensitivity and the measurement-uncertainty narrative", ar: "عظّم المدخلات الملحوظة؛ وأفصح عن التسوية والحساسية وسرد عدم التأكد", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "TRANSFERS between levels happen when the inputs' observability changes — recognise at the START of the period in which the change occurs and disclose the level, reason and amount. A market becoming INACTIVE (a crisis) does not automatically demote Level 1 to 2 — the price may still be Level 1 if transactions occur at that quote; judgement and disclosure carry the story.",
        ar: "تنتقل الأدوات بين المستويات عند تغير قابلية ملاحظة المدخلات — يعترف بها في بداية الفترة التي يقع فيها التغير مع الإفصاح عن المستوى والسبب والمقدار. وسوق تصبح غير نشطة لا يحط تلقائيًا من المستوى ١ إلى ٢ — فقد يظل السعر مستوى أولًا إذا جرت المعاملات به؛ والحكم والإفصاح يحملان القصة.",
      },
    },
    { kind: "h", text: { en: "Initial recognition — the day-one question", ar: "الاعتراف الأولي — سؤال اليوم الأول" } },
    {
      kind: "p",
      text: {
        en: "The transaction price is usually the best evidence of day-one fair value — but they can differ (e.g. a dealer's spread, a forced buyer, transaction costs). When another valuation technique indicates the fair value differs from the price, the DAY-ONE GAIN/LOSS is recognised — unless it is within the bid-ask spread. Transaction costs are NOT part of the fair value itself (they add to the asset's carrying amount or net against proceeds, per each standard's rules).",
        ar: "سعر المعاملة عادة أفضل دليل على عادلة اليوم الأول — لكنهما قد يفترقان (فارق صانع السوق، مشترٍ مجبر، تكاليف المعاملة). وعندما تشير تقنية أخرى إلى فرق يعترف بـ«ربح/خسارة اليوم الأول» — إلا إذا كان ضمن فارق العرض والطلب. وتكاليف المعاملة ليست جزءًا من العادلة ذاتها.",
      },
    },
    {
      kind: "example",
      title: { en: "A Level-3 build", ar: "بناء مستوى ثالث" },
      lines: [
        { en: "Private equity stake: latest round at 20/share (Level 2 comparable) but a 20% lack-of-marketability discount for the stake's size and lock-up", ar: "حصة خاصة: آخر جولة عند ٢٠ للسهم (مستوى ثانٍ) مع خصم ٢٠٪ لعدم قابلية التداول لحجم الحصة وقيد التسييل" },
        { en: "Fair value = 20 × (1 − 20%) = 16 — the discount is an unobservable assumption → LEVEL 3 classification", ar: "العادلة = ٢٠ × (١ − ٢٠٪) = ١٦ — والخصم افتراض غير ملحوظ ← تصنيف المستوى الثالث" },
        { en: "Disclose: the technique (market × DLOM), the input's value (20%) and how sensitivity moves the measurement", ar: "أفصح: التقنية والمدخل (٢٠٪) وكيف تحرك الحساسية القياس" },
        { en: "Sensitivity story for market risk (IFRS 7): a 1% rate move changes FV by X — tell it for the whole portfolio", ar: "قصة الحساسية للمخاطر السوقية (IFRS 7): تحرك ١٪ يغير العادلة بمقدار كذا — للمحفظة كلها" },
      ],
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
      kind: "formula",
      title: { en: "The fair-value arithmetic", ar: "حسابيات القيمة العادلة" },
      lines: [
        { en: "Fair value = EXIT price in the PRINCIPAL market (or most advantageous, if no principal exists)", ar: "العادلة = سعر الخروج في السوق الرئيسية (أو الأكثر ملاءمة عند غيابها)" },
        { en: "Day-one gain/loss = transaction price − model-indicated fair value (recognised unless within the bid-ask spread)", ar: "ربح/خسارة اليوم الأول = سعر المعاملة − عادلة النموذج (يعترف به إلا إذا كان ضمن فارق العرض والطلب)" },
        { en: "Level assignment = the LOWEST level of any input that is SIGNIFICANT to the entire measurement", ar: "تحديد المستوى = أدنى مستوى لأي مدخل جوهري في القياس كله" },
        { en: "Net position (assets vs liabilities) is permitted for market-risk-participating counterparties with a master netting arrangement — an offset-flavoured presentation choice", ar: "يجوز عرض المركز الصافي عند مشاركة مخاطر السوق مع اتفاقية إطار مقاصة — خيار عرض بنكهة المقاصة" },
      ],
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
        en: "A quoted price for a SIMILAR asset is Level 2, an INACTIVE market quote may still be Level 2 (if observable), and only your OWN assumptions drop to Level 3 — the hierarchy follows the INPUT, not the technique (a DCF calibrated to observables can stay Level 2).",
        ar: "سعر مقتبس لأصل مشابه مستوى ثانٍ، وسعر سوق غير نشطة قد يظل ثانيًا (إن ظل ملحوظًا)، وافتراضاتك الذاتية وحدها تهبط بالمستوى الثالث — فالتدرج يتبع المدخل لا التقنية (نموذج تدفق مخصوم معاير بملحوظات قد يبقى ثانيًا).",
      },
    },
  ],
}
