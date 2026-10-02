/**
 * v30 — IFRS Summaries · Groups & Investments group:
 * IFRS 3, IFRS 10, IFRS 11, IFRS 12, IAS 27, IAS 28.
 */

import type { Standard } from "./types"

export const GROUP_STANDARDS: Standard[] = [
  {
    code: "IFRS 3",
    title: { en: "Business Combinations", ar: "الاندماجات التجارية" },
    topic: "groups",
    effective: { en: "Effective 1 Jul 2009 (revised)", ar: "سارٍ من ١ يوليو ٢٠٠٩ (بعد المراجعة)" },
    blocks: [
      { kind: "h", text: { en: "Objective & method", ar: "الهدف والطريقة" } },
      {
        kind: "p",
        text: {
          en: "The ACQUISITION METHOD: identify the ACQUIRER, the acquisition DATE, and the consideration transferred, then measure the identifiable assets acquired and liabilities assumed at ACQUISITION-DATE FAIR VALUE — with goodwill as the residual.",
          ar: "طريقة الاقتناء: حدد المستقتني وتاريخ الاقتناء والمقابل المحوَّل، ثم قِس الأصول المقتناة والالتزامات المتحملة بالقيمة العادلة بتاريخ الاقتناء — وتكون الشهرة بواقي ذلك.",
        },
      },
      { kind: "h", text: { en: "The four steps", ar: "الخطوات الأربع" } },
      {
        kind: "steps",
        items: [
          { en: "Identify the ACQUIRER — the party that obtains CONTROL (the IFRS 10 power/variable-returns/link test)", ar: "حدد المستقتني — الطرف الذي يحصل على السيطرة (اختبار السلطة والعوائد المتغيرة والربط وفق IFRS 10)" },
          { en: "Determine the ACQUISITION DATE — when control passes; that date fixes every fair value", ar: "حدد تاريخ الاقتناء — لحظة انتقال السيطرة؛ وبه تتحدد كل قيمة عادلة" },
          { en: "Recognise + measure the IDENTIFIABLE assets, liabilities and any NON-CONTROLLING INTEREST at fair value", ar: "اعترف بالأصول والالتزامات القابلة للتحديد وبالحصص غير المسيطرة وقسها بالقيمة العادلة" },
          { en: "Recognise GOODWILL or a BARGAIN-PURCHASE GAIN (reassessed!)", ar: "اعترف بالشهرة أو بربح شراء بثمن بخس (بعد إعادة النظر فيه!)" },
        ],
      },
      {
        kind: "formula",
        title: { en: "The goodwill equation", ar: "معادلة الشهرة" },
        lines: [
          { en: "Goodwill = consideration transferred + NCI + previously-held equity interest − net acquisition-date fair value of identifiable assets, liabilities & contingent liabilities", ar: "الشهرة = المقابل المحوَّل + الحصص غير المسيطرة + الحصة المقتناة سابقًا − صافي القيمة العادلة للأصول والالتزامات القابلة للتحديد" },
          { en: "NCI at FAIR VALUE (full goodwill) or at the PROPORTIONATE share of net assets (partial — choice per combination)", ar: "الحصص غير المسيطرة بالقيمة العادلة (شهرة كاملة) أو بنسبتها من صافي الأصول (جزئية — خيار لكل عملية)" },
          { en: "Contingent consideration → recognised at acquisition-date FAIR VALUE (later changes usually P&L unless equity-classified)", ar: "المقابل المشروط ← يعترف به بالقيمة العادلة بتاريخ الاقتناء (وتغيراته لاحقًا بالأرباح عدا المصنف حقوق ملكية)" },
          { en: "A bargain purchase → re-measure everything, re-do the procedures, then (rarely) book the excess as a GAIN in P&L", ar: "الشراء بثمن بخس ← يعاد قياس كل شيء وتعاد الإجراءات ثم يقيد الفائض (نادرًا) ربحًا بالأرباح" },
        ],
      },
      { kind: "h", text: { en: "Principles the exam drills", ar: "مبادئ تُختبر كثيرًا" } },
      {
        kind: "list",
        items: [
          { en: "Acquisition COSTS (advisory, legal, accounting) → EXPENSE as incurred — never goodwill", ar: "تكاليف الاقتناء (استشارات وقانونية ومحاسبة) ← مصروف عند حدوثها — لا تدخل في الشهرة أبدًا" },
          { en: "Contingent liabilities assumed → recognise at fair value (IFRS 3 principle overrides IAS 37's 'probable' gate)", ar: "الالتزامات المحتملة المتحملة ← تعترف بالقيمة العادلة (مبدأ IFRS 3 يغلب بوابة الرجحان في IAS 37)" },
          { en: "Deferred tax on the fair-value uplift → IAS 12 as if the assets were acquired at those values", ar: "ضريبة مؤجلة على رفع القيمة العادلة ← وفق IAS 12 كأن الأصول اقتنت بهذه القيم" },
          { en: "Deferred consideration → discounted to present value at the acquisition date", ar: "المقابل المؤجل ← يخصم لقيمته الحالية بتاريخ الاقتناء" },
          { en: "Measurement period (≤ 12 months) → adjust goodwill for new facts about conditions that existed AT the acquisition date; after that, IAS 8 error rules", ar: "فترة القياس (≤ ١٢ شهرًا) ← تعدل الشهرة لوقائع جديدة عن ظروف كانت قائمة بتاريخ الاقتناء؛ وبعدها قواعد أخطاء IAS 8" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "A business = inputs + processes + outputs; acquiring an integrated set is a business combination (goodwill possible) but buying a bare asset group or a single asset is an asset acquisition (no goodwill, costs capitalised) — the screen first, then the method.",
          ar: "النشاط = مدخلات + عمليات + مخرجات؛ فامتلاك مجموعة متكاملة اندماج (تجوز الشهرة)، أما شراء أصول مجردة فاقتناء أصول (لا شهرة، وتُرسمل التكاليف) — الفحص أولًا ثم الطريقة.",
        },
      },
    ],
  },

  {
    code: "IFRS 10",
    title: { en: "Consolidated Financial Statements", ar: "القوائم المالية المجمعة" },
    topic: "groups",
    effective: { en: "Effective 1 Jan 2013 · the single control model for every investor–investee relationship", ar: "سارٍ من ١ يناير ٢٠١٣ · نموذج سيطرة واحد لكل علاقة مستثمر–مستثمَر فيه" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "Consolidate when the investor CONTROLS the investee — one model for subsidiaries, structured entities and de-facto arrangements alike. The group presents itself as a single economic entity: parent + subsidiaries line-by-line.",
          ar: "يُجمَّع عندما يسيطر المستثمر على المستثمَر فيه — نموذج واحد للشركات التابعة والكيانات المهيكلة والترتيبات الفعلية سواء. وتعرض المجموعة ذاتها ككيان اقتصادي واحد: الأم والتابعات بندًا بندًا.",
        },
      },
      { kind: "h", text: { en: "The three-element control test", ar: "اختبار السيطرة ثلاثي العناصر" } },
      {
        kind: "tree",
        root: { en: "Power over the investee?", ar: "سلطة على المستثمَر فيه؟" },
        branches: [
          {
            when: { en: "EXISTING rights that give the CURRENT ability to direct the RELEVANT activities (those that significantly affect returns)", ar: "حقوق قائمة تمنح القدرة الحالية على توجيه الأنشطة المؤثرة جوهريًا في العوائد" },
            then: { en: "+ EXPOSURE to variable returns + the ability to USE the power over the investee to AFFECT those returns → CONTROL", ar: "+ تعرض لعوائد متغيرة + القدرة على استخدام السلطة للتأثير في تلك العوائد ← سيطرة", red: true },
          },
          {
            when: { en: "More than HALF the votes (with no potential voting rights or other arrangements to dilute)", ar: "أكثر من نصف الأصوات (بلا حقوق تصويت محتملة مخففة أو ترتيبات أخرى)" },
            then: { en: "Presumed control — rebuttable when relevant activities are directed by contract elsewhere", ar: "سيطرة مفترضة — قابلة للدحض حين توجه الأنشطة تعاقديًا في مكان آخر", red: true },
          },
          {
            when: { en: "Less than half, but scattered votes + de-facto control (past general meetings, dissident holders, contractual rights)", ar: "أقل من النصف لكن أصوات مشتتة وسيطرة فعلية (اجتماعات سابقة، حملة معارضون، حقوق تعاقدية)" },
            then: { en: "CONTROL can still exist — look at facts, not percentages", ar: "قد توجد السيطرة رغم ذلك — انظر للوقائع لا للنسب", red: true },
          },
        ],
      },
      { kind: "h", text: { en: "Consolidation procedures", ar: "إجراءات التجميع" } },
      {
        kind: "list",
        items: [
          { en: "Combine like items of assets, liabilities, equity, income and expenses — at the PARENT's share PLUS NCI", ar: "تُجمع البنود المتماثلة — بحصة الأم زائد الحصص غير المسيطرة" },
          { en: "Eliminate the parent's investment against the subsidiary's equity, and ALL intragroup balances, transactions, income and expenses (including the full unrealised profit — NCI bears its share for downstream sales)", ar: "يستبعد استثمار الأم مقابل حقوق ملكية التابعة، وكل الأرصدة والمعاملات والإيرادات والمصروفات داخل المجموعة (بما فيها الربح غير المحقق كاملًا)" },
          { en: "Uniform accounting policies and reporting dates (adjust or supplement information ≤ 3 months apart)", ar: "توحيد السياسات وتواريخ التقرير (يعدل ما كان الفارق ≤ ٣ أشهر)" },
          { en: "Losses within NCI → allocate even if it drives the NCI below zero (the NCI bears its share of losses)", ar: "خسائر ضمن الحصص غير المسيطرة ← تخصص لها حتى لو أنزلتها دون الصفر" },
          { en: "A parent may not present consolidations if it is itself a subsidiary whose other owners do not object (rare exemption)", ar: "لا تجمع الأم إذا كانت تابعة ولم يعترض بقية الملاك (إعفاء نادر)" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Potential voting rights (options, convertibles) count only when they are currently EXERCISABLE and give additional power — a call option held by the minority can BREAK the parent's control.",
          ar: "حقوق التصويت المحتملة (خيارات، قابلة للتحويل) لا تعد إلا إذا كانت قابلة للممارسة حاليًا وتضيف سلطة — فخيار شراء بيد الأقلية قد يهدم سيطرة الأم.",
        },
      },
    ],
  },

  {
    code: "IFRS 11",
    title: { en: "Joint Arrangements", ar: "الترتيبات المشتركة" },
    topic: "groups",
    effective: { en: "Effective 1 Jan 2013 · replaced IAS 31 & SIC-13", ar: "سارٍ من ١ يناير ٢٠١٣ · حل محل IAS 31 وSIC-13" },
    replaces: { en: "Replaced IAS 31 interests in joint ventures & jointly controlled entities", ar: "حل محل IAS 31 (الحصص في المشروعات المشتركة والكيانات المشترك في التحكم بها)" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "A joint arrangement is one where two or more parties have JOINT CONTROL — a contractual agreement that decisions over relevant activities require the UNANIMOUS consent of the parties sharing control. Joint control exists only while decisions need every party's agreement.",
          ar: "الترتيب المشترك ما يملك طرفان أو أكثر فيه سيطرة مشتركة — اتفاق تعاقدي يشترط في قرارات الأنشطة المؤثرة موافقة جميع المتشاركين بالإجماع. ولا توجد سيطرة مشتركة إلا ما دامت القرارات تستلزم رضا كل طرف.",
        },
      },
      { kind: "h", text: { en: "The classification split", ar: "تقسيم التصنيف" } },
      {
        kind: "tree",
        root: { en: "Structure + contractual terms: separate vehicle?", ar: "الهيكل والشروط التعاقدية: كيان مستقل؟" },
        branches: [
          {
            when: { en: "The parties have RIGHTS TO THE ASSETS and OBLIGATIONS FOR THE LIABILITIES (no separate vehicle, or the vehicle gives direct rights)", ar: "للطرفين حقوق في الأصول والتزامات في الخصوم (بلا كيان مستقل أو يمنح الكيان حقوقًا مباشرة)" },
            then: { en: "JOINT OPERATION — account for your SHARE of assets, liabilities, revenue and expenses line-by-line", ar: "تشغيل مشترك — يحاسب كل طرف على حصته من الأصول والالتزامات والإيرادات والمصروفات بندًا بندًا", red: true },
          },
          {
            when: { en: "The parties have RIGHTS TO NET ASSETS of the separate vehicle", ar: "للطرفين حقوق في صافي أصول الكيان المستقل" },
            then: { en: "JOINT VENTURE — EQUITY METHOD (IAS 28), one line on the SOFP", ar: "مشروع مشترك — طريقة الحصة وفق IAS 28، بند واحد بالمركز المالي", red: true },
          },
        ],
      },
      { kind: "h", text: { en: "Practical patterns", ar: "أنماط عملية" } },
      {
        kind: "list",
        items: [
          { en: "Jointly controlled operations (no vehicle): share the output, costs — each party recognises its own assets/liabilities", ar: "عمليات مشتركة (بلا كيان): يتقاسم الطرفان المخرجات والتكاليف — وكل طرف يعترف بأصوله والتزاماته" },
          { en: "Jointly controlled assets (shared pipeline, road): recognise your share of the asset + liabilities for your obligations + your share of revenue/expenses", ar: "أصول مشتركة (خط أنابيب، طريق): يعترف كل طرف بحصته من الأصل والتزاماته ونصيبه من الإيراد والمصروف" },
          { en: "Jointly controlled entities (a separate company) → PRESUMED a joint venture, but test the substance: if the vehicle is a shell and the parties take the output/liabilities directly → joint operation", ar: "كيانات مشتركة (شركة مستقلة) ← يفترض مشروعًا مشتركًا، لكن اختبر الجوهر: فإذا كان الكيان شكليًا والطرفان يأخذان المخرجات والالتزامات مباشرة ← تشغيل مشترك" },
          { en: "Transactions between a venturer and the JV (upstream/downstream) → eliminate the unrealised profit only to THE VENTURER'S SHARE", ar: "المعاملات بين المتشارك والمشروع المشترك ← يستبعد الربح غير المحقق بقدر حصة المتشارك فقط" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "IFRS 11 killed proportionate consolidation: joint ventures get the equity method, full stop — but joint OPERATIONS still show a line-by-line share, which LOOKS like proportionate consolidation. Classify first, then account.",
          ar: "ألغى IFRS 11 التجميع التناسبي: فالمشروعات المشتركة بطريقة الحصة حسمًا — لكن التشغيل المشترك يظل يعرض حصة بندًا بندًا فيبدو كتجميع تناسبي. صنّف أولًا ثم حاسب.",
        },
      },
    ],
  },

  {
    code: "IFRS 12",
    title: { en: "Disclosure of Interests in Other Entities", ar: "الإفصاح عن الحصص في كيانات أخرى" },
    topic: "groups",
    effective: { en: "Effective 1 Jan 2013 · the companion disclosure standard", ar: "سارٍ من ١ يناير ٢٠١٣ · معيار الإفصاح المرافق" },
    blocks: [
      { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
      {
        kind: "p",
        text: {
          en: "One disclosure package for every kind of interest in another entity: subsidiaries, joint arrangements, associates and unconsolidated structured entities — helping users judge the nature of, and risks from, those interests.",
          ar: "حزمة إفصاح واحدة لكل نوع من الحصص في كيانات أخرى: التابعة، والترتيبات المشتركة، والزميلات، والكيانات المهيكلة غير مجمعة — لتمكين المستخدمين من الحكم على طبيعة تلك الحصص ومخاطرها.",
        },
      },
      { kind: "h", text: { en: "The disclosure blocks", ar: "كتل الإفصاح" } },
      {
        kind: "list",
        items: [
          { en: "Significant judgements: control despite <50%, joint control, significant influence, and whether an entity is a structured entity", ar: "أحكام جوهرية: السيطرة رغم أقل من النصف، والسيطرة المشتركة، والتأثير الكبير، وهل الكيان مهيكلًا" },
          { en: "Subsidiaries: name, country, ownership %, voting %, NCI — and how NCI's share of profit/equity is measured", ar: "التابعة: الاسم والبلد ونسبة الملكية ونسبة التصويت والحصص غير المسيطرة — وكيف تقاس حصتها" },
          { en: "Interest in a joint venture or associate: name, %, fair value if it is quoted, summarised financials (assets, liabilities, revenue, profit)", ar: "الحصة في مشروع مشترك أو زميلة: الاسم والنسبة والقيمة العادلة إن كانت مدرجة، وبيانات مالية ملخصة" },
          { en: "Significant restrictions: dividends, transfers of funds, exchange controls; the date the FS of subsidiaries are made available to the parent", ar: "قيود جوهرية: التوزيعات وتبادل الأموال وضوابط الصرف؛ وتاريخ إتاحة قوائم التابعة للأم" },
          { en: "Unconsolidated structured entities (sponsors, securitisation vehicles): nature, size, risks, support provided — even with NO contractual obligation", ar: "الكيانات المهيكلة غير المجمعة (الرعاة، أدوات التوريق): الطبيعة والحجم والمخاطر والدعم المقدم — ولو بلا التزام تعاقدي" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "IFRS 12 deliberately crosses IFRS 10/11/28: the disclosures follow the INTEREST, not the accounting — even a purely contractual involvement with a structured entity gets disclosed when it exposes the entity to risk.",
          ar: "يتعمد IFRS 12 العبور بين IFRS 10/11/28: فالإفصاحات تتبع الحصة لا المحاسبة — حتى التورط التعاقدي البحت مع كيان مهيكل يُفصح عنه إذا عرض المنشأة لمخاطر.",
        },
      },
    ],
  },

  {
    code: "IAS 27",
    title: { en: "Separate Financial Statements", ar: "القوائم المالية المنفصلة" },
    topic: "groups",
    effective: { en: "Effective 1 Jan 2013 (revised for IFRS 10/11/12)", ar: "سارٍ من ١ يناير ٢٠١٣ (معدل مع IFRS 10/11/12)" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "How a parent, venturer or investor accounts for its investments when it presents SEPARATE financial statements (its own single-entity statements) — which many regulators still require alongside the consolidated set.",
          ar: "كيف تحاسب الأم أو المتشارك أو المستثمر استثماراته عند عرضه قوائم منفصلة (قوائمه الذاتية) — وما تزال جهات رقابية كثيرة تشترطها مع المجمعة.",
        },
      },
      { kind: "h", text: { en: "The accounting menu", ar: "قائمة المحاسبة" } },
      {
        kind: "tree",
        root: { en: "Investment in subsidiaries, joint ventures & associates in the separate FS", ar: "الاستثمار في التابعة والمشروعات والزميلات بالقوائم المنفصلة" },
        branches: [
          {
            when: { en: "Default", ar: "الافتراضي" },
            then: { en: "COST — cost less impairment (the fallback also when fair value is unavailable)", ar: "التكلفة — بعد خصم أي انخفاض", red: true },
          },
          {
            when: { en: "Equity instrument with a quoted market price (or FV reliably measurable)", ar: "أداة حقوق ملكية مدرجة أو قابلة للقياس العادل الموثوق" },
            then: { en: "FAIR VALUE (IAS 39 election — or IFRS 9 FVTPL / irrevocable OCI for unconsolidated holdings)", ar: "القيمة العادلة (خيار IAS 39 — أو وفق IFRS 9 بالأرباح أو بدخل شامل لا رجعة فيه)", red: true },
          },
          {
            when: { en: "The investor is a venture-capital organisation or similar", ar: "المستثمر منظمة رأس مال جريء أو نحوها" },
            then: { en: "FAIR VALUE option mandatory-style for such holdings", ar: "القيمة العادلة لمثل هذه الحيازات" },
          },
        ],
      },
      {
        kind: "list",
        items: [
          { en: "Dividends from the investment → income in the separate FS (even from a pre-acquisition profit — which is capital in the consolidated view)", ar: "التوزيعات من الاستثمار ← إيراد بالقوائم المنفصلة (ولو من أرباح ما قبل الاقتناء — وهي رأسمالية بالمنظور المجمع)" },
          { en: "The separate FS must comply with every IFRS except the consolidation/equity standards — they are a complete set of statements in their own right", ar: "يلتزم القوائم المنفصلة بكل IFRS عدا معايير التجميع والحصة — فهي مجموعة قوائم كاملة بذاتها" },
          { en: "Presentation: describe the statements as 'separate' and disclose which entities are consolidated/equity-accounted in the OTHER set", ar: "العرض: توصف بأنها «منفصلة» مع بيان الكيانات المجمعة أو المحاسبة بالحصة في المجموعة الأخرى" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Contrast: cost → equity method → consolidation is the ladder as ownership/control grows; the separate FS deliberately stay on the FIRST rung — a favourite two-mark contrast question.",
          ar: "قارن: التكلفة ← طريقة الحصة ← التجميع سلم يتدرج مع الملكية والسيطرة؛ والقوائم المنفصلة تبقى عمدًا على الدرجة الأولى — سؤال مقارنة محبوب في درجتين.",
        },
      },
    ],
  },

  {
    code: "IAS 28",
    title: { en: "Investments in Associates and Joint Ventures", ar: "الاستثمارات في الزميلات والمشروعات المشتركة" },
    topic: "groups",
    effective: { en: "Effective 1 Jan 2013 · the equity-method standard", ar: "سارٍ من ١ يناير ٢٠١٣ · معيار طريقة الحصة" },
    blocks: [
      { kind: "h", text: { en: "Objective & the influence gate", ar: "الهدف وبوابة التأثير" } },
      {
        kind: "p",
        text: {
          en: "An associate is an entity over which the investor has SIGNIFICANT INFLUENCE — presumed at ≥ 20% of the voting power (rebuttable) — but not control or joint control. Equity-method it, with one line on the SOFP and one on the P&L.",
          ar: "الزميلة كيان يملك فيه المستثمر تأثيرًا كبيرًا — مفترضًا عند ٢٠٪ أو أكثر من حقوق التصويت (قابل للدحض) — دون سيطرة أو سيطرة مشتركة. وتحاسب بطريقة الحصة: بند واحد بالمركز وبند بالأرباح.",
        },
      },
      { kind: "h", text: { en: "The equity method mechanics", ar: "آلية طريقة الحصة" } },
      {
        kind: "formula",
        lines: [
          { en: "Opening: investment cost vs share of the associate's net FAIR VALUES — excess = goodwill (never amortised, only tested within the carrying amount)", ar: "الافتتاح: تكلفة الاستثمار مقابل نصيب المستثمر من القيم العادلة — والزيادة شهرة (لا تستهلك بل تختبر ضمن القيمة الدفترية)" },
          { en: "Carrying = cost + share of post-acquisition RETAINED profits − impairments − dividends received", ar: "القيمة الدفترية = التكلفة + نصيب الأرباح المحتجزة بعد الاقتناء − الانخفاضات − التوزيعات المتلقاه" },
          { en: "Share of the associate's profit → one P&L line (after tax, after NCI); share of OCI → investor's OCI", ar: "نصيب الربح ← بند بالأرباح (بعد الضريبة وبعد الحصص غير المسيطرة)؛ ونصيب الدخل الشامل ← دخل شامل المستثمر" },
          { en: "Downstream sale to the associate with an unrealised profit → eliminate the INVESTOR'S share; upstream → eliminate the share of the profit owned jointly", ar: "بيع من المستثمر للزميلة بربح غير محقق ← يستبعد نصيب المستثمر؛ ومن الزميلة للمستثمر ← بنسبة الربح المشتركة" },
        ],
      },
      { kind: "h", text: { en: "Exemptions from equity accounting", ar: "إعفاءات من طريقة الحصة" } },
      {
        kind: "tree",
        root: { en: "When the equity method does NOT apply", ar: "متى لا تطبق طريقة الحصة" },
        branches: [
          {
            when: { en: "The parent's SEPARATE financial statements (IAS 27 — cost or fair value)", ar: "قوائم الأم المنفصلة (IAS 27 — تكلفة أو قيمة عادلة)" },
            then: { en: "Apply IAS 27 in the separate set", ar: "طبق IAS 27 في المجموعة المنفصلة", red: true },
          },
          {
            when: { en: "Control lost (or joint control lost) → IFRS 5 for the remnant; investment becomes IFRS 9 at fair value", ar: "فقد السيطرة أو السيطرة المشتركة ← IFRS 5 لما تبقى؛ ويتحول الاستثمار لأداة IFRS 9" },
            then: { en: "Derecognise, re-measure the retained interest at FV, gain/loss in P&L", ar: "ينتهى الاعتراف ويعاد قياس الحصة المبقاة بالقيمة العادلة والفرق بالأرباح", red: true },
          },
          {
            when: { en: "The associate is held for sale (IFRS 5 criteria) → measurement at FVLCS", ar: "الزميلة محتفظ بها للبيع (معايير IFRS 5) ← القيمة العادلة الصافية" },
            then: { en: "IFRS 5 for that holding only — other associates unaffected", ar: "IFRS 5 لذلك الاستثمار وحده دون بقية الزميلات", red: true },
          },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Test the carrying amount for impairment under IAS 36 — the recoverable amount is for the whole NET INVESTMENT (the associate itself is the CGU). Losses are shared until the investment reaches ZERO — then stop, unless guaranteed obligations to the associate exist.",
          ar: "يختبر الرصيد للانخفاض وفق IAS 36 — والمبلغ القابل للاسترداد لكامل صافي الاستثمار (فالزميلة ذاتها هي الوحدة المولدة للنقد). وتقتسم الخسائر حتى يبلغ الاستثمار صفرًا — ثم يتوقف إلا بوجود التزامات تعهد بها المستثمر للزميلة.",
        },
      },
    ],
  },
]
