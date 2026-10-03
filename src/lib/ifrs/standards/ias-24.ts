/** IAS 24 — Related Party Disclosures */

import type { Standard } from "../types"

export const IAS_24: Standard = {
  code: "IAS 24",
  title: { en: "Related Party Disclosures", ar: "الإفصاح عن الأطراف ذات العلاقة" },
  topic: "presentation",
  effective: { en: "Effective 1 Jan 2011 · revised (government-related entities)", ar: "سارٍ من ١ يناير ٢٠١١ · بعد المراجعة (المنشآت المرتبطة بالحكومات)" },
  blocks: [
    { kind: "h", text: { en: "Objective", ar: "الهدف" } },
    {
      kind: "p",
      text: {
        en: "Ensure the statements disclose the EXISTENCE and amount of transactions and balances with RELATED PARTIES — because a related party may enter terms an independent party never would (sweetheart pricing, interest-free loans, guarantees), the related-party dimension can change how a user reads performance and position. Scope: the IAS 24 disclosures are mandatory for every entity applying IFRS — even one with only a parent.",
        ar: "يكفل الإفصاح عن وجود المعاملات والأرصدة مع الأطراف ذات العلاقة ومقاديرها — فالطرف ذو العلاقة قد يقبل شروطًا لا يقبلها مستقل (تسعير ودّي، قروض بلا فوائد، ضمانات)، وهذا البعد قد يغير قراءة المستخدم للأداء والمركز. والإفصاح إلزامي على كل منشأة تطبق IFRS ولو لم يكن لها إلا شركة أم.",
      },
    },
    { kind: "h", text: { en: "Who is a related party?", ar: "من الطرف ذو العلاقة؟" } },
    {
      kind: "tree",
      root: { en: "A person or entity related to the REPORTING ENTITY", ar: "شخص أو منشأة ذو علاقة بالمنشأة المفصحة" },
      branches: [
        {
          when: { en: "PERSONS — key management personnel (KMP) of the entity or its parent, AND their CLOSE FAMILY MEMBERS (children, spouse/domestic partner, dependants; plus trusts/beneficiaries/estates for their benefit)", ar: "الأشخاص — الإدارة العليا (KMP) للمنشأة أو أمها، وأسرهم المباشرة (الأبناء والزوج/الشريك والمعالون، والصناديق والمنتفعون لمنفعتهم)" },
          then: { en: "Related — KMP = those with authority and responsibility for planning, directing and controlling the entity (directors, C-suite; sometimes the group CFO for a subsidiary)", ar: "ذو علاقة — والإدارة العليا من لهم سلطة ومسؤولية التخطيط والتوجيه والرقابة (مجلس الإدارة، التنفيذيون)" },
        },
        {
          when: { en: "ENTITY — control (parent/subsidiaries), JOINT CONTROL, or SIGNIFICANT INFLUENCE over the entity; or the entity controls/jointly controls/significantly influences THEM (associates, JVs)", ar: "المنشآت — السيطرة أو السيطرة المشتركة أو التأثير الجوهري على المنشأة؛ أو العكس (زميلات، مشروعات مشتركة)" },
          then: { en: "Related — the whole group web: parent, fellow subsidiaries, associates, joint ventures and their KMPs", ar: "ذو علاقة — شبكة المجموعة كاملة: الأم والأخوات والزميلات والمشتركة وإداراتها العليا" },
        },
        {
          when: { en: "KMP of the entity or its parent, plus their close family, have CONTROL / JOINT CONTROL / SIGNIFICANT INFLUENCE over another entity", ar: "سيطرة أو سيطرة مشتركة أو تأثير جوهري لإدارة المنشأة أو أمها أو أسرها على منشأة أخرى" },
          then: { en: "That entity is related too — the 'director's other company' rule", ar: "تلك المنشأة ذات علاقة كذلك — قاعدة «شركة المدير الأخرى»" },
        },
        {
          when: { en: "POST-EMPLOYMENT BENEFIT PLANS of the entity (or of an entity related to it) covering the entity's employees", ar: "خطط مزايا نهاية الخدمة للمنشأة أو لمنشأة ذات علاقة تخدم عامليها" },
          then: { en: "Related — the pension plan in the family photo", ar: "ذو علاقة — خطة المعاش ضمن الصورة العائلية" },
        },
      ],
    },
    { kind: "h", text: { en: "Who is NOT related", ar: "من ليس ذو علاقة" } },
    {
      kind: "list",
      items: [
        { en: "Two entities simply because they have a COMMON director or KMP (no other link)", ar: "مجرد مدير مشترك بين منشأتين (بلا رابط آخر)" },
        { en: "Two entities with a common venture — joint control of ONE venture does not make the venturers related to each other", ar: "شريكان في مشروع مشترك واحد لا يصيران ذوي علاقة لبعضهما" },
        { en: "Providers of finance in the ordinary course (banks), trade unions, utilities, government departments and agencies in the ordinary course of business", ar: "ممولون بالطريقة الاعتيادية (بنوك)، ونقابات، ومرافق، ووزارات وهيئات بحكم التعامل الاعتيادي" },
        { en: "A customer/supplier with whom the entity has a significant volume of business — even 100% — mere ECONOMIC DEPENDENCE is not relatedness", ar: "عميل أو مورد ذو تعامل جوهري ولو كان ١٠٠٪ من الأعمال — فالاعتماد الاقتصادي وحده ليس علاقة" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Economic dependence is NOT relatedness — exam favourite: a sole supplier is disclosed as concentration risk (IFRS 7), not as a related party.",
        ar: "الاعتماد الاقتصادي ليس علاقة — والقاعدة الامتحانية: المورد الوحيد يفصح عنه كتركز مخاطر وفق IFRS 7 لا كطرف ذي علاقة.",
      },
    },
    { kind: "h", text: { en: "Key management personnel compensation", ar: "مكافآت الإدارة العليا" } },
    {
      kind: "p",
      text: {
        en: "Disclose KMP compensation IN TOTAL, split by category — a mandatory disclosure with no materiality escape: (1) short-term employee benefits (salary, bonuses, medical), (2) post-employment benefits (pension contributions), (3) other long-term benefits, (4) termination benefits, (5) share-based payment (IFRS 2 equity-settled expense). Individual directors' pay is NOT required by IFRS (local regulation may demand it).",
        ar: "تُفصح مكافآت الإدارة العليا إجمالًا مقسمة بالفئات — إفصاح إلزامي بلا معايير أهمية: (١) مزايا قصيرة الأجل (رواتب، مكافآت، طبية)، (٢) مزايا بعد التوظيف، (٣) طويلة الأجل أخرى، (٤) مزايا إنهاء الخدمة، (٥) الدفع بالأسهم. ولا يطلب IFRS تفصيل رواتب الأفراد (قد تطلبه الأنظمة المحلية).",
      },
    },
    { kind: "h", text: { en: "Related-party transactions — what to disclose", ar: "معاملات الأطراف ذات العلاقة — ماذا يفصح" } },
    {
      kind: "list",
      items: [
        { en: "The NATURE of the related-party relationships — even when there are NO transactions this period", ar: "طبيعة علاقات الأطراف — ولو لم تكن معاملات هذه الفترة" },
        { en: "For TRANSACTIONS: amounts, outstanding balances, terms and conditions (is it interest-free? unsecured?), and any guarantees given or received", ar: "للمعاملات: المقادير والأرصدة القائمة والشروط والأحكام (بلا فوائد؟ بلا ضمان؟) والضمانات الممنوحة أو المقبوضة" },
        { en: "Provisions for doubtful/irrecoverable related-party receivables + commitments (purchase commitments, standby facilities)", ar: "مخصصات الديون المشكوك فيها من الأطراف + الالتزامات (تعهدات شراء، تسهيلات احتياطية)" },
        { en: "The amount of the transaction and balances classified by PARTY TYPE: parent, fellow subsidiaries, associates, JVs, KMP — and NAMES of the specific related parties when practical", ar: "المقادير والأرصدة مصنفة بنوع الطرف: أم، شقيقات، زميلات، مشروعات، إدارة عليا — مع التسمية متى كان ذلك عمليًا" },
        { en: "Bad-debt expense recognised on related-party balances in the period", ar: "مصروف الديون المعدومة المعترف به على أرصدة الأطراف" },
      ],
    },
    { kind: "h", text: { en: "The government-related entities partial exemption", ar: "إعفاء المنشآت المرتبطة بالحكومات" } },
    {
      kind: "tree",
      root: { en: "Entity controlled by a GOVERNMENT (state-owned, sovereign funds, public utilities)", ar: "منشأة تسيطر عليها حكومة (مملوكة للدولة، صناديق سيادية، مرافق عامة)" },
      branches: [
        {
          when: { en: "Other entities controlled by the same government ('fellow state-owned companies')", ar: "منشآت أخرى تسيطر عليها الحكومة ذاتها (الشركات الحكومية الشقيقة)" },
          then: { en: "EXEMPT from full transaction-by-transaction disclosure — disclose only: the NAME of the government, the NATURE of the relationship, and the AMOUNTS + nature of transactions and balances with each individually material type of transaction", ar: "معفاة من الإفصاح التفصيلي — أفصح فقط عن: اسم الحكومة وطبيعة العلاقة والمقادير والطبيعة لكل نوع معاملة جوهري", red: true },
        },
        {
          when: { en: "Transactions with entities genuinely RELATED to it in other ways (a private-sector subsidiary of the state entity's KMP)", ar: "معاملات مع منشآت ذات علاقة بطرق أخرى (تابعة خاصة لإدارة المنشأة الحكومية)" },
          then: { en: "Full IAS 24 disclosure — the exemption covers ONLY fellow state-controlled entities and the government itself", ar: "إفصاح كامل — فالإعفاء يغطي الشركات الحكومية الشقيقة والحكومة فقط", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The exemption exists because full disclosure for, say, a national airline transacting with dozens of state bodies would bury users in noise. But pricing terms still matter: if a state entity gets a non-market loan from the treasury, the relationship and the transaction amounts must still appear.",
        ar: "وُضع الإعفاء لأن الإفصاح الكامل — لشركة طيران وطنية تتعامل مع عشرات الجهات الحكومية — يغرق المستخدم بالضوضاء. لكن الشروط تظل مهمة: فإذا حصلت منشأة حكومية على قرض غير سوقي من الخزانة فلا بد أن تظهر العلاقة والمقادير.",
      },
    },
    { kind: "h", text: { en: "Presentation & the 'even if nothing' rule", ar: "العرض وقاعدة «حتى لو لا شيء»" } },
    {
      kind: "list",
      items: [
        { en: "If there were NO related-party transactions to disclose, state that FACT explicitly", ar: "إذا لم توجد معاملات مع أطراف ذات علاقة فاذكر ذلك صراحة" },
        { en: "Compensation of the reporting entity's own KMP: ALWAYS disclose (even absent other transactions)", ar: "مكافآت إدارة المنشأة ذاتها: إفصاح دائم حتى بلا معاملات أخرى" },
        { en: "Disclose the entity's compensation policy for KMP in general terms", ar: "أفصح عن سياسة مكافآت الإدارة العليا بصفة عامة" },
        { en: "Related-party items already appear in the primary statements; IAS 24 adds the NOTE layer, not new measurements", ar: "بنود الأطراف تظهر في القوائم الأولية أصلًا؛ وIAS 24 يضيف طبقة الإيضاح لا قياسًا جديدًا" },
        { en: "Do NOT disclose or offset against revenue — a related-party sale is revenue; the disclosure tells users it is not at arm's length", ar: "لا تقاص ولا إخفاء — فبيع الطرف ذي العلاقة إيراد؛ والإفصاح يخبر المستخدم أنه ليس بسعر السوق العادل" },
      ],
    },
    {
      kind: "example",
      title: { en: "A disclosure in the wild", ar: "إفصاح من الواقع" },
      lines: [
        { en: "During the year the entity sold goods to its parent, P Co, for 2.3m (2024: 1.9m); the balance outstanding at year-end was 0.4m, repayable in 60 days, unsecured, no interest charged", ar: "خلال السنة باعت المنشأة سلعًا لأمها P بمبلغ ٢٫٣ مليون (٢٠٢٤: ١٫٩)؛ والرصيد ٠٫٤ مليون مستحق خلال ٦٠ يومًا بلا ضمان وبلا فوائد" },
        { en: "P Co guaranteed the entity's 5m bank facility — a commitment to disclose", ar: "ضمنت P تسهيلًا مصرفيًا بمبلغ ٥ مليون — التزام يفصح عنه" },
        { en: "The CFO's brother owns 70% of Supplier S — sales to S of 0.8m are related-party transactions via CLOSE FAMILY of KMP", ar: "شقيق المدير المالي يملك ٧٠٪ من المورد S — فمبيعات ٠٫٨ مليون معاملات أطراف عبر أسرة الإدارة المباشرة" },
        { en: "KMP compensation total 4.1m: short-term 2.6m · post-employment 0.3m · share-based 1.2m", ar: "إجمالي مكافآت الإدارة ٤٫١ مليون: قصيرة الأجل ٢٫٦ · بعد التوظيف ٠٫٣ · دفع بالأسهم ١٫٢" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The KMP compensation equation", ar: "معادلة مكافآت الإدارة العليا" },
      lines: [
        { en: "KMP compensation (total) = short-term benefits + post-employment benefits + other long-term + termination + share-based payment", ar: "إجمالي المكافآت = قصيرة الأجل + بعد التوظيف + طويلة أخرى + إنهاء خدمة + دفع بالأسهم" },
        { en: "Disclosed IN TOTAL by category — never individual by IFRS (local rules may demand names)", ar: "يفصح إجمالًا بالفئات — ولا يطلب IFRس التفصيل الفردي (قد تطلبه الأنظمة المحلية)" },
        { en: "Related-party balance exposure = outstanding balances + commitments + guarantees given or received", ar: "انكشاف أرصدة الأطراف = الأرصدة القائمة + التعهدات + الضمانات الممنوحة أو المقبوضة" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "IAS 24 asks 'WHO is related' and 'WHAT happened between them' — it never changes recognition or measurement; if a scenario changes the NUMBERS, look for the IFRS 9/IFRS 15/IAS 37 hook, and use IAS 24 only for the disclosure layer.",
        ar: "يسأل IAS 24: «من ذو العلاقة؟» و«ماذا جرى بينهما؟» — ولا يغير اعترافًا ولا قياسًا؛ فإذا غيّر السيناريو الأرقام فاطلب الخطاف في IFRS 9/15 أو IAS 37، واستعمل IAS 24 لطبقة الإفصاح وحدها.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Intragroup transactions vanish on consolidation (IFRS 10) — but disclosures still matter for the SEPARATE financial statements, and for transactions with associates/JVs (unconsolidated) and with KMP (never eliminated).",
        ar: "تتلاشى معاملات داخل المجموعة بالتجميع (IFRS 10) — لكن الإفصاح يبقى لازمًا في القوائم المنفصلة، وفي معاملات الزميلات والمشتركة (غير تجمع)، ومع الإدارة العليا (لا تُستبعد أبدًا).",
      },
    },
  ],
}
