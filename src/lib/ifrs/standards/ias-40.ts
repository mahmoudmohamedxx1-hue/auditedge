/** IAS 40 — Investment Property */

import type { Standard } from "../types"

export const IAS_40: Standard = {
  code: "IAS 40",
  title: { en: "Investment Property", ar: "العقارات الاستثمارية" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 2005 · amended by IFRS 16 (leases)", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل بـ IFRS 16" },
  blocks: [
    {
      kind: "p",
      text: {
        en: "Core principle — INVESTMENT PROPERTY is property (land or buildings) held to EARN RENTALS or for CAPITAL APPRECIATION or both. Two accounting worlds flow from the classification: IAS 40's FAIR VALUE MODEL (fair value at every reporting date, movements straight to P&L, NO depreciation) or the IAS 16-style cost model — and once the fair-value door is chosen, it effectively cannot be re-entered. Classification is a USE question, not an ownership question.",
        ar: "المبدأ الأساسي — العقار الاستثماري عقار (أرض أو مبانٍ) محتفظ به لتأجيره أو لتحقيق نمو رأس المال أو لكليهما. وينبثق عن التبويب عالمان محاسبيان: نموذج القيمة العادلة في IAS 40 (قيمة عادلة في كل تقرير وحركاتها للأرباح مباشرة بلا إهلاك)، أو نموذج التكلفة على طريقة IAS 16 — وما إن يُختار باب القيمة العادلة حتى يتعذر العودة منه. فالتبويب سؤال استخدام لا سؤال ملكية.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Rental income from investment property is revenue (IFRS 15 / IFRS 16 lessor model); the fair-value MOVEMENT is a gain in P&L — never revenue, never OCI.",
        ar: "إيراد الإيجار من العقار الاستثماري إيراد وفق IFRS 15 / نموذج المؤجر في IFRS 16؛ أما حركة القيمة العادلة فمكسب بالأرباح — ليس إيرادًا قط ولا دخلًا شاملًا آخر.",
      },
    },
    { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
    {
      kind: "p",
      text: {
        en: "Investment property = property (land or a building — or part of a building — or both) held to EARN RENTALS or for CAPITAL APPRECIATION or both, by the OWNER or by the LESSEE under a RIGHT-OF-USE asset. The twin purposes separate it from owner-occupied property (IAS 16 — held for use in production/supply/administration) and from inventory (IAS 2 — held for sale in the ordinary course; the dealer's buildings are inventory even if rented while awaiting sale).",
        ar: "العقار الاستثماري = عقار (أرض أو مبنى أو جزء منه أو كلاهما) محتفظ به لتأجيره أو لتحقيق نمو رأس المال أو لكليهما، سواء بيد المالك أو المستأجر بموجب أصل حق الاستخدام. والغرضان يميزانه عن العقار المشغول ذاتيًا (IAS 16 — محتفظ به للاستخدام في الإنتاج أو التوريد أو الإدارة) وعن المخزون (IAS 2 — محتفظ به للبيع في النشاط الاعتيادي؛ ومباني التاجر مخزون وإن أُجِّرت ريثما تباع).",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Owner-occupied property → IAS 16 (depreciated; the occupied part of a mixed property)", ar: "العقار المشغول ذاتيًا ← IAS 16 (مُهلك؛ وجزء الشغل الذاتي في العقار المختلط)" },
        { en: "Property held for sale in the ordinary course → IAS 2 inventory (dealer-builders)", ar: "العقار المحتفظ به للبيع في النشاط الاعتيادي ← مخزون IAS 2 (المطورون التجار)" },
        { en: "Property being constructed for a customer → IFRS 15 construction contract", ar: "العقار المنشأ لعميل ← عقد إنشاء وفق IFRS 15" },
        { en: "Leases → IFRS 16 (but a lessee's right-of-use asset meeting the IP definition follows IAS 40 measurement)", ar: "الإيجار ← IFRS 16 (لكن أصل حق الاستخدام المحقق لتعريف العقار الاستثماري يتبع قياس IAS 40)" },
        { en: "Biological assets → IAS 41; mineral rights and reserves → IFRS 6", ar: "الأصول الحيوية ← IAS 41؛ وحقوق والاحتياطيات المعدنية ← IFRS 6" },
      ],
    },
    { kind: "h", text: { en: "Key definitions", ar: "التعريفات الرئيسة" } },
    {
      kind: "list",
      items: [
        { en: "Investment property: held for rentals or capital appreciation; includes property being constructed or developed for FUTURE investment use", ar: "العقار الاستثماري: محتفظ به للتأجير أو النمو؛ ويشمل الجاري إنشاؤه أو تطويره للاستخدام الاستثماري المستقبلي" },
        { en: "Fair value model: carrying amount = fair value at each reporting date; gains/losses → P&L; no depreciation, no residual estimates", ar: "نموذج القيمة العادلة: القيمة الدفترية = القيمة العادلة كل تقرير؛ والفروق للأرباح؛ ولا إهلاك ولا تقديرات قيمة متبقية" },
        { en: "Cost model: cost − accumulated depreciation − impairment (IAS 16 style); the fair value is STILL disclosed in the notes", ar: "نموذج التكلفة: التكلفة − مجمع الإهلاك − الانخفاض (على طريقة IAS 16)؛ وتبقى القيمة العادلة مفصحًا عنها في الإيضحات" },
        { en: "Deemed cost (on transfer): the fair value at the transfer date that becomes the cost under the receiving standard", ar: "التكلفة المفترضة (عند التحويل): القيمة العادلة بتاريخ التحويل التي تغدو التكلفة تحت المعيار المستقبل" },
        { en: "Change of use: the only transfer trigger — evidence: commencement of owner-occupation, start of development, or a sale agreed", ar: "تغير الاستخدام: محفز التحويل الوحيد — ودليله: بدء الشغل الذاتي، أو بدء التطوير، أو تعاقد بيع" },
      ],
    },
    { kind: "h", text: { en: "Classification — the decision web", ar: "التبويب — شبكة القرار" } },
    {
      kind: "p",
      text: {
        en: "Why classification matters: the SAME building can be fair-valued with P&L volatility (IAS 40) or depreciated with IAS 36 exposure (IAS 16) — the income-statement pattern, the impairment regime and the disclosure pack all pivot on this one judgement, which is why examiners stage whole scenarios around it.",
        ar: "لماذا يهم التبويب: المبنى ذاته قد يُقاس بالقيمة العادلة مع تقلب في الأرباح (IAS 40) أو يُهلك مع انكشاف IAS 36 (IAS 16) — فنمط قائمة الدخل ونظام الانخفاض وحزمة الإفصاح كلها تتمحور حول هذا الحكم الواحد، ولذلك يبني الممتحنون سيناريوهات كاملة حوله.",
      },
    },
    {
      kind: "tree",
      title: { en: "The classification web", ar: "شبكة التبويب" },
      root: { en: "Classify the property", ar: "بَوِّب العقار" },
      branches: [
        {
          when: { en: "Held for rentals / appreciation, owner's or lessee's holding", ar: "محتفظ به للتأجير أو النمو، بيد المالك أو المستأجر" },
          then: { en: "INVESTMENT PROPERTY under IAS 40", ar: "عقار استثماري وفق IAS 40", red: true },
        },
        {
          when: { en: "Owner-occupied (admin offices, plant, staff housing)", ar: "مشغول ذاتيًا (إدارة، مصنع، سكن عاملين)" },
          then: { en: "IAS 16 PPE — depreciated (or revalued)", ar: "ممتلكات IAS 16 — تُهلك (أو تعاد تقييمها)" },
        },
        {
          when: { en: "Mixed-use: part rentals (significant & not ancillary) + part owner-occupied — and the parts can be SOLD/LEASED separately", ar: "استخدام مختلط: جزء مؤجر (جوهري لا ملحق) + جزء مشغول — والأجزاء قابلة للبيع/التأجير منفصلة" },
          then: { en: "SPLIT: investment property for the rented part · IAS 16 for the occupied part (a tower with offices and a shopping atrium)", ar: "فصل: الجزء المؤجر عقار استثماري والمشغول ممتلكات (برج بمكاتب وأتريوم تجاري)", red: true },
        },
        {
          when: { en: "Mixed but NOT separable (an owner-occupied HQ with a small staff canteen rented out)", ar: "مختلط غير قابل للفصل (مقر بكانتين مؤجرة عرضًا)" },
          then: { en: "ALL IAS 16 owner-occupied — the ancillary rental does not convert it", ar: "الكل ممتلكات IAS 16 مشغولة ذاتيًا — والإيجار الملحق لا يحوله", red: true },
        },
        {
          when: { en: "Under construction / development for a FUTURE investment property", ar: "تحت الإنشاء أو التطوير لعقار استثماري مستقبلي" },
          then: { en: "IAS 40 applies during construction: fair value if determinable under the FV model, otherwise cost until completion", ar: "يطبق IAS 40 أثناء الإنشاء: القيمة العادلة إن تعينت في نموذج العادلة، وإلا فالتكلفة حتى الاكتمال" },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Mixed-use property: if the portions can be sold or leased out SEPARATELY, account for each portion under its own standard (rented floors IAS 40, occupied floors IAS 16). If the portions CANNOT be separated, the whole property is owner-occupied UNLESS the investment portion is significant — the standard sets NO numeric threshold; exam kits commonly illustrate 'insignificant' with a small fraction (around 5%), but the judgement is ANCILLARY vs SIGNIFICANT, never a percentage.",
        ar: "العقار متعدد الاستخدام: إن أمكن بيع الأجزاء أو تأجيرها منفصلة حوسب كل جزء تحت معياره (الأدوار المؤجرة IAS 40 والمشغولة IAS 16). وإن تعذر الفصل فالعقار كله مشغول ذاتيًا إلا إذا كان الجزء الاستثماري جوهريًا — ولا يضع المعيار حدًا رقميًا؛ وتصوره كتب الامتحانات بجزء صغير (نحو ٥٪)، لكن الحكم «ملحق مقابل جوهري» لا نسبة مئوية أبدًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Property LEASED to a parent or sister company is NOT investment property from the GROUP's view — the group is owner-occupier; but in the SUBSIDIARY's separate statements it IS investment property.",
        ar: "العقار المؤجر للأم أو الشقيقة ليس استثماريًا من منظور المجموعة — فالمجموعة مشغلة ذاتيًا؛ لكنه استثماري في القوائم المنفصلة للتابعة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "'Ancillary' is the exam's word: a headquarters with a small rented shop stays IAS 16; a tower whose rented atrium is a meaningful part splits. Never split on floor count — split on separability + significance.",
        ar: "«الملحق» كلمة الامتحان: مقر بطفل مؤجر صغير يبقى IAS 16؛ وبرج أتريومه المؤجر جزء معتبر ينقسم. ولا تفصل بعدد الأدوار — بل بالقابلية للفصل والجوهرية.",
      },
    },
    { kind: "h", text: { en: "Initial recognition — cost", ar: "الاعتراف الأولي — التكلفة" } },
    {
      kind: "p",
      text: {
        en: "Initial measurement at COST: purchase price plus directly attributable expenditure (legal fees, property transfer taxes, professional fees for the transaction); start-up costs, initial operating losses and abnormal wastage are expensed as incurred. Where payment stretches beyond normal credit terms, measure at the CASH-PRICE EQUIVALENT and accrue the excess as a FINANCING expense over the credit period. And there is no day-one gain under the fair-value model: an arm's-length purchase starts with cost equal to fair value — the transaction price is the first fair-value measurement (IFRS 13).",
        ar: "القياس الأولي بالتكلفة: ثمن الشراء زائد النفقات المباشرة المنسوبة (أتعاب قانونية، رسوم نقل الملكية، أتعاب مهنية للمعاملة)؛ وتحمَّل مصروفًا تكاليف التشغيل المبدئية والخسائر الأولية والهالك غير الطبيعي. وإذا امتد السداد بتجاوز شروط الائتمان الاعتيادية قِس بالتكافؤ النقدي للسعر وتراكم الفارق مصروفًا تمويليًا عبر مدة الائتمان. ولا مكسب يوم أول في نموذج القيمة العادلة: فشراء بذراع سوقية يبدأ بتكلفة تعادل القيمة العادلة — فسعر المعاملة هو أول قياس للعادلة (IFRS 13).",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Cost components mirror IAS 16 for a BUILT property: purchase price + directly attributable transaction costs", ar: "مكونات التكلفة تحاكي IAS 16 للعقار المشترى: الثمن + تكاليف المعاملة المباشرة" },
        { en: "Self-constructed: construction cost until completion — IAS 23 borrowing costs capitalise until the property is substantially complete and ready for use", ar: "المنشأ ذاتيًا: تكلفة الإنشاء حتى الاكتمال — وتُرسمل تكاليف الاقتراض وفق IAS 23 حتى الجاهزية الجوهرية" },
        { en: "Deferred payment → the CASH-PRICE equivalent is the cost; the excess accrues as financing expense", ar: "السداد المؤجل ← التكافؤ النقدي للسعر هو التكلفة؛ والزائد يتراكم مصروفًا تمويليًا" },
        { en: "A lessee's RIGHT-OF-USE asset classified as investment property follows IAS 40: at initial recognition its IFRS 16 carrying amount opens the record", ar: "أصل حق الاستخدام المصنف عقارًا استثماريًا يتبع IAS 40: يفتتح سجله بقيمته الدفترية وفق IFRS 16 عند الاعتراف الأولي" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Initial recognition — three ways in", ar: "الاعتراف الأولي — ثلاث طرق للدخول" },
      rows: [
        { dr: { en: "Investment property (cost 2,000)", ar: "عقار استثماري (تكلفة ٢٬٠٠٠)" }, cr: { en: "Payables / cash 2,000", ar: "دائنون / نقد ٢٬٠٠٠" } },
        { dr: { en: "Investment property 1,800 (cash-price equivalent) + financing expense 200 as it accrues", ar: "عقار استثماري ١٬٨٠٠ (تكافؤ نقدي) + مصروف تمويلي ٢٠٠ يتراكم" }, cr: { en: "Payables 2,000 (deferred payment)", ar: "دائنون ٢٬٠٠٠ (سداد مؤجل)" }, red: true },
        { dr: { en: "Investment property (construction cost incl. IAS 23 borrowing costs)", ar: "عقار استثماري (تكلفة إنشاء شاملة تكاليف اقتراض IAS 23)" }, cr: { en: "Payables / cash", ar: "دائنون / نقد" } },
        { cr: { en: "Day one: cost = fair value — the first fair-value measurement books NO gain", ar: "اليوم الأول: التكلفة = القيمة العادلة — فأول قياس للعادلة لا يثبت مكسبًا" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Subsequent measurement — the once-only choice", ar: "القياس اللاحق — الاختيار مرة واحدة" } },
    {
      kind: "tree",
      root: { en: "Pick the model for the WHOLE class", ar: "اختر النموذج للفئة كلها" },
      branches: [
        {
          when: { en: "FAIR VALUE MODEL — gains/losses (fair value movement vs prior carrying) go straight to P&L; NO DEPRECIATION, no residual estimates", ar: "نموذج القيمة العادلة — فروق القيمة (بينها وبين الدفترية السابقة) للأرباح مباشرة؛ ولا إهلاك ولا تقديرات متبقية" },
          then: { en: "The model most investment-property entities choose — every reporting date brings a fresh market verdict", ar: "النموذج الذي تختاره أغلب منشآت العقارات الاستثمارية — فكل تاريخ تقرير يحمل حكم سوق جديدًا", red: true },
        },
        {
          when: { en: "COST MODEL (IAS 16-style) — cost − accumulated depreciation − impairment", ar: "نموذج التكلفة (على طريقة IAS 16) — التكلفة − مجمع الإهلاك − الانخفاض" },
          then: { en: "Available for all; mandatory when fair value is NOT determinable on a continuing basis (rare, but construction-stage property may force cost until completion)", ar: "متاح للجميع؛ وإلزامي عند تعذر تعيين القيمة العادلة باستمرار (نادر، وقد يفرضه العقار تحت الإنشاء حتى اكتماله)" },
        },
        {
          when: { en: "Switching models?", ar: "تبديل النموذج؟" },
          then: { en: "FV → cost ONLY when fair value ceases to be reliably measurable; cost → FV is a voluntary IAS 8 policy change permitted only when it yields reliable and MORE RELEVANT information — practically a one-way door", ar: "من العادلة إلى التكلفة فقط عند تعذر القياس الموثوق للعادلة؛ ومن التكلفة إلى العادلة تغير سياسة اختياري وفق IAS 8 لا يجوز إلا إذا أنتج معلومات موثوقة وأكثر ملاءمة — وعمليًا باب ذو اتجاه واحد", red: true },
        },
      ],
    },
    {
      kind: "formula",
      title: { en: "The two models' engines", ar: "محركا النموذجين" },
      lines: [
        { en: "FV model: gain/(loss) for the period = closing fair value − opening carrying amount (after capitalised additions)", ar: "نموذج العادلة: مكسب/(خسارة) الفترة = القيمة العادلة الختامية − الدفترية الافتتاحية (بعد الإضافات المرسمَلة)" },
        { en: "FV model: NO depreciation, NO residual estimates, NO IAS 36 impairment — the fair value already carries the verdict", ar: "نموذج العادلة: لا إهلاك ولا تقديرات متبقية ولا انخفاض IAS 36 — فالقيمة العادلة تحمل الحكم أصلًا" },
        { en: "Cost model: carrying = cost − accumulated depreciation − impairment; IAS 36 applies; the fair value is still DISCLOSED", ar: "نموذج التكلفة: الدفترية = التكلفة − مجمع الإهلاك − الانخفاض؛ ويطبق IAS 36؛ وتبقى القيمة العادلة مفصحًا عنها" },
        { en: "Lifetime totals are EQUAL: the FV model books the same total profit — just EARLIER and without the disposal spike", ar: "الإجماليات مدى الحياة متساوية: نموذج العادلة يحجز الربح الإجمالي ذاته — لكن أبكر وبلا ذروة تخرُّد" },
      ],
    },
    {
      kind: "journal",
      title: { en: "FV-model entries", ar: "قيود نموذج القيمة العادلة" },
      rows: [
        { dr: { en: "Investment property (cost 2,000)", ar: "عقار استثماري (تكلفة ٢٬٠٠٠)" }, cr: { en: "Payables / cash", ar: "دائنون / نقد" } },
        { dr: { en: "Investment property (FV rise to 2,300)", ar: "عقار استثماري (ارتفاع إلى ٢٬٣٠٠)" }, cr: { en: "Fair-value gain (P&L) 300", ar: "مكسب القيمة العادلة (بالأرباح) ٣٠٠" }, red: true },
        { dr: { en: "Rental income receivable", ar: "إيراد إيجار مستحق" }, cr: { en: "Rental income (P&L)", ar: "إيراد الإيجار (بالأرباح)" } },
        { dr: { en: "Fair-value loss 50 (FV 2,250)", ar: "خسارة قيمة عادلة ٥٠ (عادلة ٢٬٢٥٠)" }, cr: { en: "Investment property", ar: "عقار استثماري" }, red: true },
        { cr: { en: "NO depreciation entry under the FV model — ever", ar: "لا قيد إهلاك إطلاقًا في نموذج القيمة العادلة" }, red: true },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The cost model keeps the property at cost − depreciation − impairment with IAS 36's machinery in force — but the fair value must still be DISCLOSED in the notes, so readers of both models' statements see the same market number. The choice is made for the WHOLE class of investment property, never property by property, which is why a single odd asset (an un-valuable construction-stage property) can drive the whole class's model in practice.",
        ar: "يُبقي نموذج التكلفة العقار عند التكلفة − الإهلاك − الانخفاض مع سريان آلية IAS 36 — لكن تبقى القيمة العادلة مفصحًا عنها في الإيضحات، فيرى قارئو القوائم في النموذجين الرقم السوقي ذاته. ويُتخذ الاختيار للفئة كلها لا عقارًا عقارًا، ولهذا قد يقود أصل شاذ واحد (عقار إنشائي يتعذر تقييمه) نموذج الفئة كلها عمليًا.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Investment property under construction: the FV model applies when fair value is determinable while building; if it truly is not, cost carries the property until completion, and once fair value becomes determinable the property jumps to fair value with the full movement in P&L. Once an entity begins measuring a completed property at fair value it must CONTINUE until disposal or change of use — the reliability escape is not a revolving door.",
        ar: "العقار الاستثماري تحت الإنشاء: يسري نموذج العادلة متى تعينت القيمة أثناء البناء؛ وإن لم تتعين فعلًا حملته التكلفة حتى الاكتمال، وما إن تصبح العادلة قابلة للتعيين حتى يقفز العقار إليها بكامل الحركة في الأرباح. ومن يبدأ قياس عقار مكتمل بالعادلة يلزمه الاستمرار حتى التخرد أو تغير الاستخدام — فمخرج الموثوقية ليس بابًا دوّارًا.",
      },
    },
    { kind: "h", text: { en: "Subsequent expenditure", ar: "الإنفاق اللاحق" } },
    {
      kind: "list",
      items: [
        { en: "Day-to-day servicing (repairs, maintenance, redecoration) → EXPENSE as incurred", ar: "الخدمة اليومية (إصلاح وصيانة وتجديد طلاء) ← مصروف عند التكبد" },
        { en: "Replacement of a major component / major improvement → CAPITALISE into the carrying amount", ar: "استبدال مكون رئيسي أو تحسين جوهري ← رسملة في القيمة الدفترية" },
        { en: "Under the FV model the market's verdict arrives with the NEXT measurement — capitalisation is about matching cost to the component's future benefits, never about dodging fair value", ar: "في نموذج العادلة يصل حكم السوق مع القياس التالي — فالرسملة عن مطابقة التكلفة بمنافع المكون لا عن التملص من القيمة العادلة" },
      ],
    },
    { kind: "h", text: { en: "Transfers — only on change of use", ar: "التحويلات — فقط عند تغير الاستخدام" } },
    {
      kind: "steps",
      items: [
        { en: "Confirm EVIDENCE of change of use (occupancy begins, development starts, sale agreed) — a revaluation or management intention is NOT evidence", ar: "أكّد دليل تغير الاستخدام (بدء شغل ذاتي أو تطوير أو تعاقد بيع) — وإعادة التقييم أو نية الإدارة ليسا دليلًا" },
        { en: "Measure under the OLD standard up to the transfer date (including the fair-value movement if leaving the FV model)", ar: "قِس وفق المعيار القديم حتى تاريخ التحويل (شاملًا حركة القيمة العادلة عند مغادرة نموذجها)" },
        { en: "Re-measure at the REQUIRED basis on entry to the new standard — the fair value at the transfer date becomes the DEEMED COST", ar: "أعد القياس بالأساس المطلوب عند دخول المعيار الجديد — فالعادلة بتاريخ التحويل تغدو التكلفة المفترضة" },
        { en: "Book the transitional difference where the receiving standard sends it (OCI revaluation reserve, P&L, or nothing when fair value was already the carrying amount)", ar: "اثبت فرق الانتقال حيث يوجهه المعيار المستقبل (احتياطي إعادة التقييم بالدخل الشامل، أو الأرباح، أو لا شيء إن كانت العادلة هي الدفترية أصلًا)" },
      ],
    },
    {
      kind: "tree",
      root: { en: "Evidence of change of use (owner-occupancy begins, development starts, sale contracted)", ar: "دليل تغير الاستخدام (بدء شغل ذاتي، بدء تطوير، تعاقد بيع)" },
      branches: [
        {
          when: { en: "Owner-occupied (IAS 16 cost model) → Investment property FV model", ar: "مشغول ذاتيًا (IAS 16 بالتكلفة) ← عقار استثماري بالقيمة العادلة" },
          then: { en: "Treat as a REVALUATION under IAS 16 (surplus via OCI/revaluation reserve); the FV becomes 'deemed cost' for IAS 40", ar: "يعامل كإعادة تقييم وفق IAS 16 (الفائض بالدخل الشامل/احتياطي إعادة التقييم)؛ وتصبح العادلة «تكلفة مفترضة» لـIAS 40", red: true },
        },
        {
          when: { en: "Investment property (FV model) → owner-occupied", ar: "عقار استثماري (بالقيمة العادلة) ← مشغول ذاتيًا" },
          then: { en: "Cost for IAS 16 = fair value at the date of change of use", ar: "تكلفة IAS 16 = القيمة العادلة بتاريخ تغير الاستخدام", red: true },
        },
        {
          when: { en: "Investment property → INVENTORY (owner becomes dealer-developer)", ar: "عقار استثماري ← مخزون (تحول المالك إلى مطور تاجر)" },
          then: { en: "Cost for IAS 2 = fair value at the change date; any prior FV model gain already booked stays booked", ar: "تكلفة IAS 2 = القيمة العادلة بتاريخ التغيير؛ وما حُجِز سابقًا من مكاسب العادلة يبقى محجوزًا", red: true },
        },
        {
          when: { en: "Inventory → investment property (FV model)", ar: "مخزون ← عقار استثماري (بالقيمة العادلة)" },
          then: { en: "Any difference between fair value and carrying goes to P&L (as if the inventory were sold at fair value)", ar: "الفرق بين القيمة العادلة والدفترية للأرباح (كأن المخزون بيع بالعادلة)", red: true },
        },
      ],
    },
    {
      kind: "journal",
      title: { en: "Transfer entries — the owner-occupied flip and friends", ar: "قيود التحويل — قلب الشغل الذاتي وأخواته" },
      rows: [
        { dr: { en: "Investment property (FV at date of change)", ar: "عقار استثماري (العادلة بتاريخ التغيير)" }, cr: { en: "PPE (net carrying) + revaluation surplus (OCI)", ar: "ممتلكات (صافي الدفترية) + فائض إعادة تقييم (دخل شامل)" }, red: true },
        { dr: { en: "PPE (deemed cost = FV at change date)", ar: "ممتلكات (تكلفة مفترضة = العادلة بتاريخ التغيير)" }, cr: { en: "Investment property (carrying at FV) — same number both sides, NO gain", ar: "عقار استثماري (الدفترية بالعادلة) — الرقم ذاته في الجانبين ولا مكسب" }, red: true },
        { dr: { en: "Inventory (FV at change date = deemed cost)", ar: "مخزون (العادلة بتاريخ التغيير = تكلفة مفترضة)" }, cr: { en: "Investment property — no gain, it was already booked", ar: "عقار استثماري — لا مكسب، فقد حُجِز سابقًا" }, red: true },
        { dr: { en: "Investment property (FV)", ar: "عقار استثماري (العادلة)" }, cr: { en: "Inventory (carrying) + gain in P&L (FV − carrying)", ar: "مخزون (الدفترية) + مكسب بالأرباح (العادلة − الدفترية)" }, red: true },
      ],
    },
    {
      kind: "example",
      title: { en: "The owner-occupied flip", ar: "قلب الشغل الذاتي" },
      lines: [
        { en: "1 Jan: offices (IAS 16) cost 4,000, accumulated depreciation 1,600 → carrying 2,400; the entity re-lets them and classifies them as IP under the FV model; FV at the change date 3,100", ar: "١ يناير: مكاتب IAS 16 بتكلفة ٤٬٠٠٠ ومجمع إهلاك ١٬٦٠٠ ← دفترية ٢٬٤٠٠؛ تعيد المنشأة تأجيرها وتبوّبها عقارًا استثماريًا بنموذج العادلة؛ والعادلة بتاريخ التغيير ٣٬١٠٠" },
        { en: "Entry: dr Investment property 3,100 / cr PPE (net) 2,400 / cr Revaluation surplus (OCI) 700 — IAS 16's revaluation mechanics", ar: "القيد: من ح/ عقار استثماري ٣٬١٠٠ إلى ح/ ممتلكات (صافي) ٢٬٤٠٠ وح/ فائض إعادة تقييم (دخل شامل) ٧٠٠ — بآلية إعادة التقييم في IAS 16" },
        { en: "FV at year-end 3,300 → FV-model gain 200 in P&L (the deemed cost 3,100 is the base)", ar: "العادلة نهاية السنة ٣٬٣٠٠ ← مكسب نموذج العادلة ٢٠٠ بالأرباح (والتكلفة المفترضة ٣٬١٠٠ هي الأساس)" },
        { en: "If the entity later re-occupies: cost for IAS 16 = the FV at THAT change date, and depreciation restarts over the remaining useful life", ar: "وإن أعادت المنشأة الشغل لاحقًا فتكلفة IAS 16 هي العادلة بتاريخ ذلك التغيير، ويستأنف الإهلاك على العمر المتبقي" },
      ],
    },
    { kind: "h", text: { en: "Disposals & compensation", ar: "التخرد والتعويض" } },
    {
      kind: "p",
      text: {
        en: "Derecognise on disposal or permanent withdrawal from use; the gain/loss = net disposal proceeds − carrying amount → P&L (NOT revenue). Compensation from third parties (expropriation, involuntary conversion) for impairment or loss → P&L when the receivable arises. Retirement or abandonment: derecognise with the same P&L logic.",
        ar: "يستبعد العقار عند التخرد أو الانسحاب الدائم من الاستخدام؛ والربح/الخسارة = صافي المتحصلات − القيمة الدفترية ← للأرباح (ليست إيرادًا). وتعويضات الغير عن النزع أو الفقد (تحويل قسري) ← للأرباح عند نشوء المستحق. والتقاعد أو التخلي بالمنطق ذاته.",
      },
    },
    {
      kind: "journal",
      title: { en: "Disposal — the exit entry", ar: "التخرد — قيد الخروج" },
      rows: [
        { dr: { en: "Cash (proceeds 2,400)", ar: "النقد (متحصلات ٢٬٤٠٠)" }, cr: { en: "Investment property (carrying 2,150) + gain on disposal (P&L) 250", ar: "عقار استثماري (دفترية ٢٬١٥٠) + ربح تخرد (بالأرباح) ٢٥٠" }, red: true },
        { dr: { en: "Compensation receivable (expropriation)", ar: "تعويض مستحق (نزع ملكية)" }, cr: { en: "Gain in P&L — when the receivable arises", ar: "مكسب بالأرباح — عند نشوء المستحق" }, red: true },
        { cr: { en: "The disposal gain is NOT revenue — revenue is the IFRS 15 rental stream earned through the year", ar: "ربح التخرد ليس إيرادًا — فالإيراد هو تدفق الإيجار وفق IFRS 15 المكتسب عبر السنة" } },
      ],
    },
    {
      kind: "example",
      title: { en: "Two models, one building", ar: "نموذجان ومبنى واحد" },
      lines: [
        { en: "Buy for 2,000 on 1 Jan; FV 2,200 at year 1 end; FV 2,150 at year 2 end; sold year 3 for 2,400", ar: "شراء بـ٢٬٠٠٠ في ١ يناير؛ وقيمة عادلة ٢٬٢٠٠ نهاية السنة الأولى و٢٬١٥٠ الثانية؛ وبِيع في الثالثة بـ٢٬٤٠٠" },
        { en: "FV model: Y1 gain +200 · Y2 loss −50 · Y3 gain on disposal = 2,400 − 2,150 = +250 → cumulative P&L +400", ar: "نموذج العادلة: مكسب أول ٢٠٠ وخسارة ثانٍ ٥٠ وربح بيع ٢٥٠ ← إجمالي بالأرباح ٤٠٠" },
        { en: "Cost model (20-yr life): Y1 dep 100 · Y2 dep 100 · Y3 dep 100 + gain on disposal = 2,400 − 1,700 = +700 → cumulative +400 — the LIFETIME total matches; the TIMING differs", ar: "نموذج التكلفة (عمر ٢٠ سنة): إهلاك ١٠٠ سنويًا وربح بيع ٧٠٠ ← الإجمالي ٤٠٠ أيضًا — الفارق في التوقيت لا المجموع" },
        { en: "The choice changes WHEN profit lands — and FV-model 'gains' are unrealised but taxed, so cash planning differs", ar: "الاختيار يغير موعد ظهور الربح — ومكاسب العادلة غير محققة لكنها قد تُضرب ضريبيًا فتختلف إدارة النقد" },
      ],
    },
    { kind: "h", text: { en: "Interactions — IFRS 16, IAS 36 & IAS 23", ar: "التزامن — IFRS 16 وIAS 36 وIAS 23" } },
    {
      kind: "list",
      items: [
        { en: "IFRS 16: a lessee's right-of-use asset meeting the IP definition follows IAS 40; if the FV model is chosen for the class, those ROU assets are measured at fair value too (the lease liability keeps its IFRS 16 measurement)", ar: "IFRS 16: أصل حق الاستخدام المحقق لتعريف العقار الاستثماري يتبع IAS 40؛ وإن اختير نموذج العادلة للفئة قيست تلك الأصول بالعادلة أيضًا (والتزام الإيجار يبقى بقياس IFRS 16)" },
        { en: "IAS 36: FV-model investment property is OUT of IAS 36's scope (the fair value is the verdict itself); cost-model property is fully subject to IAS 36", ar: "IAS 36: العقار الاستثماري بنموذج العادلة خارج نطاق IAS 36 (فالقيمة العادلة هي الحكم ذاته)؛ وبنموذج التكلفة يخضع كليًا لـIAS 36" },
        { en: "IAS 23: borrowing costs during construction of investment property qualify for capitalisation until substantially complete", ar: "IAS 23: تكاليف الاقتراض أثناء إنشاء العقار الاستثماري تؤهل للرسملة حتى الجاهزية الجوهرية" },
        { en: "IAS 12: the fair-value gain is unrealised but taxable in some jurisdictions — deferred tax follows, and the deemed-cost transfer raises its own tax-base questions", ar: "IAS 12: مكسب العادلة غير محقق لكنه قد يخضع للضريبة في بعض الولايات — فالضريبة المؤجلة تتبع، وتحويل التكلفة المفترضة يثير أسئلة وعائه الضريبي" },
        { en: "IAS 40 ↔ IAS 16: the ONLY bridge between the two worlds is evidence of change of use", ar: "IAS 40 ↔ IAS 16: الجسر الوحيد بين العالمين هو دليل تغير الاستخدام" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The sub-lease case examiners love: a lessee leases a floor, sub-leases it as an investment property and classifies the right-of-use asset as IP. The intermediate lessor accounts for the head lease under IFRS 16 and for the sub-lease as a lessor; if the ROU asset meets the IP definition and the FV model applies, that ROU asset sits at fair value with movements in P&L while the underlying lease liability unwinds at its original IFRS 16 rate — two engines running side by side.",
        ar: "حالة الإيجار الفرعي المحببة للممتحنين: تستأجر منشأة طابقًا وتؤجره من الباطن وتبوّب أصل حق الاستخدام عقارًا استثماريًا. فيحاسب المؤجر الوسيط على العقد الأصلي وفق IFRS 16 وعلى الإيجار الفرعي كمؤجِر؛ وإذا حقق أصل الحق التعريف وطبق نموذج العادلة جلس الأصل بالقيمة العادلة وحركاتها بالأرباح، بينما يُفَك التزام الإيجار بمعدله الأصلي وفق IFRS 16 — محركان يعملان جنبًا إلى جنب.",
      },
    },
    { kind: "h", text: { en: "Presentation in the financial statements", ar: "العرض في القوائم المالية" } },
    {
      kind: "p",
      text: {
        en: "The carrying amount sits as INVESTMENT PROPERTY on the face of the statement of financial position; rental income flows through revenue; fair-value gains and losses appear within PROFIT OR LOSS (commonly presented as other operating income) — they are NOT 'other comprehensive income' and never touch equity directly. Under the cost model, the IAS 16-style lines carry the property and the disclosed fair value lives in the notes only.",
        ar: "القيمة الدفترية تظهر ببند العقارات الاستثمارية على وجه الميزانية؛ وإيراد الإيجار يمر عبر الإيراد؛ ومكاسب وخسائر القيمة العادلة تظهر داخل الأرباح أو الخسائر (تعرض عادة كدخل تشغيلي آخر) — فليست «دخلًا شاملًا آخر» ولا تمس حقوق الملكية مباشرة. وفي نموذج التكلفة تحمل بنود IAS 16 العقار، وتعيش القيمة العادلة المفصح عنها في الإيضحات فقط.",
      },
    },
    { kind: "h", text: { en: "Disclosure checklist", ar: "قائمة الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "The model chosen + the criteria for classifying property as investment (owner-occupied boundary judgements)", ar: "النموذج المختار + معايير التبويب والحدود بين الاستثماري والمشغول" },
        { en: "FV model: the methods & assumptions (incl. whether an independent valuer with a recognised professional qualification was used); a reconciliation of carrying amount (additions, disposals, fair-value gains/losses, transfers, FX); rental income & direct operating expenses", ar: "نموذج العادلة: الأساليب والافتراضات (ومراجع تقييم مستقل مؤهل مهنيًا)؛ وتسوية القيمة الدفترية (إضافات، تخردات، مكاسب/خسائر عادلة، تحويلات، فروق عملة)؛ وإيراد الإيجار ومصروفات التشغيل المباشرة" },
        { en: "Cost model: the IAS 16-style disclosures + the fair value ADDITIONAL disclosure (you still disclose FV!) plus restrictions and obligations (leases in/out)", ar: "نموذج التكلفة: إفصاحات IAS 16 + الإفصاح الإضافي بالقيمة العادلة (تظل مفصحًا عنها!) + القيود والتزامات الإيجار (داخل/خارج)" },
        { en: "Contractual obligations to buy/build/develop property for investment or for repairs/maintenance", ar: "التعهدات التعاقدية بالاقتناء أو الإنشاء أو التطوير أو الإصلاح والصيانة" },
      ],
    },
    { kind: "h", text: { en: "Effective dates & amendments", ar: "تواريخ السريان والتعديلات" } },
    {
      kind: "p",
      text: {
        en: "IAS 40 was issued in 1998 (effective 2001) and reshaped by the 2003 Improvements programme (effective 1 January 2005 — the version this sheet renders); IFRS 13 (2013) sharpened the fair-value measurement input; IFRS 16 (2019) removed the old operating-lease classification and routed property interests held under leases through the right-of-use asset. A switch to the FV model stays a one-way door under IAS 8 discipline.",
        ar: "صدر IAS 40 عام ١٩٩٨ (سارٍ ٢٠٠١) وأعادت هيكلته برنامج التحسينات ٢٠٠٣ (سارٍ من ١ يناير ٢٠٠٥ — النسخة المعروضة هنا)؛ وأحكم IFRS 13 (٢٠١٣) مدخل قياس القيمة العادلة؛ وأزال IFRS 16 (٢٠١٩) تبويب الإيجار التشغيلي القديم ومرّر مصالح العقار بموجب الإيجار عبر أصل حق الاستخدام. ويبقى التحول لنموذج العادلة بابًا ذا اتجاه واحد تحت انضباط IAS 8.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Fair value for investment land reflects the market's HIGHEST AND BEST USE (IFRS 13) — land zoned for development is valued at its development potential even if the entity itself has no plans to build.",
        ar: "القيمة العادلة للأرض الاستثمارية تعكس أفضل استخدام ممكن من منظور السوق وفق IFRS 13 — فالأرض المرخصة للتطوير تقيَّم بإمكاناتها التطويرية ولو لم تكن للمنشأة ذاتها خطط بناء.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Subsequent costs: day-to-day repairs are EXPENSES; a renovation that restores or improves performance enters carrying amount (FV model: the market's verdict arrives via the next fair-value measurement anyway).",
        ar: "الإنفاق اللاحق: الإصلاحات اليومية مصروف؛ والتجديد الذي يعيد الأداء أو يحسنه يدخل في القيمة (وفي نموذج العادلة يصل أثر السوق عبر القياس التالي على أي حال).",
      },
    },
    {
      kind: "tip",
      text: {
        en: "FV-model gains are presented as OTHER OPERATING income or within operating profit — they are NOT 'other comprehensive income'; that distinction is a favourite exam multiple-choice.",
        ar: "مكاسب نموذج العادلة داخل الأرباح التشغيلية أو الدخل التشغيلي الآخر — وليست دخلًا شاملًا آخر؛ وتمييزها سؤال اختيار متعدد محبب.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Transfers only on CHANGE OF USE — a fair-value rise, a plan to sell 'sometime', or a board's redecoration intent is NOT evidence. The examiner's give-away words: 'the entity began owner-occupying on 1 July' → transfer THAT date.",
        ar: "التحويلات فقط عند تغير الاستخدام — فارتفاع القيمة العادلة أو خطة بيع «يومًا ما» أو نية المجلس للتجديد ليست أدلة. وكلمات الممتحن المفضوحة: «بدأت المنشأة الشغل الذاتي في ١ يوليو» ← التحويل بذلك التاريخ.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Profit on disposal is a GAIN presented outside revenue — mixing it into revenue overstates the IFRS 15 top line and is a favourite marker's cross.",
        ar: "ربح التخرد مكسب يعرض خارج الإيراد — وخلطه في الإيراد يضخم سطر IFRS 15 العلوي وهو خطأ تقييم محبب.",
      },
    },
  ],
}
