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
    { kind: "h", text: { en: "Issues without resources — bonus & splits", ar: "الإصدارات بلا مقابل — المجانية والتقسيم" } },
    {
      kind: "p",
      text: {
        en: "Bonus issues, share SPLITS and reverse splits change the share count without changing resources — a 1-for-4 bonus multiplies the denominator by 1.25 for the CURRENT and ALL COMPARATIVE periods, as if the capital structure had always been that way. Issues FOR consideration do NOT restate (resources changed at the issue date).",
        ar: "الأسهم المجانية والتقسيم والعكس تغير العدد دون تغير الموارد — فمكافأة ١ لكل ٤ تضرب المقام في ١٫٢٥ للفترة الحالية وكل المقارنات، كأن الهيكل كان كذلك دائمًا. أما الإصدارات مقابل مقابل فلا تعاد عرضها (تغيرت الموارد بتاريخ الإصدار).",
      },
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
    {
      kind: "journal",
      title: { en: "Numerator build (P/L to EPS basis)", ar: "بناء البسط (من الربح إلى أساس ربح السهم)" },
      rows: [
        { dr: { en: "Profit for the year 5,000", ar: "ربح السنة ٥٬٠٠٠" } },
        { dr: { en: "− profit attributable to NCI", ar: "− نصيب الحصص غير المسيطرة" } },
        { dr: { en: "− cumulative preference dividends (declared or accumulated)", ar: "− توزيعات الممتاز التراكمية (المقررة أو المتراكمة)" } },
        { cr: { en: "= earnings for basic EPS", ar: "= أرباح الربح الأساسي" }, red: true },
        { cr: { en: "Diluted: + after-tax interest on convertibles + preference dividends no longer payable on conversion", ar: "المخفض: + فوائد التحويل بعد الضريبة + توزيعات لا تدخل عند التحويل" } },
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
    { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Basic AND diluted EPS on the face of P/L: continuing · discontinued · total — same prominence", ar: "الأساسي والمخفض على وجه القائمة: مستمرة · متوقفة · إجمالي — بأهمية متساوية" },
        { en: "Note the amounts used as the numerator (reconciliation from profit) and the WANS calculation (reconciling movements in shares)", ar: "اشرح البسط (تسوية مع الربح) والمقام (تسوية حركة الأسهم)" },
        { en: "Instruments that could dilute FUTURE EPS but were excluded from diluted EPS as anti-dilutive this period", ar: "الأدوات التي قد تخفف المستقبل واستبعدت هذه الفترة لمعاكستها" },
        { en: "Transactions AFTER the reporting date that would have changed the share count significantly (IAS 10 companion)", ar: "معاملات بعد التقرير كانت ستغير عدد الأسهم جوهريًا" },
      ],
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
      kind: "note",
      text: {
        en: "'Potential ordinary shares' = options, warrants, convertibles, contingent shares — anything that could add ordinary shares for little or no consideration.",
        ar: "«الأسهم العادية المحتملة» تشمل الخيارات والوثائق والقابلة للتحويل والأسهم المشروطة — كل ما قد يزيد الأسهم العادية مقابلًا ضئيلًا أو بلا مقابل.",
      },
    },
  ],
}
