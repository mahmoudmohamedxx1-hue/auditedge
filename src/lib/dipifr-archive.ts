/** v34 — the REAL DipIFR past-exam archive (Sameh Zidan / efham IFRS Academy).
 *
 * The Exam Center's "IFRS diploma" family always served ADAPTED papers from
 * the question bank (flagship + four dated sittings). This module adds the
 * real thing: every actual ACCA DipIFR sitting paper from June 2013 to
 * December 2025 as a direct PDF, plus the examiner question workbooks and
 * the BPP study kit — all hosted on the source's CDN and verified live
 * (HTTP 200) before shipping.
 *
 * Source page: https://www.samehzidan.com/course-resources1/
 * Every file is public on the author's CDN (sameh-files.b-cdn.net).
 *
 * Format facts of the real exam (worth telling the learner up-front):
 * 4 questions × 25 marks · 3 hours · Q1 is ALWAYS a consolidation
 * (statement of financial position or statement of profit or loss — the
 * Consolidation workbook below tracks which one every sitting examined). */

const CDN = "https://sameh-files.b-cdn.net"

export type DipSession = "june" | "december"

export type DipSitting = {
  year: number
  session: DipSession
  label: string
  labelAr: string
  url: string
  /** June 2025 paper is published as the answered copy */
  answers?: boolean
}

/** Every real sitting paper, newest first. 26 papers across 13 years. */
export const DIP_SITTINGS: DipSitting[] = [
  { year: 2025, session: "december", label: "December 2025", labelAr: "ديسمبر 2025", url: `${CDN}/matrials/D25-Dec.pdf` },
  { year: 2025, session: "june", label: "June 2025 — with answers", labelAr: "يونيو 2025 — مع الحلول", url: `${CDN}/matrials/2025-6%20%20Answers.pdf`, answers: true },
  { year: 2024, session: "december", label: "December 2024", labelAr: "ديسمبر 2024", url: `${CDN}/matrials/2024-12%20December%20Exam.pdf` },
  { year: 2024, session: "june", label: "June 2024", labelAr: "يونيو 2024", url: `${CDN}/matrials/2024-6%20June%20Exam.pdf` },
  { year: 2023, session: "december", label: "December 2023", labelAr: "ديسمبر 2023", url: `${CDN}/matrials/2023-12%20December%20Exam.pdf` },
  { year: 2023, session: "june", label: "June 2023", labelAr: "يونيو 2023", url: `${CDN}/matrials/2023-6%20June%20Exam.pdf` },
  { year: 2022, session: "december", label: "December 2022", labelAr: "ديسمبر 2022", url: `${CDN}/matrials/2022-12%20December%20Exam.pdf` },
  { year: 2022, session: "june", label: "June 2022", labelAr: "يونيو 2022", url: `${CDN}/matrials/2022-6%20June%20Exam.pdf` },
  { year: 2021, session: "december", label: "December 2021", labelAr: "ديسمبر 2021", url: `${CDN}/matrials/2021-12%20December%20Exam.pdf` },
  { year: 2021, session: "june", label: "June 2021", labelAr: "يونيو 2021", url: `${CDN}/matrials/2021-6%20June%20Exam.pdf` },
  { year: 2020, session: "december", label: "December 2020", labelAr: "ديسمبر 2020", url: `${CDN}/matrials/2020-12%20December%20Exam.pdf` },
  { year: 2020, session: "june", label: "June 2020", labelAr: "يونيو 2020", url: `${CDN}/matrials/2020-6%20June%20Exam.pdf` },
  { year: 2019, session: "december", label: "December 2019", labelAr: "ديسمبر 2019", url: `${CDN}/matrials/2019-12%20December%20Exam.pdf` },
  { year: 2019, session: "june", label: "June 2019", labelAr: "يونيو 2019", url: `${CDN}/matrials/2019-6%20June%20Exam.pdf` },
  { year: 2018, session: "december", label: "December 2018", labelAr: "ديسمبر 2018", url: `${CDN}/matrials/2018-12%20December%20Exam.pdf` },
  { year: 2018, session: "june", label: "June 2018", labelAr: "يونيو 2018", url: `${CDN}/matrials/2018-6%20June%20Exam.pdf` },
  { year: 2017, session: "december", label: "December 2017", labelAr: "ديسمبر 2017", url: `${CDN}/matrials/2017-12%20December%20Exam.pdf` },
  { year: 2017, session: "june", label: "June 2017", labelAr: "يونيو 2017", url: `${CDN}/matrials/2017-6%20June%20Exam.pdf` },
  { year: 2016, session: "december", label: "December 2016", labelAr: "ديسمبر 2016", url: `${CDN}/matrials/2016-12%20December%20Exam.pdf` },
  { year: 2016, session: "june", label: "June 2016", labelAr: "يونيو 2016", url: `${CDN}/matrials/2016-6%20June%20Exam.pdf` },
  { year: 2015, session: "december", label: "December 2015", labelAr: "ديسمبر 2015", url: `${CDN}/matrials/2015-12%20December%20Exam.pdf` },
  { year: 2015, session: "june", label: "June 2015", labelAr: "يونيو 2015", url: `${CDN}/matrials/2015-6%20June%20Exam.pdf` },
  { year: 2014, session: "december", label: "December 2014", labelAr: "ديسمبر 2014", url: `${CDN}/matrials/2014-12%20December%20Exam.pdf` },
  { year: 2014, session: "june", label: "June 2014", labelAr: "يونيو 2014", url: `${CDN}/matrials/2014-6%20June%20Exam.pdf` },
  { year: 2013, session: "december", label: "December 2013", labelAr: "ديسمبر 2013", url: `${CDN}/matrials/2013-12%20December%20Exam.pdf` },
  { year: 2013, session: "june", label: "June 2013", labelAr: "يونيو 2013", url: `${CDN}/matrials/2013-6%20June%20Exam.pdf` },
]

export type DipResourceKind = "archive" | "workbook" | "study" | "glossary"

export type DipResource = {
  id: string
  labelEn: string
  labelAr: string
  descEn: string
  descAr: string
  url: string
  kind: DipResourceKind
}

/** Everything that rides alongside the papers: the combined archive, the
 *  examiner question workbooks, the BPP study kit, and the terms glossary. */
export const DIP_RESOURCES: DipResource[] = [
  {
    id: "combined",
    labelEn: "The whole archive — Jun 2013 to Dec 2024",
    labelAr: "الأرشيف الكامل — يونيو 2013 إلى ديسمبر 2024",
    descEn: "Every sitting in one PDF — the heaviest file here, and the only one you need offline.",
    descAr: "كل الجلسات في ملف PDF واحد — أثقل ملف هنا، وهو الوحيد الذي تحتاجه دون اتصال.",
    url: `${CDN}/Jun%202013-Dec%202024%20IFRS%20Dip%20Exams.pdf`,
    kind: "archive",
  },
  {
    id: "workbook-dec19-jun25",
    labelEn: "Examiner workbook — Dec 2019 to June 2025",
    labelAr: "كراسة الأسئلة — ديسمبر 2019 إلى يونيو 2025",
    descEn: "Every question of every sitting transcribed: Q1 consolidation + Q2, Q3 and Q4 sheets, trial balances included.",
    descAr: "كل سؤال في كل جلسة منقول: سؤال التوحيد الأول + أوراق الأسئلة 2 و3 و4 مع موازين المراجعة.",
    url: `${CDN}/pastDec-19%20to%20June-25.xlsx`,
    kind: "workbook",
  },
  {
    id: "workbook-2015-2019",
    labelEn: "Examiner workbook — 2015 to June 2019",
    labelAr: "كراسة الأسئلة — 2015 إلى يونيو 2019",
    descEn: "The earlier years in the same format — Alpha, Beta and Gamma from the very beginning.",
    descAr: "السنوات السابقة بنفس التنسيق — ألفا وبيتا وجاما من البداية.",
    url: `${CDN}/Summary/Past%20Exams2015%20to%20%20June-19.xlsx`,
    kind: "workbook",
  },
  {
    id: "workbook-consolidation",
    labelEn: "Consolidation bank — Jun 2015 to Dec 2025",
    labelAr: "بنك أسئلة التوحيد — يونيو 2015 إلى ديسمبر 2025",
    descEn: "Every Q1 ever set, tagged by whether it consolidates the SOFP or the SOPL — the classic 25-mark opener.",
    descAr: "كل سؤال توحيد حتى الآن، مصنّف حسب توحيده لقائمة المركز المالي أو قائمة الدخل — سؤال الـ25 درجة الافتتاحي الشهير.",
    url: `${CDN}/Consolidation%20(Jun%2015%20-%20Dec%2025)%20(1).xlsx`,
    kind: "workbook",
  },
  {
    id: "workbook-q4",
    labelEn: "Question 4 bank",
    labelAr: "بنك السؤال الرابع",
    descEn: "The multi-topic Q4 sittings, one sheet per exam — June 2015 onwards.",
    descAr: "أسئلة الجلسة الرابعة متعددة المعايير، ورقة لكل امتحان — من يونيو 2015 فصاعدًا.",
    url: `${CDN}/Question%204.xlsx`,
    kind: "workbook",
  },
  {
    id: "workbook-exam-questions",
    labelEn: "Exams questions index",
    labelAr: "فهرس أسئلة الامتحانات",
    descEn: "The author's running index of exam questions across the years.",
    descAr: "فهرس المتابعة الذي يعدّه المؤلف لأسئلة الامتحانات عبر السنوات.",
    url: `${CDN}/Exams%20Questions.xlsx`,
    kind: "workbook",
  },
  {
    id: "bpp-text",
    labelEn: "BPP Study Text — DipIFR Dec 2026 / Jun 2027",
    labelAr: "كتاب BPP الدراسي — DipIFR ديسمبر 2026 / يونيو 2027",
    descEn: "The current BPP text for the next sittings — the full syllabus, chapter by chapter.",
    descAr: "كتاب BPP الحالي للجلسات القادمة — المنهج كاملًا فصلًا بفصل.",
    url: `${CDN}/BPP%20Study%20Text%20DipIFR%20Dec26-Jun27.pdf`,
    kind: "study",
  },
  {
    id: "bpp-kit",
    labelEn: "BPP Exam Practice Kit — DipIFR Dec 2026 / Jun 2027",
    labelAr: "بنك أسئلة BPP — DipIFR ديسمبر 2026 / يونيو 2027",
    descEn: "The practice kit that pairs with the study text — question banks with model answers.",
    descAr: "بنك الأسئلة المرافق للكتاب الدراسي — أسئلة مع إجابات نموذجية.",
    url: `${CDN}/Exam%20Practice%20Kit%20DipIFR%20Dec26-Jun27.pdf`,
    kind: "study",
  },
  {
    id: "glossary",
    labelEn: "All-standards terms glossary (EN ↔ AR)",
    labelAr: "ملف مصطلحات كل المعايير (إنجليزي ↔ عربي)",
    descEn: "One sheet per standard — every English term with its Arabic translation and a note.",
    descAr: "ورقة لكل معيار — كل مصطلح إنجليزي مع ترجمته العربية وملاحظة.",
    url: `${CDN}/DipIFR_ALL_Standards_%D8%A7%D9%84%D9%85%D8%B5%D8%B7%D9%84%D8%AD%D8%A7%D8%AA_%D8%A7%D9%84%D8%A7%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A%D8%A9_1.xlsx`,
    kind: "glossary",
  },
]

/** Attribution — the archive is the author's work; the app only points at it. */
export const DIP_SOURCE = {
  nameEn: "Sameh Zidan — efham IFRS Academy",
  nameAr: "سامح زيدان — أكاديمية افهم IFRS",
  url: "https://www.samehzidan.com/course-resources1/",
}

/** The real exam's format, stated on the panel so the learner knows what
 *  the in-app adapted papers are simulating. */
export const DIP_FORMAT_FACTS = {
  questions: 4,
  marksEach: 25,
  durationMin: 180,
}
