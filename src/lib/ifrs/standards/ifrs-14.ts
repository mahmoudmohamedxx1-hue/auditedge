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
      kind: "p",
      text: {
        en: "Why a bridge was needed at all: IFRS contains NO general model for rate regulation — no standard tells a utility how to account for the regulator's promise that today's unrecovered cost will be recovered from tomorrow's tariffs. Previous GAAPs (especially US-style regulatory accounting) recognised exactly that promise as deferral balances. Without IFRS 14, a first-time adopter would have to strip every deferral balance out on day one, potentially gutting its equity with a one-off removal of regulatory assets it genuinely expects to recover. The standard freezes that cliff-edge while the IASB thinks.",
        ar: "لماذا احتيج جسر أصلًا؟ لا يضم IFRS نموذجًا عامًا للتنظيم التعريفي — فلا معيار يقول للمرافق كيف تحاسب وعد المنظم باسترداد تكلفة اليوم من تعريفات الغد. والأنظمة السابقة (وبخاصة المحاسبة التنظيمية الأمريكية) اعترفت بذلك الوعد تحديدًا كأرصدة تأجيل. وبدون IFRS 14 كان على المتبني الأول تجريد كل رصيد تأجيل يوم الانتقال، وقد تُجوَّف حقوق ملكيته بإزالة أحادية لأصول تنظيمية يتوقع استردادها حقًا. فجمّد المعيار تلك الحافة بينما يفكر المجلس.",
      },
    },
    {
      kind: "p",
      text: {
        en: "The standard's own framing is modest: it explicitly does NOT establish whether regulatory deferral balances meet the IFRS definitions of an asset or a liability — it simply permits their CONTINUATION in a way that makes the transition to IFRS less disruptive. Every paragraph of IFRS 14 reads as a temporary accommodation, and the examiner expects candidates to say so: the accounting is a preservation of previous-GAAP timing, not an IFRS recognition judgement.",
        ar: "صياغة المعيار نفسها متواضعة: فهو لا يحسم أصلًا هل تستوفي أرصدة التأجيل التنظيمي تعريفات IFRS للأصل والالتزام — بل يجيز استمرارها فحسب بطريقة تجعل الانتقال إلى IFRS أقل عنفًا. وكل فقرة في IFRS 14 تقرأ تخفيفًا مؤقتًا، والمصحح يتوقع من المرشح قول ذلك: فالمحاسبة حفظٌ لتوقيت النظام السابق لا حكمُ اعترافٍ وفق IFRS.",
      },
    },
    {
      kind: "note",
      text: {
        en: "IFRS 14 applies to NOBODY else: an entity already on IFRS cannot start using it — the deferral balances must be unrecognised on transition unless IFRS 14 is elected.",
        ar: "لا ينطبق IFRS 14 على غير المتبنين الأوائل أصلًا: فمن هو على IFRS سابقًا لا يجوز له استخدامه — والأرصدة تستبعد عند الانتقال ما لم يُنتخب المعيار.",
      },
    },
    { kind: "h", text: { en: "Rate regulation — the economics in the background", ar: "التنظيم التعريفي — الاقتصاد في الخلفية" } },
    {
      kind: "p",
      text: {
        en: "DEFINED-RATE regulation is the standard's working context: a regulator sets the PRICE the entity may charge (a tariff), typically by reference to allowed costs plus a permitted return on a rate base — the basket of assets the regulator deems recoverable. The tariff formula runs on REGULATORY accounting (what the regulator allows), while the IFRS statements run on transaction accounting (what happened economically). The two clocks rarely agree in a single year: a fuel-price shock recovered over three tariffs, a weather cost deferred to the next cycle, an efficiency gain clawed back from customers — each is a timing difference parked in a deferral balance.",
        ar: "التنظيم بالتعريفة المحددة هو سياق المعيار العامل: منظم يحدد السعر الذي يجوز للمنشأة تحصيله (تعريفة)، غالبًا بالإحالة إلى التكاليف المسموح بها زائد عائد مسموح به على قاعدة تعريفية — سلة الأصول التي يرى المنظم استردادها. وتعمل معادلة التعريفة بالمحاسبة التنظيمية (ما يجيزه المنظم)، بينما تعمل قوائم IFRS بمحاسبة المعاملات (ما وقع اقتصاديًا). والساعتان نادرًا ما تتفقان في سنة واحدة: صدمة وقود تُسترد عبر ثلاث تعريفات، وتكلفة مناخية تؤجل للدورة التالية، ومكسب كفاءة يرد للعملاء — كلٌّ فرق توقيت يُركن في رصيد تأجيل.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "The rate base: assets the regulator allows a return ON — wider, narrower or simply different from the IFRS carrying amounts", ar: "القاعدة التعريفية: أصول يجيز المنظم عائدًا عليها — أوسع أو أضيق أو مختلفة ببساطة عن الدفتريات وفق IFRS" },
        { en: "The allowed rate: the tariff per unit or the revenue cap the entity may bill in a period", ar: "التعريفة المسموحة: سعر الوحدة أو سقف الإيراد الذي يجوز تحريره في الفترة" },
        { en: "The regulatory accounting the rate-setter uses: a rulebook of its own, with deferrals the IFRS books would never create", ar: "المحاسبة التنظيمية التي يستخدمها واضع التعريفة: قواعده الخاصة، وبها تأجيلات لن تنشئها دفاتر IFRS أبدًا" },
        { en: "The recovery mechanism: balances unwind through FUTURE TARIFFS — every customer pays a share, no customer is invoiced individually", ar: "آلية الاسترداد: تفك الأرصدة عبر تعريفات المستقبل — فكل عميل يدفع نصيبه ولا يفوتر لأحد على انفراد" },
      ],
    },
    { kind: "h", text: { en: "Scope — who may elect, and what balances ride along", ar: "النطاق — من ينتخب وأي أرصدة تركب" } },
    {
      kind: "p",
      text: {
        en: "The gateway test has three limbs, all required: (1) the entity is a FIRST-TIME ADOPTER under IFRS 1; (2) its activities are subject to RATE REGULATION as defined (defined rates set by a regulator, with the entity's revenues capped or directed by them); and (3) the deferral balances arose under the entity's OWN previous GAAP framework — the very GAAP it used for its last previous-GAAP statements. Balances borrowed from another jurisdiction's rulebook, or created by management outside a rate scheme, do not qualify. The election is made once, with the IFRS 1 transition, and it is a PACKAGE: every qualifying balance comes along — no cherry-picking the debits and dropping the credits.",
        ar: "لبوابة الاختبار ثلاث شعب لا بد منها جميعًا: (١) أن يكون الكيان متبنيًا أول بموجب IFRS 1؛ (٢) أن تخضع أنشطته لتنظيم تعريفي كما هو معرف (تعريفات محددة يقرها منظم تسقف إيرادات المنشأة أو توجهها)؛ (٣) أن تكون أرصدة التأجيل نشأت بإطار المنشأة السابق ذاته — النظام الذي أعدت به قوائمها الأخيرة قبله. فالأرصدة المستعارة من قواعد نطاق آخر أو المبتدعة بإدارةٍ خارج نظام تعريفي لا تؤهل. ويُجرى الانتخاب مرة واحدة مع انتقال IFRS 1، وهو حزمة واحدة: كل رصيد مؤهل يركب — لا انتقاء للمدين وإسقاط الدائن.",
      },
    },
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
          then: { en: "The scope is entity-specific", ar: "النطاق خاص بالمنشأة", red: true },
        },
        {
          when: { en: "An entity ALREADY reporting under IFRS (not a first-time adopter) with regulatory timing differences", ar: "كيان يقدم تقاريره بالفعل وفق IFRS (ليس متبنيًا أول) وله فروق توقيت تنظيمية" },
          then: { en: "OUT OF SCOPE — IFRS 14 is closed; the balances stay out of the IFRS statements", ar: "خارج النطاق — فـIFRS 14 مغلق؛ وتبقى الأرصدة خارج قوائم IFRS", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "The deferral balances — debit and credit anatomy", ar: "أرصدة التأجيل — تشريح المدين والدائن" } },
    {
      kind: "p",
      text: {
        en: "A regulatory deferral account DEBIT balance represents costs the entity has borne (or revenues forgone) that the rate scheme allows it to recover from FUTURE customers — economically an imposed timing difference where the regulator, not the market, sets the payback schedule. A regulatory deferral account CREDIT balance is the mirror: amounts the entity has taken (or savings it made) that the scheme requires it to give back through lower future tariffs. Neither balance is an account receivable or payable to any identifiable customer — the counterparty is the FUTURE TARIFF itself, which is precisely why IFRS never accepted them as ordinary assets and liabilities.",
        ar: "رصيد التأجيل المدين يمثل تكاليف تحملتها المنشأة (أو إيرادات ضحّت بها) يجيز نظام التعريفة استردادها من عملاء المستقبل — اقتصاديًا فرق توقيت مفروض يحدد المنظم لا السوق جدول وفائه. ورصيد التأجيل الدائن مرآته: مبالغ حصلت عليها المنشأة (أو وفورات حققتها) يوجب النظام ردها عبر خفض تعريفات المستقبل. وليس أي الرصيدين حسابًا مستحقًا أو دائنًا لعميل بعينه — فالطرف المقابل هو التعريفة المستقبلية ذاتها، ولهذا بالضبط لم يقبلها IFRS أبدًا أصولًا والتزامات عادية.",
      },
    },
    {
      kind: "tree",
      root: { en: "Debit or credit — what does the scheme do to the difference?", ar: "مدين أم دائن — ماذا يفعل النظام بالفرق؟" },
      branches: [
        {
          when: { en: "The entity bore a cost NOW and the tariff recovers it LATER (deferred fuel, storm restoration, under-recovered base costs)", ar: "تحملت المنشأة تكلفة الآن وتستردها التعريفة لاحقًا (وقود مؤجل، إصلاح عواصف، تكاليف أساسية غير مستردة)" },
          then: { en: "REGULATORY DEFERRAL ACCOUNT DEBIT — an asset-side balance growing now, unwinding through future bills", ar: "حساب تأجيل مدين — رصيد في جانب الأصول ينمو الآن ويفك عبر فوترة المستقبل", red: true },
        },
        {
          when: { en: "The entity collected MORE now than the scheme ultimately allows (an interim over-collection, a cost saving that flows back)", ar: "حصلت المنشأة الآن أكثر مما يجيزه النظام في النهاية (تحصيل زائد مؤقت، وفر يعود للعملاء)" },
          then: { en: "REGULATORY DEFERRAL ACCOUNT CREDIT — a liability-side balance to be returned through lower tariffs", ar: "حساب تأجيل دائن — رصيد في جانب الالتزامات يرد عبر تعريفات أدنى", red: true },
        },
        {
          when: { en: "The scheme's difference never reverses (an abandoned disallowance the regulator simply wiped)", ar: "فرق النظام لا ينعكس أبدًا (رفض نهائي محاه المنظم ببساطة)" },
          then: { en: "Not a deferral balance at all — a permanent difference charged where it belongs", ar: "ليس رصيد تأجيل أصلًا — بل فرق دائم يحمل حيث يقع", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "Recognition & measurement mechanics", ar: "ميكانيكا الاعتراف والقياس" } },
    {
      kind: "steps",
      items: [
        { en: "At transition (IFRS 1 date): carry the qualifying deferral balances forward at the amounts the previous-GAAP rate scheme produced — no fair-value reset, no fresh measurement", ar: "عند الانتقال (تاريخ IFRS 1): تُرحَّل الأرصدة المؤهلة بالمقادير التي أنتجها النظام السابق — لا إعادة تسعير بالعادلة ولا قياس جديد" },
        { en: "Each period after: add and deduct movements ONLY as the rate scheme's own mechanics require — the scheme is the measurement engine", ar: "كل فترة بعدها: تضاف وتخصم الحركات كما تقتضي آليات نظام التعريفة ذاته — فالنظام هو محرك القياس" },
        { en: "Accrete a RETURN where the scheme provides one (an allowed return ON deferral balances — like interest accumulating on the balance)", ar: "يستحق عائد حيث يجيزه النظام (عائد مسموح على أرصدة التأجيل — كفائدة تتراكم على الرصيد)" },
        { en: "Restate for HYPERINFLATION (IAS 29) and translate FX of balances of foreign operations per the scheme's own rules where IFRS 14 defers to them", ar: "تعاد الصياغة للتضخم الجامح (IAS 29) وتترجم فروق عملة أرصدة العمليات الأجنبية وفق قواعد النظام حيث يحيلها IFRS 14 إليه" },
        { en: "When the scheme finally recovers or refunds through tariffs, the balance unwinds THROUGH P&L as the timing difference reverses", ar: "حين تسترد التعريفة أو ترد أخيرًا، يفك الرصيد عبر الأرباح بانعكاس فرق التوقيت" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The deferral engine", ar: "محرك التأجيل" },
      lines: [
        { en: "A regulatory deferral account DEBIT = costs the regulator allows the entity to recover from FUTURE customers (a deferred expense tariff-wise)", ar: "حساب التأجيل المدين = تكاليف يجيز المنظم استردادها من عملاء المستقبل (مصروف مؤجل تعريفيًا)" },
        { en: "A regulatory deferral account CREDIT = amounts the entity must REPAY / credit to customers through future tariffs (a liability-like balance)", ar: "حساب التأجيل الدائن = مبالغ ترد للعملاء عبر تعريفات مستقبلية (رصيد شبه التزام)" },
        { en: "Movements: amounts ADDED/DEDUCTED per the rate scheme + a RETURN on the balances where the scheme allows (an interest-like accretion) + FX of balances", ar: "الحركات: إضافات وخصومات وفق نظام التعريفة + عائد على الأرصدة حيث يجيز النظام + فروق عملة" },
        { en: "The recovery/settlement will flow through TARIFFS — not through cash calls on customers individually", ar: "الاسترداد يجري عبر التعريفات لا بمطالبات نقدية لكل عميل" },
        { en: "Deferred tax on the balances follows IAS 12 mechanically — the tax base of a deferral balance is the amount the tax authority will allow/charge as it unwinds", ar: "الضريبة المؤجلة على الأرصدة تسير ميكانيكيًا وفق IAS 12 — والقاعدة الضريبية لرصيد التأجيل ما سيجيزه أو سيحمّله جهاز الضريبة عند فكه" },
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
    {
      kind: "journal",
      title: { en: "The unwind & the transition", ar: "الفك والانتقال" },
      rows: [
        { dr: { en: "P&L — revenue billed through the recovery tariff", ar: "الأرباح — إيراد مفوتر عبر تعريفة الاسترداد" }, cr: { en: "Regulatory deferral account debit (the balance unwinds as customers pay)", ar: "حساب تأجيل مدين (يفك الرصيد مع دفع العملاء)" }, red: true },
        { dr: { en: "Regulatory deferral account credit (returning an over-collection via lower tariffs)", ar: "حساب تأجيل دائن (رد تحصيل زائد عبر تعريفات أدنى)" }, cr: { en: "P&L — the revenue give-back", ar: "الأرباح — رد الإيراد" }, red: true },
        { dr: { en: "Opening equity at the IFRS 1 transition date (the non-elector's world: all balances stripped)", ar: "حقوق ملكية افتتاحية عند انتقال IFRS 1 (عالم غير المنتخب: تجريد كل الأرصدة)" }, cr: { en: "The removed regulatory deferral account debits — the reconciliation note quantifies the swing", ar: "أرصدة التأجيل المدينة المستبعدة — وملاحظة التسوية تقدر الأثر" }, red: true },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The tax dimension earns real marks: IFRS 14 requires applying IAS 12 to the deferral balances — a debit balance the tax authority will only accept as deductible when the tariff recovers it carries a deductible temporary difference NOW (a deferred tax asset, subject to the probable-profits test), while a credit balance awaiting give-back carries a taxable one. Electing IFRS 14 therefore changes not just the balance sheet's shape but its deferred-tax geometry, and the disclosure reconciles both.",
        ar: "البعد الضريبي يكسب درجات حقيقية: يوجب IFRS 14 تطبيق IAS 12 على أرصدة التأجيل — فرصيد مدين لن يقبله جهاز الضريبة خصمًا إلا عند استرداد التعريفة يحمل الآن فرقًا مؤقتًا قابلًا للخصم (أصل ضريبي مؤجل رهن اختبار الأرباح المرجحة)، ورصيد دائن ينتظر الرد يحمل فرقًا خاضعًا. فانتخاب IFRS 14 يغير إذن لا شكل الميزانية فحسب بل هندسة ضريبها المؤجلة، والتسوية الإيضاحية تجمع الطرفين.",
      },
    },
    { kind: "h", text: { en: "Presentation & disclosure", ar: "العرض والإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Separate line items on the SFP (asset vs liability) — never commingled with receivables or payables; NO OFFSET between debit and credit balances", ar: "سطور مستقلة في الميزانية — ولا خلط بالمدينين والدائنين؛ ولا مقاصة بين المدين والدائن" },
        { en: "The FX & return amounts and the movements in each balance go through a reconciliation note; the tax effects follow IFRS 12-style deferred-tax thinking (a specific IFRS 14 / IAS 12 interaction)", ar: "فروق العملة والعائد والحركات في تسوية إيضاحية؛ والآثار الضريبية بمنطق IAS 12" },
        { en: "Disclose: the rate-regulation scheme's nature, the balances by scheme, the movements' P&L geography, the expected recovery/settlement timing", ar: "أفصح: طبيعة نظام التنظيم، والأرصدة به، وجغرافيا حركات الأرباح، وتوقيت الاسترداد المتوقع" },
        { en: "The IFRS 1 first-time-adoption reconciliations present the pre/post-election worlds", ar: "تسويات التبني الأول تعرض العالمين قبل الانتخاب وبعده" },
        { en: "Current/non-current split: a deferral balance expected to unwind within twelve months of the reporting date is current — the rest non-current, mirroring IAS 1's logic", ar: "التقسيم المتداول/غير المتداول: رصيد يُتوقع فكه خلال اثني عشر شهرًا من تاريخ التقرير متداول — والباقي غير متداول بمنطق IAS 1" },
        { en: "The SOCIE shows the balances' movements outside profit or loss where applicable (e.g. the return recognised in finance income sits in profit; hyperinflation restatement effects in the reserve lines)", ar: "قائمة التغيرات في حقوق الملكية تعرض حركات الأرصدة خارج الأرباح حيث ينطبق (كالعائد المعترف به في الدخل التمويلي داخل الربح، وآثار إعادة عرض التضخم في سطور الاحتياطيات)" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The disclosure philosophy is comparability for a bridge: a reader who has never seen the utility's regulatory regime must be able to reconstruct the balances' life — the scheme's rules in plain words, each balance's opening and closing amounts, what moved and where it landed in P&L, and WHEN the entity expects the tariffs to unwind it all. Add the deferred-tax effects and the entity's exposure to the regulator's future rate decisions, and the note is complete.",
        ar: "فلسفة الإفصاح هي قابلية المقارنة لجسرٍ: قارئ لم يرَ نظام المنظم قط يجب أن يستطيع إعادة بناء حياة الأرصدة — قواعد النظام بكلمات مبسطة، وافتتاحي وختامي كل رصيد، وما تحرك وأين حل بالأرباح، ومتى تتوقع المنشأة أن تفك التعريفات كل شيء. وأضف الآثار الضريبية المؤجلة وتعرض المنشأة لقرارات المنظم المستقبلية، فتكتمل الملاحظة.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Interim reports (IAS 34 pairing): the deferral balances and their movements are disclosed in every complete interim set — the scheme rarely pauses for quarterly reporting, and an interim reader missing the deferral traffic would misread the season's profit. The condensed interim note carries the balances' movement since the year began and any material change in the scheme's assumptions.",
        ar: "التقارير المرحلية (اقتران IAS 34): تفصح الأرصدة وحركاتها في كل مجموعة مرحلية كاملة — فالنظام نادرًا يتوقف للإبلاغ الربعي، وقارئ مرحلي يفوته مرور التأجيل سيقرأ ربح الموسم خطأً. وتحمل الملاحظة المرحلية المختصرة حركة الأرصدة منذ بداية السنة وأي تغيير جوهري في افتراضات النظام.",
      },
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
      kind: "example",
      title: { en: "A credit balance & the tax tail", ar: "رصيد دائن وذيل ضريبي" },
      lines: [
        { en: "A water utility's mild winter cut purchased-power costs by 60; the scheme returns the saving through next winter's lower tariffs", ar: "شتاء دافئ قلص تكاليف طاقة مشتراة لشركة مياه بمقدار ٦٠؛ ويرد النظام الوفر بتعريفات أدنى شتاء المقبل" },
        { en: "Dr purchased-power expense 60 · Cr regulatory deferral account CREDIT 60 — the saving waits for the customers", ar: "مدين مصروف الطاقة ٦٠ / دائن حساب تأجيل دائن ٦٠ — فالوفر ينتظر العملاء" },
        { en: "Deferred tax at 25%: the credit balance is a TAXABLE temporary difference → DTL 15 sits beside it, softening the equity swing", ar: "ضريبة مؤجلة بـ٢٥٪: الرصيد الدائن فرق مؤقت خاضع ← التزام ضريبي مؤجل ١٥ يجلس بجواره، ملطفًا أرجحة حقوق الملكية" },
        { en: "Next winter's tariff bills 60 less: the credit unwinds to P&L revenue and the DTL unwinds with it — both clocks strike together", ar: "وتفوتر تعريفة الشتاء التالي بأقل ٦٠: يفك الدائن إلى إيراد الأرباح ويفك معه الالتزام الضريبي — تضرب الساعتان معًا" },
      ],
    },
    { kind: "h", text: { en: "The IFRS 1 election mechanics — how the choice is made", ar: "ميكانيكا انتخاب IFRS 1 — كيف يُتخذ القرار" } },
    {
      kind: "p",
      text: {
        en: "The election is made with — and travels with — the IFRS 1 transition: at the date of the opening IFRS statement of financial position, the adopter decides once whether the deferral balances ride along. Choosing means the previous-GAAP amounts carry straight into the opening balance sheet as the separate line items; refusing means they vanish into the transition adjustments and the equity reconciliation explains the hole. Once inside IFRS, the election is effectively irreversible for those balances — there is no mechanism to opt back out scheme by scheme.",
        ar: "يُجرى الانتخاب مع انتقال IFRS 1 ويرتحل معه: في تاريخ ميزانية الافتتاح يقرر المتبني مرة واحدة هل تركب أرصدة التأجيل. والاختيار يعني حمل مقادير النظام السابق مباشرة إلى الميزانية الافتتاحية سطورًا مستقلة؛ والرفض يعني اختفاءها في تسويات الانتقال وتفسير ملاحظة حقوق الملكية للفجوة. وبعد الدخول في IFRS يصير الاختيار غير قابل للفسخ فعليًا لتلك الأرصدة — فلا آلية للخروج نظامًا فنظامًا.",
      },
    },
    {
      kind: "tree",
      root: { en: "May this particular balance ride along?", ar: "أيجوز لهذا الرصيد بعينه أن يركب؟" },
      branches: [
        {
          when: { en: "Arose under the entity's own previous GAAP, from a rate scheme that sets the defined rates", ar: "نشأ بإطار المنشأة السابق ذاته، من نظام تعريفي يحدد التعريفات المسموحة" },
          then: { en: "Qualifies — part of the elected package", ar: "مؤهل — جزء من الحزمة المنتخبة", red: true },
        },
        {
          when: { en: "Created by management estimate outside a rate scheme (a self-built provision or smoothing reserve)", ar: "أنشأه تقدير الإدارة خارج نظام تعريفي (مخصص تمهيد أو احتياطي تنعيم ذاتي)" },
          then: { en: "Does NOT qualify — IFRS 14 carries rate-scheme balances only", ar: "غير مؤهل — فـIFRS 14 لا يحمل إلا أرصدة النظم التعريفية", red: true },
        },
        {
          when: { en: "The scheme's difference will never reverse (a permanent disallowance)", ar: "فرق النظام لن ينعكس أبدًا (رفض دائم)" },
          then: { en: "Not a deferral at all — expense it now, in both worlds", ar: "ليس تأجيلًا أصلًا — يحمل الآن في العالمين معًا", red: true },
        },
        {
          when: { en: "A balance from a rate scheme the regulator has since ABANDONED with no recovery mechanism left", ar: "رصيد من نظام تعريفي هجره المنظم بلا آلية استرداد متبقية" },
          then: { en: "Question its continuation — an unrecoverable deferral debit is not a deferral anymore", ar: "شكّك في استمراره — فرصيد مدين لا سبيل لاسترداده لم يعد تأجيلًا", red: true },
        },
      ],
    },
    { kind: "h", text: { en: "What the standard deliberately does NOT do", ar: "ما يمتنع المعيار عن فعله عمدًا" } },
    {
      kind: "list",
      items: [
        { en: "No recognition verdict: it does not decide whether the balances are IFRS assets or liabilities — it only permits their continuation", ar: "لا حكم اعتراف: لا يحسم هل الأرصدة أصول والتزامات وفق IFRS — بل يجيز استمرارها فحسب" },
        { en: "No new measurement model: the scheme's own mechanics stay the engine — IFRS 14 adds no fair-value layer, no impairment test of its own", ar: "لا نموذج قياس جديد: آليات النظام تبقى المحرك — فلا يضيف IFRS 14 طبقة عادلة ولا اختبار انخفاض خاصًا به" },
        { en: "No relief for NON-first-time adopters: an established IFRS reporter cannot start deferring — the standard's gate stays shut", ar: "لا تخفيف لغير المتبنين الأوائل: المقرر المعتاد على IFRS لا يشرع في التأجيل — فبوابة المعيار تظل موصدة" },
        { en: "No offset, ever: debit and credit balances of different schemes stay separate lines — a netted regulatory figure would hide both risks", ar: "لا مقاصة أبدًا: أرصدة النظم المختلفة المدينة والدائنة تبقى سطورًا منفصلة — فرقم تنظيمي صافٍ يخفي الخطرين معًا" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Read the prohibitions as promises to users: the separate presentation means a reader can lift the deferral lines out and see the utility's IFRS-basis performance standing alone; the no-offset rule means a big recovery asset cannot silently cancel a big give-back liability. Together they let analysts construct BOTH views — with the regulatory timing and without — which is the entire point of a bridge standard.",
        ar: "اقرأ الممنوعات بوصفها وعودًا للمستخدمين: فالعرض المستقل يمكّن القارئ من انتزاع سطور التأجيل ورؤية أداء المرافق على أساس IFRS منفردًا؛ وقاعدة عدم المقاصة تعني أن أصل استرداد ضخم لا يلغي بصمت التزام ردٍّ ضخمًا. وبهما معًا يبني المحللون الرؤيتين — بالتوقيت التنظيمي وبغيره — وهذا كل مقصود المعيار الجسري.",
      },
    },
    { kind: "h", text: { en: "The return/accretion lane — interest-like traffic", ar: "مسار العائد والاستحقاق — مرور شبيه بالفائدة" } },
    {
      kind: "p",
      text: {
        en: "Many schemes pay the utility for WAITING: a deferred cost balance earns a return (the allowed rate on the rate base) while it waits for recovery, and a credit balance sometimes accrues a charge while it waits to be returned. IFRS 14 lets that accretion continue: the debit grows by the scheme's return with the credit side landing in finance income (or the regulatory-return line), the mirror for credit balances. The accretion is NOT a fresh measurement — it is the scheme's own arithmetic, imported exactly as written.",
        ar: "كثير من النظم يدفع للمرافق مقابل الانتظار: فرصيد التكلفة المؤجلة يكسب عائدًا (المعدل المسموح على القاعدة) ريثما يأتي الاسترداد، وقد يتراكم على الرصيد الدائن حملٌ ريثما يُرَدّ. ويسمح IFRS 14 باستمرار ذلك الاستحقاق: ينمو المدين بعائد النظام مع هبوط الدائن في الدخل التمويلي (أو سطر العائد التنظيمي)، وبالمرآة للدائن. والاستحقاق ليس قياسًا جديدًا — بل حساب النظام ذاته مستوردًا كما كُتب.",
      },
    },
    {
      kind: "example",
      title: { en: "Accretion on the waiting balance", ar: "استحقاق على الرصيد المنتظر" },
      lines: [
        { en: "Opening regulatory deferral account debit 200 · the scheme allows a 6% return while recovery waits", ar: "رصيد تأجيل مدين افتتاحي ٢٠٠ · ويجيز النظام عائدًا ٦٪ خلال انتظار الاسترداد" },
        { en: "Accretion for the year = 200 × 6% = 12: Dr the deferral debit 12 · Cr finance income 12 — the balance earns while it waits", ar: "استحقاق السنة = ٢٠٠ × ٦٪ = ١٢: مدين رصيد التأجيل ١٢ / دائن دخل تمويلي ١٢ — فالرصيد يكسب وهو ينتظر" },
        { en: "New deferred storm costs added in the year 40 → closing debit = 200 + 12 + 40 = 252 (before any recovery through tariffs)", ar: "تكاليف عواصف مؤجلة جديدة أضيفت في السنة ٤٠ ← المدين الختامي = ٢٠٠ + ١٢ + ٤٠ = ٢٥٢ (قبل أي استرداد بالتعريفات)" },
        { en: "Deferred tax at 25% on the accretion: the return is taxable as it accrues → DTL on the 12 grows by 3 — the traffic never travels alone", ar: "ضريبة مؤجلة بـ٢٥٪ على الاستحقاق: العائد خاضع وهو يتراكم ← التزام مؤجل على الـ١٢ ينمو ٣ — فالمرور لا يسافر وحده أبدًا" },
      ],
    },
    { kind: "h", text: { en: "Interactions — the bridge in the wider web", ar: "التقاطعات — الجسر في الشبكة الأوسع" } },
    {
      kind: "p",
      text: {
        en: "Group accounting reaches the balances too: a parent consolidating a first-time-adopter subsidiary electing IFRS 14 consolidates the deferral lines like any other — but the parent's OWN previous deferral history is irrelevant (the parent is not itself electing for its own books). Where the group's reporting currency differs, the balances translate at closing rates with FX differences to the translation reserve, exactly like the rest of the subsidiary's net assets.",
        ar: "تصل محاسبة المجموعات إلى الأرصدة كذلك: الأم التي تجمع تابعةً متبنية أولًا انتخبت IFRS 14 تجمع سطور التأجيل كسواها — لكن تاريخ الأم التأجيلي السابق لا يعني شيئًا (فالأم لا تنتخب لدفاترها هي). وحيث تختلف عملة التقرير للمجموعة، تترجم الأرصدة بأسعار الإقفال وتذهب الفروق لاحتياطي الترجمة كبقية صافي أصول التابعة بالضبط.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "IFRS 1 ↔ IFRS 14: the election is an IFRS 1 transition decision — the reconciliation notes show equity and profit with and without the balances", ar: "IFRS 1 ↔ IFRS 14: الانتخاب قرار انتقال في IFRS 1 — وتظهر ملاحظتا التسوية حقوق الملكية والربح بالأرصدة وبغيرها" },
        { en: "IAS 12 ↔ IFRS 14: deferred tax runs on the balances as on any temporary difference — the tax base follows what the tax authority will honour", ar: "IAS 12 ↔ IFRS 14: الضريبة المؤجلة تسري على الأرصدة كأي فرق مؤقت — والقاعدة الضريبية تتبع ما سيعتد به جهاز الضريبة" },
        { en: "IAS 29 ↔ IFRS 14: hyperinflationary utilities restate the deferral balances like any other non-monetary items into the closing measuring unit", ar: "IAS 29 ↔ IFRS 14: المرافق في اقتصادات جامحة تعيد عرض أرصدة التأجيل كسائر البنود غير النقدية بوحدة القياس الختامية" },
        { en: "IAS 34 ↔ IFRS 14: complete interim sets carry the balances' movement and scheme changes", ar: "IAS 34 ↔ IFRS 14: المجموعات المرحلية الكاملة تحمل حركة الأرصدة وتغيرات النظام" },
        { en: "The IASB's rate-regulation project ↔ IFRS 14: any future full model (regulatory assets & liabilities with fresh measurement) will REPLACE the bridge — IFRS 14 is explicitly transitional", ar: "مشروع التنظيم التعريفي للمجلس ↔ IFRS 14: أي نموذج كامل مستقبلي (أصول والتزامات تنظيمية بقياس جديد) سيستبدل الجسر — فـIFRS 14 انتقالي تصريحًا" },
      ],
    },
    {
      kind: "example",
      title: { en: "The equity swing at transition", ar: "أرجحة حقوق الملكية عند الانتقال" },
      lines: [
        { en: "A grid operator's previous-GAAP equity 1,000 includes regulatory deferral debits 180 and credits 50 (net deferral +130)", ar: "حقوق ملكية مشغل شبكة بالنظام السابق ١٬٠٠٠ تضم مدين تأجيل ١٨٠ ودائن ٥٠ (صافي تأجيل +١٣٠)" },
        { en: "ELECTING: opening IFRS equity ≈ 1,000 — the balances carry at their scheme amounts, plus a deferred-tax layer on them (net DTA at 25% ≈ +32 on the net debit)", ar: "بالانتخاب: حقوق الافتتاح وفق IFRS ≈ ١٬٠٠٠ — تُرحّل الأرصدة بمقاديرها النظامية زائد طبقة ضريبة مؤجلة (أصل ضريبي صافٍ بـ٢٥٪ ≈ +٣٢ على المدين الصافي)" },
        { en: "NOT electing: strip both lines → equity drops by the net 130, a deferred-tax counterweight ≈ +32 → net hit ≈ 98 — the reconciliation number the market reads first", ar: "بعدم الانتخاب: تجرد السطران ← تهبط حقوق الملكية بالصافي ١٣٠ ويقابلها أثر ضريبي ≈ +٣٢ ← صدمة صافية ≈ ٩٨ — رقم التسوية الذي يقرؤه السوق أولًا" },
        { en: "Same economics, two openings — the election is a presentation bridge, and this pair of numbers IS the whole argument for it", ar: "اقتصاد واحد وافتتاحيان — فالانتخاب جسر عرض، وهذان الرقمان معًا هما حجته الكاملة" },
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
    {
      kind: "tip",
      text: {
        en: "The package rule is the fastest lost mark: a candidate who defers the storm costs but derecognises the over-collection credit has cherry-picked — IFRS 14 takes ALL qualifying balances or NONE.",
        ar: "قاعدة الحزمة أسرع درجة مفقودة: من يؤجل تكاليف العاصفة ويستبعد رصيد التحصيل الزائد فقد انتقى — فـIFRS 14 يأخذ كل الأرصدة المؤهلة أو لا شيء.",
      },
    },
    {
      kind: "note",
      text: {
        en: "IFRS 14 never blesses the balances as IFRS assets/liabilities — it explicitly declines to decide; the presentation line items are a permitted continuation, not a recognition verdict.",
        ar: "لا يبارك IFRS 14 الأرصدة قط بوصفها أصولًا والتزامات وفق IFRS — بل يعلن صراحة عدم حسمه؛ وسطور العرض استمرارٌ مجاز لا حكم اعتراف.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Because the scheme is the measurement engine, two utilities in the same country can carry different deferral numbers for identical economics — their regulators wrote different rulebooks. Compare regulators before comparing balances.",
        ar: "لأن النظام هو محرك القياس، قد تحمل مرافقتان في البلد الواحد رقمي تأجيل مختلفين لاقتصاد واحد — فمنظّمان مختلفان كتبا قاعدتين مختلفتين. قارن المنظمين قبل مقارنة الأرصدة.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Presentation geography: the deferral debit is an asset line, the credit a liability line — but neither joins 'receivables' or 'payables' subtotals, and neither enters liquidity ratios; the rate of recovery is a regulatory promise, not a contractual cash date.",
        ar: "جغرافيا العرض: المدين سطر أصل والدائن سطر التزام — لكن لا يدخل أيٌّ منهما في مجاميع «المدينين» أو «الدائنين»، ولا في نسب السيولة؛ فإيقاع الاسترداد وعد تنظيمي لا تاريخ نقد تعاقدي.",
      },
    },
  ],
}
