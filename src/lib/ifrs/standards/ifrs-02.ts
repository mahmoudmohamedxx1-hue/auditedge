/** IFRS 2 — Share-based Payment */

import type { Standard } from "../types"

export const IFRS_2: Standard = {
  code: "IFRS 2",
  title: { en: "Share-based Payment", ar: "الدفع على أساس الأسهم" },
  topic: "specialized",
  effective: { en: "Effective 1 Jan 2005 · amended 2018 (IAS 38 interaction)", ar: "سارٍ من ١ يناير ٢٠٠٥ · معدل ٢٠١٨" },
  blocks: [
    { kind: "h", text: { en: "Objective & the three buckets", ar: "الهدف والحاويات الثلاث" } },
    {
      kind: "p",
      text: {
        en: "IFRS 2 governs every transaction where the entity receives or pays for goods or services priced in EQUITY INSTRUMENTS (shares, options, SARs) or in cash measured by reference to those instruments. Equity-settled deals with employees dominate the exams, but the standard's first move is classification: (1) equity-settled, (2) cash-settled, (3) transactions with a CHOICE of settlement.",
        ar: "يحكم IFRS 2 كل معاملة تتلقى أو تدفع فيها المنشأة سلعًا أو خدمات مقابل أدوات ملكية (أسهم، خيارات، حقوق) أو نقدًا مقيسًا بالإشارة إليها. وتسيطر معاملات الأسهم مع العاملين على الامتحانات؛ لكن الخطوة الأولى التصنيف: (١) تسوية بأسهم، (٢) بنقد، (٣) معاملات ذات خيار تسوية.",
      },
    },
    {
      kind: "tree",
      root: { en: "Which share-based-payment world?", ar: "أي عالم من عوالم الدفع بالأسهم؟" },
      branches: [
        {
          when: { en: "EQUITY-SETTLED — the entity receives goods/services and settles in ITS OWN equity instruments (options over its own shares)", ar: "تسوية بالملكية — تتلقى المنشأة السلع/الخدمات وتسدد بأدوات ملكيتها (خيارات على أسهمها)" },
          then: { en: "Measure at GRANT-DATE fair value of the instruments; do NOT remeasure", ar: "يقاس بالقيمة العادلة للأدوات بتاريخ المنح؛ ولا يعاد قياسها", red: true },
        },
        {
          when: { en: "CASH-SETTLED — the counterparty's claim is cash for a share-price-linked amount (share appreciation rights)", ar: "تسوية نقدية — مطالبة الطرف نقد يقدر بسعر السهم (حقوق تضخيم الأسهم)" },
          then: { en: "Measure at the fair value of the LIABILITY at EACH reporting date until settled — remeasure EVERY period", ar: "يقاس بعادلة الالتزام في كل تقرير حتى التسوية — يعاد قياسه كل فترة", red: true },
        },
        {
          when: { en: "CHOICE of settlement (either party may choose cash or shares)", ar: "خيار تسوية (يختار أحد الطرفين نقدًا أو أسهمًا)" },
          then: { en: "A COMPOUND instrument: split — the cash-alternative part as a liability, the residual net-share part as equity (when the supplier may choose, classify by what the entity expects... strictly: if the counterparty chooses, it's compound; if the ENTITY chooses, estimate the rights it will issue and split per the expected outcome)", ar: "أداة مركبة: تفصل — جزء البديل النقدي التزامًا والباقي ملكية (وإن كان الخيار للطرف الآخر فهي مركبة قطعًا؛ وإن كان للمنشأة فتقدر النتيجة المتوقعة)", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "The employee timing machine", ar: "آلة التوقيت للموظفين" } },
    {
      kind: "steps",
      items: [
        { en: "GRANT DATE — the date the entity and employee agree the terms (and the employee gets the FV data); with employees the service starts at grant date", ar: "تاريخ المنح — اتفاق الطرفين على الشروط (وحصول الموظف على بيانات العادلة)؛ وتبدأ خدمة الموظف عنده" },
        { en: "VESTING PERIOD — service conditions & (non-market) performance conditions define when rights vest; expense spreads over the vesting window", ar: "فترة الاستحقاق — شروط الخدمة والأداء (غير السوقية) تحدد لحظة توارث الحقوق؛ وينتشر المصروف عبرها" },
        { en: "MEASUREMENT DATE for equity-settled with employees: GRANT DATE (fair value locked at grant) — because measuring the shares/services on day one was impracticable, IFRS 2 locked the grant date", ar: "تاريخ القياس لموظفي التسوية بالملكية: يوم المنح (تقفل العادلة فيه)" },
        { en: "TRUE-UP: revise the ESTIMATE of the number that will vest (service & non-market performance conditions) at each reporting date — but NEVER the grant-date fair value", ar: "التصحيح: يراجع تقدير العدد المتوقع توارثه كل فترة (شروط الخدمة والأداء غير السوقية) — ولا تمس عادلة المنح أبدًا" },
        { en: "For NON-EMPLOYEES: measure at the DATE THE GOODS/SERVICES ARE RECEIVED (there is a measurable counterperformance)", ar: "لغير الموظفين: القياس عند تلقي السلع/الخدمات" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The cumulative-expense engine (equity-settled)", ar: "محرك المصروف التراكمي (بالتسوية بالملكية)" },
      lines: [
        { en: "Cumulative expense = grant-date FV per instrument × expected vesting number × (service elapsed ÷ total service)", ar: "المصروف التراكمي = عادلة المنح للأداة × العدد المتوقع توارثه × (الخدمة المنقضية ÷ الخدمة الكلية)" },
        { en: "Period expense = cumulative to date − expense already recognised", ar: "مصروف الفترة = التراكمي حتى التاريخ − المعترف به سابقًا" },
        { en: "After the vesting date: no further expense, and FV changes post-vesting are irrelevant for equity-settled awards", ar: "بعد الاستحقاق: لا مصروف إضافي؛ ولا تعني تغيرات العادلة اللاحقة شيئًا للتسوية بالملكية" },
        { en: "Forfeiture estimate (new employees leaving before vesting) is part of the expected-vesting number — estimate and true-up", ar: "تقدير التخريد (مغادرة قبل الاستحقاق) جزء من العدد المتوقع — يقدر ويصحح" },
      ],
    },
    {
      kind: "example",
      title: { en: "Options with a vesting table", ar: "خيارات بجدول استحقاق" },
      lines: [
        { en: "1 Jan Y1: 100 employees × 1,000 options each (100,000 options) · grant-date FV 15 per option · 3-year service vesting", ar: "١ يناير س١: ١٠٠ موظف × ١٬٠٠٠ خيار (١٠٠٬٠٠٠ خيار) · عادلة المنح ١٥ · استحقاق خدمي ٣ سنوات" },
        { en: "Y1: expect 80 to vest → expense = 100,000 × 80% × 15 × 1/3 = 400,000", ar: "س١: يتوقع توارث ٨٠ ← المصروف = ١٠٠٬٠٠٠ × ٨٠٪ × ١٥ × ⅓ = ٤٠٠٬٠٠٠" },
        { en: "Y2: expect 75 → cumulative = 100,000 × 75% × 15 × 2/3 = 750,000 → Y2 expense = 350,000", ar: "س٢: يتوقع ٧٥ ← التراكمي = ١٠٠٬٠٠٠ × ٧٥٪ × ١٥ × ⅔ = ٧٥٠٬٠٠٠ ← مصروف س٢ = ٣٥٠٬٠٠٠" },
        { en: "Y3: 72 actually vest → cumulative = 72,000 × 15 = 1,080,000 → Y3 expense = 1,080,000 − 750,000 = 330,000", ar: "س٣: توارث ٧٢ فعليًا ← التراكمي = ٧٢٬٠٠٠ × ١٥ = ١٬٠٨٠٬٠٠٠ ← مصروف س٣ = ٣٣٠٬٠٠٠" },
        { en: "Lifetime check: total expense 1,080,000 = vested options 72,000 × grant-date FV 15 — the engine self-proves", ar: "تحقق العمر: الإجمالي ١٬٠٨٠٬٠٠٠ = ٧٢٬٠٠٠ خيارًا متوارثًا × ١٥ — المحرك يبرهن نفسه" },
      ],
    },
    { kind: "h", text: { en: "Market vs non-market conditions", ar: "الشروط السوقية وغير السوقية" } },
    {
      kind: "tree",
      root: { en: "The vesting condition's nature changes the true-up", ar: "طبيعة الشرط تغير التصحيح" },
      branches: [
        {
          when: { en: "SERVICE & NON-MARKET performance conditions (stay 3 years; hit an EBIT target)", ar: "شروط الخدمة والأداء غير السوقية (ابقَ ٣ سنوات؛ حقق هدف أرباح)" },
          then: { en: "TRUE-UP the number: adjust the expected vesting count each period; failure at the end = zero expense for the failed tranche (reversal through the cumulative engine)", ar: "صحّح العدد: يعدل المتوقع كل فترة؛ والفشل في النهاية يصفّر مصروف الحصة", red: true },
        },
        {
          when: { en: "MARKET conditions (share price ≥ X for 6 months; TSR vs index)", ar: "الشروط السوقية (سعر السهم ≥ س لستة أشهر؛ عائد مقابل مؤشر)" },
          then: { en: "The market condition is baked INTO the grant-date fair value (an option model); NO true-up — recognise the full FV over the vesting window even if the market condition ultimately fails", ar: "الشرط السوقي مخبوء في عادلة المنح (نموذج خيارات)؛ ولا تصحيح — يعترف بالعادلة كاملة عبر الاستحقاق ولو فشل الشرط", red: true },
        },
        {
          when: { en: "A condition fails that was ALWAYS outside IFRS 2's true-up world (a regulatory rejection)", ar: "شرط يفشل خارج عالم التصحيح (رفض رقابي)" },
          then: { en: "Treat as a CANCELLATION by the entity if the entity ends the arrangement: accelerate the remaining expense", ar: "يعامل إلغاءً من المنشأة إذا أنهاته: يعجّل المصروف المتبقي", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Modifications & cancellations", ar: "التعديلات والإلغاءات" } },
    {
      kind: "list",
      items: [
        { en: "A MODIFICATION (better terms, lower strike): expense the HIGHER of (a) the original grant-date FV per instrument × original expected vesting and (b) the incremental FV × the same count — over the REVISED vesting period", ar: "التعديل (شروط أفضل، سعر تنفيذ أدنى): يحمَّل الأعلى من (أ) عادلة المنح الأصلية × العدد الأصلي و(ب) العادلة التزایدية × العدد ذاته — عبر فترة الاستحقاق المنقحة" },
        { en: "Repricing that merely maintains value: recognise the incremental FV; repricing after vesting: immediate expense of the incremental FV", ar: "إعادة التسعير المحافظة: تعترف الزيادة؛ وبعد الاستحقاق: فورية" },
        { en: "CANCELLATION (by the entity or by holder agreeing with the entity): ACCELERATE — recognise immediately whatever the original terms would have recognised over the remaining vesting period", ar: "الإلغاء (من المنشأة أو باتفاق الحائز): تعجيز — يعترف فورًا بما كانت الشروط الأصلية ستُنشره عبر المدة المتبقية" },
        { en: "A genuine FORFEITURE by the holder (resignation): the true-up engine handles it — no acceleration, no reversal of recognised expense beyond the expectation mechanics", ar: "التخرد الأصيل (استقالة): يتكفل به محرك التصحيح — لا تعجيل ولا رد لما اعتُرف" },
        { en: "Cancellation of CASH-settled awards: recognise the liability's remaining amount immediately", ar: "إلغاء جوائز التسوية النقدية: يعترف بالمتبقي فورًا" },
      ],
    },
    { kind: "h", text: { en: "The journals", ar: "القيود" } },
    {
      kind: "journal",
      title: { en: "Equity-settled & cash-settled sets", ar: "مجموعتا التسوية" },
      rows: [
        { dr: { en: "Employee benefit expense (equity-settled accrual)", ar: "مصروف مزايا عاملين (استحقاق بالملكية)" }, cr: { en: "Equity — share-based payment reserve (capital reserve)", ar: "حقوق الملكية — احتياطي الدفع بالأسهم" }, red: true },
        { dr: { en: "Employee benefit expense (cash-settled, remeasured each period)", ar: "مصروف مزايا (نقدي، يعاد قياسه كل فترة)" }, cr: { en: "Share-based payment liability", ar: "التزام دفع بالأسهم" }, red: true },
        { dr: { en: "Share-based payment liability", ar: "التزام الدفع بالأسهم" }, cr: { en: "Cash (SARs settled)", ar: "نقد (تسوية حقوق التضخيم)" } },
        { dr: { en: "Share-based payment reserve + share premium", ar: "احتياطي الدفع + علاوة الإصدار" }, cr: { en: "Share capital (options exercised)", ar: "رأس المال (ممارسة الخيارات)" }, red: true },
        { cr: { en: "Expired options: reserve stays within equity (it becomes general capital reserve — NOT reversed to P&L)", ar: "الخيارات الساقطة: يبقى الاحتياطي في حقوق الملكية (احتياطيًا عامًا — لا يرد للأرباح)" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Group situations", ar: "وضع المجموعات" } },
    {
      kind: "tree",
      root: { en: "Who grants whose shares?", ar: "من يمنح أسهم من؟" },
      branches: [
        {
          when: { en: "A SUBSIDIARY's employees get the PARENT's shares", ar: "موظفو تابعة يحصلون على أسهم الأم" },
          then: { en: "The subsidiary books an equity-settled expense (a capital contribution from the parent) while the PARENT books an investment increase", ar: "تحجز التابعة مصروفًا بالتسوية بالملكية (مساهمة رأسمالية من الأم) وتزيد الأم استثمارها", red: true },
        },
        {
          when: { en: "The PARENT's employees get a SUBSIDIARY's shares", ar: "موظفو الأم يحصلون على أسهم تابعة" },
          then: { en: "The PARENT books an equity-settled expense; the SUBSIDIARY treats it as a transaction with owners acting in that capacity (a distribution) — a rare but examinable flip", ar: "تحجز الأم مصروفًا بالملكية؛ والتابعة تعالجه معاملة مع ملاك بصفتهم تلك (توزيعًا) — قلب نادر قابل للامتحان", red: true },
        },
        {
          when: { en: "Treasury shares used to settle, or a NEW issue", ar: "التسوية بأسهم خزينة أو إصدار جديد" },
          then: { en: "Both settle the reserve; a rights-issue style dilution changes nothing retroactively", ar: "كلاهما يسدد من الاحتياطي؛ وتخفيف لاحق على غرار إصدار الحقوق لا يغير الماضي", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Disclosure essentials", ar: "أساسيات الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "The nature & terms of the arrangements: vesting conditions, maximum term, settlement choices", ar: "طبيعة الترتيبات وشروطها: شروط الاستحقاق والحد الأقصى للأجل وخيارات التسوية" },
        { en: "Movement in options/shares: outstanding & exercisable at start/end, granted, forfeited, exercised, cancelled, expired — with WEIGHTED-AVERAGE exercise prices and remaining contractual life", ar: "حركة الخيارات والأسهم: قائمة وممكنة الممارسة أول الفترة وآخرها، الممنوحة والمخردة والممارسة والملغاة والساقطة — بأسعار تنفيذ مرجحة وأعمار متبقية" },
        { en: "Expense recognised for equity-settled and cash-settled arrangements separately; the fair-value measurement model, inputs and assumptions (volatility, dividends, risk-free rate)", ar: "المصروف المعترف به لكل نوع على حدة؛ ونموذج التقييم ومدخلاته (التقلب، التوزيعات، المعدل الخالي من المخاطر)" },
        { en: "For liabilities: the carrying at start/end, and how they will be settled", ar: "للالتزامات: القيم أول الفترة وآخرها وكيفية تسويتها" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Grant-date FV NEVER moves for equity-settled awards; only the EXPECTED NUMBER trues up (service/non-market conditions); market conditions live inside the FV forever. Three sentences — three easy marks in every sitting.",
        ar: "عادلة المنح لا تتحرك أبدًا للتسوية بالملكية؛ ويصحح «العدد المتوقع» وحده (شروط الخدمة وغير السوقية)؛ والشروط السوقية تسكن العادلة للأبد. ثلاث جمل — ثلاث درجات سهلة في كل دورة.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Cash-settled is the mirror: remeasure EVERY reporting date (and at settlement), because the liability is what the market says it is — the 'locked at grant' instinct is the equity-settled habit and it is wrong here.",
        ar: "التسوية النقدية المرآة: أعد القياس كل تقرير وعند التسوية، فالالتزام ما يقوله السوق — وغريزة «القفل عند المنح» عادة التسوية بالملكية وهي خطأ هنا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "A grant date may not exist at all: non-employee transactions are measured when the goods/services are RECEIVED — there is nothing to lock at a grant that never happened.",
        ar: "تاريخ المنح قد لا يوجد أصلًا: معاملات غير الموظفين تقاس عند تلقي السلع/الخدمات — فلا مكان لقفل العادلة عند منحٍ لم يحدث.",
      },
    },
  ],
}
