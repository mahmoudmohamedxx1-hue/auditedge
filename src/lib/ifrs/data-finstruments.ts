/**
 * v30 — IFRS Summaries · Financial Instruments group:
 * IFRS 9, IFRS 7, IAS 32, IAS 39, IFRS 13.
 */

import type { Standard } from "./types"

export const INSTRUMENT_STANDARDS: Standard[] = [
  {
    code: "IFRS 9",
    title: { en: "Financial Instruments", ar: "الأدوات المالية" },
    topic: "instruments",
    effective: { en: "Effective 1 Jan 2018 · replaced IAS 39 (recognition & measurement)", ar: "سارٍ من ١ يناير ٢٠١٨ · حل محل IAS 39 (الاعتراف والقياس)" },
    replaces: { en: "Phases in over IAS 39 (classification, impairment, hedge accounting)", ar: "يحل تدريجيًا محل IAS 39 (التصنيف، الانخفاض، محاسبة التغطية)" },
    blocks: [
      { kind: "h", text: { en: "Objective & the three pillars", ar: "الهدف والركائز الثلاث" } },
      {
        kind: "p",
        text: {
          en: "How to recognise, classify, measure, impair and derecognise financial assets, financial liabilities and equity. Three pillars: business model + cash-flow characteristics (classification), expected credit losses (impairment), and a rebuilt hedge model.",
          ar: "كيفية الاعتراف بالأصول والالتزامات المالية وأدوات حقوق الملكية وتصنيفها وقياسها وقياس انخفاضها وإنهاء الاعتراف بها. ثلاث ركائز: النموذج التجاري + خصائص التدفقات (التصنيف)، وخسائر الائتمان المتوقعة (الانخفاض)، ونموذج تغطية معاد بناؤه.",
        },
      },
      { kind: "h", text: { en: "Classifying financial assets", ar: "تصنيف الأصول المالية" } },
      {
        kind: "tree",
        root: { en: "Debt instrument — two tests", ar: "أداة دين — اختباران" },
        branches: [
          {
            when: { en: "Held to COLLECT contractual cash flows + payments are SOLELY principal & interest (SPPI)", ar: "محتفظ بها لتحصيل التدفقات التعاقدية + مدفوعات من أصل وفوائد فقط" },
            then: { en: "AMORTISED COST — effective-interest method (and OCI option if also held for sale)", ar: "التكلفة المطفأة — طريقة الفائدة الفعلية (مع خيار الدخل الشامل إن كانت معروضة للبيع أيضًا)", red: true },
          },
          {
            when: { en: "Held to collect AND sell (SPPI passes too)", ar: "محتفظ بها للتحصيل والبيع (وتجتاز الاختبار)" },
            then: { en: "FAVOCI — fair value through OCI, recycling on disposal", ar: "قيمة عادلة عبر الدخل الشامل — مع إعادة تدوير عند الاستبعاد", red: true },
          },
          {
            when: { en: "Any other business model, or SPPI FAILS (equity, gold, funds, contractual-linkage notes)", ar: "أي نموذج آخر، أو يفشل الاختبار (أسهم، ذهب، صناديق)" },
            then: { en: "FVTPL — fair value through profit or loss (the default bucket)", ar: "قيمة عادلة عبر الأرباح والخسائر — الفئة الافتراضية", red: true },
          },
          {
            when: { en: "EQUITY investment", ar: "استثمار في حقوق ملكية" },
            then: { en: "FVTPL always — with an IRREVOCABLE OCI election at inception (no recycling, no ECL) for non-trading holdings", ar: "قيمة عادلة بالأرباح دائمًا — مع خيار لا رجعة فيه للدخل الشامل وقت نشأة الاستثمار (بلا إعادة تدوير ولا خسائر ائتمان) لغير المحتفظ بها للمتاجرة", red: true },
          },
        ],
      },
      { kind: "h", text: { en: "Impairment — the ECL ladder", ar: "الانخفاض — سلم الخسائر المتوقعة" } },
      {
        kind: "steps",
        items: [
          { en: "Stage 1 — performing: 12-month ECL; interest on the GROSS carrying amount", ar: "المرحلة ١ — سوية: خسائر ١٢ شهرًا؛ والفوائد على القيمة الدفترية الإجمالية" },
          { en: "Stage 2 — credit-impaired risk increased SIGNIFICANTLY since initial recognition (or 30+ days past due rebuttable presumption): LIFETIME ECL; interest still on gross", ar: "المرحلة ٢ — تزايد مخاطر الائتمان جوهريًا منذ الاعتراف الابتدائي (أو تجاوز ٣٠ يومًا افتراضًا قابلًا للدحض): خسائر العمر كله؛ والفوائد على الإجمالي بعد" },
          { en: "Stage 3 — credit-impaired: lifetime ECL; interest on the NET (carrying − loss allowance) amount", ar: "المرحلة ٣ — معانٍ ائتمانيًا: خسائر العمر؛ والفوائد على الصافي (الدفترية − مخصص الخسارة)" },
          { en: "Simplified lifetime approach (no staging) for trade receivables, contract assets, lease receivables", ar: "نهج مبسط بخسائر العمر مباشرة (بلا مراحل) للمدينين التجاريين وأصول العقود ومديني الإيجار" },
        ],
      },
      { kind: "h", text: { en: "Liabilities & derecognition", ar: "الالتزامات وإنهاء الاعتراف" } },
      {
        kind: "list",
        items: [
          { en: "Financial liabilities: amortised cost (most) or FVTPL (trading, or the fair-value OPTION); own-credit movements on the FVO liability → OCI", ar: "الالتزامات المالية: تكلفة مطفاة (الأغلب) أو قيمة عادلة بالأرباح (متاجرة أو بالخيار)؛ وتغيرات مخاطر الائتمان الذاتية بالخيار ← الدخل الشامل" },
          { en: "Derecognition of an ASSET: when the contractual rights to the cash flows EXPIRE, or the entity transfers the risks & rewards — pass-through & continuing-involvement tests for securitisations", ar: "إنهاء الاعتراف بالأصل: عند انقضاء الحقوق التعاقدية في التدفقات أو نقل المخاطر والمنافع — مع اختبارات المرور والتورط المستمر للتوريق" },
          { en: "Modification of a liability: derecognise when the terms differ SUBSTANTIALLY (10% cash-flow test on the old vs new); otherwise adjust the carrying amount and run the difference through P&L", ar: "تعديل الالتزام: يُنهى الاعتراف عند اختلاف الشروط جوهريًا (اختبار ١٠٪ للتدفقات)؛ وإلا تعدل القيمة الدفترية ويقيد الفرق بالأرباح" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "The SPPI test asks whether the cash flows are SOLELY payments of principal and interest on the principal outstanding — equity instruments can NEVER pass it; neither can features with real leverage (gold-linked notes, contractual-linkage notes).",
          ar: "اختبار أصل وفائدة يسأل: هل التدفقات سدادًا لأصل وفوائد على الأصل القائم فقط؟ فأسهم حقوق الموية لا تجتازه أبدًا — ولا الأوعية ذات الرافعة الحقيقية (أوراق مرتبطة بالذهب أو بترتيب تعاقدي).",
        },
      },
    ],
  },

  {
    code: "IFRS 7",
    title: { en: "Financial Instruments: Disclosures", ar: "الأدوات المالية: الإفصاحات" },
    topic: "instruments",
    effective: { en: "Effective 1 Jan 2007 · amended for IFRS 9 & IFRS 13", ar: "سارٍ من ١ يناير ٢٠٠٧ · معدل لـ IFRS 9 وIFRS 13" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "Disclosures that let users evaluate the SIGNIFICANCE of financial instruments for the entity's position and performance, and the nature and extent of the RISKS arising from them — qualitative (how risk is managed) and quantitative (numbers, sensitivity).",
          ar: "إفصاحات تمكن المستخدمين من تقدير أهمية الأدوات المالية لمركز المنشأة وأدائها، وطبيعة المخاطر الناشئة عنها ومداها — كيفيًا (كيف تُدار المخاطر) وكميًا (أرقام وحساسية).",
        },
      },
      { kind: "h", text: { en: "The three disclosure families", ar: "عائلات الإفصاح الثلاث" } },
      {
        kind: "list",
        items: [
          { en: "SIGNIFICANCE: balance-sheet categories (amortised cost / FVOCI / FVTPL), income & OCI, reclassifications, derecognitions, collateral, allowance & credit-risk-movement tables, compound instruments", ar: "الأهمية: فئات الميزانية (تكلفة مطفاة / قيمة عادلة بدخل شامل / قيمة عادلة بالأرباح)، والإيراد والدخل الشامل، وإعادة التبويب، وإنهاء الاعتراف، والضمانات، وجداول حركة مخصصات الائتمان" },
          { en: "FAIR VALUE: level 1 (quoted) / level 2 (observable inputs) / level 3 (unobservable) hierarchy, transfers between levels, movements in level-3 instruments, valuation techniques", ar: "القيمة العادلة: هرم المستوى الأول (مدرج) والثاني (مدخلات يمكن ملاحظتها) والثالث (غير قابلة للملاحظة)، والانتقالات بين المستويات، وحركات المستوى الثالث، وأساليب التقدير" },
          { en: "RISK & MANAGEMENT: credit risk (collateral held, concentrations, terms), liquidity risk (maturity analysis of undiscounted cash flows), market risk (sensitivity analysis for FX / interest / price)", ar: "المخاطر وإدارتها: مخاطر الائتمان (الضمانات، التركزات، الآجال)، والسيولة (تحليل استحقاق تدفقات غير مخصومة)، ومخاطر السوق (تحليل حساسية العملة والفائدة والسعر)" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "A capital-management disclosure (IAS 1.134 — capital targets, policies, changes) completes the picture for banks and leveraged entities: the three risk classes are always tested with a 'which disclosure answers which risk?' framing.",
          ar: "يكمل الصورة إفصاح إدارة رأس المال (IAS 1.134 — المستهدفات والسياسات والتغيرات) للبنوك والمنشآت المرفوعة ماليًا: وفئات المخاطر الثلاث تختبر دائمًا بإطار «أي إفصاح يجيب عن أي خطر؟».",
        },
      },
    ],
  },

  {
    code: "IAS 32",
    title: { en: "Financial Instruments: Presentation", ar: "الأدوات المالية: العرض" },
    topic: "instruments",
    effective: { en: "Effective 1 Jan 2005 · amended 2020 (fixed-for-fixed & costs)", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل ٢٠٢٠ (الثابت مقابل الثابت والتكاليف)" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "Decide whether an instrument is a FINANCIAL LIABILITY or EQUITY — the classic substance-over-form test — plus the presentation of compound instruments, treasury shares, interest/dividends and offsetting.",
          ar: "تحديد ما إذا كانت الأداة التزامًا ماليًا أم حقًا من حقوق الملكية — اختبار الجوهر على الشكل الشهير — إضافة إلى عرض الأدوات المركبة وأسهم الخزينة والفوائد والتوزيعات والمقاصة.",
        },
      },
      { kind: "h", text: { en: "The liability/equity test", ar: "اختبار الالتزام مقابل حقوق الملكية" } },
      {
        kind: "tree",
        root: { en: "Is there a CONTRACTUAL OBLIGATION…?", ar: "هل يوجد التزام تعاقدي…؟" },
        branches: [
          {
            when: { en: "…to deliver cash or another financial asset the entity CANNOT avoid (redemption on demand, mandatory coupon, consolidation failure)", ar: "…بتسليم نقد أو أصل مالي آخر لا يمكن التجنب (استرداد عند الطلب، كوبون إلزامي)" },
            then: { en: "FINANCIAL LIABILITY — even if legally share capital, even if the payment is contingent", ar: "التزام مالي — ولو كان قانونًا أسهمًا رأسمالية، ولو كان السداد contingentًا", red: true },
          },
          {
            when: { en: "Only a RIGHT (puttable instruments aside) — settlement in a variable number of own shares at a FIXED price (fixed-for-fixed)", ar: "مجرد حق (عدا القابلة للرد) — تسوية بعدد متغير من الأسهم الذاتية بسعر ثابت (الثابت مقابل الثابت)" },
            then: { en: "EQUITY — the number of shares varies so no fixed obligation arises", ar: "حقوق ملكية — يتغير عدد الأسهم فلا ينشأ التزام بمبلغ ثابت", red: true },
          },
          {
            when: { en: "Obligation to settle in a FIXED number of own shares (net or gross)", ar: "التزام بالتسوية بعدد ثابت من الأسهم الذاتية" },
            then: { en: "FINANCIAL LIABILITY (the 'share forward' trap: fixed shares = fixed obligation)", ar: "التزام مالي (فخ الشراء الآجل للأسهم: عدد ثابت = التزام ثابت)", red: true },
          },
        ],
      },
      { kind: "h", text: { en: "Compound instruments & the rest", ar: "الأدوات المركبة والبقية" } },
      {
        kind: "steps",
        items: [
          { en: "Split a convertible bond: liability = PV of the coupons + principal (market rate for similar non-convertible debt); equity = the residual (the option value)", ar: "يقسم السند القابل للتحويل: الالتزام = القيمة الحالية للكوبونات والأصل (بمعدل دين مماثل غير قابل للتحويل)؛ وحقوق الملكية = البواقي (قيمة الخيار)" },
          { en: "Treasury shares (own equity bought back) → deducted from equity, never an asset; gains/losses on own equity NEVER through P&L", ar: "أسهم الخزينة تخصم من حقوق الملكية ولا تكون أصلًا أبدًا؛ وأرباح/خسائر حقوق الملكية الذاتية لا تمر بالأرباح أبدًا" },
          { en: "Interest, dividends, gains & losses on a LIABILITY-classified instrument → P&L as income/expense; on an EQUITY-classified one → equity (statement of changes)", ar: "فوائد وتوزيعات وفروق الالتزام ← الأرباح والخسائر؛ وما كان منها عن أداة حقوق ملكية ← قائمة التغيرات في حقوق الملكية" },
          { en: "Offsetting requires a LEGAL RIGHT of set-off + the intention to settle net (otherwise present gross)", ar: "المقاصة تقتضي حقًا قانونيًا بالقاص + نية التسوية الصافية (وإلا يعرض إجماليًا)" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "The 2020 amendment allows presenting the extinguishment difference of a liability-classified instrument (e.g. early redemption of a convertible) using a two-step approach for transaction costs attributable to the equity component.",
          ar: "يتيح تعديل ٢٠٢٠ عرض فرق إنهاء أداة مصنفة التزامًا (كالاسترداد المبكر لسند قابل للتحويل) بأسلوب الخطوتين لتكاليف المعاملات المنسوبة لمكون حقوق الملكية.",
        },
      },
    ],
  },

  {
    code: "IAS 39",
    title: { en: "Financial Instruments: Recognition and Measurement (legacy)", ar: "الأدوات المالية: الاعتراف والقياس (القديم)" },
    topic: "instruments",
    effective: { en: "Superseded by IFRS 9 for annual periods starting on/after 1 Jan 2018", ar: "ألغي بـ IFRS 9 للفترات التي تبدأ في ١ يناير ٢٠١٨ أو بعده" },
    replaces: { en: "Still cited for unamortised-cost comparisons and hedge docs pre-IFRS 9", ar: "يشار إليه للمقارنات التاريخية ووثائق التغطية قبل IFRS 9" },
    blocks: [
      { kind: "h", text: { en: "Why it still matters", ar: "لماذا يظل مهمًا" } },
      {
        kind: "p",
        text: {
          en: "IAS 39 has been withdrawn, but examiners and real-world comparatives still probe its vocabulary: the four old categories, the incurred-loss model and the 80–125% effectiveness bright line — knowing the CONTRAST with IFRS 9 is the point.",
          ar: "ألغي IAS 39، لكن الممتحنين والمقارنات الواقعية ما زالت تختبر مفرداته: الفئات الأربع القديمة، ونموذج الخسائر المتكبدة، وخط ٨٠–١٢٥٪ للفاعلية — والغاية هي معرفة التقابل مع IFRS 9.",
        },
      },
      {
        kind: "tree",
        root: { en: "Old category", ar: "الفئة القديمة" },
        branches: [
          {
            when: { en: "Held-to-maturity / loans & receivables", ar: "محتفظ بها حتى الاستحقاق / قروض ومدينون" },
            then: { en: "→ IFRS 9 amortised cost (business model + SPPI now decides)", ar: "← تكلفة مطفاة وفق IFRS 9 (بالنموذج التجاري واختبار أصل وفائدة)", red: true },
          },
          {
            when: { en: "Available-for-sale (equities measured at FV through equity)", ar: "متاح للبيع (أسهم بقيمة عادلة عبر حقوق الملكية)" },
            then: { en: "→ FVTPL default with an irrevocable OCI election (no recycling either way)", ar: "← قيمة عادلة بالأرباح مع خيار دخل شامل لا رجعة فيه", red: true },
          },
          {
            when: { en: "Fair value through profit or loss (held for trading / FVO)", ar: "قيمة عادلة عبر الأرباح (متاجرة / بالخيار)" },
            then: { en: "→ FVTPL under IFRS 9 unchanged", ar: "← تبقى بالأرباح دون تغيير", red: true },
          },
        ],
      },
      {
        kind: "list",
        items: [
          { en: "Impairment was INCURRED-loss (a loss event must already have happened) → IFRS 9 replaced it with forward-looking ECL, the single biggest conceptual jump", ar: "كان الانخفاض بمنوذج الخسارة المتكبدة (حدث خسارة وقع فعلًا) ← واستبدلته IFRS 9 بالخسائر المتوقعة الاستباقية — وهي القفزة المفاهيمية الكبرى" },
          { en: "Hedge effectiveness: 80–125% bright line + prospective & retrospective tests → IFRS 9 requires only a qualitative economic relationship, no bright line", ar: "فاعلية التغطية: خط ٨٠–١٢٥٪ واختباران استباقي وارتدادي ← و IFRS 9 تكفيها علاقة اقتصادية كيفية بلا خط لامع" },
          { en: "Reclassification of financial assets out of FVTPL was BANNED (rare exceptions) → IFRS 9 allows reclassification when the BUSINESS MODEL changes", ar: "كانت إعادة تبويب الأصول من القيمة العادلة محظورة (باستثناءات نادرة) ← و IFRS 9 تجيزها عند تغير النموذج التجاري" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Exam framing: if a question says 'the entity has not yet adopted IFRS 9' it is probing IAS 39 vocabulary — HTM, AFS, FVTPL — and usually wants the contrast with the business-model + SPPI world. Do not answer with IFRS 9 categories for a pre-2018 scenario unless asked to restate.",
          ar: "إطار الامتحان: إن ذكر السؤال أن المنشأة لم تتبنَّ IFRS 9 بعد فهو يختبر مفردات IAS 39 — محتفظ بها حتى الاستحقاق، متاح للبيع، قيمة عادلة بالأرباح — ويريد غالبًا التقابل مع عالم النموذج التجاري واختبار أصل وفائدة. ولا تجب بفئات IFRS 9 لسيناريو قبل ٢٠١٨ ما لم يُطلب منك إعادة البيان.",
        },
      },
    ],
  },

  {
    code: "IFRS 13",
    title: { en: "Fair Value Measurement", ar: "قياس القيمة العادلة" },
    topic: "instruments",
    effective: { en: "Effective 1 Jan 2013 · one framework for every fair value in IFRS", ar: "سارٍ من ١ يناير ٢٠١٣ · إطار واحد لكل قيمة عادلة في المعايير" },
    blocks: [
      { kind: "h", text: { en: "Objective & definition", ar: "الهدف والتعريف" } },
      {
        kind: "p",
        text: {
          en: "Fair value is the price that would be received to sell an asset or paid to transfer a liability in an ORDERLY transaction between MARKET PARTICIPANTS at the measurement date — an EXIT price, not an entry price, from the perspective of market participants, not the entity.",
          ar: "القيمة العادلة هي الثمن المتلقى لبيع أصل أو المدفوع لنقل التزام في معاملة منتظمة بين مشاركي السوق بتاريخ القياس — سعر خروج لا سعر دخول، وبمنظور مشاركي السوق لا المنشأة.",
        },
      },
      { kind: "h", text: { en: "The valuation techniques", ar: "أساليب التقدير" } },
      {
        kind: "tree",
        root: { en: "How to estimate the exit price", ar: "كيف يقدر سعر الخروج" },
        branches: [
          {
            when: { en: "MARKET approach — prices of comparable transactions (multiple of earnings for a business, matrix pricing)", ar: "أسلوب السوق — أسعار معاملات مماثلة (مضاعفات الأرباح لعملية، تسعير مصفوفي)" },
            then: { en: "Most objective when an active market exists", ar: "الأكثر موضوعية عند وجود سوق نشطة", red: true },
          },
          {
            when: { en: "INCOME approach — present value techniques: DCF, option-pricing models (Black-Scholes, binomial), multi-period excess earnings", ar: "أسلوب الدخل — قيمة حالية: تدفقات مخصومة، نماذج خيارات (بلاك-شولز، ثنائية)، عوائد زائدة متعددة الفترات" },
            then: { en: "Capture the amount market participants would pay for future cash flows", ar: "يلتقط ما سيدفعه مشاركو السوق مقابل التدفقات المستقبلية", red: true },
          },
          {
            when: { en: "COST approach — current replacement cost (mostly for PPE in use)", ar: "أسلوب التكلفة — تكلفة الاستبدال الحالية (أغلبًا للممتلكات المستخدمة)" },
            then: { en: "Value = replacement cost minus deductions for obsolescence/wear", ar: "القيمة = تكلفة الاستبدال − استقطاعات التقادم والاستهلاك", red: true },
          },
        ],
      },
      { kind: "h", text: { en: "The input hierarchy", ar: "هرم المدخلات" } },
      {
        kind: "steps",
        items: [
          { en: "Level 1 — QUOTED prices in active markets for identical assets/liabilities (unadjusted, highest priority)", ar: "المستوى ١ — أسعار مدرجة بسوق نشطة لأصول/التزامات مطابقة (دون تعديل، الأولوية العليا)" },
          { en: "Level 2 — inputs OBSERVABLE other than level-1 quotes: quoted prices for similar items, yield curves, volatilities,correlation", ar: "المستوى ٢ — مدخلات يمكن ملاحظتها عدا المدرجة بالمستوى الأول: أسعار بنود مماثلة، منحنيات عوائد، تقلبات، ارتباطات" },
          { en: "Level 3 — UNOBSERVABLE inputs (entity's own assumptions about what market participants would use)", ar: "المستوى ٣ — مدخلات غير قابلة للملاحظة (افتراضات المنشأة عما استخدمه مشاركو السوق)" },
          { en: "Maximise observable inputs, minimise unobservable — and use the price within the transaction that is representative (day-1 vs other legs)", ar: "تعظيم المدخلات القابلة للملاحظة وتقليل غيرها — واستخدام السعر التمثيلي من المعاملة" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Highest-and-best-use applies to NON-FINANCIAL assets (the land under a factory might be worth more as a development site); the in-use vs in-exchange presumption drives the valuation premise, and the FV measurement assumes the asset's current condition.",
          ar: "قاعدة أفضل استخدام وأعلاه تسري على الأصول غير المالية (أرض المصنع قد تساوي أكثر كموقع تطوير)؛ والافتراض بين «الاستخدام» و«التبادل» يحدد أساس التقدير، مع افتراض الحالة الراهنة للأصل.",
        },
      },
    ],
  },
]
