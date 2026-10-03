/** IAS 37 — Provisions, Contingent Liabilities and Contingent Assets */

import type { Standard } from "../types"

export const IAS_37: Standard = {
  code: "IAS 37",
  title: { en: "Provisions, Contingent Liabilities and Contingent Assets", ar: "المخصصات والالتزامات والأصول المحتملة" },
  topic: "revenue",
  effective: { en: "Effective 1 Jul 1999 · IFRIC 21/IFRS 3-adjacent guidance applies", ar: "سارٍ من ١ يوليو ١٩٩٩ · مع تفسيري IFRIC 21 وIFRS 3" },
  blocks: [
    { kind: "h", text: { en: "Objective & the definitions", ar: "الهدف والتعريفات" } },
    {
      kind: "p",
      text: {
        en: "A PROVISION is a liability of uncertain timing or amount, recognised by estimation — the honest middle ground between 'know exactly' (a payable) and 'maybe' (a contingent liability). IAS 37 polices the boundary so entities neither bury future operating losses in today's balance sheet nor hide today's obligations behind the word 'estimate'.",
        ar: "المخصص التزام توقيته أو مبلغه غير مؤكد يعترف به بالتقدير — الوسط الأمين بين «نعرف بالضبط» (دائنون) و«ربما» (التزام محتمل). وينظم IAS 37 الحدود فلا تدفن المنشآت خسائر تشغيل مستقبلية في ميزانية اليوم ولا تخفي التزامات الحاضر خلف كلمة «تقدير».",
      },
    },
    { kind: "h", text: { en: "The three-gate recognition test", ar: "اختبار الاعتراف الثلاثي" } },
    {
      kind: "tree",
      root: { en: "Obligation at the reporting date", ar: "التزام بتاريخ التقرير" },
      branches: [
        {
          when: { en: "PRESENT obligation (legal or constructive) from a PAST obligating event + PROBABLE outflow (> 50% likely) + RELIABLE estimate", ar: "التزام قائم (قانوني أو كلي) من حدث مُلزِم ماضٍ + تدفق مرجح (أكثر من ٥٠٪) + تقدير موثوق" },
          then: { en: "RECOGNISE A PROVISION (a liability) — discount if the time value is material", ar: "اعترف بمخصص (التزامًا) — مع الخصم إذا كان أثر القيمة الزمنية جوهريًا", red: true },
        },
        {
          when: { en: "POSSIBLE outflow (possible but not probable) — or a probable outflow that cannot be measured reliably", ar: "تدفق ممكن لا مرجح — أو مرجح لا يمكن تقديره موثوقًا" },
          then: { en: "CONTINGENT LIABILITY → DISCLOSE (nature, uncertain timing/amount, financial-effect estimate, unless remote)", ar: "التزام محتمل ← إفصاح (الطبيعة، التوقيت/المبلغ غير المؤكد، تقدير الأثر) ما لم يكن بعيدًا", red: true },
        },
        {
          when: { en: "No obligation — merely an intention or a future operating change", ar: "لا التزام — مجرد نية أو تغيير تشغيلي مستقبلي" },
          then: { en: "DO NOTHING — future operating losses never qualify; no restructuring provision without a detailed formal plan", ar: "لا شيء — فخسائر التشغيل المستقبلية لا تصلح؛ ولا مخصص إعادة هيكلة دون خطة رسمية مفصلة", red: true },
        },
        {
          when: { en: "A CONTINGENT ASSET (a possible inflow from a past event)", ar: "أصل محتمل (تدفق وارد ممكن من حدث ماضٍ)" },
          then: { en: "Disclose when PROBABLE; recognise ONLY when VIRTUALLY CERTAIN — the asymmetry with liabilities (prudence)", ar: "أفصح عند الرجحان؛ ولا تعترف إلا عند التأكد شبه التام — عدم التماثل مع الالتزامات (الحذر)", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The past-event discipline: an obligating event has ALREADY happened — a contaminated site, a lawsuit filed, goods sold with a warranty. A board decision to restructure is NOT enough (no obligating event yet — IFRIC 21's Levelling argument for levies parallels this); an announced, detailed plan RAISES a CONSTRUCTIVE obligation because valid expectations are created in those affected.",
        ar: "انضباط الحدث الماضي: حدث مُلزِم سبق وقوعه — موقع ملوث، دعوى مقضومة، سلع بيعت بضمان. وقرار مجلس بلا خطة معلنة لا يكفي (لا حدث ملزم بعد)؛ والخطة المعلنة المفصلة تنشئ التزامًا كليًا لأنها تثير توقعات معقولة لدى المتأثرين.",
      },
    },
    { kind: "h", text: { en: "Measurement — the best-estimate machinery", ar: "القياس — آلية أفضل تقدير" } },
    {
      kind: "formula",
      title: { en: "How much to book", ar: "كم يُثبت" },
      lines: [
        { en: "A POPULATION of similar items (warranty claims) → EXPECTED VALUE: sum of (outcome × probability)", ar: "مجموعة بنود متماثلة (دعاوى ضمان) ← القيمة المتوقعة: مجموع (النتيجة × احتمالها)" },
        { en: "A SINGLE obligation (one lawsuit) → the MOST LIKELY outcome — but still weigh serious alternatives", ar: "التزام واحد (قضية واحدة) ← النتيجة الأرجح — مع وزن البدائل الجدية" },
        { en: "Risks & uncertainties adjust the AMOUNT (not the discount rate) — a higher risk means a HIGHER provision", ar: "المخاطر وعدم التأكد تعدل المبلغ لا معدل الخصم — فالخطر الأعلى مخصص أعلى" },
        { en: "DISCOUNT when the time value is material: pre-tax rate reflecting the market's assessment of the risk; the unwinding of the discount is a FINANCING cost (IAS 37.60) — a separate P&L line", ar: "خصم عند جوهرية القيمة الزمنية: معدل قبل الضريبة يعكس تقييم السوق للمخاطر؛ وفك الخصم مصروف تمويلي بسطر مستقل" },
        { en: "Future events (technology, legislation, project changes) count ONLY with sufficient objective evidence — e.g. a NEW law only when enactment is 'virtually certain' in a way the site closure will follow", ar: "الأحداث المستقبلية لا تُعد إلا بدليل موضوعي كافٍ — كقانون جديد عند تحقق شبه مؤكد لتشريعه" },
        { en: "Expected reimbursement (an insurance payout) → a SEPARATE asset when virtually certain; the expense stays gross", ar: "الاسترداد المتوقع (تعويض تأمين) ← أصل مستقل عند التأكد شبه التام؛ والمصروف يبقى بإجماله" },
      ],
    },
    {
      kind: "example",
      title: { en: "Warranty expected-value", ar: "القيمة المتوقعة للضمان" },
      lines: [
        { en: "1,000 units sold with a 1-year warranty: 60% no claim · 30% minor repair (40 each) · 10% major (250 each)", ar: "١٬٠٠٠ وحدة بضمان سنة: ٦٠٪ بلا مطالبة · ٣٠٪ إصلاح بسيط (٤٠ لكل) · ١٠٪ جسيم (٢٥٠ لكل)" },
        { en: "Provision = 1,000 × [(60% × 0) + (30% × 40) + (10% × 250)] = 1,000 × 37 = 37,000", ar: "المخصص = ١٬٠٠٠ × [(٦٠٪ × ٠) + (٣٠٪ × ٤٠) + (١٠٪ × ٢٥٠)] = ١٬٠٠٠ × ٣٧ = ٣٧٬٠٠٠" },
        { en: "Lawsuit single-item: 60% lose 500 · 40% win → MOST LIKELY = lose → provision 500 (not EV 300)", ar: "قضية مفردة: ٦٠٪ خسارة ٥٠٠ و٤٠٪ فوز ← الأرجح خسارة ← مخصص ٥٠٠ (لا القيمة المتوقعة ٣٠٠)" },
        { en: "Discipline: REVIEW at each reporting date and adjust to the current best estimate", ar: "الانضباط: راجع في كل تقرير وعدّل لأفضل تقدير جارٍ" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Provision entries", ar: "قيود المخصص" },
      rows: [
        { dr: { en: "Warranty expense (P&L)", ar: "مصروف الضمان (بالأرباح)" }, cr: { en: "Provision for warranties", ar: "مخصص الضمان" }, red: true },
        { dr: { en: "Provision for warranties", ar: "مخصص الضمان" }, cr: { en: "Cash / payables (claims settled)", ar: "نقد/دائنون (تسوية المطالبات)" } },
        { dr: { en: "Reimbursement asset (insurance)", ar: "أصل الاسترداد (تأمين)" }, cr: { en: "Reimbursement income (P&L — separate line)", ar: "إيراد الاسترداد (سطر مستقل)" }, red: true },
        { dr: { en: "Finance cost — discount unwind", ar: "مصروف تمويلي — فك الخصم" }, cr: { en: "Provision (accretion)", ar: "المخصص (تنامٍ)" } },
      ],
    },
    { kind: "h", text: { en: "Onerous contracts", ar: "العقود المفضِرة" },
    },
    {
      kind: "tree",
      root: { en: "Unavoidable costs of the contract exceed its economic benefits", ar: "تكاليف العقد الحتمية تتجاوز منافعه الاقتصادية" },
      branches: [
        {
          when: { en: "The entity can cancel without penalty cheaper than performing", ar: "الإلغاء بلا غرامة أرخص من التنفيذ" },
          then: { en: "NOT onerous yet — measure the exit path when the trigger truly lands", ar: "ليس مفضِّرًا بعد — قِس مسار الخروج عند وقوع المحفز فعلا" },
        },
        {
          when: { en: "Unavoidable costs = the LOWER of the cost of FULFILLING and any PENALTY for exiting", ar: "التكاليف الحتمية = الأدنى من تكلفة التنفيذ وغرامة الخروج" },
          then: { en: "Recognise the onerous-contract provision NOW (IAS 37.68) — IFRS 15 long-term construction losses ride this exact rule", ar: "اعترف بمخصص العقد المفضِر الآن — وبها تُعترف خسائر عقود الإنشاء طويلة الأجل في IFRS 15", red: true },
        },
        {
          when: { en: "Costs of restructuring the contract's fulfilment before the onerous trigger", ar: "تكاليف إعادة هيكلة تنفيذ العقد قبل المحفز" },
          then: { en: "NOT in the onerous provision — a restructuring provision follows its own gates below", ar: "ليست ضمن المخصص المفضِر — فمخصص إعادة الهيكلة له بواباته أدناه" },
        },
      ],
    },
    { kind: "h", text: { en: "Restructuring — the two routes", ar: "إعادة الهيكلة — المساران" },
    },
    {
      kind: "list",
      items: [
        { en: "CONSTRUCTIVE obligation arises only when the entity has a DETAILED FORMAL plan AND raised VALID EXPECTATION in those affected (announced or begun implementation)", ar: "ينشأ الالتزام الكلي فقط عند وجود خطة رسمية مفصلة وإثارة توقع معقول لدى المتأثرين (إعلان أو بدء تنفيذ)" },
        { en: "A board decision alone is NOT a constructive obligation — announce or implement first", ar: "قرار المجلس وحده لا يكفي — أعلن أو نفذ أولًا" },
        { en: "Include ONLY the DIRECT costs: termination payments, closure costs, contract-termination penalties", ar: "أدرج التكاليف المباشرة فقط: مدفوعات إنهاء الخدمة، تكاليف الإغلاق، غرامات فسخ العقود" },
        { en: "EXCLUDE: retraining, relocation, marketing, the future operating losses of the new structure — and NEVER offset a gain on disposal of assets against the provision", ar: "استبعد: إعادة التدريب والنقل والتسويق وخسائر تشغيل الهيكل الجديد — ولا تقاص ربح تخرُّد الأصول بالمخصص أبدًا" },
        { en: "IAS 19's termination-benefits trigger (announced plan) usually fires EARLIER than IAS 37's restructuring test — a sequencing trap in group scenarios", ar: "محفز مزايا الإنهاء في IAS 19 يسبق عادة اختبار إعادة الهيكلة في IAS 37 — فخ تسلسل في السيناريوهات المجمعة" },
      ],
    },
    { kind: "h", text: { en: "IFRIC 21 — levies & other periodic charges", ar: "تفسير IFRIC 21 — الرسوم الدورية" },
    },
    {
      kind: "p",
      text: {
        en: "A levy's obligating event is the one the LEGISLATION specifies as triggering the liability — typically the period's END (a revenue-based levy) or a minimum revenue threshold DURING the year; a bank-deposit-guarantee scheme recognized as the deposits rise. Provisions never front-run the legislated trigger: if the obligating event is 'operating for the year', the provision accrues progressively; if it is 'being over the threshold at year-end', the provision waits until the threshold is crossed.",
        ar: "الحدث المُلزم للرسم هو ما يحدده التشريع بوصفه محفز التزام — غالبًا نهاية الفترة (رسم على الإيراد) أو تجاوز حد أدنى خلال السنة؛ ومخططات ضمان الودائع تُعترف بتزايد الودائع. فالمخصصات لا تسبق المحفز المشروع: إن كان الحدث «التشغيل طوال السنة» استُحق تدريجيًا؛ وإن كان «تجاوز الحد في نهايتها» انتظر حتى العبور.",
      },
    },
    { kind: "h", text: { en: "Disclosure essentials", ar: "أساسيات الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "For each PROVISION class: carrying amount (opening→closing rollforward: additions, used, reversed, unwound), the basis of estimation", ar: "لكل فئة مخصص: القيمة بتسوية افتتاحية-ختامية (إضافات، استخدام، رد، فك خصم) وأساس التقدير" },
        { en: "Contingent liabilities: nature + estimate of financial effect + uncertainties + possibility of reimbursement — unless remote (then NOTHING)", ar: "الالتزامات المحتملة: الطبيعة + تقدير الأثر + عدم التأكد + إمكان الاسترداد — إلا إذا كانت بعيدة (فلا شيء)" },
        { en: "Contingent assets: disclose when PROBABLE (never overstate: a virtually-certain asset is no longer contingent — recognise it)", ar: "الأصول المحتملة: إفصاح عند الرجحان (ولا تبالغ: فالأصل شبه المؤكد لم يعد محتملًا — اعترف به)" },
        { en: "Expected timing of the outflows and discount rates used; indemnities given/received", ar: "التوقيت المتوقع للتدفقات ومعدلات الخصم؛ والتعويضات الممنوحة/المقبوضة" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The probability ladder is the exam: probable (> 50%) → provision; possible → disclose; remote → silence. And the ASSET ladder is deliberately stricter: probable → disclose; virtually certain → recognise. Write both ladders before answering any IAS 37 scenario.",
        ar: "سلّم الاحتمالات هو الامتحان: مرجح (أكثر من ٥٠٪) ← مخصص؛ ممكن ← إفصاح؛ بعيد ← صمت. وسلّم الأصل أشد قصدًا: مرجح ← إفصاح؛ شبه مؤكد ← اعتراف. اكتب السلمين قبل أي سيناريو IAS 37.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "A 'provision for future repairs of a NEW asset I plan to build' fails ALL three gates: no past event, no obligation, no outflow yet — the examiner's phrasing of future capital projects is bait.",
        ar: "«مخصص لإصلاحات أصل جديد أنوي بناءه» يبواب الثلاث بوابات: لا حدث ماضٍ ولا التزام ولا تدفق بعد — وصياغة الممتحن للمشروعات الرأسمالية المستقبلية طُعم.",
      },
    },
    {
      kind: "note",
      text: {
        en: "A constructive obligation grows out of a valid, communicated pattern — an internal unannounced policy creates nothing; the announcement to those affected is the event.",
        ar: "الالتزام البنّاء ينشأ من الممارسة الموثوقة المعلنة — ولا يكفي وجود سياسة داخلية غير معلنة؛ فالإعلان أمام المتأثرين هو الحدث.",
      },
    },
  ],
}
