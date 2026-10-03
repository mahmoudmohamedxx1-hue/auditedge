/** IFRS 17 — Insurance Contracts */

import type { Standard } from "../types"

export const IFRS_17: Standard = {
  code: "IFRS 17",
  title: { en: "Insurance Contracts", ar: "عقود التأمين" },
  topic: "specialized",
  effective: { en: "Effective 1 Jan 2023 · postposed by one year from 2021", ar: "سارٍ من ١ يناير ٢٠٢٣ · أُجِّل سنة عن ٢٠٢١" },
  replaces: { en: "Replaces IFRS 4 (the interim insurance standard)", ar: "يحل محل IFRS 4 (معيار التأمين المؤقت)" },
  blocks: [
    { kind: "h", text: { en: "Objective — twenty years in the making", ar: "الهدف — عشرون عامًا في الصنع" } },
    {
      kind: "p",
      text: {
        en: "IFRS 17 replaces IFRS 4's free-choice world (each insurer picked its own local GAAP) with ONE model for insurance contracts. An insurance contract transfers SIGNIFICANT INSURANCE RISK — the insurer accepts a specified scenario of uncertain future events that adversely affect the policyholder, beyond an amount that makes the risk insignificant. In exchange for the premium, the insurer promises to compensate the policyholder.",
        ar: "يحل IFRS 17 محل عالم IFRS 4 الحر (تختار كل شركة محاسبتها المحلية) بنموذج واحد لعقود التأمين. وعقد التأمين ينقل مخاطر تأمين جوهرية — يقبل المؤمِّن سيناريو محددًا من أحداث مستقبلية غير مؤكرة تضر بالمؤمَّن له بما يتجاوز الحد غير الجوهري. ومقابل القسط يَعِد المؤمِّن بالتعويض.",
      },
    },
    { kind: "h", text: { en: "Scope & the boundary", ar: "النطاق والحدود" },
    },
    {
      kind: "tree",
      root: { en: "Is it an insurance contract under IFRS 17?", ar: "هل هو عقد تأمين وفق IFRS 17؟" },
      branches: [
        {
          when: { en: "Significant insurance risk transferred (a specified adverse scenario could oblige the insurer to pay significantly more than the consideration received)", ar: "نقل مخاطر تأمين جوهرية (سيناريو ضار محدد قد يلزم المؤمِّن بدفع ما يزيد جوهريًا على العوض المقبوض)" },
          then: { en: "IN SCOPE — issued contracts, reinsurance HELD, and those issued via a reinsurer", ar: "داخل النطاق — العقود الصادرة وإعادة التأمين المكتتبة" },
        },
        {
          when: { en: "Only FINANCIAL risk (a bank deposit's interest rate risk) or only price/supply risk without compensation for the policyholder's adverse event", ar: "مخاطر مالية فقط أو مخاطر سعر دون تعويض عن حدث ضار" },
          then: { en: "IFRS 9 territory — a financial instrument, not insurance", ar: "أرض IFRS 9 — أداة مالية لا تأمين", red: true },
        },
        {
          when: { en: "Financial guarantees / product warranties: entity's option between IFRS 17 and IFRS 9 / IFRS 15 (the practical expedient)", ar: "ضمانات مالية أو ضمانات منتجات: خيار المنشأة بين IFRS 17 وIFRS 9/IFRS 15" },
          then: { en: "Choose and apply consistently; warranty contracts issued with a good are IFRS 15", ar: "اختر وطبق بثبات؛ وضمان السلعة المرفق يخضع لـIFRS 15", red: true },
        },
        {
          when: { en: "Fixed-fee service contracts where the fee & services are fixed (no insurance risk variability)", ar: "عقود خدمة بأجر ثابت وخدمات ثابتة (لا تقلب مخاطر تأمين)" },
          then: { en: "IFRS 15 revenue", ar: "إيراد IFRS 15", red: true },
        },
        {
          when: { en: "The CONTRACT BOUNDARY: cash flows within only when the substantive obligation to provide coverage stands — annual repricing/cancellation rights cut the boundary at the repricing date", ar: "حدود العقد: تدخل التدفقات ما دام الالتزام الجوهري بالتغطية قائمًا — وإعادة التسعير السنوية تقطع الحدود عند تاريخها" },
          then: { en: "Group at INCEPTION the contracts within the boundary; later amendments bring new groups", ar: "تجمَّع العقود داخل الحدود عند النشأة؛ والتعديلات اللاحقة مجموعات جديدة", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Level of aggregation — portfolios & groups", ar: "مستوى التجميع — المحافظ والمجموعات" } },
    {
      kind: "steps",
      items: [
        { en: "PORTFOLIOS: contracts with SIMILAR RISKS and MANAGED TOGETHER — no regard to profitability or currency", ar: "المحافظ: عقود بمخاطر مماثلة تُدار معًا — بغض النظر عن الربحية أو العملة" },
        { en: "Within each portfolio, group by (at inception): profitability (no possibility of being onerous vs any possibility) · loss recognition timing (annual cohorts — one group per year of inception)", ar: "داخل كل محفظة جماع بـ(عند النشأة): الربحية (استحالة أن يكون مفضِّرًا مقابل احتمالها) · وسنة الإصدار (زمرة لكل سنة نشأة)" },
        { en: "ONEROUS groups: test at inception (and each period); a loss for no-possibility-of-loss groups still tested at inception — no exploiting the annual cohort to hide loss-makers", ar: "المجموعات المفضِّرة: تختبر عند النشأة وكل فترة — ولا يجوز استغلال الزمر السنوية لإخفاء الخاسرة" },
      ],
    },
    { kind: "h", text: { en: "The general model (GMM) — the fulfilment-cash-flow engine", ar: "النموذج العام — محرك تدفقات الوفاء" } },
    {
      kind: "formula",
      title: { en: "The three building blocks", ar: "اللبنات الثلاث" },
      lines: [
        { en: "Block 1 — FULFILMENT CASH FLOWS: (a) probability-weighted future cash flows (premiums minus... claims, benefits, expenses — money in and out), (b) DISCOUNTED at illiquidity-consistent rates, (c) plus a RISK ADJUSTMENT for non-financial risk (the compensation the entity demands for bearing uncertainty)", ar: "اللبنة ١ — تدفقات الوفاء: (أ) تدفقات مستقبلية مرجحة بالاحتمالات، (ب) مخصومة بمعدلات تعكس عدم السيولة، (ج) + تعديل مخاطر للمخاطر غير المالية" },
        { en: "Block 2 — CONTRACTUAL SERVICE MARGIN (CSM): the unearned profit — released to P&L over the coverage as service is provided; NEW business is NOT booked through profit on day one", ar: "اللبنة ٢ — هامش الخدمة التعاقدي: الربح غير المكتسب — يستنزف بالأرباح عبر التغطية؛ والعمل الجديد لا يضرب بالأرباح في يومه الأول" },
        { en: "Block 3 — the P&L presentation: insurance revenue = earned over the coverage; insurance service expense = claims & expenses attributable; the financing: INTEREST ACCRETION on the CSM + the unwind of the discount in OCI or P&L (an election)", ar: "اللبنة ٣ — العرض: الإيراد يكتسب عبر التغطية؛ ومصروف الخدمة يعزى للمطالبات؛ والتمويل: استحقاق على الهامش وفك الخصم — بالدخل الشامل أو الأرباخ (انتخاب)" },
        { en: "The liability for remaining coverage = FCF + CSM; the liability for INCURRED CLAIMS = past events' cash flows (no CSM)", ar: "التزام التغطية المتبقية = التدفقات + الهامش؛ والتزام المطالبات الواقعة = تدفقات أحداث ماضية (بلا هامش)" },
      ],
    },
    {
      kind: "journal",
      title: { en: "GMM through the first year", ar: "النموذج العام عبر السنة الأولى" },
      rows: [
        { dr: { en: "Cash (premiums received)", ar: "نقد (أقساط مقبوضة)" }, cr: { en: "Liability for remaining coverage (FCF: cash flows in)", ar: "التزام التغطية المتبقية (تدفقات داخلة)" } },
        { dr: { en: "Liability (FCF out + risk adj. + day-one CSM)", ar: "الالتزام (تدفقات خارجة + تعديل مخاطر + هامش يوم أول)" }, cr: { en: "Liability — CSM (unearned profit parked)", ar: "الالتزام — هامش (ربح غير مكتسب متوقف)" }, red: true },
        { dr: { en: "Insurance service expense / insurance finance expense", ar: "مصروف خدمة/مصروف تمويل تأميني" }, cr: { en: "Liability (accretion & unwinding)", ar: "الالتزام (استحقاق وفك خصم)" } },
        { dr: { en: "Liability — CSM (release as coverage is provided)", ar: "الالتزام — هامش (استنزاف مع التغطية)" }, cr: { en: "Insurance revenue (P&L — no day-one profit!)", ar: "إيراد تأمين (بالأرباح — لا ربح يوم أول!)" }, red: true },
        { dr: { en: "Liability for incurred claims", ar: "التزام المطالبات الواقعة" }, cr: { en: "Cash (claims paid)", ar: "نقد (مطالبات مسددة)" } },
      ],
    },
    { kind: "h", text: { en: "The two simplified models", ar: "النموذجان المبسطان" } },
    {
      kind: "tree",
      root: { en: "Which model applies?", ar: "أي نموذج ينطبق؟" },
      branches: [
        {
          when: { en: "PREMIUM ALLOCATION APPROACH (PAA) — coverage period ≤ 1 year (or the PAA's result would not differ materially from GMM): keep the liability ≈ unearned premiums; no CSM machinery, no risk adjustment discretions", ar: "أسلوب توزيع الأقساط — تغطية ≤ سنة (أو نتيجة لا تختلف جوهريًا): يبقى الالتزام قريبًا من الأقساط غير المكتسبة؛ بلا آلية هامش" },
          then: { en: "Simple & familiar — revenue follows the coverage pattern; an onerous-contract test still applies", ar: "بسيط ومألوف — الإيراد يتبع نمط التغطية؛ ويظل اختبار المفضِّر قائمًا", red: true },
        },
        {
          when: { en: "DIRECT PARTICIPATING contracts: the policyholder shares in a clearly identifiable pool of UNDERLYING ITEMS; the entity expects to pay an amount equal to a substantial share of the fair-value returns of those items; the policyholder expects a substantial share of the returns", ar: "عقود المشاركة المباشرة: يشارك المؤمَّن له في محفظة بنود أساسية محددة بوضوح مع توقع دفع نصيب جوهري من عوائدها وتوقع حصوله على النصيب ذاته" },
          then: { en: "VARIABLE FEE APPROACH (VFA) — a modified GMM where the CSM adjusts for the entity's variable fee (the share of returns it keeps), absorbing investment-return volatility into the CSM", ar: "أسلوب الرسم المتغير — نموذج عام معدل يمتص تقلب العوائد في الهامش", red: true },
        },
        {
          when: { en: "Neither simplification fits", ar: "لا يلائم أي تبسيط" },
          then: { en: "The FULL GMM", ar: "النموذج العام الكامل", red: true },
        },
        {
          when: { en: "REINSURANCE HELD: apply IFRS 17 to the reinsurer's side — with a GMM mirror (no PAA for reinsurance held; loss-recovery rights are asset-side machinery)", ar: "إعادة التأمين المكتتبة: يطبق الجانب الآخر — بمرآة النموذج العام (ولا PAA) وحقوق استرداد الخسائر" },
          then: { en: "Ceded premiums → recoveries recognised per the same engines", ar: "الأقساط الممررة ← استردادات بالمحركات ذاتها" },
        },
      ],
    },
    { kind: "h", text: { en: "Onerous contracts & the loss component", ar: "العقود المفضِّرة ومكون الخسارة" } },
    {
      kind: "p",
      text: {
        en: "A group is ONEROUS when the fulfilment cash flows exceed the consideration — recognise the loss IMMEDIATELY in P&L and create a LOSS COMPONENT (a liability add-on) tracked separately; subsequent changes in that component run through P&L (not the CSM, which stays at zero for onerous groups). The reversal path: if estimates improve, the loss component unwinds through P&L before any new CSM arises.",
        ar: "يكون الزمرة مفضِّرة عندما تتجاوز تدفقات الوفاء المقابل — تعترف بالخسارة فورًا بالأرباح وتنشئ مكون خسارة يتابع منفصلًا؛ وتغيراته اللاحقة بالأرباح (لا الهامش الذي يبقى صفرًا للزمرة المفضِّرة). وسبيل الرد: إذا تحسنت التقديرات يفك مكون الخسارة بالأرباح قبل نشوء أي هامش جديد.",
      },
    },
    { kind: "h", text: { en: "Presentation — the P&L geography", ar: "العرض — جغرافيا قائمة الأرباح" } },
    {
      kind: "list",
      items: [
        { en: "Insurance REVENUE (earned premiums + the risk adjustment's release + the CSM's release) and insurance SERVICE EXPENSE presented NET on the face — insurance service result", ar: "إيراد التأمين (أقساط مكتسبة + استنزاف تعديل المخاطر والهامش) ومصروف الخدمة يعرضان صافيَين — نتيجة خدمة التأمين" },
        { en: "NO investment income netting inside the service lines; insurance finance income/expense shown separately (with the OCI election for the discount-unwind of long-duration business)", ar: "لا مقاصة للدخل الاستثماري داخل سطور الخدمة؛ والدخل/المصروف المالي التأميني سطر مستقل (مع انتخاب الدخل الشامل لفك الخصم طويل الأمد)" },
        { en: "Premiums collected in cash are NOT revenue until earned — the received-not-yet-earned amounts roll inside the liability", ar: "الأقساط المقبوضة ليست إيرادًا حتى تكتسب — فالمقبوض غير المكتسب يتدحرج داخل الالتزام" },
        { en: "Reinsurance held: a SEPARATE insurance service result (revenue recovery) — never a mere premium expense netting", ar: "إعادة التأمين المكتتبة: نتيجة خدمة مستقلة — لا مجرد مقاصة مصروف أقساط" },
      ],
    },
    {
      kind: "example",
      title: { en: "A one-policy GMM walk", ar: "جولة نموذج عام بعقد واحد" },
      lines: [
        { en: "Premium 1,200 cash · expected claims & expenses 1,000 (PV) · risk adjustment 60 · discount unwinding not yet due", ar: "قسط نقدي ١٬٢٠٠ · مطالبات ومصروفات متوقعة (قيمة حالية) ١٬٠٠٠ · تعديل مخاطر ٦٠" },
        { en: "Day one: FCF = −1,000 − 60 = −1,060; premium in +1,200 → pre-CSM surplus 140", ar: "اليوم الأول: التدفقات = ١٬٠٦٠−؛ والقسط ١٬٢٠٠+ ← فائض ما قبل الهامش ١٤٠" },
        { en: "CSM = 140 (no day-one P&L); liability for remaining coverage = 1,060 + 140 = 1,200 = the premium received", ar: "الهامش = ١٤٠ (لا أرباح يوم أول)؛ والتزام التغطية = ١٬٠٦٠ + ١٤٠ = ١٬٢٠٠ = القسط المقبوض" },
        { en: "During year 1 the entity provides half the coverage → release 70 of CSM as revenue; the FCF unwinds at the locked rate as finance expense (OCI election available)", ar: "خلال السنة الأولى تقدم نصف التغطية ← يستنزف ٧٠ من الهامش إيرادًا؛ وتفك التدفقات بمعدلها المقفول مصروفًا تمويليًا (مع انتخاب الدخل الشامل)" },
        { en: "If claims estimates jump to 1,300: loss on the onerous side via the loss component — CSM stays 70 (locked)", ar: "إذا قفزت تقديرات المطالبات إلى ١٬٣٠٠: خسارة عبر مكون الخسارة — ويبقى الهامش ٧٠ مقفولًا" },
      ],
    },
    { kind: "h", text: { en: "Transition & the 2023 world", ar: "الانتقال وعالم ٢٠٢٣" } },
    {
      kind: "list",
      items: [
        { en: "Three transition routes: full restatement (IFRS 17 C3) · modified retrospective · fair value at transition (the last resort when data is missing)", ar: "ثلاثة مسارات انتقال: إعادة عرض كاملة · رجعية معدلة · القيمة العادلة عند الانتقال (الملاذ الأخير عند فقد البيانات)" },
        { en: "The annual cohorts start at the date of initial application — historical portfolios enter via the transition routes", ar: "تبدأ الزمر السنوية عند أول تطبيق — والمحافظ التاريخية تدخل بمسارات الانتقال" },
        { en: "Interaction suite: IFRS 9 for the insurers' financial assets (the asset-liateral mismatch drove the OCI election's design), IFRS 15 for non-insurance components (investment management services carved out as separate performance obligations)", ar: "تفاعلات: IFRS 9 لأصول شركات التأمين (عدم تماثل الأصل والالتزام هو الذي صمم انتخاب الدخل الشامل)، وIFRS 15 للمكونات غير التأمينية (خدمات إدارة استثمار تنتزع التزامات أداء مستقلة)" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Say 'CSM = unearned profit released as SERVICE is provided' in the first paragraph — the whole standard hangs on that sentence; day-one profit only ever arises for the risk-adjustment release mechanics... in fact no day-one profit at all for new business.",
        ar: "قل في الفقرة الأولى «الهامش ربح غير مكتسب يستنزف بتقديم الخدمة» — فالمعيار كله معلق بتلك الجملة؛ ولا ربح يوم أول للعمل الجديد إطلاقًا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "PAA vs GMM vs VFA in one line each: PAA = unearned-premium shortcut (≤ 1 year) · GMM = the full three-block engine · VFA = GMM with the CSM absorbing the pool's returns. The trio line answers most selection questions.",
        ar: "سطر لكل نموذج: PAA اختصار الأقساط غير المكتسبة (≤ سنة) · GMM محرك اللبنات الثلاث كاملًا · VMA نموذج عام يمتص الهامش عوائد المحفظة. وثلاثية الأسطر تجيب معظم أسئلة الاختيار.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The June 2020 amendments softened the load: acquisition costs may be deferred as an asset for future cash flows, and reinsurance aggregation was widened.",
        ar: "تعديلات يونيو ٢٠٢٠ خففت الحمل: تكاليف الاستحواذ قابلة للتأجيل كأصل لتدفقات نقدية مستقبلية، وتجميع أوسع لعقود إعادة التأمين.",
      },
    },
  ],
}
