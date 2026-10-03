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
        en: "IFRS 9 replaced IAS 39's classification maze with a logically ordered machine: (1) CLASSIFICATION & measurement driven by the business model + the cash-flow character; (2) IMPAIRMENT built on expected credit losses rather than incurred losses; (3) HEDGE accounting aligned closer to risk management. Financial assets enter at fair value; the question is only which of three buckets they land in — and what happens afterwards. Everything the standard does — the SPPI test, the staging, the recycling rules — exists so that the accounting follows how the entity actually manages the instrument.",
        ar: "أبدل IFRS 9 متاهة تصنيف IAS 39 بآلة مرتبة منطقيًا: (١) التصنيف والقياس بقيادة نموذج الأعمال وطبعة التدفقات؛ (٢) انخفاض القيمة على الخسائر الائتمانية المتوقعة لا الواقعة؛ (٣) محاسبة تغطية أقرب إلى إدارة المخاطر. تدخل الأصول بالقيمة العادلة؛ والسؤال في أي من الحاويات الثلاث تسقط — وماذا يجري بعدها. وكل ما يفعله المعيار — اختبار SPPI والمراحل وقواعد التدوير — قائم كي تتبع المحاسبة الكيفية التي تدير بها المنشأة الأداة فعلًا.",
      },
    },
    { kind: "h", text: { en: "Scope & exclusions", ar: "النطاق والاستثناءات" } },
    {
      kind: "p",
      text: {
        en: "IFRS 9 applies to every entity and every type of financial instrument — assets, liabilities, derivatives, hybrids — unless another standard claims the item first. The exclusions are the map of the rest of the instruments world: interests in subsidiaries, associates and joint ventures (IFRS 10 / IAS 28), leases (IFRS 16), employee benefits (IAS 19), insurance contracts (IFRS 17) and share-based payments (IFRS 2). Watch the boundary lines: derivatives ON those excluded interests ARE in scope, a financial guarantee contract you ISSUE may sit under IFRS 9 or IAS 37/IFRS 17, and loan commitments follow the standard with their own designation rules.",
        ar: "يطبق IFRS 9 على كل منشأة وكل نوع من الأدوات المالية — أصولًا والتزامات ومشتقات وهجينة — إلا إذا سبقها معيار آخر إلى البند. والاستثناءات هي خريطة بقية عالم الأدوات: حصص المجموعة والحليفين والمنشآت المشتركة (IFRS 10 / IAS 28)، والإيجارات (IFRS 16)، ومزايا العاملين (IAS 19)، وعقود التأمين (IFRS 17)، والمدفوعات المقومة بالأسهم (IFRS 2). وانتبه لخطوط الحدود: المشتقات على تلك الحصص المستثناة داخلة النطاق، وعقد الضمان الائتماني الذي تصدره قد يخضع لـIFRS 9 أو IAS 37/IFRS 17، والتزامات الإقراض لها قواعد تسمية خاصة.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "OUT: subsidiaries / associates / JVs interests (equity-method) — but derivatives on them are IN", ar: "خارج النطاق: حصص المجموعة والحليفين والمشتركة (بالمعيار المعدل) — لكن المشتقات عليها داخلة" },
        { en: "OUT: rights & obligations under leases (IFRS 16) — the lease liability has its own regime", ar: "خارج النطاق: حقوق والتزامات الإيجار (IFRS 16) — لالتزام الإيجار نظامه الخاص" },
        { en: "OUT: employers' rights under IAS 19 plans; insurance contracts under IFRS 17; IFRS 2 share-based payments", ar: "خارج النطاق: حقوق أصحاب العمل بموجب IAS 19، وعقود التأمين وفق IFRS 17، والمدفوعات المقومة بالأسهم وفق IFRS 2" },
        { en: "OUT: IFRS 3 contingent consideration (its own fair-value machinery); IAS 32 own-equity instruments", ar: "خارج النطاق: المقابل المشروط في الاندماجات (IFRS 3 بآلة عادلة خاصة)، وأدوات حقوق الملكية الذاتية (IAS 32)" },
        { en: "IN: loan commitments, financial guarantee contracts issued, derivatives on non-financial items that can be net-settled, loan servicing rights bought/sold", ar: "داخل النطاق: التزامات الإقراض، وعقود الضمان الائتماني الصادرة، والمشتقات على بنود غير مالية قابلة للتسوية الصافية، وحقوق خدمة القروض المشتراة والمبيعة" },
      ],
    },
    { kind: "h", text: { en: "Key definitions", ar: "التعريفات المفتاحية" } },
    {
      kind: "list",
      items: [
        { en: "BUSINESS MODEL — how the entity manages the portfolio to generate cash flows: hold to collect, hold to collect AND sell, or other (trading)", ar: "نموذج الأعمال — كيف تدير المنشأة المحفظة لتوليد التدفقات: احتفاظ للتحصيل، أو احتفاظ للتحصيل والبيع معًا، أو غير ذلك (متاجرة)" },
        { en: "SPPI — contractual cash flows that are Solely Payments of Principal & Interest on the principal amount outstanding (interest = compensation for time value + credit risk)", ar: "SPPI — تدفقات تعاقدية هي مدفوعات أصل وفوائد فقط على الأصل القائم (الفائدة = عوض القيمة الزمنية + مخاطر الائتمان)" },
        { en: "AMORTISED COST — the amount at which the asset/liability was measured at initial recognition, minus repayments, plus EIR accretion, minus write-offs", ar: "التكلفة المطفأة — المبلغ المثبت عند الاعتراف الأولي مخصومًا منه السداد زائد تضخم الفائدة الفعلية مخصومًا منه الشطب" },
        { en: "EIR — the rate that exactly discounts the contractual cash flows to the initial carrying amount (net of transaction costs, including integral fees)", ar: "الفائدة الفعلية — المعدل الذي يخصم التدفقات التعاقدية بدقة إلى القيمة الأولية (صافي تكاليف المعاملة والرسوم الجوهرية)" },
        { en: "FVTPL / FVOCI — fair value through profit or loss / through other comprehensive income: WHERE the fair-value movements land", ar: "FVTPL / FVOCI — القيمة العادلة عبر الأرباح أو الخسائر / عبر الدخل الشامل الآخر: أين تسقط فروق القيمة" },
        { en: "SICR — Significant Increase in Credit Risk since initial recognition: the gateway between stage 1 and stage 2", ar: "SICR — زيادة جوهرية في مخاطر الائتمان منذ الاعتراف الأولي: البوابة بين المرحلتين ١ و٢" },
        { en: "12-MONTH vs LIFETIME ECL — losses expected if a default occurs within 12 months of the reporting date vs over the whole remaining life", ar: "خسائر ١٢ شهرًا مقابل خسائر العمر — الخسائر المتوقعة إن وقع تعثر خلال ١٢ شهرًا من تاريخ التقرير مقابل العمر المتبقي كله" },
        { en: "CREDIT-IMPAIRED — default, 90 days past due, or unlikely-to-pay evidence; POCI — Purchased or Originated Credit-Impaired at day one", ar: "معسر ائتمانيًا — تعثر أو تأخر ٩٠ يومًا أو أدلة عدم سداد؛ وPOCI — مقتنى أو منشأ معسرًا ائتمانيًا منذ اليوم الأول" },
        { en: "CREDIT-ADJUSTED EIR — the POCI discount rate: market rate LESS the initial expected credit losses (already priced in)", ar: "الفائدة الفعلية المعدلة ائتمانيًا — معدل خصم POCI: معدل السوق مخصومًا منه الخسائر الائتمانية المتوقعة يوم الأول (المدمجة في الثمن أصلًا)" },
      ],
    },
    { kind: "h", text: { en: "Chapter 1 — Classification: the two tests", ar: "الفصل ١ — التصنيف: الاختباران" } },
    {
      kind: "tree",
      root: { en: "A debt instrument at initial recognition", ar: "أداة دين عند الاعتراف الأولي" },
      branches: [
        {
          when: { en: "SPPI test passes — Solely Payments of Principal & Interest on the principal outstanding (interest = money-for-time + credit risk)", ar: "اجتياز اختبار SPPI — مدفوعات من أصل وفوائد فقط على الأصل القائم (الفائدة = عوض الوقت + مخاطر الائتمان)" },
          then: { en: "Check the BUSINESS MODEL", ar: "اختبر نموذج الأعمال" },
          children: [
            {
              when: { en: "HOLD TO COLLECT (collect contractual cash flows to maturity)", ar: "الاحتفاظ للتحصيل (تحصيل التدفقات التعاقدية حتى الاستحقاق)" },
              then: { en: "AMORTISED COST — the AC bucket", ar: "التكلفة المطفأة — حاوية AC", red: true },
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
          when: { en: "SPPI FAILS (debt with non-SPPI features: leveraged inflation link, profit-share coupons, contingent repayment)", ar: "فشل SPPI (ديون بسمات خارج الاختبار: ربط تضخمي مرتفع، كوبونات مشاركة، سداد مشروط)" },
          then: { en: "FVTPL mandatorily", ar: "FVTPL إلزامًا", red: true },
        },
        {
          when: { en: "An EQUITY instrument (shares) — SPPI never applies", ar: "أداة ملكية (أسهم) — لا ينطبق SPPI أصلًا" },
          then: { en: "FVTPL — or the IRREVOCABLE FVOCI election at initial recognition: dividends in P&L, FV movements in OCI and NEVER recycled to P&L (only to equity within OCI)", ar: "FVTPL — أو انتخاب FVOCI غير القابل للنقض عند النشأة: التوزيعات بالأرباح وفروق القيمة في الدخل الشامل دون تدوير للأرباح أبدًا", red: true },
        },
        {
          when: { en: "Financial LIABILITIES: default amortised cost with one ELECTED exception — designating a liability at FVTPL to eliminate an accounting mismatch; the OWN-CREDIT portion of its FV change → OCI", ar: "الالتزامات المالية: التكلفة المطفأة افتراضيًا مع انتخاب واحد — تسمية الالتزام بـFVTPL لإزالة عدم تماثل محاسبي؛ وحصة مخاطر الائتمان الذاتي من فرق القيمة ← الدخل الشامل" },
          then: { en: "The rest of the FV change → P&L; own credit never leaves OCI while the liability stands", ar: "وبقية فرق القيمة ← الأرباح؛ والائتمان الذاتي لا يفارق الدخل الشامل ما دام الالتزام قائمًا", red: true },
        },
      ],
    },
    {
      kind: "steps",
      items: [
        { en: "1. Is it an EQUITY instrument? Yes → FVTPL, unless the irrevocable FVOCI election is made at initial recognition", ar: "١. هل هي أداة ملكية؟ نعم ← FVTPL، إلا إذا انتُخب FVOCI بلا رجعة عند الاعتراف الأولي" },
        { en: "2. Is it a DERIVATIVE? Yes → FVTPL, always", ar: "٢. هل هي مشتق؟ نعم ← FVTPL دائمًا" },
        { en: "3. Debt → run the SPPI test on the CONTRACTUAL cash flows", ar: "٣. الدين ← طبّق اختبار SPPI على التدفقات التعاقدية" },
        { en: "4. SPPI fails → FVTPL mandatorily (no election possible)", ar: "٤. فشل SPPI ← FVTPL إلزامًا (لا انتقاء ممكنًا)" },
        { en: "5. SPPI passes → classify by the BUSINESS MODEL at the PORTFOLIO level: AC / FVOCI-debt / FVTPL", ar: "٥. نجاح SPPI ← صنّف وفق نموذج الأعمال على مستوى المحفظة: تكلفة مطفاة / ديون FVOCI / FVTPL" },
        { en: "6. Liabilities → amortised cost (FVTPL only by designation or trading)", ar: "٦. الالتزامات ← تكلفة مطفاة (وFVTPL بالتسمية أو للمتاجرة فقط)" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The BUSINESS MODEL is assessed at the PORTFOLIO level, not instrument by instrument — an entity does not 'elect' it; it describes what it actually does. Evidence: how performance is reported internally to key management, how managers are compensated, and the frequency/volume/reason of past sales. HOLD TO COLLECT tolerates occasional sales — sales that are more than infrequent and insignificant (or made close to maturity) break the model and push the portfolio to hold-to-collect-and-sell or beyond. The model is judged when the instrument first enters, and only a genuine change of the model (rare, externally driven) permits reclassification — never convenience.",
        ar: "يقيَّم نموذج الأعمال على مستوى المحفظة لا أداةً أداة — فالمنشأة لا «تنتقيه» بل تصف ما تفعله فعلًا. والأدلة: كيف يُعرض الأداء داخليًا على الإدارة العليا، وكيف تُكافأ الإدارة، ومدى تكرار البيع وحجمه وسببه. ويحتمل «الاحتفاظ للتحصيل» مبيعات عرضية — أما المبيعات الأكثر من نادرة غير جوهرية (أو القريبة من الاستحقاق) فتكسر النموذج وتدفع المحفظة نحو الاحتفاظ للتحصيل والبيع أو أبعد. ويُحكم على النموذج عند دخول الأداة أول مرة، ولا يسمح بإعادة التبويب إلا تغير حقيقي للنموذج (نادر ومدفوع خارجيًا) — لا مجرد تفضيل.",
      },
    },
    {
      kind: "p",
      text: {
        en: "The SPPI test asks whether the contractual cash flows are, in every scenario, nothing but principal + interest on principal outstanding — 'basic lending risks and returns'. Time value of money may be MODIFIED (different compounding frequencies, an annual reset of a monthly-reset benchmark) if the modification is not more than insignificant; genuinely contingent or leveraged features fail. Regulated interest rates (a central-bank-administered cap on a government bond) still pass SPPI: 'interest' is whatever the regulated market calls interest, even though it is not a full market rate. The 2024 amendments confirmed the same logic for ESG-linked and other contingent features: test the instrument as a whole, considering every outcome the feature can produce.",
        ar: "يسأل اختبار SPPI: هل التدفقات التعاقدية، في كل السيناريوهات، ليست إلا أصلًا وفائدة على أصل قائم — أي «مخاطر وعوائد الإقراض الأساسية»؟ ويجوز تعديل القيمة الزمنية للنقد (فروق فترات التركيب، إعادة تسعير سنوية لمؤشر شهري) ما دام التعديل غير جوهري؛ أما السمات المشروطة أو المرتفعة الرافعة فتفشل. والمعدلات المنظمة (سقف يديره البنك المركزي على سند حكومي) تظل مجتازة للاختبار: «الفائدة» هي ما يسميه السوق المنظم فائدة ولو لم تكن معدل سوق كاملًا. وأكدت تعديلات ٢٠٢٤ المنطق ذاته لسمات ESG والسمات المشروطة: اختبر الأداة ككل واعتبارًا لكل نتيجة يمكن أن تنتجها السمة.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "PASS: fixed-rate bond · SOFR + 2% floater (margin = credit risk) · capped/floored floater within market terms · inflation-linked principal paying a market coupon on the indexed amount", ar: "يجتاز: سند بمعدل ثابت · عائم SOFR + ٢٪ (الهامش = عوض مخاطر الائتمان) · عائم بسقف وأرضية ضمن شروط السوق · أصل مرتبط بتضخم يدفع كوبون سوقي على المبلغ المفهرس" },
        { en: "FAIL: coupon tied to the issuer's revenues or a share index · leveraged inflation (principal × 2×CPI) · reverse floater (8% − SOFR) beyond market leverage · conversion option (a share is not principal + interest)", ar: "يفشل: كوبون مربوط بإيرادات المصدر أو بمؤشر أسهم · تضخم برافعة (الأصل × ٢×CPI) · عائم معكوس (٨٪ − SOFR) خارج رافعة السوق · خيار تحويل (فالسهم ليس أصلًا وفائدة)" },
        { en: "The whole instrument is classified — no cherry-picking of features; a failing feature drags the ENTIRE hybrid to FVTPL", ar: "تصنف الأداة كلها — لا انتقاء للسمات؛ فالسمة الفاشلة تجر الهجين كله إلى FVTPL" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The two-test sentence wins classification marks: 'the business model is hold-to-collect AND the SPPI test passes, therefore amortised cost.' Say BOTH halves — one without the other is a failed answer.",
        ar: "جملة الاختبارين تحسم درجات التصنيف: «نموذج الأعمال احتفاظ للتحصيل واجتياز SPPI إذن التكلفة المطفأة». قل النصفين معًا — فأحدهما دون الآخر إجابة فاشلة.",
      },
    },
    { kind: "h", text: { en: "Equity instruments — the irrevocable FVOCI election", ar: "أدوات الملكية — انتخاب FVOCI غير القابل للنقض" } },
    {
      kind: "p",
      text: {
        en: "Equities are always FVTPL unless, at initial recognition, the entity makes the irrevocable FVOCI election — instrument by instrument, not portfolio-wide. The elected instrument then behaves like a different species: fair-value movements go to OCI and NEVER recycle to profit or loss, dividends are recognised in P&L (when the right to payment is established), transaction costs are INCLUDED in the initial carrying amount, and the impairment model does not apply. On disposal the cumulative OCI transfers to another equity component (usually retained earnings) — sale gain never touches P&L. Only dividends ever earn P&L credit, and a dividend received that represents recovery of the investment is a recovery against cost, not income.",
        ar: "تُقاس أسهم الملكية دائمًا بـFVTPL إلا إذا مارست المنشأة عند الاعتراف الأولي انتخاب FVOCI غير القابل للنقض — أداةً أداة لا على مستوى المحفظة. وتتصرف الأداة المنتقاة عندها كنوع آخر: فروق القيمة تذهب إلى الدخل الشامل ولا تعاد إلى الأرباح أو الخسائر أبدًا، والتوزيعات تثبت بالأرباح (عندما يثبت الحق في القبض)، وتكاليف المعاملة تُدرج في القيمة الأولية، ولا ينطبق نموذج انخفاض القيمة. وعند التصرف ينتقل الدخل الشامل التراكمي إلى بند آخر داخل حقوق الملكية (عادة الأرباح المحتجزة) — فمكسب البيع لا يمس الأرباح أبدًا. والتوزيعات وحدها تكسب قائمة الأرباح، وما كان منها استردادًا لجزء من الاستثمار يعامل استردادًا للتكلفة لا دخلًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The equity FVOCI election: ONLY dividends ever touch P&L; the fair-value delta lives in OCI forever — an irrevocable, at-inception choice.",
        ar: "الاستثمار في الملكية بـFVOCI: التوزيعات وحدها تلمس الأرباح؛ أما فرق القيمة فيسكن الدخل الشامل إلى الأبد — خيار لا رجعة فيه منذ يوم النشأة.",
      },
    },
    { kind: "h", text: { en: "Financial liabilities — classification & own credit", ar: "الالتزامات المالية — التصنيف والائتمان الذاتي" } },
    {
      kind: "p",
      text: {
        en: "All financial liabilities sit at amortised cost EXCEPT: held-for-trading liabilities and derivatives (FVTPL), and liabilities the entity ELECTS to designate at FVTPL — only to eliminate an accounting mismatch, irrevocably, with full disclosure. For a designated FVTPL liability, the fair-value change caused by the entity's OWN CREDIT RISK goes to OCI; the rest goes to P&L. The idea: a bank whose debt gets cheaper as its credit deteriorates should not book a 'profit' for becoming riskier. The OCI pot is never recycled to P&L, but it may be transferred to equity on derecognition of the liability.",
        ar: "تجلس جميع الالتزامات المالية عند التكلفة المطفأة ما عدا: التزامات المتاجرة والمشتقات (FVTPL)، والتزامات تنتقيها المنشأة بـFVTPL — لإزالة عدم تماثل محاسبي فقط، وبلا رجعة، مع إفصاح كامل. وفي الالتزام المنتقى، يذهب فرق القيمة الناشئ عن مخاطر الائتمان الذاتي للمنشأة إلى الدخل الشامل؛ والباقي إلى الأرباح. والفكرة: بنك يرخص دينه بسوء ائتمانه لا ينبغي أن يحجز «ربحًا» لأنه صار أخطر. ولا يعاد تدوير هذا الدخل الشامل إلى الأرباح أبدًا، لكن يجوز تحويله إلى حقوق الملكية عند استبعاد الالتزام.",
      },
    },
    { kind: "h", text: { en: "Initial & subsequent measurement", ar: "القياس الأولي واللاحق" } },
    {
      kind: "p",
      text: {
        en: "At initial recognition every financial asset enters at FAIR VALUE (IFRS 13) — plus transaction costs for AC and FVOCI-debt instruments, but EXCLUDING them for FVTPL (they are expensed; for equity-FVOCI they are included in the carrying amount). IFRS 13 presumes the transaction price IS day-one fair value, so any day-one gain/loss needs a different-technique witness. Subsequently: amortised cost (AC), fair value with movements in OCI (FVOCI debt — recycled at exit; FVOCI equity — never), or fair value with movements in P&L (FVTPL). Financial liabilities follow amortised cost or FVTPL; the redeemable mark-to-market world is the exception, not the rule.",
        ar: "عند الاعتراف الأولي يدخل كل أصل مالي بالقيمة العادلة (IFRS 13) — مضافًا إليه تكاليف المعاملة لأدوات التكلفة المطفأة وديون FVOCI، ومستبعدًا إياها في FVTPL (تصرف فورًا؛ وفي ملكية FVOCI تُدرج في القيمة الدفترية)، ويفترض IFRS 13 أن سعر المعاملة هو عادلة اليوم الأول، فأي ربح يوم أول يحتاج شاهد تقنية أخرى. ولاحقًا: تكلفة مطفاة (AC)، أو قيمة عادلة بحركات في الدخل الشامل (ديون FVOCI تعاد عند الخروج؛ وملكية FVOCI لا تعاد أبدًا)، أو قيمة عادلة بحركات بالأرباح (FVTPL). وتتبع الالتزامات المالية التكلفة المطفأة أو FVTPL؛ وعالم القياس الجاري ربحًا وخسارة هو الاستثناء لا القاعدة.",
      },
    },
    { kind: "h", text: { en: "Amortised cost — the EIR engine", ar: "التكلفة المطفأة — محرك الفائدة الفعلية" } },
    {
      kind: "formula",
      title: { en: "Effective interest method", ar: "طريقة الفائدة الفعلية" },
      lines: [
        { en: "Amortised cost = future cash flows discounted at the EIR, accumulated over time: carrying + EIR interest − cash received − write-offs", ar: "التكلفة المطفأة = تدفقات مستقبلية مخصومة بالفائدة الفعلية تتراكم زمنيًا: الدفترية + فائدة فعلية − نقد مقبوض − شطب" },
        { en: "EIR = the rate that exactly discounts the contractual cash flows to the initial carrying amount (net of transaction costs, incl. fees paid/received integral to the instrument)", ar: "الفائدة الفعلية = المعدل الذي يخصم التدفقات التعاقدية إلى القيمة الأولية (صافي تكاليف المعاملة والرسوم الجوهرية)" },
        { en: "Interest income (AC & FVOCI-debt) = gross carrying amount × EIR (credit-impaired: on the AMORTISED COST basis, i.e. net of loss allowance)", ar: "إيراد الفائدة (للتكلفة المطفأة وديون FVOCI) = القيمة الإجمالية × الفائدة الفعلية (والمعسر ائتمانيًا: على أساس المطفأة الصافية)" },
        { en: "Floating-rate instruments: update the discount curve as rates reset (the EIR floats with the benchmark)", ar: "الأدوات العائمة: يتحدث منحنى الخصم مع كل إعادة تسعير" },
      ],
    },
    {
      kind: "example",
      title: { en: "A bond bought at a discount", ar: "سند مشترى بخصم" },
      lines: [
        { en: "5-year bond, face 1,000, coupon 5% annual, bought at 957 + transaction costs 10 → initial carrying 967; redemption at par", ar: "سند ٥ سنوات، اسمي ١٬٠٠٠، كوبون ٥٪ سنوي، شُرِي عند ٩٥٧ + تكاليف معاملة ١٠ ← القيمة الأولية ٩٦٧" },
        { en: "EIR ≈ 5.77% — the rate that discounts [50 × 5 yrs + 1,000] to exactly 967", ar: "الفائدة الفعلية ≈ ٥٫٧٧٪ — المعدل الذي يخصم ٥٠ لخمس سنوات و١٬٠٠٠ إلى ٩٦٧ بالضبط" },
        { en: "Year 1: interest income 967 × 5.77% = 55.8 (coupon cash 50 → carrying +5.8 to 972.8)", ar: "السنة الأولى: إيراد الفائدة ٩٦٧ × ٥٫٧٧٪ = ٥٥٫٨ (نقد الكوبون ٥٠ ← الدفترية ترتفع ٥٫٨ إلى ٩٧٢٫٨)" },
        { en: "By maturity the carrying reaches exactly 1,000 — the discount + costs accrete through P&L as extra interest", ar: "عند الاستحقاق تبلغ الدفترية ١٬٠٠٠ بالضبط — فالخصم والتكاليف يتضخمان عبر الأرباح فائدة إضافية" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Debt at amortised cost — the lifecycle", ar: "دين بالتكلفة المطفأة — دورة الحياة" },
      rows: [
        { dr: { en: "Debt investment (AC) 967", ar: "استثمار دين (مطفأة) ٩٦٧" }, cr: { en: "Cash 967", ar: "نقد ٩٦٧" }, red: true },
        { dr: { en: "Cash 50", ar: "نقد ٥٠" }, cr: { en: "Interest income (EIR) 55.8", ar: "إيراد فائدة (فعلي) ٥٥٫٨" }, red: true },
        { dr: { en: "Debt investment (accretion) 5.8", ar: "استثمار دين (تضخم) ٥٫٨" }, cr: { en: "— — carried to 972.8", ar: "— — إلى ٩٧٢٫٨" } },
      ],
    },
    { kind: "h", text: { en: "FVOCI debt — the recycling bucket", ar: "ديون FVOCI — حاوية التدوير" } },
    {
      kind: "p",
      text: {
        en: "FVOCI debt is a hybrid machine: the EIR engine runs in P&L exactly as at amortised cost, while the fair-value delta lives in OCI — and RECYCLES to P&L when the instrument is derecognised. The ECL allowance goes through P&L (not OCI), presented as a deduction within the net FV gain/loss line. The result is that interest, impairment and the disposal result all end up in profit or loss eventually; only the interim mark-to-market is parked in OCI. This is the category hold-to-collect-and-sell portfolios were built for.",
        ar: "دين FVOCI آلة هجينة: يعمل محرك الفائدة الفعلية في الأرباح كما في التكلفة المطفأة تمامًا، بينما يسكن فرق القيمة في الدخل الشامل — ويعاد تدويره إلى الأرباح عند استبعاد الأداة. ومخصص الخسائر الائتمانية المتوقعة يمر بالأرباح (لا بالدخل الشامل)، ويعرض مخصومًا داخل بند صافي فروق القيمة. والنتيجة: الفائدة والانخفاض ونتيجة التصرف تنتهي كلها في الأرباح أو الخسائر عاجلًا أم آجلًا؛ ولا يُركن في الدخل الشامل إلا القياس المؤقت. وهذه هي الفئة التي بُنيت لها محافظ الاحتفاظ للتحصيل والبيع.",
      },
    },
    {
      kind: "journal",
      title: { en: "FVOCI debt — buy at 1,000 (incl. costs), FV rises to 1,020, sell at 1,030", ar: "ديون FVOCI — شراء عند ١٬٠٠٠ (شاملًا التكاليف)، ترتفع العادلة إلى ١٬٠٢٠، بيع عند ١٬٠٣٠" },
      rows: [
        { dr: { en: "Debt investment (FVOCI) 1,000", ar: "استثمار دين (FVOCI) ١٬٠٠٠" }, cr: { en: "Cash 1,000", ar: "نقد ١٬٠٠٠" } },
        { dr: { en: "Debt investment (FVOCI) 20", ar: "استثمار دين (FVOCI) ٢٠" }, cr: { en: "OCI — fair-value reserve 20", ar: "الدخل الشامل — احتياطي القيمة ٢٠" }, red: true },
        { dr: { en: "Cash 1,030", ar: "نقد ١٬٠٣٠" }, cr: { en: "Debt investment (FVOCI) 1,020", ar: "استثمار دين (FVOCI) ١٬٠٢٠" } },
        { cr: { en: "Gain on derecognition (P&L) 10", ar: "ربح الاستبعاد (بالأرباح) ١٠" }, red: true },
        { dr: { en: "OCI — recycled to P&L 20", ar: "الدخل الشامل — يعاد للأرباح ٢٠" }, cr: { en: "Gain on derecognition (P&L) 20", ar: "ربح الاستبعاد (بالأرباح) ٢٠" }, red: true },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The examiner's favourite trap: FVOCI DEBT gains recycle to P&L at derecognition; FVOCI EQUITY gains NEVER recycle — they move within equity. Same label, opposite recycling — one mark question, whole-answer difference.",
        ar: "فخ الممتحن المفضل: مكاسب ديون FVOCI تعاد للأرباح عند الاستبعاد؛ ومكاسب ملكية FVOCI لا تعاد أبدًا — بل تتحرك داخل حقوق الملكية. المسمى واحد والتدوير مضاد — سؤال بدرجة واحدة وفارق إجابة كاملة.",
      },
    },
    { kind: "h", text: { en: "FVTPL — the default bucket", ar: "FVTPL — الحاوية الافتراضية" } },
    {
      kind: "p",
      text: {
        en: "Trading portfolios, derivatives, SPPI failures and the leftovers of other business models all land at FVTPL: fair value every reporting date, delta to P&L, transaction costs expensed at day one. No impairment machinery here — the expected losses are already inside the fair value, so the ECL model does not apply. The category carries the whole of the bank's mark-to-market earnings volatility, which is exactly why the election-free default matters: entities cannot pick FVTPL for winners and AC for losers.",
        ar: "محافظ المتاجرة والمشتقات وفاشلو SPPI وبقايا النماذج الأخرى كلها تسقط في FVTPL: قيمة عادلة كل تقرير، والفرق للأرباح، وتكاليف المعاملة مصروف يوم الأول. ولا آلة انخفاض هنا — فالخسائر المتوقعة مدمجة داخل القيمة العادلة أصلًا، لذا لا ينطبق نموذج الخسائر الائتمانية المتوقعة. وتحمل هذه الفئة تقلبات أرباح القياس الجاري للبنك كلها، ولهذا بالضبط يهم كونها افتراضيًا بلا انتقاء: فلا يجوز وضع الرابحين في FVTPL والخاسرين في التكلفة المطفأة.",
      },
    },
    {
      kind: "journal",
      title: { en: "FVTPL debt — buy at 995 (costs 5 expensed), FV 1,010 at year-end, sell at 1,012", ar: "دين FVTPL — شراء عند ٩٩٥ (تكاليف ٥ مصروفة)، العادلة ١٬٠١٠ آخر السنة، بيع عند ١٬٠١٢" },
      rows: [
        { dr: { en: "Debt investment (FVTPL) 995", ar: "استثمار دين (FVTPL) ٩٩٥" }, cr: { en: "Cash 995", ar: "نقد ٩٩٥" } },
        { dr: { en: "Transaction costs expense (P&L) 5", ar: "مصروف تكاليف المعاملة (بالأرباح) ٥" }, cr: { en: "Cash 5", ar: "نقد ٥" }, red: true },
        { dr: { en: "Debt investment (FVTPL) 15", ar: "استثمار دين (FVTPL) ١٥" }, cr: { en: "FV gain (P&L) 15", ar: "مكسب قيمة عادلة (بالأرباح) ١٥" }, red: true },
        { dr: { en: "Cash 1,012", ar: "نقد ١٬٠١٢" }, cr: { en: "Debt investment (FVTPL) 1,010", ar: "استثمار دين (FVTPL) ١٬٠١٠" } },
        { cr: { en: "FV gain (P&L) 2", ar: "مكسب قيمة عادلة (بالأرباح) ٢" } },
      ],
    },
    { kind: "h", text: { en: "Equity at FVOCI — the lifecycle entries", ar: "ملكية FVOCI — قيود دورة الحياة" } },
    {
      kind: "journal",
      title: { en: "Shares bought 500 (costs included), FV 540, dividend 12, sold 560", ar: "أسهم اشتريت بـ٥٠٠ (شاملة التكاليف)، العادلة ٥٤٠، توزيع ١٢، بيعت بـ٥٦٠" },
      rows: [
        { dr: { en: "Equity investment (FVOCI) 500", ar: "استثمار ملكية (FVOCI) ٥٠٠" }, cr: { en: "Cash 500", ar: "نقد ٥٠٠" } },
        { dr: { en: "Equity investment (FVOCI) 40", ar: "استثمار ملكية (FVOCI) ٤٠" }, cr: { en: "OCI — fair-value reserve 40", ar: "الدخل الشامل — احتياطي القيمة ٤٠" }, red: true },
        { dr: { en: "Cash 12", ar: "نقد ١٢" }, cr: { en: "Dividend income (P&L) 12", ar: "إيراد توزيعات (بالأرباح) ١٢" }, red: true },
        { dr: { en: "Cash 560", ar: "نقد ٥٦٠" }, cr: { en: "Equity investment (FVOCI) 560", ar: "استثمار ملكية (FVOCI) ٥٦٠" } },
        { dr: { en: "OCI — reserve 60 → transferred WITHIN equity", ar: "الدخل الشامل — الاحتياطي ٦٠ ← محوَّل داخل حقوق الملكية" }, cr: { en: "Retained earnings 60 — never P&L", ar: "الأرباح المحتجزة ٦٠ — لا الأرباح أبدًا" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Embedded derivatives & hybrid contracts", ar: "المشتقات المضمنة والعقود الهجينة" } },
    {
      kind: "p",
      text: {
        en: "Embedded derivatives: under IFRS 9 a host + embedded derivative is tested as ONE HYBRID contract for financial ASSETS — no bifurcation option anymore. If the contractual cash flows fail SPPI, the WHOLE instrument goes to FVTPL. For financial LIABILITIES and non-financial hosts bifurcation still exists: separate an embedded derivative that is not closely related to the host (and whose principal is not at AC) and measure it at FVTPL; the economic-relationship tests ('closely related') decide. Reclassification of debt is banned except when the business model changes (rare, not driven by convenience), and is never allowed for equities or derivatives.",
        ar: "المشتقات المضمنة: يختبر IFRS 9 العقد المضيف والمشتق المضمّن عقدًا هجينًا واحدًا في الأصول المالية — فلا خيار فصل بعد الآن. فإذا فشلت التدفقات التعاقدية في SPPI ذهبت الأداة كلها إلى FVTPL. أما في الالتزامات المالية والمضيفات غير المالية فيبقى الفصل: يفصل المشتق غير وثيق الصلة بالمضيف (الذي لا يقاس أصله بالتكلفة المطفأة) ويقاس بـFVTPL؛ وتحسم اختبارات «العلاقة الاقتصادية الوثيقة». وإعادة تبويب الدين محظورة إلا عند تغير نموذج الأعمال (نادرًا)، ولا تجوز أبدًا للملكية والمشتقات.",
      },
    },
    {
      kind: "tree",
      root: { en: "A hybrid contract (host + embedded feature)", ar: "عقد هجين (مضيف + سمة مضمّنة)" },
      branches: [
        {
          when: { en: "FINANCIAL ASSET host — SPPI passes on the whole", ar: "أصل مالي مضيف — SPPI يجتاز للكل" },
          then: { en: "Classify the whole by business model (AC / FVOCI / FVTPL)", ar: "صنّف الكل وفق نموذج الأعمال (مطفأة / FVOCI / FVTPL)", red: true },
        },
        {
          when: { en: "FINANCIAL ASSET host — SPPI fails (e.g. a conversion option)", ar: "أصل مالي مضيف — SPPI يفشل (كخيار تحويل)" },
          then: { en: "WHOLE instrument → FVTPL mandatorily — no bifurcation available", ar: "الأداة كلها ← FVTPL إلزامًا — لا فصل متاح", red: true },
        },
        {
          when: { en: "LIABILITY / non-financial host — feature NOT closely related + host not at AC", ar: "التزام أو مضيف غير مالي — السمة غير وثيقة الصلة والمضيف ليس بالتكلفة المطفأة" },
          then: { en: "BIFURCATE: split the derivative out at FVTPL, host on its own standard", ar: "فصل: اقتطع المشتق بـFVTPL وليبق المضيف على معياره", red: true },
        },
        {
          when: { en: "Feature closely related (inflation link in a lease host, revenue share that is the entity's own revenue...)", ar: "سمة وثيقة الصلة (ربط تضخمي في مضيف إيجار، مشاركة إيراد هي إيراد المنشأة ذاتها…)" },
          then: { en: "No separation — account for the whole under the host's standard", ar: "لا فصل — عامِل الكل وفق معيار المضيف", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Reclassification & modifications", ar: "إعادة التبويب والتعديلات" } },
    {
      kind: "p",
      text: {
        en: "Reclassification happens ONLY when the business model changes — a change the entity achieves, is externally driven, and is significant to its operations; it is never triggered by wanting a different measurement. When a modification renegotiates cash flows or terms: discount the revised cash flows at the ORIGINAL EIR and compare with the old carrying amount — a difference beyond 10% means a SUBSTANTIAL modification → derecognise the old instrument and recognise the new one at fair value (gain/loss to P&L); within 10%, adjust the carrying amount and run the difference through future EIR. Issuing equity to extinguish a liability ('debt-for-equity swap') is a derecognition event: the liability leaves at carrying amount against the fair value of shares issued, difference to P&L.",
        ar: "لا تقع إعادة التبويب إلا عند تغير نموذج الأعمال — تغير تحققه المنشأة ويكون مدفوعًا خارجيًا وجوهريًا لعملياتها؛ ولا يثيره أبدًا الرغبة في قياس مختلف. وعندما يعيد التفاوض تعديلًا التدفقات أو الشروط: خصم التدفقات المنقحة بالفائدة الفعلية الأصلية وقارنها بالدفترية القديمة — فرق يتجاوز ١٠٪ يعني تعديلًا جوهريًا ← استبعد الأداة القديمة واعترف بجديدة بالقيمة العادلة (والفرق للأرباح)؛ وداخل ١٠٪ عدّل الدفترية ومرر الفرق عبر الفائدة الفعلية المقبلة. وإصدار ملكية لإطفاء التزام (مبادلة الدين بأسهم) حدث استبعاد: يخرج الالتزام بدفتريته مقابل عادلة الأسهم الصادرة والفرق للأرباح.",
      },
    },
    { kind: "h", text: { en: "Chapter 2 — Impairment: the ECL revolution", ar: "الفصل ٢ — الانخفاض: ثورة الخسائر المتوقعة" } },
    {
      kind: "p",
      text: {
        en: "The incurred-loss world waited for a default to happen. IFRS 9 books EXPECTED credit losses from day one — a probability-weighted, discounted estimate of the shortfall (PD × LGD × EAD thinking). The general model runs in three stages depending on how far credit has deteriorated since initial recognition: stage 1 books 12-month ECL on everything, stage 2 books lifetime ECL once credit risk has significantly increased, stage 3 adds net-basis interest once the asset is credit-impaired. Forward-looking macroeconomic information (unemployment, oil prices, GDP) must inform the estimate — that was the regulatory lesson of 2008.",
        ar: "عالم الخسائر الواقعة كان ينتظر التعثر. أما IFRS 9 فيحجز الخسائر الائتمانية المتوقعة من اليوم الأول — تقديرًا مرجحًا بالاحتمالات مخصومًا للعجز (منطق PD × LGD × EAD). ويعمل النموذج العام على ثلاث مراحل تبعًا لدرجة تدهور الائتمان منذ الاعتراف الأولي: المرحلة ١ تحجز خسائر ١٢ شهرًا على كل شيء، والمرحلة ٢ تحجز خسائر العمر كله متى زادت مخاطر الائتمان زيادة جوهرية، والمرحلة ٣ تضيف الفائدة على الأساس الصافي متى صار الأصل معسرًا ائتمانيًا. ويجب أن تُعلم التقديراتِ معلوماتٌ اقتصادية كلية استشرافية (البطالة، أسعار النفط، الناتج) — وذلك درس التنظيم من أزمة ٢٠٠٨.",
      },
    },
    {
      kind: "tree",
      root: { en: "Where does the asset sit in the 3-stage model?", ar: "أين يقع الأصل في النموذج الثلاثي؟" },
      branches: [
        {
          when: { en: "STAGE 1 — performing, no significant increase in credit risk (SICR) since initial recognition", ar: "المرحلة ١ — سليم، لا زيادة جوهرية في مخاطر الائتمان منذ الاعتراف الأولي" },
          then: { en: "12-MONTH ECL (lifetime losses weighted by the probability of default within 12 months) + interest on the GROSS carrying amount", ar: "خسائر ١٢ شهرًا (خسائر العمر مرجحة باحتمال التعثر خلالها) + فائدة على القيمة الإجمالية", red: true },
        },
        {
          when: { en: "STAGE 2 — SICR triggered (30 days past due is a rebuttable presumption): credit worse than at day one but not credit-impaired", ar: "المرحلة ٢ — زيادة جوهرية (تجاوز ٣٠ يومًا افتراضًا قابلا للدحض): الائتمان أسوأ من اليوم الأول دون إعسار فعلي" },
          then: { en: "LIFETIME ECL (all losses over the whole remaining life) + interest still on the GROSS amount", ar: "خسائر العمر الكامل + الفائدة لا تزال على الإجمالية", red: true },
        },
        {
          when: { en: "STAGE 3 — CREDIT-IMPAIRED (default, 90 days past due, unlikeliness-to-pay evidence)", ar: "المرحلة ٣ — معسر ائتمانيًا (تعثر، ٩٠ يومًا، أدلة عدم سداد)" },
          then: { en: "Lifetime ECL + interest on the AMORTISED COST net of the loss allowance", ar: "خسائر العمر + الفائدة على المطفأة الصافية بعد مخصص الخسارة", red: true },
        },
        {
          when: { en: "PURCHASED or ORIGINATED CREDIT-IMPAIRED (POCI) — bad at birth", ar: "مقتنى أو منشأ معسرًا (POCI) — سيئ منذ النشأة" },
          then: { en: "A floating ECL allowance adjusted each period through P&L; interest always on the net (credit-adjusted EIR from day one)", ar: "مخصص عائم يعدل كل فترة بالأرباح؛ والفائدة دائمًا على الصافي (بفائدة فعلية معدلة ائتمانيًا منذ اليوم الأول)", red: true },
        },
      ],
    },
    {
      kind: "formula",
      title: { en: "The ECL engine", ar: "محرك الخسائر المتوقعة" },
      lines: [
        { en: "ECL = PD × LGD × EAD — probability of default × loss given default (1 − recovery) × exposure at default", ar: "الخسائر المتوقعة = PD × LGD × EAD — احتمال التعثر × الخسارة عند التعثر (١ − الاسترداد) × الانكشاف عند التعثر" },
        { en: "12-month ECL = lifetime losses AT DEFAULT weighted by the probability that default occurs within 12 months of the reporting date", ar: "خسائر ١٢ شهرًا = خسائر العمر عند التعثر مرجحة باحتمال وقوع التعثر خلال ١٢ شهرًا من تاريخ التقرير" },
        { en: "ECL = Σ (probability-weighted scenarios) ÷ (1 + ORIGINAL EIR) — forward-looking, unbiased, discounted at the asset's original rate", ar: "الخسائر المتوقعة = مجموع (السيناريوهات مرجحة بالاحتمالات) ÷ (١ + الفائدة الفعلية الأصلية) — استشرافية غير منحازة مخصومة بمعدل الأصل الأصلي" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The 3-stage matrix", ar: "المصفوفة الثلاثية" },
      lines: [
        { en: "Stage 1: 12-month ECL · interest on GROSS carrying · everything starts here at initial recognition", ar: "المرحلة ١: خسائر ١٢ شهرًا · فائدة على الإجمالية · كل شيء يبدأ هنا عند الاعتراف الأولي" },
        { en: "Stage 2: LIFETIME ECL · interest still on GROSS · triggered by SICR", ar: "المرحلة ٢: خسائر العمر · الفائدة على الإجمالية · تتفعل بالزيادة الجوهرية" },
        { en: "Stage 3: lifetime ECL · interest on NET (carrying − allowance) · asset credit-impaired", ar: "المرحلة ٣: خسائر العمر · الفائدة على الصافي (الدفترية − المخصص) · الأصل معسر ائتمانيًا" },
        { en: "Stage migration is one-way in reporting: interest basis changes when the STAGE changes, never retroactively", ar: "هجرة المراحل باتجاه واحد في التقرير: أساس الفائدة يتغير بتغير المرحلة لا بأثر رجعي أبدًا" },
      ],
    },
    {
      kind: "example",
      title: { en: "ECL staging — one loan through all three stages", ar: "تدرّج الخسائر المتوقعة — قرض واحد عبر المراحل الثلاث" },
      lines: [
        { en: "3-year loan of 100,000, coupon 10% paid annually; LGD 60% while performing", ar: "قرض ٣ سنوات بقيمة ١٠٠٬٠٠٠ وكوبون ١٠٪ سنويًا؛ والخسارة عند التعثر ٦٠٪ ما دام سليمًا" },
        { en: "Year 1 (stage 1): PD within 12 months = 1% → 12-month ECL = 1% × 60% × 100,000 = 600; interest income 100,000 × 10% = 10,000 (gross)", ar: "السنة ١ (المرحلة ١): احتمال التعثر خلال ١٢ شهرًا = ١٪ ← خسائر ١٢ شهرًا = ١٪ × ٦٠٪ × ١٠٠٬٠٠٠ = ٦٠٠؛ وإيراد الفائدة على الإجمالي ١٠٬٠٠٠" },
        { en: "Year 2 (SICR → stage 2): PD over remaining life = 8% → lifetime ECL = 8% × 60% × 100,000 = 4,800 → charge the movement 4,800 − 600 = 4,200; interest still 10,000 gross", ar: "السنة ٢ (زيادة جوهرية ← المرحلة ٢): احتمال التعثر على العمر المتبقي = ٨٪ ← خسائر العمر = ٨٪ × ٦٠٪ × ١٠٠٬٠٠٠ = ٤٬٨٠٠ ← حمولة الفرق ٤٬٢٠٠؛ والفائدة ١٠٬٠٠٠ إجمالية" },
        { en: "Year 3 (default → stage 3): collateral worth 25,000 only → ECL = 100,000 − 25,000 = 75,000 → charge 75,000 − 4,800 = 70,200; interest now on the NET 25,000 × 10% = 2,500", ar: "السنة ٣ (تعثر ← المرحلة ٣): ضمان لا يسوى إلا ٢٥٬٠٠٠ ← الخسائر = ١٠٠٬٠٠٠ − ٢٥٬٠٠٠ = ٧٥٬٠٠٠ ← حمولة ٧٠٬٢٠٠؛ والفائدة الآن على الصافي ٢٥٬٠٠٠ × ١٠٪ = ٢٬٥٠٠" },
        { en: "Check: total P&L impairment = 600 + 4,200 + 70,200 = 75,000 — exactly the credit loss that happened", ar: "تحقق: إجمالي حمولة الانخفاض = ٦٠٠ + ٤٬٢٠٠ + ٧٠٬٢٠٠ = ٧٥٬٠٠٠ — عين الخسارة الائتمانية التي وقعت" },
      ],
    },
    {
      kind: "journal",
      title: { en: "ECL provisions, stage migration & write-off (numbers above)", ar: "مخصصات الخسائر المتوقعة وهجرة المراحل والشطب (بالأرقام أعلاه)" },
      rows: [
        { dr: { en: "Impairment loss (P&L) 600", ar: "خسائر انخفاض (بالأرباح) ٦٠٠" }, cr: { en: "Loss allowance 600", ar: "مخصص الخسائر ٦٠٠" }, red: true },
        { dr: { en: "Impairment loss (P&L) 4,200", ar: "خسائر انخفاض (بالأرباح) ٤٬٢٠٠" }, cr: { en: "Loss allowance 4,200", ar: "مخصص الخسائر ٤٬٢٠٠" } },
        { dr: { en: "Impairment loss (P&L) 70,200", ar: "خسائر انخفاض (بالأرباح) ٧٠٬٢٠٠" }, cr: { en: "Loss allowance 70,200", ar: "مخصص الخسائر ٧٠٬٢٠٠" } },
        { dr: { en: "Cash (collateral realised) 25,000", ar: "نقد (تحصيل الضمان) ٢٥٬٠٠٠" }, cr: { en: "Loan 100,000", ar: "القرض ١٠٠٬٠٠٠" } },
        { dr: { en: "Loss allowance 75,000", ar: "مخصص الخسائر ٧٥٬٠٠٠" }, cr: { en: "— — written off against the gross loan", ar: "— — شُطب في مواجهة القرض الإجمالي" }, red: true },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Interest revenue follows the stage: gross carrying × EIR in stages 1 and 2; net carrying (after allowance) × EIR in stage 3 and for POCI. The LOW-CREDIT-RISK expedient is a shortcut, not a rule: for 'investment-grade' exposures the entity MAY assume no SICR at the reporting date (interest still gross) — unless contrary evidence exists. Write-offs happen when there is no reasonable expectation of recovery (bankruptcy, disappearance); recoveries of previously written-off amounts go to P&L as they are received.",
        ar: "يتبع إيراد الفائدة المرحلة: القيمة الإجمالية × الفائدة الفعلية في المرحلتين ١ و٢؛ والصافية (بعد المخصص) في المرحلة ٣ وفي POCI. ومخرج «الخطر الائتماني المنخفض» اختصار لا قاعدة: في الانكشافات بدرجة استثمارية يجوز افتراض انتفاء الزيادة الجوهرية عند تاريخ التقرير (والفائدة إجمالية) — إلا بدليل مضاد. ويقع الشطب عند انتفاء التوقع المعقول للاسترداد (إعسار، اختفاء)؛ وما يُسترد لاحقًا مما شُطب يمر بالأرباح عند قبضه.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "SIMPLIFIED approach — MANDATORY for trade receivables, contract assets and lease receivables (without a significant financing component): always LIFETIME ECL, no staging, no SICR tracking", ar: "الأسلوب المبسط — إلزامي للمدينين التجاريين وأصول العقود ومديني الإيجار (بلا عنصر تمويل جوهري): خسائر العمر دائمًا بلا مراحل ولا تتبع للزيادة الجوهرية" },
        { en: "POLICY CHOICE for trade receivables & contract assets WITH a significant financing component: simplified or general model", ar: "خيار سياسة للمدينين التجاريين وأصول العقود ذات عنصر التمويل الجوهري: الأسلوب المبسط أو النموذج العام" },
        { en: "SICR indicators: actual or expected significant deterioration, significant changes in utilisation/behaviour, backstops like 30 days past due, macro-driven outlook changes", ar: "مؤشرات الزيادة الجوهرية: تدهور فعلي أو متوقع جوهري، تغيرات جوهرية في السلوك والاستخدام، وركائز كتجاوز ٣٠ يومًا، وتغيرات الاقتصاد الكلي" },
        { en: "Collateral & credit enhancements are integrated into the measurement (LGD falls when collateral is solid); non-linear ECL when risk is non-linear", ar: "الضمانات وتحسينات الائتمان تدخل في القياس (تقل الخسارة عند التعثر بصلابة الضمان)؛ وتكون الخسائر غير خطية إذا كان الخطر كذلك" },
        { en: "Write-off when no reasonable expectation of recovery; write-backs and recoveries go through P&L", ar: "الشطب عند انتفاء توقع معقول للاسترداد؛ والاستردادات تمر بالأرباح" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The simplified approach earns its name because the staging machinery disappears: every receivable carries lifetime ECL from day one, usually delivered by a PROVISION MATRIX — ageing buckets (current, 1–30, 31–60, 61–90, 90+ days) × historical loss rates adjusted for forward-looking factors. The matrix is not a new model; it is the ECL formula arranged into a table the credit team can actually maintain. Trade-credit insurance and collection history feed the LGD; the PD comes from the ageing itself.",
        ar: "يستحق الأسلوب المبسط اسمه لأن آلة المراحل تختفي: كل مدين يحمل خسائر عمره من اليوم الأول، عبر «مصفوفة مخصصات» غالبًا — فئات تقادم (جارٍ، ١–٣٠، ٣١–٦٠، ٦١–٩٠، أكثر من ٩٠ يومًا) × معدلات خسارة تاريخية معدلة بعوامل استشرافية. والمصفوفة ليست نموذجًا جديدًا؛ بل معادلة الخسائر المتوقعة مرتبة في جدول يستطيع فريق الائتمان صيانته فعلًا. وتغذي تأمين الائتمان التجاري وسجل التحصيل قيمة الخسارة عند التعثر؛ ويأتي احتمال التعثر من التقادم نفسه.",
      },
    },
    {
      kind: "p",
      text: {
        en: "SICR is the hinge of the whole model, so IFRS 9 polices it with 'reasonable and supportable information' — including forward-looking macro forecasts — without undue cost or effort. Comparators: the risk of default occurring over the remaining life vs at initial recognition (an absolute PD comparison, not just a rating notch). The 30-days-past-due backstop is a REBUTTABLE presumption, and interest-rate resets, credit-rating migrations and watch-list placements are all live indicators. If the deterioration later reverses, the asset migrates back to stage 1 — with the ECL stepping back to 12-month proportions.",
        ar: "الزيادة الجوهرية هي مفصلة النموذج كله، لذا يحكمها IFRS 9 بـ«معلومات معقولة ومدعومة» — تشمل توقعات الاقتصاد الكلي الاستشرافية — دون كلفة أو جهد مبالغ فيهما. والمقارنة: خطر التعثر على العمر المتبقي مقابل خطره عند الاعتراف الأولي (مقارنة احتمال مطلقة لا مجرد هبوط درجة ائتمانية). وتجاوز ٣٠ يومًا ركيزة قابلة للدحض، وإعادة تسعير الفائدة وتنقل التصنيفات وقوائم المراقبة كلها مؤشرات حية. وإذا انعكس التدهور لاحقًا عاد الأصل إلى المرحلة ١ — وتعود الخسائر المتوقعة إلى نسب ١٢ شهرًا.",
      },
    },
    {
      kind: "p",
      text: {
        en: "POCI instruments never see day-one impairment: the credit risk was already in the purchase price, so the initial ECL is baked into the CREDIT-ADJUSTED EIR (market rate minus expected losses). Thereafter only CHANGES in lifetime ECL hit P&L, and interest always accrues on the net amount. This single rule prevents the double-count the incurred-loss world allowed — and it is why acquired distressed loan portfolios (a 2023–24 specialty) show no day-one loss but a lower EIR.",
        ar: "أدوات POCI لا ترى انخفاض يوم أول أبدًا: فمخاطر الائتمان كانت في ثمن الشراء، والخسائر الأولية مدمجة في «الفائدة الفعلية المعدلة ائتمانيًا» (معدل السوق مخصومًا منه الخسائر المتوقعة). وبعدها لا يصيب الأرباح إلا تغيرات خسائر العمر، وتتراكم الفائدة دائمًا على الصافي. وهذه القاعدة وحدها تمنع الازدواج الذي سمح به عالم الخسائر الواقعة — ولهذا لا تُظهر محافظ القروض المتعثرة المشتراة (تخصص شائع في ٢٠٢٣–٢٤) خسارة يوم أول بل فائدة فعلية أدنى.",
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
        en: "12-MONTH ECL is NOT 'the losses expected in the next 12 months' — it is the FULL lifetime loss weighted by the probability that default starts within 12 months. On a 5-year loan where a year-1 default would cost 40, with a 2% chance, the 12-month ECL is 800 even though the loss may take four more years to finish crystallising.",
        ar: "خسائر ١٢ شهرًا ليست «الخسائر المتوقعة خلال الأشهر الاثني عشر القادمة» — بل خسائر العمر كاملة مرجحة باحتمال بدء التعثر خلال ١٢ شهرًا. ففي قرض ٥ سنوات يكلف تعثرُ سنةٍ أولى ٤٠ باحتمال ٢٪ تكون خسائر ١٢ شهرًا ٨٠٠ ولو احتاجت الخسارة أربع سنوات أخرى لتتبلور.",
      },
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
          when: { en: "Risks & rewards RETAINED (a secured borrowing in substance — repo, factoring with recourse)", ar: "احتفظ بالمخاطر والمنافع (اقتراض مضمون في الجوهر — إعادة شراء، تخصيم بمظلة رجوع)" },
          then: { en: "Keep the asset; book the proceeds as a LIABILITY (a collateralised borrowing)", ar: "أبقِ الأصل؛ والمتحصلات التزامًا (اقتراضًا بضمان)", red: true },
        },
        {
          when: { en: "Neither retained nor transferred in full → CONTINUING INVOLVEMENT test: derecognise to the extent of the transferee's power to sell, keep a continuing-involvement asset/liability", ar: "لا احتفاظ كامل ولا نقل كامل ← اختبار التورط المستمر: استبعد بحد قدرة المتنقل عليه على البيع مع إبقاء أصل/التزام التورط" },
          then: { en: "The pass-through assessment tree runs in order: expiry → risks&rewards → control → continuing involvement", ar: "شجرة التقييم بالترتيب: انقضاء ← مخاطر ومنافع ← سيطرة ← تورط مستمر", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Chapter 3 — Hedge accounting", ar: "الفصل ٣ — محاسبة التغطية" } },
    {
      kind: "list",
      items: [
        { en: "Three types: FAIR VALUE hedge (FV of a recognised asset/liability), CASH FLOW hedge (variability of future cash flows), NET INVESTMENT hedge of a foreign operation (IAS 21 companion)", ar: "ثلاثة أنواع: تغطية قيمة عادلة (لأصل/التزام قائم)، وتغطية تدفقات (لتقلب تدفقات مستقبلية)، وتغطية استثمار صافٍ في عملية أجنبية (قرينة IAS 21)" },
        { en: "Documentation at INCEPTION: the hedging relationship, the risk-management objective, the effectiveness requirement (economic relationship + no offsetting weight shifts)", ar: "وثائق عند النشأة: علاقة التغطية وهدف إدارة المخاطر ومطلب الفاعلية (علاقة اقتصادية دون إزاحة أوزان)" },
        { en: "NO 80–125% bright line anymore (that was IAS 39); effectiveness is qualitative-with-evidence, tested prospectively & retrospectively", ar: "لا حد ٨٠–١٢٥٪ بعد الآن (كان ذلك IAS 39)؛ فالفاعلية نوعية بدليل وتختبر مستقبليًا ورجعيًا" },
        { en: "Cash-flow hedge: the EFFECTIVE portion → the cash-flow-hedge reserve (OCI); REBALANCING allowed without discontinuation; the ineffective portion → P&L", ar: "تغطية التدفقات: الجزء الفاعل ← احتياطي التغطية في الدخل الشامل؛ ويجوز إعادة الموازنة دون إيقاف؛ وغير الفاعل ← الأرباح" },
        { en: "Fair-value hedge: both the hedging instrument's and the hedged item's FV changes → P&L (the hedged item's baseline risk adjustment)", ar: "تغطية العادلة: فروق الأداة والمغطى كلاهما ← الأرباح" },
        { en: "Hedging INSTRUMENT: a derivative designated in full, or a non-derivative for FX risk; options may be split into intrinsic value + time value (aligned time value → OCI 'cost of hedging' reserve)", ar: "أداة التغطية: مشتق يسمى بالكامل أو غير مشتق لمخاطر العملة؛ ويجوز فصل الخيارات إلى قيمة جوهرية وقيمة زمنية (الزمنية المواءمة ← احتياطي «تكلفة التغطية» في الدخل الشامل)" },
        { en: "Interest Rate Benchmark Reform (2019/2020 amendments): pragmatism so LIBOR-era hedging relationships survived the transition without automatic discontinuation", ar: "إصلاح معايير أسعار الفائدة (تعديلات ٢٠١٩/٢٠٢٠): تيسيرات نجّت علاقات تغطية عهد LIBOR من الإيقاف التلقائي في المرحلة الانتقالية" },
      ],
    },
    {
      kind: "formula",
      title: { en: "Hedge effectiveness & the hedge ratio", ar: "فاعلية التغطية ونسبة التحوّط" },
      lines: [
        { en: "Effective portion = change in hedging instrument's value designated × hedge ratio, vs change in hedged item's value attributable to the risk", ar: "الجزء الفاعل = تغير قيمة أداة التغطية المسمى × نسبة التحوّط مقابلا لتغير قيمة المغطى المنسوب للخطر" },
        { en: "Hedge ratio = the ratio of the volume of the hedging instrument to the volume of the hedged item — MUST reflect the actual risk-management ratio", ar: "نسبة التحوّط = حجم أداة التغطية ÷ حجم البند المغطى — يجب أن تعكس نسبة إدارة المخاطر الفعلية" },
        { en: "No bright line — only an ECONOMIC RELATIONSHIP (the instrument and the item move in offsetting response to the same risk) + no weight-shift distortion + credit risk not dominant", ar: "لا حد رقمي — علاقة اقتصادية فحسب (تتحرك الأداة والمغطى تعويضيًا مع الخطر ذاته) + لا تشويه بإزاحة الأوزان + مخاطر الائتمان غير مهيمنة" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Cash flow hedge — forecast commodity purchase, forward gain 6,000 → 10,000", ar: "تغطية تدفقات — شراء سلعة متوقع، مكسب العقود الآجلة من ٦٬٠٠٠ إلى ١٠٬٠٠٠" },
      rows: [
        { dr: { en: "Forward contract (asset) 6,000", ar: "عقد آجل (أصل) ٦٬٠٠٠" }, cr: { en: "OCI — cash-flow-hedge reserve 6,000", ar: "الدخل الشامل — احتياطي تغطية التدفقات ٦٬٠٠٠" }, red: true },
        { dr: { en: "Forward contract 4,000", ar: "عقد آجل ٤٬٠٠٠" }, cr: { en: "OCI — reserve (now 10,000) 4,000", ar: "الدخل الشامل — الاحتياطي (صار ١٠٬٠٠٠) ٤٬٠٠٠" } },
        { dr: { en: "Cash 10,000 (forward settled)", ar: "نقد ١٠٬٠٠٠ (تسوية العقد)" }, cr: { en: "Forward contract 10,000", ar: "عقد آجل ١٠٬٠٠٠" } },
        { dr: { en: "OCI — hedge reserve 10,000", ar: "الدخل الشامل — احتياطي التغطية ١٠٬٠٠٠" }, cr: { en: "Cost of sales (when the inventory hits P&L) 10,000", ar: "تكلفة المبيعات (عند بلوغ المخزون الأرباح) ١٠٬٠٠٠" }, red: true },
      ],
    },
    {
      kind: "journal",
      title: { en: "Fair value hedge — fixed-rate bonds hedged by an interest-rate swap", ar: "تغطية قيمة عادلة — سندات بمعدل ثابت تغطى بمبادلة فائدة" },
      rows: [
        { dr: { en: "Swap liability (FV fall in instrument) 12,000", ar: "التزام المبادلة (هبوط أداة التغطية) ١٢٬٠٠٠" }, cr: { en: "FV loss (P&L) 12,000", ar: "خسارة عادلة (بالأرباح) ١٢٬٠٠٠" } },
        { dr: { en: "FV gain (P&L) 12,000", ar: "مكسب عادلة (بالأرباح) ١٢٬٠٠٠" }, cr: { en: "Bonds payable (hedged item's FV fall) 12,000", ar: "سندات دائنة (هبوط عادلة المغطى) ١٢٬٠٠٠" }, red: true },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Hedge documentation exists BEFORE the hedging starts — no paper, no hedge accounting, whatever the economics. And discontinuation only when the risk-management objective changes, the hedge fails, or the instrument expires — never merely because the hedge ratio drifted (REBALANCE instead).",
        ar: "وثائق التغطية توجد قبل بدئها — لا وثائق فلا محاسبة تغطية أيًّا كانت الاقتصادات. ولا إيقاف إلا بتغير هدف إدارة المخاطر أو فشل التغطية أو انقضاء الأداة — ولا لمجرد انزياح نسبة التحوّط (بل يعاد الموازنة).",
      },
    },
    { kind: "h", text: { en: "Presentation, disclosure & transition", ar: "العرض والإفصاح والانتقال" } },
    {
      kind: "list",
      items: [
        { en: "Day-one gain/loss (FVTPL & FVOCI) = difference between the transaction price and the day-one fair value — usually nil (IFRS 13 presumes price = FV)", ar: "ربح/خسارة اليوم الأول = فرق سعر المعاملة عن العادلة — وعادة صفر (يفترض IFRS 13 السعر عادلةً)" },
        { en: "Loss allowances presented GROSS vs NET (the impairment allowance presentation choice for interest income and ECL — disclose the selected option)", ar: "عرض المخصص إجماليًا أو صافيًا — خيار يفصح عنه" },
        { en: "The IFRS 7 companion disclosures: categories, ECL stage movements (a rollforward of the loss allowance), credit-risk concentrations, the gross/net carrying reconciliation", ar: "إفصاحات IFRS 7 المرافقة: الفئات، وحركات المراحل (تسوية المخصص)، وتركزات المخاطر" },
        { en: "Interest revenue on impaired assets is disclosed SEPARATELY; FVOCI-debt's ECL sits inside the net FV gain/loss line", ar: "إيراد فائدة الأصول المعسرة يفصح منفصلًا؛ وخسائر ديون FVOCI المتوقعة داخل بند صافي فروق العادلة" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Transition: IFRS 9 became effective 1 January 2018, applied retrospectively with the opening-retained-earnings / OCI restatement route (no restatement of comparatives required). The April 2024 amendments (effective 1 Jan 2026) tightened the SPPI story: contingent features (ESG-linked coupons) and non-recourse assets get explicit analysis rules, and some DIGITAL-CURRENCY holdings are confirmed OUTSIDE the financial-asset definition — they remain IAS 2/IAS 38 territory. Interactions: IAS 32 draws the liability/equity line, IFRS 13 defines every fair value used here, IFRS 7 carries the disclosure load, IAS 21 partners the net-investment hedge, and IFRS 15's contract assets are impaired under this standard's ECL.",
        ar: "الانتقال: صار IFRS 9 نافذًا في ١ يناير ٢٠١٨ مطبقًا بأثر رجعي عبر تعديل أرباح بداية الرصيد/الدخل الشامل (دون إعادة عرض المقارنات إلزامًا). وشدّدت تعديلات أبريل ٢٠٢٤ (نافذة ١ يناير ٢٠٢٦) حكاية SPPI: قواعد تحليل صريحة للسمات المشروطة (كوبونات ESG) والأصول غير المضمونة بمقابل، وتأكيد أن بعض حيازات العملات الرقمية خارج تعريف الأصل المالي — فتبقى في أرض IAS 2/IAS 38. والتفاعلات: IAS 32 يرسم خط الالتزام/الملكية، وIFRS 13 يعرّف كل قيمة عادلة هنا، وIFRS 7 يحمل عبء الإفصاح، وIAS 21 قرين تغطية الاستثمار الصافي، وأصول عقود IFRS 15 تنخفض قيمتها بخسائر هذا المعيار المتوقعة.",
      },
    },
  ],
}
