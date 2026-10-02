/**
 * v30 — IFRS Summaries · Specialized & Other group:
 * IFRS 2, IFRS 6, IFRS 8, IFRS 14, IFRS 17, IAS 21, IAS 29, IAS 26.
 */

import type { Standard } from "./types"

export const SPECIALIZED_STANDARDS: Standard[] = [
  {
    code: "IFRS 2",
    title: { en: "Share-based Payment", ar: "الدفع على أساس الأسهم" },
    topic: "specialized",
    effective: { en: "Effective 1 Jan 2005 · amended 2018 (IAS 38 interaction)", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل ٢٠١٨" },
    blocks: [
      { kind: "h", text: { en: "Objective & the three flavours", ar: "الهدف والأنواع الثلاثة" } },
      {
        kind: "p",
        text: {
          en: "Recognise the goods or services received in a share-based payment when they are received — with a corresponding equity or liability — measured either at FAIR VALUE of the equity instruments or of the goods/services, whichever is more reliably measurable.",
          ar: "يعترف بالسلع أو الخدمات المتلقاه في ترتيب دفع بالأسهم عند تلقيها — مقابل حق ملكية أو التزام — بالقيمة العادلة لأدوات حقوق الملكية أو للسلع والخدمات، أيهما أمكن قياسه موثوقًا.",
        },
      },
      {
        kind: "tree",
        root: { en: "Which flavour?", ar: "أي نوع؟" },
        branches: [
          {
            when: { en: "EQUITY-SETTLED — employee options/RSUs settled in shares", ar: "يسوى بأسهم — خيارات أو أسهم مقيدة للموظفين تسوى بأسهم" },
            then: { en: "Measure at the options' grant-date fair value — FIXED afterwards; vesting conditions other than service are reflected in the ESTIMATE of numbers (market conditions stay in the model)", ar: "تقاس بالقيمة العادلة بتاريخ المنح — ولا تعدل بعد ذلك؛ وشروط الاستحقاق عدا الخدمة تنعكس في تقدير العدد (وشروط السوق تبقى داخل النموذج)", red: true },
          },
          {
            when: { en: "CASH-SETTLED — share appreciation rights (SARs), phantom shares", ar: "يسوى نقدًا — حقوق تقييم أسهم، أسهم وهمية" },
            then: { en: "LIABILITY remeasured at fair value AT EVERY REPORTING DATE until settlement — the expense 'chases' the share price", ar: "التزام يعاد قياسه بالقيمة العادلة كل فترة حتى التسوية — فالمصروف يلاحق سعر السهم", red: true },
          },
          {
            when: { en: "CHOICE of settlement — either party can pick cash or shares", ar: "خيار التسوية — لأي طرف اختيار النقد أو الأسهم" },
            then: { en: "Compound instrument: the cash alternative is a liability, the rest equity — treat as cash-settled if a present obligation exists", ar: "أداة مركبة: بديل النقد التزام والباقي حقوق ملكية — وعومل نقدًا إن وُجد التزام قائم" },
          },
        ],
      },
      { kind: "h", text: { en: "Vesting arithmetic", ar: "حسابات الاستحقاق" } },
      {
        kind: "formula",
        lines: [
          { en: "Expense per period = (options × vesting-probability estimate × grant-date FV) × time elapsed fraction − previously recognised", ar: "مصروف الفترة = (عدد الخيارات × تقدير احتمال الاستحقاق × القيمة العادلة بتاريخ المنح) × نسبة الوقت المنقضي − المعترف به سابقًا" },
          { en: "Non-market vesting conditions (profit targets) → adjust the NUMBER estimate; true-ups allowed", ar: "شروط استحقاق غير سوقية (مستهدفات ربح) ← يعدل تقدير العدد ويسمح بالتعديلات اللاحقة" },
          { en: "Market conditions (share price target) → baked into the grant-date FV model — NO later true-up for failing it", ar: "شروط سوقية (مستهدف سعر السهم) ← تدخل في نموذج القيمة العادلة بتاريخ المنح — ولا تعديل لاحقًا لعدم تحققها" },
          { en: "After vesting date: no further expense for equity-settled awards; cancellations → accelerate the remaining expense + P&L charge for the cancellation itself", ar: "بعد تاريخ الاستحقاق: لا مصروف إضافي لما يسوى بأسهم؛ والإلغاء ← تسريع المصروف المتبقي + شطب إلغاء بالأرباح" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Modifications: if the incremental fair value is positive, add it to the original grant-date FV over the remaining vesting period — the original value is never replaced.",
          ar: "التعديلات: إذا كانت القيمة العادلة التضافية موجبة تضاف للقيمة الأصلية على مدى فترة الاستحقاق المتبقية — ولا تستبدل القيمة الأصلية أبدًا.",
        },
      },
    ],
  },

  {
    code: "IFRS 6",
    title: { en: "Exploration for and Evaluation of Mineral Resources", ar: "الاستكشاف والتقييم للموارد المعدنية" },
    topic: "specialized",
    effective: { en: "Effective 1 Jan 2006 · a limited-scope interim standard", ar: "سارٍ من ١ يناير ٢٠٠٦ · معيار مؤقت محدود النطاق" },
    blocks: [
      { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
      {
        kind: "p",
        text: {
          en: "Covers exploration & evaluation expenditure ONLY — from the search for mineral resources to the point where technical feasibility and commercial viability are demonstrable. After that, IAS 16/IAS 38/IAS 36 take over; development and production sit OUTSIDE this standard.",
          ar: "يغطي إنفاق الاستكشاف والتقييم فقط — من البحث عن الموارد المعدنية حتى النقطة التي يمكن عندها إثبات الجدوى الفنية والتجارية. وبعدها يتولى IAS 16/38/36؛ والتطوير والإنتاج خارج هذا المعيار.",
        },
      },
      {
        kind: "list",
        items: [
          { en: "Policy choice retained: expense as incurred OR capitalise an exploration & evaluation ASSET — but disclose which, and be consistent", ar: "خيار سياسة محفوظ: مصروف عند الحدوث أو رسملة أصل استكشاف وتقييم — مع الإفصاح والثبات" },
          { en: "The E&E asset is measured at COST (no revaluation model) and classified as tangible OR intangible by nature (physical rights vs information)", ar: "يقاس أصل الاستكشاف والتقييم بالتكلفة (لا إعادة تقييم) ويصنف ملموسًا أو غير ملموس بحسب طبيعته" },
          { en: "Impairment: a special one-test-only regime — when facts suggest the carrying amount exceeds the recoverable amount, test at the CASH-GENERATING UNIT level (the CGU may be bigger than for IAS 36)", ar: "الانخفاض: نظام خاص باختبار واحد — عند وجود ما يوحي بتجاوز الرصيد للمبلغ القابل للاسترداد يختبر على مستوى الوحدة المولدة للنقد (التي قد تكون أوسع من وحدات IAS 36)" },
          { en: "Decommissioning: IAS 37 recognition of restoration obligations follows the same lines as IAS 16", ar: "تفكيك المنشآت: يعترف بالتزامات الإصلاح وفق IAS 37 على النسق ذاته في IAS 16" },
        ],
      },
      { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
      {
        kind: "list",
        items: [
          { en: "Present E&E assets as a SEPARATE line: 'exploration and evaluation assets' + the carrying amounts of each class and the measurement basis", ar: "تعرض أصول الاستكشاف في بند مستقل مع القيم الدفترية لكل فئة وأساس القياس" },
          { en: "Disclose revenues, expenses, and cash-flow movements driven by exploration activity + the accounting policy for the costs", ar: "يفصح عن الإيرادات والمصروفات وتغيرات التدفق النقدي الناشئة عن نشاط الاستكشاف + سياسة محاسبة التكاليف" },
          { en: "Quantified financial effects of the entity's reliance on the E&E exemption from IAS 36/37/38 must reach the notes", ar: "الآثار المالية الكمية للإعفاءات من IAS 36/37/38 تصل إلى الإيضاحات" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "IFRS 6 exists because the IASB could not agree on a full extractive-industries standard — it GRANDFATHERS limited exemptions from IAS 8 (no forced policy change) but sunsets the moment technical feasibility is proven.",
          ar: "وُجد IFRS 6 لأن المجلس لم يتفق على معيار كامل لصناعات الاستخراج — فهو يبيح إعفاءات محدودة من IAS 8 (لا إجبار على تغيير السياسة) وينتهي لحظة إثبات الجدوى الفنية.",
        },
      },
    ],
  },

  {
    code: "IFRS 8",
    title: { en: "Operating Segments", ar: "القطاعات التشغيلية" },
    topic: "specialized",
    effective: { en: "Effective 1 Jan 2009 · the management approach", ar: "سارٍ من ١ يناير ٢٠٠٩ · منهج الإدارة" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "Disclose information the CHIEF OPERATING DECISION MAKER (CODM) actually uses — segment results as reviewed internally, however the business is genuinely run (the 'management approach'), not a textbook carve-up.",
          ar: "الإفصاح عن المعلومات التي يستخدمها فعلًا صانع القرار التشغيلي الرئيسي — نتائج القطاعات كما تراجع داخليًا، بالتقسيم الذي تدار به الأعمال حقيقةً (منهج الإدارة) لا تقسيم الكتب المدرسية.",
        },
      },
      { kind: "h", text: { en: "Identifying reportable segments", ar: "تحديد القطاعات المبلغة" } },
      {
        kind: "steps",
        items: [
          { en: "A segment = a component whose operating results the CODM regularly reviews for decisions on resources and performance", ar: "القطاع = مكون يراجع صانع القرار نتائجه التشغيلية بانتظام لقرارات الموارد والأداء" },
          { en: "Report it if: reported revenue ≥ 10% of total · OR profit/loss ≥ 10% of the larger of combined profit/loss · OR assets ≥ 10% of total assets", ar: "يبلغ عنه إذا: إيراده ≥ ١٠٪ من الإجمالي، أو ربحه/خسارته ≥ ١٠٪ من الأكبر من مجموع الأرباح/الخسائر، أو أصوله ≥ ١٠٪ من إجمالي الأصول" },
          { en: "Below the thresholds → combine with similar segments, or disclose as 'all other segments', or report anyway", ar: "دون العتبات ← يدمج مع قطاعات مماثلة أو يفصح عنه ضمن «قطاعات أخرى» أو يبلغ عنه رغمًا" },
          { en: "75% floor: external revenue of reported segments must reach 75% of total revenue — otherwise add segments until it does", ar: "حد ٧٥٪: يجب أن تبلغ الإيرادات الخارجية للقطاعات المبلغة ٧٥٪ من الإجمالي — وإلا أضيفت قطاعات حتى بلوغه" },
        ],
      },
      {
        kind: "list",
        items: [
          { en: "Disclose per segment: revenue, profit/loss, assets, liabilities (if given to the CODM), capex, depreciation, significant non-cash items — all in the MEASUREMENT the CODM uses", ar: "يفصح لكل قطاع: الإيراد والنتيجة والأصول والالتزامات (إن أعطيت لصانع القرار) والإنفاق الرأسمالي والإهلاك والبنود غير النقدية الجوهرية — بالقياس ذاته الذي يستخدمه صانع القرار" },
          { en: "Reconciliations to the IFRS numbers + entity-wide disclosures (products, geographies, major customers ≥ 10%) complete the picture", ar: "تسويات إلى أرقام IFRS + إفصاحات على مستوى المنشأة (المنتجات، الجغرافيا، العملاء الكبار ≥ ١٠٪) تكمل الصورة" },
          { en: "By-products of the approach: segment measurement need NOT be IFRS-compliant; differently-measured segments are allowed", ar: "من نتائج المنهج: قياس القطاع لا يلزم بمراقبة IFRS الكاملة؛ ويجوز اختلاف القياس بين القطاعات" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Find the CODM first (a person or committee — 'the executive board', 'the COO'), then every other answer falls out of what THAT body reviews. The 10% tests matter only after the management structure is understood.",
          ar: "حدد صانع القرار أولًا (شخص أو لجنة — «المجلس التنفيذي»، «مدير التشغيل») ثم تتوالى الإجابات مما يراجعه ذلك الجهاز. واختبارات ١٠٪ لا تأتي إلا بعد فهم الهيكل الإداري.",
        },
      },
    ],
  },

  {
    code: "IFRS 14",
    title: { en: "Regulatory Deferral Accounts", ar: "حسابات التأجيل التنظيمي" },
    topic: "specialized",
    effective: { en: "Effective 1 Jan 2016 · optional for FIRST-TIME adopters only", ar: "سارٍ من ١ يناير ٢٠١٦ · اختياري للمتبنين الأوائل فقط" },
    blocks: [
      { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
      {
        kind: "p",
        text: {
          en: "A narrow relief standard: a first-time adopter whose previous GAAP allowed regulatory deferral account balances (rate-regulated utilities) may keep recognising them within IFRS — because rate regulation that establishes a price fixing mechanism can make those balances meaningful.",
          ar: "معيار إغاثة ضيق: المتبني الأول الذي سمحت معاييره السابقة بأرصدة تأجيل تنظيمي (مرافق خاضعة لتسعير تنظيمي) يجوز له الاستمرار في الاعتراف بها ضمن IFRS — لأن التنظيم الذي يضع آلية تسعير يجعل تلك الأرصدة ذات معنى.",
        },
      },
      {
        kind: "list",
        items: [
          { en: "Applies ONLY to entities whose activities are subject to rate regulation where rates are set to recover specific costs + a return — an executive body establishes the price fixing", ar: "يسري فقط على منشآت خاضعة لتنظيم تسعيري يستهدف تغطية تكاليف بعينها + عائد — بهيئة تنفيذية تضع التسعير" },
          { en: "Recognise regulatory deferral account balances (expense recovery / income appropriation timing differences) with the SAME classification as under previous GAAP — reclassified per IFRS 1 policies", ar: "يعترف بأرصدة التأجيل التنظيمي بالتصنيف ذاته الوارد في المعايير السابقة — مع إعادة تبويب وفق سياسات IFRS 1" },
          { en: "Full IFRS recognition/measurement: not adjusted — the balances carry over; new ones arise only from permitted rate actions, impairment follows IAS 36-style triggers", ar: "الاعتراف والقياس الكاملان: لا يعدلان — تنقل الأرصدة كما هي؛ والجديد ينشأ فقط من تصرفات تسعير مسموح بها، والانخفاض بمحفزات على نهج IAS 36" },
          { en: "It exists to avoid first-time adopters (mainly utilities) having to strip rate-regulation timing balances while the IASB's rate-regulated-activities project is unfinished", ar: "وُجد ليجنب المتبنين الأوائل (المرافق أساسًا) تجريد أرصدة توقيت التنظيم بينما مشروع الأنشطة التنظيمية بالمجلس لم يكتمل" },
        ],
      },
      { kind: "h", text: { en: "Presentation & the mechanics", ar: "العرض والآلية" } },
      {
        kind: "formula",
        lines: [
          { en: "The deferral balance keeps its PREVIOUS-GAAP classification: an asset (amounts expected to be recovered from future rates) or a liability (to be refunded through lower rates)", ar: "يحتفظ رصيد التأجيل بتصنيفه في المعايير السابقة: أصل (يسترد من تعريفات مستقبلية) أو التزام (يرد بتعريفات أخفض)" },
          { en: "NEW deferrals only from permitted rate actions, measured consistently with the regulatory framework — never a free re-introduction of deferred accounting", ar: "لا تأجيلات جديدة إلا من تصرفات تسعير مسموح بها وبقياس متسق مع الإطار التنظيمي — لا إعادة تقديم حرة لمحاسبة التأجيل" },
          { en: "IAS 12 deferred tax STILL applies to the temporary differences the balances create — the tax man is not deferred", ar: "تسري ضريبة IAS 12 المؤجلة على الفروق المؤقتة التي تنشئها الأرصدة — فالضريبي لا يؤجل" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "If an entity adopting IFRS for the first time has NO regulatory deferral balances, IFRS 14 is irrelevant — and any entity that already applies IFRS cannot opt in. Its five minutes of exam fame: the eligibility gate.",
          ar: "إذا لم يكن لدى المتبني الأول أرصدة تأجيل تنظيمي فلا شأن له بـ IFRS 14 — ومن يطبق IFRS بالفعل لا يستطيع الانضمام. وزهوته في الامتحان: بوابة الأهلية.",
        },
      },
    ],
  },

  {
    code: "IFRS 17",
    title: { en: "Insurance Contracts", ar: "عقود التأمين" },
    topic: "specialized",
    effective: { en: "Effective 1 Jan 2023 · postposed by one year from 2021", ar: "سارٍ من ١ يناير ٢٠٢٣ · أُجِّل سنة عن ٢٠٢١" },
    replaces: { en: "Replaces IFRS 4 (the interim insurance standard)", ar: "يحل محل IFRS 4 (معيار التأمين المؤقت)" },
    blocks: [
      { kind: "h", text: { en: "Objective & boundary", ar: "الهدف والحدود" } },
      {
        kind: "p",
        text: {
          en: "A contract under which one party accepts significant INSURANCE RISK from another by agreeing to compensate if a specified uncertain future event adversely affects the policyholder. The model is a merged current-measurement approach built around the FULFILMENT CASH FLOWS and the CONTRACTUAL SERVICE MARGIN (CSM).",
          ar: "عقد يقبل فيه طرف مخاطر تأمين جوهرية من طرف آخر بالتعويض إذا أثر حدث مستقبلي غير مؤكد سلبًا في المؤمَّن له. والنموذج قياس حالي مدمج يدور حول التدفقات النقدية للوفاء وهامش الخدمة التعاقدي.",
        },
      },
      { kind: "h", text: { en: "The building blocks", ar: "اللبنات الأساسية" } },
      {
        kind: "steps",
        items: [
          { en: "Block 1 — FULFILMENT CASH FLOWS: probability-weighted estimates of future cash flows, discounted, + a risk adjustment for non-financial risk", ar: "اللبنة ١ — تدفقات الوفاء: تقديرات مرجحة بالاحتمالات للتدفقات المستقبلية مخصومة + تعديل مخاطر للمخاطر غير المالية" },
          { en: "Block 2 — the CSM: the unearned profit, released to P&L over the coverage (insurance service) period — so no day-one gain on the contract", ar: "اللبنة ٢ — هامش الخدمة التعاقدي: الربح غير المكتسب يترد بالأرباح على مدى فترة التغطية — فلا ربح في اليوم الأول" },
          { en: "On initial recognition: insurance liability = fulfilment cash flows + CSM (negative day-one FCF absorbed into the CSM)", ar: "عند الاعتراف الابتدائي: التزام التأمين = تدفقات الوفاء + الهامش (وأي تدفقات سالبة أول اليوم تمتص في الهامش)" },
          { en: "Subsequently: roll forward the discounted FCF, release the CSM by COVERAGE UNITS (quantity of benefits + expected coverage duration)", ar: "لاحقًا: تتدحرج التدفقات المخصومة، ويحرر الهامش بوحدات التغطية (كمية المنافع + مدة التغطية المتوقعة)" },
        ],
      },
      {
        kind: "tree",
        root: { en: "Simplifications & aggregation", ar: "التبسيط والتجميع" },
        branches: [
          {
            when: { en: "PREMIUM ALLOCATION APPROACH (PAA) — short contracts (≤ 1 year) or where the result approximates the general model", ar: "أسلوب توزيع القسط — عقود قصيرة (≤ سنة) أو حيث يقارب نتيجته النموذج العام" },
            then: { en: "Unearned premium + no CSM mechanics — close to the old deferred-premium world", ar: "قسط غير مكتسب بلا ميكانيكا الهامش — قريب من عالم الأقساط المؤجلة القديم", red: true },
          },
          {
            when: { en: "REINSURANCE HELD — the cedant's side gets its own model (mainly the general model, with special onerous-contract treatment)", ar: "إعادة تأمين مكتتب — يحاسب المعيد نموذجًا خاصًا (أغلبًا النموذج العام بمعالجة خاصة للعقود المفضرة)" },
            then: { en: "A gain on buying reinsurance is possible at inception (unlike direct contracts)", ar: "يجوز ربح عند اكتتاب إعادة التأمين ابتداءً (خلافًا للعقود المباشرة)", red: true },
          },
          {
            when: { en: "INVESTMENT COMPONENTS with a distinct investment component", ar: "مكونات استثمارية ذات مكون استثماري مميز" },
            then: { en: "Separate under IFRS 9 (deposit accounting) when distinct; otherwise embedded in the IFRS 17 liability", ar: "تفصل وفق IFRS 9 (محاسبة ودائع) إذا كانت مميزة؛ وإلا تدمج في التزام IFRS 17", red: true },
          },
        ],
      },
      {
        kind: "list",
        items: [
          { en: "Presentation: insurance service result (earned premium net of claims + releasing CSM) SEPARATE from insurance finance income/expense (the discounting & economic moves)", ar: "العرض: نتيجة خدمة التأمين (قسط مكتسب صافي المطالبات + تحرير الهامش) منفصلة عن دخل/مصروف التمويل (الخصم وتغيرات الاقتصاد)" },
          { en: "OCI option to unwind the discount rate in equity for insurance finance income/expense — removes accounting volatility", ar: "خيار الدخل الشامل لفك معدل الخصم في حقوق الملكية — يزيل تقلب المحاسبة" },
          { en: "ONEROUS contracts: the loss hits P&L IMMEDIATELY (no CSM cushion), and a loss-recovery component recognises expected reinsurance recoveries", ar: "العقود المفضرة: تضرب الخسارة بالأرباح فورًا (بلا وسادة هامش) — مع مكون استرداد لما يتوقع استرداده من إعادة التأمين" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Contrast with the old IFRS 4 world: no more local-GAAP grandfathering, no locked-in discount rates (a current rate + the OCI option), and the CSM makes day-one profit on profitable underwriting impossible — the biggest single change in insurance accounting history.",
          ar: "قارن بعالم IFRS 4 القديم: لا مزيد من توريث المعايير المحلية، ولا معدلات خصم مقيدة (معدل حال + خيار الدخل الشامل)، والهامش يستحيل معه ربح اليوم الأول على الاكتتاب الرابح — أكبر تغيير منفرد في تاريخ محاسبة التأمين.",
        },
      },
    ],
  },

  {
    code: "IAS 21",
    title: { en: "The Effects of Changes in Foreign Exchange Rates", ar: "آثار تغيرات أسعار الصرف الأجنبي" },
    topic: "specialized",
    effective: { en: "Effective 1 Jan 2005 · amended (lack of exchangeability 2024)", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل ٢٠٢٤ (تعذر قابلية التبادل)" },
    blocks: [
      { kind: "h", text: { en: "Objective & functional currency", ar: "الهدف والعملة الوظيفية" } },
      {
        kind: "p",
        text: {
          en: "The FUNCTIONAL CURRENCY is the currency of the primary economic environment in which the entity operates (the one that mainly influences sales prices and costs). Translate everything into the functional currency, then into a PRESENTATION currency using closing rates.",
          ar: "العملة الوظيفية عملة البيئة الاقتصادية الرئيسة التي تعمل فيها المنشأة (التي تؤثر أساسًا في أسعار البيع والتكاليف). تترجم كل شيء إلى العملة الوظيفية ثم إلى عملة عرض بالأسعار الختامية.",
        },
      },
      { kind: "h", text: { en: "The translation ladder", ar: "سلم الترجمة" } },
      {
        kind: "tree",
        root: { en: "Which transaction/balance?", ar: "أي معاملة أو رصيد؟" },
        branches: [
          {
            when: { en: "FOREIGN-CURRENCY TRANSACTIONS in the books", ar: "معاملات بعملة أجنبية في الدفاتر" },
            then: { en: "Initial: SPOT rate at the date. Monetary items: retranslate at CLOSING rate, differences → P&L. Non-monetary (PPE, inventory, goodwill at historical): historical rate, no FX", ar: "ابتداءً: سعر جارٍ بتاريخ المعاملة. والبنود النقدية تعاد ترجمتها بالختامي والفروق بالأرباح. وغير النقدية بسعرها التاريخي بلا فروق", red: true },
          },
          {
            when: { en: "A foreign OPERATION integral to the parent's business", ar: "عملية أجنبية متكاملة مع نشاط الأم" },
            then: { en: "Same as transactions — retranslate its monetary items; the differences go to P&L", ar: "تعامل كالمعاملات — تعاد ترجمة بنودها النقدية والفروق بالأرباح", red: true },
          },
          {
            when: { en: "A foreign SUBSIDIARY consolidated (a self-contained entity)", ar: "تابعة أجنبية تجمع" },
            then: { en: "P&L at actual/average rates · SOFP at CLOSING · goodwill & fair-value adjustments at the HISTORICAL transaction-date rate · differences → OCI (translation reserve)", ar: "الأرباح بالفعلي أو المتوسط · والمركز بالختامي · والشهرة وتعديلات القيمة العادلة بسعر التاريخ التاريخي · والفروق للدخل الشامل (احتياطي الترجمة)", red: true },
          },
        ],
      },
      {
        kind: "formula",
        lines: [
          { en: "Exchange difference on disposal of a foreign operation → reclassify the accumulated OCI translation reserve to P&L as part of the gain/loss", ar: "فروق الصرف عند التخلي عن عملية أجنبية ← يعاد تبويب احتياطي الترجمة المتراكم إلى الأرباح ضمن نتيجة الاستبعاد" },
          { en: "2024 amendment: when a currency lacks exchangeability, estimate the rate from an observable economic relationship; disclose how and why", ar: "تعديل ٢٠٢٤: عند تعذر قابلية تبادل العملة يقدر السعر من علاقة اقتصادية يمكن ملاحظتها مع الإفصاح عن الكيف والسبب" },
          { en: "In a hyperinflationary economy (IAS 29) → restate first, then translate", ar: "في اقتصاد تضخم جامح (IAS 29) ← يعاد بيان القوائم أولًا ثم تترجم" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Gold-decorated rule: monetary → closing rate & P&L; non-monetary → historical rate (except fair-valued, which follow the valuation date); equity → historical rate. The exam's favourite trap is inventory (non-monetary!) and dividends (translated at the PAYMENT date).",
          ar: "القاعدة الذهبية: النقدي ← الختامي والأرباح؛ وغير النقدي ← التاريخي (عدا المقيمة بالعادلة فبتاريخ التقييم)؛ وحقوق الملكية ← التاريخي. وأشهر فخ: المخزون (غير نقدي!) والتوزيعات (تترجم بتاريخ الدفع).",
        },
      },
    ],
  },

  {
    code: "IAS 29",
    title: { en: "Financial Reporting in Hyperinflationary Economies", ar: "التقارير المالية في الاقتصادات ذات التضخم الجامح" },
    topic: "specialized",
    effective: { en: "Effective 1 Jan 1990 · operationalised by IFRIC 7", ar: "سارٍ من ١ يناير ١٩٩٠ · فسّره IFRIC 7" },
    blocks: [
      { kind: "h", text: { en: "Objective & the trigger", ar: "الهدف والمحفز" } },
      {
        kind: "p",
        text: {
          en: "When an economy is hyperinflationary, the functional-currency statements are restated in terms of the MEASURING-UNIT CURRENT at the reporting date — because money loses its measuring-unit role so fast that unadjusted numbers mislead.",
          ar: "عند التضخم الجامح تعاد صياغة قوائم العملة الوظيفية بوحدة القياس السائدة بتاريخ التقرير — لأن النقد يفقد وظيفته كوحدة قياس بسرعة تجعل الأرقام غير المعدلة مضللة.",
        },
      },
      {
        kind: "list",
        items: [
          { en: "Indicators (cumulative 3-year inflation approaching/exceeding 100%): population prices/ wages/savings in stable money, credit at inflation-indexed rates, capital flight", ar: "المؤشرات (تضخم تراكمي ثلاثي يقترب من/يتجاوز ١٠٠٪): تسعير بالعملة الثابتة، وفوائد مفهرسة، وهروب رأس المال" },
          { en: "The restatement ladder: INDEX non-monetary items (PPE, inventory, equity) from acquisition dates to the closing measuring unit via a general price index", ar: "سلم إعادة البيان: تفهرس البنود غير النقدية (ممتلكات، مخزون، حقوق ملكية) من تواريخ اقتنائها إلى وحدة القياس الختامية بدليل أسعار عام" },
          { en: "Monetary items stay at their current amounts — the NET MONETARY POSITION gain/loss (the inflation tax on net monetary assets/liabilities) goes to P&L", ar: "البنود النقدية تبقى بمبالغها الجارية — وربح/خسارة المركز النقدي الصافي (ضريبة التضخم على صافي الأصول النقدية) تذهب للأرباح" },
          { en: "The P&L is restated with the index from transaction dates to the closing unit (or a mid-period index with adjusting to the closing unit); comparatives become closing-date units too", ar: "تعاد صياغة الأرباح بفهرسة كل بند من تاريخه إلى وحدة الإقفال (أو بدليل منتصف الفترة مضبوطًا)؛ وتصير المقارنات بوحدات الإقفال ذاته" },
          { en: "A gain on a net monetary LIABILITY (borrowing) in a hyperinflationary economy is genuine — recognise it in P&L", ar: "الربح على التزام نقدي صافٍ (اقتراض) في اقتصاد متضخم حقيقي — يعترف به في الأرباح" },
        ],
      },
      { kind: "h", text: { en: "The net monetary position", ar: "المركز النقدي الصافي" } },
      {
        kind: "formula",
        lines: [
          { en: "GAIN when net monetary LIABILITIES exceed assets (you repay with money worth less each month)", ar: "ربح عندما تتجاوز الالتزامات النقدية الأصول (تسدد بنقد يفقد قيمته شهرًا بعد شهر)" },
          { en: "LOSS when net monetary ASSETS dominate (cash & receivables melt while you hold them)", ar: "خسارة عندما تغلب الأصول النقدية (النقد والمدينون يذوبان أثناء حيازتها)" },
          { en: "Index the OPENING net monetary position to the closing unit, add the indexed movements — the difference hits P&L", ar: "يفهرس المركز النقدي الافتتاحي لوحدة الإقفال وتضاف الحركات المفهرسة — والفرق بالأرباح" },
          { en: "Equity (share capital, premiums, reserves) is indexed from the DATES the amounts arose — comparatives all become closing-date measuring units", ar: "تفهرس حقوق الملكية من تواريخ نشوئها — وتصير المقارنات كلها بوحدات قياس تاريخ الإقفال" },
        ],
      },
      {
        kind: "example",
        title: { en: "Worked example", ar: "مثال عملي" },
        lines: [
          { en: "Opening net monetary assets 100 · general price index rises 100 → 140 (40% inflation)", ar: "أصول نقدية صافية افتتاحية ١٠٠ · ودليل الأسعار من ١٠٠ إلى ١٤٠ (تضخم ٤٠٪)" },
          { en: "Restated position 140 → loss of 40 recognised in P&L (purchasing power lost)", ar: "المركز المعاد بيانه ١٤٠ ← خسارة ٤٠ بالأرباح (قوة شرائية مفقودة)" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "If the entity's functional currency is NOT hyperinflationary but a subsidiary's is: restate the subsidiary under IAS 29 FIRST, then translate under IAS 21 (closing rates). If the entity itself becomes hyperinflationary, apply IAS 29 from THAT date — and if it later stabilises, IAS 29 stops being applied prospectively (no restatement back).",
          ar: "إذا لم تكن العملة الوظيفية متضخمة بينما التابعة كذلك: يعاد بيان التابعة بـ IAS 29 أولًا ثم تترجم بـ IAS 21 (بالختامي). وإذا صارت المنشأة ذاتها متضخمة طبق IAS 29 من ذلك التاريخ — وإذا استقرت توقف معاييره مستقبليًا (بلا رجوع).",
        },
      },
    ],
  },

  {
    code: "IAS 26",
    title: { en: "Accounting and Reporting by Retirement Benefit Plans", ar: "محاسبة والتقارير لخطط مزايا التقاعد" },
    topic: "specialized",
    effective: { en: "Effective 1 Jan 1988 · the plan-side mirror of IAS 19", ar: "سارٍ من ١ يناير ١٩٨٨ · مرآة IAS 19 من جانب الخطة" },
    blocks: [
      { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
      {
        kind: "p",
        text: {
          en: "Sets the ACCOUNTING for the retirement benefit PLAN itself — the fund that holds the assets and owes the promised benefits — both defined-contribution and defined-benefit plans, reporting to participants as users.",
          ar: "يحدد محاسبة خطة التقاعد ذاتها — الصندوق الذي يحتفظ بالأصول ويدين بالمنافع الموعودة — لخطط الاشتراكات والمنافع المحددة معًا، تقريرًا للمشتركين بوصفهم المستخدمين.",
        },
      },
      {
        kind: "tree",
        root: { en: "Plan type", ar: "نوع الخطة" },
        branches: [
          {
            when: { en: "DEFINED-CONTRIBUTION plan", ar: "خطة اشتراكات محددة" },
            then: { en: "Report: contributions due/payable + a description of the policy/strategy + the plan assets & liabilities", ar: "التقرير: الاشتراكات المستحقة + وصف السياسة والاستراتيجية + أصول الخطة والتزاماتها", red: true },
          },
          {
            when: { en: "DEFINED-BENEFIT plan", ar: "خطة منافع محددة" },
            then: { en: "Report: a SOFP-like statement — net assets available for benefits + the actuarial present value of promised benefits, on a going-concern basis", ar: "التقرير: قائمة على هيئة مركز مالي — صافي الأصول المتاحة للمنافع + القيمة الحالية الاكتوارية للمنافع الموعودة على أساس الاستمرارية", red: true },
          },
        ],
      },
      {
        kind: "list",
        items: [
          { en: "Plan investments: carried at FAIR VALUE (or when a quoted price is absent — the report explains); valuation changes → the statement of changes in net assets", ar: "استثمارات الخطة: بالقيمة العادلة (وإلا يفسر التقرير)؛ وتغيرات القيمة بقائمة التغيرات في صافي الأصول" },
          { en: "Actuarial valuations at least every THREE years; the report explains funding policy, significant changes, tax and investment-arrangement effects", ar: "التقييمات الاكتوارية كل ثلاث سنوات على الأكثر؛ ويشرح التقرير سياسة التمويل والتغيرات الجوهرية وآثار الضرائب والاستثمار" },
          { en: "Money-purchase / defined-contribution reporting includes transactions and investment performance during the period", ar: "تشمل تقارير الاشتراكات المحددة المعاملات وأداء الاستثمار خلال الفترة" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Keep the lenses straight: IAS 19 is the EMPLOYER's accounting; IAS 26 is the PLAN's accounting — actuarial present value of promised benefits replaces the DBO vocabulary, and there is no plan-assets-vs-DBO netting here.",
          ar: "لا تخلط العدستين: IAS 19 محاسبة صاحب العمل؛ و IAS 26 محاسبة الخطة — فالقيمة الحالية الاكتوارية للمنافع بديل مصطلح الالتزام بالمزايا، ولا مقاصة هنا بين أصول الخطة والالتزام.",
        },
      },
    ],
  },
]
