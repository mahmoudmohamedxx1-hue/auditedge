/** IAS 8 — Accounting Policies, Changes in Accounting Estimates and Errors */

import type { Standard } from "../types"

export const IAS_8: Standard = {
  code: "IAS 8",
  title: { en: "Accounting Policies, Changes in Accounting Estimates and Errors", ar: "السياسات المحاسبية والتغيرات في التقديرات المحاسبية والأخطاء" },
  topic: "presentation",
  effective: { en: "Effective 1 Jan 2010 · amended 2021 (definition of accounting estimates)", ar: "سارٍ من ١ يناير ٢٠١٠ · معدل ٢٠٢١ (تعريف التقديرات المحاسبية)" },
  blocks: [
    { kind: "h", text: { en: "Objective", ar: "الهدف" } },
    {
      kind: "p",
      text: {
        en: "IAS 8 gives the criteria for SELECTING and CHANGING accounting policies, plus the accounting treatment and disclosure of (a) changes in policies, (b) changes in accounting estimates, and (c) corrections of prior-period errors. It is the standard that decides whether you RESTATE the past or PROSPECT the future — and it enforces the Enhancing qualitative characteristic of comparability across periods.",
        ar: "يحدد IAS 8 معايير اختيار السياسات المحاسبية وتغييرها، والمعالجة والإفصاح عن: تغيرات السياسات، وتغيرات التقديرات، وتصحيح أخطاء الفترات السابقة. فهو المعيار الذي يقرر: إعادة عرض الماضي أم معالجة المستقبل — وهو حارس قابلية المقارنة بين الفترات.",
      },
    },
    { kind: "h", text: { en: "Selecting a policy — the hierarchy", ar: "اختيار السياسة — التدرج" } },
    {
      kind: "steps",
      items: [
        { en: "A SPECIFIC IFRS applies? → apply that Standard, including any implementation guidance and consistent Interpretations", ar: "هل ينطبق معيار محدد؟ ← طبقه بما فيه التوجيهات والتفسيرات المتسقة" },
        { en: "No specific Standard? → judgement using: (1) the IASB CONCEPTUAL FRAMEWORK requirements on recognition/measurement, (2) the treatment of SIMILAR issues in other Standards, (3) recent pronouncements of other standard-setters using a similar framework, accepted literature and industry practice — as long as it does not conflict with the Framework", ar: "لا معيار محدد؟ ← حُكم مستندًا إلى: الإطار المفاهيمي، ومعالجة قضايا مماثلة في معايير أخرى، وإصدارات حديثة لهيئات مماثلة" },
        { en: "Managements also considers the RELEVANCE and FAITHFUL REPRESENTATION of the resulting information", ar: "وتراعي الإدارة ملاءمة المعلومات وتمثيلها الأمين" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Voluntary policy changes are NOT allowed — you cannot switch methods just because a new one 'feels better'. A change is legitimate only when required by a Standard or when it makes the information more relevant and no less reliable.",
        ar: "لا يجوز التغير الاختياري في السياسات — فلا تبديل لمجرد أن الجديد «أفضل». لا يشرع التغير إلا بمعيار جديد أو لأنه يجعل المعلومات أكثر ملاءمة ولا أقل موثوقية.",
      },
    },
    { kind: "h", text: { en: "The three changes — master decision tree", ar: "التغيرات الثلاثة — شجرة القرار الكبرى" } },
    {
      kind: "tree",
      root: { en: "Something about the numbers changed", ar: "تغيّر شيء في الأرقام" },
      branches: [
        {
          when: { en: "A new/amended Standard or a better policy (meets IAS 8.14)", ar: "معيار جديد/معدل أو سياسة أفضل (بشرط IAS 8.14)" },
          then: { en: "CHANGE IN ACCOUNTING POLICY → RETROSPECTIVE: restate every comparative presented + opening balances of the earliest period", ar: "تغير سياسة محاسبية ← رجعي: أعد عرض كل مقارنة معروضة وأرصدة بداية أقدم فترة", red: true },
        },
        {
          when: { en: "New information about the basis of estimates (e.g. useful life, NRV, bad-debt %, warranty)", ar: "معلومة جديدة عن أساس التقدير (عمر إنتاجي، قيمة صافية واقعية، نسبة ديون معدومة، ضمان)" },
          then: { en: "CHANGE IN ACCOUNTING ESTIMATE → PROSPECTIVE: current + future periods only — never touch the comparatives", ar: "تغير تقدير محاسبي ← مستقبلي: الفترة الحالية وما بعدها فقط — ولا تمس المقارنات", red: true },
        },
        {
          when: { en: "Maths mistakes, misapplication of a policy, oversights, misinterpretation of facts, FRAUD — from CURRENT reporting at the Standards' effective date", ar: "أخطاء حسابية أو تطبيق خاطئ أو سهو أو تفسير مغلوط للوقائع أو تدليس — ناشئة منذ تاريخ سريان المعايير" },
          then: { en: "PRIOR-PERIOD ERROR → RETROSPECTIVE restatement; if impracticable to determine the period-specific effects, restate the opening balances of the earliest period practicable", ar: "خطأ فترة سابقة ← إعادة عرض رجعية؛ وإن تعذر تحديد آثار الفترة فتعدل أرصدة أقدم فترة ممكنة", red: true },
        },
        {
          when: { en: "Unclear whether policy or estimate? (e.g. moving from FIFO to weighted average)", ar: "غامض أهو سياسة أم تقدير؟ (كالانتقال من FIFO إلى المتوسط المرجح)" },
          then: { en: "Treat as a CHANGE IN ESTIMATE (IAS 8.35) — prospective", ar: "عامله كتغير تقدير — مستقبلي", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Materiality + the 'material' test for errors", ar: "الأهمية واختبار جوهرية الخطأ" } },
    {
      kind: "p",
      text: {
        en: "Errors are material if they could influence users' decisions. Immaterial errors → correct prospectively in the current period. The definition of 'prior period errors' includes the effects of mathematical mistakes, mistakes in applying policies, oversights, misinterpretations and fraud — but only those that EXIST at the current standards' effective date; adopting a policy change when a NEW standard arrives is NOT an error correction (that is a policy change with its own transition rules).",
        ar: "يكون الخطأ جوهريًا إذا كان قادرًا على التأثير في قرارات المستخدمين؛ وغير الجوهري يصحح مستقبليًا. ويشمل تعريف أخطاء الفترات السابقة: الأخطاء الحسابية، وتطبيق السياسات خطأً، والسهو، وسوء التفسير، والتدليس — لكن فقط منذ تاريخ سريان المعايير الحالية؛ فتبني معيار جديد ليس تصحيح خطأ بل تغير سياسة بقواعد انتقال خاصة.",
      },
    },
    { kind: "h", text: { en: "Retrospective application — the mechanics", ar: "التطبيق الرجعي — الميكانيكا" } },
    {
      kind: "list",
      items: [
        { en: "Adjust the CARRYING AMOUNTS of every affected asset/liability/equity component at the earliest period presented", ar: "عدّل القيم الدفترية لكل أصل والتزام ومكون حقوق ملكية متأثر في أقدم فترة معروضة" },
        { en: "Restate each COMPARATIVE period presented as if the new policy had always applied", ar: "أعد عرض كل فترة مقارنة كأن السياسة الجديدة كانت مطبقة دائمًا" },
        { en: "Present a THIRD STATEMENT OF FINANCIAL POSITION at the beginning of the earliest comparative period when required", ar: "اعرض قائمة مركز مالي ثالثة في بداية أقدم فترة مقارنة عند اللزوم" },
        { en: "IMPRATICABILITY escape hatch: when the effects cannot be determined after making every reasonable effort (records lost, hindsight needed), apply the change from the earliest date PRACTICABLE and say so", ar: "مخرج التعذر: إذا استحال تحديد الآثار بعد كل جهد معقول (سجلات مفقودة، حاجة لإدراك متأخر) فطبق من أقرب تاريخ ممكن مع الإفصاح" },
        { en: "Directly in EQUITY? Errors/policy changes affecting balances originally recognised in equity (e.g. OCI reserves) adjust those reserves", ar: "أثر في حقوق الملكية مباشرة؟ فالتغيرات المتعلقة بأرصدة نشأت في حقوق الملكية (كاحتياطيات الدخل الشامل) تعدل تلك الاحتياطيات" },
      ],
    },
    { kind: "h", text: { en: "The 2021 'accounting estimates' cleanup", ar: "تنقيح ٢٠٢١ لتعريف التقديرات" } },
    {
      kind: "p",
      text: {
        en: "The amendment defined a change in accounting estimate as an ADJUSTMENT of the carrying amount of an asset or liability (or the amount of consuming it) from NEW information or NEW developments — measurement techniques and inputs (valuation inputs) are now clearly estimates, not policies. If a technique or input change causes an error correction... no: a change from an INCORRECT application is an error; a change because better information became available is an estimate change.",
        ar: "عرّف التعديل تغير التقدير بأنه تعديل القيمة الدفترية لأصل أو التزام (أو المقدار المستهلك منه) بناء على معلومة أو تطور جديد — فأساليب القياس والمدخلات (مدخلات التقييم) تقديرات لا سياسات. والانتقال عن تطبيق غير صحيح خطأ؛ أما الانتقال لمعلومة أفضل فتغير تقدير.",
      },
    },
    {
      kind: "example",
      title: { en: "Error correction with numbers", ar: "تصحيح خطأ بالأرقام" },
      lines: [
        { en: "Inventory at 31 Dec 2024 overstated by 50 (counting error) — discovered in 2025, books of 2025 already record sales/costs correctly", ar: "مخزون ٣١ ديسمبر ٢٠٢٤ مبالغ فيه ٥٠ (خطأ جرد) — اكتُشف في ٢٠٢٥" },
        { en: "Effect: 2024 profit overstated 50; opening 2025 inventory overstated 50 → 2025 cost of sales overstated 50 → 2025 profit understated 50 — the error self-corrects in P/L but the BALANCE SHEET carries it", ar: "الأثر: ربح ٢٠٢٤ مبالغ ٥٠؛ ومخزون افتتاح ٢٠٢٥ مبالغ ٥٠ فيبالغ في تكلفة المبيعات ٥٠ ويقال ربح ٢٠٢٥ ٥٠ — الخطأ يصحح نفسه في الأرباح لكنه يبقى في الميزانية" },
        { en: "Correction: Dr retained earnings (opening) 50 · Cr inventory 50 — and restate the 2024 comparative balance sheet", ar: "التصحيح: مدين أرباح محتجزة ٥٠ / دائن مخزون ٥٠ — مع إعادة عرض مقارنة ٢٠٢٤" },
        { en: "If the 50 related to land (never sold): BOTH 2024 and 2025 profits unaffected — only the balance sheet restates", ar: "لو تعلق الـ٥٠ بأرض لم تُبَع: لا تتأثر أرباح السنتين — تعدل الميزانية فقط" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Policy-change catch-up (first-time revaluation election excluded — see tip)", ar: "تسوية تغير السياسة (قياسية)" },
      rows: [
        { dr: { en: "Asset (carrying uplift from the new policy)", ar: "أصل (زيادة دفترية بالسياسة الجديدة)" }, cr: { en: "Retained earnings / opening balance", ar: "أرباح محتجزة / رصيد افتتاحي" } },
        { dr: { en: "Retained earnings", ar: "أرباح محتجزة" }, cr: { en: "Deferred tax liability on the uplift", ar: "التزام ضريبة مؤجلة على الزيادة" }, red: true },
        { dr: { en: "Opening inventory error reversal", ar: "عكس خطأ المخزون الافتتاحي" }, cr: { en: "Cost of sales (or retained earnings if comparative restated)", ar: "تكلفة المبيعات (أو الأرباح المحتجزة عند إعادة العرض)" } },
      ],
    },
    { kind: "h", text: { en: "Disclosure — what each change demands", ar: "الإفصاح — ما يطلبه كل تغير" } },
    {
      kind: "list",
      items: [
        { en: "Policy change: the nature + reasons (why the new policy is more relevant/faithful) + adjustment per line item + EPS effects", ar: "تغير سياسة: الطبيعة والسبب (لمَ الجديدة أفضل) + الأثر لكل بند + أثر ربح السهم" },
        { en: "Estimate change: the nature + amount of the effect on the CURRENT period; if future-period effects are not estimable, say so", ar: "تغير تقدير: الطبيعة وأثر الفترة الحالية؛ وإن تعذر تقدير آثار المستقبل فيقال ذلك" },
        { en: "Error correction: the nature of the error + correction per line item for each period + per opening balance + EPS", ar: "تصحيح خطأ: طبيعة الخطأ + التصحيح لكل بند ولكل فترة ولكل رصيد افتتاحي + ربح السهم" },
        { en: "New-standards issued but NOT YET effective: disclose their impact — a favourite exam disclosure", ar: "معايير صدرت ولم تسري بعد: أفصح عن أثرها المتوقع — إفصاح محبب في الامتحانات" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Moving an asset from the COST model to the REVALUATION model (IAS 16/38) is NOT a change in accounting policy for IAS 8 — the Standards explicitly treat the first revaluation as a revaluation, with its own transition rules. Exams set this as a trap almost every sitting.",
        ar: "الانتقال من نموذج التكلفة إلى إعادة التقييم (IAS 16/38) ليس تغير سياسة وفق IAS 8 — فالمعياران يعاملان أول إعادة تقييم بوصفها إعادة تقييم بقواعد انتقال خاصة. وهو فخ امتحاني متكرر.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "A change in the DEPRECIATION METHOD (straight-line → diminishing) is a change in ESTIMATE, not policy — IAS 16.61 says so explicitly; prospective it is.",
        ar: "تغير طريقة الإهلاك (من القسط الثابت إلى المتناقص) تغير تقدير لا سياسة — يقولها IAS 16.61 صراحة؛ فالمعالجة مستقبلية.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Retrospective restatement must be for EVERY comparative — a common error in practice is restating one year but not the opening equity of the earliest period.",
        ar: "تشمل الإعادة الرجعية كل فترة مقارنة — والخطأ الشائع عمليًا إعادة سنة واحدة دون رصيد بداية أقدم فترة.",
      },
    },
  ],
}
