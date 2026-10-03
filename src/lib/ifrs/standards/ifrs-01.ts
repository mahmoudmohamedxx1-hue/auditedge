/** IFRS 1 — First-time Adoption of International Financial Reporting Standards */

import type { Standard } from "../types"

export const IFRS_1: Standard = {
  code: "IFRS 1",
  title: { en: "First-time Adoption of IFRS", ar: "التبني الأول للمعايير الدولية" },
  topic: "presentation",
  effective: { en: "Effective 1 Jan 2011 · the one-off pathway into IFRS", ar: "سارٍ من ١ يناير ٢٠١١ · بوابة العبور لمرة واحدة إلى IFRS" },
  blocks: [
    { kind: "h", text: { en: "Objective — a one-off transition standard", ar: "الهدف — معيار انتقالي يُطبق مرة واحدة" } },
    {
      kind: "p",
      text: {
        en: "An entity's FIRST IFRS financial statements must contain HIGH-QUALITY information that is transparent, comparable over time and cost-beneficial — at a cost that does not exceed the benefits. IFRS 1 is a ONE-OFF transition standard: it gives a limited toolkit of exemptions so the first IFRS balance sheet does not force restatement of every judgement ever made under previous GAAP. It applies the day the entity's earlier statements did NOT contain an explicit and unreserved statement of compliance with IFRS — and never again after that.",
        ar: "يجب أن تتضمن القوائم المالية الأولى وفق IFRS معلومات عالية الجودة شفافة وقابلة للمقارنة عبر الزمن وبكلفة لا تتجاوز منافعها. وIFRS 1 معيار انتقالي يُطبَّق مرة واحدة: يمنح حزمة محدودة من الإعفاءات حتى لا تُلزم ميزانية الافتتاح الأولى بإعادة عرض كل تقدير سبق في النظام المحاسبي السابق. ويسري في اليوم الذي لم تكن فيه القوائم السابقة تتضمن إفصاحًا صريحًا غير مشروط بالالتزام بـIFRS — ولا يعود بعده أبدًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "First-time adopter = an entity that presents its FIRST IFRS statements with an explicit statement of IFRS compliance — no matter what it called its old GAAP. Once such statements are issued, the entity can never be a first-time adopter again.",
        ar: "المتبني الأول = منشأة تعرض قوائمها الأولى وفق IFRS بإفصاح صريح عن الالتزام بالمعايير — أيًّا كان مسمى نظامها السابق. ومتى صدرت تلك القوائم فلا عودة لصفة المتبني الأول أبدًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Previous GAAP = the basis of accounting the entity used before, whatever its name (local GAAP, US GAAP, tax-based accounting, cash accounting). IFRS 1 never ranks old GAAPs — it just needs the starting numbers and the bridge to IFRS.",
        ar: "النظام المحاسبي السابق = أساس المحاسبة الذي كانت تستخدمه المنشأة قبل الانتقال، أيًّا كان اسمه (معايير محلية، معايير أمريكية، محاسبة ضريبية، أساس نقدي). ولا يرتب IFRS 1 تلك الأنظمة يومًا — يحتاج فقط الأرقام الافتتاحية والجسر إلى IFRS.",
      },
    },
    { kind: "h", text: { en: "The three key dates", ar: "التواريخ الثلاثة المفتاحية" } },
    {
      kind: "p",
      text: {
        en: "Everything in IFRS 1 hangs on three dates. DATE OF TRANSITION — the date of the opening IFRS balance sheet (the start of the earliest comparative period presented). START of the first IFRS reporting period. END of that period, when the first IFRS statements are published. Example: first IFRS statements for the year ended 31 Dec 2026 with one comparative year → date of transition = 1 Jan 2025, and the opening IFRS balance sheet is prepared as at that date — two full years before the statements users actually read.",
        ar: "كل شيء في IFRS 1 معلَّق على ثلاثة تواريخ. تاريخ الانتقال — تاريخ ميزانية الافتتاح وفق IFRS (بداية أقدم فترة مقارنة معروضة). وبداية أول فترة تقرير وفق IFRS. ونهايتها عند نشر القوائم الأولى. مثال: قوائم أولى عن السنة المنتهية ٣١ ديسمبر ٢٠٢٦ مع سنة مقارنة واحدة ← تاريخ الانتقال = ١ يناير ٢٠٢٥، وتُعد ميزانية الافتتاح في ذلك التاريخ — قبل عامين كاملين من القوائم التي يقرؤها المستخدمون فعلًا.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "DATE OF TRANSITION = opening IFRS balance-sheet date = start of the EARLIEST period presented — all recognition and measurement choices are made as at this date", ar: "تاريخ الانتقال = تاريخ ميزانية الافتتاح = بداية أقدم فترة معروضة — وعنده تُتخذ كل قرارات الاعتراف والقياس" },
        { en: "START OF THE FIRST IFRS REPORTING PERIOD — where the IFRS 9-style exceptions (derecognition, classification, embedded derivatives, hedge documentation) are assessed", ar: "بداية أول فترة تقرير وفق IFRS — وعنده تقيَّم استثناءات طراز IFRS 9 (الاستبعاد والتصنيف والمشتقات المضمنة ووثائق التغطية)" },
        { en: "FIRST IFRS REPORTING DATE — the end of the first period; the statements are published here with the reconciliations inside", ar: "تاريخ التقرير الأول وفق IFRS — نهاية أول فترة؛ وعنده تُنشر القوائم وفيها التسويات" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "IFRS 1 wins exam marks on DATES: transition date = opening balance sheet = start of the EARLIEST comparative period — not the first IFRS year-end, and not the day of the old-GAAP statements.",
        ar: "تحسم درجات IFRS 1 في التواريخ: تاريخ الانتقال = ميزانية الافتتاح = بداية أقدم فترة مقارنة — لا نهاية السنة الأولى ولا تاريخ القوائم القديمة.",
      },
    },
    { kind: "h", text: { en: "The general rule — full retrospective", ar: "القاعدة العامة — الإعادة الرجعية الكاملة" } },
    {
      kind: "p",
      text: {
        en: "The opening balance sheet recognises every asset and liability that IFRS requires, DErecognises those IFRS does not permit, reclassifies items to IFRS categories and applies IFRS measurement to all of them. The entity estimates IFRS amounts using conditions AT THE DATE OF TRANSITION — hindsight is NOT allowed to adjust estimates that were reasonable at the time (an exemption carried from IAS 8). Typical first-day moves: internally generated brands derecognised, leases capitalised under IFRS 16, provisions recut to IAS 37's constructive-obligation test, revenue restated from risks-and-rewards to the five-step model.",
        ar: "تعترف ميزانية الافتتاح بكل أصل والتزام تتطلبه IFRS، وتستبعد ما لا تجيزه، وتعيد تبويب البنود وفق فئات المعايير وتطبق قياسها. وتقدَّر المبالغ وفق الظروف بتاريخ الانتقال — ولا يجوز استخدام الإدراك المتأخر لتعديل تقديرات كانت معقولة وقتها (إعفاء منقول من IAS 8). ومن حركات اليوم الأول المعتادة: استبعاد العلامات المولدة داخليًا، ورسملة الإيجارات وفق IFRS 16، وإعادة قص المخصصات على اختبار الالتزام البنائي في IAS 37، وإعادة عرض الإيراد من مخاطر ومنافع إلى نموذج الخطوات الخمس.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Retrospective means the comparative periods are IFRS periods too: at least ONE year of comparatives must be presented under IFRS, and the policies applied are the LATEST versions in force at the first IFRS reporting date — including standards that permit early adoption. The opening balance sheet itself is the anchor in the notes; what users see is the comparative plus the reconciliations that bridge old GAAP to IFRS at both the transition date and the last old-GAAP year-end.",
        ar: "والأثر الرجعي يعني أن فترات المقارنة فترات IFRS أيضًا: تُعرض سنة مقارنة واحدة على الأقل وفق IFRS، والسياسات المطبقة هي أحدث الإصدارات السارية في تاريخ التقرير الأول — بما فيها المعايير التي تجيز التبني المبكر. وميزانية الافتتاح ذاتها هي المرتكز بالإيضاحات؛ وما يراه المستخدم هو المقارنة مع جسور التسوية بين النظام القديم وIFRS عند تاريخ الانتقال وعند نهاية آخر سنة قديمة.",
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
          when: { en: "A specific OPTIONAL exemption exists (Appendix D) and the entity elects it", ar: "يوجد إعفاء اختياري (الملحق D) وتنتخبه المنشأة" },
          then: { en: "Apply its simplified treatment instead — and disclose each election and its reason", ar: "طبّق معالجته المبسطة بدلًا منها — وأفصح عن كل انتخاب وسببه", red: true },
        },
        {
          when: { en: "A MANDATORY exception applies (Appendix E)", ar: "ينطبق استثناء إلزامي (الملحق E)" },
          then: { en: "No choice — follow it (estimates, derecognition, hedge accounting, non-controlling interests, financial-asset classification, embedded derivatives)", ar: "لا خيار — اتبعه (التقديرات، الاستبعاد، التغطية، الحصص غير المسيطرة، تصنيف الأصول المالية، المشتقات المضمنة)" },
        },
      ],
    },
    { kind: "h", text: { en: "The adoption sequence", ar: "تسلسل التبني" } },
    {
      kind: "steps",
      items: [
        { en: "1. Identify the DATE OF TRANSITION — the earlier it is, the heavier the lift; present at least one comparative IFRS year", ar: "١. حدد تاريخ الانتقال — كلما بكّرت ثقل العمل؛ واعرض سنة مقارنة واحدة وفق IFRS على الأقل" },
        { en: "2. Build the OPENING IFRS BALANCE SHEET at that date — recognise, derecognise, reclassify per IFRS", ar: "٢. ابنِ ميزانية الافتتاح وفق IFRS عند ذلك التاريخ — اعترف واستبعد وأعد تبويب وفق المعايير" },
        { en: "3. Adopt IFRS accounting POLICIES — the LATEST versions in force at the first IFRS reporting date, applied retrospectively", ar: "٣. تبنَّ السياسات المحاسبية وفق IFRS — أحدث الإصدارات السارية في تاريخ التقرير الأول، بأثر رجعي" },
        { en: "4. Apply the MANDATORY exceptions (Appendix E) — no election, ever", ar: "٤. طبّق الاستثناءات الإلزامية (الملحق E) — بلا انتخاب أبدًا" },
        { en: "5. Elect the OPTIONAL exemptions (Appendix D) one by one — some by asset class, some whole-entity; disclose each", ar: "٥. انتخب الإعفاءات الاختيارية (الملحق D) بندًا بندًا — بعضها بفئة الأصول وبعضها للمنشأة كلها؛ وأفصح عن كل واحد" },
        { en: "6. Determine the deferred and current TAX EFFECT of every adjustment", ar: "٦. حدد الأثر الضريبي الجاري والمؤجل لكل تعديل" },
        { en: "7. Publish the three RECONCILIATIONS (equity ×2, total profit) plus the exemptions and interim layer if the first year is interim-reported", ar: "٧. انشر التسويات الثلاث (حقوق الملكية مرتين، وإجمالي الربح) مع الإعفاءات وطبقة التقارير المرحلية إن كانت السنة الأولى مرحلية" },
      ],
    },
    { kind: "h", text: { en: "Mandatory exceptions (no election)", ar: "الاستثناءات الإلزامية (بلا خيار)" } },
    {
      kind: "p",
      text: {
        en: "The Appendix E exceptions are not choices but rule-fixes for problems that pure retrospective application cannot solve. Watch their DATES: most are assessed at the START of the FIRST IFRS REPORTING PERIOD — one year AFTER the transition date in the classic two-year example — because re-running old derecognition or hedge tests at the transition date would be pure reconstruction, not better information.",
        ar: "استثناءات الملحق E ليست خيارات بل تثبيتات لقواعد تعجز الإعادة الرجعية الخالصة عن حلها. وانتبه لتواريخها: تقيَّم أغلبها عند بداية أول فترة تقرير وفق IFRS — بعد تاريخ الانتقال بسنة كاملة في مثال السنتين الكلاسيكي — لأن إعادة اختبارات الاستبعاد أو التغطية القديمة عند تاريخ الانتقال إعادة بناء محضة لا معلومات أفضل.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "ESTIMATES — only adjust for new information or a genuine IFRS requirement; no hindsight (a bad-debt estimate reasonable under old GAAP stays), unless the old estimate deliberately ignored evidence available at the time", ar: "التقديرات — لا تعدل إلا لمعلومة جديدة أو متطلب حقيقي من المعيار؛ ولا إدراك متأخر (تقدير الديون المعدومة المعقول سابقًا يبقى)، إلا إذا تجاهل التقدير القديم عمدًا أدلة كانت متاحة وقتها" },
        { en: "DERECOGNITION of financial assets & liabilities — apply the IFRS 9/IFRS 10 transition provisions at 1 Jan of the FIRST IFRS reporting period (not the transition date)", ar: "استبعاد الأصول والالتزامات المالية — تطبق أحكام انتقال IFRS 9/IFRS 10 في ١ يناير من أول فترة تقرير لا عند تاريخ الانتقال" },
        { en: "HEDGE ACCOUNTING — every hedging relationship must meet IFRS 9's criteria at the START of the first IFRS period, with documentation in place at that date; non-qualifying relationships stop being hedges", ar: "محاسبة التغطية — يجب أن تستوفي كل علاقة تغطية شروط IFRS 9 عند بداية أول فترة ووثائقها قائمة حينها؛ وما لا يجتاز تتوقف صفته تغطيةً" },
        { en: "NON-CONTROLLING INTERESTS & own equity — do NOT restate old acquisition accounting (the business-combination exemption flows through here)", ar: "الحصص غير المسيطرة وحقوق الملكية الذاتية — لا يُعاد عرض محاسبة الاستحواذ القديمة (يمتد عبرها إعفاء الاندماجات)" },
        { en: "FINANCIAL ASSET / LIABILITY CLASSIFICATION — business model & SPPI assessed at 1 Jan of the first IFRS reporting period, based on the facts at that date", ar: "تصنيف الأصول/الالتزامات المالية — يقيَّم نموذج الأعمال واختبار SPPI في ١ يناير من أول فترة تقرير وفق وقائع ذلك التاريخ" },
        { en: "EMBEDDED DERIVATIVES — assess separation from the host at 1 Jan of the first IFRS reporting period", ar: "المشتقات المضمنة — يقيَّم فصلها عن الأصل الحاضن في ١ يناير من أول فترة تقرير" },
      ],
    },
    { kind: "h", text: { en: "The optional exemptions map (Appendix D)", ar: "خريطة الإعفاءات الاختيارية (الملحق D)" } },
    {
      kind: "p",
      text: {
        en: "Around twenty optional exemptions exist. They share one logic: where reconstructing history would cost more than the information is worth, IFRS 1 lets the entity start the IFRS clock at the transition date with a simplified opening number. Four dominate the exams because they change the numbers the most — business combinations, deemed cost, share-based payment and the IFRS 9 designations — but the examiner can reach for any of them.",
        ar: "توجد نحو عشرين إعفاءً اختياريًا، تشترك في منطق واحد: حيث تتجاوز كلفة إعادة بناء التاريخ قيمة معلوماته، يتيح IFRS 1 بدء ساعة IFRS عند تاريخ الانتقاء برقم افتتاحي مبسط. وتتصدر الامتحانات أربعة لأنها الأشد أثرًا في الأرقام — الاندماجات، والتكلفة المفترضة، والدفع بالأسهم، وتسميات IFRS 9 — لكن للممتحن أن يمد يده لأي منها.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "BUSINESS COMBINATIONS — pre-transition combinations keep their old-GAAP accounting (goodwill as previously reported); see the tree below", ar: "الاندماجات التجارية — تحتفظ التجمعات السابقة للانتقال بمحاسبتها القديمة (والشهرة كما وردت سابقًا)؛ انظر الشجرة أدناه" },
        { en: "DEEMED COST — PPE, intangibles, investment property, right-of-use assets: fair value (or a comparable old-GAAP revaluation) at the transition date becomes the opening cost", ar: "التكلفة المفترضة — الممتلكات والأصول غير الملموسة والعقارات الاستثمارية وأصول الحق في الاستخدام: القيمة العادلة (أو إعادة تقييم قديمة مقاربة) عند الانتقال تصبح التكلفة الافتتاحية" },
        { en: "SHARE-BASED PAYMENT — apply IFRS 2 only to instruments granted after 7 Nov 2002 AND unvested at the transition date; older grants stay untouched", ar: "الدفع على أساس الأسهم — يطبق IFRS 2 على الأدوات الممنوحة بعد ٧ نوفمبر ٢٠٠٢ وغير مستحقة وقت الانتقال فقط؛ وما قبلها لا يُمس" },
        { en: "INSURANCE CONTRACTS — keep previous-GAAP amounts for existing contracts (IFRS 17's own transition routes are open to first-time adopters)", ar: "عقود التأمين — أبقِ مقادير النظام السابق للعقود القائمة (ومسارات انتقال IFRS 17 ذاتها متاحة للمتبنين الأوائل)" },
        { en: "LEASES — the lessee may use IFRS 16's own modified-retrospective package (deemed new lease at the date of initial application, no comparative restatement); onerous old operating leases: a previous-GAAP provision can be the opening lease liability", ar: "الإيجارات — يجوز للمستأجر حزمة IFRS 16 الرجعية المعدلة (إيجار جديد مفترض عند تاريخ التطبيق الأول دون إعادة عرض المقارنات)؛ والعقود التشغيلية المفضرة: يجوز أن يكون مخصص النظام السابق هو التزام الإيجار الافتتاحي" },
        { en: "EMPLOYEE BENEFITS — cumulative unrecognised actuarial gains/losses and past service cost go straight to opening retained earnings at the transition date (an IAS 19-style re-set)", ar: "مزايا العاملين — تذهب المكاسب/الخسائر الاكتوارية غير المعترف بها وتكلفة الخدمة السابقة تراكميًا إلى الأرباح المحتجزة الافتتاحية مباشرة عند الانتقال (إعادة ضبط على طريقة IAS 19)" },
        { en: "CUMULATIVE TRANSLATION DIFFERENCES — deemed ZERO for all foreign operations; later disposals recycle only post-transition differences", ar: "فروق الترجمة التراكمية — تعتبر صفرًا لكل العمليات الأجنبية؛ والتخريدات اللاحقة تعيد تدوير ما بعد الانتقال فقط" },
        { en: "INVESTMENTS IN SUBSIDIARIES, JVs & ASSOCIATES — measured at cost or fair value as deemed cost (a proportionate share of net assets option exists for JVs)", ar: "الاستثمارات في التابعات والمشتركة والزميلات — تقاس بالتكلفة أو بالقيمة العادلة كتكلفة مفترضة (وخيار الحصة التناسبية من صافي الأصول قائم للمشتركة)" },
        { en: "DECOMMISSIONING LIABILITIES in asset cost — re-estimate the cost as at the transition date; the change adjusts the asset's cost (IAS 16 estimate-change mechanics), not profit", ar: "التزامات الفك والتخلص ضمن تكلفة الأصل — يعاد تقدير التكلفة عند تاريخ الانتقال؛ ويعّدل الفارق تكلفة الأصل (ميكانيكا تغير التقدير في IAS 16) لا الربح" },
        { en: "SEVERE HYPERINFLATION — subsidiaries in hyperinflationary economies: fair value at the transition date as deemed cost; pre-hyperinflation figures re-dated", ar: "التضخم الجامح — التابعات في الاقتصادات عالية التضخم: القيمة العادلة عند الانتقال تكلفةً مفترضة؛ وتعاد صياغة أرقام ما قبل التضخم" },
        { en: "ASSETS HELD FOR SALE — apply IFRS 5 measurement from the transition date; the criteria are assessed as at that date", ar: "الأصول المحتفظ بها للبيع — يطبق قياس IFRS 5 من تاريخ الانتقال؛ وتقيَّم الشروط عند ذلك التاريخ" },
        { en: "BORROWING COSTS — apply IAS 23 prospectively from the transition date; pre-transition capitalisation is not revisited", ar: "تكاليف الاقتراض — يطبق IAS 23 من تاريخ الانتقال بالمستقبل؛ ولا يُعاد النظر فيما رُسمل قبل الانتقال" },
        { en: "EXTRACTION INDUSTRIES — E&E assets: previous-GAAP cost or fair value as deemed cost", ar: "الصناعات الاستخراجية — أصول الاستكشاف والتقييم: تكلفة النظام السابق أو القيمة العادلة كتكلفة مفترضة" },
        { en: "SERVICE CONCESSIONS & TRANSFERS OF ASSETS FROM CUSTOMERS — apply IFRIC 12 / IFRIC 18-style transition: earlier arrangements need not be fully reconstructed", ar: "الامتيازات الخدمية وتحويلات الأصول من العملاء — انتقال على طريقة IFRIC 12 / IFRIC 18: لا يلزم إعادة بناء الترتيبات الأقدم بالكامل" },
        { en: "IFRS 9 DESIGNATIONS — a previously recognised financial instrument may be designated at FVTPL or FVOCI as at 1 Jan of the first IFRS reporting period, based on the facts at that date", ar: "تسميات IFRS 9 — يجوز تسمية أداة مالية معترف بها سابقًا بـFVTPL أو FVOCI في ١ يناير من أول فترة تقرير وفق وقائع ذلك التاريخ" },
      ],
    },
    { kind: "h", text: { en: "Business combinations — the exemption that shapes everything", ar: "الاندماجات — الإعفاء الذي يشكّل كل شيء" } },
    {
      kind: "tree",
      root: { en: "Pre-transition combinations accounted under old GAAP", ar: "اندماجات سابقة للانتقال محاسبة وفق النظام القديم" },
      branches: [
        {
          when: { en: "Entity elects the exemption (almost universal)", ar: "تنتخب المنشأة الإعفاء (شبه دائم)" },
          then: { en: "Do NOT restate — keep old-GAAP carrying amounts as the IFRS opening figures; goodwill stays 'as is', including impairment previously recognised; goodwill written off under old GAAP does NOT reappear", ar: "لا إعادة عرض — تبقى أرقام النظام السابق أرقامًا افتتاحية؛ والشهرة كما هي بما فيها انخفاضها المعترف به سابقًا؛ والشهرة المشطوبة سابقًا لا تعود", red: true },
        },
        {
          when: { en: "The exemption is applied — but an old-GAAP goodwill impairment was recorded", ar: "يُطبق الإعفاء — لكن كان قد سُجل انخفاض سابق للشهرة" },
          then: { en: "The impairment stands: goodwill appears net of it; uniform accounting policies start from the transition date going forward", ar: "يبقى الانخفاض: تظهر الشهرة صافية منه؛ وتبدأ السياسات الموحدة من تاريخ الانتقال قُدمًا", red: true },
        },
        {
          when: { en: "Exemption not elected", ar: "عدم انتخاب الإعفاء" },
          then: { en: "Restate every historical combination with IFRS 3 fair values — enormous effort, rarely chosen", ar: "أعد عرض كل اندماج تاريخي بالقيم العادلة وفق IFRS 3 — جهد هائل ونادرًا ما يُختار" },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The exemption freezes the acquisition-date accounting but NOT the years after it: from the transition date the acquirer applies IFRS policies to the acquired assets (hence the deemed-cost elections, which let the PPE of pre-transition acquisitions enter IFRS at a fair value that would otherwise require reconstructing every IFRS 3 step). NCI, step acquisitions and disposals of pre-transition subsidiaries are measured from the old-GAAP opening numbers — the loss-of-control machinery of IFRS 10 runs on those frozen figures.",
        ar: "يثبّت الإعفاء محاسبة تاريخ الاستحواذ لا السنين التي تلته: فمن تاريخ الانتقال يطبق المستحوذ سياسات IFRS على الأصول المقتناة (ومن هنا انتخابات التكلفة المفترضة التي تدخل ممتلكات اندماجات ما قبل الانتقال بقيمة عادلة كانت ستتطلب لولاها إعادة بناء كل خطوة من IFRS 3). والحصص غير المسيطرة والاستحواذ المتدرج وتخرد التابعات السابقة تقاس من الأرقام الافتتاحية القديمة — فآلية فقد السيطرة في IFRS 10 تجري على تلك الأرقام المجمّدة.",
      },
    },
    { kind: "h", text: { en: "Deemed cost elections", ar: "انتخابات التكلفة المفترضة" } },
    {
      kind: "tree",
      root: { en: "Old-GAAP carrying amount at transition differs wildly from IFRS measurement", ar: "القيمة الدفترية القديمة وقت الانتقال تختلف جوهريًا عن القياس وفق IFRS" },
      branches: [
        {
          when: { en: "Fair value measured at (or near) the transition date", ar: "قيمة عادلة مقيسة عند (أو قرب) تاريخ الانتقال" },
          then: { en: "Use FAIR VALUE AS DEEMED COST — depreciation runs from that FV over the remaining life; one election, whole asset classes", ar: "استخدم القيمة العادلة كتكلفة مفترضة — والإهلاك من تلك العادلة على العمر المتبقي؛ انتخاب واحد لفئات الأصول كاملة", red: true },
        },
        {
          when: { en: "A previous-GAAP revaluation exists that was broadly comparable to fair value at its date (an old IAS 16-style revaluation)", ar: "توجد إعادة تقييم قديمة مقاربة للقيمة العادلة وقتها (على طريقة IAS 16)" },
          then: { en: "May be used as deemed cost — re-dating an honest valuation beats re-valuing everything", ar: "يجوز استخدامها كتكلفة مفترضة — فإعادة تأريخ تقييم نزيه أفضل من إعادة تقييم كل شيء", red: true },
        },
        {
          when: { en: "Neither is available", ar: "لا هذا ولا ذاك متاح" },
          then: { en: "Old carrying amount, restated per IFRS — full reconstruction of cost, depreciation and impairment history", ar: "القيمة الدفترية القديمة معدلة وفق IFRS — إعادة بناء كاملة لتاريخ التكلفة والإهلاك والانخفاض" },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The election is by class of asset, once. Two specialty notes: INVESTMENT PROPERTY may use fair value at the transition date as deemed cost — and then simply CONTINUE under the IAS 40 fair-value model (the transition and the ongoing model meet perfectly). RIGHT-OF-USE assets and intangibles with an observable market follow the same fair-value route. The cost alternative: IFRS 3-style cost (share of the acquiree's fair-value net assets) may also be deemed cost for interests that arrived via business combinations.",
        ar: "الانتخاب يكون لفئة الأصول مرة واحدة. وملاحظتان متخصصتان: العقارات الاستثمارية يجوز أن تستخدم القيمة العادلة عند الانتقال تكلفةً مفترضة — ثم تواصل ببساطة بنموذج IAS 40 العدالي (يلتقي الانتقال والنموذج اللاحق التقاءً تامًا). وأصول الحق في الاستخدام والأصول غير الملموسة ذات السوق الملحوظ تسلك الطريق العدالي ذاته. والبديل: يجوز أيضًا أن تكون تكلفة على طريقة IFRS 3 (الحصة من صافي أصول المقتنى بالقيمة العادلة) تكلفةً مفترضة للحصص التي جاءت عبر الاندماجات.",
      },
    },
    {
      kind: "example",
      title: { en: "Deemed cost in action", ar: "التكلفة المفترضة عمليًا" },
      lines: [
        { en: "Plant bought Jan 2016 for 5,000 (10-year life). Transition date 1 Jan 2025; old-GAAP carrying amount 1,500. Fair value at transition 3,200", ar: "آلة اشتريت يناير ٢٠١٦ بمبلغ ٥٬٠٠٠ (عمر ١٠ سنوات). تاريخ الانتقال ١ يناير ٢٠٢٥؛ القيمة الدفترية القديمة ١٬٥٠٠؛ والقيمة العادلة ٣٬٢٠٠" },
        { en: "Election: FV as deemed cost → carrying at 1 Jan 2025 = 3,200", ar: "اختيار القيمة العادلة تكلفةً مفترضة ← القيمة الدفترية = ٣٬٢٠٠" },
        { en: "Remaining life reassessed: 8 years → depreciation = 3,200 ÷ 8 = 400/yr (vs 500 under old GAAP)", ar: "إعادة تقدير العمر المتبقي: ٨ سنوات ← الإهلاك = ٣٬٢٠٠ ÷ ٨ = ٤٠٠ سنويًا (مقابل ٥٠٠ سابقًا)" },
        { en: "No IFRS 15 restatement of revenue before the transition date — but OPEN contract liabilities must be built at the transition date", ar: "لا إعادة عرض للإيراد قبل الانتقال — لكن تُبنى التزامات العقود القائمة بتاريخ الانتقال" },
      ],
    },
    { kind: "h", text: { en: "The opening balance sheet — journal set", ar: "ميزانية الافتتاح — مجموعة القيود" } },
    {
      kind: "journal",
      title: { en: "Opening-statement-of-financial-position adjustments", ar: "تسويات قائمة المركز المالي الافتتاحية" },
      rows: [
        { dr: { en: "PPE (deemed-cost uplift 3,200 − 1,500 = 1,700)", ar: "ممتلكات (زيادة التكلفة المفترضة ٣٬٢٠٠ − ١٬٥٠٠ = ١٬٧٠٠)" }, cr: { en: "Retained earnings / revaluation-side equity", ar: "أرباح محتجزة/حقوق ملكية جانب إعادة التقييم" }, red: true },
        { dr: { en: "Retained earnings 2,100", ar: "أرباح محتجزة ٢٬١٠٠" }, cr: { en: "Defined benefit obligation — newly measured under IAS 19", ar: "التزام مزايا محددة — مقيس حديثًا وفق IAS 19" }, red: true },
        { dr: { en: "Development expenditure 800 (was expensed under old GAAP — IAS 38 criteria met)", ar: "مصروفات تطوير ٨٠٠ (كانت مصروفًا — معايير IAS 38 متحققة)" }, cr: { en: "Retained earnings", ar: "أرباح محتجزة" } },
        { dr: { en: "Right-of-use asset (IFRS 16 deemed new lease)", ar: "أصل الحق في الاستخدام (إيجار جديد مفترض وفق IFRS 16)" }, cr: { en: "Lease liability at the transition date", ar: "التزام إيجار عند تاريخ الانتقال" } },
        { dr: { en: "Brand (internally generated) 300", ar: "علامة تجارية (مولدة داخليًا) ٣٠٠" }, cr: { en: "Retained earnings — derecognition", ar: "أرباح محتجزة — استبعاد" }, red: true },
        { dr: { en: "Retained earnings (deferred tax on the net adjustments, 25%)", ar: "أرباح محتجزة (ضريبة مؤجلة على صافي التعديلات، ٢٥٪)" }, cr: { en: "Deferred tax liability / asset", ar: "التزام/أصل ضريبة مؤجلة" } },
      ],
    },
    {
      kind: "journal",
      title: { en: "Business-combination reconstruction (only if the exemption is NOT elected)", ar: "إعادة بناء الاندماج (فقط عند عدم انتخاب الإعفاء)" },
      rows: [
        { dr: { en: "PPE / intangibles — IFRS 3 fair-value uplifts at the (re-stated) acquisition date", ar: "ممتلكات/غير ملموسة — زيادات القيمة العادلة وفق IFRS 3 عند تاريخ الاستحواذ (المعاد)" }, cr: { en: "Goodwill (remeasured)", ar: "الشهرة (معاد قياسها)" } },
        { dr: { en: "Goodwill (from the old-GAAP amount to the IFRS 3 amount)", ar: "الشهرة (من مقدار النظام القديم إلى مقدار IFRS 3)" }, cr: { en: "Retained earnings / NCI", ar: "أرباح محتجزة/حصة غير مسيطرة" }, red: true },
        { dr: { en: "Retained earnings — expensed development now qualifying under IAS 38", ar: "أرباح محتجزة — تطوير مكلف سابقًا يستوفي IAS 38 الآن" }, cr: { en: "Development asset", ar: "أصل تطوير" } },
        { cr: { en: "Every provisional old-GAAP amount is reopened — this is why almost nobody declines the exemption", ar: "كل مقدار مؤقت قديم يُفتح من جديد — ولهذا لا يرفض الإعفاء أحد تقريبًا" }, red: true },
      ],
    },
    { kind: "h", text: { en: "The reconciliations — the evidence of the transition", ar: "التسويات — دليل الانتقال" } },
    {
      kind: "p",
      text: {
        en: "The first IFRS statements must explain the transition to stakeholders — the IAS 8-style disclosures are NOT enough. Three reconciliations are mandatory: (1) equity as reported under old GAAP vs restated IFRS equity at the date of transition AND at the end of the last old-GAAP period; (2) profit or loss under old GAAP vs restated IFRS profit for the last old-GAAP period; (3) adjustments to every line item presented, if relevant. If the entity recognised or reversed impairments at transition, identify them separately.",
        ar: "يجب أن تشرح القوائم الأولى الانتقال لأصحاب المصالح — ولا تكفي إفصاحات IAS 8. ثلاث تسويات إلزامية: (١) حقوق الملكية وفق النظام القديم مقابل المعدلة وفق IFRS بتاريخ الانتقال وفي نهاية آخر فترة قديمة؛ (٢) الربح أو الخسارة بالطريقة ذاتها عن آخر فترة قديمة؛ (٣) تسويات كل بند معروض عند اللزوم. وإذا اعتُمد أو رُد انخفاض قيمة وقت الانتقال فيُبيَّن منفصلًا.",
      },
    },
    {
      kind: "formula",
      title: { en: "The reconciliation engine", ar: "محرك التسوية" },
      lines: [
        { en: "IFRS equity at the transition date = old-GAAP equity + fair-value/deemed-cost uplifts + newly recognised liabilities (DBO, leases, provisions) − derecognised assets ± tax effects", ar: "حقوق الملكية وفق IFRS عند الانتقال = حقوق النظام القديم + زيادات العادلة/التكلفة المفترضة + التزامات معترف بها حديثًا (مزايا محددة، إيجارات، مخصصات) − أصول مستبعدة ± آثار ضريبية" },
        { en: "IFRS profit (last old-GAAP year) = old-GAAP profit − depreciation change from deemed cost − DBO interest cost ± amortisation of newly capitalised items", ar: "الربح وفق IFRS (آخر سنة قديمة) = ربح النظام القديم − تغير الإهلاك من التكلفة المفترضة − فائدة التزام المزايا ± استنفاد المرمل حديثًا" },
        { en: "Impairment adjustments at transition (both directions) are listed separately inside each reconciliation", ar: "تعديلات الانخفاض عند الانتقال (في الاتجاهين) تُعرض منفصلة داخل كل تسوية" },
      ],
    },
    {
      kind: "example",
      title: { en: "Equity reconciliation — the numbers tie", ar: "تسوية حقوق الملكية — الأرقام متسقة" },
      lines: [
        { en: "Old-GAAP equity at 1 Jan 2025 = 12,400", ar: "حقوق الملكية القديمة في ١ يناير ٢٠٢٥ = ١٢٬٤٠٠" },
        { en: "+ deemed-cost PPE uplift 1,700 − DBO 2,100 + capitalised development 800 − derecognised brand 300 − deferred tax on net adjustments 700", ar: "+ زيادة الممتلكات بالتكلفة المفترضة ١٬٧٠٠ − التزام المزايا ٢٬١٠٠ + تطوير مرسل ٨٠٠ − علامة مستبعدة ٣٠٠ − ضريبة مؤجلة على صافي التعديلات ٧٠٠" },
        { en: "= IFRS equity at transition = 12,400 + 1,700 − 2,100 + 800 − 300 − 700 = 11,800", ar: "= حقوق الملكية وفق IFRS عند الانتقال = ١٢٬٤٠٠ + ١٬٧٠٠ − ٢٬١٠٠ + ٨٠٠ − ٣٠٠ − ٧٠٠ = ١١٬٨٠٠" },
        { en: "The same table is repeated at 31 Dec 2025 (last old-GAAP year-end) — two columns, one story", ar: "ويُعاد الجدول ذاته في ٣١ ديسمبر ٢٠٢٥ (نهاية آخر سنة قديمة) — عمودان لقصة واحدة" },
      ],
    },
    {
      kind: "example",
      title: { en: "Profit reconciliation — the P&L mirror", ar: "تسوية الربح — مرآة الأرباح والخسائر" },
      lines: [
        { en: "Old-GAAP profit for 2025 = 5,000", ar: "ربح النظام القديم عن ٢٠٢٥ = ٥٬٠٠٠" },
        { en: "+ development amortisation no longer expensed 100 − DBO interest cost 210 − extra depreciation on the deemed-cost uplift (1,700 ÷ 8 ≈ 212)", ar: "+ استنفاد التطوير لم يعد مصروفًا ١٠٠ − فائدة التزام المزايا ٢١٠ − إهلاك إضافي على زيادة التكلفة المفترضة (١٬٧٠٠ ÷ ٨ ≈ ٢١٢)" },
        { en: "= IFRS profit for 2025 ≈ 4,678 — the flow-through of the opening adjustments into the year", ar: "= الربح وفق IFRS عن ٢٠٢٥ ≈ ٤٬٦٧٨ — انسياب تعديلات الافتتاح داخل السنة" },
      ],
    },
    { kind: "h", text: { en: "Interim reporting in the first year", ar: "التقارير المرحلية في السنة الأولى" } },
    {
      kind: "p",
      text: {
        en: "IAS 34 in the first IFRS year adds a heavy layer: reconciliation to the last old-GAAP interim period for each interim date, restated interim P/L, and the equity/profit reconciliations repeated per interim. Entities usually time adoption to the start of a calendar year so interims align; otherwise the first IFRS interim is compared with an old-GAAP interim that no longer exists in IFRS form — the bridge disclosures carry that burden.",
        ar: "يضيف تطبيق IAS 34 في سنة IFRS الأولى طبقة ثقيلة: تسوية مع آخر فترة مرحلية قديمة لكل تاريخ مرحلي، وقائمة مرحلية معدلة، وتكرار تسويتي حقوق الملكية والربح لكل مرحلة. ولذلك توقت المنشآت التبني مع بداية السنة الميلادية عادة؛ وإلا قورنت أول مرحلة وفق IFRS بمرحلة قديمة لم تعد قائمة بصيغة IFRS — فتحمل إفصاحات الجسر ذلك العبء.",
      },
    },
    { kind: "h", text: { en: "Interaction with the big standards", ar: "التفاعل مع المعايير الكبرى" } },
    {
      kind: "p",
      text: {
        en: "IFRS 15: revenue is IFRS-accounted from the transition date only — completed contracts are not reopened, but open contracts get their contract assets/liabilities built at that date. IFRS 16: the modified-retrospective route (deemed new lease, discount rate at the date of initial application) is the practical path for most adopters. IFRS 9: classification, embedded derivatives and designations are assessed at the start of the first IFRS reporting period; ECL provisioning starts there too. IFRS 3: only post-transition combinations get full IFRS 3 treatment. IFRS 17: insurers use IFRS 17's own transition routes for existing contracts.",
        ar: "IFRS 15: يُحاسب الإيراد وفق IFRS من تاريخ الانتقال فقط — لا يُفتح ما اكتمل من العقود، لكن العقود القائمة تُبنى لها أصول والتزامات العقد عند ذلك التاريخ. وIFRS 16: المسار الرجعي المعدل (إيجار جديد مفترض ومعدل خصم عند تاريخ التطبيق الأول) هو الطريق العملي لمعظم المتبنين. وIFRS 9: التصنيف والمشتقات المضمنة والتسميات تقيَّم عند بداية أول فترة تقرير؛ وهناك تبدأ مخصصات الخسائر الائتمانية المتوقعة أيضًا. وIFRS 3: الاندماجات اللاحقة للانتقال وحدها تلقى المعالجة الكاملة. وIFRS 17: تستخدم شركات التأمين مسارات انتقال IFRS 17 ذاتها للعقود القائمة.",
      },
    },
    {
      kind: "tree",
      root: { en: "New information about a pre-transition estimate arrives between the transition date and the end of the first IFRS period", ar: "معلومة جديدة عن تقدير سابق للانتقال تصل بين تاريخ الانتقال ونهاية أول فترة" },
      branches: [
        {
          when: { en: "The information reflects conditions that AROSE AFTER the transition date", ar: "المعلومة تعكس ظروفًا نشأت بعد تاريخ الانتقال" },
          then: { en: "A change in estimate — IAS 8 prospective treatment in the first IFRS period", ar: "تغير تقدير — معالجة مستقبلية وفق IAS 8 في أول فترة", red: true },
        },
        {
          when: { en: "The information EXISTED at the transition date but was not incorporated (an error of the old estimate)", ar: "المعلومة كانت قائمة عند الانتقال لكنها لم تُدمج (خطأ التقدير القديم)" },
          then: { en: "Adjust the opening balance sheet estimate — retrospective correction", ar: "عدّل تقدير ميزانية الافتتاح — تصحيح رجعي", red: true },
        },
        {
          when: { en: "The old estimate was reasonable on the information available then (even though it now looks wrong)", ar: "كان التقدير القديم معقولًا بمعلومات حينها (ولو بدا اليوم خاطئًا)" },
          then: { en: "KEEP it — hindsight is banned; the difference plays out prospectively", ar: "أبقِه — الإدراك المتأخر ممنوع؛ والفرق يظهر مستقبلًا", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Disclosures checklist", ar: "قائمة الإفصاحات" } },
    {
      kind: "list",
      items: [
        { en: "Confirmation the statements are the entity's FIRST IFRS statements + the transition date", ar: "إقرار بأنها أول قوائم وفق IFRS + تاريخ الانتقال" },
        { en: "The basis: previous GAAP, and how the move affected the reported position, performance and cash flows", ar: "الأساس: النظام السابق وكيف أثّر الانتقال في المركز المالي والأداء والتدفقات" },
        { en: "The three reconciliations + impairment adjustments + current & deferred tax effects of each adjustment", ar: "التسويات الثلاث + تعديلات انخفاض القيمة + الأثر الضريبي الجاري والمؤجل لكل تعديل" },
        { en: "Every optional exemption elected, with the reasons (Appendix D item by item)", ar: "كل إعفاء اختياري منتقى وأسبابه (بندًا بندًا من الملحق D)" },
        { en: "Changes in accounting policies or estimates AFTER the opening balance sheet but before the first statements", ar: "التغيرات في السياسات أو التقديرات بعد ميزانية الافتتاح وقبل القوائم الأولى" },
        { en: "Interim layers: per-interim reconciliations if IAS 34 reporting runs during the first year", ar: "طبقات مرحلية: تسويات لكل مرحلة إن جرى تطبيق IAS 34 خلال السنة الأولى" },
      ],
    },
    { kind: "h", text: { en: "The classic exam traps", ar: "فخاخ الامتحان الكلاسيكية" } },
    {
      kind: "list",
      items: [
        { en: "Exemptions are OPTIONAL; exceptions are MANDATORY — mixing the two words loses the easiest mark in the paper", ar: "الإعفاءات اختيارية والاستثناءات إلزامية — خلط الكلمتين يهدر أسهل درجة في الورقة" },
        { en: "Hindsight: re-estimating an old estimate with today's knowledge is banned — only genuinely new or IFRS-required adjustments move", ar: "الإدراك المتأخر: إعادة تقدير تقدير قديم بمعرفة اليوم ممنوعة — لا يتحرك إلا الجديد حقيقةً أو ما يفرضه المعيار" },
        { en: "The two dates: derecognition/hedge/classification run at the FIRST-Ifrs-period start, deemed cost and BC exemptions at the TRANSITION date", ar: "التاريخان: الاستبعاد والتغطية والتصنيف تجري عند بداية أول فترة، والتكلفة المفترضة وإعفاء الاندماج عند تاريخ الانتقال" },
        { en: "Goodwill written off under old GAAP stays off; goodwill impairment previously recognised stays recognised", ar: "الشهرة المشطوبة قديمًا تبقى مشطوبة؛ وانخفاضها المعترف به سابقًا يبقى معترفًا به" },
        { en: "Cumulative translation differences deemed ZERO — a later disposal recycles only post-transition amounts", ar: "فروق الترجمة التراكمية تعتبر صفرًا — والتخرد اللاحق يعيد تدوير ما بعد الانتقال فقط" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The latest-versions rule: apply the IFRSs in force at the FIRST reporting date retrospectively — you do NOT apply the standards of 2010 to a 2025 transition. This is why early-adopted changes seem to 'arrive' with the transition.",
        ar: "قاعدة أحدث الإصدارات: تطبق المعايير السارية في تاريخ التقرير الأول بأثر رجعي — فلا تُطبق معايير ٢٠١٠ على انتقال عام ٢٠٢٥؛ ولهذا يبدو أن التعديلات الحديثة «تصل» مع الانتقال.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Write the elections DOWN in the exam: an exemption not stated is an exemption not granted. The marker looks for 'the entity MAY elect…' before any simplified number you present.",
        ar: "دوّن الانتخابات في الامتحان: فالإعفاء غير المصرح به إعفاء غير ممنوح. ويبحث المصحح عن «يجوز للمنشأة انتخاب…» قبل أي رقم مبسط تعرضه.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Only the FIRST set counts. Once IFRS statements are issued with a compliance statement, the entity can never be a first-time adopter again — even after a gap year.",
        ar: "المجموعة الأولى وحدها تُحتسب. فمتى صدرت قوائم بإقرار الالتزام بالمعايير فلا عودة لصفة المتبني الأول — ولو بعد سنة انقطاع.",
      },
    },
    { kind: "h", text: { en: "Transition & effective dates", ar: "الانتقال وتواريخ السريان" } },
    {
      kind: "p",
      text: {
        en: "IFRS 1 was issued 2003, replacing SIC-8 (which had demanded full retrospective restatement with no relief). The cost of that no-relief rule produced the 2005 round of D-exemptions, the 2008-2010 waves aligned it with IFRS 3 (2008) and IFRS 9 (2010 'additional exemptions'), and the current consolidated version is effective 1 Jan 2011 — amended thereafter whenever a new standard lands (IFRS 16, IFRS 17 and the IFRS 9 designation items each re-touched it).",
        ar: "صدر IFRS 1 عام ٢٠٠٣ محل SIC-8 الذي كان يفرض إعادة عرض رجعية كاملة بلا تخفيف. وأفضت كلفة تلك القاعدة إلى جولة إعفاءات الملحق D عام ٢٠٠٥، ثم موجات ٢٠٠٨-٢٠١٠ التي واءمته مع IFRS 3 (٢٠٠٨) وIFRS 9 (إعفاءات ٢٠١٠ الإضافية)، والنسخة المجمعة الحالية سارية من ١ يناير ٢٠١١ — تعدل بعد ذلك كلما هبط معيار جديد (فـIFRS 16 وIFRS 17 وبنود تسمية IFRS 9 لمست كلٌّ منها المعيار من جديد).",
      },
    },
    {
      kind: "p",
      text: {
        en: "Every new standard carries its own IFRS 1 paragraph: when an entity becomes a first-time adopter AFTER a new standard's effective date, it applies that standard's own transition options within its IFRS 1 opening balance sheet. That is why a 2026 adopter meets IFRS 16's deemed-lease package, IFRS 17's transition routes and IFRS 9's designation date all inside the same opening work-paper.",
        ar: "كل معيار جديد يحمل فقرته الخاصة بـIFRS 1: فحين تصبح المنشأة متبنية أول بعد تاريخ سريان معيار جديد، تطبق خيارات انتقال ذلك المعيار داخل ميزانية افتتاحها وفق IFRS 1. ولهذا يلتقي متبني ٢٠٢٦ بحزمة الإيجار المفترض في IFRS 16 ومسارات انتقال IFRS 17 وتاريخ تسمية IFRS 9 داخل ورقة عمل الافتتاح ذاتها.",
      },
    },
  ],
}
