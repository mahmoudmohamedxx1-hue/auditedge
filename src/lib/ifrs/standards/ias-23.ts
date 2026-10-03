/** IAS 23 — Borrowing Costs */

import type { Standard } from "../types"

export const IAS_23: Standard = {
  code: "IAS 23",
  title: { en: "Borrowing Costs", ar: "تكاليف الاقتراض" },
  topic: "revenue",
  effective: { en: "Effective 1 Jan 2009 (revised — capitalisation mandatory)", ar: "سارٍ من ١ يناير ٢٠٠٩ (بعد المراجعة — الرسملة إلزامية)" },
  blocks: [
    { kind: "h", text: { en: "Objective & the capitalisation principle", ar: "الهدف ومبدأ الرسملة" } },
    {
      kind: "p",
      text: {
        en: "The 2007 revision removed the choice: borrowing costs DIRECTLY ATTRIBUTABLE to the acquisition, construction or production of a QUALIFYING ASSET must be CAPITALISED as part of that asset's cost; all other borrowing costs are expense in the period incurred. The matching logic: an asset that takes time to build accrues finance while it is being made — the finance belongs to its cost as much as the bricks do.",
        ar: "أزالت مراجعة ٢٠٠٧ الخيار: تكاليف الاقتراض المرتبطة مباشرة باقتناء أو إنشاء أو إنتاج أصل مؤهل تُرسمل ضمن تكلفته؛ وما عداها مصروف للفترة. ومنطق المقابلة: الأصل الذي يحتاج وقتًا لبنائه تتراكم عليه تكلفة تمويل وهو يُصنع — فالتمويل من تكلفته كالطوب تمامًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Pre-2008 the standard offered capitalisation as a BENCHMARK treatment with immediate expensing as the allowed alternative — the revision deleted the alternative, so 'policy choice to expense' is now a violation to spot, not a choice to make.",
        ar: "قبل ٢٠٠٨ كان المعيار يعرض الرسملة معالجة مرجعية مع المصروف الفوري بديلًا جائزًا — فحذفت المراجعة البديل، وصار «خيار السياسة بالمصروف» مخالفة تُكتشف لا خيارًا يُتخذ.",
      },
    },
    { kind: "h", text: { en: "Scope & key definitions", ar: "النطاق والتعاريف الأساسية" } },
    {
      kind: "p",
      text: {
        en: "IAS 23 applies to ALL borrowing costs — bank overdrafts, short-term and long-term debt, lease liabilities — whatever their form. Two definitions drive everything: BORROWING COSTS (interest and the other costs of having debt) and a QUALIFYING ASSET (one that necessarily takes a substantial period to get ready). A cost qualifies for capitalisation only while it is AVOIDABLE — it would have been avoided if the asset had not been made. The entity's own policy cannot widen the pool: 'we borrow generally, so all interest is attributable to the plant' fails the avoidability test.",
        ar: "يطبق IAS 23 على كل تكاليف الاقتراض — السحب المكشوف والديون قصيرة وطويلة الأجل والتزامات الإيجار — أيًّا كان شكلها. وتعريفان يقودان كل شيء: تكاليف الاقتراض (الفوائد وما دونها من كلفة وجود الدين) والأصل المؤهل (ما يستلزم بالضرورة فترة جوهرية ليجهز). ولا تُرسمل التكلفة إلا وهي قابلة للتفادي — أي ما كانت ستُتجنب لولا صنع الأصل. وسياسة المنشأة لا توسع الوعاء: فقولهم «نقترض عمومًا فكل الفوائد تعزى للمصنع» يسقط من اختبار القابلية للتفادي.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "BORROWING COSTS = interest expense computed by the EFFECTIVE INTEREST method (not the coupon!) + amortisation of accessory costs, discounts and premiums + ancillary costs (loan origination fees) + the interest element of IFRS 16 lease liabilities + exchange differences to the extent they represent an adjustment of interest costs", ar: "تكاليف الاقتراض = مصروف الفوائد بطريقة الفائدة الفعلية (لا الكوبون!) + استنفاد التكاليف الملحقة والخصومات والعلاوات + الرسوم الملحقة (رسوم إصدار القرض) + عنصر الفائدة في التزامات الإيجار وفق IFRS 16 + فروق العملة بقدر ما تمثل تعديلًا للفوائد" },
        { en: "NOT borrowing costs for capitalisation: dividend costs of equity, FX differences beyond the interest element, and the time-value unwind on decommissioning provisions — that last one joins the pool only while the qualifying asset is being constructed (IAS 16/IAS 37 interface)", ar: "ليست تكاليف اقتراض للرسملة: كلفة توزيعات حقوق الملكية، وفروق العملة فوق عنصر الفائدة، وفك الخصم على مخصصات الفك — وهذا الأخير ينضم للوعاء فقط أثناء إنشاء الأصل المؤهل (تقاطع IAS 16/IAS 37)" },
        { en: "QUALIFYING ASSET = an asset that necessarily takes a SUBSTANTIAL PERIOD of time to get ready for intended use or sale", ar: "الأصل المؤهل = أصل يستلزم بالضرورة فترة جوهرية ليصبح جاهزًا لاستخدامه أو بيعه المقصودين" },
        { en: "CAPITALISATION RATE = the weighted-average borrowing cost of the GENERAL pool applied to the cumulative expenditure on the asset", ar: "معدل الرسملة = متوسط تكلفة الاقتراض المرجح للوعاء العام مطبقًا على الإنفاق التراكمي على الأصل" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The pool is measured on the EFFECTIVE INTEREST method, not the cash coupon: a zero-coupon bond's entire EIR charge is the borrowing cost (nothing was 'paid' in interest during the year). Discount amortisation and origination fees ride the same engine — compute the year's EIR charge before deciding what is capitalisable.",
        ar: "يقاس الوعاء بطريقة الفائدة الفعلية لا بكوبون النقد: فكامل عبء الفائدة الفعلية لسند بدون كوبون تكلفة اقتراض (لم يُدفع «فائدة» خلال السنة). واستنفاد الخصومات ورسوم الإصدار في المحرك ذاته — احسب عبء الفائدة الفعلية للسنة قبل تقرير القابل للرسملة.",
      },
    },
    { kind: "h", text: { en: "Qualifying assets", ar: "الأصول المؤهلة" } },
    {
      kind: "tree",
      root: { en: "What is a QUALIFYING asset?", ar: "ما الأصل المؤهل؟" },
      branches: [
        {
          when: { en: "An asset that NECESSARILY TAKES A SUBSTANTIAL PERIOD OF TIME to get ready for its intended use or sale", ar: "أصل يستلزم بالضرورة فترة جوهرية ليصبح جاهزًا لاستخدامه أو بيعه المقصودين" },
          then: { en: "Qualifies: buildings, power plants, intangibles under development, inventories requiring long maturation (wine, cheese) or long construction (ships, aircraft, bespoke machines)", ar: "مؤهل: مبانٍ، محطات، أصول غير ملموسة تحت التطوير، مخزون يتطلب تعتيقًا أو إنشاءً طويلًا (نبيذ، أجبان، سفن، طائرات، آلات مصنوعة خصيصًا)", red: true },
        },
        {
          when: { en: "Assets produced REPEATEDLY in quantity over SHORT periods (normal inventories)", ar: "أصول تُنتج تكرارًا وبكميات خلال فترات قصيرة (المخزون الاعتيادي)" },
          then: { en: "NOT qualifying — the finance is an ordinary cost of the working capital cycle", ar: "غير مؤهل — فالتمويل تكلفة اعتيادية لدورة رأس المال العامل", red: true },
        },
        {
          when: { en: "An asset already READY for its intended use — even if construction invoices keep arriving later", ar: "أصل جاهز أصلًا لاستخدامه المقصود — ولو استمرت فواتير الإنشاء تصل لاحقًا" },
          then: { en: "Capitalisation has already STOPPED; the late invoices change nothing", ar: "توقفت الرسملة بالفعل؛ والفواتير المتأخرة لا تغير شيئًا", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "'Substantial period' is NOT defined — it is judgement, with roughly a year as the usual working guide, not a bright line. The test is the TIME the asset needs, not the entity's patience: a machine off the shelf is not qualifying however long the delivery queue, while a custom-built one is. The exam's favourite contrast: the FACTORY took years to build (its construction qualifies) while the ordinary goods it will produce repeatedly never do.",
        ar: "«الفترة الجوهرية» غير معرفة — إنها اجتهاد، والمرشد المعتاد نحو سنة لا حد قاطع. والاختبار هو الزمن الذي يحتاجه الأصل لا صبر المنشأة: فماكينة من الرف ليست مؤهلة مهما طال طابور التسليم، والمصنوعة خصيصًا مؤهلة. والتباين الامتحاني المحبب: المصنع استغرق سنوات لبنائه (إنشاؤه مؤهل) بينما البضائع الاعتيادية التي سينتجها تكرارًا لا تؤهل أبدًا.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "QUALIFY: construction of a plant or office block · power generation facilities · ships, aircraft, bespoke machinery · intangible development programmes (a multi-year platform build) · inventories with long maturation (whisky, cheese) or long production runs", ar: "مؤهلة: إنشاء مصنع أو مبنى مكاتب · محطات توليد · سفن وطائرات وآلات خاصة · برامج تطوير أصول غير ملموسة (بناء منصة لسنوات) · مخزون بتعتيق طويل (ويسكي، أجبان) أو خطوط إنتاج ممتدة" },
        { en: "NOT qualifying: ordinary merchandise and manufactured goods · assets ready 'off the shelf' · financial assets · inventories produced routinely over short periods", ar: "غير مؤهلة: البضائع والمنتجات المصنعة الاعتيادية · الأصول الجاهزة «من الرف» · الأصول المالية · المخزون المنتج اعتياديًا في فترات قصيرة" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Intangibles can be qualifying assets too: a multi-year software platform or a development programme funded by borrowings runs the same machinery, and the capitalised costs later amortise under IAS 38. The one discipline that changes: the six development criteria of IAS 38 decide what expenditure counts at all — IAS 23 only decides how the finance on that expenditure is treated.",
        ar: "والأصول غير الملموسة قد تكون مؤهلة كذلك: فمنصة برمجية لسنوات أو برنامج تطوير ممول باقتراض يسير بالآلية ذاتها، والتكاليف المرسملة تستنفد لاحقًا وفق IAS 38. والانضباط الوحيد المتغير: معايير التطوير الستة في IAS 38 هي التي تقرر أصلًا أي إنفاق يُحتسب — أما IAS 23 فيقرر معاملة التمويل على ذلك الإنفاق فحسب.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Repeatedly-produced inventory NEVER qualifies — even when the factory that makes it took years. The qualifying-asset clock is per ASSET, and a working capital cycle is not an asset under construction.",
        ar: "المخزون المتكرر إنتاجه لا يؤهل أبدًا — ولو استغرق بناء مصنعه سنوات. فساعة الأصل المؤهل لكل أصل على حدة، ودورة رأس المال العامل ليست أصلًا تحت الإنشاء.",
      },
    },
    { kind: "h", text: { en: "The capitalisation window", ar: "نافذة الرسملة" } },
    {
      kind: "steps",
      title: { en: "Open, pause, close", ar: "افتح، علّق، أقفل" },
      items: [
        { en: "COMMENCE only when ALL three conditions hold together: (1) expenditure on the asset is being incurred, (2) borrowing costs are being incurred, (3) activities that prepare the asset for its intended use are IN PROGRESS", ar: "تبدأ فقط عند تحقق الثلاثة مجتمعة: (١) تكبد الإنفاق على الأصل، (٢) تكبد تكاليف الاقتراض، (٣) تواصل الأنشطة المُعدّة للأصل لاستخدامه المقصود" },
        { en: "DURING the window: capitalise the specific-borrowing costs (net of investment income on the temporary surplus) plus the general-pool rate applied to cumulative expenditure", ar: "أثناء النافذة: رسمل تكاليف القروض المحددة (بصافي دخل استثمار الفائض المؤقت) + معدل الوعاء العام على الإنفاق التراكمي" },
        { en: "SUSPEND during EXTENDED interruptions of active development (technical or administrative hold-ups, labour disputes) — expensing resumes for that stretch", ar: "علّق أثناء الانقطاعات الممتدة للتنفيذ النشط (تعطيلات فنية أو إدارية، نزاعات عمالية) — ويعود المصروف خلالها" },
        { en: "CEASE for each PART when substantially all the activities necessary to prepare that part are complete — the date it is ready for intended use", ar: "أقفل لكل جزء عند اكتمال جوهر الأنشطة اللازمة لإعداد ذلك الجزء — تاريخ جاهزيته للاستخدام المقصود" },
        { en: "Never capitalise MORE than the total borrowing costs actually incurred in the period — the cap", ar: "لا ترسمل أبدًا أكثر من إجمالي تكاليف الاقتراض المتكبدة فعليًا في الفترة — الحد الأقصى" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The window is expenditure-driven, not contract-driven: it opens the day the first qualifying payment or activity occurs and closes on the READY-FOR-INTENDED-USE date — not the completion-certificate date, not the final-invoice date, and not the first-day-of-production date if use could have started earlier. When an asset is completed in parts and each part is usable while work continues on the rest, capitalisation closes part by part.",
        ar: "النافذة يحركها الإنفاق لا العقد: تفتح يوم أول دفعة مؤهلة أو أول نشاط، وتُقفل بتاريخ الجاهزية للاستخدام المقصود — لا بتاريخ شهادة الإنجاز ولا الفاتورة الأخيرة ولا أول يوم إنتاج لو كان الاستخدام ممكنًا قبل ذلك. وحين يكتمل الأصل أجزاءً وكل جزء صالح للاستخدام بينما يستمر العمل في الباقي، تُقفل الرسملة جزءًا جزءًا.",
      },
    },
    {
      kind: "p",
      text: {
        en: "What of the spend BEFORE the window opens? Borrowing costs incurred before all three conditions are met are never capitalised — but the early expenditure is not wasted for the pool: once the activities start, the CUMULATIVE expenditure to date (land bought years earlier included) becomes the base on which the rate runs from commencement day forward. The costs of the idle waiting period stay expensed; the base does not.",
        ar: "فماذا عن الإنفاق قبل افتتاح النافذة؟ تكاليف الاقتراض المتكبدة قبل تحقق الشروط الثلاثة لا تُرسمل أبدًا — لكن الإنفاق المبكر ليس ضائعًا بالنسبة للوعاء: فمتى بدأت الأنشطة صار الإنفاق التراكمي حتى التاريخ (ومنه أرض اشتريت قبل سنين) وعاءً يجري عليه المعدل من يوم الافتتاح فصاعدًا. فتكاليف فترة الانتظار الخاملة تبقى مصروفًا، أما الوعاء فلا.",
      },
    },
    { kind: "h", text: { en: "Suspension during extended interruptions", ar: "التعطل أثناء الانقطاعات الممتدة" } },
    {
      kind: "tree",
      title: { en: "Construction paused — suspend or not?", ar: "توقف الإنشاء — تعليق أم لا؟" },
      root: { en: "Active development stops for a while", ar: "يتوقف التنفيذ النشط لفترة" },
      branches: [
        {
          when: { en: "An EXTENDED interruption NOT in the plan — strike, technical failure, administrative hold-up, dispute", ar: "انقطاع ممتد خارج الخطة — إضراب، تعطل فني، تعطيل إداري، نزاع" },
          then: { en: "SUSPEND capitalisation — the borrowing costs of that stretch are P&L finance costs", ar: "علّق الرسملة — فتكاليف الاقتراض في تلك الفترة مصروف تمويل بالأرباح", red: true },
        },
        {
          when: { en: "A SHORT interruption, or a pause that IS part of the plan — seasonal technical waits, wine maturing, planned phased construction", ar: "انقطاع قصير، أو توقف هو جزء من الخطة — انتظار تقني موسمي، تعتيق النبيذ، إنشاء مرحلي مخطط" },
          then: { en: "Keep capitalising — the asset is still 'in progress'", ar: "استمر في الرسملة — فالأصل «قيد التنفيذ»", red: true },
        },
        {
          when: { en: "The pause drags on so long the asset's prospects look impaired", ar: "يطول التوقف حتى تبدو آفاق الأصل متدنية" },
          then: { en: "Suspension PLUS an IAS 36 indicator — test the asset (its carrying amount includes borrowing costs capitalised to date)", ar: "تعليق + مؤشر IAS 36 — اختبر الأصل (وقيمته الدفترية تشمل التكاليف المرسملة حتى التاريخ)", red: true },
        },
      ],
    },
    {
      kind: "example",
      title: { en: "The strike window", ar: "نافذة الإضراب" },
      lines: [
        { en: "A 5m specific loan at 8% funds a two-year build (interest 400/yr); a strike halts active construction for 3 months", ar: "قرض محدد ٥ مليون بـ٨٪ يمول بناء سنتين (فوائد ٤٠٠ سنويًا)؛ وإضراب يوقف الإنشاء النشط ٣ أشهر" },
        { en: "Capitalised = 400 × 9/12 = 300 · expensed as finance cost = 400 × 3/12 = 100", ar: "المرسمل = ٤٠٠ × ٩÷١٢ = ٣٠٠ · والمصروف تمويلًا = ٤٠٠ × ٣÷١٢ = ١٠٠" },
        { en: "The 3 months were a seasonal planned pause? Then capitalise the full 400 — the plan decides, not the calendar", ar: "لو كانت الأشهر الثلاثة توقفًا موسميًا مخططًا؟ فرسمل الـ٤٠٠ كاملة — فالخطة تقرر لا التقويم" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Suspension logic is exam-tested with a strike: an IDLE 4-month halt = suspend; a 4-month SEASONAL technical pause written into the plan = no suspension. Read the scenario for whether the interruption is in the plan.",
        ar: "منطق التعطل امتحاني مع الإضرابات: توقف خامل ٤ أشهر = تعليق؛ و٤ أشهر تقنية موسمية مخططة في المشروع = لا تعليق. اقرأ في السيناريو هل الانقطاع داخل الخطة.",
      },
    },
    { kind: "h", text: { en: "Specific borrowings & the investment income offset", ar: "القروض المحددة وخصم دخل الاستثمار" } },
    {
      kind: "p",
      text: {
        en: "A borrowing drawn SPECIFICALLY for the asset is the easy case: capitalise the ACTUAL costs incurred on that borrowing during the window. The refinement is the temporary surplus: funds drawn but not yet spent sit in a deposit account earning interest — that investment income OFFSETS the capitalisable cost. It is not P&L income; it never touches the income statement while the window is open. The offset belongs to the specific-borrowing track only — the general pool does not get one.",
        ar: "الاقتراض المسحوب خصيصًا للأصل هو الحالة السهلة: رسمل التكاليف الفعلية على ذلك الاقتراض خلال النافذة. والتفصيل هو الفائض المؤقت: فالأموال المسحوبة غير المنفقة تقع في حساب وديعة تولد فوائد — وذلك الدخل يُخصم من التكلفة المرسملة. وهو ليس دخل أرباح؛ ولا يمس قائمة الدخل ما دامت النافذة مفتوحة. والخصم حصري بمسار القروض المحددة — لا نظير له في الوعاء العام.",
      },
    },
    {
      kind: "journal",
      title: { en: "Specific borrowing — interest, offset, net capitalised", ar: "قرض محدد — فوائد وخصم وصافي مرسمل" },
      rows: [
        { dr: { en: "PPE — qualifying asset (interest incurred on the specific loan)", ar: "ممتلكات — أصل مؤهل (فوائد القرض المحدد)" }, cr: { en: "Interest payable / loan account", ar: "فوائد مستحقة / حساب القرض" }, red: true },
        { dr: { en: "Cash — investment income on the drawn-but-unspent surplus", ar: "نقد — دخل استثمار الفائض المسحوب غير المنفق" }, cr: { en: "PPE — qualifying asset (OFFSET, reduces the capitalised cost)", ar: "ممتلكات — أصل مؤهل (خصم يخفض التكلفة المرسملة)" }, red: true },
        { dr: { en: "Finance cost (any portion outside the window — pre-activity or suspended)", ar: "مصروف تمويل (ما يقع خارج النافذة — قبل الأنشطة أو أثناء التعليق)" }, cr: { en: "Interest payable", ar: "فوائد مستحقة" } },
      ],
    },
    {
      kind: "example",
      title: { en: "Specific borrowing with surplus funds", ar: "قرض محدد مع فائض أموال" },
      lines: [
        { en: "4m drawn 1 Jan at 9% for a two-year build; spent 1.6m on 1 Jan and 2.4m on 1 Oct; the surplus earns 3%", ar: "سحب ٤ مليون في ١ يناير بـ٩٪ لبناء سنتين؛ أُنفق ١٫٦ مليون في ١ يناير و٢٫٤ مليون في ١ أكتوبر؛ والفائض يدر ٣٪" },
        { en: "Interest incurred = 4m × 9% = 360", ar: "الفوائد المتكبدة = ٤ × ٩٪ = ٣٦٠" },
        { en: "Investment income = 2.4m × 3% × 9/12 = 54 (the surplus from 1 Jan to 1 Oct)", ar: "دخل الاستثمار = ٢٫٤ × ٣٪ × ٩÷١٢ = ٥٤ (الفائض من ١ يناير إلى ١ أكتوبر)" },
        { en: "Capitalised = 360 − 54 = 306 — the offset never reaches P&L", ar: "المرسمل = ٣٦٠ − ٥٤ = ٣٠٦ — والخصم لا يبلغ الأرباح أبدًا" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "The temporary-surplus investment income is NOT P&L income: it offsets the specific borrowing's capitalisable cost — it never touches the income statement.",
        ar: "دخل استثمار الفائض المؤقت ليس دخلًا للأرباح: يخصم من التكلفة المرسملة للقرض المحدد — ولا يمس قائمة الدخل إطلاقًا.",
      },
    },
    { kind: "h", text: { en: "The general borrowing pool", ar: "وعاء الاقتراض العام" } },
    {
      kind: "p",
      text: {
        en: "When the asset is funded out of the entity's general coffers, capitalise at the CAPITALISATION RATE: the weighted-average cost of the entity's OTHER borrowings outstanding during the period — excluding any borrowing made specifically for the asset (its actual costs ride the specific track). Apply that rate to the CUMULATIVE EXPENDITURE on the asset, time-weighted for when each amount was spent. Because the rate is an average of actual costs, the general-pool machinery can never push capitalised cost above the cap.",
        ar: "حين يمول الأصل من الخزينة العامة للمنشأة، رسمل بمعدل الرسملة: المتوسط المرجح لتكلفة بقية اقتراضاتها القائمة خلال الفترة — مستبعدًا أي اقتراض سحب خصيصًا للأصل (فوائده الفعلية تسلك المسار المحدد). وطبّق المعدل على الإنفاق التراكمي على الأصل مرجحًا بالزمن لكل مبلغ عند صرفه. ولأن المعدل متوسط لتكاليف فعلية، فلن يرفع وعاء العام التكلفة المرسملة فوق الحد الأقصى أبدًا.",
      },
    },
    {
      kind: "formula",
      title: { en: "The two-borrowing machinery", ar: "آلية الاقتراضين" },
      lines: [
        { en: "CAPITALISATION RATE = borrowing costs of the GENERAL borrowings ÷ general borrowings outstanding (weighted for part-period amounts)", ar: "معدل الرسملة = تكاليف الاقتراضات العامة ÷ الاقتراضات العامة القائمة (مرجحة للمبالغ الجزئية)" },
        { en: "SPECIFIC borrowing: capitalise ACTUAL costs − investment income on the temporary surplus of that borrowing", ar: "القرض المحدد: رسمل التكاليف الفعلية − دخل استثمار الفائض المؤقت لذلك القرض" },
        { en: "GENERAL pool: capitalise = cumulative expenditure (net of grants/progress receipts) × rate × time weighting of each spend", ar: "الوعاء العام: المرسمل = الإنفاق التراكمي (صافي المنح والدفعات) × المعدل × الترجيح الزمني لكل صرف" },
        { en: "CAP: never more than the TOTAL borrowing costs actually incurred in the period", ar: "الحد: لا رسملة تتجاوز إجمالي تكاليف الاقتراض المتكبدة فعليًا في الفترة" },
        { en: "Investment-income offset = specific track ONLY — never the general pool", ar: "خصم دخل الاستثمار للمسار المحدد فقط — لا للوعاء العام أبدًا" },
      ],
    },
    {
      kind: "example",
      title: { en: "General-pool calculation", ar: "حساب الوعاء العام" },
      lines: [
        { en: "Borrowings outstanding all year: 5m at 8% and 3m at 6% → pool cost = (400 + 180) ÷ 8m = 7.25%", ar: "اقتراضات طوال السنة: ٥ مليون بـ٨٪ و٣ مليون بـ٦٪ ← كلفة الوعاء = (٤٠٠ + ١٨٠) ÷ ٨ = ٧٫٢٥٪" },
        { en: "Construction: 2m spent on 1 Jan + 3m on 1 Oct (weighted: 2m × 12/12 + 3m × 3/12 = 2.75m)", ar: "الإنشاء: ٢ مليون في ١ يناير و٣ مليون في ١ أكتوبر (المرجح = ٢ + ٠٫٧٥ = ٢٫٧٥)" },
        { en: "Capitalised borrowing cost = 2.75m × 7.25% = 199,375", ar: "التكلفة المرسملة = ٢٫٧٥ × ٧٫٢٥٪ = ١٩٩٬٣٧٥" },
        { en: "A 4m loan was drawn specifically for the project? Then route its actual cost (minus surplus income) through FIRST; only the un-funded expenditure drinks from the general pool", ar: "قرض ٤ مليون محدد للمشروع؟ يمر بفعليته (بصافي دخل الفائض) أولًا؛ وما لم يغطِّه يشرب من الوعاء العام" },
      ],
    },
    {
      kind: "journal",
      title: { en: "General-pool capitalisation", ar: "رسملة الوعاء العام" },
      rows: [
        { dr: { en: "PPE — qualifying asset (weighted expenditure 2.75m × 7.25% = 199,375)", ar: "ممتلكات — أصل مؤهل (الإنفاق المرجح ٢٫٧٥ مليون × ٧٫٢٥٪ = ١٩٩٬٣٧٥)" }, cr: { en: "Interest payable / loan accounts (the pool's actual costs)", ar: "فوائد مستحقة / حسابات القروض (تكاليف الوعاء الفعلية)" }, red: true },
        { dr: { en: "Finance cost — the un-capitalised remainder of the period's borrowing costs", ar: "مصروف تمويل — بقية تكاليف الاقتراض غير المرسملة في الفترة" }, cr: { en: "Interest payable", ar: "فوائد مستحقة" } },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Two pool traps: the rate EXCLUDES borrowings made specifically for the asset, and every expenditure amount is TIME-WEIGHTED from the day it was spent — a 3m drawn in October only counts 3/12 in a December year-end. Compute the rate before touching the expenditure column.",
        ar: "فخان في الوعاء: المعدل يستبعد الاقتراضات المسحوبة خصيصًا للأصل، وكل مبلغ إنفاق مرجح بالزمن من يوم صرفه — فمليون يسحب في أكتوبر لا يحسب إلا ٣÷١٢ عند نهاية ديسمبر. احسب المعدل قبل لمس عمود الإنفاق.",
      },
    },
    { kind: "h", text: { en: "The cap on capitalisation", ar: "الحد الأقصى للرسملة" } },
    {
      kind: "p",
      text: {
        en: "Whatever the machinery produces, the capitalised amount may never exceed the borrowing costs ACTUALLY INCURRED in the period — the entity cannot capitalise a computed rate above its real finance bill. The cap applies period by period; if the computed charge exceeds it, capitalise only up to the actual costs and expense nothing extra (the shortfall is simply not capitalised). This is also where IAS 36 knocks: if the carrying amount of the asset under construction — capitalised interest included — exceeds its recoverable amount, an impairment loss bites before the asset ever turns a wheel.",
        ar: "أيًّا كان ناتج الآلية، لا يجوز أن يتجاوز المبلغ المرسمل تكاليف الاقتراض المتكبدة فعليًا في الفترة — فلا رسملة لمعدل محسوب فوق فاتورة التمويل الحقيقية. والحد يعمل فترةً فترة؛ فإن جاوز المحسوب الفعلي فار سمل حتى الفعلي فحسب ولا مصروف إضافي (فالعجز ببساطة لا يرسمل). وهنا يطرق IAS 36 الباب: إذا تجاوزت القيمة الدفترية للأصل تحت الإنشاء — بما فيها الفوائد المرسملة — مبلغه القابل للاسترداد، فقدت خسيرة انخفاض القيمة قبل أن يدير الأصل عجلة.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Cap = TOTAL borrowing costs incurred in the period (specific + general combined)", ar: "الحد = إجمالي تكاليف الاقتراض المتكبدة في الفترة (المحدد والعام معًا)" },
        { en: "Computed charge > cap → capitalise the cap, expense the difference if any arises from other tracks", ar: "المحسوب > الحد ← رسمل الحد، وحمل الفرق مصروفًا إن نشأ من مسارات أخرى" },
        { en: "Investment income offsets reduce the specific track — they do NOT create a 'negative capitalisation' refund to P&L", ar: "خصوم دخل الاستثمار تخفض المسار المحدد — ولا تنشئ «رسملة سالبة» ترد للأرباح" },
      ],
    },
    {
      kind: "tree",
      title: { en: "How much is capitalisable?", ar: "كم القدر القابل للرسملة؟" },
      root: { en: "A borrowing cost is incurred inside the window", ar: "تكلفة اقتراض متكبدة داخل النافذة" },
      branches: [
        {
          when: { en: "On a borrowing drawn SPECIFICALLY for the asset", ar: "على اقتراض سحب خصيصًا للأصل" },
          then: { en: "ACTUAL costs incurred − investment income on the temporary surplus of that loan", ar: "التكاليف الفعلية المتكبدة − دخل استثمار الفائض المؤقت لذلك القرض", red: true },
        },
        {
          when: { en: "Funded from the GENERAL pool", ar: "ممول من الوعاء العام" },
          then: { en: "Cumulative time-weighted expenditure × capitalisation rate — never a share of a specific loan's interest", ar: "الإنفاق التراكمي المرجح زمنيًا × معدل الرسملة — لا حصة من فوائد قرض محدد أبدًا", red: true },
        },
        {
          when: { en: "The computed charge exceeds the period's ACTUAL borrowing costs", ar: "تجاوز المحسوب تكاليف الاقتراض الفعلية للفترة" },
          then: { en: "CAP at the actual — the excess is simply not capitalised", ar: "قيد عند الفعلي — والزيادة لا تُرسمل ببساطة", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Ceasing & completed parts", ar: "الإقفال والأجزاء المكتملة" } },
    {
      kind: "p",
      text: {
        en: "Capitalisation CEASES when substantially all the activities necessary to prepare the asset for its intended use are complete — from that day the asset is depreciated and any further borrowing cost is finance expense. Completed parts close independently: a plant built in stages treats each stage's ready date as its own closing date. What remains after closing — landscaping, minor punch-list work, staff training — does not keep the window open; and late invoices never reopen it.",
        ar: "تنقضي الرسملة عند اكتمال جوهر الأنشطة اللازمة لإعداد الأصل لاستخدامه المقصود — ومن ذلك اليوم يُهلك الأصل وتصير تكلفة الاقتراض اللاحقة مصروفًا تمويليًا. والأجزاء المكتملة تُقفل استقلالًا: فالمصنع المبني بمراحل يعامل تاريخ جاهزية كل مرحلة تاريخًا لإقفالها. وما يتبقى بعد الإقفال — تشجير، أعمال نقدية صغيرة، تدريب العاملين — لا يبقي النافذة مفتوحة؛ والفواتير المتأخرة لا تعيد فتحها أبدًا.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "A plant built in two stages: stage 1 ready in month 12, stage 2 in month 20 → stage 1's expenditure stops capitalising at month 12", ar: "مصنع بمرحلتين: الأولى جاهزة في الشهر ١٢ والثانية في الشهر ٢٠ ← ينفاق المرحلة الأولى يكف عن الرسملة عند الشهر ١٢" },
        { en: "A ship completed but awaiting client-mandated sea trials that are part of readiness → keep capitalising until the trials pass", ar: "سفينة اكتملت وتنتظر اختبارات بحرية يفرضها العميل وهي من الجاهزية ← استمر في الرسملة حتى اجتياز الاختبارات" },
        { en: "A hotel finished but unopened while marketing runs → capitalisation closed at physical completion; marketing and pre-opening costs are period expenses", ar: "فندق اكتمل ولم يفتتح بعد مع استمرار التسويق ← أُقفلت الرسملة عند الاكتمال المادي؛ والتسويق وتكاليف ما قبل الافتتاح مصروفات فترة" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The closing entries — window shuts, depreciation opens", ar: "قيود الإقفال — تسد النافذة ويفتح الإهلاك" },
      rows: [
        { dr: { en: "PPE — qualifying asset (the final capitalised tranche on the ready date)", ar: "ممتلكات — أصل مؤهل (الدفعة المرسملة الأخيرة بتاريخ الجاهزية)" }, cr: { en: "Interest payable", ar: "فوائد مستحقة" }, red: true },
        { dr: { en: "Finance cost (every borrowing cost AFTER the ready date — even on the construction loan)", ar: "مصروف تمويل (كل تكلفة اقتراض بعد تاريخ الجاهزية — ولو على قرض الإنشاء)" }, cr: { en: "Interest payable", ar: "فوائد مستحقة" } },
        { dr: { en: "Depreciation expense — the asset (capitalised interest inside its cost) starts its useful life", ar: "مصروف إهلاك — يبدأ الأصل (بالفوائد المرسملة داخل تكلفته) عمره الإنتاجي" }, cr: { en: "Accumulated depreciation", ar: "مجمع الإهلاك" }, red: true },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The 'ready for intended use' test outranks 'construction finished': a plant handed over but awaiting the production line's installation keeps capitalising until it can actually run; on the other hand, inventory produced repeatedly does NOT qualify even if the factory took years.",
        ar: "اختبار «الجاهزية للاستخدام المقصود» يغلب «اكتمال الإنشاء»: مصنع سُلم لكنه ينتظر تركيب خط الإنتاج يستمر في الرسملة حتى يعمل فعلًا؛ وبالمقابل فالمخزون المتكرر إنتاجه لا يؤهل ولو استغرق المصنع سنوات.",
      },
    },
    { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Disclose the amount of borrowing costs capitalised in the period AND the capitalisation rate used", ar: "أفصح عن مقدار التكاليف المرسملة في الفترة ومعدل الرسملة المستخدم" },
        { en: "Disclose the capitalisation policy for exchange differences treated as interest adjustments", ar: "أفصح عن سياسة رسملة فروق العملة المعاملة تعديلًا للفوائد" },
        { en: "The asset's carrying amount reflects capitalised costs; depreciation starts when the WHOLE asset (or stage) is ready — the capitalised interest then depreciates with it", ar: "القيمة الدفترية تعكس المرمل؛ ويبدأ الإهلاك بجاهزية الأصل كاملًا (أو مرحلته) — فيهلك المرمل معه" },
        { en: "Capitalised borrowing costs sit INSIDE the PPE/inventory line — there is no separate 'capitalised interest' asset on the face of the balance sheet", ar: "تكاليف الاقتراض المرسملة تسكن داخل سطر الممتلكات/المخزون — لا وجود لأصل مستقل «لفوائد مرسملة» على وجه الميزانية" },
      ],
    },
    { kind: "h", text: { en: "Interactions with the rest of the corpus", ar: "التقاطعات مع بقية المعايير" } },
    {
      kind: "list",
      items: [
        { en: "IAS 16 / IAS 38 — capitalised costs join the asset's cost and are depreciated (or amortised) with it over the life that follows", ar: "IAS 16 / IAS 38 — التكاليف المرسملة تنضم لتكلفة الأصل وتُهلك (أو تستنفد) معه على العمر التالي" },
        { en: "IAS 36 — an asset under construction is tested with its capitalised borrowing costs inside the carrying amount; an extended interruption is BOTH a suspension trigger and an internal impairment indicator", ar: "IAS 36 — الأصل تحت الإنشاء يختبر والفوائد المرسملة داخل قيمته الدفترية؛ والانقطاع الممتد مُعلِّق للرسملة ومؤشر انخفاض داخلي معًا" },
        { en: "IAS 2 — qualifying INVENTORIES (long maturation: wine, spirits; long build: ships) carry capitalised costs into their cost", ar: "IAS 2 — المخزون المؤهل (تعتيق طويل: نبيذ ومشروبات؛ بناء طويل: سفن) يحمل التكاليف المرسملة إلى تكلفته" },
        { en: "IFRS 16 — the interest element of lease liabilities is a borrowing cost and can be capitalised on qualifying ROU construction", ar: "IFRS 16 — عنصر الفائدة في التزامات الإيجار تكلفة اقتراض يجوز رسمله على إنشاء أصول حق استخدام مؤهلة" },
        { en: "IAS 20 — a government loan at below-market interest: the grant element is the fair-value difference, and the LOAN's own borrowing costs run through IAS 23's machinery", ar: "IAS 20 — القرض الحكومي بمعدل دون السوق: عنصر المنحة فرق القيمة العادلة، وتكاليف القرض ذاته تسير بآلية IAS 23" },
        { en: "IAS 21 — exchange differences join the pool only to the extent they represent an adjustment of interest", ar: "IAS 21 — فروق العملة تنضم للوعاء بقدر ما تمثل تعديلًا للفوائد فقط" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Capitalised interest changes the P&L GEOGRAPHY, not the economics: a cost that would have been 'finance cost' today returns as 'depreciation' over the asset's later life — the exam asks where the number lands, not just how big it is.",
        ar: "الفائدة المرسملة تغير جغرافيا الأرباح لا الاقتصاد: فتكلفة كانت ستكون «مصروف تمويل» اليوم تعود «إهلاكًا» عبر عمر الأصل لاحقًا — والممتحن يسأل أين يستقر الرقم لا كم يبلغ فقط.",
      },
    },
    {
      kind: "steps",
      title: { en: "The period-end drill", ar: "تمرين نهاية الفترة" },
      items: [
        { en: "Recompute the GENERAL-pool rate for the period (actual costs ÷ weighted borrowings, excluding specific loans)", ar: "أعد حساب معدل الوعاء العام للفترة (التكاليف الفعلية ÷ الاقتراضات المرجحة، مستبعدًا القروض المحددة)" },
        { en: "Time-weight the asset's cumulative expenditure (each spend from its own date)", ar: "رجّح زمنيًا الإنفاق التراكمي على الأصل (كل صرف من تاريخه)" },
        { en: "Run the WINDOW tests: were all three commencement conditions met each day? any extended interruption? any part ready?", ar: "أجرِ اختبارات النافذة: هل تحققت شروط البدء الثلاثة كل يوم؟ أي انقطاع ممتد؟ أي جزء جاهز؟" },
        { en: "Apply the CAP: capitalise no more than the period's actual borrowing costs", ar: "طبّق الحد: لا رسملة فوق تكاليف الاقتراض الفعلية للفترة" },
        { en: "Route the remainder to finance costs; disclose the capitalised amount and the rate", ar: "وجه الباقي لمصاريف التمويل؛ وأفصح عن المبلغ المرسمل والمعدل" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "IAS 23's one-paragraph exam answer: QUALIFYING asset? (substantial period) → window OPEN? (expenditure + costs + activities) → suspended stretches out → specific loan actuals (minus surplus income) → pool rate × weighted spend → cap at actual → close on ready-for-use. Write that spine before the numbers.",
        ar: "إجابة IAS 23 الامتحانية في سطر: أصل مؤهل؟ (فترة جوهرية) ← النافذة مفتوحة؟ (إنفاق + تكاليف + أنشطة) ← أخرج فترات التعليق ← فعليات القرض المحدد (بصافي دخل الفائض) ← معدل الوعاء × الإنفاق المرجح ← الحد عند الفعلي ← أقفل بالجاهزية. اكتب هذا العمود قبل الأرقام.",
      },
    },
  ],
}
