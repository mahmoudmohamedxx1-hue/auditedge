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
        en: "Events after the reporting period are ALL events (favourable and unfavourable) between the REPORTING DATE and the date the financial statements are AUTHORISED for issue. IAS 10 splits them into ADJUSTING events (conditions existed AT the reporting date → adjust the numbers) and NON-ADJUSTING events (conditions arose AFTER → disclose if material). The window ends at authorisation — not publication — and who authorised the statements and when must be disclosed.",
        ar: "الأحداث اللاحقة لتاريخ التقرير هي كل الأحداث (الملائمة وغير الملائمة) بين تاريخ التقرير وتاريخ اعتماد القوائم المالية للإصدار. ويصنفها IAS 10 إلى: أحداث معدِّلة (الشروط وُجدت بتاريخ التقرير ← عدّل الأرقام) وأحداث غير معدِّلة (نشأت بعده ← أفصح إذا كانت جوهرية). وتنتهي النافذة بالاعتماد لا بالنشر، مع وجوب الإفصاح عمن اعتمد القوائم ومتى.",
      },
    },
    { kind: "h", text: { en: "The authorisation timeline", ar: "الخط الزمني للاعتماد" } },
    {
      kind: "p",
      text: {
        en: "The window is not a season — it is a precise governance corridor. It opens the day AFTER the reporting date and slams shut the moment those charged with governance (usually the board) AUTHORISE the statements for issue; everything after that — publication, the shareholders' meeting, the annual report's release — is outside IAS 10 for these statements. Events between authorisation and receipt by users may still matter to a regulator or a listing rule, but they never reopen the accounting window.",
        ar: "النافذة ليست موسمًا بل ممرًّا حوكميًا دقيقًا. تُفتح في اليوم التالي لتاريخ التقرير وتُغلق لحظة اعتماد القائمين على الحوكمة (مجلس الإدارة عادةً) للقوائم للإصدار؛ وكل ما بعد ذلك — النشر، والجمعية العامة، وإصدار التقرير السنوي — خارج IAS 10 بالنسبة لهذه القوائم. فالأحداث بين الاعتماد ووصول القوائم للمستخدمين قد تهم جهة رقابية أو قواعد القيد بالبورصة، لكنها لا تعيد فتح نافذة المحاسبة أبدًا.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "31 Dec — reporting date: the window OPENS for everything that happens from tomorrow", ar: "٣١ ديسمبر — تاريخ التقرير: تُفتح النافذة لكل ما يحدث من الغد" },
        { en: "10 Jan — warehouse fire: INSIDE the window (condition's origin decides adjusting vs not)", ar: "١٠ يناير — حريق مستودع: داخل النافذة (ومنشأ الحالة يحدد التعديل من عدمه)" },
        { en: "15 Mar — board authorises the statements: the window CLOSES — nothing later enters IAS 10", ar: "١٥ مارس — مجلس الإدارة يعتمد القوائم: تُغلق النافذة — ولا يدخل IAS 10 بعدها شيء" },
        { en: "1 Apr — publication: already outside — regulators may care, IAS 10 does not", ar: "١ أبريل — النشر: خارج النافذة بالفعل — قد تهم الجهات الرقابية ولا يعني IAS 10" },
        { en: "20 May — AGM approves: also outside; shareholders' approval is NOT part of authorisation", ar: "٢٠ مايو — الجمعية العمومية توافق: خارجها كذلك؛ فموافقة المساهمين ليست جزءًا من الاعتماد" },
      ],
    },
    {
      kind: "list",
      items: [
        { en: "WHO authorises: the board of directors — or the management board then the supervisory board in a two-tier system (both count as part of the entity's governance)", ar: "من يعتمد: مجلس الإدارة — أو مجلس الإدارة ثم مجلس المراقبة في النظام ذي المستويين (وكلاهما ضمن حوكمة المنشأة)" },
        { en: "WHO does NOT need to authorise: the shareholders — their approval happens after issue", ar: "من لا يشترط اعتماده: المساهمون — فموافقتهم تتم بعد الإصدار" },
        { en: "DISCLOSE: the authorisation DATE and WHO gave it — a one-line disclosure exams keep testing", ar: "أفصح: تاريخ الاعتماد ومن أصدره — إفصاح بسطر واحد لا يتوقف عنه الامتحان" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "The authorisation date is when the board (or equivalent) signs off — supervisory-board approval AFTER that is NOT part of the window if the entity's own governance process has finished; what matters is the structure of the entity's own authorisation chain.",
        ar: "تاريخ الاعتماد هو إقرار مجلس الإدارة (أو ما يماثله) — واعتماد مجلس المراقبة بعده لا يدخل النافذة إذا كانت عملية حوكمة المنشأة ذاتها قد اكتملت؛ فالعبرة بهيكل سلسلة الاعتماد لدى المنشأة نفسها.",
      },
    },
    { kind: "h", text: { en: "Adjusting events — conditions existed at the reporting date", ar: "الأحداث المعدلة — الشروط وُجدت بتاريخ التقرير" } },
    {
      kind: "p",
      text: {
        en: "The defining logic: an adjusting event does not create the condition — it provides EVIDENCE about a condition that already existed at the reporting date. The court ruling did not create the obligation; the obligation was there since the claim arose. The customer's bankruptcy did not create the receivable problem; the financial difficulty was already draining it. The sale at 60 did not create the inventory problem; the NRV was already below cost.",
        ar: "المنطق الحاكم: الحدث المعدل لا ينشئ الحالة — بل يقدم دليلًا على حالة كانت قائمة بتاريخ التقرير. فالحكم القضائي لم ينشئ الالتزام؛ بل كان الالتزام قائمًا منذ نشوء الدعوى. وإعسار العميل لم ينشئ مشكلة المدين؛ بل الصعوبة المالية كانت تستنزفه بالفعل. والبيع بـ٦٠ لم ينشئ مشكلة المخزون؛ بل كانت القيمة الصافية أدنى من التكلفة أصلًا.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "COURT ruling after the reporting date proving a present obligation at that date → settle the lawsuit provision (IAS 37) at the awarded amount", ar: "حكم قضائي بعد التقرير يثبت التزامًا قائمًا حينها ← عيّن مخصص القضية (IAS 37) بالمبلغ المحكوم" },
        { en: "CUSTOMER BANKRUPTCY after the reporting date — because the customer was in financial difficulty AT the date → write the receivable down", ar: "إعسار عميل بعد التقرير لصعوبته المالية وقتها ← انقص قيمة المدين" },
        { en: "Sale of inventory AFTER the reporting date at a price proving NRV at the date was BELOW cost → write inventory down (IAS 2)", ar: "بيع مخزون بعد التقرير بسعر يثبت أن القيمة الصافية وقتها أدنى من التكلفة ← انقص المخزون" },
        { en: "Discovery of FRAUD or errors showing the statements were wrong", ar: "اكتشاف تدليس أو أخطاء تثبت خطأ القوائم" },
        { en: "Receipt of information showing an ASSET was impaired at the date (a fair-value decline, damage that pre-existed)", ar: "معلومة تثبت انخفاض قيمة أصل بتاريخ التقرير (هبوط قيمة عادلة، تلف سابق)" },
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
        { en: "DESTRUCTION of assets by fire/flood after the date — where no pre-existing damage existed", ar: "تلف أصول بحريق أو سيول بعد التاريخ — ما لم يوجد تلف سابق" },
        { en: "Dividends DECLARED after the reporting date — NOT a liability at the date", ar: "توزيعات مقررة بعد تاريخ التقرير — ليست التزامًا بتاريخه" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Non-adjusting events cut BOTH ways: a windfall acquisition and a warehouse fire belong to the same family — conditions that arose after the reporting date are never adjusted into the numbers, however enormous. The discipline protects the reporting date's integrity: the statements describe the entity AS IT STOOD; next year's statements will tell next year's story. The only duty left is candour: disclose the nature and the estimated financial effect (or say the estimate cannot be made) when the event is material.",
        ar: "الأحداث غير المعدلة تقطع في الاتجاهين: فالاستحواذ المفاجئ وحريق المستودع من عائلة واحدة — فالحالات الناشئة بعد تاريخ التقرير لا تعدل في الأرقام أبدًا مهما جلّت. فهذا الانضباط يحمي نزاهة تاريخ التقرير: فالقوائم تصف المنشأة «كما كانت»؛ وقوائم السنة القادمة تحكي قصتها هي. ولا يبقى إلا واجب الصراحة: الإفصاح عن الطبيعة والأثر المالي المقدر (أو عن استحالة التقدير) إذا كان الحدث جوهريًا.",
      },
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
          then: { en: "Do NOT prepare on a going-concern basis — the exception that DOES reach the statements", ar: "لا تعد القوائم على أساس الاستمرارية — الاستثناء الذي يصل إلى القوائم فعلًا", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Paired scenarios — the exam's favourite twins", ar: "السيناريوهات المزدوجة — توأما الامتحان المفضلان" } },
    {
      kind: "p",
      text: {
        en: "The exam rarely asks 'is this adjusting?' in the abstract — it tells the SAME event twice with one changed fact, and the classification flips. That is the whole art of IAS 10: the event's date is identical in both versions; what changes is where the CONDITION was born. Train the question, not the list: 'if I stood at the reporting date, would this problem already be mine?'",
        ar: "نادرًا ما يسأل الامتحان «أهذا معدل؟» في الإطلاق — بل يروي الحدث ذاته مرتين بواقع مبدل واحد، فينقلب التصنيف. وهذه كل براعة IAS 10: تاريخ الحدث واحد في الروايتين؛ والمتغير هو مكان ميلاد الحالة. فدرّب السؤال لا القائمة: «لو وقفت بتاريخ التقرير، أكانت هذه المشكلة مشكلتي أصلًا؟»",
      },
    },
    {
      kind: "tree",
      title: { en: "One event, two answers", ar: "حدث واحد، جوابان" },
      root: { en: "The paired twins the examiner sets", ar: "التوأمان اللذان يضعهما الممتحن" },
      branches: [
        {
          when: { en: "Customer goes bankrupt in January — was in difficulty BEFORE the reporting date", ar: "عميل يفلس في يناير — وكان متعثرًا قبل تاريخ التقرير" },
          then: { en: "ADJUSTING — write the receivable down (the condition existed)", ar: "معدِّل — انقص المدين (فالحالة كانت قائمة)", red: true },
        },
        {
          when: { en: "Same bankruptcy — the customer was HEALTHY at the reporting date", ar: "الإعسار ذاته — والعميل سليم بتاريخ التقرير" },
          then: { en: "NON-ADJUSTING — disclose if material", ar: "غير معدِّل — أفصح إن كان جوهريًا", red: true },
        },
        {
          when: { en: "Fire destroys inventory — goods were already WATER-DAMAGED at the date", ar: "حريق يتلف مخزونًا — وكان متضررًا بالماء قبل التاريخ" },
          then: { en: "ADJUSTING — the pre-existing damage is the condition", ar: "معدِّل — فالتلف السابق هو الحالة", red: true },
        },
        {
          when: { en: "Same fire — goods were sound at the date", ar: "الحريق ذاته — والسلع سليمة بتاريخه" },
          then: { en: "NON-ADJUSTING — disclose", ar: "غير معدِّل — إفصاح", red: true },
        },
        {
          when: { en: "Investment's value falls after the date", ar: "قيمة استثمار تهبط بعد التاريخ" },
          then: { en: "NON-ADJUSTING — post-date market conditions; only a pre-date decline evidenced later adjusts", ar: "غير معدِّل — ظروف سوق لاحقة؛ ولا يعدل إلا هبوط سابق يثبت لاحقًا", red: true },
        },
      ],
    },
    {
      kind: "example",
      title: { en: "Two-way split of one story", ar: "قصة واحدة بفرعين" },
      lines: [
        { en: "Inventory cost 80 · at the reporting date its NRV was expected to be 95", ar: "تكلفة المخزون ٨٠ · والقيمة الصافية المتوقعة بتاريخ التقرير ٩٥" },
        { en: "Case A: on 15 Feb (before authorisation) a fire destroys the goods → NON-adjusting (condition arose after) — disclose", ar: "الحالة أ: في ١٥ فبراير (قبل الاعتماد) حريق يتلف البضاعة ← غير معدِّل (نشأ بعده) — إفصاح" },
        { en: "Case B: on 15 Feb the entity signs a sale contract at 60 for goods of the SAME kind/condition → evidence of NRV at the date → WRITE DOWN to 60 (adjusting)", ar: "الحالة ب: في ١٥ فبراير عقد بيع بـ٦٠ لسلع من النوع والحالة ذاتهما ← دليل على القيمة الصافية وقتها ← انقص إلى ٦٠ (معدِّل)" },
        { en: "If the fire had destroyed goods ALREADY water-damaged at the date → the pre-existing condition makes the ADJUSTING analysis the right one", ar: "لو أتلف الحريق سلعًا كانت متضررة بالماء قبل التاريخ ← الحالة السابقة تجعل المعالجة المعدلة هي الصحيحة" },
      ],
    },
    { kind: "h", text: { en: "Dividends — the classic trap", ar: "التوزيعات — الفخ الكلاسيكي" } },
    {
      kind: "p",
      text: {
        en: "Dividends declared AFTER the reporting date are NOT recognised as a LIABILITY at the date — because no obligation existed then. They are DISCLOSED (amount per share) and recognised in the period they are declared — in equity, through the statement of changes in equity, never P/L. The 2010 revision killed the old 'proposed dividend liability' forever; only interim dividends properly declared before the reporting date can be a liability.",
        ar: "التوزيعات المقررة بعد تاريخ التقرير لا تعترف التزامًا بتاريخه — إذ لا التزام قائم حينها؛ بل تُفصح (المبلغ لكل سهم) وتعترف في فترة إقرارها — في حقوق الملكية عبر قائمة التغيرات، ولا تمر بقائمة الأرباح أبدًا. وقد قتل تعديل ٢٠١٠ «التزام التوزيعات المقترحة» إلى الأبد؛ ولا يكون التزامًا إلا توزيعات مرحلية مقررة سليمًا قبل التاريخ.",
      },
    },
    {
      kind: "tree",
      title: { en: "Dividends & capital events after the date", ar: "التوزيعات وأحداث رأس المال بعد التاريخ" },
      root: { en: "A dividend or share event lands inside the window", ar: "حدث توزيع أو أسهم يقع داخل النافذة" },
      branches: [
        {
          when: { en: "Dividend PROPOSED / declared after the reporting date", ar: "توزيع مقترح أو مقرر بعد تاريخ التقرير" },
          then: { en: "NO liability at the reporting date — disclose the amount per share; recognise in equity when declared", ar: "لا التزام بتاريخ التقرير — أفصح عن المبلغ لكل سهم؛ واعترف في حقوق الملكية عند الإقرار", red: true },
        },
        {
          when: { en: "Interim dividend declared and recognised BEFORE the reporting date", ar: "توزيع مرحلي مقرر ومعترف به قبل تاريخ التقرير" },
          then: { en: "A LIABILITY at the reporting date — it met the IAS 37 test on time", ar: "التزام قائم بتاريخ التقرير — فقد اجتاز اختبار IAS 37 في حينه", red: true },
        },
        {
          when: { en: "Major share issue FOR CASH after the date", ar: "إصدار أسهم جوهري مقابل نقد بعد التاريخ" },
          then: { en: "NON-ADJUSTING — disclose the nature and its effect on EPS", ar: "غير معدِّل — أفصح عن طبيعته وأثره في ربح السهم", red: true },
        },
        {
          when: { en: "BONUS issue or share split after the date", ar: "أسهم مجانية أو تقسيم أسهم بعد التاريخ" },
          then: { en: "Disclose + RESTATE the EPS denominators of all periods (IAS 33 — no resources moved)", ar: "أفصح + أعد عرض مقامات ربح السهم لكل الفترات (IAS 33 — لم تتحرك موارد)", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Share issues & EPS after the date", ar: "إصدارات الأسهم وربح السهم بعد التاريخ" } },
    {
      kind: "p",
      text: {
        en: "A share issue for cash after the reporting date changes nothing about the reporting date — disclose it and its EPS effect. But a BONUS ISSUE or share split is the beautiful exception: because it moves NO resources, IAS 33 requires the share counts of every period presented to be restated as if the new shares had always existed — the EPS of the PREVIOUS year changes even though the event is non-adjusting in every other sense.",
        ar: "إصدار الأسهم مقابل نقد بعد تاريخ التقرير لا يغير شيئًا عن تاريخه — أفصح عنه وعن أثره في ربح السهم. لكن «الأسهم المجانية» أو تقسيم الأسهم هو الاستثناء البديع: فبعدم تحريكه أية موارد، يوجب IAS 33 إعادة عرض أعداد أسهم كل الفترات المعروضة كأن الأسهم الجديدة كانت قائمة دائمًا — فيتغير ربح سهم السنة السابقة رغم أن الحدث غير معدل بكل معنى آخر.",
      },
    },
    { kind: "h", text: { en: "Going concern — the override that adjusts", ar: "الاستمرارية — الاستثناء الذي يعدّل" } },
    {
      kind: "p",
      text: {
        en: "If post-date events show management's intention to liquidate or cease trading, or that going concern is unrealistic, the statements are NOT prepared on a going-concern basis — even though the conditions arose after the date. IAS 10.14 is the only place a post-date event changes the BASIS of the statements themselves. Disclose the basis used and why.",
        ar: "إذا أظهرت الأحداث اللاحقة نية الإدارة التصفية أو التوقف، أو انتفاء واقعية الاستمرارية، فلا تعد القوائم على أساسها — وإن نشأت الظروف بعد التاريخ. وهذا هو الموضع الوحيد الذي يغير فيه حدثٌ لاحق أساس القوائم ذاتها. أفصح عن الأساس المتبع وسببه.",
      },
    },
    {
      kind: "p",
      text: {
        en: "The IAS 1 pairing in practice: IAS 1 asks management to assess going concern at the reporting date over AT LEAST the next twelve months; IAS 10 decides what happens when the AFTER-date evidence shows the assessment was wrong. Deterioration that began before the date → the basis itself falls. Deterioration born after the date → disclose, and only if it destroys the basis does the presentation change. Two standards, one conversation.",
        ar: "ثنائية IAS 1 عمليًا: يطلب IAS 1 من الإدارة تقييم الاستمرارية بتاريخ التقرير على مدى الاثني عشر شهرًا التالية على الأقل؛ ويقرر IAS 10 ما يحدث إذا أظهر الدليل اللاحق أن التقييم كان خاطئًا. فتدهور بدأ قبل التاريخ ← يسقط الأساس ذاته؛ وتدهور ولد بعده ← إفصاح، ولا يتغير العرض إلا إذا دمر الأساس. معياران وحوار واحد.",
      },
    },
    {
      kind: "steps",
      items: [
        { en: "FIX the window: reporting date → date of authorisation (not publication, not the AGM)", ar: "ثبّت النافذة: من تاريخ التقرير إلى تاريخ الاعتماد (لا النشر ولا الجمعية)" },
        { en: "ASK the one question: did the CONDITION exist at the reporting date?", ar: "اطرح السؤال الواحد: هل وُجدت الحالة بتاريخ التقرير؟" },
        { en: "ROUTE the answer: condition existed → adjust the numbers; arose after → disclose nature + estimated effect (or impossibility)", ar: "وجه الجواب: الحالة قائمة ← عدل الأرقام؛ نشأت بعده ← أفصح عن الطبيعة والأثر المقدر (أو تعذره)" },
        { en: "CHECK going concern: does the post-date evidence break the basis itself?", ar: "افحص الاستمرارية: هل يكسر الدليل اللاحق الأساس ذاته؟" },
        { en: "DISCLOSE the authorisation date, who authorised, and every material non-adjusting event", ar: "أفصح عن تاريخ الاعتماد وجهته وكل حدث غير معدل جوهري" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Adjusting entries — the numbers move", ar: "قيود معدلة — الأرقام تتحرك" },
      rows: [
        { dr: { en: "Legal expense 120 (provision was 300 · the court awards 420 in February)", ar: "مصروف قضية ١٢٠ (المخصص كان ٣٠٠ · والحكم ٤٢٠ في فبراير)" }, cr: { en: "Provision for lawsuit 120", ar: "مخصص القضية ١٢٠" }, red: true },
        { dr: { en: "Irrecoverable-debt expense 60 (receivable 80 · allowance already 20)", ar: "مصروف ديون معدومة ٦٠ (المدين ٨٠ · والمخصص السابق ٢٠)" }, cr: { en: "Allowance against trade receivables 60", ar: "مخصص مقابل المدينين ٦٠" }, red: true },
      ],
    },
    {
      kind: "journal",
      title: { en: "Non-adjusting events — the entries that never happen", ar: "الأحداث غير المعدلة — القيود التي لا تحدث أبدًا" },
      rows: [
        { cr: { en: "NO ENTRY — warehouse fire in January (goods were sound at the date): disclosure only", ar: "لا قيد — حريق مستودع في يناير (السلع كانت سليمة بتاريخه): إفصاح فقط" }, red: true },
        { cr: { en: "NO ENTRY — major share issue in February: disclose the nature and the EPS effect", ar: "لا قيد — إصدار أسهم جوهري في فبراير: إفصاح عن الطبيعة وأثر ربح السهم" } },
        { cr: { en: "NO ENTRY — dividend declared on 1 March (after the date): not a liability at the reporting date — the SOCIE of the NEW year carries it", ar: "لا قيد — توزيع مقرر في ١ مارس (بعد التاريخ): ليس التزامًا بتاريخ التقرير — وتحمله قائمة التغيرات للسنة الجديدة" } },
      ],
    },
    {
      kind: "journal",
      title: { en: "The dividend, when it is actually declared", ar: "التوزيع عند إقراره فعلًا" },
      rows: [
        { dr: { en: "Retained earnings 80 (in the NEW financial year, when declared)", ar: "أرباح محتجزة ٨٠ (في السنة المالية الجديدة عند الإقرار)" }, cr: { en: "Dividends payable 80", ar: "توزيعات مستحقة الدفع ٨٠" }, red: true },
        { cr: { en: "SOCIE presentation — never the reporting year's P/L, never the reporting year's liabilities", ar: "عرض في قائمة التغيرات — لا في أرباح سنة التقرير ولا في التزاماتها" } },
      ],
    },
    {
      kind: "example",
      title: { en: "The lawsuit both directions", ar: "القضية في الاتجاهين" },
      lines: [
        { en: "Provision recognised at 31 Dec: 300 · the judge rules on 10 Feb, before authorisation on 15 Mar", ar: "مخصص معترف به في ٣١ ديسمبر: ٣٠٠ · والقاضي يحكم في ١٠ فبراير قبل الاعتماد في ١٥ مارس" },
        { en: "Award 420 (unfavourable): the condition existed → adjust: Dr legal expense 120 / Cr provision 120 → reported liability 420", ar: "الحكم ٤٢٠ (غير ملائم): الحالة قائمة ← تعديل: مدين مصروف ١٢٠ / دائن مخصص ١٢٠ ← الالتزام المفصح ٤٢٠" },
        { en: "Award 250 (favourable): adjust the other way — Dr provision 50 / Cr legal expense (reversal) 50 → reported liability 250", ar: "الحكم ٢٥٠ (ملائم): اضبط بالاتجاه الآخر — مدين مخصص ٥٠ / دائن مصروف (رد) ٥٠ ← الالتزام المفصح ٢٥٠" },
        { en: "Same event, opposite signs — BOTH are adjusting because the obligation existed at the date either way", ar: "حدث واحد بإشارتين متعاكستين — وكلاهما معدل لأن الالتزام كان قائمًا بتاريخه في الحالتين" },
      ],
    },
    {
      kind: "example",
      title: { en: "A January-to-March timeline (classify everything)", ar: "خط زمني من يناير إلى مارس (صنّف كل شيء)" },
      lines: [
        { en: "Reporting date 31 Dec 2024 · authorisation 15 Mar 2025", ar: "تاريخ التقرير ٣١ ديسمبر ٢٠٢٤ · الاعتماد ١٥ مارس ٢٠٢٥" },
        { en: "10 Jan — fire destroys a warehouse (sound at the date) → non-adjusting: disclose", ar: "١٠ يناير — حريق يدمر مستودعًا (سليم بتاريخه) ← غير معدل: إفصاح" },
        { en: "20 Jan — a customer in difficulty since November goes bankrupt → adjusting: write the receivable down", ar: "٢٠ يناير — عميل متعثر منذ نوفمبر يفلس ← معدل: انقص المدين" },
        { en: "10 Feb — the court rules 420 on a 2023 suit → adjusting: provision to 420 · 1 Mar — dividend declared → no liability, disclose", ar: "١٠ فبراير — الحكم ٤٢٠ في دعوى ٢٠٢٣ ← معدل: المخصص إلى ٤٢٠ · ١ مارس — توزيع مقرر ← لا التزام، إفصاح" },
        { en: "30 Mar — a merger is announced (after authorisation) → outside IAS 10 for these statements entirely", ar: "٣٠ مارس — الإعلان عن اندماج (بعد الاعتماد) ← خارج IAS 10 كليًا بالنسبة لهذه القوائم" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The adjusting-event arithmetic", ar: "حسابيات الأحداث المعدلة" },
      lines: [
        { en: "Provision adjustment = adjudicated amount − provision already recognised", ar: "تعديل المخصص = المبلغ المحكوم − المخصص المعترف به" },
        { en: "Receivable write-down = gross receivable − allowance that should exist at the reporting date", ar: "انقاص المدين = المدين الإجمالي − المخصص الواجب قيامه بتاريخ التقرير" },
        { en: "Inventory write-down = carrying amount − NRV evidenced by the post-date sale", ar: "انقاص المخزون = القيمة الدفترية − القيمة الصافية المثبتة بالبيع اللاحق" },
        { en: "Post-date bonus issue: restated share count = shares before × bonus factor (every period presented)", ar: "أسهم مجانية لاحقة: الأسهم المعاد عرضها = الأسهم السابقة × معامل المنحة (لكل فترة معروضة)" },
      ],
    },
    { kind: "h", text: { en: "Disclosure checklist", ar: "قائمة الإفصاح" } },
    {
      kind: "p",
      text: {
        en: "Why the authorisation disclosure matters: users need to know how much AFTER-date knowledge is baked into the numbers — a statement authorised in March can carry two more months of evidence than one authorised in February. The disclosure is one line of governance hygiene, and it anchors every reader's sense of the window.",
        ar: "لماذا يهم إفصاح الاعتماد: يحتاج المستخدمون معرفة كم من المعرفة اللاحقة مُدمج في الأرقام — فالقوائم المعتمدة في مارس قد تحمل شهرين إضافين من الأدلة على المعتمدة في فبراير. والإفصاح سطر واحد من نظافة الحوكمة، يرسي إحساس كل قارئ بالنافذة.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "The DATE the statements were authorised and WHO issued the authorisation (shareholders' approval NOT needed)", ar: "تاريخ الاعتماد ومن أصدره (ولا يشترط موافقة الجمعية العامة)" },
        { en: "Non-adjusting material events: nature + estimated financial effect, or why estimation is impossible", ar: "الأحداث غير المعدلة الجوهرية: الطبيعة + الأثر المالي المقدر أو استحالة التقدير" },
        { en: "Going-concern material uncertainties arising from post-date events", ar: "عدم تأكد جوهري في الاستمرارية ناشئ عن أحداث لاحقة" },
        { en: "Dividends proposed or declared after the date: the amount per share", ar: "توزيعات مقترحة أو مقررة بعد التاريخ: المبلغ لكل سهم" },
        { en: "No update after authorisation — the window has closed; nothing after it enters IAS 10", ar: "لا تحديث بعد الاعتماد — فالنافذة أُغلقت؛ وما بعده لا يدخل IAS 10" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Adjustments ripple: an adjusting event rarely lands alone — a bigger provision carries deferred tax (IAS 12), a receivable write-down may change the expected credit loss, an inventory write-down changes cost of sales and the tax charge. Follow the number through EVERY statement it touches, or the 'adjustment' will be half-made.",
        ar: "للتعديلات أثر تموجي: نادرًا ما يقع الحدث المعدل وحده — فالمخصص الأكبر يحمل ضريبة مؤجلة (IAS 12)، وانقاص المدين قد يغير خسارة الائتمان المتوقعة، وانقاص المخزون يغير تكلفة المبيعات والضريبة. فتتبع الرقم في كل قائمة يمسها، وإلا كان «التعديل» نصف معدة.",
      },
    },
    { kind: "h", text: { en: "Interactions with other standards", ar: "الترابط مع المعايير الأخرى" } },
    {
      kind: "p",
      text: {
        en: "IAS 10 sits at the END of the reporting pipeline — every measurement standard hands it the last word: the evidence that arrives late decides whether the year-end judgements stood. That is why examinable IAS 10 questions are rarely standalone: they arrive dressed as IAS 37 provisions, IAS 2 write-downs, IFRS 5 classifications and IAS 33 share counts.",
        ar: "يقع IAS 10 في نهاية خط إنتاج التقارير — وكل معيار قياس يمنحه الكلمة الأخيرة: فالدليل الذي يصل متأخرًا يقرر هل صمدت أحكام نهاية العام. لهذا لا تأتي أسئلة IAS 10 وحيدة في الامتحان: بل تأتي متنكرة في صور مخصصات IAS 37، وانقاصات IAS 2، وتصنيفات IFRS 5، وعدادات أسهم IAS 33.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "IAS 1 — the going-concern basis and dividends landing in equity (SOCIE), not P/L", ar: "IAS 1 — أساس الاستمرارية والتوزيعات التي تستقر في حقوق الملكية (قائمة التغيرات) لا في الأرباح" },
        { en: "IAS 8 — a misstatement discovered after issue is a PRIOR-PERIOD ERROR corrected by restatement", ar: "IAS 8 — الخطأ المكتشف بعد الإصدار خطأ فترة سابقة يصحح بإعادة العرض" },
        { en: "IAS 2 — post-date sales prices as NRV evidence for closing inventory", ar: "IAS 2 — أسعار البيع اللاحقة دليلًا على القيمة الصافية لمخزون الإقفال" },
        { en: "IAS 37 — the present-obligation test that the court ruling settles", ar: "IAS 37 — اختبار الالتزام القائم الذي يحسمه الحكم القضائي" },
        { en: "IAS 12 — deferred tax on every adjusting remeasurement", ar: "IAS 12 — ضريبة مؤجلة على كل إعادة قياس معدلة" },
        { en: "IAS 33 — the EPS denominator restated for post-date bonus issues and splits", ar: "IAS 33 — مقام ربح السهم يعاد عرضه للأسهم المجانية والتقسيمات اللاحقة" },
        { en: "IFRS 5 — a decision to sell taken AFTER the date does not meet 'highly probable at the date' → non-adjusting, disclose", ar: "IFRS 5 — قرار البيع المتخذ بعد التاريخ لا يستوفي «الرجحان العالي بتاريخه» ← غير معدل، إفصاح" },
        { en: "IFRS 3 / IFRS 10 — a post-date acquisition: disclose, next period consolidates", ar: "IFRS 3 / IFRS 10 — اقتناء لاحق: إفصاح، والدمج للفترة التالية" },
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
        ar: "إعسار عميل سليم بتاريخ التقرير = غير معدل (إفصاح)؛ وعميل متعثر سابقًا = معدل (انقاص). حدث واحد وحالتان — ثنائية محببة للامتحان.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Settlement after the reporting date is NOT the test — the money's timing is irrelevant; the condition's origin is everything. A court award paid in April still adjusts December's provision; a January fire that burned January's goods never adjusts December's inventory.",
        ar: "السداد بعد تاريخ التقرير ليس هو الاختبار — فتوقيت المال بلا أثر، ومنشأ الحالة كل شيء. فحكم قضائي يُسدد في أبريل يعدل مخصص ديسمبر؛ وحريق يناير الذي أتلف سلع يناير لا يعدل مخزون ديسمبر أبدًا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The held-for-sale trap: a plan to sell announced after the reporting date fails IFRS 5's 'highly probable at the reporting date' test — classify as non-adjusting and disclose; only a decision (and criteria) in place at the date makes held-for-sale an adjusting classification.",
        ar: "فخ المحتفظ به للبيع: خطة بيع أعلنت بعد تاريخ التقرير لا تجتاز اختبار «الرجحان العالي بتاريخ التقرير» في IFRS 5 — عده غير معدل وأفصح؛ فلا يجعل القائمة معدلة إلا قرار (ومعايير) قائمة بتاريخه.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Dividends declared after the reporting date live in the NEXT period's SOCIE — the reporting date's equity is untouched, and the notes carry the per-share amount.",
        ar: "التوزيعات المقررة بعد تاريخ التقرير تعيش في قائمة التغيرات للفترة التالية — فحقوق ملكية تاريخ التقرير لم تُمس، وتحمل الإيضاحات المبلغ لكل سهم.",
      },
    },
    {
      kind: "note",
      text: {
        en: "IAS 34 pairing: the same window logic runs at EVERY interim date — events between the interim date and the interim report's authorisation are adjusted or disclosed by identical logic, with the same going-concern override available.",
        ar: "ثنائية IAS 34: المنطق ذاته يجري في كل تاريخ مرحلي — فالأحداث بين تاريخ المرحلة واعتماد تقريرها تعدل أو تفصح بالمنطق نفسه، مع بقاء استثناء الاستمرارية متاحًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The window never reopens: facts emerging after authorisation — even before publication — are not IAS 10 events for these statements; they are next period's opening news.",
        ar: "النافذة لا تُفتح ثانية: فالوقائع الناشئة بعد الاعتماد — ولو قبل النشر — ليست أحداث IAS 10 لهذه القوائم؛ بل هي أخبار افتتاح الفترة التالية.",
      },
    },
  ],
}
