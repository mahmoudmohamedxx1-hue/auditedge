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

import { VIDEO_COURSES_V27 } from "./video-courses-v27"

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
  category: "audit" | "accounting" | "ifrs" | "acca" | "cpa" | "cma" | "cfa" | "design" | "excel" | "word"
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
  { id: "ifrs", labelEn: "IFRS", labelAr: "المعايير الدولية" },
  { id: "acca", labelEn: "ACCA", labelAr: "ACCA" },
  { id: "cpa", labelEn: "CPA", labelAr: "CPA" },
  { id: "cma", labelEn: "CMA", labelAr: "CMA" },
  { id: "cfa", labelEn: "CFA", labelAr: "CFA" },
  { id: "accounting", labelEn: "Foundations", labelAr: "التأسيس" },
  // v27 — the office pair: advanced Excel + Word
  { id: "excel", labelEn: "Excel", labelAr: "إكسل" },
  { id: "word", labelEn: "Word", labelAr: "وورد" },
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
    category: "acca",
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
    category: "acca",
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

  /* ==================== v25 — Arabic IFRS / ACCA / CPA / CMA tracks ====================
   * The learner asked for more Arabic IFRS, ACCA, CPA and CMA courses and a
   * reorganised catalog. Every video id below was verified live via
   * YouTube oEmbed on 2026-09-29 (title + channel confirmed). */
  {
    id: "hossam-saad-ifrs-series",
    titleEn: "The IFRS standards series — Conceptual Framework, IAS 1, IFRS 15, 16 & 5",
    titleAr: "\u0633\u0644\u0633\u0644\u0629 \u0645\u0639\u0627\u064a\u064a\u0631 IFRS \u2014 \u0627\u0644\u0625\u0637\u0627\u0631 \u0627\u0644\u0645\u0641\u0627\u0647\u064a\u0645\u064a \u0648IAS 1 \u0648IFRS 15 \u064816 \u06485",
    channel: "\u062f\u0644\u064a\u0644\u0643 \u0644\u0641\u0647\u0645 \u0627\u0644\u0645\u062d\u0627\u0633\u0628\u0629 \u062d\u0633\u0627\u0645 \u0633\u0639\u062f hossam saad",
    category: "ifrs",
    level: "Intermediate",
    language: "AR",
    hours: "~6.4h",
    views: "204K+ combined",
    descEn:
      "A five-deep-dive Arabic standards series: the Conceptual Framework, IAS 1 presentation, IFRS 15 revenue, IFRS 16 leases and IFRS 5 held-for-sale — full-length lessons with worked examples.",
    descAr:
      "\u0633\u0644\u0633\u0644\u0629 \u0639\u0631\u0628\u064a\u0629 \u0645\u0646 \u062e\u0645\u0633 \u062c\u0644\u0633\u0627\u062a \u0645\u0639\u0645\u0642\u0629: \u0627\u0644\u0625\u0637\u0627\u0631 \u0627\u0644\u0645\u0641\u0627\u0647\u064a\u0645\u064a \u0648IAS 1 \u0648IFRS 15 \u0648IFRS 16 \u0648IFRS 5 \u2014 \u062f\u0631\u0648\u0633 \u0643\u0627\u0645\u0644\u0629 \u0628\u0623\u0645\u062b\u0644\u0629 \u0645\u062d\u0644\u0648\u0644\u0629.",
    lessons: [
      { id: "HG9VrmR_0Pg", title: "\u0627\u0644\u0645\u0642\u062f\u0645\u0629 \u0648\u0627\u0637\u0627\u0631 \u0627\u0644\u0645\u0641\u0627\u0647\u064a\u0645 Conceptual Framework", length: "43:15" },
      { id: "hq_t4dI6nQ4", title: "IAS 1 \u0639\u0631\u0636 \u0627\u0644\u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u0645\u0627\u0644\u064a\u0629", length: "1:09:14" },
      { id: "Rg-bLQyRg5M", title: "IFRS 15 \u0627\u0644\u0625\u064a\u0631\u0627\u062f \u0645\u0646 \u0627\u0644\u0639\u0642\u0648\u062f \u0645\u0639 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 (\u062c1)", length: "1:27:17" },
      { id: "E-PSUX9EWe8", title: "IFRS 16 \u0645\u0639\u064a\u0627\u0631 \u0627\u0644\u0625\u064a\u062c\u0627\u0631\u0627\u062a", length: "1:45:41" },
      { id: "92oCcJW7O40", title: "IFRS 5 \u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u0645\u062d\u062a\u0641\u0638 \u0628\u0647\u0627 \u0644\u0644\u0628\u064a\u0639", length: "1:17:15" },
    ],
  },
  {
    id: "cpa-talks-cpa-track",
    titleEn: "The CPA & professional-certification track",
    titleAr: "\u0645\u0633\u0627\u0631 \u0634\u0647\u0627\u062f\u0629 CPA \u0648\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629",
    channel: "CPA Talks",
    category: "cpa",
    level: "Beginner",
    language: "AR",
    hours: "~0.9h",
    views: "43K+ combined",
    descEn:
      "CPA Talks' certification series — everything about earning the CPA, working in UK audit, beating the cost obstacle, and answers to followers' questions. The Egyptian companion to your exam journey.",
    descAr:
      "\u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u0647\u0646\u064a\u0629 \u0645\u0646 CPA Talks \u2014 \u0643\u0644 \u0634\u064a\u0621 \u0639\u0646 \u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 CPA \u0648\u0627\u0644\u0639\u0645\u0644 \u0641\u064a \u0627\u0644\u062a\u062f\u0642\u064a\u0642 \u0628\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0648\u062a\u062e\u0637\u064a \u0639\u0627\u0626\u0642 \u0627\u0644\u062a\u0643\u0644\u0641\u0629 \u0648\u0623\u062c\u0648\u0628\u0629 \u0639\u0644\u0649 \u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u064a\u0646.",
    lessons: [
      { id: "4JdDvZo9-44", title: "(1) \u0643\u0644 \u0645\u0627 \u062a\u0631\u064a\u062f \u0645\u0639\u0631\u0641\u062a\u0647 \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0627\u0644CPA", length: "6:25" },
      { id: "n8K1IIAteFs", title: "(2) \u0625\u0632\u0627\u064a \u0627\u0634\u062a\u063a\u0644\u062a \u0641\u064a \u0627\u0644\u0625\u0645\u0645\u0644\u0643\u0629 \u0628\u0627\u0644\u0645\u062d\u0627\u0633\u0628\u0629 \u0648\u0627\u0644\u062a\u062f\u0642\u064a\u0642\u061f", length: "5:09" },
      { id: "2_bL3PxmxSw", title: "(3) \u0646\u0635\u0627\u0626\u062d \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u0634\u0647\u0627\u062f\u0629 \u0645\u0647\u0646\u064a\u0629", length: "21:12" },
      { id: "YIT2IkCSTYw", title: "(4) \u0623\u0633\u0626\u0644\u0629 \u0648\u0623\u062c\u0648\u0628\u0629 \u0645\u0646 \u0645\u062a\u0627\u0628\u0639\u064a\u0646\u0627", length: "20:24" },
    ],
  },

  /* ==================== v26 — FULL courses replacing the one-lecture
   *  fragments ("courses that are only one lecture — not the full picture").
   *  Complete Arabic playlists: CMA Part 1 & Part 2 (Amro Taison), CMA P1
   *  2026 section A (Efham CMA), CPA AUD + FAR (Amro Taison), the full
   *  DipIFR diploma (Abdalla Abdelnaim, 100+ hours), the complete CertIFR
   *  session course (The Accounting Planet) and the chapter-by-chapter ACCA
   *  FA/F3 course (Sowmya Sasun). Every id, title and duration captured
   *  live from the playlist pages on 2026-09-29. */

  {
    id: "cma-p1-amro",
    titleEn: "CMA Part 1 — the complete course (all 13 units)",
    titleAr: "CMA الجزء الأول — الكورس الكامل (13 وحدة)",
    channel: "Amro Taison",
    category: "cma",
    level: "Intermediate",
    language: "AR",
    hours: "~76.6h",
    views: "YouTube playlist",
    descEn: "The whole CMA Part 1 in one playlist — 30 lectures walking every unit of the 2020-onwards syllabus (financial reporting, planning, performance, cost management, internal controls…), taught in Arabic by Amro Abdelmeguid.",
    descAr: "منهج CMA الجزء الأول كاملًا في قائمة واحدة — 30 محاضرة تغطي كل وحدات المنهج (التقارير المالية والتخطيط والأداء وإدارة التكاليف والرقابة الداخلية…) بشرح عمرو عبدالمجيد.",
    lessons: [
      { id: "tetkhEKgC4A", title: "CMA S1 L1 - Unit 1 by Amro Abdelmeguid - الجزء الأول - المحاضرة الأولي - الفصل الأول", length: "1:52:00" },
      { id: "-RZqWa2eBqc", title: "#CMA S1 L2 - Unit 1 by Amro Abdelmeguid - الجزء الأول - المحاضرة الثانية - الفصل الأول", length: "2:23:00" },
      { id: "_8DpcXpnZzY", title: "#CMA S1 L3 - Unit 1 by Amro Abdelmeguid - الجزء الأول - المحاضرة الثالثة  - الفصل الأول", length: "1:24:00" },
      { id: "NH47cCYR-Lw", title: "#CMA S1 L4 - Unit 1 by Amro Abdelmeguid - الجزء الأول - المحاضرة الرابعة - الفصل الأول", length: "1:44:00" },
      { id: "NkL30wG3LXg", title: "#CMA S1 L5 - Unit 2 by Amro Abdelmeguid - الجزء الأول - المحاضرة الخامسة - الفصل الثاني", length: "2:02:00" },
      { id: "sG3ZeEShWuo", title: "#CMA S1 L6 - Unit 2 by Amro Abdelmeguid - الجزء الأول - المحاضرة السادسة - الفصل الثاني", length: "2:13:00" },
      { id: "r_l3I4UXYFg", title: "#CMA S1 L7 - Unit 3 by Amro Abdelmeguid - الجزء الأول - المحاضرة السابعة - الفصل الثالث", length: "2:26:00" },
      { id: "aTWSgRyV7-o", title: "#CMA S1 L8 - Unit 3 by Amro Abdelmeguid - الجزء الأول - المحاضرة الثامنة - الفصل الثالث", length: "2:58:00" },
      { id: "mfeyDTTtCvg", title: "#CMA S1 L9 - Unit 3 by Amro Abdelmeguid - الجزء الأول - المحاضرة التاسعة - الفصل الثالث", length: "1:53:00" },
      { id: "Jj9n_wBPbJk", title: "#CMA S1 L10 - Unit 4 by Amro Abdelmeguid - الجزء الأول - المحاضرة العاشرة - الفصل الرابع", length: "2:16:00" },
      { id: "p0GSM9HtdTg", title: "#CMA S1 L11 - Unit 4 by Amro Abdelmeguid - الجزء الأول - المحاضرة الأحدي عشر- الفصل الرابع", length: "1:27:00" },
      { id: "ls1HPpjiWxk", title: "#CMA S1 L12 - Unit 5 by Amro Abdelmeguid - الجزء الأول - المحاضرة الثانية عشر- الفصل الخامس", length: "2:33:00" },
      { id: "owkJFiwBmas", title: "#CMA S1 L13 - Unit 5 by Amro Abdelmeguid - الجزء الأول - المحاضرة الثالثة عشر- الفصل الخامس", length: "1:59:00" },
      { id: "XWPBe8b65ro", title: "#CMA S1 L14 - Unit 6 by Amro Abdelmeguid - الجزء الأول - المحاضرة الرابعة عشر- الفصل السادس", length: "3:13:00" },
      { id: "WQjWV-Qb-S4", title: "#CMA S1 L15 - Unit 6 by Amro Abdelmeguid - الجزء الأول - المحاضرة الخامسة عشر- الفصل السادس", length: "2:44:00" },
      { id: "Lt1o_EjnWlQ", title: "#CMA S1 L16 - Unit 7 by Amro Abdelmeguid - الجزء الأول - المحاضرة السادسة عشر- الفصل السابع", length: "2:40:00" },
      { id: "2mfOseFaSaE", title: "#CMA S1 L17 - Unit 7 by Amro Abdelmeguid - الجزء الأول - المحاضرة السابعة عشر- الفصل السابع", length: "3:05:00" },
      { id: "xFSUInPaP90", title: "#CMA S1 L18 - Unit 8 by Amro Abdelmeguid - الجزء الأول - المحاضرة الثامنة عشر- الفصل الثامن", length: "2:35:00" },
      { id: "tIYD8TLz64A", title: "#CMA S1 L19 - Unit 8 by Amro Abdelmeguid - الجزء الأول - المحاضرة التاسعة عشر- الفصل الثامن", length: "3:14:00" },
      { id: "m6cVTnTXwDE", title: "#CMA S1 L20 - Unit 9 by Amro Abdelmeguid - الجزء الأول - المحاضرة العشرون - الفصل التاسع", length: "3:03:00" },
      { id: "tO_ECS0F8SQ", title: "#CMA S1 L21 - Unit 9 by Amro Abdelmeguid - الجزء الأول - المحاضرة الحادية والعشرون - الفصل التاسع", length: "2:38:00" },
      { id: "JhMGs1WxPR4", title: "#CMA S1 L22 - Unit 10 by Amro Abdelmeguid - الجزء الأول - المحاضرة الثانية  والعشرون - الفصل العاشر", length: "3:17:00" },
      { id: "nBHpT2y-Z64", title: "#CMA S1 L23 - Unit 10 by Amro Abdelmeguid - الجزء الأول - المحاضرة الثالثة والعشرون - الفصل العاشر", length: "2:25:00" },
      { id: "1GtbrkHhUtU", title: "#CMA S1 L24 - Unit 11 by Amro Abdelmeguid - 11 الجزء الأول - المحاضرة الرابعة والعشرون - الفصل", length: "2:38:00" },
      { id: "DaOe08ED8qI", title: "#CMA S1 L25 - Unit 12 by Amro Abdelmeguid - 12 الجزء الأول - المحاضرة الخامسة والعشرون - الفصل", length: "2:44:00" },
      { id: "rvCvQ7j3B18", title: "#CMA S1 L26 - Unit 12 by Amro Abdelmeguid - 12 الجزء الأول - المحاضرة السادسة والعشرون - الفصل", length: "2:37:00" },
      { id: "ti1kI6dPL8s", title: "#CMA S1 L27 - Unit 12 by Amro Abdelmeguid - 12 الجزء الأول - المحاضرة السابعة والعشرون - الفصل", length: "3:12:00" },
      { id: "uMpz82LHthE", title: "#CMA S1 L28 - Unit 13 by Amro Abdelmeguid - 13 الجزء الأول - المحاضرة الثامنة والعشرون - الفصل", length: "3:00:00" },
      { id: "HpObMc2DrWk", title: "#CMA S1 L29 - Unit 13 by Amro Abdelmeguid - 13 الجزء الأول - المحاضرة التاسعة والعشرون - الفصل", length: "3:30:00" },
      { id: "BpOAogLDvzk", title: "#CMA S1 L30 (Final One) by Amro Abdelmeguid - الجزء الأول - المحاضرة الثلاثون - الحصة الأخيرة", length: "2:52:00" },
    ],
  },

  {
    id: "cma-p2-amro",
    titleEn: "CMA Part 2 — the complete course (all 10 units)",
    titleAr: "CMA الجزء الثاني — الكورس الكامل (10 وحدات)",
    channel: "Amro Taison",
    category: "cma",
    level: "Advanced",
    language: "AR",
    hours: "~47.6h",
    views: "YouTube playlist",
    descEn: "The companion Part 2 course — 19 long lectures covering financial statement analysis, corporate finance, decision analysis, risk management and investment decisions, unit by unit, in Arabic.",
    descAr: "الكورس المكمّل للجزء الثاني — 19 محاضرة طويلة تغطي تحليل القوائم المالية وتمويل الشركات وتحليل القرارات وإدارة المخاطر وقرارات الاستثمار، وحدة وحدة، بالعربية.",
    lessons: [
      { id: "d9dBBwl2-Fs", title: "#CMA P2 L1 - Unit 1 by Amro Abdelmeguid - 1 الجزء الثاني - المحاضرة الأولي - الفصل", length: "2:08:00" },
      { id: "GEbKLZ3K9B4", title: "#CMA P2 L2 - Unit 1 by Amro Abdelmeguid - 1 الجزء الثاني - المحاضرة الثانية - الفصل", length: "3:44:00" },
      { id: "6ZKhoUomD5o", title: "#CMA P2 L3 - Unit 2 by Amro Abdelmeguid - 2 الجزء الثاني - المحاضرة الثالثة - الفصل", length: "3:51:00" },
      { id: "tgCzQDOJZBk", title: "#CMA P2 L4 - Unit 2 by Amro Abdelmeguid - 2 الجزء الثاني - المحاضرة الرابعة - الفصل", length: "4:32:00" },
      { id: "nXfafd455y0", title: "#CMA P2 L5 - Unit 3 by Amro Abdelmeguid - 3 الجزء الثاني - المحاضرة الخامسة - الفصل", length: "3:53:00" },
      { id: "A7V23lUdTNs", title: "#CMA P2 L6 - Unit 3 by Amro Abdelmeguid - 3 الجزء الثاني - المحاضرة السادسة - الفصل", length: "1:40:00" },
      { id: "4abU7ETmHfY", title: "#CMA P2 L7 - Unit 4 by Amro Abdelmeguid - 4 الجزء الثاني - المحاضرة السابعة - الفصل", length: "3:26:00" },
      { id: "lmQGrZWSX2k", title: "#CMA P2 L8 - Unit 4 by Amro Abdelmeguid - 4 الجزء الثاني - المحاضرة الثامنة - الفصل", length: "1:51:00" },
      { id: "DJ6Var1kt_8", title: "#CMA P2 L9 - Unit 5 by Amro Abdelmeguid - 5 الجزء الثاني - المحاضرة التاسعة - الفصل", length: "1:37:00" },
      { id: "ELWVwnOnEbE", title: "#CMA P2 L10 - Unit 5 by Amro Abdelmeguid - 5 الجزء الثاني - المحاضرة العاشرة - الفصل", length: "1:26:00" },
      { id: "OZAr-wjeUxE", title: "#CMA P2 L11 - Unit 5 by Amro Abdelmeguid - 5 الجزء الثاني - المحاضرة الحادية عشر - الفصل", length: "2:03:00" },
      { id: "kqA7OQ_JLZ4", title: "#CMA P2 L12 - Unit 6 by Amro Abdelmeguid - 6 الجزء الثاني - المحاضرة الثانية عشر - الفصل", length: "2:17:00" },
      { id: "td0ZiXcP3u4", title: "#CMA P2 L13 - Unit 6 by Amro Abdelmeguid - 6 الجزء الثاني - المحاضرة الثالثة عشر - الفصل", length: "1:30:00" },
      { id: "91TBwW-U8PM", title: "#CMA P2 L14 - Unit 7 by Amro Abdelmeguid - 7 الجزء الثاني - المحاضرة الرابعة عشر - الفصل", length: "2:23:00" },
      { id: "X5nlitEq6sM", title: "#CMA P2 L15 - Unit 8 by Amro Abdelmeguid - 8 الجزء الثاني - المحاضرة الخامسة عشر - الفصل", length: "2:13:00" },
      { id: "8-xe9nUt6us", title: "#CMA P2 L16 - Unit 8 by Amro Abdelmeguid - 8 الجزء الثاني - المحاضرة السادسة عشر - الفصل", length: "2:37:00" },
      { id: "9cnBvJu07SA", title: "#CMA P2 L17 - Unit 9 by Amro Abdelmeguid - 9 الجزء الثاني - المحاضرة السابعة عشر - الفصل", length: "1:49:00" },
      { id: "tLMGQ6Ht1Gk", title: "#CMA P2 L18 - Unit 10 by Amro Abdelmeguid - 10 الجزء الثاني - المحاضرة الثامنة عشر - الفصل", length: "2:03:00" },
      { id: "f4vwMaTzk9g", title: "#CMA P2 L19 - Unit 10 by Amro Abdelmeguid - 10 الجزء الثاني - المحاضرة التاسعة عشر - الفصل", length: "2:33:00" },
    ],
  },

  {
    id: "cma-p1-efham",
    titleEn: "CMA Part 1 (2026 edition) — Section A in depth",
    titleAr: "CMA الجزء الأول (نسخة 2026) — القسم A بعمق",
    channel: "Efham CMA",
    category: "cma",
    level: "Beginner",
    language: "AR",
    hours: "~18.6h",
    views: "YouTube playlist",
    descEn: "The 2026-edition walk-through of Section A — 45+ short focused sessions from the financial statements to deferred taxes, each followed by solved question sessions. Perfect alongside the full Part 1 course.",
    descAr: "شرح نسخة 2026 للقسم A — أكثر من 45 جلسة قصيرة مركزة من القوائم المالية حتى الضرائب المؤجلة، تتبعها جلسات حل أسئلة. مثالي بجانب كورس الجزء الأول الكامل.",
    lessons: [
      { id: "lbaYAvXThXI", title: "1 CMA curriculum شرح ترتيب المنهج", length: "9:00" },
      { id: "68NdTm0F-Eg", title: "2 Trial Balance شرح فكرة ال", length: "7:00" },
      { id: "YgjpCFuA_KE", title: "A/1 Basics of Financial Accounting", length: "23:00" },
      { id: "T03Kf6-gyn8", title: "A/2 Balance Sheet شرح الميزانيه العموميه", length: "34:00" },
      { id: "woJU5lAItAk", title: "A/3 BS questions حل اسئلة الميزانيه العموميه", length: "16:00" },
      { id: "vX2uEKVyz0I", title: "ِA/4 Income Statement قائمة الدخل", length: "36:00" },
      { id: "FjnFwZ1GSkU", title: "ِA/5 OCI-Other Comprehensive Income قائمة الدخل الشامل", length: "26:00" },
      { id: "iLXgeoFJcGU", title: "A/6 Changes in equity قائمة التغير في حقوق الملكيه", length: "14:00" },
      { id: "WfiQWHgSCEc", title: "A/7 Income Statement Questions", length: "18:00" },
      { id: "na8CXk4CP8w", title: "ِA/8 Statement of cash flows SCF قائمة التدفقات النقديه", length: "53:00" },
      { id: "nLGeFp7ULhc", title: "A/9 Statement of cash flows حل أسئلة", length: "15:00" },
      { id: "3Gy4zX7J9LQ", title: "A/10 Integrated Reporting-IR1", length: "57:00" },
      { id: "PrlMI_JgpAg", title: "A/11 Integrated Reporting-IR2", length: "40:00" },
      { id: "IfH23g-8B1w", title: "A/12 Accounting principles and cash المبادئ المحاسبيه الاساسيه", length: "28:00" },
      { id: "6pVNoQZsrho", title: "A/13 Accounts Receivables AR حسابات العملاء", length: "46:00" },
      { id: "5daCO5QOHIc", title: "A/14 Accounts Receivables (examples)", length: "18:00" },
      { id: "gmGV2GXubQU", title: "A/15 Inventory Initial and Physical Count", length: "24:00" },
      { id: "RMcnMkzHhdw", title: "A/16 Inventory الجرد الدوري والجرد المستمر", length: "21:00" },
      { id: "k3EgDQHjoDE", title: "A/17 Inventory Questions 1", length: "15:00" },
      { id: "YyRtx6qAoaM", title: "A/18 Inventory FIFO/LIFO قياس المخزون", length: "41:00" },
      { id: "fnTs4A-eVqA", title: "A/19 Inventory Questions 2", length: "10:00" },
      { id: "zYkR9RMdh54", title: "A/20 Inventory write-down", length: "27:00" },
      { id: "PfCDJeCo9wg", title: "A/21 Inventory write-down questions", length: "8:00" },
      { id: "3CD95SuS5l0", title: "A/22 Investments in Bonds الاستثمار في السندات", length: "44:00" },
      { id: "YGfsSkTpDm0", title: "A/23 Bonds questions اسئله الاستثمار في السندات", length: "10:00" },
      { id: "yKePPZ2B_ds", title: "A/24 Investments in Shares الاستثمار في اسهم الشركات الاخري", length: "1:00:00" },
      { id: "uQxDLh8buHs", title: "A/25 Shares Questions أسئلة الاستثمار في الأسهم", length: "10:00" },
      { id: "4ObFVd5GwHE", title: "A/26 Fixed Assets الأصول الثابته", length: "18:00" },
      { id: "ne9cYd9SKK8", title: "A/27 FA Depreciation إهلاك الأصول الثابته", length: "27:00" },
      { id: "RSEGYCqX4jM", title: "A/28 FA Impairment إضمحلال الاصول الثابته", length: "18:00" },
      { id: "Q5ybZQnUCkg", title: "A/29 Fixed Assets GAAP vs IFRS", length: "11:00" },
      { id: "A7gg1zNuCbU", title: "A/30 Fixed Assets Questions أسئلة الاصول الثابته", length: "16:00" },
      { id: "P47XRsvsS7M", title: "A/31 Depreciation for tax purposes الاهلاك الضريبي", length: "16:00" },
      { id: "5T4qF3W9c5U", title: "A/32 Intangible Assets الاصول غير الملموسه", length: "26:00" },
      { id: "0zoOetz8M7A", title: "A/33 Intangibles Impairment اضمحلال الاصول الغير ملموسه", length: "22:00" },
      { id: "wGvAZ4u3FnQ", title: "A/34 Intangibles GAAP vs IFRS", length: "4:00" },
      { id: "OgtOnjfRg0Y", title: "A/35 Intangibles Questions حل أسئله علي الاصول غير الملموسه", length: "14:00" },
      { id: "m3v_QEI7gF8", title: "A/36 Reclassify Current Liabilities", length: "5:00" },
      { id: "BAHguWZE1Xg", title: "A/37 Warranties", length: "32:00" },
      { id: "2ISUU-k1VkM", title: "A/38 Warranties Questions", length: "9:00" },
      { id: "Ev7fbKGLp-g", title: "A/39 Leases", length: "31:00" },
      { id: "v7SeJqMNyLA", title: "A/40 Finance Lease", length: "35:00" },
      { id: "U834wpg2WWM", title: "A/41 Operating Lease", length: "16:00" },
      { id: "531HIwL4s7g", title: "A/42 Lease Questions", length: "13:00" },
      { id: "DSIrpw4AEuw", title: "A/43 Deferred Income Tax", length: "51:00" },
      { id: "xlQ5Gpwuvyc", title: "A/44 Income Tax 3 scenarios حالات عمليه", length: "34:00" },
      { id: "HiXkO4u_220", title: "A/45 Income Tax Questions حل أسئله الضريبه المؤجله", length: "7:00" },
    ],
  },

  {
    id: "cpa-aud-amro",
    titleEn: "CPA AUD — the complete audit course (8 modules)",
    titleAr: "CPA AUD — كورس المراجعة الكامل (8 فصول)",
    channel: "Amro Taison",
    category: "cpa",
    level: "Advanced",
    language: "AR",
    hours: "~43.0h",
    views: "YouTube playlist",
    descEn: "The full CPA Auditing & Attestation course in Arabic — 21 lectures across all 8 modules: engagement acceptance, risk, evidence, reviews of the engagement… the whole AUD blueprint.",
    descAr: "كورس مادة المراجعة والتأكيد لشهادة المحاسب القانوني الأمريكي كاملًا بالعربية — 21 محاضرة على مدار الفصول الثمانية: قبول الارتباط والمخاطر والأدلة ومراجعات الارتباط… خريطة AUD بأكملها.",
    lessons: [
      { id: "o1O5XzzFY2I", title: "CPA - Audit - Lec 1 - Module 1 - الحصة الأولي من مادة المراجعة - الفصل الأول", length: "2:00:00" },
      { id: "Ma1zGzbhDd8", title: "CPA - Audit - Lec 2 - Module 1 - الحصة الثانية من مادة المراجعة - الفصل الأول", length: "2:30:00" },
      { id: "GHNfdLx5GJ8", title: "CPA - Audit - Lec 3 - Module 1 - الحصة الثالثة من مادة المراجعة - الفصل الأول", length: "58:00" },
      { id: "E6NJJuRBF0Q", title: "CPA - Audit - Lec 4 - Module 1 - الحصة الرابعة من مادة المراجعة - الفصل الأول", length: "1:15:00" },
      { id: "jm9GT9luftU", title: "CPA - Audit - Lec 5 - Module 2 - الحصة الخامسة من مادة المراجعة - الفصل الثاني", length: "2:16:00" },
      { id: "t07gMu7Tugc", title: "CPA - Audit - Lec 6 - Module 2 - الحصة السادسة من مادة المراجعة - الفصل الثاني", length: "2:38:00" },
      { id: "6JFACLEvdDA", title: "CPA - Audit - Lec 7 - Module 3 - الحصة السابعة من مادة المراجعة - الفصل الثالث", length: "2:14:00" },
      { id: "bZ_omPLO3pw", title: "CPA - Audit - Lec 8 - Module 3 - الحصة الثامنة من مادة المراجعة - الفصل الثالث", length: "2:11:00" },
      { id: "A8zQ3XbD3nw", title: "CPA - Audit - Lec 9 - Module 3 - الحصة التاسعة من مادة المراجعة - الفصل الثالث", length: "2:53:00" },
      { id: "AV11XMHUVeI", title: "CPA - Audit - Lec 10 - Module 4 - الحصة العاشرة من مادة المراجعة - الفصل الرابع", length: "1:23:00" },
      { id: "-VOlSiKRID4", title: "CPA - Audit - Lec 11 - Module 4 - الحصة الحادية عشر من مادة المراجعة - الفصل الرابع", length: "2:23:00" },
      { id: "VSaKsnPMhLI", title: "CPA Amro Abdelmeguid - Audit - Lec 12 - Module 4 - الحصة الثانية عشر من مادة المراجعة - الفصل الرابع", length: "2:10:00" },
      { id: "9yH7hfadS7c", title: "CPA Amro Abdelmeguid - Audit - L 13 - Module 4 - الحصة الثالثة عشر من مادة المراجعة - الفصل الرابع", length: "1:38:00" },
      { id: "6klhGD6dCwI", title: "CPA Amro Abdelmeguid - Audit - L 14 - Module 5 - الحصة الرابعة عشر من مادة المراجعة - الفصل الخامس", length: "2:22:00" },
      { id: "NG2RWDLqSKU", title: "CPA Amro Abdelmeguid - Audit - L 15 - Module 5 - الحصة الخامسة عشر من مادة المراجعة - الفصل الخامس", length: "2:19:00" },
      { id: "yIm-X9Aztlk", title: "CPA Amro Abdelmeguid - Audit - L 16 - Module 5 - الحصة السادسة عشر من مادة المراجعة - الفصل الخامس", length: "1:21:00" },
      { id: "fxGSg8AiSEk", title: "CPA Amro Abdelmeguid - Audit - L17 - Module 5 - الحصة السابعة عشر من مادة المراجعة - الفصل الخامس", length: "3:03:00" },
      { id: "YNsazJDt7Lw", title: "CPA Amro Abdelmeguid - Audit - L18 - Module 7 - الحصة الثامنة عشر من مادة المراجعة - الفصل السابع", length: "2:28:00" },
      { id: "VPlwDvrSRw8", title: "CPA Amro Abdelmeguid - Audit - L19 - Module 7 - الحصة التاسعة عشر من مادة المراجعة - الفصل السابع", length: "2:06:00" },
      { id: "d2_FlBCKOiU", title: "CPA Amro Abdelmeguid - Audit - L20 - Module 6 - الحصة العشرون من مادة المراجعة - الفصل السادس", length: "56:00" },
      { id: "v9eBiVfpQe0", title: "CPA Amro Abdelmeguid - Audit - L21 - Module 8 - الحصة 21 الأخيرة من مادة المراجعة - الفصل الثامن", length: "1:59:00" },
    ],
  },

  {
    id: "cpa-far-amro",
    titleEn: "CPA FAR — the complete financial course (F2–F9)",
    titleAr: "CPA FAR — الكورس المالي الكامل (F2–F9)",
    channel: "Amro Taison",
    category: "cpa",
    level: "Advanced",
    language: "AR",
    hours: "~57.5h",
    views: "YouTube playlist",
    descEn: "The full CPA Financial Accounting & Reporting course in Arabic — 29 lectures from the conceptual framework and statements through to the final revision, module by module.",
    descAr: "كورس المحاسبة والتقارير المالية لشهادة المحاسب القانوني كاملًا بالعربية — 29 محاضرة من الإطار المفاهيمي والقوائم حتى المراجعة النهائية، فصلًا فصلًا.",
    lessons: [
      { id: "vEKnicY1mXA", title: "CPA - FAR - S1 - L1 - Introduction and F2 - المحاضرة الأولي", length: "1:37:00" },
      { id: "S85ih07z9_s", title: "CPA - FAR - S1 - L3 - F2 - المحاضرة الثالثة", length: "1:52:00" },
      { id: "CN4-ux5M5YU", title: "CPA - FAR - S1 - L4 - F4 - المحاضرة الرابعة", length: "2:28:00" },
      { id: "Jmyfm7quutQ", title: "CPA - FAR - S1 - L6 - F4 - المحاضرة السادسة", length: "3:04:00" },
      { id: "kdq_1h-TyIU", title: "CPA - FAR - S1 - L7 - F4 & F2 - المحاضرة السابعة", length: "2:00:00" },
      { id: "NkM7ZCzt3BM", title: "CPA - FAR - S1 - L8 - F5 - المحاضرة الثامنة", length: "3:05:00" },
      { id: "NKp_nv-A3Yc", title: "CPA - FAR - S1 - L9 - F5 - المحاضرة التاسعة", length: "1:57:00" },
      { id: "SvNsfpiSTPw", title: "CPA - FAR - S1 - L10 - F5 - Amro Abdelmeguid - Lecture 10", length: "1:49:00" },
      { id: "D-4i07_57ng", title: "CPA - FAR - S1 - L11 - F7 - Amro Abdelmeguid - المحاضرة الحادية عشر", length: "2:56:00" },
      { id: "l8mQHOEjomc", title: "CPA - FAR - S1 - L12 - F7 - Amro Abdelmeguid - المحاضرة الثانية عشر", length: "1:49:00" },
      { id: "OEG1wkIKN_o", title: "CPA - FAR - S1 - L13 - F7 - Amro Abdelmeguid - المحاضرة الثالثة عشر", length: "1:52:00" },
      { id: "zC484TgQj5c", title: "CPA - FAR - S1 - L14 - F3 - Amro Abdelmeguid - المحاضرة الرابعة غشر", length: "2:11:00" },
      { id: "WbMzvUYerlE", title: "CPA - FAR - S1 - L15 - F3 - Amro Abdelmeguid - المحاضرة الخامسة عشر", length: "2:23:00" },
      { id: "uDgYVkMKBig", title: "CPA - FAR - S1 - L16 - F3 - Amro Abdelmeguid - المحاضرة السادسة عشر", length: "1:18:00" },
      { id: "CtdeEZcTcYE", title: "CPA - FAR - S1 - L17 - F2 - Amro Abdelmeguid - المحاضرة السابعة عشر", length: "1:27:00" },
      { id: "l42qYdsaKZI", title: "CPA - FAR - S1 - L18 - F6 - Amro Abdelmeguid - المحاضرة الثامنة عشر", length: "2:06:00" },
      { id: "h-OfrjE-gPA", title: "CPA - FAR - S1 - L19 - F6 - Amro Abdelmeguid - المحاضرة التاسعة عشر", length: "1:15:00" },
      { id: "tF-3dZsGaB8", title: "CPA - FAR - S1 - L20 - F6 - Amro Abdelmeguid - المحاضرة العشرين", length: "3:15:00" },
      { id: "0cHyR1B3xoc", title: "CPA - FAR - S1 - L21 - F10 - Amro Abdelmeguid - المحاضرة الحادية والعشرين", length: "2:36:00" },
      { id: "Dayny66HChY", title: "CPA - FAR - S1 - L22 - F10 - Amro Abdelmeguid - المحاضرة الثانية والعشرين", length: "1:59:00" },
      { id: "H-vVy1adkR0", title: "CPA - FAR - S1 - L23 - F10 - Amro Abdelmeguid - المحاضرة الثالثة والعشرين", length: "2:27:00" },
      { id: "oYFeYwLUN08", title: "CPA - FAR - S1 - L24 - F8 - Amro Abdelmeguid - المحاضرة الرابعة والعشرين", length: "2:05:00" },
      { id: "RMa3-apnc7I", title: "CPA - FAR - S1 - L25 - F8 - Amro Abdelmeguid - المحاضرة الخامسة والعشرين", length: "2:35:00" },
      { id: "Tm6wJJBcJoE", title: "CPA - FAR - S1 - L26 - F8 - Amro Abdelmeguid - Lecture Twenty-Six", length: "1:24:00" },
      { id: "DtLHnH6y2xY", title: "CPA - FAR - S1 - L27 - F9 - Amro Abdelmeguid - المحاضرة السابعة والعشرين", length: "1:52:00" },
      { id: "jBRO7ORJQ3c", title: "CPA - FAR - S1 - L28 - F9 - Amro Abdelmeguid - المحاضرة الثامنة والعشرين", length: "3:04:00" },
      { id: "c8IecFB8XMM", title: "CPA - FAR - S1 - L29 - Final - Amro Abdelmeguid - المحاضرة التاسعة والعشرين", length: "1:06:00" },
    ],
  },

  {
    id: "dipifr-abdelnaim",
    titleEn: "ACCA DipIFR — the full diploma (every standard)",
    titleAr: "دبلومة ACCA DipIFR — الدبلومة كاملة (كل المعايير)",
    channel: "Abdalla Abdelnaim",
    category: "ifrs",
    level: "Advanced",
    language: "AR",
    hours: "~108.2h",
    views: "YouTube playlist",
    descEn: "The entire IFRS diploma as taught by Abdalla Abdelnaim — 51 lectures, 100+ hours, every standard on the DipIFR syllabus: IAS 16/36/37/38/19/12/21/2/33, IFRS 16/3/2/5/13, financial instruments, consolidation (Ch 20–24) and past-paper solving.",
    descAr: "دبلومة المعايير الدولية كاملة مع عبدالله عبدالنعيم — 51 محاضرة وأكثر من 100 ساعة تغطي كل معايير المنهج: IAS 16/36/37/38/19/12/21/2/33 وIFRS 16/3/2/5/13 والأدوات المالية والتجميع (الفصول 20–24) وحل الامتحانات السابقة.",
    lessons: [
      { id: "PmMqHC0BB5M", title: "IAS16 01 V2 PPE with revaluation model", length: "2:49:00" },
      { id: "pKOmgejQutg", title: "IAS16 02 طرق الاهلاك", length: "1:49:00" },
      { id: "ZP9IYZaJE3M", title: "IAS 20 - IAS 40 - IAS 23", length: "3:05:00" },
      { id: "x7F1wgQy1do", title: "IAS 36   June 2022 Abdala Abdelnaim", length: "3:05:00" },
      { id: "ihC5KWhf0m4", title: "IFRS16 01", length: "2:42:00" },
      { id: "1l4J-90E4t4", title: "IFRS 16 02  Sale and Lease back", length: "2:13:00" },
      { id: "z6wmVRZ3duE", title: "IFRS16 03 lessor Accounting", length: "2:51:00" },
      { id: "YEaf6RvwkBE", title: "IAS 38 01 Intangible Assets", length: "2:50:00" },
      { id: "HKJstVzZP94", title: "IFRS 3 Business Combination(Goodwill)", length: "1:02:00" },
      { id: "pqnAjvbt4kQ", title: "IAS 37 Provisions, contingent assets and contingent liabilities", length: "3:00:00" },
      { id: "Unqzn8TpKT0", title: "IAS19 01 Intro", length: "25:00" },
      { id: "CaVSe9NCoF4", title: "IAS19 02 Short Term Ben", length: "44:00" },
      { id: "vut7tmxGR08", title: "IAS19 03 Contribution Plan", length: "17:00" },
      { id: "QVsKR7TgKr8", title: "IAS19 04 Benefit Plan", length: "1:10:00" },
      { id: "kcx0mzinXKA", title: "IAS19 Other LT ben and Termination ben", length: "2:41:00" },
      { id: "c0hmwLJ3bac", title: "Financial Instruments part 1", length: "3:09:00" },
      { id: "sjsWsrWwr_M", title: "Financial Instruments Par 2 Classification مع حل ديسمبر 2016", length: "2:38:00" },
      { id: "s3Iilqe8O-8", title: "Financial Instruments Part 3 Examples on remeasurement", length: "1:32:00" },
      { id: "kEL8zpsQSf0", title: "Financial Instruments Part  3 Cont.", length: "11:00" },
      { id: "po4rLXjeeLM", title: "Financial instruments FA Impairment", length: "1:50:00" },
      { id: "Z6u3Wo3w81Y", title: "Financial Instruments - Hedge Accounting", length: "2:34:00" },
      { id: "AwP5lG9Sfrk", title: "IAS 12 Income Taxes part 1", length: "2:51:00" },
      { id: "9Nohw8miMN4", title: "IAS 12 Income tax Part 2 مع حل سؤال امتحان سبتمبر 2020", length: "2:26:00" },
      { id: "Yz4KGiICq3g", title: "IAS 21The Effect of Changes in Foreign Exchange Rates", length: "2:35:00" },
      { id: "aC2OeZ5Phm8", title: "IFRS Chapter 13   IAS 41 Agriculture", length: "2:33:00" },
      { id: "G3tEHut_o_0", title: "IFRS 6 Exploration for and evaluation of mineral resources", length: "2:08:00" },
      { id: "iGzvgUqby30", title: "IAS 2 Inventories part 1", length: "1:21:00" },
      { id: "nPrRYQnuVnE", title: "IAS 2 Inventories Part 2", length: "1:03:00" },
      { id: "V4OzwMNbCaw", title: "Ch14   IFRS 2   Share based payment PART 1 EQUITY STETTLED", length: "2:37:00" },
      { id: "8A1hcPzAZzA", title: "Ch14   IFRS 2   Share based payment part 2", length: "3:02:00" },
      { id: "x5TvK-ydyTo", title: "Chapter 16 IAS 8 Accounting policy  part 1", length: "1:16:00" },
      { id: "LzmEdlsgpu0", title: "IAS 8 Change in estimate and errors part 2", length: "52:00" },
      { id: "s8MQmLs6tXc", title: "Chapter 16 4 IFRS 5 Non current Assets Held for Sales and Discontinued", length: "2:19:00" },
      { id: "j05_9eaBNnw", title: "Chapter 16 IAS 10 Events after the reporting period 01 and 02", length: "31:00" },
      { id: "8TxwH6_MS1U", title: "CH17   IAS 33 Earning per share   Basic 01", length: "1:52:00" },
      { id: "FtvWlqCgkvo", title: "CH17   IAS 33 Earning per share   Rights issues", length: "59:00" },
      { id: "J39MxJ-5jZs", title: "IAS 33 Diluted EPS", length: "2:16:00" },
      { id: "GsXhJUGNmiY", title: "Related party and operating segments شوف من الدقيقة 31", length: "3:41:00" },
      { id: "lnHEvdeho2U", title: "IFRS for SMEs", length: "1:37:00" },
      { id: "pgukmD2Zvc4", title: "Constitution of a group Ch 20 and Contingent Consideration", length: "2:54:00" },
      { id: "NqETDHpwSIY", title: "Consolidated SOFP part 1 Chapter 21", length: "3:05:00" },
      { id: "geQ8tZQvrCM", title: "Consolidated  SOFP   last part", length: "2:42:00" },
      { id: "IdZh8PMHDPg", title: "Impairment of Goodwill and Intra group trade", length: "2:23:00" },
      { id: "aoI2bSq6e7U", title: "consolidated SOPLOCI شوف بعد ساعه و27 دقيقه", length: "2:35:00" },
      { id: "9vWhTIHsARY", title: "Consolidated SOPLOCI Part 2-  شوف من الدقيقه 26", length: "3:04:00" },
      { id: "OGPYiT85ykg", title: "Chapter 23   IAS 28", length: "2:28:00" },
      { id: "evU8XGiACCA", title: "Chapter 244 Joint Arrangement", length: "1:20:00" },
      { id: "wscLQJdKhM4", title: "Regulatory Framework Chapter 1", length: "2:16:00" },
      { id: "XegklPmWb0g", title: "Chapter 1 Ethics", length: "1:30:00" },
      { id: "O7c82-wcmes", title: "Conceptual Framework شوف من الدقيقة 31", length: "3:37:00" },
      { id: "bYRNqQrW3iM", title: "IFRS 13 FV Measurement", length: "1:41:00" },
    ],
  },

  {
    id: "certifr-planet-full",
    titleEn: "CertIFR — the complete certificate course (51 sessions)",
    titleAr: "شهادة CertIFR — الكورس الكامل (51 جلسة)",
    channel: "The Accounting Planet",
    category: "ifrs",
    level: "Intermediate",
    language: "AR",
    hours: "~27.1h",
    views: "YouTube playlist",
    descEn: "The full Certificate in IFRS course, session by session — structure of the IASB, IAS 1/8/16/36/38, IFRS 15/16/9/3/10/13, first-time adoption, small entities, plus MCQ drills after each standard.",
    descAr: "كورس شهادة المعايير الدولية للتقارير المالية كاملًا، جلسة بجلسة — هيئة المعايير ومعايير IAS 1/8/16/36/38 وIFRS 15/16/9/3/10/13 والتطبيق الأول والمنشآت الصغيرة، مع تدريبات أسئلة بعد كل معيار.",
    lessons: [
      { id: "3w-arW-P2Vs", title: "Certificate in international financial Reporting-CertIFR Course - Session01-Introduction", length: "21:00" },
      { id: "bwT-1cfLAz0", title: "CertIFR - Session02 - Module01 - Part1 - Formation & Structure of IASB", length: "19:00" },
      { id: "T5vuxOX0YeY", title: "CertIFR - Session 03 - Module 1 #IFRS", length: "32:00" },
      { id: "Z6AF54DR3B8", title: "CertIFR - Session 04 - Module 2 #IFRS", length: "28:00" },
      { id: "hJyWT79zX3k", title: "CertIFR - Session 05 - IAS 01 - preparing of financial statements #IFRS", length: "28:00" },
      { id: "fy1_lU_rkR8", title: "CertIFR - Session 06 - IFRS 15 - Revenue from Contracts with Customers #IFRS", length: "22:00" },
      { id: "V7MYeRI7q3c", title: "CertIFR - Session 07 - IFRS 15 Part2 + MCQs #IFRS", length: "32:00" },
      { id: "hLks5BphnNk", title: "CertIFR - Session 08 - IAS 08  #IFRS", length: "20:00" },
      { id: "-INKBVhHc3w", title: "CertIFR - Session 09 - IAS 16  #IFRS معيار الأصول الثابتة", length: "32:00" },
      { id: "rnSTrDg58yc", title: "CertIFR - Session 10 - IAS 38  #IFRS الأصول الغير ملموسة  - Intangible asset", length: "21:00" },
      { id: "IetZPXYr2JU", title: "CertIFR - Session 11 - IAS 40  #IFRS الأصول الإستثمارية  - Investment Property", length: "16:00" },
      { id: "4Xzq_Gb9xq8", title: "CertIFR - Session 12 - IAS 36  #IFRS اضمحلال الاصول  - impairment of assets", length: "24:00" },
      { id: "iiYZmHgVs2E", title: "CertIFR - Session 13 - IAS 23  #IFRS تكلفة الإقتراض  - Borrowing Costs", length: "18:00" },
      { id: "Eqf9hC5i0Ms", title: "CertIFR - Session 14 - IAS 20  #IFRS المنح والمساعدات الحكومية  - Government Grants and Assistance", length: "18:00" },
      { id: "IsT9H93JrAY", title: "CertIFR - Session 15 - IAS 2  #IFRS المخزون  - Inventory", length: "26:00" },
      { id: "q3qmhpj_K9o", title: "CertIFR - Session 16 - IFRS16 part1 #IFRS عقود الإيجار  - Lease", length: "25:00" },
      { id: "eY9f6QnX6zE", title: "CertIFR - Session 17 - IFRS16 Part2 #IFRS عقود الإيجار  - Lease", length: "23:00" },
      { id: "nja5UdyPiJQ", title: "CertIFR - Session 18 - IFRS5  #IFRS Held for sale", length: "16:00" },
      { id: "Sg-KXGQtSCA", title: "CertIFR VS DipIFR هل الشهادة ملهاش لازمة ؟", length: "6:00" },
      { id: "ZVik23VBCgo", title: "الحلقة 19 من سلسلة شرح شهادة المعايير الدولية CertIFR - محاكاة للإمتحان - Exam Simulation", length: "6:00" },
      { id: "XToVh4E-4VU", title: "CertIFR - Session 20 - IFRS13  #IFRS Fair Value Measurement", length: "18:00" },
      { id: "QO7zU19zNGA", title: "CertIFR - Session 21 - Financial instrument IAS 32 + IFRS 7", length: "23:00" },
      { id: "RiC9BvEaBUU", title: "CertIFR - Session 22 - Financial instrument IFRS 9", length: "15:00" },
      { id: "6H0_9pTcr8A", title: "CertIFR - Session 23 - Financial instrument IFRS 9", length: "19:00" },
      { id: "1AUQGsdQjAU", title: "CertIFR - Session 24 - Provisions IAS 37", length: "24:00" },
      { id: "QcKXnf_nqnA", title: "CertIFR - Session 25 - Events after the reporting date IAS 10", length: "21:00" },
      { id: "oeXOU79lqW4", title: "CertIFR - Session 26 - Employee Benefits IAS 19", length: "22:00" },
      { id: "Os6ctserd3E", title: "CertIFR - Session 27 - Income Tax IAS 12", length: "20:00" },
      { id: "JxvoyoSq5v8", title: "CertIFR - Session 28 - Share-Based Payment IFRS 2", length: "18:00" },
      { id: "wkSa8Li5qmE", title: "CertIFR - Session 29 - IAS41 - Agricultural", length: "7:00" },
      { id: "usSAkZ8VwfI", title: "شهادة المعايير الدولية CertIFR - الحلقة 30 - معيار IFRS 6 - استكشاف الموارد المعندية وتقويمها", length: "8:00" },
      { id: "GgdYcfkULbM", title: "الحلقة 31 من شرح شهادة المعايير الدولية CertIFR - محاكاة للإمتحان - Exam Simulation", length: "4:00" },
      { id: "_2FVwCWpnW0", title: "شهادة المعايير الدولية CertIFR - الحلقة 32 - معيار IFRS 10 - القوائم المالية الموحدة", length: "25:00" },
      { id: "THwuE5LRlWw", title: "شهادة المعايير الدولية CertIFR - الحلقة 33 - معيار IAS 27 - القوائم المالية المنفصلة", length: "5:00" },
      { id: "HLd3YNQsSOw", title: "شهادة المعايير الدولية CertIFR - الحلقة 34 - معيار IFRS 3 - اندماج الأعمال", length: "19:00" },
      { id: "OVSjs6apsb0", title: "شهادة المعايير الدولية CertIFR - الحلقة 35 - معيار IAS 28 - الاستثمار في الشركات الزميلة", length: "9:00" },
      { id: "GqlzLiqD4AM", title: "شهادة المعايير الدولية CertIFR - الحلقة 36 - معيار IFRS 11 - الترتيبات المشتركة", length: "12:00" },
      { id: "ykOB4wKqbGw", title: "شهادة المعايير الدولية CertIFR - الحلقة 37 - معيار IFRS 12 - الافصاح عن المصالح في الشركات الأخرى", length: "7:00" },
      { id: "zFFwBS8ve3Y", title: "شهادة المعايير الدولية CertIFR - الحلقة 38 - معيار IAS 21 - أثر التغير في سعر صرف العملات", length: "16:00" },
      { id: "PDDxko_aXQE", title: "شهادة المعايير الدولية CertIFR - الحلقة 39 - معيار IAS 29 - التقارير المالية في الإقتصاد المتضخم", length: "7:00" },
      { id: "UstLxPq1ZDU", title: "شهادة المعايير الدولية CertIFR - الحلقة 40 - معيار IAS 7 - قائمة التدفقات النقدية", length: "14:00" },
      { id: "14zHvyfKlGk", title: "شهادة المعايير الدولية CertIFR - الحلقة 41 - معيار IFRS 8 - التقارير القطاعية - Operating segment", length: "16:00" },
      { id: "TDrYmCroBwI", title: "شهادة المعايير الدولية CertIFR - الحلقة 42 - معيار IAS 24 - الإفصاح عن الأطراف ذات العلاقة", length: "14:00" },
      { id: "LkJNhGDUens", title: "شهادة المعايير الدولية CertIFR - الحلقة 43 - معيار IAS 33 - ربحية السهم - earning per share", length: "18:00" },
      { id: "DXDBDCvZMO0", title: "شهادة المعايير الدولية CertIFR - الحلقة 44 - معيار IAS 34 - Interim financial reports", length: "13:00" },
      { id: "J6wwmlUZm0k", title: "شهادة المعايير الدولية CertIFR - الحلقة 45 - معيار IFRS 1 - First time adoption of IFRS", length: "12:00" },
      { id: "wXg2WPNVHFU", title: "شهادة المعايير الدولية CertIFR - الحلقة 46 - Differences between IFRS Standards and UK GAAP", length: "17:00" },
      { id: "v224KpjGPtk", title: "شهادة المعايير الدولية CertIFR - الحلقة 47 - Convergence of IFRS with US GAAP", length: "10:00" },
      { id: "C32vloOdZCg", title: "شهادة المعايير الدولية CertIFR - الحلقة 48 - Convergence of IFRS with UK GAAP", length: "8:00" },
      { id: "APe4oFWKwsA", title: "شهادة المعايير الدولية CertIFR - الحلقة الأخيرة - طريقة التسجيل ونصائح الاختبار", length: "15:00" },
      { id: "x5dttcg-2lQ", title: "شهادة المعايير الدولية CertIFR كاملة", length: "12:39:00" },
    ],
  },

  {
    id: "acca-f3-sowmya",
    titleEn: "ACCA FA (F3) — the complete chapter course",
    titleAr: "ACCA FA (F3) — الكورس الكامل فصلًا فصلًا",
    channel: "Sowmya Sasun",
    category: "acca",
    level: "Beginner",
    language: "EN",
    hours: "~23.8h",
    views: "YouTube playlist",
    descEn: "Every chapter of the ACCA FA (F3) syllabus in order — from the conceptual framework and double entry through to consolidation and cash flows, taught chapter by chapter with worked examples.",
    descAr: "كل فصول منهج ACCA FA (F3) بالترتيب — من الإطار المفاهيمي والقيد المزدوج حتى التجميع والتدفقات النقدية، فصلًا فصلًا بأمثلة محلولة.",
    lessons: [
      { id: "rXlPF9crFNs", title: "Chapter 1 introduction to financial reporting part 1 F3 financial accounting ACCA", length: "33:00" },
      { id: "RI9cBl1TCr8", title: "Chapter 1 introduction to financial reporting part 2 F3 financial accounting ACCA", length: "37:00" },
      { id: "O6gjYgcFkY8", title: "Chapter 1 introduction to financial reporting part 3 F3 financial accounting ACCA", length: "27:00" },
      { id: "tQee_RWRDlw", title: "Chapter 3 Double entry bookkeeping part 1 F3 financial accounting ACCA", length: "48:00" },
      { id: "7Tb1HiWGPtA", title: "Chapter 3 Double entry bookkeeping part2 F3 financial accounting ACCA", length: "43:00" },
      { id: "ycGkWhAniDk", title: "Chapter 4 recording basic transactions and balancing the ledgers F3 financial accounting ACCA", length: "1:11:00" },
      { id: "BVCwePOgf7A", title: "Chapter 5 Returns,discounts and sales tax PART 1 F3 financial accounting ACCA", length: "1:02:00" },
      { id: "vDrHg6oJCdU", title: "Chapter 5 Returns,discounts and sales tax PART 2 F3 financial accounting ACCA", length: "57:00" },
      { id: "EEahsoJCtnc", title: "Chapter 6 inventory part 1 F3 financial accounting ACCA", length: "50:00" },
      { id: "y96XPsYTD-I", title: "Chapter 6 inventory part 2 F3 financial accounting ACCA", length: "33:00" },
      { id: "45aEFbMminQ", title: "Chapter 6 inventory part 3 F3 financial accounting ACCA", length: "58:00" },
      { id: "xG3Xsq6j-ik", title: "Chapter 7 Non-current assets: acquisition and depreciation part 1 F3 financial accounting ACCA", length: "34:00" },
      { id: "a8SyxzShbP0", title: "Chapter 7 Non-current assets: acquisition and depreciation part 2 F3 financial accounting ACCA", length: "58:00" },
      { id: "FPmz_5wY1mM", title: "Chapter 9 Intangible assets F3 financial accounting ACCA", length: "42:00" },
      { id: "iQxps1WJFG0", title: "Chapter 2 The regulatory framework F3 financial accounting ACCA", length: "34:00" },
      { id: "bBnQyYmjxLo", title: "Chapter 10 Accruals and Prepayments Part 1 F3 financial accounting ACCA", length: "53:00" },
      { id: "SjFvQidSxtE", title: "Chapter 10 Accruals and Prepayments Part 2 F3 financial accounting ACCA", length: "40:00" },
      { id: "GIJRxCOUGgM", title: "Chapter 11 Receivables F3 financial accounting ACCA", length: "47:00" },
      { id: "XFjKh4oyVTE", title: "Chapter 12 Payables,provisions and contingent liabilities F3 financial accounting ACCA", length: "32:00" },
      { id: "Xu-yzZOTTuM", title: "Chapter 8 Non-current assets: disposal and revaluation F3 financial accounting ACCA", length: "1:03:00" },
      { id: "3frpvdAUkk8", title: "Chapter 13 Capital structure and finance costs part 1 F3 financial accounting ACCA", length: "26:00" },
      { id: "_6YzJTsUvWc", title: "Chapter 13 Capital structure and finance costs part 2 F3 financial accounting ACCA", length: "1:02:00" },
      { id: "Bd8MK3dd_Lg", title: "Chapter 14 Control account reconciliations part 1 F3 financial accounting ACCA", length: "32:00" },
      { id: "aEUsdxziaoM", title: "Chapter 14 Control account reconciliations part 2 F3 financial accounting ACCA", length: "1:03:00" },
      { id: "6LZUbskFuDY", title: "Chapter 15 Bank reconciliations part 1 F3 financial accounting ACCA", length: "38:00" },
      { id: "GdtssuK6laU", title: "Chapter 15 Bank reconciliations part 2 F3 financial accounting ACCA", length: "30:00" },
      { id: "a3Dy8bIlJH0", title: "Chapter 18 incomplete records F3 financial accounting ACCA", length: "48:00" },
      { id: "_25-RGCt_0g", title: "Chapter 16 The trial balance,errors and suspense accounts part 1 F3 financial accounting ACCA", length: "39:00" },
      { id: "wMYXRXqESgk", title: "Chapter 16 The trial balance,errors and suspense accounts part 2 F3 financial accounting ACCA", length: "40:00" },
      { id: "m-TNCa6Qljk", title: "Chapter 20 interpretation of financial statements part 1 F3 financial accounting ACCA", length: "54:00" },
      { id: "dF33qf3LQSo", title: "Chapter 20 interpretation of financial statements part 2 F3 financial accounting ACCA", length: "41:00" },
      { id: "YS2Rkl8qN_E", title: "Chapter 17 Preparing basic financial statements part 1 F3 financial accounting ACCA", length: "34:00" },
    ],
  },

  /* ==================== v27 — the office pair + the Arabic library ==================== */
  ...VIDEO_COURSES_V27,
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
