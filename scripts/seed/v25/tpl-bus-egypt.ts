/** v25 business cluster — BT (governance, stakeholders, leadership, tech,
 *  economics, marketing) plus SBL/APM strategy items; and the Egypt cluster
 *  for the SOE paper (EAS/ESA alignment, FRA, syndicate, public sector). */
import { type Template, egp, fmt, mcq, numericOptions } from "./gen-lib"

export const BUS_TEMPLATES: Template[] = [
  {
    tag: "Governance", area: "accounting", difficulty: 1, fams: ["BT", "SBL"],
    make: (_r, e) => ({
      stem: `Corporate governance at ${e.en} is BEST described as:`,
      stemAr: `تصف الحوكمة في ${e.ar} بأنها:`,
      options: [
        "The system by which companies are directed and controlled",
        "The process of producing financial statements",
        "A company's marketing strategy",
        "The internal office layout",
      ],
      optionsAr: [
        "نظام توجيه الشركات وضبطها",
        "عملية إعداد القوائم المالية",
        "استراتيجية التسويق",
        "تخطيط المكاتب الداخلي",
      ],
      answerIndex: 0,
      explanation: "Cadbury definition: governance is the system by which companies are directed and controlled — roles of the board, management and shareholders.",
      explanationAr: "تعريف كادبوري: نظام التوجيه والضبط — أدوار المجلس والإدارة والمساهمين.",
    }),
  },
  {
    tag: "Stakeholders", area: "accounting", difficulty: 1, fams: ["BT", "SBL", "APM"],
    make: (r, e) => {
      const [who, pw, pwAr] = r.pick([
        ["government", "legal power to regulate and fine", "سلطة قانونية للتنظيم والغرامة"],
        ["employees", "collective power through unions and critical skills", "قوة جماعية عبر النقابات والمهارات الحرجة"],
        ["suppliers", "powerful when few alternatives exist", "قوية عند قلة البدائل"],
        ["shareholders", "voting power to appoint and remove directors", "قوة التصويت في تعيين المديرين وعزلهم"],
      ])
      return {
        stem: `In Mendelow's matrix, ${who} have HIGH power over ${e.en} — described as ${pw}. Management priority:`,
        stemAr: `في مصفوفة مينديلو، يتمتع ${who === "government" ? "الجهات الحكومية" : who === "employees" ? "الموظفون" : who === "suppliers" ? "الموردون" : "المساهمون"} بقدرة عالية على ${e.ar} — ${pwAr}. أولوية الإدارة:`,
        options: [
          "Keep satisfied (key player where interest is also high)",
          "Minimal effort",
          "Keep informed only",
          "Ignore entirely",
        ],
        optionsAr: [
          "الإبقاء على الرضا (لاعب أساسي إذا كان الاهتمام مرتفعًا أيضًا)",
          "أدنى جهد",
          "الإبقاء على الإعلام فقط",
          "التجاهل تمامًا",
        ],
        answerIndex: 0,
        explanation: "Mendelow: high power + high interest = key players (keep satisfied/close); high power + low interest = keep satisfied; low power + high interest = keep informed.",
        explanationAr: "مينديلو: قدرة عالية واهتمام عالٍ = لاعبون أساسيون؛ وقدرة عالية واهتمام منخفض = إبقاء الرضا.",
      }
    },
  },
  {
    tag: "Strategy", area: "accounting", difficulty: 2, fams: ["SBL", "APM"],
    make: (r, e) => {
      const [force, ex, exAr] = r.pick([
        ["supplier power", "only two certified suppliers exist for a key input", "يوجد موردان معتمدان فقط لمدخل جوهري"],
        ["buyer power", "customers buy in bulk and switch cheaply", "يشتري العملاء بكميات وينتقلون بتكلفة زهيدة"],
        ["threat of substitutes", "a cheaper technology meets the same need", "تقنية أرخص تلبي نفس الحاجة"],
        ["competitive rivalry", "many equally-sized competitors in a slow-growth market", "منافسون متكافئون في سوق بطيء النمو"],
      ])
      return {
        stem: `In Porter's five forces analysis of ${e.en}: ${ex}. This raises:`,
        stemAr: `في تحليل بورتر الخمس قوى لـ ${e.ar}: ${exAr}. هذا يرفع:`,
        ...mcq(
          force === "supplier power" ? ["Supplier power", "قوة الموردين"]
            : force === "buyer power" ? ["Buyer power", "قوة المشترين"]
            : force === "threat of substitutes" ? ["The threat of substitutes", "تهديد البدائل"]
            : ["Competitive rivalry", "حد المنافسة"],
          [
            ["Supplier power", "قوة الموردين"],
            ["Buyer power", "قوة المشترين"],
            ["The threat of new entrants", "تهديد الداخلين الجدد"],
            ["Competitive rivalry", "حد المنافسة"],
            ["The threat of substitutes", "تهديد البدائل"],
          ]
        ),
        answerIndex: 0,
        explanation: "Five forces: supplier power, buyer power, new entrants, substitutes, rivalry — stronger forces mean lower industry attractiveness.",
        explanationAr: "القوى الخمس تحدد جاذبية الصناعة؛ وكلما قويت انخفضت الجاذبية.",
      }
    },
  },
  {
    tag: "Strategy", area: "accounting", difficulty: 2, fams: ["SBL", "APM"],
    make: (r, e) => {
      const [s, o, so, soAr] = r.pick([
        ["market penetration", "sell more of existing products to existing markets", "بيع المزيد من المنتجات الحالية في الأسواق الحالية"],
        ["product development", "new products for existing markets", "منتجات جديدة للأسواق الحالية"],
        ["market development", "existing products in new markets", "المنتجات الحالية في أسواق جديدة"],
        ["diversification", "new products in new markets", "منتجات جديدة في أسواق جديدة"],
      ])
      return {
        stem: `In Ansoff's matrix, ${e.en} pursuing growth by choosing to ${o} is following:`,
        stemAr: `في مصفوفة أنسوف، تنتهج ${e.ar} النمو عبر ${soAr}. هذا:`,
        ...mcq(
          s === "market penetration" ? ["Market penetration", "تعميق السوق"]
            : s === "product development" ? ["Product development", "تطوير المنتج"]
            : s === "market development" ? ["Market development", "تطوير السوق"]
            : ["Diversification", "التنويع"],
          [
            ["Market penetration", "تعميق السوق"],
            ["Product development", "تطوير المنتج"],
            ["Market development", "تطوير السوق"],
            ["Diversification", "التنويع"],
          ]
        ),
        answerIndex: 0,
        explanation: "Ansoff: penetration (existing/existing), product development (new/existing), market development (existing/new), diversification (new/new — riskiest).",
        explanationAr: "أنسوف: التعميق وتطوير المنتج والسوق والتنويع — والأخير أعلاها مخاطرة.",
      }
    },
  },
  {
    tag: "Leadership", area: "accounting", difficulty: 1, fams: ["BT", "SBL"],
    make: (r, e) => {
      const [style, ex, exAr] = r.pick([
        ["autocratic", "decides alone and instructs", "يقرر وحده ويأمر"],
        ["democratic", "consults the team before deciding", "يشاور الفريق قبل القرار"],
        ["laissez-faire", "lets the team self-manage with minimal interference", "يترك الفريق يدير نفسه بتدخل أدنى"],
      ])
      return {
        stem: `A department head at ${e.en} who ${ex} shows which leadership style?`,
        stemAr: `رئيس قسم في ${e.ar} ${exAr}. هذا أسلوب:`,
        ...mcq(
          style === "autocratic" ? ["Autocratic", "تسلطي"]
            : style === "democratic" ? ["Democratic", "ديمقراطي"]
            : ["Laissez-faire", "متفلت"],
          [
            ["Autocratic", "تسلطي"],
            ["Democratic", "ديمقراطي"],
            ["Laissez-faire", "متفلت"],
            ["Paternalistic", "أبوي"],
          ]
        ),
        answerIndex: 0,
        explanation: "Styles (Lewin): autocratic (fast, low buy-in), democratic (buy-in, slower), laissez-faire (motivates experts, risks drift).",
        explanationAr: "الأنماط: التسلطي أسرع وأقل قبولًا، والديمقراطي أعلى قبولًا، والمتفلت مناسب للخبراء.",
      }
    },
  },
  {
    tag: "Teams", area: "accounting", difficulty: 2, fams: ["BT"],
    make: (_r, e) => ({
      stem: `In Tuckman's stages, a newly-formed ${e.en} project team politely testing boundaries is at the:`,
      stemAr: `في مراحل توكمان، فريق مشروع حديث النشأة في ${e.ar} يختبر الحدود بلطف يكون في مرحلة:`,
      options: ["Forming stage", "Storming stage", "Norming stage", "Performing stage"],
      optionsAr: ["التشكيل", "الصدام", "التقييس", "الأداء"],
      answerIndex: 0,
      explanation: "Forming → Storming → Norming → Performing (→ Adjourning): politeness marks forming; open conflict marks storming.",
      explanationAr: "التشكيل فالصدام فالتقييس فالأداء: اللطف في التشكيل والصراع العلني في الصدام.",
    }),
  },
  {
    tag: "Economics", area: "accounting", difficulty: 2, fams: ["BT"],
    make: (r, e) => {
      const [policy, ex, exAr] = r.pick([
        ["raise interest rates", "curb inflation", "كبح التضخم"],
        ["cut interest rates", "stimulate investment", "تحفيز الاستثمار"],
        ["raise taxes", "reduce aggregate demand", "خفض الطلب الكلي"],
        ["increase government spending", "boost demand and employment", "دعم الطلب والتوظيف"],
      ])
      return {
        stem: `The central bank/government decides to ${policy} — its main aim is to ${ex}. ${e.en} should expect the conventional effect:`,
        stemAr: `تقرر الحكومة/البنك المركزي ${policy === "raise interest rates" ? "رفع أسعار الفائدة" : policy === "cut interest rates" ? "خفض الفائدة" : policy === "raise taxes" ? "رفع الضرائب" : "زيادة الإنفاق الحكومي"} — والغرض ${exAr}. ينبغي لـ ${e.ar} توقع الأثر التقليدي:`,
        options: [
          policy.includes("interest")
            ? policy === "raise interest rates"
              ? "Higher borrowing costs, weaker demand, stronger currency"
              : "Cheaper credit, higher investment and demand"
            : policy === "raise taxes"
              ? "Lower disposable income and demand"
              : "Higher demand and possible inflation pressure",
          "No macroeconomic effect at all",
          "Immediate stock-out of inventory",
          "Automatic removal of all competition",
        ],
        optionsAr: [
          policy.includes("interest")
            ? policy === "raise interest rates"
              ? "ارتفاع كلفة الاقتراض وتراجع الطلب وقوة العملة"
              : "ائتمان أرخص واستثمار وطلب أعلى"
            : policy === "raise taxes"
              ? "انخفاض الدخل المتاح والطلب"
              : "طلب أعلى وضغط تضخمي محتمل",
          "لا أثر اقتصادي كلي",
          "نفاد المخزون فورًا",
          "زوال المنافسة تلقائيًا",
        ],
        answerIndex: 0,
        explanation: "Monetary/fiscal tools: rates hit borrowing costs and the currency; taxes and spending move disposable income and aggregate demand.",
        explanationAr: "أدوات النقد والمالية: الفائدة على الاقتراض والعملة، والضرائب والإنفاق على الدخل المتاح والطلب.",
      }
    },
  },
  {
    tag: "Marketing", area: "accounting", difficulty: 2, fams: ["BT"],
    make: (_r, e) => ({
      stem: `In the marketing mix (7Ps) of a professional-services firm like ${e.en}, the element MOST emphasised for services is:`,
      stemAr: `في المزيج التسويقي (7Ps) لمكتب خدمات مهنية مثل ${e.ar}، العنصر الأبرز للخدمات:`,
      options: [
        "People, process and physical evidence — service quality depends on the deliverers",
        "Price only",
        "Place (distribution depots)",
        "Promotion on television",
      ],
      optionsAr: [
        "الأشخاص والعمليات والدليل المادي — فجودة الخدمة من مقدميها",
        "السعر فقط",
        "المكان (المخازن)",
        "الترويج التلفزيوني",
      ],
      answerIndex: 0,
      explanation: "Services marketing adds People, Process, Physical Evidence to the classic 4Ps — inseparability makes people the core differentiator.",
      explanationAr: "يضيف تسويق الخدمات الأشخاص والعمليات والدليل المادي، والأشخاص جوهر التميز.",
    }),
  },
  {
    tag: "Technology", area: "accounting", difficulty: 2, fams: ["BT", "SBL"],
    make: (r, e) => {
      const [risk, ex, exAr] = r.pick([
        ["hacking", "unauthorised access to systems", "الوصول غير المصرح للأنظمة"],
        ["data loss", "corruption or deletion of records", "تلف السجلات أو فقدانها"],
        ["phishing", "deceptive emails harvesting credentials", "رسائل خادعة تسرق بيانات الدخول"],
      ])
      return {
        stem: `An attack on ${e.en} described as ${ex} is a cyber risk of:`,
        stemAr: `هجوم على ${e.ar} يوصف بأنه ${exAr} يمثل خطر:`,
        ...mcq(
          risk === "hacking" ? ["Hacking", "الاختراق"]
            : risk === "data loss" ? ["Data loss", "فقدان البيانات"]
            : ["Phishing", "التصيد"],
          [
            ["Hacking", "الاختراق"],
            ["Data loss", "فقدان البيانات"],
            ["Phishing", "التصيد"],
            ["Denial of service", "حرمان الخدمة"],
          ]
        ),
        answerIndex: 0,
        explanation: "Cyber risks: hacking (unauthorised access), phishing (social engineering), data loss/corruption; controls include firewalls, MFA, backups, staff training.",
        explanationAr: "مخاطر السيبرانية: الاختراق والتصيد وفقدان البيانات؛ وتضبط بالجدران النارية والمصادقة المتعددة والنسخ الاحتياطي والتدريب.",
      }
    },
  },
  {
    tag: "Big data", area: "accounting", difficulty: 2, fams: ["BT", "SBL", "APM"],
    make: (_r, e) => ({
      stem: `Which is a BIG DATA application in the finance function of ${e.en}?`,
      stemAr: `أي مما يلي تطبيق للبيانات الضخمة في وظيفة التمويل لدى ${e.ar}؟`,
      options: [
        "Real-time analytics over the full transaction population to flag anomalies",
        "Testing a 20-item manual sample once a year",
        "Filing paper vouchers in a cabinet",
        "Guessing trends without data",
      ],
      optionsAr: [
        "تحليلات فورية على كامل مجتمع العمليات لرصد الشواذ",
        "اختبار عينة يدوية من 20 بندًا سنويًا",
        "أرشفة المستندات الورقية",
        "تخمين الاتجاهات دون بيانات",
      ],
      answerIndex: 0,
      explanation: "Big data analytics examines 100% of transactions continuously (vs sampling), enabling continuous auditing and predictive insight.",
      explanationAr: "تفحص تحليلات البيانات الضخمة كامل العمليات باستمرار بخلاف المعاينة، وتمكن المراجعة المستمرة.",
    }),
  },
  {
    tag: "Change", area: "accounting", difficulty: 2, fams: ["SBL"],
    make: (_r, e) => ({
      stem: `Implementing a new ERP at ${e.en} meets staff resistance. Which action best supports the change?`,
      stemAr: `يواجه تطبيق نظام ERP جديد في ${e.ar} مقاومة الموظفين. أي إجراء يدعم التغيير أفضل؟`,
      options: [
        "Communicate the vision, involve users early and train continuously",
        "Announce the change on go-live day",
        "Threaten dismissals",
        "Cancel the project",
      ],
      optionsAr: [
        "إيصال الرؤية وإشراك المستخدمين مبكرًا والتدريب المستمر",
        "إعلان التغيير يوم التشغيل",
        "التهديد بالفصل",
        "إلغاء المشروع",
      ],
      answerIndex: 0,
      explanation: "Kotter/Lewin: urgency + vision + early wins + empowerment; communication and involvement lower resistance far better than coercion.",
      explanationAr: "كوتر/لوين: الإلحاح والرؤية والمكاسب المبكرة والتمكين تخفض المقاومة أفضل من الإكراه.",
    }),
  },
  {
    tag: "Quality", area: "accounting", difficulty: 2, fams: ["APM", "SBL"],
    make: (_r, e) => ({
      stem: `Under a total quality management (TQM) philosophy at ${e.en}:`,
      stemAr: `وفق فلسفة إدارة الجودة الشاملة في ${e.ar}:`,
      options: [
        "Every member of staff is responsible for quality, with continuous improvement (kaizen)",
        "Only the QC department handles defects",
        "Quality is inspected in at the end",
        "Defects are acceptable within budget",
      ],
      optionsAr: [
        "كل موظف مسؤول عن الجودة مع تحسين مستمر (كايزن)",
        "قسم الجودة وحده يتولى العيوب",
        "تضاف الجودة بالفحص في النهاية",
        "العيوب مقبولة في حدود الموازنة",
      ],
      answerIndex: 0,
      explanation: "TQM: quality is built in, everyone owns it, continuous improvement, customer focus — prevention over inspection.",
      explanationAr: "الجودة الشاملة: الجودة مبنية والجميع يملكها مع تحسين مستمر وتركيز على العميل.",
    }),
  },
  {
    tag: "Risk", area: "accounting", difficulty: 2, fams: ["SBL", "APM", "BT"],
    make: (_r, e) => ({
      stem: `In ${e.en}'s risk management process, risk appetite is BEST described as:`,
      stemAr: `في عملية إدارة المخاطر لدى ${e.ar}، توصف الشهية للمخاطر بأنها:`,
      options: [
        "The amount and type of risk the organisation is willing to pursue or retain",
        "The total of all risks that exist",
        "The insurance premium paid",
        "The auditor's assessment",
      ],
      optionsAr: [
        "مقدار ونوع المخاطر التي تقبل المنظمة السعي لها أو الاحتفاظ بها",
        "مجموع كل المخاطر القائمة",
        "قسط التأمين المدفوع",
        "تقدير المراجع",
      ],
      answerIndex: 0,
      explanation: "Risk appetite (willing) differs from risk capacity (able); responses: avoid, reduce, transfer (share), accept.",
      explanationAr: "الشهية (الرغبة) تختلف عن الطاقة (القدرة)؛ والاستجابات: تجنب وتخفيف ونقل وقبول.",
    }),
  },
  {
    tag: "Performance", area: "accounting", difficulty: 3, fams: ["APM"],
    make: (_r, e) => ({
      stem: `A divisional manager of ${e.en} delays necessary maintenance to hit this year's budget. This is an example of:`,
      stemAr: `يؤجل مدير قسم في ${e.ar} صيانة ضرورية لتحقيق موازنة العام. هذا مثال على:`,
      options: [
        "Dysfunctional behaviour caused by short-term financial targets",
        "Good cost management",
        "A balanced-scorecard benefit",
        "Risk appetite in action",
      ],
      optionsAr: [
        "سلوك خللي تسببه أهداف مالية قصيرة الأجل",
        "إدارة تكلفة جيدة",
        "ميزة بطاقة الأداء",
        "تطبيق للشهية للمخاطر",
      ],
      answerIndex: 0,
      explanation: "Short-term budget pressure drives gaming: cutting discretionary spend (maintenance, training, R&D) — balanced scorecards and NFPIs counter it.",
      explanationAr: "ضغط الموازنة قصير الأجل يدفع للتحايل بقطع المصروفات التقديرية، وتعالجه البطاقات المتوازنة والمؤشرات غير المالية.",
    }),
  },
  {
    tag: "Performance", area: "accounting", difficulty: 3, fams: ["APM"],
    make: (_r, e) => ({
      stem: `${e.en} sponsors a public hospital programme assessed under the "value for money" 3Es framework, which evaluates:`,
      stemAr: `في تقييم كيان غير ربحي كمستشفى، يقيّم إطار "القيمة مقابل المال" (3Es):`,
      options: [
        "Economy, efficiency and effectiveness",
        "Equity, entry and exit",
        "Earnings, expenses and equity",
        "Ethics, environment and economics",
      ],
      optionsAr: [
        "الاقتصاد والكفاءة والفاعلية",
        "الإنصاف والدخول والخروج",
        "الأرباح والمصروفات وحقوق الملكية",
        "الأخلاق والبيئة والاقتصاد",
      ],
      answerIndex: 0,
      explanation: "VFM 3Es: economy (inputs cheap), efficiency (output per input), effectiveness (outcomes achieved).",
      explanationAr: "المعايير الثلاثة: الاقتصاد في المدخلات والكفاءة في التحويل والفاعلية في النتائج.",
    }),
  },
  {
    tag: "Ethics", area: "ethics", difficulty: 2, fams: ["BT", "SBL", "APM"],
    make: (_r, e) => ({
      stem: `A manager at ${e.en} inflates divisional results to protect the team's bonus. The ethical issue is:`,
      stemAr: `يضخم مدير في ${e.ar} نتائج القسم لحماية مكافأة فريقه. الإشكال الأخلاقي:`,
      options: [
        "A conflict between self-interest and professional integrity (integrity/objectivity threats)",
        "Proper loyalty to the team",
        "A legal requirement",
        "Best practice in motivation",
      ],
      optionsAr: [
        "تعارض المصلحة الذاتية مع النزاهة المهنية",
        "ولاء سليم للفريق",
        "متطلب قانوني",
        "أفضل ممارسة تحفيزية",
      ],
      answerIndex: 0,
      explanation: "Fundamental principles: integrity, objectivity — misreporting for gain breaches both and embeds a culture of gaming metrics.",
      explanationAr: "المبادئ الجوهرية النزاهة والموضوعية — والتضليل للمكسب يخرقهما ويرسخ ثقافة التحايل.",
    }),
  },
  {
    tag: "Marketing", area: "accounting", difficulty: 3, fams: ["BT"],
    make: (r, e) => {
      const price = r.pick([400, 500, 600])
      const vc = r.pick([240, 300])
      const markup = Math.round(((price - vc) / vc) * 100)
      const { options, optionsAr, answerIndex } = numericOptions(
        markup, [Math.round(((price - vc) / price) * 100), 25, 75],
        (n) => `${n}%`, (n) => `${n}%`
      )
      return {
        stem: `A service of ${e.en} is priced at EGP ${price} with a variable cost of EGP ${vc}. The mark-up on cost is:`,
        stemAr: `خدمة لدى ${e.ar} سعرها ${price} جنيه ومتغيرتها ${vc} جنيه. الهامش على التكلفة:`,
        options, optionsAr, answerIndex,
        explanation: `Mark-up on cost = (price − cost) ÷ cost = (${price} − ${vc}) ÷ ${vc} = ${markup}%.`,
        explanationAr: `الهامش = (السعر − التكلفة) ÷ التكلفة = ${markup}%.`,
      }
    },
  },
  {
    tag: "Microeconomics", area: "accounting", difficulty: 1, fams: ["BT"],
    make: (_r, e) => ({
      stem: `If demand for ${e.en}'s product is price-ELASTIC, raising the price will:`,
      stemAr: `إذا كان الطلب على منتج ${e.ar} مرنًا سعريًا، فرفع السعر سوف:`,
      options: [
        "Reduce total revenue — quantity falls proportionally more",
        "Increase total revenue always",
        "Leave revenue unchanged exactly",
        "Eliminate the competition",
      ],
      optionsAr: [
        "يخفض الإيراد الكلي — إذ يهبط الكم بنسبة أكبر",
        "يرفع الإيراد الكلي دائمًا",
        "يترك الإيراد دون تغيير تام",
        "يزيل المنافسة",
      ],
      answerIndex: 0,
      explanation: "Elastic demand (PED > 1): price ↑ → revenue ↓; inelastic (PED < 1): price ↑ → revenue ↑.",
      explanationAr: "الطلب المرن: رفع السعر يخفض الإيراد، وغير المرن يرفعه.",
    }),
  },
  {
    tag: "Org design", area: "accounting", difficulty: 1, fams: ["BT"],
    make: (_r, e) => ({
      stem: `A matrix structure at ${e.en} means staff report:`,
      stemAr: `الهيكل المصفوفي في ${e.ar} يعني أن الموظف يتبع:`,
      options: [
        "To both a functional head and a project/product manager",
        "Only to the CEO",
        "To no one",
        "Only to external consultants",
      ],
      optionsAr: [
        "لرئيس وظيفي ومدير مشروع في آن",
        "للمدير التنفيذي فقط",
        "لا أحد",
        "للمستشارين الخارجيين فقط",
      ],
      answerIndex: 0,
      explanation: "Matrix: dual reporting lines (function + project); flexible but risks role conflict and power struggles.",
      explanationAr: "المصفوفة: تبعية مزدوجة؛ مرنة لكنها تنطوي على صراع أدوار محتمل.",
    }),
  },
  {
    tag: "Audit committee", area: "ethics", difficulty: 2, fams: ["BT", "SBL"],
    make: (_r, e) => ({
      stem: `Under a corporate-governance code, ${e.en}'s board should include independent non-executive directors (NEDs) mainly to:`,
      stemAr: `وفق دساتير الحوكمة، ينبغي أن يضم مجلس ${e.ar} مديرين مستقلين غير تنفيذيين أساسًا من أجل:`,
      options: [
        "Bring independent judgement and monitor executive performance",
        "Run daily operations",
        "Represent the auditor",
        "Replace the audit committee",
      ],
      optionsAr: [
        "إضفاء حكم مستقل ومراقبة أداء التنفيذيين",
        "إدارة العمليات اليومية",
        "تمثيل المراجع",
        "حل محل لجنة المراجعة",
      ],
      answerIndex: 0,
      explanation: "NEDs provide objectivity: challenge strategy, monitor management, staff key committees (audit, nomination, remuneration).",
      explanationAr: "يوفر المستقلون الموضوعية: مساءلة الاستراتيجية ومراقبة الإدارة وتشكيل اللجان الرئيسية.",
    }),
  },
  {
    tag: "Strategy", area: "accounting", difficulty: 3, fams: ["SBL"],
    make: (_r, e) => ({
      stem: `A PESTEL analysis of ${e.en} primarily covers:`,
      stemAr: `يشمل تحليل PESTEL لـ ${e.ar} بالأساس:`,
      options: [
        "Political, economic, social, technological, environmental and legal macro factors",
        "Profit, expense, sales, tax, equity and liquidity",
        "Product, economy, supplier, transport, energy, location",
        "Only internal resources",
      ],
      optionsAr: [
        "العوامل الكلية: السياسية والاقتصادية والاجتماعية والتقنية والبيئية والقانونية",
        "الأرباح والمصروفات والمبيعات والضرائب وحقوق الملكية والسيولة",
        "المنتج والاقتصاد والمورد والنقل والطاقة والموقع",
        "الموارد الداخلية فقط",
      ],
      answerIndex: 0,
      explanation: "PESTEL scans the macro environment (the 'general environment' layer of Johnson & Scholes' model) before industry (5F) and internal (VRIO) analysis.",
      explanationAr: "يفحص PESTEL البيئة الكلية قبل تحليل الصناعة والموارد الداخلية.",
    }),
  },
  {
    tag: "Budget behaviour", area: "accounting", difficulty: 2, fams: ["BT", "APM"],
    make: (_r, e) => ({
      stem: `The purpose of participative (bottom-up) budgeting at ${e.en} is to:`,
      stemAr: `غرض الموازنة التشاركية من القاعدة إلى القمة في ${e.ar}:`,
      options: [
        "Improve ownership, motivation and information quality — at the cost of targets being padded",
        "Reduce everyone's workload",
        "Eliminate the need for controls",
        "Guarantee zero bias",
      ],
      optionsAr: [
        "رفع روح الملكية والتحفيز وجودة المعلومات — مقابل تضخيم الأهداف أحيانًا",
        "تقليل أعباء العمل",
        "الاستغناء عن الرقابة",
        "ضمان انعدام التحيز",
      ],
      answerIndex: 0,
      explanation: "Participation improves buy-in and knowledge flow but invites budgetary slack; top-down is faster but less motivating.",
      explanationAr: "المشاركة تعزز القبول وتدفق المعرفة مقابل فجوة موازنة محتملة.",
    }),
  },
]

/** Egypt cluster — SOE / Egyptian practice paper templates. */
export const EGYPT_TEMPLATES: Template[] = [
  {
    tag: "Egypt ESA", area: "egypt", difficulty: 2, fams: ["SOE"],
    make: (_r, e) => ({
      stem: `The Egyptian Standards on Auditing (ESA) that govern ${e.en}'s audit, issued under PM Decree 3725/2025, are:`,
      stemAr: `معايير المراجعة المصرية الصادرة بقرار رئيس الوزراء 3725/2025 هي:`,
      options: [
        "ISA-aligned, replacing the 2008-generation framework effective for financial years beginning on/after 1 January 2027",
        "Completely unrelated to ISA",
        "Only applicable to banks",
        "Voluntary guidance with no effective date",
      ],
      optionsAr: [
        "منسجمة مع ISA وتحل محل إطار 2008 اعتبارًا من السنوات المالية التي تبدأ في 1 يناير 2027",
        "لا صلة لها بـ ISA",
        "تطبق على البنوك فقط",
        "إرشادات اختيارية دون تاريخ سريان",
      ],
      answerIndex: 0,
      explanation: "Decree 3725/2025 (Official Gazette 15 Oct 2025) issued the new ISA-aligned Egyptian framework (44 pronouncements incl. ESQM 1), effective FYs beginning 1/1/2027.",
      explanationAr: "قرار 3725/2025 أصدر الإطار الجديد المتوافق مع ISA ويعمل من السنوات المالية التي تبدأ في 2027.",
    }),
  },
  {
    tag: "Egypt FRA", area: "egypt", difficulty: 2, fams: ["SOE"],
    make: (_r, e) => ({
      stem: `${e.en} is within the mandate of the Financial Regulatory Authority (FRA). The FRA oversees the audit profession for:`,
      stemAr: "تشرف الهيئة العامة للرقابة المالية على مهنة المراجعة في:",
      options: [
        "Entities within its mandate — registering/licensing auditors and reviewing their quality",
        "All state entities including the Central Auditing Organization's files",
        "Only foreign companies",
        "No audit work at all",
      ],
      optionsAr: [
        "الكيانات الخاضعة لها — بقيد المراجعين وترخيصهم ومراجعة جودتهم",
        "كل الجهات العامة بما فيها ملفات الجهاز المركزي للمحاسبات",
        "الشركات الأجنبية فقط",
        "لا تمارس أي رقابة على المراجعة",
      ],
      answerIndex: 0,
      explanation: "Law 10/2009: FRA supervises non-bank financial sectors and registers/oversees auditors of its supervised entities; the CAO audits state entities.",
      explanationAr: "قانون 10/2009: تشرف الهيئة على القطاعات المالية غير المصرفية وقيد مراجعيها، والجهاز المركزي يراقب الجهات العامة.",
    }),
  },
  {
    tag: "Egypt CAO", area: "egypt", difficulty: 2, fams: ["SOE"],
    make: (_r, e) => ({
      stem: `State-owned enterprises like ${e.en} (public business sector) are primarily audited by:`,
      stemAr: `شركات قطاع الأعمال العام مثل ${e.ar} تراجع أساسًا من قبل:`,
      options: [
        "The Central Auditing Organization (الجهاز المركزي للمحاسبات)",
        "The tax authority only",
        "Any foreign firm without registration",
        "The stock exchange",
      ],
      optionsAr: [
        "الجهاز المركزي للمحاسبات",
        "مصلحة الضرائب فقط",
        "أي مكتب أجنبي دون قيد",
        "البورصة",
      ],
      answerIndex: 0,
      explanation: "The CAO (Central Auditing Organization) audits state entities and public business sector companies; FRA-registered auditors serve entities under FRA mandate.",
      explanationAr: "يراقب الجهاز المركزي الجهات العامة وشركات قطاع الأعمال؛ وتخدم هيئة الرقابة المالية كياناتها بمسجلين لديها.",
    }),
  },
  {
    tag: "Egypt EAS", area: "egypt", difficulty: 2, fams: ["SOE"],
    make: (_r, e) => ({
      stem: `The financial statements of ${e.en} are prepared under the Egyptian Accounting Standards issued by Decree 69/2019, which are:`,
      stemAr: "معايير المحاسبة المصرية الصادرة بالقرار 69/2019:",
      options: [
        "IFRS-based with local adaptations — including standards 47 (financial instruments), 48 (revenue) and 49 (leases)",
        "A translation of US GAAP",
        "Applicable only to banks",
        "Replaced entirely by IFRS as issued",
      ],
      optionsAr: [
        "مبنية على IFRS مع تكييفات محلية — وتضم المعايير 47 و48 و49",
        "ترجمة لـ US GAAP",
        "تطبق على البنوك فقط",
        "ألغيت كليًا لصالح IFRS كما صدرت",
      ],
      answerIndex: 0,
      explanation: "EAS (originally 110/2015, amended 69/2019) follow IFRS with local adaptations; FRA publishes the consolidated Arabic text.",
      explanationAr: "المعايير المصرية مبنية على IFRS مع تكييفات، وتنشر الهيئة النص العربي الموحد.",
    }),
  },
  {
    tag: "Egypt syndicate", area: "egypt", difficulty: 1, fams: ["SOE"],
    make: (_r, e) => ({
      stem: `The auditor signing the reports of ${e.en} must, to practise in Egypt, be registered with:`,
      stemAr: "يجب أن يكون المراجع الممارس في مصر مقيدًا لدى:",
      options: [
        "The Syndicate of Accountants and Auditors (Law 133/1951)",
        "The bar association",
        "The engineers' syndicate",
        "No professional body",
      ],
      optionsAr: [
        "نقابة المحاسبين والمراجعين (قانون 133 لسنة 1951)",
        "نقابة المحامين",
        "نقابة المهندسين",
        "لا يلزم الانتماء لأي جهة",
      ],
      answerIndex: 0,
      explanation: "Law 133/1951 established the Syndicate of Accountants and Auditors; membership is a prerequisite to practise, alongside FRA registration for its supervised entities.",
      explanationAr: "أنشأ قانون 133/1951 نقابة المحاسبين والمراجعين، والقيد شرط للممارسة مع قيد الهيئة لمن يراجع كياناتها.",
    }),
  },
  {
    tag: "Egypt public sector", area: "egypt", difficulty: 3, fams: ["SOE"],
    make: (_r, e) => ({
      stem: `For state-owned ${e.en}, governance reforms under Law 144/2019 emphasise:`,
      stemAr: `بالنسبة لـ ${e.ar} المملوكة للدولة، تركز إصلاحات الحوكمة وفق قانون 144/2019 على:`,
      options: [
        "Separating ownership from management, board independence and disclosure of SOE finances",
        "Merging all SOEs into one company",
        "Removing all boards of directors",
        "Exempting SOEs from auditing",
      ],
      optionsAr: [
        "فصل الملكية عن الإدارة واستقلال المجالس والإفصاح المالي",
        "دمج كل الشركات العامة في شركة واحدة",
        "إلغاء مجالس الإدارة",
        "إعفاء الشركات العامة من المراجعة",
      ],
      answerIndex: 0,
      explanation: "Law 144/2019 + the state-ownership policy document: professional boards, transparency, and the state's exit from competitive sectors.",
      explanationAr: "قانون 144/2019 ووثيقة سياسة الملكية: مجالس مهنية وشفافية وخروج الدولة من القطاعات التنافسية.",
    }),
  },
  {
    tag: "Egypt tax", area: "egypt", difficulty: 2, fams: ["SOE"],
    make: (_r, e) => ({
      stem: `E-invoicing mandates in Egypt (ETA) affect the audit of ${e.en} mainly by:`,
      stemAr: "تؤثر منظومة الفاتورة الإلكترونية الإلزامية في مصر على مراجعة الشركة أساسًا عبر:",
      options: [
        "Providing a complete, sequenced transaction record — enabling completeness testing via sequence gaps",
        "Eliminating the need for audit evidence",
        "Removing revenue recognition issues",
        "Replacing the audit opinion",
      ],
      optionsAr: [
        "توفر سجلًا كاملًا مرقمًا للعمليات — فيمكن اختبار الاكتمال بفجوات التسلسل",
        "تلغي الحاجة لأدلة المراجعة",
        "تحل مشكلات الاعتراف بالإيراد",
        "تحل محل رأي المراجعة",
      ],
      answerIndex: 0,
      explanation: "E-invoicing/e-receipt mandates create authoritative electronic trails; auditors test completeness and cutoff through sequence integrity rather than samples alone.",
      explanationAr: "توفر المنظومة سجلًا إلكترونيًا معتمدًا، فيختبر المراجع الاكتمال والقطع عبر سلامة التسلسل.",
    }),
  },
  {
    tag: "Egypt IPSAS", area: "egypt", difficulty: 3, fams: ["SOE"],
    make: (_r, e) => ({
      stem: `Benchmarking ${e.en} against IPSAS — the public-sector reference framework — IPSAS differs from IFRS mainly on:`,
      stemAr: "تختلف IPSAS كإطار مرجعي للقطاع العام عن IFRS أساسًا في:",
      options: [
        "Recognition of non-exchange transactions (taxes, transfers) and budget reporting",
        "The double-entry system",
        "Using cash only in all standards",
        "Nothing at all",
      ],
      optionsAr: [
        "الاعتراف بعمليات غير تبادلية (ضرائب ومنحومات) والتقارير الموازنية",
        "نظام القيد المزدوج",
        "الأساس النقدي فقط في كل المعايير",
        "لا فرق إطلاقًا",
      ],
      answerIndex: 0,
      explanation: "IPSAS (accrual) addresses non-exchange revenue (IPSAS 23) and comparison of actuals with budget (IPSAS 24) — features with no IFRS equivalent.",
      explanationAr: "تناول IPSAS الإيرادات غير التبادلية ومقارنة الفعلي بالموازنة، ولا مقابل لهما في IFRS.",
    }),
  },
  {
    tag: "Egypt CBE", area: "egypt", difficulty: 2, fams: ["SOE"],
    make: (_r, e) => ({
      stem: `Auditing a bank subsidiary of ${e.en} adds requirements from:`,
      stemAr: `تراجع شركة بنكية تابعة لـ ${e.ar} يضيف متطلبات من:`,
      options: [
        "Central Bank of Egypt circulars (provisions, classification, disclosures) on top of ISA/ESA",
        "The engineers' syndicate",
        "The consumer protection agency only",
        "No additional requirements",
      ],
      optionsAr: [
        "تعاميم البنك المركزي المصري (المخصصات والتصنيف والإفصاح) فوق ISA/ESA",
        "نقابة المهندسين",
        "جهاز حماية المستهلك فقط",
        "لا متطلبات إضافية",
      ],
      answerIndex: 0,
      explanation: "CBE circulars govern loan classification/provisioning and financial-sector disclosure; bank audits layer these onto ISA/ESA.",
      explanationAr: "تضبط تعاميم البنك المركزي تصنيف القروض ومخصصاتها وإفصاح القطاع، وتتراكب مع معايير المراجعة.",
    }),
  },
  {
    tag: "Egypt SOE law", area: "egypt", difficulty: 2, fams: ["SOE"],
    make: (_r, e) => ({
      stem: `Law 159/1981 governs ${e.en} as:`,
      stemAr: "يحكم قانون 159 لسنة 1981 الشركة باعتبارها:",
      options: [
        "The joint-stock companies law — formation, governance and shareholder rights",
        "The banking law",
        "The income tax law",
        "The insurance law",
      ],
      optionsAr: [
        "قانون شركات المساهمة — التأسيس والحوكمة وحقوق المساهمين",
        "قانون البنوك",
        "قانون ضريبة الدخل",
        "قانون التأمين",
      ],
      answerIndex: 0,
      explanation: "Law 159/1981 (companies law) and its amendments govern joint-stock and LLC companies; Law 10/2009 created FRA; Law 95/1996 covers capital-market auditors.",
      explanationAr: "قانون 159/1981 يحكم شركات المساهمة والمسؤولية المحدودة، وقانون 10/2009 أنشأ الهيئة.",
    }),
  },
  {
    tag: "Egypt review", area: "egypt", difficulty: 2, fams: ["SOE"],
    make: (_r, e) => ({
      stem: `A limited-scope review engagement (فحص محدود) of ${e.en} provides:`,
      stemAr: `يوفر الفحص المحدود لـ ${e.ar}:`,
      options: [
        "Negative assurance — nothing has come to attention causing the reviewer to believe the statements are misstated",
        "Positive assurance like an audit",
        "A guarantee against fraud",
        "No communication at all",
      ],
      optionsAr: [
        "تأكيد سلبي — لم يطرأ ما يشير إلى تحريف جوهري",
        "تأكيد موجب كالمراجعة",
        "ضمان ضد الاحتيال",
        "لا يقدم أي تقرير",
      ],
      answerIndex: 0,
      explanation: "Review engagements (ISRE 2400 / ESRE 2410) give negative (limited) assurance via enquiry and analytics — no audit opinion.",
      explanationAr: "يوفر الفحص المحدود تأكيدًا سلبيًا بالاستفسار والتحليلات دون رأي مراجعة.",
    }),
  },
  {
    tag: "Egypt ethics", area: "egypt", difficulty: 2, fams: ["SOE"],
    make: (_r, e) => ({
      stem: `The auditors of ${e.en} registered with the FRA are bound by the FRA auditor-ethics rules (Decree 175/2024), which apply to:`,
      stemAr: "تسري قواعد أخلاقيات المراجع لدى الهيئة (قرار 175/2024) على:",
      options: [
        "Auditors registered with FRA auditing its supervised entities — independence, fees and safeguards",
        "All employees of every company",
        "Only foreign auditors",
        "Tax inspectors only",
      ],
      optionsAr: [
        "المراجعين المقيمين لدى الهيئة لمراجعة كياناتها — الاستقلالية والأتعاب والحواجز",
        "موظفي كل الشركات",
        "المراجعون الأجانب فقط",
        "مفتشو الضرائب فقط",
      ],
      answerIndex: 0,
      explanation: "Decrees 174/2024 (quality control) and 175/2024 (ethics) frame FRA-registered practice alongside IESBA-based syndicate rules.",
      explanationAr: "قرارا 174 و175 لسنة 2024 يظهران ممارسة المراجعين لدى الهيئة إلى جانب قواعد النقابة المبنية على IESBA.",
    }),
  },
]
