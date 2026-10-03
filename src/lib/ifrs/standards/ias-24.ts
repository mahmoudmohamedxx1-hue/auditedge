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
    { kind: "h", text: { en: "Scope & when it bites", ar: "النطاق ومتى يعض" } },
    {
      kind: "p",
      text: {
        en: "IAS 24 applies to EVERY entity applying IFRS — a one-person company with no related parties must still SAY so. It bites at each reporting layer: the separate or individual statements of a parent or subsidiary, the consolidated statements (where intragroup parties have vanished), and the interim report (IAS 34 wants the changes since the last annual report). The disclosures are unconditional: materiality does not switch the duty off, it only shapes how the note is drafted.",
        ar: "يطبق IAS 24 على كل منشأة تطبق IFRS — فحتى شركة الفرد الواحد بلا أطراف ذات علاقة يجب أن تقول ذلك. ويعض عند كل طبقة تقرير: القوائم المنفصلة أو الفردية للأم أو التابعة، والقوائم المجمعة (حيث تتلاشى الأطراف داخل المجموعة)، والتقرير المرحلي (يطلب IAS 34 التغيرات منذ التقرير السنوي الأخير). والإفصاح غير مشروط: فالأهمية لا تطفئ الواجب بل تشكل صياغة الإيضاح فقط.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Applies to individual & separate financial statements AND to consolidated statements (external related parties only — the intragroup web is eliminated by IFRS 10)", ar: "يطبق على القوائم الفردية والمنفصلة وعلى المجمع (الأطراف الخارجية فقط — فشبكة الداخل تُستبعد بتجميع IFRS 10)" },
        { en: "Applies at each interim date — disclose related-party relationships & transactions arising since the last annual report (IAS 34)", ar: "يطبق في كل تاريخ مرحلي — أفصح عن العلاقات والمعاملات الناشئة منذ التقرير السنوي الأخير (IAS 34)" },
        { en: "An entity claiming NO related-party relationships must state that fact explicitly — silence is never compliance", ar: "المنشأة التي تدعي انعدام الأطراف ذات العلاقة يجب أن تنص على ذلك صراحة — فالصمت امتثال أبدًا" },
        { en: "Personal financial statements of individuals or family ventures are outside the standard's reach", ar: "القوائم المالية الشخصية للأفراد أو مشروعات العائلة خارج نطاق المعيار" },
      ],
    },
    { kind: "h", text: { en: "Key definitions", ar: "التعريفات المفتاحية" } },
    {
      kind: "list",
      items: [
        { en: "RELATED PARTY — a person or entity connected to the reporting entity through control, joint control or significant influence, or through key management personnel and their close family", ar: "الطرف ذو العلاقة — شخص أو منشأة مرتبط بالمنشأة المفصحة عبر السيطرة أو السيطرة المشتركة أو التأثير الجوهري، أو عبر الإدارة العليا وأسرهم المباشرة" },
        { en: "KEY MANAGEMENT PERSONNEL (KMP) — those with authority and responsibility for planning, directing AND controlling the entity's activities", ar: "الإدارة العليا — من لهم سلطة ومسؤولية التخطيط والتوجيه والرقابة على أنشطة المنشأة" },
        { en: "CLOSE MEMBERS OF FAMILY — family members who could be expected to influence, or be influenced by, that person in their dealings with the entity", ar: "أفراد الأسرة المباشرون — من يُتوقع منهم التأثير على الشخص أو التأثر به في تعاملاته مع المنشأة" },
        { en: "RELATED-PARTY TRANSACTION — a transfer of resources, services or obligations between the entity and a related party, REGARDLESS of whether a price is charged", ar: "معاملة طرف ذي علاقة — انتقال موارد أو خدمات أو التزامات بين المنشأة وطرف ذي علاقة، سواء حُدد سعر أم لا" },
        { en: "GOVERNMENT-RELATED ENTITY — an entity controlled, jointly controlled or significantly influenced by a government", ar: "منشأة مرتبطة بحكومة — منشأة تسيطر عليها حكومة أو تسيطر عليها سيطرة مشتركة أو تؤثر فيها تأثيرًا جوهريًا" },
        { en: "CONTROL (IFRS 10) · JOINT CONTROL (IFRS 11) · SIGNIFICANT INFLUENCE (IAS 28) — the three links pulled in from their home standards", ar: "السيطرة (IFRS 10) · السيطرة المشتركة (IFRS 11) · التأثير الجوهري (IAS 28) — الروابط الثلاثة المستدعاة من معاييرها" },
      ],
    },
    { kind: "h", text: { en: "Who is a related party?", ar: "من الطرف ذو العلاقة؟" } },
    {
      kind: "p",
      text: {
        en: "The map has two dimensions: PERSONS and ENTITIES. Persons: the entity's own KMP, the parent's KMP, and both groups' close family — plus any entity those people control. Entities: everything the reporting entity controls, jointly controls or significantly influences (its subsidiaries, JVs, associates) and everything that controls it (the parent) — which drags in the fellow subsidiaries, because the parent controls them too. The pension plans of the family sit inside the photo as well.",
        ar: "للخريطة بعُدان: الأشخاص والمنشآت. الأشخاص: إدارة المنشأة وإدارة أمها وأسر الفريقين — وكل منشأة يسيطر عليها هؤلاء. المنشآت: كل ما تسيطر عليه المنشأة أو تسيطر عليه مشتركًا أو تؤثر فيه جوهريًا (تابعاتها ومشروعاتها وزميلاتها)، وكل ما يسيطر عليها (الأم) — وتجر الأم معها الشقيقات لأنها تسيطر عليهن كذلك. وخطط المعاش للعائلة تجلس داخل الصورة أيضًا.",
      },
    },
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
    {
      kind: "tree",
      root: { en: "What is the LINK between the two entities?", ar: "ما الرابط بين المنشأتين؟" },
      branches: [
        {
          when: { en: "One controls the other — parent & subsidiaries (IFRS 10 power + exposure + linkage)", ar: "إحداهما تسيطر على الأخرى — أم وتابعات (سلطة + انكشاف + ارتباط وفق IFRS 10)" },
          then: { en: "RELATED — the whole chain, including fellow subsidiaries under the same parent", ar: "ذو علاقة — السلسلة كلها شاملة الشقيقات تحت الأم ذاتها", red: true },
        },
        {
          when: { en: "Joint control over shared activities (IFRS 11)", ar: "سيطرة مشتركة على أنشطة مشتركة (IFRS 11)" },
          then: { en: "RELATED — the joint venture itself is related to each venturer", ar: "ذو علاقة — فالمشروع المشترك ذو علاقة بكل شريك", red: true },
        },
        {
          when: { en: "Significant influence — 20%+ or a board seat (IAS 28)", ar: "تأثير جوهري — ٢٠٪ فأكثر أو مقعد بمجلس الإدارة (IAS 28)" },
          then: { en: "RELATED — the associate sits in the web", ar: "ذو علاقة — الزميلة تسكن داخل الشبكة", red: true },
        },
        {
          when: { en: "Only a shared director, a shared venture, a lender, a dominant customer, a trade union", ar: "مجرد مدير مشترك أو مشروع مشترك أو مقرض أو عميل مسيطر أو نقابة" },
          then: { en: "NOT related — none of these links alone makes a related party", ar: "ليس ذو علاقة — لا يجعل أي من هذه الروابط منفردًا طرفًا ذا علاقة", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Key management personnel & their compensation", ar: "الإدارة العليا ومكافآتها" } },
    {
      kind: "p",
      text: {
        en: "Disclose KMP compensation IN TOTAL, split by category — a mandatory disclosure with no materiality escape: (1) short-term employee benefits (salary, bonuses, medical), (2) post-employment benefits (pension contributions), (3) other long-term benefits, (4) termination benefits, (5) share-based payment (IFRS 2 equity-settled expense). Individual directors' pay is NOT required by IFRS (local regulation may demand it).",
        ar: "تُفصح مكافآت الإدارة العليا إجمالًا مقسمة بالفئات — إفصاح إلزامي بلا معايير أهمية: (١) مزايا قصيرة الأجل (رواتب، مكافآت، طبية)، (٢) مزايا بعد التوظيف، (٣) طويلة الأجل أخرى، (٤) مزايا إنهاء الخدمة، (٥) الدفع بالأسهم. ولا يطلب IFRS تفصيل رواتب الأفراد (قد تطلبه الأنظمة المحلية).",
      },
    },
    {
      kind: "p",
      text: {
        en: "KMP are the people with authority and responsibility for planning, directing and controlling the entity — the executive and non-executive directors, the C-suite, and for a subsidiary often the parent-appointed directors and the group CFO. Close family covers children, the spouse or domestic partner and dependants, plus anyone whose dealings with the entity could be swayed by the relationship. The category table follows the IAS 19 benefit classes with IFRS 2 standing in for share-based awards.",
        ar: "الإدارة العليا هم أصحاب السلطة والمسؤولية عن التخطيط والتوجيه والرقابة — أعضاء مجلس الإدارة التنفيذيون وغير التنفيذيين، والقيادة العليا، وغالبًا لكل تابعة مديروها المعينون من الأم ومديرها المالي للمجموعة. والأسرة المباشرة تشمل الأبناء والزوج أو الشريك والمعالين، وكل من قد تتأثر تعاملاته مع المنشأة بالعلاقة. وجدول الفئات يتبع أصناف مزايا IAS 19 ويقف IFRS 2 محل المكافآت بالأسهم.",
      },
    },
    {
      kind: "formula",
      title: { en: "The KMP compensation equation", ar: "معادلة مكافآت الإدارة العليا" },
      lines: [
        { en: "KMP compensation (total) = short-term benefits + post-employment benefits + other long-term + termination + share-based payment", ar: "إجمالي المكافآت = قصيرة الأجل + بعد التوظيف + طويلة أخرى + إنهاء خدمة + دفع بالأسهم" },
        { en: "Disclosed IN TOTAL by category — never individual by IFRS (local rules may demand names)", ar: "يفصح إجمالًا بالفئات — ولا يطلب IFRS التفصيل الفردي (قد تطلبه الأنظمة المحلية)" },
        { en: "Related-party balance exposure = outstanding balances + commitments + guarantees given or received", ar: "انكشاف أرصدة الأطراف = الأرصدة القائمة + التعهدات + الضمانات الممنوحة أو المقبوضة" },
      ],
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
    {
      kind: "p",
      text: {
        en: "IAS 24 asks for TERMS, not fairness opinions: the standard never demands that you prove a related-party transaction was at arm's length — it asks what the terms were and lets the user judge. A related-party transaction exists whenever resources, services or obligations transfer between the parties, regardless of a price being charged: a free management service from the parent, a guarantee for nothing, a liability settled on the entity's behalf — all of them count.",
        ar: "يطلب IAS 24 الشروط لا آراء العدالة: فالمعيار لا يطالبك أبدًا بإثبات أن معاملة الطرف كانت بسوق عادل — بل يسأل ما كانت الشروط ويترك الحكم للمستخدم. وتوجد معاملة طرف ذي علاقة كلما انتقلت موارد أو خدمات أو التزامات بين الطرفين، سواء حُدد سعر أم لا: خدمة إدارة مجانية من الأم، وضمان بلا مقابل، والتزام سُدد نيابة عن المنشأة — كلها تحتسب.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Transactions with NO price charged — free management services, shared offices, seconded staff", ar: "معاملات بلا سعر — خدمات إدارة مجانية، مكاتب مشتركة، موظفون معارون" },
        { en: "Guarantees and comfort letters given or received — a commitment even when nothing moves", ar: "ضمانات وخطابات طمأنة ممنوحة أو مقبوضة — التزام ولو لم يتحرك شيء" },
        { en: "Settling a related party's liabilities on its behalf — an outflow dressed as a favour", ar: "سداد التزامات الطرف نيابة عنه — تدفق متنكر في هيئة معروف" },
        { en: "Management agreements, agency arrangements and licences renewed on non-market terms", ar: "اتفاقيات إدارة وترتيبات وكالة وتراخيص تجدد بشروط غير سوقية" },
      ],
    },
    { kind: "h", text: { en: "The accounting behind the disclosure", ar: "المحاسبة الكامن وراء الإفصاح" } },
    {
      kind: "p",
      text: {
        en: "IAS 24 itself books nothing — but every disclosure narrates a real entry booked under another standard. The interest-free loan to a director is measured at FAIR VALUE on day one under IFRS 9, and the day-one discount is a benefit provided to KMP. The sweetheart sale to the parent still measures revenue at the consideration agreed (IFRS 15). The KMP compensation table mirrors the IAS 19 and IFRS 2 accruals sitting in the ledger. The illustrative sheets below show those entries — the disclosure layer sits on top of them.",
        ar: "لا يثبت IAS 24 ذاته شيئًا — لكن كل إفصاح يسرد قيدًا حقيقيًا مثبتًا بموجب معيار آخر. فالقرض بلا فوائد لمدير يقاس بالقيمة العادلة في اليوم الأول وفق IFRS 9، وخصم اليوم الأول منفعة مقدمة للإدارة العليا. والبيع الودي للأم يقيس الإيراد بالمعامل المتفق عليه رغم ذلك (IFRS 15). وجدول مكافآت الإدارة يعكس مخصصات IAS 19 وIFRS 2 القابعة بالدفاتر. والجداول التوضيحية أدناه تظهر تلك القيود — وطبقة الإفصاح تجلس فوقها.",
      },
    },
    {
      kind: "journal",
      title: { en: "Illustrative — the interest-free loan to a director (IFRS 9 does the measuring)", ar: "توضيحي — القرض بلا فوائد لمدير (IFRS 9 يتولى القياس)" },
      rows: [
        { dr: { en: "Loan receivable (at FAIR VALUE) 80", ar: "قرض مستحق (بالقيمة العادلة) ٨٠" }, cr: { en: "Cash 100 (three-year interest-free loan to a KMP member)", ar: "نقد ١٠٠ (قرض ثلاث سنوات بلا فوائد لعضو إدارة عليا)" } },
        { dr: { en: "Employee benefit expense — benefit provided to KMP 20", ar: "مصروف مزايا عاملين — منفعة مقدمة للإدارة ٢٠" }, cr: { en: "The day-one discount = compensation, not a lending loss", ar: "خصم اليوم الأول = تعويض لا خسارة إقراض" }, red: true },
        { dr: { en: "Loan receivable 8 (effective-interest unwind)", ar: "قرض مستحق ٨ (فك الفائدة الفعلية)" }, cr: { en: "Finance income 8 (year 1, ~10% effective rate on 80)", ar: "إيراد تمويل ٨ (السنة ١، فائدة فعلية ~١٠٪ على ٨٠)" } },
      ],
    },
    {
      kind: "journal",
      title: { en: "Illustrative — the sweetheart sale & the KMP compensation accrual", ar: "توضيحي — البيع الودي ومخصص مكافآت الإدارة" },
      rows: [
        { dr: { en: "Receivable from parent 1,000", ar: "مدينون لدى الأم ١٬٠٠٠" }, cr: { en: "Revenue 1,000 (IFRS 15 keeps the agreed price — even a below-market one)", ar: "إيراد ١٬٠٠٠ (يحافظ IFRS 15 على السعر المتفق — ولو كان دون السوق)" } },
        { cr: { en: "The arm's-length gap is disclosed as a TERM — the books never adjust for it", ar: "فجوة سعر السوق تفصح شروطًا — والدفاتر لا تعدلها أبدًا" }, red: true },
        { dr: { en: "Employee benefit expense — KMP (short-term 2.6 · post-employment 0.3)", ar: "مصروف مزايا — الإدارة (قصيرة الأجل ٢٫٦ · بعد التوظيف ٠٫٣)" }, cr: { en: "Liabilities 2.9 (the accrued KMP benefits)", ar: "التزامات ٢٫٩ (مزايا الإدارة المستحقة)" } },
        { dr: { en: "Employee benefit expense — share-based 1.2", ar: "مصروف مزايا — دفع بالأسهم ١٫٢" }, cr: { en: "Equity — IFRS 2 share-based payment reserve 1.2", ar: "حقوق ملكية — احتياطي الدفع بالأسهم وفق IFRS 2 ١٫٢" }, red: true },
      ],
    },
    {
      kind: "note",
      text: {
        en: "These journal sheets are the ENTRIES BEHIND THE NOTE — IAS 24 adds the disclosure layer only. If a scenario asks you to change a number, the hook is IFRS 9 / IFRS 15 / IFRS 2 / IAS 19, never IAS 24.",
        ar: "هذه الجداول القيود الكامنة وراء الإيضاح — فـIAS 24 يضيف طبقة الإفصاح فقط. وإذا طلب السيناريو تغيير رقم فالخطاف في IFRS 9 أو IFRS 15 أو IFRS 2 أو IAS 19، لا في IAS 24 أبدًا.",
      },
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
    {
      kind: "tree",
      root: { en: "Disclose or exempt — routing this counterparty", ar: "أفصح أم أعفِ — توجيه هذا الطرف" },
      branches: [
        {
          when: { en: "The counterparty is the government or a fellow state-controlled entity (and the reporting entity is itself state-controlled)", ar: "الطرف حكومة أو شركة حكومية شقيقة (والمنشأة المفصحة حكومية هي الأخرى)" },
          then: { en: "EXEMPT-LITE — government's name + nature of the relationship + amounts of individually material transaction types", ar: "إعفاء مخفف — اسم الحكومة + طبيعة العلاقة + مقادير الأنواع الجوهرية", red: true },
        },
        {
          when: { en: "The item is KMP COMPENSATION — of the entity or its parent", ar: "البند مكافآت الإدارة العليا — للمنشأة أو أمها" },
          then: { en: "ALWAYS full by category — no exemption, no materiality escape", ar: "إفصاح كامل بالفئات دائمًا — لا إعفاء ولا مهرب أهمية", red: true },
        },
        {
          when: { en: "Any other genuinely related party — parent, associates, JVs, KMP's family entities", ar: "أي طرف ذي علاقة فعلي آخر — الأم، الزميلات، المشتركة، منشآت أسرة الإدارة" },
          then: { en: "FULL disclosure — amounts, balances, terms, guarantees", ar: "إفصاح كامل — المقادير والأرصدة والشروط والضمانات", red: true },
        },
        {
          when: { en: "There were NO transactions at all this period", ar: "لم توجد معاملات هذه الفترة أصلًا" },
          then: { en: "State the FACT + still disclose the NATURE of the relationships (and KMP compensation)", ar: "اذكر الواقعة + أفصح مع ذلك عن طبيعة العلاقات (ومكافآت الإدارة)" },
        },
      ],
    },
    { kind: "h", text: { en: "A disclosure checklist — the sequence", ar: "قائمة فحص الإفصاح — التسلسل" } },
    {
      kind: "steps",
      items: [
        { en: "MAP every relationship — persons (KMP + close family) and entities (control / joint control / significant influence, both directions)", ar: "ارسم خريطة كل علاقة — الأشخاص (الإدارة وأسرهم) والمنشآت (سيطرة/سيطرة مشتركة/تأثير جوهري، في الاتجاهين)" },
        { en: "LIST the transactions & balances per party — amounts, terms and conditions, guarantees", ar: "اسرد المعاملات والأرصدة لكل طرف — المقادير والشروط والضمانات" },
        { en: "TEST the government-related exemption — only if the entity is itself state-controlled, and only for the government & fellow state entities", ar: "اختبر إعفاء الجهات الحكومية — فقط إذا كانت المنشأة حكومية، وفقط للحكومة وشقيقاتها الحكومية" },
        { en: "BUILD the KMP compensation table by the five IAS 19 / IFRS 2 categories", ar: "ابنِ جدول مكافآت الإدارة على فئات IAS 19 وIFRS 2 الخمس" },
        { en: "ADD provisions for doubtful related-party receivables, commitments, and bad-debt expense on related balances", ar: "أضف مخصصات الديون المشكوك فيها من الأطراف والتعهدات ومصروف الديون المعدومة" },
        { en: "STATE the no-transactions fact if it is true — and the compensation table anyway", ar: "اذكر واقعة انعدام المعاملات إن صحت — وجدول المكافآت على كل حال" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Attack identification questions with the two-dimensional map: run every named party through the PERSONS column (KMP? close family? their entities?) and then the ENTITIES column (control? joint control? significant influence? either direction?). Only then apply the exemptions — the government carve-out — and remember that identifying a party as related is one mark, knowing WHAT to disclose for it is the next. The example below runs the full drill.",
        ar: "اهجم على أسئلة التحديد بالخريطة ثنائية البعدين: مرِّر كل طرف مسمى على عمود الأشخاص (إدارة عليا؟ أسرة مباشرة؟ منشآتهم؟) ثم عمود المنشآت (سيطرة؟ سيطرة مشتركة؟ تأثير جوهري؟ في أي اتجاه؟). بعدها فقط طبق الإعفاءات — استثناء الجهات الحكومية — وتذكر أن تحديد الطرف درجة، ومعرفة ما يفصح عنه عنه الدرجة التالية. والمثال أدناه يشغل التدريب كاملًا.",
      },
    },
    {
      kind: "example",
      title: { en: "The identification drill — eight parties", ar: "تدريب التحديد — ثمانية أطراف" },
      lines: [
        { en: "1. Parent company P → RELATED: full disclosure of transactions & balances with the parent", ar: "١. الأم P ← طرف ذو علاقة: إفصاح كامل عن المعاملات والأرصدة معها" },
        { en: "2. Fellow subsidiary S2 (same parent) → RELATED: disclose as a party-type line", ar: "٢. الشقيقة S2 (تحت الأم ذاتها) ← ذات علاقة: أفصح ضمن نوع الأطراف" },
        { en: "3. Associate A (30% + a board seat) → RELATED (significant influence, IAS 28): disclose", ar: "٣. الزميلة A (٣٠٪ + مقعد مجلس) ← ذات علاقة (تأثير جوهري وفق IAS 28): أفصح" },
        { en: "4. Customer C taking 60% of output under a long-term contract → NOT related: economic dependence → disclose concentration risk (IFRS 7)", ar: "٤. العميل C آخذ ٦٠٪ من الإنتاج بعقد طويل ← ليس ذا علاقة: اعتماد اقتصادي ← أفصح عن تركز المخاطر (IFRS 7)" },
        { en: "5. The bank providing the revolving facility → NOT related: ordinary-course provider of finance", ar: "٥. البنك الممول للتسهيل الدوار ← ليس ذا علاقة: ممول بالطريقة الاعتيادية" },
        { en: "6. Supplier V, 70% owned by the CFO's brother → RELATED: close family of KMP control another entity", ar: "٦. المورد V تملكه ٧٠٪ أسرة المدير المالي ← ذات علاقة: سيطرة أسرة الإدارة المباشرة على منشأة أخرى" },
        { en: "7. The state electricity utility, the entity itself being state-owned → RELATED BUT EXEMPT-LITE: government's name + nature + amounts of individually material transaction types", ar: "٧. شركة الكهرباء الحكومية والمنشأة ذاتها حكومية ← ذات علاقة لكن بإفصاح مخفف: اسم الحكومة + الطبيعة + مقادير الأنواع الجوهرية" },
        { en: "8. The group's defined-benefit pension plan → RELATED: a post-employment plan of the family", ar: "٨. خطة المعاش المحددة المزايا للمجموعة ← ذات علاقة: خطة مزايا بعد التوظيف للعائلة" },
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
    { kind: "h", text: { en: "Consolidation & the separate statements", ar: "التجميع والقوائم المنفصلة" } },
    {
      kind: "p",
      text: {
        en: "Intragroup transactions and balances vanish on consolidation, so the CONSOLIDATED related parties are only those outside the group — the parent of the group, associates, joint ventures, external KMP. But the parent's and subsidiaries' SEPARATE statements (IAS 27) still disclose the full intragroup web. Transactions with associates and joint ventures survive consolidation in one sense: IAS 28 eliminates only the unrealised profit, while the counterparty remains external — and KMP transactions are never eliminated anywhere, because people are not group members.",
        ar: "تتلاشى المعاملات والأرصدة داخل المجموعة بالتجميع، فالأطراف ذات العلاقة في القوائم المجمععة هم فقط من خارج المجموعة — أم المجموعة والزميلات والمشتركة وإدارة الخارج. لكن القوائم المنفصلة للأم والتابعات (IAS 27) تظل تفصح عن الشبكة الداخلية كاملة. ومعاملات الزميلات والمشتركة تنجو من التجميع بمعنى: فـIAS 28 يستبعد الربح غير المحقق فقط ويبقى الطرف خارجيًا — ومعاملات الإدارة العليا لا تُستبعد في أي مكان، لأن الأشخاص ليسوا أعضاء مجموعة.",
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
    { kind: "h", text: { en: "Transition & effective dates", ar: "الانتقال وتواريخ السريان" } },
    {
      kind: "p",
      text: {
        en: "IAS 24 was revised in November 2009, effective for periods beginning on or after 1 January 2011 — the revision that appears in this sheet's header. It simplified the related-party definition, shortened the KMP and close-family wording, and introduced the government-related partial exemption for state-controlled entities. Application is retrospective: comparative disclosures are recast to the new definitions on first-time adoption.",
        ar: "راجع IAS 24 في نوفمبر ٢٠٠٩، نافذًا للفترات من ١ يناير ٢٠١١ — وهي المراجعة المذكورة في ترويسة هذه الورقة. وقد بسّطت تعريف الطرف ذي العلاقة، وقلّصت صياغة الإدارة العليا والأسرة المباشرة، وأدخلت الإعفاء الجزئي للمنشآت المرتبطة بالحكومات. والتطبيق رجعي: تعاد صياغة إفصاحات المقارنة إلى التعريفات الجديدة عند التطبيق الأول.",
      },
    },
    { kind: "h", text: { en: "Interactions with other standards", ar: "التفاعل مع المعايير الأخرى" } },
    {
      kind: "list",
      items: [
        { en: "IFRS 10: intragroup parties and balances vanish on consolidation — the consolidated note keeps only the external web", ar: "IFRS 10: تتلاشى الأطراف والأرصدة الداخلية بالتجميع — فيبقي الإيضاح المجمع الشبكة الخارجية فقط" },
        { en: "IAS 27: the parent's & subsidiaries' SEPARATE statements disclose the full intragroup web", ar: "IAS 27: القوائم المنفصلة للأم والتابعات تفصح عن الشبكة الداخلية كاملة" },
        { en: "IAS 28: associates & JVs stay external in consolidation — upstream/downstream transactions remain related-party disclosures", ar: "IAS 28: الزميلات والمشتركة تظل خارجية بالتجميع — فالمعاملات الصاعدة والهابطة تبقى إفصاحات أطراف ذات علاقة" },
        { en: "IFRS 2: share-based payments to KMP feed the fifth compensation category", ar: "IFRS 2: الدفع بالأسهم للإدارة يغذي فئة المكافآت الخامسة" },
        { en: "IAS 19: the benefit classes structure the KMP compensation table", ar: "IAS 19: أصناف المزايا تُبنى عليها فئات جدول مكافآت الإدارة" },
        { en: "IFRS 9: measures the interest-free related-party loans at fair value on day one", ar: "IFRS 9: يقيس القروض بلا فوائد مع الأطراف بالقيمة العادلة في اليوم الأول" },
        { en: "IFRS 7: economic dependence (a sole customer or supplier) is concentration risk, NOT relatedness", ar: "IFRS 7: الاعتماد الاقتصادي (عميل أو مورد وحيد) تركز مخاطر لا علاقة أطراف" },
        { en: "IAS 34: interim statements disclose related-party changes since the last annual report", ar: "IAS 34: القوائم المرحلية تفصح عن تغيرات الأطراف منذ التقرير السنوي الأخير" },
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
    {
      kind: "tip",
      text: {
        en: "KMP compensation is disclosed EVEN WHEN the entity had no other related-party transactions — the category table has no materiality escape and no exemption, not even the government one.",
        ar: "مكافآت الإدارة العليا تفصح حتى لو لم تكن للمنشأة معاملات أطراف أخرى — فجدول الفئات بلا مهرب أهمية ولا إعفاء، ولا حتى الإعفاء الحكومي يغطيه.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The government exemption does NOT cascade: it covers only the government and fellow state-controlled entities. Transactions with the state entity's own private subsidiaries, or with its KMP and their families, take FULL disclosure.",
        ar: "الإعفاء الحكومي لا يتسلسل: يغطي الحكومة والشركات الحكومية الشقيقة فقط. فالمعاملات مع التابعات الخاصة للمنشأة الحكومية ذاتها، أو مع إدارتها وأسرها، تأخذ إفصاحًا كاملًا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "In identification MCQs run each party through BOTH columns — person AND entity — before answering: the 60% customer and the friendly bank are the standard decoys on one side; the CFO's brother's company and the pension plan are the overlooked relatives on the other.",
        ar: "في أسئلة التحديد مرِّر كل طرف على العمودين معًا — الأشخاص والمنشآت — قبل الإجابة: فالعميل الـ٦٠٪ والبنك الودود طُعوم معيارية في جهة؛ وشقيق المدير المالي وخطة المعاش الأقارب المنسيون في الجهة الأخرى.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Close members of family = those family members who could be expected to INFLUENCE, or be INFLUENCED BY, the KMP individual in their dealings with the entity — the definition is about sway, not bloodline taxonomy.",
        ar: "أفراد الأسرة المباشرون = من يُتوقع منهم التأثير على عضو الإدارة العليا أو التأثر به في تعاملاته مع المنشأة — فالتعريف عن النفوذ لا عن علم الأنساب.",
      },
    },
  ],
}
