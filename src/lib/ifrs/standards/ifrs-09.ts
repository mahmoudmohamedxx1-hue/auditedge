/** IFRS 9 — Financial Instruments */

import type { Standard } from "../types"

export const IFRS_9: Standard = {
  code: "IFRS 9",
  title: { en: "Financial Instruments", ar: "الأدوات المالية" },
  topic: "instruments",
  effective: { en: "Effective 1 Jan 2018 · replaced IAS 39 (recognition & measurement)", ar: "سارٍ من ١ يناير ٢٠١٨ · حل محل IAS 39 (الاعتراف والقياس)" },
  replaces: { en: "Phases in over IAS 39 (classification, impairment, hedge accounting)", ar: "يحل تدريجيًا محل IAS 39 (التصنيف، الانخفاض، محاسبة التغطية)" },
  blocks: [
    { kind: "h", text: { en: "Objective & the three chapters", ar: "الهدف والفصول الثلاثة" } },
    {
      kind: "p",
      text: {
        en: "IFRS 9 replaced IAS 39's classification maze with a logically ordered machine: (1) CLASSIFICATION & measurement driven by the business model + the cash-flow character; (2) IMPAIRMENT built on expected credit losses rather than incurred losses; (3) HEDGE accounting aligned closer to risk management. Financial assets enter at fair value; the question is only which of three buckets they land in — and what happens afterwards.",
        ar: "أبدل IFRS 9 متاهة تصنيف IAS 39 بآلة مرتبة منطقيًا: (١) التصنيف والقياس بقيادة النموذج الائتماني وطبعة التدفقات؛ (٢) الانخفاض على الخسائر الائتمانية المتوقعة لا الواقعة؛ (٣) محاسبة تغطية أقرب لإدارة المخاطر. تدخل الأصول بالقيمة العادلة؛ والسؤال في أي من الحاويات الثلاث تسقط — وماذا يجري بعدها.",
      },
    },
    { kind: "h", text: { en: "Chapter 1 — Classification: the two tests", ar: "الفصل ١ — التصنيف: الاختباران" } },
    {
      kind: "tree",
      root: { en: "A debt instrument at initial recognition", ar: "أداة دين عند الاعتراف الأولي" },
      branches: [
        {
          when: { en: "SPPI test passes — Solely Payments of Principal & Interest on the principal outstanding (interest = money-for-time + credit risk)", ar: "اجتياز اختبار SPPI — مدفوعات من أصل وفوائد فقط على الأصل القائم (الفائدة = عوض الوقت + مخاطر الائتمان)" },
          then: { en: "Check the BUSINESS MODEL", ar: "اختبر النموذج الائتماني" },
          children: [
            {
              when: { en: "HOLD TO COLLECT (collect contractual cash flows to maturity)", ar: "الاحتفاظ للتحصيل (تحصيل التدفقات التعاقدية حتى الاستحقاق)" },
              then: { en: "AMORTISED COST — the AC bucket", ar: "التكلفة المدمجة — حاوية AC", red: true },
            },
            {
              when: { en: "HOLD TO COLLECT & SELL (both collecting and selling are integral)", ar: "الاحتفاظ للتحصيل والبيع (التحصيل والبيع كلاهما جوهري)" },
              then: { en: "FVOCI (debt) — gains/losses in OCI, RECYCLED to P&L on derecognition", ar: "FVOCI للديون — فروق في الدخل الشامل تعاد للأرباح عند الاستبعاد", red: true },
            },
            {
              when: { en: "Anything else (trading, convenience-of-sale)", ar: "غير ذلك (متاجرة، البيع حسب الحاجة)" },
              then: { en: "FVTPL — the default bucket", ar: "FVTPL — الحاوية الافتراضية", red: true },
            },
          ],
        },
        {
          when: { en: "SPPI FAILS (equity instruments; debt with non-SPPI features: inflation-linked principal, profit-share coupons, contingent repayment)", ar: "فشل SPPI (أدوات الملكية؛ ديون بسمات خارج الاختبار: أصل مرتبط بالتضخم، كوبونات مشاركة، سداد مشروط)" },
          then: { en: "FVTPL mandatorily", ar: "FVTPL إلزاميًا", red: true },
        },
        {
          when: { en: "An EQUITY instrument (shares) — SPPI never applies", ar: "أداة ملكية (أسهم) — لا ينطبق SPPI أصلًا" },
          then: { en: "FVTPL — or the IRREVOCABLE FVOCI election at initial recognition: dividends in P&L, FV movements in OCI and NEVER recycled to P&L (only to equity within OCI)", ar: "FVTPL — أو انتخاب FVOCI غير القابل للنقض عند النشأة: التوزيعات بالأرباح وفروق القيمة في الدخل الشامل دون تدوير للأرباح أبدًا", red: true },
        },
        {
          when: { en: "Financial LIABILITIES: default FVTPL with one ELECTED exception — designating a liability at FVTPL to eliminate an accounting mismatch; the OWN-CREDIT portion of its FV change → OCI", ar: "الالتزامات المالية: FVTPL افتراضيًا مع انتخاب واحد — تسمية التزام بـFVTPL لإزالة عدم تماثل محاسبي؛ وحصة مخاطر الائتمان الذاتي من فرق القيمة ← الدخل الشامل" },
          then: { en: "The rest of the FV change → P&L", ar: "وبقية فرق القيمة ← الأرباح", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Embedded derivatives: under IFRS 9 a host + embedded derivative is tested as ONE HYBRID contract — separate only when (a) the economic relationship is NOT closely related, and (b) the hybrid is not measured at FVTPL; otherwise measure the WHOLE at FVTPL (no more bifurcation for failing hybrids). Reclassification of debt is banned except when the business model changes (rare, not driven by convenience), and is never allowed for equities or derivatives.",
        ar: "المشتقات المضمنة: يختبر العقد المضيف والمشتق المضمّن عقدًا هجينًا واحدًا — يفصل فقط عند عدم العلاقة الوثيقة اقتصاديًا وعدم قياس الهجين بـFVTPL؛ وإلا قيس الهجين كله بـFVTPL (لا مزيد من الفصل). وإعادة تبويب الدين محظورة إلا عند تغير النموذج الائتماني (نادرًا)، ولا تجوز أبدًا للملكية والمشتقات.",
      },
    },
    { kind: "h", text: { en: "Amortised cost — the EIR engine", ar: "التكلفة المدمجة — محرك الفائدة الفعلية" },
    },
    {
      kind: "formula",
      title: { en: "Effective interest method", ar: "طريقة الفائدة الفعلية" },
      lines: [
        { en: "Amortised cost = future cash flows discounted at the EIR, accumulated over time: carrying + EIR interest − cash received − write-offs", ar: "التكلفة المدمجة = تدفقات مستقبلية مخصومة بالفائدة الفعلية تتراكم زمنيًا: الدفترية + فائدة − نقد مقبوض − شطبات" },
        { en: "EIR = the rate that exactly discounts the contractual cash flows to the initial carrying amount (net of transaction costs, incl. fees paid/received integral to the instrument)", ar: "الفائدة الفعلية = المعدل الذي يخصم التدفقات التعاقدية إلى القيمة الأولية (صافي تكاليف المعاملة والرسوم الجوهرية)" },
        { en: "Interest income (AC & FVOCI-debt) = gross carrying amount × EIR (credit-impaired: on the AMORTISED COST basis, i.e. net of loss allowance)", ar: "إيراد الفائدة (للتكلفة المدمجة وديون FVOCI) = القيمة الإجمالية × الفائدة الفعلية (والمعسر ائتمانيًا: على أساس المدمجة الصافية)" },
        { en: "Floating-rate instruments: update the discount curve as rates reset (the EIR floats with the benchmark)", ar: "الأدوات العائمة: يتحدث منحنى الخصم مع كل إعادة تسعير" },
      ],
    },
    {
      kind: "example",
      title: { en: "A bond bought at a discount", ar: "سند مشترى بخصم" },
      lines: [
        { en: "5-year bond, face 1,000, coupon 5% annual, bought at 957 + transaction costs 10 → initial carrying 967; redemption at par", ar: "سند ٥ سنوات، اسمي ١٬٠٠٠، كوبون ٥٪ سنوي، شرِي عند ٩٥٧ + تكاليف ١٠ ← الدفترية الأولية ٩٦٧" },
        { en: "EIR ≈ 5.87% — the rate discounting [50×5 yrs + 1,000] to 967", ar: "الفائدة الفعلية ≈ ٥٫٨٧٪ — المعدل الذي يخصم ٥٠ لخمس سنوات و١٬٠٠٠ إلى ٩٦٧" },
        { en: "Year 1: interest income 967 × 5.87% = 56.8 (coupon cash 50 → carrying +6.8 to 973.8)", ar: "السنة الأولى: إيراد ٥٦٫٨ (نقد ٥٠ ← الدفترية ترتفع ٦٫٨ إلى ٩٧٣٫٨)" },
        { en: "By maturity the carrying reaches exactly 1,000 — the discount accretes through P&L as extra interest", ar: "عند الاستحقاق تبلغ الدفترية ١٬٠٠٠ بالضبط — فالخصم يتضخم عبر الأرباح فائدة إضافية" },
      ],
    },
    { kind: "h", text: { en: "Chapter 2 — Impairment: the ECL revolution", ar: "الفصل ٢ — الانخفاض: ثورة الخسائر المتوقعة" } },
    {
      kind: "p",
      text: {
        en: "The incurred-loss world waited for a default to happen. IFRS 9 books EXPECTED credit losses from day one — a probability-weighted, discounted estimate of the shortfall (PD × LGD × EAD thinking). The general model runs in three stages depending on how far credit has deteriorated since initial recognition.",
        ar: "عالم الخسائر الواقعة كان ينتظر التعثر. أما IFRS 9 فيحجز الخسائر الائتمانية المتوقعة من اليوم الأول — تقديرًا مرجحًا بالاحتمالات مخصومًا للعجز (منطق PD × LGD × EAD). ويعمل النموذج العام على ثلاث مراحل تبعًا لدرجة تدهور الائتمان منذ النشأة.",
      },
    },
    {
      kind: "tree",
      root: { en: "Where does the asset sit in the 3-stage model?", ar: "أين يقع الأصل في النموذج الثلاثي؟" },
      branches: [
        {
          when: { en: "STAGE 1 — performing, no significant increase in credit risk (SICR) since initial recognition", ar: "المرحلة ١ — سليم، لا زيادة جوهرية في مخاطر الائتمان منذ النشأة" },
          then: { en: "12-MONTH ECL (the losses possible within 12 months of default-probability-weighting) + interest on the GROSS carrying amount", ar: "خسائر ١٢ شهرًا (المرجحة بمخاطر التعثر خلالها) + فائدة على القيمة الإجمالية", red: true },
        },
        {
          when: { en: "STAGE 2 — SICR triggered (or 30 days past due rebuttable presumption): credit worse than at day one but not credit-impaired", ar: "المرحلة ٢ — زيادة جوهرية (أو تجاوز ٣٠ يومًا افتراضًا قابلا للدحض): الائتمان أسوأ من اليوم الأول دون إعسار فعلي" },
          then: { en: "LIFETIME ECL (all losses over the whole remaining life) + interest still on the GROSS amount", ar: "خسائر العمر الكامل + الفائدة لا تزال على الإجمالية", red: true },
        },
        {
          when: { en: "STAGE 3 — CREDIT-IMPAIRED (default, 90 days past due, unlikeliness-to-pay evidence)", ar: "المرحلة ٣ — معسر ائتمانيًا (تعثر، ٩٠ يومًا، أدلة عدم سداد)" },
          then: { en: "Lifetime ECL + interest on the AMORTISED COST net of the loss allowance", ar: "خسائر العمر + الفائدة على المدمجة الصافية بعد مخصص الخسارة", red: true },
        },
        {
          when: { en: "PURCHASED or ORIGINATED CREDIT-IMPAIRED (POCI) — bad at birth", ar: "مقتنى أو منشأ معسرًا (POCI) — سيئ منذ النشأة" },
          then: { en: "A floating ECL allowance adjusted each period through P&L; interest always on the net (credit-adjusted EIR from day one)", ar: "مخصص عائم يعدل كل فترة بالأرباح؛ والفائدة دائمًا على الصافي (بفائدة فعلية معدلة ائتمانيًا)", red: true },
        },
      ],
    },
    {
      kind: "list",
      items: [
        { en: "SIMPLIFIED approach (mandatory for trade receivables, contract assets & lease receivables; optional for lease receivables... in fact mandatory for trade receivables without significant financing component, optional choice timing for others): always LIFETIME ECL, no staging — a provision matrix by aging bucket does the job", ar: "الأسلوب المبسط (إلزامي للمدينين التجاريين وأصول العقود: خسائر العمر دائمًا دون مراحل — ومصفوفة مخصصات بفئات التقادم تكفي)" },
        { en: "SICR indicators: actual or expected significant deterioration, significant changes in utilisation/behaviour, backstops like 30 days past due, macro-driven outlook changes", ar: "مؤشرات الزيادة الجوهرية: تدهور فعلي أو متوقع جوهري، تغيرات جوهرية في السلوك والاستخدام، وركائز كتجاوز ٣٠ يومًا، وتغيرات الاقتصاد الكلي" },
        { en: "Collateral & credit enhancements integrated into the measurement; non-linear ECL when risk is non-linear", ar: "الضمانات وتحسينات الائتمان تدخل في القياس" },
        { en: "Write-off when no reasonable expectation of recovery; write-backs and recoveries go through P&L", ar: "الشطبة عند انتفاء توقع معقول للاسترداد؛ والاستردادات تمر بالأرباح" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The ECL & FV entries", ar: "قيود الخسائر المتوقعة والقيمة العادلة" },
      rows: [
        { dr: { en: "Impairment loss (P&L)", ar: "خسائر انخفاض (بالأرباح)" }, cr: { en: "Loss allowance (ECL)", ar: "مخصص الخسائر المتوقعة" }, red: true },
        { dr: { en: "Loss allowance", ar: "مخصص الخسائر" }, cr: { en: "Debtors (write-off)", ar: "مدينون (شطبة)" } },
        { dr: { en: "Debt instrument (FVOCI — FV rise)", ar: "أداة دين (FVOCI — ارتفاع)" }, cr: { en: "OCI — fair-value reserve", ar: "الدخل الشامل — احتياطي القيمة" }, red: true },
        { dr: { en: "OCI — recycled to P&L on derecognition", ar: "الدخل الشامل — يعاد للأرباح عند الاستبعاد" }, cr: { en: "Gain on disposal (P&L)", ar: "ربح التخرد (بالأرباح)" } },
        { dr: { en: "Equity at FVOCI (dividend received)", ar: "ملكية FVOCI (توزيع مقبوض)" }, cr: { en: "Dividend income (P&L — never the FV gain)", ar: "إيراد توزيعات (بالأرباح — لا مكسب القيمة أبدًا)" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Derecognition — the transfer test", ar: "الاستبعاد — اختبار النقل" } },
    {
      kind: "tree",
      root: { en: "Sell a financial asset (or part)?", ar: "بيع أصل مالي (أو جزء منه)؟" },
      branches: [
        {
          when: { en: "Rights to the cash flows EXPIRED or the risks & rewards SUBSTANTIALLY TRANSFERRED (pass-through test)", ar: "انقضت حقوق التدفقات أو انتقل جوهر المخاطر والمنافع" },
          then: { en: "DERECOGNISE; any retained interest → a NEW asset at fair value; difference → P&L", ar: "استبعد؛ وأي حق محتفظ به أصل جديد بالعادلة؛ والفرق للأرباح", red: true },
        },
        {
          when: { en: "Risks & rewards RETAINED (a secured borrowing in substance)", ar: "احتفظ بالمخاطر والمنافع (اقتراض مضمون في الجوهر)" },
          then: { en: "Keep the asset; book the proceeds as a LIABILITY (a collateralised borrowing)", ar: "أبقِ الأصل؛ والمتحصلات التزامًا (اقتراضًا بضمان)", red: true },
        },
        {
          when: { en: "Neither retained nor transferred in full → CONTINUING INVOLVEMENT test: derecognise to the extent of the transferee's power to sell, keep a continuing-involvement asset/liability", ar: "لا احتفاظ كامل ولا نقل كامل ← اختبار التورط المستمر: استبعد بحد قدرة المتنقل عليه على البيع" },
          then: { en: "The pass-through assessment tree runs in order: expiry → risks&rewards → control → continuing involvement", ar: "شجرة التقييم بالترتيب: انقضاء ← مخاطر ومنافع ← سيطرة ← تورط مستمر", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Chapter 3 — Hedge accounting (the digestible core)", ar: "الفصل ٣ — محاسبة التغطية (الجوهر المهضوم)" } },
    {
      kind: "list",
      items: [
        { en: "Three types: FAIR VALUE hedge (FV of a recognised asset/liability), CASH FLOW hedge (variability of future cash flows), NET INVESTMENT hedge of a foreign operation (IAS 21 companion)", ar: "ثلاثة أنواع: تغطية قيمة عادلة (لأصل/التزام قائم)، وتدفقات (لتقلب تدفقات مستقبلية)، واستثمار صافٍ في عملية أجنبية (قرينة IAS 21)" },
        { en: "Documentation at INCEPTION: the hedging relationship, the risk-management objective, the effectiveness requirement (economic relationship + no offsetting weight shifts)", ar: "وثائق عند النشأة: علاقة التغطية وهدف إدارة المخاطر ومطلب الفاعلية (علاقة اقتصادية دون إزاحة أوزان)" },
        { en: "NO 80–125% bright line anymore (that was IAS 39); effectiveness is qualitative-with-evidence, tested prospectively & retrospectively", ar: "لا حد ٨٠–١٢٥٪ بعد الآن (كان ذلك IAS 39)؛ فالفاعلية نوعية بدليل وتختبر مستقبليًا ورجعيًا" },
        { en: "Cash-flow hedge: the EFFECTIVE portion → the cash-flow-hedge reserve (OCI); REBALANCING allowed without discontinuation; the ineffective portion → P&L", ar: "تغطية التدفقات: الجزء الفاعل ← احتياطي التغطية في الدخل الشامل؛ ويجوز إعادة الموازنة دون إيقاف؛ وغير الفاعل ← الأرباح" },
        { en: "Fair-value hedge: both the hedging instrument's and the hedged item's FV changes → P&L (the hedged item's baseline risk adjustment)", ar: "تغطية العادلة: فروق الأداة والمغطى كلاهما ← الأرباح" },
        { en: "Cost-of-hedging carve-out (2022 amendment): permitted own-use energy contracts & risk components → a virtual accounting result", ar: "استثناء تكلفة التغطية (تعديل ٢٠٢٢): عقود الطاقة للاستخدام الذاتي ومكونات المخاطر ← نتيجة افتراضية" },
      ],
    },
    { kind: "h", text: { en: "Presentation & disclosure essentials", ar: "أساسيات العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Day-one gain/loss (FVTPL & FVOCI) = difference between the transaction price and the day-one fair value — usually nil (IFRS 13 presumes price = FV)", ar: "ربح/خسارة اليوم الأول = فرق سعر المعاملة عن العادلة — وعادة صفر (يفترض IFRS 13 السعر عادلةً)" },
        { en: "Loss allowances presented GROSS vs NET (the impairment allowance presentation choice for interest income and ECL — disclose the selected option)", ar: "عرض المخصص إجماليًا أو صافيًا — خيار يفصح عنه" },
        { en: "The IFRS 7 companion disclosures: categories, ECL stage movements (a rollforward of the loss allowance), credit-risk concentrations, the gross/net carrying reconciliation", ar: "إفصاحات IFRS 7 المرافقة: الفئات، وحركات المراحل (تسوية المخصص)، وتركزات المخاطر" },
        { en: "Reclassification & modification accounting: a modification that changes cash flows → derecognise the old, recognise the new at FV (a 10% difference in discounted terms = substantial modification)", ar: "إعادة التبويب والتعديل: التعديل الذي يغير التدفقات ← استبعد القديم واعترف بجديد بالعادلة (وفرق ١٠٪ في الشروط المخصومة تعديل جوهري)" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The two-test sentence wins classification marks: 'the business model is hold-to-collect AND the SPPI test passes, therefore amortised cost.' Say BOTH halves — one without the other is a failed answer.",
        ar: "جملة الاختبارين تحسم درجات التصنيف: «النموذج الاحتفاظ للتحصيل واجتياز SPPI إذن التكلفة المدمجة». قل النصفين معًا — فأحدهما دون الآخر إجابة فاشلة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "ECL stage logic: 12-month vs lifetime is about HOW MUCH expected loss, NOT the timing of recognising a loss — even a brand-new loan books its day-one 12-month ECL. And the 30-days-past-due trigger is a REBUTTABLE presumption, not a rule of law.",
        ar: "منطق المراحل: ١٢ شهرًا مقابل العمر الكامل كمٌّ للخسارة المتوقعة لا توقيتٌ للاعتراف — فحتى القرض الجديد يحجز خسائر ١٢ شهره في يومه الأول. ومحفز ٣٠ يومًا افتراض قابل للدحض لا قاعدة قانونية.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The equity FVOCI election: ONLY dividends ever touch P&L; the fair-value delta lives in OCI forever — an irrevocable, at-inception choice.",
        ar: "الاستثمار في الملكية بـFVOCI: التوزيعات وحدها تلمس الأرباح؛ أما فرق القيمة فيسكن الدخل الشامل إلى الأبد — خيار لا رجعة فيه منذ يوم النشأة.",
      },
    },
  ],
}
