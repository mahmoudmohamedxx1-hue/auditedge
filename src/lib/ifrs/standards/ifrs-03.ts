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
        en: "A business combination brings together separate entities into ONE reporting entity — an acquirer obtains CONTROL of a business (an integrated set of activities & assets capable of conducted-for-investors returns). IFRS 3's single model is the ACQUISITION METHOD: fair values at the acquisition date, the cost formula for goodwill, and no pre-acquisition profits to muddle the numbers.",
        ar: "الاندماج يجمع كيانات مستقلة في كيان مفصح واحد — يقتني المقتني سيطرةً على نشاط (منظومة أنشطة وأصول قادرة على عوائد لمستثمريها). ونموذج IFRS 3 الوحيد أسلوب الاستحواذ: قيم عادلة بتاريخ الاستحواذ، ومعادلة الشهرة، ولا أرباح ما قبل الاستحواذ تلخّط الأرقام.",
      },
    },
    {
      kind: "steps",
      items: [
        { en: "IDENTIFY the ACQUIRER — the party that obtains control (IFRS 10's three-element test)", ar: "حدد المقتني — الطرف الذي ينال السيطرة (اختبار IFRS 3 العناصر الثلاثة)" },
        { en: "Determine the ACQUISITION DATE — when control passes (usually the closing date; a staged deal takes the date control tips over 50%)", ar: "حدد تاريخ الاستحواذ — لحظة انتقال السيطرة (عادة تاريخ الإقفال؛ والمتدرج عند تجاوز نصفة الأسهم)" },
        { en: "RECOGNISE & MEASURE the identifiable assets acquired, liabilities assumed & any NCI — at ACQUISITION-DATE FAIR VALUE", ar: "اعترف وقِس الأصول المحددة المقتناة والالتزامات المتحملة وأي حصة غير مسيطرة — بالقيمة العادلة بتاريخ الاستحواذ" },
        { en: "MEASURE the consideration transferred (cost formula below) and the resulting GOODWILL or GAIN on a bargain purchase", ar: "قِس المقابل المحوَّل (معادلة التكلفة أدناه) والشهرة الناشئة أو مكسب الشراء المفاض" },
      ],
    },
    { kind: "h", text: { en: "The goodwill equation", ar: "معادلة الشهرة" } },
    {
      kind: "formula",
      title: { en: "Full vs partial goodwill", ar: "الشهرة الكاملة مقابل الجزئية" },
      lines: [
        { en: "Goodwill = consideration transferred + NCI + previously held equity interest − net acquisition-date fair value of identifiable assets & liabilities", ar: "الشهرة = المقابل المحوَّل + الحصة غير المسيطرة + الحصة المسبقة − صافي القيمة العادلة للأصول والالتزامات المحددة" },
        { en: "NCI at FAIR VALUE (full goodwill) OR at the proportionate share of the identifiable net assets (partial) — an entity-by-entity choice at the acquisition date", ar: "الحصة غير المسيطرة بالقيمة العادلة (شهرة كاملة) أو بالحصة التناسبية من صافي الأصول المحددة (جزئية) — خيار لكل عملية" },
        { en: "Bargain purchase (goodwill NEGATIVE): re-check the measurement first, then recognise the excess in P&L as a gain (a rare, carefully-audited event)", ar: "الشراء المفاض (شهرة سالبة): راجع القياس أولًا ثم اعترف بالزيادة مكسبًا بالأرباح — حدث نادر يراجع بعناية" },
        { en: "Goodwill is NOT amortised — annual impairment testing (IAS 36) instead", ar: "لا تستهلك الشهرة — بل اختبار سنوي لانخفاض قيمتها (IAS 36)" },
      ],
    },
    { kind: "h", text: { en: "What counts as consideration", ar: "ما يعتبر مقابلًا" } },
    {
      kind: "list",
      items: [
        { en: "Assets transferred, liabilities incurred & EQUITY issued — measured at acquisition-date FAIR VALUE (a share-for-share deal uses the shares' FV at the acquisition date)", ar: "أصول منقولة والتزامات متحملة وأدوات ملكية مصدرة — بالعادلة بتاريخ الاستحواذ (والمقايضة بالأسهم بأسهمها العادلة)" },
        { en: "CONTINGENT CONSIDERATION: recognised at acquisition-date fair value, classified as a LIABILITY (remeasured through P&L) or EQUITY (not remeasured) under IAS 32", ar: "المقابل المشروط: بالعادلة بتاريخ الاستحواذ، مصنفا التزامًا (يعاد قياسه بالأرباح) أو ملكية (لا يعاد) وفق IAS 32" },
        { en: "Replacement awards to the acquiree's employees (IFRS 2): split between consideration (for the deal) and post-combination expense (for post-acquisition service)", ar: "المكافآت البديلة لعاملي المقتنى (IFRS 2): تقسم بين مقابل (للصفقة) ومصروف لاحق (لخدمة ما بعد الاستحواذ)" },
        { en: "ACQUISITION-RELATED COSTS (advisory, legal, accounting) → EXPENSE as incurred — never capitalised into goodwill; EQUITY-ISSUE costs reduce the equity proceeds", ar: "تكاليف الاستحواذ (استشارات، قانونية، محاسبية) ← مصروف عند حدوثها — لا ترسمل أبدًا؛ وتكاليف إصدار الأسهم تخفض متحصلات الملكية" },
        { en: "A deferred-payment element gets DISCOUNTED to present value (a financing component)", ar: "عنصر السداد المؤجل يخصم لقيمته الحالية (عنصر تمويلي)" },
      ],
    },
    { kind: "h", text: { en: "Recognising the identifiable net assets", ar: "الاعتراف بصافي الأصول المحددة" } },
    {
      kind: "tree",
      root: { en: "What can be separated from goodwill?", ar: "ما يفصل عن الشهرة؟" },
      branches: [
        {
          when: { en: "TANGIBLE & intangible assets meeting the IFRS 3 recognition conditions: separable OR contractual-legal — the acquirer recognises the acquiree's INTANGIBLES the acquiree never booked (brands, customer lists, in-process R&D, order backlog) at fair value", ar: "أصول ملموسة وغير ملموسة تحقق شرطي IFRS 3: قابلية الفصل أو وجود عقد/قانون — فيثبت المقتني غير الملموسة التي لم تثبتها المقتناة (علامات، قوائم عملاء، تطوير جارٍ، طلبات معلقة) بالعادلة" },
          then: { en: "Recognise apart from goodwill — the classic mark-earner", ar: "تعترف منفصلة عن الشهرة — أكسب درجات", red: true },
        },
        {
          when: { en: "CONTINGENT LIABILITIES of the acquiree — IFRS 3 recognises them at fair value IF they are a present obligation from a past event — IAS 37's probability gate does NOT apply here", ar: "الالتزامات المحتملة للمقتنى — يعترف بها بالعادلة إن كانت التزامًا قائمًا من حدث ماضٍ — ولا تنطبق بوابة الاحتمالات في IAS 37 هنا" },
          then: { en: "Recognise at FV (contrast with IAS 37!) — subsequently at the higher of the IAS 37 provision test and initial FV less income", ar: "تعترف بالعادلة (قابل ذلك IAS 37!) — ثم بالأعلى من اختبار IAS 37 وأول قيمة", red: true },
        },
        {
          when: { en: "CONTINGENT ASSETS — recognisable at fair value when the definition of an asset is met — again IAS 37's 'never recognise' rule is overridden in combinations", ar: "الأصول المحتملة — تثبت بالعادلة عند تحقق تعريف الأصل — وهنا أيضًا تتجاوز قاعدة «لا اعتراف» في IAS 37" },
          then: { en: "The exam pair: both contingents recognised — a deliberate IFRS 3 exception", ar: "الزوج الامتحاني: كلاهما يعترف به — استثناء مقصود في IFRS 3", red: true },
        },
        {
          when: { en: "Deferred tax on every fair-value uplift & tax losses (IAS 12); INDEMNIFICATION ASSETS from seller guarantees (only when the indemnity's conditions are met); REACQUIRED RIGHTS (a franchise the acquiree held from the acquirer)", ar: "ضريبة مؤجلة على كل زيادة عادلة وخسائر ضريبية (IAS 12)؛ وأصول التعويض من ضمانات البائع؛ والحقوق المستردة" },
          then: { en: "The combination machinery's supporting cast — each at fair value, each examinable", ar: "طاقم مساند لآلة الاندماج — كلٌّ بالعادلة وكلٌّ قابل للامتحان" },
        },
      ],
    },
    { kind: "h", text: { en: "The measurement period", ar: "فترة القياس" } },
    {
      kind: "p",
      text: {
        en: "Provisional amounts get a 12-month measurement window (from the acquisition date) to complete the accounting — adjustments within it flow through the goodwill equation (measurement-period adjustments). After the window closes: errors follow IAS 8, and changes in estimates (earnout revisions from new facts, not measurement) hit P&L. New standards applying to the combination after the window? IFRS 3.50's cascade sorts them.",
        ar: "تُمنح المقادير المبدئية نافذة اثني عشر شهرًا (من تاريخ الاستحواذ) لاكتمال القياس — والتعديلات داخلها تجري عبر معادلة الشهرة. وبعد إغلاق النافذة: الأخطاء لـIAS 8، وتغيرات التقدير (مراجعات أرباح مستحدثة) للأرباح. ومعايير تسري على الاندماج بعد النافذة؟ تسلسل IFRS 3.50 يحسمها.",
      },
    },
    {
      kind: "journal",
      title: { en: "The acquisition entry (partial goodwill)", ar: "قيد الاستحواذ (شهرة جزئية)" },
      rows: [
        { dr: { en: "PPE / inventory / intangibles / receivables (at FV)", ar: "ممتلكات/مخزون/غير ملموسة/مدينون (بالعادلة)" } },
        { dr: { en: "Goodwill (the equation's plug)", ar: "الشهرة (رابط المعادلة)" }, red: true },
        { dr: { en: "NCI (proportionate share of identifiable net assets)", ar: "حصة غير مسيطرة (الحصة التناسبية من الصافي)" }, red: true },
        { dr: { en: "Previously held interest (FV at acquisition date, if any)", ar: "حصة مسبقة (بالعادلة بتاريخ الاستحواذ، إن وجدت)" } },
        { cr: { en: "Consideration: cash / shares issued (FV) / contingent consideration", ar: "المقابل: نقد/أسهم/مقابل مشروط" } },
        { cr: { en: "Liabilities assumed & contingent liabilities (FV)", ar: "التزامات متحملة ومحتملة (بالعادلة)" } },
      ],
    },
    {
      kind: "example",
      title: { en: "Goodwill both ways", ar: "الشهرة بالطريقتين" },
      lines: [
        { en: "Consideration 900 cash for 80% · identifiable net assets at FV 1,000 (incl. a brand 120 the acquiree never booked)", ar: "مقابل ٩٠٠ نقدًا مقابل ٨٠٪ · صافي أصول محددة بالعادلة ١٬٠٠٠ (منها علامة ١٢٠ لم تكن مثبتة)" },
        { en: "Partial: NCI = 20% × 1,000 = 200 → goodwill = 900 + 200 − 1,000 = 100", ar: "الجزئية: الحصة = ٢٠٪ × ١٬٠٠٠ = ٢٠٠ ← الشهرة = ٩٠٠ + ٢٠٠ − ١٬٠٠٠ = ١٠٠" },
        { en: "Full: NCI at FV 260 → goodwill = 900 + 260 − 1,000 = 160 (60 of 'NCI goodwill')", ar: "الكاملة: الحصة بعادلتها ٢٦٠ ← الشهرة = ١٬١٦٠ − ١٬٠٠٠ = ١٦٠ (منها ٦٠ شهرة الحصة)" },
        { en: "Sale of the 80% a year later for 1,000 with carrying goodwill 100 & net assets then 1,050: loss-of-control gain = 1,000 + FV of retained 20% − (1,050 × 80% + 100)… run the IFRS 10 formula", ar: "بيع الـ٨٠٪ لاحقًا بـ١٬٠٠٠: طبق معادلة فقد السيطرة في IFRS 10" },
      ],
    },
    { kind: "h", text: { en: "Special combinations", ar: "الاندماجات الخاصة" } },
    {
      kind: "list",
      items: [
        { en: "ACHIEVED IN STAGES (step acquisition): the previously held interest is REMEASURED to acquisition-date fair value → the gain/loss in P&L (or OCI for FVOCI-equity, never recycled)", ar: "المتدرج: تعاد قياس الحصة المسبقة إلى العادلة بتاريخ الاستحواذ والفرق للأرباح (أو الدخل الشامل لملكية FVOCI دون تدوير)" },
        { en: "WITHOUT a transfer of consideration (a reverse acquisition by shares, or control via contract): 'deemed' consideration at the acquiree's shares' FV; the LEGAL acquirer is the accounting acquiree in reverse deals", ar: "دون مقابل: مقابل «مفترض» بعادلة أسهم الطرف المتحكم؛ والمقتني القانوني هو المقتنى المحاسبي في الاندماج العكسي" },
        { en: "COMMON CONTROL combinations: OUT of IFRS 3's scope (IAS 27-style pooling under the IFRS 3.B2 exclusions — no fair values at the receiving entity's books in the usual IAS/IFRS practice: carry-over basis)", ar: "تحت السيطرة المشتركة: خارج نطاق IFRS 3 — أساس النقل وليس العادلة في الممارسة المعتادة" },
        { en: "Mutual entities & JV formations (IFRS 3 applies to those bringing a business into a JV with a separate structure)", ar: "الكيانات المتبادلة وتكوين المشتركة (يطبق على من يدخل نشاطًا في مشروع مشترك ببنية مستقلة)" },
      ],
    },
    { kind: "h", text: { en: "Disclosures — telling the deal's story", ar: "الإفصاحات — حكاية الصفقة" } },
    {
      kind: "list",
      items: [
        { en: "Names, dates, % acquired, and WHY the deal happened + a revenue/profit line since acquisition and the pro-forma 'what if it had happened a year earlier'", ar: "الأسماء والتواريخ والنسب ولماذا الصفقة + إيراد وربح منذ الاستحواذ وافتراض «لو حدثت قبل سنة»" },
        { en: "The fair-value information by major class (what the intangibles were, the contingent consideration, the acquisition costs expensed)", ar: "معلومات العادلة بالفئات الرئيسية (غير الملموسة والمقابل المشروط وتكاليف الاستحواذ)" },
        { en: "The goodwill reconciliation: opening → additions → measurement-period adjustments → impairments → FX → closing; the impairment-loss segments", ar: "تسوية الشهرة: افتتاحي ← إضافات ← تعديلات فترة القياس ← انخفاضات ← عملة ← ختامي" },
        { en: "Segment-level goodwill + any bargain-purchase gain and its reason", ar: "الشهرة على مستوى القطاعات + أي مكسب شراء مفاض وسببه" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The IAS 37 override is a deliberate trap: 'the acquiree faces a lawsuit judged possible (not probable)' — IAS 37 says disclose; IFRS 3 says RECOGNISE the contingent liability at fair value in the combination. Say both standards and the override — that sentence earns the mark.",
        ar: "تجاوز IAS 37 فخ مقصود: «تواجه المقتنى دعوى ممكنة لا مرجحة» — تقول IAS 37 أفصح؛ ويقول IFRS 3 اعترف بالالتزام المحتمل بالعادلة. اذكر المعيارين والتجاوز — فتلك الجملة تكسب الدرجة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Bargain purchase is NOT free goodwill: FIRST re-check every measurement (consideration, FVs, contingent liabilities, NCI, prior-held interest), THEN book the residual gain — and expect the auditor to challenge it.",
        ar: "الشراء المفاض ليس شهرة مجانية: راجع أولًا كل قياس (المقابل والعادلات والمحتملة والحصص) ثم اثبت مكسب الباقي — وتوقع تحدي المراجع له.",
      },
    },
    {
      kind: "note",
      text: {
        en: "No pre-acquisition profits: earnings before the acquisition date are locked inside goodwill; the acquiree's post-deal performance measures from the control date.",
        ar: "لا أرباح قبل الاستحواذ: أرباح المقتنى قبل تاريخ الصفقة تحجز داخل الشهرة؛ وقوائمه اللاحقة تُقاس من تاريخ السيطرة.",
      },
    },
  ],
}
