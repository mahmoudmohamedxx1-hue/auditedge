/**
 * IFRS 15 — Revenue from Contracts with Customers. THE FLAGSHIP summary:
 * it mirrors, section for section, the user's handwritten IFRS 15 notes PDF
 * and sets the depth bar every other standard in this folder is written to.
 *
 * v36 — rewritten to the FULL volume of the notes PDF: every one of the
 * five steps carries a worked numeric treatment from one running case
 * (Nile Co), every special issue gets its own journal entries WITH
 * amounts, and the topic list adds the sections a comprehensive set of
 * DipIFR notes must carry: variable consideration, the significant
 * financing component, licensing, consideration payable to the customer,
 * presentation & disclosure, and the exam-focus close.
 */

import type { Standard } from "../types"

export const IFRS_15: Standard = {
    code: "IFRS 15",
    title: { en: "Revenue from Contracts with Customers", ar: "الإيراد من العقود مع العملاء" },
    topic: "revenue",
    effective: { en: "Effective 1 Jan 2018 · issued May 2014", ar: "سارٍ من ١ يناير ٢٠١٨ · صدر مايو ٢٠١٤" },
    replaces: {
      en: "Replaces IAS 11, IAS 18, IFRIC 13 / 15 / 18 and SIC-31",
      ar: "يحل محل IAS 11 وIAS 18 والتفسيرات IFRIC 13/15/18 وSIC-31",
    },
    flagship: true,
    blocks: [
      {
        kind: "p",
        text: {
          en: "Core principle — recognise revenue when (or as) the entity transfers the promised good or service to the customer, in an amount that reflects the consideration to which the entity expects to be entitled in exchange. \"Transfer\" means the customer obtains CONTROL: the ability to direct the use of, and obtain substantially all the remaining benefits from, the good or service. The model is one contract → five steps → recognise each performance obligation as control passes, at the amount allocated to it in Step 4.",
          ar: "المبدأ الأساسي — يُعترف بالإيراد عندما (أو بقدر ما) تنقل المنشأة السلعة أو الخدمة المتعاقد عليها إلى العميل، بمبلغ يعكس المقابل الذي تتوقع المنشأة استحقاقه نظيرها. و«التحويل» يعني حصول العميل على السيطرة: القدرة على توجيه استخدام السلعة أو الخدمة والحصول على منافعها المتبقية جوهرها. النموذج: عقد واحد ← خمس خطوات ← الاعتراف بكل التزام أداء عند انتقال السيطرة إليه، وبالمبلغ المخصص له في الخطوة الرابعة.",
        },
      },
      {
        kind: "note",
        text: {
          en: "Revenue follows the transfer of CONTROL — not delivery, not legal title, not invoicing, not production. Control can pass over time or at a point in time.",
          ar: "الإيراد يتبع انتقال السيطرة — لا التسليم ولا الملكية القانونية ولا الفوترة ولا الإنتاج. والسيطرة قد تنتقل بمرور الوقت أو في لحظة معينة.",
        },
      },
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "One single model that applies to every contract with a customer and every industry — goods, services, software, real estate, telecoms, construction and financial products all follow the same five steps. It prescribes when (timing) and how much (measurement) revenue is recognised, the treatment of the contract balances (receivable, contract asset, contract liability), the costs of winning and fulfilling contracts, and the useful information an entity discloses about the nature, amount, timing and uncertainty of its revenue and the related cash flows.",
          ar: "نموذج واحد يُطبق على كل عقد مع عميل وكل صناعة — السلع والخدمات والبرمجيات والعقارات والاتصالات والمقاولات والمنتجات المالية تتبع الخطوات الخمس نفسها: يحدد متى (التوقيت) وبأي مبلغ (القياس) يُعترف بالإيراد، ومعالجة أرصدة العقد (المدينون والأصل التعاقدي والالتزام التعاقدي)، وتكاليف الفوز بالعقود وتنفيذها، وما يُفصح عنه من معلومات مفيدة عن طبيعة الإيراد ومبلغه وتوقيته ودرجة عدم التأكد فيه وفي تدفقاته النقدية المرتبطة.",
        },
      },
      {
        kind: "p",
        text: {
          en: "The lens throughout is the PREPARER: you are the accountant deciding, at each reporting date, which obligations remain unsatisfied and which cash is still owed — the recognition, the journals and the contract balances are yours to produce.",
          ar: "العدسة في كامل الملخص هي عدوة المُعِدّ: أنت المحاسب الذي يقرر في كل تاريخ إقفال أي التزامات لم تُنفَّذ بعد وأي نقد لا يزال مستحقًا — القيد والاعتراف وأرصدة العقد مسؤوليتك.",
        },
      },
      { kind: "h", text: { en: "The five-step model", ar: "نموذج الخطوات الخمس" } },
      {
        kind: "steps",
        items: [
          { en: "Identify the CONTRACT with the customer", ar: "تحديد العقد مع العميل" },
          { en: "Identify the PERFORMANCE OBLIGATIONS in the contract", ar: "تحديد التزامات الأداء في العقد" },
          { en: "Determine the TRANSACTION PRICE", ar: "تحديد سعر المعاملة" },
          { en: "ALLOCATE the transaction price to the performance obligations", ar: "توزيع سعر المعاملة على التزامات الأداء" },
          { en: "RECOGNISE revenue when (or as) each obligation is satisfied by transferring control", ar: "الاعتراف بالإيراد عند (أو بقدر ما) الوفاء بكل التزام بانتقال السيطرة" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Steps 2 and 5 carry most of the marks in DipIFR: \"how many performance obligations?\" and \"point in time or over time?\" — practise these two decisions until they are automatic.",
          ar: "الخطوتان ٢ و٥ تحملان معظم الدرجات في DipIFR: «كم التزام أداء؟» و«في لحظة أم بمرور الوقت؟» — تدرّب على القرارين حتى يصبحا تلقائيين.",
        },
      },
      { kind: "h", text: { en: "The running worked case — Nile Co", ar: "الحالة العملية الممتدة — شركة النيل" } },
      {
        kind: "p",
        text: {
          en: "One case will now run through all five steps, exactly the way a complete exam answer is built. On 1 January Nile Co signs a contract to DELIVER a machine, INSTALL it at the customer's site, and provide TWO YEARS of maintenance, for the bundled price of 132,000 paid upfront in cash. Standalone selling prices (SSP): machine 100,000 · installation 20,000 · maintenance 24,000. Each element is sold separately by Nile Co at those prices.",
          ar: "حالة واحدة ستمر الآن عبر الخطوات الخمس كلها، تمامًا كما يُبنى جواب الامتحان الكامل. في أول يناير توقع شركة النيل عقدًا لتوريد آلة وتركيبها في موقع العميل وتقديم سنتين صيانة، بمجمع سعر 132,000 يُدفع نقدًا مقدَّمًا. أسعار البيع المنفردة: الآلة 100,000 · التركيب 20,000 · الصيانة 24,000، وكل عنصر يُباع منفصلًا بهذه الأسعار.",
        },
      },
      {
        kind: "note",
        text: {
          en: "The upfront cash of 132,000 is NOT revenue on day one — it is a contract liability (the duty to perform), and it unwinds obligation by obligation as control transfers.",
          ar: "النقد المقبوض مقدَّمًا (132,000) ليس إيرادًا في اليوم الأول — بل التزام تعاقدي (واجب الأداء)، وينفك التزامًا بعد التزام مع انتقال السيطرة.",
        },
      },
      {
        kind: "journal",
        title: { en: "1 Jan — receipt of the bundled price (no revenue yet)", ar: "١ يناير — قبض السعر المجمّع (لا إيراد بعد)" },
        rows: [
          { dr: { en: "Cash", ar: "النقد" }, cr: { en: "Contract liability 132,000", ar: "التزام تعاقدي 132,000" } },
        ],
      },
      { kind: "h", text: { en: "Step 1 — Identifying the contract", ar: "الخطوة ١ — تحديد العقد" } },
      {
        kind: "p",
        text: {
          en: "An enforceable contract exists only when ALL five criteria are met. Missing any one → no revenue; cash received is a contract liability (deposit) until the criteria are met, the contract terminates, or the consideration becomes non-refundable.",
          ar: "لا يوجد عقد ملزم إلا عند تحقق الشروط الخمسة جميعًا. وعدم تحقق أيٍّ منها ← لا إيراد؛ ويُعامل النقد المقبوض كالتزام تعاقدي (عربون) حتى تتحقق الشروط أو ينتهي العقد أو يصبح المقابل غير قابل للاسترداد.",
        },
      },
      {
        kind: "list",
        items: [
          { en: "Approval and commitment — both parties have approved it and are committed to perform", ar: "الموافقة والالتزام — الطرفان أقرا العقد وملتزمان بالتنفيذ" },
          { en: "Identifiable rights — each party's rights to goods/services and payment terms are identifiable", ar: "حقوق محددة — حقوق كل طرف في السلع/الخدمات وشروط السداد محددة" },
          { en: "Payment terms identifiable — even if variable or non-monetary", ar: "شروط سداد محددة — ولو كانت متغيرة أو غير نقدية" },
          { en: "Commercial substance — the risk, timing or amount of future cash flows is expected to change", ar: "جوهر تجاري — يُتوقع أن يتغير مقدار أو توقيت أو مخاطر التدفقات النقدية المستقبلية" },
          { en: "Probable collection — it is PROBABLE the entity collects the consideration it is entitled to (considering the customer's credit risk, not the price risk)", ar: "تحصيل مرجّح — من المرجّح تحصيل المقابل المستحق (مع الأخذ بمخاطر ائتمان العميل لا بمخاطر السعر)" },
        ],
      },
      {
        kind: "journal",
        title: { en: "Cash received with NO contract yet (a failed Step 1)", ar: "نقد مقبوض دون عقد بعد (فشل الخطوة ١)" },
        rows: [
          { dr: { en: "Cash 10,000", ar: "النقد 10,000" }, cr: { en: "Contract liability (deposit) 10,000", ar: "التزام تعاقدي (عربون) 10,000" } },
          {
            dr: { en: "Later: the deposit becomes non-refundable and the contract will not happen", ar: "لاحقًا: يصبح العربون غير قابل للاسترداد ولن يتم العقد" },
            cr: { en: "Revenue 10,000", ar: "إيراد 10,000" },
            red: true,
          },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "\"Probable\" means more likely than not (> 50%) — but judgement is applied to the CUSTOMER's ability and intention to pay, assessed at inception and NOT re-assessed later unless there is an indication of a significant change in the contract.",
          ar: "«المرجّح» يعني أكثر من ٥٠٪ — لكن الحكم ينصبّ على قدرة العميل ونيته في السداد، يقيَّم عند التعاقد ولا يُعاد تقييمه لاحقًا إلا عند وجود مؤشر على تغير جوهري في العقد.",
        },
      },
      {
        kind: "p",
        text: {
          en: "A contract may also exist in part: if some criteria are met but collectability is not probable, continue assessing — if later it becomes probable, revenue then begins. Combine contracts only when they are negotiated as a package with a single commercial objective, priced together, and performed together.",
          ar: "وقد يوجد العقد جزئيًا: فإذا تحققت بعض الشروط دون رجحان التحصيل، تستمر المتابعة — فإذا صار التحصيل مرجّحًا لاحقًا بدأ الاعتراف بالإيراد حينها. ولا تُجمَّع العقود إلا إذا تفاوض عليها الطرفان كحزمة واحدة بهدف تجاري واحد وتسعير واحد وتنفيذ واحد.",
        },
      },
      { kind: "h", text: { en: "Step 2 — Performance obligations", ar: "الخطوة ٢ — التزامات الأداء" } },
      {
        kind: "p",
        text: {
          en: "A performance obligation is a promise to transfer (a) a good or service that is DISTINCT, or (b) a series of distinct goods or services that are substantially the same and have the same pattern of transfer (the \"series\" clause — e.g. a 12-month cleaning contract). A promise is DISTINCT only if BOTH tests pass.",
          ar: "التزام الأداء هو وعد بنقل (أ) سلعة أو خدمة مميزة، أو (ب) سلسلة من سلع أو خدمات مميزة متطابقة جوهريًا ولها النمط نفسه في الانتقال (بند «السلسلة» — مثل عقد تنظيف لمدة سنة). والوعد مميز فقط إذا اجتاز الاختبارين معًا.",
        },
      },
      {
        kind: "tree",
        title: { en: "Is the promise a distinct performance obligation?", ar: "هل الوعد التزام أداء مميز؟" },
        root: { en: "The promised good or service", ar: "السلعة أو الخدمة الموعودة" },
        branches: [
          {
            when: { en: "Capable of being distinct? (the customer can benefit from it on its own or with readily available resources)", ar: "قابل للتميز؟ (يستطيع العميل الاستفادة منه منفردًا أو مع موارد متاحة بسهولة)" },
            then: { en: "…and see next test", ar: "…وانظر الاختبار التالي" },
            children: [
              {
                when: { en: "Distinct within the context of the contract? (the promise is separately identifiable from other promises — not a significant integration, modification or customisation input)", ar: "مميز داخل سياق العقد؟ (الوعد قابل للتحديد بمعزل عن الوعود الأخرى — ليس عنصرًا مدمجًا أو معدِّلًا أو مخصصًا جوهريًا)" },
                then: { en: "SEPARATE performance obligation", ar: "التزام أداء منفصل", red: true },
              },
              {
                when: { en: "Not separately identifiable", ar: "غير قابل للتحديد منفصلًا" },
                then: { en: "Combine with the other promises", ar: "يُجمع مع الوعود الأخرى" },
              },
            ],
          },
          {
            when: { en: "Customer cannot benefit on its own", ar: "العميل لا يستفيد منه منفردًا" },
            then: { en: "NOT distinct — combine", ar: "غير مميز — يُجمع" },
          },
        ],
      },
      {
        kind: "example",
        title: { en: "Nile Co — Step 2 applied", ar: "شركة النيل — تطبيق الخطوة ٢" },
        lines: [
          { en: "Machine: the customer can run it (benefit alone) and Nile Co installs it as a routine service → DISTINCT.", ar: "الآلة: يمكن للعميل تشغيلها (منفعة منفردة) والتركيب لدى النيل خدمة اعتيادية ← مميزة." },
          { en: "Installation: sold separately by others and by Nile Co → DISTINCT.", ar: "التركيب: يُباع منفصلًا لدى الغير ولدى النيل ← مميز." },
          { en: "Maintenance: routine, identical each visit → a SERIES of distinct services = one obligation over 2 years.", ar: "الصيانة: اعتيادية ومتماثلة في كل زيارة ← سلسلة خدمات مميزة = التزام واحد على سنتين." },
          { en: "Answer: THREE performance obligations (machine · installation · maintenance).", ar: "الجواب: ثلاثة التزامات أداء (الآلة · التركيب · الصيانة)." },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Watch for \"significant integration service\" (the builder combines many inputs into one output for the customer) — that single combined output is ONE obligation; and for \"highly customised\" assets (no alternative use) which point straight to over-time recognition in Step 5.",
          ar: "انتبه لـ«خدمة الدمج الجوهرية» (المقاول يحول مدخلات كثيرة إلى مخرج واحد للعميل) — هذا المخرج الموحد التزام واحد؛ وللأصول «شديدة التخصيص» (لا استخدام بديل) التي تشير مباشرة إلى الاعتراف بمرور الوقت في الخطوة ٥.",
        },
      },
      { kind: "h", text: { en: "Step 3 — Determining the transaction price", ar: "الخطوة ٣ — تحديد سعر المعاملة" } },
      {
        kind: "p",
        text: {
          en: "The transaction price (TP) is the consideration the entity EXPECTS TO BE ENTITLED to — not necessarily the cash collectible if part is expected to be refunded, and not the list price. It is built from: fixed consideration, variable consideration (estimate + constraint), any significant financing component (adjustment), non-cash consideration (measure at fair value), and consideration PAYABLE TO the customer (deduct).",
          ar: "سعر المعاملة هو المقابل الذي تتوقع المنشأة أن تكون مستحقة له — وليس بالضرورة النقد المحصّل إن كان جزء منه سيُرد، وليس السعر المعلن. ويُبنى من: المقابل الثابت، والمقابل المتغير (تقدير + قيد)، وأي مكوّن تمويل جوهري (تعديل)، والمقابل غير النقدي (بالقيمة العادلة)، والمقابل المستحق للعميل (يُخصم).",
        },
      },
      {
        kind: "formula",
        title: { en: "The transaction price formula", ar: "معادلة سعر المعاملة" },
        lines: [
          { en: "TP = Fixed + Variable (constrained) ± Financing adjustment + Non-cash FV − Consideration payable to customer", ar: "سعر المعاملة = الثابت + المتغير (بعد القيد) ± تعديل التمويل + غير النقدي بالقيمة العادلة − المقابل المستحق للعميل" },
        ],
      },
      { kind: "h", text: { en: "Variable consideration — estimate it, then constrain it", ar: "المقابل المتغير — قدّره ثم قيّده" } },
      {
        kind: "p",
        text: {
          en: "Consideration is variable when it depends on discounts, rebates, refunds, credits, incentives, performance bonuses, penalties or price concessions. Use whichever SINGLE method better predicts the entitlement: (a) EXPECTED VALUE (probability-weighted) for many contracts with the same variable feature; (b) MOST LIKELY AMOUNT for binary outcomes (bonus achieved or not).",
          ar: "يكون المقابل متغيرًا إذا توقف على خصومات أو حوافز أو مرتجعات أو إشعارات دائنة أو مكافآت أداء أو غرامات أو تنازلات سعرية. استخدم الطريقة الوحيدة التي تتنبأ أفضل بالاستحقاق: (أ) القيمة المتوقعة (المرجّحة بالاحتمالات) لعقود كثيرة تتشارك السمة المتغيرة نفسها؛ (ب) المبلغ الأرجح للنتائج الثنائية (تحقق المكافأ أو لم يتحقق).",
        },
      },
      {
        kind: "example",
        title: { en: "The two estimation methods, with numbers", ar: "طريقتا التقدير بالأرقام" },
        lines: [
          { en: "Expected value: a 3% rebate applies on sales above 1,000 units. Estimated volume: 1,200 units (60%) or 900 units (40%) → expected volume 1,080 units → rebate probable. Sale of 1,000 units at 50 = 50,000 → reduce TP by the expected rebate on the incremental volume.", ar: "القيمة المتوقعة: خصم ٣٪ يُطبق على المبيعات فوق ١٠٠٠ وحدة. الحجم المتوقع: ١٢٠٠ وحدة (٦٠٪) أو ٩٠٠ وحدة (٤٠٪) ← الحجم المتوقع ١٠٨٠ وحدة ← الخصم مرجّح. بيع ١٠٠٠ وحدة بسعر ٥٠ = ٥٠٠٠٠ ← يُخفَّض سعر المعاملة بالخصم المتوقع على الوحدات الزائدة." },
          { en: "Most likely amount: a 5,000 completion bonus — 80% likely to be earned → include 5,000 because that single outcome best predicts entitlement.", ar: "المبلغ الأرجح: مكافأة إنجاز ٥٠٠٠ — ترجّح تحققها ٨٠٪ ← تُدرج كاملة لأن هذه النتيجة وحدها هي الأفضل تنبؤًا بالاستحقاق." },
        ],
      },
      {
        kind: "p",
        text: {
          en: "THE CONSTRAINT: include variable consideration only to the extent it is PROBABLE that a significant reversal will NOT occur, judged for each uncertainty separately (price concessions, uncertainties that remain for a long time, limited experience, a broad range of outcomes, and practice of offering concessions all point to including less). The estimate is UPDATED at every reporting date — a change of estimate, not a restatement.",
          ar: "القيد: لا يُدرج من المقابل المتغير إلا بالقدر المرجّح معه عدم انعكاس جوهري لاحقًا، ويُقدَّر لكل حالة عدم تأكد على حدة (التنازلات السعرية، وحالات عدم التأكد طويلة الأمد، وقلة الخبرة، واتساع نطاق النتائج، والعُرف في منح التنازلات — كلها تدعو لإدراج أقل). ويُحدَّث التقدير في كل تاريخ إقفال — تغيّر تقدير لا إعادة عرض.",
        },
      },
      {
        kind: "journal",
        title: { en: "Year-end adjustment of a rebate estimate (change of estimate)", ar: "تسوية تقدير الخصم نهاية السنة (تغيّر تقدير)" },
        rows: [
          { dr: { en: "Revenue (reduction of TP) 1,500", ar: "الإيراد (تخفيض سعر المعاملة) 1500" }, cr: { en: "Refund liability 1,500", ar: "التزام مرتجعات 1500" } },
        ],
      },
      { kind: "h", text: { en: "The significant financing component", ar: "المكوّن التمويلي الجوهري" } },
      {
        kind: "p",
        text: {
          en: "If the timing of payments gives the customer or the entity a significant financing benefit (more than about a year, and the cash price differs from the promised consideration), ADJUST the TP to the CASH-EQUIVALENT price and recognise the difference as interest expense (customer paid early) or interest income (customer pays late) using the discount rate that would apply to a separate financing transaction with that customer. Practical expedient: no adjustment when the gap is a year or less.",
          ar: "إذا منح توقيت السداد تمويلًا جوهريًا للعميل أو للمنشأة (أكثر من سنة تقريبًا، ويختلف السعر النقدي عن المقابل الموعود)، يُعدَّل سعر المعاملة إلى ما يعادله نقديًا ويُعالج الفرق كمصروف فائدة (لو دفع العميل مبكرًا) أو إيراد فائدة (لو سدد لاحقًا) بمعدل الخصم الذي يسري على تمويل منفصل مع العميل نفسه. وثمة تسهيل عملي: لا تعديل إذا كان الفاصل سنة أو أقل.",
        },
      },
      {
        kind: "formula",
        title: { en: "Cash-equivalent revenue", ar: "الإيراد بما يعادله نقديًا" },
        lines: [
          { en: "Revenue = promised consideration ÷ (1 + i)ⁿ", ar: "الإيراد = المقابل الموعود ÷ (١ + معدل) ^ عدد السنوات" },
        ],
      },
      {
        kind: "example",
        title: { en: "Two-year interest-free credit at 10%", ar: "بيع بالأجل سنتين دون فوائد بمعدل ١٠٪" },
        lines: [
          { en: "Equipment sold today, 121,000 payable in 2 years. i = 10% → revenue = 121,000 ÷ 1.21 = 100,000.", ar: "معدة تُباع اليوم ويسدد ثمنها ١٢١٠٠٠ بعد سنتين. المعدل ١٠٪ ← الإيراد = ١٢١٠٠٠ ÷ ١٫٢١ = ١٠٠٠٠٠." },
          { en: "Year 1 interest income = 100,000 × 10% = 10,000 (receivable 110,000). Year 2 = 110,000 × 10% = 11,000 (receivable 121,000).", ar: "إيراد الفائدة سنة ١ = ١٠٠٠٠٠ × ١٠٪ = ١٠٠٠٠ (المدينون ١١٠٠٠٠). سنة ٢ = ١١٠٠٠٠ × ١٠٪ = ١١٠٠٠ (المدينون ١٢١٠٠٠)." },
        ],
      },
      {
        kind: "journal",
        title: { en: "Sale with delayed payment (financing unwound over 2 years)", ar: "بيع بسداد مؤجل (فكّ التمويل على سنتين)" },
        rows: [
          { dr: { en: "Receivable 121,000", ar: "مدينون ١٢١٠٠٠" }, cr: { en: "Revenue 100,000 · Unearned interest income 21,000", ar: "إيراد ١٠٠٠٠٠ · فائدة لم تستحق ٢١٠٠٠" } },
          { dr: { en: "Each year: Unearned interest income ×", ar: "كل سنة: فائدة لم تستحق ×" }, cr: { en: "Interest income 10,000 then 11,000", ar: "إيراد فائدة ١٠٠٠٠ ثم ١١٠٠٠" } },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Do NOT adjust when the customer paid early just to meet YOUR credit terms, or when the amount is variable for reasons other than financing (e.g. retention money on construction — treat it as variable consideration).",
          ar: "لا تعدّل عندما دفع العميل مبكرًا لمجرد استيفاء شروط الائتمان لديك، أو عندما يكون المبلغ متغيرًا لأسباب غير التمويل (مثل محتجزات المقاولات — تعاملها كمقابل متغير).",
        },
      },
      { kind: "h", text: { en: "Non-cash consideration & consideration payable TO the customer", ar: "المقابل غير النقدي والمقابل المستحق للعميل" } },
      {
        kind: "p",
        text: {
          en: "Non-cash consideration (materials, equipment, customer shares) is measured at FAIR VALUE at contract inception (if that cannot be reliably measured, use the standalone selling price of the promised goods). Consideration payable TO the customer — cash incentives, coupons, vouchers, credits — reduces the transaction price unless it is payment for a DISTINCT good or service from the customer; then account for it as a purchase from a supplier.",
          ar: "يُقاس المقابل غير النقدي (مواد، معدات، أسهم من العميل) بالقيمة العادلة عند بدء العقد (فإن تعذر القياس الموثوق استُخدم سعر البيع المنفرد للسلع الموعودة). أما المقابل المستحق للعميل — حوافز نقدية أو قسائم أو إشعارات — فيُخفّض سعر المعاملة إلا إذا كان دفعًا مقابل سلعة أو خدمة مميزة يشتريها المحاسب من العميل؛ وحينها يُعالج كشراء من مورّد.",
        },
      },
      {
        kind: "example",
        title: { en: "A cash rebate paid to the customer", ar: "حافز نقدي مستحق للعميل" },
        lines: [
          { en: "Goods invoiced at 50,000; the contract promises the customer a 4,000 cash incentive after the first year → TP = 46,000, revenue recognised on 46,000.", ar: "سلع مفوترة بـ٥٠٠٠٠؛ ويتعهد البائع للعميل بحافز نقدي ٤٠٠٠ بعد السنة الأولى ← سعر المعاملة = ٤٦٠٠٠، وعليه يُعترف بالإيراد." },
        ],
      },
      { kind: "h", text: { en: "Step 4 — Allocating the transaction price", ar: "الخطوة ٤ — توزيع سعر المعاملة" } },
      {
        kind: "p",
        text: {
          en: "Allocate the TP to each performance obligation proportionally to STANDALONE SELLING PRICES (SSP) at inception — the price at which each obligation would be sold separately. Observable SSP is best; otherwise estimate it by: adjusted market assessment (what would the market pay?), expected cost plus a margin, or (rarely, and only if the price is genuinely variable) the residual approach.",
          ar: "يُوزَّع سعر المعاملة على التزامات الأداء تناسبيًا مع أسعار البيع المنفردة عند بدء العقد — السعر الذي يُباع به كل التزام منفصلًا. والسعر المُشاهَد أفضل ما يكون؛ وإلا فيُقدَّر بطريقة تقييم السوق المعدَّلة (بكم كان السوق ليشتري؟)، أو التكلفة المتوقعة بهامش، أو (نادرًا وبشرط تفاوت السعر فعلًا) بالطريقة المتبقية.",
        },
      },
      {
        kind: "formula",
        title: { en: "Relative SSP allocation", ar: "التوزيع النسبي على الأسعار المنفردة" },
        lines: [
          { en: "Allocated to obligation A = TP × SSP(A) ÷ Σ SSP(all obligations)", ar: "المخصص للالتزام أ = سعر المعاملة × سعر(أ) ÷ مجموع الأسعار المنفردة" },
        ],
      },
      {
        kind: "example",
        title: { en: "Nile Co — Step 4: allocating 132,000", ar: "شركة النيل — الخطوة ٤: توزيع ١٣٢٠٠٠" },
        lines: [
          { en: "SSP: machine 100,000 + installation 20,000 + maintenance 24,000 = 144,000.", ar: "الأسعار المنفردة: الآلة ١٠٠٠٠٠ + التركيب ٢٠٠٠٠ + الصيانة ٢٤٠٠٠ = ١٤٤٠٠٠." },
          { en: "Machine: 132,000 × 100/144 = 91,667 · Installation: 132,000 × 20/144 = 18,333 · Maintenance: 132,000 × 24/144 = 22,000.", ar: "الآلة: ١٣٢٠٠٠ × ١٠٠/١٤٤ = ٩١٦٦٧ · التركيب: ١٣٢٠٠٠ × ٢٠/١٤٤ = ١٨٣٣٣ · الصيانة: ١٣٢٠٠٠ × ٢٤/١٤٤ = ٢٢٠٠٠." },
          { en: "Check: 91,667 + 18,333 + 22,000 = 132,000 ✓ — the discount is spread pro-rata because it covers the whole bundle.", ar: "التحقق: ٩١٦٦٧ + ١٨٣٣٣ + ٢٢٠٠٠ = ١٣٢٠٠٠ ✓ — فالخصم يوزَّع تناسبيًا لأنه يشمل الحزمة كاملة." },
        ],
      },
      {
        kind: "p",
        text: {
          en: "DISCOUNT ALLOCATION EXCEPTIONS: allocate a discount ENTIRELY to one (or more) obligations when (a) the discount is regularly listed for that bundle and the SSP evidence is observable, or (b) the discount relates specifically to obligations added in a contract modification. Similarly, variable amounts may be allocated to a specific obligation if the terms relate to it and full allocation reflects the allocation objective.",
          ar: "استثناءات توزيع الخصم: يُخصص الخصم بالكامل لالتزام (أو أكثر) بعينه إذا (أ) كان الخصم معلنًا بانتظام لتلك الحزمة والدليل على الأسعار المنفردة قابل للمشاهدة، أو (ب) كان الخصم يتعلق تحديدًا بالتزامات أُضيفت بتعديل العقد. وبالمثل يجوز تخصيص المبالغ المتغيرة لالتزام بعينه إذا كانت شروطه تخصه وكان التخصيص الكامل يحقق هدف التوزيع.",
        },
      },
      {
        kind: "tip",
        text: {
          en: "When one element is \"free\" (buy the machine, get a year of maintenance free), it is NOT free — it still has an SSP and still takes its share of the TP. The free element is deferred as a contract liability until delivered.",
          ar: "عندما يكون عنصر «مجانيًا» (اشترِ الآلة واحصل على سنة صيانة مجانًا)، فهو ليس مجانيًا — له سعر منفرد ويأخذ نصيبه من سعر المعاملة، ويُؤجَّل التزامًا تعاقديًا حتى تسليمه.",
        },
      },
      { kind: "h", text: { en: "Step 5 — Recognising revenue: over time or at a point in time?", ar: "الخطوة ٥ — الاعتراف بالإيراد: بمرور الوقت أم في لحظة؟" } },
      {
        kind: "p",
        text: {
          en: "Recognise revenue OVER TIME if ANY one of three criteria is met; otherwise recognise AT A POINT IN TIME when control passes.",
          ar: "يُعترف بالإيراد بمرور الوقت إذا تحقق أي معيار من الثلاثة؛ وإلا فيُعترف به في لحظة معينة عند انتقال السيطرة.",
        },
      },
      {
        kind: "list",
        items: [
          { en: "1. The customer simultaneously receives and consumes the benefits as you perform (routine or repeating services: cleaning, payroll processing, transport)", ar: "١. العميل يتلقى المنافع ويستهلكها في أثناء الأداء نفسه (خدمات اعتيادية متكررة: تنظيف، معالجة أجور، نقل)" },
          { en: "2. The customer CONTROLS the asset as it is created or enhanced (building constructed on the customer's land, work on an asset the customer already owns)", ar: "٢. العميل يسيطر على الأصل وهو يُنشأ أو يُحسَّن (مبنى يُبنى على أرض العميل، أو أعمال على أصل يملكه العميل أصلًا)" },
          { en: "3. The asset has NO ALTERNATIVE USE to you AND you have an ENFORCEABLE RIGHT TO PAYMENT for performance completed to date (highly customised goods, including work-in-progress billed progressively)", ar: "٣. الأصل لا استخدام بديل لك لديك مع وجود حق قابل للتنفيذ في أجر ما أُنجز حتى تاريخه (سلع شديدة التخصيص، ومنها الأعمال تحت التنفيذ المفوترة تدريجيًا)" },
        ],
      },
      {
        kind: "tree",
        title: { en: "The Step 5 decision", ar: "قرار الخطوة ٥" },
        root: { en: "A performance obligation is satisfied…", ar: "يُنفَّذ التزام الأداء…" },
        branches: [
          {
            when: { en: "Any over-time criterion met?", ar: "هل تحقق أي معيار للمرور بالوقت؟" },
            then: { en: "OVER TIME — measure progress (Step 5 continues below)", ar: "بمرور الوقت — يقاس التقدم (تكملة الخطوة ٥ أدناه)", red: true },
          },
          {
            when: { en: "None met — control passes before delivery? during delivery? on acceptance?", ar: "لم يتحقق أي منها — متى تنتقل السيطرة؟ قبل التسليم؟ في أثنائه؟ عند القبول؟" },
            then: { en: "POINT IN TIME — pick the moment the customer obtains control", ar: "في لحظة معينة — حدّد لحظة حصول العميل على السيطرة" },
          },
        ],
      },
      {
        kind: "list",
        items: [
          { en: "Point-in-time indicators of control transfer: present right to payment · legal title transferred · physical possession passed · significant risks and rewards to the customer · customer accepted the asset", ar: "مؤشرات انتقال السيطرة في اللحظة: حق قائم في السداد · انتقال الملكية القانونية · حيازة مادية للعميل · انتقال المخاطر والمنافع الجوهرية · قبول العميل للأصل" },
        ],
      },
      {
        kind: "example",
        title: { en: "Nile Co — Step 5 applied", ar: "شركة النيل — تطبيق الخطوة ٥" },
        lines: [
          { en: "Machine: no over-time criterion (standard machine, alternative use exists) → POINT IN TIME on delivery, 1 February.", ar: "الآلة: لا يتحقق أي معيار لمرور الوقت (آلة قياسية لها استخدام بديل) ← في لحظة معينة عند التسليم في ١ فبراير." },
          { en: "Installation: performed and consumed by the customer as it happens → OVER TIME during February.", ar: "التركيب: يؤدَّى ويستهلكه العميل أثناء حدوثه ← بمرور الوقت خلال فبراير." },
          { en: "Maintenance: a series of identical routine services → OVER TIME across the two years.", ar: "الصيانة: سلسلة خدمات اعتيادية متماثلة ← بمرور الوقت عبر السنتين." },
        ],
      },
      {
        kind: "journal",
        title: { en: "Nile Co — the recognition entries (holding the Step 4 amounts)", ar: "شركة النيل — قيود الاعتراف (بمبالغ الخطوة ٤)" },
        rows: [
          { dr: { en: "1 Feb — Contract liability 91,667", ar: "١ فبراير — التزام تعاقدي ٩١٦٦٧" }, cr: { en: "Revenue (machine, point in time) 91,667", ar: "إيراد (الآلة، لحظة) ٩١٦٦٧" } },
          { dr: { en: "28 Feb — Contract liability 18,333", ar: "٢٨ فبراير — التزام تعاقدي ١٨٣٣٣" }, cr: { en: "Revenue (installation complete) 18,333", ar: "إيراد (اكتمال التركيب) ١٨٣٣٣" } },
          { dr: { en: "Each year-end — Contract liability 11,000", ar: "كل نهاية سنة — التزام تعاقدي ١١٠٠٠" }, cr: { en: "Revenue (maintenance 50% × 22,000) 11,000", ar: "إيراد (صيانة ٥٠٪ × ٢٢٠٠٠) ١١٠٠٠" } },
        ],
      },
      { kind: "h", text: { en: "Measuring progress for over-time obligations", ar: "قياس التقدم للالتزامات الممتدة" } },
      {
        kind: "p",
        text: {
          en: "For each over-time obligation pick a single method that faithfully depicts the transfer of control — an OUTPUT method (surveys, milestones, units delivered) or an INPUT method (costs incurred, labour hours). The COST-TO-COST input method dominates DipIFR. Re-measure progress every period; the total FORECAST of costs is also updated — both are changes in estimate.",
          ar: "لكل التزام ممتدٍّ اختر طريقة واحدة تمثل انتقال السيطرة بأمانة — طريقة مخرجات (مسوح، مراحل، وحدات مسلَّمة) أو طريقة مدخلات (تكاليف مستنفدة، ساعات عمل). وطريقة التكلفة إلى التكلفة هي الغالبة في DipIFR. ويُعاد قياس التقدم كل فترة، ويُحدَّث إجمالي التكاليف المتوقعة كذلك — وكلاهما تغيّر في التقدير.",
        },
      },
      {
        kind: "formula",
        title: { en: "Cost-to-cost progress", ar: "التقدم بالتكلفة إلى التكلفة" },
        lines: [
          { en: "% complete = cost to date ÷ total costs expected · Revenue to date = % × TP · Profit to date = Revenue to date − cost to date", ar: "نسبة الإنجاز = التكلفة حتى تاريخه ÷ إجمالي التكاليف المتوقعة · إيراد حتى تاريخه = النسبة × السعر · ربح حتى تاريخه = الإيراد − التكلفة حتى تاريخه" },
        ],
      },
      {
        kind: "example",
        title: { en: "A construction contract with full numbers", ar: "عقد مقاولة بالأرقام كاملة" },
        lines: [
          { en: "Contract price 5,000 · estimated total cost 4,000. Year 1 costs incurred 1,600 → 40% complete → revenue 2,000, costs 1,600, profit 400.", ar: "سعر العقد ٥٠٠٠ · التكلفة الإجمالية المتوقعة ٤٠٠٠. تكاليف السنة الأولى ١٦٠٠ ← إنجاز ٤٠٪ ← إيراد ٢٠٠٠ وتكاليف ١٦٠٠ وربح ٤٠٠." },
          { en: "Year 2: costs to date 3,600 (another 2,000), forecast total unchanged 4,000 → 90% → revenue to date 4,500 (year 2 revenue 2,500), profit year 2 500.", ar: "السنة ٢: التكاليف التراكمية ٣٦٠٠ (+٢٠٠٠) والتوقع الكلي دون تغيير ٤٠٠٠ ← ٩٠٪ ← إيراد تراكمي ٤٥٠٠ (إيراد السنة ٢٥٠٠) وربح السنة ٥٠٠." },
          { en: "Year 3 (completion): total costs 4,000, revenue to date 5,000 → year 3 revenue 500, profit 100. Lifetime profit = 400+500+100 = 1,000 ✓", ar: "السنة ٣ (الاكتمال): التكاليف ٤٠٠٠ والإيراد التراكمي ٥٠٠٠ ← إيراد السنة ٥٠٠ وربحها ١٠٠. ربح العقد كاملًا = ٤٠٠+٥٠٠+١٠٠ = ١٠٠٠ ✓" },
        ],
      },
      {
        kind: "journal",
        title: { en: "Year 1 of the construction contract", ar: "السنة الأولى من عقد المقاولة" },
        rows: [
          { dr: { en: "Contract asset 2,000", ar: "أصل تعاقدي ٢٠٠٠" }, cr: { en: "Revenue 2,000", ar: "إيراد ٢٠٠٠" } },
          { dr: { en: "Cost of sales 1,600", ar: "تكلفة المبيعات ١٦٠٠" }, cr: { en: "Materials / payroll / payables 1,600", ar: "مواد وأجور ودائن ١٦٠٠" } },
        ],
      },
      {
        kind: "p",
        text: {
          en: "ONEROUS (loss-making) contracts: the moment total expected costs exceed the TP, recognise the ENTIRE expected loss immediately — do not wait for revenue. Subsequent reductions of the loss provision come as a credit when the obligation is satisfied. Also exclude from progress any costs that do not depict performance: wasted materials, abnormal inefficiencies, uninstalled materials the customer controls, and pre-contract costs expensed under the practical expedient.",
          ar: "العقود المُضْرِبة (الخاسرة): ما إن تتوقع التكاليف تجاوز السعر، يُعترف بكامل الخسارة المتوقعة فورًا — دون انتظار الإيراد. وأي تخفيض لاحق لمخصص الخسارة يُقيد دائنًا عند تنفيذ الالتزام. وتُستبعد من قياس التقدم التكاليف التي لا تعبر عن الأداء: المواد المهدرجة، والانحرافات غير الطبيعية، والمواد غير المركبة التي يسيطر عليها العميل، وتكاليف ما قبل التعاقد المستنفدة بالتسهيل العملي.",
        },
      },
      {
        kind: "tip",
        text: {
          en: "Beware \"uninstalled materials\": if the customer controls them (e.g. on-site building materials), recognise revenue equal to their cost with ZERO profit — they distort progress otherwise.",
          ar: "احذر «المواد غير المركبة»: إذا كان العميل يسيطر عليها (كمواد بناء في الموقع) فاعترف بإيراد يساوي تكلفتها بهامش ربح صفري — وإلا شوهت نسبة الإنجاز.",
        },
      },
      { kind: "h", text: { en: "Contract costs — to obtain and to fulfil", ar: "تكاليف العقود — الفوز بها وتنفيذها" } },
      {
        kind: "list",
        items: [
          { en: "Costs to OBTAIN (sales commissions, lawyers' success fees): capitalise as a contract cost asset IF recovery is probable (the amortisation period ≤ the expected contract period, including expected renewals)", ar: "تكاليف الفوز بالعقد (عمولات البيع، أتعاب نجاح): تُرأسَم كأصل تكلفة عقد إذا كان الاسترداد مرجّحًا (فترة الإطفاء ≤ فترة العقد المتوقعة بما فيها التجديدات المتوقعة)" },
          { en: "Costs to FULFIL: capitalise only if they relate to a satisfied/partially satisfied obligation (that is what contract assets already carry), or create/enhance a resource used to satisfy future obligations, AND recovery is probable", ar: "تكاليف التنفيذ: تُرأسَم فقط إذا تعلقت بالتزام منفَّذ أو منفَّذ جزئيًا (وهذا تحمله الأصول التعاقدية أصلًا)، أو أنشأت مورّدًا/حسّنت موردًا يُستخدم في التزامات مستقبلية، مع رجحان الاسترداد" },
          { en: "Expense when incurred: general and administrative (unless chargeable), wasted, or unrelated costs", ar: "تُستنفد فورًا: المصروفات العمومية والإدارية (ما لم تكن قابلة للتحميل) والمهدرجة وغير المتصلة" },
        ],
      },
      {
        kind: "journal",
        title: { en: "A 6,000 sales commission on a 3-year customer contract", ar: "عمولة بيع ٦٠٠٠ على عقد عميل لثلاث سنوات" },
        rows: [
          { dr: { en: "Contract cost asset 6,000", ar: "أصل تكلفة عقد ٦٠٠٠" }, cr: { en: "Cash 6,000", ar: "النقد ٦٠٠٠" } },
          { dr: { en: "Each year: Amortisation expense 2,000", ar: "كل سنة: مصروف إطفاء ٢٠٠٠" }, cr: { en: "Contract cost asset 2,000", ar: "أصل تكلفة عقد ٢٠٠٠" } },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Practical expedient: expense obtaining costs immediately when the amortisation period would be one year or less. Impairment: write the asset down when its carrying amount exceeds the remaining consideration minus remaining costs.",
          ar: "تسهيل عملي: استنفد تكاليف الفوز فورًا إذا كانت فترة الإطفاء سنة أو أقل. الاضمحلال: يُخفَّض الأصل إذا جاوزت قيمته الدفترية المقابل المتبقي مطروحًا منه التكاليف المتبقية.",
        },
      },
      { kind: "h", text: { en: "Warranty — assurance or service?", ar: "الضمان — طمأنة أم خدمة؟" } },
      {
        kind: "tree",
        title: { en: "The warranty decision", ar: "قرار الضمان" },
        root: { en: "A warranty sold with the product", ar: "ضمان يُباع مع المنتج" },
        branches: [
          {
            when: { en: "Only fixes what the product should already do (a quality guarantee — the item meets the agreed specifications)?", ar: "مجرد إصلاح لما كان ينبغي أن يكون عليه المنتج أصلًا (ضمان جودة — مطابقة للمواصفات)؟" },
            then: { en: "ASSURANCE type — a cost provision (IAS 37), not a performance obligation", ar: "نوع طمأنة — مخصص تكلفة وفق IAS 37، لا التزام أداء" },
          },
          {
            when: { en: "Goes beyond: an extra service the customer could choose or buy separately (extended cover, premium support)?", ar: "يتجاوز ذلك: خدمة إضافية يمكن للعميل اختيارها أو شراؤها منفصلًا (تغطية ممتدة، دعم مميز)؟" },
            then: { en: "SERVICE type — a separate performance obligation; allocate part of the TP to it", ar: "نوع خدمة — التزام أداء منفصل؛ يُخصص له جزء من سعر المعاملة", red: true },
          },
        ],
      },
      {
        kind: "example",
        title: { en: "A bundled sale with a service warranty", ar: "بيع مجمّع مع ضمان خدمة" },
        lines: [
          { en: "Machine sold for a bundled 220,000 including a 3-year service warranty whose SSP is 9,000 (machine SSP 211,000).", ar: "آلة تُباع بمجمّع ٢٢٠٠٠٠ شاملًا ضمان خدمة لثلاث سنوات سعله المنفرد ٩٠٠٠ (سعر الآلة المنفرد ٢١١٠٠٠)." },
          { en: "Revenue on delivery (machine) = 220,000 × 211/220 = 211,000 · contract liability for the warranty = 9,000, released over the 3 years.", ar: "إيراد الآلة عند التسليم = ٢٢٠٠٠٠ × ٢١١/٢٢٠ = ٢١١٠٠٠ · والتزام تعاقدي للضمان ٩٠٠٠ يُستنفد عبر ثلاث سنوات." },
        ],
      },
      {
        kind: "journal",
        title: { en: "The bundled warranty sale", ar: "البيع المجمّع مع الضمان" },
        rows: [
          { dr: { en: "Cash 220,000", ar: "النقد ٢٢٠٠٠٠" }, cr: { en: "Revenue 211,000 · Contract liability (warranty) 9,000", ar: "إيراد ٢١١٠٠٠ · التزام تعاقدي (ضمان) ٩٠٠٠" } },
          { dr: { en: "Each of years 1–3", ar: "كل سنة من الثلاث" }, cr: { en: "Revenue (warranty) 3,000", ar: "إيراد (ضمان) ٣٠٠٠" } },
        ],
      },
      { kind: "h", text: { en: "Principal vs agent — gross or net?", ar: "الأصيل أم الوكيل — إجمالي أم صافي؟" } },
      {
        kind: "p",
        text: {
          en: "When another party is involved in providing the good or service, decide whether YOU control it before it transfers to the customer. The PRINCIPAL recognises revenue GROSS (and the related cost); the AGENT recognises only its FEE, NET. Indicators of control before transfer: primary responsibility for fulfilment, inventory risk before or after transfer, and pricing discretion.",
          ar: "إذا شارك طرف آخر في تقديم السلعة أو الخدمة، فقرر: هل تسيطر أنت عليها قبل انتقالها إلى العميل؟ الأصيل يعترف بالإيراد إجماليًا (مع تكلفته)؛ والوكيل لا يعترف إلا بأتعابه صافية. ومؤشرات السيطرة قبل الانتقال: المسؤولية الأولى عن التنفيذ، ومخاطر المخزون قبل الانتقال أو بعده، والسلطة في التسعير.",
        },
      },
      {
        kind: "tree",
        title: { en: "Am I the principal?", ar: "هل أنا الأصيل؟" },
        root: { en: "Another party supplies the customer", ar: "طرف آخر يورد للعميل" },
        branches: [
          { when: { en: "I control the good/service BEFORE it transfers (I buy it, own the risk, set the price)", ar: "أسيطر على السلعة/الخدمة قبل انتقالها (أشتريها وأتحمل مخاطرها وأحدد سعرها)" }, then: { en: "PRINCIPAL — revenue GROSS", ar: "أصيل — إيراد إجمالي", red: true } },
          { when: { en: "I merely arrange for the other party to supply (my fee is the consideration)", ar: "أنا مجرّد وسيط يرتّب توريد الطرف الآخر (أتعابي هي المقابل)" }, then: { en: "AGENT — revenue = fee, NET", ar: "وكيل — الإيراد = الأتعاب صافية" } },
        ],
      },
      {
        kind: "example",
        title: { en: "A marketplace sale — gross vs net", ar: "بيع عبر منصة — إجمالي مقابل صافي" },
        lines: [
          { en: "A platform lists a supplier's course for 100 and keeps a 20% commission (20). If the platform is the AGENT: revenue 20 and a payable of 80 to the supplier — NOT revenue of 100 with cost of sales 80.", ar: "منصة تعرض كورسًا لمورّد بمبلغ ١٠٠ وتحتفظ بعمولة ٢٠٪ (٢٠). إذا كانت المنصة وكيلًا: الإيراد ٢٠ والتزام دائن للمورّد ٨٠ — وليس إيرادًا ١٠٠ بتكلفة مبيعات ٨٠." },
        ],
      },
      {
        kind: "journal",
        title: { en: "The agent's entry (net presentation)", ar: "قيد الوكيل (عرض صافي)" },
        rows: [
          { dr: { en: "Cash 100", ar: "النقد ١٠٠" }, cr: { en: "Revenue (commission) 20 · Payable to supplier 80", ar: "إيراد (عمولة) ٢٠ · دائنون للمورّد ٨٠" } },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "DipIFR loves a one-mark gross/net question hiding inside a long scenario. Ask it first: \"who controls the good before the customer gets it?\" and the whole revenue figure follows.",
          ar: "يحب DipIFR سؤال الإجمالي/الصافي بهامش درجة مخفيًا داخل سيناريو طويل. اسأله أولًا: «من يسيطر على السلعة قبل وصولها للعميل؟» وينبنِ على الجواب رقم الإيراد كله.",
        },
      },
      { kind: "h", text: { en: "Consignment inventory", ar: "المخزون الأماني (الكونسنجمنت)" } },
      {
        kind: "p",
        text: {
          en: "Delivering goods to a dealer's shelf is NOT a sale: the dealer does not control the inventory (it can return it and pays only what it sells; the entity retains the risks). Revenue is recognised only when the goods are sold to a third party — or on consumption, if the dealer (e.g. a retailer holding stock for sale) obtains control. Watch the physical transfer date vs the control transfer date.",
          ar: "تسليم البضاعة إلى رف الوكيل ليس بيعًا: فالوكيل لا يسيطر على المخزون (له إرجاعه ولا يدفع إلا ما باعه؛ والمنشأة تحتفظ بالمخاطر). ويُعترف بالإيراد فقط عند بيع البضاعة لطرف ثالث — أو عند استهلاكها إن حصل الوكيل (كمتجر يحوز المخزون للبيع) على السيطرة. فرّق بين تاريخ الانتقال المادي وتاريخ انتقال السيطرة.",
        },
      },
      {
        kind: "journal",
        title: { en: "Consignment — the control test decides the entry", ar: "الكونسنجمنت — اختبار السيطرة يحدد القيد" },
        rows: [
          { dr: { en: "On delivery to the dealer: NO entry (inventory just moves location)", ar: "عند التسليم للوكيل: لا قيد (المخزون ينتقل مكانًا فقط)" } },
          { dr: { en: "When the dealer sells 40,000 to a customer", ar: "عند بيع الوكيل ٤٠٠٠٠ لعميل" }, cr: { en: "Revenue 40,000", ar: "إيراد ٤٠٠٠٠" } },
        ],
      },
      { kind: "h", text: { en: "Bill-and-hold arrangements", ar: "الفوترة مع الاحتفاظ" } },
      {
        kind: "p",
        text: {
          en: "A sale where the customer is invoiced but the entity keeps the goods on its premises. Revenue can STILL be recognised at invoicing only when control genuinely has passed, evidenced by: (1) a substantive reason for the request (the customer lacks space), (2) the goods are identified separately as the customer's, (3) they are ready for physical transfer NOW, and (4) the entity cannot use them or direct them to another customer.",
          ar: "بيع يُفوتر فيه العميل لكن المنشأة تحتفظ بالسلعة في مخازنها. يجوز الاعتراف بالإيراد عند الفوترة فقط إذا انتقلت السيطرة فعلًا، بدلالة: (١) سبب جوهري للطلب (لا مساحة لدى العميل)، (٢) تحديد السلع منفصلًا كملكية العميل، (٣) جاهزيتها للنقل المادي الآن، (٤) عجز المنشأة عن استخدامها أو توجيهها لعميل آخر.",
        },
      },
      {
        kind: "example",
        title: { en: "A qualifying bill-and-hold", ar: "حالة فوترة مع احتفاظ مستوفية للشروط" },
        lines: [
          { en: "A customer buys 30,000 of paint it cannot store until its factory opens next quarter; the seller segregates the batches, tags them with the customer's name, and cannot resell them → recognise 30,000 on invoicing, with the inventory reclassified as \"held on behalf of the customer\" (disclose it).", ar: "عميل يشتري طلاءً بقيمة ٣٠٠٠٠ لا يستطيع تخزينه حتى افتتاح مصنعه الربع القادم؛ ففصل البائع الدفعات ووسمها باسم العميل وعجز عن بيعها لغيره ← يُعترف بـ٣٠٠٠٠ عند الفوترة، ويعاد تصنيف المخزون «محتفظًا به لصالح العميل» (مع الإفصاح)." },
        ],
      },
      { kind: "h", text: { en: "Repurchase agreements", ar: "اتفاقيات إعادة الشراء" } },
      {
        kind: "p",
        text: {
          en: "A \"sale\" with a repurchase clause is tested on WHO holds the option. Repurchase price below original = PUT (customer's option); at or above = CALL (seller's option).",
          ar: "«البيع» المشروط بإعادة الشراء يُختبر بمن يملك الخيار. سعر إعادة الشراء أدنى من الأصلي = خيار بيع (للعميل)؛ مثله أو أعلى = خيار شراء (للبائع).",
        },
      },
      {
        kind: "tree",
        title: { en: "The repurchase decision", ar: "قرار إعادة الشراء" },
        root: { en: "The seller may/must buy the asset back", ar: "قد/يجب على البائع إعادة شراء الأصل" },
        branches: [
          { when: { en: "SELLER's option (call) or a fixed repurchase ≥ original", ar: "خيار البائع (شراء) أو إعادة شراء ثابتة ≥ الأصلي" }, then: { en: "NOT a sale — a LEASE (if the buyer does not obtain control) or a FINANCING ARRANGEMENT", ar: "ليس بيعًا — إيجار (إن لم يحصل المشتري على السيطرة) أو ترتيب تمويلي", red: true } },
          { when: { en: "CUSTOMER's option (put) with a repurchase price that compensates it (a significant seller incentive to repurchase, e.g. price ≥ expected market)", ar: "خيار العميل (بيع) بسعر يعوّضه (تحفيز جوهري للبائع على الاسترداد، كسعر ≥ السوق المتوقع)" }, then: { en: "Sale with a RIGHT OF RETURN — reverse revenue when the option is exercised", ar: "بيع مع حق إرجاع — يُعكس الإيراد عند ممارسة الخيار", red: true } },
        ],
      },
      {
        kind: "example",
        title: { en: "A repurchase that is really a financing", ar: "إعادة شراء هي في جوهرها تمويل" },
        lines: [
          { en: "Seller \"sells\" equipment for 90,000 cash and must repurchase it in one year for 99,000 (an embedded 10% return). No control passed → the 90,000 is a loan.", ar: "بائع «يبيع» معدّة بـ٩٠٠٠٠ نقدًا وعليه إعادة شرائها بعد سنة بـ٩٩٠٠٠ (عائد ١٠٪ مضمّن). لم تنتقل السيطرة ← الـ٩٠٠٠٠ قرض." },
        ],
      },
      {
        kind: "journal",
        title: { en: "The financing treatment, in full", ar: "معالجة التمويل كاملة" },
        rows: [
          { dr: { en: "Cash 90,000", ar: "النقد ٩٠٠٠٠" }, cr: { en: "Financial liability 90,000", ar: "التزام مالي ٩٠٠٠٠" } },
          { dr: { en: "Over the year: Finance cost 9,000", ar: "عبر السنة: مصروف تمويل ٩٠٠٠" }, cr: { en: "Financial liability 9,000", ar: "التزام مالي ٩٠٠٠" } },
          { dr: { en: "Repurchase day: Financial liability 99,000", ar: "يوم الاسترداد: التزام مالي ٩٩٠٠٠" }, cr: { en: "Cash 99,000 · Equipment returns to the books", ar: "النقد ٩٩٠٠٠ · وعودة المعدّة إلى الدفاتر" } },
        ],
      },
      { kind: "h", text: { en: "Sale with a right of return", ar: "البيع مع حق الإرجاع" } },
      {
        kind: "p",
        text: {
          en: "Recognise (a) revenue for the goods NOT expected to be returned, (b) a REFUND LIABILITY for the expected returns, (c) cost of sales for the goods not expected back, and (d) a RIGHT-TO-RECOVER-PRODUCT ASSET for the expected returns' cost. Update all of it at each reporting date.",
          ar: "اعترف بـ: (أ) إيراد للسلع غير المتوقع إرجاعها، (ب) التزام مرتجعات للعائدات المتوقعة، (ج) تكلفة مبيعات للسلع غير المتوقع عودتها، (د) أصل حق استرداد المنتج بتكلفة العائدات المتوقعة. وحدّث ذلك كله في كل تاريخ إقفال.",
        },
      },
      {
        kind: "example",
        title: { en: "Returns, in numbers", ar: "المرتجعات بالأرقام" },
        lines: [
          { en: "100 units sold at 10 (revenue 1,000), cost 6 each (600). Expected returns 6%.", ar: "بيع ١٠٠ وحدة بسعر ١٠ (إيراد ١٠٠٠) وبتكلفة ٦ للوحدة (٦٠٠). العائدات المتوقعة ٦٪." },
          { en: "Revenue = 94 × 10 = 940 · refund liability = 6 × 10 = 60 · cost of sales = 94 × 6 = 564 · recovery asset = 6 × 6 = 36.", ar: "الإيراد = ٩٤ × ١٠ = ٩٤٠ · التزام المرتجعات = ٦ × ١٠ = ٦٠ · تكلفة المبيعات = ٩٤ × ٦ = ٥٦٤ · أصل الاسترداد = ٦ × ٦ = ٣٦." },
        ],
      },
      {
        kind: "journal",
        title: { en: "The right-of-return sale", ar: "قيد البيع مع حق الإرجاع" },
        rows: [
          { dr: { en: "Cash 1,000", ar: "النقد ١٠٠٠" }, cr: { en: "Revenue 940 · Refund liability 60", ar: "إيراد ٩٤٠ · التزام مرتجعات ٦٠" } },
          { dr: { en: "Cost of sales 564 · Right-to-recover product asset 36", ar: "تكلفة مبيعات ٥٦٤ · أصل استرداد المنتج ٣٦" }, cr: { en: "Inventory 600", ar: "المخزون ٦٠٠" } },
        ],
      },
      { kind: "h", text: { en: "Customer options — material rights", ar: "خيارات العميل — الحقوق الجوهرية" } },
      {
        kind: "p",
        text: {
          en: "A discount coupon, loyalty point, renewal right or upgrade option gives the customer something it would NOT receive without the contract — a MATERIAL RIGHT and therefore a separate performance obligation. Allocate part of the TP to it (relative SSP), defer it as a contract liability, and recognise it when the option is exercised or expires. No deferral when the option is a standard commercial discount any customer receives.",
          ar: "قسيمة الخصم أو نقاط الولاء أو حق التجديد أو خيار الترقية تمنح العميل ما لم يكن ليحصل عليه دون العقد — حق جوهري، أي التزام أداء منفصل. خصّص له جزءًا من سعر المعاملة (نسبيًا مع الأسعار المنفردة)، وأجّله التزامًا تعاقديًا، واعترف به عند استعمال الخيار أو سقوطه. ولا تأجيل إذا كان الخيار خصمًا تجاريًا اعتياديًا يحصل عليه أي عميل.",
        },
      },
      {
        kind: "example",
        title: { en: "Loyalty points with a deferral", ar: "نقاط ولاء مع تأجيل" },
        lines: [
          { en: "Sale of 100 includes points whose standalone value is 5; the customer is expected to redeem 80% of their value (4). TP allocated: goods = 100 × 100/104 = 96 · points = 100 × 4/104 = 4.", ar: "بيع بمبلغ ١٠٠ يتضمن نقاطًا قيمتها المنفردة ٥؛ ويتوقع استرداد ٨٠٪ من قيمتها (٤). التخصيص: السلع = ١٠٠ × ١٠٠/١٠٤ = ٩٦ · النقاط = ١٠٠ × ٤/١٠٤ = ٤." },
        ],
      },
      {
        kind: "journal",
        title: { en: "The material-right sale", ar: "قيد بيع الحق الجوهري" },
        rows: [
          { dr: { en: "Cash 100", ar: "النقد ١٠٠" }, cr: { en: "Revenue (goods) 96 · Contract liability (points) 4", ar: "إيراد (سلع) ٩٦ · التزام تعاقدي (نقاط) ٤" } },
          { dr: { en: "On redemption/expiry", ar: "عند الاسترداد أو السقوط" }, cr: { en: "Revenue (points) 4", ar: "إيراد (نقاط) ٤" } },
        ],
      },
      { kind: "h", text: { en: "Licensing — functional vs symbolic IP", ar: "الترخيص — الملكية الوظيفية مقابل الرمزية" } },
      {
        kind: "p",
        text: {
          en: "For licences of intellectual property, revenue is recognised at the point in time the customer can FIRST use the licence — UNLESS the licence is a right to ACCESS IP as it evolves, in which case revenue is over the licence period. Classify by what the customer gets: FUNCTIONAL IP (its utility comes from the content as it stands: software, films, books, drugs) → point in time. SYMBOLIC IP (utility comes from the entity's ongoing activity: brands, franchises, real-time market data) → over time. Sales- or usage-based royalties on IP: recognise only when the later of (a) the sale/usage occurs or (b) the related obligation is satisfied.",
          ar: "في تراخيص الملكية الفكرية يُعترف بالإيراد في اللحظة التي يستطيع فيها العميل أول استخدامٍ للترخيص — إلا إذا كان حق الولوج إلى ملكية تتطور، فيكون الإيراد على مدى فترة الترخيص. صنّف بحسب ما يحصل عليه العميل: ملكية وظيفية (منفعتها من محتواها القائم: برمجيات وأفلام وكتب وعقاقير) ← لحظة. ملكية رمزية (منفعتها من نشاط المنشأة المستمر: علامات وامتيازات وبيانات سوق لحظية) ← بمرور الوقت. وعوائد الملكية المرتبطة بالمبيعات أو الاستخدام: لا تُعترف إلا عند تحقق الأحدث من (أ) وقوع البيع/الاستخدام أو (ب) تنفيذ الالتزام المرتبط.",
        },
      },
      {
        kind: "list",
        items: [
          { en: "Point in time (functional): licensed software (as-is), a film's distribution rights, a patent on a completed drug formula", ar: "لحظة (وظيفية): برمجيات مرخصة بحالتها، حقوق توزيع فيلم، براءة اختراع لتركيبة دوائية مكتملة" },
          { en: "Over time (symbolic): a franchise brand renewed and protected continuously, access to a live market-data feed, a trademark licence with ongoing advertising", ar: "بمرور الوقت (رمزية): علامة امتياز تُجدَّد وتُحمى باستمرار، الولوج لبيانات سوق حية، ترخيص علامة تجارية مع إعلانات مستمرة" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Royalties from a licence are NOT \"other income\" — they are IFRS 15 revenue if the licence was promised in a contract with a customer.",
          ar: "عوائد الترخيص ليست «إيرادات أخرى» — بل إيراد وفق IFRS 15 إذا وعد بها في عقد مع عميل.",
        },
      },
      { kind: "h", text: { en: "Contract asset vs contract liability vs receivable", ar: "الأصل التعاقدي مقابل الالتزام التعاقدي مقابل المدينين" } },
      {
        kind: "list",
        items: [
          { en: "RECEIVABLE — an UNCONDITIONAL right to consideration (only the passage of time); presented within trade receivables", ar: "مدينون — حق غير مشروط في المقابل (لا ينقصه إلا مرور الوقت)؛ يُعرض ضمن المدينين التجاريين" },
          { en: "CONTRACT ASSET — a CONDITIONAL right: you performed, but something other than time must happen first (e.g. install before billing)", ar: "أصل تعاقدي — حق مشروط: نفّذت، لكن يلزم قبل السداد شيء آخر غير الوقت (مثل إتمام التركيب قبل الفوترة)" },
          { en: "CONTRACT LIABILITY — the mirror: consideration received (or unconditionally due) for obligations still unsatisfied", ar: "التزام تعاقدي — الصورة المعاكسة: مقابل مقبوض (أو مستحق دون شرط) عن التزامات لم تُنفَّذ بعد" },
        ],
      },
      {
        kind: "journal",
        title: { en: "How a contract asset becomes a receivable", ar: "كيف يتحول الأصل التعاقدي إلى مدينين" },
        rows: [
          { dr: { en: "Performance complete, billing conditional", ar: "اكتمل الأداء والفوطة مشروطة" }, cr: { en: "Revenue — and a CONTRACT ASSET is recognised", ar: "إيراد — مع الاعتراف بأصل تعاقدي" } },
          { dr: { en: "The condition clears (right becomes unconditional)", ar: "يزول الشرط (يصير الحق غير مشروط)" }, cr: { en: "Receivable — reclassify; contract asset nil", ar: "مدينون — إعادة تصنيف؛ الأصل التعاقدي يُفنى" } },
        ],
      },
      { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
      {
        kind: "list",
        items: [
          { en: "Present contract assets, contract liabilities and receivables as SEPARATE line items (or disclose); revenue and cost of sales presented gross", ar: "اعرض الأصول التعاقدية والالتزامات التعاقدية والمدينين بنودًا منفصلة (أو أفصح عنها)؛ والإيراد وتكلفة المبيعات إجمالًا" },
          { en: "Disaggregation of revenue into categories that show how economic factors affect its nature, amount, timing and uncertainty (by product line, geography, market, contract type, duration, or timing — over time vs point in time)", ar: "فصّل الإيراد إلى فئات تُظهر كيف تؤثر العوامل الاقتصادية في طبيعته ومبلغه وتوقيته وعدم تأكده (بخط المنتج أو الجغرافيا أو السوق أو نوع العقد أو مدته أو توقيته — بمرور الوقت مقابل لحظة)" },
          { en: "Opening and closing balances of contract assets, contract liabilities and remaining performance obligations, revenue recognised in the period that was included in the opening contract liability balance, and the explanation of the changes", ar: "أرصدة أول وآخر المدة للأصول والالتزامات التعاقدية والالتزامات المتبقية، والإيراد المعترف به خلال الفترة الذي كان مضمّنًا في رصيد الالتزام التعاقدي الأول، وشرح التغيرات" },
          { en: "Significant judgements: the timing of satisfaction of obligations, and the determination of the transaction price and its allocation", ar: "أحكام جوهرية: توقيت تنفيذ الالتزامات، وتحديد سعر المعاملة وتوزيعه" },
          { en: "Practical expedients used (e.g. omit remaining-obligation disclosure for contracts ≤ 1 year; financing expedient)", ar: "التسهيلات العملية المستخدمة (كالاستغناء عن إفصاح الالتزامات المتبقية للعقود ≤ سنة؛ وتسهيل التمويل)" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "In the exam, the disaggregation and the contract-balance movements are where the marks hide: always reconcile \"revenue recognised\" to \"cash received\" via the movement of the contract liability.",
          ar: "في الامتحان تكمن الدرجات في التفصيل وحركة أرصدة العقد: سدد دائمًا «الإيراد المعترف به» مع «النقد المقبوض» عبر حركة الالتزام التعاقدي.",
        },
      },
      { kind: "h", text: { en: "Contract modifications — treat as a new contract or blend in?", ar: "تعديلات العقد — عقد جديد أم دمج؟" } },
      {
        kind: "tree",
        title: { en: "The modification decision", ar: "قرار التعديل" },
        root: { en: "The scope or price of the contract changes", ar: "يتغير نطاق العقد أو سعره" },
        branches: [
          {
            when: { en: "ADDED goods/services at their standalone prices (a genuine add-on order)?", ar: "سلع/خدمات مضافة بأسعارها المنفردة (طلب إضافي حقيقي)؟" },
            then: { en: "A SEPARATE new contract — prospectively", ar: "عقد جديد مستقل — مستقبليًا", red: true },
          },
          {
            when: { en: "Not at SSP — are the remaining goods DISTINCT from those already transferred?", ar: "ليست بسعرها المنفرد — هل السلع المتبقية مميزة عن المسلَّمة فعلًا؟" },
            then: { en: "TWO contracts: old terminates, blend unrecognised amounts + new consideration over remaining obligations", ar: "عقدان: ينتهي القديم، ويُمزج غير المعترف به مع المقابل الجديد على الالتزامات المتبقية" },
            children: [
              {
                when: { en: "Not distinct (part of a single partly-satisfied obligation)", ar: "غير مميزة (جزء من التزام واحد منفَّذ جزئيًا)" },
                then: { en: "BLEND into one: re-measure progress and revenue on a cumulative catch-up basis", ar: "دمج في عقد واحد: يعاد قياس التقدم والإيراد بطريقة التعويض التراكمي", red: true },
              },
            ],
          },
        ],
      },
      {
        kind: "example",
        title: { en: "A modification blended mid-stream", ar: "تعديل يُدمج في منتصف التنفيذ" },
        lines: [
          { en: "A 2-year service (TP 24,000, 1,000/month) is modified at the end of year 1 to add 3 months of the SAME service for an extra 2,700 (below its SSP of 3,000). The remaining months are not distinct from the service already provided → blend: unrecognised TP = 12,000 + 2,700 = 14,700 over 15 remaining months → 980/month.", ar: "خدمة لسنتين (سعر ٢٤٠٠٠ بمعدل ١٠٠٠ شهريًا) تُعدَّل نهاية السنة الأولى بإضافة ٣ أشهر من الخدمة نفسها بمقابل ٢٧٠٠ (دون سعرها المنفرد ٣٠٠٠). الأشهر المتبقية غير مميزة عن المنفَّذة ← دمج: غير المعترف به = ١٢٠٠٠ + ٢٧٠٠ = ١٤٧٠٠ على ١٥ شهرًا ← ٩٨٠ شهريًا." },
        ],
      },
      { kind: "h", text: { en: "Transition & the exam focus", ar: "التحول وتركيز الامتحان" } },
      {
        kind: "p",
        text: {
          en: "Entities adopted IFRS 15 either by FULL RETROSPECTIVE application (restate comparatives as if the model had always applied) or the MODIFIED RETROSPECTIVE approach (restate the opening balances of the earliest comparative period — cumulative effect to opening retained earnings — without restating comparatives). The five-step logic, the special issues and the contract balances are the permanent DipIFR diet.",
          ar: "طبقت المنشآت IFRS 15 إما بالتطبيق الرجعي الكامل (إعادة عرض المقارنات كأن النموذج كان مطبقًا دائمًا) أو بالطريقة الرجعيّة المعدَّلة (تعديل أرصدة أول المدة للمقارنة الأقدم — بأثر تراكمي في أرباح بداية المدخرات — دون إعادة عرض المقارنات). ومنطق الخطوات الخمس والقضايا الخاصة وأرصدة العقد هي طعام DipIFر الدائم.",
        },
      },
      {
        kind: "tip",
        text: {
          en: "Q1-style consolidations increasingly embed an IFRS 15 adjustment (deferred consideration with a financing component, or a contract liability acquired in a business combination). Post-acquisition revenue must follow the five steps, not the acquired company's old policy.",
          ar: "أسئلة التوحيد بأسلوب السؤال الأول تتضمن متزايدًا تسوية IFRS 15 (مقابل مؤجل بمكون تمويلي، أو التزام تعاقدي مقتنى ضمن اندماج). فالإيراد بعد الاستحواذ يتبع الخطوات الخمس لا سياسة الشركة المقتناة القديمة.",
        },
      },
      {
        kind: "tip",
        text: {
          en: "The four traps that repeat every sitting: (1) recognising the full bundle price on delivery of the first element, (2) forgetting the financing component on deferred consideration, (3) netting an agency commission as gross revenue, (4) burying deferred income inside trade payables instead of a contract liability.",
          ar: "الفخاخ الأربعة المتكررة في كل جلسة: (١) الاعتراف بكامل سعر الحزمة عند تسليم أول عنصر، (٢) إغفال مكون التمويل في المقابل المؤجل، (٣) عرض عمولة وكالة كإيراد إجمالي، (٤) دفن الإيرادات المؤجلة ضمن الدائنين التجاريين بدلًا من التزام تعاقدي.",
        },
      },
    ],
}
