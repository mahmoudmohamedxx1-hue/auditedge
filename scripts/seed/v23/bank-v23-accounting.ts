/** v23 seed data — FULL-LENGTH previous-exam papers (Accounting/IFRS).
 *  Extends ACCA FR → 30 questions and SBR → 24 questions. */

export type AccPaperSeedQ = {
  code: string
  stem: string
  stemAr: string
  options: string[]
  optionsAr: string[]
  answerIndex: number
  explanation: string
  explanationAr: string
  standardTag: string
  area: "accounting"
  difficulty: 1 | 2 | 3
  source: string
}

export const FR_FULL: AccPaperSeedQ[] = [
  {
    code: "FR-P1-13",
    stem: "Cairo Traders holds inventory that it expects to sell within its normal operating cycle, and also a building held for long-term capital appreciation. Under IAS 1, the building should be classified as:",
    stemAr: "تحوز كايرو تريدرز مخزونًا تتوقع بيعه خلال دورة تشغيلها المعتادة، ومبنى محتفظًا به لأغراض نمو رأس المال طويل الأجل. وفق IAS 1، يصنف المبنى كـ:",
    options: [
      "A current asset, because the operating cycle is the deciding test for all assets",
      "A non-current asset, as it is not expected to be realised within the normal operating cycle",
      "Inventory, since it is physical property",
      "A financial asset, because it appreciates in value",
    ],
    optionsAr: [
      "أصل متداول، لأن دورة التشغيل هي الاختبار الحاسم لكل الأصول",
      "أصل غير متداول، إذ لا يُتوقع تحقيقه خلال دورة التشغيل المعتادة",
      "مخزون، لأنه ملك مادي",
      "أصل مالي، لأن قيمته تتزايد",
    ],
    answerIndex: 1,
    explanation:
      "IAS 1: current assets are consumed or realised in the normal operating cycle, held for trading, or realised within 12 months. An investment property held long-term fails all of these, so it is non-current regardless of physical nature.",
    explanationAr:
      "وفق IAS 1: الأصول المتداولة تستهلك أو تتحقق خلال دورة التشغيل أو تحاز للتداول أو تتحقق خلال ١٢ شهرًا. والممتلكات الاستثمارية طويلة الأجل لا تحقق أيًا من ذلك، فهي غير متداولة مهما كانت طبيعتها المادية.",
    standardTag: "IAS 1",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-14",
    stem: "A retailer's inventory cost layers are: 200 units at EGP 40 and 300 units at EGP 46. 250 units were sold in the period. Under IAS 2, the MINIMUM cost of sales arises under:",
    stemAr: "طبقات تكلفة مخزون تاجر: ٢٠٠ وحدة بـ ٤٠ جنيهًا و٣٠٠ وحدة بـ ٤٦ جنيهًا. بيعت ٢٥٠ وحدة خلال الفترة. وفق IAS 2، تنشأ أدنى تكلفة مباعات بموجب:",
    options: [
      "FIFO, selling the cheaper units first (COGS = EGP 10,700)",
      "Weighted average (COGS = EGP 10,750)",
      "LIFO, which is permitted for retailers only",
      "Standard cost, which always gives the lowest figure",
    ],
    optionsAr: [
      "الوارد أولًا صادر أولًا، ببيع الوحدات الأرخص أولًا (تكلفة المبيعات ١٠٧٠٠ جنيه)",
      "المتوسط المرجح (تكلفة المبيعات ١٠٧٥٠ جنيهًا)",
      "الوارد أخيرًا صادر أولًا، وهو مسموح للتجار فقط",
      "التكلفة المعيارية التي تعطي دائمًا أدنى رقم",
    ],
    answerIndex: 0,
    explanation:
      "IAS 2 permits FIFO and weighted average (and specific identification where appropriate); LIFO is prohibited. With rising prices, FIFO sends the cheapest units to COGS: 200 × 40 + 50 × 46 = 8,000 + 2,300 = EGP 10,700 — lower than the weighted average 250 × 43 = 10,750.",
    explanationAr:
      "يجيز IAS 2 طريقتي الوارد أولًا والمتوسط المرجح (والتحديد المباشر حيث يلائم)؛ ويحظر الوارد أخيرًا. ومع الأسعار المتصاعدة يرسل الوارد أولًا أرخص الوحدات إلى التكلفة: ٢٠٠×٤٠ + ٥٠×٤٦ = ١٠٧٠٠ جنيهًا، أي أقل من المتوسط المرجح ٢٥٠×٤٣ = ١٠٧٥٠.",
    standardTag: "IAS 2",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-15",
    stem: "A line of chairs cost EGP 100,000 to manufacture. Selling costs are EGP 5,000; the estimated selling price is EGP 96,000. Under IAS 2, the inventory is carried at:",
    stemAr: "تكلفة إنتاج مجموعة كراسٍ ١٠٠ ألف جنيه. مصروفات البيع ٥ آلاف؛ وسعر البيع المقدر ٩٦ ألفًا. وفق IAS 2، يُعرض المخزون بقيمة:",
    options: [
      "EGP 100,000 — cost is always the ceiling",
      "EGP 91,000 — the net realisable value",
      "EGP 96,000 — the expected selling price",
      "EGP 95,000 — selling price less half of the selling costs",
    ],
    optionsAr: [
      "١٠٠ ألف جنيه — فالتكلفة دائمًا هي السقف",
      "٩١ ألف جنيه — صافي القيمة القابلة للتحقق",
      "٩٦ ألف جنيه — سعر البيع المتوقع",
      "٩٥ ألف جنيه — سعر البيع ناقص نصف مصروفات البيع",
    ],
    answerIndex: 1,
    explanation:
      "IAS 2: inventory is measured at the LOWER of cost and net realisable value; NRV is estimated selling price less the costs necessary to complete and sell: 96,000 − 5,000 = 91,000, and a write-down of 9,000 is recognised as an expense.",
    explanationAr:
      "وفق IAS 2: يقاس المخزون بالأدنى من التكلفة وصافي القيمة القابلة للتحقق؛ والصافي هو سعر البيع المتوقع ناقص تكاليف الإتمام والبيع: ٩٦٠٠٠ − ٥٠٠٠ = ٩١٠٠٠، ويُعترف بانخفاض قدره ٩٠٠٠ كمصروف.",
    standardTag: "IAS 2",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-16",
    stem: "In 2026 Delta Ltd discovers that 2025's closing inventory was overstated by EGP 700,000. The error is material. Under IAS 8, the correct treatment is to:",
    stemAr: "في 2026 تكتشف دلتا أن مخزون ٢٠٢٥ الختامي كان مُبالغًا فيه بمقدار ٧٠٠ ألف جنيه، والخطأ جوهري. وفق IAS 8، المعالجة الصحيحة:",
    options: [
      "Correct it prospectively in the 2026 accounts",
      "Restate the 2025 comparatives and adjust opening retained earnings",
      "Ignore it — prior periods are never reopened",
      "Treat it as a change in accounting estimate",
    ],
    optionsAr: [
      "تصحيحه مستقبليًا في حسابات ٢٠٢٦",
      "إعادة عرض أرقام ٢٠٢٦ المقارنة وتسوية الأرباح المرحلة الافتتاحية",
      "تجاهله — فالفترات السابقة لا تفتح أبدًا",
      "اعتباره تغييرًا في تقدير محاسبي",
    ],
    answerIndex: 1,
    explanation:
      "IAS 8: material prior-period errors are corrected retrospectively — the comparative figures are restated and, where the error predates the earliest period presented, the opening balance of retained earnings (or another equity component) is adjusted.",
    explanationAr:
      "وفق IAS 8: تصحح أخطاء الفترات السابقة الجوهرية بأثر رجعي — يعاد عرض الأرقام المقارنة، وإن سبق الخطأ أقدم فترة معروضة تعدل الأرباح المرحلة الافتتاحية (أو مكوّن حقوق ملكية آخر).",
    standardTag: "IAS 8",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-17",
    stem: "After the reporting date but before authorisation, a court ruling obliged the entity to pay compensation for an accident that occurred BEFORE the year end. Under IAS 10 this is:",
    stemAr: "بعد تاريخ التقرير وقبل الاعتماد، قضت محكمة على المنشأة بتعويض عن حادث وقع قبل نهاية السنة. وفق IAS 10 يُعد هذا:",
    options: [
      "A non-adjusting event — only disclosure is required",
      "An adjusting event — the obligation existed at the reporting date",
      "Ignored entirely, as the ruling came later",
      "A contingent liability only, because the amount was unquantified before the ruling",
    ],
    optionsAr: [
      "حدثًا غير معدّل — يكفي الإفصاح",
      "حدثًا معدّلًا — فالالتزام كان قائمًا عند تاريخ التقرير",
      "متجاهَلًا كليًا لأن الحكم جاء لاحقًا",
      "التزامًا محتملًا فقط لأن المبلغ لم يكن مقدرًا قبل الحكم",
    ],
    answerIndex: 1,
    explanation:
      "IAS 10: conditions existing at the reporting date make later evidence adjusting — the accident created a present obligation at the year end, and the ruling merely quantifies it, so the provision is recognised in the current year's statements.",
    explanationAr:
      "وفق IAS 10: الظروف القائمة عند تاريخ التقرير تجعل الأدلة اللاحقة أحداثًا معدّلة — فالحادث أنشأ التزامًا قائمًا في نهاية السنة، والحكم لم يفعل سوى تقديره، فيُعترف بالمخصص في قوائم السنة ذاتها.",
    standardTag: "IAS 10",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-18",
    stem: "An asset cost EGP 500,000; tax depreciation is 25% reducing balance and accounting depreciation is 10% straight-line, both from year one. At the end of year one, the deferred tax position (at 22.5%) is:",
    stemAr: "أصل تكلفتُه ٥٠٠ ألف جنيه؛ الإهلاك الضريبي ٢٥٪ متناقص والمحاسبي ١٠٪ قسط ثابت، كلاهما من السنة الأولى. في نهاية السنة الأولى، مركز الضريبة المؤجلة (بمعدل ٢٢.٥٪) هو:",
    options: [
      "A deferred tax liability of EGP 16,875",
      "A deferred tax asset of EGP 16,875",
      "A deferred tax liability of EGP 75,000",
      "Nil — accelerated tax depreciation never creates deferred tax",
    ],
    optionsAr: [
      "التزام ضريبة مؤجلة بمقدار ١٦٨٧٥ جنيهًا",
      "أصل ضريبة مؤجلة بمقدار ١٦٨٧٥ جنيهًا",
      "التزام ضريبة مؤجلة بمقدار ٧٥٠٠٠ جنيهًا",
      "لا شيء — فالإهلاك الضريبي المتسارع لا ينشئ ضريبة مؤجلة أبدًا",
    ],
    answerIndex: 0,
    explanation:
      "Carrying amount = 500,000 − 50,000 = 450,000; tax base = 500,000 − 125,000 = 375,000. The carrying amount exceeds the tax base by 75,000 — a taxable temporary difference — so a DTL of 75,000 × 22.5% = 16,875 is recognised, because the taxpayer consumed the benefit faster than the accounts did.",
    explanationAr:
      "القيمة الدفترية ٥٠٠٠٠٠ − ٥٠٠٠٠ = ٤٥٠٠٠٠؛ والأساس الضريبي ٥٠٠٠٠٠ − ١٢٥٠٠٠ = ٣٧٥٠٠٠. تتجاوز القيمة الدفترية الأساس الضريبي بفارق ٧٥٠٠٠ — فرق مؤقت خاضع — فيُعترف بالتزام ضريبة مؤجلة ٧٥٠٠٠ × ٢٢.٥٪ = ١٦٨٧٥، لأن الممول استهلك المنفعة أسرع مما فعلت المحاسبة.",
    standardTag: "IAS 12",
    area: "accounting",
    difficulty: 3,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-19",
    stem: "An entity buys an aircraft with an expected life of 20 years. Every 5 years the engines must be replaced at significant cost. Under IAS 16, the engines should be:",
    stemAr: "تشتري منشأة طائرة عمرها المتوقع ٢٠ سنة، وكل ٥ سنوات تستبدل المحركات بتكلفة كبيرة. وفق IAS 16، ينبغي أن تكون المحركات:",
    options: [
      "Expensed as maintenance when replaced",
      "Depreciated as separate components over their own 5-year lives",
      "Capitalised into the airframe and depreciated over 20 years",
      "Held at fair value less costs to sell",
    ],
    optionsAr: [
      "مصروفات صيانة عند استبدالها",
      "مُهلكة كمكونات منفصلة على حياتها الذاتية البالغة ٥ سنوات",
      "مرسملة مع هيكل الطائرة ومهلكة على ٢٠ سنة",
      "محتفظًا بها بالقيمة العادلة ناقص تكاليف البيع",
    ],
    answerIndex: 1,
    explanation:
      "IAS 16: each part of an item of PPE with a cost significant relative to the total is depreciated separately, using its own useful life — engines with 5-year replacement cycles are components depreciated over 5 years, while the airframe runs 20.",
    explanationAr:
      "وفق IAS 16: يُهلك كل جزء من أصل ثابت تمثل تكلفته نسبة مؤثرة من الإجمالي إهلاكًا منفصلًا بعمره النافع الذاتي — فالمحركات ذات دورة استبدال خمسية مكونات تُهلك على ٥ سنوات بينما يُهلك الهيكل على ٢٠ سنة.",
    standardTag: "IAS 16",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-20",
    stem: "Under the revaluation model of IAS 16, an upward revaluation of an office building is recognised in:",
    stemAr: "وفق نموذج إعادة التقييم في IAS 16، يُعترف بارتفاع إعادة تقييم مبنى مكاتب في:",
    options: [
      "Profit or loss, in full",
      "Other comprehensive income and accumulated in a revaluation surplus within equity",
      "Retained earnings directly, bypassing OCI",
      "A statutory reserve required by company law",
    ],
    optionsAr: [
      "الأرباح أو الخسائر بالكامل",
      "الدخل الشامل الآخر ويجمع في فائض إعادة تقييم ضمن حقوق الملكية",
      "الأرباح المرحلة مباشرة دون المرور بالدخل الشامل الآخر",
      "احتياطي قانوني يوجبه قانون الشركات",
    ],
    answerIndex: 1,
    explanation:
      "IAS 16: an increase arising on revaluation goes to OCI and accumulates in a revaluation surplus (equity). It may be transferred to retained earnings as the surplus is realised (through use or disposal), never through profit or loss.",
    explanationAr:
      "وفق IAS 16: يذهب الزيد الناشئ عن إعادة التقييم إلى الدخل الشامل الآخر ويجمع في فائض إعادة تقييم (حقوق ملكية). ويجوز تحويله للأرباح المرحلة عند تحققه (بالاستخدام أو التصرف)، لا عبر الأرباح أو الخسائر أبدًا.",
    standardTag: "IAS 16",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-21",
    stem: "Nile Steel begins constructing a plant on 1 March; EGP 20 million of the EGP 60 million borrowed specifically for the project remains temporarily surplus until September, earning investment income. Under IAS 23, the borrowing cost capitalised for the surplus period is:",
    stemAr: "يبدأ النيل ستيل إنشاء مصنع في ١ مارس؛ ويظل ٢٠ مليونًا من ٦٠ مليونًا اقترضت خصيصًا للمشروع فائضًا مؤقتًا حتى سبتمبر، تدر دخل استثمار. وفق IAS 23، تكلفة الاقتراض المرسملة عن فترة الفائض هي:",
    options: [
      "The full borrowing cost on EGP 60 million",
      "The borrowing cost on EGP 60 million less the investment income earned on the temporary surplus",
      "Nil — surplus funds suspend all capitalisation",
      "Only the investment income, added to the asset",
    ],
    optionsAr: [
      "كامل تكلفة الاقتراض على ٦٠ مليونًا",
      "تكلفة الاقتراض على ٦٠ مليونًا مخصومًا منها دخل الاستثمار المحقق على الفائض المؤقت",
      "لا شيء — فالأموال الفائضة توقف الرسملة بالكامل",
      "دخل الاستثمار فقط، يضاف إلى الأصل",
    ],
    answerIndex: 1,
    explanation:
      "IAS 23: capitalise borrowing costs incurred during construction, net of any investment income earned on the temporary investment of specific borrowings pending their deployment — the income offsets the cost, it does not suspend capitalisation.",
    explanationAr:
      "وفق IAS 23: تُرسمل تكاليف الاقتراض خلال الإنشاء مخصومًا منها دخل الاستثمار الناشئ عن الاستثمار المؤقت للقروض المخصصة قبل توظيفها — فالدخل يعوض التكلفة ولا يوقف الرسملة.",
    standardTag: "IAS 23",
    area: "accounting",
    difficulty: 3,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-22",
    stem: "A cash-generating unit's carrying amount exceeds its recoverable amount by EGP 400,000, including goodwill of EGP 250,000 carried in that CGU. Under IAS 36, the impairment loss is allocated by:",
    stemAr: "تتجاوز القيمة الدفترية لوحدة توليد نقد ٤٠٠ ألف جنيه قيمتها القابلة للاسترداد، وتشمل شهرة قدرها ٢٥٠ ألفًا مسجلة في الوحدة. وفق IAS 36، يخصص الاضمحلال بـ:",
    options: [
      "Pro-rata over all assets of the CGU",
      "Reducing goodwill first, then the other assets of the CGU pro-rata",
      "Reducing the largest asset first",
      "Allocating it entirely to the smallest asset",
    ],
    optionsAr: [
      "بالتناسب على كل أصول الوحدة",
      "بخفض الشهرة أولًا ثم بقية أصول الوحدة بالتناسب",
      "بخفض أكبر أصل أولًا",
      "بتخصيصه كليًا على أصغر أصل",
    ],
    answerIndex: 1,
    explanation:
      "IAS 36: an impairment loss for a CGU is allocated first to goodwill, then to the other assets pro-rata on their carrying amounts — but never below the highest of fair value less costs of disposal, value in use (if determinable), and zero.",
    explanationAr:
      "وفق IAS 36: يخصص اضمحلال وحدة توليد النقد أولًا للشهرة ثم لبقية الأصول بالتناسب على قيمها الدفترية — دون أن ينزل بأي أصل عن الأعلى من قيمته العادلة ناقص تكاليف التصرف أو قيمته الاستخدامية (إن أمكن تحديدها) أو صفر.",
    standardTag: "IAS 36",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-23",
    stem: "Under IAS 36, goodwill acquired in a business combination must be tested for impairment:",
    stemAr: "وفق IAS 36، يجب اختبار اضمحلال الشهرة المتحصل عليها من اتحاد تجاري:",
    options: [
      "Only when events indicate possible impairment",
      "Annually, and whenever there is an indication of impairment",
      "Every three years",
      "Never — goodwill is amortised instead",
    ],
    optionsAr: [
      "فقط حين تشير أحداث إلى اضمحلال محتمل",
      "سنويًا، ومتى ظهر أي مؤشر على الاضمحلال",
      "كل ثلاث سنوات",
      "أبدًا — فالشهرة تُهلك بدلًا من ذلك",
    ],
    answerIndex: 1,
    explanation:
      "IAS 36 requires goodwill to be tested for impairment annually (regardless of indicators) and additionally whenever an indication exists; the annual test may be performed any time in the year, but consistently period to period.",
    explanationAr:
      "يوجب IAS 36 اختبار اضمحلال الشهرة سنويًا (بمعزل عن المؤشرات) وبإضافة كلما ظهر مؤشر؛ ويجوز إجراء الاختبار السنوي في أي وقت من السنة على أن يتسق من فترة لأخرى.",
    standardTag: "IAS 36",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-24",
    stem: "An entity is defending a lawsuit; its lawyers assess a possible (but not probable) outflow. Under IAS 37, the entity should:",
    stemAr: "تدافع منشأة عن دعوى قضائية؛ ويرى محاموها أن التدفق «ممكن» وليس «مرجحًا». وفق IAS 37، على المنشأة أن:",
    options: [
      "Recognise a provision for the full claim",
      "Disclose a contingent liability, but recognise nothing",
      "Neither recognise nor disclose anything",
      "Recognise half of the claim, as a prudent middle course",
    ],
    optionsAr: [
      "الاعتراف بمخصص بكامل المطالبة",
      "الإفصاح عن التزام محتمل دون اعتراف بأي مخصص",
      "لا اعتراف ولا إفصاح عن شيء",
      "الاعتراف بنصف المطالبة كحل وسط حذر",
    ],
    answerIndex: 1,
    explanation:
      "IAS 37: a provision is recognised only when an outflow is probable (>50%) and reliably measurable; a possible outflow is a contingent liability, which is disclosed (with a description and an estimate of its financial effect) but not recognised.",
    explanationAr:
      "وفق IAS 37: لا يُعترف بالمخصص إلا إذا كان التدفق مرجحًا (أكثر من ٥٠٪) وقابلًا للقياس بموثوقية؛ فالتدفق الممكن التزام محتمل يُفصح عنه (بوصفه وتقدير أثره المالي) دون اعتراف.",
    standardTag: "IAS 37",
    area: "accounting",
    difficulty: 1,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-25",
    stem: "A pharmaceutical company spends EGP 9 million on laboratory research and EGP 6 million on developing a proven drug formula (technically feasible, future benefits probable, and it intends to complete). Under IAS 38:",
    stemAr: "تنفق شركة أدوية ٩ ملايين على بحث مختبري و٦ ملايين على تطوير تركيبة دوائية مثبتة الجدوى فنيًا وعالية الاحتمال نفعًا وتعتزم الإتمام. وفق IAS 38:",
    options: [
      "Both are expensed as incurred",
      "Research EGP 9m is expensed; development EGP 6m is capitalised as an intangible",
      "Both are capitalised as intangibles",
      "Research is capitalised; development is expensed",
    ],
    optionsAr: [
      "كلاهما يُعترف به كمصروف عند نشوئه",
      "البحث ٩ ملايين مصروف؛ والتطوير ٦ ملايون يُرسمل كأصل غير ملموس",
      "كلاهما يرسمل كأصل غير ملموس",
      "البحث يرسمل؛ والتطوير يصرف",
    ],
    answerIndex: 1,
    explanation:
      "IAS 38: research expenditure is always expensed; development expenditure is capitalised when all six PIRATE criteria are demonstrated (probable benefits, intention, ability, resources, measurability, technical feasibility) — as described in the scenario.",
    explanationAr:
      "وفق IAS 38: مصروفات البحث تصرف دائمًا؛ أما التطوير فيرسمل متى أثبتت المنشأة معايير الاعتراف الستة (النفع المرجح والنية والقدرة والموارد والقياس والجدوى الفنية) — كما هو موصوف في السيناريو.",
    standardTag: "IAS 38",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-26",
    stem: "Delta acquires 80% of Zayn for EGP 10m cash. Zayn's identifiable net assets at fair value are EGP 11m. Non-controlling interests are measured at fair value of EGP 2.4m. Goodwill under IFRS 3 is:",
    stemAr: "تستحوذ دلتا على ٨٠٪ من زين مقابل ١٠ ملايين نقدًا. صافي أصول زين المحددة بالقيمة العادلة ١١ مليونًا، والحصص غير المسيطرة تقاس بالقيمة العادلة ٢.٤ مليون. الشهرة وفق IFRS 3:",
    options: [
      "EGP 1.4 million",
      "EGP 1.2 million",
      "EGP 1.0 million",
      "Nil — goodwill cannot arise on a bargain purchase",
    ],
    optionsAr: [
      "١.٤ مليون جنيه",
      "١.٢ مليون جنيه",
      "١.٠ مليون جنيه",
      "لا شيء — فالشهرة لا تنشئ عن شراء برخص سوقي",
    ],
    answerIndex: 0,
    explanation:
      "IFRS 3 (NCI at fair value): goodwill = consideration 10.0 + NCI at fair value 2.4 − identifiable net assets at fair value 11.0 = 1.4m. Under the proportionate method the NCI would be 20% × 11.0 = 2.2, giving goodwill of 10.0 + 2.2 − 11.0 = 1.2m — option B — so the measurement choice for NCI matters.",
    explanationAr:
      "وفق IFRS 3 (الحصص بالقيمة العادلة): الشهرة = المقابل ١٠ + الحصص بالقيمة العادلة ٢.٤ − صافي الأصول المحددة بالقيمة العادلة ١١ = ١.٤ مليون. وبطريقة النسبة تكون الحصص ٢٠٪ × ١١ = ٢.٢ فتكون الشهرة ١٠ + ٢.٢ − ١١ = ١.٢ مليون (الخيار ب) — فاختيار قياس الحصص مؤثر.",
    standardTag: "IFRS 3",
    area: "accounting",
    difficulty: 3,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-27",
    stem: "An entity classifies a production line as held for sale on 1 July. Its carrying amount is EGP 800,000, fair value less costs to sell is EGP 730,000. Under IFRS 5, the measurement and depreciation treatment are:",
    stemAr: "تصنف منشأة خط إنتاج بأنه محتفظ به للبيع في ١ يوليو. قيمته الدفترية ٨٠٠ ألف وقيمته العادلة ناقص تكاليف البيع ٧٣٠ ألفًا. وفق IFRS 5، المعالجة القياسية والإهلاكية:",
    options: [
      "Keep depreciating; measure at the lower of carrying amount and FV−CTS (write down to 730,000)",
      "Stop depreciation; measure at the lower of carrying amount and FV−CTS (write down to 730,000)",
      "Stop depreciation and keep it at 800,000",
      "Continue depreciation and keep it at 800,000 until sold",
    ],
    optionsAr: [
      "مواصلة الإهلاك؛ والقياس بالأدنى من الدفترية والعادلة ناقص التكاليف (تخفيض إلى ٧٣٠ ألفًا)",
      "إيقاف الإهلاك؛ والقياس بالأدنى من الدفترية والعادلة ناقص التكاليف (تخفيض إلى ٧٣٠ ألفًا)",
      "إيقاف الإهلاك والبقاء على ٨٠٠ ألف",
      "مواصلة الإهلاك والبقاء على ٨٠٠ ألف حتى البيع",
    ],
    answerIndex: 1,
    explanation:
      "IFRS 5: a held-for-sale asset stops being depreciated from classification, and is measured at the lower of its carrying amount and fair value less costs to sell — here 730,000, with a 70,000 write-down recognised in profit or loss.",
    explanationAr:
      "وفق IFRS 5: يتوقف إهلاك الأصل المحتفظ به للبيع من لحظة التصنيف، ويقاس بالأدنى من قيمته الدفترية وقيمته العادلة ناقص تكاليف البيع — هنا ٧٣٠ ألفًا مع اعتراف بانخفاض ٧٠ ألفًا في الأرباح أو الخسائر.",
    standardTag: "IFRS 5",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-28",
    stem: "A bank investment portfolio is held to collect contractual cash flows (interest and principal) AND to sell bonds opportunistically. Under IFRS 9, the appropriate classification is:",
    stemAr: "محفظة استثمار بنكية تُحاز بهدف تحصيل التدفقات التعاقدية (فائدة وأصل) وبهدف بيع السندات عند الفرص. وفق IFRS 9، التصنيف الملائم:",
    options: [
      "Amortised cost, because collections dominate",
      "Fair value through other comprehensive income (FVOCI) — the business model includes both collecting and selling",
      "Fair value through profit or loss, always, for all bonds",
      "Held to maturity accounting",
    ],
    optionsAr: [
      "التكلفة المطفأة، لأن التحصيل هو الغالب",
      "القيمة العادلة عبر الدخل الشامل الآخر — فنموذج الأعمال يجمع التحصيل والبيع",
      "القيمة العادلة عبر الأرباح أو الخسائر دائمًا لكل السندات",
      "محاسبة محتفظ به حتى الاستحقاق",
    ],
    answerIndex: 1,
    explanation:
      "IFRS 9: a 'hold to collect and sell' business model with SPPI-contractual cash flows → FVOCI. Pure hold-to-collect → amortised cost; a trading model (or failing SPPI) → FVTPL. 'Held to maturity' is an IAS 39 term that no longer exists.",
    explanationAr:
      "وفق IFRS 9: نموذج «التحصيل والبيع» مع تدفقات تعاقدية من نوع الأصل والفائدة فقط → القيمة العادلة عبر الدخل الشامل الآخر. فالتحصيل البحت للتكلفة المطفأة، والتداول (أو إخفاق اختبار SPPI) للقيمة العادلة عبر الأرباح. أما «الاحتفاظ حتى الاستحقاق» فمصطلح IAS 39 زائل.",
    standardTag: "IFRS 9",
    area: "accounting",
    difficulty: 3,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-29",
    stem: "An online marketplace sells third-party sellers' goods, charging a 10% commission on each sale; goods never pass through its inventory risk. Under IFRS 15, revenue should be recognised:",
    stemAr: "يبيع متجر إلكتروني سلعًا لبائعين خارجين مقابل عمولة ١٠٪ من كل عملية؛ والسلع لا تمر بمخاطر مخزونه قط. وفق IFRS 15، يُعترف بالإيراد:",
    options: [
      "Gross — the full sale price as revenue, with the sellers' share as cost of sales",
      "Net — only the commission, because it is an agent",
      "Half gross, half net",
      "Nothing until the return period of every buyer ends",
    ],
    optionsAr: [
      "بإجمالي سعر البيع كاملًا كإيراد، وحصة البائعين تكلفة مباعات",
      "بالصافي — العمولة فقط، لأنه وكيل",
      "نصف بإجمالي ونصف بصافي",
      "لا شيء حتى تنتهي فترة استرداد كل مشترٍ",
    ],
    answerIndex: 1,
    explanation:
      "IFRS 15: an entity that does not control the goods before transfer (no inventory risk, no pricing discretion) is an agent and recognises only its fee — the 10% commission — as revenue; the gross presentation belongs to the principal sellers.",
    explanationAr:
      "وفق IFRS 15: المنشأة التي لا تسيطر على السلع قبل نقلها (لا مخاطر مخزون ولا سلطة تسعير) وكيل تعترف بأجرها فقط — العمولة ١٠٪ — كإيراد؛ فالعرض الإجمالي من حق البائعين الأصليين.",
    standardTag: "IFRS 15",
    area: "accounting",
    difficulty: 2,
    source: "ACCA FR past paper (adapted)",
  },
  {
    code: "FR-P1-30",
    stem: "Compared with operating lease accounting (old IAS 17), a lessee capitalising a lease under IFRS 16 will typically show, over the FULL lease term:",
    stemAr: "مقارنة بمعالجة التأجير التشغيلي القديمة (IAS 17)، المستأجر الذي يرسمل العقد وفق IFRS 16 سيعرض، على مدى مدة الإيجار كاملة:",
    options: [
      "A straight-line total expense, exactly as before",
      "A higher total expense, because interest is added",
      "A front-loaded expense pattern (interest declining as the liability amortises), with the same total as the straight-line rent",
      "A lower total expense, because depreciation stops",
    ],
    optionsAr: [
      "مصروفًا إجماليًا خطًّا مستقيمًا تمامًا كما قبل",
      "مصروفًا إجماليًا أعلى لإضافة الفوائد",
      "نمط مصروف مرتفع في أوله (الفائدة تنخفض مع استهلاك الالتزام) مع إجمالي مساوٍ لإيجار الخط المستقيم",
      "مصروفًا إجماليًا أدنى لتوقف الإهلاك",
    ],
    answerIndex: 2,
    explanation:
      "IFRS 16: the lessee books ROU depreciation (straight-line) plus interest on the lease liability (declining balance pattern) — total expense equals total lease payments, but it is front-loaded versus the old straight-line operating lease charge.",
    explanationAr:
      "وفق IFRS 16: يثبت المستأجر إهلاك حق الاستخدام (خط مستقيم) وفائدة على التزام الإيجار (تنخفض مع السداد) — فيساوي المصروف الإجمالي مدفوعات الإيجار كاملة، لكنه أثقل في أوله مقارنة بمصروف الخط المستقيم القديم.",
    standardTag: "IFRS 16",
    area: "accounting",
    difficulty: 3,
    source: "ACCA FR past paper (adapted)",
  },
]

/* ==================== ACCA SBR full extension (13–24) ==================== */

export const SBR_FULL: AccPaperSeedQ[] = [
  {
    code: "SBR-P1-13",
    stem: "A parent measures NCI at fair value. A CGU containing goodwill on the subsidiary's acquisition suffers impairment of EGP 500,000; goodwill attributable to the parent is EGP 600,000 and to NCI EGP 200,000. The loss allocated to NCI (full goodwill method) is:",
    stemAr: "تقيس الشركة الأم الحصص غير المسيطرة بالقيمة العادلة. تعاني وحدة توليد نقد تحمل شهرة الاستحواذ اضمحلالًا قدره ٥٠٠ ألف؛ وحصة الأم من الشهرة ٦٠٠ ألف وحصة غير المسيطرين ٢٠٠ ألف. الحصة المخصصة لغير المسيطرين (طريقة الشهرة الكاملة):",
    options: [
      "Nil — NCI never shares goodwill impairment",
      "EGP 125,000 (one quarter of the loss)",
      "EGP 100,000 only",
      "EGP 250,000",
    ],
    optionsAr: [
      "لا شيء — فغير المسيطرين لا يشاركون في اضمحلال الشهرة",
      "١٢٥ ألف جنيه (ربع الاضمحلال)",
      "١٠٠ ألف جنيه فقط",
      "٢٥٠ ألف جنيهًا",
    ],
    answerIndex: 1,
    explanation:
      "With full goodwill (NCI at FV), impairment of the CGU's goodwill is shared between the parent and NCI in proportion to their goodwill interests: 200/(600+200) × 500,000 = 125,000 to NCI. (Under the proportionate method, only the parent's share of goodwill exists and NCI takes nothing.)",
    explanationAr:
      "مع الشهرة الكاملة (الحصص بالقيمة العادلة) يتقاسم اضمحلال الشهرةَ الأمُّ وغيرُ المسيطرين بنسبة حصصهما فيها: ٢٠٠÷(٦٠٠+٢٠٠) × ٥٠٠٠٠٠ = ١٢٥ ألفًا لغير المسيطرين. (وبطريقة النسبة لا توجد إلا حصة الأم فيتحمل غير المسيطرين صفرًا.)",
    standardTag: "IAS 36 / IFRS 3",
    area: "accounting",
    difficulty: 3,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-14",
    stem: "On consolidation, PPE of a subsidiary was fair-valued UP by EGP 2m over its tax base, with deferred tax provided at 22.5%. The effect on consolidated goodwill (before any NCI adjustment) is:",
    stemAr: "عند التجميع، رُفعت القيمة العادلة لأصول ثابتة للشركة التابعة بمقدار ٢ مليون فوق أساسها الضريبي، مع اعتراف بضريبة مؤجلة بمعدل ٢٢.٥٪. الأثر على الشهرة المجملة (قبل أي تسوية لحصص غير المسيطرة):",
    options: [
      "Increase goodwill by EGP 2m",
      "Increase net assets by EGP 450,000",
      "Decrease goodwill by EGP 450,000 (net identifiable assets rise only by 1.55m)",
      "No effect — deferred tax is never consolidated on FV uplifts",
    ],
    optionsAr: [
      "زيادة الشهرة بمقدار ٢ مليون",
      "زيادة صافي الأصول بمقدار ٤٥٠ ألفًا",
      "نقص الشهرة بمقدار ٤٥٠ ألفًا (صافي الأصول المحددة لا يزيد إلا ١.٥٥ مليون)",
      "لا أثر — فالضريبة المؤجلة لا تُجمَّع على رفع القيم العادلة أبدًا",
    ],
    answerIndex: 2,
    explanation:
      "The FV uplift raises identifiable assets by 2.0m but creates a deferred tax liability of 450,000 (2.0m × 22.5%), so net identifiable assets rise by only 1.55m — and since goodwill = consideration + NCI − net identifiable assets, goodwill falls by 450,000.",
    explanationAr:
      "يرفع التعديلُ الأصولَ المحددة ٢ مليون لكنه ينشئ التزام ضريبة مؤجلة ٤٥٠ ألفًا (٢م × ٢٢.٥٪)، فيرتفع صافي الأصول المحددة ١.٥٥ مليون فقط — وبما أن الشهرة = المقابل + الحصص − صافي الأصول المحددة، تنقص الشهرة ٤٥٠ ألفًا.",
    standardTag: "IFRS 3 / IAS 12",
    area: "accounting",
    difficulty: 3,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-15",
    stem: "An Egyptian group's Turkish subsidiary trades in lira, finances itself locally, and remits profits in euros. Its functional currency under IAS 21 is:",
    stemAr: "شركة تابعة تركية لمجموعة مصرية تتاجر بالليرة وتطور نفسها محليًا وتوزع أرباحها باليورو. عملتها الوظيفية وفق IAS 21:",
    options: [
      "The euro, because remittances set the currency",
      "The Turkish lira — the currency of the primary economic environment",
      "The Egyptian pound, that of the parent",
      "Whatever the group chooses for convenience",
    ],
    optionsAr: [
      "اليورو، لأن التوزيعات هي من تحدد العملة",
      "الليرة التركية — عملة البيئة الاقتصادية الأولية",
      "الجنيه المصري، عملة الشركة الأم",
      "ما تختاره المجموعة للتيسير",
    ],
    answerIndex: 1,
    explanation:
      "IAS 21: the functional currency is the currency of the primary economic environment in which the entity operates — sales, costs, financing and cash flows are all lira-driven. Neither the parent's currency nor the remittance currency dictates it.",
    explanationAr:
      "وفق IAS 21: العملة الوظيفية هي عملة البيئة الاقتصادية الأولية التي تعمل فيها المنشأة — والمبيعات والتكاليف والتمويل والتدفقات كلها بالليرة. فلا عملة الأم ولا عملة التوزيعات تفرضانها.",
    standardTag: "IAS 21",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-16",
    stem: "A convertible bond issues at par of EGP 5m; the liability component's fair value is EGP 4.6m. Under IAS 32, the equity component is:",
    stemAr: "سند قابل للتحويل صدر بالقيمة الاسمية ٥ ملايين؛ والقيمة العادلة لمكون الالتزام ٤.٦ مليون. وفق IAS 32، مكون حقوق الملكية:",
    options: [
      "EGP 5m, shown separately",
      "EGP 0.4m, presented within equity and never remeasured",
      "EGP 0.4m, remeasured each year",
      "Not separated — the whole instrument is a liability",
    ],
    optionsAr: [
      "٥ ملايين تُعرض ببند مستقل",
      "٤٠٠ ألف تُعرض ضمن حقوق الملكية ولا يعاد قياسها",
      "٤٠٠ ألف يعاد قياسها كل عام",
      "لا تفصل — فالأداة كلها التزام",
    ],
    answerIndex: 1,
    explanation:
      "IAS 32: split a compound instrument — first measure the liability component (residual approach: 4.6m), then the equity component is the residual 0.4m, carried in equity and NOT subsequently remeasured.",
    explanationAr:
      "وفق IAS 32: تفصل الأداة المركبة — يقاس مكون الالتزام أولًا (بالمتبقي: ٤.٦ مليون)، ثم يكون مكون حقوق الملكية متبقيًا قدره ٤٠٠ ألف يُحمل على حقوق الملكية ولا يعاد قياسه لاحقًا.",
    standardTag: "IAS 32",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-17",
    stem: "Under IFRS 9's expected credit loss model, a performing loan that has had no significant increase in credit risk since origination attracts:",
    stemAr: "وفق نموذج الخسائر الائتمانية المتوقعة في IFRS 9، قرض قائم لم يشهد زيادة جوهرية في مخاطر الائتمان منذ نشأته يستوجب:",
    options: [
      "A lifetime ECL allowance",
      "A 12-month ECL allowance",
      "No allowance until default occurs",
      "A credit-impaired allowance only when payments are 90 days overdue",
    ],
    optionsAr: [
      "مخصص خسائر للمدى الحياتي كاملًا",
      "مخصص خسائر لاثني عشر شهرًا",
      "لا مخصص حتى يقع التعثر",
      "مخصص ائتمان متعثر فقط عند تجاوز السداد ٩٠ يومًا",
    ],
    answerIndex: 1,
    explanation:
      "IFRS 9 three-stage model: Stage 1 (no significant deterioration) → 12-month ECL with interest on gross carrying amount; significant increase in credit risk or 90+ days overdue moves the asset to Stage 2 (lifetime ECL) or Stage 3 (credit-impaired).",
    explanationAr:
      "نموذج المراحل الثلاث في IFRS 9: المرحلة الأولى (لا تدهور جوهري) → خسائر ١٢ شهرًا وفائدة على القيمة الدفترية الإجمالية؛ والزيادة الجوهرية في المخاطر أو تجاوز ٩٠ يومًا تنقل الأصل للمرحلة الثانية (خسائر حياتية) أو الثالثة (متعثر).",
    standardTag: "IFRS 9",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-18",
    stem: "An equity-settled share-based payment plan with a service condition is measured under IFRS 2 at:",
    stemAr: "خطة دفع على أساس الأسهم تُسوى بأسهم وبشرط خدمة تقاس وفق IFRS 2 بـ:",
    options: [
      "Fair value at grant date, spread over the vesting period, not subsequently remeasured for fair value changes",
      "Fair value at each reporting date until vesting",
      "The intrinsic value at exercise date only",
      "Nil — equity-settled plans are never expensed",
    ],
    optionsAr: [
      "القيمة العادلة في تاريخ المنح، موزعة على فترة الاستحقاق، دون إعادة قياس لتغيرات القيمة العادلة",
      "القيمة العادلة في كل تاريخ إبلاغ حتى الاستحقاق",
      "القيمة الجوهرية عند التنفيذ فقط",
      "لا شيء — فخطط التسوي بالأسهم لا تصرف أبدًا",
    ],
    answerIndex: 0,
    explanation:
      "IFRS 2: equity-settled awards are measured at grant-date fair value and recognised over the vesting/service period; only the NUMBER of expected vesting shares is remeasured (for departures and non-market conditions), never the fair value per share.",
    explanationAr:
      "وفق IFRS 2: تقاس المنح المسواة بأسهم بقيمتها العادلة يوم المنح ويُعترف بها على فترة الخدمة؛ ولا يعاد قياس إلا عدد الأسهم المتوقع استحقاقها (للمغادرة والشروط غير السوقية)، لا القيمة العادلة للسهم أبدًا.",
    standardTag: "IFRS 2",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-19",
    stem: "A defined benefit plan's actuarial gains and losses, under IAS 19, are recognised in:",
    stemAr: "الأرباح والخسائر الاكتوارية لخطة مزايا محددة تعالج وفق IAS 19 بالاعتراف بها في:",
    options: [
      "Profit or loss, immediately",
      "Other comprehensive income, with no recycling to profit or loss",
      "Retained earnings directly, without presentation anywhere",
      "A provision and released over the employees' remaining service",
    ],
    optionsAr: [
      "الأرباح أو الخسائر فورًا",
      "الدخل الشامل الآخر، دون إعادة تدوير للأرباح أو الخسائر",
      "الأرباح المرحلة مباشرة دون عرض في أي مكان",
      "مخصص يُسترد على مدى الخدمة المتبقية للموظفين",
    ],
    answerIndex: 1,
    explanation:
      "IAS 19: remeasurements (actuarial gains/losses and return on plan assets excluding amounts in net interest) go to OCI in the period they occur, accumulate in the statement of financial position, and are NEVER recycled through profit or loss.",
    explanationAr:
      "وفق IAS 19: إعادات القياس (الأرباح والخسائر الاكتوارية وعائد أصول الخطة عدا صافي الفائدة) تذهب للدخل الشامل الآخر في فترتها، وتتراكم في المركز المالي، ولا يعاد تدويرها عبر الأرباح أو الخسائر أبدًا.",
    standardTag: "IAS 19",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-20",
    stem: "A subsidiary in financial difficulty is now owned 55% after a disposal of shares, yet the parent controls it through board seats and a shareholder agreement. Under IFRS 10, the reporting consequence is:",
    stemAr: "شركة تابعة متعثرة أصبحت مملوكة بنسبة ٥٥٪ بعد طرح حصة من الأسهم، ومع ذلك تسيطر عليها الأم عبر مقاعد المجلس واتفاقية مساهمين. وفق IFRS 10، النتيجة التقريرية:",
    options: [
      "Consolidate — control, not the percentage, determines consolidation",
      "Equity-account — ownership fell below a bright-line 75%",
      "Consolidate only if ownership exceeds 50% of voting power AND operational involvement",
      "Fair value through profit or loss automatically",
    ],
    optionsAr: [
      "التجميع — فالسيطرة لا النسبة هي التي تحدد التجميع",
      "حقوق الملكية — لأن الملكية هبطت دون حد ٧٥٪",
      "التجميع فقط إذا تجاوزت الملكية ٥٠٪ من حقوق التصويت مع انخراط تشغيلي",
      "القيمة العادلة عبر الأرباح تلقائيًا",
    ],
    answerIndex: 0,
    explanation:
      "IFRS 10: an investor controls an investee when it has power (substantive rights — here board seats plus the agreement), exposure to variable returns, and the ability to use power over returns. Control at 55% or 30% alike requires full consolidation; IFRS 10 abolished bright-line thresholds.",
    explanationAr:
      "وفق IFRS 10: يسيطر المستثمر على المستثمَر فيه متى كانت له سلطة (حقوق جوهرية — هنا المجلس والاتفاقية) وانكشاف على عوائد متغيرة وقدرة على استخدام السلطة للتأثير فيها. فالسيطرة بنسبة ٥٥٪ أو ٣٠٪ سواء توجب التجميع الكامل؛ وقد ألغى IFRS 10 الحدود النسبية.",
    standardTag: "IFRS 10",
    area: "accounting",
    difficulty: 3,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-21",
    stem: "Under IFRS 18 (Presentation and Disclosure in Financial Statements, effective 2027), the income statement's operating category is:",
    stemAr: "وفق IFRS 18 (العرض والإفصاح في القوائم المالية، الساري من ٢٠٢٧)، فئة «التشغيل» في قائمة الدخل:",
    options: [
      "Optional, at the entity's discretion",
      "Mandatory, with defined operating, investing and financing categories and new defined subtotals",
      "Only for financial institutions",
      "A replacement for the statement of cash flows",
    ],
    optionsAr: [
      "اختيارية بحسب تقدير المنشأة",
      "إلزامية، مع فئات محددة للتشغيل والاستثمار والتمويل ومجاميع فرعية جديدة معرفة",
      "للمؤسسات المالية فقط",
      "بديل لقائمة التدفقات النقدية",
    ],
    answerIndex: 1,
    explanation:
      "IFRS 18 requires entities to present expenses and income in operating, investing and financing categories with specified subtotals (operating profit; profit before financing and income taxes), bringing income-statement discipline closer to the cash-flow structure — cash flow reporting itself is unaffected.",
    explanationAr:
      "يوجب IFRS 18 عرض الإيرادات والمصروفات في فئات التشغيل والاستثمار والتمويل مع مجاميع فرعية محددة (الربح التشغيلي؛ الربح قبل التمويل وضرائب الدخل)، مقربًا انضباط قائمة الدخل من بنية التدفقات النقدية — دون مساس بإعداد قائمة التدفقات ذاتها.",
    standardTag: "IFRS 18",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-22",
    stem: "During consolidation, the parent sold goods to its 80%-owned subsidiary at a markup of EGP 200,000; a quarter remain unsold at year end. The consolidation adjustment and NCI share of the unrealised profit are:",
    stemAr: "خلال التجميع، باعت الأم بضائع لشركتها التابعة المملوكة ٨٠٪ بهامش ٢٠٠ ألف جنيه، وبقي ربعها غير مباع في نهاية السنة. تسوية التجميع وحصة غير المسيطرين من الربح غير المحقق:",
    options: [
      "Eliminate profit of EGP 50,000 from inventory and retained earnings; attribute EGP 10,000 to NCI",
      "Eliminate profit of EGP 200,000; attribute EGP 40,000 to NCI",
      "Eliminate EGP 50,000; attribute nothing to NCI because the parent sold",
      "No elimination — the goods were sold at arm's length",
    ],
    optionsAr: [
      "استبعاد ربح ٥٠ ألفًا من المخزون والأرباح المرحلة؛ وإسناد ١٠ آلاف لغير المسيطرين",
      "استبعاد ٢٠٠ ألف؛ وإسناد ٤٠ ألفًا لغير المسيطرين",
      "استبعاد ٥٠ ألفًا دون إسناد شيء لغير المسيطرين لأن البائع هي الأم",
      "لا استبعاد — فالسلع بيعت بين غريبين",
    ],
    answerIndex: 2,
    explanation:
      "Unrealised profit = 25% × 200,000 = 50,000 held in closing inventory, eliminated against inventory and retained earnings. Because the sale is DOWNSTREAM (parent sold to the subsidiary), the entire elimination is charged to the parent — NCI takes no share; the 20% attribution would apply only to UPSTREAM sales by the subsidiary.",
    explanationAr:
      "الربح غير المحقق = ٢٥٪ × ٢٠٠٠٠٠ = ٥٠٠٠٠ باقية في المخزون الختامي، تُستبعد من المخزون والأرباح المرحلة. ولأن البيع هابط (من الأم إلى التابعة) يُحمّل الاستبعاد كله على الأم — فلا يتحمل غير المسيطرين شيئًا؛ وإسناد ٢٠٪ يخص البيع الصاعد من التابعة فقط.",
    standardTag: "IFRS 10 / IAS 27",
    area: "accounting",
    difficulty: 3,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-23",
    stem: "A contract to lease a warehouse becomes onerous: unavoidable costs exceed economic benefits by EGP 900,000. Under IAS 37, the entity recognises:",
    stemAr: "أصبح عقد إيجار مستودع مرهقًا: التكاليف الحتمية تتجاوز المنافع الاقتصادية بمقدار ٩٠٠ ألف. وفق IAS 37، تعترف المنشأة بـ:",
    options: [
      "Nothing until the lease payments are actually made",
      "A provision for the onerous contract at the lower of the net cost of fulfilling and the penalty for withdrawing",
      "A contingent liability only",
      "An intangible asset for future benefits",
    ],
    optionsAr: [
      "لا شيء حتى سداد أقساط الإيجار فعلًا",
      "مخصص للعقد المرهق بأدنى تكلفة الوفاء وغرامة الانسحاب",
      "التزام محتمل فقط",
      "أصل غير ملموس للمنافع المستقبلية",
    ],
    answerIndex: 1,
    explanation:
      "IAS 37: the unavoidable net cost of an onerous contract is provided for immediately, measured at the lower of the cost of fulfilling the contract and any compensation payable for failing to fulfil it — the warehouse example is the standard's own illustration.",
    explanationAr:
      "وفق IAS 37: يُعترف فورًا بمخصص صافي التكلفة الحتمية للعقد المرهق، مقاسًا بأدنى تكلفة الوفاء بالعقد والتعويض المستحق عن عدم الوفاء — ومثال المستودع هو توضيح المعيار نفسه.",
    standardTag: "IAS 37",
    area: "accounting",
    difficulty: 2,
    source: "ACCA SBR past paper (adapted)",
  },
  {
    code: "SBR-P1-24",
    stem: "Which statement about the CONSOLIDATED statement of cash flows is correct?",
    stemAr: "أي عبارة عن قائمة التدفقات النقدية المجمعة صحيحة؟",
    options: [
      "Dividends paid to non-controlling shareholders appear within financing activities",
      "Dividends paid to NCI appear as distributions to the group's owners",
      "Only the parent's own cash flows are consolidated",
      "Dividends paid to NCI are eliminated as intra-group",
    ],
    optionsAr: [
      "التوزيعات المدفوعة لمساهمي الأقلية تظهر ضمن الأنشطة التمويلية",
      "توزيعات الأقلية تظهر كتوزيعات على مالكي المجموعة",
      "لا تُجمَّع إلا تدفقات الأم وحدها",
      "توزيعات الأقلية تستبعد كتدفقات داخل المجموعة",
    ],
    answerIndex: 0,
    explanation:
      "In the consolidated cash flow statement, dividends paid to NCI are financing outflows of the group (cash leaves the group economic entity); dividends paid to the parent's own shareholders are outside the group entirely and never appear.",
    explanationAr:
      "في قائمة التدفقات المجمعة، توزيعات الأقلية تدفقات خارجة ضمن الأنشطة التمويلية للمجموعة (النقد يغادر الكيان الاقتصادي)؛ أما توزيعات مساهمي الأم أنفسهم فخارج المجموعة ولا تظهر أبدًا.",
    standardTag: "IAS 7",
    area: "accounting",
    difficulty: 3,
    source: "ACCA SBR past paper (adapted)",
  },
]
