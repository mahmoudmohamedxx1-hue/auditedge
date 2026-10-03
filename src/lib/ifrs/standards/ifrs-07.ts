/** IFRS 7 — Financial Instruments: Disclosures */

import type { Standard } from "../types"

export const IFRS_7: Standard = {
  code: "IFRS 7",
  title: { en: "Financial Instruments: Disclosures", ar: "الأدوات المالية: الإفصاحات" },
  topic: "instruments",
  effective: { en: "Effective 1 Jan 2007 · amended for IFRS 9 & IFRS 13", ar: "سارٍ من ١ يناير ٢٠٠٧ · معدل لـ IFRS 9 وIFRS 13" },
  blocks: [
    { kind: "h", text: { en: "Objective & the class-of-instrument lens", ar: "الهدف وعدسة فئة الأداة" } },
    {
      kind: "p",
      text: {
        en: "IFRS 7 requires disclosures that let users evaluate the SIGNIFICANCE of financial instruments for the entity's position, performance and cash flows — and the NATURE and EXTENT of the risks arising from them (credit, liquidity, market). The lens is CLASSES of instruments (a grouping finer than the primary-statement lines, at least by measurement category — AC / FVOCI / FVTPL), plus identified hedging relationships. IFRS 7 never changes a number: it makes what IFRS 9 measured and IAS 32 classified VISIBLE — the examiner's marking scheme is built on the same three shelves the standard is.",
        ar: "يطلب IFRS 7 إفصاحات تمكن المستخدمين من تقدير أهمية الأدوات المالية لمركز المنشأة وأدائها وتدفقاتها — وطبيعة مخاطرها وامتدادها (ائتمان، سيولة، سوق). والعدسة فئات الأدوات (تجميع أدق من أسطر القوائم، بأقل تقدير حسب فئة القياس — مطفاة / FVOCI / FVTPL)، وعلاقات التغطية المحددة. ولا يغير IFRS 7 رقمًا أبدًا: إنه يجعل ما قاسه IFRS 9 وصنفه IAS 32 مرئيًا — ومخطط درجات الممتحن مبني على الرفوف الثلاثة ذاتها التي بُني عليها المعيار.",
      },
    },
    { kind: "h", text: { en: "Scope — which instruments the net catches", ar: "النطاق — أي الأدوات تلتقطها الشبكة" } },
    {
      kind: "p",
      text: {
        en: "The scope follows the INSTRUMENT, not the entity: any entity with financial instruments discloses — a bank, a farmer with a loan and a deposit. Recognised instruments carry the full significance + risk load; UNRECOGNISED items (firm commitments, purchased loan commitments, guarantees given) carry the risk load because that is where the exposure hides. Contracts to buy or sell non-financial items that can be net-settled in cash (and are not held for delivery) enter as if they were derivatives. The boundary mirrors IAS 32/IFRS 9: leases, IAS 19 plans and IFRS 17 contracts disclose under their own standards.",
        ar: "يتبع النطاق الأداةَ لا المنشأة: كل منشأة تملك أدوات مالية تفصح — بنك كان أو مزارعًا لديه قرض ووديعة. والأدوات المعترف بها تحمل عبء الأهمية والمخاطر كاملًا؛ والبنود غير المعترف بها (التعهدات الثابتة، التزامات الإقراض الممنوحة، الضمانات الممنوحة) تحمل عبء المخاطر لأن هناك يختبئ الانكشاف. وعقود شراء أو بيع بنود غير مالية قابلة للتسوية الصافية نقدًا (وليست للحيازة) تدخل كأنها مشتقات. والحدود تعكس IAS 32/IFRS 9: فالإيجارات ومزايا IAS 19 وعقود IFRS 17 تفصح وفق معاييرها.",
      },
    },
    {
      kind: "tree",
      root: { en: "Is the instrument inside IFRS 7's disclosure net?", ar: "هل الأداة داخل شبكة إفصاح IFRS 7؟" },
      branches: [
        {
          when: { en: "Recognised financial asset / liability on the statement of financial position", ar: "أصل أو التزام مالي معترف به في قائمة المركز المالي" },
          then: { en: "IN — full significance (B/S + P&L) + fair value + the three risk disclosures", ar: "داخل — الأهمية كاملة (الميزانية والأرباح) + القيمة العادلة + إفصاحات المخاطر الثلاثة", red: true },
        },
        {
          when: { en: "Unrecognised but exposure-creating: firm commitments, purchased loan commitments, guarantees issued, derivatives not yet on the B/S", ar: "غير معترف به لكنه منشئ للانكشاف: تعهدات ثابتة، التزامات إقراض ممنوحة، ضمانات صادرة، مشتقات لم تثبت بعد" },
          then: { en: "IN for the RISK disclosures (credit + liquidity of the commitment + market sensitivity)", ar: "داخل لإفصاحات المخاطر (الائتمان وسيولة الالتزام وحساسية السوق)", red: true },
        },
        {
          when: { en: "Commodity contract net-settled in cash (no delivery history)", ar: "عقد سلع يسوى صافيًا نقدًا (بلا سجل حيازة)" },
          then: { en: "IN — treated as a derivative for the risk narrative", ar: "داخل — يعامل مشتقًا في حكاية المخاطر", red: true },
        },
        {
          when: { en: "Equity-method investments, leases, IAS 19 obligations, IFRS 17 contracts, IFRS 2 share payments", ar: "استثمارات بالمعيار المعدل، إيجارات، التزامات IAS 19، عقود IFRS 17، مدفوعات أسهم IFRS 2" },
          then: { en: "OUT — their own standards carry the disclosure (IFRS 12, IFRS 16 …)", ar: "خارج — معاييرها تحمل الإفصاح (IFRS 12 وIFRS 16 …)" },
        },
      ],
    },
    {
      kind: "list",
      items: [
        { en: "Disclosures are entity-wide, not just bank-heavy: a manufacturer's FX forward and its trade payables both get the treatment", ar: "الإفصاحات لكل المنشآت لا للبنوك وحدها: عقود الصرف الآجلة لمصنع والتزاماته التجارية ينالان المعاملة ذاتها" },
        { en: "Level of aggregation: enough detail to distinguish risk characteristics, without burying the user — classes, not contracts", ar: "مستوى التجميع: تفصيل يميز خصائص المخاطر دون دفن المستخدم — فئات لا عقودًا فردية" },
        { en: "Concentrations of risk get their own call-out whenever one counterparty, currency, industry or collateral type dominates", ar: "تركزات المخاطر تنال نداءً خاصًا كلما هيمن نظير واحد أو عملة أو صناعة أو نوع ضمان" },
      ],
    },
    { kind: "h", text: { en: "The classes of instrument — building the lens", ar: "فئات الأدوات — بناء العدسة" } },
    {
      kind: "p",
      text: {
        en: "A CLASS is a grouping management uses that is finer than the balance-sheet line — at minimum it separates by measurement category, because each category has a different P&L geography. Deciding the classes is the FIRST disclosure task: everything downstream (carrying amounts, income, ECL, risk tables) is presented per class. Sensible classes for a bank: loans at AC, debt securities at FVOCI, equities at FVOCI (elected), trading assets at FVTPL, derivatives; for a manufacturer: cash, trade receivables, other loans, debt investments, derivatives.",
        ar: "«الفئة» تجميع تستخدمه الإدارة أدق من سطر الميزانية — وتفصل بين فئات القياس على الأقل، لأن لكل فئة جغرافيا أرباح مختلفة. وتحديد الفئات أول مهمة إفصاحية: فكل ما يلي (القيم الدفترية والدخل والخسائر المتوقعة وجداول المخاطر) يعرض لكل فئة. وفئات منطقية لبنك: قروض بالتكلفة المطفأة، سندات ديون بـFVOCI، ملكيات منتقاة بـFVOCI، أصول متاجرة بـFVTPL، مشتقات؛ ولمصنع: النقد، المدينون التجاريون، قروض أخرى، استثمارات دين، مشتقات.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "AC: interest revenue (EIR) + ECL charge → P&L; FV movements: none (amortised cost)", ar: "التكلفة المطفأة: إيراد فائدة (فعلي) + حمولة خسائر متوقعة ← الأرباح؛ ولا فروق قيمة" },
        { en: "FVOCI debt: interest + ECL in P&L, FV delta in OCI (recycled on derecognition)", ar: "ديون FVOCI: الفائدة والخسائر بالأرباح وفرق القيمة بالدخل الشامل (يعاد عند الاستبعاد)" },
        { en: "FVOCI equity (elected): dividends in P&L, FV delta in OCI NEVER recycled", ar: "ملكية FVOCI (منتقاة): التوزيعات بالأرباح وفرق القيمة بالدخل الشامل دون تدوير أبدًا" },
        { en: "FVTPL: interest + FV delta + (ECL is inside the FV) → all in P&L", ar: "FVTPL: الفائدة وفرق القيمة والخسائر (المدمجة في العادلة) كلها بالأرباح" },
      ],
    },
    { kind: "h", text: { en: "Significance — the statement of financial position", ar: "الأهمية — قائمة المركز المالي" } },
    {
      kind: "list",
      items: [
        { en: "Carrying amounts BY CATEGORY (AC, FVOCI-debt, FVOCI-equity, FVTPL) and by class; the ALLOWANCE split (12-month vs lifetime ECL per IFRS 9)", ar: "القيم الدفترية بالفئات والطبقات؛ وتوزيع المخصص (١٢ شهرًا مقابل العمر الكامل)" },
        { en: "For each class: the reconciliation of GROSS carrying → ECL allowance → NET carrying — the single most-disclosed table a bank produces", ar: "لكل طبقة: تسوية الإجمالي ← المخصص ← الصافي — أكثر جدول ينتجه بنك" },
        { en: "Net losses on financial assets at FVOCI; items of income/expense by class: interest revenue (EIR vs credit-impaired basis), fee income, net gains/losses, ECL charge", ar: "خسائر أصول FVOCI الصافية؛ وبنود الدخل/المصروف بالطبقة: إيراد الفائدة، الرسوم، صافي الفروق، حمولة الخسائر المتوقعة" },
        { en: "RECLASSIFICATIONS out of the FVTPL 'held for trading' if more than an insignificant amount; derecognition facts; collateral given/received and defaults on it", ar: "إعادة التبويب من المتاجرة إن تجاوزت الحد غير الجوهري؛ وحقائق الاستبعاد؛ والضمانات الممنوحة/المقبوضة وإخلالاتها" },
        { en: "Accounting policies for recognition/measurement AND the income/expense recognition bases — IAS 1's policies disclosure specialised for instruments", ar: "السياسات المحاسبية للقياس والاعتراف وقياس الإيراد/المصروف — سياسات IAS 1 متخصصة للأدوات" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The gross→allowance→net reconciliation is the discipline IFRS 9 bequeathed to IFRS 7: per class, show the opening allowance, the charge, amounts written off, recoveries, FX and closing — then reconcile the net carrying to the balance-sheet line. Interest revenue on impaired assets is disclosed apart (it is computed on the net basis). The reconciliation is where the three-stage model becomes visible to users: the split of the allowance between 12-month and lifetime ECL IS the stage 1 vs stage 2+ disclosure.",
        ar: "تسوية الإجمالي←المخصص←الصافي هي الانضباط الذي ورثه IFRS 9 لـIFRS 7: أظهر لكل طبقة مخصص أول الفترة والحمولة والمشطوب والمسترد وتغيرات العملة ومخصص آخرها — ثم ساوِ الصافي بسطر الميزانية. وإيراد فائدة الأصول المعسرة يفصح منفصلًا (محسوبًا على الأساس الصافي). وفي هذه التسوية يصبح النموذج الثلاثي مرئيًا للمستخدمين: فتوزيع المخصص بين خسائر ١٢ شهرًا والعمر هو بعينه إفصاح المرحلة ١ مقابل ٢ فما فوق.",
      },
    },
    { kind: "h", text: { en: "Significance — income & expense disclosures", ar: "الأهمية — إفصاحات الدخل والمصروف" } },
    {
      kind: "list",
      items: [
        { en: "Interest revenue split by measurement basis: gross EIR income vs interest on impaired (net-basis) assets", ar: "إيراد الفائدة مقسومًا بأساس القياس: دخل الفائدة الفعلية الإجمالية مقابل فائدة الأصول المعسرة (الأساس الصافي)" },
        { en: "Fee income & expense by class (originating, servicing, cash management)", ar: "الرسوم دخلًا ومصروفًا بالطبقة (منح، خدمة، إدارة النقد)" },
        { en: "Net gains/losses on: AC assets (disposals), FVOCI assets (incl. amounts recycled), FVTPL assets, liabilities, hedging instruments", ar: "صافي المكاسب/الخسائر على: أصول التكلفة المطفأة (تصرفات)، أصول FVOCI (شاملة المعاد تدويره)، أصول والتزامات FVTPL، أدوات التغطية" },
        { en: "The ECL charge for the period, split by stage where meaningful", ar: "حمولة الخسائر الائتمانية المتوقعة للفترة مقسومة بالمراحل حيث يفيد ذلك" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The examiner's drill: every number in the notes is a JOURNAL AGGREGATE. A loan's year of entries — interest accrued, ECL charged, principal repaid — is precisely what the three notes report. Practise reading the income note, the allowance note and the balance-sheet note as one continuous story about the same instruments; if the three notes cannot be tied together, the entity's disclosure is incomplete, and the exam question is usually 'which disclosure is missing?'",
        ar: "تدريب الممتحن: كل رقم في الإفصاحات تجميعٌ لقيود اليومية. وسنةُ قرضٍ من القيود — فائدة مستحقة وخسائر محمولة وأصل مسدد — هي بالضبط ما تنقله الإفصاحات الثلاثة. تمرَّن على قراءة إفصاح الدخل وإفصاح المخصص وإفصاح الميزانية قصةً واحدة متصلة عن الأدوات ذاتها؛ فإن لم يمكن ربط الثلاثة كان إفصاح المنشأة ناقصًا، وسؤال الامتحان غالبًا «أي إفصاح ينقص؟»",
      },
    },
    {
      kind: "journal",
      title: { en: "The disclosure-extraction entries — one loan's year feeds three notes (loan 500,000 at AC, coupon 8%)", ar: "قيود استخلاص الإفصاح — سنة قرض واحد تغذي ثلاث إفصاحات (قرض ٥٠٠٬٠٠٠ بالتكلفة المطفأة وكوبون ٨٪)" },
      rows: [
        { dr: { en: "Interest receivable 40,000", ar: "فوائد مستحقة ٤٠٬٠٠٠" }, cr: { en: "Interest income (→ income note: EIR basis) 40,000", ar: "إيراد فائدة (← إفصاح الدخل: أساس الفائدة الفعلية) ٤٠٬٠٠٠" }, red: true },
        { dr: { en: "Impairment charge (→ ECL note: stage 1, 12-month) 900", ar: "حمولة انخفاض (← إفصاح الخسائر المتوقعة: مرحلة ١، ١٢ شهرًا) ٩٠٠" }, cr: { en: "Loss allowance 900", ar: "مخصص الخسائر ٩٠٠" }, red: true },
        { dr: { en: "Cash 100,000", ar: "نقد ١٠٠٬٠٠٠" }, cr: { en: "Loan (principal) (→ B/S note reconciliation) 100,000", ar: "القرض أصلًا (← تسوية إفصاح الميزانية) ١٠٠٬٠٠٠" } },
      ],
    },
    { kind: "h", text: { en: "Fair value disclosures", ar: "إفصاحات القيمة العادلة" } },
    {
      kind: "list",
      items: [
        { en: "For EVERY class measured at fair value (recurring): the hierarchy level (1/2/3), transfers between levels with reasons and amounts, and the policy for recognising transfers", ar: "لكل طبقة مقاسة بالعادلة (متكررًا): المستوى، والانتقالات بينها بأسبابها ومقاديرها، وسياسة الاعتراف بها" },
        { en: "LEVEL 3: a full rollforward (opening → P&L gains/losses → OCI → purchases/sales/issues/settlements → closing) + the valuation processes + quantitative unobservable inputs + sensitivity analysis", ar: "المستوى الثالث: تسوية كاملة + عمليات التقييم + المدخلات غير الملحوظة الكمية + تحليل الحساسية" },
        { en: "For instruments NOT at fair value: the fair value + how it was determined, with levels — UNLESS carrying ≈ fair value (loans payable to banks)", ar: "للأدوات غير المقاسة بالعادلة: قيمتها العادلة وكيف حددت بمستوياتها — إلا إذا قاربت الدفترية (قروض بنكية مستحقة)" },
        { en: "Day-1 gains/losses by level; the total holding gains; the bid-ask policy for Level 1", ar: "أرباح/خسائر اليوم الأول بالمستوى؛ وإجمالي مكاسب الحيازة؛ وسياسة العرض والطلب للمستوى الأول" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Transfers between levels are disclosed with the level, amount and reason — recognised at the START of the period of change, never with hindsight. The Level 3 rollforward is the heart of the fair-value disclosure: it shows users how much of the balance-sheet 'fair value' rests on the entity's own assumptions, and the sensitivity analysis quantifies what happens if those assumptions move. If an asset is measured at FV but not from a recurring requirement (an IAS 36 FVLCD impairment, a held-for-sale designation, IFRS 3 consideration), the non-recurring regime applies: reason, level, technique and inputs.",
        ar: "تُفصح الانتقالات بين المستويات بمستواها ومقدارها وسببها — ويعترف بها في بداية فترة التغير لا ببعد نظر. وتسوية المستوى الثالث قلب إفصاح العادلة: تُري المستخدمين كم من «القيمة العادلة» في الميزانية يقوم على افتراضات المنشأة ذاتها، ويكمم تحليل الحساسية ما يقع لو تحركت تلك الافتراضات. وإن قيس الأصل بالعادلة لسبب غير متكرر (انخفاض IAS 36 بالعادلة ناقص تكاليف، تصنيف للبيع، مقابل اندماج IFRS 3) انطبق نظام غير المتكرر: السبب والمستوى والتقنية والمدخلات.",
      },
    },
    {
      kind: "tree",
      root: { en: "Which fair-value disclosure regime applies?", ar: "أي نظام إفصاح للقيمة العادلة ينطبق؟" },
      branches: [
        {
          when: { en: "Measured at fair value RECURRINGLY (FVTPL / FVOCI classes)", ar: "يقاس بالعادلة بصورة متكررة (طبقات FVTPL / FVOCI)" },
          then: { en: "Level split + transfers + (Level 3: rollforward, inputs, sensitivity, processes)", ar: "توزيع المستويات + الانتقالات + (للمستوى ٣: تسوية ومدخلات وحساسية وعمليات)", red: true },
        },
        {
          when: { en: "Measured at fair value but NOT recurring (IAS 36 FVLCD, held-for-sale, IFRS 3 consideration)", ar: "يقاس بالعادلة لا بصورة متكررة (عادلة ناقص تكاليف في IAS 36، للبيع، مقابل IFRS 3)" },
          then: { en: "The reason for measuring at FV + the level + technique + significant inputs", ar: "سبب القياس بالعادلة + المستوى + التقنية + المدخلات الجوهرية", red: true },
        },
        {
          when: { en: "NOT measured at fair value (AC loans, issued debt)", ar: "لا يقاس بالعادلة (قروض بالتكلفة المطفأة، دين مصدر)" },
          then: { en: "Disclose its fair value + level — unless carrying ≈ FV (short-term trade payables, bank loans at market rates)", ar: "أفصح عن عادلته ومستواها — إلا إذا قاربت الدفترية (التزامات تجارية قصيرة، قروض بمعدلات سوق)", red: true },
        },
      ],
    },
    {
      kind: "example",
      title: { en: "A Level-3 rollforward that ties", ar: "تسوية مستوى ثالث متوازنة" },
      lines: [
        { en: "Opening 2,000 · purchases 500 · sales (300) · total losses in P&L (80) · gains in OCI 20 → closing 2,140", ar: "أول الفترة ٢٬٠٠٠ · مشتريات ٥٠٠ · مبيعات (٣٠٠) · خسائر بالأرباح (٨٠) · مكاسب بالدخل الشامل ٢٠ ← آخر الفترة ٢٬١٤٠" },
        { en: "Check: 2,000 + 500 − 300 − 80 + 20 = 2,140 — the rollforward MUST foot, or the fair-value story leaks", ar: "تحقق: ٢٬٠٠٠ + ٥٠٠ − ٣٠٠ − ٨٠ + ٢٠ = ٢٬١٤٠ — يجب أن تتوازن التسوية وإلا تسربت حكاية العادلة" },
        { en: "Alongside: the significant unobservable inputs (a 20% DLOM, a revenue growth of 8%) + a sensitivity line per input", ar: "وبمرافقة: المدخلات غير الملحوظة الجوهرية (خصم عدم تداول ٢٠٪، نمو إيراد ٨٪) + سطر حساسية لكل مدخل" },
      ],
    },
    { kind: "h", text: { en: "The risk architecture", ar: "هندسة المخاطر" } },
    {
      kind: "tree",
      root: { en: "Qualitative + Quantitative for each risk", ar: "نوعي + كمي لكل خطر" },
      branches: [
        {
          when: { en: "CREDIT RISK — the risk one party will cause a financial loss by failing to discharge an obligation", ar: "مخاطر الائتمان — أن يسبب طرف خسارة مالية بعجزه عن الوفاء" },
          then: { en: "Exposure by class (before collateral), collateral held, credit enhancements, concentration analysis; MAXIMUM EXPOSURE (before risk mitigation) per class; and — IFRS 9's overlay — credit-quality grading of loans", ar: "الانكشاف بالطبقة (قبل الضمان)، والضمانات المقبوضة، وتحسينات الائتمان، وتحليلات التركز؛ والانكشاف الأقصى لكل طبقة؛ وتدرج الجودة الائتمانية للقروض", red: true },
        },
        {
          when: { en: "LIQUIDITY RISK — the risk an entity will have difficulty meeting obligations associated with financial liabilities", ar: "مخاطر السيولة — صعوبة الوفاء بالالتزامات المرتبطة بالالتزامات المالية" },
          then: { en: "A MATURITY ANALYSIS of financial liabilities (and derivative obligations) showing remaining contractual maturities (undiscounted); describe how the entity manages the risk", ar: "تحليل استحقاق للالتزامات المالية يبين الآجال التعاقدية المتبقية (غير المخصومة)؛ مع وصف إدارة المخاطر", red: true },
        },
        {
          when: { en: "MARKET RISK — currency, interest rate and OTHER price risk (the risk fair value or future cash flows will fluctuate)", ar: "مخاطر السوق — العملة، وسعر الفائدة، وأسعار أخرى (تقلب العادلة أو التدفقات)" },
          then: { en: "A SENSITIVITY ANALYSIS for each risk: the effect on profit and OCI of a REASONABLY POSSIBLE change; plus the methods and assumptions", ar: "تحليل حساسية لكل خطر: أثر تغير ممكن معقول على الأرباح والدخل الشامل؛ مع الأساليب والافتراضات", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Every risk gets BOTH halves. Qualitative: how the risk arises, the objectives and processes for managing it, and any change from the prior period — written so a non-banker follows the story. Quantitative: the exposure numbers (maximum exposure per class, the maturity table, the sensitivity analysis). Concentrations — one counterparty, one collateral type, one industry — are disclosed wherever they lurk, and hedge relationships are shown as risk modifiers with their own quantity of information.",
        ar: "لكل خطر نصفاه معًا. النوعي: كيف ينشأ الخطر، وأهداف إدارته وعملياتها، وأي تغير عن الفترة السابقة — مكتوبًا بحيث يتابع غير المصرفي الحكاية. والكمي: أرقام الانكشاف (الانكشاف الأقصى لكل طبقة، وجدول الاستحقاق، وتحليل الحساسية). والتركزات — نظير واحد أو نوع ضمان واحد أو صناعة واحدة — تفصح أينما اختبأت، وتعرض علاقات التغطية معدلاتٍ للمخاطر بكميتها الخاصة من المعلومات.",
      },
    },
    { kind: "h", text: { en: "Credit risk deep-dive", ar: "تعمق في مخاطر الائتمان" } },
    {
      kind: "list",
      items: [
        { en: "MAXIMUM EXPOSURE to credit risk per class — the gross carrying (before any collateral/credit-enhancement netting)", ar: "الانكشاف الأقصى لمخاطر الائتمان لكل طبقة — القيمة الإجمالية (قبل أي مقاصة بالضمانات أو التحسينات)" },
        { en: "Collateral held (type & carrying), other credit enhancements, and their effect on the loss-absorbing capacity", ar: "الضمانات المقبوضة (نوعها وقيمتها) وسائر تحسينات الائتمان وأثرها في القدرة على امتصاص الخسارة" },
        { en: "Credit-quality grading: financial assets by internal/external rating band (performing, watch, substandard, impaired)", ar: "تدرج الجودة الائتمانية: الأصول المالية بشرائح التصنيف الداخلي/الخارجي (سليم، مراقبة، دون المعيار، معسر)" },
        { en: "Collateral the entity HAS GIVEN and defaults on it (repossessed assets held, income from foreclosure)", ar: "الضمانات التي منحتها المنشأة وإخلالاتها (الأصول المستردة بالحيازة، ودخل التنفيذ)" },
        { en: "Loans PAYABLE at non-market rates or with no determinable fair value: the nature and terms of the liability", ar: "قروض مستحقة بمعدلات دون السوق أو بلا عادلة قابلة للتحديد: طبيعة الالتزام وشروطه" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The credit-risk narrative for a lender runs: gross exposure per class → what collateral and guarantees absorb → the grading distribution → how that maps to the IFRS 9 stages and the allowance. Watch the overlaps the examiner plants: a 'provision' number is also an ECL number; a repossessed-flat inventory line is also credit-risk collateral evidence. One set of facts, several shelves of disclosure — the skill is routing each fact to its shelf.",
        ar: "حكاية مخاطر الائتمان لمُقرضٍ تسير هكذا: الانكشاف الإجمالي لكل طبقة ← ما تمتصه الضمانات والكفالات ← توزيع التدرج ← كيف يقابل مراحل IFRS 9 والمخصص. وانتبه للتداخلات التي يزرعها الممتحن: رقم «المخصص» هو أيضًا رقم الخسائر المتوقعة؛ وسطر مخزون شقة مستردة هو أيضًا دليل ضمان ائتماني. وقائع واحدة وأرفف إفصاح عدة — والمهارة توجيه كل واقعة إلى رفها.",
      },
    },
    { kind: "h", text: { en: "Liquidity risk & the maturity table", ar: "مخاطر السيولة وجدول الاستحقاق" } },
    {
      kind: "p",
      text: {
        en: "The maturity analysis discipline: undiscounted CONTRACTUAL outflows, with the EARLIEST date the counterparty can demand payment (deposits repayable on demand → the earliest period bucket). If the entity manages liquidity on a discounted basis, that is a management view ADDITIONAL to the contractual table. The table includes interest the contract will demand — a 3-year bullet loan shows 12, 12 and 212, not the carrying amount. The sensitivity discipline: a reasonably possible change, not a worst case; for a bank with floating-rate debt of 100 at 1% above base, a 100bp move changes interest by 1 per year — tell it and total it.",
        ar: "انضباط تحليل الاستحقاق: تدفقات خروج تعاقدية غير مخصومة بأبكر تاريخ يستطيع فيه الطرف الآخر المطالبة (ودائع تحت الطلب في الفترة الأولى). وإذا أدارت المنشأة السيولة بالخصم فهذا منظر إداري إضافي للجدول التعاقدي. ويشمل الجدول الفوائد التي سيطلبها العقد — فقرض مقذوف ٣ سنوات يظهر ١٢ و١٢ و٢١٢ لا القيمة الدفترية. وانضباط الحساسية: تغير ممكن معقول لا أسوأ حالة؛ فبنك بدين عائم ١٠٠ بفارق ١٪ يغير تحركُ ١٪ الفائدة بمقدار ١ سنويًا — قلها واجمعها.",
      },
    },
    {
      kind: "journal",
      title: { en: "Liquidity risk — the entries behind the maturity table (3-year bullet loan 200,000 at 6%)", ar: "مخاطر السيولة — القيود خلف جدول الاستحقاق (قرض مقذوف ٣ سنوات ٢٠٠٬٠٠٠ بفائدة ٦٪)" },
      rows: [
        { dr: { en: "Cash 200,000", ar: "نقد ٢٠٠٬٠٠٠" }, cr: { en: "Loan payable (drawn) 200,000", ar: "قرض دائن (مسحوب) ٢٠٠٬٠٠٠" } },
        { dr: { en: "Interest expense 12,000", ar: "مصروف فائدة ١٢٬٠٠٠" }, cr: { en: "Cash (contractual coupon paid) 12,000", ar: "نقد (كوبون تعاقدي مدفوع) ١٢٬٠٠٠" }, red: true },
        { dr: { en: "Loan payable 200,000", ar: "قرض دائن ٢٠٠٬٠٠٠" }, cr: { en: "Cash (bullet repaid at year 3) 200,000", ar: "نقد (سداد المقذوف في السنة ٣) ٢٠٠٬٠٠٠" } },
      ],
    },
    {
      kind: "example",
      title: { en: "The maturity table itself — undiscounted, contractual, earliest date", ar: "جدول الاستحقاق ذاته — غير مخصوم، تعاقدي، أبكر تاريخ" },
      lines: [
        { en: "3-year bullet loan 200,000 at 6% fixed: ≤ 1 yr: 12,000 · 1–2 yrs: 12,000 · 2–5 yrs: 212,000 · TOTAL 236,000 — interest included, nothing discounted", ar: "قرض مقذوف ٣ سنوات ٢٠٠٬٠٠٠ بفائدة ثابتة ٦٪: سنة فأقل: ١٢٬٠٠٠ · ١–٢ سنة: ١٢٬٠٠٠ · ٢–٥ سنوات: ٢١٢٬٠٠٠ · الإجمالي ٢٣٦٬٠٠٠ — الفوائد داخلة ولا شيء مخصوم" },
        { en: "Demand deposits of 150,000 → the WHOLE 150,000 sits in the earliest bucket (≤ 1 month), because the counterparty can demand it now", ar: "ودائع تحت الطلب ١٥٠٬٠٠٠ ← المبلغ كله في الفترة الأبكر (شهر فأقل) لأن الطرف الآخر يستطيع المطالبة به الآن" },
        { en: "The carrying amount (≈200,000) appears NOWHERE in the table — carrying amounts are a different disclosure (significance shelf)", ar: "القيمة الدفترية (≈٢٠٠٬٠٠٠) لا تظهر في الجدول أبدًا — فالقيم الدفترية إفصاح آخر (رف الأهمية)" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The maturity analysis uses UNDISCOUNTED contractual cash flows — candidates discounting the table or using carrying amounts lose the whole mark; and on-demand deposits go into the FIRST maturity bucket, always.",
        ar: "تحليل الاستحقاق بتدفقات تعاقدية غير مخصومة — ومن يخصم الجدول أو يستخدم القيم الدفترية يخسر العلامة كلها؛ والودائع تحت الطلب في الفترة الأولى دائمًا.",
      },
    },
    { kind: "h", text: { en: "Market risk & sensitivity analysis", ar: "مخاطر السوق وتحليل الحساسية" },
    },
    {
      kind: "p",
      text: {
        en: "Market risk disclosure is one number per risk: pick a reasonably possible change (a 100bp rate move, a 10% currency slide), apply it to the exposure, and state the effect on profit or loss and on OCI — with the method and assumptions that produced it. Where the entity manages risk with scenario analysis or value-at-risk instead, that can substitute — but the discipline stays: a plausible, non-worst-case move, its P&L and OCI landing spots (FVTPL → P&L; FVOCI → OCI), and how hedging changes the answer.",
        ar: "إفصاح مخاطر السوق رقمٌ واحد لكل خطر: اختر تغيرًا ممكنًا معقولًا (تحرك فائدة ١٪، انزلاق عملة ١٠٪)، وطبيقه على الانكشاف، واذكر أثره على الأرباح أو الخسائر وعلى الدخل الشامل — بأسلوبه وافتراضاته. وحيث تدير المنشأة الخطر بتحليل السيناريوهات أو القيمة المعرضة للخطر جاز ذلك بديلًا — لكن الانضباط يبقى: تحرك معقول غير أسوأ الحالات، ومواقع هبوطه في الأرباح (FVTPL) والدخل الشامل (FVOCI)، وكيف تغير التغطية الجواب.",
      },
    },
    {
      kind: "example",
      title: { en: "A sensitivity story told right", ar: "قصة حساسية تُحكى كما ينبغي" },
      lines: [
        { en: "Bond portfolio FV 10m, modified duration 4 → a +100bp rate move drops FV by ≈ 10m × 4% = 400k", ar: "محفظة سندات بعادلة ١٠ ملايين ومدة معدلة ٤ ← تحرك +١٪ يهبط بالعادلة نحو ٤٠٠ ألف" },
        { en: "State: the assumption (100bp = reasonably possible for the reporting period), the method (duration approximation) and where it lands (P&L for FVTPL, OCI for FVOCI)", ar: "اذكر: الافتراض (١٪ ممكن معقول)، والطريقة (تقريب المدة)، وأين يقع الأثر (الأرباح لـFVTPL والدخل الشامل لـFVOCI)" },
        { en: "Currency risk: net exposure 2m USD → a 10% EGP slide changes equity by 200k — same three-part discipline", ar: "مخاطر العملة: انكشاف صافٍ ٢ مليون دولار ← انزلاق ١٠٪ يغير حقوق الملكية ٢٠٠ ألف — بالانضباط الثلاثي ذاته" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The sensitivity equation", ar: "معادلة الحساسية" },
      lines: [
        { en: "FV impact ≈ portfolio exposure × the reasonably possible shift", ar: "أثر القيمة العادلة ≈ انكشاف المحفظة × التحرك الممكن المعقول" },
        { en: "Interest-rate: ΔFV ≈ − modified duration × FV × Δrate (basis points ÷ 10,000)", ar: "الفائدة: التغير ≈ − المدة المعدلة × العادلة × تغير المعدل" },
        { en: "Currency: Δequity/P&L ≈ net open position × % currency move", ar: "العملة: التغير ≈ المركز المكشوف الصافي × نسبة تحرك العملة" },
        { en: "Liquidity: contractual maturity bucket = undiscounted cash outflow × earliest-settlement date", ar: "السيولة: فترة الاستحقاق = التدفق الخارج غير المخصوم × أبكر تاريخ تسوية" },
      ],
    },
    { kind: "h", text: { en: "Capital management", ar: "إدارة رأس المال" } },
    {
      kind: "p",
      text: {
        en: "The capital hook (disclosed under IFRS 7's requirements): the entity's objectives, policies and processes for managing capital — what IT defines as capital, what externally imposed requirements it faces (a regulator's solvency ratio, a covenant), and how it aims to keep capital within targets. The quantitative summary discloses the capital as managed and the ratio against the target, plus a statement of whether it complied during the period. A bank shows CET1 of, say, 14.2% against a 10.5% minimum; a manufacturer shows net debt/equity against its bank covenant.",
        ar: "خطاف رأس المال (يُفصح بموجب متطلبات IFRS 7): أهداف المنشأة وسياساتها وعملياتها لإدارة رأس المال — ما تحدده هي رأسَ مال، وما المتطلبات المفروضة خارجيًا (نسبة ملاءة جهة رقابية، شرط تعاقدي)، وكيف تنوي إبقاء رأس المال داخل المستهدفات. ويكشف الملخص الكمي رأس المال كما يُدار ونسبته إلى المستهدف، وبيانًا بالالتزام خلال الفترة. فالبنك يعرض CET1 مثلًا ١٤٫٢٪ مقابل حد أدنى ١٠٫٥٪؛ والمصنع يعرض صافي الدين إلى حقوق الملكية مقابل شرطه المصرفي.",
      },
    },
    { kind: "h", text: { en: "Transfers, derecognition & the offsetting shadow", ar: "الانتقالات والاستبعاد وظل المقاصة" } },
    {
      kind: "list",
      items: [
        { en: "Transferred assets that do not qualify for derecognition: the nature, the carrying, the associated liabilities and the relationships", ar: "أصول منقولة لا تصلح للاستبعاد: الطبيعة والقيمة والالتزامات المرتبطة وعلاقاتها" },
        { en: "Continuing involvement disclosures for part-transfers: the carrying of the assets and liabilities recognised, the instruments' maximum exposure, the undiscounted cash outflows to repurchase", ar: "إفصاحات التورط المستمر: قيم الأصول والالتزامات المعترف بها والانكشاف الأقصى والتدفقات غير المخصومة لإعادة الشراء" },
        { en: "Collateral defaults & repossessions: the income/expense from foreclosing, and non-cash assets obtained", ar: "إخلالات الضمان والاستردادات: الدخل/المصروف من الحيازة والأصول غير النقدية المكتسبة" },
        { en: "Offsetting (2011 amendments): recognised financial assets & liabilities subject to enforceable master netting or similar agreements — quantify BOTH the gross and net presentation effect", ar: "المقاصة (تعديلات ٢٠١١): الأصول والالتزامات المعترف بها الخاضعة لاتفاقيات إطار مقاصة نافذة — كمّم أثر العرض الإجمالي والصافي معًا" },
        { en: "CAPITAL MANAGEMENT (IAS 1.134 discipline but listed here): the entity's objectives, policies and processes for managing capital + quantitative data + target compliance", ar: "إدارة رأس المال: الأهداف والسياسات وعمليات الإدارة + البيانات الكمية + الالتزام بالمستهدف" },
      ],
    },
    { kind: "h", text: { en: "Building the disclosure pack — the sequence", ar: "بناء حزمة الإفصاح — التسلسل" } },
    {
      kind: "steps",
      items: [
        { en: "1. Fix the CLASSES of instrument (measurement category + risk characteristics)", ar: "١. حدد فئات الأدوات (فئة القياس + خصائص المخاطر)" },
        { en: "2. Fill the SIGNIFICANCE shelf: SoFP carrying amounts + gross/allowance/net + income & expense by class", ar: "٢. املأ رف الأهمية: القيم الدفترية + الإجمالي/المخصص/الصافي + الدخل والمصروف بالطبقة" },
        { en: "3. Fill the FAIR VALUE shelf: hierarchy split, transfers, Level 3 rollforward + sensitivity, non-recurring and not-at-FV items", ar: "٣. املأ رف القيمة العادلة: توزيع المستويات والانتقالات وتسوية المستوى ٣ وحساسيته والبنود غير المتكررة وغير المقاسة بالعادلة" },
        { en: "4. Fill the RISK shelf: credit (exposure + grading + collateral), liquidity (maturity table), market (sensitivity) — each qualitative then quantitative", ar: "٤. املأ رف المخاطر: الائتمان (انكشاف + تدرج + ضمانات)، والسيولة (جدول الاستحقاق)، والسوق (الحساسية) — كلٌّ نوعيًا ثم كميًا" },
        { en: "5. Add capital management + offsetting/continuing-involvement overlays, and reconcile every number back to the ledger", ar: "٥. أضف إدارة رأس المال وطبقات المقاصة والتورط المستمر، وساوِ كل رقم بالدفاتر" },
      ],
    },
    { kind: "h", text: { en: "Interactions & the measurement hook", ar: "التفاعلات وخطاف القياس" } },
    {
      kind: "p",
      text: {
        en: "IFRS 7 is the display layer of the instruments stack: IAS 32 decides liability vs equity, IFRS 9 measures and impairs, IFRS 13 defines the fair values — and IFRS 7 reports it all. IAS 1 supplies the materiality/aggregation frame and the capital-management hook; IFRS 13's own disclosure requirements (hierarchy, Level 3) are executed through IFRS 7's classes; the offsetting quantification pairs with IAS 32's presentation rule. For exam purposes: answer the MEASUREMENT first, then attach the disclosure — a disclosure answer with wrong numbers scores nothing.",
        ar: "IFRS 7 طبقة العرض لمنظومة الأدوات: IAS 32 يحسم الالتزام مقابل الملكية، وIFRS 9 يقيس ويخفض القيمة، وIFRS 13 يعرّف القيم العادلة — وIFRS 7 يعرض ذلك كله. وIAS 1 يمنح إطار الجوهرية والتجميع وخطاف إدارة رأس المال؛ ومتطلبات إفصاح IFRS 13 ذاته (المستويات والمستوى ٣) تُنفذ عبر فئات IFRS 7؛ وكم المقاصة قرين قاعدة العرض في IAS 32. وللأغراض الامتحانية: أجب بالقياس أولًا ثم أرفق الإفصاح — فإجابة إفصاح بأرقام خاطئة لا تنال شيئًا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Structure every IFRS 7 answer in three shelves — significance (B/S + P&L), fair value (levels + L3 rollforward), risk (credit/liquidity/market, each qualitative + quantitative) — the marker marks by the shelf.",
        ar: "هيكل كل إجابة IFRS 7 في ثلاث رفوف — الأهمية (الميزانية والأرباح)، والقيمة العادلة (المستويات وتسوية الثالث)، والمخاطر (ائتمان/سيولة/سوق، كلٌّ نوعيًا وكميًا) — فالمصحح يصحح بالرف.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "When the scenario gives a fact, route it: a rating downgrade → credit grading + ECL stage; a covenant breach → capital management; a new FX forward → market sensitivity AND hedging disclosure. Facts are not disclosed once — they feed every shelf they touch.",
        ar: "إذا أعطاك السيناريو واقعة فوجّهها: هبوط التصنيف ← التدرج الائتماني ومرحلة الخسائر المتوقعة؛ والإخلال بشرط تعاقدي ← إدارة رأس المال؛ وعقد صرف آجل جديد ← حساسية السوق وإفصاح التغطية. فالوقائع لا تفصح مرة — بل تغذي كل رف تمسه.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Disclosure does not measure: IFRS 7 changes no numbers; it makes what IFRS 9 and IAS 32 did VISIBLE — always answer the measurement first, then attach the disclosure.",
        ar: "الإفصاح لا يقيس: IFRS 7 لا يغير أرقامًا؛ إنه يجعل ما فعلته IFRS 9 وIAS 32 مرئيًا — أجب دائمًا بالقياس أولًا ثم أرفق الإفصاح.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Disclosures photograph the REPORTING DATE — the exposure at the balance-sheet date, not a period average; significant intra-period risk changes belong in the qualitative narrative.",
        ar: "الإفصاحات تصوّر تاريخ التقرير — الانكشاف يوم الميزانية لا متوسط الفترة؛ وتغيرات المخاطر الجوهرية خلال الفترة تُروى في السرد النوعي.",
      },
    },
  ],
}
