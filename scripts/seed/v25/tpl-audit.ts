/** v25 audit cluster — ISA-based question templates (AA, AAA, SOE papers).
 *  Concept + numeric templates in past-paper style; figures vary by RNG. */
import { type Template, egp, fmt, numericOptions } from "./gen-lib"

const AUDIT_FAMS = ["AA", "AAA", "SOE"] as const
const AA_HARD = ["AA", "AAA"] as const

export const AUDIT_TEMPLATES: Template[] = [
  {
    tag: "ISA 200", area: "auditing", difficulty: 1, fams: [...AUDIT_FAMS],
    make: (r, e) => {
      const risk = r.pick(["inherent", "control", "detection"])
      const opts: Record<string, [string, string, string, string]> = {
        inherent: [
          "The susceptibility of an account to material misstatement before controls",
          "The risk a control fails to prevent a misstatement",
          "The risk the auditor's procedures fail to detect a misstatement",
          "The risk management overrides controls deliberately",
        ],
        control: [
          "The risk a misstatement is not prevented, or detected and corrected, by internal control",
          "The susceptibility of an account before considering controls",
          "The risk sampling produces an unrepresentative conclusion",
          "The risk the engagement letter omits key terms",
        ],
        detection: [
          "The risk the auditor's own procedures fail to detect a material misstatement",
          "The risk a control fails to correct a misstatement",
          "The susceptibility of an account before controls",
          "The risk the client refuses to provide representations",
        ],
      }
      const ar: Record<string, [string, string, string, string]> = {
        inherent: [
          "قابلية الحساب للتحريف الجوهري قبل الرقابة",
          "خطر فشل الرقابة في منع التحريف",
          "خطر فشل إجراءات المراجع في اكتشاف التحريف",
          "خطر تجاوز الإدارة للرقابة عمدًا",
        ],
        control: [
          "خطر عدم منع الرقابة الداخلية للتحريف أو عدم اكتشافه وتصحيحه",
          "قابلية الحساب للتحريف قبل أخذ الرقابة في الحسبان",
          "خطر أن ينتج المعاينة نتيجة غير ممثلة",
          "خطر حذف شروط جوهرية من خطاب الارتباط",
        ],
        detection: [
          "خطر فشل إجراءات المراجع نفسها في اكتشاف تحريف جوهري",
          "خطر فشل الرقابة في تصحيح التحريف",
          "قابلية الحساب للتحريف قبل الرقابة",
          "خطر رفض العميل تقديم التمثيلات",
        ],
      }
      return {
        stem: `In planning the audit of ${e.en}, which statement BEST describes ${risk} risk?`,
        stemAr: `أثناء تخطيط مراجعة ${e.ar}، أي عبارة تصف خطر ${risk === "inherent" ? "التحريف المتأصل" : risk === "control" ? "الرقابة" : "الاكتشاف"} على أفضل وجه؟`,
        options: opts[risk],
        optionsAr: ar[risk],
        answerIndex: 0,
        explanation: "ISA 200: audit risk = inherent risk × control risk × detection risk; each component is defined at the assertion level.",
        explanationAr: "معيار ISA 200: خطر المراجعة = الخطر المتأصل × خطر الرقابة × خطر الاكتشاف، ويُعرَّف كل مكوِّن على مستوى التأكيد.",
      }
    },
  },
  {
    tag: "ISA 210", area: "auditing", difficulty: 1, fams: [...AUDIT_FAMS],
    make: (_r, e) => ({
      stem: `For the recurring audit of ${e.en}, the auditor decided to send a reminder letter rather than a full new engagement letter. When is this acceptable?`,
      stemAr: `في مراجعة متكررة لـ ${e.ar}، قرر المراجع إرسال خطاب تذكيري بدل خطاب ارتباط جديد. متى يعد هذا مقبولًا؟`,
      options: [
        "No circumstances indicate a misunderstood objective, and the terms are unchanged",
        "The client requested a shorter letter to save costs",
        "The audit committee has not yet been formed",
        "The predecessor auditor has not replied to the clearance letter",
      ],
      optionsAr: [
        "عدم وجود أي ظرف يشير لسوء فهم الهدف وعدم تغيّر الشروط",
        "طلب العميل خطابًا أقصر توفيرًا للتكلفة",
        "لجنة المراجعة لمّا تتشكل بعد",
        "المراجع السابق لم يرد على خطاب التمييز",
      ],
      answerIndex: 0,
      explanation: "ISA 210: for recurring audits the auditor may just remind the client of the existing terms, provided nothing indicates a misunderstanding and the terms are unchanged.",
      explanationAr: "معيار ISA 210: في المراجعات المتكررة يكفي تذكير العميل بالشروط القائمة ما دام لا شيء يدل على سوء فهم ولم تتغير الشروط.",
    }),
  },
  {
    tag: "ISA 220", area: "auditing", difficulty: 2, fams: [...AA_HARD],
    make: (_r, e) => ({
      stem: `Before the audit report of ${e.en} is dated, an engagement quality control reviewer must:`,
      stemAr: `قبل توقيع تقرير مراجعة ${e.ar}، يجب على مراجع الجودة المستقل للارتباط أن:`,
      options: [
        "Discuss significant judgements with the engagement partner and review the report and selected papers",
        "Re-perform the whole audit independently",
        "Sign the audit report jointly with the partner",
        "Confirm the client's bank balances personally",
      ],
      optionsAr: [
        "يناقش الأحكام الجوهرية مع شريك الارتباط ويراجع التقرير وعينة من الأوراق",
        "يعيد تنفيذ المراجعة كاملة باستقلال",
        "يوقع تقرير المراجعة بالتضامن مع الشريك",
        "يؤكد أرصدة العميل البنكية بنفسه",
      ],
      answerIndex: 0,
      explanation: "ISA 220 (for listed entities): the EQCR holds discussions with the partner, reviews the report and significant judgements, and documents the review — no re-performance.",
      explanationAr: "معيار ISA 220 (للكيانات المدرجة): يناقش مراجع الجودة الشريك ويراجع التقرير والأحكام الجوهرية ويوثّق ذلك، دون إعادة تنفيذ المراجعة.",
    }),
  },
  {
    tag: "ISA 230", area: "auditing", difficulty: 1, fams: [...AUDIT_FAMS],
    make: (_r, e) => ({
      stem: `The audit file of ${e.en} was assembled on 15 March. When may the auditor DELETE or discard documentation?`,
      stemAr: `اكتمل ملف مراجعة ${e.ar} في 15 مارس. متى يجوز للمراجع حذف أو إتلاف الوثائق؟`,
      options: [
        "Before the retention period ends, only with the regulator's written approval; otherwise never",
        "Two years after the audit opinion, at the firm's discretion",
        "Once the fee is fully collected",
        "Immediately after the client switches auditors",
      ],
      optionsAr: [
        "قبل انتهاء مدة الحفظ بموافقة كتابية من الجهة الرقابية فقط، وإلا فأبدًا",
        "بعد عامين من رأي المراجعة وفق تقدير المكتب",
        "بعد تحصيل الأتعاب كاملة",
        "فور انتقال العميل إلى مراجع آخر",
      ],
      answerIndex: 0,
      explanation: "ISA 230: documentation must not be deleted before the retention period (minimum five years unless local law is longer) ends; early disposal only where a regulator lawfully requires it.",
      explanationAr: "معيار ISA 230: لا يجوز حذف الوثائق قبل انتهاء مدة الحفظ (خمس سنوات على الأقل أو مدة أطول وفق القانون المحلي)، ولا الإتلاف المبكر إلا بطلب قانوني من الجهة الرقابية.",
    }),
  },
  {
    tag: "ISA 240", area: "auditing", difficulty: 2, fams: [...AUDIT_FAMS],
    make: (_r, e) => ({
      stem: `Which is the PRIMARY responsibility of management of ${e.en} regarding fraud?`,
      stemAr: `ما المسؤولية الأساسية لإدارة ${e.ar} فيما يتعلق بالاحتيال؟`,
      options: [
        "Designing and implementing controls to prevent and detect fraud and error",
        "Detecting all fraud perpetrated by employees",
        "Guaranteeing the auditor an entirely fraud-free audit",
        "Reporting every suspected fraud to the external auditor within 48 hours",
      ],
      optionsAr: [
        "تصميم رقابة تمنع الاحتيال والخطأ وتكتشفهما وتنفذها",
        "اكتشاف كل احتيال يرتكبه الموظفون",
        "ضمان مراجعة خالية تمامًا من الاحتيال للمراجع",
        "الإبلاغ عن كل احتيال مشتبه به للمراجع الخارجي خلال 48 ساعة",
      ],
      answerIndex: 0,
      explanation: "ISA 240 Para 4: those charged with governance and management are responsible for the prevention and detection of fraud; the auditor obtains reasonable — not absolute — assurance.",
      explanationAr: "الفقرة 4 من ISA 240: الإدارة وأصحاب الحوكمة مسؤولان عن منع الاحتيال واكتشافه، والمراجع يحصل على تأكيد معقول لا مطلق.",
    }),
  },
  {
    tag: "ISA 240", area: "auditing", difficulty: 1, fams: ["AA"],
    make: (r, e) => {
      const leg = r.pick([
        ["pressure", "tight deadlines and aggressive bonus targets", "ضغوط مواعيد نهائية وأهداف مكافآت عدوانية"],
        ["opportunity", "a weak control environment and dominant CEO", "بيئة رقابة ضعيفة ومدير تنفيذي مهيمن"],
        ["rationalisation", "management's belief that figures will 'correct next year'", "اعتقاد الإدارة أن الأرقام ستصحح العام القادم"],
      ])
      return {
        stem: `While reviewing ${e.en}, the audit team noted ${leg[1]}. Which leg of the fraud triangle does this represent?`,
        stemAr: `لاحظ فريق المراجعة في ${e.ar} ${leg[2]}. أي ضلع من أضلاع مثلث الاحتيال يمثل ذلك؟`,
        options: [leg[0], "incentive", "attitude", "capability"],
        optionsAr: [
          leg[0] === "pressure" ? "الضغط" : leg[0] === "opportunity" ? "الفرصة" : "التبرير",
          "التحفيز",
          "الاتجاه",
          "القدرة",
        ],
        answerIndex: 0,
        explanation: "The fraud triangle: incentive/pressure, opportunity, and rationalisation/attitude.",
        explanationAr: "مثلث الاحتيال: التحفيز/الضغط، والفرصة، والتبرير/الاتجاه.",
      }
    },
  },
  {
    tag: "ISA 250", area: "auditing", difficulty: 2, fams: [...AA_HARD],
    make: (_r, e) => ({
      stem: `During the audit of ${e.en}, the team identified a possible instance of non-compliance with tax law. The auditor's FIRST course of action is to:`,
      stemAr: `أثناء مراجعة ${e.ar}، تبين للفريق احتمال مخالفة لقانون الضرائب. أول إجراء يتخذه المراجع هو:`,
      options: [
        "Understand the non-compliance and its possible effect on the financial statements",
        "Notify the tax authority immediately",
        "Withdraw from the engagement at once",
        "Adjust the financial statements on the client's behalf",
      ],
      optionsAr: [
        "فهم المخالفة وأثرها المحتمل على القوائم المالية",
        "إخطار مصلحة الضرائب فورًا",
        "الانسحاب من الارتباط في الحال",
        "تسوية القوائم المالية نيابة عن العميل",
      ],
      answerIndex: 0,
      explanation: "ISA 250: first understand the matter and its FS effect; external reporting to authorities is a last resort, and withdrawal depends on the response received.",
      explanationAr: "معيار ISA 250: يفهم المراجع الواقعة وأثرها أولًا، والإبلاغ الخارجي ملاذ أخير ويتوقف الانسحاب على استجابة العميل.",
    }),
  },
  {
    tag: "ISA 260", area: "auditing", difficulty: 2, fams: [...AA_HARD],
    make: (_r, e) => ({
      stem: `Which matter MUST the auditor of ${e.en} communicate to those charged with governance?`,
      stemAr: `أي مسألة يجب على مراجع ${e.ar} إبلاغها لأصحاب الحوكمة؟`,
      options: [
        "The auditor's responsibilities and an overview of the planned scope and timing of the audit",
        "The individual salaries of junior audit staff",
        "The firm's marketing plans for the coming year",
        "Copies of all working papers prepared by the team",
      ],
      optionsAr: [
        "مسؤوليات المراجع ونظرة عامة على نطاق المراجعة المخطط وتوقيتها",
        "رواتب موظفي المراجعة المبتدئين فرديًا",
        "خطط المكتب التسويقية للعام القادم",
        "نسخ من كل أوراق العمل التي أعدها الفريق",
      ],
      answerIndex: 0,
      explanation: "ISA 260 requires communicating the auditor's responsibilities, the planned scope and timing, and significant findings (including significant difficulties and uncorrected misstatements).",
      explanationAr: "معيار ISA 260 يوجب إبلاغ أصحاب الحوكمة بمسؤوليات المراجع ونطاق المراجعة وتوقيتها والملاحظات الجوهرية بما فيها الصعوبات والتحريفات غير المصححة.",
    }),
  },
  {
    tag: "ISA 300", area: "auditing", difficulty: 1, fams: ["AA"],
    make: (_r, e) => ({
      stem: `The audit strategy for ${e.en} is BEST described as:`,
      stemAr: `يوصف مسار استراتيجية المراجعة لـ ${e.ar} بأنه:`,
      options: [
        "The planned approach, scope, direction and resources — setting the framework for the detailed audit plan",
        "The itemised timetable of fieldwork dates",
        "The list of confirmation requests to be sent",
        "The final analytical review working paper",
      ],
      optionsAr: [
        "النهج والنطاق والتوجه والموارد المخططة — الإطار الذي يُبنى عليه خطة المراجعة التفصيلية",
        "الجدول الزمني المفصل لمواعيد العمل الميداني",
        "قائمة طلبات التأكيد المرسلة",
        "ورقة المراجعة التحليلية الختامية",
      ],
      answerIndex: 0,
      explanation: "ISA 300: the strategy sets scope, timing and direction at a high level and guides preparation of the detailed audit plan.",
      explanationAr: "معيار ISA 300: تحدد الاستراتيجية النطاق والتوقيت والتوجه على مستوى عام وتوجه إعداد خطة المراجعة التفصيلية.",
    }),
  },
  {
    tag: "ISA 315", area: "auditing", difficulty: 2, fams: [...AUDIT_FAMS],
    make: (_r, e) => ({
      stem: `The audit team assessed the revenue-recognition estimates of ${e.en} as a significant risk. A significant risk is one that:`,
      stemAr: `قيّم فريق المراجعة تقديرات الاعتراف بالإيراد في ${e.ar} خطرًا جوهريًا. الخطر الجوهري هو الذي:`,
      options: [
        "Requires special audit consideration due to its possible effect on the financial statements",
        "Has already caused a material misstatement this year",
        "Can only be audited by a specialist",
        "The board has formally classified as intolerable",
      ],
      optionsAr: [
        "يستلزم عناية مراجعة خاصة لأثره المحتمل على القوائم المالية",
        "تسبب فعلًا في تحريف جوهري هذا العام",
        "لا يمكن مراجعته إلا بواسطة متخصص",
        "صنّفه مجلس الإدارة رسميًا غير محتمل",
      ],
      answerIndex: 0,
      explanation: "ISA 315 (2019): significant risks are identified risks requiring special audit consideration; fraud risks are always significant, and controls reliance alone is never enough for them.",
      explanationAr: "معيار ISA 315 المعدل: المخاطر الجوهرية تتطلب عناية مراجعة خاصة، ومخاطر الاحتيال جوهرية دائمًا ولا تكفي الرقابة وحدها لمواجهتها.",
    }),
  },
  {
    tag: "ISA 315", area: "auditing", difficulty: 1, fams: ["AA"],
    make: (_r, e) => ({
      stem: `To understand the internal control system of ${e.en}, the auditor's PRIMARY purpose is to:`,
      stemAr: `الغرض الأساسي لفهم المراجع لنظام الرقابة الداخلية في ${e.ar} هو:`,
      options: [
        "Identify risks of material misstatement and design effective responses",
        "Certify the control system as effective",
        "Reduce the audit fee to the client",
        "Replace tests of details entirely",
      ],
      optionsAr: [
        "تحديد مخاطر التحريف الجوهري وتصميم استجابات فعالة",
        "شهادة بأن نظام الرقابة فعال",
        "تخفيض أتعاب المراجعة للعميل",
        "الاستغناء كليًا عن اختبارات التفاصيل",
      ],
      answerIndex: 0,
      explanation: "ISA 315: understanding the entity and its controls feeds the risk assessment and shapes the nature, timing and extent of further procedures.",
      explanationAr: "معيار ISA 315: فهم الكيان ورقابته يغذي تقييم المخاطر ويحدد طبيعة الإجراءات الإضافية وتوقيتها ومداها.",
    }),
  },
  {
    tag: "ISA 320", area: "auditing", difficulty: 2, fams: [...AUDIT_FAMS],
    make: (r, e) => {
      const pbt = r.pick([8_000_000, 12_500_000, 20_000_000, 24_000_000])
      const pct = r.pick([0.05, 0.055, 0.06])
      const om = Math.round(pbt * pct)
      const { options, optionsAr, answerIndex } = numericOptions(
        om, [Math.round(pbt * 0.1), Math.round(pbt * pct * 0.75), Math.round(pbt * pct * 1.5)]
      )
      return {
        stem: `${e.en} reports profit before tax of EGP ${fmt(pbt)}. Using the benchmark of ${Math.round(pct * 100)}% of PBT, overall materiality is closest to:`,
        stemAr: `تظهر ${e.ar} ربحًا قبل الضريبة بقيمة ${egp(pbt)}. باستخدام معيار ${Math.round(pct * 100)}% من الربح قبل الضريبة، فإن الأهمية النسبية الإجمالية تقارب:`,
        options, optionsAr, answerIndex,
        explanation: `Overall materiality = ${Math.round(pct * 100)}% × EGP ${fmt(pbt)} = EGP ${fmt(om)} (a profit-oriented benchmark under ISA 320).`,
        explanationAr: `الأهمية الإجمالية = ${Math.round(pct * 100)}% × ${egp(pbt)} = ${egp(om)} وفق معيار ISA 320 لمعيار مرتبط بالربح.`,
      }
    },
  },
  {
    tag: "ISA 320", area: "auditing", difficulty: 2, fams: [...AA_HARD],
    make: (r, e) => {
      const om = r.pick([400_000, 500_000, 600_000])
      const pct = r.pick([0.5, 0.65, 0.75])
      const pm = Math.round(om * pct)
      const { options, optionsAr, answerIndex } = numericOptions(
        pm, [Math.round(om * pct * 0.5), Math.round(om * 0.9), om]
      )
      return {
        stem: `Overall materiality for the audit of ${e.en} is EGP ${fmt(om)}. Performance materialality set at ${Math.round(pct * 100)}% of it is:`,
        stemAr: `الأهمية النسبية الإجمالية لمراجعة ${e.ar} هي ${egp(om)}. وأهمية الأداء عند ${Math.round(pct * 100)}% منها تساوي:`,
        options, optionsAr, answerIndex,
        explanation: `Performance materiality = ${Math.round(pct * 100)}% × EGP ${fmt(om)} = EGP ${fmt(pm)} — set to reduce the aggregation risk of uncorrected misstatements above overall materiality.`,
        explanationAr: `أهمية الأداء = ${Math.round(pct * 100)}% × ${egp(om)} = ${egp(pm)} — وتُحدد للحد من تراكم تحريفات غير مصححة تتجاوز الأهمية الإجمالية.`,
      }
    },
  },
  {
    tag: "ISA 330", area: "auditing", difficulty: 2, fams: [...AA_HARD],
    make: (_r, e) => ({
      stem: `Revenue recognition was assessed as a significant fraud risk at ${e.en}. Which response does ISA 330 require?`,
      stemAr: `قُيّم الاعتراف بالإيراد خطر احتيال جوهريًا في ${e.ar}. أي استجابة يوجبها معيار ISA 330؟`,
      options: [
        "Responses that stand alone — controls reliance cannot reduce these procedures",
        "Relying fully on the client's automated controls",
        "Sending confirmations only to the three largest customers",
        "Extending the audit fee estimate instead of procedures",
      ],
      optionsAr: [
        "استجابات قائمة بذاتها — فالاعتماد على الرقابة لا يغني عنها",
        "الاعتماد كليًا على الرقابة الآلية للعميل",
        "إرسال التأكيدات لأكبر ثلاثة عملاء فقط",
        "تمديد تقدير أتعاب المراجعة بدلًا من الإجراءات",
      ],
      answerIndex: 0,
      explanation: "ISA 330: significant risks (all fraud risks) require stand-alone responses — tests of details, substantive analytics, or both; controls can supplement, never replace.",
      explanationAr: "معيار ISA 330: المخاطر الجوهرية (ومنها مخاطر الاحتيال) تستلزم استجابات مستقلة — اختبارات تفاصيل أو تحليلات جوهرية أو كليهما، والرقابة مكمّلة لا بديلة.",
    }),
  },
  {
    tag: "ISA 330", area: "auditing", difficulty: 1, fams: ["AA"],
    make: (_r, e) => ({
      stem: `When the auditor of ${e.en} plans to rely on controls, the required audit response is to:`,
      stemAr: `عندما ينوي مراجع ${e.ar} الاعتماد على الرقابة، فالاستجابة المطلوبة هي:`,
      options: [
        "Test the operating effectiveness of those controls in the relevant period",
        "Increase the materiality level",
        "Skip all substantive procedures",
        "Ask management to certify the controls work",
      ],
      optionsAr: [
        "اختبار فاعلية تشغيل تلك الرقابة خلال الفترة ذات الصلة",
        "رفع مستوى الأهمية النسبية",
        "إلغاء كل الإجراءات الجوهرية",
        "طلب شهادة من الإدارة بأن الرقابة تعمل",
      ],
      answerIndex: 0,
      explanation: "ISA 330: planned controls reliance must be supported by tests of controls over the period relied upon; substantive work is reduced, not eliminated.",
      explanationAr: "معيار ISA 330: يُدعم الاعتماد المخطط على الرقابة باختبارات رقابة عن الفترة المعتمدة، وتُخفف الإجراءات الجوهرية دون إلغائها.",
    }),
  },
  {
    tag: "ISA 402", area: "auditing", difficulty: 3, fams: [...AA_HARD],
    make: (_r, e) => ({
      stem: `${e.en} outsources its payroll to a service organisation. Which audit treatment is CORRECT under ISA 402?`,
      stemAr: `أوكلت ${e.ar} معالجة الرواتب إلى منظمة خدمات. أي معالجة مراجعة تصح وفق ISA 402؟`,
      options: [
        "Obtain an understanding of the service organisation's system — e.g. via a type 2 SOC report covering design AND operating effectiveness",
        "Ignore payroll because it is processed externally",
        "Send the service organisation a clean audit opinion",
        "Rely on the service auditor's opinion without any evaluation",
      ],
      optionsAr: [
        "فهم نظام منظمة الخدمات — مثلًا عبر تقرير SOC من النوع الثاني الذي يغطي التصميم والفاعلية التشغيلية",
        "تجاهل الرواتب لمعالجتها خارجيًا",
        "منح منظمة الخدمات رأي مراجعة نظيفًا",
        "الاعتماد على رأي مراجع الخدمات دون أي تقييم",
      ],
      answerIndex: 0,
      explanation: "ISA 402: a type 2 report (design + operating effectiveness, with a description of the system and tests of controls) can support controls reliance after evaluating relevance and adequacy.",
      explanationAr: "معيار ISA 402: تقرير النوع الثاني (التصميم والفاعلية مع اختبارات الرقابة) يدعم الاعتماد على الرقابة بعد تقييم ملاءمته وكفايته.",
    }),
  },
  {
    tag: "ISA 450", area: "auditing", difficulty: 2, fams: [...AA_HARD],
    make: (_r, e) => ({
      stem: `During fieldwork at ${e.en}, individually immaterial misstatements were identified in several accounts. The auditor should:`,
      stemAr: `أثناء العمل الميداني في ${e.ar} ظهرت تحريفات غير جوهرية فرديًا في عدة حسابات. على المراجع أن:`,
      options: [
        "Accumulate them and evaluate their aggregate effect against overall materiality",
        "Ignore each one because none is individually material",
        "Correct them all by posting entries himself",
        "Expand the opinion to mention every item",
      ],
      optionsAr: [
        "تراكمها وتقييم أثرها الإجمالي مقابل الأهمية النسبية الإجمالية",
        "تجاهل كل بند لعدم جوهريته فرديًا",
        "تصحيحها كلها بقيود يسجلها بنفسه",
        "التوسع في الرأي لذكر كل بند",
      ],
      answerIndex: 0,
      explanation: "ISA 450: misstatements must be accumulated; the aggregate — including those judged immaterial — is evaluated against overall materiality before concluding.",
      explanationAr: "معيار ISA 450: تُراكم التحريفات ويقيَّم مجموعها — بما فيها ما اعتُبر غير جوهري — مقابل الأهمية الإجمالية قبل انتهاء المراجعة.",
    }),
  },
  {
    tag: "ISA 500", area: "auditing", difficulty: 1, fams: ["AA"],
    make: (_r, e) => ({
      stem: `Which statement about audit evidence for the ${e.en} engagement is CORRECT?`,
      stemAr: `أي عبارة عن أدلة المراجعة في ارتباط ${e.ar} صحيحة؟`,
      options: [
        "Appropriateness is the measure of quality; sufficiency is the measure of quantity",
        "Sufficiency is the quality measure; appropriateness the quantity",
        "Both measure the cost of evidence",
        "Neither applies to externally confirmed balances",
      ],
      optionsAr: [
        "الملاءمة مقياس الجودة، والكفاية مقياس الكمية",
        "الكفاية مقياس الجودة والملاءمة مقياس الكمية",
        "كلاهما يقيس تكلفة الدليل",
        "لا ينطبق أي منهما على الأرصدة المؤكدة خارجيًا",
      ],
      answerIndex: 0,
      explanation: "ISA 500: sufficiency = quantity of evidence; appropriateness = quality (relevance and reliability of the source and nature).",
      explanationAr: "معيار ISA 500: الكفاية كمية الدليل، والملاءمة جودته (ملاءمة المصدر وطبيعته وموثوقيته).",
    }),
  },
  {
    tag: "ISA 505", area: "auditing", difficulty: 2, fams: [...AUDIT_FAMS],
    make: (_r, e) => ({
      stem: `The most RELIABLE evidence for ${e.en}'s trade receivables balances is:`,
      stemAr: `أكثر الأدلة موثوقية لأرصدة عملاء ${e.ar} هي:`,
      options: [
        "Direct positive confirmation obtained by the auditor from debtors",
        "The aged receivables listing printed by the client",
        "Management's representation that balances are correct",
        "Credit-limit memos from the sales manager",
      ],
      optionsAr: [
        "تأكيد إيجابي مباشر يحصل عليه المراجع من المدينين",
        "كشف أعمار الذمم الذي يطبعه العميل",
        "تمثيل الإدارة بأن الأرصدة صحيحة",
        "مذكرات حدود الائتمان من مدير المبيعات",
      ],
      answerIndex: 0,
      explanation: "ISA 505: evidence obtained directly by the auditor from external parties (positive confirmations) is more reliable than internally generated documentation.",
      explanationAr: "معيار ISA 505: الدليل الذي يحصل عليه المراجع مباشرة من طرف خارجي (تأكيد إيجابي) أكثر موثوقية من الوثائق الداخلية.",
    }),
  },
  {
    tag: "ISA 505", area: "auditing", difficulty: 3, fams: [...AA_HARD],
    make: (_r, e) => ({
      stem: `When may the auditor of ${e.en} use NEGATIVE confirmations for receivables?`,
      stemAr: `متى يجوز لمراجع ${e.ar} استخدام التأكيدات السلبية للذمم المدينة؟`,
      options: [
        "Only for many small balances, low assessed risk, and where a response is expected if the balance is disputed",
        "For the single largest balance as a substitute for a positive request",
        "Whenever the client prefers cheaper procedures",
        "Never — negative confirmation is prohibited by ISA 505",
      ],
      optionsAr: [
        "فقط مع أرصدة صغيرة كثيرة وخطر منخفض وتوقع رد عند الاعتراض على الرصيد",
        "لأكبر رصيد واحد كبديل عن الطلب الإيجابي",
        "كلما فضل العميل إجراءات أرخص",
        "أبدًا — التأكيد السلبي يحظره معيار ISA 505",
      ],
      answerIndex: 0,
      explanation: "ISA 505: negative confirmations are acceptable only when risk is low, balances are numerous and small, and non-response can be treated as corroboration.",
      explanationAr: "معيار ISA 505: يقبل التأكيد السلبي فقط عند انخفاض الخطر وتعدد الأرصمة صغرها، واعتبار عدم الرد تأييدًا.",
    }),
  },
  {
    tag: "ISA 520", area: "auditing", difficulty: 2, fams: ["AA", "AAA"],
    make: (r, e) => {
      const bal = r.pick([4_000_000, 6_000_000, 8_000_000])
      const rate = r.pick([0.09, 0.10, 0.12])
      const expected = Math.round(bal * rate)
      const { options, optionsAr, answerIndex } = numericOptions(
        expected, [Math.round(bal * rate * 0.5), Math.round(bal * (rate + 0.03)), Math.round(bal)]
      )
      return {
        stem: `${e.en} paid interest of EGP ${fmt(expected)} on an average loan balance of EGP ${fmt(bal)}. As a substantive analytic, the expected interest at ${Math.round(rate * 100)}% is:`,
        stemAr: `دفعت ${e.ar} فوائد بقيمة ${egp(expected)} على متوسط رصيد قرض ${egp(bal)}. كتحليل جوهري، الفائدة المتوقعة بمعدل ${Math.round(rate * 100)}% تساوي:`,
        options, optionsAr, answerIndex,
        explanation: `Expected interest = average balance × rate = EGP ${fmt(bal)} × ${Math.round(rate * 100)}% = EGP ${fmt(expected)}; compare with the recorded amount and investigate differences beyond the threshold.`,
        explanationAr: `الفائدة المتوقعة = متوسط الرصيد × المعدل = ${egp(bal)} × ${Math.round(rate * 100)}% = ${egp(expected)}، وتقارن بالمسجلة مع تحقيق الفروق الجوهرية.`,
      }
    },
  },
  {
    tag: "ISA 530", area: "auditing", difficulty: 2, fams: ["AA"],
    make: (_r, e) => ({
      stem: `Which factor would LEAD the auditor of ${e.en} to INCREASE the sample size for a test of details?`,
      stemAr: `أي عامل يدفع مراجع ${e.ar} إلى زيادة حجم العينة في اختبار تفاصيل؟`,
      options: [
        "An increase in the auditor's assessed risk of material misstatement",
        "A higher tolerable misstatement",
        "Greater tolerable deviation rate",
        "Lower confidence in the conclusion",
      ],
      optionsAr: [
        "زيادة خطر التحريف الجوهري الذي قيّمه المراجع",
        "ارتفاع التحريف المحتمل",
        "ارتفاع معدل الانحراف المحتمل",
        "انخفاض الثقة في النتيجة",
      ],
      answerIndex: 0,
      explanation: "ISA 530: sample size varies directly with assessed risk and inversely with tolerable misstatement / deviation rate.",
      explanationAr: "معيار ISA 530: يتناسب حجم العينة طرديًا مع الخطر المقيَّم وعكسيًا مع التحريف أو الانحراف المحتمل.",
    }),
  },
  {
    tag: "ISA 530", area: "auditing", difficulty: 2, fams: [...AA_HARD],
    make: (r, e) => {
      const bv = r.pick([2_400_000, 3_600_000, 4_800_000])
      const sv = r.pick([120_000, 150_000, 200_000])
      const mis = r.pick([9_000, 12_000, 15_000])
      const projected = Math.round((mis / sv) * bv)
      const { options, optionsAr, answerIndex } = numericOptions(
        projected, [mis * 10, Math.round((mis / sv) * bv * 0.5), mis]
      )
      return {
        stem: `In a PPS-style projection at ${e.en}: book value EGP ${fmt(bv)}, sample value EGP ${fmt(sv)}, misstatement found in the sample EGP ${fmt(mis)}. The projected misstatement is closest to:`,
        stemAr: `في إسقاط على الأساس القيمي في ${e.ar}: القيمة الدفترية ${egp(bv)} وعينة ${egp(sv)} وتحريف داخل العينة ${egp(mis)}. التحريف المتوقع يقارب:`,
        options, optionsAr, answerIndex,
        explanation: `Projection ratio = ${fmt(mis)} ÷ ${fmt(sv)} = ${r.round(mis / sv, 3)} → projected misstatement ≈ EGP ${fmt(projected)}.`,
        explanationAr: `نسبة الإسقاط = ${fmt(mis)} ÷ ${fmt(sv)} = ${r.round(mis / sv, 3)} ← التحريف المتوقع ≈ ${egp(projected)}.`,
      }
    },
  },
  {
    tag: "ISA 540", area: "auditing", difficulty: 3, fams: [...AA_HARD],
    make: (_r, e) => ({
      stem: `Auditing ${e.en}'s ECL estimate, the auditor's PRIMARY focus is on:`,
      stemAr: `في مراجعة تقدير الخسائر الائتمانية المتوقعة لـ ${e.ar}، يركز المراجع أساسًا على:`,
      options: [
        "Management's assumptions, data and estimation uncertainty — how the estimate was made",
        "Re-performing the client's entire ECL model line by line",
        "Confirming the estimate with the bank",
        "Ensuring the estimate equals last year's figure",
      ],
      optionsAr: [
        "افتراضات الإدارة وبياناتها وعدم يقين التقدير — كيف بُني التقدير",
        "إعادة احتساب نموذج ECL بالكامل سطرًا سطرًا",
        "تأكيد التقدير مع البنك",
        "التأكد من مساواة التقدير لرقم العام السابق",
      ],
      answerIndex: 0,
      explanation: "ISA 540 (revised): for estimates the auditor evaluates the method, assumptions and data, and designs responses to estimation uncertainty — not blanket re-performance.",
      explanationAr: "معيار ISA 540 المعدل: يقيّم المراجع الطريقة والافتراضات والبيانات ويصمم استجابات لعدم اليقين، لا إعادة الاحتساب الشاملة.",
    }),
  },
  {
    tag: "ISA 550", area: "auditing", difficulty: 2, fams: [...AA_HARD],
    make: (_r, e) => ({
      stem: `The audit team identified an undisclosed sale to ${e.en}'s major shareholder. Under ISA 550 the auditor should FIRST:`,
      stemAr: `اكتشف فريق المراجعة بيعًا غير مفصح به لأكبر مساهم في ${e.ar}. وفق ISA 550 يبدأ المراجع بـ:`,
      options: [
        "Inspect the underlying arrangements and evaluate the disclosure implications",
        "Report the shareholder to the stock exchange",
        "Issue a disclaimer immediately",
        "Remove the transaction from the records",
      ],
      optionsAr: [
        "فحص الترتيبات الأصلية وتقييم آثار الإفصاح",
        "الإبلاغ عن المساهم للبورصة",
        "إصدار إمتناع فورًا",
        "حذف العملية من السجلات",
      ],
      answerIndex: 0,
      explanation: "ISA 550: respond to identified related-party transactions by inspecting the arrangements, confirming with counterparties if needed, and evaluating whether IAS 24 disclosure is adequate.",
      explanationAr: "معيار ISA 550: يستجيب المراجع لعمليات الأطراف ذات العلاقة بفحص الترتيبات والتأكيد عند اللزوم وتقييم كفاية الإفصاح وفق IAS 24.",
    }),
  },
  {
    tag: "ISA 560", area: "auditing", difficulty: 2, fams: [...AUDIT_FAMS],
    make: (r, e) => {
      const type = r.pick([
        ["adjusting", "a court judgment after the reporting date on a case existing at that date", "حكم محكمة بعد تاريخ التقرير في دعوى قائمة قبله"],
        ["non-adjusting", "a fire destroying inventory after the reporting date", "حريق يدمر المخزون بعد تاريخ التقرير"],
      ])
      return {
        stem: `After the year-end of ${e.en} occurred ${type[1]}. Under ISA 560 this is a:`,
        stemAr: `بعد نهاية السنة المالية لـ ${e.ar} وقع ${type[2]}. وفق ISA 560 يعد هذا:`,
        options: [
          `${type[0]} event — ${type[0] === "adjusting" ? "adjust the financial statements" : "disclose the nature and estimated financial effect"}`,
          `non-adjusting event in all cases — no action`,
          `error requiring a restatement of last year`,
          `going-concern matter by definition`,
        ],
        optionsAr: [
          `${type[0] === "adjusting" ? "حدثًا معدلًا — تسوية القوائم المالية" : "حدثًا غير معدل — الإفصاح عن طبيعته وأثره المالي التقديري"}`,
          "حدثًا غير معدل في كل الأحوال — دون إجراء",
          "خطأ يستلزم إعادة عرض العام السابق",
          "مسألة استمرارية بحكم التعريف",
        ],
        answerIndex: 0,
        explanation: "ISA 560: conditions existing at the reporting date → adjusting; conditions arising after → non-adjusting but disclosed if material.",
        explanationAr: "معيار ISA 560: الظروف القائمة بتاريخ التقرير معدلة، والناشئة بعده غير معدلة مع الإفصاح إن كانت جوهرية.",
      }
    },
  },
  {
    tag: "ISA 570", area: "auditing", difficulty: 3, fams: [...AUDIT_FAMS],
    make: (_r, e) => ({
      stem: `${e.en}'s management disclosed a material uncertainty over going concern and the disclosures are adequate. The auditor should issue:`,
      stemAr: `أفصحت إدارة ${e.ar} عن عدم يقين جوهري حول الاستمرارية والإفصاحات كافية. يصدر المراجع:`,
      options: [
        "An unmodified opinion with a Material Uncertainty Related to Going Concern paragraph",
        "An adverse opinion",
        "A disclaimer of opinion",
        "A qualified opinion with an Other Matter paragraph",
      ],
      optionsAr: [
        "رأيًا غير معدل مع فقرة عدم اليقين الجوهري المرتبط بالاستمرارية",
        "رأيًا معارضًا",
        "امتناعًا عن الرأي",
        "رأيًا مشروطًا مع فقرة شأن آخر",
      ],
      answerIndex: 0,
      explanation: "ISA 570: adequate disclosure of a material uncertainty → unmodified opinion + MURGC paragraph (not EoM, not a modification).",
      explanationAr: "معيار ISA 570: الإفصاح الكافٍ عن عدم اليقين الجوهري يعني رأيًا غير معدل مع فقرة MURGC، وليس تعديلًا.",
    }),
  },
  {
    tag: "ISA 570", area: "auditing", difficulty: 2, fams: ["AA"],
    make: (_r, e) => ({
      stem: `Which indicator would MOST raise the auditor's concern about ${e.en} as a going concern?`,
      stemAr: `أي مؤشر يثير أكثر قلق المراجع بشأن استمرارية ${e.ar}؟`,
      options: [
        "Loan principal in default and the bank refusing a waiver",
        "A one-month dip in gross margin",
        "A new competitor entering the market",
        "The CFO taking annual leave",
      ],
      optionsAr: [
        "تعثر في أصل القرض ورفض البنك الإعفاء",
        "انخفاض شهري واحد في هامش الربح الإجمالي",
        "دخول منافس جديد للسوق",
        "ذهاب المدير المالي في إجازة سنوية",
      ],
      answerIndex: 0,
      explanation: "ISA 570 Appendix 2: default on borrowings and withdrawn lender support are classic financial indicators of going-concern doubt.",
      explanationAr: "ملحق 2 من ISA 570: التعثر في الاقتراض وسحب الدعم المالي مؤشرات مالية كلاسيكية على شك الاستمرارية.",
    }),
  },
  {
    tag: "ISA 580", area: "auditing", difficulty: 2, fams: [...AUDIT_FAMS],
    make: (_r, e) => ({
      stem: `The written representations for ${e.en} should be dated:`,
      stemAr: `تؤرخ تمثيلات الإدارة المكتوبة لـ ${e.ar} في:`,
      options: [
        "As near as practicable to, but not after, the date of the auditor's report",
        "On the last day of the financial year",
        "On the date the engagement letter was signed",
        "On the date the board approves the dividend",
      ],
      optionsAr: [
        "أقرب ما يكون عمليًا لتاريخ تقرير المراجعة ولا يتجاوزه",
        "آخر يوم من السنة المالية",
        "تاريخ توقيع خطاب الارتباط",
        "تاريخ موافقة المجلس على التوزيعات",
      ],
      answerIndex: 0,
      explanation: "ISA 580: representations cover the whole period up to the audit report date and are signed by those with responsibility and knowledge.",
      explanationAr: "معيار ISA 580: تغطي التمثيلات الفترة حتى تاريخ التقرير ويوقعها من يتحمل المسؤولية والعلم.",
    }),
  },
  {
    tag: "ISA 600", area: "auditing", difficulty: 3, fams: [...AA_HARD],
    make: (_r, e) => ({
      stem: `In the group audit of ${e.en}, the component auditor is located in another jurisdiction. The group engagement team should:`,
      stemAr: `في مراجعة مجموعة ${e.ar}، يقع مراجع المكوِّن في نطاق قضائي آخر. على فريق مراجعة المجموعة أن:`,
      options: [
        "Obtain an understanding of the component auditor's work and determine its adequacy for the group context",
        "Automatically accept the component auditor's work without any evaluation",
        "Refuse to accept responsibility and resign",
        "Re-audit every component in full",
      ],
      optionsAr: [
        "فهم عمل مراجع المكوِّن وتحديد كفايته لسياق المجموعة",
        "قبول عمل مراجع المكوِّن تلقائيًا دون تقييم",
        "رفض تحمل المسؤولية والاستقالة",
        "إعادة مراجعة كل مكوِّن بالكامل",
      ],
      answerIndex: 0,
      explanation: "ISA 600 (revised): the group team determines its involvement in component work, communicates clearly, and evaluates whether the component auditor's work is adequate.",
      explanationAr: "معيار ISA 600 المعدل: يحدد فريق المجموعة مشاركته في عمل المكوِّنات ويقيّم كفاية عمل مراجع المكوِّن.",
    }),
  },
  {
    tag: "ISA 610", area: "auditing", difficulty: 2, fams: ["AA"],
    make: (_r, e) => ({
      stem: `Internal audit at ${e.en} has tested controls over purchasing. The external auditor's BEST use of this work under ISA 610 is:`,
      stemAr: `اختبرت المراجعة الداخلية في ${e.ar} رقابة المشتريات. أفضل استخدام خارجي لهذا العمل وفق ISA 610 هو:`,
      options: [
        "Evaluate and test the internal auditors' objectivity and competence before placing any reliance",
        "Rely on it fully without evaluation",
        "Treat the internal auditors as part of the external team",
        "Ignore it entirely — internal audit work is unusable",
      ],
      optionsAr: [
        "تقييم واختبار موضوعية المراجعين الداخليين وكفاءتهم قبل أي اعتماد",
        "الاعتماد عليه كليًا دون تقييم",
        "اعتبار المراجعين الداخليين جزءًا من الفريق الخارجي",
        "تجاهله تمامًا — فعمل المراجعة الداخلية غير قابل للاستخدام",
      ],
      answerIndex: 0,
      explanation: "ISA 610: reliance is possible after evaluating objectivity, competence and systematic discipline, AND testing/re-performance where needed.",
      explanationAr: "معيار ISA 610: يجوز الاعتماد بعد تقييم الموضوعية والكفاءة والانضباط المنهجي مع الاختبار أو إعادة التنفيذ عند الحاجة.",
    }),
  },
  {
    tag: "ISA 620", area: "auditing", difficulty: 2, fams: [...AA_HARD],
    make: (_r, e) => ({
      stem: `The auditor of ${e.en} plans to use a valuation expert for a complex PPE fair-value measurement. Under ISA 620 the auditor must:`,
      stemAr: `ينوي مراجع ${e.ar} استخدام خبير تقييم لقياس عادل معقد لأصول ثابتة. وفق ISA 620 يجب على المراجع:`,
      options: [
        "Evaluate the expert's competence, capabilities and objectivity, and assess the adequacy of the work",
        "Delegate the whole PPE conclusion to the expert",
        "Have the expert sign the audit report",
        "Avoid experts because they reduce auditor independence",
      ],
      optionsAr: [
        "تقييم كفاءة الخبير وقدراته وموضوعيته وتقييم كفاية عمله",
        "تفويض الختام الخاص بالأصول الثابتة كله للخبير",
        "تكليف الخبير بتوقيع تقرير المراجعة",
        "تجنب الخبراء لأنهم يقللون استقلالية المراجع",
      ],
      answerIndex: 0,
      explanation: "ISA 620: the auditor uses the work of an expert but remains responsible for the audit opinion — evaluate competence, capability, objectivity and adequacy.",
      explanationAr: "معيار ISA 620: يستعين المراجع بالخبير ويبقى مسؤولًا عن الرأي — بالتقييم والكفاءة والموضوعية وكفاية العمل.",
    }),
  },
  {
    tag: "ISA 700", area: "auditing", difficulty: 1, fams: [...AUDIT_FAMS],
    make: (_r, e) => ({
      stem: `The elements of an unmodified audit report on ${e.en}'s financial statements do NOT include:`,
      stemAr: `عناصر تقرير المراجعة غير المعدل وفق ISA 700 لا تشمل:`,
      options: [
        "A detailed list of every audit procedure performed",
        "An opinion on whether the financial statements are materially misstated",
        "Identification of the applicable framework",
        "A statement that the audit provides reasonable assurance",
      ],
      optionsAr: [
        "قائمة تفصيلية بكل إجراء مراجعة تم",
        "رأيًا في خلو القوائم المالية من التحريف الجوهري",
        "تحديد إطار التقرير المنطبق",
        "عبارة أن المراجعة تقدم تأكيدًا معقولًا",
      ],
      answerIndex: 0,
      explanation: "ISA 700 report elements: title, addressee, opinion, basis for opinion, going-concern/other responsibilities, auditor responsibilities, signature — not a procedures list.",
      explanationAr: "عناصر ISA 700: العنوان والمخاطب والرأي وأساسه ومسؤوليات المراجع والتوقيع — وليست قائمة إجراءات.",
    }),
  },
  {
    tag: "ISA 701", area: "auditing", difficulty: 3, fams: [...AA_HARD],
    make: (_r, e) => ({
      stem: `Which matter should MOST likely be a Key Audit Matter for listed ${e.en}?`,
      stemAr: `أي مسألة يرجح أكثر أن تكون مسألة مراجعة جوهرية لـ ${e.ar} المدرجة؟`,
      options: [
        "A matter that required significant auditor attention and was communicated to those charged with governance",
        "Any question the client's CFO asked the team",
        "The auditor's staffing budget for next year",
        "Matters resolved by routine procedural generation",
      ],
      optionsAr: [
        "مسألة استلزمت عناية مراجع كبيرة وأبلغت لأصحاب الحوكمة",
        "أي سؤال طرحه المدير المالي على الفريق",
        "موازنة التوظيف للعام القادم",
        "مسائل حلت بإجراءات روتينية",
      ],
      answerIndex: 0,
      explanation: "ISA 701: KAMs are selected from matters communicated to TCWG that required significant auditor attention — most significant risks and areas of judgement typically qualify.",
      explanationAr: "معيار ISA 701: تُختار المسائل الجوهرية مما أبلغ لأصحاب الحوكمة واستلزم عناية كبيرة — وعادة أهم المخاطر ومناطق الحكم.",
    }),
  },
  {
    tag: "ISA 705", area: "auditing", difficulty: 2, fams: [...AUDIT_FAMS],
    make: (r, e) => {
      const scenario = r.pick([
        ["qualified", "Material but NOT pervasive misstatement found; management refuses to adjust", "تحريف جوهري غير منتشر ورفضت الإدارة التصحيح"],
        ["adverse", "Material AND pervasive misstatement of revenue", "تحريف جوهري ومنتشر للإيرادات"],
        ["disclaimer", "Unable to obtain sufficient appropriate evidence over inventory, and the effect is pervasive", "تعذر الحصول على أدلة كافية عن المخزون والأثر منتشر"],
      ])
      return {
        stem: `In the audit of ${e.en}: ${scenario[1]}. The appropriate opinion is:`,
        stemAr: `في مراجعة ${e.ar}: ${scenario[2]}. الرأي المناسب هو:`,
        options: [
          scenario[0] === "qualified" ? "Qualified opinion" : scenario[0] === "adverse" ? "Adverse opinion" : "Disclaimer of opinion",
          scenario[0] === "qualified" ? "Adverse opinion" : scenario[0] === "adverse" ? "Disclaimer of opinion" : "Qualified opinion",
          "Unmodified opinion with an EoM paragraph",
          "Unmodified opinion in all cases",
        ],
        optionsAr: [
          scenario[0] === "qualified" ? "رأي مشروط" : scenario[0] === "adverse" ? "رأي معارض" : "امتناع عن الرأي",
          scenario[0] === "qualified" ? "رأي معارض" : scenario[0] === "adverse" ? "امتناع عن الرأي" : "رأي مشروط",
          "رأي غير معدل مع فقرة تركيز انتباه",
          "رأي غير معدل في كل الأحوال",
        ],
        answerIndex: 0,
        explanation: "ISA 705 ladder: misstatement material-but-not-pervasive → qualified; material-and-pervasive → adverse; insufficient evidence, pervasive → disclaimer.",
        explanationAr: "سلّم ISA 705: تحريف جوهري غير منتشر → مشروط، جوهري ومنتشر → معارض، نقص أدلة منتشر → امتناع.",
      }
    },
  },
  {
    tag: "ISA 706", area: "auditing", difficulty: 2, fams: ["AA"],
    make: (_r, e) => ({
      stem: `An Emphasis of Matter paragraph in the report on ${e.en}'s statements is used to:`,
      stemAr: `تستخدم فقرة تركيز الانتباه في تقرير ${e.ar} من أجل:`,
      options: [
        "Draw attention to a matter appropriately presented or disclosed that is fundamental to users' understanding",
        "Quantify a misstatement for the readers",
        "Rectify an inadequate going-concern disclosure",
        "Report a disagreement with management",
      ],
      optionsAr: [
        "لفت النظر لمسألة معروضة أو مفصح عنها بشكل سليم وهي جوهرية لفهم المستخدمين",
        "قياس التحريف جوهريًا للقراء",
        "تصحيح إفصاح استمرارية ناقص",
        "الإبلاغ عن خلاف مع الإدارة",
      ],
      answerIndex: 0,
      explanation: "ISA 706: EoM highlights a matter already properly disclosed that is fundamental to understanding; it never substitutes for a modification.",
      explanationAr: "معيار ISA 706: تبرز الفقرة مسألة مفصح عنها سليمًا وجوهرية للفهم، ولا تغني عن تعديل الرأي.",
    }),
  },
  {
    tag: "ISA 720", area: "auditing", difficulty: 3, fams: ["AA", "AAA"],
    make: (_r, e) => ({
      stem: `The annual report of ${e.en} contains an "Other Information" section with figures inconsistent with the audited statements. The auditor should FIRST:`,
      stemAr: `يتضمن التقرير السنوي لـ ${e.ar} قسم "معلومات أخرى" بأرقام لا تتسق مع القوائم المراجعة. يبدأ المراجع بـ:`,
      options: [
        "Discuss the matter with management and request correction",
        "Modify the audit opinion",
        "Publish a press release",
        "Report to the tax authority",
      ],
      optionsAr: [
        "مناقشة الأمر مع الإدارة وطلب التصحيح",
        "تعديل رأي المراجعة",
        "إصدار بيان صحفي",
        "الإبلاغ لمصلحة الضرائب",
      ],
      answerIndex: 0,
      explanation: "ISA 720 (revised): on apparent material inconsistency, first discuss with management and request correction; escalation (incl. reporting obligations) follows only if uncorrected.",
      explanationAr: "معيار ISA 720 المعدل: عند عدم اتساق ظاهر الجوهرية، يناقش المراجع الإدارة أولًا ويطلب التصحيح، ثم التصعيد إن لم يصحح.",
    }),
  },
  {
    tag: "ISQM 1", area: "auditing", difficulty: 2, fams: [...AA_HARD],
    make: (_r, e) => ({
      stem: `Under ISQM 1, the quality management system of the firm auditing ${e.en} must include:`,
      stemAr: `وفق ISQM 1، يجب أن يشمل نظام إدارة الجودة لمكتب مراجعة ${e.ar}:`,
      options: [
        "Quality objectives, a risk assessment process, and responses covering the eight components",
        "A fee-collection dashboard only",
        "One annual partner meeting",
        "Client satisfaction surveys only",
      ],
      optionsAr: [
        "أهداف جودة وعملية تقييم مخاطر واستجابات تغطي المكونات الثمانية",
        "لوحة تحصيل أتعاب فقط",
        "اجتماع شركاء سنوي واحد",
        "استبيانات رضا العملاء فقط",
      ],
      answerIndex: 0,
      explanation: "ISQM 1: firms establish quality objectives, assess risks, and design responses across governance, acceptance, engagement performance, resources, information, monitoring, etc.",
      explanationAr: "معيار ISQM 1: يحدد المكتب أهداف الجودة ويقيّم المخاطر ويصمم استجابات عبر الحوكمة والقبول والأداء والموارد والمعلومة والمراقبة.",
    }),
  },
  {
    tag: "IESBA", area: "ethics", difficulty: 2, fams: [...AUDIT_FAMS],
    make: (r, e) => {
      const [threat, descEn, descAr] = r.pick([
        ["self-interest", "the firm's audit partner owns shares in the client", "يمتلك شريك المراجعة أسهمًا في العميل"],
        ["self-review", "the firm reviews work it previously prepared as adviser", "يراجع المكتب عملًا أعده سابقًا كمستشار"],
        ["familiarity", "the engagement partner has served the client for 12 years", "شريك الارتباط يخدم العميل منذ 12 عامًا"],
        ["intimidation", "the client threatens to switch auditors over a proposed adjustment", "يهدد العميل بتغيير المراجع بسبب تسوية مقترحة"],
      ])
      return {
        stem: `While auditing ${e.en}, the team notes that ${descEn}. This is closest to which IESBA threat?`,
        stemAr: `أثناء مراجعة ${e.ar} يلاحظ الفريق أن ${descAr}. هذا أقرب إلى تهديد أي نوع وفق ميثاق IESBA؟`,
        options: [threat, "advocacy", "objectivity", "professional scepticism"],
        optionsAr: [
          threat === "self-interest" ? "المصلحة الذاتية" : threat === "self-review" ? "المراجعة الذاتية" : threat === "familiarity" ? "الألفة" : "الترهيب",
          "الترجيح",
          "الموضوعية",
          "الشك المهني",
        ],
        answerIndex: 0,
        explanation: "The five threats: self-interest, self-review, advocacy, familiarity, intimidation — evaluate significance and apply safeguards or decline.",
        explanationAr: "التهديدات الخمسة: المصلحة الذاتية والمراجعة الذاتية والترجيح والألفة والترهيب — يقيم الأهمية وتطبق الحواجز أو يعتذر.",
      }
    },
  },
  {
    tag: "IESBA", area: "ethics", difficulty: 2, fams: [...AA_HARD],
    make: (_r, e) => ({
      stem: `The audit fee from ${e.en} represents 65% of the small firm's total fee income. Which threat does this create, and what is the typical safeguard?`,
      stemAr: `تمثل أتعاب ${e.ar} 65% من إجمالي دخل المكتب الصغير. أي تهديد ينشأ وما الحاجز المعتاد؟`,
      options: [
        "Self-interest (fee dependence) — reduce dependence or include an EQCR before accepting continuation",
        "Advocacy — issue a joint press statement",
        "Intimidation — increase the fee immediately",
        "No threat exists for small firms",
      ],
      optionsAr: [
        "مصلحة ذاتية (اعتماد على الأتعاب) — تقليل الاعتماد أو مراجع جودة مستقل قبل الاستمرار",
        "ترجيح — إصدار بيان صحفي مشترك",
        "ترهيب — رفع الأتعاب فورًا",
        "لا تهديد للمكاتب الصغيرة",
      ],
      answerIndex: 0,
        explanation: "Fee concentration is a classic self-interest threat; responses include reducing the dependency or an objective quality reviewer before re-acceptance.",
        explanationAr: "تركز الأتعاب تهديد مصلحة ذاتية كلاسيكي؛ ومن الاستجابات تقليل الاعتماد أو مراجع جودة موضوعي قبل إعادة القبول.",
    }),
  },
  {
    tag: "ISA 200", area: "auditing", difficulty: 1, fams: ["AA"],
    make: (r, e) => {
      const ir = r.pick([0.5, 0.6, 0.8])
      const cr = r.pick([0.5, 0.6, 0.8])
      const ar = r.round(ir * cr * 0.1, 3)
      const { options, optionsAr, answerIndex } = numericOptions(
        ar, [r.round(ir * cr, 3), r.round(ir * cr * 0.25, 3), r.round((ir + cr) * 0.1, 3)],
        (n) => `${(Math.round(n * 1000) / 1000).toFixed(3)}`,
        (n) => `${(Math.round(n * 1000) / 1000).toFixed(3)}`
      )
      return {
        stem: `For an assertion at ${e.en}, inherent risk is assessed at ${ir} and control risk at ${cr}; the auditor accepts a detection risk factor of 0.10. Audit risk (IR × CR × DR) is:`,
        stemAr: `لتأكيد لدى ${e.ar}: الخطر المتأصل ${ir} وخطر الرقابة ${cr}، ويقبل المراجع خطر اكتشاف 0.10. خطر المراجعة يساوي:`,
        options, optionsAr, answerIndex,
        explanation: `Audit risk = ${ir} × ${cr} × 0.10 = ${ar.toFixed(3)} — the model shows how higher assessed risks force more extensive procedures.`,
        explanationAr: `خطر المراجعة = ${ir} × ${cr} × 0.10 = ${ar.toFixed(3)} — يوضح النموذج كيف يفرض ارتفاع المخاطر المقيَّمة إجراءات أوسع.`,
      }
    },
  },
]
