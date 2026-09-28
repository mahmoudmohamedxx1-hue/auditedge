/** v23 — full free VIDEO courses for the Courses section.
 *
 *  Multi-hour, complete courses from top educators — playable inside the
 *  app (lesson list + embedded player). Includes the design track the
 *  learner asked for by name ("Course Illustrator" — the Envato Tuts+ /
 *  Learn Skills Daily full Illustrator courses) and CPA Talks' complete
 *  14-episode Audit 101 series.
 *
 *  v24 — the catalog tilts professional: 9 new full AUDIT / IFRS / CFA
 *  courses (zero accounting additions) — three complete English audit
 *  courses, three English IFRS deep-dives, and the entire FinTree CFA
 *  Level I crash course (8 sessions, ~65 hours) plus two CFA revision
 *  marathons.
 *
 *  Video ids, lengths and view counts captured from live YouTube search
 *  on 2026-09-28; thumbnails load from i.ytimg.com. */

export type VideoLesson = {
  /** YouTube video id */
  id: string
  title: string
  /** display length, e.g. "17:06" */
  length: string
}

export type VideoCourse = {
  id: string
  titleEn: string
  titleAr: string
  channel: string
  category: "audit" | "accounting" | "ifrs" | "cfa" | "design" | "excel"
  level: "Beginner" | "Intermediate" | "Advanced"
  language: "AR" | "EN"
  hours: string
  views: string
  descEn: string
  descAr: string
  /** every lesson is playable in-app; lessons[0] is the cover video */
  lessons: VideoLesson[]
}

export const VIDEO_CATEGORIES: { id: VideoCourse["category"] | "all"; labelEn: string; labelAr: string }[] = [
  { id: "all", labelEn: "All", labelAr: "الكل" },
  { id: "audit", labelEn: "Audit", labelAr: "المراجعة" },
  { id: "accounting", labelEn: "Accounting", labelAr: "المحاسبة" },
  { id: "ifrs", labelEn: "IFRS", labelAr: "المعايير الدولية" },
  { id: "cfa", labelEn: "CFA", labelAr: "CFA" },
  { id: "excel", labelEn: "Excel", labelAr: "إكسل" },
  { id: "design", labelEn: "Design · Illustrator", labelAr: "التصميم · إليستريتور" },
]

export const VIDEO_COURSES: VideoCourse[] = [
  /* ==================== Arabic — Audit ==================== */
  {
    id: "cpa-talks-audit-101",
    titleEn: "Audit 101 — the complete external-audit course",
    titleAr: "تدقيق 101 — دورة المراجعة الخارجية الكاملة",
    channel: "CPA Talks",
    category: "audit",
    level: "Beginner",
    language: "AR",
    hours: "~7h",
    views: "150K+ combined",
    descEn:
      "The complete 14-episode Audit 101 series — from accepting a client and risk assessment to testing every balance and closing the file. The friendliest full audit course in Arabic.",
    descAr:
      "سلسلة تدقيق 101 الكاملة بأربعة عشر حلقة — من قبول العميل وتقييم المخاطر إلى فحص كل بند وإنهاء الملف. ألطف دورة مراجعة كاملة بالعربية.",
    lessons: [
      { id: "7wwLJ3BtMkY", title: "(1) مفهوم التدقيق وقبول العميل", length: "17:06" },
      { id: "3N5paZ5254o", title: "(2) النهج القائم على المخاطر وتفهم الشركة وبيئتها", length: "25:25" },
      { id: "5C_OX9-4Cb8", title: "(3) تفهم بيئة الرقابة الداخلية", length: "40:47" },
      { id: "fndpqmn_YyU", title: "(4) اجراءات التخطيط للكشف عن الاحتيال", length: "24:31" },
      { id: "N-nrDZ03fQM", title: "(5) مفهوم الأهمية النسبية وطرق تحديدها", length: "28:22" },
      { id: "A0iytg3rkuc", title: "(6) الاجراءات التحليلية في مرحلة التخطيط", length: "13:33" },
      { id: "OVKQPNicYWE", title: "(7) كيف تتفهم الـ Business Processes", length: "33:56" },
      { id: "rt1fiH6jKRI", title: "(8) تقييم مخاطر التحريف الجوهري وتحديد الحسابات الجوهرية", length: "43:56" },
      { id: "_Yo1MdzMyc4", title: "(9) بناء خطة التدقيق", length: "36:22" },
      { id: "95M3NEvILs4", title: "(10) فحص الإيرادات وأرصدة العملاء", length: "33:54" },
      { id: "nz0cjh6Xh8c", title: "(11) فحص التكاليف وأرصدة الموردين", length: "34:27" },
      { id: "Xs91JE-wsAY", title: "(12) فحص المصاريف والأرصدة المدينة والدائنة الأخرى", length: "37:04" },
      { id: "aywVmzWhyeQ", title: "(13) فحص الأصول الثابتة والنقدية وما في حكمها", length: "16:49" },
      { id: "DLPy0hiFy4c", title: "(14) فحص القيود واجراءات ختام عملية التدقيق", length: "27:58" },
    ],
  },
  {
    id: "hamouda-esa-course",
    titleEn: "Egyptian Standards on Auditing — explained course",
    titleAr: "دورة شرح معايير المراجعة المصرية",
    channel: "Mahmoud Hamouda",
    category: "audit",
    level: "Intermediate",
    language: "AR",
    hours: "~2.3h",
    views: "28K+ combined",
    descEn:
      "A structured course on the Egyptian Standards on Auditing, plus a solved-MCQ session and the standards' logical sequence — exam-oriented and practical.",
    descAr:
      "دورة منظمة في معايير المراجعة المصرية مع جلسة أسئلة محلولة وشرح للتسلسل المنطقي للمعايير — موجهة للامتحانات وعملية.",
    lessons: [
      { id: "ub6839N_vi4", title: "دورة شرح معايير المراجعة المصرية", length: "1:32:54" },
      { id: "Qt7Hq5sZ6YE", title: "أسئلة اختيار من المتعدد محلولة", length: "33:50" },
      { id: "6rnyhPzHoOg", title: "تسلسل معايير المراجعة", length: "4:56" },
    ],
  },
  /* ==================== Arabic — IFRS ==================== */
  {
    id: "cpa-talks-ifrs",
    titleEn: "IFRS deep dives — standards workshop collection",
    titleAr: "تعمقات IFRS — مجموعة ورش المعايير",
    channel: "CPA Talks",
    category: "ifrs",
    level: "Advanced",
    language: "AR",
    hours: "~12h",
    views: "90K+ combined",
    descEn:
      "The complete CPA Talks standards collection — IFRS 16 (course + full workshop), IFRS 15 both parts, IFRS 9 financial instruments with the ECL workshop, consolidation, PPE and IAS 37.",
    descAr:
      "مجموعة معايير CPA Talks الكاملة — IFRS 16 (شرح + ورشة عمل كاملة) وIFRS 15 بجزأيه وIFRS 9 للأدوات المالية مع ورشة ECL والتجميع والأصول وIAS 37.",
    lessons: [
      { id: "QaWORLvO12U", title: "IFRS 16 — الإيجارات: محاسبة المستأجر (الجزء الأول)", length: "1:03:33" },
      { id: "Q5dKvZUSj2E", title: "IFRS 16 — أخطاء شائعة في الاستثناءات", length: "9:45" },
      { id: "TxWRD7oKE5Y", title: "IFRS 16 — ورشة عمل كاملة", length: "2:54:00" },
      { id: "wVt-6H3rgKg", title: "IFRS 15 — الإيراد: نموذج الخطوات الخمس", length: "46:07" },
      { id: "38FaKUZqAFk", title: "IFRS 15 — الإيراد: معاملات معينة (الجزء الثاني)", length: "29:55" },
      { id: "6EP6b1U9UoY", title: "IFRS 9 — الأدوات المالية: شرح مفصل", length: "1:47:04" },
      { id: "XBTYjqVh34Q", title: "IFRS 9 — نموذج الخسائر الائتمانية المتوقعة ECL", length: "13:42" },
      { id: "Pt5a8nL9zxk", title: "ECL — ورشة عمل بمثال عملي", length: "1:26:40" },
      { id: "UlXAY_gALWI", title: "القوائم المالية المجمعة — شرح مفصل", length: "2:07:03" },
      { id: "ZS5kKewKYM0", title: "الأصول الثابتة وغير الملموسة والاضمحلال", length: "2:11:11" },
      { id: "Uspt0KvLmqI", title: "IAS 37 — المخصصات والالتزامات المحتملة", length: "32:56" },
    ],
  },
  /* ==================== Arabic — Accounting ==================== */
  {
    id: "accounting-planet-principles",
    titleEn: "Principles of Financial Accounting — in 2 hours",
    titleAr: "مبادئ المحاسبة المالية — في ساعتين",
    channel: "The Accounting Planet",
    category: "accounting",
    level: "Beginner",
    language: "AR",
    hours: "~2.2h",
    views: "1.5M",
    descEn:
      "The most-watched Arabic accounting course on YouTube — the whole accounting cycle in one friendly sitting. 1.5 million learners can't be wrong.",
    descAr:
      "أشهر دورة محاسبة عربية على يوتيوب — دورة المحاسبة كاملة في جلسة واحدة ودودة. مليون ونصف متعلم لا يمكن أن يكونوا مخطئين.",
    lessons: [{ id: "IQyRSzI0Bvs", title: "كورس مبادئ المحاسبة المالية كامل في ساعتين", length: "2:11:33" }],
  },
  {
    id: "mahasaba-online-zero",
    titleEn: "Financial accounting from zero — 4 hours",
    titleAr: "المحاسبة المالية من الصفر — 4 ساعات",
    channel: "محاسبة أونلاين",
    category: "accounting",
    level: "Beginner",
    language: "AR",
    hours: "~4h",
    views: "110K",
    descEn:
      "A calm, complete build-up from the accounting equation to full financial statements — recorded for absolute beginners.",
    descAr:
      "بناء كامل وهادئ من المعادلة المحاسبية حتى القوائم المالية الكاملة — مسجل لمن يبدأ من الصفر تمامًا.",
    lessons: [{ id: "K2ELU0gfkYI", title: "مجانًا: كورس المحاسبة المالية من الصفر في 4 ساعات", length: "4:01:37" }],
  },
  {
    id: "kamal-eid-6h",
    titleEn: "Financial accounting — the complete 6-hour course",
    titleAr: "المحاسبة المالية — الدورة الكاملة في 6 ساعات",
    channel: "Mahmoud Kamal Eid",
    category: "accounting",
    level: "Beginner",
    language: "AR",
    hours: "~6h",
    views: "173K",
    descEn:
      "A full single-video course — deeper than the 2-hour sprints, with worked journal entries at every step.",
    descAr:
      "دورة كاملة في فيديو واحد — أعمق من الجلسات السريعة، مع قيود يومية محلولة في كل خطوة.",
    lessons: [{ id: "PvHVZ3SKFG4", title: "كورس المحاسبة المالية (كامل) في 6 ساعات", length: "5:54:59" }],
  },
  {
    id: "ams-4h",
    titleEn: "Financial accounting — full course with tax notes",
    titleAr: "المحاسبة المالية — دورة كاملة مع لمسات ضريبية",
    channel: "AMS للمحاسبة والضرائب",
    category: "accounting",
    level: "Beginner",
    language: "AR",
    hours: "~4.4h",
    views: "540K+ combined",
    descEn:
      "AMS's complete financial-accounting course, taught with an Egyptian practice and tax angle — from the popular الأزهر-ستايل channel.",
    descAr:
      "دورة AMS الكاملة في المحاسبة المالية بمنظور مصري عملي وضريبي — من القناة الشهيرة ذات الأسلوب الأزهري.",
    lessons: [
      { id: "A7M2AwuPdOI", title: "كورس محاسبة مالية — (1) المدخل", length: "17:08" },
      { id: "mdmNx1wDdSE", title: "كورس محاسبة مالية كامل في فيديو واحد", length: "4:25:27" },
    ],
  },
  {
    id: "accounting-planet-pro",
    titleEn: "The professional accountant — 6-hour advanced course",
    titleAr: "المحاسب المالي المحترف — دورة متقدمة في 6 ساعات",
    channel: "The Accounting Planet",
    category: "accounting",
    level: "Intermediate",
    language: "AR",
    hours: "~6.7h",
    views: "87K",
    descEn:
      "The follow-up to the 2-hour classic — practical accounting as the job really needs it, beyond the basics.",
    descAr:
      "الجزء التالي للكلاسيكية ذات الساعتين — محاسبة عملية كما تتطلبها الوظيفة فعلًا، بما يتجاوز الأساسيات.",
    lessons: [{ id: "X0sJuqdbclI", title: "كورس المحاسب المالي المحترف كامل في 6 ساعات", length: "6:39:42" }],
  },
  /* ==================== English — Accounting ==================== */
  {
    id: "tony-bell-10h",
    titleEn: "Full Financial Accounting Course — 10 hours",
    titleAr: "دورة المحاسبة المالية الكاملة — 10 ساعات",
    channel: "Tony Bell",
    category: "accounting",
    level: "Beginner",
    language: "EN",
    hours: "~10h",
    views: "2.6M",
    descEn:
      "Tony Bell's legendary free course — the full financial accounting sequence with endless worked problems. A university semester, free.",
    descAr:
      "دورة توني بيل الأسطورية المجانية — منهج المحاسبة المالية كاملًا مع تمارين محلولة لا تنتهي. فصل دراسي كامل، مجانًا.",
    lessons: [{ id: "v-djL7SPw4c", title: "Full Financial Accounting Course in One Video (10 Hours)", length: "10:01:51" }],
  },
  {
    id: "tony-bell-11h",
    titleEn: "Complete Financial Accounting — 11-hour tutorial",
    titleAr: "المحاسبة المالية الشاملة — درس 11 ساعة",
    channel: "Tony Bell",
    category: "accounting",
    level: "Intermediate",
    language: "EN",
    hours: "~11h",
    views: "1M",
    descEn:
      "The 2025 edition — an even longer walk through financial accounting for beginners, refreshed and re-recorded.",
    descAr:
      "إصدار 2025 — جولة أطول وأحدث في المحاسبة المالية للمبتدئين، أعيد تسجيلها بالكامل.",
    lessons: [{ id: "eyXKvOrDoqw", title: "Complete Financial Accounting Course — 11-Hour Full Tutorial", length: "11:00:01" }],
  },
  {
    id: "crash-course-accounting",
    titleEn: "Accounting crash course — job ready in 1.5 hours",
    titleAr: "كورس المحاسبة المكثف — جاهز للعمل في ساعة ونصف",
    channel: "Learn Accounting Finance",
    category: "accounting",
    level: "Beginner",
    language: "EN",
    hours: "~1.6h",
    views: "930K",
    descEn:
      "A fast, friendly orientation to accounting — the quickest legitimate path from zero to reading statements.",
    descAr:
      "تمهيد سريع وودود للمحاسبة — أسرع طريق مشروع من الصفر إلى قراءة القوائم المالية.",
    lessons: [{ id: "hTU6HE64Wd0", title: "Accounting Crash Course — Be job ready in 1.5 hours!", length: "1:33:00" }],
  },
  {
    id: "accounting-guy-full",
    titleEn: "Accounting full course for beginners",
    titleAr: "دورة المحاسبة الكاملة للمبتدئين",
    channel: "Accounting Guy",
    category: "accounting",
    level: "Beginner",
    language: "EN",
    hours: "~1.7h",
    views: "472K",
    descEn:
      "Basics to advanced, step by step — a compact alternative to the 10-hour marathons.",
    descAr:
      "من الأساسيات إلى المتقدم خطوة بخطوة — بديل مختصر عن ماراثونات العشر ساعات.",
    lessons: [{ id: "vO09q2V8TGQ", title: "Accounting Full Course for Beginners — Basics to Advanced", length: "1:40:15" }],
  },
  /* ==================== English — Excel ==================== */
  {
    id: "lsd-excel-finance",
    titleEn: "Excel for Finance and Accounting — full course",
    titleAr: "إكسل للمالية والمحاسبة — دورة كاملة",
    channel: "Learn Skills Daily",
    category: "excel",
    level: "Beginner",
    language: "EN",
    hours: "~4h",
    views: "1.7M",
    descEn:
      "Excel taught strictly through finance and accounting workflows — the exact spreadsheet skills an auditor uses daily.",
    descAr:
      "إكسل يُدرَّس عبر سياقات مالية ومحاسبية بحتة — مهارات الجداول التي يستخدمها المراجع يوميًا.",
    lessons: [{ id: "hkybRW7Z3Yk", title: "Excel for Finance and Accounting Full Course Tutorial", length: "3:58:34" }],
  },
  /* ==================== English — Audit (v24) ==================== */
  {
    id: "financeskul-f8",
    titleEn: "ACCA F8 / AA — Audit & Assurance, the complete course",
    titleAr: "ACCA F8 / AA — المراجعة والتأكيد، الدورة الكاملة",
    channel: "FinanceSkul",
    category: "audit",
    level: "Beginner",
    language: "EN",
    hours: "~4.8h",
    views: "232K",
    descEn:
      "A complete one-video ACCA F8/AA course — the full audit syllabus from the concept of assurance to final review and reporting, taught with clean structure.",
    descAr:
      "دورة ACCA F8/AA كاملة في فيديو واحد — منهج المراجعة بالكامل من مفهوم التأكيد إلى المراجعة الختامية والتقرير، بشرح منظم وواضح.",
    lessons: [{ id: "Gw8zXmgxYMg", title: "ACCA F8: Audit and Assurance — Complete Course", length: "4:48:19" }],
  },
  {
    id: "ruchi-aa-10h",
    titleEn: "ACCA AA — all sections covered, 10-hour full course",
    titleAr: "ACCA AA — كل أقسام المنهج في 10 ساعات",
    channel: "ACCA With Ruchi Goyal",
    category: "audit",
    level: "Intermediate",
    language: "EN",
    hours: "~9.6h",
    views: "23K",
    descEn:
      "Every section of Audit & Assurance in one marathon sitting — risk, internal control, evidence, completeness and accuracy, review and the auditor's report.",
    descAr:
      "كل أقسام المراجعة والتأكيد في جلسة واحدة ماراثونية — المخاطر والرقابة الداخلية والأدلة والاكتمال والدقة والمراجعة وتقرير المراجع.",
    lessons: [{ id: "4b-nLGLgiMI", title: "ACCA AA — All Sections Covered (10-Hour Full Course)", length: "9:34:01" }],
  },
  {
    id: "bisk-cpa-aud",
    titleEn: "CPA AUD — the full 9-hour review course",
    titleAr: "CPA AUD — دورة المراجعة الكاملة في 9 ساعات",
    channel: "Bisk CPA Review (another71)",
    category: "audit",
    level: "Intermediate",
    language: "EN",
    hours: "~9.4h",
    views: "38K",
    descEn:
      "The classic Bisk CPA review of Auditing & Attestation — engagement acceptance, risk, evidence, reports and SIM strategy, US-CPA style.",
    descAr:
      "مراجعة Bisk الكلاسيكية لامتحان المراجعة والتوثيق الأمريكي للسيرتيفايد بابليك أكونتنت — قبول المهمة والمخاطر والأدلة والتقارير، بأسلوب CPA الأمريكي.",
    lessons: [{ id: "WhyUtg3Huhk", title: "Bisk CPA Review — AUD CPA Exam, Full Course (9 Hours)", length: "9:23:22" }],
  },
  /* ==================== English — IFRS (v24) ==================== */
  {
    id: "botcast-all-ifrs",
    titleEn: "All in One IFRS — the 2025 complete standards course",
    titleAr: "IFRS الكاملة — دورة معايير 2025 الشاملة",
    channel: "Accounting BotCast",
    category: "ifrs",
    level: "Intermediate",
    language: "EN",
    hours: "~9.9h",
    descEn:
      "A ten-hour walk through the complete IFRS body of standards — every core standard explained in order, with principles, worked treatments and traps.",
    descAr:
      "جولة من عشر ساعات في منظومة معايير IFRS الكاملة — كل معيار أساسي بترتيبه، بالمبادئ والمعالجات المحلولة والأخطاء الشائعة.",
    views: "9.5K",
    lessons: [{ id: "Eb-ljgdVgpY", title: "All in One IFRS (2025 Edition) — Complete Accounting Standards & Principles", length: "9:53:25" }],
  },
  {
    id: "cpdbox-consolidation",
    titleEn: "IFRS consolidation — the complete lecture",
    titleAr: "التجميع وفق IFRS — المحاضرة الكاملة",
    channel: "Silvia of CPDbox",
    category: "ifrs",
    level: "Advanced",
    language: "EN",
    hours: "~1.3h",
    views: "80K",
    descEn:
      "Silvia (of the legendary CPDbox IFRS training) teaches every key consolidation topic in one video — control, NCI, goodwill, intragroup eliminations, step-by-step.",
    descAr:
      "سيلفيا (من مدرّبة IFRS الشهيرة CPDbox) تشرح كل موضوعات التجميع الأساسية في فيديو واحد — السيطرة والحصص غير المسيطرة والشهرة واستبعادات المجموعة خطوة بخطوة.",
    lessons: [{ id: "mHcfK0MsNBU", title: "Complete IFRS Consolidation Lecture — all key topics in one video", length: "1:19:07" }],
  },
  {
    id: "tashwita-all-ifrs",
    titleEn: "All IFRS standards in one sitting",
    titleAr: "كل معايير IFRS في جلسة واحدة",
    channel: "Tashwita Gupta",
    category: "ifrs",
    level: "Intermediate",
    language: "EN",
    hours: "~2h",
    views: "211K",
    descEn:
      "A rapid two-hour tour of every accounting standard — the perfect pre-exam refresher with the whole IFRS/IAS map on one page.",
    descAr:
      "جولة سريعة في ساعتين لكل معايير المحاسبة — المراجعة المثالية قبل الامتحان وخريطة IFRS/IAS كاملة في جلسة واحدة.",
    lessons: [{ id: "nOPUA8smHbM", title: "All Accounting Standards || IFRS", length: "1:58:50" }],
  },
  /* ==================== English — CFA (v24) ==================== */
  {
    id: "fintree-cfa-l1",
    titleEn: "CFA Level I — the complete crash course",
    titleAr: "CFA المستوى الأول — الدورة المكثفة الكاملة",
    channel: "FinTree",
    category: "cfa",
    level: "Intermediate",
    language: "EN",
    hours: "~65h",
    views: "955K+ combined",
    descEn:
      "FinTree's famous 8-session CFA Level I crash course — financial statement analysis (2 days), quant methods, corporate issuers & equity, portfolio & economics, fixed income, derivatives & alternatives, and the FI + ethics finale. The whole CFA Level I curriculum, free.",
    descAr:
      "دورة FinTree الشهيرة المكثفة لمستوى CFA الأول بجلستها الثماني — تحليل القوائم المالية (يومان)، والطرق الكمية، والمصدِرين والأسهم، والمحفظة والاقتصاد، والدخل الثابت، والمشتقات والبدائل، والختام بالدخل الثابت والأخلاقيات. منهج CFA الأول كاملًا، مجانًا.",
    lessons: [
      { id: "3wkW0mD21BE", title: "Session 1 — Financial Statement Analysis, Day 1", length: "7:24:13" },
      { id: "0XU0h55bhDw", title: "Session 2 — Financial Statement Analysis, Day 2", length: "3:34:30" },
      { id: "awwLn6C1-S4", title: "Session 3 — Corporate Issuers & Equity Investments", length: "8:38:11" },
      { id: "VDEoxwHSIMk", title: "Session 4 — Quantitative Methods", length: "8:47:45" },
      { id: "wBSUZlDMiqk", title: "Session 5 — Portfolio Management & Economics", length: "9:35:39" },
      { id: "xUpN8ykkB6U", title: "Session 6 — Fixed Income", length: "8:34:04" },
      { id: "bbn_Dm2MbJY", title: "Session 7 — Derivatives & Alternative Investments", length: "8:00:04" },
      { id: "mPHxRUtFxbc", title: "Session 8 — Complete Crash Course: Fixed Income + Ethics", length: "10:26:26" },
    ],
  },
  {
    id: "quintedge-cfa-ethics",
    titleEn: "CFA Level I Ethics — the full lecture",
    titleAr: "أخلاقيات CFA للمستوى الأول — المحاضرة الكاملة",
    channel: "QuintEdge",
    category: "cfa",
    level: "Beginner",
    language: "EN",
    hours: "~7.4h",
    views: "344K",
    descEn:
      "The most-watched CFA Level I ethics lecture — the Code of Ethics and every Standard of Professional Conduct, taught with real-life-style vignettes.",
    descAr:
      "أشهر محاضرة أخلاقيات لمستوى CFA الأول — ميثاق الأخلاق وكل معايير السلوك المهني، بأسلوب الحالات الواقعية.",
    lessons: [{ id: "8KhntljYnrQ", title: "CFA Level 1 Ethics — Full Lecture", length: "7:23:30" }],
  },
  {
    id: "edzeb-cfa-revision",
    titleEn: "CFA Level I revision marathons — Quant + Ethics",
    titleAr: "مراجعات CFA للمستوى الأول — الكمية والأخلاقيات",
    channel: "edZeb",
    category: "cfa",
    level: "Advanced",
    language: "EN",
    hours: "~18h",
    views: "249K combined",
    descEn:
      "CA Vikas Vohra's revision marathons — a 12-hour Quantitative Methods one-shot and the 6-hour Ethics revision: full-coverage sprints before exam day.",
    descAr:
      "ماراثونات المراجعة مع فيكاس فورا — جلسة الطرق الكمية في 12 ساعة ومراجعة الأخلاقيات في 6 ساعات: غطاء كامل قبل يوم الامتحان.",
    lessons: [
      { id: "aBR3RYIEufg", title: "Quantitative Methods — Full Revision Lecture, Part I", length: "11:56:52" },
      { id: "IyHK2D21oJY", title: "Ethics (Ethical & Professional Standards) — Revision Lecture", length: "6:00:08" },
    ],
  },
  /* ==================== Design — the Course Illustrator track ==================== */
  {
    id: "envato-illustrator",
    titleEn: "Adobe Illustrator for Beginners — the FREE COURSE",
    titleAr: "Adobe Illustrator للمبتدئين — الدورة المجانية الكاملة",
    channel: "Envato Tuts+",
    category: "design",
    level: "Beginner",
    language: "EN",
    hours: "~3.3h",
    views: "12.3M",
    descEn:
      "THE Course Illustrator flagship — Envato Tuts+' free 3-hour Illustrator course. 12 million learners, zero cost, genuinely professional.",
    descAr:
      "دورة إليستريتور الرئيسية — دورة Envato Tuts+ المجانية في 3 ساعات. 12 مليون متعلم، بلا تكلفة، وبمستوى مهني حقيقي.",
    lessons: [{ id: "Ib8UBwu3yGA", title: "Adobe Illustrator for Beginners | FREE COURSE", length: "3:17:15" }],
  },
  {
    id: "lsd-illustrator-6h",
    titleEn: "Illustrator Full Course — 6+ hours",
    titleAr: "دورة إليستريتور الكاملة — أكثر من 6 ساعات",
    channel: "Learn Skills Daily",
    category: "design",
    level: "Beginner",
    language: "EN",
    hours: "~6.3h",
    views: "1.4M",
    descEn:
      "Learn Skills Daily's full Illustrator course — everything in one video, from shapes to complex vectors.",
    descAr:
      "دورة Learn Skills Daily الكاملة في إليستريتور — كل شيء في فيديو واحد، من الأشكال إلى الرسوم المعقدة.",
    lessons: [{ id: "3RTqLQ1MaQU", title: "Illustrator Full Course Tutorial (6+ Hours)", length: "6:19:30" }],
  },
  {
    id: "flux-illustrator-ar",
    titleEn: "Intensive Adobe Illustrator course (Arabic)",
    titleAr: "دورة مكثفة في Adobe Illustrator (بالعربية)",
    channel: "Flux Academy",
    category: "design",
    level: "Beginner",
    language: "AR",
    hours: "~0.8h",
    views: "585K",
    descEn:
      "A compact Arabic Illustrator intensive — for complete beginners, taught entirely in Arabic.",
    descAr:
      "دورة عربية مكثفة في إليستريتور — لمن يبدأ من الصفر، وبلغة عربية بالكامل.",
    lessons: [{ id: "n_-ygXZUq3U", title: "دورة مكثفة في Adobe Illustrator (للمبتدئين تماماً)", length: "46:16" }],
  },
  {
    id: "will-paterson-1h",
    titleEn: "Learn Adobe Illustrator 2025 in 1 hour",
    titleAr: "تعلم Adobe Illustrator 2025 في ساعة",
    channel: "Will Paterson",
    category: "design",
    level: "Beginner",
    language: "EN",
    hours: "~1.2h",
    views: "247K",
    descEn:
      "A modern 2025 crash course — the fastest professional onboarding to Illustrator.",
    descAr:
      "كورس مختصر حديث لعام 2025 — أسرع احترافٍ لأساسيات إليستريتور.",
    lessons: [{ id: "h7komjsQq50", title: "Learn Adobe Illustrator 2025 in 1 Hour — Beginner's Full Crash Course", length: "1:09:35" }],
  },
]

export function getVideoCourse(id: string): VideoCourse | null {
  return VIDEO_COURSES.find((c) => c.id === id) ?? null
}

/** YouTube thumbnail URL for a lesson (always-available hq quality). */
export function ytThumb(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
}

/** Privacy-enhanced embed URL for the in-app player. */
export function ytEmbed(videoId: string): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`
}
