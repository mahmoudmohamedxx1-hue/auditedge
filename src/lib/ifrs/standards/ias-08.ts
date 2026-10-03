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
        en: "IAS 8 gives the criteria for SELECTING and CHANGING accounting policies, plus the accounting treatment and disclosure of (a) changes in policies, (b) changes in accounting estimates, and (c) corrections of prior-period errors. It is the standard that decides whether you RESTATE the past or PROSPECT the future — and it enforces the enhancing qualitative characteristic of COMPARABILITY across periods: this year's statements must sit beside last year's without the user asking 'what changed, and did they change it honestly?'",
        ar: "يحدد IAS 8 معايير اختيار السياسات المحاسبية وتغييرها، والمعالجة والإفصاح عن: تغيرات السياسات، وتغيرات التقديرات، وتصحيح أخطاء الفترات السابقة. فهو المعيار الذي يقرر: إعادة عرض الماضي أم معالجة المستقبل — وهو حارس قابلية المقارنة بين الفترات: قوائم هذه السنة يجب أن تجاور قوائم العام الماضي دون أن يسأل المستخدم «ما الذي تغير، وهل غيّروه بشرف؟»",
      },
    },
    {
      kind: "p",
      text: {
        en: "Two labels that students blur: RETROSPECTIVE APPLICATION is the treatment of a policy change — apply the new policy to comparatives as if it had always been used; RETROSPECTIVE RESTATEMENT is the treatment of an error — correct the comparatives because they were WRONG. Same mechanics (restate, restate, restate), different cause and different disclosure. Estimates are never either: a change in estimate is applied PROSPECTIVELY because the old estimate was the best information available at the time — it was not wrong, it is now outdated.",
        ar: "تسميتان يخلط بهما الطلاب: التطبيق بأثر رجعي معالجةُ تغير السياسة — طبق السياسة الجديدة على المقارنات كأنها كانت مطبقة دائمًا؛ وإعادة العرض بأثر رجعي معالجةُ الخطأ — صحح المقارنات لأنها كانت خاطئة. الميكانيكا واحدة (إعادة عرض، فإعادة عرض)، والسبب مختلف والإفصاح مختلف. أما التقديرات فليست هذا ولا ذاك: يطبق تغير التقدير بأثر مستقبلي لأن التقدير القديم كان أفضل معلومة متاحة حينها — لم يكن خاطئًا بل صار قديمًا.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "ACCOUNTING POLICIES: the specific principles, bases, conventions, rules and practices an entity applies in preparing and presenting financial statements", ar: "السياسات المحاسبية: المبادئ والأسس والقواعد والممارسات المحددة التي تطبقها المنشأة في إعداد القوائم المالية وعرضها" },
        { en: "ACCOUNTING ESTIMATES: monetary amounts in the financial statements that are measured under conditions of uncertainty — monetary amounts are approximations because new information develops", ar: "التقديرات المحاسبية: مقادير نقدية في القوائم تقاس في ظروف عدم تأكد — فهي تقريبات تتطور بتطور المعلومات الجديدة" },
        { en: "CHANGE IN ACCOUNTING ESTIMATE: an adjustment of the carrying amount of an asset or liability (or the amount of consuming it) arising from NEW information or new developments — never a correction of an error", ar: "تغير التقدير المحاسبي: تعديل القيمة الدفترية لأصل أو التزام (أو مقدار استهلاكه) بناء على معلومة أو تطور جديد — وليس تصحيح خطأ أبدًا" },
        { en: "PRIOR-PERIOD ERRORS: omissions from, and misstatements in, prior statements arising from maths mistakes, misapplied policies, oversights, misinterpretations and FRAUD", ar: "أخطاء الفترات السابقة: حذف أو أخطاء في قوائم سابقة ناشئة عن أخطاء حسابية أو تطبيق سياسات خطأً أو سهو أو سوء تفسير أو تدليس" },
        { en: "MATERIAL errors: could individually or collectively influence the economic decisions of users taken on those statements", ar: "الأخطاء الجوهرية: ما يمكن أن يؤثر منفردًا أو مجتمعًا في القرارات الاقتصادية للمستخدمين" },
        { en: "IMPRATICABLE: a requirement cannot be applied after making EVERY reasonable effort to do so (records lost, hindsight needed, data cannot be reconstructed)", ar: "التعذر: يستحيل تطبيق المتطلب بعد بذل كل جهد معقول (سجلات مفقودة، حاجة لإدراك متأخر، استحالة إعادة بناء البيانات)" },
        { en: "RETROSPECTIVE APPLICATION vs RETROSPECTIVE RESTATEMENT: policy change vs error correction — both restate comparatives, for different reasons", ar: "التطبيق الرجعي مقابل إعادة العرض الرجعية: تغير سياسة مقابل تصحيح خطأ — كلاهما يعيد عرض المقارنات لكن لسببين مختلفين" },
        { en: "PROSPECTIVE APPLICATION: apply the change to transactions AFTER the date of the change — recognise the effect in current and future periods", ar: "التطبيق المستقبلي: طبق التغير على المعاملات بعد تاريخه — واعترف بالأثر في الفترة الحالية وما بعدها" },
      ],
    },
    { kind: "h", text: { en: "Selecting a policy — the hierarchy", ar: "اختيار السياسة — التدرج" } },
    {
      kind: "steps",
      items: [
        { en: "A SPECIFIC IFRS applies? → apply that Standard, including any implementation guidance and consistent Interpretations", ar: "هل ينطبق معيار محدد؟ ← طبقه بما فيه التوجيهات والتفسيرات المتسقة" },
        { en: "No specific Standard? → judgement using: (1) the IASB CONCEPTUAL FRAMEWORK requirements on recognition/measurement, (2) the treatment of SIMILAR issues in other Standards, (3) recent pronouncements of other standard-setters using a similar framework, accepted literature and industry practice — as long as it does not conflict with the Framework", ar: "لا معيار محدد؟ ← حُكم مستندًا إلى: الإطار المفاهيمي، ومعالجة قضايا مماثلة في معايير أخرى، وإصدارات حديثة لهيئات مماثلة وأدبيات مقبولة" },
        { en: "Management also considers the RELEVANCE and FAITHFUL REPRESENTATION of the resulting information — and consistency with the industry is a virtue, not a straitjacket", ar: "وتراعي الإدارة كذلك ملاءمة المعلومات الناتجة وتمثيلها الأمين — والاتساق مع الصناعة فضيلة لا قيدًا" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "A VOLUNTARY change of policy is not a free switch: it is legitimate only when required by a Standard, or when the new policy results in information that is RELIABLE and MORE RELEVANT to the users' economic decision needs — and management must say why. The bar is deliberately high: comparability is destroyed every time a policy moves, so IAS 8 trades freedom of method for stability of presentation.",
        ar: "التغير الاختياري في السياسة ليس تبديلًا حرًا: لا يشرع إلا إذا أوجبه معيار، أو إذا أنتجت السياسة الجديدة معلومات موثوقة وأكثر ملاءمة لاحتياجات القرارات الاقتصادية للمستخدمين — وعلى الإدارة أن تبرر. والعتبة عالية عمدًا: فالمقارنة تُقتل كلما تحركت سياسة، فيقايض IAS 8 حرية الأسلوب باستقرار العرض.",
      },
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
          when: { en: "New information or new developments about the basis of measurement (useful life, NRV, bad-debt %, warranty pattern)", ar: "معلومة أو تطور جديد عن أساس القياس (عمر إنتاجي، قيمة صافية واقعية، نسبة ديون معدومة، نمط ضمان)" },
          then: { en: "CHANGE IN ACCOUNTING ESTIMATE → PROSPECTIVE: current + future periods only — never touch the comparatives", ar: "تغير تقدير محاسبي ← مستقبلي: الفترة الحالية وما بعدها فقط — ولا تمس المقارنات", red: true },
        },
        {
          when: { en: "Maths mistakes, misapplication of a policy, oversights, misinterpretation of facts, FRAUD — from the current standards' effective date", ar: "أخطاء حسابية أو تطبيق خاطئ أو سهو أو تفسير مغلوط للوقائع أو تدليس — ناشئة منذ تاريخ سريان المعايير الحالية" },
          then: { en: "PRIOR-PERIOD ERROR → RETROSPECTIVE restatement; if impracticable to determine the period-specific effects, restate the opening balances of the earliest period practicable", ar: "خطأ فترة سابقة ← إعادة عرض رجعية؛ وإن تعذر تحديد آثار الفترة فتعدل أرصدة أقدم فترة ممكنة", red: true },
        },
        {
          when: { en: "Unclear whether policy or estimate? (e.g. moving from FIFO to weighted average)", ar: "غامض أهو سياسة أم تقدير؟ (كالانتقال من FIFO إلى المتوسط المرجح)" },
          then: { en: "Treat as a CHANGE IN ESTIMATE (IAS 8.35) — prospective", ar: "عامله كتغير تقدير (IAS 8.35) — مستقبلي", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The treatment map in one breath: policies — retrospective application; errors — retrospective restatement; estimates — prospective application. What that means for the statements: policy changes and errors rewrite the COMPARATIVES (and pull in the third statement of financial position under IAS 1); estimate changes recognise their entire catch-up in the CURRENT period's profit or loss, with not a digit of the past altered.",
        ar: "خريطة المعالجة في نَفَس واحد: السياسات — تطبيق رجعي؛ والأخطاء — إعادة عرض رجعية؛ والتقديرات — تطبيق مستقبلي. ومعنى ذلك للقوائم: تغيرات السياسات والأخطاء تعيد كتابة المقارنات (وتستدعي قائمة المركز المالي الثالثة وفق IAS 1)؛ أما تغيرات التقديرات فيقع مفعولها كله في ربح أو خسارة الفترة الحالية دون تغيير رقم واحد من الماضي.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Policy change (required or 8.14-qualified): adjust opening balances of the EARLIEST period presented + restate each comparative's line items + EPS", ar: "تغير سياسة (بمعيار أو مستوفٍ شرط 8.14): عدل أرصدة بداية أقدم فترة معروضة + أعد عرض بنود كل مقارنة + ربح السهم" },
        { en: "Error correction (material): same mechanics, disclosed as an ERROR — with the nature of the error and the correction per line item, per period", ar: "تصحيح خطأ (جوهري): الميكانيكا ذاتها، بإفصاح بوصفه خطأً — مع طبيعته والتصحيح لكل بند ولكل فترة" },
        { en: "Estimate change: the CARRYING AMOUNT is remeasured at the date of change and charged (or credited) over the remaining periods — the effect lands in the current P/L first", ar: "تغير تقدير: يعاد قياس القيمة الدفترية بتاريخ التغير ويحمل (أو يرد) على الفترات المتبقية — ويقع الأثر في قائمة أرباح الفترة الحالية أولًا" },
        { en: "Immaterial error: correct in the CURRENT period — no restatement, no drama", ar: "خطأ غير جوهري: يصحح في الفترة الحالية — لا إعادة عرض ولا ضجيج" },
      ],
    },
    { kind: "h", text: { en: "Policy changes — the mechanics", ar: "تغيرات السياسات — الميكانيكا" } },
    {
      kind: "list",
      items: [
        { en: "Adjust the CARRYING AMOUNTS of every affected asset/liability/equity component at the earliest period presented", ar: "عدّل القيم الدفترية لكل أصل والتزام ومكون حقوق ملكية متأثر في أقدم فترة معروضة" },
        { en: "Restate each COMPARATIVE period presented as if the new policy had always applied", ar: "أعد عرض كل فترة مقارنة كأن السياسة الجديدة كانت مطبقة دائمًا" },
        { en: "Present a THIRD STATEMENT OF FINANCIAL POSITION at the beginning of the earliest comparative period when required (IAS 1.40)", ar: "اعرض قائمة مركز مالي ثالثة في بداية أقدم فترة مقارنة عند اللزوم (IAS 1.40)" },
        { en: "Directly in EQUITY? Changes affecting balances originally recognised in equity (OCI reserves) adjust those RESERVES, not retained earnings", ar: "أثر مباشر في حقوق الملكية؟ التغيرات المتعلقة بأرصدة نشأت في حقوق الملكية (احتياطيات الدخل الشامل) تعدل تلك الاحتياطيات لا الأرباح المحتجزة" },
        { en: "Deferred tax follows the remeasurement (IAS 12) — every catch-up has a tax shadow", ar: "الضريبة المؤجلة تتبع إعادة القياس (IAS 12) — لكل تسوية ظل ضريبي" },
      ],
    },
    {
      kind: "tree",
      title: { en: "Routing a policy change", ar: "توجيه تغير السياسة" },
      root: { en: "A policy change is proposed", ar: "اقتُرح تغير سياسة" },
      branches: [
        {
          when: { en: "Driven by a NEW/amended Standard with its own transition provisions", ar: "بفعل معيار جديد/معدل له أحكام انتقال خاصة" },
          then: { en: "Follow THAT Standard's transition — it overrides IAS 8's default", ar: "اتبع أحكام الانتقال الخاصة بذلك المعيار — فهي تسمو على الأصل العام في IAS 8", red: true },
        },
        {
          when: { en: "Voluntary change meeting IAS 8.14 (reliable + more relevant)", ar: "تغير اختياري مستوفٍ شرط IAS 8.14 (موثوق وأكثر ملاءمة)" },
          then: { en: "RETROSPECTIVE application — full restatement of comparatives and opening balances", ar: "تطبيق رجعي — إعادة عرض كاملة للمقارنات والأرصدة الافتتاحية", red: true },
        },
        {
          when: { en: "Determining the period-specific effects is IMPRACTICABLE", ar: "تعذر تحديد آثار كل فترة" },
          then: { en: "Apply from the EARLIEST DATE PRACTICABLE + disclose why + the treatment", ar: "طبق من أقرب تاريخ ممكن + أفصح عن السبب والمعالجة", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Impracticability — the escape hatch", ar: "التعذر — مخرج الطوارئ" } },
    {
      kind: "p",
      text: {
        en: "Impracticability is a HIGH bar, not an excuse: it exists only when the entity cannot apply the requirement after making EVERY reasonable effort — records that no longer exist, effects that require HINDSIGHT (estimating what managers would have known then), or data that cannot be reconstructed. When period-specific effects are impracticable, apply the change from the earliest date PRACTICABLE and say so; when even that is impossible, prospective-only. Auditors test the effort, not just the conclusion.",
        ar: "التعذر عتبة عالية لا عذر: لا يتحقق إلا إذا عجزت المنشأة عن التطبيق بعد كل جهد معقول — سجلات لم تبق، أو آثار تستلزم إدراكًا متأخرًا (تقدير ما كان المديرون يعلمونه حينها)، أو بيانات لا يمكن إعادة بنائها. وإذا تعذرت آثار كل فترة على حدة طُبق التغير من أقرب تاريخ ممكن مع الإفصاح؛ وإذا استحال حتى ذلك فالتطبيق مستقبلي فقط. والمراجع يختبر الجهد لا الخلاصة فحسب.",
      },
    },
    {
      kind: "journal",
      title: { en: "Policy-change catch-up (new policy lifts the asset 200, tax 25%)", ar: "تسوية تغير السياسة (السياسة الجديدة ترفع الأصل ٢٠٠، ضريبة ٢٥٪)" },
      rows: [
        { dr: { en: "Asset 200 (carrying uplift at the opening of the earliest period)", ar: "أصل ٢٠٠ (زيادة دفترية في بداية أقدم فترة)" }, cr: { en: "Retained earnings (opening) 150", ar: "أرباح محتجزة (افتتاحية) ١٥٠" } },
        { cr: { en: "Deferred tax liability on the uplift 50", ar: "التزام ضريبة مؤجلة على الزيادة ٥٠" }, red: true },
        { cr: { en: "Same three-line shape for an ERROR: only the label and the disclosure change — the numbers go backwards", ar: "الهيكل ذاته بثلاثة أسطر مع الخطأ: يتغير المسمى والإفصاح فقط — أما الأرقام فترجع إلى الوراء" } },
      ],
    },
    { kind: "h", text: { en: "Changes in accounting estimates", ar: "تغيرات التقديرات المحاسبية" } },
    {
      kind: "p",
      text: {
        en: "The 2021 amendment (effective 2023) cleaned the definitions: a change in accounting estimates is an ADJUSTMENT of the carrying amount of an asset or liability (or the amount of its consumption) that results from NEW information or NEW developments — measurement techniques and valuation INPUTS are estimates, not policies. A change from an INCORRECT application of a technique is an ERROR; a change to a better technique or input, because better information arrived, is an ESTIMATE change — prospective, current period first.",
        ar: "تعديل ٢٠٢١ (الساري ٢٠٢٣) نقّح التعريفات: تغير التقدير المحاسبي تعديلٌ للقيمة الدفترية لأصل أو التزام (أو لمقدار استهلاكه) ناشئ عن معلومة أو تطور جديد — فأساليب القياس ومدخلات التقييم تقديرات لا سياسات. والانتقال عن تطبيق غير صحيح لأسلوب ما خطأ؛ أما الانتقال لأسلوب أو مدخل أفضل لوصول معلومة أفضل فتغير تقدير — مستقبلي يبدأ بالفترة الحالية.",
      },
    },
    {
      kind: "example",
      title: { en: "Useful-life revision — the classic prospective change", ar: "تنقيح العمر الإنتاجي — التغير المستقبلي الكلاسيكي" },
      lines: [
        { en: "Machine cost 90,000 · straight-line over 10 years · two years depreciated (18,000) → carrying amount 72,000", ar: "آلة بتكلفة ٩٠٬٠٠٠ · قسط ثابت على ١٠ سنوات · أُهلكت سنتان (١٨٬٠٠٠) ← قيمة دفترية ٧٢٬٠٠٠" },
        { en: "At the start of year 3 the remaining life is revised from 8 years to 3 years", ar: "في بداية السنة الثالثة روجع العمر المتبقي من ٨ سنوات إلى ٣ سنوات" },
        { en: "New annual charge = 72,000 ÷ 3 = 24,000 — compared with 9,000 before: the catch-up lands ENTIRELY in year 3 onwards", ar: "القسط السنوي الجديد = ٧٢٬٠٠٠ ÷ ٣ = ٢٤٬٠٠٠ — مقابل ٩٬٠٠٠ سابقًا: التقوية تقع بكاملها في السنة الثالثة وما بعدها" },
        { en: "NO restatement of years 1–2, NO adjustment to retained earnings — the estimate was right then, it is outdated now", ar: "لا إعادة عرض للسنتين الأولى والثانية ولا تعديل للأرباح المحتجزة — فالتقدير كان صائبًا حينها وصار قديمًا الآن" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The estimate-change entry (year 3)", ar: "قيد تغير التقدير (السنة الثالثة)" },
      rows: [
        { dr: { en: "Depreciation expense 24,000", ar: "مصروف إهلاك ٢٤٬٠٠٠" }, cr: { en: "Accumulated depreciation 24,000", ar: "مجمع الإهلاك ٢٤٬٠٠٠" }, red: true },
        { cr: { en: "Current period only — there is no 'catch-up to opening retained earnings' line, because nothing was wrong", ar: "الفترة الحالية فقط — لا سطر «تسوية للأرباح المحتجزة الافتتاحية» لأن شيئًا لم يكن خاطئًا" } },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "A change in the DEPRECIATION METHOD (straight-line → diminishing) is a change in ESTIMATE, not policy — IAS 16.61 says so explicitly; prospective it is.",
        ar: "تغير طريقة الإهلاك (من القسط الثابت إلى المتناقص) تغير تقدير لا سياسة — يقولها IAS 16.61 صراحة؛ فالمعالجة مستقبلية.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The litmus test the exam runs: NEW INFORMATION arrived → estimate change (prospective); the OLD treatment never complied with IFRS as it stood → error (retrospective). Ambiguous → estimate (IAS 8.35). Hindsight is not a policy, and a policy is not hindsight.",
        ar: "الاختبار الحاسم في الامتحان: وصلت معلومة جديدة ← تغير تقدير (مستقبلي)؛ المعالجة القديمة لم تلتزم بـ IFRS قط ← خطأ (رجعي). والغامض ← تقدير (IAS 8.35). فالإدراك المتأخر ليس سياسة، والسياسة ليست إدراكًا متأخرًا.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Bad-debt percentage raised after a new credit review of the customer base → ESTIMATE (new information)", ar: "رفع نسبة الديون المعدومة بعد مراجعة ائتمانية جديدة لقاعدة العملاء ← تقدير (معلومة جديدة)" },
        { en: "Inventory total added with a digit slip (67,000 typed as 76,000) → ERROR (maths mistake)", ar: "جمع المخزون بخطأ رقمي (٦٧٬٠٠٠ أُدخلت ٧٦٬٠٠٠) ← خطأ (خطأ حسابي)" },
        { en: "Warranty expectation revised after new quality data arrives → ESTIMATE", ar: "تنقيح توقع الضمان بعد وصول بيانات جودة جديدة ← تقدير" },
        { en: "Expenses capitalised although the policy never allowed it → ERROR (misapplied policy)", ar: "رسملة مصروفات لم يجزها المعيار قط ← خطأ (تطبيق سياسة تطبيقًا خاطئًا)" },
        { en: "Useful life of a plant shortened after observing its condition → ESTIMATE", ar: "تقصير العمر الإنتاجي لمصنع بعد ملاحظة حالته ← تقدير" },
        { en: "Revenue recognised in 2024 through a side letter that broke IFRS 15 → ERROR — retrospective", ar: "إيراد اعتُرف به في ٢٠٢٤ بموجب خطاب جانبي خالف IFRS 15 ← خطأ — رجعي" },
      ],
    },
    {
      kind: "example",
      title: { en: "Warranty estimate revised mid-stream", ar: "تنقيح تقدير الضمان أثناء المسير" },
      lines: [
        { en: "Sales 1,000,000 · warranty cost historically 1% of sales → annual provision expense 10,000", ar: "مبيعات ١٬٠٠٠٬٠٠٠ · تكلفة الضمان تاريخيًا ١٪ من المبيعات ← مصروف مخصص سنوي ١٠٬٠٠٠" },
        { en: "In 2025 new quality-assurance data shows the true rate is 2% → the estimate changes; the POLICY has not", ar: "في ٢٠٢٥ تظهر بيانات جودة جديدة أن النسبة الحقيقية ٢٪ ← يتغير التقدير ولا تتغير السياسة" },
        { en: "2025 provision expense = 1,000,000 × 2% = 20,000 — prospective; 2024's 10,000 stands untouched", ar: "مصروف مخصص ٢٠٢٥ = ١٬٠٠٠٬٠٠٠ × ٢٪ = ٢٠٬٠٠٠ — مستقبلي؛ ويبقى مخصص ٢٠٢٤ العشرة آلاف كما هو" },
        { en: "Had the 1% ignored KNOWN claim data already available in 2024, it would have been an ERROR — restatement territory", ar: "ولو تجاهلت نسبة الـ١٪ بيانات مطالبات كانت متاحة فعلًا في ٢٠٢٤ لكانت خطأً — وميدان الإعادة الرجعية" },
      ],
    },
    { kind: "h", text: { en: "Prior-period errors", ar: "أخطاء الفترات السابقة" } },
    {
      kind: "p",
      text: {
        en: "Errors are MATERIAL if they could influence users' decisions; the definition spans mathematical mistakes, misapplied policies, oversights, misinterpretations and FRAUD. Two boundaries matter: errors are measured from the CURRENT standards' effective date (adopting a new standard's transition is a policy change, not the correction of an old sin), and an estimate that later proves wide of the mark is NOT an error — it was the best number available at the time.",
        ar: "تكون الأخطاء جوهرية إذا كانت قادرة على التأثير في قرارات المستخدمين؛ ويشمل التعريف الأخطاء الحسابية وتطبيق السياسات خطأً والسهو وسوء التفسير والتدليس. وحدّان مهمان: تُقاس الأخطاء من تاريخ سريان المعايير الحالية (فتبني أحكام انتقال معيار جديد تغير سياسة لا تكفيرًا عن ذنب قديم)، والتقدير الذي يتضح لاحقًا بعيدًا عن الصواب ليس خطأً — فقد كان أفضل رقم متاح حينها.",
      },
    },
    {
      kind: "p",
      text: {
        en: "The correction route: errors flow through the equity of the EARLIEST period presented — adjust the opening balance of each affected component (usually retained earnings after tax), restate every comparative line item, and let IAS 1 pull in the THIRD statement of financial position. Where the error touched items recognised originally in OCI, correct the relevant RESERVE, not retained earnings.",
        ar: "مسار التصحيح: تتدفق الأخطاء في حقوق ملكية أقدم فترة معروضة — عدّل الرصيد الافتتاحي لكل مكون متأثر (غالبًا الأرباح المحتجزة بعد الضريبة)، وأعد عرض كل بند مقارن، ودع IAS 1 يستدعي قائمة المركز المالي الثالثة. وإذا مسّ الخطأ بنودًا اعتُرف بها أصلًا في الدخل الشامل فعدّل الاحتياطي المعني لا الأرباح المحتجزة.",
      },
    },
    {
      kind: "steps",
      items: [
        { en: "IDENTIFY the error and quantify its effect on each affected line item (pre-tax, then tax)", ar: "حدد الخطأ وقدّر أثره على كل بند متأثر (قبل الضريبة ثم بعدها)" },
        { en: "Determine the PERIODS affected and the cumulative effect on the earliest opening balance", ar: "حدد الفترات المتأثرة والأثر التراكمي على الرصيد الافتتاحي الأقدم" },
        { en: "RESTATE each comparative presented — as if the error had never happened", ar: "أعد عرض كل فترة مقارنة — كأن الخطأ لم يحدث قط" },
        { en: "Adjust the OPENING balance of retained earnings (or the affected reserve) of the earliest period presented", ar: "عدّل الرصيد الافتتاحي للأرباح المحتجزة (أو للاحتياطي المتأثر) في أقدم فترة معروضة" },
        { en: "RESTATE basic and diluted EPS for every period presented (IAS 33)", ar: "أعد عرض ربح السهم الأساسي والمخفض لكل فترة معروضة (IAS 33)" },
        { en: "DISCLOSE: nature of the error, correction per line item per period, per opening balance, and EPS effects", ar: "أفصح: طبيعة الخطأ والتصحيح لكل بند ولكل فترة ولكل رصيد افتتاحي وآثار ربح السهم" },
      ],
    },
    {
      kind: "tree",
      title: { en: "Routing an error", ar: "توجيه الخطأ" },
      root: { en: "A mistake from a prior period surfaces", ar: "ظهر خطأ من فترة سابقة" },
      branches: [
        {
          when: { en: "MATERIAL, period-specific effects determinable", ar: "جوهرية وآثار كل فترة قابلة للتحديد" },
          then: { en: "RESTATE each comparative + the opening balances of the earliest period presented", ar: "أعد عرض كل مقارنة + أرصدة بداية أقدم فترة معروضة", red: true },
        },
        {
          when: { en: "MATERIAL but the period-specific effects are impracticable to determine", ar: "جوهرية لكن يتعذر تحديد آثار كل فترة" },
          then: { en: "Restate the OPENING BALANCES of the earliest period for which restatement is practicable", ar: "أعد عرض أرصدة بداية أقدم فترة يمكن عمليًا إعادة عرضها", red: true },
        },
        {
          when: { en: "NOT material", ar: "غير جوهرية" },
          then: { en: "Correct in the CURRENT period — prospective, no restatement", ar: "صحح في الفترة الحالية — مستقبلي بلا إعادة عرض", red: true },
        },
      ],
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
      title: { en: "Error journals — BOTH directions (tax 20%)", ar: "قيود الأخطاء — الاتجاهان كلاهما (ضريبة ٢٠٪)" },
      rows: [
        { dr: { en: "Retained earnings (opening) 40", ar: "أرباح محتجزة (افتتاحية) ٤٠" }, cr: { en: "Inventory 50 — 2024 closing inventory OVERstated", ar: "مخزون ٥٠ — مخزون إقفال ٢٠٢٤ مبالغ فيه" } },
        { dr: { en: "Current tax liability 10 (the tax expense was overstated with it)", ar: "التزام ضريبة جارية ١٠ (كان مصروف الضريبة مبالغًا معه)" }, red: true },
        { dr: { en: "Trade receivables 120 — 2024 revenue UNDERstated (delivered, never invoiced)", ar: "مدينون تجاريون ١٢٠ — إيراد ٢٠٢٤ مُقال فيه (سُلم ولم يُفوتر)" } },
        { cr: { en: "Retained earnings (opening) 96 · current tax liability 24", ar: "أرباح محتجزة (افتتاحية) ٩٦ · التزام ضريبة جارية ٢٤" }, red: true },
      ],
    },
    {
      kind: "formula",
      title: { en: "The catch-up and the EPS restatement", ar: "التسوية وإعادة عرض ربح السهم" },
      lines: [
        { en: "Cumulative catch-up = Σ (after-tax effect on each prior period's profit or loss)", ar: "التسوية التراكمية = Σ (الأثر بعد الضريبة على ربح أو خسارة كل فترة سابقة)" },
        { en: "Restated comparative profit = reported profit ± after-tax effect of the change", ar: "الربح المقارن المعاد عرضه = الربح المفصح ± الأثر بعد الضريبة للتغير" },
        { en: "Restated basic EPS = restated attributable profit ÷ the SAME weighted-average shares", ar: "ربح السهم الأساسي المعاد = الربح المعاد ÷ متوسط الأسهم المرجح ذاته" },
        { en: "Estimate change: new periodic charge = revised carrying amount ÷ revised remaining life — no restatement anywhere", ar: "تغير التقدير: القسط الجديد = القيمة الدفترية المنقحة ÷ العمر المتبقي المنقح — لا إعادة عرض البتة" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Materiality of an error cuts BOTH ways: an amount trivial in isolation can be material because of its NATURE or its CONSEQUENCE — a small misstatement that hides a covenant breach, flips a loss into a profit, or nudges earnings over a bonus threshold is material however small. Restatement is not a punishment for size; it is a correction of influence.",
        ar: "جوهرية الخطأ تنعكس في الاتجاهين: المبلغ الصغير تافهًا في ذاته قد يكون جوهريًا بطبيعته أو بنتيجته — فالخطأ الصغير الذي يخفي إخلالًا بتعهد، أو يقلب خسارة إلى ربح، أو يدفع الأرباح فوق عتبة مكافأة، جوهري أيًّا كان حجمه. فإعادة العرض ليست عقوبة على الحجم بل تصحيحًا للتأثير.",
      },
    },
    {
      kind: "example",
      title: { en: "EPS restatement in one line", ar: "إعادة عرض ربح السهم في سطر" },
      lines: [
        { en: "2024 reported profit 1,000 · weighted-average shares 500 → basic EPS 2.00", ar: "ربح ٢٠٢٤ المفصح ١٬٠٠٠ · متوسط الأسهم المرجح ٥٠٠ ← ربح السهم الأساسي ٢٫٠٠" },
        { en: "Error found in 2025: 2024 revenue overstated 100 pre-tax · tax 20% → profit overstated 80", ar: "خطأ اكتُشف في ٢٠٢٥: إيراد ٢٠٢٤ مبالغ ١٠٠ قبل الضريبة · الضريبة ٢٠٪ ← الربح مبالغ ٨٠" },
        { en: "Restated 2024 profit = 1,000 − 80 = 920 → restated basic EPS = 920 ÷ 500 = 1.84", ar: "الربح المعاد لـ٢٠٢٤ = ١٬٠٠٠ − ٨٠ = ٩٢٠ ← ربح السهم المعاد = ٩٢٠ ÷ ٥٠٠ = ١٫٨٤" },
        { en: "The denominator NEVER moves for an IFRS-based restatement — only the profit line restates", ar: "المقام لا يتحرك أبدًا في إعادة عرض قائمة على IFRS — يعاد عرض سطر الربح وحده" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "An estimate is not 'wrong' merely because later facts differ — hindsight is not an error. Only numbers that failed IFRS as it stood when they were booked are errors.",
        ar: "التقدير لا يكون «خاطئًا» لمجرد اختلاف الوقائع اللاحقة — فالإدراك المتأخر ليس خطأ. والأخطاء وحدها هي الأرقام التي خالفت IFRS وقت إثباتها.",
      },
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
        en: "The deferred-tax shadow: every retrospective catch-up usually carries a deferred tax entry at the rate in force for each restated year — the exam hands you a rate precisely so the numbers land NET OF TAX.",
        ar: "ظل الضريبة المؤجلة: كل تسوية رجعية يرافقها غالبًا قيد ضريبة مؤجلة بمعدل كل سنة معاد عرضها — والامتحان يعطيك المعدل تحديدًا لتصل الأرقام صافيةً بعد الضريبة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Immaterial errors: the exam says 'a €5,000 stationery error from last year' — correct it in the current period and MOVE ON. Restating comparatives for stationery is a waste of the user's time and of your marks.",
        ar: "الأخطاء غير الجوهرية: يقول الامتحان «خطأ قرطاسية ٥٬٠٠٠ من العام الماضي» — صححه في الفترة الحالية وتجاوز. فإعادة عرض المقارنات من أجل قرطاسية إتلاف لوقت المستخدم ولدرجاتك.",
      },
    },
    { kind: "h", text: { en: "Disclosure — what each change demands", ar: "الإفصاح — ما يطلبه كل تغير" } },
    {
      kind: "list",
      items: [
        { en: "Policy change: the nature + reasons (why the new policy is more relevant/faithful) + adjustment per line item + EPS effects", ar: "تغير سياسة: الطبيعة والسبب (لمَ الجديدة أفضل) + الأثر لكل بند + أثر ربح السهم" },
        { en: "Estimate change: the nature + amount of the effect on the CURRENT period; if future-period effects are not estimable, say so", ar: "تغير تقدير: الطبيعة وأثر الفترة الحالية؛ وإن تعذر تقدير آثار المستقبل فيقال ذلك" },
        { en: "Error correction: the nature of the error + correction per line item for each period + per opening balance + EPS", ar: "تصحيح خطأ: طبيعة الخطأ + التصحيح لكل بند ولكل فترة ولكل رصيد افتتاحي + ربح السهم" },
        { en: "An impracticability: disclose the provision of IAS 8 violated and why the application is impracticable", ar: "حالة تعذر: أفصح عن نص IAS 8 المخالف وسبب تعذر التطبيق" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Standards ISSUED BUT NOT YET EFFECTIVE: disclose that fact and, where practicable, the known or reasonably estimable impact of first-time application — the favourite exam disclosure precisely because it makes the statements forward-looking. Early application of a new standard is disclosed too, with its effect on the current comparatives.",
        ar: "المعايير الصادرة غير السارية بعد: أفصح عن ذلك، وعند الإمكان عن الأثر المعروف أو القابل للتقدير المعقول لتطبيقها أول مرة — وهو الإفصاح المحبب في الامتحانات لأنه يجعل القوائم متطلعة للمستقبل. ويفصح كذلك عن التطبيق المبكر لمعيار جديد وأثره في مقارنات الفترة.",
      },
    },
    { kind: "h", text: { en: "Interactions with other standards", ar: "الترابط مع المعايير الأخرى" } },
    {
      kind: "list",
      items: [
        { en: "IAS 1 — the third statement of financial position and restated comparatives are IAS 8's work shown through IAS 1's frame", ar: "IAS 1 — قائمة المركز المالي الثالثة والمقارنات المعاد عرضها عمل IAS 8 يعرضه هيكل IAS 1" },
        { en: "IAS 12 — every catch-up remeasures deferred tax; restated tax expense follows the restated profit", ar: "IAS 12 — كل تسوية تعيد قياس الضريبة المؤجلة؛ ومصروف الضريبة المعاد يتبع الربح المعاد" },
        { en: "IAS 16 / IAS 38 — cost → revaluation is a revaluation, not a policy change; a depreciation-method change is an estimate change", ar: "IAS 16 / IAS 38 — الانتقال من التكلفة إلى إعادة التقييم إعادةُ تقييم لا تغير سياسة؛ وتغير طريقة الإهلاك تغير تقدير" },
        { en: "IAS 33 — EPS restated for every period presented after a retrospective change", ar: "IAS 33 — يعاد عرض ربح السهم لكل فترة معروضة بعد أي تغير رجعي" },
        { en: "IFRS 9 / IFRS 16 / IFRS 17 — each arrives with its own transition provisions that override the IAS 8 default", ar: "IFRS 9 / IFRS 16 / IFRS 17 — يأتي كلٌّ بأحكام انتقاله الخاصة التي تسمو على الأصل في IAS 8" },
        { en: "IAS 34 — a mid-year estimate revision is handled prospectively by the year-to-date method, not as a restatement", ar: "IAS 34 — تنقيح التقدير منتصف السنة يعالج مستقبليًا بطريقة التراكمي لا بإعادة عرض" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "IFRS 1, not IAS 8, governs FIRST-TIME ADOPTION of IFRS — the opening-statement reconciliations of a new adopter are IFRS 1's machinery; IAS 8's restatement rules apply only once the entity is already inside IFRS.",
        ar: "IFRS 1 لا IAS 8 هو الذي يحكم التبني الأول لمعايير IFRS — فتسويات قوائم الافتتاح للمتبني الجديد آلة IFRS 1؛ ولا تسري قواعد إعادة العرض في IAS 8 إلا بعد دخول المنشأة في نطاق IFRS.",
      },
    },
    { kind: "h", text: { en: "Transition & effective dates", ar: "الانتقال وتواريخ السريان" } },
    {
      kind: "p",
      text: {
        en: "IAS 8 itself is effective from 1 January 2010 (as revised); the 2021 amendment redefining accounting estimates took effect 1 January 2023, applied prospectatively — no restatement on adoption, because clarifying what an estimate IS does not change what it WAS. The material-policy-information alignment with IAS 1 (2023) trims the disclosure list in parallel.",
        ar: "يسري IAS 8 ذاته من ١ يناير ٢٠١٠ (بصيغته المنقحة)؛ وسرى تعديل ٢٠٢١ المُعيد تعريف التقديرات المحاسبية من ١ يناير ٢٠٢٣ بتطبيق مستقبلي — فلا إعادة عرض عند التبني، لأن توضيح ماهية التقدير لا يغير ما كان عليه. وتعمل مواءمة «معلومات السياسات الجوهرية» مع IAS 1 (٢٠٢٣) على تقليم قائمة الإفصاح بالتوازي.",
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
