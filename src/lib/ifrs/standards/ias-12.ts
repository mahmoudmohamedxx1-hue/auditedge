/** IAS 12 — Income Taxes */

import type { Standard } from "../types"

export const IAS_12: Standard = {
  code: "IAS 12",
  title: { en: "Income Taxes", ar: "ضرائب الدخل" },
  topic: "revenue",
  effective: { en: "Effective 1 Jan 1998 · amended by IFRIC 23 (uncertainty)", ar: "سارٍ من ١ يناير ١٩٩٨ · معدل بتفسير IFRIC 23" },
  blocks: [
    { kind: "h", text: { en: "Objective & the two taxes", ar: "الهدف والضريبتان" } },
    {
      kind: "p",
      text: {
        en: "IAS 12 accounts for CURRENT tax (this period's liability to the tax authority) and DEFERRED tax (the future tax consequences of temporary differences between carrying amounts and tax bases) using the BALANCE-SHEET LIABILITY method: look at what is on the balance sheet today, ask how it will be taxed tomorrow, and book the future tax now. Income taxes include all domestic/foreign taxes based on taxable profits, plus withholding taxes — but NOT VAT or sales taxes (those are IFRS 15 collection-on-behalf issues) and not IFRS 2 share-based taxes.",
        ar: "يعالج IAS 12 الضريبة الجارية (التزام هذه الفترة للهيئة الضريبية) والمؤجلة (الآثار الضريبية المستقبلية للفروق المؤقتة بين القيم الدفترية والأسس الضريبية) بأسلوب الالتزام في قائمة المركز المالي: انظر ما في الميزانية اليوم واسأل كيف سيُفرض عليه غدًا واحجز الضريبة الآن. وتشمل كل الضرائب على الأرباح الخاضعة محليًا وأجنبيًا والجباية عند المنبع — دون ضريبة القيمة المضافة (فهي تحصيل لحساب الغير وفق IFRS 15).",
      },
    },
    {
      kind: "p",
      text: {
        en: "Three numbers, three worlds: ACCOUNTING profit (the IFRS profit before tax), TAXABLE profit (the tax authority's base after add-backs, deductions and reliefs) and the TAX EXPENSE in P&L (current + deferred). They are reconciled in the tax note, and that reconciliation is where permanent differences surface — non-deductible fines, exempt income, disallowed entertainment — items that distort the effective rate forever because they never reverse.",
        ar: "ثلاثة أرقام من ثلاثة عوالم: الربح المحاسبي (ربح ما قبل الضريبة وفق IFRS)، والربح الخاضع (وعاء الهيئة بعد الإضافات والخصومات والإعفاءات)، ومصروف الضريبة بالأرباح (جارٍ + مؤجل). وتُوفَّق بينها في إيضاح الضريبة، وفي تلك التسوية تظهر الفروق الدائمة — غرامات غير قابلة للخصم، إيرادات معفاة، مصاريف ترفيهية مرفوضة — بنود تحرف المعدل الفعلي للأبد لأنها لا تنعكس أصلًا.",
      },
    },
    { kind: "h", text: { en: "Scope — what's in, what's out", ar: "النطاق — ما يدخل وما يخرج" } },
    {
      kind: "list",
      items: [
        { en: "IN: every tax based on taxable profits — domestic and foreign, corporate and branch, plus WITHHOLDING taxes on distributions and royalties, and any tax on revaluation surpluses where the law taxes them on realisation", ar: "داخل النطاق: كل ضريبة على أرباح خاضعة — محلية وأجنبية، على الشركات والفروع، مع ضريبة الجباية عند المنبع على التوزيعات والأتاوات، وأي ضريبة على فروقات إعادة التقييم حيث يفرضها القانون عند التحقق" },
        { en: "OUT: VAT and sales taxes — collected on behalf of the authority, so they never touch tax expense (IFRS 15 collection-on-behalf)", ar: "خارج النطاق: ضريبة القيمة المضافة والاستهلاكية — تُحصَّل لحساب الهيئة فلا تمس مصروف الضريبة أبدًا (تحصيل لحساب الغير وفق IFRS 15)" },
        { en: "OUT: IFRS 2 share-based payment amounts — a labour cost, not a tax on profits, even when the deduction follows years later", ar: "خارج النطاق: مبالغ الدفع بالأسهم وفق IFRS 2 — فهي تكلفة عمالة لا ضريبة على أرباح، ولو جاء الخصم الضريبي بعد سنوات" },
        { en: "OUT: employment taxes (payroll, social insurance) — IAS 19 employee benefits territory", ar: "خارج النطاق: الضرائب على العمالة (الأجور والتأمينات الاجتماعية) — أرض IAS 19 لمزايا العاملين" },
        { en: "Deferred tax on IFRS 16 leases and IAS 37 decommissioning obligations is IN — the 2021 amendment ended the old initial-recognition free pass (see its own section)", ar: "الضريبة المؤجلة على إيجارات IFRS 16 والتزامات تفكيك المنشآت وفق IAS 37 داخل النطاق — فتعديل ٢٠٢١ أنهى الإعفاء القديم للاعتراف الأولي (انظر بابه الخاص)" },
      ],
    },
    { kind: "h", text: { en: "The tax base — definitions that unlock everything", ar: "الأساس الضريبي — تعريفات تفتح كل شيء" } },
    {
      kind: "formula",
      title: { en: "Temporary differences", ar: "الفروق المؤقتة" },
      lines: [
        { en: "ASSET: tax base = the amount the tax authority will allow as DEDUCTIBLE in future periods as the carrying amount is recovered", ar: "الأصل: الأساس الضريبي = ما ستسمح به الهيئة خصمًا مستقبلًا عند استرداد القيمة الدفترية" },
        { en: "LIABILITY: tax base = carrying amount − amounts deductible in future (revenue already taxed now, or will never be taxed)", ar: "الالتزام: الأساس = الدفترية − ما يُخصم مستقبلًا (إيراد ضُرب الآن أو لن يُفرض عليه أبدًا)" },
        { en: "TEMPORARY difference = carrying amount − tax base (an accounting difference that will REVERSE in future periods)", ar: "الفرق المؤقت = القيمة الدفترية − الأساس الضريبي (فرق ينعكس مستقبلًا)" },
        { en: "Taxable difference (carrying > base) → DEFERRED TAX LIABILITY (future taxable amounts)", ar: "الفرق الخاضع (الدفترية > الأساس) ← التزام مؤجل (مبالغ ستُفرض مستقبلًا)" },
        { en: "Deductible difference (carrying < base) → DEFERRED TAX ASSET (future deductions)", ar: "الفرق الخصم (الدفترية < الأساس) ← أصل مؤجل (خصومات مستقبلية)" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Quick felt-sense: depreciation — cost 1,000, carrying 600, tax base 400 (accelerated tax depreciation taken) → taxable difference 200 → DTL at the enacted rate. A provision for warranty costs 100 (carrying; tax base NIL because deductible only when paid) → deductible difference 100 → DTA. Unused tax losses and credits ARE deductible temporary differences (carryforwards) — subject to the recognition test below.",
        ar: "إحساس سريع: إهلاك — تكلفة ١٬٠٠٠ ودفترية ٦٠٠ وأساس ضريبي ٤٠٠ (إهلاك ضريبي معجل) ← فرق خاضع ٢٠٠ ← التزام مؤجل بالمعدل النافذ. ومخصص ضمان ١٠٠ (أساسه الضريبي صفر لأنه لا يخصم إلا عند الدفع) ← فرق خصم ١٠٠ ← أصل مؤجل. والخسائر غير المستخدمة فروق خصم (رصيد مُرحَّل) خاضعة لاختبار الاعتراف أدناه.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Permanent differences (non-deductible fines, entertainment costs) create NO deferred tax — they hit the current tax computation every period with no future reversal.",
        ar: "الفروق الدائمة (غرامات غير قابلة للخصم، مصاريف ترفيهية) لا تنشئ ضريبة مؤجلة — إنها تدخل في احتساب الضريبة الجارية كل فترة دون انعكاس مستقبلي.",
      },
    },
    { kind: "h", text: { en: "The balance-sheet liability method — the sequence", ar: "أسلوب الالتزام بالميزانية — التسلسل" } },
    {
      kind: "p",
      text: {
        en: "IAS 12 thinks from the STATEMENT OF FINANCIAL POSITION, not the income statement. Every asset and liability is interrogated for how its recovery or settlement will be taxed: the tax base is the future tax number attached to the balance-sheet item, and the difference between the two is deferred tax waiting to happen. The P&L deferred charge is nothing more than the MOVEMENT in the net deferred position during the period. The old income-statement (deferral) method that only ever looked at P&L timing differences is history.",
        ar: "يفكر IAS 12 من قائمة المركز المالي لا من قائمة الدخل: كل أصل والتزام يُسأل كيف ستُفرض ضريبته عند استرداده أو تسويته؛ فالأساس الضريبي هو الرقم الضريبي المستقبلي الملتصق ببند الميزانية، والفرق بينهما ضريبة مؤجلة تنتظر الحدوث. ومصروف الضريبة المؤجلة في الأرباح ليس إلا حركة المركز المؤجل الصافي خلال الفترة. أما أسلوب التأجيل القديم القائم على قائمة الدخل وحدها فمن التاريخ.",
      },
    },
    {
      kind: "steps",
      items: [
        { en: "List every asset & liability at its CARRYING amount — consolidated values, including the fair-value uplifts from IFRS 3", ar: "اسرد كل أصل والتزام بقيمته الدفترية — بالقيم المجمعة شاملة زيادات القيمة العادلة من IFRS 3" },
        { en: "Determine each item's TAX BASE — what will the authority allow against future taxable profit?", ar: "حدد الأساس الضريبي لكل بند — ماذا ستسمح به الهيئة إزاء الربح الخاضع المستقبلي؟" },
        { en: "Compute the temporary differences and their DIRECTION (future taxable amounts vs future deductions)", ar: "احسب الفروق المؤقتة واتجاهها (مبالغ ستُفرض مقابل خصومات قادمة)" },
        { en: "Recognise a DTL on every taxable difference (subject only to the narrow exceptions) — a DTA only through the probable-profits gate", ar: "اعترف بالتزام مؤجل على كل فرق خاضع (خاضعًا للاستثناءات الضيقة فقط) — وبالأصل المؤجل عبر بوابة الأرباح المرجحة فقط" },
        { en: "Measure at the ENACTED (or substantively enacted) rates expected to apply when the differences reverse", ar: "قِسْ بالمعدلات النافذة (أو المشروعة جوهريًا) المتوقع تطبيقها عند انعكاس الفروق" },
        { en: "Route the charge/credit by SOURCE — P&L, OCI, or goodwill", ar: "وجِّه الرسم/الإشعار بحسب المصدر — الأرباح أو الدخل الشامل أو الشهرة" },
        { en: "Review DTA recoverability each date, offset where legally allowed, present deferred tax as NON-CURRENT, disclose the components", ar: "راجع قابلية استرداد الأصل المؤجل كل تاريخ، وقاص حيث يجيز القانون، واعرض الضريبة المؤجلة بندًا غير متداول، وأفصح عن المكونات" },
      ],
    },
    { kind: "h", text: { en: "Current tax", ar: "الضريبة الجارية" } },
    {
      kind: "list",
      items: [
        { en: "Liability (asset) for the period's estimated payable (recoverable) tax — an adjusting-events question when the authority assesses later (IAS 10)", ar: "التزام (أصل) بالضريبة المستحقة (القابلة للاسترداد) المقدرة للفترة — ومسألة أحداث معدلة عند تقدير الهيئة لاحقًا" },
        { en: "IFRIC 23 (uncertainty over income tax treatments): treat the uncertainty like IAS 37 — most-likely or expected-value on the tax in dispute, and DISCLOSE", ar: "تفسير IFRIC 23 (عدم تأكد المعالجات الضريبية): عامله كـIAS 37 — المبلغ الأرجح أو القيمة المتوقعة للضريبة محل النزاع مع الإفصاح" },
        { en: "Current tax = taxable profit × CURRENT enacted rates; an over/under-provision from last year adjusts THIS year's tax expense (not the opening balance)", ar: "الجارية = الربح الخاضع × المعدلات النافذة؛ والزيادة/النقصان في مخصص السنة الماضية يعدل مصروف هذه السنة" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The current-tax lifecycle entries", ar: "قيود دورة الضريبة الجارية" },
      rows: [
        { dr: { en: "Income tax expense — current", ar: "مصروف ضريبة الدخل — جارية" }, cr: { en: "Current tax payable", ar: "ضريبة جارية مستحقة" }, red: true },
        { dr: { en: "Current tax payable", ar: "ضريبة جارية مستحقة" }, cr: { en: "Cash (payments to the authority during the year)", ar: "نقد (مدفوعات للهيئة خلال السنة)" } },
        { dr: { en: "Current tax payable", ar: "ضريبة جارية مستحقة" }, cr: { en: "Income tax expense — current (last year's OVER-provision — adjusts this year's expense, never the opening balance)", ar: "مصروف ضريبة الدخل — جارية (زيادة مخصص السنة الماضية — تعدل مصروف هذه السنة لا الرصيد الافتتاحي)" }, red: true },
        { dr: { en: "Income tax expense — current", ar: "مصروف ضريبة الدخل — جارية" }, cr: { en: "Current tax payable (IFRIC 23: extra liability for the treatment more likely than not to fail)", ar: "ضريبة جارية مستحقة (IFRIC 23: التزام إضافي للمعالجة الأرجح خسارتها)" } },
      ],
    },
    { kind: "h", text: { en: "IFRIC 23 — uncertain income tax treatments", ar: "تفسير IFRIC 23 — المعالجات الضريبية غير المؤكدة" } },
    {
      kind: "p",
      text: {
        en: "When it is uncertain whether the authority will accept a tax treatment (a deduction, a transfer-pricing position, a group relief), IFRIC 23 rides on top of IAS 12. The unit of account is the TAX TREATMENT itself, not the whole return: each uncertain treatment is assessed separately for whether acceptance is PROBABLE (more likely than not). The effect flows through current or deferred tax exactly as the normal machinery would — only the measurement reflects the uncertainty, plus a disclosure of the judgements that moved the number.",
        ar: "عند الشك في قبول الهيئة لمعالجة ضريبية (خصم، أو موقف تسعير بيني، أو إعفاء مجموعة)، يركب IFRIC 23 فوق IAS 12. ووحدة القياس هي المعالجة الضريبية ذاتها لا الإقرار كله: تُقيَّم كل معالجة على حدة فيما إذا كان قبولها مرجحًا (أغلب الظن). والأثر يجري في الضريبة الجارية أو المؤجلة كما تمليه الآلية المعتادة — غير أن القياس وحده يعكس عدم التأكد، مع إفصاح عن الأحكام التي حرّكت الرقم.",
      },
    },
    {
      kind: "tree",
      title: { en: "The IFRIC 23 decision tree", ar: "شجرة قرار IFRIC 23" },
      root: { en: "An income tax treatment is uncertain (the authority may challenge it)", ar: "معالجة ضريبية غير مؤكدة (قد تنازعها الهيئة)" },
      branches: [
        {
          when: { en: "Is it PROBABLE the authority will accept the treatment as filed?", ar: "هل قبول الهيئة للمعالجة كما قُدمت مرجح؟" },
          then: { en: "Account for it as filed — no uncertainty adjustment at all", ar: "عالجها كما قُدِّمت — بلا أي تعديل لعدم التأكد" },
        },
        {
          when: { en: "Not probable — outcomes form a CONTINUUM of possible amounts", ar: "غير مرجح — النتائج طيف متصل من المبالغ المحتملة" },
          then: { en: "EXPECTED VALUE: the probability-weighted average of all outcomes", ar: "القيمة المتوقعة: المتوسط المرجح باحتمالات كل النتائج", red: true },
        },
        {
          when: { en: "Not probable — the dispute is BINARY (the deduction stands or falls)", ar: "غير مرجح — النزاع ثنائي (يقف الخصم أو يسقط)" },
          then: { en: "MOST LIKELY AMOUNT: the single likelier outcome", ar: "المبلغ الأرجح: النتيجة الأعلى احتمالًا وحدها", red: true },
        },
        {
          when: { en: "Either way — the uncertainty moves the number", ar: "في كلتا الحالتين — عدم التأكد يحرك الرقم" },
          then: { en: "DISCLOSE the judgements and estimates with the most significant effect, and whether previous judgements changed", ar: "أفصح عن الأحكام والتقديرات الأشد أثرًا، وعن تغير الأحكام السابقة من عدمه" },
        },
      ],
    },
    { kind: "h", text: { en: "Recognising DTAs — the profitability gate", ar: "الاعتراف بالأصول المؤجلة — بوابة الربحية" } },
    {
      kind: "p",
      text: {
        en: "A DTA is a claim on the tax authority's future kindness — it only exists if there will be taxable profit for it to soak into. The test is PROBABILITY: more likely than not that future taxable profit will be available against the SAME taxation authority and in the SAME taxable entity. A history of losses does not forbid the asset; it merely demands stronger evidence, and every unrecognised DTA is re-examised at each reporting date.",
        ar: "الأصل المؤجل مطالبة بكرم الهيئة الضريبية المستقبلي — ولا يوجد إلا إذا وُجد ربح خاضع يتشرب فيه. والاختبار احتمالي: أغلب الظن توافر ربح خاضع مستقبلي لدى الهيئة الضريبية ذاتها وفي الكيان الخاضع ذاته. وتاريخ الخسائر لا يحظر الأصل؛ لكنه يطلب دليلًا أقوى، ويُعاد فحص كل أصل غير معترف به في كل تاريخ تقرير.",
      },
    },
    {
      kind: "tree",
      root: { en: "A deductible temporary difference arose", ar: "نشأ فرق خصم مؤقت" },
      branches: [
        {
          when: { en: "Probable (more likely than not) that future taxable profit will be available to absorb the deduction", ar: "مرجح توافر ربح خاضع مستقبلي يستوعب الخصم" },
          then: { en: "RECOGNISE the DTA at the enacted rates expected to apply", ar: "اعترف بالأصل المؤجل بالمعدلات النافذة المتوقعة", red: true },
        },
        {
          when: { en: "Doubtful future profits (a history of losses)", ar: "شك في الأرباح المستقبلية (تاريخ خسائر)" },
          then: { en: "Recognise ONLY to the extent of taxable temporary differences reversing in the SAME period (a natural hedge) or other convincing evidence (loss carryback, profitable history, binding contracts)", ar: "اعترف بحد الفروق الخاضعة المنعكسة في الفترة ذاتها أو بدليل آخر مقنع (ترحيل للخلف، تاريخ ربحي، عقود ملزمة)", red: true },
        },
        {
          when: { en: "The DTA comes from NEGATIVE goodwill or a primary P&L item in a business combination", ar: "أصل ناشئ عن شهرة سالبة أو بند رئيسي في اندماج" },
          then: { en: "Special combination rules — the acquirer always books DTAs for the acquiree's losses IF profitability is probable", ar: "قواعد خاصة بالاندماج — يثبته المقتني إذا رجحت الربحية" },
        },
        {
          when: { en: "Unutilised losses at each reporting date — reassess EVERY date; a turnaround means START recognising", ar: "خسائر غير مستفاد منها — تعاد مراجعتها كل تقرير؛ والتعافي يبدأ الاعتراف" },
          then: { en: "Change in recoverability → adjust through CURRENT tax expense (P&L), never through equity for the original item", ar: "تغير القابلية للاسترداد ← يعدل بمصروف الضريبة الجارية" },
        },
      ],
    },
    {
      kind: "list",
      items: [
        { en: "Future reversals of EXISTING taxable temporary differences — in the same entity, against the same authority", ar: "انعكاسات مستقبلية لفروق خاضعة قائمة — في الكيان ذاته ولدى الهيئة ذاتها" },
        { en: "Future taxable profits EXCLUDING those reversals — forecast earnings of the same taxable entity", ar: "أرباح خاضعة مستقبلية عدا تلك الانعكاسات — أرباح متوقعة للكيان الخاضع ذاته" },
        { en: "Unused loss CARRYBACK rights against prior years' assessed taxes (where the regime allows refunds)", ar: "حق ترحيل الخسائر إلى الوراء مقابل ضرائب سنوات سابقة مقدَّرة (حيث يجيزه النظام)" },
        { en: "Tax-planning opportunities that are real and within the law — e.g. electing to realise an appreciated asset to create taxable gain", ar: "فرص تخطيط ضريبي حقيقية ومشروعة — كاختيار تحقيق أصل مرتفع القيمة لخلق ربح خاضع" },
        { en: "NOT a source: the profits of OTHER group companies — a different taxable entity cannot donate taxable profit", ar: "ليست مصدرًا: أرباح شركات أخرى بالمجموعة — فالكيان الخاضع الآخر لا يهب ربحه الخاضع" },
      ],
    },
    {
      kind: "journal",
      title: { en: "An unused-loss DTA through two years (loss 240 · rate 25%)", ar: "أصل خسائر مؤجل عبر سنتين (خسارة ٢٤٠ · معدل ٢٥٪)" },
      rows: [
        { dr: { en: "Deferred tax asset 60", ar: "أصل ضريبة مؤجلة ٦٠" }, cr: { en: "Deferred tax income (P&L) — losses 240 × 25%, recognised the moment profits became probable", ar: "إيراد ضريبة مؤجلة (بالأرباح) — خسائر ٢٤٠ × ٢٥٪ عند صيرورة الأرباح مرجحة" }, red: true },
        { dr: { en: "Income tax expense — current 40", ar: "مصروف ضريبة الدخل — جارية ٤٠" }, cr: { en: "Current tax payable (Year 2: taxable profit 400 − loss relief 240 = 160 × 25%)", ar: "ضريبة جارية مستحقة (السنة ٢: ٤٠٠ − تهدئة ٢٤٠ = ١٦٠ × ٢٥٪)" } },
        { dr: { en: "Income tax expense — deferred 60", ar: "مصروف ضريبة الدخل — مؤجلة ٦٠" }, cr: { en: "Deferred tax asset 60 (the DTA is consumed as the losses are used)", ar: "أصل ضريبة مؤجلة ٦٠ (يُستهلك الأصل مع انتفاع الخسائر)" }, red: true },
        { dr: { en: "Check: Year-2 total tax expense 40 + 60 = 100 = 400 × 25%", ar: "تحقق: مصروف السنة ٢ = ٤٠ + ٦٠ = ١٠٠ = ٤٠٠ × ٢٥٪" }, cr: { en: "The loss benefit has fully flipped from deferred to current", ar: "فائدة الخسائر انتقلت بالكامل من المؤجل إلى الجاري" }, red: true },
      ],
    },
    { kind: "h", text: { en: "The initial-recognition exceptions", ar: "استثناءات الاعتراف الأولي" } },
    {
      kind: "list",
      items: [
        { en: "GOODWILL: no DTL on the goodwill's taxable difference (amortisation is never deductible and the IASB froze the loop) — recognised ONLY when the goodwill arises in a combination for tax purposes", ar: "الشهرة: لا التزام مؤجل على فرقها الخاضع (استهلاكها غير قابل للخصم والأصل أنجز الحلقة) — يعترف به فقط عند نشوء الشهرة في اندماج لأغراض ضريبية" },
        { en: "INITIAL RECOGNITION exception: no deferred tax on an asset/liability's first recognition in a transaction that (a) is not a business combination AND (b) affects NEITHER accounting nor taxable profit — the surviving home of the IAS 20 government-grant deduction route; the lease/decommissioning family was evicted by the 2021 amendment (next section)", ar: "استثناء الاعتراف الأولي: لا ضريبة مؤجلة عند أول إثبات لأصل/التزام في معاملة ليست اندماجًا ولا تمس الربح المحاسبي ولا الخاضع — بقي مسكنه لطريق خصم المنح الحكومية وفق IAS 20؛ أما عائلة الإيجار والتفكيك فقد أُخرجت بتعديل ٢٠٢١ (الباب التالي)" },
        { en: "The exception applies only to the INITIAL amount — subsequent movements (e.g. an index-driven lease remeasurement) DO give deferred tax", ar: "الاستثناء للمبلغ الأولي فقط — والحركات اللاحقة (إعادة قياس الإيجار بمؤشر) تولد ضريبة مؤجلة" },
        { en: "INVESTMENTS in subsidiaries/associates/JVs: recognise a DTL on taxable differences UNLESS the parent can control the reversal AND it is probable the difference will not reverse in the foreseeable future (the 12.39 exemption — e.g. a plan to hold forever, or a group that can dictate dividend policy)", ar: "الاستثمارات في التابعات والزميلات والمشتركة: يعترف بالالتزام المؤجل إلا إذا سيطر المستثمر على الانعكاس ورجح عدم حدوثه في المستقبل المنظور (إعفاء ١٢.٣٩ — كخطة احتفاظ دائم أو قدرة على تقرير سياسة التوزيعات)" },
      ],
    },
    { kind: "h", text: { en: "The 2021 single-transaction amendment — leases & decommissioning", ar: "تعديل ٢٠٢١ للمعاملة الواحدة — الإيجار والتفكيك" } },
    {
      kind: "p",
      text: {
        en: "The May 2021 amendment \"Deferred Tax related to Assets and Liabilities arising from a Single Transaction\" (effective 1 Jan 2023) closed the day-one loophole for transactions that create EQUAL taxable and deductible temporary differences. An IFRS 16 lease at commencement (ROU asset = lease liability) and a decommissioning provision matched by the identical amount capitalised in PP&E now give deferred tax from day one: the initial-recognition exemption no longer spares them. The exemption still protects the government-grant style case, where only one side of the entry exists.",
        ar: "تعديل مايو ٢٠٢١ «الضريبة المؤجلة على الأصول والالتزامات الناشئة عن معاملة واحدة» (نافذ ١ يناير ٢٠٢٣) أغلق ثغرة اليوم الأول للمعاملات التي تنشئ فروقًا خاضعة وخصمًا متساوية. فإيجار IFRS 16 عند بدئه (أصل الحق في الاستخدام = التزام الإيجار)، ومخصص تفكيك يقابله المبلغ ذاته مرسملًا في الممتلكات، صارا يولدان ضريبة مؤجلة من اليوم الأول: فاستثناء الاعتراف الأولي لم يعد يحميهما. ويظل الاستثناء يحمي حالة المنح الحكومية حيث يقف أحد طرفي القيد وحيدًا.",
      },
    },
    {
      kind: "journal",
      title: { en: "Lease commencement — the day-one gross pair (10,000 lease · 25%)", ar: "بدء الإيجار — الزوج الإجمالي في اليوم الأول (إيجار ١٠٬٠٠٠ · ٢٥٪)" },
      rows: [
        { dr: { en: "Right-of-use asset 10,000", ar: "أصل حق الاستخدام ١٠٬٠٠٠" }, cr: { en: "Lease liability 10,000 (the lease itself; tax relief only when payments are made)", ar: "التزام الإيجار ١٠٬٠٠٠ (الإيجار ذاته؛ الإعفاء الضريبي عند السداد فقط)" } },
        { dr: { en: "Deferred tax expense (P&L) 2,500", ar: "مصروف ضريبة مؤجلة (بالأرباح) ٢٬٥٠٠" }, cr: { en: "Deferred tax liability — ROU 2,500 (tax base nil → taxable difference 10,000)", ar: "التزام ضريبة مؤجلة — الحق في الاستخدام ٢٬٥٠٠ (الأساس الضريبي صفر ← فرق خاضع ١٠٬٠٠٠)" } },
        { dr: { en: "Deferred tax asset — lease liability 2,500", ar: "أصل ضريبة مؤجلة — التزام الإيجار ٢٬٥٠٠" }, cr: { en: "Deferred tax income (P&L) 2,500 (payments fully deductible as paid → deductible difference 10,000)", ar: "إيراد ضريبة مؤجلة (بالأرباح) ٢٬٥٠٠ (المدفوعات تُخصم كلها عند دفعها ← فرق خصم ١٠٬٠٠٠)" }, red: true },
        { dr: { en: "Day-one net effect: nil — but BOTH are on the books gross", ar: "الأثر الصافي في اليوم الأول: صفر — لكن كليهما مثبت إجمالًا" }, cr: { en: "They then DIVERGE as the asset depreciates faster than the liability unwinds — an ordinary temp-difference pair from here", ar: "ثم يفترقان مع إهلاك الأصل أسرع من تناقص الالتزام — زوج فروق عادي من هنا" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Measurement & the rate rules", ar: "القياس وقواعد المعدل" } },
    {
      kind: "list",
      items: [
        { en: "Measure deferred tax at the rates ENACTED or SUBSTANTIVELY ENACTED by the reporting date, expected to apply when the item reverses — the announced-but-not-enacted rate waits", ar: "يقاس بالمعدلات النافذة أو المشروعة جوهريًا بتاريخ التقرير والمتوقع تطبيقها عند الانعكاس — والمعلن دون تشريع ينتظر" },
        { en: "NEVER discount deferred tax; review DTA carrying at EVERY reporting date", ar: "لا خصم للضريبة المؤجلة أبدًا؛ ويراجع الأصل المؤجل في كل تاريخ تقرير" },
        { en: "Deferred tax follows the item: differences from P&L items → tax expense (P&L); from OCI items (revaluation surplus, FVOCI, cash-flow hedges, translation differences) → OCI/equity", ar: "الضريبة تتبع البند: فروق بنود الأرباح ← مصروف الضريبة؛ وفروق بنود الدخل الشامل أو حقوق الملكية ← الدخل الشامل" },
        { en: "Classification: deferred tax is ALWAYS non-current; current tax follows the related asset/liability (but expect the 2021 amendment-style presentation as non-current in practice)", ar: "التبويب: المؤجلة غير متداولة دائمًا؛ والجارية تتبع البند ذي الصلة" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The rate reflects the MANNER of recovery expected at the reporting date: a rental building held for sale may attract the capital-gains rate, not the income rate, if that is how the law will tax its recovery. When an enacted rate CHANGES, every DTA and DTL is remeasured in the period the new rate becomes substantively enacted — the adjustment follows the same route the original difference took: P&L for P&L items, OCI for OCI items.",
        ar: "يعكس المعدل طريقة الاسترداد المتوقعة بتاريخ التقرير: فمبنى مؤجر معروض للبيع قد يجذب معدل أرباح رأس المال لا معدل الدخل إن كان القانون سيفرض كذلك عند تحققه. وعندما يتغير معدل نافذ، يُعاد قياس كل أصل والتزام مؤجل في الفترة التي يصبح فيها المعدل الجديد مشرَّعًا جوهريًا — ويتبع التعديل مسار الفرقة الأصلي: الأرباح لبنود الأرباح والدخل الشامل لبنوده.",
      },
    },
    {
      kind: "formula",
      title: { en: "The deferred-tax engine & the effective-rate bridge", ar: "محرك الضريبة المؤجلة وجسر المعدل الفعلي" },
      lines: [
        { en: "Deferred tax = temporary difference × enacted rate expected at reversal", ar: "الضريبة المؤجلة = الفرق المؤقت × المعدل النافذ المتوقع عند الانعكاس" },
        { en: "DTA recognition = deductible difference × rate — but capped by the probable-taxable-profits test", ar: "اعتراف الأصل المؤجل = فرق الخصم × المعدل — بسقف اختبار الأرباح الخاضعة المرجحة" },
        { en: "Deferred charge (credit) for the period = closing net deferred position − opening net deferred position", ar: "مصروف/إيراد الفترة المؤجل = المركز المؤجل الصافي الختامي − الافتتاحي" },
        { en: "Total tax expense = current tax ± deferred movement · Effective rate = tax expense ÷ profit before tax", ar: "إجمالي مصروف الضريبة = الجارية ± حركة المؤجلة · والمعدل الفعلي = المصروف ÷ الربح قبل الضريبة" },
      ],
    },
    { kind: "h", text: { en: "Where does the deferred tax go?", ar: "إلى أين تذهب الضريبة المؤجلة؟" } },
    {
      kind: "p",
      text: {
        en: "Deferred tax follows the SOURCE of the difference: back-trace the temporary difference to the transaction that created it, and route the tax through the same statement that transaction originally hit. A difference born in profit or loss charges profit or loss; one born in OCI (a revaluation, a FVOCI reserve, a cash-flow hedge, an actuarial remeasurement) charges that OCI line; one born in a business combination adjusts goodwill; one born in translating a foreign operation's balances goes to the equity reserve. Route the recognition AND the later reversal through the same lane.",
        ar: "تتبع الضريبة المؤجلة مصدر الفرق: تتبَّع الفرقة المؤقتة إلى المعاملة التي أنشأتها، ومرِّر الضريبة عبر القائمة ذاتها التي لمستها تلك المعاملة أول مرة. فالفرق المولود في الأرباح أو الخسائر يحمّلها؛ والمولود في الدخل الشامل (إعادة تقييم، احتياطي قيمة عادلة، تغطية تدفقات، إعادة قياس اكتواري) يحمّل بند الدخل الشامل ذاته؛ والمولود في اندماج يعدل الشهرة؛ والمولود من ترجمة أرصدة عملية أجنبية يذهب لاحتياطي حقوق الملكية. ومرِّر الاعتراف والانعكاس اللاحق في المسار ذاته.",
      },
    },
    {
      kind: "tree",
      root: { en: "A temporary difference has been computed — where does its tax go?", ar: "حُسب فرق مؤقت — إلى أين تذهب ضريبته؟" },
      branches: [
        {
          when: { en: "Born from a P&L item — depreciation, provisions, revenue timing, ECL", ar: "مولود من بند أرباح — إهلاك، مخصصات، توقيت إيراد، خسائر ائتمان متوقعة" },
          then: { en: "TAX EXPENSE in P&L — the default lane", ar: "مصروف ضريبة بالأرباح — المسار الافتراضي", red: true },
        },
        {
          when: { en: "Born from an OCI item — IAS 16/38 revaluation, FVOCI, cash-flow hedge, IAS 19 actuarial", ar: "مولود من بند دخل شامل — إعادة تقييم وفق IAS 16/38، قيمة عادلة عبر الدخل الشامل، تغطية تدفقات، اكتواري IAS 19" },
          then: { en: "OCI — the tax follows the source through the SAME OCI line", ar: "الدخل الشامل — تتبع الضريبة المصدر عبر بند الدخل الشامل ذاته", red: true },
        },
        {
          when: { en: "Born in a business combination — the FV uplift on the acquiree's assets", ar: "مولود في اندماج — زيادة القيمة العادلة لأصول المقتنى" },
          then: { en: "GOODWILL — part of the IFRS 3 measurement, never P&L", ar: "الشهرة — جزء من قياس IFRS 3 لا الأرباح أبدًا", red: true },
        },
        {
          when: { en: "Born from translating a foreign operation's balances", ar: "مولود من ترجمة أرصدة عملية أجنبية" },
          then: { en: "EQUITY — the translation reserve (CTA), never P&L until disposal", ar: "حقوق الملكية — احتياطي فروق الترجمة لا الأرباح حتى التخرد", red: true },
        },
      ],
    },
    {
      kind: "journal",
      title: { en: "The deferred entries", ar: "قيود الضريبة المؤجلة" },
      rows: [
        { dr: { en: "Deferred tax expense (P&L)", ar: "مصروف ضريبة مؤجلة (بالأرباح)" }, cr: { en: "Deferred tax liability (growth)", ar: "التزام ضريبة مؤجلة (نمو)" }, red: true },
        { dr: { en: "Deferred tax asset (recognition/recovery)", ar: "أصل ضريبة مؤجلة (اعتراف/استرداد)" }, cr: { en: "Deferred tax income (P&L)", ar: "إيراد ضريبة مؤجلة (بالأرباح)" }, red: true },
        { dr: { en: "Income tax expense — current", ar: "مصروف ضريبة الدخل — جارية" }, cr: { en: "Current tax payable", ar: "ضريبة جارية مستحقة" } },
        { dr: { en: "OCI — revaluation surplus", ar: "الدخل الشامل — فائض إعادة التقييم" }, cr: { en: "Deferred tax liability on the uplift", ar: "التزام مؤجل على الزيادة" }, red: true },
        { dr: { en: "Current tax payable", ar: "ضريبة جارية مستحقة" }, cr: { en: "Cash (payment to the authority)", ar: "نقد (سداد للهيئة)" } },
      ],
    },
    {
      kind: "example",
      title: { en: "A temp-difference table", ar: "جدول الفروق المؤقتة" },
      lines: [
        { en: "Machine: cost 1,000 · accounting carrying 600 · tax base 400 · rate 25%", ar: "آلة: تكلفة ١٬٠٠٠ · دفترية محاسبية ٦٠٠ · أساس ضريبي ٤٠٠ · معدل ٢٥٪" },
        { en: "Taxable difference 200 → DTL 50", ar: "فرق خاضع ٢٠٠ ← التزام مؤجل ٥٠" },
        { en: "Warranty provision 100 · tax base 0 → deductible difference 100 → DTA 25", ar: "مخصص ضمان ١٠٠ وأساسه صفر ← فرق خصم ١٠٠ ← أصل مؤجل ٢٥" },
        { en: "Loss carried forward 80 (probable future profits) → DTA 20; interest receivable accrued 40 taxed on receipt → DTL 10", ar: "خسارة مرحلة ٨٠ (أرباح مرجحة) ← أصل ٢٠؛ وفوائد مستحقة ٤٠ تضرب عند القبض ← التزام ١٠" },
        { en: "Net deferred position: DTL (50 + 10) 60 vs DTA (25 + 20) 45 → net DTL 15", ar: "المركز الصافي: التزام (٥٠ + ١٠) ٦٠ مقابل أصل (٢٥ + ٢٠) ٤٥ ← التزام صافٍ ١٥" },
      ],
    },
    {
      kind: "example",
      title: { en: "The full engine — one year in numbers", ar: "المحرك الكامل — سنة بالأرقام" },
      lines: [
        { en: "Profit before tax 1,000 · accounting depreciation 200 vs tax capital allowances 300 · warranty provision raised 100 (deductible only when paid) · unused losses 240 (carryforward regime) · forecast taxable profits 500 over the next two years · enacted rate 25%", ar: "ربح قبل الضريبة ١٬٠٠٠ · إهلاك محاسبي ٢٠٠ مقابل إعفاءات ضريبية ٣٠٠ · مخصص ضمان ١٠٠ (لا يخصم إلا عند الدفع) · خسائر غير مستخدمة ٢٤٠ (نظام ترحيل للأمام) · أرباح خاضعة متوقعة ٥٠٠ خلال سنتين · معدل نافذ ٢٥٪" },
        { en: "Taxable profit = 1,000 + 200 − 300 + 100 = 1,000 → current tax 250", ar: "الربح الخاضع = ١٬٠٠٠ + ٢٠٠ − ٣٠٠ + ١٠٠ = ١٬٠٠٠ ← ضريبة جارية ٢٥٠" },
        { en: "Machine: taxable difference 100 (new) → DTL 25 · Warranty: deductible difference 100 → DTA 25", ar: "الآلة: فرق خاضع ١٠٠ (جديد) ← التزام ٢٥ · الضمان: فرق خصم ١٠٠ ← أصل ٢٥" },
        { en: "Losses 240 → DTA 60 — the probable-profits test: forecast 500 ≥ 240 → recognise IN FULL", ar: "الخسائر ٢٤٠ ← أصل ٦٠ — اختبار الربحية: المتوقع ٥٠٠ ≥ ٢٤٠ ← اعترف بالكامل" },
        { en: "Deferred income = (25 + 60) − 25 = 60 → total tax expense = 250 − 60 = 190 → effective rate 19%", ar: "إيراد مؤجل = (٢٥ + ٦٠) − ٢٥ = ٦٠ ← مصروف الضريبة = ٢٥٠ − ٦٠ = ١٩٠ ← معدل فعلي ١٩٪" },
        { en: "The story the 19% tells: the loss DTA recognised for the first time (60) is what pulled the rate below 25%", ar: "ما يرويه معدل ١٩٪: أصل الخسائر المعترف به أول مرة (٦٠) هو ما أنزل المعدل دون ٢٥٪" },
      ],
    },
    { kind: "h", text: { en: "Offsetting & presentation", ar: "المقاصة والعرض" } },
    {
      kind: "p",
      text: {
        en: "Offset a current/deferred tax ASSET against a LIABILITY (or vice versa) only when the entity has a LEGALLY ENFORCEABLE RIGHT to set off and the amounts relate to the SAME taxation authority. Intragroup current tax balances of a group can offset if permission exists. In P&L, disclose the tax expense's major components: current, deferred, adjustments, and a reconciliation between the tax expense and the accounting profit × the statutory rate (a favourite disclosure question).",
        ar: "تقاص الأصل بالالتزام (أو العكس) فقط عند وجود حق قانوني نافذ في المقاصة وارتباط المبالغ بالهيئة الضريبية ذاتها. وفي الأرباح يفصح عن المكونات الرئيسية: الجارية والمؤجلة والتسويات، وتسوية بين مصروف الضريبة وحاصل ضرب الربح المحاسبي في المعدل القانوني.",
      },
    },
    { kind: "h", text: { en: "Disclosure essentials", ar: "أساسيات الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "The major components of tax expense: current, deferred, prior-year adjustments — and the RECONCILIATION between tax expense and accounting profit × the statutory rate, in money and/or percentage", ar: "المكونات الرئيسية للمصروف: الجارية والمؤجلة وتسويات السنوات السابقة — والتسوية بين المصروف وحاصل الربح المحاسبي × المعدل القانوني، نقديًا و/أو نسبيًا" },
        { en: "The aggregate current and deferred tax charged to EACH line: continuing operations, discontinued operations, and each OCI component", ar: "الجارية والمؤجلة المحمَّلة على كل سطر: العمليات المستمرة والمتوقفة وكل مكون من الدخل الشامل" },
        { en: "For each DTA type — deductible differences, unused losses, unused credits — and the expected reversal date", ar: "لكل نوع أصل مؤجل — فروق الخصم والخسائر غير المستخدمة والإعفاءات غير المستخدمة — وتاريخ الانعكاس المتوقع" },
        { en: "The amounts and expiry dates of unused losses and credits, and any DTA acquired in a business combination", ar: "مبالغ الخسائر والإعفاءات غير المستخدمة وتواريخ سقوطها، وأي أصل مؤجل مقتنٍ في اندماج" },
        { en: "DTL NOT recognised on investments in subsidiaries/associates/JVs (the 12.39 exemption) plus the nature of the underlying differences", ar: "الالتزامات المؤجلة غير المعترف بها على الاستثمارات في التابعات والزميلات والمشتركة (إعفاء ١٢.٣٩) مع طبيعة الفروق الكامنة" },
        { en: "The 2023 Pillar Two disclosure: the current tax exposure from the global minimum-tax rules that is known or reasonably estimable", ar: "إفصاح ٢٠٢٣ عن المحور الثاني: الانكشاف الضريبي الجاري المعروف أو القابل للتقدير المعقول من قواعد الضريبة الدنيا العالمية" },
      ],
    },
    { kind: "h", text: { en: "IFRS 3 & deferred tax inside combinations", ar: "الضريبة المؤجلة داخل الاندماجات" } },
    {
      kind: "list",
      items: [
        { en: "The acquirer books DTAs/DTLs on the acquiree's IDENTIFIABLE assets at fair value — tax effects adjust the goodwill equation (a bigger DTL means MORE goodwill)", ar: "يثبت المقتني أصولًا والتزامات مؤجلة على الأصول المحددة للمقتنى بالقيمة العادلة — والآثار تعدل معادلة الشهرة (التزام أكبر يعني شهرة أكبر)" },
        { en: "The acquiree's PRE-EXISTING DTA for unused losses counts as an identifiable asset if future profitability is probable", ar: "أصل المقتنى المؤجل المسبق عن خسائر مرحلة أصل محدد إذا رجحت الربحية" },
        { en: "After the measurement period, adjustments flow through P&L (IFRS 3) with the tax effect of the adjustment computed at the original rates", ar: "بعد فترة القياس تجري التسويات بالأرباح (IFRS 3) بأثرها الضريبي بالمعدلات الأصلية" },
      ],
    },
    { kind: "h", text: { en: "Interactions with other standards", ar: "التفاعل مع المعايير الأخرى" } },
    {
      kind: "list",
      items: [
        { en: "IFRS 16 leases: post-amendment deferred tax from day one — the gross DTA/DTL pair at commencement, then the ordinary difference engine", ar: "إيجارات IFRS 16: ضريبة مؤجلة من اليوم الأول بعد التعديل — زوج الأصل/الالتزام الإجمالي عند البدء ثم محرك الفروق المعتاد" },
        { en: "IAS 29 + IFRIC 7: in a hyperinflationary functional currency the temp differences are computed on the RESTATED (indexed) amounts, and the deferred balances join the restatement", ar: "IAS 29 وIFRIC 7: في عملة وظيفية جامحة التضخم تُحسب الفروق على المبالغ المعاد عرضها (المفهرسة)، والضريبة المؤجلة تلتحق بإعادة العرض" },
        { en: "IAS 21: a foreign operation's deferred tax is measured at ITS OWN enacted rates; translating the DTA/DTL balances creates equity (CTA) differences, never P&L", ar: "IAS 21: ضريبة العملية الأجنبية المؤجلة تقاس بمعدلاتها النافذة هي؛ وترجمة أرصدة الأصل/الالتزام تولد فروق حقوق ملكية (فروق ترجمة) لا أرباحًا" },
        { en: "IFRS 9: ECL loss provisions and FVOCI reserves are deductible-difference factories feeding the DTA", ar: "IFRS 9: مخصصات خسائر الائتمان المتوقعة واحتياطيات القيمة العادلة عبر الدخل الشامل مصانع فروق خصم تغذي الأصل المؤجل" },
        { en: "IAS 37: warranty and restructuring provisions — carrying now, deductible only when paid", ar: "IAS 37: مخصصات الضمان وإعادة الهيكلة — دفترية الآن وخصم عند الدفع فقط" },
        { en: "IAS 16 / IAS 38: revaluation surpluses route their deferred tax through OCI alongside the surplus", ar: "IAS 16 وIAS 38: فروقات إعادة التقييم تمرر ضريبتها المؤجلة عبر الدخل الشامل مع الفائض ذاته" },
        { en: "IFRS 5: the current AND deferred tax of discontinued operations is presented within the discontinued section of P&L", ar: "IFRS 5: الجارية والمؤجلة للعمليات المتوقفة تعرض ضمن قسم العمليات المتوقفة في الأرباح" },
        { en: "IAS 8: prior-period errors and policy changes carry their tax effect to opening retained earnings", ar: "IAS 8: أخطاء السنوات السابقة وتغيرات السياسات تحمل أثرها الضريبي إلى الأرباح المحتجزة الافتتاحية" },
      ],
    },
    { kind: "h", text: { en: "Transition & effective dates", ar: "الانتقال وتواريخ السريان" } },
    {
      kind: "p",
      text: {
        en: "IFRIC 23 (issued June 2017) took effect on 1 January 2019, applied retrospectively to every uncertain treatment still open. The single-transaction amendment was issued in May 2021 and applies to transactions occurring at or after 1 January 2023, retrospectively by nature (the day-one pairs are recognised as the leases commence). The May 2023 Pillar Two amendment created a MANDATORY temporary exception — no deferred tax on the top-up exposure — plus the disclosure of the known or reasonably estimable amount, effective for annual periods beginning on or after 1 January 2024.",
        ar: "سرى تفسير IFRIC 23 (صدر يونيو ٢٠١٧) من ١ يناير ٢٠١٩ بأثر رجعي على كل معالجة غير مؤكدة ما تزال مفتوحة. وتعديل المعاملة الواحدة صدر في مايو ٢٠٢١ ويسري على المعاملات الواقعة في أو بعد ١ يناير ٢٠٢٣ بأثر رجعي بطبيعته (تثبت أزواج اليوم الأول مع بدء الإيجارات). أما تعديل مايو ٢٠٢٣ للمحور الثاني فأنشأ استثناءً إلزاميًا مؤقتًا — لا ضريبة مؤجلة على انكشاف الضريبة التكميلية — مع إفصاح عن المبلغ المعروف أو القابل للتقدير، سارٍ للفترات السنوية من ١ يناير ٢٠٢٤.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The three exam killers: (1) DTL always recognised EXCEPT the two initial-recognition exceptions + goodwill + 12.39 investments; (2) DTA needs the profitability test; (3) deferred tax follows the SOURCE (OCI items → OCI). Master the trio and IAS 12 is gift marks.",
        ar: "قتلة الامتحان الثلاثة: (١) الالتزام المؤجل يعترف به دائمًا إلا في استثناءي الاعتراف الأولي والشهرة واستثمار ١٢.٣٩؛ (٢) الأصل يحتاج اختبار الربحية؛ (٣) الضريبة تتبع المصدر (بنود الدخل الشامل ← الدخل الشامل). أتقن الثلاثية تسهل درجات IAS 12.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Post-2021 the lease pair is ON the books from day one — a gross DTL on the ROU asset and a gross DTA on the lease liability, net nil at commencement, then typically a net DTA emerges as the asset depreciates away faster than the payment deductions unwind the liability.",
        ar: "بعد ٢٠٢١ زوج الإيجار مثبت من اليوم الأول — التزام إجمالي على أصل الحق في الاستخدام وأصل إجمالي على التزام الإيجار، صافيه صفر عند البدء، ثم يظهر عادة أصل صافٍ مع إهلاك الأصل أسرع من استهلاك خصومات السداد للالتزام.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Revaluation trap: the deferred tax on an IAS 16/38 revaluation goes to OCI with the surplus — and then REVERSES through P&L as the extra depreciation unwinds the difference. Recognition to OCI, reversal to P&L: the two legs do NOT land in the same place.",
        ar: "فخ إعادة التقييم: ضريبة إعادة التقييم وفق IAS 16/38 تذهب للدخل الشامل مع الفائض — ثم تنعكس عبر الأرباح مع تفكيك الإهلاك الإضافي للفرق. الاعتراف في الدخل الشامل والانعكاس في الأرباح: الساقان لا تحطان في المكان ذاته.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "A rate change is a REMEASUREMENT event: the moment the new rate is substantively enacted, every DTA/DTL is re-priced and the hit lands in the period of change (P&L, or OCI for OCI-sourced differences). An announced-but-unpassed rise moves nothing yet.",
        ar: "تغير المعدل حدث إعادة قياس: لحظة صيرورة المعدل الجديد مشرَّعًا جوهريًا يعاد تسعير كل أصل والتزام مؤجل، ويقع الأثر في فترة التغير (بالأرباح أو بالدخل الشامل للفروق المصدرها كذلك). أما الارتفاع المعلن غير المشروع فلا يحرك شيئًا بعد.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "IAS 29 + IAS 12 indexation trap: compute the temp differences on the RESTATED amounts — index the carrying amounts and the tax bases into closing units FIRST, then apply IAS 12; the deferred balances themselves ride the IFRIC 7 restatement. A question handing you NOMINAL figures and asking for deferred tax is testing whether you index first.",
        ar: "فخ فهرسة IAS 29 + IAS 12: احسب الفروق على المبالغ المعاد عرضها — افهرس القيم الدفترية والأسس الضريبية إلى وحدات الإقفال أولًا ثم طبق IAS 12؛ وأرصدة الضريبة المؤجلة ذاتها تركب موجة إعادة عرض IFRIC 7. فالسؤال الذي يعطيك أرقامًا اسمية ويطلب الضريبة المؤجلة يختبر هل تفهرس أولًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "\"Enacted\" is not \"announced\": the rate must be law (or substantively enacted — published with virtual certainty of passing) by the REPORTING date. A budget-day headline is a disclosure, not a measurement input.",
        ar: "«النافذ» ليس «المعلن»: يجب أن يكون المعدل قانونًا (أو مشرَّعًا جوهريًا — منشورًا بيقين شبه تام للإقرار) بتاريخ التقرير. فمانشيت يوم الموازنة إفصاح لا مدخل قياس.",
      },
    },
  ],
}
