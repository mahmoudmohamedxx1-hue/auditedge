/** IAS 40 — Investment Property */

import type { Standard } from "../types"

export const IAS_40: Standard = {
  code: "IAS 40",
  title: { en: "Investment Property", ar: "العقارات الاستثمارية" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 2005 · amended by IFRS 16 (leases)", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل بـ IFRS 16" },
  blocks: [
    { kind: "h", text: { en: "Definition", ar: "التعريف" } },
    {
      kind: "p",
      text: {
        en: "Investment property = property (land or a building — or part of a building — or both) held to EARN RENTALS or for CAPITAL APPRECIATION or both, by the OWNER or by the LESSEE under a RIGHT-OF-USE asset. The twin purposes separate it from owner-occupied property (IAS 16, held for production/supply/admin) and from inventory (IAS 2, held for sale in the ordinary course — the dealer's buildings are inventory, even if rented while awaiting sale).",
        ar: "العقار الاستثماري = عقار (أرض أو مبنى أو جزء منه أو كلاهما) محتفظ به لتأجيره أو لتحقيق نمو رأس المال أو لكليهما، سواء بيد المالك أو المستأجر بموجب أصل حق الاستخدام. والغرضان يميزانه عن العقار المشغول ذاتيًا (IAS 16) وعن المخزون (IAS 2 — مباني التاجر مخزون وإن أُجِّرت ريثما تباع).",
      },
    },
    {
      kind: "tree",
      title: { en: "The classification web", ar: "شبكة التبويب" },
      root: { en: "Classify the property", ar: "بَوِّب العقار" },
      branches: [
        {
          when: { en: "Held for rentals / appreciation, ownership unrestricted use", ar: "محتفظ به للتأجير أو النمو" },
          then: { en: "INVESTMENT PROPERTY", ar: "عقار استثماري", red: true },
        },
        {
          when: { en: "Owner-occupied (admin offices, plant, staff housing)", ar: "مشغول ذاتيًا (إدارة، مصنع، سكن عاملين)" },
          then: { en: "IAS 16 PPE — depreciated (or revalued)", ar: "ممتلكات IAS 16 — تُهلك (أو تعاد تقييمها)" },
        },
        {
          when: { en: "Mixed-use: part rentals (significant & not ancillary) + part owner-occupied — if the parts can be SOLD/LEASED separately", ar: "استخدام مختلط: جزء مؤجر جوهري + جزء مشغول — والأجزاء قابلة للبيع/التأجير منفصلة" },
          then: { en: "SPLIT: investment property for the rented part · IAS 16 for the occupied part (e.g. a tower with offices and a shopping atrium)", ar: "فصل: الجزء المؤجر عقار استثماري والمشغول ممتلكات (برج بمكاتب وأتريوم تجاري)", red: true },
        },
        {
          when: { en: "Mixed but NOT separable (an owner-occupied HQ with a small staff canteen rented out)", ar: "مختلط غير قابل للفصل (مقر بكانتين مؤجرة عرضًا)" },
          then: { en: "ALL IAS 16 owner-occupied (ancillary rental does not convert it), unless the rented part is significant", ar: "الكل ممتلكات مشغولة (والإيجار الملحق لا يحوله)، إلا إذا كان الجزء المؤجر جوهريًا", red: true },
        },
        {
          when: { en: "Under construction / development for a FUTURE investment property", ar: "تحت الإنشاء لعقار استثماري مستقبلي" },
          then: { en: "IAS 40 applies during construction (at fair value if the FV model is chosen and FV is determinable; otherwise cost until completion)", ar: "يطبق IAS 40 أثناء الإنشاء (بالقيمة العادلة إن اختير نموذجها وتعينت؛ وإلا فالتكلفة حتى الاكتمال)" },
        },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Property LEASED to a parent or sister company is NOT investment property from the GROUP's view — the group is owner-occupier; but in the SUBSIDIARY's separate statements it IS investment property.",
        ar: "العقار المؤجر للأم أو الشقيقة ليس استثماريًا من منظور المجموعة — فالمجموعة مشغلة ذاتيًا؛ لكنه استثماري في القوائم المنفصلة للتابعة.",
      },
    },
    { kind: "h", text: { en: "Initial recognition — cost", ar: "الاعتراف الأولي — التكلفة" } },
    {
      kind: "list",
      items: [
        { en: "Cost = purchase price + directly attributable transaction costs (legal, transfer taxes) — for a BUILT property; start-up costs, training, abnormal waste expensed", ar: "التكلفة = الثمن + تكاليف المعاملة المباشرة (أتعاب، رسوم نقل ملكية) — والتشغيل المبدئي والتدريب والهالك غير الطبيعي مصروفات" },
        { en: "Payment BEYOND normal credit terms → the property's cost is the CASH PRICE equivalent; the excess is a financing expense (IFRS 13 day-one logic)", ar: "السداد بتجاوز شروط الائتمان الاعتيادية ← التكلفة تعادل السعر النقدي والزائد مصروف تمويلي" },
        { en: "Self-constructed: cost = construction cost until completion date — IAS 23 borrowing costs capitalise, then stop at 'substantially complete & ready for use'", ar: "المنشأ ذاتيًا: التكلفة = تكلفة الإنشاء حتى الاكتمال — وتُرسمل تكاليف الاقتراض وفق IAS 23 وتتوقف عند الجاهزية" },
        { en: "An initial OPERATING LEASE held as an investment property (property interest held under a lease — pre-IFRS 16 term): capitalise at the LOWER of fair value and the PV of lease payments (with the IFRS 16 amendments, a ROU asset classified as investment property follows IAS 40 at its election)", ar: "مصلحة إيجار تشغيلي تعامل كعقار استثماري: تُرسمل بالأدنى من القيمة العادلة والقيمة الحالية لمدفوعات الإيجار — وبعد IFRS 16 يصبح أصل الحق في الاستخدام المصنف استثماريًا خاضعًا لـIAS 40 عند اختياره" },
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
          when: { en: "Choosing to change between models?", ar: "تغيير النموذج؟" },
          then: { en: "ONLY from fair value → cost when the fair-value model becomes IMPOSSIBLE — and that is EXCEPTIONALLY rare; never cost → FV (that would be a policy change IAS 8 blocks)", ar: "فقط من القيمة العادلة إلى التكلفة عند استحالة استمرارها — وهو نادر استثنائيًا؛ ولا عكس أبدًا (وإلا لكان تغير سياسة يمنعه IAS 8)", red: true },
        },
      ],
    },
    {
      kind: "journal",
      title: { en: "FV-model entries", ar: "قيود نموذج القيمة العادلة" },
      rows: [
        { dr: { en: "Investment property (cost 2,000)", ar: "عقار استثماري (تكلفة ٢٬٠٠٠)" }, cr: { en: "Payables / cash", ar: "دائنون / نقد" } },
        { dr: { en: "Investment property (FV rise to 2,300)", ar: "عقار استثماري (ارتفاع إلى ٢٬٣٠٠)" }, cr: { en: "Fair-value gain (P&L)", ar: "مكسب القيمة العادلة (بالأرباح)" }, red: true },
        { dr: { en: "Rental income receivable", ar: "إيراد إيجار مستحق" }, cr: { en: "Rental income (P&L — IFRS 16 lessor operating lease income)", ar: "إيراد الإيجار (بالأرباح)" } },
        { dr: { en: "Fair-value loss (FV 2,100)", ar: "خسارة قيمة عادلة (٢٬١٠٠)" }, cr: { en: "Investment property", ar: "عقار استثماري" }, red: true },
        { cr: { en: "NO depreciation entry under the FV model — ever", ar: "لا قيد إهلاك إطلاقًا في نموذج القيمة العادلة" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Transfers — only on change of use", ar: "التحويلات — فقط عند تغير الاستخدام" } },
    {
      kind: "tree",
      root: { en: "Evidence of change of use (owner-occupancy begins, development starts, sale contracted)", ar: "دليل تغير الاستخدام (بدء شغل ذاتي، بدء تطوير، تعاقد بيع)" },
      branches: [
        {
          when: { en: "Owner-occupied (IAS 16 cost model) → Investment property FV model", ar: "مشغول ذاتيًا (IAS 16 بالتكلفة) ← عقار استثماري بالقيمة العادلة" },
          then: { en: "Treat as a REVALUATION under IAS 16 (surplus via OCI/revaluation reserve; the FV becomes 'deemed cost' for IAS 40)", ar: "يعامل كإعادة تقييم وفق IAS 16 (الفائض بالدخل الشامل) وتصبح القيمة العادلة تكلفة مفترضة", red: true },
        },
        {
          when: { en: "Investment property (FV model) → owner-occupied", ar: "عقار استثماري (بالقيمة العادلة) ← مشغول ذاتيًا" },
          then: { en: "Cost for IAS 16 = fair value at the date of change of use", ar: "تكلفة IAS 16 = القيمة العادلة بتاريخ التغيير", red: true },
        },
        {
          when: { en: "Investment property → INVENTORY (owner becomes dealer-developer)", ar: "عقار استثماري ← مخزون (تحول المالك إلى مطور تاجر)" },
          then: { en: "Cost for IAS 2 = fair value at the change date; any prior FV model gain already booked stays booked", ar: "تكلفة IAS 2 = القيمة العادلة بتاريخ التغيير؛ وما حُ booked سابقًا من مكاسب يبقى", red: true },
        },
        {
          when: { en: "Inventory → investment property (FV model)", ar: "مخزون ← عقار استثماري (بالقيمة العادلة)" },
          then: { en: "Any difference between fair value and carrying goes to P&L (as if the inventory were sold at FV)", ar: "الفرق بين القيمة العادلة والدفترية للأرباح (كأن المخزون بيع بالعادلة)", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Disposals & compensation", ar: "التخرد والتعويض" } },
    {
      kind: "p",
      text: {
        en: "Derecognise on disposal or permanent withdrawal from use; the gain/loss = net disposal proceeds − carrying amount → P&L (NOT revenue). Compensation from third parties (expropriation, involuntary conversion) for impairment or loss → P&L when receivable. Retirement or abandonment: derecognise with the same P&L logic.",
        ar: "يستبعد عند التخرد أو الانسحاب الدائم؛ والربح/الخسارة = صافي المتحصلات − الدفترية ← للأرباح (ليست إيرادًا). وتعويضات الغير عن نزع أو فقد ← للأرباح عند الاستحقاق. والتقاعد أو التخلي بالمنطق ذاته.",
      },
    },
    {
      kind: "example",
      title: { en: "Two models, one building", ar: "نموذجان ومبنى واحد" },
      lines: [
        { en: "Buy for 2,000 on 1 Jan; FV 2,200 at year 1 end; FV 2,150 at year 2 end; sold year 3 for 2,400", ar: "شراء بـ٢٬٠٠٠؛ وقيمة عادلة ٢٬٢٠٠ نهاية السنة الأولى و٢٬١٥٠ الثانية؛ وبِيع في الثالثة بـ٢٬٤٠٠" },
        { en: "FV model: Y1 gain +200 · Y2 loss −50 · Y3 gain on disposal = 2,400 − 2,150 = +250 → cumulative P&L +400", ar: "نموذج العادلة: مكسب أول ٢٠٠ وخسارة ثانٍ ٥٠ وربح بيع ٢٥٠ ← إجمالي بالأرباح ٤٠٠" },
        { en: "Cost model (20-yr life): Y1 dep 100 · Y2 dep 100 · Y3 dep 100 + gain on disposal = 2,400 − 1,700 = +700 → cumulative +400 — the LIFETIME total matches; the TIMING differs", ar: "نموذج التكلفة (عمر ٢٠ سنة): إهلاك ١٠٠ سنويًا وربح بيع ٧٠٠ ← الإجمالي ٤٠٠ أيضًا — الفارق في التوقيت لا المجموع" },
        { en: "The choice changes WHEN profit lands — and FV-model 'gains' are unrealised but taxed, so cash planning differs", ar: "الاختيار يغير موعد ظهور الربح — ومكاسب العادلة غير محققة لكنها تُضرب ضريبيًا فتختلف إدارة النقد" },
      ],
    },
    { kind: "h", text: { en: "Disclosure checklist", ar: "قائمة الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "The model chosen + the criteria for classifying property as investment (owner-occupied boundary judgements)", ar: "النموذج المختار ومعايير التبويب والحدود بين الاستثماري والمشغول" },
        { en: "FV model: the methods & assumptions (incl. whether an independent valuer with recognised qualification was used); reconciliation of carrying amount: additions, disposals, fair-value gains/losses, transfers, FX; rental income & direct operating expenses", ar: "نموذج العادلة: الأساليب والافتراضات (ومراجع تقييم مستقل مؤهل)؛ وتسوية القيمة الدفترية؛ وإيراد الإيجار ومصروفات التشغيل المباشرة" },
        { en: "Cost model: the IAS 16-style disclosures + the fair value ADDITIONAL disclosure (you still disclose FV!) plus restrictions and obligations (leases in/out)", ar: "نموذج التكلفة: إفصاحات IAS 16 + إفصاح إضافي بالقيمة العادلة (تظل مفصحًا عنها!) + القيود والتزامات الإيجار (داخل/خارج)" },
        { en: "Contractual obligations to buy/build/develop property for investment or for repairs/maintenance", ar: "التعهدات التعاقدية بالاقتناء أو الإنشاء أو التطوير أو الإصلاح" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Subsequent costs: day-to-day repairs are EXPENSES; a renovation that restores/improves performance enters carrying amount (FV model: the market's verdict arrives via the next fair-value measurement anyway).",
        ar: "الإنفاق اللاحق: الإصلاحات اليومية مصروف؛ والتجديد الذي يعيد الأداء أو يحسنه يدخل في القيمة (وفي نموذج العادلة يصل أثر السوق عبر القياس التالي على أي حال).",
      },
    },
    {
      kind: "tip",
      text: {
        en: "FV-model gains are presented as OTHER OPERATING income or within operating profit — they are NOT 'other comprehensive income'; that distinction is a favourite exam multiple-choice.",
        ar: "مكاسب نموذج العادلة داخل الأرباح التشغيلية أو الدخل الآخر للتشغيل — وليست دخلًا شاملًا آخر؛ وتمييزها سؤال اختيار متعدد محبب.",
      },
    },
  ],
}
