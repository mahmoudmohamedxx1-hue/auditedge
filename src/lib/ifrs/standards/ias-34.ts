/** IAS 34 — Interim Financial Reporting */

import type { Standard } from "../types"

export const IAS_34: Standard = {
  code: "IAS 34",
  title: { en: "Interim Financial Reporting", ar: "التقارير المالية المرحلية" },
  topic: "presentation",
  effective: { en: "Effective 1 Jul 1999 · not mandatory, but securities regulators demand it", ar: "سارٍ من ١ يوليو ١٩٩٩ · غير إلزامي لكن الهيئات الرقابية تشترطه" },
  blocks: [
    { kind: "h", text: { en: "Objective & timing", ar: "الهدف والتوقيت" } },
    {
      kind: "p",
      text: {
        en: "IAS 34 defines the MINIMUM content of an interim financial report and the recognition principles for the half-year, quarter or other interim period. It does NOT mandate interim reporting — the obligation comes from securities regulators, lenders or the entity's own policy — but once you publish an interim report, IAS 34 governs its content. Interim statements are a FRESH measurement of the period, not just an arithmetic cut of the annual numbers: 'interim' means a reporting period SHORTER than a full financial year.",
        ar: "يحدد IAS 34 الحد الأدنى لمحتوى التقرير المالي المرحلي ومبادئ الاعتراف لنصف السنة أو الربع أو أي فترة مرحلية. وهو لا يوجب التقارير المرحلية — فالإلزام من الهيئات الرقابية أو المقرضين أو سياسة المنشأة — لكن متى نُشر التقرير المرحلي حكمه IAS 34. والتقارير المرحلية قياس جديد للفترة لا مجرد تجزئة حسابي للأرقام السنوية؛ و«المرحلي» يعني فترة تقارير أقصر من سنة مالية كاملة.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Who applies it: an entity whose securities are publicly traded usually owes interim reports to the securities commission and the exchange (regulation, not IFRS); banks and covenant-heavy borrowers owe them to lenders; unlisted groups often produce them voluntarily for steering. IAS 34 never compels the PUBLICATION — it only fixes what an interim report must CONTAIN once it exists, so a published interim can never be 'too interim' to follow IFRS.",
        ar: "من يطبقه: المنشأة المدرجة أسهمها في السوق تدين عادةً بتقارير مرحلية لهيئة الأوراق المالية والبورصة (تنظيمًا لا تبعًا لـ IFRS)؛ والبنوك والمقترضون المثقلون بالتعهدات يدينون بها للمقرضين؛ ومجموعات غير مدرجة تصدرها طوعًا للتوجيه. فـ IAS 34 لا يجبر على النشر — بل يضبط ما يجب أن يحتويه التقرير المرحلي متى وُجد؛ فلا يكون التقرير المرحلي «أكثر مرحلية» من أن يتبع IFRS.",
      },
    },
    { kind: "h", text: { en: "Contents — the condensed set", ar: "المحتويات — المجموعة المختصرة" } },
    {
      kind: "list",
      items: [
        { en: "CONDENSED statement of financial position (minimum line items per IAS 1) — or a FULL IAS 1 statement by choice", ar: "قائمة مركز مالي مختصرة (بالبنود الدنيا وفق IAS 1) — أو كاملة بالخيار" },
        { en: "CONDENSED P/L + condensed OCI (or a single condensed statement), condensed changes in equity, condensed cash flows", ar: "أرباح ودخل شامل مختصران (أو قائمة موحدة)، وتغيرات حقوق ملكية وتدفقات مختصرة" },
        { en: "Selected explanatory notes — focused on NEW transactions, events and circumstances since the last ANNUAL report", ar: "إيضاحات مختارة — تركز على الجديد من معاملات وأحداث وظروف منذ التقرير السنوي الأخير" },
        { en: "Comparatives: balance sheet as at the preceding ANNUAL reporting date + balance sheet at the start of the prior comparable interim period (when the entity restates) + P/L/OCI/equity/cash flows for the comparable interim period (year-to-date and, if published, the 12 months to date)", ar: "مقارنات: ميزانية نهاية السنة السابقة + ميزانية بداية الفترة المرحلية المقارنة + قوائم الفترة المقارنة (التراكمية وحتى ١٢ شهرًا عند النشر)" },
        { en: "Basic & diluted EPS for the interim periods presented (IAS 33 applies in full)", ar: "ربح السهم الأساسي والمخفض للفترات المعروضة (يطبق IAS 33 كاملًا)" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "CONDENSED is compliant: the interim set is not a miniature annual report but a deliberately lighter one — the IAS 1 minimum line items on the face, selected notes on what changed since the last annual report. An entity may publish the FULL statements instead, but it cannot be forced to: the condensed version is a complete answer, and the notes do not re-explain policies already disclosed at year-end — they report the news.",
        ar: "المختصر متوافق: المجموعة المرحلية ليست تقريرًا سنويًا مصغرًا بل أخف عمدًا — البنود الدنيا لـ IAS 1 على الوجه، وإيضاحات مختارة عما تغير منذ آخر تقرير سنوي. ويجوز النشر بالقوائم الكاملة بدلًا، لكن لا يجوز إلزام المنشأة به؛ فالنسخة المختصرة جواب تام، ولا تعيد الإيضاحات شرح سياسات أفصح عنها نهاية العام — بل تنقل الأخبار.",
      },
    },
    { kind: "h", text: { en: "The governing principles", ar: "المبادئ الحاكمة" } },
    {
      kind: "tree",
      root: { en: "Two principles rule every interim question", ar: "مبدآن يحكمان كل مسألة مرحلية" },
      branches: [
        {
          when: { en: "PRINCIPLE 1 — same accounting policies as the ANNUAL statements", ar: "المبدأ الأول — السياسات ذاتها المطبقة في القوائم السنوية" },
          then: { en: "No interim-specific policies; IFRS applies the same way at 30 June as at 31 December", ar: "لا سياسات خاصة بالمرحلي؛ فالمعايير تطبق في ٣٠ يونيو كما في ٣١ ديسمبر", red: true },
        },
        {
          when: { en: "PRINCIPLE 2 — frequency, planning and seasonality should NOT distort interim measurement — each interim is measured as a DISCRETE period", ar: "المبدأ الثاني — لا أثر لتكرار التقارير أو الموسمية أو التخطيط؛ فكل فترة تقاس بوصفها فترة مستقلة" },
          then: { en: "Costs benefiting the year cannot ALL be dumped into one interim just because it is convenient; allocate on a rational basis", ar: "لا يجوز إلقاء تكاليف تعود على السنة كلها في فترة واحدة؛ بل توزع بأساس منطقي", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The discrete-period logic with its practical overlay: revenues and costs are recognised when they occur in the interim (a one-off bonus EARNED in Q1 is a Q1 expense even though paid in Q3); but estimates built over the year use the YEAR-TO-DATE method: estimate the annual amount, then subtract the amounts already recognised in earlier interims of the same year. The audit fee is estimated and allocated across quarters; inventory NRV is tested at each interim with reversals allowed within the year (a write-down in Q1 can reverse in Q2 if conditions recover — and IAS 36 reversals too, on new evidence).",
        ar: "منطق الفترة المستقلة مع غلافه العملي: تُعترف الإيرادات والتكاليف عند حدوثها في المرحلة (مكافأة مكتسبة في الربع الأول مصروفه وإن دفعت في الثالث)؛ لكن التقديرات المبنية على السنة تستخدم طريقة التراكمي: قدّر المبلغ السنوي ثم اطرح ما اعتُرف به في المراحل السابقة. فأتعاب المراجعة تقدر وتوزع على الأرباع؛ والقيمة الصافية للمخزون تختبر في كل مرحلة مع جواز الرد داخل السنة (فيجوز رد انقاص الربع الأول في الثاني إذا تعافت الأحوال — وكذلك ردود IAS 36 بدليل جديد).",
      },
    },
    { kind: "h", text: { en: "Discrete vs integral — the cost tree", ar: "المستقل مقابل المتكامل — شجرة التكاليف" } },
    {
      kind: "tree",
      root: { en: "A cost lands mid-year — how is it treated at interim?", ar: "تكلفة تهبط منتصف السنة — كيف تعالج مرحليًا؟" },
      branches: [
        {
          when: { en: "Benefits ONLY this interim (the quarter's power bill, a one-off marketing burst)", ar: "تعود على هذه المرحلة وحدها (فاتورة كهرباء الربع، حملة تسويقية خاطفة)" },
          then: { en: "EXPENSE in this interim — discrete recognition, no spreading", ar: "مصروف في هذه المرحلة — اعتراف مستقل بلا توزيع", red: true },
        },
        {
          when: { en: "Benefits the WHOLE year (audit fee, annual licence, property tax)", ar: "تعود على السنة كلها (أتعاب مراجعة، رخصة سنوية، ضريبة عقارات)" },
          then: { en: "ALLOCATE across interims on a rational basis + YTD catch-up when the estimate moves", ar: "توزع على المراحل بأساس منطقي + تسوية تراكمية عند تحرك التقدير", red: true },
        },
        {
          when: { en: "Would NOT qualify as an asset at annual reporting", ar: "لا تستوفي شروط الأصل في التقارير السنوية" },
          then: { en: "NO interim deferral either — expense when incurred; interim accounting has no softer rules", ar: "لا تأجيل مرحلي كذلك — مصروف عند حدوثه؛ فالمحاسبة المرحلية لا تعرف قواعد ألين", red: true },
        },
        {
          when: { en: "Annual bonus tied to the year's results (earned as the year progresses)", ar: "مكافأة سنوية مرتبطة بنتائج السنة (تكتسب بتقدمها)" },
          then: { en: "ACCRUE in each interim on the best estimate of the expected annual amount", ar: "تستحق في كل مرحلة على أفضل تقدير للمبلغ السنوي المتوقع", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The no-interim-deferral rule is the discrete doctrine's teeth: costs incurred unevenly during the year may be anticipated or deferred at interim ONLY if it would be equally appropriate to do so at the end of the financial year. Advertising, relocations and one-off repairs are expensed when they fall — smoothing them across quarters to 'normalise' the interim P/L is not discretion, it is a policy breach.",
        ar: "قاعدة عدم التأجيل المرحلي هي أنياب مذهب الاستقلال: لا يجوز توقع التكاليف غير المنتظمة أو تأجيلها مرحليًا إلا إذا كان مساويًا ملائمًا فعل ذلك في نهاية السنة المالية. فالإعلان والانتقالات والإصلاحات الخاطفة تصرف عند وقوعها — وتوزيعها على الأرباع لـ«تطبيع» قائمة المرحلة ليس تقديرًا مهنيًا بل إخلالًا بالسياسات.",
      },
    },
    {
      kind: "example",
      title: { en: "Year-to-date allocation in action", ar: "التوزيع التراكمي عمليًا" },
      lines: [
        { en: "Annual audit fee estimate: 400 · recognised Q1 = 100, Q2 = 100", ar: "أتعاب مراجعة سنوية مقدرة: ٤٠٠ · المعترف به: الربع الأول ١٠٠ والثاني ١٠٠" },
        { en: "Q3 estimate revised to 480 → YTD charge needed at Q3 = 480 × 9/12 = 360 → Q3 expense = 360 − 200 = 160 (not 120)", ar: "الربع الثالث: روجع التقدير إلى ٤٨٠ ← تراكمي ٩ أشهر = ٣٦٠ ← مصروف الربع = ٣٦٠ − ٢٠٠ = ١٦٠ (لا ١٢٠)" },
        { en: "The YTD method self-corrects the earlier under-estimate without restating Q1/Q2", ar: "طريقة التراكمي تصحح ذاتيًا نقص التقدير السابق دون إعادة عرض الربعين" },
        { en: "Interim P/L formula: interim expense = YTD estimate − cumulative expense already recognised", ar: "معادلة المرحلة: مصروف المرحلة = التراكمي المقدر − المعترف به سابقًا" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The allocated annual cost — accrual and payment (fee settles at 480)", ar: "التكلفة السنوية الموزعة — استحقاق وسداد (تسويتها عند ٤٨٠)" },
      rows: [
        { dr: { en: "Audit expense 100 · 100 · 160 (Q1 · Q2 · Q3 charges)", ar: "مصروف مراجعة ١٠٠ · ١٠٠ · ١٦٠ (أعباء الأرباع الأول والثاني والثالث)" }, cr: { en: "Accrued audit fee liability 360 (cumulative)", ar: "التزام أتعاب مستحقة ٣٦٠ (تراكميًا)" }, red: true },
        { dr: { en: "Audit expense 120 (Q4: 480 − 360 settles the year)", ar: "مصروف مراجعة ١٢٠ (الربع الرابع: ٤٨٠ − ٣٦٠ تُقفل به السنة)" }, cr: { en: "Accrued audit fee liability 480", ar: "التزام أتعاب مستحقة ٤٨٠" } },
        { dr: { en: "Accrued audit fee liability 480 (on payment)", ar: "التزام أتعاب مستحقة ٤٨٠ (عند السداد)" }, cr: { en: "Cash 480", ar: "النقد ٤٨٠" } },
      ],
    },
    { kind: "h", text: { en: "Interim income tax — the YTD method", ar: "ضريبة الدخل المرحلية — طريقة التراكمي" } },
    {
      kind: "p",
      text: {
        en: "Interim tax is measured with a WEIGHTED-AVERAGE ESTIMATED ANNUAL EFFECTIVE TAX RATE: apply the best estimate of the year's ETR (after IAS 12 accounting — including deferred tax, progressive rates, tax credits) to the year-to-date pre-tax income, then deduct the tax already recognised in the earlier interims of the same year. A mid-year revision of the rate flows through the CURRENT interim — exactly the YTD catch-up logic, applied to the tax line.",
        ar: "تقاس الضريبة المرحلية بمعدل ضريبي فعلي سنوي مقدَّر مرجح: طبق أفضل تقدير لمعدل السنة (بعد محاسبة IAS 12 — بما فيها الضريبة المؤجلة والشرائح التصاعدية والإعفاءات) على الدخل قبل الضريبة منذ بداية السنة، ثم اطرح الضريبة المعترف بها في المراحل السابقة من السنة ذاتها. ومراجعة المعدل منتصف السنة تجري عبر المرحلة الحالية — منطق التسوية التراكمية ذاته مطبقًا على سطر الضريبة.",
      },
    },
    {
      kind: "formula",
      title: { en: "The interim tax charge", ar: "عبء الضريبة المرحلي" },
      lines: [
        { en: "Interim tax charge = (estimated annual ETR × YTD profit before tax) − tax recognised in prior interims of the year", ar: "عبء ضريبة المرحلة = (المعدل الفعلي السنوي المقدر × الربح التراكمي قبل الضريبة) − ضريبة المراحل السابقة" },
        { en: "Estimated annual ETR = the rate expected on the FULL year's income (incl. deferred tax & credits)", ar: "المعدل الفعلي السنوي المقدر = المتوقع على دخل السنة كاملة (بما فيه المؤجلة والإعفاءات)" },
        { en: "H1 charge = (ETR × H1 profit) − Q1 charge → the catch-up from a rate change lands in Q2 alone", ar: "عبء النصف = (المعدل × ربح النصف) − عبء الربع الأول ← تسوية تغير المعدل تقع في الربع الثاني وحده" },
      ],
    },
    {
      kind: "example",
      title: { en: "Tax YTD with a rate revision", ar: "الضريبة التراكمية مع مراجعة المعدل" },
      lines: [
        { en: "Q1 profit 200 · estimated annual ETR 25% → Q1 tax charge = 200 × 25% = 50", ar: "ربح الربع الأول ٢٠٠ · المعدل المقدر ٢٥٪ ← عبء الضريبة ٥٠" },
        { en: "H1 cumulative profit 540 · rate still 25% → YTD tax 135 → Q2 charge = 135 − 50 = 85", ar: "الربح التراكمي للنصف ٥٤٠ · المعدل ما يزال ٢٥٪ ← ضريبة تراكمية ١٣٥ ← عبء الربع الثاني = ١٣٥ − ٥٠ = ٨٥" },
        { en: "If at H1 the annual ETR is re-estimated at 30%: YTD tax = 540 × 30% = 162 → Q2 charge = 162 − 50 = 112 — the whole catch-up lands in Q2", ar: "لو أعد تقدير المعدل السنوي عند النصف إلى ٣٠٪: الضريبة التراكمية = ٥٤٠ × ٣٠٪ = ١٦٢ ← عبء الربع الثاني = ١٦٢ − ٥٠ = ١١٢ — والتسوية كلها تقع في الربع الثاني" },
        { en: "No restatement of Q1 — the estimate change is prospective through the YTD engine", ar: "لا إعادة عرض للربع الأول — فتغير التقدير يجري مستقبليًا عبر آلية التراكمي" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The interim period relationships", ar: "علاقات الفترة المرحلية" },
      lines: [
        { en: "Year-to-date profit = Σ interim profits (after same-year estimate corrections)", ar: "الربح التراكمي = مجموع أرباح المراحل (بعد تصحيحات التقدير في السنة ذاتها)" },
        { en: "Interim expense (allocated costs) = YTD estimate for the year × fraction of benefit − prior interims' charge", ar: "مصروف المرحلة (للتكاليف الموزعة) = التقدير التراكمي × نسبة المنفعة − ما حمل سابقًا" },
        { en: "Interim EPS = interim attributable profit ÷ weighted-average shares of the interim period (bonus issues restate intra-year too)", ar: "ربح سهم المرحلة = ربح المرحلة ÷ متوسط أسهمها المرجح (والمجانية تعاد بعرضها داخل السنة كذلك)" },
      ],
    },
    { kind: "h", text: { en: "Seasonality & the lumpy P/L", ar: "الموسمية وقائمة الأرباح المتفاوتة" } },
    {
      kind: "p",
      text: {
        en: "Highly seasonal businesses (agriculture, retail, tourism) must DISCLOSE the seasonal nature of their operations — and IAS 34 discourages splitting annual costs 'evenly' when the pattern of benefit is not even. If revenue lands in one quarter and costs in another, the interim P/L shows the LUMPINESS; the notes explain it. Entities that publish a rolling 12-month statement satisfy much of this analytically; those that do not should add a seasonality note — smoothing to look annual is the one thing they must not do.",
        ar: "على الأعمال شديدة الموسمية (زراعة، تجزئة، سياحة) الإفصاح عن طبيعتها الموسمية — وينهى IAS 34 عن توزيع التكاليف السنوية بالتساوي حينما يكون نمط المنفعة غير متساو. فإذا تحقق الإيراد في ربع والتكاليف في آخر ظهر التفاوت في قائمة المرحلة وفسرته الإيضاحات. ومن ينشر قائمة إثني عشر شهرًا متدرجة يستوفي الكثير من ذلك تحليليًا؛ ومن لا يفعل فليضف إيضاح موسمية — أما التنعيم ليبدو التقرير سنويًا فهو ما لا يجوز البتة.",
      },
    },
    { kind: "h", text: { en: "Use of estimates at interim", ar: "التقديرات في المرحلة" } },
    {
      kind: "list",
      items: [
        { en: "Interim measurement RELIES heavily on estimates — but they must be made with the same care as annual ones, and the year-to-date method handles mid-year corrections of estimate without restating the earlier interim (a change in estimate, IAS 8, prospective)", ar: "يعتمد القياس المرحلي على التقديرات — لكن بذات العناية السنوية، وتتكفل طريقة التراكمي بتصحيح التقدير منتصف السنة دون إعادة عرض المرحلة السابقة (تغير تقدير وفق IAS 8)" },
        { en: "Bonus/provision accruals: accrue if the entity has a legal/constructive obligation at the interim date and the amount can be estimated reliably", ar: "مخصصات المكافآت: تستحق إذا وُجد التزام قانوني/ضمني بتاريخ المرحلة وأمكن تقدير المبلغ موثوقًا" },
        { en: "Impairment at interim: recognise when indicators arise; reversal of a SAME-YEAR interim impairment is allowed on new evidence", ar: "انخفاض القيمة مرحليًا: اعترف عند المؤشرات؛ ويرد ما أنزلته مرحلة سابقة من السنة ذاتها بدليل جديد" },
        { en: "Annual costs unevenly timed: if a cost cannot be allocated to interims on a rational basis, ACCRUE and allocate to the interim periods expected to benefit", ar: "تكاليف يصعب توزيعها بأساس منطقي: تستحق وتوزع على المراحل المستفيدة" },
      ],
    },
    {
      kind: "tree",
      title: { en: "An earlier interim's number proved wrong — estimate or error?", ar: "رقم مرحلة سابقة ثبت خطؤه — تقدير أم خطأ؟" },
      root: { en: "The Q1 number does not match reality at Q2", ar: "رقم الربع الأول لا يطابق الواقع في الربع الثاني" },
      branches: [
        {
          when: { en: "NEW information or developments arrived since Q1 (the estimate was right then)", ar: "معلومة أو تطور جديد وصل بعد الربع الأول (كان التقدير صائبًا حينها)" },
          then: { en: "CHANGE IN ESTIMATE → YTD catch-up in the current interim; no restatement of Q1", ar: "تغير تقدير ← تسوية تراكمية في المرحلة الحالية؛ ولا إعادة عرض للربع الأول", red: true },
        },
        {
          when: { en: "Q1 misapplied IFRS as it stood (formula slip, wrong policy)", ar: "الربع الأول خالف IFRS وقت إعداده (خطأ حسابي، سياسة خاطئة)" },
          then: { en: "PRIOR-PERIOD ERROR → IAS 8 restatement of the affected interim comparatives", ar: "خطأ فترة سابقة ← إعادة عرض وفق IAS 8 للمقارنات المرحلية المتأثرة", red: true },
        },
        {
          when: { en: "Ambiguous which it is", ar: "غامض أيهما" },
          then: { en: "Treat as an ESTIMATE change (IAS 8.35) — prospective through the YTD method", ar: "عامله كتغير تقدير (IAS 8.35) — مستقبلي عبر طريقة التراكمي", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Going concern & inventory at interim", ar: "الاستمرارية والمخزون مرحليًا" } },
    {
      kind: "p",
      text: {
        en: "The going-concern assessment happens at EACH interim date for the remaining twelve months — a material uncertainty discovered at Q3 must be disclosed even if it may resolve by year-end. Inventory NRV tests at interim use the interim's evidence; however — costs expected to be recovered by YEAR-END price increases are NOT written down if the volume is on hand and the prices genuinely recover before year-end (a classic exam nuance).",
        ar: "يُقيَّم الاستمرارية في كل تاريخ مرحلي عن الاثني عشر شهرًا الباقية — وعدم التأكد المكتشف بالربع الثالث يفصح عنه وإن كان مرجى زواله بنهاية السنة. وتختبر القيمة الصافية للمخزون بأدلة المرحلة؛ غير أن التكاليف المرتقب استردادها بارتفاع الأسعار قبل نهاية السنة لا ينقص قيمتها إذا توافرت الكميات والأدلة على التعافي فعليًا.",
      },
    },
    {
      kind: "journal",
      title: { en: "Inventory NRV at interim — write-down and SAME-YEAR reversal", ar: "القيمة الصافية للمخزون مرحليًا — انقاص وردٌ داخل السنة ذاتها" },
      rows: [
        { dr: { en: "NRV write-down expense 30 (Q1: selling prices slumped)", ar: "مصروف انقاص القيمة الصافية ٣٠ (الربع الأول: هبطت الأسعار)" }, cr: { en: "Inventory (NRV allowance) 30", ar: "مخزون (مخصص القيمة الصافية) ٣٠" }, red: true },
        { dr: { en: "Inventory 20 (Q2: prices recover on new evidence)", ar: "مخزون ٢٠ (الربع الثاني: تتعافى الأسعار بدليل جديد)" }, cr: { en: "Reversal of write-down (P/L) 20", ar: "رد الانقاص (قائمة الأرباح) ٢٠" }, red: true },
        { cr: { en: "Reversal allowed because it reverses a write-down of the SAME year — goodwill impairments never reverse (IAS 36)", ar: "الرد جائز لأنه يرد انقاصًا من السنة ذاتها — أما انخفاض الشهرة فلا يرد أبدًا (IAS 36)" } },
      ],
    },
    { kind: "h", text: { en: "Interim EPS", ar: "ربح السهم المرحلي" } },
    {
      kind: "p",
      text: {
        en: "IAS 33 applies IN FULL at every interim: basic and diluted EPS are presented for each discrete interim period AND for the year-to-date period. The weighted-average share count is computed over the interim (or YTD) window, and a bonus issue occurring between interims restates the intra-year share counts too — the previous interim's EPS moves even though the annual comparatives were published earlier.",
        ar: "يطبق IAS 33 كاملًا في كل مرحلة: يعرض ربح السهم الأساسي والمخفض لكل فترة مرحلية مستقلة وللفترة التراكمية معًا. ويحسب متوسط الأسهم على نافذة المرحلة (أو التراكمية)، والأسهم المجانية الواقعة بين المراحل تعيد عرض عدادات الأسهم داخل السنة ذاتها — فيتحرك ربح سهم المرحلة السابقة وإن كانت المقارنات السنوية قد صدرت قبلًا.",
      },
    },
    {
      kind: "example",
      title: { en: "Interim EPS, both windows", ar: "ربح السهم المرحلي بالنافذتين" },
      lines: [
        { en: "Q1 attributable profit 150 · Q2 attributable profit 210 · weighted-average shares all year 500 (no issues)", ar: "ربح الربع الأول المعاد للملاك ١٥٠ · الثاني ٢١٠ · متوسط الأسهم طوال السنة ٥٠٠ (بلا إصدارات)" },
        { en: "Q1 basic EPS = 150 ÷ 500 = 0.30 · Q2 basic EPS = 210 ÷ 500 = 0.42", ar: "ربح السهم الأساسي للربع الأول = ١٥٠ ÷ ٥٠٠ = ٠٫٣٠ · وللثاني = ٢١٠ ÷ ٥٠٠ = ٠٫٤٢" },
        { en: "H1 (year-to-date) basic EPS = (150 + 210) ÷ 500 = 360 ÷ 500 = 0.72 — a THIRD number users expect", ar: "الأساسي التراكمي للنصف = (١٥٠ + ٢١٠) ÷ ٥٠٠ = ٣٦٠ ÷ ٥٠٠ = ٠٫٧٢ — رقم ثالث يتوقعه المستخدم" },
        { en: "Add the diluted figure for each window (treasury-stock method on the same options) and you have the full interim EPS row", ar: "أضف المخفض لكل نافذة (طريقة الأسهم الخزينة على الخيارات ذاتها) فتكون سطور ربح السهم المرحلي كاملة" },
      ],
    },
    { kind: "h", text: { en: "Interim dividends", ar: "التوزيعات المرحلية" } },
    {
      kind: "journal",
      title: { en: "An interim dividend declared before the interim date", ar: "توزيع مرحلي مقرر قبل تاريخ المرحلة" },
      rows: [
        { dr: { en: "Retained earnings 40 (declared before the interim reporting date)", ar: "أرباح محتجزة ٤٠ (مقرر قبل تاريخ التقرير المرحلي)" }, cr: { en: "Dividends payable 40", ar: "توزيعات مستحقة الدفع ٤٠" }, red: true },
        { dr: { en: "Dividends payable 40 (on payment, next interim)", ar: "توزيعات مستحقة الدفع ٤٠ (عند السداد في المرحلة التالية)" }, cr: { en: "Cash 40", ar: "النقد ٤٠" } },
        { cr: { en: "Declared AFTER the interim date? No liability — disclosure only (IAS 10 logic per interim)", ar: "مقرر بعد تاريخ المرحلة؟ لا التزام — إفصاح فقط (منطق IAS 10 في كل مرحلة)" } },
      ],
    },
    { kind: "h", text: { en: "Events after the interim date", ar: "الأحداث بعد التاريخ المرحلي" } },
    {
      kind: "p",
      text: {
        en: "IAS 10 applies to interims: the window runs from the interim date to the date of AUTHORISATION of the interim report. Adjusting events (customer bankruptcy evidencing a pre-date condition) adjust the interim numbers; non-adjusting events (post-date fire, an acquisition) are disclosed. Because interims are produced quickly, the window is short — but the discipline is identical.",
        ar: "يطبق IAS 10 على المرحلي: من تاريخ المرحلة حتى اعتماد تقريرها. فالأحداث المعدلة تعدل الأرقام، وغير المعدلة تفصح. وبسبب سرعة الإصدار تكون النافذة قصيرة — لكن الانضباط واحد.",
      },
    },
    { kind: "h", text: { en: "Disclosure essentials", ar: "أساسيات الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Statement that the SAME accounting policies as the last annual statements are followed — or describe every change", ar: "إقرار اتباع السياسات ذاتها في آخر قوائم سنوية — أو وصف كل تغيير" },
        { en: "Nature & amount of items affecting assets/liabilities/equity/income that are unusual because of nature, SIZE or incidence", ar: "طبيعة ومقدار البنود غير الاعتيادية بطبيعتها أو حجمها أو تكرارها" },
        { en: "Changes in accounting estimates, policies or corrections of errors since the annual statements", ar: "تغيرات التقديرات والسياسات وتصحيحات الأخطاء منذ القوائم السنوية" },
        { en: "Events & transactions since the last annual report — impairments, reversals, restructurings, share issues, purchases/sales, debt, dividends, segment shifts, discontinued operations (IFRS 5)", ar: "الأحداث والمعاملات منذ التقرير السنوي — انخفاض قيمة، ردوده، إعادة هيكلة، إصدارات، اقتناء/تخرد، ديون، توزيعات، تغيرات قطاعية، عمليات متوقفة" },
        { en: "LIMITED segment information: revenue and profit or loss for each reportable segment (IFRS 8 link) — the full annual segment suite is not required", ar: "معلومات قطاعية محدودة: الإيراد والربح أو الخسارة لكل قطاع قابل للتقرير (ترابط IFRS 8) — دون الحزمة القطاعية السنوية الكاملة" },
      ],
    },
    { kind: "h", text: { en: "What IAS 34 does NOT require", ar: "ما لا يشترطه IAS 34" } },
    {
      kind: "list",
      items: [
        { en: "It does NOT mandate interim reporting at all — that obligation is regulatory or contractual", ar: "لا يوجب التقارير المرحلية أصلًا — فالإلزام تنظيمي أو تعاقدي" },
        { en: "FULL IAS 1 line items are not required — the condensed statements satisfy", ar: "لا تشترط بنود IAS 1 كاملة — فالمختصرة تكفي" },
        { en: "A full annual-style notes suite is not required — selected explanatory notes suffice", ar: "لا تشترط حزمة إيضاحات سنوية شاملة — تكفي إيضاحات مختارة" },
        { en: "A P/L FORECAST for the rest of the year: encouraged, never required", ar: "توقع أرباح بقية السنة: مستحسن لا واجب" },
        { en: "Complete IFRS 8 segment disclosure — only revenue and profit or loss per reportable segment", ar: "لا إفصاح قطاعي كاملًا وفق IFRS 8 — الإيراد والربح أو الخسارة لكل قطاع فحسب" },
      ],
    },
    { kind: "h", text: { en: "Materiality at interim", ar: "الأهمية في المرحلة" } },
    {
      kind: "p",
      text: {
        en: "Interim materiality is judged against the INTERIM figures — a quarter's revenue, a half-year's profit — so the practical threshold can be LOWER than the annual one even for the same item. Two-way thinking: an item immaterial to the year may be material to the quarter (it concentrates), and an item material to the year may deserve interim disclosure because it says something about the REMAINING periods. And nature overrides size: a related-party item or a fraud is disclosed however small.",
        ar: "تقدَّر أهمية المرحلة على أرقام المرحلة ذاتها — إيراد الربع أو ربح النصف — فقد يكون الحد العملي أخفض من السنوي للبند ذاته. وتفكير في اتجاهين: البند غير الجوهري للسنة قد يكون جوهريًا للربع (لأنه يتركز)، والجوهري للسنة قد يستحق الإفصاح المرحلي لأنه يقول شيئًا عن الفترات المتبقية. والطبيعة تغلب الحجم: فبند الأطراف ذات العلاقة أو التدليس يفصح عنه أيًّا صغر.",
      },
    },
    { kind: "h", text: { en: "Interim reporting in the group", ar: "التقارير المرحلي في المجموعات" } },
    {
      kind: "p",
      text: {
        en: "Consolidation applies at interim exactly as at annual: IFRS 10 runs, the group uses its consolidated annual policies, and intragroup balances and transactions eliminate. A foreign or differently-dated subsidiary contributes its MOST RECENT financial statements — annual or interim — adjusted for significant transactions between that subsidiary's date and the group's interim date. Associates and joint ventures join through the equity method (IAS 28) on the same 'most recent statements' logic.",
        ar: "يجرى الدمج مرحليًا كما يجري سنويًا تمامًا: يعمل IFRS 10، وتستخدم المجموعة سياساتها السنوية المجمعة، وتستبعد أرصدة ومعاملات المجموعة. وتسهم التابعة الأجنبية أو المختلفة التاريخ بأحدث قوائمها — سنوية أو مرحلية — معدلةً بالمعاملات الجوهرية بين تاريخها وتاريخ مرحلة المجموعة. وتنضم الزميلات والمشروعات المشتركة بطريقة الحصة (IAS 28) بمنطق «أحدث القوائم» ذاته.",
      },
    },
    { kind: "h", text: { en: "Interactions with other standards", ar: "الترابط مع المعايير الأخرى" } },
    {
      kind: "list",
      items: [
        { en: "IAS 1 — the condensed statements follow the same definitions and line-item logic", ar: "IAS 1 — القوائم المختصرة تتبع التعريفات ومنطق البنود ذاته" },
        { en: "IAS 8 — mid-year estimate revisions run prospectively through the YTD method; errors restated", ar: "IAS 8 — مراجعات التقدير منتصف السنة تجري مستقبليًا بطريقة التراكمي؛ والأخطاء تعاد بعرضها" },
        { en: "IAS 10 — the after-date window applies to every interim report", ar: "IAS 10 — نافذة الأحداث اللاحقة تطبق على كل تقرير مرحلي" },
        { en: "IAS 12 — the estimated annual ETR drives the interim tax charge", ar: "IAS 12 — المعدل الفعلي السنوي المقدر يقود عبء الضريبة المرحلي" },
        { en: "IAS 33 — basic & diluted EPS for every interim window presented", ar: "IAS 33 — ربح السهم الأساسي والمخفض لكل نافذة مرحلية معروضة" },
        { en: "IFRS 5 — discontinued operations presented separately in the interim P/L", ar: "IFRS 5 — العمليات المتوقفة تعرض منفصلة في قائمة الأرباح المرحلية" },
        { en: "IAS 36 — interim impairment on indicators; same-year non-goodwill reversals allowed", ar: "IAS 36 — انخفاض مرحلي عند المؤشرات؛ ويرد ما عدا الشهرة داخل السنة ذاتها" },
        { en: "IFRS 10 / IAS 28 — consolidation and equity accounting at every interim date", ar: "IFRS 10 / IAS 28 — الدمج ومحاسبة الحصة في كل تاريخ مرحلي" },
      ],
    },
    {
      kind: "steps",
      items: [
        { en: "APPLY the annual policies unchanged — no interim-specific policies exist", ar: "طبق السياسات السنوية دون تغيير — فلا سياسات خاصة بالمرحلي" },
        { en: "RECOGNISE discrete revenues and costs in the interim they occur", ar: "اعترف بإيرادات وتكاليف المرحلة المستقلة في المرحلة التي تقع فيها" },
        { en: "RUN the YTD method for year-long estimates (audit fee, bonus, warranty) with the catch-up in the current interim", ar: "شغل طريقة التراكمي للتقديرات الممتدة (أتعاب، مكافآت، ضمان) بتسويتها في المرحلة الحالية" },
        { en: "COMPUTE interim tax via the estimated annual effective tax rate on YTD profit", ar: "احسب الضريبة المرحلية بالمعدل الفعلي السنوي المقدر على الربح التراكمي" },
        { en: "TEST going concern and apply the IAS 10 window to the interim date", ar: "اختبر الاستمرارية وطبق نافذة IAS 10 على تاريخ المرحلة" },
        { en: "PUBLISH the condensed statements + focused notes + both EPS windows", ar: "انشر القوائم المختصرة + إيضاحات مركزة + نافذتي ربح السهم" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The exam trick: 'the entity charged the full annual audit fee to Q4 because that is when the audit happens' — WRONG. Allocate on a rational basis across the interims (or when the obligation arises), because each interim is a discrete period of its own.",
        ar: "الحيلة الامتحانية: «حمّلت أتعاب المراجعة السنوية على الربع الرابع لأنها تحدث فيه» — خطأ. وزّع بأساس منطقي على المراحل لأن كل مرحلة فترة مستقلة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Materiality is judged for the INTERIM figures, and may need a LOWER threshold than annual — but an item material by NATURE (related party, fraud) is disclosed however small.",
        ar: "تُقدَّر الأهمية على أرقام المرحلة وقد يلزم حد أدنى من الأهمية أخفض من السنوي — والبند الجوهري بطبيعته (طرف ذو علاقة، تدليس) يفصح عنه أيًّا كان صغيرًا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The impairment reversal nuance: a non-goodwill impairment taken down at Q1 may reverse at Q2 on new evidence — but GOODWILL impairment, whenever taken in the year, never reverses (IAS 36). The exam pairs them to catch the over-eager reverser.",
        ar: "دقة رد الانخفاض: ما عدا الشهرة، يجوز رد انخفاض الربع الأول في الثاني بدليل جديد — أما انخفاض الشهرة فلا يرد أبدًا متى وقع (IAS 36). والامتحان يقارن بينهما ليمسك المتعجل في الرد.",
      },
    },
    {
      kind: "note",
      text: {
        en: "An entity reporting quarterly publishes the Q4 as a YTD (12-month) statement only — a standalone 'Q4 report' would need comparatives nobody has; that is why Q4 comes bundled with the annual report.",
        ar: "من يصدر ربعيًا ينشر الربع الرابع تراكميًا (١٢ شهرًا) فقط — فتقرير رابع مستقل يحتاج مقارنات لا تتوفر؛ ولهذا يأتي الرابع مدمجًا مع التقرير السنوي.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Same policies, no exceptions: an entity cannot smooth, defer or re-time at interim what IFRS would not allow at annual — 'we'll fix it at year-end' is not an interim accounting policy, it is a misstatement with a calendar.",
        ar: "السياسات ذاتها بلا استثناء: لا تستطيع المنشأة التنعيم أو التأجيل أو إعادة التوقيت مرحليًا بما لا يجيزه IFRS سنويًا — فـ«نصلحه نهاية العام» ليست سياسة مرحلية بل خطأ مؤجل بتقويم.",
      },
    },
  ],
}
