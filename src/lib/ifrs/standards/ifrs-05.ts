/** IFRS 5 — Non-current Assets Held for Sale and Discontinued Operations */

import type { Standard } from "../types"

export const IFRS_5: Standard = {
  code: "IFRS 5",
  title: { en: "Non-current Assets Held for Sale and Discontinued Operations", ar: "الأصول غير المتداولة المحتفظ بها للبيع والعمليات المتوقفة" },
  topic: "assets",
  effective: { en: "Effective 1 Jan 2005", ar: "سارٍ من ١ يناير ٢٠٠٥" },
  blocks: [
    { kind: "h", text: { en: "Objective & the two halves", ar: "الهدف والشقان" } },
    {
      kind: "p",
      text: {
        en: "IFRS 5 has two engines: (1) HELD FOR SALE — the moment a disposal group meets the criteria, accounting switches from the going-concern rhythm (depreciation, allocation) to a sale-rhythm (measure at the lower of carrying amount and fair value less costs to sell, stop depreciation); (2) DISCONTINUED OPERATIONS — a component that is being sold or abandoned is PULLED OUT of continuing operations and shown as a single line (net of tax) so users see the ongoing business cleanly. The measurement engine and the presentation engine are independent: a disposal can be HFS without being discontinued, and discontinued can include an abandonment with nothing for sale at all.",
        ar: "لمعيار محركان: (١) المحتفظ به للبيع — فبمجرد تحقق الشروط تتحول المحاسبة من إيقاع الاستمرارية (إهلاك وتوزيع) إلى إيقاع البيع (القياس بالأدنى من الدفترية والقيمة العادلة ناقص تكاليف البيع، وإيقاف الإهلاك)؛ (٢) العمليات المتوقفة — يُنتزع المكوّن المُباع أو المتخلى عنه من العمليات المستمرة ويعرض سطرًا واحدًا (صافي الضريبة) لتنكشف الأعمال المستمرة. ومحرك القياس مستقل عن محرك العرض: فقد يكون التخرد محتفظًا به للبيع دون أن يكون عملية متوقفة، وقد تضم العملية المتوقفة تخليًا لا شيء فيه للبيع أصلًا.",
      },
    },
    { kind: "h", text: { en: "Scope — what can go held for sale", ar: "النطاق — ما الذي يجوز حمله للبيع" } },
    {
      kind: "p",
      text: {
        en: "The held-for-sale regime reaches non-current assets and DISPOSAL GROUPS from almost every corner of the balance sheet: PPE, intangibles, goodwill, investment property, biological assets, right-of-use assets — and entire subsidiaries. A few categories stay outside because their own standards own the exit: deferred tax assets (IAS 12), employee-benefit assets (IAS 19) and financial assets within IFRS 9's scope (unless part of a disposal group). Inventories in the ordinary course of sale are never HFS — that is IAS 2 routine business. And since 2016, non-current assets held for DISTRIBUTION TO OWNERS ride the same machinery with the words adapted.",
        ar: "يبلغ نظام الاحتفظ للبيع الأصول غير المتداولة ومجموعات التخرد من كل أركان الميزانية تقريبًا: الممتلكات والأصول غير الملموسة والشهرة والعقارات الاستثمارية والأصول الحيوية وأصول الحق في الاستخدام — والشركات التابعة بأكملها. وتبقى فئات قليلة خارجه لأن معاييرها تملك مخرجها: أصول الضريبة المؤجلة (IAS 12)، وأصول مزايا العاملين (IAS 19)، والأصول المالية داخل نطاق IFRS 9 (إلا إذا كانت جزءًا من مجموعة تخرد). والمخزون المعروض في النشاط الاعتيادي ليس محتفظًا به للبيع أبدًا — فذلك نشاط IAS 2 المعتاد. ومنذ ٢٠١٦ تسلك الأصول غير المتداولة المعدة للتوزيع على الملاك الآلة ذاتها بعبارة معدلة.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "IN: PPE, intangibles, goodwill (as part of a disposal group), investment property, biological assets, ROU assets, whole subsidiaries, and disposal groups mixing all of the above with current items", ar: "داخل النطاق: الممتلكات والأصول غير الملموسة والشهرة (ضمن مجموعة تخرد) والعقارات الاستثمارية والأصول الحيوية وأصول الحق في الاستخدام والشركات التابعة بأكملها، ومجموعات التخرد الخالطة بين كل ما سبق وبنود متداولة" },
        { en: "OUT: financial assets under IFRS 9, deferred tax assets under IAS 12, employee-benefit assets under IAS 19", ar: "خارج النطاق: الأصول المالية وفق IFRS 9، وأصول الضريبة المؤجلة وفق IAS 12، وأصول مزايا العاملين وفق IAS 19" },
        { en: "HELD FOR DISTRIBUTION TO OWNERS (IFRS 5 5A): non-current assets to be distributed to shareholders — apply the HFS machinery with 'sale' read as 'distribution'", ar: "محتفظ بها للتوزيع على الملاك (الفقرة 5A من IFRS 5): الأصول غير المتداولة التي ستوزع على المساهمين — طبق آلية البيع بقراءة «البيع» توزيعًا" },
        { en: "Acquired SOLELY with a view to resale: a subsidiary bought to flip goes HFS from DAY ONE if the criteria are met at acquisition (sale expected within 3 years)", ar: "المقتنى بقصد إعادة البيع وحده: تابعة اشتريت لتُباع تسقط محتفظًا بها للبيع منذ اليوم الأول إن تحققت الشروط عند الشراء (بيع متوقع خلال ٣ سنوات)" },
      ],
    },
    { kind: "h", text: { en: "Held-for-sale criteria — 'sale is highly probable'", ar: "شروط الاحتفظ للبيع — «البيع مرجح بشدة»" } },
    {
      kind: "tree",
      root: { en: "Non-current asset (or disposal group) → held for sale?", ar: "أصل غير متداول (أو مجموعة تخرد) ← محتفظ به للبيع؟" },
      branches: [
        {
          when: { en: "Management COMMITTED to a plan to sell · active marketing at a REASONABLE price (within fair value) · sale HIGHLY PROBABLE within 12 months of classification · unlikely the plan will be withdrawn or materially delayed", ar: "التزام الإدارة بخطة بيع · تسويق نشط بسعر معقول (ضمن القيمة العادلة) · البيع مرجح بشدة خلال ١٢ شهرًا · ندر التراجع أو التأخير الجوهري" },
          then: { en: "HELD FOR SALE — remeasure to the lower of carrying & FVLCTS, reclassify as CURRENT", ar: "محتفظ به للبيع — يعاد قياسه بالأدنى من الدفترية والعادلة ناقص التكاليف، ويعاد تبويبه متداولًا", red: true },
        },
        {
          when: { en: "The 12-month rule's exceptions: extension STILL allowed when the delay is caused by circumstances beyond the entity's control, the sale remains probable within a NEW 12-month window, and the plan is not significantly amended", ar: "استثناءات قاعدة الاثني عشر شهرًا: يمتد الأجل إذا سبب التأخير ظروفًا خارجة عن سيطرة المنشأة وبقي البيع مرجحًا خلال ١٢ شهرًا جديدة ولم تعدل الخطة جوهريًا" },
          then: { en: "Qualifies for EXTENSION — stay in HFS (a favourite nuance)", ar: "يمتد الأجل — يبقى محتفظًا به للبيع", red: true },
        },
        {
          when: { en: "Criteria lapse (plan withdrawn, market cools, 12-month rule broken)", ar: "سقوط الشروط (تراجع الخطة، فتور السوق، كسر قاعدة الـ١٢ شهرًا)" },
          then: { en: "RECLASSIFY out — resume the OLD depreciation over the remaining life PLUS a catch-up for the stopped period, at the LOWER of carrying & recoverable", ar: "أعد التبويب خارجًا — واستأنف الإهلاك القديم على العمر المتبقي مع لحاق المدة المتوقفة، بالأدنى من الدفترية والمسترد", red: true },
        },
        {
          when: { en: "Held for DISTRIBUTION to owners: the distribution must be highly probable within 12 months, the assets available for immediate distribution, and the distribution announced", ar: "محتفظ به للتوزيع على الملاك: التوزيع مرجح بشدة خلال ١٢ شهرًا والأصول متاحة للتوزيع الفوري والتوزيع معلن" },
          then: { en: "Same HFS treatment with 'distribution' language — one adapted rule, not a second standard", ar: "المعالجة ذاتها بعبارة «التوزيع» — قاعدة واحدة معدلة لا معيارًا ثانيًا", red: true },
        },
      ],
    },
    {
      kind: "steps",
      items: [
        { en: "1. Is management COMMITTED to a plan to sell (or distribute) — at the level that has the authority?", ar: "١. هل الالتزام بخطة البيع (أو التوزيع) قائم — وعند المستوى المخول بذلك؟" },
        { en: "2. Is the asset ACTIVE in the market at a price REASONABLE relative to fair value?", ar: "٢. هل الأصل معروض نشطًا بسعر معقول نسبة إلى القيمة العادلة؟" },
        { en: "3. Is the sale HIGHLY PROBABLE within 12 months of the classification date?", ar: "٣. هل البيع مرجح بشدة خلال ١٢ شهرًا من تاريخ التبويب؟" },
        { en: "4. Is it UNLIKELY that the plan will be withdrawn or significantly delayed?", ar: "٤. هل من غير المرجح سحب الخطة أو تأخيرها جوهريًا؟" },
        { en: "5. All four simultaneously at the reporting date → classify CURRENT as HFS; any one failing → stay in the going-concern rhythm", ar: "٥. الأربعة مجتمعة عند تاريخ التقرير ← بوّبه متداولًا محتفظًا به للبيع؛ وأخفاق أيٍّ منها ← ابقَ على إيقاع الاستمرارية" },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The 12-month clock is a REBUTTABLE discipline, not a hard wall. It can be extended when the delay comes from circumstances beyond the entity's control — a regulator's approval still pending, a buyer condition imposed at the outset — provided the sale stays probable within a NEW 12-month window from the extension date and the plan is not significantly amended. It can NEVER be met by an entity that is merely testing the market or holding an idle asset: a 'we would sell if somebody offered' posture is not a commitment, and idle capacity stays in PPE and keeps depreciating.",
        ar: "ساعة الاثني عشر شهرًا انضباط قابل للدحض لا سورًا صلبًا. ويمكن مدّها إذا جاء التأخير من ظروف خارجة عن سيطرة المنشأة — موافقة رقابية ما تزال معلقة، شرط مشترٍ فرض منذ البداية — ما دام البيع مرجحًا خلال ١٢ شهرًا جديدة من تاريخ التمديد دون تعديل جوهري للخطة. ولا يمكن تحقيقها أبدًا من منشأة تختبر السوق فحسب أو تحتفظ بأصل عاطل: فموقف «سنبيع لو عرض أحد» ليس التزامًا، والطاقة العاطلة تبقى في الممتلكات مواصلة الإهلاك.",
      },
    },
    { kind: "h", text: { en: "Measurement — before & at classification", ar: "القياس — قبل التصنيف وعنده" } },
    {
      kind: "steps",
      items: [
        { en: "STEP 1 — measure the disposal group per its OWN standards first: PPE carrying, inventory NRV, financial assets, provisions…", ar: "الخطوة ١ — قِس مجموعة التخرد بمعاييرها أولًا: الممتلكات، وصافي قيمة المخزون، والأدوات المالية، والمخصصات" },
        { en: "STEP 2 — then apply IFRS 9 to any ASSETS & LIABILITIES WITHIN the group that fall in IFRS 9's scope (interest-bearing loans of the sub measured at FVTPL if needed)", ar: "الخطوة ٢ — طبق IFRS 9 على الأصول والالتزامات المالية داخل المجموعة" },
        { en: "STEP 3 — recognise any ACCUMULATED impairment + IAS 36 loss required BEFORE the HFS write-down (goodwill of the group first)", ar: "الخطوة ٣ — اعترف بأي انخفاض مجمع وخسارة IAS 36 واجبة قبل انقاص البيع (وشهرة المجموعة أولًا)" },
        { en: "STEP 4 — the HFS WRITE-DOWN: carrying amount vs FAIR VALUE LESS COSTS TO SELL → charge the excess to impairment loss; FVLCTS replaces 'recoverable amount' in the IAS 36 test while the group is HFS", ar: "الخطوة ٤ — انقاص البيع: الدفترية مقابل القيمة العادلة ناقص تكاليف البيع ← الفارق خسارة انخفاض؛ والعادلة ناقص التكاليف تحل محل المبلغ القابل للاسترداد في اختبار IAS 36 ما دامت المجموعة معروضة للبيع" },
        { en: "STEP 5 — NEW income/expense of the group still goes to P&L (depreciation stopped; operations continue); later FVLCTS INCREASES → reversal of the write-down, capped", ar: "الخطوة ٥ — إيراد/مصروف المجموعة الجديد يستمر بالأرباح (الإهلاك متوقف والعمليات مستمرة)؛ وكل زيادة لاحقة في العادلة ناقص التكاليف ← رد للانقاص بسقف" },
      ],
    },
    {
      kind: "formula",
      title: { en: "The FVLCTS write-down & its reversal cap", ar: "انقاص العادلة ناقص التكاليف وسقف رده" },
      lines: [
        { en: "Write-down at classification = carrying amount − FVLCTS (only when positive)", ar: "الانقاص عند التبويب = القيمة الدفترية − العادلة ناقص التكاليف (فقط إذا كان موجبًا)" },
        { en: "Reversal cap = the carrying amount that WOULD have applied (net of the depreciation or amortisation that was never charged during HFS)", ar: "سقف الرد = القيمة الدفترية التي كانت ستطبق (صافي الإهلاك أو الاستنفاد الذي لم يحمَّل قط خلال فترة العرض للبيع)" },
        { en: "Reversal = min(new FVLCTS − written-down carrying, cap) — and goodwill impaired under IAS 36 NEVER comes back", ar: "الرد = الأدنى من (العادلة الجديدة ناقص التكاليف − الدفترية المنقوصة، السقف) — والشهرة المنقوصة وفق IAS 36 لا تعود أبدًا" },
        { en: "Proceeds above the final carrying = a GAIN ON DISPOSAL — not a 'reversal'", ar: "المتحصلات فوق الدفترية النهائية = ربح تخرد — لا «ردًا»" },
      ],
    },
    {
      kind: "example",
      title: { en: "Held-for-sale write-down — the numbers walk", ar: "انقاص المحتفظ به للبيع — الأرقام تسير" },
      lines: [
        { en: "Disposal group classified on 30 Jun: PPE 380 · goodwill 60 · net working capital 60 → carrying 500", ar: "مجموعة تخرد بُوبت في ٣٠ يونيو: ممتلكات ٣٨٠ · شهرة ٦٠ · رأس مال تشغيلي صافٍ ٦٠ ← الدفترية ٥٠٠" },
        { en: "FVLCTS at classification 420 → write-down 80: goodwill eats the FIRST 60, PPE the remaining 20", ar: "العادلة ناقص التكاليف عند التبويب ٤٢٠ ← انقاص ٨٠: تستوعب الشهرة أول ٦٠ والممتلكات الـ٢٠ الباقية" },
        { en: "Year-end: FVLCTS recovers to 465; depreciation that WOULD have run was 20 → cap = 500 − 20 = 480 → reverse to 465 (gain 45)", ar: "نهاية السنة: تتعافى العادلة ناقص التكاليف إلى ٤٦٥؛ والإهلاك الذي كان سيجري ٢٠ ← السقف = ٥٠٠ − ٢٠ = ٤٨٠ ← يرد إلى ٤٦٥ (مكسب ٤٥)" },
        { en: "Sold in March for 470 → gain on disposal 5 (and the sale ends the HFS chapter)", ar: "بيعت في مارس مقابل ٤٧٠ ← ربح تخرد ٥ (وبالبيع تُختم فصيلة العرض للبيع)" },
      ],
    },
    {
      kind: "journal",
      title: { en: "Classification & write-down — depreciation stops", ar: "التبويب والانقاص — الإهلاك يتوقف" },
      rows: [
        { dr: { en: "Assets held for sale 500", ar: "أصول محتفظ بها للبيع ٥٠٠" }, cr: { en: "PPE 380 · goodwill 60 · working-capital items 60", ar: "ممتلكات ٣٨٠ · شهرة ٦٠ · بنود رأس المال التشغيلي ٦٠" }, red: true },
        { dr: { en: "Impairment loss (write-down to FVLCTS) 80", ar: "خسارة انخفاض (حتى العادلة ناقص التكاليف) ٨٠" }, cr: { en: "Assets held for sale 80 — of which goodwill 60 first, PPE 20", ar: "أصول محتفظ بها للبيع ٨٠ — منها الشهرة ٦٠ أولًا ثم الممتلكات ٢٠" }, red: true },
        { cr: { en: "NO depreciation from the classification date until sold — the whole point of the standard", ar: "لا إهلاك من تاريخ التبويب حتى البيع — وهذا جوهر المعيار" }, red: true },
      ],
    },
    {
      kind: "journal",
      title: { en: "Reversal, then sale — and the single-line handover", ar: "الرد ثم البيع — وتسليم السطر الواحد" },
      rows: [
        { dr: { en: "Assets held for sale 45", ar: "أصول محتفظ بها للبيع ٤٥" }, cr: { en: "Reversal of impairment (write-down reversal — P&L) 45", ar: "رد انخفاض القيمة (رد الانقاص — بالأرباح) ٤٥" }, red: true },
        { cr: { en: "Cap check: 465 ≤ 480 (the carrying that would have applied net of skipped depreciation 20) — reversal stands in full", ar: "تحقق السقف: ٤٦٥ ≤ ٤٨٠ (الدفترية التي كانت ستطبق صافي الإهلاك المتوقف ٢٠) — الرد يقوم كاملًا" }, red: true },
        { dr: { en: "Cash 470", ar: "نقد ٤٧٠" }, cr: { en: "Assets held for sale 465", ar: "أصول محتفظ بها للبيع ٤٦٥" } },
        { cr: { en: "Gain on disposal 5 = 470 − 465 (P&L, or the discontinued line if it qualifies)", ar: "ربح التخرد ٥ = ٤٧٠ − ٤٦٥ (بالأرباح أو في سطر المتوقفة إن تأهلت)" }, red: true },
      ],
    },
    { kind: "h", text: { en: "Impairment BEFORE classification — IAS 36 runs first", ar: "الانخفاض قبل التبويب — IAS 36 يجري أولًا" } },
    {
      kind: "p",
      text: {
        en: "The HFS write-down is a measurement floor, not a second impairment regime. Before it bites, the disposal group must be measured per its own standards — which for goodwill-carrying groups means an IAS 36 loss allocated under the normal rules: goodwill first, then the other assets pro rata, each asset floored at the highest of its FVLCTS, value in use and fair value less costs of disposal (in the IAS 36 sense). Only then does the group-level FVLCTS comparison produce any residual write-down. After classification, IFRS 5's own model takes over: the recoverable amount for HFS assets is FVLCTS, and subsequent increases reverse the write-down within the cap — except goodwill, which never returns once impaired under IAS 36.",
        ar: "انقاص البيع أرضية قياس لا نظامًا ثانيًا للانخفاض. وقبل أن يعض، يجب قياس مجموعة التخرد بمعاييرها — وما ذلك للحامل شهرةً إلا خسارة IAS 36 موزعة بالقواعد المعتادة: الشهرة أولًا ثم بقية الأصول بالتناسب، وكل أصل لا ينقص تحت الأعلى من عادلة بيعه ناقص تكاليفها وقيمته الاستخدامية وعادته مخصومة التكاليف (بمعنى IAS 36). وعندئذ فقط ينتج مقارن العادلة ناقص التكاليف على مستوى المجموعة أي انقاص متبقٍ. وبعد التبويب يتولى نموذج IFRS 5 ذاته: فالمبلغ القابل للاسترداد للأصول المعروضة للبيع هو العادلة ناقص التكاليف، والزيادات اللاحقة ترد الانقاص داخل السقف — إلا الشهرة فلا تعود ما أن تنقص وفق IAS 36.",
      },
    },
    {
      kind: "journal",
      title: { en: "Impairment inside a disposal group (IAS 36 machinery, pre-HFS)", ar: "انخفاض داخل مجموعة تخرد (آلية IAS 36 قبل العرض للبيع)" },
      rows: [
        { dr: { en: "Impairment loss 80", ar: "خسارة انخفاض ٨٠" }, cr: { en: "Goodwill (the group's own goodwill goes first) 60", ar: "الشهرة (شهرة المجموعة أولًا) ٦٠" }, red: true },
        { dr: { en: "Impairment loss 80 (continued)", ar: "خسارة انخفاض ٨٠ (تابع)" }, cr: { en: "PPE (residual, pro rata, never below its own FVLCTS floor) 20", ar: "الممتلكات (المتبقي بالتناسب، ولا تنقص تحت أرضية عادلتها ناقص التكاليف) ٢٠" }, red: true },
        { cr: { en: "Then reclassify the WRITTEN-DOWN group to HFS and apply the FVLCTS test — the two losses must never be double-counted", ar: "ثم أعِد تبويب المجموعة المنقوصة إلى معروضة للبيع وطبق اختبار العادلة ناقص التكاليف — ولا تعد الخسارتان مرتين أبدًا" } },
      ],
    },
    { kind: "h", text: { en: "Presentation in the SoFP & the continuing operations", ar: "العرض في الميزانية والعمليات المستمرة" } },
    {
      kind: "p",
      text: {
        en: "The moment classification happens, the SoFP splits: HFS assets and HFS liabilities sit in their own CURRENT captions — separate lines, NO offset between assets and liabilities of the group. Depreciation and amortisation stop, but the group keeps running: its revenue, expenses, and the interest on its liabilities continue into profit or loss (or into the discontinued line once that label applies). Balance-sheet presentation does not wait for the sale — the asset is already committed to the exit, so users see it as a current economic resource regardless of its physical life.",
        ar: "بمجرد التبويب تنشطر الميزانية: أصول والتزامات العرض للبيع تقعد في عناوينها المتداولة الخاصة — سطور منفصلة بلا مقاصة بين أصول المجموعة والتزاماتها. ويتوقف الإهلاك والاستنفاد لكن المجموعة تواصل العمل: إيرادها ومصروفها وفوائد التزاماتها تستمر في الأرباح أو الخسائر (أو في سطر المتوقفة متى لصق الوصف). وعرض الميزانية لا ينتظر البيع — فالأصل ملتزم بالخروج أصلًا، فيراه المستخدم موردًا اقتصاديًا متداولًا أيًّا كان عمره المادي.",
      },
    },
    {
      kind: "list",
      items: [
        { en: "SoFP: 'assets held for sale' and 'liabilities held for sale' — separate CURRENT captions; major classes or a single line with a note breakdown", ar: "الميزانية: «أصول محتفظ بها للبيع» و«التزامات محتفظ بها للبيع» — عنوانان متداولان منفصلان؛ بالفئات الرئيسية أو سطر واحد مع تحليل بالإيضاحات" },
        { en: "Continuing rhythm: no depreciation, no amortisation, no IAS 36 re-estimates under the old model — but operating results keep flowing", ar: "إيقاع العرض: لا إهلاك ولا استنفاد ولا إعادة تقدير IAS 36 بالنموذج القديم — لكن نتائج التشغيل تواصل الجريان" },
        { en: "Comparatives: the prior-year SoFP is NOT reclassified for HFS (only the discontinued P&L line restates)", ar: "المقارنات: لا تعاد صياغة ميزانية السنة السابقة للعرض للبيع (إنما يعاد عرض سطر الأرباح للمتوقفة وحده)" },
        { en: "A right-of-use asset sold TOGETHER with its lease: the lease liability joins the disposal group when the lease transfers to the buyer (IFRS 16 interplay)", ar: "أصل الحق في الاستخدام المبوع مع إيجاره: ينضم التزام الإيجار إلى مجموعة التخرد حين ينتقل الإيجار إلى المشتري (تفاعل IFRS 16)" },
      ],
    },
    { kind: "h", text: { en: "The reclassification-out & completion tree", ar: "شجرة إعادة التبويب خارجًا وإتمام البيع" } },
    {
      kind: "tree",
      root: { en: "An asset sits in HFS — what happens next?", ar: "أصل داخل العرض للبيع — ماذا بعد؟" },
      branches: [
        {
          when: { en: "The sale COMPLETES (or the distribution happens)", ar: "يكتمل البيع (أو يجري التوزيع)" },
          then: { en: "Derecognise the HFS carrying; proceeds − carrying = gain/loss on disposal (P&L, or the discontinued line if the component qualifies)", ar: "استبعد دفترية المعروض؛ والمتحصلات − الدفترية = ربح/خسارة التخرد (بالأرباح أو بسطر المتوقفة إن تأهل المكوّن)", red: true },
        },
        {
          when: { en: "The criteria LAPSE before the sale", ar: "تسقط الشروط قبل البيع" },
          then: { en: "Reclassify back to non-current; resume depreciation over the remaining life + a CATCH-UP for the stopped period; return at the LOWER of carrying and recoverable", ar: "أعد التبويب غير متداول؛ واستأنف الإهلاك على العمر المتبقي مع لحاق المدة المتوقفة؛ وعُد بالأدنى من الدفترية والمسترد", red: true },
        },
        {
          when: { en: "Still HFS at the reporting date, and the FVLCTS has moved", ar: "ما يزال معروضًا عند تاريخ التقرير وتحركت العادلة ناقص التكاليف" },
          then: { en: "Down → further write-down to the new FVLCTS; up → reversal capped at the would-have-been carrying — the only two directions IFRS 5 knows", ar: "هبوط ← انقاص إضافي حتى العادلة الجديدة؛ وارتفاع ← رد مسقوف عند الدفترية الافتراضية — فهذان الاتجاهان الوحيدان اللذان يعرفهما IFRS 5", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "The catch-up mechanics deserve their own minute. When criteria lapse, the asset returns to its old home carrying what it carried when it left, adjusted for the impairment events that actually happened — but the depreciation it skipped is now charged IN FULL in the reclassification period, and the resulting carrying is tested against the recoverable amount under the old standard (IAS 36 for PPE). The bookkeeping message: HFS paused the going-concern rhythm, it never deleted it.",
        ar: "تستحق ميكانيكا اللحق دقيقة خاصة بها. عند سقوط الشروط يعود الأصل إلى موطنه القديم حاملًا ما حمله حين غادر، معدولًا لأحداث الانخفاض التي وقعت فعلًا — لكن الإهلاك الذي توقف يحمّل الآن كاملًا في فترة إعادة التبويب، وتختبر الدفترية الناتجة مقابل المبلغ المسترد وفق المعيار القديم (IAS 36 للممتلكات). ورسالة القيد: العرض للبيع أوقف إيقاع الاستمرارية ولم يحذفه قط.",
      },
    },
    { kind: "h", text: { en: "Discontinued operations — the pull-out", ar: "العمليات المتوقفة — الانتزاع" } },
    {
      kind: "tree",
      root: { en: "Component (an operation and cash flow whose results are clearly distinguishable)", ar: "مكوّن (تشغيل وتدفقات نتائجه قابلة للتمييز بوضوح)" },
      branches: [
        {
          when: { en: "Represents a separate MAJOR line of business or geographical area of operations · is part of a single co-ordinated plan to dispose of such a line or area · is a subsidiary acquired EXCLUSIVELY with a view to resale · is a step acquisition or loss-of-control event", ar: "يمثل نشاطًا رئيسيًا أو منطقة جغرافية مستقلة · أو جزءًا من خطة منسقة واحدة للتخرد منها · أو تابعة مقتناة لإعادة البيع حصرًا · أو استحواذًا متدرجًا أو فقد سيطرة" },
          then: { en: "DISCONTINUED OPERATION — one net-of-tax line on the face of P/L for ALL periods presented, comparatives restated", ar: "عملية متوقفة — سطر واحد صافي الضريبة على وجه الأرباح لكل الفترات، وتعاد صياغة المقارنات", red: true },
        },
        {
          when: { en: "It is HFS or abandoned (operations ceased permanently and completely)", ar: "محتفظ به للبيع أو متخلى عنه (توقفت العمليات نهائيًا وكليًا)" },
          then: { en: "Also discontinued when the component test passes — abandonment qualifies when the component CEASES", ar: "متوقفة أيضًا متى اجتاز اختبار المكوّن — والتخلي يؤهل عند توقف المكوّن", red: true },
        },
        {
          when: { en: "Marginal, non-major lines, a shift to internal use (owner-occupation begins), or a market exit that slowly shrinks without a co-ordinated plan", ar: "أنشطة هامشية غير رئيسية، أو تحول للاستخدام الذاتي، أو خروج تدريجي من السوق بلا خطة منسقة" },
          then: { en: "NOT discontinued — stays in continuing operations (but may still be HFS if the criteria are met)", ar: "غير متوقفة — تبقى ضمن المستمرة (وقد تظل محتفظة بها للبيع إن تحققت الشروط)", red: true },
        },
      ],
    },
    {
      kind: "p",
      text: {
        en: "Use the CURRENT criteria: a discontinued operation is a COMPONENT that has been disposed of or is held for sale (or abandoned) and either represents a separate major line of business or geographical area, is part of a single co-ordinated plan to dispose of such a line or area, or is a subsidiary acquired exclusively with a view to resale. The 2016 amendment swept away the old 'strategic shift' gloss: no question anymore of whether the exit is dramatic enough — the component test decides.",
        ar: "استخدم المعايير الحالية: العملية المتوقفة مكوّن خُرد أو صار محتفظًا به للبيع (أو تُخلي عنه) ويمثل إما نشاطًا رئيسيًا مستقلًا أو منطقة جغرافية مستقلة، أو جزءًا من خطة منسقة واحدة للتخرد من نشاط أو منطقة كذلك، أو تابعة مقتناة لإعادة البيع حصرًا. ومسحت تعديلات ٢٠١٦ صبغة «التحول الاستراتيجي» القديمة: فلا سؤال بعد الآن عما إذا كان الخروج مذهلًا بما يكفي — اختبار المكوّن هو الحكم.",
      },
    },
    {
      kind: "p",
      text: {
        en: "Presentation discipline: the discontinued result includes ONLY the component's post-tax revenue and expenses, impairment/reversal, and gain/loss on disposal — presented as a SINGLE line 'profit after tax from discontinued operations' (analysis in the notes: revenue, expenses, pre-tax profit, tax, EPS). The balance-sheet split: HFS assets & liabilities in SEPARATE current lines — no offset. Cash flows of discontinued operations remain inside their categories unless they can be separately identified (disclosure encouraged). And the P/L history restates: every period presented tells the story of the SURVIVING business, with the discontinued result parked in one line below.",
        ar: "انضباط العرض: نتيجة المتوقفة تضم حصرًا إيرادات ومصروفات المكوّن بعد الضريبة وانخفاضاته وردوده وربح/خسارة تخرده — سطرًا واحدًا «الربح بعد الضريبة من عمليات متوقفة» (بتحليل بالإيضاحات: إيراد، مصروف، ربح قبل الضريبة، ضريبة، ربح السهم). وفي الميزانية: أصول والتزامات المحتفظ للبيع في سطرين متداولين منفصلين دون مقاصة. وتدفقات المتوقفة تبقى في فئاتها ما لم يمكن فصلها (والإفصاح مستحسن). ويُعاد عرض تاريخ الأرباح: كل فترة معروضة تحكي قصة الأعمال الباقية، ونتيجة المتوقفة مكتنزة في سطر أسفلها.",
      },
    },
    {
      kind: "journal",
      title: { en: "Closing the year into the discontinued line (net of tax)", ar: "إقفال السنة في سطر المتوقفة (صافي الضريبة)" },
      rows: [
        { dr: { en: "Discontinued revenue 800", ar: "إيراد المتوقفة ٨٠٠" }, cr: { en: "Discontinued expenses (operating) 600", ar: "مصروفات المتوقفة (تشغيلية) ٦٠٠" } },
        { dr: { en: "Discontinued impairment + write-downs 120", ar: "انخفاضات وانقاصات المتوقفة ١٢٠" }, cr: { en: "Gain on disposal 100", ar: "ربح التخرد ١٠٠" } },
        { dr: { en: "Tax on the discontinued result 45", ar: "ضريبة نتيجة المتوقفة ٤٥" }, cr: { en: "Profit after tax from DISCONTINUED operations 135 — ONE line below continuing profit", ar: "الربح بعد الضريبة من عمليات متوقفة ١٣٥ — سطر واحد أسفل ربح المستمرة" }, red: true },
      ],
    },
    {
      kind: "example",
      title: { en: "One-line P/L build", ar: "بناء السطر الواحد" },
      lines: [
        { en: "Division sold in October: revenue 800 · expenses 600 · impairment at HFS date 120 · tax rate 25% · profit on disposal 100 (pre-tax)", ar: "قسم بيع في أكتوبر: إيراد ٨٠٠ · مصروف ٦٠٠ · انخفاض عند التصنيف ١٢٠ · ضريبة ٢٥٪ · ربح التخرد ١٠٠ قبل الضريبة" },
        { en: "Pre-tax discontinued result = (800 − 600) − 120 + 100 = 180", ar: "النتيجة قبل الضريبة = (٨٠٠ − ٦٠٠) − ١٢٠ + ١٠٠ = ١٨٠" },
        { en: "Post-tax single line = 180 × 75% = 135 — 'profit after tax from discontinued operations'", ar: "السطر الواحد بعد الضريبة = ١٨٠ × ٧٥٪ = ١٣٥ — «الربح بعد الضريبة من عمليات متوقفة»" },
        { en: "EPS: basic & diluted recomputed for continuing AND discontinued lines separately (IAS 33)", ar: "ربح السهم: يعاد حسابه للخط المستمر والمتوقف منفصلين (IAS 33)" },
      ],
    },
    { kind: "h", text: { en: "EPS & comparatives — the history restates", ar: "ربح السهم والمقارنات — يعاد عرض التاريخ" } },
    {
      kind: "p",
      text: {
        en: "A discontinued classification ripples through every presented period. The comparative P/L is restated so the discontinued component leaves continuing operations in both columns; IAS 33 recomputes basic and diluted EPS for continuing and discontinued separately, per period. The SoFP comparatives stay put (no HFS restatement of last year's balance sheet), but the notes carry the discontinued component's revenue, expenses, pre-tax result, tax, and cash flows for every period shown — the restated history is the disclosure.",
        ar: "يلتصق وصف المتوقفة بكل فترة معروضة. تُعاد صياغة قائمة الأرباح المقارنة ليخرج المكوّن المتوقف من العمليات المستمرة في العمودين؛ ويعيد IAS 33 حساب ربح السهم الأساسي والمخفف للمستمرة والمتوقفة منفصلًا لكل فترة. وتبقى مقارنات الميزانية كما هي (لا إعادة عرض للبيع لميزانية العام الماضي)، لكن الإيضاحات تحمل إيراد المكوّن المتوقف ومصروفه ونتيجته قبل الضريبة وضريبته وتدفقاته لكل فترة معروضة — فالتاريخ المعاد عرضه هو الإفصاح.",
      },
    },
    { kind: "h", text: { en: "Subsidiaries & partial stakes", ar: "الشركات التابعة والحصص الجزئية" } },
    {
      kind: "list",
      items: [
        { en: "A subsidiary in a disposal group: consolidated UNTIL control passes (IFRS 10 loss-of-control rules) — then the whole exit gain and the FV-remeasurement of any RETAINED interest land in discontinued operations", ar: "التابعة داخل مجموعة تخرد: تبقى مجمعة حتى تنتقل السيطرة — ثم يقع كامل ربح الخروج وإعادة قياس الحصة المحتفظ بها في المتوقفة" },
        { en: "Loss of control but a stake RETAINED (an associate now): the retained interest is NOT part of the disposal group — it stays under IFRS 9/IAS 28", ar: "فقد السيطرة مع الاحتفاظ بحصة (زميلة الآن): الحصة ليست من مجموعة التخرد — تبقى وفق IFRS 9/IAS 28" },
        { en: "Non-current assets of the group: even if some will be KEPT (a plant the buyer will lease back to you), only the DISPOSING component's assets go HFS", ar: "أصول غير متداولة بالمجموعة: حتى ما سيُستبقى (مصنع سيعيد المشتري تأجيره لك) — فقط أصول المكوّن المتخرد تنتقل للبيع" },
        { en: "NCI in a discontinued subsidiary: its share of the component's result is part of the discontinued line, not of profit attributable to owners of the parent", ar: "الحصة غير المسيطرة في تابعة متوقفة: نصيبها من نتيجة المكوّن ضمن سطر المتوقفة لا ضمن ربح مالكي الأم" },
      ],
    },
    { kind: "h", text: { en: "Disclosure essentials", ar: "أساسيات الإفصاح" } },
    {
      kind: "list",
      items: [
        { en: "For HFS: a description, the carrying amounts by class, the FVLCTS, and the period & amounts of revenues/expenses/impairments (notes)", ar: "للمحتفظ به للبيع: الوصف والقيم الدفترية بالفئات والعادلة ناقص التكاليف وإيرادات ومصروفات وانخفاضات الفترة" },
        { en: "For discontinued operations: the single-line analysis (revenue, expenses, pre-tax, tax, EPS), the gain/loss on disposal and its tax, the cash flows, and any CONTINUING INVOLVEMENT (guarantees, leasebacks, retained interests) by type & amount", ar: "للمتوقفة: تحليل السطر (إيراد، مصروف، قبل الضريبة، ضريبة، ربح سهم)، وربح/خسارة التخرد وضريبتها، والتدفقات، وأي تورط مستمر (ضمانات، إيجار راجع، حصص) نوعًا ومقدارًا" },
        { en: "Restrictions on sale proceeds & the timing/amounts of expected proceeds; impairment charges & reversals; segment of the HFS item (IFRS 8)", ar: "قيود المتحصلات وتوقيتها ومقاديرها المتوقعة؛ وخسائر الانخفاض وردوده؛ وقطاع البند المعروض للبيع (IFRS 8)" },
        { en: "For held-for-distribution assets: the same adapted story — description, carrying, FVLCTS, and the distribution plan", ar: "للأصول المعدة للتوزيع: القصة ذاتها معدلة — الوصف والدفترية والعادلة ناقص التكاليف وخطة التوزيع" },
      ],
    },
    { kind: "h", text: { en: "The classic exam traps", ar: "فخاخ الامتحان الكلاسيكية" } },
    {
      kind: "list",
      items: [
        { en: "Depreciation STOPS at classification — candidates who keep depreciating 'because the asset is still used' give away the easiest mark", ar: "الإهلاك يتوقف عند التبويب — ومن يواصل الإهلاك «لأن الأصل ما يزال مستخدمًا» يهدي أسهل درجة" },
        { en: "The write-down reversal is ALLOWED (unlike IAS 36 goodwill) but capped at the carrying that would have applied net of skipped depreciation — never above it", ar: "رد الانقاص جائز (بخلاف شهرة IAS 36) لكنه مسقوف عند الدفترية التي كانت ستطبق صافي الإهلاك المتوقف — ولا يتجاوزها أبدًا" },
        { en: "The discontinued line is NET OF TAX and single — mixing gross numbers or adding it to continuing profit loses the presentation mark", ar: "سطر المتوقفة صافي الضريبة ومفرد — وخلط الأرقام الإجمالية أو ضمه لربح المستمرة يهدر درجة العرض" },
        { en: "HFS is CURRENT in the SoFP even though the asset is 'non-current' by nature — the exit clock, not the physical life, drives classification", ar: "المعروض للبيع متداول في الميزانية وإن كان الأصل «غير متداول» بطبيعته — فساعة الخروج لا العمر المادي هي التي تقود التبويب" },
        { en: "Comparatives: P/L restated, SoFP NOT — writing last year's balance sheet with HFS captions is a classic slip", ar: "المقارنات: تعاد صياغة الأرباح لا الميزانية — وكتابة ميزانية العام الماضي بعناوين العرض للبيع زلة كلاسيكية" },
        { en: "Inventories sold in the ordinary course are NOT HFS — IFRS 5 is for exits, not for trading stock", ar: "المخزون المباع في المعتاد ليس معروضًا للبيع — فـIFRS 5 للمخارج لا لمخزون المتاجرة" },
      ],
    },
    {
      kind: "tip",
      text: {
        en: "The FVLCTS floor: if sale proceeds later EXCEED the written-down amount, the extra is a GAIN on disposal — not a 'reversal'; IFRS 5 reversals only restore a WRITE-DOWN made under IFRS 5 itself, and never for goodwill written down via IAS 36.",
        ar: "حد العادلة ناقص التكاليف: إذا جاءت المتحصلات أعلى من المنقوص فالفارق ربح تخرد — لا «ردًا»؛ فالردود تخص انقاصات IFRS 5 ذاتها فقط، ولا ترد شهرة أنقصها IAS 36.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "A component that qualifies as discontinued is reclassified in the COMPARATIVES too — the P/L history must tell the story of the SURVIVING business; forgetting to restate last year is a classic exam slip.",
        ar: "المكوّن المتوقف يعاد تبويبه في المقارنات أيضًا — فتاريخ الأرباح يجب أن يحكي قصة الأعمال الباقية؛ ونسيان إعادة عرض السنة الماضية زلة امتحانية كلاسيكية.",
      },
    },
    {
      kind: "tip",
      text: {
        en: "When HFS criteria LAPSE, the catch-up lands at once: depreciation that would have been charged during the HFS period is booked in the year of reclassification-out, and the asset returns at the LOWER of carrying and recoverable — write both moves into the answer.",
        ar: "عند سقوط شروط العرض للبيع يهبط اللحق فورًا: يثبت إهلاك ما كان سيحمَّل خلال فترة العرض في سنة إعادة التبويب خارجًا، ويعود الأصل بالأدنى من الدفترية والمسترد — اكتب الحركتين معًا في الجواب.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Assets destroyed or stolen are NOT 'abandonment' in the accounting sense — abandonment is a voluntary cessation; a casualty is an impairment or a subsequent event.",
        ar: "الأصول المتلفة أو المسروقة ليست «تخليًا» بالمعنى المحاسبي — فالتخلي توقف إرادي؛ والفاقد يعالج انخفاض قيمة أو حدثًا لاحقًا.",
      },
    },
    {
      kind: "note",
      text: {
        en: "Not every sale is a discontinued operation: one plant sold while the product line continues is HFS only — 'discontinued' needs a COMPONENT (a major line, a geographical area, a co-ordinated plan).",
        ar: "ليس كل بيع عملية متوقفة: مصنع يُباع وخط المنتج مواصل يعالج عرضًا للبيع فقط — فـ«التوقف» يستلزم مكوّنًا (نشاط رئيسي، منطقة جغرافية، خطة منسقة).",
      },
    },
    { kind: "h", text: { en: "Transition & effective dates", ar: "الانتقال وتواريخ السريان" } },
    {
      kind: "p",
      text: {
        en: "IFRS 5 became effective 1 Jan 2005, replacing the old IAS 35 net presentation for discontinued operations. The September 2016 amendment (effective 1 Jan 2017) clarified the guidance — removing the strategic-shift language so the component test alone decides — and its cycle also settled the held-for-distribution route for assets being spun off to owners. The 2020 annual improvements tidied the definition of 'costs to sell'. Apply the current text and cite none of the history unless asked.",
        ar: "سريان IFRS 5 من ١ يناير ٢٠٠٥، محل العرض الصافي القديم في IAS 35 للعمليات المتوقفة. وتعديل سبتمبر ٢٠١٦ (الساري من ١ يناير ٢٠١٧) وضّح الإرشاد — بإزالة لغة التحول الاستراتيجي فيحسم اختبار المكوّن وحده — واستقرت في دورته كذلك معالجة الأصول المعدة للتوزيع على الملاك. ورتبت دورة التحسينات ٢٠٢٠ تعريف «تكاليف البيع». طبّق النص الحالي ولا تستشهد بالتاريخ إلا إن طُلب.",
      },
    },
    { kind: "h", text: { en: "Interactions with the rest of the corpus", ar: "التقاطعات مع بقية المعايير" } },
    {
      kind: "list",
      items: [
        { en: "IAS 36 — impairment machinery runs BEFORE the HFS write-down; FVLCTS then replaces the recoverable amount while the group is HFS; reversals follow IFRS 5's cap", ar: "IAS 36 — آلية الانخفاض تجري قبل انقاص البيع؛ ثم تحل العادلة ناقص التكاليف محل المبلغ المسترد ما دامت المجموعة معروضة؛ والردود تتبع سقف IFRS 5" },
        { en: "IFRS 16 — a right-of-use asset in a disposal group carries its lease liability when the lease transfers with the asset; a standalone HFS ROU asset keeps the lease liability outside the group", ar: "IFRS 16 — أصل الحق في الاستخدام داخل مجموعة تخرد يحمل التزام إيجاره حين ينتقل الإيجار مع الأصل؛ وأصل الاستخدام المنفرد يبقي التزام الإيجار خارج المجموعة" },
        { en: "IFRS 10 / IFRS 3 — a subsidiary in the group consolidates until control passes; the loss-of-control cascade (remeasure retained interest at FV, recycle CTA) fires at the exit", ar: "IFRS 10 / IFRS 3 — التابعة بالمجموعة تجمع حتى تنتقل السيطرة؛ وينطلق تسلسل فقد السيطرة (إعادة قياس الحصة المحتفظة بالعادلة وتدوير فروق الترجمة) عند الخروج" },
        { en: "IAS 33 — EPS restated for continuing and discontinued lines, all periods presented", ar: "IAS 33 — يعاد حساب ربح السهم للخط المستمر والمتوقف لكل الفترات المعروضة" },
        { en: "IFRS 8 — the HFS item's segment and the discontinued component's segment results are disclosed", ar: "IFRS 8 — يفصح عن قطاع البند المعروض للبيع ونتائج قطاع المكوّن المتوقف" },
        { en: "IFRS 1 — first-time adopters may apply IFRS 5 measurement from the transition date with criteria assessed at that date", ar: "IFRS 1 — يجوز للمتبنين الأوائل تطبيق قياس IFRS 5 من تاريخ الانتقال بتقييم الشروط عند ذلك التاريخ" },
      ],
    },
  ],
}
