/** IFRS 8 — Operating Segments */

import type { Standard } from "../types"

export const IFRS_8: Standard = {
  code: "IFRS 8",
  title: { en: "Operating Segments", ar: "القطاعات التشغيلية" },
  topic: "specialized",
  effective: { en: "Effective 1 Jan 2009 · the management approach", ar: "سارٍ من ١ يناير ٢٠٠٩ · منهج الإدارة" },
  blocks: [
    { kind: "h", text: { en: "Objective — through the management's eyes", ar: "الهدف — بعيني الإدارة" } },
    {
      kind: "p",
      text: {
        en: "IFRS 8 discloses information through the lens management uses to run the business — the MANAGEMENT APPROACH: segment through the same eyes the CHIEF OPERATING DECISION MAKER (CODM) uses to allocate resources and judge performance. The disclosure's point: users see the business the way insiders see it — even when that cuts across legal entities or geographical borders. The standard deliberately imports the US SFAS 131 philosophy: internal reporting shapes external disclosure, because the numbers management actually steers by are the numbers users most need.",
        ar: "يفصح IFRS 8 عبر العدسة التي تدير بها الإدارة العمل — منهج الإدارة: القطاع بعيني صانع القرار التشغيلي الرئيسي (CODM) الذي يوزع الموارد ويقيم الأداء. والغاية: أن يرى المستخدمون العمل كما يراه الداخليون — ولو خالف الكيانات القانونية أو الحدود الجغرافية. واستورد المعيار عمدًا فلسفة المعيار الأمريكي: فالتقرير الداخلي يشكل الإفصاح الخارجي، لأن الأرقام التي تقود بها الإدارة هي أكثر ما يحتاجه المستخدمون.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Why it matters to users: consolidated totals bury risk. A group with a cash-cow division and a loss-making start-up can look flat overall; segment disclosure separates them so the reader can price each business's risk, judge where capital is flowing, and compare each arm against pure-play competitors. Analysts, lenders and regulators all consume segment data first for that reason — it is the closest external view to the group's internal economics.",
        ar: "لماذا يهم المستخدمين؟ الإجماليات المجمعة تدفن المخاطر. مجموعة فيها قسم رابح راسخ وآخر ناشئ خاسر قد تبدو مستوية إجمالًا؛ والإفصاح القطاعي يفصلهما ليتمكن القارئ من تسعير مخاطر كل نشاط ومعرفة وجهة رأس المال ومقارنة كل ذراع بمنافسيه المتخصصين. ولهذا يقرأ المحللون والمقرضون والجهات الرقابية بيانات القطاعات أولًا — فهي أقرب عرض خارجي لاقتصاديات المجموعة الداخلية.",
      },
    },
    { kind: "h", text: { en: "Scope — where the boundary sits", ar: "النطاق — أين تقع الحدود" } },
    {
      kind: "list",
      items: [
        { en: "Applies to ANY entity whose debt or equity instruments are traded in a public market — including entities filing financial statements for the purpose of issuing instruments in public markets", ar: "يطبق على أي منشأة تتداول أدوات دينها أو حقوق ملكيتها في سوق عام — ومن بينها من يعد قوائمه بقصد الإصدار في الأسواق العامة" },
        { en: "Non-public entities choosing IFRS statements: IFRS 8 applies unless they make the one-time election to disclose only entity-wide information (rare in practice)", ar: "المنشآت غير العامة التي تختار قوائم IFRS: يلزمها المعيار ما لم تختر إفصاح المعلومات على مستوى المنشأة فقط (نادر عمليًا)" },
        { en: "NOT about consolidation: IFRS 8 is a DISCLOSURE standard — no recognition, no measurement, no entries; it only shapes what the notes reveal", ar: "ليس معيار تجميع: IFRS 8 معيار إفصاح — لا اعتراف ولا قياس ولا قيود؛ بل يشكل ما تكشفه الملاحظات" },
        { en: "Interim reports: the segment data disclosed in a complete IAS 34 set follows IFRS 8 too (each material segment item the CODM reviews)", ar: "التقارير المرحلية: بيانات القطاعات في مجموعة IAS 34 الكاملة تتبع IFRS 8 أيضًا (كل بند جوهري يراجعه CODM)" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Exam spotting: a question that ASKS for recognition or measurement in a segment scenario is testing IFRS 10 or IFRS 3 — IFRS 8 only ever asks WHAT to disclose, HOW to identify segments, and HOW to reconcile.",
        ar: "بصمة الامتحان: السؤال الذي يطلب اعترافًا أو قياسًا في سيناريو قطاعات إنما يختبر IFRS 10 أو IFRS 3 — أما IFRS 8 فلا يسأل إلا: ماذا يُفصح، وكيف تُحدد القطاعات، وكيف تُسوى.",
      },
    },
    { kind: "h", text: { en: "The CODM — identifying the decision maker", ar: "صانع القرار — تحديد المقصود" } },
    {
      kind: "p",
      text: {
        en: "The CHIEF OPERATING DECISION MAKER is a FUNCTION, not a title: the person or group — chief executive, chief operating officer, or an executive committee — who actually allocates resources and assesses performance. Identifying the CODM decides everything downstream, because whatever internal packs the CODM receives define the segments. When authority is shared between a board and a CEO, the standard looks to who makes the day-to-day resource decisions; the governance form (one tier or two) does not by itself settle it.",
        ar: "صانع القرار التشغيلي الرئيسي وظيفة لا لقب: الشخص أو المجموعة — الرئيس التنفيذي أو مدير العمليات أو لجنة تنفيذية — التي توزع الموارد وتقيم الأداء فعلًا. وتحديد CODM يحسم كل ما بعده، لأن تقاريره الداخلية هي التي ترسم القطاعات. وعندما تنقسم السلطة بين مجلس وإدارة تنظر المعايير إلى من يتخذ قرارات الموارد اليومية؛ وشكل الحوكمة (مجلس واحد أو اثنان) لا يحسم المسألة وحده.",
      },
    },
    { kind: "h", text: { en: "Operating segment — the two-limb definition", ar: "القطاع التشغيلي — التعريف ذو الشعبتين" } },
    {
      kind: "tree",
      root: { en: "Is this an operating segment?", ar: "أهذا قطاع تشغيلي؟" },
      branches: [
        {
          when: { en: "Engages in business activities that may earn revenue & incur expenses (including interfacing with other segments)", ar: "يمارس أنشطة قد تولد إيرادًا وتحمل مصروفًا (بما فيه التعامل مع قطاعات أخرى)" },
          then: { en: "Limb 1 — a component with its own economics", ar: "الشعبة الأولى — مكون باقتصاده الخاص" },
        },
        {
          when: { en: "The CODM regularly reviews its operating results to assess performance & allocate resources", ar: "يراجع CODM نتائجه بانتظام لتقييم الأداء وتوزيع الموارد" },
          then: { en: "Limb 2 — the review test; both limbs → OPERATING SEGMENT", ar: "الشعبة الثانية — اختبار المراجعة؛ وبهما معًا ← قطاع تشغيلي", red: true },
        },
        {
          when: { en: "Start-up operations with no revenue yet — reviewed by the CODM? They qualify; entities not yet reviewed (a new acquisition not yet in CODM packs) do not", ar: "عمليات تأسيس لم تدر إيرادًا بعد — يراجعها CODM؟ تجتاز؛ وما لم يراجع (اقتناء جديد) فلا" },
          then: { en: "The review discipline decides, not the revenue line", ar: "انضباط المراجعة يحسم لا سطر الإيراد", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Vertical integration often misleads: a mine, a smelter and a retail chain inside one group look like three segments, but if the CODM reviews them as one metals business, they are one segment. Conversely a single legal entity running two unrelated divisions reviewed separately is TWO segments. The segment boundary is set by the review pattern, never by the legal wrapper or the industry label.",
        ar: "التكامل الرأسي يضلل كثيرًا: منجم ومصهر وسلسلة بيع في مجموعة واحدة تبدو ثلاثة قطاعات، لكن إن راجعها CODM كنشاط معادن واحد فهي قطاع واحد. وبالعكس: كيان قانوني واحد يدير قسمين مستقلين يُراجعان منفصلين هما قطاعان. فحد القطاع يرسمه نمط المراجعة، لا الغلاف القانوني ولا التصنيف الصناعي.",
      },
    },
    {
      kind: "note",
      text: {
        en: "A corporate headquarters or a functional activity (HR, IT) that earns no revenue and is only reviewed on cost is NOT an operating segment — it is part of the reconciliation's unallocated items.",
        ar: "المقر الرئيسي أو النشاط الوظيفي (موارد بشرية، تقنية) الذي لا يدر إيرادًا ولا يُراجع إلا تكلفةً ليس قطاعًا تشغيليًا — بل جزء من البنود غير المخصصة في التسوية.",
      },
    },
    { kind: "h", text: { en: "Aggregation — the five-similarity test", ar: "التجميع — اختبار التماثل الخمسي" } },
    {
      kind: "tree",
      root: { en: "May two operating segments be shown as one?", ar: "هل يجوز عرض قطاعين تشغيليين كواحد؟" },
      branches: [
        {
          when: { en: "Similar economic characteristics AND all five: nature of products · nature of production processes · type of customer · distribution methods · regulatory environment", ar: "خصائص اقتصادية مماثلة مع الخمسة: طبيعة المنتجات · طبيعة الإنتاج · نوع العميل · طرق التوزيع · البيئة التنظيمية" },
          then: { en: "Aggregate into ONE operating segment — BEFORE the quantitative screens", ar: "يجمعان في قطاع واحد — قبل العتبات الكمية", red: true },
        },
        {
          when: { en: "Disparate risk-and-return profiles (luxury cars vs mass-market parts) even if the products rhyme", ar: "مخاطر وعوائد متباينة (سيارات فاخرة مقابل قطع شائعة) ولو تقاربت المنتجات" },
          then: { en: "No aggregation — dissimilar economics block the merge", ar: "لا تجميع — فتباين الاقتصاد يمنع الدمج", red: true },
        },
        {
          when: { en: "Aggregation made only to dodge disclosure (two unrelated divisions combined to hide a loss-maker)", ar: "تجميع بقصد التملص من الإفصاح (دمج قسمين مستقلين لإخفاء خاسر)" },
          then: { en: "Fails the standard's purpose — reviewers and regulators challenge cosmetic aggregation", ar: "يخالف غاية المعيار — والمراجعون والجهات الرقابية يطعنون في التجميع التجميلي", red: true },
        },
      ],
    },
    {
      kind: "steps",
      items: [
        { en: "Two or more segments may be aggregated into ONE operating segment only when ALL five hold: similar economic characteristics · nature of the products · nature of the production processes · type of customer for the products · distribution methods", ar: "يجوز دمج قطاعين فأكثر عند تحقق الخمسة معًا: خصائص اقتصادية مماثلة · طبيعة المنتجات · طبيعة عمليات الإنتاج · نوع العميل · طرق التوزيع" },
        { en: "Aggregation is BEFORE the quantitative thresholds — the combined segment then passes or fails as one", ar: "التجميع قبل العتبات الكمية — فالقطاع المدمج يجتاز أو يفشل كوحدة" },
        { en: "Segments that fail the thresholds are still REPORTABLE if the CODM uses them, or if combining is needed for a 10%-coverage story", ar: "ما يفشل العتبات قد يظل معروضًا إن استخدمه CODM أو اقتضى التغطية ذلك" },
      ],
    },
    { kind: "h", text: { en: "The 10% thresholds & the 75% rule", ar: "عتبات الـ١٠٪ وقاعدة الـ٧٥٪" } },
    {
      kind: "formula",
      title: { en: "Reportable-segment screens", ar: "مغاليل القطاعات المعروضة" },
      lines: [
        { en: "A segment is reportable when ANY of: revenue ≥ 10% of total (incl. intersegment) · profit or loss ≥ 10% of the larger of combined profit/combined loss · assets ≥ 10% of total segment assets", ar: "يعرض القطاع عند تحقق أي من: إيراده ≥ ١٠٪ من الإجمالي (ومنه الداخلي) · ربحه/خسارته ≥ ١٠٪ من الأكبر من مجموع الربح/مجموع الخسارة · أصوله ≥ ١٠٪ من إجمالي الأصول" },
        { en: "75% RULE: if the external revenue of reportable segments < 75% of consolidated external revenue → identify MORE segments until 75% is reached", ar: "قاعدة ٧٥٪: إذا كان إيراد القطاعات المعروضة الخارجي أقل من ٧٥٪ من الإيراد الخارجي المجمع ← أضف قطاعات حتى بلوغها" },
        { en: "Practical cap: usually ≤ 10 reportable segments unless a longer list still serves", ar: "سقف عملي: عادة ≤ ١٠ قطاعات معروضة ما لم يفد الإطالة" },
        { en: "A segment falling below the thresholds may STAY reportable if management judges it still material", ar: "قد يبقى قطاع هبط تحت العتبة معروضًا إن رأت الإدارة جوهريته" },
        { en: "The screens are applied CONTINUOUSLY: a segment newly crossing a threshold is reported from the period the crossing is reflected in the latest reviewed numbers — with restated comparatives if the CODM structure changed", ar: "تطبق العتبات باستمرار: فالقطاع الذي يجتازها حديثًا يعرض من الفترة التي ظهر فيها العبور — مع إعادة عرض المقارنات إذا تغير هيكل CODM" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The profit screen's asymmetry is the examiner's favourite: the denominator is the LARGER of the absolute combined profit and the absolute combined loss of ALL reportable and non-reportable segments. A group of small profits with one large loss sees the loss dominate the denominator, lowering the bar — which is precisely why a small loss-making segment can suddenly qualify. Write both sums, circle the larger, then compare.",
        ar: "عدم تماثل اختبار الربح أحب فقرات المصححين: المقام هو الأكبر بين مجموع الأرباح ومجموع الخسائر بالقيمة المطلقة لجميع القطاعات. فمجموعة أرباح صغيرة مع خسارة كبيرة تجعل الخسارة تهيمن على المقام فتنخفض العتبة — ولهذا قد يفوز قطاع خاسر صغير بالعرض فجأة. اكتب المجموعين وضع دائرة على الأكبر ثم قارن.",
      },
    },
    { kind: "h", text: { en: "The measurement freedom — measure what the CODM measures", ar: "حرية القياس — قِس ما يقيسه صانع القرار" } },
    {
      kind: "p",
      text: {
        en: "Report the segment's revenue, profit/loss, assets, liabilities and other items AS THE CODM SEES THEM — even non-IFRS measures (before-tax internal numbers, allocated corporate costs, a pension surplus netting the CODM tracks). If internal numbers include non-IFRS measurement, disclose the basis of ANY reconciliation to the IFRS-consolidated totals. The measure is NOT forced into IFRS shape — the reconciliation bridges it.",
        ar: "اعرض إيراد القطاع وربحه وأصوله والتزاماته كما يراها CODM — ولو بمقاييس غير IFRS (أرقام داخلية قبل الضريبة، تحميلات مؤسسية، معاشات صافية). وإذا تضمنت أرقام داخلية قياسًا خارج المعايير فأفصح عن أسس أي تسوية مع الإجماليات المجمعة. فالقياس لا يُكره على قالب IFRS — بل تجسوره التسوية.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Consequences of the freedom: segment profit may be before tax and financing, may exclude centrally-pensioned items, and may include costs the consolidated statements capitalise. The ONLY discipline is the RECONCILIATION: every major segment total must bridge to the consolidated IFRS number, with each reconciling item (unallocated corporate costs, accounting-policy differences, eliminations) explained. No reconciliation, no compliance.",
        ar: "نتائج هذه الحرية: قد يكون ربح القطاع قبل الضريبة والتمويل، وقد يستثني بنودًا مدارة مركزيًا، وقد يتضمن تكاليف تكوّنها القوائم المجمعة. والانضباط الوحيد هو التسوية: فكل إجمالي قطاعي جوهري يجب أن يجسَر إلى رقم IFRS المجمع، مع شرح كل بند مصالِح (تكاليف مركزية غير مخصصة، فروق سياسات، استبعادات). لا تسوية فلا امتثال.",
      },
    },
    {
      kind: "journal",
      title: { en: "Inside the segment books — the entries the CODM reviews", ar: "داخل دفاتر القطاعات — القيود التي يراجعها صانع القرار" },
      rows: [
        { dr: { en: "Cash (external customer)", ar: "نقد (عميل خارجي)" }, cr: { en: "Segment A revenue — external sales", ar: "إيراد القطاع أ — مبيعات خارجية" } },
        { dr: { en: "Cash (segment B buys from A at transfer price 120)", ar: "نقد (يشتري القطاع ب من أ بسعر تحويل ١٢٠)" }, cr: { en: "Segment A intersegment revenue", ar: "إيراد أ الداخلي" }, red: true },
        { dr: { en: "Segment B expense (transfer price 120)", ar: "مصروف القطاع ب (سعر التحويل ١٢٠)" }, cr: { en: "Cash / payable to segment A", ar: "نقد / مستحق للقطاع أ" } },
        { cr: { en: "CONSOLIDATION entry (IFRS 10, not IFRS 8): eliminate the 120 intersegment sale + the 28 unrealised margin still in B's inventory — one-line elimination in the reconciliation", ar: "قيد التجميع (IFRS 10 لا IFRS 8): استبعاد البيع الداخلي ١٢٠ وهامش ٢٨ غير محقق بمخزون ب — استبعاد بسطر واحد في التسوية" }, red: true },
        { dr: { en: "Corporate costs allocated to segments (the CODM's allocation key)", ar: "تكاليف مركزية محملة للقطاعات (مفتاح تحميل CODM)" }, cr: { en: "Unallocated corporate expense (reconciling item in the notes)", ar: "مصروف مركزي غير مخصص (بند مصالِح في الملاحظات)" } },
      ],
    },
    { kind: "h", text: { en: "The segment P&L through the CODM's key", ar: "أرباح القطاع بمفتاح صانع القرار" } },
    {
      kind: "p",
      text: {
        en: "Segment revenue splits into external (third-party customers) and intersegment (sales to other segments at transfer prices). Segment expense includes the intersegment cost of purchases and the allocated share of corporate overhead — but only to the extent the internal measure actually allocates it. The segment result is whatever bottom line the CODM reviews: EBIT, contribution margin, or an internal net income; the notes must name the measure and its basis.",
        ar: "ينقسم إيراد القطاع إلى خارجي (عملاء أطراف خارجية) وداخلي (مبيعات لقطاعات أخرى بأسعار تحويل). ويشمل مصروف القطاع كلفة المشتريات الداخلية ونصيبه المحمَّل من المصروفات المركزية — بقدر ما يخصصها المقياس الداخلي فعلًا. ونتيجة القطاع هي أي خط نهائي يراجعه CODM: الربح قبل الفوائد والضرائب أو هامش المساهمة أو صافي ربح داخلي؛ وعلى الملاحظات تسمية المقياس وأساسه.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Segment assets are those the CODM reviews for that segment — excluding income-tax assets and generally the pension surplus; corporate assets reviewed only group-wide stay unallocated. Segment liabilities mirror the logic: they are obligations the CODM attributes to the segment, excluding income-tax and pension liabilities, and many groups review liabilities only at group level — in which case a nil split is disclosed rather than invented.",
        ar: "أصول القطاع هي ما يراجعه CODM لذلك القطاع — مستبعدة أصول الضريبة وفائض المعاشات غالبًا؛ والأصول المركزية التي تراجع على مستوى المجموعة تبقى غير مخصصة. والتزامات القطاع بالمنطق نفسه: التزامات ينسبها صانع القرار للقطاع، مستبعدة ضريبة الدخل والمعاشات، وكثير من المجموعات تراجع الالتزامات على مستوى المجموعة فقط — وعندئذ يفصح عن انعدام التوزيع ولا يُختلق.",
      },
    },
    { kind: "h", text: { en: "Required disclosures", ar: "الإفصاحات المطلوبة" } },
    {
      kind: "list",
      items: [
        { en: "General: the factors used to identify segments (products, geography, regulation) + the measurement basis of segment P/L", ar: "عام: عوامل تحديد القطاعات (منتجات، جغرافيا، تنظيم) وأساس قياس الربح" },
        { en: "For EACH reportable segment: revenue (external + intersegment), the profit/loss measure, assets, liabilities, non-cash expenses, interest revenue/expense, depreciation & amortisation, material segment items the CODM regularly reviews, income tax", ar: "لكل قطاع معروض: الإيراد (خارجي وداخلي)، ومقياس الربح، والأصول والالتزامات، وغير النقدي، والفوائد، والإهلاك والاستنفاد، والبنود الجوهرية التي يراجعها CODM، والضريبة" },
        { en: "Reconciliations: segment revenue/profit/assets/liabilities to the consolidated IFRS totals", ar: "التسويات: إلى الإجماليات المجمعة وفق IFRS" },
        { en: "ENTITY-WIDE (even with one segment): products & services revenue · geography (revenue & non-current assets by country) · dependence on any single customer ≥ 10% of revenue", ar: "على مستوى المنشأة (ولو بقطاع واحد): إيراد المنتجات والخدمات · الجغرافيا (الإيراد والأصول غير المتداولة بالدول) · الاعتماد على عميل واحد ≥ ١٠٪ من الإيراد" },
        { en: "Products & services: the revenue split even when the split cuts across segments — a segment may sell several product lines; disclose by product unless impracticable", ar: "المنتجات والخدمات: توزيع الإيراد ولو عبر القطاعات — فالقطاع قد يبيع خطوطًا متعددة؛ أفصح بالمنتج إلا إذا تعذر" },
        { en: "Geography: revenue attributed to the country of the CUSTOMER and non-current assets attributed to the country of the ASSET — disclose the country of domicile plus all individually material countries", ar: "الجغرافيا: الإيراد ينسب لبلد العميل والأصول غير المتداولة لبلد الأصل — أفصح عن بلد المقر وكل بلد جوهري منفردًا" },
        { en: "Changes: a change in the CODM's internal structure that changes segment composition → restate comparatives and disclose", ar: "التغيرات: تغير هيكل المراجعة الداخلية يغير تركيبة القطاعات ← أعد عرض المقارنات وأفصح" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "The 10% customer disclosure names NO customer — only the fact, the amount, and the segment(s) earning it. Naming the customer breaches confidentiality and earns nothing.",
        ar: "إفصاح العميل ذي الـ١٠٪ لا يسمي العميل — بل الحقيقة والمبلغ والقطاع/القطاعات صاحبة الإيراد. تسمية العميل خرق للسرية ولا يكسب درجة.",
      },
    },
    {
      kind: "example",
      title: { en: "A threshold walk", ar: "جولة على العتبات" },
      lines: [
        { en: "Segments (external revenue / total revenue / profit): A 300 / 500 / 40 · B 150 / 160 / 20 · C 40 / 45 / −30 (loss) · D 10 / 12 / 5", ar: "قطاعات (إيراد خارجي/إجمالي/ربح): أ ٣٠٠/٥٠٠/٤٠ · ب ١٥٠/١٦٠/٢٠ · ج ٤٠/٤٥/٣٠− خسارة · د ١٠/١٢/٥" },
        { en: "Total external revenue = 500 → 10% = 50: A (300) ✓, B (150) ✓, C (40) ✗ on revenue", ar: "الإيراد الخارجي ٥٠٠ ← عتبة ٥٠: أ ✓ ب ✓ ج ✗ بالإيراد" },
        { en: "Profit screen: |40| + |20| + |−30| + |5| = 95 → 10% = 9.5: C's loss 30 ≥ 9.5 ✓ → C is REPORTABLE via the loss test", ar: "اختبار الربح: مجموع القيم المطلقة ٩٥ ← ٩٫٥: خسارة ج ٣٠ ≥ ٩٫٥ ← ج معروض عبر اختبار الخسارة" },
        { en: "75% rule: reportable external revenue = 300 + 150 + 40 = 490 ≥ 375 ✓ — no further segments needed; D stays internal", ar: "قاعدة ٧٥٪: معروض خارجي ٤٩٠ ≥ ٣٧٥ ✓ — ولا حاجة لمزيد؛ ويبقى د داخليًا" },
      ],
    },
    {
      kind: "example",
      title: { en: "Reconciliation — bridging the internal to the IFRS totals", ar: "التسوية — جسر الأرقام الداخلية إلى إجماليات IFRS" },
      lines: [
        { en: "Segment revenue: A 500 (external 300 + intersegment 200) + B 160 + C 45 + D 12 = 717", ar: "إيراد القطاعات: أ ٥٠٠ (خارجي ٣٠٠ + داخلي ٢٠٠) + ب ١٦٠ + ج ٤٥ + د ١٢ = ٧١٧" },
        { en: "Less intersegment eliminations −217 (incl. A→B 120, A→C 80, A→D 17) → combined external 500", ar: "ناقص استبعادات داخلية ٢١٧− (منها أ→ب ١٢٠، أ→ج ٨٠، أ→د ١٧) ← الخارجي المجمع ٥٠٠" },
        { en: "Segment profit: 40 + 20 − 30 + 5 = 35 → + policy difference (capitalised development IFRS 6 the internal pack expenses) +12 → − unallocated corporate governance −6 → consolidated PBT 41", ar: "أرباح القطاعات ٣٥ + فرق سياسة (تطوير مكوَّن يُحمَّل داخليًا) ١٢ − حوكمة مركزية غير مخصصة ٦ ← الربح المجمع قبل الضريبة ٤١" },
        { en: "Every reconciling item is NAMED: eliminations, policy differences, unallocated items — the three standard bridges in any IFRS 8 note", ar: "كل بند مصالِح يسمى: استبعادات وفروق سياسات وبنود غير مخصصة — والجسور الثلاثة المعتادة في أي إفصاح IFRS 8" },
      ],
    },
    { kind: "h", text: { en: "Interim segment disclosure (IAS 34 pairing)", ar: "الإفصاح القطاعي المرحلي (اقتران IAS 34)" } },
    {
      kind: "p",
      text: {
        en: "In a complete interim report the entity discloses, since the beginning of the annual period: segment revenue and segment profit/loss (and segment assets & liabilities if the CODM reviews them at interim dates), plus every material change in segment composition or measurement since the last annual report. The condensed interim note is deliberately lighter than the annual one — but never silent: the reader must be able to track each segment's year as it unfolds.",
        ar: "في التقرير المرحلي الكامل تفصح المنشأة، منذ بداية السنة المالية: عن إيراد القطاع وربحه/خسارته (وأصوله والتزاماته إن راجعها CODM في المواعيد المرحلية)، وكل تغيير جوهري في تركيبة القطاعات أو قياسها منذ التقرير السنوي الأخير. والملاحظة المرحلية المختصرة أخف من السنوية عمدًا — لكنها لا تصمت أبدًا: إذ يجب أن يتتبع القارئ سنة كل قطاع وهي تتكشف.",
      },
    },
    { kind: "h", text: { en: "Transition, comparatives & interactions", ar: "الانتقال والمقارنات والتقاطعات" } },
    {
      kind: "list",
      items: [
        { en: "Comparatives are RESTATED whenever the internal structure changes so segment data stays comparable — unless impracticable, in which case disclose that fact", ar: "تعاد المقارنات كلما تغير الهيكل الداخلي ليبقى البيان قابلاً للمقارنة — إلا إذا تعذر فيفصح عن ذلك" },
        { en: "IFRS 10 ↔ IFRS 8: consolidation eliminates intersegment sales; segment disclosure explains where they sat — the two notes always tie", ar: "IFRS 10 ↔ IFRS 8: التجميع يستبعد المبيعات الداخلية والإفصاح القطاعي يبين موضعها — والملاحظتان تتطابقان دائمًا" },
        { en: "IFRS 12 ↔ IFRS 8: interests in other entities (a subsidiary inside a segment, an associate cross-cutting two segments) get their own IFRS 12 note even when hidden in segment aggregates", ar: "IFRS 12 ↔ IFRS 8: المصالح في كيانات أخرى (تابعة داخل قطاع، زميلة تقطع قطاعين) لها ملاحظة IFRS 12 خاصة ولو اختفت في الإجماليات القطاعية" },
        { en: "IAS 34 ↔ IFRS 8: complete interim reports carry the condensed segment pack", ar: "IAS 34 ↔ IFRS 8: التقارير المرحلية الكاملة تحمل الحزمة القطاعية المختصرة" },
        { en: "Impairment ↔ IFRS 8: IAS 36 CGUs often MIRROR reportable segments — a segment-level impairment discussion belongs in the segment note's context", ar: "الانخفاض ↔ IFRS 8: وحدات توليد النقد كثيرًا تعكس القطاعات المعروضة — ونقاش الانخفاض على مستوى القطاع سياق طبيعي لملاحظة القطاعات" },
      ],
    },
    { kind: "h", text: { en: "The screening flow — from operating segments to the printed note", ar: "مسار الفرز — من القطاعات التشغيلية إلى الملاحظة المطبوعة" } },
    {
      kind: "tree",
      root: { en: "Which operating segments reach the face of the note?", ar: "أي القطاعات التشغيلية تبلغ وجه الملاحظة؟" },
      branches: [
        {
          when: { en: "Passes any 10% screen (revenue · profit/loss · assets)", ar: "يجتاز أي عتبة ١٠٪ (إيراد · ربح/خسارة · أصول)" },
          then: { en: "Reportable — disclose it in full", ar: "معروض — أفصح عنه كاملًا", red: true },
        },
        {
          when: { en: "Fails the screens but the CODM uses its numbers, or combining helps reach the 75% coverage", ar: "يفشل العتبات لكن CODM يستخدم أرقامه أو يساعد الدمج في بلوغ تغطية ٧٥٪" },
          then: { en: "May still be reported (management judgement — disclose the judgement)", ar: "يجوز عرضه (حكم الإدارة — أفصح عن الحكم)", red: true },
        },
        {
          when: { en: "Below the screens and immaterial — stays internal; its numbers fold into the reconciliation", ar: "تحت العتبات وغير جوهري — يبقى داخليًا؛ وتنطوي أرقامه في التسوية" },
          then: { en: "Not reported separately — but still inside the reconciling bridge", ar: "لا يعرض منفصلًا — لكنه يبقى داخل جسر التسوية", red: true },
        },
        {
          when: { en: "Reportable external revenue < 75% of consolidated external revenue after the first pass", ar: "إيراد المعروضين الخارجي أقل من ٧٥٪ من المجمع بعد الجولة الأولى" },
          then: { en: "Identify additional segments (even below-threshold ones) until 75% is covered", ar: "حدد قطاعات إضافية (ولو تحت العتبة) حتى تغطى الـ٧٥٪", red: true },
        },
      ],
    },
    {
      kind: "journal",
      title: { en: "A structure change — restating the comparatives", ar: "تغير الهيكل — إعادة عرض المقارنات" },
      rows: [
        { dr: { en: "New segment (merged divisions) — opening segment assets 900", ar: "القطاع الجديد (أقسام مدمجة) — أصول افتتاحية ٩٠٠" }, cr: { en: "Old segment X 520 + old segment Y 380 (restated comparatives)", ar: "القطاع القديم س ٥٢٠ + ص ٣٨٠ (مقارنات معاد عرضها)" }, red: true },
        { cr: { en: "NO accounting entry — IFRS 8 restatement is a DISCLOSURE reallocation: the consolidated totals never move, only the segment columns do", ar: "لا قيد محاسبي — إعادة عرض IFRS 8 إعادة توزيع إفصاحية: الإجماليات المجمعة لا تتحرك، بل أعمدة القطاعات وحدها" }, red: true },
        { dr: { en: "Disclosure note: nature of the change, the reason, and the fact comparatives were restated (or why impracticable)", ar: "ملاحظة الإفصاح: طبيعة التغير وسببه وحقيقة إعادة عرض المقارنات (أو سبب تعذرها)" }, cr: { en: "IFRS 8's transparency demand", ar: "مطلب الشفافية في IFRS 8" } },
      ],
    },
    {
      kind: "list",
      items: [
        { en: "The segment note's typical order: identification factors → the measurement basis → the per-segment tables → reconciliations → entity-wide disclosures — follow it in long-form answers", ar: "ترتيب ملاحظة القطاعات المعتاد: عوامل التحديد ← أساس القياس ← جداول القطاعات ← التسويات ← إفصاحات مستوى المنشأة — اتبعه في الأجوبة المقالية" },
        { en: "Disclosure of the CODM's title/function and how the CODM uses the measures in allocating resources is required context — one clear paragraph earns the presentation marks", ar: "الإفصاح عن وظيفة صانع القرار وكيفية استخدامه المقاييس في توزيع الموارد سياق واجب — وفقرة واضحة واحدة تكسب درجات العرض" },
        { en: "Non-IFRS measures need their nature explained (an internal EBIT excluding a pension netting, say) plus the reconciliation — never present the internal measure bare", ar: "المقاييس غير المتوافقة مع IFRS تحتاج شرح طبيعتها (ربح داخلي يستثني معاشات مثلًا) مع التسوية — ولا تعرض المقياس الداخلي عاريًا أبدًا" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "When segments are defined by REGULATED geography (a telecom licence per country, a bank branch per jurisdiction), the regulated environment itself is one of the identification factors and belongs in the note's opening paragraph. Regulated and unregulated operations inside one group are usually shown as separate segments because their risk-return profiles diverge — the regulator caps one and the market prices the other, and the CODM steers them with different measures.",
        ar: "حين تتحدد القطاعات بجغرافيا منظّمة (ترخيص اتصالات لكل بلد، فرع بنك لكل نطاق قضائي) فالبيئة التنظيمية ذاتها أحد عوامل التحديد وتنتمي لفقرة الملاحظة الافتتاحية. وعادة تعرض الأنشطة المنظمة وغير المنظمة في مجموعة واحدة قطاعات منفصلة لتباعد مخاطرها وعوائدها — فالمنظم يسقف أحدهما والسوق يسعّر الآخر، وصانع القرار يقودهما بمقاييس مختلفة.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Practical exam craft: the moment a scenario names an internal reporting structure — 'the executive committee receives packs for Retail, Wholesale and Financing' — mark the segments immediately, then test them against the three 10% screens, then run the 75% rule, then list the entity-wide trio (products, geography, major customer). That four-step rhythm answers every IFRS 8 requirement in order and misses nothing.",
        ar: "حِرفة الامتحان العملية: بمجرد أن يسمي السيناريو هيكلًا داخليًا — «اللجنة التنفيذية تتلقى تقارير التجزئة والجملة والتمويل» — حدد القطاعات فورًا ثم اختبرها على عتبات ١٠٪ الثلاث ثم طبق قاعدة ٧٥٪ ثم اذكر ثلاثية مستوى المنشأة (منتجات، جغرافيا، عميل رئيسي). هذا الإيقاع الرباعي يجيب كل متطلبات IFRS 8 بالترتيب ولا يفلت شيء.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Aggregation is judged BEFORE the screens, never after: merging two small segments into one that passes a 10% test is legitimate ONLY if the five-similarity test genuinely holds — examiners plant dissimilar pairs to catch mechanical merging.",
        ar: "يحكم على التجميع قبل العتبات لا بعدها: دمج قطاعين صغيرين في واحد يجتاز عتبة ١٠٪ سليم فقط إذا صدق اختبار التماثل الخمسي — والمصححون يزرعون زوجين متباينين لإمساك الدمج الميكانيكي.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The loss-test asymmetry: a loss-making segment is screened against the larger of combined profits and combined LOSSES (absolute) — candidates who use the profit total alone miss the threshold; write both sums, then the larger.",
        ar: "عدم تماثل اختبار الخسارة: يقاس القطاع الخاسر بالأكبر من مجموعي الأرباح والخسائر (بالقيمة المطلقة) — ومن يستخدم مجموع الأرباح وحده تخطاه العتبة؛ اكتب المجموعين ثم خذ الأكبر.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The management approach is the answer to every 'why?' in IFRS 8: the segment is what the CODM reviews — the legal entity, the subsidiary, the division labels are irrelevant. Say 'CODM' in every paragraph.",
        ar: "منهج الإدارة جواب كل «لماذا؟» في IFRS 8: القطاع ما يراجعه CODM — والكيان القانوني والتابعة والقطاعات الإدارية كلها لا تعني شيئًا. اذكر CODM في كل فقرة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Geography attribution trips two ways: revenue follows the CUSTOMER's country, non-current assets follow the ASSET's country — mixing the two bases in one table is the classic slip; keep two columns and label them.",
        ar: "الإسناد الجغرافي يعثر مرتين: الإيراد يتبع بلد العميل والأصول غير المتداولة تتبع بلد الأصل — وخلط الأساسين في جدول واحد هي الزلة الكلاسيكية؛ اعمل عمودين وسمِّهما.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Entity-wide disclosures apply EVEN WITH a single reportable segment — forgetting them is the classic practical slip.",
        ar: "إفصاحات «على مستوى المنشأة» تلزم ولو كان للكيان قطاع واحد فقط — ونسيانها أشهر زلة عملية.",
      },
    },
    {
      kind: "note",
      text: {
        en: "IFRS 8 does not define segment 'cash flows' as required — many groups disclose it voluntarily when the CODM reviews it; do not manufacture the line in an exam answer unless the scenario says the CODM sees it.",
        ar: "لا يطلب IFRS 8 قائمة «تدفقات نقدية» قطاعية — وكثير من المجموعات تفصح عنها طوعًا إن راجعها صانع القرار؛ فلا تخترع السطر في جواب الامتحان ما لم يقل السيناريو إن CODM يراه.",
      },
    },
  ],
}
