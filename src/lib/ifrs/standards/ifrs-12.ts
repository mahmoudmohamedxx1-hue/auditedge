/** IFRS 12 — Disclosure of Interests in Other Entities */

import type { Standard } from "../types"

export const IFRS_12: Standard = {
  code: "IFRS 12",
  title: { en: "Disclosure of Interests in Other Entities", ar: "الإفصاح عن الحصص في كيانات أخرى" },
  topic: "groups",
  effective: { en: "Effective 1 Jan 2013 · the companion disclosure standard", ar: "سارٍ من ١ يناير ٢٠١٣ · معيار الإفصاح المرافق" },
  blocks: [
    { kind: "h", text: { en: "Objective & the wide net", ar: "الهدف والشبكة الواسعة" } },
    {
      kind: "p",
      text: {
        en: "IFRS 12 helps users evaluate the NATURE of, and RISKS associated with, interests in other entities — subsidiaries, joint arrangements, associates, structured entities not consolidated — and the effects of those interests on the financial statements. Its net deliberately catches NON-CONTROLLING interests, management service contracts and SPONSOR relationships with structured entities (the off-balance-sheet world).",
        ar: "يعين IFRS 12 المستخدمين على تقدير طبيعة الحصص في كيانات أخرى ومخاطرها — تابعات وترتيبات مشتركة وزميلات وكيانات مهيكلة غير مجمعة — وآثارها في القوائم. وشبكته تلتقط عمدًا الحصص غير المسيطرة وعقود خدمات الإدارة وعلاقات الراعي مع الكيانات المهيكلة (عالم خارج الميزانية).",
      },
    },
    { kind: "h", text: { en: "The three disclosure shelves", ar: "رفوف الإفصاح الثلاثة" } },
    {
      kind: "tree",
      root: { en: "What must appear in the notes?", ar: "ماذا يظهر في الإيضاحات؟" },
      branches: [
        {
          when: { en: "SIGNIFICANT JUDGEMENTS & assumptions — control conclusions (de facto control!), joint control / significant-influence assessments, classification of a partner as agent vs principal", ar: "الأحكام والافتراضات الجوهرية — خلاصات السيطرة (الفعلية!)، والسيطرة المشتركة، والتأثير الجوهري، وتصنيف الشريك وكيلا أو أصيلا" },
          then: { en: "Shelf 1: tell the user where judgement decided the reporting entity's BOUNDARIES", ar: "الرف الأول: بيّن أين حسم الحكمُ حدودَ الكيان المفصح", red: true },
        },
        {
          when: { en: "SUBSIDIARIES: the name, country, % ownership & voting; NCI's share of profit/total comprehensive income; NCI's share of cumulative P&L; liquidity restrictions on transferring cash OUT of the subsidiary; the nature of any non-voting equity", ar: "التابعات: الاسم والبلد والنسبة؛ ونصيب الحصة غير المسيطرة من الأرباح والدخل الشامل والمتراكم؛ وقيود السيولة على تحويل النقد خارجها" },
          then: { en: "Shelf 2: the parent tells the group's story — including the non-controlling slice", ar: "الرف الثاني: تحكي الأم قصة المجموعة بما فيها الشريحة غير المسيطرة", red: true },
        },
        {
          when: { en: "INTERESTS in joint arrangements & associates: interest, share of P&L, carrying; commitments & contingencies; the JV summarised financial information table (aggregated, condensed SFP+SPL)", ar: "الحصص في الترتيبات المشتركة والزميلات: الحصة ونصيبها والقيمة الدفترية؛ والتعهدات والمحتملات؛ والجدول الموجز للمشتركة" },
          then: { en: "Shelf 2b: the equity-method world made visible", ar: "الرف الثاني-ب: إظهار عالم طريقة الحصة", red: true },
        },
        {
          when: { en: "STRUCTURED ENTITIES (SEs): the nature & purpose; how the entity is involved (sponsor, servicer, liquidity provider); the carrying of assets & liabilities from that involvement; the MAXIMUM loss exposure", ar: "الكيانات المهيكلة: الطبيعة والغرض؛ وطبيعة التورط (راعٍ، مقدم خدمات، مضخم سيولة)؛ وقيم الأصول والالتزامات الناشئة؛ وأقصى انكشاف للخسارة" },
          then: { en: "Shelf 3: the off-balance-sheet risks — sponsorship of unconsolidated SEs, support provided WITHOUT obligation ('stevie-stevie' silent support), the policy for it", ar: "الرف الثالث: مخاطر خارج الميزانية — رعاية المهيكلة غير المجمعة والدعم غير الملزم وسياسته", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "What counts as a structured entity?", ar: "ما يعتبر كيانًا مهكليًا؟" } },
    {
      kind: "list",
      items: [
        { en: "An entity so designed that voting rights are NOT the dominant factor in deciding control — SPEs, securitisation vehicles, some funds", ar: "كيان مصمم بحيث لا تكون حقوق التصويت العامل الحاسم — كيانات ذات غرض خاص، وسائل التوريق، وبعض الصناديق" },
        { en: "Unconsolidated: the reporting entity neither controls nor consolidates them — but may sponsor, service or support them (reputation risk!)", ar: "غير مجمعة: لا يسيطر عليها المفصح ولا يجمعها — لكنه قد يرعاها أو يخدمها أو يدعمها (مخاطر سمعة!)" },
        { en: "Disclose interests originated BEFORE the reporting period but still exposed; transactions during the period (transfers to/from the SE)", ar: "أفصح عن الحصص الناشئة سابقًا والباقي انكشافها؛ والمعاملات خلال الفترة (تحويلات من وإلى الكيان المهكل)" },
      ],
    },
    { kind: "h", text: { en: "Aggregation & materiality discipline", ar: "انضباط التجميع والأهمية" } },
    {
      kind: "p",
      text: {
        en: "Disclosures may be aggregated when the interests' nature is similar — but never at the cost of losing material information (a subsidiary under exchange-control restrictions must stand apart from an unrestricted one). Where a required disclosure is impossible (say, the summarised JV data), say so and explain. And the 'management approach' never waters down IFRS 12: unlike IFRS 8 segments, these disclosures are entity-focused, not CODM-focused.",
        ar: "يجوز التجميع عند تماثل طبيعة الحصص — لكن ليس بثمن فقد معلومة جوهرية (تابعة تحت قيود رقابية على الصرف تتميز عن السالكة). وعند استحالة إفصاح مطلوب (كدوال المشتركة الموجزة) فقِل ذلك واشرح. ولا يخفف «منهج الإدارة» من IFRS 12: فهذه الإفصاحات كيانية لا تخص صانع القرار كما في IFRS 8.",
      },
    },
    {
      kind: "example",
      title: { en: "A mini disclosure set", ar: "مجموعة إفصاح مصغرة" },
      lines: [
        { en: "Judgement: 'the Group concluded it controls S Ltd with 42% of votes because remaining holders are widely dispersed (no shareholder holds > 5%)'", ar: "حكم: «خلصت المجموعة إلى سيطرتها على S بنسبة ٤٢٪ لتشتت بقية الحائزين (لا يملك أحد أكثر من ٥٪)»" },
        { en: "Subsidiary: 'NCI's share of profit 4.2m · dividends paid to NCI 1.8m · cash 12m sits in S under Egyptian exchange restrictions'", ar: "تابعة: «نصيب الحصة من الأرباح ٤٫٢ مليون · توزيعاتها ١٫٨ · ونقد ١٢ مليون محتجز لدى S بقيود صرف مصرية»" },
        { en: "JV: 'carrying 9.8m · share of profit 1.1m · aggregated JV table: assets 60m / liabilities 40m / revenue 30m'", ar: "مشتركة: «القيمة ٩٫٨ مليون · النصيب ١٫١ · وجدول مجمّع: أصول ٦٠ / التزامات ٤٠ / إيراد ٣٠»" },
        { en: "SE: 'the Group sponsors an unconsolidated securitisation vehicle; maximum exposure 5m + a discretionary liquidity line of 10m (provided without contractual obligation)'", ar: "مهكلي: «ترعى المجموعة وسيلة توريق غير مجمعة؛ أقصى انكشاف ٥ مليون وخط سيولة تقديري ١٠ مليون بلا التزام تعاقدي»" },
      ],
    },
    { kind: "h", text: { en: "When there is nothing to disclose", ar: "حين لا يوجد ما يفصح عنه" } },
    {
      kind: "list",
      items: [
        { en: "No interests in other entities at all → state that fact", ar: "لا حصص في كيانات أخرى ← اذكر الواقعة" },
        { en: "No undue restrictions on group transfers → say so; users read the absence positively", ar: "لا قيود مجححة على تحويلات المجموعة ← قلها؛ فالمستخدمون يقرؤون غيابها إيجابيًا" },
        { en: "No NCI in any subsidiary → still disclose the group structure basics", ar: "لا حصة غير مسيطرة ← أفصح عن أساسات هيكل المجموعة على أي حال" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The disclosure arithmetic", ar: "حسابيات الإفصاح" },
      lines: [
        { en: "NCI's profit share = subsidiary profit × NCI % — disclosed separately from dividends paid to them", ar: "نصيب الحصة من الأرباح = ربح التابعة × نسبتها — ويفصح منفصلًا عن توزيعاتها" },
        { en: "Aggregate JV table = Σ (assets, liabilities, revenue, P&L) across ALL equity-accounted JVs", ar: "الجدول المجمع = مجموع (الأصول والالتزامات والإيراد والأرباح) عبر كل المشتركة" },
        { en: "Maximum SE exposure = carrying of involvement + discretionary support lines + guarantees given", ar: "أقصى انكشاف مهكلي = قيمة التورط + خطوط الدعم التقديرية + الضمانات الممنوحة" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "IFRS 12 answers 'what could bite the group BEYOND the group?' — sponsor support, restricted cash, dispersed-vote control: every IFRS 12 scenario is a risk-visibility story, not a measurement story.",
        ar: "يجيب IFRS 12: «ما الذي قد يعض المجموعة خارجها؟» — دعم الرعاية، والنقد المقيد، والسيطرة بأصوات مشتتة: فكل سيناريو IFRS 12 قصة ظهور مخاطر لا قصة قياس.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The condensed JV disclosure (aggregated assets/liabilities/revenue/P&L of all JVs) is the single most-forgotten IFRS 12 table — write 'AGGREGATED' in your answer plan.",
        ar: "الإفصاح الموجز للمشتركة (أصول والتزامات وإيراد وأرباح مجمعة) أشهر جدول ينسى في IFRS 12 — اكتب «مجمّع» في خطة إجابتك.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Support provided WITHOUT a contractual obligation is a disclosure in its own right: the entity's silent involvement (reputation) is disclosed even with no legal commitment.",
        ar: "الإفصاح عن الدعم «غير الملزم» مطلب مستقل: التورط السلبي (السمعة) يفصح عنه حتى دون التزام قانوني.",
      },
    },
  ],
}
