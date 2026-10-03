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
      ],
    },
    {
      kind: "formula",
      title: { en: "The plan's core equation", ar: "معادلة الخطة الجوهرية" },
      lines: [
        { en: "Net assets available for benefits = plan investments at fair value + other assets − liabilities other than the promised benefits", ar: "صافي الأصول المتاح = الاستثمارات بالعادلة + أصول أخرى − الالتزامات عدا المزايا الموعودة" },
        { en: "Funding surplus/(deficit) = net assets available − actuarial present value of promised benefits", ar: "فائض/(عجز) التمويل = الصافي المتاح − القيمة الاكتوارية للمزايا" },
        { en: "Investment performance: report the REAL return achieved (and its components) — the plan's scorecard", ar: "الأداء الاستثماري: يعاد العائد المتحقق الفعلي (ومكوناته) — بطاقة أداء الخطة" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The plan's own entries", ar: "قيود الخطة ذاتها" },
      rows: [
        { dr: { en: "Cash / contributions receivable", ar: "نقد / اشتراكات مستحقة" }, cr: { en: "Employer & member contributions (income to the fund)", ar: "اشتراكات صاحب العمل والمشاركين (دخل الصندوق)" } },
        { dr: { en: "Plan investments", ar: "استثمارات الخطة" }, cr: { en: "Cash (purchases) · Fair-value gains (returns)", ar: "نقد (شراء) · مكاسب عادلة (عوائد)" }, red: true },
        { dr: { en: "Benefits payable to members", ar: "منافع مستحقة للأعضاء" }, cr: { en: "Cash (pensions paid out)", ar: "نقد (معاشات مدفوعة)" } },
        { cr: { en: "The promised-benefits obligation itself: a MEMO-side actuarial figure presented beside the assets — the funding gap is a REPORTING gap, not the plan's bookkeeping entry", ar: "التزام المزايا الموعودة رقم اكتواري يعرض بجوار الأصول — وفجوة التمويل فجوة تقرير لا قيد دفاتر" }, red: true },
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
      ],
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
      kind: "note",
      text: {
        en: "Plan investments are at FAIR VALUE, not cost — the members are the direct stakeholders; showing volatility is the point, not an inconvenience.",
        ar: "استثمارات الخطة بالقيمة العادلة لا بالتكلفة: فالمنتفعون هم أصحاب المصلحة المباشرون — وإظهار التقلبات هو المقصود لا مجرد إزعاج.",
      },
    },
  ],
}
