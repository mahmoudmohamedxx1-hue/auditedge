/** IFRS 11 — Joint Arrangements */

import type { Standard } from "../types"

export const IFRS_11: Standard = {
  code: "IFRS 11",
  title: { en: "Joint Arrangements", ar: "الترتيبات المشتركة" },
  topic: "groups",
  effective: { en: "Effective 1 Jan 2013 · replaced IAS 31 & SIC-13", ar: "سارٍ من ١ يناير ٢٠١٣ · حل محل IAS 31 وSIC-13" },
  replaces: { en: "Replaced IAS 31 interests in joint ventures & jointly controlled entities", ar: "حل محل IAS 31 (الحصص في المشروعات المشتركة والكيانات المشترك في التحكم بها)" },
  blocks: [
    { kind: "h", text: { en: "Objective — from three forms to two types", ar: "الهدف — من ثلاثة أشكال إلى نوعين" } },
    {
      kind: "p",
      text: {
        en: "IAS 31's 'jointly controlled operations / assets / entities' menu let venturers pick PROPORTIONATE CONSOLIDATION for jointly controlled entities — IFRS 11 killed that choice. Now there are exactly TWO types: JOINT OPERATIONS (recognise YOUR share of each asset, liability, revenue and expense, line by line) and JOINT VENTURES (a single method: the EQUITY METHOD, one line on the statement of financial position). Classification follows the parties' RIGHTS AND OBLIGATIONS, never the legal form alone — the standard's whole architecture is: first prove JOINT CONTROL, then classify the arrangement, then apply the type's accounting.",
        ar: "سمحت قائمة IAS 31 للشركاء بالتجميع التناسبي للكيانات المشترك في التحكم بها — فألغى IFRS 11 ذلك الخيار. الآن نوعان فقط: العمليات المشتركة (اعترف بحصتك من كل أصل والتزام وإيراد ومصروف، سطرًا بسطر) والمشروعات المشتركة (طريقة واحدة: طريقة الحصة، بسطر واحد في قائمة المركز المالي). فالتصنيف يتبع حقوق الأطراف والتزاماتهم لا الشكل القانوني وحده — وهندسة المعيار كلها: أثبت السيطرة المشتركة أولًا، ثم صنّف الترتيب، ثم طبّق محاسبة النوع.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Do not confuse 'joint control' with 'control': joint control is the CONTRACTUALLY AGREED, UNANIMOUS sharing of decisions over the relevant activities; control is a single party's power over them — IFRS 10 governs control, IFRS 11 governs joint control.",
        ar: "لا تخلط بين «السيطرة المشتركة» و«السيطرة»: الأولى تقاسم تعاقدي بإجماع في القرارات المؤثرة؛ والثانية قدرة طرف واحد عليها — فـIFRS 10 يحكم السيطرة وIFRS 11 يحكم السيطرة المشتركة.",
      },
    },
    { kind: "h", text: { en: "Scope — what IFRS 11 governs and what it replaced", ar: "النطاق — ما يحكمه IFRS 11 وما حل محله" } },
    {
      kind: "p",
      text: {
        en: "IFRS 11 replaced IAS 31 (Interests in Joint Ventures) and SIC-13 in full, and it reaches every party to a joint arrangement — not only the parties with joint control. It prescribes the classification test (joint operation vs joint venture) and the accounting for each type; it does NOT touch arrangements a single party controls alone (IFRS 10 territory), nor the financial statements of the arrangement itself. Venture-capital organisations, mutual funds, unit trusts and similar entities (including investment-linked insurance funds) that hold an interest in a JOINT VENTURE keep their IAS 28 election to measure it at fair value through profit or loss under IFRS 9 — the one fair-value door the equity-method world leaves open.",
        ar: "حل IFRS 11 محل IAS 31 (الحصص في المشروعات المشتركة) وSIC-13 حلًّا كاملًا، وهو يطال كل طرف في الترتيب المشترك — لا أصحاب السيطرة المشتركة وحدهم. فهو يقرر اختبار التصنيف (عملية مشتركة أم مشروع مشترك) ومحاسبة كل نوع؛ ولا يمس الترتيبات التي يسيطر عليها طرف واحد (أرض IFRS 10) ولا القوائم المالية للترتيب ذاته. ومنظمات رأس المال المخاطر والصناديق المشتركة وصناديق الاستثمار ومثيلاتها (ومنها صناديق الاستثمار المرتبطة بالتأمين) تحتفظ بخيارها في IAS 28 بقياس حصتها في مشروع مشترك بالقيمة العادلة عبر الأرباح وفق IFRS 9 — وهو الباب الوحيد للعادلة الذي يتركه عالم طريقة الحصة مفتوحًا.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "IN: a party WITH joint control of a joint operation → account for its share of each asset, liability, revenue and expense", ar: "داخل النطاق: الطرف ذو السيطرة المشتركة على عملية مشتركة ← يحاسب على حصته من كل أصل والتزام وإيراد ومصروف" },
        { en: "IN: a party WITH joint control of a joint venture → equity method (IAS 28) in its consolidated statements", ar: "داخل النطاق: الطرف ذو السيطرة المشتركة على مشروع مشترك ← طريقة الحصة (IAS 28) في قوائمه المجمعة" },
        { en: "IN: a party participating WITHOUT joint control but with rights to assets and obligations for liabilities → the joint-operation accounting applies to it as well", ar: "داخل النطاق: طرف يشارك بلا سيطرة مشتركة لكن له حقوقًا في الأصول والتزامات عن الالتزامات ← تنطبق عليه محاسبة العملية المشتركة كذلك" },
        { en: "IN: an investor in a joint venture without joint control → significant influence → IAS 28; a passive stake → IFRS 9", ar: "داخل النطاق: مستثمر في مشروع مشترك بلا سيطرة مشتركة ← ذو تأثير جوهري ← IAS 28؛ والحصة السلبية ← IFRS 9" },
        { en: "OUT: an arrangement a single party directs alone → consolidation under IFRS 10", ar: "خارج النطاق: ترتيب يوجهه طرف واحد منفردًا ← تجميع وفق IFRS 10" },
        { en: "OUT: the operator managing a joint operation for a fee → IFRS 15 revenue for the fee", ar: "خارج النطاق: المشغّل الذي يدير عملية مشتركة بأجر ← إيراد وفق IFRS 15 عن الأجر" },
      ],
    },
    { kind: "h", text: { en: "Joint control — the precondition", ar: "السيطرة المشتركة — الشرط المسبق" } },
    {
      kind: "p",
      text: {
        en: "Joint control is the CONTRACTUALLY AGREED SHARING OF CONTROL: it exists only when decisions about the RELEVANT ACTIVITIES require the UNANIMOUS CONSENT of all the parties sharing control — every strategic decision needs them all. The gate is a contract: a binding, enforceable agreement (written or implied by practice — e.g. a shareholder veto in the shareholders' agreement) that no party can override alone. Consider POTENTIAL VOTING RIGHTS when assessing who controls what, and ignore PROTECTIVE RIGHTS — a veto reserved for major capital changes or winding-up protects its holder without giving it a share of day-to-day power.",
        ar: "السيطرة المشتركة هي التقاسم التعاقدي للسيطرة: لا توجد إلا عندما تتطلب القرارات المتعلقة بالأنشطة المؤثرة إجماع كل المتحكمين معًا — فكل قرار استراتيجي يحتاج إليهم جميعًا. والبوابة عقد: اتفاق ملزم قابل للتنفيذ (مكتوب أو مستنتج من الممارسة — كحق اعتراض مقرر في اتفاقية المساهمين) لا يستطيع طرف تجاوزه منفردًا. وخذ بالحسبان حقوق التصويت الكامنة عند تقييم من يسيطر على ماذا، وتجاهل الحقوق الوقائية — فحق الاعتراض المحجوز للتغيرات الرأسمالية الكبرى أو التصفية يحمي حائزه دون أن يمنحه نصيبًا من السلطة اليومية.",
      },
    },
    {
      kind: "tree",
      title: { en: "Does JOINT CONTROL exist?", ar: "هل توجد سيطرة مشتركة؟" },
      root: { en: "Does JOINT CONTROL exist?", ar: "هل توجد سيطرة مشتركة؟" },
      branches: [
        {
          when: { en: "A CONTRACTUAL arrangement exists — the shared decision-making is legally enforceable", ar: "ترتيب تعاقدي قائم — التقاسم ملزم قانونًا" },
          then: { en: "Gate 1 — without a contract there is NO joint arrangement at all (just a plain investment)", ar: "البوابة الأولى — بلا عقد لا يوجد ترتيب مشترك أصلًا (مجرد استثمار عادي)" , red: true },
        },
        {
          when: { en: "Decisions over RELEVANT ACTIVITIES require the UNANIMOUS CONSENT of the parties controlling together", ar: "قرارات الأنشطة المؤثرة تتطلب إجماع المتحكمين معًا" },
          then: { en: "Gate 2 — joint control; a single party's veto over every decision is NOT joint control (that is control or protection)", ar: "البوابة الثانية — سيطرة مشتركة؛ واعتراض طرف واحد على كل قرار ليس سيطرة مشتركة (بل سيطرة أو حماية)", red: true },
        },
        {
          when: { en: "Only TWO parties and the arrangement's continuation requires both (an impasse = nobody directs alone)", ar: "طرفان فقط واستمرار الترتيب يتطلبهما (التعادل يمنع انفراد أحدهما)" },
          then: { en: "The classic joint-control fact pattern", ar: "نمط وقائع السيطرة المشتركة الكلاسيكي" },
        },
        {
          when: { en: "Assuming joint control exists, CLASSIFY: the parties' RIGHTS to the assets and OBLIGATIONS for the liabilities decide the type", ar: "بافتراض قيام السيطرة المشتركة صنّف: حقوق الأطراف في الأصول والتزاماتهم عن الالتزامات تحدد النوع" },
          then: { en: "→ Joint operation vs joint venture (the sequence below)", ar: "← عملية مشتركة أم مشروع مشترك (التسلسل أدناه)" },
        },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "A 60% shareholder can still be a JOINT CONTROLLER: if the constitution requires the partner's consent for every strategic decision, the majority holder has joint control, NOT control — no consolidation of that entity, equity method instead.",
        ar: "قد يكون حائز ٦٠٪ متحكمًا مشتركًا رغم أغلبيته: إذا كان النظام الأساسي يوجب موافقة الشريك في كل قرار استراتيجي فالأغلبية بيده سيطرة مشتركة لا سيطرة — فلا تجميع لتلك الكيان بل طريقة الحصة.",
      },
    },
    { kind: "h", text: { en: "Key definitions — the IFRS 11 vocabulary", ar: "التعريفات الأساسية — معجم IFRS 11" } },
    {
      kind: "list",
      items: [
        { en: "JOINT ARRANGEMENT: an arrangement over which two or more parties have joint control", ar: "الترتيب المشترك: ترتيب تسيطر عليه مشتركًا طرفان فأكثر" },
        { en: "JOINT CONTROL: the contractually agreed sharing of control, where decisions about relevant activities require unanimous consent", ar: "السيطرة المشتركة: التقاسم التعاقدي للسيطرة، حيث تتطلب قرارات الأنشطة المؤثرة إجماعًا" },
        { en: "JOINT OPERATION: the parties have RIGHTS TO THE ASSETS and OBLIGATIONS FOR THE LIABILITIES — they each book their share line by line", ar: "العملية المشتركة: للأطراف حقوق في الأصول والتزامات عن الالتزامات — فيثبت كل طرف حصته سطرًا بسطر" },
        { en: "JOINT VENTURE: the parties have rights to the NET ASSETS of the arrangement (not the individual assets) — a single equity-method line", ar: "المشروع المشترك: للأطراف حقوق في صافي أصول الترتيب (لا الأصول فردًا فردًا) — سطر واحد بطريقة الحصة" },
        { en: "SEPARATE VEHICLE: a separately identifiable entity (a company, partnership or fund) in which the parties hold interests", ar: "الكيان المنفصل: كيان قابل للتحديد بذاته (شركة أو تضامن أو صندوق) تحمل الأطراف حصصًا فيه" },
        { en: "PARTY vs INVESTOR: a party has joint control; an investor participates WITHOUT joint control", ar: "الطرف مقابل المستثمر: الطرف ذو سيطرة مشتركة؛ والمستثمر يشارك بلا سيطرة مشتركة" },
      ],
    },
    {
      kind: "list",
      items: [
        { en: "JOINT OPERATIONS in practice: jointly operated oil & gas fields and pipelines, jointly owned power stations selling each party its share of output, cost-sharing R&D agreements, unincorporated mining partnerships", ar: "العمليات المشتركة عمليًا: حقول النفط والغاز والأنابيب المشغلة مشتركًا، ومحطات الكهرباء المشتركة يبيع كل طرف نصيبه من إنتاجها، واتفاقيات تقاسم تكاليف البحث والتطوير، وشراكات التعدين غير المسجلة" },
        { en: "JOINT VENTURES in practice: incorporated JV companies in telecoms and financial services, joint venture vehicles building a single asset then holding it as landlord, two retailers combining buying power in a JVCo", ar: "المشتركة عمليًا: شركات مشروعات مشتركة في الاتصالات والخدمات المالية، وكيانات تبني أصلًا واحدًا ثم تحوزه مالكةً مؤجرة، وتاجران يجمعان قوتهما الشرائية في شركة مشتركة" },
        { en: "Same industry, either answer: two airlines can jointly OWN aircraft they each fly (a joint operation) or hold shares in a leasing JVCo that owns the fleet (a joint venture) — the structure decides", ar: "الصناعة ذاتها بأي الجوابين: يمكن لشركتي طيران أن تتشاركا ملكية طائرات يطير كل منهما نصيبه منها (عملية مشتركة) أو تحملا أسهمًا في شركة إيجار تملك الأسطول (مشروع مشترك) — فالبنية تحسم" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "The dividing line in one sentence: rights to ASSETS & LIABILITIES → joint operation; rights to NET ASSETS → joint venture. Everything in the classification machinery answers only this.",
        ar: "خط الفصل في جملة: حقوق في الأصول والالتزامات ← عملية مشتركة؛ وحقوق في صافي الأصول ← مشروع مشترك. كل آلة التصنيف لا تجيب إلا عن هذا.",
      },
    },
    { kind: "h", text: { en: "Classification — the four-step sequence", ar: "التصنيف — تسلسل الخطوات الأربع" } },
    {
      kind: "steps",
      items: [
        { en: "THE STRUCTURE — does a SEPARATE VEHICLE exist? No vehicle → the parties normally have direct rights to the assets and obligations for the liabilities → joint operation", ar: "البنية — هل يوجد كيان منفصل؟ لا كيان ← للأطراف عادة حقوق مباشرة في الأصول والتزامات عن الالتزامات ← عملية مشتركة" },
        { en: "THE LEGAL FORM of the separate vehicle — if the vehicle itself owns the assets and is liable to its own creditors (the parties have rights only to net assets) → presume a joint venture", ar: "الشكل القانوني للكيان المنفصل — إن كان الكيان يملك الأصول ويلتزم لدائنيه (وللأطراف حقوق في الصافي فقط) ← افترض مشروعًا مشتركًا" },
        { en: "THE CONTRACTUAL TERMS — a contract that gives the parties rights to assets / obligations for liabilities (or pins specific liabilities on one party) rebuts the legal-form presumption", ar: "شروط العقد — العقد الذي يمنح الأطراف حقوقًا في الأصول أو التزامات عن الالتزامات (أو يحمّل طرفًا بعينه التزامات محددة) ينقض افتراض الشكل القانوني" },
        { en: "OTHER FACTS & CIRCUMSTANCES — who really bears the risks: an SPE with explicit first-loss guarantees to the banks, or a party with the primary obligation to fund the venture's debts, points back to a joint operation", ar: "الوقائع والظروف الأخرى — من يتحمل المخاطر فعلًا: كيان ذو غرض خاص بضمانات خسارة أولى لصالح البنوك، أو طرف عليه الالتزام الأولي بتمويل ديون الترتيب، يعيد النقطة إلى عملية مشتركة" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The defaults: NO separate vehicle → joint operation is the near-certain answer (the parties deal with the assets directly). A separate vehicle whose legal form separates it from its owners → the JOINT VENTURE presumption — but every presumption is rebuttable, and the answer can differ from party to party: an arrangement may be a JOINT OPERATION for one party (it bears primary obligations for the liabilities) and a JOINT VENTURE for another. This asymmetric classification is legitimate and heavily tested — each party assesses ITS OWN rights and obligations.",
        ar: "الافتراضات: بلا كيان منفصل ← العملية المشتركة هي الجواب شبه المؤكد (فالأطراف يتعاملون مع الأصول مباشرة). وكيان منفصل يفصله شكله القانوني عن ملاكه ← افتراض المشروع المشترك — لكن كل افتراض قابل للنقض، وقد يختلف الجواب من طرف لطرف: فقد يكون الترتيب عملية مشتركة لطرف (يتحمل الالتزامات الأولية) ومشروعًا مشتركًا لآخر. وهذا التصنيف غير المتماثل مشروع وممتَحن بكثافة — فكل طرف يقدر حقوقه والتزاماته هو.",
      },
    },
    {
      kind: "tree",
      title: { en: "The type test", ar: "اختبار النوع" },
      root: { en: "Structure + legal form + contractual terms + other facts & circumstances", ar: "البنية + الشكل القانوني + شروط العقد + الوقائع والظروف الأخرى" },
      branches: [
        {
          when: { en: "The parties have RIGHTS TO THE ASSETS and OBLIGATIONS FOR THE LIABILITIES (assets held in undivided shares — a jointly owned oil pipeline, each venturer liable for its own shipping fees)", ar: "للأطراف حقوق في الأصول والتزامات عن الالتزامات (أصول بحصص غير مجزأة — أنبوب نفط مشترك، كل شريك مسؤول عن رسوم شحنه)" },
          then: { en: "JOINT OPERATION — whether or not a separate vehicle exists", ar: "عملية مشتركة — بوجود كيان منفصل أو بغيره", red: true },
        },
        {
          when: { en: "A SEPARATE VEHICLE separates the parties from the vehicle — they have rights to NET ASSETS only (the classic joint venture presumption)", ar: "كيان منفصل يعزل الأطراف عنه — لهم حقوق في صافي الأصول فقط (افتراض المشروع المشترك الكلاسيكي)" },
          then: { en: "Presume JOINT VENTURE — unless the contract or other facts rebut it", ar: "افترض مشروعًا مشتركًا — إلا إذا نقضه العقد أو الوقائع", red: true },
        },
        {
          when: { en: "Contractual terms give one party the assets' benefits but another the liabilities (an SPE with explicit first-loss guarantees, a party with the primary funding obligation)", ar: "شروط العقد تمنح طرفًا منافع الأصول وآخر الالتزامات (كيان ذو غرض خاص بضمانات خسارة أولى، أو طرف عليه التزام التمويل الأولي)" },
          then: { en: "Rebut & re-analyse — the arrangement can be a joint operation for ONE party and a joint venture for ANOTHER (asymmetric classification)", ar: "انقض وحلل من جديد — فقد يكون الترتيب عملية مشتركة لطرف ومشروعًا مشتركًا لآخر (تصنيف غير متماثل)", red: true },
        },
      ],
    },
    {
      kind: "example",
      title: { en: "Worked example — classifying and quantifying a joint operation", ar: "مثال عملي — تصنيف عملية مشتركة وقياس حصتها" },
      lines: [
        { en: "Alpha (60%) and Beta (40%) jointly build an offshore platform through a simple agreement — NO separate vehicle; the contract gives each party rights to the platform and an obligation for its share of dismantling", ar: "ألفا (٦٠٪) وبيتا (٤٠٪) تبنيان منصة بحرية باتفاق بسيط — بلا كيان منفصل؛ ويمنح العقد كل طرف حقوقًا في المنصة والتزامًا بحصته من تكاليف الفك والإزالة" },
        { en: "Step 1 — no separate vehicle → joint OPERATION for both parties (rights to assets + obligations for liabilities)", ar: "الخطوة ١ — لا كيان منفصل ← عملية مشتركة للطرفين (حقوق في الأصول والتزامات عن الالتزامات)" },
        { en: "Platform cost 1,000 → Alpha books PPE 600 (60%) and Beta books PPE 400 — two balance sheets, two direct asset lines", ar: "تكلفة المنصة ١٬٠٠٠ ← ألفا تثبت ممتلكات ٦٠٠ (٦٠٪) وبيتا ٤٠٠ — ميزانيتان وسطرا أصل مباشران" },
        { en: "Jointly incurred dismantling provision 100 → Alpha books provision 60, Beta 40 — the LIABILITY follows the share too", ar: "مخصص فك وإزالة مشترك ١٠٠ ← ألفا تثبت مخصصًا ٦٠ وبيتا ٤٠ — فالالتزام يتبع الحصة كذلك" },
        { en: "Each sells its OWN share of the output: Alpha's sales 500, Beta's sales 350 — full revenue in each party's own income statement (never a share of 'the arrangement's' profit)", ar: "كل طرف يبيع نصيبه من الإنتاج: مبيعات ألفا ٥٠٠ وبيتا ٣٥٠ — إيراد كامل في قائمة كل طرف (لا نصيب من أرباح «الترتيب»)" },
        { en: "Contrast: had the parties used a JVCo whose legal form gives them rights to net assets only → both equity-account a single investment line", ar: "قارن: لو أنشأ الطرفان شركة يعطيهما شكلها القانوني حقوقًا في صافي الأصول فقط ← كلاهما يثبت استثمارًا واحدًا بطريقة الحصة" },
      ],
    },
    { kind: "h", text: { en: "Joint operations — the line-by-line accounting", ar: "العمليات المشتركة — المحاسبة سطرًا بسطر" } },
    {
      kind: "p",
      text: {
        en: "A joint operator recognises, in relation to its interest in the joint operation: (a) its ASSETS, including its share of any assets held jointly; (b) its LIABILITIES, including its share of any liabilities incurred jointly; (c) its REVENUE from the sale of its share of the output arising from the joint operation; (d) its share of the revenue when the arrangement itself sells the output on behalf of the parties; and (e) its EXPENSES, including its share of any expenses incurred jointly. The share percentages follow the CONTRACT, not the equity split — a 60/40 funding agreement produces 60/40 asset lines even where the parties each hold 50% of the votes.",
        ar: "يثبت الشريك في العملية المشتركة، فيما يخص حصته فيها: (أ) أصوله، ومنها حصته من أي أصول مشتركة؛ (ب) التزاماته، ومنها حصته من أي التزامات نشأت مشتركة؛ (ج) إيراده من بيع نصيبه من الإنتاج الناشئ عن العملية؛ (د) حصته من الإيراد حين يبيع الترتيب ذاته الإنتاج نيابة عن الأطراف؛ و(هـ) مصروفاته، ومنها حصته من أي مصروفات مشتركة. ونسب الحصة تتبع العقد لا توزيع الملكية — فاتفاق تمويل ٦٠/٤٠ ينتج سطور أصول ٦٠/٤٠ حتى لو كان لكل طرف ٥٠٪ من الأصوات.",
      },
    },
    {
      kind: "formula",
      title: { en: "The joint-operation share", ar: "حصة العملية المشتركة" },
      lines: [
        { en: "Your asset line = the arrangement's asset × your contractual share (e.g. 1,000 × 60% = 600)", ar: "سطرك من الأصل = أصل الترتيب × حصتك التعاقدية (مثلًا ١٬٠٠٠ × ٦٠٪ = ٦٠٠)" },
        { en: "Your liability = the jointly incurred liability × your contractual share (100 × 60% = 60)", ar: "التزامك = الالتزام الناشئ مشتركًا × حصتك التعاقدية (١٠٠ × ٦٠٪ = ٦٠)" },
        { en: "Your revenue = your share of the output SOLD BY YOU × selling price (never a share of the arrangement's profit)", ar: "إيرادك = نصيبك من الإنتاج الذي بعتَه بنفسك × سعر البيع (لا نصيب من أرباح الترتيب أبدًا)" },
        { en: "Your expenses = your own direct costs + your share of the jointly incurred costs (200 × 60% = 120)", ar: "مصروفاتك = تكاليفك المباشرة + حصتك من التكاليف المشتركة (٢٠٠ × ٦٠٪ = ١٢٠)" },
        { en: "Result: each party's statements show the gross lines — there is NO 'investment in the arrangement' line for a joint operation", ar: "النتيجة: تُظهر قوائم كل طرف السطور الإجمالية — فلا سطر «استثمار في الترتيب» لعملية مشتركة" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Joint operation — the lifecycle entries (Alpha, 60%)", ar: "عملية مشتركة — قيود الدورة (ألفا، ٦٠٪)" },
      rows: [
        { dr: { en: "PPE — your share of the joint asset 600", ar: "ممتلكات — حصتك من الأصل المشترك ٦٠٠" }, cr: { en: "Cash 600 (60% × 1,000 platform)", ar: "نقد ٦٠٠ (٦٠٪ × منصة ١٬٠٠٠)" }, red: true },
        { dr: { en: "Cash 500", ar: "نقد ٥٠٠" }, cr: { en: "Revenue — sale of YOUR share of the output 500", ar: "إيراد — بيع نصيبك من الإنتاج ٥٠٠" }, red: true },
        { dr: { en: "Operating expenses 120", ar: "مصروفات تشغيل ١٢٠" }, cr: { en: "Cash / payables — your 60% share of the JO's running costs (200 × 60%)", ar: "نقد / دائنون — حصتك ٦٠٪ من تكاليف التشغيل (٢٠٠ × ٦٠٪)" } },
        { dr: { en: "Dismantling expense 60", ar: "مصروف الفك والإزالة ٦٠" }, cr: { en: "Provision — your share of the JOINTLY INCURRED liability 60 (100 × 60%)", ar: "مخصص — حصتك من الالتزام الناشئ مشتركًا ٦٠ (١٠٠ × ٦٠٪)" }, red: true },
      ],
    },
    {
      kind: "journal",
      title: { en: "Joint venture — the one-line equity method (the contrast)", ar: "مشروع مشترك — طريقة الحصة بسطر واحد (المقابل)" },
      rows: [
        { dr: { en: "Investment in the JV — at cost", ar: "استثمار في المشروع المشترك — بالتكلفة" }, cr: { en: "Cash (consideration paid)", ar: "نقد (المقابل المدفوع)" }, red: true },
        { dr: { en: "Investment in the JV (share of profit)", ar: "الاستثمار (نصيب الربح)" }, cr: { en: "Share of profit of the JV — ONE line in P&L", ar: "نصيب ربح المشروع المشترك — سطر واحد بالأرباح" }, red: true },
        { dr: { en: "Cash (dividend received)", ar: "نقد (توزيعات مقبوضة)" }, cr: { en: "Investment in the JV (dividends REDUCE the carrying — never P&L)", ar: "الاستثمار (التوزيعات تخفض الدفترية — لا تمس الأرباح)" } },
        { cr: { en: "NO proportionate consolidation, no cost-only choice, no FVTPL for a venturer with joint control — the equity method alone", ar: "لا تجميع تناسبي ولا خيار تكلفة فقط ولا عادلة عبر الأرباح لشريك متحكم مشتركًا — طريقة الحصة وحدها" }, red: true },
      ],
    },
    {
      kind: "list",
      items: [
        { en: "JOINT OPERATION: gross lines — your share of EACH asset, liability, revenue and expense, in your OWN statements (grouped with similar items)", ar: "عملية مشتركة: سطور إجمالية — حصتك من كل أصل والتزام وإيراد ومصروف، في قوائمك أنت (مجمعة مع البنود المماثلة)" },
        { en: "JOINT VENTURE: net line — one investment, one share-of-profit line; the arrangement's individual assets never touch your balance sheet", ar: "مشروع مشترك: سطر صافٍ — استثمار واحد وسطر نصيب ربح واحد؛ وأصول الترتيب الفردية لا تمس ميزانيتك أبدًا" },
        { en: "Presentation effect: a joint operation brings your share of the LIABILITIES onto the balance sheet — gearing rises; a joint venture hides them inside one net line", ar: "أثر العرض: العملية المشتركة تدخل حصتك من الالتزامات إلى الميزانية — فيرتفع الرفع المالي؛ والمشروع المشترك يخفيها داخل سطر صافٍ واحد" },
      ],
    },
    { kind: "h", text: { en: "Transactions between a party and the arrangement", ar: "المعاملات بين الطرف والترتيب" } },
    {
      kind: "p",
      text: {
        en: "Sell or CONTRIBUTE an asset TO a joint operation: recognise the gain or loss ONLY to the extent of the OTHER parties' interests — you still hold your own share through the undivided interest, so your slice of the gain is unrealised and stays inside your share of the asset's carrying amount. PURCHASE assets FROM a joint operation: do not recognise your share of the arrangement's gain (recognise only the portion relating to the other parties); recognise losses in FULL unless they provide evidence of an impairment. Transactions with a JOINT VENTURE follow IAS 28.28–29: eliminate only YOUR SHARE of the unrealised gain in EITHER direction — upstream (the JV sells to you) adjusts your share of the JV's profit; downstream (you sell to the JV) adjusts your own revenue and the investment's carrying — losses the same way unless they signal impairment.",
        ar: "بيع أصل أو إسهامه في عملية مشتركة: اعترف بالربح أو الخسارة بقدر حصص الأطراف الأخرى فقط — فأنت ما تزال تحتفظ بحصتك عبر المصلحة غير المجزأة، فشريحك من الربح غير محقق وتبقى داخل القيمة الدفترية لحصتك من الأصل. وشراء أصول من عملية مشتركة: لا تعترف بحصتك من ربح الترتيب (بل بالجزء المتعلق بالأطراف الأخرى)؛ واعترف بالخسائر كاملة إلا إذا شكلت دليلًا على انخفاض قيمة. أما المعاملات مع المشروع المشترك فتتبع IAS 28.28–29: احذف حصتك أنت من الربح غير المحقق في الاتجاهين معًا — الصاعد (المشروع يبيع لك) يعدل نصيبك من ربحه؛ والهابط (أنت تبيع له) يعدل إيرادك أنت ودفترية الاستثمار — والخسائر بالمنطق ذاته إلا إذا دلت على انخفاض.",
      },
    },
    {
      kind: "example",
      title: { en: "Selling into your own joint operation", ar: "البيع إلى عمليتك المشتركة" },
      lines: [
        { en: "Alpha sells a machine (carrying amount 80) into the 60%-held joint operation for 100 cash — total apparent gain 20", ar: "تبيع ألفا آلة (قيمتها الدفترية ٨٠) إلى العملية المشتركة التي تحوز ٦٠٪ منها مقابل ١٠٠ نقدًا — مكسب ظاهري إجمالي ٢٠" },
        { en: "Net cash from the OTHER parties = 40 (they fund their 40%); Alpha keeps a 60% undivided interest in the machine", ar: "النقد الصافي من الأطراف الأخرى = ٤٠ (تمول حصة الـ٤٠٪)؛ وتحتفظ ألفا بمصلحة غير مجزأة ٦٠٪ في الآلة" },
        { en: "Recognised gain = the gain × the OTHER parties' 40% = 20 × 40% = 8 — the only genuinely sold slice", ar: "المكسب المعترف به = المكسب × ٤٠٪ حصة الأطراف الأخرى = ٢٠ × ٤٠٪ = ٨ — الشريحة المبيعة فعليًا وحدها" },
        { en: "Entry: dr Cash 40 + dr PPE — share of the machine 48 / cr Machine 80 + cr Gain 8 ✓ — the deferred 12 sits inside the share's carrying (fair-value share 60 − 48)", ar: "القيد: مدين نقد ٤٠ + ممتلكات — حصة الآلة ٤٨ / دائن الآلة ٨٠ + مكسب ٨ ✓ — والـ١٢ المؤجلة تجلس داخل دفترية الحصة (عادلة الحصة ٦٠ − ٤٨)" },
        { en: "Had this been a joint VENTURE (a downstream sale of the same machine, 60% interest): eliminate YOUR 60% share of the unrealised gain — recognise 20 × 40% = 8 in your own P&L; the same 8 either way, because your slice is unrealised in both forms", ar: "لو كان هذا مشروعًا مشتركًا (بيع هابط للآلة ذاتها، بحصة ٦٠٪): احذف حصتك ٦٠٪ من الربح غير المحقق — اعترف بـ٢٠ × ٤٠٪ = ٨ في أرباحك أنت؛ الرقم ٨ ذاته في الحالتين، لأن شريحتك غير محققة في الشكلين معًا" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Say the DIRECTION first, then the entry: upstream adjusts your share of the investee's PROFIT (the gain sits in the JV's/JO's own revenue); downstream adjusts your OWN revenue and the INVESTMENT's carrying (the gain sits in your revenue). Direction decides which side the elimination hits — but the AMOUNT eliminated is always your share.",
        ar: "قل الاتجاه أولًا ثم القيد: الصاعد يعدل نصيبك من ربح المستثمَر فيه (فالمكسب في إيراده هو)؛ والهابط يعدل إيرادك أنت ودفترية الاستثمار (فالمكسب في إيرادك). فالاتجاه يحدد أي جانب يقع عليه الحذف — أما المحذوف فحصتك دائمًا.",
      },
    },
    { kind: "h", text: { en: "Leases in a joint operation — the IFRS 16 amendment", ar: "الإيجارات في العملية المشتركة — تعديل IFRS 16" } },
    {
      kind: "p",
      text: {
        en: "The 2016 amendment 'Interest in a Joint Operation' (effective 1 January 2019) closed the lease gap: an entity with an interest in a joint operation accounts for its RIGHT-OF-USE ASSET when it leases in an asset jointly held or used by the arrangement — booking its share of the ROU asset and lease liability. Conversely, when a party LEASES OUT its undivided interest in the jointly held asset, it applies IFRS 16's LESSOR accounting to that share. The joint-operation machinery never creates an exemption from IFRS 16: the share of the asset and the share of the lease liability both sit on the joint operator's balance sheet.",
        ar: "أغلق تعديل ٢٠١٦ «المصلحة في عملية مشتركة» (الساري من ١ يناير ٢٠١٩) فجوة الإيجار: فالكيان ذو المصلحة في عملية مشتركة يثبت أصل حق الاستخدام حين يستأجر أصلًا مشتركًا يحوزه الترتيب أو يستخدمه — فيقيّد حصته من أصل حق الاستخدام والتزام الإيجار. وبالعكس، حين يؤجر طرفٌ مصلحته غير المجزأة في الأصل المشترك يطبق محاسبة المؤجر في IFRS 16 على تلك الحصة. فآلة العملية المشتركة لا تخلق إعفاءً من IFRS 16: حصة الأصل وحصة التزام الإيجار تجلسان معًا على ميزانية الشريك في العملية.",
      },
    },
    { kind: "h", text: { en: "Parties without joint control — routing the interest", ar: "الأطراف بلا سيطرة مشتركة — توجيه الحصة" } },
    {
      kind: "p",
      text: {
        en: "A party that participates in an arrangement WITHOUT joint control still runs the classification machinery — but the accounting routes differ: (1) an investor in a joint operation with rights to assets and obligations for liabilities accounts for its share line by line (the joint-operation accounting follows the rights, not the label); (2) an investor in a joint venture with SIGNIFICANT INFLUENCE applies IAS 28 — equity method as an associate; (3) a passive investor applies IFRS 9 — fair value or amortised cost depending on the instrument; (4) an operator managing the arrangement for a fee books that fee as IFRS 15 revenue. Same arrangement, four different answers — the question is always what rights THAT party holds.",
        ar: "الطرف المشارك في ترتيب بلا سيطرة مشتركة يمر بآلة التصنيف أيضًا — لكن المسارات تختلف: (١) المستثمر في عملية مشتركة له حقوق في الأصول والتزامات عن الالتزامات يحاسب على حصته سطرًا بسطر (فمحاسبة العملية تتبع الحقوق لا الوصف)؛ (٢) المستثمر في مشروع مشترك ذو تأثير جوهري يطبق IAS 28 — طريقة الحصة كزميلة؛ (٣) المستثمر السلبي يطبق IFRS 9 — عادلة أو تكلفة مُطفأة بحسب الأداة؛ (٤) المشغّل الذي يدير الترتيب بأجر يثبت أجره إيرادًا وفق IFRS 15. الترتيب ذاته وأربعة أجوبة مختلفة — فالسؤال دائمًا: أي حقوق بيد هذا الطرف.",
      },
    },
    {
      kind: "tree",
      title: { en: "Which accounting applies to YOUR interest?", ar: "أي محاسبة تنطبق على حصتك؟" },
      root: { en: "Your relationship with the arrangement", ar: "علاقتك بالترتيب" },
      branches: [
        {
          when: { en: "Joint control + rights to assets & obligations for liabilities", ar: "سيطرة مشتركة + حقوق في الأصول والتزامات عن الالتزامات" },
          then: { en: "JOINT OPERATION — your share of each asset, liability, revenue and expense, line by line", ar: "عملية مشتركة — حصتك من كل أصل والتزام وإيراد ومصروف، سطرًا بسطر", red: true },
        },
        {
          when: { en: "Joint control + rights to net assets", ar: "سيطرة مشتركة + حقوق في صافي الأصول" },
          then: { en: "JOINT VENTURE — equity method (IAS 28), one line", ar: "مشروع مشترك — طريقة الحصة (IAS 28)، سطر واحد", red: true },
        },
        {
          when: { en: "No joint control, but rights to assets & obligations for liabilities", ar: "لا سيطرة مشتركة، مع حقوق في الأصول والتزامات عن الالتزامات" },
          then: { en: "Joint-operation accounting still applies — your share, line by line", ar: "محاسبة العملية المشتركة تنطبق رغم ذلك — حصتك، سطرًا بسطر", red: true },
        },
        {
          when: { en: "No joint control + significant influence over the vehicle", ar: "لا سيطرة مشتركة + تأثير جوهري على الكيان" },
          then: { en: "IAS 28 equity method (an associate-type interest)", ar: "طريقة الحصة وفق IAS 28 (حصة شبيهة بالزميلة)", red: true },
        },
        {
          when: { en: "No joint control, no influence — a financial stake", ar: "لا سيطرة مشتركة ولا تأثير — حصة مالية" },
          then: { en: "IFRS 9 — FVTPL / FVOCI / amortised cost by instrument", ar: "IFRS 9 — عادلة عبر الأرباح أو الدخل الشامل أو تكلفة مطفأة بحسب الأداة", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Acquiring an interest in a joint operation that is a business", ar: "الاستحواذ على حصة في عملية مشتركة تشكل نشاطًا" } },
    {
      kind: "p",
      text: {
        en: "When an interest acquired in a joint operation constitutes a BUSINESS (IFRS 3's definition), the acquiring party borrows IFRS 3's acquisition machinery for its share: measure your share of the identifiable assets acquired and liabilities assumed at ACQUISITION-DATE FAIR VALUE; the excess of the cost over the fair value of that share is YOUR GOODWILL on the interest, carried as part of your share of the joint operation's assets — never a separate goodwill line, and never an NCI. This is the mirror-image of consolidation: only your slice of the net assets is recognised, and the goodwill embedded relates only to your slice.",
        ar: "حين تشكل الحصة المقتناة في عملية مشتركة نشاطًا (بتعريف IFRS 3) يستعير الطرف المقتني آلة الاستحواذ لحصته: يقس حصته من الأصول المحددة المقتناة والالتزامات المتحملة بالقيمة العادلة بتاريخ الاستحواذ؛ والزائد عن التكلفة على عادلة تلك الحصة هو شهرة الطرف على المصلحة، تُحمل جزءًا من حصته من أصول العملية المشتركة — لا سطر شهرة منفصلًا ولا حصة غير مسيطرة أبدًا. فهذا انعكاس مرآة التجميع: لا يثبت إلا شريحتك من صافي الأصول، والشهرة المدفونة تخص شريحتك وحدها.",
      },
    },
    { kind: "h", text: { en: "Separate statements & investment entities", ar: "القوائم المنفصلة وكيانات الاستثمار" } },
    {
      kind: "p",
      text: {
        en: "A venturer's CONSOLIDATED statements carry the joint venture at one equity-method line; its SEPARATE financial statements follow IAS 27's menu instead (cost, fair value through profit or loss, or — since the 2014 amendment — the equity method). Joint operations need no menu at all: the share of each asset and liability is recognised in EVERY set of statements the party prepares, consolidated or separate. An investment entity that measures a subsidiary at FVTPL extends that measurement through to interests held via investment-entity subsidiaries — the equity method steps aside where IFRS 10's consolidation exception applies.",
        ar: "قوائم الشريك المجمعة تحمل المشروع المشترك بسطر واحد بطريقة الحصة؛ أما قوائمه المنفصلة فتتبع قائمة IAS 27 (تكلفة، أو عادلة عبر الأرباح، أو — منذ تعديل ٢٠١٤ — طريقة الحصة). والعمليات المشتركة لا تحتاج قائمة أصلًا: فحصة كل أصل والتزام تثبت في كل مجموعة قوائم يعدّها الطرف، مجمعة كانت أم منفصلة. والكيان الاستثماري الذي يقيس تابعة بالعادلة عبر الأرباح يمد ذلك القياس إلى الحصص الممسوكة عبر تابعات استثمارية — فتتنحى طريقة الحصة حيث يسري استثناء التجميع في IFRS 10.",
      },
    },
    { kind: "h", text: { en: "Disclosures (with IFRS 12)", ar: "الإفصاحات (مع IFRS 12)" } },
    {
      kind: "list",
      items: [
        { en: "The NATURE, EXTENT & FINANCIAL EFFECTS of interests in joint arrangements: carrying amounts, share of profits/losses, commitments & contingencies", ar: "طبيعة الحصص وامتدادها وآثارها المالية: القيم الدفترية ونصيب الأرباح والخسائر والتعهدات والالتزامات المحتملة" },
        { en: "For joint ventures: the summarised financial information (assets, liabilities, revenue, profit) AGGREGATED across all equity-accounted JVs — IFRS 12's signature table", ar: "للمشتركة: المعلومات المالية الموجزة (أصول، التزامات، إيراد، ربح) مجمعة عبر كل المشتركة بطريقة الحصة — جدول IFRS 12 المميز" },
        { en: "Contingent liabilities & capital commitments relating to your share of joint ventures; restrictions on the arrangement's distributions", ar: "الالتزامات المحتملة وتعهدات رأس المال المتعلقة بحصتك في المشتركة؛ وقيود التوزيعات في الترتيب" },
        { en: "For joint operations: the nature of the interest, the share of assets/liabilities recognised, and any commitments entered into", ar: "للعمليات المشتركة: طبيعة الحصة، ونصيب الأصول/الالتزامات المثبت، وأي تعهدات منشأة" },
      ],
    },
    { kind: "h", text: { en: "Transition & effective dates", ar: "الانتقال والتواريخ النافذة" } },
    {
      kind: "p",
      text: {
        en: "IFRS 11 took effect on 1 January 2013, replacing IAS 31 and SIC-13, and was applied RETROSPECTIVELY on adoption — every jointly controlled entity had to be re-classified as a joint operation or a joint venture from the earliest period presented, killing proportionate consolidation overnight. The IFRS 16 amendment for joint operations followed on 1 January 2019. First-time adopters under IFRS 1 may use DEEMED COST for the interest in a joint venture (fair value or previous-GAAP carrying at the date of transition) as the equity method's opening cost.",
        ar: "سرى IFRS 11 من ١ يناير ٢٠١٣ محلًّا لـIAS 31 وSIC-13، وطُبق بأثر رجعي عند التبني — فأعيد تصنيف كل كيان مشترك في التحكم به عمليةً مشتركة أو مشروعًا مشتركًا من أقدم فترة معروضة، ليموت التجميع التناسبي في ليلة واحدة. ثم جاء تعديل IFRS 16 للعمليات المشتركة في ١ يناير ٢٠١٩. ومن يتبنى لأول مرة وفق IFRS 1 له أن يستخدم التكلفة المفترضة لحصته في مشروع مشترك (عادلة أو دفترية بموجب معايير سابقة بتاريخ الانتقال) تكلفةً افتتاحية لطريقة الحصة.",
      },
    },
    { kind: "h", text: { en: "Changes in the relationship", ar: "تغيرات في العلاقة" } },
    {
      kind: "p",
      text: {
        en: "Joint control is REASSESSED as facts change — gain it and the equity method begins from that date; lose it while significant influence remains and the joint venture simply becomes an ASSOCIATE still under IAS 28 — the equity method continues on the SAME carrying amount, with NO fair-value remeasurement. That is the sharpest contrast with IFRS 10: losing CONTROL forces the full loss-of-control cascade (remeasure the retained stake at fair value, all gains to P&L); losing JOINT CONTROL does not. Only when influence disappears entirely does the investment fall out of IAS 28 into IFRS 9 — and only then is the equity-method carrying derecognised, with the OCI amounts recycled.",
        ar: "تُعاد السيطرة المشتركة تقييمًا مع تغير الوقائع — إن اكتسبتها بدأت طريقة الحصة من ذلك التاريخ؛ وإن فقدتها مع بقاء التأثير الجوهري صار المشروع المشترك زميلةً خالصة تحت IAS 28 — فتستمر الطريقة على الدفترية ذاتها بلا إعادة قياس بالعادلة أصلًا. وهذا أوضح تباين مع IFRS 10: فقد السيطرة يفرض تسلسل فقد السيطرة كاملًا (إعادة قياس الحصة المبقاة بالعادلة وكامل الفروق للأرباح)؛ أما فقد السيطرة المشتركة فلا. وفقط حين يتلاشى التأثير كليًا يخرج الاستثمار من IAS 28 إلى IFRS 9 — وعندئذ فقط تستبعد دفترية طريقة الحصة مع إعادة تدوير مبالغ الدخل الشامل.",
      },
    },
    { kind: "h", text: { en: "Interactions", ar: "التفاعلات" } },
    {
      kind: "p",
      text: {
        en: "IFRS 11 sits at the centre of the groups map: IFRS 10 draws the boundary (control alone → consolidation; shared control → IFRS 11); IAS 28 supplies the equity-method engine for joint ventures and associates alike; IFRS 3 is borrowed when a business is contributed INTO a joint operation; IFRS 16 governs leases by and within a joint operation; IFRS 9 takes over when an investor holds no joint control or influence; and IFRS 12 discloses the whole portfolio of interests. An exam answer that names the neighbouring standard at each junction reads like a professional's file.",
        ar: "يقف IFRS 11 في مركز خريطة المجموعات: IFRS 10 يرسم الحدود (سيطرة منفردة ← تجميع؛ سيطرة مشتركة ← IFRS 11)؛ وIAS 28 يوفر محرك طريقة الحصة للمشتركة والزميلات معًا؛ وIFRS 3 يُستعار حين يُسهم نشاط في عملية مشتركة؛ وIFRS 16 يحكم إيجارات العملية المشتركة وداخلها؛ وIFRS 9 يتولى الأمر حين لا بيد المستثمر سيطرة مشتركة ولا تأثير؛ وIFRS 12 يفصح عن محفظة الحصص كلها. فالإجابة الامتحانية التي تسمي المعيار المجاور عند كل مفصل تُقرأ كملف محترف.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Say the TYPE in the exam's first sentence and give the REASON (structure / legal form / contractual terms / other facts) — the classification reason is worth more than the accounting mechanics that follow, and a joint-operation answer that forgets the LIABILITY share is half an answer.",
        ar: "قل النوع في الجملة الأولى واذكر السبب (بنية / شكل قانوني / شروط عقد / وقائع أخرى) — فسبب التصنيف يساوي أكثر من ميكانيكا المحاسبة التي تليه، وإجابة «عملية مشتركة» تنسى حصة الالتزامات نصف إجابة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "IAS 31's proportionate consolidation is the trap answer — any '40% of the entity's assets' answer for a joint VENTURE is wrong under IFRS 11; that accounting belongs to joint OPERATIONS now.",
        ar: "التجميع التناسبي لـIAS 31 هو الجواب الفخ — فأي إجابة «٤٠٪ من أصول الكيان» عن مشروع مشترك خاطئة وفق IFRS 11؛ فتلك المحاسبة للعمليات المشتركة اليوم.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "No CONTRACT, no joint arrangement: two shareholders whose combined stake blocks everyone else, but with no enforceable agreement between THEM, are not joint controllers — a 50:50 split without a contract is just two investors, and the exam will not give you the classification marks without naming the contract first.",
        ar: "بلا عقد لا يوجد ترتيب مشترك: مساهمان تحجب حصتهما معًا أي أغلبية لغيرهما لكن بلا اتفاق ملزم بينهما ليسا متحكمين مشتركين — فالانقسام ٥٠:٥٠ بلا عقد مجرد مستثمرين، ولن يمنحك الامتحان درجات التصنيف دون تسمية العقد أولًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "A joint operation raises GEARING: your share of the arrangement's liabilities lands on your balance sheet. Examiners ask 'what is the effect on the gearing ratio of classifying this as a JO rather than a JV?' — answer: liabilities up, equity unchanged → gearing up.",
        ar: "العملية المشتركة ترفع الرفع المالي: فحصتك من التزامات الترتيب تحط على ميزانيتك. ويسأل الممتحنون: «ما أثر تصنيف هذا عمليةً مشتركة لا مشروعًا على نسبة الرفع؟» — الجواب: الالتزامات ترتفع وحقوق الملكية لا تتغير ← الرفع يعلو.",
      },
    },
  ],
}
