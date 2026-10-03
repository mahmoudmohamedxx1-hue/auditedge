/** IAS 20 — Government Grants and Disclosure of Government Assistance */

import type { Standard } from "../types"

export const IAS_20: Standard = {
  code: "IAS 20",
  title: { en: "Government Grants and Disclosure of Government Assistance", ar: "منح الحكومة والإفصاح عن المساعدات الحكومية" },
  topic: "revenue",
  effective: { en: "Effective 1 Jan 1984 · IAS 41 grants follow the same model", ar: "سارٍ من ١ يناير ١٩٨٤ · منح النشاط الزراعي تتبع النموذج ذاته" },
  blocks: [
    { kind: "h", text: { en: "Objective & core principle", ar: "الهدف والمبدأ الأساسي" } },
    {
      kind: "p",
      text: {
        en: "Government GRANTS are assistance in cash or kind for a consideration that is significantly less than the value given — in exchange for the entity agreeing to operate under certain conditions (e.g. employ X people for Y years). Government ASSISTANCE is broader (technical advice, free guarantees) and disclosed, not recognised. Grants are NEVER credit-to-equity by default: IAS 20's core rule is systematic income recognition matched to the related COSTS.",
        ar: "المنح الحكومية مساعدة نقدية أو عينية مقابل يقل جوهريًا عن القيمة الممنوحة — مقابل التزام المنشأة بشروط معينة (توظيف عدد لمدة، مثلًا). والمساعدة الحكومية أوسع (مشورة فنية، ضمانات مجانية) تفصح ولا تعترف. والمنح لا تقيَّد في حقوق الملكية أصلًا: قاعدة IAS 20 الأساسية اعتراف الدخل المنتظم مقارنةً بالتكاليف ذاتها.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The engine in one line: no equity credit, no day-one windfall — the grant rides to P&L on the SAME journey as the costs or assets it funds.",
        ar: "المحرك في سطر واحد: لا قيد في حقوق الملكية ولا ريح في اليوم الأول — فالمنحة تركب إلى الأرباح في الرحلة ذاتها التي تسافرها التكاليف أو الأصول التي تمولها.",
      },
    },
    {
      kind: "p",
      text: {
        en: "WHY the no-equity rule? Because government is not an owner: it contributes no capital and seeks no residual interest — it PAYS the entity to behave a certain way (employ, build, research, relocate). Income earned by complying with conditions is income, not contributed capital; allowing an equity credit would hide the benefit from performance reporting forever. That logic also drives the timing rules: the benefit is earned as the related costs or assets are consumed — so the income follows them.",
        ar: "لماذا قاعدة عدم المساس بحقوق الملكية؟ لأن الحكومة ليست مالكًا: فهي لا تقدم رأسمالًا ولا تطلب حقًا متبقيًا — بل تدفع للمنشأة كي تتصرف وجهة معينة (توظّف، تبني، تبحث، تنتقل). والدخل المكتسب بالاستيفاء دخل لا رأسمال مُسهم به؛ وقبوله في حقوق الملكية كان سيخفي المنفعة عن تقارير الأداء أبدًا. وهذا المنطق ذاته يقود قواعد التوقيت: فالمنفعة تكتسب مع استهلاك التكاليف أو الأصول ذات الصلة — فيتبعها الدخل.",
      },
    },
    { kind: "h", text: { en: "Key definitions", ar: "التعاريف الأساسية" } },
    {
      kind: "p",
      text: {
        en: "GOVERNMENT is wide: national, regional, local, and agencies acting for them — plus international bodies where the IFRS definitions fit. A grant's identity turns on its PURPOSE: grants related to ASSETS fund the purchase or construction of long-lived assets; grants related to INCOME defray specific costs or immediately support the P&L. The FORGIVABLE LOAN sits in between: it wears a loan's clothes but becomes a grant the moment forgiveness is reasonably assured. And assistance too vague to value (free advice, guarantees) never enters the ledger — it lives in the notes.",
        ar: "«الحكومة» لفظ عريض: وطنية وإقليمية ومحلية وهيئات تنوب عنها — والهيئات الدولية حيث تلائم التعاريف. وهوية المنحة رهن غايتها: فالمنح المرتبطة بالأصول تمول اقتناء أو إنشاء أصول طويلة العمر؛ والمنح المرتبطة بالدخل تخفف تكاليف بعينها أو تسند الأرباح فورًا. والقرض القابل للإبراء يقف بينهما: يلبس ثوب القرض لكنه يصير منحة لحظة ما يصير الإبراء مرجحًا معقولًا. والمساعدة التي يتعذر تقديرها (مشورة مجانية، ضمانات) لا تدع الدفاتر أصلًا — بل تسكن الإيضاحات.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "GOVERNMENT — government, government agencies and similar bodies whether local, national or international", ar: "الحكومة — الحكومة وهيئاتها والهيئات المماثلة محليةً كانت أم وطنية أم دولية" },
        { en: "GOVERNMENT ASSISTANCE — action by government to provide an economic benefit (cash, services, guarantees); broader than grants and often DISCLOSED-ONLY", ar: "المساعدة الحكومية — تصرف حكومي يقدم منفعة اقتصادية (نقد، خدمات، ضمانات)؛ أوسع من المنح وكثيرًا إفصاحًا فحسب" },
        { en: "GOVERNMENT GRANTS — assistance for consideration significantly less than the value given, in exchange for past or future compliance with conditions", ar: "المنح الحكومية — مساعدة مقابل يقل جوهريًا عن القيمة الممنوحة، مقابل التزام حالّ أو مستقبلي بشروط" },
        { en: "GRANTS RELATED TO ASSETS — grants whose receipt is conditional on buying, building or acquiring long-term assets", ar: "المنح المرتبطة بأصول — منح يشترط استلامها اقتناء أو إنشاء أصول طويلة الأجل" },
        { en: "GRANTS RELATED TO INCOME — grants other than asset-related (defraying expenses, supporting the P&L)", ar: "المنح المرتبطة بالدخل — ما سوى المرتبط بالأصول (تخفيف المصروفات، إسناد الأرباح)" },
        { en: "FORGIVABLE LOAN — a loan the lender undertakes to waive if agreed conditions are met", ar: "القرض القابل للإبراء — قرض يتعهد المقرض بإسقاطه متى استُوفت الشروط المتفق عليها" },
      ],
    },
    { kind: "h", text: { en: "Recognition — the two conditions", ar: "الاعتراف — الشرطان" } },
    {
      kind: "tree",
      root: { en: "A grant is recognised when…", ar: "يُعترف بالمنحة عند…" },
      branches: [
        {
          when: { en: "Reasonable assurance that the CONDITIONS attached will be met AND the grant will be RECEIVED (not before the terms agreed & the assurance exists)", ar: "ترجيح معقول استيفاء الشروط المرتبطة واستلام المنحة (لا قبل اتفاق الشروط وتوافر الترجيح)" },
          then: { en: "Recognise — do NOT wait for cash; a forgivable loan follows the same test", ar: "اعترف — ولا تنتظر النقد؛ والقرض القابل للإبراء يتبع الاختبار ذاته", red: true },
        },
        {
          when: { en: "Grants compensating EXPENSES ALREADY INCURRED or giving immediate financial support with no future costs", ar: "منح تعوض مصروفات تكبدت بالفعل أو دعمًا فوريًا بلا تكاليف مستقبلية" },
          then: { en: "Income IMMEDIATELY (when receivable) — no deferral", ar: "دخل فوريًا (عند الاستحقاق) — بلا تأجيل", red: true },
        },
        {
          when: { en: "Grants related to INCOME (matching specific costs like wages, energy, R&D)", ar: "منح مرتبطة بالدخل (مقابلة تكاليف بعينها: أجور، طاقة، بحث)" },
          then: { en: "Systematic income over the periods the costs are incurred", ar: "دخل منتظم عبر فترات تكبد التكاليف", red: true },
        },
        {
          when: { en: "Grants related to ASSETS (funding the purchase/construction of PPE, intangibles)", ar: "منح مرتبطة بأصول (تمويل اقتناء أو إنشاء ممتلكات وغير ملموسة)" },
          then: { en: "Two permitted presentations: DEFERRED INCOME (released over the asset's life) OR deduct from the ASSET'S CARRYING AMOUNT — both give the same P&L", ar: "عرضان جائزان: دخل مؤجل (يستنزف عبر عمر الأصل) أو خصم من القيمة الدفترية للأصل — وكلاهما يعطي الأرباح ذاتها", red: true },
        },
      ],
    },
    {
      kind: "steps",
      title: { en: "The recognition sequence", ar: "تسلسل الاعتراف" },
      items: [
        { en: "IDENTIFY the grant and its conditions: asset-related, income-related, or compensating costs already incurred", ar: "حدد المنحة وشروطها: مرتبطة بأصل، أو بالدخل، أو معوضة لتكاليف تكبدت" },
        { en: "Assess REASONABLE ASSURANCE of compliance and receipt — the recognition date follows the assurance, NOT the cash", ar: "قدّر الترجيح المعقول للاستيفاء والاستلام — فتاريخ الاعتراف يتبع الترجيح لا النقد" },
        { en: "CHOOSE the presentation route: deferred income vs asset-deduction (asset grants) · separate line vs netting (income grants) — a policy per class, applied consistently and disclosed", ar: "اختر مسار العرض: دخل مؤجل مقابل خصم الأصل (منح الأصول) · سطر مستقل مقابل المقاصة (منح الدخل) — سياسة لكل فئة تطبق بثبات وتفصح" },
        { en: "RECOGNISE a receivable (or cash) against deferred income, and release the income systematically as the costs/depreciation unwind", ar: "اعترف بمستحق (أو نقد) مقابل دخل مؤجل، واستنزف الدخل انتظامًا مع انطواء التكاليف/الإهلاك" },
        { en: "On any breach of conditions: run the REPAYMENT machinery (below)", ar: "عند أي إخلال بالشروط: شغّل آلية الرد (أدناه)" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "THE date trap: a grant is recognised when the two conditions are reasonably assured — COMPLIANCE evidence, not the cash date. A December assurance with January cash is THIS year's grant; January assurance with December cash received early is still nothing (a deposit-liability question, not income).",
        ar: "فخ التاريخ: تعترف المنحة عند الترجيح المعقول للشرطين — بدليل الاستيفاء لا بتاريخ النقد. فترجيح في ديسمبر مع نقد في يناير منحة السنة الحالية؛ وترجيح في يناير مع نقد مبكر في ديسمبر لا يزال بلا اعتراف (مسألة التزام عربون لا دخل).",
      },
    },
    { kind: "h", text: { en: "Grants related to income", ar: "المنح المرتبطة بالدخل" } },
    {
      kind: "p",
      text: {
        en: "An income grant is recognised in P&L over the periods in which the entity recognises the COSTS the grant is intended to offset — the matching engine. When the grant compensates costs already incurred, or arrives as immediate financial support with no related future cost, income is immediate: there is nothing left to match. Presentation is a disclosed choice: a separate income line (preferred — it shows the scale of government support) or a deduction from the related expense.",
        ar: "تعترف منحة الدخل بالأرباح عبر الفترات التي تعترف فيها المنشأة بالتكاليف المقصود تعويضها — محرك المقابلة. فإذا عوضت المنحة تكاليف تكبدت، أو جاءت دعمًا فوريًا بلا تكلفة مستقبلية ذات صلة، فالدخل فوري: فلا يبقى شيء يُقابَل. والعرض خيار مفصح عنه: سطر دخل مستقل (أفضل — فيُظهر حجم الدعم الحكومي) أو خصم من المصروف ذي الصلة.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Presentation of income-grants (the 2021 tightening): EITHER present as income on a SEPARATE line or DEDUCT from the related expense — choose a policy per grant class, apply consistently, and DISCLOSE the choice. The 'separate line' is generally preferred because netting hides the magnitude of government support from performance analysis.",
        ar: "عرض منح الدخل (تشديد ٢٠٢١): إما سطر دخل مستقل أو خصم من المصروف ذي الصلة — سياسة لكل فئة منح تطبق بثبات مع الإفصاح عنها. والسطر المستقل أفضل عمومًا لأن المقاصة تخفي حجم الدعم الحكومي عن تحليل الأداء.",
      },
    },
    {
      kind: "journal",
      title: { en: "Income grant — receivable then release", ar: "منحة دخل — مستحق ثم استنزاف" },
      rows: [
        { dr: { en: "Grant receivable / cash", ar: "منحة مستحقة / نقد" }, cr: { en: "Deferred income (until the related costs are incurred)", ar: "دخل مؤجل (حتى تكبد التكاليف ذات الصلة)" }, red: true },
        { dr: { en: "Deferred income", ar: "دخل مؤجل" }, cr: { en: "Grant income (P&L) — released as each cost is recognised", ar: "دخل المنحة (بالأرباح) — يستنزف مع الاعتراف بكل تكلفة" }, red: true },
        { dr: { en: "(compensating costs already incurred? skip the deferral — straight to income)", ar: "(تعوض تكاليف تكبدت؟ تجاوز التأجيل — إلى الدخل مباشرةً)" } },
      ],
    },
    {
      kind: "tree",
      title: { en: "Which release pattern?", ar: "أي نمط استنزاف؟" },
      root: { en: "The grant is recognised — when does it reach P&L?", ar: "اعتُرف بالمنحة — متى تبلغ الأرباح؟" },
      branches: [
        {
          when: { en: "It compensates costs ALREADY INCURRED (or pure immediate support)", ar: "تعوض تكاليف تكبدت بالفعل (أو دعمًا فوريًا خالصًا)" },
          then: { en: "IMMEDIATE income — nothing left to match", ar: "دخل فوري — فلا شيء يبقى ليُقابَل", red: true },
        },
        {
          when: { en: "Income grant for FUTURE costs (wages, energy, R&D)", ar: "منحة دخل لتكاليف مستقبلية (أجور، طاقة، بحث وتطوير)" },
          then: { en: "Systematic release across the periods the matching costs are recognised", ar: "استنزاف منتظم عبر فترات الاعتراف بالتكاليف المقابلة", red: true },
        },
        {
          when: { en: "Asset grant, route A (deferred income)", ar: "منحة أصل، المسار أ (دخل مؤجل)" },
          then: { en: "Release MIRRORS the depreciation — a straight-line asset gives a straight-line grant", ar: "استنزاف يعكس الإهلاك — فالأصل ذو القسط الثابت يعطي منحة بقسط ثابت", red: true },
        },
        {
          when: { en: "Asset grant, route B (deduction from the asset)", ar: "منحة أصل، المسار ب (الخصم من الأصل)" },
          then: { en: "The grant reaches P&L INSIDE the lower depreciation line — no separate income at all", ar: "تبلغ المنحة الأرباح داخل سطر الإهلاك الأدنى — بلا سطر دخل مستقل أصلًا", red: true },
        },
      ],
    },
    {
      kind: "example",
      title: { en: "Income grant — the split second", ar: "منحة دخل — لحظة الفصل" },
      lines: [
        { en: "A 500 grant compensates an R&D programme: 300 of qualifying costs were already incurred at the assurance date, 200 of work remains", ar: "منحة ٥٠٠ تعوض برنامج بحث وتطوير: ٣٠٠ من التكاليف المؤهلة تكبدت قبل تاريخ الترجيح، و٢٠٠ من العمل متبقية" },
        { en: "Income immediately: 300 (costs already incurred) · deferred income: 200 (released as the remaining costs are recognised)", ar: "دخل فوري: ٣٠٠ (تكاليف متكبدة) · دخل مؤجل: ٢٠٠ (يستنزف مع الاعتراف بالتكاليف المتبقية)" },
        { en: "A grant with no attached costs — pure financial support → 100% immediate income when receivable", ar: "منحة بلا تكاليف مرتبطة — دعم مالي خالص ← دخل فوري كامل عند الاستحقاق" },
      ],
    },
    { kind: "h", text: { en: "Grants related to assets — the two routes", ar: "المنح المرتبطة بالأصول — المساران" } },
    {
      kind: "p",
      text: {
        en: "An asset grant may be presented EITHER as DEFERRED INCOME released to P&L over the asset's life (route A) OR as a DEDUCTION from the asset's carrying amount (route B) — the same total P&L, different balance-sheet optics: route A shows a grosser asset and a liability-side credit; route B shows a leaner asset whose smaller depreciation quietly delivers the grant. The route is a policy choice per grant class, consistently applied; once depreciation starts, the release mirrors the depreciation pattern, and any revaluation or impairment of the asset forces a recomputed release.",
        ar: "يجوز عرض منحة الأصل إما دخلًا مؤجلًا يستنزف بالأرباح عبر عمر الأصل (المسار أ) أو خصمًا من القيمة الدفترية للأصل (المسار ب) — الأرباح الكلية ذاتها والصورة الميزانية مختلفة: فالمسار أ يُظهر أصلًا أكبر وائتمانًا في جانب الالتزامات؛ والمسار ب أصلًا أنحف يوصل المنحة بهدوء عبر إهلاكه الأصغر. والمسار خيار سياسة لكل فئة منح يطبق بثبات؛ ومتى بدأ الإهلاك عكس الاستنزاف نمط الإهلاك، وأي إعادة تقييم أو انخفاض للأصل تفرض إعادة حساب النمط.",
      },
    },
    {
      kind: "journal",
      title: { en: "Route A — deferred income", ar: "المسار أ — الدخل المؤجل" },
      rows: [
        { dr: { en: "Cash / grant receivable", ar: "نقد / منحة مستحقة" }, cr: { en: "Deferred income 600", ar: "دخل مؤجل ٦٠٠" }, red: true },
        { dr: { en: "Deferred income (release as the asset depreciates: 600 ÷ 10 = 60/yr)", ar: "دخل مؤجل (استنزاف مع إهلاك الأصل: ٦٠٠ ÷ ١٠ = ٦٠ سنويًا)" }, cr: { en: "Grant income (P&L) 60", ar: "دخل المنحة (بالأرباح) ٦٠" }, red: true },
      ],
    },
    {
      kind: "journal",
      title: { en: "Route B — deduction from the asset", ar: "المسار ب — الخصم من الأصل" },
      rows: [
        { dr: { en: "PPE 2,000", ar: "ممتلكات ٢٬٠٠٠" }, cr: { en: "Payables / cash 2,000", ar: "دائنون / نقد ٢٬٠٠٠" } },
        { dr: { en: "Cash / grant receivable 600", ar: "نقد / منحة مستحقة ٦٠٠" }, cr: { en: "PPE — cost reduction 600", ar: "ممتلكات — خفض التكلفة ٦٠٠" }, red: true },
        { cr: { en: "Net cost 1,400 → depreciation 140/yr: the grant reaches P&L inside the LOWER depreciation line", ar: "التكلفة الصافية ١٬٤٠٠ ← إهلاك ١٤٠ سنويًا: تصل المنحة للأرباح داخل سطر الإهلاك الأدنى" }, red: true },
      ],
    },
    {
      kind: "formula",
      title: { en: "Grant amortisation mechanics", ar: "ميكانيكا استنزاف المنحة" },
      lines: [
        { en: "Release (straight-line) = grant ÷ useful life of the funded asset", ar: "الاستنزاف (القسط الثابت) = المنحة ÷ العمر الإنتاجي للأصل الممول" },
        { en: "Release (mirroring) = grant × (depreciation of the period ÷ total depreciable amount)", ar: "الاستنزاف (المرآة) = المنحة × (إهلاك الفترة ÷ إجمالي المبلغ القابل للإهلاك)" },
        { en: "Route B net base = cost − grant → depreciation charged on the NET amount", ar: "وعاء المسار ب الصافي = التكلفة − المنحة ← والإهلاك على المبلغ الصافي" },
        { en: "Repayment: unamortised deferred income absorbs first · any excess = immediate expense (route A) or a restated asset cost (route B)", ar: "الرد: يستوعب الدخل المؤجل غير المستنزف أولًا · والزيادة مصروف فوري (المسار أ) أو تكلفة أصل معاد تقييمها (المسار ب)" },
      ],
    },
    {
      kind: "example",
      title: { en: "Asset grant worked both ways", ar: "منحة أصل بالطريقتين" },
      lines: [
        { en: "Grant 600 for a machine costing 2,000 (10-year life, straight-line)", ar: "منحة ٦٠٠ لآلة بتكلفة ٢٬٠٠٠ (عمر ١٠ سنوات، قسط ثابت)" },
        { en: "Route A: asset 2,000 · deferred income 600 → annual depreciation 200 and grant income 60 → net P&L −140/yr", ar: "المسار أ: أصل ٢٬٠٠٠ ودخل مؤجل ٦٠٠ ← إهلاك ٢٠٠ ودخل منحة ٦٠ ← أثر صافٍ ١٤٠ سنويًا" },
        { en: "Route B: asset 1,400 → annual depreciation 140 → identical net P&L; different B/S optics", ar: "المسار ب: أصل ١٬٤٠٠ ← إهلاك ١٤٠ ← الأثر ذاته؛ وتبقى الصورة الميزانية مختلفة" },
        { en: "Depreciation method/rate for grant release = mirror the asset's; a revaluation or impairment forces a recomputed release pattern", ar: "نسبة استنزاف المنحة تعكس إهلاك الأصل؛ وإعادة التقييم أو الانخفاض تفرض إعادة حساب النمط" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Both routes deliver the SAME net P&L — the exam asks you to prove it (depreciation 200 − grant income 60 = 140 = route B's depreciation on the net 1,400). What differs is the balance sheet: a 2,000 asset + deferred income 540 (route A) against a lean 1,400 asset (route B) in year one.",
        ar: "المساران يعطيان الأرباح الصافية ذاتها — والممتحن يطلب البرهان (إهلاك ٢٠٠ − دخل منحة ٦٠ = ١٤٠ = إهلاك المسار ب على الصافي ١٬٤٠٠). والمختلف هو الميزانية: أصل ٢٬٠٠٠ + دخل مؤجل ٥٤٠ (المسار أ) مقابل أصل أنحف ١٬٤٠٠ (المسار ب) في السنة الأولى.",
      },
    },
    { kind: "h", text: { en: "Non-monetary grants", ar: "المنح غير النقدية" } },
    {
      kind: "p",
      text: {
        en: "When government hands over LAND, materials or other non-cash assets, both the asset and the grant are normally measured at FAIR VALUE — with a permitted alternative of a NOMINAL amount plus disclosure when fair value cannot be reliably measured. The two routes (deferred income or deduction) then apply exactly as for cash grants; an interest-free lease of land from government is assistance too — disclose its nature, extent and terms.",
        ar: "حين تسلّم الحكومة أرضًا أو مواد أو أصولًا غير نقدية أخرى، يقاس الأصل والمنحة معًا بالقيمة العادلة عادةً — مع بديل جائز بمبلغ رمزي مع الإفصاح عند تعذر القياس الموثوق. ثم يطبق المساران (الدخل المؤجل أو الخصم) كما لمنح النقد تمامًا؛ واستئجار أرض حكومية بلا مقابل مساعدة أيضًا — أفصح عن طبيعتها وامتدادها وشروطها.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Non-monetary (land, materials given free): recognise BOTH the asset and the grant at FAIR VALUE — or a nominal amount with disclosure, for unverifiable FV", ar: "غير النقدية (أرض، مواد مجانية): يعترف بالأصل والمنحة معًا بالقيمة العادلة — أو بمبلغ رمزي مع الإفصاح عند تعذر التحقق" },
        { en: "A preferential loan rate, an interest-free land lease, free technical or market advice, guarantees: ASSISTANCE — disclose, don't recognise (unless it qualifies as a grant like the below-market loan)", ar: "معدل قرض تفضيلي، أو استئجار أرض بلا مقابل، أو مشورة فنية وتسويق مجانية، أو ضمانات: مساعدة — أفصح ولا تعترف (إلا أن تتأهل منحةً كالقرض دون السوق)" },
      ],
    },
    { kind: "h", text: { en: "Government loans at below-market interest", ar: "القروض الحكومية بمعدل دون السوق" } },
    {
      kind: "p",
      text: {
        en: "A government loan at a below-market rate hides a grant inside its terms: measure the loan at FAIR VALUE under IFRS 9 (the discounted value of the below-market contractual flows) and the difference from the proceeds received is the GOVERNMENT GRANT — deferred income released as the related borrowing costs are recognised. The two engines stay separate: IFRS 9 runs the liability's interest; IAS 20 runs the embedded benefit.",
        ar: "القرض الحكومي بمعدل دون السوق يخفي منحة في ثنايا شروطه: قِس القرض بالقيمة العادلة وفق IFRS 9 (القيمة الحالية للتدفقات التعاقدية دون السوق) ويكون الفرق عن المتحصلات هو المنحة الحكومية — دخلًا مؤجلًا يستنزف مع الاعتراف بتكاليف الاقتراض ذات الصلة. وتبقى المحركان منفصلين: فـIFRS 9 يدير فوائد الالتزام، وIAS 20 يدير المنفعة الكامنة.",
      },
    },
    {
      kind: "journal",
      title: { en: "Below-market loan — split the instrument", ar: "قرض دون السوق — فكك الأداة" },
      rows: [
        { dr: { en: "Cash 1,000 (proceeds)", ar: "نقد ١٬٠٠٠ (المتحصلات)" }, cr: { en: "Financial liability 751 (fair value under IFRS 9)", ar: "التزام مالي ٧٥١ (القيمة العادلة وفق IFRS 9)" }, red: true },
        { cr: { en: "Deferred income 249 — the government-grant element", ar: "دخل مؤجل ٢٤٩ — عنصر المنحة الحكومية" }, red: true },
        { dr: { en: "Finance cost (10% effective on the 751: 75 / 83 / 91 over the three years)", ar: "مصروف تمويل (١٠٪ فعليًا على الـ٧٥١: ٧٥ / ٨٣ / ٩١ عبر السنوات الثلاث)" }, cr: { en: "Financial liability", ar: "التزام مالي" } },
        { dr: { en: "Deferred income", ar: "دخل مؤجل" }, cr: { en: "Grant income — released as the borrowing costs are recognised", ar: "دخل المنحة — يستنزف مع الاعتراف بتكاليف الاقتراض" }, red: true },
      ],
    },
    {
      kind: "example",
      title: { en: "The 0% loan worked", ar: "القرض بفائدة صفرية بالأرقام" },
      lines: [
        { en: "Government lends 1,000 interest-free for 3 years · market rate 10% → fair value = 1,000 ÷ 1.331 = 751", ar: "تقرض الحكومة ١٬٠٠٠ بلا فوائد لثلاث سنوات · معدل السوق ١٠٪ ← القيمة العادلة = ١٬٠٠٠ ÷ ١٫٣٣١ = ٧٥١" },
        { en: "Grant element = 1,000 − 751 = 249 → deferred income", ar: "عنصر المنحة = ١٬٠٠٠ − ٧٥١ = ٢٤٩ ← دخل مؤجل" },
        { en: "Liability accretes at 10%: 751 → 826 → 909 → 1,000 (finance costs 75 + 83 + 91 = 249)", ar: "ينمو الالتزام بـ١٠٪: ٧٥١ ← ٨٢٦ ← ٩٠٩ ← ١٬٠٠٠ (تكاليف تمويل ٧٥ + ٨٣ + ٩١ = ٢٤٩)" },
        { en: "The grant's release tracks the borrowing costs — the net P&L cost of the loan is nil, which is the economics of a gift dressed as a loan", ar: "استنزاف المنحة يتتبع تكاليف الاقتراض — فالكلفة الصافية بالأرباح صفر، وهذا اقتصاد هدية بثوب قرض" },
      ],
    },
    { kind: "h", text: { en: "Forgivable loans", ar: "القروض القابل للإبراء" } },
    {
      kind: "p",
      text: {
        en: "A loan the government undertakes to waive when conditions are met is treated as a GOVERNMENT GRANT once there is reasonable assurance the conditions will be satisfied — the 2020–21 wave of government support (paycheck-protection-style programmes, with the AICPA and IFRIC-era clarifications) put this rule back on every exam. Until the assurance exists, it is a loan: recognise the liability, recognise nothing as income. When assurance arrives, re-route: derecognise the liability into deferred income and run the grant machinery (asset grant or income grant by its substance).",
        ar: "القرض الذي تتعهد الحكومة بإسقاطه متى استُوفت الشروط يعامل منحة حكومية متى وُجد ترجيح معقول باستيفاء الشروط — وقد أعادت موجة الدعم الحكومي ٢٠٢٠–٢١ (برامج حماية الأجور وما صاحبها من توضيحات) هذه القاعدة إلى كل امتحان. وقبل قيام الترجيح هو قرض: اعترف بالالتزام ولا تعترف بأي دخل. فإذا قام الترجيح أعِد التوجيه: فك الاعتراف بالالتزام إلى دخل مؤجل وشغّل آلية المنح (منحة أصل أو دخل بحسب جوهرها).",
      },
    },
    {
      kind: "journal",
      title: { en: "Forgivable loan — the re-route", ar: "القرض القابل للإبراء — إعادة التوجيه" },
      rows: [
        { dr: { en: "Cash 500", ar: "نقد ٥٠٠" }, cr: { en: "Loan liability 500 (it starts life as debt)", ar: "التزام قرض ٥٠٠ (يبدأ حياته دينًا)" } },
        { dr: { en: "Loan liability 500 (on reasonable assurance of meeting the forgiveness conditions)", ar: "التزام القرض ٥٠٠ (عند الترجيح المعقول لاستيفاء شروط الإبراء)" }, cr: { en: "Deferred income 500 — now a government grant", ar: "دخل مؤجل ٥٠٠ — صار منحة حكومية" }, red: true },
        { cr: { en: "Then release by substance: over the cost periods (income grant) or the asset's life (asset grant)", ar: "ثم الاستنزاف بالجوهر: عبر فترات التكاليف (منحة دخل) أو عمر الأصل (منحة أصل)" }, red: true },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Do not book the forgivable loan as income on receipt: the cash date is a financing event; the ASSURANCE date is the grant event — the two can be quarters apart.",
        ar: "لا تقيد القرض القابل للإبراء دخلًا عند الاستلام: فتاريخ النقد حدث تمويلي؛ وتاريخ الترجيح حدث المنحة — وقد تفصل بينهما فصول.",
      },
    },
    { kind: "h", text: { en: "Repayment — when conditions are breached", ar: "الرد — عند الإخلال بالشروط" } },
    {
      kind: "p",
      text: {
        en: "A repayment is NOT an error correction and never rewrites history: the grant was properly recognised on the facts then known, and the breach is a NEW event handled prospectively. The arithmetic order matters — absorb the repayment against what is still unrecognised (deferred income or the asset's cost) before touching P&L, so the income statement only ever sees the shortfall. A route-B repayment restates the asset upward and recomputes depreciation prospectively — which may in turn force an impairment review of the heavier carrying amount.",
        ar: "الرد ليس تصحيح خطأ ولا يعيد كتابة التاريخ: فالمنحة اعتُرفت سليمةً على وقائع زمانها، والإخلال حدث جديد يعالج مستقبليًا. وترتيب الحساب مهم — استوعب الرد مما لم يعترف به بعد (دخل مؤجل أو تكلفة الأصل) قبل لمس الأرباح، فلا ترى قائمة الدخل إلا العجز. ورد المسار ب يرفع الأصل ويعيد حساب الإهلاك مستقبليًا — وقد يستدعي ذلك مراجعة انخفاض للدفترية الأثقل.",
      },
    },
    {
      kind: "steps",
      items: [
        { en: "Repaying a grant related to INCOME: first reduce any UNAMORTISED deferred income; any excess → expense immediately", ar: "رد منحة مرتبطة بالدخل: يخفض أولًا الدخل المؤجل غير المستنزف؛ والزيادة مصروف فورًا" },
        { en: "Repaying a grant related to ASSETS (route A): reduce the deferred income; route B: INCREASE the asset's carrying amount by the repayable amount", ar: "رد منحة مرتبطة بأصل (المسار أ): خفّض الدخل المؤجل؛ والمسار ب: زد القيمة الدفترية للأصل بمبلغ الرد" },
        { en: "The restated asset is depreciated prospectively over the remaining life — possibly triggering an impairment review of the heavier carrying amount", ar: "يعاد إهلاك الأصل المعاد تقييمه مستقبليًا على العمر المتبقي — مع مراجعة انخفاض قيمة محتملة للدفترية الأثقل" },
        { en: "IAS 41's biological-asset grants: a special override — immediate income when unconditional (see the agriculture sheet)", ar: "منح الأصول الحيوية وفق IAS 41: تجاوز خاص — دخل فوري إذا كانت غير مشروطة" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Grant repayment — both routes", ar: "رد المنحة — المساران" },
      rows: [
        { dr: { en: "Deferred income 480 (unamortised: 600 − 2 × 60)", ar: "دخل مؤجل ٤٨٠ (غير مستنزف: ٦٠٠ − ٢ × ٦٠)" }, cr: { en: "Cash 600", ar: "نقد ٦٠٠" } },
        { dr: { en: "Grant repayment expense (P&L) 120 — the excess", ar: "مصروف رد المنحة (بالأرباح) ١٢٠ — الزيادة" }, red: true },
        { dr: { en: "PPE 600 (route B: restore the asset's cost)", ar: "ممتلكات ٦٠٠ (المسار ب: إعادة تكلفة الأصل)" }, cr: { en: "Cash 600", ar: "نقد ٦٠٠" }, red: true },
        { cr: { en: "Route B aftermath: carrying 1,400 + 600 = 2,000 → depreciation recomputed over the remaining 8 years = 250/yr (was 140)", ar: "ما بعد المسار ب: الدفترية ١٬٤٠٠ + ٦٠٠ = ٢٬٠٠٠ ← الإهلاك معاد حسابه على ٨ سنوات متبقية = ٢٥٠ سنويًا (كان ١٤٠)" } },
      ],
    },
    { kind: "h", text: { en: "Disclosure essentials", ar: "أساسيات الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "The accounting policy adopted (income timing, asset-grant route, income presentation choice)", ar: "السياسة المحاسبية المعتمدة (توقيت الدخل ومسار منحة الأصل وخيار عرض الدخل)" },
        { en: "The nature & extent of grants recognised + unmet conditions & contingencies attached", ar: "طبيعة المنح المعترف بها وامتدادها + الشروط والالتزامات غير المستوفاة" },
        { en: "Government ASSISTANCE that could not be reasonably valued + other forms of assistance (technical advice, guarantees) — a pure disclosure list", ar: "المساعدات التي يتعذر تقديرها قيمتها + صور الدعم الأخرى (مشورة فنية، ضمانات) — قائمة إفصاح خالصة" },
      ],
    },
    { kind: "h", text: { en: "Is it a grant at all? — the boundary tree", ar: "أهي منحة أصلًا؟ — شجرة الحدود" } },
    {
      kind: "tree",
      root: { en: "Government help arrives — which standard owns it?", ar: "يصل دعم حكومي — أي معيار يملكه؟" },
      branches: [
        {
          when: { en: "The entity supplies goods or services to government at MARKET prices", ar: "المنشأة تورد الحكومة سلعًا أو خدمات بأسعار السوق" },
          then: { en: "IFRS 15 REVENUE — government as CUSTOMER, not benefactor", ar: "إيراد وفق IFRS 15 — الحكومة عميل لا محسن", red: true },
        },
        {
          when: { en: "The benefit rides inside a LEASE (a rent-free period from a government lessor)", ar: "المنفعة تركب داخل عقد إيجار (مهلة بلا إيجار من مؤجر حكومي)" },
          then: { en: "IFRS 16 lease incentive — never an IAS 20 grant", ar: "حافز إيجار وفق IFRS 16 — ليس منحة IAS 20 أبدًا", red: true },
        },
        {
          when: { en: "A loan at BELOW-MARKET interest", ar: "قرض بمعدل دون السوق" },
          then: { en: "IFRS 9 liability at fair value + IAS 20 GRANT for the difference", ar: "التزام وفق IFRS 9 بالقيمة العادلة + منحة وفق IAS 20 بالفرق", red: true },
        },
        {
          when: { en: "A loan the government will FORGIVE on conditions", ar: "قرض ستبرئه الحكومة عند شروط" },
          then: { en: "A GRANT when forgiveness is reasonably assured — until then, debt", ar: "منحة متى صار الإبراء مرجحًا معقولًا — وقبل ذلك دين", red: true },
        },
        {
          when: { en: "Free technical advice, market studies, guarantees of no measurable value", ar: "مشورة فنية مجانية، دراسات سوق، ضمانات لا قيمة قياسية لها" },
          then: { en: "GOVERNMENT ASSISTANCE — disclose the nature, extent and terms; recognise nothing", ar: "مساعدة حكومية — أفصح عن الطبيعة والامتداد والشروط؛ ولا اعتراف بشيء", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Interactions with the rest of the corpus", ar: "التقاطعات مع بقية المعايير" } },
    {
      kind: "list",
      items: [
        { en: "IAS 41 — biological-asset grants: income IMMEDIATELY once unconditional (the fair-value-model override of the deferral logic)", ar: "IAS 41 — منح الأصول الحيوية: دخل فوري متى صارت غير مشروطة (تجاوز نموذج القيمة العادلة لمنطق التأجيل)" },
        { en: "IAS 12 — deferred tax: a grant taxed on receipt but deferred in the books (or the reverse) creates a temporary difference; the deferred tax charge unwinds as the grant income is recognised", ar: "IAS 12 — ضريبة مؤجلة: المنحة الخاضعة للضريبة عند الاستلام والمؤجلة بالدفاتر (أو العكس) تنشئ فرقًا زمنيًا؛ ويُفك عبء الضريبة المؤجلة مع الاعتراف بدخل المنحة" },
        { en: "IFRS 16 — lease incentives (rent-free periods, contributions to fit-out) follow IFRS 16 even when the lessor is government", ar: "IFRS 16 — حوافز الإيجار (فترات بلا إيجار، مساهمات في التجهيز) تتبع IFRS 16 ولو كان المؤجر حكومة" },
        { en: "IFRS 15 — the government-as-customer boundary: market-price sales are revenue; only consideration significantly BELOW fair value is assistance", ar: "IFRS 15 — حد الحكومة-كعميل: البيع بسعر السوق إيراد؛ وما دون القيمة العادلة جوهريًا هو المساعدة وحدها" },
        { en: "IAS 34 — reasonable assurance arising MID-YEAR: recognise the grant in that interim period, not pro-rata by cash received", ar: "IAS 34 — ترجيح نشأ في منتصف السنة: اعترف بالمنحة في تلك الفترة المرحلية لا تناسبيًا بالنقد المستلم" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Never credit equity; never recognise before reasonable assurance; never dump an asset grant through P&L on day one (unless it compensates expenses already incurred). Those three 'nevers' answer most IAS 20 scenarios.",
        ar: "لا تقيَّد في حقوق الملكية؛ ولا اعتراف قبل الترجيح المعقول؛ ولا إسقاط منحة أصل بالأرباح في اليوم الأول (إلا أن تعوض مصروفات تكبدت). هذه الثلاثة «لا» تجيب معظم سيناريوهات IAS 20.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The 2021 amendment's exam line: the deduction-from-expense presentation is still allowed but must be a DISCLOSED policy choice applied consistently — the note is not optional anymore.",
        ar: "سطر تعديل ٢٠٢١ الامتحاني: الخصم من المصروف ما زال جائزًا لكنه خيار سياسي مفصح عنه يطبق بثبات — فلم يعد الإيضاح اختياريًا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Government as CUSTOMER is the modern trap: export credits, purchase rebates tied to specific sales and price-support payments for output delivered are IFRS 15 consideration — not grants. Ask first: is the government BUYING something, or GIVING something?",
        ar: "الحكومة كعميل هي الفخ الحديث: أرصدة التصدير، وخصومات الشراء المرتبطة بمبيعات بعينها، ومدفوعات دعم الأسعار عن منتج مُسلَّم كلها مقابل وفق IFRS 15 — لا منح. اسأل أولًا: هل الحكومة تشتري شيئًا أم تهبه؟",
      },
    },
    {
      kind: "note",
      text: {
        en: "Grant vs tax rebate: an export duty drawback tied to specific sales is part of the transaction price (IFRS 15), not an IAS 20 grant.",
        ar: "التمييز بين «المنحة» و«الاسترداد الضريبي»: الاسترداد مقابل مبيعات صادرات معينة جزء من سعر المعاملة (IFRS 15) لا منحة IAS 20.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Deferred tax shadow: an asset grant under route A leaves a deferred income credit whose release is book income — where tax already taxed the cash, IAS 12 reverses the timing so the P&L carries grant income and deferred tax relief in the same periods.",
        ar: "ظل الضريبة المؤجلة: منحة الأصل بالمسار أ تترك دائن دخل مؤجل يستنزف دخلًا دفتريًا — وحيث ضرّبت الضريبة النقد أصلًا، يعكس IAS 12 التوقيت فيحمل الأرباح دخل المنحة وخفض الضريبة المؤجلة في الفترات ذاتها.",
      },
    },
  ],
}
