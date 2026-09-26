/**
 * Site-wide bilingual dictionary (EN/AR) — the single source of UI strings
 * for every view outside the Audit Program (which carries its own inline
 * dictionary alongside its content). All user-visible chrome across the
 * workspace is defined here so the global EN/عربي toggle reaches every page.
 *
 * Data-driven labels (course categories, levels, material categories, XP
 * level names, badge names) are mapped separately because they originate
 * from fixed vocabularies in the database.
 */

export type Lang = "en" | "ar"

/** A bilingual string pair used across the app. */
export type Bi = { readonly en: string; readonly ar: string }

export const pick = (b: Bi, lang: Lang): string => b[lang]
export const isRtl = (lang: Lang): boolean => lang === "ar"
export const localeOf = (lang: Lang): string => (lang === "ar" ? "ar-EG" : "en-GB")
/** Numeric dates stay Latin-digit even in Arabic (audit workpapers convention). */
export const dateLocaleOf = (lang: Lang): string =>
  lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB"

/* ------------------------------------------------------------------ */
/* data-driven vocabularies                                            */
/* ------------------------------------------------------------------ */

export const COURSE_CATEGORY_AR: Record<string, string> = {
  "International Standards": "المعايير الدولية",
  "Egyptian Framework": "الإطار المصري",
  IFRS: "المعايير الدولية للتقارير المالية",
  Analytics: "التحليلات",
  "Internal Training": "تدريب داخلي",
  "Arabic Academy": "الأكاديمية العربية",
  "Open Courses": "دورات مفتوحة",
}

export const COURSE_LEVEL_AR: Record<string, string> = {
  Foundation: "تأسيسي",
  Intermediate: "متوسط",
  Advanced: "متقدم",
}

export const MATERIAL_CATEGORY_AR: Record<string, string> = {
  Reference: "مراجع",
  Standards: "معايير",
  "Egyptian Standards": "معايير مصرية",
  IFRS: "معايير IFRS",
  Templates: "قوالب",
  "Working Papers": "أوراق عمل",
  Policies: "سياسات",
}

export const XP_LEVEL_AR: Record<string, string> = {
  Trainee: "متدرّب",
  Associate: "مساعد مراجع",
  Senior: "مراجع أول",
  Manager: "مدير",
  Partner: "شريك",
}

/** Translate a value from a fixed vocabulary; unknown values pass through. */
export const arOr = (map: Record<string, string>, value: string, lang: Lang): string =>
  lang === "ar" ? (map[value] ?? value) : value

/* ------------------------------------------------------------------ */
/* UI dictionary                                                       */
/* ------------------------------------------------------------------ */

export const T = {
  /* ---------- shell / navigation ---------- */
  nav: {
    home: { en: "Home", ar: "الرئيسية" },
    aiTutor: { en: "AI Tutor", ar: "المساعد الذكي" },
    courses: { en: "Courses", ar: "الدورات" },
    library: { en: "Library", ar: "المكتبة" },
    program: { en: "Audit Program", ar: "برنامج المراجعة" },
    sectors: { en: "Sector Risks", ar: "مخاطر القطاعات" },
    team: { en: "Team", ar: "الفريق" },
    achievements: { en: "Achievements", ar: "الإنجازات" },
    studio: { en: "Studio", ar: "الاستوديو" },
    courseBuilder: { en: "Course builder", ar: "منشئ الدورات" },
    discover: { en: "Discover", ar: "الاستكشاف" },
    free: { en: "Free", ar: "مجاني" },
    openMenu: { en: "Open menu", ar: "فتح القائمة" },
    goHome: { en: "Go to home", ar: "الانتقال إلى الرئيسية" },
    collapseSidebar: { en: "Collapse sidebar (Ctrl+B)", ar: "تصغير الشريط الجانبي (Ctrl+B)" },
    expandSidebar: { en: "Expand sidebar (Ctrl+B)", ar: "توسيع الشريط الجانبي (Ctrl+B)" },
    adminBadge: { en: "Workspace admin", ar: "مدير مساحة العمل" },
    language: { en: "Language", ar: "اللغة" },
    workspace: { en: "Workspace", ar: "مساحة العمل" },
    theme: { en: "Theme", ar: "المظهر" },
    themeLight: { en: "Light theme", ar: "المظهر الفاتح" },
    themeDark: { en: "Dark theme", ar: "المظهر الداكن" },
  },

  /* ---------- shared course card ---------- */
  card: {
    draft: { en: "Draft", ar: "مسودة" },
    completed: { en: "Completed", ar: "مكتملة" },
    inProgress: { en: "In progress", ar: "قيد التقدم" },
    viewCourse: { en: "View course", ar: "عرض الدورة" },
    lessons: { en: "lessons", ar: "درسًا" },
    enrolled: { en: "enrolled", ar: "منتسبًا" },
    openCourse: { en: "Open course", ar: "فتح الدورة" },
  },

  /* ---------- dashboard ---------- */
  dash: {
    morning: { en: "Good morning", ar: "صباح الخير" },
    afternoon: { en: "Good afternoon", ar: "مساء الخير" },
    evening: { en: "Good evening", ar: "مساء الخير" },
    xp: { en: "XP", ar: "نقاط الخبرة" },
    toNext: { en: "to", ar: "للوصول إلى" },
    streak: { en: "Streak", ar: "أيام متتالية" },
    day: { en: "day", ar: "يوم" },
    days: { en: "days", ar: "أيام" },
    keepAlive: { en: "Keep it alive daily", ar: "حافظ عليها يوميًا" },
    cpeHours: { en: "CPE hours", ar: "ساعات التعليم المستمر" },
    certificates: { en: "Certificates", ar: "الشهادات" },
    viewAchievements: { en: "View achievements", ar: "عرض الإنجازات" },
    continueLearning: { en: "Continue learning", ar: "متابعة التعلم" },
    pickUp: { en: "Pick up where you left off", ar: "تابع من حيث توقفت" },
    takeQuiz: { en: "Take quiz", ar: "ابدأ الاختبار" },
    continue: { en: "Continue", ar: "متابعة" },
    lesson: { en: "Lesson", ar: "الدرس" },
    of: { en: "of", ar: "من" },
    startFirst: { en: "Start your first course", ar: "ابدأ دورتك الأولى" },
    startFirstSub: {
      en: "Explore the catalog — ISA standards, IFRS, the Egyptian framework, the Arabic Academy and analytics.",
      ar: "استكشف الكتالوج — معايير المراجعة الدولية وIFRS والإطار المصري والأكاديمية العربية والتحليلات.",
    },
    exploreProgram: { en: "Explore the Audit Program", ar: "استكشف برنامج المراجعة" },
    programHint: {
      en: "Field-ready procedures, PBC tracking and sign-offs — no course needed.",
      ar: "إجراءات جاهزة للميدان ومتابعة المستندات والاعتمادات — دون الحاجة لدورة.",
    },
    browseCourses: { en: "Browse courses", ar: "تصفح الدورات" },
    inProgressTitle: { en: "In progress", ar: "قيد التقدم" },
    allCourses: { en: "All courses", ar: "كل الدورات" },
    teamPulse: { en: "Team pulse", ar: "نبض الفريق" },
    viewTeam: { en: "View team", ar: "عرض الفريق" },
    you: { en: "You", ar: "أنت" },
    onTheTeam: { en: "on the team", ar: "في الفريق" },
    youRank: { en: "you rank", ar: "ترتيبك" },
    recentCerts: { en: "Certificates", ar: "الشهادات" },
    viewAll: { en: "View all", ar: "عرض الكل" },
    course: { en: "Course", ar: "دورة" },
    noCertsYet: {
      en: "Finish a course and pass its knowledge check to earn your first certificate.",
      ar: "أكمل دورة واجتز اختبارها لتحصل على شهادتك الأولى.",
    },
  },

  /* ---------- courses catalog ---------- */
  courses: {
    title: { en: "Courses", ar: "الدورات" },
    subtitle: {
      en: "courses · built on the ISAs, IFRS and the Egyptian framework",
      ar: "دورة · مبنية على معايير المراجعة الدولية وIFRS والإطار المصري",
    },
    newCourse: { en: "New course", ar: "دورة جديدة" },
    searchPh: { en: "Search by title, code or topic…", ar: "ابحث بالعنوان أو الكود أو الموضوع…" },
    searchLabel: { en: "Search courses", ar: "البحث في الدورات" },
    all: { en: "All", ar: "الكل" },
    noneFound: { en: "No courses found", ar: "لا توجد دورات" },
    nothingMatches: {
      en: "Nothing matches your search. Try a different search.",
      ar: "لا نتائج مطابقة لبحثك. جرّب كلمات أخرى.",
    },
    noneInCategory: { en: "No courses in this category yet.", ar: "لا توجد دورات في هذا التصنيف بعد." },
    clearFilters: { en: "Clear filters", ar: "مسح الفلاتر" },
  },

  /* ---------- course detail ---------- */
  detail: {
    allCourses: { en: "All courses", ar: "كل الدورات" },
    lessons: { en: "lessons", ar: "درسًا" },
    enrolled: { en: "enrolled", ar: "منتسب" },
    about: { en: "About this course", ar: "عن هذه الدورة" },
    instructor: { en: "Your instructor", ar: "مقدّم الدورة" },
    curriculum: { en: "Curriculum", ar: "المحتوى الدراسي" },
    quiz: { en: "Quiz", ar: "اختبار" },
    min: { en: "min", ar: "دقيقة" },
    hours: { en: "h", ar: "ساعة" },
    noModules: {
      en: "No modules yet — the course is being prepared.",
      ar: "لا توجد وحدات بعد — الدورة قيد الإعداد.",
    },
    yourProgress: { en: "Your progress", ar: "تقدمك" },
    completed: { en: "Completed", ar: "مكتملة" },
    viewCertificate: { en: "View certificate", ar: "عرض الشهادة" },
    continueCourse: { en: "Continue course", ar: "متابعة الدورة" },
    reviewCourse: { en: "Review course", ar: "مراجعة الدورة" },
    enrollStart: { en: "Enroll & start", ar: "التحق وابدأ" },
    level: { en: "Level", ar: "المستوى" },
    cpeHours: { en: "CPE hours", ar: "ساعات التعليم" },
    lessonsLabel: { en: "Lessons", ar: "الدروس" },
    certificate: { en: "Certificate", ar: "الشهادة" },
    onCompletion: { en: "On completion", ar: "عند الإكمال" },
    lessonsOf: { en: "of", ar: "من" },
    cpeEarned: { en: "CPE earned", ar: "ساعة مكتسبة" },
  },

  /* ---------- lesson player ---------- */
  lesson: {
    coursePage: { en: "course page", ar: "صفحة الدورة" },
    min: { en: "min", ar: "دقيقة" },
    completed: { en: "Completed", ar: "مكتمل" },
    askAi: { en: "Ask AI about this lesson", ar: "اسأل الذكاء الاصطناعي عن هذا الدرس" },
    continueOn: { en: "Continue this course on", ar: "أكمل هذه الدورة على" },
    thePlatform: { en: "the platform", ar: "المنصة" },
    videoCaption: {
      en: "Video lesson — watch, then read the notes below",
      ar: "درس مرئي — شاهد ثم اقرأ الملخص أدناه",
    },
    fieldCase: { en: "Field case:", ar: "حالة ميدانية:" },
    situation: { en: "Situation. ", ar: "الوضع. " },
    analysis: { en: "Analysis. ", ar: "التحليل. " },
    keyPoints: { en: "Key points to remember", ar: "نقاط أساسية للتذكر" },
    takeaway: { en: "The takeaway", ar: "الخلاصة" },
    materials: { en: "Lesson materials", ar: "مواد الدرس" },
    previous: { en: "Previous", ar: "السابق" },
    next: { en: "Next", ar: "التالي" },
    continueLearning: { en: "Continue learning", ar: "متابعة التعلم" },
    backToCourse: { en: "Back to course", ar: "العودة إلى الدورة" },
    markComplete: { en: "Mark complete", ar: "تحديد كمكتمل" },
    contents: { en: "Course contents", ar: "محتويات الدورة" },
    xpEarned: { en: "XP earned", ar: "نقاط مكتسبة" },
    xpToast: {
      en: "Lesson marked complete. Keep the streak alive.",
      ar: "تم تحديد الدرس كمكتمل. حافظ على التتابع.",
    },
  },

  /* ---------- quiz player ---------- */
  quiz: {
    notAvailable: { en: "Quiz not available", ar: "الاختبار غير متاح" },
    noQuestions: { en: "This knowledge check has no questions yet.", ar: "لا يتضمن هذا الاختبار أسئلة بعد." },
    backToCourse: { en: "Back to course", ar: "العودة إلى الدورة" },
    coursePage: { en: "course page", ar: "صفحة الدورة" },
    question: { en: "Question", ar: "السؤال" },
    of: { en: "of", ar: "من" },
    passed: { en: "Knowledge check passed", ar: "اجتزت الاختبار" },
    notQuite: { en: "Not quite there", ar: "لم تصل بعد" },
    youScored: { en: "You scored", ar: "نتيجتك" },
    neededToPass: { en: "needed to pass", ar: "للنجاح" },
    retake: { en: "Retake quiz", ar: "إعادة الاختبار" },
    reviewLessons: { en: "Review lessons", ar: "مراجعة الدروس" },
    correct: { en: "Correct", ar: "إجابة صحيحة" },
    notQuiteAnswer: { en: "Not quite — the answer is", ar: "ليست صحيحة — الإجابة هي" },
    seeResults: { en: "See results", ar: "عرض النتيجة" },
    nextQuestion: { en: "Next question", ar: "السؤال التالي" },
    checkAnswer: { en: "Check answer", ar: "تحقق من الإجابة" },
    certNote: {
      en: "XP earned. A certificate is issued when you complete every lesson.",
      ar: "نقاط مكتسبة. تُمنح الشهادة عند إكمال جميع الدروس.",
    },
    answersLabel: { en: "Answer options", ar: "خيارات الإجابة" },
  },

  /* ---------- library ---------- */
  lib: {
    title: { en: "Library", ar: "المكتبة" },
    subtitle: {
      en: "Reference materials, standards, templates and working papers shared with the team",
      ar: "مواد مرجعية ومعايير وقوالب وأوراق عمل مشتركة مع الفريق",
    },
    upload: { en: "Upload", ar: "رفع ملف" },
    searchPh: { en: "Search materials…", ar: "ابحث في المواد…" },
    searchLabel: { en: "Search library", ar: "البحث في المكتبة" },
    all: { en: "All", ar: "الكل" },
    download: { en: "Download", ar: "تنزيل" },
    view: { en: "View", ar: "عرض" },
    openSource: { en: "Open official source", ar: "المصدر الرسمي" },
    deleteAria: { en: "Delete", ar: "حذف" },
    notFound: { en: "No materials found", ar: "لا توجد مواد" },
    empty: { en: "The library is empty", ar: "المكتبة فارغة" },
    tryDifferent: { en: "Try a different search or category.", ar: "جرّب بحثًا أو تصنيفًا آخر." },
    emptyAdmin: {
      en: "Upload standards, templates and working papers so the whole team can use them.",
      ar: "ارفع المعايير والقوالب وأوراق العمل ليستخدمها الفريق بأكمله.",
    },
    emptyLearner: {
      en: "Your admin hasn't uploaded any materials yet.",
      ar: "لم يرفع المدير أي مواد بعد.",
    },
    uploadFirst: { en: "Upload the first file", ar: "ارفع أول ملف" },
    removedToast: { en: "Material removed", ar: "تم حذف المادة" },
    // upload dialog
    uploadTitle: { en: "Upload material", ar: "رفع مادة" },
    uploadDesc: {
      en: "Share standards, templates or working papers with the whole office.",
      ar: "شارك المعايير أو القوالب أو أوراق العمل مع المكتب بأكمله.",
    },
    dropHere: { en: "Drop a file here, or click to browse", ar: "أفلت ملفًا هنا أو انقر للاختيار" },
    fileTypes: {
      en: "PDF, Office, images, video, ZIP — up to 80 MB",
      ar: "PDF وأوفيس وصور وفيديو وZIP — حتى 80 ميجابايت",
    },
    removeFile: { en: "Remove file", ar: "إزالة الملف" },
    titleLabel: { en: "Title", ar: "العنوان" },
    titlePh: { en: "e.g. ISA 570 Going Concern Checklist", ar: "مثلًا: قائمة تحقق الاستمرارية ISA 570" },
    categoryLabel: { en: "Category", ar: "التصنيف" },
    descLabel: { en: "Description", ar: "الوصف" },
    optional: { en: "(optional)", ar: "(اختياري)" },
    descPh: {
      en: "What is this file for? When should the team use it?",
      ar: "ما الغرض من هذا الملف؟ ومتى يستخدمه الفريق؟",
    },
    uploading: { en: "Uploading…", ar: "جارٍ الرفع…" },
    done: { en: "Done", ar: "تم" },
    cancel: { en: "Cancel", ar: "إلغاء" },
    uploadToLibrary: { en: "Upload to library", ar: "رفع إلى المكتبة" },
    uploadedToast: { en: "Material uploaded", ar: "تم رفع المادة" },
    availableToast: { en: "is now available to the team.", ar: "أصبح متاحًا للفريق." },
    tooLarge: { en: "File exceeds the 80 MB limit", ar: "الملف يتجاوز حد 80 ميجابايت" },
    uploadFailed: { en: "Upload failed", ar: "فشل الرفع" },
    networkError: { en: "Network error during upload", ar: "خطأ في الشبكة أثناء الرفع" },
  },

  /* ---------- team ---------- */
  team: {
    title: { en: "Team", ar: "الفريق" },
    subtitle: {
      en: "Everyone's learning progress, certificates and standing",
      ar: "تقدم التعلم والشهادات والترتيب لكل أعضاء الفريق",
    },
    soloHint: {
      en: "You're flying solo — add your office colleagues to track their CPE, streaks and certificates alongside yours.",
      ar: "تعمل بمفردك الآن — أضف زملاء المكتب لمتابعة ساعات التعليم المستمر والتتابعات والشهادات جنبًا إلى جنب.",
    },
    cpeReport: { en: "CPE report", ar: "تقرير التعليم المستمر" },
    backup: { en: "Backup", ar: "نسخة احتياطية" },
    addMember: { en: "Add member", ar: "إضافة عضو" },
    members: { en: "Members", ar: "الأعضاء" },
    teamXp: { en: "Team XP", ar: "نقاط الفريق" },
    certificates: { en: "Certificates", ar: "الشهادات" },
    onStreak: { en: "On streak", ar: "في تتابع" },
    member: { en: "Member", ar: "العضو" },
    role: { en: "Role", ar: "الدور" },
    xp: { en: "XP", ar: "النقاط" },
    lessons: { en: "Lessons", ar: "الدروس" },
    certs: { en: "Certs", ar: "الشهادات" },
    lastActive: { en: "Last active", ar: "آخر نشاط" },
    you: { en: "You", ar: "أنت" },
    admin: { en: "Admin", ar: "مدير" },
    learner: { en: "Learner", ar: "متعلّم" },
    certsShort: { en: "certs", ar: "شهادة" },
    courseProgress: { en: "Course progress", ar: "تقدم الدورات" },
    certificatesTitle: { en: "Certificates", ar: "الشهادات" },
    noEnrollments: { en: "No enrollments yet", ar: "لا انتسابات بعد" },
    noCertificates: { en: "No certificates yet", ar: "لا شهادات بعد" },
    access: { en: "Access", ar: "الصلاحية" },
    remove: { en: "Remove", ar: "إزالة" },
    lastActiveWord: { en: "Last active", ar: "آخر نشاط" },
    // add dialog
    addTitle: { en: "Add a team member", ar: "إضافة عضو للفريق" },
    addDesc: {
      en: "Add a colleague's record to track their learning progress, XP and certificates on the Team page.",
      ar: "أضف سجل زميل لمتابعة تقدمه ونقاطه وشهاداته في صفحة الفريق.",
    },
    fullName: { en: "Full name", ar: "الاسم الكامل" },
    namePh: { en: "e.g. Nourhan Sami", ar: "مثلًا: نورهان سامي" },
    workEmail: { en: "Work email", ar: "البريد المهني" },
    roleAtOffice: { en: "Role at office", ar: "المسمى الوظيفي" },
    rolePh: { en: "Audit Senior", ar: "مراجع أول" },
    memberAdded: { en: "Member added", ar: "تمت إضافة العضو" },
    trackedToast: { en: "is now tracked on the Team page.", ar: "يُتابع الآن في صفحة الفريق." },
    memberRemoved: { en: "Member removed", ar: "تمت إزالة العضو" },
    noAccessToast: { en: "no longer has access.", ar: "لم يعد له صلاحية وصول." },
    nowAdmin: { en: "is now an admin", ar: "أصبح مديرًا" },
    nowLearner: { en: "is now a learner", ar: "أصبح متعلّمًا" },
  },

  /* ---------- achievements ---------- */
  ach: {
    title: { en: "Achievements", ar: "الإنجازات" },
    subtitle: { en: "Your growth record across the workspace", ar: "سجل نموك عبر مساحة العمل" },
    xpTotal: { en: "XP total", ar: "إجمالي النقاط" },
    xpTo: { en: "XP to", ar: "نقطة للوصول إلى" },
    topLevel: { en: "top level", ar: "أعلى مستوى" },
    max: { en: "Max", ar: "الأقصى" },
    badges: { en: "Badges", ar: "الأوسمة" },
    earned: { en: "Earned", ar: "مُحقق" },
    locked: { en: "Locked", ar: "غير مُحقق" },
    certificates: { en: "Certificates", ar: "الشهادات" },
    issued: { en: "issued", ar: "صدرت" },
    view: { en: "View", ar: "عرض" },
    noCertificates: { en: "No certificates yet", ar: "لا شهادات بعد" },
    certExplainer: {
      en: "Complete every lesson of a course — and any knowledge check it includes — and your certificate is issued automatically.",
      ar: "أكمل جميع دروس الدورة — وأي اختبار متضمن فيها — لتصدر شهادتك تلقائيًا.",
    },
    browseCourses: { en: "Browse courses", ar: "تصفح الدورات" },
    // badge names & descriptions
    badgeFirstSteps: { en: "First Steps", ar: "الخطوات الأولى" },
    badgeFirstStepsD: { en: "Complete your first lesson", ar: "أكمل درسك الأول" },
    badgeOnFire: { en: "On Fire", ar: "على نار" },
    badgeOnFireD: { en: "Reach a 3-day learning streak", ar: "حقق تتابع تعلم لثلاثة أيام" },
    badgeQuizAce: { en: "Quiz Ace", ar: "نجم الاختبارات" },
    badgeQuizAceD: { en: "Score 100% on any knowledge check", ar: "احصل على 100% في أي اختبار" },
    badgeCpeCollector: { en: "CPE Collector", ar: "جامع ساعات التعليم" },
    badgeCpeCollectorD: { en: "Bank 10 CPE hours", ar: "اجمع 10 ساعات تعليم مستمر" },
    badgeIsaScholar: { en: "ISA Scholar", ar: "دارس المعايير الدولية" },
    badgeIsaScholarD: { en: "Complete any ISA standards course", ar: "أكمل أي دورة في معايير المراجعة الدولية" },
    badgeCertified: { en: "Certified", ar: "معتمد" },
    badgeCertifiedD: { en: "Earn your first course certificate", ar: "احصل على شهادتك الأولى" },
  },

  /* ---------- certificate ---------- */
  cert: {
    backToAchievements: { en: "Back to achievements", ar: "العودة إلى الإنجازات" },
    ofCompletion: { en: "Certificate of completion", ar: "شهادة إتمام" },
    thisCertifies: { en: "This certifies that", ar: "تشهد هذه الشهادة بأن" },
    hasCompleted: { en: "has successfully completed", ar: "قد أتم بنجاح" },
    cpeLessons: { en: "CPE hours", ar: "ساعات تعليم مستمر" },
    lessonsWord: { en: "lessons", ar: "دروس" },
    knowledgeCheck: { en: "Knowledge check passed", ar: "اجتاز الاختبار" },
    dateOfIssue: { en: "Date of issue", ar: "تاريخ الإصدار" },
    serial: { en: "Serial", ar: "الرقم التسلسلي" },
    verifyNote: { en: "Verify with the office registrar", ar: "يُتحقق منها لدى مسؤول التسجيل بالمكتب" },
    print: { en: "Print / save as PDF", ar: "طباعة / حفظ PDF" },
    allCertificates: { en: "All certificates", ar: "كل الشهادات" },
    notIssued: { en: "Certificate not issued yet", ar: "لم تصدر الشهادة بعد" },
    notIssuedExplainer: {
      en: "Complete all lessons of this course — including the knowledge check — and your certificate will be issued automatically.",
      ar: "أكمل جميع دروس هذه الدورة — بما فيها الاختبار — لتصدر شهادتك تلقائيًا.",
    },
    continueCourse: { en: "Continue course", ar: "متابعة الدورة" },
    done: { en: "done", ar: "مكتمل" },
    trainingProgram: { en: "Office Training Program", ar: "برنامج تدريب المكتب" },
  },

  /* ---------- AI tutor chrome ---------- */
  ai: {
    newConversation: { en: "New conversation", ar: "محادثة جديدة" },
    newShort: { en: "New", ar: "جديد" },
    history: { en: "History", ar: "السجل" },
    conversations: { en: "Conversations", ar: "المحادثات" },
    close: { en: "Close", ar: "إغلاق" },
    poweredBy: {
      en: "Powered by GLM — free for your office, with live web search.",
      ar: "مدعوم بـ GLM — مجاني لمكتبك مع بحث حي على الويب.",
    },
    title: { en: "AI Tutor", ar: "المساعد الذكي" },
    subtitle: {
      en: "External audit expert · ISA, Egyptian standards, IFRS",
      ar: "خبير مراجعة خارجية · المعايير الدولية والمصرية وIFRS",
    },
    studying: { en: "Studying:", ar: "تدرس الآن:" },
    contextNote: { en: "the tutor answers with this lesson in mind", ar: "يجيب المساعد مع وضع هذا الدرس في الاعتبار" },
    clearContext: { en: "Clear lesson context", ar: "مسح سياق الدرس" },
    greeting: {
      en: "what are we mastering today?",
      ar: "ماذا نتقن اليوم؟",
    },
    intro: {
      en: "Your audit tutor knows the full ISA handbook, the Egyptian regulatory framework and IFRS — and searches the live web whenever your question needs current information.",
      ar: "مساعد المراجعة يعرف دليل معايير المراجعة الدولية كاملًا والإطار التنظيمي المصري ومعايير IFRS — ويبحث على الويب كلما احتاج سؤالك معلومات حديثة.",
    },
    noConversations: {
      en: "No conversations yet. Ask your first question and it will show up here.",
      ar: "لا محادثات بعد. اطرح سؤالك الأول وسيظهر هنا.",
    },
    deleted: { en: "Conversation deleted", ar: "تم حذف المحادثة" },
    copyBlocked: {
      en: "Could not copy — your browser blocked clipboard access",
      ar: "تعذر النسخ — المتصفح منع الوصول إلى الحافظة",
    },
    copyAnswer: { en: "Copy answer", ar: "نسخ الإجابة" },
    copied: { en: "Copied", ar: "تم النسخ" },
    copy: { en: "Copy", ar: "نسخ" },
    listen: { en: "Listen", ar: "استماع" },
    askPh: {
      en: "Ask anything — ISA, Egyptian standards, IFRS, audit method…",
      ar: "اسأل أي شيء — المعايير الدولية أو المصرية أو IFRS أو منهجية المراجعة…",
    },
    askShortPh: { en: "Ask the tutor…", ar: "اسأل المساعد…" },
    webOn: { en: "Web: on", ar: "الويب: مفعل" },
    webAuto: { en: "Web: auto", ar: "الويب: تلقائي" },
    libOn: { en: "Library: on", ar: "المكتبة: مفعلة" },
    libAuto: { en: "Library: auto", ar: "المكتبة: تلقائية" },
    libHint: {
      en: "Search the office's uploaded PDFs and materials",
      ar: "ابحث في ملفات PDF ومواد المكتب المرفوعة",
    },
    stop: { en: "Stop", ar: "إيقاف" },
    send: { en: "Send message", ar: "إرسال الرسالة" },
    autoRead: { en: "Read answers aloud", ar: "قراءة الإجابات تلقائيًا" },
    autoReadOn: { en: "Auto-read: on", ar: "القراءة التلقائية: مفعلة" },
    autoReadOff: { en: "Auto-read: off", ar: "القراءة التلقائية: متوقفة" },
    voiceChat: { en: "Voice conversation", ar: "محادثة صوتية" },
    voiceChatOn: { en: "Voice chat: on — speak after each answer", ar: "المحادثة الصوتية: مفعلة — تحدث بعد كل إجابة" },
    voiceChatOff: { en: "Voice chat: off", ar: "المحادثة الصوتية: متوقفة" },
    voiceChatHint: {
      en: "Hands-free: the tutor reads each answer, then opens your mic for the next question",
      ar: "بدون استخدام اليدين: يقرأ المساعد كل إجابة ثم يفتح الميكروفون لسؤالك التالي",
    },
    disclaimer: {
      en: "The tutor auto-searches the web for current topics. Verify critical guidance against the standards themselves.",
      ar: "يبحث المساعد تلقائيًا في الويب للموضوعات الحديثة. تحقق من الإرشادات الحرجة من نصوص المعايير نفسها.",
    },
    scrollLatest: { en: "Scroll to latest message", ar: "الانتقال لآخر رسالة" },
    searchingWeb: { en: "Searching the web", ar: "البحث في الويب" },
    searchingLib: { en: "Searching the office library", ar: "البحث في مكتبة المكتب" },
    thinking: { en: "Thinking…", ar: "يفكر…" },
    openTutor: { en: "Open AI tutor", ar: "فتح المساعد الذكي" },
    openFull: { en: "Open full AI tutor", ar: "فتح المساعد كامل الصفحة" },
    openFullTitle: { en: "Open full chat", ar: "فتح المحادثة الكاملة" },
    closeTutor: { en: "Close AI tutor", ar: "إغلاق المساعد الذكي" },
    context: { en: "Context:", ar: "السياق:" },
    askAnything: { en: "Ask anything · free · web-connected", ar: "اسأل أي شيء · مجاني · متصل بالويب" },
    hi: { en: "Hi", ar: "أهلًا" },
    there: { en: "there", ar: "بك" },
    popupIntro: {
      en: "Your audit tutor is here — ISA, Egyptian standards, IFRS, or a quick quiz.",
      ar: "مساعد المراجعة هنا — المعايير الدولية أو المصرية أو IFRS أو اختبار سريع.",
    },
    clearConversation: { en: "Clear this conversation", ar: "مسح هذه المحادثة" },
    // starters (bilingual sets)
    stExplainLesson: { en: "Explain this lesson in simple terms", ar: "اشرح هذا الدرس ببساطة" },
    stQuizMe: { en: "Quiz me on this lesson — one question at a time", ar: "اختبرني في هذا الدرس — سؤالًا واحدًا في كل مرة" },
    stExamPoints: { en: "What are the most exam-relevant points in this lesson?", ar: "ما أهم نقاط الدرس من منظور الامتحانات؟" },
    stFieldExample: { en: "Give me a field example for this lesson from an Egyptian audit engagement", ar: "أعطني مثالًا ميدانيًا لهذا الدرس من مهمة مراجعة مصرية" },
    stExplainSimple: { en: "Explain it simply", ar: "اشرحها ببساطة" },
    stTakeaways: { en: "Key takeaways", ar: "أهم الخلاصات" },
    stEgyptReg: { en: "What's new in Egyptian audit regulation?", ar: "ما الجديد في تنظيمات المراجعة المصرية؟" },
    stPracticeQ: { en: "Give me one practice question", ar: "أعطني سؤال تدريب واحد" },
    stMateriality: { en: "Explain ISA 320 materiality", ar: "اشرح الأهمية النسبية وفق ISA 320" },
    // conversation history rail (v19.1)
    searchConvos: { en: "Search conversations…", ar: "ابحث في المحادثات…" },
    noConvoMatches: { en: "No conversations match your search.", ar: "لا محادثات تطابق بحثك." },
    gToday: { en: "Today", ar: "اليوم" },
    gYesterday: { en: "Yesterday", ar: "أمس" },
    gLast7: { en: "Previous 7 days", ar: "آخر 7 أيام" },
    gOlder: { en: "Older", ar: "أقدم" },
    msgCount: { en: "messages", ar: "رسالة" },
    you: { en: "You", ar: "أنت" },
    exportMd: { en: "Export as Markdown", ar: "تصدير بصيغة Markdown" },
    exportEmpty: { en: "Nothing to export yet", ar: "لا يوجد ما يُصدَّر بعد" },
    exported: { en: "Conversation exported", ar: "تم تصدير المحادثة" },
    // one-tap follow-ups on the latest answer (v19.1)
    followUp: { en: "Keep going:", ar: "واصل:" },
    fuSimpler: { en: "Explain simpler", ar: "اشرح أبسط" },
    fuExample: { en: "Field example", ar: "مثال ميداني" },
    fuQuiz: { en: "Quiz me", ar: "اختبرني" },
    fuPoints: { en: "Key points", ar: "أهم النقاط" },
    fuSimplerPrompt: {
      en: "Explain your previous answer in simpler terms, as if teaching a new trainee — keep it accurate but easier to digest.",
      ar: "اشرح إجابتك السابقة بأسلوب أبسط وكأنك تعلّم متدربًا جديدًا — بدقة لكن بأسهل صياغة.",
    },
    fuExamplePrompt: {
      en: "Give me a practical field example from a real external-audit engagement that illustrates your previous answer.",
      ar: "أعطني مثالًا عمليًا من مهمة مراجعة خارجية حقيقية يوضح إجابتك السابقة.",
    },
    fuQuizPrompt: {
      en: "Quiz me on your previous answer: ask me ONE exam-style question, wait for my reply, then grade it and explain.",
      ar: "اختبرني في إجابتك السابقة: اطرح سؤالًا واحدًا بأسلوب الامتحانات، وانتظر ردي ثم قيّمه واشرح.",
    },
    fuPointsPrompt: {
      en: "Summarize your previous answer as the key bullet points I should memorize.",
      ar: "لخّص إجابتك السابقة في أهم النقاط التي ينبغي أن أحفظها.",
    },
    regenerate: { en: "Regenerate answer", ar: "إعادة توليد الإجابة" },
    // popup parity (v19.1)
    attach: { en: "Attach image", ar: "إرفاق صورة" },
    attachHint: { en: "Attach an image (vision model)", ar: "إرفاق صورة (نموذج الرؤية)" },
    imgAttached: {
      en: "Image attached — will be read by the GLM-4.6V Flash vision model",
      ar: "صورة مرفقة — ستُقرأ بنموذج الرؤية GLM-4.6V Flash",
    },
    imgAttachedSub: {
      en: "Ask anything about it: a document, a screen, a table…",
      ar: "اسأل عن أي شيء فيها: مستند أو شاشة أو جدول…",
    },
    removeImage: { en: "Remove image", ar: "إزالة الصورة" },
    imgFallbackQ: { en: "Analyze this image.", ar: "حلل هذه الصورة." },
    // read-aloud voice picker (v28 — neural international voices)
    voice: {
      title: { en: "Reading voice", ar: "صوت القراءة" },
      auto: { en: "Auto", ar: "تلقائي" },
      autoNote: {
        en: "Natural neural voices — Arabic → Salma (Egypt), English → Jenny (US)",
        ar: "أصوات عصبية طبيعية — العربي سلمى (مصر) والإنجليزي Jenny (أمريكا)",
      },
      recommended: { en: "Recommended", ar: "موصى به" },
      preview: { en: "Preview this voice", ar: "معاينة هذا الصوت" },
      stopPreview: { en: "Stop preview", ar: "إيقاف المعاينة" },
      speed: { en: "Speed", ar: "السرعة" },
      arabicOk: { en: "Arabic ✓", ar: "عربي ✓" },
      englishOnly: { en: "English", ar: "إنجليزي" },
      female: { en: "Female", ar: "صوت أنثوي" },
      male: { en: "Male", ar: "صوت ذكوري" },
      searchPh: { en: "Search voices, languages…", ar: "ابحث عن صوت أو لغة…" },
      noResults: { en: "No voices match your search", ar: "لا توجد أصوات مطابقة لبحثك" },
      gArabic: { en: "Arabic · natural neural", ar: "العربية · عصبية طبيعية" },
      gEnglish: { en: "English · international accents", ar: "الإنجليزية · لكنات عالمية" },
      gIntl: { en: "International", ar: "لغات أخرى" },
      gZai: { en: "Z.ai engine · compact", ar: "محرك Z.ai · مباشر" },
    },
  },

  /* ---------- PWA ---------- */
  pwa: {
    updateTitle: { en: "A new version of AuditEdge is ready", ar: "إصدار جديد من AuditEdge جاهز" },
    updateDesc: { en: "Reload to pick it up.", ar: "أعد التحميل للحصول عليه." },
    reload: { en: "Reload", ar: "إعادة تحميل" },
    offline: {
      en: "Offline — courses, program & library readable; AI & videos need a signal",
      ar: "دون اتصال — الدورات والبرنامج والمكتبة متاحة للقراءة؛ الذكاء الاصطناعي والفيديو يحتاجان اتصالًا",
    },
  },

  /* ---------- retry / loading shell ---------- */
  shell: {
    retryTitle: { en: "The workspace couldn't be reached. Check your connection and try again.", ar: "تعذر الوصول إلى مساحة العمل. تحقق من اتصالك وحاول مجددًا." },
    retry: { en: "Retry", ar: "إعادة المحاولة" },
    navigation: { en: "Navigation", ar: "التنقل" },
    navDesc: { en: "Main navigation for the AuditEdge workspace", ar: "التنقل الرئيسي لمساحة عمل AuditEdge" },
  },

  /* ---------- studio (admin) ---------- */
  studio: {
    adminOnly: { en: "Studio is admin-only", ar: "الاستوديو للمديرين فقط" },
    adminOnlySub: {
      en: "Ask an administrator to grant you access, or continue learning below.",
      ar: "اطلب من مدير منحك الوصول، أو تابع التعلم أدناه.",
    },
    browseCourses: { en: "Browse courses", ar: "تصفح الدورات" },
    title: { en: "Studio", ar: "الاستوديو" },
    subtitle: {
      en: "Build and manage the office curriculum — courses, modules, lessons and knowledge checks",
      ar: "ابنِ منهج المكتب وأدرِه — الدورات والوحدات والدروس والاختبارات",
    },
    newCourse: { en: "New course", ar: "دورة جديدة" },
    createNew: { en: "Create a new course", ar: "إنشاء دورة جديدة" },
    published: { en: "Published", ar: "منشورة" },
    draft: { en: "Draft", ar: "مسودة" },
    optionsFor: { en: "Options for", ar: "خيارات" },
    unpublish: { en: "Unpublish", ar: "إلغاء النشر" },
    publishCourse: { en: "Publish course", ar: "نشر الدورة" },
    previewLearner: { en: "Preview as learner", ar: "معاينة كمتعلّم" },
    deleteCourse: { en: "Delete course", ar: "حذف الدورة" },
    noSubtitle: { en: "No subtitle yet", ar: "لا عنوان فرعي بعد" },
    modules: { en: "modules", ar: "وحدة" },
    lessons: { en: "lessons", ar: "درسًا" },
    enrolled: { en: "enrolled", ar: "منتسب" },
    edit: { en: "Edit", ar: "تحرير" },
    deleteQ: { en: "Delete this course?", ar: "حذف هذه الدورة؟" },
    deleteDesc: {
      en: "This permanently removes the course with all its modules, lessons, quizzes, enrollments and certificates. This cannot be undone.",
      ar: "سيؤدي هذا إلى حذف الدورة نهائيًا مع جميع وحداتها ودروسها واختباراتها وانتساباتها وشهاداتها. لا يمكن التراجع عن هذا الإجراء.",
    },
    cancel: { en: "Cancel", ar: "إلغاء" },
    deletePermanent: { en: "Delete permanently", ar: "حذف نهائي" },
    courseCreated: { en: "Course created", ar: "تم إنشاء الدورة" },
    courseCreatedD: { en: "Start by adding modules and lessons.", ar: "ابدأ بإضافة الوحدات والدروس." },
    courseDeleted: { en: "Course deleted", ar: "تم حذف الدورة" },
    unpublished: { en: "Course unpublished", ar: "تم إلغاء نشر الدورة" },
    publishedToast: { en: "Course published", ar: "تم نشر الدورة" },
    hiddenToast: { en: "is hidden from the course catalog.", ar: "أصبحت مخفية من كتالوج الدورات." },
    liveToast: { en: "is now live for the team.", ar: "أصبحت متاحة للفريق الآن." },
  },

  /* ---------- discover (admin: free course importer) ---------- */
  discover: {
    adminOnly: { en: "Discover is admin-only", ar: "الاستكشاف للمديرين فقط" },
    adminOnlySub: {
      en: "Ask an administrator to import free courses for the team.",
      ar: "اطلب من مدير استيراد دورات مجانية للفريق.",
    },
    browseCourses: { en: "Browse courses", ar: "تصفح الدورات" },
    title: { en: "Discover", ar: "الاستكشاف" },
    subtitle: {
      en: "Search free courses across Coursera, edX, MIT OpenCourseWare, OpenStax and YouTube — then import them into your catalog. No API keys, no subscriptions.",
      ar: "ابحث في الدورات المجانية عبر Coursera وedX وMIT وOpenStax ويوتيوب — ثم استوردها إلى كتالوجك. دون مفاتيح برمجية أو اشتراكات.",
    },
    searchLabel: { en: "Search free courses", ar: "البحث في الدورات المجانية" },
    searchPh: {
      en: "Try “auditing”, “IFRS”, “معايير المراجعة”…",
      ar: "جرّب «مراجعة» أو «IFRS» أو «auditing»…",
    },
    search: { en: "Search", ar: "بحث" },
    popular: { en: "Popular:", ar: "شائع:" },
    noResults: { en: "No free courses found", ar: "لا توجد دورات مجانية" },
    noResultsSub: {
      en: "Try a broader term, or paste a YouTube playlist link below — any public playlist works.",
      ar: "جرّب مصطلحًا أوسع، أو الصق رابط قائمة تشغيل يوتيوب أدناه — أي قائمة عامة تعمل.",
    },
    openCourse: { en: "Open course", ar: "فتح الدورة" },
    importWord: { en: "Import", ar: "استيراد" },
    importedNote: {
      en: "Imported courses link out to the platform (free/audit access) and can be edited like any other course in the builder.",
      ar: "ترتبط الدورات المستوردة بالمنصة (وصول مجاني) ويمكن تعديلها كأي دورة أخرى في المنشئ.",
    },
    playlistTitle: { en: "Import a YouTube playlist", ar: "استيراد قائمة تشغيل يوتيوب" },
    playlistDesc: {
      en: "Paste any public playlist — Arabic auditing and IFRS lectures, MIT lectures, anything. Every video becomes a lesson your team can watch, track and discuss with the AI tutor.",
      ar: "الصق أي قائمة عامة — محاضرات مراجعة وIFRS بالعربية، محاضرات MIT، أي شيء. كل فيديو يصبح درسًا يشاهده الفريق ويتابعه ويناقشه مع المساعد الذكي.",
    },
    playlistLink: { en: "Playlist link", ar: "رابط القائمة" },
    categoryLabel: { en: "Category", ar: "التصنيف" },
    maxVideos: { en: "Max videos", ar: "أقصى عدد فيديوهات" },
    searchFailed: { en: "Search failed", ar: "فشل البحث" },
    tryAgain: { en: "Try again in a moment.", ar: "حاول مجددًا بعد قليل." },
    couldNotImport: { en: "Could not import this course", ar: "تعذر استيراد هذه الدورة" },
    courseImported: { en: "Course imported", ar: "تم استيراد الدورة" },
    nowInCatalog: { en: "is now in your catalog.", ar: "أصبحت في كتالوجك الآن." },
    openWord: { en: "Open", ar: "فتح" },
    importFailed: {
      en: "Import failed — check your connection and try again",
      ar: "فشل الاستيراد — تحقق من اتصالك وحاول مجددًا",
    },
    pasteLinkFirst: { en: "Paste a YouTube playlist link first", ar: "الصق رابط قائمة تشغيل يوتيوب أولًا" },
    playlistImported: { en: "Playlist imported", ar: "تم استيراد القائمة" },
    everyVideoLesson: { en: "— every video is now a lesson.", ar: "— كل فيديو أصبح درسًا الآن." },
  },

  /* ---------- course builder (admin) ---------- */
  builder: {
    notFound: { en: "Course not found.", ar: "الدورة غير موجودة." },
    backToStudio: { en: "Back to Studio", ar: "العودة إلى الاستوديو" },
    studioWord: { en: "Studio", ar: "الاستوديو" },
    preview: { en: "Preview", ar: "معاينة" },
    publishCourse: { en: "Publish course", ar: "نشر الدورة" },
    published: { en: "Published", ar: "منشورة" },
    draft: { en: "Draft", ar: "مسودة" },
    modulesLessons: { en: "modules", ar: "وحدة" },
    lessonsWord: { en: "lessons", ar: "درسًا" },
    enrolledWord: { en: "enrolled", ar: "منتسب" },
    detailsTitle: { en: "Course details", ar: "بيانات الدورة" },
    titleLabel: { en: "Title", ar: "العنوان" },
    codeLabel: { en: "Course code", ar: "كود الدورة" },
    subtitleLabel: { en: "Subtitle", ar: "العنوان الفرعي" },
    subtitlePh: { en: "One line that sells the course to the team", ar: "سطر واحد يقنع الفريق بالدورة" },
    descLabel: { en: "Description", ar: "الوصف" },
    descPh: { en: "What will the team learn? Why does it matter on engagements?", ar: "ماذا سيتعلم الفريق؟ ولماذا يهم في المهام؟" },
    categoryLabel: { en: "Category", ar: "التصنيف" },
    levelLabel: { en: "Level", ar: "المستوى" },
    cpeLabel: { en: "CPE hours", ar: "ساعات التعليم المستمر" },
    instructorLabel: { en: "Instructor", ar: "المقدم" },
    instructorTitle: { en: "Instructor title", ar: "المسمى الوظيفي للمقدم" },
    instructorBio: { en: "Instructor bio", ar: "نبذة عن المقدم" },
    iconLabel: { en: "Icon", ar: "الأيقونة" },
    accentLabel: { en: "Accent", ar: "اللون المميز" },
    saveDetails: { en: "Save details", ar: "حفظ البيانات" },
    savedToast: { en: "Course details saved", ar: "تم حفظ بيانات الدورة" },
    curriculum: { en: "Curriculum", ar: "المحتوى الدراسي" },
    modulePh: { en: "Short description (optional)", ar: "وصف مختصر (اختياري)" },
    save: { en: "Save", ar: "حفظ" },
    cancel: { en: "Cancel", ar: "إلغاء" },
    lessonsCount: { en: "lessons", ar: "درسًا" },
    moveUp: { en: "Move up", ar: "تحريك لأعلى" },
    moveDown: { en: "Move down", ar: "تحريك لأسفل" },
    renameModule: { en: "Rename module", ar: "إعادة تسمية الوحدة" },
    deleteModule: { en: "Delete module", ar: "حذف الوحدة" },
    moduleDeleted: { en: "Module deleted", ar: "تم حذف الوحدة" },
    moduleAdded: { en: "Module added", ar: "تمت إضافة الوحدة" },
    moduleUpdated: { en: "Module updated", ar: "تم تحديث الوحدة" },
    quizWord: { en: "Quiz", ar: "اختبار" },
    minWord: { en: "min", ar: "دقيقة" },
    filesWord: { en: "file(s)", ar: "ملف" },
    editLesson: { en: "Edit lesson", ar: "تحرير الدرس" },
    deleteLesson: { en: "Delete lesson", ar: "حذف الدرس" },
    lessonDeleted: { en: "Lesson deleted", ar: "تم حذف الدرس" },
    addLesson: { en: "Lesson", ar: "درس" },
    addQuiz: { en: "Quiz", ar: "اختبار" },
    newModulePh: { en: "New module title — e.g. Risk Assessment Procedures", ar: "عنوان الوحدة الجديدة — مثل: إجراءات تقييم المخاطر" },
    addModule: { en: "Add module", ar: "إضافة وحدة" },
    lessonAdded: { en: "Lesson added", ar: "تمت إضافة الدرس" },
    quizAdded: { en: "Quiz added", ar: "تمت إضافة الاختبار" },
    clickEdit: { en: "Click Edit to write its content.", ar: "اضغط تحرير لكتابة المحتوى." },
    lessonSaved: { en: "Lesson saved", ar: "تم حفظ الدرس" },
    // lesson editor
    editLessonTitle: { en: "Edit lesson", ar: "تحرير الدرس" },
    lessonTitle: { en: "Lesson title", ar: "عنوان الدرس" },
    duration: { en: "Duration (min)", ar: "المدة (دقيقة)" },
    xp: { en: "XP", ar: "نقاط" },
    videoUrl: { en: "YouTube link (optional)", ar: "رابط يوتيوب (اختياري)" },
    content: { en: "Content", ar: "المحتوى" },
    introLabel: { en: "Introduction", ar: "المقدمة" },
    sectionWord: { en: "Section", ar: "قسم" },
    heading: { en: "Heading", ar: "العنوان" },
    body: { en: "Body", ar: "النص" },
    bullets: { en: "Bullets (one per line)", ar: "نقاط (واحدة لكل سطر)" },
    addSection: { en: "Add section", ar: "إضافة قسم" },
    fieldCase: { en: "Field case (optional)", ar: "حالة ميدانية (اختياري)" },
    keyPoints: { en: "Key points (one per line)", ar: "النقاط الأساسية (واحدة لكل سطر)" },
    takeaway: { en: "The takeaway", ar: "الخلاصة" },
    materials: { en: "Materials", ar: "المواد" },
    attachHint: { en: "Attach library materials to this lesson.", ar: "أرفق مواد المكتبة بهذا الدرس." },
    quizSection: { en: "Knowledge check", ar: "الاختبار" },
    quizTitle: { en: "Quiz title", ar: "عنوان الاختبار" },
    passScore: { en: "Pass score (%)", ar: "درجة النجاح (%)" },
    questions: { en: "Questions", ar: "الأسئلة" },
    questionWord: { en: "Question", ar: "السؤال" },
    options: { en: "Options (one per line)", ar: "الخيارات (واحد لكل سطر)" },
    correct: { en: "Correct", ar: "الإجابة الصحيحة" },
    explanation: { en: "Explanation", ar: "التوضيح" },
    addQuestion: { en: "Add question", ar: "إضافة سؤال" },
    saveLesson: { en: "Save lesson", ar: "حفظ الدرس" },
    deleteQuestion: { en: "Delete question", ar: "حذف السؤال" },
  },
} as const

/** Dot-lookup helper: tt("nav.home", lang) — typed for key safety. */
export function tt<K extends string>(path: K, lang: Lang): string {
  const parts = path.split(".")
  let node: unknown = T
  for (const p of parts) {
    if (node && typeof node === "object" && p in (node as Record<string, unknown>)) {
      node = (node as Record<string, unknown>)[p]
    } else {
      return path // missing key — return the path itself so bugs are visible
    }
  }
  if (node && typeof node === "object" && "en" in (node as Bi) && "ar" in (node as Bi)) {
    return (node as Bi)[lang]
  }
  return path
}
