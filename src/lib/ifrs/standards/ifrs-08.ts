/** IFRS 8 — Operating Segments */

import type { Standard } from "../types"

export const IFRS_8: Standard = {
  code: "IFRS 8",
  title: { en: "Operating Segments", ar: "القطاعات التشغيلية" },
  topic: "specialized",
  effective: { en: "Effective 1 Jan 2009 · the management approach", ar: "سارٍ من ١ يناير ٢٠٠٩ · منهج الإدارة" },
  blocks: [
    { kind: "h", text: { en: "Objective — through the management's eyes", ar: "الهدف — بعيني الإدارة" } },
    {
      kind: "p",
      text: {
        en: "IFRS 8 discloses information through the lens management uses to run the business — the MANAGEMENT APPROACH: segment through the same eyes the CHIEF OPERATING DECISION MAKER (CODM) uses to allocate resources and judge performance. The disclosure's point: users see the business the way insiders see it — even when that cuts across legal entities or geographical borders.",
        ar: "يفصح IFRS 8 عبر العدسة التي تدير بها الإدارة العمل — منهج الإدارة: القطاع بعيني صانع القرار التشغيلي الرئيسي (CODM) الذي يوزع الموارد ويقيم الأداء. والغاية: أن يرى المستخدمون العمل كما يراه الداخليون — ولو خالف الكيانات القانونية أو الحدود الجغرافية.",
      },
    },
    { kind: "h", text: { en: "Operating segment — the two-limb definition", ar: "القطاع التشغيلي — التعريف ذو الشعبتين" } },
    {
      kind: "tree",
      root: { en: "Is this an operating segment?", ar: "أهذا قطاع تشغيلي؟" },
      branches: [
        {
          when: { en: "Engages in business activities that may earn revenue & incur expenses (including interfacing with other segments)", ar: "يمارس أنشطة قد تولد إيرادًا وتحمل مصروفًا (بما فيه التعامل مع قطاعات أخرى)" },
          then: { en: "Limb 1 — a component with its own economics", ar: "الشعبة الأولى — مكون باقتصاده الخاص" },
        },
        {
          when: { en: "The CODM regularly reviews its operating results to assess performance & allocate resources", ar: "يراجع CODM نتائجه بانتظام لتقييم الأداء وتوزيع الموارد" },
          then: { en: "Limb 2 — the review test; both limbs → OPERATING SEGMENT", ar: "الشعبة الثانية — اختبار المراجعة؛ وبهما معًا ← قطاع تشغيلي", red: true },
        },
        {
          when: { en: "Start-up operations with no revenue yet — reviewed by the CODM? They qualify; entities not yet reviewed (a new acquisition not yet in CODM packs) do not", ar: "عمليات تأسيس لم تدر إيرادًا بعد — يراجعها CODM؟ تجتاز؛ وما لم يراجع (اقتناء جديد) فلا" },
          then: { en: "The review discipline decides, not the revenue line", ar: "انضباط المراجعة يحسم لا سطر الإيراد", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Aggregation — the five-similarity test", ar: "التجميع — اختبار التماثل الخمسي" } },
    {
      kind: "steps",
      items: [
        { en: "Two or more segments may be aggregated into ONE operating segment only when ALL five hold: similar economic characteristics · nature of the products · nature of the production processes · type of customer for the products · distribution methods", ar: "يجوز دمج قطاعين فأكثر عند تحقق الخمسة معًا: خصائص اقتصادية مماثلة · طبيعة المنتجات · طبيعة عمليات الإنتاج · نوع العميل · طرق التوزيع" },
        { en: "Aggregation is BEFORE the quantitative thresholds — the combined segment then passes or fails as one", ar: "التجميع قبل العتبات الكمية — فالقطاع المدمج يجتاز أو يفشل كوحدة" },
        { en: "Segments that fail the thresholds are still REPORTABLE if the CODM uses them, or if combining is needed for a 10%-coverage story", ar: "ما يفشل العتبات قد يظل معروضًا إن استخدمه CODM أو اقتضى التغطية ذلك" },
      ],
    },
    { kind: "h", text: { en: "The 10% thresholds & the 75% rule", ar: "عتبات الـ١٠٪ وقاعدة الـ٧٥٪" } },
    {
      kind: "formula",
      title: { en: "Reportable-segment screens", ar: "مغاليل القطاعات المعروضة" },
      lines: [
        { en: "A segment is reportable when ANY of: revenue ≥ 10% of total (incl. intersegment) · profit or loss ≥ 10% of the larger of combined profit/combined loss · assets ≥ 10% of total segment assets", ar: "يعرض القطاع عند تحقق أي من: إيراده ≥ ١٠٪ من الإجمالي (ومنه الداخلي) · ربحه/خسارته ≥ ١٠٪ من الأكبر من مجموع الربح/مجموع الخسارة · أصوله ≥ ١٠٪ من إجمالي الأصول" },
        { en: "75% RULE: if the external revenue of reportable segments < 75% of consolidated external revenue → identify MORE segments until 75% is reached", ar: "قاعدة ٧٥٪: إذا كان إيراد القطاعات المعروضة الخارجي أقل من ٧٥٪ من الإيراد الخارجي المجمع ← أضف قطاعات حتى بلوغها" },
        { en: "Practical cap: usually ≤ 10 reportable segments unless a longer list still serves", ar: "سقف عملي: عادة ≤ ١٠ قطاعات معروضة ما لم يفد الإطالة" },
        { en: "A segment falling below the thresholds may STAY reportable if management judges it still material", ar: "قد يبقى قطاع هبط تحت العتبة معروضًا إن رأت الإدارة جوهريته" },
      ],
    },
    { kind: "h", text: { en: "The measurement freedom — measure what the CODM measures", ar: "حرية القياس — قِس ما يقيسه صانع القرار" } },
    {
      kind: "p",
      text: {
        en: "Report the segment's revenue, profit/loss, assets, liabilities and other items AS THE CODM SEES THEM — even non-IFRS measures (before-tax internal numbers, allocated corporate costs, a pension surplus netting the CODM tracks). If internal numbers include non-IFRS measurement, disclose the basis of ANY reconciliation to the IFRS-consolidated totals. The measure is NOT forced into IFRS shape — the reconciliation bridges it.",
        ar: "اعرض إيراد القطاع وربحه وأصوله والتزاماته كما يراها CODM — ولو بمقاييس غير IFRS (أرقام داخلية قبل الضريبة، تحميلات مؤسسية، معاشات صافية). وإذا تضمنت أرقام داخلية قياسًا خارج المعايير فأفصح عن أسس أي تسوية مع الإجماليات المجمعة. فالقياس لا يُكره على قالب IFRS — بل تجسوره التسوية.",
      },
    },
    { kind: "h", text: { en: "Required disclosures", ar: "الإفصاحات المطلوبة" } },
    {
      kind: "list",
      items: [
        { en: "General: the factors used to identify segments (products, geography, regulation) + the measurement basis of segment P/L", ar: "عام: عوامل تحديد القطاعات (منتجات، جغرافيا، تنظيم) وأساس قياس الربح" },
        { en: "For EACH reportable segment: revenue (external + intersegment), the profit/loss measure, assets, liabilities, non-cash expenses, interest revenue/expense, depreciation & amortisation, material segment items the CODM regularly reviews, income tax", ar: "لكل قطاع معروض: الإيراد (خارجي وداخلي)، ومقياس الربح، والأصول والالتزامات، وغير النقدي، والفوائد، والإهلاك والاستنفاد، والبنود الجوهرية التي يراجعها CODM، والضريبة" },
        { en: "Reconciliations: segment revenue/profit/assets/liabilities to the consolidated IFRS totals", ar: "التسويات: إلى الإجماليات المجمعة وفق IFRS" },
        { en: "ENTITY-WIDE (even with one segment): products & services revenue · geography (revenue & non-current assets by country) · dependence on any single customer ≥ 10% of revenue", ar: "على مستوى المنشأة (ولو بقطاع واحد): إيراد المنتجات والخدمات · الجغرافيا (الإيراد والأصول غير المتداولة بالدول) · الاعتماد على عميل واحد ≥ ١٠٪ من الإيراد" },
      ],
    },
    {
      kind: "example",
      title: { en: "A threshold walk", ar: "جولة على العتبات" },
      lines: [
        { en: "Segments (external revenue / total revenue / profit): A 300 / 500 / 40 · B 150 / 160 / 20 · C 40 / 45 / −30 (loss) · D 10 / 12 / 5", ar: "قطاعات (إيراد خارجي/إجمالي/ربح): أ ٣٠٠/٥٠٠/٤٠ · ب ١٥٠/١٦٠/٢٠ · ج ٤٠/٤٥/٣٠− خسارة · د ١٠/١٢/٥" },
        { en: "Total external revenue = 500 → 10% = 50: A (300) ✓, B (150) ✓, C (40) ✗ on revenue", ar: "الإيراد الخارجي ٥٠٠ ← عتبة ٥٠: أ ✓ ب ✓ ج ✗ بالإيراد" },
        { en: "Profit screen: |40| + |20| + |−30| + |5| = 95 → 10% = 9.5: C's loss 30 ≥ 9.5 ✓ → C is REPORTABLE via the loss test", ar: "اختبار الربح: مجموع القيم المطلقة ٩٥ ← ٩٫٥: خسارة ج ٣٠ ≥ ٩٫٥ ← ج معروض عبر اختبار الخسارة" },
        { en: "75% rule: reportable external revenue = 300 + 150 + 40 = 490 ≥ 375 ✓ — no further segments needed; D stays internal", ar: "قاعدة ٧٥٪: معروض خارجي ٤٩٠ ≥ ٣٧٥ ✓ — ولا حاجة لمزيد؛ ويبقى د داخليًا" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The loss-test asymmetry: a loss-making segment is screened against the larger of combined profits and combined LOSSES (absolute) — candidates who use the profit total alone miss the threshold; write both sums, then the larger.",
        ar: "عدم تماثل اختبار الخسارة: يقاس القطاع الخاسر بالأكبر من مجموعي الأرباح والخسائر (بالقيمة المطلقة) — ومن يستخدم مجموع الأرباح وحده تخطاه العتبة؛ اكتب المجموعين ثم خذ الأكبر.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The management approach is the answer to every 'why?' in IFRS 8: the segment is what the CODM reviews — the legal entity, the subsidiary, the division labels are irrelevant. Say 'CODM' in every paragraph.",
        ar: "منهج الإدارة جواب كل «لماذا؟» في IFRS 8: القطاع ما يراجعه CODM — والكيان القانوني والتابعة والقطاعات الإدارية كلها لا تعني شيئًا. اذكر CODM في كل فقرة.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Entity-wide disclosures apply EVEN WITH a single reportable segment — forgetting them is the classic practical slip.",
        ar: "إفصاحات «على مستوى المنشأة» تلزم ولو كان للكيان قطاع واحد فقط — ونسيانها أشهر زلة عملية.",
      },
    },
  ],
}
