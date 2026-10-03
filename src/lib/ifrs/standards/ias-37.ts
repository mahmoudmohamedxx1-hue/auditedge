/** IAS 37 — Provisions, Contingent Liabilities and Contingent Assets */

import type { Standard } from "../types"

export const IAS_37: Standard = {
  code: "IAS 37",
  title: { en: "Provisions, Contingent Liabilities and Contingent Assets", ar: "المخصصات والالتزامات والأصول المحتملة" },
  topic: "revenue",
  effective: { en: "Effective 1 Jul 1999 · IFRIC 21/IFRS 3-adjacent guidance applies", ar: "سارٍ من ١ يوليو ١٩٩٩ · مع تفسيري IFRIC 21 وIFRS 3" },
  blocks: [
    {
      kind: "p",
      text: {
        en: "Core principle — a PROVISION is recognised only when the entity has a PRESENT obligation (legal or constructive) arising from a PAST obligating event, settlement is PROBABLE (more likely than not, > 50%) to drain resources, and the amount can be estimated RELIABLY. IAS 37 polices the boundary between provisions, contingent liabilities and contingent assets so entities neither bury future operating losses in today's balance sheet nor hide today's obligations behind the word 'estimate'.",
        ar: "المبدأ الأساسي — لا يُعترف بالمخصص إلا عند وجود التزام قائم (قانوني أو كلي) نشأ عن حدث مُلزِم ماضٍ، وترجيح (الأرجح لا المحتمل، أكثر من ٥٠٪) أن يستهلك تسويته موارد، وقابلية تقدير مبلغه بدرجة موثوقة. وينظم IAS 37 الحدود بين المخصصات والالتزامات والأصول المحتملة فلا تدفن المنشآت خسائر التشغيل المستقبلية في ميزانية اليوم ولا تخفي التزامات الحاضر خلف كلمة «تقدير».",
      },
    },
    {
      kind: "note",
      text: {
        en: "A provision is a LIABILITY — uncertain only in timing or amount. A 'reserve' for a general business risk, profit smoothing or future maintenance is NOT a provision: the definition of a liability fails at the first gate.",
        ar: "المخصص التزام — عدم اليقين في توقيته أو مبلغه فقط. أما «الاحتياطي» للمخاطر العامة أو تنعيم الأرباح أو الصيانة المستقبلية فليس مخصصًا: فتعريف الالتزام يسقط عند البوابة الأولى.",
      },
    },
    { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
    {
      kind: "p",
      text: {
        en: "IAS 37 prescribes the recognition and measurement rules for provisions (liabilities of uncertain timing or amount) and the disclosure rules for contingent liabilities and contingent assets. It applies whenever no other standard deals with a specific liability — the residual liability standard — and its three recognition gates stop provisions from becoming a prudence cookie-jar. A true provision NARROWS over time as uncertainty resolves; that lifecycle (recognise → unwind the discount → use or reverse) is the exam's favourite structure.",
        ar: "يحدد IAS 37 قواعد الاعتراف والقياس للمخصصات (التزامات غير مؤكدة التوقيت أو المبلغ) وقواعد الإفصاح عن الالتزامات والأصول المحتملة. ويطبق كلما لم يعالج معيار آخر التزامًا بعينه — فهو المعيار المتبقي للالتزامات — وبواباته الثلاث تمنع تحول المخصصات إلى وعاء للحذر المفرط. والمخصص الحقيقي يضيق مع الزمن بانحلال عدم التأكد؛ ودورته (اعتراف ← فك الخصم ← استخدام أو رد) هي البنية المفضلة للامتحان.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Scope boundary — IAS 37 steps aside when another standard owns the liability. The exclusions examiners name: income taxes (IAS 12), employee benefits including termination benefits (IAS 19), loss-making construction contracts (IFRS 15 rides IAS 37's onerous-contract rule), leases (IFRS 16 — a lessee never books an onerous-lease provision, it impairs the right-of-use asset instead), and financial guarantee contracts issued (IFRS 9's sphere, though the issuer may elect IAS 37-type measurement where IFRS 4 permits).",
        ar: "حدود النطاق — ينسحب IAS 37 متى تولى معيار آخر الالتزام. والاستثناءات التي يسميها الممتحنون: ضرائب الدخل (IAS 12)، ومزايا العاملين ومنها مزايا الإنهاء (IAS 19)، وعقود الإنشاء الخاسرة (يركب IFRS 15 قاعدة العقود المفضِرة في IAS 37)، وعقود الإيجار (IFRS 16 — فالمستأجر لا يكوّن مخصص عقد إيجار مفضِر بل يخفض قيمة أصل حق الاستخدام)، وضمانات الائتمان الصادرة (فلك IFRS 9، مع جواز انتخاب قياس على طريقة IAS 37 حيث يجيز IFRS 4).",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Taxes — IAS 12: current and deferred tax liabilities are never provisions", ar: "الضرائب — IAS 12: التزامات الضريبة الجارية والمؤجلة ليست مخصصات أبدًا" },
        { en: "Employee benefits — IAS 19: salaries, pensions, termination benefits", ar: "مزايا العاملين — IAS 19: الأجور والمعاشات ومزايا الإنهاء" },
        { en: "Onerous construction contracts — IFRS 15 applies IAS 37's measurement", ar: "عقود الإنشاء المفضِرة — يطبق IFRS 15 قياس IAS 37" },
        { en: "Leases — IFRS 16: lessee onerous leases become ROU-asset impairment, not provisions; a lessor's operating lease may still be onerous here", ar: "الإيجار — IFRS 16: العقود المفضِرة للمستأجر انخفاضٌ لأصل حق الاستخدام لا مخصصات؛ وعقد التشغيل لدى المؤجر قد يظل مفضِرًا هنا" },
        { en: "Financial guarantees issued — IFRS 9 / IFRS 4 territory", ar: "ضمانات الائتمان الصادرة — أرض IFRS 9 وIFRS 4" },
      ],
    },
    { kind: "h", text: { en: "Key definitions", ar: "التعريفات الرئيسة" } },
    {
      kind: "list",
      items: [
        { en: "PROVISION: a liability of uncertain timing or amount", ar: "المخصص: التزام غير مؤكد التوقيت أو المبلغ" },
        { en: "LEGAL obligation: from a contract, legislation, or other operation of law", ar: "الالتزام القانوني: من عقد أو تشريع أو حكم قانوني آخر" },
        { en: "CONSTRUCTIVE obligation: one that flows from the entity's actions — a valid expectation created by past practice, a published policy, or a sufficiently specific current statement", ar: "الالتزام الكلي: ينشأ عن أفعال المنشأة — توقع معقول أوجدته ممارسة سابقة أو سياسة معلنة أو تصريح حال محدد بما يكفي" },
        { en: "OBLIGATING EVENT: a past event leaving NO realistic alternative to settling the obligation", ar: "الحدث المُلزِم: حدث ماضٍ لا يترك بديلًا واقعيًا عن تسوية الالتزام" },
        { en: "CONTINGENT LIABILITY: a possible obligation (confirmed only by uncertain future events), or a present obligation that fails probable outflow or reliable measurement", ar: "الالتزام المحتمل: التزام ممكن يؤكده فقط حدث مستقبلي غير مؤكد، أو التزام قائم لا يحقق ترجيح التدفق أو القياس الموثوق" },
        { en: "CONTINGENT ASSET: a possible asset from past events, confirmed only by uncertain future events not fully within the entity's control", ar: "الأصل المحتمل: أصل ممكن من أحداث ماضية، يؤكده فقط حدث مستقبلي غير مؤكد ليس كله بيد المنشأة" },
        { en: "ONEROUS CONTRACT: a contract whose unavoidable costs exceed the economic benefits expected", ar: "العقد المفضِر: عقد تتجاوز تكاليفه الحتمية منافعه المتوقعة" },
      ],
    },
    { kind: "h", text: { en: "The three-gate recognition test", ar: "اختبار الاعتراف الثلاثي" } },
    {
      kind: "steps",
      items: [
        { en: "Gate 1 — PRESENT OBLIGATION: a legal or constructive obligation from an obligating event that has ALREADY happened (contaminated land, a lawsuit filed, goods sold under warranty)", ar: "البوابة ١ — التزام قائم: التزام قانوني أو كلي من حدث مُلزِم وقع فعلًا (أرض ملوثة، دعوى مرفوعة، سلع بيعت بضمان)" },
        { en: "Gate 2 — PROBABLE OUTFLOW: more likely than not (> 50%) that settling will drain resources embodying economic benefits", ar: "البوابة ٢ — تدفق مرجح: الأرجح (أكثر من ٥٠٪) أن يستهلك التسوية موارد تحمل منافع اقتصادية" },
        { en: "Gate 3 — RELIABLE ESTIMATE: the amount can be estimated reliably — 'unreliable' must be genuinely exceptional, not an escape from measurement pain", ar: "البوابة ٣ — تقدير موثوق: يمكن تقدير المبلغ بدرجة موثوقة — و«عدم الموثوقية» يجب أن يكون استثنائيًا بحق لا هروبًا من مشقة القياس" },
        { en: "All three pass → RECOGNISE A PROVISION at the best estimate; a gate fails → contingent liability (disclose) or silence (remote)", ar: "تحقق الثلاث ← اعترف بمخصص بأفضل تقدير؛ وسقوط بوابة ← التزام محتمل (إفصاح) أو صمت (بعيد)" },
      ],
    },
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
          then: { en: "CONTINGENT LIABILITY → DISCLOSE (nature, uncertain timing/amount, financial-effect estimate), unless remote", ar: "التزام محتمل ← إفصاح (الطبيعة، التوقيت/المبلغ غير المؤكد، تقدير الأثر المالي) ما لم يكن بعيدًا", red: true },
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
        en: "The past-event discipline: an obligating event has ALREADY happened — a contaminated site, a lawsuit filed, goods sold with a warranty. A board decision to restructure is NOT enough (no obligating event yet); an announced, detailed plan RAISES a CONSTRUCTIVE obligation because valid expectations are created in those affected. No obligation, no provision — regardless of how likely a future outflow looks.",
        ar: "انضباط الحدث الماضي: حدث مُلزِم سبق وقوعه — موقع ملوث، دعوى مرفوعة، سلع بيعت بضمان. وقرار مجلس بلا إعلان لا يكفي (لا حدث ملزم بعد)؛ والخطة المعلنة المفصلة تنشئ التزامًا كليًا لأنها تثير توقعات معقولة لدى المتأثرين. ولا التزام فلا مخصص — مهما بدا التدفق المستقبلي مرجحًا.",
      },
    },
    { kind: "h", text: { en: "Legal vs constructive obligations", ar: "الالتزامات القانونية والكليّة" } },
    {
      kind: "list",
      items: [
        { en: "LEGAL: contracts (warranty terms), legislation (environmental clean-up laws), court judgments awaiting enforcement", ar: "قانوني: عقود (شروط ضمان)، تشريعات (قوانين المعالجة البيئية)، أحكام قضائية بانتظار التنفيذ" },
        { en: "CONSTRUCTIVE: a pattern of practice, a published policy, or a sufficiently specific current statement — publicly announced closures, a standing no-questions refund practice", ar: "كلي: نمط ممارسة أو سياسة معلنة أو تصريح حال محدد بما يكفي — إغلاقات معلنة علنًا، أو ممارسة استرداد قائمة بلا مساءلة" },
        { en: "The constructive test is TWO-SIDED: the entity has created a valid expectation AND has no realistic alternative but to honour it", ar: "اختبار الالتزام الكلي ذو وجهين: أوجدت المنشأة توقعًا معقولًا وليس أمامها بديل واقعي سوى الوفاء" },
        { en: "An obligation 'in substance' counts: where the only realistic alternative is to restructure or operate at a loss, the past event has obliged", ar: "الالتزام «في الجوهر» يُحتسب: فحيث لا بديل واقعي سوى إعادة الهيكلة أو الخسارة، فقد ألزم الحدث الماضي" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Exam clue: 'the company has publicly announced' → constructive obligation ON; 'the board intends' → nothing yet. The adverb is the whole mark.",
        ar: "مؤشر امتحاني: «أعلنت الشركة علنًا» ← التزام كلي متحقق؛ «ينوي المجلس» ← لا شيء بعد. الظرف اللغوي هو العلامة كلها.",
      },
    },
    { kind: "h", text: { en: "Measurement — the best-estimate machinery", ar: "القياس — آلية أفضل تقدير" } },
    {
      kind: "p",
      text: {
        en: "Measure the provision at the BEST ESTIMATE of the expenditure required to settle the present obligation at the END of the reporting period — the amount for which the obligation could be settled, or transferred to a third party, on that date. For a POPULATION of similar items use the EXPECTED VALUE (probability-weighted); for a SINGLE obligation use the MOST LIKELY outcome, still weighing the serious alternatives around it. The estimate deliberately includes RISKS AND UNCERTAINTIES — a riskier obligation means a HIGHER provision, not a higher discount rate.",
        ar: "يقاس المخصص بأفضل تقدير للنفقة اللازمة لتسوية الالتزام القائم في نهاية فترة التقرير — المبلغ الذي كان يمكن به تسوية الالتزام أو تحويله لطرف ثالث بذلك التاريخ. فلمجموعة بنود متماثلة تُستخدم القيمة المتوقعة (مرجحة بالاحتمالات)؛ وللالتزام المفرد تُستخدم النتيجة الأرجح مع وزن البدائل الجدية حولها. ويتضمن التقدير المخاطر وعدم التأكد قصدين — فالخطر الأعلى مخصص أعلى لا معدل خصم أعلى.",
      },
    },
    {
      kind: "formula",
      title: { en: "How much to book", ar: "كم يُثبت" },
      lines: [
        { en: "A POPULATION of similar items (warranty claims) → EXPECTED VALUE: sum of (outcome × probability)", ar: "مجموعة بنود متماثلة (مطالبات ضمان) ← القيمة المتوقعة: مجموع (النتيجة × احتمالها)" },
        { en: "A SINGLE obligation (one lawsuit) → the MOST LIKELY outcome — but still weigh serious alternatives", ar: "التزام مفرد (قضية واحدة) ← النتيجة الأرجح — مع وزن البدائل الجدية" },
        { en: "Risks & uncertainties adjust the AMOUNT (not the discount rate) — a higher risk means a HIGHER provision", ar: "المخاطر وعدم التأكد تعدل المبلغ لا معدل الخصم — فالخطر الأعلى مخصص أعلى" },
        { en: "Expected reimbursement (an insurance payout) → a SEPARATE asset when virtually certain; the expense stays GROSS", ar: "الاسترداد المتوقع (تعويض تأمين) ← أصل مستقل عند التأكد شبه التام؛ والمصروف يبقى بإجماله" },
        { en: "Future events (technology, legislation, project changes) count ONLY with sufficient objective evidence — a new law only when its enactment is virtually certain", ar: "الأحداث المستقبلية (تقنية، تشريع، تغيرات مشروع) لا تُعد إلا بدليل موضوعي كافٍ — والقانون الجديد فقط عند شبه التأكد من تشريعه" },
        { en: "Review at EVERY reporting date: adjust to the current best estimate, use it, or reverse it", ar: "راجع في كل تقرير: اضبط لأفضل تقدير جارٍ، أو استخدمه، أو اردُده" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Discounting — where the time value of money is material, the provision is the PRESENT VALUE of the expected outflows. Use a PRE-TAX rate (or rates) reflecting current market assessments of the time value of money AND the risks specific to the liability; never double-count risk already embedded in the cash flows. The discount then UNWINDS each period as a FINANCING cost in P&L (presented as an interest expense), so the provision grows toward the ultimate settlement amount. IFRIC 1 adds the companion rule for decommissioning and restoration costs: a change in the measurement of such a liability adjusts the COST OF THE RELATED ASSET, not profit.",
        ar: "الخصم — حيث تكون القيمة الزمنية للنقد جوهرية يكون المخصص هو القيمة الحالية للتدفقات المتوقعة، بمعدل (أو معدلات) قبل الضريبة يعكس التقييمات السوقية الجارية للقيمة الزمنية وللمخاطر الخاصة بالالتزام تحديدًا؛ ولا تعد مخاطرة أُدرجت في التدفقات مرتين. ثم يُفَك الخصم كل فترة مصروفًا تمويليًا بالأرباح (يعرض ضمن فوائد) فينمو المخصص نحو مبلغ التسوية النهائي. ويضيف IFRIC 1 القاعدة الرفيقة لتكاليف التفكيك والمعالجة: تغير قياس ذلك الالتزام يعدّل تكلفة الأصل ذي الصلة لا الربح.",
      },
    },
    {
      kind: "example",
      title: { en: "Warranty expected-value vs single-item most-likely", ar: "القيمة المتوقعة للضمان مقابل الأرجح للبند المفرد" },
      lines: [
        { en: "1,000 units sold with a 1-year warranty: 60% no claim · 30% minor repair (40 each) · 10% major (250 each)", ar: "١٬٠٠٠ وحدة بضمان سنة: ٦٠٪ بلا مطالبة · ٣٠٪ إصلاح بسيط (٤٠ لكل) · ١٠٪ جسيم (٢٥٠ لكل)" },
        { en: "Provision = 1,000 × [(60% × 0) + (30% × 40) + (10% × 250)] = 1,000 × 37 = 37,000", ar: "المخصص = ١٬٠٠٠ × [(٦٠٪ × ٠) + (٣٠٪ × ٤٠) + (١٠٪ × ٢٥٠)] = ١٬٠٠٠ × ٣٧ = ٣٧٬٠٠٠" },
        { en: "Lawsuit single-item: 60% lose 500 · 40% win → MOST LIKELY = lose → provision 500 (not EV 300)", ar: "قضية مفردة: ٦٠٪ خسارة ٥٠٠ و٤٠٪ فوز ← الأرجح خسارة ← مخصص ٥٠٠ (لا القيمة المتوقعة ٣٠٠)" },
        { en: "Discipline: REVIEW at each reporting date and adjust to the current best estimate — claims settled reduce it, re-estimates re-measure it", ar: "الانضباط: راجع في كل تقرير وعدّل لأفضل تقدير جارٍ — فالمطالبات المسواة تخفضه والتنقيحات تعيد قياسه" },
      ],
    },
    {
      kind: "example",
      title: { en: "Discounting & unwinding — the decommissioning schedule", ar: "الخصم وفكّه — جدول التفكيك" },
      lines: [
        { en: "Nuclear plant restoration: expected cost 1,000,000 payable in 5 years; pre-tax risk-adjusted discount rate 10%", ar: "معالجة محطة نووية: تكلفة متوقعة ١٬٠٠٠٬٠٠٠ تُسدد بعد ٥ سنوات؛ معدل خصم قبل الضريبة معدَّل بالمخاطر ١٠٪" },
        { en: "Provision at recognition = 1,000,000 ÷ 1.10⁵ = 1,000,000 × 0.62092 = 620,921", ar: "المخصص عند الاعتراف = ١٬٠٠٠٬٠٠٠ ÷ ١٫١٠⁵ = ١٬٠٠٠٬٠٠٠ × ٠٫٦٢٠٩٢ = ٦٢٠٬٩٢١" },
        { en: "Year 1: interest 62,092 → 683,013 · Year 2: 68,301 → 751,314 · Year 3: 75,131 → 826,445 · Year 4: 82,645 → 909,090 · Year 5: 90,910 → 1,000,000 paid", ar: "السنة ١: فائدة ٦٢٬٠٩٢ ← ٦٨٣٬٠١٣ · السنة ٢: ٦٨٬٣٠١ ← ٧٥١٬٣١٤ · السنة ٣: ٧٥٬١٣١ ← ٨٢٦٬٤٤٥ · السنة ٤: ٨٢٬٦٤٥ ← ٩٠٩٬٠٩٠ · السنة ٥: ٩٠٬٩١٠ ← سداد ١٬٠٠٠٬٠٠٠" },
        { en: "Total unwinding = 379,079 (= 1,000,000 − 620,921): five finance costs and ZERO expense at settlement — the waiting years carry the cost", ar: "إجمالي فك الخصم = ٣٧٩٬٠٧٩ (= ١٬٠٠٠٬٠٠٠ − ٦٢٠٬٩٢١): خمسة مصروفات تمويل ولا مصروف عند التسوية — فسنوات الانتظار تحمل الكلفة" },
      ],
    },
    { kind: "h", text: { en: "Journal entries — the provision lifecycle", ar: "قيود اليومية — دورة حياة المخصص" } },
    {
      kind: "journal",
      title: { en: "Recognition → use → reimbursement", ar: "الاعتراف ← الاستخدام ← الاسترداد" },
      rows: [
        { dr: { en: "Warranty expense (P&L)", ar: "مصروف الضمان (بالأرباح)" }, cr: { en: "Provision for warranties", ar: "مخصص الضمان" }, red: true },
        { dr: { en: "Provision for warranties", ar: "مخصص الضمان" }, cr: { en: "Cash / payables (claims settled)", ar: "نقد/دائنون (تسوية المطالبات)" } },
        { dr: { en: "Provision for warranties", ar: "مخصص الضمان" }, cr: { en: "Reversal income (estimate falls — P&L)", ar: "إيراد الرد (انخفاض التقدير — بالأرباح)" } },
        { dr: { en: "Reimbursement asset (insurance, virtually certain)", ar: "أصل الاسترداد (تأمين، شبه مؤكد)" }, cr: { en: "Reimbursement income (P&L — separate line)", ar: "إيراد الاسترداد (بالأرباح — سطر مستقل)" }, red: true },
      ],
    },
    {
      kind: "journal",
      title: { en: "Unwinding the discount — the accretion entries", ar: "فك الخصم — قيود التنامي" },
      rows: [
        { dr: { en: "Finance cost — discount unwind (the year's interest)", ar: "مصروف تمويلي — فك الخصم (فائدة السنة)" }, cr: { en: "Provision (accretion)", ar: "المخصص (تنامٍ)" }, red: true },
        { dr: { en: "Provision (full carrying amount)", ar: "المخصص (القيمة الدفترية كاملة)" }, cr: { en: "Cash (settlement at maturity)", ar: "النقد (التسوية عند الاستحقاق)" } },
        { dr: { en: "Provision", ar: "المخصص" }, cr: { en: "Gain on settlement (paid less than carrying)", ar: "ربح التسوية (سداد أقل من الدفترية)" } },
        { cr: { en: "The unwinding is a FINANCING cost, never part of the original expense line", ar: "فك الخصم مصروف تمويلي — لا يجوز وضعه ضمن سطر المصروف الأصلي أبدًا", }, red: true },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Provisions are LIVING balances: review them at every reporting date and adjust to the current best estimate — settlement uses them, revised estimates re-measure them, and an obligation that is no longer probable is REVERSED through P&L. A provision used for anything other than the purpose it was set for is profit manipulation — the rollforward disclosure exists to police exactly that.",
        ar: "المخصصات أرصضة حية: تراجَع في كل تاريخ تقرير وتُعدَّل لأفضل تقدير جارٍ — فالتسوية تستخدمها، والتنقيحات تعيد قياسها، والتزام لم يعد مرجحًا يُرَدّ عبر الأرباح. وإنفاق المخصص في غير غرضه تلاعب بالربح — وكشف التسوية الافتتاحية-الختامية وُجد ليراقب هذا بعينه.",
      },
    },
    { kind: "h", text: { en: "Contingent liabilities vs contingent assets — the ladders", ar: "الالتزامات والأصول المحتملة — السلمان" } },
    {
      kind: "tree",
      root: { en: "Evidence moves before the next reporting date", ar: "يتحرك الدليل قبل تاريخ التقرير التالي" },
      branches: [
        {
          when: { en: "A contingent LIABILITY becomes probable + measurable", ar: "التزام محتمل يغدو مرجحًا وقابلًا للقياس" },
          then: { en: "START recognising a provision — the contingent liability is absorbed into the balance sheet", ar: "ابدأ الاعتراف بمخصص — فيُستوعب الالتزام المحتمل في الميزانية", red: true },
        },
        {
          when: { en: "A PROVISION falls back to possible (no longer probable)", ar: "مخصص يرتد إلى ممكن (لم يعد مرجحًا)" },
          then: { en: "REVERSE the provision, revert to disclosure", ar: "ردّ المخصص وعُد إلى الإفصاح", red: true },
        },
        {
          when: { en: "A contingent ASSET becomes virtually certain", ar: "أصل محتمل يغدو شبه مؤكد" },
          then: { en: "RECOGNISE the asset now — it is no longer contingent", ar: "اعترف بالأصل فورًا — فقد خرج من دائرة الاحتمال", red: true },
        },
        {
          when: { en: "A contingent asset stays merely possible", ar: "أصل محتمل يبقى ممكنًا فحسب" },
          then: { en: "NO disclosure — prudence silences it (only probable inflows get disclosed)", ar: "لا إفصاح — الحذر يُسكتُه (فالمكشوف عنه هو التدفقات المرجحة فقط)", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The asymmetry is deliberate: a probable liability is recognised while a probable asset is only disclosed — prudence still rules the boundary. And contingent-asset disclosure must be worded so it does not imply the inflow is virtually certain; over-egging a contingent asset is treated as a misstatement, which is why examiners word these scenarios with lawyer-like care.",
        ar: "عدم التماثل مقصود: الالتزام المرجح يُعترف به بينما الأصل المرجح يُفصح عنه فحسب — فالحذر ما يزال يحكم الحدود. ويجب أن يُصاغ إفصاح الأصل المحتمل بما لا يوحي بأن التدفق شبه مؤكد؛ فالمبالغة في أصل محتمل تُعامل تحريفًا، ولذلك يصوغ الممتحنون هذه السيناريوهات بعناية تشبه المحامين.",
      },
    },
    { kind: "h", text: { en: "Onerous contracts", ar: "العقود المفضِرة" } },
    {
      kind: "p",
      text: {
        en: "A contract is ONEROUS when the unavoidable costs of meeting its obligations exceed the economic benefits expected — a loss-making commitment that cannot be escaped. Recognise the present obligation under the contract as a provision measured at the LOWER of the cost of fulfilling and any penalty or compensation arising from failing to fulfil (the May 2020 amendment hardened this 'unavoidable costs' definition, effective 1 Jan 2022). IFRS 15's loss-making construction contracts ride exactly this rule: the full expected contract loss is recognised immediately and narrows to the point of completion.",
        ar: "يكون العقد مفضِرًا حين تتجاوز تكاليف الوفاء الحتمية منافعه المتوقعة — التزام خاسر لا مفر منه. ويعترف بالالتزام القائم بموجب العقد مخصصًا يقاس بالأدنى من تكلفة الوفاء وأي غرامة أو تعويض ينشأ عن عدم الوفاء (رسّخ تعديل مايو ٢٠٢٠ تعريف «التكاليف الحتمية» هذا، بسريان ١ يناير ٢٠٢٢). وبها تُعالج عقود الإنشاء الخاسرة في IFRS 15: تُعترف كامل خسارة العقد المتوقعة فورًا وتضيق حتى الإتمام.",
      },
    },
    {
      kind: "tree",
      root: { en: "Unavoidable costs of the contract exceed its economic benefits", ar: "تكاليف العقد الحتمية تتجاوز منافعه الاقتصادية" },
      branches: [
        {
          when: { en: "The entity can cancel without penalty cheaper than performing", ar: "الإلغاء بلا غرامة أرخص من التنفيذ" },
          then: { en: "NOT onerous yet — measure the exit path when the trigger truly lands", ar: "ليس مفضِّرًا بعد — قِس مسار الخروج عند وقوع المحفز فعلًا" },
        },
        {
          when: { en: "Unavoidable costs = the LOWER of the cost of FULFILLING and any PENALTY for exiting", ar: "التكاليف الحتمية = الأدنى من تكلفة التنفيذ وغرامة الخروج" },
          then: { en: "Recognise the onerous-contract provision NOW — IFRS 15 long-term construction losses ride this exact rule", ar: "اعترف بمخصص العقد المفضِر الآن — وبها تُعترف خسائر عقود الإنشاء طويلة الأجل في IFRS 15", red: true },
        },
        {
          when: { en: "The onerous contract is a LEASE held by a LESSEE under IFRS 16", ar: "العقد المفضِر عقدُ إيجارٍ بيد مستأجر يطبق IFRS 16" },
          then: { en: "NO onerous-lease provision — impair the RIGHT-OF-USE ASSET under IAS 36 instead; a lessor's operating lease may still be onerous under IAS 37", ar: "لا مخصص عقد مفضِر — بل خفّض قيمة أصل حق الاستخدام وفق IAS 36؛ وعقد التشغيل لدى المؤجر قد يظل مفضِرًا وفق IAS 37", red: true },
        },
        {
          when: { en: "Costs of restructuring the contract's fulfilment before the onerous trigger", ar: "تكاليف إعادة هيكلة تنفيذ العقد قبل المحفز المفضِر" },
          then: { en: "NOT in the onerous provision — a restructuring provision follows its own gates", ar: "ليست ضمن المخصص المفضِر — فمخصص إعادة الهيكلة له بواباته الخاصة" },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Unavoidable costs are the NET cost of fulfilling — the direct and incremental costs plus directly attributable overheads, less any economies from other contracts' resources — and the test runs contract by contract: provide for the ONEROUS PART only, never netting a loss-making contract against the profits of profitable ones. Anticipated recoveries (penalty income, customer contributions) are recognised only when virtually certain — the same reimbursement logic as insurance.",
        ar: "التكاليف الحتمية هي صافي كلفة الوفاء — التكاليف المباشرة والتضافية مع التحمالات المباشرة المنسوبة، مخصومًا منها أي وفورات من موارد عقود أخرى — ويسري الاختبار عقدًا عقدًا: فيُكوَّن المخصص للجزء المفضِر فقط، ولا يقاص عقد خاسر بأرباح عقود رابحة أبدًا. والاستردادات المتوقعة (إيراد غرامات، مساهمات العميل) لا تعترف إلا عند التأكد شبه التام — منطق الاسترداد ذاته كالتأمين.",
      },
    },
    { kind: "h", text: { en: "Restructuring — the two routes", ar: "إعادة الهيكلة — المساران" } },
    {
      kind: "list",
      items: [
        { en: "A CONSTRUCTIVE obligation arises only when the entity has a DETAILED FORMAL plan AND raised VALID EXPECTATION in those affected (announced or begun implementation)", ar: "ينشأ الالتزام الكلي فقط عند وجود خطة رسمية مفصلة وإثارة توقع معقول لدى المتأثرين (إعلان أو بدء تنفيذ)" },
        { en: "A board decision alone is NOT a constructive obligation — announce or implement first", ar: "قرار المجلس وحده لا يكفي — أعلن أو نفّذ أولًا" },
        { en: "Include ONLY the DIRECT costs: termination payments, closure costs, contract-termination penalties", ar: "أدرج التكاليف المباشرة فقط: مدفوعات إنهاء الخدمة، تكاليف الإغلاق، غرامات فسخ العقود" },
        { en: "EXCLUDE: retraining, relocation, marketing, the future operating losses of the new structure — and NEVER offset a gain on disposal of assets against the provision", ar: "استبعد: إعادة التدريب والنقل والتسويق وخسائر تشغيل الهيكل الجديد — ولا تقاص ربح تخرُّد الأصول بالمخصص أبدًا" },
        { en: "IAS 19's termination-benefits trigger (announced plan) usually fires EARLIER than IAS 37's restructuring test — a sequencing trap in group scenarios", ar: "محفز مزايا الإنهاء في IAS 19 يسبق عادة اختبار إعادة الهيكلة في IAS 37 — فخ تسلسل في السيناريوهات المجمعة" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Business-combination interplay — IFRS 3 blocks a restructuring provision for the ACQUIRER'S OWN plans at the acquisition date: the acquiree's books may carry only its PRE-EXISTING obligations (a plan it had already announced and made its employees expect). Expected costs of closing the acquiree's operations are part of what the acquirer paid for — the goodwill absorbs the plan's economics, and post-acquisition restructuring costs hit the acquirer's own P&L when its own IAS 37 gates are met.",
        ar: "التزامن مع تجميع الأعمال — يمنع IFRS 3 مخصص إعادة هيكلة عن خطط المشتري ذاته بتاريخ الاستحواذ: فلا تحمل دفاتر المستحوَذ عليه إلا التزاماته القائمة قبل الاستحواذ (خطة أعلنها وأثار لدى عامليه توقعًا معقولًا). فتكاليف إعادة هيكلة عملياته المتوقعة جزء مما دُفع ثمنًا — يمتص الشهرة اقتصاديات الخطة، وتضرب تكاليف ما بعد الاستحواذ أرباح المشتري عند تحقق بوابات IAS 37 لديه هو.",
      },
    },
    { kind: "h", text: { en: "Interaction — IAS 10 evidence after the reporting period", ar: "التزامن — IAS 10 وأدلة ما بعد فترة التقرير" } },
    {
      kind: "tree",
      root: { en: "New information arrives after year-end about a year-end case", ar: "معلومات جديدة تصل بعد نهاية السنة عن قضية قائمة بها" },
      branches: [
        {
          when: { en: "Evidence of conditions that EXISTED at the reporting date (the court hands down judgment on the pre-existing lawsuit)", ar: "دليل على ظروف كانت قائمة بتاريخ التقرير (محكمة تفصل في دعوى سابقة)" },
          then: { en: "ADJUSTING event → re-measure the provision in the year-end accounts", ar: "حدث تعديلي ← أعد قياس المخصص في حسابات نهاية السنة", red: true },
        },
        {
          when: { en: "Evidence of conditions arising AFTER the reporting date (a fresh contamination discovered in January)", ar: "دليل على ظروف نشأت بعد تاريخ التقرير (تلوث جديد يُكتشف في يناير)" },
          then: { en: "NON-ADJUSTING → no year-end provision; disclose a contingent liability if material", ar: "غير تعديلي ← لا مخصص بنهاية السنة؛ وأفصح عن التزام محتمل إن كان جوهريًا", red: true },
        },
        {
          when: { en: "The claim crystallises after year-end but the obligating event (the defective sale) predates it", ar: "تنبلور المطالبة بعد السنة لكن الحدث المُلزِم (البيع المعيب) يسبقها" },
          then: { en: "ADJUSTING — the provision was already required at year-end", ar: "تعديلي — كان المخصص مطلوبًا أصلًا بنهاية السنة", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "IAS 10's two questions resolve every post-year-end scenario: (1) did the OBLIGATING EVENT occur before the reporting date? (2) does the new evidence merely illuminate a condition that already existed? A judgment on a pending case and a settlement accepted after year-end on a year-old claim both adjust the provision; a brand-new January event belongs to the new year and is disclosed, not accrued, in the old one.",
        ar: "سؤالا IAS 10 يحلان كل سيناريو لما بعد نهاية السنة: (١) هل وقع الحدث المُلزِم قبل تاريخ التقرير؟ (٢) هل الدليل الجديد يكشف فقط عن ظرف كان قائمًا؟ حكم في قضية معلقة، وتسوية قُبلت بعد السنة عن مطالبة عمرها سنة — كلاهما يعدل المخصص؛ أما حدث يناير الجديد فينتمي للسنة الجديدة: يفصح عنه في القديمة ولا يستحق.",
      },
    },
    { kind: "h", text: { en: "IFRIC 21 — levies & other periodic charges", ar: "تفسير IFRIC 21 — الرسوم الدورية" } },
    {
      kind: "p",
      text: {
        en: "A levy's obligating event is the one the LEGISLATION specifies as triggering the liability — typically the period's END (a revenue-based levy) or a minimum revenue threshold DURING the year; a bank-deposit-guarantee scheme is recognised as the deposits rise. Provisions never front-run the legislated trigger: if the obligating event is 'operating for the year', the provision accrues progressively; if it is 'being over the threshold at year-end', the provision waits until the threshold is crossed.",
        ar: "الحدث المُلزِم للرسم هو ما يحدده التشريع بوصفه محفز التزام — غالبًا نهاية الفترة (رسم على الإيراد) أو تجاوز حد أدنى خلال السنة؛ ومخططات ضمان الودائع تُعترف بتزايد الودائع. فالمخصصات لا تسبق المحفز المشروع: إن كان الحدث «التشغيل طوال السنة» استُحق تدريجيًا؛ وإن كان «تجاوز الحد في نهايتها» انتظر حتى العبور.",
      },
    },
    {
      kind: "example",
      title: { en: "Levies — trigger arithmetic", ar: "الرسوم — حساب المحفز" },
      lines: [
        { en: "Annual levy 200 on every entity that OPERATES during the year: the obligating event is the operation itself → accrue progressively — 9 months in, liability = 200 × 9/12 = 150", ar: "رسم سنوي ٢٠٠ على كل منشأة تعمل خلال السنة: الحدث المُلزِم هو التشغيل ذاته ← استحقاق تدريجي — بعد ٩ أشهر، الالتزام = ٢٠٠ × ٩/١٢ = ١٥٠" },
        { en: "Alternative: levy 100 payable only if revenue EXCEEDS 1,000 in the year: the threshold is crossed on 1 November → the FULL 100 is recognised from that date (no accrual before crossing)", ar: "البديل: رسم ١٠٠ لا يُستحق إلا إذا تجاوز الإيراد ١٬٠٠٠ خلال السنة: تحقق العبور في ١ نوفمبر ← يُعترف بكامل ١٠٠ من ذلك التاريخ (لا استحقاق قبله)" },
        { en: "Retrospective drafting: a charge of 50 for 'having operated LAST year' creates the liability when that year ENDS — not ratably, not at payment", ar: "الصياغة الرجعية: رسم ٥٠ عن «مجرد التشغيل في السنة الماضية» ينشئ الالتزام بانتهاء تلك السنة — لا تدريجيًا ولا عند الدفع" },
        { en: "The levy's accounting follows the LEGISLATED trigger, never the payment date or the invoice", ar: "محاسبة الرسم تتبع المحفز المشروع، لا تاريخ السداد ولا الفاتورة أبدًا" },
      ],
    },
    { kind: "h", text: { en: "Disclosure essentials", ar: "أساسيات الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "For each PROVISION class: carrying amount with an opening→closing rollforward (additions, amounts used, reversed, unwound) and the basis of estimation", ar: "لكل فئة مخصص: القيمة الدفترية بتسوية افتتاحية-ختامية (إضافات، مبالغ مستخدمة، مردودة، مفكوكة الخصم) وأساس التقدير" },
        { en: "Contingent liabilities: nature + estimate of financial effect + uncertainties + possibility of reimbursement — unless remote (then NOTHING)", ar: "الالتزامات المحتملة: الطبيعة + تقدير الأثر المالي + عدم التأكد + إمكان الاسترداد — إلا إذا كانت بعيدة (فلا شيء)" },
        { en: "Contingent assets: disclose when PROBABLE (never overstate: a virtually-certain asset is no longer contingent — recognise it)", ar: "الأصول المحتملة: إفصاح عند الرجحان (ولا تبالغ: فالأصل شبه المؤكد لم يعد محتملًا — اعترف به)" },
        { en: "Expected timing of the outflows and the discount rates used; indemnities given/received", ar: "التوقيت المتوقع للتدفقات ومعدلات الخصم المستخدمة؛ والتعويضات الممنوحة/المقبوضة" },
      ],
    },
    { kind: "h", text: { en: "Effective dates & amendments", ar: "تواريخ السريان والتعديلات" } },
    {
      kind: "p",
      text: {
        en: "IAS 37 was issued in 1998 and is effective from 1 July 1999. IFRIC 21 Levies (2014) fixed the obligating-event logic for levies and similar periodic charges. The May 2020 amendment 'Onerous Contracts — Cost of Fulfilling a Contract' (effective 1 January 2022) clarified that unavoidable costs are the lower of the cost of fulfilling and the penalty for exiting — a clarification examiners now quote directly.",
        ar: "صدر IAS 37 عام ١٩٩٨ وسارٍ من ١ يوليو ١٩٩٩. وثبّت تفسير IFRIC 21 عن الرسوم (٢٠١٤) منطق الحدث المُلزِم للرسوم والرسوم الدورية المماثلة. ووضّح تعديل مايو ٢٠٢٠ «العقود المفضِرة — تكلفة الوفاء بالعقد» (سارٍ من ١ يناير ٢٠٢٢) أن التكاليف الحتمية هي الأدنى من تكلفة الوفاء وغرامة الخروج — توضيح يقتبسه الممتحنون الآن مباشرة.",
      },
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
      kind: "tip",
      text: {
        en: "Dividends and smoothing: no provision for proposed dividends (a liability only when declared), no 'general reserves' for price or currency smoothing, no provision for future capex — an exam trio that each time fails the definition of a liability.",
        ar: "التوزيعات والتنعيم: لا مخصص لأرباح مقترحة (التزام فقط عند الإعلان)، ولا «احتياطيات عامة» لتنعيم الأسعار أو العملات، ولا مخصص لإنفاق رأسمالي مستقبلي — ثلاثية امتحانية تسقط كل مرة عند تعريف الالتزام.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The discount rate is PRE-TAX because the outflows are stated pre-tax — a mismatched pair (a post-tax rate on pre-tax flows) is the classic numerical trap.",
        ar: "معدل الخصم قبل الضريبة لأن التدفقات تُعرض قبل الضريبة — والإقران الخاطئ (معدل بعد الضريبة على تدفقات قبلها) هو الفخ العددي الكلاسيكي.",
      },
    },
  ],
}
