/** IFRS 16 — Leases */

import type { Standard } from "../types"

export const IFRS_16: Standard = {
  code: "IFRS 16",
  title: { en: "Leases", ar: "الإيجارات" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 2019 · lessee model — almost every lease on balance sheet", ar: "سارٍ من ١ يناير ٢٠١٩ · نموذج المستأجر — كل إيجار تقريبًا في الميزانية" },
  blocks: [
    { kind: "h", text: { en: "Objective & core principle", ar: "الهدف والمبدأ الأساسي" } },
    {
      kind: "p",
      text: {
        en: "Core principle — a contract is, or contains, a lease when it conveys the right to CONTROL the use of an identified asset for a period of time in exchange for consideration. IFRS 16 ended the IAS 17 off-balance-sheet era for lessees: ONE single model now applies — every lease (bar two narrow exemptions) brings a RIGHT-OF-USE asset and a LEASE LIABILITY onto the statement of financial position, measured at the present value of the unpaid payments. The LESSOR keeps the old IAS 17 two-way classification (finance vs operating), so the standard is really two worlds in one: a brand-new engine for lessees and a grandfathered engine for lessors.",
        ar: "المبدأ الأساسي — يكون العقد إيجارًا (أو متضمنًا إيجارًا) عندما يمنح حق السيطرة على استخدام أصل محدد لفترة من الزمن مقابل عوض. أنهى IFRS 16 عهد الإخفاء خارج الميزانية الذي أرساه IAS 17 للمستأجرين: يطبق الآن نموذج واحد — فكل إيجار (عدا إعفاءين ضيقين) يدخل أصل حق استخدام والتزام إيجار إلى قائمة المركز المالي مقاسَين بالقيمة الحالية للمدفوعات غير المسددة. أما المؤجر فيحتفظ بثنائية IAS 17 (تمويلي مقابل تشغيلي)؛ فالمعيار في حقيقته عالمان في واحد: محرك جديد كليًا للمستأجر ومحرك موروث للمؤجر.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Control here = obtaining substantially all the ECONOMIC BENEFITS from use + the right to DIRECT that use. Not legal title, not possession — USE.",
        ar: "السيطرة هنا = الحصول على جوهر المنافع الاقتصادية من الاستخدام + حق توجيه ذلك الاستخدام. ليست ملكية قانونية ولا حيازة — بل الاستخدام ذاته.",
      },
    },
    { kind: "h", text: { en: "Scope & exclusions", ar: "النطاق والاستثناءات" } },
    {
      kind: "list",
      items: [
        { en: "Leases to EXPLORE for or use minerals, oil & natural gas → IFRS 6", ar: "إيجارات التنقيب عن المعادن والنفط والغاز الطبيعي أو استخدامها ← IFRS 6" },
        { en: "Licensing agreements — rights to films, videos, plays, manuscripts, patents, copyrights GRANTED by a lessor → IFRS 15", ar: "اتفاقيات الترخيص — حقوق الأفلام والمسرحيات والمخطوطات وبراءات الاختراع وحقوق النشر التي يمنحها مؤجر ← IFRS 15" },
        { en: "Leases of BIOLOGICAL ASSETS held by a lessee → IAS 41", ar: "إيجارات الأصول البيولوجية لدى المستأجر ← IAS 41" },
        { en: "SERVICE CONCESSION arrangements (public-to-private) → IFRIC 12", ar: "ترتيبات الامتياز الخدمي (من القطاع العام إلى الخاص) ← IFRIC 12" },
        { en: "Lessee leases of OTHER intangibles (e.g. software): IAS 38 applies — IFRS 16 is optional, not required", ar: "إيجارات الأصول غير الملموسة الأخرى للمستأجر (كالبرمجيات): يطبق IAS 38 — وتطبيق IFRS 16 اختياري لا إلزامي" },
        { en: "The two EXEMPTIONS every lessee may elect: short-term and low-value leases (see below)", ar: "الإعفاءان اللذان قد ينتخبهما كل مستأجر: الإيجار قصير الأجل والإيجار منخفض القيمة (انظر أدناه)" },
      ],
    },
    { kind: "h", text: { en: "Key definitions — the vocabulary sheet", ar: "التعريفات الأساسية — ورطة المصطلحات" } },
    {
      kind: "list",
      items: [
        { en: "IDENTIFIED ASSET — explicitly or implicitly specified; a substitution right defeats it only if SUBSTANTIVE", ar: "أصل محدد — معين صراحة أو ضمنًا؛ ولا يهزمه حق الإحلال إلا إذا كان جوهريًا" },
        { en: "LEASE TERM — non-cancellable period + renewal periods the lessee is REASONABLY CERTAIN to exercise + termination periods reasonably certain NOT to exercise", ar: "أجل الإيجار — الفترة غير القابلة للإلغاء + فترات التجديد المرجح تمديدها + فترات الإنهاء المرجح عدم ممارستها" },
        { en: "INITIAL DIRECT COSTS — incremental costs of obtaining a lease that would not have arisen had the lease not been obtained (commissions; NOT internal allocated overheads)", ar: "التكاليف المباشرة الأولية — تكاليف تضافية لولا الحصول على الإيجار ما كانت لتنشأ (عمولات؛ لا تحميلات داخلية موزعة)" },
        { en: "RATE IMPLICIT IN THE LEASE — the rate that equates the lessor's investment (asset FV + IDCs) with the lease receipts + unguaranteed residual", ar: "معدل الفائدة الضمني في العقد — المعدل الذي يساوي بين استثمار المؤجر (القيمة العادلة للاصل + تكاليفه المباشرة) وبين مقبوضات الإيجار والقيمة المتبقية غير المضمونة" },
        { en: "INCREMENTAL BORROWING RATE (IBR) — the rate the lessee would pay to borrow, over a similar term and with similar security, the funds needed to obtain the asset", ar: "معدل الاقتراض الحدي — المعدل الذي يدفع المستأجر لاقتراض الأموال اللازمة لحيازة الأصل بأجل مماثل وبضمان مماثل" },
        { en: "LEASE INCENTIVES — payments made to, or receivable by, the lessee (rent-free periods, cash contributions)", ar: "حوافز الإيجار — مدفوعات تُدفع للمستأجر أو يستحقها (فترات مجانية أو مساهمات نقدية)" },
        { en: "RESIDUAL VALUE GUARANTEE — a guarantee to the lessor that the value of the asset at end of lease will be at least a stated amount", ar: "ضمان القيمة المتبقية — ضمان للمؤجر بأن قيمة الأصل عند نهاية الإيجار لن تقل عن مبلغ محدد" },
        { en: "SALE AND LEASEBACK — the seller-lessee transfers the asset to a buyer-lessor and leases it back for the right of use it retains", ar: "البيع وإعادة الإيجار — ينقل البائع المستأجر الأصل إلى مشترٍ مؤجر ثم يستأجره من جديد مقابل الحق الذي احتفظ به" },
      ],
    },
    { kind: "h", text: { en: "Step 1 — Is it a lease at all?", ar: "الخطوة ١ — هل ثمّة إيجار أصلًا؟" } },
    {
      kind: "tree",
      root: { en: "A contract conveys the right to CONTROL the use of an identified asset for a period in exchange for consideration", ar: "عقد يمنح حق السيطرة على استخدام أصل محدد لفترة مقابل عوض" },
      branches: [
        {
          when: { en: "IDENTIFIED ASSET — explicitly or implicitly specified; no substantive substitution right (the supplier can't swap it without the customer's agreement and gains no benefit from swapping)", ar: "أصل محدد — معين صراحة أو ضمنًا؛ ولا حق إحلال جوهري (لا يستطيع المورد استبداله دون موافقة العميل ولا ينتفع من الاستبدال)" },
          then: { en: "Gate 1 passed — check economic control", ar: "البوابة الأولى عبرت — اختبر السيطرة الاقتصادية" },
        },
        {
          when: { en: "Right to substantially all ECONOMIC BENEFITS from use throughout the period", ar: "حق الحصول على جوهر المنافع الاقتصادية من الاستخدام طوال الفترة" },
          then: { en: "Gate 2 passed", ar: "البوابة الثانية عبرت" },
        },
        {
          when: { en: "Right to DIRECT the use — deciding how & for what purpose (or the use is predetermined and the customer designed the asset / operates it without supplier ability to change those instructions)", ar: "حق توجيه الاستخدام — تقرير الكيفية والغرض (أو الاستخدام محدد مسبقًا والعميل صمم الأصل أو شغّله دون قدرة المورد على تغيير التوجيهات)" },
          then: { en: "IT IS A LEASE — separate lease components from service components", ar: "إنه إيجار — فصل مكونات الإيجار عن مكونات الخدمة", red: true },
        },
        {
          when: { en: "Substitution right IS substantive (supplier benefits from swapping, practically able to swap)", ar: "حق الإحلال جوهري (ينتفع المورد من الاستبدال وقادر عليه عمليًا)" },
          then: { en: "NOT a lease — it's a service contract", ar: "ليس إيجارًا — إنه عقد خدمة", red: true },
        },
      ],
    },
    {
      kind: "note",
      text: {
        en: "PORTIONS of an asset can be identified: a floor of a building, a fibre-optic line's capacity. Capacity portions (a pipeline's 40%) qualify only if physically distinct; otherwise you must hold substantially all the capacity.",
        ar: "أجزاء من الأصل قد تكون محددة: طابق مبنى، سعة خط ألياف. وتقديرات السعة (٤٠٪ من أنبوب) تصلح فقط إذا كانت متميزة ماديًا؛ وإلا وجب حيازة جوهر السعة.",
      },
    },
    {
      kind: "p",
      text: {
        en: "The substitution-right test has two prongs, and BOTH must bite for the right to be substantive: the supplier must have the PRACTICAL ABILITY to substitute the asset throughout the period (alternative assets readily available, swap is quick and easy), AND the supplier would BENEFIT ECONOMICALLY from exercising that right (the replacement is cheaper, better suited, or avoided idle-asset losses). Protective rights — the right to demand the asset back when the customer breaks a covenant, or to veto a change of use — do NOT count as substitution and do not defeat identification. The assessment is made at INCEPTION and not revisited unless the terms change.",
        ar: "لاختبار حق الإحلال شرطان يجب تحققهما معًا ليكون الحق جوهريًا: أن يمتلك المورد القدرة العملية على الإحلال طوال الفترة (أصول بديلة متاحة، والاستبدال سريع ميسور)، وأن ينتفع المورد اقتصاديًا من ممارسته (بديل أرخص أو أنسب أو درء خسائر بطالة). أما الحقوق الحامية — كحق استرداد الأصل عند إخلال العميل بشرط، أو حق الاعتراض على تغيير الاستخدام — فلا تعد إحلالًا ولا تهزم تحديد الأصل. ويجري التقييم عند نشأة العقد ولا يعاد إلا إذا تغيرت الشروط.",
      },
    },
    { kind: "h", text: { en: "Separating lease & non-lease components", ar: "فصل مكونات الإيجار عن غير الإيجارية" } },
    {
      kind: "p",
      text: {
        en: "A lease agreement rarely contains only a lease: maintenance, cleaning, security and consumables ride alongside. Separate the components and ALLOCATE the consideration between them on the basis of RELATIVE STAND-ALONE PRICES — the stand-alone price of the lease component and the stand-alone price of each service (IFRS 15's best-observable-price thinking, but applied to lease packages). The lessee then capitalises only the lease slice. The practical expedient: the lessee may ELECT, by class of underlying asset, NOT to separate — the whole consideration enters the lease liability. That election inflates assets and liabilities, and some covenants (EBITDA!) get flattered because services once in operating costs become depreciation + interest.",
        ar: "قلّما يحتوي عقد الإيجار على إيجار وحده: فالصيانة والتنظيف والأمن والمستهلكات ترافقه. تُفصل المكونات ويُوزع المقابل بينها على أساس الأسعار المستقلة النسبية — السعر المستقل لمكون الإيجار والسعر المستقل لكل خدمة (منطق أفضل سعر ملحوظ في IFRS 15 مطبقًا على حزم الإيجار). ثم يرسمل المستأجر الجزء الإيجاري وحده. والمخرج العملي: يجوز للمستأجر أن ينتخب، بفئة الأصل محل الإيجار، عدم الفصل — فيدخل المقابل كله في التزام الإيجار. ذلك الانتخاب ينفش الأصول والالتزامات، وتتحسن بعض النسب (الأرباح قبل الفوائد والإهلاك!) لأن خدمات كانت ضمن التكاليف التشغيلية صارت إهلاكًا وفائدة.",
      },
    },
    {
      kind: "tree",
      title: { en: "Components: who separates, and how", ar: "المكونات: من يفصل وكيف" },
      root: { en: "A contract bundles a lease + services", ar: "عقد يحزم إيجارًا وخدمات" },
      branches: [
        {
          when: { en: "LESSEE separates: allocate the consideration on RELATIVE STAND-ALONE PRICES (best evidence: observable stand-alone prices; else estimate)", ar: "المستأجر يفصل: يوزع المقابل على الأسعار المستقلة النسبية (أفضل دليل: أسعار مستقلة ملحوظة؛ وإلا فتقدير)" },
          then: { en: "Lease slice → ROU asset + liability; service slice → expense as the services are received", ar: "الجزء الإيجاري ← أصل حق والتزام؛ وجزء الخدمة ← مصروف عند تلقي الخدمات", red: true },
        },
        {
          when: { en: "LESSEE elects the practical expedient (by CLASS of underlying asset): don't separate at all", ar: "المستأجر ينتخب المخرج العملي (بفئة الأصل محل العقد): لا فصل أصلًا" },
          then: { en: "ALL payments into the lease liability — bigger ROU & liability, no service expense line", ar: "كل المدفوعات في التزام الإيجار — أصل والتزام أكبر ولا سطر مصروف خدمة", red: true },
        },
        {
          when: { en: "LESSOR: IFRS 15 allocation applies — NO expedient available", ar: "المؤجر: يطبق توزيع IFRS 15 — ولا مخرج عملي متاحًا" },
          then: { en: "Lease component → lessor lease accounting; non-lease components → IFRS 15 revenue", ar: "مكون الإيجار ← محاسبة إيجار المؤجر؛ والمكونات الأخرى ← إيراد IFRS 15", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Step 2 — Initial measurement: the lessee engine", ar: "الخطوة ٢ — القياس الأولي: محرك المستأجر" } },
    {
      kind: "steps",
      items: [
        { en: "Determine the LEASE TERM — non-cancellable period ± options (reasonably certain)", ar: "حدد أجل الإيجار — الفترة غير القابلة للإلغاء ± الخيارات (المرجحة)" },
        { en: "Determine the LEASE PAYMENTS — fixed (incl. in-substance fixed) + index-linked at today's rate + expected residual-value-guarantee amounts + purchase option (if reasonably certain) + termination penalties", ar: "حدد مدفوعات الإيجار — الثابتة (ومنها الثابتة في الجوهر) + المرتبطة بمؤشر بسعر اليوم + مبالغ ضمان القيمة المتبقية المتوقعة + ثمن خيار الشراء (إن رجح) + غرامات الإنهاء" },
        { en: "Pick the DISCOUNT RATE — the implicit rate if readily determinable, else the incremental borrowing rate", ar: "اختر معدل الخصم — الضمني إن أمكن تعيينه بسهولة، وإلا فمعدل الاقتراض الحدي" },
        { en: "LEASE LIABILITY = present value of the unpaid payments", ar: "التزام الإيجار = القيمة الحالية للمدفوعات غير المسددة" },
        { en: "ROU ASSET = liability + prepaid rent + initial direct costs + restoration estimate (IAS 37) − incentives received", ar: "أصل حق الاستخدام = الالتزام + إيجار مقدم + تكاليف مباشرة أولية + تقدير الفك والإعادة (IAS 37) − الحوافز المقبوضة" },
      ],
    },
    {
      kind: "formula",
      title: { en: "Day-one amounts", ar: "مقادير اليوم الأول" },
      lines: [
        { en: "Lease liability = PV of UNPAID lease payments, discounted at the RATE IMPLICIT IN THE LEASE (or the lessee's INCREMENTAL BORROWING RATE when the implicit rate is not readily determinable)", ar: "التزام الإيجار = القيمة الحالية لمدفوعات الإيجار غير المسددة مخصومة بمعدل الفائدة الضمني في العقد (أو معدل الاقتراض الحدي للمستأجر عند تعذر تعيين الضمني بسهولة)" },
        { en: "Lease payments = fixed payments (incl. in-substance fixed) − lease incentives receivable + purchase-option price (if reasonably certain) + termination penalties (if term reflects exercise) + EXPECTED payments under residual-value guarantees", ar: "مدفوعات الإيجار = الثابتة (ومنها الثابتة في الجوهر) − حوافز الإيجار المستحقة + ثمن خيار الشراء (إن رجح) + غرامات الإنهاء (إذا انعكس الأجل على ممارستها) + المدفوعات المتوقعة بموجب ضمانات القيمة المتبقية" },
        { en: "ROU asset = liability + prepaid lease payments + initial DIRECT costs + restoration/dismantling estimate (IAS 37) − incentives received", ar: "أصل حق الاستخدام = الالتزام + مدفوعات إيجار مقدمة + تكاليف مباشرة أولية + تقدير الفك والتفكيك وإعادة الحال (IAS 37) − الحوافز المقبوضة" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The LEASE TERM: non-cancellable period + extension periods when the lessee is REASONABLY CERTAIN to extend + termination periods when reasonably certain NOT to exercise — reassessed on triggering events (a lease modification is NOT one). Variable payments that depend on an INDEX or RATE enter the liability at the CURRENT index rate; only when the cash flows actually CHANGE (the index moves) do you remeasure against an UNCHANGED discount rate. Payments contingent on usage or sales performance NEVER enter the liability — they are expensed as the events that trigger them occur.",
        ar: "أجل الإيجار: الفترة غير القابلة للإلغاء + فترات التمديد المرجح تمديدها + فترات الإنهاء المرجح عدم ممارستها — ويعاد تقييمه عند أحداث محفزة (وليس عند تعديل الإيجار). والمدفوعات المتغيرة المعتمدة على مؤشر أو معدل تدخل الالتزام بسعر المؤشر الجاري؛ وعند تغير التدفقات فعليًا (تحرك المؤشر) يعاد القياس بمعدل خصم دون تغيير. أما المدفوعات المعلقة على الاستخدام أو المبيعات فلا تدخل الالتزام أبدًا — بل تصرف عند وقوع الأحداث الموجبة لها.",
      },
    },
    {
      kind: "p",
      text: {
        en: "The DISCOUNT RATE: the lessee starts with the rate implicit in the lease — but that rate embeds the lessor's estimate of the UNGUARANTEED RESIDUAL VALUE, which the lessee usually cannot see. So in almost every third-party lease the implicit rate is NOT readily determinable and the INCREMENTAL BORROWING RATE takes over: the rate at which the lessee could borrow, on similar terms and with similar security, the cash to buy the asset outright. The IBR is lessee-specific (credit rating, term, currency, security), not the central-bank rate — say that in one clause and the mark is yours. A sub-lessee measures its sublease liability against the ROU ASSET from the head lease, not the underlying asset.",
        ar: "معدل الخصم: يبدأ المستأجر بالمعدل الضمني في العقد — لكن ذلك المعدل يتضمن تقدير المؤجر للقيمة المتبقية غير المضمونة وهو ما لا يراه المستأجر غالبًا. لذا ففي كل إيجار طرف ثالث تقريبًا يتعذر تعيين المعدل الضمني فيتولى معدل الاقتراض الحدي: المعدل الذي يستطيع المستأجر به الاقتراض، بأجل مماثل وبضمان مماثل، ثمن شراء الأصل نقدًا. والمعدل الحدي خاص بالمستأجر (تصنيفه الائتماني والأجل والعملة والضمان) وليس معدل البنك المركزي — قل ذلك بعبارة واحدة تنل الدرجة. والمستأجر الباطن يقيس التزام الإيجار الفرعي بالإشارة إلى أصل حق الاستخدام من العقد الرئيسي لا إلى الأصل ذاته.",
      },
    },
    {
      kind: "journal",
      title: { en: "Initial recognition — 4-year lease, payments 50,000 in arrears, IBR 6%, IDC 2,000, restoration 4,000", ar: "الاعتراف الأولي — إيجار ٤ سنوات بمدفوعات ٥٠٬٠٠٠ سنويًا بأثر لاحق ومعدل حدي ٦٪ وتكاليف مباشرة ٢٬٠٠٠ وفك ٤٬٠٠٠" },
      rows: [
        { dr: { en: "Right-of-use asset 173,255", ar: "أصل حق استخدام ١٧٣٬٢٥٥" }, cr: { en: "Lease liability 173,255 (PV: 50,000 × 3.4651)", ar: "التزام إيجار ١٧٣٬٢٥٥ (القيمة الحالية: ٥٠٬٠٠٠ × ٣٫٤٦٥١)" }, red: true },
        { dr: { en: "Right-of-use asset 2,000", ar: "أصل حق استخدام ٢٬٠٠٠" }, cr: { en: "Cash — initial direct costs 2,000", ar: "نقد — تكاليف مباشرة أولية ٢٬٠٠٠" } },
        { dr: { en: "Right-of-use asset 4,000", ar: "أصل حق استخدام ٤٬٠٠٠" }, cr: { en: "Provision — dismantling & restoration (IAS 37, PV) 4,000", ar: "مخصص — الفك وإعادة الحال (IAS 37 بالقيمة الحالية) ٤٬٠٠٠" } },
        { cr: { en: "ROU = 179,255 in total; prepaid rent would ADD, incentives received would DEDUCT", ar: "أصل الحق = ١٧٩٬٢٥٥ إجمالًا؛ والإيجار المقدم يضاف والحوافز المقبوضة تُخصم" } },
      ],
    },
    {
      kind: "example",
      title: { en: "The full lessee walk — PV, unwinding & depreciation", ar: "جولة المستأجر الكاملة — القيمة الحالية وفك الخصم والإهلاك" },
      lines: [
        { en: "4-year lease · 50,000 payable annually in arrears · IBR 6% · IDC 2,000 · restoration provision (PV) 4,000", ar: "إيجار ٤ سنوات · ٥٠٬٠٠٠ تُدفع سنويًا بأثر لاحق · معدل حدي ٦٪ · تكاليف مباشرة ٢٬٠٠٠ · مخصص فك (قيمة حالية) ٤٬٠٠٠" },
        { en: "Liability = 50,000 × 3.4651 = 173,255 · ROU = 173,255 + 2,000 + 4,000 = 179,255", ar: "الالتزام = ٥٠٬٠٠٠ × ٣٫٤٦٥١ = ١٧٣٬٢٥٥ · أصل الحق = ١٧٣٬٢٥٥ + ٢٬٠٠٠ + ٤٬٠٠٠ = ١٧٩٬٢٥٥" },
        { en: "Unwinding: Y1 173,255 + 10,395 − 50,000 = 133,650 · Y2 + 8,019 = 91,669 · Y3 + 5,500 = 47,169 · Y4 + 2,830 = nil (interest falls every year)", ar: "فك الخصم: س١: ١٧٣٬٢٥٥ + ١٠٬٣٩٥ − ٥٠٬٠٠٠ = ١٣٣٬٦٥٠ · س٢ + ٨٬٠١٩ = ٩١٬٦٦٩ · س٣ + ٥٬٥٠٠ = ٤٧٬١٦٩ · س٤ + ٢٬٨٣٠ = صفر (تنخفض الفائدة كل سنة)" },
        { en: "Depreciation = 179,255 ÷ 4 = 44,814/yr straight-line (no ownership transfer → the SHORTER of useful life and term picks the term)", ar: "الإهلاك = ١٧٩٬٢٥٥ ÷ ٤ = ٤٤٬٨١٤ سنويًا بالقسط الثابت (لا انتقال ملكية ← اختبار الأقصر يجيب بالأجل)" },
        { en: "Year-1 P&L = 44,814 + 10,395 = 55,209 vs 50,000 old straight-line rent — the FRONT-LOAD; total over the 4 years is identical", ar: "أرباح السنة الأولى = ٤٤٬٨١٤ + ١٠٬٣٩٥ = ٥٥٬٢٠٩ مقابل ٥٠٬٠٠٠ إيجارًا ثابتًا قديمًا — التحميل المبكر؛ والإجمالي على ٤ سنوات متطابق" },
      ],
    },
    { kind: "h", text: { en: "Step 3 — Subsequent measurement (lessee)", ar: "الخطوة ٣ — القياس اللاحق (المستأجر)" } },
    {
      kind: "tree",
      root: { en: "Carry the ROU asset forward", ar: "اسحب أصل الحق قدمًا" },
      branches: [
        {
          when: { en: "COST MODEL (default): cost − accumulated depreciation − accumulated impairment; depreciate over the SHORTER of useful life and lease term — unless ownership TRANSFERS or a purchase option is reasonably certain → then the USEFUL LIFE", ar: "نموذج التكلفة (الافتراضي): التكلفة − مجمع الإهلاك − مجمع الانخفاض؛ ويهلك على الأقصر من العمر الإنتاجي وأجل الإيجار — إلا إذا انتقلت الملكية أو رجح خيار الشراء ← فالعمر الإنتاجي" },
          then: { en: "Straight-line (or another systematic pattern) + interest accretion on the liability at the FIXED rate", ar: "بالقسط الثابت (أو نمط منتظم آخر) + استحقاق فائدة على الالتزام بالمعدل الثابت", red: true },
        },
        {
          when: { en: "The ROU class meets the INVESTMENT PROPERTY definition and the entity uses the IAS 40 FAIR VALUE model", ar: "بأت أصول الحق عقارًا استثماريًا والمنشأة على نموذج القيمة العادلة (IAS 40)" },
          then: { en: "Measure the ROU asset at FAIR VALUE — the only way an ROU leaves the cost model", ar: "يقاس أصل الحق بالقيمة العادلة — الطريق الوحيد لخروجه من نموذج التكلفة", red: true },
        },
        {
          when: { en: "REVALUATION: ROU assets that meet the IAS 16 definition may follow the IAS 16 revaluation model — but ONLY if the related PPE class is ALSO revalued", ar: "إعادة التقييم: أصول الحق المستوفية تعريف IAS 16 قد تتبع نموذج إعادة التقييم فيه — بشرط إعادة تقييم فئة الممتلكات ذاتها أيضًا" },
          then: { en: "OCI corridor mechanics (IAS 16 rules apply)", ar: "ممر الدخل الشامل بقواعد IAS 16" },
        },
      ],
    },
    {
      kind: "formula",
      title: { en: "The subsequent engine", ar: "المحرك اللاحق" },
      lines: [
        { en: "Interest expense = opening lease liability × discount rate (constant until remeasurement)", ar: "مصروف الفائدة = التزام الإيجار الافتتاحي × معدل الخصم (ثابت حتى إعادة القياس)" },
        { en: "Closing liability = opening liability + interest − payments made", ar: "الالتزام الختامي = الافتتاحي + الفائدة − المدفوعات" },
        { en: "Depreciation = ROU cost ÷ shorter of (useful life, lease term); the USEFUL LIFE alone when ownership transfers or the purchase option is reasonably certain", ar: "الإهلاك = تكلفة أصل الحق ÷ الأقصر من (العمر الإنتاجي، أجل الإيجار)؛ والعمر الإنتاجي وحده عند انتقال الملكية أو ترجيح خيار الشراء" },
        { en: "ROU carrying amount = cost − accumulated depreciation − accumulated impairment (IAS 36 does the impairment)", ar: "القيمة الدفترية لأصل الحق = التكلفة − مجمع الإهلاك − مجمع انخفاض القيمة (والانخفاض بمنطق IAS 36)" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Year-1 entries — the numbers from the worked example", ar: "قيود السنة الأولى — بأرقام المثال المحسوب" },
      rows: [
        { dr: { en: "Interest expense (finance costs) 10,395", ar: "مصروف فوائد (تكاليف تمويلية) ١٠٬٣٩٥" }, cr: { en: "Lease liability 10,395", ar: "التزام إيجار ١٠٬٣٩٥" }, red: true },
        { dr: { en: "Lease liability 50,000", ar: "التزام إيجار ٥٠٬٠٠٠" }, cr: { en: "Cash 50,000 (annual payment)", ar: "نقد ٥٠٬٠٠٠ (القسط السنوي)" } },
        { dr: { en: "Depreciation expense 44,814", ar: "مصروف إهلاك ٤٤٬٨١٤" }, cr: { en: "Accumulated depreciation — ROU 44,814", ar: "مجمع إهلاك أصل الحق ٤٤٬٨١٤" } },
        { cr: { en: "P&L geography forever after: DEPRECIATION (operating) + INTEREST (finance) — NOT one operating rent line", ar: "خريطة الأرباح بعدها دائمًا: إهلاك (تشغيلي) + فائدة (تمويلي) — لا سطر إيجار تشغيلي واحد" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Reassessment & remeasurement", ar: "إعادة التقييم وإعادة القياس" } },
    {
      kind: "p",
      text: {
        en: "The liability is remeasured — never left to drift — on defined TRIGGERS: a change in the lease term or the purchase-option assessment (reassess when the lessee takes a significant lease modification, builds significant economic incentives, or the contract terms change substantially); a change in the index or rate that drives the payments (remeasure when the cash flows actually change, not when the index is merely forecast to move); and a change in the amounts expected under a residual value guarantee. Each trigger pairs with its own discount-rate rule — and mixing them up is the single most popular IFRS 16 exam error.",
        ar: "يعاد قياس الالتزام — ولا يترك ينجرف أبدًا — عند محفزات محددة: تغير أجل الإيجار أو تقييم خيار الشراء (يعاد التقييم عند تعديل جوهري أو حوافز اقتصادية جوهرية أو تغير ملموس في شروط العقد)؛ وتغير المؤشر أو المعدل الذي يحدد المدفوعات (يعاد القياس عند تغير التدفقات فعليًا لا عند مجرد توقع تحرك المؤشر)؛ وتغير المبالغ المتوقعة بموجب ضمان القيمة المتبقية. ولكل محفز قاعدته في معدل الخصم — والخلط بينها أشهر أخطاء امتحانات IFRS 16 على الإطلاق.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "REVISED discount rate: change in the LEASE TERM · change in the purchase-option assessment · a lease modification that is not a separate lease", ar: "معدل خصم منقح: تغير أجل الإيجار · تغير تقييم خيار الشراء · تعديل إيجار ليس إيجارًا مستقلًا" },
        { en: "UNCHANGED discount rate: change in an INDEX or RATE driving the payments (CPI, market rents) — EXCEPT floating-interest-rate changes · change in the amounts expected under a RESIDUAL VALUE GUARANTEE", ar: "معدل خصم دون تغيير: تغير مؤشر أو معدل يحرك المدفوعات (الرقم القياسي للأسعار، الإيجارات السوقية) — عدا تغيرات معدلات الفائدة العائمة · تغير المبالغ المتوقعة بموجب ضمان القيمة المتبقية" },
        { en: "NEVER remeasure merely because the IBR has moved — the original rate stays LOCKED until a trigger fires", ar: "لا يعاد القياس لمجرد تحرك معدل الاقتراض الحدي — فالمعدل الأصلي يبقى مقفولًا حتى ينطلق محفز" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Reassessment & variable payments", ar: "إعادة التقييم والمدفوعات المتغيرة" },
      rows: [
        { dr: { en: "Right-of-use asset 5,347", ar: "أصل حق استخدام ٥٬٣٤٧" }, cr: { en: "Lease liability 5,347 — CPI steps the payment to 52,000: 133,650 → 138,997 at the UNCHANGED 6%", ar: "التزام إيجار ٥٬٣٤٧ — رفع المؤشر القسط إلى ٥٢٬٠٠٠: من ١٣٣٬٦٥٠ إلى ١٣٨٬٩٩٧ بالمعدل الثابت ٦٪" }, red: true },
        { dr: { en: "Variable lease expense 12,000 (0.5% of outlet sales)", ar: "مصروف إيجار متغير ١٢٬٠٠٠ (٠٫٥٪ من مبيعات المنفذ)" }, cr: { en: "Cash 12,000", ar: "نقد ١٢٬٠٠٠" } },
        { cr: { en: "Usage- and performance-based payments NEVER enter the liability — expensed as incurred", ar: "المدفوعات المبنية على الاستخدام أو الأداء لا تدخل الالتزام أبدًا — تصرف عند حدوثها" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Modifications", ar: "تعديلات العقد" } },
    {
      kind: "tree",
      root: { en: "The deal changed mid-flight", ar: "تغير العقد في منتصف الطريق" },
      branches: [
        {
          when: { en: "INCREASE in scope by ADDING right-of-use assets, at a price commensurate with the STANDALONE price of the increase", ar: "زيادة النطاق بإضافة حقوق استخدام بسعر يوازي السعر المستقل للزيادة" },
          then: { en: "A SEPARATE new lease — the old lease continues untouched", ar: "إيجار جديد مستقل — والقديم يستمر دون مساس", red: true },
        },
        {
          when: { en: "Modification NOT a separate lease (price change, term change, partial decrease of scope)", ar: "تعديل ليس إيجارًا مستقلًا (تغير سعر أو أجل أو تقليص نطاق جزئي)" },
          then: { en: "REMEASURE the liability at a REVISED discount rate; adjust the ROU asset symmetrically", ar: "يعاد قياس الالتزام بمعدل خصم منقح ويعدل أصل الحق بمقابله", red: true },
        },
        {
          when: { en: "Decrease in scope: reduce the ROU asset proportionately, book the P&L gain/loss on the part terminated", ar: "تقليص النطاق: يقل أصل الحق بالتناسب ويعترف بربح/خسارة الجزء المنتهي في الأرباح" },
          then: { en: "Gain/loss = reduction in liability for the terminated part − reduction in ROU", ar: "الربح/الخسارة = نقص التزام الجزء المنتهي − نقص الأصل", red: true },
        },
        {
          when: { en: "Reassessment of a purchase/extension option or index (triggering event occurred)", ar: "إعادة تقييم خيار شراء/تمديد أو مؤشر (حدث محفز وقع)" },
          then: { en: "Index/rate change → UNCHANGED discount rate (unless the flows come from FLOATING interest rates) — a subtle contrast with modifications", ar: "تغير المؤشر ← بمعدل خصم دون تغيير (إلا إذا نتج عن معدلات فائدة عائمة) — تباين دقيق مع التعديلات", red: true },
        },
      ],
    },
    {
      kind: "journal",
      title: { en: "Modification entries — three directions", ar: "قيود التعديل — ثلاثة اتجاهات" },
      rows: [
        { dr: { en: "Right-of-use asset 40,000 (a NEW floor added at its standalone price)", ar: "أصل حق استخدام ٤٠٬٠٠٠ (طابق جديد أضيف بسعره المستقل)" }, cr: { en: "Lease liability 40,000 — a SEPARATE lease measured fresh", ar: "التزام إيجار ٤٠٬٠٠٠ — إيجار مستقل يقاس من جديد" }, red: true },
        { dr: { en: "Lease liability 30,000 (25% of a 120,000 balance terminated)", ar: "التزام إيجار ٣٠٬٠٠٠ (٢٥٪ من رصيد ١٢٠٬٠٠٠ أنهي)" }, cr: { en: "Right-of-use asset 24,000 (25% of a 96,000 ROU)", ar: "أصل حق استخدام ٢٤٬٠٠٠ (٢٥٪ من أصل حق ٩٦٬٠٠٠)" } },
        { cr: { en: "Gain on partial termination 6,000 = 30,000 liability released − 24,000 ROU released", ar: "ربح الإنهاء الجزئي ٦٬٠٠٠ = ٣٠٬٠٠٠ التزامًا محلولًا − ٢٤٬٠٠٠ أصلًا محلولًا" }, red: true },
        { cr: { en: "Any OTHER modification (e.g. rent increase): remeasure at the REVISED rate against the ROU — no P&L", ar: "أي تعديل آخر (كرفع الإيجار): يعاد القياس بمعدل منقح مقابل الأصل — ولا أرباح" } },
      ],
    },
    { kind: "h", text: { en: "Impairment of the ROU asset", ar: "انخفاض قيمة أصل الحق" } },
    {
      kind: "p",
      text: {
        en: "The ROU asset is IMPAIRED under IAS 36 — full machinery: impairment indicators, the higher of fair-value-less-costs-of-disposal and value-in-use, and allocation to CGUs (the ROU asset sits in the CGU that benefits from its use). Reversals follow IAS 36's normal walls (no reversal for a foreign-exchange or price-index remeasurement — those go through the liability). An onerous lease story — the workspace no longer needed, sub-lease market collapsed — runs through IAS 36 on the ROU asset, NOT through an IAS 37 provision stacked on top of the already-recognised lease liability (the IFRIC's answer). Only when the ROU is fully written down and future payments still exceed remaining benefits does any further charge arise, still via the impairment/remeasurement route.",
        ar: "ينخفض أصل حق الاستخدام وفق IAS 36 — بالآلية الكاملة: مؤشرات الانخفاض، والأعلى من القيمة العادلة مخصومة تكاليف البيع والقيمة الاستخدامية، والتوزيع على وحدات توليد النقد (يقع أصل الحق في الوحدة المنتفعة باستخدامه). وتتبع الارتجاعات جدران IAS 36 المعتادة (لا ارتجاع لإعادة قياس عملة أو مؤشر أسعار — فتلك تمر عبر الالتزام). وحكاية الإيجار المفضِّر — مساحة لم تعد لازمة وسوق الإيجار الباطن انهار — تمر بـIAS 36 على أصل الحق، لا بمخصص IAS 37 يركب فوق التزام إيجار معترف به سلفًا (وهذا جواب لجنة التفسيرات). ولا ينشأ تحميل إضافي إلا إذا انخفض الأصل كليًا وظلت المدفوعات تفوق المنافع المتبقية، وحتى حينها يظل الطريق هو الانخفاض وإعادة القياس.",
      },
    },
    {
      kind: "journal",
      title: { en: "ROU impairment — year-1 numbers carried forward", ar: "انخفاض أصل الحق — بأرقام السنة الأولى" },
      rows: [
        { dr: { en: "Impairment loss (P&L) 14,441", ar: "خسارة انخفاض قيمة (بالأرباح) ١٤٬٤٤١" }, cr: { en: "Accumulated impairment — ROU 14,441", ar: "مجمع انخفاض قيمة أصل الحق ١٤٬٤٤١" }, red: true },
        { cr: { en: "ROU carrying 179,255 − 44,814 = 134,441 vs recoverable amount 120,000 → the IAS 36 charge", ar: "الدفترية ١٧٩٬٢٥٥ − ٤٤٬٨١٤ = ١٣٤٬٤٤١ مقابل مبلغ قابل للاسترداد ١٢٠٬٠٠٠ ← تحميل IAS 36" } },
      ],
    },
    { kind: "h", text: { en: "The two exemptions in action", ar: "الإعفاءان عمليًا" } },
    {
      kind: "p",
      text: {
        en: "SHORT-TERM: a lease with a term of 12 months or LESS at COMMENCEMENT and containing no purchase option — the entity may expense the payments straight-line, electing BY CLASS of underlying asset. LOW-VALUE: the underlying asset is worth roughly USD 5,000 or less WHEN NEW (laptops, phones, small items of furniture — a car is NEVER low-value however cheap) — election again by class. A lease that starts as 13 months and is later shortened does NOT join the club retroactively: the term is fixed at commencement. Choose the exemption and you keep a single straight-line expense; waive it and the full ROU machinery applies. Both exemptions are optional — an entity can capitalise a 6-month lease if consistency demands it.",
        ar: "قصير الأجل: إيجار أجله ١٢ شهرًا أو أقل عند بدء الإيجار ولا يتضمن خيار شراء — يجوز للمنشأة تحميل المدفوعات بالقسط الثابت، والانتخاب بفئة الأصل محل العقد. ومنخفض القيمة: أصل يساوي نحو ٥٬٠٠٠ دولار أو أقل وهو جديد (حواسيب محمولة وهواتف وأثاث صغير — فالسيارة ليست منخفضة القيمة مهما رخصت) — والانتخاب بفئة الأصل كذلك. والإيجار الذي يبدأ ١٣ شهرًا ثم يقصر لا يلتحق بالإعفاء بأثر رجعي: فالأجل يثبت عند البدء. اخترت الإعفاء فلك مصروف ثابت واحد؛ وملته فارمح بك آلية أصل الحق كاملة. والإعفاءان اختياريان — يجوز رسملة إيجار ٦ أشهر إذا اقتضت الاتساقية ذلك.",
      },
    },
    {
      kind: "journal",
      title: { en: "Exemption expense — no ROU, no liability", ar: "مصروف الإعفاء — لا أصل حق ولا التزام" },
      rows: [
        { dr: { en: "Rent expense — short-term warehouse 2,000/month", ar: "مصروف إيجار — مستودع قصير الأجل ٢٬٠٠٠ شهريًا" }, cr: { en: "Cash 2,000", ar: "نقد ٢٬٠٠٠" }, red: true },
        { dr: { en: "Office expense — low-value laptops 60/month", ar: "مصروف مكتبي — حواسيب منخفضة القيمة ٦٠ شهريًا" }, cr: { en: "Cash 60", ar: "نقد ٦٠" } },
        { cr: { en: "Straight-line or another systematic basis over the term — and disclose the expense amount", ar: "بالقسط الثابت أو أساس منتظم آخر عبر الأجل — مع الإفصاح عن المصروف" } },
      ],
    },
    { kind: "h", text: { en: "Lessor accounting — the retained two-way", ar: "محاسبة المؤجر — الثنائية الباقية" } },
    {
      kind: "p",
      text: {
        en: "The lessor keeps IAS 17's CLASSIFICATION: does the lease transfer SUBSTANTIALLY ALL the risks and rewards incidental to ownership of the underlying asset? Indicators: ownership transfer by end of term, bargain purchase option, term for the major part of the asset's life, PV of receipts substantially all of the asset's fair value, specialised asset only the lessee can use, cancellability losses, residual-value guarantee. FINANCE → derecognise the asset, recognise the NET INVESTMENT IN THE LEASE (PV of receipts + PV of unguaranteed residual, at the implicit rate) and earn interest over the pattern of the net investment. OPERATING → keep the asset, keep depreciating it, take income straight-line. Manufacturer/dealer lessors book a day-one SELLING PROFIT under IFRS 15-style logic: revenue at the lower of the asset's fair value and the PV of lease receipts at a market rate.",
        ar: "يحتفظ المؤجر بتصنيف IAS 17: هل ينقل الإيجار جوهر مخاطر ومنافع الملكية للأصل محل العقد؟ المؤشرات: انتقال الملكية بنهاية الأجل، خيار شراء بمغرٍ، أجل يغطي الجزء الأكبر من عمر الأصل، قيمة حالية للمقبوضات تعادل جوهر القيمة العادلة، أصل متخصص لا يستعمله غير المستأجر، خسائر الإلغاء على المؤجر، ضمان القيمة المتبقية. تمويلي ← يستبعد الأصل ويعترف بصافي الاستثمار في الإيجار (القيمة الحالية للمقبوضات + القيمة الحالية للمتبقي غير المضمون بالمعدل الضمني) ويحقق فائدة عبر نمط الاستثمار الصافي. تشغيلي ← يبقي الأصل ويستمر في إهلاكه ويعترف بالدخل بالقسط الثابت. أما المؤجر الصانع/التاجر فيحجز ربح بيع في اليوم الأول بمنطق IFRS 15: إيراد بالأدنى من القيمة العادلة للأصل والقيمة الحالية للمقبوضات بمعدل سوق.",
      },
    },
    {
      kind: "tree",
      root: { en: "Lessor classifies the lease", ar: "يصنف المؤجر الإيجار" },
      branches: [
        {
          when: { en: "Transfers SUBSTANTIALLY ALL risks & rewards incidental to ownership (the IAS 17 test survives)", ar: "ينقل جوهر مخاطر ومنافع الملكية (اختبار IAS 17 الباقي)" },
          then: { en: "FINANCE lease: derecognise the asset, recognise NET INVESTMENT IN LEASE at the implicit rate; income = interest over the pattern of the net investment; the ROU interplay for subleases: classify the SUBLEASE by reference to the head-lease ROU asset, not the underlying asset", ar: "إيجار تمويلي: يستبعد الأصل ويعترف بصافي استثمار في الإيجار بالمعدل الضمني؛ والدخل فائدة عبر نمط الاستثمار الصافي؛ والإيجار الفرعي يصنف بالعودة إلى أصل الحق الرئيسي لا إلى الأصل محل العقد", red: true },
        },
        {
          when: { en: "Risks & rewards stay with the lessor", ar: "تبقى المخاطر والمنافع لدى المؤجر" },
          then: { en: "OPERATING lease: keep the asset, continue its depreciation (IAS 16/IAS 40/IAS 38 as applicable); recognise lease income STRAIGHT-LINE (or another systematic basis); initial DIRECT costs added to the asset's carrying and expensed over the term", ar: "إيجار تشغيلي: يبقى الأصل ويستمر إهلاكه (بـIAS 16/IAS 40/IAS 38 بحسب الأنسب)؛ والدخل بالقسط الثابت (أو أساس منتظم آخر)؛ وتضاف التكاليف المباشرة الأولية للدفترية وتحمل على مدى الأجل", red: true },
        },
        {
          when: { en: "Manufacturer/Dealer lessor: finance lease assumed; revenue at the LOWER of the lease's fair value and the PV of lease receipts (at a MARKET rate), selling profit = the market price at sale; the artificial-rate discount trap", ar: "مؤجر صانع/تاجر: يفترض الإيجار التمويلي؛ والإيراد بالأدنى من القيمة العادلة والقيمة الحالية للمقبوضات (بمعدل سوق)، وربح البيع بسعر السوق؛ وانتبه لفخ الخصم بمعدل مصطنع" },
          then: { en: "Day-one selling profit + interest income over the term; initial direct costs expensed when the profit is booked", ar: "ربح بيع في اليوم الأول + فائدة عبر الأجل؛ والتكاليف المباشرة تصرف عند إثبات الربح", red: true },
        },
      ],
    },
    {
      kind: "journal",
      title: { en: "Lessor — finance lease (dealer: equipment cost 90,000, net investment 100,000, implicit 8%)", ar: "المؤجر — إيجار تمويلي (تاجر: تكلفة المعدات ٩٠٬٠٠٠ وصافي الاستثمار ١٠٠٬٠٠٠ والمعدل الضمني ٨٪)" },
      rows: [
        { dr: { en: "Net investment in lease 100,000", ar: "صافي الاستثمار في الإيجار ١٠٠٬٠٠٠" }, cr: { en: "Revenue — equipment 100,000 (lower of FV and PV of receipts)", ar: "إيراد — معدات ١٠٠٬٠٠٠ (الأدنى من العادلة والقيمة الحالية للمقبوضات)" }, red: true },
        { dr: { en: "Cost of goods sold 90,000", ar: "تكلفة المبيعات ٩٠٬٠٠٠" }, cr: { en: "Inventory 90,000", ar: "مخزون ٩٠٬٠٠٠" } },
        { dr: { en: "Net investment in lease 8,000", ar: "صافي الاستثمار في الإيجار ٨٬٠٠٠" }, cr: { en: "Finance income 8,000 (year-1 accretion: 100,000 × 8%)", ar: "إيراد تمويلي ٨٬٠٠٠ (استحقاق السنة الأولى: ١٠٠٬٠٠٠ × ٨٪)" } },
      ],
    },
    {
      kind: "journal",
      title: { en: "Lessor — operating lease (asset 100,000, 10-year life, rent 30,000/yr)", ar: "المؤجر — إيجار تشغيلي (أصل ١٠٠٬٠٠٠ وعمر ١٠ سنوات وإيجار ٣٠٬٠٠٠ سنويًا)" },
      rows: [
        { dr: { en: "Cash 30,000", ar: "نقد ٣٠٬٠٠٠" }, cr: { en: "Lease income 30,000 (straight-line)", ar: "دخل إيجار ٣٠٬٠٠٠ (بالقسط الثابت)" }, red: true },
        { dr: { en: "Depreciation expense 10,000", ar: "مصروف إهلاك ١٠٬٠٠٠" }, cr: { en: "Accumulated depreciation 10,000", ar: "مجمع إهلاك ١٠٬٠٠٠" } },
        { dr: { en: "Asset carrying amount 3,000", ar: "القيمة الدفترية للأصل ٣٬٠٠٠" }, cr: { en: "Cash 3,000 — initial direct costs added & spread over the term", ar: "نقد ٣٬٠٠٠ — تكاليف مباشرة أولية تضاف وتوزع على مدى الأجل" } },
      ],
    },
    {
      kind: "p",
      text: {
        en: "SUBLEASES & embedded leases: an intermediate lessor (the head-lease lessee) classifies the sublease with reference to the ROU ASSET it gets from the head lease — not the underlying asset — because that is the asset it controls and passes on. If the head lease is an 8-year ROU and the sublease runs 3 years, the sublease is probably OPERATING even though the underlying building has a 40-year life. Embedded leases hide inside service contracts: an outsourced data centre, dedicated transport fleet, or warehouse capacity arrangement must be tested for an identified asset and control — the lease inside the service is split out and capitalised while the pure service stays in operating expense.",
        ar: "الإيجار الباطن والإيجارات المضمنة: يصنف المؤجر الوسيط (مستأجر العقد الرئيسي) الإيجار الباطن بالإشارة إلى أصل حق الاستخدام الذي يكسبه من العقد الرئيسي — لا إلى الأصل ذاته — لأنه هو الأصل الذي يسيطر عليه ويمرره. فإذا كان العقد الرئيسي أصل حق لـ٨ سنوات والإيجار الباطن ٣ سنوات، فالباطن غالبًا تشغيلي وإن كان المبنى عمره ٤٠ سنة. وتختبئ الإيجارات المضمنة داخل عقود الخدمة: مركز بيانات مُسنَد، أسطول نقل مخصص، أو ترتيب سعة مستودع — كلها تختبر لأصل محدد وسيطرة؛ فيقتطع الإيجار داخل الخدمة ويرسل بينما تبقى الخدمة الصرفة ضمن المصروف التشغيلي.",
      },
    },
    { kind: "h", text: { en: "Sale and leaseback", ar: "البيع وإعادة الإيجار" } },
    {
      kind: "tree",
      title: { en: "Is the 'sale' a sale?", ar: "هل «البيع» بيع؟" },
      root: { en: "Seller sells an asset and leases it back", ar: "بائع يبيع أصلًا ويستأجره من جديد" },
      branches: [
        {
          when: { en: "CONTROL passes to the buyer-lessor per IFRS 15 (no repurchase right, no retained control of the use transferred)", ar: "تنتقل السيطرة إلى المشتري المؤجر وفق IFRS 15 (لا حق إعادة شراء ولا سيطرة محتفظ بها على الاستخدام المنتقل)" },
          then: { en: "SALE — derecognise; recognise an ROU for the right RETAINED; P&L gain only on rights TRANSFERRED", ar: "بيع — استبعد؛ واعترف بأصل حق للحق المحتفظ به؛ ولا ربح بالأرباح إلا على الحقوق المنتقلة", red: true },
        },
        {
          when: { en: "The SELLER-LESSEE holds a repurchase option (or the buyer can compel return) — the customer never really obtained control", ar: "البائع المستأجر يحتفظ بخيار إعادة الشراء (أو يستطيع المشتري إجباره على الرد) — فالمشتري لم يكتسب السيطرة حقًا" },
          then: { en: "NOT a sale — keep the asset; the proceeds are a FINANCING (a loan that accretes to the repurchase price)", ar: "ليس بيعًا — أبقِ الأصل؛ والمتحصلات تمويل (قرض ينمو حتى سعر إعادة الشراء)", red: true },
        },
        {
          when: { en: "A sale, but the price is OFF-MARKET", ar: "بيع، لكن السعر خارج السوق" },
          then: { en: "Adjust: BELOW market = prepaid rent (adds to the ROU); ABOVE market = additional financing (a separate liability)", ar: "عدّل: أدنى من السوق = إيجار مقدم (يزيد الأصل)؛ وأعلى منه = تمويل إضافي (التزام مستقل)", red: true },
        },
      ],
    },
    {
      kind: "steps",
      items: [
        { en: "Does the transfer qualify as a SALE under IFRS 15 (control passes to the buyer-lessor)?", ar: "هل يعد النقل بيعًا وفق IFRS 15 (تنتقل السيطرة للمشتري المؤجر)؟" },
        { en: "YES → seller-lessee derecognises the asset and recognises a ROU asset = the RETAINED right of use, measured at the proportion of the previous carrying amount (relative fair values: PV of the leaseback ÷ sale price)", ar: "نعم ← يستبعد البائع الأصل ويعترف بأصل حق استخدام = الحق المحتفظ به، مقاسًا بنسبة القيمة الدفترية السابقة (بالقيم العادلة النسبية: القيمة الحالية لعقد الإيجار الراجع ÷ سعر البيع)" },
        { en: "The leaseback itself is a normal lease: recognise the LEASE LIABILITY at the PV of the market lease payments", ar: "الإيجار الراجع ذاته إيجار عادي: اعترف بالتزام الإيجار بالقيمة الحالية لمدفوعات السوق" },
        { en: "GAIN/LOSS: only the part ATTRIBUTABLE TO THE RIGHTS TRANSFERRED hits P&L — the rest is embedded in the ROU (measured at old carrying, not fair value)", ar: "الربح/الخسارة: لا يظهر بالأرباح إلا الجزء المنسوب للحقوق المنتقلة — والباقي مضمَّن في الأصل (مقاسًا بالدفترية القديمة لا بالعادلة)" },
        { en: "NOT a sale → the 'seller' keeps the asset and treats the proceeds as a FINANCING (a loan); no ROU asset arises at all", ar: "ليس بيعًا ← يبقى الأصل لدى «البائع» ويعامل المتحصلات تمويلًا (قرضًا) — ولا أصل حق إطلاقًا" },
      ],
    },
    {
      kind: "example",
      title: { en: "Sale & leaseback numbers", ar: "أرقام البيع وإعادة الإيجار" },
      lines: [
        { en: "Building carrying 800 · FV 1,000 · sold for 1,000 · leased back with a market lease whose PV is 900 (18 of the 20 remaining years = 90% retained)", ar: "مبنى دفتريته ٨٠٠ وقيمته العادلة ١٬٠٠٠ · بيع بـ١٬٠٠٠ · وأعيد تأجيره بعقد سوق قيمته الحالية ٩٠٠ (١٨ من ٢٠ سنة متبقية = ٩٠٪ محتفظ بها)" },
        { en: "ROU = 800 × 900/1,000 = 720 · Lease liability = 900 · Derecognise the building 800", ar: "أصل الحق = ٨٠٠ × ٩٠٠/١٬٠٠٠ = ٧٢٠ · والتزام الإيجار = ٩٠٠ · ويستبعد المبنى بـ٨٠٠" },
        { en: "Total gain 200 × rights transferred 10% = 20 → P&L; the other 180 is NOT booked — it is embedded in the ROU (720 old-carrying basis vs a 900 liability)", ar: "إجمالي الربح ٢٠٠ × الحقوق المنتقلة ١٠٪ = ٢٠ ← للأرباح؛ والـ١٨٠ الأخرى لا تحجز — بل مضمَّنة في الأصل (٧٢٠ بأساس الدفترية مقابل التزام ٩٠٠)" },
        { en: "If the price had been 900 (100 below market): the 100 is PREPAID RENT — ROU = 720 + 100 = 820; the P&L gain is still 20 (based on the market-adjusted proceeds)", ar: "لو كان السعر ٩٠٠ (أقل من السوق بـ١٠٠): فالـ١٠٠ إيجار مقدم — الأصل = ٧٢٠ + ١٠٠ = ٨٢٠؛ وربح الأرباح يبقى ٢٠ (بأساس المتحصلات المعدلة سوقيًا)" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Sale & leaseback — the balanced entries (numbers above)", ar: "البيع وإعادة الإيجار — القيود المتوازنة (بالأرقام أعلاه)" },
      rows: [
        { dr: { en: "Cash 1,000", ar: "نقد ١٬٠٠٠" }, cr: { en: "Building (carrying amount) 800", ar: "مبنى (بالقيمة الدفترية) ٨٠٠" } },
        { dr: { en: "Right-of-use asset 720 (retained proportion of the carrying amount)", ar: "أصل حق استخدام ٧٢٠ (النسبة المحتفظ بها من الدفترية)" }, cr: { en: "Lease liability 900 (PV of the market leaseback payments)", ar: "التزام إيجار ٩٠٠ (القيمة الحالية لمدفوعات الإيجار الراجع السوقية)" } },
        { cr: { en: "Gain on rights transferred 20 — only this slice hits P&L (Dr 1,720 = Cr 820 + 900 + 20)", ar: "ربح الحقوق المنتقلة ٢٠ — هذا الجزء وحده يظهر بالأرباح (مدين ١٬٧٢٠ = دائن ٨٢٠ + ٩٠٠ + ٢٠)" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Presentation in the primary statements", ar: "العرض في القوائم الأساسية" } },
    {
      kind: "list",
      items: [
        { en: "Lessee P&L: DEPRECIATION within operating expenses + INTEREST in finance costs — two lines, never one rent line; the SoFP presents ROU assets separately from owned PPE", ar: "أرباح المستأجر: الإهلاك ضمن المصروفات التشغيلية والفائدة ضمن التكاليف التمويلية — سطران لا سطر إيجار واحد؛ ويعرض أصل الحق بالميزانية منفصلًا عن الممتلكات المملوكة" },
        { en: "Cash flow: PRINCIPAL repayments → financing; INTEREST → operating or financing per the IAS 7 policy; short-term, low-value & variable payments → OPERATING", ar: "التدفقات النقدية: تسديد الأصل ← تمويلية؛ والفائدة ← تشغيلية أو تمويلية وفق سياسة IAS 7؛ ومدفوعات القصير ومنخفض القيمة والمتغيرة ← تشغيلية" },
        { en: "Lessor: finance-lease receipts split principal/interest (the net investment unwinds); operating-lease income straight-line", ar: "المؤجر: مقبوضات التمويلي تنقسم أصلًا وفائدة (يفك صافي الاستثمار)؛ ودخل التشغيلي بالقسط الثابت" },
      ],
    },
    { kind: "h", text: { en: "Disclosure essentials", ar: "جوهر الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "ROU assets by CLASS (PPE-like disclosure): opening/closing carrying amounts, additions, depreciation, impairment, closing ROU for sale-leasebacks", ar: "أصول الحق بالفئات (بإفصاح شبيه بالممتلكات): الأرصدة الافتتاحية والختامية والإضافات والإهلاك والانخفاض وأصل الحق من البيع الراجع" },
        { en: "Lease-liability MATURITY analysis (contractual undiscounted vs discounted) and the interest-rate spectrum & terms", ar: "تحليل استحقاقات الالتزام (التعاقدية غير مخصومة مقابل المخصومة) وطيف المعدلات والآجال" },
        { en: "Short-term & low-value EXPENSE amounts · variable payments NOT in the liability · extension options & their terms · sale-and-leaseback gains and terms", ar: "مصروف القصير ومنخفض القيمة · والمدفوعات المتغيرة خارج الالتزام · وخيارات التمديد وشروطها · وأرباح البيع الراجع وشروطه" },
        { en: "Lessor: finance-lease income by category, operating-lease income, the net-investment reconciliation, residual-risk management", ar: "المؤجر: دخل التمويلي بالفئات ودخل التشغيلي وتسوية صافي الاستثمار وإدارة مخاطر المتبقي" },
      ],
    },
    { kind: "h", text: { en: "The classic exam traps", ar: "مصائد الامتحان الكلاسيكية" } },
    {
      kind: "list",
      items: [
        { en: "Short-term = 12 months or less AT COMMENCEMENT — a 13-month lease NEVER qualifies, and ANY purchase option kills the exemption", ar: "قصير الأجل = ١٢ شهرًا أو أقل عند بدء الإيجار — فإيجار ١٣ شهرًا لا يؤهل أبدًا، وأي خيار شراء يقتل الإعفاء" },
        { en: "Low-value = the asset when NEW (~USD 5,000): laptops yes, cars NEVER — whatever the rent", ar: "منخفض القيمة = الأصل وهو جديد (نحو ٥٬٠٠٠ دولار): الحواسيب نعم، والسيارات أبدًا — أيًّا كان الإيجار" },
        { en: "INDEX-linked variable payments are IN the liability at today's rate; usage- and sales-based payments NEVER are", ar: "المدفوعات المرتبطة بمؤشر تدخل الالتزام بسعر اليوم؛ والمبنية على الاستخدام أو المبيعات لا تدخله أبدًا" },
        { en: "ROU impairment is IAS 36 (CGU machinery) — never stack an IAS 37 provision on the recognised liability", ar: "انخفاض أصل الحق بـIAS 36 (آلية وحدات النقد) — ولا تركب مخصص IAS 37 فوق التزام معترف به" },
        { en: "The S&L gain is CAPPED at the part for rights transferred; a repurchase option usually means NO sale at all", ar: "ربح البيع الراجع مسقوف على جزء الحقوق المنتقلة؛ وخيار إعادة الشراء يعني غالبًا لا بيع أصلًا" },
        { en: "The implicit rate is the LESSOR's number — a lessee who cannot see the residual defaults to the IBR", ar: "المعدل الضمني رقم المؤجر — والمستأجر الذي لا يرى القيمة المتبقية يرجع إلى معدل الاقتراض الحدي" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "IBR or implicit? The lessee uses the implicit rate when it is READILY DETERMINABLE — in most third-party leases it isn't (the lessor's residual assumptions are invisible), so the IBR rules the exam answer. Say WHY in one clause.",
        ar: "المعدل الضمني أم معدل الاقتراض الحدي؟ يستخدم المستأجر الضمني عند سهولة تعيينه — وغالبًا لا يتيسر (افتراضات المؤجر للمتبقي خفية) فيسود معدل الاقتراض الحدي. اذكر السبب بعبارة واحدة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Front-loaded expense: total year-1 expense (depreciation + interest) EXCEEDS the old straight-line rent — then falls. Analysts rebuild the 'rent-equivalent' (depreciation + interest − principal) to compare across firms; know the shape, not just the total.",
        ar: "التحميل المبكر: مصروف السنة الأولى (إهلاك + فائدة) يتجاوز الإيجار الثابت القديم ثم ينحدر. والمحللون يعيدون بناء «مكافئ الإيجار» (الإهلاك + الفائدة − الأصل) للمقارنة؛ فاحفظ شكل المنحنى لا الإجمالي فقط.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The remeasurement-rate table is pure exam currency: TERM or PURCHASE-OPTION change → REVISED rate; INDEX or RVG change → UNCHANGED rate (floating-rate payments the only exception); a modification that is not a separate lease → REVISED rate. Write the trigger, then the rate, in that order.",
        ar: "جدول معدلات إعادة القياس عملة امتحانية خالصة: تغير الأجل أو خيار الشراء ← معدل منقح؛ وتغير المؤشر أو ضمان المتبقي ← معدل دون تغيير (والمدفوعات العائمة الاستثناء الوحيد)؛ وتعديل ليس إيجارًا مستقلًا ← معدل منقح. اكتب المحفز ثم المعدل بهذا الترتيب.",
      },
    },
    { kind: "h", text: { en: "Transition & amendments", ar: "الانتقال والتعديلات" } },
    {
      kind: "p",
      text: {
        en: "Transition (1 Jan 2019) was FULLY RETROSPECTIVE per IAS 8, with practical expedients: hindsight in determining lease terms; a single discount rate for portfolios of similar-leased assets; and the modified-retrospective route — lease liability = PV of the REMAINING payments at the transition-date IBR, with the ROU either 'as if IFRS 16 had always applied' or simply the liability adjusted for prepaid/accrued rent. The May 2020 COVID-19 amendment (extended to concessions affecting 30 June 2022 at the latest) let lessees treat qualifying rent concessions as REMEASUREMENTS — bypassing the modification machinery and its revised rates. The September 2022 amendment 'Lease Liability in a Sale and Leaseback' (effective 2024) requires the seller-lessee to measure the leaseback liability with EXPECTED variable lease payments — so that no gain is recognised on the right of use RETAINED.",
        ar: "كان الانتقال (١ يناير ٢٠١٩) بأثر رجعي كامل وفق IAS 8 مع مخرجات عملية: الإدراك بأثر لاحق في تحديد الآجال؛ ومعدل خصم واحد لمحافظ الأصول المتشابهة؛ ومسار الرجعية المعدلة — التزام الإيجار = القيمة الحالية للمدفوعات المتبقية بمعدل الاقتراض الحدي بتاريخ الانتقال، والأصل إما «كما لو طُبق IFRS 16 دائمًا» أو الالتزام ذاته معدولًا بإيجار مقدم أو مستحق. وتعديل مايو ٢٠٢٠ لتخفيضات إيجار كوفيد-١٩ (الممدد حتى التخفيضات المؤثرة في ٣٠ يونيو ٢٠٢٢ كحد أقصى) أجاز للمستأجرين معاملة التخفيضات المؤهلة إعادةَ قياس — تجاوزًا لآلية التعديل ومعدلاتها المنقحة. وتعديل سبتمبر ٢٠٢٢ «التزام الإيجار في البيع وإعادة الإيجار» (نافذ ٢٠٢٤) يوجب على البائع المستأجر قياس التزام الإيجار الراجع بالمدفوعات المتغيرة المتوقعة — حتى لا يعترف بربح على حق الاستخدام المحتفظ به.",
      },
    },
    { kind: "h", text: { en: "Interactions with other standards", ar: "التفاعل مع المعايير الأخرى" } },
    {
      kind: "list",
      items: [
        { en: "IAS 16 / IAS 38: the depreciation policy & disclosures for the ROU class; IAS 40 fair-value model when the ROU is investment property", ar: "IAS 16 وIAS 38: سياسة الإهلاك وإفصاحات فئة أصل الحق؛ ونموذج القيمة العادلة في IAS 40 إذا كان أصل الحق عقارًا استثماريًا" },
        { en: "IAS 36: the impairment engine for the ROU asset (IFRIC 2019: onerous leases → IAS 36, not an IAS 37 provision)", ar: "IAS 36: محرك انخفاض قيمة أصل الحق (لجنة التفسيرات ٢٠١٩: الإيجار المفضِّر ← IAS 36 لا مخصص IAS 37)" },
        { en: "IFRS 15: non-lease components; the sale test inside a sale & leaseback; dealer-lessor day-one revenue", ar: "IFRS 15: المكونات غير الإيجارية؛ واختبار البيع داخل البيع الراجع؛ وإيراد اليوم الأول للمؤجر التاجر" },
        { en: "IAS 37: the restoration obligation measured INTO the ROU cost at initial recognition", ar: "IAS 37: التزام الفك وإعادة الحال مقاسًا داخل تكلفة أصل الحق عند الاعتراف الأولي" },
        { en: "IFRS 9 / IAS 21: the lease liability is a financial liability at amortised cost; FX remeasurements per IAS 21", ar: "IFRS 9 وIAS 21: التزام الإيجار التزام مالي بالتكلفة المطفأة؛ وإعادة قياس العملة بـIAS 21" },
        { en: "IAS 7: principal → financing; interest → per policy; exempt & variable payments → operating", ar: "IAS 7: الأصل ← تمويلية؛ والفائدة ← وفق السياسة؛ والمدفوعات المعفاة والمتغيرة ← تشغيلية" },
        { en: "IFRS 3: acquirers remeasure the acquiree's lease liabilities to market — rate gaps create new assets or liabilities", ar: "IFRS 3: يعيد المقتني قياس التزامات إيجار المنشأة المقتناة بقيمة السوق — ففروق المعدلات تنشئ أصولًا أو التزامات جديدة" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "In a business combination, the acquirer remeasures existing lease liabilities to market — the rate gap creates new assets or liabilities (the IFRS 3 + IFRS 16 interplay).",
        ar: "التزامات الإيجار في الاندماج: يعيد المقتني قياس التزامات الإيجار القائمة بقيمة السوق — ففرق المعدلات يولد أصولًا أو التزامات جديدة (تفاعل IFRS 3 مع IFRS 16).",
      },
    },
  ],
}
