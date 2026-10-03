/** IAS 16 — Property, Plant and Equipment */

import type { Standard } from "../types"

export const IAS_16: Standard = {
  code: "IAS 16",
  title: { en: "Property, Plant and Equipment", ar: "الممتلكات والآلات والمعدات" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 2005 · 2020 amendment (revenue-related dismantling)", ar: "سارٍ من ١ يناير ٢٠٠٥ · تعديل ٢٠٢٠ (تكاليف الفك المتعلقة بالإيراد)" },
  blocks: [
    { kind: "h", text: { en: "Objective & the recognition test", ar: "الهدف ومعيار الاعتراف" } },
    {
      kind: "p",
      text: {
        en: "Prescribe the accounting for PPE — TANGIBLE items held for use in production/supply of goods or services, rental to others, or administration, expected to be used over MORE THAN ONE period. Recognition when BOTH: (a) it is PROBABLE that future economic benefits will flow to the entity, and (b) the COST is measurable reliably. Spare parts: major ones qualify as PPE; the rest are inventory (IAS 2) expensed on issue. Safety/environmental assets (a scrubber mandated by law) qualify even without direct revenue — they enable future benefits from related assets.",
        ar: "يحدد محاسبة الممتلكات والآلات والمعدات — البنود الملموسة المستخدمة في الإنتاج أو التوريد أو التأجير للغير أو الإدارة، والمنتظر استخدامها أكثر من فترة. ويعترف بالبند عند تحقق: (أ) ترجيح تدفق منافع اقتصادية مستقبلية، (ب) إمكان قياس التكلفة موثوقًا. وقطع الغيار الجوهرية ممتلكات، والباقي مخزون يحمَّل مصروفًا عند الصرف. والأصول الأمنية والبيئية (مرشح يفرضه القانون) تصلح ولو لم تدر إيرادًا مباشرًا — فهي تمكّن منافع أصول أخرى.",
      },
    },
    {
      kind: "note",
      text: {
        en: "IAS 16 runs on the ASSET'S LIFE CYCLE: what enters COST on day one (the three buckets) → how the depreciable amount is ALLOCATED over the useful life → which model carries it (cost or revaluation) → how it EXITS (disposal) and shakes hands with impairment. Every exam scenario stands at one of those four stations.",
        ar: "يعمل IAS 16 على دورة حياة الأصل: ما يدخل التكلفة يوم الاعتراف (الحاويات الثلاث) ← كيف يُوزَّع المبلغ القابل للإهلاك على العمر الإنتاجي ← بأي نموذج يُحمل (التكلفة أو إعادة التقييم) ← كيف يخرج (التخرد) ويتصل بانخفاض القيمة. كل سيناريو امتحاني يقف عند واحدة من هذه المحطات الأربع.",
      },
    },
    { kind: "h", text: { en: "Scope & exclusions — where each boundary lives", ar: "النطاق والاستبعادات — أين يعيش كل تقاطع" } },
    {
      kind: "p",
      text: {
        en: "IAS 16 covers the recognition, the measurement at and after recognition, depreciation, derecognition and disclosure of tangible long-life assets IN USE. Whatever is not 'in use, tangible, long-life' is owned by another standard — and the exam tests every boundary by name. The two most-tested: assets held to earn rentals or for capital appreciation are INVESTMENT PROPERTY under IAS 40; and the lessee's right-of-use asset is recognised under IFRS 16 but DEPRECIATED by the IAS 16 model (and impaired under IAS 36).",
        ar: "يغطي IAS 16 الاعتراف والقياس عند الاعتراف وبعده والإهلاك والاستبعاد والإفصاح عن الأصول الملموسة طويلة العمر المستخدمة. وما ليس «مستخدمًا وملموسًا وطويل العمر» تحكمه معايير أخرى — والممتحن يختبر كل تقاطع باسمه. وأشهر تقاطعين: الأصول المحتفظ بها للتأجير أو التنمية الرأسمالية عقارات استثمارية وفق IAS 40؛ وأصل حق الاستخدام لدى المستأجر يُعترف به وفق IFRS 16 لكنه يُهلك بنموذج IAS 16 (ويُختبر انخفاضه وفق IAS 36).",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Investment property (fair value through P&L) → IAS 40 — though any owner-occupied portion of a mixed building returns to IAS 16", ar: "العقارات الاستثمارية (بالقيمة العادلة عبر الأرباح) ← IAS 40 — على أن الجزء المشغول ذاتيًا من مبنى مختلط يعود إلى IAS 16" },
        { en: "Right-of-use assets in leases → IFRS 16 for recognition; IAS 16 depreciation guidance applies to them (IAS 36 for impairment)", ar: "أصول حق الاستخدام في العقود الإيجارية ← IFRS 16 للاعتراف؛ وتنطبق عليها توجيهات إهلاك IAS 16 (وIAS 36 لانخفاض القيمة)" },
        { en: "Intangibles (software, licences, brands) → IAS 38", ar: "الأصول غير الملموسة (برمجيات، تراخيص، علامات) ← IAS 38" },
        { en: "Items held for sale in the ordinary course (a dealer's machine stock, a developer's buildings awaiting sale — including the construction 'wait time' before sale) and minor spares/servicing equipment → IAS 2", ar: "البنود المحتفظ بها للبيع في النشاط الاعتيادي (مخزون الوكيل من الماكينات، ومباني المطور في انتظار البيع — بما فيها فترة الانتظار الإنشائية قبل البيع) وقطع الغيار الثانوية ومعدات الخدمة ← IAS 2" },
        { en: "Non-current assets held for sale → IFRS 5 — and depreciation STOPS the moment they are classified", ar: "الأصول غير المتداولة المحتفظ بها للبيع ← IFRS 5 — ويتوقف الإهلاك لحظة التصنيف" },
        { en: "Biological assets → IAS 41 · mineral rights & reserves → IFRS 6 · financial instruments → IFRS 9", ar: "الأصول الحيوية ← IAS 41 · حقوق المعادن والاحتياطيات ← IFRS 6 · الأدوات المالية ← IFRS 9" },
        { en: "Borrowing costs during construction → IAS 23: they join the cost of a QUALIFYING asset, never flow directly through IAS 16", ar: "تكاليف الاقتراض أثناء الإنشاء ← IAS 23: تنضم إلى تكلفة الأصل المؤهل ولا تمر عبر IAS 16 مباشرةً أبدًا" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "Important distinction: assets held for temporary repeated use (a reusable mould, pallets) remain PPE, depreciated over expected uses — they are not inventory.",
        ar: "تمييز مهم: الأصول المعدة لاستخدام متكرر مؤقت (قوالب قابلة لإعادة الاستخدام، منصات نقل) تبقى ممتلكات تُهلك على عدد الاستخدامات المتوقع — وليست مخزونًا.",
      },
    },
    { kind: "h", text: { en: "Key definitions", ar: "التعاريف الأساسية" } },
    {
      kind: "p",
      text: {
        en: "Five definitions do the heavy lifting. The DEPRECIABLE AMOUNT is what gets allocated (cost − residual value). The RESIDUAL VALUE is what disposal would fetch TODAY for an asset of the expected age and condition at the end of its life — net of disposal costs — not a guess about prices in ten years. The USEFUL LIFE is the ENTITY'S OWN horizon: the period it expects to use the asset or the units it expects to obtain, often shorter than physical life, and reviewed at least ANNUALLY (IAS 16.51) together with the residual value and the method.",
        ar: "خمسة تعاريف تتحمل العبء الأكبر. المبلغ القابل للإهلاك هو ما يوزَّع (التكلفة − القيمة المتبقية). والقيمة المتبقية ما كان التخرد سيجلب اليوم لأصل بعمر وحالة متوقعين عند نهاية عمره — صافي تكاليف التخرد — لا تخمينًا لأسعار بعد عشر سنين. والعمر الإنتاجي أفق المنشأة ذاتها: المدة المنتظر استخدام الأصل فيها أو الوحدات المنتظر الحصول عليها، وغالبًا أقصر من العمر المادي، ويراجع سنويًا على الأقل (IAS 16.51) مع القيمة المتبقية والطريقة.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "PPE — tangible items held for use in production/supply of goods or services, for rental to others, or for administrative purposes; used during more than one period", ar: "الممتلكات والآلات والمعدات — بنود ملموسة لل استخدام في الإنتاج أو توريد السلع والخدمات أو للتأجير للغير أو لأغراض إدارية؛ وتُستخدم خلال أكثر من فترة" },
        { en: "Carrying amount = cost (or revalued amount) − accumulated depreciation − accumulated impairment losses", ar: "القيمة الدفترية = التكلفة (أو المبلغ المعاد تقييمه) − مجمع الإهلاك − مجمع خسائر انخفاض القيمة" },
        { en: "Cost = directly attributable spend + the day-one dismantling/restoration estimate (+ capitalised IAS 23 borrowing costs on a qualifying asset)", ar: "التكلفة = الإنفاق المرتبط مباشرة + التقدير الابتدائي للفك/الإعادة ( + تكاليف الاقتراض المرسملة وفق IAS 23 لأصل مؤهل)" },
        { en: "Depreciable amount = cost − residual value — the number the life divides", ar: "المبلغ القابل للإهلاك = التكلفة − القيمة المتبقية — وهو الرقم الذي يقسم عليه العمر" },
        { en: "Residual value — reviewed at least at each financial year-end; a revision is a CHANGE IN ESTIMATE under IAS 8 (prospective)", ar: "القيمة المتبقية — تراجع في نهاية كل سنة مالية على الأقل؛ ومراجعتها تغير في التقدير وفق IAS 8 (مستقبلي)" },
      ],
    },
    { kind: "h", text: { en: "Recognition — the two criteria", ar: "الاعتراف — المعياران" } },
    {
      kind: "p",
      text: {
        en: "The gate is the same twin test as every asset: PROBABLE future benefits + RELIABLY MEASURABLE cost. Judgement lives in 'probable': benefits may be direct (the machine's output) or indirect (the legally-mandated scrubber that lets the revenue plant keep running). Judgement also lives in 'item': recognition is at the level of each SIGNIFICANT PART — which is why a replacement engine is its own derecognition-plus-capitalisation event, not 'repairs'.",
        ar: "البوابة اختبار مزدوج ككل الأصول: منافع مستقبلية مرجحة + تكلفة قابلة للقياس الموثوق. والاجتهاد في «المرجح»: فالمنافع قد تكون مباشرة (نتاج الماكينة) أو غير مباشرة (المرشح الذي يفرضه القانون لكي يستمر تشغيل مصنع الإيراد). والاجتهاد أيضًا في تحديد «البند»: فالاعتراف يجري على مستوى كل جزء جوهري — ولذلك استبدال المحرك حدث استبعاد-مع-رسملة لا «إصلاحات».",
      },
    },
    {
      kind: "tree",
      title: { en: "A tangible long-life item arrives", ar: "وصول بند ملموس طويل العمر" },
      root: { en: "Bought, self-constructed, exchanged or granted — capitalise or expense?", ar: "مشترى أو منشأ ذاتيًا أو بمقايضة أو منحة — رسملة أم مصروف؟" },
      branches: [
        {
          when: { en: "Meets the PPE definition + benefits PROBABLE + cost reliably measurable", ar: "يحقق تعريف الممتلكات + المنافع مرجحة + التكلفة قابلة للقياس الموثوق" },
          then: { en: "CAPITALISE at cost — the three buckets start accumulating", ar: "رسملة بالتكلفة — تبدأ الحاويات الثلاث في التجميع", red: true },
        },
        {
          when: { en: "Safety / environmental item with no direct cash inflows of its own (legally-required protective equipment)", ar: "بند أمني/بيئي بلا تدفقات داخلية مباشرة (معدات حماية يفرضها القانون)" },
          then: { en: "STILL PPE — it enables the benefits of RELATED assets", ar: "ممتلكات رغم ذلك — فهو يمكّن منافع أصول أخرى ذات صلة", red: true },
        },
        {
          when: { en: "Benefits consumed in the CURRENT period only (repairs, redecoration, maintenance)", ar: "المنافع تُستهلك في الفترة الجارية فقط (إصلاحات، تجديد ديكور، صيانة)" },
          then: { en: "EXPENSE — P&L as incurred", ar: "مصروف — بالأرباح عند تكبده", red: true },
        },
        {
          when: { en: "Held for sale in the ordinary course / a minor spare part", ar: "محتفظ به للبيع الاعتيادي / قطعة غيار ثانوية" },
          then: { en: "IAS 2 INVENTORY — not IAS 16 at all", ar: "مخزون وفق IAS 2 — خارج IAS 16 كليًا", red: true },
        },
      ],
    },
    {
      kind: "note",
      text: {
        en: "The scrubber that adds no revenue is still an asset: without it the revenue-producing plant cannot lawfully run. The test is the FLOW of benefits — direct OR indirect through related assets.",
        ar: "المرشح الذي لا يضيف إيرادًا أصل رغم ذلك: فبدونه لا يعمل مصنع الإيراد قانونًا. والاختبار هو تدفق المنافع — مباشرة أو غير مباشرة عبر أصول ذات صلة.",
      },
    },
    { kind: "h", text: { en: "Cost at recognition — the three buckets", ar: "التكلفة عند الاعتراف — الحاويات الثلاث" } },
    {
      kind: "p",
      text: {
        en: "COST is everything spent to bring the asset to the location and condition NECESSARY for its intended use — and not one unit of currency beyond that point. The buckets: (a) the purchase price itself, (b) DIRECTLY ATTRIBUTABLE costs, and (c) the day-one estimate of dismantling and restoration. Once the asset is ready, the spending tap flips from capital to revenue: repairs and running costs are period expenses. Managerial overheads fail the 'directly attributable' test even when the project would stall without them.",
        ar: "التكلفة هي كل ما أُنفق لإيصال الأصل إلى الموقع والحالة اللازمين لاستخدامه المقصود — ولا وحدة نقد واحدة بعد تلك النقطة. والحاويات: (أ) ثمن الشراء ذاته، (ب) التكاليف المرتبطة مباشرة، (ج) التقدير الابتدائي للفك والإعادة. ومتى جاهز الأصل انقلب صنبور الإنفاق من رأسمالي إلى إيرادي: فالإصلاحات والتكاليف التشغيلية مصروفات فترة. والتحميلات الإدارية تسقط من اختبار «الارتباط المباشر» ولو توقف المشروع بدونها.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "(a) purchase price + import duties + NON-refundable purchase taxes, LESS trade discounts and rebates", ar: "(أ) سعر الشراء + الرسوم الجمركية + ضرائب الشراء غير المستردة، بعد خصم الخصومات التجارية" },
        { en: "(b) DIRECTLY ATTRIBUTABLE costs: employee benefits, site preparation, delivery & handling, installation & assembly, professional fees, testing that the asset is functioning properly", ar: "(ب) التكاليف المرتبطة مباشرة: مزايا العاملين، تجهيز الموقع، النقل والمناولة، التركيب والتجميع، الأتعاب المهنية، اختبارات سلامة التشغيل" },
        { en: "(c) the INITIAL ESTIMATE of DISMANTLING/RESTORATION obligations — an IAS 37 provision, measured at PRESENT VALUE on day one", ar: "(ج) التقدير الابتدائي للتزامات الفك/الإعادة — مخصص وفق IAS 37 مقاسًا بالقيمة الحالية يوم الاعتراف" },
        { en: "The May 2020 amendment (effective 1 Jan 2022): items PRODUCED while bringing the asset to its intended condition (test-run samples) are sold through P&L — proceeds and production costs NO LONGER net against the asset's cost", ar: "تعديل مايو ٢٠٢٠ (سارٍ من ١ يناير ٢٠٢٢): المنتجات المصنوعة أثناء تهيئة الأصل لحالته المقصودة (عينات التشغيل التجريبي) تباع عبر الأرباح — فلم تعد المتحصلات وتكاليف الإنتاج تُخصم من تكلفة الأصل" },
        { en: "NOT capitalised: opening ceremonies, staff training, administration & general overheads, costs of self-constructed waste/abnormal losses, relocating/refurbishing beyond original condition", ar: "لا تُرسمل: حفل افتتاح، تدريب العاملين، التحميلات الإدارية والعامة، الخسائر غير الطبيعية للإنشاء الذاتي، النقل أو التجديد فوق الحالة الأصلية" },
        { en: "Startup & similar pre-production costs do NOT qualify; borrowing costs ride IAS 23's separate train", ar: "تكاليف التشغيل المبدئية وما شابهها لا تصلح؛ وتكاليف الاقتراض تركب قطار IAS 23 المستقل" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Day-one capitalisation — all three buckets + decommissioning", ar: "رسملة اليوم الأول — الحاويات الثلاث مع الفك" },
      rows: [
        { dr: { en: "PPE — machine (cost 2,450)", ar: "ممتلكات — آلة (التكلفة ٢٬٤٥٠)" }, cr: { en: "Cash / payables (invoice 2,000 + duties 200 + installation 100 + testing 50)", ar: "نقد / دائنون (فاتورة ٢٬٠٠٠ + رسوم ٢٠٠ + تركيب ١٠٠ + اختبار ٥٠)" }, red: true },
        { dr: { en: "(the 100 of dismantling estimate rides inside the 2,450)", ar: "(تقدير الفك ١٠٠ داخل الـ٢٬٤٥٠)" }, cr: { en: "Provision for dismantling (IAS 37, discounted) 100", ar: "مخصص فك المعدات (IAS 37، مخصومًا) ١٠٠" } },
        { dr: { en: "Cash 30 — samples produced during testing are sold", ar: "نقد ٣٠ — بيع عينات أُنتجت أثناء الاختبار" }, cr: { en: "P&L income — proceeds before intended use (2020 amendment, not a cost deduction)", ar: "دخل بالأرباح — متحصلات قبل الاستخدام المقصود (تعديل ٢٠٢٠، لا خصمًا من التكلفة)" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Decommissioning & the proceeds-before-intended-use amendment", ar: "الفك وتعديل المتحصلات قبل الاستخدام المقصود" } },
    {
      kind: "p",
      text: {
        en: "Bucket (c) is an IAS 37 provision measured at present value on day one; the discount UNWINDS through finance costs in later periods — and while construction continues that unwinding can itself be a capitalisable borrowing cost under IAS 23. Subsequent REMEASUREMENTS of the provision adjust the asset's cost prospectively; a decrease that exceeds the asset's carrying amount goes to P&L. And the 2020 amendment flipped the testing-proceeds rule: sample output sold while the asset is still being commissioned is P&L income — the cost keeps every qualifying testing cost in full.",
        ar: "الحاوية (ج) مخصص وفق IAS 37 يقاس بالقيمة الحالية يوم الاعتراف؛ ويُفك الخصم عبر تكاليف تمويل في الفترات اللاحقة — وأثناء استمرار الإنشاء يجوز رسملة ذلك الفك بوصفه تكلفة اقتراض وفق IAS 23. وإعادة القياس اللاحقة للمخصص تعدل تكلفة الأصل مستقبليًا؛ وما نقص عن القيمة الدفترية للأصل يذهب للأرباح. وقلب تعديل ٢٠٢٠ قاعدة متحصلات الاختبار: ما بيع من عينات أثناء التشغيل التجريبي دخل بالأرباح — وتحتفظ التكلفة بكل تكاليف الاختبار المؤهلة كاملةً.",
      },
    },
    {
      kind: "example",
      title: { en: "The 2020 amendment in numbers", ar: "تعديل ٢٠٢٠ بالأرقام" },
      lines: [
        { en: "Invoice 2,000 + duties 200 + installation 100 + testing costs 50 + discounted dismantling estimate 100 → capitalised cost 2,450", ar: "فاتورة ٢٬٠٠٠ + رسوم ٢٠٠ + تركيب ١٠٠ + تكاليف اختبار ٥٠ + تقدير الفك المخصوم ١٠٠ ← التكلفة المرسملة ٢٬٤٥٠" },
        { en: "Sample output sells for 30 during testing → income 30 in P&L (and the cost of producing the samples expensed) — the cost stays 2,450", ar: "بيع عينات بـ٣٠ أثناء الاختبار ← دخل ٣٠ بالأرباح (وتكلفة إنتاج العينات مصروفًا) — وتبقى التكلفة ٢٬٤٥٠" },
        { en: "Pre-2022 treatment netted the 30 off: cost would have been 2,420 — the amendment removed the credit", ar: "المعالجة قبل ٢٠٢٢ كانت تخصم الـ٣٠: لكانت التكلفة ٢٬٤٢٠ — والتعديل أزال هذا الخصم" },
        { en: "Balance check: dr PPE 2,450 + dr cash 30 = 2,480 = cr payables 2,350 + cr provision 100 + cr income 30", ar: "فحص التوازن: مدين الممتلكات ٢٬٤٥٠ + مدين النقد ٣٠ = ٢٬٤٨٠ = دائن الدائنين ٢٬٣٥٠ + دائن المخصص ١٠٠ + دائن الدخل ٣٠" },
      ],
    },
    { kind: "h", text: { en: "Depreciation — allocation, not valuation", ar: "الإهلاك — توزيع لا تقييم" } },
    {
      kind: "p",
      text: {
        en: "Depreciation is the systematic allocation of the DEPRECIABLE AMOUNT (cost − residual value) over the USEFUL LIFE — the period over which the asset's benefits are consumed, which is often shorter than the physical life and is reviewed at least ANNUALLY (IAS 16.51). Depreciation begins when the asset is AVAILABLE FOR USE — not when it is actually used — and stops at derecognition (or when it becomes HFS under IFRS 5, or when fully depreciated... never 'when the asset is idle': land has unlimited life and is never depreciated).",
        ar: "الإهلاك توزيع منظم للمبلغ القابل للإهلاك (التكلفة − القيمة المتبقية) على العمر الإنتاجي — مدة استهلاك منافع الأصل وغالبًا أقصر من عمره المادي، ويراجع سنويًا على الأقل. ويبدأ عند صلاحية الأصل للاستخدام — لا عند استخدامه فعليًا — وينتهي بالاستبعاد (أو بالاحتفاظ به للبيع وفق IFRS 5، أو عند اكتمال الإهلاك… لا عند «تعطل الأصل» أبدًا): والأرض بعمر غير محدود لا تهلك.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "Straight-line — benefits consumed EVENLY over time (buildings, furniture)", ar: "القسط الثابت — منافع تُستهلك بتساوٍ عبر الزمن (مبانٍ، أثاث)" },
        { en: "Diminishing balance — consumption is HIGHER in the early years (fast-obsolescing technology)", ar: "الرصيد المتناقص — استهلاك أعلى في السنوات الأولى (تقنية يتقادم سريعًا)" },
        { en: "Units of production — consumption tracks OUTPUT, not the calendar (machinery on volume)", ar: "وحدات الإنتاج — الاستهلاك يتبع الإنتاج لا التقويم (ماكينات بحجم النشاط)" },
        { en: "The 2014 amendment (effective 2016): a REVENUE-based method is generally NOT appropriate — revenue reflects the whole business's activity, not this asset's consumption; use it only where output correlates tightly with the asset's use", ar: "تعديل ٢٠١٤ (سارٍ ٢٠١٦): الطريقة المبنية على الإيراد غير ملائمة عمومًا — فالإيراد يعكس نشاط العمل كله لا استهلاك هذا الأصل؛ ولا تستعمل إلا عند ترابط الإنتاج مع استخدام الأصل" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The depreciation engine + the revision rule", ar: "محرك الإهلاك + قاعدة المراجعة" },
      lines: [
        { en: "Depreciable amount = cost (or revalued amount) − residual value", ar: "المبلغ القابل للإهلاك = التكلفة (أو المبلغ المعاد تقييمه) − القيمة المتبقية" },
        { en: "Straight line = (cost − residual) ÷ useful life", ar: "القسط الثابت = (التكلفة − المتبقية) ÷ العمر" },
        { en: "Diminishing balance = carrying amount × rate (residual handled by the rate)", ar: "الرصيد المتناقص = القيمة الدفترية × النسبة (والمتبقية تعالجها النسبة)" },
        { en: "Units of production = (cost − residual) × units this period ÷ total expected units", ar: "وحدات الإنتاج = (التكلفة − المتبقية) × وحدات الفترة ÷ إجمالي الوحدات المتوقعة" },
        { en: "REVISION (life / residual / method) = change in ESTIMATE under IAS 8: new charge = (carrying amount at revision date − revised residual) ÷ revised remaining life — prospective, no catch-up", ar: "المراجعة (العمر / المتبقية / الطريقة) = تغير تقدير وفق IAS 8: القسط الجديد = (القيمة الدفترية بتاريخ المراجعة − المتبقية المعدلة) ÷ العمر المتبقي المعدل — مستقبليًا بلا تعويض" },
      ],
    },
    {
      kind: "journal",
      title: { en: "The annual charge + the optional equity transfer", ar: "القسط السنوي + نقل حقوق الملكية الاختياري" },
      rows: [
        { dr: { en: "Depreciation expense (P&L) 150", ar: "مصروف إهلاك (بالأرباح) ١٥٠" }, cr: { en: "Accumulated depreciation 150", ar: "مجمع الإهلاك ١٥٠" }, red: true },
        { dr: { en: "Revaluation surplus 50 — optional reallocation", ar: "احتياطي إعادة التقييم ٥٠ — إعادة توزيع اختيارية" }, cr: { en: "Retained earnings 50 (the EXCESS of revalued depreciation 150 over cost-model depreciation 100)", ar: "الأرباح المحتجزة ٥٠ (زيادة الإهلاك المعاد تقييمه ١٥٠ على إهلاك التكلفة ١٠٠)" }, red: true },
        { cr: { en: "The transfer is equity-to-equity — never P&L, never recycling", ar: "النقل من حقوق الملكية إلى حقوق الملكية — لا عبر الأرباح ولا تدويرًا" } },
      ],
    },
    {
      kind: "example",
      title: { en: "Residual-value change mid-life (IAS 8)", ar: "تغير القيمة المتبقية في منتصف العمر (IAS 8)" },
      lines: [
        { en: "Machine cost 100,000 · residual 10,000 · 10-year life → charge = (100,000 − 10,000) ÷ 10 = 9,000/yr", ar: "ماكينة بتكلفة ١٠٠٬٠٠٠ ومتبقية ١٠٬٠٠٠ وعمر ١٠ سنوات ← القسط = (١٠٠٬٠٠٠ − ١٠٬٠٠٠) ÷ ١٠ = ٩٬٠٠٠ سنويًا" },
        { en: "After 4 years: carrying = 100,000 − 36,000 = 64,000", ar: "بعد ٤ سنوات: الدفترية = ١٠٠٬٠٠٠ − ٣٦٬٠٠٠ = ٦٤٬٠٠٠" },
        { en: "Residual revised to 4,000 and remaining life to 5 years → new charge = (64,000 − 4,000) ÷ 5 = 12,000/yr", ar: "عُدلت المتبقية إلى ٤٬٠٠٠ والعمر المتبقي إلى ٥ سنوات ← القسط الجديد = (٦٤٬٠٠٠ − ٤٬٠٠٠) ÷ ٥ = ١٢٬٠٠٠ سنويًا" },
        { en: "No restatement, no catch-up — the past 36,000 stays where it is", ar: "لا إعادة عرض ولا تعويض — الـ٣٦٬٠٠٠ الماضية تبقى حيث هي" },
      ],
    },
    {
      kind: "steps",
      title: { en: "The estimate-change drill", ar: "تمرين تغير التقدير" },
      items: [
        { en: "Take the CARRYING AMOUNT at the revision date (cost − accumulated depreciation to date)", ar: "خذ القيمة الدفترية بتاريخ المراجعة (التكلفة − مجمع الإهلاك حتى التاريخ)" },
        { en: "Deduct the REVISED residual value (its revision is an estimate change too)", ar: "اطرح القيمة المتبقية المعدلة (ومراجعتها تغير تقدير كذلك)" },
        { en: "Divide by the REVISED remaining useful life (or expected units)", ar: "اقسم على العمر الإنتاجي المتبقي المعدل (أو الوحدات المتوقعة)" },
        { en: "Apply PROSPECTIVELY from the date of change — no catch-up, no restatement (IAS 8)", ar: "طبِّق مستقبليًا من تاريخ التغير — بلا تعويض ولا إعادة عرض (IAS 8)" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The three-date trap: depreciation starts at AVAILABLE FOR USE, not when used; it pauses NEVER (except HFS); it ends at DERECOGNITION. 'Idle asset' in the scenario is bait — idle assets keep depreciating.",
        ar: "فخ التواريخ الثلاثة: يبدأ الإهلاك عند الصلاحية للاستخدام لا عند الاستخدام؛ ولا يتوقف أبدًا (إلا بالاحتفاظ للبيع)؛ وينتهي بالاستبعاد. وعبارة «أصل معطل» في السيناريو طُعم — فالمعطل يستمر في الإهلاك.",
      },
    },
    { kind: "h", text: { en: "The component approach", ar: "منهج المكونات" } },
    {
      kind: "p",
      text: {
        en: "Each part of an item whose cost is significant RELATIVE TO THE WHOLE is depreciated SEPARATELY over its own life and consumption pattern — the airframe (25 years) versus its engines (10) versus the major-inspection component (5). The split is REQUIRED whenever patterns differ, and it is the machinery behind every 'replace the engine' question: the replacement derecognises the OLD part at its own carrying amount and capitalises the new part — it is never a repair.",
        ar: "كل جزء تبلغ تكلفته قدرًا جوهريًا نسبة إلى الكل يُهلك منفصلًا على عمره ونمط استهلاكه — الهيكل (٢٥ سنة) مقابل المحركات (١٠) مقابل مكون الفحص الجوهري (٥). والتقسيم واجب متى اختلفت الأنماط، وهو الآلة خلف كل سؤال «استبدال المحرك»: فالاستبدال يستبعد الجزء القديم بقيمته الدفترية الخاصة ويرسمل الجديد — وليس إصلاحًا أبدًا.",
      },
    },
    {
      kind: "tree",
      title: { en: "Component & subsequent-expenditure logic", ar: "منطق المكونات والإنفاق اللاحق" },
      root: { en: "Expenditure on an existing asset", ar: "إنفاق على أصل قائم" },
      branches: [
        {
          when: { en: "REPLACES a component (new engine, new roof) — and the component was separately depreciated", ar: "يستبدل مكونًا (محرك جديد، سقف جديد) — والمكون كان مهلكًا منفصلًا" },
          then: { en: "Derecognise the OLD component's carrying amount, capitalise the new; if old cost unknowable, use the current cost of an equivalent as proxy", ar: "استبعد القيمة الدفترية للقديم ورسمل الجديد؛ وإن تعذر معرفة القديم استخدم تكلفة مثيل حاليًا", red: true },
        },
        {
          when: { en: "MAJOR INSPECTION/overhaul (aircraft heavy check) at regular intervals", ar: "فحص/إصلاح جوهري دوري (صيانة الطائرات الكبرى)" },
          then: { en: "Capitalise when the inspection condition existed at acquisition; the previous inspection's unamortised cost is derecognised", ar: "رسمل إذا كان شرط الفحص موجودًا عند الاقتناء؛ ويستبعد ما لم يستهلك من كلفة الفحص السابق", red: true },
        },
        {
          when: { en: "Maintains performance / restores (repairs, maintenance)", ar: "صيانة أداء أو إعادة لحالة سابقة" },
          then: { en: "EXPENSE — no future benefit beyond the original assessment", ar: "مصروف — لا منفعة مستقبلية فوق التقدير الأصلي", red: true },
        },
        {
          when: { en: "IMPROVES: increases future benefits (capacity extension, useful-life extension, quality upgrade)", ar: "يحسّن: يزيد منافع مستقبلية (توسعة طاقة، إطالة عمر، جودة أعلى)" },
          then: { en: "CAPITALISE as part of cost (or as a separate component)", ar: "رسمل ضمن التكلفة (أو مكونًا مستقلًا)", red: true },
        },
      ],
    },
    {
      kind: "example",
      title: { en: "Component depreciation — the aircraft", ar: "إهلاك المكونات — الطائرة" },
      lines: [
        { en: "Aircraft cost 100m split: airframe 60m / 25 yrs · engines 30m / 10 yrs · major inspection 10m / 5 yrs (residuals nil)", ar: "طائرة بتكلفة ١٠٠ مليون مقسمة: هيكل ٦٠ مليون / ٢٥ سنة · محركات ٣٠ مليون / ١٠ سنوات · فحص جوهري ١٠ مليون / ٥ سنوات (لا متبقية)" },
        { en: "Annual charge = 60/25 + 30/10 + 10/5 = 2.4 + 3.0 + 2.0 = 7.4m", ar: "القسط السنوي = ٦٠÷٢٥ + ٣٠÷١٠ + ١٠÷٥ = ٢٫٤ + ٣٫٠ + ٢٫٠ = ٧٫٤ مليون" },
        { en: "Year 5: the inspection component is fully consumed (5 × 2.0 = 10) → carrying 0; a new heavy check costs 12m → derecognise 0, capitalise 12", ar: "السنة الخامسة: استُهلك مكون الفحص كاملًا (٥ × ٢٫٠ = ١٠) ← دفتريته صفر؛ وفحص جديد بـ١٢ مليون ← استبعد صفرًا ورسمل ١٢" },
        { en: "Year 10: engines replaced at 32m when their carrying was 0 (fully depreciated) → derecognise 0, capitalise 32 — the airframe keeps its own schedule untouched", ar: "السنة العاشرة: استبدلت المحركات بـ٣٢ مليون وقيمتها الدفترية صفر (مستهلكة كليًا) ← استبعد صفرًا ورسمل ٣٢ — ويواصل الهيكل جدوله الخاص دون مساس" },
      ],
    },
    { kind: "h", text: { en: "Measurement after recognition — two models", ar: "القياس بعد الاعتراف — النموذجان" } },
    {
      kind: "tree",
      root: { en: "Choose the model — class by class", ar: "اختر النموذج — فئة بفئة" },
      branches: [
        {
          when: { en: "COST MODEL (default)", ar: "نموذج التكلفة (الافتراضي)" },
          then: { en: "Carrying = cost − accumulated depreciation − accumulated impairment", ar: "الدفترية = التكلفة − مجمع الإهلاك − مجمع الانخفاض" },
        },
        {
          when: { en: "REVALUATION MODEL — only if FAIR VALUE can be measured RELIABLY (an active market)", ar: "نموذج إعادة التقييم — فقط إذا أمكن قياس القيمة العادلة موثوقًا (سوق نشطة)" },
          then: { en: "Carrying = fair value at revaluation date − subsequent depreciation/impairment; keep the WHOLE class revalued with 'sufficient regularity'", ar: "الدفترية = القيمة العادلة بتاريخ إعادة التقييم − إهلاك/انخفاض لاحق؛ وتعاد تقييم الفئة كاملة بانتظام كافٍ", red: true },
        },
        {
          when: { en: "An entire class revalued?", ar: "الفئة كلها تعاد تقييمها؟" },
          then: { en: "Yes — required; but a class may be revalued on a ROLLING basis (machines this year, buildings next)", ar: "نعم — واجب؛ ويجوز التدوير داخل الفئة (آلات هذا العام ومبانٍ في التالي)" },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The first revaluation UP: credit the REVALUATION SURPLUS in OCI (never P&L); a revaluation DOWN is an expense — but first wipe any surplus for THAT asset within equity. On DISPOSAL the surplus is NOT recycled through P&L: transfer it DIRECTLY to RETAINED EARNINGS (or hold it in the reserve while the asset is used — but the transfer can also be made progressively as the asset is depreciated).",
        ar: "أول إعادة تقييم لأعلى: دائن احتياطي إعادة التقييم في الدخل الشامل الآخر (لا في الأرباح أبدًا)؛ وإعادة التقييم لأسفل مصروف — لكن بعد استنزاف أي فائض لذلك الأصل في حقوق الملكية أولًا. وعند التخرد لا يعاد تدوير الفائض عبر الأرباح: يحول مباشرة إلى الأرباح المحتجزة (أو يبقى بالاحتياطي أثناء استخدام الأصل — ويجوز النقل تدريجيًا مع الإهلاك).",
      },
    },
    {
      kind: "formula",
      title: { en: "Revaluation mechanics", ar: "ميكانيكا إعادة التقييم" },
      lines: [
        { en: "Revaluation surplus = fair value − carrying amount (immediately before the revaluation)", ar: "فائض إعادة التقييم = القيمة العادلة − القيمة الدفترية (قبيل إعادة التقييم مباشرة)" },
        { en: "Two restatement techniques: eliminate accumulated depreciation against cost then restate the net to fair value · OR proportionately restate gross cost AND accumulated depreciation to fair value", ar: "تقنيتان لإعادة العرض: إلغاء مجمع الإهلاك مقابل التكلفة ثم إعادة عرض الصافي للقيمة العادلة · أو إعادة عرض التكلفة الإجمالية والمجمع معًا تناسبيًا" },
        { en: "Depreciation after revaluation = (fair value − residual) ÷ REMAINING useful life", ar: "الإهلاك بعد إعادة التقييم = (القيمة العادلة − المتبقية) ÷ العمر الإنتاجي المتبقي" },
        { en: "Annual equity transfer (permissible): surplus → retained earnings by the EXCESS of revalued depreciation over cost-model depreciation", ar: "النقل السنوي داخل حقوق الملكية (جائز): من الفائض إلى الأرباح المحتجزة بمقدار زيادة الإهلاك المعاد تقييمه على إهلاك نموذج التكلفة" },
        { en: "On disposal: the asset's remaining surplus → retained earnings DIRECTLY — never through P&L", ar: "عند التخرد: فائض الأصل المتبقي ← الأرباح المحتجزة مباشرة — لا عبر الأرباح أبدًا" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Revaluation & the depreciation catch-up", ar: "إعادة التقييم ولحاق الإهلاك" },
      rows: [
        { dr: { en: "PPE (cost uplift)", ar: "ممتلكات (زيادة التكلفة)" }, cr: { en: "Accumulated depreciation (eliminate)", ar: "مجمع الإهلاك (إلغاء)" } },
        { dr: { en: "PPE (net uplift)", ar: "ممتلكات (الزيادة الصافية)" }, cr: { en: "Revaluation surplus (OCI)", ar: "احتياطي إعادة التقييم (الدخل الشامل)" }, red: true },
        { dr: { en: "Accumulated depreciation — proportionate restatement", ar: "مجمع الإهلاك — إعادة عرض تناسبية" }, cr: { en: "Revaluation surplus", ar: "احتياطي إعادة التقييم" }, red: true },
        { cr: { en: "Ongoing: depreciation on the NEW amount → charge P&L; transfer surplus → retained earnings as consumed (permissible)", ar: "لاحقًا: الإهلاك على المبلغ الجديد يحمَّل على الأرباح؛ ويجوز نقل الفائض إلى المحتجزة مع الاستهلاك" } },
      ],
    },
    {
      kind: "example",
      title: { en: "Revaluation worked numbers", ar: "إعادة تقييم بالأرقام" },
      lines: [
        { en: "Machine cost 1,000 · 10-year life · owned 4 years → carrying 600. Revalued to 900 with 6 years remaining", ar: "آلة بتكلفة ١٬٠٠٠ وعمر ١٠ سنوات؛ بعد ٤ سنوات دفتريتها ٦٠٠؛ أعيد تقييمها إلى ٩٠٠ و٦ سنوات متبقية" },
        { en: "Uplift 300 → revaluation surplus (OCI) 300", ar: "الزيادة ٣٠٠ ← احتياطي إعادة التقييم (الدخل الشامل) ٣٠٠" },
        { en: "New annual depreciation = 900 ÷ 6 = 150 (was 100) — estimate-style going forward", ar: "الإهلاك السنوي الجديد = ٩٠٠ ÷ ٦ = ١٥٠ (كان ١٠٠)" },
        { en: "Optional equity tidy-up per year: transfer 50 of the surplus to retained earnings (the extra depreciation consumed)", ar: "ترتيب اختياري سنوي: نقل ٥٠ من الفائض إلى المحتجزة (الإهلاك الإضافي المستهلك)" },
        { en: "Sell in year 5 for 700: gain in P&L = 700 − (900 − 150) = −50 loss; surplus 250 left → retained earnings directly, NEVER through P&L", ar: "البيع في السنة الخامسة بـ٧٠٠: خسارة بالأرباح = ٧٠٠ − ٧٥٠ = ٥٠؛ ويحول الفائض المتبقي ٢٥٠ إلى المحتجزة مباشرة لا عبر الأرباح أبدًا" },
      ],
    },
    {
      kind: "note",
      text: {
        en: "The surplus-to-retained-earnings transfer (excess depreciation, or the whole balance on disposal) is an EQUITY REALLOCATION — never P&L, never recycling. The exam tests whether you know it never touches the income statement.",
        ar: "نقل الفائض إلى الأرباح المحتجزة (الإهلاك الزائد، أو الرصيد كله عند التخرد) إعادة توزيع داخل حقوق الملكية — لا يمر بالأرباح ولا تدويرًا. والممتحن يختبر علمك بأنه لا يمس قائمة الدخل إطلاقًا.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "The WHOLE-CLASS rule: you cannot cherry-pick the shiny building for a revaluation gain. A class may be revalued on a rolling basis, but every item must be revalued 'with sufficient regularity' so the carrying amounts stay live — half-revalued classes are a classic exam violation to spot.",
        ar: "قاعدة الفئة الكاملة: لا يجوز انتقاء المبنى اللامع وحده لتحقيق مكسب التقييم. ويجوز التدوير داخل الفئة، لكن يجب إعادة تقييم كل بند «بانتظام كافٍ» لتبقى القيم الدفترية حية — والفئات المعاد تقييم نصفها مخالفة امتحانية كلاسيكية يجب كشفها.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "A revaluation DOWN after an UP: first eliminate the asset's own revaluation surplus (equity), then the excess goes to P&L. Mirror order for a subsequent UP after a DOWN: first restore the P&L loss previously booked, then the surplus. The corridor is per-ASSET, not per-class.",
        ar: "إعادة التقييم لأسفل بعد أعلى: استنزف فائض الأصل ذاته ثم الزيادة للأرباح. وبالعكس: رد أولًا خسارة الأرباح السابقة ثم الفائض. والممر لكل أصل لا لكل فئة.",
      },
    },
    { kind: "h", text: { en: "Exchange of assets", ar: "مقايضة الأصول" } },
    {
      kind: "p",
      text: {
        en: "Measure the new asset at the FAIR VALUE of the asset given up — unless the received asset's fair value is more clearly evident — but only when the exchange has COMMERCIAL SUBSTANCE: a measurable change in the amount, timing or risk of the entity's cash flows. Without commercial substance (or when fair value cannot be measured reliably), the new asset carries the OLD asset's carrying amount and NO gain is recognised. Watch the trade-in trap: a dealer's inflated trade-in allowance is NOT fair value — price the asset given up against the market.",
        ar: "يقاس الأصل الجديد بالقيمة العادلة للأصل المتخلى عنه — إلا إذا كانت القيمة العادلة للأصل المستلم أوضح دلالة — لكن فقط متى كانت للمقايضة جوهر تجاري: تغير قابل للقياس في مبلغ تدفقات المنشأة النقدية أو توقيتها أو مخاطرها. وبدون جوهر تجاري (أو عند تعذر قياس القيمة العادلة موثوقًا) يحمل الأصل الجديد القيمة الدفترية للقديم ولا يعترف بأي ربح. واحذر فخ المقايضة: بدل الاستبدال المتضخم من التاجر ليس قيمة عادلة — سعّر الأصل المتخلى عنه بالسوق.",
      },
    },
    {
      kind: "journal",
      title: { en: "Exchange — with and without commercial substance", ar: "المقايضة — بجوهر تجاري وبدونه" },
      rows: [
        { dr: { en: "PPE — new machine (FV of the old asset given up) 24,000", ar: "ممتلكات — ماكينة جديدة (القيمة العادلة للأصل المتخلى عنه) ٢٤٬٠٠٠" }, red: true },
        { dr: { en: "Accumulated depreciation 30,000", ar: "مجمع الإهلاك ٣٠٬٠٠٠" } },
        { cr: { en: "PPE — old machine (original cost) 50,000", ar: "ممتلكات — الماكينة القديمة (التكلفة الأصلية) ٥٠٬٠٠٠" } },
        { cr: { en: "Gain on exchange (P&L) 4,000 = 24,000 − carrying 20,000", ar: "ربح المقايضة (بالأرباح) ٤٬٠٠٠ = ٢٤٬٠٠٠ − الدفترية ٢٠٬٠٠٠" }, red: true },
        { cr: { en: "No commercial substance / FV unreliable → carry the OLD amount 20,000 across — no gain", ar: "بلا جوهر تجاري / القيمة العادلة غير موثوقة ← احمل القيمة القديمة ٢٠٬٠٠٠ كما هي — لا ربح" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Derecognition & compensation", ar: "الاستبعاد والتعويض" } },
    {
      kind: "p",
      text: {
        en: "Derecognise on DISPOSAL or when no future benefits are expected; the GAIN/LOSS = net disposal proceeds − carrying amount, recognised in P&L as the difference — it is NOT revenue (IFRS 15 covers customer contracts, not fixed-asset disposals). Compensation from third parties or insurance for impairment/loss items → P&L when receivable.",
        ar: "يستبعد الأصل عند التخرد أو انتفاء توقع المنافع؛ والربح/الخسارة = صافي متحصلات التخرد − القيمة الدفترية، وتعترف في الأرباح — وليست إيرادًا (فـIFRS 15 لعقود العملاء لا لتخرد الثوابت). وتعويضات الغير أو التأمين عن انخفاض أو فقد تذهب للأرباح عند القابلية للتحصيل.",
      },
    },
    {
      kind: "journal",
      title: { en: "Disposal entries", ar: "قيود التخرد" },
      rows: [
        { dr: { en: "Cash / receivable (proceeds)", ar: "نقد/مدينون (المتحصلات)" } },
        { dr: { en: "Accumulated depreciation", ar: "مجمع الإهلاك" } },
        { cr: { en: "PPE cost", ar: "تكلفة الممتلكات" } },
        { cr: { en: "Gain on disposal (P&L) — plug", ar: "ربح التخرد (بالأرباح) — فرق التوازن" }, red: true },
        { dr: { en: "Loss on disposal (P&L) — plug", ar: "خسارة التخرد (بالأرباح) — فرق التوازن" }, red: true },
      ],
    },
    { kind: "h", text: { en: "The impairment interface (IAS 36)", ar: "التقاطع مع انخفاض القيمة (IAS 36)" } },
    {
      kind: "list",
      items: [
        { en: "At each reporting date: test for INDICATORS; a revalued asset's impairment runs through the revaluation rules (reduce revaluation surplus first)", ar: "في كل تاريخ تقرير: اختبر المؤشرات؛ وانخفاض الأصل المعاد تقييمه يسري على قواعد إعادة التقييم (يستنزف الفائض أولًا)" },
        { en: "Compensation recognised for impairment/loss items goes to P&L even though the impairment itself ran through OCI (the asymmetry is deliberate)", ar: "تعويض الانخفاض/الفقد يذهب للأرباح وإن كان الانخفاض نفسه مرَّ بالدخل الشامل — عدم تماثل مقصود" },
        { en: "Depreciation continues after impairment over the REVISED remaining life", ar: "يستمر الإهلاك بعد الانخفاض على العمر المتبقي المعدل" },
        { en: "Impairment first, then depreciation: at the reporting date, update depreciation for the year, THEN test the resulting carrying amount against the recoverable amount", ar: "الانخفاض أولًا ثم الإهلاك: في تاريخ التقرير حدّث إهلاك السنة، ثم اختبر الدفترية الناتجة مقابل المبلغ القابل للاسترداد" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Impairment of a revalued asset — OCI eats it first", ar: "انخفاض أصل معاد تقييمه — الدخل الشامل يستوعب أولًا" },
      rows: [
        { dr: { en: "Revaluation surplus (equity) 200 — the asset's own surplus", ar: "احتياطي إعادة التقييم (حقوق الملكية) ٢٠٠ — فائض الأصل ذاته" }, cr: { en: "Accumulated impairment 200", ar: "مجمع الانخفاض ٢٠٠" } },
        { dr: { en: "Impairment loss (P&L) 200 — the excess only", ar: "خسارة انخفاض (بالأرباح) ٢٠٠ — الزيادة فقط" }, cr: { en: "Accumulated impairment 200", ar: "مجمع الانخفاض ٢٠٠" }, red: true },
        { cr: { en: "Building revalued carrying 900 · surplus on the asset 200 · recoverable 500 → total loss 400 = OCI 200 + P&L 200", ar: "مبنى معاد تقييمه دفتريته ٩٠٠ وفائضه ٢٠٠ والمسترد ٥٠٠ ← خسارة كلية ٤٠٠ = دخل شامل ٢٠٠ + أرباح ٢٠٠" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Disclosure checklist", ar: "قائمة الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "Measurement bases + depreciation METHODS & rates (or lives) · gross carrying & accumulated depreciation (opening/closing reconciliation with additions, disposals, revaluations, impairment, FX)", ar: "أسس القياس وطرق الإهلاك ونِسبه · التكلفة الإجمالية والمجمع (تسوية افتتاحية-ختامية بالإضافات والتخرد وإعادة التقييم والانخفاض والفروق)" },
        { en: "Restrictions on title + PPE pledged as security + commitments to acquire", ar: "قيود الملكية والرهون وتعهدات الاقتناء" },
        { en: "Expenditure recognised in the carrying amount of items under construction", ar: "الإنفاق المرسمل ضمن البنود تحت الإنشاء" },
        { en: "Compensation from third parties recognised in P&L", ar: "تعويضات الغير المعترف بها بالأرباح" },
        { en: "Revalued classes: effective date of revaluation, whether an independent valuer was involved, the carrying amount at cost model that WOULD have been, the surplus movements", ar: "الفئات المعاد تقييمها: تاريخ التقييم والمراجع المستقل والقيمة الدفترية بنموذج التكلفة لو لم يُعِد التقييم وحركات الفائض" },
      ],
    },
    { kind: "h", text: { en: "Transition & effective dates", ar: "الانتقال وتواريخ السريان" } },
    {
      kind: "p",
      text: {
        en: "The revised IAS 16 became effective 1 Jan 2005. Later amendments to cite by date: the 2014 clarification of acceptable methods (effective 1 Jan 2016 — revenue-based depreciation generally inappropriate); the May 2020 'proceeds before intended use' amendment (effective 1 Jan 2022, applied PROSPECTIVELY — prior periods keep the old netting rule); and the annual-improvements cycles that tightened the revaluation machinery (proportionate restatement of accumulated depreciation).",
        ar: "صار IAS 16 المعدل ساريًا من ١ يناير ٢٠٠٥. وتعديلات لاحقة تُذكر بالتاريخ: توضيح ٢٠١٤ للطرق المقبولة (سارٍ من ١ يناير ٢٠١٦ — الإهلاك المبني على الإيراد غير ملائم عمومًا)؛ وتعديل مايو ٢٠٢٠ للمتحصلات قبل الاستخدام المقصود (سارٍ من ١ يناير ٢٠٢٢، تطبيقيًا بالمستقبل — وتبقى الفترات السابقة على قاعدة الخصم القديمة)؛ ودورات التحسينات السنوية التي شددت ميكانيكا إعادة التقييم (إعادة العرض التناسبية لمجمع الإهلاك).",
      },
    },
    { kind: "h", text: { en: "Interactions with the rest of the corpus", ar: "التقاطعات مع بقية المعايير" } },
    {
      kind: "list",
      items: [
        { en: "IAS 36 — indicators trigger the test; a revalued asset's loss reduces the revaluation surplus first, the excess to P&L; depreciation of the impaired asset runs over the REVISED remaining life", ar: "IAS 36 — المؤشرات تثير الاختبار؛ وخسارة المعاد تقييمه تستنزف الفائض أولًا والزيادة للأرباح؛ وإهلاك المتدني يجري على العمر المتبقي المعدل" },
        { en: "IAS 23 — capitalised borrowing costs join the asset's cost and are depreciated with it (a qualifying asset under construction)", ar: "IAS 23 — تكاليف الاقتراض المرسملة تنضم لتكلفة الأصل وتُهلك معه (أصل مؤهل تحت الإنشاء)" },
        { en: "IAS 20 — an asset-related grant may be deducted from the cost (route B), shrinking the depreciable base", ar: "IAS 20 — يجوز خصم المنحة المرتبطة بأصل من التكلفة (المسار ب) فيصغر وعاء الإهلاك" },
        { en: "IFRS 16 — a right-of-use asset is recognised by the lease model but depreciated on IAS 16's machinery", ar: "IFRS 16 — أصل حق الاستخدام يعترف به نموذج الإيجار لكنه يهلك بآلية IAS 16" },
        { en: "IFRS 5 — once held for sale: STOP depreciating and switch to fair value less costs to sell", ar: "IFRS 5 — متى صنّف محتفظًا به للبيع: أوقف الإهلاك وحوّل إلى القيمة العادلة ناقص تكاليف البيع" },
        { en: "IAS 8 — life, residual and method revisions are estimate changes (prospective); a depreciation-policy change would be retrospective — the exam loves the distinction", ar: "IAS 8 — مراجعات العمر والمتبقية والطريقة تغيرات تقدير (مستقبلية)؛ أما تغيير سياسة الإهلاك فيكون بأثر رجعي — والامتحان يعشق هذا التمييز" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "CAPITAL vs REVENUE expenditure is a judgement list question: redecoration and repairs MAINTAIN → expense; extensions, capacity boosts and life extensions IMPROVE → capitalise. And when a part is replaced: derecognise the OLD part's carrying amount (estimate it if the cost is buried in the original machine) and capitalise the new part. The marks are in classifying EACH item separately.",
        ar: "الإنفاق الرأسمالي مقابل الإيرادي سؤال قائمة اجتهادية: التجديد والإصلاح يصونان ← مصروف؛ والتوسعات وزيادة الطاقة وإطالة العمر تحسّن ← رسملة. وعند استبدال جزء: استبعد القيمة الدفترية للقديم (قدّرها إن كانت التكلفة مدفونة في الماكينة الأصلية) ورسمل الجديد. الدرجات في تصنيف كل بند على حدة.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Land and buildings are SEPARATE assets even when bought together: land has an unlimited life and is never depreciated; the building component is. Split a combined purchase price between them — a favourite MCQ line.",
        ar: "الأرض والمباني أصلان منفصلان ولو اشتريا معًا: فالأرض بعمر غير محدود لا تهلك أبدًا، على خلاف مكوّن المبنى. فقسم ثمن الشراء المجمع بينهما — سطر اختيارات محبب.",
      },
    },
  ],
}
