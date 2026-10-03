/** IAS 16 — Property, Plant and Equipment */

import type { Standard } from "../types"

export const IAS_16: Standard = {
  code: "IAS 16",
  title: { en: "Property, Plant and Equipment", ar: "الممتلكات والآلات والمعدات" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 2005 · 2020 amendment (revenue-related dismantling)", ar: "سارٍ من ١ يناير ٢٠٠٥ · تعديل ٢٠٢٠ (تكاليف الفك المتعلقة بالإيراد)" },
  blocks: [
    { kind: "h", text: { en: "Objective & the recognition test", ar: "الهدف ومعيار الاعتراف" } },
    {
      kind: "p",
      text: {
        en: "Prescribe the accounting for PPE — TANGIBLE items held for use in production/supply of goods or services, rental to others, or administration, expected to be used over MORE THAN ONE period. Recognition when BOTH: (a) it is PROBABLE that future economic benefits will flow to the entity, and (b) the COST is measurable reliably. Spare parts: major ones qualify as PPE; the rest are inventory (IAS 2) expensed on issue. Safety/environmental assets (a scrubber mandated by law) qualify even without direct revenue — they enable future benefits from related assets.",
        ar: "يحدد محاسبة الممتلكات والآلات والمعدات — البنود الملموسة المستخدمة في الإنتاج أو التوريد أو التأجير للغير أو الإدارة، والمنتظر استخدامها أكثر من فترة. ويعترف بالبند عند تحقق: (أ) ترجيح تدفق منافع اقتصادية مستقبلية، (ب) إمكان قياس التكلفة موثوقًا. وقطع الغيار الجوهرية ممتلكات، والباقي مخزون يحمَّل مصروفًا عند الصرف. والأصول الأمنية والبيئية (مرشح يفرضه القانون) تصلح ولو لم تدر إيرادًا مباشرًا — فهي تمكّن منافع أصول أخرى.",
      },
    },
    { kind: "h", text: { en: "Cost at recognition — the three buckets", ar: "التكلفة عند الاعتراف — الحاويات الثلاث" } },
    {
      kind: "list",
      items: [
        { en: "(a) purchase price + import duties + NON-refundable purchase taxes, LESS trade discounts and rebates", ar: "(أ) سعر الشراء + الرسوم الجمركية + ضرائب الشراء غير المستردة، بعد خصم الخصومات التجارية" },
        { en: "(b) DIRECTLY ATTRIBUTABLE costs: employee benefits, site preparation, delivery & handling, installation & assembly, professional fees, testing to working condition (net of proceeds from selling samples!)", ar: "(ب) التكاليف المرتبطة مباشرة: مزايا العاملين، تجهيز الموقع، النقل والمناولة، التركيب، أتعاب مهنية، الاختبارات حتى التشغيل (بصافي متحصلات بيع العينات)" },
        { en: "(c) the INITIAL ESTIMATE of DISMANTLING/RESTORATION obligations (IAS 37 measurement, discounted; the 2020 amendment extended this to revenue-producing dismantling costs)", ar: "(ج) التقدير الابتدائي للتزامات الفك/الإعادة لحالة أصلية (قياس IAS 37 مع الخصم؛ وامتد تعديل ٢٠٢٠ لتكاليف الفك المنتجة للإيراد)" },
        { en: "NOT capitalised: opening ceremonies, staff training, administration & general overheads, costs of self-constructed waste/abnormal losses, relocating/refurbishing beyond original condition", ar: "لا تُرسمل: حفل افتتاح، تدريب العاملين، التحميلات الإدارية، الخسائر غير الطبيعية للإنشاء الذاتي، النقل أو التجديد فوق الحالة الأصلية" },
        { en: "Startup & similar pre-production costs do NOT qualify; borrowing costs ride IAS 23's separate train", ar: "تكاليف التشغيل المبدئية لا تُرسمل؛ وتكاليف الاقتراض قطار IAS 23 المستقل" },
      ],
    },
    { kind: "h", text: { en: "Depreciation — allocation, not valuation", ar: "الإهلاك — توزيع لا تقييم" } },
    {
      kind: "p",
      text: {
        en: "Depreciation is the systematic allocation of the DEPRECIABLE AMOUNT (cost − residual value) over the USEFUL LIFE — the period over which the asset's benefits are consumed, which is often shorter than the physical life and is reviewed at least ANNUALLY (IAS 16.51). Depreciation begins when the asset is AVAILABLE FOR USE — not when it is actually used — and stops at derecognition (or when it becomes HFS under IFRS 5, or when fully depreciated... never 'when the asset is idle': land has unlimited life and is never depreciated).",
        ar: "الإهلاك توزيع منظم للمبلغ القابل للإهلاك (التكلفة − القيمة المتبقية) على العمر الإنتاجي — مدة استهلاك منافع الأصل وغالبًا أقصر من عمره المادي، ويراجع سنويًا على الأقل. ويبدأ عند صلاحية الأصل للاستخدام — لا عند استخدامه فعليًا — وينتهي بالاستبعاد (أو بالاحتفاظ به للبيع وفق IFRS 5)، والأرض لا تهلك.",
      },
    },
    {
      kind: "tree",
      title: { en: "Component & subsequent-expenditure logic", ar: "منطق المكونات والإنفاق اللاحق" },
      root: { en: "Expenditure on an existing asset", ar: "إنفاق على أصل قائم" },
      branches: [
        {
          when: { en: "REPLACES a component (new engine, new roof) — and the component was separately depreciated", ar: "يستبدل مكونًا (محرك جديد، سقف جديد) — والمكون كان مهلكًا منفصلًا" },
          then: { en: "Derecognise the OLD component's carrying amount, capitalise the new; if old cost unknowable, use the current cost of an equivalent as proxy", ar: "استبعد القيمة الدفترية للقديم ورسمل الجديد؛ وإن تعذر معرفة القديم استخدم تكلفة مثيل حاليًا", red: true },
        },
        {
          when: { en: "MAJOR INSPECTION/overhaul (aircraft heavy check) at regular intervals", ar: "فحص/إصلاح جوهري دوري (صيانة الطائرات الكبرى)" },
          then: { en: "Capitalise when the inspection condition existed at acquisition; the previous inspection's unamortised cost is derecognised", ar: "رسمل إذا كان شرط الفحص موجودًا عند الاقتناء؛ ويستبعد ما لم يستهلك من كلفة الفحص السابق", red: true },
        },
        {
          when: { en: "Maintains performance / restores (repairs, maintenance)", ar: "صيانة أداء أو إعادة لحالة سابقة" },
          then: { en: "EXPENSE — no future benefit beyond the original assessment", ar: "مصروف — لا منفعة مستقبلية فوق التقدير الأصلي", red: true },
        },
        {
          when: { en: "IMPROVES: increases future benefits (capacity extension, useful-life extension, quality upgrade)", ar: "يحسّن: يزيد منافع مستقبلية (توسعة طاقة، إطالة عمر، جودة أعلى)" },
          then: { en: "CAPITALISE as part of cost (or as a separate component)", ar: "رسمل ضمن التكلفة (أو مكونًا مستقلًا)", red: true },
        },
      ],
    },
    {
      kind: "formula",
      title: { en: "The depreciation engine", ar: "محرك الإهلاك" },
      lines: [
        { en: "Depreciable amount = cost (or revalued amount) − residual value", ar: "المبلغ القابل للإهلاك = التكلفة (أو المعاد تقييمها) − القيمة المتبقية" },
        { en: "Straight line = (cost − residual) ÷ useful life", ar: "القسط الثابت = (التكلفة − المتبقية) ÷ العمر" },
        { en: "Diminishing balance = carrying amount × rate (residual handled by the rate)", ar: "الرصيد المتناقص = القيمة الدفترية × النسبة (والمتبقية تعالجها النسبة)" },
        { en: "Units of production = (cost − residual) × units this period ÷ total expected units", ar: "وحدات الإنتاج = (التكلفة − المتبقية) × وحدات الفترة ÷ إجمالي الوحدات المتوقعة" },
        { en: "Change in life/residual/method → change in ESTIMATE (IAS 8): prospectively from the current carrying amount", ar: "التغير في العمر أو المتبقية أو الطريقة ← تغير تقدير (IAS 8): مستقبليًا من القيمة الدفترية الحالية" },
      ],
    },
    { kind: "h", text: { en: "Measurement after recognition — two models", ar: "القياس بعد الاعتراف — النموذجان" } },
    {
      kind: "tree",
      root: { en: "Choose the model — class by class", ar: "اختر النموذج — فئة بفئة" },
      branches: [
        {
          when: { en: "COST MODEL (default)", ar: "نموذج التكلفة (الافتراضي)" },
          then: { en: "Carrying = cost − accumulated depreciation − accumulated impairment", ar: "الدفترية = التكلفة − مجمع الإهلاك − مجمع الانخفاض" },
        },
        {
          when: { en: "REVALUATION MODEL — only if FAIR VALUE can be measured RELIABLY (an active market)", ar: "نموذج إعادة التقييم — فقط إذا أمكن قياس القيمة العادلة موثوقًا (سوق نشطة)" },
          then: { en: "Carrying = fair value at revaluation date − subsequent depreciation/impairment; keep the WHOLE class revalued with 'sufficient regularity'", ar: "الدفترية = القيمة العادلة بتاريخ إعادة التقييم − إهلاك/انخفاض لاحق؛ وتعاد تقييم الفئة كاملة بانتظام كافٍ", red: true },
        },
        {
          when: { en: "An entire class revalued?", ar: "الفئة كلها تعاد تقييمها؟" },
          then: { en: "Yes — required; but a class may be revalued on a ROLLING basis (machines this year, buildings next)", ar: "نعم — واجب؛ ويجوز التدوير داخل الفئة (آلات هذا العام ومبانٍ في التالي)" },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The first revaluation UP: credit the REVALUATION SURPLUS in OCI (never P&L); a revaluation DOWN is an expense — but first wipe any surplus for THAT asset within equity. On DISPOSAL the surplus is NOT recycled through P&L: transfer it DIRECTLY to RETAINED EARNINGS (or hold it in the reserve while the asset is used — but the transfer can also be made progressively as the asset is depreciated).",
        ar: "أول إعادة تقييم لأعلى: دائن احتياطي إعادة التقييم في الدخل الشامل الآخر (لا في الأرباح أبدًا)؛ وإعادة التقييم لأسفل مصروف بعد استنزاف فائض الأصل ذاته في حقوق الملكية. وعند التخرد لا يعاد تدوير الفائض عبر الأرباح بل يحول مباشرة إلى الأرباح المحتجزة (أو تدريجيًا مع الإهلاك).",
      },
    },
    {
      kind: "journal",
      title: { en: "Revaluation & the depreciation catch-up", ar: "إعادة التقييم ولحاق الإهلاك" },
      rows: [
        { dr: { en: "PPE (cost uplift)", ar: "ممتلكات (زيادة التكلفة)" }, cr: { en: "Accumulated depreciation (eliminate)", ar: "مجمع الإهلاك (إلغاء)" } },
        { dr: { en: "PPE (net uplift)", ar: "ممتلكات (الزيادة الصافية)" }, cr: { en: "Revaluation surplus (OCI)", ar: "احتياطي إعادة التقييم (الدخل الشامل)" }, red: true },
        { dr: { en: "Accumulated depreciation — proportionate restatement", ar: "مجمع الإهلاك — إعادة عرض تناسبية" }, cr: { en: "Revaluation surplus", ar: "احتياطي إعادة التقييم" }, red: true },
        { cr: { en: "Ongoing: depreciation on the NEW amount → charge P&L; transfer surplus → retained earnings as consumed (permissible)", ar: "لاحقًا: الإهلاك على المبلغ الجديد يحمَّل على الأرباح؛ ويجوز نقل الفائض إلى المحتجزة مع الاستهلاك" } },
      ],
    },
    {
      kind: "example",
      title: { en: "Revaluation worked numbers", ar: "إعادة تقييم بالأرقام" },
      lines: [
        { en: "Machine cost 1,000 · 10-year life · owned 4 years → carrying 600. Revalued to 900 with 6 years remaining", ar: "آلة بتكلفة ١٬٠٠٠ وعمر ١٠ سنوات؛ بعد ٤ سنوات دفتريتها ٦٠٠؛ أعيد تقييمها إلى ٩٠٠ و6 سنوات متبقية" },
        { en: "Uplift 300 → revaluation surplus (OCI) 300", ar: "الزيادة ٣٠٠ ← احتياطي إعادة التقييم ٣٠٠" },
        { en: "New annual depreciation = 900 ÷ 6 = 150 (was 100) — estimate-style going forward", ar: "الإهلاك السنوي الجديد = ٩٠٠ ÷ ٦ = ١٥٠ (كان ١٠٠)" },
        { en: "Optional equity tidy-up per year: transfer 50 of the surplus to retained earnings (the extra depreciation consumed)", ar: "ترتيب اختياري سنوي: نقل ٥٠ من الفائض إلى المحتجزة (الإهلاك الإضافي المستهلك)" },
        { en: "Sell in year 5 for 700: gain in P&L = 700 − (900 − 150) = −50 loss; surplus 250 left → retained earnings directly, NEVER through P&L", ar: "البيع في السنة الخامسة بـ٧٠٠: خسارة بالأرباح = ٧٠٠ − ٧٥٠ = ٥٠؛ ويحول الفائض المتبقي ٢٥٠ إلى المحتجزة مباشرة لا عبر الأرباح أبدًا" },
      ],
    },
    { kind: "h", text: { en: "Derecognition & compensation", ar: "الاستبعاد والتعويض" } },
    {
      kind: "p",
      text: {
        en: "Derecognise on DISPOSAL or when no future benefits are expected; the GAIN/LOSS = net disposal proceeds − carrying amount, recognised in P&L as the difference — it is NOT revenue (IFRS 15 covers customer contracts, not fixed-asset disposals). Compensation from third parties or insurance for impairment/loss items → P&L when receivable.",
        ar: "يستبعد الأصل عند التخرد أو انتفاء توقع المنافع؛ والربح/الخسارة = صافي متحصلات التخرد − القيمة الدفترية، وتعترف في الأرباح — وليست إيرادًا (فـIFRS 15 لعقود العملاء لا لتخرد الثوابت). وتعويضات الغير أو التأمين عن انخفاض أو فقد تذهب للأرباح عند القابلية للتحصيل.",
      },
    },
    {
      kind: "journal",
      title: { en: "Disposal entries", ar: "قيود التخرد" },
      rows: [
        { dr: { en: "Cash / receivable (proceeds)", ar: "نقد/مدينون (المتحصلات)" } },
        { dr: { en: "Accumulated depreciation", ar: "مجمع الإهلاك" } },
        { cr: { en: "PPE cost", ar: "تكلفة الممتلكات" } },
        { cr: { en: "Gain on disposal (P&L) — plug", ar: "ربح التخرد (بالأرباح) — فرق التوازن" }, red: true },
        { dr: { en: "Loss on disposal (P&L) — plug", ar: "خسارة التخرد (بالأرباح) — فرق التوازن" }, red: true },
      ],
    },
    { kind: "h", text: { en: "The impairment interface (IAS 36)", ar: "التقاطع مع انخفاض القيمة (IAS 36)" } },
    {
      kind: "list",
      items: [
        { en: "At each reporting date: test for INDICATORS; a revalued asset's impairment runs through the revaluation rules (reduce revaluation surplus first)", ar: "في كل تاريخ تقرير: اختبر المؤشرات؛ وانخفاض الأصل المعاد تقييمه يسري على قواعد إعادة التقييم (يستنزف الفائض أولًا)" },
        { en: "Compensation recognised for impairment/loss items goes to P&L even though the impairment itself ran through OCI (the asymmetry is deliberate)", ar: "تعويض الانخفاض/الفقد يذهب للأرباح وإن كان الانخفاض نفسه مرَّ بالدخل الشامل — عدم تماثل مقصود" },
        { en: "Depreciation continues after impairment over the REVISED remaining life", ar: "يستمر الإهلاك بعد الانخفاض على العمر المتبقي المعدل" },
      ],
    },
    { kind: "h", text: { en: "Disclosure checklist", ar: "قائمة الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Measurement bases + depreciation METHODS & rates (or lives) · gross carrying & accumulated depreciation (opening/closing reconciliation with additions, disposals, revaluations, impairment, FX)", ar: "أسس القياس وطرق الإهلاك ونِسبه · التكلفة الإجمالية والمجمع (تسوية افتتاحية-ختامية بالإضافات والتخرد وإعادة التقييم والانخفاض والفروق)" },
        { en: "Restrictions on title + PPE pledged as security + commitments to acquire", ar: "قيود الملكية والرهون وتعهدات الاقتناء" },
        { en: "Expenditure recognised in the carrying amount of items under construction", ar: "الإنفاق المرسمل ضمن البنود تحت الإنشاء" },
        { en: "Compensation from third parties recognised in P&L", ar: "تعويضات الغير المعترف بها بالأرباح" },
        { en: "Revalued classes: effective date of revaluation, whether an independent valuer was involved, the carrying amount at cost model that WOULD have been, the surplus movements", ar: "الفئات المعاد تقييمها: تاريخ التقييم والمراجع المستقل والقيمة الدفترية بنموذج التكلفة لو لم يُعِد التقييم وحركات الفائض" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The three-date trap: depreciation starts at AVAILABLE FOR USE, not when used; it pauses NEVER (except HFS); it ends at DERECOGNITION. 'Idle asset' in the scenario is bait — idle assets keep depreciating.",
        ar: "فخ التواريخ الثلاثة: يبدأ الإهلاك عند الصلاحية للاستخدام لا عند الاستخدام؛ ولا يتوقف أبدًا (إلا بالاحتفاظ للبيع)؛ وينتهي بالاستبعاد. وعبارة «أصل معطل» في السيناريو طُعم — فالمعطل يستمر في الإهلاك.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "A revaluation DOWN after an UP: first eliminate the asset's own revaluation surplus (equity), then the excess goes to P&L. Mirror order for a subsequent UP after a DOWN: first restore the P&L loss previously booked, then the surplus. The corridor is per-ASSET, not per-class.",
        ar: "إعادة التقييم لأسفل بعد أعلى: استنزف فائض الأصل ذاته ثم الزيادة للأرباح. وبالعكس: رد أولًا خسارة الأرباح السابقة ثم الفائض. والممر لكل أصل لا لكل فئة.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Important distinction: assets held for temporary repeated use (a reusable mould, pallets) remain PPE, depreciated over expected uses — they are not inventory.",
        ar: "تمييز مهم: الأصول المعدة لاستخدام متكرر مؤقت (قوالب قابلة لإعادة الاستخدام، منصات نقل) تبقى ممتلكات تُهلك على عدد الاستخدامات المتوقع — وليست مخزونًا.",
      },
    },
  ],
}
