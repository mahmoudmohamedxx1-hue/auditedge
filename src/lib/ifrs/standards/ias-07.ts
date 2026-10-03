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
        ar: "يتطلب قائمة تدفقات نقدية تبوب المقبوضات والمدفوعات النقدية إلى أنشطة تشغيلية واستثمارية وتمويلية — فتجسر الربح أو الخسارة (رقم استحقاقي) بالتغير في النقد وشبه النقد. والنقد = النقد بالخزينة والودائع تحت الطلب؛ وشبه النقد = استثمارات قصيرة الأجل (≤ ٣ أشهر عند نشأتها) عالية السيولة ضئيلة المخاطر.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Cash equivalents exist to park cash, not to earn a return — a 5-year bond 3 months before maturity is NOT a cash equivalent (original maturity matters). Bank overdrafts repayable on demand may be a component of cash.",
        ar: "شبه النقد وسيلة إيداع لا استثمار — فسند لخمس سنوات قبل استحقاقه بثلاثة أشهر ليس شبه نقد (العبرة بالأجل الأصلي). وقد تكون السحوبات المكشوفة المستحقة عند الطلب مكونًا من النقد.",
      },
    },
    { kind: "h", text: { en: "The three activities", ar: "الأنشطة الثلاثة" } },
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
          then: { en: "INVESTING — cash paid for PPE, intangibles, equity/debt instruments; proceeds from disposals; interest/dividends RECEIVED (classification choice)", ar: "استثماري — مدفوعات الممتلكات وغير الملموسة والأدوات؛ متحصلات التخرد؛ الفوائد والتوزيعات المقبوضة (خيار تبويب)", red: true },
        },
        {
          when: { en: "Changes in size & composition of contributed equity and borrowings", ar: "تغيرات حجم وهيكل حقوق الملكية المساهمة والاقتراضات" },
          then: { en: "FINANCING — proceeds from shares/loans/bonds, repayment of borrowings, lease PRINCIPAL payments, dividends paid (choice: operating or financing)", ar: "تمويلي — متحصلات الأسهم والقروض والسندات، وسداد الاقتراضات، وأقساط الإيجار الأصلية، والتوزيعات المدفوعة (خيار)", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Operating — the two methods", ar: "التشغيلي — الطريقتان" } },
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
        { en: "  − share of profit of associates (non-cash) + dividends from non-consolidated investments", ar: "  − نصيب الزميلات (غير نقدي) + توزيعات المستثمَر فيه" },
        { en: "  − investment income & interest income/expense (unless presenting them within operating)", ar: "  − عوائد الاستثمار وإيراد/مصروف الفوائد (إلا إذا عُرضت ضمن التشغيلي)" },
        { en: "  + decrease in receivables & inventory − increase in payables (working capital)", ar: "  + نقص المدينين والمخزون − زيادة الدائنين (رأس المال العامل)" },
        { en: "  ± loss/gain on disposal of assets (remove the gain, keep the cash in investing)", ar: "  ± خسارة/مكسب التخرد (احذف المكسب وأبقِ النقد في الاستثماري)" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Non-cash transactions are EXCLUDED from the statement entirely and disclosed separately: acquisition of assets by assuming liabilities (finance-lease additions), conversion of debt to equity, acquisition of a subsidiary by issuing shares. Only actual cash-in and cash-out lines the statement.",
        ar: "تُستبعد المعاملات غير النقدية من القائمة كليًا وتفصح منفصلة: اقتناء أصول بتحمل التزامات (إضافات الإيجار التمويلي)، وتحويل الدين إلى حقوق ملكية، والاستحواذ بإصدار أسهم. فالقائمة للنقد الفعلي دخولًا وخروجًا فقط.",
      },
    },
    { kind: "h", text: { en: "Classification choices — where the exam marks live", ar: "خيارات التبويب — حيث تكمن درجات الامتحان" } },
    {
      kind: "list",
      items: [
        { en: "Interest PAID — operating or financing (choice, applied consistently)", ar: "الفوائد المدفوعة — تشغيلي أو تمويلي (خيار يطبق بثبات)" },
        { en: "Interest & dividends RECEIVED — operating or investing (choice)", ar: "الفوائد والتوزيعات المقبوضة — تشغيلي أو استثماري (خيار)" },
        { en: "Dividends PAID — operating or financing (choice); dividends paid to NCI → financing", ar: "التوزيعات المدفوعة — تشغيلي أو تمويلي (خيار)؛ وتوزيعات الحصص غير المسيطرة ← تمويلي" },
        { en: "Interest & dividends classified must be disclosed GROSS within their chosen category", ar: "يجب إفصاح الفوائد والتوزيعات بإجماليها داخل الفئة المختارة" },
        { en: "Income taxes — normally OPERATING, but split out and allocate to investing/financing when the tax is directly attributable (e.g. disposal proceeds' tax)", ar: "ضرائب الدخل — تشغيلي عادة، وتُفصل وتخصص للاستثماري/التمويلي عند إسنادها مباشرة" },
      ],
    },
    { kind: "h", text: { en: "IFRS 16 changed your cash-flow statement", ar: "IFRS 16 غيّر قائمة تدفقاتك" } },
    {
      kind: "list",
      items: [
        { en: "Lessee lease payments: PRINCIPAL → financing; the INTEREST portion → operating or financing (following the interest-paid policy)", ar: "مدفوعات المستأجر: أصل القسط ← تمويلي؛ وجزء الفائدة ← تشغيلي أو تمويلي تبعًا لسياسة الفوائد" },
        { en: "Short-term & low-value lease expensing → operating", ar: "الإيجارات قصيرة الأجل ومنخفضة القيمة ← تشغيلي" },
        { en: "Effect: total cash flows unchanged, but OPERATING cash flow LOOKS stronger than under IAS 17 operating leases — a classic analyst-adjustment point", ar: "الأثر: إجمالي التدفقات لا يتغير، لكن التدفق التشغيلي يبدو أقوى مما كان في عقود التشغيل وفق IAS 17 — نقطة تعديل شهيرة لدى المحللين" },
        { en: "Variable lease payments not in the lease liability → operating", ar: "المدفوعات المتغيرة خارج التزام الإيجار ← تشغيلي" },
      ],
    },
    { kind: "h", text: { en: "Foreign currency & subsidiaries", ar: "العملة الأجنبية والشركات التابعة" } },
    {
      kind: "p",
      text: {
        en: "Record foreign-currency cash flows at the rate on the DATE of the cash flow (an average rate is acceptable unless it distorts — e.g. volatile quarters). Unrealised exchange gains/losses on cash held are NOT cash flows, but the adjustment to reconcile the movement is shown as a SINGLE line within operating (or wherever appropriate) to force the statement to tie to the reported cash balance. Consolidated statement: include foreign subsidiaries' flows at the transaction-date rate consistent with IAS 21.",
        ar: "تسجل التدفقات بالعملة الأجنبية بسعر تاريخ التدفق (ويجوز المتوسط ما لم يشوه). وفروق الصرف غير المحققة على النقد ليست تدفقات، لكن يعرض تساؤل موحد يوائم الحركة مع رصيد النقد المفصح عنه. وفي القائمة المجمعة تدرج تدفقات التابعة الأجنبية بأسعار تواريخ المعاملات وفق IAS 21.",
      },
    },
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
      title: { en: "Receivable-to-cash reconciliation (direct build)", ar: "تسوية المدينين إلى النقد (بناء مباشر)" },
      lines: [
        { en: "Revenue 2,000 · opening receivables 180 · closing receivables 240 · bad debt written off 20 (all settled later? no — written off)", ar: "إيراد ٢٬٠٠٠ · مدينون افتتاحي ١٨٠ · ختامي ٢٤٠ · ديون معدومة ٢٠" },
        { en: "Cash from customers = 2,000 + 180 − 240 − 20 = 1,920", ar: "النقد من العملاء = ٢٬٠٠٠ + ١٨٠ − ٢٤٠ − ٢٠ = ١٬٩٢٠" },
        { en: "Watch the write-off: it is non-cash, so it must come out of the accrual number", ar: "انتبه للمعدوم: غير نقدي فيجب حذفه من الرقم الاستحقاقي" },
        { en: "Purchases 1,100 · opening payables 90 · closing 140 → cash paid to suppliers = 1,100 + 90 − 140 = 1,050", ar: "مشتريات ١٬١٠٠ · دائنون ٩٠ ثم ١٤٠ ← النقد للموردين = ١٬١٠٠ + ٩٠ − ١٤٠ = ١٬٠٥٠" },
      ],
    },
    { kind: "h", text: { en: "Presentation & disclosure essentials", ar: "أساسيات العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "The statement is a MANDATORY primary statement — as fundamental as the balance sheet", ar: "القائمة قائمة أولية إلزامية — أساسية كالميزانية" },
        { en: "Report the CASH component of the change in cash and cash equivalents, reconciling the reported cash to the statement's totals", ar: "بيّن مكوّن النقد من التغير مع تسوية النقد المفصح مع إجماليات القائمة" },
        { en: "Disclose the policy for what counts as a cash equivalent + any restrictions on cash (pledged balances, exchange restrictions)", ar: "أفصح عن سياسة شبه النقد وقيود النقد (أرصدة مرهونة، قيود صرف)" },
        { en: "Disclose non-cash transactions and the separate components of cash & equivalents (with a reconciliation to the balance-sheet lines)", ar: "أفصح عن المعاملات غير النقدية ومكونات النقد وشبهه مع التسوية مع بنود الميزانية" },
        { en: "Undrawn credit facilities (material) and cash held for subsidiaries in jurisdictions with exchange controls — the liquidity story", ar: "تسهيلات ائتمانية غير مستخدمة (الجوهرية) والنقد لدى تابعة تحت قيود تحويل — قصة السيولة" },
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
        ar: "خصم المدينين دون حق الرجوع = تدفق تشغيلي وارد؛ ومع حق الرجوع يتبع القياس انتقال المخاطر فعلًا (استبعاد IFRS 9) — ثم يتحدد موقع التدفق.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Investing & financing flows are shown GROSS — the gross amount of cash paid to acquire a subsidiary and the cash acquired are separately disclosed; netting kills the story.",
        ar: "تعرض التدفقات الاستثمارية والتمويلية بإجماليها — فالنقد المدفوع لاقتناء تابعة والنقد المقتنى يفصح عنهما منفصلين؛ والمقاصة تميت القصة.",
      },
    },
  ],
}
