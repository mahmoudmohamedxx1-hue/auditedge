/** IAS 19 — Employee Benefits */

import type { Standard } from "../types"

export const IAS_19: Standard = {
  code: "IAS 19",
  title: { en: "Employee Benefits", ar: "مزايا العاملين" },
  topic: "revenue",
  effective: { en: "Effective 1 Jan 2013 · amended 2014 (funding & plan amendments)", ar: "سارٍ من ١ يناير ٢٠١٣ · معدل ٢٠١٤" },
  blocks: [
    {
      kind: "p",
      text: {
        en: "IAS 19 prescribes the accounting for every form of employee benefit except share-based payment (IFRS 2 owns that). The recognition principle is a single sentence: recognise the expense when the EMPLOYEE renders the service that earns the benefit — the entity records a liability (or a prepayment) for the unsettled part. Four categories, each with its own machinery.",
        ar: "يحدد IAS 19 محاسبة كل صور مزايا العاملين عدا الدفع بالأسهم (فـIFRS 2 يملك ذلك). ومبدأ الاعتراف جملة واحدة: يحمَّل المصروف عندما يؤدي العامل الخدمة المكتسبة للمنفعة — مع إثبات التزام (أو مدفوع مقدما) عن الجزء غير المسوى. أربع فئات لكل منها آلتها.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The whole standard is one sentence: the EMPLOYEE'S SERVICE is the event — the benefit follows it, discounted when it settles late, remeasured when the promise's economics move.",
        ar: "المعيار كله جملة واحدة: خدمة العامل هي الحدث — والمنفعة تتبعها، مخفضة إن تأخرت تسويتها، معادة القياس كلما تحرك اقتصاد الوعد.",
      },
    },
    { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
    {
      kind: "p",
      text: {
        en: "Short-term benefits arrive within 12 months of the service and need no discounting; everything later needs the time value of money; defined promises additionally need the actuarial engine. The standard covers all four categories of benefit and every employee, full or part-time, permanent or casual — the payroll's shape does not matter, only the promise's shape.",
        ar: "منافع القصيرة تصل خلال ١٢ شهرًا من الخدمة ولا تلزمها خصمًا؛ وكل ما بعدها يلزمه القيمة الزمنية للنقد؛ والوعود المحددة تضيف إليها المحرك الاكتواري. ويغطي المعيار الفئات الأربع وكل عامل — دوامًا كاملًا أو جزئيًا، دائمًا أو مؤقتًا — فشكل جدول الأجور لا يهم، إنما شكل الوعد.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Share-based payment → IFRS 2 (equity-settled awards), including the group's own shares", ar: "الدفع بالأسهم ← IFRS 2 (مكافآت تسوى بأسهم)، بما فيها أسهم المجموعة ذاتها" },
        { en: "Retirement benefit plan financial statements → IAS 26 (the plan's own reporting)", ar: "القوائم المالية لصناديق مزايا التقاعد ← IAS 26 (تقارير الصندوق ذاته)" },
        { en: "The plan's investments → IFRS 9 / IFRS 17 (financial instruments, insurance) — never the employer's book", ar: "استثمارات الصندوق ← IFRS 9 / IFRS 17 — لا في دفاتر صاحب العمل أبدًا" },
        { en: "Employer payroll taxes & social security → IAS 19 short-term benefits (they ride the salaries)", ar: "ضرائب الأجور والتأمينات على صاحب العمل ← منافع قصيرة الأجل وفق IAS 19 (تركب الأجور)" },
        { en: "Related-party disclosure of the plan and KMP pensions → IAS 24", ar: "الإفصاح عن الأطراف ذوي العلاقة (الصندوق ومعاشات الإدارة العليا) ← IAS 24" },
      ],
    },
    { kind: "h", text: { en: "The four benefit categories", ar: "الفئات الأربع للمزايا" } },
    {
      kind: "tree",
      root: { en: "Which category is the benefit?", ar: "أي فئة هذه المنفعة؟" },
      branches: [
        {
          when: { en: "SHORT-TERM — due within 12 months of service (salaries, social security, paid leave, bonuses, profit-share, medical); undiscounted", ar: "قصيرة الأجل — تُسوى خلال ١٢ شهرًا من الخدمة (أجور، تأمينات، إجازات مدفوعة، مكافآت، مشاركة أرباح، طبية)؛ بلا خصم" },
          then: { en: "Accrue when the service is rendered — the simplest case", ar: "تستحق عند أداء الخدمة — أبسط الحالات", red: true },
        },
        {
          when: { en: "POST-EMPLOYMENT — after retirement: pensions, retiree medical, life cover", ar: "ما بعد التوظيف — بعد التقاعد: معاشات، طبية للمتقاعدين، تأمين حياة" },
          then: { en: "Defined CONTRIBUTION (a fixed pot) vs Defined BENEFIT (a promise) — the giant split below", ar: "اشتراكات محددة مقابل مزايا محددة — الانقسام الكبير أدناه", red: true },
        },
        {
          when: { en: "OTHER LONG-TERM — beyond 12 months: long-service leave, long-term disability, sabbaticals, profit-share paid ≥ 12 months later", ar: "طويلة الأجل أخرى — بعد ١٢ شهرًا: إجازات طويلة الخدمة، عجز طويل، إجازات بحثية، أرباح تدفع لاحقًا" },
          then: { en: "DISCOUNTED actuarial-style measurement, remeasured at each reporting date — a mini defined-benefit engine whose remeasurements hit P&L", ar: "قياس اكتواري مخصوم يعاد في كل تقرير — محرك مزايا محددة مصغر تضرب إعادة قياسه الأرباح", red: true },
        },
        {
          when: { en: "TERMINATION — end-of-service lump sums, redundancy", ar: "إنهاء الخدمة — مكافآت نهاية الخدمة، تسريح" },
          then: { en: "Recognise the FULL liability when the entity is DEMONSTRABLY COMMITTED (detailed plan announced) — earlier than IAS 37's restructuring trigger", ar: "يعترف بالالتزام كاملًا عند الالتزام الواضح (خطة مفصلة معلنة) — أبكر من محفز إعادة الهيكلة في IAS 37", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Category drives machinery: short-term is undiscounted and accrual-simple; post-employment splits into defined CONTRIBUTION (a fixed pot — the investment risk is the employee's) and defined BENEFIT (the employer underwrites the promise); other long-term reuses the DB engine but sends its remeasurements to P&L; termination waits for demonstrable commitment. Misclassify the category and the whole accounting follows it into the ditch.",
        ar: "الفئة تقود الآلة: القصيرة بلا خصم وبسيطة الاستحقاق؛ وما بعد التوظيف ينشطر إلى اشتراكات محددة (وعاء ثابت — مخاطرة الاستثمار على العامل) ومزايا محددة (صاحب العمل يضمن الوعد)؛ والطويلة الأجل الأخرى تعيد استخدام محرك المزايا المحددة لكن ترسل إعادة قياسها إلى الأرباح؛ والإنهاء ينتظر الالتزام الواضح. وأخطئ التصنيف تتبعك المحاسبة كلها إلى الحفرة.",
      },
    },
    { kind: "h", text: { en: "Short-term subtleties", ar: "دقائق القصيرة الأجل" } },
    {
      kind: "list",
      items: [
        { en: "PAID ABSENCES: vest at the reporting date (holiday earned) or carry forward — accrue the expected amount for the UNUSED entitlement that vests; non-vesting carry-forwards accrue only if the entity expects payment", ar: "الغيابات المدفوعة: تستحق بتاريخ التقرير (إجازة مكتسبة) أو تُرحَّل — يستحق المتوقع من الرصيد غير المستخدم المتحقق" },
        { en: "PROFIT-SHARING & BONUSES: recognise when (a) the entity has a legal/constructive obligation, and (b) a reliable estimate exists — which requires the FORMAL APPROVED plan before the reporting date; estimates of turnover and pay rates fold in", ar: "مشاركة الأرباح والمكافآت: تعترف عند وجود التزام قانوني/كلي وتقدير موثوق — ويشترط خطة رسمية معتمدة قبل تاريخ التقرير، مع طي تقديرات دوران العاملين ومعدلات الأجور" },
        { en: "The expected cost of ACCUMULATING compensated absences — including holiday bonuses riding the accrual — is measured at the salary rates expected, not today's", ar: "الكلفة المتوقعة للإجازات المتراكمة — بما فيها مكافآت الإجازات ضمن الاستحقاق — تقاس بمعدلات الأجور المتوقعة لا الراهنة" },
        { en: "Benefits PAID before the service is rendered → a PREPAYMENT, released as the employee earns", ar: "المنافع المدفوعة قبل أداء الخدمة ← مدفوع مقدما يستنزف مع اكتساب العامل" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Short-term accrual entries", ar: "قيود استحقاق القصيرة الأجل" },
      rows: [
        { dr: { en: "Staff cost — salaries (P&L)", ar: "مصروف عاملين — أجور (بالأرباح)" }, cr: { en: "Salaries payable + cash (when paid)", ar: "أجور مستحقة + النقد (عند الدفع)" } },
        { dr: { en: "Staff cost — holiday earned (P&L)", ar: "مصروف عاملين — إجازة مكتسبة (بالأرباح)" }, cr: { en: "Provision for paid absences", ar: "مخصص الغيابات المدفوعة" }, red: true },
        { dr: { en: "Bonus & profit-share expense", ar: "مصروف مكافآت ومشاركة أرباح" }, cr: { en: "Provision (approved plan + reliable estimate before year-end)", ar: "مخصص (خطة معتمدة + تقدير موثوق قبل نهاية السنة)" }, red: true },
        { dr: { en: "Prepayment", ar: "مدفوع مقدما" }, cr: { en: "Staff cost — benefits paid before service", ar: "مصروف عاملين — منافع مدفوعة قبل الخدمة" } },
      ],
    },
    {
      kind: "example",
      title: { en: "The holiday accrual arithmetic", ar: "حساب استحقاق الإجازات" },
      lines: [
        { en: "100 employees each with 5 unused holiday days at year-end; the daily wage (with riding costs) is 200", ar: "١٠٠ عامل لكل منهم ٥ أيام إجازة غير مستخدمة نهاية السنة؛ والأجر اليومي (بتحملاته المرافقة) ٢٠٠" },
        { en: "Gross accrual = 100 × 5 × 200 = 100,000 — recognised because the entitlement VESTS (or carries forward vesting)", ar: "الاستحقاق الإجمالي = ١٠٠ × ٥ × ٢٠٠ = ١٠٠٬٠٠٠ — يعترف به لأن الحق مكتسب (أو مرحّلًا مكتسبًا)" },
        { en: "Past pattern: 10% of days lapse unused → the expected settlement is 90,000 (the obligation is measured at the EXPECTED cost)", ar: "نمط سابق: ١٠٪ من الأيام تسقط دون استخدام ← التسوية المتوقعة ٩٠٬٠٠٠ (فالالتزام يقاس بالكلفة المتوقعة)" },
        { en: "A next-year pay rise does NOT touch a short-term accrual — that rate effect belongs to long-term benefit measurement", ar: "زيادةُ أجور السنة القادمة لا تمس استحقاق القصيرة — فأثر المعدل ذاك ملك قياس المنافع طويلة الأجل" },
      ],
    },
    { kind: "h", text: { en: "The pension split", ar: "تقسيم المعاشات" } },
    {
      kind: "tree",
      root: { en: "Post-employment plan", ar: "خطة ما بعد التوظيف" },
      branches: [
        {
          when: { en: "DEFINED CONTRIBUTION — fixed contributions into a fund; the entity's obligation ENDS with the payment", ar: "اشتراكات محددة — اشتراكات ثابتة لصندوق؛ وينتهي التزام المنشأة بالسداد" },
          then: { en: "Expense = contributions payable for the period. No balance-sheet liability beyond unpaid contributions — the INVESTMENT RISK is the employee's", ar: "المصروف = الاشتراكات المستحقة عن الفترة — ولا التزام بعدها؛ ومخاطرة الاستثمار على العامل", red: true },
        },
        {
          when: { en: "DEFINED BENEFIT — the entity underwrites the promise (final salary × years of service, a lump sum per service year)", ar: "مزايا محددة — المنشأة تضمن الوعد (آخر راتب × سنوات الخدمة، مبلغ إجمالي لكل سنة)" },
          then: { en: "The full actuarial engine: DBO, plan assets, service cost, net interest, remeasurements → OCI", ar: "المحرك الاكتواري الكامل: الالتزام وأصول الخطة وتكلفة الخدمة والفائدة الصافية وإعادة القياسات ← الدخل الشامل", red: true },
        },
        {
          when: { en: "Multi-employer plans: if the defined-benefit exposure cannot be identified → treat like defined contribution + disclose the exposure; state-sector plans judged 'defined benefit in substance' get full DB treatment", ar: "خطط متعددة أصحاب العمل: إن تعذر تحديد الانكشاف فعاملها كاشتراكات محددة مع الإفصاح؛ وما كان منها جوهريًا مزايا محددة يعامل بالمعالجة الكاملة" },
          then: { en: "Look for the 'mutual risk-sharing' clue in the scenario", ar: "ابحث عن تلميح تقاسم المخاطر في السيناريو", red: true },
        },
        {
          when: { en: "Group plans (an entity in the GROUP's own plan): DB accounting if the host contract gives the entity rights to refunds or contribution holidays", ar: "خطط المجموعة (منشأة ضمن خطة المجموعة ذاتها): معالجة المزايا المحددة إذا منح العقد حق استرداد أو إعفاء من اشتراكات" },
          then: { en: "Otherwise — DC treatment for that entity", ar: "وإلا فمعالجة اشتراكات محددة لتلك المنشأة", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Defined contribution is a clean exit: the expense equals the contributions payable for the period; once paid, the entity owes nothing more, and the fund's investment performance is the employee's affair. Only unpaid contributions sit on the balance sheet — and a promised REFUND or CONTRIBUTION HOLIDAY creates an asset only when the reduction in future contributions is virtually certain of being used.",
        ar: "الاشتراكات المحددة مخرج نظيف: المصروف يساوي الاشتراكات المستحقة عن الفترة؛ وبعد السداد لا تدين المنشأة بشيء، وأداء الصندوق الاستثماري شأن العامل. ولا يجلس في الميزانية إلا اشتراكات غير مسددة — ويخلق الوعد باسترداد أو إعفاء من اشتراكات أصلًا فقط حين يكون استيفاء تخفيض الاشتراكات المستقبلية شبه مؤكد.",
      },
    },
    {
      kind: "journal",
      title: { en: "Defined contribution — the whole story", ar: "الاشتراكات المحددة — القصة كاملة" },
      rows: [
        { dr: { en: "DC expense (contributions for the period) 90", ar: "مصروف الاشتراكات المحددة (عن الفترة) ٩٠" }, cr: { en: "Cash 70 + accrued payroll 20", ar: "نقد ٧٠ + أجور مستحقة ٢٠" }, red: true },
        { dr: { en: "Prepaid contribution", ar: "اشتراك مدفوع مقدما" }, cr: { en: "Cash — paid in advance of the service", ar: "النقد — مدفوع قبل الخدمة" } },
        { cr: { en: "No actuarial machinery, no OCI — the fund's losses never touch the employer's P&L", ar: "لا آلية اكتوارية ولا دخل شامل — فخسائر الصندوق لا تمس أرباح صاحب العمل أبدًا" }, red: true },
      ],
    },
    { kind: "h", text: { en: "The defined-benefit engine — the sequence", ar: "محرك المزايا المحددة — التسلسل" } },
    {
      kind: "steps",
      items: [
        { en: "Re-measure the DBO with CURRENT actuarial assumptions (discount rate from high-quality corporate bonds, salary growth, mortality) at every reporting date", ar: "أعد قياس الالتزام بافتراضات اكتوارية جارية (معدل خصم من سندات شركات عالية الجودة، نمو أجور، وفيات) في كل تقرير" },
        { en: "Value the PLAN ASSETS at fair value", ar: "قيم أصول الخطة بالقيمة العادلة" },
        { en: "P&L: current service cost (+ any past service cost from amendments — immediately) + NET INTEREST on the net liability at the single discount rate", ar: "الأرباح: تكلفة الخدمة الجارية (+ أي تكلفة خدمات سابقة فورًا) + الفائدة الصافية على صافي الالتزام بالمعدل الوحيد" },
        { en: "OCI (never recycled): actuarial gains/losses + return on plan assets EXCLUDING the amount recognised in net interest", ar: "الدخل الشامل (بلا تدوير): الفروق الاكتوارية + عائد أصول الخطة عدا المقرر في الفائدة الصافية" },
        { en: "Cash moves: contributions in, benefits paid out — both adjust the net liability, never P&L", ar: "حركات النقد: اشتراكات دخولًا ومزايا خروجًا — كلاهما يعدل صافي الالتزام ولا يمس الأرباح" },
        { en: "Apply the ASSET CEILING to any surplus before recognising a net asset", ar: "طبق سقف الأصل على أي فائض قبل الاعتراف بأصل صافٍ" },
      ],
    },
    {
      kind: "formula",
      title: { en: "P&L vs OCI — who gets what", ar: "الأرباح مقابل الدخل الشامل — من يأخذ ماذا" },
      lines: [
        { en: "Net defined benefit LIABILITY (asset) = DBO − fair value of plan assets (adjusted for the asset ceiling)", ar: "صافي التزام المزايا = الالتزام بالمزايا المحددة − القيمة العادلة لأصول الخطة (بحدود سقف الأصل)" },
        { en: "P&L = current service cost + past service cost (immediately!) + net interest on the net liability/(asset) + gains/losses on settlements & curtailments", ar: "الأرباح = تكلفة الخدمة الجارية + تكلفة الخدمات السابقة (فورًا!) + الفائدة الصافية + مكاسب/خسائر التسويات والتقليص" },
        { en: "NET INTEREST = net defined benefit liability (asset) × DISCOUNT RATE (high-quality corporate bonds) — grows the gap at the market rate", ar: "الفائدة الصافية = صافي التزام المزايا × معدل الخصم (سندات شركات عالية الجودة) — تنمي الفجوة بمعدل السوق" },
        { en: "OCI (never recycled) = actuarial gains/losses (demographic/financial assumptions vs reality) + RETURN ON PLAN ASSETS excluding amounts in net interest", ar: "الدخل الشامل (لا يعاد تدويره أبدًا) = الفروق الاكتوارية + عائد أصول الخطة عدا ما في الفائدة الصافية" },
        { en: "ASSET CEILING: a plan SURPLUS is recognised only to the extent of the economic benefit available — refunds from the plan or reductions in future contributions", ar: "سقف الأصل: لا يعترف بفائض الخطة إلا بحد المنفعة الاقتصادية المتاحة — استردادات أو تخفيض اشتراكات مستقبلية" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The engine's philosophy: service cost and net interest are EMPLOYMENT + FINANCE costs (P&L); the actuarial noise belongs to OCI and is never recycled — the 2011 revision removed the old 'corridor' (10% smoothing) forever. Past service cost (a plan improvement) hits P&L IMMEDIATELY at the amendment date, even when benefits VEST over future years (the old spreading died too). Settlements and curtailments: determine the DB position at the settlement/curtailment DATE, recognise the related gain/loss in P&L.",
        ar: "فلسفة المحرك: تكلفة الخدمة والفائدة تكاليف توظيف وتمويل (بالأرباح)؛ والضوضاء الاكتوارية للدخل الشامل بلا تدوير — وقد أزال تعديل ٢٠١١ «الممر» (تنعيم ١٠٪) نهائيًا. وتكلفة الخدمات السابقة تضرب بالأرباح فور التعديل ولو تحققت المنافع مستقبلًا (ومات التوزيع القديم أيضًا). وعند التسوية أو التقليص يحدد المركز بتاريخه ويعترف بالربح/الخسارة في الأرباح.",
      },
    },
    {
      kind: "journal",
      title: { en: "The DB charge set", ar: "مجموعة قيود المزايا المحددة" },
      rows: [
        { dr: { en: "Staff cost — service cost (incl. past service cost)", ar: "مصروف عاملين — تكلفة الخدمة (ومنها الخدمات السابقة)" }, cr: { en: "Net DB liability", ar: "صافي التزام المزايا" } },
        { dr: { en: "Finance cost — net interest", ar: "مصروف تمويلي — الفائدة الصافية" }, cr: { en: "Net DB liability", ar: "صافي التزام المزايا" }, red: true },
        { dr: { en: "OCI — remeasurement (actuarial loss)", ar: "الدخل الشامل — إعادة قياس (خسارة)" }, cr: { en: "Net DB liability", ar: "صافي التزام المزايا" }, red: true },
        { dr: { en: "Net DB liability (remeasurement gain)", ar: "صافي الالتزام (مكسب إعادة قياس)" }, cr: { en: "OCI — remeasurement gain", ar: "الدخل الشامل — مكسب" } },
        { dr: { en: "Plan assets", ar: "أصول الخطة" }, cr: { en: "Cash — employer contributions paid", ar: "النقد — اشتراكات مدفوعة" } },
        { dr: { en: "Net DB liability", ar: "صافي الالتزام" }, cr: { en: "Cash — benefits paid directly", ar: "النقد — مزايا مدفوعة مباشرة" } },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Reading the entries: the P&L lines are employment cost (service) and finance cost (interest) — an operating/finance split the 2011 revision made explicit; the OCI line is the actuarial noise; and the balance sheet carries the net promise. Because remeasurements never recycle, the P&L reflects the STEADY state of the promise while OCI absorbs the volatility — the architecture's whole point.",
        ar: "قراءة القيود: بنود الأرباح تكلفة توظيف (خدمة) وتكلفة تمويل (فائدة) — فصل تشغيلي/تمويلي جعلته صراحةً مراجعة ٢٠١١؛ وسطر الدخل الشامل هو الضوضاء الاكتوارية؛ والميزانية تحمل الوعد الصافي. ولأن إعادة القياس لا تعاد تدويرها، تعكس الأرباح الحالة المستقرة للوعد بينما يمتص الدخل الشامل التقلب — وهذا جوهر البناء كله.",
      },
    },
    {
      kind: "example",
      title: { en: "The DB rollforward", ar: "الاستقصاء التراكمي للمزايا المحددة" },
      lines: [
        { en: "Opening DBO 1,000 · plan assets 900 → net liability 100 · discount rate 5%", ar: "التزام افتتاحي ١٬٠٠٠ وأصول خطة ٩٠٠ ← صافي ١٠٠ بمعدل ٥٪" },
        { en: "Service cost 80 · benefits paid 60 (reduces BOTH DBO and assets) · contributions 50 · actual asset return 55 · actuarial loss on DBO 25", ar: "تكلفة خدمة ٨٠ · مزايا مدفوعة ٦٠ (تخفض الالتزام والأصول معًا) · اشتراكات ٥٠ · عائد فعلي ٥٥ · خسارة اكتوارية ٢٥" },
        { en: "P&L charge = service 80 + net interest (100 × 5%) 5 = 85", ar: "حمولة الأرباح = تكلفة خدمة ٨٠ + فائدة صافية (١٠٠ × ٥٪) ٥ = ٨٥" },
        { en: "OCI = actuarial loss 25 − asset-return excess (55 − 45 expected) 10 = net loss 15", ar: "الدخل الشامل = خسارة اكتوارية ٢٥ − فائض عائد الأصول (٥٥ − ٤٥) ١٠ ← خسارة صافية ١٥" },
        { en: "Closing DBO = 1,000 + 80 + 50 (interest unwind 5% × 1,000) + 25 − 60 = 1,095 · assets = 900 + 55 + 50 − 60 = 945 → net liability 150 = 100 + 85 − 50 + 15 ✓", ar: "الختامي: الالتزام = ١٬٠٠٠ + ٨٠ + ٥٠ (فك الفائدة) + ٢٥ − ٦٠ = ١٬٠٩٥ · والأصول = ٩٤٥ ← الصافي ١٥٠ = ١٠٠ + ٨٥ − ٥٠ + ١٥ ✓" },
      ],
    },
    {
      kind: "example",
      title: { en: "Amendment + settlement — the remeasurement year", ar: "تعديل + تسوية — سنة إعادة القياس" },
      lines: [
        { en: "Amendment on 1 July: the benefit formula is enriched → past service cost 40 → P&L IMMEDIATELY (no vesting wait, no spreading)", ar: "تعديل في ١ يوليو: تحسين معادلة المنافع ← تكلفة خدمات سابقة ٤٠ ← الأرباح فورًا (لا انتظار تحقق ولا توزيع)" },
        { en: "Settlement on 30 September: an annuity is bought for cash 210 to settle obligations whose re-measured carrying amount (after the rate change) is 195 → settlement loss 15 to P&L", ar: "تسوية في ٣٠ سبتمبر: شراء سنديات بنقد ٢١٠ لتسوية التزامات قيمتها المعاد قياسها (بعد تغير المعدل) ١٩٥ ← خسارة تسوية ١٥ بالأرباح" },
        { en: "The rate change itself: a 25 actuarial loss on the WHOLE plan re-measured at the settlement date → OCI (never recycled)", ar: "تغير المعدل ذاته: خسارة اكتوارية ٢٥ عن إعادة قياس الخطة كلها بتاريخ التسوية ← الدخل الشامل (بلا تدوير)" },
        { en: "P&L for the year (DB engine lines): service 80 + past service 40 + net interest 5 + settlement loss 15 = 140; OCI carries the actuarial loss and the asset-return deviation", ar: "أرباح السنة (بنود المحرك): خدمة ٨٠ + خدمات سابقة ٤٠ + فائدة صافية ٥ + خسارة تسوية ١٥ = ١٤٠؛ والدخل الشامل يحمل الخسارة الاكتوارية وانحراف عائد الأصول" },
      ],
    },
    { kind: "h", text: { en: "Plan assets & the asset ceiling", ar: "أصول الخطة وسقف الأصل" } },
    {
      kind: "list",
      items: [
        { en: "Plan assets: assets held by a long-term employee-benefit fund, legally separate, available ONLY for settling employee benefits", ar: "أصول الخطة: أصول يحتفظ بها صندوق مزايا طويل الأجل، منفصل قانونيًا، متاح فقط لتسوية المزايا" },
        { en: "Include: qualifying insurance policies that pay the fund's benefits directly; EXCLUDE amounts the employer can reclaim (a reimbursement asset instead, like IAS 37 insurance logic)", ar: "تشمل: وثائق تأمين مؤهلة تسدد منافع الصندوق مباشرة؛ وتستبعد ما يمكن لصاحب العمل استرداده (أصل استرداد بدلًا، بمنطق IAS 37)" },
        { en: "Measured at FAIR VALUE at every reporting date", ar: "تقاس بالقيمة العادلة في كل تقرير" },
        { en: "The plan's surplus is capped by the ASSET CEILING: the present value of available refunds + reductions in future contributions", ar: "فائض الخطة يسقفه سقف الأصل: القيمة الحالية للاستردادات المتاحة + تخفيضات الاشتراكات المستقبلية" },
      ],
    },
    {
      kind: "example",
      title: { en: "The asset ceiling", ar: "سقف الأصل" },
      lines: [
        { en: "Well-funded plan: DBO 800 · plan assets at fair value 1,000 → arithmetic surplus 200", ar: "خطة ممولة جيدًا: التزام ٨٠٠ وأصول خطة بالعادلة ١٬٠٠٠ ← فائض حسابي ٢٠٠" },
        { en: "But refunds from the plan are only available up to 120 (present value) → recognise a net ASSET of just 120", ar: "لكن الاستردادات من الخطة لا تتاح إلا حتى ١٢٠ (قيمة حالية) ← اعترف بأصل صافٍ قدره ١٢٠ فقط" },
        { en: "The 80 haircut is a remeasurement loss in OCI (the asset-ceiling effect) — the extra surplus is real but not the employer's to keep", ar: "الخفض ٨٠ خسارة إعادة قياس بالدخل الشامل (أثر سقف الأصل) — فالفائض الزائد حقيقي لكنه ليس لصاحب العمل" },
        { en: "Re-check the ceiling at EVERY reporting date — more refunds available or higher contribution relief unwinds the cap", ar: "أعد فحص السقف في كل تقرير — فمزيد من الاستردادات أو تخفيف الاشتراكات يفك القبعة" },
      ],
    },
    { kind: "h", text: { en: "Assumptions & the discount rate", ar: "الافتراضات ومعدل الخصم" } },
    {
      kind: "list",
      items: [
        { en: "ACTUARIAL assumptions: demographic (turnover, mortality, disability) + financial (salary growth, medical inflation, benefit escalation) — unbiased and mutually compatible", ar: "الافتراضات الاكتوارية: ديموغرافية (دوران، وفيات، عجز) ومالية (نمو أجور، تضخم طبي) — غير متحيزة ومتوافقة" },
        { en: "DISCOUNT RATE: market yields on HIGH-QUALITY CORPORATE BONDS at the reporting date, matching the currency & duration of the obligations — NOT the plan's expected return", ar: "معدل الخصم: عوائد سندات شركات عالية الجودة بتاريخ التقرير بعملة الالتزام وأجله — لا العائد المتوقع للخطة" },
        { en: "The old 'expected return on assets' line DIED in 2011 — only net interest survives; no asset-return credit in P&L", ar: "سطر «العائد المتوقع للأصول» مات في ٢٠١١ — لا يبقى إلا الفائدة الصافية؛ فلا دائن بالعائد في الأرباح" },
        { en: "Actuarial gains/losses arise when experience differs OR assumptions change — the remeasurement family", ar: "تنشأ الفروق الاكتوارية باختلاف التجربة أو تغير الافتراضات — عائلة إعادة القياس" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Assumptions are unbiased, mutually compatible and market-derived where a market exists: the DISCOUNT RATE comes from high-quality corporate bond yields matching the obligation's currency and term (government bonds where no deep corporate market exists), reset at EVERY reporting date — never the plan's expected return and never the employer's cost of borrowing. The same single rate runs BOTH sides: it accretes interest on the DBO inside net interest and on the plan assets within that same net-interest line.",
        ar: "الافتراضات غير متحيزة ومتوافقة ومستمدة من السوق حيث يوجد سوق: فمعدل الخصم من عوائد سندات شركات عالية الجودة موافقة لعملة الالتزام وأجله (أو سندات حكومية حيث لا سوق شركات عميق)، ويعاد تحديده في كل تقرير — لا العائد المتوقع للخطة ولا كلفة اقتراض صاحب العمل أبدًا. والمعدل الواحد ذاته يدير الجانبين: يفيد على الالتزام وعلى أصول الخطة معًا داخل سطر الفائدة الصافية.",
      },
    },
    { kind: "h", text: { en: "Settlements, curtailments & past service", ar: "التسويات والتقليص والخدمات السابقة" } },
    {
      kind: "tree",
      root: { en: "Plan change or event", ar: "تغير أو حدث في الخطة" },
      branches: [
        {
          when: { en: "SETTLEMENT — the entity buys an irrevocable transfer of the obligation (annuity purchase, lump-sum window)", ar: "تسوية — تحويل قاطع للالتزام (شراء سنديات، سداد إجمالي)" },
          then: { en: "Gain/loss = difference between the settlement price and the net liability REMEASURED at the settlement date → P&L", ar: "الربح/الخسارة = فرق سعر التسوية عن الصافي المعاد قياسه بتاريخها ← الأرباح", red: true },
        },
        {
          when: { en: "CURTAILMENT — a significant reduction in the scheme (closure, headcount cut)", ar: "تقليص — خفض جوهري للمخطط (إغلاق، تسريح)" },
          then: { en: "Recognise the reduction in DBO (a past-service-cost-style gain) + the related remeasurement effect → P&L", ar: "يعترف بنقص الالتزام (ربح على طريقة الخدمات السابقة) + الأثر الملائم من إعادة القياس ← الأرباح", red: true },
        },
        {
          when: { en: "PLAN AMENDMENT (better or worse benefits for PAST service)", ar: "تعديل الخطة (تحسين أو تقليل منافع خدمة سابقة)" },
          then: { en: "Past service cost → P&L IMMEDIATELY (negative amounts first offset gains from related plan changes)", ar: "تكلفة الخدمات السابقة ← الأرباح فورًا (والسوالب تقاص أولًا بأرباح التعديلات المرتبطة)", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Sequence matters: settle or curtail ONLY after re-measuring the obligation (and its assets) with updated assumptions at the event date — the gain/loss is the difference between what was given up and the re-measured amount, all through P&L. A curtailment arriving with an amendment (close the plan to new entrants AND sweeten past service) books both effects together: the past service cost (positive or negative) and the curtailment gain.",
        ar: "التسلسل مهم: سوِّ أو قلّص فقط بعد إعادة قياس الالتزام (وأصوله) بافتراضات محدثة بتاريخ الحدث — فالربح/الخسارة هو الفرق بين ما تُرك وما أُعيد قياسه، كله بالأرباح. والتقليص الواصل مع تعديل (إغلاق الخطة للمنضمين الجدد مع تحسين خدمة سابقة) يثبت الأثرين معًا: تكلفة الخدمات السابقة (موجبة أو سالبة) وربح التقليص.",
      },
    },
    { kind: "h", text: { en: "Other long-term benefits", ar: "المنافع طويلة الأجل الأخرى" } },
    {
      kind: "p",
      text: {
        en: "Other long-term benefits (long-service leave, long-term disability, profit-share settled more than 12 months out) run the FULL defined-benefit machinery — discounted obligation, plan assets, service cost, net interest — but their REMEASUREMENTS go to P&L, not OCI: the OCI parking and the recycling ban are reserved for post-employment promises. The exam's shortcut: 'long-service leave' → the remeasurements hit profit.",
        ar: "المنافع طويلة الأجل الأخرى (إجازات طويلة الخدمة، عجز طويل، مشاركة أرباح تسوى بعد أكثر من ١٢ شهرًا) تشتغل بمحرك المزايا المحددة كاملًا — التزام مخصوم وأصول خطة وتكلفة خدمة وفائدة صافية — لكن إعادة قياسها تذهب إلى الأرباح لا الدخل الشامل: فمواقف الدخل الشامل وحظر التدوير مخصوصة لوعود ما بعد التوظيف. واختصار الامتحان: «إجازة طويلة الخدمة» ← إعادة القياس تضرب الربح.",
      },
    },
    { kind: "h", text: { en: "Termination benefits", ar: "مزايا الإنهاء" } },
    {
      kind: "list",
      items: [
        { en: "Trigger: the entity is DEMONSTRABLY COMMITTED — a detailed formal plan announced, or a statutory/contractual obligation exists", ar: "المحفز: التزام واضح لا رجعة فيه — خطة رسمية مفصلة معلنة أو التزام قانوني/تعاقدي قائم" },
        { en: "Recognise the FULL liability at the EARLIER of: cancellation no longer being possible, and the related restructuring costs being recognised under IAS 37 (usually the announcement itself)", ar: "اعترف بالالتزام كاملًا عند الأسبق من: تعذر سحب العرض، والاعتراف بتكاليف إعادة الهيكلة ذات الصلة وفق IAS 37 (غالبًا الإعلان ذاته)" },
        { en: "Classify by settlement timing: within 12 months of termination → short-term style; beyond → other long-term machinery (discounted)", ar: "بويّب بتوقيت التسوية: خلال ١٢ شهرًا من الإنهاء ← أسلوب القصيرة؛ وبعدها ← آلية الطويلة الأجل (مخصومة)" },
        { en: "IAS 19's trigger usually fires EARLIER than IAS 37's restructuring gates — a sequencing trap when one redundancy plan carries both", ar: "محفز IAS 19 يسبق عادة بوابات إعادة الهيكلة في IAS 37 — فخ تسلسل حين تحمل خطة تسريح واحدة كليهما" },
      ],
    },
    { kind: "h", text: { en: "Presentation & offsetting", ar: "العرض والمقاصة" } },
    {
      kind: "list",
      items: [
        { en: "B/S: a plan surplus is an ASSET (up to the asset ceiling) — NEVER offset different plans; split current/non-current", ar: "الميزانية: فائض الخطة أصل (بسقف الأصل) — ولا تقاص بين خطط مختلفة أبدًا؛ مع الفصل بين المتداول وغير المتداول" },
        { en: "Reconciliation of the net liability: opening → service, interest, contributions, benefits, remeasurements → closing; a sensitivity analysis for every major actuarial assumption", ar: "تسوية الصافي: افتتاحي ← تكلفة، فائدة، اشتراكات، مزايا، إعادة قياس ← ختامي؛ وتحليل حساسية لكل افتراض اكتواري جوهري" },
        { en: "Maturity profile of the DBO, the funding policy & expected contributions", ar: "نضج الالتزام وسياسة التمويل والاشتراكات المتوقعة" },
        { en: "Termination benefits: the nature & amount; short-term vs other classification", ar: "مزايا الإنهاء: طبيعتها ومقدارها وتبويبها قصيرة أو غير ذلك" },
        { en: "The 2014 amendments: market depth of high-quality bonds and plan-amendment remeasurement timing", ar: "تعديلات ٢٠١٤: عمق سوق السندات عالية الجودة وتوقيت إعادة قياس تعديلات الخطة" },
      ],
    },
    { kind: "h", text: { en: "Interactions — the plan as a related party", ar: "التزامن — الصندوق طرفًا ذا علاقة" } },
    {
      kind: "p",
      text: {
        en: "A DB plan is a RELATED PARTY of the sponsoring employer: transactions between the two (contributions in cash or in kind, property transferred into the plan, refunds received) are IAS 24 disclosure territory, and the pension entitlements of key management personnel ride the KMP-compensation disclosures. The IAS 24 phrase 'contributions paid to a defined benefit plan on behalf of key management personnel' is lifted directly by examiners.",
        ar: "صندوق المزايا المحددة طرف ذو علاقة بصاحب العمل الراعي: فالمعاملات بينهما (اشتراكات نقدية أو عينية، أموال منقولة إلى الصندوق، استردادات مقبوضة) إفصاحات IAS 24، ومعاشات الإدارة العليا تركب إفصاحات مقابل الإدارة العليا. وعبارة IAS 24 «الاشتراكات المدفوعة لصندوق مزايا محددة لصالح الإدارة العليا» يرفعها الممتحنون نصًا.",
      },
    },
    { kind: "h", text: { en: "Effective dates & amendments", ar: "تواريخ السريان والتعديلات" } },
    {
      kind: "p",
      text: {
        en: "First issued 1983 and repeatedly revised, IAS 19 was comprehensively rewritten in 2011 (effective 1 January 2013 — the version this sheet renders: net interest, immediate past service cost, OCI-only remeasurements). The November 2014 amendments (effective 1 January 2019) tightened the determination of the DB position on plan amendments (remeasure at the earlier of the amendment date and the reporting date) and clarified the market-depth test for the high-quality corporate bond rate.",
        ar: "صدر أول مرة ١٩٨٣ وأعيد تنقيحه مرارًا، ثم أُعيدت كتابته شاملًا ٢٠١١ (سارٍ من ١ يناير ٢٠١٣ — النسخة هنا: الفائدة الصافية، والخدمات السابقة الفورية، وإعادة القياس للدخل الشامل حصرًا). وشدّد تعديل نوفمبر ٢٠١٤ (سارٍ من ١ يناير ٢٠١٩) تحديد مركز المزايا المحددة عند تعديلات الخطة (إعادة القياس عند الأسبق من تاريخ التعديل وتاريخ التقرير) ووضّح اختبار عمق سوق السندات العالية الجودة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Remeasurements go to OCI and are NEVER recycled — the single most-tested IAS 19 rule. Past service cost is IMMEDIATE (no spreading); net interest replaced the old expected-return; the corridor is dead. Three 'old world' habits the exam still sets as traps.",
        ar: "إعادة القياسات للدخل الشامل ولا تعاد تدويرها أبدًا — أشهر قاعدة في IAS 19. والخدمات السابقة فورية (لا توزيع)؛ والفائدة الصافية حلت محل العائد المتوقع؛ والممر مات. ثلاث عادات قديمة تنصب كفخاخ.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Termination benefits trigger EARLIER than IAS 37 restructuring: 'demonstrably committed' (announcement of a detailed plan) vs 'valid expectation raised' — if the scenario offers both a redundancy plan and a pension settlement, time each separately.",
        ar: "مزايا الإنهاء تتحقق أبكر من إعادة هيكلة IAS 37: «الالتزام الواضح» (إعلان خطة مفصلة) مقابل «إثارة توقع معقول» — وإذا عرض السيناريو خطة تسريح وتسوية معاش معًا فاضبط توقيت كل منهما.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Other long-term benefits is the sleeper trap: candidates park their remeasurements in OCI by reflex. Only POST-EMPLOYMENT remeasurements live in OCI — everything else's go to P&L.",
        ar: "المنافع طويلة الأجل الأخرى الفخ النائم: يودع المرشحون إعادة قياسها بالدخل الشامل بانعكاس. فقط إعادة قياس ما بعد التوظيف تسكن الدخل الشامل — وكل ما عداه للأرباح.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Benefits paid and contributions paid NEVER touch P&L — they move the DBO and the plan assets. If your answer books a benefit payment as an expense, the engine's whole architecture is lost.",
        ar: "المزايا المسددة والاشتراكات المدفوعة لا تمس الأرباح قط — بل تحرك الالتزام وأصول الخطة. وإن حمّلت إجابتك السداد مصروفًا فقد ضاع بناء المحرك كله.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The net interest trick: it applies to the NET position — a net ASSET earns interest income (a credit), a net liability costs interest; the same single rate both ways.",
        ar: "حيلة الفائدة الصافية: تطبق على المركز الصافي — فالأصل الصافي يدر فائدة دائنة والالتزام الصافي يكلفها؛ وبالمعدل الواحد ذاته في الاتجاهين.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Discount the obligation with the BOND rate; measure the assets at FAIR VALUE — the fund's equity holdings ride the OCI remeasurements, which is why DB plans in bullish equity markets book OCI gains even as the DBO accretes.",
        ar: "خصم الالتزام بمعدل السندات، وقياس الأصول بالقيمة العادلة — فمراكز الأسهم بالصندوق تركب إعادة قياس الدخل الشامل، ولهذا تحجز خطط المزايا المحددة في أسواق الأسهم الصاعدة مكاسب دخل شامل بينما ينمو الالتزام.",
      },
    },
  ],
}
