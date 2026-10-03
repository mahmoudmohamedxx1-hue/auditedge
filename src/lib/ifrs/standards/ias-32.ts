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
        en: "IAS 32 answers ONE question better than any other standard: is the instrument a FINANCIAL LIABILITY or an EQUITY instrument — and who eats the risk? It also handles compound instruments, treasury shares, offsetting, and the interest/dividends/accounting classification that follows from the initial answer. Substance over legal form is the whole game: the name (share, bond, note) means nothing; the CONTRACTUAL terms decide.",
        ar: "يجيب IAS 32 عن سؤال واحد أفضل من غيره: هل الأداة التزام مالي أم أداة ملكية — ومن يتحمل المخاطر؟ ويعالج الأدوات المركبة والأسهم الخزينة والمقاصة وتصنيف الفوائد والتوزيعات التابع للجواب الأول. والجوهر على الشكل القانوني هي اللعبة كلها: فالاسم (سهم، سند، صك) لا يعني شيئًا؛ والشروط التعاقدية تحسم.",
      },
    },
    { kind: "h", text: { en: "The classification test", ar: "اختبار التصنيف" } },
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
          then: { en: "Fixed-for-fixed passes → EQUITY; any variability (a variable cash amount, a variable share count, a choice to net-settle in cash) → LIABILITY (unless the net-settlement choice is a right to settle in cash that is pro-rata...) — 2020 amendment refined redemption & the tests' application to converted items", ar: "نجاح الاختبار ← ملكية؛ وأي تقلب (مبلغ متغير أو عدد متغير أو خيار التسوية النقدية) ← التزام (وحدّق تعديل ٢٠٢٠ التطبيقات)", red: true },
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
    { kind: "h", text: { en: "Compound instruments — split accounting", ar: "الأدوات المركبة — محاسبة الفصل" } },
    {
      kind: "steps",
      items: [
        { en: "Identify the LIABILITY component: the cash flows the instrument promises (coupon + redemption) discounted at the market rate for SIMILAR instruments WITHOUT a conversion feature", ar: "حدد مكوّن الالتزام: التدفقات الموعودة (كوبون + استرداد) مخصومة بمعدل السوق لأدوات مشابهة بلا تحويل" },
        { en: "The EQUITY component = the RESIDUAL: total proceeds − liability component (measured to zero first; never negative)", ar: "مكوّن الملكية = الباقي: إجمالي المتحصلات − الالتزام (يقاس أولًا ولا يكون سالبًا أبدًا)" },
        { en: "Book both at inception; afterwards the liability runs at amortised cost (EIR) and the equity component NEVER gets remeasured", ar: "يثبت العنصران عند النشأة؛ ثم يسري الالتزام بالتكلفة المدمجة ولا يعاد قياس الملكية أبدًا" },
        { en: "CONVERSION: carrying of the liability → equity (share capital + premium); NO gain or loss", ar: "التحويل: القيمة الدفترية للالتزام ← حقوق ملكية (رأس مال وعلاوة)؛ ولا ربح أو خسارة" },
        { en: "REDEMPTION (never converted): repay the liability and TRANSFER the equity component to retained earnings — it never runs through P&L", ar: "الاسترداد (دون تحويل): يسدد الالتزام ويحول مكوّن الملكية إلى الأرباح المحتجزة — لا يمس قائمة الأرباح" },
      ],
    },
    {
      kind: "example",
      title: { en: "Convertible bond split", ar: "فصل سند قابل للتحويل" },
      lines: [
        { en: "2,000 convertible 5% bonds, face 100 each (proceeds 200,000), convertible into 40 shares each; similar straight bonds yield 8%", ar: "٢٬٠٠٠ سند قابل للتحويل كوبونه ٥٪ واسميته ١٠٠ (متحصلات ٢٠٠ ألف)، يتحول كل سند إلى ٤٠ سهمًا؛ والمستقيم المشابه يعطي ٨٪" },
        { en: "Liability = PV of [10/yr coupons × 5 yrs + 100 at maturity] at 8% ≈ 88.0 per bond → 176,000", ar: "الالتزام = القيمة الحالية لكوبونات ١٠ لخمس سنوات و١٠٠ عند الاستحقاق بـ٨٪ ≈ ٨٨ للسند ← ١٧٦٬٠٠٠" },
        { en: "Equity residual = 200,000 − 176,000 = 24,000 (a conversion equity, inside equity forever)", ar: "الباقي الملكوي = ٢٠٠ ألف − ١٧٦ ألف = ٢٤ ألف (ملكية تحويل تسكن حقوق الملكية للأبد)" },
        { en: "The equity component gets NO subsequent measurement — the 8% vs 5% gap accretes through the liability's EIR", ar: "لا يعاد قياس مكوّن الملكية — والفارق ٨٪ مقابل ٥٪ يتضخم عبر فائدة الالتزام الفعلية" },
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
    { kind: "h", text: { en: "Treasury shares & own-equity dealings", ar: "الأسهم الخزينة ومعاملات حقوق الملكية الذاتية" } },
    {
      kind: "list",
      items: [
        { en: "Own shares repurchased (treasury shares) → a DEDUCTION from equity, at cost, in the statement of financial position", ar: "الأسهم الذاتية المشتراة (خزينة) ← خفض من حقوق الملكية بالتكلفة" },
        { en: "Gains/losses on buying/selling/cancelling/issuing OWN equity instruments → NEVER to P&L; they move within equity (like a dividend-in-reverse)", ar: "أرباح/خسائر شراء أو بيع أو إلغاء أو إصدار أدوات الملكية الذاتية ← لا تمس الأرباح أبدًا؛ تتحرك داخل حقوق الملكية" },
        { en: "Transaction costs of an equity transaction are equity account entries (net against proceeds), net of related tax effects", ar: "تكاليف معاملات حقوق الملكية تقيَّد في حقوق الملكية (صافي المتحصلات) بعد الآثار الضريبية" },
        { en: "Distributions to holders of EQUITY instruments → the statement of changes in equity; INTEREST & other returns to holders of LIABILITIES → P&L expense", ar: "التوزيعات لحاملي أدوات الملكية ← قائمة التغيرات؛ والفوائد لحاملي الالتزامات ← مصروف بالأرباح" },
      ],
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
    { kind: "h", text: { en: "What is (and is not) a financial instrument", ar: "ما هو وما ليس أداة مالية" } },
    {
      kind: "list",
      items: [
        { en: "Financial instrument = a contract giving ONE party a financial ASSET and the other a financial LIABILITY or EQUITY instrument", ar: "الأداة المالية = عقد يمنح طرفًا أصلًا ماليًا والآخر التزامًا ماليًا أو أداة ملكية" },
        { en: "A financial asset includes: cash, an EQUITY instrument of another entity, a contractual RIGHT to receive cash/another financial asset, a contract exchangeable on favourable terms, a derivative benefiting the holder", ar: "الأصل المالي يشمل: النقد، وأداة ملكية لمنشأة أخرى، وحقًا تعاقديًا بتلقي نقد أو أصل مالي، وعقدًا للمبادلة بشروط مواتية، ومشتقًا ينفع الحائز" },
        { en: "NOT financial: physical assets (gold, commodities), prepaid expenses, deferred revenue (settling with GOODS not cash), tax liabilities (statutory not contractual), operating lease obligations (IFRS 16 has own regime — though a lease liability IS a financial liability in substance under IFRS 16's own scope), employee-benefit obligations", ar: "غير مالية: الأصول العينية (ذهب، سلع)، والمصروفات المقدمة، والإيراد المؤجل (يسوى بسلع)، والالتزامات الضريبية (قانونية لا تعاقدية)، والتزامات مزايا العاملين" },
      ],
    },
    { kind: "h", text: { en: "Disclosure bridge", ar: "جسر الإفصاح" } },
    {
      kind: "p",
      text: {
        en: "IAS 32's presentation decisions feed IFRS 1-style flows into other standards: the liability/equity split drives EPS (IAS 33 — the liability's interest reduces the numerator), the EIR drives interest expense, and IFRS 7 tells the story. The 2020 amendment also cleaned the costs of an equity transaction and 'fixed-for-fixed' wording for converted items — minor, examinable.",
        ar: "تغذي قرارات عرض IAS 32 معايير أخرى: تقسيم الالتزام/الملكية يقود ربح السهم (فائدة الالتزام تخفض البسط)، والفائدة الفعلية تقود مصروف الفائدة، وIFRS 7 يحكي القصة. ونقح تعديل ٢٠٢٠ تكاليف معاملات الملكية وصياغة «الثابت مقابل الثابت» — يسيرة وقابلة للامتحان.",
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
  ],
}
