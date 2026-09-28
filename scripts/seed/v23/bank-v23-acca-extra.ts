/** v23 seed data — FULL-LENGTH previous-exam papers, part 2:
 *  - Egyptian SOE paper extended to 24 questions
 *  - NEW ACCA FA (F3) Financial Accounting paper — 18 questions
 *  - NEW ACCA FM (F9) Financial Management paper — 18 questions */

export type ExtraPaperSeedQ = {
  code: string
  stem: string
  stemAr: string
  options: string[]
  optionsAr: string[]
  answerIndex: number
  explanation: string
  explanationAr: string
  standardTag: string
  area: "egypt" | "accounting"
  difficulty: 1 | 2 | 3
  source: string
}

/* ================= Egyptian SOE paper — full extension (13–24) ================= */

export const SOE_FULL: ExtraPaperSeedQ[] = [
  {
    code: "SOE-P1-13",
    stem: "The Egyptian Accounting Standards (EAS) are best described as:",
    stemAr: "أفضل وصف للمعايير المحاسبية المصرية:",
    options: [
      "A fully original framework unrelated to IFRS",
      "Largely adapted from IFRS, with limited Egypt-specific modifications",
      "Identical to US GAAP",
      "Applicable only to banks",
    ],
    optionsAr: [
      "إطار أصيل بالكامل لا صلة له بـ IFRS",
      "مكيّف إلى حد كبير من IFRS مع تعديلات مصرية محدودة",
      "مطابق للمعايير الأمريكية",
      "منطبق على البنوك فقط",
    ],
    answerIndex: 1,
    explanation:
      "The EAS are based on IFRS, adopted with limited local modifications — the practical exam angle is knowing where the local carve-outs sit and auditing under EAS while understanding the IFRS source of each treatment.",
    explanationAr:
      "المعايير المصرية مبنية على IFRS مع تعديلات محلية محدودة — وزاوية الامتحان العملية هي معرفة مواضع الاستثناءات المحلية ومراجعة وفقها مع فهم الأصل الدولي لكل معالجة.",
    standardTag: "EAS framework",
    area: "egypt",
    difficulty: 1,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-14",
    stem: "For an Egyptian state-owned enterprise, the accountability relationship for financial reporting runs primarily to:",
    stemAr: "بالنسبة لشركة مملوكة للدولة في مصر، تسري مسؤولية الإبلاغ المالي أساسًا تجاه:",
    options: [
      "The holding company and, through it, the Minister of the Public Business Sector and the state's oversight institutions",
      "The company's external auditors only",
      "The employees' union",
      "The international stock exchanges",
    ],
    optionsAr: [
      "الشركة القابضة ومنها إلى وزير قطاع الأعمال العام وأجهزة رقابة الدولة",
      "مراجعي الحسابات الخارجيين فقط",
      "نقابة العاملين",
      "البورصات الدولية",
    ],
    answerIndex: 0,
    explanation:
      "SOEs report through their holding companies to the Public Business Sector ministry and are subject to state oversight (including the Accountability State Authority) — the examiner's point is the layered public accountability chain, unique to the sector.",
    explanationAr:
      "ترفع شركات قطاع الأعمال تقاريرها عبر شركاتها القابضة إلى وزارة قطاع الأعمال العام وتخضع لرقابة الدولة (ومنها الجهاز المركزي للمحاسبات) — ونقطة الممتحن هي سلسلة المساءلة العامة المتدرجة الخاصة بالقطاع.",
    standardTag: "Egypt regulation",
    area: "egypt",
    difficulty: 2,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-15",
    stem: "The Egyptian Standards on Auditing (ESAs) used in SOE audits are:",
    stemAr: "معايير المراجعة المصرية المستخدمة في مراجعات شركات قطاع الأعمال:",
    options: [
      "Unrelated to the international framework",
      "Modelled on the ISAs, so ISA-based audit knowledge transfers directly",
      "Replaced by US auditing standards since 2019",
      "Limited to tax audits",
    ],
    optionsAr: [
      "لا صلة لها بالإطار الدولي",
      "مصوغة على غرار المعايير الدولية، فخلفية ISA تنطبق مباشرة",
      "استُبدلت بمعايير المراجعة الأمريكية منذ ٢٠١٩",
      "مقتصرة على فحوص الضرائب",
    ],
    answerIndex: 1,
    explanation:
      "The ESAs are built on the ISAs — Egyptian SOE exam questions therefore test ISA concepts through Egyptian terminology, and the auditor's file references map between the two frameworks.",
    explanationAr:
      "المعايير المصرية مبنية على الدولية — ولذا تختبر أسئلة امتحانات الشركات الحكومية مفاهيم ISA بمصطلحات مصرية، ومراجع ملف المراجعة تقابل بين الإطارين.",
    standardTag: "Egyptian ESAs",
    area: "egypt",
    difficulty: 1,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-16",
    stem: "Under Egyptian corporate governance requirements for state companies, the audit committee's core responsibility in the financial reporting chain is to:",
    stemAr: "وفق متطلبات الحوكمة المصرية للشركات الحكومية، المسؤولية الجوهرية للجنة المراجعة في سلسلة الإبلاغ المالي:",
    options: [
      "Prepare the financial statements personally",
      "Oversee financial reporting integrity, internal control and the external audit relationship on behalf of the board",
      "Sign the audit report alongside the external auditor",
      "Approve the auditor's fees out of its own private budget",
    ],
    optionsAr: [
      "إعداد القوائم المالية بنفسها",
      "الإشراف على سلامة الإبلاغ المالي والرقابة الداخلية والعلاقة مع المراجع الخارجي نيابة عن مجلس الإدارة",
      "توقيع تقرير المراجعة مع المراجع الخارجي",
      "اعتماد أتعاب المراجع من ميزانية خاصة بها",
    ],
    answerIndex: 1,
    explanation:
      "Audit committees oversee — they do not prepare or sign. Their leverage over reporting quality, internal control and the external auditor's independence is the governance mechanism the exam expects you to describe in SOE settings.",
    explanationAr:
      "لجان المراجعة تُشرف — لا تعد ولا توقع. وتأثيرها في جودة التقرير والرقابة الداخلية واستقلال المراجع الخارجي هو آلية الحوكمة التي يتوقع الممتحن وصفها في بيئة الشركات الحكومية.",
    standardTag: "Egypt governance",
    area: "egypt",
    difficulty: 2,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-17",
    stem: "An SOE revalues its land and buildings. Under the Egyptian standards (following the IAS 16 approach), the revaluation surplus is presented:",
    stemAr: "تعيد شركة حكومية تقييم أراضيها ومبانيها. وفق المعايير المصرية (على نهج IAS 16)، يُعرض فائض إعادة التقييم:",
    options: [
      "In profit or loss for the year",
      "In other comprehensive income, accumulating in equity as a revaluation surplus",
      "As deferred income amortised over the assets' lives",
      "As a statutory reserve required before any revaluation",
    ],
    optionsAr: [
      "في الأرباح أو الخسائر السنوية",
      "في الدخل الشامل الآخر متجمعًا في حقوق الملكية كفائض إعادة تقييم",
      "كإيراد مؤجل يطفأ على عمر الأصول",
      "كاحتياطي قانوني تشترطه إعادة التقييم",
    ],
    answerIndex: 1,
    explanation:
      "The Egyptian treatment follows the IAS 16 model: the surplus goes to OCI and equity, with optional transfer to retained earnings as realised — SOE statements show it as a distinct equity component.",
    explanationAr:
      "المعالجة المصرية تتبع نموذج IAS 16: الفائض يذهب للدخل الشامل الآخر وحقوق الملكية، مع جواز تحويله للأرباح المرحلة عند تحققه — ويعرض في قوائم الشركات الحكومية كمكون مستقل لحقوق الملكية.",
    standardTag: "EAS / IAS 16",
    area: "egypt",
    difficulty: 2,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-18",
    stem: "When an Egyptian SOE hires a new external auditor, registration with which body is a prerequisite for signing the audit report?",
    stemAr: "عند تعيين مراجع حسابات خارجي جديد لشركة حكومية مصرية، ما التسجيل اللازم مسبقًا لتوقيع تقرير المراجعة؟",
    options: [
      "The Egyptian Syndicate of Accountants and Auditors (نقابة المحاسبين والمراجعين)",
      "The stock exchange only",
      "The Ministry of Tourism",
      "No registration is required for audit firms",
    ],
    optionsAr: [
      "نقابة المحاسبين والمراجعين المصريين",
      "البورصة فقط",
      "وزارة السياحة",
      "لا يلزم تسجيل لمكاتب المراجعة",
    ],
    answerIndex: 0,
    explanation:
      "Practising auditors in Egypt must be registered with the Syndicate of Accountants and Auditors; verifying the auditor's registration and licence status is a standard acceptance/ethics checkpoint in SOE audits.",
    explanationAr:
      "يمارس المراجعون في مصر عملهم بموجب القيد بنقابة المحاسبين والمراجعين؛ والتحقق من قيد المراجع وترخيصه نقطة اعتماد وأخلاقيات معيارية في مراجعات الشركات الحكومية.",
    standardTag: "Egypt regulation",
    area: "egypt",
    difficulty: 1,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-19",
    stem: "In Egyptian practice, a فحص محدود (limited assurance review) of quarterly SOE financial information differs from an audit because it:",
    stemAr: "في الممارسة المصرية، يختلف الفحص المحدود للقوائم الربعية للشركات الحكومية عن المراجعة لأنه:",
    options: [
      "Provides the same level of assurance with different paperwork",
      "Provides negative assurance based mainly on inquiry and analytical procedures",
      "Is designed to detect all fraud",
      "Removes the auditor's responsibility for the working papers",
    ],
    optionsAr: [
      "يمنح مستوى تأكيد مماثلًا بأوراق مختلفة",
      "يمنح تأكيدًا سلبيًا قائمًا أساسًا على الاستفسار والإجراءات التحليلية",
      "مصمم لاكتشاف كل غش",
      "يسقط مسؤولية المراجع عن ملف العمل",
    ],
    answerIndex: 1,
    explanation:
      "A review (on the ISRE 2400 model adopted in Egyptian practice) provides NEGATIVE assurance — nothing has come to the reviewer's attention — using inquiry and analytics rather than the audit's full evidence mix; it is not fraud-detection focused.",
    explanationAr:
      "الفحص المحدود (على نموذج ISRE 2400 المتبنى مصريًا) يمنح تأكيدًا سلبيًا — لم يعرض ما يلفت النظر — بالاستفسار والتحليل دون منظومة أدلة المراجعة الكاملة، وليس موجهًا لكشف الغش.",
    standardTag: "ISRE 2400 / ESA",
    area: "egypt",
    difficulty: 2,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-20",
    stem: "The core difference between a COMPLIANCE audit and a PERFORMANCE audit of an Egyptian state entity is:",
    stemAr: "الفرق الجوهري بين مراجعة الامتثال ومراجعة الأداء لجهة حكومية مصرية:",
    options: [
      "Compliance checks adherence to laws and regulations; performance examines economy, efficiency and effectiveness",
      "Compliance is done by internal auditors only",
      "Performance audit is limited to financial statements",
      "There is no difference — the terms are interchangeable",
    ],
    optionsAr: [
      "الامتثال يفحص الالتزام بالقوانين واللوائح؛ والأداء يفحص الاقتصاد والكفاءة والفاعلية",
      "الامتثال يقوم به المراجعون الداخليون فقط",
      "مراجعة الأداء محصورة في القوائم المالية",
      "لا فرق — فالمصطلحان مترادفان",
    ],
    answerIndex: 0,
    explanation:
      "Compliance auditing asks 'was it done according to the rules?'; performance auditing (the 3 Es — economy, efficiency, effectiveness) asks 'were resources used well?'. Both are core public-sector mandates that the exam contrasts regularly.",
    explanationAr:
      "مراجعة الامتثال تسأل: هل أُنفذ وفق القواعد؟ ومراجعة الأداء (المثلث الاقتصاد والكفاءة والفاعلية) تسأل: هل استُخدمت الموارد على نحو حسن؟ وكلتاهما من صميم تفويض القطاع العام ويقارنهما الامتحان دائمًا.",
    standardTag: "Public sector audit",
    area: "egypt",
    difficulty: 1,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-21",
    stem: "An Egyptian SOE's financial statements must, per the sector's framework, present comparative figures. The auditor's report should cover:",
    stemAr: "وفق إطار القطاع، يجب أن تعرض قوائم الشركة الحكومية أرقامًا مقارنة. ويجب أن يغطي تقرير المراجعة:",
    options: [
      "The current period only",
      "The current period and the comparatives for the corresponding preceding period",
      "Whatever management selects",
      "The current period plus a five-year forecast",
    ],
    optionsAr: [
      "الفترة الحالية فقط",
      "الفترة الحالية والأرقام المقارنة للفترة السابقة المناظرة",
      "ما تختاره الإدارة",
      "الفترة الحالية مع توقع لخمس سنوات",
    ],
    answerIndex: 1,
    explanation:
      "The audit opinion covers BOTH the current period and the restated comparatives — a classic exam trap: procedures on opening balances and consistency of presentation feed the comparatives the opinion also addresses.",
    explanationAr:
      "يشمل رأي المراجعة الفترة الحالية والمقارنات المعاد عرضها — وهو فخ امتحاني كلاسيكي: إجراءات الأرصدة الافتتاحية واتساق العرض تخدم المقارنات التي يغطيها الرأي كذلك.",
    standardTag: "ESA reporting",
    area: "egypt",
    difficulty: 1,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-22",
    stem: "In an SOE audit, the team discovers unsupported payments to a board member's company. Beyond the accounting impact, the Egyptian corporate governance angle makes this primarily:",
    stemAr: "في مراجعة شركة حكومية يكتشف الفريق مدفوعات غير مؤيدة لشركة تابعة لأحد أعضاء المجلس. وإلى جانب الأثر المحاسبي، تجعل زاوية الحوكمة المصرية المسألة أساسًا:",
    options: [
      "A related-party and conflict-of-interest matter to report to the audit committee and those charged with governance",
      "An ordinary expense to pass silently",
      "A tax adjustment only",
      "Beyond the audit's scope entirely",
    ],
    optionsAr: [
      "مسألة أطراف ذاتي علاقة وتضارب مصالح تُرفع للجنة المراجعة وأصحاب الحكم",
      "مصروف عادي يمر بصمت",
      "تسوية ضريبية فقط",
      "خارج نطاق المراجعة كليًا",
    ],
    answerIndex: 0,
    explanation:
      "Board-member dealings are related-party transactions with a conflict-of-interest dimension — ISA 550/Egyptian governance codes require disclosure and communication to the audit committee; silence is never an option, and the tax angle is secondary.",
    explanationAr:
      "تعاملات أعضاء المجلس معاملات أطراف ذاتي علاقة ذات بعد تضارب مصالح — وتتطلب ISA 550 وقواعد الحوكمة المصرية الإفصاح وإبلاغ لجنة المراجعة؛ فالصمت ليس خيارًا، والزاوية الضريبية ثانوية.",
    standardTag: "ISA 550 / governance",
    area: "egypt",
    difficulty: 2,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-23",
    stem: "Egyptian Income Tax Law compliance testing in an SOE audit is an example of:",
    stemAr: "فحص الامتثال لأحكام قانون الضريبة على الدخل المصري في مراجعة شركة حكومية مثال على:",
    options: [
      "Testing compliance with laws and regulations under ISA 250",
      "Performance auditing",
      "A purely tax engagement outside the audit",
      "Internal audit work that the external auditor may never rely on",
    ],
    optionsAr: [
      "اختبار الامتثال للقوانين واللوائح وفق ISA 250",
      "مراجعة أداء",
      "مهمة ضريبية خالصة خارج المراجعة",
      "عمل مراجعة داخلية لا يجوز للخارجي الاعتماد عليه أبدًا",
    ],
    answerIndex: 0,
    explanation:
      "Tax rules are laws and regulations — testing the entity's compliance and the tax provision's accuracy sits inside ISA 250's framework, while the auditor remains alert to the other public-sector dimensions of the same finding.",
    explanationAr:
      "الأحكام الضريبية قوانين ولوائح — فاختبار امتثال المنشأة ودقة مخصص الضريبة يقع داخل إطار ISA 250، مع بقاء المراجع متنبهًا للأبعاد الأخرى للقطاع العام في الملاحظة نفسها.",
    standardTag: "ISA 250 / Egypt tax",
    area: "egypt",
    difficulty: 2,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-24",
    stem: "For an SOE whose shares are listed on the EGX, an auditor modifying the opinion must also remember that:",
    stemAr: "بالنسبة لشركة حكومية أسهمها مدرجة بالبورصة المصرية، على المراجع الذي يعدل رأيه ألا ينسى أن:",
    options: [
      "The modification has no disclosure consequences beyond the report",
      "Listing rules and market disclosure obligations make timely, accurate communication of the modified report essential",
      "The exchange must approve the opinion first",
      "The opinion is only delivered to management",
    ],
    optionsAr: [
      "للتعديل لا آثار إفصاحية بعد التقرير",
      "قواعد الإدراج والتزامات الإفصاح السوقي تجعل الاتصال الفوري والدقيق بالتقرير المعدل أمرًا جوهريًا",
      "البورصة يجب أن تعتمد الرأي أولًا",
      "يسلّم الرأي للإدارة فقط",
    ],
    answerIndex: 1,
    explanation:
      "A modified opinion on a listed SOE is price-sensitive information — exchange disclosure rules require prompt publication of the report's effect, and the auditor's report wording feeds the company's market announcement.",
    explanationAr:
      "الرأي المعدل لشركة حكومية مدرجة معلومة مؤثرة في السعر — فقواعد إفصاح البورصة تلزم النشر الفوري لأثر التقرير، وصياغة المراجع تغذي إعلان الشركة للسوق.",
    standardTag: "EGX listing rules",
    area: "egypt",
    difficulty: 2,
    source: "Egypt SOE audit past paper (adapted)",
  },
]

/* ================= NEW: ACCA FA (F3) Financial Accounting paper ================= */

export const FA_PAPER: ExtraPaperSeedQ[] = [
  {
    code: "FA-P1-01",
    stem: "A business buys goods on credit from a supplier. The correct double entry is:",
    stemAr: "تشتري منشأة بضائع بالأجل من مورد. القيد المزدوج الصحيح:",
    options: [
      "Debit purchases, credit trade payables",
      "Debit trade payables, credit purchases",
      "Debit purchases, credit cash",
      "Debit cash, credit purchases",
    ],
    optionsAr: [
      "مدين المشتريات، دائن الموردون",
      "مدين الموردون، دائن المشتريات",
      "مدين المشتريات، دائن النقدية",
      "مدين النقدية، دائن المشتريات",
    ],
    answerIndex: 0,
    explanation:
      "A credit purchase increases expenses (debit purchases) and the liability to the supplier (credit payables); no cash moves until settlement.",
    explanationAr:
      "الشراء بالأجل يزيد المصروف (مدين المشتريات) والالتزام تجاه المورد (دائن الموردون)؛ ولا يتحرك النقد حتى السداد.",
    standardTag: "Double entry",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-02",
    stem: "The primary purpose of a trial balance is to:",
    stemAr: "الغرض الأساسي لميزان المراجعة:",
    options: [
      "Prove the arithmetical accuracy of the double entry system",
      "Detect every bookkeeping error",
      "Show the financial position to investors",
      "Replace the financial statements",
    ],
    optionsAr: [
      "إثبات الدقة الحسابية لنظام القيد المزدوج",
      "كشف كل أخطاء مسك الدفاتر",
      "عرض المركز المالي للمستثمرين",
      "الاستغناء عن القوائم المالية",
    ],
    answerIndex: 0,
    explanation:
      "A trial balance checks that debits equal credits; errors of commission, omission, principle or compensating errors can leave it balanced — so it proves arithmetic balance, not completeness of correctness.",
    explanationAr:
      "يتحقق ميزان المراجعة من تعادل المدين والدائن؛ وقد يبقى متوازنًا رغم أخطاء القيد أو الحذف أو المبدأ أو المتقابلة — فهو يثبت التوازن الحسابي لا سلامة كل قيد.",
    standardTag: "Trial balance",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-03",
    stem: "Which error would NOT cause a trial balance imbalance?",
    stemAr: "أي خطأ لا يُخل بتوازن ميزان المراجعة؟",
    options: [
      "A purchase of EGP 500 debited to purchases as EGP 50",
      "A sale completely omitted from the books",
      "A one-sided entry: cash received debited but no credit posted",
      "Posting to the wrong side of only one account",
    ],
    optionsAr: [
      "شراء بمبلغ ٥٠٠ جنيه قُيد بالمشتريات ٥٠ جنيهًا",
      "عملية بيع محذوفة كليًا من الدفاتر",
      "قيد أحادي: النقدية المقبوضة مدين دون دائن مقابل",
      "ترحيل للجهة الخطأ في حساب واحد فقط",
    ],
    answerIndex: 1,
    explanation:
      "Complete omission leaves both sides equally short, so the trial balance still balances. One-sided or single-account errors (A, C, D) unbalance it.",
    explanationAr:
      "الحذف الكامل ينقص الجانبين بالتساوي فيظل الميزان متوازنًا؛ أما الأخطاء الأحادية أو أحادية الحساب (أ، ج، د) فتخل به.",
    standardTag: "Errors",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-04",
    stem: "At the month end, a company's cash book shows EGP 42,000; bank statements show EGP 39,400. Cheques of EGP 3,600 written to suppliers have not yet cleared. The true cash position is:",
    stemAr: "في نهاية الشهر يظهر دفتر النقدية ٤٢ ألف جنيه وكشف البنك ٣٩٤٠٠. شيكات بقيمة ٣٦٠٠ للموردين لم تُصرف بعد. المركز النقدي الحقيقي:",
    options: [
      "EGP 39,400",
      "EGP 42,000",
      "EGP 45,600",
      "EGP 35,800",
    ],
    optionsAr: [
      "٣٩٤٠٠ جنيه",
      "٤٢٠٠٠ جنيه",
      "٤٥٦٠٠ جنيه",
      "٣٥٨٠٠ جنيه",
    ],
    answerIndex: 1,
    explanation:
      "Unpresented (outstanding) cheques explain the gap: the cash book figure 42,000 already records them, so the true position is 42,000 — the bank statement lags, and the reconciliation bridges the difference.",
    explanationAr:
      "الشيكات غير المصروفة تفسر الفارق: دفتر النقدية ٤٢٠٠و يسجلها بالفعل فالمركز الحقيقي ٤٢٠٠٠ — وكشف البنك متأخر والتسوية تجسر الفرق.",
    standardTag: "Bank reconciliation",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-05",
    stem: "The purpose of a receivables control account is to:",
    stemAr: "الغرض من حساب المراقبة للمدينين:",
    options: [
      "Summarise the individual sales ledger balances and prove them against the ledger",
      "Record cash purchases",
      "Calculate the allowance for receivables",
      "Replace the list of individual customers",
    ],
    optionsAr: [
      "تجميع أرصدة دفتر المدينين الفردية ومطابقتها معه",
      "تسجيل المشتريات النقدية",
      "حساب مخصص الديون",
      "الاستغناء عن كشف العملاء الفردي",
    ],
    answerIndex: 0,
    explanation:
      "The control account aggregates all individual ledger balances; reconciling it to the sales ledger list locates posting errors quickly — the heart of control account technique.",
    explanationAr:
      "يجمع حساب المراقبة كل أرصدة الدفتر الفردي؛ ومطابقته مع كشف المدينين تحدد أخطاء الترحيل بسرعة — وهو جوهر تقنية حسابات المراقبة.",
    standardTag: "Control accounts",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-06",
    stem: "A machine costs EGP 90,000 with residual value EGP 10,000 and a useful life of 4 years. Annual straight-line depreciation is:",
    stemAr: "آلة تكلفتها ٩٠ ألف جنيه قيمتها المتبقية ١٠ آلاف وعمرها ٤ سنوات. القسط الثابت السنوي:",
    options: [
      "EGP 22,500",
      "EGP 20,000",
      "EGP 25,000",
      "EGP 17,500",
    ],
    optionsAr: [
      "٢٢٥٠٠ جنيه",
      "٢٠٠٠٠ جنيه",
      "٢٥٠٠٠ جنيه",
      "١٧٥٠٠ جنيه",
    ],
    answerIndex: 1,
    explanation:
      "Straight-line: (cost − residual) ÷ life = (90,000 − 10,000) ÷ 4 = 20,000 per year; the residual value is deducted first — a favourite trap.",
    explanationAr:
      "القسط الثابت: (التكلفة − المتبقية) ÷ العمر = (٩٠٠٠٠ − ١٠٠٠٠) ÷ ٤ = ٢٠٠٠٠ سنويًا؛ وتخصم المتبقية أولًا — وهو الفخ المفضل.",
    standardTag: "Depreciation",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-07",
    stem: "An asset cost EGP 80,000 and is depreciated at 25% reducing balance. The year-two depreciation charge is:",
    stemAr: "أصل تكلفتُه ٨٠ ألفًا يُهلك بنسبة ٢٥٪ متناقص. قسط السنة الثانية:",
    options: [
      "EGP 20,000",
      "EGP 15,000",
      "EGP 12,500",
      "EGP 10,000",
    ],
    optionsAr: [
      "٢٠٠٠٠ جنيه",
      "١٥٠٠٠ جنيه",
      "١٢٥٠٠ جنيه",
      "١٠٠٠٠ جنيه",
    ],
    answerIndex: 1,
    explanation:
      "Year one: 80,000 × 25% = 20,000, leaving a carrying amount of 60,000; year two charges 25% on that: 15,000.",
    explanationAr:
      "السنة الأولى: ٨٠٠٠٠ × ٢٥٪ = ٢٠٠٠٠ فيتبقى ٦٠٠٠٠؛ والثانية تقصد ٢٥٪ منه: ١٥٠٠٠.",
    standardTag: "Depreciation",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-08",
    stem: "Equipment costing EGP 50,000 (accumulated depreciation EGP 30,000) is sold for EGP 23,000. The result is:",
    stemAr: "معدات تكلفتها ٥٠ ألفًا (مجمع إهلاكها ٣٠ ألفًا) بيعت بمبلغ ٢٣ ألفًا. النتيجة:",
    options: [
      "A profit of EGP 3,000",
      "A loss of EGP 3,000",
      "A profit of EGP 23,000",
      "A loss of EGP 27,000",
    ],
    optionsAr: [
      "ربح ٣٠٠٠ جنيه",
      "خسارة ٣٠٠٠ جنيه",
      "ربح ٢٣٠٠٠ جنيه",
      "خسارة ٢٧٠٠٠ جنيه",
    ],
    answerIndex: 0,
    explanation:
      "Carrying amount = 50,000 − 30,000 = 20,000; proceeds 23,000 exceed it by 3,000, so a disposal PROFIT of 3,000 is recognised in profit or loss.",
    explanationAr:
      "القيمة الدفترية ٥٠٠٠٠ − ٣٠٠٠٠ = ٢٠٠٠٠؛ وثمن البيع ٢٣٠٠٠ يفوقها بـ ٣٠٠٠، فيُعترف بربح تصرف ٣٠٠٠ في الأرباح أو الخسائر.",
    standardTag: "Disposals",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-09",
    stem: "A debt written off last year as irrecoverable is unexpectedly received in cash this year. The entry records:",
    stemAr: "دين أُعدم العام الماضي يُحصَّل نقدًا بشكل غير متوقع هذا العام. يسجل القيد:",
    options: [
      "Dr Cash, Cr Irrecoverable debts recovered (income this year)",
      "Dr Cash, Cr Trade receivables",
      "Dr Cash, Cr Allowance for receivables",
      "Dr Receivables, Cr Cash",
    ],
    optionsAr: [
      "مدين النقدية، دائن الديون المعدومة المحصلة (إيراد هذا العام)",
      "مدين النقدية، دائن المدينين",
      "مدين النقدية، دائن مخصص الديون",
      "مدين المدينين، دائن النقدية",
    ],
    answerIndex: 0,
    explanation:
      "The receivable no longer exists, so recovery cannot credit it — cash comes in and 'irrecoverable debts recovered' is credited as income of the year of receipt.",
    explanationAr:
      "لم يعد الرصيد قائمًا فلا يجوز إثباته دائنًا — يُقبض النقد ويُجعل حساب «الديان المعدومة المحصلة» دائنًا كإيراد سنة القبض.",
    standardTag: "Irrecoverable debts",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-10",
    stem: "Receivables total EGP 120,000. The allowance should be 5% of receivables; the existing allowance is EGP 4,500. The charge to profit or loss is:",
    stemAr: "المدينون ١٢٠ ألفًا. يجب أن يكون المخصص ٥٪ من المدينين؛ والمخصص القائم ٤٥٠٠. المصروف في الأرباح أو الخسائر:",
    options: [
      "EGP 6,000",
      "EGP 4,500",
      "EGP 1,500",
      "EGP 10,500",
    ],
    optionsAr: [
      "٦٠٠٠ جنيه",
      "٤٥٠٠ جنيه",
      "١٥٠٠ جنيه",
      "١٠٥٠٠ جنيه",
    ],
    answerIndex: 2,
    explanation:
      "Required allowance = 120,000 × 5% = 6,000; existing 4,500, so only the INCREASE of 1,500 hits profit or loss (movements, not the whole balance).",
    explanationAr:
      "المخصص المطلوب = ١٢٠٠٠٠ × ٥٪ = ٦٠٠٠؛ والقائم ٤٥٠٠، فلا يصرف في الأرباح إلا الزيادة ١٥٠٠ (الحركة لا الرصيد كاملًا).",
    standardTag: "Allowance for receivables",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-11",
    stem: "Annual rent of EGP 24,000 is paid in advance on 1 October; the year end is 31 December. The year-end adjustment recognises:",
    stemAr: "إيجار سنوي ٢٤ ألفًا يُدفع مقدمًا في ١ أكتوبر ونهاية السنة ٣١ ديسمبر. تسوية نهاية السنة تعترف بـ:",
    options: [
      "A prepayment of EGP 18,000 (current asset)",
      "An accrual of EGP 18,000",
      "A prepayment of EGP 6,000",
      "No adjustment",
    ],
    optionsAr: [
      "مصروف مقدم ١٨٠٠٠ جنيه (أصل متداول)",
      "مصروف مستحق ١٨٠٠٠ جنيه",
      "مصروف مقدم ٦٠٠٠ جنيه",
      "لا تسوية",
    ],
    answerIndex: 0,
    explanation:
      "Only October–December (3 of 12 months, 6,000) is consumed; the remaining 9 months (18,000) is a prepayment — a current asset, not an expense of this year.",
    explanationAr:
      "لا يُستهلك إلا أكتوبر–ديسمبر (٣ من ١٢ شهرًا = ٦٠٠٠)؛ والتسعة الأشهر الباقية (١٨٠٠٠) مصروف مقدم — أصل متداول لا مصروف هذه السنة.",
    standardTag: "Accruals & prepayments",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-12",
    stem: "Under IAS 2, which cost is INCLUDED in inventory valuation?",
    stemAr: "وفق IAS 2، أي تكلفة تُدرج في تقييم المخزون؟",
    options: [
      "Carriage inwards on raw materials",
      "Selling and marketing costs",
      "Storage of finished goods beyond production needs",
      "Administrative overheads",
    ],
    optionsAr: [
      "نقل وارد على المواد الخام",
      "تكاليف البيع والتسويق",
      "تخزين المنتج التام زيادة عن حاجة الإنتاج",
      "المصروفات العمومية الإدارية",
    ],
    answerIndex: 0,
    explanation:
      "IAS 2 includes costs of purchase (price, import duties, carriage INWARDS) and costs of conversion; selling costs, abnormal storage and admin overheads are excluded as period expenses.",
    explanationAr:
      "يشمل IAS 2 تكاليف الشراء (السعر والرسوم والنقل الوارد) وتكاليف التحويل؛ وتستبعد تكاليف البيع والتخزين غير الطبيعي والمصروفات الإدارية كمصروفات الفترة.",
    standardTag: "IAS 2",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-13",
    stem: "A business sells goods for EGP 50,000 plus 14% sales tax, invoicing the customer EGP 57,000. The revenue recognised is:",
    stemAr: "تبيع منشأة بضائع بمبلغ ٥٠ ألف جنيه زائد ١٤٪ ضريبة، وتفوتر العميل ٥٧٠٠٠. الإيراد المعترف به:",
    options: [
      "EGP 57,000",
      "EGP 50,000",
      "EGP 7,000",
      "EGP 64,000",
    ],
    optionsAr: [
      "٥٧٠٠٠ جنيه",
      "٥٠٠٠٠ جنيه",
      "٧٠٠٠ جنيه",
      "٦٤٠٠٠ جنيه",
    ],
    answerIndex: 1,
    explanation:
      "Sales tax collected is a LIABILITY owed to the authority, never revenue: recognise revenue 50,000 and a current liability (sales tax payable) of 7,000.",
    explanationAr:
      "الضريبة المحصلة التزام للجهة وليست إيرادًا أبدًا: يعترف بإيراد ٥٠٠٠و وبالتزام متداول (ضريبة مستحقة) ٧٠٠٠.",
    standardTag: "Sales tax",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-14",
    stem: "In the indirect method cash flow statement, depreciation expense for the year is:",
    stemAr: "في قائمة التدفقات بطريقة غير مباشرة، مصروف الإهلاك السنوي:",
    options: [
      "Added back to profit before calculating operating cash flow",
      "Deducted from profit",
      "Shown as an investing outflow",
      "Ignored completely",
    ],
    optionsAr: [
      "يضاف إلى الربح قبل حساب التدفق التشغيلي",
      "يخصم من الربح",
      "يظهر تدفقًا خارجًا استثماريًا",
      "يتجاهل كليًا",
    ],
    answerIndex: 0,
    explanation:
      "Depreciation is a non-cash expense already deducted in arriving at profit, so it is added back in reconciling profit to operating cash flow.",
    explanationAr:
      "الإهلاك مصروف غير نقدي خُصم سلفًا في الوصول للربح، فيضاف ثانية عند تسوية الربح إلى التدفق التشغيلي النقدي.",
    standardTag: "Cash flows",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-15",
    stem: "Repainting a factory is 'repairs'; adding a new wing that extends capacity is capital expenditure. The accounting difference is:",
    stemAr: "إعادة دهن المصنع «إصلاح»؛ وإضافة جناح جديد يوسع الطاقة إنفاق رأسمالي. الفرق المحاسبي:",
    options: [
      "Repairs are expensed; the new wing is capitalised as PPE",
      "Both are capitalised",
      "Both are expensed",
      "The choice is free, whatever the effect on profit",
    ],
    optionsAr: [
      "الإصلاح يصرف؛ والجناح الجديد يرسمل ضمن الأصول الثابتة",
      "كلاهما يرسمل",
      "كلاهما يصرف",
      "الخيار حر أيًا كان الأثر في الربح",
    ],
    answerIndex: 0,
    explanation:
      "Expenditure maintaining (repairs) is a period expense; expenditure enhancing capacity or economic benefits (the wing) qualifies for capitalisation as PPE — classifying it otherwise misstates both profit and assets.",
    explanationAr:
      "الإنفاق الصياني (الإصلاح) مصروف فترة؛ والإنفاق الواسع للطاقة أو المنافع (الجناح) يرسمل كأصل ثابت — وسوء التصنيف يحرف الربح والأصول معًا.",
    standardTag: "Capital vs revenue",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-16",
    stem: "Opening inventory 4,000, purchases 47,000, closing inventory 5,500. Cost of sales is:",
    stemAr: "مخزون أول ٤٠٠٠، مشتريات ٤٧٠٠٠، مخزون آخر ٥٥٠٠. تكلفة المبيعات:",
    options: [
      "EGP 45,500",
      "EGP 47,000",
      "EGP 48,500",
      "EGP 43,500",
    ],
    optionsAr: [
      "٤٥٥٠٠ جنيه",
      "٤٧٠٠٠ جنيه",
      "٤٨٥٠٠ جنيه",
      "٤٣٥٠٠ جنيه",
    ],
    answerIndex: 0,
    explanation:
      "COS = opening inventory + purchases − closing inventory = 4,000 + 47,000 − 5,500 = 45,500; the higher closing inventory pulls cost of sales DOWN.",
    explanationAr:
      "التكلفة = أول المدة + المشتريات − آخر المدة = ٤٠٠٠ + ٤٧٠٠٠ − ٥٥٠٠ = ٤٥٥٠٠؛ وارتفاع المخزون الأخير يخفض تكلفة المبيعات.",
    standardTag: "Cost of sales",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-17",
    stem: "Credit sales are EGP 219,000; receivables are EGP 30,000 and the year has 365 days. Receivable days (to the nearest day) are:",
    stemAr: "المبيعات الآجلة ٢١٩٠٠٠ والمدينون ٣٠٠٠٠ والسنة ٣٦٥ يومًا. فترة التحصيل (لأقرب يوم):",
    options: [
      "30 days",
      "50 days",
      "42 days",
      "63 days",
    ],
    optionsAr: [
      "٣٠ يومًا",
      "٥٠ يومًا",
      "٤٢ يومًا",
      "٦٣ يومًا",
    ],
    answerIndex: 1,
    explanation:
      "Receivable days = receivables ÷ credit sales × 365 = 30,000 ÷ 219,000 × 365 ≈ 50 days — the working-capital liquidity measure FM and FA papers both love.",
    explanationAr:
      "فترة التحصيل = المدينون ÷ المبيعات الآجلة × ٣٦٥ = ٣٠٠٠٠ ÷ ٢١٩٠٠٠ × ٣٦٥ ≈ ٥٠ يومًا — مقياس السيولة المحبب في امتحاني FA وFM.",
    standardTag: "Ratios",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FA past paper (adapted)",
  },
  {
    code: "FA-P1-18",
    stem: "Under IAS 2, damaged goods costing EGP 8,000 can be sold for EGP 9,000 after EGP 2,500 of repair costs. They are carried at:",
    stemAr: "وفق IAS 2، بضائع تالفة تكلفتها ٨٠٠٠ يمكن بيعها بـ ٩٠٠٠ بعد إصلاحات ٢٥٠٠. تعرض بقيمة:",
    options: [
      "EGP 8,000",
      "EGP 6,500",
      "EGP 9,000",
      "EGP 11,500",
    ],
    optionsAr: [
      "٨٠٠٠ جنيه",
      "٦٥٠٠ جنيه",
      "٩٠٠٠ جنيه",
      "١١٥٠٠ جنيه",
    ],
    answerIndex: 1,
    explanation:
      "NRV = 9,000 − 2,500 = 6,500 < cost 8,000, so the goods are written down to 6,500 — inventory sits at the lower of cost and NRV.",
    explanationAr:
      "صافي القيمة = ٩٠٠٠ − ٢٥٠٠ = ٦٥٠٠ أقل من التكلفة ٨٠٠٠، فتخفض البضائع إلى ٦٥٠٠ — بالمخزون عند الأدنى من التكلفة والصافي.",
    standardTag: "IAS 2 NRV",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FA past paper (adapted)",
  },
]

/* ================= NEW: ACCA FM (F9) Financial Management paper ================= */

export const FM_PAPER: ExtraPaperSeedQ[] = [
  {
    code: "FM-P1-01",
    stem: "The investment appraisal method most directly linked to the objective of maximising shareholder wealth is:",
    stemAr: "طريقة تقييم الاستثمار الأكثر اتصالًا مباشرة بتعظيم ثروة المساهمين:",
    options: [
      "Net present value (NPV)",
      "Payback period",
      "Accounting rate of return (ROCE)",
      "Revenue growth",
    ],
    optionsAr: [
      "صافي القيمة الحالية",
      "فترة الاسترداد",
      "معدل المحاسبي للعائد",
      "نمو الإيرادات",
    ],
    answerIndex: 0,
    explanation:
      "NPV discounts all cash flows at the shareholders' required return — a positive NPV is a direct increase in shareholder wealth; payback ignores timing beyond the cutoff and ROCE is profit-based.",
    explanationAr:
      "خصم NPV كل التدفقات بمعدل العائد المطلوب للمساهمين — فالقيمة الحالية الموجبة زيادة مباشرة في الثروة؛ والاسترداد يتجاهل التوقيت بعد حدّه وROCE قائم على الربح المحاسبي.",
    standardTag: "NPV",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-02",
    stem: "A project's NPV is positive at a 10% discount rate and negative at 20%. The IRR therefore:",
    stemAr: "صافي القيمة الحالية لمشروع موجب بخصم ١٠٪ وسالب بـ ٢٠٪. إذن معدل العائد الداخلي:",
    options: [
      "Lies between 10% and 20%",
      "Equals 15% exactly",
      "Is below 10%",
      "Cannot be estimated",
    ],
    optionsAr: [
      "يقع بين ١٠٪ و٢٠٪",
      "يساوي ١٥٪ بالضبط",
      "أقل من ١٠٪",
      "لا يمكن تقديره",
    ],
    answerIndex: 0,
    explanation:
      "IRR is the rate where NPV = 0; with a sign change between 10% and 20%, it lies strictly between them (linear interpolation only APPROXIMATES it, so 'exactly 15%' is the trap).",
    explanationAr:
      "معدل العائد الداخلي هو المعدل الذي عنده NPV = 0؛ وبما أن الإشارة تنقلب بين ١٠٪ و٢٠٪ فهو واقع بينهما قطعًا (والاستكمال الخطي يقاربه فقط، فـ«بالضبط ١٥٪» هو الفخ).",
    standardTag: "IRR",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-03",
    stem: "The main weakness of the payback method as an appraisal technique is that it:",
    stemAr: "أبرز نقطة ضعف لطريقة فترة الاسترداد كأسلوب تقييم:",
    options: [
      "Ignores the time value of money and cash flows after the payback point",
      "Is too difficult to calculate",
      "Requires the cost of equity",
      "Cannot be used for projects with uneven cash flows",
    ],
    optionsAr: [
      "تتجاهل القيمة الزمنية للنقود والتدفقات بعد نقطة الاسترداد",
      "صعبة الحساب للغاية",
      "تتطلب تكلفة حقوق الملكية",
      "لا تصلح لمشاريع ذات تدفقات غير منتظمة",
    ],
    answerIndex: 0,
    explanation:
      "Payback (even discounted payback) cuts off everything after recovery, biasing against long-lived projects; its virtue is liquidity and simplicity, not wealth measurement.",
    explanationAr:
      "الاسترداد (حتى المخصوم منه) يتجاهل كل ما بعد نقطة الاسترداد، فيتحامل على المشاريع طويلة العمر؛ وميزته السيولة والبساطة لا قياس الثروة.",
    standardTag: "Payback",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-04",
    stem: "When calculating WACC, the theoretically correct weights use:",
    stemAr: "عند حساب المتوسط المرجح لتكلفة رأس المال، الأوزان الصحيحة نظريًا تستخدم:",
    options: [
      "Book values of debt and equity from the statement of financial position",
      "Market values of debt and equity",
      "Nominal values of shares only",
      "Equal weights of 50/50",
    ],
    optionsAr: [
      "القيم الدفترية للدين وحقوق الملكية من الميزانية",
      "القيم السوقية للدين وحقوق الملكية",
      "القيم الاسمية للأسهم فقط",
      "أوزان متساوية ٥٠/٥٠",
    ],
    answerIndex: 1,
    explanation:
      "Investors' required returns apply to CURRENT market values, so WACC weights each source by market value; book values reflect historical cost and misstate the structure.",
    explanationAr:
      "العوائد المطلوبة للمستثمرين تنطبق على القيم السوقية الجارية، فيُرجّح كل مصدر بقيمته السوقية؛ والدفتارية تاريخية تشوه الهيكل.",
    standardTag: "WACC",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-05",
    stem: "The risk-free rate is 9%; the market return is 15%; a share's beta is 1.4. Under CAPM its required return is:",
    stemAr: "المعدل الخالي من المخاطر ٩٪ وعائد السوق ١٥٪ وبيتا السهم ١.٤. وفق CAPM العائد المطلوب:",
    options: [
      "17.4%",
      "15.0%",
      "23.4%",
      "13.8%",
    ],
    optionsAr: [
      "١٧.٤٪",
      "١٥.٠٪",
      "٢٣.٤٪",
      "١٣.٨٪",
    ],
    answerIndex: 0,
    explanation:
      "CAPM: 9% + 1.4 × (15% − 9%) = 9% + 8.4% = 17.4% — beta scales the market risk premium of 6%.",
    explanationAr:
      "وفق CAPM: ٩٪ + ١.٤ × (١٥٪ − ٩٪) = ٩٪ + ٨.٤٪ = ١٧.٤٪ — فالبيتا تضخّم علاوة مخاطر السوق البالغة ٦٪.",
    standardTag: "CAPM",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-06",
    stem: "A beta of 0.8 indicates that the share:",
    stemAr: "بيتا ٠.٨ تعني أن السهم:",
    options: [
      "Is less volatile than the market, moving on average 0.8% for every 1% market move",
      "Is more volatile than the market",
      "Has zero systematic risk",
      "Is risk-free",
    ],
    optionsAr: [
      "أقل تقلبًا من السوق، يتحرك وسطيًا ٠.٨٪ مقابل كل ١٪ لحركة السوق",
      "أكثر تقلبًا من السوق",
      "مخاطره المنتظمة صفر",
      "خالٍ من المخاطر",
    ],
    answerIndex: 0,
    explanation:
      "Beta measures systematic (market) risk relative to the index: 0.8 means the share historically amplifies market moves by 0.8 — defensive, not risk-free (unsystematic risk remains).",
    explanationAr:
      "تقيس بيتا المخاطر المنتظمة نسبة للمؤشر: ٠.٨ تعني تاريخيًا أن السهم يضخّم حركة السوق بمعامل ٠.٨ — سهم دفاعي لا خالٍ من المخاطر (تبقى المخاطر غير المنتظمة).",
    standardTag: "CAPM",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-07",
    stem: "Gordon's growth model values a share as D₁ ÷ (ke − g). A share just paid a dividend of EGP 2; dividends grow at 5% and ke is 13%. The ex-dividend value is:",
    stemAr: "نموذج جوردون يساوي السهم D₁ ÷ (ke − g). سهم وزع للتو ٢ جنيه بنمو ٥٪ وke = ١٣٪. القيمة دون الحق في التوزيع:",
    options: [
      "EGP 26.25",
      "EGP 25.00",
      "EGP 28.33",
      "EGP 15.38",
    ],
    optionsAr: [
      "٢٦.٢٥ جنيهًا",
      "٢٥.٠٠ جنيهًا",
      "٢٨.٣٣ جنيهًا",
      "١٥.٣٨ جنيهًا",
    ],
    answerIndex: 0,
    explanation:
      "D₁ = 2 × 1.05 = 2.10; value = 2.10 ÷ (0.13 − 0.05) = 26.25. The classic trap is dividing last year's dividend (2.00 ÷ 0.08 = 25.00) instead of next year's.",
    explanationAr:
      "التوزيع القادم = ٢ × ١.٠٥ = ٢.١٠؛ والقيمة = ٢.١٠ ÷ (٠.١٣ − ٠.٠٥) = ٢٦.٢٥. والفخ الكلاسيكي قسمة توزيع العام الماضي (٢ ÷ ٠.٠٨ = ٢٥) بدل القادم.",
    standardTag: "Dividend valuation",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-08",
    stem: "Inventory days 60, receivable days 45, payable days 40. The cash operating cycle is:",
    stemAr: "أيام المخزون ٦٠ وأيام المدينين ٤٥ وأيام الدائنين ٤٠. دورة النقد التشغيلية:",
    options: [
      "65 days",
      "145 days",
      "55 days",
      "25 days",
    ],
    optionsAr: [
      "٦٥ يومًا",
      "١٤٥ يومًا",
      "٥٥ يومًا",
      "٢٥ يومًا",
    ],
    answerIndex: 0,
    explanation:
      "Cash cycle = inventory days + receivable days − payable days = 60 + 45 − 40 = 65 days — payables FUND part of the operating cycle, so they reduce it.",
    explanationAr:
      "دورة النقد = أيام المخزون + أيام المدينين − أيام الدائنين = ٦٠ + ٤٥ − ٤٠ = ٦٥ يومًا — فالدائنون يمولون جزءًا من الدورة فيقللونها.",
    standardTag: "Working capital",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-09",
    stem: "The EOQ model balances:",
    stemAr: "يوازن نموذج الكمية الاقتصادية للطلب بين:",
    options: [
      "Ordering costs and holding costs",
      "Purchase price and selling price",
      "Debt and equity costs",
      "Inflation and interest rates",
    ],
    optionsAr: [
      "تكاليف الطلب وتكاليف التخزين",
      "سعر الشراء وسعر البيع",
      "تكاليف الدين وحقوق الملكية",
      "التضخم وأسعار الفائدة",
    ],
    answerIndex: 0,
    explanation:
      "EOQ minimises the TOTAL of ordering costs (fall with bigger orders) and holding costs (rise with bigger orders) — quantity discounts and stockout risk are add-ons to the core model.",
    explanationAr:
      "يقلل EOQ مجموع تكاليف الطلب (تنقص مع كبر الكمية) وتكاليف التخزين (تزيد معها) — وخصومات الكمية ومخاطر نفاد المخزون إضافات على النموذج الأساسي.",
    standardTag: "Inventory management",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-10",
    stem: "A customer is offered a 2% discount for payment within 10 days instead of 45. The ANNUALISED cost of offering this discount is approximately:",
    stemAr: "يُمنح عميل خصم ٢٪ للسداد خلال ١٠ أيام بدل ٤٥. التكلفة السنوية التقريبية لمنح هذا الخصم:",
    options: [
      "About 21%",
      "About 2%",
      "About 16%",
      "About 35%",
    ],
    optionsAr: [
      "نحو ٢١٪",
      "نحو ٢٪",
      "نحو ١٦٪",
      "نحو ٣٥٪",
    ],
    answerIndex: 0,
    explanation:
      "Cost = [d ÷ (1 − d)] × [365 ÷ (45 − 10)] = (0.02 ÷ 0.98) × (365 ÷ 35) ≈ 21% — far above typical financing rates, which is why early-settlement discounts must be priced carefully.",
    explanationAr:
      "التكلفة = [د ÷ (١ − د)] × [٣٦٥ ÷ (٤٥ − ١٠)] = (٠.٠٢ ÷ ٠.٩٨) × (٣٦٥ ÷ ٣٥) ≈ ٢١٪ — أعلى بكثير من معدلات التمويل المعتادة، ولذا يجب تسعير خصومات التعجيل بحذر.",
    standardTag: "Receivables management",
    area: "accounting",
    difficulty: 3,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-11",
    stem: "Financing fluctuating current assets with short-term funds (while permanent current assets are long-term financed) is a:",
    stemAr: "تمويل الأصول المتغيرة المتداولة بمصادر قصيرة الأجل (مع تمويل المتداولة الدائمة بمصادر طويلة) هو:",
    options: [
      "Moderate / matching approach to working capital funding",
      "Aggressive approach with no policy limits",
      "Conservative approach, funding everything long-term",
      "Violation of accounting standards",
    ],
    optionsAr: [
      "نهج معتدل/مطابِق لتمويل رأس المال العامل",
      "نهج عدواني بلا حدود سياساتية",
      "نهج متحفظ يمول كل شيء طويل الأجل",
      "مخالفة للمعايير المحاسبية",
    ],
    answerIndex: 0,
    explanation:
      "The matching principle pairs the maturity of finance with the permanence of the asset: temporary current assets ← short-term funds; permanent current assets and non-current assets ← long-term funds.",
    explanationAr:
      "مبدأ المطابقة يقارن استحقاق التمويل بدوام الأصل: المتداولة المؤقتة بتمويل قصير الأجل؛ والمتداولة الدائمة والثابتة بتمويل طويل الأجل.",
    standardTag: "Working capital funding",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-12",
    stem: "An Egyptian importer must pay USD 1m in 3 months. It books a forward contract to buy USD at a fixed rate today. The exchange risk being managed is:",
    stemAr: "مستورد مصري عليه دفع مليون دولار بعد ٣ أشهر، فيبرم عقدًا آجلًا لشراء الدولار بسعر ثابت اليوم. مخاطر الصرف المُدارة:",
    options: [
      "Transaction exposure — the future payable is locked at a known rate",
      "Translation exposure of the consolidated statements",
      "Economic exposure of long-term competitiveness",
      "No exposure at all",
    ],
    optionsAr: [
      "انكشاف المعاملات — فالالتزام المستقبلي مثبت بسعر معلوم",
      "انكشاف الترجمة للقوائم المجمعة",
      "الانكشاف الاقتصادي للتنافسية بعيدة المدى",
      "لا انكشاف أصلًا",
    ],
    answerIndex: 0,
    explanation:
      "A forward exchange contract FIXES the rate for a specific future payment — the textbook hedge of transaction exposure; translation and economic exposures are not eliminated by it.",
    explanationAr:
      "العقد الآجل يثبت السعر لدفع مستقبلي محدد — وهو التحوّط الكلاسيكي لانكشاف المعاملات؛ ولا يزيل انكشافَي الترجمة أو الاقتصادي.",
    standardTag: "Forex risk",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-13",
    stem: "In a money market hedge of a foreign payable, the company:",
    stemAr: "في التحوّط بسوق النقد لالتزام بالعملة الأجنبية، تقوم الشركة بـ:",
    options: [
      "Buys home currency today, converts and deposits the foreign currency to grow to the payable amount",
      "Buys a currency option and lets it lapse",
      "Borrows the foreign currency long-term",
      "Simply waits and hopes the rate improves",
    ],
    optionsAr: [
      "تقتني بعملتها اليوم وتحوّلها وتودعها بالعملة الأجنبية حتى تنمو لمبلغ الالتزام",
      "تشتري خيار عملة وتتركه يسقط",
      "تقترض بالعملة الأجنبية طويل الأجل",
      "تنتظر فقط راجية تحسن السعر",
    ],
    answerIndex: 0,
    explanation:
      "For a payable: deposit today (in the foreign currency) the present value that will grow to the amount owed — created by buying the foreign currency spot with home currency — eliminating rate risk by fixing the cost now.",
    explanationAr:
      "للالتزام: تودِع اليوم بالعملة الأجنبية قيمتها الحالية التي تنمو حتى المبلغ المستحق — بت اقتنائها فورًا بعملة البلد — فيزول خطر السعر بتثبيت التكلفة الآن.",
    standardTag: "Money market hedge",
    area: "accounting",
    difficulty: 3,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-14",
    stem: "Matching the maturity profile of interest-bearing debt to the term structure of assets or deposits reduces:",
    stemAr: "مطابقة آجال الديون المنتججة للفوائد لأجل الأصول أو الودائع تقلل:",
    options: [
      "Interest rate risk from refinancing at uncertain future rates",
      "Credit risk of the customer",
      "Inflation risk of the currency",
      "Audit risk",
    ],
    optionsAr: [
      "مخاطر أسعار الفائدة الناشئة عن إعادة التمويل بمعدلات مستقبلية غير مؤكدة",
      "مخاطر ائتمان العميل",
      "مخاطر تضخم العملة",
      "خطر المراجعة",
    ],
    answerIndex: 0,
    explanation:
      "Matching maturities (or using staggered/smoothed profiles) prevents a refinancing 'cliff' where maturing debt must be re-rolled at whatever rate prevails — the core of treasury interest-rate management.",
    explanationAr:
      "مطابقة الآجال (أو تدرجها وتنعيمها) تمنع «هاوية» إعادة تمويل ديون حالّة بمعدل السوق أيًا كان — وهو جوهر إدارة مخاطر الفائدة بالخزينة.",
    standardTag: "Interest rate risk",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-15",
    stem: "Under murabaha financing:",
    stemAr: "وفق تمويل المرابحة:",
    options: [
      "The bank buys the asset and sells it to the client at a marked-up price payable in instalments, with the profit rate agreed upfront",
      "The bank lends money at a floating interest rate",
      "The client rents the asset with no ownership transfer ever",
      "The bank takes an equity share in the client's business",
    ],
    optionsAr: [
      "يشتري البنك الأصل ويبيعه للعميل بسعر مُعلّم مؤجل بأقساط، بهامش ربح متفق عليه سلفًا",
      "يقرض البنك المال بفائدة عائمة",
      "يستأجر العميل الأصل دون انتقال ملكية أبدًا",
      "يأخذ البنك حصة ملكية في نشاط العميل",
    ],
    answerIndex: 0,
    explanation:
      "Murabaha is a cost-plus sale: the bank acquires the goods and resells at a disclosed markup, payable later — a fixed, pre-agreed profit replaces interest. (Rent without ownership is ijara; equity sharing is musharaka.)",
    explanationAr:
      "المرابحة بيع بتكلفة زائد: يقتني البنك السلعة ويعيد بيعها بهامش معلن مؤجل — فالربح الثابت المتفق سلفًا يحل محل الفائدة. (والإيجار بلا ملكية إجارة، والمشاركة بالملكية مشاركة.)",
    standardTag: "Islamic finance",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-16",
    stem: "Ijara most closely resembles a conventional:",
    stemAr: "الإجارة أقرب ما تكون إلى:",
    options: [
      "Finance lease",
      "Overdraft facility",
      "Rights issue",
      "Trade payable",
    ],
    optionsAr: [
      "عقد إيجار تمويلي",
      "تسهيل سحب على المكشوف",
      "اكتتاب حقوق أولوية",
      "رصيد موردون",
    ],
    answerIndex: 0,
    explanation:
      "Ijara: the lessor owns the asset and leases it for rentals, often transferring ownership at the end — structurally parallel to a finance lease, without interest.",
    explanationAr:
      "الإجارة: يملك المؤجِّر الأصل ويؤجره مقابل إيجارات، وغالبًا تنتقل الملكية في النهاية — وهي موازية بنيويًا للإيجار التمويلي دون فائدة.",
    standardTag: "Islamic finance",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-17",
    stem: "Sukuk differ from conventional bonds because sukuk holders:",
    stemAr: "تختلف الصكوك عن السندات التقليدية لأن حاملي الصكوك:",
    options: [
      "Hold proportional ownership of underlying assets and share in their returns and risk",
      "Receive a guaranteed fixed coupon regardless of performance",
      "Lend money to a bank",
      "Are always government creditors",
    ],
    optionsAr: [
      "يملكون نسبًا من أصول أساسية ويشاركون في عوائدها ومخاطرها",
      "يتقاضون كوبونًا ثابتًا مضمونًا مهما كان الأداء",
      "يقرضون مالًا لبنك",
      "دائنون للحكومة دائمًا",
    ],
    answerIndex: 0,
    explanation:
      "Sukuk are certificates giving undivided ownership shares in assets or ventures — income derives from the assets and bears their risk, unlike a bond's contractual interest.",
    explanationAr:
      "الصكوك شهادات تمنح حصصًا ملكية غير مجزأة في أصول أو مشروعات — فالدخل من الأصول ويحمل مخاطرها، بخلاف فائدة السند التعاقدية.",
    standardTag: "Islamic finance",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FM past paper (adapted)",
  },
  {
    code: "FM-P1-18",
    stem: "Under the pecking order theory of capital structure, firms prefer to fund investments:",
    stemAr: "وفق نظرية ترتيب الأولويات لهيكل رأس المال، تفضل الشركات تمويل استثماراتها:",
    options: [
      "First from retained earnings, then debt, and new equity only as a last resort",
      "First from new equity to avoid debt",
      "Always from bank borrowing",
      "Equally across all sources",
    ],
    optionsAr: [
      "من الأرباح المحتجزة أولًا ثم الدين، ولا تلجأ لإصدار أسهم إلا أخيرًا",
      "من إصدار أسهم جديدة أولًا لتجنب الدين",
      "دائمًا من اقتراض البنوك",
      "بالتساوي بين كل المصادر",
    ],
    answerIndex: 0,
    explanation:
      "Pecking order (Myers): internal funds avoid flotation costs and adverse-selection signalling; debt is next; equity issuance comes last because the market reads it as overvaluation news.",
    explanationAr:
      "ترتيب الأولويات (مايرز): التمويل الداخلي يتجنب تكاليف الإصدار وإشارات الاختيار السلبي؛ ثم الدين؛ والإصدار أخيرًا لأن السوق يقرأه خبر مبالغة في التقييم.",
    standardTag: "Capital structure",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FM past paper (adapted)",
  },
]
