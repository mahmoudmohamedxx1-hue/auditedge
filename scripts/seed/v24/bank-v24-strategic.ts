/** v24 seed data — ACCA past papers for the rest of the syllabus, part 3
 *  (Strategic Professional): SBL — Strategic Business Leader, 24 questions.
 *
 *  SBL is the scenario-led essentials paper: leadership, governance, risk,
 *  technology, finance in strategy, professional skills. These adapted
 *  objective-test items follow its one-firm scenario style. */

import type { PaperSeedQ } from "./bank-v24-knowledge"

/* ==================== SBL Strategic Business Leader — 24 Q ==================== */

export const SBL_PAPER: PaperSeedQ[] = [
  {
    code: "SBL-P1-01",
    stem: "A CEO asks for a report recommending a change of ERP supplier. In SBL professional-skills terms, the report should open with:",
    stemAr: "رئيس تنفيذي يطلب تقريرًا يوصي بتغيير مورد نظام تخطيط الموارد. بوصفه مهارة مهنية في SBL، ينبغي أن يفتتح التقرير بـ:",
    options: [
      "The conclusion and recommendation, then supporting analysis",
      "A full history of ERP systems since the 1990s",
      "The supplier's marketing brochure",
      "An apology for the length of the report",
    ],
    optionsAr: [
      "الخلاصة والتوصية ثم التحليل المؤيد",
      "تاريخ كامل لأنظمة ERP منذ التسعينيات",
      "الكتيب التسويقي للمورد",
      "اعتذار عن طول التقرير",
    ],
    answerIndex: 0,
    explanation:
      "Business communication for decision-makers is top-down: answer first (executive summary + recommendation), then the analysis that justifies it. History lessons and vendor copy are noise.",
    explanationAr:
      "التواصل التجاري لصناع القرار من الأعلى للأسفل: الجواب أولًا (ملخص وتوصية)، ثم التحليل المسوّغ. والدروس التاريخية ونشرة المورد ضجيج.",
    standardTag: "Professional skills — communication",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-02",
    stem: "A board is considering a big data analytics investment. Which benefit is MOST defensible?",
    stemAr: "مجلس يدرس استثمارًا في تحليلات البيانات الضخمة. أي منفعة أكثر قابلية للدفاع؟",
    options: [
      "Better decision quality from whole-population analytics on customer behaviour",
      "Guaranteed 20% profit growth",
      "Elimination of all audit fees",
      "Automatic compliance with every regulation",
    ],
    optionsAr: [
      "جودة قرارات أفضل عبر تحليلات المجتمع الكامل لسلوك العملاء",
      "نمو أرباح مضمون 20%",
      "إلغاء كل أتعاب المراجعة",
      "امتثال تلقائي لكل لائحة",
    ],
    answerIndex: 0,
    explanation:
      "Defensible benefits of big data: evidence-rich decisions from analysing entire populations (customers, transactions). Guarantees of profit, zero fees or automatic compliance are advocacy, not analysis.",
    explanationAr:
      "المنافع القابلة للدفاع: قرارات غنية بالأدلة من تحليل المجتمعات كاملة (العملاء والمعاملات). أما ضمانات الأرباح وصفر الأتعاب والامتثال التلقائي فدعاية لا تحليل.",
    standardTag: "Technology & data",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-03",
    stem: "Under a combined assurance model, the THIRD line of defence is:",
    stemAr: "في نموذج التأكيد المركب، خط الدفاع الثالث هو:",
    options: [
      "Internal audit — independent assurance to the board on risk management and control",
      "Operational management owning risks",
      "Compliance and risk functions overseeing policies",
      "The external auditor signing the accounts",
    ],
    optionsAr: [
      "المراجعة الداخلية — تأكيد مستقل للمجلس عن إدارة المخاطر والرقابة",
      "الإدارة التشغيلية المالكة للمخاطر",
      "وظائف الالتزام والمخاطر المشرفة على السياسات",
      "المراجع الخارجي الموقع على الحسابات",
    ],
    answerIndex: 0,
    explanation:
      "Three lines: (1) management owns and manages risk, (2) oversight functions (risk/compliance) support and monitor, (3) internal audit independently assures the board. External audit is the fourth line in combined assurance.",
    explanationAr:
      "الخطوط الثلاثة: (1) الإدارة تملك المخاطر وتديرها، (2) وظائف الإشراف (المخاطر/الالتزام) تدعم وتراقب، (3) المراجعة الداخلية تؤكد للمجلس باستقلال. والخارجي هو الخط الرابع في التأكيد المركب.",
    standardTag: "Governance — assurance",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-04",
    stem: "A CFO is offered free luxury hospitality by a bidder during a live tender. Under the fundamental principles, the BEST course is to:",
    stemAr: "مدير مالي يُعرض عليه ضيافة فاخرة مجانية من متقدم بعطاء أثناء مناقصة جارية. وفق المبادئ الأساسية، أفضل تصرف:",
    options: [
      "Decline and disclose the offer to the board/tender committee so the process stays impartial",
      "Accept — hospitality is part of local culture",
      "Accept but tell nobody",
      "Accept and reciprocate with contract favours",
    ],
    optionsAr: [
      "الرفض والإفصاح عن العرض للمجلس/لجنة المناقصة ليبقى التنافس نزيهًا",
      "القبول — الضيافة من الثقافة المحلية",
      "القبول دون إخبار أحد",
      "القبول ومقابلة العرض بمحاباة تعاقدية",
    ],
    answerIndex: 0,
    explanation:
      "Integrity and objectivity are at stake in a live tender: inducements that a reasonable observer would see as influence must be declined and disclosed — self-review, familiarity and conflict threats all loom otherwise.",
    explanationAr:
      "النزاهة والموضوعية على المحك في مناقصة جارية: الإغراءات التي يراها مراقب محايد مؤثرة تُرفض وتُفشى — وإلا قامت تهديدات التحقق الذاتي والأُلفة وتضارب المصالح.",
    standardTag: "Ethics",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-05",
    stem: "Which pairing of risk-response strategy and example is correct?",
    stemAr: "أي اقتران بين استجابة المخاطر ومثالها صحيح؟",
    options: [
      "Risk transfer — buying product-liability insurance",
      "Risk reduction — cancelling the product launch entirely",
      "Risk avoidance — installing fraud-detection software",
      "Risk acceptance — hedging foreign currency exposure",
    ],
    optionsAr: [
      "نقل المخاطر — شراء تأمين المسؤولية عن المنتج",
      "تقليل المخاطر — إلغاء إطلاق المنتج كليًا",
      "تجنب المخاطر — تركيب برمجية كشف الاحتيال",
      "قبول المخاطر — التحوط من مخاطر العملة",
    ],
    answerIndex: 0,
    explanation:
      "Insurance transfers the financial consequence; cancelling the launch is avoidance; detection software reduces likelihood/impact; hedging transfers too — while doing nothing and retaining the exposure is acceptance.",
    explanationAr:
      "التأمين ينقل العاقبة المالية؛ وإلغاء الإطلاق تجنّب؛ والبرمجية تقلل الاحتمال/الأثر؛ والتحوط نقل أيضًا — أما ترك الفائض وقبوله فهو القبول.",
    standardTag: "Risk management",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-06",
    stem: "A key performance question for a board dashboard is 'Are we maintaining our licence to operate?' The BEST supporting measure is:",
    stemAr: "سؤال أداء رئيسي لشاشة المجلس: «هل نحافظ على رخصة عملنا؟». أفضل مقياس مؤيد:",
    options: [
      "Composite regulatory-compliance and stakeholder-trust indicators",
      "Revenue growth versus last year",
      "Office occupancy rates",
      "Number of meetings held",
    ],
    optionsAr: [
      "مؤشرات مركبة للامتثال التنظيمي وثقة أصحاب المصلحة",
      "نمو الإيرادات عن العام الماضي",
      "معدلات إشغال المكاتب",
      "عدد الاجتماعات المنعقدة",
    ],
    answerIndex: 0,
    explanation:
      "Licence to operate is a stakeholder-and-regulation construct: breaches, sanctions, trust indices track it. Growth or meeting counts say nothing about the right to keep operating.",
    explanationAr:
      "رخصة العمل بناء تنظيمي-مصلحي: تتبعها المخالفات والجزاءات ومؤشرات الثقة. أما النمو أو عدد الاجتماعات فلا يقول شيئًا عن حق مواصلة العمل.",
    standardTag: "Performance — board level",
    area: "ethics",
    difficulty: 2,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-07",
    stem: "A firm using Porter's generic strategies is stuck between cost leadership and differentiation. This position risks:",
    stemAr: "منشأة على استراتيجيات بورتر العامة عالقة بين خفض الكلفة والتمايز. هذا الموقع يخاطر بـ:",
    options: [
      "Being 'stuck in the middle' — outcosted by leaders and outdifferentiated by specialists",
      "Excessive profit",
      "Automatic monopoly",
      "Reduced tax liability",
    ],
    optionsAr: [
      "«العالقية في الوسط» — تُكلفها القيادات الكلفية ويميزها المتخصصون",
      "أرباح مفرطة",
      "احتكار تلقائي",
      "انخفاض العبء الضريبي",
    ],
    answerIndex: 0,
    explanation:
      "Porter's warning: a strategy that is neither clearly cheapest nor clearly distinct loses to pure players on both fronts — the classic 'stuck in the middle' failure.",
    explanationAr:
      "تحذير بورتر: الاستراتيجية التي ليست الأرخص بوضوح ولا المميزة بوضوح تخسر أمام الخالصين في الجبهتين — فشل «العالقية في الوسط» الكلاسيكي.",
    standardTag: "Strategy",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-08",
    stem: "An SOE-style company must balance shareholder value with a public-service mandate. The MOST appropriate board committee addition is:",
    stemAr: "شركة على نمط قطاع الأعمال العام توازن قيمة المساهمين مع تكليف خدمة عامة. الإضافة الأنسب للجان المجلس:",
    options: [
      "A stakeholder/public-interest committee overseeing the mandate alongside audit, risk and nomination committees",
      "A marketing committee",
      "An executive-only strategy committee with no non-executives",
      "No committees — the chair decides alone",
    ],
    optionsAr: [
      "لجنة أصحاب مصلحة/مصلحة عامة تشرف على التكليف بجانب لجان المراجعة والمخاطر والترشيحات",
      "لجنة تسويق",
      "لجنة استراتيجية تنفيذية بلا غير تنفيذيين",
      "لا لجان — الرئيس يقرر منفردًا",
    ],
    answerIndex: 0,
    explanation:
      "Public-mandate entities keep the standard committee architecture (audit, risk, nomination, remuneration) and add a stakeholder/public-interest lens so the mandate is governed, not assumed.",
    explanationAr:
      "الكيانات ذات التكليف العام تحتفظ بالبنية اللجانية القياسية (مراجعة، مخاطر، ترشيحات، مكافآت) وتضيف منظور أصحاب المصلحة/المصلحة العامة لتحكم التكليف لا أن تفترضه.",
    standardTag: "Governance — committees",
    area: "ethics",
    difficulty: 2,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-09",
    stem: "In Ansoff's matrix, selling an EXISTING product in a NEW geographic market is:",
    stemAr: "في مصفوفة أنسوف، بيع منتج قائم في سوق جغرافية جديدة هو:",
    options: ["Market development", "Market penetration", "Product development", "Diversification"],
    optionsAr: ["تطوير الأسواق", "اختراق السوق", "تطوير المنتجات", "التنويع"],
    answerIndex: 0,
    explanation:
      "Existing product + new market = market development. Penetration is existing/existing; product development is new product/existing market; diversification is new/new — the riskiest.",
    explanationAr:
      "منتج قائم + سوق جديدة = تطوير الأسواق. والاختراق قائم/قائم؛ وتطوير المنتجات جديد/قائم؛ والتنويع جديد/جديد — وهو الأخطر.",
    standardTag: "Strategy",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-10",
    stem: "A data-governance framework's FIRST milestone should be:",
    stemAr: "أول معلم في إطار حوكمة البيانات ينبغي أن يكون:",
    options: [
      "A data inventory and classification by sensitivity, with owners assigned",
      "Purchasing an AI platform",
      "Outsourcing the entire IT department",
      "Deleting all legacy data",
    ],
    optionsAr: [
      "جرد البيانات وتصنيفها بالحساسية مع تعيين مالكين",
      "شراء منصة ذكاء اصطناعي",
      "إسناد إدارة تقنية المعلومات كلها للخارج",
      "حذف كل البيانات القديمة",
    ],
    answerIndex: 0,
    explanation:
      "You cannot protect or exploit what you have not mapped: inventory → classify → assign ownership — then controls, quality rules and analytics follow. Tools come after governance, not before.",
    explanationAr:
      "لا يمكن حماية ما لم يُرسم أو استثماره: جرد ← تصنيف ← ملكية — ثم الضوابط وقواعد الجودة والتحليلات. فالأدوات بعد الحوكمة لا قبلها.",
    standardTag: "Technology & data",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-11",
    stem: "A quality-driven differentiation strategy would rely MOST on which value-chain investment?",
    stemAr: "استراتيجية تمايز مدفوعة بالجودة تعتمد أكثر على أي استثمار في سلسلة القيمة؟",
    options: [
      "Operations: zero-defect processes and supplier quality partnerships",
      "Outbound logistics: cheaper warehousing",
      "Procurement: cheapest possible components",
      "HR: reducing training to cut cost",
    ],
    optionsAr: [
      "العمليات: عمليات بلا عيوب وشراكات جودة مع الموردين",
      "اللوجستيات الخارجة: مستودعات أرخص",
      "المشتريات: أرخص المكونات الممكنة",
      "الموارد البشرية: تقليص التدريب لخفض الكلفة",
    ],
    answerIndex: 0,
    explanation:
      "Differentiation through quality is built in operations and sourced through quality-driven procurement; cheap components and cut training undermine the very attribute being sold.",
    explanationAr:
      "التمايز بالجودة يُبنى في العمليات ويُستدرج بمشتريات تقودها الجودة؛ والمكونات الرخيصة وتقليص التدريب يقوضان السمة المبيعة ذاتها.",
    standardTag: "Strategy",
    area: "ethics",
    difficulty: 2,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-12",
    stem: "A project's NPV is positive but small, and its cash flows are highly uncertain. The BEST board decision is:",
    stemAr: "مشروع بقيمة حالية صافية موجبة لكن صغيرة وتدفقاته النقدية عالية اللايقين. أفضل قرار للمجلس:",
    options: [
      "Delay for a real-options review — the option to wait has value when uncertainty is high and NPV is marginal",
      "Proceed immediately — positive NPV is the only test",
      "Reject permanently — uncertainty always kills projects",
      "Double the discount rate and proceed anyway",
    ],
    optionsAr: [
      "التأجيل لمراجعة الخيارات الحقيقية — فقيمة الانتظار تبرز عند اللايقين العالي والقيمة الصافية الهامشية",
      "المضي فورًا — فالقيمة الصافية الموجبة هي الاختبار الوحيد",
      "الرفض نهائيًا — اللايقين يقتل المشروعات دائمًا",
      "مضاعفة معدل الخصم والمضي رغمًا",
    ],
    answerIndex: 0,
    explanation:
      "Real-options thinking: when NPV is marginal and volatility high, waiting for information has quantifiable value; committing now destroys the option. Pure NPV rules ignore managerial flexibility.",
    explanationAr:
      "تفكير الخيارات الحقيقية: عند هامشية القيمة الصافية وارتفاع التقلب يكون للانتظار قيمة قابلة للقياس؛ والالتزام الآن يتلف الخيار. وقاعدة القيمة الصافية المجردة تهمل مرونة الإدارة.",
    standardTag: "Finance in strategy",
    area: "ethics",
    difficulty: 3,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-13",
    stem: "Management reports show 40 pages of variance tables with no commentary. The professional-skills weakness is:",
    stemAr: "تقارير إدارة بأربعين صفحة من جداول الانحرافات بلا تعليق. الخلل المهني هنا:",
    options: [
      "Poor communication — information is presented but not evaluated and prioritised for the audience",
      "Excessive brevity",
      "Too much evaluation",
      "An IT system fault",
    ],
    optionsAr: [
      "ضعف التواصل — معلومات تُعرض دون تقييم أو ترتيب أولويات للجمهور",
      "إفراط في الإيجاز",
      "إفراط في التقييم",
      "عطل في نظام المعلومات",
    ],
    answerIndex: 0,
    explanation:
      "SBL's commercial acumen tests evaluation and communication: decision-makers need what matters, why, and what to do — not raw data dumps.",
    explanationAr:
      "يمتحن SBL الحس التجاري: صناع القرار يحتاجون ما يهم ولماذا وما العمل — لا مطبوعات بيانات خام.",
    standardTag: "Professional skills — evaluation",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-14",
    stem: "A cyber-security incident has just leaked customer data. The FIRST governance priority is:",
    stemAr: "حادث أمن سيبراني سرّب للتو بيانات العملاء. أولوية الحوكمة الأولى:",
    options: [
      "Contain the breach and notify affected parties and regulators within legal deadlines",
      "Publish the annual report early",
      "Find and punish the intern",
      "Wait for the external audit to mention it",
    ],
    optionsAr: [
      "احتواء الاختراق وإخطار المتأثرين والجهات التنظيمية ضمن المدد القانونية",
      "نشر التقرير السنوي مبكرًا",
      "إيجاد المتدرب ومعاقبته",
      "انتظار أن يذكره المراجع الخارجي",
    ],
    answerIndex: 0,
    explanation:
      "Incident-response governance: contain, assess, notify — regulators under data-protection law and affected customers — then remediate and report lessons to the board.",
    explanationAr:
      "حوكمة الاستجابة للحوادث: احتواء وتقييم وإخطار — للجهات التنظيمية بحماية البيانات وللعملاء المتأثرين — ثم المعالجة ورفع الدروس للمجلس.",
    standardTag: "Risk — cyber",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-15",
    stem: "A CEO dominates board discussions and directors rarely dissent. The strongest single remedy is:",
    stemAr: "رئيس تنفيذي يهيمن على نقاشات المجلس ونادرًا ما يخالف المديرون. أقوى علاج منفرد:",
    options: [
      "Appoint an independent chair separate from the CEO with a culture of constructive challenge",
      "More board meetings",
      "Larger annual reports",
      "Higher director fees",
    ],
    optionsAr: [
      "تعيين رئيس مستقل منفصل عن الرئيس التنفيذي مع ثقافة مساءلة بنّاءة",
      "مزيد من اجتماعات المجلس",
      "تقارير سنوية أضخم",
      "أتعاب مديرين أعلى",
    ],
    answerIndex: 0,
    explanation:
      "Groupthink's structural antidote is separating chair/CEO and empowering independent challenge — the governance reform with the highest leverage over board quality.",
    explanationAr:
      "الترياق الهيكلي لتفكير الجماعة هو فصل رئاسة المجلس عن التنفيذية وتمكين المساءلة المستقلة — وهو الإصلاح الحوكمي الأعلى أثرًا في جودة المجلس.",
    standardTag: "Governance — board effectiveness",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-16",
    stem: "In evaluating a target company under due diligence, a PESTEL analysis primarily informs:",
    stemAr: "في تقييم شركة مستهدفة ضمن العناية الواجبة، يخدم تحليل PESTEL أساسًا:",
    options: [
      "The macro-environment's opportunities and threats surrounding the deal",
      "The target's internal strengths and weaknesses",
      "The purchase price arithmetic",
      "The auditor's independence",
    ],
    optionsAr: [
      "فرص وتهديدات البيئة الكلية المحيطة بالصفقة",
      "قوة الهدف الداخلية وضعفه",
      "حساب سعر الشراء",
      "استقلال المراجع",
    ],
    answerIndex: 0,
    explanation:
      "PESTEL scans the external macro environment (political, economic, social, technological, environmental, legal); internal capability is SWOT's S/W side. Price follows from both.",
    explanationAr:
      "PESTEL يمسح البيئة الكلية الخارجية (سياسية، اقتصادية، اجتماعية، تقنية، بيئية، قانونية)؛ والقدرة الداخلية في جانب القوة/الضعف من SWOT. والسعر يتبع الاثنين.",
    standardTag: "Strategy — analysis",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-17",
    stem: "A social-enterprise measures impact per dollar invested. In the TBL framework this is the:",
    stemAr: "مشروع اجتماعي يقيس الأثر لكل دولار مستثمر. في إطار الخط الثلاثي هذا يمثل:",
    options: [
      "Blending of economic and social bottom lines",
      "Environmental bottom line only",
      "Legal bottom line",
      "Governance bottom line",
    ],
    optionsAr: [
      "مزج الخطين الاقتصادي والاجتماعي",
      "الخط البيئي فقط",
      "الخط القانوني",
      "خط الحوكمة",
    ],
    answerIndex: 0,
    explanation:
      "Triple bottom line = economic, social, environmental. Impact-per-dollar is exactly where economic and social performance meet.",
    explanationAr:
      "الخط الثلاثي = اقتصادي واجتماعي وبيئي. والأثر لكل دولار هو ملتقى الأداء الاقتصادي بالاجتماعي.",
    standardTag: "Performance — sustainability",
    area: "ethics",
    difficulty: 2,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-18",
    stem: "A finance team uses scenario planning for a five-year strategy. The MAIN advantage over single-point forecasting is:",
    stemAr: "فريق مالي يستخدم تخطيط السيناريوهات لاستراتيجية خمسية. ميزته الرئيسية على التوقع النقطي الواحد:",
    options: [
      "It prepares the board for multiple plausible futures and pre-agreed responses",
      "It guarantees the forecast will be correct",
      "It removes all uncertainty",
      "It reduces the work of the finance team",
    ],
    optionsAr: [
      "يجهز المجلس لعدة مستقبلات معقولة واستجابات متفقًا عليها سلفًا",
      "يضمن صحة التوقع",
      "يزيل كل اللايقين",
      "يقلل عمل الفريق المالي",
    ],
    answerIndex: 0,
    explanation:
      "Scenarios build adaptive capacity: several internally-consistent futures with trigger points and response plans — versus a single forecast that breaks when the world moves.",
    explanationAr:
      "السيناريوهات تبني قدرة التكيف: عدة مستقبلات متسقة داخليًا بنقاط إطلاق وخطط استجابة — مقابل توقع وحيد ينكسر حين يتحرك العالم.",
    standardTag: "Strategy — planning",
    area: "ethics",
    difficulty: 2,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-19",
    stem: "A whistle-blower reports fraud through the confidential channel. The audit committee's FIRST step is to:",
    stemAr: "مبلغ يورد احتيالًا عبر القناة السرية. أول خطوة للجنة المراجعة:",
    options: [
      "Protect the reporter's identity and commission an independent investigation",
      "Confront the suspect immediately",
      "Publish the allegation on the intranet",
      "Ignore it unless losses exceed materiality",
    ],
    optionsAr: [
      "حماية هوية المبلغ وتكليف تحقيق مستقل",
      "مواجهة المشتبه فورًا",
      "نشر الواقعة على الشبكة الداخلية",
      "تجاهلها ما لم تتجاوز الخسائر الأهمية",
    ],
    answerIndex: 0,
    explanation:
      "Speak-up governance: confidentiality first (retaliation kills the channel), then a competent independent investigation with natural justice for the accused.",
    explanationAr:
      "حوكمة الإبلاغ: السرية أولًا (فالانتقام يقتل القناة)، ثم تحقيق مستقل كفء مع إنصاف للمتهم.",
    standardTag: "Governance — ethics",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-20",
    stem: "Which pricing approach best supports a harvest strategy in a declining market?",
    stemAr: "أي نهج تسعير يدعم أفضل استراتيجية الحصاد في سوق متراجعة؟",
    options: [
      "Maintain or raise prices while cutting costs and investment — maximising short-term cash",
      "Penetration pricing to buy share",
      "Heavy investment in new capacity",
      "Free distribution",
    ],
    optionsAr: [
      "الحفاظ على الأسعار أو رفعها مع خفض الكلفة والاستثمار — تعظيم النقد قصير الأجل",
      "تسعير الاختراق لشراء حصة",
      "استثمار كثيف في طاقة جديدة",
      "توزيع مجاني",
    ],
    answerIndex: 0,
    explanation:
      "Harvest = milk the decline: defend price, strip cost, extract cash. Penetration and capacity investment belong to growth strategies — the opposite lifecycle stance.",
    explanationAr:
      "الحصاد = حلابة التراجع: الدفاع عن السعر وقشر الكلفة واستخلاص النقد. أما الاختراق والاستثمار فلاستراتيجيات النمو — الموقف المعاكس في دورة الحياة.",
    standardTag: "Strategy — lifecycle",
    area: "ethics",
    difficulty: 2,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-21",
    stem: "A remote-work policy is being designed. Which control MOST directly mitigates data-leakage risk?",
    stemAr: "سياسة عمل عن بُعد قيد التصميم. أي ضابط يخفف مباشرةً خطر تسرب البيانات؟",
    options: [
      "Zero-trust access with multi-factor authentication and device management",
      "A policy document alone",
      "Occasional office attendance",
      "Verbal warnings",
    ],
    optionsAr: [
      "وصول انعدام الثقة بمصادقة متعددة العوامل وإدارة أجهزة",
      "وثيقة سياسة وحدها",
      "حضور مكتبي متقطع",
      "تنبيهات شفهية",
    ],
    answerIndex: 0,
    explanation:
      "Technical zero-trust controls (MFA, managed devices, least privilege) address the actual attack surface of remote access; documents and warnings are supporting, not mitigating.",
    explanationAr:
      "ضوابط انعدام الثقة التقنية (مصادقة متعددة، أجهزة مُدارة، أقل امتياز) تعالج سطح الهجوم الفعلي للعمل البعيد؛ والوثائق والتنبيهات مساندة لا مخففة.",
    standardTag: "Risk — technology",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-22",
    stem: "Under stakeholder theory, a decision tool that maps power AND interest (Mendelow) would class regulators as:",
    stemAr: "وفق نظرية أصحاب المصلحة، أداة ماندلو (السلطة × الاهتمام) تصنف الجهات التنظيمية:",
    options: [
      "High power, high interest — key players to engage closely",
      "Low power, low interest — ignore",
      "High power, low interest — merely keep satisfied",
      "Low power, high interest — just keep informed",
    ],
    optionsAr: [
      "سلطة عالية واهتمام عالٍ — فاعلون رئيسيون يُنخرطون وثيقيًا",
      "سلطة منخفضة واهتمام منخفض — يُهملون",
      "سلطة عالية واهتمام منخفض — يكفى إرضاؤهم",
      "سلطة منخفضة واهتمام عالٍ — يكفى إطلاعهم",
    ],
    answerIndex: 0,
    explanation:
      "Regulators hold coercive power (licences, fines) and intense interest in compliance — the classic key-player quadrant demanding proactive engagement, not minimal management.",
    explanationAr:
      "للجهات التنظيمية سلطة قسرية (تراخيص وغرامات) واهتمام كثيف بالامتثال — الربع الفاعل الرئيسي الكلاسيكي الذي يستلزم انخراطًا استباقيًا لا إدارة دنيا.",
    standardTag: "Stakeholders",
    area: "ethics",
    difficulty: 2,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-23",
    stem: "A marketing director proposes inflating a forecast to win board approval. The finance director should FIRST:",
    stemAr: "مدير تسويق يقترح تضخيم توقع لكسب موافقة المجلس. ينبغي للمدير المالي أولًا:",
    options: [
      "Refuse to present misleading figures and escalate through professional channels (CFO/audit committee)",
      "Adjust the numbers quietly",
      "Present both versions without comment",
      "Resign on the spot",
    ],
    optionsAr: [
      "الرفض بعرض أرقام مضللة والتصعيد عبر القنوات المهنية (المدير المالي/لجنة المراجعة)",
      "تعديل الأرقام بهدوء",
      "عرض النسختين دون تعليق",
      "الاستقالة في الحال",
    ],
    answerIndex: 0,
    explanation:
      "Integrity: never present information you believe misleading. Escalate internally first — resignation is a last resort; quiet adjustment is complicity.",
    explanationAr:
      "النزاهة: لا تعرض أبدًا معلومات تعتقدها مضللة. وصعّد داخليًا أولًا — فالاستقالة ملاذ أخير؛ والتعديل الخفي تواطؤ.",
    standardTag: "Ethics",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
  {
    code: "SBL-P1-24",
    stem: "Which sequence reflects a disciplined strategic-management process?",
    stemAr: "أي تسلسل يجسد منهجية إدارة استراتيجية منضبطة؟",
    options: [
      "Analyse (position) → formulate (choice) → implement → evaluate/control",
      "Implement → evaluate → analyse → exit",
      "Formulate → celebrate → repeat",
      "Analyse → copy the market leader → stop",
    ],
    optionsAr: [
      "تحليل (الموقع) ← صياغة (الاختيار) ← تنفيذ ← تقييم/رقابة",
      "تنفيذ ← تقييم ← تحليل ← خروج",
      "صياغة ← احتفال ← تكرار",
      "تحليل ← تقليد قائد السوق ← توقف",
    ],
    answerIndex: 0,
    explanation:
      "The classic strategic-management cycle: strategic analysis feeds choice, choice feeds implementation, and evaluation feeds the next analysis loop — a continuous wheel, not a one-off event.",
    explanationAr:
      "دورة الإدارة الاستراتيجية الكلاسيكية: التحليل يغذي الاختيار، والاختيار يغذي التنفيذ، والتقييم يغذي التحليل التالي — عجلة متصلة لا حدث لمرة.",
    standardTag: "Strategy — process",
    area: "ethics",
    difficulty: 1,
    source: "ACCA SBL past paper (adapted)",
  },
]

/* ==================== AFM (P4) Advanced Financial Management — 18 Q ==================== */

export const AFM_PAPER: PaperSeedQ[] = [
  {
    code: "AFM-P1-01",
    stem: "A project's NPV equals zero at discount rate 14.6%. This rate is the project's:",
    stemAr: "مشروع تبلغ قيمته الحالية الصافية صفرًا عند معدل خصم 14.6%. هذا المعدل هو:",
    options: ["Internal rate of return", "Cost of equity", "Accounting rate of return", "Payback rate"],
    optionsAr: ["معدل العائد الداخلي", "كلفة حقوق الملكية", "معدل العائد المحاسبي", "معدل الاسترداد"],
    answerIndex: 0,
    explanation:
      "IRR is the discount rate at which NPV = 0 — the project's break-even financing cost. ARR is a profit-based measure; payback ignores discounting entirely.",
    explanationAr:
      "معدل العائد الداخلي هو معدل الخصم الذي يصفّر القيمة الصافية — نقطة تعادل المشروع تمويليًا. والمحاسبي مقياس ربحي؛ والاسترداد يهمل الخصم أصلًا.",
    standardTag: "Investment appraisal",
    area: "accounting",
    difficulty: 1,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-02",
    stem: "A firm doubles its debt while keeping business risk constant. Under M&M (with tax), the market value of the firm will:",
    stemAr: "شركة تضاعف دينها مع ثبات مخاطر النشاط. وفق موديلياني وميلر (مع الضرائب) ستتخذ القيمة السوقية للشركة:",
    options: ["Rise due to the tax shield on the extra debt", "Fall because debt is risky", "Stay unchanged", "Rise by exactly the amount of equity"],
    optionsAr: ["ارتفاعًا بدرع ضريبة الدين الإضافي", "انخفاضًا لأن الدين خطر", "ثباتًا دون تغير", "ارتفاعًا بمقدار حقوق الملكية بالضبط"],
    answerIndex: 0,
    explanation:
      "M&M with corporate tax: V_L = V_U + tB — value rises by the tax shield. (Without tax, value is unchanged; financial distress is the real-world counterweight.)",
    explanationAr:
      "م وم مع ضرائب الشركات: قيمة المديونية = قيمة غير الممولة + (الضريبة × الدين) — ترتفع القيمة بالدرع الضريبي. (وبلا ضريبة تتغير القيمة؛ والضائقة المالية هي المقابل الواقعي.)",
    standardTag: "Capital structure",
    area: "accounting",
    difficulty: 2,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-03",
    stem: "Risk-free rate 3%, market return 9%, beta 1.4. Under CAPM, the required return is:",
    stemAr: "معدل خالٍ من المخاطر 3%، وعائد السوق 9%، وبيتا 1.4. وفق نموذج تسعير الأصول الرأسمالية، العائد المطلوب:",
    options: ["11.4%", "12.6%", "8.4%", "15.6%"],
    optionsAr: ["11.4%", "12.6%", "8.4%", "15.6%"],
    answerIndex: 0,
    explanation:
      "CAPM: 3% + 1.4 × (9% − 3%) = 3% + 8.4% = 11.4%. (12.6% wrongly applies beta to the full market return.)",
    explanationAr:
      "النموذج: 3% + 1.4 × (9% − 3%) = 3% + 8.4% = 11.4%. (و12.6% تطبق بيتا على عائد السوق كاملًا خطأً.)",
    standardTag: "Cost of capital",
    area: "accounting",
    difficulty: 1,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-04",
    stem: "A company issues warrants attached to bonds. The main reason to prefer warrants over straight equity is:",
    stemAr: "شركة تصدر وثائق شراء ملحقة بسندات. أهم سبب لتفضيلها على الأسهم المباشرة:",
    options: [
      "They raise finance now while deferring (and pricing) the equity dilution to a future date",
      "They avoid dilution forever",
      "They are never exercisable",
      "They guarantee the share price will rise",
    ],
    optionsAr: [
      "تجمع تمويلًا الآن وتؤجل تخفيف الملكية (مسعّرًا) إلى تاريخ لاحق",
      "تمنع التخفيف للأبد",
      "لا يجوز تنفيذها أبدًا",
      "تضمن ارتفاع سعر السهم",
    ],
    answerIndex: 0,
    explanation:
      "Warrants sweeten debt now and convert later at a pre-agreed exercise price — deferred, priced dilution. Dilution still occurs if exercised; nothing guarantees prices.",
    explanationAr:
      "الوثائق تحلّي الدين الآن وتتحول لاحقًا بسعر تنفيذ متفق — تخفيف مؤجل مسعّر. والتخفيف يقع عند التنفيذ؛ ولا شيء يضمن الأسعار.",
    standardTag: "Hybrid finance",
    area: "accounting",
    difficulty: 2,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-05",
    stem: "An exporter will receive €5m in six months. To hedge, it buys a European put option on euros (strike £/€ fixed). This strategy:",
    stemAr: "مصدّر سيتلقى 5 ملايين يورو بعد ستة أشهر. للتحوط اشترى خيار بيع أوروبيًا على اليورو (سعر تنفيذ ثابت). هذه الاستراتيجية:",
    options: [
      "Caps the worst rate while preserving the upside if the euro strengthens",
      "Locks one rate for certain",
      "Is identical to a forward contract",
      "Eliminates all currency exposure without cost",
    ],
    optionsAr: [
      "تسقف أسوأ سعر مع الإبقاء على الصاعد إن قوي اليورو",
      "تثبّت سعرًا واحدًا قطعًا",
      "تطابق عقدًا آجلًا",
      "تلغي كل التعرض دون كلفة",
    ],
    answerIndex: 0,
    explanation:
      "A purchased option insures: the floor (strike) is guaranteed, appreciation gains remain — for a premium. Forwards lock one rate; certainty and upside are mutually exclusive.",
    explanationAr:
      "الخيار المشترى تأمين: الحد الأدنى (التنفيذ) مضمون، ومكاسب التقوي تبقى — مقابل علاوة. والآجل يثبّت سعرًا؛ فاليقين والصاعد لا يجتمعان.",
    standardTag: "Currency risk",
    area: "accounting",
    difficulty: 2,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-06",
    stem: "Which derivative gives the holder an OBLIGATION to buy the underlying at a fixed price on a set date?",
    stemAr: "أي مشتق يمنع حامله التزامًا بشراء الأصل بسعر ثابت في تاريخ محدد؟",
    options: ["A futures contract (long)", "A call option", "A put option", "An interest-rate swap"],
    optionsAr: ["عقد مستقبليات (شراء)", "خيار شراء", "خيار بيع", "مقايضة فائدة"],
    answerIndex: 0,
    explanation:
      "Futures bind both parties. Options carry rights, not obligations (hence the premium). Swaps exchange streams, not a single purchase obligation.",
    explanationAr:
      "المستقبليات تلزم الطرفين. والخيارات حقوق لا التزامات (ومن هنا العلاوة). والمقايضات تبادل تدفقات لا التزام شراء واحد.",
    standardTag: "Derivatives",
    area: "accounting",
    difficulty: 1,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-07",
    stem: "In an interest-rate swap, a company paying fixed and receiving floating is MOST likely trying to:",
    stemAr: "في مقايضة فائدة، شركة تدفع ثابتًا وتتلقى عائمًا تحاول غالبًا:",
    options: [
      "Convert fixed-rate exposure to floating — perhaps expecting rates to fall",
      "Increase its interest-rate risk",
      "Hedge a foreign-currency receipt",
      "Raise new equity capital",
    ],
    optionsAr: [
      "تحويل تعرضها الثابت إلى عائم — ربما توقعًا لهبوط الأسعار",
      "زيادة تعرضها لأسعار الفائدة",
      "التحوط من مقبوض عملة أجنبية",
      "جمع حقوق ملكية جديدة",
    ],
    answerIndex: 0,
    explanation:
      "Pay-fixed/receive-floating synthetically converts fixed-rate debt to floating — the natural position if the treasurer expects falling rates or wants to match floating assets.",
    explanationAr:
      "الدفع الثابت والتلقي العائم يحول الدين الثابت تركيبيًا إلى عائم — وهو الموقع الطبيعي إن توقع أمين الخزانة هبوط الأسعار أو أراد مطابقة أصول عائمة.",
    standardTag: "Interest-rate risk",
    area: "accounting",
    difficulty: 2,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-08",
    stem: "Forward-rate agreements hedge interest-rate risk by settling:",
    stemAr: "اتفاقيات الأسعار الآجلة تحوط مخاطر الفائدة عبر تسوية:",
    options: [
      "Cash compensation for the difference between the agreed and actual reference rate at settlement",
      "Physical delivery of deposits",
      "An option premium only",
      "Shares in the counterparty bank",
    ],
    optionsAr: [
      "تعويض نقدي عن فرق السعر المتفق والسعر المرجعي الفعلي عند التسوية",
      "تسليم فعلي للودائع",
      "علاوة خيار فقط",
      "أسهم في البنك المقابل",
    ],
    answerIndex: 0,
    explanation:
      "FRAs are cash-settled differences on a notional deposit — no principal moves. The settlement compensates exactly the interest over/underpayment at the reference rate.",
    explanationAr:
      "الاتفاقيات الآجلة تُسوى نقدًا بفروق وديعة افتراضية — لا يتحرك أصل. والتعويض يعادل بالضبط فرق الفائدة عند السعر المرجعي.",
    standardTag: "Interest-rate risk",
    area: "accounting",
    difficulty: 2,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-09",
    stem: "The adjusted present value (APV) method values a project by:",
    stemAr: "طريقة القيمة الحالية المعدلة تقيم المشروع عبر:",
    options: [
      "Valuing the base case all-equity NPV, then adding financing side-effects (tax shield, issue costs) separately",
      "Blending all financing effects into one discount rate",
      "Ignoring tax",
      "Averaging the WACC over five years",
    ],
    optionsAr: [
      "تقييم القيمة الصافية بتمويل كامل بحقوق الملكية ثم إضافة آثار التمويل (الدرع الضريبي، تكاليف الإصدار) منفصلة",
      "دمج كل الآثار التمويلية في معدل خصم واحد",
      "تجاهل الضرائب",
      "متوسط الكلفة المرجحة على خمس سنوات",
    ],
    answerIndex: 0,
    explanation:
      "APV = base-case NPV (all-equity rate) + PV of financing side-effects. It suits project-specific finance where a single adjusted WACC would be circular or unstable.",
    explanationAr:
      "القيمة المعدلة = القيمة الصافية الأساسية (بمعدل حقوق كاملة) + القيمة الحالية لآثار التمويل. وتناسب تمويلًا خاصًا بالمشروع حيث يصير المعدل المرجح الواحد دائريًا أو غير مستقر.",
    standardTag: "Investment appraisal",
    area: "accounting",
    difficulty: 3,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-10",
    stem: "A sukuk ijara structure is BEST described as:",
    stemAr: "هيكل صكوك الإجارة يوصف أفضل وصف بأنه:",
    options: [
      "Asset-backed certificates where returns come from lease rentals on the underlying asset",
      "Interest-bearing bonds with an Arabic name",
      "Shares in a bank",
      "A currency forward",
    ],
    optionsAr: [
      "شهادات مدعومة بأصل تأتي عوائدها من إيجارات الأصل الكامن",
      "سندات بفوائد باسم عربي",
      "أسهم في بنك",
      "عقد عملة آجل",
    ],
    answerIndex: 0,
    explanation:
      "Ijara sukuk: certificate holders own a share of a leased asset and receive rental income — asset-backed, risk-sharing, not a lending relationship.",
    explanationAr:
      "صكوك الإجارة: يملك الحاملون نصيبًا من أصل مؤجر ويتلقون دخل إيجار — مدعوم بأصل وبمشاركة مخاطر، لا علاقة إقراض.",
    standardTag: "Islamic finance",
    area: "accounting",
    difficulty: 1,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-11",
    stem: "A conglomerate discount is MOST plausibly caused by:",
    stemAr: "خصم التجمعات الشركاتية يُفسَّر على الأرجح بـ:",
    options: [
      "Inefficient internal capital markets and the opacity of unrelated businesses under one roof",
      "Excess dividends",
      "Too little debt",
      "Strong divisional accountability",
    ],
    optionsAr: [
      "أسواق رأس مال داخلية غير كفؤة وغموض أنشطة غير متجانسة تحت سقف واحد",
      "توزيعات مفرطة",
      "دين قليل جدًا",
      "مساءلة قسمية قوية",
    ],
    answerIndex: 0,
    explanation:
      "Conglomerates often trade below sum-of-parts: investors struggle to value unrelated businesses, and internal capital may be misallocated away from the best projects — the classic rationale for demergers.",
    explanationAr:
      "غالبًا تتداول التجميعات دون مجموع أجزائها: يصعب على المستثمرين تقييم أنشطة متباينة، وقد يُساء توجيه رأس المال الداخلي عن أفضل المشروعات — وهو منطق فصل الأنشطة.",
    standardTag: "Corporate reconstruction",
    area: "accounting",
    difficulty: 2,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-12",
    stem: "Free cash flow to EQUITY is derived from free cash flow to the FIRM by:",
    stemAr: "التدفق النقدي الحر لحقوق الملكية يُشتق من التدفق الحر للشركة عبر:",
    options: [
      "Subtracting after-tax interest and net new debt issuance effects",
      "Adding back depreciation",
      "Subtracting dividends only",
      "Multiplying by the WACC",
    ],
    optionsAr: [
      "خصم الفوائد بعد الضريبة وآثار إصدار الدين الجديد الصافي",
      "إضافة الإهلاك",
      "خصم التوزيعات فقط",
      "الضرب في الكلفة المرجحة",
    ],
    answerIndex: 0,
    explanation:
      "FCFE = FCF − after-tax interest + net borrowing: the cash actually attributable to shareholders after debt holders are served and financed.",
    explanationAr:
      "تدفق حقوق الملكية = تدفق الشركة − الفوائد بعد الضريبة + صافي الاقتراض: النقد المتاح للمساهمين فعليًا بعد خدمة حملة الدين وتمويلهم.",
    standardTag: "Valuation",
    area: "accounting",
    difficulty: 2,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-13",
    stem: "In a rights issue (1-for-4 at a discount), a shareholder who cannot subscribe and lets the rights lapse should normally:",
    stemAr: "في إصدار حقوق (1 مقابل 4 بخصم)، مساهم لا يستطيع الاشتراك ويترك الحقوق تسقط ينبغي عادةً:",
    options: [
      "Sell the rights nil-paid — they carry value transferred to buyers",
      "Do nothing — rights are worthless",
      "Buy more shares in the market at full price instead",
      "Sue the company",
    ],
    optionsAr: [
      "بيع الحقوق غير المسددة — فهي تحمل قيمة تنتقل للمشترين",
      "لا شيء — الحقوق بلا قيمة",
      "شراء أسهم إضافية بالسعر الكامل بدلًا من ذلك",
      "مقاضاة الشركة",
    ],
    answerIndex: 0,
    explanation:
      "Nil-paid rights trade separately: their value ≈ (ex-rights price − subscription price) per new share. Letting them lapse donates that value away — selling crystallises it.",
    explanationAr:
      "الحقوق غير المسددة تتداول منفصلة: قيمتها ≈ (السعر بدون الحقوق − سعر الاشتراك) لكل سهم جديد. وتركها يسقط يتبرع بتلك القيمة — وبيعها يجسدها.",
    standardTag: "Equity finance",
    area: "accounting",
    difficulty: 2,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-14",
    stem: "A$100m 10-year bond with annual coupon 6% is issued when market rates are also 6%. Its issue price is:",
    stemAr: "سند 100 مليون لعشر سنوات بكوبون سنوي 6% يصدر وأسعار السوق 6% أيضًا. سعر الإصدار:",
    options: ["Par ($100m)", "A premium above par", "A discount below par", "Zero"],
    optionsAr: ["بالمثانة (100 مليون)", "بعلاوة فوق المثانة", "بخصم تحت المثانة", "صفر"],
    answerIndex: 0,
    explanation:
      "Coupon = market rate means the present value of coupons and redemption equals par exactly. Rates below 6% would create a premium; above, a discount.",
    explanationAr:
      "تساوي الكوبون مع سعر السوق يعني أن القيمة الحالية للكوبونات والفداء تعادل المثانة تمامًا. وأقل من 6% تخلق علاوة؛ وأكثر تخلق خصمًا.",
    standardTag: "Debt valuation",
    area: "accounting",
    difficulty: 1,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-15",
    stem: "Which hedging device fixes a future exchange rate TODAY for a known future receipt?",
    stemAr: "أي أداة تحوط يثبّت سعر صرف مستقبليًا اليوم لمقبوض مستقبلي معلوم؟",
    options: ["A forward exchange contract", "An over-the-counter call option", "A futures contract with open delivery", "A currency swap on principal only"],
    optionsAr: ["عقد صرف آجل", "خيار شراء خارج المقاصة", "عقد مستقبليات بتسليم مفتوح", "مقايضة على الأصل فقط"],
    answerIndex: 0,
    explanation:
      "Forwards are tailored, binding, rate-locked agreements — the standard hedge for a known exposure. Options cost a premium for upside; futures are standardised; swaps suit streams.",
    explanationAr:
      "العقود الآجلة اتفاقيات مفصلة ملزمة تثبّت السعر — التحوط القياسي للتعرض المعلوم. والخيارات تكلف علاوة مقابل الصاعد؛ والمستقبليات معيارية؛ والمقايضات للتدفقات.",
    standardTag: "Currency risk",
    area: "accounting",
    difficulty: 1,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-16",
    stem: "A company's shares trade at $8 with dividend just paid $0.32 and growth 4%. The cost of equity (dividend growth model) is:",
    stemAr: "سهم يتداول عند 8 دولارات وتوزيعة مدفوعة للتو 0.32 ونمو 4%. كلفة حقوق الملكية (نموذج التوزيعات):",
    options: ["8.16%", "4.4%", "8%", "12%"],
    optionsAr: ["8.16%", "4.4%", "8%", "12%"],
    answerIndex: 0,
    explanation:
      "kₑ = [D₀(1+g)/P₀] + g = [0.32 × 1.04 / 8] + 0.04 = 0.0416 + 0.04 = 8.16%. Forgetting to grow the dividend gives 8.0% — the trap.",
    explanationAr:
      "الكلفة = [التوزيعة × (1+النمو) ÷ السعر] + النمو = [0.32 × 1.04 ÷ 8] + 0.04 = 0.0416 + 0.04 = 8.16%. ونسيان تنمية التوزيعة يعطي 8% — الفخ.",
    standardTag: "Cost of capital",
    area: "accounting",
    difficulty: 2,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-17",
    stem: "In a management buy-out (MBO), the classic debt-equity structure relies heavily on leverage because:",
    stemAr: "في شراء الإدارة، تعتمد البنية الكلاسيكية على الرافعة المالية بكثافة لأن:",
    options: [
      "Managers lack equity wealth, and leverage disciplines cash management while amplifying their equity upside",
      "Banks prefer lending to managers",
      "Debt is free",
      "Regulators require 90% debt",
    ],
    optionsAr: [
      "المديرون يفتقرون لثروة ملكية، والرافعة تلزم انضباط النقد وتضخم صعود حقوقهم",
      "البنوك تفضل الإقراض للمديرين",
      "الدين مجاني",
      "الجهات التنظيمية توجب دينًا بنسبة 90%",
    ],
    answerIndex: 0,
    explanation:
      "MBO finance: managers contribute modest equity; institutions and banks provide the bulk as debt. High leverage forces cash discipline and gives managers a leveraged equity stake — with distress risk.",
    explanationAr:
      "تمويل شراء الإدارة: يسهم المديرون بحقوق محدودة؛ وتؤسسات وبنوك معظم التمويل دينًا. والرافعة العالية تفرض انضباطًا نقديًا وتمنح المديرين حصة مرتفعة — مع خطر الضائقة.",
    standardTag: "Corporate reconstruction",
    area: "accounting",
    difficulty: 2,
    source: "ACCA AFM past paper (adapted)",
  },
  {
    code: "AFM-P1-18",
    stem: "An efficient frontier of portfolios shows:",
    stemAr: "الحد الكفء لمحافظ الاستثمار يعرض:",
    options: [
      "The best risk-return combinations available — maximum return for each risk level",
      "All possible portfolios regardless of efficiency",
      "Only risk-free assets",
      "Portfolios with zero risk and maximum return",
    ],
    optionsAr: [
      "أفضل توليفات مخاطرة-عائد متاحة — أقصى عائد عند كل مستوى مخاطرة",
      "كل المحافظ الممكنة بغض النظر عن الكفاءة",
      "الأصول الخالية من المخاطر فقط",
      "محافظ بمخاطرة صفر وعائد أقصى",
    ],
    answerIndex: 0,
    explanation:
      "The frontier is the upper boundary of achievable risk-return space; rational investors choose along it (per their utility) — nothing above it exists and everything below is dominated.",
    explanationAr:
      "الحد هو الحاجز الأعلى لفضاء المخاطرة-العائد الممكن؛ ويختار المستثمر العقلاني عليه (بحسب منفعته) — لا شيء فوقه وكل ما دونه مسيطر عليه.",
    standardTag: "Portfolio theory",
    area: "accounting",
    difficulty: 2,
    source: "ACCA AFM past paper (adapted)",
  },
]

/* ==================== APM (P5) Advanced Performance Management — 18 Q ==================== */

export const APM_PAPER: PaperSeedQ[] = [
  {
    code: "APM-P1-01",
    stem: "A performance-information system that reports only annual financial statements is criticised MOST for:",
    stemAr: "نظام معلومات أداء يقتصر على القوائم المالية السنوية يُنتقد أكثر لأنه:",
    options: [
      "Being historical, lagging and too aggregated for operational steering",
      "Being too forward-looking",
      "Containing too much operational detail",
      "Being externally focused",
    ],
    optionsAr: [
      "تاريخي ومتخلف ومفرط التجميع لتوجيه العمليات",
      "مفرط التطلع للمستقبل",
      "يحتوي تفاصيل تشغيلية أكثر من اللازم",
      "خارجي التركيز",
    ],
    answerIndex: 0,
    explanation:
      "Annual accounts tell you where you have been, at entity level, months after decisions. Steering needs timely, disaggregated, leading indicators.",
    explanationAr:
      "الحسابات السنوية تخبرك أين كنت، على مستوى المنشأة، بعد شهور من القرارات. والتوجيه يستلزم مؤشرات فورية مفككة قائدة.",
    standardTag: "Performance frameworks",
    area: "accounting",
    difficulty: 1,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-02",
    stem: "Which performance-management framework explicitly links objectives, measures, targets and initiatives in strategy maps?",
    stemAr: "أي إطار إدارة أداء يربط صراحةً الأهداف والمقاييس والمستهدفات والمبادرات في خرائط استراتيجية؟",
    options: ["Balanced scorecard (Kaplan & Norton)", "Fitzgerald & Moon's building blocks", "VBM tree", "Six Sigma DMAIC"],
    optionsAr: ["بطاقة الأداء المتوازن (كابلان ونورتن)", "اللبنات الأساسية لفيترجيرالد ومون", "شجرة الإدارة بقيمة القيمة", "ستة سيجما"],
    answerIndex: 0,
    explanation:
      "Strategy maps — the BSC's visual layer — connect objectives across four perspectives to measures, targets and initiatives, exposing the causal logic of strategy.",
    explanationAr:
      "خرائط الاستراتيجية — الطبقة البصرية للبطاقة — تصل الأهداف عبر المنظورات الأربعة بالمقاييس والمستهدفات والمبادرات، كاشفةً منطق الاستراتيجية السببي.",
    standardTag: "Performance frameworks",
    area: "accounting",
    difficulty: 1,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-03",
    stem: "Fitzgerald & Moon's building blocks for SERVICES include which dimension pair?",
    stemAr: "لبنات فيترجيرالد ومون لقطاع الخدمات تتضمن أي زوج أبعاد؟",
    options: ["Quality and innovation (with competitiveness, flexibility, resource utilisation)", "Liquidity and gearing", "Tax and compliance", "Market share only"],
    optionsAr: ["الجودة والابتكار (مع التنافسية والمرونة واستغلال الموارد)", "السيولة والرفع المالي", "الضريبة والامتثال", "الحصة السوقية فقط"],
    answerIndex: 0,
    explanation:
      "The building blocks: results (competitiveness, financial performance) and determinants (quality, innovation, flexibility, resource utilisation) — services need the operational determinants, not just ratios.",
    explanationAr:
      "اللبنات: نتائج (التنافسية والأداء المالي) ومحددات (الجودة والابتكار والمرونة واستغلال الموارد) — فالخدمات تحتاج المحددات التشغيلية لا النسب وحدها.",
    standardTag: "Performance frameworks",
    area: "accounting",
    difficulty: 2,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-04",
    stem: "Economic value added (EVA) improves on profit by:",
    stemAr: "القيمة الاقتصادية المضافة تتفوق على الربح عبر:",
    options: [
      "Charging operations for the full cost of capital employed, after accounting adjustments",
      "Ignoring the cost of debt",
      "Removing all non-cash items",
      "Adding back all marketing spend",
    ],
    optionsAr: [
      "تحميل العمليات الكلفة الكاملة لرأس المال المستخدم بعد تسويات محاسبية",
      "تجاهل كلفة الدين",
      "استبعاد كل البنود غير النقدية",
      "إعادة كل الإنفاق التسويقي",
    ],
    answerIndex: 0,
    explanation:
      "EVA = adjusted operating profit after tax − (capital employed × WACC): profit only counts once shareholders' required return is covered. Dozens of adjustments align accounting with economics.",
    explanationAr:
      "القيمة المضافة = الربح التشغيلي المعدل بعد الضريبة − (رأس المال المستخدم × الكلفة المرجحة): فلا يُحتسب الربح إلا بعد تغطية عائد المساهمين المطلوب. وعشرات التسويات توائم المحاسبة مع الاقتصاد.",
    standardTag: "Value-based management",
    area: "accounting",
    difficulty: 2,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-05",
    stem: "A call-centre ranks staff purely on average call-handling time. Agents cut customers off early. This is:",
    stemAr: "مركز اتصالات يرتب الموظفين على متوسط زمن المكالمة فقط، فيقطع الموظفون المكالمات مبكرًا. هذا:",
    options: [
      "Dysfunctional behaviour from a poorly chosen single measure",
      "A correct use of the measure",
      "An ethics problem only",
      "Evidence the measure is working",
    ],
    optionsAr: [
      "سلوك خللي الوظيفة من مقياس وحيد رديء الاختيار",
      "استخدام صحيح للمقياس",
      "مشكلة أخلاقية فقط",
      "دليل على أن المقياس يعمل",
    ],
    answerIndex: 0,
    explanation:
      "Classic measure-induced dysfunction: optimising the proxy (speed) destroys the goal (service). The fix is a balanced set — speed AND first-call resolution AND satisfaction.",
    explanationAr:
      "خلل كلاسيكي يستحضره المقياس: تعظيم البديل (السرعة) يتلف الهدف (الخدمة). والعلاج مجموعة متوازنة — السرعة مع الحل من أول اتصال مع الرضا.",
    standardTag: "Dysfunctional behaviour",
    area: "accounting",
    difficulty: 1,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-06",
    stem: "For a public hospital, an example of an economy measure (VFM's 3 Es) is:",
    stemAr: "لمستشفى عام، مثال على مقياس الاقتصاد (الثلاثية الاقتصادية للقيمة مقابل المال):",
    options: [
      "Negotiating a lower price per dose of a standard medicine",
      "Patients treated per doctor",
      "Reduction in readmission rates",
      "Patient satisfaction scores",
    ],
    optionsAr: [
      "التفاوض على سعر أدنى للجرعة من دواء قياسي",
      "المرضى المعالجون لكل طبيب",
      "انخفاض معدلات إعادة الإدخال",
      "درجات رضا المرضى",
    ],
    answerIndex: 0,
    explanation:
      "Economy = minimising input costs (price per dose); efficiency = output per input (patients per doctor); effectiveness = outcomes achieved (readmissions, satisfaction).",
    explanationAr:
      "الاقتصاد = خفض كلفة المدخلات (سعر الجرعة)؛ والكفاءة = المخرج لكل مدخل (مرضى لكل طبيب)؛ والفاعلية = النواتج المحققة (إعادة الإدخال، الرضا).",
    standardTag: "Public-sector performance",
    area: "accounting",
    difficulty: 1,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-07",
    stem: "Which cost-allocation basis reduces the MOST gaming in a shared-services chargeback?",
    stemAr: "أي أساس لتوزيع التكاليف يقلل أكثر التلاعب في تحميل الخدمات المشتركة؟",
    options: [
      "Activity-based drivers tied to actual consumption, with published rates",
      "Headcount alone",
      "An even split regardless of use",
      "Revenue share",
    ],
    optionsAr: [
      "محركات نشاطية مرتبطة بالاستهلاك الفعلي بأسعار معلنة",
      "عدد الموظفين وحده",
      "قسمة متساوية بغض النظر عن الاستخدام",
      "نسبة من الإيراد",
    ],
    answerIndex: 0,
    explanation:
      "Consumption-based charging prices internal services honestly: users pay for what they use, providers face demand discipline. Headcount/even-split subsidies over-users and punishes the frugal.",
    explanationAr:
      "التحميل على الاستهلاك يسعّر الخدمات الداخلية بصدق: المستخدم يدفع ما استهلكه، والمزود يواجه انضباط الطلب. أما العدد أو القسمة فتدعم المفرط وتعاقب المقتصد.",
    standardTag: "Transfer pricing & shared services",
    area: "accounting",
    difficulty: 2,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-08",
    stem: "A management accountant is pressured to reclassify operating costs as capital to meet targets. The MOST professional response is to:",
    stemAr: "محاسب إداري يُضغط لإعادة تصنيف تكاليف تشغيلية كرأسمالية لبلوغ المستهدفات. أكثر الاستجابات مهنية:",
    options: [
      "Refuse to misstate and escalate the pressure to higher governance if it persists",
      "Comply quietly",
      "Adjust the numbers and disclose nothing",
      "Resign immediately without explanation",
    ],
    optionsAr: [
      "الرفض عن تضليل والتصعيد لحوكمة أعلى إن استمر الضغط",
      "الامتثال بهدوء",
      "تعديل الأرقام دون إفصاح",
      "الاستقالة فورًا دون بيان",
    ],
    answerIndex: 0,
    explanation:
      "Integrity and professional competence: misleading classification is misstatement. Escalation routes (CFO, audit committee, ethics line) exist precisely for this; resignation is the last resort.",
    explanationAr:
      "النزاهة والكفاءة المهنية: التصنيف المضلل تضليل. وطرق التصعيد (المدير المالي، لجنة المراجعة، خط الأخلاقيات) وجدت لذلك؛ والاستقالة ملاذ أخير.",
    standardTag: "Ethics in performance management",
    area: "ethics",
    difficulty: 1,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-09",
    stem: "Which is the BEST counterbalance to short-termism in divisional targets?",
    stemAr: "ما أفضل مقابلة للقصر النظري في مستهدفات الأقسام؟",
    options: [
      "Including forward-looking measures (innovation pipeline, customer loyalty) with weighting in the scorecard",
      "Reporting monthly profit only more often",
      "Removing all non-financial measures",
      "Shortening the reporting cycle to weekly",
    ],
    optionsAr: [
      "إدراج مقاييس استشرافية (خط الابتكار، ولاء العملاء) بوزن في البطاقة",
      "الإكثار من الإبلاغ الشهري للربح",
      "إزالة كل المقاييس غير المالية",
      "تقصير دورة الإبلاغ لأسبوعية",
    ],
    answerIndex: 0,
    explanation:
      "Short-termism is cured by measuring what protects the future — R&D pipeline, retention, quality — with enough weight to matter in appraisal and reward.",
    explanationAr:
      "يُداوى القصر النظري بقياس ما يحمي المستقبل — خط البحث والولاء والجودة — بوزن يؤثر فعلًا في التقييم والمكافأة.",
    standardTag: "Performance indicators",
    area: "accounting",
    difficulty: 2,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-10",
    stem: "Benchmarking against best-in-class organisations outside the industry is:",
    stemAr: "المقارنة المرجعية بأفضل المنظمات خارج الصناعة:",
    options: [
      "Generic benchmarking — adapting superior processes regardless of sector",
      "Internal benchmarking",
      "Competitive benchmarking",
      "Functional benchmarking within the same industry",
    ],
    optionsAr: [
      "مقارنة عامة — تكييف عمليات متفوقة بغض النظر عن القطاع",
      "مقارنة داخلية",
      "مقارنة تنافسية",
      "مقارنة وظيفية داخل الصناعة ذاتها",
    ],
    answerIndex: 0,
    explanation:
      "Generic (out-of-industry) benchmarking imports practices no domestic rival has — logistics from retailers, scheduling from airlines — often the richest source of step change.",
    explanationAr:
      "المقارنة العامة تستورد ممارسات لا يملكها منافس محلي — لوجستيات من التجزئة وجدولة من الطيران — وهي أغنى مصادر القفزة.",
    standardTag: "Benchmarking",
    area: "accounting",
    difficulty: 2,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-11",
    stem: "Not-for-profits' performance evaluation is complicated MOST by:",
    stemAr: "تقييم أداء المنظمات غير الربحية يتعقد أكثر بـ:",
    options: [
      "Multiple, non-commercial and often unquantifiable objectives with no bottom line",
      "Too much profit",
      "Excess market discipline",
      "Single measurable goals",
    ],
    optionsAr: [
      "تعدد الأهداف غير التجارية وغير القابلة للقياس غالبًا وبغياب نتيجة نهائية",
      "إفراط الربح",
      "إفراط انضباط السوق",
      "أهداف وحيدة قابلة للقياس",
    ],
    answerIndex: 0,
    explanation:
      "NFPs juggle mission outcomes, stakeholder accountability and stewardship of funds — the absence of profit forces proxy measures and judgement into every evaluation.",
    explanationAr:
      "توازن غير الربحية بين نواتج الرسالة ومساءلة أصحاب المصلحة والأمانة على الأموال — وغياب الربح يُدخل البدائل والاجتهاد في كل تقييم.",
    standardTag: "Public-sector performance",
    area: "accounting",
    difficulty: 1,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-12",
    stem: "A variance report shows material adverse purchase-price variance. Before concluding poor buying, the analyst should FIRST:",
    stemAr: "تقرير انحرافات يظهر انحراف سعر شراء عكسي جوهريًا. قبل الجزم بسوء الشراء ينبغي أولًا:",
    options: [
      "Check planning vs operational split — was the market price simply unforeseeable?",
      "Fire the purchasing manager",
      "Change suppliers immediately",
      "Ignore it — variances are noise",
    ],
    optionsAr: [
      "فحص انفصال التخطيط عن التشغيل — هل كان سعر السوق ببساطة غير مرئي؟",
      "إقالة مدير المشتريات",
      "تغيير الموردين فورًا",
      "تجاهله — الانحرافات ضجيج",
    ],
    answerIndex: 0,
    explanation:
      "Controllability analysis: separate the unforeseeable market move (planning variance — no one's fault) from the buying performance (operational variance — actionable).",
    explanationAr:
      "تحليل القابلية للرقابة: فصل حركة السوق غير المتوقعة (تخطيطية — لا ذنب فيها) عن أداء الشراء (تشغيلية — قابلة للتصرف).",
    standardTag: "Variance analysis",
    area: "accounting",
    difficulty: 2,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-13",
    stem: "In reward design, an 'all-or-nothing' annual bonus threshold tends to induce:",
    stemAr: "في تصميم الحوافز، عتبة المكافأة السنوية «الكل أو لا شيء» تميل إلى إحداث:",
    options: [
      "Threshold-chasing behaviour — sandbagging forecasts and pulling sales between periods",
      "Perfectly honest forecasting",
      "Long-term value maximisation",
      "Lower agency costs only",
    ],
    optionsAr: [
      "سلوك مطاردة العتبة — تقليل التوقعات وسحب المبيعات بين الفترات",
      "توقعات صادقة تمامًا",
      "تعظيم قيمة طويلة الأجل",
      "خفض تكاليف الوكالة فقط",
    ],
    answerIndex: 0,
    explanation:
      "Cliff-threshold rewards invite gaming: stop selling once over the cliff, defer revenue when below it, under-forecast to make targets beatable. Smoothed, capped, multi-metric designs temper this.",
    explanationAr:
      "المكافآت العتبوية تستدعي التلاعب: كف البيع بعد العتبة، وتأجيل الإيراد دونها، وتحطيم التوقعات لتسهيل بلوغها. والتصاميم الملساء المحدودة متعددة المقاييس تخفف ذلك.",
    standardTag: "Incentive design",
    area: "accounting",
    difficulty: 2,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-14",
    stem: "The performance prism's FIVE stakeholder-related facets include:",
    stemAr: "وجوه المنشور الخمسة المرتبطة بأصحاب المصلحة تشمل:",
    options: [
      "Stakeholder satisfaction, strategies, processes, capabilities and stakeholder contribution",
      "Plan, do, check, act, review",
      "Price, product, place, promotion, people",
      "Economy, efficiency, effectiveness, equity, environment",
    ],
    optionsAr: [
      "رضا أصحاب المصلحة، والاستراتيجيات، والعمليات، والقدرات، وإسهام أصحاب المصلحة",
      "خطط، نفذ، افحص، صحح، راجع",
      "السعر والمنتج والتوزيع والترويج والناس",
      "الاقتصاد والكفاءة والفاعلية والإنصاف والبيئة",
    ],
    answerIndex: 0,
    explanation:
      "Neely's performance prism asks: who matters, what do they want (satisfaction), what strategies/processes/capabilities deliver it, and what do WE want from them (contribution) — a two-way stakeholder lens.",
    explanationAr:
      "منشور نيلي يسأل: من يهم، وماذا يريدون (الرضا)، وأي استراتيجيات وعمليات وقدرات تحققه، وماذا نريد نحن منهم (الإسهام) — عدسة مصلحية ثنائية الاتجاه.",
    standardTag: "Performance frameworks",
    area: "accounting",
    difficulty: 3,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-15",
    stem: "A divisional scorecard includes 'employee engagement index' among measures. Its main limitation is:",
    stemAr: "بطاقة قسمية تضم «مؤشر اندماج الموظفين» بين المقاييس. أهم حدوده:",
    options: [
      "Subjectivity and survey timing may make it incomparable or gameable",
      "It is a financial measure",
      "It predicts nothing",
      "It cannot be displayed",
    ],
    optionsAr: [
      "الذاتية وتوقيت الاستبيان قد يجعلانه غير قابل للمقارنة أو قابلاً للتلاعب",
      "إنه مقياس مالي",
      "لا ينبئ بشيء",
      "لا يمكن عرضه",
    ],
    answerIndex: 0,
    explanation:
      "Perceptual indices are valid leading indicators but need consistent instruments, response rates and anonymity discipline — otherwise managers 'manage the survey' instead of the culture.",
    explanationAr:
      "المؤشرات الإدراكية مؤشرات قائدة صحيحة لكنها تحتاج أدوات ثابتة ومعدلات استجابة وانضباط سرية — وإلا «أدار المديرون الاستبيان» بدل الثقافة.",
    standardTag: "Performance indicators",
    area: "accounting",
    difficulty: 2,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-16",
    stem: "Big-data analytics improves performance evaluation primarily by:",
    stemAr: "تحليلات البيانات الضخمة تحسن تقييم الأداء أساسًا عبر:",
    options: [
      "Replacing small samples with whole-population, near-real-time measurement",
      "Eliminating the need for strategy",
      "Making judgement unnecessary",
      "Guaranteeing data quality automatically",
    ],
    optionsAr: [
      "استبدال العينات الصغيرة بقياس المجتمع الكامل في شبه الزمن الحقيقي",
      "إلغاء الحاجة للاستراتيجية",
      "جعل الاجتهاد غير ضروري",
      "ضمان جودة البيانات تلقائيًا",
    ],
    answerIndex: 0,
    explanation:
      "Full-population telemetry (every transaction, click, sensor) removes sampling error and shortens feedback loops — but strategy, judgement and data governance remain human work.",
    explanationAr:
      "القياس الكامل (كل معاملة ونقرة ومستشعر) يزيل خطأ العينة ويقصر حلقات التغذية الراجعة — لكن الاستراتيجية والاجتهاد وحوكمة البيانات تبقى عملًا بشريًا.",
    standardTag: "Technology & performance",
    area: "accounting",
    difficulty: 1,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-17",
    stem: "A group uses dual transfer pricing (cost to buyer, market to seller) mainly to:",
    stemAr: "مجموعة تستخدم التسعير المزدوج (تكلفة للمشتري وسوق للبائع) أساسًا لكي:",
    options: [
      "Keep both divisions' reported profits fair so autonomy and goal congruence coexist",
      "Reduce group tax to zero",
      "Simplify the accounts",
      "Comply with IFRS 15",
    ],
    optionsAr: [
      "تبقي أرباح القسمين المبلغة عادلة فتتعايش الاستقلالية مع توافق الأهداف",
      "تخفض ضريبة المجموعة للصفر",
      "تبسط الحسابات",
      "تلتزم بمعيار IFRS 15",
    ],
    answerIndex: 0,
    explanation:
      "Dual pricing removes the conflict in a single transfer price: the buyer isn't penalised by market price, the seller isn't subsidised at cost — the group books the difference centrally.",
    explanationAr:
      "التسعير المزدوج يزيل تعارض السعر الواحد: فلا يُعاقب المشتري بسعر السوق ولا يُدعم البائع بالتكلفة — وتقيد المجموعة الفرق مركزيًا.",
    standardTag: "Transfer pricing",
    area: "accounting",
    difficulty: 3,
    source: "ACCA APM past paper (adapted)",
  },
  {
    code: "APM-P1-18",
    stem: "Which report design best supports a board's oversight duty?",
    stemAr: "أي تصميم تقرير يدعم أفضل واجب الإشراف للمجلس؟",
    options: [
      "A concise dashboard of KPIs with trends, targets, exceptions and links to detail on demand",
      "Raw system dumps of every transaction",
      "A single bottom-line profit number",
      "The external auditor's file",
    ],
    optionsAr: [
      "لوحة موجزة للمؤشرات بالاتجاهات والمستهدفات والاستثناءات مع وصلات للتفصيل عند الطلب",
      "مطبوعات خام لكل معاملة",
      "رقم ربح نهائي واحد",
      "ملف المراجع الخارجي",
    ],
    answerIndex: 0,
    explanation:
      "Governance information design: exception-based, trend-aware, target-anchored — directors see what needs attention and can drill down. Dumps and single numbers starve oversight.",
    explanationAr:
      "تصميم معلومات الحوكمة: قائم على الاستثناءات واعٍ للاتجاهات مرتبط بالمستهدفات — فترى الأمانة ما يستلفت النظر وتتعمق. والمطبوعات والرقم الوحيد يُجوّعان الإشراف.",
    standardTag: "Reporting to the board",
    area: "accounting",
    difficulty: 1,
    source: "ACCA APM past paper (adapted)",
  },
]

/* ==================== ATX (P6) Advanced Taxation — 18 Q ==================== */

export const ATX_PAPER: PaperSeedQ[] = [
  {
    code: "ATX-P1-01",
    stem: "A taxpayer with income above the surcharge threshold makes a $50,000 gift of listed shares to a qualifying charity. The typical treatment is:",
    stemAr: "مكلف يتجاوز دخله عتبة الإضافة يهب مؤسسة مؤهلة أسهمًا مقيدة بقيمة 50,000 دولار. المعالجة المعتادة:",
    options: [
      "Unlimited relief on the gift's market value against the high-income charge, with capital-gains exemption",
      "Relief capped at a small fixed amount only",
      "No relief, and a charge on the gift",
      "Relief deferred until the shares are sold",
    ],
    optionsAr: [
      "إعفاء غير محدود بقيمة السوق ضد إضافة الدخل المرتفع مع إعفاء المكاسب الرأسمالية",
      "إعفاء محدد بمبلغ صغير ثابت فقط",
      "لا إعفاء مع فرض ضريبة على الهبة",
      "إعفاء مؤجل حتى بيع الأسهم",
    ],
    answerIndex: 0,
    explanation:
      "Gifts of listed shares/securities to charity attract unlimited income relief (against high-income charges) AND no CGT on the disposal — the tax-efficient philanthropy route examiners reward.",
    explanationAr:
      "هدايا الأسهم المقيدة للخير تستجلب إعفاء دخل غير محدود (ضد رسوم الدخل المرتفع) وإعفاء من ضريبة المكاسب — وهو طريق البر الخصمي الذي تكافئه اللجان.",
    standardTag: "Personal tax planning",
    area: "accounting",
    difficulty: 2,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-02",
    stem: "In estate/inheritance planning, the MAIN benefit of lifetime gifts into a discretionary trust (beyond the nil-rate band) is:",
    stemAr: "في تخطيط التركات، الفائدة الرئيسية للهبات البينية إلى صندوق تقديري (فوق الشريحة الصفرية):",
    options: [
      "Removing future growth in asset value from the donor's estate after the survival period",
      "Immediate exemption with no conditions",
      "Avoiding all tax in every jurisdiction forever",
      "Reducing income tax on the donor's salary",
    ],
    optionsAr: [
      "إخراج نمو قيمة الأصل مستقبلًا من تركة الواهب بعد مدة البقاء",
      "إعفاء فوري بلا شروط",
      "تجنب كل الضرائب في كل الولايات للأبد",
      "خفض ضريبة الدخل على راتب الواهب",
    ],
    answerIndex: 0,
    explanation:
      "Potentially exempt (or chargeable) transfers start a clock: if the donor survives the statutory period, the gifted asset AND its future appreciation leave the estate — the core of lifetime planning.",
    explanationAr:
      "التحويلات تبدأ عدًّا: إن عاش الواهب المدة النظامية خرج الأصل ونموه المستقبلي من التركة — وهو جوهر التخطيط البيني.",
    standardTag: "Inheritance tax",
    area: "accounting",
    difficulty: 2,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-03",
    stem: "A group reorganisation transfers a trade to a new holding company in exchange for shares. The usual tax outcome under reorganisation relief is:",
    stemAr: "إعادة هيكلة تنقل نشاطًا لشركة قابضة جديدة مقابل أسهم. النتيجة الضريبية المعتادة تحت إعفاء إعادة الهيكلة:",
    options: [
      "No immediate gain or loss — the new shares inherit the old base cost (share-for-share relief)",
      "Immediate chargeable gain on the full value",
      "Immediate trading loss denial forever",
      "Loss of all capital allowances on transfer",
    ],
    optionsAr: [
      "لا ربح أو خسارة فورية — الأسهم الجديدة ترث الكلفة الأساسية القديمة (إعفاء السهم مقابل السهم)",
      "كسب خاضع فوري على كامل القيمة",
      "إنكار خسائر النشاط نهائيًا في الحال",
      "فقدان كل بدلات رأس المال عند النقل",
    ],
    answerIndex: 0,
    explanation:
      "Share-for-share exchanges under reorganisation rules rollover gains: base cost and holding period carry to the new shares; the charge is deferred until an actual disposal.",
    explanationAr:
      "مبادلات السهم مقابل السهم تحت قواعد إعادة الهيكلة تُرجّل الأرباح: الكلفة الأساسية ومدة الحيازة تنتقل للأسهم الجديدة؛ ويؤجل الفرض حتى تصرف فعلي.",
    standardTag: "Corporate reorganisation",
    area: "accounting",
    difficulty: 2,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-04",
    stem: "A company is considering whether to incorporate a sole trader's business. Which factor pushes AGAINST incorporation?",
    stemAr: "شركة تدرس تحول نشاط تاجر فردي إلى شركة. أي عامل يدفع ضد التحول؟",
    options: [
      "Significant extracted profits would suffer double taxation (corporate + dividend)",
      "Limited liability protection",
      "Access to group relief",
      "Incorporation relief on goodwill",
    ],
    optionsAr: [
      "الأرباح المسحوبة كبيرة ستتحمل ازدواجًا (شركات + توزيعات)",
      "حماية المسؤولية المحدودة",
      "النفاذ لتسوية المجموعة",
      "إعفاء التحول على الشهرة",
    ],
    answerIndex: 0,
    explanation:
      "Incorporation analysis: retained profits usually win inside a company (lower CT, no second charge), but large drawings trigger corporation tax AND shareholder taxes — the classic anti-factor.",
    explanationAr:
      "تحليل التحول: الأرباح المُبقاة تكسب داخل الشركة غالبًا (ضريبة أقل ولا فرض ثانٍ)، لكن السحب الكبير يستدعي ضريبة شركات وضرائب مساهم — العامل المعاكس الكلاسيكي.",
    standardTag: "Business structure planning",
    area: "accounting",
    difficulty: 2,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-05",
    stem: "Thin capitalisation rules restrict interest deductions for:",
    stemAr: "قواعد الرسملة الهزيلة تقصر خصوم الفوائد على:",
    options: [
      "Related-party debt that exceeds an arm's-length debt-to-equity ratio",
      "All bank debt",
      "Government bonds",
      "Small businesses' overdrafts",
    ],
    optionsAr: [
      "دين الأطراف ذات العلاقة المتجاوز نسبة دين إلى حقوق تُعامل كمستقلين",
      "كل ديون البنوك",
      "سندات الحكومة",
      "أنظمة السحب على المكشوف للصغار",
    ],
    answerIndex: 0,
    explanation:
      "Anti-erosion rules attack intra-group debt loading: interest on excessive related-party borrowing (beyond arm's-length gearing) is disallowed or recharacterised as a distribution.",
    explanationAr:
    "قواعد منع تآكل الوعاء تهاجم تحميل الدين البيني: فوائد الاقتراض المرتبط الزائد (فوق نسبة مستقلين) تُمنع أو يُعاد وصفها توزيعًا.",
    standardTag: "Corporate tax planning",
    area: "accounting",
    difficulty: 2,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-06",
    stem: "VAT on the sale of a going concern (TOGC) is generally:",
    stemAr: "ضريبة القيمة المضافة على بيع النشاط ككيان مستمر عمومًا:",
    options: [
      "Outside the scope — no VAT charged when the conditions are met",
      "Standard-rated in all cases",
      "Zero-rated with input tax clawback",
      "Exempt with credit",
    ],
    optionsAr: [
      "خارج النطاق — لا تُفرض عند استيفاء الشروط",
      "بالمعدل القياسي في كل الأحوال",
      "بمعدل صفر مع استرداد ضريبة المدخلات",
      "معفاة مع خصم",
    ],
    answerIndex: 0,
    explanation:
      "A transfer of a going concern (assets, customers, no break in trading, proper notification) is outside the scope of VAT — a major planning point in business sales.",
    explanationAr:
      "نقل النشاط المستمر (أصول وعملاء وبلا انقطاع وإخطار سليم) خارج نطاق الضريبة — نقطة تخطيطية كبرى في بيع الأعمال.",
    standardTag: "VAT planning",
    area: "accounting",
    difficulty: 2,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-07",
    stem: "Under the OECD-style hybrid-mismatch rules, a deduction for a payment that is not taxable in the recipient's country is:",
    stemAr: "وفق قواعد عدم التطابق الهجين بنمط OECD، خصم دفعة غير خاضعة في بلد المتلقي:",
    options: [
      "Denied to the extent of the non-taxation",
      "Doubled",
      "Unaffected",
      "Deferred to next year",
    ],
    optionsAr: [
      "يُرفض بقدر اللاخضية",
      "يُضاعف",
      "لا يتأثر",
      "يؤجل للسنة التالية",
    ],
    answerIndex: 0,
    explanation:
      "Hybrid-mismatch (BEPS Action 2) rules kill double-non-taxation: a deduction/no-inclusion outcome is neutralised by denying the deduction at the payer.",
    explanationAr:
      "قواعد عدم التطابق الهجين (إجراء BEPS الثاني) تقتل اللاخضية المزدوجة: فنتيجة الخصم/الإدراج الصفري تُعادل برفض الخصم عند الدافع.",
    standardTag: "International tax",
    area: "accounting",
    difficulty: 3,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-08",
    stem: "A husband and wife company shareholders split dividends equally despite unequal work. Tax planning here relies on:",
    stemAr: "زوجان مساهمان يقسمان التوزيعات بالتساوي رغم تفاوت العمل. التخطيط الضريبي هنا يقوم على:",
    options: [
      "Each spouse's personal allowance and rate bands applying to their own dividend slice",
      "Income splitting being illegal",
      "Dividends being exempt for spouses",
      "Corporation tax being higher for couples",
    ],
    optionsAr: [
      "تطبيق اعفاء كل زوج وشرائح معدله على نصيبه من التوزيعات",
      "تجريم تقسيم الدخل",
      "إعفاء التوزيعات للأزواج",
      "ارتفاع ضريبة الشركات للأزواج",
    ],
    answerIndex: 0,
    explanation:
      "Legitimate income shifting between spouses uses both sets of allowances/bands (subject to settlement rules for outright gifts of income-producing assets to non-working spouses).",
    explanationAr:
      "نقل الدخل المشروع بين الزوجين يستخدم اعفاءات وشرائح الاثنين (مع قواعد الاستيطان للهبات المولدة للدخل لغير العاملة).",
    standardTag: "Family company planning",
    area: "accounting",
    difficulty: 2,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-09",
    stem: "Which approach gives tax relief for research and development most generously in many systems?",
    stemAr: "أي نهج يمنح إعفاءًا أكرم للبحث والتطوير في كثير من النظم؟",
    options: [
      "Enhanced deduction or payable credit at a super-deduction rate on qualifying R&D spend",
      "A standard 10% WDA",
      "No relief until patents are granted",
      "Relief only for capital buildings",
    ],
    optionsAr: [
      "خصم معزز أو ائتمان قابل للسداد بمعدل فائق على الإنفاق المؤهل",
      "بدل تنقيص قياسي 10%",
      "لا إعفاء حتى منح البراءات",
      "إعفاء للمباني الرأسمالية فقط",
    ],
    answerIndex: 0,
    explanation:
      "R&D regimes typically grant a super-deduction (e.g., 130% of spend) or a refundable credit for SMEs — deliberately generous to incentivise innovation expenditure.",
    explanationAr:
      "أنظمة البحث والتطوير تمنح عادة خصمًا فائقًا (130% من الإنفاق مثلًا) أو ائتمانًا قابلًا للاسترداد للصغار — سخاء مقصود لتحفيز الابتكار.",
    standardTag: "Corporate tax planning",
    area: "accounting",
    difficulty: 1,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-10",
    stem: "A company sells a freehold property and buys a new one for its trade. Which relief typically defers the gain?",
    stemAr: "شركة تبيع عقارًا مطلقًا وتشري آخر لنشاطها. أي إعفاء يؤجل الكسب عادة؟",
    options: [
      "Rollover relief on reinvestment of proceeds in qualifying business assets",
      "Holdover relief on gifts",
      "Entrepreneurs' relief on shares",
      "Surrender of trading losses",
    ],
    optionsAr: [
      "إعفاء الترحيل عند إعادة استثمار الحصيلة في أصول نشاط مؤهلة",
      "إعفاء التأجيل للهبات",
      "إعفاء رواد الأعمال للأسهم",
      "التنازل عن خسائر النشاط",
    ],
    answerIndex: 0,
    explanation:
      "Rollover relief: gains on disposals of business assets are deferred where proceeds are reinvested in qualifying replacements — the base cost of the new asset is reduced by the deferred gain.",
    explanationAr:
      "إعفاء الترحيل: تؤجل المكاسب من تصرفات أصول النشاط عند إعادة استثمار الحصيلة في بدائل مؤهلة — وتنقص كلفة الأصل الجديد بالكسب المؤجل.",
    standardTag: "Capital gains planning",
    area: "accounting",
    difficulty: 2,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-11",
    stem: "Penalty regimes for careless document errors generally depend on:",
    stemAr: "أنظمة الجزاءات لأخطاء المستندات المهملة تتوقف عمومًا على:",
    options: [
      "Whether the behaviour was careless vs deliberate (and disclosure being unprompted vs prompted)",
      "The taxpayer's wealth",
      "The colour of the return",
      "The auditor's mood",
    ],
    optionsAr: [
      "كون السلوك مهملاً أم متعمدًا (والإفصاح طوعيًا أم بمطالبة)",
      "ثروة المكلف",
      "لون الإقرار",
      "مزاج المفتش",
    ],
    answerIndex: 0,
    explanation:
      "Modern penalty matrices scale by behaviour (reasonable care → careless → deliberate → concealed) and by disclosure quality (unprompted earns lower percentages) — behaviour-based, not wealth-based.",
    explanationAr:
      "مصفوفات الجزاء الحديثة تتدرج بالسلوك (حيطة معقولة ← إهمال ← تعمد ← إخفاء) وجودة الإفصاح (الطوعي يخفض النسب) — سلوكية لا ثرائية.",
    standardTag: "Tax administration",
    area: "accounting",
    difficulty: 1,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-12",
    stem: "A non-resident company earns rental profit from local property. The typical compliance outcome is:",
    stemAr: "شركة غير مقيمة تحقق ربح إيجار من عقارات محلية. النتيجة الالتزامية المعتادة:",
    options: [
      "It must register and file returns on the local rental income (often with withholding on the tenants/agents)",
      "No local tax at all",
      "Tax only in the residence country",
      "VAT registration automatically",
    ],
    optionsAr: [
      "يجب أن تسجل وتقدم إقرارات على دخل الإيجار المحلي (غالبًا مع استقطاع على المستأجرين/الوكلاء)",
      "لا ضريبة محلية إطلاقًا",
      "الضريبة في بلد الإقامة فقط",
      "تسجيل قيمة مضافة تلقائيًا",
    ],
    answerIndex: 0,
    explanation:
      "Source-state taxation of immovable property is near-universal (treaties preserve it): the non-resident files locally, and collection is often secured by withholding from rent payments.",
    explanationAr:
      "فرض دولة المصدر على العقارات شبه عالمي (والاتفاقيات تقره): يسجل غير المقيم محليًا، ويؤمن التحصيل غالبًا باستقطاع من الإيجارات.",
    standardTag: "International tax",
    area: "accounting",
    difficulty: 2,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-13",
    stem: "For stamp duty on share transfers, the typical charge is:",
    stemAr: "لرسوم الدمغة على نقل الأسهم، الرسم المعتاد:",
    options: [
      "A small ad valorem percentage on the consideration paid",
      "A flat fee per share",
      "A percentage of the company's profits",
      "Nil — shares are always exempt",
    ],
    optionsAr: [
      "نسبة بسيطة من القيمة على المقابل المدفوع",
      "رسم ثابت لكل سهم",
      "نسبة من أرباح الشركة",
      "لا شيء — الأسهم معفاة دائمًا",
    ],
    answerIndex: 0,
    explanation:
      "Stamp duty on share transfers is ad valorem (e.g., 0.5%) on consideration — cheap next to property duty, which is why share deals (buying the company) can outperform asset deals.",
    explanationAr:
      "رسوم نقل الأسهم من القيمة (0.5% مثلًا) على المقابل — زهيدة قياسًا برسوم العقارات، ولذلك قد تتفوق صفقات الأسهم على صفقات الأصول.",
    standardTag: "Transaction taxes",
    area: "accounting",
    difficulty: 1,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-14",
    stem: "A business reclassifies staff as self-employed contractors to save employment taxes. Tax authorities typically respond by:",
    stemAr: "منشأة تعيد تصنيف العاملين متعاقدين مستقلين لتوفير ضرائب التوظيف. ترد المصالح عادةً بـ:",
    options: [
      "Applying employment-status tests and reclassifying with back taxes, interest and penalties",
      "Accepting the labels at face value",
      "Rewarding the creativity",
      "Outlawing self-employment entirely",
    ],
    optionsAr: [
      "تطبيق اختبارات الوظيفة وإعادة التصنيف بضرائب سابقة وفوائد وجزاءات",
      "قبول الوصف كما هو",
      "مكافأة الإبداع",
      "تجريم العمل الحر كليًا",
    ],
    answerIndex: 0,
    explanation:
      "Substance over form: mutuality of obligations, control and personal service decide status. Disguised employment triggers reclassification with arrears — a top compliance risk area.",
    explanationAr:
      "الجوهر فوق الشكل: التبادل والسيطرة والخدمة الشخصية تحدد الصفة. والتوظيف المتنكر يستدعي إعادة التصنيف بمستحقات — وهو من أخطر مناطق الامتثال.",
    standardTag: "Employment taxes",
    area: "accounting",
    difficulty: 2,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-15",
    stem: "The 'substance over form' doctrine in tax law allows authorities to:",
    stemAr: "مبدأ «الجوهر فوق الشكل» في القانون الضريبي يجيز للمصالح أن:",
    options: [
      "Recharacterise transactions according to their commercial reality rather than their legal form",
      "Ignore all contracts",
      "Tax exempt entities arbitrarily",
      "Legislate new taxes without parliament",
    ],
    optionsAr: [
      "تعيد وصف المعاملات بحقيقتها التجارية لا شكلها القانوني",
      "تهمل كل العقود",
      "تفرض على المعفيين جزافًا",
      "تشرع ضرائب بلا برلمان",
    ],
    answerIndex: 0,
    explanation:
      "Substance-over-form and statutory GAARs empower recharacterisation of artificial arrangements — the legal backbone of anti-avoidance, distinct from evasion enforcement.",
    explanationAr:
      "مبدأ الجوهر والقواعد العامة تُمكّن من إعادة وصف الترتيبات المصطنعة — العمود الفقري القانوني لمناهضة التحايل، غير المماحكة في التهرب.",
    standardTag: "Tax ethics",
    area: "ethics",
    difficulty: 1,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-16",
    stem: "A partnership converts to an LLP. In most systems, for tax purposes:",
    stemAr: "شراكة تتحول لشراكة ذات مسؤولية محدودة. ضريبيًا في معظم النظم:",
    options: [
      "The LLP remains transparent — partners taxed as before on their profit shares",
      "The LLP becomes a taxable company automatically",
      "All past losses are cancelled",
      "A new VAT registration is impossible",
    ],
    optionsAr: [
      "تبقى شفافة — يفرض للشركاء كما سبق على حصصهم",
      "تصبح شركة خاضعة تلقائيًا",
      "تلغى كل الخسائر السابقة",
      "يستحيل تسجيل قيمة مضافة جديد",
    ],
    answerIndex: 0,
    explanation:
      "LLPs usually keep partnership tax transparency (members self-assessed on profit shares) while gaining corporate personality and limited liability — a favourite exam contrast with companies.",
    explanationAr:
      "شراكات المسؤولية المحدودة تحفظ عادة شفافية الشراكة (كل عضو يقيَّم على حصته) مع اكتساب الشخصية الاعتبارية والمسؤولية المحدودة — مقارنة الامتحان المحببة مع الشركات.",
    standardTag: "Business structure planning",
    area: "accounting",
    difficulty: 2,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-17",
    stem: "Advance pricing agreements (APAs) exist to give multinationals:",
    stemAr: "اتفاقيات الأسعار المسبقة وجدت لتمنح المتعددات الجنسيات:",
    options: [
      "Certainty on the transfer-pricing method accepted in advance for their intra-group dealings",
      "An exemption from VAT",
      "A lower payroll rate",
      "Immunity from audit forever",
    ],
    optionsAr: [
      "اليقين بقبول طريقة تسعير النقل مسبقًا لمعاملاتهم البينية",
      "إعفاءً من القيمة المضافة",
      "معدل رواتب أدنى",
      "حصانة من المراجعة للأبد",
    ],
    answerIndex: 0,
    explanation:
      "An APA is a binding pre-agreement with one or more tax authorities on the arm's-length method — replacing post-audit disputes with upfront certainty (unilateral, bilateral or multilateral).",
    explanationAr:
      "الاتفاقية المسبقة التزام متفق سلفًا مع مصلحة أو أكثر بشكيلة معيار المستقلين — تستبدل نزاعات ما بعد المراجعة بيقين مسبق.",
    standardTag: "International tax",
    area: "accounting",
    difficulty: 2,
    source: "ACCA ATX past paper (adapted)",
  },
  {
    code: "ATX-P1-18",
    stem: "In a tax dispute over a technical treatment, the client's advisor discovers favourable case law the authority missed. Professional ethics REQUIRE the advisor to:",
    stemAr: "في نزاع ضريبي بشأن معالجة فنية، يكتشف المستشار سابقة قضائية لصالح العميل أغفلتها المصلحة. أخلاقيات المهنة توجب على المستشار:",
    options: [
      "Present the law accurately and honestly in the client's response — advocacy within truthful bounds",
      "Hide it if it helps nobody",
      "Fabricate further authorities",
      "Refuse to represent the client at all",
    ],
    optionsAr: [
      "عرض القانون بدقة وصدق في مذكرات العميل — مرافعة في حدود الحقيقة",
      "إخفاؤها إن لم تنفع أحدًا",
      "اختلاق سوابق إضافية",
      "الامتناع عن تمثيل العميل أصلًا",
    ],
    answerIndex: 0,
    explanation:
      "Professional duty: be candid and not misleading — which permits putting the client's best truthful case. Fabrication or suppression of material facts breaches both ethics and officer-of-the-court duties.",
    explanationAr:
      "الواجب المهني: الصدق وعدم التضليل — يجيز عرض أفضل قضية صادقة للعميل. أما الاختلاق أو كتم الوقائع الجوهرية فيخالف الأخلاق وواجبات النزاهة أمام الجهات.",
    standardTag: "Tax ethics",
    area: "ethics",
    difficulty: 2,
    source: "ACCA ATX past paper (adapted)",
  },
]
