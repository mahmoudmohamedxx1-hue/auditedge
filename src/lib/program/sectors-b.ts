import type { SectorProfileBase } from "./sectors-types"

/** Sector Risk Library — part B: infrastructure & property, services, structures. */
export const SECTORS_B: SectorProfileBase[] = [
  /* ================================================================ */
  /* REAL ESTATE DEVELOPMENT                                            */
  /* ================================================================ */
  {
    id: "realestate",
    cluster: "infrastructure",
    icon: "building",
    name: { en: "Real Estate Development", ar: "التطوير العقاري" },
    tagline: {
      en: "Cash arrives years before revenue exists — off-plan accounting is a cash-in vs profit-out puzzle.",
      ar: "يصل النقد سنوات قبل وجود الإيراد — محاسبة البيع على الخارطة لغز نقد داخل وربح خارج.",
    },
    overview: {
      en: "Developers acquire land (often through installment land contracts with private owners or state allocations), obtain permits, pre-sell units off-plan under the Real Estate Development Law 176/2007 and its bylaws (collected funds partially controlled via escrow-like collection accounts with the mortgage finance fund), and construct over 2–4 years. Accounting under IFRS 15 / EAS 48 asks whether the buyer deposit transfers control over time or at handover — most Egyptian off-plan sales book revenue at delivery, holding collections as contract liabilities, while the P&L timing of costs (land, infrastructure, finance) determines whether profit shows early or never. The sector is collateralized by land banks whose carrying value versus market (and versus the mortgage-fund-controlled collections) is the balance sheet's soul, and developers live on construction progress, buyer default rates and construction cost inflation.",
      ar: "يستحوذ المطورون على الأراضي (غالبًا بعقود تقسيط مع ملاك خاص أو تخصيصات حكومية)، ويستخرجون التراخيص، ويبيعون وحدات على الخارطة وفق قانون التطوير العقاري 176 لسنة 2007 ولوائحه (بضبط جزئي للتحصيل عبر حسابات تجميع مع صندوق التمويل العقاري)، وينفذون على مدى 2-4 سنوات. تسأل المحاسبة وفق IFRS 15 / المعيار المصري 48 هل ينقل قسط المشتري السيطرة بمرور الوقت أم عند التسليم — أغلب البيع المصري على الخارطة يثبت الإيراد عند التسليم ممسكًا التحصيلات كالتزامات عقود، بينما يحدد توقيت التكاليف (أرض، بنية تحتية، تمويل) إن ظهر الربح مبكرًا أو لم يظهر أبدًا. القطاع مضمون بمخازن أراضٍ قيمتها الدفترية مقابل السوق (ومقابل التحصيلات المضبوطة) هي روح الميزانية، ويعيش المطورون على تقدم التنفيذ ومعدلات إخلال المشترين وتضخم تكاليف البناء.",
    },
    revenueModel: {
      en: "Customer collections arrive on reservation and construction-linked milestones, years ahead of revenue recognition for handover-based models; the mismatch creates large contract liabilities funding operations. Revenue timing differs by project: completed-unit sales recognize at handover; some infrastructure/land-lot sales (e.g. serviced plots with transfer of control) recognize earlier. Cut-off concentrates on December handovers and on the definition of 'delivery' (key handover vs utility connection vs defect-free certificate).",
      ar: "تصل تحصيلات العملاء عند الحجز ومراحل الإنشاء سنوات قبل الاعتراف بالإيراد لنماذج التسليم؛ ويولّد عدم التطابق التزامات عقود ضخمة تمول التشغيل. يختلف توقيت الإيراد بالمشروع: مبيعات الوحدات المكتملة تعرف عند التسليم؛ وبعض مبيعات الأراضي والبنية (قطع خدماتها منقولة السيطرة) تعرف أبكر. يتركز الاستقطاع على تسليمات ديسمبر وتعريف 'التسليم' (مفاتيح أم توصيل مرافق أم شهادة خلو عيوب).",
    },
    significantAccounts: [
      { account: { en: "Contract liabilities (customer advances)", ar: "التزامات العقود (دفعات العملاء)" }, assertions: ["C", "VA", "PR"], why: { en: "The funding engine of the P&L statement — completeness and release timing decide profit.", ar: "محرك التمويل في القائمة — الاكتمال وتوقيت التحقق يقرران الربح." } },
      { account: { en: "Land bank & development costs", ar: "مخزون الأراضي وتكاليف التطوير" }, assertions: ["VA", "EX", "CL"], why: { en: "Capitalization of land installments, infrastructure and interest into inventory by project.", ar: "رسملة أقساط الأرض والبنية والفوائد في المخزون حسب المشروع." } },
      { account: { en: "Revenue at handover", ar: "الإيراد عند التسليم" }, assertions: ["CO", "C", "A"], why: { en: "December handover batches and 'delivered' definitions move years of revenue.", ar: "دفعات تسليم ديسمبر وتعريفات 'المسلّم' تحرك إيراد سنوات." } },
      { account: { en: "Realized/deferred tax on undelivered projects", ar: "الضريبة المحققة/المؤجلة على مشروعات غير مسلمة" }, assertions: ["A", "VA", "PR"], why: { en: "Egyptian tax rules tax advances on uncompleted projects (Law 91/2005 regime and practice) — a measurement minefield.", ar: "تفرض القواعد المصرية ضريبة على الدفعات لمشروعات غير مكتملة — حقل ألغام قياس." } },
    ],
    inherentRisks: [
      { title: { en: "Revenue timing & 'handover' definition", ar: "توقيت الإيراد وتعريف 'التسليم'" }, detail: { en: "Booking December handovers on units still missing utility connections, or recognizing on key handover when contractual control differs — the single largest judgment in the sector.", ar: "إثبات تسليمات ديسمبر لوحدات لم توصل مرافقها، أو الاعتراف بتسليم المفاتيح بينما السيطرة التعاقدية تختلف — أكبر حكم منفرد في القطاع." }, refs: ["IFRS 15 / EAS 48", "ISA 540"] },
      { title: { en: "Cost capitalization into unsold inventory", ar: "رسملة التكاليف في مخزون غير مباع" }, detail: { en: "Idle-period interest, marketing and corporate overheads capitalized into stalled projects defer losses; test by-project viability and NRV.", ar: "فوائد فترات التعطل وتسويق ومصروفات عامة تُرسمل في مشروعات متعطلة فتؤجل الخسائر؛ اختبر الجدوى لكل مشروع والقيمة البيعية." }, refs: ["IAS 2 / IAS 23", "IAS 37"] },
      { title: { en: "Buyer defaults & resales", ar: "إخلال المشترين وإعادة البيع" }, detail: { en: "Cancellation of off-plan contracts triggers refund obligations and forfeited-installment income — estimate the default curve from cancellation history.", ar: "فسخ عقود الخارطة ينشئ التزامات استرداد ودخل مقدمات مصادرة — قدّر منحنى الإخلال من تاريخ الإلغاءات." }, refs: ["IFRS 15", "IAS 37"] },
      { title: { en: "Land title & allocation compliance", ar: "ملكية الأرض والامتثال للتخصيص" }, detail: { en: "Installment land contracts without registered transfer, state allocations with use covenants, and retroactive fees are rights-and-obligations risks sitting on the balance sheet's largest line.", ar: "عقود أرض بالتقسيط دون نقل مسجل، وتخصيصات بشروط استخدام، ورسوم بأثر رجعي — مخاطر حقوق والتزامات تقعد على أكبر بند بالميزانية." }, refs: ["ISA 550 / ISA 250"] },
    ],
    fraudRedFlags: [
      { en: "Handover certificates clustered in the last week of December.", ar: "شهادات تسليم متجمعة في آخر أسبوع من ديسمبر." },
      { en: "Contract liabilities released to revenue on projects with stalled construction.", ar: "التزامات عقود تُحقق إيرادًا على مشروعات متوقفة الإنشاء." },
      { en: "Related-party contractors billing ahead of certified progress.", ar: "مقاولون مرتبطون يفوترون متقدمين على التقدم المعتمد." },
      { en: "Land 'purchases' from affiliates at valuations with no market support.", ar: "'مشتريات' أراضٍ من شركات مرتبطة بتقييمات بلا سند سوقي." },
    ],
    minefields: [
      { topic: { en: "Deposit model vs over-time model", ar: "نموذج الدفعة مقابل نموذج بمرور الوقت" }, detail: { en: "Whether the deposit is 'in substance a prepayment for a completed unit' or the developer is a 'construction service provider' changes everything — analyze enforceable rights, substitution and customer control.", ar: "هل الدفعة 'مقدمة لوحدة مكتملة' جوهريًا أم أن المطور 'مقدم خدمة إنشاء' — يغير كل شيء؛ حلل الحقوق الملزمة والإحلال وسيطرة العميل." }, ref: "IFRS 15 / EAS 48" },
      { topic: { en: "Borrowing costs on phased development", ar: "تكاليف الاقتراض للتطوير المرحلي" }, detail: { en: "Capitalization ceases when substantially complete — but stalled projects with paused construction should stop capitalizing, hurting profit honestly.", ar: "تتوقف الرسملة عند الإتمام الجوهري — لكن المشروعات المتعطلة يجب أن تتوقف عنها فتضرب الربح بصدق." }, ref: "IAS 23" },
    ],
    regulatory: {
      en: "Law 176/2007 (amended by Law 14/2023 era changes) requires developer licensing by the Real Estate Development Fund/MOUH, project registration, and collecting buyer funds through controlled accounts at the Mortgage Finance Fund; delivery deadlines and unit specifications are regulated. On the tax side, advances on uncompleted projects are effectively taxed under the Egyptian practice (special rules for developers), stamp duty on real-estate registrations applies, and retroactive infrastructure fees (e.g., 2019-era rulings) have hit listed developers — all require provision and disclosure analysis.",
      ar: "يشترط القانون 176 لسنة 2007 وتعديلاته ترخيص المطور لدى صندوق التطوير العقاري/وزارة الإسكان، وتسجيل المشروع، وتحصيل أموال العملاء عبر حسابات مضبوطة لدى صندوق التمويل العقاري؛ وتُنظّم مواعيد التسليم ومواصفات الوحدات. ضريبيًا، تخضع الدفعات على المشروعات غير المكتملة للضريبة فعليًا وفق العمل المصري (قواعد خاصة للمطورين)، وتُطبق رسوم الدمغة على التوثيق، وضربت رسوم البنية التحتية بأثر رجعي المطورين المقيدين — كلها تحتاج تحليل مخصص وإفصاح.",
    },
    ratios: [
      { name: { en: "Contract liabilities coverage", ar: "تغطية التزامات العقود" }, benchmark: "Advances ÷ remaining construction cost", redFlag: { en: "Advances running out while construction sits at 60%.", ar: "دفعات تنفد والإنشاء عند 60%." } },
      { name: { en: "Deliveries vs plan", ar: "التسليمات مقابل الخطة" }, benchmark: "Units handed over ÷ units promised by year", redFlag: { en: "Perpetual 6-month slippage announcements.", ar: "إعلانات تأجيل ستة أشهر دائمة." } },
      { name: { en: "Cancellation rate", ar: "معدل الإلغاء" }, benchmark: "Cancelled ÷ sold units", redFlag: { en: "Cancellation income growing as sales slow.", ar: "دخل الإلغاء ينمو مع تباطؤ المبيعات." } },
    ],
    procedures: [
      { text: { en: "Vouch every December handover to the signed delivery protocol, utility connection evidence and customer keys register; test the control-transfer point in the contract for one project end-to-end.", ar: "افحص كل تسليم ديسمبر بمحضر التسليم الموقع وأدلة توصيل المرافق وسجل المفاتيح؛ واختبر نقطة نقل السيطرة في العقد لمشروع واحد من البداية للنهاية." }, ref: "IFRS 15 / ISA 330" },
      { text: { en: "Recompute inventory capitalization per project: land installments, infrastructure allocation, capitalized interest and its cessation, and corporate cost allocations — challenge stalled-project capitalization.", ar: "أعد احتساب رسملة المخزون لكل مشروع: أقساط الأرض وتوزيع البنية والفوائد المرسملة وتوقفها وتوزيع المصروفات العامة — وناقش رسملة المشروعات المتعطلة." }, ref: "IAS 23 / IAS 2" },
      { text: { en: "Roll the sales ledger: reservation → contract → collections → handover, and reconcile to the Mortgage Finance Fund collection-account statements for regulated projects.", ar: "دوّر دفتر المبيعات: حجز → عقد → تحصيلات → تسليم، وطابق بكشوف حسابات التجميع لدى صندوق التمويل العقاري للمشروعات المنظمة." }, ref: "ISA 330 / Law 176" },
      { text: { en: "Estimate the default/cancellation provision from cancellation history by vintage, and test refund obligations against the contract forfeiture clauses.", ar: "قدّر مخصص الإخلال/الإلغاء من تاريخ الإلغاءات لكل دفعة، واختبر التزامات الاسترداد مقابل بنود المصادرة بالعقد." }, ref: "IFRS 15 / IAS 37" },
      { text: { en: "Obtain title deeds, allocation decrees and their use covenants for the largest land parcels; inspect boundaries and check for retroactive fees and disputes.", ar: "احصل على صحائف الملكية وقرارات التخصيص وشروطها لأكبر القطع؛ وافحص الحدود وتحقق من رسوم بأثر رجعي ونزاعات." }, ref: "ISA 550 / ISA 250" },
    ],
    kams: [
      { en: "Revenue recognition timing on off-plan sales and handover criteria.", ar: "توقيت الاعتراف بالإيراد على البيع بالخارطة ومعايير التسليم." },
      { en: "Valuation of land bank and capitalization of development costs.", ar: "تقييم مخزون الأراضي ورسملة تكاليف التطوير." },
    ],
    pitfalls: [
      { en: "Treating all customer advances as 'deferred revenue' without reading the actual control-transfer terms.", ar: "معاملة كل دفعات العملاء 'إيراد مؤجل' دون قراءة شروط نقل السيطرة الفعلية." },
      { en: "Forgetting the tax cash-out on advances while assessing liquidity and going concern.", ar: "نسيان الضريبة النقدية على الدفعات أثناء تقييم السيولة والاستمرارية." },
    ],
    relatedSections: ["receivables", "revenue", "inventory", "industry-risks"],
  },

  /* ================================================================ */
  /* HEALTHCARE & PHARMACIES                                            */
  /* ================================================================ */
  {
    id: "healthcare",
    cluster: "services",
    icon: "stethoscope",
    name: { en: "Healthcare & Pharmacies", ar: "الرعاية الصحية والصيدليات" },
    tagline: {
      en: "Three payers, one patient: cash, insurers and the state — completeness is the fight.",
      ar: "ثلاثة دافعين ومريض واحد: نقدي وشركات تأمين والدولة — الاكتمال هو المعركة.",
    },
    overview: {
      en: "Private hospitals, clinics, labs and pharmacy chains earn from three revenue channels — self-pay patients at the counter, insurance companies and corporate contracts (billed at tariff, settled with deductions months later), and state schemes (treatment-at-state-expense approvals, HIO) — each with its own pricing, control and settlement reality. Costs are dominated by medical consumables and drugs (expiry-risk inventory), physician fee-sharing arrangements (regulatorily sensitive) and equipment depreciation. The sector answers to the Ministry of Health (facility licensing), the Egyptian Drug Authority (pharmaceutical chain licensing, narcotics registers) and, for listed entities, the FRA; universal health insurance rollout is reshaping payer economics. Misstatements concentrate in insurance-receivable valuations, tariff-difference reconciliations, and unrecorded cash revenue.",
      ar: "تكسب المستشفيات والعيادات والمعامل وسلاسل الصيدليات من ثلاث قنوات — مرضى نقديون عند الكاشير، وشركات تأمين وعقود شركات (تُفوتر بالتعريفة وتسوى بخصومات بعد شهور)، ومخططات الدولة (قرارات علاج على نفقة الدولة، الهيئة العامة للتأمين الصحي) — لكل منها تسعيرها وضوابطها وواقع تسويتها. تهيمن التكاليف على المستلزمات الطبية والأدوية (مخزون خطر التقادم)، ومشاركة أطباء الإيراد (حساسة تنظيميًا) واستهلاك المعدات. يخضع القطاع لوزارة الصحة (ترخيص المنشآت) وهيئة الدواء (ترخيص السلسلة الصيدلانية وسجلات المخدرات) والهيئة العامة للرقابة المالية للمقيد منها؛ وإعادة هيكلة الدافعين مع التأمين الصحي الشامل مستمرة. تتركز التحريفات في تقييم ذمم التأمين، ومطابقات فروق التعريفة، وإيراد نقدي غير مسجل.",
    },
    revenueModel: {
      en: "Cash revenue is recognized at service delivery (POS + counter receipts); insurance revenue is invoiced at tariff and trued-up on settlement (deductions, disputed claims, prior-authorization failures); state-scheme claims follow approval letters with their own price lists. The payer mix decides the audit: a 70%-insured hospital lives in its receivables aging, a cash clinic lives in its daily cash-up.",
      ar: "يُعرف الإيراد النقدي عند تقديم الخدمة (نقاط بيع وإيصالات كاونتر)؛ والتأمين يُفوتر بالتعريفة ويُعدل عند التسوية (خصومات ومطالبات متنازع عليها وفشل موافقات مسبقة)؛ وقرارات الدولة تتبع خطابات الموافقة بقوائمها. مزيج الدافعين يقرر المراجعة: مستشفى 70% منها تأمين يعيش في أعمار ذممه، وعيادة نقدية تعيش في قفلها النقدي اليومي.",
    },
    significantAccounts: [
      { account: { en: "Patient revenue (cash & insurance)", ar: "إيراد المرضى (نقدي وتأمين)" }, assertions: ["C", "A", "CO"], why: { en: "Counter cash plus tariff billing — completeness both ways.", ar: "نقد كاونتر وفوتر بالتعريفة — اكتمال بالاتجاهين." } },
      { account: { en: "Insurance & corporate receivables", ar: "ذمم التأمين والشركات" }, assertions: ["EX", "VA"], why: { en: "Settlement deductions and denials make net realizable value a model.", ar: "خصومات التسوية والرفض يجعلان الصافي نموذجًا." } },
      { account: { en: "Pharmacy inventory (drugs & consumables)", ar: "مخزون الصيدلية (أدوية ومستلزمات)" }, assertions: ["EX", "VA"], why: { en: "Expiry provisions and narcotics accountability.", ar: "مخصصات الصلاحية ومساءلة المخدرات." } },
      { account: { en: "Physician fee-sharing payable", ar: "مستحقات مشاركة الأطباء" }, assertions: ["C", "A", "PR"], why: { en: "Revenue-share percentages on collected fees — completeness and disclosure.", ar: "نسب مشاركة على المحصل — اكتمال وإفصاح." } },
    ],
    inherentRisks: [
      { title: { en: "Tariff-difference leakage", ar: "تسرب فروق التعريفة" }, detail: { en: "Billed-at-tariff vs settled-at-deduction differences hide revenue overstatement or receivable under-provision; the reconciliation by payer is mandatory.", ar: "الفروق بين الفوتر بالتعريفة والتسوية بالخصم تخفي تضخيم إيراد أو نقص مخصص؛ والمطابقة لكل دافع إلزامية." }, refs: ["IFRS 15", "IFRS 9"] },
      { title: { en: "Unrecorded cash services", ar: "خدمات نقدية غير مسجلة" }, detail: { en: "Walk-in consultations and lab tests paid in cash at busy counters; the hospital information system (HIS) must be the completeness benchmark, not the receipts book.", ar: "استشارات وتحاليل نقدية على كاونترات مزدحمة؛ ونظام معلومات المستشفى يجب أن يكون معيار الاكتمال لا دفتر الإيصالات." }, refs: ["ISA 240", "ISA 330"] },
      { title: { en: "Expiry & recall provisions", ar: "مخصصات الصلاحية والسحب" }, detail: { en: "Slow-moving drug batches near expiry and EDA recall notices require NRV write-downs the stock system does not auto-flag.", ar: "دفعات بطيئة قرب انتهاء الصلاحية وتعليمات سحب من هيئة الدواء تستلزم تحفيظات لا يعلّمها نظام المخزون تلقائيًا." }, refs: ["IAS 2"] },
      { title: { en: "Physician arrangements", ar: "ترتيبات الأطباء" }, detail: { en: "Fee-sharing formulas vary by physician and service; under-accrued shares understate liabilities, and regulatory scrutiny (medical syndicate rules) adds disclosure weight.", ar: "صيغ المشاركة تختلف بالطبيب والخدمة؛ ونقص المخصص ينقص الالتزامات، والتدقيق التنظيمي (قواعد النقابة) يضيف ثقل إفصاح." }, refs: ["IAS 37", "ISA 250"] },
    ],
    fraudRedFlags: [
      { en: "Insurance claims invoiced at tariff for services with no HIS trace (ghost billing).", ar: "مطالبات تأمين مفوترة بالتعريفة لخدمات لا أثر لها بالنظام (فوترة وهمية)." },
      { en: "Settlement deductions booked as 'other expenses' instead of revenue reduction.", ar: "خصومات التسوية تُقيد 'مصروفات أخرى' بدل تخفيض الإيراد." },
      { en: "Narcotics register movements not reconciling to pharmacy dispense logs.", ar: "حركة سجل المخدرات لا تطابق سجلات صرف الصيدلية." },
      { en: "Cash deposits rounded while HIS volumes are granular.", ar: "إيداعات مقربة بينما أحجام النظام دقيقة." },
    ],
    minefields: [
      { topic: { en: "Payer contracts & variable consideration", ar: "عقود الدافعين والاعتبار المتغير" }, detail: { en: "Insurance contracts with deduction schedules and denial rates are variable consideration under IFRS 15 — estimate from historical settlement data, not hope.", ar: "عقود التأمين بجداول خصم ومعدلات رفض اعتبار متغير وفق IFRS 15 — قدّر من بيانات تسوية تاريخية لا من أمل." }, ref: "IFRS 15 / EAS 48" },
      { topic: { en: "Depreciation of medical equipment", ar: "استهلاك المعدات الطبية" }, detail: { en: "High-tech imaging equipment has short useful lives and upgrade cycles; componentize (magnet, tubes) and align with utilization.", ar: "معدات التصوير عالية التقنية أعمارها قصيرة ودورات ترقية؛ فكك المكونات ووافق الاستهلاك على الاستغلال." }, ref: "IAS 16 / EAS 20" },
    ],
    regulatory: {
      en: "MOH licenses facilities and professionals; the EDA licenses pharmaceutical establishments and controls narcotics/psychotropics registers (a compliance failure is criminal exposure, not a fine); the General Authority for Healthcare Accreditation sets standards; listed operators face FRA disclosure rules; the Universal Health Insurance Law 2/2018 progressively shifts state volumes into the UHI system with its own tariff and claim cycles. Each regime produces a register the audit should reconcile.",
      ar: "ترخص وزارة الصحة المنشآت والمهنيين؛ وترخص هيئة الدواء المنشآت الصيدلانية وتضبط سجلات المخدرات والمؤثرات العقلية (الفشل تعرض جنائي لا غرامة)؛ وتضع الهيئة العامة لاعتماد الرعاية الصحية المعايير؛ ويواجه المشغلون المقيدون إفصاح الهيئة العامة للرقابة المالية؛ وينقل قانون التأمين الصحي الشامل 2 لسنة 2018 تدريجيًا أحجام الدولة للنظام بتعريفاته ودورات مطالباته. كل نظام ينتج سجلًا يجب أن يطابقه المراجع.",
    },
    ratios: [
      { name: { en: "Insurance settlement ratio", ar: "نسبة تسوية التأمين" }, benchmark: "Collected ÷ invoiced (by payer)", redFlag: { en: "Persistent sub-85% settlement with flat provisions.", ar: "تسوية دائمة دون 85% ومخصصات ساكنة." } },
      { name: { en: "Revenue per bed-day / per visit", ar: "الإيراد لكل يوم سرير/زيارة" }, benchmark: "By specialty vs market", redFlag: { en: "Revenue growth with flat visit counts (billing inflation).", ar: "نمو إيراد مع أعداد زيارات ساكنة (تضخيم فوترة)." } },
      { name: { en: "Drug expiry write-off %", ar: "نسبة إعدادات انتهاء الصلاحية" }, benchmark: "Write-offs ÷ pharmacy COGS", redFlag: { en: "Zero write-offs across years of supply disruption.", ar: "صفر إعدادات عبر سنوات اضطراب توريد." } },
    ],
    procedures: [
      { text: { en: "Reconcile the HIS service log to revenue by month and payer (completeness benchmark), and vouch a sample of insurance invoices back to HIS encounters and physician orders.", ar: "طابق سجل خدمات نظام المعلومات بالإيراد شهريًا وحسب الدافع (معيار اكتمال)، وافحص عينة فواتير التأمين رجوعًا لزيارات النظام وأوامر الأطباء." }, ref: "ISA 330 / ISA 240" },
      { text: { en: "Build the tariff-difference reconciliation per payer from claim submission through settlement, quantifying deductions and denials into the revenue and ECL adjustments.", ar: "ابنِ مطابقة فروق التعريفة لكل دافع من التقديم للتسوية، محددًا الخصومات والرفض في تسويات الإيراد والخسائر المتوقعة." }, ref: "IFRS 15 / IFRS 9" },
      { text: { en: "Attend pharmacy counts for narcotics and high-value drugs, reconcile the narcotics register to dispense logs, and test expiry provisions against batch dates.", ar: "احضر جرد المخدرات والأدوية عالية القيمة، وطابق سجل المخدرات بسجلات الصرف، واختبر مخصص الصلاحية مقابل تواريخ الدفعات." }, ref: "ISA 501 / IAS 2" },
      { text: { en: "Recompute physician fee-sharing accruals for a sample of physicians from collected revenue, and test against the signed arrangements.", ar: "أعد احتساب مخصصات مشاركة الأطباء لعينة منهم من الإيراد المحصل، واختبرها مقابل الترتيبات الموقعة." }, ref: "ISA 330" },
      { text: { en: "For state-scheme claims, vouch approvals to decision letters and trace settlements to bank; assess aging and ECL on scheme receivables.", ar: "لمطالبات الدولة، افحش الموافقات بخطابات القرارات وتتبع التسويات للبنك؛ وقيّم الأعمار والخسائر على ذمم المخططات." }, ref: "IFRS 9 / ISA 330" },
    ],
    kams: [
      { en: "Valuation of insurance and corporate receivables (settlement deductions).", ar: "تقييم ذمم التأمين والشركات (خصومات التسوية)." },
      { en: "Inventory expiry and recall provisions in pharmacy operations.", ar: "مخصصات صلاحية وسحب المخزون في العمليات الصيدلانية." },
    ],
    pitfalls: [
      { en: "Testing receivables with confirmations while the real evidence is the claims-remittance advice file.", ar: "اختبار الذمم بالتأكيدات بينما الدليل الحقيقي ملف إشعارات التسوية." },
      { en: "Walking past the narcotics register because the auditor is busy with receivables.", ar: "المرور السريع على سجل المخدرات لانشغال المراجع بالذمم." },
    ],
    relatedSections: ["receivables", "revenue", "inventory", "payroll", "industry-risks"],
  },

  /* ================================================================ */
  /* TECHNOLOGY & SOFTWARE                                              */
  /* ================================================================ */
  {
    id: "technology",
    cluster: "services",
    icon: "cpu",
    name: { en: "Technology & Software", ar: "التقنية والبرمجيات" },
    tagline: {
      en: "One contract, five obligations — and development costs that want to be assets.",
      ar: "عقد واحد وخمسة التزامات — وتكاليف تطوير تريد أن تكون أصولًا.",
    },
    overview: {
      en: "Software houses and tech companies monetize licenses (on-premise), SaaS subscriptions, implementation projects, maintenance and support — frequently bundled in one contract with multi-element revenue allocation under IFRS 15 / EAS 48. The sector's defining judgment is capitalized development: IAS 38 / EAS 29 permit capitalization only after technical feasibility with resources and intention to complete, and Egyptian tax practice has historically been harsher on capitalization, creating book-tax differences. Egypt's ICT sector (ITIDA-registered exporters, growing fintech and outsourcing) adds export-scheme rebates and e-invoicing ubiquity. Valuations of acquired users/technology and goodwill impairment reviews round out the risk map; deferred revenue and churn are the metrics that decide whether the business is real.",
      ar: "ت monetize شركات البرمجيات التراخيص المحلية والاشتراكات السحابية ومشروعات التنفيذ والصيانة والدعم — غالبًا حزمة في عقد واحد بتوزيع إيراد متعدد العناصر وفق IFRS 15 / المعيار المصري 48. والحكم المعرّف للقطاع هو تطوير مرسمل: يبيح IAS 38 / المعيار المصري الرسملة بعد الجدوى الفنية مع توافر الموارد والنية على الإتمام، وكانت الممارسة الضريبية المصرية أشد تاريخيًا فتنشئ فروق دفترية-ضريبية. ويضيف قطاع الاتصالات وتقنية المعلومات المصري (المصدرون المسجلون لدى هيئة تنمية الصناعات التكنولوجية، والتمويل الرقمي والخدمات الخارجية المتنامية) حوافز تصدير وفاتورة إلكترونية معممة. وتكمل تقييمات المستخدمين والتقنية المقتناة ومراجعات انخفاض الشهرة خريطة المخاطر؛ والإيراد المؤجل ومعدل الفقد هما المقياسان الحاسمان لحقيقة النشاط.",
    },
    revenueModel: {
      en: "License revenue is recognized at the point control transfers (delivery/activation); subscriptions straight-line over the term; implementation either over-time (if the customer controls the WIP) or at milestones; maintenance ratably. Allocations need stand-alone selling prices per element, and multi-year contracts with price escalations and usage-based fees (API calls, seats) layer variable consideration on top.",
      ar: "يُعرف إيراد الترخيص عند نقل السيطرة (تسليم/تفعيل)؛ والاشتراكات خط مستقيم على المدة؛ والتنفيذ إما بمرور الوقت (إن تحكم العميل في تحت التشغيل) أو بمراحل؛ والصيانة بالتناسب. يتطلب التوزيع أسعار بيع مستقلة لكل عنصر، وتراكم العقود متعددة السنوات بتصاعيد وأجور استخدام (نداءات، مقاعد) اعتبارًا متغيرًا فوق ذلك.",
    },
    significantAccounts: [
      { account: { en: "Deferred revenue", ar: "الإيراد المؤجل" }, assertions: ["C", "VA", "PR"], why: { en: "Bundle allocation and release pattern decide quarterly revenue.", ar: "توزيع الحزمة ونمط التحقق يقرران الإيراد الفصلي." } },
      { account: { en: "Capitalized development costs", ar: "تكاليف التطوير المرسملة" }, assertions: ["EX", "VA"], why: { en: "Capitalization criteria and amortization lives are the sector's classic estimate.", ar: "معايير الرسملة وأعمار الاستهلاك تقدير القطاع الكلاسيكي." } },
      { account: { en: "Contract assets (unbilled)", ar: "أصول العقود (غير مفوترة)" }, assertions: ["C", "VA"], why: { en: "Over-time implementation revenue running ahead of milestones.", ar: "إيراد تنفيذ بمرور الوقت يتقدم على المراحل." } },
      { account: { en: "Goodwill & acquired intangibles", ar: "الشهرة وغير الملموسة المقتناة" }, assertions: ["VA"], why: { en: "User-base and technology valuations need annual impairment testing.", ar: "تقييمات قاعدة المستخدمين والتقنية تحتاج اختبار انخفاض سنوي." } },
    ],
    inherentRisks: [
      { title: { en: "Capitalization criteria gaming", ar: "العبث بمعايير الرسملة" }, detail: { en: "Costs capitalized before feasibility is demonstrable (or maintenance-adjacent costs re-labeled as development) inflate assets and profit; the criteria memo is where abuse lives.", ar: "تكاليف تُرسمل قبل إثبات الجدوى (أو مصروفات صيانة تعاد تسميتها تطويرًا) تضخم الأصول والربح؛ ومذكرة المعايير مسكن التجاوزات." }, refs: ["IAS 38 / EAS 29", "ISA 540"] },
      { title: { en: "SSP allocation in bundles", ar: "توزيع السعر المستقل في الحزم" }, detail: { en: "Discounts allocated to license vs services shift revenue between periods; adjusted-market and expected-cost-plus estimates need consistent methodology.", ar: "توزيع الخصومات بين الترخيص والخدمات ينقل الإيراد بين الفترات؛ وتقديرات السوق المعدل والتكلفة زائد تحتاج منهجية ثابتة." }, refs: ["IFRS 15.77–86"] },
      { title: { en: "Churn & renewal assumptions", ar: "افتراضات الفقد والتجديد" }, detail: { en: "SaaS revenue models and impairment tests lean on cohort retention curves — optimistic curves keep both revenue and asset values high.", ar: "نماذج الإيراد السحابي واختبارات الانخفاض تستند لمنحنيات بقاء الدفعات — والتفاؤل يبقي الإيراد والقيم مرتفعة." }, refs: ["IFRS 15", "IAS 36"] },
      { title: { en: "Revenue cut-off on activation", ar: "استقطاع الإيراد عند التفعيل" }, detail: { en: "Year-end license activations with undelivered obligations, or implementation 'acceptance' signed under deadline pressure, move revenue across periods.", ar: "تفعيلات تراخيص نهاية السنة بالتزامات غير منفذة، أو 'قبول' تنفيذ يوقع تحت ضغط المواعيد، تنقل الإيراد بين الفترات." }, refs: ["IFRS 15", "ISA 330"] },
    ],
    fraudRedFlags: [
      { en: "Development capitalization spiking exactly in loss-making quarters.", ar: "رسملة تطوير تنفجر بالضبط في أرباع الخسارة." },
      { en: "Round-dollar 'acceptance certificates' dated 31 December.", ar: "شهادات 'قبول' بمبالغ مقربة بتاريخ 31 ديسمبر." },
      { en: "Deferred revenue release accelerating while renewals decline.", ar: "تحقق الإيراد المؤجل يتسارع بينما التجديدات تتراجع." },
      { en: "Related-party resellers absorbing inventory of licenses at year-end.", ar: "موزعون مرتبطون يمتصون مخزون تراخيص نهاية السنة." },
    ],
    minefields: [
      { topic: { en: "Book vs tax on development costs", ar: "الدفاتر مقابل الضريبة في تكاليف التطوير" }, detail: { en: "Egyptian tax practice has often expensed development for tax while IFRS capitalizes — deferred tax on the difference must be tracked carefully.", ar: "الممارسة الضريبية المصرية كثيراً ما تصرف التطوير ضريبيًا بينما ترسمله IFRS — يجب تتبع الضريبة المؤجلة على الفرق بعناية." }, ref: "IAS 12 / IAS 38" },
      { topic: { en: "Impairment testing of user bases", ar: "اختبار انخفاض قواعد المستخدمين" }, detail: { en: "Value-in-use models with growth assumptions on acquired users need cohort data support — challenge the terminal growth and discount rate pairing.", ar: "نماذج قيمة استخدام بافتراضات نمو للمستخدمين المقتنين تحتاج بيانات دفعات — ناقش اقتران النمو النهائي ومعدل الخصم." }, ref: "IAS 36" },
    ],
    regulatory: {
      en: "ITIDA (under MCIT) registers and supports ICT exporters with export rebates and workforce development programs; software exports enjoy preferential tax treatment when conditions are met (ITIDA-regulated); the Data Protection Law 151/2020 imposes compliance costs and breach contingencies on platforms handling personal data; NTRA licensing applies to VoIP/telecom-adjacent services; and fintech entities face CBE/FRA sandbox and licensing regimes. Cybersecurity incidents are both a contingency and a going-concern consideration for platforms.",
      ar: "تسجل هيئة تنمية صناعة تكنولوجيا المعلومات المصدرين وتدعمهم بحوافز وبرامج كوادر؛ وتتمتع صادرات البرمجيات بمعاملة ضريبية تفضيلية بشروط؛ ويفرض قانون حماية البيانات 151 لسنة 2020 تكاليف امتثال وتزامن اختراق على المنصات الحاملة لبيانات شخصية؛ وينطبق ترخيص الجهاز القومي لتنظيم الاتصالات على الخدمات المجاورة؛ وتواجه كيانات التقنية المالية بيئات اختبار وترخيص البنك المركزي والهيئة. والحوادث السيبرانية تزامن واعتبار استمرارية للمنصات.",
    },
    ratios: [
      { name: { en: "Net revenue retention", ar: "الاحتفاظ الصافي بالإيراد" }, benchmark: "Cohort revenue t+1 ÷ t", redFlag: { en: "NRR >100% claimed while deferred revenue shrinks.", ar: "احتفاظ يتجاوز 100% بينما الإيراد المؤجل يتقلص." } },
      { name: { en: "Capitalization ratio", ar: "نسبة الرسملة" }, benchmark: "Capitalized dev ÷ total dev cost", redFlag: { en: "Ratio rising with falling profitability.", ar: "النسبة ترتفع مع تراجع الربحية." } },
      { name: { en: "DSO on milestone billing", ar: "أيام الذمم على فوترة المراحل" }, benchmark: "DSO vs milestone terms", redFlag: { en: "Acceptances signed but invoices unpaid for months.", ar: "قبولات موقعة وفواتير غير مدفوعة لشهور." } },
    ],
    procedures: [
      { text: { en: "Test capitalized development against the IAS 38 criteria milestone-by-milestone: feasibility evidence (architecture sign-off), resource plans, intention and ability to complete, and future-benefit support.", ar: "اختبر التطوير المرسمل مقابل معايير IAS 38 مرحلة بمرحلة: أدلة الجدوى (اعتماد المعمارية)، وخطط الموارد، والنية والقدرة على الإتمام، وسند المنفعة المستقبلية." }, ref: "IAS 38 / ISA 540" },
      { text: { en: "Recompute SSP allocation for a sample of multi-element contracts and trace the deferred-revenue release schedule to the performance-obligation pattern.", ar: "أعد احتساب توزيع الأسعار المستقلة لعينة عقود متعددة العناصر وتتبع جدول تحقق الإيراد المؤجل بنمط التزامات الأداء." }, ref: "IFRS 15" },
      { text: { en: "For over-time implementation revenue, re-perform progress from timesheets and deliverable acceptance, and reconcile contract assets to unbilled work.", ar: "لإيراد التنفيذ بمرور الوقت، أعد تنفيذ التقدم من سجلات الوقت وتسليمات القبول، وطابق أصول العقود بالعمل غير المفوتر." }, ref: "IFRS 15 / ISA 330" },
      { text: { en: "Vouch year-end acceptances and activations: delivery records, provisioning logs, and post-year-end support tickets proving genuine go-live.", ar: "افحص قبولات وتفعيلات نهاية السنة: سجلات التسليم وسجلات التجهيز وتذاكر دعم ما بعد السنة المثبتة لإطلاق حقيقي." }, ref: "ISA 330" },
      { text: { en: "Evaluate the impairment model for acquired user bases/goodwill: cohort retention data, discount rate sources and terminal assumptions; challenge with independent market benchmarks.", ar: "قيّم نموذج الانخفاض لقواعد المستخدمين/الشهرة: بيانات بقاء الدفعات ومصادر معدل الخصم وافتراضات النهاية؛ وناقش بمعايير سوق مستقلة." }, ref: "IAS 36 / ISA 540" },
    ],
    kams: [
      { en: "Revenue recognition for multi-element contracts and deferred revenue.", ar: "الاعتراف بإيراد العقود متعددة العناصر والإيراد المؤجل." },
      { en: "Capitalization and impairment of development costs and acquired intangibles.", ar: "رسملة وانخفاض قيمة تكاليف التطوير وغير الملموسة المقتناة." },
    ],
    pitfalls: [
      { en: "Reading the criteria memo without asking for the engineering evidence behind feasibility.", ar: "قراءة مذكرة المعايير دون طلب أدلة الهندسة خلف الجدوى." },
      { en: "Assuming subscription revenue is simple — allocation and churn assumptions hide as much judgment as licenses.", ar: "افتراض بساطة الاشتراكات — التوزيع وافتراضات الفقد يخفيان حكمًا بقدر التراخيص." },
    ],
    relatedSections: ["receivables", "revenue", "industry-risks", "provisions"],
  },

  /* ================================================================ */
  /* TELECOMMUNICATIONS                                                 */
  /* ================================================================ */
  {
    id: "telecom",
    cluster: "infrastructure",
    icon: "tower-control",
    name: { en: "Telecommunications", ar: "الاتصالات" },
    tagline: {
      en: "Prepaid cards, towers and revenue share — every rupee of revenue passes through a settlement engine.",
      ar: "كروت مسبقة الدفع وأبراج ومشاركة إيراد — كل قرش من الإيراد يمر بمحرك تسوية.",
    },
    overview: {
      en: "Telecom operators and their service companies run national networks (spectrum licenses, towers, fiber) and monetize prepaid/postpaid subscribers, data bundles, wholesale termination and enterprise connectivity. Revenue arrives through an intricate settlement web: distributors and recharge chains for prepaid, interconnection settlements between operators, revenue-share arrangements with content providers, and handset installments under IFRS 15's significant-financing-component rules. Egyptian telecom is regulated by NTRA (licenses, quality, tariffs, infrastructure sharing), with heavy spectrum fees, tower-portfolio deals (sale-and-leaseback under IFRS 16) and universal-service obligations. The audit's spine is the revenue-assurance chain from network mediation records to billing to GL — a data-audit exercise — plus lease accounting for towers and the capitalization of network equipment lives.",
      ar: "تشغل شركات الاتصالات ومقدمو الخدمة شبكات قومية (تراخيص طيف، أبراج، فايبر) وت monetize مشتركي المسبق واللاحق وباقات البيانات وإنهاء المكالمات بالجملة وربط الشركات. يأتي الإيراد عبر شبكة تسويات معقدة: سلاسل الموزعين والشحن للمسبق، وتسويات الربط البيني بين المشغلين، ومشاركات الإيراد مع مزودي المحتوى، وأقساط الهواتف وفق قواعد عنصر التمويل الجوهري. ينظم الجهاز القومي لتنظيم الاتصالات القطاع المصري (تراخيص وجودة وتسعير ومشاركة بنية)، برسوم طيف ضخمة وصفقات أبراج (بيع مع إعادة استئجار وفق IFRS 16) والتزامات خدمة عامة. وعمود المراجعة سلسلة ضمان الإيراد من سجلات توسط الشبكة للفوترة للدفتر العام — تمرين تدقيق بيانات — إضافة لمحاسبة تأجير الأبراج وأعمار معدات الشبكة.",
    },
    revenueModel: {
      en: "Prepaid revenue is recognized as usage occurs (airtime consumed), with unutilized balances and expiry rules creating deferred-revenue breakage estimates; postpaid bills monthly in arrears; interconnection and roaming settle net through clearing houses. Revenue-share with content/VAS partners runs through the operator's billing, splitting gross amounts — principal-vs-agent decides whether the top line is gross or commission.",
      ar: "يُعرف إيراد المسبق عند الاستخدام (استهلاك الوقت) مع أرصدة غير مستخدمة وقواعد انتهاء تنشئ تقديرات كسر للإيراد المؤجل؛ واللاحق يفوتر شهريًا بمأخر؛ والربط والتجوال يسويان صافيًا عبر بيوت المقاصة. ومشاركة الإيراد مع شركاء المحتوى تمر بفوترة المشغل وتقتسم الإجمالي — الأصيل/الوكيل يقرر الإيراد إجماليًا أم عمولة.",
    },
    significantAccounts: [
      { account: { en: "Revenue (prepaid/postpaid/interconnect)", ar: "الإيراد (مسبق/لاحق/ربط)" }, assertions: ["C", "A", "CO"], why: { en: "Mediation-to-billing-to-GL integrity is the completeness backbone.", ar: "سلامة التوسط-الفوترة-الدفتر هي عمود الاكتمال." } },
      { account: { en: "Deferred revenue & breakage", ar: "الإيراد المؤجل والكسر" }, assertions: ["VA", "C"], why: { en: "Unused balances expiring per regulator rules need actuarial-style estimation.", ar: "أرصدة تنتهي بقواعد المنظم تحتاج تقديرًا اكتواريًا." } },
      { account: { en: "Network PPE & spectrum licenses", ar: "معدات الشبكة وتراخيص الطيف" }, assertions: ["EX", "VA", "CL"], why: { en: "Lives tied to license duration and technology cycles; spectrum is an intangible with amortization judgment.", ar: "أعمار مرتبطة بمدة الترخيص ودورات التقنية؛ والطيف غير ملموس باستنفاد حكمي." } },
      { account: { en: "Tower leases (IFRS 16)", ar: "تأجير الأبراج (IFRS 16)" }, assertions: ["C", "VA", "PR"], why: { en: "Right-of-use portfolios, renewal options and sale-and-leaseback gains.", ar: "محافظ حق استخدام وخيارات تجديد ومكاسب بيع مع إعادة استئجار." } },
      { account: { en: "Dealer & distributor balances", ar: "أرصدة الوكلاء والموزعين" }, assertions: ["EX", "VA"], why: { en: "Recharge floats and commissions across multi-tier chains.", ar: "عوائم شحن وعمولات عبر سلاسل متعددة الطبقات." } },
    ],
    inherentRisks: [
      { title: { en: "Revenue assurance leakage", ar: "تسرب ضمان الإيراد" }, detail: { en: "Rating errors, failed charging events and fraud (SIM-box bypass) cut revenue silently; independent reconciliation of mediation records to billing and GL is core.", ar: "أخطاء التسعير وأحداث تحصيل فاشلة وتزييف (تحايل صناديق الشرائح) تقتطع الإيراد بصمت؛ والمطابقة المستقلة لسجلات التوسط بالفوترة والدفتر جوهرية." }, refs: ["ISA 330", "ISA 240"] },
      { title: { en: "Breakage estimation", ar: "تقدير الكسر" }, detail: { en: "Expiring prepaid balances recognized as revenue need historical usage-decay curves; regulatory changes in expiry rules reset the estimate.", ar: "أرصدة مسبقة تنتهي تُعرف إيرادًا وتحتاج منحنيات تلاشي الاستخدام؛ وتغييرات المنظم في قواعد الانتهاء تعيد ضبط التقدير." }, refs: ["IFRS 15", "NTRA rules"] },
      { title: { en: "Principal vs agent on VAS", ar: "الأصيل والوكيل في الخدمات ذات القيمة المضافة" }, detail: { en: "Content and digital services revenue may be gross with partner cost, or net commission — presentation swings the top line by billions in scale operators.", ar: "إيراد المحتوى والخدمات الرقمية قد يكون إجماليًا بتكلفة شريك أو عمولة صافية — العرض يتأرجح برقم الأعمال مليارات لدى المشغلين." }, refs: ["IFRS 15 / EAS 48"] },
      { title: { en: "Spectrum & license amortization", ar: "استنفاد الطيف والتراخيص" }, detail: { en: "Useful lives bounded by license terms and technology generations (4G/5G) need re-assessment as refarming decisions land.", ar: "أعمار تحدها مدد التراخيص وأجيال التقنية وتحتاج إعادة تقييم مع قرارات إعادة تخصيص الطيف." }, refs: ["IAS 38", "EAS 29"] },
    ],
    fraudRedFlags: [
      { en: "Interconnect settlements matching the counterparty's numbers to the cent every month.", ar: "تسويات ربط تطابق أرقام الطرف الآخر بالقرش كل شهر." },
      { en: "Prepaid breakage assumptions improving with no product change.", ar: "افتراضات كسر المسبق تتحسن دون تغيير منتج." },
      { en: "Dealer commissions capitalized as receivables that never clear.", ar: "عمولات موزعين تُرسمل ذممًا لا تُسوى أبدًا." },
      { en: "Tower sale-and-leaseback gains booked at inflated valuations.", ar: "مكاسب بيع أبراج مع إعادة استئجار بتقييمات منفوخة." },
    ],
    minefields: [
      { topic: { en: "IFRS 16 tower portfolios", ar: "محافظ الأبراج وفق IFRS 16" }, detail: { en: "Renewal options 'reasonably certain' assessments and CPI-linked payments create massive ROU/lease-liability measurements; sale-and-leaseback must transfer control to qualify.", ar: "تقييمات 'الرجحان' لخيارات التجديد ومدفوعات مرتبطة بالتضخم تنشئ قياسات أصول استخدام والتزامات ضخمة؛ والبيع مع إعادة الاستئجار يتطلب نقل سيطرة مؤهلاً." }, ref: "IFRS 16 / EAS 49" },
      { topic: { en: "Significant financing in handset bundles", ar: "عنصر تمويل جوهري في حزم الهواتف" }, detail: { en: "Zero-interest device installments impute interest and split the transaction between device revenue and financing.", ar: "أقساط أجهزة بلا فوائد تفرض فائدة ضمنية وتقسم المعاملة بين إيراد الجهاز وتمويل." }, ref: "IFRS 15 / IFRS 9" },
    ],
    regulatory: {
      en: "NTRA licenses operators (Egypt's market: two MNOs plus Telecom Egypt/WE), regulates tariffs, quality, interconnection, spectrum fees and infrastructure sharing; prepaid expiry and SIM registration rules shape breakage and revenue; universal service fund contributions and localization requirements add cost. Listed operators face FRA/EGX disclosure including segmented reporting, and tower transactions draw competition-authority (Egyptian Competition Authority) scrutiny.",
      ar: "يرخص الجهاز القومي لتنظيم الاتصالات للمشغلين، وينظم التسعير والجودة والربط البيني ورسوم الطيف ومشاركة البنية؛ وقواعد انتهاء المسبق وتسجيل الشرائح تشكل الكسر والإيراد؛ ومساهمات صندوق الخدمة العامة ومتطلبات التوطين تضيف تكلفة. ويواجه المشغلون المقيدون إفصاح الهيئة والبورصة بما فيه التقرير القطاعي، وتجذب صفقات الأبراج تدقيق جهازة حماية المنافسة.",
    },
    ratios: [
      { name: { en: "ARPU", ar: "متوسط الإيراد للمستخدم" }, benchmark: "Revenue ÷ avg subscribers", redFlag: { en: "ARPU rising while active-user counts fall (base inflation).", ar: "ARPU يرتفع بينما المستخدمون النشطون يتراجعون (تضخيم القاعدة)." } },
      { name: { en: "Churn rate", ar: "معدل الفقد" }, benchmark: "Lost ÷ avg subscribers per month", redFlag: { en: "Churn improving during price wars.", ar: "الفقد يتحسن خلال حروب الأسعار." } },
      { name: { en: "EBITDA margin vs capex intensity", ar: "هامش الأرباح مقابل كثافة الاستثمار" }, benchmark: "EBITDA% and capex ÷ revenue", redFlag: { en: "Margin stable only because capex was reclassified to leases.", ar: "هامش مستقر فقط لأن الاستثمار أعيد تصنيفه تأجيرًا." } },
    ],
    procedures: [
      { text: { en: "Independently reconcile mediation/CDR aggregates to billing and GL revenue for all twelve months, quantifying every rejection and rerating event.", ar: "طابق باستقلال إجماليات التوسط/سجلات تفاصيل المكالمات بالفوترة وإيراد الدفتر لاثني عشر شهرًا، محددًا كل رفض وإعادة تسعير." }, ref: "ISA 330" },
      { text: { en: "Re-perform the prepaid breakage estimate from cohort usage-decay data, cross-checking to the regulator's expiry-rule changes in the period.", ar: "أعد تنفيذ تقدير كسر المسبق من بيانات تلاشي الاستخدام للدفعات مع تدقيق تغييرات قواعد انتهاء المنظم." }, ref: "IFRS 15 / ISA 540" },
      { text: { en: "Confirm interconnect and roaming settlements with counterparties and clearing-house statements; reconcile net positions to the GL.", ar: "أكّد تسويات الربط والتجوال مع الأطراف وبيوت المقاصة؛ وطابق المراكز الصافية بالدفتر." }, ref: "ISA 505" },
      { text: { en: "Test the VAS revenue-share population for principal/agent conclusions by contract, and recompute partner payables from platform data.", ar: "اختبر مجتمع مشاركة الإيراد على استنتاجات الأصيل/الوكيل حسب العقد، وأعد احتساب مستحقات الشركاء من بيانات المنصة." }, ref: "IFRS 15" },
      { text: { en: "For towers, vouch ROU additions and sale-leaseback accounting to valuations and control-transfer evidence; reassess renewal-option certainty and spectrum amortization lives.", ar: "للأبراج، افحص إضافات أصول الاستخدام ومحاسبة البيع مع الاستئجار للتقييمات وأدلة نقل السيطرة؛ وأعد تقييم رجحان خيارات التجديد وأعمار استنفاد الطيف." }, ref: "IFRS 16 / IAS 38" },
    ],
    kams: [
      { en: "Recognition of revenue including prepaid breakage and interconnect settlements.", ar: "الاعتراف بالإيراد بما فيه كسر المسبق وتسويات الربط." },
      { en: "Lease accounting for tower and site portfolios (IFRS 16).", ar: "محاسبة تأجير محافظ الأبراج والمواقع (IFRS 16)." },
    ],
    pitfalls: [
      { en: "Sampling invoices in a data business instead of reconciling the settlement engines end-to-end.", ar: "فحص عينة فواتير في نشاط بيانات بدل مطابقة محركات التسوية من طرف لطرف." },
      { en: "Forgetting that SIM-box fraud cuts interconnect revenue both ways (inbound and outbound).", ar: "نسيان أن تحايل صناديق الشرائح يقتطع إيراد الربط بالاتجاهين (وارد وصادر)." },
    ],
    relatedSections: ["receivables", "revenue", "fixed-assets", "industry-risks"],
  },

  /* ================================================================ */
  /* ENERGY, UTILITIES & OIL/GAS                                        */
  /* ================================================================ */
  {
    id: "energy",
    cluster: "infrastructure",
    icon: "zap",
    name: { en: "Energy, Utilities & Oil/Gas", ar: "الطاقة والمرافق والبترول" },
    tagline: {
      en: "Cost recovery, concessions and regulated tariffs — the contracts are the accounting policy.",
      ar: "استرداد التكاليف وامتيازات وتعريفات منظمة — العقود هي السياسة المحاسبية.",
    },
    overview: {
      en: "Egypt's energy sector spans E&P concessions (production-sharing agreements with EGAS/EGPC/GANOPE), midstream transportation, distribution utilities (gas and electricity), refining, and the growing renewables portfolio (Benban-style solar, wind BOO/BOT schemes). PSAs make the contractor's entitlement a share of production: the accounting question (cost recovery vs profit-share entitlement, recorded as inventory/revenue in kind) defines the P&L. Utilities recognize regulated-tariff revenue with take-or-pay capacity components and under-recovery balances against the regulator. Megaproject capex, decommissioning provisions (IAS 37) and FX exposure on USD-denominated gas supply dominate the balance sheet. State counterparties (EGPC receivables) concentrate credit risk, and subsidy/price-reform decisions are the sector's macro risk.",
      ar: "يمتد قطاع الطاقة المصري من امتيازات الاستكشاف والإنتاج (اتفاقيات مشاركة إنتاج مع إيجاس وإيجبك وجانوبي) إلى النقل والمرافق الموزعة (غاز وكهرباء) والتكرير ومحفظة المتجددات المتنامية (شمسية بأسلوب بنبان ورياح BOO/BOT). تجعل اتفاقيات المشاركة استحقاق المقاول حصة من الإنتاج: وسؤال المحاسبة (استرداد التكاليف مقابل استحقاق الربح، مسجلًا مخزونًا/إيرادًا عينيًا) يعرّف قائمة الدخل. وتعرف المرافق إيراد التعريفة المنظمة بمكونات قدرة خذ-أو-ادفع وأرصدة عدم استرداد لدى المنظم. وتهيمن استثمارات المشروعات الكبرى ومخصصات إزالة التركيبات (IAS 37) والتعرض بالدولار على إمداد الغاز على الميزانية. وتركز الذمم على جهات الدولة (إيجبك) مخاطر الائتمان، وقرارات إصلاح الدعم والتسعير هي الخطر الكلي للقطاع.",
    },
    revenueModel: {
      en: "E&P revenue is the contractor's cost-recovery petroleum plus profit-share entitlements, valued at realized/contract prices; utilities bill regulated tariffs monthly with seasonal indices; renewables under PPAs recognize availability-based revenue with capacity vs energy components. Cut-off concentrates on liftings/entitlement statements from the state entity and on tariff-index resets.",
      ar: "إيراد الاستكشاف والإنتاج هو نفط استرداد التكاليف واستحقاقات مشاركة الأرباح للمقاول، مقومًا بأسعار محققة/تعاقدية؛ وتفوتر المرافق تعريفات منظمة شهريًا بمؤشرات موسمية؛ وتعرف المتجددات بموجب اتفاقيات شراء كهرباء إيرادًا قائمًا على الإتاحة بمكونات قدرة وطاقة. ويركز الاستقطاع على بيانات الشحن والاستحقاق من الجهة الحكومية وعلى إعادة ضبط مؤشرات التعريفة.",
    },
    significantAccounts: [
      { account: { en: "Entitlement/petroleum inventory & revenue in kind", ar: "المخزون والإيراد العيني للاستحقاق" }, assertions: ["VA", "C", "A"], why: { en: "PSA cost-recovery mechanics and entitlement valuations.", ar: "ميكانيكا استرداد التكاليف وتقييمات الاستحقاق." } },
      { account: { en: "PP&E and projects under construction", ar: "الممتلكات والمشروعات تحت الإنشاء" }, assertions: ["EX", "VA", "CL"], why: { en: "Megaproject capitalization, progress and decommissioning.", ar: "رسملة المشروعات الكبرى وتقدمها وإزالة التركيبات." } },
      { account: { en: "Decommissioning provisions", ar: "مخصصات إزالة التركيبات" }, assertions: ["VA", "PR"], why: { en: "Discounted restoration costs — estimate-intense.", ar: "تكاليف استعادة مخصومة — كثيفة التقديرات." } },
      { account: { en: "Receivables from state entities", ar: "الذمم على الجهات الحكومية" }, assertions: ["EX", "VA"], why: { en: "Concentrated, aging, FX-linked credit exposure.", ar: "تعرض ائتماني مركز ومسن ومرتبط بالعملة." } },
      { account: { en: "Under/over-recovery balances (utilities)", ar: "أرصدة عدم الاسترداد (المرافق)" }, assertions: ["VA", "PR"], why: { en: "Regulatory assets/liabilities pending tariff true-ups.", ar: "أصول/التزامات تنظيمية بانتظار تسويات التعريفة." } },
    ],
    inherentRisks: [
      { title: { en: "PSA entitlement computation", ar: "احتساب استحقاق المشاركة" }, detail: { en: "Cost-recovery pools (unrecovered exploration, opex, investment credits) and profit-share splits must be re-performed against the PSA terms and the state entity's statements.", ar: "مجمعات استرداد التكاليف (استكشاف غير مسترد وتشغيل وأرصدة استثمار) وتقسيم الأرباح يجب إعادة تنفيذها مقابل شروط الاتفاقية وبيانات الجهة الحكومية." }, refs: ["IFRS 15 / IFRS 6", "ISA 330"] },
      { title: { en: "Decommissioning provisions", ar: "مخصصات إزالة التركيبات" }, detail: { en: "Restoration cost estimates, discount rates and timing (end of license life) move provisions materially; inflation in well-plugging costs has been brutal.", ar: "تقديرات تكاليف الاستعادة ومعدلات الخصم والتوقيت (نهاية عمر الترخيص) تحرك المخصصات جوهريًا؛ وتضخم تكاليف سد الآبار كان قاسيًا." }, refs: ["IAS 37", "ISA 540"] },
      { title: { en: "Impairment of license portfolios", ar: "انخفاض قيمة محافظ التراخيص" }, detail: { en: "Dry wells written off, 2P-reserve revisions and price-outlook changes trigger impairment reviews on E&E assets and PP&E cash-generating units.", ar: "آبار جافة تُشطب، ومراجعات احتياطيات، وتغيرات توقعات الأسعار تطلق مراجعات انخفاض على أصول الاستكشاف ووحدات توليد الدخل." }, refs: ["IFRS 6", "IAS 36"] },
      { title: { en: "Regulatory balances & subsidies", ar: "الأرصدة التنظيمية والدعم" }, detail: { en: "Utilities accumulate under-recoveries pending regulator approval — recoverability is a judgment; state subsidy receivables follow ministerial decisions.", ar: "تتراكم للمرافق عدم استردادات بانتظار موافقة المنظم — وقابلية الاسترداد حكم؛ وذمم الدعم تتبع قرارات وزارية." }, refs: ["IAS 37", "IFRS 9"] },
    ],
    fraudRedFlags: [
      { en: "Entitlement statements accepted from the state entity without independent recomputation.", ar: "بيانات استحقاق تُقبل من الجهة الحكومية دون إعادة احتساب مستقلة." },
      { en: "Capex capitalized on projects with suspended construction.", ar: "استثمار يُرسمل على مشروعات موقوفة الإنشاء." },
      { en: "Decommissioning provision unchanged across years of cost inflation.", ar: "مخصص إزالة ساكن عبر سنوات تضخم تكاليف." },
      { en: "Under-recovery assets booked where the regulator has never approved recovery.", ar: "أصول عدم استرداد تُقيد حيث لم يعتمد المنظم الاسترداد قط." },
    ],
    minefields: [
      { topic: { en: "Revenue in kind", ar: "الإيراد العيني" }, detail: { en: "The contractor's share of crude is measured at fair value of consideration received (contract price formula) — timing of liftings and price formula mechanics decide the number.", ar: "حصة المقاول من الخام تقاس بالقيمة العادلة للمقابل المستلم (معادلة السعر التعاقدية) — توقيت الشحن وميكانيكا المعادلة تحدد الرقم." }, ref: "IFRS 15 / EAS 48" },
      { topic: { en: "BOO/BOT scheme classification", ar: "تصنيف مشاريع BOO/BOT" }, detail: { en: "Whether the entity owns the plant or holds an intangible concession (service concession accounting) changes depreciation, finance costs and revenue entirely.", ar: "هل تملك الكيان المحطة أم تحمل امتيازًا غير ملموسًا (محاسبة الامتياز الخدمي) — يغير الاستهلاك وتكاليف التمويل والإيراد كليًا." }, ref: "IFRIC 12 style analysis" },
    ],
    regulatory: {
      en: "The Ministry of Petroleum supervises EGPC/EGAS/GANOPE concession regimes; the Egyptian Natural Gas Holding Company approves development plans; electricity is regulated by EgyptERA and the Cabinet tariff committee; renewables follow the FIT/round-two PPA structures with EgyptERA and NREA; environmental obligations (EEAA) and the fuel-supply security arrangements shape operations. State receivables settlement depends on treasury cycles — going-concern analysis must model collection lag honestly.",
      ar: "تشرف وزارة البترول على أنظمة الامتياز (إيجبك/إيجاس/جانوبي)؛ وتعتمد الشركة المصرية القابضة للغازات الطبيعية خطط التطوير؛ وتنظم كهرباء مصر ومجلس الوزراء للتعريفة الكهرباء؛ وتتبع المتجددات هياكل شراء الكهرباء مع جهاز تنظيم الكهرباء وهيئة الطاقة الجديدة؛ وتشكل الالتزامات البيئية وترتيبات أمن الإمداد التشغيل. وتسوية ذمم الدولة تتبع دورات الخزانة — يجب أن تنمذج تحليل الاستمرارية تأخر التحصيل بصدق.",
    },
    ratios: [
      { name: { en: "Cost recovery vs capex", ar: "الاسترداد مقابل الاستثمار" }, benchmark: "Recovered ÷ incurred per concession", redFlag: { en: "Recovery rates exceeding entitlement caps.", ar: "معدلات استرداد تتجاوز سقوف الاستحقاق." } },
      { name: { en: "Reserve-life impairment triggers", ar: "محفزات انخفاض عمر الاحتياطي" }, benchmark: "R/P ratio and 2P revisions", redFlag: { en: "Reserve upgrades announced with no independent reserve report.", ar: "ترقيات احتياطي تعلن دون تقرير احتياطي مستقل." } },
      { name: { en: "DSO on state receivables", ar: "أيام الذمم الحكومية" }, benchmark: "DSO by state counterparty", redFlag: { en: "DSO stretching with no ECL movement.", ar: "أيام تمتد دون حركة في الخسائر المتوقعة." } },
    ],
    procedures: [
      { text: { en: "Re-perform the entitlement computation for each producing concession: cost-recovery pool roll-forward, profit-share split, and reconciliation to the state entity's lifting statements.", ar: "أعد تنفيذ احتساب الاستحقاق لكل امتياز منتج: تدوير مجمع الاسترداد، وتقسيم الربح، والمطابقة ببيانات شحن الجهة الحكومية." }, ref: "PSA / IFRS 15 / ISA 330" },
      { text: { en: "Test decommissioning provisions: independent engineering estimates of plug-and-abandonment scopes, discount-rate sources, and the unwinding finance cost.", ar: "اختبر مخصصات إزالة التركيبات: تقديرات هندسية مستقلة لنطاقات السد والتخلي، ومصادر معدل الخصم، وتكلفة التمويل المتنامية." }, ref: "IAS 37 / ISA 540" },
      { text: { en: "For E&E assets, agree capitalized exploration costs to well results and the current license terms; trigger impairment reviews on license expiries and dry holes.", ar: "لأصول الاستكشاف، طابق التكاليف المرسملة بنتائج الآبار وشروط الترخيص الحالية؛ وفعّل مراجعات الانخفاض عند انتهاء التراخيص والآبار الجافة." }, ref: "IFRS 6 / IAS 36" },
      { text: { en: "For utilities, vouch tariff calculations and index resets to regulator decisions, and challenge recoverability of under-recovery assets against the regulatory mechanism.", ar: "للمرافق، افحش حسابات التعريفة وإعادة ضبط المؤشرات بقرارات المنظم، وناقش قابلية استرداد أصول عدم الاسترداد مقابل الآلية التنظيمية." }, ref: "IAS 37 / IFRS 9" },
      { text: { en: "Age state-entity receivables, challenge ECL staging against settlement history, and read the going-concern cash model against treasury payment cycles.", ar: "عنّر الذمم الحكومية، وناقش التدرج مقابل تاريخ التسوية، واقرأ نموذج نقد الاستمرارية مقابل دورات سداد الخزانة." }, ref: "IFRS 9 / ISA 570" },
    ],
    kams: [
      { en: "Decommissioning and restoration provisions.", ar: "مخصصات إزالة التركيبات والاستعادة." },
      { en: "Recognition of entitlement revenue under production-sharing agreements.", ar: "الاعتراف بإيراد الاستحقاق بموجب اتفاقيات مشاركة الإنتاج." },
    ],
    pitfalls: [
      { en: "Auditing E&P with a generic PPE program — the PSA defines the accounting, and each concession is its own world.", ar: "مراجعة الاستكشاف والإنتاج ببرنامج ممتلكات عام — الاتفاقية تعرّف المحاسبة وكل امتياز عالم مستقل." },
      { en: "Taking the state entity's entitlement statement at face value because 'they are the government'.", ar: "أخذ بيان استحقاق الجهة الحكومية على ظاهره لأنها 'الحكومة'." },
    ],
    relatedSections: ["fixed-assets", "provisions", "related-parties", "industry-risks"],
  },

  /* ================================================================ */
  /* TRANSPORT & LOGISTICS                                              */
  /* ================================================================ */
  {
    id: "logistics",
    cluster: "infrastructure",
    icon: "truck",
    name: { en: "Transport & Logistics", ar: "النقل والخدمات اللوجستية" },
    tagline: {
      en: "Every truck is a lease, every route a revenue contract — IFRS 16 and IFRS 15 in their hardest form.",
      ar: "كل شاحنة عقد إيجار وكل خط عقد إيراد — IFRS 16 وIFRS 15 في أقسى صورهما.",
    },
    overview: {
      en: "Freight forwarding, shipping agencies, trucking fleets, last-mile delivery and bonded-zone warehousing move Egypt's import/export economy. Revenue models mix spot freight, contract logistics with volume commitments, demurrage/detention income and agency commissions on carrier bills; costs are dominated by fleet (owned or leased — IFRS 16 right-of-use portfolios with renewal options), fuel (price-indexed and FX-exposed), third-party carrier subcontracting and warehouse labor. Customs-bonded warehouses carry strict inventory accountability to the Customs Authority; shipping agencies hold carrier funds in trust. Margins are thin and working-capital-hungry — receivables from freight-forwarding clients and carriers' rebates are the balance-sheet tail. Fuel-card and GPS telematics data make this one of the most auditable sectors when the auditor asks for the datasets.",
      ar: "يشحن التخليص ووكالات الملاحة وأساطيل النقل والتوصيل الأخير والتخزين الجمركي اقتصاد الاستيراد والتصدير المصري. تمزج نماذج الإيراد بين الشحن الفوري واللوجستيات التعاقدية بالتزامات حجم، ودخل الأرضية والتعويض، وعمولات الوكالة على فواتير الناقلين؛ وتهيمن التكاليف على الأسطول (ملك أو مستأجر — محافظ حق استخدام بخيارات تجديد)، والوقود (مفهرس ومعرض للعملة)، والتعاقد مع ناقلين، وعمالة المخازن. وتحمل المخازن الجمركية مساءلة صارمة للجمارك؛ وتمسك وكالات الملاحة أموال الناقلين بالأمانة. الهوامش رقيقة والرأس المامل العامل شره — وذمم عملاء الشحن وحوافز الناقلين ذيل الميزانية. وبيانات بطاقات الوقود وتتبع المركبات تجعل القطاع من أكثر القطاعات قابلية للمراجعة حين يطلب المراجع البيانات.",
    },
    revenueModel: {
      en: "Freight is recognized on shipment/delivery milestones (air/sea masters, bills of lading); contract logistics recognizes monthly service fees with volume true-ups; agency commissions settle net against carrier statements. Cut-off clusters on the last sailing/flight departures of the year and on December fuel-index resets.",
      ar: "يُعرف الشحن عند مراحل الشحن/التسليم (بوالص جوية وبحرية)؛ واللوجستيات التعاقدية برسوم شهرية بتسويات حجم؛ وعمولات الوكالة تسوى صافيًا مقابل كشوف الناقلين. ويتجمع الاستقطاع على آخر إبحارات ورحلات السنة وإعادة ضبط مؤشرات وقود ديسمبر.",
    },
    significantAccounts: [
      { account: { en: "Revenue by service line", ar: "الإيراد حسب خط الخدمة" }, assertions: ["C", "CO", "A"], why: { en: "Multi-modal shipments with subcontracted legs; principal-vs-agent on forwarding.", ar: "شحنات متعددة الوسائط بأرجل متعاقد عليها؛ والأصيل/الوكيل في التخليص." } },
      { account: { en: "Fleet: PPE & right-of-use assets", ar: "الأسطول: ممتلكات وأصول حق استخدام" }, assertions: ["EX", "VA", "C"], why: { en: "Owned vs leased mix, maintenance cycles, residual values.", ar: "مزيج ملك واستئجار، ودورات صيانة، وقيم متبقية." } },
      { account: { en: "Carrier & customer receivables", ar: "ذمم الناقلين والعملاء" }, assertions: ["EX", "VA"], why: { en: "Rebates, demurrage claims and long-tail freight collections.", ar: "حوافز ومطالبات أرضية وتحصيلات طويلة الذيل." } },
      { account: { en: "Customer deposits & carrier trust funds", ar: "ودائع العملاء وأمانات الناقلين" }, assertions: ["C", "EX", "PR"], why: { en: "Agency money held for carriers is not the company's revenue or cash.", ar: "أموال الوكالة للناقلين ليست إيرادًا ولا نقدًا للشركة." } },
    ],
    inherentRisks: [
      { title: { en: "Gross vs net in freight forwarding", ar: "الإجمالي مقابل الصافي في الشحن" }, detail: { en: "Whether the forwarder controls the shipment (principal, gross revenue) or arranges carriage (agent, commission) must be assessed per trade lane and customer arrangement.", ar: "هل يتحكم المخلّص في الشحنة (أصيل، إيراد إجمالي) أم يرتب النقل (وكيل، عمولة) — يقيّم لكل خط تجاري وترتيب عميل." }, refs: ["IFRS 15 / EAS 48"] },
      { title: { en: "Lease accounting complexity", ar: "تعقيد محاسبة التأجير" }, detail: { en: "Trailer and truck leases with variable kilometer charges, renewal options and residual guarantees create measurement estimates; short-term exemptions need genuine terms testing.", ar: "تأجير المقطورات والشاحنات برسوم متغيرة بالكيلومتر وخيارات تجديد وضمانات متبقية ينشئ تقديرات قياس؛ وإعفاءات الأجل القصير تحتاج اختبار شروط حقيقي." }, refs: ["IFRS 16 / EAS 49"] },
      { title: { en: "Fuel & FX pass-through", ar: "تمرير الوقود والعملة" }, detail: { en: "Surcharges billed to customers lag or miss fuel-index moves; unrecovered cost squeezes margins silently until year-end true-ups.", ar: "الرسوم الإضافية على العملاء تتأخر أو تفوّت تحركات مؤشر الوقود؛ والتكلفة غير المستردة تعصر الهوامش بصمت حتى تسويات نهاية السنة." }, refs: ["IFRS 15", "IAS 21"] },
      { title: { en: "Bonded inventory accountability", ar: "مساءلة المخزون الجمركي" }, detail: { en: "Bonded warehouse stock answers to the Customs Authority: duty-unpaid shortages are immediate liabilities plus penalties — reconcile customs records to warehouse counts.", ar: "مخزون المخازن الجمركية مساءل أمام الجمارك: النقص غير المسدد رسومًا التزامات فورية وغرامات — طابق سجلات الجمارك بجرد المخازن." }, refs: ["Customs Law 207/2020", "IAS 37"] },
    ],
    fraudRedFlags: [
      { en: "Fuel card spend per vehicle exceeding plausible route distances.", ar: "إنفاق وقود للمركبة يتجاوز مسافات خطوط معقولة." },
      { en: "Ghost subcontractor carriers settling through one bank account.", ar: "ناقلون من الباطن وهميون يسوون عبر حساب بنكي واحد." },
      { en: "Demurrage income with no corresponding container-line statements.", ar: "دخل أرضية بلا كشوف خطوط حاويات مقابلة." },
      { en: "Carrier trust balances used to fund operations (misappropriation).", ar: "أرصدة أمانة الناقلين تمول التشغيل (اختلاس)." },
    ],
    minefields: [
      { topic: { en: "Variable lease payments", ar: "مدفوعات تأجير متغيرة" }, detail: { en: "Per-kilometer and usage-based payments stay variable (expensed) unless they depend on an index/rate — classification errors are common and material.", ar: "المدفوعات بالكيلومتر والاستخدام تظل متغيرة (تُصرف) إلا إذا اعتمدت على مؤشر/معدل — أخطاء التصنيف شائعة وجوهرية." }, ref: "IFRS 16 / EAS 49" },
      { topic: { en: "Revenue on delivered-vs-departed terms", ar: "الإيراد عند التسليم مقابل الإقلاع" }, detail: { en: "FOB/EXW forwarding recognition points differ from delivery-confirmed logistics contracts — map each service line to its control model.", ar: "نقاط الاعترف في التخليص FOB/EXW تختلف عن عقود اللوجستيات بمؤكد تسليم — اربط كل خط خدمة بنموذج سيطرته." }, ref: "IFRS 15" },
    ],
    regulatory: {
      en: "Trucking and logistics register with the General Authority for Roads and Bridges and cargo transport syndicates; shipping agencies and NVOCCS answer to the Egyptian Authority for Maritime Safety and carrier principal agreements; customs bonded warehouses are licensed under the Customs Law 207/2020 with strict stock accountability; last-mile fleets face municipal licensing and traffic-law enforcement; labor at warehouses falls under social-insurance regimes. Fuel supply runs on the government pricing cycle — cost assumptions should reference the published indices.",
      ar: "يسجل النقل واللوجستيات لدى الهيئة العامة للطرق والكباري ونقابات النقل؛ وتخضع وكالات الملاحة ووكلاء الشحن غير الملاحظين لسلامة البحرية واتفاقيات الناقلين؛ وترخص المخازن الجمركية وفق قانون الجمارك 207 بسؤال صارم عن المخزون؛ وتواجه أساطيل التوصيل الأخير تراخيص محلية وتنفيذ مروري؛ وعمالة المخازن تحت التأمينات. ويمر إمداد الوقود بدورة التسعير الحكومية — يجب أن تشير افتراضات التكلفة للمؤشرات المنشورة.",
    },
    ratios: [
      { name: { en: "Fuel cost per km", ar: "تكلفة الوقود للكيلومتر" }, benchmark: "Fuel spend ÷ GPS distance", redFlag: { en: "Cost per km far below fleet consumption norms.", ar: "تكلفة الكيلومتر دون معايير استهلاك الأسطول بكثير." } },
      { name: { en: "Empty-leg ratio", ar: "نسبة الأرجل الفارغة" }, benchmark: "Empty km ÷ total km", redFlag: { en: "Improving ratios with flat revenue per km.", ar: "نسب تتحسن مع إيراد ساكن للكيلومتر." } },
      { name: { en: "DSO vs contract terms", ar: "أيام الذمم مقابل الشروط" }, benchmark: "DSO by client segment", redFlag: { en: "Freight clients financing the operation (DSO > 120 days).", ar: "عملاء شحن يمولون التشغيل (أيام تتجاوز 120)." } },
    ],
    procedures: [
      { text: { en: "Test principal-vs-agent by trade lane for a sample of forwarding files: who contracts the carrier, who bears risk, whose invoice the client pays — then verify revenue presentation.", ar: "اختبر الأصيل/الوكيل لكل خط تجاري بعينة ملفات شحن: من يتعاقد مع الناقل ومن يتحمل المخاطرة وفاتورة من يدفعها العميل — ثم تحقق من عرض الإيراد." }, ref: "IFRS 15" },
      { text: { en: "Reconcile fuel-card data with GPS distance per vehicle for a sample month; investigate vehicles with impossible consumption.", ar: "طابق بيانات بطاقات الوقود بمسافات تتبع المركبات لشهر عينة؛ وحقق في مركبات استهلاكها مستحيل." }, ref: "ISA 520 / ISA 240" },
      { text: { en: "For bonded warehouses, reconcile customs stock records to physical counts and duty-paid status; evaluate provisions for shortages.", ar: "للمخازن الجمركية، طابق سجلات مخزون الجمارك بالجرد الفعلي وحالة سداد الرسوم؛ وقيّم مخصصات النقص." }, ref: "Customs law / ISA 501" },
      { text: { en: "Vouch lease classifications: extract the lease register, test short-term and low-value exemptions against contractual terms, and recompute ROU assets for a sample of trucks.", ar: "افحص تصنيفات التأجير: استخرج سجل الإيجارات، واختبر إعفاءات الأجل القصير مقابل الشروط، وأعد احتساب أصول الاستخدام لعينة شاحنات." }, ref: "IFRS 16" },
      { text: { en: "Confirm carrier balances and rebate receivables with the principals, and reconcile trust-fund movements to carrier statements.", ar: "أكّد أرصدة الناقلين وحوافزهم مع الأصيلات، وطابق حركة الأمانات بكشوفهم." }, ref: "ISA 505" },
    ],
    kams: [
      { en: "Revenue recognition across freight forwarding and contract logistics (principal/agent).", ar: "الاعتراف بالإيراد عبر الشحن واللوجستيات التعاقدية (الأصيل/الوكيل)." },
      { en: "Lease accounting for the fleet and equipment portfolio.", ar: "محاسبة تأجير محفظة الأسطول والمعدات." },
    ],
    pitfalls: [
      { en: "Auditing revenue from the invoice system while the shipments data (bills of lading, PODs) sits untouched in the TMS.", ar: "مراجعة الإيراد من نظام الفواتير بينما بيانات الشحن في نظام إدارة النقل بلا لمس." },
      { en: "Treating carrier trust funds as ordinary payables — they are fiduciary balances with their own reconciliation.", ar: "معاملة أمانات الناقلين ذممًا عادية — إنها أرصدة أمانة بمطابقتها الخاصة." },
    ],
    relatedSections: ["receivables", "revenue", "payables", "industry-risks"],
  },

  /* ================================================================ */
  /* EDUCATION & TRAINING                                              */
  /* ================================================================ */
  {
    id: "education",
    cluster: "services",
    icon: "graduation-cap",
    name: { en: "Education & Training", ar: "التعليم والتدريب" },
    tagline: {
      en: "A year of tuition collected in September, delivered over ten — deferred revenue is the whole model.",
      ar: "رسوم سنة تُحصل في سبتمبر وتقدم على عشرة — الإيراد المؤجل هو النموذج كله.",
    },
    overview: {
      en: "Private schools, universities, language centers and vocational institutes run academic-year economics: enrollment contracts signed in spring collect tuition (often fully prepaid) in August–September, while the service — and the cost — spreads over the academic year. For-profit education in Egypt is licensed by the Ministry of Education (schools) or the Supreme Council/required ministerial approvals (private universities), with caps and approval rules on fee increases each year, national curriculum obligations for local tracks, and international-partnership structures (IB, British, American diplomas) that carry franchise/royalty costs. Teacher payroll is the cost engine, transport and meal services are auxiliary revenue lines, and expansion runs on new campuses capitalized over years. The P&L lives or dies by enrollment counts, so the student information system (SIS) is the audit's ground truth.",
      ar: "تعمل المدارس والجامعات الخاصة ومراكز اللغات والمعاهد المهنية باقتصاد العام الدراسي: عقود قيد توقع بالربيع وتحصل الرسوم (غالبًا مقدمة كاملة) في أغسطس-سبتمبر، بينما الخدمة — والتكلفة — تمتد على العام. يرخص التعليم الربحي في مصر وزارة التربية والتعليم (المدارس) أو باعتمادات وزارية ومجالس عليا (الجامعات الخاصة)، بسقوف وقواعد موافقة لزيادات الرسوم سنويًا، والتزامات مناهج وطنية للمسارات المحلية، وهياكل شراكات دولية (بكالوريا وبريطاني وأمريكي) تحمل تكاليف امتياز وحقوق. رواتب المعلمين محرك التكلفة، والنقل والوجبات خطوط إيراد مساعدة، والتمدد بحرمات جديدة تُرسمل سنوات. تقوم القائمة أو تسقط بأعداد القيد، فنظام معلومات الطلاب هو الحقيقة الأرضية للمراجعة.",
    },
    revenueModel: {
      en: "Tuition is a stand-ready service over the academic year: prepaid fees sit in contract liabilities and release monthly (or per term); registration and application fees are non-refundable point-in-time income; transport, meals and uniform sales are separate obligations. Refunds for mid-year withdrawals follow the refund policy — a provision estimate. Summer-term revenue and cram courses create a second mini-season.",
      ar: "الرسوم خدمة جاهزة على مدى العام: تتحمل المقدمة في التزامات عقود وتتحقق شهريًا (أو فصليًا)؛ ورسوم القيد والتقديم دخل نقطة غير مسترد؛ والنقل والوجبات والزي التزامات منفصلة. واستردادات الانسحاب منتصف العام تتبع سياسة الاسترداد — تقدير مخصص. وإيراد الصيف والدورات المكثفة موسم صغير ثانٍ.",
    },
    significantAccounts: [
      { account: { en: "Contract liabilities (tuition advances)", ar: "التزامات العقود (مقدمات الرسوم)" }, assertions: ["C", "VA", "PR"], why: { en: "The largest liability; release pattern and refund provisions decide the P&L.", ar: "أكبر الالتزامات؛ ونمط التحقق ومخصص الاسترداد يقرران القائمة." } },
      { account: { en: "Tuition revenue & enrollment", ar: "إيراد الرسوم والقيد" }, assertions: ["C", "CO", "A"], why: { en: "SIS enrollment counts × fee schedules must reconcile to billed revenue.", ar: "أعداد القيد بالنظام × جداول الرسوم يجب أن تطابق الإيراد المفوتر." } },
      { account: { en: "Payroll & teacher benefits", ar: "الأجور ومزايا المعلمين" }, assertions: ["C", "A", "VA"], why: { en: "Salaries over 12 months against revenue over 10 — accruals and severance (Labor Law 14/2025 era rules).", ar: "رواتب 12 شهرًا مقابل إيراد 10 — استحقاقات ومكافآت نهاية الخدمة." } },
      { account: { en: "Campus construction & capex", ar: "إنشاء الحرم والاستثمار" }, assertions: ["VA", "EX"], why: { en: "Expansion phases capitalized while carrying heavy debt.", ar: "مراحل توسع تُرسمل مع ديون ثقيلة." } },
    ],
    inherentRisks: [
      { title: { en: "Deferred revenue release", ar: "تحقق الإيراد المؤجل" }, detail: { en: "Releasing tuition against the calendar (straight-line) rather than the service pattern (terms, holidays, exam periods) — or recognizing next-year fees early at enrollment — misstates profit systematically.", ar: "تحقق الرسوم بالتقويم (خط مستقيم) لا بنمط الخدمة (فصول وعطل وامتحانات) — أو اعتراف مبكر برسوم العام القادم عند القيد — يحرف الربح نظاميًا." }, refs: ["IFRS 15 / EAS 48"] },
      { title: { en: "Fee-increase compliance", ar: "امتثال زيادة الرسوم" }, detail: { en: "Ministry caps and parent-committee approvals constrain billable fees; unauthorized increases create refund liabilities and regulatory exposure.", ar: "سقوف الوزارة وموافقات لجان أولياء الأمور تقيد الرسوم القابلة للفوترة؛ والزيادات غير المصرح بها تنشئ التزامات استرداد وتعرضًا تنظيميًا." }, refs: ["ISA 250", "IAS 37"] },
      { title: { en: "Enrollment completeness vs leakage", ar: "اكتمال القيد مقابل التسرب" }, detail: { en: "Discounts, scholarships and staff-child waivers cut gross tuition; the SIS fee-contract population is the completeness anchor, and sibling discounts are a leakage spot.", ar: "خصومات ومنح وإعفاءات أبناء العاملين تقتطع من الإجمالي؛ ومجتمع عقود الرسوم بالنظام مرساة الاكتمال، وخصومات الأشقاء موضع تسرب." }, refs: ["ISA 330", "ISA 240"] },
      { title: { en: "Cash fee collection", ar: "التحصيل النقدي للرسوم" }, detail: { en: "Tuition paid in cash at busy admission windows without tight receipt controls is the classic skimming ground in this sector.", ar: "رسوم تدفع نقدًا في نوافذ قيد مزدحمة دون ضبط إيصالات صارم هي ملعب السحب الكلاسيكي في القطاع." }, refs: ["ISA 240"] },
    ],
    fraudRedFlags: [
      { en: "Student count in the SIS exceeding the capacity approved in the license.", ar: "عدد طلاب بالنظام يتجاوز السعة المرخصة." },
      { en: "Revenue releasing in perfect monthly twelfths for a 10-month academic calendar.", ar: "إيراد يتحقق في أثلاث شهرية مثالية لتقويم دراسي عشرة أشهر." },
      { en: "Transport revenue flat while bus routes doubled.", ar: "إيراد نقل ساكن بينما خطوط الباص تضاعفت." },
      { en: "Refund provisions near zero in a year of mid-year price disputes.", ar: "مخصصات استرداد تكاد تصفر في سنة نزاعات سعرية منتصف العام." },
    ],
    minefields: [
      { topic: { en: "Performance obligation pattern", ar: "نمط التزام الأداء" }, detail: { en: "Stand-ready service releases over the academic calendar including holidays — but optional extras (trips, clubs) are separate obligations recognized when delivered.", ar: "الخدمة الجاهزة تتحقق على التقويم الدراسي شاملًا العطل — لكن الإضافات الاختيارية (رحلات وأنشطة) التزامات منفصلة تعرف عند تقديمها." }, ref: "IFRS 15 / EAS 48" },
      { topic: { en: "Franchise & partnership fees", ar: "رسوم الامتياز والشراكة" }, detail: { en: "International accreditation fees, per-student royalties and exam-board charges need splitting between license, service and royalty components.", ar: "رسوم اعتماد دولية وعوائد لكل طالب ومصروفات مجالس الامتحانات تحتاج توزيعًا بين ترخيص وخدمة وعائد." }, ref: "IFRS 15" },
    ],
    regulatory: {
      en: "Schools need Ministry of Education licensing (building code, capacity, curriculum approval, fee caps with committee processes); private universities operate under their own law with program accreditation; vocational and language centers register with relevant directorates; nurseries answer to the Ministry of Social Solidarity. International partnerships require ministry notification. Payroll carries Labor Law and social-insurance exposure (teachers' working-hour rules), and food services at schools bring NFSA inspections — each is a documented compliance checkpoint.",
      ar: "تحتاج المدارس ترخيص وزارة التربية والتعليم (كود بناء وسعة واعتماد مناهج وسقوف رسوم بلجان)؛ وتعمل الجامعات الخاصة بقانونها باعتماد برامج؛ ويسجل مراكز التدريب واللغات لدى المديريات؛ والحضانات لوزارة التضامن. وتستلزم الشراكات الدولية إخطار الوزارة. وتحمل الأجور تعرض قانون العمل والتأمينات (قواعد ساعات المعلمين)، وتجلب خدمات الغذاء المدرسي تفتيش سلامة الغذاء — كل نقطة امتثال موثقة.",
    },
    ratios: [
      { name: { en: "Revenue per student", ar: "الإيراد لكل طالب" }, benchmark: "Tuition ÷ avg enrolled", redFlag: { en: "Implied fees above the approved fee schedule.", ar: "رسوم ضمنية فوق الجدول المعتمد." } },
      { name: { en: "Payroll ratio", ar: "نسبة الأجور" }, benchmark: "Payroll ÷ revenue (55–70%)", redFlag: { en: "Ratio improving with rising teacher turnover (costs deferred).", ar: "النسبة تتحسن مع تزايد دوران المعلمين (تكاليف مؤجلة)." } },
      { name: { en: "Utilization vs licensed capacity", ar: "الاستغلال مقابل السعة المرخصة" }, benchmark: "Enrolled ÷ licensed capacity", redFlag: { en: "Utilization over 100% or below 50% (licensing and viability).", ar: "استغلال فوق 100% أو دون 50% (ترخيص وجدوى)." } },
    ],
    procedures: [
      { text: { en: "Extract the SIS enrollment and fee-contract population at year-end; recompute billed tuition (headcount × net fee contracts) and reconcile to recorded revenue and contract liabilities.", ar: "استخرج مجتمع القيد وعقود الرسوم من نظام الطلاب نهاية السنة؛ وأعد احتساب الرسوم المفوترة (أعداد × عقود صافية) وطابق بالإيراد المسجل والتزامات العقود." }, ref: "ISA 330 / IFRS 15" },
      { text: { en: "Test the deferred-revenue release pattern against the academic calendar (term dates, holidays) for a sample of grades, and recompute the refund provision from withdrawal history.", ar: "اختبر نمط تحقق الإيراد المؤجل مقابل التقويم الدراسي (تواريخ الفصول والعطل) لعينة صفوف، وأعد احتساب مخصص الاسترداد من تاريخ الانسحاب." }, ref: "IFRS 15 / IAS 37" },
      { text: { en: "Vouch fee increases to ministry/committee approvals; quantify unapproved increments as refund liabilities and regulatory contingencies.", ar: "افحش زيادات الرسوم على موافقات الوزارة/اللجان؛ وحدد الزيادات غير المعتمدة كالتزامات استرداد وتزامن تنظيمي." }, ref: "ISA 250 / IAS 37" },
      { text: { en: "Test cash-tuition controls at admission windows: receipt sequences, SIS-to-bank-to-GL reconciliations, and surprise counts.", ar: "اختبر ضوابط الرسوم النقدية بنوافذ القيد: تسلسل الإيصالات، ومطابقات النظام-البنك-الدفتر، وجرد مفاجئ." }, ref: "ISA 240 / ISA 330" },
      { text: { en: "Recompute teacher payroll accruals for August–September (paid but not 'delivered') and test severance/leave balances against the Labor Law.", ar: "أعد احتساب استحقاقات رواتب المعلمين لأغسطس-سبتمبر (مدفوعة دون 'تقديم') واختبر أرصدة نهاية الخدمة مقابل قانون العمل." }, ref: "IAS 19 / EAS" },
    ],
    kams: [
      { en: "Revenue recognition of tuition and deferred-revenue release (academic calendar pattern).", ar: "الاعتراف بإيراد الرسوم وتحقق المؤجل (نمط التقويم الدراسي)." },
      { en: "Compliance with regulated fee caps and related refund obligations.", ar: "الامتثال لسقوف الرسوم المنظمة والتزامات الاسترداد المرتبطة." },
    ],
    pitfalls: [
      { en: "Testing tuition with journal entries while the enrollment database proves the population in one query.", ar: "اختبار الرسوم بقيود اليومية بينما قاعدة القيد تثبت المجتمع باستعلام واحد." },
      { en: "Forgetting that August–September payroll (paid before the year starts) belongs in the release pattern, not in 'prepaid' forever.", ar: "نسيان أن رواتب أغسطس-سبتمبر (قبل بداية العام) تخص نمط التحقق لا 'مقدمات' إلى الأبد." },
    ],
    relatedSections: ["receivables", "revenue", "payroll", "industry-risks"],
  },

  /* ================================================================ */
  /* TOURISM & HOSPITALITY                                              */
  /* ================================================================ */
  {
    id: "tourism",
    cluster: "services",
    icon: "palmtree",
    name: { en: "Tourism & Hospitality", ar: "السياحة والضيافة" },
    tagline: {
      en: "Daily occupancy is the heartbeat — the PMS data settles every argument.",
      ar: "الإشغال اليومي هو النبض — بيانات نظام إدارة الفندق تحسم كل جدال.",
    },
    overview: {
      en: "Hotels, Nile cruisers, travel agencies and DMCs monetize occupancy, F&B, banqueting and excursion packages in a sector that is Egypt's hard-currency engine and shock absorber (currency, security and regional events swing arrivals violently). Revenue flows through the PMS (room nights, packages), POS outlets and OTA/e-distribution channels with commissions; all-inclusive resorts allocate package prices across rooms, meals and entertainment; travel agencies handle supplier and customer float with heavy FX exposure. The Ministry of Tourism and Antiquities classifies hotels (star ratings tied to pricing floors) and licenses guides and operators; tourism zones carry land allocations with use conditions. Seasonality (winter European peak, summer domestic) bends the year-end accruals, and the FF&E reserve (typically 3–5% of revenue for furniture/fixtures renewal) is a contractual liability against lenders that auditors must not ignore.",
      ar: "ت monetize الفنادق والبواخر النيلية ووكالات السفر وجهاتها الإشغال والمطاعم والبنكيت والرحلات في قطاع هو محرك العملة الصعبة لمصر وممتص صدماتها (العملة والأمن وأحداث إقليمية تتأرجح بالوافدين بعنف). يمر الإيراد بنظام إدارة الفندق (ليالي الغرف والحزم) ونقاط البيع وقنوات التوزيع الإلكترونية بعمولاتها؛ والمنتجعات الشاملة توزع سعر الحزمة على الغرف والطعام والترفيه؛ وتدير وكالات السفر عوائم موردين وعملاء بتعرض عملات ضخم. تصنف وزارة السياحة والآثار الفنادق (نجوم مرتبطة بحدود تسعير) وترخص المرشدين والمنظمين؛ وتحمل المناطق السياحية تخصيصات أراضٍ بشروط. تحني الموسمية (ذروة الشتاء الأوروبي والصيف المحلي) استحقاقات نهاية السنة، واحتياطي الأثاث والمعدات (عادة 3–5% من الإيراد) التزام تعاقدي أمام الممولين لا يجوز تجاهله.",
    },
    revenueModel: {
      en: "Room revenue is recognized nightly as occupancy occurs (PMS night audit); packages (all-inclusive, allotments) are unbundled across components over the stay; banqueting and events recognize on delivery; OTA sales settle weekly net of 15–25% commissions; travel agencies book gross margins on packages with supplier costs recognized as incurred. Cut-off is literally the night of 31 December — the night audit is the evidence.",
      ar: "يُعرف إيراد الغرف ليليًا مع الإشغال (مراجعة ليل النظام)؛ والحزم (شاملة وتخصيصات) تفكك لمكوناتها على مدى الإقامة؛ والبنكيت والفعاليات عند تقديمها؛ ومبيعات المنصات تسوى أسبوعيًا صافي عمولات 15–25%؛ وتحجز الوكالات هوامش إجمالية على الحزم بتكاليف موردين تُعرف بحدوثها. والاستقطاع حرفيًا ليلة 31 ديسمبر — مراجعة الليل هي الدليل.",
    },
    significantAccounts: [
      { account: { en: "Room & F&B revenue", ar: "إيراد الغرف والمطاعم" }, assertions: ["C", "CO", "A"], why: { en: "Nightly PMS audits and POS-to-GL integrity.", ar: "مراجعات ليلية وسلامة نقاط البيع للدفتر." } },
      { account: { en: "OTA & tour-operator receivables", ar: "ذمم المنصات ومنظمي الرحلات" }, assertions: ["EX", "VA"], why: { en: "Foreign-currency, commission-netted, long settlement chains.", ar: "عملات أجنبية، مخصومة العمولة، سلاسل تسوية طويلة." } },
      { account: { en: "FF&E reserve", ar: "احتياطي الأثاث والمعدات" }, assertions: ["VA", "C", "PR"], why: { en: "Contractual escrow-like accruals with lender covenants.", ar: "استحقاقات شبه أمانة تعاقدية بعهود تمويل." } },
      { account: { en: "Guest ledger & city ledger", ar: "دفتر الضيوف ودفتر المدينة" }, assertions: ["EX", "C", "A"], why: { en: "In-house guest balances vs external accounts — the hotel's twin receivable systems.", ar: "أرصدة الضيوف الداخليين مقابل الحسابات الخارجية — نظاما الذمم التوأمان." } },
    ],
    inherentRisks: [
      { title: { en: "Package unbundling", ar: "تفكيك الحزم" }, detail: { en: "All-inclusive prices allocated across room/meal/entertainment components need consistent SSP methodology; misallocation shifts revenue between outlet P&Ls and VAT treatment.", ar: "أسعار شاملة موزعة على الغرف والطعام والترفيه تحتاج منهجية أسعار مستقلة ثابتة؛ وسوء التوزيع ينقل الإيراد بين قوائم المنافذ ومعالجة الضريبة." }, refs: ["IFRS 15 / EAS 48"] },
      { title: { en: "OTA completeness & commissions", ar: "اكتمال المنصات وعمولاتها" }, detail: { en: "Direct bookings re-routed off-PMS, or commissions netted without the counterparty statements, understate both revenue and cost.", ar: "حجوزات مباشرة تخرج عن النظام، أو عمولات تخصم بلا كشوف الطرف الآخر، تنقص الإيراد والتكلفة معًا." }, refs: ["ISA 330", "ISA 505"] },
      { title: { en: "FF&E reserve mechanics", ar: "ميكانيكا احتياطي الأثاث" }, detail: { en: "Contractual percentages on defined revenue must accrue and fund (often escrow accounts) per the loan agreement — underfunding is both a misstatement and a covenant breach.", ar: "نسب تعاقدية على إيراد معرف يجب أن تستحق وتمول (غالبًا حسابات ضمان) وفق اتفاقية التمويل — ونقص التمويل تحريف وخرق عهد معًا." }, refs: ["IAS 37", "loan covenants"] },
      { title: { en: "FX on hard-currency pricing", ar: "العملة على التسعير بالصعب" }, detail: { en: "Rates quoted in EUR/USD with EGP costs; realized vs applied rates diverge, and advance deposits carry translation risk.", ar: "أسعار باليورو/الدولار وتكاليف بالجنيه؛ تتباعد الأسعار المحققة عن المطبقة، وتحمل الدفعات المقدمة مخاطر ترجمة." }, refs: ["IAS 21"] },
    ],
    fraudRedFlags: [
      { en: "Occupancy statistics improving while outlet covers (restaurant guests) stay flat.", ar: "إحصاءات إشغال تتحسن بينما ضيوف المنافذ ساكنون." },
      { en: "Cash-front desk variance reports always within tolerance, never adjusted.", ar: "تقارير فروق الكاشير الأمامي دائمًا ضمن الحدود ولا تسوّى أبدًا." },
      { en: "FF&E reserve 'spent' on operating repairs to relieve cost pressure.", ar: "احتياطي الأثاث 'يُنفق' على إصلاحات تشغيلية لتخفيف الضغط." },
      { en: "Tour-operator balances netted against undisclosed related-party bookings.", ar: "أرصدة منظمي رحلات تُسوى صافيًا مقابل حجوزات أطراف ذات علاقة غير مفصح عنها." },
    ],
    minefields: [
      { topic: { en: "Allotment & commission structures", ar: "هياكل التخصيص والعمولة" }, detail: { en: "Allotment contracts (release-back windows) and overbooking compensation need revenue-vs-penalty treatment by contract, not habit.", ar: "عقود التخصيص (نوافذ الإرجاع) وتعويض الحجز الزائد تحتاج معالجة إيراد/غرامة حسب العقد لا العادة." }, ref: "IFRS 15" },
      { topic: { en: "VAT on package components", ar: "ضريبة القيمة المضافة على مكونات الحزم" }, detail: { en: "Different VAT rates for accommodation vs F&B vs services make unbundling a tax-relevant judgment, not just accounting elegance.", ar: "معدلات ضريبية مختلفة للإقامة والمطاعم والخدمات تجعل التفكيك حكمًا ضريبيًا لا أناقة محاسبية فقط." }, ref: "VAT law" },
    ],
    regulatory: {
      en: "The Ministry of Tourism and Antiquities licenses and classifies hotels and floating hotels (star-rating rules, minimum pricing on some categories), licenses travel agencies and tour guides; TALA (tourism antiquities) zone land allocations carry use and development conditions; the Tourism Promotion Authority and hotel-employee labor rules (including minimum staffing by classification) apply. FX receipts follow CBE rules on repatriation of tourism proceeds — compliance is both a banking and an audit checkpoint.",
      ar: "ترخص وزارة السياحة والآثار وتصنف الفنادق والفنادق العائمة (قواعد النجوم وحدود تسعير لبعض الفئات)، وترخص وكالات السفر والمرشدين؛ وتحمل تخصيصات أراضي مناطق السياحة شروط استخدام وتطوير؛ وتنطبق قواعد هيئة التنشيط وعمالة الفنادق (حد أدنى للتوظيف بالتصنيف). وتتبع متحصلات العملة قواعد البنك المركزي في تحويل حصيلة السياحة — امتثال مصرفي ومراجعي معًا.",
    },
    ratios: [
      { name: { en: "ADR & RevPAR", ar: "متوسط سعر الغرفة وإيرادها المتاح" }, benchmark: "Room revenue ÷ rooms sold/available", redFlag: { en: "ADR up while market reports show discounting.", ar: "السعر يرتفع بينما تقارير السوق تظهر خصومات." } },
      { name: { en: "Occupancy vs utility usage", ar: "الإشغال مقابل استهلاك المرافق" }, benchmark: "Occupancy % vs electricity/water load", redFlag: { en: "Occupancy below utility-implied levels (unrecorded guests).", ar: "إشغال دون مستويات المرافق (ضيوف غير مسجلون)." } },
      { name: { en: "FF&E funding gap", ar: "فجوة تمويل الاحتياطي" }, benchmark: "Accrued ÷ contractual requirement", redFlag: { en: "Persistent under-accrual against loan terms.", ar: "نقص استحقاق دائم مقابل شروط التمويل." } },
    ],
    procedures: [
      { text: { en: "Reconcile PMS night-audit summaries to GL revenue by month for rooms, F&B and other outlets; investigate adjustment (late charges, rebates) patterns.", ar: "طابق ملخصات المراجعة الليلية بإيراد الدفتر شهريًا للغرف والمطاعم والمنافذ؛ وحقق في أنماط التسويات (رسوم متأخرة وإبراءات)." }, ref: "ISA 330" },
      { text: { en: "Recompute package unbundling for a sample of all-inclusive bookings (room/meal/activity SSP split) and test the VAT treatment of each component.", ar: "أعد احتساب تفكيك الحزم لعينة حجوزات شاملة (توزيع الأسعار المستقلة) واختبر المعالجة الضريبية لكل مكون." }, ref: "IFRS 15" },
      { text: { en: "Confirm balances with major OTAs and tour operators (foreign-currency confirmations), and reconcile commissions to their statements.", ar: "أكّد الأرصدة مع المنصات ومنظمي الرحلات الكبار (تأكيدات بالعملة)، وطابق العمولات بكشوفهم." }, ref: "ISA 505" },
      { text: { en: "Recalculate the FF&E reserve per the facility agreement (base revenue, percentage, escrow funding) and inspect the escrow account movements.", ar: "أعد احتساب احتياطي الأثاث وفق اتفاقية التمويل (إيراد الأساس والنسبة وتمويل الضمان) وافحش حركة حساب الضمان." }, ref: "IAS 37 / covenants" },
      { text: { en: "Cross-check occupancy statistics to utility consumption (electricity/water per occupied room) for reasonableness, and inspect the 31 December night audit for cut-off.", ar: "دقق إحصاءات الإشغال مقابل استهلاك المرافق (كهرباء ومياه للغرفة المشغولة) للمعقولية، وافحش مراجعة ليلة 31 ديسمبر للاستقطاع." }, ref: "ISA 520 / ISA 330" },
    ],
    kams: [
      { en: "Revenue recognition across packages and distribution channels (unbundling, commissions).", ar: "الاعتراف بالإيراد عبر الحزم وقنوات التوزيع (التفكيك والعمولات)." },
      { en: "FF&E reserve funding and lender covenant compliance.", ar: "تمويل احتياطي الأثاث والامتثال لعهود التمويل." },
    ],
    pitfalls: [
      { en: "Testing hotel revenue from the GL while the PMS export answers every question in one file.", ar: "اختبار إيراد الفندق من الدفتر بينما مخرج نظام الإدارة يجيب عن كل سؤال في ملف واحد." },
      { en: "Ignoring the FF&E reserve because it's 'just a provision' — it is a funded covenant with escrow mechanics.", ar: "تجاهل احتياطي الأثاث لأنه 'مخصص فحسب' — إنه عهد ممول بميكانيكا ضمان." },
    ],
    relatedSections: ["receivables", "revenue", "inventory", "industry-risks"],
  },

  /* ================================================================ */
  /* GROUPS & HOLDING COMPANIES                                         */
  /* ================================================================ */
  {
    id: "groups",
    cluster: "structures",
    icon: "network",
    name: { en: "Groups & Holding Companies", ar: "المجموعات والشركات القابضة" },
    tagline: {
      en: "The misstatement lives where the eliminations are — start the matrix on day one.",
      ar: "التحريف يسكن حيث الاستبعادات — ابدأ المصفوفة من اليوم الأول.",
    },
    overview: {
      en: "Holding structures — investment vehicles, family groups and listed conglomerates — add a consolidation layer on top of every component risk. Group accounting (IFRS 10 / EAS consolidation rules) demands control assessment for SPVs and joint arrangements (IFRS 11: joint operation vs joint venture), uniform accounting policies and reporting-date alignment (three-month gap max), and complete, timely eliminations. Egyptian family groups often keep informal intercompany webs (current accounts, management-fee chains, cash pooling) that never fully reconcile; listed groups face FRA/EGX disclosure including segment reporting (IFRS 8) and related-party disclosures (IAS 24). Component auditor instructions (ISA 600) decide what the group team actually relies on, and goodwill on the consolidated balance sheet needs annual impairment testing at the CGU level.",
      ar: "تضيف الهياكل القابضة — صناديق الاستثمار والمجموعات العائلية والتكتلات المقيدة — طبقة توحيد فوق كل مخاطر المكون. تفرض محاسبة المجموعة (IFRS 10 وقواعد التوحيد المصرية) تقييم سيطرة على الشركات ذات الأغراض الخاصة والترتيبات المشتركة (IFRS 11: تشغيل مشترك مقابل مشروع مشترك)، وتوحيد سياسات محاسبية وتواريخ تقرير (فجوة ثلاثة أشهر كحد أقصى)، واستبعادات كاملة وسريعة. وتحتفظ المجموعات العائلية المصرية غالبًا بشبكات متبادلة غير رسمية (حسابات جارية وسلاسل رسوم إدارة وتركيز نقد) لا تُسوى أبدًا بالكامل؛ وتواجه المجموعات المقيدة إفصاح الهيئة والبورصة بما فيه القطاعات (IFRS 8) والأطراف ذات العلاقة (IAS 24). وتقرر تعليمات مراجعي المكونات (ISA 600) ما يعتمد عليه فريق المجموعة فعلاً، وتحتاج الشهرة الموجبة اختبار انخفاض سنوي على مستوى وحدات توليد الدخل.",
    },
    revenueModel: {
      en: "The consolidated P&L is the sum of components minus eliminations; holding-company income (dividends, management fees, interest on intercompany funding) disappears on consolidation. What remains for the group auditor is the elimination matrix, the uniformity of policies, and the consolidation adjustments themselves — the classic group-level misstatement is unreconciled intercompany balances and profit-in-inventory on downstream sales.",
      ar: "القائمة الموحدة مجموع المكونات ناقص الاستبعادات؛ ودخل القابضة (توزيعات ورسوم إدارة وفوائد تمويل متبادل) يختفي بالتوحيد. ما يبقى لمراجع المجموعة مصفوفة الاستبعاد ووحدة السياسات وتسويات التوحيد ذاتها — والتحريف الكلاسيكي أرصدة متبادلة غير مسواة وأرباح في المخزون على مبيعات سابلة.",
    },
    significantAccounts: [
      { account: { en: "Intercompany balances & eliminations", ar: "الأرصدة المتبادلة والاستبعادات" }, assertions: ["C", "A", "VA"], why: { en: "Unreconciled nets and gross-up errors; the sector's signature misstatement.", ar: "صوافي غير مسواة وأخطاء إجمالاء؛ تحريف القطاع المميز." } },
      { account: { en: "Goodwill & CGU allocation", ar: "الشهرة وتوزيع وحدات الدخل" }, assertions: ["VA", "PR"], why: { en: "Annual impairment testing with cash-flow projections by CGU.", ar: "اختبار انخفاض سنوي بتوقعات تدفق لوحدة الدخل." } },
      { account: { en: "NCI & equity movements", ar: "الحصص غير المسيطرة وحركات حقوق الملكية" }, assertions: ["A", "VA", "PR"], why: { en: "Partial acquisitions, step deals and dividends to minorities.", ar: "استحواذات جزئية وصفقات متدرجة وتوزيعات للأقليات." } },
      { account: { en: "Investments in JVs & associates", ar: "الاستثمارات في المشروعات والشركات الزميلة" }, assertions: ["VA", "EX"], why: { en: "Equity-method carrying values and impairment indicators.", ar: "قيم دفترية بطريقة الحصص ومؤشرات انخفاض." } },
    ],
    inherentRisks: [
      { title: { en: "Control assessment & consolidation scope", ar: "تقييم السيطرة ونطاق التوحيد" }, detail: { en: "SPVs, de-facto control via shareholder agreements and potential-voting rights decide who consolidates whom — a wrong scope invalidates the entire statements.", ar: "الشركات الخاصة والسيطرة الفعلية باتفاقيات مساهمين وحقوق تصويت كامنة تقرر من يوحّد من — نطاق خاطئ يبطل القوائم بأكملها." }, refs: ["IFRS 10 / EAS"] },
      { title: { en: "Intercompany reconciliation failure", ar: "فشل مطابقة المتبادلات" }, detail: { en: "Current accounts drift apart (timing differences, FX, disputed fees); the group must certify matching balances in writing — not just net them off.", ar: "الحسابات الجارية تتباعد (فروق توقيت وعملة ورسوم متنازع عليها)؛ ويجب أن تشهد الشركات على أرصدة متطابقة كتابةً — لا مجرد تسوية صافية." }, refs: ["ISA 600", "IFRS 10.B86"] },
      { title: { en: "Profit-in-inventory on intragroup sales", ar: "أرباح في المخزون على المبيعات الداخلية" }, detail: { en: "Downstream/upstream sales margins unrealized in closing stock need elimination with the right direction (upstream adjustments touch NCI).", ar: "هوامش مبيعات داخلية غير محققة في مخزون الإقفال تحتاج استبعادًا بالاتجاه الصحيح (الصاعدة تعدل حصص الأقليات)." }, refs: ["IFRS 10.B86"] },
      { title: { en: "Goodwill impairment", ar: "انخفاض الشهرة" }, detail: { en: "CGU cash-flow projections, growth rates and discount rates are management's; independent market benchmarks and prior-year accuracy checks discipline them.", ar: "توقعات التدفق ومعدلات النمو والخصم من إعداد الإدارة؛ وتضبطها معايير سوق مستقلة ومراجعة دقة سنوات سابقة." }, refs: ["IAS 36 / EAS"] },
    ],
    fraudRedFlags: [
      { en: "Elimination entries always 'plugging' to a residual account.", ar: "قيود استبعاد تسد دائمًا حسابًا متبقيًا." },
      { en: "Components with different year-ends that never true-up their transactions.", ar: "مكونات بنهايات سنة مختلفة لا تسوي معاملاتها أبدًا." },
      { en: "Management fees between group members that mirror exactly the profit needed to plug targets.", ar: "رسوم إدارة بين أعضاء المجموعة تعكس بالضبط الربح اللازم لبلوغ المستهدفات." },
      { en: "A component auditor report that arrives signed but silent on the group instructions.", ar: "تقرير مراجع مكون يصل موقعًا لكنه صامت عن تعليمات المجموعة." },
    ],
    minefields: [
      { topic: { en: "Joint operation vs joint venture", ar: "تشغيل مشترك مقابل مشروع مشترك" }, detail: { en: "IFRS 11 structure-by-structure analysis: joint operators recognize assets/liabilities directly (construction JVs on pipelines, plants); joint ventures are equity-accounted.", ar: "تحليل IFRS 11 لكل هيكل: المشغلون المشتركون يعترفون بالأصول والالتزامات مباشرة (مشروعات تشيير مشتركة)؛ والمشروعات المشتركة بطريقة الحصص." }, ref: "IFRS 11 / EAS" },
      { topic: { en: "Uniform policies & reporting dates", ar: "توحيد السياسات والتواريخ" }, detail: { en: "Components on different GAAP habits (revenue points, capitalization) must be adjusted in consolidation — 'they've always done it that way' is not a policy.", ar: "يجب تسوية مكونات بعادات محاسبية مختلفة (نقاط إيراد ورسملة) في التوحيد — 'هكذا اعتادوا' ليست سياسة." }, ref: "IFRS 10.B87 / B92" },
    ],
    regulatory: {
      en: "Holding companies answer to the Companies/Investment laws (Law 159/1981, Law 72/2017) with related-party transaction rules; listed groups face FRA disclosure decisions (segment reporting, material subsidiaries' summary financials in some cases); state-owned groups follow their own law (Law 203/1991 era structures); transfer pricing documentation is mandatory for cross-border intragroup services and financing; and cash-pooling arrangements must respect CBE FX repatriation and netting rules.",
      ar: "تخضع القابضات لقوانين الشركات والاستثمار (159 لسنة 1981 و72 لسنة 2017) بقواعد معاملات الأطراف ذات العلاقة؛ وتواجه المجموعات المقيدة إفصاحات الهيئة (تقارير قطاعية وملخصات مالية لشركات تابعة جوهرية في بعض الحالات)؛ وتتبع المجموعات الحكومية قانونها (هياكل قانون 203 لسنة 1991)؛ وتوثيق أسعار التحويل إلزامي للخدمات والتمويل العابر للحدود داخل المجموعة؛ ويجب أن تحترم ترتيبات تركيز النقد قواعد البنك المركزي في التحويل والمقاصة.",
    },
    ratios: [
      { name: { en: "Intercompany unreconciled gap", ar: "فجوة المتبادلات غير المسواة" }, benchmark: "Unmatched net ÷ total intercompany", redFlag: { en: "Any persistent material gap tolerated for years.", ar: "أي فجوة جوهرية دائمة تُحتمل لسنوات." } },
      { name: { en: "Goodwill headroom", ar: "هامش أمان الشهرة" }, benchmark: "CGU recoverable ÷ carrying", redFlag: { en: "Headroom under 10% on aggressive growth.", ar: "هامش دون 10% بنمو متحمس." } },
      { name: { en: "Elimination symmetry", ar: "تماثل الاستبعاد" }, benchmark: "Debit vs credit eliminations by pair", redFlag: { en: "One-sided eliminations rolled forward.", ar: "استبعادات أحادية تدوّر لأمام." } },
    ],
    procedures: [
      { text: { en: "Run the intercompany matrix from day one: every pair certifies balances in writing; investigate mismatches to source documents and settle timing/FX differences properly.", ar: "شغّل مصفوفة المتبادلات من اليوم الأول: كل زوج يشهد على الأرصدة كتابةً؛ وحقق في عدم التطابق للمستندات وسوّ فروق التوقيت والعملة سليمًا." }, ref: "ISA 600 / IFRS 10" },
      { text: { en: "Document control conclusions for every entity (voting rights, agreements, SPVs), and confirm consolidation scope and the equity/joint-operation classification.", ar: "وثّق استنتاجات السيطرة لكل كيان (حقوق تصويت واتفاقيات وشركات خاصة)، وأكد نطاق التوحيد وتصنيف الحصص/التشغيل المشترك." }, ref: "IFRS 10 / IFRS 11" },
      { text: { en: "Recompute unrealized profit in closing inventory for major intragroup flows (margin by product, direction of sale, NCI effect) and test the elimination entries.", ar: "أعد احتساب الربح غير المحقق في مخزون الإقفال للتدفقات الداخلية الكبرى (هامش المنتج واتجاه البيع وأثر الأقليات) واختبر قيود الاستبعاد." }, ref: "IFRS 10.B86" },
      { text: { en: "Challenge the goodwill impairment model: compare prior-year forecasts to actuals, benchmark discount/growth rates to market, and test CGU composition changes.", ar: "ناقش نموذج انخفاض الشهرة: قارن توقعات سنوات سابقة بالفعلي، وقارن معدلات الخصم والنمو بالسوق، واختبر تغييرات تكوين وحدة الدخل." }, ref: "IAS 36 / ISA 540" },
      { text: { en: "Issue and clear component auditor instructions (materiality, scope, reporting package, fraud inquiries), and evaluate the sufficiency of their work before relying on it.", ar: "أصدر تعليمات مراجعي المكونات (أهمية ونطاق وحزمة تقارير واستفسارات تزييف) وصفّها، وقيّم كفاية عملهم قبل الاعتماد عليه." }, ref: "ISA 600" },
    ],
    kams: [
      { en: "Goodwill impairment testing and CGU cash-flow projections.", ar: "اختبار انخفاض الشهرة وتوقعات التدفق لوحدات الدخل." },
      { en: "Completeness of consolidation adjustments and intercompany eliminations.", ar: "اكتمال تسويات التوحيد واستبعادات المتبادلات." },
    ],
    pitfalls: [
      { en: "Starting the elimination matrix in the final week — it is a project-long control.", ar: "بدء مصفوفة الاستبعاد في الأسبوع الأخير — إنها أداة ضبط على مدى المهمة." },
      { en: "Letting the 'group policy' be the CFO's spreadsheet instead of a documented, applied policy set.", ar: "ترك 'سياسة المجموعة' جدول المدير المالي بدل مجموعة سياسات موثقة ومطبقة." },
    ],
    relatedSections: ["related-parties", "financing", "industry-risks"],
  },

  /* ================================================================ */
  /* NGOs & NOT-FOR-PROFIT                                              */
  /* ================================================================ */
  {
    id: "nonprofit",
    cluster: "structures",
    icon: "heart-handshake",
    name: { en: "NGOs & Not-for-Profit", ar: "المنظمات غير الهادفة للربح" },
    tagline: {
      en: "No profit motive, plenty of restrictions — fund accounting decides what money is whose.",
      ar: "لا دافع ربح وقيود كثيرة — محاسبة الصناديق تقرر مال مين لمين.",
    },
    overview: {
      en: "Egyptian NGOs (registered under the NGO Law 149/2019, supervised by the Ministry of Social Solidarity) and foundations, endowments (awqaf) and international-project entities operate on grants, donations and program funding with heavy donor restriction: funds given for a purpose are that purpose's money until spent on it, properly. Accounting splits into funds (restricted vs unrestricted), recognizes grants under IAS 20-style or contribution models, and tracks budget-vs-actual by project for each donor's reports. The sector's audit risks are use of restricted funds for unrestricted purposes, procurement compliance with donor rules, in-kind donations and volunteer labor valuation, FX on multi-currency grants, and the regulatory reporting to MoSS. Sustainability is a funding-pipeline question (grant renewals), not a profitability one — the going-concern file is the donor pipeline and the pipeline's deadlines.",
      ar: "تعمل المنظمات الأهلية المصرية (المسجلة بقانون 149 لسنة 2019 تحت إشراف وزارة التضامن الاجتماعي) والمؤسسات والأوقاف وكيانات المشروعات الدولية على منح وتبرعات وتمويل برامج بقيود مانحين ثقيلة: الأموال المعطاة لغرض هي مال ذلك الغرض حتى تُصرف عليه بشكل سليم. تنقسم المحاسبة لصناديق (مقيد وغير مقيد)، وتعترف بالمنح بأسلوب IAS 20 أو نماذج المساهمات، وتتابع الموازنة بالفعلي لكل مشروع لتقارير كل مانح. ومخاطر مراجعة القطاع: صرف المقيد على غير المقيد، وامتثال المشتريات لقواعد المانحين، وتقييم التبرعات العينية والعمل التطوعي، والعملة على المنح متعددة العملات، والإبلاغ للوزارة. والاستدامة سؤال خط تمويل (تجديدات المنح) لا ربحية — وملف الاستمرارية هو خط المانحين ومواعيده.",
    },
    revenueModel: {
      en: "Grants are recognized as contributions (immediately, when conditions are met) or as exchange transactions (as related costs are incurred) depending on the agreement's substance; donations are unrestricted income when received without stipulation; membership fees accrue over the year; fundraising events net their direct costs. Multi-year grants sit as deferred revenue until the qualifying spend occurs, and every donor report reconciles to a project ledger.",
      ar: "تُعرف المنح كمساهمات (فورًا عند تحقق الشروط) أو كمعاملات تبادلية (مع تحقق التكاليف المرتبطة) بحسب جوهر الاتفاق؛ والتبرعات دخل غير مقيد عند قبولها بلا شرط؛ ورسوم العضوية تستحق على السنة؛ وفعاليات جمع التبرعات صافي تكاليفها المباشرة. وتتحمل المنح متعددة السنوات كإيراد مؤجل حتى يقع الإنفاق المؤهل، وكل تقرير مانح يطابق بدفتر مشروع.",
    },
    significantAccounts: [
      { account: { en: "Deferred grant revenue / funds held", ar: "منح مؤجلة / أموال محتجزة" }, assertions: ["C", "VA", "PR"], why: { en: "Conditions and qualifying-cost matching decide when restricted money becomes income.", ar: "الشروط ومقابلة التكاليف المؤهلة تقرران متى يصبح المقيد دخلًا." } },
      { account: { en: "Program expenses by project", ar: "مصروفات البرامج بالمشروع" }, assertions: ["A", "C", "CL"], why: { en: "Donor-budget compliance, allowability rules and cut-off by grant period.", ar: "امتثال موازنة المانح وقواعد الجواز واستقطاع بمدة المنحة." } },
      { account: { en: "Cash & equivalents (multi-fund)", ar: "النقد وما يعادله (متعدد الصناديق)" }, assertions: ["EX", "C", "A"], why: { en: "Bank accounts per grant; commingling is the sector's cardinal sin.", ar: "حسابات بنكية لكل منحة؛ والخلط خطيئة القطاع الكبرى." } },
      { account: { en: "In-kind donations", ar: "التبرعات العينية" }, assertions: ["EX", "VA", "C"], why: { en: "Recognition (when measurable) and valuation of goods and services.", ar: "الاعتراف (عند القابلية للقياس) وتقييم السلع والخدمات." } },
    ],
    inherentRisks: [
      { title: { en: "Restricted-fund diversion", ar: "تحويل أموال مقيدة" }, detail: { en: "Cash from Grant A covering Grant B's payroll in a crunch creates disallowed costs, repayments and donor-report restatements — trace bank movements by grant.", ar: "نقد منحة (أ) يغطي رواتب منحة (ب) في أزمة ينشئ تكاليف مرفوضة وردود وإعادة عرض تقارير — تتبع الحركة البنكية لكل منحة." }, refs: ["ISA 240", "donor rules"] },
      { title: { en: "Allowable-cost disputes", ar: "نزاعات التكاليف الجائزة" }, detail: { en: "Overhead caps, ineligible expenses (certain travel, entertainment) and procurement thresholds (three quotes, sole-source justifications) get audited by donors months later.", ar: "سقوف إدارية ومصروفات غير مؤهلة وعتبات مشتريات (ثلاثة عروض وتبريرات المصدر الوحيد) يدققها المانحون شهورًا لاحقًا." }, refs: ["grant agreements"] },
      { title: { en: "In-kind & volunteer valuation", ar: "تقييم العيني والتطوع" }, detail: { en: "Donated goods, venues and professional services need measurable fair values and recognition only when the entity controls them — valuation is estimate territory.", ar: "سلع ومناطق وخدمات مهنية متبرعة تحتاج قيمًا عادلة قابلة للقياس واعترافًا عند السيطرة — التقييم أرض التقديرات." }, refs: ["IAS 20-style guidance"] },
      { title: { en: "FX on grant funding", ar: "العملة على تمويل المنح" }, detail: { en: "USD/EUR grants spent in EGP remeasure the grant receivable and the deferred balance; timing differences hit surplus/deficit of funds.", ar: "منح بالدولار/اليورو تُصرف بالجنيه تعيد قياس ذمة المنحة والرصيد المؤجل؛ وفروق التوقيت تضرب فائض/عجز الصناديق." }, refs: ["IAS 21"] },
    ],
    fraudRedFlags: [
      { en: "One bank account serving five grants with no fund-level tracking.", ar: "حساب بنكي واحد يخدم خمس منح دون تتبع على مستوى الصندوق." },
      { en: "Procurement repeatedly won by the same 'competitively selected' vendor.", ar: "مشتريات يفوز بها دائمًا نفس المورد 'المنتقى تنافسيًا'." },
      { en: "Payroll charged to whichever grant has balance left at month-end.", ar: "رواتب تُحمل على أي منحة بها رصيد آخر الشهر." },
      { en: "Donor reports reconciling perfectly while project ledgers don't.", ar: "تقارير مانحين تتطابق تمامًا بينما دفاتر المشروعات لا." },
    ],
    minefields: [
      { topic: { en: "Contribution vs exchange model", ar: "نموذج المساهمة مقابل التبادل" }, detail: { en: "A grant funding the NGO's own program is a contribution; a grant buying services the donor directs (training materials for the donor's beneficiaries) may be exchange revenue with cost-matching.", ar: "منحة تمول برنامج المنظمة مساهمة؛ ومنحة تشتري خدمات يوجهها المانح قد تكون إيراد تبادل بمقابلة تكاليف." }, ref: "IAS 20 / IFRS 15 analysis" },
      { topic: { en: "MoSS regulatory limits", ar: "حدود وزارة التضامن" }, detail: { en: "Law 149/2019 sets spending, foreign-funding approval and governance rules; violations are not just reporting issues — they are entity-level risks.", ar: "يضع القانون 149 لسنة 2019 قواعد إنفاق وموافقات تمويل أجنبي وحوكمة؛ والمخالفات ليست مسائل تقرير — مخاطر على مستوى الكيان." }, ref: "NGO Law 149/2019" },
    ],
    regulatory: {
      en: "NGOs register and report to the Ministry of Social Solidarity (Law 149/2019) with audited financials filed annually; foreign funding needs prior approval (National NGOs' foreign funding coordination rules); foundations may be established under the Civil Code or as central-account endowments under the Awqaf authorities; international organizations often operate via project agreements with line ministries. Donor regimes add their own audit layers (USAID-style single audits, EU expenditure verification) that the external auditor should coordinate with, not duplicate blindly.",
      ar: "تسجل المنظمات وتقدم تقاريرها لوزارة التضامن الاجتماعي (القانون 149 لسنة 2019) بقوائم مدققة سنويًا؛ ويحتاج التمويل الأجنبي موافقة مسبقة؛ وقد تؤسس المؤسسات بالقانون المدني أو كأوقاف تحت جهات الأوقاف؛ وتعمل المنظمات الدولية غالبًا باتفاقيات مشروعات مع الوزارات. وتضيف أنظمة المانحين طبقات تدقيقها (تدقيقات المنح الأمريكية، تحقق إنفاق الاتحاد الأوروبي) يجب أن ينسق معها المراجع الخارجي لا يكررها عمياء.",
    },
    ratios: [
      { name: { en: "Program-spending ratio", ar: "نسبة الإنفاق البرامجي" }, benchmark: "Program costs ÷ total expenditure", redFlag: { en: "Admin absorbing a growing share with falling program delivery.", ar: "الإداري يمتص حصة تنمو مع تراجع تقديم البرامج." } },
      { name: { en: "Grant utilization", ar: "استغلال المنح" }, benchmark: "Spent ÷ awarded by grant", redFlag: { en: "Chronic underspend risking clawback or non-renewal.", ar: "إنفاق مزمن دون المخصص يهدد بالاسترداد أو عدم التجديد." } },
      { name: { en: "Restricted-fund coverage of payroll", ar: "تغطية المقيد للأجور" }, benchmark: "Unrestricted cash ÷ monthly payroll", redFlag: { en: "Unrestricted runway under 3 months (structural deficit).", ar: "مدرج غير مقيد دون 3 أشهر (عجز هيكلي)." } },
    ],
    procedures: [
      { text: { en: "Reconcile every grant's bank account and project ledger to its donor report and the deferred-revenue schedule; test qualifying-cost matching for a sample of grants.", ar: "طابق حساب كل منحة البنكي ودفتر مشروعها بتقرير المانح وجدول الإيراد المؤجل؛ واختبر مقابلة التكاليف المؤهلة لعينة منح." }, ref: "IAS 20 / ISA 330" },
      { text: { en: "Trace payroll and major procurement allocations across funds for commingling; test donor procurement rules (quotes, thresholds, sole-source files) on sampled purchases.", ar: "تتبع توزيع الأجور والمشتريات الكبرى على الصناديق بحثًا عن الخلط؛ واختبر قواعد مشتريات المانحين على عينة مشتريات." }, ref: "grant rules / ISA 240" },
      { text: { en: "For in-kind donations, inspect receipt evidence and valuation support (market prices, expert letters), and confirm recognition only when control passes.", ar: "للتبرعات العينية، افحش أدلة الاستلام وسند التقييم (أسعار سوق وخطابات خبراء)، وأكد الاعتراف عند انتقال السيطرة فقط." }, ref: "ISA 501" },
      { text: { en: "Recompute FX remeasurement on foreign-currency grant receivables and deferred balances, and test the surplus/deficit presentation by fund.", ar: "أعد احتساب إعادة القياس بالعملة لذمم المنح والمؤجلة، واختبر عرض الفائض/العجز لكل صندوق." }, ref: "IAS 21" },
      { text: { en: "Assess going concern as a funding-pipeline question: committed grants, renewal deadlines, MoSS restrictions and the unrestricted-cash runway.", ar: "قيّم الاستمرارية كسؤال خط تمويل: منح ملتزمة ومواعيد تجديد وقيود الوزارة ومدرج النقد غير المقيد." }, ref: "ISA 570" },
    ],
    kams: [
      { en: "Recognition of restricted grants and the allocation of costs across funds.", ar: "الاعتراف بالمنح المقيدة وتوزيع التكاليف على الصناديق." },
      { en: "Compliance with donor and NGO-law restrictions (material uncertainties).", ar: "الامتثال لقيود المانحين وقانون المنظمات (عدم يقين جوهري)." },
    ],
    pitfalls: [
      { en: "Auditing total expenditure while every donor cares about their slice — fund-level reconciliation is the product.", ar: "مراجعة إجمالي المصروف بينما كل مانح يهتم بشريحته — مطابقة الصناديق هي المنتج." },
      { en: "Treating the donor's audit clause as someone else's problem — coordinate scopes, calendars and findings before both reports issue.", ar: "معاملة بند تدقيق المانح كمشكلة الآخرين — نسّق النطاقات والتقويمات والملاحظات قبل إصدار التقريرين." },
    ],
    relatedSections: ["related-parties", "financing", "provisions", "industry-risks"],
  },
]
