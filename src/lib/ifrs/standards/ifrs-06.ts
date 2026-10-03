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
        ar: "IFRS 6 صمام مقصود: يحسّن (بقدر محدود) محاسبة نفقات الاستكشاف والتقييم بانتهاء مشروع الأنشطة الاستخراجية. ويجيز الاستمرار بالسياسات القائمة لكنه يطلب تحسينات محدودة: اختبار انخفاض مخصص لأصول الاستكشاف وبعض الإفصاح. لا شيء مهيب — وكل الممتحن في الحدود وآلية الانخفاض.",
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
    { kind: "h", text: { en: "Measurement & the one recognised limit", ar: "القياس والحد الوحيد المعترف به" } },
    {
      kind: "p",
      text: {
        en: "At recognition: COST. After recognition: IAS 16/38 rules would normally apply — but only if they do not conflict with IFRS 6's impairment machinery. That machinery is the standard's heart: an E&E asset is tested for impairment BEFORE the IAS 16/38 depreciation/amortisation starts, and the impairment test runs on an E&E ASSET or a CGU that is NOT LARGER THAN A SEGMENT. The nature of the test: IAS 36 — with 'exploration and evaluation assets' as a separate CGU candidate.",
        ar: "عند الاعتراف: التكلفة. وبعده: طبقت قواعد IAS 16/38 ما لم تتعارض مع آلية الانخفاض — وهي قلب المعيار: يختبر أصل الاستكشاف قبل بدء الإهلاك/الاستنفاد، وعلى مستوى أصل استكشاف أو وحدة توليد نقد لا أكبر من قطاع. وطبيعة الاختبار: IAS 36 — مع اعتبار أصول الاستكشاف وحدة مستقلة.",
      },
    },
    {
      kind: "tree",
      title: { en: "The IFRS 6 impairment flow", ar: "مسار انخفاض IFRS 6" },
      root: { en: "An E&E asset — when and how is it tested?", ar: "أصل استكشاف — متى وكيف يختبر؟" },
      branches: [
        {
          when: { en: "The technical-feasibility & commercial-viability tests are not yet complete (the E&E stage)", ar: "لم تكتمل اختبارات الجدوى الفنية والتجارية (مرحلة الاستكشاف)" },
          then: { en: "NO depreciation; impairment when the license expires, the area's data leads to abandonment, or a decision to discontinue", ar: "لا إهلاك؛ وانخفاض عند انقضاء الترخيص أو القرار بالتوقف أو تفضيل التخلي", red: true },
        },
        {
          when: { en: "Feasibility & viability PROVEN → reclassify to development (IAS 16)", ar: "ثبتت الجدوى ← إعادة تبويب للتطوير (IAS 16)" },
          then: { en: "Assess impairment FIRST (life in IFRS 6 ends), then begin depreciation under the new home", ar: "اختبر الانخفاض أولًا (تنتهي حياة IFRS 6) ثم يبدأ الإهلاك في الموطن الجديد", red: true },
        },
        {
          when: { en: "Impairment recognised", ar: "يعترف بانخفاض" },
          then: { en: "IAS 36's reversal rules apply afterwards (the E&E-specific test is a one-way door; reversals follow normal IAS 36)", ar: "تسري قواعد رد IAS 36 لاحقًا (فاختبار الاستكشاف باب باتجاه واحد)" },
        },
      ],
    },
    {
      kind: "journal",
      title: { en: "The E&E entries", ar: "قيود الاستكشاف" },
      rows: [
        { dr: { en: "E&E asset (capitalised drilling costs, by policy)", ar: "أصل استكشاف (تكاليف حفر مرسملة بالسياسة)" }, cr: { en: "Payables / cash", ar: "دائنون/نقد" }, red: true },
        { dr: { en: "E&E expense (where the policy expenses)", ar: "مصروف استكشاف (حيث تجيز السياسة)" }, cr: { en: "Payables / cash", ar: "دائنون/نقد" } },
        { dr: { en: "Impairment loss — abandoned licence area", ar: "خسارة انخفاض — منطقة ترخيص متخلى عنها" }, cr: { en: "E&E asset", ar: "أصل الاستكشاف" }, red: true },
        { dr: { en: "Mine development asset (IAS 16 — on reclassification)", ar: "أصل تطوير منجم (IAS 16 — عند إعادة التبويب)" }, cr: { en: "E&E asset (carrying)", ar: "أصل الاستكشاف (الدفترية)" } },
      ],
    },
    { kind: "h", text: { en: "Disclosure", ar: "الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "The amounts of E&E assets (tangible and intangible splits) and the accounting policy for E&E expenditure", ar: "مقادير أصول الاستكشاف (ملموسة وغير ملموسة) وسياسة الإنفاق" },
        { en: "Assets, liabilities, income & expenses arising from E&E activities as separate line items or notes", ar: "الأصول والالتزامات والدخل والمصروف الناشئة عن أنشطة الاستكشاف بنود مستقلة" },
        { en: "The level at which the impairment test's CGU is set (not larger than a segment) + how that relates to IFRS 8's segment structure", ar: "مستوى وحدة اختبار الانخفاض (لا أكبر من قطاع) وعلاقتها ببنية IFRS 8" },
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
      kind: "note",
      text: {
        en: "The standard has been 'interim' since 2005 and still is: the extractives project never completed — do not expect its withdrawal in a question anytime soon.",
        ar: "المعيار «مؤقت» منذ ٢٠٠٥ وما زال: مشروع الأنشطة الاستخراجية لم يكتمل — لا تنتظر إلغاءه قريبًا في سؤال.",
      },
    },
  ],
}
