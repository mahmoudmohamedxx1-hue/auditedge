/** IAS 36 — Impairment of Assets */

import type { Standard } from "../types"

export const IAS_36: Standard = {
  code: "IAS 36",
  title: { en: "Impairment of Assets", ar: "انخفاض قيمة الأصول" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 2005 · amended by IFRS 13 & IFRS 16", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل بـ IFRS 13 وIFRS 16" },
  blocks: [
    { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
    {
      kind: "p",
      text: {
        en: "Ensure assets are carried at NO MORE than their recoverable amount, so that the balance sheet never overstates what an impaired asset can still deliver. Applies to: PPE (incl. right-of-use), intangibles, goodwill, investment property measured at COST, equity-method investments, and CGUs. NOT applied to: inventories (IAS 2), deferred tax (IAS 12), employee-benefit assets (IAS 19), financial instruments (IFRS 9), investment property at fair value (IAS 40), non-current assets held for sale (IFRS 5), biological assets (IAS 41) — each has its own impairment machinery.",
        ar: "يكفل ألا تُحمل الأصول بأكثر من المبلغ القابل للاسترداد، فلا تبالغ الميزانية فيما يستطيع الأصل المتدني تحقيقه بعد. ويطبق على: الممتلكات (ومنها أصول الحق في الاستخدام)، وغير الملموسة، والشهرة، والعقارات الاستثمارية بالتكلفة، واستثمارات طريقة الحصة، ووحدات توليد النقد. ولا يطبق على: المخزون (IAS 2)، والضريبة المؤجلة (IAS 12)، وأصول المزايا (IAS 19)، والأدوات المالية (IFRS 9)، والعقارات بالقيمة العادلة (IAS 40)، والأصول المحتفظ بها للبيع (IFRS 5)، والأصول الحيوية (IAS 41) — لكل منها آلته الخاصة.",
      },
    },
    { kind: "h", text: { en: "When to test", ar: "متى يُختبر" } },
    {
      kind: "tree",
      root: { en: "Impairment testing trigger", ar: "مقدمة اختبار الانخفاض" },
      branches: [
        {
          when: { en: "ANNUAL test regardless of indicators: goodwill · intangibles with INDEFINITE life · intangibles NOT YET AVAILABLE FOR USE — test for impairment every year (timing flexible per asset; goodwill CGU timing: reorganisation within 6 months of the annual test allows a fresh test)", ar: "اختبار سنوي بلا مؤشرات: الشهرة · غير الملموسة ذات العمر غير المحدد · غير الجاهزة للاستخدام بعد" },
          then: { en: "Annual test compulsory — same time each year per asset/CGU", ar: "اختبار سنوي إلزامي — في التوقيت ذاته سنويًا لكل أصل/وحدة", red: true },
        },
        {
          when: { en: "EXTERNAL indicators: significant market-value decline beyond use/time; material adverse changes in technological/market/economic/LEGAL environment; increases in market interest rates cutting discount rates", ar: "مؤشرات خارجية: هبوط جوهري بالقيمة السوقية، تغيرات سلبية بالتقنية أو السوق أو البيئة الاقتصادية/القانونية، ارتفاع أسعار الفائدة" },
          then: { en: "Test at the reporting date", ar: "اختبر بتاريخ التقرير", red: true },
        },
        {
          when: { en: "INTERNAL indicators: obsolescence/damage, plans to discontinue/restructure/dispose, worse economic performance than budgeted, dividends from a subsidiary exceed its comprehensive income while the sub carries the goodwill internally", ar: "مؤشرات داخلية: تقادم/تلف، خطط توقف/إعادة هيكلة/تخرد، أداء أسوأ من المخطط، توزيعات من تابعة تتجاوز دخلها الشامل" },
          then: { en: "Test at the reporting date", ar: "اختبر بتاريخ التقرير", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Recoverable amount — the higher of", ar: "المبلغ القابل للاسترداد — الأعلى من" } },
    {
      kind: "formula",
      title: { en: "The two measurement engines", ar: "محركا القياس" },
      lines: [
        { en: "Recoverable amount = MAX ( fair value less costs of disposal , value in use )", ar: "المبلغ القابل للاسترداد = الأعلى من (القيمة العادلة مطروحًا منها تكاليف التخرد، وقيمة الاستخدام)" },
        { en: "FVLCD = IFRS 13 exit price − incremental costs of disposal (legal fees, stamp duty, closing costs — EXCLUDING income tax and interest)", ar: "القيمة العادلة ناقص التكاليف = سعر الخروج وفق IFRS 13 − تكاليف التخرد التضافية (أتعاب قانونية، رسوم، مصاريف إغلاق — دون ضريبة الدخل والفائدة)" },
        { en: "VIU = PV of PRE-TAX cash flows from the asset's continued use + disposal, at management's best estimates, PRE-TAX discount rate reflecting current market assessments of the time value + risks specific to the asset", ar: "قيمة الاستخدام = القيمة الحالية للتدفقات قبل الضريبة من الاستخدام المستمر + التخرد، بتقديرات الإدارة المثلى وبمعدل خصم قبل الضريبة يعكس تقييمات السوق للقيمة الزمنية ومخاطر الأصل" },
        { en: "Impairment loss = carrying amount − recoverable amount → P&L (revaluation assets: first the revaluation surplus)", ar: "خسارة الانخفاض = القيمة الدفترية − القابل للاسترداد ← الأرباح (والمعاد تقييمه يستنزف الفائض أولًا)" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "VIU mechanics examiners love: cash-flow projections over a maximum 5-year horizon unless a longer period can be justified; a growth rate for later years that does not exceed the LONG-TERM average for the market unless a higher rate is justifiable; include the working-capital effects and the overheads ALLOCATABLE to the asset's use; EXCLUDE cash inflows/outflows from financing and income taxes, and exclude future CAPEX that improves or extends (only maintenance capex enters); double-counting — the discount rate must reflect the same risk assumptions as the flows.",
        ar: "تفاصيل قيمة الاستخدام المحببة للممتحنين: توقعات لخمس سنوات كحد أقصى ما لم يبرر أطول؛ ومعدل نمو للسنوات اللاحقة لا يتجاوز المتوسط طويل الأجل للسوق؛ وتشمل أثر رأس المال العامل والتحميلات القابلة للتوزيع؛ وتستبعد تمويل وضرائب الدخل والإنفاق الرأسمالي المحسِّن/الممدد (يدخل الرأسمالي الصياني فقط)؛ ولا ازدواجًا — فمعدل الخصم يعكس افتراضات مخاطر التدفقات ذاتها.",
      },
    },
    { kind: "h", text: { en: "Cash-generating units", ar: "وحدات توليد النقد" } },
    {
      kind: "p",
      text: {
        en: "When the asset's cash flows are not independent, test the SMALLEST identifiable group of assets generating largely independent cash inflows — the CGU. GOODWILL is allocated to the CGU (or group of CGUs) expected to benefit from the acquisition's synergies — never larger than an operating segment before aggregation (rebuttable). CORPORATE ASSETS (head office, a research lab) join the CGU tests on a reasonable allocation basis or are tested as a group of CGUs. The CGU must be IDENTIFIABLE: cash inflows largely independent of other assets' inflows.",
        ar: "عندما لا تكون تدفقات الأصل مستقلة تُختبر أصغر مجموعة أصول تحدد تولّد تدفقات داخلية مستقلة إلى حد كبير — وحدة توليد النقد. وتوزع الشهرة على الوحدة (أو مجموعة وحدات) المنتظر استفادتها من تآزر الاستحواذ — وبحجم لا يتجاوز قطاعًا تشغيليًا قبل التجميع (قابل للدحض). والأصول المؤسسية (المقر الرئيسي، معمل أبحاث) تنضم لاختبارات الوحدات بأساس توزيع معقول أو تختبر كمجموعة وحدات. ويشترط أن تكون تدفقات الوحدة مستقلة إلى حد كبير.",
      },
    },
    {
      kind: "journal",
      title: { en: "CGU allocation with floor rules", ar: "توزيع خسارة الوحدة بحدود" },
      rows: [
        { dr: { en: "Impairment loss — first reduce goodwill", ar: "خسارة انخفاض — تخفض الشهرة أولًا" }, cr: { en: "Goodwill", ar: "الشهرة" }, red: true },
        { dr: { en: "— then other assets pro-rata on carrying amounts", ar: "— ثم بقية الأصول بالتناسب على القيم الدفترية" }, cr: { en: "PPE / intangibles / ROU assets", ar: "ممتلكات/غير ملموسة/أصول حق استخدام" } },
        { cr: { en: "FLOOR per asset: never below the HIGHEST of FVLCD (if determinable), VIU (if determinable), and ZERO", ar: "حد لكل أصل: لا ينزل عن الأعلى من القيمة العادلة ناقص التكاليف وقيمة الاستخدام إن امكن تعيينهما والصفر" }, red: true },
        { cr: { en: "Any unallocatable loss → goodwill again (or the CGU's other assets)", ar: "ما يتعذر توزيعه يعود للشهرة (أو لبقية أصول الوحدة)" } },
      ],
    },
    {
      kind: "example",
      title: { en: "CGU impairment allocation", ar: "توزيع انخفاض وحدة" },
      lines: [
        { en: "CGU carrying: goodwill 100 · patent 200 · PPE 500 · (total 800). Recoverable amount 560 → loss 240", ar: "وحدة بقيم: شهرة ١٠٠ · براءة ٢٠٠ · ممتلكات ٥٠٠ (الإجمالي ٨٠٠). والقابل للاسترداد ٥٦٠ ← خسارة ٢٤٠" },
        { en: "Step 1: goodwill wiped: 100 → 0", ar: "الخطوة ١: تمحو الشهرة: ١٠٠ ← صفر" },
        { en: "Step 2: remaining 140 pro-rata on patent/PPE (200:500): patent −40 → 160 · PPE −100 → 400", ar: "الخطوة ٢: المتبقي ١٤٠ بالتناسب (٢٠٠:٥٠٠): البراءة −٤٠ ← ١٦٠ · الممتلكات −١٠٠ ← ٤٠٠" },
        { en: "If the patent's FVLCD were 170: the floor bites — patent stops at 170 (loss 30 only) and the excess 10 reallocates to PPE (loss 110)", ar: "لو كانت القيمة العادلة ناقص التكاليف للبراءة ١٧٠: يوقف الحدُّ البراءةَ عند ١٧٠ (خسارة ٣٠ فقط) ويحال الفارق ١٠ للممتلكات (خسارة ١١٠)" },
      ],
    },
    { kind: "h", text: { en: "The goodwill gross-up (partial NCI)", ar: "تضخيم الشهرة (الحصة غير المسيطرة الجزئية)" } },
    {
      kind: "p",
      text: {
        en: "When goodwill recognised at acquisition is only the PARENT's share (partial method), a CGU whose carrying NCI exceeds its carrying goodwill must GROSS UP both the goodwill and the NCI for the impairment test — the test must run on 100% of the goodwill. Example: goodwill carrying 80 (parent's 80% share) with the sub's NCI at 40 (20% share would imply goodwill 100 if full method) → test with grossed-up goodwill of 100. Any impairment loss is then allocated between parent and NCI per IFRS 10.",
        ar: "حين تكون الشهرة المعترف بها حصة الأم فقط (الطريقة الجزئية)، وتتجاوز الحصة غير المسيطرة الدفترية في الوحدة شهرة الوحدة الدفترية، وجب تضخيم الشهرة والحصة معًا لأجل الاختبار — إذ يختبر على ١٠٠٪ من الشهرة. مثال: شهرة دفترية ٨٠ (حصة الأم ٨٠٪) وحصة غير مسيطرة ٤٠ (حصة ٢٠٪ توحي بشهرة كاملة ١٠٠) ← يختبر بشهرة مضخمة ١٠٠. ثم توزع الخسارة بين الأم والحصة وفق IFRS 10.",
      },
    },
    { kind: "h", text: { en: "Reversals — with the goodwill wall", ar: "الرد — وجدار الشهرة" },
    },
    {
      kind: "tree",
      root: { en: "Impairment loss reversing?", ar: "هل تُرد خسارة الانخفاض؟" },
      branches: [
        {
          when: { en: "GOODWILL impairment — never reversed (the deal's economics cannot be un-proven)", ar: "انخفاض الشهرة — لا يرد أبدًا" },
          then: { en: "NO reversal — the single most-tested IAS 36 rule", ar: "لا رد — أشهر قاعدة في IAS 36", red: true },
        },
        {
          when: { en: "Other assets: reversal ONLY if the estimate change came from an actual change in the assumptions (not the unwinding of discounting)", ar: "بقية الأصول: الرد فقط إذا نشأ التقدير الجديد عن تغير فعلي في الافتراضات لا عن فك الخصم" },
          then: { en: "Reverse through P&L up to the carrying amount that WOULD have existed (net of depreciation) absent the impairment", ar: "يُرد بالأرباح حتى القيمة الدفترية التي كانت ستكون (صافي الإهلاك) لولا الانخفاض", red: true },
        },
        {
          when: { en: "Asset carried at the REVALUATION model (IAS 16/38)", ar: "أصل بنموذج إعادة التقييم (IAS 16/38)" },
          then: { en: "The reversal follows the REVALUATION rules — first the revaluation surplus, then P&L", ar: "يتبع الرد قواعد إعادة التقييم — الفائض أولًا ثم الأرباح", red: true },
        },
        {
          when: { en: "Reversal allocated to a CGU", ar: "رد موزع على وحدة" },
          then: { en: "Pro-rata on carrying amounts EXCEPT goodwill (which never rises back); same per-asset floors apply in reverse", ar: "بالتناسب على القيم الدفترية عدا الشهرة (لا ترتفع أبدًا)؛ وبالحدود ذاتها عكسيًا" },
        },
      ],
    },
    { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Impairment losses & reversals in P&L for each class of assets; the line items affected", ar: "الخسائر والردود في الأرباح لكل فئة أصول والبنود المتأثرة" },
        { en: "For each material impairment: events & circumstances; the CGU's description; the recoverable amount and WHICH measure (FVLCD/VIU); the discount rate", ar: "لكل انخفاض جوهري: الأحداث والظروف؛ وصف الوحدة؛ والمبلغ القابل للاسترداد وأي مقياس؛ ومعدل الخصم" },
        { en: "For goodwill: the carrying amount by CGU/segment; the reason the tested value exceeds carrying (headroom) and the key assumptions' sensitivity", ar: "للشهرة: القيمة الدفترية لكل وحدة/قطاع؛ وهامش الأمان وافتراضاته وحساسيته" },
        { en: "For CGUs with goodwill / indefinite-life intangibles: the way goodwill was allocated and the reason the CGU can absorb it", ar: "للوحدات ذات شهرة أو غير ملموسة غير محددة العمر: كيفية توزيع الشهرة وسبب قدرة الوحدة على استيعابها" },
        { en: "Estimation-uncertainty disclosures interact with IAS 1 (judgement + sensitivity)", ar: "التقاطع مع إفصاحات عدم تأكد التقديرات في IAS 1" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "VIU is PRE-TAX in BOTH the flows and the discount rate — the classic exam error is discounting pre-tax flows at a POST-TAX rate (or the reverse). If only a post-tax rate is observable, adjust it before using.",
        ar: "قيمة الاستخدام قبل الضريبة في التدفقات ومعدل الخصم معًا — والخطأ الكلاسيكي خصم تدفقات قبل الضريبة بمعدل بعدها (أو العكس). فإن لم يتوافر إلا معدل بعد الضريبة فعدّله أولًا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Allocation order is a fixed drill: goodwill FIRST, then the rest pro-rata with per-asset floors. Reversal order is the mirror (goodwill last/never). Write the drill on your exam plan before the numbers.",
        ar: "ترتيب التوزيع تمرين ثابت: الشهرة أولًا ثم الباقي بالتناسب مع حدود الأصول. والرد عكسه (الشهرة أخيرًا/أبدًا). اكتب التمرين في خطة الإجابة قبل الأرقام.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Corporate assets with no individual cash flows (the HQ building) are tested only as part of CGU tests — the exam hint 'head office not allocated' means it joins the smallest CGU group benefiting from it.",
        ar: "الأصول المؤسسية عديمة التدفقات المستقلة (مبنى المقر) تختبر ضمن وحدات فقط — وتلميح «المقر الرئيسي غير موزع» يعني انضمامه لأصغر مجموعة وحدات مستفيدة منه.",
      },
    },
  ],
}
