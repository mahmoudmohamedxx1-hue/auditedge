/** IAS 38 — Intangible Assets */

import type { Standard } from "../types"

export const IAS_38: Standard = {
  code: "IAS 38",
  title: { en: "Intangible Assets", ar: "الأصول غير الملموسة" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 2005 · amended 2024 (business-restructuring charges)", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل ٢٠٢٤ (تكاليف إعادة هيكلة الأعمال)" },
  blocks: [
    { kind: "h", text: { en: "Objective & core principle", ar: "الهدف والمبدأ الأساسي" } },
    {
      kind: "p",
      text: {
        en: "IAS 38 prescribes WHEN an intangible asset may be recognised and at WHAT amount: an identifiable non-monetary asset without physical substance, controlled by the entity, from which future benefits are expected. The standard is famously asymmetric — it opens the door to acquisitions (bought or business-combined intangibles at fair value) and slams it on internally generated goodwill, brands, mastheads, titles and customer lists. The exam engine is the same pair of questions everywhere: does the DEFINITION hold, and does the recognition test (probable benefits + reliably measurable cost) pass?",
        ar: "يحدد IAS 38 متى يجوز الاعتراف بالأصل غير الملموس وبأي مبلغ: أصل غير نقدي عديم الجوهر المادي، قابل للتحديد، تحت سيطرة المنشأة، منتظرة المنافع منه. والمعيار غير متوازن بامتياز — يفتح الباب للاقتناء (غير الملموس المشترى أو المقتنى بالاندماج بالقيمة العادلة) ويوصده في وجه الشهرة والعلامات والعناوين وقوائم العملاء المولدة داخليًا. والمحرك الامتحاني سؤالان في كل موضع: هل يتحقق التعريف؟ وهل يجتاز اختبار الاعتراف (منافع مرجحة + تكلفة قابلة للقياس الموثوق)؟",
      },
    },
    { kind: "h", text: { en: "Definition — the three gates", ar: "التعريف — البوابات الثلاث" } },
    {
      kind: "tree",
      root: { en: "Is it an intangible ASSET?", ar: "هل هو أصل غير ملموس؟" },
      branches: [
        {
          when: { en: "IDENTIFIABILITY — separable (capable of being separated and sold/transferred/licensed/exchanged) OR arising from contractual/legal rights", ar: "قابلية التحديد — قابل للفصل والبيع/النقل/الترخيص، أو ناشئ من حقوق تعاقدية/قانونية" },
          then: { en: "Passes gate 1 (customer relationships via legal contracts pass; goodwill fails — not separable)", ar: "يعبر البوابة الأولى (علاقات العملاء بعقود قانونية تعبر؛ والشهرة تفشل — غير قابلة للفصل)" },
        },
        {
          when: { en: "CONTROL — the entity has the power to obtain the future benefits and restrict others' access", ar: "السيطرة — للمنشأة قدرة على الحصول على المنافع المستقبلية ومنع الغير" },
          then: { en: "Passes gate 2 (a skilled workforce fails — the entity cannot control staff; a customer list bought from others passes)", ar: "يعبر البوابة الثانية (الكوادر المؤهلة تفشل — لا سيطرة على الموظفين؛ وقائمة عملاء مشتراة تعبر)" },
        },
        {
          when: { en: "FUTURE ECONOMIC BENEFITS — revenue, cost savings, other benefits from using the asset", ar: "منافع اقتصادية مستقبلية — إيراد أو وفر تكلفة أو منافع استخدام" },
          then: { en: "Recognise when the recognition criteria (probable benefit + reliable cost) are ALSO met", ar: "يُعترف عند تحقق شرطي الاعتراف (منفعة مرجحة + تكلفة موثوقة) أيضًا", red: true },
        },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Internally generated goodwill, brands, mastheads, publishing titles and customer lists are NEVER recognised as intangible assets — the expenditure builds them inseparably from the business itself.",
        ar: "الشهرة والعلامات والعناوين وقوائم العملاء المولدة داخليًا لا تُعترف أبدًا أصولًا غير ملموسة — فالإنفاق يبنيها متصلة بالعمل ذاته غير قابلة للفصل.",
      },
    },
    { kind: "h", text: { en: "Scope boundaries", ar: "حدود النطاق" } },
    {
      kind: "p",
      text: {
        en: "The scope carve-outs are exam favourites because each hands the item to a named rival standard. Financial assets go to IFRS 9; leases to IFRS 16 (though a leasehold right can itself be an intangible); mineral rights to IFRS 6. And the modern boundary: cloud-computing configuration and customisation costs — the 2024 amendment (following the IFRIC cloud agenda decision) confirms they are NOT an intangible when the vendor controls the software: the customer has no asset, so the SaaS set-up bill is an expense as the service is received.",
        ar: "استبعادات النطاق محببة امتحانيًا لأن كل واحد يسلم البند لمعيار منافس مسمى. فالأصول المالية لـ IFRS 9؛ والإيجارات لـ IFRS 16 (مع أن حق الانتفاع بعقد إيجار قد يكون هو نفسه أصلًا غير ملموس)؛ وحقوق المعادن لـ IFRS 6. والحد الحديث: تكاليف الإعداد والتخصيص للحوسبة السحابية — يؤكد تعديل ٢٠٢٤ (تلو قرار أجندة IFRIC السحابي) أنها ليست أصلًا غير ملموس متى سيطر المزود على البرمجية: فلا أصل لدى العميل، وفاتورة تهيئة الخدمة مصروف يتكبد مع تلقي الخدمة.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Out: financial assets (IFRS 9), mineral rights, insurance contracts, leases (IFRS 16) — but leasehold improvements and other rights CAN be intangibles", ar: "الخارج: الأصول المالية (IFRS 9)، وحقوق المعادن، وعقود التأمين، والإيجارات (IFRS 16) — لكن تحسينات المأجور وغيرها من الحقوق قد تكون غير ملموسة" },
        { en: "In: computer software (bought or built), licences, franchises, patents, copyrights, import quotas, marketing rights, servicing rights, customer lists ACQUIRED", ar: "الداخل: البرمجيات (مشتراة أو مبنية)، والتراخيص، والامتيازات، وبراءات الاختراع، وحقوق النشر، وحصص الاستيراد، وحقوق التسويق، وقوائم العملاء المقتناة" },
        { en: "Website & digital content: the proprietary operating system software is IAS 38; content, staff training, administration and selling costs expensed", ar: "المواقع والمحتوى الرقمي: نظام التشغيل الذاتي أصل غير ملموس؛ والمحتوى والتدريب والإدارة والبيع مصروفات" },
        { en: "The 2024 amendment: a CONFIGURATION-OR-CUSTOMISATION cost of SaaS is NOT an intangible — no software asset under the customer's control (the vendor controls it)", ar: "تعديل ٢٠٢٤: تكاليف الإعداد والتخصيص لخدمات SaaS ليست أصلًا غير ملموس — فلا برمجية تحت سيطرة العميل (المزود يسيطر عليها)" },
      ],
    },
    { kind: "h", text: { en: "Acquisition routes & measurement at cost", ar: "طرق الاقتناء والقياس بالتكلفة" } },
    {
      kind: "p",
      text: {
        en: "The route decides the measurement. A SEPARATE purchase is at cost with the probability criterion always PRESUMED met — only the reliable-measurement question remains. Payment deferred beyond normal credit terms? The cash-price equivalent is the cost and the excess is a financing charge over time (the effective-interest engine). A BUSINESS COMBINATION recognises even in-process research as an intangible at fair value — the acquirer pays for it, so it exists — while the same project inside the seller's books was an expense.",
        ar: "الطريق يقرر القياس. الشراء المنفصل بالتكلفة ومعيار الترجيح مفترض متحققًا دائمًا — فلا يبقى إلا سؤال القياس الموثوق. سداد مؤجل عن أجل ائتماني معتاد؟ فمكافئ السعر النقدي هو التكلفة والزيادة عبء تمويل عبر الزمن (محرك الفائدة الفعلية). والاندماج التجاري يعترف حتى بالبحث الجاري أصلًا غير ملموس بالقيمة العادلة — فالمستحوذ دفع ثمنه إذن فهو موجود — بينما كان المشروع ذاته مصروفًا في دفاتر البائع.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "SEPARATE acquisition: cost = purchase price + import duties + directly attributable expenditure (installation, professional fees, testing) — probability criterion always PRESUMED met", ar: "الاقتناء المنفصل: التكلفة = الثمن + الرسوم + المصروفات المباشرة (تركيب، أتعاب، اختبار) — ومعيار الترجيح مفترض متحققًا" },
        { en: "BUSINESS COMBINATION: cost = acquisition-date FAIR VALUE — even in-process research and development projects count as intangibles (IFRS 3 recognises them apart from goodwill)", ar: "الاندماج التجاري: التكلفة = القيمة العادلة بتاريخ الاستحواذ — حتى مشروعات البحث والتطوير الجارية أصول غير ملموسة منفصلة عن الشهرة" },
        { en: "GOVERNMENT GRANT: nominal consideration or fair value + directly attributable costs (IAS 20 election)", ar: "منحة حكومية: مقابل رمزي أو القيمة العادلة + تكاليف مباشرة (اختيار IAS 20)" },
        { en: "EXCHANGE of assets: at fair value unless the exchange lacks commercial substance or fair value is not reliably measurable", ar: "مقايضة أصول: بالقيمة العادلة ما لم يفتقد الجوهر التجاري أو يتعذر قياسها موثوقًا" },
        { en: "Deferred payment beyond normal credit terms: cost = the CASH-PRICE EQUIVALENT; the difference unwinds as a financing expense", ar: "سداد مؤجل عن الأجل الائتماني المعتاد: التكلفة = مكافئ السعر النقدي؛ والفرق يُفك عبئًا تمويليًا" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Separate acquisition at cost", ar: "اقتناء منفصل بالتكلفة" },
      rows: [
        { dr: { en: "Intangible asset (licence price + duties + professional fees + testing)", ar: "أصل غير ملموس (ثمن الترخيص + الرسوم + الأتعاب المهنية + الاختبار)" }, cr: { en: "Payables / cash", ar: "دائنون / نقد" }, red: true },
        { dr: { en: "Finance cost (the financing element of a deferred payment, over the credit term)", ar: "مصروف تمويل (عنصر تمويل السداد المؤجل عبر أجل الائتمان)" }, cr: { en: "Interest payable", ar: "فوائد مستحقة" } },
      ],
    },
    { kind: "h", text: { en: "Internally generated — the PIRATE test", ar: "المولد داخليًا — اختبار PIRATE" } },
    {
      kind: "steps",
      items: [
        { en: "P — IAS 38.57 (the six criteria): Probable benefits · Intention to complete · ability to USE or sell the asset · Resources adequate to complete · Technical feasibility of completing · MEASURABLE cost reliably", ar: "المعايير الستة (IAS 38.57): منافع مرجحة · نية الإتمام · قدرة الاستخدام أو البيع · موارد كافية · جدوى فنية لإتمام الأصل · قابلية قياس التكلفة موثوقًا" },
        { en: "RESEARCH phase (seeking new knowledge; alternatives evaluation; design selection): EXPENSE as incurred — no asset, ever", ar: "مرحلة البحث (استكشاف المعرفة وتقييم البدائل واختيار التصميم): مصروف عند حدوثه — لا أصل أبدًا" },
        { en: "DEVELOPMENT phase (design, construction, testing of pre-production prototypes/models): CAPITALISE when ALL six criteria are met — BEFORE that point, expensed", ar: "مرحلة التطوير (تصميم وبناء واختبار النماذج قبل الإنتاج): رسملة عند تحقق المعايير الستة جميعًا — وما قبلها مصروف" },
        { en: "Cannot distinguish the two phases? Treat it ALL as research — expense", ar: "تعذر التمييز بين المرحلتين؟ عامل الكل بحثًا — مصروفًا" },
        { en: "Internally generated BRANDS / mastheads / titles / customer lists: NEVER — even if all six criteria pass", ar: "العلامات والعناوين وقوائم العملاء الداخلية: أبدًا — ولو تحققت المعايير الستة" },
      ],
    },
    {
      kind: "tree",
      title: { en: "Classify the internal project's spend", ar: "صنّف إنفاق المشروع الداخلي" },
      root: { en: "Spending on an internal project", ar: "إنفاق على مشروع داخلي" },
      branches: [
        {
          when: { en: "Gaining new knowledge, evaluating alternatives, selecting a preferred design — the RESEARCH phase", ar: "اكتساب معرفة جديدة، تقييم البدائل، اختيار تصميم مفضل — مرحلة البحث" },
          then: { en: "EXPENSE as incurred — even if the project later succeeds", ar: "مصروف عند تكبده — ولو نجح المشروع لاحقًا", red: true },
        },
        {
          when: { en: "Pre-production design, construction and testing of prototypes — the DEVELOPMENT phase with ALL six criteria demonstrably met", ar: "تصميم وبناء واختبار النماذج قبل الإنتاج — مرحلة التطوير بتحقق المعايير الستة جميعًا إثباتًا" },
          then: { en: "CAPITALISE from the date the last criterion is met", ar: "رسملة من تاريخ تحقق المعيار الأخير", red: true },
        },
        {
          when: { en: "Criteria met only partway through the development phase", ar: "تحققت المعايير في منتصف مرحلة التطوير فقط" },
          then: { en: "Earlier spending STAYS EXPENSED — capitalisation starts at the criteria date, no reinstatement", ar: "الإنفاق الأسبق يبقى مصروفًا — وتبدأ الرسملة من تاريخ المعايير بلا استرجاع", red: true },
        },
        {
          when: { en: "The phases cannot be distinguished", ar: "تعذر تمييز المرحلتين" },
          then: { en: "The WHOLE spend is research — expense", ar: "الإنفاق كله بحث — مصروف", red: true },
        },
      ],
    },
    {
      kind: "journal",
      title: { en: "The R&D pair of entries", ar: "قيدا البحث والتطوير" },
      rows: [
        { dr: { en: "Research expense (P&L) 400 — the molecule hunt", ar: "مصروف بحث (بالأرباح) ٤٠٠ — رحلة اكتشاف الجزيء" }, cr: { en: "Payables / payroll 400", ar: "دائنون / أجور ٤٠٠" }, red: true },
        { dr: { en: "Intangible asset — development in progress 600 (criteria met before the spend)", ar: "أصل غير ملموس — تطوير جارٍ ٦٠٠ (تحققت المعايير قبل الصرف)" }, cr: { en: "Payables / payroll 600", ar: "دائنون / أجور ٦٠٠" }, red: true },
        { dr: { en: "Impairment loss (P&L) — if the trials later FAIL", ar: "خسارة انخفاض (بالأرباح) — إن فشلت التجارب لاحقًا" }, cr: { en: "Intangible asset 600", ar: "الأصل غير الملموس ٦٠٠" } },
      ],
    },
    {
      kind: "example",
      title: { en: "R&D split worked", ar: "فصل البحث والتطوير" },
      lines: [
        { en: "Pharma project: 400 spent finding the molecule (research) + 600 on trials, regulatory approval and production design (development, criteria met before spending)", ar: "مشروع دوائي: ٤٠٠ لاكتشاف الجزيء (بحث) + ٦٠٠ للتجارب والموافقات وتصميم الإنتاج (تطوير تحققت معاييره قبل الصرف)" },
        { en: "Balance sheet: intangible 600 · P&L expense 400", ar: "الميزانية: أصل غير ملموس ٦٠٠ · المصروف ٤٠٠" },
        { en: "If the trials FAIL later: the 600 is impaired (IAS 36), not 'reversed into expense' — and the spent 400 stays expensed forever", ar: "إن فشلت التجارب لاحقًا: يُنقص الأصل ٦٠٠ وفق IAS 36 ولا يعود مصروفًا — والـ٤٠٠ تبقى مصروفًا أبدًا" },
        { en: "Start-up costs, staff training, advertising & promotion: expensed even during the development phase", ar: "تكاليف التأسيس وتدريب العاملين والدعاية: مصروفات حتى في مرحلة التطوير" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "NO REINSTATEMENT: development expenditure expensed before the six criteria were met can never be re-capitalised later when the project turns promising — the gate closes behind each period's spend.",
        ar: "لا استرجاع: إنفاق التطوير الذي حُمل مصروفًا قبل تحقق المعايير الستة لا يعاد رسمله أبدًا حين يبزغ وعد المشروع — فالبوابة تُغلق خلف إنفاق كل فترة.",
      },
    },
    { kind: "h", text: { en: "Internally generated — the prohibitions", ar: "المولد داخليًا — المحظورات" } },
    {
      kind: "p",
      text: {
        en: "Why the prohibitions? Because the definition's gates fail, not because the value is absent. Internally generated goodwill is the excess of the business over its parts — not separable, so gate 1 fails. A home-grown brand rests on customer sentiment the entity cannot police — control fails, and so do mastheads, titles and internally built customer lists. The spending on them is an expense of building the BUSINESS, and IAS 38 says so by name.",
        ar: "لماذا المحظورات؟ لأن بوابات التعريف تسقط لا لأن القيمة غائبة. فالشهرة المولدة داخليًا زيادة العمل على أجزائه — غير قابلة للفصل فتسقط البوابة الأولى. والعلامة الداخلية تقوم على وجدان العملاء مما لا تستطيع المنشأة ضبطه — فتفشل السيطرة، وهكذا العناوين وقوائم العملاء المبنية داخليًا. وإنفاقها مصروف لبناء العمل ذاته، وينص IAS 38 على ذلك بأسمائها.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Internally generated GOODWILL — never an asset", ar: "الشهرة المولدة داخليًا — ليست أصلًا أبدًا" },
        { en: "Internally generated BRANDS, mastheads, publishing titles, customer lists — never, even with all criteria met", ar: "العلامات والعناوين التحريرية وقوائم العملاء الداخلية — أبدًا، ولو تحققت المعايير كلها" },
        { en: "Start-up and pre-opening costs, staff TRAINING, ADVERTISING and promotion — always expense", ar: "تكاليف التأسيس وما قبل الافتتاح، وتدريب العاملين، والدعاية والترويج — مصروف دائمًا" },
        { en: "Business RELOCATION and reorganisation — the benefits go to the business, not to a separable asset", ar: "انتقال الأعمال وإعادة تنظيمها — فالمنافع للعمل لا لأصل قابل للفصل" },
      ],
    },
    { kind: "h", text: { en: "Measurement after recognition", ar: "القياس بعد الاعتراف" } },
    {
      kind: "tree",
      root: { en: "Cost model or revaluation model?", ar: "نموذج التكلفة أم إعادة التقييم؟" },
      branches: [
        {
          when: { en: "COST MODEL — the default for every intangible", ar: "نموذج التكلفة — الافتراضي لكل أصل غير ملموس" },
          then: { en: "Carrying = cost − accumulated amortisation − accumulated impairment", ar: "الدفترية = التكلفة − مجمع الاستنفاد − مجمع الانخفاض", red: true },
        },
        {
          when: { en: "REVALUATION MODEL — only if an ACTIVE MARKET exists (taxi licences, fishing quotas, airport slots); the ONLY permitted revaluation basis is fair value 'by reference to an active market' — often impossible for unique intangibles", ar: "نموذج إعادة التقييم — فقط عند وجود سوق نشطة (تراخيص التاكسي، حصص الصيد، فترات المطارات)؛ ولا مرجح إلا القيمة العادلة بسوق نشطة — وغالبًا يتعذر للأصول الفريدة" },
          then: { en: "Fair value at revaluation date − subsequent amortisation/impairment; whole class, regular revaluations, surplus in OCI (same IAS 16 corridor logic)", ar: "القيمة العادلة بتاريخ التقييم − استنفاد/انخفاض لاحق؛ وللفئة كلها بفائض في الدخل الشامل (منطق IAS 16 ذاته)", red: true },
        },
        {
          when: { en: "Finite vs INDEFINITE useful life (and the zero-residual presumption)", ar: "عمر محدد مقابل غير محدد (وافتراض القيمة المتبقية صفرًا)" },
          then: { en: "Finite → amortise over useful life, consumption pattern, review each period; Indefinite → NO amortisation, ANNUAL impairment test instead", ar: "محدد ← استنفاد على العمر بنمط الاستهلاك مع المراجعة الدورية؛ وغير محدد ← لا استنفاد واختبار انخفاض سنوي", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Residual value is presumed ZERO unless a commitment by a third party to buy exists at the end of the life, or an active market lets you measure the residual reliably (with the 'likely' market remaining stable). The useful life is the entity's OWN life for the asset (shorter than the legal/economic life); an intangible acquired in a combination may have a life limited by contract or technology.",
        ar: "تُفترض القيمة المتبقية صفرًا إلا إذا وُجد التزام طرف ثالث بالشراء بنهاية العمر أو سوق نشطة تتيح قياسها موثوقًا (مع بقاء السوق مستقرة). والعمر الإنتاجي عمر المنشأة ذاتها للأصل (أقصر من العمر القانوني/الاقتصادي)؛ وقد يحدده عقد أو تقنية.",
      },
    },
    { kind: "h", text: { en: "Amortisation & the pattern", ar: "الاستنفاد ونمطه" } },
    {
      kind: "formula",
      title: { en: "The amortisation engine + the residual constraint", ar: "محرك الاستنفاد + قيد المتبقية" },
      lines: [
        { en: "Annual amortisation = (cost − residual value) ÷ useful life — or a method reflecting the consumption pattern (revenue-linked rarely)", ar: "الاستنفاد السنوي = (التكلفة − القيمة المتبقية) ÷ العمر الإنتاجي — أو طريقة تعكس نمط الاستهلاك (الربط بالإيراد نادرًا)" },
        { en: "Residual value PRESUMED ZERO unless: a third party committed to buy at life-end · an active market with a stable likely price", ar: "القيمة المتبقية مفترضة صفرًا ما لم: يلتزم طرف ثالث بالشراء بنهاية العمر · أو تقوم سوق نشطة بسعر مستقر مرجح" },
        { en: "Amortisation starts when the asset is AVAILABLE FOR USE — not when developed, not when profitable", ar: "يبدأ الاستنفاد عند صلاحية الأصل للاستخدام — لا عند اكتمال التطوير ولا عند بلوغ الربحية" },
        { en: "Residual/life revision = change in estimate (IAS 8): new charge = (carrying − revised residual) ÷ revised remaining life, prospectively", ar: "مراجعة المتبقية/العمر = تغير تقدير (IAS 8): القسط الجديد = (الدفترية − المتبقية المعدلة) ÷ العمر المتبقي المعدل، مستقبليًا" },
        { en: "INDEFINITE life → no amortisation; ANNUAL impairment test + life re-assessment each period (a 'no longer indefinite' finding flips amortisation on)", ar: "العمر غير المحدد ← لا استنفاد؛ اختبار انخفاض سنوي + إعادة تقييم العمر كل فترة (وُجد «لم يعد غير محدد» فيُشعل الاستنفاد)" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The intangible entries", ar: "قيود الأصل غير الملموس" },
      rows: [
        { dr: { en: "Intangible asset (separate purchase / capitalised development)", ar: "أصل غير ملموس (شراء منفصل / تطوير مرسمل)" }, cr: { en: "Payables / cash / payroll", ar: "دائنون / نقد / أجور" } },
        { dr: { en: "Amortisation expense (finite life)", ar: "مصروف استنفاد (عمر محدد)" }, cr: { en: "Accumulated amortisation", ar: "مجمع الاستنفاد" }, red: true },
        { dr: { en: "Impairment loss (annual test for indefinite-life & in-process assets)", ar: "خسارة انخفاض (اختبار سنوي لغير المحدد والجاري)" }, cr: { en: "Intangible (accumulated impairment)", ar: "الأصل (مجمع الانخفاض)" }, red: true },
        { dr: { en: "Loss on derecognition (disposal/abandonment)", ar: "خسارة الاستبعاد (تخرد/تخلي)" }, cr: { en: "Intangible carrying amount", ar: "القيمة الدفترية للأصل" } },
      ],
    },
    {
      kind: "example",
      title: { en: "Amortisation with the residual constraint", ar: "الاستنفاد مع قيد المتبقية" },
      lines: [
        { en: "Licence cost 900 · 10-year life · residual presumed zero → 90/yr", ar: "ترخيص بتكلفة ٩٠٠ وعمر ١٠ سنوات ومتبقية مفترضة صفرًا ← ٩٠ سنويًا" },
        { en: "After 4 years: carrying = 900 − 360 = 540. Remaining life reassessed to 3 years and a third party commits to buy at 60 at the end", ar: "بعد ٤ سنوات: الدفترية = ٩٠٠ − ٣٦٠ = ٥٤٠. وعُدل العمر المتبقي إلى ٣ سنوات والتزم طرف ثالث بالشراء بـ٦٠ في نهايتها" },
        { en: "Revised charge = (540 − 60) ÷ 3 = 160/yr — the committed residual is the only part not amortised", ar: "القسط المعدل = (٥٤٠ − ٦٠) ÷ ٣ = ١٦٠ سنويًا — والمتبقية الملتزم بها وحدها لا تُستنفد" },
        { en: "No commitment and no active market? The residual stays ZERO whatever the entity expects to fetch", ar: "لا التزام ولا سوق نشطة؟ تبقى المتبقية صفرًا أيًّا كان ما تتوقع المنشأة جنيه" },
      ],
    },
    { kind: "h", text: { en: "Useful life — finite vs indefinite", ar: "العمر الإنتاجي — محدد وغير محدد" } },
    {
      kind: "p",
      text: {
        en: "The life judgement weighs the expected usage, the typical life cycle of the products the asset serves, technical/commercial obsolescence, the stability of the industry, and legal or contractual ceilings — the ENTITY'S own horizon, not the maximum anyone could imagine. INDEFINITE does not mean infinite: it means no foreseeable limit to the period over which the asset will generate net inflows — and the assessment is redone every period, because 'indefinite' often decays into 'finite' (a taxi licence under regulatory review).",
        ar: "اجتهاد العمر يوازن الاستخدام المتوقع، ودورة حياة المنتجات التي يخدمها الأصل، والتقادم الفني والتجاري، واستقرار الصناعة، والحدود القانونية والتعاقدية — أفق المنشأة ذاتها لا أقصى ما يمكن تخيله. و«غير المحدد» لا يعني اللانهائي: بل غياب حد منظور للمدة التي سيولد فيها الأصل تدفقات صافية — ويعاد التقدير كل فترة، فكثيرًا ما ينحل «غير المحدد» إلى «محدد» (ترخيص تاكسي تحت مراجعة تنظيمية).",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Expected UTILISATION by the entity and the asset's typical product-life cycle", ar: "الاستخدام المتوقع لدى المنشأة ودورة حياة منتجات الأصل النمطية" },
        { en: "Technical, technological, COMMERCIAL obsolescence — the format that dies with the platform", ar: "التقادم الفني والتقني والتجاري — الصيغة التي تموت بموت المنصة" },
        { en: "Legal, regulatory or contractual LIMITS (licence terms, patent cliffs)", ar: "الحدود القانونية والتنظيمية والتعاقدية (مدد التراخيص، انقضاء البراءات)" },
        { en: "Industry STABILITY and the expected actions of competitors", ar: "استقرار الصناعة وتصرفات المنافسين المتوقعة" },
      ],
    },
    { kind: "h", text: { en: "The revaluation model — active market only", ar: "نموذج إعادة التقييم — بسوق نشطة فقط" } },
    {
      kind: "p",
      text: {
        en: "IAS 38's revaluation model is NARROWER than IAS 16's: fair value must be evidenced by an ACTIVE MARKET — homogeneous items, willing buyers and sellers found at any time, prices publicly available. Taxi licences, fishing quotas and airport landing slots qualify; a brand, a masthead or a unique patent never does, however famous. An indefinite-life intangible that chooses the revaluation model is revalued ANNUALLY — the same frequency as its impairment test.",
        ar: "نموذج إعادة التقييم في IAS 38 أضيق من نظيره في IAS 16: يجب أن تشهد للقيمة العادلة سوق نشطة — بنود متجانسة، ومشترون وبائعون راغبون في أي وقت، وأسعار معلنة. فتراخيص التاكسي وحصص الصيد وفترات هبوط المطارات تصلح؛ والعلامة والعنوان والبراءة الفريدة لا تصلح أبدًا مهما بلغت شهرتها. وغير الملموس غير محدد العمر الذي اختار النموذج يعاد تقييمه سنويًا — بالتواتر ذاته الذي يجري فيه اختبار انخفاضه.",
      },
    },
    { kind: "h", text: { en: "Internal-use software", ar: "البرمجيات ذاتية الاستخدام" } },
    {
      kind: "p",
      text: {
        en: "Internally generated software is an intangible built through the same two phases: technical feasibility work and system design before the criteria are met → expense; the application/development build once ALL six criteria pass → capitalise. After go-live: maintenance, minor upgrades, user training and content costs are period expenses — only an upgrade that adds materially new functionality is a new component to capitalise. And under a SaaS contract the customer never owns the software, so set-up and customisation bills are never an asset (2024 amendment).",
        ar: "البرمجيات المولدة داخليًا أصل غير ملموس يُبنى عبر المرحلتين أنفسهما: أعمال الجدوى الفنية وتصميم النظام قبل تحقق المعايير ← مصروف؛ وبناء التطبيق متى اجتازت المعايير الستة ← رسملة. وبعد التشغيل: الصيانة والترقيات الثانوية وتدريب المستخدمين وتكاليف المحتوى مصروفات فترة — ولا يرسمل إلا ترقية تضيف وظائف جديدة جوهرية بوصفها مكونًا جديدًا. وفي عقد SaaS لا يملك العميل البرمجية أصلًا، ففواتير الإعداد والتخصيص ليست أصلًا أبدًا (تعديل ٢٠٢٤).",
      },
    },
    {
      kind: "journal",
      title: { en: "Internal-use software build", ar: "بناء برمجيات ذاتية الاستخدام" },
      rows: [
        { dr: { en: "Intangible — internally generated software (application-build costs after the six criteria)", ar: "أصل غير ملموس — برمجية داخلية (تكاليف بناء التطبيق بعد المعايير الستة)" }, cr: { en: "Payroll / payables", ar: "أجور / دائنون" }, red: true },
        { dr: { en: "Operating expense (feasibility studies, staff training, post-go-live maintenance, data upkeep)", ar: "مصروف تشغيلي (دراسات الجدوى، تدريب العاملين، صيانة ما بعد التشغيل، صيانة البيانات)" }, cr: { en: "Payables / payroll", ar: "دائنون / أجور" } },
        { dr: { en: "Amortisation expense — from the date the software is AVAILABLE FOR USE", ar: "مصروف استنفاد — من تاريخ صلاحية البرمجية للاستخدام" }, cr: { en: "Accumulated amortisation", ar: "مجمع الاستنفاد" }, red: true },
      ],
    },
    { kind: "h", text: { en: "The impairment interface (IAS 36)", ar: "التقاطع مع انخفاض القيمة (IAS 36)" } },
    {
      kind: "p",
      text: {
        en: "IAS 36 owns the loss: indicators trigger a test; the recoverable amount (higher of FVLCD and VIU) caps the carrying. The annual-test trio is the reminder that some intangibles are TOO uncertain to wait for indicators: goodwill, indefinite-life assets, and assets not yet available for use (a capitalised development project with no cash flows yet — its VIU rides the cash flows of the product it will become). A revalued intangible's loss eats its own revaluation surplus first, per the corridor.",
        ar: "IAS 36 يملك الخسارة: فالمؤشرات تثير الاختبار، والمبلغ القابل للاسترداد (الأعلى من العادلة ناقص التكاليف وقيمة الاستخدام) يسقف الدفترية. والثلاثي السنوي تذكير بأن بعض غير الملموس أخطر من انتظار المؤشرات: الشهرة، وغير محدد العمر، وغير الجاهز للاستخدام بعد (مشروع تطوير مرسمل بلا تدفقات بعد — فقيمة استخدامه تركب تدفقات المنتج الذي سيصيره). وخسارة المعاد تقييمه تستنزف فائضه الخاص أولًا وفق الممر.",
      },
    },
    { kind: "h", text: { en: "Derecognition", ar: "الاستبعاد" } },
    {
      kind: "p",
      text: {
        en: "Derecognise on DISPOSAL or when no future benefits are expected — the gain/loss (net disposal proceeds − carrying amount) goes to P&L. Future operating costs of the activity the intangible supported are NOT part of the asset's carrying amount — they are liabilities/provisions if obligations arise. Donations and 'abandonment' are expensed/derecognised with no salvage imagination.",
        ar: "يستبعد الأصل عند التخرد أو انتفاء المنافع — والربح/الخسارة (صافي المتحصلات − الدفترية) للأرباح. وتكاليف التشغيل المستقبلية للنشاط ليس جزءًا من الدفترية بل التزامات/مخصصات إذا نشأت. والتبرع والتخلي يستبعدان دون افتراض قيمة إنقاذ متخيلة.",
      },
    },
    {
      kind: "journal",
      title: { en: "Selling the licence — the disposal entry", ar: "بيع الترخيص — قيد التخرد" },
      rows: [
        { dr: { en: "Cash 200", ar: "نقد ٢٠٠" }, cr: { en: "Intangible asset (cost) 600", ar: "أصل غير ملموس (التكلفة) ٦٠٠" } },
        { dr: { en: "Accumulated amortisation 440", ar: "مجمع الاستنفاد ٤٤٠" } },
        { cr: { en: "Gain on disposal (P&L) 40 = 200 − carrying 160", ar: "ربح التخرد (بالأرباح) ٤٠ = ٢٠٠ − الدفترية ١٦٠" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Disclosure checklist", ar: "قائمة الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Useful-life analysis: finite vs indefinite for each class, amortisation methods & rates, gross carrying + accumulated amortisation (opening/closing rollforward incl. additions, internal capitalisation, impairment, FX, disposals)", ar: "تحليل العمر: محدد/غير محدد لكل فئة، وطرق الاستنفاد ونِسبه، والتكلفة الإجمالية والمجمع بتسوية افتتاحية-ختامية" },
        { en: "The reconciliation line for RESEARCH & DEVELOPMENT expensed in the period", ar: "بند تسوية البحث والتطوير المحمَّل مصروفًا خلال الفترة" },
        { en: "Indefinite-life / not-yet-available assets: the carrying amount and the reason for the life judgement", ar: "غير المحدد والجاري: القيمة الدفترية وسبب حكم العمر" },
        { en: "Revalued classes: the effective date, active market evidence, carrying amount at cost that would have applied, surplus movements", ar: "الفئات المعاد تقييمها: التاريخ ودليل السوق النشطة والقيمة بنموذج التكلفة وحركات الفائض" },
        { en: "Contractual commitments for intangibles + intangibles pledged as security + government-grant intangibles measured at nominal cost", ar: "التعهدات التعاقدية والرهون وأصول المنح المقاسة بمقابل رمزي" },
      ],
    },
    { kind: "h", text: { en: "Transition & effective dates", ar: "الانتقال وتواريخ السريان" } },
    {
      kind: "p",
      text: {
        en: "The 1998 IAS 38 was rewritten in the IASB's improvements project, effective 1 Jan 2005. The load-bearing later changes: IFRS 3 (2008) confirmed acquired intangibles at fair value apart from goodwill; IFRS 13 re-based 'fair value'; IFRS 16 drew the lease boundary; and the 2024 configuration-and-customisation amendment closed the SaaS gap left by the IFRIC cloud agenda decision. Each boundary has an exam date attached.",
        ar: "أعيدت كتابة IAS 38 لعام ١٩٩٨ ضمن مشروع تحسينات مجلس معايير المحاسبة الدولية، وسارٍ من ١ يناير ٢٠٠٥. والتغييرات اللاحقة الحاملة للأعباء: IFRS 3 (٢٠٠٨) أكد اقتناء غير الملموس بالقيمة العادلة منفصلًا عن الشهرة؛ وIFRS 13 أعاد تأسيس «القيمة العادلة»؛ وIFRS 16 رسم حد الإيجار؛ وتعديل ٢٠٢٤ للإعداد والتخصيص سد فجوة SaaS التي خلّفها قرار أجندة IFRIC السحابي. ولكل حد تاريخ امتحاني معلق به.",
      },
    },
    { kind: "h", text: { en: "Interactions with the rest of the corpus", ar: "التقاطعات مع بقية المعايير" } },
    {
      kind: "list",
      items: [
        { en: "IFRS 3 — an ACQUIRED brand, technology or in-process project is an intangible at FAIR VALUE; the same asset grown internally is an expense: same economics, opposite accounting, and the identifiability + control gates explain why", ar: "IFRS 3 — العلامة أو التقنية أو المشروع الجاري المقتنى أصل غير ملموس بالقيمة العادلة؛ والمنشأ داخليًا مصروف: اقتصاد واحد ومحاسبتان، وبوابتا التحديد والسيطرة تفسران السبب" },
        { en: "IAS 36 — the annual-test trio (goodwill · indefinite life · not yet available) and the recoverable-amount cap for every intangible", ar: "IAS 36 — الثلاثي السنوي (الشهرة · غير محدد العمر · غير الجاهز بعد) وسقف المبلغ القابل للاسترداد لكل غير ملموس" },
        { en: "IAS 16 — the revaluation-model machinery is shared, but IAS 38 demands an ACTIVE MARKET as its price of admission", ar: "IAS 16 — آلية نموذج إعادة التقييم مشتركة، لكن IAS 38 يشترط سوقًا نشطة ثمنًا للقبول" },
        { en: "IAS 23 — a borrowing-funded development programme is a QUALIFYING asset: interest capitalises inside the intangible while the build runs", ar: "IAS 23 — برنامج التطوير الممول باقتراض أصل مؤهل: ترسمل الفائدة داخل غير الملموس ما دام البناء جاريًا" },
        { en: "IAS 20 — a government-granted intangible may be measured at nominal consideration plus directly attributable costs", ar: "IAS 20 — يجوز قياس غير الملموس الممنوح حكوميًا بمقابل رمزي مضافًا إليه التكاليف المباشرة" },
        { en: "IFRS 16 / SaaS boundary — a leasehold right can be an intangible, but configuration and customisation of the vendor's cloud software never are", ar: "IFRS 16 / حد SaaS — حق الانتفاع بعقد إيجار قد يكون غير ملموس، أما إعداد وتخصيص برمجية المزود السحابية فأبدًا" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The exam PIRATE acronym: Probable · Intention · Ability to use/sell · Resources · Technical feasibility · Expenditure measurable — say all six, ALL met, BEFORE the development phase's capitalisation starts (not when the project ends).",
        ar: "اختصار PIRATE الامتحاني: منافع مرجحة · نية · قدرة استخدام/بيع · موارد · جدوى فنية · قابلية قياس الإنفاق — قلها الستة متحققة قبل بدء رسملة التطوير لا عند انتهاء المشروع.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "A brand acquired in a business combination = intangible at fair value; the SAME brand boosted by internal advertising = never an asset. Same economics, opposite accounting — the control + identifiability gates explain it.",
        ar: "علامة مقتناة باندماج = أصل غير ملموس بالقيمة العادلة؛ والعلامة ذاتها المدعومة بدعاية داخلية = ليست أصلًا أبدًا. اقتصاد واحد ومحاسبتان — تفسرها بوابتا السيطرة والتحديد.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The most-tested sentence in IAS 38: research is ALWAYS expensed — even when it produced the winning molecule, even on the brink of product launch. Only DEVELOPMENT spend (all six criteria met) is ever capitalised.",
        ar: "أشهر جملة في IAS 38: البحث يحمَّل مصروفًا دائمًا — ولو أنتج الجزيء الفائز، ولو على وشك إطلاق المنتج. ولا يرسمل قط إنفاق التطوير (بتحقق المعايير الستة) فحسب.",
      },
    },
    {
      kind: "note",
      text: {
        en: "No post-commencement capitalisation: pre-opening / start-up costs are always expensed even when spent on an intangible being prepared.",
        ar: "لا رسملة لما بعد بدء العمليات: تكاليف ما قبل التشغيل (التأسيس) مصروف دائمًا حتى لو أُنفقت على أصل غير ملموس في طور الإعداد.",
      },
    },
  ],
}
