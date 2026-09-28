/** v24 seed data — ACCA past papers for the rest of the syllabus, part 2
 *  (Applied Skills): LW (F4) Corporate & Business Law — 24 questions.
 *
 *  English-law pattern (as the ACCA LW exam uses), examiner-style stems
 *  and distractors, fully bilingual. */

import type { PaperSeedQ } from "./bank-v24-knowledge"

/* ==================== LW (F4) Corporate & Business Law — 24 Q ==================== */

export const LW_PAPER: PaperSeedQ[] = [
  {
    code: "LW-P1-01",
    stem: "A shopper's letter saying 'I offer to buy your car for $3,000' receives the reply: 'I cannot accept less than $3,500.' Under contract law the reply is:",
    stemAr: "رسالة مشترٍ تقول «أعرض شراء سيارتك بـ 3,000 دولار» فجاء الرد: «لا أقبل بأقل من 3,500». وفق قانون العقود يكون الرد:",
    options: [
      "A counter-offer that destroys the original offer",
      "An acceptance with a request for more",
      "A mere invitation to treat",
      "An option contract",
    ],
    optionsAr: [
      "عرضًا مقابلًا يُلغي العرض الأصلي",
      "قبولًا مع طلب زيادة",
      "مجرد دعوة للتعامل",
      "عقد خيار",
    ],
    answerIndex: 0,
    explanation:
      "A counter-offer (Hyde v Wrench) terminates the original offer — it cannot later be 'accepted'. Contrast a mere inquiry, which would leave the offer alive.",
    explanationAr:
      "العرض المقابل (قضية هايد ضد رينش) ينهي العرض الأصلي — فلا يمكن «قبوله» لاحقًا. بخلاف الاستفسار البحت الذي يُبقي العرض حيًّا.",
    standardTag: "Contract formation",
    area: "ethics",
    difficulty: 1,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-02",
    stem: "Which element is NOT required for a simple contract to be binding?",
    stemAr: "أي عنصر ليس شرطًا لانعقاد العقد البسيط الملزم؟",
    options: ["Written form", "Offer and acceptance", "Consideration", "Intention to create legal relations"],
    optionsAr: ["الكتابة", "العرض والقبول", "المقابل", "نية إنشاء علاقة قانونية"],
    answerIndex: 0,
    explanation:
      "Offer/acceptance, consideration and intention are the essential elements; writing is only required by statute for special contracts (e.g., land transfers, guarantees).",
    explanationAr:
      "العرض والقبول والمقابل والنية هي الأركان؛ والكتابة لا تشترطها إلا نصوص خاصة لعقود بعينها (كالبيع العقاري والضمان).",
    standardTag: "Contract formation",
    area: "ethics",
    difficulty: 1,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-03",
    stem: "An 18-year-old buys a violin on credit and refuses to pay. The contract is:",
    stemAr: "شاب عمره 18 عامًا يشتري كمانًا بالأجل ويرفض الدفع. العقد:",
    options: [
      "Voidable but generally binding for necessaries and beneficial contracts of service",
      "Void — minors never bind themselves",
      "Fully binding like any adult's contract",
      "Illegal",
    ],
    optionsAr: [
      "قابل للإبطال، لكنه ملزم عمومًا للضروريات وعقود الخدمة النافعة",
      "باطل — القاصر لا يلزم نفسه أبدًا",
      "ملزم تمامًا كعقد أي بالغ",
      "غير مشروع",
    ],
    answerIndex: 0,
    explanation:
      "A minor's contracts for necessaries bind (must pay a reasonable price), beneficial contracts of service (education/training) bind, and others are voidable at the minor's option — not automatically void, and not fully adult-binding.",
    explanationAr:
      "عقود القاصر للضروريات تلزمه (بسعر معقول)، وعقود الخدمة النافعة (تعليم/تدريب) تلزمه، وما عداها قابل للإبطال بمحض اختياره — لا باطل تلقائيًا ولا ملزم كالكبار.",
    standardTag: "Capacity",
    area: "ethics",
    difficulty: 2,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-04",
    stem: "A term goes to the 'root' of the contract and its breach allows the innocent party to terminate. This is a:",
    stemAr: "شرط يمس «جذر» العقد ويُتيح للمتعاقد البريء إنهاءه عند الإخلال. هذا يسمى:",
    options: ["Condition", "Warranty", "Innominate term", "Exclusion clause"],
    optionsAr: ["شرط جوهري", "ضمان", "شرط غير مصنف", "شرط الإعفاء"],
    answerIndex: 0,
    explanation:
      "Conditions are vital terms — breach entitles termination plus damages. Warranties are minor — damages only. Innominate terms' remedy depends on consequences' seriousness; exclusion clauses limit liability.",
    explanationAr:
      "الشرط الجوهري حيوي — وإخلاله يخول الإنهاء والتعويض. الضمان ثانوي — تعويض فقط. وغير المصنف يتبع جسامة النتائج؛ وشروط الإعفاء تحد المسؤولية.",
    standardTag: "Contract terms",
    area: "ethics",
    difficulty: 1,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-05",
    stem: "For an exclusion clause to bind a consumer, the supplier must have taken reasonable steps to bring it to attention at or before contracting. This rule comes from:",
    stemAr: "حتى يلزم شرط الإعفاء المستهلك، يجب أن بذل المورد خطوات معقولة للتنبيه إليه وقت التعاقد أو قبله. مصدر هذه القاعدة:",
    options: [
      "Common law (incorporation of terms)",
      "The rule in Foss v Harbottle",
      "The postal rule",
      "The doctrine of privity",
    ],
    optionsAr: [
      "القانون العام (إدماج الشروط)",
      "قاعدة قضية فوس ضد هاربوتل",
      "قاعدة البريد",
      "مبدأ انتفاع العقد",
    ],
    answerIndex: 0,
    explanation:
      "Incorporation is a common-law requirement: notice of onerous terms (reasonably sufficient notice) at or before formation. The other doctrines concern company litigation, acceptance timing and third-party rights.",
    explanationAr:
      "الإدماج مطلب في القانون العام: تنبيه كافٍ للشروط الثقيلة وقت التكوين أو قبله. أما المذاهب الأخرى فتخص التقاضي الشركي وتوقيت القبول وحقوق الغير.",
    standardTag: "Contract terms",
    area: "ethics",
    difficulty: 2,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-06",
    stem: "In the tort of negligence, the 'neighbour' principle from Donoghue v Stevenson defines:",
    stemAr: "في تقصير الإهمال، مبدأ «الجار» من قضية دونوغي ضد ستيفنسون يعرّف:",
    options: [
      "To whom a duty of care is owed",
      "The standard of care expected",
      "Causation and remoteness of damage",
      "The measure of damages",
    ],
    optionsAr: [
      "على من يقع واجب الحيطة",
      "معيار الحيطة المنتظر",
      "السببية وبعد الضرر",
      "مقدار التعويض",
    ],
    answerIndex: 0,
    explanation:
      "The neighbour test asks who is so closely and directly affected by my act that I ought reasonably to have them in contemplation — it establishes the duty of care, the first element of negligence.",
    explanationAr:
      "اختبار الجار يسأل: من يتأثر بفعلي تأثرًا وثيقًا مباشرًا بحيث يُفترض أن أضعه في اعتباري — وهو يؤسس واجب الحيطة، أول أركان الإهمال.",
    standardTag: "Tort — negligence",
    area: "ethics",
    difficulty: 1,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-07",
    stem: "An employee is dismissed for refusing to falsify accounts. The dismissal is:",
    stemAr: "يُفصل موظف لرفضه تزوير الحسابات. هذا الفصل:",
    options: [
      "Unfair — the reason relates to protected disclosure / illegality",
      "Fair — an employer may dismiss for any reason",
      "Fair only if notice was paid",
      "Constructive only",
    ],
    optionsAr: [
      "تعسفي — السبب يتعلق بالإبلاغ المحمي/رفض المخالفة",
      "سليم — لصاحب العمل أن يفصل لأي سبب",
      "سليم فقط إن دُفعت مهلة الإخطار",
      "فصل ضمني فقط",
    ],
    answerIndex: 0,
    explanation:
      "Refusing to commit an illegality (and whistle-blowing) is a protected ground; dismissal for it is automatically unfair regardless of notice pay. The employer's 'any reason' freedom exists only for potentially fair reasons.",
    explanationAr:
      "رفض ارتكاب مخالفة (والإبلاغ عنها) سبب محمي؛ والفصل بسببه تعسفي تلقائيًا مهما دُفعت المهلة. وحرية صاحب العمل «لأي سبب» مشروطة بأسباب يجوز أن تكون عادلة.",
    standardTag: "Employment law",
    area: "ethics",
    difficulty: 2,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-08",
    stem: "Which statement about a contract of employment is correct?",
    stemAr: "أي عبارة عن عقد العمل صحيحة؟",
    options: [
      "Duties of mutual trust and confidence are implied into it",
      "It can never be terminated by the employer",
      "It must always be in writing to be valid",
      "It excludes the national minimum wage",
    ],
    optionsAr: [
      "يُقترن ضمنًا بواجب الثقة المتبادلة",
      "لا يمكن لصاحب العمل إنهاؤه أبدًا",
      "يجب أن يكون مكتوبًا ليصح",
      "يستثني الحد الأدنى للأجر",
    ],
    answerIndex: 0,
    explanation:
      "Mutual trust and confidence is the flagship implied term — its breach by either side founds constructive dismissal. Writing is only needed for a statement of particulars; minimum wage is statutory and cannot be excluded.",
    explanationAr:
      "الثقة والاطمئنان المتبادلان هو الشرط الضمني الأشهر — وإخلاله من أي طرف يؤسس الفصل الضمني. والكتابة تلزم فقط في بيان الشروط؛ والحد الأدنى للأجر نص قانوني لا يقبل الاستبعاد.",
    standardTag: "Employment law",
    area: "ethics",
    difficulty: 1,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-09",
    stem: "Salomon v Salomon established which principle?",
    stemAr: "قضية سالومون ضد سالومون أرست أي مبدأ؟",
    options: [
      "A company is a separate legal personality distinct from its members",
      "Promoters owe no duties to the company",
      "Shares must always be paid for in cash",
      "Directors may profit from office",
    ],
    optionsAr: [
      "الشركة شخصية اعتبارية مستقلة عن أعضائها",
      "المؤسسون لا يدينون للشركة بأي واجبات",
      "يجب سداد الأسهم نقدًا دائمًا",
      "يجوز للمديرين الكسب من مناصبهم",
    ],
    answerIndex: 0,
    explanation:
      "Salomon is the foundation of separate legal personality — the company's debts are its own, and members' liability is limited to their shares. The distractors contradict other company-law rules.",
    explanationAr:
      "سالومون أساس الاستقلال القانوني للشخصية الاعتبارية — ديون الشركة ديونها، ومسؤولية الأعضاء محدودة بحصصهم. والمشتتات تناقض قواعد أخرى في قانون الشركات.",
    standardTag: "Company formation",
    area: "ethics",
    difficulty: 1,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-10",
    stem: "A promoter personally buys a property then sells it to the company being formed at a profit, without disclosure. The promoter has breached:",
    stemAr: "مؤسس يشتري عقارًا باسمه ثم يبيعه للشركة الناشئة بربح دون إفصاح. أخلال المؤسس يقع على:",
    options: [
      "The fiduciary duty to disclose personal profits made from the promotion",
      "No duty — pre-incorporation profits are free",
      "The duty of skill and care only",
      "The capital-maintenance rule",
    ],
    optionsAr: [
      "الواجب الائتماني بالإفصاح عن أرباحه الشخصية من التأسيس",
      "لا واجب — أرباض ما قبل التأسيس حرة",
      "واجب المهارة والحذر فقط",
      "قاعدة المحافظة على رأس المال",
    ],
    answerIndex: 0,
    explanation:
      "Promoters stand in a fiduciary position toward the company they form: any secret profit from promotion is recoverable by the company unless fully disclosed — the company may rescind or claim the profit.",
    explanationAr:
      "المؤسس في موقع ائتماني تجاه الشركة التي يؤسسها: كل ربح خفي من التأسيس تسترده الشركة ما لم يُفصح عنه بالكامل — فلها الفسخ أو مطالبة الربح.",
    standardTag: "Promoters",
    area: "ethics",
    difficulty: 2,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-11",
    stem: "The directors of a profitable company recommend no dividend for two years to fund an acquisition. A minority shareholder objects. Under the rule in Foss v Harbottle:",
    stemAr: "مديرو شركة رابحة يوصون بعدم توزيع أرباح سنتين لتمويل استحواذ، ويعترض مساهم أقلية. وفق قاعدة فوس ضد هاربوتل:",
    options: [
      "The proper claimant for a wrong to the company is the company itself, so the claim fails as derivative action is barred here",
      "The shareholder may sue in his own name",
      "The court must order the dividend",
      "The directors are automatically liable",
    ],
    optionsAr: [
      "المدعي الصحيح في إضرار بالشركة هو الشركة نفسها، فتسقط الدعوى إذ يحظر الإجراء المشتق هنا",
      "يجوز للمساهم رفع الدعوى باسمه",
      "يوجب القضاء توزيع الأرباح",
      "يكون المديرون مسؤولين تلقائيًا",
    ],
    answerIndex: 0,
    explanation:
      "Foss v Harbottle: where the alleged wrong is one the company could ratify (a dividend decision is intra vires and a matter of directors' discretion), the company is the proper claimant and the minority cannot sue — subject to exceptions not present here.",
    explanationAr:
      "فوس ضد هاربوتل: إذا كان الإجراء محل الشكوى ضمن سلطة الجمعية العامة وقابلًا للتصديق (كقرار التوزيع)، فالشركة هي المدعي الصحيح ولا يحق للاقلية الدعوى — بغياب أي استثناء.",
    standardTag: "Company meetings & remedies",
    area: "ethics",
    difficulty: 3,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-12",
    stem: "Which power must ordinarily be exercised by ordinary resolution?",
    stemAr: "أي سلطة تمارس عمومًا بقرار عادي؟",
    options: [
      "Removing a director before the end of his term",
      "Altering the articles of association",
      "Reducing share capital",
      "Changing the company's name",
    ],
    optionsAr: [
      "عزل مدير قبل نهاية مدته",
      "تعديل عقد التأسيس",
      "تخفيض رأس المال",
      "تغيير اسم الشركة",
    ],
    answerIndex: 0,
    explanation:
      "Director removal needs an ordinary (simple majority) resolution despite contractual protections. Amending articles, reducing capital and changing the name require special resolutions.",
    explanationAr:
      "عزل المدير يتطلب قرارًا عاديًا (أغلبية بسيطة) رغم أي حماية تعاقدية. أما تعديل العقد وتخفيض رأس المال وتغيير الاسم فتتطلب قرارات خاصة.",
    standardTag: "Directors",
    area: "ethics",
    difficulty: 2,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-13",
    stem: "A director uses a corporate investment opportunity for himself. This breaches the duty to:",
    stemAr: "مدير يستثمر لنفسه فرصة استثمارية خاصة بالشركة. هذا إخلال بواجب:",
    options: [
      "Avoid conflicts of interest and accept no benefits from third parties",
      "Exercise independent judgement only",
      "Promote the success solely of creditors",
      "Keep proper accounting records",
    ],
    optionsAr: [
      "تجنب تضارب المصالح وعدم قبول منافع من الغير",
      "ممارسة الحكم المستقل فقط",
      "تعزيز نجاح الدائنين وحدهم",
      "مسك سجلات محاسبية سليمة",
    ],
    answerIndex: 0,
    explanation:
      "Usurping corporate opportunities is the classic conflict-of-interest breach — the director must avoid situations of conflict and may not exploit company property, information or opportunities.",
    explanationAr:
      "اغتصاب فرص الشركة هو الإخلال النموذجي بتضارب المصالح — فعلى المدير تجنب مواطن التعارض وعدم استغلال أملاك الشركة أو معلوماتها أو فرصها.",
    standardTag: "Directors' duties",
    area: "ethics",
    difficulty: 1,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-14",
    stem: "Which statement about a private company's shares is correct?",
    stemAr: "أي عبارة عن أسهم الشركة الخاصة صحيحة؟",
    options: [
      "They may not be offered to the general public",
      "They must be freely transferable on a stock exchange",
      "They must always have a par value fixed by the court",
      "They cannot be partly paid",
    ],
    optionsAr: [
      "لا يجوز طرحها على الجمهور",
      "يجب أن تكون قابلة للتداول الحر في البورصة",
      "يجب أن تكون لها قيمة اسمية يثبتها القضاء",
      "لا يجوز أن تكون مسددة جزئيًا",
    ],
    answerIndex: 0,
    explanation:
      "A private company's shares may not be offered to the public (that privilege defines public companies). Partly-paid shares are possible; transferability is usually restricted by the articles.",
    explanationAr:
      "لا يجوز طرح أسهم الشركة الخاصة على الجمهور (وهذه ميزة الشركات العامة). والأسهم الجزئية السداد جائزة؛ والتداول يقيده العقد عادة.",
    standardTag: "Share capital",
    area: "ethics",
    difficulty: 1,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-15",
    stem: "A public company may only pay dividends out of:",
    stemAr: "لا يجوز للشركة العامة توزيع أرباح إلا من:",
    options: [
      "Distributable profits only",
      "The share premium account",
      "The proceeds of any share issue",
      "Capital reserves",
    ],
    optionsAr: [
      "الأرباح القابلة للتوزيع فقط",
      "حساب علاوة الإصدار",
      "حصيل أي إصدار أسهم",
      "الاحتياطيات الرأسمالية",
    ],
    answerIndex: 0,
    explanation:
      "Dividends come only from accumulated realised distributable profits; paying out of capital (share premium is capital) breaches the capital-maintenance rule and is unlawful.",
    explanationAr:
      "التوزيع يكون من الأرباح المحققة القابلة للتوزيع المتراكمة فقط؛ والتوزيع من رأس المال (والعلاوة رأسمالية) يخالف قاعدة المحافظة على رأس المال.",
    standardTag: "Capital maintenance",
    area: "ethics",
    difficulty: 2,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-16",
    stem: "A fixed charge over the company's book debts requires registration; failure means the charge is:",
    stemAr: "رهن ثابت على ديون الشركة الدمغية يستلزم القيد؛ والإخلال يجعل الرهن:",
    options: [
      "Void against the liquidator, and the loan becomes immediately repayable",
      "Valid but unenforceable for six months",
      "Valid against everyone",
      "Converted into a floating charge automatically",
    ],
    optionsAr: [
      "باطلًا في مواجهة التصفية، ويصبح القرض مستحق السداد فورًا",
      "صحيحًا لكن غير نافذ ستة أشهر",
      "نافذًا في مواجهة الكل",
      "متحولًا تلقائيًا إلى رهن عائم",
    ],
    answerIndex: 0,
    explanation:
      "Charges must be registered within the statutory period; an unregistered charge is void against a liquidator/administrator and any secured creditor — the lender loses security but the money falls due at once.",
    explanationAr:
      "يجب قيد الرهون في المدة النظامية؛ والرهن غير المقيد باطل في مواجهة المصفي أو أي دائن مضمون — فيخسر المقرض ضمانه ويستحق الدين فورًا.",
    standardTag: "Debentures & charges",
    area: "ethics",
    difficulty: 2,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-17",
    stem: "In a general partnership, a new partner's liability for debts:",
    stemAr: "في شركة التضامن، مسؤولية الشريك الجديد عن الديون:",
    options: [
      "Does not extend to debts incurred before he joined",
      "Covers all past and future debts equally",
      "Is limited to his capital contribution",
      "Never arises for firm debts",
    ],
    optionsAr: [
      "لا تمتد لديون نشأت قبل انضمامه",
      "تشمل كل الديون السابقة واللاحقة بالتساوي",
      "محدودة بحصته في رأس المال",
      "لا تنشأ أبدًا عن ديون الشركة",
    ],
    answerIndex: 0,
    explanation:
      "Under the Partnership Act, a new partner is not liable for debts incurred before admission; an outgoing partner remains liable for pre-departure debts absent a valid novation.",
    explanationAr:
      "وفق قانون الشراكة، لا يسأل الشريك الجديد عما نشأ قبل انضمامه؛ والشريك الخارجي يبقى مسؤولًا عما قبل خروجه ما لم يحدث تجديد للالتزام.",
    standardTag: "Partnership law",
    area: "ethics",
    difficulty: 2,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-18",
    stem: "An agent makes a contract on behalf of an UNDISCLOSED principal. Against whom may the third party enforce it?",
    stemAr: "وكيل يبرم عقدًا باسم أصيل غير معلن. على من يجوز للغير تنفيذ العقد؟",
    options: [
      "The agent personally (and normally the principal once disclosed)",
      "Nobody — such contracts are void",
      "Only the principal",
      "Only the agent's employer",
    ],
    optionsAr: [
      "الوكيل شخصيًا (وعادة الأصيل بعد الإفصاح)",
      "لا أحد — هذه العقود باطلة",
      "الأصيل فقط",
      "رب عمل الوكيل فقط",
    ],
    answerIndex: 0,
    explanation:
      "With an undisclosed principal the third party's contractual counterparty is the agent; the third party may also hold the principal liable once the existence of the agency is revealed (subject to the usual rules and election).",
    explanationAr:
      "مع الأصيل غير المعلن يكون طرف العقد للغير هو الوكيل؛ ويجوز للغير أيضًا مساءلة الأصيل بعد الكشف عن الوكالة (وفق القواعد والاختيار المعتاد).",
    standardTag: "Agency law",
    area: "ethics",
    difficulty: 2,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-19",
    stem: "The postal rule states that acceptance takes effect:",
    stemAr: "قاعدة البريد تنص على أن القبول ينتج أثره:",
    options: [
      "On posting, if post is a reasonable means and no stipulation excludes it",
      "When the offeror reads it",
      "When the letter is delivered",
      "Only if the offeror replies",
    ],
    optionsAr: [
      "عند الإرسال، إذا كان البريد وسيلة معقولة ولم يُشترط خلافه",
      "عندما يقرأه المُعرِض",
      "عند تسليم الخطاب",
      "فقط إذا رد المُعرِض",
    ],
    answerIndex: 0,
    explanation:
      "Adams v Lindsell: properly posted acceptance is effective on posting — a unilateral contract moment — unless the offer required actual communication or the means was unreasonable.",
    explanationAr:
      "قضية آدمز ضد ليندسل: القبول المُرسل بحق ينفذ عند الإرسال — لحظة إنشاء العقد — ما لم يشترط العرض تواصلًا فعليًا أو تكن الوسيلة غير معقولة.",
    standardTag: "Contract formation",
    area: "ethics",
    difficulty: 2,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-20",
    stem: "Which remedy is available for a breach of a contract that has been specifically performed and where damages are inadequate?",
    stemAr: "أي وسيلة متاحة عند الإخلال بعقد نُفّذ تنفيذًا عينيًا وتكون التعويضات غير كافية؟",
    options: [
      "An injunction restraining the breach",
      "Rescission for misrepresentation",
      "Exclusion of liability",
      "Specific performance of a personal-service contract",
    ],
    optionsAr: [
      "أمر قضائي بكف الإخلال",
      "إبطال بسبب التضليل",
      "إعفاء من المسؤولية",
      "تنفيذ عيني لعقد خدمات شخصية",
    ],
    answerIndex: 0,
    explanation:
      "Injunctions are equitable orders preventing a threatened or continuing breach where damages cannot compensate. Personal-service contracts are never specifically enforced; rescission addresses misrepresentation-induced contracts.",
    explanationAr:
      "الأمر القضائي أمر إنصافي يمنع إخلالًا مهددًا أو مستمرًا حيث لا تجزي التعويضات. وعقود الخدمة الشخصية لا تنفذ عينيًا أبدًا؛ والإبطال يعالج عقود التضليل.",
    standardTag: "Remedies",
    area: "ethics",
    difficulty: 2,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-21",
    stem: "A company goes into creditors' voluntary liquidation. Which statement is TRUE?",
    stemAr: "شركة تدخل تصفية اختيارية بدائنيها. أي عبارة صحيحة؟",
    options: [
      "A liquidator is appointed who realises assets and distributes them under the statutory priority",
      "The directors automatically keep control of asset disposals",
      "Members are paid before preferential creditors",
      "Floating-charge holders rank last",
    ],
    optionsAr: [
      "يُعيَّن مصفٍ يُحقق الأصول ويوزعها وفق أولوية القانون",
      "يتولى المديرون تلقائيًا ضبط التصرف في الأصول",
      "يُدفع للأعضاء قبل الدائنين الممتازين",
      "أصحاب الرهون العائمة آخر من يُدفع لهم",
    ],
    answerIndex: 0,
    explanation:
      "In liquidation a liquidator takes over: assets are realised and distributed in statutory order — secured and preferential creditors (wages, etc.) come before floating-charge holders and members, who are last.",
    explanationAr:
      "في التصفية يتولى المصفٍ: تُحقق الأصول وتوزع وفق الترتيب النظامي — المضمونون والممتازون (الأجور ونحوها) قبل أصحاب الرهون العائمة وقبل الأعضاء وهم الأخيرون.",
    standardTag: "Insolvency",
    area: "ethics",
    difficulty: 2,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-22",
    stem: "A company's constitution (articles) contains an unlawful provision. The articles are:",
    stemAr: "يتضمن عقد تأسيس شركة نصًّا غير مشروع. العقد:",
    options: [
      "Void to the extent of the conflict, with the rest potentially severable",
      "Entirely void in all cases",
      "Always valid because of contractual freedom",
      "Enforceable against shareholders only",
    ],
    optionsAr: [
      "باطل بقدر التعارض، مع قابلية بقية النصوص للفصل",
      "باطل كليًا في كل الأحوال",
      "نافذ دائمًا لحرية التعاقد",
      "نافذ في مواجهة المساهمين فقط",
    ],
    answerIndex: 0,
    explanation:
      "Articles are a statutory contract; provisions conflicting with the Companies Act are void to the extent of inconsistency, while the remainder may survive — the court may order rectification where the constitution is unduly restrictive.",
    explanationAr:
      "العقد التأسيسي عقد نظامي؛ والنصوص المخالفة لقانون الشركات باطلة بقدر المخالفة وقد يبقى سائرها — ويملك القضاء الأمر بالتصحيح عند التشدد غير الواجب.",
    standardTag: "Company constitution",
    area: "ethics",
    difficulty: 2,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-23",
    stem: "A director who is party to an existing transaction with the company must declare its nature and extent. This ensures compliance with:",
    stemAr: "مدير طرف في تعامل قائم مع الشركة يجب أن يفصح عن طبيعته ومداه. هذا يحقق الامتثال لـ:",
    options: [
      "The statutory declaration-of-interest requirement",
      "The rule against dividends from capital",
      "The director's duty of care in negligence only",
      "The insider-dealing safe harbour",
    ],
    optionsAr: [
      "متطلب الإفصاح عن المصلحة النظامي",
      "قاعدة منع توزيع رأس المال",
      "واجب الحذر في الإهمال فقط",
      "ملاذ تداول المطلعين الآمن",
    ],
    answerIndex: 0,
    explanation:
      "Directors' interests in existing or proposed transactions must be declared at a directors' meeting (general notice covers standing interests). Undeclared interests expose the director to penalties and the transaction to challenge.",
    explanationAr:
      "مصالح المديرين في تعاملات قائمة أو مقترحة يجب الإفصاح عنها في اجتماع المديرين (وإشعار عام يغطي المصالح الدائمة). وعدم الإفصاح يعرّض المدير للجزاءات والتصرف للطعن.",
    standardTag: "Directors' duties",
    area: "ethics",
    difficulty: 2,
    source: "ACCA LW past paper (adapted)",
  },
  {
    code: "LW-P1-24",
    stem: "Preferential trade creditors of a company in liquidation are paid:",
    stemAr: "الدائنون التجاريون الممتازون في تصفية الشركة يُدفع لهم:",
    options: [
      "After secured creditors with their security, but ahead of floating-charge holders",
      "Before all secured creditors",
      "After ordinary unsecured creditors",
      "Together with members in the final ranking",
    ],
    optionsAr: [
      "بعد الدائنين المضمونين بضماناتهم، وقبل أصحاب الرهون العائمة",
      "قبل كل الدائنين المضمونين",
      "بعد الدائنين العاديين غير المضمونين",
      "مع الأعضاء في الترتيب الأخير",
    ],
    answerIndex: 0,
    explanation:
      "The statutory waterfall: fixed-charge holders first (from their security), then preferential debts (wages, holiday pay, pension contributions — capped), then the prescribed part for unsecureds, floating-charge holders, unsecureds, and members last.",
    explanationAr:
      "التوزيع النظامي: أصحاب الرهون الثابتة أولًا (من ضمانهم)، ثم الديون الممتازة (الأجور والإجازات واشتراكات المعاش — بحدود)، ثم الجزء المقرر لغير المضمونين، فأصحاب الرهون العائمة، فغير المضمونين، والأعضاء أخيرًا.",
    standardTag: "Insolvency",
    area: "ethics",
    difficulty: 3,
    source: "ACCA LW past paper (adapted)",
  },
]

/* ==================== PM (F5) Performance Management — 24 Q ==================== */

export const PM_PAPER: PaperSeedQ[] = [
  {
    code: "PM-P1-01",
    stem: "A bank uses activity-based costing. Which cost driver fits branch counter transactions best?",
    stemAr: "بنك يستخدم التكلفة على أساس الأنشطة. أي محرك تكلفة يناسب معاملات شباك الفرع؟",
    options: ["Number of transactions processed", "Floor area of the branch", "Number of branches", "Head-office salaries"],
    optionsAr: ["عدد المعاملات المعالجة", "مساحة الفرع", "عدد الفروع", "رواتب المركز الرئيسي"],
    answerIndex: 0,
    explanation:
      "ABC matches overheads to the activity that causes them: counter costs are driven by transaction counts. Floor area suits rent apportionment, not transaction processing.",
    explanationAr:
      "ABC تربط التكاليف بالنشاط المسبب لها: تكاليف الشباك يقودها عدد المعاملات. أما المساحة فتناسب توزيع الإيجار لا معالجة المعاملات.",
    standardTag: "ABC",
    area: "accounting",
    difficulty: 1,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-02",
    stem: "Target costing works backward by:",
    stemAr: "التكلفة المستهدفة تعمل بالعكس عبر:",
    options: [
      "Subtracting the desired profit margin from the competitive market price",
      "Adding a mark-up to full cost",
      "Averaging the cost of competitors' products",
      "Setting cost equal to last year's cost plus inflation",
    ],
    optionsAr: [
      "طرح هامش الربح المطلوب من سعر السوق التنافسي",
      "إضافة نسبة على التكلفة الكاملة",
      "متوسط تكلفة منتجات المنافسين",
      "مساواة التكلفة بتكلفة العام الماضي مضافًا إليها التضخم",
    ],
    answerIndex: 0,
    explanation:
      "Target cost = competitive selling price − required margin. The cost gap then drives value engineering. Cost-plus pricing works the opposite (and weaker) direction.",
    explanationAr:
      "التكلفة المستهدفة = سعر البيع التنافسي − الهامش المطلوب. ثم تقود فجوة التكلفة هندسة القيمة. أما التسعير بالتكلفة زائد فعكس ذلك — وأضعف.",
    standardTag: "Target costing",
    area: "accounting",
    difficulty: 1,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-03",
    stem: "Throughput accounting's central ratio is:",
    stemAr: "النسبة المحورية في محاسبة الإنتاجية هي:",
    options: [
      "Throughput return per factory hour (on the bottleneck)",
      "Contribution per unit",
      "Gross profit percentage",
      "Fixed cost per labour hour",
    ],
    optionsAr: [
      "عائد الإنتاجية لكل ساعة مصنعية (على عنق الزجاجة)",
      "المساهمة للوحدة",
      "نسبة مجمل الربح",
      "التكلفة الثابتة لكل ساعة عمالة",
    ],
    answerIndex: 0,
    explanation:
      "Throughput accounting (Theory of Constraints) ranks products by throughput per bottleneck hour: (selling price − material cost) ÷ bottleneck hours per unit — all other costs are treated as operating expenses.",
    explanationAr:
      "محاسبة الإنتاجية (نظرية القيود) ترتب المنتجات بعائد الإنتاجية لكل ساعة على عنق الزجاجة: (سعر البيع − تكلفة المواد) ÷ ساعات عنق الزجاجة للوحدة — وتُعامل بقية التكاليف كمصروفات تشغيل.",
    standardTag: "Throughput accounting",
    area: "accounting",
    difficulty: 2,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-04",
    stem: "Lifecycle costing would be MOST useful for:",
    stemAr: "تكلفة دورة الحياة أنفع ما تكون لـ:",
    options: [
      "A pharmaceutical product with heavy R&D and low early sales",
      "A corner grocery store's weekly stock",
      "A one-off office cleaning job",
      "Monthly bank charges",
    ],
    optionsAr: [
      "منتج دوائي بإنفاق بحثي ضخم ومبيعات مبكرة منخفضة",
      "مخزون بقالة الحي الأسبوعي",
      "خدمة تنظيف مكاتب لمرة واحدة",
      "عمولات بنكية شهرية",
    ],
    answerIndex: 0,
    explanation:
      "Lifecycle costing totals costs across development, growth, maturity and decline — vital where pre-market costs are huge and must be recovered over the product's life.",
    explanationAr:
      "تكلفة دورة الحياة تجمع التكاليف عبر التطوير والنضج والانحدار — وهي حاسمة حين تكون تكاليف ما قبل السوق ضخمة ويجب استردادها عبر عمر المنتج.",
    standardTag: "Lifecycle costing",
    area: "accounting",
    difficulty: 1,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-05",
    stem: "A special order's price should cover, as a minimum:",
    stemAr: "سعر الطلب الخاص يجب أن يغطي كحد أدنى:",
    options: [
      "The incremental (relevant) costs of the order plus any opportunity cost of capacity diverted",
      "Full absorption cost plus the normal mark-up",
      "Only the direct materials",
      "Total company overhead absorbed into the order",
    ],
    optionsAr: [
      "التكاليف التراكمية (الملائمة) للطلب مضافًا إليها كلفة فرصة الطاقة المحوّلة",
      "تكلفة الامتصاص الكاملة مضافًا إليها النسبة المعتادة",
      "المواد المباشرة فقط",
      "كل الصناعية للشركة المحملة على الطلب",
    ],
    answerIndex: 0,
    explanation:
      "One-off pricing floor = relevant costs + opportunity cost. Full-cost-plus is a strategic guide, not the floor; materials-only ignores conversion and diverted capacity.",
    explanationAr:
      "حد التسعير الأدنى للطلب الاستثنائي = التكاليف الملائمة + كلفة الفرصة. والتكلفة الكاملة زائد دليل استراتيجي لا حد أدنى؛ والمواد وحدها تهمل التصنيع والطاقة المضحّى بها.",
    standardTag: "Pricing decisions",
    area: "accounting",
    difficulty: 2,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-06",
    stem: "A firm prices at 120% of variable cost. This is BEST described as:",
    stemAr: "شركة تسعّر بـ 120% من التكلفة المتغيرة. أفضل وصف لذلك:",
    options: ["A contribution/marginal-cost pricing approach", "Full-cost plus pricing", "Target pricing", "Price discrimination"],
    optionsAr: ["تسعير بالمساهمة/التكلفة الحدية", "تسعير بالتكلفة الكاملة زائد", "التسعير المستهدف", "تمييز سعري"],
    answerIndex: 0,
    explanation:
      "Marking up variable cost gives a contribution-based price — used for special orders and price elasticity management. It ignores fixed overhead recovery by design.",
    explanationAr:
      "الإضافة على التكلفة المتغيرة تعطي سعرًا قائمًا على المساهمة — يستخدم للطلبات الاستثنائية وإدارة المرونة. وهو يتجاهل استرداد الثابت عن قصد.",
    standardTag: "Pricing decisions",
    area: "accounting",
    difficulty: 1,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-07",
    stem: "In a make-or-buy decision with a limiting factor, the buy option should be costed at:",
    stemAr: "في قرار الصنع أو الشراء بوجود مورد محدد، يُسعَّر خيار الشراء عند:",
    options: [
      "Purchase price minus the contribution forgone on production displaced",
      "Purchase price plus fixed overhead",
      "Purchase price alone always",
      "Variable cost of making plus fixed costs",
    ],
    optionsAr: [
      "سعر الشراء ناقص المساهمة المضحّى بها من الإنتاج المُزاح",
      "سعر الشراء زائد الصناعية الثابتة",
      "سعر الشراء وحده دائمًا",
      "التكلفة المتغيرة للصنع زائد الثابتة",
    ],
    answerIndex: 0,
    explanation:
      "When capacity is scarce, buying in an item can free the bottleneck for other production — the relevant cost is the purchase price ADJUSTED for contribution gained or forgone on the released capacity.",
    explanationAr:
      "حين تكون الطاقة شحيحة يمكن للشراء أن يفرج عنق الزجاجة لإنتاج آخر — والكلفة الملائمة هي سعر الشراء معدلًا بالمساهمة المكتسبة أو المضحّى بها على الطاقة المحررة.",
    standardTag: "Make or buy",
    area: "accounting",
    difficulty: 3,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-08",
    stem: "The demand curve a firm faces is P = 200 − 4Q. Marginal revenue is 200 − 8Q. The profit-maximising output (MC = 40) is:",
    stemAr: "منحنى الطلب الذي يواجهه منشأة هو P = 200 − 4Q، والإيراد الحدي 200 − 8Q. الناتج المعظّم للربح (MC = 40) هو:",
    options: ["Q = 20", "Q = 25", "Q = 40", "Q = 50"],
    optionsAr: ["Q = 20", "Q = 25", "Q = 40", "Q = 50"],
    answerIndex: 0,
    explanation:
      "Set MR = MC: 200 − 8Q = 40 → 8Q = 160 → Q = 20 (price then = 200 − 80 = 120). Q = 50 is where MR = −200's trap; 25 maximises nothing (that is where MC crosses demand).",
    explanationAr:
      "بمساواة الحدين: 200 − 8Q = 40 ← 8Q = 160 ← Q = 20 (والسعر = 200 − 80 = 120). أما 50 و25 فمشتتان بلا معنى تعظيمي.",
    standardTag: "Pricing decisions",
    area: "accounting",
    difficulty: 3,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-09",
    stem: "Which budget BEST suits a retail business whose demand swings seasonally?",
    stemAr: "أي موازنة تناسب أفضل نشاطًا تجاريًا مطلبًا موسمي التقلب؟",
    options: ["A rolling budget updated quarterly", "A fixed annual budget set once", "An incremental budget", "A zero-based budget for the sales team",
    ],
    optionsAr: ["موازنة متجددة تُحدّث ربعيًا", "موازنة سنوية ثابتة تُعد مرة", "موازنة تزايدية", "موازنة صفرية لفريق البيع"],
    answerIndex: 0,
    explanation:
      "Rolling budgets keep the planning horizon live (always 12 months ahead) and re-forecast as seasons unfold — the standard remedy for volatile environments.",
    explanationAr:
      "الموازنات المتجددة تبقي أفق التخطيط حيًا (اثنا عشر شهرًا دائمًا) وتعيد التوقع مع تقلب الفصول — وهي العلاج المعتمد للبيئات المتقلبة.",
    standardTag: "Budgeting",
    area: "accounting",
    difficulty: 1,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-10",
    stem: "Planned sales mix: A 60% / B 40%. Actual sales: A 50% / B 50%, with total sales volume as planned and total contribution higher. The sales mix variance is:",
    stemAr: "مزيج المبيعات المخطط: أ 60% / ب 40%. الفعلي: 50% / 50% بإجمالي حجم كما خُطط ومساهمة كلية أعلى. انحراف مزيج المبيعات:",
    options: [
      "Favourable, because the mix shifted toward the higher-contribution product B",
      "Adverse, because A sold less",
      "Nil, because total volume was as planned",
      "Impossible to tell without costs",
    ],
    optionsAr: [
      "ملائم، لأن المزيج انزاح نحو المنتج الأعلى مساهمةً «ب»",
      "عكسي، لأن «أ» باع أقل",
      "صفر، لأن الإجمالي كما خُطط",
      "لا يمكن الجزم بغير التكاليف",
    ],
    answerIndex: 0,
    explanation:
      "Mix variances arise when the actual mix differs from planned — favourably when weight shifts to products with above-average contribution per mix unit. Here B's higher unit contribution lifts the mix variance favourable.",
    explanationAr:
      "تنشأ انحرافات المزيج عند اختلاف المزيج الفعلي عن المخطط — ملائمة عند انزياح الوزن نحو منتجات تفوق متوسط المساهمة لوحدة المزيج. وهنا ترفع مساهمة «ب» الأعلى الانحراف للملاءمة.",
    standardTag: "Sales variances",
    area: "accounting",
    difficulty: 2,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-11",
    stem: "Materials MIX variance is best explained as the effect of:",
    stemAr: "انحراف مزيج المواد يُفسر أفضل بأنه أثر:",
    options: [
      "Combining input materials in proportions different from standard",
      "Paying prices different from standard",
      "Getting a different total yield from inputs",
      "Producing more or less than planned",
    ],
    optionsAr: [
      "خلط مدخلات المواد بنسب مغايرة للمعيار",
      "دفع أسعار مغايرة للمعيار",
      "الحصول على مردود كلي مختلف من المدخلات",
      "الإنتاج بأكثر أو أقل من المخطط",
    ],
    answerIndex: 0,
    explanation:
      "Mix = the proportion effect at standard prices; yield = the output-from-input effect; price = cost per kg effect; volume = the output-level effect. Examiner's favourite distinction.",
    explanationAr:
      "المزيج = أثر النسب بأسعار معيارية؛ والمردود = أثر المخرج من المدخل؛ والسعر = أثر تكلفة الكيلو؛ والحجم = أثر مستوى الإنتاج. تمييز لجنة الامتحان المفضل.",
    standardTag: "Mix & yield variances",
    area: "accounting",
    difficulty: 2,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-12",
    stem: "A planning variance measures:",
    stemAr: "انحراف التخطيط يقيس:",
    options: [
      "The gap between original standard and revised (ex-post feasible) standard",
      "The gap between revised standard and actual result",
      "The gap between budget and actual sales value",
      "The change in market share",
    ],
    optionsAr: [
      "الفجوة بين المعيار الأصلي والمعيار المنقح (الممكن بعد الوقائع)",
      "الفجوة بين المعيار المنقح والنتيجة الفعلية",
      "الفجوة بين الموازنة وقيمة المبيعات الفعلية",
      "التغير في الحصة السوقية",
    ],
    answerIndex: 0,
    explanation:
      "Planning (controllability) analysis splits the total variance: planning variance = original vs revised standard (uncontrollable); operational variance = revised standard vs actual (controllable).",
    explanationAr:
      "تحليل القابلية للرقابة يفصل الانحراف الكلي: انحراف التخطيط = الأصلي مقابل المنقح (غير قابل للرقابة)؛ والانحراف التشغيلي = المنقح مقابل الفعلي (قابل للرقابة).",
    standardTag: "Planning & operational variances",
    area: "accounting",
    difficulty: 2,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-13",
    stem: "Which performance measure suffers LEAST from manipulation by divisional managers?",
    stemAr: "أي مقياس أداء أقل عرضة للتلاعب من مديري الأقسام؟",
    options: [
      "Residual income based on controllable profit and current-value assets",
      "Return on investment",
      "Sales revenue growth",
      "Gross profit margin",
    ],
    optionsAr: [
      "الدخل المتبقي على أساس ربح قابل للرقابة وأصول بقيمة جارية",
      "العائد على الاستثمار",
      "نمو الإيرادات",
      "هامش مجمل الربح",
    ],
    answerIndex: 0,
    explanation:
      "RI with controllable profit and up-to-date asset values resists the classic ROI games (rejecting good projects that dilute ROI, holding depreciated assets). ROI notoriously invites both.",
    explanationAr:
      "الدخل المتبقي بربح قابل للرقابة وقيم أصول محدثة يقاوم حيل العائد الشهيرة (رفض مشروعات جيدة تخفض العائد، والاحتفاظ بأصول مستهلكة). والعائد على الاستثمار يدعو للاثنين.",
    standardTag: "Divisional performance",
    area: "accounting",
    difficulty: 2,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-14",
    stem: "A balanced scorecard's 'internal business process' perspective typically includes:",
    stemAr: "منظور «عمليات الأعمال الداخلية» في بطاقة الأداء المتوازن يتضمن عادة:",
    options: [
      "Defect rates and on-time delivery",
      "Employee satisfaction and training hours",
      "Earnings per share",
      "Customer retention",
    ],
    optionsAr: [
      "نسب العيوب والتسليم في الموعد",
      "رضا الموظفين وساعات التدريب",
      "ربحية السهم",
      "الاحتفاظ بالعملاء",
    ],
    answerIndex: 0,
    explanation:
      "Process perspective = operational excellence measures (quality, cycle time, delivery). Employees belong to learning & growth; EPS to financial; retention to customer.",
    explanationAr:
      "منظور العمليات = مقاييس التفوق التشغيلي (الجودة وزمن الدورة والتسليم). والموظفون في التعلم والنمو؛ والسهم في المالي؛ والاحتفاظ في العملاء.",
    standardTag: "Balanced scorecard",
    area: "accounting",
    difficulty: 1,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-15",
    stem: "For a not-for-profit surgery clinic, the BEST composite efficiency measure is:",
    stemAr: "لعيادة جراحية غير ربحية، أفضل مقياس كفاءة مركب:",
    options: [
      "Cost per successful operation (input ÷ outcome achieved)",
      "Total funds raised",
      "Number of doctors employed",
      "Square metres of building per patient",
    ],
    optionsAr: [
      "التكلفة لكل عملية ناجحة (المدخل ÷ الناتج المحقق)",
      "إجمالي التبرعات",
      "عدد الأطباء",
      "أمتار المبنى لكل مريض",
    ],
    answerIndex: 0,
    explanation:
      "NFP performance = economy, efficiency, effectiveness — a cost-per-outcome measure blends efficiency and effectiveness; the distractors measure inputs only or meaningless ratios.",
    explanationAr:
      "أداء غير الربحي = اقتصاد وكفاءة وفاعلية — وقياس كلفة الناتج يمزج الكفاءة بالفاعلية؛ والمشتتات تقيس المدخلات فقط أو نسبًا لا معنى لها.",
    standardTag: "Not-for-profit performance",
    area: "accounting",
    difficulty: 2,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-16",
    stem: "Division X (no spare capacity, external price $50, variable cost $30) transfers to Division Y. The minimum transfer price is:",
    stemAr: "القسم س (بلا طاقة فائضة، سعر خارجي 50، تكلفة متغيرة 30) ينقل للقسم ص. الحد الأدنى لسعر النقل:",
    options: ["$50 — the contribution forgone externally", "$30 — the variable cost", "$80 — variable plus margin", "$20 — the contribution"],
    optionsAr: ["50 دولارًا — المساهمة المضحّى عليها خارجيًا", "30 دولارًا — التكلفة المتغيرة", "80 دولارًا — المتغيرة زائد هامش", "20 دولارًا — المساهمة"],
    answerIndex: 0,
    explanation:
      "A capacity-constrained division's floor is its opportunity cost: external price $50 (variable cost $30 + forgone external contribution $20). $30 applies only with spare capacity.",
    explanationAr:
      "حد قسم مقيّد الطاقة هو كلفة فرصته: السعر الخارجي 50 (التكلفة المتغيرة 30 + المساهمة الخارجية المضحّى بها 20). أما 30 فتسري فقط مع طاقة فائضة.",
    standardTag: "Transfer pricing",
    area: "accounting",
    difficulty: 2,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-17",
    stem: "Which pair are BOTH leading (rather than lagging) performance indicators?",
    stemAr: "أي زوج يُعدان مؤشرين قائدين (لا متخلفين) للأداء؟",
    options: [
      "Training hours per employee and machine maintenance compliance",
      "Return on capital employed and last quarter's profit",
      "Customer complaints received and warranty claims paid",
      "Revenue per customer and churn rate",
    ],
    optionsAr: [
      "ساعات التدريب لكل موظف والالتزام بصيانة الآلات",
      "العائد على رأس المال المستخدم وربح الربع الماضي",
      "شكاوى العملاء الواردة ومطالبات الضمان المسددة",
      "الإيراد لكل عميل ونسبة التسرب",
    ],
    answerIndex: 0,
    explanation:
      "Leading indicators predict future performance (training, maintenance prevent future failure); lagging indicators report outcomes already achieved (ROCE, profit, churn).",
    explanationAr:
      "المؤشرات القائدة تنبئ بالأداء القادم (التدريب والصيانة يقيان الفشل لاحقًا)؛ والمتخلفة تُخبر نتائج تحققت بالفعل (العائد والربح والتسرب).",
    standardTag: "Performance indicators",
    area: "accounting",
    difficulty: 1,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-18",
    stem: "A learning curve of 90% means that each time cumulative output doubles, the average time per unit:",
    stemAr: "منحنى تعلم 90% يعني أنه كلما تضاعف الناتج التراكمي، متوسط زمن الوحدة:",
    options: ["Falls to 90% of its previous level", "Falls by 90%", "Falls by 10 minutes", "Rises by 10%"],
    optionsAr: ["يهبط إلى 90% من مستواه السابق", "يهبط بمقدار 90%", "يهبط 10 دقائق", "يرتفع 10%"],
    answerIndex: 0,
    explanation:
      "A 90% learning curve: each doubling of cumulative volume reduces the cumulative average time per unit to 90% of the previous average — the examiner's wording trap is 'falls by 90%'.",
    explanationAr:
      "منحنى تعلم 90%: كل مضاعفة للناتج التراكمي تُنزل المتوسط التراكمي لزمن الوحدة إلى 90% من المتوسط السابق — وفخ الصياغة هو «يهبط بمقدار 90%».",
    standardTag: "Learning curves",
    area: "accounting",
    difficulty: 2,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-19",
    stem: "Expected value 220,000 with outcomes 150,000 (p 0.5), 200,000 (p 0.3) and X (p 0.2). X is:",
    stemAr: "القيمة المتوقعة 220,000 بنتائج 150,000 (احتمال 0.5) و200,000 (0.3) وX (0.2). قيمة X:",
    options: ["$425,000", "$310,000", "$375,000", "$220,000"],
    optionsAr: ["425,000 دولار", "310,000 دولار", "375,000 دولار", "220,000 دولار"],
    answerIndex: 0,
    explanation:
      "0.5(150,000) + 0.3(200,000) + 0.2X = 220,000 → 75,000 + 60,000 + 0.2X = 220,000 → 0.2X = 85,000 → X = $425,000.",
    explanationAr:
      "0.5(150,000) + 0.3(200,000) + 0.2X = 220,000 ← 135,000 + 0.2X = 220,000 ← 0.2X = 85,000 ← X = 425,000 دولار.",
    standardTag: "Risk & uncertainty",
    area: "accounting",
    difficulty: 2,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-20",
    stem: "Which cost is relevant when pricing a one-off export order that would use idle capacity?",
    stemAr: "أي تكلفة ملائمة عند تسعير طلب تصدير لمرة واحدة سيستخدم طاقة عاطلة؟",
    options: [
      "Variable production costs plus incremental shipping and packaging",
      "A share of absorbed fixed production overhead",
      "Sunk product-development costs",
      "The marketing department's salaries",
    ],
    optionsAr: [
      "التكاليف المتغيرة للإنتاج مضافًا إليها الشحن والتغليف التراكميان",
      "نصيب من الصناعية الثابتة المحملة",
      "تكاليف تطوير المنتج الغارقة",
      "رواتب إدارة التسويق",
    ],
    answerIndex: 0,
    explanation:
      "Relevant = future incremental cash flows caused by the order. Absorbed fixed overhead and salaries continue regardless; development costs are sunk.",
    explanationAr:
      "الملائم = التدفقات النقدية المستقبلية التراكمية التي يسببها الطلب. والثابتة المحملة والرواتب تستمر دوامًا؛ والتطوير غارق.",
    standardTag: "Relevant costing",
    area: "accounting",
    difficulty: 1,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-21",
    stem: "In environmental management accounting, 'environmental internal failure costs' are best described as:",
    stemAr: "في المحاسبة الإدارية البيئية، «تكاليف الفشل الداخلي البيئي» هي:",
    options: [
      "Costs of waste, scrap and clean-up before product leaves the plant",
      "Fines and compensation after external damage",
      "Costs of environmental audits and certification",
      "Costs of designing cleaner processes",
    ],
    optionsAr: [
      "تكاليف الهدر والتلف والمعالجة قبل خروج المنتج من المصنع",
      "الغرامات والتعويضات بعد ضرر خارجي",
      "تكاليف المراجعات والشهادات البيئية",
      "تكاليف تصميم عمليات أنظف",
    ],
    answerIndex: 0,
    explanation:
      "EMA's failure taxonomy mirrors quality costing: internal failure = waste/scrap/effluent treatment inside the plant; external = after-release damage; prevention = design; appraisal = audits.",
    explanationAr:
      "تصنيف الفشل في المحاسبة البيئية يوازي تكاليف الجودة: الفشل الداخلي = هدر وتلف ومعالجة منبعثات داخل المصنع؛ والخارجي = الضرر بعد الانبعاث؛ والوقاية = التصميم؛ والتقييم = المراجعات.",
    standardTag: "Environmental costing",
    area: "accounting",
    difficulty: 2,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-22",
    stem: "A 'flexed budget' at actual volume compared with actual costs isolates:",
    stemAr: "«الموازنة المرنة» عند الحجم الفعلي مقارنةً بالتكاليف الفعلية تعزل:",
    options: [
      "Cost control (spending) effects from volume effects",
      "Market share movements",
      "Tax charge differences",
      "Price mix changes only",
    ],
    optionsAr: [
      "أثر الرقابة على الإنفاق عن آثار الحجم",
      "تحركات الحصة السوقية",
      "فروق عبء الضريبة",
      "تغيرات مزيج السعر فقط",
    ],
    answerIndex: 0,
    explanation:
      "Flexing restates the budget at actual activity so the remaining variance is control, not volume — the entire reason flexible budgets exist.",
    explanationAr:
      "المطط يعيد صياغة الموازنة عند النشاط الفعلي فيصبح الانحراف الباقي رقابيًا لا حجميًا — وهذا علة وجود الموازنات المرنة أصلًا.",
    standardTag: "Flexible budgets",
    area: "accounting",
    difficulty: 1,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-23",
    stem: "Using standard costing in a TQM environment is questioned mainly because:",
    stemAr: "استخدام التكلفة المعيارية في بيئة إدارة الجودة الشاملة يُنتقد أساسًا لأن:",
    options: [
      "Variances encourage conformance to standard rather than continuous improvement",
      "Standards cannot be set for materials",
      "It is too expensive to compute",
      "It ignores taxation",
    ],
    optionsAr: [
      "الانحرافات تشجع الالتزام بالمعيار بدل التحسين المستمر",
      "لا يمكن وضع معايير للمواد",
      "حسابها مكلف للغاية",
      "تهمل الضرائب",
    ],
    answerIndex: 0,
    explanation:
      "In TQM, today's standard is tomorrow's waste — variance reporting can reward 'making standard' and discourage improvement beyond it; hence kaizen/attribution approaches.",
    explanationAr:
      "في الجودة الشاملة، معيار اليوم هدر الغد — وتقارير الانحراف قد تكافئ «بلوغ المعيار» وتثبط تجاوزه؛ ومن هنا مناهج الكايزن.",
    standardTag: "Standard costing critique",
    area: "accounting",
    difficulty: 2,
    source: "ACCA PM past paper (adapted)",
  },
  {
    code: "PM-P1-24",
    stem: "Which is a well-known pitfall of ROI as a divisional measure?",
    stemAr: "أي مما يلي عيب شهير للعائد على الاستثمار كمقياس قسمي؟",
    options: [
      "It discourages managers from accepting projects earning above the cost of capital but below the division's current ROI",
      "It cannot be calculated for investment centres",
      "It ignores profit entirely",
      "It requires current-asset valuations by law",
    ],
    optionsAr: [
      "يثبط المديرين عن قبول مشروعات تتجاوز كلفة رأس المال لكنها دون عائد القسم الحالي",
      "لا يمكن حسابه لمراكز الاستثمار",
      "يهمل الربح تمامًا",
      "يوجب القانون فيه تقييم الأصول بأسعار جارية",
    ],
    answerIndex: 0,
    explanation:
      "The classic ROI dysfunction: a division at 20% ROI rejects a 15% project that exceeds the 10% cost of capital — wealth-destroying at group level. Residual income fixes this.",
    explanationAr:
      "الخلل الكلاسيكي: قسم بعائد 20% يرفض مشروعًا بعائد 15% يتجاوز كلفة رأس مال 10% — وهو إتلاف للثروة على مستوى المجموعة. والدخل المتبقي يعالجه.",
    standardTag: "Divisional performance",
    area: "accounting",
    difficulty: 2,
    source: "ACCA PM past paper (adapted)",
  },
]

/* ==================== TX (F6) Taxation — 24 Q ==================== */

export const TX_PAPER: PaperSeedQ[] = [
  {
    code: "TX-P1-01",
    stem: "Under the general income-tax framework, which income source is assessed on a CURRENT-YEAR basis in most systems?",
    stemAr: "وفق الإطار العام لضريبة الدخل، أي مصدر دخل يُقيَّم على أساس السنة الجارية في معظم النظم؟",
    options: ["Employment income", "Trading profits of an unincorporated business", "Property business profits", "Interest income"],
    optionsAr: ["دخل التوظيف", "أرباح النشاط لمنشأة فردية", "أرباح عقارات الإيجار", "دخل الفوائد"],
    answerIndex: 0,
    explanation:
      "Employment income is taxed on amounts earned in the tax year itself. Trading and property profits typically follow the previous-year (or preceding-period) basis with opening/closing-year rules; interest follows special rules.",
    explanationAr:
      "دخل التوظيف يُفرض على ما اكتُسب في السنة الضريبية ذاتها. أما أرباح النشاط والعقارات فتتبع عادة قاعدة السنة السابقة بقواعد السنة الافتتاحية والختامية؛ والفوائد بقواعد خاصة.",
    standardTag: "Basis of assessment",
    area: "accounting",
    difficulty: 2,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-02",
    stem: "In computing taxable trading profit, which expense is DEDUCTIBLE?",
    stemAr: "في احتساب الربح الضريبي للنشاط، أي مصروف يجوز خصمه؟",
    options: [
      "Accounting and audit fees incurred for the business",
      "A fine for late filing of tax returns",
      "Capital cost of a delivery van",
      "A political donation",
    ],
    optionsAr: [
      "أتعاب المحاسبة والمراجعة لأجل النشاط",
      "غرامة التأخر في تقديم الإقرارات",
      "التكلفة الرأسمالية لسيارة توزيع",
      "تبرع سياسي",
    ],
    answerIndex: 0,
    explanation:
      "The golden rules: deduct revenue expenses wholly and exclusively for trade — professional fees qualify. Fines are not for the trade's purposes; the van is capital (capital allowances instead); political donations are specifically disallowed.",
    explanationAr:
      "القاعدة الذهبية: تُخصم المصروفات الإيرادية الملائمة كليًا للنشاط — والأتعاب المهنية تدخل. أما الغرامات فليست لغرض النشاط؛ والسيارة رأسمالية (بدلها الإهلاك الضريبي)؛ والتبرعات السياسية ممنوعة نصًا.",
    standardTag: "Trading income",
    area: "accounting",
    difficulty: 1,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-03",
    stem: "A sole trader's accounts include $2,000 of depreciation. For tax purposes this is:",
    stemAr: "حسابات تاجر فرد تتضمن 2,000 دولار إهلاكًا حسابيًا. ضريبيًا يكون هذا:",
    options: [
      "Added back and replaced by capital allowances",
      "Deducted as incurred",
      "Deducted at double rate",
      "Carried forward indefinitely",
    ],
    optionsAr: [
      "يُضاف ثم يُستبدل ببدلات رأس المال",
      "يُخصم كما حدث",
      "يُخصم بمعدل مضاعف",
      "يُرحَّل بلا حدود",
    ],
    answerIndex: 0,
    explanation:
      "Depreciation is an accounting estimate, disallowed for tax; it is added back and the statutory capital-allowance regime (writing-down allowances, etc.) gives the tax deduction instead.",
    explanationAr:
      "الإهلاك الحسابي تقدير محاسبي ممنوع ضريبيًا؛ فيُضاف ثم يمنح نظام بدلات رأس المال القانوني (بدل التنقيص ونحوه) الخصم الضريبي بدلًا منه.",
    standardTag: "Trading income",
    area: "accounting",
    difficulty: 1,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-04",
    stem: "Writing-down allowance is generally given at the MAIN rate on which pool of expenditure?",
    stemAr: "بدل التنقيص يُمنح عمومًا بالمعدل الرئيسي على أي مجمّع إنفاق؟",
    options: ["The main plant pool (excluding cars with high CO2 and special-rate assets)", "Cars with high emissions", "Integral features", "Long-life assets"],
    optionsAr: ["المجمّع الرئيسي للأصول (باستثناء السيارات عالية الانبعاث والأصول ذات المعدل الخاص)", "السيارات عالية الانبعاث", "السمات المدمجة", "الأصول طويلة العمر"],
    answerIndex: 0,
    explanation:
      "The main pool takes the main WDA rate (typically 18%); special-rate items — high-emission cars, integral features, long-life assets — go to the special-rate pool at the reduced rate (typically 6%).",
    explanationAr:
      "المجمّع الرئيسي يأخذ معدل التنقيص الرئيسي (18% عادة)؛ والعناصر ذات المعدل الخاص — السيارات عالية الانبعاث والسمات المدمجة وطويلة العمر — تذهب لمجمّع المعدل الخاص بالمعدل المخفض (6% عادة).",
    standardTag: "Capital allowances",
    area: "accounting",
    difficulty: 2,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-05",
    stem: "A business sells an asset from its main pool for MORE than original cost. The balancing charge is capped at:",
    stemAr: "منشأة تبيع أصلًا من مجمّعها الرئيسي بأكثر من التكلفة الأصلية. يُحدّ شحن التوازن عند:",
    options: [
      "The total capital allowances previously given on that asset",
      "The sale proceeds",
      "Original cost plus indexation",
      "Nil — balancing charges cannot arise on pool assets",
    ],
    optionsAr: [
      "إجمالي بدلات رأس المال الممنوحة سابقًا على ذلك الأصل",
      "حصيلة البيع",
      "التكلفة الأصلية مضافًا إليها المعالجة التضخمية",
      "صفر — لا ينشأ شحن توازن على أصول المجمّعات",
    ],
    answerIndex: 0,
    explanation:
      "A balancing charge claws back allowances and can never exceed the allowances actually given — even where proceeds exceed cost, the excess above original cost escapes the charge (it may be a chargeable gain instead).",
    explanationAr:
      "شحن التوازن يسترد البدلات ولا يتجاوزها أبدًا — وحتى لو فاقت الحصيلةُ التكلفةَ فإن الفائق فوق التكلفة الأصلية يفلت من الشحن (وقد يصبح ربحًا خاضعًا لكسب رأسمالي).",
    standardTag: "Capital allowances",
    area: "accounting",
    difficulty: 3,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-06",
    stem: "A company's taxable total profits are $400,000; it receives franked investment income (exempt) of $50,000. Corporation tax is computed on:",
    stemAr: "أرباح شركة الخاضعة الإجمالية 400,000 دولار؛ وتتلقى دخلًا استثماريًا معفى 50,000. تُحسب ضريبة الشركات على:",
    options: ["$400,000", "$450,000", "$350,000", "$50,000"],
    optionsAr: ["400,000 دولار", "450,000 دولارًا", "350,000 دولارًا", "50,000 دولارًا"],
    answerIndex: 0,
    explanation:
      "Exempt income (like most dividend income under participation exemptions) does not enter the tax base — the taxable total profits stand at $400,000. Adding it is the classic error.",
    explanationAr:
      "الدخل المعفى (كمعظم التوزيعات تحت إعفاءات المشاركة) لا يدخل الوعاء الضريبي — فتبقى الأرباح الخاضعة 400,000. وإضافته هو الخطأ الكلاسيكي.",
    standardTag: "Corporation tax",
    area: "accounting",
    difficulty: 1,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-07",
    stem: "In a group loss-relief framework, current-year trading losses may be surrendered to a fellow group company if:",
    stemAr: "في نظام تسوية الخسائر الجماعية، يجوز التنازل عن خسائر النشاط الجارية لشركة مجموعات شقيقة إذا:",
    options: [
      "The companies are in the same 75% group for the whole period and the claim is within time limits",
      "The companies share the same auditors",
      "Both companies are making profits",
      "The loss-making company is the parent",
    ],
    optionsAr: [
      "كانت الشركتان في مجموعة 75% ذاتها طوال الفترة وباشتراط ضمن المهلة",
      "تشاركت الشركتان المراجع نفسه",
      "كانت كلتاهما رابحة",
      "كانت الشركة الخاسرة هي الأم",
    ],
    answerIndex: 0,
    explanation:
      "Group relief requires a 75% group relationship existing throughout the relevant period, with the surrender made by claim within statutory time limits; direction of loss (parent or subsidiary) is irrelevant.",
    explanationAr:
      "تسوية المجموعة تشترط علاقة مجموعة 75% قائمة طوال الفترة المعنية، والتنازل بمطالبة ضمن المدد القانونية؛ واتجاه الخسارة (أم أو تابعة) غير ذي بال.",
    standardTag: "Loss relief",
    area: "accounting",
    difficulty: 2,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-08",
    stem: "Which statement about VAT registration thresholds is TRUE in most VAT systems?",
    stemAr: "أي عبارة عن حدود تسجيل ضريبة القيمة المضافة صحيحة في معظم النظم؟",
    options: [
      "A person must register once taxable turnover exceeds the threshold; voluntary registration below it may be possible",
      "Registration is optional at any turnover",
      "Registration is required from the first sale",
      "Only companies can register",
    ],
    optionsAr: [
      "يجب التسجيل متى تجاوز رقم الأعمال الخاضع الحد؛ وقد يجوز التسجيل الطوعي دونه",
      "التسجيل اختياري عند أي رقم أعمال",
      "التسجيل واجب منذ أول عملية بيع",
      "الشركات وحدها تستطيع التسجيل",
    ],
    answerIndex: 0,
    explanation:
      "Compulsory registration attaches at the threshold; below it, voluntary registration can benefit traders with taxable inputs. Individuals as well as companies can register.",
    explanationAr:
      "التسجيل الإلزامي يقع عند بلوغ الحد؛ ودونه قد ينفع التسجيل الطوعي أصحاب المدخلات الخاضعة. والأفراد كالشركات يسجلون.",
    standardTag: "VAT",
    area: "accounting",
    difficulty: 1,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-09",
    stem: "A business makes both standard-rated and exempt supplies. Its input VAT recovery generally:",
    stemAr: "منشأة تحقق معاملات خاضعة بالمعدل القياسي وأخرى معفاة. استرداد ضريبة المدخلات عمومًا:",
    options: [
      "Must be apportioned between taxable and exempt supplies",
      "Is fully recoverable",
      "Is never recoverable",
      "Is recoverable only from the tax authority's discretion",
    ],
    optionsAr: [
      "يجب توزيعه بين المعاملات الخاضعة والمعفاة",
      "يُسترد كاملًا",
      "لا يُسترد أبدًا",
      "يُسترد فقط بتقدير مصلحة الضرائب",
    ],
    answerIndex: 0,
    explanation:
      "A partly-exempt business apportions input VAT (standard methods based on turnover ratios) — recoverable to the extent of taxable supplies. Fully taxable traders recover all; fully exempt traders none.",
    explanationAr:
      "منشأة المعفى الجزئي توزع ضريبة مدخلاتها (بطرق قياسية على نسب رقم الأعمال) — فتسترد بقدر المعاملات الخاضعة. والخالص خاضعًا يسترد الكل؛ والخالص معفى لا يسترد شيئًا.",
    standardTag: "VAT",
    area: "accounting",
    difficulty: 2,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-10",
    stem: "Output VAT is charged on the sale of goods under standard rating. The double entry in the customer's books records input VAT as:",
    stemAr: "تُفرض ضريبة المخرجات على بيع البضائع بالمعدل القياسي. القيد في دفاتر العميل يُسجل ضريبة المدخلات:",
    options: ["A debit to a receivable/recoverable VAT account", "A credit to sales", "A debit to purchases only", "A credit to VAT payable"],
    optionsAr: ["مدينًا في حساب ضريبة قابلة للاسترداد", "دائنًا في المبيعات", "مدينًا في المشتريات فقط", "دائنًا في ضريبة مستحقة"],
    answerIndex: 0,
    explanation:
      "The buyer records input VAT as a receivable from the tax authority (debit), offsetting its output VAT; the seller credits a VAT payable. Purchases are recorded net.",
    explanationAr:
      "المشتري يسجل ضريبة المدخلات دينًا له على مصلحة الضرائب (مدين) يُقاص بضريبة مخرجاته؛ والبائع يسجلها دائنًا مستحقة. والمشتريات تُسجل صافية.",
    standardTag: "VAT",
    area: "accounting",
    difficulty: 1,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-11",
    stem: "For capital-gains tax, an asset bought for $10,000 and sold for $17,000 with $500 incidental costs of sale has a chargeable gain of:",
    stemAr: "لضريبة المكاسب الرأسمالية، أصل اشتري بـ 10,000 وبِيع بـ 17,000 وبنفقات بيع عرضية 500. الكسب الخاضع:",
    options: ["$6,500", "$7,000", "$6,000", "$17,000"],
    optionsAr: ["6,500 دولار", "7,000 دولار", "6,000 دولار", "17,000 دولار"],
    answerIndex: 0,
    explanation:
      "Gain = disposal proceeds less incidental costs of sale, less allowable acquisition cost: (17,000 − 500) − 10,000 = $6,500. Enhancement expenditure would also be deductible where incurred.",
    explanationAr:
      "الكسب = الحصيلة ناقص نفقات البيع العرضية ناقص تكلفة الاقتناء المسموحة: (17,000 − 500) − 10,000 = 6,500 دولار. وتُخصم كذلك نفقات التحسين عند وجودها.",
    standardTag: "Capital gains",
    area: "accounting",
    difficulty: 1,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-12",
    stem: "Employment income includes all of the following EXCEPT:",
    stemAr: "دخل التوظيف يشمل كل ما يلي ما عدا:",
    options: [
      "A genuinely incurred business expense reimbursed under an approved arrangement",
      "Bonus payments",
      "Taxable benefits in kind",
      "Salary and wages",
    ],
    optionsAr: [
      "مصروف أعمال مُتحمَّل فعلًا يُعوَّض وفق ترتيب معتمد",
      "الجوائز",
      "المزايا العينية الخاضعة",
      "الرواتب والأجور",
    ],
    answerIndex: 0,
    explanation:
      "Reimbursements of genuine business expenses under approved arrangements are not earnings. Bonuses, benefits in kind and salary are all taxable employment income.",
    explanationAr:
      "تعويض مصروفات الأعمال الحقيقية وفق ترتيب معتمد ليس دخلًا. أما الجوائز والمزايا العينية والراتب فدخل توظيف خاضع كلها.",
    standardTag: "Employment income",
    area: "accounting",
    difficulty: 1,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-13",
    stem: "A employee receives a low-interest loan from the employer at 1% while the official rate is 4%. The taxable benefit (loan $20,000) is:",
    stemAr: "موظف يتلقى قرضًا بفائدة 1% بينما المعدل الرسمي 4%. المنفعة الخاضعة (قرض 20,000):",
    options: ["$600", "$200", "$800", "Nil — loans are never benefits"],
    optionsAr: ["600 دولار", "200 دولار", "800 دولار", "لا شيء — القروض ليست منفعة أبدًا"],
    answerIndex: 0,
    explanation:
      "Benefit = (official rate − actual rate) × loan = (4% − 1%) × 20,000 = $600. The official-rate mechanism deems the difference a taxable cheap-loan benefit.",
    explanationAr:
      "المنفعة = (المعدل الرسمي − الفعلي) × القرض = (4% − 1%) × 20,000 = 600 دولار. وآلية المعدل الرسمي تعتبر الفرق منفعة قرض رخيص خاضعة.",
    standardTag: "Employment income",
    area: "accounting",
    difficulty: 2,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-14",
    stem: "A company pays its corporation tax late. The typical consequence is:",
    stemAr: "شركة تدفع ضريبة شركاتها متأخرة. النتيجة المعتادة:",
    options: [
      "Interest on the late tax and possible penalties",
      "Criminal imprisonment of directors",
      "Cancellation of the company's registration",
      "No consequence until an audit",
    ],
    optionsAr: [
      "فوائد على المتأخر وربما جزاءات",
      "حبس المديرين جنائيًا",
      "إلغاء تسجيل الشركة",
      "لا تبعث حتى مراجعة",
    ],
    answerIndex: 0,
    explanation:
      "Late payment regimes charge statutory interest from the due date plus penalties that escalate with delay. Criminal sanctions are for evasion, not late payment.",
    explanationAr:
      "نظم السداد المتأخر تفرض فوائد نظامية من تاريخ الاستحقاق وجزاءات تتصاعد مع التأخر. أما الجزاء الجنائي فللتهرب لا للتأخير.",
    standardTag: "Tax administration",
    area: "accounting",
    difficulty: 1,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-15",
    stem: "The 'benefits principle' versus the 'ability-to-pay principle' differ in that the latter:",
    stemAr: "مبدأ «المنافع» يختلف عن مبدأ «القدرة على الدفع» في أن الأخير:",
    options: [
      "Links tax to the taxpayer's economic capacity, not to specific state benefits received",
      "Charges only for services actually consumed",
      "Applies only to companies",
      "Requires a flat rate for everyone",
    ],
    optionsAr: [
      "يربط الضريبة بالطاقة الاقتصادية للمكلف لا بالمنافع العامة المحددة المتلقاة",
      "يفرض مقابل الخدمات المستهلكة فعلاً فقط",
      "يسري على الشركات وحدها",
      "يوجب معدلًا موحدًا للجميع",
    ],
    answerIndex: 0,
    explanation:
      "Ability-to-pay (the mainstream canon of modern systems) taxes according to income/wealth; the benefits principle prices state services like user charges — which fits local levies more than income tax.",
    explanationAr:
      "القدرة على الدفع (قاعدة النظم الحديثة) تفرض بحسب الدخل/الثروة؛ ومبدأ المنافع يسعّر الخدمات العامة كرسوم استخدام — وهو أنسب للرسول المحلية من ضريبة الدخل.",
    standardTag: "Tax theory",
    area: "accounting",
    difficulty: 1,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-16",
    stem: "A taxpayer opens a trading business on 1 April; the tax year runs 6 April to 5 April. Under the opening-year rules (current-year basis systems aside), the FIRST tax year's basis is typically:",
    stemAr: "مكلف يبدأ نشاطًا في 1 أبريل والسنة الضريبية من 6 أبريل إلى 5 أبريل. وفق قواعد السنة الافتتاحية يكون وعاء السنة الأولى عادةً:",
    options: [
      "Taxed on a period basis ending in that tax year — often the first 12 months from commencement",
      "Nil — no tax in year one",
      "The calendar-year profit",
      "Twice the average profit",
    ],
    optionsAr: [
      "يفرض على فترة منتهية داخل السنة الضريبية — غالبًا أول 12 شهرًا من البدء",
      "صفر — لا ضريبة في السنة الأولى",
      "ربح السنة الميلادية",
      "ضعف متوسط الربح",
    ],
    answerIndex: 0,
    explanation:
      "Opening-year rules assess the period ending in the tax year — normally the first 12 months of trading for year 2, with year 1 on the period to the accounting date; the pattern equalises so no profit escapes or doubles (overlap relief).",
    explanationAr:
      "قواعد السنة الافتتاحية تفرض على الفترة المنتهية داخل السنة الضريبية — عادة أول 12 شهرًا للسنة الثانية، والأولى على ما ينتهي بتاريخ المحاسبة؛ فيستوي الوعاء فلا يفلت ربح ولا يتكرر (بإعفاء التداخل).",
    standardTag: "Basis of assessment",
    area: "accounting",
    difficulty: 3,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-17",
    stem: "Withholding tax on interest paid to a non-resident generally serves to:",
    stemAr: "ضريبة الاستقطاع على فوائد مدفوعة لغير مقيم تخدم عمومًا:",
    options: [
      "Collect tax at source from income that would otherwise escape domestic collection",
      "Punish foreign investors",
      "Double-tax the same income permanently",
      "Fund the social security system",
    ],
    optionsAr: [
      "تحصيل الضريبة من المنبع لدفد كان سيفلت من التحصيل المحلي",
      "معاقبة المستثمرين الأجانب",
      "ازدواج ضريبي دائم على الدخل نفسه",
      "تمويل نظام التأمينات",
    ],
    answerIndex: 0,
    explanation:
      "Withholding secures the source state's tax on cross-border income at payment; double-tax treaties then allocate and relieve (usually via credit) to prevent permanent double taxation.",
    explanationAr:
      "الاستقطاع يضمن ضريبة دولة المنبع على الدخل العابر للحدود لحظة الدفع؛ ثم توزع الاتفاقيات وتعفي (بالخصم عادة) لمنع الازدواج الدائم.",
    standardTag: "International tax",
    area: "accounting",
    difficulty: 2,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-18",
    stem: "Transfer pricing rules exist primarily to:",
    stemAr: "قواعد أسعار النقل تقوم أساسًا من أجل:",
    options: [
      "Stop multinationals shifting profit out of jurisdictions by manipulating intra-group prices",
      "Set market prices for all goods",
      "Help subsidiaries report losses",
      "Eliminate customs duties",
    ],
    optionsAr: [
      "منع الشركات المتعددة الجنسيات من تحويل الأرباح خارج الولايات بتلاعب الأسعار البينية",
      "تسعير كل السلع سوقيًا",
      "مساعدة التابعات على إظهار خسائر",
      "إلغاء الرسوم الجمركية",
    ],
    answerIndex: 0,
    explanation:
      "Arm's-length transfer pricing protects each state's base: intra-group transactions must be priced as independent parties would, with documentation and adjustment powers backing it.",
    explanationAr:
      "أسعار النقل بمعيار التعامل بين مستقلين تحمي وعاء كل دولة: يجب تسعير معاملات المجموعة كما يتفق مستقلان، مستندةً إلى توثيق وسلطات تعديل.",
    standardTag: "International tax",
    area: "accounting",
    difficulty: 1,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-19",
    stem: "Value added tax is best described as:",
    stemAr: "ضريبة القيمة المضافة يُوصف أفضل وصف بأنها:",
    options: [
      "An indirect, consumption-based tax collected in stages on value added",
      "A direct tax on companies' profits",
      "A wealth tax on net assets",
      "A payroll tax on employers",
    ],
    optionsAr: [
      "ضريبة غير مباشرة على الاستهلاك تُحصَّل مرحليًا على القيمة المضافة",
      "ضريبة مباشرة على أرباح الشركات",
      "ضريبة ثروة على صافي الأصول",
      "ضريبة رواتب على أصحاب العمل",
    ],
    answerIndex: 0,
    explanation:
      "VAT taxes consumption: each trader charges output tax and credits input tax, remitting the difference — the value they added — until the final consumer bears it all.",
    explanationAr:
      "القيمة المضافة تفرض على الاستهلاك: كل تاجر يفرض ضريبة مخرجات ويخصم مدخلاته ويسدد الفرق — وهي قيمته المضافة — حتى يتحملها المستهلك النهائي كاملة.",
    standardTag: "VAT",
    area: "accounting",
    difficulty: 1,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-20",
    stem: "A partner's share of partnership loss may typically be set against:",
    stemAr: "حصة الشريك من خسارة الشراكة يجوز عادةً تقييدها ضد:",
    options: [
      "His other income of the same and/or adjacent years per the loss rules",
      "Only future partnership profits ever",
      "Other partners' income",
      "Nothing — losses vanish for partners",
    ],
    optionsAr: [
      "دخله الآخر للسنة ذاتها و/أو السنوات المجاورة وفق قواعد الخسائر",
      "أرباح الشراكة المستقبلية فقط أبدًا",
      "دخل الشركاء الآخرين",
      "لا شيء — الخسائر تضيع للشركاء",
    ],
    answerIndex: 0,
    explanation:
      "Partners are taxed on their profit share — and relieved on their loss share — as if earned directly, so the general loss-relief rules (against total income, carry-back/forward per statute) apply to each partner individually.",
    explanationAr:
      "يُفرض للشركاء على حصتهم من الربح — ويُخفف بحصتهم من الخسارة — كأنها كسبوها مباشرة، فتسري قواعد التخفيف العامة (ضد الدخل الكلي والترجيع/الترحيل نظامًا) على كل شريك بانفراد.",
    standardTag: "Partnership taxation",
    area: "accounting",
    difficulty: 2,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-21",
    stem: "Which item is specifically DISALLOWed when adjusting accounting profit to taxable trading profit?",
    stemAr: "أي بند ممنوع نصًا عند تسوية الربح الحسابي إلى الربح الضريبي؟",
    options: [
      "Legal fees for renewing a short lease used in the trade",
      "Trade subscriptions to professional bodies",
      "Customer entertainment (business entertaining)",
      "Bad debts specifically provided for and included in turnover",
    ],
    optionsAr: [
      "أتعاب تجديد إيجار قصير مستخدم في النشاط",
      "اشتراكات النقابات المهنية للنشاط",
      "ضيافة العملاء (الترفيه التجاري)",
      "الديون المعدومة المخصصة والمدرجة في رقم الأعمال",
    ],
    answerIndex: 2,
    explanation:
      "Customer entertainment is specifically disallowed. The other three are deductible: lease renewal fees (revenue for short leases), professional subscriptions, and specific bad-debt provisions.",
    explanationAr:
      "ضيافة العملاء ممنوعة نصًا. أما الثلاثة الأخرى فتُخصم: أتعاب تجديد الإيجار القصير (إيرادية)، واشتراكات النقابات، ومخصصات الديون المحددة.",
    standardTag: "Trading income",
    area: "accounting",
    difficulty: 2,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-22",
    stem: "An individual makes a pension contribution and receives relief at source. For a higher-rate taxpayer, additional relief is obtained by:",
    stemAr: "فرد يقدم اشتراك معاش ويحصل على الإعفاء من المنبع. ولصاحب المعدل الأعلى، يحصل على الإعفاء الإضافي عبر:",
    options: [
      "Extending the basic-rate band through the tax return",
      "Paying the relief to the pension provider",
      "A refund from the employer",
      "Reducing national insurance contributions",
    ],
    optionsAr: [
      "تمديد نطاق المعدل الأساسي عبر الإقرار الضريبي",
      "دفع الإعفاء لمزود المعاش",
      "استرداد من صاحب العمل",
      "تخفيض اشتراكات التأمينات",
    ],
    answerIndex: 0,
    explanation:
      "Relief-at-source pensions: the provider tops up with basic-rate relief; the higher-rate taxpayer then extends the basic-rate limit in the self-assessment return so more income is taxed at basic rate.",
    explanationAr:
      "معاشات الإعفاء من المنبع: المزود يضيف إعفاء المعدل الأساسي؛ ثم يمدد المكلف ذا المعدل الأعلى نطاق المعدل الأساسي في إقراره فيُفرض على دخل أكثر بالمعدل الأساسي.",
    standardTag: "Personal tax reliefs",
    area: "accounting",
    difficulty: 3,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-23",
    stem: "Tax avoidance differs from tax evasion in that avoidance:",
    stemAr: "التحايل الضريبي يختلف عن التهرب في أن التحايل:",
    options: [
      "Uses legal means within the letter of the law, while evasion illegally conceals or misstates facts",
      "Is always criminal",
      "Involves paying more tax than due",
      "Applies only to indirect taxes",
    ],
    optionsAr: [
      "يستخدم وسائل قانونية في حدود نص القانون، بينما يخفي التهرب الوقائع أو يزيّفها بغير مشروعية",
      "جنائي دائمًا",
      "ينطوي على دفع أكثر من المستحق",
      "يسري على الضرائب غير المباشرة فقط",
    ],
    answerIndex: 0,
    explanation:
      "Avoidance exploits legal gaps (met with anti-avoidance doctrines and GAARs); evasion — hiding income, falsifying records — is criminal fraud. Professional bodies' codes also discipline aggressive avoidance.",
    explanationAr:
      "التحايل يستثمر ثغرات مشروعة (تقابلها نظم مناهضة التحايل العامة)؛ والتهرب — إخفاء الدخل وتزييف السجلات — غش جنائي. وتقيم مدونات المهنة أيضًا التحايل العدواني.",
    standardTag: "Tax ethics",
    area: "ethics",
    difficulty: 1,
    source: "ACCA TX past paper (adapted)",
  },
  {
    code: "TX-P1-24",
    stem: "A company's accounting profit includes $10,000 of bank interest RECEIVED (interest is taxable income). The tax computation will:",
    stemAr: "ربح شركة الحسابي يتضمن 10,000 فوائد بنكية متلقاة (والفوائد دخل خاضع). الاحتساب الضريبي سيقوم بـ:",
    options: [
      "Leave interest in taxable profits — no adjustment needed since it is taxable",
      "Add it back as non-deductible",
      "Deduct it as exempt income",
      "Halve it under the partial-exemption rule",
    ],
    optionsAr: [
      "إبقاء الفوائد في الأرباح الخاضعة — لا تسوية إذ هي خاضعة",
      "إضافتها كغير قابلة للخصم",
      "خصمها كدخل معفى",
      "خفضها للنصف بقاعدة الإعفاء الجزئي",
    ],
    answerIndex: 0,
    explanation:
      "Interest received is taxable income already in profit — no add-back or deduction. Adjustments are needed only for items taxed differently from accounts (depreciation, disallowed expenses, exempt income).",
    explanationAr:
      "الفوائد المتلقاة دخل خاضع موجود أصلًا في الربح — فلا إضافة ولا خصم. والتسويات تلزم فقط لما يُفرض عليه اختلافًا عن الحسابات (الإهلاك والممنوعات والمعفى).",
    standardTag: "Corporation tax",
    area: "accounting",
    difficulty: 2,
    source: "ACCA TX past paper (adapted)",
  },
]
