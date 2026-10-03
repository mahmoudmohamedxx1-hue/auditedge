/** IFRS 11 — Joint Arrangements */

import type { Standard } from "../types"

export const IFRS_11: Standard = {
  code: "IFRS 11",
  title: { en: "Joint Arrangements", ar: "الترتيبات المشتركة" },
  topic: "groups",
  effective: { en: "Effective 1 Jan 2013 · replaced IAS 31 & SIC-13", ar: "سارٍ من ١ يناير ٢٠١٣ · حل محل IAS 31 وSIC-13" },
  replaces: { en: "Replaced IAS 31 interests in joint ventures & jointly controlled entities", ar: "حل محل IAS 31 (الحصص في المشروعات المشتركة والكيانات المشترك في التحكم بها)" },
  blocks: [
    { kind: "h", text: { en: "Objective — from three forms to two types", ar: "الهدف — من ثلاثة أشكال إلى نوعين" } },
    {
      kind: "p",
      text: {
        en: "IAS 31's 'jointly controlled operations / assets / entities' menu let venturers pick proportionate consolidation for jointly controlled entities — IFRS 11 killed that choice. Now there are exactly TWO types: JOINT OPERATIONS (recognise your share of assets, liabilities, revenue and expenses) and JOINT VENTURES (a single method: the EQUITY METHOD). Structure follows rights & obligations, not legal form.",
        ar: "سمحت قائمة IAS 31 للشركاء بالتجميع التناسبي للكيانات المشترك في التحكم بها — فقتل IFRS 11 ذلك الخيار. الآن نوعان فقط: العمليات المشتركة (اعترف بحصتك من الأصول والالتزامات والإيرادات والمصروفات) والمشروعات المشتركة (طريقة واحدة: طريقة الحصة). فالحقوق والالتزامات تحدد التصنيف لا الشكل القانوني.",
      },
    },
    { kind: "h", text: { en: "Joint control — the precondition", ar: "السيطرة المشتركة — الشرط المسبق" } },
    {
      kind: "tree",
      root: { en: "Does JOINT CONTROL exist?", ar: "هل توجد سيطرة مشتركة؟" },
      branches: [
        {
          when: { en: "A CONTRACTUAL arrangement exists (shared decision-making is legally enforceable)", ar: "ترتيب تعاقدي قائم (تقاسم القرار ملزم قانونًا)" },
          then: { en: "Gate 1 — without a contract there is NO joint arrangement at all (just a plain investment)", ar: "البوابة الأولى — بلا عقد لا يوجد ترتيب مشترك أصلًا", red: true },
        },
        {
          when: { en: "Decisions over RELEVANT ACTIVITIES require UNANIMOUS CONSENT of the parties controlling the arrangement together", ar: "قرارات الأنشطة المؤثرة تتطلب إجماع المتحكمين معًا" },
          then: { en: "Gate 2 — joint control; a single party's veto over every decision is NOT joint control (that's control or protection)", ar: "البوابة الثانية — سيطرة مشتركة؛ وفيتو طرف واحد على كل قرار ليس سيطرة مشتركة", red: true },
        },
        {
          when: { en: "Only TWO parties and the arrangement's continuation requires both (an impasse = no single control)", ar: "طرفان فقط واستمرار الترتيب يتطلبهما (التعادل يمنع انفراد أحدهما)" },
          then: { en: "Classic joint-control fact pattern", ar: "نمط وقائع السيطرة المشتركة الكلاسيكي" },
        },
        {
          when: { en: "Assuming joint control exists, CLASSIFY: the parties' RIGHTS to the assets & OBLIGATIONS for the liabilities decide the type", ar: "بافتراض قيام السيطرة المشتركة صنّف: حقوق الأطراف في الأصول والتزاماتهم عن الالتزامات تحدد النوع" },
          then: { en: "→ Joint operation vs joint venture (the test below)", ar: "← عملية مشتركة أم مشروع مشترك (الاختبار أدناه)" },
        },
      ],
    },
    { kind: "h", text: { en: "The type test", ar: "اختبار النوع" } },
    {
      kind: "tree",
      root: { en: "Structure + legal form + contractual terms + other facts & circumstances", ar: "البنية + الشكل القانوني + شروط العقد + حقائق وظروف أخرى" },
      branches: [
        {
          when: { en: "The parties have RIGHTS TO THE ASSETS and OBLIGATIONS FOR THE LIABILITIES (or assets held in an undivided share — a jointly owned oil pipeline with each venturer liable for its own shipping fees)", ar: "للأطراف حقوق في الأصول والتزامات عن الالتزامات (أو حصص غير مجزأة — أنبوب نفط مشترك كل شريك مسؤول عن رسوم شحنه)" },
          then: { en: "JOINT OPERATION — whether or not a separate vehicle exists", ar: "عملية مشتركة — بوجود كيان منفصل أو بغيره", red: true },
        },
        {
          when: { en: "A SEPARATE VEHICLE separates the parties from the vehicle (they have rights to NET ASSETS only) — the presumption for vehicles where legal form grants the vehicle first claim", ar: "كيان منفصل يعزل الأطراف عنه (حقوقهم في صافي الأصول فقط) — وهو الافتراض حين يمنح الشكل القانوني الكيانَ المطالبةَ الأولى" },
          then: { en: "Presume JOINT VENTURE — unless the contract or other facts rebut it (a party's primary obligation for specific liabilities)", ar: "افترض مشروعًا مشتركًا — إلا إذا نقضه العقد أو الوقائع (التزام شريك أولي بديون بعينها)", red: true },
        },
        {
          when: { en: "Contractual terms give one party the assets' benefits but another the liabilities (an SPE with explicit first-loss guarantees)", ar: "شروط العقد تمنح طرفًا منافع الأصول وآخر الالتزامات (كيان ذو غرض خاص بضمانات خسارة أولى)" },
          then: { en: "Rebut & re-analyse — a mix can even be a joint operation for one party and a joint venture for ANOTHER (asymmetric classification)", ar: "انقض و حلل من جديد — بل قد يكون المشروع عمليةً لطرف ومشروعًا لآخر (تصنيف غير متماثل)", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Accounting — the two paths", ar: "المحاسبة — المساران" } },
    {
      kind: "journal",
      title: { en: "Joint operation vs joint venture", ar: "عملية مشتركة مقابل مشروع مشترك" },
      rows: [
        { dr: { en: "JO: your share of the arrangement's assets (e.g. 40% of the aircraft)", ar: "عملية مشتركة: حصتك من أصول الترتيب (٤٠٪ من الطائرة مثلًا)" }, cr: { en: "Your share of the arrangement's liabilities", ar: "حصتك من التزاماته" }, red: true },
        { dr: { en: "JO: your share of revenue & expenses line-by-line in YOUR statements", ar: "عملية مشتركة: حصتك من الإيرادات والمصروفات سطرًا بسطر في قوائمك" }, cr: { en: "(sale of your full output output + your cost shares)", ar: "(بيع كامل نصيبك من الإنتاج + حصص تكلفتك)" } },
        { dr: { en: "JV: investment (cost at inception)", ar: "مشروع مشترك: استثمار (بالتكلفة عند النشأة)" }, cr: { en: "Cash", ar: "نقد" }, red: true },
        { dr: { en: "JV: share of profit or loss", ar: "مشروع مشترك: نصيبك من الربح أو الخسارة" }, cr: { en: "Investment (carrying increase)", ar: "الاستثمار (زيادة الدفترية)" } },
        { cr: { en: "JV: the EQUITY METHOD ONLY — no proportionate consolidation, no cost-only choice, no FVTPL for a venturer with joint control", ar: "مشروع مشترك: طريقة الحصة وحدها — لا تجميع تناسبي ولا تكلفة فقط ولا عادلة لشريك متحكم مشتركًا" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Transactions with the arrangement", ar: "المعاملات مع الترتيب" } },
    {
      kind: "list",
      items: [
        { en: "UPSTREAM/DOWNSTREAM with a joint venture: reduce the gain to your SHARE of the unrealised profit (IAS 28.28-29 rules mirrored); losses are evidence of impairment", ar: "معاملة صاعدة/هابطة مع مشروع مشترك: خفّض الربح بمقدار حصتك من الربح غير المحقق؛ والخسائر دليل انخفاض قيمة" },
        { en: "Transactions with a joint OPERATION: account per the arrangement's shared-assets logic — your own share of your own sale comes back through the asset lines", ar: "معاملة مع عملية مشتركة: تعالج بمنطق الأصول المشتركة — فحصتك من بيعك يعود عبر سطور الأصول" },
        { en: "The IAS 28.28 word is ONE-THIRD SHARE of the group's logic — the same 'extent of retained interest' reduction as IFRS 10.28 for subsidiaries", ar: "منطق «مدى الحصة المحتفظ بها» ذاته المعروف من معاملات المجموعة" },
      ],
    },
    { kind: "h", text: { en: "Transition & party-type differences", ar: "الانتقال واختلاف أنواع الأطراف" } },
    {
      kind: "p",
      text: {
        en: "A party WITHOUT joint control participates by its IFRS classification: an investor with significant influence in a joint venture → IAS 28 equity method; a passive stake → IFRS 9. An operator managing a joint operation for a fee books the fee under IFRS 15. IFRS 1 first-time adopters could restate IAS 31 interests fully or apply the deemed-cost routes — exam questions rarely travel there.",
        ar: "الطرف بلا سيطرة مشتركة يشارك بتصنيفه: ذو التأثير الجوهري في مشروع مشترك ← طريقة الحصة (IAS 28)؛ والحصة السلبية ← IFRS 9. ومدير يشغل عملية مشتركة بأجر يحجزه IFRS 15. ومن يتبنى لأول مرة أعاد ترتيب مصالح IAS 31 كاملة أو سلك مسارات التكلفة المفترضة — ونادرًا ما تقصده الأسئلة.",
      },
    },
    { kind: "h", text: { en: "Disclosures (with IFRS 12)", ar: "الإفصاحات (مع IFRS 12)" } },
    {
      kind: "list",
      items: [
        { en: "The nature, extent & financial effects of interests in joint arrangements: carrying of interests, share of profits/losses, commitments & contingencies", ar: "طبيعة الحصص وامتدادها وآثارها المالية: القيم الدفترية ونصيب الأرباح والتعهدات والالتزامات المحتملة" },
        { en: "For joint ventures: the summarised financial information (assets, liabilities, income, expenses) aggregated across all JVs", ar: "للمشتركة: معلومات مالية موجزة (أصول، التزامات، إيراد، مصروف) مجمعة عبرها جميعًا" },
        { en: "Contingent liabilities & capital commitments relating to your share of joint ventures; the restriction hierarchy", ar: "الالتزامات المحتملة وتعهدات رأس المال المتعلقة بحصتك؛ وتدرج القيود" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Say the type in the exam's FIRST sentence and give the reason (structure/legal form/contract/facts) — the classification reason is worth more than the accounting mechanics that follow.",
        ar: "قل النوع في الجملة الأولى واذكر السبب (بنية/شكل قانوني/عقد/وقائع) — فسبب التصنيف يساوي أكثر من ميكانيكا المحاسبة التي تليه.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "IAS 31's proportionate consolidation is the trap answer — any '40% of the sub's assets' answer for a joint VENTURE is wrong under IFRS 11; that accounting belongs to joint OPERATIONS now.",
        ar: "التجميع التناسبي لـIAS 31 هو الجواب الفخ — فأي إجابة «٤٠٪ من أصول الكيان» عن مشروع مشترك خاطئة وفق IFRS 11؛ فتلك المحاسبة للعمليات المشتركة اليوم.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Do not confuse 'joint control' with 'control': the first is unanimous consent over relevant activities; the second is a single party's power — IFRS 10's analysis does not govern joint arrangements.",
        ar: "لا تخلط بين «السيطرة المشتركة» و«السيطرة»: الأولى إجماع على القرارات المؤثرة؛ والثانية قدرة طرف واحد — وتحليل IFRS 10 لا يحكم الترتيبات المشتركة.",
      },
    },
  ],
}
