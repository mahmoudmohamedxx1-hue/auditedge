import type { QuizQuestion } from "@/lib/audit-types"

/** P1-8 depth pass + quick wins:
 *  - a new capstone workshop lesson for ISA-570 (EN; its AR edition ships in
 *    ar-parity-2 under the same title)
 *  - enrichment sections appended to the thinnest in-house lessons
 *  - Arabic study notes for the 8 near-empty YT-LVHL lessons
 *  - mid-course checkpoint quizzes for all 8 in-house courses
 *  - supplementary flags for external imports (P1-6) */

/** A full EN lesson appended to ISA-570 (capstone workshop). */
export const ISA570_WORKSHOP = {
  courseCode: "ISA-570",
  moduleTitle: "Reporting Scenarios",
  lesson: {
    title: "Workshop: The Covenant Winter",
    durationMin: 16,
    content: {
      intro:
        "One integrated case pulls the whole standard together: a mid-cap Egyptian textile exporter, a stressed covenant, a December inventory write-down, and a bank waiver that exists only as an unsigned draft.",
      sections: [
        {
          heading: "The file",
          body: "Revenue 612m EGP (exports 251m to a related distributor), PBT collapsed to 8.9m, and management's covenant EBITDA of 71m adds back an 11.3m December inventory write-down and capitalizes 4.0m of dye costs the industry expenses. The syndicate's Q3 computation reads 2.47x against a 2.50x limit — while your recomputation without the questionable add-backs lands near 56m EBITDA and a likely breach. On 20 February the bank sends a reservation-of-rights letter; the waiver side-letter remains unsigned and conditional on delivering compliant audited statements.",
        },
        {
          heading: "The walk-through",
          body: "Step 1 — recompute the covenant economics and separate contractual definition from economic substance. Step 2 — treat the unsigned waiver as what it is: a mitigation factor to test for enforceability, not a fact to assume. Step 3 — fold the reservation letter in as both a subsequent event (ISA 560) and going-concern evidence (ISA 570). Step 4 — judge the adequacy of the draft disclosure: does the reader see the covenant number, the letter, and the management plan? Step 5 — select the reporting path: material uncertainty paragraph if the basis holds with adequate disclosure; modification if it does not. Then compare your answers against the interactive Engagement Simulation in this app — same fact pattern, your judgment graded decision by decision.",
        },
      ],
      keyPoints: [
        "Recompute covenant EBITDA before accepting management's number — add-backs distort what the ratio monitors.",
        "Unsigned conditional waivers are evidence to evaluate, never facts to assume.",
        "Post-year-end bank letters are simultaneously ISA 560 events and ISA 570 evidence.",
        "The reporting outcome follows the disclosure test: MUM paragraph if adequate; modification if not.",
      ],
      example: {
        title: "The 4m question",
        context:
          "Management argues capitalized dye costs are 'industry practice' and asks you to accept the covenant EBITDA as contractually defined.",
        analysis:
          "The covenant's contractual definition governs the bank relationship — but your going-concern evaluation addresses substance: an EBITDA propped by policy choices the framework would not make is a stress signal, and the audit must say so in the working papers regardless of how the loan agreement computes its ratio.",
      },
      takeaway:
        "Going concern is decided in this order: numbers, evidence, basis, disclosure, report — never the reverse.",
    },
  },
}

/** Enrichment blocks appended to thin in-house lessons (keyed by title). */
export const ENRICHMENTS: Record<string, { heading: string; body: string; bullets?: string[] }> = {
  "Audit Committees & Governance Requirements": {
    heading: "Field notes from Egyptian practice",
    body: "In Egyptian owner-managed groups the committee's independence is the first thing an engagement senior quietly tests: who sets the agenda, do members get papers in advance, and what happened to last year's audit adjustments? A committee that has never pushed back on management is a channel, not a control. Document the relationship you actually observe — meeting cadence, the substance of private sessions, follow-through on prior-year points — because ISA 260 communication duties land on the governance layer you can evidence, not the one the organization chart promises.",
    bullets: [
      "Private sessions without management are the single best indicator of a real committee.",
      "Track last year's unresolved points — repeated open findings are a governance red flag.",
      "When the chair is related to the founder, escalate sensitive matters to the full board in writing.",
    ],
  },
  "Fraud Risk Factors: Recognition Patterns": {
    heading: "Field notes from Egyptian practice",
    body: "The Egyptian mid-cap pattern file is remarkably stable across industries: revenue concentrated in one 'family' distributor, receivables aging that triples in a devaluation year, dyes and raw materials held at cost long after obsolescence, and a prior-year qualification that the new auditor inherits without reading. Layer onto this the devaluation cycles — a 2023-2026 reality — which give otherwise honest managements both the motive (covenant relief) and the opportunity (valuation judgments) to stretch. Your pattern-reading is the product: write the observed clusters into the risk assessment, not the generic textbook list.",
    bullets: [
      "Devaluation years spike both motive and judgment surface — recalibrate revenue and ECL risk.",
      "A prior-year qualification is a map of where to start, not a footnote.",
      "Cluster three or more factors and the file must show a specific response, not a standard program.",
    ],
  },
  "The Analytics Maturity Ladder": {
    heading: "Field notes from Egyptian practice",
    body: "Most Egyptian audit teams today operate at the first rung — descriptive dashboards assembled in Excel at the end of fieldwork — and the practical ceiling is set by data access, not tools: clients export from ERPs with inconsistent chart-fields, and the auditor's first analytics project is usually a data-cleaning project. Climb deliberately: pick one high-volume account (revenue or payroll), build a repeatable extraction with defined fields, and automate the simplest tests (duplicates, round amounts, period-end clustering) before attempting anything predictive. The ladder is climbed one account at a time.",
    bullets: [
      "Data access, not tooling, is the binding constraint in Egyptian engagements.",
      "Standardize the extraction fields once and reuse across clients — the asset compounds.",
      "Automate the boring tests first: duplicates, rounders, weekend postings, threshold-clustering.",
    ],
  },
  "Procedures When Doubt Arises": {
    heading: "Field notes from Egyptian practice",
    body: "In Egyptian bank-covenant situations the evidence hierarchy is brutally practical: a signed waiver letter outranks every narrative, and an unsigned draft outranks nothing. Ask directly for the syndicate's reservation letters and read the default clauses yourself — the CFO's paraphrase of 'the bank is comfortable' has a well-earned reputation. Forecast scrutiny follows one rule: re-run management's cash model with collection days at the deteriorated actuals, not the historical average, and watch what happens to the minimum cash balance. That single adjustment decides more opinions than any other number in the file.",
    bullets: [
      "Read the facility agreement's default and waiver clauses yourself — never rely on the paraphrase.",
      "Re-run the cash forecast at deteriorated collection actuals; that run decides the opinion.",
      "Unconditional support beats intentions: match every mitigation item to signed evidence.",
    ],
  },
}

/** Arabic study notes for the 8 near-empty YT-LVHL lessons (keyed by title). */
export const YT_LVHL_NOTES: Record<string, { heading: string; body: string; bullets?: string[] }> = {
  "اعداد القوائم المالية ومراجعة الحسابات بالإكسل |  مكاتب المحاسبة في مصر |  Audit Approach": {
    heading: "ملاحظات دراسية",
    body: "إعداد القوائم المالية ومراجعتها في بيئة إكسل يحمل مخاطر بنيوية معروفة: معادلات مقطوعة، ومراجع يدوي للصيغ، ونسخ متعددة من الملف تتنازع الصدارة. يتناول الفيديو منهج مكاتب المحاسبة المصرية في بناء ملف إكسل مراجعي — من ميزان المراجعة إلى القوائم النهائية — وهو مدخل عملي لفهم كيف تترابط أوراق العمل قبل الانتقال إلى أدوات متقدمة.",
    bullets: ["ابدأ من ميزان مراجعة مربوط بالقيود.", "وثّق كل صيغة ورقة عمل قابلة للتتبع.", "خصص ورقة تسويات منفصلة لكل قائمة."],
  },
  "إعداد ملف المراجعة الإلكتروني  | Excel Audit Approach | شرح إجراءات وعملية المراجعة": {
    heading: "ملاحظات دراسية",
    body: "الملف الإلكتروني في إكسل ليس أرشيفًا رقميًا فحسب بل هيكل رقابي: فهرس يربط كل ورقة ببرنامج المراجعة، وعلامات فحص موحدة بدلالات مكتوبة، وتصديق منفذ ومراجع على كل ورقة. يشرح الفيديو تسلسل بناء الملف من قائمة المحاسبة إلى أوراق المجاميع والتسويات — وهو التطبيق المصري الشائع في الشركات الصغيرة والمتوسطة قبل الأنظمة المتكاملة.",
    bullets: ["فهرس الملف هو خريطته — أورق بلا مرجع ميتة.", "علامات الفحص بلا مفتاح دلالة شفرة.", "ابنِ قالبًا موحدًا يعاد استخدامه بين المهام."],
  },
  "شرح تسلسل إجراءات المراجعة وتقييم المخاطر |  تقرير مراقب الحسابات الجديد": {
    heading: "ملاحظات دراسية",
    body: "يتناول الفيديو التسلسل المنهجي: فهم المنشأة، ثم تقييم المخاطر، ثم تصميم الاستجابات، وصولًا إلى صياغة تقرير مراقب الحسابة وفق الصيغ الحديثة. الربط بين الخطوات هو جوهر المعايير الدولية: كل إجراء في الملف يجب أن يمكن تتبعه إلى خطر قُيّم، وكل فقرة في التقرير إلى أدلة جُمعت — وهو مضمون المعايير المصرية المقابلة.",
    bullets: ["التسلسل: فهم ← تقييم ← استجابة ← تقرير.", "لا إجراء بلا خطر موثق يقابله.", "صيغ التقرير الجديدة تميز المادة الجوهرية عن فقرات الإبراز."],
  },
  "اعداد القوائم الختامية ومراجعتها بالاكسل  | ملف المراجعة الإلكتروني 2 | Excel Audit": {
    heading: "ملاحظات دراسية",
    body: "الجزء الثاني من سلسلة ملف المراجعة بالإكسل: من الأرصدة المراجعة إلى القوائم الختامية وتسويات ما بعد المراجعة، مع أمثلة على أوراق الإهلاك والمخصصات والذمم. القيمة الدراسية في تتبع أثر كل تسوية على القوائم الثلاث دفعة واحدة — مهارة الترابط التي تفصل المحاسب الفاهم عن مدخل البيانات.",
    bullets: ["كل تسوية تُتبع أثرها في القوائم الثلاث.", "ورقة ربط واحدة تربط الدفتر بالقوائم الختامية.", "القيود المقترحة توثق بمصدرها وسببها."],
  },
  "مطلوبات مراجعة القوائم المالية | قراءة وتحليل القوائم المالية | Audit Requirements": {
    heading: "ملاحظات دراسية",
    body: "قراءة القوائم قبل مراجعتها ليست شكليًا: الإلمام بأدوات التحليل المالي — النسب، الاتجاهات، المقارنات القطاعية — يوجه عين المراجع إلى المفارقات التي تستحق الفحص. يستعرض الفيديو المطلوبات الأساسية لمراجعة القوائم: الأدلة، الاستقصاء، الفحص الفعلي، والمصادقات، وكيف تُبنى عليها الملاحظات.",
    bullets: ["التحليل الأولي يوجه الاختبار التفصيلي.", "النسب تُقرأ في سياقها القطاعي والزمني.", "لكل تأكيد أداته من أدلة المراجعة."],
  },
  "تعرف على شهادة SOCPA والشهادات الاخرى التي تقدمها | الهيئة السعودية للمراجعين والمحاسبين": {
    heading: "ملاحظات دراسية",
    body: "جولة على شهادات الهيئة السعودية للمراجعين والمحاسبين والمقارنة مع الشهادات المهنية العالمية — مفيدة للمراجع المصري في تقدير مسارات التأهل الإقليمية، وفهم توجهات المواءمة الخليجية مع المعايير الدولية. المقارنة تشمل متطلبات الخبرة والامتحانات وأسواق العمل.",
    bullets: ["شهادات SOCPA تستهدف السوق السعودي والخليجي.", "المواءمة مع المعايير الدولية سمة مشتركة إقليميًا.", "قارن متطلبات الخبرة قبل الترشيح."],
  },
  "التأمينات الاجتماعية | إجراءات المراجعة | الاجر الاساسي | الاجر المتغير": {
    heading: "ملاحظات دراسية",
    body: "مراجعة التأمينات الاجتماعية في مصر تدور حول فجوة الأجر التأميني مقابل الأجر الفعلي: الأساس وال متغير، والخصم والتحصيل، والفحص المحتمل من الهيئة. يشرح الفيديو الإجراءات العملية — من كشوف الأجور إلى مطابقات القيد الشهري — وهي منطقة أخطاء متكررة عند العملاء.",
    bullets: ["قارن الأجر التأميني بالأجر الفعلي دوريًا.", "مطابقة القيد الشهري بكشوف الهيئة إلزامية.", "الفجوات تتحملها المنشأة فادحًا في الفحص."],
  },
  "سلسلة إدارة عمليات المراجعة  | بشكل عملي": {
    heading: "ملاحظات دراسية",
    body: "إدارة مهمة المراجعة عملية قبل أن تكون فنية: جدولة الفريق، وتوزيع الأوراق، ومتابعة ساعات الميزانية، ومراجعة الأقران قبل تاريخ التقرير. السلسلة تقدم إدارة العمليات بأسلوب تطبيقي مصري — الجدولة حول مواسم القوائم وتدفق المستندات من العميل.",
    bullets: ["التخطيط الزمني العكسي من تاريخ التقرير يوجه كل شيء.", "أول يوم ميداني بلا قائمة مستندات مطلوبة يوم ضائع.", "المراجعة بمنطق المخاطر قبل التواريخ."],
  },
}

/** Mid-course checkpoint quizzes for the 8 in-house courses (quick win:
 *  doubles the assessment surface; each is also mirrored into the bank). */
export const CHECKPOINT_QUIZZES: Record<string, { title: string; questions: QuizQuestion[] }> = {
  "ISA-315": {
    title: "ISA 315 — Mid-course Checkpoint",
    questions: [
      { question: "Which procedure is specifically required to obtain an understanding of the entity?", options: ["Inquiry of management and others within the entity combined with analytical procedures", "External confirmation of receivables", "Physical inventory observation", "Recalculation of depreciation"], correctIndex: 0, explanation: "Understanding comes from inquiry + analytics + observation/inspection; confirmations and recalculation are substantive tools, not understanding tools." },
      { question: "The IT environment under ISA 315 (Revised) must be understood in terms of:", options: ["Applications in use, the IT-dependent controls, and how information flows to financial reporting", "The brand of servers", "The IT department's headcount", "The vendor's stock price"], correctIndex: 0, explanation: "The auditor maps applications, IT-dependent controls, and information flows — that is what makes IT audit-relevant." },
      { question: "Inherent risk factors in the 2019 spectrum include:", options: ["Complexity, subjectivity, change, and uncertainty", "Sample size, confidence level, tolerable deviation", "Fee pressure, staff turnover, deadlines", "Materiality, performance materiality, trivial threshold"], correctIndex: 0, explanation: "The spectrum's factors shape the degree of estimation uncertainty and susceptibility to management bias." },
      { question: "Which risk would ordinarily be assessed as significant without further analysis?", options: ["Revenue recognition in a December-loaded exporter with related-party distribution", "Office supplies expense", "Prepaid insurance amortization", "Petty cash float"], correctIndex: 0, explanation: "Fraud-presumed revenue + period-end loading + related-party channel stacks the significant-risk factors." },
      { question: "Walkthrough procedures primarily demonstrate:", options: ["That the auditor has identified what can go wrong and understood the design and implementation of controls", "That the balance is correct", "That the client's staff are competent", "That fees are adequate"], correctIndex: 0, explanation: "A walkthrough traces a transaction end-to-end to confirm the understanding of design AND implementation." },
    ],
  },
  "ISA-330": {
    title: "ISA 330 — Mid-course Checkpoint",
    questions: [
      { question: "Pervasive risks call for responses with:", options: ["General applicability — journal entry testing, period-end analytics, walkthroughs of the closing cycle", "Only balance-sheet detail testing", "Only receivable confirmations", "Nothing — they cannot be addressed"], correctIndex: 0, explanation: "Entity-level/pervasive risks meet entity-level procedures that cross assertions and accounts." },
      { question: "A substantive procedure performed at interim requires:", options: ["Procedures bridging to period-end — roll-forward of balances or interim-period analytics", "Nothing further", "Only a representation letter", "Doubling the interim sample"], correctIndex: 0, explanation: "Interim conclusions must survive to year-end: roll-forward or intervening-transaction testing closes the gap." },
      { question: "Detection risk is reduced by:", options: ["More persuasive procedures — closer to year-end, larger samples, external evidence", "Smaller samples", "Relying on internal audit", "Raising materiality"], correctIndex: 0, explanation: "The three levers: timing (later), extent (more), and nature (stronger evidence)." },
      { question: "Which is a test of details rather than a substantive analytic?", options: ["Vouching a sample of December export invoices to bills of lading", "Comparing monthly gross margin by market", "Regression of electricity cost on volume", "Reviewing the aging trend"], correctIndex: 0, explanation: "Tests of details examine individual items — documents, confirmations, physical inspection." },
      { question: "If controls are ineffective, the auditor:", options: ["Increases substantive work — the risk assessment changes and detection risk must fall", "Issues a qualified opinion automatically", "Relies on management's assurances", "Reduces the audit fee"], correctIndex: 0, explanation: "Failed controls → higher control risk → lower acceptable detection risk → more substantive testing." },
    ],
  },
  "IFRS-CORE": {
    title: "IFRS — Mid-course Checkpoint",
    questions: [
      { question: "The transaction price includes variable consideration:", options: ["Only to the extent it is highly probable not to reverse significantly", "At its maximum amount", "At its minimum always", "Not at all"], correctIndex: 0, explanation: "Estimate (expected value or most likely amount) then constrain against significant reversal." },
      { question: "A contract asset differs from a receivable because:", options: ["The right to consideration is conditional on something other than the passage of time", "It is always collectible", "It carries no credit risk", "It appears in equity"], correctIndex: 0, explanation: "Receivables are unconditional; contract assets still depend on future performance." },
      { question: "Stage 2 ECL treatment means:", options: ["Lifetime expected losses with interest still on the gross carrying amount", "12-month losses only", "No interest recognition", "Write-off"], correctIndex: 0, explanation: "Significant increase in credit risk → lifetime ECL, gross interest until Stage 3." },
      { question: "The right-of-use asset includes:", options: ["The lease liability, prepayments, initial direct costs, and restoration estimates", "Only the discounted payments", "The next renewal term's payments", "The asset's fair value"], correctIndex: 0, explanation: "ROU = liability + prepaid + IDC + dismantling — not renewals outside the term." },
      { question: "An impairment indicator triggers testing. Recoverable amount is:", options: ["The higher of fair value less costs of disposal and value in use", "The lower of the two", "Always book value", "Market cap"], correctIndex: 0, explanation: "The entity can always choose the better exit — hence the higher of the two measures." },
    ],
  },
  "EGY-REG": {
    title: "Egyptian Framework — Mid-course Checkpoint",
    questions: [
      { question: "The Egyptian Standards on Auditing are best described as:", options: ["Arabic ISA equivalents with Egyptian adaptations issued through the profession's standards process", "A translation of US auditing standards", "Unrelated to the ISAs", "Internal bank circulars"], correctIndex: 0, explanation: "The ESAs adopt ISA substance within the Egyptian professional/legal frame." },
      { question: "The Central Auditing Organization audits:", options: ["State bodies, public-sector entities and public funds", "All listed banks", "Multinational subsidiaries", "The profession itself"], correctIndex: 0, explanation: "The CAO is the state's audit institution — constitutionally separate from private practice." },
      { question: "A listed company's statutory auditor in Egypt is appointed by:", options: ["The ordinary general assembly", "The chairman", "FRA", "The auditors' syndicate"], correctIndex: 0, explanation: "The assembly appoints (and fixes fees) — the mandate flows from shareholders, not management." },
      { question: "Egyptian banks operate their external audits under:", options: ["A dual-auditor regime with CBE supervision", "A single-auditor model", "No external audit", "Internal audit only"], correctIndex: 0, explanation: "Banking Law 194/2020's dual-auditor regime with CBE oversight is the distinctive Egyptian feature." },
      { question: "The top corporate income tax rate in Egypt is:", options: ["22.5%", "14%", "10%", "27.5%"], correctIndex: 0, explanation: "22.5% is the standard corporate rate under the Unified Tax Law." },
    ],
  },
  "ISA-570": {
    title: "ISA 570 — Mid-course Checkpoint",
    questions: [
      { question: "Who performs the going-concern assessment?", options: ["Management, with appropriate procedures — the auditor independently evaluates it", "The auditor performs it for the client", "The bank", "The audit committee"], correctIndex: 0, explanation: "The framework assigns assessment to management; ISA 570 makes the auditor's job to evaluate that assessment." },
      { question: "Events or conditions may cast significant doubt when they include:", options: ["Recurring operating losses, working capital deficits, and covenant breaches", "A single quarter of flat revenue", "A change of auditors", "A new marketing campaign"], correctIndex: 0, explanation: "The classic financial indicators: losses, negative working capital, defaulted covenants." },
      { question: "Adequate disclosure of a material uncertainty means the opinion is:", options: ["Unmodified with a MURGC section", "Qualified", "Adverse", "Disclaimed"], correctIndex: 0, explanation: "Adequate disclosure → unmodified opinion + highlighted uncertainty." },
      { question: "Management refuses to perform or extend its assessment. The auditor faces:", options: ["A scope limitation — potentially a disclaimer", "An automatic adverse opinion", "No issue at all", "A fee renegotiation"], correctIndex: 0, explanation: "ISA 570: refusal is a limitation on evidence the standard requires — the ISA 705 ladder applies." },
      { question: "Written representations on going concern include:", options: ["Management's assessment, its plans, and their feasibility", "A profit guarantee", "The auditor's own forecast", "A bank's promise to the auditor"], correctIndex: 0, explanation: "The specific GC representations cover the assessment, the plans, and the feasibility evidence behind them." },
    ],
  },
  "EVD-500": {
    title: "Evidence — Mid-course Checkpoint",
    questions: [
      { question: "A copy of a contract held by the client is weaker evidence than the original because:", options: ["Copies can be altered without detection — originals carry stronger integrity assurance", "Copies are always forged", "Originals are prettier", "The standard forbids copies"], correctIndex: 0, explanation: "ISA 500's reliability ladder: originals over copies, external over internal, direct over relayed." },
      { question: "Oral evidence must be:", options: ["Corroborated in writing or by other evidence before conclusions rest on it", "Accepted as-is", "Ignored", "Treated as a misstatement"], correctIndex: 0, explanation: "Oral statements may inform inquiry responses but conclusions need documentary support." },
      { question: "A tick-mark legend serves to:", options: ["Explain what each mark means, who performed and reviewed the work, and when", "Decorate the schedule", "Satisfy the client", "Track printing costs"], correctIndex: 0, explanation: "Ticks are a language; the legend is their dictionary plus the performance/review trail." },
      { question: "File assembly deadline discipline exists to:", options: ["Freeze the evidence basis for the report date and protect the file's integrity", "Save storage costs", "Please the client", "Speed up billing"], correctIndex: 0, explanation: "The report rests on evidence as of the report date — post-hoc additions need documented justification." },
      { question: "Which is NOT audit documentation?", options: ["The client's draft management accounts discarded after review", "Audit programs", "Confirmation replies", "Summaries of significant judgments"], correctIndex: 0, explanation: "Superseded drafts are replaced by final versions; the file keeps the record the audit relied on." },
    ],
  },
  "ISA-240": {
    title: "ISA 240 — Mid-course Checkpoint",
    questions: [
      { question: "The auditor's fraud responsibilities include:", options: ["Obtaining reasonable assurance that the FS are free from material fraud misstatement — not detecting all fraud", "Preventing fraud", "Guaranteeing detection", "Investigating employees privately"], correctIndex: 0, explanation: "Reasonable assurance against MATERIAL misstatement due to fraud — not an all-fraud guarantee." },
      { question: "Which is a fraud risk factor related to opportunity?", options: ["One person controls pricing and can override approvals", "A personal gambling debt", "A bonus tied to profit", "Industry downturn"], correctIndex: 0, explanation: "Opportunity lives in the control structure; the others map to incentive/pressure or rationalization context." },
      { question: "The brainstorming session should occur:", options: ["Early — its output feeds the risk assessment and procedure design", "After fieldwork", "Only when fraud is found", "At the closing meeting"], correctIndex: 0, explanation: "The session's value is directional — it must precede the design of responses." },
      { question: "Significant revenue risk presumed under ISA 240 can be rebutted:", options: ["Only with documented evidence and reasoning that the risk is not present", "By management's assertion", "Never under any circumstance (this is the management-override presumption)", "By the partner verbally"], correctIndex: 0, explanation: "Revenue presumption is rebuttable with documentation; management override is the irrebuttable one." },
      { question: "Unpredictability in procedures helps because:", options: ["Management cannot pre-stage evidence for tests it cannot foresee", "It fills idle time", "It satisfies the fee budget", "Clients enjoy surprises"], correctIndex: 0, explanation: "The standard endorses unpredictability precisely to defeat pre-arranged evidence." },
    ],
  },
  "AUD-ANL": {
    title: "Analytics — Mid-course Checkpoint",
    questions: [
      { question: "The first commandment of population analytics:", options: ["Reconcile the population to the ledger and verify the extraction before testing anything", "Run the tool first, clean later", "Trust the IT department's export", "Skip reconciliation for speed"], correctIndex: 0, explanation: "Analytics on an unverified population amplify whatever errors the population contains." },
      { question: "Benford's law applies best to:", options: ["Naturally arising amounts spanning multiple orders of magnitude", "Fixed salary bands", "Assigned invoice numbers", "Contract prices set by regulation"], correctIndex: 0, explanation: "The logarithmic first-digit distribution emerges in organic, unconstrained numeric populations." },
      { question: "A model with high R² but patterned residuals suggests:", options: ["A missing variable (like seasonality) — the precision band is unreliable", "A perfect model", "That R² should be higher still", "That the data is wrong"], correctIndex: 0, explanation: "Fit without random residuals means structure remains unexplained — confidence intervals mislead." },
      { question: "Threshold-clustering (many amounts just under approval limits) points to:", options: ["Possible splitting to evade approval controls", "Coincidence always", "Good budget discipline", "A data entry habit"], correctIndex: 0, explanation: "Systematic proximity to control thresholds is a classic circumvention signature — examine vendor/day/amount patterns." },
      { question: "In inflationary Egypt, cost-series regressions must:", options: ["Deflate the series or model prices explicitly", "Ignore inflation", "Use fewer data points", "Avoid regression"], correctIndex: 0, explanation: "Without deflation the model measures price change, not cost behaviour." },
    ],
  },
}
