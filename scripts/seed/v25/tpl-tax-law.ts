/** v25 tax cluster — TX and ATX question templates (UK-style technical
 *  rules expressed generically: reliefs, computations, VAT, ethics). */
import { type Template, egp, fmt, mcq, numericOptions } from "./gen-lib"

const BOTH = ["TX", "ATX"] as const

export const TAX_TEMPLATES: Template[] = [
  {
    tag: "Trading income", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const profit = r.pick([420_000, 560_000, 640_000])
      const add = r.pick([30_000, 45_000])
      const less = r.pick([20_000, 35_000])
      const adj = profit + add - less
      const { options, optionsAr, answerIndex } = numericOptions(
        adj, [profit + add, profit - less, Math.round(profit * 1.1)]
      )
      return {
        stem: `${e.en} reports accounting profit of EGP ${fmt(profit)}. Depreciation of EGP ${fmt(add)} and a non-deductible fine of EGP ${fmt(less)} require adjustment; capital allowances already netted. Adjusted taxable trading profit is:`,
        stemAr: `تحقق ${e.ar} ربحًا محاسبيًا ${egp(profit)}؛ ويستوجب إضافة إهلاك محاسبي ${egp(add)} واستبعاد غرامة غير مقبولة ${egp(less)}. الربح الضريبي المعدل:`,
        options, optionsAr, answerIndex,
        explanation: `Taxable profit = accounting profit + depreciation (disallowed) − non-deductible items reverse = ${egp(profit)} + ${egp(add)} − ${egp(less)} = ${egp(adj)}.`,
        explanationAr: `الربح الضريبي = المحاسبي + المعالجات غير المقبولة = ${egp(adj)}.`,
      }
    },
  },
  {
    tag: "Capital allowances", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const cost = r.pick([120_000, 180_000, 240_000])
      const rate = r.pick([0.18, 0.25])
      const wda = Math.round(cost * rate)
      const { options, optionsAr, answerIndex } = numericOptions(
        wda, [Math.round(cost * (rate / 2)), Math.round(cost * 0.4), cost]
      )
      return {
        stem: `${e.en} buys plant costing EGP ${fmt(cost)}; the writing-down allowance is ${Math.round(rate * 100)}% on the reducing balance. The first-year allowance is:`,
        stemAr: `تشتري ${e.ar} أصولًا بمبلغ ${egp(cost)}؛ ومعدل الاستهلاك الضريبي ${Math.round(rate * 100)}% متناقصًا. علاوة السنة الأولى:`,
        options, optionsAr, answerIndex,
        explanation: `WDA = cost × rate = ${egp(cost)} × ${Math.round(rate * 100)}% = ${egp(wda)}.`,
        explanationAr: `العلاوة = التكلفة × المعدل = ${egp(wda)}.`,
      }
    },
  },
  {
    tag: "Employment income", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const salary = r.pick([600_000, 840_000])
      const exempt = r.pick([40_000, 60_000])
      const assess = salary - exempt
      const { options, optionsAr, answerIndex } = numericOptions(
        assess, [salary, Math.round(salary - exempt * 2), Math.round(salary * 0.5)]
      )
      return {
        stem: `An employee of ${e.en} earns a salary of EGP ${fmt(salary)} and receives an exempt allowance of EGP ${fmt(exempt)}. Assessable employment income is:`,
        stemAr: `موظف لدى ${e.ar} براتب ${egp(salary)} وبدل معفى ${egp(exempt)}. الدخل الوظيفي الخاضع:`,
        options, optionsAr, answerIndex,
        explanation: `Assessable income = salary − exempt benefits = ${egp(salary)} − ${egp(exempt)} = ${egp(assess)}.`,
        explanationAr: `الخاضع = الراتب − المعفى = ${egp(assess)}.`,
      }
    },
  },
  {
    tag: "Corporation tax", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const tp = r.pick([900_000, 1_600_000, 2_400_000])
      const rate = r.pick([0.225, 0.25])
      const tax = Math.round(tp * rate)
      const { options, optionsAr, answerIndex } = numericOptions(
        tax, [Math.round(tp * (rate + 0.05)), Math.round(tp * (rate - 0.075)), Math.round(tp * 0.1)]
      )
      return {
        stem: `${e.en} has taxable profits of EGP ${fmt(tp)} and pays tax at ${Math.round(rate * 100)}%. The corporation tax charge is:`,
        stemAr: `أرباح ${e.ar} الخاضعة ${egp(tp)} والمعدل ${Math.round(rate * 100)}%. الضريبة المستحقة:`,
        options, optionsAr, answerIndex,
        explanation: `Tax = taxable profit × rate = ${egp(tp)} × ${Math.round(rate * 100)}% = ${egp(tax)}.`,
        explanationAr: `الضريبة = الوعاء × المعدل = ${egp(tax)}.`,
      }
    },
  },
  {
    tag: "VAT", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const sales = r.pick([400_000, 700_000, 1_000_000])
      const purchases = r.pick([240_000, 420_000])
      const rate = 0.14
      const payable = Math.round((sales - purchases) * rate)
      const { options, optionsAr, answerIndex } = numericOptions(
        payable, [Math.round((sales + purchases) * rate), Math.round(sales * rate), Math.round(purchases * rate)]
      )
      return {
        stem: `In a VAT period, ${e.en} makes standard-rated sales of EGP ${fmt(sales)} (net) and purchases of EGP ${fmt(purchases)} (net). At 14%, the VAT payable is:`,
        stemAr: `خلال الفترة، مبيعات ${e.ar} الخاضعة ${egp(sales)} (صافي) ومشتريات ${egp(purchases)} (صافي). عند 14%، ضريبة القيمة المضافة المستحقة:`,
        options, optionsAr, answerIndex,
        explanation: `VAT payable = output − input = (${fmt(sales)} − ${fmt(purchases)}) × 14% = ${egp(payable)}.`,
        explanationAr: `المستحقة = الضريبة على المبيعات − المشتريات = ${egp(payable)}.`,
      }
    },
  },
  {
    tag: "VAT", area: "accounting", difficulty: 3, fams: [...BOTH],
    make: (_r, e) => ({
      stem: `Which supply by ${e.en} is generally ZERO-RATED rather than exempt (standard VAT principles)?`,
      stemAr: `أي توريد لـ ${e.ar} يكون معدل التصفير صفرًا بدلًا من الإعفاء (مبادئ القيمة المضافة المعتادة)؟`,
      options: [
        "Exports of goods — zero-rated with input VAT recoverable",
        "Financial services — exempt with no input recovery",
        "Residential rent — exempt",
        "Hospital care — exempt",
      ],
      optionsAr: [
        "تصدير السلع — معدل صفر مع استرداد ضريبة المدخلات",
        "الخدمات المالية — معفاة دون استرداد",
        "إيجار السكن — معفى",
        "الرعاية الصحية — معفاة",
      ],
      answerIndex: 0,
      explanation: "Zero-rated supplies still recover input VAT (exports); exempt supplies cannot recover input VAT — a key commercial difference.",
      explanationAr: "المصفّرة تسترد ضريبة المدخلات كالصادرات، والمعفاة لا تسترد — وهذا فرق جوهري.",
    }),
  },
  {
    tag: "Capital gains", area: "accounting", difficulty: 3, fams: [...BOTH],
    make: (r, e) => {
      const proceeds = r.pick([1_500_000, 2_200_000])
      const cost = r.pick([800_000, 1_200_000])
      const relief = r.pick([0.3, 0.5])
      const gain = Math.round((proceeds - cost) * (1 - relief))
      const { options, optionsAr, answerIndex } = numericOptions(
        gain, [proceeds - cost, Math.round((proceeds - cost) * relief), Math.round(proceeds * 0.2)]
      )
      return {
        stem: `${e.en} sells an asset for EGP ${fmt(proceeds)} (cost EGP ${fmt(cost)}); reliefs apply to ${Math.round(relief * 100)}% of the gain. The chargeable gain is:`,
        stemAr: `تبيع ${e.ar} أصلًا بمبلغ ${egp(proceeds)} (تكلفته ${egp(cost)})؛ وتنطبق الإعفاءات على ${Math.round(relief * 100)}% من المكسب. المكسب الخاضع:`,
        options, optionsAr, answerIndex,
        explanation: `Chargeable gain = (proceeds − cost) × (1 − relief) = (${egp(proceeds)} − ${egp(cost)}) × ${Math.round(1 - relief)} = ${egp(gain)}.`,
        explanationAr: `الخاضع = المكسب × (1 − الإعفاء) = ${egp(gain)}.`,
      }
    },
  },
  {
    tag: "Loss relief", area: "accounting", difficulty: 3, fams: [...BOTH],
    make: (_r, e) => ({
      stem: `${e.en} makes a trading loss this year and had profits last year. Which use of the loss is generally available?`,
      stemAr: `حققت ${e.ar} خسارة تشغيلية هذا العام وأرباحًا العام السابق. أي استخدام للخسارة متاح عادة؟`,
      options: [
        "Carry back against prior-year trading profits, or carry forward against future profits",
        "Refund of VAT for the period",
        "Offset against employees' payroll tax",
        "Conversion into a tax credit receivable immediately",
      ],
      optionsAr: [
        "الترجيح لأرباح العام السابق أو الترحيل للأرباح المستقبلية",
        "استرداد ضريبة القيمة المضافة",
        "الخصم من ضريبة كسب العمل لدى الموظفين",
        "تحويلها لائتمان ضريبي فوري",
      ],
      answerIndex: 0,
      explanation: "Trading losses may generally be set against total profits of the previous period (carry-back, time-limited) or future trading profits (carry-forward).",
      explanationAr: "تُرجح الخسائر التشغيلية عادة لأرباح الفترة السابقة أو المستقبلية وفق حدود زمنية.",
    }),
  },
  {
    tag: "Tax ethics", area: "ethics", difficulty: 2, fams: [...BOTH],
    make: (_r, e) => ({
      stem: `A tax adviser preparing ${e.en}'s return may lawfully rely on the client's figures but must:`,
      stemAr: `يحق لمستشار ضريبي إعداد إقرار ${e.ar} الاعتماد على أرقام العميل لكن عليه:`,
      options: [
        "Make reasonable enquiries where figures appear incorrect or incomplete, and never knowingly submit a false return",
        "Audit every figure as an auditor would",
        "Accept any figure because tax is the client's risk",
        "Report all uncertainties to the tax authority",
      ],
      optionsAr: [
        "إجراء استفسارات معقولة عند الاشتباه في خطأ أو نقص، وعدم تقديم إقرار كاذب بعلمه",
        "تدقيق كل رقم كما يفعل المراجع",
        "قبول أي رقم لأن المخاطرة على العميل",
        "الإبلاغ عن كل شك للمصلحة",
      ],
      answerIndex: 0,
      explanation: "Professional obligations (and ACCA's tax-ethics guidance): reasonable enquiry, no knowing submission of false statements; the adviser need not guarantee the client's records.",
      explanationAr: "الالتزام المهني: استفسار معقول وعدم تقديم بيانات كاذبة، دون ضمان سجلات العميل.",
    }),
  },
  {
    tag: "ATX planning", area: "accounting", difficulty: 3, fams: ["ATX"],
    make: (_r, e) => ({
      stem: `In advising ${e.en} on an incorporation decision, which factor is a DISADVANTAGE of incorporating?`,
      stemAr: `عند نصح ${e.ar} بالتحول لشركة، أي عامل يعد عيبًا للتحول؟`,
      options: [
        "Loss of full relief for pre-trading losses against total income",
        "Access to incorporation relief",
        "Limited liability",
        "Better access to finance",
      ],
      optionsAr: [
        "فقدان خصم ما قبل النشاط من إجمالي الدخل",
        "الاستفادة من إعفاء التحول",
        "المسؤولية المحدودة",
        "تحسين الوصول للتمويل",
      ],
      answerIndex: 0,
      explanation: "Unincorporated losses relieve against total income; post-incorporation, loss relief rules narrow and compliance costs rise — the classic trade-off.",
      explanationAr: "خسائر المنشأة الفردة تخصم من إجمالي الدخل، وبعد التحول تضيق القواعد وتزيد الأعباء.",
    }),
  },
  {
    tag: "Group relief", area: "accounting", difficulty: 3, fams: ["ATX"],
    make: (_r, e) => ({
      stem: `For ${e.en}'s group, group relief of losses between companies generally requires:`,
      stemAr: `في مجموعة ${e.ar}، يتطلب نقل الخسائر بين الشركات عادة:`,
      options: [
        "A qualifying group relationship (same ownership) with overlapping accounting periods and a claim by the surrendering company",
        "Any two companies in the same country",
        "Only the tax authority's approval",
        "The losses to arise from the same trade",
      ],
      optionsAr: [
        "علاقة مجموعة مؤهلة (نفس الملكية) وفترات متداخلة ومطالبة من الشركة المتنازلة",
        "أي شركتين في الدولة نفسها",
        "موافقة المصلحة فقط",
        "نشوء الخسائر عن نفس النشاط",
      ],
      answerIndex: 0,
      explanation: "Group relief needs a 75% group relationship and overlapping periods; the claim mechanism surrenders losses to the claimant company.",
      explanationAr: "يشترط النقل علاقة مجموعة بنسبة 75% وفترات متداخلة مع آلية تنازل ومطالبة.",
    }),
  },
  {
    tag: "Withholding", area: "accounting", difficulty: 3, fams: ["ATX"],
    make: (r, e) => {
      const fee = r.pick([300_000, 450_000])
      const rate = r.pick([0.1, 0.2])
      const withheld = Math.round(fee * rate)
      const { options, optionsAr, answerIndex } = numericOptions(
        withheld, [Math.round(fee * rate * 0.5), Math.round(fee * (1 - rate)), Math.round(fee * 0.05)]
      )
      return {
        stem: `${e.en} pays a non-resident consultant a fee of EGP ${fmt(fee)}; withholding tax applies at ${Math.round(rate * 100)}%. The amount withheld and remitted is:`,
        stemAr: `تدفع ${e.ar} لاستشاري غير مقيم ${egp(fee)}؛ ويطبق خصم عند المنبع بمعدل ${Math.round(rate * 100)}%. المبلغ المخصوم والمورد:`,
        options, optionsAr, answerIndex,
        explanation: `Withholding = gross fee × rate = ${egp(fee)} × ${Math.round(rate * 100)}% = ${egp(withheld)} — remitted to the authority; the recipient credits it in their own jurisdiction.`,
        explanationAr: `الخصم = ${egp(withheld)} ويورد للجهة ويخصم المستلم في ولايته.`,
      }
    },
  },
]

/** v25 law cluster — LW (and SBL governance items). */
export const LAW_TEMPLATES: Template[] = [
  {
    tag: "Contract", area: "ethics", difficulty: 1, fams: ["LW"],
    make: (_r, e) => ({
      stem: `For a valid contract with ${e.en}, the essential elements include:`,
      stemAr: `لكي ينشأ عقد صحيح مع ${e.ar}، تقتضي العناصر الجوهرية:`,
      options: [
        "Offer, acceptance, consideration and an intention to create legal relations",
        "A written document in every case",
        "Approval by a notary public",
        "Payment of a deposit",
      ],
      optionsAr: [
        "الإيجاب والقبول والمقابل والنية لإنشاء علاقة قانونية",
        "محرر مكتوب في كل حالة",
        "تصديق كاتب العدل",
        "دفع عربون",
      ],
      answerIndex: 0,
      explanation: "Contract essentials: offer, acceptance, consideration (or cause in civil-law systems), capacity, and intention to be bound.",
      explanationAr: "أركان العقد: الإيجاب والقبول والمقابل والأهلية والتراضي.",
    }),
  },
  {
    tag: "Contract", area: "ethics", difficulty: 2, fams: ["LW"],
    make: (r, e) => {
      const [term, ex, exAr] = r.pick([
        ["condition precedent", "an event that must occur before the obligation arises", "واقعة يجب حدوثها قبل نشوء الالتزام"],
        ["warranty", "a minor term whose breach damages but does not end the contract", "شرط ثانوي خرقه يوجب التعويض دون فسخ"],
        ["innominate term", "a term whose remedy depends on the seriousness of the breach", "شرط يترتب على خرقه حسب جسامة الإخلال"],
      ])
      return {
        stem: `${e.en}'s contract contains a term best described as: ${ex}. This is a:`,
        stemAr: `يتضمن عقد ${e.ar} شرطًا يوصف بأنه: ${exAr}. هذا:`,
        ...mcq(
          term === "condition precedent" ? ["Condition precedent", "شرط واقف"]
            : term === "warranty" ? ["Warranty", "شرط ضمان"]
            : ["Innominate term", "شرط غير مسمى"],
          [
            ["Condition precedent", "شرط واقف"],
            ["Warranty", "شرط ضمان"],
            ["Innominate term", "شرط غير مسمى"],
            ["Condition subsequent", "شرط فاسخ"],
          ]
        ),
        answerIndex: 0,
        explanation: "Conditions precedent gate obligations; warranties are minor terms (damages only); innominate terms take their remedy from breach severity.",
        explanationAr: "الشرط الواقف يعلق الالتزام، وشرط الضمان يعقبه تعويض، وغير المسمى يتحدد جزاؤه بجسامة الإخلال.",
      }
    },
  },
  {
    tag: "Negligence", area: "ethics", difficulty: 2, fams: ["LW"],
    make: (_r, e) => ({
      stem: `To succeed in a negligence claim against ${e.en}, a claimant must prove:`,
      stemAr: `لكي تنجح دعوى الإهمال ضد ${e.ar}، يجب إثبات:`,
      options: [
        "A duty of care, breach of that duty, and loss caused by the breach (remoteness)",
        "A written contract only",
        "An intention to harm",
        "A criminal conviction first",
      ],
      optionsAr: [
        "واجب حذر وخرقه وخسارة تسبب عنها الخرق",
        "عقد مكتوب فقط",
        "قصد الإضرار",
        "حكم جنائي مسبق",
      ],
      answerIndex: 0,
      explanation: "The tort of negligence: duty (neighbour principle), breach (reasonable-standard), causation and remoteness of damage.",
      explanationAr: "خطأ الإهمال: واجب الحذر والخرق والسببية ونطاق الضرر.",
    }),
  },
  {
    tag: "Company law", area: "ethics", difficulty: 1, fams: ["LW"],
    make: (_r, e) => ({
      stem: `Separate legal personality means ${e.en}, once incorporated, can:`,
      stemAr: "الشخصية الاعتبارية المستقلة تعني أن الشركة بعد تأسيسها تستطيع:",
      options: [
        "Own assets, contract and sue/be sued in its own name — distinct from its members",
        "Act only through unanimous shareholder votes",
        "Avoid all legal liability",
        "Change its nationality at will",
      ],
      optionsAr: [
        "تملك الأصول وتتعاقد وتقاضي وتخاصم باسمها — مستقلة عن الشركاء",
        "التصرف فقط بقرارات إجماعية",
        "الإفلات من كل المسؤوليات",
        "تغيير جنسيتها متى شاءت",
      ],
      answerIndex: 0,
      explanation: "Salomon principle: the company is a separate legal person; members' liability is limited to their investment (statute may lift the veil).",
      explanationAr: "مبدأ سالومون: الشخصية الاعتبارية مستقلة والمسؤولية محدودة بالحصص، مع جواز رفع الحجب استثناءً.",
    }),
  },
  {
    tag: "Company law", area: "ethics", difficulty: 2, fams: ["LW"],
    make: (_r, e) => ({
      stem: `A director of ${e.en} profits personally from a corporate opportunity. The usual remedy is:`,
      stemAr: `يستفيد مدير ${e.ar} شخصيًا من فرصة تعود للشركة. الجزاء المعتاد:`,
      options: [
        "The company can recover the profit (accountable profits) and rescind the contract",
        "The director keeps the profit after paying a fine",
        "The opportunity belongs to the director automatically",
        "Nothing — directors are free to compete",
      ],
      optionsAr: [
        "تسترد الشركة الربح وتفسخ التعاقد",
        "يحتفظ المدير بالربح بعد غرامة",
        "الفرصة للمدير تلقائيًا",
        "لا شيء — للمديرين التنافس بحرية",
      ],
      answerIndex: 0,
      explanation: "Directors' fiduciary duties: no-conflict and no-profit rules — the company may claim accountable profits (Regal Hastings) and rescind.",
      explanationAr: "واجبات الأمانة: حظر التنازع وحظر الربح — وتسترد الشركة الأرباح.",
    }),
  },
  {
    tag: "Company law", area: "ethics", difficulty: 2, fams: ["LW"],
    make: (_r, e) => ({
      stem: `A public company's shares at ${e.en} are generally transferable:`,
      stemAr: `أسهم الشركة المساهمة في ${e.ar} تنتقل عادة:`,
      options: [
        "Freely on the stock exchange, subject only to the company's articles",
        "Only with board approval in every case",
        "Never — they are locked for life",
        "Only to family members",
      ],
      optionsAr: [
        "بحرية في البورصة وفق النظام الأساسي",
        "بموافقة المجلس في كل حالة",
        "أبدًا — فهي محجوزة مدى الحياة",
        "للأقارب فقط",
      ],
      answerIndex: 0,
      explanation: "Free transferability is a defining feature of public companies; private companies may restrict transfer by their articles.",
      explanationAr: "قابلية النقل الحر سمة المساهمة، وقد تقيد الشركات الخاصة النقل بنظامها.",
    }),
  },
  {
    tag: "Insolvency", area: "ethics", difficulty: 3, fams: ["LW"],
    make: (_r, e) => ({
      stem: `When ${e.en} enters liquidation, which creditor ranks FIRST in the statutory order?`,
      stemAr: `عند دخول ${e.ar} التصفية، أي دائن يتقدم في الترتيب القانوني؟`,
      options: [
        "Secured creditors with a fixed charge (and liquidation expenses/employees within statutory caps)",
        "Ordinary unsecured trade creditors",
        "Shareholders",
        "Preference shareholders before fixed-charge holders",
      ],
      optionsAr: [
        "الدائنون المضمونون برهن ثابت (ومصروفات التصفية والعاملين في الحدود القانونية)",
        "الدائنون العاديون",
        "المساهمون",
        "حملة الأسهم الممتازة قبل أصحاب الرهن",
      ],
      answerIndex: 0,
      explanation: "Order: fixed-charge secured → liquidation costs and prescribed-part employees → preferential → floating charge → unsecured → shareholders.",
      explanationAr: "الترتيب: الرهن الثابت فمصروفات التصفية والعاملين فالممتاز فالرهن العائم فالعاديون فالمساهمون.",
    }),
  },
  {
    tag: "Employment", area: "ethics", difficulty: 2, fams: ["LW"],
    make: (_r, e) => ({
      stem: `An employee of ${e.en} is dismissed instantly for gross misconduct. For the dismissal to be FAIR the employer must:`,
      stemAr: `يفصل صاحب عمل في ${e.ar} موظفًا فورًا لسوء سلوك جسيم. لكي يكون الفصل عادلًا يجب:`,
      options: [
        "Have a genuine belief, reasonable grounds, a reasonable investigation and a fair process",
        "Pay a severance package",
        "Obtain a court order first",
        "Give 12 months' notice",
      ],
      optionsAr: [
        "اعتقاد صادق وأسباب معقولة وتحقيق معقول وإجراءات عادلة",
        "دفع تعويض مغادرة",
        "الحصول على حكم قضائي مسبق",
        "إخطار 12 شهرًا",
      ],
      answerIndex: 0,
      explanation: "Fair-dismissal tests: reason in the statutory list (capability, conduct, redundancy, law, SOSR) + reasonable treatment and procedure.",
      explanationAr: "شروط الفصل العادل: سبب قانوني ومعاملة معقولة وإجراء سليم.",
    }),
  },
  {
    tag: "Agency", area: "ethics", difficulty: 2, fams: ["LW"],
    make: (_r, e) => ({
      stem: `An agent of ${e.en} with usual authority makes a contract with a third party. The contract binds:`,
      stemAr: `يبرم وكيل ${e.ar} بسلطته المعتادة عقدًا مع طرف ثالث. يلزم العقد:`,
      options: [
        "The principal — the third party may hold the principal liable",
        "Only the agent personally",
        "Nobody until ratified",
        "Only the third party",
      ],
      optionsAr: [
        "الأصيل — ويحق للطرف الثالث الرجوع عليه",
        "الوكيل شخصيًا فقط",
        "لا أحد حتى التصديق",
        "الطرف الثالث فقط",
      ],
      answerIndex: 0,
      explanation: "Actual (express/implied) or usual authority binds the principal; apparent authority binds a third party who reasonably relied on the principal's representation.",
      explanationAr: "الوكالة الفعلية أو المعتادة تلزم الأصيل، والظاهرة تلزم من اعتمد عليها الطرف الثالث بحسن نية.",
    }),
  },
  {
    tag: "Partnership", area: "ethics", difficulty: 2, fams: ["LW"],
    make: (_r, e) => ({
      stem: `In a general partnership operating as ${e.en}, partners' liability is:`,
      stemAr: `في شراكة عامة تعمل باسم ${e.ar}، مسؤولية الشركاء:`,
      options: [
        "Joint and several, unlimited — each partner can be pursued for all debts",
        "Limited to capital contributed",
        "Limited to their management role",
        "Excluded by agreement with third parties",
      ],
      optionsAr: [
        "تضامنية وغير محدودة — يجوز مطالبة كل شريك بكامل الديون",
        "محدودة برأس المال المساهم",
        "محدودة بدورهم الإداري",
        "مستبعدة باتفاق مع الغير",
      ],
      answerIndex: 0,
      explanation: "General partners bear joint and several unlimited liability; LLP members enjoy limited liability while preserving partnership tax treatment.",
      explanationAr: "الشركاء متضامنون بلا حد، ويتمتع أعضاء الشراكة محدودة المسؤولية بحماية مماثلة للشركات.",
    }),
  },
  {
    tag: "Governance", area: "ethics", difficulty: 2, fams: ["LW", "SBL"],
    make: (_r, e) => ({
      stem: `The PRIMARY role of ${e.en}'s audit committee is to:`,
      stemAr: `الدور الأساسي للجنة المراجعة في ${e.ar} هو:`,
      options: [
        "Oversee financial reporting, the external audit and internal control on behalf of the board",
        "Prepare the financial statements",
        "Certify the tax returns",
        "Approve the marketing budget",
      ],
      optionsAr: [
        "الإشراف على التقرير المالي والمراجعة الخارجية والرقابة الداخلية نيابة عن المجلس",
        "إعداد القوائم المالية",
        "إقرار الإقرارات الضريبية",
        "اعتماد موازنة التسويق",
      ],
      answerIndex: 0,
      explanation: "Audit committees (composed of independent non-executives) oversee reporting integrity, auditor independence and internal control — not preparation.",
      explanationAr: "تشرف لجان المراجعة المستقلة على نزاهة التقارير واستقلال المراجع والرقابة، لا على الإعداد.",
    }),
  },
  {
    tag: "Insolvency", area: "ethics", difficulty: 3, fams: ["LW"],
    make: (_r, e) => ({
      stem: `A transaction at undervalue by ${e.en} shortly before insolvency can typically be:`,
      stemAr: `التصرف بثمن بخيس قامت به ${e.ar} قبيل الإعسار يمكن عادة:`,
      options: [
        "Set aside by the liquidator if within the statutory look-back period",
        "Ratified by shareholders",
        "Enforced only against directors",
        "Ignored completely by law",
      ],
      optionsAr: [
        "إبطاله من المصفي خلال فترة النظر القانونية",
        "التصديق عليه من المساهمين",
        "تنفيذه ضد المديرين فقط",
        "تجاهله قانونًا",
      ],
      answerIndex: 0,
      explanation: "Antecedent transactions (undervalue, preferences, invalid floating charges) can be unwound by liquidators within statutory time limits.",
      explanationAr: "التصرفات السابقة على الإعسار تبطل بأمر المصفي داخل المدد القانونية.",
    }),
  },
]
