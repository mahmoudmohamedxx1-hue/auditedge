/** IFRS 5 — Non-current Assets Held for Sale and Discontinued Operations */

import type { Standard } from "../types"

export const IFRS_5: Standard = {
  code: "IFRS 5",
  title: { en: "Non-current Assets Held for Sale and Discontinued Operations", ar: "الأصول غير المتداولة المحتفظ بها للبيع والعمليات المتوقفة" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 2005", ar: "سارٍ من ١ يناير ٢٠٠٥" },
  blocks: [
    { kind: "h", text: { en: "Objective & the two halves", ar: "الهدف والشقان" } },
    {
      kind: "p",
      text: {
        en: "IFRS 5 has two engines: (1) HELD FOR SALE — the moment a disposal group meets the criteria, accounting switches from the going-concern rhythm (depreciation, allocation) to a sale-rhythm (measure at lower of carrying and fair value less costs to sell, stop depreciation); (2) DISCONTINUED OPERATIONS — a component that is being sold or abandoned is PULLED OUT of continuing operations and shown as a single line (net of tax) so users see the ongoing business cleanly.",
        ar: "لمعيار محركان: (١) المحتفظ به للبيع — فبمجرد تحقق الشروط تتحول المحاسبة من إيقاع الاستمرارية (إهلاك وتوزيع) إلى إيقاع البيع (القياس بالأدنى من الدفترية والقيمة العادلة ناقص تكاليف البيع، وإيقاف الإهلاك)؛ (٢) العمليات المتوقفة — يُنتزع المكوّن المُباع أو المتخلى عنه من العمليات المستمرة ويعرض سطرًا واحدًا (صافي الضريبة) لتنكشف الأعمال المستمرة.",
      },
    },
    { kind: "h", text: { en: "Held-for-sale criteria — 'sale is highly probable'", ar: "شروط الاحتفظ للبيع — «البيع مرجح بشدة»" } },
    {
      kind: "tree",
      root: { en: "Non-current asset (or disposal group) → held for sale?", ar: "أصل غير متداول (أو مجموعة تخرد) ← محتفظ به للبيع؟" },
      branches: [
        {
          when: { en: "Management COMMITTED to a plan to sell · active marketing at a REASONABLE price (within fair value) · sale HIGHLY PROBABLE within 12 months of classification · unlikely the plan will be withdrawn or materially delayed", ar: "التزام الإدارة بخطة بيع · تسويق نشط بسعر معقول (ضمن القيمة العادلة) · البيع مرجح بشدة خلال ١٢ شهرًا · ندر التراجع أو التأخير الجوهري" },
          then: { en: "HELD FOR SALE — remeasure & reclassify as CURRENT", ar: "محتفظ به للبيع — يعاد قياسه ويعاد تبويبه متداولًا", red: true },
        },
        {
          when: { en: "The 12-month rule's exceptions: extension STILL allowed when the delay is caused by circumstances beyond control, the change remains probable within a NEW 12-month window from the extension date, and the plan is not significantly amended", ar: "استثناءات قاعدة الاثني عشر شهرًا: يمتد الأجل إذا سبب التأخير ظروفًا خارجة عن السيطرة وبقي البيع مرجحًا خلال ١٢ شهرًا جديدة من تاريخ التمديد دون تعديل جوهري للخطة" },
          then: { en: "Qualifies for EXTENSION — stay in HFS (a favourite nuance)", ar: "يمتد الأجل — يبقى محتفظًا به للبيع", red: true },
        },
        {
          when: { en: "Acquired EXCLUSIVELY with a view to resale (a subsidiary bought to flip) — sale within 3 years, conditions met on acquisition", ar: "مقتنى بقصد إعادة البيع حصرًا (توليد توظيف أرباح) — بيع خلال ٣ سنوات بتحقق الشروط عند الشراء" },
          then: { en: "HFS from DAY ONE; held-for-sale classification at acquisition", ar: "محتفظ به للبيع منذ اليوم الأول", red: true },
        },
        {
          when: { en: "Criteria lapse (plan withdrawn, market cools, 12-month rule broken)", ar: "سقوط الشروط (تراجع الخطة، فتور السوق، كسر قاعدة الـ١٢ شهرًا)" },
          then: { en: "RECLASSIFY back — continue the OLD depreciation as if it never stopped (catch-up!) at the LOWER of carrying & recoverable", ar: "أعد التبويب — واستأنف الإهلاك القديم بلحاق المدة (كأنه لم يتوقف) بالأدنى من الدفترية والمسترد", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Measurement — before & at classification", ar: "القياس — قبل التصنيف وعنده" } },
    {
      kind: "steps",
      items: [
        { en: "STEP 1 — measure the disposal group per its OWN standards first: PPE carrying, inventory NRV, financial assets, provisions…", ar: "الخطوة ١ — قِس مجموعة التخرد بمعاييرها أولًا: الممتلكات، وصافي المخزون، والأدوات المالية، والمخصصات" },
        { en: "STEP 2 — then apply IFRS 9 to any ASSETS & LIABILITIES WITHIN the group that fall in IFRS 9's scope (interest-bearing loans of the sub measured at FVTPL if needed)", ar: "الخطوة ٢ — طبق IFRS 9 على الأصول والالتزامات المالية داخل المجموعة" },
        { en: "STEP 3 — recognise ACCUMULATED impairment + any REVALUATION-loss adjustments required before the HFS write-down", ar: "الخطوة ٣ — اعترف بمجمع الانخفاض وتعديلات خسائر إعادة التقييم قبل انقاص البيع" },
        { en: "STEP 4 — the HFS WRITE-DOWN: carrying amount vs FAIR VALUE LESS COSTS TO SELL → charge the excess to impairment loss; FVLCD replaces 'recoverable amount' in the IAS 36 test for HFS assets", ar: "الخطوة ٤ — انقاص البيع: الدفترية مقابل القيمة العادلة ناقص تكاليف البيع ← الفارق خسارة انخفاض؛ والعادلة ناقص التكاليف تحل محل المبلغ القابل للاسترداد في اختبار IAS 36" },
        { en: "STEP 5 — NEW income/expense of the group still goes to P&L (depreciation stopped; operations continue)", ar: "الخطوة ٥ — إيراد/مصروف المجموعة الجديد يستمر بالأرباح (الإهلاك متوقف والعمليات مستمرة)" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The HFS entries", ar: "قيود المحتفظ به للبيع" },
      rows: [
        { dr: { en: "Assets held for sale (reclassified gross or net)", ar: "أصول محتفظ بها للبيع (معاد تبويبها)" }, cr: { en: "PPE / goodwill / intangibles (carrying)", ar: "ممتلكات/شهرة/غير ملموسة (بالدفترية)" } },
        { dr: { en: "Impairment loss on write-down to FVLCD", ar: "خسارة انخفاض حتى العادلة ناقص التكاليف" }, cr: { en: "Assets held for sale (or allowance)", ar: "أصول محتفظ بها للبيع (أو مخصص)" }, red: true },
        { dr: { en: "Assets held for sale", ar: "أصول محتفظ بها للبيع" }, cr: { en: "Reversal of write-down (new evidence, cap at the OLD carrying that would apply)", ar: "رد الانقاص (بدليل جديد وبحد الدفترية القديمة)" } },
        { cr: { en: "NO depreciation from classification date until sold — the whole point", ar: "لا إهلاك من تاريخ التصنيف حتى البيع — وهذا جوهر المعيار" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Discontinued operations — the pull-out", ar: "العمليات المتوقفة — الانتزاع" },
    },
    {
      kind: "tree",
      root: { en: "Component (an operation & cash flow line of business or geographical area)", ar: "مكوّن (تشغيل وتدفق رئيسي: نشاط أو منطقة جغرافية)" },
      branches: [
        {
          when: { en: "A separate MAJOR line of business or geographical area of operations · a subsidiary acquired EXCLUSIVELY with a view to resale · a subsidiary that is part of a single coordinated plan (multiple disposals) · a step acquisition or loss-of-control event", ar: "نشاط رئيسي أو منطقة جغرافية مستقلة · تابعة مقتناة لإعادة البيع حصرًا · تابعة ضمن خطة منسقة واحدة · تخرد متدرج أو فقد سيطرة" },
          then: { en: "DISCONTINUED OPERATION: represent as ONE amount (net of tax) on the face of P/L for all periods presented", ar: "عملية متوقفة: تعرض بمبلغ واحد (صافي الضريبة) على وجه الأرباح لكل الفترات", red: true },
        },
        {
          when: { en: "It is HFS or abandoned (operations ceased permanently)", ar: "محتفظ به للبيع أو متخلى عنه (توقفت العمليات نهائيًا)" },
          then: { en: "Also discontinued if the component test passes — abandonment qualifies when the component CEASES", ar: "متوقفة أيضًا إذا اجتاز اختبار المكون — والتخلي المؤهل عند توقف المكون", red: true },
        },
        {
          when: { en: "Marginal, non-major lines, or a shift to internal use (owner-occupation begins)", ar: "أنشطة هامشية غير رئيسية، أو تحول للاستخدام الذاتي" },
          then: { en: "NOT discontinued — stays in continuing operations (but may still be HFS if criteria met)", ar: "غير متوقفة — تبقى ضمن المستمرة (وقد تظل محتفظة بها للبيع)", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Presentation discipline: the discontinued result includes ONLY the component's post-tax revenue/expenses, impairment/reversal, and gain/loss on disposal — presented as a SINGLE line 'profit after tax from discontinued operations' (analysis in the notes: revenue, expenses, pre-tax profit, tax, EPS). The balance-sheet split: HFS assets & liabilities in SEPARATE current lines — no offset between the two. Cash flows of discontinued operations remain inside their categories unless they can be separately identified (disclosure encouraged).",
        ar: "انضباط العرض: نتيجة المتوقفة تضم حصرًا إيرادات ومصروفات المكوّن بعد الضريطة وانخفاضاته وربح/خسارة تخرده — سطرًا واحدًا «الربح بعد الضريبة من عمليات متوقفة» (بتحليل بالإيضاحات: إيراد، مصروف، ربح قبل الضريبة، ضريبة، ربح السهم). وفي الميزانية: أصول والتزامات المحتفظ للبيع في سطرين متداولين منفصلين دون مقاصة بينهما. وتدفقات المتوقفة تبقى في فئاتها ما لم يمكن فصلها.",
      },
    },
    {
      kind: "example",
      title: { en: "One-line P/L build", ar: "بناء السطر الواحد" },
      lines: [
        { en: "Division sold in October: revenue 800 · expenses 600 · impairment at HFS date 120 · tax rate 25% · profit on disposal 100 (pre-tax)", ar: "قسم بيع في أكتوبر: إيراد ٨٠٠ · مصروف ٦٠٠ · انخفاض عند التصنيف ١٢٠ · ضريبة ٢٥٪ · ربح التخرد ١٠٠ قبل الضريبة" },
        { en: "Pre-tax discontinued result = (800 − 600) − 120 + 100 = 180", ar: "النتيجة قبل الضريبة = (٨٠٠ − ٦٠٠) − ١٢٠ + ١٠٠ = ١٨٠" },
        { en: "Post-tax single line = 180 × 75% = 135 — 'profit after tax from discontinued operations'", ar: "السطر الواحد بعد الضريبة = ١٨٠ × ٧٥٪ = ١٣٥" },
        { en: "EPS: basic & diluted recomputed for continuing AND discontinued lines separately (IAS 33)", ar: "ربح السهم: يعاد حسابه للخط المستمر والمتوقف منفصلين (IAS 33)" },
      ],
    },
    { kind: "h", text: { en: "Subsidiaries & partial stakes", ar: "الشركات التابعة والحصص الجزئية" } },
    {
      kind: "list",
      items: [
        { en: "A subsidiary in a disposal group: consolidated UNTIL control passes (IFRS 10 loss-of-control rules) — then the whole exit gain and the FV-remeasurement of any RETAINED interest land in discontinued operations", ar: "التابعة داخل مجموعة تخرد: تبقى مجمعة حتى تنتقل السيطرة — ثم يقع كامل ربح الخروج وإعادة قياس الحصة المحتفظ بها في المتوقفة" },
        { en: "Loss of control but a stake RETAINED (an associate now): the retained interest is NOT part of the disposal group — it stays under IFRS 9/IAS 28", ar: "فقد السيطرة مع الاحتفاظ بحصة (زميلة الآن): الحصة ليست من مجموعة التخرد — تبقى وفق IFRS 9/IAS 28" },
        { en: "Non-current assets of the group: even if some will be KEPT (a plant the buyer will lease back to you), only the DISPOSING component's assets go HFS", ar: "أصول غير متداولة بالمجموعة: حتى ما سيُستبقى (مصنع سيعيد المشتري تأجيره لك) — فقط أصول المكوّن المتخرد تنتقل للبيع" },
      ],
    },
    { kind: "h", text: { en: "Disclosure essentials", ar: "أساسيات الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "For HFS: a description, the carrying amounts by class, the FVLCD, the period & amounts of revenues/expenses/cash flows (notes)", ar: "للمحتفظ به للبيع: الوصف والقيم الدفترية بالفئات والعادلة ناقص التكاليف وإيرادات ومصروفات وتدفقات الفترة" },
        { en: "For discontinued operations: the single-line analysis (revenue, expenses, pre-tax, tax, EPS), the gain/loss on disposal and its tax, the cash flows, and any CONTINUING INVOLVEMENT (guarantees, leasebacks, retained interests) by type & amount", ar: "للمتوقفة: تحليل السطر (إيراد، مصروف، قبل الضريبة، ضريبة، ربح سهم)، وربح/خسارة التخرد وضريبتها، والتدفقات، وأي تورط مستمر (ضمانات، إيجار راجع، حصص) نوعًا ومقدارًا" },
        { en: "Restrictions on sale proceeds & the timing/amounts of expected proceeds; impairment charges & reversals", ar: "قيود المتحصلات وتوقيتها ومقاديرها المتوقعة؛ وخسائر الانخفاض وردوده" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The FVLCD floor: if sale proceeds later EXCEED the written-down amount, the extra is a GAIN on disposal — not a 'reversal'; IFRS 5 reversals only restore a WRITE-DOWN made under IFRS 5 itself, and never for goodwill written down to zero via impairment under IAS 36.",
        ar: "حد العادلة ناقص التكاليف: إذا جاءت المتحصلات أعلى من المنقوص فالفارق ربح تخرد — لا «رد»؛ فالردود تخص انقاصات IFRS 5 ذاتها فقط، ولا ترد شهرة أنقصها IAS 36.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "A component that qualifies as discontinued is reclassified in the COMPARATIVES too — the P/L history must tell the story of the SURVIVING business; forgetting to restate last year is a classic exam slip.",
        ar: "المكوّن المتوقف يعاد تبويبه في المقارنات أيضًا — فتاريخ الأرباح يجب أن يحكي قصة الأعمال الباقية؛ ونسيان إعادة عرض السنة الماضية زلة امتحانية كلاسيكية.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Assets destroyed or stolen are NOT 'abandonment' in the accounting sense — abandonment is a voluntary cessation; a casualty is an impairment or a subsequent event.",
        ar: "الأصول المتلفة أو المسروقة ليست «تخليًا» بالمعنى المحاسبي — فالتخلي توقف إرادي؛ والفاقد يعالج انخفاض قيمة أو حدثًا لاحقًا.",
      },
    },
  ],
}
