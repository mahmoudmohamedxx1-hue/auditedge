/** IFRS 6 — Exploration for and Evaluation of Mineral Resources */

import type { Standard } from "../types"

export const IFRS_6: Standard = {
  code: "IFRS 6",
  title: { en: "Exploration for and Evaluation of Mineral Resources", ar: "الاستكشاف والتقييم للموارد المعدنية" },
  topic: "specialized",
  effective: { en: "Effective 1 Jan 2006 · a limited-scope interim standard", ar: "سارٍ من ١ يناير ٢٠٠٦ · معيار مؤقت محدود النطاق" },
  blocks: [
    { kind: "h", text: { en: "Objective — a bridge, not a cathedral", ar: "الهدف — جسر لا كاتدرائية" } },
    {
      kind: "p",
      text: {
        en: "IFRS 6 is a deliberate stopgap: it improves (slightly) the accounting for exploration & evaluation (E&E) expenditure while the IASB finishes its extractive-activities project. It permits CONTINUED use of existing policies but demands limited improvements: an impairment test tailored to E&E assets and some disclosure. Nothing grand — and everything examinable is in the boundaries and the impairment mechanics.",
        ar: "IFRS 6 صمام مقصود: يحسّن (بقدر محدود) محاسبة نفقات الاستكشاف والتقييم بانتهاء مشروع الأنشطة الاستخراجية. ويجيز الاستمرار بالسياسات القائمة لكنه يطلب تحسينات محدودة: اختبار انخفاض مخصص لأصول الاستكشاف والتقييم وبعض الإفصاح. لا شيء مهيب — وكل الممتحن في الحدود وآلية الانخفاض.",
      },
    },
    {
      kind: "p",
      text: {
        en: "The pre-IFRS 6 world was chaos: some entities expensed every drilling dollar, others capitalised whole exploration portfolios, and comparability between miners was impossible. Rather than force a single answer mid-project, the IASB froze the diversity but built a fence around it — the E&E asset gets a special impairment regime from the moment it is created, and the moment technical feasibility and commercial viability are demonstrated, the asset must leave IFRS 6 and rejoin the ordinary corpus (IAS 16 and IAS 38). The standard is short precisely because it is a holding action.",
        ar: "كان عالم ما قبل IFRS 6 فوضى: منشآت تحمّل كل دولار حفر مصروفًا، وأخرى رسملت محافظ الاستكشاف كلها، واستحالت المقارنة بين شركات التعدين. وبدل فرض إجابة واحدة في منتصف المشروع، جمّد مجلس المعايير التنوع لكنه أسور حوله سياجًا — فالأصل الاستكشافي يلقى نظام انخفاض خاصًا منذ نشأته، وبمجرد إثبات الجدوى الفنية والتجارية يجب أن يغادر الأصل IFRS 6 ليعود إلى المتن المعتاد (IAS 16 وIAS 38). والمعيار قصير لأنه عملٌ دفاعي بالضبط.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The standard has been 'interim' since 2005 and still is: the extractives project never completed — do not expect its withdrawal in a question anytime soon.",
        ar: "المعيار «مؤقت» منذ ٢٠٠٥ وما زال: مشروع الأنشطة الاستخراجية لم يكتمل — لا تنتظر إلغاءه قريبًا في سؤال.",
      },
    },
    { kind: "h", text: { en: "Scope — where E&E begins and ends", ar: "النطاق — حيث يبدأ الاستكشاف وينتهي" } },
    {
      kind: "tree",
      root: { en: "The mineral value chain", ar: "سلسلة القيمة المعدنية" },
      branches: [
        {
          when: { en: "Before E&E: acquiring mineral RIGHTS, geological studies over an area of interest", ar: "قبل الاستكشاف: اقتناء حقوق التعدين والدراسات الجيولوجية العامة" },
          then: { en: "IAS 16 / IAS 38 territory — NOT IFRS 6", ar: "أرض IAS 16/38 — لا IFRS 6", red: true },
        },
        {
          when: { en: "EXPLORATION & EVALUATION: searching for resources (drilling, trenching, sampling) + determining technical feasibility & commercial viability after a discovery", ar: "الاستكشاف والتقييم: البحث عن الموارد (حفر، أخذ عينات) + تحديد الجدوى الفنية والتجارية بعد اكتشاف" },
          then: { en: "IFRS 6 — the E&E assets live here", ar: "IFRS 6 — أصول الاستكشاف هنا", red: true },
        },
        {
          when: { en: "After: the MINERAL RESERVE is determined technically feasible & commercially viable → development, extraction, processing", ar: "بعد: يثبت أن الاحتياطي مجدٍ فنيًا وتجاريًا ← التطوير والاستخراج والمعالجة" },
          then: { en: "IAS 16 PPE (mine development) & IAS 2 (production inventories) — the E&E asset RECLASSIFIES out of IFRS 6", ar: "IAS 16 (تطوير المنجم) وIAS 2 (مخزون الإنتاج) — ويعاد تبويب أصل الاستكشاف خارج IFRS 6", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The boundary discipline is the exam's favourite cut. EXPLORATION is the search: the licence, the seismic work, the exploratory drilling, the sampling. EVALUATION is the aftermath of a discovery: the studies and drilling that determine whether the find is technically feasible and commercially viable to extract. Once BOTH tests pass, the asset stops being 'information about an unknown' and becomes 'a mine under construction' — and IFRS 6 hands it over. Costs of MINERAL RIGHTS acquired before the search, and development/construction after feasibility, sit outside this standard from the start.",
        ar: "انضباط الحدود هو القطعة المفضلة للامتحان. الاستكشاف هو البحث: الترخيص، والأعمال السيزمية، والحفر الاستكشافي، وأخذ العينات. والتقييم ما بعد الاكتشاف: الدراسات والحفر التي تحدد ما إذا كان الوجد قابلًا للاستخراج فنيًا ومجديًا تجاريًا. وبمجرد اجتياز الاختبارين يتوقف الأصل عن كونه «معلومةً عن مجهول» ويصير «منجمًا تحت الإنشاء» — فيسلّمه IFRS 6. وتكاليف حقوق التعدين المقتناة قبل البحث، والتطوير والإنشاء بعد الجدوى، تقع خارج هذا المعيار من البداية.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "IN (the E&E window): exploration licences acquired during the search, exploratory drilling, trenching, sampling, geological/geochemical studies, evaluation drilling and feasibility studies", ar: "داخل النطاق (نافذة الاستكشاف والتقييم): تراخيص الاستكشاف المقتناة خلال البحث، والحفر الاستكشافي، والخنادق، والعينات، والدراسات الجيولوجية والجيوكيميائية، وحفر التقييم ودراسات الجدوى" },
        { en: "OUT (before): mineral rights held before the search begins — IAS 16 / IAS 38", ar: "خارج النطاق (قبل): حقوق التعدين قبل بدء البحث — IAS 16 / IAS 38" },
        { en: "OUT (after): mine development, infrastructure, production stripping, processing — IAS 16 / IAS 2", ar: "خارج النطاق (بعد): تطوير المنجم والبنية التحتية وكشف الأغطية أثناء الإنتاج والمعالجة — IAS 16 / IAS 2" },
        { en: "OUT: the sale proceeds and revenue of produced minerals (IFRS 15), and inventories of extracted ore (IAS 2)", ar: "خارج النطاق: متحصلات ومعالجة بيع المعادن المستخرجة (IFRS 15)، ومخزون الخام (IAS 2)" },
      ],
    },
    { kind: "h", text: { en: "Key definitions", ar: "التعريفات المفتاحية" } },
    {
      kind: "list",
      items: [
        { en: "EXPLORATION FOR AND EVALUATION OF MINERAL RESOURCES — the search, plus the determination of technical feasibility & commercial viability after a discovery", ar: "الاستكشاف والتقييم للموارد المعدنية — البحث، مضافًا إليه تحديد الجدوى الفنية والتجارية بعد اكتشاف" },
        { en: "EXPLORATION AND EVALUATION ASSETS — expenditures incurred on E&E BEFORE feasibility & viability are demonstrated (plus the legal right to explore where expenditure is incurred because the entity has that right)", ar: "أصول الاستكشاف والتقييم — النفقات المتكبدة على الاستكشاف والتقييم قبل إثبات الجدوى والجدوى التجارية (مع الحق القانوني في الاستكشاف حيث تكبدت النفقة بوجود ذلك الحق)" },
        { en: "TECHNICAL FEASIBILITY & COMMERCIAL VIABILITY — the twin tests whose demonstration ends the E&E stage (and starts IAS 16 depreciation and reclassification)", ar: "الجدوى الفنية والتجارية — الاختباران اللذان يثبت إثباتهما نهاية مرحلة الاستكشاف (وبدء إهلاك IAS 16 وإعادة التبويب)" },
        { en: "PRODUCTION — extracting the mineral and processing it to saleable form — IAS 2 / IAS 16 territory", ar: "الإنتاج — استخراج المعدن ومعالجته حتى صيغة قابلة للبيع — أرض IAS 2 / IAS 16" },
        { en: "CGU for the impairment test — an E&E asset OR a cash-generating unit NO LARGER THAN AN OPERATING SEGMENT (the deliberate smallness rule)", ar: "وحدة توليد النقد لاختبار الانخفاض — أصل استكشاف أو وحدة لا أكبر من قطاع تشغيلي واحد (قاعدة الصغر المتعمدة)" },
      ],
    },
    { kind: "h", text: { en: "Recognition — the unusual freedom", ar: "الاعتراف — الحرية غير المعتادة" } },
    {
      kind: "list",
      items: [
        { en: "IFRS 6 EXEMPTS E&E assets from IAS 38's criteria: an entity may keep its policy of expensing or capitalising E&E spend (a rare 'policy choice' zone), applied consistently", ar: "يعفي IFRS 6 أصول الاستكشاف من معايير IAS 38: يجوز الإبقاء على سياسة التحميل مصروفًا أو الرسملة (بثبات) — منطق اختيار نادر" },
        { en: "Classification of capitalised E&E: TANGIBLE (the rig used for exploration) or INTANGIBLE (drilling rights to an area) — by the nature of the asset; both routes exist", ar: "تبويب المرمل: ملموس (منصة استكشاف) أو غير ملموس (حقوق حفر منطقة) — بطبيعة الأصل" },
        { en: "Liabilities for E&E (restoration/dismantling) follow IAS 37 / IFRIC 1 — the IFRS 6 freedom stops at assets", ar: "التزامات الاستكشاف (فك/إعادة حالة) تخضع لـIAS 37 — فحرية IFRS 6 تقف عند الأصول" },
        { en: "Present E&E assets as SEPARATE line items (tangible vs intangible classes) — do not bury them in general PPE", ar: "تعرض أصول الاستكشاف سطورًا مستقلة — لا تدفنها ضمن الممتلكات العامة" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The freedom has a legal source: IFRS 6 lifts the IAS 8 hierarchy paragraphs that would normally force the policy to seek guidance from standards dealing with similar issues. An entity developing its E&E policy need NOT consider how IAS 16 or IAS 38 would treat the spend — but the policy it lands on must still produce information that is RELEVANT to users and a FAITHFUL REPRESENTATION of the entity's position, applied consistently across the portfolio. A policy that expenses everything is as acceptable as one that capitalises everything, provided it is honest and used consistently.",
        ar: "للحرية مصدر قانوني: يرفع IFRS 6 فقرات التسلسل الهرمي في IAS 8 التي كانت ستُلزم السياسة عادةً بطلب الهداية من معايير تعالج قضايا مماثلة. فالمنشأة التي تطور سياستها الاستكشافية لا تحتاج إلى النظر في كيفية معالجة IAS 16 أو IAS 38 للإنفاق — لكن سياستها النهائية يجب أن تنتج معلومات ملائمة للمستخدمين وتمثيلًا أمينًا لمركزها، مطبقة بثبات عبر المحفظة. فسياسة تحميل كل شيء مصروفًا مقبولة كسياسة رسملة كل شيء، ما دامت نزيهة ومستخدمة بثبات.",
      },
    },
    { kind: "h", text: { en: "Classification — tangible or intangible?", ar: "التبويب — ملموس أم غير ملموس؟" } },
    {
      kind: "tree",
      root: { en: "A capitalised E&E expenditure — which class?", ar: "نفقة استكشاف مرسملة — أي فئة؟" },
      branches: [
        {
          when: { en: "The expenditure reflects a PHYSICAL asset used in the search (a drilling rig, seismic equipment, camp infrastructure)", ar: "تعكس النفقة أصلًا ماديًا مستخدمًا في البحث (منصة حفر، معدات سيزمية، بنية معسكر)" },
          then: { en: "TANGIBLE E&E asset — the 'exploration asset' class in the SoFP", ar: "أصل استكشاف ملموس — فئة «أصول الاستكشاف» في الميزانية", red: true },
        },
        {
          when: { en: "The expenditure reflects RIGHTS or KNOWLEDGE (a licence to explore an area, drilling data, geological information)", ar: "تعكس النفقة حقوقًا أو معرفة (ترخيص استكشاف منطقة، بيانات حفر، معلومات جيولوجية)" },
          then: { en: "INTANGIBLE E&E asset — no physical substance, information value only", ar: "أصل استكشاف غير ملموس — لا جوهر مادي، قيمة معلوماتية فحسب", red: true },
        },
        {
          when: { en: "Both drivers in one project (a rig bought AND a licence held)", ar: "المحركان في مشروع واحد (منصة مشتراة وترخيص مقتنى معًا)" },
          then: { en: "Split by nature — the two classes are disclosed separately; judgement follows the source of the expenditure", ar: "قسّم بطبيعة الأصل — وتفصح الفئتان منفصلتين؛ والاجتهاد يتبع مصدر النفقة", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Presentation discipline: E&E assets take their own line items — tangible E&E and intangible E&E — and both sit in NON-CURRENT assets under IAS 1's classification. Do not blend the drilling rig into general plant, and do not present the licence as an ordinary IAS 38 intangible: the separate captions are what let users see how much of the balance sheet is still 'unproven ground'. The classification choice also decides which subsequent-measurement rules (IAS 16's vs IAS 38's) apply once the asset reclassifies out.",
        ar: "انضباط العرض: تأخذ أصول الاستكشاف سطورها — استكشاف ملموس واستكشاف غير ملموس — ويجلس كلاهما في الأصول غير المتداولة وفق تبويب IAS 1. لا تذب منصة الحفر في المعدات العامة، ولا تعرض الترخيص أصلًا غير ملموس معتادًا وفق IAS 38: فالعناوين المستقلة هي ما يمكّن المستخدمين من رؤية كم من الميزانية ما يزال «أرضًا غير مثبتة». ويقرر اختيار التبويب أيضًا أي قواعد قياس لاحق (قواعد IAS 16 أم IAS 38) تسري متى أعيد تبويب الأصل خارجًا.",
      },
    },
    { kind: "h", text: { en: "Measurement & the one recognised limit", ar: "القياس والحد الوحيد المعترف به" } },
    {
      kind: "p",
      text: {
        en: "At recognition: COST. After recognition: IAS 16/38 rules would normally apply — but only if they do not conflict with IFRS 6's impairment machinery. That machinery is the standard's heart: an E&E asset is tested for impairment BEFORE the IAS 16/38 depreciation/amortisation starts, and the impairment test runs on an E&E ASSET or a CGU that is NOT LARGER THAN A SEGMENT. The nature of the test: IAS 36 — with 'exploration and evaluation assets' as a separate CGU candidate.",
        ar: "عند الاعتراف: التكلفة. وبعده: طبقت قواعد IAS 16/38 ما لم تتعارض مع آلية الانخفاض — وهي قلب المعيار: يختبر أصل الاستكشاف قبل بدء الإهلاك/الاستنفاد، وعلى مستوى أصل استكشاف أو وحدة توليد نقد لا أكبر من قطاع. وطبيعة الاختبار: IAS 36 — مع اعتبار أصول الاستكشاف وحدة مستقلة.",
      },
    },
    {
      kind: "p",
      text: {
        en: "The cost package: directly attributable E&E expenditure only — licence fees paid during the search, drilling and sampling costs, technical studies, the depreciation of rigs used on the project. Borrowing costs join under IAS 23 if the entity's policy capitalises them. General administration, corporate overheads and investor relations never qualify; the E&E asset is not a dumping ground for the cost of staying in business.",
        ar: "حزمة التكلفة: نفقات الاستكشاف المباشرة وحدها — رسوم التراخيص المدفوعة خلال البحث، وتكاليف الحفر والعينات، والدراسات الفنية، وإهلاك المنصات المستخدمة في المشروع. وتنضم تكاليف الاقتراض وفق IAS 23 إن كانت السياسة ترسلها. أما العمومية والإدارية المركزية وعلاقات المستثمرين فلا تؤهل أبدًا؛ فأصل الاستكشاف ليس مكبًا لتكلفة البقاء في السوق.",
      },
    },
    {
      kind: "journal",
      title: { en: "Recognition — both policies, plus the restoration obligation", ar: "الاعتراف — السياستان معًا مع التزام إعادة الحال" },
      rows: [
        { dr: { en: "E&E asset (capitalised drilling costs, by policy)", ar: "أصل استكشاف (تكاليف حفر مرسملة بالسياسة)" }, cr: { en: "Payables / cash", ar: "دائنون/نقد" }, red: true },
        { dr: { en: "E&E expense (where the policy expenses)", ar: "مصروف استكشاف (حيث تجيز السياسة)" }, cr: { en: "Payables / cash", ar: "دائنون/نقد" } },
        { dr: { en: "E&E asset (restoration cost capitalised, per policy) or expense", ar: "أصل استكشاف (تكلفة إعادة حال مرسملة بالسياسة) أو مصروف" }, cr: { en: "Provision for restoration (IAS 37 — the freedom stops at assets)", ar: "مخصص إعادة الحال (IAS 37 — فالحرية تقف عند الأصول)" }, red: true },
      ],
    },
    { kind: "h", text: { en: "The impairment trigger — when the search stops paying", ar: "مسبب الانخفاض — حين يتوقف البحث عن العطاء" } },
    {
      kind: "list",
      items: [
        { en: "The EXPLORATION RIGHT has expired in the period, or will expire soon without renewal", ar: "انقضى حق الاستكشاف خلال الفترة أو ينقضي قريبًا دون تجديد" },
        { en: "Neither further substantive E&E expenditure nor development is BUDGETED or PLANNED for the area", ar: "لا يوجد في الموازنة أو الخطة إنفاق استكشافي جوهري إضافي ولا تطوير للمنطقة" },
        { en: "E&E has NOT led to discovery of commercially viable quantities, and the entity has decided to DISCONTINUE the activity", ar: "لم يؤد الاستكشاف إلى اكتشاف كميات مجدية تجاريًا وقررت المنشأة إيقاف النشاط" },
        { en: "Sufficient DATA exist to indicate that the carrying amount will not be recovered in full, even where development is approved or permitted to continue", ar: "توجد بيانات كافية تدل على أن الدفترية لن تسترد كاملة، ولو اعتُمد التطوير أو سمح باستمراره" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The CGU cap is the anti-abuse rule. Impairment must be assessed at the level of an individual E&E asset or a CGU no larger than an IFRS 8 operating segment — so an entity cannot bury a dead licence inside a country-wide unit whose healthy mines rescue its carrying amount. Within that unit the IAS 36 machinery runs: recoverable amount = the higher of value in use and fair value less costs of disposal; goodwill first (if any); then the other assets pro rata to their carrying, each floored at its own FVLCD floor; the shortfall is the impairment loss.",
        ar: "سقف الوحدة هو قاعدة منع التحايل. يجب تقييم الانخفاض على مستوى أصل استكشافي واحد أو وحدة لا تتجاوز قطاعًا تشغيليًا وفق IFRS 8 — فلا تستطيع المنشأة دفن ترخيص ميت داخل وحدة قطرية تنقذ مناجمها السليمة دفتريته. وداخل تلك الوحدة تجري آلة IAS 36: المبلغ المسترد = الأعلى من القيمة الاستخدامية والعادلة مخصومة التكاليف؛ والشهرة أولًا (إن وجدت)؛ ثم بقية الأصول بالتناسب مع دفترياتها، وكل أصل لا ينقص تحت أرضيته العادلة مخصومة التكاليف؛ والعجز خسارة الانخفاض.",
      },
    },
    {
      kind: "formula",
      title: { en: "The E&E impairment engine (IAS 36 inside the small unit)", ar: "محرك انخفاض الاستكشاف (IAS 36 داخل الوحدة الصغيرة)" },
      lines: [
        { en: "Impairment loss = carrying amount of the E&E CGU − recoverable amount (higher of VIU and FVLCD)", ar: "خسارة الانخفاض = دفترية وحدة الاستكشاف − المبلغ المسترد (الأعلى من الاستخدامية والعادلة مخصومة التكاليف)" },
        { en: "Allocation: goodwill of the unit first → then the other assets pro rata to carrying", ar: "التوزيع: شهرة الوحدة أولًا ← ثم بقية الأصول بالتناسب مع الدفتريات" },
        { en: "Per-asset floor = the HIGHEST of its fair value less costs of disposal, its value in use (if determinable), and zero", ar: "أرضية كل أصل = الأعلى من عادلته مخصومة التكاليف، وقيمته الاستخدامية (إن أمكن تحديدها)، والصفر" },
      ],
    },
    {
      kind: "tree",
      title: { en: "The IFRS 6 impairment flow", ar: "مسار انخفاض IFRS 6" },
      root: { en: "An E&E asset — when and how is it tested?", ar: "أصل استكشاف — متى وكيف يختبر؟" },
      branches: [
        {
          when: { en: "The technical-feasibility & commercial-viability tests are not yet complete (the E&E stage)", ar: "لم تكتمل اختبارات الجدوى الفنية والتجارية (مرحلة الاستكشاف)" },
          then: { en: "NO depreciation; impairment when a trigger fires — licence expiry, no budgeted further work, decision to discontinue, data showing non-recovery", ar: "لا إهلاك؛ وانخفاض عند إطلاق مسبب — انقضاء الترخيص، أو غياب عمل إضافي في الموازنة، أو قرار التوقف، أو بيانات عدم الاسترداد", red: true },
        },
        {
          when: { en: "Feasibility & viability PROVEN → reclassify to development (IAS 16)", ar: "ثبتت الجدوى ← إعادة تبويب للتطوير (IAS 16)" },
          then: { en: "Assess impairment FIRST (life in IFRS 6 ends), then begin depreciation under the new home", ar: "اختبر الانخفاض أولًا (تنتهي حياة IFRS 6) ثم يبدأ الإهلاك في الموطن الجديد", red: true },
        },
        {
          when: { en: "Impairment recognised on a unit whose carrying is rescued later", ar: "عُرف انخفاض على وحدة تُنقذ دفتريتها لاحقًا" },
          then: { en: "IAS 36's reversal rules apply afterwards (the E&E-specific test is a one-way door; reversals follow normal IAS 36 — never for goodwill)", ar: "تسري قواعد رد IAS 36 لاحقًا (فاختبار الاستكشاف باب باتجاه واحد؛ والردود تتبع IAS 36 المعتاد — ولا ترد الشهرة أبدًا)" },
        },
      ],
    },
    {
      kind: "example",
      title: { en: "Impairment inside an E&E CGU — the allocation walk", ar: "انخفاض داخل وحدة استكشاف — جولة التوزيع" },
      lines: [
        { en: "One E&E CGU (not larger than a segment): intangible licence 200 · tangible drilling assets 400 → carrying 600", ar: "وحدة استكشاف واحدة (لا أكبر من قطاع): ترخيص غير ملموس ٢٠٠ · أصول حفر ملموسة ٤٠٠ ← الدفترية ٦٠٠" },
        { en: "A trigger fires; recoverable amount = higher of VIU 250 and FVLCD 300 → 300", ar: "أُطلق مسبب؛ والمسترد = الأعلى من استخدامية ٢٥٠ وعادلة مخصومة ٣٠٠ ← ٣٠٠" },
        { en: "Impairment = 600 − 300 = 300 → allocated pro rata to carrying: licence 300 × (200÷600) = 100 · drilling 300 × (400÷600) = 200", ar: "الانخفاض = ٦٠٠ − ٣٠٠ = ٣٠٠ ← يوزع بالتناسب: الترخيص ٣٠٠ × (٢٠٠÷٦٠٠) = ١٠٠ · والحفر ٣٠٠ × (٤٠٠÷٦٠٠) = ٢٠٠" },
        { en: "Closing: licence 100 · drilling 200 · total 300 = the recoverable amount — the unit is now carried at what it can give back", ar: "الختام: الترخيص ١٠٠ · الحفر ٢٠٠ · الإجمالي ٣٠٠ = المبلغ المسترد — فتحمل الوحدة الآن على ما تستطيع رده" },
      ],
    },
    { kind: "h", text: { en: "Reclassification — the handover to IAS 16/38", ar: "إعادة التبويب — التسليم إلى IAS 16/38" } },
    {
      kind: "steps",
      items: [
        { en: "1. Technical feasibility AND commercial viability DEMONSTRATED (both tests, documented)", ar: "١. إثبات الجدوى الفنية والتجارية معًا (الاختباران موثقين)" },
        { en: "2. Run the IFRS 6 impairment test BEFORE anything moves — the last act of the E&E regime", ar: "٢. أجرِ اختبار انخفاض IFRS 6 قبل أي حركة — آخر أعمال نظام الاستكشاف" },
        { en: "3. Reclassify the (written-down) carrying amount to development assets under IAS 16 (mine construction) or IAS 38", ar: "٣. أعد تبويب الدفترية المنقوصة إلى أصول تطوير وفق IAS 16 (إنشاء المنجم) أو IAS 38" },
        { en: "4. Start DEPRECIATION/AMORTISATION over the mine's useful life from that date", ar: "٤. ابدأ الإهلاك/الاستنفاد على العمر الإنتاجي للمنجم من ذلك التاريخ" },
        { en: "5. Production-phase costs → inventory under IAS 2; sale of extracted minerals → IFRS 15 revenue", ar: "٥. تكاليف مرحلة الإنتاج ← مخزون وفق IAS 2؛ وبيع المعادن المستخرجة ← إيراد IFRS 15" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The order of operations is the mark-earner: impairment BEFORE reclassification, depreciation only AFTER it. An E&E asset that skips the impairment test on its way out carries unproven value into the development balance sheet; an entity that starts depreciating while still inside IFRS 6 breaks the no-depreciation rule. The discipline exists because the transition date is the moment the asset's economics change from 'option on information' to 'cash-generating construction' — exactly when an honest measurement reset belongs.",
        ar: "ترتيب العمليات هو رابح الدرجات: الانخفاض قبل إعادة التبويب، والإهلاك بعده فقط. فأصل الاستكشاف الذي يتخطى الاختبار في طريقه للخروج يحمل قيمة غير مثبتة إلى ميزانية التطوير؛ ومن يبدأ الإهلاك وهو ما يزال داخل IFRS 6 يكسر قاعدة اللاإهلاك. ويوجد هذا الانضباط لأن تاريخ الانتقال هو لحظة تغير اقتصاديات الأصل من «خيار على معلومة» إلى «إنشاء مولد للنقد» — وهي بالضبط لحظة إعادة ضبط قياس أمينة.",
      },
    },
    {
      kind: "journal",
      title: { en: "Impairment, reclassification & the production phase", ar: "الانخفاض وإعادة التبويب ومرحلة الإنتاج" },
      rows: [
        { dr: { en: "Impairment loss 300", ar: "خسارة انخفاض ٣٠٠" }, cr: { en: "E&E asset (licence 100 / drilling 200)", ar: "أصل الاستكشاف (ترخيص ١٠٠ / حفر ٢٠٠)" }, red: true },
        { dr: { en: "Mine development asset (IAS 16) 300", ar: "أصل تطوير منجم (IAS 16) ٣٠٠" }, cr: { en: "E&E asset (carrying after impairment)", ar: "أصل الاستكشاف (الدفترية بعد الانخفاض)" }, red: true },
        { dr: { en: "Inventory — extracted ore (IAS 2)", ar: "مخزون — خام مستخرج (IAS 2)" }, cr: { en: "Mine development asset (depreciation over the 10-yr life = 30/yr) · cash (operating costs)", ar: "أصل تطوير المنجم (إهلاك على عمر ١٠ سنوات = ٣٠ سنويًا) · نقد (تكاليف تشغيل)" } },
        { dr: { en: "Cash / receivable (ore sold)", ar: "نقد/مدينون (خام مباع)" }, cr: { en: "Revenue (IFRS 15) · and cost of sales releases the inventory", ar: "إيراد (IFRS 15) · وتكلفة المبيعات تفرج عن المخزون" }, red: true },
      ],
    },
    {
      kind: "example",
      title: { en: "One licence's whole life under IFRS 6", ar: "عمر ترخيص كامل تحت IFRS 6" },
      lines: [
        { en: "Y1-Y3: exploration spend 600 capitalised by policy (licence 200 + drilling 400); feasibility NOT yet demonstrated", ar: "السنوات ١-٣: إنفاق استكشافي ٦٠٠ مرسمل بالسياسة (ترخيص ٢٠٠ + حفر ٤٠٠)؛ والجدوى لم تثبت بعد" },
        { en: "End Y3: drilling proves half the area is barren — the trigger fires: impairment 300 on the barren half (allocated by the engine above)", ar: "نهاية س٣: يثبت الحفر جدب نصف المنطقة — يطلق المسبب: انخفاض ٣٠٠ على النصف الجدب (موزعة بالمحرك أعلاه)" },
        { en: "Y4: feasibility & viability demonstrated for the rest → impairment test first (no further loss) → reclassify 300 to mine development (IAS 16)", ar: "س٤: تثبت الجدوى للباقي ← اختبار الانخفاض أولًا (لا خسارة إضافية) ← إعادة تبويب ٣٠٠ إلى تطوير المنجم (IAS 16)" },
        { en: "Y5+: production; development asset depreciated over the 10-year mine life = 30/yr into ore inventory (IAS 2)", ar: "س٥ وما بعدها: الإنتاج؛ وأصل التطوير يُهلك على عمر المنجم ١٠ سنوات = ٣٠ سنويًا داخل مخزون الخام (IAS 2)" },
      ],
    },
    { kind: "h", text: { en: "Decommissioning & restoration during E&E", ar: "الفك وإعادة الحال أثناء الاستكشاف" } },
    {
      kind: "p",
      text: {
        en: "Exploration disturbs land, and the law demands it be put back. A present obligation for dismantling and restoration triggers IAS 37: the PROVISION is recognised at the best estimate whatever the entity's E&E policy, and the corresponding debit follows the policy — capitalised into the E&E asset or expensed with the rest of the spend. When the area is abandoned, the provision unwinds against the actual restoration work; when the area proceeds to development, the obligation rides along with the asset into IAS 16 under the IFRIC 1 re-measurement machinery.",
        ar: "يُقلق الاستكشاف الأرض، والقانون يطلب إعادتها كما كانت. فالالتزام القائم بالفك وإعادة الحال يستثير IAS 37: يُعترف بالمخصص بأفضل تقدير أيًّا كانت سياسة الاستكشاف، ويتبع المدين المقابل السياسة — مرسملًا في أصل الاستكشاف أو مصروفًا مع بقية الإنفاق. وعند تخلي المنطقة يفك المخصص مقابل أعمال إعادة الحال الفعلية؛ وعندما تتقدم المنطقة إلى التطوير ينتقل الالتزام مع الأصل إلى IAS 16 تحت آلية إعادة القياس في IFRIC 1.",
      },
    },
    { kind: "h", text: { en: "Disclosure", ar: "الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "The amounts of E&E assets (tangible and intangible splits) and the accounting policy for E&E expenditure", ar: "مقادير أصول الاستكشاف (ملموسة وغير ملموسة) وسياسة الإنفاق" },
        { en: "Assets, liabilities, income & expenses arising from E&E activities as separate line items or notes", ar: "الأصول والالتزامات والدخل والمصروف الناشئة عن أنشطة الاستكشاف بنود مستقلة" },
        { en: "The level at which the impairment test's CGU is set (not larger than a segment) + how that relates to IFRS 8's segment structure", ar: "مستوى وحدة اختبار الانخفاض (لا أكبر من قطاع) وعلاقتها ببنية IFRS 8" },
        { en: "Contingent liabilities and contingent assets arising from E&E — IAS 37 disclosures", ar: "الالتزامات والأصول المحتملة الناشئة عن الاستكشاف — إفصاحات IAS 37" },
      ],
    },
    { kind: "h", text: { en: "What IFRS 6 deliberately does NOT do", ar: "ما لا يفعله IFRS 6 عمدًا" } },
    {
      kind: "list",
      items: [
        { en: "No reserve-recognition rule — proven/probable reserves never enter the balance sheet as measured assets", ar: "لا قاعدة اعتراف بالاحتياطيات — فالاحتياطيات المثبتة والمرجحة لا تدخل الميزانية أصولًا مقيسة" },
        { en: "No disclosure of reserve QUANTITIES or valuations (the old national practices did — IFRS 6 stayed silent)", ar: "لا إفصاح عن كميات الاحتياطيات أو تقييماتها (فعلتها الممارسات الوطنية القديمة — وصمت IFRS 6)" },
        { en: "No single recognition answer — capitalise vs expense stays an entity-level policy choice", ar: "لا إجابة اعتراف واحدة — فالرسملة مقابل التحميل يبقى اختيار سياسة على مستوى المنشأة" },
        { en: "No development-phase rules — the moment feasibility is proven, IFRS 6 hands over to the ordinary corpus", ar: "لا قواعد لمرحلة التطوير — فبمجرد إثبات الجدوى يسلّم IFRS 6 إلى المتن المعتاد" },
      ],
    },
    { kind: "h", text: { en: "The classic exam traps", ar: "فخاخ الامتحان الكلاسيكية" } },
    {
      kind: "list",
      items: [
        { en: "The IAS 38/36 exemption is TEMPORARY relief, not an immunity — impairment machinery applies from day one, at the small CGU level", ar: "إعفاء IAS 38/36 تخفيف مؤقت لا حصانة — فآلية الانخفاض تسري من اليوم الأول وعلى مستوى الوحدة الصغيرة" },
        { en: "The impairment test runs BEFORE reclassification to development; depreciation starts only AFTER it", ar: "اختبار الانخفاض يجري قبل إعادة التبويب للتطوير؛ والإهلاك يبدأ بعده فقط" },
        { en: "The CGU is 'not larger than a segment' — candidates writing a country-wide unit lose the anti-abuse mark", ar: "الوحدة «لا أكبر من قطاع» — ومن يكتب وحدة قطرية يخسر درجة منع التحايل" },
        { en: "Expensing by policy does NOT skip the disclosures — and the policy must still be consistent and faithful", ar: "التحميل مصروفًا بالسياسة لا يلغي الإفصاحات — ويجب أن تظل السياسة ثابتة وأمينة" },
        { en: "The restoration PROVISION follows IAS 37 whatever the policy — the freedom covers only the asset side of the entry", ar: "مخصص إعادة الحال يتبع IAS 37 أيًّا كانت السياسة — فالحرية تغطي جانب الأصل من القيد وحده" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The exam's one-liner: IFRS 6 lets old habits live but forces an IAS 36-style impairment test on a CGU not larger than a SEGMENT — and the test date is the moment feasibility/viability is proven (before reclassification).",
        ar: "خلاصة الامتحان: يبقي IFRS 6 العادات القائمة لكنه يفرض اختبار انخفاض على وحدة لا أكبر من قطاع — وموعد الاختبار لحظة ثبوت الجدوى قبل إعادة التبويب.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Exemption ≠ free pass: quote the two conditions — the policy is RELEVANT and a FAITHFUL REPRESENTATION, applied CONSISTENTLY — before defending any capitalisation choice in a scenario answer.",
        ar: "الإعفاء ≠ تصريح مرور: اذكر الشرطين — السياسة ملائمة وتمثيل أمين وتطبق بثبات — قبل الدفاع عن أي اختيار رسملة في جواب السيناريو.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Boundary questions decide before numbers do: costs incurred BEFORE the search (rights) and AFTER feasibility (development) never touch IFRS 6 — write the stage first, the standard second, the entry last.",
        ar: "أسئلة الحدود تحسم قبل الأرقام: التكاليف قبل البحث (الحقوق) وبعد الجدوى (التطوير) لا تلمس IFRS 6 أبدًا — اكتب المرحلة أولًا ثم المعيار ثم القيد.",
      },
    },
    {
      kind: "note",
      text: {
        en: "The CGU cap borrows IFRS 8's segment definition — say 'no larger than an operating segment' word-for-word; 'country' or 'division' answers miss the rule.",
        ar: "سقف الوحدة يقترض تعريف القطاع من IFRS 8 — قل «لا أكبر من قطاع تشغيلي» حرفيًا؛ فإجابات «الدولة» أو «الإدارة» تخطئ القاعدة.",
      },
    },
    {
      kind: "note",
      text: {
        en: "An E&E asset is the value of the RIGHT TO KEEP LOOKING, not a measured mineral reserve — that is why the balance it guards is information value, and why the impairment test is the moment of truth.",
        ar: "أصل الاستكشاف قيمة «حق مواصلة النظر» لا احتياطيًا معدنيًا مقيسًا — لهذا كانت القيمة التي يحرسها قيمة معلوماتية، وكان اختبار الانخفاض لحظة الحقيقة.",
      },
    },
    { kind: "h", text: { en: "Transition & the eternal 'interim' status", ar: "الانتقال والمركز «المؤقت» الأبدي" } },
    {
      kind: "p",
      text: {
        en: "IFRS 6 took effect 1 Jan 2006, with early application encouraged and disclosed. Its transition is deliberately light: entities could carry their pre-existing E&E accounting forward and were not forced to restate history — the standard asked only that the new impairment regime and disclosures apply from the date of adoption. The IASB's extractive-activities research (the 2010 discussion paper written with the Australian, Canadian, Norwegian and South African standard-setters) never matured into a replacement, so the stopgap is now old enough to vote.",
        ar: "سريان IFRS 6 من ١ يناير ٢٠٠٦، مع تشجيع التطبيق المبكر والإفصاح عنه. وانتقاله خفيف عمدًا: استطاعت المنشآت ترحيل محاسبة الاستكشاف السابقة دون إجبار على إعادة عرض التاريخ — ولم يطلب المعيار إلا تطبيق نظام الانخفاض الجديد والإفصاحات من تاريخ التبني. ولم ينضج بحث مجلس المعايير للأنشطة الاستخراجية (ورقة النقاش ٢٠١٠ المكتوبة مع جهات التقييم الأسترالية والكندية والنرويجية والجنوب أفريقية) إلى بديل — فصار الصمام الآن في سن التصويت.",
      },
    },
    { kind: "h", text: { en: "Interactions with the rest of the corpus", ar: "التقاطعات مع بقية المعايير" } },
    {
      kind: "list",
      items: [
        { en: "IAS 16 / IAS 38 — own the stages before (mineral rights) and after (development assets, mine construction)", ar: "IAS 16 / IAS 38 — يملكان المرحلتين قبل (حقوق التعدين) وبعد (أصول التطوير وإنشاء المنجم)" },
        { en: "IAS 36 — the machinery inside the small CGU: VIU vs FVLCD, allocation, floors, and the later reversal rules", ar: "IAS 36 — الآلة داخل الوحدة الصغيرة: الاستخدامية مقابل العادلة مخصومة التكاليف، والتوزيع والأرضيات وقواعد الرد اللاحقة" },
        { en: "IAS 37 / IFRIC 1 — restoration provisions during E&E and the re-measurement machinery after handover", ar: "IAS 37 / IFRIC 1 — مخصصات إعادة الحال أثناء الاستكشاف وآلية إعادة القياس بعد التسليم" },
        { en: "IFRS 8 — the segment definition that caps the impairment CGU", ar: "IFRS 8 — تعريف القطاع الذي يسقف وحدة الانخفاض" },
        { en: "IAS 23 — borrowing costs join the E&E cost package when the entity's policy capitalises them", ar: "IAS 23 — تكاليف الاقتراض تنضم لحزمة تكلفة الاستكشاف حين ترسلها سياسة المنشأة" },
        { en: "IFRS 1 — first-time adopters may elect previous-GAAP cost or fair value as deemed cost for E&E assets", ar: "IFRS 1 — يجوز للمتبنين الأوائل انتخاب تكلفة النظام السابق أو القيمة العادلة كتكلفة مفترضة لأصول الاستكشاف" },
      ],
    },
  ],
}
