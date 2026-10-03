/** IFRS 3 — Business Combinations */

import type { Standard } from "../types"

export const IFRS_3: Standard = {
  code: "IFRS 3",
  title: { en: "Business Combinations", ar: "الاندماجات التجارية" },
  topic: "groups",
  effective: { en: "Effective 1 Jul 2009 (revised)", ar: "سارٍ من ١ يوليو ٢٠٠٩ (بعد المراجعة)" },
  blocks: [
    { kind: "h", text: { en: "Objective & the acquisition method", ar: "الهدف وأسلوب الاستحواذ" } },
    {
      kind: "p",
      text: {
        en: "A business combination brings separate entities or businesses into ONE reporting entity — the acquirer obtains CONTROL of a business, defined (since the 2020 amendment) as an integrated set of activities and assets capable of being conducted and managed for the purpose of providing goods or services to customers, generating investment income, or generating other income from ordinary activities. IFRS 3's single model is the ACQUISITION METHOD: acquisition-date fair values for everything acquired and assumed, a cost formula for goodwill, and no pre-acquisition profits muddying the numbers — the acquirer's performance measures only from the date control passes.",
        ar: "الاندماج التجاري يجمع كيانات أو أنشطة مستقلة في كيان مفصح واحد — يحصل المقتني على السيطرة على نشاط يُعرَّف (منذ تعديل ٢٠٢٠) بأنه منظومة متكاملة من الأنشطة والأصول قابلة للإدارة والتشغيل بهدف توفير سلع أو خدمات للعملاء أو توليد دخل استثماري أو دخل آخر من الأنشطة الاعتيادية. ونموذج IFRS 3 الوحيد هو أسلوب الاستحواذ: قيم عادلة بتاريخ الاستحواذ لكل ما يُقتنى ويُتحمَّل، ومعادلة محسوبة للشهرة، ولا أرباح ما قبل الاستحواذ تخلط الأرقام — فأداء المقتني لا يقاس إلا من لحظة انتقال السيطرة.",
      },
    },
    {
      kind: "steps",
      items: [
        { en: "IDENTIFY the ACQUIRER — the party that obtains control, judged with IFRS 10's power / exposure / linkage test", ar: "حدد المقتني — الطرف الذي ينال السيطرة وفق اختبار IFRS 10: السلطة والانكشاف والرابط" },
        { en: "DETERMINE the ACQUISITION DATE — the date control passes (usually the closing date; a staged deal tips at the date the stake crosses 50%)", ar: "حدد تاريخ الاستحواذ — يوم انتقال السيطرة (عادة تاريخ الإقفال؛ والصفقة المتدرجة تنقلب عند تجاوز الحصة نصف الأسهم)" },
        { en: "RECOGNISE & MEASURE the identifiable assets acquired, liabilities assumed and any NCI — at ACQUISITION-DATE FAIR VALUE", ar: "اعترف وقِس الأصول المحددة المقتناة والالتزامات المتحملة وأي حصة غير مسيطرة — بالقيمة العادلة بتاريخ الاستحواذ" },
        { en: "RECOGNISE & MEASURE the consideration transferred, and the resulting GOODWILL — or the gain on a BARGAIN PURCHASE", ar: "اعترف وقِس المقابل المحوَّل والشهرة الناتجة — أو مكسب الشراء المفاض" },
      ],
    },
    { kind: "h", text: { en: "Scope — which combinations sit inside IFRS 3", ar: "النطاق — أي الاندماجات داخل IFRS 3" } },
    {
      kind: "p",
      text: {
        en: "IFRS 3 applies to almost every combination — including combinations of mutual entities (where the consideration is membership interests) and combinations achieved with no consideration at all (control by contract). Two families sit OUTSIDE: (1) combinations of entities under COMMON CONTROL — a final parent shuffles subsidiaries inside the group, so there is no arm's-length price to fair-value, and practice carries the parent's amounts across at book value; the IASB's dedicated project is still in train. (2) the acquisition of an asset or group of assets that is NOT a business — a plain asset purchase under IAS 16 / IAS 38, where any bargain goes straight to profit or loss with no goodwill machinery.",
        ar: "يطبق IFRS 3 على كل اندماج تقريبًا — بما فيها اندماجات الكيانات المتبادلة (حيث المقابل حقوق عضوية) والاندماجات المتحققة بلا مقابل أصلًا (سيطرة بعقد). وتقع خارج النطاق عائلتان: (١) اندماجات الكيانات الواقعة تحت سيطرة طرف واحد — تُنقل الأم تابعاتها داخل المجموعة فلا يوجد سعر تعامل مستقل يُقاس بالعادلة، والممارسة تنقل القيم الدفترية للام كما هي؛ ومشروع المجلس المخصص ما يزال جاريًا. (٢) شراء أصل أو مجموعة أصول ليس نشاطًا — شراء أصول صرف وفق IAS 16 / IAS 38، وأي مفاض فيه يذهب مباشرة إلى الربح أو الخسارة بلا آلة الشهرة.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "OUT: common-control combinations — carry-over basis in the receiving entity's books (no fresh fair values, no fresh goodwill)", ar: "خارج النطاق: اندماجات السيطرة المشتركة — أساس النقل في دفاتر الكيان المتلقي (بلا قيم عادلة جديدة ولا شهرة جديدة)" },
        { en: "OUT: forming a joint arrangement in the financial statements of the arrangement ITSELF (IFRS 11 territory)", ar: "خارج النطاق: تكوين ترتيب مشترك في القوائم المالية للترتيب ذاته (أرض IFRS 11)" },
        { en: "OUT: an asset batch that fails the business test — a building, a fleet, a portfolio of similar loans: no goodwill, no NCI, no deferred-tax machinery", ar: "خارج النطاق: حزمة أصول لا تجتاز اختبار النشاط — مبنى أو أسطول أو محفظة قروض متماثلة: بلا شهرة ولا حصة غير مسيطرة ولا آلة ضرائب مؤجلة" },
        { en: "IN: mutual entities, and combinations achieved by contract alone (control without a stake)", ar: "داخل النطاق: الكيانات المتبادلة، والاندماجات المتحققة بعقد وحده (سيطرة بلا حصة)" },
        { en: "IN: a party contributing a business to a newly formed joint venture — IFRS 3 applies in the CONTRIBUTOR's own statements", ar: "داخل النطاق: من يدخل نشاطًا في مشروع مشترك وليد — يطبق IFRS 3 في قوائم المساهم نفسه" },
      ],
    },
    { kind: "h", text: { en: "Business or batch of assets? — the 2020 test", ar: "نشاط أم حزمة أصول؟ — اختبار ٢٠٢٠" } },
    {
      kind: "p",
      text: {
        en: "The 2020 amendment rewired the definition to stop almost everything being called a 'business'. A business needs an integrated set of INPUTS and PROCESSES that together create outputs — and the PROCESSES are essential: without them the acquirer bought assets, not a going concern. OUTPUTS are NOT required — an early-stage entity with no revenues can still be a business if it has an organised workforce and know-how. The screen: if SUBSTANTIALLY ALL of the fair value is concentrated in a single asset (or a group of similar assets), it is an asset acquisition — unless processes came too.",
        ar: "أعاد تعديل ٢٠٢٠ هندسة التعريف ليوقف تسمية كل شيء «نشاطًا». يحتاج النشاط إلى مدخلات وعمليات متكاملة تنشئ معًا المخرجات — والعمليات عنصر لا غنى عنه: بدونها اشترى المقتني أصولًا لا كيانًا قائمًا. والمخرجات ليست شرطًا — فكيان ناشئ بلا إيرادات يظل نشاطًا إن كان له قوة عمل منظمة ومعرفة فنية. والمرشح السريع: إذا تركزت القيمة العادلة كلها تقريبًا في أصل واحد (أو مجموعة أصول متماثلة) فذلك شراء أصول — إلا إذا جاءت العمليات معها.",
      },
    },
    {
      kind: "tree",
      root: { en: "Is the acquired set a BUSINESS?", ar: "هل المجموعة المقتناة نشاط؟" },
      branches: [
        {
          when: { en: "Inputs + PROCESSES + (outputs optional) — an organised workforce, critical processes applied to the inputs", ar: "مدخلات + عمليات + (مخرجات اختيارية) — قوة عمل منظمة وعمليات جوهرية تطبق على المدخلات" },
          then: { en: "BUSINESS → IFRS 3 acquisition method, goodwill machinery", ar: "نشاط ← أسلوب الاستحواذ في IFRS 3 وآلة الشهرة", red: true },
        },
        {
          when: { en: "Substantially all of the FV concentrated in one asset / group of similar assets, and NO processes acquired", ar: "القيمة العادلة كلها تقريبًا في أصل واحد / مجموعة أصول متماثلة، ولا عمليات مقتناة" },
          then: { en: "ASSET ACQUISITION → IAS 16/38: no goodwill, no NCI, a bargain = immediate P&L gain", ar: "شراء أصول ← IAS 16/38: بلا شهرة ولا حصة غير مسيطرة، والمفاض مكسب فوري بالأرباح", red: true },
        },
        {
          when: { en: "Concentrated assets BUT an organised workforce / critical processes came with the deal", ar: "أصول مركزة لكن جاء مع الصفقة قوة عمل منظمة أو عمليات جوهرية" },
          then: { en: "Still a BUSINESS — processes break the concentration shortcut", ar: "لا يزال نشاطًا — العمليات تنقض طريق التركيز", red: true },
        },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Concentrated RISK is the giveaway: one building leased out, a portfolio of similar loans, a single patent — asset acquisitions. A management team that runs them is what makes a business.",
        ar: "الخطر المركَّز هو الدليل: مبنى واحد مؤجر، محفظة قروض متماثلة، براءة اختراع واحدة — شراء أصول. وفريق إداري يشغلها هو ما يصنع النشاط.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The business-vs-assets answer changes EVERYTHING: a business → goodwill, deferred taxes, contingent liabilities at fair value; a mere asset batch → none of that. Spend the first exam minute on this classification — every later number depends on it.",
        ar: "الجواب على النشاط مقابل الأصول يغير كل شيء: النشاط ← شهرة وضرائب مؤجلة والتزامات محتملة بالقيمة العادلة؛ وحزمة الأصول ← لا شيء من ذلك. أنفق أول دقيقة امتحانية في هذا التصنيف — فكل رقم لاحق يتوقف عليه.",
      },
    },
    { kind: "h", text: { en: "Step 1 — identify the acquirer", ar: "الخطوة ١ — تحديد المقتني" } },
    {
      kind: "p",
      text: {
        en: "The acquirer is the party that obtains CONTROL — apply IFRS 10's three elements, never the legal form: in a REVERSE ACQUISITION (a private company buys a listed shell with shares), the LEGAL acquirer (the listed shell) is the accounting ACQUIREE, and the accounting acquirer is the party whose owners end up controlling the combined entity. Substance owns the analysis, always.",
        ar: "المقتني هو الطرف الذي ينال السيطرة — طبق عناصر IFRS 10 الثلاثة لا الشكل القانوني أبدًا: في الاستحواذ العكسي (شركة خاصة تشتري شركة مدرجة «قوقعة» بأسهمها) يكون المقتني القانوني (المدرجة) هو المقتنى محاسبيًا، والمقتني محاسبيًا هو الطرف الذي يؤول ملاكه إلى السيطرة على الكيان المدمج. الجوهر يحكم التحليل دائمًا.",
      },
    },
    { kind: "h", text: { en: "Step 2 — the acquisition date", ar: "الخطوة ٢ — تاريخ الاستحواذ" } },
    {
      kind: "p",
      text: {
        en: "The acquisition date is the date CONTROL passes — usually the closing/completion date, but it follows the facts, not the contract's signature: regulatory approvals, payments, transfer of the shares. A staged deal tips at the moment the cumulative stake crosses 50%. Everything fair-valued — assets, liabilities, consideration, NCI, contingent consideration — is measured at this ONE date, and the acquiree's profit consolidates only from it.",
        ar: "تاريخ الاستحواذ هو يوم انتقال السيطرة — عادة تاريخ الإقفال أو الإتمام، لكنه يتبع الوقائع لا توقيع العقد: موافقات الجهات الرقابية، والمدفوعات، ونقل الأسهم. والصفقة المتدرجة تنقلب عند لحظة تجاوز الحصة التراكمية نصف الأسهم. وكل ما يقاس بالعادلة — الأصول والالتزامات والمقابل والحصة غير المسيطرة والمقابل المشروط — يقاس في هذا التاريخ الواحد، وأرباح المقتنى لا تجمع إلا منه.",
      },
    },
    { kind: "h", text: { en: "Step 3 — the identifiable net assets", ar: "الخطوة ٣ — الأصول الصافية المحددة" } },
    {
      kind: "p",
      text: {
        en: "Recognise separately from goodwill every asset and liability of the acquiree that meets the recognition conditions at the acquisition date — measured at FAIR VALUE, full stop: the acquiree's book values are irrelevant. That pulls onto the acquirer's balance sheet items the acquiree never carried: internally generated brands and customer lists (in-process R&D included), the fair-value uplift on PPE and inventory, day-one deferred taxes on every uplift, and the acquiree's contingent liabilities.",
        ar: "اعترف منفصلًا عن الشهرة بكل أصل والتزام للمقتنى يحقق شروط الاعتراف بتاريخ الاستحواذ — بالقيمة العادلة وبلا نقاش: فالقيم الدفترية للمقتنى لا وزن لها. وهذا يجلب إلى ميزانية المقتني بنودًا لم يحملها المقتنى قط: العلامات وقوائم العملاء المنشأة داخليًا (والبحث والتطوير الجاري)، وزيادة القيمة العادلة للممتلكات والمخزون، وضرائب مؤجلة يوم الأول على كل زيادة، والتزامات المقتنى المحتملة.",
      },
    },
    {
      kind: "tree",
      root: { en: "What separates from goodwill?", ar: "ما يفصل عن الشهرة؟" },
      branches: [
        {
          when: { en: "INTANGIBLES meeting IAS 38's identifiability test — SEPARABLE, or arising from CONTRACTUAL/OTHER LEGAL RIGHTS (brands, customer lists, order backlog, in-process R&D)", ar: "غير ملموسة تجتاز اختبار قابلية التحديد في IAS 38 — قابلة للفصل أو ناشئة من حقوق تعاقدية أو قانونية أخرى (علامات، قوائم عملاء، طلبات معلقة، تطوير جارٍ)" },
          then: { en: "Recognise at FAIR VALUE apart from goodwill — the classic mark-earner", ar: "تثبت بالقيمة العادلة منفصلة عن الشهرة — أكسب درجات", red: true },
        },
        {
          when: { en: "The acquiree's CONTINGENT LIABILITIES — recognised at fair value IF a present obligation exists from a past event — IAS 37's probability gate does NOT apply in combinations", ar: "الالتزامات المحتملة للمقتنى — تثبت بالقيمة العادلة إن كان ثمة التزام قائم من حدث ماضٍ — ولا تنطبق بوابة الاحتمالات في IAS 37 هنا" },
          then: { en: "Recognise at FV; subsequently the HIGHER of the IAS 37 measure and initial FV less income recognised", ar: "تثبت بالعادلة؛ ثم بالأعلى من مقياس IAS 37 وأول قيمة عادلة مخصومًا منها الدخل المثبت", red: true },
        },
        {
          when: { en: "CONTINGENT ASSETS — recognised at fair value when an asset exists and the FV can be measured RELIABLY", ar: "الأصول المحتملة — تثبت بالقيمة العادلة عند وجود أصل وإمكان قياس عادلته موثوقًا" },
          then: { en: "The deliberate IFRS 3 override of IAS 37's 'never recognise' rule — subsequently IAS 37 takes over again", ar: "تجاوز مقصود لقاعدة «لا اعتراف» في IAS 37 — ثم يعود IAS 37 ليحكم لاحقًا", red: true },
        },
        {
          when: { en: "Deferred taxes, indemnification assets, reacquired rights, acquired receivables — the supporting cast below", ar: "الضرائب المؤجلة، وأصول التعويض، والحقوق المستردة، والمدينيات المقتناة — الطاقم المساند أدناه" },
          then: { en: "Each recognised at fair value, each examinable", ar: "كلٌّ يثبت بالقيمة العادلة، وكلٌّ قابل للامتحان", red: true },
        },
      ],
    },
    {
      kind: "list",
      items: [
        { en: "ACQUIRED RECEIVABLES (incl. loans): measure at acquisition-date FV — expected credit losses baked into the price; purchased-or-originate-credit-impaired ones keep lifetime ECL thereafter (IFRS 9)", ar: "المدينيات المقتناة (ومنها القروض): بالقيمة العادلة بتاريخ الاستحواذ — بخسائر الائتمان المتوقعة مدمجة في الثمن؛ والمتعثرة ائتمانيًا وقت الشراء تبقى على خسائر العمر كله بعدها (IFRS 9)" },
        { en: "DEFERRED TAX on every fair-value uplift and on the acquiree's unused losses (IAS 12): the initial-recognition exception does NOT shelter combinations; later changes driven by acquisition-date facts adjust goodwill within the measurement period", ar: "ضريبة مؤجلة على كل زيادة قيمة عادلة وعلى خسائر المقتنى غير المستخدمة (IAS 12): استثناء الاعتراف الأولي لا يحمي الاندماجات؛ والتغيرات اللاحقة الناشئة عن وقائع تاريخ الاستحواذ تعدل الشهرة داخل فترة القياس" },
        { en: "INDEMNIFICATION ASSETS (seller guarantees): recognised at fair value when the indemnity's conditions are met, sitting OPPOSITE the related recognised liability", ar: "أصول التعويض (ضمانات البائع): تثبت بالقيمة العادلة عند تحقق شروط الضمان، وتجلس مقابل الالتزام ذي الصلة المثبت" },
        { en: "REACQUIRED RIGHTS (e.g. a franchise the acquiree held FROM the acquirer): an identifiable intangible, amortised over the contract's remaining term", ar: "الحقوق المستردة (امتياز كان المقتنى يحمله من المقتني نفسه): أصل غير ملموس محدد يستهلك على المدة المتبقية من العقد" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The contingents are the standard's deliberate asymmetry, and the examiner's favourite trap. IAS 37 alone: probable liability → provision; possible → disclose only; contingent assets → never recognise. In a business combination IFRS 3 OVERRIDES all of that: the acquiree's contingent liabilities are recognised at fair value on the strength of a present obligation alone, and contingent assets too when reliably measurable — the acquirer PAID a price that already reflects them, so day-one symmetry is the rule. After day one, IAS 37 governs the liability again.",
        ar: "الالتزامات المحتملة هي اللاتماثلية المقصودة في المعيار وفخ الممتحن المفضل. IAS 37 وحده: التزام مرجح ← مخصص؛ ممكن ← إفصاح فقط؛ أصول محتملة ← لا اعتراف أبدًا. وفي الاندماج التجاري يتجاوز IFRS 3 ذلك كله: تثبت التزامات المقتنى المحتملة بالقيمة العادلة استنادًا إلى وجود التزام قائم وحده، والأصول المحتملة كذلك عند قياسها موثوقًا — فالمقتني دفع ثمنًا يعكسها أصلًا، فالتماثل يوم الأول هو القاعدة. وبعد اليوم الأول يعود IAS 37 ليحكم الالتزام.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The IAS 37 override is a deliberate trap: 'the acquiree faces a lawsuit judged possible (not probable)' — IAS 37 says disclose; IFRS 3 says RECOGNISE the contingent liability at fair value in the combination. Say both standards and the override — that sentence earns the mark.",
        ar: "تجاوز IAS 37 فخ مقصود: «تواجه المقتنى دعوى ممكنة (لا مرجحة)» — تقول IAS 37 أفصح؛ ويقول IFRS 3 اعترف بالالتزام المحتمل بالقيمة العادلة في الاندماج. اذكر المعيارين والتجاوز — فتلك الجملة تكسب الدرجة.",
      },
    },
    { kind: "h", text: { en: "Step 4 — consideration transferred", ar: "الخطوة ٤ — المقابل المحوَّل" } },
    {
      kind: "p",
      text: {
        en: "Consideration transferred = the acquisition-date FAIR VALUE of the assets given, liabilities incurred and equity interests issued — the price the acquirer pays, not the nominal amounts on the paperwork. A share-for-share deal uses the SHARES' fair value at the acquisition date; a deferred payment is discounted to present value. The measurement belongs to the deal's economics: if the share price moves between announcing and closing, it is the closing-date value that counts.",
        ar: "المقابل المحوَّل = القيمة العادلة بتاريخ الاستحواذ للأصول المسلَّمة والالتزامات المتحملة وأدوات الملكية المصدرة — أي الثمن الذي يدفعه المقتني لا المبالغ الاسمية في الأوراق. والمقايضة بالأسهم تثبت بالقيمة العادلة للأسهم بتاريخ الاستحواذ؛ والسداد المؤجل يخصم لقيمته الحالية. فالقياس ملك لاقتصاديات الصفقة: إن تحرك سعر السهم بين الإعلان والإقفال فالعبرة بقيمة يوم الإقفال.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Assets transferred, liabilities incurred & equity issued — at acquisition-date FV (share-for-share: the shares' FV at closing)", ar: "أصول منقولة والتزامات متحملة وأدوات ملكية مصدرة — بالعادلة بتاريخ الاستحواذ (المقايضة بالأسهم: عادلة الأسهم يوم الإقفال)" },
        { en: "CONTINGENT CONSIDERATION at acquisition-date fair value, then classified as a LIABILITY (remeasured through P&L per IFRS 9) or EQUITY (never remeasured) under IAS 32 — see its own section", ar: "المقابل المشروط بالعادلة بتاريخ الاستحواذ ثم صنفه التزامًا (يعاد قياسه عبر الأرباح وفق IFRS 9) أو ملكية (لا يعاد قياسه أبدًا) وفق IAS 32 — انظر بابه" },
        { en: "REPLACEMENT AWARDS to the acquiree's employees (IFRS 2): the part paying for the DEAL is consideration; the part paying for POST-acquisition service is post-combination expense", ar: "المكافآت البديلة لعاملي المقتنى (IFRS 2): الجزء الذي يدفع ثمن الصفقة مقابل؛ والجزء الذي يدفع ثمن خدمة ما بعد الاستحواذ مصروف لاحق" },
        { en: "A deferred-payment element → DISCOUNT to present value (a financing component)", ar: "عنصر السداد المؤجل ← خصم لقيمته الحالية (عنصر تمويلي)" },
        { en: "ACQUISITION-RELATED COSTS (advisory, legal, accounting, finder's fees) → EXPENSE as incurred — they are NEVER consideration", ar: "تكاليف الاستحواذ (استشارات وقانونية ومحاسبية وعمولات وسطاء) ← مصروف عند حدوثها — وليست مقابلًا أبدًا" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Acquisition costs EXPENSED is the single most-tested IFRS 3 line: capitalising 30 of advisory fees into goodwill inflates both goodwill and the bargain-gain risk. Only EQUITY-ISSUE transaction costs reduce the share proceeds — inside equity, never P&L.",
        ar: "تسجيل تكاليف الاستحواذ مصروفًا أشهر سطر يمتحن فيه IFRS 3: فرملة ٣٠ من أتعاب الاستشارات داخل الشهرة تنفخ الشهرة وتضخم مخاطر مكسب الشراء المفاض. وتكاليف إصدار الأسهم وحدها تخفض متحصلات الإصدار — داخل حقوق الملكية لا الأرباح.",
      },
    },
    {
      kind: "journal",
      title: { en: "Deal costs — where they land", ar: "تكاليف الصفقة — أين تستقر" },
      rows: [
        { dr: { en: "Transaction costs — P&L expense 30 (advisory / legal / accounting)", ar: "تكاليف المعاملة — مصروف بالأرباح ٣٠ (استشارات/قانونية/محاسبية)" }, cr: { en: "Cash 30", ar: "نقد ٣٠" }, red: true },
        { dr: { en: "Equity — share issue costs 10 (reduces the NET proceeds of the shares issued)", ar: "حقوق الملكية — تكاليف إصدار الأسهم ١٠ (تخفض المتحصلات الصافية للأسهم المصدرة)" }, cr: { en: "Cash 10", ar: "نقد ١٠" } },
        { cr: { en: "Goodwill receives NEITHER — the cost formula never sees deal costs", ar: "الشهرة لا تنال أيًّا منهما — فمعادلة التكلفة لا ترى تكاليف الصفقة أبدًا" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Contingent consideration (earnouts)", ar: "المقابل المشروط (أرباح الأداء)" } },
    {
      kind: "p",
      text: {
        en: "An earnout — extra payment if the acquiree hits a target — is recognised at ACQUISITION-DATE FAIR VALUE as part of consideration, even though the amount is unknown. Classification then follows IAS 32: a right to CASH (or a variable number of shares) is a LIABILITY, fair-valued through P&L afterwards; a FIXED number of shares is EQUITY, remeasured never. What moves the number afterwards splits in two: refinements of facts that EXISTED at the acquisition date → measurement-period adjustment → goodwill; the target simply being outperformed (new facts) → P&L.",
        ar: "المقابل المشروط — دفعة إضافية إذا بلغ المقتنى هدفًا — يثبت بالقيمة العادلة بتاريخ الاستحواذ جزءًا من المقابل وإن جهل المبلغ. ثم يتبع التصنيف IAS 32: الحق في نقد (أو عدد متغير من الأسهم) التزام يعاد قياسه عبر الأرباح بعدها؛ وعدد ثابت من الأسهم ملكية لا يعاد قياسها أبدًا. وما يحرك الرقم لاحقًا ينقسم اثنين: تنقيح وقائع كانت قائمة بتاريخ الاستحواذ ← تعديل فترة قياس ← الشهرة؛ وتفوق الهدف ذاته (وقائع جديدة) ← الأرباح.",
      },
    },
    {
      kind: "tree",
      root: { en: "Classify & track the earnout", ar: "صنِّف المقابل المشروط وتابعه" },
      branches: [
        {
          when: { en: "Obligation to deliver cash (or a VARIABLE number of shares)", ar: "التزام بتسليم نقد (أو عدد متغير من الأسهم)" },
          then: { en: "LIABILITY: FV at acquisition; REMEASURE through P&L every period (IFRS 9)", ar: "التزام: العادلة عند الاستحواذ؛ ويعاد قياسه عبر الأرباح كل فترة (IFRS 9)", red: true },
        },
        {
          when: { en: "Fixed-for-fixed: a FIXED number of the acquirer's shares", ar: "ثابت بثابت: عدد ثابت من أسهم المقتني" },
          then: { en: "EQUITY: no remeasurement — settlement shifts amounts WITHIN equity", ar: "ملكية: لا إعادة قياس — والتسوية تنقل المبالغ داخل حقوق الملكية", red: true },
        },
        {
          when: { en: "Later change caused by facts EXISTING at the acquisition date (within the 12-month window)", ar: "تغير لاحق سببه وقائع قائمة بتاريخ الاستحواذ (داخل نافذة الـ١٢ شهرًا)" },
          then: { en: "Measurement-period adjustment → adjust GOODWILL", ar: "تعديل فترة قياس ← يعدل الشهرة", red: true },
        },
        {
          when: { en: "Later change from POST-acquisition performance (new facts)", ar: "تغير لاحق من أداء ما بعد الاستحواذ (وقائع جديدة)" },
          then: { en: "P&L — gain or loss on remeasurement", ar: "الأرباح — ربح أو خسارة إعادة القياس", red: true },
        },
      ],
    },
    {
      kind: "journal",
      title: { en: "Earnout 80 at acquisition, liability-classified", ar: "مقابل مشروط ٨٠ عند الاستحواذ، مصنف التزامًا" },
      rows: [
        { dr: { en: "Goodwill (the earnout is part of day-one consideration)", ar: "الشهرة (المقابل المشروط جزء من مقابل اليوم الأول)" }, cr: { en: "Contingent consideration — financial liability 80", ar: "التزام مقابل مشروط ٨٠" } },
        { dr: { en: "Contingent consideration 10 (FV refinement — facts at the acquisition date)", ar: "المقابل المشروط ١٠ (تنقيح عادلة — وقائع تاريخ الاستحواذ)" }, cr: { en: "Goodwill 10", ar: "الشهرة ١٠" }, red: true },
        { dr: { en: "Change in fair value — P&L 25 (the target was outperformed — new facts)", ar: "تغير القيمة العادلة — أرباح ٢٥ (تجاوز الهدف — وقائع جديدة)" }, cr: { en: "Contingent consideration 25 (70 → 95)", ar: "المقابل المشروط ٢٥ (من ٧٠ إلى ٩٥)" }, red: true },
        { cr: { en: "Equity-classified earnout: no line here — never remeasured; settlement moves equity to equity", ar: "المقابل المشروط الملكوي: لا سطر له هنا — لا يعاد قياسه أبدًا؛ والتسوية تنقل داخل حقوق الملكية" }, red: true },
      ],
    },
    { kind: "h", text: { en: "The NCI measurement choice", ar: "خيار قياس الحصة غير المسيطرة" } },
    {
      kind: "p",
      text: {
        en: "For each deal the acquirer CHOOSES how to measure the non-controlling interest at the acquisition date: at FAIR VALUE (the 'full goodwill' method — the price a market participant would pay for the minority's stake, often evidenced by the deal price per share) or at the PROPORTIONATE share of the acquiree's identifiable net assets ('partial goodwill'). The choice is made per combination at the acquisition date and moves ONLY the goodwill number — the identifiable net assets are identical either way. Under partial goodwill the group's goodwill holds none of the minority's share; under full goodwill it does — with a correspondingly bigger IAS 36 exposure.",
        ar: "لكل صفقة يختار المقتني كيف يقيس الحصة غير المسيطرة بتاريخ الاستحواذ: بالقيمة العادلة (طريقة «الشهرة الكاملة» — الثمن الذي يدفعه مشارك سوقي لحصة الأقلية، ويستدل له عادة بسعر السهم في الصفقة) أو بالحصة التناسبية من صافي الأصول المحددة للمقتنى («الشهرة الجزئية»). والخيار يُتخذ لكل عملية على حدة بتاريخ الاستحواذ وهو يحرك رقم الشهرة وحده — فصافي الأصول المحددة واحد في الحالين. وفي الجزئية لا تحمل شهرة المجموعة شيئًا من نصيب الأقلية؛ وفي الكاملة تحمله — بانكشاف أكبر تبعًا لذلك على IAS 36.",
      },
    },
    {
      kind: "tree",
      root: { en: "Measure the NCI at acquisition", ar: "قِس الحصة غير المسيطرة عند الاستحواذ" },
      branches: [
        {
          when: { en: "NCI at FAIR VALUE (often the acquirer's price per share × the minority's shares)", ar: "الحصة بالقيمة العادلة (غالبًا سعر سهم المقتني × أسهم الأقلية)" },
          then: { en: "FULL goodwill — higher total goodwill (includes 'NCI goodwill'), bigger impairment exposure", ar: "شهرة كاملة — شهرة إجمالية أعلى (تتضمن «شهرة الحصة») وانكشاف أكبر على الانخفاض", red: true },
        },
        {
          when: { en: "NCI at PROPORTIONATE share of the identifiable net assets", ar: "الحصة بالحصة التناسبية من صافي الأصول المحددة" },
          then: { en: "PARTIAL goodwill — lower goodwill; no goodwill attributed to the NCI; impairments hit the parent only", ar: "شهرة جزئية — شهرة أقل؛ لا نسبة للحصة في الشهرة؛ وانخفاض القيمة يقع على الأم وحدها", red: true },
        },
      ],
    },
    {
      kind: "formula",
      title: { en: "The goodwill equation — both directions", ar: "معادلة الشهرة — في الاتجاهين" },
      lines: [
        { en: "Goodwill = consideration transferred + NCI + FV of any previously held interest − net acquisition-date FV of identifiable assets & liabilities", ar: "الشهرة = المقابل المحوَّل + الحصة غير المسيطرة + عادلة أي حصة مسبقة − صافي القيمة العادلة بتاريخ الاستحواذ للأصول والالتزامات المحددة" },
        { en: "Bargain purchase: the SAME equation returning negative — reassess every measurement first, then the residual excess is a GAIN in P&L", ar: "الشراء المفاض: المعادلة ذاتها تعود سالبة — راجع كل قياس أولًا، ثم الباقي مكسب بالأرباح" },
        { en: "Partial vs full: only the NCI term moves — full goodwill = partial goodwill + (NCI at FV − proportionate NCI)", ar: "الجزئية والكاملة: يتحرك حد الحصة وحده — الشهرة الكاملة = الجزئية + (الحصة بالعادلة − الحصة التناسبية)" },
        { en: "Goodwill is NOT amortised — allocated to CGUs and tested for impairment at least annually (IAS 36), never reversed", ar: "لا تستهلك الشهرة — توزع على وحدات توليد النقد وتختبر سنويًا على الأقل (IAS 36) ولا تُرد أبدًا" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The acquisition entry — 900 for 80% of B (identifiable net assets at FV 1,000)", ar: "قيد الاستحواذ — ٩٠٠ مقابل ٨٠٪ من B (صافي أصول محددة بالعادلة ١٬٠٠٠)" },
      rows: [
        { dr: { en: "PPE 680 · Inventory 200 · Receivables 100 · Brand 120 — identifiable assets at FV, total 1,100", ar: "ممتلكات ٦٨٠ · مخزون ٢٠٠ · مدينون ١٠٠ · علامة ١٢٠ — الأصول المحددة بالعادلة، إجمالي ١٬١٠٠" } },
        { dr: { en: "Goodwill 100 (partial) — or 160 (full)", ar: "الشهرة ١٠٠ (جزئية) — أو ١٦٠ (كاملة)" }, red: true },
        { cr: { en: "Cash 500 + Shares issued 400 — consideration transferred 900", ar: "نقد ٥٠٠ + أسهم مصدرة ٤٠٠ — المقابل المحوَّل ٩٠٠" } },
        { cr: { en: "Payables 60 + Contingent liability at FV 40 — liabilities assumed 100", ar: "دائنون ٦٠ + التزام محتمل بالعادلة ٤٠ — التزامات متحملة ١٠٠" } },
        { cr: { en: "NCI 200 (proportionate: 20% × 1,000) — or 260 (fair value)", ar: "حصة غير مسيطرة ٢٠٠ (تناسبية: ٢٠٪ × ١٬٠٠٠) — أو ٢٦٠ (عادلة)" }, red: true },
        { cr: { en: "Check (partial): Dr 1,100 + 100 = Cr 900 + 100 + 200 ✓", ar: "تحقق (الجزئية): مدين ١٬١٠٠ + ١٠٠ = دائن ٩٠٠ + ١٠٠ + ٢٠٠ ✓" } },
      ],
    },
    { kind: "h", text: { en: "Bargain purchase", ar: "الشراء المفاض" } },
    {
      kind: "p",
      text: {
        en: "When the goodwill equation returns a NEGATIVE number, the acquirer bought the net assets for less than their fair value. Before booking any gain, REASSESS everything: a missed identifiable intangible, mis-measured consideration, a wrong NCI, an undervalued contingent liability. If the negative survives the re-check, the residual is a GAIN ON BARGAIN PURCHASE in P&L — rare, scrutinised, and disclosed separately with the reason it happened.",
        ar: "حين تعود معادلة الشهرة سالبة يكون المقتني قد اشترى صافي الأصول بأقل من قيمتها العادلة. وقبل إثبات أي مكسب أعد تقييم كل شيء: غير ملموسة محددة فاتت القياس، ومقابل مقيس خطأ، وحصة غير مسيطرة خاطئة، والتزام محتمل مفحم بأقل من قيمته. فإن نجا السالب من المراجعة كان الباقي مكسب شراء مفاض بالأرباح — نادر، مُدقَّق بدقة، ويفصح عنه منفصلًا مع سببه.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Re-measure the identifiable net assets: an intangible never booked, receivables' credit losses, provisions' discounting", ar: "أعد قياس صافي الأصول المحددة: غير ملموسة لم تثبت قط، وخسائر ائتمان المدينيات، وخصم المخصصات" },
        { en: "Re-measure the consideration: shares at the right closing-date price, earnout at the right FV, deferred payments discounted", ar: "أعد قياس المقابل: الأسهم بسعر الإقفال الصحيح، والمقابل المشروط بعادلته الصحيحة، والمدفوعات المؤجلة مخصومة" },
        { en: "Re-measure the NCI and any previously held interest", ar: "أعد قياس الحصة غير المسيطرة وأي حصة مسبقة" },
        { en: "Then, and only then, the surviving excess → GAIN in P&L (disclose its nature and amount)", ar: "عندئذ وحده: الباقي الناجي ← مكسب بالأرباح (أفصح عن طبيعته ومبلغه)" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Bargain purchase — 700 cash for 80%, net assets at FV 1,000", ar: "شراء مفاض — ٧٠٠ نقدًا مقابل ٨٠٪، وصافي أصول بالعادلة ١٬٠٠٠" },
      rows: [
        { dr: { en: "Identifiable net assets at FV 1,000", ar: "صافي أصول محددة بالعادلة ١٬٠٠٠" } },
        { cr: { en: "Cash 700 (consideration transferred)", ar: "نقد ٧٠٠ (المقابل المحوَّل)" } },
        { cr: { en: "NCI 200 (proportionate 20% × 1,000)", ar: "حصة غير مسيطرة ٢٠٠ (تناسبية ٢٠٪ × ١٬٠٠٠)" } },
        { cr: { en: "Gain on bargain purchase — P&L 100 (1,000 − 700 − 200)", ar: "مكسب شراء مفاض — أرباح ١٠٠ (١٬٠٠٠ − ٧٠٠ − ٢٠٠)" }, red: true },
        { dr: { en: "If the re-check finds an unbooked customer list 80 → net assets 1,080, NCI 216 → gain = 700 + 216 − 1,080 = 164", ar: "إن كشفت المراجعة قائمة عملاء غير مثبتة ٨٠ ← صافي أصول ١٬٠٨٠ والحصة ٢١٦ ← المكسب = ٧٠٠ + ٢١٦ − ١٬٠٨٠ = ١٦٤" } },
      ],
    },
    {
      kind: "example",
      title: { en: "Goodwill both ways (the NCI choice)", ar: "الشهرة بالطريقتين (خيار الحصة غير المسيطرة)" },
      lines: [
        { en: "Consideration 900 (cash 500 + shares 400) for 80% · identifiable net assets at FV 1,000 (incl. a brand 120 the acquiree never booked)", ar: "مقابل ٩٠٠ (نقد ٥٠٠ + أسهم ٤٠٠) مقابل ٨٠٪ · صافي أصول محددة بالعادلة ١٬٠٠٠ (منها علامة ١٢٠ لم تكن مثبتة لدى المقتناة)" },
        { en: "Partial: NCI = 20% × 1,000 = 200 → goodwill = 900 + 200 − 1,000 = 100", ar: "الجزئية: الحصة = ٢٠٪ × ١٬٠٠٠ = ٢٠٠ ← الشهرة = ٩٠٠ + ٢٠٠ − ١٬٠٠٠ = ١٠٠" },
        { en: "Full: NCI at FV 260 → goodwill = 900 + 260 − 1,000 = 160 — the extra 60 is the NCI's slice of goodwill", ar: "الكاملة: الحصة بعادلتها ٢٦٠ ← الشهرة = ٩٠٠ + ٢٦٠ − ١٬٠٠٠ = ١٦٠ — والزيادة ٦٠ هي نصيب الحصة من الشهرة" },
        { en: "Impairment later: full goodwill exposes 160 (parent + NCI), partial only 100 (parent alone) — the choice lives on inside IAS 36", ar: "انخفاض القيمة لاحقًا: الكاملة تعرض ١٦٠ (الأم والحصة معًا) والجزئية ١٠٠ فقط (الأم وحدها) — فالخيار يعيش داخل IAS 36" },
        { en: "Sell the 80% a year later → run IFRS 10's loss-of-control formula on the same numbers", ar: "بِع الـ٨٠٪ بعد سنة ← طبق معادلة فقد السيطرة في IFRS 10 على الأرقام ذاتها" },
      ],
    },
    {
      kind: "example",
      title: { en: "The measurement period in action", ar: "فترة القياس عمليًا" },
      lines: [
        { en: "Month 9 of the 900-deal: the provisional inventory 200 settles at 160 (facts that existed at the acquisition date) → net assets 960", ar: "الشهر ٩ من صفقة الـ٩٠٠: المخزون المبدئي ٢٠٠ يستقر عند ١٦٠ (وقائع كانت قائمة بتاريخ الاستحواذ) ← صافي الأصول ٩٦٠" },
        { en: "Partial goodwill re-run: 900 + (20% × 960 = 192) − 960 = 132 — goodwill up 32, NCI down 8", ar: "إعادة حساب الجزئية: ٩٠٠ + (٢٠٪ × ٩٦٠ = ١٩٢) − ٩٦٠ = ١٣٢ — الشهرة +٣٢ والحصة −٨" },
        { en: "Month 14 (window shut): the earnout is re-fair-valued +15 because the target was beaten — NEW facts → P&L 15, goodwill untouched", ar: "الشهر ١٤ (بعد إغلاق النافذة): يعاد قياس المقابل المشروط +١٥ لتجاوز الهدف — وقائع جديدة ← ١٥ بالأرباح والشهرة لا تمس" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Bargain purchase is NOT free goodwill: FIRST re-check every measurement (consideration, fair values, contingent liabilities, NCI, prior-held interest), THEN book the residual gain — and expect the auditor to challenge it.",
        ar: "الشراء المفاض ليس شهرة مجانية: راجع أولًا كل قياس (المقابل والعادلات والالتزامات المحتملة والحصص)، ثم اثبت مكسب الباقي — وتوقع تحدي المراجع له.",
      },
    },
    { kind: "h", text: { en: "The measurement period", ar: "فترة القياس" } },
    {
      kind: "p",
      text: {
        en: "If the accounting is incomplete at the acquisition date (a valuation still in progress), the acquirer books PROVISIONAL amounts and enjoys up to TWELVE MONTHS from the acquisition date to finalise them — the measurement period. Adjustments inside the window that reflect facts EXISTING at the acquisition date re-run the goodwill equation retrospectively. After the window closes the gates change: errors follow IAS 8 (restatement), and estimate revisions from new facts — an earnout re-fair-valued because the target was beaten — go to P&L. The window is not a licence to revise for post-acquisition events.",
        ar: "إن لم يكتمل الحساب بتاريخ الاستحواذ (تقييم ما يزال جاريًا) أثبت المقتني مقادير مبدئية وتمتع بما يصل إلى اثني عشر شهرًا من تاريخ الاستحواذ لاستكمالها — فترة القياس. والتعديلات داخل النافذة العاكسة لوقائع كانت قائمة بتاريخ الاستحواذ تعيد تشغيل معادلة الشهرة بأثر رجعي. وبعد إغلاق النافذة تتغير البوابات: الأخطاء تتبع IAS 8 (إعادة عرض)، ومراجعات التقدير لوقائع جديدة — إعادة قياس مقابل مشروط لتجاوز الهدف — تذهب إلى الأرباح. فالنافذة ليست رخصة لمراجعة أحداث ما بعد الاستحواذ.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "INSIDE (≤ 12 months, facts at the acquisition date): FV refinements, newly found intangibles, deferred-tax finalisations → adjust GOODWILL (and the proportionate NCI with it)", ar: "داخل النافذة (١٢ شهرًا فأقل، وقائع تاريخ الاستحواذ): تنقيح العادلات، وغير ملموسة مكتشفة، واستكمال الضرائب المؤجلة ← تعدل الشهرة (والحصة التناسبية معها)" },
        { en: "AFTER the window, but an ERROR (maths, misapplication) → IAS 8 retrospective restatement", ar: "بعد النافذة إن كان خطأ (حسابيًا أو تطبيقًا خاطئًا) ← إعادة عرض رجعية وفق IAS 8" },
        { en: "AFTER the window, NEW facts (earnout performance, a warranty claim crystallising) → P&L as they happen", ar: "بعد النافذة، وقائع جديدة (أداء مقابل مشروط، تحقق مطالبة ضمان) ← الأرباح عند حدوثها" },
        { en: "A new IFRS that changes acquisition accounting → IFRS 3.50's cascade (amend goodwill if it would have applied at the acquisition date)", ar: "معيار IFRS جديد يغير محاسبة الاستحواذ ← تسلسل IFRS 3.50 (عدل الشهرة لو كان يسري بتاريخ الاستحواذ)" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Measurement-period adjustment — PPE provisional 680 → final 620 (month 9)", ar: "تعديل فترة قياس — ممتلكات مبدئية ٦٨٠ ← نهائية ٦٢٠ (الشهر ٩)" },
      rows: [
        { dr: { en: "Goodwill 32 (partial goodwill: the parent's 80% of the 60 shortfall)", ar: "الشهرة ٣٢ (الجزئية: نصيب الأم ٨٠٪ من النقص ٦٠)" }, red: true },
        { dr: { en: "NCI 8 (the minority's 20% share of the shortfall)", ar: "حصة غير مسيطرة ٨ (نصيب الأقلية ٢٠٪ من النقص)" } },
        { cr: { en: "PPE 60 (680 → 620 — facts that existed at the acquisition date)", ar: "ممتلكات ٦٠ (٦٨٠ ← ٦٢٠ — وقائع قائمة بتاريخ الاستحواذ)" } },
        { cr: { en: "Full-goodwill variant: goodwill +60, NCI untouched (fixed at fair value)", ar: "صيغة الشهرة الكاملة: الشهرة +٦٠ والحصة لا تُمس (مثبتة بالعادلة)" } },
      ],
    },
    { kind: "h", text: { en: "Step acquisitions", ar: "الاستحواذ المتدرج" } },
    {
      kind: "p",
      text: {
        en: "When control arrives in stages (20% associate → 70% subsidiary), the previously held interest is REMEASURED to its acquisition-date FAIR VALUE: the gain or loss goes to P&L — or to OCI for a FVOCI-designated equity stake, never recycled. The remeasured fair value then enters the goodwill equation as its 'previously held interest' term, and the associate's entire carrying amount dies at that moment. The same remeasurement engine runs when control is LOST (IFRS 10's cascade): every crossing of the control boundary is a fresh-start measurement.",
        ar: "حين تصل السيطرة على مراحل (٢٠٪ زميلة ← ٧٠٪ تابعة) تعاد قياسة الحصة المسبقة إلى قيمتها العادلة بتاريخ الاستحواذ: والفرق إلى الأرباح — أو إلى الدخل الشامل لحصة ملكية مصنفة FVOCI بلا تدوير أبدًا. ثم تدخل العادلة المعاد قياسها معادلة الشهرة في حد «الحصة المسبقة»، وتموت الدفترية الكاملة للزميلة في تلك اللحظة. والمحرك ذاته يعمل عند فقد السيطرة (تسلسل IFRS 10): فكل عبور لحدود السيطرة قياس من الصفر.",
      },
    },
    {
      kind: "journal",
      title: { en: "Step acquisition — 20% held at FVOCI (carrying 150), control acquired; the stake's FV at acquisition 200", ar: "استحواذ متدرج — حصة ٢٠٪ بتصنيف FVOCI (دفترية ١٥٠)، وتتحقق السيطرة؛ وعادلة الحصة عند الاستحواذ ٢٠٠" },
      rows: [
        { dr: { en: "Investment 50 (remeasure 150 → 200 at the acquisition date)", ar: "الاستثمار ٥٠ (إعادة قياس ١٥٠ ← ٢٠٠ بتاريخ الاستحواذ)" } },
        { cr: { en: "OCI — FVOCI gain 50 (never recycled; P&L instead if the stake was FVTPL)", ar: "دخل شامل — مكسب FVOCI ٥٠ (لا يدور للأرباح؛ ولو كان FVTPL لذهب للأرباح)" }, red: true },
        { dr: { en: "The remeasured 200 now feeds: goodwill = 200 + consideration + NCI − net assets at FV", ar: "الـ٢٠٠ المعاد قياسها تغذي: الشهرة = ٢٠٠ + المقابل + الحصة − صافي الأصول بالعادلة" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Other special combinations", ar: "الاندماجات الخاصة الأخرى" } },
    {
      kind: "list",
      items: [
        { en: "REVERSE ACQUISITION: the legal acquirer is the accounting acquiree; 'deemed' consideration = the FV of the shares the accounting acquirer's owners effectively receive", ar: "الاستحواذ العكسي: المقتني القانوني هو المقتنى محاسبيًا؛ والمقابل «المفترض» = عادلة الأسهم التي ينالها ملاك المقتني المحاسبي فعليًا" },
        { en: "WITHOUT a transfer of consideration (control via contract): deemed consideration at the acquiree's shares' FV — the acquisition method still runs", ar: "دون مقابل منقول (سيطرة بعقد): مقابل مفترض بعادلة أسهم المقتنى — وأسلوب الاستحواذ يعمل رغم ذلك" },
        { en: "COMMON CONTROL combinations: outside IFRS 3 — carry-over basis at the receiving entity (the IASB project on this is still in train)", ar: "اندماجات السيطرة المشتركة: خارج IFRS 3 — أساس النقل لدى الكيان المتلقي (ومشروع المجلس حولها ما يزال جاريًا)" },
        { en: "Mutual entities: IFRS 3 applies with the consideration adapted (membership interests at fair value)", ar: "الكيانات المتبادلة: يطبق IFRS 3 مع مواءمة المقابل (حقوق عضوية بالقيمة العادلة)" },
        { en: "JV FORMATION: bringing businesses into a joint venture — each contributor applies IFRS 3 from its own perspective, unless common control", ar: "تكوين مشروع مشترك: إدخال أنشطة إلى مشروع مشترك — يطبق كل مساهم IFRS 3 من منظوره، ما لم تكن سيطرة مشتركة" },
      ],
    },
    { kind: "h", text: { en: "Goodwill after the deal", ar: "الشهرة بعد الصفقة" } },
    {
      kind: "p",
      text: {
        en: "Goodwill lives on the consolidated balance sheet, is allocated from day one to the CGUs (or groups of CGUs) expected to benefit from the synergies — never to the acquirer's old CGUs — and is NOT amortised: it gets an impairment test at least ANNUALLY (IAS 36) and whenever indicators exist, against a CGU whose carrying amount includes the goodwill. A goodwill impairment, once booked, is NEVER reversed. When the NCI was measured at proportionate share, only the parent's slice of goodwill sits in the CGU's carrying (the IAS 36 gross-up mechanics allocate the impairment back across ownership).",
        ar: "تعيش الشهرة في قائمة المركز المالي المجمعة، وتوزع من اليوم الأول على وحدات توليد النقد (أو مجموعاتها) المتوقع أن تنتفع بالتآزر — لا على وحدات المقتني القديمة أبدًا — ولا تستهلك: بل اختبار انخفاض سنويًا على الأقل (IAS 36) وكلما وُجدت مؤشرات، على وحدة تشمل قيمتها الدفترية الشهرة. وانخفاض الشهرة بعد إثباته لا يُرد أبدًا. وعندما قيست الحصة غير المسيطرة تناسبيًا لا يجلس في الوحدة سوى نصيب الأم من الشهرة (بمنطق إعادة التضخيم في IAS 36 عند توزيع الانخفاض على الملكية).",
      },
    },
    {
      kind: "note",
      text: {
        en: "No pre-acquisition profits: earnings before the acquisition date are locked inside goodwill; the acquiree's post-deal performance measures from the control date.",
        ar: "لا أرباح قبل الاستحواذ: أرباح المقتنى قبل تاريخ الصفقة تحجز داخل الشهرة؛ وقوائمه اللاحقة تُقاس من تاريخ السيطرة.",
      },
    },
    { kind: "h", text: { en: "Disclosures — telling the deal's story", ar: "الإفصاحات — حكاية الصفقة" } },
    {
      kind: "list",
      items: [
        { en: "Names, dates, % acquired, and WHY the deal happened + a revenue/profit line since acquisition and the pro-forma 'what if it had happened a year earlier'", ar: "الأسماء والتواريخ والنسب المقتناة وسبب الصفقة + إيراد وربح منذ الاستحواذ وافتراض «لو حدثت قبل سنة»" },
        { en: "The fair-value information by major class (what the intangibles were, the contingent consideration, the acquisition costs expensed)", ar: "معلومات القيمة العادلة بالفئات الرئيسية (طبيعة غير الملموسة والمقابل المشروط وتكاليف الاستحواذ المصروفة)" },
        { en: "The goodwill reconciliation: opening → additions → measurement-period adjustments → impairments → FX → closing; the impairment-loss segments", ar: "تسوية الشهرة: افتتاحي ← إضافات ← تعديلات فترة القياس ← انخفاضات ← فروق عملة ← ختامي؛ وقطاعات خسائر الانخفاض" },
        { en: "Segment-level goodwill, and any bargain-purchase gain with the reason it arose", ar: "الشهرة على مستوى القطاعات، وأي مكسب شراء مفاض مع سببه" },
      ],
    },
    { kind: "h", text: { en: "Interactions & effective dates", ar: "التفاعلات والتواريخ النافذة" } },
    {
      kind: "p",
      text: {
        en: "IFRS 3's engine room connects to half the framework: IAS 37 (the contingent-liability override), IAS 12 (deferred taxes on every uplift — and the initial-recognition exception that does NOT shelter combinations), IAS 36 (the goodwill and CGU machinery), IFRS 10 (consolidation from the acquisition date; the loss-of-control cascade runs the same remeasurement engine), IFRS 11 / IAS 28 (acquiring an interest in a joint operation that constitutes a business borrows IFRS 3), and IFRS 12 (the disclosure partner). The revised standard took effect 1 July 2009; the 'Definition of a Business' amendment on 1 January 2020 — with the IASB's goodwill-and-impairment and common-control projects still on the tracks.",
        ar: "غرفة محركات IFRS 3 متصلة بنصف الإطار: IAS 37 (تجاوز الالتزامات المحتملة)، وIAS 12 (ضرائب مؤجلة على كل زيادة — واستثناء الاعتراف الأولي الذي لا يحمي الاندماجات)، وIAS 36 (آلة الشهرة ووحدات توليد النقد)، وIFRS 10 (التجميع من تاريخ الاستحواذ؛ وتسلسل فقد السيطرة يشغل محرك إعادة القياس ذاته)، وIFRS 11 / IAS 28 (الاستحواذ على حصة في عملية مشتركة تشكل نشاطًا يستعير IFRS 3)، وIFRS 12 (شريك الإفصاح). وسريان النسخة المراجعة من ١ يوليو ٢٠٠٩؛ وتعديل «تعريف النشاط» من ١ يناير ٢٠٢٠ — و مشروعا الشهرة والانخفاض والسيطرة المشتركة لدى المجلس ما يزالان على القضبان.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The deferred-tax footnote: IAS 12's initial-recognition exception NEVER applies to business combinations, and later deferred-tax changes that trace back to acquisition-date facts adjust goodwill — but only while the measurement window is open.",
        ar: "حاشية الضريبة المؤجلة: استثناء الاعتراف الأولي في IAS 12 لا يسري على الاندماجات أبدًا، وتغيرات الضريبة المؤجلة اللاحقة الراجعة إلى وقائع تاريخ الاستحواذ تعدل الشهرة — لكن ما دامت نافذة القياس مفتوحة فقط.",
      },
    },
  ],
}
