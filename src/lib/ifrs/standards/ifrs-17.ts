/** IFRS 17 — Insurance Contracts */

import type { Standard } from "../types"

export const IFRS_17: Standard = {
  code: "IFRS 17",
  title: { en: "Insurance Contracts", ar: "عقود التأمين" },
  topic: "specialized",
  effective: { en: "Effective 1 Jan 2023 · postposed by one year from 2021", ar: "سارٍ من ١ يناير ٢٠٢٣ · أُجِّل سنة عن ٢٠٢١" },
  replaces: { en: "Replaces IFRS 4 (the interim insurance standard)", ar: "يحل محل IFRS 4 (معيار التأمين المؤقت)" },
  blocks: [
    { kind: "h", text: { en: "Objective & core principle", ar: "الهدف والمبدأ الأساسي" } },
    {
      kind: "p",
      text: {
        en: "IFRS 17 replaces IFRS 4's free-choice world (each insurer picked its own local GAAP) with ONE model for insurance contracts, twenty years in the making. An insurance contract transfers SIGNIFICANT INSURANCE RISK: the insurer accepts, in exchange for the premium, a specified scenario of uncertain future events that adversely affect the policyholder — and could oblige the insurer to pay significantly more benefits than the consideration received (plus the return thereon). The core principle: recognise the profit from a group of contracts NOT on day one, but AS THE COVERAGE IS PROVIDED — the CONTRACTUAL SERVICE MARGIN (the unearned profit) unwinds over the coverage period while the fulfilment cash flows and the risk adjustment roll forward at current estimates.",
        ar: "يحل IFRS 17 محل عالم IFRS 4 الحر (تختار كل شركة محاسبتها المحلية) بنموذج واحد لعقود التأمين، صُنع عشرون عامًا. وعقد التأمين ينقل مخاطر تأمين جوهرية: يقبل المؤمِّن، مقابل القسط، سيناريو محددًا من أحداث مستقبلية غير مؤكدة تضر بالمؤمَّن له — وقد يلزمه بدفع منافع تزيد جوهريًا على المقابل المقبوض (مضافًا إليه عائده). والمبدأ الجوهري: لا يعترف بربح زمرة العقود في اليوم الأول، بل بقدر ما تُقدَّم التغطية — فهمش الخدمة التعاقدية (الربح غير المكتسب) يستنزف عبر فترة التغطية بينما تتدحرج تدفقات الوفاء وتعديل المخاطر بالتقديرات الجارية.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Significant INSURANCE risk vs mere FINANCIAL risk: insurance risk pre-exists the contract's financial structure — death, fire, flood. A bank deposit's interest-rate risk is financial risk → IFRS 9, not insurance.",
        ar: "مخاطر التأمين الجوهرية مقابل المالية المجردة: مخاطر التأمين سابقة على البنية المالية للعقد — وفاة، حريق، فيضان. أما مخاطر الفائدة على وديعة بنكية فمالية ← IFRS 9 لا تأمين.",
      },
    },
    { kind: "h", text: { en: "Scope & the boundary", ar: "النطاق والحدود" } },
    {
      kind: "p",
      text: {
        en: "IFRS 17 applies to every entity that ISSUES insurance contracts, reinsurance contracts HELD, and investment contracts with DISCRETIONARY PARTICIPATION FEATURES issued by insurers. It replaced IFRS 4 wholesale from 1 January 2023 — after a one-year deferral so insurers could finish the data and system builds. The CONTRACT BOUNDARY decides which future cash flows enter the group: include the cash flows arising from SUBSTANTIVE obligations to provide coverage — and stop the boundary where the entity can reprice or cancel the contract free of a substantial penalty (an annual repricing right cuts the boundary at each repricing date). Fixed-fee service contracts, product warranties bundled with goods and employers' employee-benefit promises all fall to other standards; financial guarantees split on an explicit prior assertion.",
        ar: "ينطبق IFRS 17 على كل منشأة تُصدر عقود تأمين أو عقود إعادة تأمين مقتناة أو عقود استثمار بميزات مشاركة تقديرية تصدرها شركات التأمين. وقد أبدل IFRS 4 بالكامل في ١ يناير ٢٠٢٣ — بعد تأجيل سنة لتُكمل الشركات بناء البيانات والأنظمة. وحدود العقد هي التي تقرر أي التدفقات المستقبلية تدخل الزمرة: تُدرج التدفقات الناشئة عن الالتزامات الجوهرية بتقديم التغطية — ويتوقف الحد حيث تستطيع المنشأة إعادة التسعير أو الإلغاء دون جزاء جوهري (فحق إعادة التسعير السنوي يقطع الحد عند كل تاريخ تسعير). أما عقود الخدمة بأجر ثابت وضمانات المنتجات المرفقة بالسلع ووعود مزايا الموظفين فكلها لمعايير أخرى؛ وتنفصل الضمانات المالية بتأكيد صريح سابق.",
      },
    },
    {
      kind: "tree",
      root: { en: "Is it an insurance contract under IFRS 17?", ar: "هل هو عقد تأمين وفق IFRS 17؟" },
      branches: [
        {
          when: { en: "Significant insurance risk transferred (a specified adverse scenario could oblige the insurer to pay significantly more than the consideration received)", ar: "نقل مخاطر تأمين جوهرية (سيناريو ضار محدد قد يلزم المؤمِّن بدفع ما يزيد جوهريًا على المقابل المقبوض)" },
          then: { en: "IN SCOPE — issued contracts, reinsurance HELD, and those issued via a reinsurer", ar: "داخل النطاق — العقود الصادرة وإعادة التأمين المقتناة وما يصدر عبر معيد التأمين" },
        },
        {
          when: { en: "Only FINANCIAL risk (a bank deposit's interest rate risk) or only price/supply risk without compensation for the policyholder's adverse event", ar: "مخاطر مالية فقط (كمخاطر فائدة وديعة بنكية) أو مخاطر سعر دون تعويض عن حدث ضار" },
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
    {
      kind: "list",
      items: [
        { en: "Product warranties issued by a manufacturer/retailer with the sale of goods → IFRS 15", ar: "ضمانات المنتجات التي يصدرها صانع أو تاجر مرفقة ببيع السلع ← IFRS 15" },
        { en: "Employers' assets & benefits for employee medical/welfare promises → IAS 19 & IFRS 2", ar: "أصول المطالبات ومزايا الموظفين الصحيفة والاجتماعية ← IAS 19 وIFRS 2" },
        { en: "Financial guarantee contracts → IFRS 9 by default; IFRS 17 only if the entity has explicitly asserted it treats them as insurance", ar: "عقود الضمان المالي ← IFRS 9 افتراضًا؛ ولا IFRS 17 إلا إذا صرحت المنشأة سابقًا بمعاملتها تأمينًا" },
        { en: "Investment contracts WITHOUT discretionary participation features → IFRS 9 even for insurers", ar: "عقود الاستثمار بلا ميزات مشاركة تقديرية ← IFRS 9 حتى لشركات التأمين" },
        { en: "Self-insurance (internal retentions) → IAS 37, never a contract with a policyholder", ar: "التأمين الذاتي (الاحتفاظات الداخلية) ← IAS 37، فليس عقدًا مع مؤمَّن له" },
      ],
    },
    { kind: "h", text: { en: "Key definitions — the vocabulary sheet", ar: "التعريفات الأساسية — ورطة المصطلحات" } },
    {
      kind: "list",
      items: [
        { en: "INSURANCE CONTRACT — significant insurance risk transferred from the policyholder to the issuer", ar: "عقد التأمين — نقل مخاطر تأمين جوهرية من المؤمَّن له إلى المصدر" },
        { en: "PORTFOLIO — contracts subject to similar risks AND managed together (no regard to profitability or currency)", ar: "المحفظة — عقود بمخاطر مماثلة وتُدار معًا (بغض النظر عن الربحية أو العملة)" },
        { en: "GROUP — portfolios split by profitability (onerous-possible vs never-onerous) and by ANNUAL COHORT of inception year", ar: "الزمرة — المحافظ مقسمة بالربحية (احتمال التفضير مقابل استحالته) وبزمرة سنوية لسنة النشأة" },
        { en: "FULFILMENT CASH FLOWS — probability-weighted estimates of future cash flows (claims, benefits, expenses, premiums), discounted at current rates, plus a risk adjustment", ar: "التدفقات النقدية للوفاء — تقديرات مستقبلية مرجحة بالاحتمالات (مطالبات ومنافع ومصروفات وأقساط) مخصومة بمعدلات جارية، مضافًا إليها تعديل مخاطر" },
        { en: "RISK ADJUSTMENT — the compensation the entity demands for bearing NON-FINANCIAL risk uncertainty (entity-specific, not a market price)", ar: "تعديل المخاطر — التعويض الذي تطلبه المنشأة لتحمل عدم التأكد في المخاطر غير المالية (خاص بالمنشأة لا سعر سوق)" },
        { en: "CONTRACTUAL SERVICE MARGIN (CSM) — the unearned profit: the difference between the consideration and the fulfilment cash flows, released to profit as coverage is provided", ar: "هامش الخدمة التعاقدية — الربح غير المكتسب: الفرق بين المقابل وتدفقات الوفاء، ويستنزف بالأرباح بقدر تقديم التغطية" },
        { en: "LRC / LIC — the LIABILITY FOR REMAINING COVERAGE (future service: FCF + CSM) and the LIABILITY FOR INCURRED CLAIMS (past events: FCF only, no CSM)", ar: "التزام التغطية المتبقية / التزام المطالبات الواقعة — الأول للخدمة المستقبلية (تدفقات + هامش) والثاني للأحداث الماضية (تدفقات فقط بلا هامش)" },
        { en: "COVERAGE UNITS — quantity of coverage × duration of coverage per unit: the driver that allocates the transaction price and the CSM release", ar: "وحدات التغطية — كمية التغطية × مدة التغطية لكل وحدة: وهي المحرك الذي يوزع سعر المعاملة واستنزاف الهامش" },
        { en: "REINSURANCE HELD — a contract a cedant buys to compensate it for losses on insurance contracts it has issued (an ASSET-side mirror of the model)", ar: "إعادة التأمين المقتنى — عقد يشتريه المعيد تعويضًا له عن خسائر عقود التأمين التي أصدرها (مرآة النموذج في جانب الأصول)" },
        { en: "PREMIUM ALLOCATION APPROACH (PAA) — the simplified model: keep the liability ≈ unearned premium and earn revenue over the coverage", ar: "أسلوب توزيع الأقساط — النموذج المبسط: يبقي الالتزام قريبًا من الأقساط غير المكتسبة ويكتسب الإيراد عبر التغطية" },
        { en: "THE FLOOR — the FVOCI election for insurers: the accumulated OCI for designated financial assets must never sit in a NET LOSS position", ar: "الحد الأدنى — انتخاب FVOCI للمعيدين: لا يجوز أن يكون الدخل الشامل المراكم للأصول المالية المسماة في مركز خسارة صافية أبدًا" },
      ],
    },
    { kind: "h", text: { en: "Level of aggregation — portfolios & groups", ar: "مستوى التجميع — المحافظ والزمر" } },
    {
      kind: "steps",
      items: [
        { en: "PORTFOLIOS: contracts with SIMILAR RISKS and MANAGED TOGETHER — no regard to profitability or currency", ar: "المحافظ: عقود بمخاطر مماثلة وتُدار معًا — بغض النظر عن الربحية أو العملة" },
        { en: "Within each portfolio, group by (at inception): profitability (no possibility of being onerous vs any possibility) · loss recognition timing (annual cohorts — one group per year of inception)", ar: "داخل كل محفظة جماع بـ(عند النشأة): الربحية (استحالة أن يكون مفضِّرًا مقابل احتمالها) · وسنة الإصدار (زمرة لكل سنة نشأة)" },
        { en: "ONEROUS groups: test at inception (and each period); a loss for no-possibility-of-loss groups still tested at inception — no exploiting the annual cohort to hide loss-makers", ar: "المجموعات المفضِّرة: تختبر عند النشأة وكل فترة — ولا يجوز استغلال الزمر السنوية لإخفاء الخاسرة" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "WHY annual cohorts? Profitable and unprofitable contracts sitting in one group would let the entity hide day-one losses behind earlier profits — the cohort walls stop profits from newer years cross-subsidising losses of older ones. The loss-recognition timing split (contracts that could become onerous during the period vs those that cannot) prevents another dodge: burying newly-onerous contracts inside groups whose CSM still has headroom. Once a group is set at inception it is never re-bucketed; new contracts enter as new groups — even when economically identical to the old ones.",
        ar: "لماذا الزمر السنوية؟ لأن وضع العقود الرابحة والخاسرة في زمرة واحدة يتيح إخفاء خسائر اليوم الأول خلف أرباح سابقة — وجدران الزمر تمنع أرباح السنين الأحدث من إعانة خسائر الأقدم. وانقسام توقيت الاعتراف بالخسارة (العقود التي قد تصير مفضِّرة خلال الفترة مقابل التي لا يمكن) يمنع مراوغة أخرى: دفن العقود المفضِّرة حديثًا داخل زمر لا يزال لهامشها متسع. وبمجرد وضع الزمرة عند النشأة لا يعاد تصنيفها أبدًا؛ فالعقود الجديدة تدخل زمرًا جديدة — وإن كانت مطابقة اقتصاديًا للقديمة.",
      },
    },
    { kind: "h", text: { en: "The general model (GMM) — the three building blocks", ar: "النموذج العام — اللبنات الثلاث" } },
    {
      kind: "formula",
      title: { en: "The three building blocks", ar: "اللبنات الثلاث" },
      lines: [
        { en: "Block 1 — FULFILMENT CASH FLOWS: (a) probability-weighted future cash flows (premiums minus claims, benefits, expenses — money in and out), (b) DISCOUNTED at current rates reflecting the liabilities' characteristics (liquidity, timing & amount uncertainty), (c) plus a RISK ADJUSTMENT for non-financial risk", ar: "اللبنة ١ — تدفقات الوفاء: (أ) تدفقات مستقبلية مرجحة بالاحتمالات (أقساط مطروحًا منها مطالبات ومنافع ومصروفات)، (ب) مخصومة بمعدلات جارية تعكس خصائص الالتزامات (السيولة وعدم تأكد التوقيت والمبلغ)، (ج) + تعديل مخاطر للمخاطر غير المالية" },
        { en: "Block 2 — CONTRACTUAL SERVICE MARGIN (CSM): the unearned profit — released to P&L over the coverage as service is provided; NEW business is NOT booked through profit on day one", ar: "اللبنة ٢ — هامش الخدمة التعاقدي: الربح غير المكتسب — يستنزف بالأرباح عبر التغطية بقدر تقديم الخدمة؛ والعمل الجديد لا يضرب بالأرباح في يومه الأول" },
        { en: "Block 3 — the P&L presentation: insurance revenue = earned over the coverage; insurance service expense = claims & expenses attributable; the financing: INTEREST ACCRETION on the CSM (locked rate) + the unwind of the discount on the FCF (current rates) in OCI or P&L (an election)", ar: "اللبنة ٣ — العرض: إيراد التأمين يكتسب عبر التغطية؛ ومصروف الخدمة يعزى للمطالبات؛ والتمويل: استحقاق على الهامش (بمعدل مقفول) + فك خصم التدفقات (بمعدلات جارية) — بالدخل الشامل أو الأرباح (انتخاب)" },
        { en: "The liability for remaining coverage = FCF + CSM; the liability for INCURRED CLAIMS = past events' cash flows (no CSM)", ar: "التزام التغطية المتبقية = التدفقات + الهامش؛ والتزام المطالبات الواقعة = تدفقات أحداث ماضية (بلا هامش)" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Two liabilities, two lives: the LIABILITY FOR REMAINING COVERAGE (LRC) carries the future-service machinery — fulfilment cash flows plus the CSM (plus a loss component when onerous) — while the LIABILITY FOR INCURRED CLAIMS (LIC) holds the discounted, risk-adjusted cash flows for events that have already happened; it carries no CSM because no service remains. When an insured event occurs, the expected present value of claims moves from the LRC to the LIC and the related revenue/expense is recognised. Thereafter the LIC is a discounted claims reserve: its discount unwinds through insurance finance expense, and changes in claims estimates run through P&L.",
        ar: "التزامان وحياتان: التزام التغطية المتبقية يحمل آلية الخدمة المستقبلية — تدفقات الوفاء مضافًا إليها الهامش (ومكون خسارة عند التفضير) — بينما التزام المطالبات الواقعة يحمل التدفقات المخصومة المعدلة بالمخاطر لأحداث وقعت بالفعل؛ ولا يحمل هامشًا لأن لا خدمة بقيت. فإذا وقع الحادث المؤمَّن منه انتقلت القيمة الحالية المتوقعة للمطالبات من تغطية المتبقية إلى المطالبات الواقعة وعُرف الإيراد والمصروف المناسب. وبعدها يصير التزام المطالبات مخصص مطالبات مخصومًا: يفك خصمه مصروفًا تمويليًا تأمينيًا، وتغيرات تقديرات المطالبات تمر بالأرباح.",
      },
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
    { kind: "h", text: { en: "The five-step sequence: from premium to revenue", ar: "تسلسل الخطوات الخمس: من القسط إلى الإيراد" } },
    {
      kind: "steps",
      items: [
        { en: "Identify the CONTRACTS (significant insurance risk) and assemble PORTFOLIOS of similar risks managed together", ar: "حدد العقود (مخاطر تأمين جوهرية) وكوِّن المحافظ من المخاطر المماثلة المدارة معًا" },
        { en: "GROUP at inception: onerous-possible vs never-onerous · annual cohorts", ar: "جماع عند النشأة: احتمال التفضير مقابل استحالته · وزمر سنوية" },
        { en: "MEASURE the LRC at inception: FCF (probability-weighted estimates + risk adjustment, discounted) + CSM — no day-one gain; a day-one LOSS if the group is onerous", ar: "قِس التزام التغطية عند النشأة: التدفقات (تقديرات مرجحة + تعديل مخاطر مخصومة) + الهامش — لا ربح يوم أول؛ وخسارة يوم أول إذا كانت الزمرة مفضِّرة" },
        { en: "ROLL FORWARD each period: premiums adjust the LRC; estimate changes for FUTURE service adjust the CSM; interest accretes at locked rates; the FCF discount unwinds at current rates → insurance finance income/expense (P&L or OCI)", ar: "دحرج كل فترة: الأقساط تعدل الالتزام؛ وتغيرات التقديرات للخدمة المستقبلية تعدل الهامش؛ والفائدة تستحق بمعدلات مقفولة؛ وخصم التدفقات يفك بمعدلات جارية ← دخل/مصروف تمويلي تأميني (أرباح أو دخل شامل)" },
        { en: "RECOGNISE revenue & expense per COVERAGE UNITS (quantity × duration); release the risk adjustment and the CSM with the coverage; track the loss component for onerous groups", ar: "اعترف بالإيراد والمصروف وفق وحدات التغطية (الكمية × المدة)؛ واستنزف تعديل المخاطر والهامش مع التغطية؛ وتابع مكون الخسارة للزمر المفضِّرة" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "COVERAGE UNITS are the metronome of the whole standard: each group's coverage is measured in units of quantity of coverage × duration — e.g. one policy-year of death benefit, a life insured for a year with a given sum at risk. The units drive both the revenue pattern and the CSM release, so revenue follows where the SERVICE goes, not where the cash lands. Where the risk level differs materially between periods, weight the units by the amount of benefit; where policyholders differ materially (different risk profiles or payment patterns), treat them as distinct unit pools. A contract earning most of its coverage in year 1 books most of its revenue there — even if the premium instalments straddle three years.",
        ar: "وحدات التغطية هي إيقاع المعيار كله: تُقاس تغطية كل زمرة بوحدات الكمية × المدة — كسنة عقد واحد لمنفعة الوفاة، أو حياة مؤمَّن عليها سنة بمبلغ خطر معين. وتقود الوحدات نمط الإيراد واستنزاف الهامش معًا، فيتبع الإيراد مسار الخدمة لا مسار النقد. وحيث يختلف مستوى الخطر جوهريًا بين الفترات تُرجَّح الوحدات بمبلغ المنفعة؛ وحيث يختلف المؤمَّن لهم جوهريًا (تشكيلات خطر أو أنماط سداد مختلفة) يعاملون مجموعات وحدات متميزة. فالعقد الذي يكتسب جوهر تغطيته في السنة الأولى يحجز جوهر إيراده فيها — ولو امتدت أقساطه على ثلاث سنوات.",
      },
    },
    {
      kind: "formula",
      title: { en: "Coverage units & the CSM release engine", ar: "وحدات التغطية ومحرك استنزاف الهامش" },
      lines: [
        { en: "Coverage units = quantity of coverage × duration of coverage (weight by risk/benefit level when materially different)", ar: "وحدات التغطية = كمية التغطية × مدة التغطية (بترجيح مستوى الخطر/المنفعة عند الاختلاف الجوهري)" },
        { en: "CSM release for a period = rolled CSM × (coverage units provided in the period ÷ total coverage units)", ar: "استنزاف الهامش للفترة = الهامش المدحرج × (وحدات الفترة ÷ إجمالي الوحدات)" },
        { en: "Rolled CSM = opening CSM + interest accretion at the LOCKED rate ± changes in FCF for future service", ar: "الهامش المدحرج = افتتاحي + استحقاق فائدة بالمعدل المقفول ± تغيرات التدفقات للخدمة المستقبلية" },
        { en: "Insurance revenue = the earned slice: cost recovery + risk adjustment release + CSM release = the transaction price allocated per coverage units (time-value adjusted)", ar: "إيراد التأمين = الشريحة المكتسبة: استرداد التكاليف + استنزاف تعديل المخاطر + استنزاف الهامش = سعر المعاملة موزعًا على وحدات التغطية (معدولً بالقيمة الزمنية)" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Premium revenue & service expense — a 2,000 premium, coverage 60% / 40%", ar: "إيراد الأقساط ومصروف الخدمة — قسط ٢٬٠٠٠ وتغطية ٦٠٪/٤٠٪" },
      rows: [
        { dr: { en: "Cash 2,000", ar: "نقد ٢٬٠٠٠" }, cr: { en: "Liability for remaining coverage 2,000 — premium received is NOT revenue yet", ar: "التزام التغطية المتبقية ٢٬٠٠٠ — القسط المقبوض ليس إيرادًا بعد" }, red: true },
        { dr: { en: "LRC 1,200", ar: "التزام التغطية ١٬٢٠٠" }, cr: { en: "Insurance revenue 1,200 = cost recovery 1,020 + RA release 90 + CSM release 90", ar: "إيراد تأمين ١٬٢٠٠ = استرداد تكاليف ١٬٠٢٠ + استنزاف تعديل مخاطر ٩٠ + استنزاف هامش ٩٠" }, red: true },
        { dr: { en: "Insurance service expense 1,020", ar: "مصروف خدمة تأمين ١٬٠٢٠" }, cr: { en: "LRC 1,020 (claims & amortised acquisition costs for the coverage provided)", ar: "التزام التغطية ١٬٠٢٠ (مطالبات وتكاليف استحواذ مستهلكة للتغطية المقدمة)" } },
        { cr: { en: "Insurance service result = 1,200 − 1,020 = 180 = the margin earned (RA 90 + CSM 90)", ar: "نتيجة خدمة التأمين = ١٬٢٠٠ − ١٬٠٢٠ = ١٨٠ = الهامش المكتسب (تعديل ٩٠ + هامش ٩٠)" }, red: true },
      ],
    },
    {
      kind: "journal",
      title: { en: "The CSM machinery — roll, absorb, release", ar: "آلية الهامش — تدحرج وامتصاص واستنزاف" },
      rows: [
        { dr: { en: "LRC — CSM 7.5", ar: "التزام التغطية — الهامش ٧٫٥" }, cr: { en: "LRC — FCF 7.5 (adverse claims estimate, FUTURE service)", ar: "التزام التغطية — التدفقات ٧٫٥ (تقدير مطالبات أشد، لخدمة مستقبلية)" }, red: true },
        { cr: { en: "Estimate changes for FUTURE service adjust the CSM — NEVER P&L (the CSM absorbs)", ar: "تغيرات التقدير للخدمة المستقبلية تعدل الهامش — ولا تمس الأرباح أبدًا (الهامش يمتص)" }, red: true },
        { dr: { en: "LRC — CSM 90", ar: "التزام التغطية — الهامش ٩٠" }, cr: { en: "Insurance revenue 90 (release per coverage units: 150 × 60%)", ar: "إيراد تأمين ٩٠ (استنزاف وفق وحدات التغطية: ١٥٠ × ٦٠٪)" } },
        { cr: { en: "Interest accretes on the CSM at the LOCKED rate (deferred, released later); the FCF discount unwinds at CURRENT rates → insurance finance expense (P&L or OCI)", ar: "تستحق الفائدة على الهامش بالمعدل المقفول (مؤجلة تستنزف لاحقًا)؛ وخصم التدفقات يفك بمعدلات جارية ← مصروف تمويلي تأميني (أرباح أو دخل شامل)" } },
      ],
    },
    {
      kind: "example",
      title: { en: "CSM roll-forward — the exam-standard walk", ar: "تدحرج الهامش — الجولة المعيارية للامتحان" },
      lines: [
        { en: "Premium 2,000 at inception · PV of claims & maintenance 1,600 · risk adjustment 150 · acquisition cash flows 100", ar: "قسط ٢٬٠٠٠ عند النشأة · قيمة حالية للمطالبات والصيانة ١٬٦٠٠ · تعديل مخاطر ١٥٠ · تدفقات استحواذ نقدية ١٠٠" },
        { en: "CSM = 2,000 − 1,600 − 150 − 100 = 150 (no day-one profit) · LRC = 1,850 + 150 = 2,000", ar: "الهامش = ٢٬٠٠٠ − ١٬٦٠٠ − ١٥٠ − ١٠٠ = ١٥٠ (لا ربح يوم أول) · الالتزام = ١٬٨٥٠ + ١٥٠ = ٢٬٠٠٠" },
        { en: "Coverage units: year 1 = 1,200 units (60%), year 2 = 800 units (40%) · locked rate 5%", ar: "وحدات التغطية: السنة الأولى ١٬٢٠٠ وحدة (٦٠٪) والثانية ٨٠٠ (٤٠٪) · والمعدل المقفول ٥٪" },
        { en: "Roll: 150 + 7.5 (interest) − 7.5 (adverse estimate, future service) = 150 → release 150 × 60% = 90 → closing CSM 60", ar: "التدحرج: ١٥٠ + ٧٫٥ (فائدة) − ٧٫٥ (تقدير أشد لخدمة مستقبلية) = ١٥٠ ← استنزاف ١٥٠ × ٦٠٪ = ٩٠ ← هامش ختامي ٦٠" },
        { en: "Year 2: 60 + 3 (interest) = 63 released in full as the coverage completes → CSM nil", ar: "السنة الثانية: ٦٠ + ٣ (فائدة) = ٦٣ تستنزف كاملة بإتمام التغطية ← الهامش صفر" },
        { en: "Self-check: revenue Y1 = 1,020 + 90 + 90 = 1,200 = the transaction price × 60% coverage units", ar: "تحقق ذاتي: إيراد السنة الأولى = ١٬٠٢٠ + ٩٠ + ٩٠ = ١٬٢٠٠ = سعر المعاملة × ٦٠٪ وحدات التغطية" },
      ],
    },
    { kind: "h", text: { en: "Changes at reporting date — routing the updates", ar: "التغيرات بتاريخ التقرير — توجيه التحديثات" } },
    {
      kind: "tree",
      root: { en: "The estimates moved at the reporting date — where does the change go?", ar: "تحركت التقديرات بتاريخ التقرير — إلى أين يذهب التغير؟" },
      branches: [
        {
          when: { en: "Change in fulfilment cash flows for FUTURE service (claims/expense estimates on the remaining coverage)", ar: "تغير في تدفقات الوفاء لخدمة مستقبلية (تقديرات مطالبات/مصروفات على التغطية المتبقية)" },
          then: { en: "Adjust the CSM — no P&L; once the CSM hits nil, further adverse changes make the group ONEROUS → P&L loss + loss component", ar: "عدّل الهامش — لا أرباح؛ فإذا بلغ الهامش صفرًا صارت الزمرة مفضِّرة ← خسارة بالأرباح ومكون خسارة", red: true },
        },
        {
          when: { en: "Change relating to CURRENT or PAST service (claims incurred this period, contract-end benefits)", ar: "تغير يتعلق بخدمة حالية أو ماضية (مطالبات وقعت هذه الفترة، منافع نهاية العقد)" },
          then: { en: "Insurance service expense / revenue NOW — straight to P&L", ar: "مصروف/إيراد خدمة تأمين حالًا — مباشرة إلى الأرباح", red: true },
        },
        {
          when: { en: "FINANCIAL assumptions move (discount rates on the liabilities)", ar: "تحركت الفرضيات المالية (معدلات الخصم على الالتزامات)" },
          then: { en: "Insurance finance income/expense — P&L, or split to OCI under the election (rationalised to P&L later)", ar: "دخل/مصروف تمويلي تأميني — بالأرباح أو يقسم إلى الدخل الشامل بالانتخاب (ويعقلن للأرباح لاحقًا)", red: true },
        },
        {
          when: { en: "Changes in the RISK ADJUSTMENT (re-estimation of non-financial risk)", ar: "تغيرات في تعديل المخاطر (إعادة تقدير المخاطر غير المالية)" },
          then: { en: "P&L as part of the insurance service result — the RA is NOT locked into the CSM", ar: "بالأرباح ضمن نتيجة خدمة التأمين — فتعديل المخاطر لا يقفول داخل الهامش", red: true },
        },
      ],
    },
    {
      kind: "journal",
      title: { en: "Changes in fulfilment cash flows — the routing entries", ar: "تغيرات تدفقات الوفاء — قيود التوجيه" },
      rows: [
        { dr: { en: "LRC — CSM 30", ar: "التزام التغطية — الهامش ٣٠" }, cr: { en: "LRC — FCF 30 (future-service deterioration: absorbed)", ar: "التزام التغطية — التدفقات ٣٠ (تدهور لخدمة مستقبلية: ممتص)" }, red: true },
        { dr: { en: "Insurance service expense 25", ar: "مصروف خدمة تأمين ٢٥" }, cr: { en: "LRC — FCF 25 (current/past-service deterioration: P&L now)", ar: "التزام التغطية — التدفقات ٢٥ (تدهور خدمة حالية/ماضية: بالأرباح حالًا)" }, red: true },
        { dr: { en: "Insurance finance expense 18", ar: "مصروف تمويلي تأميني ١٨" }, cr: { en: "LRC — FCF 18 (discount unwind at current rates — P&L or OCI per the election)", ar: "التزام التغطية — التدفقات ١٨ (فك الخصم بمعدلات جارية — أرباح أو دخل شامل وفق الانتخاب)" } },
        { cr: { en: "The discount rate change itself splits: OCI under the election; the unwinding always flows somewhere in finance income/expense", ar: "تغير معدل الخصم ذاته يقسم: بالدخل الشامل وفق الانتخاب؛ والفك يجري دائمًا في بند الدخل/المصروف التمويلي" } },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The RISK ADJUSTMENT is the entity-specific price of uncertainty about the AMOUNT and TIMING of non-financial risk flows — what a rational insurer would demand to be indifferent between bearing the risk and being released from it. Techniques: confidence intervals (the 75th percentile of the loss distribution), cost-of-capital, or conditional tail expectation — disclosed by method. It is remeasured at EVERY reporting date with the change running through the insurance service result, and it is excluded from the CSM's absorption: estimate changes adjust the fulfilment cash flows inside the CSM; the risk adjustment stands beside it, re-priced separately. That asymmetry (FCF changes deferred, RA changes immediate) is a favourite exam discriminator.",
        ar: "تعديل المخاطر هو السعر الخاص بالمنشأة لعدم التأكد في مبلغ وتوقيت تدفقات المخاطر غير المالية — ما يطلبه مؤمِّن رشيد ليتعادل عنده تحمل الخطر والإباء منه. الأساليب: فترات الثقة (الشريحة المئوية ٧٥ من توزيع الخسارة)، أو تكلفة رأس المال، أو التوقع الذيلي المشروط — ويُفصح عن الأسلوب. ويعاد قياسه في كل تاريخ تقرير ويمر تغيره بنتيجة خدمة التأمين، وهو مستبعد من امتصاص الهامش: فتغيرات التقدير تعدل تدفقات الوفاء داخل الهامش؛ أما تعديل المخاطر فيقف بجانبه يعاد تسعيره منفصلًا. وذلك التباين (تأجيل تغيرات التدفقات وفورية تغيرات التعديل) من أحب أدوات الممتحنين للتمييز.",
      },
    },
    { kind: "h", text: { en: "Onerous contracts & the loss component", ar: "العقود المفضِّرة ومكون الخسارة" } },
    {
      kind: "p",
      text: {
        en: "A group is ONEROUS when the fulfilment cash flows exceed the consideration — recognise the loss IMMEDIATELY in P&L and create a LOSS COMPONENT (a liability add-on) tracked separately; subsequent changes in that component run through P&L (not the CSM, which stays at zero for onerous groups). The reversal path: if estimates improve, the loss component unwinds through P&L before any new CSM arises.",
        ar: "يكون الزمرة مفضِّرة عندما تتجاوز تدفقات الوفاء المقابل — تعترف بالخسارة فورًا بالأرباح وتنشئ مكون خسارة يتابع منفصلًا؛ وتغيراته اللاحقة بالأرباح (لا الهامش الذي يبقى صفرًا للزمرة المفضِّرة). وسبيل الرد: إذا تحسنت التقديرات يفك مكون الخسارة بالأرباح قبل نشوء أي هامش جديد.",
      },
    },
    {
      kind: "journal",
      title: { en: "The loss component — day-one and reversal", ar: "مكون الخسارة — يوم أول وارتجاع" },
      rows: [
        { dr: { en: "Insurance service expense 100 (loss on onerous group)", ar: "مصروف خدمة تأمين ١٠٠ (خسارة زمرة مفضِّرة)" }, cr: { en: "LRC — loss component 100 (FCF 2,100 > premium 2,000)", ar: "التزام التغطية — مكون خسارة ١٠٠ (تدفقات ٢٬١٠٠ > قسط ٢٬٠٠٠)" }, red: true },
        { dr: { en: "LRC — loss component 60", ar: "التزام التغطية — مكون خسارة ٦٠" }, cr: { en: "Insurance service expense 60 (estimates improved — reversal)", ar: "مصروف خدمة تأمين ٦٠ (تحسنت التقديرات — ارتجاع)" } },
        { cr: { en: "Reversal capped at the loss component; only after it unwinds fully can a new CSM start building", ar: "الارتجاع مسقوف على مكون الخسارة؛ ولا يبدأ هامش جديد بالنشأة إلا بعد فكه كاملًا" }, red: true },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Day-1 rule: a profitable new group books NO profit (it all goes to the CSM); an onerous new group books the FULL loss immediately. Asymmetry by design — prudence survives in IFRS 17 through the onerous door, exactly as IAS 37 taught it.",
        ar: "قاعدة اليوم الأول: الزمرة الجديدة الرابحة لا تحجز ربحًا (كله للهامش)؛ والمفضِّرة تحجز كامل الخسارة فورًا. عدم تماثل مقصود — فالحذر باقٍ في IFRS 17 من باب التفضير، تمامًا كما علم IAS 37.",
      },
    },
    { kind: "h", text: { en: "Insurance finance & the OCI election", ar: "التمويل التأميني وانتخاب الدخل الشامل" } },
    {
      kind: "p",
      text: {
        en: "The liabilities are discounted at CURRENT rates, so rate movements and the passage of time create INSURANCE FINANCE INCOME/EXPENSE: the unwind of the discount on the FCF and the LIC, plus accretion on the CSM at locked rates. The entity elects where this lands: all in P&L; or disaggregated — the portion attributable to a change in financial assumptions to OCI, with a systematic rationalisation of the OCI balance into P&L over time (mirroring the pattern of the assets' income). The election exists because insurers hold IFRS 9 assets against these liabilities: bonds at FVTPL against a current-value liability creates noise, so the standard lets the two sides breathe together in OCI — provided the floor keeps the asset side honest.",
        ar: "تخصم الالتزامات بمعدلات جارية، فتحركات المعدلات ومرور الزمن تنشئ دخلًا/مصروفًا تمويليًا تأمينيًا: فك خصم التدفقات والالتزام بالمطالبات، واستحقاق على الهامش بمعدلات مقفولة. وتنتخب المنشأة وجهته: كله بالأرباح؛ أو تفكيكه — الجزء المنسوب لتغير الفرضيات المالية إلى الدخل الشامل، مع عقلنة منتظمة لرصيد الدخل الشامل إلى الأرباح عبر الزمن (محاكاة لنمط دخل الأصول). ووُجد الانتخاب لأن المعيدين يحملون أصول IFRS 9 في مواجهة هذه الالتزامات: فسندات بـFVTPL مقابل التزام بقيمة جارية تخلق ضجيجًا، فأجاز المعيار للجانبين أن يتنفسا معًا في الدخل الشامل — على أن يُبقي الحد الأدنى جانب الأصول صادقًا.",
      },
    },
    {
      kind: "tree",
      title: { en: "The OCI election & the floor", ar: "انتخاب الدخل الشامل والحد الأدنى" },
      root: { en: "The insurer's asset–liability mismatch", ar: "عدم تماثل الأصل والالتزام لدى المعيد" },
      branches: [
        {
          when: { en: "Assets at FVTPL while the insurance liabilities run at current fulfilment value", ar: "أصول بـFVTPL والالتزامات التأمينية بالقيمة الجارية للوفاء" },
          then: { en: "Accounting mismatch — P&L volatility the economics never intended", ar: "عدم تماثل محاسبي — تذبذب بالأرباح لم تقصده الاقتصادات" },
        },
        {
          when: { en: "ELECTION: designate the backing financial assets at FVOCI (because the liabilities are measured at current fulfilment value)", ar: "انتخاب: تسمية الأصول المالية المساندة بـFVOCI (لأن الالتزامات مقاسة بالقيمة الجارية للوفاء)" },
          then: { en: "Assets revalue through OCI + THE FLOOR: the accumulated OCI for the designated assets must never be a NET LOSS — any breach transfers to P&L", ar: "الأصول تعاد تسعيرها بالدخل الشامل + الحد الأدنى: لا يجوز أن يكون الدخل الشامل المراكم للأصول المسماة خسارة صافية — وأي خرق يحول إلى الأرباح", red: true },
        },
        {
          when: { en: "Insurance finance income/expense on the liability side", ar: "الدخل/المصروف التمويلي التأميني في جانب الالتزام" },
          then: { en: "Disaggregate: rate-change portion to OCI, unwind to P&L — the election, rationalised systematically later", ar: "فكك: جزء تغير المعدل إلى الدخل الشامل والفك إلى الأرباح — بالانتخاب، ويعقلن منظمًا لاحقًا", red: true },
        },
      ],
    },
    {
      kind: "journal",
      title: { en: "FVOCI assets & the insurance floor", ar: "أصول FVOCI والحد الأدنى التأميني" },
      rows: [
        { dr: { en: "Financial asset — bonds (FVOCI) 40", ar: "أصل مالي — سندات (FVOCI) ٤٠" }, cr: { en: "OCI 40 (appreciation designated to back the LRC)", ar: "الدخل الشامل ٤٠ (ارتفاع مسمًّى لمساندة الالتزام)" } },
        { dr: { en: "OCI 40", ar: "الدخل الشامل ٤٠" }, cr: { en: "Bonds 40 (the gain reverses as rates rise)", ar: "السندات ٤٠ (يرتد المكسب مع صعود المعدلات)" } },
        { dr: { en: "OCI 40", ar: "الدخل الشامل ٤٠" }, cr: { en: "Bonds 40 (rates rise further)", ar: "السندات ٤٠ (تصعد المعدلات أكثر)" }, red: true },
        { dr: { en: "P&L 40", ar: "الأرباح ٤٠" }, cr: { en: "OCI 40 — THE FLOOR: the accumulated asset-OCI cannot sit in a net loss position; the breach goes to P&L", ar: "الدخل الشامل ٤٠ — الحد الأدنى: لا يجلس دخل الأصول الشامل في مركز خسارة صافية؛ فالخرق يذهب للأرباح" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Reinsurance held — the mirror", ar: "إعادة التأمين المقتنى — المرآة" } },
    {
      kind: "p",
      text: {
        en: "Reinsurance HELD applies the same engines from the asset side: the cedant recognises a NET ASSET for the right to recover, measured as fulfilment cash flows (expected recoveries) plus the CSM of the reinsurance — the unamortised NET COST of buying the cover. A gain or loss arises at inception only when the cover is bought on favourable or onerous terms. The premium ceded adjusts the reinsurance LRC; recoveries reduce the direct claims expense; and the reinsurance service result is presented SEPARATELY from the direct business — never netted into one line. So a loss-making direct book can sit beside a PROFITABLE reinsurance book: the recovery right can be worth more than its cost when the direct business is onerous (reinsuring at a gain).",
        ar: "تطبق إعادة التأمين المقتنى المحركات ذاتها من جانب الأصول: يعترف المعيد بأصل صافٍ لحق الاسترداد، مقاسًا بتدفقات الوفاء (الاستردادات المتوقعة) مضافًا إليها هامش إعادة التأمين — صافي تكلفة الشراء غير المستهلك. ولا ينشأ ربح أو خسارة عند النشأة إلا إذا اشترى الغطاء بشروط مواتية أو مفضِّرة. فالقسط المُمَرَّر يعدل التزام التغطية لإعادة التأمين؛ والاستردادات تخفض مصروف المطالبات المباشر؛ وتعرض نتيجة خدمة إعادة التأمين منفصلًا عن العمل المباشر — ولا تمس مقاصة في سطر واحد أبدًا. لذا يجلس دفتر مباشر خاسر بجانب دفتر إعادة تأمين رابح: فقد يستحق حق الاسترداد أكثر من كلفته حين يكون العمل المباشر مفضِّرًا (إعادة تأمين بربح).",
      },
    },
    {
      kind: "journal",
      title: { en: "Reinsurance held — ceded premium & recoveries", ar: "إعادة التأمين المقتنى — القسط المُمَرَّر والاستردادات" },
      rows: [
        { dr: { en: "LRC — reinsurance held 300", ar: "التزام التغطية — إعادة التأمين المقتنى ٣٠٠" }, cr: { en: "Cash 300 (ceded premium paid)", ar: "نقد ٣٠٠ (القسط الممرر المدفوع)" }, red: true },
        { dr: { en: "Cash 180", ar: "نقد ١٨٠" }, cr: { en: "LRC — reinsurance held 180 (recoveries received on paid claims)", ar: "التزام التغطية — إعادة التأمين المقتنى ١٨٠ (استردادات مقبوضة عن مطالبات مسددة)" } },
        { cr: { en: "Net cost 300 − 270 (expected recoveries PV 250 + RA 20) = 30 → the CSM of the reinsurance, released over the reinsurance coverage", ar: "صافي التكلفة ٣٠٠ − ٢٧٠ (القيمة الحالية للاستردادات ٢٥٠ + تعديل ٢٠) = ٣٠ ← هامش إعادة التأمين يستنزف عبر تغطيتها" }, red: true },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Reinsurance can be PROFITABLE while the direct business is LOSS-MAKING — the recovery right gains value precisely when claims explode. Show the two service results side by side; netting them is a presentation error the examiner punishes twice.",
        ar: "قد تكون إعادة التأمين رابحة والعمل المباشر خاسرًا — فحق الاسترداد يكتسب قيمته عند انفجار المطالبات بعينه. اعرض النتيحتين جنبًا إلى جنب؛ فمقاصلتهما خطأ عرض يعاقب عليه الممتحن مرتين.",
      },
    },
    { kind: "h", text: { en: "The simplified models — PAA & VFA", ar: "النموذجان المبسطان — توزيع الأقساط والرسم المتغير" } },
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
          when: { en: "REINSURANCE HELD: apply IFRS 17 to the reinsurer's side — with a GMM mirror (the 2020 amendments widened when the PAA is available for reinsurance held); loss-recovery rights are asset-side machinery", ar: "إعادة التأمين المقتنى: يطبق الجانب الآخر — بمرآة النموذج العام (ووسعت تعديلات ٢٠٢٠ حالات توفر توزيع الأقساط)؛ وحقوق استرداد الخسائر آلية جانب أصول" },
          then: { en: "Ceded premiums → recoveries recognised per the same engines — presented separately, never netted", ar: "الأقساط الممررة ← استردادات بالمحركات ذاتها — عرضًا منفصلًا لا مقاصة", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "PAA in practice: the liability stays close to the unearned premium the market already understands — revenue follows the coverage period (passage of time unless a better pattern exists), acquisition cash flows are expensed over the same period, and the onerous test still bites. It suits most property & casualty business (annual contracts). VFA in practice: the CSM becomes the shock absorber for the entity's VARIABLE FEE — when underlying items (the fund the policyholder shares in) outperform, the entity's share of the overshoot raises the CSM rather than P&L; the policyholder's share passes through as benefit payments. The VFA is the general model with the investment contract's economics showing through.",
        ar: "توزيع الأقساط عمليًا: يظل الالتزام قريبًا من القسط غير المكتسب الذي يفهمه السوق أصلًا — ويتبع الإيراد فترة التغطية (مرور الزمن ما لم يوجد نمط أفضل)، وتحمل تكاليف الاستحواذ على المدة ذاتها، ويظل اختبار المفضِّر نافذًا. وهو يناسب جوهر أعمال الممتلكات والمسؤوليات (العقود السنوية). والرسم المتغير عمليًا: يصير الهامش ممتص الصدمات للرسم المتغير — فإذا تفوقت البنود الأساسية (الصندوق الذي يشارك فيه المؤمَّن له) رفع نصيب المنشأة من الفائض الهامشَ لا الأرباح؛ ونصيب المؤمَّن له يمر كمدفوعات منافع. فالرسم المتغير هو النموذج العام تظهر من خلاله اقتصادات عقد الاستثمار.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Why two simplified models and not one? The PAA answers a measurement-cost problem (short contracts barely differ from unearned premiums, so skip the machinery); the VFA answers an economics problem (participating contracts are fund management with an insurance wrapper, and the general model's fixed CSM release would misstate them). Choose wrong and the examiner sees it instantly: a 3-month fire policy on the GMM screams over-engineering; a unit-linked life contract on plain GMM misses the fund's returns entirely. Model selection is step zero of every IFRS 17 question.",
        ar: "لماذا نموذجان مبسطان لا واحد؟ يجيب توزيع الأقساط عن مشكلة كلفة قياس (فالعقود القصيرة بالكاد تختلف عن الأقساط غير المكتسبة، فتجاوز الآلية)؛ ويجيب الرسم المتغير عن مشكلة اقتصادية (فالعقود المشاركة إدارة صناديق بغلاف تأميني، واستنزاف الهامش الثابت في النموذج العام يحرفها). واخترت خطأً رآك الممتحن فورًا: وثيقة حريق ٣ أشهر على النموذج العام صراخ بالإفراط الهندسي؛ وعقد حياة مرتبط بوحدات على النموذج المجرد يفوّت عوائد الصندوق كليًا. فاختيار النموذج هو الخطوة صفر في كل سؤال IFRS 17.",
      },
    },
    { kind: "h", text: { en: "Presentation in the primary statements", ar: "العرض في القوائم الأساسية" } },
    {
      kind: "list",
      items: [
        { en: "Insurance REVENUE and insurance SERVICE EXPENSE presented on the face — the net INSURANCE SERVICE RESULT; revenue comprises the earned slice (cost recovery + risk adjustment release + CSM release), never the premiums as billed", ar: "يُعرض إيراد التأمين ومصروف الخدمة في وجه القائمة — نتيجة خدمة التأمين الصافية؛ والإيراد هو الشريحة المكتسبة (استرداد التكاليف + استنزاف التعديل + استنزاف الهامش) لا الأقساط كما فُوترت" },
        { en: "NO investment income netting inside the service lines; insurance finance income/expense shown separately (with the OCI election for the rate-change portion of long-duration business)", ar: "لا مقاصة للدخل الاستثماري داخل سطور الخدمة؛ والدخل/المصروف المالي التأميني سطر مستقل (مع انتخاب الدخل الشامل لجزء تغير المعدلات في الأعمال طويلة الأمد)" },
        { en: "Premiums collected in cash are NOT revenue until earned — the received-not-yet-earned amounts roll inside the liability", ar: "الأقساط المقبوضة ليست إيرادًا حتى تكتسب — فالمقبوض غير المكتسب يتدحرج داخل الالتزام" },
        { en: "Reinsurance held: a SEPARATE insurance service result (revenue recovery) — never a mere premium expense netting", ar: "إعادة التأمين المقتنى: نتيجة خدمة مستقلة (استرداد الإيراد) — لا مجرد مقاصة مصروف أقساط" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "On the statement of financial position the insurance liabilities appear as LRC and LIC (each for issued business, presented separately from reinsurance held assets); NO offset between groups of contracts or between portfolios; and a deferral-by-analogy never applies — the acquired-cost deferrals of the old world (DAC) are gone: acquisition cash flows are part of the fulfilment cash flows inside the LRC, not a separate asset. The statement of cash flows keeps premiums and claims in operating (direct insurance), while the P&L-and-OCI split never changes cash — only geography.",
        ar: "في قائمة المركز المالي تظهر الالتزامات التأمينية التزامًا للتغطية المتبقية والتزامًا للمطالبات الواقعة (كلٌّ للعمل الصادر، بعرض منفصل عن أصول إعادة التأمين المقتناة)؛ ولا مقاصة بين زمر العقود ولا بين المحافظ؛ ولا ينطبق تمثيل التأجيل القديم أبدًا — فتأجيلات تكاليف الاستحواذ في العالم القديم (DAC) زالت: تدفقات الاستحواذ جزء من تدفقات الوفاء داخل الالتزام لا أصل مستقل. وتحفظ قائمة التدفقات الأقساط والمطالبات في التشغيلية (للتأمين المباشر)، بينما تقسيم الأرباح والدخل الشامل لا يغير النقد أبدًا — الجغرافيا فقط.",
      },
    },
    { kind: "h", text: { en: "Disclosure essentials", ar: "جوهر الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "RECONCILIATIONS: the CSM roll-forward (opening → interest → estimate changes → release → closing); the loss component; the risk adjustment — the examiner's favourite table", ar: "تسويات: تدحرج الهامش (افتتاحي ← فائدة ← تغيرات تقدير ← استنزاف ← ختامي)؛ ومكون الخسارة؛ وتعديل المخاطر — أحب جداول الممتحن" },
        { en: "ASSUMPTIONS: discount rates, mortality/morbidity/claims-development methods, the risk-adjustment technique", ar: "الفرضيات: معدلات الخصم، ومناهج الوفيات والمراضة وتطور المطالبات، وأسلوب تعديل المخاطر" },
        { en: "Sensitivities: the effect of discount-rate and insurance-risk changes on the liabilities & P&L/OCI", ar: "الحساسيات: أثر تغيرات معدل الخصم ومخاطر التأمين على الالتزامات والأرباح/الدخل الشامل" },
        { en: "Concentrations of insurance risk & the maturity profile of the LIC; income/expenses split into the GMM/VFA/PAA populations", ar: "تركزات مخاطر التأمين وجدول استحقاق التزام المطالبات؛ وتقسيم الإيرادات والمصروفات بين سكان النماذج الثلاثة" },
      ],
    },
    { kind: "h", text: { en: "Transition & the 2021 amendments", ar: "الانتقال وتعديلات ٢٠٢١" } },
    {
      kind: "list",
      items: [
        { en: "Three transition routes: full restatement (IFRS 17 C3) · modified retrospective · fair value at transition (the last resort when data is missing)", ar: "ثلاثة مسارات انتقال: إعادة عرض كاملة · رجعية معدلة · القيمة العادلة عند الانتقال (الملاذ الأخير عند فقد البيانات)" },
        { en: "The annual cohorts start at the date of initial application — historical portfolios enter via the transition routes", ar: "تبدأ الزمر السنوية عند أول تطبيق — والمحافظ التاريخية تدخل بمسارات الانتقال" },
        { en: "Interaction suite: IFRS 9 for the insurers' financial assets (the asset-liability mismatch drove the OCI election's design), IFRS 15 for non-insurance components (investment management services carved out as separate performance obligations)", ar: "تفاعلات: IFRS 9 لأصول شركات التأمين (عدم تماثل الأصل والالتزام هو الذي صمم انتخاب الدخل الشامل)، وIFRS 15 للمكونات غير التأمينية (خدمات إدارة استثمار تنتزع التزامات أداء مستقلة)" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The June 2020 Transition Resource Group amendments (effective with the 2023 date) bought insurers a year AND softened the edges: the date of initial application aligned; annual cohorts relaxed (no cohort split when the entity can measure groups consistently); market-interest-rate freedom for the modified retrospective; risk-mitigation option for reinsurance held against non-financial risk; and a scope clarification for loan-backed credit cards. Transition routes: FULL RETROSPECTIVE (restate as if IFRS 17 had always applied), MODIFIED RETROSPECTIVE (keep some old-GAAP carrying amounts, with reliefs), or FAIR VALUE at transition (set the CSM from a fair-value day-one snapshot) — a once-only, documented choice per entity.",
        ar: "اشترت تعديلات يونيو ٢٠٢٠ (فريق موارد الانتقال، النافذة مع تاريخ ٢٠٢٣) للشركات سنة وخففت الحدود: مواءمة تاريخ أول تطبيق؛ وتليين الزمر السنوية (لا انقسام زمر إذا استطاعت المنشأة القياس اتساقًا)؛ وحرية معدلات فائدة السوق في الرجعية المعدلة؛ وخيار تخفيف المخاطر لإعادة التأمين المقتنى في مواجهة المخاطر غير المالية؛ وتوضيح نطاق لبطاقات الائتمان المدعومة بقروض. ومسارات الانتقال: أثر رجعي كامل (إعادة عرض كأن IFRS 17 طُبق دائمًا)، أو رجعية معدلة (إبقاء بعض الدفتريات القديمة مع تيسيرات)، أو القيمة العادلة عند الانتقال (وضع الهامش من لقطة عادلة ليوم أول) — اختيار وحيد موثق لكل منشأة.",
      },
    },
    { kind: "h", text: { en: "Interactions with other standards", ar: "التفاعل مع المعايير الأخرى" } },
    {
      kind: "list",
      items: [
        { en: "IFRS 9: the insurers' financial assets — the FVOCI designation + the floor exist to pair current-value liabilities with matching assets; ECL applies to the receivables", ar: "IFRS 9: الأصول المالية للمعيدين — تسمية FVOCI مع الحد الأدنى وجدتا لإقران التزامات القيمة الجارية بأصول موائمة؛ وخسائر الائتمان المتوقعة للمدينين" },
        { en: "IFRS 15: investment components & services that are not insurance (asset management fees) carve out as distinct performance obligations", ar: "IFRS 15: المكونات الاستثمارية والخدمات غير التأمينية (أجور إدارة الأصول) تنتزع التزامات أداء مستقلة" },
        { en: "IFRS 3: acquired insurance contracts are measured at acquisition-date fair value; the excess over fulfilment cash flows becomes the CSM — no day-one gain on 'cheap' business", ar: "IFRS 3: العقود التأمينية المقتناة تقاس بالقيمة العادلة بتاريخ الاستحواذ؛ والفائض فوق تدفقات الوفاء يصير الهامش — لا ربح يوم أول لعمل «رخيص»" },
        { en: "IAS 21: functional-currency translation of the cash flows & the liabilities", ar: "IAS 21: ترجمة التدفقات والالتزامات إلى عملة التشغيل" },
        { en: "IFRS 13: the fair-value snapshots at transition & the VFA's underlying items", ar: "IFRS 13: لقطات القيمة العادلة عند الانتقال وبنود أساسية الرسم المتغير" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Say 'CSM = unearned profit released as SERVICE is provided' in the first paragraph — the whole standard hangs on that sentence. No day-one profit on new business, ever; a day-one loss only through the onerous door.",
        ar: "قل في الفقرة الأولى «الهامش ربح غير مكتسب يستنزف بتقديم الخدمة» — فالمعيار كله معلق بتلك الجملة. ولا ربح يوم أول للعمل الجديد أبدًا؛ وخسارة يوم أول من باب التفضير وحده.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "PAA vs GMM vs VFA in one line each: PAA = unearned-premium shortcut (≤ 1 year) · GMM = the full three-block engine · VFA = GMM with the CSM absorbing the pool's returns. The trio line answers most selection questions.",
        ar: "سطر لكل نموذج: توزيع الأقساط اختصار الأقساط غير المكتسبة (≤ سنة) · النموذج العام محرك اللبنات الثلاث كاملًا · الرسم المتغير نموذج عام يمتص الهامش عوائد المحفظة. وثلاثية الأسطر تجيب معظم أسئلة الاختيار.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The June 2020 amendments softened the load: acquisition costs are fulfilment cash flows inside the LRC (no separate DAC asset), the annual-cohort wall was relaxed, and reinsurance aggregation was widened.",
        ar: "خففت تعديلات يونيو ٢٠٢٠ الحمل: تكاليف الاستحواذ تدفقات وفاء داخل الالتزام (لا أصل DAC مستقل)، ولُيّن جدار الزمر السنوية، ووسّع تجميع إعادة التأمين.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Revenue is EARNED over coverage, never 'when billed'. The premium cash is a liability on receipt; the P&L sees only the earned slice — billings, renewals and cash are geography, not the accounting.",
        ar: "الإيراد يُكتسب عبر التغطية، لا «عند الفوترة». فالنقد المقبوض التزام عند قبضه؛ ولا ترى الأرباح إلا الشريحة المكتسبة — فالفوترة والتجديد والنقد جغرافيا لا محاسبة.",
      },
    },
  ],
}
