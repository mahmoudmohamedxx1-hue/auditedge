/** IAS 28 — Investments in Associates and Joint Ventures */

import type { Standard } from "../types"

export const IAS_28: Standard = {
  code: "IAS 28",
  title: { en: "Investments in Associates and Joint Ventures", ar: "الاستثمارات في الزميلات والمشروعات المشتركة" },
  topic: "groups",
  effective: { en: "Effective 1 Jan 2013 · the equity-method standard", ar: "سارٍ من ١ يناير ٢٠١٣ · معيار طريقة الحصة" },
  blocks: [
    { kind: "h", text: { en: "Objective & significant influence", ar: "الهدف والتأثير الجوهري" } },
    {
      kind: "p",
      text: {
        en: "IAS 28 governs investments an investor does NOT control but can't call passive either. SIGNIFICANT INFLUENCE = the power to PARTICIPATE in the financial and operating policy decisions of the investee — not to control them. The PRESUMPTION: holding ≥ 20% of the voting power gives it (rebuttable in both directions), and the equity method is the single accounting answer for associates and joint ventures alike.",
        ar: "يحكم IAS 28 الاستثمارات التي لا يسيطر عليها المستثمر ولا يعدل عن وصفها بالسلبية. التأثير الجوهري = القدرة على المشاركة في قرارات السياسات المالية والتشغيلية — لا السيطرة عليها. والافتراض: امتلاك ٢٠٪ فأكثر من قوة التصويت يمنحه (قابل للدحض في الاتجاهين)، وطريقة الحصة هي جواب المحاسبة الوحيد للزميلات والمشتركة معًا.",
      },
    },
    {
      kind: "tree",
      root: { en: "Evidence of significant influence", ar: "أدلة التأثير الجوهري" },
      branches: [
        {
          when: { en: "Board representation · participation in policy-making · material transactions between investor & investee · interchange of managerial personnel · technical dependency", ar: "مقعد في المجلس · مشاركة في صنع السياسات · معاملات جوهرية · تبادل كوادر إدارية · اعتماد تقني" },
          then: { en: "Any one (or the ≥20% presumption) → associate → EQUITY METHOD", ar: "أي واحد (أو افتراض الـ٢٠٪) ← زميلة ← طريقة الحصة", red: true },
        },
        {
          when: { en: "The 20% presumption rebutted: a 25% stake with 75% scattered among three fighting shareholders → control territory (IFRS 10 de facto!); or a 30% stake contractually confined to passive rights → no influence", ar: "دحض افتراض الـ٢٠٪: حصة ٢٥٪ مع تشتت الـ٧٥٪ بين ثلاثة متنازعين ← أرض السيطرة (IFRS 10!)؛ أو ٣٠٪ مقيدة تعاقديًا بحقوق سلبية" },
          then: { en: "Analyse afresh — percentages never decide alone", ar: "حلل من جديد — فالنسب لا تحسم وحدها", red: true },
        },
        {
          when: { en: "OWNERSHIP via associates/subsidiaries of the investor (indirect holdings) — combine the chain's effective stake (group-held + downstream stakes)", ar: "حيازة غير مباشرة عبر سلسلة المستثمر — تجمع الحصة الفعلية للسلسلة" },
          then: { en: "Test influence on the aggregated voting power", ar: "اختبر التأثير على القوة المجتمعة" },
        },
      ],
    },
    { kind: "h", text: { en: "The equity-method engine", ar: "محرك طريقة الحصة" } },
    {
      kind: "formula",
      title: { en: "Carrying rollforward", ar: "التسوية التراكمية" },
      lines: [
        { en: "Investment carrying = cost + share of post-acquisition retained profits − dividends received − impairments − losses beyond carrying", ar: "الدفترية = التكلفة + نصيب الأرباح المبقاة بعد الاستحواذ − التوزيعات المقبوضة − الانخفاضات − الخسائر فوق الدفترية" },
        { en: "Cost = the acquisition-date share of the investee's identifiable net assets at FAIR VALUE (IFRS 3 machinery, including goodwill's share inside the carrying)", ar: "التكلفة = الحصة من صافي الأصول المحددة بالعادلة عند الاستحواذ (آلية IFRS 3 بما فيها نصيب الشهرة داخل الدفترية)" },
        { en: "Share of profit appears as ONE line in the investor's P&L (after the investor's own tax line adjustments per the investor's policy)", ar: "نصيب الربح سطر واحد بأرباح المستثمر" },
        { en: "OCI relationship: the investor's share of the investee's OCI items flows to the investor's OCI (equity-method reserve)", ar: "الدخل الشامل: حصة المستثمر من بنود دخل المستثمَر فيه تذهب لدخله الشامل" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The recurring entries", ar: "القيود المتكررة" },
      rows: [
        { dr: { en: "Investment in associate (cost)", ar: "استثمار في زميلة (التكلفة)" }, cr: { en: "Cash", ar: "نقد" } },
        { dr: { en: "Investment in associate (share of profit)", ar: "استثمار (نصيب الربح)" }, cr: { en: "Share of profit of associate (P&L)", ar: "نصيب ربح الزميلة (بالأرباح)" }, red: true },
        { dr: { en: "Cash (dividend received)", ar: "نقد (توزيعات)" }, cr: { en: "Investment in associate (reduction — never P&L)", ar: "الاستثمار (خفض — لا الأرباح أبدًا)" }, red: true },
        { dr: { en: "OCI — share of investee's OCI", ar: "الدخل الشامل — نصيب دخل المستثمَر فيه" }, cr: { en: "Investment (equity-method reserve)", ar: "الاستثمار (احتياطي الحصة)" } },
        { dr: { en: "Share of loss (downside)", ar: "نصيب خسارة" }, cr: { en: "Investment in associate", ar: "الاستثمار" } },
      ],
    },
    { kind: "h", text: { en: "The adjustments that earn the marks", ar: "التعديلات التي تكسب الدرجات" } },
    {
      kind: "list",
      items: [
        { en: "POLICY alignment: adjust the investee's numbers to the investor's accounting policies before taking the share", ar: "توحيد السياسات: تعدل أرقام المستثمَر فيه إلى سياسات المستثمر قبل أخذ الحصة" },
        { en: "FAIR-VALUE uplifts at acquisition: the share of extra depreciation from stepping up the investee's assets reduces the share of profit", ar: "زيادات العادلة عند الاستحواذ: حصة الإهلاك الإضافي تخفض نصيب الربح" },
        { en: "PREFERENCE dividends on CUMULATIVE preference shares held by others: deduct from the investee's profit before taking the ordinary share", ar: "توزيعات الأسهم الممتازة التراكمية لحامليها: تطرح من ربح المستثمَر فيه قبل أخذ الحصة" },
        { en: "UNREALISED profits: the investor's share of upstream/downstream intragroup gains reduces the carrying (upstream: adjust profit share; downstream: adjust the carrying itself) — losses too, unless impaired", ar: "الأرباح غير المحققة: حصة المستثمر من مكاسب المعاملات تخفض القيمة (الصاعدة تعدل النصيب والهابطة تعدل الاستثمار) — والخسائر كذلك إلا إذا دلت على انخفاض" },
        { en: "TRANSACTION-date differences: the share of profit only from the ACQUISITION date; pre-acquisition results sit in the cost comparison", ar: "فوارق التواريخ: النصيب من ربح ما بعد الاستحواذ فقط" },
      ],
    },
    { kind: "h", text: { en: "Impairment & losses beyond carrying", ar: "الانخفاض والخسائر فوق الدفترية" } },
    {
      kind: "tree",
      root: { en: "The associate keeps losing money", ar: "الزميلة تخسر باستمرار" },
      branches: [
        {
          when: { en: "Carrying amount reaches ZERO — stop recognising further losses (the investment's floor)", ar: "تصل الدفترية صفرًا — توقف عن الاعتراف بمزيد من الخسائر" },
          then: { en: "Discontinue the equity method BELOW zero — unless obligations exist (a commitment to fund or divest is not in sight of an exit... rather: funding commitments, guaranteed obligations, amounts already advanced)", ar: "أوقف الطريقة تحت الصفر — إلا إذا وُجدت التزامات (تعهد تمويل، التزامات مكفولة، مبالغ ممولة سلفًا)", red: true },
        },
        {
          when: { en: "OTHER LONG-TERM interests (preference shares, long receivables that form part of the net investment)", ar: "مصالح طويلة الأجل أخرى (أسهم ممتازة، مديونيات طويلة تدخل صافي الاستثمار)" },
          then: { en: "Continue absorbing losses against those interests (in REVERSE order of seniority — least senior first)", ar: "استمر في امتصاص الخسائر من تلك المصالح (بترتيب عكسي للأقدمية — الأقل أقدمية أولًا)", red: true },
        },
        {
          when: { en: "Indicators of impairment at each reporting date (IAS 36 territory — the recoverable amount test on the investment's carrying)", ar: "مؤشرات انخفاض في كل تقرير (أرض IAS 36 — اختبار المبلغ المسترد على دفترية الاستثمار)" },
          then: { en: "Impair the investment; REVERSALS follow IAS 36's rules (new-evidence route, capped at the recoverable)", ar: "انقص قيمة الاستثمار؛ والرد بقواعد IAS 36" },
        },
      ],
    },
    { kind: "h", text: { en: "Changes in the stake", ar: "تغيرات الحصة" } },
    {
      kind: "steps",
      items: [
        { en: "ASSOCIATE → SUBSIDIARY (control arrives): remeasure the previously held interest at acquisition-date fair value → gain/loss in P&L; then consolidate from that date (IFRS 3 + IFRS 10)", ar: "زميلة ← تابعة (تصل السيطرة): تعاد قياسة الحصة السابقة بالعادلة والفرق للأرباح؛ ثم التجميع من التاريخ (IFRS 3 + 10)" },
        { en: "SUBSIDIARY → ASSOCIATE (control lost, significant influence retained): the IFRS 10 loss-of-control cascade runs, and the retained stake is measured at FV — which becomes the equity method's opening cost", ar: "تابعة ← زميلة (فقد السيطرة وبقاء التأثير): يسري تسلسل فقد السيطرة، وتفتح طريقة الحصة بتكلفة تساوي العادلة يوم الفقد" },
        { en: "ASSOCIATE → FINANCIAL INVESTMENT: derecognise with everything through P&L, RECYCLING the OCI amounts (incl. the investee's CTA share) — no partial-disposal-only-quota mechanics here", ar: "زميلة ← استثمار مالي: يستبعد وكله للأرباح مع إعادة تدوير الدخل الشامل (ومنه حصة فروق الترجمة)" },
        { en: "PARTIAL disposal still an associate (60% → 40%): a genuine partial-equity-method disposal — recognise gain/loss on the share disposed; the CTA recycles PROPORTIONALLY", ar: "تخرد جزئي مع البقاء زميلة (٦٠٪ ← ٤٠٪): اعترف بالربح/الخسارة على الجزء المتخرد وأعد تدوير فروق الترجمة بالتناسب" },
      ],
    },
    {
      kind: "example",
      title: { en: "A year with an associate", ar: "سنة مع زميلة" },
      lines: [
        { en: "Cost 400 for 30% · the associate's post-acquisition profit 100 · declared dividends 40 · an FV uplift on its plant added 5/yr of depreciation · upstream sale profit to the investor 20 (unsold)", ar: "تكلفة ٤٠٠ مقابل ٣٠٪ · ربح الزميلة بعد الاستحواذ ١٠٠ · توزيعات مقررة ٤٠ · إهلاك إضافي من زيادة العادلة ٥ سنويًا · ربح بيع صاعد للمستثمر ٢٠ (لم يبع بعد)" },
        { en: "Share of profit = (100 − 5) × 30% = 28.5 · dividends received 12 reduce the investment", ar: "نصيب الربح = (١٠٠ − ٥) × ٣٠٪ = ٢٨٫٥ · والتوزيعات ١٢ تخفض الاستثمار" },
        { en: "Unrealised upstream profit: eliminate the investor's share → −20 × 30% = −6 from the investment", ar: "الربح الصاعد غير المحقق: تحذف حصة المستثمر ← ٦− من الاستثمار" },
        { en: "Closing carrying = 400 + 28.5 − 12 − 6 = 410.5", ar: "الدفترية الختامية = ٤٠٠ + ٢٨٫٥ − ١٢ − ٦ = ٤١٠٫٥" },
      ],
    },
    { kind: "h", text: { en: "Exemptions from the equity method", ar: "الإعفاءات من طريقة الحصة" } },
    {
      kind: "list",
      items: [
        { en: "A parent exempt from consolidation (IFRS 10.4's public-availability exemption) may account for associates per IFRS 9 in ITS OWN statements (its parent's group statements still equity-account)", ar: "الأم المعفاة من التجميع (إعفاء الإتاحة العمومية) قد تحاسب الزميلات وفق IFRS 9 في قوائمها هي (وقوائم أمها المجمعة تظل بطريقة الحصة)" },
        { en: "The investor's OWN separate statements follow IAS 27's menu (cost / equity / FV)", ar: "منفصلة المستثمر تتبع قائمة IAS 27 (تكلفة/حصة/عادلة)" },
        { en: "Venture-capital organisations & similar may elect FVTPL for associates — an IAS 28's carve-out with disclosure of the election", ar: "منظمات رأس المال المخاطر ومن في حكمها يجوز لها FVTPL — استثناء في IAS 28 يفصح عنه" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Dividends NEVER touch P&L under the equity method — they reduce the investment's carrying. A candidate writing 'dividend income' in an equity-method answer has confused IAS 27's cost route with IAS 28; the marker stops marking.",
        ar: "التوزيعات لا تمس الأرباح إطلاقًا في طريقة الحصة — بل تخفض الدفترية. ومن يكتب «إيراد توزيعات» في جوابها خلط مسار التكلفة في IAS 27 بـIAS 28 فيتوقف المصحح عن التصحيح.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Upstream adjusts the PROFIT share (your share of the investee's gain is not yet real); downstream adjusts the INVESTMENT's carrying (your own gain sits in your books). Direction decides the debit — say the direction first, then the entry.",
        ar: "الصاعدة تعدل نصيب الربح (فحصتك من مكسبها لم تتحقق)؛ والهابطة تعدل دفترية الاستثمار (مكسبك في دفاترك). الاتجاه يحدد المدين — قل الاتجاه أولًا ثم القيد.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The share of goodwill is EMBEDDED in the investment's carrying — never a separate line; that is why impairment testing runs on the investment as one unit.",
        ar: "الحصة تشمل الشهرة: لا تظهر بسطر منفصل — إنها مدفونة داخل دفترية الاستثمار، ولهذا يختبر انخفاضها على الاستثمار ككل.",
      },
    },
  ],
}
