/** IAS 20 — Government Grants and Disclosure of Government Assistance */

import type { Standard } from "../types"

export const IAS_20: Standard = {
  code: "IAS 20",
  title: { en: "Government Grants and Disclosure of Government Assistance", ar: "منح الحكومة والإفصاح عن المساعدات الحكومية" },
  topic: "revenue",
  effective: { en: "Effective 1 Jan 1984 · IAS 41 grants follow the same model", ar: "سارٍ من ١ يناير ١٩٨٤ · منح النشاط الزراعي تتبع النموذج ذاته" },
  blocks: [
    { kind: "h", text: { en: "Objective & definitions", ar: "الهدف والتعريفات" } },
    {
      kind: "p",
      text: {
        en: "Government GRANTS are assistance in cash or kind for a consideration that is significantly less than the value given — in exchange for the entity agreeing to operate under certain conditions (e.g. employ X people for Y years). Government ASSISTANCE is broader (technical advice, free guarantees) and disclosed, not recognised. Grants are NEVER credit-to-equity by default: IAS 20's core rule is systematic income recognition matched to the related COSTS.",
        ar: "المنح الحكومية مساعدة نقدية أو عينية مقابل يقل جوهريًا عن القيمة الممنوحة — مقابل التزام المنشأة بشروط معينة (توظيف عدد لمدة، مثلًا). والمساعدة الحكومية أوسع (مشورة فنية، ضمانات مجانية) تفصح ولا تعترف. والمنح لا تقيَّد في حقوق الملكية أصلًا: قاعدة IAS 20 الأساسية اعتراف الدخل المنتظم مقارنةً بالتكاليف ذاتها.",
      },
    },
    { kind: "h", text: { en: "Recognition — the two conditions", ar: "الاعتراف — الشرطان" } },
    {
      kind: "tree",
      root: { en: "A grant is recognised when…", ar: "يُعترف بالمنحة عند…" },
      branches: [
        {
          when: { en: "Reasonable assurance that the CONDITIONS attached will be met AND the grant will be RECEIVED (not before the terms agreed & the assurance exists)", ar: "ترجيح معقول استيفاء الشروط المرتبطة واستلام المنحة (لا قبل اتفاق الشروط وتوافر الترجيح)" },
          then: { en: "Recognise — do NOT wait for cash; a forgivable loan follows the same test", ar: "اعترف — ولا تنتظر النقد؛ والقرض القابل للإبراء يتبع الاختبار ذاته", red: true },
        },
        {
          when: { en: "Grants compensating EXPENSES ALREADY INCURRED or giving immediate financial support with no future costs", ar: "منح تعوض مصروفات تكبدت بالفعل أو دعمًا فوريًا بلا تكاليف مستقبلية" },
          then: { en: "Income IMMEDIATELY (when receivable) — no deferral", ar: "دخل فوريًا (عند الاستحقاق) — بلا تأجيل", red: true },
        },
        {
          when: { en: "Grants related to INCOME (matching specific costs like wages, energy, R&D)", ar: "منح مرتبطة بالدخل (مقابلة تكاليف بعينها: أجور، طاقة، بحث)" },
          then: { en: "Systematic income over the periods the costs are incurred", ar: "دخل منتظم عبر فترات تكبد التكاليف", red: true },
        },
        {
          when: { en: "Grants related to ASSETS (funding the purchase/construction of PPE, intangibles)", ar: "منح مرتبطة بأصول (تمويل اقتناء أو إنشاء ممتلكات وغير ملموسة)" },
          then: { en: "Two permitted presentations: DEFERRED INCOME (released over the asset's life) OR deduct from the ASSET'S CARRYING AMOUNT — both give the same P&L", ar: "عرضان جائزان: دخل مؤجل (يستنزف عبر عمر الأصل) أو خصم من القيمة الدفترية للأصل — وكلاهما يعطي الأرباح ذاتها", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Presentation of income-grants (2021 amendment tightened this): EITHER present as income on a SEPARATE line or DEDUCT from the related expense — choose a policy per grant class, apply consistently, and DISCLOSE the choice. The 'separate line' is generally preferred now because netting hides the magnitude of government support.",
        ar: "عرض منح الدخل (شدد تعديل ٢٠٢١ هذا): إما سطر دخل مستقل أو خصم من المصروف ذي الصلة — سياسة لكل فئة منح تطبق بثبات مع الإفصاح عنها. والسطر المستقل أفضل عمومًا لأن المقاصة تخفي حجم الدعم الحكومي.",
      },
    },
    {
      kind: "journal",
      title: { en: "The two asset-grant routes", ar: "مسارا منحة الأصل" },
      rows: [
        { dr: { en: "Cash / grant receivable", ar: "نقد / منحة مستحقة" }, cr: { en: "Deferred income (route A)", ar: "دخل مؤجل (المسار أ)" }, red: true },
        { dr: { en: "Deferred income (release as the asset depreciates)", ar: "دخل مؤجل (استنزاف مع الإهلاك)" }, cr: { en: "Grant income (P&L)", ar: "دخل المنحة (بالأرباح)" } },
        { dr: { en: "Cash / grant receivable", ar: "نقد / منحة مستحقة" }, cr: { en: "PPE — cost reduction (route B)", ar: "ممتلكات — خفض التكلفة (المسار ب)" }, red: true },
        { cr: { en: "Route B's effect: lower cost → lower depreciation → the grant still reaches P&L, just inside the depreciation line", ar: "أثر المسار ب: تكلفة أدنى ← إهلاك أدنى ← تصل المنحة للأرباح داخل سطر الإهلاك" } },
      ],
    },
    {
      kind: "example",
      title: { en: "Asset grant worked both ways", ar: "منحة أصل بالطريقتين" },
      lines: [
        { en: "Grant 600 for a machine costing 2,000 (10-year life, straight-line)", ar: "منحة ٦٠٠ لآلة بتكلفة ٢٬٠٠٠ (عمر ١٠ سنوات، قسط ثابت)" },
        { en: "Route A: asset 2,000 · deferred income 600 → annual depreciation 200 and grant income 60 → net P&L −140/yr", ar: "المسار أ: أصل ٢٬٠٠٠ ودخل مؤجل ٦٠٠ ← إهلاك ٢٠٠ ودخل منحة ٦٠ ← أثر صافٍ ١٤٠ سنويًا" },
        { en: "Route B: asset 1,400 → annual depreciation 140 → identical net P&L; different B/S optics", ar: "المسار ب: أصل ١٬٤٠٠ ← إهلاك ١٤٠ ← الأثر ذاته؛ وتبقى الصورة الميزانية مختلفة" },
        { en: "Depreciation method/rate for grant release = mirror the asset's; a revaluation or impairment forces a recomputed release pattern", ar: "نسبة استنزاف المنحة تعكس إهلاك الأصل؛ وإعادة التقييم أو الانخفاض تفرض إعادة حساب النمط" },
      ],
    },
    { kind: "h", text: { en: "Non-monetary grants & loans", ar: "المنح غير النقدية والقروض" } },
    {
      kind: "list",
      items: [
        { en: "Non-monetary (land, materials given free): recognise BOTH the asset and the grant at FAIR VALUE — or a nominal amount with disclosure, for unverifiable FV", ar: "غير النقدية (أرض، مواد مجانية): يعترف بالأصل والمنحة معًا بالقيمة العادلة — أو بمبلغ رمزي مع الإفصاح عند تعذر التحقق" },
        { en: "A government LOAN at BELOW-MARKET rates: IFRS 9 measures the loan at fair value; the difference (the grant element) → deferred income released to match the related borrowing costs", ar: "قرض حكومي بمعدل دون السوق: يقاس وفق IFRS 9 بالقيمة العادلة؛ والفرق (عنصر المنحة) دخل مؤجل يستنزف بما يوازي تكاليف الاقتراض" },
        { en: "A FORGIVABLE loan (repayment waived if conditions met): treat as a GOVERNMENT GRANT when there is reasonable assurance of the conditions", ar: "قرض قابل للإبراء (يسقط السداد باستيفاء الشروط): يعامل منحة حكومية عند الترجيح المعقول للاستيفاء" },
      ],
    },
    { kind: "h", text: { en: "Repayment — when conditions are breached", ar: "الرد — عند الإخلال بالشروط" } },
    {
      kind: "steps",
      items: [
        { en: "Repaying a grant related to INCOME: first reduce any UNAMORTISED deferred income; any excess → expense immediately", ar: "رد منحة مرتبطة بالدخل: يخفض أولًا الدخل المؤجل غير المستنزف؛ والزيادة مصروف فورًا" },
        { en: "Repaying a grant related to ASSETS: increase the asset's carrying amount (or reduce the deferred income) by the repayable amount", ar: "رد منحة مرتبطة بأصل: تزداد القيمة الدفترية للأصل (أو ينقص الدخل المؤجل) بمبلغ الرد" },
        { en: "The restated asset (or the increased balance) is depreciated prospectively over the remaining life — possibly triggering impairment review", ar: "يعاد إهلاك الأصل المعاد تقييمه مستقبليًا على العمر المتبقي — مع مراجعة انخفاض قيمة محتملة" },
        { en: "IAS 41's biological-asset grants: a special override — immediate income when unconditional (see the agriculture sheet)", ar: "منح الأصول الحيوية وفق IAS 41: تجاوز خاص — دخل فوري إذا كانت غير مشروطة" },
      ],
    },
    { kind: "h", text: { en: "Disclosure essentials", ar: "أساسيات الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "The accounting policy adopted (income timing, asset-grant route, income presentation choice)", ar: "السياسة المحاسبية المعتمدة (توقيت الدخل ومسار منحة الأصل وخيار عرض الدخل)" },
        { en: "The nature & extent of grants recognised + unmet conditions & contingencies attached", ar: "طبيعة المنح المعترف بها وامتدادها + الشروط والالتزامات غير المستوفاة" },
        { en: "Government ASSISTANCE that could not be reasonably valued + other forms of assistance (technical advice, guarantees) — a pure disclosure list", ar: "المساعدات التي يتعذر تقديرها قيمتها + صور الدعم الأخرى (مشورة فنية، ضمانات) — قائمة إفصاح خالصة" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "Never credit equity; never recognise before reasonable assurance; never dump an asset grant through P&L on day one (unless it compensates expenses already incurred). Those three 'nevers' answer most IAS 20 scenarios.",
        ar: "لا تقيَّد في حقوق الملكية؛ ولا اعتراف قبل الترجيح المعقول؛ ولا إسقاط منحة أصل بالأرباح في اليوم الأول (إلا أن تعوض مصروفات تكبدت). هذه الثلاثة «لا» تجيب معظم سيناريوهات IAS 20.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The 2021 amendment's exam line: the deduction-from-expense presentation is still allowed but must be a DISCLOSED policy choice applied consistently — the note is not optional anymore.",
        ar: "سطر تعديل ٢٠٢١ الامتحاني: الخصم من المصروف ما زال جائزًا لكنه خيار سياسي مفصح عنه يطبق بثبات — فلم يعد الإيضاح اختياريًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Grant vs tax rebate: an export duty drawback tied to specific sales is part of the transaction price (IFRS 15), not an IAS 20 grant.",
        ar: "التمييز بين «المنحة» و«الاسترداد الضريبي»: الاسترداد مقابل مبيعات صادرات معينة جزء من سعر المعاملة (IFRS 15) لا منحة IAS 20.",
      },
    },
  ],
}
