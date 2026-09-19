import type { SectorProfileBase } from "./sectors-types"

/** Sector Risk Library — part A: financial services, industry & trade. */
export const SECTORS_A: SectorProfileBase[] = [
  /* ================================================================ */
  /* BANKS & FINANCIAL INSTITUTIONS                                    */
  /* ================================================================ */
  {
    id: "banks",
    cluster: "financial",
    icon: "landmark",
    name: { en: "Banks & Financial Institutions", ar: "البنوك والمؤسسات المالية" },
    tagline: {
      en: "The balance sheet is the product — credit quality and liquidity drive everything.",
      ar: "الميزانية هي المنتج نفسه — جودة الائتمان والسيولة يقودان كل شيء.",
    },
    overview: {
      en: "Banks intermediate deposits into loans and investments, earning net interest income plus fee income from settlements, cards, trade finance and FX. Profitability depends on the spread between funding cost and yield, on non-interest income, and above all on the adequacy of expected credit losses against the loan book. Leverage is inherent — a small error in ECL on a large portfolio moves profit materially — and the regulator (Central Bank of Egypt for banks, FRA for listed NBFI) sets capital, liquidity and classification rules that shape both the accounting and the audit risk. Audit engagements are further shaped by the supervisory examination reports, which the team should read before planning.",
      ar: "تتوسط البنوك الودائع إلى قروض واستثمارات، فتحقق دخلًا من صافي الفوائد إضافة إلى رسوم من التحويلات والبطاقات وتمويل التجارة والعملات. تعتمد الربحية على الفارق بين تكلفة الأموال والعائد، وعلى الدخل خارج الفوائد، وقبل كل شيء على كفاية الخسائر الائتمانية المتوقعة مقابل محفظة القروض. الرافعة المالية طبيعة أصيلة — خطأ صغير في تقدير الخسائر على محفظة كبيرة يحرك الربح بشكل جوهري — والجهة المنظمة (البنك المركزي المصري للبنوك، الهيئة العامة للرقابة المالية لغير المصرفية) تضع قواعد كفاية رأس المال والسيولة والتصنيف التي تشكل المحاسبة ومخاطر المراجعة معًا. وتتأثر المهام كذلك بتقارير التفتيش الرقابي التي يجب أن يقرأها الفريق قبل التخطيط.",
    },
    revenueModel: {
      en: "Money enters as interest and fees recognized over time: interest accrues on facilities (effective interest under IFRS 9 / EAS 47), while fees are either earned at settlement (transaction services) or amortized across the relationship (commitment and arrangement fees). Cut-off pressure concentrates at quarter- and year-end on accrued interest, on restructuring modifications that reset the schedule, and on FX revaluation gains/losses on the open position.",
      ar: "يدخل المال كفوائد ورسوم تُثبت بمرور الوقت: تستحق الفوائد على التسهيلات (العائد الفعلي وفق IFRS 9 / المعيار المصري 47)، بينما تُحقق الرسوم إما عند التسوية (خدمات المعاملات) أو تُوزع على مدى العلاقة (رسوم الالتزامات والترتيب). يتركز ضغط الاستقطاع في نهاية الأرباع والسنة على الفوائد المستحقة، وعلى تعديلات إعادة الجدولة التي تعيد ضبط الجدول، وعلى مكاسب/خسائر إعادة تقييم العملات على المركز المفتوح.",
    },
    significantAccounts: [
      {
        account: { en: "Loans & advances to customers", ar: "القروض والتسهيلات للعملاء" },
        assertions: ["EX", "VA", "C"],
        why: {
          en: "The largest asset; valuation depends on staging and ECL — the model, not the voucher, is the evidence.",
          ar: "أكبر الأصول؛ التقييم يتوقف على التدرج والخسائر المتوقعة — النموذج لا المستند هو الدليل.",
        },
      },
      {
        account: { en: "Expected credit losses (ECL)", ar: "مخصص الخسائر الائتمانية المتوقعة" },
        assertions: ["VA", "PR"],
        why: {
          en: "Forward-looking macro scenarios and PD/LGD judgments; a standing significant risk.",
          ar: "سيناريوهات اقتصادية كلية تطلعية وأحكام احتمال التعثر والخسارة؛ خطر جوهري قائم دائمًا.",
        },
      },
      {
        account: { en: "Investment portfolio (debt securities)", ar: "محفظة الاستثمار (أوراق مالية دائنة)" },
        assertions: ["VA", "EX", "CL"],
        why: {
          en: "HTC/AC/FVTPL classification drives P&L volatility; fair values of unquoted paper need models.",
          ar: "التصنيف (بالتكلفة المطفأة/بالقيمة العادلة) يحرك تذبذب الأرباح؛ والقيم العادلة للأوراق غير المقيدة تحتاج نماذج.",
        },
      },
      {
        account: { en: "Customer deposits", ar: "ودائع العملاء" },
        assertions: ["C", "EX"],
        why: {
          en: "The funding base — completeness of balances and interest expense accruals at scale.",
          ar: "قاعدة التمويل — اكتمال الأرصدة واستحقاقات مصروف الفوائد على نطاق واسع.",
        },
      },
      {
        account: { en: "Fee & commission income", ar: "إيرادات الرسوم والعمولات" },
        assertions: ["C", "CO"],
        why: {
          en: "High-volume, low-value streams (transfers, cards) where completeness leaks silently.",
          ar: "تدفقات عالية الحجم صغيرة القيمة (تحويلات، بطاقات) يتسرب منها الاكتمال بصمت.",
        },
      },
    ],
    inherentRisks: [
      {
        title: { en: "ECL model judgment", ar: "حكم نموذج الخسائر المتوقعة" },
        detail: {
          en: "Staging transfers (performing → underperforming → non-performing), PD/LGD overlays, cure evidence, and forward-looking adjustments are all management estimates. A one-notch staging error on a corporate name can move ECL by multiples.",
          ar: "الانتقال بين المراحل (منتظِم → تحت المتابعة → متعثر)، وتعديلات احتمال التعثر والخسارة، وأدلة الشفاء، والتعديلات التطلعية — كلها تقديرات للإدارة. خطأ درجة واحدة في تصنيف عميل شركات قد يضاعف الخسارة المتوقعة.",
        },
        refs: ["IFRS 9", "EAS 47", "ISA 540 (Revised)", "ESA 540"],
      },
      {
        title: { en: "Evergreening & forbearance", ar: "الإقراض لسداد القروض القائمة" },
        detail: {
          en: "New facilities granted so the borrower can service old ones mask true delinquency and keep exposures in a lower ECL stage. Restructurings need genuine viability assessment, not paperwork.",
          ar: "تسهيلات جديدة تُمنح ليمول المقترض أقساط القديم، فتخفي التعثر الحقيقي وتُبقي التعرض في مرحلة أقل حدة. تحتاج إعادة الهيكلة تقييمًا حقيقيًا لجدوى العميل لا أوراقًا فقط.",
        },
        refs: ["IFRS 9 B5.5", "CBE rules"],
      },
      {
        title: { en: "Classification & NPL shifts", ar: "تغيير تصنيف التعثر" },
        detail: {
          en: "Regulatory classification (CBE) and accounting staging differ; movements between categories around year-end change both provisions and the supervisory ratios disclosed.",
          ar: "التصنيف الرقابي (البنك المركزي) يختلف عن التدرج المحاسبي؛ والتحركات بين الفئات حول نهاية السنة تغير المخصصات والنسب الرقابية المفصح عنها معًا.",
        },
        refs: ["CBE circulars", "IFRS 7", "IFRS 9"],
      },
      {
        title: { en: "Treasury fair values", ar: "القيم العادلة للخزانة" },
        detail: {
          en: "Derivative and unquoted positions valued through models (DLOM, prepayment assumptions) with limited observable inputs — estimate risk concentrated in a small desk.",
          ar: "مراكز مشتقة وأوراق غير مقيمة تُقيَّم عبر نماذج (خصم عدم القابلية للتداول، افتراضات السداد المبكر) بمدخلات سوقية محدودة — خطر تقديرات مركز في مكتب صغير.",
        },
        refs: ["IFRS 13", "ISA 540 (Revised)"],
      },
      {
        title: { en: "IT-dependent processes", ar: "عمليات معتمدة على تقنية المعلومات" },
        detail: {
          en: "Interest accrual, staging engines and fee calculations are system-automated; an untested configuration change corrupts millions of rows before anyone sees a voucher.",
          ar: "استحقاق الفوائد ومحركات التدرج وحساب الرسوم مؤتمتة؛ تغيير إعدادات غير مختبر يفسد ملايين السجلات قبل أن يرى أحد أي مستند.",
        },
        refs: ["ISA 315 (2019)", "ISA 330"],
      },
    ],
    fraudRedFlags: [
      { en: "Round-trip deposits at period-end to inflate the funding base or liquidity ratios.", ar: "ودائع متداولة ذهابًا وإيابًا في نهاية الفترة لتضخيم قاعدة التمويل أو نسب السيولة." },
      { en: "Insider or related-party lending concealed through syndication or offshore vehicles.", ar: "إقراض لأطراف ذات علاقة أو متنفذين يُخفى عبر قروض مشتركة أو كيانات خارجية." },
      { en: "Borrowers whose deposits grow in lockstep with their loans (funded exposure).", ar: "عملاء تنمو ودائعهم بالتوازي مع قروضهم (تعرض ممول من الداخل)." },
      { en: "Fees reversed or deferred to smooth income between quarters.", ar: "رسوم تُعكس أو تُؤجل لتمهيد الدخل بين الأرباع." },
      { en: "Manual ECL overrides without documented rationale or approval.", ar: "تجاوزات يدوية للخسائر المتوقعة دون مبرر موثق أو اعتماد." },
    ],
    minefields: [
      {
        topic: { en: "ECL staging & modifications", ar: "التدرج وتعديلات القروض" },
        detail: {
          en: "A modification resets the contractual cash flows: derecognition vs modification accounting, and whether a cure requires a probation period, changes provisions materially.",
          ar: "التعديل يعيد ضبط التدفقات النقدية التعاقدية: المعالجة كإلغاء اعتراف مقابل تعديل، وهل يتطلب الشفاء فترة اختبار — كل ذلك يغير المخصصات جوهريًا.",
        },
        ref: "IFRS 9 / EAS 47",
      },
      {
        topic: { en: "SPPI & business-model classification", ar: "اختبار SPPI ونموذج الأعمال" },
        detail: {
          en: "Debt instruments with equity-linked or FX features fail SPPI and hit FVTPL, creating P&L volatility management prefers to avoid — check the contract, not the label.",
          ar: "الأدوات الدائنة بسمات مرتبطة بأسهم أو عملات تخفق في اختبار SPPI فتُقاس بالقيمة العادلة عبر الربح والخسارة — افحص العقد لا التسمية.",
        },
        ref: "IFRS 9 / EAS 47",
      },
      {
        topic: { en: "Regulatory vs accounting provision gap", ar: "الفارق بين المخصص الرقابي والمحاسبي" },
        detail: {
          en: "Egyptian banks hold provisions per CBE rules; where these differ from IFRS 9 ECL, the difference sits in capital and reserves and must be explained, not netted silently.",
          ar: "تحتفظ البنوك المصرية بمخصصات وفق قواعد البنك المركزي؛ حيث تختلف عن خسائر IFRS 9 يجب شرح الفارق ضمن حقوق الملكية لا طمسه بصمت.",
        },
        ref: "IFRS 9 vs CBE",
      },
    ],
    regulatory: {
      en: "The Central Bank of Egypt licenses banks and sets classification, provisioning, liquidity (LCR-like) and large-exposure rules; Law 194/2020 governs the sector. Listed banks also answer to FRA (EGX disclosure) and to the EGP 100m+ paid-in capital requirements. Supervisory examination reports are a primary audit input — request them, and reconcile regulatory returns to the GL before testing anything else.",
      ar: "البنك المركزي المصري يرخص للبنوك ويضع قواعد التصنيف والتخصيص والسيولة والتعريضات الكبيرة؛ ويحكم القطاع القانون 194 لسنة 2020. والبنوك المقيدة تخضع أيضًا للهيئة العامة للرقابة المالية (إفصاحات البورصة) ومتطلبات رأس المال المدفوع. تقارير التفتيش الرقابي مدخل أساسي للمراجعة — اطلبها، وطابق الإقرارات الرقابية مع الدفتر العام قبل أي اختبار آخر.",
    },
    ratios: [
      { name: { en: "NPL ratio", ar: "نسبة القروض غير المنتظمة" }, benchmark: "NPLs ÷ total loans", redFlag: { en: "Falling NPL while restructured volumes rise — risk is moving, not curing.", ar: "انخفاض التعثر مع ارتفاع إعادة الجدولة — الخطر ينتقل ولا يُشفى." } },
      { name: { en: "Cost of risk", ar: "تكلفة المخاطرة" }, benchmark: "ECL charge ÷ avg loans", redFlag: { en: "Charge below peer banks in the same macro year.", ar: "تحميل أقل من البنوك المماثلة في العام الكلي نفسه." } },
      { name: { en: "Coverage ratio", ar: "نسبة التغطية" }, benchmark: "ECL ÷ NPLs", redFlag: { en: "Coverage drifting down while staging mix worsens.", ar: "تراجع التغطية مع تدهور مزيج المراحل." } },
      { name: { en: "Loans-to-deposits", ar: "القروض إلى الودائع" }, benchmark: "Loans ÷ customer deposits", redFlag: { en: "Sudden year-end deposit inflows that reverse in January.", ar: "تدفقات ودائع مفاجئة نهاية السنة تُعكس في يناير." } },
    ],
    procedures: [
      { text: { en: "Obtain the ECL model documentation (segmentation, PD/LGD, forward-looking overlays) and re-perform the staging for a risk-based sample of the largest and recently restructured exposures.", ar: "احصل على وثائق نموذج الخسائر (التقسيم، احتمال التعثر والخسارة، التعديلات التطلعية) وأعد تنفيذ التدرج لعينة مرتكزة على المخاطر من أكبر التعرضات وغيرها مُعاد هيكلتها حديثًا." }, ref: "ISA 330 / IFRS 9" },
      { text: { en: "Test cure (recovery to stage 1) evidence: sustained contractual payments during the probation window, not goodwill or temporary support.", ar: "اختبر أدلة الشفاء (العودة للمرحلة الأولى): سداد تعاقدي منتظم خلال فترة الاختبار، لا تسويات ودية أو دعم مؤقت." }, ref: "IFRS 9 B5.5" },
      { text: { en: "Trace a sample of new facilities granted within 90 days of another exposure falling due — screen for evergreening and assess the borrower's standalone repayment capacity.", ar: "تتبع عينة من التسهيلات الممنوحة خلال 90 يومًا من استحقاق تعرض آخر — انتعش الإقراض الدائري وقيّم قدرة العميل على السداد بمعزل عن ذلك." }, ref: "ISA 240" },
      { text: { en: "Reconcile the CBE regulatory returns (positions, provisions, related-party exposures) to the general ledger line by line and investigate every difference.", ar: "طابق الإقرارات الرقابية للبنك المركزي (المراكز والمخصصات وتعرضات الأطراف ذات العلاقة) مع الدفتر العام سطرًا سطرًا وحقق في كل فرق." }, ref: "ISA 330" },
      { text: { en: "For treasury positions, independently verify quoted prices, and for unquoted/modelled instruments challenge the valuation report and DLOM assumptions against comparable transactions.", ar: "لمراكز الخزانة، تحقق باستقلال من أسعار السوق، وللأوراق غير المقيمة ناقش تقرير التقييم وافتراضات الخصم مقابل صفقات مماثلة." }, ref: "IFRS 13 / ISA 540" },
      { text: { en: "Test automated interest and fee accruals through ITGCs and a re-performance sample across a period boundary (31 Dec → 1 Jan) to prove cut-off.", ar: "اختبر استحقاقات الفوائد والرسوم المؤتمتة عبر ضوابط تقنية المعلومات وإعادة تنفيذ عينة عبر حدود الفترة (31 ديسمبر → 1 يناير) لإثبات الاستقطاع." }, ref: "ISA 315 / ISA 330" },
    ],
    kams: [
      { en: "Expected credit losses on the loan portfolio (model inputs and macro overlays).", ar: "الخسائر الائتمانية المتوقعة على محفظة القروض (مدخلات النموذج والتعديلات الكلية)." },
      { en: "Classification and measurement of the investment securities portfolio.", ar: "التصنيف والقياس لمحفظة الأوراق المالية." },
      { en: "Regulatory capital adequacy computation and disclosure.", ar: "احتساب كفاية رأس المال الرقابي والإفصاح عنها." },
    ],
    pitfalls: [
      { en: "Testing provisions on the GL balance while the loan system holds the truth — always reconcile the two first.", ar: "اختبار المخصص على رصيد الدفتر العام بينما الحقيقة في نظام القروض — طابقهما أولًا دائمًا." },
      { en: "Treating regulatory examination reports as background reading instead of audit evidence and misstatement leads.", ar: "التعامل مع تقارير التفتيش الرقابي كقراءة خلفية بدل كونها دليل مراجعة ومؤشرات تحريف." },
    ],
    relatedSections: ["industry-risks", "risk-assessment", "receivables", "revenue"],
  },

  /* ================================================================ */
  /* MICROFINANCE & CONSUMER LENDING                                   */
  /* ================================================================ */
  {
    id: "microfinance",
    cluster: "financial",
    icon: "hand-coins",
    name: { en: "Microfinance & Consumer Lending", ar: "التمويل الأصغر والإقراض الاستهلاكي" },
    tagline: {
      en: "Thousands of small tickets — the portfolio behaves statistically, but refinancing hides delinquency.",
      ar: "آلاف العقود الصغيرة — المحفظة تتصرف إحصائيًا، لكن إعادة التمويل تخفي التعثر.",
    },
    overview: {
      en: "Microfinance institutions, consumer finance and fintech lenders underwrite thousands of small, short-tenor loans where individual file review is impossible and portfolio statistics are the audit unit. Revenue is interest and origination fees amortized over short lives; profit lives or dies by the write-off policy and the ECL roll-rates. Egyptian MFIs are supervised by the FRA (Consumer Finance Law 18/2020 and Microfinance Law 141/2014 as amended), with caps on pricing, provisioning floors and data reporting to the regulator's credit bureau (i-Score). Credit history is thin, collateral is rare, and group/pos financing models shift collection risk onto merchants — all of it surfaces first in the roll-rate analysis.",
      ar: "مؤسسات التمويل الأصغر وتمويل المستهلك ومقرضات التقنية المالية تمنح آلاف القروض الصغيرة قصيرة الأجل حيث يستحيل فحص كل ملف وتصبح إحصاءات المحفظة هي وحدة المراجعة. الإيراد فوائد ورسوم منح تُوزع على آجال قصيرة؛ والربح يصمد أو يسقط بسياسة الشطب ومعدلات انتقال الخسائر. تخضع المؤسسات المصرية للهيئة العامة للرقابة المالية (قانون تمويل المستهلك 18 لسنة 2020 وقانون التمويل الأصغر 141 لسنة 2014 وتعديلاته)، بسقوف للتسعير وحدود أدنى للتخصص وتقارير لمكتب الائتمان (i-Score). تاريخ الائتمان ضعيف والضمان نادر، ونماذج التمويل عبر التجار تحمل مخاطر التحصيل للموزعين — وكل ذلك يظهر أولًا في تحليل معدلات الانتقال.",
    },
    revenueModel: {
      en: "Interest accrues daily on outstanding balances; origination fees are deferred and amortized over tenors measured in months, so a surge of originations in December barely touches that month's P&L — the temptation to book fees upfront is structural. Delinquency-driven late fees are recognized only while the loan remains within policy; once written off, the income stops.",
      ar: "تستحق الفوائد يوميًا على الأرصدة القائمة؛ ورسوم المنح تُؤجل وتُوزع على آجال تقاس بالشهور، لذا فانطلاقة منح ضخمة في ديسمبر بالكاد تمس أرباح الشهر — والإغراء بإثبات الرسوم مقدماً خلل بنيوي. ورسوم التأخير تُعرف فقط ما دام القرض ضمن السياسة؛ وبعد الشطب يتوقف الدخل.",
    },
    significantAccounts: [
      {
        account: { en: "Loan portfolio & ECL", ar: "محفظة القروض وخسائرها المتوقعة" },
        assertions: ["VA", "EX", "C"],
        why: { en: "Roll-rates and write-off timing decide profit; vintages tell the truth.", ar: "معدلات الانتقال وتوقيت الشطب تحدد الربح؛ دفعات الإصدار تقول الحقيقة." },
      },
      {
        account: { en: "Deferred origination fees", ar: "رسوم المنح المؤجلة" },
        assertions: ["VA", "CO"],
        why: { en: "Amortization period is gamed when vintages churn quickly.", ar: "فترة التوزيع تُتلاعب بها عندما تتقلب الدفعات بسرعة." },
      },
      {
        account: { en: "Merchant / pos settlements payable", ar: "مستحقات التجار (نقاط البيع)" },
        assertions: ["C", "A"],
        why: { en: "High-volume pass-through balances shared with merchants.", ar: "أرصدة عالية الحكم تمر عبر حسابات وسيطة مع التجار." },
      },
      {
        account: { en: "Regulatory capital & provisions", ar: "رأس المال والتخصصات النظامية" },
        assertions: ["VA", "PR"],
        why: { en: "FRA floors bind when collections weaken.", ar: "الحدود الدنيا للهيئة تقيد عند ضعف التحصيل." },
      },
    ],
    inherentRisks: [
      {
        title: { en: "Refinancing chains hiding delinquency", ar: "سلاسل إعادة التمويل المخفية للتعثر" },
        detail: { en: "Top-up loans to distressed borrowers keep accounts 'current' on paper. Re-age the portfolio against actual repayment events — the roll-rate migration matrix exposes chains instantly.", ar: "قروض إضافية لعملاء متعثرين تُبقي الحسابات 'منتظمة' شكلاً. أعد حساب عمر المحفظة مقابل أحداث سداد فعلية — مصفوفة الانتقال تكشف السلاسل فوراً." },
        refs: ["ISA 240", "IFRS 9"],
      },
      {
        title: { en: "Write-off policy vs regulatory floors", ar: "سياسة الشطب مقابل الحدود النظامية" },
        detail: { en: "Write-offs delayed beyond FRA timelines flatter the portfolio and ECL; write-offs taken early create recovery income later — timing is the manipulation lever.", ar: "تأخير الشطب عن مهل الهيئة يجمل المحفظة والخسائر؛ والشطب المبكر يخلق دخل استرداد لاحقاً — التوقيت هو أداة التلاعب." },
        refs: ["FRA 141/2014", "IFRS 9"],
      },
      {
        title: { en: "Interest on non-performing loans", ar: "إيراد الفوائد على القروض المتعثرة" },
        detail: { en: "Accrual must stop per policy when accounts age past thresholds; systems that keep accruing inflate both income and the ECL offset.", ar: "يجب أن يتوقف الاستحقاق وفق السياسة عند تجاوز أعمار محددة؛ والأنظمة التي تستمر تضخم الدخل ومقابل الخسائر معاً." },
        refs: ["IFRS 9", "EAS 47"],
      },
      {
        title: { en: "Merchant collusion in pos financing", ar: "تواطؤ التجار في تمويل نقاط البيع" },
        detail: { en: "Fictitious transactions generate instant disbursements that are split and never repaid — first-party fraud routed through the distribution channel.", ar: "معاملات وهمية تولد صرفاً فورياً يُقسم ولا يُسدد أبداً — تزييف عبر قناة التوزيع نفسها." },
        refs: ["ISA 240"],
      },
    ],
    fraudRedFlags: [
      { en: "Vintages with materially better performance than every other cohort (channel stuffing via loans).", ar: "دفعات إصدار أداؤها أفضل جوهرياً من كل دفعة أخرى (ضخ قروض عبر القنوات)." },
      { en: "Same-device or same-address clusters across many 'independent' borrowers.", ar: "تجمعات نفس الجهاز أو العنوان عبر مقترضين 'مستقلين' كثيرين." },
      { en: "Collections concentrated in the last days of the month (window dressing for the delinquency report).", ar: "تحصيلات تتركز في آخر أيام الشهر (تجميل تقرير التعثر)." },
      { en: "Recovery income on loans written off years earlier (write-off parking).", ar: "دخل استرداد على قروض شُطبت منذ سنوات (مواقف الشطب)." },
    ],
    minefields: [
      { topic: { en: "ECL with shallow history", ar: "خسائر متوقعة بتاريخ ضحل" }, detail: { en: "Young lenders lack through-the-cycle data; models lean on development curves — the simplification option in IFRS 9 B5.5 must be disclosed honestly.", ar: "المقرضون الجدد يفتقرون لبيانات دورة كاملة؛ تعتمد النماذج على منحنيات تنمية — ويجب الإفصاح بأمانة عن تبسيط IFRS 9." }, ref: "IFRS 9 B5.5" },
      { topic: { en: "Revenue — significant financing component", ar: "الإيراد — عنصر تمويل جوهري" }, detail: { en: "Zero-interest pos installments with merchant-funded fees allocate financing income between merchant commissions and interest.", ar: "أقساط بلا فوائد بتمويل رسوم من التجار توزع دخل التمويل بين عمولات التاجر والفائدة." }, ref: "IFRS 15 / EAS 48" },
    ],
    regulatory: {
      en: "FRA licenses and supervises under Law 141/2014 (microfinance) and Law 18/2020 (consumer finance), with pricing caps, provisioning rules and mandatory i-Score reporting; fintech payment-adjacent lending adds CBE's non-cash payment rules. Request the FRA inspection letters and the i-Score portfolio extract — the bureau sees the borrower's total exposure your client cannot.",
      ar: "الهيئة العامة للرقابة المالية ترخص وتشرف وفق القانون 141 لسنة 2014 (التمويل الأصغر) والقانون 18 لسنة 2020 (تمويل المستهلك)، بسقوف تسعير وقواعد تخصص وإبلاغ إلزامي لمكتب i-Score؛ ويضيف الإقراض المرتبط بالمدفوعات قواعد البنك المركزي للمدفوعات غير النقدية. اطلب خطابات تفتيش الهيئة ومستخرج المحفظة من مكتب الائتمان — المكتب يرى إجمالي تعثر المقترض الذي لا يراه عميلك.",
    },
    ratios: [
      { name: { en: "Par rate (current ratio)", ar: "نسبة الانتظام" }, benchmark: "On-time balances ÷ portfolio", redFlag: { en: ">95% par with thin collections infrastructure.", ar: "انتظام يتجاوز 95% مع بنية تحصيل هزيلة." } },
      { name: { en: "Roll-rate 30→60", ar: "الانتقال من 30 إلى 60 يوماً" }, benchmark: "Migration % by vintage", redFlag: { en: "Roll-rates that improve exactly when the growth targets need them to.", ar: "معدلات انتقال تتحسن بالضبط عندما تحتاجها مستهدفات النمو." } },
      { name: { en: "Cost of risk", ar: "تكلفة المخاطرة" }, benchmark: "ECL charge ÷ avg portfolio", redFlag: { en: "Charge falls while origination growth accelerates (front-loading).", ar: "التحميل ينخفض بينما يتسارع نمو المنح (تحميل أمامي)." } },
    ],
    procedures: [
      { text: { en: "Re-build the roll-rate migration matrix from raw repayment data for at least four quarters and reconcile it to the reported aging — the matrix is the single highest-yield procedure in this sector.", ar: "أعد بناء مصفوفة انتقال التعثر من بيانات السداد الخام لأربعة أرباع على الأقل وطابقها بالأعمار المعلنة — هذه المصفوفة أعلى إجراء مردوداً في هذا القطاع." }, ref: "ISA 330" },
      { text: { en: "Test top-up (refinancing) chains: extract loans granted to borrowers with an existing facility within 60 days, and re-age the combined exposure.", ar: "اختبر سلاسل إعادة التمويل: استخرج القروض الممنوحة لمقترضين لديهم تسهيل قائم خلال 60 يوماً، وأعد حساب عمر التعرض المجموع." }, ref: "ISA 240" },
      { text: { en: "Verify the write-off log against FRA timelines and trace recoveries after write-off to cash, not to new disbursements.", ar: "تحقق من سجل الشطب مقابل مهل الهيئة وتتبع الاستردادات بعد الشطب إلى النقد لا إلى صرف جديد." }, ref: "FRA rules" },
      { text: { en: "For pos/product financing, sample disbursements against delivery evidence (IMEI capture, shipping) to cut fictitious-transaction fraud.", ar: "لتمويل السلع عبر نقاط البيع، اختبر عينة من الصرف مقابل أدلة التسليم (تسجيل الأجهزة، الشحن) لكشف معاملات وهمية." }, ref: "ISA 240" },
      { text: { en: "Re-perform the ECL model on a sample of vintages and challenge the development-curve assumptions with actual loss emergence.", ar: "أعد تنفيذ نموذج الخسائر على عينة من دفعات الإصدار وناقش منحنيات التنمية مقابل خسائر فعلية ظاهرة." }, ref: "ISA 540" },
    ],
    kams: [
      { en: "Allowance for expected credit losses and portfolio quality (roll-rates and vintage performance).", ar: "مخصص الخسائر الائتمانية وجودة المحفظة (معدلات الانتقال وأداء الدفعات)." },
      { en: "Regulatory compliance: pricing caps and provisioning floors.", ar: "الالتزام التنظيمي: سقوف التسعير وحدود التخصص." },
    ],
    pitfalls: [
      { en: "Auditing the summarized aging report instead of rebuilding it from transaction-level repayments.", ar: "مراجعة تقرير الأعمار الملخص بدل إعادة بنائه من السدود على مستوى المعاملات." },
      { en: "Accepting 'portfolio performs' without one device-level or address-level fraud screen.", ar: "قبول 'انتظام المحفظة' دون فحص تزييف واحد على مستوى الجهاز أو العنوان." },
    ],
    relatedSections: ["industry-risks", "risk-assessment"],
  },

  /* ================================================================ */
  /* INSURANCE                                                          */
  /* ================================================================ */
  {
    id: "insurance",
    cluster: "financial",
    icon: "umbrella",
    name: { en: "Insurance", ar: "التأمين" },
    tagline: {
      en: "IFRS 17 turned insurance accounting into an actuarial exercise — the liability is a model.",
      ar: "حوّل IFRS 17 محاسبة التأمين إلى تمرين اكتواري — الالتزام نفسه نموذج.",
    },
    overview: {
      en: "Insurers collect premiums today and pay claims over years, so every reported number is an estimate of future cash flows discounted and risk-adjusted. IFRS 17 (mandatory in Egypt from 2026 annual reporting per FRA) splits business into measurement buckets (PAA, VFA, GMM), forces onerous-contract testing at the group level, and redefines revenue so that top-line collapses relative to IFRS 4 legacy numbers. Egyptian insurers are supervised by the FRA under Law 10/1981 and its amendments (notably Law 118/2008 and decree-based enhancements), with solvency margins, technical-provision rules and investment restrictions; Motor Third-Party Liability and medical business dominate volume, with takaful windows running parallel models. The audit therefore leans on actuarial specialists, on data-quality of policy admin systems, and on reconciliations between the actuarial model output and the GL.",
      ar: "تجمع شركات التأمين أقساطاً اليوم وتدفع تعويضات عبر سنوات، فكل رقم معلن تقدير لتدفقات نقدية مستقبلية مخصومة ومعدلة بالمخاطر. يقسم IFRS 17 (الإلزامي في مصر للتقارير السنوية من 2026 بقرار الهيئة) النشاط إلى فئات قياس (PAA وVFA وGMM)، ويفرض اختبار العقود المجحفة على مستوى المجموعة، ويعيد تعريف الإيراد بحيث ينكمش رقم الأعمال مقارنة بأرقام IFRS 4. تخضع شركات التأمين المصرية للهيئة العامة للرقابة المالية وفق القانون 10 لسنة 1981 وتعديلاته، بهوامش ملاءة وقواعد للمخصصات الفنية وقيود استثمار؛ ويهيمن التأمين الإلزامي على السيارات والطبي على الحجم، مع نوافذ التكافل بنماذج موازية. لذا تستند المراجعة إلى خبراء الاكتوارية، وجودة بيانات أنظمة إدارة الوثائق، والمطابقات بين مخرجات النموذج الاكتواري والدفتر العام.",
    },
    revenueModel: {
      en: "Premiums are unearned at receipt and are recognized as coverage is provided; acquisition costs are capitalized as contract assets and amortized against the earned pattern. Under IFRS 17, the insurance revenue line presents expected claim and expense coverage rather than gross written premium, and reinsurance held changes both revenue and the liability.",
      ar: "تكون الأقساط غير مكتسبة عند التحصيل وتُعرف بتقديم التغطية؛ وتُرسمل تكاليف الاقتناء كأصول عقدية وتُستهلك وفق نمط الكسب. بموجب IFRS 17 يعرض بند إيراد التأمين التغطية المتوقعة للمطالبات والمصروفات لا القسط المكتتب إجمالاً، وإعادة التأمين المعدلة تغير الإيراد والالتزام معاً.",
    },
    significantAccounts: [
      { account: { en: "Insurance contract liabilities", ar: "التزامات عقود التأمين" }, assertions: ["VA", "C", "PR"], why: { en: "Actuarial estimates of future claims, discount rates and risk adjustment — the balance sheet's core.", ar: "تقديرات اكتوارية للمطالبات المستقبلية ومعدلات الخصم وتعديل المخاطر — جوهر الميزانية." } },
      { account: { en: "Claims provisions (IBNR + case reserves)", ar: "مخصصات المطالبات (المتحدثة والمقدرة)" }, assertions: ["VA", "C"], why: { en: "Development triangles and payment-pattern assumptions; the classic estimate risk.", ar: "مثلثات النمو وافتراضات نمط السداد؛ خطر التقدير الكلاسيكي." } },
      { account: { en: "Reinsurance assets", ar: "أصول إعادة التأمين" }, assertions: ["EX", "VA"], why: { en: "Recoverable estimates plus reinsurer credit risk; cession timing moves profit.", ar: "تقديرات المسترد ومخاطر ائتمان المعيد؛ وتوقيت التنازل يحرك الربح." } },
      { account: { en: "Investment portfolio", ar: "محفظة الاستثمار" }, assertions: ["VA", "EX"], why: { en: "Backs the liabilities; fair value through P&L or OCI classification matters under B5 model.", ar: "تدعم الالتزامات؛ وتصنيف القيمة العادلة عبر الأرباح أو الدخل الشامل مؤثر." } },
      { account: { en: "Premium revenue & deferred acquisition costs", ar: "إيراد الأقساط وتكاليف الاقتناء المؤجلة" }, assertions: ["C", "CO", "VA"], why: { en: "Earned/unearned split and commission capitalization patterns are judgemental.", ar: "تقسيم المكتسب/غير المكتسب ورسملة العمولات حكمان مهنيان." } },
    ],
    inherentRisks: [
      { title: { en: "IFRS 17 transition & model risk", ar: "التحول إلى IFRS 17 ومخاطر النموذج" }, detail: { en: "First-time adoption requires the modified retrospective or fair-value approach, data going back years, discount curves, and CSERCMS layering — every assumption is a misstatement candidate.", ar: "التطبيق الأول يتطلب المنهج المعدل بأثر رجعي أو القيمة العادلة، وبيانات تمتد سنوات، ومنحنيات خصم، وتفكيك CSERCMS — كل افتراض مرشح للتحريف." }, refs: ["IFRS 17", "EAS (insurance)"] },
      { title: { en: "Reserving adequacy", ar: "كفاية الاحتياطيات" }, detail: { en: "IBNR relies on development factors from history that new products, inflation in claims (medical) or court-awarded motor liabilities make stale.", ar: "تعتمد المطالبات غير المبلغ عنها على عوامل نمو تاريخية تصبح بالية أمام منتجات جديدة أو تضخم المطالبات (الطبي) أو أحكام محاكم السيارات." }, refs: ["ISA 540", "IFRS 17"] },
      { title: { en: "Onerous contracts & LAC", ar: "العقود المجحفة وتكلفة الاستحقاق" }, detail: { en: "Loss-compulsory motor and price-war medical portfolios can be loss-making at group level; the loss component crystallizes losses earlier than before.", ar: "محافظ السيارات الإلزامية وحروب أسعار الطبي قد تكون خاسرة على مستوى المجموعة؛ ومكوّن الخسارة يرسّخ الخسائر أبكر من السابق." }, refs: ["IFRS 17"] },
      { title: { en: "Reinsurance recoverable & reinsurer credit", ar: "مستردات إعادة التأمين وائتمان المعيد" }, detail: { en: "Ceded balances with unregulated or offshore reinsurers concentrate credit risk and inflate profit when cessions are booked but disputes follow.", ar: "أرصدة متنازل عنها لمعيدين غير خاضعين للرقابة تركز مخاطر الائتمان وتضخم الربح عند حجز التنازلات ثم تأتي النزاعات." }, refs: ["IFRS 17", "ISA 540"] },
    ],
    fraudRedFlags: [
      { en: "Premium receivables from brokers aged beyond commission cycles (channel financing).", ar: "ذمم أقساط لدى الوسطاء تتجاوز أعمارها دورات العمولة (تمويل عبر القناة)." },
      { en: "Late-year reinsurance cessions that exactly offset underwriting losses.", ar: "تنازلات إعادة تأمين أواخر السنة تعادل خسائر الاكتتاب بدقة." },
      { en: "Motor claims settled rapidly for policies sold by affiliated agencies.", ar: "تسوية سريعة لمطالبات سيارات لوثائق باعتها وكالات مرتبطة." },
      { en: "Manual top-side adjustments between actuarial output and GL.", ar: "تسويات يدوية علوية بين مخرجات الاكتوارية والدفتر العام." },
    ],
    minefields: [
      { topic: { en: "Contract boundary & grouping", ar: "حدود العقد والتجميع" }, detail: { en: "Annual-renewable portfolios can be treated as single contracts spanning decades under IFRS 17 — grouping at portfolio/annual cohort level and the LDP test change everything.", ar: "يمكن معاملة المحافظ السنوية التجدد كعقد واحد يمتد عقوداً بموجب IFRS 17 — التجميع على مستوى المحفظة والسنة واختبار توقيت الاعتراف بالخسارة يغيران كل شيء." }, ref: "IFRS 17" },
      { topic: { en: "Discount rates & risk adjustment", ar: "معدلات الخصم وتعديل المخاطر" }, detail: { en: "Bottom-up vs top-down curves and the confidence-level choice for RA are disclosed judgments with direct P&L impact.", ar: "المنحنيات التصاعدية مقابل التنازلية ومستوى الثقة لتعديل المخاطر أحكام مفصح عنها بأثر مباشر على الربح." }, ref: "IFRS 17 / IFRS 9 boundary" },
      { topic: { en: "Takaful windows", ar: "نوافذ التكافل" }, detail: { en: "Participant funds are off-P&L; surplus distribution to participants vs shareholders needs policy tracking through the whole chain.", ar: "صناديق المشتركين خارج قائمة الأرباح؛ وتوزيع الفائض بين المشتركين والمساهمين يتطلب تتبع السياسة عبر السلسلة كاملة." }, ref: "FRA takaful rules" },
    ],
    regulatory: {
      en: "The FRA supervises insurers under Law 10/1981 and subsequent amendments: licensing, solvency margins, technical-provision certification (actuarial sign-off), investment limits per asset class, and mandatory EGX disclosure for listed companies. Motor third-party liability tariffs are regulated, and medical portfolio loss ratios are monitored. FRA has mandated IFRS 17 adoption for annual periods — confirm the entity's transition approach and the FRA filing calendar with the engagement team.",
      ar: "تشرف الهيئة العامة للرقابة المالية على شركات التأمين وفق القانون 10 لسنة 1981 وتعديلاته: الترخيص وهوامش الملاءة واعتماد المخصصات الفنية (توقيع اكتواري) وحدود الاستثمار لكل فئة أصول، والإفصاح الإلزامي للشركات المقيدة. تسعير مسؤولية السيارات الإلزامي منظَّم، ونسب خسائر المحافظ الطبية مراقبة. وقد ألزمت الهيئة بتطبيق IFRS 17 — أكد نهج التحول لدى الكيان وتقويم الإيداعات مع فريق المهمة.",
    },
    ratios: [
      { name: { en: "Loss ratio", ar: "نسبة الخسارة" }, benchmark: "Incurred claims ÷ earned premium", redFlag: { en: "Ratio improving while case reserves are released.", ar: "تحسن النسبة مع إبراح مخصصات المطالبات." } },
      { name: { en: "Combined ratio", ar: "النسبة المجمعة" }, benchmark: "(Claims + expenses) ÷ earned premium", redFlag: { en: "Below 100% in a tariff-capped, price-warring motor market.", ar: "أقل من 100% في سوق سيارات مقيدة الأسعار تشتعل حرب أسعار فيه." } },
      { name: { en: "Reserve development", ar: "تطور الاحتياطيات" }, benchmark: "Prior-year IBNR run-off", redFlag: { en: "Consistent one-direction prior-year releases.", ar: "إبراح متكرر باتجاه واحد من سنوات سابقة." } },
    ],
    procedures: [
      { text: { en: "Engage the actuarial specialist: evaluate the IBNR triangulation methodology, test key development factors to paid/incurred data, and re-perform the risk-adjustment calibration for one material portfolio.", ar: "استعن بخبير الاكتوارية: قيّم منهجية مثلثات المطالبات، واختبر عوامل النمو الجوهرية على بيانات المدفوع والمقدر، وأعد تنفيذ معايرة تعديل المخاطر لمحفظة جوهرية واحدة." }, ref: "ISA 620 / ISA 540" },
      { text: { en: "Reconcile the actuarial model output to the GL for premium recognition, liabilities and reinsurance — every unexplained top-side entry is a finding.", ar: "طابق مخرجات النموذج الاكتواري مع الدفتر العام في إيراد الأقساط والالتزامات وإعادة التأمين — كل قيد علوي غير مبرر ملاحظة." }, ref: "ISA 330" },
      { text: { en: "Test the IFRS 17 grouping, contract boundaries and the LDP (loss component) recognition for the motor and medical portfolios against policy-system extracts.", ar: "اختبر تجميع IFRS 17 وحدود العقود واعتراف مكوّن الخسارة لمحافظ السيارات والطبي مقابل مستخرجات نظام الوثائق." }, ref: "IFRS 17" },
      { text: { en: "Circularize reinsurers directly and assess credit quality of non-rated offshore capacity; reconcile ceded balances and commissions.", ar: "أرسل تأكيدات مباشرة لمعيدي التأمين وقيّم جودة ائتمان الطاقات غير المصنفة الخارجية؛ وطابق الأرصدة المتنازلة والعمولات." }, ref: "ISA 505" },
      { text: { en: "For takaful windows, trace the surplus-distribution waterfall (participant fund → operator fee → shareholder) for one closed underwriting year.", ar: "لنوافذ التكافل، تتبع شلال توزيع الفائض (صندوق المشتركين → أجرة المشغل → المساهمين) لسنة اكتتاب مقفلة واحدة." }, ref: "FRA rules" },
      { text: { en: "Vouch premium receipts for a sample of large policies near year-end against receipt dates, and test the earned/unearned split at 31 December.", ar: "افحص تحصيلات الأقساط لعينة وثائق كبيرة قرب نهاية السنة مقابل تواريخ التحصيل، واختبر تقسيم المكتسب/غير المكتسب في 31 ديسمبر." }, ref: "IFRS 17 / ISA 330" },
    ],
    kams: [
      { en: "Measurement of insurance contract liabilities under IFRS 17 (assumptions, discount rates, transition).", ar: "قياس التزامات عقود التأمين بموجب IFRS 17 (الافتراضات ومعدلات الخصم والتحول)." },
      { en: "Adequacy of claims provisions and reinsurance recoverables.", ar: "كفاية مخصصات المطالبات ومستردات إعادة التأمين." },
    ],
    pitfalls: [
      { en: "Comparing IFRS 17 revenue with last year's IFRS 4 premium line without restating — analytical procedures explode.", ar: "مقارنة إيراد IFRS 17 بخط الأقساط القديم دون إعادة عرض — تنفجر الإجراءات التحليلية." },
      { en: "Treating the FRA solvency filing as the accounting provision — the two are related, not identical.", ar: "معاملة إيداع الملاءة للهيئة كأنه المخصص المحاسبي — الاثنان مترابطان لا متطابقان." },
    ],
    relatedSections: ["industry-risks", "risk-assessment", "provisions"],
  },

  /* ================================================================ */
  /* MANUFACTURING                                                      */
  /* ================================================================ */
  {
    id: "manufacturing",
    cluster: "industrial",
    icon: "factory",
    name: { en: "Manufacturing", ar: "التصنيع" },
    tagline: {
      en: "Cost absorption turns the factory into a judgment call — inventory and COGS move together.",
      ar: "استيعاب التكاليف يحوّل المصنع إلى حكم مهني — المخزون وتكلفة المبيعات يتحركان معًا.",
    },
    overview: {
      en: "Manufacturers convert raw materials, labor and energy into finished goods, with cost of sales dominating the P&L and inventory often the largest current asset. Egyptian manufacturers — food, building materials, chemicals, plastics, metals — have faced years of EGP devaluation (imported input costs), energy price resets and inflation-driven cost instability, making standard costing and overhead absorption the battleground. Production economics are cyclical: capacity utilization swings alter fixed-cost absorption per unit, and idle-capacity costs must be expensed, not capitalized, under IAS 2 / EAS 19. The audit therefore concentrates on inventory existence and valuation (NRV, obsolescence), on cut-off between WIP and finished goods, and on the integrity of the standard-cost variance accounts that connect the factory floor to the GL.",
      ar: "تحول المصانع المواد الخام والعمالة والطاقة إلى منتجات نهائية، وتهيمن تكلفة المبيعات على قائمة الدخل ويكون المخزون غالبًا أكبر الأصول المتداولة. واجهت الصناعة المصرية — الغذائية ومواد البناء والكيماويات والبلاستيك والمعادن — سنوات من خفض قيمة الجنيه (تكاليف مدخلات مستوردة) وإعادة تسعير الطاقة وتقلب التكاليف بالتضخم، فصار التكلفة المعيارية واستيعاب التكاليف غير المباشرة ساحة المعركة. اقتصاديات الإنتاج دورية: تغير معدلات تشغيل الطاقة يحرك استيعاب التكاليف الثابتة للوحدة، وتكاليف الطاقة العاطلة يجب أن تُحمّل على الفترة لا على المخزون وفق IAS 2. لذا تتركز المراجعة على وجود المخزون وتقييمه (صافي القيمة البيعية والتقادم)، والاستقطاع بين تحت التشغيل والتام، وسلامة حسابات فروقات التكلفة المعيارية التي تصل أرض المصنع بالدفتر العام.",
    },
    revenueModel: {
      en: "Sales are invoiced on dispatch (EXW/FOB terms matter for cut-off) through distributors or B2B contracts; price increases lag input-cost inflation, squeezing margins for quarters. Year-end pushes revenue: December dispatches, sales returns in January, and channel loading via extended credit terms.",
      ar: "تُفتتح المبيعات عند الشحن (شروط التسليم تحدد الاستقطاع) عبر موزعين أو عقود بين الشركات؛ وترتفع الأسعار متأخرة عن تضخم المدخلات فتنضغط الهوامش لأرباع كاملة. ونهاية السنة تدفع الإيراد: شحنات ديسمبر، ومرتجعات يناير، وتحميل القنوات بشروط ائتمان ممدودة.",
    },
    significantAccounts: [
      { account: { en: "Inventory (RM, WIP, FG)", ar: "المخزون (خام، تحت التشغيل، تام)" }, assertions: ["EX", "VA", "C", "CO"], why: { en: "Physically scattered, costed by standards, written down by NRV — every assertion is live.", ar: "موزع ماديًا، مسعّر بمعايير، مُخفّض بالقيمة البيعية — كل التأكيدات حية." } },
      { account: { en: "Cost of sales & variances", ar: "تكلفة المبيعات وفروقاتها" }, assertions: ["A", "VA", "CO"], why: { en: "Standard-cost variances clear through COGS; timing of clear-down moves profit.", ar: "فروقات التكلفة المعيارية تمر عبر تكلفة المبيعات؛ وتوقيت التسوية يحرك الربح." } },
      { account: { en: "Property, plant & equipment", ar: "الممتلكات والآلات والمعدات" }, assertions: ["EX", "VA"], why: { en: "Capex heavy; capitalization of maintenance and componentization judgments.", ar: "كثافة استثمارية؛ وأحكام رسملة الصيانة وتفكيك المكونات." } },
      { account: { en: "Provisions — waste, returns, FX", ar: "مخصصات — هدر ومرتجعات وعملات" }, assertions: ["VA", "C"], why: { en: "Estimates tied to production reality and import exposure.", ar: "تقديرات مرتبطة بواقع الإنتاج والتعرض للعملات." } },
    ],
    inherentRisks: [
      { title: { en: "Overhead absorption smoothing", ar: "تمهيد الربح عبر استيعاب التكاليف" }, detail: { en: "Absorbing fixed overheads at budgeted rates while production falls capitalizes idle-capacity cost into inventory, deferring losses to next year — IAS 2 requires actual-capacity measurement.", ar: "استيعاب التكاليف الثابتة بمعدلات موزنة مع انخفاض الإنتاج يرسمل تكلفة الطاقة العاطلة في المخزون ويؤجل الخسائر — IAS 2 يقيس على الطاقة الفعلية." }, refs: ["IAS 2", "EAS 19"] },
      { title: { en: "Slow-moving & obsolete stock", ar: "المخزون بطيء الحركة والمتقادم" }, detail: { en: "Remote warehouses, model changeovers and expired raw materials hide NRV write-downs; the GL never flags them — turnover analysis by SKU does.", ar: "مخازن نائية وتغيير موديلات ومواد منتهية تخفي تحفيظات القيمة البيعية؛ الدفتر العام لا يميزها — تحليل الدوران لكل صنف يفعل." }, refs: ["IAS 2"] },
      { title: { en: "Standard costing drift", ar: "انحراف التكلفة المعيارية" }, detail: { en: "Standards left unupdated after EGP moves create massive purchase-price and usage variances that management clears to COGS or inventory selectively.", ar: "معايير لم تُحدَّث بعد تحركات الجنيه تخلق فروقات شراء واستخدام ضخمة تُسوّيها الإدارة انتقائياً على التكلفة أو المخزون." }, refs: ["IAS 2", "ISA 330"] },
      { title: { en: "Physical-to-book divergence", ar: "الانحراف بين الفعلي والدفتري" }, detail: { en: "Scrap, rework and unrecorded production consume the perpetual records; the periodic count difference is a completeness signal, not an adjustment to be buried.", ar: "الهدر وإعادة الشغل والإنتاج غير المسجل تستنزف السجلات المستمرة؛ وفرق الجرد إشارة اكتمال لا تسوية تُدفن." }, refs: ["ISA 501"] },
    ],
    fraudRedFlags: [
      { en: "Inventory counts always 'reconciling' with no adjustment ever booked.", ar: "جرد دائمًا 'مطابق' دون أي تسوية تُقيد إطلاقًا." },
      { en: "Gross margin rising while input costs surge (absorption games).", ar: "هامش إجمالي يرتفع مع انفجار تكاليف المدخلات (ألعاب الاستيعاب)." },
      { en: "December production spikes into WIP that convert to sales in Q1 (cut-off).", ar: "ذروة إنتاج ديسمبر تحت التشغيل تتحول مبيعات في الربع الأول (استقطاع)." },
      { en: "Scrap sales recorded as other income with quantities never traced.", ar: "مبيعات الهدر تُقيد دخلًا آخر دون تتبع الكميات." },
    ],
    minefields: [
      { topic: { en: "Idle capacity & absorption", ar: "الطاقة العاطلة والاستيعاب" }, detail: { en: "The denominator (normal vs actual capacity) decides how much fixed cost hits COGS this year; challenge the capacity study, not the spreadsheet.", ar: "المقام (الطاقة الطبيعية مقابل الفعلية) يحدد كم من التكلفة الثابتة يصيب تكلفة المبيعات هذا العام؛ ناقش دراسة الطاقة لا الجدول." }, ref: "IAS 2.13" },
      { topic: { en: "NRV in a devaluing economy", ar: "صافي القيمة البيعية في اقتصاد متقلب العملة" }, detail: { en: "Selling prices re-price faster or slower than costs; NRV tested at year-end spot rates on both sides, with the newer cost layers (FIFO) in mind.", ar: "أسعار البيع تُسعَّر أسرع أو أبطأ من التكاليف؛ تُختبر القيمة البيعية بأسعار نهاية العام على الجانبين مع طبقات التكلفة الأحدث (الوارد أولًا يصرف أولًا)." }, ref: "IAS 2 / IAS 21" },
      { topic: { en: "Capitalization of pre-production & maintenance", ar: "رسملة ما قبل الإنتاج والصيانة" }, detail: { en: "Major-overhaul and retooling costs capitalized as PPE need component accounting and useful-life judgment; routine maintenance expensed.", ar: "تكاليف الإصلاح الشامل وإعادة التجهيز المرسملة كممتلكات تحتاج محاسبة مكونات وحكم عمر إنتاجي؛ والصيانة الدورية تُحمّل على الفترة." }, ref: "IAS 16 / EAS 20" },
    ],
    regulatory: {
      en: "Beyond the Companies Law 159/1981 and tax regime (including the industrial developer incentives under Investment Law 72/2017 and GAFI licenses), manufacturers face sector regulators: Egyptian Drug Authority for pharma plants, NFSA for food safety, and EOS specifications. Industrial land allocations, customs-drawback schemes for exporters and energy tariffs (industrial electricity slabs) all feed cost assumptions the auditor should understand before testing.",
      ar: "إلى جانب قانون الشركات 159 لسنة 1981 والنظام الضريبي (بما فيه حوافز المطورين الصناعيين بموجب قانون الاستثمار 72 لسنة 2017 وتراخيص الهيئة العامة للاستثمار)، تواجه المصانع جهات قطاعية: هيئة الدواء المصرية لمصانع الأدوية، وسلامة الغذاء، ومواصفات الهيئة المصرية للمواصفات. وتخصيصات الأراضي الصناعية وأنظمة رد الرسوم للمصدرين وشرائح كهرباء الصناعة تغذي افتراضات التكلفة التي يجب أن يفهمها المراجع قبل الاختبار.",
    },
    ratios: [
      { name: { en: "Inventory days", ar: "أيام المخزون" }, benchmark: "Avg inventory ÷ COGS × 365", redFlag: { en: "Days lengthening while management claims stockouts.", ar: "أيام تمتد بينما تدّعي الإدارة نقص المخزون." } },
      { name: { en: "Gross margin stability", ar: "استقرار الهامش الإجمالي" }, benchmark: "GM% by quarter vs input indices", redFlag: { en: "Perfectly stable GM amid FX shocks.", ar: "هامش مستقر تماماً وسط صدمات العملة." } },
      { name: { en: "Capacity utilization", ar: "معدل تشغيل الطاقة" }, benchmark: "Actual output ÷ design capacity", redFlag: { en: "Utilization falling while inventory per unit of sales rises.", ar: "تشغيل يتراجع بينما مخزون وحدة المبيعات يرتفع." } },
    ],
    procedures: [
      { text: { en: "Attend physical counts at multiple sites (including remote warehouses chosen by the auditor, not the client), perform two-directional counts, and reconcile to the perpetual records and GL.", ar: "احضر الجرد الفعلي في مواقع متعددة (بما فيها مخازن نائية تختارها أنت لا العميل)، ونفّذ جردًا باتجاهين، وطابق مع السجلات المستمرة والدفتر العام." }, ref: "ISA 501" },
      { text: { en: "Recompute the overhead absorption rate from actual capacity and production data, quantify idle-capacity cost, and post the IAS 2 adjustment.", ar: "أعد احتساب معدل الاستيعاب من بيانات الطاقة الفعلية والإنتاج، وحدد كم تكلفة الطاقة العاطلة، وقيد تسوية IAS 2." }, ref: "IAS 2 / EAS 19" },
      { text: { en: "Extract SKU-level turnover for the year, list items with no movement >180 days, and test management's NRV write-down against post-year-end selling prices and cost layers.", ar: "استخرج دوران كل صنف خلال السنة، واذكر ما لا حركة له أكثر من 180 يومًا، واختبر تحفيظ الإدارة لصافي القيمة البيعية مقابل أسعار البيع بعد نهاية السنة وطبقات التكلفة." }, ref: "IAS 2 / ISA 330" },
      { text: { en: "Test cost clear-downs: select the December and January dispatch files, trace to invoices and shipping documents, and verify the finished-goods-to-COGS cut-off both ways.", ar: "اختبر تسويات التكلفة: اختر ملفات شحن ديسمبر ويناير، وتتبعها للفواتير ومستندات النقل، وتحقق من استقطاع التام إلى التكلفة في الاتجاهين." }, ref: "ISA 330" },
      { text: { en: "Analyze purchase-price and usage variances monthly, confirm standards were re-set after major FX moves, and test where large variances were cleared.", ar: "حلل فروقات الشراء والاستخدام شهريًا، وأكد تحديث المعايير بعد تحركات العملة الكبرى، واختبر أين سوّيت الفروقات الضخمة." }, ref: "IAS 2" },
    ],
    kams: [
      { en: "Inventory valuation — overhead absorption and net realizable value.", ar: "تقييم المخزون — استيعاب التكاليف وصافي القيمة البيعية." },
      { en: "Impact of currency devaluation on imported costs and pricing.", ar: "أثر خفض قيمة العملة على التكاليف المستوردة والتسعير." },
    ],
    pitfalls: [
      { en: "Testing inventory valuation without setting foot in the warehouse where the slow stock actually sits.", ar: "اختبار تقييم المخزون دون دخول المخزن الذي يجلس فيه المخزون البطيء فعلاً." },
      { en: "Letting the standard-cost system answer NRV questions it was never designed for.", ar: "ترك نظام التكلفة المعيارية يجيب عن أسئلة القيمة البيعية التي لم يُصمم لها." },
    ],
    relatedSections: ["inventory", "fixed-assets", "industry-risks"],
  },

  /* ================================================================ */
  /* RETAIL & FMCG                                                      */
  /* ================================================================ */
  {
    id: "retail",
    cluster: "industrial",
    icon: "cart",
    name: { en: "Retail & FMCG", ar: "التجزئة والسلع الاستهلاكية" },
    tagline: {
      en: "Cash-heavy, data-rich: the POS database tells the truth if you ask it correctly.",
      ar: "كثيف النقد وغني البيانات: قاعدة نقاط البيع تقول الحقيقة إن سألتها صحيحًا.",
    },
    overview: {
      en: "Retailers and FMCG distributors sell high volumes at thin margins — a 1% leakage in cash or shrinkage erases the year's profit. Revenue arrives at thousands of POS terminals daily, settles into bank accounts as Z-report batches, and reconciles only if the systems talk to each other. Egyptian grocery and FMCG chains battle inflation-driven price changes, trade-spend pressure from suppliers, loyalty programs and growing card/wallet penetration (InstaPay, Meeza). Franchise and consignment arrangements blur whose inventory a shelf really holds. The audit's leverage point is data: full-population testing of POS-to-bank-to-GL integrality beats sampling invoices every time, and the daily Z-report reconciliation is the single control that cannot be skipped.",
      ar: "يباع بالتجزئة والتوزيع حجم ضخم بهامش رقيق — تسرب 1% في النقد أو الفاقد يمحو ربح السنة. يدخل الإيراد عبر آلاف نقاط البيع يوميًا، ويستقر في الحسابات البنكية كدفعات تقارير إقفال، ولا يُطابق إلا إذا تحدثت الأنظمة معًا. تكافح سلاسل البقالة والاستهلاكيات المصرية تغيرات الأسعار بالتضخم، وضغط الإنفاق التجاري من الموردين، وبرامج الولاء، وتنامي البطاقات والمحافظ (InstaPay وميزة). وترتيبات الامتياز والأمانة تطمس ملكية مخزون الرف. نقطة رافعة المراجعة هي البيانات: اختبار كامل المجتمع لتكامل نقاط البيع والبنك والدفتر يتفوق على فحص عينة فواتير دائمًا، ومطابقة تقرير الإقفال اليومي هي الضابط الوحيد الذي لا يُغتفر تخطيه.",
    },
    revenueModel: {
      en: "Cash and card sales recognized at POS; returns, promotions and loyalty accrue as revenue deductions. Seasonality is extreme (Ramadan and back-to-school spikes), concentrating cut-off and completeness risk in a few hyperactive weeks where manual interventions multiply.",
      ar: "مبيعات نقد وبطاقات تُعرف عند نقطة البيع؛ والمرتجعات والعروض والولاء تتراكم كخصومات من الإيراد. الموسمية حادة (رمضان والعودة للمدارس)، فتتركز مخاطر الاستقطاع والاكتمال في أسابيع قليلة محمومة تتضاعف فيها التدخلات اليدوية.",
    },
    significantAccounts: [
      { account: { en: "Revenue (POS)", ar: "الإيراد (نقاط البيع)" }, assertions: ["C", "CO", "A"], why: { en: "Completeness of the cash chain is the sector's defining risk.", ar: "اكتمال سلسلة النقد هو الخطر المعرّف للقطاع." } },
      { account: { en: "Inventory & shrinkage", ar: "المخزون والفاقد" }, assertions: ["EX", "VA"], why: { en: "High-count SKUs, theft/damage accruals, consignment stock.", ar: "أصناف كثيرة، ومخصصات سرقة وتلف، ومخزون أمانة." } },
      { account: { en: "Trade spend & rebates", ar: "الإنفاق التجاري والخصومات" }, assertions: ["C", "VA"], why: { en: "Supplier rebates and promotion accruals — completeness both ways.", ar: "خصومات الموردين ومخصصات العروض — اكتمال بالاتجاهين." } },
      { account: { en: "Loyalty points liability", ar: "التزام نقاط الولاء" }, assertions: ["VA", "C"], why: { en: "Deferred revenue measured on breakage and redemption behavior.", ar: "إيراد مؤجل يقاس على سلوك الاسترداد والكسر." } },
    ],
    inherentRisks: [
      { title: { en: "Cash leakage between POS and bank", ar: "تسرب النقد بين نقطة البيع والبنك" }, detail: { en: "Skimmed Z-reports, aggregated deposits and manual adjustments at store level hide systematic theft; only the daily three-way reconciliation (POS → cash declaration → bank credit) catches it.", ar: "تقارير مقفلة منسوخة وإيداعات مجمعة وتسويات يدوية على مستوى الفرع تخفي سرقة منتظمة؛ ولا يكشفها إلا المطابقة اليومية الثلاثية (نقطة البيع → إقرار النقد → قيد البنك)." }, refs: ["ISA 240", "ISA 330"] },
      { title: { en: "Returns & post-year-end credit notes", ar: "المرتجعات وإشعارات دائنة لاحقة" }, detail: { en: "January credit notes for December sales reverse revenue across the year-end; the returns provision must reflect the actual pattern.", ar: "إشعارات يناير الدائنة لمبيعات ديسمبر تعكس الإيراد عبر حدود السنة؛ ويجب أن يعكس مخصص المرتجعات النمط الفعلي." }, refs: ["IFRS 15"] },
      { title: { en: "Consignment & franchise stock", ar: "مخزون الأمانة والامتياز" }, detail: { en: "Goods on agents' shelves may still be the client's inventory (or vice versa) — legal substance of the arrangements decides, and stock counts must follow the contracts.", ar: "بضائع على أرفف الوكلاء قد تظل مخزون العميل (أو العكس) — جوهر الترتيبات القانوني يقرر، ويجب أن يتبع الجرد العقود." }, refs: ["IFRS 15", "ISA 501"] },
      { title: { en: "Trade-spend completeness", ar: "اكتمال الإنفاق التجاري" }, detail: { en: "Promotions, listing fees and scan-back rebates owed to (or from) suppliers accrue on estimates; understatement inflates margin.", ar: "العروض ورسوم الإدراج وخصومات المسح المستحقة للموردين (أو منهم) تُحتسب تقديريًا؛ ونقصها يضخم الهامش." }, refs: ["IFRS 15", "IAS 37"] },
    ],
    fraudRedFlags: [
      { en: "Void and negative-line rates spiking at specific stores or cashiers.", ar: "معدلات الإلغاء والسطور السالبة تنفجر في فروع أو كاشير بعينهم." },
      { en: "Bank deposits rounded and identical for consecutive days (fabricated deposits).", ar: "إيداعات مقربة ومتطابقة لأيام متتالية (إيداعات مصطنعة)." },
      { en: "Loyalty redemptions concentrated on insider accounts.", ar: "استرداد نقاط الولاء متركز في حسابات داخلية." },
      { en: "Inventory counts perpetually 'adjusted to book' with one-sided corrections.", ar: "جرد 'يسوّى على الدفتر' دائمًا بتصحيحات أحادية الاتجاه." },
    ],
    minefields: [
      { topic: { en: "Revenue gross vs net", ar: "الإيراد إجماليًا أم صافيًا" }, detail: { en: "Acting as agent (commission) vs principal (gross revenue) for marketplace and delivery arrangements changes the top line entirely.", ar: "العمل وكيلاً (عمولة) أم أصيلاً (إيراد إجمالي) في ترتيبات الأسواق والتوصيل يغير رقم الأعمال كليًا." }, ref: "IFRS 15 / EAS 48" },
      { topic: { en: "Loyalty programs", ar: "برامج الولاء" }, detail: { en: "Points are a separate performance obligation — stand-alone selling price allocation plus breakage estimation.", ar: "النقاط التزام أداء منفصل — توزيع سعر البيع المستقل وتقدير الكسر." }, ref: "IFRS 15.70–86" },
    ],
    regulatory: {
      en: "Retail is lightly licensed (commercial registry, municipal licenses, NFSA for food handling) but the tax and VAT net is dense: e-invoicing mandate (ETA Kryfta/POS receipts system) requires every B2C receipt to be issued through certified POS devices and reported — a gift to the auditor, since the ETA database is an independent revenue completeness benchmark.",
      ar: "التجزئة قليلة الترخيص (سجل تجاري وتراخيص محلية وسلامة غذاء) لكن شبكة الضرائب والضريبة على القيمة المضافة كثيفة: إلزام الفاتورة الإلكترونية يتطلب إصدار كل إيصال عبر أجهزة معتمدة ورفعه لمصلحة الضرائب — هدية للمراجع، فقاعدة المصلحة معيار مستقل لاكتمال الإيراد.",
    },
    ratios: [
      { name: { en: "Shrinkage %", ar: "نسبة الفاقد" }, benchmark: "(Book − counted) ÷ sales", redFlag: { en: "Shrinkage always within tolerance, never a variance investigated.", ar: "الفاقد دائمًا ضمن الحدود ولا يحقق في فرق أبداً." } },
      { name: { en: "Gross margin by store", ar: "الهامش الإجمالي لكل فرع" }, benchmark: "GM% distribution across stores", redFlag: { en: "Outlier stores with both high sales and high margins.", ar: "فروع شاذة بمبيعات هوامش مرتفعة معاً." } },
      { name: { en: "Returns ratio", ar: "نسبة المرتجعات" }, benchmark: "Returns ÷ gross sales by month", redFlag: { en: "Returns near zero during promotion months.", ar: "مرتجعات تكاد تكون صفراً في شهور العروض." } },
    ],
    procedures: [
      { text: { en: "Run the daily Z-report → cash declaration → bank-statement reconciliation for a full-population sample of days (both quiet and peak), quantifying and aging every unmatched batch.", ar: "شغّل المطابقة اليومية (تقرير الإقفال → إقرار النقد → كشف الحساب) لمجتمع كامل من الأيام (الهادئة والذروة معًا)، محددًا وعمرًا كل دفعة غير مطابقة." }, ref: "ISA 330 / ISA 240" },
      { text: { en: "Compare annual POS revenue to the e-invoicing (ETA) reported totals and investigate differences beyond timing.", ar: "قارن إيراد نقاط البيع السنوي بإجماليات الفاتورة الإلكترونية المرفوعة لمصلحة الضرائب وحقق فيما تجاوز فروق التوقيت." }, ref: "ISA 520" },
      { text: { en: "Analytical completeness scan: unit sales × shelf prices vs recorded revenue per category per month, isolating unexplained discounts.", ar: "مسح تحليلي للاكتمال: وحدات مباعة × أسعار الرف مقابل الإيراد المسجل لكل فئة شهريًا، بعزل الخصومات غير المبررة." }, ref: "ISA 520" },
      { text: { en: "Test the loyalty liability: recompute the point liability from the program data (outstanding points × SSP allocation), and vouch redemptions to POS lines.", ar: "اختبر التزام الولاء: أعد احتسابه من بيانات البرنامج (نقاط قائمة × توزيع السعر المستقل)، وافحص الاسترداد على سطور نقاط البيع." }, ref: "IFRS 15" },
      { text: { en: "Attend store inventory counts on an unannounced basis, and reconcile consignment stock at franchisees against the agreement terms.", ar: "احضر جرد الفروع دون إخطار مسبق، وطابق مخزون الأمانة لدى الممنوحين لهم بشروط الاتفاق." }, ref: "ISA 501" },
    ],
    kams: [
      { en: "Revenue completeness and cash handling across the store network.", ar: "اكتمال الإيراد وتداول النقد عبر شبكة الفروع." },
      { en: "Inventory existence and shrinkage provisioning.", ar: "وجود المخزون ومخصصات الفاقد." },
    ],
    pitfalls: [
      { en: "Sampling sales invoices when the entire year's POS data fits on one CSV — test the population instead.", ar: "فحص عينة فواتير بينما بيانات نقاط البيع للسنة كلها في ملف واحد — اختبر المجتمع كاملاً." },
      { en: "Forgetting that trade spend cuts both ways: supplier rebates are income (completeness) and customer promotions are deductions (completeness).", ar: "نسيان أن الإنفاق التجاري يقطع بالاتجاهين: خصومات الموردين دخل (اكتمال) وعروض العملاء خصومات (اكتمال)." },
    ],
    relatedSections: ["inventory", "receivables", "revenue", "industry-risks"],
  },

  /* ================================================================ */
  /* RESTAURANTS & FOOD SERVICE                                         */
  /* ================================================================ */
  {
    id: "restaurants",
    cluster: "industrial",
    icon: "utensils",
    name: { en: "Restaurants & Food Service", ar: "المطاعم وخدمات الطعام" },
    tagline: {
      en: "Perishable inventory, cash at the counter, and franchise fees — a three-front war.",
      ar: "مخزون قابل للتلف ونقد عند الكاشير ورسوم امتياز — حرب على ثلاث جبهات.",
    },
    overview: {
      en: "Restaurant groups and catering companies convert same-day purchases into same-day sales: food cost, labor and rent absorb most of the ticket, so profit lives in single-digit percentages and small percentages of leakage decide survival. Egyptian chains juggle delivery-platform commissions (Talabat, ElMenus-era aggregators) that take up to 30% of channel revenue, inflation in food inputs, and tourism-driven seasonality for outlets near attractions. franchising mixes company-owned and franchised stores, where the franchisor recognizes royalties and marketing-fund contributions rather than store revenue. The unit economics are honest only if the POS, kitchen system (KDS) and purchasing loop reconcile daily — the audit tests that loop and the franchise contracts behind it.",
      ar: "تحول مجموعات المطاعم والتموين مشتريات اليوم إلى مبيعات اليوم: تكلفة الطعام والأجور والإيجار تبتلع معظم الفاتورة، فيعيش الربح في خانات آحاد المئوية وتقرر نسب تسرب صغيرة البقاء. توازن السلاسل المصرية عمولات منصات التوصيل التي تصل إلى 30% من إيراد القناة، وتضخم مدخلات الطعام، وموسمية السياحة للفروع قرب المعالم. ويمزج الامتياز بين فروع مملوكة وممنوحة، حيث يعرف مانح الامتياز حقوقًا ومساهمات صندوق تسويق لا إيراد الفرع. اقتصاديات الوحدة صادقة فقط إذا طابقت نقطة البيع ونظام المطبخ والمشتريات يوميًا — والمراجعة تختبر تلك الحلقة والعقود خلفها.",
    },
    revenueModel: {
      en: "In-store cash and cards at POS, delivery via aggregator platforms settling weekly net of commissions, plus catering contracts and (for franchisors) royalty streams at 4–8% of franchisee sales. Cut-off is daily rather than monthly: the last dinner service of the year is a real audit boundary.",
      ar: "نقد وبطاقات داخلية عند نقاط البيع، وتوصيل عبر منصات تجمع أسبوعيًا صافي العمولات، وعقود تموين وحقوق امتياز لمانحيه بنسبة 4–8% من مبيعات الممنوحين. الاستقطاع يومي لا شهري: عشاء ليلة رأس السنة حد مراجعة حقيقي.",
    },
    significantAccounts: [
      { account: { en: "Revenue by channel", ar: "الإيراد حسب القناة" }, assertions: ["C", "CO", "A"], why: { en: "Three different settlement chains (POS, platform, catering) must each close.", ar: "ثلاث سلاسل تحصيل مختلفة يجب أن تُقفل كل منها." } },
      { account: { en: "Food & beverage inventory", ar: "مخزون الطعام والشراب" }, assertions: ["EX", "VA"], why: { en: "Perishable, high-shrinkage, weekly cycles — existence testing is count-day work.", ar: "سريع التلف وفاقده عالٍ ودوراته أسبوعية — اختبار الوجود عمل يوم جرد." } },
      { account: { en: "Franchise royalties & marketing fund", ar: "حقوق الامتياز وصندوق التسويق" }, assertions: ["C", "A", "PR"], why: { en: "Derived from franchisee POS data the auditor must independently obtain.", ar: "مستمدة من بيانات نقاط بيع الممنوحين التي يجب أن يحصل عليها المراجع باستقلال." } },
      { account: { en: "Aggregator settlements receivable", ar: "مستحقات تسويات المنصات" }, assertions: ["EX", "A", "VA"], why: { en: "Weekly net settlements with commission and VAT gross-up complexity.", ar: "تسويات أسبوعية صافية بتعقيد العمولة وضريبة القيمة المضافة." } },
    ],
    inherentRisks: [
      { title: { en: "Unrecorded cash sales", ar: "مبيعات نقدية غير مسجلة" }, detail: { en: "Counter cash in a high-velocity environment is the classic skimming ground; daily cash-up sheets vs POS vs deposits are the only defense.", ar: "نقد الكاشير في بيئة سريعة هو ملعب السحب الكلاسيكي؛ وقيود النقد اليومية مقابل نقاط البيع مقابل الإيداعات هي الدفاع الوحيد." }, refs: ["ISA 240"] },
      { title: { en: "Platform commission & VAT treatment", ar: "معالجة عمولات المنصات والضريبة" }, detail: { en: "Gross vs net presentation of aggregator sales, commission input VAT recovery, and settlement timing create recurring misstatements.", ar: "عرض مبيعات المنصات إجماليًا أم صافيًا، واسترداد ضريبة مدخلات العمولة، وتوقيت التسوية — أخطاء متكررة." }, refs: ["IFRS 15", "VAT law"] },
      { title: { en: "Perishable write-offs", ar: "إعدادات التلف" }, detail: { en: "Spoilage expensed late (or capitalized into inventory) overstates margins; the kitchen waste log tells the story.", ar: "تحميل التلف متأخرًا (أو رسملته في المخزون) يجمل الهوامش؛ وسجل هدر المطبخ يحكي القصة." }, refs: ["IAS 2"] },
      { title: { en: "Franchisee sales under-reporting", ar: "نقص مبيعات الممنوحين" }, detail: { en: "Royalties are only as complete as the franchisee's POS extract — independent data pulls or platform-side verification close the gap.", ar: "الحقوق بقدر اكتمال ملف نقاط بيع الممنوح له — سحب بيانات مستقل أو تحقق من جانب المنصة يسد الفجوة." }, refs: ["IFRS 15"] },
    ],
    fraudRedFlags: [
      { en: "Manual 'manager comps' and voids clustered before closing time.", ar: "مزايا مدير وإلغاءات يدوية متجمعة قبل الإغلاق." },
      { en: "Aggregator settlements matching platform reports to the pound every week (copied, not reconciled).", ar: "تسويات تطابق تقارير المنصة بالجنيه كل أسبوع (منسوخة لا مطابقة)." },
      { en: "Food cost percentage improving while menu prices are frozen in inflation.", ar: "نسبة تكلفة الطعام تتحسن بينما أسعار القائمة مجمدة في التضخم." },
    ],
    minefields: [
      { topic: { en: "Revenue recognition on delivery platforms", ar: "الاعتراف بالإيراد على منصات التوصيل" }, detail: { en: "Is the restaurant principal with commission expense, or is the platform the customer collecting on its behalf? Presentation and VAT follow the answer.", ar: "هل المطعم أصيل والمصروف عمولة، أم المنصة عميل يقبض لحسابه؟ العرض والضريبة يتبعان الإجابة." }, ref: "IFRS 15" },
      { topic: { en: "Marketing fund accounting", ar: "محاسبة صندوق التسويق" }, detail: { en: "Contributions from franchisees held for brand spending are agency-like balances — a liability, not revenue.", ar: "مساهمات الممنوحين المحتجزة للإنفاق على العلامة أرصدة شبيهة بالوكالة — التزام لا إيراد." }, ref: "IFRS 15 / IFRS 15 B34" },
    ],
    regulatory: {
      en: "Food-service is licensed by municipalities and inspected by NFSA (food safety) with the EDA for any medicinal claims; tourism-adjacent outlets register with the Ministry of Tourism where applicable. VAT applies to restaurant services (with the standard 14% rate and e-receipt obligations), and labor and social insurance costs are heavily inspected — payroll compliance is a genuine contingency area.",
      ar: "ترخّص المحليات خدمات الطعام وتفتشها سلامة الغذاء، وهيئة الدواء لأي مزاعم علاجية؛ وتسجل المنافذ السياحية لدى وزارة السياحة حيث ينطبق. تخضع الخدمات لضريبة القيمة المضافة (14% والتزام الإيصال الإلكتروني)، وتخضع الأجور والتأمينات لتفتيش كثيف — الامتداد الوظيفي منطقة تزامن حقيقية.",
    },
    ratios: [
      { name: { en: "Food cost %", ar: "نسبة تكلفة الطعام" }, benchmark: "COGS ÷ food revenue (28–35%)", redFlag: { en: "Sub-25% food cost in an inflationary input year.", ar: "تكلفة طعام دون 25% في سنة مدخلات تضخمية." } },
      { name: { en: "Labor cost %", ar: "نسبة الأجور" }, benchmark: "Payroll ÷ revenue (25–32%)", redFlag: { en: "Improvement achieved by moving staff to unregistered cash.", ar: "تحسن يتحقق بنقل العاملين لنقد غير مسجل." } },
      { name: { en: "Royalty coverage", ar: "تغطية الحقوق" }, benchmark: "Franchise revenue ÷ estimated franchisee sales", redFlag: { en: "Implied franchisee sales falling while their outlets visibly expand.", ar: "مبيعات الممنوحين الضمنية تتراجع بينما فروعهم تتوسع ظاهريًا." } },
    ],
    procedures: [
      { text: { en: "For a sample of days per outlet, reconcile POS Z-reports to cash deposits and card settlement reports; extend to full populations for outlets with exceptions.", ar: "لعينة أيام في كل فرع، طابق تقارير الإقفال مع إيداعات النقد وتقارير تسوية البطاقات؛ ووسّع للمجتمع كاملًا للفروع ذات الاستثناءات." }, ref: "ISA 330" },
      { text: { en: "Obtain platform-side revenue reports directly from aggregator portals for the year and reconcile to booked revenue and commission expense.", ar: "احصل على تقارير الإيراد من بوابة المنصة نفسها للسنة وطابقها بالإيراد المسجل ومصروف العمولة." }, ref: "ISA 500" },
      { text: { en: "Attend a year-end count of F&B inventory including the walk-ins, and test the spoilage/waste log against bookings by month.", ar: "احضر جرد نهاية السنة لمخزون الطعام والشراب بما فيه الثلاجات، واختبر سجل الهدر مقابل القيود شهريًا." }, ref: "ISA 501 / IAS 2" },
      { text: { en: "For franchisors, pull a sample of franchisee POS databases directly (or platform data), recompute royalties and marketing-fund contributions, and test the liability's spend-down.", ar: "لمانحي الامتياز، اسحب عينة من قواعد نقاط بيع الممنوحين مباشرة، وأعد احتساب الحقوق ومساهمات التسويق، واختبر صرف التزام الصندوق." }, ref: "IFRS 15 / ISA 330" },
      { text: { en: "Vouch the last and first three days of sales around year-end to kitchen tickets and platform orders to prove daily cut-off.", ar: "افحص آخر وأول ثلاثة أيام مبيعات حول نهاية السنة مقابل تذاكر المطبخ وطلبات المنصات لإثبات الاستقطاع اليومي." }, ref: "ISA 330" },
    ],
    kams: [
      { en: "Franchise revenue and marketing-fund balances (for franchisors).", ar: "إيراد الامتياز وأرصدة صندوق التسويق (لمانحي الامتياز)." },
      { en: "Inventory and food-cost controls in an inflationary cycle.", ar: "ضوابط المخزون وتكلفة الطعام في دورة تضخمية." },
    ],
    pitfalls: [
      { en: "Auditing group revenue while each outlet keeps its own bank account and cash cycle.", ar: "مراجعة إيراد المجموعة بينما يحتفظ كل فرع بحساب ودورة نقد خاصة." },
      { en: "Treating aggregator commissions as revenue deductions without checking the principal/agent conclusion first.", ar: "معاملة عمولات المنصات كخصم من الإيراد قبل التحقق من استنتاج الأصيل/الوكيل." },
    ],
    relatedSections: ["inventory", "receivables", "revenue", "payroll", "industry-risks"],
  },

  /* ================================================================ */
  /* TEXTILES & GARMENTS                                                */
  /* ================================================================ */
  {
    id: "textiles",
    cluster: "industrial",
    icon: "shirt",
    name: { en: "Textiles & Garments", ar: "النسيج والملابس" },
    tagline: {
      en: "Export rebates, cotton pricing and QIZ rules of origin — the money is in the compliance details.",
      ar: "حوافز التصدير وتسعير القطن وقواعد المنشأ — المال في تفاصيل الامتثال.",
    },
    overview: {
      en: "Egyptian textile and garment manufacturers span spinning and weaving (cotton-based, with the legacy public-sector restructuring) to cut-make-trim (CMT) apparel exporters serving US and EU buyers under the Qualified Industrial Zones (QIZ) protocol — which requires an Israeli input percentage for duty-free US access — and the EU Association Agreement. Business is a mix of own-brand manufacturing, CMT contracts (customer supplies fabric; revenue is conversion service) and trading. Cotton procurement is seasonal and price-volatile; the commodity is stored, graded and insured, and export rebates (duty drawback, export subsidy programs) are a material income stream audited as government grants. Working capital is king: fabric, dyeing and trim purchases on credit against letters of credit and documentary collections.",
      ar: "تمتع مصانع النسيج والملابس المصرية من الغزل والنسيج (قطنية مع إعادة هيكلة قطاع الأعمال العام) إلى المفصّل والمخيط للتصدير لخدمة مشتري أمريكا وأوروبا بموجب بروتوكول المناطق الصناعية المؤهلة QIZ — الذي يشترط نسبة مدخلات إسرائيلية للنفاذ الأمريكي المعفي — واتفاقية الشراكة مع الاتحاد الأوروبي. النشاط مزيج تصنيع بعلامة خاصة، وعقود تحويل يمول العميل فيها القماش (الإيراد خدمة تحويل)، وتجارة. شراء القطن موسمي متقلب السعر؛ والسلعة تُخزن وتُصنف وتُؤمّن، وحوافز التصدير (رد الرسوم وبرامج الدعم) دخل جوهري يُراجع كمنح حكومية. ورأس المال العامل ملك: مشتريات قماش وصباغة ومستلزمات بالأجل مقابل اعتمادات مستندية وتحصيل مستندي.",
    },
    revenueModel: {
      en: "Export revenue in USD/EUR is recognized on shipment terms (FOB/CMT), with conversion-service contracts recognized over the production period; rebate claims follow customs verification months later. Seasonality tracks the retail calendar of buyers (autumn/winter orders cut in spring), so the year-end WIP position and the December shipment schedule carry the cut-off weight.",
      ar: "يُعرف إيراد التصدير بالدولار/اليورو عند الشحن (FOB/CMT)، وعقود التحويل على مدى فترة الإنتاج؛ وتتبع مطالبات الحوافز تحقق الجمارك بعد شهور. تتبع الموسمية تقويم مشتري التجزئة (طلبات الشتاء تُقص في الربيع)، فيحمل موقف تحت التشغيل وجدول شحنات ديسمبر وزن الاستقطاع.",
    },
    significantAccounts: [
      { account: { en: "Raw cotton, yarn & fabric inventory", ar: "مخزون القطن والغزول والأقمشة" }, assertions: ["EX", "VA", "C"], why: { en: "Commodity price volatility plus storage across multiple sites.", ar: "تقلب أسعار السلعة مع تخزين عبر مواقع متعددة." } },
      { account: { en: "Export revenue & rebates receivable", ar: "إيراد التصدير وذمم الحوافز" }, assertions: ["C", "A", "VA"], why: { en: "Rebates depend on customs rulings and QIZ certificates — recovery timing is judgemental.", ar: "تعتمد الحوافز على أحكام الجمارك وشهادات QIZ — وتوقيت الاسترداد حكمي." } },
      { account: { en: "WIP & contract assets (CMT)", ar: "تحت التشغيل وأصول العقود (التحويل)" }, assertions: ["VA", "EX", "CO"], why: { en: "Stage-of-completion on customer-owned fabric needs quantity tracking.", ar: "نسبة الإتمام على قماش مملوك للعميل تتطلب تتبع كميات." } },
      { account: { en: "FX gains/losses & hedging", ar: "أرباح وخسائر العملات والتحوط" }, assertions: ["A", "VA", "PR"], why: { en: "USD receivables vs EGP costs; forward contracts embedded in LCs.", ar: "ذمم دولارية مقابل تكاليف بالجنيه؛ وعقود آجلة مضمّنة في الاعتمادات." } },
    ],
    inherentRisks: [
      { title: { en: "Rebate & drawback recognition", ar: "الاعتراف بحوافز ورد الرسوم" }, detail: { en: "Claims recognized on filing but rejected or reduced by customs later — IAS 20 / IAS 37 require probability assessment and disclosure of conditions.", ar: "مطالبات تُعرف عند التقديم ثم تُرفض أو تُخفض لاحقًا — IAS 20 وIAS 37 يتطلبان تقييم الاحتمال والإفصاح عن الشروط." }, refs: ["IAS 20", "EAS grants"] },
      { title: { en: "Customer-owned fabric (consignment-in)", ar: "قماش مملوك للعميل (أمانة واردة)" }, detail: { en: "CMT converters hold fabric they don't own — off-balance quantities must be tracked, and any use of it for other orders is a compliance and fraud exposure.", ar: "يحتفظ المحوّلون بقماش لا يملكونه — يجب تتبع الكميات خارج الميزانية، وأي استعمال له في أوامر أخرى مخاطرة امتثال وتزييف." }, refs: ["ISA 501", "IFRS 15"] },
      { title: { en: "Cotton price & NRV", ar: "سعر القطن وصافي القيمة" }, detail: { en: "Cotton and yarn positions revalue with the Cotlook A index; slow-moving dyed fabric loses value fast with fashion cycles.", ar: "مراكز القطن والغزل تُعاد تقييمها مع مؤشر كوتلوك؛ والقماش المصبوغ بطيء الحركة يفقد قيمته سريعًا مع دورات الموضة." }, refs: ["IAS 2"] },
      { title: { en: "QIZ / rules-of-origin compliance", ar: "امتثال قواعد المنشأ QIZ" }, detail: { en: "Certificates mis-stating origin expose the client to retroactive duties and buyer claims — a contingency, and a going-concern amplifier if the channel closes.", ar: "شهادات تخطئ في المنشأ تعرّض العميل لرسوم بأثر رجعي ومطالبات مشترين — تزامن، ومضخم للاستمرارية إن أُغلق القناة." }, refs: ["IAS 37", "ISA 570"] },
    ],
    fraudRedFlags: [
      { en: "Rebate receivables aging past the customary customs-verification window without write-down.", ar: "ذمم حوافز تتجاوز نافذة تحقق الجمارك المعتادة دون تحفيظ." },
      { en: "Shipments to related-party traders abroad at prices above market indices.", ar: "شحنات لتجار مرتبطين بالخارج بأسعار فوق مؤشرات السوق." },
      { en: "Fabric consumption variances persistently favorable across every style.", ar: "فروقات استهلاك القماش مواتية باستمرار في كل موديل." },
    ],
    minefields: [
      { topic: { en: "Government grants (rebates)", ar: "المنح الحكومية (الحوافز)" }, detail: { en: "Grants related to costs are deferred and released to P&L as the costs are incurred; lump-sum export support may be recognized when receivable conditions are substantially met.", ar: "المنح المرتبطة بالتكاليف تُؤجل وتُحقق مع تحقق التكاليف؛ والدعم التصديري المقطوع قد يُعرف عند الوفاء الجوهري بالشروط." }, ref: "IAS 20 / EAS" },
      { topic: { en: "Revenue: goods vs conversion service", ar: "الإيراد: بضاعة أم خدمة تحويل" }, detail: { en: "CMT is a service measured on output; own-material production is goods — mixing the two inflates revenue and cost together.", ar: "عقود التحويل خدمة تقاس بالمخرج؛ والتصنيع بمواد الشركة بضاعة — خلطهما يضخم الإيراد والتكلفة معًا." }, ref: "IFRS 15 / EAS 48" },
    ],
    regulatory: {
      en: "QIZ units register with the QIZ Unit (Ministry of Trade & Industry) and submit origin certificates per protocol; exporters claim duty drawback and export-rebate programs through GOEIC and the customs authority; spinning/weaving legacy assets carry their own restructuring history. Labor intensity means heavy social-insurance exposure, and cotton trading touches the (now liberalized) cotton marketing rules and Alexandria merchants' receipts.",
      ar: "تسجل وحدات QIZ لدى إدارة المناطق المؤهلة (وزارة التجارة والصناعة) وتقدم شهادات منشأ وفق البروتوكول؛ ويطالب المصدرون برد الرسوم وبرامج الحوافز عبر جهاز تنمية الصادرات والجمارك؛ وتحمل أصول الغزل والنسيج تاريخ إعادة هيكلة خاصًا بها. كثافة العمالة تعني تعرضًا ضخمًا للتأمينات، ويمس تداول القطن قواعد التسويق المحررة وإيصالات تجار الإسكندرية.",
    },
    ratios: [
      { name: { en: "Fabric utilization %", ar: "نسبة استغلال القماش" }, benchmark: "Output area ÷ input area", redFlag: { en: "Utilization above industry norms every month (inventory held off-book).", ar: "استغلال فوق المعايير كل شهر (مخزون خارج الدفاتر)." } },
      { name: { en: "Rebate margin", ar: "هامش الحوافز" }, benchmark: "Rebates ÷ export revenue", redFlag: { en: "Recognition rate exceeding program caps.", ar: "معدل اعتراف يتجاوز سقوف البرنامج." } },
      { name: { en: "Export days sales outstanding", ar: "أيام تحصيل التصدير" }, benchmark: "DSO by buyer (60–90 days)", redFlag: { en: "DSO stretching on the same buyer with rising balances.", ar: "أيام تمتد لنفس المشتري مع أرصدة ترتفع." } },
    ],
    procedures: [
      { text: { en: "Vouch rebate claims to customs/GOEIC approvals and correspondence; for claims still unverified at year-end, test management's probability assessment and the IAS 37 provision for clawback.", ar: "افحص مطالبات الحوافز على موافقات الجمارك وجهة الصادرات والمراسلات؛ وللمطالبات غير المتحققة نهاية السنة اختبر تقييم الإدارة للاحتمال ومخصص IAS 37 للاسترداد." }, ref: "IAS 20 / IAS 37" },
      { text: { en: "Perform fabric reconciliation: opening balances + customer consignments-in + purchases − consumption (BOM × output) − returns = closing, and investigate abnormal utilization.", ar: "نفّذ مطابقة القماش: رصيد أول + أمانات واردة + مشتريات − استهلاك (قائمة المواد × الإنتاج) − مرتجعات = رصيد أخير، وحقق في الاستغلال الشاذ." }, ref: "ISA 330 / ISA 501" },
      { text: { en: "For CMT contracts, agree WIP quantities to production floor data and test the stage-of-completion percentage against actual operations completed.", ar: "لعقود التحويل، طابق كميات تحت التشغيل ببيانات أرض الإنتاج واختبر نسبة الإتمام مقابل العمليات المنفذة فعلاً." }, ref: "IFRS 15 / ISA 330" },
      { text: { en: "Obtain buyer confirmations for year-end shipped-but-not-settled lots and reconcile to revenue cut-off documents (bills of lading dates).", ar: "احصل على تأكيدات المشترين للرسلات المشحونة غير المسواة نهاية السنة وطابقها بوثائق استقطاع الإيراد (تواريخ بوليصة الشحن)." }, ref: "ISA 505 / ISA 330" },
      { text: { en: "Roll forward cotton/yarn inventory from the last physical count, test current NRV against Cotlook/market prices at year-end, and inspect warehouse receipts.", ar: "دوّر مخزون القطن والغزل من آخر جرد فعلي، واختبر القيمة البيعية مقابل أسعار السوق نهاية السنة، وافحص إيصالات المخازن." }, ref: "IAS 2 / ISA 501" },
    ],
    kams: [
      { en: "Recognition of export rebates and duty drawback (conditions and timing).", ar: "الاعتراف بحوافز التصدير ورد الرسوم (الشروط والتوقيت)." },
      { en: "Inventory valuation of raw cotton and work-in-process.", ar: "تقييم مخزون القطن الخام وتحت التشغيل." },
    ],
    pitfalls: [
      { en: "Booking rebates at filing value when the customs audit history shows systematic reductions.", ar: "إثبات الحوافز بقيمة التقديم بينما يظهر تاريخ تدقيق الجمارك تخفيضات منتظمة." },
      { en: "Forgetting that QIZ non-compliance is not just a tax issue — it can unravel the year's export revenue with buyer claims.", ar: "نسيان أن عدم امتثال QIZ ليس مسألة ضرائب فحسب — قد يفكك إيراد التصدير السنوي بمطالبات المشترين." },
    ],
    relatedSections: ["inventory", "receivables", "revenue", "industry-risks"],
  },

  /* ================================================================ */
  /* AGRICULTURE & FOOD PROCESSING                                      */
  /* ================================================================ */
  {
    id: "agriculture",
    cluster: "industrial",
    icon: "sprout",
    name: { en: "Agriculture & Food Processing", ar: "الزراعة وتصنيع الأغذية" },
    tagline: {
      en: "Biological assets grow on trees — and fair value does too, in both directions.",
      ar: "الأصول البيولوجية تنمو على الأشجار — والقيمة العادلة تنمو أيضاً في الاتجاهين.",
    },
    overview: {
      en: "The sector runs from desert-land reclamation farms (Egypt's New Land projects) and Delta conventional farms to processing (juice, oils, dairy, sugar, poultry integration) and export packing. Living plants and livestock are biological assets measured at fair value less costs to sell through P&L under IAS 41 / EAS (a standing significant risk and an estimate-intense area), while harvested crops become IAS 2 inventory. Government support shapes economics: subsidized, quota and procurement prices for strategic crops (wheat, sugar cane), land allocation and reclamation contracts, and export incentives for horticulture. Climate and water allocation are genuine business risks — and for export growers, GlobalGAP and residue testing decide whether revenue exists at all.",
      ar: "يمتد القطاع من مزارع استصلاح الأراضي الصحراوية (مشروعات الأراضي الجديدة) ومزارع الدلتا التقليدية إلى التصنيع (عصائر وزيوت وألبان وسكر وتكامل دواجن) والتعبئة للتصدير. النباتات الحية والثروة الحيوانية أصول بيولوجية تقاس بالقيمة العادلة ناقصة تكاليف البيع عبر الأرباح وفق IAS 41 (خطر جوهري قائم ومنطقة كثيفة التقديرات)، بينما تصبح المحاصيل المحصودة مخزونًا وفق IAS 2. يشكل الدعم الحكومي الاقتصاد: أسعار مدعومة وتسويقية للمحاصيل الاستراتيجية (القمح وقصب السكر)، وعقود تخصيص واستصلاح أراضٍ، وحوافز تصدير للبستنة. والمناخ وحصص الري مخاطر أعمال حقيقية — وللمصدرين، شهادات GlobalGAP واختبارات المتبقيات تقرر وجود الإيراد أصلًا.",
    },
    revenueModel: {
      en: "Growers recognize revenue at harvest/delivery to packhouse or procurement centers at seasonal prices; processors buy crops, convert and sell B2B/B2C with price ladders tied to harvest peaks. Poultry integrators run breeding-to-slaughter cycles measured in weeks with brutally thin margins; export revenue depends on certification status at shipment.",
      ar: "يعرف المزارعون الإيراد عند الحصاد/التسليم لمحطات الفرز أو مراكز التسويق بأسعار موسمية؛ ويشتري المصنّعون المحاصيل ويحولونها ويبيعون بسلالم أسعار مرتبطة بذُرى الحصاد. وتدير مداجن التكامل دورات تربية-ذبح تُقاس بأسابيع بهوامش بالغة الرداءة؛ ويعتمد إيراد التصدير على حالة الاعتماد وقت الشحن.",
    },
    significantAccounts: [
      { account: { en: "Biological assets (orchards, livestock)", ar: "الأصول البيولوجية (بساتين، ثروة حيوانية)" }, assertions: ["EX", "VA", "PR"], why: { en: "Fair-value models (yield curves, prices, costs-to-sell) run through P&L.", ar: "نماذج قيمة عادلة (منحنيات إنتاج، أسعار، تكاليف بيع) تمر عبر الأرباح." } },
      { account: { en: "Harvested inventory", ar: "المخزون المحصود" }, assertions: ["EX", "VA"], why: { en: "Perishable, price-volatile post-harvest, storage-dependent.", ar: "سريع التلف متقلب السعر بعد الحصاد، متوقف على التخزين." } },
      { account: { en: "Government grants & procurement balances", ar: "المنح الحكومية وأرصدة التسويق" }, assertions: ["C", "VA"], why: { en: "Subsidy accounting and receivables from state buyers.", ar: "محاسبة الدعم وذمم على مشتري الدولة." } },
      { account: { en: "Land: use rights & reclamation WIP", ar: "الأرض: حقوق انتفاع واستصلاح تحت التنفيذ" }, assertions: ["RO", "VA", "CL"], why: { en: "Allocation contracts, leasehold classification, capitalization of development costs.", ar: "عقود التخصيص وتصنيف حق الانتفاع ورسملة تكاليف التطوير." } },
    ],
    inherentRisks: [
      { title: { en: "Biological asset fair values", ar: "القيمة العادلة للأصول البيولوجية" }, detail: { en: "Discounted yield models for orchards (mango, citrus, olive) and herd valuations need independent agronomy input; small price/yield assumption changes swing profit.", ar: "نماذج إنتاج مخصومة للبساتين (مانجو وحمضيات وزيتون) وتقييمات القطعان تحتاج مدخلات زراعية مستقلة؛ وتغييرات صغيرة في افتراضات السعر والإنتاج تتأرجح بالربح." }, refs: ["IAS 41", "ISA 540"] },
      { title: { en: "Cut-off at harvest", ar: "الاستقطاع عند الحصاد" }, detail: { en: "Crop delivered to a procurement center in June but priced/settled in July crosses the year for June-year-end farms; tonnage tickets decide.", ar: "محصول يُسلَّم لمركز تسويق في يونيو ويسعّر/يسوّى في يوليو يعبر حدود السنة لمزارع نهايتها يونيو؛ وتذاكر الأطنان تحسم." }, refs: ["IFRS 15 / IAS 2"] },
      { title: { en: "Grant accounting", ar: "محاسبة المنح" }, detail: { en: "Reclamation and irrigation subsidies offset costs or defer income; conditions (employment, area planted) can claw back.", ar: "دعم الاستصلاح والري يقابل تكاليف أو يؤجل دخلًا؛ والشروط (تشغيل، مساحة مزروعة) قد تسترد." }, refs: ["IAS 20"] },
      { title: { en: "Biosecurity & disease contingencies", ar: "تزامن الأمن الحيوي والأمراض" }, detail: { en: "Avian influenza quarantines and crop disease destroy cycles and create government compensation claims — disclose, don't bury.", ar: "حجر أنفلونزا الطيور وأمراض المحاصيل تدمر الدورات وتنشئ مطالبات تعويض حكومية — أفصح ولا تدفن." }, refs: ["IAS 37"] },
    ],
    fraudRedFlags: [
      { en: "Biological asset quantities growing while water allocations shrank (phantom trees).", ar: "كميات أصول بيولوجية تنمو بينما انكمشت حصص الري (أشجار وهمية)." },
      { en: "Sales to export packhouses at premium prices with no matching certifications.", ar: "مبيعات لمحطات تعبئة تصدير بأسعار ممتازة بلا شهادات مطابقة." },
      { en: "Grant income recognized at contract signing rather than as conditions are met.", ar: "دخل منح يُعرف عند توقيع العقد لا عند الوفاء بالشروط." },
    ],
    minefields: [
      { topic: { en: "Bearer plants vs produce", ar: "النباتات الحاملة مقابل ثمارها" }, detail: { en: "Since IAS 16/41 amendment, bearer plants (palm, orchard trunks) are PPE; the growing produce on them stays IAS 41 — one orchard, two frameworks.", ar: "منذ تعديل IAS 16/41، النباتات الحاملة (جذوع النخيل والبساتين) ممتلكات؛ والثمار النامية عليها تبقى IAS 41 — بستان واحد بإطارين." }, ref: "IAS 41 / IAS 16" },
      { topic: { en: "Land rights classification", ar: "تصنيف حقوق الأرض" }, detail: { en: "Long-term desert allocation with nominal fees may be a finance lease or an intangible right-of-use; the answer changes depreciation and disclosure entirely.", ar: "التخصيص الصحراوي طويل الأجل برسوم رمزية قد يكون تأجيرًا تمويليًا أو حق استخدام غير ملموس؛ والإجابة تغير الاستهلاك والإفصاح كليًا." }, ref: "IFRS 16 / IAS 38" },
    ],
    regulatory: {
      en: "The Ministry of Agriculture licenses farms and pesticide dealers; strategic-crop procurement runs through the Agricultural Cooperative Bank (PBDAC) and holding-company silos; NFSA regulates food processors' safety; exporters face GlobalGAP/residue regimes and destination-market rules. Desert land allocations follow Investment Law schemes with use covenants; water use is licensed by the Ministry of Water Resources. Each layer creates either a compliance contingency or a documentation trail the audit should pull.",
      ar: "ترخص وزارة الزراعة المزارع وبائعي المبيدات؛ ويجري تسويق المحاصيل الاستراتيجية عبر بنك التنمية والائتمان الزراعي وصوامع الشركات القابضة؛ وتنظم سلامة الغذاء المصنّعين؛ ويواجه المصدرون أنظمة GlobalGAP والمتبقيات وقواعد أسواق الوصول. تسير تخصيصات الأراضي الصحراوية على مساربات قانون الاستثمار بشروط استخدام؛ والري مرخص من وزارة الموارد المائية. كل طبقة تنشئ إما تزامن امتثال أو مسارًا وثائقيًا يجب أن يشدّه المراجع.",
    },
    ratios: [
      { name: { en: "Yield per feddan", ar: "الإنتاج للفدان" }, benchmark: "Tons ÷ area by crop", redFlag: { en: "Yields drifting far above agronomy norms for the region.", ar: "إنتاج ينأى كثيراً فوق المعايير الزراعية للمنطقة." } },
      { name: { en: "Biological FV gain %", ar: "نسبة مكسب القيمة العادلة" }, benchmark: "FV gain ÷ opening carrying value", redFlag: { en: "Gains booked every period in a falling-price market.", ar: "مكاسب تقيد كل فترة في سوق متراجع الأسعار." } },
      { name: { en: "Days inventory (perishables)", ar: "أيام المخزون (التالف)" }, benchmark: "Inventory ÷ COGS × 365", redFlag: { en: "Inventory days exceeding the product's shelf life.", ar: "أيام مخزون تتجاوز عمر المنتج على الرف." } },
    ],
    procedures: [
      { text: { en: "Physically inspect orchards/livestock on a rotational sample using GPS/imagery cross-checks, and reconcile field counts to the biological asset register.", ar: "افحص البساتين/القطعان فعليًا بعينة دورية مع تدقيق GPS/صور، وطابق عدّ الميدان بسجل الأصول البيولوجية." }, ref: "ISA 501 / IAS 41" },
      { text: { en: "Re-perform the fair-value model for one crop class (yield curve, price source, costs to harvest/sell), benchmarking against market prices at the reporting date.", ar: "أعد تنفيذ نموذج القيمة العادلة لفئة محصول واحدة (منحنى الإنتاج، مصدر السعر، تكاليف الحصاد والبيع) مع مقارنة بأسعار السوق بتاريخ التقرير." }, ref: "IAS 41 / ISA 540" },
      { text: { en: "Test harvest cut-off with delivery tickets from procurement centers around year-end, tracing tonnage to settlement advices and pricing decisions.", ar: "اختبر استقطاع الحصاد بتذاكر التسليم من مراكز التسويق حول نهاية السنة متتبعًا الأطنان لإشعارات التسوية وقرارات التسعير." }, ref: "ISA 330" },
      { text: { en: "Vouch grant recognition: agreement terms, conditions met, and government correspondence; recompute the deferred-grant release pattern.", ar: "افحص الاعتراف بالمنح: شروط الاتفاق وما تحقق منها والمراسلات الحكومية؛ وأعد احتساب نمط تحقق المنحة المؤجلة." }, ref: "IAS 20" },
      { text: { en: "For exporters, verify certification status (GlobalGAP numbers, residue tests) for the year's shipments and challenge any revenue booked on failed/retested lots.", ar: "للمصدرين، تحقق من حالة الاعتماد (أرقام GlobalGAP واختبارات المتبقيات) لشحنات السنة وناقش أي إيراد قُيد على رسلات رسبت أو أعيد اختبارها." }, ref: "ISA 240 / IFRS 15" },
    ],
    kams: [
      { en: "Valuation of biological assets (fair value less costs to sell).", ar: "تقييم الأصول البيولوجية (القيمة العادلة ناقصة تكاليف البيع)." },
      { en: "Recognition of government grants and procurement scheme balances.", ar: "الاعتراف بالمنح الحكومية وأرصدة منظومة التسويق." },
    ],
    pitfalls: [
      { en: "Letting management's agronomist be the only valuation expert on the file — engage your own specialist for material orchards.", ar: "ترك مهندس الإدارة الزراعي خبير التقييم الوحيد في الملف — استعن بأخصائي مستقل للبساتين الجوهرية." },
      { en: "Testing crop revenue with invoices while the real evidence is tonnage tickets and settlement advices.", ar: "اختبار إيراد المحاصيل بالفواتير بينما الدليل الحقيقي تذاكر الأطنان وإشعارات التسوية." },
    ],
    relatedSections: ["inventory", "industry-risks", "provisions"],
  },

  /* ================================================================ */
  /* IMPORT, TRADING & DISTRIBUTION                                     */
  /* ================================================================ */
  {
    id: "trading",
    cluster: "industrial",
    icon: "ship",
    name: { en: "Import, Trading & Distribution", ar: "الاستيراد والتجارة والتوزيع" },
    tagline: {
      en: "The customs ledger is the second set of books — reconcile it before you trust the GL.",
      ar: "دفتر الجمارك هو الدفتر الثاني — طابقه قبل أن تثق بالدفتر العام.",
    },
    overview: {
      en: "Trading companies import finished goods and materials, hold them briefly, and distribute to retail, wholesale and project customers; gross margin is a spread on working capital, so the business lives on inventory turns, supplier credit terms and FX. Egyptian importers have absorbed repeated devaluations, import controls (Letter of Credit directives, ACID cargo pre-registration, and the 2022–23 restrictions era), and customs valuation disputes (the new Customs Law 207/2020 and its executive regulations tightened post-clearance audits). Duty-drawback and temporary-admission schemes add complexity, and related-party purchases through offshore trading hubs are endemic to the sector — ISA 550 is not optional reading here.",
      ar: "تستورد شركات التجارة سلعًا ومواد وتحتفظ بها لفترة وجيزة وتوزعها على التجزئة والجملة وعملاء المشروعات؛ الهامش انتشار على رأس المال العامل، فيعيش النشاط على دوران المخزون وشروط ائتمان الموردين والعملة. استوعب المستوردون المصريون تخفيضات متتالية للجنيه، وضوابط استيراد (تعليمات الاعتمادات المستندية وتسجيل الشحنات ACID وعصر قيود 2022-2023)، ونزاعات تقييم جمركي (قانون الجمارك 207 لسنة 2020 ولوائحه شددت التدقيق اللاحق). وتضيف أنظمة رد الرسوم والإدخال المؤقت تعقيدًا، والمشتريات من أطراف ذات علاقة عبر مراكز تداول خارجية وباء قطاعي — قراءة ISA 550 هنا ليست اختيارية.",
    },
    revenueModel: {
      en: "Goods are bought on LC/collection terms, cleared, warehoused and sold with 60–180 day credit; margins reprice with each FX move and customs revaluation. Goods-in-transit and title transfer points (Incoterms) drive cut-off on both purchases and sales in the same week, and distributor rebates settle quarterly.",
      ar: "تُشترى السلع باعتمادات أو تحصيل مستندي وتُخمّن وتُخزن وتُباع بآجل 60-180 يومًا؛ وتُسعّر الهوامش مع كل تحرك للعملة وإعادة تقييم جمركي. البضاعة في الطريق ونقاط نقل الملكية (الانكوترمز) تحرك الاستقطاع على المشتريات والمبيعات في الأسبوع نفسه، وخصومات الموزعين تسوّى فصليًا.",
    },
    significantAccounts: [
      { account: { en: "Goods in transit & landed inventory cost", ar: "بضاعة في الطريق وتكلفة المخزون" }, assertions: ["C", "VA", "CO"], why: { en: "Freight, duty, LC costs and FX rates are capitalized into cost — allocation errors are systemic.", ar: "الشحن والرسوم ومصاريف الاعتمادات وأسعار الصرف تُرسمل في التكلفة — أخطاء التوزيع نظامية." } },
      { account: { en: "Trade payables & LC obligations", ar: "الذمم الدائنة والتزامات الاعتمادات" }, assertions: ["C", "VA"], why: { en: "Unrecorded liabilities arrive with late shipping documents.", ar: "التزامات غير مسجلة تصل مع مستندات شحن متأخرة." } },
      { account: { en: "FX gains/losses & forward cover", ar: "فروق العملات والتغطية الآجلة" }, assertions: ["A", "VA", "PR"], why: { en: "Monetary items remeasured at closing rates; hedging embedded in LC terms.", ar: "بنود نقدية يعاد قياسها بأسعار الإقفال؛ وتحوط مضمّن في شروط الاعتماد." } },
      { account: { en: "Related-party purchases", ar: "مشتريات من أطراف ذات علاقة" }, assertions: ["A", "VA", "PR"], why: { en: "Transfer pricing through offshore hubs inflates cost and shifts margin abroad.", ar: "تسعير عبر مراكز خارجية يضخم التكلفة وينقل الهامش للخارج." } },
    ],
    inherentRisks: [
      { title: { en: "Customs valuation exposure", ar: "تعرض التقييم الجمركي" }, detail: { en: "Post-clearance audits re-assess value/HS codes with retroactive duty plus penalties; a PCD assessment letter is a contingency the audit must evaluate, not a surprise.", ar: "يعيد التدقيق اللاحق تقييم القيمة والبنود بأثر رجعي وغرامات؛ وخطاب تقييم لاحق تزامن يجب أن يقيّمه المراجع لا مفاجأة." }, refs: ["Customs Law 207/2020", "IAS 37"] },
      { title: { en: "Understated liabilities", ar: "التزامات منقوصة" }, detail: { en: "Goods received before year-end with invoices arriving after (GR/NI) are the classic trading misstatement; warehouse receiving logs catch what the payables ledger misses.", ar: "بضاعة استُلمت قبل نهاية السنة بفواتير تصل بعدها هي التحريف التجاري الكلاسيكي؛ وسجلات استلام المخازن تلتقط ما يفوت دفتر الذمم." }, refs: ["ISA 330", "ISA 505"] },
      { title: { en: "Related-party transfer pricing", ar: "تسعير الأطراف ذات العلاقة" }, detail: { en: "Buying from an affiliated offshore trader at marked-up prices drains Egyptian taxable profit and misstates inventory cost — benchmark the margin against third-party deals.", ar: "الشراء من تاجر خارجي مرتبط بهامش مرتفع يستنزف الربح الخاضع للضريبة في مصر ويحرف تكلفة المخزون — قارن الهامش بصفقات الغرباء." }, refs: ["ISA 550", "IAS 1.124"] },
      { title: { en: "Duty drawback & temporary admission", ar: "رد الرسوم والإدخال المؤقت" }, detail: { en: "Re-export schemes require quantity tracking of bonded stock; using bonded goods locally triggers duties plus penalties.", ar: "تتطلب أنظمة إعادة التصدير تتبع كميات المخزون الجمركي؛ والاستخدام المحلي لبضاعة مودعة يستوجب رسومًا وغرامات." }, refs: ["Customs law"] },
    ],
    fraudRedFlags: [
      { en: "Customs ledger and GL gross movements that never reconcile to each other.", ar: "حركة الجمارك والدفتر العام الإجمالية لا تتطابقان أبدًا." },
      { en: "Inventory turns impossibly high for goods that physically sit in one warehouse.", ar: "دوران مخزون يستحيل ارتفاعه لبضاعة تجلس فعليًا في مخزن واحد." },
      { en: "Constant 'other income' from FX gains timed exactly against loss quarters.", ar: "دخل آخر دائم من فروق عملات يتزامن بدقة مع أرباع الخسارة." },
      { en: "Payments to offshore suppliers with no goods movement (funds routing).", ar: "مدفوعات لموردين خارجيين بلا حركة بضاعة (تمويل مسارات)." },
    ],
    minefields: [
      { topic: { en: "Landed cost capitalization", ar: "رسملة التكلفة النهائية" }, detail: { en: "Duty, freight, insurance, LC commissions and FX differences belong in inventory cost until sold; capitalizing finance interest into slow inventory breaches IAS 2.", ar: "الرسوم والشحن والتأمين وعمولات الاعتماد وفروق العملة تخص التكلفة حتى البيع؛ ورسملة فوائد التمويل في مخزون بطيء تخالف IAS 2." }, ref: "IAS 2 / IAS 21 / EAS" },
      { topic: { en: "Firm commitments & hedging", ar: "الالتزامات المؤكدة والتحوط" }, detail: { en: "Unbooked purchase commitments in FX need IFRS 7 disclosure and, for hedges, documentation; LCs are not always what they appear.", ar: "التزامات شراء بالعملة غير المسجلة تحتاج إفصاح IFRS 7 ووثائق تحوط للتحوّطات؛ والاعتمادات ليست دائمًا كما تبدو." }, ref: "IFRS 9 / IFRS 7" },
    ],
    regulatory: {
      en: "The Customs Authority (Law 207/2020) governs clearance, valuation and post-clearance audit; importers register with GOEIC (importer registry), use the ACID pre-registration system, and face sector rules (EDA for pharmaceuticals/medical devices, NTRA type approval for telecom equipment, NFSA for food). Tax exposures include transfer pricing documentation requirements under the Egyptian TP regulations (instructions 38/2023 era) — the file must exist when transactions do.",
      ar: "تدير مصلحة الجمارك (القانون 207 لسنة 2020) الإفراج والتقييم والتدقيق اللاحق؛ ويسجل المستوردون لدى جهاز تنمية الصادرات والواردات وسجل المستوردين، ويستخدمون منظومة ACID، ويواجهون قواعد قطاعية (هيئة الدواء للأدوية والمستلزمات، واعتماد النوع للاتصالات، وسلامة الغذاء). وتشمل التعرضات الضريبية متطلبات توثيق أسعار التحويل وفق التعليمات المصرية — يجب أن يكون الملف موجودًا حيث توجد المعاملات.",
    },
    ratios: [
      { name: { en: "Inventory turns", ar: "دوران المخزون" }, benchmark: "COGS ÷ avg inventory (× per year)", redFlag: { en: "Turns far above peers while warehouses stay full.", ar: "دوران أعلى بكثير من النظراء والمخازن ممتلئة." } },
      { name: { en: "Payables days vs supplier terms", ar: "أيام الذمم مقابل شروط الموردين" }, benchmark: "Payables ÷ purchases × 365", redFlag: { en: "Days below contractual terms signal unrecorded invoices.", ar: "أيام دون الشروط التعاقدية تشير لفواتير غير مسجلة." } },
      { name: { en: "Gross margin vs FX moves", ar: "الهامش مقابل تحركات العملة" }, benchmark: "GM% quarterly vs EGP moves", redFlag: { en: "Margins immune to devaluation periods.", ar: "هوامش محصنة ضد فترات خفض القيمة." } },
    ],
    procedures: [
      { text: { en: "Reconcile the customs ledger (form 13 / clearance files) to the GL inventory and payables movements line by line for the year — it is rarely done and always finds something.", ar: "طابق دفتر الجمارك (ملفات الإفراج) مع حركة المخزون والذمم في الدفتر العام سطرًا سطرًا للسنة — نادرًا ما يُفعل ودائمًا يكشف شيئًا." }, ref: "ISA 330 / ISA 550" },
      { text: { en: "Perform a search for unrecorded liabilities: review warehouse receiving reports and customs entries for December–January, bank payments after year-end, and open PO files; book the GR/NI population.", ar: "ابحث عن التزامات غير مسجلة: راجع سجلات استلام المخازن وقيود الجمارك لديسمبر-يناير، والمدفوعات البنكية بعد نهاية السنة، وملفات الأوامر المفتوحة؛ وسجل مجتمع البضاعة المستلمة بلا فاتورة." }, ref: "ISA 330 / ISA 505" },
      { text: { en: "Benchmark related-party purchase prices to third-party invoices for identical goods; quantify the cost inflation and consider ISA 550 disclosures and TP documentation.", ar: "قارن أسعار الشراء من الأطراف ذات العلاقة بفواتير الغرباء لسلع مطابقة؛ وحدد تضخم التكلفة وفكر في إفصاحات ISA 550 ووثائق أسعار التحويل." }, ref: "ISA 550" },
      { text: { en: "Test landed-cost build-up for a sample of shipments: duty (HS code), freight, insurance, LC fees and the FX rate used, recalculating inventory capitalization.", ar: "اختبر بناء التكلفة النهائية لعينة شحنات: الرسوم وبند التعريفة والشحن والتأمين ورسوم الاعتماد وسعر الصرف مستخدمين، مع إعادة احتساب رسملة المخزون." }, ref: "IAS 2" },
      { text: { en: "Obtain customs correspondence on post-clearance audits, evaluate assessments against IAS 37 (probable outflow?) and check the completeness of duties-payable provisions.", ar: "احصل على مراسلات الجمارك بشأن التدقيق اللاحق، وقيّم المطالبات مقابل IAS 37 (تدفق محتمل؟) وافحص اكتمال مخصصات الرسوم." }, ref: "IAS 37" },
    ],
    kams: [
      { en: "Foreign-currency exposure and the valuation of monetary items.", ar: "التعرض للعملات الأجنبية وتقييم البنود النقدية." },
      { en: "Related-party procurement balances and transfer pricing.", ar: "أرصدة المشتريات مع الأطراف ذات العلاقة وتسعير التحويل." },
    ],
    pitfalls: [
      { en: "Confirming receivables diligently while never reconciling customs to GL — the sector's real books are at the port.", ar: "تأكيد الذمم باجتهاد دون مطابقة الجمارك بالدفتر العام — الدفاتر الحقيقية للقطاع عند الميناء." },
      { en: "Ignoring the bonded/temporary-admission quantities that sit off the books until re-exported.", ar: "تجاهل كميات الإدخال المؤقت التي تقعد خارج الدفاتر حتى إعادة التصدير." },
    ],
    relatedSections: ["inventory", "payables", "related-parties", "industry-risks"],
  },

  /* ================================================================ */
  /* CONSTRUCTION & CONTRACTING                                         */
  /* ================================================================ */
  {
    id: "construction",
    cluster: "infrastructure",
    icon: "hard-hat",
    name: { en: "Construction & Contracting", ar: "التشييد والمقاولات" },
    tagline: {
      en: "Percentage of completion is a judgment engine — revenue follows the cost surveyor's tape.",
      ar: "نسبة الإتمام محرك أحكام — الإيراد يتبع شريط قياس المهندس المقيم.",
    },
    overview: {
      en: "Contractors build for private developers, industrial clients and the state (ministries, New Urban Communities Authority), on fixed-price, remeasurable or cost-plus contracts, often financed through advances andLetters of guarantee chains. Revenue under IFRS 15 / EAS 48 follows progress (typically cost-to-cost), so the accounting leans on site cost reports, quantity surveys and variation-order approvals — all client-generated, all judgmental. Retention monies (5–10%) and performance guarantees tail contracts for years; claims and EOT (extension of time) disputes sit in revenue as unapproved entitlements. Egyptian contractors also carry heavy equipment fleets, expatriate labor pools, and exposure to state receivables whose collection timelines drift with budget cycles — going concern in this sector is a cash question, not a profit question.",
      ar: "يبني المقاولون لمطورين خاصين وعملاء صناعيين والدولة (الوزارات وجهاز التعمير) بعقود ثابتة أو معادة القياس أو التكلفة زائد هامش، وتمويل عبر دفعات مقدمة وسلاسل خطابات ضمان. يتبع الإيراد وفق IFRS 15 / المعيار المصري 48 نسبة التقدم (عادة التكلفة إلى التكلفة)، فتستند المحاسبة على تقارير تكاليف المواقع والحسابات الكمية واعتمادات أوامر التغيير — كلها من إعداد العميل وكلها حكمية. المبالغ المحتجزة (5–10%) وخطابات الضمان تلازم العقود سنوات؛ والمطالبات وتمديدات المدة تقعد في الإيراد كاستحقاقات غير معتمدة. ويحمل المقاولون المصريون أساطيل معدات وأعداد عمالة كبيرة وتعرضًا لذمم الدولة التي تنجرف مواعيد تحصيلها مع دورات الموازنة — الاستمرارية في القطاع سؤال نقد لا ربح.",
    },
    revenueModel: {
      en: "Progress billings (monthly IPCs) certified by consultants generate receivables; revenue recognized on progress exceeds or trails billings, creating contract assets/liabilities. The cost-to-cost curve is the audit battleground: advance purchases and front-loaded subcontractor billings bend it to management's will unless the auditor rebuilds it from site records.",
      ar: "المستخلصات الشهرية المعتمدة من الاستشاري تولّد ذممًا؛ ويتقدم الإيراد المعترف به على التقدم أو يتخلف عن المستخلصات فينشئ أصولًا والتزامات عقود. منحنى التكلفة إلى التكلفة ساحة المعركة: المشتريات المسبقة ومستخلصات المقاولين من الباطن المقدمة تعوجّه لإرادة الإدارة ما لم يعده المراجع من سجلات الموقع.",
    },
    significantAccounts: [
      { account: { en: "Contract revenue (PoC)", ar: "إيراد العقود (نسبة الإتمام)" }, assertions: ["VA", "C", "CO"], why: { en: "Progress measurement and unapproved variations drive estimation risk.", ar: "قياس التقدم وأوامر التغيير غير المعتمدة تقود مخاطر التقدير." } },
      { account: { en: "Contract assets / liabilities", ar: "أصول والتزامات العقود" }, assertions: ["VA", "EX", "PR"], why: { en: "Netting, retention and advance positions disclosed by contract.", ar: "صافي، واحتجازات، ومقدّمات — تفصح حسب كل عقد." } },
      { account: { en: "Retentions & receivables from state entities", ar: "الاحتجازات والذمم على جهات الدولة" }, assertions: ["EX", "VA"], why: { en: "Long-tail collection; ECL on aged public receivables.", ar: "تحصيل طويل الذيل؛ وخسائر متوقعة على ذمم حكومية مسنة." } },
      { account: { en: "Construction equipment (PPE)", ar: "معدات الإنشاءات" }, assertions: ["EX", "VA"], why: { en: "Utilization-based depreciation, idle plant during pauses, component overhauls.", ar: "استهلاك على الاستغلال، ومعدات عاطلة أثناء التوقفات، وإصلاحات كبرى للمكونات." } },
    ],
    inherentRisks: [
      { title: { en: "Cost-to-cost manipulation", ar: "التلاعب بالتكلفة إلى التكلفة" }, detail: { en: "Front-loading costs (advance material purchases, subcontractor over-certification) inflates progress and books profit early; rebuild the curve from independent quantity surveys.", ar: "تحميل التكاليف مبكرًا (مشتريات مواد مسبقة، إفراط في اعتماد الباطن) يضخم التقدم ويحجز الربح مبكرًا؛ أعد بناء المنحنى من حصر كميات مستقل." }, refs: ["IFRS 15", "ISA 540"] },
      { title: { en: "Unapproved variations & claims", ar: "أوامر تغيير ومطالبات غير معتمدة" }, detail: { en: "Recognizing revenue on variations the employer has not approved (or claims likely to fail) books profit that later reverses — IFRS 15 constraining variable consideration applies.", ar: "الاعتراف بإيراد على أوامر لم يعتمدها صاحب العمل (أو مطالبات مرجحة الفشل) يحجز ربحًا يُعكس لاحقًا — ينطبق تقييد الاعتبار المتغير في IFRS 15." }, refs: ["IFRS 15.50–58"] },
      { title: { en: "Onerous contract provisions", ar: "مخصصات العقود المجحفة" }, detail: { en: "Fixed-price contracts signed pre-devaluation became loss-making on FX and material spikes; IAS 37 requires the loss recognized in full and immediately.", ar: "عقود ثابتة وُقعت قبل خفض القيمة صارت خاسرة مع صدمات العملة والمواد؛ IAS 37 يفرض اعترافًا كاملاً وفوريًا بالخسارة." }, refs: ["IAS 37", "EAS"] },
      { title: { en: "State receivables & liquidity", ar: "ذمم الدولة والسيولة" }, detail: { en: "Receivables from government employers age in years; cash flow breaks before profit does — pair ISA 570 with covenant and guarantee-call analysis.", ar: "تشيخ ذمم جهات الدولة لسنوات؛ يتكسر التدفق النقدي قبل الربح — اقرن ISA 570 بتحليل الالتزامات وخطابات الضمان." }, refs: ["ISA 570", "IFRS 9"] },
    ],
    fraudRedFlags: [
      { en: "Progress percentage on the same contract rising faster than certified site quantities.", ar: "نسبة التقدم لنفس العقد ترتفع أسرع من الكميات المعتمدة بالموقع." },
      { en: "Subcontractor payments ahead of their certified work.", ar: "مدفوعات للمقاول من الباطن متقدمة على أعماله المعتمدة." },
      { en: "Variation orders recognized in full with zero employer correspondence.", ar: "أوامر تغيير تُعرف كاملة بلا أي مراسلات مع صاحب العمل." },
      { en: "Equipment depreciation pauses during halted sites ('the machines are resting').", ar: "إيقاف استهلاك المعدات أثناء تعطل المواقع ('الآلات ت-restح')." },
    ],
    minefields: [
      { topic: { en: "Single vs separate performance obligations", ar: "التزام أداء واحد أم منفصل" }, detail: { en: "Design-build or EPC scopes may bundle several obligations with distinct progress profiles; the accounting conclusion changes the revenue pattern.", ar: "نطاقات التصميم والتنفيذ أو EPC قد تجمع التزامات عدة بمنحنيات تقدم مختلفة؛ والاستنتاج يغير نمط الإيراد." }, ref: "IFRS 15 / EAS 48" },
      { topic: { en: "Borrowing costs on phased assets", ar: "تكاليف الاقتراض لأصول مرحلية" }, detail: { en: "Project finance for a self-developed asset capitalizes during construction then the asset splits to PPE/inventory by business intent.", ar: "تمويل المشروع لأصل ذاتي التطوير يُرسمل أثناء البناء ثم يتوزع الأصل بين ممتلكات ومخزون بحسب النية." }, ref: "IAS 23" },
    ],
    regulatory: {
      en: "Contractors register with the Egyptian Federation for Construction and Building Contractors (classifications determine bid ceilings); public procurement runs through state-tendering law with certification mechanics (consultants' IPCs); NUCA and ministry projects bring specific guarantee and retention rules. Labor on sites involves heavy social-insurance and subcontractor withholding exposure (1% contractors' tax on subcontracting under the Egyptian rules), and equipment imports touch customs regimes — each is a compliance checkpoint the audit should map.",
      ar: "يسجل المقاولون لدى اتحاد مقاولي التشييد والبناء (والتصنيفات تحدد سقوف الطروحات)؛ وتمر المشتريات العامة بقانون المناقصات بآلية اعتماد المستخلصات؛ وتجلب مشروعات جهاز التعمير والوزارات قواعد ضمان واحتجاز خاصة. تنطوي العمالة على تعرض ضخم للتأمينات وخصم ضريبة المقاولات من الباطن (1%)، وتمس استيرادات المعدات أنظمة الجمارك — كل نقطة خريطة امتثال يجب أن يرسمها المراجع.",
    },
    ratios: [
      { name: { en: "Cost-to-cost vs certified progress", ar: "التكلفة إلى التكلفة مقابل التقدم المعتمد" }, benchmark: "Gap % by major contract", redFlag: { en: "Persistent positive gap (booked progress > certified progress).", ar: "فجوة موجبة دائمة (تقدم محاسب > تقدم معتمد)." } },
      { name: { en: "Receivable days from state entities", ar: "أيام الذمم على جهات الدولة" }, benchmark: "DSO by employer type", redFlag: { en: "DSO beyond guarantee validity windows.", ar: "أيام تتجاوز نوافذ صلاحية الضمانات." } },
      { name: { en: "Backlog coverage", ar: "تغطية رصيد الأعمال" }, benchmark: "Backlog ÷ annual revenue (1.5–2.5×)", redFlag: { en: "Backlog thinning while fixed costs hold (going-concern pressure).", ar: "رصيد يتراقص بينما تثبت التكاليف الثابتة (ضغط استمرارية)." } },
    ],
    procedures: [
      { text: { en: "For major contracts, re-perform progress from the quantity surveyor's certified reports, not management's cost ledger: certified quantities ÷ total bill of quantities, cross-checked to cost-to-cost.", ar: "للعقود الكبرى، أعد تنفيذ التقدم من تقارير الحصر المعتمدة لا دفتر تكاليف الإدارة: الكميات المعتمدة ÷ إجمالي البنود، مع تدقيق مقابل التكلفة إلى التكلفة." }, ref: "IFRS 15 / ISA 540" },
      { text: { en: "Trace every variation order recognized to employer/consultant approval status at year-end; apply the variable-consideration constraint to contested claims.", ar: "تتبع كل أمر تغيير معترف به لحالة اعتماد صاحب العمل/الاستشاري نهاية السنة؛ وطبق قيد الاعتبار المتغير على المطالبات المتنازع عليها." }, ref: "IFRS 15" },
      { text: { en: "Roll forward site costs: vouch major subcontractor certifications, advance payments (deduct from progress), and materials-on-site quantities to the physical site report.", ar: "دوّر تكاليف الموقع: افحص اعتمادات الباطن الرئيسية والدفعات المقدمة (تُخصم من التقدم) وكميات مواد الموقع مقابل التقرير الميداني." }, ref: "ISA 330" },
      { text: { en: "Test onerous contracts: for fixed-price legacy contracts, rebuild expected cost-to-complete at current input prices and propose the IAS 37 provision where losses emerge.", ar: "اختبر العقود المجحفة: للعقود الثابتة القديمة أعد بناء التكلفة المتوقعة للإتمام بأسعار المدخلات الحالية واقترح مخصص IAS 37 حيث تظهر الخسائر." }, ref: "IAS 37" },
      { text: { en: "Age receivables by employer, challenge ECL staging on aged state balances, and read the guarantee letters for calls/covenants feeding the going-concern assessment.", ar: "عنّر الذمم حسب صاحب العمل، وناقش تدرج الخسائر على أرصدة الدولة المسنة، واقرأ خطابات الضمان بحثًا عن مطالبات وعهود تغذي تقييم الاستمرارية." }, ref: "IFRS 9 / ISA 570" },
    ],
    kams: [
      { en: "Revenue recognition on long-term contracts (progress measurement, variations, claims).", ar: "الاعتراف بإيراد العقود طويلة الأجل (قياس التقدم وأوامر التغيير والمطالبات)." },
      { en: "Expected credit losses on long-tail receivables and going concern.", ar: "الخسائر المتوقعة على الذمم طويلة الذيل والاستمرارية." },
    ],
    pitfalls: [
      { en: "Accepting the internal cost report as progress evidence without the consultant's certification behind it.", ar: "قبول تقرير التكاليف الداخلي كدليل تقدم دون اعتماد الاستشاري خلفه." },
      { en: "Letting 'claims will be approved' optimism override the IFRS 15 constraint.", ar: "ترك تفاؤل 'ستُعتمد المطالبات' يتجاوز قيد IFRS 15." },
    ],
    relatedSections: ["receivables", "revenue", "fixed-assets", "provisions", "industry-risks"],
  },
]
