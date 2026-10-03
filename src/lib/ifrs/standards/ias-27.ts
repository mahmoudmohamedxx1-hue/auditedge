/** IAS 27 — Separate Financial Statements */

import type { Standard } from "../types"

export const IAS_27: Standard = {
  code: "IAS 27",
  title: { en: "Separate Financial Statements", ar: "القوائم المالية المنفصلة" },
  topic: "groups",
  effective: { en: "Effective 1 Jan 2013 (revised for IFRS 10/11/12)", ar: "سارٍ من ١ يناير ٢٠١٣ (معدل مع IFRS 10/11/12)" },
  blocks: [
    { kind: "h", text: { en: "Objective & the rebranding", ar: "الهدف وإعادة التسمية" } },
    {
      kind: "p",
      text: {
        en: "The 2011 revision renamed IAS 27: the CONSOLIDATION rules moved to IFRS 10, and what remains is the standard for SEPARATE financial statements — the parent's own-entity statements (or an investor's statements) in which investments in subsidiaries, joint ventures and associates are measured by ONE chosen method. Consolidated + separate statements are NOT the same document; an entity presenting both must make the choice below for the separate set.",
        ar: "أعاد تعديل ٢٠١١ تسمية IAS 27: انتقلت قواعد التجميع إلى IFRS 10، وبقي معيار القوائم المنفصلة — قوائم المنشأة الذاتية للأم (أو المستثمر) يقاس فيها الاستثمار في التابعات والمشتركة والزميلات بطريقة واحدة منتقاة. والقوائم المجمعة والمنفصلة ليستا وثيقة واحدة؛ ومن يعرضهما معًا ينتقي للمنفصلة مما يلي.",
      },
    },
    { kind: "h", text: { en: "The measurement menu in separate statements", ar: "قائمة القياس في المنفصلة" } },
    {
      kind: "tree",
      root: { en: "Investments in subsidiaries, JVs & associates in the SEPARATE statements", ar: "الاستثمارات في التابعات والمشتركة والزميلات في المنفصلة" },
      branches: [
        {
          when: { en: "COST — the historical default (and the IFRS 1-friendly one)", ar: "التكلفة — الافتراضي التاريخي" },
          then: { en: "Carry at cost; dividends from the investee → P&L as income (the classic parent-only view)", ar: "تحمل بالتكلفة؛ وتوزيعات المستثمَر فيه دخل بالأرباح", red: true },
        },
        {
          when: { en: "EQUITY METHOD (the 2014 amendment's addition, consistent with IAS 28)", ar: "طريقة الحصة (إضافة تعديل ٢٠١٤ اتساقًا مع IAS 28)" },
          then: { en: "Apply IAS 28's machinery in the separate statements — allowed only by the 2014 amendment's alignment", ar: "طبق آلية IAS 28 في المنفصلة — أجازه تعديل ٢٠١٤", red: true },
        },
        {
          when: { en: "FAIR VALUE under IFRS 9 — FVTPL for all; the FVOCI election only for equity instruments that are not subsidiaries... (for JVs/associates, FVTPL is the fair-value route)", ar: "القيمة العادلة وفق IFRS 9 — FVTPL (وخيار FVOCI للملكية غير التابعة)" },
          then: { en: "A single election for EACH category of investment (subs vs JVs vs associates), applied consistently per class", ar: "انتخاب واحد لكل فئة استثمار يطبق بثبات", red: true },
        },
        {
          when: { en: "Joint OPERATIONS in separate statements", ar: "العمليات المشتركة في المنفصلة" },
          then: { en: "NOT this menu — account for the share of assets/liabilities directly (IFRS 11's joint-operation logic follows you into any set of statements)", ar: "ليست من هذه القائمة — تعالج الحصة من الأصول والالتزامات مباشرة (منطق IFRS 11 يتبعك إلى أي قوائم)", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "When separate statements exist at all", ar: "متى توجد القوائم المنفصلة أصلًا" } },
    {
      kind: "list",
      items: [
        { en: "A parent must present CONSOLIDATED statements (IFRS 10) — but may ALSO present separate statements (common when regulators, tax or lenders want the parent-entity view)", ar: "على الأم تقديم قوائم مجمعة (IFRS 10) — ويجوز أيضًا تقديم منفصلة (شائع عندما تريد الجهات الرقابية أو الضرائب أو المقرضون منظور الأم وحدها)" },
        { en: "An entity EXEMPT from presenting consolidated statements (its own parent's consolidated statements are available publicly, and its owners agreed... — the IFRS 10.4 exemption conditions) still presents separate statements", ar: "المعفاة من تقديم المجمعة (قوائم أمها متاحة للعموم واستوفت شروط إعفاء IFRS 10.4) تقدم المنفصلة" },
        { en: "The ultimate or intermediate-parent exemption: an intermediate parent of a group whose ULTIMATE (or any intermediate) parent produces available-to-public IFRS consolidated statements may skip consolidation — the separate statements apply", ar: "إعفاء الأم الوسيطة: متى أنتجت الأم النهائية أو الوسيطة قوائم مجمعة متاحة للعموم جاز للأم الوسيطة تجاوز التجميع — فتطبق المنفصلة" },
        { en: "Local law may DEMAND separate statements even when IFRS 10 would not — IAS 27 governs their content", ar: "قد يفرض القانون المحلي منفصلة حتى حيث لا يوجبها IFRS 10 — وIAS 27 يحكم محتواها" },
      ],
    },
    { kind: "h", text: { en: "Investment entities in the separate world", ar: "كيانات الاستثمار في العالم المنفصل" } },
    {
      kind: "p",
      text: {
        en: "A parent that is an investment entity does not consolidate its investment-subsidiaries (IFRS 10's FVTPL exception), and in its separate statements it measures each subsidiary at FAIR VALUE through profit or loss — the separate-set answer mirrors the exemption. A parent exempting a subsidiary because it will be sold (held-for-sale by a parent measuring subsidiaries at FVTPL) follows the same route.",
        ar: "الأم الكيان الاستثماري لا تجمع تابعاتها الاستثمارية (استثناء IFRS 10)؛ وفي منفصلتها تقيس كل تابعة بالعادلة عبر الأرباح — فجواب المنفصلة يعكس الإعفاء. وكذلك الأم المعفاة عن تابعة لقبيل بيعها.",
      },
    },
    {
      kind: "journal",
      title: { en: "Separate statements entries (cost route)", ar: "قيود المنفصلة (مسار التكلفة)" },
      rows: [
        { dr: { en: "Investment in subsidiary (cost)", ar: "استثمار في تابعة (التكلفة)" }, cr: { en: "Cash / shares issued", ar: "نقد/أسهم مصدرة" }, red: true },
        { dr: { en: "Cash (dividend received from the sub)", ar: "نقد (توزيعات مقبوضة من التابعة)" }, cr: { en: "Dividend income (P&L — no share of profits!)", ar: "إيراد توزيعات (بالأرباح — لا نصيب من الأرباح!)" }, red: true },
        { cr: { en: "Equity-method route instead: share of the sub's post-acquisition profit carries the investment up; dividends reduce it (IAS 28 machinery)", ar: "مسار طريقة الحصة بدلًا: يرفع النصيبُ الاستثمار وتخفضه التوزيعات (آلية IAS 28)" } },
      ],
    },
    { kind: "h", text: { en: "Disclosures", ar: "الإفصاحات" } },
    {
      kind: "list",
      items: [
        { en: "The accounting policy chosen for each category of investments (cost / equity / FV) in the separate statements", ar: "السياسة المنتقاة لكل فئة استثمار (تكلفة/حصة/عادلة) في المنفصلة" },
        { en: "The list of subsidiaries, JVs & associates with names and the % ownership/voting — plus the carrying of each and the dividend income recognised", ar: "قائمة التابعات والمشتركة والزميلات بأسمائها ونسب الملكية والتصويت — وقيمة كل استثمار والإيراد المعترف به" },
        { en: "IFRS 12 applies alongside for the interests' risk story", ar: "يطبق IFRS 12 جنبًا لجنب لقصة مخاطر الحصص" },
        { en: "If a subsidiary is measured at FVTPL in the separate statements (investment-entity parent), the fair-value category & level joins the notes", ar: "إن قيست تابعة بالعادلة في المنفصل (أم استثمارية) انضم المستوى وفئة العادلة للإيضاحات" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The exam trap: dividend income in separate statements vs share-of-profit in equity-method statements — the candidate who books 'dividend income 400' under the EQUITY METHOD answer loses the whole mark; under the equity method, dividends REDUCE the investment's carrying.",
        ar: "الفخ الامتحاني: إيراد التوزيعات في المنفصلة مقابل نصيب الربح بطريقة الحصة — فمن يثبت «إيراد توزيعات ٤٠٠» في جواب طريقة الحصة يخسر العلامة؛ فالتوزيعات هناك تخفض القيمة الدفترية للاستثمار.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Presenting separate statements never REPLACES the consolidated set — a parent with subsidiaries presents consolidated (unless exempt) and MAY add the separate view; saying 'we chose separate instead' is an automatic fail line.",
        ar: "تقديم المنفصلة لا يعوض عن المجمعة — فالأم ذات التابعات تقدم المجمعة (إلا إعفاءً) ويجوز أن تضيف المنظور المنفصل؛ وقول «اخترنا المنفصلة بدلًا منها» سطر رسوب تلقائي.",
      },
    },
    {
      kind: "note",
      text: {
        en: "One choice per CATEGORY: cost for subsidiaries and equity method for associates can coexist — but you cannot mix methods within one category.",
        ar: "خيار واحد لكل فئة: يمكن اختيار التكلفة للتابعات وطريقة الحصة للزميلات معًا — لكن لا يجوز خلط الطرق داخل الفئة الواحدة.",
      },
    },
  ],
}
