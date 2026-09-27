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
  category: "accounting" | "ifrs" | "audit" | "reference" | "arabic"
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
]
