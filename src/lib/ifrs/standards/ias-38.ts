/** IAS 38 — Intangible Assets */

import type { Standard } from "../types"

export const IAS_38: Standard = {
  code: "IAS 38",
  title: { en: "Intangible Assets", ar: "الأصول غير الملموسة" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 2005 · amended 2024 (business-restructuring charges)", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل ٢٠٢٤ (تكاليف إعادة هيكلة الأعمال)" },
  blocks: [
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
          then: { en: "Recognise when the recognition criteria (probable benefit + reliable cost) are ALSO met", ar: "يُعترف عند تحقق شرطي الاعتراف (منفعة مرجحة + تكلفة قابلة للقياس الموثوق) أيضًا", red: true },
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
      kind: "list",
      items: [
        { en: "SEPARATE acquisition: cost = purchase price + import duties + directly attributable expenditure (installation, professional fees, testing) — probability criterion always PRESUMED met", ar: "الاقتناء المنفصل: التكلفة = الثمن + الرسوم + المصروفات المباشرة (تركيب، أتعاب، اختبار) — ومعيار الترجيح مفترض متحققًا" },
        { en: "BUSINESS COMBINATION: cost = acquisition-date FAIR VALUE — even in-process research and development projects count as intangibles (IFRS 3 recognises them apart from goodwill)", ar: "الاندماج التجاري: التكلفة = القيمة العادلة بتاريخ الاستحواذ — حتى مشروعات البحث والتطوير الجارية أصول غير ملموسة منفصلة عن الشهرة" },
        { en: "GOVERNMENT GRANT: nominal consideration or fair value + directly attributable costs (IAS 20 election)", ar: "منحة حكومية: مقابل رمزي أو القيمة العادلة + تكاليف مباشرة (اختيار IAS 20)" },
        { en: "EXCHANGE of assets: at fair value unless the exchange lacks commercial substance or fair value is not reliably measurable", ar: "مقايضة أصول: بالقيمة العادلة ما لم يفتقد الجوهر التجاري أو يتعذر قياسها موثوقًا" },
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
      kind: "example",
      title: { en: "R&D split worked", ar: "فصل البحث والتطوير" },
      lines: [
        { en: "Pharma project: 400 spent finding the molecule (research) + 600 on trials, regulatory approval and production design (development, criteria met before spending)", ar: "مشروع دوائي: ٤٠٠ لاكتشاف الجزيء (بحث) + ٦٠٠ للتجارب والموافقات وتصميم الإنتاج (تطوير تحققت معاييره قبل الصرف)" },
        { en: "Balance sheet: intangible 600 · P&L expense 400", ar: "الميزانية: أصل غير ملموس ٦٠٠ · المصروف ٤٠٠" },
        { en: "If the trials FAIL later: the 600 is impaired (IAS 36), not 'reversed into expense' — and the spent 400 stays expensed forever", ar: "إن فشلت التجارب لاحقًا: يُنقص الأصل ٦٠٠ وفق IAS 36 ولا يعود مصروفًا — والـ٤٠٠ تبقى مصروفًا أبدًا" },
        { en: "Start-up costs, staff training, advertising & promotion: expensed even during the development phase", ar: "تكاليف التأسيس وتدريب العاملين والدعاية: مصروفات حتى في مرحلة التطوير" },
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
    { kind: "h", text: { en: "Amortisation & the pattern", ar: "الاستنفاد ونمطه" },
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
    { kind: "h", text: { en: "Derecognition", ar: "الاستبعاد" } },
    {
      kind: "p",
      text: {
        en: "Derecognise on DISPOSAL or when no future benefits are expected — the gain/loss (net disposal proceeds − carrying amount) goes to P&L. Future operating costs of the activity the intangible supported are NOT part of the asset's carrying amount — they are liabilities/provisions if obligations arise. Donations and 'abandonment' are expensed/derecognised with no salvage imagination.",
        ar: "يستبعد الأصل عند التخرد أو انتفاء المنافع — والربح/الخسارة (صافي المتحصلات − الدفترية) للأرباح. وتكاليف التشغيل المستقبلية للنشاط ليس جزءًا من الدفترية بل التزامات/مخصصات إذا نشأت. والتبرع والتخلي يستبعدان دون افتراض قيمة إنقاذ متخيلة.",
      },
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
      kind: "note",
      text: {
        en: "No post-commencement capitalisation: pre-opening / start-up costs are always expensed even when spent on an intangible being prepared.",
        ar: "لا رسملة لما بعد بدء العمليات: تكاليف ما قبل التشغيل (التأسيس) مصروف دائمًا حتى لو أُنفقت على أصل غير ملموس في طور الإعداد.",
      },
    },
  ],
}
