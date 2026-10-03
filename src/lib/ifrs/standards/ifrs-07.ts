/** IFRS 7 — Financial Instruments: Disclosures */

import type { Standard } from "../types"

export const IFRS_7: Standard = {
  code: "IFRS 7",
  title: { en: "Financial Instruments: Disclosures", ar: "الأدوات المالية: الإفصاحات" },
  topic: "instruments",
  effective: { en: "Effective 1 Jan 2007 · amended for IFRS 9 & IFRS 13", ar: "سارٍ من ١ يناير ٢٠٠٧ · معدل لـ IFRS 9 وIFRS 13" },
  blocks: [
    { kind: "h", text: { en: "Objective & the class-of-instrument lens", ar: "الهدف وعدسة فئة الأداة" } },
    {
      kind: "p",
      text: {
        en: "IFRS 7 requires disclosures that let users evaluate the SIGNIFICANCE of financial instruments for the entity's position, performance and cash flows — and the NATURE and EXTENT of the risks arising from them (credit, liquidity, market). The lens is CLASSES of instruments (a grouping finer than the primary-statement lines, at least by measurement category — AC / FVOCI / FVTPL), plus identified hedging relationships.",
        ar: "يطلب IFRS 7 إفصاحات تمكن المستخدمين من تقدير أهمية الأدوات المالية لمركز المنشأة وأدائها وتدفقاتها — وطبيعة مخاطرها وامتدادها (ائتمان، سيولة، سوق). والعدسة فئات الأدوات (تجميع أدق من أسطر القوائم، بأقل تقدير حسب فئة القياس — مدمجة / FVOCI / FVTPL)، وعلاقات التغطية المحددة.",
      },
    },
    { kind: "h", text: { en: "Significance — the two-statement walk", ar: "الأهمية — جولة القائمتين" } },
    {
      kind: "list",
      items: [
        { en: "STATEMENT OF FINANCIAL POSITION: carrying amounts by category (AC, FVOCI-debt, FVOCI-equity, FVTPL), by class; the ALLOWANCE split (12-month vs lifetime ECL per IFRS 9); and for each class the reconciliation of gross → ECL allowance → net carrying", ar: "المركز المالي: القيم الدفترية بالفئات والطبقات؛ وتوزيع المخصص (١٢ شهرًا مقابل العمر الكامل)؛ وتسوية الإجمالي ← المخصص ← الصافي" },
        { en: "Net losses on financial assets at FVOCI and debt instruments' interest income effects (with the P&L geography: interest, fees, ECL changes, net FV gains)", ar: "خسائر أصول FVOCI الصافية وآثار إيراد فوائد الديون (بجغرافيا الأرباح: فوائد، رسوم، تغيرات الخسائر المتوقعة، صافي فروق العادلة)" },
        { en: "Items of income, expense, gains & losses by class: interest revenue (EIR vs credit-impaired basis), fee income, net gains/losses, ECL charge", ar: "بنود الدخل والمصروف والمكاسب والخسائر بالطبقة: إيراد الفائدة، الرسوم، صافي الفروق، حمولة الخسائر المتوقعة" },
        { en: "RECLASSIFICATIONS out of the FVTPL 'held for trading' if more than an insignificant amount; derecognition facts; collateral given/received and defaults on it", ar: "إعادة التبويب من المتاجرة إن تجاوزت الحد غير الجوهري؛ وحقائق الاستبعاد؛ والضمانات الممنوحة/المقبوضة وإخلالاتها" },
        { en: "Accounting policies for recognition/measurement AND the income/expense recognition bases — IAS 1's policies disclosure specialised for instruments", ar: "السياسات المحاسبية للقياس والاعتراف وقياس الإيراد/المصروف — سياسات IAS 1 متخصصة للأدوات" },
      ],
    },
    { kind: "h", text: { en: "Fair value disclosures", ar: "إفصاحات القيمة العادلة" } },
    {
      kind: "list",
      items: [
        { en: "For EVERY class measured at fair value (recurring): the hierarchy level (1/2/3), transfers between levels with reasons and amounts, and the policy for recognising transfers", ar: "لكل طبقة مقاسة بالعادلة (متكررًا): المستوى، والانتقالات بينها بأسبابها ومقاديرها، وسياسة الاعتراف بها" },
        { en: "LEVEL 3: a full rollforward (opening → P&L gains/losses → OCI → purchases/sales/issues/settlements → closing) + the valuation processes + quantitative unobservable inputs + sensitivity analysis", ar: "المستوى الثالث: تسوية كاملة + عمليات التقييم + المدخلات غير الملحوظة الكمية + تحليل الحساسية" },
        { en: "For instruments NOT at fair value: the fair value + how it was determined, with levels — UNLESS carrying ≈ fair value (loans payable to banks)", ar: "للأدوات غير المقاسة بالعادلة: قيمتها العادلة وكيف حددت بمستوياتها — إلا إذا قاربت الدفترية (قروض بنكية مستحقة)" },
        { en: "Day-1 gains/losses by level; the total holding gains; the bid-ask policy for Level 1", ar: "أرباح/خسائر اليوم الأول بالمستوى؛ وإجمالي مكاسب الحيازة؛ وسياسة العرض والطلب للمستوى الأول" },
      ],
    },
    { kind: "h", text: { en: "The risk architecture", ar: "هندسة المخاطر" } },
    {
      kind: "tree",
      root: { en: "Qualitative + Quantitative for each risk", ar: "نوعي + كمي لكل خطر" },
      branches: [
        {
          when: { en: "CREDIT RISK — the risk one party will cause a financial loss by failing to discharge an obligation", ar: "مخاطر الائتمان — أن يسبب طرف خسارة مالية بعجزه عن الوفاء" },
          then: { en: "Exposure by class (before collateral), collateral held, credit enhancements, concentration analysis; MAXIMUM EXPOSURE (before risk mitigation) per class; and — IFRS 9's overlay — credit-quality grading of loans", ar: "الانكشاف بالطبقة (قبل الضمان)، والضمانات المقبوضة، وتحسينات الائتمان، وتحليلات التركز؛ والانكشاف الأقصى لكل طبقة؛ وتدرج الجودة الائتمانية للقروض", red: true },
        },
        {
          when: { en: "LIQUIDITY RISK — the risk an entity will have difficulty meeting obligations associated with financial liabilities", ar: "مخاطر السيولة — صعوبة الوفاء بالالتزامات المرتبطة بالالتزامات المالية" },
          then: { en: "A MATURITY ANALYSIS of financial liabilities (and derivative obligations) showing remaining contractual maturities (undiscounted); describe how the entity manages the risk", ar: "تحليل استحقاق للالتزامات المالية يبين الآجال التعاقدية المتبقية (غير المخصومة)؛ مع وصف إدارة المخاطر", red: true },
        },
        {
          when: { en: "MARKET RISK — currency, interest rate and OTHER price risk (the risk fair value or future cash flows will fluctuate)", ar: "مخاطر السوق — العملة، وسعر الفائدة، وأسعار أخرى (تقلب العادلة أو التدفقات)" },
          then: { en: "A SENSITIVITY ANALYSIS for each risk: the effect on profit and OCI of a REASONABLY POSSIBLE change; plus the methods and assumptions", ar: "تحليل حساسية لكل خطر: أثر تغير ممكن معقول على الأرباح والدخل الشامل؛ مع الأساليب والافتراضات", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The maturity analysis discipline: undiscounted CONTRACTUAL outflows, with the EARLIEST date the counterparty can demand payment (deposits repayable on demand → the earliest period bucket). If the entity manages liquidity on a discounted basis, that is a management view ADDITIONAL to the contractual table. The sensitivity discipline: a reasonably possible change, not a worst case; for a bank with floating-rate debt of 100 at 1% above base, a 100bp move changes interest by 1 per year — tell it and total it.",
        ar: "انضباط تحليل الاستحقاق: تدفقات خروج تعاقدية غير مخصومة بأبكر تاريخ يستطيع فيه الطرف الآخر المطالبة (ودائع تحت الطلب في الفترة الأولى). وإذا أدارت المنشأة السيولة بالخصم فهذا منظر إداري إضافي للجدول التعاقدي. وانضباط الحساسية: تغير ممكن معقول لا أسوأ حالة؛ فبنك بدين عائم ١٠٠ بفارق ١٪ يغير تحركُ ١٪ الفائدة بمقدار ١ سنويًا — قلها واجمعها.",
      },
    },
    {
      kind: "example",
      title: { en: "A sensitivity story told right", ar: "قصة حساسية تُحكى كما ينبغي" },
      lines: [
        { en: "Bond portfolio FV 10m, modified duration 4 → a +100bp rate move drops FV by ≈ 10m × 4% = 400k", ar: "محفظة سندات بعادلة ١٠ ملايين ومدة معدلة ٤ ← تحرك +١٪ يهبط بالعادلة نحو ٤٠٠ ألف" },
        { en: "State: the assumption (100bp = reasonably possible for the reporting period), the method (duration approximation) and where it lands (P&L for FVTPL, OCI for FVOCI)", ar: "اذكر: الافتراض (١٪ ممكن معقول)، والطريقة (تقريب المدة)، وأين يقع الأثر (الأرباح لـFVTPL والدخل الشامل لـFVOCI)" },
        { en: "Currency risk: net exposure 2m USD → a 10% EGP slide changes equity by 200k — same three-part discipline", ar: "مخاطر العملة: انكشاف صافٍ ٢ مليون دولار ← انزلاق ١٠٪ يغير حقوق الملكية ٢٠٠ ألف — بالانضباط الثلاثي ذاته" },
      ],
    },
    { kind: "h", text: { en: "Transfers, Derecognition & the capital hook", ar: "الانتقالات والاستبعاد وخطاف رأس المال" } },
    {
      kind: "list",
      items: [
        { en: "Transferred assets that do not qualify for derecognition: the nature, the carrying, the associated liabilities and the relationships", ar: "أصول منقولة لا تصلح للاستبعاد: الطبيعة والقيمة والالتزامات المرتبطة وعلاقاتها" },
        { en: "Continuing involvement disclosures for part-transfers: the carrying of the assets and liabilities recognised, the instruments' maximum exposure, the undiscounted cash outflows to repurchase", ar: "إفصاحات التورط المستمر: قيم الأصول والالتزامات المعترف بها والانكشاف الأقصى والتدفقات غير المخصومة لإعادة الشراء" },
        { en: "Collateral defaults & repossessions: the income/expense from foreclosing, and non-cash assets obtained", ar: "إخلالات الضمان والاستردادات: الدخل/المصروف من الحيازة والأصول غير النقدية المكتسبة" },
        { en: "Loans PAYABLE at non-market rates or with no determined FV: the facts and how the liability's repayment is structured", ar: "قروض مستحقة بمعدلات دون السوق أو بلا عادلة محددة: الوقائع وهيكل السداد" },
        { en: "CAPITAL MANAGEMENT (IAS 1.134 discipline but listed here): the entity's objectives, policies and processes for managing capital + quantitative data + target compliance", ar: "إدارة رأس المال: الأهداف والسياسات وعمليات الإدارة + البيانات الكمية + الالتزام بالمستهدف" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The sensitivity equation", ar: "معادلة الحساسية" },
      lines: [
        { en: "FV impact ≈ portfolio exposure × the reasonably possible shift", ar: "أثر القيمة العادلة ≈ انكشاف المحفظة × التحرك الممكن المعقول" },
        { en: "Interest-rate: ΔFV ≈ − modified duration × FV × Δrate (basis points ÷ 10,000)", ar: "الفائدة: التغير ≈ − المدة المعدلة × العادلة × تغير المعدل" },
        { en: "Currency: Δequity/P&L ≈ net open position × % currency move", ar: "العملة: التغير ≈ المركز المكشوف الصافي × نسبة تحرك العملة" },
        { en: "Liquidity: contractual maturity bucket = undiscounted cash outflow × earliest-settlement date", ar: "السيولة: فترة الاستحقاق = التدفق الخارج غير المخصوم × أبكر تاريخ تسوية" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Structure every IFRS 7 answer in three shelves — significance (B/S + P&L), fair value (levels + L3 rollforward), risk (credit/liquidity/market, each qualitative + quantitative) — the marker marks by the shelf.",
        ar: "هيكل كل إجابة IFRS 7 في ثلاث رفوف — الأهمية (الميزانية والأرباح)، والقيمة العادلة (المستويات وتسوية الثالث)، والمخاطر (ائتمان/سيولة/سوق، كلٌّ نوعيًا وكميًا) — فالمصحح يصحح بالرف.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The maturity analysis uses UNDISCOUNTED contractual cash flows — candidates discounting the table or using carrying amounts lose the whole mark; and on-demand deposits go into the FIRST maturity bucket, always.",
        ar: "تحليل الاستحقاق بتدفقات تعاقدية غير مخصومة — ومن يخصم الجدول أو يستخدم القيم الدفترية يخسر العلامة كلها؛ والودائع تحت الطلب في الفترة الأولى دائمًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Disclosure does not measure: IFRS 7 changes no numbers; it makes what IFRS 9 and IAS 32 did VISIBLE — always answer the measurement first, then attach the disclosure.",
        ar: "الإفصاح لا يقيس: IFRS 7 لا يغير أرقامًا؛ إنه يجعل ما فعلته IFRS 9 وIAS 32 مرئيًا — أجب دائمًا بالقياس أولًا ثم أرفق الإفصاح.",
      },
    },
  ],
}
