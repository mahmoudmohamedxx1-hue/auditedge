/** IFRS 14 — Regulatory Deferral Accounts */

import type { Standard } from "../types"

export const IFRS_14: Standard = {
  code: "IFRS 14",
  title: { en: "Regulatory Deferral Accounts", ar: "حسابات التأجيل التنظيمي" },
  topic: "specialized",
  effective: { en: "Effective 1 Jan 2016 · optional for FIRST-TIME adopters only", ar: "سارٍ من ١ يناير ٢٠١٦ · اختياري للمتبنين الأوائل فقط" },
  blocks: [
    { kind: "h", text: { en: "Objective — rate regulation's bridge", ar: "الهدف — جسر التنظيم التعريفي" } },
    {
      kind: "p",
      text: {
        en: "Rate-regulated utilities (electricity, water, gas) often keep REGULATORY DEFERRAL ACCOUNTS — timing differences between the regulator's allowed rate-setting (what tariffs recover) and IFRS accounting. IFRS 14 exists ONLY for first-time adopters already using deferral-account balances under previous GAAP: it lets them KEEP presenting those balances inside IFRS statements until the IASB's rate-regulation project lands.",
        ar: "تُبقي المرافق الخاضعة للتنظيم التعريفي (كهرباء، مياه، غاز) حسابات تأجيل تنظيمية — فروق توقيت بين ما يقرره المنظم في التعريفة وما تقوله محاسبة IFRS. وُضع IFRS 14 للمتبنين الأوائل الذين لديهم أرصدة تأجيل بموجب النظام السابق: يتيح لهم الإبقاء على عرضها داخل قوائم IFRS حتى يكتمل مشروع التنظيم التعريفي.",
      },
    },
    {
      kind: "note",
      text: {
        en: "IFRS 14 applies to NOBODY else: an entity already on IFRS cannot start using it — the deferral balances must be unrecognised on transition unless IFRS 14 is elected.",
        ar: "لا ينطبق IFRS 14 على غير المتبنين الأوائل أصلًا: فمن هو على IFRS سابقًا لا يجوز له استخدامه — والأرصدة تستبعد عند الانتقال ما لم يُنتخب المعيار.",
      },
    },
    { kind: "h", text: { en: "The election & what it covers", ar: "الانتخاب وما يغطيه" } },
    {
      kind: "tree",
      root: { en: "A first-time adopter with regulatory deferral balances", ar: "متبنٍ أول بأرصدة تأجيل تنظيمي" },
      branches: [
        {
          when: { en: "Elects IFRS 14 (a package — all balances in scope, no cherry-picking per scheme)", ar: "ينتخب IFRS 14 (حزمة واحدة لكل الأرصدة داخل النطاق لا انتقاء لكل نظام)" },
          then: { en: "Present the balances as separate REGULATORY DEFERRAL ACCOUNT DEBIT (an asset) or CREDIT (a liability) line items", ar: "يعرض الأرصدة سطورًا مستقلة: حساب تأجيل مدين (أصل) أو دائن (التزام)", red: true },
        },
        {
          when: { en: "Does NOT elect", ar: "لا ينتخب" },
          then: { en: "Derecognise all deferral balances on transition (the IFRS 1 default world) — with the normal IFRS 1 reconciliation storytelling", ar: "يستبعد كل الأرصدة عند الانتقال (عالم IFRS 1 الافتراضي) مع سرد التسويات المعتاد", red: true },
        },
        {
          when: { en: "Rate-regulated activities but balances arise under a FOREIGN GAAP framework the entity did not use for primary statements? Only deferral balances from the entity's own previous GAAP qualify", ar: "أنشطة منظمة لكن الأرصدة نشأت بإطار أجنبي لم تستخدمه المنشأة في قوائمها؟ لا يصلح إلا ما نشأ بنظامها السابق" },
          then: { en: "The scope is entity-specific", ar: "النطاق خاص بالمنشأة" },
        },
      ],
    },
    { kind: "h", text: { en: "Recognition & measurement mechanics", ar: "ميكانيكا الاعتراف والقياس" } },
    {
      kind: "formula",
      title: { en: "The deferral engine", ar: "محرك التأجيل" },
      lines: [
        { en: "A regulatory deferral account DEBIT = costs the regulator allows the entity to recover from FUTURE customers (a deferred expense tariff-wise)", ar: "حساب التأجيل المدين = تكاليف يجيز المنظم استردادها من عملاء المستقبل (مصروف مؤجل تعريفيًا)" },
        { en: "A regulatory deferral account CREDIT = amounts the entity must REPAY / credit to customers through future tariffs (a liability-like balance)", ar: "حساب التأجيل الدائن = مبالغ ترد للعملاء عبر تعريفات مستقبلية (رصيد شبه التزام)" },
        { en: "Movements: amounts ADDED/DEDUCTED per the rate scheme + a RETURN on the balances where the scheme allows (an interest-like accretion) + FX of balances", ar: "الحركات: إضافات وخصومات وفق نظام التعريفة + عائد على الأرصدة حيث يجيز النظام + فروق عملة" },
        { en: "The recovery/settlement will flow through TARIFFS — not through cash calls on customers individually", ar: "الاسترداد يجري عبر التعريفات لا بمطالبات نقدية لكل عميل" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The two-sided entries", ar: "قيود الاتجاهين" },
      rows: [
        { dr: { en: "Regulatory deferral account debit (cost deferred to future tariffs)", ar: "حساب تأجيل مدين (تكلفة مؤجلة لتعريفات المستقبل)" }, cr: { en: "P&L (the cost's timing reversal)", ar: "الأرباح (عكس توقيت التكلفة)" }, red: true },
        { dr: { en: "P&L (revenue timing adjustments)", ar: "الأرباح (تسويات توقيت الإيراد)" }, cr: { en: "Regulatory deferral account credit", ar: "حساب تأجيل دائن" }, red: true },
        { dr: { en: "Regulatory deferral account debit (accretion per scheme)", ar: "حساب تأجيل مدين (استحقاق وفق النظام)" }, cr: { en: "Finance income / regulatory return", ar: "إيراد تمويلي / عائد تنظيمي" } },
      ],
    },
    { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Separate line items on the SFP (asset vs liability) — never commingled with receivables or payables; NO OFFSET between debit and credit balances", ar: "سطور مستقلة في الميزانية — ولا خلط بالمدينين والدائنين؛ ولا مقاصة بين المدين والدائن" },
        { en: "The FX & return amounts and the movements in each balance go through a reconciliation note; the tax effects follow IFRS 12-style deferred-tax thinking (a specific IFRS 14 / IAS 12 interaction)", ar: "فروق العملة والعائد والحركات في تسوية إيضاحية؛ والآثار الضريبية بمنطق IAS 12" },
        { en: "Disclose: the rate-regulation scheme's nature, the balances by scheme, the movements' P&L geography, the expected recovery/settlement timing", ar: "أفصح: طبيعة نظام التنظيم، والأرصدة به، وجغرافيا حركات الأرباح، وتوقيت الاسترداد المتوقع" },
        { en: "The IFRS 1 first-time-adoption reconciliations present the pre/post-election worlds", ar: "تسويات التبني الأول تعرض العالمين قبل الانتخاب وبعده" },
      ],
    },
    {
      kind: "example",
      title: { en: "A deferred-coal story", ar: "قصة فحم مؤجل" },
      lines: [
        { en: "A power utility expensed emergency fuel costs 100 this year; the regulator allows recovery via next year's tariff", ar: "مرافق كهرباء حملت وقود طوارئ ١٠٠ هذا العام؛ ويسمح المنظم باستردادها بتعريفة العام المقبل" },
        { en: "Electing IFRS 14: Dr regulatory deferral account debit 100 · Cr fuel expense 100 → this year's P&L does not carry the shock", ar: "بانتخاب IFRS 14: مدين حساب تأجيل ١٠٠ / دائن مصروف وقود ١٠٠ ← لا تحمل أرباح العام الصدمة" },
        { en: "Next year the tariff bills it out: Dr revenue recognition per tariff · Cr the deferral account — the balance unwinds", ar: "وفي العام المقبل تفوترها التعريفة: يفك الرصيد عبر الإيراد" },
        { en: "Non-electing entity: the 100 hits this year's P&L and stays there — the choice is a presentation-bridge, not an economics change", ar: "غير المنتخب: تضرب الـ١٠٠ أرباح هذا العام وتبقى — فالاختيار جسر عرض لا تغيير اقتصاد" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "One sentence wins the marks: 'IFRS 14 is a first-time-adopter-only bridge permitting continuation of rate-regulation deferral balances with separate presentation' — the examiner's twist is usually a NON-first-time adopter trying to use it (impossible).",
        ar: "جملة واحدة تحسم الدرجات: «IFRS 14 جسر للمتبنين الأوائل فقط يجيز إبقاء أرصدة التأجيل التنظيمي بعرض مستقل» — والحيلة المعتادة متبنٍ غير أول يحاول استخدامه (مستحيل).",
      },
    },
    {
      kind: "tip",
      text: {
        en: "Watch the project: the IASB's Better Communication / rate-regulation work may replace IFRS 14 with a full model — if a question mentions new 'regulatory asset/liability' vocabulary, it is pointing beyond IFRS 14.",
        ar: "راقب المشروع: قد يستبدل عمل المجلس لاحقًا IFRS 14 بنموذج كامل — فإذا ذكر السؤال مفردات «أصول والتزامات تنظيمية» جديدة فهو يشير إلى ما وراءه.",
      },
    },
  ],
}
