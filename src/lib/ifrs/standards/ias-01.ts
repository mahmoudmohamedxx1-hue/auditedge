/** IAS 1 — Presentation of Financial Statements */

import type { Standard } from "../types"

export const IAS_1: Standard = {
  code: "IAS 1",
  title: { en: "Presentation of Financial Statements", ar: "عرض القوائم المالية" },
  topic: "presentation",
  effective: { en: "Effective 1 Jan 2010 · revised for IFRS 18 (see note)", ar: "سارٍ من ١ يناير ٢٠١٠ · معدل لحساب IFRS 18 (انظر الملاحظة)" },
  blocks: [
    { kind: "h", text: { en: "Objective — the complete set", ar: "الهدف — المجموعة الكاملة" } },
    {
      kind: "p",
      text: {
        en: "IAS 1 is the FRAME of the whole IFRS system: it prescribes the basis for presentation of general purpose financial statements so that an entity's statements are comparable with its own prior periods and with other entities'. It fixes the required components, embeds the going-concern and accrual foundations, dictates the structure of every statement, and owns the core disclosures of the notes. It applies to ALL entities applying IFRS — companies, groups, banks, investment funds — and to every set of financial statements, individual or consolidated.",
        ar: "IAS 1 هو الهيكل الحاكم للمنظومة بأكملها: يحدد أساس عرض القوائم المالية للأغراض العامة بحيث تكون قوائم المنشأة قابلة للمقارنة بفتراتها السابقة وبقوائم غيرها من المنشآت. فهو يثبّت المكونات الواجبة، ويُرسّخ أساسَي الاستمرارية والاستحقاق، ويضبط هيكل كل قائمة، ويملك الإفصاحات الأساسية للإيضاحات. ويطبق على كل منشأة تطبق IFRS — شركةً كانت أو مجموعةً أو بنكًا أو صندوق استثمار — وعلى كل مجموعة قوائم، مستقلةً كانت أو مجمعة.",
      },
    },
    {
      kind: "p",
      text: {
        en: "A complete set is a package whose components INTERLOCK: the movements on the balance sheet appear in the statement of changes in equity, the accrual profit reconciles to cash in the IAS 7 statement, and the notes unpack every judgement behind the numbers. An entity cannot drop a component, cannot demote a primary statement into the notes, and cannot defer comparative information — the set is complete or it is not IFRS.",
        ar: "المجموعة الكاملة حزمة تتشابك مكوناتها: حركات قائمة المركز المالي تظهر في قائمة التغيرات في حقوق الملكية، وربح الاستحقاق يجري تسويته إلى النقد في قائمة IAS 7، والإيضاحات تشرح كل حكم مهني وراء الأرقام. فلا يجوز إسقاط مكوّن، ولا إنزال قائمة أولية إلى الإيضاحات، ولا تأجيل معلومات المقارنة — فالمجموعة إما كاملة وإما فليست IFRS.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "(1) a statement of FINANCIAL POSITION as at the end of the period", ar: "(١) قائمة مركز مالي كما في نهاية الفترة" },
        { en: "(2) PROFIT OR LOSS AND OTHER COMPREHENSIVE INCOME for the period — one statement, or a P/L statement followed by an OCI statement that OPENS with profit or loss", ar: "(٢) الأرباح أو الخسائر والدخل الشامل الآخر عن الفترة — بقائمة واحدة أو بقائمتين تبدأ الثانية بالربح أو الخسارة" },
        { en: "(3) a statement of CHANGES IN EQUITY for the period", ar: "(٣) قائمة التغيرات في حقوق الملكية عن الفترة" },
        { en: "(4) a statement of CASH FLOWS for the period (IAS 7)", ar: "(٤) قائمة التدفقات النقدية عن الفترة (IAS 7)" },
        { en: "(5) NOTES — material accounting policy information and other explanatory information", ar: "(٥) الإيضاحات — معلومات السياسات المحاسبية الهامة والمعلومات التفسيرية الأخرى" },
        { en: "(6) COMPARATIVE information for the preceding period — plus a THIRD statement of financial position when a retrospective change requires it (IAS 1.40)", ar: "(٦) معلومات مقارنة عن الفترة السابقة — مع قائمة مركز مالي ثالثة عند اللزوم (IAS 1.40)" },
        { en: "(7) a first-time adopter also presents the corresponding IFRS statements of the PREVIOUS period", ar: "(٧) ويعرض المتبني الأول كذلك القوائم المقابلة للفترة السابقة وفق IFRS" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Fair presentation + COMPLIANCE disclosure: statements comply with IFRS only if they comply with EVERY applicable Standard — an explicit statement of compliance with IFRS is required in the notes.",
        ar: "العرض العادل + إفصاح الالتزام: لا تُعد القوائم متوافقة إلا إذا التزمت بكل معيار قابل للتطبيق — مع إقرار صريح بالالتزام مع معايير IFRS في الإيضاحات.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Fair presentation is DEEMED, not judged case by case: statements that comply with every applicable Standard are presumed to present fairly. Only where management concludes that compliance would be SO misleading that it conflicts with the objective of financial statements may it depart — and then it discloses the departure, the reasons, and the treatment IFRS would have required. In practice the door is almost never opened; \"fair presentation\" is never a licence to override a Standard.",
        ar: "العرض العادل مفترض لا يقدَّر حالة بحالة: القوائم الملتزمة بكل معيار قابل للتطبيق يفترض فيها العرض العادل. ولا يجوز الحياد عنها إلا إذا خلصت الإدارة إلى أن الالتزام سيكون مضللًا إلى حد يتعارض مع هدف القوائم المالية — وعندئذ تفصح عن الحياد وأسبابه والمعالجة التي كان IFRS يقضي بها. وعمليًا يكاد هذا الباب لا يُفتح؛ فالعرض العادل ليس أبدًا رخصة لتجاوز معيار.",
      },
    },
    { kind: "h", text: { en: "Going concern", ar: "الاستمرارية" } },
    {
      kind: "p",
      text: {
        en: "Prepare the statements on a GOING-CONCERN basis unless management intends to liquidate or cease trading, or has no realistic alternative but to do so. The assessment looks at least TWELVE MONTHS from the reporting date (the operating cycle if longer), using budgets, cash-flow forecasts, covenant headroom and financing commitments. A feasible management plan supports the basis ONLY if management can realistically deliver it. If a material uncertainty exists but is adequately disclosed, keep the basis and flag the uncertainty PROMINENTLY; if the basis is not going concern, disclose that fact, the basis used and the reason — IAS 1 does not prescribe the break-up mechanics, but it demands honesty about which basis was used.",
        ar: "تُعد القوائم على أساس الاستمرارية ما لم تنوِ الإدارة التصفية أو التوقف أو ينتفِ البديل الواقعي لذلك. والتقييم يغطي اثني عشر شهرًا على الأقل من تاريخ التقرير (أو الدورة التشغيلية إن كانت أطول)، مستندًا إلى الموازنات وتوقعات التدفق وحدود أمان التعهدات والتزامات التمويل. وخطة الإدارة لا تدعم الأساس إلا إذا كانت قابلة للتنفيذ فعلًا. وإذا وُجد عدم تأكد جوهري مُفصح عنه بما يكفي فيبقى الأساس مع الإبراز الواضح لعدم التأكد؛ وإذا لم يكن الأساس الاستمرارية فيفصح عن ذلك والأساس المتبع وسببه — فـ IAS 1 لا يفرض قواعد التصفية لكنه يشترط الصدق بشأن الأساس المستخدم.",
      },
    },
    {
      kind: "steps",
      items: [
        { en: "Assess management's INTENTION and the entity's ABILITY to continue for at least 12 months from the reporting date", ar: "قيّم نية الإدارة وقدرة المنشأة على الاستمرار اثني عشر شهرًا على الأقل من تاريخ التقرير" },
        { en: "Consider ALL available information — financial forecasts, liquidity, covenant compliance, financing commitments", ar: "ضع في الحسبان كل المعلومات المتاحة — التوقعات المالية، السيولة، الالتزام بالتعهدات، التزامات التمويل" },
        { en: "Weight management plans only if they can be EXECUTED in the time available", ar: "لا تَعتد بخطط الإدارة إلا إذا كانت قابلة للتنفيذ فعلًا في الوقت المتاح" },
        { en: "Material uncertainty? Keep the basis and DISCLOSE it prominently — with the evidence supporting the plans", ar: "عدم تأكد جوهري؟ أبقِ الأساس وأفصح عنه بشكل بارز — مع الأدلة المؤيدة للخطط" },
        { en: "Basis falls? State the basis used, why, and the resources available for the wind-down", ar: "سقط الأساس؟ بيّن الأساس المتبع وسببه والموارد المتاحة للتوقف" },
      ],
    },
    {
      kind: "tree",
      title: { en: "Going concern — the basis decision", ar: "الاستمرارية — قرار الأساس" },
      root: { en: "Is the going-concern basis appropriate?", ar: "هل أساس الاستمرارية ملائم؟" },
      branches: [
        {
          when: { en: "Management intends to liquidate or cease trading, or has no realistic alternative", ar: "تنوي الإدارة التصفية أو التوقف أو ينتفي البديل الواقعي" },
          then: { en: "DO NOT use going concern — disclose the basis actually used and the reason", ar: "لا تستخدم أساس الاستمرارية — وأفصح عن الأساس المتبع فعليًا وسببه", red: true },
        },
        {
          when: { en: "Material uncertainty, but viable management plans exist", ar: "عدم تأكد جوهري مع وجود خطط إدارة قابلة للتطبيق" },
          then: { en: "KEEP going concern + disclose the uncertainty PROMINENTLY (nature, evidence, plans)", ar: "أبقِ أساس الاستمرارية وأفصح عن عدم التأكد بشكل بارز (طبيعته وأدلته والخطط)", red: true },
        },
        {
          when: { en: "The threat only arises from an event AFTER the reporting date", ar: "التهديد لا ينشأ إلا عن حدث لاحق لتاريخ التقرير" },
          then: { en: "IAS 10 territory: disclose; the basis itself falls only when the conditions destroy it", ar: "منطقة IAS 10: أفصح؛ ولا يسقط الأساس إلا إذا قوّضت الظروف وجوده" },
        },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The going-concern window runs AT LEAST 12 months from the reporting date — not merely to the next reporting date. Pair the standard with IAS 10: a post-date deterioration can still break the basis (IAS 10.14), while a pre-date uncertainty must be disclosed prominently even if it eases before authorisation.",
        ar: "نافذة الاستمرارية تمتد اثني عشر شهرًا على الأقل من تاريخ التقرير — لا إلى تاريخ التقرير التالي فحسب. واقرن المعيار بـ IAS 10: فقد يقوّض تدهورٌ لاحقٌ الأساس نفسه، أما عدم التأكد القائم بتاريخ التقرير فيفصح عنه ببروز حتى لو زال قبل الاعتماد.",
      },
    },
    { kind: "h", text: { en: "Core concepts driving presentation", ar: "المفاهيم الحاكمة للعرض" } },
    {
      kind: "list",
      items: [
        { en: "ACCRUAL BASIS for everything except the cash-flow statement", ar: "أساس الاستحقاق لكل القوائم عدا قائمة التدفقات النقدية" },
        { en: "MATERIALITY & AGGREGATION — group similar items, separate dissimilar material items", ar: "الأهمية والتجميع — تُجمَّع البنود المتماثلة وتُفصل المختلفة الجوهرية" },
        { en: "OFFSETTING PROHIBITED between assets & liabilities and income & expenses unless another Standard requires or permits it", ar: "تُحظر المقاصة بين الأصول والالتزامات وبين الإيرادات والمصروفات إلا إذا أوجبها معيار أو أجازها" },
        { en: "FREQUENCY — at least annually; a shorter period is NOT allowed as the 'annual' statements", ar: "دورية التقارير — سنويًا على الأقل؛ ولا يجوز عرض فترة أقصر بوصفها قوائم سنوية" },
        { en: "COMPARATIVES for all narrative and numerical information, and CONSISTENCY of presentation between periods", ar: "معلومات مقارنة لكل البيانات الوصفية والرقمية مع ثبات العرض بين الفترات" },
        { en: "EXPENSE ANALYSIS by nature or by function — whichever is chosen, disclose it", ar: "تحليل المصروفات بالطبيعة أو الوظيفة — مع الإفصاح عما اختير" },
      ],
    },
    { kind: "h", text: { en: "Materiality & aggregation", ar: "الأهمية والتجميع" } },
    {
      kind: "p",
      text: {
        en: "Materiality is ENTITY-SPECIFIC: information is material if omitting, misstating or OBSCURING it could reasonably be expected to influence the decisions of the primary users (the 2020 definition aligned with the Conceptual Framework). Aggregation is its working partner: items of a dissimilar nature or function are separated when material, and a line item that matters but is not on the prescribed face list still appears — either as its own line or split out in the notes. The quantitatively small can be material by NATURE: a related-party sale, an illegal payment, a fraud. Materiality is never a rounding exercise.",
        ar: "الأهمية خاصة بالمنشأة: تكون المعلومات هامة إذا كان حذفها أو خطؤها أو التعتيم عليها قادرًا عمليًا على التأثير في قرارات المستخدمين الأساسيين (تعريف ٢٠٢٠ المتوافق مع الإطار المفاهيمي). والتجميع رديفها العملي: تُفصل البنود المختلفة طبيعةً أو وظيفةً إذا كانت جوهرية، والبند الجوهري غير الوارد في قائمة البنود الدنيا يُعرض على أي حال — سطرًا مستقلًا أو تفصيلًا في الإيضاحات. والصغير كمًّا قد يكون جوهريًا طبيعةً: بيع لطرف ذي علاقة، دفعة غير مشروعة، تدليس. فالأهمية ليست أبدًا عملية تقريب حسابي.",
      },
    },
    {
      kind: "p",
      text: {
        en: "OFFSET IS A FOUR-LETTER WORD: assets and liabilities, and income and expenses, are presented separately because netting hides the substance of what happened. The exceptions are narrow and standard-driven: IAS 12 permits tax offsets (same taxation authority, intention to settle net, legal right); IAS 32 nets financial assets and liabilities ONLY with a contractual right of set-off and intention to settle net; IFRS 15 requires a single contract's asset and liability to be shown net; IFRS 9 offsets only under the IAS 32 criteria. Everything else stays gross.",
        ar: "المقاصة شبه محظورة: تُعرض الأصول والالتزامات والإيرادات والمصروفات منفصلة لأن التجميع الصافي يحجب جوهر ما حدث. والاستثناءات ضيقة ومحددة بمعاييرها: IAS 12 يجيز مقاصة أرصدة الضريبة (سلطة ضريبية واحدة، نية السداد الصافي، حق قانوني)؛ وIAS 32 يجيز مقاصة الأصول والالتزامات المالية فقط مع حق تعويض تعاقدي ونية السداد الصافي؛ وIFRS 15 يوجب عرض أصل العقد والتزامه عن العقد الواحد صافيًا؛ وIFRS 9 لا يجيز المقاصة إلا بمعايير IAS 32. وما عدا ذلك يُعرض بإجماليه.",
      },
    },
    { kind: "h", text: { en: "Current / non-current — the 12-month test", ar: "المتداول وغير المتداول — اختبار الاثني عشر شهرًا" } },
    {
      kind: "p",
      text: {
        en: "The OPERATING CYCLE is the time between acquiring assets for processing and realising them in cash or equivalents; where it is not clearly identifiable, assume 12 months. Wine, shipbuilding and construction can run cycles of years — and receivables with no stated term follow the CYCLE, not the calendar. The current/non-current split is required unless a LIQUIDITY order is more relevant (banks by nature) — in which case disclose that and present in order of liquidity.",
        ar: "الدورة التشغيلية هي المدة بين اقتناء الأصول لمعالجتها وتحقيقها نقدًا أو شبه نقد؛ وإذا تعذر تحديدها بوضوح فتُفترض اثني عشر شهرًا. فصناعة النبيذ وبناء السفن والإنشاءات قد تطول دوراتها سنين — والمدينون بلا أجل محدد يتبعون الدورة لا التقويم. والتفرقة بين المتداول وغير المتداول واجبة إلا إذا كان عرض السيولة أكثر ملاءمة (كالبنوك بطبيعتها) — وحينئذ أفصح عن ذلك واعرض بترتيب السيولة.",
      },
    },
    {
      kind: "tree",
      root: { en: "Classify an asset as CURRENT when ANY holds", ar: "يُبَّوب الأصل متداولًا عند تحقق أيٍّ مما يلي" },
      branches: [
        {
          when: { en: "Expected to be realised in the NORMAL COURSE of the operating cycle (inventory → receivable → cash)", ar: "يُتوقع تحصيله في الدورة التشغيلية المعتادة (مخزون ← مدينون ← نقد)" },
          then: { en: "CURRENT", ar: "متداول", red: true },
        },
        {
          when: { en: "Held primarily for TRADING", ar: "محتفظ به أساسًا للمتاجرة" },
          then: { en: "CURRENT", ar: "متداول", red: true },
        },
        {
          when: { en: "Expected to be realised within 12 months of the reporting date", ar: "يُتوقع تحقيقه خلال ١٢ شهرًا من تاريخ التقرير" },
          then: { en: "CURRENT", ar: "متداول", red: true },
        },
        {
          when: { en: "Cash or cash equivalent with no restriction on use (restricted cash → non-current)", ar: "نقد أو شبه نقد بلا قيود على الاستخدام (المقيد ← غير متداول)" },
          then: { en: "CURRENT", ar: "متداول", red: true },
        },
        {
          when: { en: "None of the above", ar: "لا شيء مما سبق" },
          then: { en: "NON-CURRENT — all other assets", ar: "غير متداول — ما عدا ذلك" },
        },
      ],
    },
    { kind: "h", text: { en: "Current liabilities & the covenant trap", ar: "الالتزامات المتداولة وفخ التعهدات" } },
    {
      kind: "tree",
      root: { en: "Classify a liability as CURRENT when ANY holds", ar: "يُبَّوب الالتزام متداولًا عند تحقق أيٍّ مما يلي" },
      branches: [
        {
          when: { en: "Expected to be settled in the NORMAL COURSE of the operating cycle", ar: "يُتوقع سداده في الدورة التشغيلية المعتادة" },
          then: { en: "CURRENT", ar: "متداول", red: true },
        },
        {
          when: { en: "Held for trading, or due within 12 months of the reporting date", ar: "محتفظ به للمتاجرة أو مستحق خلال ١٢ شهرًا من تاريخ التقرير" },
          then: { en: "CURRENT", ar: "متداول", red: true },
        },
        {
          when: { en: "The entity does NOT hold an UNCONDITIONAL right to defer settlement ≥ 12 months (payable on demand, covenant breached at the date)", ar: "لا تملك المنشأة حقًا غير مشروط في تأجيل السداد ١٢ شهرًا على الأقل (مستحق عند الطلب، إخلال بتعهد بتاريخ التقرير)" },
          then: { en: "CURRENT — even though maturity is years away", ar: "متداول — وإن كان الاستحقاق بعد سنين", red: true },
        },
        {
          when: { en: "An unconditional ≥12-month deferral right existed AT the reporting date", ar: "حق تأجيل غير مشروط لمدة ١٢ شهرًا على الأقل كان قائمًا بتاريخ التقرير" },
          then: { en: "NON-CURRENT", ar: "غير متداول" },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The covenant trap: a long-term loan breached AT the reporting date so that it becomes payable on demand is CURRENT — full stop. The covenant amendment effective 2024 killed the old grace: only rights that exist AT the reporting date count, so a waiver agreed AFTER that date — even one signed before the statements are authorised — no longer re-classifies the loan as non-current; it is disclosed instead. Only a pre-date refinancing or waiver that actually restores the ≥12-month unconditional right keeps the borrowing non-current.",
        ar: "فخ التعهدات: القرض طويل الأجل المخالف لتعهداته بتاريخ التقرير بحيث صار مستحق الطلب يُبَّوب متداولًا — انتهى الأمر. وتعديل التعهدات الساري من ٢٠٢٤ أنهى التسامح القديم: لا يُعتد إلا بالحقوق القائمة بتاريخ التقرير نفسه؛ فالتنازل المتفق عليه بعد التاريخ — وإن وُقّع قبل اعتماد القوائم — لا يعيد القرض إلى غير المتداول بعد الآن، بل يُفصح عنه. ولا يبقي الاقتراض غير متداول إلا إعادة تمويل أو تنازل قبل تاريخ التقرير يرد الحق غير المشروط فعليًا.",
      },
    },
    {
      kind: "journal",
      title: { en: "The covenant-breach reclass (illustrative)", ar: "إعادة تبويب إخلال التعهدات (توضيحية)" },
      rows: [
        { dr: { en: "Non-current borrowings 1,000", ar: "اقتراضات غير متداولة ١٬٠٠٠" }, cr: { en: "Current borrowings 1,000", ar: "اقتراضات متداولة ١٬٠٠٠" }, red: true },
        { cr: { en: "Presentation-only: the ledger is untouched — only the SECTION moves. Disclose the breach and the amount; a post-date waiver is disclosed too, but it does NOT flip the classification", ar: "إعادة عرض فقط: الدفاتر لم تُمس — ينتقل البند بين القسمين فحسب. أفصح عن الإخلال ومقداره؛ والتنازل اللاحق للتاريخ يفصح عنه أيضًا لكنه لا يغير التبويب" } },
      ],
    },
    {
      kind: "list",
      items: [
        { en: "DEFERRED TAX is always non-current (IAS 12) — even the portion reversing within 12 months", ar: "الضريبة المؤجلة غير متداولة دائمًا (IAS 12) — حتى الجزء المرتد خلال ١٢ شهرًا" },
        { en: "Assets held for sale sit in the CURRENT section (IFRS 5) even when non-current by nature — with their directly associated liabilities current too", ar: "الأصول المحتفظ بها للبيع تقع في القسم المتداول (IFRS 5) وإن كانت غير متداولة بطبيعتها — مع التزاماتها المرتبطة مباشرة متداولة كذلك" },
        { en: "A liability payable ON DEMAND is current unless a ≥12-month grace period existed at the reporting date", ar: "الالتزام المستحق عند الطلب متداول ما لم يكن مهلة سماح ≥ ١٢ شهرًا قائمة بتاريخ التقرير" },
        { en: "A financial guarantee liability follows the timing of the cash outflows it will trigger", ar: "التزام الضمان المالي يتبع توقيت التدفقات النقدية التي سيولدها" },
      ],
    },
    { kind: "h", text: { en: "The statement of financial position", ar: "قائمة المركز المالي" } },
    {
      kind: "list",
      items: [
        { en: "Minimum line items: PPE; investment property; intangibles; financial assets (excluding the above); investments under the EQUITY METHOD; biological assets; inventory; trade & other receivables; cash & equivalents; assets HELD FOR SALE; trade & other payables; provisions; financial liabilities (excl. above); current tax liabilities/assets; deferred tax; lease liabilities; interest-bearing borrowings; NCI within equity; issued capital & reserves attributable to owners", ar: "البنود الدنيا: ممتلكات ومعدات وآلات؛ عقارات استثمارية؛ أصول غير ملموسة؛ أصول مالية (غير ما سبق)؛ استثمارات بطريقة الحصة؛ أصول حيوية؛ مخزون؛ مدينون تجاريون وأخرى؛ نقد وما يعادله؛ أصول محتفظ بها للبيع؛ دائنون تجاريون وأخرى؛ مخصصات؛ التزامات مالية (غير ما سبق)؛ التزامات/أصول ضريبة جارية؛ ضريبة مؤجلة؛ التزامات إيجار؛ اقتراضات تحمل فائدة؛ حصص غير مسيطرة ضمن حقوق الملكية؛ رأس المال المصدر والاحتياطيات العائدة للملاك" },
        { en: "Supplementary line items, subtotals and groupings when another IFRS requires them, or when SIZE, nature or function makes them relevant", ar: "بنود وكيوف إضافية عند اشتراط معيار آخر أو عند أهمية الحجم أو الطبيعة أو الوظيفة" },
        { en: "Current/non-current split required unless a LIQUIDITY presentation is more relevant (e.g. banks) — say which is used", ar: "التفرقة متداول/غير متداول واجبة إلا إذا كان عرض السيولة أكثر ملاءمة (كالبنوك) — مع بيان المستخدم" },
        { en: "Equity = share capital, share premium, retained earnings, OCI reserves (FVOCI reserve, revaluation surplus, hedging, FX translation), treasury shares as a DEDUCTION", ar: "حقوق الملكية = رأس المال، علاوة الإصدار، الأرباح المحتجزة، احتياطيات الدخل الشامل الآخر (احتياطي FVOCI، فائض إعادة التقييم، التغطية، فروق الترجمة)، وأسهم الخزينة خفضًا" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Present a THIRD statement of financial position — as at the BEGINNING of the earliest comparative period — whenever the entity applies an accounting policy retrospectively, restates a prior-period error, or RECLASSIFIES items in its statements (an IFRS 5 held-for-sale reclassification included). The logic: without it, the users would be asked to compare against an opening balance that never existed in its restated form — the comparative balance sheet would be an orphan.",
        ar: "تُعرض قائمة مركز مالي ثالثة — كما في بداية أقدم فترة مقارنة — كلما طبقت المنشأة سياسة محاسبية بأثر رجعي، أو أعادت عرض خطأ فترة سابقة، أو أعادت تبويب بنود في قوائمها (بما فيها إعادة تبويب الأصول المحتفظ بها للبيع وفق IFRS 5). والمنطق: بدونها يُطلب من المستخدمين المقارنة برصيد افتتاحي لم يوجد قط بصورته المعاد عرضها — فتصبح الميزانية المقارنة يتيمة.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Information may sit on the FACE or in the NOTES — subclassify PPE by nature (land, buildings, machinery), inventory by class, provisions by nature", ar: "المعلومة قد تقع على وجه القائمة أو في الإيضاحات — فصّل الممتلكات بطبيعتها (أراضٍ، مبانٍ، آلات) والمخزون بفئاته والمخصصات بطبيعتها" },
        { en: "Share capital notes: shares AUTHORISED, issued and fully paid, by class, with the rights attached", ar: "إيضاحات رأس المال: الأسهم المصرح بها والمصدرة والمسددة بالكامل، بفئاتها، مع الحقوق المرتبطة بها" },
        { en: "Describe the NATURE and PURPOSE of each reserve in the notes", ar: "صف طبيعة كل احتياطي والغرض منه في الإيضاحات" },
        { en: "A revalued class of assets discloses the effective date of the revaluation (IAS 16 link)", ar: "الأصول المعاد تقييمها تفصح عن تاريخ سريان إعادة التقييم (ترابط مع IAS 16)" },
      ],
    },
    { kind: "h", text: { en: "Statement of profit or loss & OCI", ar: "قائمة الأرباح أو الخسائر والدخل الشامل الآخر" } },
    {
      kind: "p",
      text: {
        en: "One statement or two — the entity's choice: a single statement of profit or loss and OCI, or a P/L statement followed by an OCI statement that OPENS with profit or loss. The P/L face must carry: revenue; finance costs; the share of profit or loss of associates and joint ventures under the equity method; income tax expense; a single amount for discontinued operations (IFRS 5); and profit or loss. Basic and diluted EPS (IAS 33) are presented for owners of the parent.",
        ar: "قائمة واحدة أم قائمتان — خيار المنشأة: قائمة موحدة للأرباح أو الخسائر والدخل الشامل الآخر، أو قائمة أرباح تتبعها قائمة دخل شامل تبدأ بالربح أو الخسارة. ويجب أن يحمل وجه قائمة الأرباح: الإيراد؛ وتكاليف التمويل؛ ونصيب الأرباح أو الخسائر من الزميلات والمشروعات المشتركة بطريقة الحصة؛ ومصروف ضريبة الدخل؛ ومبلغًا واحدًا للعمليات المتوقفة (IFRS 5)؛ ثم الربح أو الخسارة. ويعرض ربح السهم الأساسي والمخفض (IAS 33) لملاك الشركة الأم.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Expense analysis: by NATURE (depreciation, employee benefits, raw materials used) or by FUNCTION (cost of sales, selling, distribution, administrative) — choose, apply consistently and DISCLOSE which. If the function format is used, cost of sales is presented SEPARATELY. Because the function face buries nature, the notes must still disclose depreciation, amortisation and employee benefit expense. Items of OCI are grouped into the two recycling buckets at the end of the statement.",
        ar: "تحليل المصروفات: بالطبيعة (إهلاك، مزايا العاملين، مواد مستخدمة) أو بالوظيفة (تكلفة المبيعات، بيع وتوزيع، إدارية) — اختر وطبّق بثبات وأفصح عما اخترته. وإذا استخدم صيغ الوظيفة عُرضت تكلفة المبيعات بندًا منفصلًا. ولأن صيغة الوظيفة تحجب الطبيعة، تجب الإفصاحات في الإيضاحات عن الإهلاك والاستنفاد ومصروف مزايا العاملين. وتُجمع بنود الدخل الشامل الآخر في مجموعتي إعادة التدوير في نهاية القائمة.",
      },
    },
    { kind: "h", text: { en: "OCI — the two recycling families", ar: "الدخل الشامل الآخر — عائلتا التدوير" } },
    {
      kind: "p",
      text: {
        en: "Other comprehensive income is presented in TWO columns: items that WILL be reclassified to profit or loss in later periods, and items that will NEVER be. The never-recycled family: remeasurements of defined-benefit plans (IAS 19), the equity-instrument FVOCI election (IFRS 9), own credit risk on liabilities designated at FVTPL (IFRS 9), and the share of never-recycled OCI of equity-accounted investees. The recycled family: FVOCI debt instruments (IFRS 9), cash-flow hedges, revaluation surpluses on disposal (IAS 16/38 — but the surplus moves through OCI to retained earnings, never P/L), and exchange differences on foreign operations (IAS 21 — recycled on disposal).",
        ar: "يُعرض الدخل الشامل الآخر في عمودين: ما سيعاد تصنيفه إلى الأرباح أو الخسائر لاحقًا، وما لن يعاد أبدًا. عائلة عدم التدوير: إعادة قياس خطط المزايا المحددة (IAS 19)، وخيار أدوات الملكية FVOCI (IFRS 9)، ومخاطر الائتمان الذاتي للالتزامات المصنفة بالقيمة العادلة عبر الأرباح (IFRS 9)، والحصة غير المعاد تدويرها من المستثمَر فيه بطريقة الحصة. وعائلة التدوير: أدوات الدين FVOCI (IFRS 9)، وتغطية التدفقات النقدية، وفوائض إعادة التقييم عند التخرد (IAS 16/38 — لكن الفائض ينتقل من الدخل الشامل إلى الأرباح المحتجزة ولا يمر بقائمة الأرباح أبدًا)، وفروق صرف العملات الأجنبية (IAS 21 — تعاد عند التخرد).",
      },
    },
    {
      kind: "tree",
      title: { en: "Does the OCI item recycle to P/L?", ar: "هل يعاد تدوير بند الدخل الشامل إلى قائمة الأرباح؟" },
      root: { en: "An OCI item is sitting in equity — where can it go?", ar: "بند دخل شامل في حقوق الملكية — إلى أين يمكن أن يذهب؟" },
      branches: [
        {
          when: { en: "FVOCI debt instrument (IFRS 9)", ar: "أداة دين FVOCI (IFRS 9)" },
          then: { en: "RECYCLED to P/L on disposal or impairment", ar: "يعاد تدويره إلى قائمة الأرباح عند البيع أو الانخفاض", red: true },
        },
        {
          when: { en: "FVOCI equity instrument election (IFRS 9)", ar: "أداة ملكية بخيار FVOCI (IFRS 9)" },
          then: { en: "NEVER — the whole gain sits in equity until disposal, then moves to retained earnings", ar: "أبدًا — يبقى المكسب في حقوق الملكية حتى التخرد ثم ينتقل إلى الأرباح المحتجزة", red: true },
        },
        {
          when: { en: "Defined-benefit remeasurements (IAS 19)", ar: "إعادة قياس المزايا المحددة (IAS 19)" },
          then: { en: "NEVER recycled — permanent equity", ar: "لا يعاد تدويره أبدًا — يبقى في حقوق الملكية بصفة دائمة", red: true },
        },
        {
          when: { en: "Revaluation surplus (IAS 16/38)", ar: "فائض إعادة التقييم (IAS 16/38)" },
          then: { en: "To RETAINED EARNINGS on disposal — never through P/L", ar: "إلى الأرباح المحتجزة عند التخرد — ولا يمر بقائمة الأرباح أبدًا", red: true },
        },
        {
          when: { en: "Cash-flow hedge reserve (IFRS 9)", ar: "احتياطي تغطية التدفقات (IFRS 9)" },
          then: { en: "RECYCLED when the hedged item hits P/L", ar: "يعاد تدويره عندما يؤثر البند المغطى في قائمة الأرباح", red: true },
        },
        {
          when: { en: "Exchange differences on a foreign operation (IAS 21)", ar: "فروق صرف عملية أجنبية (IAS 21)" },
          then: { en: "RECYCLED to P/L on disposal of the operation", ar: "تعاد إلى قائمة الأرباح عند التخرد من العملية", red: true },
        },
      ],
    },
    {
      kind: "example",
      title: { en: "OCI column logic (mini case)", ar: "منطق عمودي الدخل الشامل (حالة مصغرة)" },
      lines: [
        { en: "FVOCI bond: fair-value gain 40 in 2025, sold in 2026 realising a total lifetime gain 60 (40 already in OCI)", ar: "سند FVOCI: مكسب قيمة عادلة ٤٠ في ٢٠٢٥، وبِيع في ٢٠٢٦ بمكسب إجمالي ٦٠ (٤٠ منها في الدخل الشامل سابقًا)" },
        { en: "2025: OCI 40 (recycled column) · 2026 on sale: gain in P/L = 60 − 40 = 20, and MINUS 40 recycled OUT of OCI into P/L — no double count", ar: "٢٠٢٥: دخل شامل ٤٠ (عمود المعاد تدويره) · ٢٠٢٦ عند البيع: مكسب بقائمة الأرباح = ٦٠ − ٤٠ = ٢٠، ويُستبعد ٤٠ من الدخل الشامل — دون ازدواج" },
        { en: "DB remeasurement loss 100 → OCI 100 in the NEVER-recycled column; it stays in equity forever", ar: "خسارة إعادة قياس مزايا محددة ١٠٠ ← دخل شامل ١٠٠ في عمود عدم التدوير؛ وتبقى في حقوق الملكية أبدًا" },
      ],
    },
    { kind: "h", text: { en: "Statement of changes in equity", ar: "قائمة التغيرات في حقوق الملكية" } },
    {
      kind: "p",
      text: {
        en: "Present a reconciliation of each equity component — share capital, premium, each reserve, retained earnings and NCI — between opening and closing balances, separately for total comprehensive income, transactions with owners, and each retrospective application or restatement. Dividends PER SHARE and dividends declared before authorisation go to the NOTES; the statement shows the movement in retained earnings. It is the only statement that captures EVERY change in equity — nothing enters or leaves ownership unexplained.",
        ar: "تعرض القائمة تسوية لكل مكون من مكونات حقوق الملكية — رأس المال والعلاوة وكل احتياطي والأرباح المحتجزة والحصص غير المسيطرة — بين الرصيد الافتتاحي والختامي، منفصلةً للدخل الشامل الإجمالي والمعاملات مع الملاك وكل تطبيق أو إعادة عرض رجعية. وتوزيعات السهم الواحد والمقررة قبل الاعتماد تذهب إلى الإيضاحات؛ وتعرض القائمة حركة الأرباح المحتجزة. وهي القائمة الوحيدة التي تلتقط كل تغير في حقوق الملكية — فلا يدخلها شيء ولا يخرج منها دون تفسير.",
      },
    },
    {
      kind: "formula",
      title: { en: "The SOCIE engine", ar: "محرك قائمة التغيرات في حقوق الملكية" },
      lines: [
        { en: "Closing retained earnings = opening retained earnings + profit − dividends declared & recognised", ar: "الأرباح المحتجزة الختامية = الافتتاحية + الربح − التوزيعات المقررة والمعترف بها" },
        { en: "Closing owners' equity = opening + total comprehensive income + contributions by owners − distributions to owners", ar: "حقوق ملاك الختامية = الافتتاحية + الدخل الشامل الإجمالي + مساهمات الملاك − التوزيعات على الملاك" },
        { en: "NCI column = opening NCI + NCI share of TCI + NCI capital transactions (e.g. dividends paid to NCI)", ar: "عمود الحصص غير المسيطرة = الافتتاحي + نصيبها من الدخل الشامل + معاملاتها الرأسمالية (كتوزيعاتها)" },
        { en: "Retrospective changes sit on their OWN line — they adjust opening balances, not the year's performance", ar: "التغيرات الرجعية في سطر مستقل — فهي تعدل الأرصدة الافتتاحية لا أداء السنة" },
      ],
    },
    {
      kind: "example",
      title: { en: "SOCIE numbers that tie", ar: "أرقام قائمة التغيرات تتوازن" },
      lines: [
        { en: "Opening: share capital 600 · revaluation surplus 200 · retained earnings 400 · NCI 180", ar: "الافتتاحي: رأس مال ٦٠٠ · فائض إعادة تقييم ٢٠٠ · أرباح محتجزة ٤٠٠ · حصص غير مسيطرة ١٨٠" },
        { en: "During the year: profit attributable to owners 300 (NCI share 60) · dividends declared 90 (owners) + 20 (NCI) · revaluation surplus +120 · share issue 150", ar: "خلال السنة: ربح العائد على الملاك ٣٠٠ (نصيب غير المسيطرين ٦٠) · توزيعات مقررة ٩٠ (للملاك) + ٢٠ (لغير المسيطرين) · فائض إعادة تقييم ١٢٠+ · إصدار أسهم ١٥٠" },
        { en: "Closing retained earnings = 400 + 300 − 90 = 610 · closing owners' equity = 600 + 150 + 320 + 610 = 1,680", ar: "الأرباح المحتجزة الختامية = ٤٠٠ + ٣٠٠ − ٩٠ = ٦١٠ · حقوق الملاك الختامية = ٦٠٠ + ١٥٠ + ٣٢٠ + ٦١٠ = ١٬٦٨٠" },
        { en: "Closing NCI = 180 + 60 − 20 = 220 → total equity 1,680 + 220 = 1,900 — every column reconciles", ar: "الختامية للحصص غير المسيطرة = ١٨٠ + ٦٠ − ٢٠ = ٢٢٠ ← إجمالي حقوق الملكية ١٬٦٨٠ + ٢٢٠ = ١٬٩٠٠ — كل عمود يتسق" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Equity events that live in the SOCIE, not P/L", ar: "أحداث حقوق الملكية التي تعيش في قائمة التغيرات لا قائمة الأرباح" },
      rows: [
        { dr: { en: "Retained earnings 90 (in the year the dividend is DECLARED)", ar: "أرباح محتجزة ٩٠ (في سنة إقرار التوزيع)" }, cr: { en: "Dividends payable 90", ar: "توزيعات مستحقة الدفع ٩٠" }, red: true },
        { dr: { en: "Revaluation surplus 100 (on disposal of a revalued asset)", ar: "فائض إعادة تقييم ١٠٠ (عند تخرد أصل معاد تقييمه)" }, cr: { en: "Retained earnings 100", ar: "أرباح محتجزة ١٠٠" } },
        { cr: { en: "Both are SOCIE movements — neither ever touches P/L; a dividend declared after the reporting date is not even a liability at that date (IAS 10 pairing)", ar: "كلاهما حركتان في قائمة التغيرات — ولا يلامسان قائمة الأرباح؛ والتوزيع المقرر بعد تاريخ التقرير ليس التزامًا أصلاً بتاريخه (ثنائية مع IAS 10)" } },
      ],
    },
    { kind: "h", text: { en: "Notes — the four disclosures IAS 1 owns", ar: "الإيضاحات — الإفصاحات الأربعة الخاصة بـ IAS 1" } },
    {
      kind: "list",
      items: [
        { en: "MATERIAL ACCOUNTING POLICY INFORMATION — measurement bases and the policies needing judgement; not a laundry list (2023 amendment replaced 'significant' with 'material')", ar: "معلومات السياسات المحاسبية الجوهرية — أسس القياس والسياسات التي تستلزم حكمًا؛ لا قائمة شاملة (تعديل ٢٠٢٣ استبدل «الهامة» بـ«الجوهرية»)" },
        { en: "JUDGEMENTS — the areas where management judgement has the biggest effect on the numbers (impairment assumptions, functional currency, control conclusions)", ar: "الأحكام — المجالات الأشد أثرًا للأحكام المهنية في الأرقام (افتراضات انخفاض القيمة، العملة الوظيفية، خلاصات السيطرة)" },
        { en: "ESTIMATION UNCERTAINTY — assumptions about the future with a significant risk of material ADJUSTMENT within the next financial year, with carrying amounts at risk and sensitivity where reasonable", ar: "عدم تأكد التقديرات — الافتراضات المستقبلية ذات خطر جوهري لتعديل مادي في السنة المالية القادمة، مع القيم الدفترية المعرضة للخطر والتحليل الحساسي عند الإمكان" },
        { en: "CAPITAL MANAGEMENT — the entity's objectives, policies and processes for managing capital, plus quantitative data and whether the targets were met (or not!)", ar: "إدارة رأس المال — الأهداف والسياسات وعمليات إدارته مع بيانات كمية وهل تحققت المستهدفات" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The notes open with the statement of COMPLIANCE with IFRS, then the material accounting policy information, then the other notes — ordered to match the statements or by a logical sequence kept consistently. Judgement disclosures tell users WHICH decisions moved the numbers; estimation-uncertainty disclosures tell them where the numbers could MOVE next year — the two are different questions and IAS 1 asks both.",
        ar: "تبدأ الإيضاحات بإقرار الالتزام بمعايير IFRS، ثم معلومات السياسات المحاسبية الهامة، ثم بقية الإيضاحات — بترتيب يوافق القوائم أو بتسلسل منطقي تلتزم به المنشأة. وإفصاحات الأحكام تخبر المستخدم بالقرارات التي حرّكت الأرقام؛ وإفصاحات عدم تأكد التقديرات تخبره أين قد تتحرك الأرقام في السنة القادمة — سؤالان مختلفان و IAS 1 يطرحهما معًا.",
      },
    },
    { kind: "h", text: { en: "Identification of the statements", ar: "تعريف القوائم" } },
    {
      kind: "list",
      items: [
        { en: "Name the reporting entity and say whether the statements are for an individual entity or a GROUP", ar: "سمّ المنشأة المُقرِّرة وبيّن هل القوائم لمنشأة مستقلة أم لمجموعة" },
        { en: "State the DATE of the SoFP or the PERIOD covered by the other statements", ar: "حدد تاريخ قائمة المركز المالي أو الفترة التي تغطيها القوائم الأخرى" },
        { en: "State the PRESENTATION CURRENCY (chosen under IAS 21)", ar: "حدد عملة العرض (المختارة وفق IAS 21)" },
        { en: "State the level of ROUNDING in the thousands or millions", ar: "حدد مستوى التقريب بالآلاف أو الملايين" },
      ],
    },
    { kind: "h", text: { en: "Reclassification & comparability rules", ar: "قواعد إعادة التبويب والمقارنة" } },
    {
      kind: "p",
      text: {
        en: "A change in presentation is allowed only when the new presentation is relevant — or a Standard forces it. Restate COMPARATIVES unless impracticable. Titles, classification of expenses and the liquidity/current formats must be consistent period to period. When the classification of an item in the CURRENT period changes (discontinued operations — IFRS 5), restate everything presented. A mistake found AFTER authorisation? IAS 10 governs the window; IAS 1 never authorises retrospective 'tweaks' to statements already issued.",
        ar: "لا يجوز تغيير العرض إلا إذا كان الجديد ملائمًا أو ألزم به معيار. وتُعاد عرض المقارنات إلا إذا تعذر ذلك. ويجب اتساق المسميات وتبويب المصروفات وصيَغ العرض من فترة لأخرى. وعند تغيّر تبويب بند في الفترة الحالية (عمليات متوقفة وفق IFRS 5) تعاد كل المعلومات المعروضة. وما يُكتشف بعد الاعتماد فمحكمه IAS 10؛ ولا يجيز IAS 1 أبدًا «التعديلات» الرجعية على قوائم صدرت.",
      },
    },
    { kind: "h", text: { en: "Interactions & the IFRS 18 horizon", ar: "الترابطات وأفق IFRS 18" } },
    {
      kind: "list",
      items: [
        { en: "IFRS 5 — held-for-sale assets and their liabilities override into the CURRENT section", ar: "IFRS 5 — الأصول المحتفظ بها للبيع والتزاماتها تتجاوز إلى القسم المتداول" },
        { en: "IAS 7 — the cash-flow statement is one of the required primary statements", ar: "IAS 7 — قائمة التدفقات النقدية إحدى القوائم الأولية الواجبة" },
        { en: "IAS 8 — retrospective changes pull in the THIRD SoFP and restated comparatives", ar: "IAS 8 — التغيرات الرجعية تستدعي قائمة المركز المالي الثالثة والمقارنات المعاد عرضها" },
        { en: "IAS 10 — the authorisation date, post-date dividends and going-concern deterioration", ar: "IAS 10 — تاريخ الاعتماد والتوزيعات اللاحقة وتدهور الاستمرارية" },
        { en: "IAS 21 — the presentation currency; FX reserves recycled on disposal of a foreign operation", ar: "IAS 21 — عملة العرض؛ واحتياطيات فروق الصرف تعاد عند التخرد من عملية أجنبية" },
        { en: "IAS 33 — basic & diluted EPS on the face of the P/L", ar: "IAS 33 — ربح السهم الأساسي والمخفض على وجه قائمة الأرباح" },
        { en: "IFRS 18 — replaces the P/L and disclosure architecture from 2027", ar: "IFRS 18 — يحل محل معمارية قائمة الأرباح والإفصاح اعتبارًا من ٢٠٢٧" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The single most-examined IAS 1 trap: a breached covenant makes the borrowing CURRENT at the reporting date even though the lender has not demanded payment — what counts is the UNCONDITIONAL RIGHT TO DEFER, not the lender's patience. And since 2024 a post-date waiver no longer rescues the classification.",
        ar: "أشهر مصائد IAS 1: إخلال التعهدات يجعل الاقتراض متداولًا بتاريخ التقرير وإن لم يطالب المقرض — فالعبرة بالحق غير المشروط في التأجيل لا بصبر المقرض. ومنذ ٢٠٢٤ لم يعد التنازل اللاحق للتاريخ ينقذ التبويب.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The THIRD-BALANCE-SHEET trap: any retrospective application, restatement or reclassification of items pulls in a statement of financial position at the BEGINNING of the earliest comparative period — exams test whether you remembered it exists.",
        ar: "فخ الميزانية الثالثة: أي تطبيق رجعي أو إعادة عرض أو إعادة تبويب تستدعي قائمة مركز مالي في بداية أقدم فترة مقارنة — والامتحان يختبر هل تذكرت وجودها.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "IFRS 18 (Presentation and Disclosure in Financial Statements, effective 2027) will REPLACE IAS 1's P/L architecture — three defined categories (operating, investing, financing) and two new mandatory subtotals. Learn IAS 1 now; tag IFRS 18 changes when they bite.",
        ar: "سيحل IFRS 18 (العرض والإفصاح في القوائم المالية، الساري ٢٠٢٧) محل معمارية قائمة الأرباح في IAS 1 — ثلاث فئات محددة (تشغيلية، استثمارية، تمويلية) ومجموعان فرعيان جديدان إلزاميان. أتقن IAS 1 الآن وراقب تغيرات IFRS 18 عند سريانها.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Materiality is entity-specific: what matters is whether omitting or misstating the item could influence the users' economic decisions — smaller items can be material by their NATURE (a related-party sale, an illegal payment).",
        ar: "الأهمية خاصة بالمنشأة: العبرة بتأثير الحذف أو الخطأ في قرارات المستخدمين الاقتصادية — وقد تكون البنود الصغيرة جوهرية بطبيعتها (بيع لطرف ذي علاقة، دفعة غير مشروعة).",
      },
    },
    {
      kind: "note",
      text: {
        en: "Deferred tax is ALWAYS presented as non-current under IAS 12 — a favourite MCQ pairing with the held-for-sale override.",
        ar: "الضريبة المؤجلة تُعرض غير متداولة دائمًا وفق IAS 12 — ثنائية محببة في أسئلة الاختيار مع استثناء الأصول المحتفظ بها للبيع.",
      },
    },
    {
      kind: "note",
      text: {
        en: "IAS 1 and IAS 10 work as ONE pair: IAS 1 asks 'which basis?' at the reporting date; IAS 10 asks 'what did the after-date events prove about that date?' — the covenant, dividend and going-concern questions all cross the two standards.",
        ar: "يعمل IAS 1 و IAS 10 كثنائية واحدة: IAS 1 يسأل «أي أساس؟» بتاريخ التقرير؛ و IAS 10 يسأل «ماذا أثبتت الأحداث اللاحقة عن ذلك التاريخ؟» — وأسئلة التعهدات والتوزيعات والاستمرارية كلها تعبر المعيارين.",
      },
    },
  ],
}
