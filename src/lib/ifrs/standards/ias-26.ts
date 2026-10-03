/** IAS 26 — Accounting and Reporting by Retirement Benefit Plans */

import type { Standard } from "../types"

export const IAS_26: Standard = {
  code: "IAS 26",
  title: { en: "Accounting and Reporting by Retirement Benefit Plans", ar: "محاسبة والتقارير لخطط مزايا التقاعد" },
  topic: "specialized",
  effective: { en: "Effective 1 Jan 1988 · the plan-side mirror of IAS 19", ar: "سارٍ من ١ يناير ١٩٨٨ · مرآة IAS 19 من جانب الخطة" },
  blocks: [
    { kind: "h", text: { en: "Objective — the plan's own books", ar: "الهدف — دفاتر الخطة ذاتها" } },
    {
      kind: "p",
      text: {
        en: "IAS 26 governs the reports of the RETIREMENT BENEFIT PLAN ITSELF — the fund that holds the assets backing employees' promised benefits — not the sponsoring employer's books (that is IAS 19). The plan's reports serve the participants: they show what the plan OWNS, what it OWES to members, and how those numbers moved. Private and group plans alike; government plans in the social-security style are outside the private-plan scope.",
        ar: "يحكم IAS 26 تقارير خطة مزايا التقاعد ذاتها — الصندوق الحائز لأصول ضمان مزايا العاملين الموعودة — لا دفاتر صاحب العمل (تلك IAS 19). وتخدم تقارير الخطة المشاركين: تُظهر ما تملك الخطة وما عليها وما حركة الأرقام. وتشمل الخطط الخاصة والجماعية؛ وتخرج الخطط الحكومية بأسلوب التأمينات الاجتماعية.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Read the objective through the users' eyes: a plan member's pension depends on the fund's solvency, so the report's first job is the FUNDING PICTURE — assets against the promised benefits. A regulator checks the same numbers for statutory funding levels; an auditor of the plan traces contributions, investment returns and benefit payments; the sponsoring employer's actuaries feed the same data into the IAS 19 liability. One set of plan accounts feeds every one of those appetites — which is why the standard insists on a statement of changes in BOTH the assets and the promise.",
        ar: "اقرأ الهدف بعين المستخدمين: معاش العضو متوقف على ملاءة الصندوق، فأول واجبات التقرير صورة التمويل — الأصول مقابل المزايا الموعودة. والجهة الرقابية تفحص الأرقام ذاتها لمستويات التمويل النظامية؛ ومراجع الخطة يتتبع الاشتراكات والعوائد والمدفوعات؛ واكتواريو صاحب العمل يغذّون بها التزام IAS 19. فمجموعة واحدة من حسابات الخطة تشبع تلك الحاجات كلها — ولهذا يلزم المعيار بقائمة تغيرات في الأصول والوعد معًا.",
      },
    },
    { kind: "h", text: { en: "Scope — which plans report under IAS 26", ar: "النطاق — أي الخطط تقدم تقاريرها بموجب IAS 26" } },
    {
      kind: "list",
      items: [
        { en: "Applies to plans whose reports are prepared for the benefit of ALL participants as a whole — individual statements to a single member are outside it", ar: "يطبق على الخطط التي تعد تقاريرها لخدمة المشاركين جميعًا ككل — والكشوفات الفردية لعضو واحد خارجه" },
        { en: "Covers both DEFINED CONTRIBUTION and DEFINED BENEFIT retirement plans (and the retirement-benefit slice of mixed plans is reported on the same basis)", ar: "يشمل خطط الاشتراكات المحددة وخطط المزايا المحددة معًا (ويحاط جانب التقاعد من الخطط المختلطة بالمعالجة ذاتها)" },
        { en: "Government social-security-style arrangements are excluded — IAS 26 is a private-plan standard", ar: "تستثنى ترتيبات التأمينات الاجتماعية الحكومية — فـIAS 26 معيار الخطط الخاصة" },
        { en: "It regulates the plan's financial statements — NOT the employer's accounting: the employer's cost is IAS 19, full stop", ar: "ينظم القوائم المالية للخطة — لا محاسبة صاحب العمل: فتكلفة صاحب العمل IAS 19، نقطة" },
        { en: "Deferred compensation, termination-benefit schemes and top-hat arrangements fall elsewhere unless they take the legal form of a retirement benefit plan", ar: "المكافآت المؤجلة ومخططات إنهاء الخدمة وترتيبات كبار التنفيذيين تخرج ما لم تتخذ الشكل القانوني لخطة تقاعد" },
      ],
    },
    { kind: "h", text: { en: "The two plan species", ar: "نوعا الخطة" } },
    {
      kind: "tree",
      root: { en: "What kind of plan is reporting?", ar: "أي نوع خطة يفصح؟" },
      branches: [
        {
          when: { en: "DEFINED CONTRIBUTION plan — the members eat the investment risk; benefits = contributions + investment returns", ar: "خطة اشتراكات محددة — يتحمل المشاركون مخاطر الاستثمار؛ والمنافع = الاشتراكات وعوائدها" },
          then: { en: "Report: the NET ASSETS AVAILABLE for benefits + a statement of changes (contributions receivable, investment returns, benefits paid) + the accounting policy", ar: "التقرير: صافي الأصول المتاح للمزايا + قائمة التغيرات (الاشتراكات المستحقة والعوائد والمنافع المدفوعة) + السياسة", red: true },
        },
        {
          when: { en: "DEFINED BENEFIT plan — the promise (and investment risk) is the plan's sponsor's; benefits formula-driven", ar: "خطة مزايا محددة — الوعد (ومخاطر الاستثمار) على الراعي؛ والمنافع بصيغة محددة" },
          then: { en: "Report BOTH: net assets available AND the actuarial present value of promised retirement benefits — plus a statement of changes in net assets available AND a statement of the movement in the promised benefits", ar: "التقرير شامل: صافي الأصول المتاح والقيمة الحالية الاكتوارية للمزايا الموعودة وقائمتا تغيراتهما", red: true },
        },
        {
          when: { en: "Insured plans & annuity policies: insurance policies held IN THE PLAN'S NAME (policyholder = the plan) — the policy's terms drive the presentation", ar: "خطط مؤمنة وسياسات سنَدية: وثائق تأمين باسم الخطة (المستفيد الخطة ذاتها)" },
          then: { en: "Qualifying policies count as PLAN INVESTMENTS — otherwise the employer holds them", ar: "الوثائق المؤهلة تعد استثمارات الخطة — وإلا فهي لدى صاحب العمل", red: true },
        },
        {
          when: { en: "A plan with BOTH a promise-based core and contribution-based add-ons (a hybrid)", ar: "خطة هجينة بقلب قائم على الوعد وإضافات قائمة على الاشتراك" },
          then: { en: "Split the reporting: the DB core carries the actuarial promise; the DC riders report net assets only", ar: "قسّم التقرير: جوهر المزايا المحددة يحمل الوعد الاكتواري، والإضافات بالاشتراكات تصف صافي الأصول وحده", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "The defined-benefit statement set", ar: "مجموعة قوائم المزايا المحددة" } },
    {
      kind: "list",
      items: [
        { en: "A description of the net assets available: INVESTMENTS at fair value (or where fair value is unavailable, disclosure of the basis and the reason); the other assets & liabilities at normal IFRS-style amounts; a separate retirement-benefit obligation", ar: "وصف صافي الأصول المتاح: الاستثمارات بالقيمة العادلة (أو الإفصاح عن الأساس عند عدم توافرها)؛ وبقية الأصول والالتزامات بمقاديرها المعتادة" },
        { en: "The ACTUARIAL PRESENT VALUE of promised retirement benefits computed on the plan's benefit formula: the projected or accumulated benefit promise, discounted by an assumed actuarial rate (the discount-rate assumption is disclosed)", ar: "القيمة الحالية الاكتوارية للمزايا الموعودة على صيغة الخطة: بوعد إسقاطي أو تراكمي وبمعدل اكتواري مفترض يفصح عنه" },
        { en: "A statement of CHANGES in net assets available (contributions by employer & members, investment income at the ACTUAL return, benefits paid, admin costs, taxes)", ar: "قائمة تغيرات صافي الأصول المتاح (اشتراكات صاحب العمل والمشاركين، والدخل الاستثماري بالعائد الفعلي، والمنافع والتكاليف الإدارية)" },
        { en: "A statement of changes in the promised benefits: service cost, interest accretion, benefits paid, actuarial adjustments", ar: "قائمة تغيرات المزايا الموعودة: تكلفة الخدمة والاستحقاق والمنافع المدفوعة والتعديلات الاكتوارية" },
        { en: "The actuarial measurement date and the funding valuation basis, so readers can align the promise with the assets' fair-value date", ar: "تاريخ القياس الاكتواري وأساس تقييم التمويل ليوائم القارئ بين الوعد وتاريخ العادلة للأصول" },
      ],
    },
    { kind: "h", text: { en: "Actuarial valuation — the mechanics behind the promise", ar: "التقييم الاكتواري — الآلة خلف الوعد" } },
    {
      kind: "p",
      text: {
        en: "The actuarial present value projects each member's promised benefit to retirement using the plan's formula (final-salary, career-average, or flat-amount), then discounts it back at the ASSUMED RATE — the discount-rate assumption is disclosed with the other significant actuarial assumptions (salary escalation, mortality, withdrawal, disability). Two conventions exist: the ACCUMULATED BENEFIT OBLIGATION measures benefits already EARNED to date (no future salary escalation), while the PROJECTED BENEFIT OBLIGATION projects salaries to exit — the plan states which convention it reports, and stays consistent.",
        ar: "تحسب القيمة الحالية الاكتوارية منفعة كل عضو الموعودة حتى التقاعد بصيغة الخطة (آخر راتب أو متوسط المسيرة أو مبلغ مقطوع) ثم تخصمها بالمعدل المفترض — ويفصح عن معدل الخصم مع بقية الافتراضات الجوهرية (نمو الرواتب، الوفيات، الاستقالات، العجز). وثلاث اتفاقيتان: التزام المنافع المتراكمة يقيس ما اكتُسب حتى تاريخه (بلا نمو رواتب مستقبلي)، والتزام المنافع المسقطة تسقط الرواتب حتى الخروج — وتصرح الخطة بأيتهما تعرض وتلزم ذاتها بها.",
      },
    },
    {
      kind: "steps",
      items: [
        { en: "Census the membership: age, service, salary, projected exit — the actuary's raw material", ar: "إحصاء الأعضاء: العمر والخدمة والراتب والخروج المتوقع — المادة الخام للاكتواري" },
        { en: "Project each member's benefit through the plan's formula to the expected retirement date", ar: "إسقاط منفعة كل عضو عبر صيغة الخطة حتى تاريخ التقاعد المتوقع" },
        { en: "Discount the projected benefits back to the valuation date at the assumed actuarial rate", ar: "خصم المنافع المسقطة إلى تاريخ التقييم بالمعدل الاكتواري المفترض" },
        { en: "Allow for pre-retirement exits (death, withdrawal, disability) through decrements", ar: "مراعاة حالات الخروج المبكر (وفاة، استقالة، عجز) عبر معدلات التناقص" },
        { en: "Disclose the significant assumptions, the method, and the effect of any assumption change since the last valuation", ar: "الإفصاح عن الافتراضات الجوهرية والطريقة وأثر تغيير أي افتراض منذ التقييم السابق" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The plan's core equation", ar: "معادلة الخطة الجوهرية" },
      lines: [
        { en: "Net assets available for benefits = plan investments at fair value + other assets − liabilities other than the promised benefits", ar: "صافي الأصول المتاح = الاستثمارات بالعادلة + أصول أخرى − الالتزامات عدا المزايا الموعودة" },
        { en: "Funding surplus/(deficit) = net assets available − actuarial present value of promised benefits", ar: "فائض/(عجز) التمويل = الصافي المتاح − القيمة الاكتوارية للمزايا" },
        { en: "Funding level = net assets available ÷ actuarial PV of promised benefits (a 108% plan is over-funded; 92% carries a shortfall)", ar: "نسبة التمويل = الصافي المتاح ÷ القيمة الاكتوارية للمزايا (١٠٨٪ خطة ممولة زيادة؛ و٩٢٪ بها عجز)" },
        { en: "Investment performance: report the REAL return achieved (and its components) — the plan's scorecard", ar: "الأداء الاستثماري: يعاد العائد المتحقق الفعلي (ومكوناته) — بطاقة أداء الخطة" },
        { en: "Actuarial PV rollforward: opening promise + service cost + interest accretion − benefits paid ± actuarial (gain)/loss = closing promise", ar: "تسلسل القيمة الاكتوارية: الوعد الافتتاحي + تكلفة الخدمة + الاستحقاق − المنافع المدفوعة ± المكسب/الخسارة الاكتوارية = الوعد الختامي" },
      ],
    },
    { kind: "h", text: { en: "The plan's investments — fair value, by category", ar: "استثمارات الخطة — العادلة بالفئات" } },
    {
      kind: "p",
      text: {
        en: "Plan investments are stated at FAIR VALUE at each reporting date: quoted securities at bid or last-traded price, debt instruments at market price, unquoted holdings at valuation techniques, and properties at professional valuations. Where fair value cannot be measured reliably, the plan discloses the carrying basis and the reason — but the default never reverts to bare cost. The statement splits investments by major category (equities, bonds, property, cash, funds) so members can read the risk mix that backs their promise.",
        ar: "تعرض استثمارات الخطة بالقيمة العادلة في كل تقرير: الأوراق المقيدة بسعر الطلب أو آخر تعامل، وأدوات الدين بسعر السوق، وغير المقيدة بأساليب تقييم، والعقارات بتقييمات مهنية. وعند تعذر القياس الموثوق للعادلة تفصح الخطة عن أساس العرض والسبب — لكن الأصل لا يعود إلى التكلفة المجردة أبدًا. وتقسم القائمة الاستثمارات بالفئات الرئيسية (أسهم وسندات وعقارات ونقد وصناديق) ليقرأ الأعضاء مزيج المخاطر الضامن لوعدهم.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The employer's own securities held by the plan are disclosed SEPARATELY — members deserve to see how much of their pension rides on the sponsor's own credit.",
        ar: "أوراق صاحب العمل نفسه التي تحويها الخطة تفصح عنها منفصلة — فمن حق الأعضاء معرفة كم من معاشهم معلق على ائتمان الراعي ذاته.",
      },
    },
    {
      kind: "journal",
      title: { en: "The plan's own entries", ar: "قيود الخطة ذاتها" },
      rows: [
        { dr: { en: "Cash / contributions receivable", ar: "نقد / اشتراكات مستحقة" }, cr: { en: "Employer & member contributions (income to the fund)", ar: "اشتراكات صاحب العمل والمشاركين (دخل الصندوق)" } },
        { dr: { en: "Plan investments", ar: "استثمارات الخطة" }, cr: { en: "Cash (purchases) · Fair-value gains (returns)", ar: "نقد (شراء) · مكاسب عادلة (عوائد)" }, red: true },
        { dr: { en: "Benefits payable to members", ar: "منافع مستحقة للأعضاء" }, cr: { en: "Cash (pensions paid out)", ar: "نقد (معاشات مدفوعة)" } },
        { dr: { en: "Administration expense / taxes", ar: "مصروف إداري / ضرائب" }, cr: { en: "Cash", ar: "نقد" } },
        { cr: { en: "The promised-benefits obligation itself: a MEMO-side actuarial figure presented beside the assets — the funding gap is a REPORTING gap, not the plan's bookkeeping entry", ar: "التزام المزايا الموعودة رقم اكتواري يعرض بجوار الأصول — وفجوة التمويل فجوة تقرير لا قيد دفاتر" }, red: true },
      ],
    },
    {
      kind: "journal",
      title: { en: "A DC plan's shorter book", ar: "دفاتر خطة الاشتراكات الأقصر" },
      rows: [
        { dr: { en: "Cash (employer & member contributions received)", ar: "نقد (اشتراكات صاحب العمل والأعضاء)" }, cr: { en: "Contribution income — no benefit obligation exists", ar: "دخل اشتراكات — لا يوجد التزام مزايا أصلًا" }, red: true },
        { dr: { en: "Member investment accounts (sub-ledger per member)", ar: "حسابات استثمار الأعضاء (دفتر فرعي لكل عضو)" }, cr: { en: "Investment income allocated to members", ar: "دخل استثماري موزع على الأعضاء" } },
        { dr: { en: "Member accounts (transfers out & withdrawals)", ar: "حسابات الأعضاء (تحويلات وخروجات)" }, cr: { en: "Cash paid to members / receiving plan", ar: "نقد مدفوع للأعضاء / للخطة المستقبلة" } },
        { cr: { en: "Net assets available = members' account balances in total — the plan is a CUSTODIAN, not a risk-taker", ar: "صافي الأصول المتاح = أرصدة حسابات الأعضاء إجمالًا — فالخطة أمين حفظ لا حامل مخاطر" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Actuarial & disclosure essentials", ar: "أساسيات الاكتوارية والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Valuations at least EVERY THREE YEARS; roll the results forward between valuations", ar: "التقييم كل ثلاث سنوات على الأكثر؛ ويُرحَّل بين التقييمين" },
        { en: "Disclose: significant actuarial assumptions & the method (projected-unit-credit style in practice), the effect of assumption changes, the tax & expense items, and the plan's amendment history", ar: "أفصح: الافتراضات الاكتوارية الجوهرية وطريقتها، وأثر تغيرها، والبنود الضريبية، وتاريخ تعديلات الخطة" },
        { en: "For DEFINED CONTRIBUTION plans: where members' benefits depend on both employer & member contributions, disclose the basis for employer contributions", ar: "لخطط الاشتراكات المحددة: أفصح عن أساس اشتراكات صاحب العمل حين تتوقف المنافع على الطرفين" },
        { en: "Investments: fair value by major category; where unavailable, the carrying basis and the reason", ar: "الاستثمارات: العادلة بالفئات الرئيسية؛ أو الأساس والسبب عند عدم توافرها" },
        { en: "Employer securities held by the plan: disclose them apart from the general portfolio", ar: "أوراق صاحب العمل لدى الخطة: أفصح عنها بمعزل عن المحفظة العامة" },
        { en: "A description of the funding policy and any funding arrangement — the contribution schedule the sponsor committed to", ar: "وصف سياسة التمويل وأي ترتيب تمويلي — جدول الاشتراكات الذي تعهد به الراعي" },
        { en: "Non-quantitative context: the plan's amendment history and any material event affecting comparability since the last report", ar: "السياق غير الكمي: تاريخ تعديلات الخطة وأي حدث جوهري يمس قابلية المقارنة منذ التقرير السابق" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The three-year valuation rhythm balances cost against currency: a full actuarial valuation is expensive, so between valuations the promise is ROLLED FORWARD using the same assumptions — service cost accrues, interest accretes, benefits deplete, and any experience difference waits for the next full valuation to land. The report must say which of the two states the numbers are in; a stale valuation rolled forward for five years would misstate the funding level precisely when members most need it.",
        ar: "يوازن إيقاع التقييم الثلاثي بين التكلفة والحداثة: فالتقييم الاكتواري الكامل مكلف، ولذا يُرحَّل الوعد بين التقييمين بالافتراضات ذاتها — تكلفة الخدمة تتراكم والاستحقاق ينشأ والمنافع تستنزف، وتبقى فروق التجربة حتى التقييم الكامل التالي. وعلى التقرير بيان أي الحالتين عليها الأرقام؛ فتقييم مهجور رُحّل خمس سنوات يشوه نسبة التمويل في أشد اللحظات حاجة إليها.",
      },
    },
    { kind: "h", text: { en: "Insured plans & the policy boundary", ar: "الخطط المؤمنة وحدود الوثيقة" } },
    {
      kind: "tree",
      root: { en: "Who holds the insurance policy?", ar: "من يحوز وثيقة التأمين؟" },
      branches: [
        {
          when: { en: "The PLAN is the policyholder (the policy is in the plan's name, for the members' benefit)", ar: "الخطة هي صاحبة الوثيقة (باسمها ولمنفعة الأعضاء)" },
          then: { en: "Qualifying policy = a PLAN INVESTMENT at fair value (or at cash-surrender value when FV is the surrender amount)", ar: "الوثيقة المؤهلة = استثمار للخطة بالعادلة (أو بقيمة الاسترداد النقدية عند مساواتها للعادلة)", red: true },
        },
        {
          when: { en: "The EMPLOYER holds the policy (the sponsor's asset, the members merely protected by the promise)", ar: "صاحب العمل يحوز الوثيقة (أصل الراعي، والأعضاء يحميهم الوعد فحسب)" },
          then: { en: "NOT a plan asset — the plan reports only what it actually holds", ar: "ليست أصلًا للخطة — فتقر الخطة بما تحوزه فعلًا فقط", red: true },
        },
        {
          when: { en: "The policy passes everything through to the members (an annuity that exactly settles each benefit as it falls due)", ar: "الوثيقة تمرر كل شيء للأعضاء (سند يسوي كل منفعة عند استحقاقها بعينه)" },
          then: { en: "The obligation may drop from the actuarial promise to the extent benefits are exactly matched by the policy's payments", ar: "قد ينقص الالتزام الاكتواري بقدر ما تطابق دفعات الوثيقة المنافع مطابقة تامة", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The insurance boundary matters because it moves the investment risk: an insured DB plan whose policy exactly pays the promised benefit has, in substance, converted the promise into a pass-through — the actuarial value and the policy's value track together. A policy that pays a fixed sum independent of the promised benefit keeps the actuarial promise alive and simply sits in the plan's investment portfolio. Distinguish the two by asking: if benefits rose, would the policy pay more?",
        ar: "حدود التأمين مهمة لأنها تنقل مخاطر الاستثمار: فالخطة المؤمنة التي تدفع وثيقتها المنفعة الموعودة بعينها حولت الوعد جوهريًا إلى تمرير — وتتقارب القيمة الاكتوارية وقيمة الوثيقة معًا. أما الوثيقة الدافعة مبلغًا ثابتًا مستقلًا عن المنفعة الموعودة فتبقي الوعد الاكتواري حيًّا وتجلس ببساطة في محفظة استثمار الخطة. ميز بينهما بسؤال: لو زادت المنافع فهل تدفع الوثيقة أكثر؟",
      },
    },
    {
      kind: "example",
      title: { en: "A DB plan's one-page report", ar: "تقرير صفحة واحدة لخطة محددة" },
      lines: [
        { en: "Investments at FV 18.4m · other assets 0.3m · liabilities (payables) 0.2m → net assets available 18.5m", ar: "استثمارات بالعادلة ١٨٫٤ مليون · أصول أخرى ٠٫٣ · التزامات ٠٫٢ ← الصافي المتاح ١٨٫٥" },
        { en: "Actuarial PV of promised benefits 17.1m → funding surplus 1.4m (the plan is 108% funded)", ar: "القيمة الاكتوارية للمزايا ١٧٫١ ← فائض تمويل ١٫٤ (نسبة تغطية ١٠٨٪)" },
        { en: "Movements: employer contributions 1.2 · members 0.4 · investment return +1.9 (10.7% actual) · benefits paid 1.0 · admin 0.1", ar: "الحركات: اشتراكات صاحب العمل ١٫٢ · المشاركون ٠٫٤ · عائد استثماري ١٫٩ (١٠٫٧٪ فعلي) · منافع مدفوعة ١٫٠ · إداري ٠٫١" },
        { en: "The 17.1m promise's movement: opening 16.2 + service 0.6 + interest 0.9 − benefits 1.0 + actuarial gain 0.4", ar: "حركة الوعد ١٧٫١: افتتاحي ١٦٫٢ + خدمة ٠٫٦ + استحقاق ٠٫٩ − منافع ١٫٠ + مكسب اكتواري ٠٫٤" },
      ],
    },
    {
      kind: "example",
      title: { en: "A funding-gap year", ar: "سنة فجوة تمويل" },
      lines: [
        { en: "Opening: net assets 14.0 · promise 13.5 → surplus 0.5 (104%)", ar: "افتتاحيًا: الأصول ١٤٫٠ · الوعد ١٣٫٥ ← فائض ٠٫٥ (١٠٤٪)" },
        { en: "The year: contributions 1.0 · investment return −1.2 (a market fall: −8.1% actual) · benefits 0.9 · admin 0.1 → closing net assets 12.8", ar: "خلال السنة: اشتراكات ١٫٠ · عائد استثماري ١٫٢− (هبوط سوقي ٨٫١٪− فعلي) · منافع ٠٫٩ · إداري ٠٫١ ← أصول ختامية ١٢٫٨" },
        { en: "The promise: opening 13.5 + service 0.5 + interest 0.8 − benefits 0.9 + actuarial LOSS 0.3 (assumptions worsened) = 14.2", ar: "الوعد: ١٣٫٥ + خدمة ٠٫٥ + استحقاق ٠٫٨ − منافع ٠٫٩ + خسارة اكتوارية ٠٫٣ (تدهور الافتراضات) = ١٤٫٢" },
        { en: "Closing: surplus 0.5 flipped to a DEFICIT 1.4 (funding level 90%) — the report's headline the members read first", ar: "ختاميًا: انقلب الفائض ٠٫٥ إلى عجز ١٫٤ (نسبة تمويل ٩٠٪) — وهذا عنوان التقرير الذي يقرؤه الأعضاء أولًا" },
      ],
    },
    { kind: "h", text: { en: "Interactions — the plan report in the wider web", ar: "التقاطعات — تقرير الخطة في الشبكة الأوسع" } },
    {
      kind: "list",
      items: [
        { en: "IAS 19 ↔ IAS 26: the employer measures its defined-benefit liability from the SAME actuarial data — plan reports and employer notes must reconcile at the funding level", ar: "IAS 19 ↔ IAS 26: يقيس صاحب العمل التزامه من البيانات الاكتوارية ذاتها — وتقارير الخطة وملاحظات صاحب العمل تتطابق عند مستوى التمويل" },
        { en: "IFRS 13 ↔ IAS 26: investment fair values follow the IFRS 13 exit-price thinking whenever a market exists", ar: "IFRS 13 ↔ IAS 26: القيم العادلة للاستثمارات تتبع منطق سعر الخروج متى وُجد سوق" },
        { en: "IFRS 9 ↔ IAS 26: the plan's investments are simply assets — a plan applying full IFRS measures them by category (mostly FVTPL) unless IAS 26's own fair-value requirement already covers them", ar: "IFRS 9 ↔ IAS 26: استثمارات الخطة أصول بسيطة — والخطة المطبقة لـIFRS كاملة تقيسها بالفئات (غالبًا FVTPL) ما لم يكفّ مطلب العادلة في IAS 26 نفسه" },
        { en: "IAS 24 ↔ IAS 26: transactions between the plan and the sponsoring employer (contributions, investment trades) are the employer's related-party disclosures", ar: "IAS 24 ↔ IAS 26: معاملات الخطة مع صاحب العمل (اشتراكات، تداولات استثمارية) من إفصاحات الأطراف ذات العلاقة عند الراعي" },
        { en: "IFRS 10 ↔ IAS 26: where the employer controls the plan (a subsidiary fund), consolidation questions arise — the plan's own member-facing report is unaffected", ar: "IFRS 10 ↔ IAS 26: حيث يسيطر صاحب العمل على الخطة (صندوق تابع) تثور أسئلة التجميع — أما تقرير الخطة الموجه للأعضاء فلا يتأثر" },
      ],
    },
    { kind: "h", text: { en: "The statement of changes — two engines running in parallel", ar: "قائمة التغيرات — محركان يدوران بالتوازي" } },
    {
      kind: "p",
      text: {
        en: "The DB report runs TWO movement statements side by side, and mixing them is the classic error. The ASSETS engine records cash reality: contributions in, actual investment return (up or down), benefits out, admin costs, taxes. The PROMISE engine records the actuarial reality: service cost earned this period, interest accretion on the opening promise, benefits that deplete it, and actuarial gains or losses when assumptions or experience move. A surplus grows either because assets outperformed or the promise shrank — the reader can only tell which from reading the two statements separately.",
        ar: "يدر تقرير المزايا المحددة قائمتي حركة جنبًا إلى جنب، وخلطهما الخطأ الكلاسيكي. فمحرك الأصول يسجل واقع النقد: اشتراكات داخلًا وعائدًا استثماريًا فعليًا (صاعدًا أو هابطًا) ومنافع خارجًا وتكاليف وضرائب. ومحرك الوعد يسجل الواقع الاكتواري: تكلفة خدمة اكتُسبت هذه الفترة، واستحقاقًا على الوعد الافتتاحي، ومنافع تستنزفه، ومكاسب أو خسائر اكتوارية عند تحرك الافتراضات أو التجربة. فالفائض ينمو إما لأداء الأصول أو لانكماش الوعد — ولا يعرف القارئ أيهما إلا من قراءة القائمتين منفصلتين.",
      },
    },
    {
      kind: "tree",
      root: { en: "Which benefit convention is the plan reporting?", ar: "أي اتفاقية منافع تعرضها الخطة؟" },
      branches: [
        {
          when: { en: "Benefits measured on salaries to DATE (career-average or flat formula) — no future salary growth assumed", ar: "منافع مقاسة برواتب حتى تاريخه (متوسط مسيرة أو صيغة مقطوعة) — بلا نمو مستقبلي مفترض" },
          then: { en: "ACCUMULATED benefit obligation — the promise as already earned today", ar: "التزام المنافع المتراكمة — الوعد كما اكتُسب اليوم", red: true },
        },
        {
          when: { en: "Benefits measured on salaries PROJECTED to retirement (final-salary formula)", ar: "منافع مقاسة برواتب مسقطة حتى التقاعد (صيغة آخر راتب)" },
          then: { en: "PROJECTED benefit obligation — the promise including future salary growth", ar: "التزام المنافع المسقطة — الوعد شاملًا نمو الرواتب المستقبلي", red: true },
        },
        {
          when: { en: "The plan switches convention between reports", ar: "تغير الخطة الاتفاقية بين التقارير" },
          then: { en: "State it and quantify the effect — consistency is expected; a silent switch distorts the funding trend", ar: "صرّح به وقدّر أثره — فالاتساق مطلوب؛ والتبديل الصامت يشوه اتجاه التمويل", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Presenting the funding level to members is communication as much as accounting: the report places net assets, the actuarial promise, and the surplus or deficit on one page, then the movement tables explain how the gap moved. Good plans add a short narrative — why the return was negative, what the sponsor's recovery contribution schedule is — because a bare −1.4m deficit without a funding plan reads as abandonment. The standard does not mandate the narrative, but the funding-policy disclosure is mandatory and carries much of the same message.",
        ar: "عرض نسبة التمويل للأعضاء تواصل بقدر ما هو محاسبة: يضع التقرير في صفحة واحدة الأصول الصافية والوعد الاكتواري والفائض أو العجز، ثم تفسر جدولا الحركة كيف تحركت الفجوة. وتضيف الخطط الجيدة سردًا موجزًا — لماذا كان العائد سالبًا وما جدول اشتراكات المعالجة لدى الراعي — لأن عجزًا مجردًا قدره ١٫٤− مليون بلا خطة تمويل يقرأ كتخليٍ. والمعيار لا يفرض السرد، لكن إفصاح سياسة التمويل إلزامي ويحمل القدر نفسه من الرسالة.",
      },
    },
    {
      kind: "p",
      text: {
        en: "The trustee's stewardship shows in the report's governance facts: who manages the investments and under what mandate, the custody arrangements, the last actuarial valuation date, and the auditor's report on the plan's statements. Members and regulators read these as the controls around their money; the standard's disclosure list deliberately pulls the promise's assumptions into the open beside them, so risk-taking and estimation both face the same light.",
        ar: "تظهر أمانة أمين الصندوق في وقائع الحوكمة بالتقرير: من يدير الاستثمارات وبأي تفويض، وترتيبات الحفظ، وتاريخ آخر تقييم اكتواري، وتقرير مراجع حسابات الخطة. ويقرؤها الأعضاء والرقابة بوصفها الضوابط حول أموالهم؛ وقائمة الإفصاح في المعيار تسحب افتراضات الوعد إلى العلن بجوارها عمدًا، ليقف المخاطرة والتقدير كلاهما تحت الضوء ذاته.",
      },
    },
    {
      kind: "p",
      text: {
        en: "For DC plans the reporting story is the member's account: contributions allocated, investment income assigned to accounts at the fund's actual returns, fees charged, and transfers in or out. The plan reports TOTAL net assets equal to the sum of member balances — a custodial equation. Where members direct their own investments among a menu of funds, each sub-fund's results are shown; the plan's job is accurate allocation, not performance promises, and the report should never imply a guaranteed return.",
        ar: "لطائف قصة التقرير في خطط الاشتراكات حساب العضو: اشتراكات مخصصة، ودخل استثماري موزع على الحسابات بعوائد الصندوق الفعلية، ورسوم محملة، وتحويلات داخلًا وخارجًا. وتعرض الخطة صافي الأصول الكلي مساويًا لمجموع أرصدة الأعضاء — معادلة حفظ. وحيث يوجه الأعضاء استثماراتهم بين قائمة صناديق، تعرض نتائج كل صندوق فرعي؛ فعمل الخطة تخصيص دقيق لا وعود أداء، ولا ينبغي للتقرير أن يوحي بعائد مضمون.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Exam craft for the plan-report question: open with the classification (DC or DB), because everything else follows from it. DC → net assets + changes, stop. DB → net assets + the actuarial promise + BOTH movement statements + assumptions and valuation-date disclosure. Then compute the funding level. That skeleton, filled with the scenario's numbers, is a complete answer every time.",
        ar: "حِرفة جواب سؤال تقرير الخطة: افتتح بالتصنيف (اشتراكات أم مزايا محددة) فكل ما بعده يتبعه. اشتراكات ← صافي الأصول وتغيراته ثم توقف. مزايا محددة ← صافي الأصول والوعد الاكتواري وقائمتا التغيرات وإفصاح الافتراضات وتاريخ التقييم. ثم احسب نسبة التمويل. هذا الهيكل المحشو بأرقام السيناريو جواب كامل في كل مرة.",
      },
    },
    { kind: "h", text: { en: "Comparability & restatement in plan reports", ar: "قابلية المقارنة وإعادة العرض في تقارير الخطط" } },
    {
      kind: "p",
      text: {
        en: "When a plan AMENDS its benefit formula mid-year, the promise is remeasured from the amendment date and the effect disclosed as a separate line in the promise's movement statement — members comparing year-on-year funding levels need to separate the formula's effect from investment performance. Similarly, a change of actuarial method or of the discount-rate assumption gets its own line; burying it inside the actuarial gain or loss hides the very judgement the disclosure exists to expose.",
        ar: "حين تعدل الخطة صيغة منافعها في منتصف السنة، يعاد قياس الوعد من تاريخ التعديل ويعرض أثره سطرًا مستقلًا في قائمة حركة الوعد — فالأعضاء الذين يقارنون نسب التمويل سنويًا بحاجة إلى فصل أثر الصيغة عن الأداء الاستثماري. وبالمنوال نفسه يأخذ تغير الطريقة الاكتوارية أو معدل الخصم سطره الخاص؛ ودمجه داخل المكسب أو الخسارة الاكتوارية يخفي الحكم الذي وُجد الإفصاح لأجل كشفه.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Disclose the amendment's nature, date, and measured effect on the promised benefits — the members' contract changed and they must see by how much", ar: "أفصح عن طبيعة التعديل وتاريخه وأثره المقيس على المزايا الموعودة — فعقد الأعضاء تغير وعليهم رؤية القدر" },
        { en: "Comparatives: the promise's movement statement restates only when the amendment changes benefits for PAST service — pure future-service changes leave the opening promise untouched", ar: "المقارنات: لا تعاد صياغة حركة الوعد إلا إذا عدل التعديل منافع الخدمة الماضية — أما تعديلات الخدمة المستقبلية فلا تمس الوعد الافتتاحي" },
        { en: "A merger of two plans: the combining entities' reports are brought to one basis before aggregation — two different conventions never sum into one promise", ar: "اندماج خطتين: تُوحَّد أسس التقريرين قبل التجميع — فاتفاقيتان مختلفتان لا تجمعان في وعد واحد أبدًا" },
      ],
    },
    {
      kind: "example",
      title: { en: "A DC plan's report card", ar: "بطاقة تقرير خطة اشتراكات" },
      lines: [
        { en: "Member balances at 1 Jan: 6.20m · employer contributions 0.48 · member contributions 0.32 · actual investment return +0.71 (11.5% on the average balance)", ar: "أرصدة الأعضاء أول يناير: ٦٫٢٠ مليون · اشتراكات صاحب العمل ٠٫٤٨ · اشتراكات الأعضاء ٠٫٣٢ · عائد استثماري فعلي ٠٫٧١+ (١١٫٥٪ على متوسط الرصيد)" },
        { en: "Transfers in 0.10 · transfers out & lump-sum withdrawals 0.18 · admin fees charged to members 0.03", ar: "تحويلات داخل ٠٫١٠ · تحويلات وخروجات ٠٫١٨ · رسوم إدارية على الأعضاء ٠٫٠٣" },
        { en: "Closing net assets available = 6.20 + 0.48 + 0.32 + 0.71 + 0.10 − 0.18 − 0.03 = 7.60m = the sum of member accounts — the custodial equation closes", ar: "صافي الأصول الختامي = ٦٫٢٠ + ٠٫٤٨ + ٠٫٣٢ + ٠٫٧١ + ٠٫١٠ − ٠٫١٨ − ٠٫٠٣ = ٧٫٦٠ مليون = مجموع حسابات الأعضاء — تُغلق معادلة الحفظ" },
        { en: "No actuarial promise is reported: the members' pensions ride the 11.5% — and the −8% year alike; that is the plan's design, stated plainly in the report", ar: "لا يعرض وعد اكتواري: فمعاشات الأعضاء تعتلي الـ١١٫٥٪ وتهبط مع السنة السالبة بالسواء — وهذا تصميم الخطة، يصرح به التقرير بوضوح" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "One fund, two species: a group can run a DC plan and a DB plan side by side — each reports separately under its own arm of IAS 26; never average a DC custodial balance into a DB funding level.",
        ar: "صندوق واحد ونوعان: قد تدير مجموعة خطة اشتراكات وأخرى مزايا محددة جنبًا إلى جنب — وكلٌّ تُفصح منفصلة بذراعها من IAS 26؛ ولا تمزج أبدًا رصيد حفظٍ لخطة اشتراكات في نسبة تمويل خطة مزايا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Separate the two exams in your head: IAS 19 = the EMPLOYER's expense & liability; IAS 26 = the PLAN's own fund report. The scenario 'the trustee of the fund prepares…' means IAS 26 — answer with net assets available, never with 'service cost to P&L'.",
        ar: "افصل الامتحانين في ذهنك: IAS 19 مصروف والتزام صاحب العمل؛ وIAS 26 تقرير الصندوق ذاته. وسيناريو «أمين الصندوق يعد…» يعني IAS 26 — أجب بصافي الأصول المتاح ولا تقل «تكلفة خدمة بالأرباح» أبدًا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "IAS 26 demands BOTH sides for defined-benefit plans — net assets AND the actuarial promise — candidates who show only one side lose the presentation mark even with perfect numbers.",
        ar: "يطلب IAS 26 الجانبين لخطط المزايا المحددة — صافي الأصول والوعد الاكتواري — ومن يعرض جانبًا واحدًا يخسر درجة العرض ولو صحت الأرقام كلها.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The funding-level percentage is the fastest exam mark in the paper: net assets ÷ actuarial PV × 100 — compute it the moment both numbers appear, and comment 'over/under-funded' in the same breath.",
        ar: "نسبة التمويل أسرع درجة في الورقة: الصافي ÷ القيمة الاكتوارية × ١٠٠ — احسبها فور ظهور الرقمين وعلّق «ممولة زيادة/بها عجز» في النَّفَس نفسه.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Plan investments are at FAIR VALUE, not cost — the members are the direct stakeholders; showing volatility is the point, not an inconvenience.",
        ar: "استثمارات الخطة بالقيمة العادلة لا بالتكلفة: فالمنتفعون هم أصحاب المصلحة المباشرون — وإظهار التقلبات هو المقصود لا مجرد إزعاج.",
      },
    },
    {
      kind: "note",
      text: {
        en: "A DC plan owes the actuarial promise nothing: the report stops at net assets available — writing a 'promised benefits' section for a DC plan is a category error markers penalise instantly.",
        ar: "خطة الاشتراكات لا تدين بالوعد الاكتواري بشيء: ينتهي تقريرها عند صافي الأصول المتاح — وكتابة قسم «المزايا الموعودة» لخطة اشتراكات خطأ تصنيفي يعاقبه المصحح فورًا.",
      },
    },
  ],
}
