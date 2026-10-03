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
        en: "IFRS 10 replaced the old 'control = majority of voting rights' checklist with a PRINCIPLES-BASED model applied uniformly to any investee — companies, partnerships, structured entities. Present consolidated statements for every entity with a SUBSIDIARY (except the parent-exemption cases under IAS 27.10-ish logic), and consolidate EVERY subsidiary the parent controls, without exceptions for 'different activities' or minority interests.",
        ar: "أبدل IFRS 10 قائمة «السيطرة = أغلبية حقوق التصويت» بنموذج مبادئ يطبق موحدًا على أي مستثمَر فيه — شركات، شراكمات، كيانات مهيكلة. وتقدم قوائم مجمعة لكل منشأة لها تابعة، وتجمع كل تابعة تسيطر عليها الأم دون استثناءات «الأنشطة المختلفة» أو الحصص الصغيرة.",
      },
    },
    { kind: "h", text: { en: "Control — the three elements", ar: "السيطرة — العناصر الثلاثة" } },
    {
      kind: "tree",
      root: { en: "An investor CONTROLS an investee when ALL THREE hold (and exist CURRENTLY)", ar: "يسيطر المستثمر عند تحقق الثلاثة (وقيامها فعليًا الآن)" },
      branches: [
        {
          when: { en: "1. POWER over the investee — existing rights that give the CURRENT ability to direct the RELEVANT ACTIVITIES (those that significantly affect the returns)", ar: "١. السلطة — حقوق قائمة تمنح القدرة الحالية على توجيه الأنشطة المؤثرة (التي تمس العوائد جوهريًا)" },
          then: { en: "Power without exposure, or exposure without power — either alone is NOT control", ar: "سلطة بلا انكشاف أو انكشاف بلا سلطة — كلٌّ وحده ليس سيطرة", red: true },
        },
        {
          when: { en: "2. EXPOSURE to variable returns — dividends, fees, residual interests, synergies, reputational… any variability", ar: "٢. الانكشاف على عوائد متغيرة — توزيعات، رسوم، مصالح متبقية، تآزر، سمعة… أي تغير" },
          then: { en: "A fixed-fee manager has NO variable returns → not control (unless remuneration is variable)", ar: "المدير بأجر ثابت لا عوائد متغيرة له ← لا سيطرة", red: true },
        },
        {
          when: { en: "3. LINKAGE — the ability to USE the power to affect those returns", ar: "٣. الرابط — القدرة على استخدام السلطة للتأثير في العوائد" },
          then: { en: "The decisive question when rights are shared or contested", ar: "السؤال الحاسم عند تشارك الحقوق أو تنازعها", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Power — the voting-rights ladder", ar: "السلطة — سلم حقوق التصويت" } },
    {
      kind: "steps",
      items: [
        { en: "HOLD MAJORITY of voting rights → presumed power (rebuttable: a 70% holder whose 30% minority outvotes it by contract)", ar: "حيازة أغلبية حقوق التصويت ← سلطة مفترضة (قابلة للدحض: حائز ٧٠٪ يغلبهم تعاقدًا شريك الـ٣٠٪)" },
        { en: "MINORITY but the rest are dispersed (highest turnout ~40%) + historical voting patterns → DE FACTO control — the most-tested IFRS 10 judgement", ar: "أقلية مع تشتت الباقين (أعلى مشاركة نحو ٤٠٪) وأنماط تاريخية ← سيطرة فعلية — أشهر أحكام IFRS 10 امتحانيًا" },
        { en: "POTENTIAL VOTING RIGHTS (options, converts, warrants) count when CURRENTLY EXERCISABLE — even out-of-the-money ones get weighed", ar: "حقوق التصويت المحتملة (خيارات، تحويل، وثائق) تُعد عند قابلية الممارسة حاليًا — ولو كانت خارج النقود" },
        { en: "CONTRACTUAL ARRANGEMENTS: a manager with decision-making rights may be an AGENT, not a principal — see the agency split", ar: "الترتيبات التعاقدية: صاحب حقوق القرار قد يكون وكيلا لا أصيلا — انظر تقسيم الوكالة" },
        { en: "Structured entities: power via dissolution/veto rights over budgets or appointments — 'relevant activities' may be passive (auto-pilot decisions)", ar: "الكيانات المهيكلة: سلطة عبر حقوق الحل أو الفيتو على الموازنات والتعيينات — والأنشطة المؤثرة قد تكون سلبية" },
      ],
    },
    { kind: "h", text: { en: "Rights taxonomy & the agent test", ar: "تصنيف الحقوق واختبار الوكيل" } },
    {
      kind: "list",
      items: [
        { en: "SUBSTANTIVE rights (barriers low, benefits from exercising) count; PROTECTIVE rights (amending the constitution, appointing liquidators) NEVER give power", ar: "الحقوق الجوهرية (حواجز منخفضة ومنافع للممارسة) تُعد؛ والوقائية (تعديل النظام، تعيين مصفين) لا تمنح سلطة أبدًا" },
        { en: "AGENT vs PRINCIPAL: an agent holds power on behalf of others → the PRINCIPAL controls. Decisive: the decision-maker's SCOPE (all activities or a subset?), its exposure to variability, and the remuneration's link to returns", ar: "وكيل مقابل أصيل: الوكيل يحمل السلطة لغيره ← الأصيل يسيطر. والحاسم: نطاق صانع القرار، وانكشافه للتغير، وارتباط أجره بالعوائد" },
        { en: "An asset manager holding widespread stakes for fees is usually an AGENT; a manager with disproportionate returns / hold-the-rest-in / removal rights weightings may be a principal", ar: "مدير الأصول برسوم مقابل حصص متناثرة وكيل عادة؛ وذا العوائد الجائرة أو حقوق العزل الملاءمة قد يكون أصيلًا" },
        { en: "DELEGATION: related-party ties and removal rights feed the overall assessment — a single factor never decides", ar: "التفويض: روابط الأطراف المرتبطة وحقوق العزلة تغذي التقييم الكلي — ولا يحسم عامل منفرد" },
      ],
    },
    { kind: "h", text: { en: "Consolidation procedures", ar: "إجراءات التجميع" } },
    {
      kind: "list",
      items: [
        { en: "LINE-BY-LINE addition: assets, liabilities, income & expenses of every subsidiary — full 100% regardless of the parent's %; NCI shown separately within equity and profit", ar: "الجمع بندًا بندًا: أصول والتزامات وإيرادات ومصروفات كل تابعة بالكامل؛ والحصة غير المسيطرة تظهر منفصلة في حقوق الملكية والأرباح" },
        { en: "Uniform ACCOUNTING POLICIES: align the subsidiary's policies to the group's; realign if they differ", ar: "توحيد السياسات: تعدل سياسات التابعة إلى سياسات المجموعة" },
        { en: "Reporting-date alignment: same date, or adjust for significant transactions in a gap not exceeding THREE MONTHS", ar: "مواكبة تواريخ التقرير: ذات التاريخ أو تعديل بحد ثلاثة أشهر للفجوة" },
        { en: "LOSSES beyond the NCI's share: continue allocating them even if the NCI's balance goes NEGATIVE (unless the NCI is not obliged to fund)", ar: "الخسائر فوق حصة الحصة غير المسيطرة: يستمر توزيعها ولو سال مركزها (ما لم تكن غير ملزمة بالتمويل)" },
        { en: "Measure goodwill & the acquisition-date FVs ONCE (IFRS 3); afterwards, cash flows and P&L consolidate at actual book values", ar: "تقاس الشهرة والعادلات مرة عند الاستحواذ (IFRS 3)؛ ثم يجمع لاحقًا بالقيم الدفترية الفعلية" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Post-acquisition group entries (the recurring set)", ar: "قيود المجموعة بعد الاستحواذ (المجموعة المتكررة)" },
      rows: [
        { dr: { en: "Equity — NCI (their share of profit)", ar: "حقوق الملكية — حصة غير مسيطرة (نصيبها من الربح)" }, cr: { en: "NCI in P&L (group P/L split)", ar: "نصيب الحصة بالأرباح المجمعة" }, red: true },
        { dr: { en: "Revenue / expenses — intragroup", ar: "إيراد/مصروف — داخل المجموعة" }, cr: { en: "Same line reversed (elimination on consolidation)", ar: "السطر ذاته معكوسًا (استبعاد داخلي)" }, red: true },
        { dr: { en: "NCI balance (dividends paid to them)", ar: "رصيد الحصة (توزيعات مدفوعة لها)" }, cr: { en: "Equity — NCI / financial statements of the sub", ar: "حقوق الملكية — الحصة" } },
        { cr: { en: "Intragroup balances (receivable/payable) ALWAYS eliminate in full — and the CURRENT-ness follows the sub's own classification", ar: "الأرصدة الداخلية تستبعد كاملة دائمًا — والتبويب متداول/غير متداول يتبع التابعة ذاتها" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Losing control — the IFRS 10.25 cascade", ar: "فقد السيطرة — تسلسل IFRS 10.25" } },
    {
      kind: "steps",
      items: [
        { en: "DERECOGNISE the assets, liabilities and NCI related to the former subsidiary (goodwill included)", ar: "استبعد الأصول والالتزامات والحصة غير المسيطرة المرتبطة بالتابعة السابقة (ومنها الشهرة)" },
        { en: "RECOGNISE any RETAINED interest at its FAIR VALUE at the date control is lost (a fresh-start measurement — the interest becomes an IFRS 9 asset or IAS 28 investment)", ar: "اعترف بأي حصة محتفظ بها بالقيمة العادلة بتاريخ الفقد (قياس جديد — فتصبح أصل IFRS 9 أو استثمار IAS 28)" },
        { en: "Recognise the FAIR VALUE of any consideration received; recognise in P&L the difference: (consideration + retained FV) − (former NCI + carrying of the former sub's net assets)", ar: "اعترف بعادلة أي مقابل مقبوض؛ وبالفارق في الأرباح: (المقابل + عادلة المحتفظ) − (الحصة غير المسيطرة + دفترية صافي أصول التابعة)" },
        { en: "Recycle to P&L the OCI amounts that relate to the former subsidiary (e.g. the CTA on its translation) — partial loss of control: reuse the same cascade on the PORTION disposed (gain to P&L, CTA recycled proportionally; retrospective restatement NO)", ar: "أعد تدوير ما يمس التابعة السابقة من الدخل الشامل (كفروق ترجمتها) — وفي الفقد الجزئي: ذات التسلسل على الجزء المتخرد منه فقط" },
      ],
    },
    { kind: "h", text: { en: "Investment entities — the FVTPL exception", ar: "كيانات الاستثمار — استثناء العادلة" } },
    {
      kind: "tree",
      root: { en: "Does the parent qualify as an INVESTMENT ENTITY?", ar: "هل تنطبق صفة كيان الاستثمار على الأم؟" },
      branches: [
        {
          when: { en: "Funds from MULTIPLE investors for investment purposes; ownership interests in the form of equity/partnership units; a stated exit strategy (or the assets are managed on fair value)", ar: "أموال من مستثمرين متعددين لغرض الاستثمار؛ وحصص ملكية بأسهم أو وحدات شراكة؛ واستراتيجية خروج معلنة" },
          then: { en: "Investment entity → measure subsidiaries (except those providing investment-related services) at FAIR VALUE THROUGH P&L — NO consolidation of them", ar: "كيان استثمار ← تقاس التابعات (عدا الخدمات المرتبطة بالاستثمار) بالعادلة عبر الأرباح — بلا تجميع", red: true },
        },
        {
          when: { en: "An investment-entity subsidiary that itself holds investments → also exempt from consolidation if it meets the definition", ar: "تابعة لكيان استثمار تحمل استثمارات بدورها ← معفاة أيضًا إن استوفت التعريف" },
          then: { en: "The exemption cascades down the chain", ar: "الإعفاء يتسلسل في السلسلة" },
        },
        {
          when: { en: "A NON-investment-entity parent holding an investment-entity subsidiary: consolidate it BUT measure its controlled investments at FVTPL (fair-value-in-lieu treatment)", ar: "أم غير استثمارية تحمل تابعة استثمارية: تجمعها لكن تقيس استثماراتها الخاضعة للسيطرة بالعادلة عبر الأرباح" },
          then: { en: "'Consolidate the entity, FVTPL the holdings' — the middle path", ar: "«جمع الكيان وقيس محتفظاته بالعادلة» — الطريق الوسط", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Disclosures & related standards", ar: "الإفصاحات والمعايير المرتبطة" } },
    {
      kind: "list",
      items: [
        { en: "IFRS 12 tells the interests story: significant judgements (de facto control!), the NCI, restricted subsidiaries, structured-entity involvements", ar: "يحكي IFRS 12 قصة الحصص: الأحكام الجوهرية (السيطرة الفعلية!)، والحصة غير المسيطرة، والتابعات المقيدة، والتورط في المهيكلة" },
        { en: "When control is LOST: the gain/loss line, the retained interest's FV, and the recycled OCI items", ar: "عند فقد السيطرة: سطر الربح/الخسارة، وعادلة المحتفظ به، والمعاد تدويره من الدخل الشامل" },
        { en: "Non-controlling interests' share of continuing vs discontinued operations", ar: "نصيب الحصة غير المسيطرة من العمليات المستمرة والمتوقفة" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "De facto control needs EVIDENCE: dispersion of the other holders (sizes, meeting patterns), the investor's own turnout history, and whether anyone ELSE can build a blocking coalition — write all three in the answer; a bare '<50% but I think so' earns nothing.",
        ar: "السيطرة الفعلية تحتاج دليلًا: تشتت الحائزين الآخرين (أحجامهم وأنماط اجتماعاتهم)، وسجل مشاركة المستثمر نفسه، وعجز غيره عن بناء ائتلاف حاجب — اكتب الثلاثة؛ فعبارة «أقل من ٥٠٪ لكن أرى ذلك» لا تساوي شيئًا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The loss-of-control formula is exam gold: (consideration + FV of retained) − (NCI at disposal + carrying of net assets incl. goodwill) → P&L; then recycle the related OCI. Learn it as ONE line with four terms.",
        ar: "معادلة فقد السيطرة ذهب امتحاني: (المقابل + عادلة المحتفظ) − (الحصة عند التخرد + دفترية الصافي ومنه الشهرة) ← الأرباح؛ ثم أعِد تدوير الدخل الشامل المرتبط. احفظها سطرًا واحدًا بأربعة حدود.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Majority presumption is rebuttable both ways — and the analysis is always the same three: power, exposure, linkage.",
        ar: "الأغلبية المفترضة قابلة للدحض في الاتجاهين — والتحليل واحد دائمًا: سلطة + انكشاف + رابط.",
      },
    },
  ],
}
