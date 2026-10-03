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
        en: "IFRS 2 governs every transaction where the entity receives or pays for goods or services priced in EQUITY INSTRUMENTS (shares, options, SARs) or in cash measured by reference to those instruments. Equity-settled deals with employees dominate the exams, but the standard's first move is classification: (1) equity-settled, (2) cash-settled, (3) transactions with a CHOICE of settlement — and the 2016 amendments (effective 1 Jan 2018) rebuilt that third bucket around a PRESENT-OBLIGATION test. Whatever the bucket, the engine is the same: estimate what will vest, spread the fair value over the waiting period, and true up the number.",
        ar: "يحكم IFRS 2 كل معاملة تتلقى أو تدفع فيها المنشأة سلعًا أو خدمات مقابل أدوات ملكية (أسهم، خيارات، حقوق تضخيم) أو نقدًا مقيسًا بالإشارة إليها. وتسيطر معاملات الأسهم مع العاملين على الامتحانات؛ لكن الخطوة الأولى التصنيف: (١) تسوية بأسهم، (٢) بنقد، (٣) معاملات ذات خيار تسوية — وقد أعادت تعديلات ٢٠١٦ (السارية من ١ يناير ٢٠١٨) بناء الحاوية الثالثة حول اختبار الالتزام القائم. وأيًّا كانت الحاوية فالمحرك واحد: قدّر ما سيُستحق، وانشر القيمة العادلة عبر فترة الانتظار، وصحّح العدد.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The arrangement must be priced BY REFERENCE to equity instruments — a bonus paid in cash that happens to equal the share price is still an IFRS 2 cash-settled deal only if the amount varies with the share price; a fixed cash bonus is IAS 19.",
        ar: "لا بد أن تُسعَّر المعاملة بالإشارة إلى أدوات ملكية — فالمكافأة النقدية المساوية لسعر السهم مصلحةً تبقى معاملة IFRS 2 نقدية فقط إذا تغير مبلغها مع سعر السهم؛ أما المكافأة النقدية الثابتة فمن IAS 19.",
      },
    },
    { kind: "h", text: { en: "Scope & the tricky edges", ar: "النطاق والحدود الملغومة" } },
    {
      kind: "p",
      text: {
        en: "IFRS 2 applies to ALL entities — listed or not — and to ALL share-based payments: with employees for services, and with suppliers for goods. Unlisted companies get no relief: fair value is still required, modelled when no market price exists. Equity instruments include the shares of the entity, its PARENT, or another group entity (group plans). The standard does NOT apply to share-based payments used to identify a business combination's consideration (that is IFRS 3's contingent consideration) — but awards of the ACQUIREE that the acquirer assumes ARE IFRS 2 territory post-combination.",
        ar: "يطبق IFRS 2 على كل المنشآت — مدرجة كانت أم لا — وعلى كل المدفوعات على أساس الأسهم: مع العاملين مقابل خدمات، ومع الموردين مقابل سلع. ولا إعفاء للشركات غير المدرجة: القيمة العادلة مطلوبة ولو بنموذج حين لا يوجد سعر سوق. وتشمل أدوات الملكية أسهم المنشأة أو أصلها أو أي كيان بالمجموعة (خطط المجموعة). ولا يسري المعيار على المدفوعات بالأسهم المستخدمة ضمن مقابل الاندماج (فذلك المقابل المشروط في IFRS 3) — لكن جوائز المقتنى التي يتحملها المستحوذ تدخل أرض IFRS 2 بعد الاندماج.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "IN: options, RSUs, share appreciation rights, phantom shares, employee share purchase plans with a discount, IPO-conditional awards", ar: "داخل النطاق: الخيارات، الأسهم المقيدة حتى الشروط، حقوق تضخيم الأسهم، الأسهم الوهمية، خطط شراء الموظفين بخصم، الجوائز المشروطة بالطرح العام" },
        { en: "IN: grants of the PARENT's shares to any group employee — a group plan is IFRS 2 everywhere it touches", ar: "داخل النطاق: منح أسهم الأم لأي موظف بالمجموعة — فخطة المجموعة تدخل IFRS 2 أينما لمست" },
        { en: "OUT: IFRS 3 contingent consideration payable in shares; shares issued in a business combination itself", ar: "خارج النطاق: المقابل المشروط القابل للسداد بأسهم وفق IFRS 3؛ والأسهم المصدرة ضمن الاندماج ذاته" },
        { en: "OUT: employee benefits not linked to equity instruments (cash bonuses, profit shares) — IAS 19", ar: "خارج النطاق: مزايا العاملين غير المرتبطة بأدوات ملكية (المكافآت النقدية، المشاركة في الأرباح) — IAS 19" },
        { en: "EDGE: the counterparty may be an employee OR a supplier of goods (non-employee grants measured differently — see below)", ar: "حدّ ملغوم: قد يكون الطرف الآخر موظفًا أو مورد سلع (فمنح غير الموظفين تقاس بمنطق مختلف — انظر أدناه)" },
      ],
    },
    { kind: "h", text: { en: "Key definitions", ar: "التعريفات المفتاحية" } },
    {
      kind: "list",
      items: [
        { en: "GRANT DATE — the date the entity and the counterparty agree the share-based payment arrangement, with a shared understanding of the terms and the exercise price; the date fair value is LOCKED for equity-settled employee awards", ar: "تاريخ المنح — اتفاق المنشأة والطرف الآخر على شروط الترتيب بفهم مشترك للبنود وسعر التنفيذ؛ وهو التاريخ الذي تُقفل عنده القيمة العادلة لجوائز الموظفين المسواة بأسهم" },
        { en: "VESTING PERIOD — the period over which all the specified service conditions must be satisfied; the expense window", ar: "فترة الاستحقاق — الفترة التي يجب أن تستوفى فيها كل شروط الخدمة المحددة؛ وهي نافذة المصروف" },
        { en: "VESTING CONDITIONS — service conditions, performance conditions (MARKET vs NON-MARKET), and the true-up rules each triggers", ar: "شروط الاستحقاق — شروط الخدمة، وشروط الأداء (سوقية وغير سوقية)، ولكلٍّ منها قواعد تصحيحه" },
        { en: "MARKET CONDITION — a target tied to the entity's share price or share-price index (TSR vs an index); lives INSIDE the grant-date fair value", ar: "شرط سوقي — هدف مرتبط بسعر سهم المنشأة أو مؤشره (العائد الكلي مقابل مؤشر)؛ يسكن داخل القيمة العادلة بتاريخ المنح" },
        { en: "NON-MARKET performance condition — an earnings or output target; true-up the expected number each period", ar: "شرط أداء غير سوقي — هدف أرباح أو إنتاج؛ يصحح العدد المتوقع كل فترة" },
        { en: "FORFEITURE — the holder's genuine exit (resignation) before vesting; NOT the same as a cancellation", ar: "التخريد — خروج الحائز الأصيل (استقالة) قبل الاستحقاق؛ وليس كالإلغاء" },
        { en: "FAIR VALUE at grant date — market price if a listed instrument exists; otherwise an option-pricing model (volatility, expected life, dividends, risk-free rate)", ar: "القيمة العادلة بتاريخ المنح — سعر السوق إن وُجدت أداة مدرجة؛ وإلا فنموذج تسعير خيارات (التقلب، العمر المتوقع، التوزيعات، المعدل الخالي من المخاطر)" },
      ],
    },
    { kind: "h", text: { en: "The classification tree", ar: "شجرة التصنيف" } },
    {
      kind: "tree",
      root: { en: "Which share-based-payment world?", ar: "أي عالم من عوالم الدفع بالأسهم؟" },
      branches: [
        {
          when: { en: "EQUITY-SETTLED — the entity receives goods/services and settles in its OWN equity instruments (or another group entity's, for that entity's own grants)", ar: "تسوية بالملكية — تتلقى المنشأة السلع/الخدمات وتسدد بأدوات ملكيتها (أو أدوات كيان آخر بالمجموعة لمنحه هو)" },
          then: { en: "Measure at GRANT-DATE fair value of the instruments; do NOT remeasure — only the number trues up", ar: "يقاس بالقيمة العادلة للأدوات بتاريخ المنح؛ ولا يعاد قياسها — يصحح العدد وحده", red: true },
        },
        {
          when: { en: "CASH-SETTLED — the counterparty's claim is cash for a share-price-linked amount (share appreciation rights)", ar: "تسوية نقدية — مطالبة الطرف نقد يقدر بسعر السهم (حقوق تضخيم الأسهم)" },
          then: { en: "Measure the LIABILITY at fair value at EACH reporting date until settled — remeasure EVERY period through P&L", ar: "يقاس الالتزام بالقيمة العادلة في كل تاريخ تقرير حتى التسوية — يعاد قياسه كل فترة عبر الأرباح", red: true },
        },
        {
          when: { en: "CHOICE of settlement — either party may pick cash or shares (2016 amendments: the PRESENT-OBLIGATION test)", ar: "خيار تسوية — يختار أحد الطرفين نقدًا أو أسهمًا (تعديلات ٢٠١٦: اختبار الالتزام القائم)" },
          then: { en: "Present obligation to settle in cash → LIABILITY (cash-settled treatment); no present obligation (the ENTITY chooses and no past practice suggests cash) → EQUITY-SETTLED", ar: "التزام قائم بالتسوية نقدًا ← التزام (معالجة نقدية)؛ ولا التزام قائم (المنشأة تختار ولا ممارسة سابقة ترجح النقد) ← تسوية بالملكية", red: true },
        },
      ],
    },
    {
      kind: "steps",
      items: [
        { en: "1. WHO supplies the goods/services — employees (implicit services) or a non-employee supplier (identifiable consideration)?", ar: "١. من يقدم السلع/الخدمات — موظفون (خدمات ضمنية) أم مورد غير موظف (مقابل محدد؟)" },
        { en: "2. WHAT settles the claim — the entity's own equity, another group entity's equity, cash, or a choice?", ar: "٢. بماذا تُسوى المطالبة — ملكية المنشأة، أم ملكية كيان آخر بالمجموعة، أم نقد، أم خيار؟" },
        { en: "3. Equity-settled with employees → LOCK the grant-date fair value; the measurement date is the grant date", ar: "٣. تسوية بالملكية مع موظفين ← اقفل القيمة العادلة بتاريخ المنح؛ فهو تاريخ القياس" },
        { en: "4. Cash-settled (or a present obligation exists) → the liability is remeasured to the END of every reporting period until settled", ar: "٤. تسوية نقدية (أو التزام قائم) ← يعاد قياس الالتزام حتى نهاية كل فترة تقرير حتى التسوية" },
        { en: "5. Choice of settlement with NO present obligation → equity-settled; later settlement in cash → a share buy-back style equity deduction", ar: "٥. خيار تسوية بلا التزام قائم ← تسوية بالملكية؛ والتسوية النقدية لاحقًا ← خصم من حقوق الملكية على نمط إعادة شراء الأسهم" },
        { en: "6. Non-employees → measure at the DATE the goods/services are RECEIVED, at the fair value of the goods/services if more evident", ar: "٦. غير الموظفين ← القياس عند تلقي السلع/الخدمات، بقيمتها العادلة إن كانت أوضح دلالة" },
      ],
    },
    { kind: "h", text: { en: "The employee timing machine", ar: "آلة التوقيت للموظفين" } },
    {
      kind: "steps",
      items: [
        { en: "GRANT DATE — the date the entity and employee agree the terms (and the employee gets the FV data); with employees the service starts at grant date", ar: "تاريخ المنح — اتفاق الطرفين على الشروط (وحصول الموظف على بيانات العادلة)؛ وتبدأ خدمة الموظف عنده" },
        { en: "VESTING PERIOD — service conditions & (non-market) performance conditions define when rights vest; expense spreads over the vesting window", ar: "فترة الاستحقاق — شروط الخدمة والأداء (غير السوقية) تحدد لحظة استحقاق الحقوق؛ وينتشر المصروف عبرها" },
        { en: "MEASUREMENT DATE for equity-settled with employees: GRANT DATE (fair value locked at grant) — because measuring the shares/services on day one was impracticable, IFRS 2 locked the grant date", ar: "تاريخ القياس لموظفي التسوية بالملكية: يوم المنح (تقفل العادلة فيه)" },
        { en: "TRUE-UP: revise the ESTIMATE of the number that will vest (service & non-market performance conditions) at each reporting date — but NEVER the grant-date fair value", ar: "التصحيح: يراجع تقدير العدد المتوقع توارثه كل فترة (شروط الخدمة والأداء غير السوقية) — ولا تمس عادلة المنح أبدًا" },
        { en: "For NON-EMPLOYEES: measure at the DATE THE GOODS/SERVICES ARE RECEIVED (there is a measurable counterperformance)", ar: "لغير الموظفين: القياس عند تلقي السلع/الخدمات (فهناك أداء مقابل قابل للقياس)" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Why employees are special: their service cannot be measured reliably while it is being rendered, so IFRS 2 presumes the service starts at the grant date and builds the expense over the vesting period. The grant-date fair value of the INSTRUMENT is the measure — not the value of the employee's service — because the employee could sell the instrument's economics in the market (a deep-in-the-money option has value whatever the employee's effort). Only where the fair value of the goods or services is more EVIDENT (typically a supplier's quoted price) does that value take over.",
        ar: "لماذا يُعامل الموظفون بمنطق خاص: لا يمكن قياس خدمتهم قياسًا موثوقًا أثناء تأديتها، فيفترض IFRS 2 أن الخدمة تبدأ بتاريخ المنح ويبني المصروف عبر فترة الاستحقاق. والقيمة العادلة للأداة بتاريخ المنح هي المقياس — لا قيمة خدمة الموظف — لأن للموظف أن يبيع اقتصاديات الأداة في السوق (فالخيار العميق داخل النقود ذو قيمة أيًّا كان جهد الموظف). وفقط حين تكون العادلة للسلع أو الخدمات أوضح دلالة (سعر مورد مسعر عادةً) تحل محلها.",
      },
    },
    {
      kind: "formula",
      title: { en: "The cumulative-expense engine (equity-settled)", ar: "محرك المصروف التراكمي (بالتسوية بالملكية)" },
      lines: [
        { en: "Cumulative expense = grant-date FV per instrument × expected vesting number × (service elapsed ÷ total service)", ar: "المصروف التراكمي = عادلة المنح للأداة × العدد المتوقع توارثه × (الخدمة المنقضية ÷ الخدمة الكلية)" },
        { en: "Period expense = cumulative to date − expense already recognised", ar: "مصروف الفترة = التراكمي حتى التاريخ − المعترف به سابقًا" },
        { en: "Final period: lock the number to what ACTUALLY vested — the engine self-proves: lifetime expense = vested instruments × grant-date FV", ar: "الفترة الأخيرة: يثبَّت العدد على ما توارث فعلًا — والمحرك يبرهن نفسه: مصروف العمر = الأدوات المستحقة × عادلة المنح" },
        { en: "After the vesting date: no further expense, and FV changes post-vesting are irrelevant for equity-settled awards", ar: "بعد الاستحقاق: لا مصروف إضافي؛ ولا تعني تغيرات العادلة اللاحقة شيئًا لجوائز التسوية بالملكية" },
      ],
    },
    {
      kind: "example",
      title: { en: "Equity-settled grant — 1,000 options × FV 15, 10% forfeitures", ar: "منح بالتسوية بالملكية — ١٬٠٠٠ خيار × عادلة ١٥، وتخريد ١٠٪" },
      lines: [
        { en: "1 Jan Y1: 1,000 options granted to employees · grant-date FV 15 each · 3-year service condition · expected forfeitures 10% (900 expected to vest)", ar: "١ يناير س١: منح ١٬٠٠٠ خيار للموظفين · عادلة المنح ١٥ لكل خيار · شرط خدمة ٣ سنوات · تخريد متوقع ١٠٪ (يتوقع توارث ٩٠٠)" },
        { en: "Y1 expense = 1,000 × 90% × 15 × 1/3 = 4,500", ar: "مصروف س١ = ١٬٠٠٠ × ٩٠٪ × ١٥ × ⅓ = ٤٬٥٠٠" },
        { en: "Y2: estimate unchanged → cumulative = 900 × 15 × 2/3 = 9,000 → Y2 expense = 4,500", ar: "س٢: التقدير دون تغيير ← التراكمي = ٩٠٠ × ١٥ × ⅔ = ٩٬٠٠٠ ← مصروف س٢ = ٤٬٥٠٠" },
        { en: "Y3: more leavers than expected — 880 actually vest → cumulative = 880 × 15 = 13,200 → Y3 expense = 13,200 − 9,000 = 4,200", ar: "س٣: مغادرون أكثر من المتوقع — توارث ٨٨٠ فعليًا ← التراكمي = ٨٨٠ × ١٥ = ١٣٬٢٠٠ ← مصروف س٣ = ١٣٬٢٠٠ − ٩٬٠٠٠ = ٤٬٢٠٠" },
        { en: "Lifetime check: 4,500 + 4,500 + 4,200 = 13,200 = 880 vested × 15 — the engine self-proves", ar: "تحقق العمر: ٤٬٥٠٠ + ٤٬٥٠٠ + ٤٬٢٠٠ = ١٣٬٢٠٠ = ٨٨٠ مستحقًا × ١٥ — المحرك يبرهن نفسه" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Equity-settled — the accrual, then the exercise", ar: "التسوية بالملكية — الاستحقاق ثم الممارسة" },
      rows: [
        { dr: { en: "Employee benefit expense (Y1) 4,500", ar: "مصروف مزايا عاملين (س١) ٤٬٥٠٠" }, cr: { en: "Equity — share-based payment reserve 4,500", ar: "حقوق الملكية — احتياطي الدفع بالأسهم ٤٬٥٠٠" }, red: true },
        { dr: { en: "Employee benefit expense (Y2) 4,500 · (Y3) 4,200", ar: "مصروف مزايا عاملين (س٢) ٤٬٥٠٠ · (س٣) ٤٬٢٠٠" }, cr: { en: "Share-based payment reserve — nominal Dr expense / Cr equity at grant-date FV", ar: "احتياطي الدفع بالأسهم — مدين مصروف اسمي مقابل دائن حقوق ملكية بعادلة المنح" } },
        { dr: { en: "Cash (exercise price, say 5 × 880) 4,400", ar: "نقد (سعر التنفيذ، وليكن ٥ × ٨٨٠) ٤٬٤٠٠" } },
        { dr: { en: "Share-based payment reserve 13,200", ar: "احتياطي الدفع بالأسهم ١٣٬٢٠٠" }, cr: { en: "Share capital + share premium 17,600", ar: "رأس المال + علاوة الإصدار ١٧٬٦٠٠" }, red: true },
        { cr: { en: "Expired options (120 × 15 = 1,800 of reserve): the reserve STAYS in equity — general capital reserve, never reversed to P&L", ar: "الخيارات الساقطة (١٢٠ × ١٥ = ١٬٨٠٠ من الاحتياطي): يبقى الاحتياطي في حقوق الملكية — احتياطي رأسمالي عام لا يرد للأرباح أبدًا" }, red: true },
      ],
    },
    {
      kind: "journal",
      title: { en: "Vesting failure — the reversal (a SERVICE condition fails)", ar: "فشل الاستحقاق — الرد (إخفاق شرط خدمة)" },
      rows: [
        { dr: { en: "Share-based payment reserve 9,000", ar: "احتياطي الدفع بالأسهم ٩٬٠٠٠" }, cr: { en: "Employee benefit expense (reversal) 9,000", ar: "مصروف مزايا عاملين (رد) ٩٬٠٠٠" }, red: true },
        { cr: { en: "All remaining employees resign at the END of Y2 — the service condition can never be met, so the cumulative expense (900 × 15 × 2/3 = 9,000) unwinds through P&L", ar: "استقال جميع الموظفين المتبقين في نهاية س٢ — لن يتحقق شرط الخدمة أبدًا، فيُفك المصروف التراكمي (٩٠٠ × ١٥ × ⅔ = ٩٬٠٠٠) عبر الأرباح" }, red: true },
        { cr: { en: "A MARKET condition failing never triggers this entry — the fair value already priced the failure in", ar: "إخفاق شرط سوقي لا يثير هذا القيد أبدًا — فالقيمة العادلة سعّرت الإخفاق مسبقًا" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Market vs non-market conditions", ar: "الشروط السوقية وغير السوقية" } },
    {
      kind: "tree",
      root: { en: "The vesting condition's nature changes the true-up", ar: "طبيعة الشرط تغير التصحيح" },
      branches: [
        {
          when: { en: "SERVICE & NON-MARKET performance conditions (stay 3 years; hit an EBIT target)", ar: "شروط الخدمة والأداء غير السوقية (ابقَ ٣ سنوات؛ حقق هدف أرباح)" },
          then: { en: "TRUE-UP the number: adjust the expected vesting count each period; failure at the end = zero expense for the failed tranche (reversal through the cumulative engine)", ar: "صحّح العدد: يعدل المتوقع كل فترة؛ والفشل في النهاية يصفّر مصروف الحصة (رد عبر المحرك التراكمي)", red: true },
        },
        {
          when: { en: "MARKET conditions (share price ≥ X for 6 months; TSR vs index)", ar: "الشروط السوقية (سعر السهم ≥ س لستة أشهر؛ عائد كلي مقابل مؤشر)" },
          then: { en: "The market condition is baked INTO the grant-date fair value (an option model); NO true-up — recognise the full FV over the vesting window even if the market condition ultimately fails", ar: "الشرط السوقي مخبوء في عادلة المنح (نموذج خيارات)؛ ولا تصحيح — يعترف بالعادلة كاملة عبر الاستحقاق ولو فشل الشرط في النهاية", red: true },
        },
        {
          when: { en: "A condition fails that was ALWAYS outside IFRS 2's true-up world (a regulatory rejection)", ar: "شرط يفشل خارج عالم التصحيح (رفض رقابي)" },
          then: { en: "Treat as a CANCELLATION by the entity if the entity ends the arrangement: accelerate the remaining expense", ar: "يعامل إلغاءً من المنشأة إذا أنهته: يعجّل المصروف المتبقي", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The market-condition logic: an option model with a share-price hurdle ALREADY weighs the probability of the hurdle being cleared — that is what volatility and the risk-neutral framework do. Truing up again after the fact would double-count the same information. So a grant whose condition is 'share price must reach 20' keeps its full grant-date fair value spread over the vesting period even when the price never arrives: the expense stands. The one thing a market condition changes is the VESTING DATE mechanics — recognition over the period the condition could still be met, capped at the point the outcome is decided.",
        ar: "منطق الشرط السوقي: نموذج الخيارات بحاجز سعر سهم يزن مسبقًا احتمال تجاوز الحاجز — فهذا ما يفعله التقلب والإطار المتعادل تجاه المخاطر. وإعادة التصحيح بعد الواقعة تعدُّ المعلومة ذاتها مرتين. لذا يحتفظ المنح المشروط بـ«بلوغ السهم ٢٠» بكامل عادلة منحه منشورةً عبر فترة الاستحقاق وإن لم يبلغ السعر أبدًا: يبقى المصروف. والوحيد الذي يغيره الشرط السوقي هو ميكانيكا تاريخ الاستحقاق — الاعتراف عبر المدة التي ما يزال فيها تحقق الشرط ممكنًا، بسقف لحظة حسم النتيجة.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Non-market performance conditions ride the true-up engine: estimate the probable outcome each period (will the EBIT target be met?), revise the expected vesting number, and let the cumulative formula absorb the change. If the target is missed at the final hurdle, the tranche's expense unwinds to zero exactly like a service failure. The exam skill is spotting WHICH type of condition the question hides — one word ('share price', 'TSR', 'index') moves the number from the true-up column into the fair value.",
        ar: "شروط الأداء غير السوقية تركب محرك التصحيح: قدّر النتيجة المرجحة كل فترة (هل سيتحقق هدف الأرباح؟)، وعدّل العدد المتوقع، ودع المعادلة التراكمية تمتص التغير. وإن أخفق الهدف عند آخر عقبة انفك مصروف الحصة إلى الصفر كإخفاق الخدمة تمامًا. ومهارة الامتحان في التقاط نوع الشرط المخبوء في السؤال — فكلمة واحدة («سعر السهم»، «العائد الكلي»، «مؤشر») تنقل الرقم من عمود التصحيح إلى القيمة العادلة.",
      },
    },
    { kind: "h", text: { en: "Cash-settled grants — the mirror engine", ar: "المنح النقدية — المحرك المرآة" } },
    {
      kind: "p",
      text: {
        en: "A cash-settled award (SARs, phantom shares) creates a LIABILITY measured at the fair value of the claim at EVERY reporting date until it is settled. Where equity-settled locks the grant date, cash-settled unlocks the last day: the share price at the exercise date is the price that decides the payout, so the books must chase it period by period. Every remeasurement — up or down — runs through P&L; at settlement the liability extinguishes against cash. Because there is no equity component, there is nothing to lock, and nothing survives settlement.",
        ar: "الجائزة النقدية (حقوق التضخيم، الأسهم الوهمية) تنشئ التزامًا يقاس بالقيمة العادلة للمطالبة في كل تاريخ تقرير حتى تسويتها. وحيث تقفل التسوية بالملكية يوم المنح، تفتح النقدية اليوم الأخير: فسعر السهم يوم الممارسة هو من يقرر المدفوع، فتلاحقه الدفاتر فترةً فترة. وكل إعادة قياس — صعودًا أو هبوطًا — تمر بالأرباح؛ وعند التسوية ينطفئ الالتزام بالنقد. ولعدم وجود عنصر ملكية فلا شيء يُقفل ولا شيء ينجو من التسوية.",
      },
    },
    {
      kind: "example",
      title: { en: "SAR roll-forward — remeasured to the last day", ar: "ترحيل حقوق التضخيم — يعاد قياسها حتى اليوم الأخير" },
      lines: [
        { en: "10,000 SARs granted · 3-year service vesting · fair value per SAR at each year-end: 4.50 / 6.00 / 7.50", ar: "منح ١٠٬٠٠٠ حق تضخيم · استحقاق خدمي ٣ سنوات · العادلة للحق في نهاية كل سنة: ٤٫٥٠ / ٦٫٠٠ / ٧٫٥٠" },
        { en: "Y1: 10,000 × 4.50 × 1/3 = 15,000", ar: "س١: ١٠٬٠٠٠ × ٤٫٥٠ × ⅓ = ١٥٬٠٠٠" },
        { en: "Y2: cumulative 10,000 × 6.00 × 2/3 = 40,000 → Y2 expense = 25,000 (the remeasurement hits hard)", ar: "س٢: التراكمي ١٠٬٠٠٠ × ٦٫٠٠ × ⅔ = ٤٠٬٠٠٠ ← مصروف س٢ = ٢٥٬٠٠٠ (تضرب إعادة القياس بيد ثقيلة)" },
        { en: "Y3: cumulative 10,000 × 7.50 = 75,000 → Y3 expense = 35,000; settled in cash at 7.50 → payment 75,000", ar: "س٣: التراكمي ١٠٬٠٠٠ × ٧٫٥٠ = ٧٥٬٠٠٠ ← مصروف س٣ = ٣٥٬٠٠٠؛ وتسوية نقدية عند ٧٫٥٠ ← مدفوع ٧٥٬٠٠٠" },
        { en: "Lifetime check: 15,000 + 25,000 + 35,000 = 75,000 = the cash paid — the liability engine also self-proves", ar: "تحقق العمر: ١٥٬٠٠٠ + ٢٥٬٠٠٠ + ٣٥٬٠٠٠ = ٧٥٬٠٠٠ = النقد المدفوع — محرك الالتزام يبرهن نفسه أيضًا" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Cash-settled — accrual, remeasurement, settlement", ar: "التسوية النقدية — استحقاق وإعادة قياس وتسوية" },
      rows: [
        { dr: { en: "Employee benefit expense 15,000", ar: "مصروف مزايا عاملين ١٥٬٠٠٠" }, cr: { en: "Share-based payment liability 15,000", ar: "التزام دفع بالأسهم ١٥٬٠٠٠" }, red: true },
        { dr: { en: "Employee benefit expense 25,000 · then 35,000", ar: "مصروف مزايا عاملين ٢٥٬٠٠٠ ثم ٣٥٬٠٠٠" }, cr: { en: "Share-based payment liability — remeasured each reporting date AND at settlement", ar: "التزام الدفع بالأسهم — يعاد قياسه كل تقرير وعند التسوية" }, red: true },
        { dr: { en: "Share-based payment liability 75,000", ar: "التزام الدفع بالأسهم ٧٥٬٠٠٠" }, cr: { en: "Cash (SARs settled) 75,000", ar: "نقد (تسوية الحقوق) ٧٥٬٠٠٠" } },
      ],
    },
    { kind: "h", text: { en: "Choice of settlement — the present-obligation test", ar: "خيار التسوية — اختبار الالتزام القائم" } },
    {
      kind: "p",
      text: {
        en: "The 2016 amendments (effective 1 Jan 2018) replaced the old compound-instrument split with a single question: does the entity have a PRESENT OBLIGATION to settle in cash? It does when the CHOICE belongs to the counterparty (the entity cannot avoid the cash), or when its own past practice or the arrangement's terms create a valid expectation of cash. A present obligation → the whole award is a remeasured LIABILITY; none → the whole award is EQUITY-SETTLED. If the entity later settles an equity-classified award in cash, the payment is an equity transaction — a share buy-back in substance, never P&L.",
        ar: "استبدلت تعديلات ٢٠١٦ (السارية من ١ يناير ٢٠١٨) فصل الأداة المركبة القديم بسؤال واحد: هل على المنشأة التزام قائم بالتسوية نقدًا؟ ويقوم الالتزام حين يكون الخيار للطرف المقابل (فلا تستطيع المنشأة تجنب النقد)، أو حين تخلق ممارستها السابقة أو شروط الترتيب توقعًا مشروعًا بالنقد. التزام قائم ← الجائزة كلها التزام يعاد قياسه؛ ولا التزام ← الجائزة كلها بالملكية. وإذا سددت المنشأة لاحقًا جائزة مصنفة بالملكية نقدًا فالدفع معاملة حقوق ملكية — إعادة شراء أسهم في الجوهر، ولا يمس الأرباح أبدًا.",
      },
    },
    {
      kind: "tree",
      root: { en: "Who holds the choice of settlement?", ar: "بيد من خيار التسوية؟" },
      branches: [
        {
          when: { en: "The COUNTERPARTY chooses (cash or shares)", ar: "الخيار للطرف المقابل (نقد أو أسهم)" },
          then: { en: "Present obligation to settle in cash exists → account for the WHOLE award as CASH-SETTLED (a liability, remeasured); if the holder later picks shares, reclassify the liability to equity at that date", ar: "يلتزم قائم بالتسوية نقدًا ← عالج الجائزة كلها نقدية (التزام يعاد قياسه)؛ وإن اختار الحائز الأسهم لاحقًا فأعد تبويب الالتزام حقوق ملكية عندئذ", red: true },
        },
        {
          when: { en: "The ENTITY chooses, with no past practice or contractual terms pushing toward cash", ar: "الخيار للمنشأة دون ممارسة سابقة أو شروط تدفع نحو النقد" },
          then: { en: "No present obligation → EQUITY-SETTLED throughout; later settlement in cash = a share buy-back (equity deduction)", ar: "لا التزام قائم ← تسوية بالملكية من أولها لآخرها؛ والتسوية النقدية لاحقًا = إعادة شراء أسهم (خصم من حقوق الملكية)", red: true },
        },
        {
          when: { en: "A cash-settled award is later MODIFIED into an equity-settled one (2016 amendment)", ar: "جائزة نقدية تعدل لاحقًا إلى جائزة بالملكية (تعديل ٢٠١٦)" },
          then: { en: "Derecognise the liability; recognise equity at the FAIR VALUE of the equity instruments at the modification date; the difference between the liability's carrying and that fair value → P&L", ar: "استبعد الالتزام؛ واعترف بحقوق ملكية بالقيمة العادلة للأدوات عند تاريخ التعديل؛ والفرق بين دفترية الالتزام وتلك العادلة ← الأرباح", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Modifications", ar: "التعديلات" } },
    {
      kind: "p",
      text: {
        en: "A modification (repricing, extra awards, softer terms) never rewrites history: the ORIGINAL grant-date fair value keeps amortising, and the deal's improvement is captured as the INCREMENTAL fair value — the modification-date fair value of the new instruments minus the original grant-date fair value of the instruments replaced — charged over the REVISED remaining vesting period. Repricing after vesting hits P&L immediately for the increment. A modification that leaves value unchanged adds nothing, and a detrimental modification never reduces the original expense.",
        ar: "التعديل (إعادة تسعير، جوائز إضافية، شروط ألين) لا يعيد كتابة التاريخ: تستمر عادلة المنح الأصلية في الاستنفاد، ويلتقط التحسن بالقيمة العادلة التزایدية — عادلة الأدوات الجديدة بتاريخ التعديل مخصومًا منها عادلة الأدوات المستبدلة بتاريخ المنح الأصلي — وتحمَّل عبر فترة الاستحقاق المنقحة المتبقية. وإعادة التسعير بعد الاستحقاق تضرب بالزيادة في الأرباح فورًا. والتعديل الذي لا يغير القيمة لا يضيف شيئًا، والتعديل الضار لا يخفض المصروف الأصلي أبدًا.",
      },
    },
    {
      kind: "journal",
      title: { en: "Modification — the incremental fair value", ar: "التعديل — القيمة العادلة التزایدية" },
      rows: [
        { dr: { en: "Employee benefit expense 2,700", ar: "مصروف مزايا عاملين ٢٬٧٠٠" }, cr: { en: "Share-based payment reserve 2,700", ar: "احتياطي الدفع بالأسهم ٢٬٧٠٠" }, red: true },
        { cr: { en: "At the start of Y3: exercise price lowered → new instrument FV at modification 18 vs original grant-date FV 15 → incremental 3 × 900 unvested options = 2,700, over the remaining 1 year", ar: "في بداية س٣: خُفض سعر التنفيذ ← عادلة الأداة الجديدة عند التعديل ١٨ مقابل عادلة المنح الأصلية ١٥ ← تزاید ٣ × ٩٠٠ خيارًا غير مستحق = ٢٬٧٠٠ عبر السنة المتبقية" }, red: true },
        { cr: { en: "The original engine keeps running UNTOUCHED alongside — the 15 keeps amortising as if nothing happened", ar: "المحرك الأصلي يواصل سيره دون مساس — فالـ١٥ تستمر استنفادًا كأن شيئًا لم يكن" } },
      ],
    },
    { kind: "h", text: { en: "Cancellations & forfeitures", ar: "الإلغاء والتخريد" } },
    {
      kind: "p",
      text: {
        en: "A cancellation — by the entity, or by agreeing with the holder — ACCELERATES: whatever the original terms would have recognised over the REMAINING vesting period is recognised immediately. Any payment made to the holder is a deduction from equity up to the fair value of the instruments granted; anything beyond that is expense. A genuine FORFEITURE (the holder resigns) is not a cancellation: the true-up engine simply stops at the last estimate, with no acceleration and no clawback beyond it.",
        ar: "الإلغاء — من المنشأة أو باتفاق مع الحائز — يعجّل: يعترف فورًا بما كانت الشروط الأصلية ستقرره عبر فترة الاستحقاق المتبقية. وأي مدفوع للحائز خصم من حقوق الملكية حتى القيمة العادلة للأدوات الممنوحة؛ وما جاوزها مصروف. والتخريد الأصيل (استقالة الحائز) ليس إلغاءً: يتوقف محرك التصحيح عند آخر تقدير، بلا تعجيل ولا استرداد بعده.",
      },
    },
    {
      kind: "journal",
      title: { en: "Cancellation — accelerate the remainder", ar: "الإلغاء — عجّل المتبقي" },
      rows: [
        { dr: { en: "Employee benefit expense 4,500", ar: "مصروف مزايا عاملين ٤٬٥٠٠" }, cr: { en: "Share-based payment reserve 4,500", ar: "احتياطي الدفع بالأسهم ٤٬٥٠٠" }, red: true },
        { cr: { en: "Cancelled at the START of Y3 after cumulative 9,000 (Y1+Y2): remaining = 900 × 15 × 3/3 − 9,000 = 4,500 — booked NOW", ar: "أُلغي في بداية س٣ بعد تراكمي ٩٬٠٠٠ (س١+س٢): المتبقي = ٩٠٠ × ١٥ × ٣/٣ − ٩٬٠٠٠ = ٤٬٥٠٠ — يثبت الآن" }, red: true },
        { dr: { en: "Share-based payment reserve 13,500", ar: "احتياطي الدفع بالأسهم ١٣٬٥٠٠" }, cr: { en: "Cash paid to cancel (if any) · any excess over the instruments' fair value → P&L expense", ar: "نقد مدفوع للإلغاء (إن وُجد) · وما جاوز عادلة الأدوات ← مصروف بالأرباح" } },
        { cr: { en: "Cancellation of a CASH-settled award: recognise the remaining LIABILITY immediately — no equity ever existed", ar: "إلغاء جائزة نقدية: اعترف بالالتزام المتبقي فورًا — فلم توجد حقوق ملكية أصلًا" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Group arrangements", ar: "ترتيبات المجموعات" } },
    {
      kind: "tree",
      root: { en: "Who grants whose shares?", ar: "من يمنح أسهم من؟" },
      branches: [
        {
          when: { en: "A SUBSIDIARY's employees get the PARENT's shares", ar: "موظفو تابعة يحصلون على أسهم الأم" },
          then: { en: "The subsidiary books an equity-settled expense (a capital contribution from the parent) while the PARENT books an investment increase; consolidated: one equity-settled grant", ar: "تحجز التابعة مصروفًا بالتسوية بالملكية (مساهمة رأسمالية من الأم) وتزيد الأم استثمارها؛ وفي المجمعة: منح واحد بالملكية", red: true },
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
    {
      kind: "journal",
      title: { en: "Group payment — subsidiary's employees, PARENT's shares", ar: "دفع مجموعة — موظفو التابعة بأسهم الأم" },
      rows: [
        { dr: { en: "Subsidiary books: employee benefit expense 4,500", ar: "دفاتر التابعة: مصروف مزايا عاملين ٤٬٥٠٠" }, cr: { en: "Subsidiary: capital contribution from owner (equity) 4,500", ar: "التابعة: مساهمة رأسمالية من المالك (حقوق ملكية) ٤٬٥٠٠" }, red: true },
        { dr: { en: "Parent books: investment in subsidiary 4,500", ar: "دفاتر الأم: استثمار في التابعة ٤٬٥٠٠" }, cr: { en: "Parent: share-based payment reserve (equity) 4,500", ar: "الأم: احتياطي الدفع بالأسهم (حقوق ملكية) ٤٬٥٠٠" }, red: true },
        { cr: { en: "Consolidated view: Dr expense / Cr group equity — the two entries cancel to a single equity-settled grant; remember NCI shares the subsidiary's expense in consolidated profit", ar: "المنظور المجموع: مدين مصروف / دائن حقوق ملكية المجموعة — يتعادل القيدان في منح واحد بالملكية؛ وتذكر أن الحصة غير المسيطرة تتقاسم مصروف التابعة في الربح المجموع", }, red: true },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The substance of every group grant is the same: somebody's shareholders are paying for services rendered somewhere else in the group. The question that unlocks the entries is always WHOSE shares settle WHOSE employees — the subsidiary's equity-settled entry is a capital contribution (the parent pays through its own equity), never a liability; and in the parent's separate books the matching debit is the investment, not an expense.",
        ar: "جوهر كل منح جماعي واحد: مساهمو طرف ما يدفعون مقابل خدمات أديت في مكان آخر بالمجموعة. والسؤال الذي يفتح القيود دائمًا: أسهم من تسوّي خدمات من؟ — فقيد التابعة بالملكية مساهمة رأسمالية (الأم تسدد من حقوق ملكيتها)، لا التزامًا أبدًا؛ وفي دفاتر الأم المنفصلة يكون المدين المقابل هو الاستثمار لا المصروف.",
      },
    },
    { kind: "h", text: { en: "Non-employee grants", ar: "منح غير الموظفين" } },
    {
      kind: "p",
      text: {
        en: "When the counterparty is a SUPPLIER (goods or identifiable services), the grant-date presumption falls away: measure at the DATE THE GOODS OR SERVICES ARE RECEIVED, at their fair value — the pricing evidence sits in the supplier's invoice, so the reliable measure flips from the instrument to the consideration received. There is no vesting period to spread over unless the arrangement says so; the debit is the purchased asset (inventory, intangibles), not employee benefit expense. This is also where 'there is no grant date' questions live: if the parties never fix terms before delivery, the measurement date is simply the receipt date.",
        ar: "حين يكون الطرف المقابل موردًا (سلعًا أو خدمات محددة) يسقط افتراض تاريخ المنح: القياس عند تاريخ تلقي السلع أو الخدمات بقيمتها العادلة — فدليل التسعير في فاتورة المورد، فينقلب المقياس الموثوق من الأداة إلى المقابل المقبوض. ولا فترة استحقاق ينشر عليها المصروف إلا إن نص الترتيب؛ والمدين هو الأصل المشترى (مخزون، أصل غير ملموس) لا مصروف مزايا العاملين. وهنا أيضًا تعيش أسئلة «لا يوجد تاريخ منح»: فمتى لم يثبت الطرفان الشروط قبل التسليم صار تاريخ القياس تاريخ التلقي ببساطة.",
      },
    },
    { kind: "h", text: { en: "Disclosure essentials", ar: "أساسيات الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "The nature & terms of the arrangements: vesting conditions, maximum term, settlement choices", ar: "طبيعة الترتيبات وشروطها: شروط الاستحقاق والحد الأقصى للأجل وخيارات التسوية" },
        { en: "Movement in options/shares: outstanding & exercisable at start/end, granted, forfeited, exercised, cancelled, expired — with WEIGHTED-AVERAGE exercise prices, remaining contractual life and weighted-average fair value at grant", ar: "حركة الخيارات والأسهم: قائمة وممكنة الممارسة أول الفترة وآخرها، الممنوحة والمخردة والممارسة والملغاة والساقطة — بأسعار تنفيذ مرجحة وعمر متبقٍ وعادلة منح مرجحة" },
        { en: "Expense recognised for equity-settled and cash-settled arrangements separately; the fair-value measurement model, inputs and assumptions (volatility, dividends, risk-free rate)", ar: "المصروف المعترف به لكل نوع على حدة؛ ونموذج التقييم ومدخلاته (التقلب، التوزيعات، المعدل الخالي من المخاطر)" },
        { en: "For liabilities: carrying amount at start and end, and how they will be settled; the total and any expense arising from cash-settled transactions", ar: "للالتزامات: القيمة أول الفترة وآخرها وكيفية تسويتها؛ وإجمالي المصروف الناشئ عن المعاملات النقدية" },
        { en: "Grants still to vest: number, weighted-average FV at grant, remaining vesting period", ar: "المنح غير المستحقة بعد: العدد والعادلة المرجحة عند المنح وفترة الاستحقاق المتبقية" },
      ],
    },
    { kind: "h", text: { en: "The classic exam traps", ar: "فخاخ الامتحان الكلاسيكية" } },
    {
      kind: "list",
      items: [
        { en: "Market conditions live inside the FV — no true-up, no reversal, ever; a share-price target missed at the end still leaves the full expense standing", ar: "الشروط السوقية تسكن القيمة العادلة — لا تصحيح ولا رد أبدًا؛ ومعاكسة هدف سعر السهم في النهاية تترك المصروف كاملًا قائمًا" },
        { en: "Cancellations ACCELERATE (the remaining vesting expense lands now); forfeitures do NOT — the true-up engine just stops", ar: "الإلغاءات تعجّل (مصروف الاستحقاق المتبقي يهبط الآن)؛ والتخريد لا يعجل — بل يتوقف محرك التصحيح فحسب" },
        { en: "Expired unexercised options: the reserve stays in equity forever — never a P&L reversal", ar: "الخيارات الساقطة بلا ممارسة: يبقى الاحتياطي في حقوق الملكية أبدًا — لا رد للأرباح" },
        { en: "Cash-settled remeasures to the LAST day — the grant-date FV is only the first reading", ar: "النقدية يعاد قياسها حتى اليوم الأخير — فعادلة المنح أول قراءة فحسب" },
        { en: "Holder's choice = present obligation = liability; writing 'equity-settled because shares are offered' ignores the 2016 test", ar: "خيار الحائز = التزام قائم = التزام؛ وكتابة «تسوية بالملكية لأن الأسهم معروضة» تتجاهل اختبار ٢٠١٦" },
        { en: "Group grants: the subsidiary's credit is a capital CONTRIBUTION (equity), never a liability to the parent", ar: "منح المجموعة: دائن التابعة مساهمة رأسمالية (حقوق ملكية)، لا التزامًا تجاه الأم أبدًا" },
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
      kind: "tip",
      text: {
        en: "Vesting failure: a SERVICE or non-market condition failing reverses the cumulative expense; a MARKET condition failing does not — write which condition failed BEFORE you write the reversal.",
        ar: "فشل الاستحقاق: إخفاق شرط الخدمة أو غير السوقي يرد المصروف التراكمي؛ وإخفاق الشرط السوقي لا يرد — اكتب أي شرط أخفق قبل أن تكتب الرد.",
      },
    },
    {
      kind: "note",
      text: {
        en: "A grant date may not exist at all: non-employee transactions are measured when the goods/services are RECEIVED — there is nothing to lock at a grant that never happened.",
        ar: "تاريخ المنح قد لا يوجد أصلًا: معاملات غير الموظفين تقاس عند تلقي السلع/الخدمات — فلا مكان لقفل العادلة عند منحٍ لم يحدث.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Post-vesting share-price moves never touch equity-settled P&L — but they DO move diluted EPS (IAS 33's treasury method tracks the option's moneyness period by period).",
        ar: "تحركات سعر السهم بعد الاستحقاق لا تمس أرباح التسوية بالملكية — لكنها تحرك ربح السهم المخفف (فطريقة الأسهم الخزينة في IAS 33 تلاحق داخل النقود للخيار فترةً بفترة).",
      },
    },
    { kind: "h", text: { en: "Transition & effective dates", ar: "الانتقال وتواريخ السريان" } },
    {
      kind: "p",
      text: {
        en: "IFRS 2 became effective 1 Jan 2005, absorbing IFRIC 8 (treasury-share transactions) and IFRIC 11 (group arrangements) into its text. The June 2016 amendments — 'Classification and Measurement of Share-based Payment Transactions' — took effect 1 Jan 2018: they rebuilt the choice-of-settlement test around the present obligation, fixed the accounting when a cash-settled award is replaced by an equity-settled one, and clarified how vesting conditions affect cash-settled measurement. IFRS 1's Appendix D cut-off stands: apply IFRS 2 only to grants after 7 Nov 2002 that were unvested at the transition date.",
        ar: "سريان IFRS 2 من ١ يناير ٢٠٠٥، وضمّ نصه تفسيرَي IFRIC 8 (معاملات أسهم الخزينة) وIFRIC 11 (ترتيبات المجموعات). وتعديلات يونيو ٢٠١٦ — «تصنيف وقياس معاملات الدفع على أساس الأسهم» — سرت من ١ يناير ٢٠١٨: أعادت بناء اختبار خيار التسوية حول الالتزام القائم، وضبطت المحاسبة عند استبدال جائزة نقدية بأخرى بالملكية، ووضّحت أثر شروط الاستحقاق في قياس الجوائز النقدية. وحدُّ الملحق D في IFRS 1 قائم: يطبق IFRS 2 على المنح بعد ٧ نوفمبر ٢٠٠٢ غير المستحقة وقت الانتقال فقط.",
      },
    },
    { kind: "h", text: { en: "Interactions with the rest of the corpus", ar: "التقاطعات مع بقية المعايير" } },
    {
      kind: "list",
      items: [
        { en: "IFRS 3 — acquiree awards assumed in a business combination: the acquirer measures a liability for the replacement award at acquisition-date fair value; post-combination expense follows IFRS 2 for post-combination service only", ar: "IFRS 3 — جوائز المقتنى المتحملة في الاندماج: يقيس المستحوذ التزامًا للجائزة البديلة بالعادلة عند الاستحواذ؛ ومصروف ما بعد الاندماج يتبع IFRS 2 لخدمة ما بعد الاندماج فقط" },
        { en: "IAS 33 — diluted EPS by the treasury method: options in the money add to the diluted share count at each reporting date", ar: "IAS 33 — ربح السهم المخفف بطريقة الأسهم الخزينة: الخيارات داخل النقود تضيف إلى عدد الأسهم المخفف في كل تاريخ تقرير" },
        { en: "IFRS 10 / NCI — a subsidiary's share-based expense is shared with non-controlling interests in consolidated profit, per the subsidiary's own grant terms", ar: "IFRS 10 / الحصة غير المسيطرة — مصروف التابعة من الدفع بالأسهم تتقاسمه الحصة غير المسيطرة في الربح المجموع وفق شروط منحها هي" },
        { en: "IFRS 1 — first-time adopters apply IFRS 2 only to post-7 Nov 2002 unvested grants at the transition date", ar: "IFRS 1 — يطبق المتبنون الأوائل IFRS 2 على منح ما بعد ٧ نوفمبر ٢٠٠٢ غير المستحقة وقت الانتقال فقط" },
        { en: "IAS 19 — a cash bonus with no equity link stays out of IFRS 2; the border is the reference to equity instruments", ar: "IAS 19 — المكافأة النقدية بلا رابط ملكية تبقى خارج IFRS 2؛ والحد الفاصل هو الإشارة إلى أدوات الملكية" },
      ],
    },
  ],
}
