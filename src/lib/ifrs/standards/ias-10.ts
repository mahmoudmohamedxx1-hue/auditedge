/** IAS 10 — Events after the Reporting Period */

import type { Standard } from "../types"

export const IAS_10: Standard = {
  code: "IAS 10",
  title: { en: "Events after the Reporting Period", ar: "الأحداث اللاحقة لتاريخ التقرير" },
  topic: "presentation",
  effective: { en: "Effective 1 Jan 2010", ar: "سارٍ من ١ يناير ٢٠١٠" },
  blocks: [
    { kind: "h", text: { en: "Objective & the window", ar: "الهدف والنافذة الزمنية" } },
    {
      kind: "p",
      text: {
        en: "Events after the reporting period are ALL events (favourable and unfavourable) between the REPORTING DATE and the date the financial statements are AUTHORISED for issue. IAS 10 splits them into ADJUSTING events (conditions existed AT the reporting date → adjust the numbers) and NON-ADJUSTING events (conditions arose AFTER → disclose if material). The window ends at authorisation — not publication — and who authorised them and when must be disclosed.",
        ar: "الأحداث اللاحقة كل الأحداث (الملائمة وغير الملائمة) بين تاريخ التقرير وتاريخ اعتماد القوائم للإصدار. ويصنفها IAS 10 إلى: أحداث معدلة (الشروط وُجدت بتاريخ التقرير ← عدّل الأرقام) وأحداث غير معدلة (نشأت بعده ← أفصح إذا كانت جوهرية). وتنتهي النافذة بالاعتماد لا بالنشر، مع إفصاح عمن اعتمدها ومتى.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The authorisation date is when the board (or equivalent) signs off — supervisory-board approval AFTER that is NOT part of the window, because the reporting entity's own governance process has finished.",
        ar: "تاريخ الاعتماد هو إقرار مجلس الإدارة (أو ما يماثله) — واعتماد مجلس المراقبة بعده خارج النافذة لأن عملية الحوكمة انتهت.",
      },
    },
    { kind: "h", text: { en: "Adjusting events — conditions existed at the reporting date", ar: "الأحداث المعدلة — الشروط وُجدت بتاريخ التقرير" } },
    {
      kind: "list",
      items: [
        { en: "COURT ruling after the reporting date proving a present obligation at that date → settle the lawsuit provision (IAS 37) at the awarded amount", ar: "حكم قضائي بعد التقرير يثبت التزامًا قائمًا حينها ← عيّن مخصص القضية بالمبلغ المحكوم" },
        { en: "CUSTOMER BANKRUPTCY after the reporting date — because the customer was in financial difficulty AT the date → write the receivable down", ar: "إعسار عميل بعد التقرير لصعوبته المالية وقتها ← انقص قيمة المدين" },
        { en: "Sale of inventory AFTER the reporting date at a price proving NRV at the date was BELOW cost → write inventory down (IAS 2)", ar: "بيع مخزون بعد التقرير بسعر يثبت أن القيمة الصافية وقتها أدنى من التكلفة ← انقص المخزون" },
        { en: "Discovery of FRAUD or errors showing the statements were wrong", ar: "اكتشاف تدليس أو أخطاء تثبت خطأ القوائم" },
        { en: "Receipt of information showing an ASSET was impaired at the date (e.g. a fair-value decline, damage that pre-existed)", ar: "معلومة تثبت انخفاض قيمة أصل بتاريخ التقرير (هبوط قيمة عادلة، تلف سابق)" },
        { en: "Determination of the sale-purchase price of assets bought/sold before the date (or the eventual cost of an asset self-constructed)", ar: "تحديد سعر بيع/شراء أصول تعاقد عليها قبل التاريخ (أو التكلفة النهائية لأصل مُنشأ ذاتيًا)" },
        { en: "Evidence that the GOING-CONCERN assumption was inappropriate at the reporting date", ar: "دليل على عدم ملاءمة افتراض الاستمرارية بتاريخ التقرير" },
      ],
    },
    { kind: "h", text: { en: "Non-adjusting events — conditions arose afterwards", ar: "الأحداث غير المعدلة — نشأت بعده" } },
    {
      kind: "list",
      items: [
        { en: "DECLINE in market value of investments AFTER the date (sale or fair-value evidence post-date)", ar: "هبوط القيمة السوقية لاستثمارات بعد التاريخ" },
        { en: "ACQUISITION of a major subsidiary, or a major disposal, after the date", ar: "استحواذ على تابعة رئيسية أو تخرد جوهري بعد التاريخ" },
        { en: "Announced PLAN to restructure, or a major ordinary-share/bond issuance after the date", ar: "خطة إعادة هيكلة معلنة أو إصدار أسهم/سندات جوهري بعد التاريخ" },
        { en: "DESTRUCTION of assets by fire/flood after the date", ar: "تلف أصول بحريق أو سيول بعد التاريخ" },
        { en: "Dividends DECLARED after the reporting date — NOT a liability at the date", ar: "توزيعات مقررة بعد تاريخ التقرير — ليست التزامًا بتاريخه" },
      ],
    },
    { kind: "h", text: { en: "The master tree", ar: "الشجرة الحاكمة" } },
    {
      kind: "tree",
      root: { en: "Post-reporting-date event", ar: "حدث لاحق لتاريخ التقرير" },
      branches: [
        {
          when: { en: "Condition EXISTED at the reporting date (the event just provides EVIDENCE)", ar: "الحالة وُجدت بتاريخ التقرير (والحدث مجرد دليل)" },
          then: { en: "ADJUSTING → restate the reported numbers (assets, liabilities, equity) and recognise in P/L or OCI as appropriate", ar: "معدِّل ← اضبط الأرقام المفصح عنها واعترف بالأثر في الأرباح أو الدخل الشامل", red: true },
        },
        {
          when: { en: "Condition AROSE after the date", ar: "نشأت الحالة بعد التاريخ" },
          then: { en: "NON-ADJUSTING → disclose nature + estimated financial effect (or a statement that it cannot be made) IF material — no adjustment", ar: "غير معدِّل ← أفصح عن الطبيعة والأثر المالي المقدر إن كان جوهريًا — دون تعديل", red: true },
        },
        {
          when: { en: "It destroys the GOING-CONCERN basis after the date", ar: "يقوّض أساس الاستمرارية بعد التاريخ" },
          then: { en: "Do NOT prepare on a going-concern basis — this is the exception that DOES reach the statements", ar: "لا تعد القوائم على أساس الاستمرارية — هذا هو الاستثناء الذي يصل إلى القوائم", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Dividends — the classic trap", ar: "التوزيعات — الفخ الكلاسيكي" } },
    {
      kind: "p",
      text: {
        en: "Dividends declared AFTER the reporting date are NOT recognised as a LIABILITY at the date — because no obligation existed then. They are DISCLOSED (amount per share) and, per IAS 1, recognised in the period they are declared — usually directly in equity (statement of changes in equity), not P/L. The 2010 revision removed the old 'proposed dividend liability' forever; only interim dividends properly declared before the reporting date can be a liability.",
        ar: "التوزيعات المقررة بعد تاريخ التقرير لا تعترف التزامًا بتاريخه — إذ لا التزام قائم حينها؛ بل تُفصح (المبلغ لكل سهم) وتعترف في فترة إقرارها — عادة في حقوق الملكية مباشرة. وقد أزال تعديل ٢٠١٠ «التزام التوزيعات المقترحة» نهائيًا؛ ولا يكون التزامًا إلا توزيعات مرحلية مقررة سليمًا قبل التاريخ.",
      },
    },
    {
      kind: "journal",
      title: { en: "Adjusting entries (illustrative)", ar: "قيود معدلة (توضيحية)" },
      rows: [
        { dr: { en: "Provision for lawsuit (increase to award)", ar: "مخصص القضية (زيادة للمبلغ المحكوم)" }, cr: { en: "Retained earnings / prior-period adjustment", ar: "أرباح محتجزة / تسوية فترة سابقة" }, red: true },
        { dr: { en: "Retained earnings", ar: "أرباح محتجزة" }, cr: { en: "Trade receivable (customer insolvent — condition existed)", ar: "مدينون (عميل معسر — الحالة سابقة)" } },
        { cr: { en: "NO ENTRY: post-date fire, post-date share issue, post-date dividend declaration → disclosure only", ar: "لا قيد: حريق لاحق أو إصدار أسهم لاحق أو توزيعات مقررة لاحقًا ← إفصاح فقط" } },
      ],
    },
    {
      kind: "example",
      title: { en: "Two-way split of one story", ar: "قصصة واحدة بفرعين" },
      lines: [
        { en: "Inventory cost 80 · at the reporting date its NRV was expected to be 95", ar: "تكلفة المخزون ٨٠ · والقيمة الصافية المتوقعة بتاريخ التقرير ٩٥" },
        { en: "Case A: on 15 Feb (before authorisation) a fire destroys the goods → NON-adjusting (condition arose after) — disclose", ar: "الحالة أ: في ١٥ فبراير (قبل الاعتماد) حريق يتلف البضاعة ← غير معدِّل (نشأ بعده) — إفصاح" },
        { en: "Case B: on 15 Feb the entity signs a sale contract at 60 for goods of the SAME kind/condition → evidence of NRV at the date → WRITE DOWN to 60 (adjusting)", ar: "الحالة ب: في ١٥ فبراير عقد بيع بـ٦٠ لسلع من النوع والحالة ذاتهما ← دليل على القيمة الصافية وقتها ← انقص إلى ٦٠ (معدِّل)" },
        { en: "If the fire had destroyed goods ALREADY water-damaged at the date → the pre-existing condition makes the ADJUSTING analysis the right one", ar: "لو أتلف الحريق سلعًا كانت متضررة بالماء قبل التاريخ ← الحالة السابقة تجعل المعالجة المعدلة هي الصحيحة" },
      ],
    },
    { kind: "h", text: { en: "Going concern — the override that adjusts", ar: "الاستمرارية — الاستثناء الذي يعدّل" } },
    {
      kind: "p",
      text: {
        en: "If post-date events show management's intention to liquidate or cease trading, or that going concern is unrealistic, the statements are NOT prepared on a going-concern basis — even though the conditions arose after the date. IAS 10.14 is the only place a 'non-adjusting-timing' event changes the basis of the statements themselves. Disclose the basis used and why.",
        ar: "إذا أظهرت الأحداث اللاحقة نية التصفية أو التوقف أو انتفاء واقعية الاستمرارية، فلا تعد القوائم على أساسها — وإن نشأت الظروف بعد التاريخ. وهذا الموضع الوحيد الذي يغير فيه حدثٌ لاحق أساس القوائم ذاتها. أفصح عن الأساس المتبع وسببه.",
      },
    },
    { kind: "h", text: { en: "Disclosure checklist", ar: "قائمة الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "The DATE the statements were authorised and WHO issued the authorisation (shareholders' approval NOT needed)", ar: "تاريخ الاعتماد ومن أصدره (ولا يشترط موافقة الجمعية العامة)" },
        { en: "Non-adjusting material events: nature + estimated financial effect, or why estimation is impossible", ar: "الأحداث غير المعدلة الجوهرية: الطبيعة + الأثر المالي المقدر أو استحالة التقدير" },
        { en: "Going-concern material uncertainties arising from post-date events", ar: "عدم تأكد جوهري في الاستمرارية ناشئ عن أحداث لاحقة" },
        { en: "Updating disclosure when things change between authorisation and receipt of the statements? No — the window has closed; nothing after authorisation enters IAS 10", ar: "لا تحديث بعد الاعتماد — فالنافذة أُغلقت؛ وما بعد الاعتمان لا يدخل IAS 10" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "In the exam ask ONE question: 'did the condition exist at the reporting date?' — the answer sorts every scenario into adjusting vs non-adjusting. The event's DATE is only evidence; the CONDITION's origin decides.",
        ar: "اسأل في الامتحان سؤالًا واحدًا: «هل وُجدت الحالة بتاريخ التقرير؟» — الإجابة تصنف كل سيناريو. فتاريخ الحدث مجرد دليل؛ ومنشأ الحالة هو الفيصل.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Post-date bankruptcy of a customer who was HEALTHY at the date = non-adjusting (disclose); of a customer already in DIFFICULTY = adjusting (write down). Same event, different condition — the exam loves this pair.",
        ar: "إعسار عميل سليم بتاريخ التقرير = غير معدِّل (إفصاح)؛ وعميل متعثر سابقًا = معدِّل (انقاص). حدث واحد وحالتان — ثنائية محببة للامتحان.",
      },
    },
  ],
}
