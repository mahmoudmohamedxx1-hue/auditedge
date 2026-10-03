/** IFRS 12 — Disclosure of Interests in Other Entities */

import type { Standard } from "../types"

export const IFRS_12: Standard = {
  code: "IFRS 12",
  title: { en: "Disclosure of Interests in Other Entities", ar: "الإفصاح عن الحصص في كيانات أخرى" },
  topic: "groups",
  effective: { en: "Effective 1 Jan 2013 · the companion disclosure standard", ar: "سارٍ من ١ يناير ٢٠١٣ · معيار الإفصاح المرافق" },
  blocks: [
    { kind: "h", text: { en: "Objective & the wide net", ar: "الهدف والشبكة الواسعة" } },
    {
      kind: "p",
      text: {
        en: "IFRS 12 helps users evaluate the NATURE of, and RISKS associated with, interests in other entities — subsidiaries, joint arrangements, associates, structured entities not consolidated — and the EFFECT of those interests on the financial position, performance and cash flows. It is the single disclosure companion to the whole groups family: IFRS 10 (consolidation), IFRS 11 (joint arrangements) and IAS 28 (associates & JVs) all hand their disclosure requirements over to IFRS 12. Its net deliberately catches NON-CONTROLLING interests, management service contracts and SPONSOR relationships with structured entities — the off-balance-sheet world a set of consolidated statements would otherwise hide.",
        ar: "يعين IFRS 12 المستخدمين على تقدير طبيعة الحصص في كيانات أخرى ومخاطرها — تابعات وترتيبات مشتركة وزميلات وكيانات مهيكلة غير مجمعة — وأثر تلك الحصص في المركز المالي والأداء والتدفقات النقدية. وهو شريك الإفصاح الوحيد لعائلة المجموعات كلها: فـIFRS 10 (التجميع) وIFRS 11 (الترتيبات المشتركة) وIAS 28 (الزميلات والمشتركة) تسلّم جميعها متطلبات إفصاحها إلى IFRS 12. وشبكته تلتقط عمدًا الحصص غير المسيطرة وعقود خدمات الإدارة وعلاقات الراعي مع الكيانات المهيكلة — عالم خارج الميزانية كانت القوائم المجمعة لتخفيه لولاه.",
      },
    },
    {
      kind: "p",
      text: {
        en: "IFRS 12 is a DISCLOSURE standard: it prescribes no recognition, no measurement and no presentation — every number it reveals was produced by another standard (IFRS 10's consolidation lines, IFRS 11's share of a joint operation, IAS 28's one-line equity method, IFRS 9's fair values). The examinable skill is the reverse engineering: given an interest, KNOW WHICH BUCKET of disclosures it drives and which risks the bucket exists to expose. The interest itself is defined broadly: any contractual or NON-CONTRACTUAL involvement exposing the entity to variability of returns from the other entity's performance.",
        ar: "IFRS 12 معيار إفصاح: لا يقرر اعترافًا ولا قياسًا ولا عرضًا — فكل رقم يكشفه أنتجه معيار آخر (سطور تجميع IFRS 10، أو حصة عملية مشتركة في IFRS 11، أو سطر طريقة الحصة الواحد في IAS 28، أو قيم IFRS 9 العادلة). والمهارة الامتحانية هي الهندسة العكسية: أمامك حصة، فاعرف أي دلو من الإفصاحات تدفعه وأي مخاطر وُجد الدلو لكشفها. والحصة ذاتها معرفة بسعة: أي تورط تعاقدي أو غير تعاقدي يعرّض الكيان لتفاوت العوائد من أداء الكيان الآخر.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "IFRS 12 answers 'what could bite the group BEYOND the group?' — sponsor support, restricted cash, dispersed-vote control: every IFRS 12 scenario is a risk-visibility story, not a measurement story. Never answer an IFRS 12 question with journal entries.",
        ar: "يجيب IFRS 12: «ما الذي قد يعض المجموعة خارجها؟» — دعم الرعاية، والنقد المقيد، والسيطرة بأصوات مشتتة: فكل سيناريو IFRS 12 قصة ظهور مخاطر لا قصة قياس. ولا تجب عن سؤال IFRS 12 بقيود محاسبية أبدًا.",
      },
    },
    { kind: "h", text: { en: "Scope — all interests, one standard", ar: "النطاق — كل الحصص ومعيار واحد" } },
    {
      kind: "p",
      text: {
        en: "IFRS 12 applies to EVERY entity that has an interest in a subsidiary, a joint arrangement, an associate or an UNCONSOLIDATED structured entity — whether the group is big or small, listed or not. The interest does not need to be an 'investment' on the balance sheet: a loan to an associate, a guarantee given to a joint venture's banks, an undrawn commitment, a management contract over a fund, or the silent sponsorship of a securitisation vehicle all count. A parent with non-controlling interests discloses about the NCI; an investment entity discloses why it qualifies; an intermediate parent discloses its interests even where exempt from consolidation. If the involvement exposes the entity to the other entity's risks, IFRS 12 wants the story told.",
        ar: "يطبق IFRS 12 على كل كيان له حصة في تابعة أو ترتيب مشترك أو زميلة أو كيان مهيكل غير مجمَّع — كبيرة كانت المجموعة أم صغيرة، مدرجة أو لا. والحصة لا تحتاج أن تكون «استثمارًا» في الميزانية: فقرض لزميلة، أو ضمان منح لصالح بنوك مشروع مشترك، أو تعهد غير مسحوب، أو عقد إدارة صندوق، أو رعاية صامتة لوسيلة توريق — كلها تحسب. والأم ذات الحصص غير المسيطرة تفصح عنها؛ والكيان الاستثماري يفصح عن سبب استيفائه الشروط؛ والأم الوسيطة تفصح عن حصصها حتى مع إعفائها من التجميع. فما دام التورط يعرّض الكيان لمخاطر الكيان الآخر، يريد IFRS 12 أن تُروى القصة.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Equity investments — subsidiaries, joint ventures, associates (their carrying and your share of results)", ar: "استثمارات الملكية — التابعات والمشتركة والزميلات (قيمتها الدفترية ونصيبك من النتائج)" },
        { en: "LONG-TERM INTERESTS in an associate or JV — preference shares, shareholder loans, advance payments that form part of the net investment", ar: "مصالح طويلة الأجل في زميلة أو مشروع مشترك — أسهم ممتازة وقروض مساهمين ودفعات مقدمة تدخل في صافي الاستثمار" },
        { en: "Loans & receivables from the interest, GUARANTEES given on its behalf, undrawn loan commitments", ar: "قروض ومديونيات ناشئة عن الحصة، وضمانات ممنوحة لصالحها، وتعهدات تمويل غير مسحوبة" },
        { en: "MANAGEMENT SERVICE CONTRACTS — running another entity's assets under contract (asset managers, servicers)", ar: "عقود خدمات الإدارة — تشغيل أصول كيان آخر بموجب عقد (مديرو أصول ومقدمو خدمات)" },
        { en: "SPONSORSHIP of structured entities — even with NO contractual obligation, where reputation alone could force support", ar: "رعاية الكيانات المهيكلة — حتى بلا التزام تعاقدي، متى كانت السمعة وحدها كافية لإلزام الدعم" },
      ],
    },
    { kind: "h", text: { en: "Key definitions", ar: "التعريفات الأساسية" } },
    {
      kind: "list",
      items: [
        { en: "INTEREST IN ANOTHER ENTITY: contractual or non-contractual involvement exposing the entity to variability of returns from that entity's performance", ar: "الحصة في كيان آخر: تورط تعاقدي أو غير تعاقدي يعرّض الكيان لتفاوت العوائد من أداء ذلك الكيان" },
        { en: "STRUCTURED ENTITY: an entity so designed that voting or similar rights are NOT the dominant factor in deciding who controls it — SPEs, securitisation vehicles, some investment funds", ar: "الكيان المهيكل: كيان مصمم بحيث لا تكون حقوق التصويت أو ما يماثلها العامل الحاسم في تحديد المسيطر عليه — كيانات ذات غرض خاص ووسائل توريق وبعض صناديق الاستثمار" },
        { en: "SPONSOR: an entity that initiated or established another entity and continues to support it — even without obligation", ar: "الراعي: كيان أنشأ أو أسس كيانًا آخر ويظل يدعمه — حتى دون التزام" },
        { en: "SUMMARISED FINANCIAL INFORMATION: the condensed statement of financial position & profit data (current/non-current assets & liabilities, revenue, profit or loss, OCI) of an interest, disclosed per material JV/associate or aggregated", ar: "المعلومات المالية الموجزة: بيانات موجزة للمركز المالي والأرباح (أصول والتزامات متداولة وغير متداولة، وإيراد وربح أو خسارة ودخل شامل آخر) تُفصح لكل مشروع/زميلة جوهري أو مجتمعة" },
        { en: "SIGNIFICANT RESTRICTION: an encumbrance (exchange controls, regulatory or contractual) on the group's ability to transfer cash or other assets INTO or OUT OF an entity", ar: "القيد الجوهري: عبء (قيود صرف أو تنظيمية أو تعاقدية) على قدرة المجموعة على تحويل النقد أو أصول أخرى إلى كيان ما أو خارجه" },
        { en: "MANAGEMENT SERVICE CONTRACT: a contract delegating to the entity the management of another entity's assets", ar: "عقد خدمات الإدارة: عقد يفوّض إلى الكيان إدارة أصول كيان آخر" },
      ],
    },
    { kind: "h", text: { en: "What counts as a structured entity?", ar: "ما يعتبر كيانًا مهيكلًا؟" } },
    {
      kind: "p",
      text: {
        en: "Structured entities exist to isolate risks and financiers: they are designed so that VOTING RIGHTS are not the dominant factor in deciding control — direction comes from contracts, funding covenants or asset-management arrangements instead. That legal remoteness is exactly why IFRS 12 gives them their own shelf: a sponsor may carry no equity, no loans and no guarantees on its balance sheet, yet investors must still see the exposure — because the market will expect the sponsor to stand behind its vehicle's name.",
        ar: "توجد الكيانات المهيكلة لعزل المخاطر والممولين: فهي مصممة بحيث لا تكون حقوق التصويت العامل الحاسم في تحديد السيطرة — بل يأتي التوجيه من العقود وشروط التمويل وترتيبات إدارة الأصول. وهذه العزلة القانونية هي عين سبب إفراد IFRS 12 لها برفف خاص: فقد لا يحمل الراعي على ميزانيته أسهمًا ولا قروضًا ولا ضمانات، ومع ذلك يجب أن يرى المستثمرون الانكشاف — لأن السوق ستفترض أن الراعي يقف خلف اسم وسيلته.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "An entity so designed that voting rights are NOT the dominant factor in deciding control — SPEs, securitisation vehicles, some funds", ar: "كيان مصمم بحيث لا تكون حقوق التصويت العامل الحاسم — كيانات ذات غرض خاص، ووسائل التوريق، وبعض الصناديق" },
        { en: "Unconsolidated: the reporting entity neither controls nor consolidates them — but may sponsor, service or support them (reputation risk!)", ar: "غير مجمعة: لا يسيطر عليها المفصح ولا يجمعها — لكنه قد يرعاها أو يخدمها أو يدعمها (مخاطر سمعة!)" },
        { en: "Disclose interests originated BEFORE the reporting period but still exposed; transactions during the period (transfers to/from the SE)", ar: "أفصح عن الحصص الناشئة سابقًا والباقي انكشافها؛ والمعاملات خلال الفترة (تحويلات من وإلى الكيان المهيكل)" },
      ],
    },
    { kind: "h", text: { en: "The disclosure architecture — the four shelves", ar: "هندسة الإفصاح — الرفوف الأربعة" } },
    {
      kind: "tree",
      root: { en: "What must appear in the notes?", ar: "ماذا يظهر في الإيضاحات؟" },
      branches: [
        {
          when: { en: "SIGNIFICANT JUDGEMENTS & assumptions — control conclusions (de facto control!), joint control / significant-influence assessments, classification of a partner as agent vs principal", ar: "الأحكام والافتراضات الجوهرية — خلاصات السيطرة (الفعلية!)، والسيطرة المشتركة، والتأثير الجوهري، وتصنيف الشريك وكيلا أو أصيلا" },
          then: { en: "Shelf 1: tell the user where judgement decided the reporting entity's BOUNDARIES", ar: "الرف الأول: بيّن أين حسم الحكمُ حدودَ الكيان المفصح", red: true },
        },
        {
          when: { en: "SUBSIDIARIES: name, country, % ownership & voting; NCI's share of profit/OCI and of cumulative P&L; significant restrictions on transferring cash OUT; subsidiaries with material NCI → summarised financial information", ar: "التابعات: الاسم والبلد ونسبة الملكية والتصويت؛ ونصيب الحصة غير المسيطرة من الأرباح والدخل الشامل والمتراكم؛ والقيود الجوهرية على تحويل النقد خارجها؛ والتابعة ذات حصة جوهرية ← معلومات موجزة" },
          then: { en: "Shelf 2: the parent tells the group's story — including the non-controlling slice", ar: "الرف الثاني: تحكي الأم قصة المجموعة بما فيها الشريحة غير المسيطرة", red: true },
        },
        {
          when: { en: "INTERESTS in joint arrangements & associates: the interest, share of P&L, carrying; commitments & contingencies; the summarised financial information table (aggregated for JVs/associates)", ar: "الحصص في الترتيبات المشتركة والزميلات: الحصة ونصيبها والقيمة الدفترية؛ والتعهدات والمحتملات؛ وجدول المعلومات الموجزة (مجمعًا للمشتركة والزميلات)" },
          then: { en: "Shelf 3: the equity-method world made visible", ar: "الرف الثالث: إظهار عالم طريقة الحصة", red: true },
        },
        {
          when: { en: "STRUCTURED ENTITIES (SEs): the nature & purpose; how the entity is involved (sponsor, servicer, liquidity provider); the carrying of assets & liabilities from that involvement; the MAXIMUM loss exposure", ar: "الكيانات المهيكلة: الطبيعة والغرض؛ وطبيعة التورط (راعٍ، مقدم خدمات، مضخم سيولة)؛ وقيم الأصول والالتزامات الناشئة؛ وأقصى انكشاف للخسارة" },
          then: { en: "Shelf 4: the off-balance-sheet risks — sponsorship of unconsolidated SEs, support provided WITHOUT obligation, the policy for it", ar: "الرف الرابع: مخاطر خارج الميزانية — رعاية المهيكلة غير المجمعة والدعم غير الملزم وسياسته", red: true },
        },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Four shelves, one logic: Shelf 1 = WHERE the group boundary was drawn; Shelves 2–3 = what sits INSIDE the boundary but belongs to others (NCI) or is hidden inside one line (equity method); Shelf 4 = what sits OUTSIDE the boundary but could still hurt.",
        ar: "أربعة رفوف ومنطق واحد: الرف الأول = أين رُسمت حدود المجموعة؛ والرفان الثاني والثالث = ما يجلس داخل الحدود لكنه ملك للغير (الحصة غير المسيطرة) أو مخبوء داخل سطر واحد (طريقة الحصة)؛ والرف الرابع = ما يجلس خارج الحدود لكنه قد يؤذي رغم ذلك.",
      },
    },
    { kind: "h", text: { en: "Shelf 1 — Significant judgements", ar: "الرف الأول — الأحكام الجوهرية" } },
    {
      kind: "p",
      text: {
        en: "The entity discloses the significant judgements and assumptions it made in deciding: whether it CONTROLS another entity (including the de facto control call — a 42% stake where the rest is widely dispersed — and whether the entity is an agent or principal in its decision-maker role); whether it has JOINT CONTROL or SIGNIFICANT INFLUENCE; whether another entity is a STRUCTURED ENTITY and whether it is consolidated; and whether it qualifies as an INVESTMENT ENTITY. This shelf is the boundary-story of the reporting entity: users learn not just what is inside the group but WHY — the assumptions that, if they changed, would redraw the whole map.",
        ar: "يفصح الكيان عن الأحكام والافتراضات الجوهرية التي بَنَى عليها قرارَه في: هل يسيطر على كيان آخر (بما فيه خلاصة السيطرة الفعلية — حصة ٤٢٪ والباقي متشتت — وهل الكيان وكيل أو أصيل في دوره صانع القرار)؛ وهل له سيطرة مشتركة أو تأثير جوهري؛ وهل كيان آخر مهيكل وهل هو مجمَّع؛ وهل يستوفي شروط الكيان الاستثماري. فهذا الرف هو قصة حدود الكيان المفصح: فيتعلم المستخدمون ليس ما داخل المجموعة وحسب بل لماذا — الافتراضات التي لو تغيرت لإعادة رسم الخريطة كلها.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "'The Group concluded it controls S Ltd with 42% of the votes — no other shareholder holds more than 5%' (de facto control judgement)", ar: "«خلصت المجموعة إلى سيطرتها على S بنسبة ٤٢٪ من الأصوات — فلا يملك أي مساهم آخر أكثر من ٥٪» (حكم سيطرة فعلية)" },
        { en: "'The Group is an investment entity: it obtains funds from investors and manages them for investment return' (IFRS 10.27's three typical characteristics)", ar: "«المجموعة كيان استثماري: تحصل على أموال من مستثمرين وتديرها لتحقيق عائد استثماري» (خصائص IFRS 10.27 الثلاث النموذجية)" },
        { en: "'The decision-maker holds 60% of the votes but its fee is fixed — it is an AGENT; control rests with the investors' (IFRS 10's agent/principal call)", ar: "«يملك صانع القرار ٦٠٪ من الأصوات لكن أجره ثابت — فهو وكيل؛ والسيطرة للمستثمرين» (خلاصة الوكيل/الأصيل في IFRS 10)" },
        { en: "'Entity X is a structured entity: its charter restricts activities to buying receivables and voting rights do not determine its direction'", ar: "«الكيان X مهيكل: يحصر نظامه الأساسي نشاطه في شراء المديونيات ولا تحدد حقوق التصوجه»" },
      ],
    },
    { kind: "h", text: { en: "Shelf 2 — Subsidiaries", ar: "الرف الثاني — التابعات" } },
    {
      kind: "p",
      text: {
        en: "For subsidiaries, the parent discloses: the name, country of incorporation, % ownership and % voting rights of each MATERIAL subsidiary; the NCI's share of profit or loss and of total comprehensive income (separately disclosed, entity by entity if material); the NCI's share of cumulative profit or loss; DIVIDENDS paid to NCI; the nature of the NCI's interests (e.g. preferred or convertible instruments); and — the examiner's favourite — any SIGNIFICANT RESTRICTION on the group's ability to transfer cash or assets out of a subsidiary (Egyptian exchange controls, statutory locks, dividend caps) together with the carrying amounts of the trapped assets and liabilities. When control exists despite holding LESS THAN HALF the votes, the parent explains why.",
        ar: "عن التابعات تفصح الأم عن: اسم كل تابعة جوهرية وبلد تأسيسها ونسبة الملكية ونسبة حقوق التصويت؛ ونصيب الحصة غير المسيطرة من الربح أو الخسارة ومن إجمالي الدخل الشامل (منفصلًا كيانًا كيانًا إن كان جوهريًا)؛ ونصيبها من الأرباح أو الخسائر المتراكمة؛ والتوزيعات المدفوعة لها؛ وطبيعة أدواتها (كالأدوات الممتازة أو القابلة للتحويل)؛ وأهم ما يمتحنه الممتحنون: أي قيد جوهري على قدرة المجموعة في تحويل النقد أو الأصول خارج تابعة (قيود الصرف المصرية أو القيود النظامية أو سقوف التوزيعات) مع القيم الدفترية للأصول والالتزامات المحتجزة. ومتى وُجدت السيطرة رغم امتلاك أقل من نصف الأصوات، تشرح الأم السبب.",
      },
    },
    {
      kind: "journal",
      title: { en: "The interests summary — what each interest contributes to the SoFP (the disclosure's source)", ar: "ملخص الحصص — ما تضيفه كل حصة إلى المركز المالي (مصدر الإفصاح)" },
      rows: [
        { dr: { en: "Consolidated SUBSIDIARY: 100% of the sub's assets and liabilities are on the group's SoFP — even for the NCI's slice", ar: "تابعة مجمعة: ١٠٠٪ من أصول التابعة والتزاماتها على مركز المجموعة — حتى شريحة الحصة غير المسيطرة" }, cr: { en: "Presented against: NCI's equity 20% of net assets — the shelf-2 numbers", ar: "تعرض مقابلها: حقوق الحصة غير المسيطرة ٢٠٪ من صافي الأصول — أرقام الرف الثاني" }, red: true },
        { dr: { en: "JOINT OPERATION: your share of EACH joint asset, liability, revenue and expense — already on the face, so the notes tell the nature and extent", ar: "عملية مشتركة: حصتك من كل أصل والتزام وإيراد ومصروف مشترك — على الوجه أصلًا، فيروي الإيضاح الطبيعة والامتداد" }, cr: { en: "No single carrying to disclose — disclose commitments & contingencies instead", ar: "لا قيمة دفترية واحدة تفصح عنها — بل أفصح عن التعهدات والمحتملات" }, red: true },
        { dr: { en: "JV / ASSOCIATE: ONE line — investment carrying under IAS 28 (cost + share of profits − dividends − impairments)", ar: "مشروع مشترك / زميلة: سطر واحد — دفترية الاستثمار وفق IAS 28 (تكلفة + نصيب أرباح − توزيعات − انخفاضات)" }, cr: { en: "Share of P&L as one line — plus the summarised financial information table", ar: "نصيب الأرباح سطرًا واحدًا — مع جدول المعلومات المالية الموجزة" }, red: true },
        { dr: { en: "UNCONSOLIDATED STRUCTURED ENTITY: fair value under IFRS 9 (or the loans/guarantees given)", ar: "كيان مهيكل غير مجمَّع: القيمة العادلة وفق IFRS 9 (أو القروض/الضمانات الممنوحة)" }, cr: { en: "Plus the off-balance-sheet exposure: maximum loss, support lines, sponsor risk", ar: "مضافًا إليه الانكشاف خارج الميزانية: أقصى خسارة وخطوط دعم ومخاطر الراعي" }, red: true },
      ],
    },
    {
      kind: "p",
      text: {
        en: "A parent with a MATERIAL NCI in a subsidiary goes one step further: it discloses SUMMARISED FINANCIAL INFORMATION for that subsidiary — condensed current and non-current assets, current and non-current liabilities, revenue, profit or loss and other comprehensive income. The logic: the NCI's slice of the group's net assets is visible, but the user cannot see the subsidiary's own performance inside the consolidation — the summarised table restores it. The same table logic returns for joint ventures and associates, where it is even more critical because the whole investment is one net line.",
        ar: "تذهب الأم ذات حصة غير مسيطرة جوهرية في تابعة خطوة أبعد: تفصح عن معلومات مالية موجزة لتلك التابعة — أصول والتزامات متداولة وغير متداولة وإيراد وربح أو خسارة ودخل شامل آخر بصيغة مكثفة. والمنطق: شريحة الحصة غير المسيطرة من صافي أصول المجموعة مرئية، لكن المستخدم لا يرى أداء التابعة ذاته داخل التجميع — فجدول الموجز يعيده. والمنطق ذاته يعود للمشتركة والزميلات حيث هو أشد إلحاحًا لأن الاستثمار كله سطر صافٍ واحد.",
      },
    },
    { kind: "h", text: { en: "Shelf 3 — Joint ventures & associates", ar: "الرف الثالث — المشتركة والزميلات" } },
    {
      kind: "p",
      text: {
        en: "For equity-accounted interests the entity discloses: the nature, extent and financial EFFECTS of the interest — the carrying amount of each material JV/associate, its share of profit or loss, and its share of other comprehensive income; the date of the financial statements used and the period they cover when different from the investor's (the reporting-date gap); the unrecognised share of losses (when the carrying has been reduced to zero and losses continue); CONTINGENT LIABILITIES and capital COMMITMENTS relating to the interests; and — the signature table — the AGGREGATED summarised financial information across all material JVs and associates: current & non-current assets, current & non-current liabilities, revenue, profit. Joint operations get the lighter ask: the nature of the interest and its share of commitments, since their share of assets and liabilities is already on the face of the statements.",
        ar: "عن الحصص بطريقة الحصة يفصح الكيان عن: طبيعة الحصة وامتدادها وآثارها المالية — القيمة الدفترية لكل مشروع/زميلة جوهري، ونصيبها من الربح أو الخسارة، ونصيبها من الدخل الشامل الآخر؛ وتاريخ القوائم المالية المستخدمة والفترة التي تغطيها عند اختلافها (فجوة تاريخ التقرير)؛ والنصيب غير المعترف به من الخسائر (حين تنخفض الدفترية إلى الصفر وتستمر الخسائر)؛ والالتزامات المحتملة وتعهدات رأس المال المتعلقة بالحصص؛ والجدول المميز: المعلومات المالية الموجزة المجمعَة عبر كل المشتركة والزميلات الجوهرية: أصول والتزامات متداولة وغير متداولة وإيراد وربح. أما العمليات المشتركة فمطلبها أخف: طبيعة الحصة ونصيبها من التعهدات، إذ حصتها من الأصول والالتزامات على وجه القوائم أصلًا.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Carrying amount, share of profit/OCI — per material interest, name it", ar: "القيمة الدفترية والنصيب من الأرباح/الدخل الشامل — لكل حصة جوهرية بالاسم" },
        { en: "The aggregated summarised table: assets / liabilities / revenue / profit across ALL material JVs & associates", ar: "الجدول المجمع الموجز: أصول / التزامات / إيراد / ربح عبر كل المشتركة والزميلات الجوهرية" },
        { en: "Contingent liabilities & capital commitments on your share of joint ventures", ar: "الالتزامات المحتملة وتعهدات رأس المال على حصتك في المشتركة" },
        { en: "Unrecognised share of losses when the investment's carrying is zero", ar: "النصيب غير المعترف به من الخسائر حين تكون دفترية الاستثمار صفرًا" },
        { en: "The reporting-date gap: whose statements you equity-accounted, and when they were issued", ar: "فجوة تاريخ التقرير: قوائم من طبقت عليها الطريقة ومتى صدرت" },
      ],
    },
    { kind: "h", text: { en: "Shelf 4 — Structured entities", ar: "الرف الرابع — الكيانات المهيكلة" } },
    {
      kind: "p",
      text: {
        en: "The structured-entity shelf carries the off-balance-sheet story. For UNCONSOLIDATED SEs, disclose: the nature and purpose of the entity and how it is financed; the nature of YOUR involvement (sponsor, asset manager, servicer, liquidity provider) and how it arose; the carrying amounts of the assets (and liabilities) on YOUR statement of financial position that came from that involvement; the MAXIMUM EXPOSURE TO LOSS — carrying amounts plus guarantees, commitments and other support, and how it is measured; interests originated during the period and transactions with the SE during the period; and any support provided or intended WITHOUT a contractual obligation, with the policy for providing it. For CONSOLIDATED SEs the ask is smaller: the judgement that led to consolidation sits on shelf 1, and the group's usual subsidiary disclosures apply.",
        ar: "يحمل رف الكيانات المهيكلة قصة خارج الميزانية. فعن المهيكلة غير المجمعة أفصح عن: طبيعة الكيان وغرضه وكيفية تمويله؛ وطبيعة تورطك (راعٍ، مدير أصول، مقدم خدمات، مضخم سيولة) وكيف نشأ؛ والقيم الدفترية للأصول (والالتزامات) في قائمتك الناشئة عن ذلك التورط؛ وأقصى انكشاف للخسارة — القيم الدفترية مضافًا إليها الضمانات والتعهدات وسائر الدعم وكيفية قياسه؛ والحصص الناشئة خلال الفترة والمعاملات مع الكيان المهيكل خلالها؛ وأي دعم مقدم أو مقصود بلا التزام تعاقدي مع سياسة تقديمه. أما المهيكلة المجمَّعة فمطلبها أصغر: حكم التجميع يجلس على الرف الأول، وتسري إفصاحات التابعات المعتادة.",
      },
    },
    {
      kind: "tree",
      title: { en: "Routing a structured entity", ar: "توجيه كيان مهيكل" },
      root: { en: "Is the structured entity consolidated?", ar: "هل الكيان المهيكل مجمَّع؟" },
      branches: [
        {
          when: { en: "Voting rights are NOT the dominant factor, but the entity controls it another way (power over its activities via contract or funding)", ar: "حقوق التصويت ليست العامل الحاسم لكن الكيان يسيطر عليه بطريق آخر (سلطة على أنشطته بعقد أو تمويل)" },
          then: { en: "CONSOLIDATE (IFRS 10) — disclose the judgement on shelf 1, then the ordinary subsidiary disclosures", ar: "جمّعه (IFRS 10) — أفصح عن الحكم في الرف الأول ثم إفصاحات التابعات المعتادة", red: true },
        },
        {
          when: { en: "Not controlled — the entity only sponsors, services or provides liquidity (its exposure is contractual or reputation-driven)", ar: "غير مسيطر عليه — الكيان راعٍ أو مقدم خدمات أو مضخم سيولة فقط (انكشافه تعاقدي أو سمعي)" },
          then: { en: "Unconsolidated SE bucket: nature & purpose, carrying of involvement, MAXIMUM loss exposure, support given or intended", ar: "دلو المهيكلة غير المجمعة: الطبيعة والغرض، وقيمة التورط، وأقصى انكشاف للخسارة، والدعم المقدم أو المقصود", red: true },
        },
        {
          when: { en: "Transactions WITH the SE during the period (asset transfers in/out, funding lines drawn)", ar: "معاملات مع الكيان المهيكل خلال الفترة (تحويلات أصول منه وإليه، خطوط تمويل مسحوبة)" },
          then: { en: "Disclose the transfers and the terms — the period's traffic with the vehicle", ar: "أفصح عن التحويلات وشروطها — حركة الفترة مع الوسيلة", red: true },
        },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Support provided WITHOUT a contractual obligation is a disclosure in its own right: the entity's silent involvement (reputation) is disclosed even with no legal commitment — examiners phrase it as 'constructive support'.",
        ar: "الإفصاح عن الدعم «غير الملزم» مطلب مستقل: يُفصح عن التورط الصامت (السمعة) حتى دون التزام قانوني — ويصوغه الممتحنون «دعمًا ضمنيًا».",
      },
    },
    { kind: "h", text: { en: "Aggregation, materiality & impracticability", ar: "التجميع والأهمية والاستحالة" } },
    {
      kind: "p",
      text: {
        en: "Disclosures may be AGGREGATED where the interests are similar in nature — but never at the cost of losing material information: a subsidiary under exchange-control restrictions must stand apart from an unrestricted one; a JV heading into liquidation cannot be averaged into a healthy portfolio. Where a required disclosure is impossible (the summarised JV data unobtainable), say so and explain why. Unlike IFRS 8's segments, IFRS 12 is entity-focused, not CODM-focused: the management approach never waters these buckets down. And when there is genuinely nothing to disclose, disclose that — a positive statement that there are no interests, no restrictions or no support intentions is itself information.",
        ar: "يجوز التجميع عند تماثل طبيعة الحصص — لكن ليس بثمن فقد معلومة جوهرية: فتابعة تحت قيود صرف تتميز عن السالكة؛ ومشروع مشترك متجه للتصفية لا يُمَوَّع داخل محفظة سالكة. وعند استحالة إفصاح مطلوب (تعذر معلومات المشتركة الموجزة) فقِل ذلك واشرح السبب. وعلى خلاف قطاعات IFRS 8، إفصاحات IFRS 12 كيانية لا تخص صانع القرار: فمنهج الإدارة لا يخفف هذه الدلاء أبدًا. وحين لا يوجد فعلًا ما يفصح عنه، أفصح عن ذلك — فالإيجاب بأن لا حصص ولا قيود ولا نية دعم معلومة بذاته.",
      },
    },
    {
      kind: "tree",
      title: { en: "Aggregate or separate?", ar: "أجمّع أم أفصل؟" },
      root: { en: "Several interests of the same type — one note or many?", ar: "عدة حصص من النوع ذاته — إيضاح واحد أم عدة إيضاحات؟" },
      branches: [
        {
          when: { en: "Similar nature, no distinguishing risk (five wholly owned European subsidiaries)", ar: "طبيعة متماثلة ولا مخاطرة مميزة (خمس تابعات أوروبية مملوكة بالكامل)" },
          then: { en: "Aggregate — one note carries them all", ar: "أجمّع — إيضاح واحد يحملها جميعًا", red: true },
        },
        {
          when: { en: "A distinguishing feature: restricted cash, imminent liquidation, a different measurement basis", ar: "سمة مميزة: نقد مقيد، أو تصفية وشيكة، أو أساس قياس مختلف" },
          then: { en: "Disclose separately — the restriction IS the risk the user needs", ar: "أفصح منفصلًا — فالقيد هو بذاته المخاطرة التي يحتاجها المستخدم", red: true },
        },
        {
          when: { en: "A required disclosure is impossible to provide", ar: "إفصاح مطلوب يستحيل تقديمه" },
          then: { en: "State that fact and explain why — never silently omit", ar: "اذكر الواقعة واشرح السبب — ولا تحذف صامتًا أبدًا", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Drafting the note — the preparation sequence", ar: "صياغة الإيضاح — تسلسل الإعداد" } },
    {
      kind: "steps",
      items: [
        { en: "INVENTORY the interests: every subsidiary, joint arrangement, associate and structured entity — plus the loans, guarantees and management contracts that ride along", ar: "اجرد الحصص: كل تابعة وترتيب مشترك وزميلة وكيان مهيكل — وما يرافقها من قروض وضمانات وعقود إدارة" },
        { en: "BUCKET each interest by its accounting: consolidated / joint-operation share / equity-method line / fair value or involvement in an unconsolidated SE", ar: "ضع كل حصة في دلائها بحسب محاسبتها: مجمعة / حصة عملية مشتركة / سطر طريقة الحصة / عادلة أو تورط في مهيكل غير مجمع" },
        { en: "APPLY the materiality & aggregation gate: similar natures aggregate, distinguishing risks stand apart", ar: "طبّق بوابة الأهمية والتجميع: المتشابه طبيعةً يُجمع، والمتميز مخاطرةً يقف وحده" },
        { en: "DRAFT shelf by shelf: judgements → subsidiaries → JVs & associates → structured entities", ar: "اصغ رفًفا رفًفا: الأحكام ← التابعات ← المشتركة والزميلات ← الكيانات المهيكلة" },
        { en: "CROSS-CHECK each disclosed number to its measurement source (IFRS 10 / 11 / 28 / 9) — a disclosure that does not tie to a ledger is a red flag", ar: "دقّق كل رقم مفصح عنه مع مصدر قياسه (IFRS 10 / 11 / 28 / 9) — فالإفصاح الذي لا يرتبط بدفتر علامة خطر" },
      ],
    },
    { kind: "h", text: { en: "The disclosure arithmetic", ar: "حسابيات الإفصاح" } },
    {
      kind: "formula",
      title: { en: "Where the shelf numbers come from", ar: "من أين تأتي أرقام الرفوف" },
      lines: [
        { en: "NCI's profit share = subsidiary profit × NCI % — disclosed separately from the dividends actually paid to them", ar: "نصيب الحصة غير المسيطرة من الأرباح = ربح التابعة × نسبتها — ويفصح منفصلًا عن التوزيعات المدفوعة لها فعلًا" },
        { en: "Closing NCI = opening NCI + NCI's share of total comprehensive income − dividends paid to NCI", ar: "الحصة الختامية = الافتتاحية + نصيبها من إجمالي الدخل الشامل − التوزيعات المدفوعة لها" },
        { en: "Aggregate JV/associate table = Σ (assets, liabilities, revenue, profit) across ALL material equity-accounted interests", ar: "الجدول المجمع للمشتركة/الزميلات = مجموع (الأصول والالتزامات والإيراد والربح) عبر كل الحصص الجوهرية بطريقة الحصة" },
        { en: "Maximum SE exposure = carrying of involvement + guarantees given + undrawn commitments + intended support", ar: "أقصى انكشاف مهكلي = قيمة التورط + الضمانات الممنوحة + التعهدات غير المسحوبة + الدعم المقصود" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Extracting the shelf-2 numbers — subsidiary profit 100, NCI 20%, dividends 40", ar: "استخراج أرقام الرف الثاني — ربح تابعة ١٠٠، حصة غير مسيطرة ٢٠٪، توزيعات ٤٠" },
      rows: [
        { dr: { en: "Profit of the subsidiary 100 (fully consolidated lines: revenue, expenses…)", ar: "ربح التابعة ١٠٠ (سطور مجمعة بالكامل: إيرادات ومصروفات…)" }, cr: { en: "Of which NCI's share = 100 × 20% = 20 — the disclosed NCI profit share", ar: "منه نصيب الحصة غير المسيطرة = ١٠٠ × ٢٠٪ = ٢٠ — نصيبها المُفصح من الأرباح" }, red: true },
        { dr: { en: "Dividends paid: total 40", ar: "توزيعات مدفوعة: إجمالي ٤٠" }, cr: { en: "To NCI = 40 × 20% = 8 — the disclosed dividends paid to NCI", ar: "للحصة غير المسيطرة = ٤٠ × ٢٠٪ = ٨ — التوزيعات المفصح عنها المدفوعة لها" }, red: true },
        { dr: { en: "Closing NCI = opening 200 + share of profit 20 − dividends 8 = 212", ar: "الحصة الختامية = افتتاحية ٢٠٠ + نصيب أرباح ٢٠ − توزيعات ٨ = ٢١٢" }, cr: { en: "If 45 of the sub's cash sits under exchange restrictions — disclose the restriction and the trapped 45", ar: "إن كان ٤٥ من نقد التابعة محتجزًا بقيود صرف — أفصح عن القيد والمحتجز ٤٥" }, red: true },
      ],
    },
    {
      kind: "example",
      title: { en: "Maximum exposure to loss — the shelf-4 arithmetic", ar: "أقصى انكشاف للخسارة — حساب الرف الرابع" },
      lines: [
        { en: "The Group sponsors a securitisation vehicle it does not control: investment held at FVTPL 5 · performance guarantee given 3 · undrawn liquidity line 10 · management intends (but is not obliged) to cover a further 2 of losses", ar: "ترعى المجموعة وسيلة توريق لا تسيطر عليها: استثمار بالعادلة عبر الأرباح ٥ · ضمان أداء ممنوح ٣ · خط سيولة غير مسحوب ١٠ · وتنوي الإدارة (دون التزام) تغطية خسائر إضافية ٢" },
        { en: "Maximum exposure to loss = 5 + 3 + 10 + 2 = 20 — each layer disclosed separately with how it is measured", ar: "أقصى انكشاف للخسارة = ٥ + ٣ + ١٠ + ٢ = ٢٠ — وكل طبقة تفصح منفصلة مع كيفية قياسها" },
        { en: "The balance sheet itself shows only the 5 — the other 15 lives exclusively in the note, which is precisely why shelf 4 exists", ar: "الميزانية ذاتها لا تُظهر سوى الـ٥ — أما الـ١٥ الأخرى فتعيش في الإيضاح حصريًا، وهو عين سبب وجود الرف الرابع" },
        { en: "During the year the Group transferred receivables of 60 to the vehicle at fair value — disclose the transfers and the terms as period traffic", ar: "خلال السنة حوّلت المجموعة مديونيات بقيمة ٦٠ إلى الوسيلة بالقيمة العادلة — أفصح عن التحويلات وشروطها كحركة الفترة" },
      ],
    },
    {
      kind: "example",
      title: { en: "A mini disclosure set (one note, all four shelves)", ar: "مجموعة إفصاح مصغرة (إيضاح واحد بالرفوف الأربعة)" },
      lines: [
        { en: "Judgement: 'the Group concluded it controls S Ltd with 42% of votes because remaining holders are widely dispersed (no shareholder holds > 5%)'", ar: "حكم: «خلصت المجموعة إلى سيطرتها على S بنسبة ٤٢٪ من الأصوات لتشتت بقية الحائزين (لا يملك أحد أكثر من ٥٪)»" },
        { en: "Subsidiary: 'NCI's share of profit 4.2m · dividends paid to NCI 1.8m · cash 12m sits in S under Egyptian exchange restrictions'", ar: "تابعة: «نصيب الحصة غير المسيطرة من الأرباح ٤٫٢ مليون · توزيعاتها ١٫٨ · ونقد ١٢ مليون محتجز لدى S بقيود صرف مصرية»" },
        { en: "JV: 'carrying 9.8m · share of profit 1.1m · aggregated JV table: assets 60m / liabilities 40m / revenue 30m'", ar: "مشتركة: «القيمة الدفترية ٩٫٨ مليون · النصيب من الربح ١٫١ · وجدول مجمّع: أصول ٦٠ / التزامات ٤٠ / إيراد ٣٠»" },
        { en: "SE: 'the Group sponsors an unconsolidated securitisation vehicle; maximum exposure 5m + a discretionary liquidity line of 10m (provided without contractual obligation)'", ar: "كيان مهيكل: «ترعى المجموعة وسيلة توريق غير مجمعة؛ أقصى انكشاف ٥ مليون وخط سيولة تقديري ١٠ مليون بلا التزام تعاقدي»" },
      ],
    },
    { kind: "h", text: { en: "When there is nothing to disclose", ar: "حين لا يوجد ما يفصح عنه" } },
    {
      kind: "list",
      items: [
        { en: "No interests in other entities at all → state that fact", ar: "لا حصص في كيانات أخرى ← اذكر الواقعة" },
        { en: "No undue restrictions on group transfers → say so; users read the absence positively", ar: "لا قيود مجحفة على تحويلات المجموعة ← قلها؛ فالمستخدمون يقرؤون غيابها إيجابيًا" },
        { en: "No NCI in any subsidiary → still disclose the group structure basics", ar: "لا حصة غير مسيطرة ← أفصح عن أساسات هيكل المجموعة على أي حال" },
      ],
    },
    { kind: "h", text: { en: "Transition & effective date", ar: "الانتقال والتاريخ النافذ" } },
    {
      kind: "p",
      text: {
        en: "IFRS 12 was issued with the 2011 groups package (IFRS 10, IFRS 11, IFRS 12, the revised IAS 27 & IAS 28) and took effect together with them on 1 January 2013, applied RETROSPECTIVELY in accordance with IAS 8, with early adoption permitted only alongside the whole package. The 'Investment Entities' amendments (October 2012, effective 1 January 2014) added the investment-entity disclosure paragraphs; 'Investment Entities: Applying the Consolidation Exception' (December 2014, effective 1 January 2016) refined them. Nothing in the standard ever changes measurement — transition here only ever re-writes notes, not ledgers.",
        ar: "صدر IFRS 12 مع حزمة المجموعات ٢٠١١ (IFRS 10 وIFRS 11 وIFRS 12 وIAS 27 وIAS 28 المعدلان) وسرى معها من ١ يناير ٢٠١٣، مطبقًا بأثر رجعي وفق IAS 8، مع إجازة التبني المبكر فقط مع الحزمة كاملة. وأضافت تعديلات «كيانات الاستثمار» (أكتوبر ٢٠١٢، السارية من ١ يناير ٢٠١٤) فقرات إفصاح الكيانات الاستثمارية؛ ثم نقّحها تعديل «كيانات الاستثمار: تطبيق استثناء التجميع» (ديسمبر ٢٠١٤، الساري من ١ يناير ٢٠١٦). ولا يغير المعيار قياسًا أبدًا — فالانتقال هنا يعيد كتابة الإيضاحات لا الدفاتر.",
      },
    },
    { kind: "h", text: { en: "Interactions", ar: "التفاعلات" } },
    {
      kind: "p",
      text: {
        en: "IFRS 12 is the disclosure mirror of the whole groups map: it borrows the accounting answers from IFRS 10 (subsidiaries, investment entities), IFRS 11 (joint arrangements) and IAS 28 (associates & JVs); it measures nothing itself — fair values of unconsolidated interests come from IFRS 9. It overlaps IAS 24 (related-party disclosures — management fees and balances with associates) and IFRS 7 (credit and liquidity risk on the instruments held), and the restricted-cash disclosure walks hand in hand with IAS 7's cash-flow story. An exam answer that opens an IFRS 12 question with the right shelf and closes it with the right standard citation earns both halves of the mark.",
        ar: "IFRS 12 مرآة الإفصاح لخريطة المجموعات كلها: يستعير الأجوبة المحاسبية من IFRS 10 (التابعات وكيانات الاستثمار) وIFRS 11 (الترتيبات المشتركة) وIAS 28 (الزميلات والمشتركة)؛ ولا يقيس شيئًا بنفسه — فقيم العادلة للحصص غير المجمعة من IFRS 9. ويتقاطع مع IAS 24 (إفصاحات الأطراف ذات العلاقة — أجور الإدارة والأرصدة مع الزميلات) وIFRS 7 (مخاطر الائتمان والسيولة على الأدوات المحمولة)، ويمشي إفصاح النقد المقيد يدًا بيد مع قصة التدفقات في IAS 7. فالإجابة الامتحانية التي تفتح سؤال IFRS 12 بالرف الصحيح وتختمه بالإحالة الصحيحة تكسب نصفي الدرجة معًا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Answer pattern for any IFRS 12 question: (1) name the shelf, (2) name the measurement standard behind the numbers, (3) name the RISK the shelf exists to expose. Three sentences, three marks — no journal entries anywhere.",
        ar: "نمط الإجابة لأي سؤال IFRS 12: (١) سمّ الرف، (٢) سمّ معيار القياس الذي خلف الأرقام، (٣) سمّ المخاطرة التي وُجد الرف لكشفها. ثلاث جمل بثلاث درجات — ولا قيود محاسبية في أي مكان.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The condensed JV disclosure (aggregated assets/liabilities/revenue/profit of all JVs and associates) is the single most-forgotten IFRS 12 table — write 'AGGREGATED' in your answer plan before writing anything else.",
        ar: "الإفصاح الموجز للمشتركة (أصول والتزامات وإيراد وربح مجمعة لكل المشتركة والزميلات) أشهر جدول ينسى في IFRS 12 — اكتب «مجمّع» في خطة إجابتك قبل أي شيء آخر.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Restricted cash is the classic shelf-2 mark: 'the sub holds cash 45 it cannot remit' → disclose the restriction, the trapped amount, AND its effect on the group's liquidity — three separate pieces of information, three marks.",
        ar: "النقد المقيد هو درجة الرف الثاني الكلاسيكية: «تحتجز التابعة نقدًا ٤٥ لا تستطيع تحويله» ← أفصح عن القيد وعن المحتجز وعن أثره في سيولة المجموعة — ثلاث معلومات منفصلة بثلاث درجات.",
      },
    },
    {
      kind: "note",
      text: {
        en: "IFRS 12 discloses the NCI story even though NCI is not the reader's own equity: the point is that the group's cash, profits and assets are partly OTHER PEOPLE'S — and restrictions, dividends and performance differences make that matter.",
        ar: "يفصح IFRS 12 عن قصة الحصة غير المسيطرة رغم أنها ليست حقوق ملكية القارئ ذاته: فالجوهر أن نقد المجموعة وأرباحها وأصولها ملك للغير جزئيًا — والقيود والتوزيعات وفروق الأداء تجعل ذلك مهمًا.",
      },
    },
  ],
}
