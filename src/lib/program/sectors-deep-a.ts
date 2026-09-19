import type { SectorDeepDive } from "./sectors-types"

/** Sector Risk Library — deep dives, part A: financial services & industry/trade.
 *  Every entry MUST be keyed by a valid SectorId; the aggregator enforces
 *  compile-time completeness via Record<SectorId, SectorDeepDive>. */

export const SECTORS_DEEP_A: Record<string, SectorDeepDive> = {
  /* ================================================================ */
  /* BANKS                                                             */
  /* ================================================================ */
  banks: {
    estimates: [
      {
        area: { en: "ECL PD / LGD parameters & macro scenarios", ar: "معاملات احتمال التعثر والخسارة وسيناريوهات الاقتصاد الكلي" },
        why: {
          en: "Point-in-time PDs blended with management's forward-looking overlays (GDP, inflation, EGP depreciation) are the single largest judgment in the statements. Challenge the scenario weights, the rationale for each overlay, and back-testing evidence — a 100bp PD shift on the corporate book moves ECL materially.",
          ar: "احتمالات التعثر اللحظية الممزوجة بتعديلات الإدارة التطلعية (الناتج، التضخم، انخفاض الجنيه) هي أكبر حكم منفرد في القوائم. تحقق من أوزان السيناريوهات ومبرر كل تعديل وأدلة الاختبار الرجعي — تحرك 100 نقطة أساس في احتمال التعثر لمحفظة الشركات يحرك الخسائر المتوقعة جوهريًا.",
        },
        ref: "IFRS 9 / EAS 47 · ISA 540 (Revised)",
      },
      {
        area: { en: "Staging transfers & cure evidence", ar: "الانتقال بين المراحل وأدلة الشفاء" },
        why: {
          en: "Moving an exposure from Stage 2 back to Stage 1 requires evidence of credit improvement with no new delinquency — banks often apply a probation period. Test whether cures around year-end were supported by genuine cash receipts, and whether 12-month vs lifetime ECL was applied consistently.",
          ar: "إعادة التعرض من المرحلة الثانية إلى الأولى تتطلب دليلًا على تحسن الائتمان دون تعثر جديد — وكثيرًا ما تطبق البنوك فترة اختبار. اختبر ما إذا كانت حالات الشفاء حول نهاية السنة مدعومة بتحصيلات فعلية، وما إذا كان طُبق خصم 12 شهرًا مقابل العمر الكامل باتساق.",
        },
        ref: "IFRS 9 B5.5 · ISA 540 (Revised)",
      },
      {
        area: { en: "Fair value of unlisted equity & DLOM", ar: "القيمة العادلة للحصص غير المدرجة وخصم عدم القابلية للتداول" },
        why: {
          en: "Strategic stakes and NPL-collateral companies are valued through models where the discount for lack of marketability dominates the number. Challenge recent transactions used as anchors, stale valuations, and whether transfers between fair-value levels were disclosed.",
          ar: "الحصص الاستراتيجية وشركات ضمان القروض المتعثرة تُقيَّم بنماذج يهيمن فيها خصم عدم القابلية للتداول على النتيجة. تحقق من الصفقات الحديثة المستخدمة كمراسٍ، ومن التقييمات المتقادمة، ومن الإفصاح عن الانتقالات بين مستويات القيمة العادلة.",
        },
        ref: "IFRS 13 · ISA 540 (Revised)",
      },
      {
        area: { en: "POCI gross-up & floored yields", ar: "القروض المشتراة المتعثرة وعائدها المحدود" },
        why: {
          en: "Purchased-or-originated credit-impaired portfolios add future expected losses to the purchase price and run a floored effective yield; the day-1 split and subsequent accretion are model-driven. Recompute on a sample and reconcile the credit-adjusted rate to cash-flow forecasts.",
          ar: "المحافظ المشتراة المتعثرة تضيف الخسائر المستقبلية المتوقعة إلى سعر الشراء وتسير بعائد فعال محدد بحد أدنى؛ فالتقسيم في اليوم الأول والاستحقاق اللاحق يحكمهما النموذج. أعد الحساب على عينة وطابق العائد المعدل ائتمانيًا مع توقعات التدفقات.",
        },
        ref: "IFRS 9 B5.4 / B5.5",
      },
    ],
    goingConcern: [
      {
        en: "Depositor concentration and runoff behavior — a top-20 depositor walk-away can breach the loan-to-deposit funding plan.",
        ar: "تركز المودعين وسلوك السحب — انسحاب كبار المودعين قد يخرق خطة التمويل القائمة على نسبة القروض إلى الودائع.",
      },
      {
        en: "Wholesale funding and interbank line renewal terms hardening before year-end.",
        ar: "تجدد تمويل الجملة واشتداد شروط خطوط ما بين البنوك قبل نهاية السنة.",
      },
      {
        en: "LCR / NSFR headroom against CBE minimums under stress assumptions; contingency funding plan realism.",
        ar: "هامش نسب السيولة الرقابية مقابل الحدود الدنيا للبنك المركزي في افتراضات الضغط، وواقعية خطة التمويل الطارئة.",
      },
      {
        en: "Capital erosion trajectory if ECL keeps absorbing profit — management's forecast vs regulatory thresholds.",
        ar: "مسار تآكل رأس المال إذا ظلت الخسائر المتوقعة تستنزف الربح — توقعات الإدارة مقابل الحدود الرقابية.",
      },
    ],
    analytics: [
      {
        en: "Journal-entry testing focused on manual ECL overrides, stage-transfer batches and year-end fee reversals.",
        ar: "اختبار القيود اليومية مركزًا على التجاوزات اليدوية للخسائر المتوقعة ودفوعات انتقال المراحل وعكس الرسوم في نهاية السنة.",
      },
      {
        en: "Vintage-curve analytics: default experience by origination cohort to stress management's PD assumptions.",
        ar: "تحليلات منحنيات التوليد: خبرة التعثر حسب دفعة المنشأ لإجهاد افتراضات الإدارة حول احتمال التعثر.",
      },
      {
        en: "Staging-transfer velocity around quarter-ends — spikes suggest cosmetic risk migration.",
        ar: "سرعة انتقال المراحل حول نهايات الأرباع — الارتفاعات المفاجئة توحي بترحيل تجميلي للمخاطر.",
      },
      {
        en: "Independent recalculation of interest accrual on a risk-based sample, reconciled to the core-banking engine.",
        ar: "إعادة حساب مستقلة لاستحقاق الفوائد على عينة قائمة على المخاطر ومطابقتها بمحرك النظام المصرفي الأساسي.",
      },
    ],
    inquiries: [
      {
        en: "Walk us through the rationale and approval trail for every manual ECL overlay above the model this year.",
        ar: "اشرح لنا مبرر ومسار الاعتماد لكل تعديل يدوي فوق النموذج على الخسائر المتوقعة هذا العام.",
      },
      {
        en: "Which corporate names moved out of Stage 2 this quarter, and what cure evidence does the file hold?",
        ar: "أي العملاء انتقلوا من المرحلة الثانية هذا الربع، وما أدلة الشفاء التي يحتفظ بها الملف؟",
      },
      {
        en: "How would a further 20% EGP depreciation flow through capital, and what actions does that trigger?",
        ar: "كيف سيؤدي انخفاض إضافي للجنيه بنسبة 20% إلى رأس المال، وما الإجراءات التي يستدعيها ذلك؟",
      },
      {
        en: "Have any supervisory findings from the last CBE examination remained open past their remediation date?",
        ar: "هل بقيت ملاحظات رقابية من آخر تفتيش للبنك المركزي مفتوحة بعد تاريخ المعالجة المحدد؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Recalculate ECL on a risk-rated sample spanning stages 1–3, including overlays and cures, and book the difference.",
          ar: "أعد حساب الخسائر الائتمانية المتوقعة على عينة مصنفة بالمخاطر تغطي المراحل 1–3 شاملة التعديلات وحالات الشفاء، وسجل الفروق.",
        },
        ref: "ISA 540 (Revised) · IFRS 9",
      },
      {
        text: {
          en: "Map the bank's LCR/NSFR computation to CBE circular inputs and independently reperform one monthly close.",
          ar: "طابق حساب نسب السيولة مع مدخلات تعليمات البنك المركزي وأعد تنفيذ إغلاق شهري واحد بشكل مستقل.",
        },
        ref: "ISA 330 · CBE liquidity rules",
      },
    ],
    extraFraud: [
      {
        en: "Repayments funded by new disbursements to the same borrower (teeming and lading on facilities).",
        ar: "أقساط تُسدد من صرف تسهيلات جديدة لنفس المقترض (تدوير مستمر على التسهيلات).",
      },
    ],
    extraMines: [
      {
        topic: { en: "Hedge accounting documentation & effectiveness", ar: "توثيق محاسبة التحوط وقياس الفاعلية" },
        detail: {
          en: "Fair-value hedge designation of the FX book requires documented risk-management objective and prospective effectiveness; de-designation mid-year surprises the P&L. Test the file before accepting the accounting.",
          ar: "تصميم تحوط القيمة العادلة لمركز العملات يتطلب توثيقًا لهدف إدارة المخاطر وقياسًا مستقبليًا للفاعلية؛ وإلغاء التصميم في منتصف السنة يفاجئ الأرباح. اختبر الملف قبل قبول المعالجة المحاسبية.",
        },
        ref: "IFRS 9 §6",
      },
    ],
    extraRatios: [
      {
        name: { en: "Cost-to-income ratio", ar: "نسبة المصروفات إلى الدخل" },
        benchmark: "Operating expense ÷ total operating income; Egyptian banks typically 35–50%",
        redFlag: {
          en: "Falling income with flat cost base — branch expansion funded by shrinking margins.",
          ar: "دخل متراجع مع قاعدة تكاليف ثابتة — توسع فروع تمول منه هوامش تنكمش.",
        },
      },
    ],
    extraPitfalls: [
      {
        en: "Testing ECL on the consolidated group while CBE ratios sit at the bank level — different perimeters, different conclusions.",
        ar: "اختبار الخسائر المتوقعة على المجموعة الموحدة بينما نسب البنك المركزي على مستوى البنك وحده — نطاقان مختلفان يستلزمان استنتاجين مختلفين.",
      },
    ],
  },

  /* ================================================================ */
  /* MICROFINANCE                                                     */
  /* ================================================================ */
  microfinance: {
    estimates: [
      {
        area: { en: "Portfolio-level ECL on unsecured micro loans", ar: "الخسائر المتوقعة على مستوى المحفظة للقروض متناهية الصغر غير المضمونة" },
        why: {
          en: "With no collateral, the estimate rests on behavioral scoring and historical loss curves per product and officer. Challenge segment granularity: one blended loss rate for group loans, individual loans and SMEs hides diverging risk.",
          ar: "بغياب الضمان يقوم التقدير على التنقيط السلوكي ومنحنيات الخسائر التاريخية لكل منتج وموظف. تحقق من تجزئة الشرائح: معدل خسارة واحد ممتزج للقروض الجماعية والفردية والمنشآت الصغيرة يخفي مخاطر متباينة.",
        },
        ref: "IFRS 9 / EAS 47 · ISA 540 (Revised)",
      },
      {
        area: { en: "Write-off timing vs FRA provisioning rules", ar: "توقيت الإعدام مقابل قواعد المخصصات الرقابية" },
        why: {
          en: "Egyptian microfinance regulation (FRA) prescribes provisioning and write-off schedules by delinquency bucket; the accounting estimate must reconcile to them or explain the difference. Late write-offs flatter both the book and the PAR ratios.",
          ar: "تنظم قواعد الهيئة العامة للرقابة المالية المخصصات وجداول الإعدام حسب درجات التعثر؛ وعلى التقدير المحاسبي أن يطابقها أو يفسر الفرق. تأخير الإعدام يجمل المحفظة ونسب الجودة معًا.",
        },
        ref: "FRA microfinance rules · IFRS 9",
      },
      {
        area: { en: "Concessional funding & grant income", ar: "التمويل الميسر وإيراد المنح" },
        why: {
          en: "Development-finance lines below market rates, and technical-assistance grants with conditions, require allocation between debt and grant accounting and conditionality assessment before recognition. Front-loading grant income is the classic distortion.",
          ar: "خطوط التمويل التنموي دون سعر السوق والمنح الفنية المشروطة تستلزم توزيعًا بين معالجة القرض والمنح وتقييمًا لاستيفاء الشروط قبل الاعتراف. تعجيل الاعتراف بإيراد المنح هو التحريف المعتاد.",
        },
        ref: "IAS 20 · IFRS 9 · ISA 540 (Revised)",
      },
    ],
    goingConcern: [
      {
        en: "Funding-line renewal — most Egyptian MFIs depend on a small number of development-finance institutions and bank facilities.",
        ar: "تجدد خطوط التمويل — تعتمد أغلب مؤسسات التمويل متناهي الصغر على عدد محدود من مؤسسات التمويل التنموي وتسهيلات بنكية.",
      },
      {
        en: "PAR30 trajectory over the last four quarters and the write-off policy masking it.",
        ar: "مسار نسبة التعثر فوق 30 يومًا خلال الأرباع الأربعة الأخيرة وسياسة الإعدام التي قد تحجبه.",
      },
      {
        en: "Covenant headroom on borrowing facilities (portfolio quality tests) and waiver history.",
        ar: "هامش الالتزامات على تسهيلات الاقتراض (اختبارات جودة المحفظة) وتاريخ الإعفاءات.",
      },
      {
        en: "Liquidity squeeze from rapid branch expansion ahead of portfolio quality stabilizing.",
        ar: "ضغط سيولة من توسع الفروع السريع قبل استقرار جودة المحفظة.",
      },
    ],
    analytics: [
      {
        en: "Repayment-decay curves by branch and loan officer to expose evergreening pockets.",
        ar: "منحنيات تدهور السداد حسب الفرع وموظف الائتمان لكشف بؤر التدوير المستمر.",
      },
      {
        en: "Reconciliation of PAR buckets to GL provisions and to the FRA regulatory return.",
        ar: "مطابقة درجات التعثر مع مخصصات الأستاذ العام ومع الإقرار الرقابي للهيئة.",
      },
      {
        en: "Disbursement-to-repayment matching per client — new money servicing old loans is evergreening.",
        ar: "مطابقة الصرف بالسداد لكل عميل — الأموال الجديدة التي تخدم قروضًا قديمة هي تدوير مستمر.",
      },
      {
        en: "Benford screening on loan ticket sizes and on manual penalty waivers.",
        ar: "فحص بنفورد على أحجام القروض وعلى الإعفاءات اليدوية من الغرامات.",
      },
    ],
    inquiries: [
      {
        en: "Show us the loss curve by product for three years — where did actual losses exceed the model and why?",
        ar: "أرنا منحنى الخسارة لكل منتج خلال ثلاث سنوات — أين تجاوزت الخسائر الفعلية النموذج ولماذا؟",
      },
      {
        en: "Which funding lines mature in the next twelve months, and on what terms are renewals being discussed?",
        ar: "أي خطوط التمويل تستحق خلال الاثني عشر شهرًا القادمة، وبأي شروط تجري مناقشة التجديد؟",
      },
      {
        en: "How are loan-officer incentives structured — volume only, or portfolio quality too?",
        ar: "كيف تُبنى حوافز موظفي الائتمان — على الحجم فقط أم على جودة المحفظة أيضًا؟",
      },
      {
        en: "What conditions remain unmet on development grants recognized in income this year?",
        ar: "ما الشروط غير المستوفاة بعد على المنح التنموية التي اعتُرف بها في الدخل هذا العام؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Reperform the FRA provisioning matrix on a delinquency-stratified sample and reconcile accounting vs regulatory provisions.",
          ar: "أعد تنفيذ مصفوفة المخصصات الرقابية على عينة طبقية حسب التعثر وطابق المخصص المحاسبي مع الرقابي.",
        },
        ref: "ISA 330 · FRA rules",
      },
      {
        text: {
          en: "For the ten largest exposures per product, trace disbursement, servicing and any rescheduling trail end-to-end.",
          ar: "لأكبر عشرة تعرضات في كل منتج، تتبع الصرف والخدمة وأي إعادة جدولة من البداية للنهاية.",
        },
        ref: "ISA 500 · ISA 240",
      },
    ],
    extraFraud: [
      {
        en: "Ghost borrowers created around bonus thresholds, serviced by officer-funded repayments.",
        ar: "مقترضون وهميون ينشؤون حول عتبات الحوافز، تُخدم أقساطهم من جيب موظف الائتمان.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Loan-loss provision vs regulatory reserve gross-up", ar: "مخصص الخسائر مقابل الاحتياطي الرقابي" },
        detail: {
          en: "Regulatory reserves computed on outstanding balances may exceed IFRS 9 ECL; the excess is a regulatory construct, not an asset. Misclassifying it as a deferred cost invents profit.",
          ar: "الاحتياطيات الرقابية المحسوبة على الأرصدة القائمة قد تتجاوز الخسائر المتوقعة محاسبيًا؛ والزائد تركيب رقابي لا أصل. تصنيفه كمؤجل يخترع ربحًا.",
        },
        ref: "IFRS 9 · FRA rules",
      },
    ],
    extraRatios: [
      {
        name: { en: "Portfolio at Risk >90 days (PAR90)", ar: "المحفظة المعرضة للخطر فوق 90 يومًا" },
        benchmark: "Outstanding balance of loans overdue >90 days ÷ total portfolio; watch >5%",
        redFlag: {
          en: "PAR90 falling while write-offs accelerate — improvement by removal, not collection.",
          ar: "انخفاض النسبة مع تسارع الإعدام — تحسن بالإزالة لا بالتحصيل.",
        },
      },
    ],
    extraKams: [
      {
        en: "Allowance for expected credit losses on the microfinance portfolio (estimation uncertainty).",
        ar: "مخصص الخسائر الائتمانية المتوقعة على محفظة التمويل متناهي الصغر (عدم يقين التقدير).",
      },
    ],
    extraPitfalls: [
      {
        en: "Sampling only clean files — the risk lives in rescheduled, top-up and officer-terminated portfolios.",
        ar: "الاكتفاء بعينات من الملفات النظيفة — الخطر يقطن في المحافظ المعاد جدولتها والممددة والمخصومة من موظفين منتهية خدمتهم.",
      },
    ],
  },

  /* ================================================================ */
  /* INSURANCE                                                        */
  /* ================================================================ */
  insurance: {
    estimates: [
      {
        area: { en: "IFRS 17 fulfilment cash flows & discount rates", ar: "تدفقات الوفاء وسعر الخصم وفق IFRS 17" },
        why: {
          en: "As Egyptian insurers migrate to IFRS 17 (EAS parallel), the liability for remaining coverage is built from probability-weighted future claims discounted at bottom-up rates. Challenge the granularity of cohorts, expense inflation assumptions, and whether discount curves reflect the EGP liquidity environment.",
          ar: "مع انتقال شركات التأمين المصرية إلى IFRS 17 (وبمعياره المصري المقابل)، يُبنى التزام التغطية المتبقية من مطالبات مستقبلية مرجحة بالاحتمالات مخصومة بأسعار تصاعدية. تحقق من تجزئة دفعات العقود وافتراضات تضخم المصروفات وهل منحنيات الخصم تعكس بيئة سيولة الجنيه.",
        },
        ref: "IFRS 17 · ISA 540 (Revised)",
      },
      {
        area: { en: "Risk adjustment for non-financial risk", ar: "تعديل المخاطر غير المالية" },
        why: {
          en: "The risk adjustment compensates for claim uncertainty; a thin adjustment understates the liability while a fat one creates hidden margins released later. Compare the confidence level disclosed to the actual claims volatility experienced.",
          ar: "تعديل المخاطر يعوض عدم يقين المطالبات؛ تعديل رقيق يبخس الالتزام وسمين يخلق هوامش خفية تحرر لاحقًا. قارن مستوى الثقة المفصح عنه بحجم تذبذب المطالبات الفعلي.",
        },
        ref: "IFRS 17 · ISA 540 (Revised)",
      },
      {
        area: { en: "Non-life loss development triangles & IBNR", ar: "مثلثات تطور الخسائر والمخصصات غير المبلغة" },
        why: {
          en: "Incurred-but-not-reported reserves are estimated from historical development patterns; a triangle distorted by COVID-era years or by claims-handling changes produces wrong IBNR for years. Reperform the chain-ladder on at least two triangles and test management's adjustment factors.",
          ar: "تقدَّر المخصصات غير المبلغة من أنماط التطور التاريخية؛ والمثلث المشوه بسنوات الجائحة أو بتغيرات معالجة المطالبات ينتج تقديرات خاطئة لسنوات. أعد تنفيذ طريقة السلم على مثلثين على الأقل واختبر عوامل التعديل.",
        },
        ref: "IFRS 17 / actuarial practice · ISA 540 (Revised)",
      },
    ],
    goingConcern: [
      {
        en: "Reinsurance counterparty concentration — recovery rights are only as good as the reinsurer's paper.",
        ar: "تركز معيدي التأمين — حقوق الاسترداد لا تتجاوز جودة ورقة المعيد.",
      },
      {
        en: "Solvency margin against FRA requirements if reserve strengthening becomes necessary.",
        ar: "هامش الملاءة مقابل متطلبات الهيئة إذا لزم تقوية المخصصات.",
      },
      {
        en: "Claims inflation (medical and motor repair costs) outrunning premium rate increases.",
        ar: "تضخم المطالبات (طبية وإصلاح مركبات) يسبق زيادات أسعار الأقساط.",
      },
      {
        en: "Investment portfolio realized losses crystallizing into capital erosion in an EGP drawdown.",
        ar: "خسائر محققة من محفظة الاستثمار تتبلور في تآكل رأس المال مع تراجع الجنيه.",
      },
    ],
    analytics: [
      {
        en: "Claims-leakage analytics: late-reported claims run-off and repeat late-reporting underwriters.",
        ar: "تحليلات تسرب المطالبات: تصريف المطالبات المتأخرة البلاغ وتكرارها لدى نفس Underwriters.",
      },
      {
        en: "Policy-administration-system to GL premium reconciliation, sampled at underwriting-month granularity.",
        ar: "مطابقة أقساط نظام إدارة الوثائق مع الأستاذ العام بالمعاينة على مستوى شهر الإصدار.",
      },
      {
        en: "Reinsurance commission income matched to ceded premium curves — spikes at year-end distort profit.",
        ar: "مطابقة عمولات إعادة التأمينة مع منحنيات الأقساط المسندة — الارتفاعات في نهاية السنة تشوه الربح.",
      },
      {
        en: "Benford screening on claim sizes and on agent commission calculations.",
        ar: "فحص بنفورد على أحجام المطالبات وعلى حساب عمولات الوكلاء.",
      },
    ],
    inquiries: [
      {
        en: "Which lines of business required reserve strengthening in the last two closings, and who approved it?",
        ar: "أي فروع النشاط تطلبت تقوية مخصصات في آخر إغلاقين، ومن اعتمدها؟",
      },
      {
        en: "What share of reinsurance recoverables sits with reinsurers rated below investment grade?",
        ar: "ما نسبة مستحقات إعادة التأمين لدى معيدين بتصنيف ائتماني دون درجة الاستثمار؟",
      },
      {
        en: "How are expense assumptions in the IFRS 17 model benchmarked, and when were they last back-tested?",
        ar: "كيف تُقارن افتراضات المصروفات في نموذج IFRS 17، ومتى اختُبرت ارتجاعيًا آخر مرة؟",
      },
      {
        en: "Which actuarial reports does the board receive before approving the closing reserve?",
        ar: "أي تقارير اكتوارية يتلقاها مجلس الإدارة قبل اعتماد مخصص الإقفال؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Engage the actuarial specialist (ISA 620) to independently reperform IBNR on the two largest lines and quantify sensitivity.",
          ar: "استعن بالخبير الاكتواري (ISA 620) لإعادة حساب المخصصات غير المبلغة مستقلًا في أكبر فرعين وقياس الحساسية.",
        },
        ref: "ISA 620 · ISA 540 (Revised)",
      },
      {
        text: {
          en: "Circular-confirm reinsurance recoverables with the five largest reinsurers and test aging against contract terms.",
          ar: "أرسل تأكيدات دائرية لمستحقات إعادة التأمين لدى أكبر خمسة معيدين واختبر الأعمار مقابل شروط العقود.",
        },
        ref: "ISA 505",
      },
    ],
    extraFraud: [
      {
        en: "Fictitious claims serviced by complicit adjusters — watch claims just under authority thresholds.",
        ar: "مطالبات وهمية يخدمها مقدرو أضرار متواطئون — راقب المطالبات تحت عتبات الصلاحية مباشرة.",
      },
    ],
    extraRatios: [
      {
        name: { en: "Combined ratio", ar: "النسبة المجمعة" },
        benchmark: "(Claims + reinsurance + expenses) ÷ earned premium; >100% = underwriting loss",
        redFlag: {
          en: "Improving combined ratio while reserve development deteriorates — release of redundant reserves masking current-year losses.",
          ar: "تحسن النسبة المجمعة مع تدهور تطور المخصصات — تحرير مخصصات زائدة يحجب خسائر السنة الجارية.",
        },
      },
    ],
    extraKams: [
      {
        en: "Valuation of insurance contract liabilities and IBNR reserves under the new measurement model.",
        ar: "قياس التزامات عقود التأمين ومخصصات المطالبات غير المبلغة وفق نموذج القياس الجديد.",
      },
    ],
    extraPitfalls: [
      {
        en: "Testing the ledger but never the actuarial engine — in insurance the model IS the books.",
        ar: "اختبار الأستاذ دون المحرك الاكتواري — في التأمين النموذج هو الدفاتر نفسها.",
      },
    ],
  },

  /* ================================================================ */
  /* MANUFACTURING                                                    */
  /* ================================================================ */
  manufacturing: {
    estimates: [
      {
        area: { en: "Inventory net realizable value (IAS 2)", ar: "صافي القيمة البيعية للمخزون" },
        why: {
          en: "NRV equals estimated selling price less costs to complete and sell — for slow-moving stock, obsolete components and finished goods priced in a devaluing EGP, the cost-to-NRV write-down is management's call. Challenge ageing buckets, subsequent-period selling prices, and whether write-downs reversed improperly.",
          ar: "صافي القيمة البيعية هو سعر البيع المقدر ناقص تكاليف الإتمام والبيع — للمخزون بطيء الحركة والمكونات المتقادمة والمنتجات المسعرة بجنيه يتدهور، خفض القيمة قرار إداري. تحقق من شرائح التقادم وأسعار البيع اللاحقة ومن عدم عكس الخفض بغير حق.",
        },
        ref: "IAS 2 / EAS · ISA 540 (Revised)",
      },
      {
        area: { en: "Onerous contracts & warranty provisions (IAS 37)", ar: "العقود المُرجِحة للخسارة ومخصصات الضمان" },
        why: {
          en: "Long-standing sales contracts signed before input-cost inflation can be loss-making today; warranty provisions rest on historical failure rates that new product lines don't have. Compare claims run-off to the provision roll-forward.",
          ar: "عقود بيع قديمة أُبرمت قبل تضخم تكاليف المدخلات قد تكون خاسرة اليوم؛ ومخصصات الضمان تقوم على معدلات فشل تاريخية لا تملكها الخطوط الجديدة. قارن تصريف المطالبات بحركة المخصص.",
        },
        ref: "IAS 37 · ISA 540 (Revised)",
      },
      {
        area: { en: "Decommissioning & restoration provisions", ar: "مخصصات تفكيك المنشآت وإعادة الحال" },
        why: {
          en: "IAS 37 provisions are measured at the present value of expected restoration costs with unwinding accretion each year — both the cost estimate and the discount rate are judgments that live on the balance sheet for decades.",
          ar: "مخصصات إعادة الحال تقاس بالقيمة الحالية للتكاليف المتوقعة مع فائدة تراكمية سنوية — التقدير وسعر الخصم كلاهما حكم يقيم في الميزانية عقودًا.",
        },
        ref: "IAS 16 · IAS 37 · IFRIC 1",
      },
    ],
    goingConcern: [
      {
        en: "Order backlog and inquiry pipeline vs fixed-cost coverage over the next two quarters.",
        ar: "طلبات التشغيل المؤكدة وخط الاستفسارات مقابل تغطية التكاليف الثابتة خلال الربعين القادمين.",
      },
      {
        en: "Imported raw-material dependency with FX scarcity — LC opening delays halting production lines.",
        ar: "الاعتماد على خامات مستوردة مع شح العملة — تأخير فتح الاعتمادات المستندية يوقف خطوط الإنتاج.",
      },
      {
        en: "Energy and gas tariff step-ups against locked-in product prices.",
        ar: "تصاعد تعريفات الكهرباء والغاز مقابل أسعار منتجات مقفلة.",
      },
      {
        en: "Customer concentration — one OEM customer lost can idle a plant.",
        ar: "تركز العملاء — فقدان عميل صناعي واحد قد يوقف مصنعًا كاملًا.",
      },
    ],
    analytics: [
      {
        en: "Standard-vs-actual BOM variance analytics by product — chronic favorable variances hide scrap.",
        ar: "تحليلات انحرافات قائمة المواد القياسية عن الفعلية لكل منتج — الانحرافات المرضية المزمنة تخفي الهالك.",
      },
      {
        en: "Utility-to-output regression (kWh per tonne) — declining efficiency signals unrecorded scrap or idle-cost capitalization.",
        ar: "انحدار الطاقة بالناتج (كيلوواط/طن) — الكفاءة المتراجعة تشير إلى هالك غير مسجل أو رسملة تكاليف توقف.",
      },
      {
        en: "JE testing on period-end production reports and cost-center reclassifications.",
        ar: "اختبار القيود على تقارير الإنتاج نهاية الفترة وإعادة تصنيف مراكز التكلفة.",
      },
      {
        en: "Scrap-sale revenue vs recorded scrap quantities — an old favorite for off-book cash.",
        ar: "إيراد بيع الهالك مقابل الكميات المسجلة — مفضَّل قديم للنقد خارج الدفاتر.",
      },
    ],
    inquiries: [
      {
        en: "Which SKUs are in the ageing >180-day bucket, and what evidence supports NOT writing them down?",
        ar: "أي الأصناف في شريحة التقادم فوق 180 يومًا، وما الدليل على عدم خفض قيمتها؟",
      },
      {
        en: "Show us the margin by customer contract — which orders are selling below variable cost today?",
        ar: "أرنا هامش الربح لكل عقد عميل — أي الطلبات تُباع اليوم دون التكلفة المتغيرة؟",
      },
      {
        en: "How are borrowing costs on the new line capitalized, and when does the asset become ready for use?",
        ar: "كيف تُرسمل تكاليف الاقتراض للخط الجديد، ومتى يصبح الأصل جاهزًا للاستخدام؟",
      },
      {
        en: "What did the last plant insurance survey flag, and were the recommendations funded?",
        ar: "ماذا سجل آخر مسح تأميني للمصنع، وهل مُولت توصياته؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Attend a physical count at the largest plant and reconcile count tags to the perpetual system and to standard costs.",
          ar: "احضر الجرد الفعلي في أكبر مصنع وطابق بطاقات الجرد بالنظام المستمر وبالتكاليف القياسية.",
        },
        ref: "ISA 501",
      },
      {
        text: {
          en: "Test NRV on a slow-moving sample: subsequent selling prices, costs to sell, and reversal discipline.",
          ar: "اختبر صافي القيمة البيعية على عينة بطيئة الحركة: أسعار البيع اللاحقة وتكاليف البيع وضبط العكس.",
        },
        ref: "IAS 2 · ISA 540 (Revised)",
      },
    ],
    extraFraud: [
      {
        en: "Capitalizing period expenses into inventory (overhead over-absorption) to protect margins.",
        ar: "رسملة مصروفات الفترة داخل المخزون (امتصاص زائد للمصروفات الصناعية) لحماية الهوامش.",
      },
    ],
    extraRatios: [
      {
        name: { en: "Days inventory on hand (DIO)", ar: "أيام المخزون في اليد" },
        benchmark: "Average inventory ÷ COGS × 365; compare to sector norms (30–90 days)",
        redFlag: {
          en: "DIO climbing while management reports 'demand growth' — production pushing into warehouses.",
          ar: "الأيام ترتفع مع تقارير الإدارة عن نمو الطلب — إنتاج يدفع إلى المخازن.",
        },
      },
    ],
    extraKams: [
      {
        en: "Valuation of inventories at net realizable value given input-cost volatility.",
        ar: "تقييم المخزون بصافي القيمة البيعية نظرًا لتقلب تكاليف المدخلات.",
      },
    ],
    extraPitfalls: [
      {
        en: "Auditing cost sheets in the office without walking the floor — WIP quantities come from production reports, not ledgers.",
        ar: "مراجعة أوراق التكلفة في المكتب دون جولة أرضية — كميات تحت التشغيل تأتي من تقارير الإنتاج لا من الأستاذ.",
      },
    ],
  },

  /* ================================================================ */
  /* RETAIL                                                           */
  /* ================================================================ */
  retail: {
    estimates: [
      {
        area: { en: "Markdown & shrinkage allowances", ar: "مخصصات تخفيض الأسعار والفقد" },
        why: {
          en: "Fashion and electronics retailers accrue markdown support to clear seasonal stock; the accrual percentage per category is judgment based on historical clear-out rates. Test against the January clearance file — over-accrual at year-end reverses as margin next year.",
          ar: "يعتم تجار الأزياء والإلكترونيات دعم تخفيضات لتصفية المخزون الموسمي؛ والنسبة المخصومة لكل فئة حكم مبني على معدلات التصريف التاريخية. اختبرها بملف التصفيات في يناير — المخصص الزائد نهاية السنة ينعكس هامشًا في السنة التالية.",
        },
        ref: "IAS 2 · ISA 540 (Revised)",
      },
      {
        area: { en: "Loyalty points & gift cards (IFRS 15)", ar: "نقاط الولاء وبطاقات الهدايا" },
        why: {
          en: "Revenue is recognized net of the expected redemption value of points; breakage (points never redeemed) is an estimate that flows straight to revenue. Challenge redemption-curve data, program-rule changes, and Egyptian tax treatment of unredeemed balances.",
          ar: "يعترف بالإيراد صافيًا من قيمة الاسترداد المتوقعة للنقاط؛ ونسبة عدم الاسترداد تقدير يمر مباشرة إلى الإيراد. تحقق من منحنيات الاسترداد وتغييرات قواعد البرنامج والمعاملة الضريبية للأرصدة غير المستردة.",
        },
        ref: "IFRS 15 / EAS 48 · ISA 540 (Revised)",
      },
      {
        area: { en: "Returns & refund provisions", ar: "مخصصات المرتجعات" },
        why: {
          en: "Online and seasonal return rights require a refund liability re-estimated each period from return experience; a December spike in sales shifts the estimate materially.",
          ar: "تتطلب حقوق الإرجاع أونلاين وموسميًا التزامًا بإعادة أموال يعاد تقديره كل فترة من خبرة الإرجاع؛ وقفزة ديسمبر في المبيعات تحرك التقدير جوهريًا.",
        },
        ref: "IFRS 15 · ISA 540 (Revised)",
      },
    ],
    goingConcern: [
      {
        en: "Like-for-like sales trend by branch — new openings masking decay in the mature estate.",
        ar: "اتجاه المبيعات المقارن لكل فرع — افتتاحات جديدة تحجب تدهور الفروع القائمة.",
      },
      {
        en: "Supplier credit tightening — payment terms shortening while inventory days lengthen.",
        ar: "اشتداد ائتمان الموردين — تقصير آجال السداد بينما تطول أيام المخزون.",
      },
      {
        en: "IFRS 16 lease commitments vs. covenant headroom on facility ratios.",
        ar: "التزامات التأجير مقابل هامش الالتزامات على نسب التسهيلات.",
      },
      {
        en: "Cash conversion cycle deterioration — funding payroll from overdrafts.",
        ar: "تدهور دورة التحول النقدي — تمويل الأجور من السحب على المكشوف.",
      },
    ],
    analytics: [
      {
        en: "POS-to-GL daily-sales reconciliation tested at the branch-day level for a risk-based sample.",
        ar: "مطابقة مبيعات نقاط البيع مع الأستاذ على مستوى الفرع/اليوم لعينة قائمة على المخاطر.",
      },
      {
        en: "Refund and void analytics per cashier terminal — split-second refund patterns are operator fraud.",
        ar: "تحليلات الاسترداد والإلغاء لكل نقطة كاشير — أنماط الاسترداد بفوارق ثوانٍ احتيال موظفين.",
      },
      {
        en: "Gross margin by category anomaly scan vs. prior year and vs. plan.",
        ar: "مسح شواذ الهامش الإجمالي لكل فئة مقارنة بالعام السابق وبالخطة.",
      },
      {
        en: "Shrinkage (count vs. perpetual) by location — persistent negative variance in specific stores.",
        ar: "الفقد (الجرد مقابل النظام المستمر) لكل موقع — انحراف سالب مستمر في فروع بعينها.",
      },
    ],
    inquiries: [
      {
        en: "How is the markdown accrual percentage set per category, and who approves mid-year changes?",
        ar: "كيف تُحدد نسبة مخصص التخفيضات لكل فئة، ومن يعتمد تغييرات منتصف السنة؟",
      },
      {
        en: "What is the breakage assumption on gift cards, and what happened to balances from two years ago?",
        ar: "ما افتراض عدم الاسترداد على بطاقات الهدايا، وماذا حدث لأرصدة ما قبل عامين؟",
      },
      {
        en: "Which branches are scheduled for closure or renegotiation, and are their leases provided for?",
        ar: "أي الفروع مرشحة للإغلاق أو إعادة التفاوض، وهل وُفر مخصص لإيجاراتها؟",
      },
      {
        en: "How do franchisee and consignment sales differ from own-retail in revenue recognition?",
        ar: "كيف يختلف الاعتراف بإيراد الامتيازات والأمانات عن البيع بالتجزئة المباشر؟",
      },
    ],
    extraProcedures: [
      {
        text: {
          en: "Observe the year-end stock count at the flagship and one high-shrinkage store; test count-to-system adjustments.",
          ar: "راقب جرد نهاية السنة في الفرع الرئيسي وفرع واحد مرتفع الفقد؛ واختبر تسويات الجرد مع النظام.",
        },
        ref: "ISA 501",
      },
      {
        text: {
          en: "Reperform revenue cut-off across the New Year weekend at POS-transaction level for five stores.",
          ar: "أعد اختبار استقطاع الإيراد عبر عطلة رأس السنة على مستوى معاملات نقاط البيع في خمسة فروع.",
        },
        ref: "ISA 315 (2019) · ISA 330",
      },
    ],
    extraFraud: [
      {
        en: "Gift-card float: cards activated, sold for cash off-system, and the liability never recognized.",
        ar: "عائم بطاقات الهدايا: بطاقات تُنشط وتُباع نقدًا خارج النظام ولا يُعترف بالالتزام أبدًا.",
      },
    ],
    extraMines: [
      {
        topic: { en: "Principal vs agent for online marketplaces", ar: "أصيل أم وكيل في المنصات الإلكترونية" },
        detail: {
          en: "IFRS 15 indicators (control of the specified good before transfer) determine gross vs net revenue for marketplace/concession arrangements — getting it wrong swings revenue by the full marketplace value.",
          ar: "مؤشرات IFRS 15 (التحكم في السلعة قبل نقلها) تحدد العرض بالإجمالي أو الصافي لترتيبات المنصات والامتيازات — الخطأ فيها يحرك الإيراد بكامل قيمة المنصة.",
        },
        ref: "IFRS 15 / EAS 48",
      },
    ],
    extraRatios: [
      {
        name: { en: "Sell-through rate", ar: "معدل التصريف" },
        benchmark: "Units sold ÷ units received per season; healthy seasonal retail >70%",
        redFlag: {
          en: "Sell-through below plan with flat markdown accruals — the provision is understated.",
          ar: "تصريف دون الخطة مع ثبات مخصص التخفيضات — المخصص مبخس.",
        },
      },
    ],
    extraKams: [
      {
        en: "Revenue recognition across omnichannel sales including loyalty and gift-card breakage.",
        ar: "الاعتراف بالإيراد عبر قنوات البيع المدمجة شاملة نقاط الولاء وبطاقات الهدايا.",
      },
    ],
    extraPitfalls: [
      {
        en: "Treating POS data as evidence without testing its completeness — the feed that drops 3 hours of sales is the one that hides the fraud.",
        ar: "التعامل مع بيانات نقاط البيع كدليل دون اختبار اكتمالها — التغذية التي تسقط ثلاث ساعات من المبيعات هي التي تخفي الاحتيال.",
      },
    ],
  },
}
