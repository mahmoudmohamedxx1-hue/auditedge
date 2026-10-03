/** IAS 27 — Separate Financial Statements */

import type { Standard } from "../types"

export const IAS_27: Standard = {
  code: "IAS 27",
  title: { en: "Separate Financial Statements", ar: "القوائم المالية المنفصلة" },
  topic: "groups",
  effective: { en: "Effective 1 Jan 2013 (revised for IFRS 10/11/12)", ar: "سارٍ من ١ يناير ٢٠١٣ (معدل مع IFRS 10/11/12)" },
  blocks: [
    { kind: "h", text: { en: "Objective & the rebranding", ar: "الهدف وإعادة التسمية" } },
    {
      kind: "p",
      text: {
        en: "The 2011 revision renamed IAS 27: the CONSOLIDATION rules moved out to IFRS 10, and what remains is the standard for SEPARATE financial statements — the parent's own-entity statements (or an investor's statements) in which investments in subsidiaries, joint ventures and associates are measured by ONE chosen method per category. Consolidated and separate statements are NOT the same document: the consolidated set shows the group as a single economic entity; the separate set shows the parent as a standalone legal entity holding investments. An entity presenting both must make the choice below for the separate set — and disclose which route it took.",
        ar: "أعاد تعديل ٢٠١١ تسمية IAS 27: خرجت قواعد التجميع إلى IFRS 10، وبقي معيار القوائم المالية المنفصلة — قوائم المنشأة الذاتية للأم (أو قوائم المستثمر) يقاس فيها الاستثمار في التابعات والمشتركة والزميلات بطريقة واحدة منتقاة لكل فئة. والقوائم المجمعة والمنفصلة ليستا وثيقة واحدة: فالمجمعة تعرض المجموعة كيانًا اقتصاديًا واحدًا؛ والمنفصلة تعرض الأم كيانًا قانونيًا مستقلًا يحمل استثمارات. ومن يعرضهما معًا ينتقي للمنفصلة مما يلي — ويفصح عن المسار الذي سلكه.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Why the separate view matters: LENDERS, tax authorities and regulators read the parent's own solvency, not the group's — the parent can only service its debt out of dividends actually remitted from its subsidiaries, and Egyptian company law distributes the legal entity's profits, not the group's. The separate set tells that story: each investment as one number, dividend income as the visible cash stream, no consolidation adjustments at all.",
        ar: "لماذا يهم المنظور المنفصل: يقرأ المقرضون ومصالح الضرائب والجهات الرقابية ملاءة الأم ذاتها لا المجموعة — فالأم لا تخدم ديونها إلا من التوزيعات المحولة فعليًا من تابعاتها، وقانون الشركات المصري يوزع أرباح الشخص الاعتباري لا أرباح المجموعة. والقوائم المنفصلة تروي تلك القصة: كل استثمار رقمًا واحدًا، وإيراد التوزيعات تيار النقد المرئي، وبلا أي تسويات تجميع إطلاقًا.",
      },
    },
    { kind: "h", text: { en: "Scope — which statements are 'separate'", ar: "النطاق — أي القوائم «منفصلة»" } },
    {
      kind: "p",
      text: {
        en: "Separate financial statements are those presented by an entity IN ADDITION to its consolidated statements — or INSTEAD of them, where the entity is exempt from consolidation. IAS 27 prescribes their accounting and disclosure content only: all other IFRSs apply unchanged (the entity's own revenue, its own plant, its own borrowings are accounted for as usual); the standard's whole job is the treatment of the investments in subsidiaries, joint ventures, associates and joint operations inside that own-entity view.",
        ar: "القوائم المنفصلة هي التي يعرضها الكيان إضافة إلى قوائمه المجمعة — أو بدلًا منها حيث يعفى من التجميع. ويقرر IAS 27 محاسبتها ومحتوى إفصاحها فقط: فكل معايير IFRS الأخرى تسري دون تغيير (إيراد الكيان ومصانعه واقتراضاته تُعالج كالمعتاد)؛ وعمل المعيار كله معالجة الاستثمارات في التابعات والمشتركة والزميلات والعمليات المشتركة داخل ذلك المنظور الذاتي.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "A parent must present CONSOLIDATED statements (IFRS 10) — but may ALSO present separate statements (common when regulators, tax or lenders want the parent-entity view)", ar: "على الأم تقديم قوائم مجمعة (IFRS 10) — ويجوز أيضًا تقديم منفصلة (شائع عندما تريد الجهات الرقابية أو الضرائب أو المقرضون منظور الأم وحدها)" },
        { en: "An entity EXEMPT from presenting consolidated statements (its own parent's consolidated statements are publicly available, and the IFRS 10.4(a) conditions hold) still presents separate statements", ar: "المعفاة من تقديم المجمعة (قوائم أمها المجمعة متاحة للعموم وتتحقق شروط IFRS 10.4(أ)) تقدم المنفصلة رغم ذلك" },
        { en: "The intermediate-parent exemption: a parent whose ULTIMATE (or any intermediate) parent produces publicly-available IFRS consolidated statements may skip consolidation — its own set is then separate", ar: "إعفاء الأم الوسيطة: الأم التي تنتج أمُّها النهائية (أو أي وسيطة) قوائم مجمعة متاحة للعموم جاز لها تجاوز التجميع — فتصبح قوائمها منفصلة" },
        { en: "An investor with NO subsidiaries at all (only JVs, associates or joint operations) prepares ordinary statements — IAS 27's menu still governs how those interests appear", ar: "المستثمر بلا تابعات أصلًا (مشتركة وزميلات وعمليات مشتركة فقط) يعد قوائم عادية — وما يزال قائمة IAS 27 تحكم كيف تظهر تلك الحصص" },
        { en: "Local law may DEMAND separate statements even when IFRS 10 would not — IAS 27 governs their content", ar: "قد يفرض القانون المحلي منفصلة حتى حيث لا يوجبها IFRS 10 — وIAS 27 يحكم محتواها" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Presenting separate statements never REPLACES the consolidated set — a parent with subsidiaries presents consolidated (unless exempt) and MAY add the separate view; saying 'we chose separate instead' is an automatic fail line.",
        ar: "تقديم المنفصلة لا يعوض عن المجمعة — فالأم ذات التابعات تقدم المجمعة (إلا إعفاءً) ويجوز أن تضيف المنظور المنفصل؛ وقول «اخترنا المنفصلة بدلًا منها» سطر رسوب تلقائي.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "What CHANGES vs the consolidated view: revenue is the parent's own only — no line-by-line aggregation of the sub's sales", ar: "ما يتغير عن المنظور المجموع: الإيراد إيراد الأم وحدها — بلا تجميع سطرًا بسطر لمبيعات التابعة" },
        { en: "Dividends received become INCOME under the cost route — instead of being eliminated against the investment", ar: "التوزيعات المقبوضة تصير دخلًا في مسار التكلفة — بدل حذفها من قيمة الاستثمار" },
        { en: "No NCI, no goodwill, no fair-value uplifts, no intragroup eliminations — the investment is one number", ar: "لا حصة غير مسيطرة ولا شهرة ولا زيادات عادلة ولا حذف داخل المجموعة — الاستثمار رقم واحد" },
        { en: "What STAYS: the parent's own assets, liabilities, revenue and expenses under their own standards", ar: "ما يبقى: أصول الأم والتزاماتها وإيراداتها ومصروفاتها بمعاييرها هي" },
      ],
    },
    { kind: "h", text: { en: "The measurement menu — three routes since 2016", ar: "قائمة القياس — ثلاثة مسارات منذ ٢٠١٦" } },
    {
      kind: "tree",
      root: { en: "Investments in subsidiaries, JVs & associates in the SEPARATE statements", ar: "الاستثمارات في التابعات والمشتركة والزميلات في المنفصلة" },
      branches: [
        {
          when: { en: "COST — the historical default (and the IFRS 1-friendly one)", ar: "التكلفة — الافتراضي التاريخي (والصديق لـIFRS 1)" },
          then: { en: "Carry at cost less IAS 36 impairment; dividends from the investee → P&L as income (the classic parent-only view)", ar: "تحمل بالتكلفة بعد خصم انخفاض IAS 36؛ وتوزيعات المستثمَر فيه دخل بالأرباح", red: true },
        },
        {
          when: { en: "EQUITY METHOD (restored by the August 2014 amendment, effective 1 January 2016, in step with IAS 28)", ar: "طريقة الحصة (أعادها تعديل أغسطس ٢٠١٤ الساري من ١ يناير ٢٠١٦ اتساقًا مع IAS 28)" },
          then: { en: "IAS 28's machinery runs inside the separate statements: cost + share of profits − dividends − impairments", ar: "آلية IAS 28 داخل المنفصلة: تكلفة + نصيب أرباح − توزيعات − انخفاضات", red: true },
        },
        {
          when: { en: "FAIR VALUE under IFRS 9 — FVTPL for these interests (the FVOCI election is NOT available for subsidiaries, JVs or associates)", ar: "القيمة العادلة وفق IFRS 9 — عبر الأرباح لهذه الحصص (خيار الدخل الشامل غير متاح للتابعات والمشتركة والزميلات)" },
          then: { en: "Fair-value movements → P&L; a single election for EACH category of investment, applied consistently", ar: "فروق العادلة ← الأرباح؛ انتخاب واحد لكل فئة استثمار يطبق بثبات", red: true },
        },
        {
          when: { en: "Joint OPERATIONS in separate statements", ar: "العمليات المشتركة في المنفصلة" },
          then: { en: "NOT this menu — account for the share of assets/liabilities directly (IFRS 11's joint-operation logic follows you into any set of statements)", ar: "ليست من هذه القائمة — تعالج الحصة من الأصول والالتزامات مباشرة (منطق IFRS 11 يتبعك إلى أي قوائم)", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The 2014 amendment 'Equity Method in Separate Financial Statements' (issued 12 August 2014, effective 1 January 2016) rewrote paragraph 10 to restore the equity method as an explicit option — before it, the IFRS-era menu was cost or IFRS 9 only, and entities that had to present separate statements under local law had lost the method their previous GAAP used. The rule is an ELECTION PER CATEGORY: subsidiaries may be at cost while associates sit at fair value; but within one category the method applies consistently, and a subsidiary measured at cost cannot be switched to equity next year on a whim (a change of policy under IAS 8).",
        ar: "أعاد تعديل ٢٠١٤ «طريقة الحصة في القوائم المنفصلة» (الصادر ١٢ أغسطس ٢٠١٤ والساري ١ يناير ٢٠١٦) كتابة الفقرة ١٠ ليرد طريقة الحصة خيارًا صريحًا — فقبله كانت قائمة عصر IFRS تكلفة أو IFRS 9 فقط، وكانت الكيانات المُلزمة قانونًا بإعداد المنفصلة قد فقدت الطريقة التي كان معيارها السابق يستخدمها. والقاعدة انتخاب لكل فئة: يجوز أن تكون التابعات بالتكلفة والزميلات بالعادلة؛ لكن داخل الفئة الواحدة تُطبق الطريقة بثبات، ولا يصح تحويل تابعة من التكلفة إلى الحصة العام القادم بمزاج (تغيير سياسة يخضع لـIAS 8).",
      },
    },
    {
      kind: "note",
      text: {
        en: "One choice per CATEGORY: cost for subsidiaries and equity method for associates can coexist — but you cannot mix methods within one category.",
        ar: "خيار واحد لكل فئة: يمكن اختيار التكلفة للتابعات وطريقة الحصة للزميلات معًا — لكن لا يجوز خلط الطرق داخل الفئة الواحدة.",
      },
    },
    { kind: "h", text: { en: "The cost model", ar: "نموذج التكلفة" } },
    {
      kind: "p",
      text: {
        en: "Under the cost route the investment is carried at COST — the acquisition-date fair value of the consideration given (IFRS 3's measurement for the investor's share) — less any accumulated IMPAIRMENT. Because IFRS 9's scope excludes interests accounted for under IAS 27 at cost, the impairment test belongs to IAS 36, which expressly covers interests in subsidiaries, joint ventures and associates carried at cost. Dividends declared by the investee are income in P&L when the right to receive is established — with one historic exception that still earns marks: a dividend out of PRE-ACQUISITION profits is a recovery of the investment, not income.",
        ar: "في مسار التكلفة يُحمل الاستثمار بالتكلفة — القيمة العادلة للمقابل المدفوع بتاريخ الاستحواذ (قياس IFRS 3 لحصة المستثمر) — مخصومًا منها أي انخفاض متراكم. ولأن نطاق IFRS 9 يستبعد الحصص المحملة بالتكلفة وفق IAS 27، يقع اختبار الانخفاض على IAS 36 الذي يشمل صراحة الحصص في التابعات والمشتركة والزميلات المحملة بالتكلفة. وتوزيعات المستثمَر فيه دخل بالأرباح عند قيام حق الاستلام — باستثناء تاريخي واحد ما يزال يكسب الدرجات: التوزيع من أرباح ما قبل الاستحواذ استرداد للاستثمار لا دخل.",
      },
    },
    {
      kind: "journal",
      title: { en: "Cost route — the separate-statements lifecycle", ar: "مسار التكلفة — دورة القوائم المنفصلة" },
      rows: [
        { dr: { en: "Investment in subsidiary 500 (acquisition-date cost)", ar: "استثمار في تابعة ٥٠٠ (تكلفة تاريخ الاستحواذ)" }, cr: { en: "Cash / shares issued 500", ar: "نقد / أسهم مصدرة ٥٠٠" }, red: true },
        { dr: { en: "Cash 48 (dividend received: 80% × 60 declared)", ar: "نقد ٤٨ (توزيعات مقبوضة: ٨٠٪ × ٦٠ مقررة)" }, cr: { en: "Dividend income 40 — the POST-acquisition slice (80% × 50)", ar: "إيراد توزيعات ٤٠ — شريحة ما بعد الاستحواذ (٨٠٪ × ٥٠)" }, red: true },
        { cr: { en: "Investment in subsidiary 8 — REDUCED by the pre-acquisition slice (80% × 10)", ar: "الاستثمار ٨ — خُفض بشريحة ما قبل الاستحواذ (٨٠٪ × ١٠)" }, red: true },
        { dr: { en: "Impairment loss (P&L)", ar: "خسارة انخفاض (بالأرباح)" }, cr: { en: "Investment in subsidiary — IAS 36 test on the cost-carried interest", ar: "الاستثمار — اختبار IAS 36 على الحصة المحملة بالتكلفة" } },
      ],
    },
    { kind: "h", text: { en: "Dividends out of pre-acquisition profits", ar: "التوزيعات من أرباح ما قبل الاستحواذ" } },
    {
      kind: "p",
      text: {
        en: "When an investee that has accumulated profits pays a dividend larger than the profits earned SINCE acquisition, the excess is a RETURN OF the investment — the acquirer effectively got part of the price back. Split the dividend at the acquisition-date retained-profits line: the post-acquisition slice is income; the pre-acquisition slice reduces the investment's carrying amount. If the split cannot be determined, the dividend is income unless it is CLEARLY out of pre-acquisition profits. The rule matters most in the year of acquisition, when a sub declares a dividend out of the profits the acquirer just paid for inside the purchase price.",
        ar: "حين تدفع مستثمَر فيه ذو أرباح مراكمة توزيعًا يتجاوز أرباح ما بعد الاستحواذ، كان الزائد استردادًا للاستثمار — فقد استرد المقتني فعليًا جزءًا من الثمن. قسّم التوزيع عند خط الأرباح المبقاة بتاريخ الاستحواذ: فشريحة ما بعد الاستحواذ دخل؛ وشريحة ما قبل الاستحواذ تخفض القيمة الدفترية للاستثمار. وإن تعذر التمييز فالتوزيع دخل إلا إذا كان بَيِّنًا أنه من أرباح ما قبل الاستحواذ. وتَعظُم القاعدة في سنة الاستحواذ حين تقرر تابعة توزيعًا من الأرباح التي دفع المقتني ثمنها للتو داخل سعر الشراء.",
      },
    },
    { kind: "h", text: { en: "The pre-acquisition dividend test", ar: "اختبار توزيع ما قبل الاستحواذ" } },
    {
      kind: "tree",
      root: { en: "Dividend received under the COST route — income or recovery?", ar: "توزيع مقبوض في مسار التكلفة — دخل أم استرداد؟" },
      branches: [
        {
          when: { en: "Post-acquisition retained profits cover the FULL dividend", ar: "أرباح ما بعد الاستحواذ المبقاة تغطي التوزيع كاملًا" },
          then: { en: "ALL of it is P&L income — the normal case", ar: "كله دخل بالأرباح — الحالة الاعتيادية", red: true },
        },
        {
          when: { en: "The dividend EXCEEDS the post-acquisition profits (the excess traces back to profits the acquirer PAID for)", ar: "التوزيع يتجاوز أرباح ما بعد الاستحواذ (والزائد يرجع لأرباح دفع المقتني ثمنها بالفعل)" },
          then: { en: "SPLIT: the covered slice → income; the excess → REDUCE the investment's carrying", ar: "قسّم: الشريحة المغطاة ← دخل؛ والزائد ← خفّض دفترية الاستثمار", red: true },
        },
        {
          when: { en: "The split cannot be determined from the facts", ar: "تعذر تحديد القسمة من الوقائع" },
          then: { en: "Income — UNLESS the dividend is clearly out of pre-acquisition profits", ar: "دخل — إلا إذا كان التوزيع بَيّنًا أنه من أرباح ما قبل الاستحواذ", red: true },
        },
      ],
    },
    {
      kind: "formula",
      title: { en: "The pre/post-acquisition split", ar: "قسمة ما قبل/ما بعد الاستحواذ" },
      lines: [
        { en: "Dividend income = MIN(dividend received, post-acquisition retained profits × holding %) — the income slice", ar: "إيراد التوزيعات = الأدنى من (التوزيع المقبوض، أرباح ما بعد الاستحواذ المبقاة × نسبة الحيازة) — شريحة الدخل" },
        { en: "Carrying reduction = (dividend received − income slice) — the pre-acquisition recovery", ar: "خفض الدفترية = (التوزيع المقبوض − شريحة الدخل) — استرداد ما قبل الاستحواذ" },
        { en: "Example numbers: dividend 48 received · post-acquisition profits attributable 40 (50 × 80%) → income 40, reduction 8", ar: "أرقام المثال: توزيع مقبوض ٤٨ · أرباح ما بعد الاستحواذ المنسوبة ٤٠ (٥٠ × ٨٠٪) ← دخل ٤٠ وخفض ٨" },
      ],
    },
    {
      kind: "example",
      title: { en: "The classic pre-acquisition dividend", ar: "توزيع ما قبل الاستحواذ الكلاسيكي" },
      lines: [
        { en: "Alpha acquires 80% of S for 500 when S's retained profits stand at 200; between acquisition and the year end S earns a further 50 and then declares a dividend of 60", ar: "تستحوذ ألفا على ٨٠٪ من S مقابل ٥٠٠ وأرباح S المبقاة يومها ٢٠٠؛ وبين الاستحواذ وآخر السنة تكسب S ٥٠ أخرى ثم تقرر توزيعًا بقيمة ٦٠" },
        { en: "Alpha's dividend received = 80% × 60 = 48", ar: "توزيعات ألفا المقبوضة = ٨٠٪ × ٦٠ = ٤٨" },
        { en: "Post-acquisition profit slice = 50 → income = 80% × 50 = 40 (only what S earned under Alpha's ownership)", ar: "شريحة أرباح ما بعد الاستحواذ = ٥٠ ← الدخل = ٨٠٪ × ٥٠ = ٤٠ (ما كسبته S في ملكية ألفا وحدها)" },
        { en: "Pre-acquisition slice = 60 − 50 = 10 → reduce the investment by 80% × 10 = 8 — Alpha is getting back part of the price it paid for those profits", ar: "شريحة ما قبل الاستحواذ = ٦٠ − ٥٠ = ١٠ ← يخفض الاستثمار بمقدار ٨٠٪ × ١٠ = ٨ — فألفا تسترد جزءًا مما دفعته ثمنًا لتلك الأرباح" },
        { en: "Check: 48 = 40 + 8 ✓ — under the EQUITY route the same 48 would simply reduce the carrying (dividends never touch P&L there)", ar: "تحقق: ٤٨ = ٤٠ + ٨ ✓ — وفي مسار طريقة الحصة تخفض الـ٤٨ ذاتها الدفترية فحسب (فالتوزيعات لا تمس الأرباح هناك)" },
      ],
    },
    { kind: "h", text: { en: "The equity method in separate statements", ar: "طريقة الحصة في القوائم المنفصلة" } },
    {
      kind: "p",
      text: {
        en: "The 2014 amendment lets the entity run IAS 28's full machinery inside the separate statements: initial recognition at cost; the share of post-acquisition profits and OCI adjusts the carrying; dividends received REDUCE the carrying (never P&L); unrealised profits on transactions with the investee are eliminated; IAS 36 governs impairment. The resulting line item is identical to what an associate looks like in consolidated statements — which is why examiners love asking a candidate to switch routes and restate the same facts.",
        ar: "يجيز تعديل ٢٠١٤ تشغيل آلة IAS 28 كاملة داخل القوائم المنفصلة: اعتراف أولي بالتكلفة؛ وضبط الدفترية بنصيب أرباح ودخل شامل ما بعد الاستحواذ؛ والتوزيعات المقبوضة تخفض الدفترية (لا تمس الأرباح أبدًا)؛ وتحذف الأرباح غير المحققة على معاملات المستثمَر فيه؛ ويحكم IAS 36 الانخفاض. وسطر البند الناتج مماثل لشكل الزميلة في القوائم المجمعة — ولهذا يحب الممتحنون أن يطلبوا من المرشح تبديل المسار وإعادة عرض الوقائع ذاتها.",
      },
    },
    {
      kind: "journal",
      title: { en: "Equity route — the separate-statements entries", ar: "مسار طريقة الحصة — قيود المنفصلة" },
      rows: [
        { dr: { en: "Investment in subsidiary (cost 500)", ar: "استثمار في تابعة (تكلفة ٥٠٠)" }, cr: { en: "Cash / shares issued 500", ar: "نقد / أسهم مصدرة ٥٠٠" }, red: true },
        { dr: { en: "Investment in subsidiary (share of profit)", ar: "الاستثمار (نصيب الربح)" }, cr: { en: "Share of profit of the sub — P&L 40 (80% × 50)", ar: "نصيب ربح التابعة — بالأرباح ٤٠ (٨٠٪ × ٥٠)" }, red: true },
        { dr: { en: "Cash 48", ar: "نقد ٤٨" }, cr: { en: "Investment in subsidiary 48 — the WHOLE dividend reduces the carrying (no pre-acquisition split needed)", ar: "الاستثمار ٤٨ — التوزيع كله يخفض الدفترية (لا حاجة لقسمة ما قبل الاستحواذ)" }, red: true },
        { dr: { en: "Share of loss (downside years)", ar: "نصيب خسارة (سنوات الهبوط)" }, cr: { en: "Investment in subsidiary", ar: "الاستثمار" } },
      ],
    },
    { kind: "h", text: { en: "The fair-value route (IFRS 9)", ar: "مسار القيمة العادلة (IFRS 9)" } },
    {
      kind: "p",
      text: {
        en: "Electing the IFRS 9 route puts the investment at FAIR VALUE THROUGH PROFIT OR LOSS: remeasure through P&L at every reporting date, dividends as income when the right is established. The FVOCI election that IFRS 9 offers for equity instruments is NOT AVAILABLE for interests in subsidiaries, joint ventures and associates — the fair-value route for them is FVTPL only, so 'FVOCI for the subsidiary' is a wrong answer by construction. An investment-entity parent measures its investment subsidiaries at FVTPL in the separate statements automatically — the mirror of IFRS 10's consolidation exception, not a fresh election.",
        ar: "انتقاء مسار IFRS 9 يضع الاستثمار بالقيمة العادلة عبر الأرباح: إعادة قياس بالأرباح في كل تقرير، والتوزيعات دخلًا عند قيام الحق. وخيار الدخل الشامل الذي يمنحه IFRS 9 للأدوات الملكية غير متاح للحصص في التابعات والمشتركة والزميلات — فمسار العادلة لها عبر الأرباح وحده، فقولة «عادلة عبر الدخل الشامل للتابعة» جواب خاطئ بنيويًا. والأم الكيان الاستثماري تقيس تابعاتها الاستثمارية بالعادلة عبر الأرباح في المنفصلة تلقائيًا — مرآة استثناء التجميع في IFRS 10 لا انتخاب جديد.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The FVOCI trap: a candidate who designates the subsidiary 'at FVOCI' in separate statements has picked an option that does not exist — say 'FVTPL only' and cite the IFRS 9 exclusion, and the mark is yours.",
        ar: "فخ الدخل الشامل: من يصنف التابعة «بالعادلة عبر الدخل الشامل» في المنفصلة قد انتقى خيارًا غير موجود — قل «عبر الأرباح فقط» واذكر استبعاد IFRS 9 فتكون الدرجة لك.",
      },
    },
    { kind: "h", text: { en: "A dividend arrives — which route decides the entry", ar: "توزيعات تصل — المسار يحدد القيد" } },
    {
      kind: "tree",
      root: { en: "Dividend received from a sub / JV / associate in SEPARATE statements", ar: "توزيعات مقبوضة من تابعة / مشروع / زميلة في المنفصلة" },
      branches: [
        {
          when: { en: "COST route — dividend out of POST-acquisition profits", ar: "مسار التكلفة — توزيع من أرباح ما بعد الاستحواذ" },
          then: { en: "P&L INCOME (when the right to receive is established)", ar: "دخل بالأرباح (عند قيام حق الاستلام)", red: true },
        },
        {
          when: { en: "COST route — dividend out of PRE-acquisition profits", ar: "مسار التكلفة — توزيع من أرباح ما قبل الاستحواذ" },
          then: { en: "REDUCE the investment's carrying — a recovery of the price paid", ar: "خفّض الدفترية — استرداد للثمن المدفوع", red: true },
        },
        {
          when: { en: "EQUITY-METHOD route", ar: "مسار طريقة الحصة" },
          then: { en: "REDUCE the carrying — the profit was already recognised as it was earned (no income, ever)", ar: "خفّض الدفترية — فالربح اعترف به لدى تحققه (لا دخل أبدًا)", red: true },
        },
        {
          when: { en: "FAIR-VALUE route (FVTPL)", ar: "مسار العادلة (عبر الأرباح)" },
          then: { en: "P&L income — the fair-value movement carries the rest", ar: "دخل بالأرباح — وحركة العادلة تحمل الباقي", red: true },
        },
        {
          when: { en: "Joint OPERATION distributions", ar: "توزيعات العملية المشتركة" },
          then: { en: "No dividend concept at all — your share of revenue and expenses is already on the face line by line", ar: "لا مفهوم للتوزيعات أصلًا — فحصتك من الإيرادات والمصروفات على الوجه سطرًا بسطر" },
        },
      ],
    },
    { kind: "h", text: { en: "Joint operations in separate statements", ar: "العمليات المشتركة في القوائم المنفصلة" } },
    {
      kind: "p",
      text: {
        en: "Joint operations never enter the IAS 27 menu: because the joint operator has DIRECT rights to assets and obligations for liabilities, its share of each asset, liability, revenue and expense is recognised in EVERY set of financial statements it prepares — consolidated, separate or both. There is no 'investment in the joint operation' line to measure at cost, equity or fair value; the machinery of the menu simply has nothing to bite on.",
        ar: "العمليات المشتركة لا تدخل قائمة IAS 27 أصلًا: فلأن للشريك حقوقًا مباشرة في الأصول والتزامات عن الالتزامات، تثبت حصته من كل أصل والتزام وإيراد ومصروف في كل مجموعة قوائم يعدّها — مجمعة أو منفصلة أو كلتيهما. فلا سطر «استثمار في العملية المشتركة» يقاس بالتكلفة أو الحصة أو العادلة؛ وآلة القائمة لا تجد ما تعض عليه ببساطة.",
      },
    },
    { kind: "h", text: { en: "Investment entities in the separate world", ar: "كيانات الاستثمار في العالم المنفصل" } },
    {
      kind: "p",
      text: {
        en: "A parent that is an investment entity does not consolidate its investment subsidiaries (IFRS 10's FVTPL exception), and in its separate statements it measures each subsidiary at FAIR VALUE THROUGH PROFIT OR LOSS — the separate-set answer mirrors the exemption rather than electing it. The same mirror applies to a subsidiary held for sale by an investment-entity parent: measurement stays at fair value through profit or loss until control passes.",
        ar: "الأم الكيان الاستثماري لا تجمع تابعاتها الاستثمارية (استثناء IFRS 10)، وفي منفصلتها تقيس كل تابعة بالقيمة العادلة عبر الأرباح — فجواب المنفصلة يعكس الإعفاء لا أنه ينتقيه. والمرآة ذاتها تسري على التابعة المحتفظ بها للبيع لدى أم استثمارية: يبقى القياس بالعادلة عبر الأرباح حتى تنتقل السيطرة.",
      },
    },
    { kind: "h", text: { en: "Step acquisitions & disposals in the separate view", ar: "الاستحواذ المتدرج والتخرد في المنظور المنفصل" } },
    {
      kind: "p",
      text: {
        en: "At cost, each tranche keeps its own cost: when control arrives in stages, the previously held interest is NOT remeasured to fair value — that step-up belongs to the CONSOLIDATED statements (IFRS 10/IFRS 3); in the separate statements the investment's cost is simply the old cost plus the new consideration (the IFRS Interpretations Committee's January 2019 agenda decision). On disposal, the gain is proceeds minus the carrying amount of the interest sold — computed entirely from the separate books, with no NCI arithmetic and no recycled OCI, because none ever passed through them.",
        ar: "بالتكلفة، تحتفظ كل شريحة بتكلفتها: حين تصل السيطرة على مراحل لا يعاد قياس الحصة المسبقة إلى العادلة — فذلك الرفع من نصيب القوائم المجمعة (IFRS 10/IFRS 3)؛ وفي المنفصلة تكون تكلفة الاستثمار هي التكلفة القديمة زائج المقابل الجديد فحسب (قرار جدول لجنة التفسيرات، يناير ٢٠١٩). وعند التخرد يكون الربح الحصيلة ناقص الدفترية للحصة المتخردة — محسوبًا من دفاتر المنفصلة وحدها، بلا حسابات حصة غير مسيطرة ولا تدوير دخل شامل، لأن شيئًا منها لم يمر بها قط.",
      },
    },
    {
      kind: "journal",
      title: { en: "Step acquisition then full disposal — all in the separate books", ar: "استحواذ متدرج ثم تخرد كامل — في دفاتر المنفصلة كلها" },
      rows: [
        { dr: { en: "Investment 150 (first 20% tranche at cost)", ar: "استثمار ١٥٠ (شريحة الـ٢٠٪ الأولى بالتكلفة)" }, cr: { en: "Cash 150", ar: "نقد ١٥٠" } },
        { dr: { en: "Investment 350 (second tranche taking control: 80% total)", ar: "استثمار ٣٥٠ (الشريحة الثانية المتممة للسيطرة: ٨٠٪ إجمالًا)" }, cr: { en: "Cash 350 — total cost 500, NO fair-value remeasurement of the first tranche", ar: "نقد ٣٥٠ — إجمالي التكلفة ٥٠٠، ولا إعادة قياس بالعادلة للشريحة الأولى" }, red: true },
        { dr: { en: "Cash 620 (selling the whole 80%)", ar: "نقد ٦٢٠ (بيع الـ٨٠٪ كاملة)" }, cr: { en: "Investment 500", ar: "الاستثمار ٥٠٠" } },
        { cr: { en: "Gain on disposal — separate statements 120 (620 − 500)", ar: "مكسب تخرد — بالمنفصلة ١٢٠ (٦٢٠ − ٥٠٠)" }, red: true },
      ],
    },
    {
      kind: "example",
      title: { en: "The same disposal, two different answers", ar: "التخرد ذاته بجوابين مختلفين" },
      lines: [
        { en: "Separate statements: cost 500, proceeds 620 → gain 120 — full stop", ar: "القوائم المنفصلة: تكلفة ٥٠٠ وحصيلة ٦٢٠ ← مكسب ١٢٠ — انتهى" },
        { en: "Consolidated statements: the same sale runs IFRS 10's loss-of-control cascade — the subsidiary's assets and goodwill leave the SoFP, the NCI settles, and the gain is measured on consolidated numbers, not 120", ar: "القوائم المجمعة: البيع ذاته يشغل تسلسل فقد السيطرة في IFRS 10 — تخرج أصول التابعة وشهارتها من المركز، وتسوى الحصة غير المسيطرة، ويقاس المكسب على أرقام المجموعة لا ١٢٠" },
        { en: "Exam phrasing decides the question: 'in the SEPARATE financial statements' → the 120 answer; 'in the consolidated financial statements' → the cascade answer — read the ask before writing a number", ar: "صياغة السؤال تحدد المطلوب: «في القوائم المنفصلة» ← جواب الـ١٢٠؛ «في القوائم المجمعة» ← جواب التسلسل — اقرأ المطلوب قبل كتابة أي رقم" },
      ],
    },
    { kind: "h", text: { en: "Preparing the separate set — the sequence", ar: "إعداد المنفصلة — التسلسل" } },
    {
      kind: "steps",
      items: [
        { en: "Account for the parent's OWN transactions under ordinary IFRSs (revenue, IFRS 16 leases, IAS 19 pension…)", ar: "عالج معاملات الأم الذاتية بالمعايير المعتادة (إيراد، إيجارات IFRS 16، مزايا IAS 19…)" },
        { en: "ELECT the route per category of investment — cost / equity / FVTPL — and apply it consistently", ar: "انتق المسار لكل فئة استثمار — تكلفة / حصة / عادلة عبر الأرباح — وطبّقه بثبات" },
        { en: "Route joint operations OUTSIDE the menu: your share of each joint asset and liability, directly", ar: "أخرج العمليات المشتركة من القائمة: حصتك من كل أصل والتزام مشترك، مباشرة" },
        { en: "Split any dividend at the pre-acquisition line under the cost route (income vs recovery of the investment)", ar: "قسّم أي توزيع عند خط ما قبل الاستحواذ في مسار التكلفة (دخل مقابل استرداد الاستثمار)" },
        { en: "Test cost-carried and equity-carried interests for IAS 36 impairment; remeasure FVTPL interests at every reporting date", ar: "اختبر انخفاض الحصص المحملة بالتكلفة أو بطريقة الحصة وفق IAS 36؛ وأعد قياس حصص العادلة في كل تقرير" },
        { en: "Disclose the routes chosen and cross-reference to the consolidated set (which remains the primary document)", ar: "أفصح عن المسارات المنتقاة وأحِل إلى القوائم المجمعة (فهي الوثيقة الرئيسية الباقية)" },
      ],
    },
    { kind: "h", text: { en: "Disclosures", ar: "الإفصاحات" } },
    {
      kind: "list",
      items: [
        { en: "The accounting policy chosen for each category of investments (cost / equity / FV) in the separate statements", ar: "السياسة المنتقاة لكل فئة استثمار (تكلفة/حصة/عادلة) في المنفصلة" },
        { en: "The list of subsidiaries, JVs & associates with names and the % ownership / voting — plus the carrying amount of each and the dividend income recognised", ar: "قائمة التابعات والمشتركة والزميلات بأسمائها ونسب الملكية والتصويت — وقيمة كل استثمار والإيراد المعترف به" },
        { en: "IFRS 12 applies alongside for the interests' risk story", ar: "يطبق IFRS 12 جنبًا لجنب لقصة مخاطر الحصص" },
        { en: "If a subsidiary is measured at FVTPL in the separate statements (investment-entity parent), the fair-value category and level join the notes", ar: "إن قيست تابعة بالعادلة في المنفصل (أم استثمارية) انضمت فئة العادلة ومستواها للإيضاحات" },
        { en: "If the entity is exempt from consolidation, the statement relied upon (the parent's publicly-available consolidated statements)", ar: "إن عفيت المنشأة من التجميع، فالقوائم المعتمد عليها (قوائم أمها المجمعة المتاحة للعموم)" },
      ],
    },
    { kind: "h", text: { en: "The classic exam traps", ar: "الفخاخ الامتحانية الكلاسيكية" } },
    {
      kind: "list",
      items: [
        { en: "'The parent chose separate instead of consolidated' — impossible: separate statements are additional, never a replacement (unless the parent is exempt under IFRS 10.4)", ar: "«اختارت الأم المنفصلة بدلًا من المجمعة» — مستحيل: فالمنفصلة إضافية لا بديلة (إلا لأم معفاة وفق IFRS 10.4)" },
        { en: "'Dividend income 400' in an equity-method answer — dividends REDUCE the carrying; income belongs to the cost/fair-value routes only", ar: "«إيراد توزيعات ٤٠٠» في جواب بطريقة الحصة — التوزيعات تخفض الدفترية؛ والدخل للمسارين الآخرين فقط" },
        { en: "'FVOCI for the subsidiary' — the option does not exist: IFRS 9's equity-instrument election excludes subs, JVs and associates", ar: "«عادلة عبر الدخل الشامل للتابعة» — الخيار غير موجود: فخيار IFRS 9 يستبعد التابعات والمشتركة والزميلات" },
        { en: "'Revalue the first tranche to fair value' in a separate-statements step acquisition — no remeasurement here; that is the consolidated cascade's job", ar: "«أعد قياس الشريحة الأولى بالعادلة» في استحواذ متدرج بالمنفصلة — لا إعادة قياس هنا؛ فذلك عمل التسلسل المجمّع" },
        { en: "'The JO sits in the investment line at cost' — joint operations bypass the menu entirely: shares of assets and liabilities, directly", ar: "«العملية المشتركة بسطر الاستثمار بالتكلفة» — العمليات المشتركة تتجاوز القائمة أصلًا: حصص أصول والتزامات، مباشرة" },
      ],
    },
    { kind: "h", text: { en: "Interactions", ar: "التفاعلات" } },
    {
      kind: "p",
      text: {
        en: "IAS 27 is the last stop of the 2011 groups package: IFRS 10 decides WHO must consolidate (and carves out investment entities); IFRS 11 routes joint operations around the menu; IAS 28 supplies the equity-method machinery and governs JVs/associates in the CONSOLIDATED set; IFRS 9 prices the fair-value route; IFRS 3 fixed the cost of the investment at acquisition; IFRS 12 demands the interests' risk disclosures alongside. An exam answer that names the route and its standard in one sentence ('in its separate financial statements the parent carries the subsidiary at cost in accordance with IAS 27') reads like the marker's own model answer.",
        ar: "IAS 27 آخر محطة حزمة المجموعات ٢٠١١: فـIFRS 10 يقرر من يجب أن يجمع (ويستثني كيانات الاستثمار)؛ وIFRS 11 يوجه العمليات المشتركة خارج القائمة؛ وIAS 28 يمد آلة طريقة الحصة ويحكم المشتركة والزميلات في المجمعة؛ وIFRS 9 يسعّر مسار العادلة؛ وIFRS 3 ثبّت تكلفة الاستثمار عند الاستحواذ؛ وIFRS 12 يطلب إفصاحات مخاطر الحصص جنبًا لجنب. فالإجابة الامتحانية التي تسمي المسار ومعياره في جملة واحدة («تحمل الأم التابعة بالتكلفة في قوائمها المنفصلة وفق IAS 27») تُقرأ كالإجابة النموذجية للمصحح ذاته.",
      },
    },
    { kind: "h", text: { en: "Transition & effective dates", ar: "الانتقال والتواريخ النافذة" } },
    {
      kind: "p",
      text: {
        en: "The 2011 revision (separate statements only, consolidation moved to IFRS 10) took effect on 1 January 2013 with the rest of the groups package; the August 2014 'Equity Method in Separate Financial Statements' amendment followed on 1 January 2016, applied RETROSPECTIVELY — an entity electing the equity method states the comparative period's carrying as the method would have produced it. First-time adopters under IFRS 1 may deem the cost at the date of transition (fair value or previous-GAAP carrying) for every route in the menu.",
        ar: "سرى تعديل ٢٠١١ (قوائم منفصلة فقط، وانتقال التجميع إلى IFRS 10) من ١ يناير ٢٠١٣ مع بقية الحزمة؛ وتبعه تعديل أغسطس ٢٠١٤ «طريقة الحصة في القوائم المنفصلة» في ١ يناير ٢٠١٦ مطبقًا بأثر رجعي — فمن ينتقي الطريقة يعرض دفترية الفترة المقارنة كما كانت الطريقة لتنتجها. ومن يتبنى لأول مرة وفق IFRS 1 له أن يفترض التكلفة بتاريخ الانتقال (عادلة أو دفترية بموجب معايير سابقة) لكل مسارات القائمة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The exam trap: dividend income in separate statements vs share-of-profit in equity-method statements — the candidate who books 'dividend income 400' under the EQUITY METHOD answer loses the whole mark; under the equity method, dividends REDUCE the investment's carrying.",
        ar: "الفخ الامتحاني: إيراد التوزيعات في المنفصلة مقابل نصيب الربح بطريقة الحصة — فمن يثبت «إيراد توزيعات ٤٠٠» في جواب طريقة الحصة يخسر العلامة؛ فالتوزيعات هناك تخفض القيمة الدفترية للاستثمار.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Read the ask: 'in the separate financial statements' and 'in the consolidated financial statements' produce DIFFERENT numbers for the same disposal — one answer from the separate books (proceeds − cost), one from the loss-of-control cascade. Quote the phrase from the question in your first line and there is no ambiguity left.",
        ar: "اقرأ المطلوب: «في القوائم المنفصلة» و«في القوائم المجمعة» تنتج رقمين مختلفين للتخرد ذاته — جواب من دفاتر المنفصلة (حصيلة − تكلفة)، وجواب من تسلسل فقد السيطرة. اقتبس عبارة السؤال في سطرك الأول فلا يبقى لبس.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Step acquisition at cost: the old tranche keeps its old cost — no fair-value step-up in the separate statements; that remeasurement lives ONLY in the consolidated set (IFRS 10/IFRS 3).",
        ar: "الاستحواذ المتدرج بالتكلفة: الشريحة القديمة تحتفظ بتكلفتها القديمة — لا رفع بالعادلة في المنفصلة؛ فإعادة القياس تلك تعيش في المجموعة فقط (IFRS 10/IFRS 3).",
      },
    },
  ],
}
