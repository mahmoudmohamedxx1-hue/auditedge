/** IAS 33 — Earnings per Share */

import type { Standard } from "../types"

export const IAS_33: Standard = {
  code: "IAS 33",
  title: { en: "Earnings per Share", ar: "ربح السهم" },
  topic: "presentation",
  effective: { en: "Effective 1 Jan 2010", ar: "سارٍ من ١ يناير ٢٠١٠" },
  blocks: [
    { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
    {
      kind: "p",
      text: {
        en: "Prescribe the calculation and presentation of earnings per share — the single most-cited performance ratio in the market. Applies to entities whose securities (ordinary shares OR potential ordinary shares) are PUBLICLY TRADED, and to any entity FILING (or about to file) with a securities regulator. Others may volunteer. Present basic AND diluted EPS on the FACE of the statement of profit or loss — for profit/loss from continuing operations, discontinued operations, and total — with equal prominence for each.",
        ar: "يحدد حساب وعرض ربح السهم — أكثر نسب أداء استشهادًا في السوق. يطبق على الكيانات المدرجة أدواتها (أسهم عادية أو محتملة) في السوق أو الساعية للإدراج، ويتطوع غيرها. ويُعرض الربح الأساسي والمخفض على وجه قائمة الأرباح — لعمليات مستمرة ومتوقفة وإجمالي الربح — بأهمية متساوية.",
      },
    },
    {
      kind: "note",
      text: {
        en: "EPS is a unit of ACCOUNTING income per ordinary share, not a valuation — still, a 1-cent miss moves markets. IAS 33 exists to make that number comparable and manipulation-proof.",
        ar: "ربح السهم وحدة دخل محاسبي لكل سهم عادي لا مقياس تقييم — ومع ذلك ففارق سنت واحد يحرك الأسواق؛ ووُضع IAS 33 ليجعل الرقم قابلًا للمقارنة ومحصّنًا من التلاعب.",
      },
    },
    { kind: "h", text: { en: "Key definitions", ar: "التعريفات المفتاحية" } },
    {
      kind: "p",
      text: {
        en: "The whole standard turns on a handful of words. An ORDINARY share is the residual class — the one ranking last in liquidation; puttable instruments reclassified into equity under IAS 32 behave as ordinary shares. A POTENTIAL ordinary share is anything that may entitle its holder to ordinary shares for little or no consideration — and the machine that decides whether it counts this period is the DILUTIVE test: would its assumption decrease EPS (or deepen the loss per share)? The DENOMINATOR always works on the weighted-average principle — shares count for the fraction of the period they were actually outstanding.",
        ar: "يقوم المعيار كله على حفنة كلمات: السهم العادي هو الطبقة المتبقية — الأخيرة ترتيبًا عند التصفية؛ والأدوات القابلة للرد المصنفة حقوق ملكية وفق IAS 32 تسلك سلوك الأسهم العادية. والسهم العادي المحتمل هو كل ما قد يخول حامله أسهمًا عادية مقابلًا ضئيلًا أو بلا مقابل — والآلية التي تقرر احتسابه هذه الفترة هي اختبار التخفيف: هل افتراضه يخفض ربح السهم (أو يعمق خسارته)؟ والمقام يعمل دائمًا بمبدأ المتوسط المرجح — فالأسهم تُحتسب بنسبة المدة التي قامت فيها فعلاً.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "ORDINARY share — the residual class ranking last on liquidation; includes puttable instruments classified as equity under IAS 32", ar: "السهم العادي — الطبقة المتبقية الأخيرة عند التصفية؛ ويشمل الأدوات القابلة للرد المصنفة حقوق ملكية وفق IAS 32" },
        { en: "DILUTIVE — an instrument whose assumption DECREASES earnings per share or increases loss per share", ar: "مخففة — أداة يخفض افتراضها ربح السهم أو يزيد خسارته" },
        { en: "ANTI-DILUTIVE — an instrument whose assumption would INCREASE EPS — always excluded from diluted EPS", ar: "معاكسة للتخفيف — أداة يرفع افتراضها ربح السهم — تستبعد دائمًا من المخفض" },
        { en: "CONTINGENTLY ISSUABLE — shares issuable for no cash (or nominal cash) once the conditions in a contract are met", ar: "أسهم مشروطة الإصدار — تصدر بلا نقد (أو بنقد رمزي) عند تحقق شروط العقد" },
        { en: "Contracts settled in SHARES or CASH at the entity's option — assumed settled in shares whenever that is more dilutive", ar: "عقود تسوَّى أسهمًا أو نقدًا باختيار المنشأة — يفترض تسويتها أسهمًا كلما كان ذلك أشد تخفيفًا" },
      ],
    },
    { kind: "h", text: { en: "The numerator — earnings for ordinary holders", ar: "البسط — أرباح مالكي الأسهم العادية" } },
    {
      kind: "p",
      text: {
        en: "The numerator is profit attributable to ORDINARY EQUITY HOLDERS: profit for the year, minus the NCI share, minus preference dividends. CUMULATIVE preference dividends are deducted for the period whether declared or not — the arrears accumulate. NON-CUMULATIVE dividends are deducted only when declared (or when the year's dividend becomes contractually fixed). Redeemable preference shares are LIABILITIES under IAS 32, so their distributions already sit in finance costs — deducting them again would double-count.",
        ar: "البسط هو الربح المنسوب لمالكي الأسهم العادية: ربح السنة مطروحًا منه نصيب الحصص غير المسيطرة وتوزيعات الأسهم الممتازة. وتوزيعات الممتاز التراكمية تُخصم عن الفترة أقرت أم لم تقرر — فالمتأخرات تتراكم؛ وغير التراكمية تخصم عند الإقرار فقط (أو عند صيرورة توزيع السنة مقررًا تعاقديًا). والأسهم الممتازة القابلة للاسترداد التزامات وفق IAS 32، فتوزيعاتها مقيمة ضمن تكاليف التمويل أصلًا — وخصمها ثانية ازدواج محاسبي.",
      },
    },
    { kind: "h", text: { en: "Basic EPS — the two ingredients", ar: "الربح الأساسي — المكونان" } },
    {
      kind: "formula",
      title: { en: "Basic EPS", ar: "الربح الأساسي للسهم" },
      lines: [
        { en: "Basic EPS = profit attributable to ORDINARY EQUITY HOLDERS ÷ weighted average number of ordinary shares (WANS)", ar: "الربح الأساسي = الربح المنسوب لمالكي الأسهم العادية ÷ المتوسط المرجح لعدد الأسهم" },
        { en: "Numerator = profit after tax − attributable to NCI − preference dividends declared in the period", ar: "البسط = الربح بعد الضريبة − نصيب الحصص غير المسيطرة − توزيعات الأسهم الممتازة المقررة" },
        { en: "Cumulative preference dividends DEDUCTED even if NOT declared (accumulated for the period)", ar: "توزيعات الممتاز التراكمية تُخصم وإن لم تُقرر (تتراكم عن الفترة)" },
        { en: "Discontinued operations: numerator split as well — each EPS line gets its own numerator", ar: "العمليات المتوقفة: يُقسم البسط أيضًا — لكل سطر ربح سهم بسطه" },
      ],
    },
    {
      kind: "steps",
      items: [
        { en: "Start with the shares OUTSTANDING at the beginning of the period", ar: "ابدأ بالأسهم القائمة في بداية الفترة" },
        { en: "ADD shares issued (from their issue date) — weighted by the FRACTION of the period outstanding", ar: "أضف الأسهم المصدرة من تاريخ إصدارها — مرجحة بنسبة الفترة" },
        { en: "SUBTRACT shares bought back/cancelled from the repurchase date", ar: "اطرح الأسهم المعاد شراؤها/الملغاة من تاريخ الشراء" },
        { en: "Bonus & rights issues change the denominator WITHOUT resources → restate ALL periods (see below)", ar: "الأسهم المجانية وإصدارات الحقوق تغير المقام دون مقابل ← أعد عرض كل الفترات" },
        { en: "WANS = Σ (shares × days outstanding ÷ days in period) — or a monthly simplification", ar: "المتوسط المرجح = مجموع (الأسهم × الأيام ÷ أيام الفترة)" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Why weight at all? An issue for cash brought resources only from its date, so the earnings generated before that date belong to the smaller capital base — the months, not the year-end count, must carry them. Daily weighting is the rule; a monthly convention is acceptable whenever it approximates the daily outcome. A buyback works in reverse: the shares leave the denominator from the repurchase date. None of this touches history — only bonus, split and rights issues rewrite the past.",
        ar: "لماذا الترجيح أصلًا؟ الإصدار مقابل نقد جلب الموارد من تاريخه فقط، فالأرباح المتولدة قبله تخص قاعدة رأس المال الأصغر — ويلزم أن تحملها الشهور لا عدد نهاية السنة. والترجيح اليومي هو الأصل، ويجوز التقسيم الشهري متى قارب نتيجته. والشراء العكسي عكس ذلك: تخرج الأسهم من المقام من تاريخ الشراء. ولا شيء من هذا يمس التاريخ — فالمجاني والتقسيم وإصدار الحقوق وحدها تعيد كتابة الماضي.",
      },
    },
    {
      kind: "journal",
      title: { en: "Numerator build (P/L to EPS basis)", ar: "بناء البسط (من الربح إلى أساس ربح السهم)" },
      rows: [
        { dr: { en: "Profit for the year", ar: "ربح السنة" } },
        { dr: { en: "− profit attributable to NCI", ar: "− نصيب الحصص غير المسيطرة" } },
        { dr: { en: "− cumulative preference dividends (declared or accumulated)", ar: "− توزيعات الممتاز التراكمية (المقررة أو المتراكمة)" } },
        { cr: { en: "= earnings for basic EPS", ar: "= أرباح الربح الأساسي" }, red: true },
        { cr: { en: "Diluted: + after-tax interest on convertibles + preference dividends no longer payable on conversion", ar: "المخفض: + فوائد التحويل بعد الضريبة + توزيعات لا تدخل عند التحويل" } },
      ],
    },
    {
      kind: "journal",
      title: { en: "Denominator build — the WANS worksheet", ar: "بناء المقام — ورقة المتوسط المرجح" },
      rows: [
        { dr: { en: "Opening ordinary shares outstanding — weighted 12/12", ar: "الأسهم العادية الافتتاحية — وزن ١٢/١٢" } },
        { dr: { en: "+ shares issued for cash — × months outstanding ÷ 12", ar: "+ الأسهم المصدرة مقابل نقد — × الأشهر ÷ ١٢" } },
        { dr: { en: "− shares bought back / cancelled — × months since the buyback ÷ 12", ar: "− الأسهم المعاد شراؤها/الملغاة — × الأشهر منذ الشراء ÷ ١٢" } },
        { cr: { en: "= Weighted average number of ordinary shares (WANS)", ar: "= المتوسط المرجح لعدد الأسهم العادية" }, red: true },
        { cr: { en: "Bonus / split / rights factors multiply every line that precedes the issue date", ar: "معاملات المجاني/التقسيم/الحقوق تضرب كل سطر يسبق تاريخ الإصدار" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Issues without resources — bonus & splits", ar: "الإصدارات بلا مقابل — المجانية والتقسيم" } },
    {
      kind: "p",
      text: {
        en: "Bonus issues, share SPLITS and reverse splits change the share count without changing resources — a 1-for-4 bonus multiplies the denominator by 1.25 for the CURRENT and ALL COMPARATIVE periods, as if the capital structure had always been that way. Issues FOR consideration do NOT restate (resources changed at the issue date).",
        ar: "الأسهم المجانية والتقسيم والعكس تغير العدد دون تغير الموارد — فمكافأة ١ لكل ٤ تضرب المقام في ١٫٢٥ للفترة الحالية وكل المقارنات، كأن الهيكل كان كذلك دائمًا. أما الإصدارات مقابل مقابل فلا تعاد عرضها (تغيرت الموارد بتاريخ الإصدار).",
      },
    },
    {
      kind: "tree",
      root: { en: "How did the number of ordinary shares change?", ar: "كيف تغير عدد الأسهم العادية؟" },
      branches: [
        {
          when: { en: "Bonus issue, split or reverse split — NO consideration received", ar: "إصدار مجاني أو تقسيم أو عكس — بلا مقابل مقبوض" },
          then: { en: "RESTATE the whole year and all comparatives × the factor — as if the structure had always been that way", ar: "أعد عرض السنة كلها وكل المقارنات × المعامل — كأن الهيكل كان كذلك دائمًا", red: true },
        },
        {
          when: { en: "Issue at FULL market price for cash", ar: "إصدار بسعر السوق الكامل مقابل نقد" },
          then: { en: "Weight the new shares from the issue date only — the resources arrived then", ar: "رجّح الأسهم الجديدة من تاريخ الإصدار فقط — فوصلت الموارد حينها", red: true },
        },
        {
          when: { en: "RIGHTS issue — a discount for existing holders", ar: "إصدار حقوق — بخصم لحاملي الأسهم" },
          then: { en: "Split it: the discount element is a bonus → bonus factor on pre-issue shares; the consideration element weights from the issue date", ar: "فكّكه: عنصر الخصم مجاني ← معامل المكافأة للأسهم السابقة؛ وعنصر المقابل يرجح من تاريخ الإصدار", red: true },
        },
        {
          when: { en: "Buyback or cancellation", ar: "شراء عكسي أو إلغاء" },
          then: { en: "Subtract from the repurchase date — no restatement", ar: "اطرح من تاريخ الشراء — بلا إعادة عرض" },
        },
      ],
    },
    { kind: "h", text: { en: "Rights issues — the bonus fraction", ar: "إصدارات الحقوق — نسبة المكافأة" } },
    {
      kind: "formula",
      title: { en: "Rights-issue adjustment factor", ar: "معامل تعديل إصدار الحقوق" },
      lines: [
        { en: "Bonus factor = fair value per share BEFORE the issue ÷ theoretical ex-rights fair value per share", ar: "نسبة المكافأة = القيمة العادلة قبل الإصدار ÷ القيمة النظرية بعد ممارسة الحقوق" },
        { en: "TERV = (shares before × market price) + (rights exercised × subscription price) ÷ total shares after", ar: "القيمة النظرية = (الأسهم قبل × سعر السوق + أسهم الحقوق × سعر الاكتتاب) ÷ الأسهم بعد" },
        { en: "Restate comparatives: shares before the issue × bonus factor; new shares join from the rights' issue date at actual count", ar: "أعد عرض المقارنات: الأسهم قبل الإصدار × نسبة المكافأة؛ والأسهم الجديدة من تاريخ الإصدار" },
        { en: "The discount element is the 'free' element — exactly like a bonus issue", ar: "عنصر الخصم هو العنصر المجاني — كإصدار مجاني تمامًا" },
      ],
    },
    {
      kind: "example",
      title: { en: "A rights issue through a full year", ar: "إصدار حقوق عبر سنة كاملة" },
      lines: [
        { en: "1 Jan: 90,000 shares outstanding · 1 July: 1-for-4 rights at 5 when the cum-rights price was 10 · profit 425,000", ar: "١ يناير: ٩٠٬٠٠٠ سهمًا · ١ يوليو: حقوق ١ لكل ٤ بسعر ٥ وسعر السوق قبلها ١٠ · ربح ٤٢٥٬٠٠٠" },
        { en: "TERV = (90,000 × 10 + 22,500 × 5) ÷ 112,500 = 1,012,500 ÷ 112,500 = 9 → bonus factor = 10 ÷ 9 = 1.111", ar: "القيمة النظرية = (٩٠٬٠٠٠ × ١٠ + ٢٢٬٥٠٠ × ٥) ÷ ١١٢٬٥٠٠ = ١٬٠١٢٬٥٠٠ ÷ ١١٢٬٥٠٠ = ٩ ← معامل المكافأة = ١٠ ÷ ٩ = ١٫١١١" },
        { en: "Pre-issue months restated: 90,000 × 10/9 = 100,000 · post-issue shares at actual count: 112,500", ar: "الأشهر قبل الإصدار معاد عرضها: ٩٠٬٠٠٠ × ١٠÷٩ = ١٠٠٬٠٠٠ · وبعده بالعدد الفعلي: ١١٢٬٥٠٠" },
        { en: "WANS = 100,000 × 6/12 + 112,500 × 6/12 = 50,000 + 56,250 = 106,250", ar: "المتوسط المرجح = ١٠٠٬٠٠٠ × ٦÷١٢ + ١١٢٬٥٠٠ × ٦÷١٢ = ٥٠٬٠٠٠ + ٥٦٬٢٥٠ = ١٠٦٬٢٥٠" },
        { en: "Basic EPS = 425,000 ÷ 106,250 = 4.00 · the comparative year's denominator is multiplied by 10/9 too", ar: "الربح الأساسي = ٤٢٥٬٠٠٠ ÷ ١٠٦٬٢٥٠ = ٤٫٠٠ · ومقام سنة المقارنة يضرب في ١٠÷٩ كذلك" },
      ],
    },
    { kind: "h", text: { en: "Diluted EPS — the assumption machine", ar: "الربح المخفض — آلة الافتراضات" } },
    {
      kind: "p",
      text: {
        en: "Diluted EPS answers: 'what would EPS be if every potentially-dilutive instrument converted?' The process: (1) compute each instrument's INCREMENTAL EPS — its numerator effect ÷ its incremental shares; (2) rank instruments from LOWEST incremental EPS (most dilutive) to highest; (3) keep loading them into the EPS calculation while each addition DECREASES EPS; (4) stop the moment an instrument would INCREASE EPS — it is anti-dilutive and excluded (together with everything ranked after it). This ordering prevents the classic error of letting a barely-dilutive convertible mask a highly-dilutive option.",
        ar: "يجيب الربح المخفض: «ماذا لو تحولت كل الأدوات المحتملة للتخفيف؟» الخطوات: (١) احسب ربح السهم التزايدي لكل أداة (أثر البسط ÷ الأسهم الإضافية)؛ (٢) رتبها تصاعديًا من الأشد تخفيفًا؛ (٣) أضفها ما دامت تخفض ربح السهم؛ (٤) توقف فور إثارته زيادة — فالأداة معاكسة للتخفيف وتستبعد وما بعدها. ويمنع هذا الترتيب خطأ حجب أداة شديدة التخفيف بأخرى متواضعة.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "CONVERTIBLE BONDS: add back the after-tax interest saved to the numerator; add the conversion shares to the denominator", ar: "السندات القابلة للتحويل: أضف الفوائد المدّخرة بعد الضريبة للبسط والأسهم الناشئة للمقام" },
        { en: "OPTIONS & WARRANTS — treasury-stock method: incremental shares = shares issued − (proceeds ÷ average market price) — the 'bought back' shares assume proceeds repurchase stock at the period's average price", ar: "الخيارات والوثائق — طريقة الأسهم الخزينة: الأسهم الإضافية = المصدرة − (المتحصلات ÷ متوسط سعر السوق)" },
        { en: "CONTINGENTLY ISSUABLE shares: include when the conditions are MET by the end of the period (the trigger already happened)", ar: "الأسهم المشروطة: تدرج عند تحقق الشروط بنهاية الفترة" },
        { en: "CONVERTIBLE PREFERENCE shares: add back preference dividends to the numerator + the conversion shares", ar: "الأسهم الممتازة القابلة للتحويل: أعد توزيعاتها للبسط وأضف أسهم التحويل" },
        { en: "Purchased options (written vs held): only WRITTEN options are potentially dilutive — held options are not", ar: "الخيارات المكتوبة فقط كامنة التخفيف — أما المقتناة فلا" },
        { en: "Contracts issuable in SHARES or cash at the entity's option → assume SHARES if more dilutive (for EPS) — the 'most advantageous to the holder' is not the test here", ar: "عقود قابلة للتسليم أسهمًا أو نقدًا باختيار المنشأة ← افترض الأشد تخفيفًا" },
      ],
    },
    {
      kind: "steps",
      items: [
        { en: "Compute BASIC EPS first — it is the ceiling diluted EPS can never exceed", ar: "احسب الربح الأساسي أولًا — فهو السقف الذي لا يتجاوزه المخفض" },
        { en: "Compute each instrument's INCREMENTAL EPS (numerator effect ÷ incremental shares)", ar: "احسب الربح التزايدي لكل أداة (أثر البسط ÷ الأسهم الإضافية)" },
        { en: "RANK the instruments ascending — lowest incremental EPS first (the most dilutive)", ar: "رتّب الأدوات تصاعديًا — الأدنى تزايديًا أولًا (الأشد تخفيفًا)" },
        { en: "LOAD them one at a time, keeping each while the running EPS FALLS", ar: "حمّلها واحدة تلو الأخرى، مُبقيًا كل منها ما دامت تخفض الربح الجاري" },
        { en: "STOP at the first instrument that would raise EPS — exclude it and EVERYTHING ranked after it", ar: "توقف عند أول أداة كانت سترفع الربح — استبعدها وكل ما بعدها في الترتيب" },
      ],
    },
    {
      kind: "tree",
      root: { en: "Which dilution machinery does the instrument use?", ar: "أي آلة تخفيف تستخدمها الأداة؟" },
      branches: [
        {
          when: { en: "Convertible BONDS (debt that turns into shares)", ar: "سندات قابلة للتحويل (دين يصير أسهمًا)" },
          then: { en: "Interest add-back: after-tax interest & issue costs to the numerator; conversion shares to the denominator", ar: "إعادة الفوائد: الفوائد بعد الضريبة وتكاليف الإصدار للبسط؛ وأسهم التحويل للمقام", red: true },
        },
        {
          when: { en: "Convertible PREFERENCE shares", ar: "أسهم ممتازة قابلة للتحويل" },
          then: { en: "Dividends add-back: the deducted preference dividends return to the numerator; conversion shares join", ar: "إعادة التوزيعات: التوزيعات المخصومة تعود للبسط؛ وتلتحم أسهم التحويل", red: true },
        },
        {
          when: { en: "Options & warrants", ar: "الخيارات والوثائق" },
          then: { en: "TREASURY-STOCK method: incremental shares only — no numerator adjustment at all", ar: "طريقة الأسهم الخزينة: أسهم إضافية فقط — بلا أي تعديل في البسط", red: true },
        },
        {
          when: { en: "Contingently issuable shares / contracts settled in shares or cash", ar: "أسهم مشروطة أو عقود تسوَّى أسهمًا أو نقدًا" },
          then: { en: "Assume the conditions are met (period-end state) and the SHARE settlement when more dilutive", ar: "افترض تحقق الشروط (حالة نهاية الفترة) والتسوية بالأسهم متى كانت أشد تخفيفًا", red: true },
        },
      ],
    },
    {
      kind: "tree",
      root: { en: "Is the instrument dilutive in this period?", ar: "هل الأداة مخففة هذه الفترة؟" },
      branches: [
        {
          when: { en: "Incremental EPS < diluted EPS so far", ar: "الربح التزايدي < المخفض حتى الآن" },
          then: { en: "DILUTIVE — include it and keep going down the ranking", ar: "مخففة — أدرجها وواصل الترتيب", red: true },
        },
        {
          when: { en: "Incremental EPS ≥ diluted EPS so far", ar: "الربح التزايدي ≥ المخفض حتى الآن" },
          then: { en: "ANTI-DILUTIVE — exclude it and EVERYTHING ranked after it", ar: "معاكسة للتخفيف — استبعدها وكل ما بعدها", red: true },
        },
        {
          when: { en: "Basic EPS is NEGATIVE", ar: "الأساسي سالب" },
          then: { en: "Include everything — more shares always deepen the loss per share (except instruments that add no shares)", ar: "أدرج كل شيء — فزيادة الأسهم تعمق خسارة السهم دائمًا" },
        },
      ],
    },
    { kind: "h", text: { en: "Convertibles — the interest add-back", ar: "القابلة للتحويل — إضافة الفوائد" } },
    {
      kind: "p",
      text: {
        en: "Assuming conversion cancels the coupon — so the interest expense (net of tax and of any amortised issue costs) returns to the numerator, and the conversion shares join the denominator from the date the potential existed. Where the conversion rate VARIES over the instrument's life (a step-up schedule), assume the rate most advantageous to the HOLDER — the one producing the most shares, i.e. the most dilutive. Convertible preference shares work the same way one floor up: the dividends deducted for basic EPS flow back into the diluted numerator.",
        ar: "افتراض التحويل يلغي الكوبون — فتعود مصروفات الفوائد (بعد الضريبة وبعد أي تكاليف إصدار مستهلكة) إلى البسط، وتلتحم أسهم التحويل بالمقام من تاريخ وجود الأداة المحتملة. وحيثما تغير معدل التحويل عبر عمر الأداة (جدول متدرج)، افترض المعدل الأفضل لحامل السند — الأكثر توليدًا للأسهم أي الأشد تخفيفًا. والأسهم الممتازة القابلة للتحويل تعمل بالمنطق ذاته بطابق أعلى: التوزيعات المخصومة للأساسي تعود إلى بسط المخفض.",
      },
    },
    { kind: "h", text: { en: "Options & warrants — the treasury-stock method", ar: "الخيارات والوثائق — طريقة الأسهم الخزينة" } },
    {
      kind: "p",
      text: {
        en: "Exercise is assumed; the assumed proceeds are then spent buying the stock back at the period's AVERAGE market price, so only the net increment of shares dilutes. The assumed proceeds are BIGGER than the exercise price alone: the AVERAGE unrecognised IFRS 2 compensation for future service rides along as if it were cash. Out-of-the-money options (exercise price ≥ average market price) would buy back everything they issue — anti-dilutive, excluded. And only WRITTEN options dilute; options the entity itself purchased never add shares.",
        ar: "يُفترض ممارسة الخيار؛ ثم تُنفق المتحصلات المفترضة في إعادة شراء السهم بمتوسط سعر السوق للفترة، فلا يخفف إلا العدد الصافي من الأسهم. والمتحصلات المفترضة أكبر من سعر الممارسة وحده: متوسط التعويض غير المعترف به وفق IFRS 2 عن الخدمة المستقبلية يرافقها وكأنه نقد. والخيارات الرابحة خارج السوق (سعر الممارسة ≥ متوسط السوق) تشتري كل ما تصدره — معاكسة للتخفيف فتستبعد. والخيارات المكتوبة وحدها تخفف؛ أما المقتناة فلا تضيف أسهمًا أبدًا.",
      },
    },
    {
      kind: "formula",
      title: { en: "The treasury-stock method", ar: "طريقة الأسهم الخزينة" },
      lines: [
        { en: "Incremental shares = shares issued on exercise − (assumed proceeds ÷ average market price)", ar: "الأسهم الإضافية = أسهم الممارسة − (المتحصلات المفترضة ÷ متوسط سعر السوق)" },
        { en: "Assumed proceeds = exercise price proceeds + AVERAGE unrecognised IFRS 2 compensation", ar: "المتحصلات المفترضة = متحصلات سعر الممارسة + متوسط التعويض غير المعترف به وفق IFRS 2" },
        { en: "Options with no future service left → unrecognised compensation nil → pure exercise proceeds", ar: "الخيارات بلا خدمة مستقبلية متبقية ← التعويض غير المعترف به صفر ← متحصلات الممارسة وحدها" },
        { en: "Exercise price ≥ average market price → anti-dilutive → excluded", ar: "سعر الممارسة ≥ متوسط السوق ← معاكسة للتخفيف ← استبعاد" },
      ],
    },
    { kind: "h", text: { en: "Contingently issuable shares", ar: "الأسهم المشروطة الإصدار" } },
    {
      kind: "p",
      text: {
        en: "Contingently issuable shares enter diluted EPS when the triggering conditions are met by the END of the reporting period — the share count reflects the state of the conditions at the period end (for formula-driven counts, e.g. price × units, use the period-end values). Time-based contingencies — shares issuable merely after three years of service — are treated as satisfied, because time will pass. Basic EPS takes them only from the date all conditions are satisfied and the issue becomes unconditional; diluted EPS takes them as soon as the period-end state of conditions endorses them.",
        ar: "تدخل الأسهم المشروطة في الربح المخفض عند تحقق الشروط المفجرة بنهاية فترة التقرير — ويعكس العدد حالة الشروط في نهاية الفترة (وللعدد المفصلي بالمعادلة، كالسعر × الوحدات، تُستخدم قيم نهاية الفترة). والشروط الزمنية — أسهم تصدر لمجرد مرور ثلاث سنوات خدمة — تُعد متحققة لأن الوقت سيمضي. أما الأساسي فيأخذها من تاريخ اكتمال الشروط وصيرورة الإصدار غير مشروط؛ والمخفض يأخذها متى أقرّت حالة الشروط في نهاية الفترة بها.",
      },
    },
    { kind: "h", text: { en: "Restatements & the control logic", ar: "إعادة العرض والمنطق الرقابي" } },
    {
      kind: "list",
      items: [
        { en: "Restate basic & diluted EPS for the comparatives when: a prior-period ERROR/policy change (IAS 8), or a change in ordinary shares WITHOUT a change in resources (bonus, split, rights)", ar: "أعد العرض عند: خطأ/تغير سياسة (IAS 8) أو تغير الأسهم بلا مقابل (مجاني، تقسيم، حقوق)" },
        { en: "A change in the ASSUMED conversion terms of convertibles requires restatement ONLY if the original assumption was wrong", ar: "تغير شروط التحويل المفترضة يوجب إعادة العرض فقط إذا كان الافتراض الأصلي خاطئًا" },
        { en: "Negative EPS: include 'dilutive' instruments anyway — an anti-dilutive exception does not apply when the basic EPS is negative (any increase in losses per share from conversion is presented)", ar: "الربح السالب: أدرج الأدوات مع ذلك — فالاستبعاد المضاد للتخفيف لا ينطبق عندما يكون الأساسي سالبًا" },
        { en: "Rights issue completed AFTER the reporting date but BEFORE authorisation → adjust the CURRENT period's EPS (IAS 10 adjusting event)", ar: "إصدار حقوق اكتمل بعد التقرير وقبل الاعتماد ← عدّل ربح السهم للفترة الحالية (حدث معدِّل وفق IAS 10)" },
      ],
    },
    {
      kind: "example",
      title: { en: "Full worked EPS set", ar: "حالة ربح سهم كاملة" },
      lines: [
        { en: "Profit 5,000 · shares all year 3,000 · 1,000 convertible bonds (10% coupon, each converts to 1 share; tax 25%) · options on 500 shares at exercise price 8 · average market price 10", ar: "ربح ٥٬٠٠٠ · أسهم ٣٬٠٠٠ طوال السنة · ١٬٠٠٠ سند قابل للتحويل (كوبون ١٠٪ وكل سند سهم؛ ضريبة ٢٥٪) · خيارات على ٥٠٠ سهم بسعر ٨ · متوسط السوق ١٠" },
        { en: "Basic EPS = 5,000 ÷ 3,000 = 1.67", ar: "الأساسي = ٥٬٠٠٠ ÷ ٣٬٠٠٠ = ١٫٦٧" },
        { en: "Convertible: numerator +100 interest × 75% = 75 → incremental 75 ÷ 1,000 = 0.075", ar: "السند: البسط +١٠٠ فائدة × ٧٥٪ = ٧٥ ← التزايدي ٧٥ ÷ ١٬٠٠٠ = ٠٫٠٧٥" },
        { en: "Options (treasury): incremental = 500 − (500×8÷10) = 500 − 400 = 100 shares → zero numerator → incremental EPS 0 (most dilutive → first)", ar: "الخيارات: الأسهم الإضافية = ٥٠٠ − ٤٠٠ = ١٠٠ ← ربح تزايدي صفر (الأشد تخفيفًا فالأول)" },
        { en: "Order: options first, then convertible → diluted = (5,000 + 75) ÷ (3,000 + 100 + 1,000) = 5,075 ÷ 4,100 = 1.24", ar: "الترتيب: الخيارات ثم السند ← المخفض = ٥٬٠٧٥ ÷ ٤٬١٠٠ = ١٫٢٤" },
        { en: "Each addition lowered EPS (1.67 → 1.61 → 1.24) → both instruments are dilutive — keep them", ar: "كل إضافة خفضت الربح (١٫٦٧ ← ١٫٦١ ← ١٫٢٤) ← كلتاهما مخففة — أبقهما" },
      ],
    },
    { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Basic AND diluted EPS on the face of P/L: continuing · discontinued · total — same prominence", ar: "الأساسي والمخفض على وجه القائمة: مستمرة · متوقفة · إجمالي — بأهمية متساوية" },
        { en: "Note the amounts used as the numerator (reconciliation from profit) and the WANS calculation (reconciling movements in shares)", ar: "اشرح البسط (تسوية مع الربح) والمقام (تسوية حركة الأسهم)" },
        { en: "Instruments that could dilute FUTURE EPS but were excluded from diluted EPS as anti-dilutive this period", ar: "الأدوات التي قد تخفف المستقبل واستبعدت هذه الفترة لمعاكستها" },
        { en: "A description of the potential ordinary shares and their dilutive effect, with the terms & conditions of conversion or exercise", ar: "وصف الأسهم العادية المحتملة وأثرها التخفيفي، مع شروط وأحكام التحويل أو الممارسة" },
        { en: "Transactions AFTER the reporting date that would have changed the share count significantly (IAS 10 companion)", ar: "معاملات بعد التقرير كانت ستغير عدد الأسهم جوهريًا" },
      ],
    },
    { kind: "h", text: { en: "Interactions with other standards", ar: "التفاعل مع المعايير الأخرى" } },
    {
      kind: "list",
      items: [
        { en: "IAS 32 decides the numerator: redeemable preference shares are liabilities (their distributions already sit in finance costs); puttable instruments in equity count as ordinary shares", ar: "IAS 32 يقرر البسط: الممتازة القابلة للاسترداد التزامات (توزيعاتها في تكاليف التمويل أصلًا)؛ والقابلة للرد المصنفة حقوق ملكية تعد أسهمًا عادية" },
        { en: "IFRS 2 feeds the treasury method: the average unrecognised share-based compensation joins the assumed proceeds", ar: "IFRS 2 يغذي طريقة الخزينة: متوسط التعويض بالأسهم غير المعترف به يلتحم بالمتحصلات المفترضة" },
        { en: "IAS 8: error corrections and policy changes restate the comparative EPS figures", ar: "IAS 8: تصحيح الأخطاء وتغير السياسات يعيد عرض أرقام المقارنة" },
        { en: "IAS 10: a bonus, split or rights issue completed after the reporting date adjusts the current period's EPS", ar: "IAS 10: الإصدار المجاني أو التقسيم أو الحقوق المكتمل بعد التقرير يعدل ربح الفترة الحالية" },
        { en: "IAS 34: interim EPS is cumulative YEAR-TO-DATE, not the quarter standing alone", ar: "IAS 34: ربح السهم المرحلي تراكمي من بداية السنة، لا ربع السنة منفردًا" },
        { en: "IFRS 10 / NCI: only profit attributable to ordinary holders of the PARENT enters the numerator", ar: "IFRS 10 والحصص غير المسيطرة: لا يدخل البسط إلا ربح مالكي الأسهم العادية للأم" },
      ],
    },
    { kind: "h", text: { en: "Transition & effective dates", ar: "الانتقال وتواريخ السريان" } },
    {
      kind: "p",
      text: {
        en: "IAS 33 was issued in 1997 and rewritten in the 2003 Improvements cycle (effective 1 Jan 2005), absorbing SIC-24 on EPS for financial institutions and hardening the treasury-stock method. The 2009 annual-improvements cycle (effective 1 Jan 2010) tightened the timing rules for contingently issuable and contingently returnable shares. All EPS restatements are retrospective by nature: whenever the denominator's history changes, the comparatives change with it.",
        ar: "صدر IAS 33 عام ١٩٩٧ وأعيدت كتابته في دورة التحسينات ٢٠٠٣ (نافذ ١ يناير ٢٠٠٥)، مستوعبًا تفسير SIC-24 عن ربح السهم للمؤسسات المالية ومشدِّدًا طريقة الأسهم الخزينة. ثم شددت دورة التحسينات السنوية ٢٠٠٩ (النافذة ١ يناير ٢٠١٠) قواعد توقيت الأسهم المشروطة الإصدار والاسترداد. وكل إعادة عرض لربح السهم رجعية بطبيعتها: متى تغير تاريخ المقام تغيرت المقارنات معه.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Weighted AVERAGE, not period-end count: shares issued on 1 October of a calendar year count ¼; bonus issues multiply the WHOLE year retroactively. Two thirds of EPS exam errors are denominator-timing errors.",
        ar: "المتوسط المرجح لا العدد الختامي: الأسهم المصدرة ١ أكتوبر توزن ربعًا؛ والمجانية تضرب السنة كلها بأثر رجعي. ومعظم أخطاء الامتحان في توقيت المقام.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Contingent shares enter diluted EPS when the condition is met — even if the shares are not yet issued; and they enter BASIC EPS from the date all conditions are satisfied and issue becomes unconditional.",
        ar: "الأسهم المشروطة تدخل المخفض عند تحقق الشرط وإن لم تصدر بعد؛ وتدخل الأساسي من تاريخ استيفاء الشروط وصيرورة الإصدار غير مشروط.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The bonus factor applies to every period BEFORE the rights date — including the whole comparative year. An issue on the LAST DAY of the year still restates the full current year; a mid-year rights issue splits the year: factor-adjusted shares before, actual counts after.",
        ar: "معامل المكافأة يسري على كل فترة تسبق تاريخ الحقوق — بما فيها سنة المقارنة كلها. فالإصدار في آخر يوم بالسنة يعيد عرض السنة الحالية كاملة؛ وإصدار منتصف السنة يقسمها: أسهم معدلة بالمعامل قبله وأعداد فعلية بعده.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Options' assumed proceeds include MORE than the exercise price — the average unrecognised IFRS 2 compensation rides along and shrinks the incremental shares. An option priced exactly at the average market price gives a zero increment ONLY when there is no unrecognised compensation left.",
        ar: "متحصلات الخيارات المفترضة أكبر من سعر الممارسة — فمتوسط التعويض غير المعترف به وفق IFRS 2 يرافقها ويقلص الأسهم الإضافية. فالخيار المسعور بمتوسط السوق ذاته لا يعطي صفرًا إلا عند نفاد التعويض غير المعترف به.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Each profit line — continuing, discontinued, TOTAL — carries its own basic AND diluted EPS with equal prominence, all divided by the SAME WANS (plus dilutive shares). Exam papers ask for the discontinued pair separately; do not net them away.",
        ar: "كل سطر ربح — مستمرة ومتوقفة وإجمالي — يحمل ربحه الأساسي والمخفض بأهمية متساوية، وكلها مقسومة على المتوسط المرجح ذاته (مضافًا إليه الأسهم المخففة). فتطلب الأوراق الامتحانية زوج المتوقفة منفردًا؛ فلا تصفّهما.",
      },
    },
    {
      kind: "note",
      text: {
        en: "'Potential ordinary shares' = options, warrants, convertibles, contingent shares — anything that could add ordinary shares for little or no consideration.",
        ar: "«الأسهم العادية المحتملة» تشمل الخيارات والوثائق والقابلة للتحويل والأسهم المشروطة — كل ما قد يزيد الأسهم العادية مقابلًا ضئيلًا أو بلا مقابل.",
      },
    },
    {
      kind: "note",
      text: {
        en: "EPS books no journal entries — the T-account sheets in these notes are computation worksheets: numerator build, denominator build, factor build. The ratio is pure arithmetic over existing P&L and share data.",
        ar: "ربح السهم لا يثبت قيود دفترية — فجداول الحسابات على شكل T في هذه الأوراق أوراق عمل حسابية: بناء البسط وبناء المقام وبناء المعامل. فالنسبة حساب صرف فوق بيانات الأرباح والأسهم القائمة.",
      },
    },
  ],
}
