/** v22 — curated Arabic audit & accounting YouTube episodes for the
 *  Podcasts section ("From YouTube — بالعربي").
 *
 *  Channels chosen for clear, friendly, well-structured Arabic (the
 *  learner's request — e.g. CPA Talks), verified via YouTube search on
 *  2026-09-27. Episode data (ids, lengths) is captured from live search
 *  results; thumbnails load from i.ytimg.com. */

export type PodcastEpisode = {
  /** YouTube video id */
  id: string
  /** Original (Arabic) title */
  title: string
  channel: string
  /** "PT" style display length, e.g. "1:34:52" */
  length: string
  views: string
  category: "external-audit" | "ifrs" | "egypt" | "internal-audit" | "career"
  /** Short EN blurb */
  blurbEn: string
  /** Short AR blurb */
  blurbAr: string
}

export const YT_CATEGORIES: {
  id: PodcastEpisode["category"] | "all"
  labelEn: string
  labelAr: string
}[] = [
  { id: "all", labelEn: "All", labelAr: "الكل" },
  { id: "external-audit", labelEn: "External audit", labelAr: "التدقيق الخارجي" },
  { id: "ifrs", labelEn: "IFRS & accounting", labelAr: "المعايير والمحاسبة" },
  { id: "egypt", labelEn: "Egyptian standards", labelAr: "المعايير المصرية" },
  { id: "internal-audit", labelEn: "Internal audit", labelAr: "المراجعة الداخلية" },
  { id: "career", labelEn: "Career", labelAr: "المسار المهني" },
]

export const YT_EPISODES: PodcastEpisode[] = [
  // ---- CPA Talks (the learner's requested channel) ----
  {
    id: "6sEAi4AQFAk",
    title: "Steps of External Audit لايف — أهم خطوات التدقيق لكل مدقق حسابات خارجي",
    channel: "CPA Talks",
    length: "1:34:52",
    views: "39K",
    category: "external-audit",
    blurbEn: "A friendly live session walking through the real steps of an external audit, start to finish.",
    blurbAr: "لايف ودّي يتناول خطوات التدقيق الخارجي الحقيقية من البداية للنهاية.",
  },
  {
    id: "UlXAY_gALWI",
    title: "القوائم المالية المجمعة | شرح مفصل طبقا لمعايير المحاسبة الدولية",
    channel: "CPA Talks",
    length: "2:07:03",
    views: "12K",
    category: "ifrs",
    blurbEn: "Consolidated financial statements in detail under IFRS — the deep-dive style CPA Talks is known for.",
    blurbAr: "القوائم المالية المجمعة بالتفصيل وفق المعايير الدولية — بأسلوب الدمسات العميقة.",
  },
  {
    id: "6EP6b1U9UoY",
    title: "الأدوات المالية IFRS 9 | شرح مفصل طبقا لمعايير المحاسبة الدولية",
    channel: "CPA Talks",
    length: "1:47:04",
    views: "16K",
    category: "ifrs",
    blurbEn: "Financial instruments under IFRS 9, explained patiently with examples.",
    blurbAr: "الأدوات المالية وفق IFRS 9 بشرح صبور وأمثلة.",
  },
  {
    id: "TxWRD7oKE5Y",
    title: "IFRS 16 ورشة عمل",
    channel: "CPA Talks",
    length: "2:54:00",
    views: "4.6K",
    category: "ifrs",
    blurbEn: "A full IFRS 16 leases workshop — practical journal entries and transitions.",
    blurbAr: "ورشة عمل كاملة عن IFRS 16 — قيود عملية ومعالجات الانتقال.",
  },
  {
    id: "ZS5kKewKYM0",
    title: "الأصول الثابتة والأصول غير الملموسة والاضمحلال في الأصول | شرح مفصل",
    channel: "CPA Talks",
    length: "2:11:11",
    views: "4K",
    category: "ifrs",
    blurbEn: "PPE, intangibles and impairment (IAS 16 / 38 / 36) in one detailed session.",
    blurbAr: "الأصول الثابتة وغير الملموسة والاضمحلال (IAS 16 / 38 / 36) في جلسة مفصلة واحدة.",
  },
  {
    id: "OJ1DZKbqH_I",
    title: "طريقي من التخرج حتى الآن في مجال المحاسبة والتدقيق (مصر، الإمارات وانجلترا)",
    channel: "CPA Talks",
    length: "37:59",
    views: "4K",
    category: "career",
    blurbEn: "An honest career-path conversation — graduation to practice across Egypt, the UAE and England.",
    blurbAr: "حوار صريح عن المسار المهني — من التخرج إلى الاحتراف عبر مصر والإمارات وإنجلترا.",
  },
  {
    id: "nz0cjh6Xh8c",
    title: "تدقيق 101 — (11) — فحص التكاليف وأرصدة الموردين",
    channel: "CPA Talks",
    length: "34:27",
    views: "5.7K",
    category: "external-audit",
    blurbEn: "From the Audit 101 series: testing costs and supplier balances.",
    blurbAr: "من سلسلة تدقيق 101: فحص التكاليف وأرصدة الموردين.",
  },
  {
    id: "Uspt0KvLmqI",
    title: "IAS 37 شرح معيار المخصصات والالتزامات المحتملة والأصول المحتملة",
    channel: "CPA Talks",
    length: "32:56",
    views: "3.8K",
    category: "ifrs",
    blurbEn: "IAS 37 provisions, contingent liabilities and contingent assets, clearly explained.",
    blurbAr: "المخصصات والالتزامات والأصول المحتملة وفق IAS 37 بشرح واضح.",
  },
  // ---- Mahmoud Hamouda (Egyptian audit standards specialist) ----
  {
    id: "ub6839N_vi4",
    title: "دورة شرح معايير المراجعة المصرية",
    channel: "Mahmoud Hamouda",
    length: "1:32:54",
    views: "836",
    category: "egypt",
    blurbEn: "A full course on the Egyptian Standards on Auditing — structured, exam-oriented.",
    blurbAr: "دورة كاملة في معايير المراجعة المصرية — منظمة وموجهة للامتحانات.",
  },
  {
    id: "Qt7Hq5sZ6YE",
    title: "شرح معايير المراجعة | أسئلة اختيار من المتعدد محلولة | ازاي تذاكر",
    channel: "Mahmoud Hamouda",
    length: "33:50",
    views: "25K",
    category: "egypt",
    blurbEn: "Egyptian audit standards through solved MCQs — how to actually study them.",
    blurbAr: "معايير المراجعة المصرية عبر أسئلة محلولة — وكيف تذاكرها فعليًا.",
  },
  {
    id: "6rnyhPzHoOg",
    title: "تسلسل معايير المراجعة | دورة شرح معايير المراجعة المصرية",
    channel: "Mahmoud Hamouda",
    length: "4:56",
    views: "2.6K",
    category: "egypt",
    blurbEn: "The logical sequence of the audit standards — a perfect orientation clip.",
    blurbAr: "التسلسل المنطقي لمعايير المراجعة — مقطع تعريفي مثالي.",
  },
  // ---- ESAA EGYPT (the official society) ----
  {
    id: "Y0MS9mB-MGo",
    title: "ندوة أهم المستجدات في معايير المراجعة المصرية والفحص المحدود ومهام التأكد الأخرى",
    channel: "ESAA EGYPT — جمعية المحاسبين والمراجعين المصرية",
    length: "2:03:16",
    views: "1.1K",
    category: "egypt",
    blurbEn: "The Egyptian Society of Accountants and Auditors on the latest standard updates and assurance services.",
    blurbAr: "جمعية المحاسبين والمراجعين المصريين حول أحدث مستجدات المعايير ومهام التأكد.",
  },
  {
    id: "nuy_1rmd1Ao",
    title: "أهم التغيرات في معايير المراجعة المصرية الجديدة — ملخص ندوة الجمعية",
    channel: "Accounting forever",
    length: "6:01",
    views: "906",
    category: "egypt",
    blurbEn: "A crisp summary of the changes in the new Egyptian auditing standards.",
    blurbAr: "ملخص مركز لأهم التغيرات في معايير المراجعة المصرية الجديدة.",
  },
  // ---- Hany Sayed (IFRS educator) ----
  {
    id: "BXEW8QWOUt0",
    title: "IFRS 16 Leases — Part one — شرح معيار المحاسبة الدولي الإيجارات",
    channel: "Hany Sayed",
    length: "29:49",
    views: "55K",
    category: "ifrs",
    blurbEn: "The most-watched Arabic IFRS 16 explainer — lessee accounting part one.",
    blurbAr: "أشهر شرح عربي لمعيار الإيجارات IFRS 16 — محاسبة المستأجر (الجزء الأول).",
  },
  {
    id: "DOb0JqA3Xcc",
    title: "IFRS 15 Revenue — Part one — شرح معيار المحاسبة الدولي الإيراد",
    channel: "Hany Sayed",
    length: "21:43",
    views: "41K",
    category: "ifrs",
    blurbEn: "Revenue from contracts with customers, part one — the five-step model.",
    blurbAr: "الإيراد من العقود مع العملاء (الجزء الأول) — نموذج الخطوات الخمس.",
  },
  // ---- Hossam Saad ----
  {
    id: "hq_t4dI6nQ4",
    title: "معايير المحاسبة IAS/IFRS | عرض القوائم المالية IAS 1",
    channel: "دليلك لفهم المحاسبة — حسام سعد",
    length: "1:09:14",
    views: "63K",
    category: "ifrs",
    blurbEn: "Presentation of Financial Statements (IAS 1) — a complete lecture.",
    blurbAr: "عرض القوائم المالية وفق IAS 1 — محاضرة كاملة.",
  },
  // ---- Yazan Makdah (internal audit) ----
  {
    id: "Le1nxliKV_g",
    title: "التدقيق الداخلي | ما هو التدقيق الداخلي؟",
    channel: "Yazan Makdah | يزن مقدح",
    length: "13:55",
    views: "123K",
    category: "internal-audit",
    blurbEn: "The most popular Arabic intro to internal audit — clear and friendly.",
    blurbAr: "أشهر مقدمة عربية عن المراجعة الداخلية — واضحة وودودة.",
  },
  {
    id: "ryiKL82V3N8",
    title: "الحوكمة وإدارة المخاطر والتدقيق الداخلي — نموذج خطوط الدفاع الثلاثة",
    channel: "Yazan Makdah | يزن مقدح",
    length: "18:11",
    views: "38K",
    category: "internal-audit",
    blurbEn: "Governance, risk and internal audit — the modern Three Lines of Defense model.",
    blurbAr: "الحوكمة وإدارة المخاطر والمراجعة الداخلية — نموذج خطوط الدفاع الثلاثة الحديث.",
  },
  {
    id: "9HNTbsn4-v4",
    title: "التدقيق الداخلي | مبدأ بسيط ينقل جودة تقاريرك لمستوى احترافي",
    channel: "Yazan Makdah | يزن مقدح",
    length: "4:58",
    views: "31K",
    category: "internal-audit",
    blurbEn: "One simple principle that lifts your audit reports to a professional level.",
    blurbAr: "مبدأ بسيط واحد يرفع جودة تقارير المراجعة إلى مستوى احترافي.",
  },
  // ---- محاسبة أونلاين ----
  {
    id: "VwzNNozTP7A",
    title: "البساطة والسهولة في تلقي المعايير المحاسبية الدولية IFRS",
    channel: "محاسبة أونلاين",
    length: "25:35",
    views: "152K",
    category: "ifrs",
    blurbEn: "A gentle 25-minute orientation to the whole IFRS framework.",
    blurbAr: "تمهيد لطيف في 25 دقيقة لإطار المعايير الدولية كاملًا.",
  },
  {
    id: "jBkuxDM-Akw",
    title: "المراجعة الداخلية: ما هي الرقابة الداخلية؟ وما مهام المراجع الداخلي؟",
    channel: "محاسبة أونلاين",
    length: "31:42",
    views: "53K",
    category: "internal-audit",
    blurbEn: "Internal control and the internal auditor's mandate, calmly explained.",
    blurbAr: "الرقابة الداخلية ومهام المراجع الداخلي بشرح هادئ.",
  },
  // ---- Dr Ahmed Abdellakher ----
  {
    id: "RW8Tqd6SZ8A",
    title: "IFRS — المحاضرة الأولى في المعايير الدولية",
    channel: "Dr Ahmed Abdellakher",
    length: "2:17:34",
    views: "2.8K",
    category: "ifrs",
    blurbEn: "A university-style opening lecture on the international standards.",
    blurbAr: "محاضرة افتتاحية أكاديمية عن المعايير الدولية.",
  },
  // ---- IFRS Diploma — Abdalla Abdelnaim ----
  {
    id: "_FD3QFfiZGQ",
    title: "IFRS 15 — 2.1 — Revenue Recognition",
    channel: "IFRS Diploma — عبدالله عبدالنعيم",
    length: "9:15",
    views: "27K",
    category: "ifrs",
    blurbEn: "A focused DipIFR-style clip on revenue recognition under IFRS 15.",
    blurbAr: "مقطع مركز بنمط دبلومة IFRS عن الاعتراف بالإيراد وفق IFRS 15.",
  },
]
