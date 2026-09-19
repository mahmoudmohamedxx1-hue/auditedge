import { ProgramSection } from "./types"

/** The risk core of the audit cycle: assessing RMM, the firm's own risks,
 *  and industry (field) risk profiles. */
export const RISK_SECTIONS: ProgramSection[] = [
  {
    id: "risk-assessment",
    code: "AP-01",
    group: "methodology",
    icon: "gauge",
    title: { en: "Risk Assessment — The Heart of the Audit", ar: "تقييم المخاطر — قلب المراجعة" },
    scope: {
      en: "How to identify and assess risks of material misstatement at the financial-statement level and the assertion level, size the audit risk model, isolate significant risks, and let risk — not habit — drive every procedure.",
      ar: "كيفية تحديد وتقييم مخاطر التحريف الجوهري على مستوى القوائم المالية وعلى مستوى التأكيدات، وكيفية قياس نموذج مخاطر المراجعة، وعزل المخاطر الجوهرية، وترك المخاطر — لا العادة — هي التي تقود كل إجراء.",
    },
    objectives: [
      { en: "Express the audit risk model correctly: AR = IR × CR × DR, where RMM = IR × CR.", ar: "صياغة نموذج مخاطر المراجعة بشكل صحيح: مخاطر المراجعة = المخاطر المتأصلة × مخاطر الضبط × مخاطر الاكتشاف، حيث مخاطر التحريف الجوهري = المتأصلة × الضبط." },
      { en: "Separate financial-statement-level risks (pervasive) from assertion-level risks (specific) and respond to each differently.", ar: "التمييز بين مخاطر مستوى القوائم المالية (شمولية منتشرة) ومخاطر مستوى التأكيدات (محددة) والاستجابة لكل منها بطريقة مختلفة." },
      { en: "Identify significant risks and treat them with tailored procedures, not generic ones.", ar: "تحديد المخاطر الجوهرية ومعالجتها بإجراءات مصممة خصيصًا لا بإجراءات عامة." },
    ],
    assertions: ["EX", "C", "A", "VA", "RO", "CO", "CL", "PR"],
    risks: [
      { en: "FS-level risks left unmapped: management override, dominant-owner influence, weak governance, or an unreliable IT environment affect EVERY account, yet the program tests accounts one by one.", ar: "مخاطر مستوى القوائم بلا معالجة: تجاوز الإدارة للضوابط، وتأثير المالك المسيطر، وضعف الحوكمة، أو بيئة تقنية غير موثوقة تؤثر على كل بند، بينما يفحص البرنامج البنود واحدًا واحدًا." },
      { en: "Inherent risk assessed as 'high' everywhere — which means nowhere: the spectrum of risk requires calibration (complexity, subjectivity, change, uncertainty, integrity).", ar: "تقييم المخاطر المتأصلة «مرتفعة» في كل مكان — أي لا شيء: يتطلب طيف المخاطر معايرة دقيقة (التعقيد، الحكم الذاتي، التغير، عدم اليقين، النزاهة)." },
      { en: "Fraud risk treated as a boilerplate memo: the presumed revenue-recognition risk rebutted without evidence, or accepted without changing a single procedure.", ar: "التعامل مع مخاطر الاحتيال كمذكرة شكلية: خطر الاعتراف بالإيراد المفترض يُرفض بلا دليل، أو يُقبل دون تغيير أي إجراء." },
      { en: "Control risk set at maximum 'to be safe' every year — an excuse to skip understanding controls the standards require.", ar: "وضع مخاطر الضبط عند الحد الأقصى «احتياطًا» كل سنة — ذريعة لتجاوز فهم الضوابط الذي تفرضه المعايير." },
    ],
    documents: [
      { en: "Risk assessment memo per cycle: flows, controls, IT dependency, and the RMM conclusion", ar: "مذكرة تقييم مخاطر لكل دورة: التدفقات والضوابط والاعتماد على التقنية واستنتاج مخاطر التحريف" },
      { en: "Fraud brainstorming minutes (ISA 240) — who, what schemes, how the entity could beat controls", ar: "محضر جلسة العصف الذهني للاحتيال (ISA 240) — من، وأي أساليب، وكيف يمكن للمنشأة اختراق الضوابط" },
      { en: "Significant-risk register: risk → assertion → planned response → team member", ar: "سجل المخاطر الجوهرية: الخطر ← التأكيد ← الاستجابة المخططة ← المسؤول" },
      { en: "Related-party and management-override inquiry notes", ar: "ملاحظات الاستفسار عن الأطراف ذات العلاقة وتجاوز الإدارة" },
      { en: "Prior-year misstatement history and regulator correspondence", ar: "تاريخ أخطاء السنوات السابقة ومراسلات الجهات الرقابية" },
    ],
    procedures: [
      {
        id: "risk-1",
        ref: "ISA/ESA 315",
        text: {
          en: "Start from the audit risk model and write it into the strategy memo: Audit Risk = Inherent Risk × Control Risk × Detection Risk. You cannot 'test your way out' of a high-RMM area — the model must drive sample sizes, evidence types, and staffing.",
          ar: "ابدأ من نموذج مخاطر المراجعة ووثّقه في مذكرة الاستراتيجية: مخاطر المراجعة = المخاطر المتأصلة × مخاطر الضبط × مخاطر الاكتشاف. لا يمكنك «الفحص لتجاوز» منطقة عالية المخاطر — النموذج هو الذي يقود أحجام العينات وأنواع الأدلة وتوزيع الفريق.",
        },
      },
      {
        id: "risk-2",
        ref: "ISA/ESA 315",
        text: {
          en: "Assess inherent risk per assertion using the five factors — complexity, subjectivity, change, uncertainty, and management integrity — and rate each on the spectrum (lower ← → higher), not a binary high/low.",
          ar: "قيّم المخاطر المتأصلة لكل تأكيد باستخدام العوامل الخمسة — التعقيد، والحكم الذاتي، والتغير، وعدم اليقين، ونزاهة الإدارة — وحدد موقعها على طيف المخاطر (أدنى ← → أعلى) لا بشكل ثنائي مرتفع/منخفض.",
        },
      },
      {
        id: "risk-3",
        ref: "ISA/ESA 315",
        text: {
          en: "Identify financial-STATEMENT-level risks separately: management override of controls, dominance by one owner-manager, ineffective governance, IT environment failures, industry decline. Respond with pervasive measures: unpredictability in procedures, wider analytics, heavier involvement of seniors, and oral inquiries in a second location.",
          ar: "حدد مخاطر مستوى القوائم المالية بشكل منفصل: تجاوز الإدارة للضوابط، وهيمنة مالك-مدير واحد، وضعف الحوكمة، وأعطال بيئة التقنية، وتدهور الصناعة. واستجب بتدابير شاملة: عدم قابلية التنبؤ بالإجراءات، وتحليلات أوسع، ومشاركة أعمق للكبار، واستفسارات شفهية في موقع ثانٍ.",
        },
      },
      {
        id: "risk-4",
        ref: "ISA/ESA 315",
        text: {
          en: "Walk through each significant cycle and ask the fraud question explicitly: what could management do here that controls would NOT catch? Record the answer as a risk with an owner.",
          ar: "تتبع كل دورة جوهرية واسأل سؤال الاحتيال صراحة: ما الذي تستطيع الإدارة فعله هنا ولن تكتشفه الضوابط؟ وسجّل الإجابة كخطر بمسؤول محدد.",
        },
      },
      {
        id: "risk-5",
        ref: "ISA/ESA 240",
        text: {
          en: "Treat revenue-recognition fraud as a PRESUMED significant risk. To rebut it you need real evidence (e.g. simple cash business with direct bank deposits and no delivery obligations) — partner sign-off is mandatory either way.",
          ar: "تعامل مع احتيال الاعتراف بالإيراد كخطر جوهري مفترض. ولبطلان هذا الافتراض تحتاج دليلًا فعليًا (مثل نشاط نقدي بسيط بإيداعات بنكية مباشرة وبلا التزامات تسليم) — وتوقيع الشريك لازم في الحالتين.",
        },
      },
      {
        id: "risk-6",
        ref: "ISA/ESA 240",
        text: {
          en: "Test journal entries and adjustments with data analytics (see the analyzer below): period-end entries, round amounts, weekend postings, unusual account combinations, and entries by unauthorized users — this is the primary response to management-override risk.",
          ar: "اختبر القيود والتسويات بتحليل البيانات (راجع المحلل بالأسفل): قيود نهاية الفترة، ومبالغ مقربة، وترحيلات عطلات، وتوليفات حسابات غير معتادة، وقيود بمستخدمين غير مصرح لهم — هذه هي الاستجابة الأساسية لخطر تجاوز الإدارة.",
        },
      },
      {
        id: "risk-7",
        ref: "ISA/ESA 315",
        text: {
          en: "Evaluate the IT environment as part of risk, not as a separate IT checklist: which controls are automated, what happens when they fail, who can change master data, and are transactions traceable end-to-end.",
          ar: "قيّم بيئة التقنية كجزء من المخاطر لا كقائمة تقنية منفصلة: أي الضوابط مؤتمتة، وماذا يحدث عند فشلها، ومن يستطيع تغيير البيانات الأساسية، وهل يمكن تتبع العمليات من البداية للنهاية.",
        },
      },
      {
        id: "risk-8",
        ref: "ISA/ESA 330",
        text: {
          en: "Build the risk-response matrix and make it binding: every significant risk maps to a specific test, a named performer, and a completion date. A risk with no procedure against it is an unmanaged risk.",
          ar: "ابنِ مصفوفة المخاطر والاستجابة واجعلها ملزمة: كل خطر جوهري يقابله اختبار محدد ومنفذ باسمه وتاريخ إتمام. الخطر الذي لا يقابله إجراء هو خطر بلا إدارة.",
        },
      },
      {
        id: "risk-9",
        ref: "ISA/ESA 330",
        text: {
          en: "When planned controls testing fails or deviations exceed expectations, re-assess control risk and REDESIGN the substantive response — do not simply note the deviation and move on.",
          ar: "عند فشل اختبارات الضوابط المخططة أو تجاوز الانحرافات للمتوقع، أعد تقييم مخاطر الضبط وأعد تصميم الاستجابة الجوهرية — ولا تكتفِ بتدوين الانحراف والمتابعة.",
        },
      },
      {
        id: "risk-10",
        ref: "ISA/ESA 450",
        text: {
          en: "Feed misstatements found back into the risk assessment: recurring errors in one area are evidence the risk was understated — update the assessment and extend testing while fieldwork is still open.",
          ar: "أعد تغذية تقييم المخاطر بالأخطاء المكتشفة: الأخطاء المتكررة في منطقة واحدة دليل على أن الخطر قُدّر بأقل من حقيقته — حدّث التقييم ووسّع الاختبار ما دام العمل الميداني مفتوحًا.",
        },
      },
      {
        id: "risk-11",
        ref: "ISA/ESA 500",
        text: {
          en: "Prefer evidence the entity cannot control: external confirmations, direct observation, system-generated data reconciled to source, and third-party analytics — the higher the risk, the more external the evidence must be.",
          ar: "فضّل الأدلة التي لا تسيطر عليها المنشأة: التأكيدات الخارجية، والمعاينة المباشرة، والبيانات المولدة من النظام ومطابقتها بالمصدر، والتحليلات من أطراف ثالثة — كلما ارتفع الخطر وجب أن يكون الدليل أكثر خارجية.",
        },
      },
      {
        id: "risk-12",
        ref: "ISA/ESA 200",
        text: {
          en: "Document professional skepticism in action: contradictory evidence followed up, explanations challenged with corroboration, and management assertions verified — not accepted with a nod.",
          ar: "وثّق الريبة المهنية في التطبيق: متابعة الأدلة المتعارضة، وتحدي التفسيرات بما يسندها، والتحقق من تصريحات الإدارة — لا قبولها بالإيماء.",
        },
      },
    ],
    pitfalls: [
      { en: "A risk matrix written at planning and never opened again — risk assessment is continuous, not a phase.", ar: "مصفوفة مخاطر كُتبت في التخطيط ولم تُفتح ثانية — تقييم المخاطر عملية مستمرة لا مرحلة." },
      { en: "Every risk rated significant, so nothing is. Significant risks deserve DIFFERENT treatment: tailored procedures, more external evidence, senior review.", ar: "كل خطر يوصف بالجوهرية فلا يصبح شيء جوهريًا. المخاطر الجوهرية تستحق معاملة مختلفة: إجراءات مصممة، وأدلة خارجية أكثر، ومراجعة كبار الفريق." },
      { en: "Analytics run only at the account level — fraud hides in the entries UNDER the account balance.", ar: "تشغيل التحليلات على مستوى البند فقط — الاحتيال يختبئ في القيود تحت رصيد البند." },
    ],
    standards: ["ISA 200", "ISA 315 (2019)", "ISA 240", "ISA 330", "ISA 450", "ISA 500", "ESA 315", "ESA 240", "ESA 330", "ESA (PM Decree 3725/2025)"],
  },

  {
    id: "firm-risk",
    code: "AP-05",
    group: "methodology",
    icon: "scale",
    title: { en: "The Audit Firm's Own Risks — Quality, Independence & Engagement Economics", ar: "مخاطر مكتب المراجعة نفسه — الجودة والاستقلالية واقتصاديات المهمة" },
    scope: {
      en: "The engagement risk the FIRM carries on every job: client-acceptance risk, independence threats, quality-management failures, fee and time pressure, and reputation/liability exposure — and the safeguards the standards require before the opinion is signed.",
      ar: "مخاطر المهمة التي يتحملها المكتب في كل عمل: مخاطر قبول العميل، وتهديدات الاستقلالية، وإخفاقات إدارة الجودة، وضغط الأتعاب والوقت، والتعرض للسمعة والمسؤولية — والضمانات التي تفرضها المعايير قبل توقيع الرأي.",
    },
    objectives: [
      { en: "Decide which clients to accept, keep, or leave — before their risk becomes the firm's risk.", ar: "اتخاذ قرار قبول العملاء أو الاستمرار معهم أو تركهم — قبل أن يصبح خطرهم خطر المكتب." },
      { en: "Keep independence real: identify threats, apply safeguards, document the conclusion.", ar: "جعل الاستقلالية حقيقية: تحديد التهديدات، وتطبيق الضمانات، وتوثيق الاستنتاج." },
      { en: "Run each engagement inside the quality-management system so no review finding can surprise you.", ar: "إدارة كل مهمة داخل منظومة إدارة الجودة بحيث لا تفاجئك أي ملاحظة مراجعة." },
    ],
    risks: [
      { en: "Acceptance risk: taking a client whose owners lack integrity, whose records are unreconstructable, or whose fees would dominate the office income — the #1 root cause of audit failures and lawsuits.", ar: "خطر القبول: قبول عميل يفتقر ملاكه للنزاهة، أو سجلاته غير قابلة لإعادة البناء، أو أتعابه ستهيمن على دخل المكتب — السبب الجذري الأول لفشل المراجعات والدعاوى." },
      { en: "Independence threats left unmanaged: self-review (auditor reviews his own prior consulting work), self-interest (fee dependence, gifts), advocacy, familiarity (long association, family ties), intimidation (threats to replace the firm).", ar: "تهديدات استقلالية بلا إدارة: المراجعة الذاتية (يراجع المكتب عمله الاستشاري السابق)، والمصلحة الذاتية (الاعتماد على الأتعاب، الهدايا)، والمناصرة، والألفة (طول العلاقة، صلات القرابة)، والترهيب (تهديدات باستبدال المكتب)." },
      { en: "Fee and time-budget pressure: an under-quoted job converts directly into less evidence, junior-only staffing, and skipped reviews — the classic incubator of wrong opinions.", ar: "ضغط الأتعاب وموازنة الوقت: عمل مسعّر بأقل من حقيقته يتحول مباشرة إلى أدلة أقل وفريق مبتدئ ومراجعات متجاوزة — الحاضنة الكلاسيكية للآراء الخاطئة." },
      { en: "Quality failures: no engagement quality review for high-risk clients, cold reviews months after signing, workpapers assembled without addressing review notes.", ar: "إخفاقات الجودة: غياب مراجعة جودة المهمة للعملاء عاليي المخاطر، ومراجعات باردة بعد أشهر من التوقيع، وأوراق عمل تُجمع دون معالجة ملاحظات المراجعة." },
      { en: "Regulatory exposure in Egypt: FRA inspection findings, ESAA disciplinary referrals, and the new standards regime (PM Decree 3725/2025) raising the bar for evidence and documentation.", ar: "التعرض التنظيمي في مصر: ملاحظات فحص الهيئة العامة للرقابة المالية، والإحالات التأديبية للجمعية المصرية للمحاسبين والمراجعين، ونظام المعايير الجديد (قرار 3725/2025) الذي يرفع سقف متطلبات الأدلة والتوثيق." },
    ],
    documents: [
      { en: "Client acceptance & continuance evaluation (integrity of principals, audit history, our competence, fee dependence %)", ar: "تقييم قبول واستمرار العميل (نزاهة الملاك، تاريخ المراجعة، كفاءتنا، نسبة الاعتماد على الأتعاب)" },
      { en: "Independence confirmations — all team members, annually, covering financial interests, family ties, prior services", ar: "إقرارات الاستقلالية — لكل أعضاء الفريق سنويًا، وتغطي المصالح المالية وصلات القرابة والخدمات السابقة" },
      { en: "Engagement budget vs actual time, with a documented conclusion when the overrun was absorbed", ar: "موازنة المهمة مقابل الوقت الفعلي، مع استنتاج موثق عندما تُمتص الزيادة" },
      { en: "Engagement quality review (EQR) sign-off for listed / high-risk entities", ar: "اعتماد مراجعة جودة المهمة للكيانات المقيدة أو عالية المخاطر" },
      { en: "Non-audit services provided to the client this year, with the threat analysis for each", ar: "الخدمات غير المراجعة المقدمة للعميل هذا العام، مع تحليل التهديدات لكل خدمة" },
    ],
    procedures: [
      {
        id: "firm-1",
        ref: "ISQM/ESQM 1",
        text: {
          en: "Evaluate every NEW client before acceptance: integrity of owners and management, business model we can actually audit, quality of accounting records, auditor predecessor communication, and litigation history. Declining is a professional decision, not a lost fee only.",
          ar: "قيّم كل عميل جديد قبل القبول: نزاهة الملاك والإدارة، ونموذج عمل نستطيع فعلًا مراجعته، وجودة السجلات المحاسبية، والتواصل مع المراجع السابق، وتاريخ التقاضي. والرفض قرار مهني لا مجرد أتعاب ضائعة.",
        },
      },
      {
        id: "firm-2",
        ref: "ISQM/ESQM 1",
        text: {
          en: "Re-evaluate CONTINUANCE annually for risky clients: fee dependence (one client > 15% of office revenue is a red flag), deteriorating financials, growing disputes, or a management that shops for opinions.",
          ar: "أعد تقييم الاستمرارية سنويًا للعملاء عاليي المخاطر: الاعتماد على الأتعاب (عميل واحد يتجاوز 15% من إيرادات المكتب إنذار خطر)، وتدهور المركز المالي، وتصاعد النزاعات، أو إدارة تتسوق للآراء.",
        },
      },
      {
        id: "firm-3",
        ref: "IESBA Code",
        text: {
          en: "Screen independence BEFORE staffing: financial interests in the client, family relationships, prior-year bookkeeping or valuation services, contingent fees. Apply the safeguards (divest, reassign, independent review) or decline the role.",
          ar: "افحص الاستقلالية قبل تشكيل الفريق: المصالح المالية في العميل، وصلات القرابة، وخدمات مسك الدفاتر أو التقييم في السنة السابقة، والأتعاب المشروطة. وطبّق الضمانات (التصرف في المصلحة، إعادة التكليف، مراجعة مستقلة) أو ارفض المهمة.",
        },
      },
      {
        id: "firm-4",
        ref: "IESBA Code",
        text: {
          en: "For long-association partners (typically 7 years on listed clients), rotate or apply the cooling-off period and document the compensation safeguards so familiarity does not dull skepticism.",
          ar: "للشركاء طويلي الارتباط (عادة 7 سنوات للعملاء المقيدة)، طبّق التناوب أو فترة التهدئة ووثّق ضمانات الأتعاب حتى لا تُضعف الألفة حدة الريبة المهنية.",
        },
      },
      {
        id: "firm-5",
        ref: "ISQM/ESQM 1",
        text: {
          en: "Price the audit honestly: budget the real hours the risk assessment implies, not the fee the client wants to hear. An under-budgeted engagement is a quality failure scheduled in advance.",
          ar: "سعّر المراجعة بصدق: خطّط الساعات الحقيقية التي يستلزمها تقييم المخاطر، لا الأتعاب التي يريد العميل سماعها. المهمة المسعّرة بأقل من حاجتها فشل جودة مجدول مسبقًا.",
        },
      },
      {
        id: "firm-6",
        ref: "ISA/ESA 220",
        text: {
          en: "Match staffing to risk: significant risks get seniors, estimates get the technically strongest reviewer, and no first-year audits a complex area alone. Document the competence conclusion for each team member.",
          ar: "طابق تشكيل الفريق مع المخاطر: المخاطر الجوهرية لكبار الفريق، والتقديرات لأقوى المراجعين فنيًا، ولا يدقق مبتدئ منطقة معقدة بمفرده. ووثّق استنتاج الكفاءة لكل عضو.",
        },
      },
      {
        id: "firm-7",
        ref: "ISA/ESA 220",
        text: {
          en: "Review while it matters: manager review during fieldwork, partner review of all significant judgments BEFORE the opinion, and a documented clearance of every review note — not a post-signing paperwork exercise.",
          ar: "راجع في الوقت المناسب: مراجعة المدير أثناء العمل الميداني، ومراجعة الشريك لكل الحكم المهني الجوهري قبل الرأي، وإقفال موثق لكل ملاحظة مراجعة — لا أعمال ورقية بعد التوقيع.",
        },
      },
      {
        id: "firm-8",
        ref: "ISQM/ESQM 2",
        text: {
          en: "Trigger an engagement quality review (EQR) for listed entities, high-risk industries, first-year audits of complex groups, and any engagement where the opinion may be qualified — completed BEFORE release.",
          ar: "فعّل مراجعة جودة المهمة للكيانات المقيدة، والصناعات عالية المخاطر، ومراجعات السنة الأولى للمجموعات المعقدة، وأي مهمة قد يكون رأيها مشروطًا — وتكتمل قبل إصدار التقرير.",
        },
      },
      {
        id: "firm-9",
        ref: "ISQM/ESQM 1",
        text: {
          en: "Track quality objectives, not just billing: monitoring (hot/cold file reviews), remediation of findings, root-cause analysis of recurring deficiencies, and an annual quality report to leadership.",
          ar: "تابع أهداف الجودة لا التحصيل فقط: الرقابة (مراجعات الملفات الساخنة والباردة)، ومعالجة الملاحظات، وتحليل الأسباب الجذرية للقصور المتكرر، وتقرير جودة سنوي للإدارة.",
        },
      },
      {
        id: "firm-10",
        ref: "ISA/ESA 210",
        text: {
          en: "Keep the engagement letter current: scope changes, component auditors, fee terms, and management's responsibilities — unsigned or stale letters are the first thing every inspection flags.",
          ar: "أبقِ خطاب التكليف محدثًا: تغييرات النطاق، ومراجعو المكونات، وشروط الأتعاب، ومسؤوليات الإدارة — الخطابات غير الموقعة أو القديمة أول ما تشير إليه أي فحص رقابي.",
        },
      },
      {
        id: "firm-11",
        ref: "ISQM/ESQM 1",
        text: {
          en: "Documented consultation for hard calls: going concern, complex valuation, group issues, and opinion modifications — with the conclusion and who made it. When the file shows the reasoning, liability shrinks.",
          ar: "استشارة موثقة للقرارات الصعبة: الاستمرارية، والتقييم المعقد، ومسائل المجموعات، وتعديل الرأي — مع الاستنتاج ومن اتخذه. حين يُظهر الملف المنطق، تنكمش المسؤولية.",
        },
      },
      {
        id: "firm-12",
        ref: "IESBA / FRA 175/2024",
        text: {
          en: "Apply the FRA ethics code (Decree 175/2024) in daily practice: gifts and hospitality thresholds, family employment by clients, and the documented NO for prohibited non-audit services — and train the team on it annually.",
          ar: "طبّق ميثاق أخلاقيات الهيئة (قرار 175/2024) في الممارسة اليومية: حدود الهدايا والضيافة، وعمل الأقارب لدى العملاء، والرفض الموثق للخدمات المحظورة — ودرّب الفريق عليه سنويًا.",
        },
      },
    ],
    pitfalls: [
      { en: "Independence treated as an annual signed form instead of live threat management during the engagement.", ar: "التعامل مع الاستقلالية كنموذج سنوي موقع بدلًا من إدارة تهديدات حية أثناء المهمة." },
      { en: "The only partner who understands the client is the one who must rotate off — knowledge transfer planned too late.", ar: "الشريك الوحيد الذي يفهم العميل هو من يجب أن يترك المهمة — نقل المعرفة يُخطط متأخرًا جدًا." },
      { en: "Fee pressure absorbed silently by the team — escalate it instead: re-scope, re-fee, or resign.", ar: "ضغط الأتعاب يمتصه الفريق بصمت — ارفعه بدلًا من ذلك: أعد النطاق أو الأتعاب أو اعتذر." },
    ],
    standards: ["ISQM 1", "ISQM 2", "ISA 210", "ISA 220", "IESBA Code of Ethics", "ESQM 1", "ESA 220", "FRA Decree 175/2024 (Ethics)", "FRA Decree 174/2024 (QC)"],
  },

  {
    id: "industry-risks",
    code: "AP-06",
    group: "methodology",
    icon: "factory",
    title: { en: "Industry (Field) Risk Library", ar: "مكتبة مخاطر الصناعات (المجالات)" },
    scope: {
      en: "Every field of business fails differently. Use these profiles at planning to anticipate where misstatements hide in each industry, what drives its significant accounts, and which procedures matter most — then tailor the program accordingly.",
      ar: "كل مجال من الأعمال يفشل بطريقة مختلفة. استخدم هذه الملفات عند التخطيط لتتوقع أين تختبئ التحريفات في كل صناعة، وما الذي يحرك بنودها الجوهرية، وأي الإجراءات أهم — ثم خصّص البرنامج تبعًا لذلك.",
    },
    objectives: [
      { en: "Walk into a new client's industry with the right questions already formed.", ar: "الدخول إلى صناعة عميل جديد وأنت تحمل الأسئلة الصحيحة مسبقًا." },
      { en: "Connect industry economics to the specific assertions most likely to fail.", ar: "ربط اقتصاديات الصناعة بالتأكيدات الأكثر احتمالًا للفشل." },
    ],
    risks: [
      { en: "Applying a generic audit program to a specialized industry — the procedures answer the wrong questions.", ar: "تطبيق برنامج مراجعة عام على صناعة متخصصة — الإجراءات تجيب عن أسئلة خاطئة." },
      { en: "Missing the industry's regulatory layer (CBE, FRA, EFSA, NTRA…) and the disclosure requirements it adds.", ar: "تفويت الطبقة التنظيمية للصناعة (البنك المركزي، الرقابة المالية، الرقابة على التأمين، الاتصالات…) ومتطلبات الإفصاح التي تضيفها." },
      { en: "Stopping at this working summary when the Sector Risk Library in the app holds the deep profile for each industry — 20 sectors with tailored procedures, ISA 540 estimates, going-concern indicators and an AI analyst for any industry not covered.", ar: "التوقف عند هذا الملخص العملي بينما تحتفظ مكتبة مخاطر القطاعات في التطبيق بالملف العميق لكل صناعة — 20 قطاعًا بإجراءات مصممة وتقديرات ISA 540 ومؤشرات الاستمرارية ومحلل ذكي لأي صناعة غير مغطاة." },
    ],
    documents: [
      { en: "Industry regulator reports and circulars applicable this year", ar: "تقارير الجهات المنظمة للصناعة وتعليماتها المطبقة هذا العام" },
      { en: "Sector benchmarking data (margins, turnover ratios) for analytical procedures", ar: "بيانات المقارنة القطاعية (الهوامش، معدلات الدوران) للإجراءات التحليلية" },
    ],
    procedures: [
      {
        id: "industry-1",
        ref: "ISA/ESA 315",
        text: {
          en: "BANKS & FINANCIAL INSTITUTIONS: expected-credit-loss models (ECL) under IFRS 9/EAS, credit-file documentation, regulatory ratios (CBE), income recognition on facilities, restructuring modifications, and Treasury fair values. Significant risks: ECL model judgment, evergreening (lending to repay), NPL classification shifts.",
          ar: "البنوك والمؤسسات المالية: نماذج الخسائر الائتمانية المتوقعة (IFRS 9)، وتوثيق ملفات الائتمان، والنسب الرقابية (البنك المركزي)، والإيراد على التسهيلات، وتعديلات إعادة الجدولة، والقيم العادلة للخزانة. المخاطر الجوهرية: حكم النموذج، والإقراض لسداد قروض قائمة، وتغيير تصنيف التعثر.",
        },
      },
      {
        id: "industry-2",
        ref: "ISA/ESA 315",
        text: {
          en: "MANUFACTURING: inventory existence and valuation (obsolescence, NRV, cost absorption), WIP percentage-of-completion, scrap/rework controls, and capitalization of costs into inventory. Watch for: overhead absorption smoothing profit, slow-moving stock in remote warehouses, and physical-vs-book divergence at cut-off.",
          ar: "التصنيع: وجود المخزون وتقييمه (التقادم، صافي القيمة البيعية، استيعاب التكاليف)، ونسبة إتمام تحت التشغيل، وضوابط الهدر وإعادة الشغل، ورأسمالية التكاليف داخل المخزون. راقب: تمهيد الربح عبر استيعاب التكاليف غير المباشرة، والمخزون بطيء الحركة في مخازن نائية، والانحراف بين الفعلي والدفتري عند الاستقطاع.",
        },
      },
      {
        id: "industry-3",
        ref: "ISA/ESA 315",
        text: {
          en: "RETAIL & FMCG: revenue cut-off and returns provisions, franchisee and consignment stock, promotional rebates and trade spend, shrinkage (theft/damage), loyalty-point liabilities, and multi-cashier cash controls. Data analytics on daily Z-reports vs deposits is the highest-yield procedure.",
          ar: "التجزئة والسلع الاستهلاكية: استقطاع الإيرادات ومخصصات المرتجعات، ومخزون الوكالة والأمانة، وخصومات العروض وإنفاق التجارة، والفاقد (سرقة/تلف)، والتزامات نقاط الولاء، وضوابط النقد متعدد الصناديق. تحليل تقارير الإقفال اليومية مقابل الإيداعات هو الإجراء الأعلى مردودًا.",
        },
      },
      {
        id: "industry-4",
        ref: "ISA/ESA 315",
        text: {
          en: "CONSTRUCTION & REAL ESTATE: percentage-of-completion revenue (cost-to-cost), contract assets/liabilities, retention monies, variation orders and claims (heavy judgment), land bank valuation, pre-sale off-plan revenue rules, and joint-venture accounting. Watch: cost-to-cost manipulation via advance purchases, capitalized idle costs, and unapproved variations recognized as revenue.",
          ar: "التشييد والعقارات: إيراد نسبة الإتمام (التكلفة إلى التكلفة)، وأصول والتزامات العقود، ومبالغ محتجزة، وأوامر التغيير والمطالبات (حكم مهني كثيف)، وتقييم الأراضي، وقواعد بيع على الخارطة، ومحاسبة المشاريع المشتركة. راقب: التلاعب بالنسبة عبر مشتريات مسبقة، ورأسمالة تكاليف تعطل، وإثبات أوامر تغيير غير معتمدة كإيراد.",
        },
      },
      {
        id: "industry-5",
        ref: "ISA/ESA 315",
        text: {
          en: "HEALTHCARE & PHARMACIES: revenue completeness (cash patients, insurance receivables, third-party tariffs), drug expiry provisions, consignment stock from distributors, medical-malpractice contingencies, and regulator (MoH/EDA) compliance. Insurance receivables aging and tariff-difference reconciliation usually hold the misstatements.",
          ar: "الرعاية الصحية والصيدليات: اكتمال الإيراد (مرضى نقديون، ذمم شركات التأمين، تعريفات الأطراف)، ومخصصات انتهاء صلاحية الأدوية، ومخزون الأمانة من الموزعين، والتزامات أخطاء الممارسة، والالتزام بوزارة الصحة وهيئة الدواء. أعمار ذمم التأمين ومطابقة فروق التعريفات هي موطن التحريفات عادة.",
        },
      },
      {
        id: "industry-6",
        ref: "ISA/ESA 315",
        text: {
          en: "TECHNOLOGY & SOFTWARE: revenue recognition for multi-element contracts (license + implementation + SaaS), capitalized development costs (IAS 38 criteria), deferred revenue, user-metric claims, and impairment of acquired goodwill/intangibles. Watch the criteria memo for capitalization: technical feasibility arguments are where abuse lives.",
          ar: "التقنية والبرمجيات: الاعتراف بإيراد العقود متعددة العناصر (ترخيص + تنفيذ + اشتراك سحابي)، ورأسمالية تكاليف التطوير (معايير IAS 38)، والإيراد المؤجل، ومزاعم أعداد المستخدمين، وانهيار قيمة الشهرة والأصول غير الملموسة المقتناة. راقب مذكرة معايير الرأسمالية: الجدل حول الجدوى الفنية هو مسكن التجاوزات.",
        },
      },
      {
        id: "industry-7",
        ref: "ISA/ESA 315",
        text: {
          en: "IMPORT & TRADING: customs valuation and FX exposure, LC bank charges and interest capitalization, goods-in-transit cut-off, related-party purchases at non-market prices, and duty-drawback receivables. Reconcile the customs ledger to the GL line by line — it is rarely done and always finds something.",
          ar: "الاستيراد والتجارة: التقييم الجمركي والتعرض للعملات، ومصاريف خطابات الاعتماد ورأسمالة فوائدها، واستقطاع البضائع في الطريق، والمشتريات من أطراف ذات علاقة بأسعار غير السوق، وذمم استرداد الرسوم. طابق دفتر الجمارك مع الدفتر العام سطرًا سطرًا — نادرًا ما يُفعل ودائمًا يكشف شيئًا.",
        },
      },
      {
        id: "industry-8",
        ref: "ISA/ESA 315",
        text: {
          en: "AGRICULTURE & FOOD: biological asset valuation (fair value less costs to sell under IAS 41), crop-cycle cost timing, government grants and subsidies recognition, perishable inventory, and food-safety recall contingencies. Fair value models for biological assets are a standing significant risk.",
          ar: "الزراعة والأغذية: تقييم الأصول البيولوجية (القيمة العادلة ناقصة تكاليف البيع وفق IAS 41)، وتوقيت تكاليف الدورة الزراعية، والاعتراف بالمنح والدعم الحكومي، والمخزون سريع التلف، والتزامات سحب المنتجات لأسباب سلامة الغذاء. نماذج القيمة العادلة للأصول البيولوجية خطر جوهري قائم دائمًا.",
        },
      },
      {
        id: "industry-9",
        ref: "ISA/ESA 315",
        text: {
          en: "TOURISM & HOSPITALITY: seasonality of revenue and its cut-off, OTA (booking platform) commissions and chargebacks, all-inclusive cost allocation, hotel FF&E reserve accounting, and occupancy-tax liabilities. Daily occupancy reports reconciled to PMS system exports close the completeness gap.",
          ar: "السياحة والضيافة: موسمية الإيراد واستقطاعه، وعمولات منصات الحجز والاسترجاعات، وتوزيع تكاليف الشامل، ومحاسبة احتياطي الأثاث والمعدات، والتزامات ضريبة الإشغال. مطابقة تقارير الإشغال اليومية مع مخرجات نظام إدارة الفندق تغلق فجوة الاكتمال.",
        },
      },
      {
        id: "industry-10",
        ref: "ISA/ESA 315",
        text: {
          en: "GROUPS & HOLDING COMPANIES: consolidation scope, intercompany eliminations, uniform accounting policies, component auditor instructions (ISA 600), goodwill allocation, and dividend flows. Unreconciled intercompany balances are the classic group-level misstatement — start the elimination matrix early.",
          ar: "المجموعات والشركات القابضة: نطاق التوحيد، واستبعادات المعاملات المتبادلة، وتوحيد السياسات المحاسبية، وتعليمات مراجعي المكونات (ISA 600)، وتوزيع الشهرة، وتدفقات التوزيعات. الأرصدة المتبادلة غير المسواة هي التحريف الكلاسيكي على مستوى المجموعة — ابدأ مصفوفة الاستبعاد مبكرًا.",
        },
      },
      {
        id: "industry-11",
        ref: "ISA/ESA 315",
        text: {
          en: "MICROFINANCE & CONSUMER LENDING: portfolio ECL under IFRS 9 with limited history, write-off policies vs regulatory rules, refinancing chains hiding delinquency, and interest income on non-performing loans. Re-age a sample of the portfolio against repayment data — the roll-rate analysis tells the truth.",
          ar: "التمويل الأصغر والإقراض الاستهلاكي: الخسائر المتوقعة للمحفظة وفق IFRS 9 بتاريخ محدود، وسياسات الشطب مقابل القواعد الرقابية، وسلاسل إعادة التمويل التي تخفي التعثر، وإيراد الفوائد على القروض المتعثرة. أعِد حساب عمر عينة من المحفظة مقابل بيانات السداد — تحليل معدلات الانتقال يقول الحقيقة.",
        },
      },
      {
        id: "industry-12",
        ref: "ISA/ESA 315",
        text: {
          en: "For ANY industry not listed: open the Sector Risk Library and ask its AI Industry Risk Analyst — type the industry and get a full 16-section profile (accounts, risks, fraud flags, Egyptian regulation, ratios, procedures, KAMs, ISA 540 estimates, ISA 570 indicators) grounded in live sources — then stress it with the three planning questions: where does money enter, where does judgment touch numbers, what could the regulator re-open next year?",
          ar: "لأي صناعة غير مدرجة: افتح مكتبة مخاطر القطاعات واسأل محللها الذكي — اكتب اسم الصناعة واحصل على ملف كامل من 16 قسمًا (البنود، المخاطر، أعلام الاحتيال، التنظيم المصري، النسب، الإجراءات، القضايا الجوهرية، تقديرات ISA 540، مؤشرات ISA 570) مستندًا إلى مصادر حية — ثم أجهده بأسئلة التخطيط الثلاثة: من أين يدخل المال، وأين يلمس الحكم الأرقام، وما الذي قد يفتحه التنظيم العام القادم؟",
        },
      },
    ],
    pitfalls: [
      { en: "Copying last year's industry memo without checking what changed: new regulations, new competitors, new funding.", ar: "نسخ مذكرة الصناعة للسنة السابقة دون فحص ما تغيّر: تنظيمات جديدة، ومنافسون جدد، وتمويل جديد." },
      { en: "Industry knowledge kept in the partner's head instead of written into the risk assessment the team works from.", ar: "معرفة الصناعة محبوسة في رأس الشريك بدل كتابتها في تقييم المخاطر الذي يعمل به الفريق." },
      { en: "Never opening the Sector Risk Library's deep profile (or its AI analyst for unusual industries) — working from generic instinct on a specialized client.", ar: "عدم فتح الملف العميق في مكتبة مخاطر القطاعات (أو المحلل الذكي للصناعات غير المعتادة) — والعمل بالحدس العام مع عميل متخصص." },
    ],
    standards: ["ISA 315 (2019)", "ISA 600", "ISA 540 (Revised)", "IFRS 9", "IAS 41", "IAS 38", "ESA 315", "ESA 540"],
  },
]
