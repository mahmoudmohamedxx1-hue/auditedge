/** IAS 7 — Statement of Cash Flows */

import type { Standard } from "../types"

export const IAS_7: Standard = {
  code: "IAS 7",
  title: { en: "Statement of Cash Flows", ar: "قائمة التدفقات النقدية" },
  topic: "presentation",
  effective: { en: "Effective 1 Jan 1994 · reformatted by IFRS 18 in 2027", ar: "سارٍ من ١ يناير ١٩٩٤ · يعاد هيكلتها مع IFRS 18 عام ٢٠٢٧" },
  blocks: [
    { kind: "h", text: { en: "Objective", ar: "الهدف" } },
    {
      kind: "p",
      text: {
        en: "Require a statement of cash flows that classifies the period's cash receipts and payments into OPERATING, INVESTING and FINANCING activities — the statement reconciles profit or loss (an accrual number) to the change in cash and cash equivalents, so users can see how the entity generates and spends cash regardless of accrual timing. Cash = cash on hand + demand deposits; CASH EQUIVALENTS = short-term (≤ 3 months original maturity), highly liquid investments readily convertible to known amounts of cash with insignificant risk of value change.",
        ar: "يتطلب معيار IAS 7 قائمة تدفقات نقدية تبوب المقبوضات والمدفوعات النقدية للفترة إلى أنشطة تشغيلية واستثمارية وتمويلية — فتجسر القائمة الربح أو الخسارة (رقم استحقاقي) بالتغير في النقد وشبه النقد، فيرى المستخدم كيف تولّد المنشأة النقد وتنفقه بمعزل عن توقيت الاستحقاق. والنقد = النقد بالخزينة + الودائع تحت الطلب؛ وشبه النقد = استثمارات قصيرة الأجل (≤ ٣ أشهر عند نشأتها) عالية السيولة قابلة للتحويل لمبالغ معلومة بمخاطر ضئيلة بتغير القيمة.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Cash equivalents exist to park cash, not to earn a return — a 5-year bond 3 months before maturity is NOT a cash equivalent (original maturity matters). Bank overdrafts repayable on demand may be a component of cash.",
        ar: "شبه النقد وسيلة إيداع لا استثمار — فسند لخمس سنوات قبل استحقاقه بثلاثة أشهر ليس شبه نقد (العبرة بالأجل الأصلي). وقد تكون السحوبات المكشوفة المستحقة عند الطلب مكونًا من النقد.",
      },
    },
    {
      kind: "p",
      text: {
        en: "The statement applies to EVERY entity — from a one-product startup to a banking group — and a group presents it CONSOLIDATED (IFRS 10): the parent and its subsidiaries are a single economic unit, so the intragroup flows eliminate and only flows with the outside world appear. It is one of the primary statements IAS 1 demands, as fundamental as the balance sheet, because profit is an OPINION shaped by policies and estimates while cash is a FACT the bank can verify.",
        ar: "تطبق القائمة على كل منشأة — من الناشئة أحادية المنتج إلى المجموعة المصرفية — وتعرض في المجموعات قائمة مُجمّعة (IFRS 10): فالشركة الأم وتابعاتها وحدة اقتصادية واحدة، فتُستبعد التدفقات داخل المجموعة ولا يظهر إلا ما جرى مع العالم الخارجي. وهي إحدى القوائم الأولية التي يوجبها IAS 1 وذات أهمية توازي الميزانية؛ فالربح «رأي» تصوغه السياسات والتقديرات، أما النقد فـ«حقيقة» يستطيع البنك التحقق منها.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Assess the entity's ability to GENERATE cash and cash equivalents, and their timing and certainty", ar: "تقييم قدرة المنشأة على توليد النقد وشبه النقد وتوقيت ذلك وتأكده" },
        { en: "Compare operating performance across entities FREE of accrual-policy noise", ar: "مقارنة الأداء التشغيلي بين المنشآت بمعزل عن ضجيج سياسات الاستحقاق" },
        { en: "Judge liquidity, solvency and FINANCIAL FLEXIBILITY — can it pay dividends, service debt, seize opportunities?", ar: "الحكم على السيولة والملاءة والمرونة المالية — أتقدر على التوزيع وخدمة الدين واقتناص الفرص؟" },
        { en: "Explain the DIFFERENCE between profit and cash — the first question every analyst asks", ar: "تفسير الفرق بين الربح والنقد — أول سؤال يطرحه كل محلل" },
      ],
    },
    { kind: "h", text: { en: "The cash pool — definitions", ar: "مجموعة النقد — التعريفات" } },
    {
      kind: "list",
      items: [
        { en: "CASH: cash on hand and demand deposits (current accounts, call accounts)", ar: "النقد: النقد بالخزينة والودائع تحت الطلب (الحسابات الجارية ودون أجل)" },
        { en: "CASH EQUIVALENTS: short-term, highly liquid investments with a known amount of cash, insignificant risk of change — a 3-month ORIGINAL maturity rule of thumb (T-bills, money-market funds)", ar: "شبه النقد: استثمارات قصيرة الأجل عالية السيولة بمبلغ نقدي معلوم وبمخاطر تغير ضئيلة — قاعدة عملية: أجل أصلي ≤ ٣ أشهر (أذون خزانة، صناديق أسواق نقد)" },
        { en: "BANK OVERDRAFTS repayable on demand that form part of the entity's cash management → a component of the pool (a NEGATIVE piece of cash)", ar: "السحوبات المكشوفة المستحقة عند الطلب المكوِّنة جزءًا من إدارة النقد ← مكون من المجموعة (جزء سالب منها)" },
        { en: "RESTRICTED cash (pledged, exchange-controlled, held for a purpose) is disclosed separately — it is cash but not FREE cash", ar: "النقد المقيد (مرهون، مقيد بالصرف، مخصص لغرض) يفصح عنه منفصلًا — فهو نقد لكنه ليس حرًا" },
      ],
    },
    { kind: "h", text: { en: "The three activities", ar: "الأنشطة الثلاثة" } },
    {
      kind: "p",
      text: {
        en: "OPERATING is the engine — the cash the business itself spins from customers after paying suppliers, employees and the tax man. INVESTING builds the machine — the cash poured into and recovered from long-term assets and investments. FINANCING funds it — the cash raised from and returned to owners and lenders. A healthy mature entity shows operating INFLOWS funding investing OUTFLOWS and returning the surplus to capital providers; an entity funding operations by selling assets or rolling debt is telling a story the P/L hides.",
        ar: "التشغيلي هو المحرك — النقد الذي يدره النشاط ذاته من العملاء بعد سداد الموردين والعاملين والضرائب. والاستثماري يبني الآلة — النقد المستثمر في الأصول طويلة الأجل والمسترد منها. والتمويلي يمول ذلك كله — النقد المحصل من الملاك والمقرضين والمرجع إليهم. فالمنشأة الناضجة السليمة تظهر تدفقات تشغيلية واردة تمول التدفقات الاستثمارية الخارجة وترد الفائض لممولي رأس المال؛ أما من يمول تشغيله ببيع أصوله أو تدوير دينه فيحكي قصة تخفيها قائمة الأرباح.",
      },
    },
    {
      kind: "tree",
      root: { en: "Where does a cash flow belong?", ar: "أين يقع التدفق النقدي؟" },
      branches: [
        {
          when: { en: "Principal revenue-producing activities — cash from customers, paid to suppliers and employees", ar: "الأنشطة الرئيسية المولدة للإيراد — مقبوضات من العملاء ومدفوعات للموردين والعاملين" },
          then: { en: "OPERATING — the engine of the business", ar: "تشغيلي — محرك النشاط", red: true },
        },
        {
          when: { en: "Acquiring and disposing of long-term assets & other investments not included in cash equivalents", ar: "اقتناء والتخرد من أصول طويلة الأجل واستثمارات خارج شبه النقد" },
          then: { en: "INVESTING — cash paid for PPE, intangibles, equity/debt instruments; proceeds from disposals", ar: "استثماري — مدفوعات الممتلكات وغير الملموسة والأدوات، ومتحصلات التخرد", red: true },
        },
        {
          when: { en: "Changes in size & composition of contributed equity and borrowings", ar: "تغيرات حجم وهيكل حقوق الملكية المساهمة والاقتراضات" },
          then: { en: "FINANCING — proceeds from shares/loans/bonds, repayment of borrowings, lease PRINCIPAL payments", ar: "تمويلي — متحصلات الأسهم والقروض والسندات، وسداد الاقتراضات، وأقساط الإيجار الأصلية", red: true },
        },
      ],
    },
    {
      kind: "list",
      items: [
        { en: "INVESTING detail: cash paid for PPE, intangibles and biological assets; purchases & sales of other entities' equity/debt instruments (not cash equivalents); loans made to other parties and their collection; proceeds from disposals", ar: "تفصيل الاستثماري: النقد المدفوع للممتلكات وغير الملموسة والأصول الحيوية؛ شراء وبيع أدوات الملكية والدين للغير (خارج شبه النقد)؛ القروض الممنوحة للغير وتحصيلها؛ متحصلات التخرد" },
        { en: "Capitalised development costs and interest? The INTEREST CAPITALISED into an asset travels with the asset's price — investing; the P&L interest charge goes where the interest-paid policy sends it", ar: "تكاليف التطوير المرسملة والفوائد؟ الفوائد المرسملة في الأصل تسافر مع سعر الأصل — إلى الاستثماري؛ أما فوائد قائمة الأرباح فتتبع سياسة الفوائد المدفوعة" },
        { en: "FINANCING detail: share issue proceeds net of issue costs; treasury-share buy-backs; loan and bond drawdowns; REPAYMENT of borrowings principal; lease principal payments; dividends paid (incl. those to NCI)", ar: "تفصيل التمويلي: متحصلات إصدار الأسهم صافيةً من تكاليفه؛ إعادة شراء الأسهم؛ السحب من القروض والسندات؛ سداد أصل الاقتراضات؛ أقساط الإيجار الأصلية؛ التوزيعات المدفوعة (بما فيها نصيب غير المسيطرين)" },
      ],
    },
    { kind: "h", text: { en: "Operating — the two methods", ar: "التشغيلي — الطريقتان" } },
    {
      kind: "p",
      text: {
        en: "The DIRECT method reports gross operating receipts and payments — cash received from customers, cash paid to suppliers and employees — and the IASB ENCOURAGES it because it maps one-to-one onto how the business runs. The INDIRECT method starts from profit or loss and works back to cash; it dominates practice because the ledger already contains the accrual numbers and only adjustments are needed. Both produce the SAME total — the choice is about the story the lines tell, not the answer.",
        ar: "الطريقة المباشرة تعرض المقبوضات والمدفوعات التشغيلية بإجماليها — النقد المقبوض من العملاء والمدفوع للموردين والعاملين — ويشجعها مجلس IASB لأنها تطابق طريقة عمل النشاط نفسه. والطريقة غير المباشرة تبدأ من الربح أو الخسارة وتعود إلى النقد؛ وهي المسيطرة عمليًا لأن الدفاتر تحمل أرقام الاستحقاق أصلًا فلا تحتاج إلا تسويات. وتصل الطريقتان إلى الإجمالي ذاته — فالاختبار في قصة السطور لا في الناتج.",
      },
    },
    {
      kind: "steps",
      items: [
        { en: "DIRECT method — gross cash in and out: cash received from customers, cash paid to suppliers and employees. Entities prefer it; the IASB encourages it because it maps 1:1 to the business", ar: "الطريقة المباشرة — إجمالي المقبوضات والمدفوعات: نقد العملاء ونقد الموردين والعاملين. يشجعها المجلس لدقة صورتها" },
        { en: "INDIRECT method — start from PROFIT OR LOSS, strip out non-cash items (depreciation, impairment, FX gains, finance costs, share-based payment, deferred tax), then adjust for working-capital movements", ar: "الطريقة غير المباشرة — ابدأ بالربح أو الخسارة، واحذف غير النقدي (إهلاك، انخفاض قيمة، فروق صرف، تكاليف تمويلية، دفع بالأسهم، ضريبة مؤجلة) ثم عدل بحركات رأس المال العامل" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The indirect bridge", ar: "جسر الطريقة غير المباشرة" },
      lines: [
        { en: "Operating cash flow = Profit before tax", ar: "التدفق التشغيلي = الربح قبل الضريبة" },
        { en: "  + depreciation & amortisation + impairment losses (non-cash charges)", ar: "  + الإهلاك والاستنفاد وخسائر انخفاض القيمة (غير نقدية)" },
        { en: "  − share of profit of associates (non-cash) + dividends received from them", ar: "  − نصيب الزميلات من الربح (غير نقدي) + التوزيعات المقبوضة منها" },
        { en: "  − investment income & interest income/expense (unless presenting them within operating)", ar: "  − عوائد الاستثمار وإيراد/مصروف الفوائد (إلا إذا عُرضت ضمن التشغيلي)" },
        { en: "  + decrease in receivables & inventory − increase in payables (working capital)", ar: "  + نقص المدينين والمخزون − زيادة الدائنين (رأس المال العامل)" },
        { en: "  ± loss/gain on disposal of assets (remove the gain, keep the cash in investing)", ar: "  ± خسارة/مكسب التخرد (احذف المكسب وأبقِ النقد في الاستثماري)" },
        { en: "  − interest paid − taxes paid (following the classification policy)", ar: "  − الفوائد المدفوعة − الضرائب المدفوعة (تبعًا لسياسة التبويب)" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The direct-method conversions", ar: "تحويلات الطريقة المباشرة" },
      lines: [
        { en: "Cash from customers = revenue + opening receivables − closing receivables − bad debts written off", ar: "النقد من العملاء = الإيراد + مدينون افتتاحي − مدينون ختامي − ديون معدومة" },
        { en: "Cash paid to suppliers = purchases + increase in inventory + opening payables − closing payables", ar: "النقد للموردين = المشتريات + زيادة المخزون + دائنون افتتاحي − دائنون ختامي" },
        { en: "Cash paid to employees = wages & salaries expense + opening accruals − closing accruals (incl. pension & bonus accruals)", ar: "النقد للعاملين = مصروف الأجور + مستحقات افتتاحية − مستحقات ختامية (بما فيها مستحقات المعاش والمكافآت)" },
        { en: "Purchases = cost of sales + closing inventory − opening inventory", ar: "المشتريات = تكلفة المبيعات + مخزون ختامي − مخزون افتتاحي" },
      ],
    },
    { kind: "h", text: { en: "Interest, dividends & taxes — the choices", ar: "الفوائد والتوزيعات والضرائب — الخيارات" } },
    {
      kind: "tree",
      title: { en: "The four policy flows — IAS 7 lets the entity choose (and keeps it consistent)", ar: "تدفقات السياسة الأربعة — يجيز IAS 7 الخيار مع وجوب الثبات" },
      root: { en: "Where do interest & dividends sit?", ar: "أين تقع الفوائد والتوزيعات؟" },
      branches: [
        {
          when: { en: "Interest PAID", ar: "الفوائد المدفوعة" },
          then: { en: "OPERATING (common) or FINANCING — the choice is a POLICY, applied consistently to all similar flows", ar: "تشغيلي (الشائع) أو تمويلي — الخيار سياسة تُطبق بثبات على كل التدفقات المماثلة", red: true },
        },
        {
          when: { en: "Interest RECEIVED", ar: "الفوائد المقبوضة" },
          then: { en: "OPERATING (common) or INVESTING", ar: "تشغيلي (الشائع) أو استثماري", red: true },
        },
        {
          when: { en: "Dividends PAID (to owners; those to NCI → financing)", ar: "التوزيعات المدفوعة (للملاك؛ ولغير المسيطرين ← تمويلي)" },
          then: { en: "OPERATING or FINANCING (common)", ar: "تشغيلي أو تمويلي (الشائع)", red: true },
        },
        {
          when: { en: "Dividends RECEIVED", ar: "التوزيعات المقبوضة" },
          then: { en: "OPERATING (common) or INVESTING", ar: "تشغيلي (الشائع) أو استثماري", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Whichever category is chosen, the flows are disclosed GROSS within it: interest paid, interest and dividends received, dividends paid each appear as their own line — never bundled into an unlabelled blob. A bank or insurer typically takes them ALL into operating (they are its trade); a manufacturer typically pushes paid interest and paid dividends into financing and received flows into investing or operating.",
        ar: "أيًّا كانت الفئة المختارة تُفصح التدفقات داخلها بإجماليها: الفوائد المدفوعة، والفوائد والتوزيعات المقبوضة، والتوزيعات المدفوعة — كلٌّ سطر مستقل، ولا حشد إطلاقًا في كتلة بلا تسمية. فالمصرف أو المؤمِّن يدرجها عادة كلها في التشغيلي (فهي تجارته)؛ والصانع عادة يدفع بالفوائد والتوزيعات المدفوعة إلى التمويلي والمقبوضة إلى الاستثماري أو التشغيلي.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "The choice must be applied CONSISTENTLY period to period — flipping categories between years kills comparability", ar: "يطبق الخيار بثبات من فترة لأخرى — فتبديل الفئات بين السنين يقتل المقارنة" },
        { en: "Income taxes — normally OPERATING and separately disclosed; split out and allocate to investing/financing when the tax is DIRECTLY attributable to those flows (e.g. tax on disposal proceeds)", ar: "ضرائب الدخل — تشغيلي عادة وتفصح منفصلة؛ وتُفصل وتخصص للاستثماري/التمويلي عند إسناد الضريبة مباشرة لتلك التدفقات (كضريبة متحصلات التخرد)" },
        { en: "Interest & dividends classified must be disclosed GROSS within their chosen category", ar: "يجب إفصاح الفوائد والتوزيعات المبوبة بإجماليها داخل الفئة المختارة" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The four policy flows in entries", ar: "تدفقات السياسة الأربعة بالقيود" },
      rows: [
        { dr: { en: "Finance cost 32", ar: "مصروف تمويلي ٣٢" }, cr: { en: "Cash 32 — interest PAID → operating or financing per policy", ar: "النقد ٣٢ — فوائد مدفوعة ← تشغيلي أو تمويلي تبعًا للسياسة" }, red: true },
        { dr: { en: "Cash 15", ar: "النقد ١٥" }, cr: { en: "Investment income 15 — interest RECEIVED → operating or investing", ar: "إيراد استثمارات ١٥ — فوائد مقبوضة ← تشغيلي أو استثماري" }, red: true },
        { dr: { en: "Retained earnings 60", ar: "أرباح محتجزة ٦٠" }, cr: { en: "Cash 60 — dividends PAID → operating or financing (to NCI: financing)" , ar: "النقد ٦٠ — توزيعات مدفوعة ← تشغيلي أو تمويلي (ولغير المسيطرين: تمويلي)" } },
        { dr: { en: "Cash 8", ar: "النقد ٨" }, cr: { en: "Investment income 8 — dividends RECEIVED → operating or investing", ar: "إيراد استثمارات ٨ — توزيعات مقبوضة ← تشغيلي أو استثماري" } },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Income taxes are normally reported in OPERATING — but IAS 7.36 lets the entity allocate tax flows to INVESTING or FINANCING when they can be separately identified and directly attributed to those activities: the tax on the gain crystallised in a disposal's proceeds belongs with the disposal in investing. The total tax PAID is disclosed separately either way — users need it to reconcile the tax expense (which contains deferred tax) to the cash that actually left.",
        ar: "تعرض ضرائب الدخل عادة في التشغيلي — لكن IAS 7.36 يجيز تخصيص التدفقات الضريبية للاستثماري أو التمويلي عندما يمكن تحديدها منفصلة وإسنادها مباشرة لتلك الأنشطة: فضريبة المكسب المتحقق في متحصلات التخرد تتبع التخرد في الاستثماري. وعلى أي حال يفصح عن إجمالي الضريبة المدفوعة منفصلًا — فالمستخدم يحتاجها لتسوية مصروف الضريبة (وفيه ضريبة مؤجلة) مع النقد الخارج فعليًا.",
      },
    },
    { kind: "h", text: { en: "IFRS 16 changed your cash-flow statement", ar: "IFRS 16 غيّر قائمة تدفقاتك النقدية" } },
    {
      kind: "list",
      items: [
        { en: "Lessee lease payments: PRINCIPAL → financing; the INTEREST portion → operating or financing (following the interest-paid policy)", ar: "مدفوعات المستأجر: أصل القسط ← تمويلي؛ وجزء الفائدة ← تشغيلي أو تمويلي تبعًا لسياسة الفوائد" },
        { en: "Short-term & low-value lease expensing → operating", ar: "الإيجارات قصيرة الأجل ومنخفضة القيمة ← تشغيلي" },
        { en: "Effect: total cash flows unchanged, but OPERATING cash flow LOOKS stronger than under IAS 17 operating leases — a classic analyst-adjustment point", ar: "الأثر: إجمالي التدفقات لا يتغير، لكن التدفق التشغيلي يبدو أقوى مما كان في عقود التشغيل وفق IAS 17 — نقطة تعديل شهيرة لدى المحللين" },
        { en: "Variable lease payments not in the lease liability → operating", ar: "المدفوعات المتغيرة خارج التزام الإيجار ← تشغيلي" },
      ],
    },
    { kind: "h", text: { en: "Non-cash transactions & the FX layer", ar: "المعاملات غير النقدية وطبقة العملات" } },
    {
      kind: "p",
      text: {
        en: "Non-cash transactions are EXCLUDED from the statement entirely and disclosed separately: acquisition of assets by assuming liabilities (finance-lease additions), conversion of debt to equity, acquisition of a subsidiary by issuing shares. Only actual cash-in and cash-out lines the statement — the moment a 'flow' is settled in shares or by offset, it leaves the statement and moves to the notes.",
        ar: "تُستبعد المعاملات غير النقدية من القائمة كليًا وتفصح منفصلة: اقتناء أصول بتحمل التزامات (إضافات الإيجار التمويلي)، وتحويل الدين إلى حقوق ملكية، والاستحواذ بإصدار أسهم. فالقائمة للنقد الفعلي دخولًا وخروجًا — وحين تُسوى «التدفقات» بأسهم أو بالمقاصة تغادر القائمة إلى الإيضاحات.",
      },
    },
    {
      kind: "tree",
      title: { en: "Is it a cash flow at all?", ar: "هل هو تدفق نقدي أصلًا؟" },
      root: { en: "The transaction settled — with CASH, or with something else?", ar: "كيف سُويت المعاملة — بالنقد أم بغيره؟" },
      branches: [
        {
          when: { en: "Shares issued to acquire a subsidiary / debt converted to equity", ar: "إصدار أسهم لاقتناء تابعة / تحويل دين إلى حقوق ملكية" },
          then: { en: "EXCLUDED from the statement — disclosed as a non-cash transaction", ar: "مستبعد من القائمة — يفصح عنه كمعاملة غير نقدية", red: true },
        },
        {
          when: { en: "Asset acquired under a lease (IFRS 16 right-of-use addition)", ar: "أصل مقتن بموجب إيجار (إضافة حق استخدام وفق IFRS 16)" },
          then: { en: "EXCLUDED at inception — only the lease PRINCIPAL payments and interest reach the statement", ar: "مستبعد عند النشأة — ولا يصل القائمة إلا أقساط الإيجار الأصلية وفوائدها", red: true },
        },
        {
          when: { en: "Unrealised exchange differences on cash held in foreign currency", ar: "فروق صرف غير محققة على نقد بالعملة الأجنبية" },
          then: { en: "NOT cash flows — but shown as a single reconciling line so the statement ties to the reported cash", ar: "ليست تدفقات — لكنها تُعرض سطر تسوية واحدًا لتتطابق القائمة مع النقد المفصح", red: true },
        },
        {
          when: { en: "Receivables factored WITHOUT recourse", ar: "خصم مدينين دون حق الرجوع" },
          then: { en: "Operating cash INFLOW — the collection risk has genuinely left", ar: "تدفق تشغيلي وارد — فقد غادرت مخاطرة التحصيل فعلًا", red: true },
        },
        {
          when: { en: "Receivables factored WITH recourse", ar: "خصم مدينين مع حق الرجوع" },
          then: { en: "Follows the IFRS 9 derecognition answer — if the risks stayed, so did the receivable (and there is no operating inflow)", ar: "يتبع جواب استبعاد الاعتراف في IFRS 9 — فإن بقيت المخاطر بقي المدينون (ولا تدفق تشغيلي)" },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Record foreign-currency cash flows at the rate on the DATE of the cash flow — an average rate is acceptable unless it distorts (volatile quarters, devaluations). Unrealised exchange gains and losses on cash held are NOT cash flows, but the statement must still reconcile to the reported balance, so the FX effect on cash appears as a SINGLE line — usually in operating — forcing the opening-cash-plus-flows to equal the closing cash actually reported. In the consolidated statement, foreign subsidiaries' flows are included at transaction-date rates consistent with IAS 21.",
        ar: "تسجل التدفقات بالعملة الأجنبية بسعر تاريخ التدفق — ويجوز المتوسط ما لم يشوه (أرباع متقلبة، تخفيضات). وفروق الصرف غير المحققة على النقد ليست تدفقات، لكن القائمة يجب أن تتسق مع الرصيد المفصح، فيعرض أثر الصرف سطرًا واحدًا — غالبًا في التشغيلي — ليُلزم النقد الافتتاحي مضافًا إليه التدفقات بمساواة النقد الختامي المفصح. وفي القائمة المجمعة تدرج تدفقات التابعة الأجنبية بأسعار تواريخ المعاملات وفق IAS 21.",
      },
    },
    {
      kind: "example",
      title: { en: "The FX reconciling line", ar: "سطر تسوية العملات" },
      lines: [
        { en: "Opening cash & equivalents 120 · net inflows for the year 400 · closing cash reported 510", ar: "نقد افتتاحي وشبهه ١٢٠ · صافي تدفقات واردة خلال السنة ٤٠٠ · نقد ختامي مفصح ٥١٠" },
        { en: "120 + 400 = 520 ≠ 510 → the missing 10 is the effect of exchange-rate CHANGES on the balances held", ar: "١٢٠ + ٤٠٠ = ٥٢٠ ≠ ٥١٠ ← الفارق ١٠ هو أثر تغيرات أسعار الصرف على الأرصدة المحتفظ بها" },
        { en: "Statement shows: opening 120 + operating/investing/financing 400 − FX effect 10 = closing 510 — it ties", ar: "تعرض القائمة: افتتاحي ١٢٠ + تدفقات ٤٠٠ − أثر الصرف ١٠ = ختامي ٥١٠ — فتتطابق" },
      ],
    },
    { kind: "h", text: { en: "Acquisitions & disposals of subsidiaries", ar: "اقتناء التابعة والتخرد منها" } },
    {
      kind: "p",
      text: {
        en: "The aggregate flows from acquiring or disposing of a subsidiary are presented SEPARATELY as investing activities — and the statement line shows the purchase price NET OF THE CASH AND EQUIVALENTS ACQUIRED, while the notes unpack the gross story: the total purchase consideration, the cash and equivalents acquired, and the assets and liabilities other than cash taken over. Same for a disposal — proceeds shown net of cash disposed. Cash paid to acquire an NCI stake, and NCI dividends, are FINANCING flows.",
        ar: "تعرض التدفقات الإجمالية لاكتتناء تابعة أو التخرد منها منفصلةً في الأنشطة الاستثمارية — ويعرض سطر القائمة ثمن الشراء صافيًا من النقد وشبه النقد المقتنى، بينما تفصح الإيضاحات القصة بالإجمالي: إجمالي مقابل الشراء، والنقد وشبهه المقتنى، والأصول والالتزامات غير النقدية المنتقلة. وكذلك التخرد — تعرض المتحصلات صافيةً من النقد المتخرد منه. والنقد المدفوع لاقتناء حصة غير مسيطرة وتوزيعات غير المسيطرين تدفقات تمويلية.",
      },
    },
    { kind: "h", text: { en: "The indirect bridge worked", ar: "الجسر غير المباشر محسوبًا" } },
    {
      kind: "journal",
      title: { en: "Worked mini indirect bridge", ar: "جسر غير مباشر مصغر" },
      rows: [
        { dr: { en: "Profit before tax 500", ar: "الربح قبل الضريبة ٥٠٠" } },
        { dr: { en: "+ depreciation 120 · impairment 30 · loss on disposal 10", ar: "+ إهلاك ١٢٠ · انخفاض قيمة ٣٠ · خسارة تخرد ١٠" } },
        { dr: { en: "− profit of associates (40) · interest income (15)", ar: "− ربح الزميلات (٤٠) · إيراد فوائد (١٥)" } },
        { dr: { en: "+ increase in payables 25 · decrease in receivables 35 · decrease in inventory 20", ar: "+ زيادة الدائنين ٢٥ · نقص المدينين ٣٥ · نقص المخزون ٢٠" } },
        { cr: { en: "Cash generated from operations = 685", ar: "النقد الناشئ من العمليات = ٦٨٥" }, red: true },
        { cr: { en: "− interest paid (32) − taxes paid (95)", ar: "− فوائد مدفوعة (٣٢) − ضرائب مدفوعة (٩٥)" } },
        { cr: { en: "Net cash from operating activities = 558", ar: "صافي النقد من الأنشطة التشغيلية = ٥٥٨" } },
      ],
    },
    {
      kind: "example",
      title: { en: "Full indirect bridge — bigger numbers", ar: "جسر غير مباشر كامل — بأرقام أكبر" },
      lines: [
        { en: "PBT 800 · depreciation 150 · gain on disposal (40) · share of associates' profit (60) · interest income (25)", ar: "ربح قبل الضريبة ٨٠٠ · إهلاك ١٥٠ · مكسب تخرد (٤٠) · نصيب الزميلات (٦٠) · إيراد فوائد (٢٥)" },
        { en: "Working capital: receivables UP (70) · inventory down +30 · payables up +45", ar: "رأس المال العامل: مدينون زيادة (٧٠) · مخزون نقص ٣٠+ · دائنون زيادة ٤٥+" },
        { en: "Cash generated from operations = 800 + 150 − 40 − 60 − 25 − 70 + 30 + 45 = 830", ar: "النقد الناشئ من العمليات = ٨٠٠ + ١٥٠ − ٤٠ − ٦٠ − ٢٥ − ٧٠ + ٣٠ + ٤٥ = ٨٣٠" },
        { en: "− interest paid 35 − income taxes paid 110 → net cash from OPERATING = 685", ar: "− فوائد مدفوعة ٣٥ − ضرائب مدفوعة ١١٠ ← صافي النقد التشغيلي = ٦٨٥" },
      ],
    },
    { kind: "h", text: { en: "One event, two statements", ar: "حدث واحد، قائمتان" } },
    {
      kind: "p",
      text: {
        en: "The gain-on-disposal paradox: the GAIN is not cash — it is the difference between the price and the carrying amount. The CASH is the full proceeds, and they belong to INVESTING. So the indirect bridge REMOVES the gain from operating (leaving the statement honest about trading cash) while investing shows the whole gross receipt. Every disposal question turns on this split.",
        ar: "مفارقة مكسب التخرد: المكسب ليس نقدًا — بل هو الفرق بين الثمن والقيمة الدفترية. والنقد هو كامل المتحصلات وهو من نصيب الاستثماري. لذلك يحذف الجسر غير المباشر المكسب من التشغيلي (لتصدق القائمة في نقد التشغيل) بينما يعرض الاستثماري المتحصل كاملًا بإجماليه. وكل مسألة تخرد تدور حول هذا التقسيم.",
      },
    },
    {
      kind: "journal",
      title: { en: "Equipment sold for 50 (cost 70, accumulated depreciation 30)", ar: "بيع معدات بـ ٥٠ (تكلفة ٧٠، مجمع إهلاك ٣٠)" },
      rows: [
        { dr: { en: "Cash 50 (full proceeds)", ar: "النقد ٥٠ (كامل المتحصلات)" }, cr: { en: "Equipment 70 — derecognise the cost", ar: "معدات ٧٠ — استبعاد التكلفة" } },
        { dr: { en: "Accumulated depreciation 30", ar: "مجمع الإهلاك ٣٠" }, cr: { en: "Gain on disposal 10 (to P/L)", ar: "مكسب تخرد ١٠ (لقائمة الأرباح)" } },
        { cr: { en: "Cash-flow statement: investing +50 (gross); operating: remove the 10 gain in the bridge", ar: "قائمة التدفقات: استثماري ٥٠+ (بإجماليه)؛ وتشغيلي: احذف مكسب الـ١٠ من الجسر" }, red: true },
      ],
    },
    { kind: "h", text: { en: "The direct build", ar: "البناء المباشر" } },
    {
      kind: "example",
      title: { en: "Receivable-to-cash reconciliation (direct build)", ar: "تسوية المدينين إلى النقد (بناء مباشر)" },
      lines: [
        { en: "Revenue 2,000 · opening receivables 180 · closing receivables 240 · bad debt written off 20 (non-cash)", ar: "إيراد ٢٬٠٠٠ · مدينون افتتاحي ١٨٠ · ختامي ٢٤٠ · ديون معدومة ٢٠ (غير نقدية)" },
        { en: "Cash from customers = 2,000 + 180 − 240 − 20 = 1,920", ar: "النقد من العملاء = ٢٬٠٠٠ + ١٨٠ − ٢٤٠ − ٢٠ = ١٬٩٢٠" },
        { en: "Watch the write-off: it is non-cash, so it must come out of the accrual number", ar: "انتبه للمعدوم: غير نقدي فيجب حذفه من الرقم الاستحقاقي" },
        { en: "Purchases 1,100 · opening payables 90 · closing 140 → cash paid to suppliers = 1,100 + 90 − 140 = 1,050", ar: "مشتريات ١٬١٠٠ · دائنون ٩٠ ثم ١٤٠ ← النقد للموردين = ١٬١٠٠ + ٩٠ − ١٤٠ = ١٬٠٥٠" },
      ],
    },
    { kind: "h", text: { en: "Presentation & disclosure essentials", ar: "أساسيات العرض والإفصاح" } },
    {
      kind: "p",
      text: {
        en: "The statement reports the change in CASH AND CASH EQUIVALENTS as a whole, and the notes must reconcile the cash pool to the BALANCE-SHEET lines — the components (cash, demand deposits, the investments that count) and any restrictions. Since the 2016 Disclosure Initiative amendments, entities also disclose a reconciliation of LIABILITIES FROM FINANCING ACTIVITIES — the opening and closing borrowings and lease liabilities bridged by their cash flows AND the non-cash changes (new leases added, FX movements, acquisitions), so users can see why net debt moved by more than the financing lines alone.",
        ar: "تعرض القائمة التغير في النقد وشبه النقد كوحدة واحدة، وتجب في الإيضاحات تسوية مجموعة النقد مع بنود الميزانية — المكونات (النقد، الودائع تحت الطلب، الاستثمارات الداخلة) وأي قيود. ومنذ تعديلات مبادرة الإفصاح ٢٠١٦ تفصح المنشآت كذلك عن تسوية الالتزامات الناشئة عن الأنشطة التمويلية — الافتتاحي والختامي للاقتراضات والتزامات الإيجار يجسرها التدفقات النقدية والتغيرات غير النقدية (إيجارات مضافة، حركات صرف، اقتناءات) — ليرى المستخدم لماذا تحرك صافي الدين أكثر مما تظهره سطور التمويل وحدها.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "The statement is a MANDATORY primary statement — as fundamental as the balance sheet", ar: "القائمة قائمة أولية إلزامية — أساسية كالميزانية" },
        { en: "Disclose the policy for what counts as a cash EQUIVALENT + any restrictions on cash (pledged balances, exchange controls)", ar: "أفصح عن سياسة تحديد شبه النقد وأي قيود على النقد (أرصدة مرهونة، قيود صرف)" },
        { en: "Disclose NON-CASH transactions and the separate components of cash & equivalents (with a reconciliation to the balance-sheet lines)", ar: "أفصح عن المعاملات غير النقدية ومكونات النقد وشبهه منفصلةً (مع التسوية مع بنود الميزانية)" },
        { en: "The 2016 financing-liabilities RECONCILIATION: opening → cash flows → non-cash changes → closing", ar: "تسوية التزامات التمويل (٢٠١٦): افتتاحي ← تدفقات نقدية ← تغيرات غير نقدية ← ختامي" },
        { en: "Undrawn credit facilities (material) and cash held in jurisdictions with exchange controls — the liquidity story", ar: "التسهيلات الائتمانية غير المستخدمة (الجوهرية) والنقد بولايات ذات قيود تحويل — قصة السيولة" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "A sale-and-leaseback can inflate operating cash flow under IFRS 16: the sale proceeds arrive in investing while the lease repayment drains financing — analysts reverse it out; the exam expects you to say WHICH category each element hits.",
        ar: "البيع وإعادة الإيجار قد ينفخ التدفق التشغيلي وفق IFRS 16: متحصلات البيع في الاستثماري والسداد يستنزف التمويلي — والمحللون يعكسونه؛ والامتحان يريد تحديد الفئة لكل عنصر.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Factoring receivables WITHOUT recourse = an operating cash inflow; WITH recourse — the accounting (and the cash-flow geography) follows whether the risks have truly transferred (IFRS 9 derecognition).",
        ar: "خصم المدينين دون حق الرجوع = تدفق تشغيلي وارد؛ ومع حق الرجوع يتبع القياس انتقال المخاطر فعلًا (استبعاد الاعتراف في IFRS 9) — ثم يتحدد موقع التدفق.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Add-backs are NOT inflows: depreciation adds back in operating precisely because the cash LEFT in a previous year's investing line. 'Strong operating cash flow' that ignores a rising lease-financing drain is the analyst trap — profit is an opinion, cash is a fact, and the statement shows you both.",
        ar: "الإضافات الراجعة ليست تدفقات واردة: يُضاف الإهلاك في التشغيلي تحديدًا لأن النقد خرج في سطر استثماري لسنة سابقة. و«التدفق التشغيلي القوي» الذي يتجاهل استنزاف تمويل الإيجارات المتزايد هو فخ المحللين — الربح رأي والنقد حقيقة، والقائمة تريك كليهما.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Investing & financing flows are shown GROSS — the gross amount of cash paid to acquire a subsidiary and the cash acquired are separately disclosed; netting kills the story.",
        ar: "تعرض التدفقات الاستثمارية والتمويلية بإجماليها — فالنقد المدفوع لاقتناء تابعة والنقد المقتنى يفصح عنهما منفصلين؛ والمقاصة تميت القصة.",
      },
    },
    {
      kind: "note",
      text: {
        en: "IFRS 18 (2027) will HARD-CODE most of the choices: for non-financial entities interest paid and received become OPERATING, and the operating category is anchored on the new 'operating profit' subtotal — learn the IAS 7 choices now; they are the exam currency until 2027.",
        ar: "سيقنن IFRS 18 (٢٠٢٧) معظم الخيارات قسرًا: فللكيانات غير المالية تصبح الفوائد المدفوعة والمقبوضة تشغيلية، وتتأطر الفئة التشغيلية على مجموع «الربح التشغيلي» الجديد — أتقن خيارات IAS 7 الآن فهي عملة الامتحانات حتى ٢٠٢٧.",
      },
    },
    { kind: "h", text: { en: "Interactions & the future", ar: "الترابطات والمستقبل" } },
    {
      kind: "list",
      items: [
        { en: "IAS 1 — the cash-flow statement is one of the required primary statements of the complete set", ar: "IAS 1 — قائمة التدفقات إحدى القوائم الأولية الواجبة في المجموعة الكاملة" },
        { en: "IFRS 16 — the principal/interest split of every lease payment between financing and the interest policy", ar: "IFRS 16 — تقسيم كل قسط إيجار بين أصله في التمويلي وفائدته وفق سياسة الفوائد" },
        { en: "IFRS 9 — factoring & securitisation flows follow the derecognition answer", ar: "IFRS 9 — تدفقات الخصم والتحصيل تتبع جواب استبعاد الاعتراف" },
        { en: "IAS 21 — transaction-date rates for every foreign-currency flow and the single FX reconciling line", ar: "IAS 21 — أسعار تواريخ المعاملات لكل تدفق بالعملة الأجنبية وسطر تسوية الصرف الواحد" },
        { en: "IAS 12 — income taxes normally operating, allocated when directly attributable", ar: "IAS 12 — ضرائب الدخل تشغيلية عادة، وتخصص عند الإسناد المباشر" },
        { en: "IFRS 10 — the consolidated statement eliminates intragroup flows; NCI dividends are financing", ar: "IFRS 10 — القائمة المجمعة تستبعد تدفقات المجموعة؛ وتوزيعات غير المسيطرين تمويلية" },
        { en: "IFRS 18 — recasts the categories and fixes most choices from 2027", ar: "IFRS 18 — يعيد صياغة الفئات ويثبت معظم الخيارات من ٢٠٢٧" },
      ],
    },
  ],
}
