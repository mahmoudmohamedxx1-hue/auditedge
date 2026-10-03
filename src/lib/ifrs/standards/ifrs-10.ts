/** IFRS 10 — Consolidated Financial Statements */

import type { Standard } from "../types"

export const IFRS_10: Standard = {
  code: "IFRS 10",
  title: { en: "Consolidated Financial Statements", ar: "القوائم المالية المجمعة" },
  topic: "groups",
  effective: { en: "Effective 1 Jan 2013 · the single control model for every investor–investee relationship", ar: "سارٍ من ١ يناير ٢٠١٣ · نموذج سيطرة واحد لكل علاقة مستثمر–مستثمَر فيه" },
  blocks: [
    { kind: "h", text: { en: "Objective — one control model for everything", ar: "الهدف — نموذج سيطرة واحد لكل شيء" } },
    {
      kind: "p",
      text: {
        en: "IFRS 10 replaced the old 'control = majority of voting rights' checklist with a PRINCIPLES-BASED model applied uniformly to any investee — companies, partnerships, structured entities. A parent presents consolidated statements for the group, and consolidates EVERY subsidiary it controls without exceptions for 'different activities', hostile minorities or sheer size. The one exemption door (IFRS 10.4) is narrow: a parent that is itself wholly/partially owned, whose other owners do not object, whose instruments are not publicly traded, that files no public-market statements, and whose ultimate or intermediate parent publishes IFRS consolidated statements may skip consolidation — and then presents its own separate statements instead.",
        ar: "أبدل IFRS 10 قائمة «السيطرة = أغلبية حقوق التصويت» القديمة بنموذج مبادئ يطبق موحدًا على أي مستثمَر فيه — شركة كانت أو شراكة أو كيانًا مهكلًا. فالأم ذات التابعات تقدم قوائم مجمعة للمجموعة، وتجمع كل تابعة تسيطر عليها دون استثناءات «الأنشطة المختلفة» أو الأقليات المعارضة أو الحجم. وباب الإعفاء الوحيد (IFRS 10.4) ضيق: أم مملوكة كلية أو جزئيًا لا يعترض بقية ملاكها، وأدواتها غير متداولة علنًا، ولا تودع قوائم لأسواق عامة، وتنشر أمها النهائية أو الوسيطة قوائم مجمعة وفق IFRS — عندئذ تجوز لها مجاوزة التجميع وتقدم منفصلتها بدلًا منه.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Consolidated statements present the group as ONE economic entity: the parent and every subsidiary share a single set of books — cash inside the group is one pool, intragroup trading vanishes, and the outside world sees the boundary that the three-element test drew. The mechanics are one sentence: ADD every subsidiary's assets, liabilities, income and expenses line-by-line at 100%, then split the equity and the profit into the owners of the parent and the non-controlling interest.",
        ar: "تعرض القوائم المجمعة المجموعة ككيان اقتصادي واحد: الأم وكل تابعة تشترك في دفاتر واحدة — فالنقد داخل المجموعة بِرْكة واحدة، والتعامل الداخلي يتلاشى، ويرى العالم الخارجي الحدود التي رسمها اختبار العناصر الثلاثة. والميكانيكا جملة واحدة: اجمع أصول كل تابعة والتزاماتها وإيراداتها ومصروفاتها بندًا بندًا بالكامل، ثم قسّم حقوق الملكية والربح بين ملاك الأم والحصة غير المسيطرة.",
      },
    },
    { kind: "h", text: { en: "Control — the three elements", ar: "السيطرة — العناصر الثلاثة" } },
    {
      kind: "p",
      text: {
        en: "CONTROL is the single test that decides consolidation — and it is a three-element whole: POWER over the investee, EXPOSURE to variable returns, and the LINKAGE that lets the power-holder use its power to affect those returns. All three must exist NOW: power that will arrive when a convertible converts is not power today, and exposure without power is just an investment. Power without exposure, or exposure without power — either alone is NOT control.",
        ar: "السيطرة هي الاختبار الوحيد الذي يحسم التجميع — وهي كلٌّ من ثلاثة عناصر: السلطة على المستثمَر فيه، والانكشاف على عوائد متغيرة، والرابط الذي يمكّن صاحب السلطة من استخدامها للتأثير في تلك العوائد. والعناصر الثلاثة يجب قيامها الآن: فالسلطة التي ستصل عند تحويل السندات ليست سلطة اليوم، والانكشاف بلا سلطة مجرد استثمار. سلطة بلا انكشاف أو انكشاف بلا سلطة — كلٌّ وحده ليس سيطرة.",
      },
    },
    {
      kind: "tree",
      root: { en: "Does the investor CONTROL the investee?", ar: "هل يسيطر المستثمر على المستثمَر فيه؟" },
      branches: [
        {
          when: { en: "1. POWER — existing rights give the CURRENT ability to direct the RELEVANT ACTIVITIES (those that significantly affect returns)", ar: "١. السلطة — حقوق قائمة تمنح القدرة الحالية على توجيه الأنشطة المؤثرة (التي تمس العوائد جوهريًا)" },
          then: { en: "Gate 1 passed — but power alone is not control", ar: "اجتازت البوابة الأولى — لكن السلطة وحدها ليست سيطرة" },
          children: [
            {
              when: { en: "2. EXPOSURE — variable returns from involvement (dividends, fees, synergies, residual interests, reputation)", ar: "٢. الانكشاف — عوائد متغيرة من التورط (توزيعات، رسوم، تآزر، مصالح متبقية، سمعة)" },
              then: { en: "Gate 2 passed — check the link", ar: "اجتازت البوابة الثانية — اختبر الرابط" },
              children: [
                {
                  when: { en: "3. LINKAGE — the ability to USE the power to affect those returns", ar: "٣. الرابط — القدرة على استخدام السلطة للتأثير في تلك العوائد" },
                  then: { en: "CONTROL → CONSOLIDATE line-by-line (IFRS 10)", ar: "سيطرة ← جمّع بندًا بندًا (IFRS 10)", red: true },
                },
                {
                  when: { en: "No linkage — the power cannot move the investor's own returns", ar: "لا رابط — السلطة لا تحرك عوائد المستثمر نفسه" },
                  then: { en: "NOT control → IAS 28 / IFRS 11 / IFRS 9 route", ar: "ليست سيطرة ← مسار IAS 28 / IFRS 11 / IFRS 9", red: true },
                },
              ],
            },
            {
              when: { en: "Fixed-fee exposure only (no variability at all)", ar: "انكشاف بأجر ثابت فقط (لا تغير أصلًا)" },
              then: { en: "NOT control — an agent's fee profile", ar: "ليست سيطرة — ملامح أجر وكيل", red: true },
            },
          ],
        },
        {
          when: { en: "No current power (only protective rights, or another party directs the activities)", ar: "لا سلطة قائمة (حقوق وقائية فقط، أو طرف آخر يوجه الأنشطة)" },
          then: { en: "NOT control → IAS 28 / IFRS 11 / IFRS 9 route", ar: "ليست سيطرة ← مسار IAS 28 / IFRS 11 / IFRS 9", red: true },
        },
      ],
    },
    {
      kind: "steps",
      items: [
        { en: "Identify the RELEVANT ACTIVITIES — the decisions that significantly affect the investee's returns", ar: "حدد الأنشطة المؤثرة — القرارات التي تمس عوائد المستثمَر فيه جوهريًا" },
        { en: "Ask whose RIGHTS direct them today — voting, contracts, potential rights (on substance), dissolution/veto rights in structured entities", ar: "اسأل لمن توجهها حقوقُه اليوم — تصويت، عقود، حقوق محتملة (على الجوهر)، حقوق حل وفيتو في الكيانات المهيكلة" },
        { en: "Separate SUBSTANTIVE rights (count) from PROTECTIVE rights (never power)", ar: "افصل الحقوق الجوهرية (تُعد) عن الحقوق الوقائية (ليست سلطة أبدًا)" },
        { en: "Check EXPOSURE to variable returns — any variability, from any source", ar: "اختبر الانكشاف على عوائد متغيرة — أي تغير ومن أي مصدر" },
        { en: "Check the LINKAGE — can the power-holder use the power to move its OWN returns?", ar: "اختبر الرابط — هل يستطيع صاحب السلطة استخدامها لتحريك عوائده هو؟" },
        { en: "Conclude: control → consolidate; otherwise → IAS 28 (influence), IFRS 11 (joint control) or IFRS 9 (passive)", ar: "احسم: سيطرة ← تجميع؛ وإلا ← IAS 28 (تأثير) أو IFRS 11 (سيطرة مشتركة) أو IFRS 9 (سلبية)" },
      ],
    },
    { kind: "h", text: { en: "Power & the voting-rights ladder", ar: "السلطة — سلم حقوق التصويت" } },
    {
      kind: "p",
      text: {
        en: "Power flows from RIGHTS that give the current ability to direct the RELEVANT ACTIVITIES — what to sell, at what price, how to fund, whether to wind up. Most times power is the majority of voting rights, but the model looks through: contractual decision rights, dissolution rights and veto rights can all carry power, and the relevant activities can even run on auto-pilot — a structured entity whose choices were hard-wired at birth still has someone directing the design.",
        ar: "تتدفق السلطة من حقوق تمنح القدرة الحالية على توجيه الأنشطة المؤثرة — ماذا يباع، وبأي سعر، وكيف يمول، وهل يُحل الكيان. وغالبًا ما تكون السلطة أغلبية حقوق التصويت، لكن النموذج ينفذ إلى الجوهر: فحقوق القرار التعاقدية وحقوق الحل وحقوق الفيتو تحمل السلطة جميعًا، بل قد تسير الأنشطة المؤثرة على الطيار الآلي — فالكيان المهكل الذي حُكمت خياراته عند نشأته لا يزال لمن وجهَ تصميمه سلطان.",
      },
    },
    {
      kind: "steps",
      items: [
        { en: "MAJORITY of votes → power presumed (rebuttable: a 70% holder outvoted by a contracted 30% block)", ar: "أغلبية التصويت ← سلطة مفترضة (قابلة للدحض: حائز ٧٠٪ يغلبهم تعاقدًا شريك الـ٣٠٪)" },
        { en: "MINORITY + the rest dispersed + own turnout history → DE FACTO control — the most-tested judgement in the standard; evidence, not arithmetic", ar: "أقلية مع تشتت الباقين وسجل مشاركة المستثمر ← سيطرة فعلية — أشهر أحكام المعيار امتحانيًا؛ بالدليل لا بالحساب" },
        { en: "POTENTIAL VOTING RIGHTS (options, converts, warrants) — count if CURRENTLY exercisable, weighed on SUBSTANCE (ability + benefit)", ar: "حقوق التصويت المحتملة (خيارات، تحويل، وثائق) — تُعد إن كانت قابلة للممارسة الآن، وتوزن بالجوهر (القدرة + المنفعة)" },
        { en: "CONTRACTUAL arrangements: a decision-maker may be an AGENT — run the agency test before concluding", ar: "الترتيبات التعاقدية: صاحب حقوق القرار قد يكون وكيلًا — طبق اختبار الوكالة قبل الحسم" },
        { en: "Structured entities: power via dissolution, veto over budgets or appointments — the relevant activities may be passive", ar: "الكيانات المهيكلة: سلطة عبر الحل أو الفيتو على الموازنات والتعيينات — والأنشطة المؤثرة قد تكون سلبية" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "DE FACTO control is IFRS 10's most-examined judgement: the investor holds under 50% of the votes yet no one else can outvote it — the remaining holders are widely dispersed, historical turnouts are low, and no coalition is practicable. The conclusion demands EVIDENCE, not optimism: dispersion figures, meeting records, the investor's own voting history, and the other holders' incentives to combine.",
        ar: "السيطرة الفعلية أشهر أحكام IFRS 10 امتحانيًا: يملك المستثمر أقل من نصف الأصوات ومع ذلك لا يقدر أحد علىغللبته — فبقية الحائزين مشتتون، والمشاركات التاريخية منخفضة، ولا ائتلاف عمليًا ممكن. والخلاصة تتطلب دليلًا لا تفاؤلًا: أرقام التشتت، وسجلات الاجتماعات، وتاريخ تصويت المستثمر ذاته، وحوافز الباقين على التحالف.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "De facto control needs EVIDENCE: dispersion of the other holders (sizes, meeting patterns), the investor's own turnout history, and whether anyone ELSE can build a blocking coalition — write all three in the answer; a bare '<50% but I think so' earns nothing.",
        ar: "السيطرة الفعلية تحتاج دليلًا: تشتت الحائزين الآخرين (أحجامهم وأنماط اجتماعاتهم)، وسجل مشاركة المستثمر نفسه، وعجز غيره عن بناء ائتلاف حاجب — اكتب الثلاثة؛ فعبارة «أقل من ٥٠٪ لكن أرى ذلك» لا تساوي شيئًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Potential voting rights count when CURRENTLY exercisable or convertible — and only on SUBSTANCE: does the holder have the practical ability and the financial capacity, and would exercising benefit it? An out-of-the-money option can still be power; a conversion that needs another party's consent is not.",
        ar: "تُعد حقوق التصويت المحتملة عندما تكون قابلة للممارسة أو التحويل الآن — وبالجوهر فقط: هل لدى الحائز القدرة العملية والقدرة المالية، وهل تنفعه الممارسة؟ فالخيار خارج النقود قد يظل سلطة؛ والتحويل الذي يستلزم موافقة طرف آخر ليس سلطة.",
      },
    },
    { kind: "h", text: { en: "Substantive vs protective rights", ar: "الحقوق الجوهرية مقابل الوقائية" } },
    {
      kind: "list",
      items: [
        { en: "SUBSTANTIVE rights count toward power: exercisable when the decisions arise, and the holder benefits from exercising them", ar: "الحقوق الجوهرية تُعد في السلطة: قابلة للممارسة عند نشوب القرار، وللحائز منفعة من ممارستها" },
        { en: "PROTECTIVE rights NEVER give power: amending the constitution, appointing liquidators, vetoing capex beyond a cap — they protect, they do not direct", ar: "الحقوق الوقائية لا تمنح سلطة أبدًا: تعديل النظام، تعيين مصفين، الفيتو على استثمارات فوق سقف — تحمي ولا توجه" },
        { en: "Current rights only: potential rights count if exercisable NOW; rights that wake up only in bankruptcy are not power", ar: "الحقوق القائمة فقط: المحتملة تُعد إن كانت قابلة للممارسة الآن؛ وما يصحو عند الإفلاس فقط ليس سلطة" },
        { en: "Qualitative as well as quantitative: a golden share's veto over strategic shifts is power in substance", ar: "نوعيًا لا كميًا فحسب: فيتو السهم الذهبي على التحولات الاستراتيجية سلطة في الجوهر" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "A structured entity is designed so voting rights are not the dominant factor in who controls it — securitisation vehicles, SPEs, some funds. Control may flow from dissolution rights, vetoes over budgets, or the power to appoint the manager; and the entity's 'relevant activities' can be run on contractual auto-pilot. The sponsoring bank must ask whether IT controls it — and IFRS 12 makes the involvement visible either way.",
        ar: "الكيان المهكل مصمم بحيث لا تكون حقوق التصويت العامل الحاسم فيمن يسيطر عليه — وسائل التوريق، والكيانات ذات الغرض الخاص، وبعض الصناديق. وقد تتدفق السيطرة من حقوق الحل أو الفيتو على الموازنات أو سلطة تعيين المدير؛ بل قد تسير «الأنشطة المؤثرة» على الطيار الآلي التعاقدي. وعلى البنك الراعي أن يسأل: هل يسيطر هو عليه؟ — وIFRS 12 يجعل التورط مرئيًا في الحالين.",
      },
    },
    { kind: "h", text: { en: "Agent vs principal — the decision-maker test", ar: "الوكيل مقابل الأصيل — اختبار صانع القرار" } },
    {
      kind: "p",
      text: {
        en: "A fund manager or operator may hold day-to-day decision rights without controlling: it holds power ON BEHALF OF others. The analysis runs on four dials: the SCOPE of the mandate (the whole investee, or a defined subset of activities?), the manager's OTHER interests (exposure to variability), the REMUNERATION's link to returns, and REMOVAL rights. An agent's power counts for its principal — so the question is always 'who stands behind the agent?'",
        ar: "قد يحمل مدير الصناديق أو المشغل حقوق قرار يومية دون سيطرة: فهو يحمل السلطة لغيره. ويجري التحليل على أربع عدادات: نطاق التفويض (المستثمَر فيه كله أم مجموعة أنشطة محددة؟)، ومصالح المدير الأخرى (انكشافه على التغير)، وارتباط الأجر بالعوائد، وحقوق العزل. وسلطة الوكيل تُحسب لأصيله — فالسؤال دائمًا: من يقف خلف الوكيل؟",
      },
    },
    {
      kind: "tree",
      root: { en: "Is the decision-maker an AGENT or a PRINCIPAL?", ar: "هل صانع القرار وكيل أم أصيل؟" },
      branches: [
        {
          when: { en: "BROAD scope (all relevant activities) + market-rate remuneration for the mandate + no other significant interests", ar: "نطاق واسع (كل الأنشطة المؤثرة) + أجر بسعر السوق للمهمة + لا مصالح جوهرية أخرى" },
          then: { en: "AGENT — power held for others → whoever can REMOVE it (or the collective parties) controls", ar: "وكيل — يحمل السلطة لغيره ← يسيطر من يملك عزله (أو الأطراف مجتمعين)", red: true },
        },
        {
          when: { en: "Remuneration VARIES with the investee's returns (carry, performance fees) or holds disproportionate interests", ar: "الأجر يتغير بعوائد المستثمَر فيه (حصص ربح، أجور أداء) أو يملك مصالح جائرة النسبة" },
          then: { en: "PRINCIPAL — consolidate, despite the 'manager' title", ar: "أصيل — جمّع، رغم لقب «المدير»", red: true },
        },
        {
          when: { en: "A single party can remove the decision-maker without cause", ar: "طرف واحد يقدر على عزل صانع القرار بلا سبب" },
          then: { en: "Points to AGENCY — weigh it with related-party ties and the mandate's scope", ar: "يرجح الوكالة — زنه مع روابط الأطراف المرتبطة ونطاق التفويض", red: true },
        },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The decision-maker's fee is the tell: a market-rate fee for a defined mandate = agent; remuneration hooked to the investee's returns (carry, performance fees, disproportionate interests) points to principal — pair the fee with the removal rights and the other interests held before answering.",
        ar: "أجر صانع القرار هو الدليل: أجر بسعر السوق لمهمة محددة = وكيل؛ وأجر مربوط بعوائد المستثمَر فيه (حصص ربح، أجور أداء، مصالح جائرة) يشير إلى الأصيل — قارن الأجر بحقوق العزل والمصالح الأخرى قبل الإجابة.",
      },
    },
    { kind: "h", text: { en: "Consolidation procedures", ar: "إجراءات التجميع" } },
    {
      kind: "p",
      text: {
        en: "Consolidation is a single set of books built from the parent and every subsidiary: align, combine, eliminate. The procedures are mechanical once control is settled — but each one is a mark-earner in its own right, from the uniform-policy realignment to the rule that losses keep being pushed to the NCI even after its balance turns negative.",
        ar: "التجميع دفاتر واحدة تُبنى من الأم وكل تابعة: وحّد، اجمع، استبعد. فالإجراءات ميكانيكية بعد حسم السيطرة — لكن كلًّا منها مكسب درجات بذاته، من إعادة توحيد السياسات إلى قاعدة الاستمرار في تحميل الحصة غير المسيطرة الخسائر ولو سال مركزها.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "LINE-BY-LINE addition of every subsidiary's assets, liabilities, income and expenses at FULL 100% — the parent's % never scales the lines; the NCI appears separately within equity and within profit", ar: "الجمع بندًا بندًا لأصول كل تابعة والتزاماتها وإيراداتها ومصروفاتها بالكامل — فنسبة الأم لا تقيس السطور أبدًا؛ والحصة غير المسيطرة تظهر منفصلة في حقوق الملكية وفي الربح" },
        { en: "UNIFORM accounting policies: realign a subsidiary's policies to the group's before combining", ar: "سياسات محاسبية موحدة: عدل سياسات التابعة إلى سياسات المجموعة قبل الجمع" },
        { en: "Same reporting date, or a gap of at most THREE MONTHS adjusted for significant transactions in between", ar: "ذات تاريخ التقرير أو فجوة لا تتجاوز ثلاثة أشهر تعدل بالمعاملات الجوهرية خلالها" },
        { en: "LOSSES beyond the NCI's share: keep allocating even when the NCI balance goes NEGATIVE — unless the NCI has no obligation to fund", ar: "الخسائر فوق حصة الحصة غير المسيطرة: استمر في توزيعها ولو سال مركزها — إلا إن لم تكن ملزمة بالتمويل" },
        { en: "Goodwill and acquisition-date fair values are set ONCE (IFRS 3); afterwards the consolidation runs on book values", ar: "الشهرة وعادلات تاريخ الاستحواذ تحدد مرة واحدة (IFRS 3)؛ ثم يجري التجميع على القيم الدفترية" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The recurring consolidation set", ar: "المجموعة المتكررة للتجميع" },
      rows: [
        { dr: { en: "NCI (their share of the period's profit)", ar: "حصة غير مسيطرة (نصيبها من ربح الفترة)" }, cr: { en: "NCI's share of profit — consolidated P&L", ar: "نصيب الحصة من الربح — قائمة الأرباح المجمعة" }, red: true },
        { dr: { en: "Revenue & income — intragroup", ar: "إيراد ودخل — داخل المجموعة" }, cr: { en: "Expenses — intragroup (the group cannot trade with itself)", ar: "مصروفات — داخل المجموعة (المجموعة لا تتعامل مع نفسها)" }, red: true },
        { dr: { en: "Intragroup payables", ar: "دائنون داخل المجموعة" }, cr: { en: "Intragroup receivables (eliminate IN FULL, always)", ar: "مدينون داخل المجموعة (استبعد كاملة، دائمًا)" } },
        { cr: { en: "Current/non-current classification of an eliminated balance follows the SUBSIDIARY's own classification", ar: "تبويب الرصيد المستبعد متداولًا/غير متداول يتبع تصنيف التابعة ذاتها" } },
      ],
    },
    {
      kind: "journal",
      title: { en: "Dividends from a subsidiary — 100 received (NCI's slice 25 of the 125 declared)", ar: "توزيعات من تابعة — ١٠٠ مقبوضة (نصيب الحصة ٢٥ من ١٢٥ مقررة)" },
      rows: [
        { dr: { en: "Cash 100", ar: "نقد ١٠٠" }, cr: { en: "Dividend income 100 — in the PARENT's SEPARATE statements only", ar: "إيراد توزيعات ١٠٠ — في منفصلة الأم وحدها" }, red: true },
        { dr: { en: "Dividend income 100 (kill the parent's income)", ar: "إيراد توزيعات ١٠٠ (إعدام دخل الأم)" }, cr: { en: "Dividend declared by the subsidiary 100", ar: "توزيعات أقرتها التابعة ١٠٠" }, red: true },
        { dr: { en: "NCI 25 (the minority absorbs its slice of the distribution)", ar: "حصة غير مسيطرة ٢٥ (الأقلية تمتص نصيبها من التوزيع)" }, cr: { en: "Dividend declared by the subsidiary 25", ar: "توزيعات أقرتها التابعة ٢٥" } },
        { cr: { en: "In the CONSOLIDATED statements the group cannot profit from itself — the income is eliminated in full", ar: "في القوائم المجمعة لا تربح المجموعة من نفسها — فالدخل يستبعد كاملًا" }, red: true },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The non-controlling interest is presented INSIDE equity — separately from the owners of the parent — and its slice of profit and of total comprehensive income is shown on the face of the statements. It participates in every consolidation procedure: the NCI's share of a subsidiary's losses can drive its balance NEGATIVE (it then owes the group, unless it has no obligation to fund). When control is lost, the NCI is derecognised — the term most forgotten in the loss-of-control formula.",
        ar: "تعرض الحصة غير المسيطرة داخل حقوق الملكية — منفصلة عن ملاك الأم — ويظهر نصيبها من الربح ومن الدخل الشامل على وجه القوائم. وتشارك في كل إجراء تجميع: فنصيبها من خسائر التابعة قد يجعل مركزها سالبًا (فتصبح مدينة للمجموعة، إلا إن لم يكن عليها التزام بالتمويل). وعند فقد السيطرة تستبعد الحصة غير المسيطرة — وهو الحد الأكثر نسيانًا في معادلة فقد السيطرة.",
      },
    },
    { kind: "h", text: { en: "Losing control — the IFRS 10.25 cascade", ar: "فقد السيطرة — تسلسل IFRS 10.25" } },
    {
      kind: "steps",
      items: [
        { en: "DERECOGNISE the assets, liabilities, goodwill AND the NCI of the former subsidiary — everything that existed only because of control", ar: "استبعد الأصول والالتزامات والشهرة والحصة غير المسيطرة للتابعة السابقة — كل ما وُجد بسبب السيطرة وحدها" },
        { en: "RECOGNISE the consideration received and any RETAINED interest at FAIR VALUE at the date control is lost (fresh start: an IAS 28 associate or an IFRS 9 financial asset)", ar: "اعترف بالمقابل المقبوض وأي حصة محتفظ بها بالقيمة العادلة بتاريخ الفقد (بداية جديدة: زميلة وفق IAS 28 أو أصل مالي وفق IFRS 9)" },
        { en: "BOOK to P&L the difference: (consideration + FV of retained + NCI derecognised) − (carrying of net assets incl. goodwill)", ar: "اثبت بالأرباح الفرق: (المقابل + عادلة المحتفظ + الحصة غير المسيطرة المستبعدة) − (دفترية صافي الأصول ومنها الشهرة)" },
        { en: "RECYCLE to P&L the OCI accumulated on the former subsidiary — the ENTIRE translation difference, in full", ar: "أعد تدوير الدخل الشامل المتراكم عن التابعة السابقة — فرق الترجمة كاملًا بتمامه" },
        { en: "Retrospective restatement? NO — losing control is not an error", ar: "إعادة عرض رجعية؟ لا — فقد السيطرة ليس خطأ" },
      ],
    },
    {
      kind: "formula",
      title: { en: "Gain / loss on loss of control", ar: "الربح/الخسارة عند فقد السيطرة" },
      lines: [
        { en: "Gain = (consideration + FV of retained interest + NCI at the date control is lost) − (carrying of the sub's net assets incl. goodwill)", ar: "الربح = (المقابل + عادلة الحصة المحتفظ بها + الحصة غير المسيطرة بتاريخ الفقد) − (دفترية صافي أصول التابعة ومنها الشهرة)" },
        { en: "Read it the parent's way: (consideration + FV retained) − (net assets + goodwill − NCI) — the parent's former claim, nothing else", ar: "اقرأها بمنظور الأم: (المقابل + عادلة المحتفظ) − (صافي الأصول + الشهرة − الحصة غير المسيطرة) — مطالبة الأم السابقة فحسب" },
        { en: "Partial disposal (control LOST): the same cascade on the whole subsidiary", ar: "التخرد الجزئي (مع فقد السيطرة): التسلسل ذاته على التابعة كلها" },
        { en: "Partial disposal (control RETAINED): an equity transaction — differences adjust equity, OCI recycles PROPORTIONATELY", ar: "التخرد الجزئي (مع بقاء السيطرة): معاملة حقوق ملكية — الفروق تعدل حقوق الملكية، والدخل الشامل يدور تناسبيًا" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The step-disposal gain has TWO engines, and exam answers earn by showing both: (1) the gain on the interest DISPOSED — proceeds against the carrying amount of the shares sold (their slice of net assets and goodwill); (2) the gain on REMEASURING the retained interest — nothing was received, yet the retained stake is lifted to fair value and the uplift booked as income. One transaction, two gains, one formula — never book only the cash difference.",
        ar: "لربح التخرد المتدرج محركان، وتكسب الإجابات بعرضهما معًا: (١) الربح على الحصة المتخرد منها — المقابل مقابل الدفترية دفترية الأسهم المبيعة (نصيبها من صافي الأصول والشهرة)؛ (٢) الربح على إعادة قياس الحصة المحتفظ بها — لم يُقبض شيء، ومع ذلك ترفع الحصة إلى القيمة العادلة ويثبت الفرق دخلًا. معاملة واحدة وربحان ومعادلة واحدة — لا تثبت فرق النقد وحده أبدًا.",
      },
    },
    {
      kind: "example",
      title: { en: "Step disposal — control lost (80% → 40%)", ar: "تخرد متدرج — فقد السيطرة (٨٠٪ ← ٤٠٪)" },
      lines: [
        { en: "20X1: P acquires 80% of S for 900 · net assets at FV 1,000 · NCI (proportionate) 200 · goodwill 100 (the IFRS 3 numbers)", ar: "٢٠X١: تقتني P نسبة ٨٠٪ من S بـ٩٠٠ · صافي أصول بالعادلة ١٬٠٠٠ · الحصة (تناسبية) ٢٠٠ · الشهرة ١٠٠ (أرقام IFRS 3)" },
        { en: "By disposal: S's retained profits 400 → net assets 1,400 · NCI = 20% × 1,400 = 280 · parent's claim = 1,400 + 100 − 280 = 1,220", ar: "حتى التخرد: أرباح مرحلة ٤٠٠ ← صافي أصول ١٬٤٠٠ · الحصة = ٢٠٪ × ١٬٤٠٠ = ٢٨٠ · مطالبة الأم = ١٬٤٠٠ + ١٠٠ − ٢٨٠ = ١٬٢٢٠" },
        { en: "P sells HALF its holding (40%) for 1,000 · retained 40% at FV 1,000 (implied FV of S = 2,500)", ar: "تبيع P نصف حيازتها (٤٠٪) بـ١٬٠٠٠ · والمحتفظ به ٤٠٪ بعادلة ١٬٠٠٠ (العادلة الضمنية لـS = ٢٬٥٠٠)" },
        { en: "Gain = (1,000 + 1,000 + 280) − (1,400 + 100) = 2,280 − 1,500 = 780", ar: "الربح = (١٬٠٠٠ + ١٬٠٠٠ + ٢٨٠) − (١٬٤٠٠ + ١٠٠) = ٢٬٢٨٠ − ١٬٥٠٠ = ٧٨٠" },
        { en: "The two engines: sold stake 1,000 − 610 (40% × 1,400 + 50 goodwill) = 390 · remeasurement 1,000 − 610 = 390 → 390 + 390 = 780 ✓", ar: "المحركان: الحصة المبيعة ١٬٠٠٠ − ٦١٠ (٤٠٪ × ١٬٤٠٠ + ٥٠ شهرة) = ٣٩٠ · وإعادة القياس ١٬٠٠٠ − ٦١٠ = ٣٩٠ ← ٣٩٠ + ٣٩٠ = ٧٨٠ ✓" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The loss-of-control entry (numbers above)", ar: "قيد فقد السيطرة (الأرقام أعلاه)" },
      rows: [
        { dr: { en: "Cash 1,000 (consideration for the 40% sold)", ar: "نقد ١٬٠٠٠ (مقابل الـ٤٠٪ المبيعة)" } },
        { dr: { en: "Investment in S — retained 40% at FV 1,000", ar: "استثمار في S — المحتفظ ٤٠٪ بالعادلة ١٬٠٠٠" }, red: true },
        { dr: { en: "NCI 280 (derecognised in full)", ar: "حصة غير مسيطرة ٢٨٠ (تستبعد كاملة)" }, red: true },
        { cr: { en: "S's net assets 1,400 (assets minus liabilities, derecognised)", ar: "صافي أصول S بمقدار ١٬٤٠٠ (أصول مخصومة منها التزامات، تستبعد)" } },
        { cr: { en: "Goodwill 100", ar: "الشهرة ١٠٠" } },
        { cr: { en: "Gain on loss of control — P&L 780", ar: "ربح فقد السيطرة — أرباح ٧٨٠" }, red: true },
        { cr: { en: "Check: Dr 2,280 = Cr 1,400 + 100 + 780 ✓ — then recycle ALL the OCI accumulated on S", ar: "تحقق: مدين ٢٬٢٨٠ = دائن ١٬٤٠٠ + ١٠٠ + ٧٨٠ ✓ — ثم أعِد تدوير كل الدخل الشامل المتراكم عن S" } },
      ],
    },
    {
      kind: "p",
      text: {
        en: "OCI recycling on loss of control is total, not proportional: the entire currency translation difference accumulated on the former subsidiary's results moves to P&L the moment control dies, because the group's exposure to that currency through S has ended. Contrast the control-retained case, where only the ownership-slice that moved recycles. Distinguish also the gain itself — presented as a single line in P&L (a 'gain on disposal of subsidiary'), with the retained interest's fair value and the recycled amounts disclosed under IFRS 12.",
        ar: "إعادة تدوير الدخل الشامل عند فقد السيطرة كلية لا تناسبية: فرق ترجمة العملة المتراكم عن نتائج التابعة السابقة ينتقل بأكمله إلى الأرباح لحظة موت السيطرة، لانتهاء انكشاف المجموعة على تلك العملة من خلالها. قابل ذلك حالة بقاء السيطرة حيث يدور ما انتقل من شريحة الملكية وحده. وفرّق كذلك في الربح ذاته — يعرض سطرًا واحدًا بالأرباح («ربح التخرد من تابعة»)، وتفصح عادلة الحصة المحتفظ بها والمبالغ المدورة وفق IFRS 12.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The loss-of-control formula is exam gold: (consideration + FV of retained + NCI) − (net assets incl. goodwill) → P&L; then recycle the related OCI. Learn it as ONE line with four terms — and never forget the NCI sits on the PLUS side of the gain.",
        ar: "معادلة فقد السيطرة ذهب امتحاني: (المقابل + عادلة المحتفظ + الحصة غير المسيطرة) − (صافي الأصول ومنها الشهرة) ← الأرباح؛ ثم أعِد تدوير الدخل الشامل المرتبط. احفظها سطرًا واحدًا بأربعة حدود — ولا تنس أبدًا أن الحصة غير المسيطرة في جانب الزائد من الربح.",
      },
    },
    { kind: "h", text: { en: "Partial disposal — control retained", ar: "التخرد الجزئي — مع بقاء السيطرة" } },
    {
      kind: "p",
      text: {
        en: "Sell 20% of an 80%-owned subsidiary and control survives (80% → 60%): NO profit or loss. The transaction is with the NCI in their capacity as OWNERS — the difference between the proceeds and the increase in the NCI's share of net assets adjusts EQUITY (a capital reserve within owners' equity), and accumulated OCI recycles only PROPORTIONATELY (the CTA follows the ownership that moved). The economic deal is a share buyback running in reverse.",
        ar: "بِع ٢٠٪ من تابعة تملك ٨٠٪ منها وتبقى السيطرة (٨٠٪ ← ٦٠٪): لا ربح ولا خسارة. فالمعاملة مع الحصة غير المسيطرة بوصفها مالكة — والفرق بين المقابل وزيادة نصيبها من صافي الأصول يعدل حقوق الملكية (احتياطي رأسمالي داخل حقوق ملاك الأم)، والدخل الشامل المتراكم يدور تناسبيًا فقط (فرق الترجمة يتبع الملكية المنتقلة). والصفقة اقتصاديًا إعادة شراء أسهم تعمل بالعكس.",
      },
    },
    {
      kind: "journal",
      title: { en: "Control retained — sell 20% of an 80% sub (net assets 1,400) for 250", ar: "بقاء السيطرة — بيع ٢٠٪ من تابعة ٨٠٪ (صافي أصول ١٬٤٠٠) بمقابل ٢٥٠" },
      rows: [
        { dr: { en: "Cash 250 (proceeds)", ar: "نقد ٢٥٠ (المقابل)" } },
        { cr: { en: "NCI 280 (20% × 1,400 — the NCI's enlarged share of net assets)", ar: "حصة غير مسيطرة ٢٨٠ (٢٠٪ × ١٬٤٠٠ — الحصة المتسعة من صافي الأصول)" } },
        { dr: { en: "Capital reserve / retained earnings 30 (the shortfall adjusts equity — NEVER P&L)", ar: "احتياطي رأسمالي / أرباح مرحلة ٣٠ (العجز يعدل حقوق الملكية — لا الأرباح أبدًا)" }, red: true },
        { cr: { en: "OCI recycling: only 20/80 of the CTA on S follows the shares sold", ar: "إعادة تدوير الدخل الشامل: ٢٠/٨٠ فقط من فرق ترجمة S يتبع الأسهم المبيعة" } },
      ],
    },
    {
      kind: "example",
      title: { en: "Control assessment — three patterns", ar: "تقييم السيطرة — ثلاثة أنماط" },
      lines: [
        { en: "Pattern 1 — de facto: 42% + the rest dispersed (no other holder above 5%, turnouts ~40%) + a history of directing votes → CONTROL on evidence, not on the percentage", ar: "النمط ١ — سيطرة فعلية: ٤٢٪ + تشتت الباقين (لا يملك أحد سوى ٥٪، والمشاركات نحو ٤٠٪) + سجل توجيه الأصوات ← سيطرة بالدليل لا بالنسبة" },
        { en: "Pattern 2 — potential rights: 45% + an option on a further 10% currently exercisable → count the option if the holder can and would benefit from exercising (an out-of-the-money option is WEIGHED, not ignored)", ar: "النمط ٢ — حقوق محتملة: ٤٥٪ + خيار على ١٠٪ إضافية قابلة للممارسة الآن ← عدّ الخيار إن كان الحائز قادرًا على ممارستها ومنتفعًا بها (الخيار خارج النقود يوزن ولا يهمل)" },
        { en: "Pattern 3 — rebutted majority: 60% of votes but the other 40% act together by contract on every relevant activity → the 60% holder has NO power alone → not a subsidiary", ar: "النمط ٣ — أغلبية مدحوضة: ٦٠٪ من الأصوات لكن الـ٤٠٪ الباقية تتحالف تعاقديًا على كل نشاط مؤثر ← لا سلطة لحائز الـ٦٠٪ منفردًا ← ليست تابعة" },
      ],
    },
    { kind: "h", text: { en: "Investment entities — the FVTPL exception", ar: "كيانات الاستثمار — استثناء العادلة عبر الأرباح" } },
    {
      kind: "p",
      text: {
        en: "An investment entity — a fund, a PE house — holds investments to earn capital-appreciation returns for investors and measures them at fair value; consolidating them would contradict the business model. IFRS 10 therefore EXEMPTS a qualifying investment entity from consolidating most subsidiaries: it measures them at FAIR VALUE THROUGH PROFIT OR LOSS. Two carve-outs: (1) subsidiaries providing investment-related SERVICES (the fund manager itself) are still consolidated; (2) a parent that is NOT itself an investment entity consolidates its investment-entity subsidiary — but measures that subsidiary's controlled investees at FVTPL inside the consolidation.",
        ar: "كيان الاستثمار — صندوق أو بيت استثمار خاص — يحمل استثمارات لتحقيق عوائد نمو رأسمالي للمستثمرين ويقيسها بالقيمة العادلة؛ وتجميعها يناقض النموذج الاقتصادي. لذلك يعفي IFRS 10 كيان الاستثمار المستوفي الشروط من تجميع معظم التابعات: يقيسها بالقيمة العادلة عبر الربح أو الخسارة. مع استثناءين: (١) التابعات المقدمة خدمات متصلة بالاستثمار (إدارة الصندوق ذاتها) تجمع رغم ذلك؛ (٢) الأم غير الاستثمارية تجمع تابعتها الاستثمارية — لكنها تقيس استثمارات تلك التابعة الخاضعة لسيطرتها بالعادلة عبر الأرباح داخل التجميع.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Mandatory criteria: obtains funds from one or more investors for investment purposes; has investors that are NOT related parties; ownership interests in the form of equity or similar units; manages and reports performance on a FAIR VALUE basis", ar: "معايير إلزامية: يحصل على أموال من مستثمر واحد أو أكثر لأغراض الاستثمار؛ وله مستثمرون ليسوا أطرافًا مرتبطة؛ وحصص ملكية في صورة أسهم أو وحدات مماثلة؛ ويدير ويقدم تقارير الأداء على أساس القيمة العادلة" },
        { en: "Typical (not decisive): multiple investments, diversified; multiple investors; an exit strategy for each holding", ar: "سمات نمطية (غير حاسمة): استثمارات متعددة ومنوعة؛ ومستثمرون متعددون؛ واستراتيجية خروج لكل حيازة" },
        { en: "Disclose the judgements under IFRS 12 — including why the entity qualifies, investment by investment", ar: "أفصح عن الأحكام وفق IFRS 12 — ومنها لماذا تنطبق الصفة، استثمارًا باستثمار" },
      ],
    },
    {
      kind: "tree",
      root: { en: "Who measures what at fair value?", ar: "من يقيس ماذا بالقيمة العادلة؟" },
      branches: [
        {
          when: { en: "The PARENT is an investment entity", ar: "الأم كيان استثمار" },
          then: { en: "Investment subsidiaries at FAIR VALUE through P&L — NO consolidation (except investment-related-service subsidiaries)", ar: "التابعات الاستثمارية بالقيمة العادلة عبر الأرباح — بلا تجميع (عدا تابعات الخدمات المتصلة بالاستثمار)", red: true },
        },
        {
          when: { en: "An investment-entity SUBSIDIARY holds investees itself", ar: "تابعة استثمارية تحمل مستثمَرين فيه بدورها" },
          then: { en: "The exemption cascades down the chain — its controlled investees stay at FVTPL", ar: "الإعفاء يتسلسل في السلسلة — فمستثمروها الخاضعون للسيطرة يبقون بالعادلة عبر الأرباح", red: true },
        },
        {
          when: { en: "A NON-investment parent holds an investment-entity subsidiary", ar: "أم غير استثمارية تحمل تابعة استثمارية" },
          then: { en: "Consolidate the entity, FVTPL its controlled holdings — the middle path", ar: "جمّع الكيان وقس محتفظاته الخاضعة للسيطرة بالعادلة عبر الأرباح — الطريق الوسط", red: true },
        },
      ],
    },
    {
      kind: "note",
      text: {
        en: "The December 2014 amendment ('Investment Entities: Applying the Consolidation Exception') made applying the exception MANDATORY — the old choice to consolidate anyway is gone, effective 1 January 2016.",
        ar: "تعديل ديسمبر ٢٠١٤ («كيانات الاستثمار: تطبيق استثناء التجميع») جعل تطبيق الاستثناء إلزاميًا — فزال الخيار القديم بالتجميع رغم ذلك، اعتبارًا من ١ يناير ٢٠١٦.",
      },
    },
    { kind: "h", text: { en: "Disclosures (the IFRS 12 partner)", ar: "الإفصاحات (شريك IFRS 12)" } },
    {
      kind: "list",
      items: [
        { en: "IFRS 12 tells the interests story: significant judgements (de facto control!), the NCI, restricted subsidiaries, structured-entity involvements", ar: "يحكي IFRS 12 قصة الحصص: الأحكام الجوهرية (السيطرة الفعلية!)، والحصة غير المسيطرة، والتابعات المقيدة، والتورط في الكيانات المهيكلة" },
        { en: "When control is LOST: the gain/loss line, the retained interest's FV, and the recycled OCI items", ar: "عند فقد السيطرة: سطر الربح/الخسارة، وعادلة الحصة المحتفظ بها، وبنود الدخل الشامل المدورة" },
        { en: "The NCI's share of continuing vs discontinued operations; the nature of any non-voting equity in subsidiaries", ar: "نصيب الحصة غير المسيطرة من العمليات المستمرة والمتوقفة؛ وطبيعة أي ملكية بلا تصويت في التابعات" },
      ],
    },
    { kind: "h", text: { en: "Interactions & transition", ar: "التفاعلات والانتقال" } },
    {
      kind: "p",
      text: {
        en: "IFRS 10 is the hub of the group standards: it takes its acquisition accounting from IFRS 3 and its disclosures from IFRS 12; it hands over to IAS 28 the moment control is lost while influence remains, and to IFRS 11 where joint control exists; IAS 27 governs the parent's separate statements that may accompany the consolidated set. Effective 1 January 2013 (replacing the consolidation parts of IAS 27 and SIC-12); the investment-entity amendments took effect 1 January 2016.",
        ar: "IFRS 10 محور معايير المجموعات: يأخذ محاسبة استحواذه من IFRS 3 وإفصاحاته من IFRS 12؛ ويسلّم إلى IAS 28 لحظة فقد السيطرة مع بقاء التأثير، وإلى IFRS 11 حيث توجد سيطرة مشتركة؛ ويحكم IAS 27 منفصلة الأم التي قد ترافق المجمعة. وسريانه من ١ يناير ٢٠١٣ (محلًا أجزاء التجميع من IAS 27 وSIC-12)؛ وتعديلات كيانات الاستثمار من ١ يناير ٢٠١٦.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Control retained (80% → 60%) = NO profit: a transaction with the NCI as owners — differences adjust equity, OCI recycles proportionately. Control lost (60% → 40%) = the full cascade. First decide: was control lost? Everything else follows.",
        ar: "بقاء السيطرة (٨٠٪ ← ٦٠٪) = لا ربح: معاملة مع الحصة غير المسيطرة بوصفها مالكة — الفروق تعدل حقوق الملكية والدخل الشامل يدور تناسبيًا. وفقد السيطرة (٦٠٪ ← ٤٠٪) = التسلسل كاملًا. احسم أولًا: هل فُقدت السيطرة؟ ثم يتبع كل شيء.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Majority presumption is rebuttable both ways — and the analysis is always the same three: power, exposure, linkage.",
        ar: "الأغلبية المفترضة قابلة للدحض في الاتجاهين — والتحليل واحد دائمًا: سلطة وانكشافًا ورابطًا.",
      },
    },
  ],
}
