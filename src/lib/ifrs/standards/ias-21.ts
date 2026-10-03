/** IAS 21 — The Effects of Changes in Foreign Exchange Rates */

import type { Standard } from "../types"

export const IAS_21: Standard = {
  code: "IAS 21",
  title: { en: "The Effects of Changes in Foreign Exchange Rates", ar: "آثار تغيرات أسعار الصرف الأجنبي" },
  topic: "specialized",
  effective: { en: "Effective 1 Jan 2005 · amended (lack of exchangeability 2024)", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل ٢٠٢٤ (تعذر قابلية التبادل)" },
  blocks: [
    { kind: "h", text: { en: "Objective & the three currencies", ar: "الهدف والعملات الثلاث" } },
    {
      kind: "p",
      text: {
        en: "IAS 21 sorts the currency confusion into three roles: FUNCTIONAL currency (the currency of the primary economic environment in which the entity operates — it is a matter of FACT, not choice), the PRESENTATION currency (any currency the entity reports in — a choice), and foreign-currency TRANSACTIONS (deals denominated in a currency other than the functional). Foreign operations are subsidiaries/branches whose functional currency differs from the parent's — with a fourth concept, the NET INVESTMENT in a foreign operation.",
        ar: "يرتب IAS 21 الالتباس في ثلاثة أدوار: العملة الوظيفية (عملة البيئة الاقتصادية الرئيسية التي تعمل فيها المنشأة — واقعة لا خيار)، وعملة العرض (أي عملة يفصح بها — خيار)، والمعاملات بالعملة الأجنبية (مقومة بغير الوظيفية). والعمليات الأجنبية تابعات وفروع تختلف عملتها الوظيفية عن الأم — مع مفهوم رابع: الاستثمار الصافي في عملية أجنبية.",
      },
    },
    { kind: "h", text: { en: "Determining the functional currency", ar: "تحديد العملة الوظيفية" } },
    {
      kind: "tree",
      root: { en: "Primary & secondary indicators", ar: "المؤشرات الأولية والثانوية" },
      branches: [
        {
          when: { en: "PRIMARY: the currency that mainly influences SALES PRICES (the competitive market's currency) · LABOUR, materials & other COSTS · funds from FINANCING activities", ar: "الأولية: العملة المؤثرة أساسًا في أسعار البيع (عملة السوق التنافسية) · الأجور والمواد والتكاليف · أموال التمويل" },
          then: { en: "The economic-environment test — where does the entity make and spend its life?", ar: "اختبار البيئة الاقتصادية — أين تكسب المنشأة حياتها وتنفقها؟", red: true },
        },
        {
          when: { en: "SECONDARY: the currency of RETAINED sales proceeds · cash-flow indicators (does the entity self-generate cash in that currency?)", ar: "الثانوية: عملة حيازة متحصلات المبيعات · مؤشرات التدفقات (هل تولد المنشأة نقدًا بها ذاتيًا؟)" },
          then: { en: "Tie-breakers when primaries conflict", ar: "فواصل عند تعارض الأوليات" },
        },
        {
          when: { en: "Management may NOT simply choose the convenient currency — judgement on the facts, reviewed when the underlying facts change", ar: "لا يجوز للإدارة انتقاء عملة ملائمة — بل حكم على الوقائع يراجع عند تغيرها" },
          then: { en: "A change of functional currency is accounted for PROSPECTIVELY (a change in accounting estimate-like event... in fact IAS 21 treats it as requiring re-translation from the change date)", ar: "تغيير العملة الوظيفية يعالج مستقبليًا بإعادة الترجمة من تاريخ التغيير", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Foreign-currency transactions — initial & subsequent", ar: "المعاملات بالأجنبية — الأولي واللاحق" } },
    {
      kind: "steps",
      items: [
        { en: "INITIAL: record at the SPOT rate on the transaction date (or a practical average for a week/month if it does not distort)", ar: "الأولي: يسجل بسعر الفوري بتاريخ المعاملة (أو متوسط عملي لا يشوه)" },
        { en: "MONETARY items at each reporting date (cash, receivables, payables, borrowings): retranslate at CLOSING rate; differences → P&L", ar: "البنود النقدية في كل تقرير (نقد، مدينون، دائنون، اقتراضات): تعاد ترجمتها بسعر الإقفال؛ والفروق للأرباح" },
        { en: "NON-MONETARY items at HISTORICAL rates (inventory, PPE, prepaid expenses); but a non-monetary item measured at FAIR VALUE is translated at the rate when the fair value was determined", ar: "غير النقدية بالأسعار التاريخية (مخزون، ممتلكات، مصروفات مقدمة)؛ وما قيس بالعادلة يترجم بسعر تاريخ تحديد العادلة" },
        { en: "GOODWILL is part of the net investment in a foreign operation — a NON-monetary item at historical rates (in the consolidated books it translates as part of the subsidiary's net assets)", ar: "الشهرة جزء من الاستثمار الصافي — بند غير نقدي بالأسعار التاريخية" },
        { en: "Income statement items: retranslate at the transaction dates (a practical AVERAGE rate is acceptable) — but the related balance-sheet items use closing/historical, creating small reconciliation differences", ar: "بنود الأرباح: تترجم بتواريخ المعاملات (ويجوز المتوسط) — وتتولد فروق تسوية صغيرة عن أسعار الميزانية" },
      ],
    },
    {
      kind: "tree",
      title: { en: "Monetary vs non-monetary — the survival test", ar: "نقدي مقابل غير نقدي — اختبار البقاء" },
      root: { en: "Does the item's right to receive/pay a FIXED currency amount survive time?", ar: "هل يبقى الحق في تلقي/سداد مبلغ بعملة ثابتة مع الزمن؟" },
      branches: [
        {
          when: { en: "YES — money held and amounts to be paid/received in money: cash, trade payables & receivables, long-term borrowings, lease liabilities, contract assets/liabilities (rights to receive/pay currency)", ar: "نعم — نقد ومقادير تسوى نقدًا: الدائنون والمدينون والاقتراضات والتزامات الإيجار وأصول/التزامات العقود" },
          then: { en: "MONETARY → closing rate, P&L differences", ar: "نقدي ← سعر الإقفال والفروق للأرباح", red: true },
        },
        {
          when: { en: "NO — the item settles in goods/services or carries no fixed currency claim: inventory, PPE, intangibles, prepayments, provisions measured at best-estimate local amounts, equity instruments", ar: "لا — يسوى بسلع/خدمات أو لا يحمل مطالبة نقدية ثابتة: المخزون والممتلكات وغير الملموسة والمقدمات والمخصصات المحلية وأدوات الملكية" },
          then: { en: "NON-MONETARY → historical rate (or FV-date rate); NO retranslation, NO exchange difference", ar: "غير نقدي ← السعر التاريخي (أو سعر تاريخ العادلة)؛ ولا إعادة ترجمة ولا فرق صرف", red: true },
        },
        {
          when: { en: "Deferred revenue in a foreign currency — settles by delivering GOODS", ar: "إيراد مؤجل بعملة أجنبية — يسوى بتسليم سلع" },
          then: { en: "NON-MONETARY: the historical rate stands; the eventual revenue recognises at those locked rates", ar: "غير نقدي: يبقى السعر التاريخي ويعترف بالإيراد بأسعاره المقفولة" },
        },
      ],
    },
    {
      kind: "journal",
      title: { en: "The transaction entries", ar: "قيود المعاملات" },
      rows: [
        { dr: { en: "Payables (USD invoice recorded at spot)", ar: "دائنون (فاتورة دولار بالفوري)" }, cr: { en: "Purchases / inventory", ar: "مشتريات/مخزون" } },
        { dr: { en: "Foreign exchange loss (closing rate moved against us)", ar: "خسارة فرق صرف (تحرك الإقفال ضدنا)" }, cr: { en: "Payables (retranslated)", ar: "الدائنون (معاد ترجمته)" }, red: true },
        { dr: { en: "Payables (settled at a better rate)", ar: "الدائنون (سُوي بسعر أفضل)" }, cr: { en: "Cash · Foreign exchange gain (plug)", ar: "نقد · مكسب صرف (فرق التوازن)" } },
        { cr: { en: "Machinery: translated ONCE at the historical rate — never retranslated (non-monetary)", ar: "الآلات: تترجم مرة بالسعر التاريخي — ولا يعاد أبدًا" }, red: true },
      ],
    },
    {
      kind: "example",
      title: { en: "A payable through two periods", ar: "دائنون عبر فترتين" },
      lines: [
        { en: "Egyptian importer buys goods for 10,000 USD on 1 Oct when USD/EGP = 48 · year-end 31 Dec rate 50 · settles 1 Feb at 52", ar: "مستورد مصري يشتري بـ١٠٬٠٠٠ دولار في ١ أكتوبر والسعر ٤٨ · ونهاية السنة ٥٠ · ويسدد في ١ فبراير عند ٥٢" },
        { en: "1 Oct: inventory 480,000 (10,000 × 48)", ar: "١ أكتوبر: مخزون ٤٨٠٬٠٠٠" },
        { en: "31 Dec: payable 500,000 → exchange LOSS 20,000 in P&L (a monetary item retranslated)", ar: "٣١ ديسمبر: الدائنون ٥٠٠٬٠٠٠ ← خسارة صرف ٢٠٬٠٠٠ بالأرباح" },
        { en: "1 Feb: pay 520,000 cash → further loss 20,000 (52 vs 50) — the inventory's 480,000 NEVER moves (non-monetary)", ar: "١ فبراير: سداد ٥٢٠٬٠٠٠ ← خسارة إضافية ٢٠٬٠٠٠؛ ومخزون ٤٨٠٬٠٠٠ لا يتحرك أبدًا" },
      ],
    },
    { kind: "h", text: { en: "Translating foreign operations", ar: "ترجمة العمليات الأجنبية" } },
    {
      kind: "steps",
      items: [
        { en: "Same functional currency as the parent: no translation of results — only the TRANSACTION mechanics (and consolidation of like currencies)", ar: "العملة ذاتها للأم: لا ترجمة للنتائج — بل ميكانيكا المعاملات فقط" },
        { en: "Different functional currency (a 'foreign operation' — the usual case): assets & liabilities at CLOSING · income & expenses at transaction-date/average rates · all resulting differences → a separate EQUITY reserve: the CTA (cumulative translation difference / exchange reserve)", ar: "عملة مختلفة (الغالب): الأصول والالتزامات بالإقفال · والإيرادات والمصروفات بالمتوسط/تواريخ المعاملات · والفروق كلها ← احتياطي حقوق الملكية: فروق الترجمة التراكمية" },
        { en: "Goodwill & fair-value adjustments arising on the acquisition of the foreign operation: they belong to the foreign operation — translated at CLOSING rate (a 2005-revision oddity vs the old historical-rate world)", ar: "الشهرة وتعديلات العادلة الناشئة عن اقتناء العملية الأجنبية: تخص العملية الأجنبية — وتترجم بالإقفال" },
        { en: "The resulting goodwill (as translated) sits INSIDE the net-investment view — its further changes flow through CTA, not P&L", ar: "الشهرة المترجمة تسكن داخل منظور الاستثمار الصافي — وتغيراتها عبر الاحتياطي لا الأرباح" },
      ],
    },
    { kind: "h", text: { en: "Disposal & the CTA recycling rule", ar: "التخرد وقاعدة تدوير الفروق" } },
    {
      kind: "tree",
      root: { en: "The entity disposes of a foreign operation", ar: "تتخلى المنشأة عن عملية أجنبية" },
      branches: [
        {
          when: { en: "FULL disposal (or complete loss of control / significant influence / joint control)", ar: "تخرد كامل (أو فقد تام للسيطرة/التأثير/السيطرة المشتركة)" },
          then: { en: "RECYCLE the entire related CTA from equity to P&L as part of the gain/loss on disposal", ar: "أعِد تدوير كامل الفروق المرتبطة من حقوق الملكية إلى الأرباح ضمن ربح/خسارة التخرد", red: true },
        },
        {
          when: { en: "PARTIAL disposal that LOSES control (60% → 20%): recycle the CTA proportionate to the loss of control", ar: "تخرد جزئي يفقد السيطرة (٦٠٪ ← ٢٠٪): يدور من الاحتياطي بقدر ما فُقد" },
          then: { en: "Only the disposed proportion recycles; the retained stake's CTA waits", ar: "يدور المتخرد فقط وينتظر المحتفظ به", red: true },
        },
        {
          when: { en: "PARTIAL disposal WITHOUT losing control (80% → 60%)", ar: "تخرد جزئي بلا فقد سيطرة (٨٠٪ ← ٦٠٪)" },
          then: { en: "NO recycling — the entity's ownership of the investment changed, not the investment itself", ar: "لا تدوير — فقد تغيرت الملكية لا الاستثمار ذاته", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "The net-investment hedge & special cases", ar: "تغطية الاستثمار الصافي وحالات خاصة" } },
    {
      kind: "list",
      items: [
        { en: "A NET INVESTMENT hedge (IFRS 9): hedge the FX exposure of the parent's net investment — effective portion → CTA (the same reserve), mirroring the hedged item's geography", ar: "تغطية الاستثمار الصافي (IFRS 9): الجزء الفاعل ← احتياطي فروق الترجمة ذاته" },
        { en: "Monetary items forming part of a net investment (a long-term loan the parent cannot be repaid... a 'permanent' intercompany loan): between different functional currencies — a long-term receivable/paytable accounted as part of net investment → CTA until disposal/repayment", ar: "البنود النقدية المكونة لجزء من استثمار صافٍ (قرض طويل الأمد بين عملتين وظيفيتين مختلفتين يعد جزءًا من الاستثمار) ← الاحتياطي حتى التخرد/السداد" },
        { en: "HYPERINFLATIONARY functionals (IAS 29): restate the subsidiary's statements FIRST, then translate — the inflation and FX machinery interlock", ar: "الوظيفية عالية التضخم: تعدل قوائم التابعة وفق IAS 29 أولًا ثم تترجم" },
        { en: "The 2024 'lack of exchangeability' amendment: when a currency cannot be converted (no observable rates), estimate the rate that would apply in an orderly market — with disclosure of the process and the rate used", ar: "تعديل ٢٠٢٤ (تعذر قابلية التبادل): عند استحالة التحويل تقدر السعر الذي سيسود سوقًا منتظمة — مع الإفصاح عن العملية والسعر" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The exam's one-second question: is the item MONETARY? — yes → closing rate + P&L; no → historical rate + silence. Every IAS 21 scenario resolves through that single filter; the rest is plumbing.",
        ar: "سؤال الثانية الواحد: هل البند نقدي؟ — نعم ← الإقفال والأرباح؛ لا ← التاريخي والصمت. كل سيناريو IAS 21 يمر عبر هذا المرشح وحده؛ والباقي سباكة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "CTA recycles ONLY on disposal that ends the relationship — and for partial loss-of-control, only the disposed share. 'Sold 10% of my 80%, still control' = zero recycling; examiners set this exact pair.",
        ar: "الفروق تدور فقط عند تخرد ينهي العلاقة — وفي فقد السيطرة الجزئي بقدر المتخرد فقط. «بعت ١٠٪ من ٨٠٪ ولا أزال مسيطرًا» = لا تدوير؛ وهذه الثنائية بعينها تنصب في الامتحانات.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Presentation currency ≠ functional: when they differ the statements are TRANSLATED for presentation; a 'convenience translation' (a copy in another language) is a disclosure-only courtesy with no IAS 21 standing.",
        ar: "عملة العرض ليست العملة الوظيفية: إذا اختلفا تُترجم القوائم إلى عملة العرض؛ أما «الترجمة التيسيرية» فنسخة بلغة أخرى للإفصاح فقط ولا صلة لها بـIAS 21.",
      },
    },
  ],
}
