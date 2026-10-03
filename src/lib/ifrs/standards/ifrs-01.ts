/** IFRS 1 — First-time Adoption of International Financial Reporting Standards */

import type { Standard } from "../types"

export const IFRS_1: Standard = {
  code: "IFRS 1",
  title: { en: "First-time Adoption of IFRS", ar: "التبني الأول للمعايير الدولية" },
  topic: "presentation",
  effective: { en: "Effective 1 Jan 2011 · the one-off pathway into IFRS", ar: "سارٍ من ١ يناير ٢٠١١ · بوابة العبور لمرة واحدة إلى IFRS" },
  blocks: [
    { kind: "h", text: { en: "Objective", ar: "الهدف" } },
    {
      kind: "p",
      text: {
        en: "An entity's FIRST IFRS financial statements must contain HIGH-QUALITY information that is transparent, comparable over time and cost-beneficial — at a cost that does not exceed the benefits. IFRS 1 is a ONE-OFF transition standard: it gives a limited toolkit of exemptions so the first IFRS balance sheet does not force restatement of every judgement ever made under previous GAAP.",
        ar: "يجب أن تتضمن القوائم المالية الأولى وفق IFRS معلومات عالية الجودة شفافة وقابلة للمقارنة عبر الزمن وبكلفة لا تتجاوز منافعها. وIFRS 1 معيار انتقالي يُطبَّق مرة واحدة: يمنح حزمة محدودة من الإعفاءات حتى لا تُلزم الميزانية الأولى بإعادة عرض كل تقدير سبق في النظام المحاسبي السابق.",
      },
    },
    {
      kind: "note",
      text: {
        en: "First-time adopter = an entity that presents its FIRST IFRS statements with an explicit statement of IFRS compliance — no matter what it called its old GAAP.",
        ar: "المتبني الأول = منشأة تعرض قوائمها الأولى وفق IFRS بإفصاح صريح عن الالتزام بالمعايير — أيًّا كان مسمى نظامها السابق.",
      },
    },
    { kind: "h", text: { en: "The three key dates", ar: "التواريخ الثلاثة المفتاحية" } },
    {
      kind: "p",
      text: {
        en: "DATE OF TRANSITION — the date of the opening IFRS balance sheet (start of the earliest comparative period presented). START of the first IFRS reporting period. END of that period, when the first IFRS statements are published. Example: first IFRS statements for the year ended 31 Dec 2026 with one comparative year → date of transition = 1 Jan 2025, opening balance sheet date = 1 Jan 2025.",
        ar: "تاريخ الانتقال — تاريخ ميزانية الافتتاح وفق IFRS (بداية أقدم فترة مقارنة معروضة)، وبداية أول فترة تقرير وفق IFRS، ونهايتها عند نشر القوائم الأولى. مثال: قوائم أولى عن السنة المنتهية ٣١ ديسمبر ٢٠٢٦ مع سنة مقارنة ← تاريخ الانتقال = ١ يناير ٢٠٢٥.",
      },
    },
    {
      kind: "steps",
      items: [
        { en: "Prepare an OPENING IFRS BALANCE SHEET at the date of transition — the starting point for all subsequent IFRS accounting", ar: "أعد ميزانية افتتاحية وفق IFRS بتاريخ الانتقال — نقطة الانطلاق لكل محاسبة لاحقة" },
        { en: "Apply IFRS accounting POLICIES from that date — and they must be the LATEST versions, not the ones in force in earlier years", ar: "طبق السياسات المحاسبية وفق IFRS من ذلك التاريخ — وبأحدث إصداراتها لا بإصدارات السنوات السابقة" },
        { en: "Retrospectively restate at least ONE comparative period + the equity/policies reconciliation", ar: "أعد عرض فترة مقارنة واحدة على الأقل رجعيًا + تسوية حقوق الملكية والسياسات" },
      ],
    },
    { kind: "h", text: { en: "The general rule — full retrospective", ar: "القاعدة العامة — الإعادة الرجعية الكاملة" } },
    {
      kind: "p",
      text: {
        en: "The opening balance sheet recognises every asset and liability that IFRS requires, DErecognises those IFRS does not permit, reclassifies items to IFRS categories and applies IFRS measurement to all of them. The entity estimates IFRS amounts using conditions AT THE DATE OF TRANSITION — hindsight is NOT allowed to adjust estimates that were reasonable at the time (an exemption carried from IAS 8).",
        ar: "تعترف ميزانية الافتتاح بكل أصل والتزام تتطلبه IFRS، وتستبعد ما لا تجيزه، وتعيد تبويب البنود وفق فئات المعايير وتطبق قياسها. وتقدَّر المبالغ وفق الظروف بتاريخ الانتقال — ولا يجوز استخدام الإدراك المتأخر لتعديل تقديرات كانت معقولة وقتها (إعفاء منقول من IAS 8).",
      },
    },
    {
      kind: "tree",
      root: { en: "Item in the opening IFRS balance sheet", ar: "بند في ميزانية الافتتاح وفق IFRS" },
      branches: [
        {
          when: { en: "General rule applies", ar: "تنطبق القاعدة العامة" },
          then: { en: "Recognise / derecognise / reclassify / measure per the LATEST IFRS at the transition date", ar: "اعترف/استبعد/أعد تبويب/قِس وفق أحدث المعايير بتاريخ الانتقال", red: true },
        },
        {
          when: { en: "A specific OPTIONAL exemption exists (IFRS 1 Appendix D)", ar: "يوجد إعفاء اختياري (ملحق D)" },
          then: { en: "Elect the exemption → apply its simplified treatment instead", ar: "خُذ الإعفاء ← طبق المعالجة المبسطة بدلًا منها" },
        },
        {
          when: { en: "A MANDATORY exception applies (IFRS 1 Appendix E)", ar: "ينطبق استثناء إلزامي (ملحق E)" },
          then: { en: "No choice — follow it (estimates, derecognition, hedge accounting, non-controlling interests, classification of financial assets…)", ar: "لا خيار — اتبعه (التقديرات، الاستبعاد، التغطية، الحصص غير المسيطرة، تصنيف الأصول المالية…)" },
        },
      ],
    },
    { kind: "h", text: { en: "Mandatory exceptions (no election)", ar: "الاستثناءات الإلزامية (بلا خيار)" } },
    {
      kind: "list",
      items: [
        { en: "ESTIMATES — only adjust for new information or a genuine IFRS requirement; no hindsight (e.g. a bad-debt estimate reasonable under old GAAP stays)", ar: "التقديرات — لا تعدل إلا لمعلومة جديدة أو متطلب حقيقي من المعيار؛ ولا إدراك متأخر (تقدير الديون المعدومة المعقول سابقًا يبقى)" },
        { en: "DERECOGNITION of financial assets & liabilities — apply IFRS 9/10 transition provisions at 1 Jan of the FIRST IFRS reporting period (not the transition date)", ar: "استبعاد الأصول والالتزامات المالية — تطبق أحكام انتقال IFRS 9/10 في ١ يناير من أول فترة تقرير لا عند تاريخ الانتقال" },
        { en: "HEDGE ACCOUNTING — all hedging relationships must meet IFRS 9 criteria at the START of the first IFRS period; documentation exists at that date", ar: "محاسبة التغطية — يجب أن تستوفي كل علاقة تغطية شروط IFRS 9 عند بداية أول فترة، وبوثائق قائمة حينها" },
        { en: "NON-CONTROLLING INTERESTS & own equity — do NOT restate old acquisition accounting (see the business-combination exemption)", ar: "الحصص غير المسيطرة وحقوق الملكية الذاتية — لا يُعاد عرض محاسبة الاستحواذ القديمة (انظر إعفاء الاندماج)" },
        { en: "FINANCIAL ASSET / LIABILITY CLASSIFICATION — assess business model & SPPI at 1 Jan of the first IFRS reporting period", ar: "تصنيف الأصول/الالتزامات المالية — يقيَّم النموذج الائتماني ومعيار العائد عند بداية أول فترة" },
        { en: "Embedded derivatives — assess separation at 1 Jan of the first IFRS reporting period", ar: "المشتقات المضمّنة — يقيَّم الفصل عند بداية أول فترة تقرير" },
      ],
    },
    { kind: "h", text: { en: "The most-examined optional exemptions", ar: "أشهر الإعفاءات الاختيارية" } },
    {
      kind: "p",
      text: {
        en: "Around twenty optional exemptions exist in Appendix D. Four dominate the exams because they change the numbers the most:",
        ar: "يوجد نحو عشرين إعفاءً اختياريًا في الملحق D، وتتصدر الامتحانات أربعة منها لأنها الأشد أثرًا في الأرقام:",
      },
    },
    {
      kind: "tree",
      title: { en: "Business combinations", ar: "الاندماجات التجارية" },
      root: { en: "Pre-transition combinations accounted under old GAAP", ar: "اندماجات سابقة محاسبة وفق النظام القديم" },
      branches: [
        {
          when: { en: "Entity elects the exemption (almost universal)", ar: "تختار المنشأة الإعفاء (شبه دائم)" },
          then: { en: "Do NOT restate — keep old-GAAP carrying amounts as the IFRS opening figures; goodwill stays 'as is' (no restatement of acquisition-date values)", ar: "لا إعادة عرض — تبقى أرقام النظام السابق أرقام افتتاحية؛ ويبقى الشهرة كما هي دون إعادة قياس", red: true },
        },
        {
          when: { en: "Exemption not elected", ar: "عدم اختيار الإعفاء" },
          then: { en: "Restate every historical combination with IFRS 3 fair values — enormous effort", ar: "أعد عرض كل اندماج تاريخي بالقيم العادلة وفق IFRS 3 — جهد هائل" },
        },
      ],
    },
    {
      kind: "tree",
      title: { en: "Deemed cost for PPE & intangibles", ar: "التكلفة المفترضة للممتلكات والأصول غير الملموسة" },
      root: { en: "Old-GAAP carrying amount at transition differs wildly from IFRS measurement", ar: "القيمة الدفترية القديمة وقت الانتقال تختلف جوهريًا عن القياس وفق IFRS" },
      branches: [
        {
          when: { en: "Fair value or revalued amount used as DEEMED COST", ar: "استخدام القيمة العادلة أو المعاد تقييمها تكلفةً مفترضة" },
          then: { en: "Subsequent depreciation runs from that FV — massive simplification (e.g. IAS 16 revaluation model optional later, but here it is a one-off cost reset)", ar: "يُحسب الإهلاك اللاحق من تلك القيمة العادلة — تبسيط كبير", red: true },
        },
        {
          when: { en: "RIGHT-OF-USE assets or intangibles with an observable market", ar: "أصول الحق في الاستخدام أو أصول غير ملموسة لها سوق ملحوظ" },
          then: { en: "Fair value as deemed cost applies to them too — one election, whole asset classes", ar: "تنطبق القيمة العادلة كتكلفة مفترضة عليها أيضًا — انتخاب واحد لفئات الأصول كاملة" },
        },
        {
          when: { en: "Use previously recorded REVALUATIONS under old GAAP", ar: "استخدام إعادة تقييم سابقة في النظام القديم" },
          then: { en: "Allowed as deemed cost if the revaluation was broadly comparable to fair value at the revaluation date (e.g. a previous IAS 16 revaluation)", ar: "يجوز كتكلفة مفترضة إذا كانت إعادة التقييم مقاربة للقيمة العادلة وقتها (كإعادة تقييم IAS 16 سابقة)" },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Other headline exemptions: share-based payment (apply IFRS 2 only to instruments granted after 7 Nov 2002 and unvested at transition); insurance contracts; cumulative translation differences (deemed ZERO — later disposals recycle only post-transition amounts); leases (a simplified onerous/split test for old contracts); investments in associates & JVs (fair value as deemed cost or proportionate share of the investee's net assets); decommissioning liabilities already in asset cost; severe hyperinflation; service concessions; borrowings of a first-time adopter's rate-regulated subsidiary…",
        ar: "إعفاءات أخرى بارزة: الدفع بالأسهم (يطبق IFRS 2 على الأدوات الممنوحة بعد ٧ نوفمبر ٢٠٠٢ وغير مستحقة وقت الانتقال فقط)؛ عقود التأمين؛ فروق الترجمة التراكمية (تعتبر صفرًا — والتداولات اللاحقة تعيد تدوير ما بعد الانتقال فقط)؛ الإيجارات (اختبار مبسط للعقود القديمة)؛ الاستثمارات في الزميلات والمشتركة (القيمة العادلة تكلفة مفترضة أو الحصة من صافي أصول المستثمَر فيه)؛ التزامات الفك المقيدة بالتكلفة؛ التضخم الجامح؛ الامتيازات الخدمية…",
      },
    },
    { kind: "h", text: { en: "Presentation & reconciliations", ar: "العرض والتسويات" } },
    {
      kind: "p",
      text: {
        en: "The first IFRS statements must explain the transition to stakeholders — the IAS 8-style disclosures are NOT enough. Three reconciliations are mandatory: (1) equity as reported under old GAAP vs restated IFRS equity at the date of transition AND at the end of the last old-GAAP period; (2) profit or loss under old GAAP vs restated IFRS profit for the last old-GAAP period; (3) adjustments to every line item presented, if relevant. If the entity recognised or reversed impairments at transition, identify them separately.",
        ar: "يجب أن تشرح القوائم الأولى الانتقال لأصحاب المصالح — ولا تكفي إفصاحات IAS 8. ثلاث تسويات إلزامية: (١) حقوق الملكية وفق النظام القديم مقابل المعدلة وفق IFRS بتاريخ الانتقال وفي نهاية آخر فترة قديمة؛ (٢) الربح أو الخسارة بالطريقة ذاتها؛ (٣) تسويات كل بند معروض عند اللزوم. وإذا اعتُمد أو رُد انخفاض قيمة وقت الانتقال فيُبيَّن منفصلًا.",
      },
    },
    {
      kind: "example",
      title: { en: "Deemed cost in action", ar: "التكلفة المفترضة عمليًا" },
      lines: [
        { en: "Plant bought Jan 2016 for 5,000 (10-year life). Transition date 1 Jan 2025; old-GAAP carrying amount 1,500. Fair value at transition 3,200", ar: "آلة اشتريت يناير ٢٠١٦ بمبلغ ٥٬٠٠٠ (عمر ١٠ سنوات). تاريخ الانتقال ١ يناير ٢٠٢٥؛ القيمة الدفترية القديمة ١٬٥٠٠؛ والقيمة العادلة ٣٬٢٠٠" },
        { en: "Election: FV as deemed cost → carrying at 1 Jan 2025 = 3,200", ar: "اختيار القيمة العادلة تكلفةً مفترضة ← القيمة الدفترية = ٣٬٢٠٠" },
        { en: "Remaining life reassessed: 8 years → depreciation = 3,200 ÷ 8 = 400/yr (vs 500 under old GAAP)", ar: "إعادة تقدير العمر المتبقي: ٨ سنوات ← الإهلاك = ٣٬٢٠٠ ÷ ٨ = ٤٠٠ سنويًا (مقابل ٥٠٠ سابقًا)" },
        { en: "No IFRS 15 restatement of revenue before the transition date — but open contract liabilities must be built at the transition date", ar: "لا إعادة عرض للإيراد قبل الانتقال — لكن تُبنى التزامات العقود القائمة بتاريخ الانتقال" },
      ],
    },
    { kind: "h", text: { en: "Interim reporting in the first year", ar: "التقارير المرحلية في السنة الأولى" } },
    {
      kind: "p",
      text: {
        en: "IAS 34 in the first IFRS year adds a heavy layer: reconciliation to the last old-GAAP interim period for each interim date, restated interim P/L, and — under the D4-5D approach — impairment/reversal categories. Entities usually time adoption to the start of a calendar year so interims align.",
        ar: "يضيف تطبيق IAS 34 في سنة IFRS الأولى طبقة ثقيلة: تسوية مع آخر فترة مرحلية قديمة لكل تاريخ مرحلي، وقائمة مرحلية معدلة، وبيان فئات انخفاض القيمة وردوده. ولذلك توقت المنشآت التبني مع بداية السنة الميلادية عادة.",
      },
    },
    {
      kind: "journal",
      title: { en: "Opening-balance-sheet adjustment (illustrative)", ar: "تسوية ميزانية الافتتاح (توضيحية)" },
      rows: [
        { dr: { en: "PPE (deemed cost uplift 1,700)", ar: "ممتلكات (زيادة التكلفة المفترضة ١٬٧٠٠)" }, cr: { en: "Retained earnings / OCI reserves", ar: "أرباح محتجزة/احتياطيات الدخل الشامل" } },
        { dr: { en: "Retained earnings", ar: "أرباح محتجزة" }, cr: { en: "Provision for onerous contracts newly recognised", ar: "مخصص عقود مفضرة يُعترف به الآن" }, red: true },
        { dr: { en: "Development expenditure capitalised (was expensed under old GAAP)", ar: "مصروفات تطوير تُرسمل (كانت تُحمَّل كمصروف)" }, cr: { en: "Retained earnings", ar: "أرباح محتجزة" } },
      ],
    },
    { kind: "h", text: { en: "Disclosures checklist", ar: "قائمة الإفصاحات" } },
    {
      kind: "list",
      items: [
        { en: "Confirmation the statements are the entity's FIRST IFRS statements + the transition date", ar: "إقرار بأنها أول قوائم وفق IFRS + تاريخ الانتقال" },
        { en: "The basis: previous GAAP, and how the move affected the reported position, performance and cash flows", ar: "الأساس: النظام السابق وكيف أثّر الانتقال في المركز المالي والأداء والتدفقات" },
        { en: "The reconciliations above + impairment adjustments + current & deferred tax effects of each adjustment", ar: "التسويات أعلاه + تعديلات انخفاض القيمة + أثر الضريبي الجاري والمؤجل لكل تعديل" },
        { en: "Every optional exemption elected, with the reasons (Appendix D item by item)", ar: "كل إعفاء اختياري منتقى وأسبابه (بندًا بندًا من الملحق D)" },
        { en: "Changes in accounting policies or estimates AFTER the opening balance sheet but before the first statements", ar: "التغيرات في السياسات أو التقديرات بعد ميزانية الافتتاح وقبل القوائم الأولى" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "IFRS 1 wins exam marks on DATES: transition date = opening balance sheet = start of the EARLIEST comparative period — not the first IFRS year-end, and not the day of the old-GAAP statements.",
        ar: "تحسم درجات IFRS 1 في التواريخ: تاريخ الانتقال = ميزانية الافتتاح = بداية أقدم فترة مقارنة — لا نهاية السنة الأولى ولا تاريخ القوائم القديمة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The latest-versions rule: apply the IFRSs in force at the FIRST reporting date retrospectively — you do NOT apply the standards of 2010 to a 2025 transition. This is why early-adopted changes seem to 'arrive' with the transition.",
        ar: "قاعدة أحدث الإصدارات: تطبق المعايير السارية في تاريخ التقرير الأول بأثر رجعي — فلا تُطبق معايير ٢٠١٠ على انتقال عام ٢٠٢٥؛ ولهذا يبدو أن التعديلات الحديثة «تصل» مع الانتقال.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Only the FIRST set counts. Once IFRS statements are issued with a compliance statement, the entity can never be a first-time adopter again — even after a gap year.",
        ar: "المجموعة الأولى وحدها تُحتسب. فمتى صدرت قوائم بإقرار الالتزام بالمعايير فلا عودة لصفة المتبني الأول — ولو بعد سنة انقطاع.",
      },
    },
  ],
}
