import { ProgramSection } from "./types"

/** Methodology sections: overall approach, materiality, sampling, completion. */
export const METHODOLOGY_SECTIONS: ProgramSection[] = [
  {
    id: "methodology",
    code: "AP-00",
    group: "methodology",
    icon: "compass",
    title: { en: "Audit Methodology Overview", ar: "نظرة عامة على منهجية المراجعة" },
    scope: {
      en: "How a risk-based external audit flows from acceptance to the opinion — use this as the map of the engagement before opening any account program.",
      ar: "كيف تسير المراجعة الخارجية القائمة على المخاطر من قبول المهمة حتى إصدار الرأي — استخدم هذا القسم كخريطة للمهمة قبل فتح أي برنامج خاص ببند.",
    },
    objectives: [
      { en: "Perform the engagement in the order the standards require: risk first, response second.", ar: "تنفيذ المهمة بالترتيب الذي تفرضه المعايير: تقييم المخاطر أولًا ثم تصميم الاستجابة." },
      { en: "Document each phase so an experienced reviewer can retrace every conclusion.", ar: "توثيق كل مرحلة بحيث يستطيع مراجع متمكن تتبع كل استنتاج." },
    ],
    risks: [
      { en: "Skipping risk assessment and jumping straight to ticking schedules — the classic cause of opinion failures.", ar: "تجاوز تقييم المخاطر والقفز مباشرة إلى فحص الكشوفات — السبب الكلاسيكي لفشل الرأي." },
      { en: "Same prior-year program reused without re-thinking what changed in the business.", ar: "إعادة استخدام برنامج السنة السابقة دون إعادة التفكير في ما تغيّر في النشاط." },
    ],
    documents: [
      { en: "Signed engagement letter (and updated terms if scope changed)", ar: "خطاب التكليف الموقّع (وشروط محدثة إذا تغيّر النطاق)" },
      { en: "Client acceptance & continuance assessment (ESQM 1 factors)", ar: "تقييم قبول واستمرار العميل (عوامل ESQM 1)" },
      { en: "Understanding the entity: business model, IT environment, governance", ar: "فهم المنشأة: نموذج العمل وبيئة تكنولوجيا المعلومات والحوكمة" },
      { en: "Prior-year audit file, management letter, and adjusting entries", ar: "ملف مراجعة السنة السابقة وخطاب الإدارة والقيود التصحيحية" },
    ],
    procedures: [
      { id: "methodology-1", ref: "ISA/ESA 210", text: { en: "Confirm the engagement letter is signed before fieldwork starts, and re-confirm terms if scope, fees, or timing changed during the year.", ar: "التأكد من توقيع خطاب التكليف قبل بدء العمل الميداني، وإعادة تأكيد الشروط إذا تغيّر النطاق أو الأتعاب أو التوقيت خلال العام." } },
      { id: "methodology-2", ref: "ISA/ESA 315", text: { en: "Obtain an understanding of the entity and its environment: industry, regulation (FRA/CBE/EGX where relevant), operations, and the flow of transactions from initiation to the financial statements.", ar: "الحصول على فهم المنشأة وبيئتها: الصناعة والتنظيم (الهيئة العامة للرقابة المالية/البنك المركزي/البورصة حيث ينطبق) والتشغيل، وتدفق العمليات من نشأتها حتى القوائم المالية." } },
      { id: "methodology-3", ref: "ISA/ESA 315", text: { en: "Identify significant transaction cycles (sales, purchases, payroll, treasury, closing) and walk one transaction through each cycle end-to-end.", ar: "تحديد دورات العمليات الجوهرية (المبيعات، المشتريات، الرواتب، الخزينة، الإقفال) وتتبع عملية واحدة في كل دورة من البداية للنهاية." } },
      { id: "methodology-4", ref: "ISA/ESA 315", text: { en: "Evaluate the design and implementation of key controls with walkthroughs — do not conclude on operating effectiveness yet.", ar: "تقييم تصميم وتطبيق الضوابط الرئيسية من خلال اختبارات التتبع — دون الحكم على فاعلية التشغيل في هذه المرحلة." } },
      { id: "methodology-5", ref: "ISA/ESA 240", text: { en: "Hold the fraud brainstorming session: how could management override controls, manipulate revenue, or hide liabilities in this specific entity?", ar: "عقد جلسة العصف الذهني للاحتيال: كيف يمكن للإدارة تجاوز الضوابط أو التلاعب بالإيرادات أو إخفاء الالتزامات في هذه المنشأة تحديدًا؟" } },
      { id: "methodology-6", ref: "ISA/ESA 320", text: { en: "Set overall materiality, performance materiality, and the clearly-trivial threshold (see the Materiality section), and document the rationale.", ar: "تحديد الأهمية النسبية الإجمالية وأهمية الأداء وحد الأهمية التافه (راجع قسم الأهمية النسبية) وتوثيق الأساس." } },
      { id: "methodology-7", ref: "ISA/ESA 330", text: { en: "Build the audit response: for each significant account and assertion, choose tests of controls and/or substantive procedures (detail + analytical), and enter them in the risk-response matrix.", ar: "بناء استجابة المراجعة: لكل بند جوهري وكل تأكيد، اختيار اختبارات الضوابط و/أو الإجراءات الجوهرية (تفصيلية وتحليلية) وإدراجها في مصفوفة المخاطر والاستجابة." } },
      { id: "methodology-8", ref: "ISA/ESA 500", text: { en: "Evaluate audit evidence as it accumulates: sufficient? appropriate? from sources the entity does not control? Update the risk assessment if evidence contradicts it.", ar: "تقييم أدلة المراجعة أولًا بأول: هل هي كافية؟ مناسبة؟ من مصادر لا تسيطر عليها المنشأة؟ وتحديث تقييم المخاطر إذا تعارض الدليل معه." } },
      { id: "methodology-9", ref: "ISA/ESA 450", text: { en: "Log every misstatement found in the Summary of Audit Differences (SAD), decide corrected vs uncorrected with management, and evaluate their aggregate effect on the opinion.", ar: "تسجيل كل خطأ مكتشف في ملخص فروق المراجعة، وتحديد المصحح وغير المصحح مع الإدارة، وتقييم أثرها الإجمالي على الرأي." } },
      { id: "methodology-10", ref: "ISA/ESA 230", text: { en: "Keep workpapers contemporaneous: prepared, reviewed, and signed off while the work is fresh — assembly of the final file within 60 days of the opinion.", ar: "إعداد أوراق العمل أولاً بأول: إعداد ومراجعة واعتماد أثناء حداثة العمل — مع تجميع الملف النهائي خلال 60 يومًا من الرأي." } },
    ],
    pitfalls: [
      { en: "A risk matrix that lists generic risks but has no effect on the procedures actually performed.", ar: "مصفوفة مخاطر تذكر مخاطر عامة دون أثر فعلي على الإجراءات المنفذة." },
      { en: "Controls tested for operating effectiveness when only design was understood.", ar: "اختبار فاعلية تشغيل ضوابط لم يُفهم منها إلا التصميم." },
      { en: "Analytical procedures performed at planning but never revisited as substantive evidence at completion.", ar: "إجراءات تحليلية نُفذت في التخطيط ولم تُستكمل كدليل جوهري عند الإقفال." },
    ],
    standards: ["ISA 210", "ISA 315 (2019)", "ISA 240", "ISA 320", "ISA 330", "ISA 450", "ISA 500", "ISA 230", "ESQM 1", "ESA (PM Decree 3725/2025)"],
  },

  {
    id: "materiality",
    code: "AP-02",
    group: "methodology",
    icon: "calculator",
    title: { en: "Materiality — How to Calculate It", ar: "الأهمية النسبية — كيفية حسابها" },
    scope: {
      en: "Step-by-step determination of overall materiality, performance materiality, and the clearly-trivial threshold, with the interactive calculator below.",
      ar: "الخطوات العملية لتحديد الأهمية النسبية الإجمالية وأهمية الأداء وحد الأهمية التافه، مع الحاسبة التفاعلية بالأسفل.",
    },
    objectives: [
      { en: "Pick a benchmark that reflects what users of the financial statements care about.", ar: "اختيار أساس يعكس ما يهم مستخدمي القوائم المالية." },
      { en: "Set thresholds that keep both aggregate and specific misstatement risk acceptably low.", ar: "تحديد حدود تُبقي مخاطر الأخطاء — الإجمالية والفردية — عند مستوى مقبول." },
    ],
    assertions: ["PR"],
    risks: [
      { en: "A benchmark chosen for convenience (whatever gives the biggest number) instead of user relevance.", ar: "اختيار الأساس الأسهل (ما يعطي الرقم الأكبر) بدلًا من الأهمية لمستخدم القوائم." },
      { en: "Performance materiality set at 100% of overall — leaves no cushion for untested areas.", ar: "وضع أهمية الأداء مساوية للأهمية الإجمالية — لا يترك هامشًا للمناطق غير المختبرة." },
      { en: "Materiality never revised when draft results differed materially from the figures used at planning.", ar: "عدم تعديل الأهمية النسبية عندما اختلفت النتائج الفعلية جوهريًا عن أرقام التخطيط." },
    ],
    documents: [
      { en: "Latest management accounts / draft financial statements", ar: "أحدث قوائم مالية مبدئية أو إدارية" },
      { en: "Prior-year audited financial statements", ar: "القوائم المالية المدققة للسنة السابقة" },
      { en: "Materiality memo documenting benchmark, percentage, and rationale", ar: "مذكرة الأهمية النسبية موثقة الأساس والنسبة والحجة" },
      { en: "Summary of Audit Differences (SAD) sheet", ar: "كشف ملخص فروق المراجعة" },
    ],
    procedures: [
      { id: "materiality-1", ref: "ISA/ESA 320", text: { en: "Choose ONE benchmark from the calculator (PBT is the default for profit-oriented entities). Justify the choice by who reads the statements and what decisions they make.", ar: "اختر أساسًا واحدًا من الحاسبة (ربح النشاط قبل الضريبة هو الافتراضي للشركات الهادفة للربح)، وبرر الاختيار بناءً على من يقرأ القوائم وما القرارات التي يتخذها." } },
      { id: "materiality-2", ref: "ISA/ESA 320", text: { en: "Apply the percentage within the typical range (e.g. 5%–10% of PBT). Use the LOWER end when users are more sensitive (listed companies, regulated entities, covenant-heavy borrowers).", ar: "طبّق النسبة داخل النطاق المعتاد (مثلًا 5%–10% من ربح النشاط). استخدم الحد الأدنى عندما يكون المستخدمون أكثر حساسية (الشركات المقيدة، الجهات الخاضعة للرقابة، المقترضون بشروط تعهدات)." } },
      { id: "materiality-3", ref: "ISA/ESA 320", text: { en: "Set performance materiality (PM) at 50%–75% of overall materiality: 75% for low-risk first-time-clean entities, 65% typical, 50% when fraud risk, prior errors, or weak controls exist.", ar: "حدد أهمية الأداء بنسبة 50%–75% من الأهمية الإجمالية: 75% للكيانات منخفضة المخاطر، 65% كوضع معتاد، 50% عند وجود مخاطر احتيال أو أخطاء سابقة أو ضوابط ضعيفة." } },
      { id: "materiality-4", ref: "ISA/ESA 450", text: { en: "Set the clearly-trivial threshold (CTT) — commonly 5% of overall materiality. Misstatements above CTT must be logged in the SAD even if not proposed for adjustment.", ar: "حدد حد الأهمية التافه — عادة 5% من الأهمية الإجمالية. الأخطاء التي تتجاوز هذا الحد يجب تسجيلها في ملخص الفروق حتى لو لم يُقترح تعديلها." } },
      { id: "materiality-5", ref: "ISA/ESA 320", text: { en: "Circulate materiality + PM + CTT to the whole team BEFORE fieldwork, and load them into the sampling plans (tolerable misstatement = PM for each account, allocated by intuition of risk, not arithmetic).", ar: "عمّم الأهمية الإجمالية وأهمية الأداء وحد الأهمية التافه على الفريق كله قبل العمل الميداني، وحمّلها في خطط العينات (الخطأ المسموح = أهمية الأداء لكل بند توزيعًا حسب المخاطر لا حسابًا آليًا)." } },
      { id: "materiality-6", ref: "ISA/ESA 320", text: { en: "Recompute materiality on the FINAL draft figures at completion. If it fell materially below the planning level, evaluate whether additional procedures are needed on the affected areas.", ar: "أعد حساب الأهمية النسبية على الأرقام النهائية عند الإقفال. إذا انخفضت جوهريًا عن مستوى التخطيط، قيّم الحاجة لإجراءات إضافية على البنود المتأثرة." } },
      { id: "materiality-7", ref: "ISA/ESA 450", text: { en: "At the end, evaluate uncorrected misstatements individually AND in aggregate against materiality, and document the conclusion in the SAD review note.", ar: "في النهاية قيّم الأخطاء غير المصححة فرديًا وإجماليًا مقابل الأهمية النسبية، ووثّق الاستنتاج في مذكرة مراجعة ملخص الفروق." } },
      { id: "materiality-8", ref: "ISA/ESA 320", text: { en: "Worked example — Revenue 100m EGP, PBT 12m EGP: OM = 5% × 12m = 600k; PM = 65% × 600k = 390k; CTT = 5% × 600k = 30k. Any uncorrected error above 30k goes on the SAD.", ar: "مثال عملي — إيرادات 100 مليون جنيه وربح نشاط 12 مليونًا: الأهمية الإجمالية = 5% × 12م = 600 ألف؛ أهمية الأداء = 65% × 600أ = 390 ألفًا؛ حد الأهمية التافه = 5% × 600أ = 30 ألفًا. أي خطأ غير مصحح يتجاوز 30 ألفًا يُسجل في ملخص الفروق." } },
    ],
    pitfalls: [
      { en: "Allocating PM to accounts as a strict arithmetic split — it is a planning tool, not a set of hard caps.", ar: "توزيع أهمية الأداء على البنود تقسيمًا حسابيًا صارمًا — فهي أداة تخطيط لا حدود قاطعة." },
      { en: "Forgetting that materiality for DISCLOSURES exists too — an unrecorded related-party relationship can be material by nature regardless of amount.", ar: "نسيان أن للإفصاحات أهمية أيضًا — علاقة أطراف ذات علاقة غير مفصح عنها قد تكون جوهرية بطبيعتها مهما كان المبلغ." },
    ],
    standards: ["ISA 320", "ISA 450", "ESA 320", "ESA 450"],
  },

  {
    id: "sampling",
    code: "AP-03",
    group: "methodology",
    icon: "layers",
    title: { en: "Audit Sampling", ar: "عينات المراجعة" },
    scope: {
      en: "How to size and select samples: attribute sampling for controls and Monetary Unit Sampling (MUS) for substantive details — with the calculators below.",
      ar: "كيفية تحديد حجم العينة واختيارها: عينات السمات لاختبارات الضوابط وعينات الوحدات النقدية للفحوص الجوهرية — مع الحاسبتين بالأسفل.",
    },
    objectives: [
      { en: "Make the sample big enough that the conclusion is statistically defensible.", ar: "جعل العينة بحجم يجعل الاستنتاج قابلًا للدفاع إحصائيًا." },
      { en: "Select samples without predictability or management influence.", ar: "اختيار العينات دون قابلية للتنبؤ أو تأثير من الإدارة." },
    ],
    risks: [
      { en: "Fixed samples (25 items every year) regardless of risk or population value.", ar: "عينات ثابتة (25 بندًا كل سنة) بغض النظر عن المخاطر أو قيمة المجتمع." },
      { en: "Haphazard selection that quietly becomes the folder management prepared.", ar: "اختيار عشوائي غير منضبط يتحول عمليًا إلى المجلد الذي أعدته الإدارة." },
    ],
    documents: [
      { en: "Population definition (what is IN and what is OUT, reconciliation to the trial balance)", ar: "تعريف المجتمع (ما يدخل فيه وما يستثنى، مع مطابقته بميزان المراجعة)" },
      { en: "Sample selection documentation (method, seed, random numbers, or MUS intervals)", ar: "توثيق اختيار العينة (الطريقة والبذرة والأرقام العشوائية أو فواصل MUS)" },
      { en: "Evaluation note: deviations/misstatements found, projected error, conclusion", ar: "مذكرة التقييم: الانحرافات أو الأخطاء المكتشفة والخطأ المسقط والاستنتاج" },
    ],
    procedures: [
      { id: "sampling-1", ref: "ISA/ESA 530", text: { en: "Define the population precisely (e.g. all sales invoices recorded 1 Jan – 31 Dec, reconciled to the ledger) before drawing anything.", ar: "عرّف المجتمع بدقة (مثلًا: كل فواتير البيع المسجلة من 1 يناير إلى 31 ديسمبر مع مطابقتها بالدفتر) قبل سحب أي عينة." } },
      { id: "sampling-2", ref: "ISA/ESA 530", text: { en: "Attribute sampling (controls): sample size = reliability factor ÷ tolerable deviation rate. Use the calculator — e.g. 10% risk, 0 expected errors, 5% tolerable rate → 2.31 ÷ 0.05 = 47 items.", ar: "عينات السمات (الضوابط): حجم العينة = معامل الموثوقية ÷ نسبة الانحراف المسموحة. استخدم الحاسبة — مثلًا: مخاطرة 10% وصفر أخطاء متوقعة ونسبة مسموحة 5% ← 2.31 ÷ 0.05 = 47 بندًا." } },
      { id: "sampling-3", ref: "ISA/ESA 530", text: { en: "MUS (substantive details): sample size = (reliability factor × population value) ÷ tolerable misstatement. Every pound/euro unit has equal selection probability, so bigger items surface naturally.", ar: "عينات الوحدات النقدية (الفحص التفصيلي): حجم العينة = (معامل الموثوقية × قيمة المجتمع) ÷ الخطأ المسموح. كل وحدة نقدية لها احتمال اختيار متساوٍ فتظهر البنود الكبيرة تلقائيًا." } },
      { id: "sampling-4", ref: "ISA/ESA 530", text: { en: "Select with systematic (fixed-interval) or random selection after a random start; use MUS intervals for value-weighted coverage. Never let the client pick the items.", ar: "اختر بالطريقة المنهجية (فواصل ثابتة) أو العشوائية بعد نقطة بداية عشوائية؛ واستخدم فواصل MUS لتغطية موزونة بالقيمة. لا تدع العميل يختار البنود أبدًا." } },
      { id: "sampling-5", ref: "ISA/ESA 530", text: { en: "Test every selected item. If a document is missing, treat it as a deviation/misstatement — do not quietly replace it.", ar: "اختبر كل بند مسحوب. إذا كان المستند مفقودًا فاعتبره انحرافًا أو خطأً — ولا تستبدله بصمت." } },
      { id: "sampling-6", ref: "ISA/ESA 530", text: { en: "Project errors: MUS tainting factor = item error % × interval; projected misstatement = Σ tainting across the sample. Compare to tolerable misstatement and conclude.", ar: "أسقط الأخطاء: معامل التلويث = نسبة خطأ البند × الفاصل؛ والخطأ المسقط = مجموع معاملات التلويث. قارنه بالخطأ المسموح واستنتج." } },
      { id: "sampling-7", ref: "ISA/ESA 530", text: { en: "When projected error approaches tolerable misstatement, respond: extend the sample, perform alternative procedures, or escalate to the manager/partner — never accept by inertia.", ar: "عندما يقترب الخطأ المسقط من الخطأ المسموح، استجب: وسّع العينة أو نفّذ إجراءات بديلة أو ارفع الأمر للمدير/الشريك — ولا تقبل بالجمود." } },
      { id: "sampling-8", ref: "ISA/ESA 530", text: { en: "Stratify heterogeneous populations (e.g. 100% test the top 20 customers by value, sample the rest) and document the strata boundaries.", ar: "قسّم المجتمعات غير المتجانسة (مثلًا: افحص 100% من أكبر 20 عميلًا بالقيمة واسحب عينة من الباقي) ووثّق حدود الطبقات." } },
    ],
    pitfalls: [
      { en: "Sample sizes borrowed from another engagement's methodology without the math behind them.", ar: "أحجام عينات منقولة من منهجية مهمة أخرى دون الأساس الحسابي." },
      { en: "Excluding zero and negative balances from AR/AP populations — they can still hide completeness errors.", ar: "استبعاد الأرصدة الصفرية والسالبة من مجتمعات الذمم — فقد تخفي أخطاء اكتمال." },
    ],
    standards: ["ISA 530", "ESA 530"],
  },

  {
    id: "completion",
    code: "AP-04",
    group: "methodology",
    icon: "check-circle",
    title: { en: "Completion, Review & Reporting", ar: "الإقفال والمراجعة وإصدار التقرير" },
    scope: {
      en: "The final gate before signing: analytical review, going concern, subsequent events, representations, and the disclosure checklist.",
      ar: "البوابة الأخيرة قبل التوقيع: المراجعة التحليلية، والاستمرارية، والأحداث اللاحقة، والإقرارات، وقائمة فحص الإفصاحات.",
    },
    objectives: [
      { en: "Close every open item and confirm the statements as a whole are coherent.", ar: "إغلاق كل بند معلق والتأكد من اتساق القوائم ككل." },
      { en: "Issue the right opinion supported by the file, not by optimism.", ar: "إصدار الرأي الصحيح مدعومًا بالملف لا بالتفاؤل." },
    ],
    assertions: ["PR"],
    risks: [
      { en: "Signing while contingencies, confirmations, or legal matters are still open.", ar: "التوقيع بينما لا تزال مخصصات أو تأكيدات أو أمور قانونية معلقة." },
      { en: "Disclosure checklist never completed — the most common review finding in SME audits.", ar: "عدم إكمال قائمة فحص الإفصاحات — أكثر ملاحظات المراجعة شيوعًا في مراجعات المنشآت الصغيرة والمتوسطة." },
    ],
    documents: [
      { en: "Final analytical review comparing current year to budget and prior year (ratios + absolute)", ar: "المراجعة التحليلية النهائية: مقارنة السنة الحالية بالموازنة والسنة السابقة (نسب ومبالغ)" },
      { en: "Going concern memo (cash-flow forecasts, facility renewals, covenant compliance)", ar: "مذكرة الاستمرارية (توقعات التدفق النقدي وتجديد التسهيلات والالتزام بالتعهدات)" },
      { en: "Management representation letter signed by CEO + CFO, dated the same day as the opinion", ar: "خطاب إقرار الإدارة موقعًا من الرئيس التنفيذي والمدير المالي بتاريخ الرأي نفسه" },
      { en: "Disclosure checklist (IFRS or EAS) covering every standard applicable to the entity", ar: "قائمة فحص الإفصاحات (IFRS أو المعايير المصرية) تغطي كل معيار ينطبق على المنشأة" },
    ],
    procedures: [
      { id: "completion-1", ref: "ISA/ESA 520", text: { en: "Perform final analytical procedures on the complete draft statements; investigate every movement outside expectations and document the explanation.", ar: "تنفيذ الإجراءات التحليلية النهائية على مسودة القوائم الكاملة؛ والتحقيق في كل حركة خارج المتوقع وتوثيق التفسير." } },
      { id: "completion-2", ref: "ISA/ESA 570", text: { en: "Evaluate going concern: review cash-flow forecasts for at least 12 months from the reporting date, facility letters, and management's plans; assess events and conditions individually and combined.", ar: "تقييم الاستمرارية: فحص توقعات التدفق النقدي لمدة 12 شهرًا على الأقل من تاريخ التقرير، وخطابات التسهيلات، وخطط الإدارة؛ وتقييم الأحداث والظروف فرديًا ومجتمعة." } },
      { id: "completion-3", ref: "ISA/ESA 560", text: { en: "Perform subsequent-events procedures up to the opinion date: board minutes after year-end, post-close sales returns, new borrowings, litigation updates, and read the latest management accounts.", ar: "تنفيذ إجراءات الأحداث اللاحقة حتى تاريخ الرأي: محاضر مجلس الإدارة بعد نهاية السنة، ومرتجعات البيع، والاقتراضات الجديدة، وتحديثات التقاضي، وقراءة أحدث القوائم الإدارية." } },
      { id: "completion-4", ref: "ISA/ESA 570", text: { en: "If a material uncertainty exists, verify the disclosure wording and draft the 'Material Uncertainty Related to Going Concern' paragraph — do not silently assume support will arrive.", ar: "إذا وُجد عدم يقين جوهري، تحقق من صياغة الإفصاح وجهّز فقرة عدم اليقين المتعلق بالاستمرارية — ولا تفترض صمتًا أن الدعم سيصل." } },
      { id: "completion-5", ref: "ISA/ESA 501", text: { en: "Send/update legal letters to all counsel and evaluate replies for provisions and contingent liabilities (see the Provisions section).", ar: "إرسال أو تحديث خطابات المحامين لكل المستشارين القانونيين وتقييم الردود بخصوص المخصصات والالتزامات المحتملة (راجع قسم المخصصات)." } },
      { id: "completion-6", ref: "ISA/ESA 580", text: { en: "Obtain the signed management representation letter covering unrecorded liabilities, fraud, related parties, completeness of records, and intentions affecting the statements.", ar: "الحصول على خطاب إقرار الإدارة موقعًا ويغطي الالتزامات غير المسجلة والاحتيال والأطراف ذات العلاقة واكتمال السجلات والنوايا المؤثرة على القوائم." } },
      { id: "completion-7", ref: "ISA/ESA 450", text: { en: "Finalize the SAD: propose adjustments for misstatements above materiality, evaluate the aggregate of uncorrected items, and get partner sign-off on the conclusion.", ar: "إنهاء ملخص فروق المراجعة: اقتراح تعديلات للأخطاء التي تتجاوز الأهمية النسبية، وتقييم مجموع غير المصحح، واعتماد الشريك على الاستنتاج." } },
      { id: "completion-8", ref: "ISA/ESA 700", text: { en: "Complete the disclosure checklist, draft the auditor's report with the right opinion and key audit matters (listed entities), and ensure every figure ties to the final statements.", ar: "إكمال قائمة فحص الإفصاحات، وصياغة تقرير المراجع بالرأي المناسب والمسائل الجوهرية للمراجعة (للمقيدات)، والتأكد من مطابقة كل رقم للقوائم النهائية." } },
      { id: "completion-9", ref: "ISQM/ESQM 1", text: { en: "Partner and manager reviews documented; engagement quality review (EQR) for listed clients completed before the opinion is released.", ar: "توثيق مراجعات الشريك والمدير؛ وإتمام مراجعة جودة المهمة للعملاء المقيدة قبل إصدار الرأي." } },
    ],
    pitfalls: [
      { en: "Representation letter dated earlier than the audit completion date of fieldwork.", ar: "خطاب الإقرار بتاريخ أبكر من تاريخ انتهاء العمل الميداني." },
      { en: "Subsequent events tested only once, weeks before signing, with nothing after that date.", ar: "اختبار الأحداث اللاحقة مرة واحدة قبل التوقيع بأسابيع دون أي شيء بعد ذلك التاريخ." },
    ],
    standards: ["ISA 520", "ISA 560", "ISA 570", "ISA 580", "ISA 700", "ISA 720", "ESQM 1"],
  },
]
