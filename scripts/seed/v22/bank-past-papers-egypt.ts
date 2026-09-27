/** v22 seed data — previous-exam paper (Egyptian state-sector audit):
 *  SOE / EEC practice-exam style. Bilingual EN/AR.
 *  Source: "Egypt SOE audit past paper (adapted)". */

import type { PastPaperSeedQ } from "./bank-past-papers-audit"

export const SOE_PAPER: PastPaperSeedQ[] = [
  {
    code: "SOE-P1-01",
    stem: "The Egyptian Accounting Standards (EAS) are best described as:",
    stemAr: "أفضل وصف للمعايير المصرية للمحاسبة (EAS) هو أنها:",
    options: [
      "A fully independent framework unrelated to international standards",
      "Largely based on IFRS as issued by the IASB, with some local adaptations and carve-outs",
      "Identical to US GAAP adapted for Egyptian tax law",
      "Applicable only to banks and financial institutions",
    ],
    optionsAr: [
      "إطار مستقل تمامًا لا صلة له بالمعايير الدولية",
      "مستندة إلى حد كبير إلى المعايير الدولية للتقارير المالية (IFRS) الصادرة عن مجلس معايير المحاسبة الدولية، مع تكييفات محلية واستثناءات",
      "مطابقة لمعايير المحاسبة الأمريكية مكيّفة للقانون الضريبي المصري",
      "منطبقة على البنوك والمؤسسات المالية فقط",
    ],
    answerIndex: 1,
    explanation:
      "The Egyptian Accounting Standards (issued by ministerial decree and periodically updated) draw heavily on IFRS/IAS, with local deviations — for example, historical requirements around asset revaluation and certain presentation differences. Option A overstates independence; C is wrong (no US GAAP basis); D is wrong — EAS apply to most entities, with additional sector-specific rules (e.g., CMA and central bank instructions) layered on top.",
    explanationAr:
      "تستند المعايير المصرية للمحاسبة (الصادرة بقرار وزاري والمحدثة دوريًا) إلى حد كبير إلى IFRS/IAS مع انحرافات محلية — كمتطلبات سابقة بشأن إعادة تقييم الأصول وبعض فروق العرض. والخيار (أ) يبالغ في الاستقلال، و(ج) خطأ فلا أساس أمريكي، و(د) خطأ فالمعايير تطبق على معظم المنشآت مع قواعد قطاعية إضافية فوقها.",
    standardTag: "EAS",
    area: "egypt",
    difficulty: 1,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-02",
    stem: "Under the 2014 Egyptian Constitution, the Central Audit Organization (الهيئة المركزية للمحاسبات / الجهاز المركزي للمحاسبات) is:",
    stemAr: "وفق دستور 2014 المصري، يُعد الجهاز المركزي للمحاسبات:",
    options: [
      "An independent supervisory body that audits public funds and reports to the President of the Republic",
      "A department within the Ministry of Finance",
      "The professional syndicate for accountants and auditors",
      "A training academy for state auditors only",
    ],
    optionsAr: [
      "جهازًا رقابيًا مستقلًا يراقب الأموال العامة ويرفع تقاريره إلى رئيس الجمهورية",
      "إدارة تابعة لوزارة المالية",
      "نقابة المهنية للمحاسبين والمراجعين",
      "أكاديمية تدريب لمراجعي الدولة فقط",
    ],
    answerIndex: 0,
    explanation:
      "The 2014 Constitution establishes the Central Audit Organization as an independent supervisory body over public funds, headed by a president appointed for a single long term, reporting to the President of the Republic. It is not a finance-ministry department (B), not the syndicate (C), and far more than a training arm (D).",
    explanationAr:
      "ينشئ دستور 2014 الجهاز المركزي للمحاسبات جهازًا رقابيًا مستقلًا على الأموال العامة، برئاسة تُعين لولاية واحدة طويلة، ويرفع تقاريره إلى رئيس الجمهورية. فهو ليس إدارة بوزارة المالية (ب)، ولا النقابة (ج)، وأبعد من كونه ذراع تدريب (د).",
    standardTag: "Egypt regulation",
    area: "egypt",
    difficulty: 1,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-03",
    stem: "Law No. 144 of 2019 (the Public Business Sector Companies Law) is best described as:",
    stemAr: "أفضل وصف للقانون رقم 144 لسنة 2019 (قانون شركات قطاع الأعمال العام):",
    options: [
      "The tax code for free-zone investors",
      "The law restructuring companies affiliated to state-owned holding companies, including governance and financial reporting requirements",
      "The central bank law",
      "The professional syndicate law for accountants",
    ],
    optionsAr: [
      "قانون الضرائب للمستثمرين في المناطق الحرة",
      "القانون المنظم لشركات القطاع التابعة للشركات القابضة المملوكة للدولة، بما يشمل متطلبات الحوكمة والتقارير المالية",
      "قانون البنك المركزي",
      "قانون نقابة المحاسبين",
    ],
    answerIndex: 1,
    explanation:
      "Law 144/2019 governs companies affiliated to the public business sector (holding-company subsidiaries): it addresses governance, boards, financial reporting, profitability targets and the state's restructuring/IPO program for SOEs. It is not the tax code (A), central bank law (C) or syndicate law (D).",
    explanationAr:
      "ينظم القانون 144 لسنة 2019 الشركات التابعة لقطاع الأعمال العام (الشركات التابعة للقابضة المملوكة للدولة): حوكمةً ومجالس إدارة وتقارير مالية ومستهدفات ربحية وبرنامج إعادة الهيكلة والطروحات للشركات الحكومية. وهو ليس قانون الضرائب (أ) ولا البنك المركزي (ج) ولا النقابة (د).",
    standardTag: "Egypt regulation",
    area: "egypt",
    difficulty: 1,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-04",
    stem: "In an audit of an Egyptian state-owned enterprise, the auditor identifies related-party sales to a sister company at prices materially ABOVE market. The most appropriate audit response is to:",
    stemAr: "في مراجعة إحدى شركات قطاع الأعمال العامة، يكتشف المراجع مبيعات لشركة شقيقة بأسعار تتجاوز السوق جوهريًا. أنسب استجابة مراجعة:",
    options: [
      "Accept the pricing, as intra-group transactions within state entities are exempt from disclosure",
      "Treat it as a significant related-party risk: obtain the contracts, benchmark pricing against market data, evaluate the business rationale, and assess the adequacy of related-party disclosures under the EAS",
      "Reclassify the transactions as equity contributions without further work",
      "Report the matter to the tax authority immediately before completing fieldwork",
    ],
    optionsAr: [
      "قبول التسعير، فالعمليات داخل كيانات الدولة معفاة من الإفصاح",
      "معاملته كخطر جوهري للأطراف ذات العلاقة: الحصول على العقود، ومقارنة الأسعار ببيانات السوق، وتقييم المسوغ التجاري، وتقدير كفاية الإفصاح عن الأطراف ذات العلاقة وفق المعايير المصرية",
      "إعادة تصنيف العمليات كمساهمات في حقوق الملكية دون أعمال إضافية",
      "الإبلاغ للمصلحة الضريبية فورًا قبل إتمام العمل الميداني",
    ],
    answerIndex: 1,
    explanation:
      "Related-party transactions at non-market terms in an SOE are a classic significant risk — both for misstatement and for public-interest concerns: the auditor benchmarks pricing, evaluates rationale and tests disclosures (EAS related-party requirements mirror IAS 24). No blanket exemption exists (A); reclassification without evidence (C) is unjustified; immediate regulator escalation (D) is premature — governance discussion comes first under the NOCLAR logic.",
    explanationAr:
      "عمليات الأطراف ذات العلاقة بغير شروط السوق في شركة حكومية خطر جوهري كلاسيكي — للتزييف وللمصلحة العامة معًا: يقارن المراجع الأسعار ببيانات السوق ويقيّم المسوغ ويختبر الإفصاحات (متطلبات المعايير المصرية تناظر IAS 24). ولا إعفاء شاملًا (أ)، وإعادة التصنيف دون أدلة (ج) لا سند لها، والتصعيد الفوري (د) مبكر — فمناقشة الحوكمة أولًا وفق منطق NOCLAR.",
    standardTag: "ISA 550",
    area: "egypt",
    difficulty: 2,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-05",
    stem: "For a loss-making SOE whose solvency depends on promised capital injections from the parent holding company, the going-concern assessment should:",
    stemAr: "لشركة حكومية حققت خسائر ويعتمد استمرارها على وعود برفع رأس مال من الشركة القابضة الأم، ينبغي لتقييم الاستمرارية أن:",
    options: [
      "Conclude 'going concern' automatically, because the state always supports its companies",
      "Evaluate the strength and documentation of the support — board minutes, budget approvals, signed commitments — and the ability of the parent to provide it, with adequate disclosure of the dependence",
      "Conclude 'not a going concern' automatically, because losses exist",
      "Ignore the parent's support entirely, considering only the entity's own cash flows",
    ],
    optionsAr: [
      "الانتهاء إلى الاستمرارية تلقائيًا، لأن الدولة تدعم شركاتها دائمًا",
      "تقييم قوة الدعم وتوثيقه — محاضر مجالس، واعتمادات موازنة، والتزامات موقعة — وقدرة الأم على توفيره، مع الإفصاح الوافي عن هذا الاعتماد",
      "الانتهاء إلى عدم الاستمرارية تلقائيًا لوجود خسائر",
      "تجاهل دعم الأم كليًا والنظر فقط في تدفقات المنشأة ذاتها",
    ],
    answerIndex: 1,
    explanation:
      "Under ISA 570, intended support from a parent is assessed for its contractual strength, the supporting party's ability and intent, and documentation — 'the state will always help' is not evidence (A). Losses alone do not defeat going concern (C), and for an entity within a group structured around explicit support, the group-level assessment cannot be ignored (D) — the dependence must be disclosed.",
    explanationAr:
      "وفق ISA 570، يُقيَّم الدعم المزمع من الأم بقوته التعاقدية وقدرة الطرف الداعم ونيته الموثقة — فقول «الدولة ستساعد دائمًا» ليس دليلًا (أ). والخسائر وحدها لا تهدم الاستمرارية (ج)، ولا يمكن تجاهل التقييم على مستوى المجموعة في كيان مبني على دعم صريح (د) — مع واجب الإفصاح عن هذا الاعتماد.",
    standardTag: "ISA 570",
    area: "egypt",
    difficulty: 2,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-06",
    stem: "Which body licenses and regulates the AUDIT PROFESSION in Egypt (registration of auditors who may audit companies)?",
    stemAr: "أي جهة ترخّص مهنة المراجعة في مصر وتنظمها (قيد المراجعين المأذون لهم بمراجعة الشركات)؟",
    options: [
      "The Egyptian Exchange (EGX)",
      "The Syndicate of Accountants and Auditors, under the accountancy professions law, alongside the registration systems for auditors of specific entity types",
      "The Ministry of Tourism",
      "The Central Bank of Egypt",
    ],
    optionsAr: [
      "البورصة المصرية (EGX)",
      "نقابة المحاسبين والمراجعين المصريين وفق قانون مهنة المحاسبة، بالتواكف مع أنظمة قيد مراجعي أنواع معينة من الكيانات",
      "وزارة السياحة",
      "البنك المركزي المصري",
    ],
    answerIndex: 1,
    explanation:
      "The accountancy and audit profession in Egypt is organized under the Syndicate of Accountants and Auditors (Law 133/1951 as amended), with additional registration/admission systems for auditing particular entity types (e.g., listed companies and banks). EGX is a market operator (A), not a professional regulator; (C) is irrelevant; the Central Bank supervises banks (D) but not the profession at large.",
    explanationAr:
      "تنظم مهنة المحاسبة والمراجعة في مصر نقابةُ المحاسبين والمراجعين (القانون 133 لسنة 1951 وتعديلاته)، مع أنظمة قيد إضافية لمراجعة أنواع محددة من الكيانات (كالمدرجة والبنوك). فالبورصة مشغل سوق (أ) لا جهة تنظيم للمهنة، و(ج) غير ذي صلة، والبنك المركزي يشرف على البنوك (د) لا على المهنة عمومًا.",
    standardTag: "Egypt regulation",
    area: "egypt",
    difficulty: 2,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-07",
    stem: "An Egyptian listed company must, in addition to annual audited financial statements, generally provide under capital-market rules:",
    stemAr: "يجب على الشركة المدرجة في مصر، زيادةً على القوائم المالية السنوية المراجعة، أن تقدم عمومًا وفق قواعد سوق المال:",
    options: [
      "Nothing further — annual audited statements suffice",
      "Interim (quarterly) financial information subject to limited review by the auditor",
      "Monthly full-scope audits",
      "Only a management commentary letter",
    ],
    optionsAr: [
      "لا شيء إضافيًا — فالقوائم السنوية المراجعة تكفي",
      "معلومات مالية مرحلية (ربع سنوية) تخضع لفحص محدود من المراجع",
      "مراجعات كاملة النطاق شهرية",
      "خطاب تعليق من الإدارة فقط",
    ],
    answerIndex: 1,
    explanation:
      "Egyptian capital-market disclosure rules require interim (quarterly) financial information for listed companies, subjected to a limited review (فحص محدود) by the auditor under ISRE 2400-type procedures. Monthly audits (C) are not required, and annual statements alone (A) fall short of continuing disclosure obligations.",
    explanationAr:
      "تتطلب قواعد الإفصاح في سوق المال المصري معلومات مالية مرحلية (ربع سنوية) للشركات المدرجة، تخضع لفحص محدود من المراجع بإجراءات على نمط ISRE 2400. فالمراجعات الشهرية (ج) غير مطلوبة، والقوائم السنوية وحدها (أ) لا تفي بالتزامات الإفصاح المستمرة.",
    standardTag: "Egypt regulation",
    area: "egypt",
    difficulty: 2,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-08",
    stem: "The auditor of an SOE finds that land carried at nominal historical cost was professionally revalued in the books without meeting the EAS revaluation requirements (no independent valuation, no approval trail). The most appropriate treatment is:",
    stemAr: "يجد مراجع شركة حكومية أن أرضًا مقيدة بتكلفة تاريخية رمزية أعيد تقييمها في الدفاتر دون استيفاء متطلبات إعادة التقييم المصرية (لا تقييم مستقل ولا مسار اعتماد). أنسب معالجة:",
    options: [
      "Accept the revaluation since land values in Egypt have clearly risen",
      "Classify the difference as a misstatement: revaluation requires a compliant, independent valuation and proper authorization; quantify the effect and communicate to management and those charged with governance",
      "Adjust the entry unilaterally in the books as the auditor",
      "Ignore it because land is rarely material in SOE audits",
    ],
    optionsAr: [
      "قبول إعادة التقييم لأن قيم الأراضي في مصر ارتفعت بوضوح",
      "تصنيف الفرق كتحريف: فإعادة التقييم تستلزم تقييمًا مستقلًا مطابقًا وتفويضًا سليمًا؛ وتقدير أثره وإبلاغ الإدارة وأصحاب الحوكمة",
      "تعديل القيد منفردًا في الدفاتر بصفته مراجعًا",
      "تجاهله لأن الأراضي نادرًا ما تكون جوهرية في مراجعات الشركات الحكومية",
    ],
    answerIndex: 1,
    explanation:
      "A revaluation without an independent, compliant valuation and authorization trail fails both the EAS measurement requirements and internal-control authorization objectives — a potential misstatement to quantify and escalate; unilateral bookkeeping by the auditor (C) is never permitted, and 'markets have risen' (A) or 'rarely material' (D) are not audit justifications.",
    explanationAr:
      "إعادة تقييم دون تقييم مستقل مطابق ومسار تفويض سليم تخالف متطلبات القياس المصرية وأهداف التفويض في الرقابة الداخلية معًا — فهي تحريف محتمل يُقدَّر أثره ويُصعَّد؛ ولا يجوز للمراجع القيد في الدفاتر منفردًا (ج) أبدًا، و«السوق ارتفع» (أ) أو «نادرًا الجوهرية» (د) ليسا مسوغين للمراجعة.",
    standardTag: "EAS",
    area: "egypt",
    difficulty: 2,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-09",
    stem: "Which of the following is TRUE about the Egyptian Standards on Auditing (ESAs) applied in statutory audits in Egypt?",
    stemAr: "أي مما يلي صحيح بشأن معايير المراجعة المصرية (ESAs) المطبقة في المراجعات القانونية بمصر؟",
    options: [
      "They are completely unrelated to the ISAs issued by the IAASB",
      "They are largely based on/adapted from the International Standards on Auditing",
      "They apply only to audits performed for foreign investors",
      "They replaced the tax law as the basis of tax assessments",
    ],
    optionsAr: [
      "لا صلة لها إطلاقًا بمعايير المراجعة الدولية الصادرة عن IAASB",
      "مستندة إلى حد كبير إلى معايير المراجعة الدولية ومكيّفة عنها",
      "تطبق فقط على المراجعات المقدمة للمستثمرين الأجانب",
      "أحلت محل قانون الضرائب أساسًا لتحديد الوعاء الضريبي",
    ],
    answerIndex: 1,
    explanation:
      "The Egyptian Standards on Auditing derive from the ISAs (adapted and issued locally), so Egyptian statutory audits follow ISA-based methodology with local regulatory overlays. Option A reverses the relationship; C is wrong (they apply to statutory audits generally); D confuses auditing standards with tax law.",
    explanationAr:
      "مستندة إلى معايير المراجعة الدولية (مكيّفة وصادرة محليًا)، فالمراجعات القانونية المصرية تسير على منهجية دولية مع طبقات تنظيمية محلية. والخيار (أ) يعكس العلاقة، و(ج) خطأ فتسري على المراجعات القانونية عمومًا، و(د) يخلط بين معايير المراجعة وقانون الضرائب.",
    standardTag: "Egypt regulation",
    area: "egypt",
    difficulty: 1,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-10",
    stem: "An SOE's receivables include large balances from ministries with no documented credit terms and delays beyond a year. The auditor's primary concern under ISA 540 (Revised) estimates-and-expected-loss logic is:",
    stemAr: "تتضمن ذمم شركة حكومية أرصدة كبيرة لوزارات دون شروط ائتمان موثقة وتأخارات تتجاوز العام. الانشغال الأول للمراجع وفق منطق التقديرات والخسائر المتوقعة في ISA 540 (المعدّل):",
    options: [
      "None — government balances are implicitly collectible",
      "The impairment estimate: expected credit losses on past-due government balances must reflect realistic loss-rate assumptions and observable data, not an assumption of automatic collectibility",
      "Only the completeness of revenue recognition",
      "Reclassifying all ministerial balances as equity",
    ],
    optionsAr: [
      "لا انشغال — فأرصدة الجهات الحكومية قابلة للتحصيل ضمنًا",
      "تقدير الاضمحلال: يجب أن تعكس الخسائر الائتمانية المتوقعة على الأرصدة المتأخرة الحكومية فروض واقعية للخسارة وبيانات قابلة للملاحظة، لا افتراض قابلية تحصيل تلقائية",
      "اكتمال الاعتراف بالإيراد فقط",
      "إعادة تصنيف كل أرصدة الوزارات حقوقَ ملكية",
    ],
    answerIndex: 1,
    explanation:
      "Government debtors are not a substitute for evidence: ECL models under IFRS 9/EAS equivalents must incorporate observable past-due behavior and realistic loss expectations for such balances, and the auditor tests the assumptions under ISA 540 (Revised). Automatic collectibility (A) is an unjustified assumption; revenue completeness (C) is a different assertion; reclassification (D) is nonsense.",
    explanationAr:
      "المدينون الحكوميون ليسوا بديلًا عن الدليل: يجب أن تتضمن نماذج الخسائر الائتمانية المتوقعة وفق IFRS 9 ونظائرها المصرية سلوكًا متأخرًا ملحوظًا وتوقعات خسارة واقعية لهذه الأرصدة، ويختبر المراجع الفروض وفق ISA 540 (المعدّل). فالقابلية التلقائية للتحصيل (أ) فرض بلا سند، واكتمال الإيراد (ج) تأكيد آخر، وإعادة التصنيف (د) عبث.",
    standardTag: "ISA 540",
    area: "egypt",
    difficulty: 3,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-11",
    stem: "During the state's IPO program, an SOE prepares carve-out financial statements for a subsidiary to be listed. Which audit challenge is MOST distinctive to carve-outs?",
    stemAr: "أثناء برنامج الطروحات الحكومية، تعد شركة حكومية قوائم مالية مجزأة لشركة تابعة ستُدرج بالبورصة. أي تحدٍّ مراجعة أخص بتجزئة القوائم؟",
    options: [
      "Valuing the head office building",
      "Allocating shared costs and group functions to the carve-out on a rational, supportable basis, and presenting the resulting entity as if standalone — with related-party and going-concern implications",
      "Confirming the subsidiary's cash balances",
      "Testing the payroll of the parent company",
    ],
    optionsAr: [
      "تقييم مبنى المركز الرئيسي",
      "توزيع التكاليف المشتركة والوظائف المجموعية على الكيان المجزأ على أساس عقلاني قابل للتأييد، وعرض الكيان الناتج وكأنه مستقل — مع انعكاسات الأطراف ذات العلاقة والاستمرارية",
      "تأكيد أرصدة نقدية للتابعة",
      "اختبار مصروفات الأجور للشركة الأم",
    ],
    answerIndex: 1,
    explanation:
      "Carve-out financial statements must depict a standalone entity that never legally existed: allocating corporate costs, shared services and financing on a supportable basis (with consistent policies) is the distinctive challenge, compounded by intercompany pricing, related-party disclosures and dependence on group functions for going concern. Cash confirmations (C) and parent payroll (D) are routine procedures, not carve-out-specific.",
    explanationAr:
      "يجب أن تصور القوائم المجزأة كيانًا مستقلًا لم يوجد قانونيًا قط: فتوزيع التكاليف المؤسسية والخدمات المشتركة والتمويل على أساس قابل للتأييد (بسياسات متسقة) هو التحدي المميز، ويتفاقم بتسعير العمليات البينية والإفصاح عن الأطراف ذات العلاقة والاعتماد على وظائف المجموعة في الاستمرارية. أما تأكيد النقدية (ج) وأجور الأم (د) فإجراءات اعتيادية لا تخص التجزئة.",
    standardTag: "IFRS 10",
    area: "egypt",
    difficulty: 3,
    source: "Egypt SOE audit past paper (adapted)",
  },
  {
    code: "SOE-P1-12",
    stem: "Which statement best reflects the role of those charged with governance (TCWG) in an Egyptian SOE audit under ISA 260?",
    stemAr: "أي عبارة تعكس على أفضل وجه دور أصحاب الحوكمة في مراجعة شركة حكومية مصرية وفق ISA 260؟",
    options: [
      "Governance communication requirements do not apply to state-owned entities",
      "The auditor communicates the planned scope and timing, significant findings, and independence matters with those charged with governance — the board and, where present, the audit committee — adapting the channel to the entity's governance structure",
      "All communications go to the holding company's minister directly",
      "TCWG communications are optional when a government observer attends board meetings",
    ],
    optionsAr: [
      "لا تنطبق متطلبات التواصل مع الحوكمة على الكيانات المملوكة للدولة",
      "يتواصل المراجع مع أصحاب الحوكمة — مجلس الإدارة ولجنة المراجعة عند وجودها — بشأن نطاق المراجعة المخطط وتوقيتها والنتائج الجوهرية ومسائل الاستقلالية، مع تكييف قناة التواصل مع هيكل حوكمة الكيان",
      "توجه جميع المراسلات إلى وزير الشركة القابضة مباشرةً",
      "التواصل مع أصحاب الحوكمة اختياري عند حضور مراقب حكومي اجتماعات المجلس",
    ],
    answerIndex: 1,
    explanation:
      "ISA 260's communication obligations apply to every audit — the auditor engages with the appropriate layer of TCWG (board/audit committee) on scope, findings and independence, structured around the entity's governance. No blanket exemption exists for SOEs (A); ministerial reporting (C) is a specific statutory overlay, not the ISA 260 channel; a government observer (D) does not dissolve the duty.",
    explanationAr:
      "التزامات التواصل في ISA 260 تسري على كل مراجعة — يتحاور المراجع مع الطبقة المناسبة من أصحاب الحوكمة (المجلس/لجنة المراجعة) في النطاق والنتائج والاستقلالية وفق هيكل حوكمة المنشأة. فلا إعفاء شاملًا للكيانات الحكومية (أ)، والإبلاغ الوزاري (ج) طبقة تشريعية خاصة لا قناة ISA 260، ووجود مراقب حكومي (د) لا يلغي الواجب.",
    standardTag: "ISA 260",
    area: "egypt",
    difficulty: 2,
    source: "Egypt SOE audit past paper (adapted)",
  },
]
