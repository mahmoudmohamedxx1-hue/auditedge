/** v24 seed data — ACCA past papers for the rest of the syllabus, part 1:
 *  - BT (F1) Business & Technology — 18 questions (Applied Knowledge)
 *  - MA (F2) Management Accounting — 18 questions (Applied Knowledge)
 *
 *  Exam-style objective-test questions in the pattern of real ACCA sittings:
 *  scenario stems, 2-mark single-topic items, examiner-style distractors. */

export type PaperSeedQ = {
  code: string
  stem: string
  stemAr: string
  options: string[]
  optionsAr: string[]
  answerIndex: number
  explanation: string
  explanationAr: string
  standardTag: string
  area: "auditing" | "accounting" | "egypt" | "ethics"
  difficulty: 1 | 2 | 3
  source: string
}

/* ==================== BT (F1) Business & Technology — 18 Q ==================== */

export const BT_PAPER: PaperSeedQ[] = [
  {
    code: "BT-P1-01",
    stem: "A pharmaceutical company is recruiting a new finance director. Which role in the organisation should take lead responsibility for the appointment process?",
    stemAr: "شركة أدوية تعيّن مديرًا ماليًا جديدًا. أي دور في المنظمة يجب أن يتحمل المسؤولية الرئيسية عن عملية التعيين؟",
    options: [
      "The board nomination committee",
      "The external auditor",
      "The company secretary",
      "The head of internal audit",
    ],
    optionsAr: [
      "لجنة الترشيحات بمجلس الإدارة",
      "المراجع الخارجي",
      "أمين الشركة",
      "رئيس المراجعة الداخلية",
    ],
    answerIndex: 0,
    explanation:
      "Director appointments are a core governance task delegated to the nomination committee of the board — it leads the process and recommends to the full board. The external auditor, company secretary and internal audit all play supporting (or no) roles in recruitment.",
    explanationAr:
      "تعيين المديرين مهمة حوكمة جوهرية تُفوَّض إلى لجنة الترشيحات بمجلس الإدارة — فهي تقود العملية وترشح للمجلس بالكامل. أما المراجع الخارجي وأمين الشركة والمراجعة الداخلية فأدوارهم مساندة أو منعدمة في التوظيف.",
    standardTag: "Governance",
    area: "accounting",
    difficulty: 1,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-02",
    stem: "Under agency theory, which combination best protects shareholders against management's divergent interests?",
    stemAr: "وفق نظرية الوكالة، أي مجموعة تحمي المساهمين على أفضل وجه من تعارض مصالح الإدارة؟",
    options: [
      "Non-executive directors, an audit committee and the external audit",
      "Higher sales targets, larger bonuses and longer contracts",
      "Matrix structures, delayering and empowerment of staff",
      "PESTEL analysis, Porter's five forces and a SWOT review",
    ],
    optionsAr: [
      "مديرون غير تنفيذيين مستقلون، ولجنة مراجعة، ومراجعة خارجية",
      "أهداف بيع أعلى، ومكافآت أكبر، وعقود أطول",
      "هياكل مصفوفية، وتقليل المستويات الإدارية، وتمكين الموظفين",
      "تحليل PESTEL، وقوى بورتر الخمس، ومراجعة SWOT",
    ],
    answerIndex: 0,
    explanation:
      "The classic corporate-governance answer to the agency problem: independent non-executives challenge executives, the audit committee oversees reporting integrity, and the external audit verifies it. The other options are management tools, not accountability devices.",
    explanationAr:
      "الإجابة الكلاسيكية في حوكمة الشركات لمشكلة الوكالة: مديرون غير تنفيذيين مستقلون يراجعون التنفيذيين، ولجنة مراجعة تراقب سلامة التقارير، ومراجعة خارجية تتحقق منها. أما الخيارات الأخرى فهي أدوات إدارية لا أدوات مساءلة.",
    standardTag: "Agency & governance",
    area: "accounting",
    difficulty: 1,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-03",
    stem: "A government raises interest rates to fight inflation while cutting a special employment tax. Which macroeconomic forces are being used?",
    stemAr: "حكومة ترفع أسعار الفائدة لمحاربة التضخم وتخفض ضريبة تشغيل خاصة. أي أدوات اقتصادية كلية تُستخدم؟",
    options: [
      "Monetary policy tightening and fiscal policy easing",
      "Fiscal policy tightening and monetary policy easing",
      "Both tightening",
      "Both easing",
    ],
    optionsAr: [
      "تشديد السياسة النقدية وتخفيف السياسة المالية",
      "تشديد السياسة المالية وتخفيف السياسة النقدية",
      "تشديد كلتيهما",
      "تخفيف كلتيهما",
    ],
    answerIndex: 0,
    explanation:
      "Interest rates are the central bank's monetary lever — raising them tightens. Taxation is a government fiscal lever — cutting it eases. The pairing is deliberately mixed, which is why recognising which arm owns which tool matters.",
    explanationAr:
      "أسعار الفائدة هي أداة البنك المركزي النقدية — ورفعها تشديد. أما الضرائب فأداة حكومية مالية — وتخفيضها تخفيف. الدمج بينهما مقصود، ولذلك يهم التمييز بين الجهة المالكة لكل أداة.",
    standardTag: "Macro-economics",
    area: "accounting",
    difficulty: 1,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-04",
    stem: "Which stakeholder group would MOST strongly support a hostile takeover bid that promises large efficiency savings?",
    stemAr: "أي مجموعة أصحاب مصلحة ستدعم بأشد قوة عرض استحواذ معادٍ يَعِد بوفورات كفاءة كبيرة؟",
    options: [
      "Shareholders of the target company",
      "Employees of the target company",
      "The local community around the target's plants",
      "Middle managers of the target company",
    ],
    optionsAr: [
      "مساهمو الشركة المستهدفة",
      "موظفو الشركة المستهدفة",
      "المجتمع المحلي حول مصانع الشركة المستهدفة",
      "المديرون الأوسط بالشركة المستهدفة",
    ],
    answerIndex: 0,
    explanation:
      "Mendelow's logic: shareholders gain from the takeover premium and efficiency returns, while employees, managers and communities typically bear the cost — their interests point the opposite way.",
    explanationAr:
      "وفق منطق ماندلو: المساهمون يكسبون علاوة الاستحواذ وعوائد الكفاءة، بينما يتحمل الموظفون والمديرون والمجتمعات التكلفة عادة — مصالحهم تتجه عكس ذلك تمامًا.",
    standardTag: "Stakeholders",
    area: "accounting",
    difficulty: 1,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-05",
    stem: "A firm's departments report both to a product division head and to a functional head at headquarters. Which structure is this?",
    stemAr: "إدارات الشركة ترفع التقارير لرئيس قسم منتجات ولرئيس وظيفي في المركز الرئيسي معًا. ما هذا الهيكل؟",
    options: ["Matrix", "Divisional", "Entrepreneurial", "Bureaucratic / machine"],
    optionsAr: ["مصفوفة", "أقسام", "ريادي", "بيروقراطي / آلي"],
    answerIndex: 0,
    explanation:
      "Dual reporting lines — product and function — are the defining feature of a matrix structure. Divisional structures have single lines around products; entrepreneurial is a simple flat form; machine bureaucracy is rules-driven and centralised.",
    explanationAr:
      "خطوط التبعية المزدوجة — للمنتج وللوظيفة — هي السمة المميزة للهيكل المصفوفي. هياكل الأقسام لها خط واحد حول المنتجات؛ والريادي شكل بسيط مسطح؛ والبيروقراطية الآلية قائمة على قواعد ومركزية.",
    standardTag: "Organisation structure",
    area: "accounting",
    difficulty: 1,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-06",
    stem: "According to Maslow's hierarchy, which need is pursued LAST as an employee develops?",
    stemAr: "وفق هرم ماسلو، أي حاجة يُسعى إليها أخيرًا مع تطور الموظف؟",
    options: ["Self-actualisation", "Safety", "Esteem of colleagues", "Physiological"],
    optionsAr: ["تحقيق الذات", "الأمان", "تقدير الزملاء", "الاحتياجات الفسيولوجية"],
    answerIndex: 0,
    explanation:
      "Self-actualisation sits at the top of the pyramid and can only be pursued once physiological, safety, social and esteem needs are reasonably satisfied. It is the growth need that is never fully met.",
    explanationAr:
      "تحقيق الذات يقع في قمة الهرم ولا يمكن السعي إليه إلا بعد إشباع الاحتياجات الفسيولوجية والأمان والاجتماعية والتقدير بدرجة معقولة. إنها حاجة النمو التي لا تُشبع أبدًا بالكامل.",
    standardTag: "Motivation",
    area: "accounting",
    difficulty: 1,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-07",
    stem: "A production manager is rated 'high concern for people, low concern for task' on Blake & Mouton's grid. Which label fits?",
    stemAr: "مدير إنتاج يُقيَّم «اهتمام عالٍ بالناس، اهتمام منخفض بالمهمة» على شبكة بليك وموتون. ما التسمية المناسبة؟",
    options: ["Country club", "Team leader", "Impoverished", "Produce or perish"],
    optionsAr: ["النادي الريفي", "قائد الفريق", "المهمل", "أنجِ أو فَنَ"],
    answerIndex: 0,
    explanation:
      "Blake & Mouton: 1,9 is the 'country club' — warm relations, weak task discipline. 9,9 team leader scores high on both; 1,1 impoverished scores low on both; 9,1 'produce or perish' is task-obsessed.",
    explanationAr:
      "بليك وموتون: (1،9) هو «النادي الريفي» — علاقات دافئة وانضباط ضعيف في المهام. (9،9) قائد الفريق مرتفع في الاثنين؛ (1،1) المهمل منخفض فيهما؛ (9،1) «أنجِ أو فَنَ» مُغرًم بالمهمة فقط.",
    standardTag: "Leadership",
    area: "accounting",
    difficulty: 1,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-08",
    stem: "A team has just suffered the departure of a popular member and performance has dipped. Per Tuckman, which stage is it re-entering?",
    stemAr: "فريق فقد للتو عضوًا محبوبًا وانخفض أداؤه. وفق توكمان، أي مرحلة يعيشها الآن؟",
    options: ["Storming", "Forming", "Adjourning", "Performing"],
    optionsAr: ["الاصطدام", "التشكيل", "الانحلال", "الأداء"],
    answerIndex: 0,
    explanation:
      "A membership change knocks a performing team back: after re-forming (purpose is re-established with the changed group), friction re-emerges — storming — before norms and performance rebuild.",
    explanationAr:
      "تغيير الأعضاء يُرجِع فريقًا مؤديًا للخلف: بعد إعادة التشكيل تعود الاحتكاكات — الاصطدام — قبل أن تُعاد الأعراف ويعود الأداء.",
    standardTag: "Teams",
    area: "accounting",
    difficulty: 2,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-09",
    stem: "An auditor's report is a core element of the corporate governance framework because it provides:",
    stemAr: "تقرير المراجع عنصر أساسي في إطار حوكمة الشركات لأنه يوفر:",
    options: [
      "Independent assurance on the financial statements for shareholders",
      "Management with a tool to discipline the finance function",
      "The stock exchange with a forecast of future profits",
      "Lenders with a guarantee that debts will be repaid",
    ],
    optionsAr: [
      "تأكيدًا مستقلًا على القوائم المالية لصالح المساهمين",
      "للإدارة أداةً لضبط الوظيفة المالية",
      "للبورصة توقُّعًا بأرباح المستقبل",
      "للمقرضين ضمانًا بسداد الديون",
    ],
    answerIndex: 0,
    explanation:
      "The external audit's governance role: an independent expert opinion narrowing the information asymmetry between directors and shareholders. It is not a forecast, a guarantee, or a management tool.",
    explanationAr:
      "دور المراجعة الخارجية في الحوكمة: رأي خبير مستقل يقلّص فجوة المعلومات بين المديرين والمساهمين. وهي ليست توقعًا ولا ضمانًا ولا أداة إدارية.",
    standardTag: "Governance",
    area: "accounting",
    difficulty: 1,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-10",
    stem: "Which procedure is an example of BIG data being used in audit practice?",
    stemAr: "أي إجراء يُعد مثالًا على استخدام البيانات الضخمة في ممارسة المراجعة؟",
    options: [
      "Analysing 100% of a client's supplier invoices for duplicate payments",
      "Reading the prior-year management letter",
      "Interviewing the purchase ledger clerk",
      "Inspecting a sample of ten signed contracts",
    ],
    optionsAr: [
      "تحليل 100% من فواتير الموردين لاكتشاف المدفوعات المكررة",
      "قراءة خطاب الإدارة الخاص بالسنة السابقة",
      "مقابلة موظف دفتر المشتريات",
      "فحص عينة من عشرة عقود موقعة",
    ],
    answerIndex: 0,
    explanation:
      "Big-data auditing means whole-population analytics — high volume, machine-processed testing such as duplicate-payment screening across every invoice. The other options are traditional evidence procedures.",
    explanationAr:
      "المراجعة بالبيانات الضخمة تعني تحليلات المجتمع الكامل — اختبارات بحجم هائل تعالجها الآلة مثل فحص التكرارات في كل فاتورة. أما الخيارات الأخرى فإجراءات أدلة تقليدية.",
    standardTag: "Technology & data",
    area: "accounting",
    difficulty: 1,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-11",
    stem: "A company storing customer card details suffers a ransomware attack. Beyond the direct loss, the MOST severe consequence is likely to be:",
    stemAr: "شركة تختبي بيانات بطاقات العملاء وتتعرض لهجوم فدية. أشد عاقبة محتملة بعد الخسارة المباشرة هي:",
    options: [
      "Loss of customer trust and regulatory penalties under data-protection law",
      "A small increase in insurance premiums",
      "The need to reprint business cards",
      "A temporary fall in search-engine traffic",
    ],
    optionsAr: [
      "فقدان ثقة العملاء وغرامات تنظيمية بموجب قانون حماية البيانات",
      "زيادة طفيفة في أقساط التأمين",
      "الحاجة لإعادة طباعة بطاقات العمل",
      "انخفاض مؤقت في حركة محركات البحث",
    ],
    answerIndex: 0,
    explanation:
      "Data breaches involving payment data trigger the heaviest consequences: reputational damage with customers and large fines under data-protection regimes — far outweighing the operational nuisance in the other options.",
    explanationAr:
      "اختراقات بيانات الدفع تستدعي أثقل العواقب: ضرر السمعة لدى العملاء وغرامات ضخمة بموجب أنظمة حماية البيانات — تفوق بمراحل الإزعاجات التشغيلية في الخيارات الأخرى.",
    standardTag: "Cyber-security",
    area: "accounting",
    difficulty: 1,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-12",
    stem: "Warranty, after-sales service and complaint handling belong to which elements of the extended marketing mix?",
    stemAr: "الضمان وخدمة ما بعد البيع ومعالجة الشكاوى تتبع أي عناصر في المزيج التسويقي الموسع؟",
    options: ["People, process and physical evidence", "Price", "Promotion", "Place"],
    optionsAr: ["الناس والعمليات والأدلة المادية", "السعر", "الترويج", "التوزيع"],
    answerIndex: 0,
    explanation:
      "In the services marketing mix (7 Ps), service-quality dimensions — warranties, after-sales support, complaint handling — belong to People/Process/Physical evidence, not to price, promotion or place.",
    explanationAr:
      "في المزيج التسويقي الموسع للخدمات (7 Ps) تندرج أبعاد جودة الخدمة — الضمانات ودعم ما بعد البيع ومعالجة الشكاوى — تحت الناس والعمليات والأدلة المادية، لا تحت السعر أو الترويج أو التوزيع.",
    standardTag: "Marketing mix",
    area: "accounting",
    difficulty: 2,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-13",
    stem: "A central bank keeps money cheap while the government runs a large deficit. In the short run, bond prices and private investment respectively:",
    stemAr: "بنك مركزي يُبقي النقود رخيصة بينما تُشغِّل الحكومة عجزًا كبيرًا. على المدى القصير، أسعار السندات والاستثمار الخاص:",
    options: [
      "Rise; private investment can eventually be crowded out",
      "Fall; private investment expands with the cheap money",
      "Stay flat; private investment is unaffected by fiscal policy",
      "Rise; private investment expands in every sector equally",
    ],
    optionsAr: [
      "ترتفع؛ وقد يُزاح الاستثمار الخاص في نهاية المطاف",
      "تنخفض؛ ويتوسع الاستثمار الخاص مع النقود الرخيصة",
      "تبقى ثابتة؛ ولا يتأثر الاستثمار الخاص بالسياسة المالية",
      "ترتفع؛ ويتوسع الاستثمار الخاص في كل القطاعات بالتساوي",
    ],
    answerIndex: 0,
    explanation:
      "Cheap money lifts bond prices (yields fall). But a big deficit absorbs real resources and can crowd out private spending as capacity tightens — the classic mixed-signal macro question.",
    explanationAr:
      "النقود الرخيصة ترفع أسعار السندات (تنخفض العوائد). لكن العجز الكبير يستوعب موارد حقيقية وقد يُزاح الإنفاق الخاص مع اشتداد الطاقة — سؤال الاقتصاد الكلي ذو الإشارات المختلطة الكلاسيكي.",
    standardTag: "Macro-economics",
    area: "accounting",
    difficulty: 2,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-14",
    stem: "Which of the following is an INTERNAL stakeholder of a listed manufacturer?",
    stemAr: "أي مما يلي يُعد صاحب مصلحة داخليًا لدى شركة مصنعة مُدرجة؟",
    options: [
      "The production director",
      "The tax authority",
      "The largest institutional shareholder",
      "The main raw-material supplier",
    ],
    optionsAr: [
      "مدير الإنتاج",
      "مصلحة الضرائب",
      "أكبر مساهم مؤسسي",
      "المورد الرئيسي للمواد الخام",
    ],
    answerIndex: 0,
    explanation:
      "Internal stakeholders participate in the organisation itself — managers and employees. Shareholders, tax authorities and suppliers are connected (external) parties, however powerful.",
    explanationAr:
      "أصحاب المصلحة الداخليون يشاركون في المنظمة ذاتها — المديرون والموظفون. أما المساهمون ومصلحة الضرائب والموردون فأطراف خارجية مهما بلغت قوتها.",
    standardTag: "Stakeholders",
    area: "accounting",
    difficulty: 1,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-15",
    stem: "An insurance company replaces branch sales agents with a mobile app. In Porter's value-chain terms this is:",
    stemAr: "شركة تأمين تستبدل وكلاء البيع بالفروع بتطبيق هاتفي. بمصطلحات سلسلة القيمة لبورتر يُعد هذا:",
    options: [
      "A technology change re-engineering the primary activity of distribution",
      "An infrastructure change with no effect on primary activities",
      "A procurement change",
      "An inbound-logistics change",
    ],
    optionsAr: [
      "تغييرًا تقنيًا يعيد هندسة النشاط الأساسي: التوزيع",
      "تغييرًا في البنية التحتية دون أثر على الأنشطة الأساسية",
      "تغييرًا في المشتريات",
      "تغييرًا في اللوجستيات الداخلة",
    ],
    answerIndex: 0,
    explanation:
      "Distribution is a primary value-chain activity; technology (a support activity) is being used to re-engineer it. The distractors mislabel the primary/support split — a favourite BT trap.",
    explanationAr:
      "التوزيع نشاط أساسي في سلسلة القيمة؛ ويُستخدم التكنولوجيا (نشاط مساند) لإعادة هندسته. المشتتات تخطئ تصنيف الأساسي/المساند — فخ محبب في BT.",
    standardTag: "Value chain",
    area: "accounting",
    difficulty: 2,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-16",
    stem: "Which corporate-governance arrangement is designed MOST directly to protect whistle-blowers?",
    stemAr: "أي ترتيب في حوكمة الشركات صُمم مباشرة لحماية المبلغين عن المخالفات؟",
    options: [
      "Confidential reporting channels to the audit committee that bypass line management",
      "Publishing the annual report on the company website",
      "Rotating the audit partner every few years",
      "Holding the AGM in a large venue with webcasting",
    ],
    optionsAr: [
      "قنوات إبلاغ سرية إلى لجنة المراجعة تتجاوز الإدارة المباشرة",
      "نشر التقرير السنوي على موقع الشركة",
      "تدوير شريك المراجعة كل بضع سنوات",
      "عقد الجمعية العمومية في قاعة كبيرة مع بث مباشر",
    ],
    answerIndex: 0,
    explanation:
      "Speak-up arrangements — confidential channels routing concerns straight to the audit committee — are the structural safeguard that makes whistle-blowing survivable, and a core feature of modern governance codes.",
    explanationAr:
      "ترتيبات الإبلاغ — قنوات سرية توجّه المخاوف مباشرة إلى لجنة المراجعة — هي الضمان الهيكلي الذي يجعل الإبلاغ ممكنًا، وهي سمة جوهرية في مدونات الحوكمة الحديثة.",
    standardTag: "Governance",
    area: "accounting",
    difficulty: 2,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-17",
    stem: "Which pairing of culture type (Handy) and organisation is correct?",
    stemAr: "أي اقتران بين نوع الثقافة (هاندي) والمنظمة صحيح؟",
    options: [
      "Task culture — a project-based consultancy",
      "Role culture — a start-up of five friends",
      "Power culture — a government ministry",
      "Person culture — a bank's head office",
    ],
    optionsAr: [
      "ثقافة المهمة — شركة استشارية قائمة على المشروعات",
      "ثقافة الدور — شركة ناشئة من خمسة أصدقاء",
      "ثقافة القوة — وزارة حكومية",
      "ثقافة الشخص — المركز الرئيسي لبنك",
    ],
    answerIndex: 0,
    explanation:
      "Handy: task culture is team/matrix-driven (consultancies); role culture is bureaucratic (ministries); power culture is a web around one figure (small founder firms); person culture serves individuals (partnerships of experts).",
    explanationAr:
      "هاندي: ثقافة المهمة قائمة على الفرق (الاستشارات)؛ ثقافة الدور بيروقراطية (الوزارات)؛ ثقافة القوة شبكة حول شخص واحد (شركات المؤسس الصغيرة)؛ ثقافة الشخص تخدم الأفراد (شراكات الخبراء).",
    standardTag: "Culture",
    area: "accounting",
    difficulty: 2,
    source: "ACCA BT past paper (adapted)",
  },
  {
    code: "BT-P1-18",
    stem: "A board has 10 directors of whom only 2 are independent non-executives, and the CEO is also the chair. Its governance is BEST described as:",
    stemAr: "مجلس يضم 10 مديرين، اثنان فقط منهم غير تنفيذيين مستقلين، والرئيس التنفيذي هو نفسه رئيس المجلس. أفضل وصف لحوكمتها:",
    options: [
      "Non-compliant with the spirit of the code on both board balance and separation of roles",
      "Fully compliant because codes are voluntary",
      "Compliant as long as the external auditor approves the accounts",
      "Acceptable because executive directors know the business best",
    ],
    optionsAr: [
      "مخالفة لروح المدونة في توازن المجلس وفصل الدورين معًا",
      "متوافقة تمامًا لأن المدونات طوعية",
      "متوافقة ما دام المراجع الخارجي يعتمد الحسابات",
      "مقبولة لأن المديرين التنفيذيين أعرف بالأعمال",
    ],
    answerIndex: 0,
    explanation:
      "Board balance (enough independents to challenge) and splitting chair/CEO are flagship principles; failing both signals a governance deficit even under 'comply or explain' — the explanation here would not survive scrutiny.",
    explanationAr:
      "توازن المجلس (عدد كافٍ من المستقلين للمساءلة) وفصل منصبي رئيس المجلس والرئيس التنفيذي مبدآن علم؛ والإخلال بهما معًا يشير لعجز حوكمي حتى مع نظام «التزم أو فسّر» — فالتفسير هنا لن يصمد أمام التدقيق.",
    standardTag: "Governance",
    area: "accounting",
    difficulty: 2,
    source: "ACCA BT past paper (adapted)",
  },
]

/* ==================== MA (F2) Management Accounting — 18 Q ==================== */

export const MA_PAPER: PaperSeedQ[] = [
  {
    code: "MA-P1-01",
    stem: "A cost centre incurs fixed overheads of $60,000 and variable overheads of $4 per machine hour. 12,000 hours are worked. Total overhead cost is:",
    stemAr: "مركز تكلفة يتحمل تكاليف صناعية ثابتة 60,000 دولار ومتغيرة 4 دولارات لكل ساعة آلة. اعتُملت 12,000 ساعة. إجمالي التكاليف الصناعية:",
    options: ["$108,000", "$96,000", "$60,048", "$240,000"],
    optionsAr: ["108,000 دولار", "96,000 دولار", "60,048 دولارًا", "240,000 دولار"],
    answerIndex: 0,
    explanation:
      "Fixed $60,000 + (12,000 × $4) = $60,000 + $48,000 = $108,000. $96,000 forgets the fixed element; $240,000 multiplies the fixed cost by hours.",
    explanationAr:
      "الثابتة 60,000 + (12,000 × 4) = 60,000 + 48,000 = 108,000 دولار. 96,000 تنسى العنصر الثابت؛ و240,000 تضرب التكلفة الثابتة في الساعات.",
    standardTag: "Cost behaviour",
    area: "accounting",
    difficulty: 1,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-02",
    stem: "At 8,000 units total cost is $130,000; at 12,000 units it is $180,000. Using the high–low method, the variable cost per unit is:",
    stemAr: "عند 8,000 وحدة بلغت التكلفة الكلية 130,000 دولار؛ وعند 12,000 وحدة 180,000 دولار. بطريقة «الأعلى والأدنى»، التكلفة المتغيرة للوحدة:",
    options: ["$12.50", "$11.25", "$15.00", "$16.25"],
    optionsAr: ["12.50 دولارًا", "11.25 دولارًا", "15.00 دولارًا", "16.25 دولارًا"],
    answerIndex: 0,
    explanation:
      "High–low: ($180,000 − $130,000) ÷ (12,000 − 8,000) = $50,000 ÷ 4,000 = $12.50 per unit. Fixed cost would then be $180,000 − 12,000 × $12.50 = $30,000.",
    explanationAr:
      "الأعلى والأدنى: (180,000 − 130,000) ÷ (12,000 − 8,000) = 50,000 ÷ 4,000 = 12.50 دولارًا للوحدة. وتكون الثابتة = 180,000 − 12,000 × 12.50 = 30,000 دولار.",
    standardTag: "Cost estimation",
    area: "accounting",
    difficulty: 1,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-03",
    stem: "Which costing method charges overheads to products using cost drivers consumed per unit?",
    stemAr: "أي طريقة تحميل تحمّل التكاليف على المنتجات باستخدام محركات تكلفة تُستهلك لكل وحدة؟",
    options: [
      "Activity-based costing",
      "Absorption costing with a single direct-labour rate",
      "Marginal costing",
      "Standard costing",
    ],
    optionsAr: [
      "التكلفة على أساس الأنشطة ABC",
      "التحميل بمعدل واحد لعمالة المباشرة",
      "التكلفة الحدية",
      "التكلفة المعيارية",
    ],
    answerIndex: 0,
    explanation:
      "ABC traces overheads to activities via cost drivers (set-ups, orders, inspections) then to products by driver consumption. Single-rate absorption spreads overheads arbitrarily; marginal costing excludes fixed overheads from units; standard costing is a control technique, not a tracing method.",
    explanationAr:
      "ABC تتبع التكاليف الصناعية إلى الأنشطة عبر محركات التكلفة (التجهيزات، الأوامر، الفحوص) ثم إلى المنتجات باستهلاك المحرك. التحميل بمعدل واحد يوزع جزافًا؛ والتكلفة الحدية تستبعد الثابت من الوحدات؛ والمعيارية أسلوب رقابة لا تتبع.",
    standardTag: "ABC",
    area: "accounting",
    difficulty: 1,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-04",
    stem: "A process has 1,000 units input, 800 completed, and 200 closing WIP 60% complete for labour, with no losses. Equivalent units for labour are:",
    stemAr: "عملية إدخال 1,000 وحدة، اكتمل 800، وتحت تشغيل ختامي 200 وحدة مكتملة 60% للعمالة، بلا هوالك. الوحدات المكافئة للعمالة:",
    options: ["920", "880", "1,120", "800"],
    optionsAr: ["920", "880", "1,120", "800"],
    answerIndex: 0,
    explanation:
      "Completed = 800 units (100%); closing WIP = 200 × 60% = 120. Equivalent units = 800 + 120 = 920. The distractor 1,120 wrongly adds the full WIP on top of output; 800 ignores WIP entirely.",
    explanationAr:
      "التام = 800 وحدة (100%)؛ وتحت التشغيل الختامي = 200 × 60% = 120. المكافئ = 800 + 120 = 920. المشتت 1,120 يجمع تحت التشغيل كاملًا فوق الإنتاج؛ و800 تهمل تحت التشغيل كليًا.",
    standardTag: "Process costing",
    area: "accounting",
    difficulty: 2,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-05",
    stem: "Sales are budgeted at $500,000 with contribution margin ratio of 40% and fixed costs of $150,000. The margin of safety as a % of budgeted sales is:",
    stemAr: "المبيعات المخططة 500,000 دولار بهامش مساهمة 40% وتكاليف ثابتة 150,000 دولار. هامش الأمان كنسبة من المبيعات المخططة:",
    options: ["25%", "30%", "75%", "40%"],
    optionsAr: ["25%", "30%", "75%", "40%"],
    answerIndex: 0,
    explanation:
      "Breakeven sales = $150,000 ÷ 0.40 = $375,000. Margin of safety = ($500,000 − $375,000) ÷ $500,000 = 25%. (75% inverts the fraction — the classic error.)",
    explanationAr:
      "مبيعات التعادل = 150,000 ÷ 0.40 = 375,000 دولار. هامش الأمان = (500,000 − 375,000) ÷ 500,000 = 25%. (و75% تقلب الكسر — الخطأ الكلاسيكي.)",
    standardTag: "CVP analysis",
    area: "accounting",
    difficulty: 2,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-06",
    stem: "Actual material cost is $47,600; the flexed budget allowed $46,200 for the actual output. The total material variance is:",
    stemAr: "التكلفة الفعلية للمواد 47,600 دولار؛ وسمح المخيط المرن بـ 46,200 للمخرجات الفعلية. انحراف المواد الإجمالي:",
    options: ["$1,400 adverse", "$1,400 favourable", "$3,400 adverse", "Nil — budgets are never flexed for output"],
    optionsAr: ["1,400 دولار عكسي", "1,400 دولار ملائم", "3,400 دولار عكسي", "لا شيء — لا تُمطط الموازنات أبدًا"],
    answerIndex: 0,
    explanation:
      "Comparing actual spend with the flexed allowance: $47,600 − $46,200 = $1,400 adverse. Flexing for actual output is exactly the point of a flexed budget.",
    explanationAr:
      "بمقارنة الإنفاق الفعلي بالمسموح المرن: 47,600 − 46,200 = 1,400 دولار عكسي. والمطط لأجل المخرجات الفعلية هو جوهر الموازنة المرنة.",
    standardTag: "Variance analysis",
    area: "accounting",
    difficulty: 1,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-07",
    stem: "Standard price is $5/kg. 10,000 kg are bought for $52,000, of which 9,600 kg are issued to production. The material price variance is:",
    stemAr: "السعر المعياري 5 دولارات/كجم. اشتُري 10,000 كجم بـ 52,000 دولار، صدر منها للإنتاج 9,600 كجم. انحراف سعر المواد:",
    options: ["$2,000 adverse", "$1,920 adverse", "$2,000 favourable", "$4,000 adverse"],
    optionsAr: ["2,000 دولار عكسي", "1,920 دولارًا عكسيًا", "2,000 دولار ملائم", "4,000 دولار عكسي"],
    answerIndex: 0,
    explanation:
      "Price variance uses PURCHASED quantities: 10,000 kg × ($5.20 actual − $5.00 standard) = $2,000 adverse. Using issued units (9,600) gives the $1,920 trap.",
    explanationAr:
      "انحراف السعر يُحسب على الكميات المشتراة: 10,000 × (5.20 فعلي − 5.00 معياري) = 2,000 دولار عكسي. واستخدام الصادر (9,600) هو فخ 1,920.",
    standardTag: "Variance analysis",
    area: "accounting",
    difficulty: 2,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-08",
    stem: "A company making three products faces a single limiting factor (machine hours). It should rank production by:",
    stemAr: "شركة تنتج ثلاثة منتجات وتواجه موردًا واحدًا محددًا (ساعات آلات). ينبغي أن ترتب الإنتاج حسب:",
    options: [
      "Contribution per unit of the scarce resource",
      "Contribution per unit of product",
      "Profit per unit of product",
      "Selling price per unit of product",
    ],
    optionsAr: [
      "المساهمة لكل وحدة من المورد النادر",
      "المساهمة لكل وحدة منتج",
      "الربح لكل وحدة منتج",
      "سعر البيع لكل وحدة منتج",
    ],
    answerIndex: 0,
    explanation:
      "With one binding constraint, the decision rule is to maximise contribution per unit of the scarce resource — that is what the constraint actually gates. Per-unit contribution alone ignores resource consumption.",
    explanationAr:
      "مع قيد واحد مُلزِم تكون القاعدة تعظيم المساهمة لكل وحدة من المورد النادر — فهو ما يقيده القيد فعلًا. المساهمة للوحدة وحدها تهمل استهلاك المورد.",
    standardTag: "Limiting factors",
    area: "accounting",
    difficulty: 1,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-09",
    stem: "A machine bought 3 years ago for $90,000 now has a resale value of $35,000. For a replacement decision, the machine's relevant cost is:",
    stemAr: "آلة اشتريت قبل 3 سنوات بـ 90,000 دولار وقيمتها البيعية الآن 35,000. في قرار الاستبدال، التكلفة الملائمة للآلة:",
    options: ["$35,000", "$90,000", "$55,000", "$0"],
    optionsAr: ["35,000 دولارًا", "90,000 دولار", "55,000 دولارًا", "صفر"],
    answerIndex: 0,
    explanation:
      "The $90,000 is a sunk cost. The relevant (opportunity) cost of keeping the old machine is what you forgo by not selling it — its $35,000 resale value.",
    explanationAr:
      "الـ 90,000 تكلفة غارقة. والتكلفة الملائمة (الفرصة) للاحتفاظ بالآلة القديمة هي ما تتنازل عنه بعدم بيعها — قيمتها البيعية 35,000.",
    standardTag: "Relevant costing",
    area: "accounting",
    difficulty: 1,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-10",
    stem: "When production exceeds sales in a period, reported profit under absorption costing compared with marginal costing will be:",
    stemAr: "حين يتجاوز الإنتاج المبيعات في فترة، يكون الربح المُبلَّغ بالتحميل مقارنةً بالتكلفة الحدية:",
    options: [
      "Higher under absorption costing",
      "Higher under marginal costing",
      "Identical under both",
      "Lower under absorption costing",
    ],
    optionsAr: [
      "أعلى في التحميل",
      "أعلى في الحدية",
      "متماثلًا في الاثنتين",
      "أدنى في التحميل",
    ],
    answerIndex: 0,
    explanation:
      "With production > sales, inventory rises and absorption costing carries fixed overhead forward in closing inventory, deferring it from the period's cost of sales — profit is higher than under marginal costing, which expenses all fixed overheads immediately.",
    explanationAr:
      "عندما يفوق الإنتاجُ المبيعاتِ يرتفع المخزون ويُحمّل أسلوب التحميل التكاليف الثابتة إلى مخزون الإقفال مؤجلًا إياها عن تكلفة المبيعات — فيكون الربح أعلى من الحدية التي تحمّل كل الثابت على الفترة فورًا.",
    standardTag: "Absorption vs marginal",
    area: "accounting",
    difficulty: 2,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-11",
    stem: "Expected value analysis is MOST appropriate when:",
    stemAr: "تحليل القيمة المتوقعة أنسب ما يكون حين:",
    options: [
      "There are well-estimated probabilities and the decision repeats many times",
      "The decision is one-off and outcomes are unquantifiable",
      "Only the worst outcome matters",
      "The manager is risk-seeking",
    ],
    optionsAr: [
      "توجد احتمالات مقدرة جيدًا والقرار يتكرر مرات كثيرة",
      "القرار لمرة واحدة والنتائج غير قابلة للقياس",
      "لا يهم إلا أسوأ نتيجة",
      "المدير باحث عن المخاطرة",
    ],
    answerIndex: 0,
    explanation:
      "Expected values are a decision tool for repeated decisions under risk with estimable probabilities — the long-run average then becomes meaningful. One-offs, unquantifiables or risk attitudes call for other techniques (maximin, sensitivity, minimax regret).",
    explanationAr:
      "القيمة المتوقعة أداة للقرارات المتكررة تحت المخاطرة باحتمالات قابلة للتقدير — فيصبح متوسط المدى الطويل ذا معنى. القرارات الفردية أو غير القابلة للقياس أو المواقف الاستعدادية تتطلب أدوات أخرى (الحد الأدنى الأقصى، الحساسية، الحد الأدنى للأسف).",
    standardTag: "Risk & uncertainty",
    area: "accounting",
    difficulty: 2,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-12",
    stem: "Which budgeting approach requires every activity to justify its entire budget from scratch each period?",
    stemAr: "أي أسلوب موازنة يلزم كل نشاط بتبرير موازنته بالكامل من الصفر كل فترة؟",
    options: ["Zero-based budgeting", "Incremental budgeting", "Rolling budgeting", "Flexible budgeting"],
    optionsAr: ["الموازنة الصفرية", "الموازنة التزايدية", "الموازنة المتجددة", "الموازنة المرنة"],
    answerIndex: 0,
    explanation:
      "ZBB builds each period's budget from a zero base through decision packages. Incremental adjusts last year's figures; rolling extends the horizon continuously; flexible restates the budget for actual volume.",
    explanationAr:
      "الصفرية تبني موازنة كل فترة من قاعدة صفرية عبر حزم قرار. التزايدية تعدل أرقام العام الماضي؛ والمتجددة تمد الأفق باستمرار؛ والمرنة تعيد صياغة الموازنة على الحجم الفعلي.",
    standardTag: "Budgeting",
    area: "accounting",
    difficulty: 1,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-13",
    stem: "Division A has spare capacity and quotes a transfer price at marginal cost. Which statement is TRUE?",
    stemAr: "القسم «أ» لديه طاقة فائضة ويسعّر النقل بالتكلفة الحدية. أي عبارة صحيحة؟",
    options: [
      "Group profit is unaffected by the transfer price, but Division A's reported profit is understated",
      "Group profit falls by the amount of the transfer",
      "Division B's profit is always overstated",
      "The transfer price breaches IFRS rules",
    ],
    optionsAr: [
      "ربح المجموعة لا يتأثر بسعر النقل، لكن ربح القسم «أ» المقاس يُبخس",
      "ربح المجموعة ينخفض بمقدار النقل",
      "ربح القسم «ب» يُبالغ فيه دائمًا",
      "سعر النقل يخالف قواعد IFRS",
    ],
    answerIndex: 0,
    explanation:
      "Transfer prices move profit between divisions but do not change group profit. Marginal-cost transfer with spare capacity is optimal for the group but leaves Division A with no profit contribution on the deal.",
    explanationAr:
      "أسعار النقل تنقل الربح بين الأقسام لكنها لا تغير ربح المجموعة. والنقل بالتكلفة الحدية مع طاقة فائضة هو الأمثل للمجموعة لكنه يترك القسم «أ» دون مساهمة ربحية من الصفقة.",
    standardTag: "Transfer pricing",
    area: "accounting",
    difficulty: 2,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-14",
    stem: "Overheads of $240,000 are absorbed on direct labour hours; budgeted hours 15,000, actual hours 16,000. The overhead absorption rate is:",
    stemAr: "تكاليف صناعية 240,000 دولار تُحمّل على ساعات العمالة المباشرة؛ المخطط 15,000 ساعة والفعلي 16,000. معدل التحميل:",
    options: ["$16 per hour", "$15 per hour", "$14.06 per hour", "$240 per hour"],
    optionsAr: ["16 دولارًا للساعة", "15 دولارًا للساعة", "14.06 دولارًا للساعة", "240 دولارًا للساعة"],
    answerIndex: 0,
    explanation:
      "OAR = BUDGETED overhead ÷ BUDGETED hours = $240,000 ÷ 15,000 = $16. Actual hours are irrelevant to setting the rate (they matter later for under/over absorption).",
    explanationAr:
      "المعدل = الصناعية المخططة ÷ الساعات المخططة = 240,000 ÷ 15,000 = 16 دولارًا. والساعات الفعلية لا تدخل في تحديد المعدل (دورها لاحقًا في حساب نقص/زيادة التحميل).",
    standardTag: "Overhead absorption",
    area: "accounting",
    difficulty: 1,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-15",
    stem: "A division earns ROI of 18% on controllable investment of $2m; the group's cost of capital is 12%. Residual income is:",
    stemAr: "قسم يحقق عائد استثمار 18% على استثمار قابل للرقابة 2 مليون دولار وكلفة رأس مال المجموعة 12%. الدخل المتبقي:",
    options: ["$120,000", "$360,000", "$240,000", "$60,000"],
    optionsAr: ["120,000 دولار", "360,000 دولارًا", "240,000 دولارًا", "60,000 دولارًا"],
    answerIndex: 0,
    explanation:
      "RI = divisional profit − (investment × cost of capital) = ($2m × 18%) − ($2m × 12%) = $360,000 − $240,000 = $120,000.",
    explanationAr:
      "الدخل المتبقي = ربح القسم − (الاستثمار × كلفة رأس المال) = (2م × 18%) − (2م × 12%) = 360,000 − 240,000 = 120,000 دولار.",
    standardTag: "Divisional performance",
    area: "accounting",
    difficulty: 2,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-16",
    stem: "A semi-variable cost's fixed and variable elements are separated by fitting a 'line of best fit' through all observed cost points. This technique is:",
    stemAr: "عناصر تكلفة شبه متغيرة تُفصل بمواءمة «خط الملاءمة الأفضل» عبر كل نقاط التكلفة المرصودة. هذه الطريقة هي:",
    options: ["Regression analysis", "High–low analysis", "Absorption analysis", "Break-even analysis"],
    optionsAr: ["تحليل الانحدار", "تحليل الأعلى والأدنى", "تحليل التحميل", "تحليل التعادل"],
    answerIndex: 0,
    explanation:
      "Least-squares regression fits the best line through all observed points; high–low uses only two. The others are not cost-separation techniques.",
    explanationAr:
      "انحدار المربعات الصغرى يوائم أفضل خط عبر كل النقاط المرصودة؛ والأعلى والأدنى يستخدم نقطتين فقط. والبقية ليست طرق فصل تكاليف.",
    standardTag: "Cost estimation",
    area: "accounting",
    difficulty: 1,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-17",
    stem: "The labour efficiency variance compares actual hours worked with the standard hours for actual production, valued at:",
    stemAr: "انحراف كفاءة العمالة يقارن الساعات الفعلية بالمعيارية للإنتاج الفعلي مقوَّمة بـ:",
    options: ["The standard rate per hour", "The actual rate per hour", "The differential rate", "The variable overhead rate"],
    optionsAr: ["المعدل المعياري للساعة", "المعدل الفعلي للساعة", "المعدل الفارقي", "معدل الصناعية المتغيرة"],
    answerIndex: 0,
    explanation:
      "Efficiency variances are valued at the STANDARD rate — isolating the time effect. The rate effect lives in the labour rate variance; mixing the two (actual rate in efficiency) double-counts.",
    explanationAr:
      "انحرافات الكفاءة تُقيَّم بالمعدل المعياري — لعزل أثر الزمن. أثر السعر يعيش في انحراف معدل الأجر؛ وخلط الاثنين (سعر فعلي في الكفاءة) يحسب مرتين.",
    standardTag: "Variance analysis",
    area: "accounting",
    difficulty: 2,
    source: "ACCA MA past paper (adapted)",
  },
  {
    code: "MA-P1-18",
    stem: "Which statement is NOT an assumption of the basic EOQ model?",
    stemAr: "أي عبارة ليست افتراضًا في نموذج كمية الطلب الاقتصادية الأساسي؟",
    options: [
      "Delivery lead times are variable and uncertain",
      "Demand is constant and known",
      "Purchase price per unit is constant regardless of order size",
      "Ordering and holding costs are known and behave as modelled",
    ],
    optionsAr: [
      "فترات التوريد متغيرة وغير مؤكدة",
      "الطلب ثابت ومعلوم",
      "سعر الشراء للوحدة ثابت مهما كان حجم الطلب",
      "تكاليف الطلب والتخزين معلومة وتتصرف كما في النموذج",
    ],
    answerIndex: 0,
    explanation:
      "The EOQ model assumes known (typically instantaneous or fixed) replenishment; variable, uncertain lead times belong to probabilistic inventory systems. The other three are core EOQ assumptions.",
    explanationAr:
      "نموذج كمية الطلب يفترض تزويدًا معلومًا؛ والفترات المتغيرة غير المؤكدة تخص أنظمة المخزون الاحتمالية. والثلاثة الأخرى افتراضات جوهرية للنموذج.",
    standardTag: "Inventory control",
    area: "accounting",
    difficulty: 2,
    source: "ACCA MA past paper (adapted)",
  },
]
