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
      kind: "p",
      text: {
        en: "The equity method's logic: a 30% investor owns 30% of every asset, liability and profit stream the investee runs — so line-by-line consolidation would overstate and a passive financial-asset treatment would understate. The one-line carrying amount plus the one-line share of profit compresses ownership into a single net figure, keeping the economics visible in both the statement of financial position and profit or loss. That is why IAS 28 calls the method's line items the investor's SHARE of net assets and SHARE of profit — not a security's cost and dividend income.",
        ar: "منطق طريقة الحصة: مستثمر يملك ٣٠٪ يمتلك ٣٠٪ من كل أصل والتزام وتدفق ربح يديره المستثمَر فيه — فالتجميع سطرًا بسطر يبالغ، ومعالجة الأصل المالي السلبي تنقص. فالدفترية بسطر واحد مع نصيب الربح بسطر واحد يضغطان الملكية في رقم صافٍ واحد، ويبقيان الاقتصاد مرئيًا في الميزانية والأرباح معًا. ولهذا تسمي IAS 28 بنود الطريقة «الحصة» من صافي الأصول و«النصيب» من الربح — لا تكلفة ورقة ودخل توزيعات.",
      },
    },
    { kind: "h", text: { en: "Scope — when IAS 28 applies", ar: "النطاق — متى يسري IAS 28" } },
    {
      kind: "list",
      items: [
        { en: "An investor holding an ASSOCIATE (significant influence, not control) in any reporting set where equity accounting is required — consolidated statements above all", ar: "مستثمر يحوز زميلة (تأثير جوهري بلا سيطرة) في أي قوائم تتطلب محاسبة الحصة — وعلى رأسها المجمعة" },
        { en: "A party to a JOINT VENTURE (IFRS 11 joint arrangement where the parties have rights to net assets) — also equity-accounted in the venturer's consolidated statements", ar: "طرف في مشروع مشترك (ترتيب مشترك تمنح أحكامه حقوقًا في صافي الأصول) — ويحاسب بالحصة كذلك في قوائم المشترِك المجمعة" },
        { en: "NOT subsidiaries (IFRS 10 consolidates them), not joint operations (line-by-line share, IFRS 11), not mere financial assets (IFRS 9)", ar: "ليست التوابع (يجمعها IFRS 10)، ولا العمليات المشتركة (حصة سطرًا بسطر وفق IFRS 11)، ولا الأوراق المالية المجردة (IFRS 9)" },
        { en: "Separate financial statements of the investor follow IAS 27's menu instead; IAS 28's equity method governs the CONSOLIDATED set", ar: "القوائم المنفصلة للمستثمر تتبع قائمة IAS 27؛ وطريقة حصة IAS 28 تحكم القوائم المجمعة" },
      ],
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
        {
          when: { en: "Potential voting rights (options, convertible instruments) currently exercisable or convertible", ar: "حقوق تصويت كامنة (خيارات، أدوات قابلة للتحويل) قابلة للممارسة الآن" },
          then: { en: "Consider them in the influence assessment — substance over the day's share register", ar: "تؤخذ في التقييم — فالجوهر فوق سجل الأسهم اللحظي", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "The equity-method engine", ar: "محرك طريقة الحصة" } },
    {
      kind: "steps",
      items: [
        { en: "OPEN at cost: the consideration paid + the share of the investee's identifiable net assets at fair value (IFRS 3 machinery produces the opening carrying, goodwill's share embedded inside)", ar: "افتتاح بالتكلفة: المقابل المدفوع + حصة صافي الأصول المحددة بالعادلة (آلية IFRS 3 تنتج الدفترية الافتتاحية والشهرة مدفونة داخلها)" },
        { en: "ADJUST the investee's numbers: align its accounting policies with the investor's, and layer the fair-value adjustments' effects (extra depreciation) on the share of profit", ar: "عدّل أرقام المستثمَر فيه: وحّد سياساته مع سياسات المستثمر، وأضف آثار تعديلات العادلة (إهلاك إضافي) على نصيب الربح" },
        { en: "RECOGNISE the share of the adjusted profit (or loss) in P&L; the share of OCI items in the investor's OCI", ar: "اعترف بنصيب الربح (أو الخسارة) المعدلة في الأرباح؛ وبنصيب بنود الدخل الشامل في دخل المستثمر الشامل" },
        { en: "REDUCE the carrying by dividends received (never P&L) and by the share of unrealised intragroup profits", ar: "اخفض الدفترية بالتوزيعات المقبوضة (لا الأرباح أبدًا) وبنصيب الأرباح الداخلية غير المحققة" },
        { en: "TEST for impairment on the investment as ONE unit (IAS 36 through the carrying amount) and STOP absorbing losses at zero unless obligations bind", ar: "اختبر الانخفاض على الاستثمار كوحدة واحدة (IAS 36 عبر الدفترية) وتوقف عن امتصاص الخسائر عند الصفر إلا إذا وُجدت التزامات" },
      ],
    },
    {
      kind: "formula",
      title: { en: "Carrying rollforward", ar: "التسوية التراكمية" },
      lines: [
        { en: "Investment carrying = cost + share of post-acquisition retained profits − dividends received − impairments − losses beyond carrying", ar: "الدفترية = التكلفة + نصيب الأرباح المبقاة بعد الاستحواذ − التوزيعات المقبوضة − الانخفاضات − الخسائر فوق الدفترية" },
        { en: "Cost = the acquisition-date share of the investee's identifiable net assets at FAIR VALUE (IFRS 3 machinery, including goodwill's share inside the carrying)", ar: "التكلفة = الحصة من صافي الأصول المحددة بالعادلة عند الاستحواذ (آلية IFRS 3 بما فيها نصيب الشهرة داخل الدفترية)" },
        { en: "Share of profit appears as ONE line in the investor's P&L (after the investor's own tax line adjustments per the investor's policy)", ar: "نصيب الربح سطر واحد بأرباح المستثمر" },
        { en: "OCI relationship: the investor's share of the investee's OCI items flows to the investor's OCI (equity-method reserve)", ar: "الدخل الشامل: حصة المستثمر من بنود دخل المستثمَر فيه تذهب لدخله الشامل" },
        { en: "Impairment test: recoverable amount of the investment as a whole (higher of VIU and FVLCD) vs the carrying including embedded goodwill", ar: "اختبار الانخفاض: المبلغ المسترد للاستثمار ككل (الأعلى من VIU وFVLCD) مقابل الدفترية شاملة الشهرة المدفونة" },
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
        { dr: { en: "Share of profit of associate", ar: "نصيب ربح الزميلة" }, cr: { en: "Investment (reversal of an impairment, new evidence, capped)", ar: "الاستثمار (رد انخفاض بدليل جديد وبسقف)" }, red: true },
      ],
    },
    {
      kind: "journal",
      title: { en: "The lifecycle edges — disposal & exit", ar: "حواف دورة الحياة — التخرد والخروج" },
      rows: [
        { dr: { en: "Cash (proceeds of full disposal)", ar: "نقد (حصيلة تخل كامل)" }, cr: { en: "Investment in associate (carrying at disposal)", ar: "الاستثمار (الدفترية عند التخرد)" }, },
        { dr: { en: "OCI recycling — the equity-method reserve incl. the share of CTA", ar: "إعادة تدوير الدخل الشامل — احتياطي الحصة ومنه حصة فروق الترجمة" }, cr: { en: "Gain on disposal (P&L)", ar: "ربح التخرد (بالأرباح)" }, red: true },
        { dr: { en: "Cash (partial disposal, still an associate)", ar: "نقد (تخرد جزئي مع البقاء زميلة)" }, cr: { en: "Investment (the share disposed) + gain on the partial exit", ar: "الاستثمار (الجزء المتخرد) + ربح الخروج الجزئي" }, red: true },
        { cr: { en: "CTA recycles PROPORTIONALLY on a partial disposal (60% → 40%): only the disposed share's translation reserve leaves", ar: "فروق الترجمة تعاد بالتناسب في التخرد الجزئي (٦٠٪ ← ٤٠٪): يخرج احتياطي الترجمة للجزء المتخرد فقط" }, red: true },
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
        { en: "HYPERINFLATION (IAS 29): restate the associate's statements into the measuring unit at the investor's reporting date FIRST, then equity-account — and translate at closing rate", ar: "التضخم الجامح (IAS 29): تعاد قوائم الزميلة بوحدة قياس تاريخ تقرير المستثمر أولًا ثم تحاسب بالحصة — وتترجم بسعر الإقفال" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The upstream/downstream distinction decides which line the elimination hits. UPSTREAM (the associate sold to the investor): the unrealised profit sits in the ASSOCIATE's P&L, so the investor's share of that profit is overstated — adjust the share of profit. DOWNSTREAM (the investor sold to the associate): the unrealised profit sits in the INVESTOR's own books, against an asset whose carrying includes it — adjust the investment's carrying directly. State the direction before writing the entry; the marker checks the direction first and the number second.",
        ar: "تمييز الصاعدة/الهابطة يحدد السطر الذي يمسه الاستبعاد. الصاعدة (الزميلة باعت للمستثمر): الربح غير المحقق في أرباح الزميلة، فنصيب المستثمر منه متضخم — عدّل نصيب الربح. والهابطة (المستثمر باع للزميلة): الربح غير المحقق في دفاتر المستثمر ذاتها ضد أصل حامل له — عدّل دفترية الاستثمار مباشرة. قل الاتجاه قبل القيد؛ فالمصحح يفحص الاتجاه أولًا والرقم ثانيًا.",
      },
    },
    { kind: "h", text: { en: "Impairment & losses beyond carrying", ar: "الانخفاض والخسائر فوق الدفترية" } },
    {
      kind: "tree",
      root: { en: "The associate keeps losing money", ar: "الزميلة تخسر باستمرار" },
      branches: [
        {
          when: { en: "Carrying amount reaches ZERO — stop recognising further losses (the investment's floor)", ar: "تصل الدفترية صفرًا — توقف عن الاعتراف بمزيد من الخسائر" },
          then: { en: "Discontinue the equity method BELOW zero — unless obligations exist (funding commitments, guaranteed obligations, amounts already advanced)", ar: "أوقف الطريقة تحت الصفر — إلا إذا وُجدت التزامات (تعهد تمويل، التزامات مكفولة، مبالغ ممولة سلفًا)", red: true },
        },
        {
          when: { en: "OTHER LONG-TERM interests (preference shares, long receivables that form part of the net investment)", ar: "مصالح طويلة الأجل أخرى (أسهم ممتازة، مديونيات طويلة تدخل صافي الاستثمار)" },
          then: { en: "Continue absorbing losses against those interests (in REVERSE order of seniority — least senior first)", ar: "استمر في امتصاص الخسائر من تلك المصالح (بترتيب عكسي للأقدمية — الأقل أقدمية أولًا)", red: true },
        },
        {
          when: { en: "Indicators of impairment at each reporting date (IAS 36 territory — the recoverable amount test on the investment's carrying)", ar: "مؤشرات انخفاض في كل تقرير (أرض IAS 36 — اختبار المبلغ المسترد على دفترية الاستثمار)" },
          then: { en: "Impair the investment; REVERSALS follow IAS 36's rules (new-evidence route, capped at the recoverable)", ar: "انقص قيمة الاستثمار؛ والرد بقواعد IAS 36" },
        },
        {
          when: { en: "The loss relates to the associate's own INVESTMENT-ENTITY-style assets or a hyperinflationary currency", ar: "الخسارة متصلة بأصول شبيهة بكيانات الاستثمار أو بعملة جامحة التضخم" },
          then: { en: "Follow the specific interplay (fair-value-through-P&L election; IAS 29 restatement first) before the generic machinery", ar: "اتبع التقاطع الخاص (اختيار العادلة عبر الأرباح؛ إعادة عرض IAS 29 أولًا) قبل الآلية العامة", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Impairment mechanics on the one-line investment: because goodwill's share is embedded, the IAS 36 test runs on the carrying amount as a whole against the higher of value in use (the present value of the expected dividends plus the terminal exit value) and fair value less costs of disposal. A bargain arising from a rare below-fair-value purchase does NOT create a deferred gain; it simply means the initial carrying sits below the share of net assets, and the first impairment test must clear that margin before any loss is booked.",
        ar: "آلية الانخفاض على الاستثمار بسطر واحد: ما دامت حصة الشهرة مدفونة، يجري اختبار IAS 36 على الدفترية ككل مقابل الأعلى من قيمة الاستخدام (القيمة الحالية للتوزيعات المتوقعة زائد قيمة الخروج الختامية) والقيمة العادلة مخصوصة تكاليف التخرد. ولا يخلق شراء دون العادلة مكسبًا مؤجلًا؛ بل يعني ببساطة أن الدفترية الافتتاحية دون حصة صافي الأصول، وأن أول اختبار انخفاض يجب أن يجتاز ذلك الهامش قبل قيد أي خسارة.",
      },
    },
    { kind: "h", text: { en: "Changes in the stake", ar: "تغيرات الحصة" } },
    {
      kind: "steps",
      items: [
        { en: "ASSOCIATE → SUBSIDIARY (control arrives): remeasure the previously held interest at acquisition-date fair value → gain/loss in P&L; then consolidate from that date (IFRS 3 + IFRS 10)", ar: "زميلة ← تابعة (تصل السيطرة): تعاد قياسة الحصة السابقة بالعادلة والفرق للأرباح؛ ثم التجميع من التاريخ (IFRS 3 + 10)" },
        { en: "SUBSIDIARY → ASSOCIATE (control lost, significant influence retained): the IFRS 10 loss-of-control cascade runs, and the retained stake is measured at FV — which becomes the equity method's opening cost", ar: "تابعة ← زميلة (فقد السيطرة وبقاء التأثير): يسري تسلسل فقد السيطرة، وتفتح طريقة الحصة بتكلفة تساوي العادلة يوم الفقد" },
        { en: "ASSOCIATE → FINANCIAL INVESTMENT: derecognise with everything through P&L, RECYCLING the OCI amounts (incl. the investee's CTA share) — no partial-disposal-only-quota mechanics here", ar: "زميلة ← استثمار مالي: يستبعد وكله للأرباح مع إعادة تدوير الدخل الشامل (ومنه حصة فروق الترجمة)" },
        { en: "PARTIAL disposal still an associate (60% → 40%): a genuine partial-equity-method disposal — recognise gain/loss on the share disposed; the CTA recycles PROPORTIONALLY", ar: "تخرد جزئي مع البقاء زميلة (٦٠٪ ← ٤٠٪): اعترف بالربح/الخسارة على الجزء المتخرد وأعد تدوير فروق الترجمة بالتناسب" },
        { en: "CONTRIBUTING a business TO the associate or selling one through it (the 2023 amendment): full gain recognition only when what moved is an IFRS 3 BUSINESS — a non-business asset contribution leaves the gain dormant inside the carrying", ar: "المساهمة بعمل تجاري في الزميلة أو البيع عبرها (تعديل ٢٠٢٣): يعترف بالربح كاملًا فقط إذا كان المنتقل عملًا تجاريًا وفق IFRS 3 — فمساهمة أصل غير تجاري تبقي الربح كامنًا داخل الدفترية" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The step-disposal narrative is where the marks hide: an investor selling from 60% to 40% keeps an associate and books a gain on the 20% slice — carrying proportionally reduced, CTA proportionally recycled. The same investor selling from 40% to 20% has NOT necessarily kept an associate: if influence died with the second tranche, the whole remaining interest remeasures to fair value with the full CTA recycled. Always settle the influence question FIRST, then the accounting follows mechanically.",
        ar: "في سرد التخرد المتدرج تختبئ الدرجات: المستثمر البائع من ٦٠٪ إلى ٤٠٪ يبقي زميلة ويقيد ربحًا على شريحة الـ٢٠٪ — بخفض تناسبي للدفترية وإعادة تدوير تناسبية لفروق الترجمة. والبائع من ٤٠٪ إلى ٢٠٪ لم يحتفظ بزميلة بالضرورة: فإن مات التأثير مع الشريحة الثانية أعيد قياس كامل المصلحة المتبقية بالعادلة مع إعادة تدوير الاحتياطي كاملًا. احسم مسألة التأثير أولًا، ثم تسير المحاسبة ميكانيكيًا.",
      },
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
    {
      kind: "example",
      title: { en: "Impairment & the stop-down wall", ar: "الانخفاض وجدار التوقف" },
      lines: [
        { en: "Opening carrying 240 for a 25% associate · the associate loses 700 this year → the investor's share of loss = 175", ar: "دفترية افتتاحية ٢٤٠ لزميلة بنسبة ٢٥٪ · تخسر الزميلة ٧٠٠ هذا العام ← نصيب المستثمر من الخسارة ١٧٥" },
        { en: "Carrying after the loss = 240 − 175 = 65 — still positive, so the whole share hits P&L this year", ar: "الدفترية بعد الخسارة = ٢٤٠ − ١٧٥ = ٦٥ — ما زالت موجبة فتضرب الحصة كلها بالأرباح هذه السنة" },
        { en: "Next year the associate loses 400 more → share 100 > carrying 65: absorb 65 to ZERO, park the unpaid 35 — recognised only against long-term interests or binding obligations", ar: "العام التالي تخسر ٤٠٠ أخرى ← نصيب ١٠٠ أكبر من الدفترية ٦٥: امتص ٦٥ إلى الصفر وأجّل الـ٣٥ — ولا تعترف بها إلا ضد مصالح طويلة الأجل أو التزامات ملزمة" },
        { en: "Recovery later: resume recognising the share of profit only AFTER the parked 35 and any further suspended losses are cleared", ar: "التعافي لاحقًا: استئنف الاعتراف بنصيب الربح فقط بعد تصفية الـ٣٥ المؤجلة وأي خسائر موقوفة أخرى" },
      ],
    },
    { kind: "h", text: { en: "Exemptions from the equity method", ar: "الإعفاءات من طريقة الحصة" } },
    {
      kind: "list",
      items: [
        { en: "A parent exempt from consolidation (IFRS 10.4's public-availability exemption) may account for associates per IFRS 9 in ITS OWN statements (its parent's group statements still equity-account)", ar: "الأم المعفاة من التجميع (إعفاء الإتاحة العمومية) قد تحاسب الزميلات وفق IFRS 9 في قوائمها هي (وقوائم أمها المجمعة تظل بطريقة الحصة)" },
        { en: "The investor's OWN separate statements follow IAS 27's menu (cost / equity / FV)", ar: "منفصلة المستثمر تتبع قائمة IAS 27 (تكلفة/حصة/عادلة)" },
        { en: "Venture-capital organisations & similar may elect FVTPL for associates — an IAS 28's carve-out with disclosure of the election", ar: "منظمات رأس المال المخاطر ومن في حكمها يجوز لها FVTPL — استثناء في IAS 28 يفصح عنه" },
        { en: "An INVESTMENT ENTITY investor measures its associates at fair value through profit or loss (the IFRS 10 investment-entity logic extended to IAS 28)", ar: "المستثمر الكيان الاستثماري يقيس زميلاته بالقيمة العادلة عبر الأرباح (امتداد منطق كيانات الاستثمار من IFRS 10 إلى IAS 28)" },
      ],
    },
    { kind: "h", text: { en: "Interactions — the associate in the wider web", ar: "التقاطعات — الزميلة في الشبكة الأوسع" } },
    {
      kind: "list",
      items: [
        { en: "IFRS 11 ↔ IAS 28: a joint venture (rights to net assets) is equity-accounted exactly like an associate; a joint operation never is", ar: "IFRS 11 ↔ IAS 28: المشروع المشترك (حقوق في صافي الأصول) يحاسب بالحصة كالزميلة تمامًا؛ والعملية المشتركة أبدًا" },
        { en: "IFRS 10 ↔ IAS 28: the boundary is CONTROL vs INFLUENCE — a boundary shift (gain or loss of either) remeasures the retained interest to fair value at the crossing date", ar: "IFRS 10 ↔ IAS 28: الحد الفاصل هو السيطرة مقابل التأثير — وعبور الحد بأي اتجاه يعيد قياس المصلحة المتبقية بالعادلة يوم العبور" },
        { en: "IFRS 3 ↔ IAS 28: the acquisition machinery prices the opening share of net assets; the 2023 amendment aligns business-vs-asset contributions", ar: "IFRS 3 ↔ IAS 28: آلية الاستحواذ تسعّر حصة صافي الأصول الافتتاحية؛ وتعديل ٢٠٢٣ يوائم المساهمات التجارية وغير التجارية" },
        { en: "IAS 29 ↔ IAS 28: hyperinflationary associates restate first, then equity-account", ar: "IAS 29 ↔ IAS 28: الزميلات في اقتصادات جامحة تعاد قوائمها أولًا ثم تحاسب بالحصة" },
        { en: "IFRS 12 ↔ IAS 28: the associate's summary financials, commitments and contingencies ride the IFRS 12 note", ar: "IFRS 12 ↔ IAS 28: الملخص المالي للزميلة والتزاماتها المحتملة تركب ملاحظة IFRS 12" },
        { en: "IAS 36 ↔ IAS 28: impairment testing runs on the single carrying line, never on the associate's individual assets from the investor's seat", ar: "IAS 36 ↔ IAS 28: اختبار الانخفاض يجري على السطر الواحد، لا على أصول الزميلة منفردة من موقع المستثمر" },
      ],
    },
    { kind: "h", text: { en: "Definitions — the working vocabulary", ar: "التعاريف — المعجم العامل" } },
    {
      kind: "p",
      text: {
        en: "ASSOCIATE: an entity over which the investor has SIGNIFICANT INFLUENCE — neither a subsidiary (control) nor a mere holding. SIGNIFICANT INFLUENCE: the power to participate in financial and operating policy decisions, short of controlling them — a seat at the table, not the chair. EQUITY METHOD: accounting by which the investment is first recognised at cost, then adjusted for the investor's share of the investee's post-acquisition changes: profit adds, losses and dividends subtract. FAIR VALUE at acquisition defines the opening share of net assets, and the method's carrying is a LIVE number that moves with the investee's own equity.",
        ar: "الزميلة: كيان للمستثمر عليه تأثير جوهري — لا تابعة (سيطرة) ولا حيازة مجردة. والتأثير الجوهري: القدرة على المشاركة في قرارات السياسات المالية والتشغيلية دون السيطرة عليها — مقعد على الطاولة لا الكرسي الأول. وطريقة الحصة: تحاسب الاستثمار أولًا بالتكلفة ثم يعدل بنصيب المستثمر من تغيرات المستثمَر فيه بعد الاستحواذ: الربح يضيف والخسائر والتوزيعات تخصم. والعادلة عند الاستحواذ تحدد حصة صافي الأصول الافتتاحية، ودفترية الطريقة رقم حي يتحرك مع حقوق ملكية المستثمَر فيه ذاتها.",
      },
    },
    {
      kind: "p",
      text: {
        en: "The 20% line is a PRESUMPTION, not a rule: 18% with a board seat, technology dependence and management interchange is an associate; 45% held by a silent family alongside a 55% strategic controller is not. The percentage matters only as evidence of voting power — and voting power is assessed on the rights CURRENTLY exercisable, with potential voting rights (options, convertibles, warrants) weighed for substance: are they real levers the holder can pull today, or financial instruments whose strike is purely speculative?",
        ar: "خط الـ٢٠٪ افتراض لا قاعدة: فـ١٨٪ مع مقعد مجلس واعتماد تقني وتبادل إداري تجعل زميلة؛ و٤٥٪ صامتة لدى عائلة إلى جوار مسيطر استراتيجي بـ٥٥٪ لا تجعل. والنسبة لا تهم إلا دليلًا على قوة التصويت — وتقيَّم القوة على الحقوق القابلة للممارسة الآن، مع وزن الحقوق الكامنة (خيارات وتحويلات ومقايضات) بجوهرها: أهي روافع حقيقية يمكن سحبها اليوم أم أدوات مالية ضرباتها تخمينية صرفة؟",
      },
    },
    {
      kind: "tree",
      root: { en: "Control, influence, or neither? — the boundary tree", ar: "سيطرة أم تأثير أم لا شيء؟ — شجرة الحدود" },
      branches: [
        {
          when: { en: "Power over the investee + exposure to variable returns + the ability to USE that power — the three-limb IFRS 10 test", ar: "سلطة على المستثمَر فيه + تعرض لعوائد متغيرة + قدرة على استعمال السلطة — اختبار IFRS 10 ثلاثي الشعب" },
          then: { en: "CONTROL → subsidiary → consolidate (IFRS 10), not IAS 28", ar: "سيطرة ← تابعة ← تجميع (IFRS 10) لا IAS 28", red: true },
        },
        {
          when: { en: "A contractual sharing of decisions (unanimous consent among the parties) with rights to net assets", ar: "مشاركة تعاقدية في القرارات (إجماع الأطراف) مع حقوق في صافي الأصول" },
          then: { en: "JOINT CONTROL → joint venture → equity method via IAS 28", ar: "سيطرة مشتركة ← مشروع مشترك ← طريقة الحصة عبر IAS 28", red: true },
        },
        {
          when: { en: "Participation in policy decisions without control or joint control", ar: "مشاركة في قرارات السياسات بلا سيطرة ولا سيطرة مشتركة" },
          then: { en: "SIGNIFICANT INFLUENCE → associate → equity method (IAS 28)", ar: "تأثير جوهري ← زميلة ← طريقة الحصة (IAS 28)", red: true },
        },
        {
          when: { en: "None of the above — a passive stake", ar: "لا شيء مما سبق — حصة سلبية" },
          then: { en: "IFRS 9 financial asset at FVTPL / FVOCI / amortised cost — no equity method", ar: "أصل مالي وفق IFRS 9 بالعادلة عبر الأرباح أو الدخل الشامل أو التكلفة المطفأة — لا طريقة حصة", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Presentation of the share lines", ar: "عرض سطور الحصة" } },
    {
      kind: "p",
      text: {
        en: "In the investor's primary statements the equity method occupies exactly three places: the INVESTMENT line in the statement of financial position (carrying amount, non-current), the SHARE OF PROFIT of associates in P&L (usually after operating profit, before tax), and the SHARE OF OCI items in the investor's OCI. The investment is NOT reclassified as a financial asset, and the share of profit is NOT dividend income — the classification itself communicates the relationship. Where the share of a loss exceeds the carrying, the line simply floors at zero (with the queue parked off-book until obligations or profits say otherwise).",
        ar: "تحتل طريقة الحصة في قوائم المستثمر الأولية ثلاثة مواضع بالضبط: سطر الاستثمار في الميزانية (الدفترية، غير متداول)، ونصيب ربح الزميلات في الأرباح (غالبًا بعد الربح التشغيلي وقبل الضريبة)، ونصيب بنود الدخل الشامل في دخل المستثمر الشامل. ولا يعاد تصنيف الاستثمار أصلًا ماليًا، ولا يعد نصيب الربح دخل توزيعات — فالتصنيف ذاته يبلغ عن العلاقة. وحيث تتجاوز الحصة من خسارة الدفترية، يقف السطر عند الصفر ببساطة (والصف منتظر خارج الدفاتر حتى تقضي الالتزامات أو الأرباح بغيره).",
      },
    },
    {
      kind: "p",
      text: {
        en: "The investor's OWN income tax is computed on its own tax base; the share of profit arrives PRE-TAX from the associate, so the investor's tax line must not tax the associate's profits again — the associate pays its own tax where it sits. Where the associate operates in a jurisdiction with a withholding tax on distributions, the investor's effective economics shrink accordingly, and the disclosure of the associate's own tax (IFRS 12) tells the reader how much of the share is really distributable.",
        ar: "تُحسب ضريبة دخل المستثمر على قاعدته الضريبية ذاتها؛ ويصل نصيب الربح من الزميلة قبل الضريبة، فلا يجوز لسطر ضريبة المستثمر أن يفرض ضريبة على أرباح الزميلة مرة ثانية — فالزميلة تدفع ضريبتها في مقرها. وحيث تعمل الزميلة في نطاق يفرض ضريبة استقطاع على التوزيعات، تنكمش اقتصاديات المستثمر الفعلية تبعًا، وإفصاح IFRS 12 عن ضريبة الزميلة يخبر القارئ كم من الحصة قابل للتوزيع حقًا.",
      },
    },
    { kind: "h", text: { en: "Timing — mid-year acquisitions and disposals", ar: "التوقيت — الاستحواذ والتخرد في منتصف السنة" } },
    {
      kind: "p",
      text: {
        en: "The equity method respects the calendar of ownership: from acquisition date to disposal date, no more. Acquire at 1 October and only one quarter of the associate's profit belongs in the investor's year — and a WEIGHTED AVERAGE or a month-by-month build are both acceptable if disclosed and consistent. Pre-acquisition profit never touches P&L; it is simply part of what the purchase price bought. On disposal the mirror applies: the share of profit runs to the disposal date, then the whole carrying is settled against proceeds and everything recycles.",
        ar: "تحترم طريقة الحصة تقويم الملكية: من تاريخ الاستحواذ إلى تاريخ التخرد، لا أكثر. فمن استحوذ في أول أكتوبر لا يستحق إلا ربع سنة من ربح الزميلة — ويقبل المتوسط المرجح أو البناء الشهري كلاهما إذا أفصح عنهما والتزم بهما. وربح ما قبل الاستحواذ لا يمس الأرباح أبدًا؛ فهو ببساطة جزء مما اشتراه الثمن. وعند التخرد ينعكس المرآة: يسري نصيب الربح حتى تاريخ التخرد ثم تسوى الدفترية كلها مقابل الحصيلة ويعاد تدوير كل شيء.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Losses are timed with the same discipline: the share of a loss recognised only while the stake is held — an investor who acquires into a distressed associate buys the carrying at the negotiated price and does NOT inherit the history of prior losses. Conversely, disposing mid-loss-year leaves the investor carrying its share up to the exit date exactly; the buyer's price is expected to reflect the remainder.",
        ar: "توقيت الخسائر بالانضباط ذاته: لا يعترف بنصيب خسارة إلا مدة حيازة الحصة — فمن يشتري زميلة متعثرة يشتري دفتريتها بالسعر المتفاوض عليه ولا يرث تاريخ خسائرها السابقة. وبالعكس: من يتخرد في سنة خاسرة يحمل نصيبه حتى تاريخ الخروج بعينه؛ وسعر المشتري يفترض أن يعكس الباقي.",
      },
    },
    {
      kind: "example",
      title: { en: "A mid-year acquisition weighted", ar: "استحواذ منتصف سنة مرجحًا" },
      lines: [
        { en: "Acquired 30% on 1 April for 500 · the associate's profit for the calendar year 160, earned evenly", ar: "استُحوذ على ٣٠٪ في أول أبريل بمبلغ ٥٠٠ · وربح الزميلة للسنة ١٦٠ متساوي التكوّن" },
        { en: "Ownership window = 9/12 of the year → post-acquisition profit = 160 × 9/12 = 120", ar: "نافذة الملكية = ٩/١٢ من السنة ← ربح ما بعد الاستحواذ = ١٦٠ × ٩/١٢ = ١٢٠" },
        { en: "Share of profit = 120 × 30% = 36 (NOT 160 × 30% = 48 — the pre-April profit belongs to the seller)", ar: "نصيب الربح = ١٢٠ × ٣٠٪ = ٣٦ (لا ١٦٠ × ٣٠٪ = ٤٨ — فربح ما قبل أبريل للبائع)" },
        { en: "Dividends declared at year-end 50 → received 15 → carrying = 500 + 36 − 15 = 521", ar: "توزيعات مقررة نهاية السنة ٥٠ ← مقبوض ١٥ ← الدفترية = ٥٠٠ + ٣٦ − ١٥ = ٥٢١" },
      ],
    },
    {
      kind: "list",
      items: [
        { en: "Disclosure (via IFRS 12): the associate's summarised financials — revenue, profit, total assets, total liabilities — a condensed window onto the one-line carrying", ar: "الإفصاح (عبر IFRS 12): الملخص المالي للزميلة — الإيراد والربح ومجمل الأصول والالتزامات — نافذة مختصرة على الدفترية ذات السطر الواحد" },
        { en: "The investor's share of the associate's CONTINGENT LIABILITIES and capital commitments rides the same note — the carrying hides them, the note must not", ar: "حصة المستثمر من التزامات الزميلة المحتملة والتزاماتها الرأسمالية تركب الملاحظة ذاتها — فالدفترية تخفيها والملاحظة لا يجوز أن تخفيها" },
        { en: "Name the significant judgments: why influence exists at 15%, or why it does not at 25% — the boundary judgment itself is a disclosure item", ar: "سمِّ الأحكام الجوهرية: لماذا يوجد التأثير عند ١٥٪ أو لماذا ينعدم عند ٢٥٪ — فحكم الحدود ذاته بند إفصاح" },
        { en: "Where the associate's statements use a different DATE (a quarter's lag is tolerated up to three months), align and disclose the effect of significant transactions between the dates", ar: "حيث تستخدم قوائم الزميلة تاريخًا مختلفًا (يسمح بتأخير حتى ثلاثة أشهر)، وحّد وأفصح عن أثر المعاملات الجوهرية بين التاريخين" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "OCI under the equity method has its own traffic rules: the investor's share of the associate's revaluation surpluses, FVOCI gains and cash-flow-hedge reserves flows into an equity-method reserve in the investor's OCI — and recycles to P&L only when the associate itself recycles, or when the investment is disposed. The share of the associate's FOREIGN-CURRENCY TRANSLATION reserve is the busiest lane: it accumulates silently for years and surfaces at disposal (fully) or at a partial disposal (proportionally), catching candidates who forgot it existed.",
        ar: "للدخل الشامل في طريقة الحصة قواعد مرور خاصة: حصة المستثمر من فوائض إعادة تقييم الزميلة ومكاسب FVOCI واحتياطيات تحوّط التدفقات تصب في احتياطي طريقة الحصة بدخل المستثمر الشامل — ولا يعاد تدويره إلى الأرباح إلا حين تعيد الزميلة ذاتها التدوير أو عند التخرد. وأكثر مساراته حركةً حصة احتياطي فروق ترجمة الزميلة: يتراكم صامتًا سنين ويطفو عند التخرد (كاملًا) أو التخرد الجزئي (بالتناسب)، فيمسك بمن نسي وجوده.",
      },
    },
    {
      kind: "example",
      title: { en: "The CTA surprise at disposal", ar: "مفاجأة فروق الترجمة عند التخرد" },
      lines: [
        { en: "Carrying 300 + an equity-method CTA reserve of −45 accumulated over eight years → the investment's full economic footprint is 255", ar: "دفترية ٣٠٠ + احتياطي فروق ترجمة −٤٥ تراكم ثماني سنوات ← البصمة الاقتصادية الكاملة للاستثمار ٢٥٥" },
        { en: "Full disposal for 290: the P&L gain = 290 − 255 = 35 — NOT 290 − 300 = −10; the recycled CTA turns the paper loss into a gain", ar: "تخل كامل بمبلغ ٢٩٠: ربح الأرباح = ٢٩٠ − ٢٥٥ = ٣٥ — لا ٢٩٠ − ٣٠٠ = ١٠−؛ فإعادة تدوير الفروق تقلب الخسارة الورقية ربحًا" },
        { en: "Partial disposal (half the stake, still an associate): proceeds 145 · gain = 145 − 150 + 22.5 (half the CTA recycled) = 17.5", ar: "تخرد جزئي (نصف الحصة مع البقاء زميلة): الحصيلة ١٤٥ · الربح = ١٤٥ − ١٥٠ + ٢٢٫٥ (نصف الفروق معاد تدويره) = ١٧٫٥" },
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
      kind: "tip",
      text: {
        en: "The parked loss is the trick the examiner loves: losses beyond the carrying do NOT vanish — they queue against long-term interests and binding obligations, and future profits must clear the queue before any P&L share resumes. Show the queue explicitly.",
        ar: "الخسارة المؤجلة حيلة المصحح المحبوبة: الخسائر فوق الدفترية لا تتبخر — بل تصطف ضد المصالح طويلة الأجل والالتزامات الملزمة، ولا يُعترف بنصيب ربح لاحق قبل تصفية الصف. اعرض الصف صراحة.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The share of goodwill is EMBEDDED in the investment's carrying — never a separate line; that is why impairment testing runs on the investment as one unit.",
        ar: "الحصة تشمل الشهرة: لا تظهر بسطر منفصل — إنها مدفونة داخل دفترية الاستثمار، ولهذا يختبر انخفاضها على الاستثمار ككل.",
      },
    },
    {
      kind: "note",
      text: {
        en: "IAS 28 keeps ONE accounting answer for two relationships — associates and joint ventures — the exam difference lives in IFRS 11's classification, not in the equity method itself.",
        ar: "يُبقي IAS 28 جوابًا محاسبيًا واحدًا لعلاقتين — الزميلات والمشروعات المشتركة — ففرق الامتحان يسكن تصنيف IFRS 11 لا في طريقة الحصة ذاتها.",
      },
    },
  ],
}
