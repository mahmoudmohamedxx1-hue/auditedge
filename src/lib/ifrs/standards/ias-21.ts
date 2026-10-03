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
    {
      kind: "note",
      text: {
        en: "Presentation currency ≠ functional: when they differ the statements are TRANSLATED for presentation; a 'convenience translation' (a copy in another language) is a disclosure-only courtesy with no IAS 21 standing.",
        ar: "عملة العرض ليست العملة الوظيفية: إذا اختلفا تُترجم القوائم إلى عملة العرض؛ أما «الترجمة التيسيرية» فنسخة بلغة أخرى للإفصاح فقط ولا صلة لها بـIAS 21.",
      },
    },
    { kind: "h", text: { en: "Scope & the 2024 amendment", ar: "النطاق وتعديل ٢٠٢٤" } },
    {
      kind: "p",
      text: {
        en: "The standard governs three jobs: recording foreign-currency transactions from initial recognition to settlement; translating the results and position of a foreign operation (goodwill and fair-value adjustments included) into the presentation currency; and accounting for the net investment in a foreign operation. It does NOT govern FX hedge accounting — that is IFRS 9 territory — nor hyperinflation restatement (IAS 29, though the two interlock). The July 2024 'lack of exchangeability' amendment answers the modern edge case: what to do when no observable exchange rate exists at all.",
        ar: "يحكم المعيار ثلاث مهام: تسجيل المعاملات بالعملة الأجنبية من الاعتراف الأولي حتى التسوية؛ وترجمة نتائج ومركز العملية الأجنبية (والشهرة وتعديلات القيمة العادلة ضمنًا) إلى عملة العرض؛ ومحاسبة الاستثمار الصافي في عملية أجنبية. ولا يحكم تغطية مخاطر الصرف — فتلك أرض IFRS 9 — ولا إعادة عرض التضخم الجامح (IAS 29 وإن تشابكا). وتعديل يوليو ٢٠٢٤ «تعذر قابلية التبادل» يجيب عن الحالة الحديثة: ماذا نفعل حين لا يوجد سعر صرف ملحوظ أصلًا.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "IN: foreign-currency transactions & balances — initial spot-rate recording, closing-rate retranslation of monetary items, settlement differences", ar: "داخل النطاق: المعاملات والأرصدة بالعملة الأجنبية — التسجيل الأولي بالسعر الفوري، وإعادة ترجمة النقدية بسعر الإقفال، وفروق التسوية" },
        { en: "IN: translating a foreign operation's assets, liabilities, income and expenses — plus goodwill and FV adjustments that belong to it — into the presentation currency", ar: "داخل النطاق: ترجمة أصول العملية الأجنبية والتزاماتها وإيراداتها ومصروفاتها — وشهرتها وتعديلات العادلة الخاصة بها — إلى عملة العرض" },
        { en: "IN: intragroup monetary items between members with DIFFERENT functional currencies (the net-investment branch of the rules)", ar: "داخل النطاق: البنود النقدية داخل المجموعة بين أعضاء عملاتهم الوظيفية مختلفة (فرع الاستثمار الصافي من القواعد)" },
        { en: "OUT: hedge accounting for FX exposures — IFRS 9 designates and measures the hedge (the net-investment hedge parks its effective part in the same CTA reserve)", ar: "خارج النطاق: محاسبة التغطية للانكشافات العملاتية — فـIFRS 9 تعين التغطية وتقيسها (وتغطية الاستثمار الصافي تحتفظ بجزئها الفاعل في احتياطي الفروق ذاته)" },
        { en: "OUT: hyperinflation restatement — IAS 29 (restate FIRST, then translate: see the interface section)", ar: "خارج النطاق: إعادة عرض التضخم الجامح — IAS 29 (أعد أولًا ثم ترجم: انظر باب التقاطع)" },
        { en: "Replaced by the 2003 revision: IAS 21 (1993), SIC-19 (reporting currency) and SIC-30 (translation into a presentation currency)", ar: "أحل تعديل ٢٠٠٣ محل: IAS 21 (نسخة ١٩٩٣) وتفسيرَي SIC-19 (عملة التقرير) وSIC-30 (الترجمة إلى عملة عرض)" },
      ],
    },
    { kind: "h", text: { en: "Key definitions", ar: "التعريفات المفتاحية" } },
    {
      kind: "p",
      text: {
        en: "FUNCTIONAL currency: the currency of the primary economic environment in which the entity operates — where it generates and expends cash. PRESENTATION currency: the currency in which the financial statements are presented (any choice, changed only by presentation). A MONETARY item is money held plus assets/liabilities to be received or paid in fixed or determinable currency amounts; everything settling in goods or services is NON-monetary. The NET INVESTMENT in a foreign operation is the parent's share in the operation's net assets plus monetary items that are, in substance, part of that investment.",
        ar: "العملة الوظيفية: عملة البيئة الاقتصادية الرئيسية التي تعمل فيها المنشأة — حيث تولّد النقد وتنفقه. وعملة العرض: العملة التي تُعرض بها القوائم المالية (أي خيار، يتغير بقرار عرضي). والبند النقدي: نقد محتجز وأصول/التزامات تُستلم أو تُسدد بمبالغ نقدية ثابتة أو قابلة للتحديد؛ وكل ما يسوى بسلع أو خدمات غير نقدي. والاستثمار الصافي في عملية أجنبية: نصيب الأم في صافي أصولها مضافًا إليه البنود النقدية التي هي جوهريًا جزء من ذلك الاستثمار.",
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
          then: { en: "A change of functional currency is accounted for PROSPECTIVELY — apply the translation procedures of the NEW functional currency from the changeover date; the translated amounts become the new historical figures", ar: "تغيير العملة الوظيفية يعالج مستقبليًا — طبّق إجراءات ترجمة العملة الجديدة من تاريخ التحول؛ وتصير المبالغ المترجمة الأرقام التاريخية الجديدة", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Extension of the parent vs a self-contained operation", ar: "امتداد للأم أم عملية قائمة بذاتها" } },
    {
      kind: "p",
      text: {
        en: "The functional-currency question is sharpest for a foreign subsidiary or branch. IAS 21's Appendix A paints two archetypes: the operation that is an EXTENSION of the parent — its prices track the parent's currency, its sales flow back home immediately, its financing comes from the parent — versus the SELF-CONTAINED operation that carries on its own affairs in its own economy. The extension behaves as if it transacted in the parent's currency all along; the self-contained entity earns its own.",
        ar: "يبلغ سؤال العملة الوظيفية حدته مع التابعة أو الفرع الأجنبي. ويرسم ملحق A من IAS 21 نموذجين: عملية هي امتداد للأم — أسعارها تتبع عملة الأم، ومبيعاتها تعود للوطن فورًا، وتمويلها من الأم — مقابل عملية قائمة بذاتها تدير شؤونها في اقتصادها هي. فالامتداد يتصرف كأنه يتعامل بعملة الأم منذ البداية؛ والقائمة بذاتها تكسب عملتها الخاصة.",
      },
    },
    {
      kind: "tree",
      root: { en: "Which archetype is this foreign operation?", ar: "أي نموذج هذه العملية الأجنبية؟" },
      branches: [
        {
          when: { en: "Autonomous: generates income & cash in its OWN currency, incurs local costs, arranges its own financing, retains and reinvests its cash", ar: "مستقلة: تولد الدخل والنقد بعملتها هي، وتتحمل تكاليف محلية، وتدير تمويلها، وتحتجز نقدها وتعيد استثماره" },
          then: { en: "Its OWN functional currency → a foreign operation: full translation machinery (closing/average → CTA)", ar: "عملتها الوظيفية هي → عملية أجنبية: آلة الترجمة الكاملة (الإقفال/المتوسط ← الفروق التراكمية)", red: true },
        },
        {
          when: { en: "Extension of the parent: prices driven by the PARENT's currency, sales remitted immediately, financing and FX risk borne by the parent", ar: "امتداد للأم: أسعارها تتبع عملة الأم، ومبيعاتها تُحوَّل فورًا، والتمويل ومخاطر الصرف على الأم" },
          then: { en: "FUNCTIONAL = the parent's currency → its books only host foreign-currency TRANSACTIONS (closing rate + P&L)", ar: "الوظيفية = عملة الأم → دفاترها لا تحمل إلا معاملات بالعملة الأجنبية (سعر الإقفال والأرباح)", red: true },
        },
        {
          when: { en: "Mixed signals — judge from the flow of cash: where is it earned, banked and spent?", ar: "إشارات مختلطة — احكم من مسار النقد: أين يُكسب ويودع ويُنفق؟" },
          then: { en: "Whichever environment dominates the ENTITY's cash machine wins — document the judgement", ar: "البيئة الغالبة على آلة النقد في المنشأة تنتصر — ووثّق الحكم" },
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
      kind: "p",
      text: {
        en: "The TRANSACTION DATE is the date the transaction first qualifies for recognition under IFRS — the IFRS 15 transfer of control fixes the rate for a sale, not the invoicing date. Settling a monetary item at a rate different from the one booked produces a further P&L difference. When settlement of the monetary item is deferred beyond normal commercial terms, the item carries an implicit financing component measured under IFRS 9 or IFRS 15 — but it remains a monetary item, still retranslated at closing.",
        ar: "تاريخ المعاملة هو التاريخ الذي تؤهل فيه المعاملة أول مرة للاعتراف وفق IFRS — فانتقال السيطرة وفق IFRS 15 هو الذي يثبت سعر البيع لا تاريخ الفاتورة. وتسوية البند النقدي بسعر مغاير للمحجوز تنتج فرقًا إضافيًا بالأرباح. وعند تأجيل التسوية عن الشروط التجارية المعتادة يحمل البند عنصر تمويل ضمنيًا يقاس وفق IFRS 9 أو IFRS 15 — لكنه يبقى بندًا نقديًا يعاد ترجمته بالإقفال.",
      },
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
      kind: "tip",
      text: {
        en: "A foreign-currency PREPAYMENT is NON-monetary: the rate locked at the payment date stands forever — never retranslated. The exam pair: prepayment for goods (frozen rate) vs the payable for the same goods (closing rate, P&L swing).",
        ar: "الدفعة المقدمة بالعملة الأجنبية غير نقدية: يبقى السعر المحجوز بتاريخ الدفع أبدًا — ولا يعاد ترجمته. والثنائية الامتحانية: دفعة مقدمة عن سلع (سعر مجمّد) مقابل دائنين عن السلع ذاتها (سعر الإقفال وتأرجح بالأرباح).",
      },
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
      kind: "journal",
      title: { en: "A receivable's cycle (export sale 10,000 USD)", ar: "دورة مدينين (بيع تصدير ١٠٬٠٠٠ دولار)" },
      rows: [
        { dr: { en: "Receivable 480,000 (spot 48 on the sale date)", ar: "مدينون ٤٨٠٬٠٠٠ (الفوري ٤٨ بتاريخ البيع)" }, cr: { en: "Revenue 480,000", ar: "إيراد ٤٨٠٬٠٠٠" } },
        { dr: { en: "Receivable 20,000", ar: "مدينون ٢٠٬٠٠٠" }, cr: { en: "Foreign exchange gain 20,000 (closing rate 50 — a monetary item retranslated)", ar: "مكسب فرق صرف ٢٠٬٠٠٠ (الإقفال ٥٠ — بند نقدي يعاد ترجمته)" }, red: true },
        { dr: { en: "Cash 490,000 · Foreign exchange loss 10,000", ar: "نقد ٤٩٠٬٠٠٠ · خسارة فرق صرف ١٠٬٠٠٠" }, cr: { en: "Receivable 500,000 (collected at 49 — the settlement difference)", ar: "مدينون ٥٠٠٬٠٠٠ (تحصيل عند ٤٩ — فرق التسوية)" } },
      ],
    },
    {
      kind: "formula",
      title: { en: "The rate matrix — which rate, which item", ar: "مصفوفة الأسعار — أي سعر لأي بند" },
      lines: [
        { en: "Monetary items → CLOSING rate at each reporting date → differences to P&L", ar: "البنود النقدية ← سعر الإقفال في كل تاريخ تقرير ← الفروق للأرباح" },
        { en: "Non-monetary at historical cost → the HISTORICAL (transaction-date) rate — frozen forever", ar: "غير النقدية بالتكلفة التاريخية ← السعر التاريخي (تاريخ المعاملة) — مجمّد أبدًا" },
        { en: "Non-monetary at fair value → the rate when the fair value was DETERMINED", ar: "غير النقدية بالقيمة العادلة ← سعر تاريخ تحديد العادلة" },
        { en: "Income & expenses → transaction-date rates (an AVERAGE rate acceptable) · equity items → historical rates", ar: "الإيرادات والمصروفات ← أسعار التواريخ (ويجوز المتوسط) · بنود حقوق الملكية ← التاريخية" },
        { en: "Goodwill & FV adjustments from acquiring a foreign operation → CLOSING rate — they belong to the operation", ar: "الشهرة وتعديلات العادلة من اقتناء العملية ← سعر الإقفال — فهي تخص العملية" },
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
    {
      kind: "p",
      text: {
        en: "The same machinery translates an entity's OWN statements when the presentation currency differs from its functional currency: assets and liabilities (including goodwill acquired from a foreign operation) at closing, income and expenses at transaction-date or average rates, the resulting differences to a separate equity reserve. The translated statements are still a faithful image of the functional-currency originals — the reserve simply absorbs the rate movement so the totals balance.",
        ar: "الآلة ذاتها تترجم قوائم المنشأة ذاتها عندما تختلف عملة العرض عن الوظيفية: الأصول والالتزامات (شاملة شهرة مقتناة من عملية أجنبية) بالإقفال، والإيرادات والمصروفات بأسعار التواريخ أو المتوسط، والفروق الناتجة لاحتياطي حقوق ملكية مستقل. فالقوائم المترجمة تظل صورة أمينة للأصول بالعملة الوظيفية — والاحتياطي يمتص حركة السعر ليتوازن الطرفان.",
      },
    },
    { kind: "h", text: { en: "The full translation — a subsidiary's year", ar: "الترجمة الكاملة — سنة تابعة" } },
    {
      kind: "example",
      title: { en: "A subsidiary translated end to end", ar: "ترجمة تابعة من الطرف للطرف" },
      lines: [
        { en: "1 Jan: parent acquires a sub — net assets FCU 1,000 (share capital 400 + retained earnings 600) · consideration FCU 1,500 → goodwill FCU 500 · acquisition rate 40", ar: "١ يناير: تقتني الأم تابعة — صافي أصول ١٬٠٠٠ (رأسمال ٤٠٠ + أرباح محتجزة ٦٠٠) · المقابل ١٬٥٠٠ ← شهرة ٥٠٠ · سعر الاقتناء ٤٠" },
        { en: "Day one: net assets 1,000 × 40 = 40,000 PCU · goodwill 500 × 40 = 20,000 · investment 1,500 × 40 = 60,000", ar: "اليوم الأول: صافي الأصول ٤٠٬٠٠٠ · الشهرة ٢٠٬٠٠٠ · الاستثمار ٦٠٬٠٠٠" },
        { en: "31 Dec: net assets FCU 1,300 (profit for the year 300, no dividends) · closing rate 44 · average rate 42", ar: "٣١ ديسمبر: صافي الأصول ١٬٣٠٠ (ربح السنة ٣٠٠ بلا توزيعات) · الإقفال ٤٤ · المتوسط ٤٢" },
        { en: "CTA on net assets = 1,300×44 − (1,000×40 + 300×42) = 57,200 − 52,600 = 4,600", ar: "فروق صافي الأصول = ١٬٣٠٠×٤٤ − (١٬٠٠٠×٤٠ + ٣٠٠×٤٢) = ٥٧٬٢٠٠ − ٥٢٬٦٠٠ = ٤٬٦٠٠" },
        { en: "CTA on goodwill = 500×44 − 20,000 = 2,000 → total exchange reserve = 4,600 + 2,000 = 6,600 credit (the FCU strengthened)", ar: "فروق الشهرة = ٥٠٠×٤٤ − ٢٠٬٠٠٠ = ٢٬٠٠٠ ← الاحتياطي الكلي = ٤٬٦٠٠ + ٢٬٠٠٠ = ٦٬٦٠٠ دائن (قويت العملة)" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The translation entry set", ar: "مجموعة قيود الترجمة" },
      rows: [
        { dr: { en: "Net assets of subsidiary 40,000 · Goodwill 20,000", ar: "صافي أصول التابعة ٤٠٬٠٠٠ · شهرة ٢٠٬٠٠٠" }, cr: { en: "Investment in subsidiary 60,000 (acquisition day, at the 40 rate)", ar: "الاستثمار في التابعة ٦٠٬٠٠٠ (يوم الاقتناء بسعر ٤٠)" } },
        { dr: { en: "Net assets +17,200 (57,200 − 40,000) · Goodwill +2,000", ar: "صافي الأصول +١٧٬٢٠٠ (٥٧٬٢٠٠ − ٤٠٬٠٠٠) · الشهرة +٢٬٠٠٠" }, cr: { en: "Profit for the year 12,600 (300 × average 42)", ar: "ربح السنة ١٢٬٦٠٠ (٣٠٠ × المتوسط ٤٢)" } },
        { cr: { en: "Exchange reserve — CTA 6,600 (4,600 on net assets + 2,000 on goodwill)", ar: "احتياطي فروق الترجمة ٦٬٦٠٠ (٤٬٦٠٠ على الأصول + ٢٬٠٠٠ على الشهرة)" }, red: true },
        { cr: { en: "Check: 17,200 + 2,000 = 12,600 + 6,600 — the entry balances", ar: "تحقق: ١٧٬٢٠٠ + ٢٬٠٠٠ = ١٢٬٦٠٠ + ٦٬٦٠٠ — القيد متوازن" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Disposal & the CTA recycling rule", ar: "التخرد وقاعدة تدوير الفروق" } },
    {
      kind: "p",
      text: {
        en: "When the relationship with a foreign operation ends, the equity reserve that spent a lifetime absorbing translation differences has nowhere left to hide: IAS 21 recycles it to profit or loss so the disposal gain/loss tells the whole story. Partial disposals turn on whether CONTROL — or significant influence, or joint control — is lost: a change of ownership inside continuing control recycles nothing, because the entity's investment did not change, only its shareholders' relative stakes. The recycling is a reclassification within the statements, not a remeasurement.",
        ar: "عند انتهاء العلاقة بعملية أجنبية لا يبقى للاحتياطي الذي أمتص طوال عمره فروق الترجمة مكان يختبئ فيه: يعيد IAS 21 تدويره إلى الأرباح أو الخسائر ليحكي ربح/خسارة التخرد القصة كاملة. وتتعلق التخريدات الجزئية بفقد السيطرة — أو التأثير الجوهري أو السيطرة المشتركة — من عدمه: فتغير الملكية مع بقاء السيطرة لا يدور شيئًا، إذ لم يتغير استثمار المنشأة بل أنصبة مساهميها النسبية فقط. والتدوير إعادة تبويب داخل القوائم لا إعادة قياس.",
      },
    },
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
    {
      kind: "journal",
      title: { en: "Recycling on full disposal (the 6,600 example)", ar: "التدوير عند التخرد الكامل (مثال ٦٬٦٠٠)" },
      rows: [
        { dr: { en: "Exchange difference reserve (CTA) 6,600", ar: "احتياطي فروق العملة ٦٬٦٠٠" }, cr: { en: "Gain on disposal (P&L) 6,600 — a lifetime of differences finally lands", ar: "ربح التخرد (بالأرباح) ٦٬٦٠٠ — فروق عمر كامل تحط أخيرًا" }, red: true },
        { dr: { en: "If the reserve were DEBIT (accumulated losses)", ar: "لو كان الاحتياطي مدينًا (خسائر متراكمة)" }, cr: { en: "Loss on disposal (P&L) — the recycle turns into a charge", ar: "خسارة تخرد (بالأرباح) — يتحول التدوير عبئًا" }, red: true },
        { cr: { en: "Partial loss of control → recycle only the DISPOSED share of the reserve", ar: "فقد السيطرة الجزئي ← دوّر الحصة المتخردة فقط من الاحتياطي" } },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "CTA recycles ONLY on disposal that ends the relationship — and for partial loss-of-control, only the disposed share. 'Sold 10% of my 80%, still control' = zero recycling; examiners set this exact pair.",
        ar: "الفروق تدور فقط عند تخرد ينهي العلاقة — وفي فقد السيطرة الجزئي بقدر المتخرد فقط. «بعت ١٠٪ من ٨٠٪ ولا أزال مسيطرًا» = لا تدوير؛ وهذه الثنائية بعينها تنصب في الامتحانات.",
      },
    },
    { kind: "h", text: { en: "The net-investment hedge & intragroup monetary items", ar: "تغطية الاستثمار الصافي والبنود النقدية داخل المجموعة" } },
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
      kind: "p",
      text: {
        en: "The intragroup exception is the classic trap: a short-term intercompany balance vanishes on consolidation, but a MONETARY item between members with different functional currencies is, in substance, the parent's net investment — its exchange differences go to the CTA reserve, not P&L. The classification hinges on the item's substance (a permanent loan, settlement neither planned nor likely), not its label; ordinary short-term trading balances stay in P&L.",
        ar: "الاستثناء داخل المجموعة هو الفخ الكلاسيكي: الرصيد قصير الأجل بين شقيقتين يتلاشى بالتجميع، لكن البند النقدي بين عضوين عملتاهما الوظيفيتان مختلفتان هو جوهريًا استثمار الأم الصافي — ففروق عملته تذهب لاحتياطي الفروق لا للأرباح. والتصنيف يتعلق بجوهر البند (قرض دائم لا سداد مخططًا له ولا مرجحًا) لا بمسماه؛ وأرصدة التعامل قصيرة الأجل المعتادة تبقى بالأرباح.",
      },
    },
    { kind: "h", text: { en: "The IAS 29 interface — restate first, then translate", ar: "تقاطع IAS 29 — أعد أولًا ثم ترجم" } },
    {
      kind: "p",
      text: {
        en: "When a foreign operation's functional currency is hyperinflationary, the two standards interlock in a fixed order: restate its figures under IAS 29 into the measuring unit current at the reporting date FIRST, then translate the restated figures into the presentation currency at the CLOSING rate. Because the restated comparatives are already in closing units, they translate at the closing rate too — every column of the group statements ends up in the same money.",
        ar: "عندما تكون العملة الوظيفية للعملية الأجنبية جامحة التضخم يتشابك المعياران بترتيب مقرر: أعد عرض أرقامها وفق IAS 29 إلى وحدة القياس السائدة بتاريخ التقرير أولًا، ثم ترجم الأرقام المعادة إلى عملة العرض بسعر الإقفال. ولأن المقارنات المعادة بوحدات الإقفال أصلًا فإنها تترجم بسعر الإقفال كذلك — فتنتهي كل أعمدة قوائم المجموعة بالنقد ذاته.",
      },
    },
    { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "The amount of exchange differences recognised in PROFIT OR LOSS in the period", ar: "مبلغ فروق العملة المعترف به في الأرباح أو الخسائر خلال الفترة" },
        { en: "The net exchange differences on translating foreign operations and on net-investment hedges recognised in EQUITY, and the movement in the CTA reserve", ar: "صافي فروق ترجمة العمليات الأجنبية وتغطيات الاستثمار الصافي المعترف به في حقوق الملكية، وحركة احتياطي الفروق" },
        { en: "The presentation currency, and the functional currency when it differs", ar: "عملة العرض، والعملة الوظيفية عند اختلافها" },
        { en: "A CHANGE of functional currency — and the underlying reason (the facts changed)", ar: "تغير العملة الوظيفية — وسببه الجوهري (تغيرت الوقائع)" },
        { en: "When no observable exchange rate exists: the estimation process and the rate USED (the 2024 lack-of-exchangeability amendment)", ar: "عند غياب سعر صرف ملحوظ: عملية التقدير والسعر المستخدم (تعديل ٢٠٢٤ لتعذر قابلية التبادل)" },
      ],
    },
    { kind: "h", text: { en: "Interactions with other standards", ar: "التفاعل مع المعايير الأخرى" } },
    {
      kind: "list",
      items: [
        { en: "IFRS 9: designates and measures FX hedges; retranslates monetary financial instruments at closing (differences to P&L unless a hedge)", ar: "IFRS 9: تعين تغطيات العملة وتقيسها؛ وتعيد ترجمة الأدوات المالية النقدية بالإقفال (والفروق للأرباح ما لم تكن تغطية)" },
        { en: "IAS 29: the restate-first-then-translate order for hyperinflationary functionals", ar: "IAS 29: ترتيب أعد أولًا ثم ترجم للعملات الوظيفية الجامحة" },
        { en: "IFRS 10: losing control over a foreign operation recycles its CTA through the disposal gain/loss", ar: "IFRS 10: فقد السيطرة على عملية أجنبية يدور فروقها ضمن ربح/خسارة التخرد" },
        { en: "IAS 28: the equity-method associate is translated with the same closing/average machinery before the share is picked up", ar: "IAS 28: الزميلة بطريقة حقوق الملكية تترجم بالآلة ذاتها (الإقفال/المتوسط) قبل أخذ النصيب" },
        { en: "IFRS 15: the transfer-of-control date fixes the initial FX rate of a foreign-currency sale", ar: "IFRS 15: تاريخ انتقال السيطرة يثبت سعر الصرف الأولي للبيع بالعملة الأجنبية" },
        { en: "IAS 1: choosing (and changing) the presentation currency is a presentation decision", ar: "IAS 1: اختيار عملة العرض (وتغييرها) قرار عرضي" },
      ],
    },
    { kind: "h", text: { en: "Transition & effective dates", ar: "الانتقال وتواريخ السريان" } },
    {
      kind: "p",
      text: {
        en: "The 2003 revision (effective 1 Jan 2005) replaced IAS 21 (1993), SIC-19 and SIC-30, and moved goodwill and fair-value adjustments on foreign operations onto the closing rate. The July 2024 lack-of-exchangeability amendment applies to annual periods beginning on or after 1 January 2025: estimate the rate that would prevail in an orderly market transaction, and disclose both the process and the rate. Both changes are retrospective in application — the 2005 change famously threw big opening-CTA hits into group reserves.",
        ar: "تعديل ٢٠٠٣ (النافذ ١ يناير ٢٠٠٥) أحل محل IAS 21 (١٩٩٣) وتفسيرَي SIC-19 وSIC-30، ونقل الشهرة وتعديلات العادلة للعمليات الأجنبية إلى سعر الإقفال. وتعديل يوليو ٢٠٢٤ لتعذر قابلية التبادل يسري على الفترات السنوية من ١ يناير ٢٠٢٥: قدّر السعر الذي سيسود معاملة سوق منتظمة، وأفصح عن العملية والسعر معًا. والتغيران رجعيا التطبيق — وقد أشهر تغيير ٢٠٠٥ ضربات افتتاحية كبيرة في احتياطيات المجموعات.",
      },
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
        en: "Goodwill on buying a foreign operation is an asset OF THE SUBSIDIARY — denominated in the sub's functional currency, translated at CLOSING rate, its changes riding the CTA reserve (never P&L while held). The historical-rate answer is the 1993-era distractor.",
        ar: "شهرة اقتناء عملية أجنبية أصل يخص التابعة — مقوم بعملتها الوظيفية، ومترجم بسعر الإقفال، وتغيراتها تركب احتياطي الفروق (لا الأرباح ما دامت محتفظًا بها). وجواب السعر التاريخي مشتت من عهد ١٩٩٣.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The average rate for income items is an expedient — the balance sheet uses closing/historical, so a small residual always lands in the CTA reserve. It is a mechanical plug, not an error to hunt.",
        ar: "المتوسط لبنود الأرباح مخرج عملي — والميزانية تستعمل الإقفال/التاريخي، فيهبط دائمًا رصيد صغير في احتياطي الفروق. وهو فرق توازن ميكانيكي لا خطأ يطارد.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The CTA is presented as a separate reserve within equity, and its period movement appears in OCI as 'exchange differences on translating foreign operations'. It is a Reserve, not a gain — until disposal releases it.",
        ar: "يظهر احتياطي فروق الترجمة بندًا مستقلًا ضمن حقوق الملكية، وحركته في الدخل الشامل سطر «فروق عملة عن ترجمة عمليات أجنبية». وهو احتياطي لا ربح — حتى يطلقه التخرد.",
      },
    },
  ],
}
