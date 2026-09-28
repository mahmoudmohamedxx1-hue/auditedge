/** v22 — curated free professional courses for the Courses section.
 *
 *  Every entry is FREE to access (audit track / open access) — no paywall
 *  for the learning content. URLs verified live on 2026-09-27 (OpenLearn
 *  blocks bots but serves users; EKB is geo-fenced to Egypt). */

export type FreeCourse = {
  id: string
  titleEn: string
  titleAr: string
  provider: string
  /** study area chip */
  category: "accounting" | "ifrs" | "audit" | "reference" | "arabic" | "skills"
  level: "Beginner" | "Intermediate" | "Advanced" | "Reference"
  hours: string
  language: "EN" | "AR" | "EN/AR"
  url: string
  /** free certificate / badge available */
  certificate: boolean
  descEn: string
  descAr: string
}

export const FREE_COURSES: FreeCourse[] = [
  {
    id: "acca-bookkeeping",
    titleEn: "Introduction to Bookkeeping",
    titleAr: "مقدمة في مسك الدفاتر",
    provider: "ACCA — edX",
    category: "accounting",
    level: "Beginner",
    hours: "~16h",
    language: "EN",
    url: "https://www.edx.org/course/introduction-to-bookkeeping",
    certificate: false,
    descEn:
      "ACCA's free introductory course — double entry, trial balance and basic financial statements. The professional starting point.",
    descAr:
      "دورة ACCA التمهيدية المجانية — القيد المزدوج وميزان المراجعة والقوائم الأساسية. نقطة البداية المهنية.",
  },
  {
    id: "acca-x",
    titleEn: "ACCA-X — free accounting & audit program",
    titleAr: "برنامج ACCA-X المجاني في المحاسبة والمراجعة",
    provider: "ACCA",
    category: "accounting",
    level: "Beginner",
    hours: "self-paced",
    language: "EN",
    url: "http://www.acca-x.com",
    certificate: false,
    descEn:
      "The ACCA-X hub: a family of free online courses in accounting, business and finance built with edX — including audit-related tracks.",
    descAr:
      "منصة ACCA-X: مجموعة دورات مجانية في المحاسبة والأعمال والماليات بالتعاون مع edX — بما فيها مسارات المراجعة.",
  },
  {
    id: "edx-accounting",
    titleEn: "Accounting course catalog",
    titleAr: "كتالوج دورات المحاسبة",
    provider: "edX",
    category: "accounting",
    level: "Beginner",
    hours: "varies",
    language: "EN",
    url: "https://www.edx.org/learn/accounting",
    certificate: false,
    descEn:
      "The full edX accounting cluster — university and professional-body courses, free to audit (verified certificates optional).",
    descAr:
      "كتالوج edX الكامل للمحاسبة — دورات جامعية وهيئات مهنية مجانية للتتبع (الشهادات الموثقة اختيارية).",
  },
  {
    id: "khan-accounting",
    titleEn: "Accounting & financial statements",
    titleAr: "المحاسبة والقوائم المالية",
    provider: "Khan Academy",
    category: "accounting",
    level: "Beginner",
    hours: "~10h",
    language: "EN",
    url: "https://www.khanacademy.org/economics-finance-domain/core-finance/accounting-and-financial-statements",
    certificate: false,
    descEn:
      "Khan Academy's permanently-free, famously friendly walkthrough of the accounting cycle and reading financial statements.",
    descAr:
      "شرح خان أكاديمي المجاني الدائم والشهير بالودّة للدورة المحاسبية وقراءة القوائم المالية.",
  },
  {
    id: "openlearn-bookkeeping",
    titleEn: "Introduction to bookkeeping and accounting",
    titleAr: "مقدمة في مسك الدفاتر والمحاسبة",
    provider: "Open University — OpenLearn",
    category: "accounting",
    level: "Beginner",
    hours: "~18h",
    language: "EN",
    url: "https://www.open.edu/openlearn/business-management/introduction-to-bookkeeping-and-accounting/content-section-overview-0",
    certificate: true,
    descEn:
      "The Open University's free badged course — a full grounding in bookkeeping and accounting with a free statement of participation.",
    descAr:
      "دورة الجامعة المفتوحة المجانية مع شارة — تأسيس كامل في مسك الدفاتر والمحاسبة مع بيان مشاركة مجاني.",
  },
  {
    id: "mit-15501",
    titleEn: "Financial & Managerial Accounting (15.501)",
    titleAr: "المحاسبة المالية والإدارية (15.501)",
    provider: "MIT OpenCourseWare",
    category: "accounting",
    level: "Advanced",
    hours: "~40h",
    language: "EN",
    url: "https://ocw.mit.edu/courses/15-501-introduction-to-financial-and-managerial-accounting-spring-2004/",
    certificate: false,
    descEn:
      "MIT's classic intro to financial and managerial accounting — lectures, recitations and materials free, university-grade.",
    descAr:
      "دورة MIT الكلاسيكية في المحاسبة المالية والإدارية — محاضرات ومواد مجانية بمستوى جامعي.",
  },
  {
    id: "coursera-ifrs",
    titleEn: "IFRS courses (audit track)",
    titleAr: "دورات IFRS (مسار مجاني)",
    provider: "Coursera",
    category: "ifrs",
    level: "Intermediate",
    hours: "varies",
    language: "EN",
    url: "https://www.coursera.org/search?query=IFRS",
    certificate: false,
    descEn:
      "University IFRS courses on Coursera — free to audit in full, including financial reporting and DipIFR-style prep.",
    descAr:
      "دورات جامعية في المعايير الدولية على كورسيرا — مجانية بالكامل للمتابعة، تشمل التقارير المالية والتحضير لدبلومة IFRS.",
  },
  {
    id: "alison-intro-accounting",
    titleEn: "Introduction to Accounting",
    titleAr: "مقدمة في المحاسبة",
    provider: "Alison",
    category: "accounting",
    level: "Beginner",
    hours: "~3h",
    language: "EN",
    url: "https://alison.com/course/introduction-to-accounting",
    certificate: true,
    descEn:
      "A quick free certificate course covering the accounting equation, debits and credits, and the core statements.",
    descAr:
      "دورة شهادة مجانية سريعة تغطي المعادلة المحاسبية والقيد المزدوج والقوائم الأساسية.",
  },
  {
    id: "alison-accounting-tag",
    titleEn: "Accounting learning path",
    titleAr: "مسار تعلم المحاسبة",
    provider: "Alison",
    category: "accounting",
    level: "Beginner",
    hours: "varies",
    language: "EN",
    url: "https://alison.com/tag/accounting",
    certificate: true,
    descEn:
      "Alison's whole free accounting catalog — dozens of certificate courses from bookkeeping to managerial accounting.",
    descAr:
      "كتالوج أليسون المجاني الكامل في المحاسبة — عشرات دورات الشهادات من مسك الدفاتر إلى المحاسبة الإدارية.",
  },
  {
    id: "ifrs-standards",
    titleEn: "Issued IFRS Standards (official texts + summaries)",
    titleAr: "المعايير الدولية الصادرة (نصوص رسمية وملخصات)",
    provider: "IFRS Foundation",
    category: "reference",
    level: "Reference",
    hours: "—",
    language: "EN",
    url: "https://www.ifrs.org/issued-standards/",
    certificate: false,
    descEn:
      "The official IFRS Foundation pages — each standard's full overview, free summaries and related materials. The source of truth.",
    descAr:
      "الصفحات الرسمية لمؤسسة المعايير الدولية — عرض كامل لكل معيار مع ملخصات مجانية. مرجع الحقيقة الأول.",
  },
  {
    id: "deloitte-iasplus",
    titleEn: "iasplus — IFRS knowledge hub",
    titleAr: "iasplus — مركز معرفة المعايير الدولية",
    provider: "Deloitte",
    category: "reference",
    level: "Reference",
    hours: "—",
    language: "EN",
    url: "https://www.iasplus.com",
    certificate: false,
    descEn:
      "Deloitte's legendary free IFRS resource — plain-language summaries and guidance for every standard, kept current.",
    descAr:
      "مورد ديلويت الشهير المجاني للمعايير — ملخصات بلغة واضحة وإرشادات لكل معيار، ومحدّث باستمرار.",
  },
  {
    id: "edraak-business",
    titleEn: "Edraak — business & finance (Arabic)",
    titleAr: "إدراك — الأعمال والماليات",
    provider: "Edraak إدراك",
    category: "arabic",
    level: "Beginner",
    hours: "varies",
    language: "AR",
    url: "https://www.edraak.org/explore/?category=business-and-entrepreneurship",
    certificate: true,
    descEn:
      "The Arab world's leading free MOOC platform — business, finance and accounting courses in Arabic, with certificates.",
    descAr:
      "أبرز منصة عربية مجانية للتعلم المفتوح — دورات في الأعمال والماليات والمحاسبة بالعربية مع شهادات.",
  },
  {
    id: "ekb",
    titleEn: "Egyptian Knowledge Bank (بنك المعرفة المصري)",
    titleAr: "بنك المعرفة المصري",
    provider: "EKB — Egypt",
    category: "arabic",
    level: "Intermediate",
    hours: "varies",
    language: "EN/AR",
    url: "https://www.ekb.eg",
    certificate: false,
    descEn:
      "Egypt's national digital library — free access for Egyptians (national ID registration) to courses, journals and references.",
    descAr:
      "المكتبة الرقمية القومية المصرية — وصول مجاني للمصريين (بالتسجيل بالرقم القومي) للدورات والدوريات والمراجع.",
  },
  // ---- v23: more pro free catalog entries ----
  {
    id: "cfi-fundamentals",
    titleEn: "Accounting Fundamentals",
    titleAr: "أساسيات المحاسبة",
    provider: "CFI — Corporate Finance Institute",
    category: "accounting",
    level: "Beginner",
    hours: "~5h",
    language: "EN",
    url: "https://corporatefinanceinstitute.com/courses/accounting-fundamentals/",
    certificate: true,
    descEn:
      "CFI's free fundamentals course (free account) — the accounting cycle, debits and credits, and the three statements, taught the analyst way.",
    descAr:
      "دورة CFI الأساسية المجانية (بحساب مجاني) — الدورة المحاسبية والقيود المزدوجة والقوائم الثلاث بأسلوب المحللين.",
  },
  {
    id: "accountingcoach",
    titleEn: "AccountingCoach — the classic free tutor",
    titleAr: "AccountingCoach — المعلّم المجاني الكلاسيكي",
    provider: "AccountingCoach",
    category: "reference",
    level: "Beginner",
    hours: "self-paced",
    language: "EN",
    url: "https://www.accountingcoach.com/",
    certificate: false,
    descEn:
      "The internet's friendliest free accounting explanation site — every topic from journal entries to depreciation, with quizzes. PRO certificates optional.",
    descAr:
      "أوضح موقع مجاني لشرح المحاسبة على الإنترنت — كل موضوع من القيود إلى الإهلاك مع اختبارات قصيرة. شهادات PRO اختيارية.",
  },
  {
    id: "ohsc-bookkeeping",
    titleEn: "Bookkeeping — free course",
    titleAr: "مسك الدفاتر — دورة مجانية",
    provider: "Oxford Home Study Centre",
    category: "accounting",
    level: "Beginner",
    hours: "~20h",
    language: "EN",
    url: "https://www.oxfordhomestudy.com/listing/bookkeeping-q-a-level-1",
    certificate: true,
    descEn:
      "OHSC's free bookkeeping programme — study free, with an optional paid certificate. A structured, assignment-based path.",
    descAr:
      "برنامج مسك الدفاتر المجاني من أوكسفورد هوم ستادي — تعلم مجانًا مع شهادة اختيارية. مسار منظم بواجبات وتقييم.",
  },
  {
    id: "worldbank-pfm",
    titleEn: "Public Financial Management — free courses",
    titleAr: "إدارة المالية العامة — دورات مجانية",
    provider: "World Bank — Open Learning Campus",
    category: "audit",
    level: "Intermediate",
    hours: "varies",
    language: "EN",
    url: "https://olc.worldbank.org/",
    certificate: true,
    descEn:
      "The World Bank's free Open Learning Campus — budgeting, public financial management and governance: directly relevant to public-sector and SOE audit.",
    descAr:
      "حرم التعلم المفتوح المجاني من البنك الدولي — الموازنة وإدارة المالية العامة والحوكمة: صلة مباشرة بمراجعة القطاع العام وشركات قطاع الأعمال.",
  },
  {
    id: "imf-pfm",
    titleEn: "Public Financial Management (IMFx)",
    titleAr: "إدارة المالية العامة (IMFx)",
    provider: "IMF — on edX",
    category: "audit",
    level: "Advanced",
    hours: "~8h",
    language: "EN",
    url: "https://www.edx.org/learn/public-finance/international-monetary-fund-public-financial-management",
    certificate: false,
    descEn:
      "The IMF's free PFM course on edX — budget preparation, execution, and fiscal reporting: the core of state-sector audit work.",
    descAr:
      "دورة صندوق النقد المجانية عن إدارة المالية العامة على edX — إعداد الموازنة وتنفيذها والتقرير المالي: جوهر عمل مراجعة القطاع الحكومي.",
  },
  {
    id: "futurelearn-bookkeeping",
    titleEn: "Bookkeeping and accounting (free access)",
    titleAr: "مسك الدفاتر والمحاسبة (وصول مجاني)",
    provider: "FutureLearn",
    category: "accounting",
    level: "Beginner",
    hours: "~4h/wk",
    language: "EN",
    url: "https://www.futurelearn.com/courses/subjects/accounting-and-finance-courses",
    certificate: false,
    descEn:
      "FutureLearn's accounting & finance subject page — university-led short courses with a free-to-learn window.",
    descAr:
      "صفحة المحاسبة والمالية في فيوتشر ليرن — دورات قصيرة بقيادة جامعية مع فترة تعلم مجانية.",
  },
  {
    id: "khan-excel",
    titleEn: "Excel basics & data skills",
    titleAr: "أساسيات إكسل ومهارات البيانات",
    provider: "Khan Academy",
    category: "skills",
    level: "Beginner",
    hours: "~8h",
    language: "EN",
    url: "https://www.khanacademy.org/computing",
    certificate: false,
    descEn:
      "Khan Academy's free computing track — spreadsheets and data literacy, the everyday toolkit of an auditor.",
    descAr:
      "مسار الحاسوب المجاني من خان أكاديمي — الجداول الإلكترونية ومحو الأمية الرقمية، العدة اليومية للمراجع.",
  },
]
