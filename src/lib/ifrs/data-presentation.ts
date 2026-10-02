/**
 * v30 — IFRS Summaries · Presentation & Policies group:
 * IAS 1, IAS 7, IAS 8, IAS 10, IFRS 1, IAS 33, IAS 34, IAS 24.
 */

import type { Standard } from "./types"

export const PRESENTATION_STANDARDS: Standard[] = [
  {
    code: "IAS 1",
    title: { en: "Presentation of Financial Statements", ar: "عرض القوائم المالية" },
    topic: "presentation",
    effective: { en: "Effective 1 Jan 2010 · revised for IFRS 18 (see note)", ar: "سارٍ من ١ يناير ٢٠١٠ · معدل لحساب IFRS 18 (انظر الملاحظة)" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "The base standard for preparing a complete set of general purpose financial statements: fair presentation, going concern, accrual accounting, materiality, aggregation, offsetting, frequency, comparatives and consistency.",
          ar: "المعيار الأساسي لإعداد مجموعة كاملة من القوائم المالية للأغراض العامة: العرض السليم، والاستمرارية، والأساس الاستحقاقي، والأهمية النسبية، والتجميع، والمقاصة، والدورية، والفترات المقارنة، والثبات.",
        },
      },
      { kind: "h", text: { en: "The complete set", ar: "المجموعة الكاملة" } },
      {
        kind: "list",
        items: [
          { en: "Statement of financial position (SOFP) — current/non-current split unless a liquidity presentation is more relevant", ar: "قائمة المركز المالي — فصل متداول/غير متداول إلا إذا كان عرض السيولة أنسب" },
          { en: "Statement of profit or loss and OCI (single or two statements) + the statement of changes in equity (SOCE)", ar: "قائمة الأرباح أو الخسائر والدخل الشامل (م واحدة أو اثنتان) + قائمة التغيرات في حقوق الملكية" },
          { en: "Statement of cash flows (IAS 7) + Notes (accounting policies, estimates, detail)", ar: "قائمة التدفقات النقدية (IAS 7) + الإيضاحات (السياسات والتقديرات والتفاصيل)" },
          { en: "Comparative information for the PREVIOUS period for everything shown (and a third SOFP when a reclassification hits equity or a restatement moves opening balances)", ar: "معلومات مقارنة للفترة السابقة لكل معروض (ومركز مالي ثالث عند إعادة تبويب تمس حقوق الملكية أو تعديل بأثر رجعي)" },
        ],
      },
      {
        kind: "tree",
        root: { en: "Fair presentation", ar: "العرض السليم" },
        branches: [
          {
            when: { en: "Applies IFRS Standards, including disclosure requirements, AND complies with them in ALL material respects", ar: "يطبق معايير IFRS بمتطلبات إفصاحها ويلتزم بها في جميع الجوانب الجوهرية" },
            then: { en: "COMPLIANCE framework — state it EXPLICITLY and UNRESERVEDLY in the notes", ar: "إطار التزام — يُصرح به صراحة ودون تحفظ في الإيضاحات", red: true },
          },
          {
            when: { en: "A specific IFRS requirement is insufficient to understand the transaction", ar: "متطلب معين في IFRS غير كافٍ لفهم المعاملة" },
            then: { en: "Add EXTRA disclosure — but never override the standard", ar: "أضف إفصاحًا إضافيًا — دون تجاوز المعيار أبدًا" },
          },
        ],
      },
      { kind: "h", text: { en: "The ground rules", ar: "القواعد الأساسية" } },
      {
        kind: "list",
        items: [
          { en: "Going concern — assessments cover at least 12 months from the reporting date; material uncertainties → disclose prominently", ar: "الاستمرارية — تغطي ١٢ شهرًا على الأقل من تاريخ التقرير؛ وعدم التأكد الجوهري يُفصح عنه بشكل بارز" },
          { en: "Accrual basis — except the cash-flow statement itself; offsetting of assets/liabilities and income/expenses is FORBIDDEN unless required by a standard", ar: "الأساس الاستحقاقي — عدا قائمة التدفقات ذاتها؛ والمقاصة بين الأصول والالتزامات والإيرادات والمصروفات محظورة إلا بموجب معيار" },
          { en: "Material items — present separately; aggregate immaterial ones; do NOT hide a material item inside a caption", ar: "البنود الجوهرية تُعرض كل على حدة، والتافهة تُجمع، ولا يجوز إخفاء بند جوهري داخل بند آخر" },
          { en: "Frequency — at least annually; a different reporting period must be justified (not longer than one year)", ar: "الدورية — سنويًا على الأقل؛ وتبرير أي مدة مختلفة (لا تزيد على سنة)" },
          { en: "Consistency of presentation and classification — reclassify only if a new presentation is more appropriate (with comparatives restated)", ar: "ثبات العرض والتبويب — لا يعاد التبويب إلا لعرضٍ أنسب (مع إعادة عرض المقارنات)" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "IFRS 18 (effective 2027) will replace the P&L structure of IAS 1 with defined categories (operating, investing, financing, income taxes, discontinued) and new management-defined performance measures — the going-concern, OCI and SOCE rules of IAS 1 survive.",
          ar: "سيحل IFRS 18 (السريان ٢٠٢٧) محل هيكل الأرباح والخسائر في IAS 1 بفئات محددة (تشغيلي، استثماري، تمويلي، ضرائب، متوقفة) ومقاييس أداء يحددها الإدارة — وتبقى قواعد الاستمرارية والدخل الشامل وحقوق الملكية في IAS 1.",
        },
      },
    ],
  },

  {
    code: "IAS 7",
    title: { en: "Statement of Cash Flows", ar: "قائمة التدفقات النقدية" },
    topic: "presentation",
    effective: { en: "Effective 1 Jan 1994 · reformatted by IFRS 18 in 2027", ar: "سارٍ من ١ يناير ١٩٩٤ · يعاد هيكلتها مع IFRS 18 عام ٢٠٢٧" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "Report the cash movements classified by operating, investing and financing activities — cash in + cash out + non-cash changes reconciled — so users can judge liquidity, solvency and financial adaptability.",
          ar: "عرض الحركات النقدية مصنفة إلى أنشطة تشغيلية واستثمارية وتمويلية — نقد داخل وخارج وتغيرات غير نقدية — ليمكن المستخدمين الحكم على السيولة والملاءة والمرونة المالية.",
        },
      },
      {
        kind: "tree",
        root: { en: "The three classes", ar: "الفئات الثلاث" },
        branches: [
          {
            when: { en: "OPERATING — the main revenue-producing activities", ar: "تشغيلي — الأنشطة الرئيسة المولدة للإيراد" },
            then: { en: "Cash from customers, paid to suppliers and employees, interest and taxes PAID (direct method) — or net it off profit (indirect method)", ar: "نقد من العملاء ومدفوع للموردين والعاملين والفوائد والضرائب المدفوعة (الطريقة المباشرة) — أو تُقاص من الربح (غير المباشرة)", red: true },
          },
          {
            when: { en: "INVESTING — acquiring and disposing of long-term assets and other non-cash-equivalent investments", ar: "استثماري — اقتناء واستبعاد الأصول طويلة الأجل والاستثمارات غير المكافئة للنقد" },
            then: { en: "Purchases/sales of PPE, intangibles, equity/debt instruments, loans made to others, interest and dividends RECEIVED", ar: "شراء/بيع الممتلكات وغير الملموسة وأدوات حقوق الملكية والدين والقروض الممنوحة والفوائد والتوزيعات المتلقاه", red: true },
          },
          {
            when: { en: "FINANCING — changes in the size and composition of contributed equity and borrowings", ar: "تمويلي — تغيرات حجم وهيكل حقوق الملكية المساهمة والاقتراض" },
            then: { en: "Proceeds from shares/loans/bonds, repayments, lease principal payments, dividends PAID to owners", ar: "حصيل الأسهم والقروض والسندات، والسداد، وأصل إيجارات IFRS 16، والتوزيعات المدفوعة للملاك", red: true },
          },
        ],
      },
      { kind: "h", text: { en: "The indirect method", ar: "الطريقة غير المباشرة" } },
      {
        kind: "formula",
        lines: [
          { en: "Start: profit before tax (continue with: + depreciation/amortisation/impairment)", ar: "ابدأ بالربح قبل الضريبة (ثم: + إهلاك/استنفاد/انخفاض قيمة)" },
          { en: "− investment income + finance cost · ± movements in working capital (inventory, receivables, payables)", ar: "− دخل الاستثمار + مصروف التمويل ± التغير في رأس المال العامل (مخزون، مدينون، دائنون)" },
          { en: "± other non-cash (provisions, FX, share-based payment, FV moves) → operating cash BEFORE tax & interest", ar: "± بنود غير نقدية أخرى (مخصصات، فروق عملة، دفع بالأسهم، قيم عادلة) ← التدفق التشغيلي قبل الضريبة والفوائد" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Cash = cash on hand + demand deposits + cash equivalents (≤ 3-month maturity). Interest paid and interest/dividends received have a choice of class (consistently applied) — dividends paid are always FINANCING.",
          ar: "النقد = نقد بالصندوق + ودائع تحت الطلب + مكافئات النقد (استحقاق ≤ ٣ أشهر). والفوائد المدفوعة والفوائد والتوزيعات المتلقاه خيار تصنيف (بثبات) — أما التوزيعات المدفوعة فتمويلي دائمًا.",
        },
      },
    ],
  },

  {
    code: "IAS 8",
    title: { en: "Accounting Policies, Changes in Accounting Estimates and Errors", ar: "السياسات المحاسبية والتغيرات في التقديرات المحاسبية والأخطاء" },
    topic: "presentation",
    effective: { en: "Effective 1 Jan 2010 · amended 2021 (definition of accounting estimates)", ar: "سارٍ من ١ يناير ٢٠١٠ · معدل ٢٠٢١ (تعريف التقديرات المحاسبية)" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "How to select and change accounting policies, how to account for changes in estimates, and how to fix prior-period errors — plus the disclosure criteria for each.",
          ar: "كيفية اختيار السياسات المحاسبية وتغييرها، ومحاسبة تغيرات التقديرات، وتصحيح أخطاء الفترات السابقة — ومعايير الإفصاح عن كل منها.",
        },
      },
      {
        kind: "tree",
        root: { en: "What changed?", ar: "ما الذي تغير؟" },
        branches: [
          {
            when: { en: "A POLICY with a specific IFRS transition rule", ar: "سياسة لها قاعدة انتقالية في المعيار الجديد" },
            then: { en: "Follow THAT rule (e.g. IFRS 16 optional exemptions)", ar: "اتبع تلك القاعدة (كنثائج الانتقال الاختيارية في IFRS 16)", red: true },
          },
          {
            when: { en: "A POLICY change without a rule (voluntary, or a new standard silent on transition)", ar: "تغير سياسة بلا قاعدة (اختياري أو معيار صامت عن الانتقال)" },
            then: { en: "RETROSPECTIVE — restate every prior period shown; adjust opening equity of the earliest period", ar: "بأثر رجعي — يعاد عرض كل فترة سابقة مع تعديل حقوق ملكية أول فترة", red: true },
          },
          {
            when: { en: "An ESTIMATE (useful lives, bad-debt %, warranty rates, FV techniques)", ar: "تقدير (أعمار إنتاجية، نسبة ديون معدومة، معدلات ضمان، أساليب قيمة عادلة)" },
            then: { en: "PROSPECTIVE — the new estimate applies from now on (current + future periods only)", ar: "بأثر مستقبلي — يسري التقدير الجديد من الآن (الفترة الحالية والمستقبلية فقط)", red: true },
          },
          {
            when: { en: "A MATERIAL prior-period ERROR (maths, misapplication, fraud, misclassification, omission)", ar: "خطأ جوهري بفترة سابقة (حسابي، تطبيق خاطئ، احتيال، تبويب، حذف)" },
            then: { en: "RETROSPECTIVE restatement, unless impracticable — restate comparatives or opening balances", ar: "تصحيح بأثر رجعي ما لم يتعذر — إعادة عرض المقارنات أو الأرصدة الافتتاحية", red: true },
          },
        ],
      },
      {
        kind: "example",
        title: { en: "Worked example — retrospective vs prospective", ar: "مثال عملي — الرجعي مقابل المستقبلي" },
        lines: [
          { en: "PPE depreciation: in year 3 the entity switches from reducing balance to straight-line (a policy change) → restate years 1–2, adjust opening retained earnings + restate the comparatives", ar: "إهلاك ممتلكات: في السنة الثالثة تتحول من القسط المتناقص إلى الثابت (تغير سياسة) ← تعاد صياغة السنتين ١–٢ ويعدل صافي أرباح أول الفترة مع المقارنات" },
          { en: "Useful life revised from 10 to 7 years (a change in ESTIMATE) → carry the remaining book value over the remaining 6 years prospectively — no restatement", ar: "مراجعة العمر من ١٠ إلى ٧ سنوات (تغير تقدير) ← تحمل القيمة الدفترية المتبقية على الست سنوات الباقية مستقبليًا — بلا إعادة عرض" },
          { en: "Maths slip in year 2's inventory count discovered in year 3 (an ERROR) → restate year 2 in the year-3 comparatives", ar: "خطأ حسابي في جرد السنة الثانية اكتُشف في الثالثة (خطأ) ← تعاد صياغة السنة الثانية ضمن مقارنات الثالثة" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Policy changes are backwards-looking (restate); estimate changes are forward-looking (no restatement); errors are backwards-looking unless immaterial. Judging whether it is a policy or an estimate is the classic exam trap.",
          ar: "تغير السياسة للخلف (إعادة عرض)؛ وتغير التقدير للأمام (بلا إعادة عرض)؛ والخطأ للخلف ما لم يكن غير جوهري. والتمييز بين سياسة وتقدير هو الفخ المعتاد في الامتحانات.",
        },
      },
    ],
  },

  {
    code: "IAS 10",
    title: { en: "Events after the Reporting Period", ar: "الأحداث اللاحقة لتاريخ التقرير" },
    topic: "presentation",
    effective: { en: "Effective 1 Jan 2010", ar: "سارٍ من ١ يناير ٢٠١٠" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "Decide whether events between the reporting date and the date the financial statements are authorised for issue adjust the statements or are merely disclosed — and the cut-off for that decision.",
          ar: "تحديد ما إذا كانت الأحداث بين تاريخ التقرير وتاريخ اعتماد القوائم للإصدار تستلزم تعديل القوائم أم مجرد إفصاح — وتحديد نقطة القطع لهذا القرار.",
        },
      },
      {
        kind: "tree",
        root: { en: "Event after the reporting period", ar: "حدث لاحق لتاريخ التقرير" },
        branches: [
          {
            when: { en: "ADJUSTING — it provides EVIDENCE of conditions that existed AT the reporting date", ar: "معدل — يقدم دليلًا على ظروف كانت قائمة في تاريخ التقرير ذاته" },
            then: { en: "Adjust the financial statements: settlement of a court case → IAS 37 provision; bankruptcy of a customer → ECL; sale of inventory below cost → write-down; discovery of fraud or error", ar: "عدِّل القوائم: حسم قضية ← مخصص IAS 37؛ إفلاس عميل ← خسائر ائتمان متوقعة؛ بيع مخزون دون التكلفة ← تخفيض؛ اكتشاف احتيال أو خطأ", red: true },
          },
          {
            when: { en: "NON-ADJUSTING — it reflects conditions that AROSE after the reporting date", ar: "غير معدل — يعكس ظروف نشأت بعد تاريخ التقرير" },
            then: { en: "DISCLOSE (nature + estimated financial effect) if material: a major business combination, share issue, destruction by fire, falls in market prices", ar: "أفصح (الطبيعة + الأثر المالي المقدر) إذا كان جوهريًا: اندماج كبير، إصدار أسهم، حريق، هبوط أسعار السوق", red: true },
          },
          {
            when: { en: "Dividends declared AFTER the reporting date", ar: "توزيعات معلنة بعد تاريخ التقرير" },
            then: { en: "NOT a liability at the reporting date — disclose (no longer even to SOCE under IAS 1.2013)", ar: "ليست التزامًا بتاريخ التقرير — إفصاح فقط (ولا حتى بقائمة التغيرات في حقوق الملكية بعد تعديل ٢٠١٣)" },
          },
        ],
      },
      {
        kind: "journal",
        title: { en: "Adjusting entry — court case settled after the reporting date", ar: "قيد معدل — حسم قضية بعد تاريخ التقرير" },
        rows: [
          { dr: { en: "Litigation expense (the case existed at the reporting date)", ar: "مصروف تقاضى (القضية كانت قائمة بتاريخ التقرير)" }, cr: { en: "Provision / payables", ar: "مخصص / مستحقات" }, red: true },
          { dr: { en: "Inventory write-down to NRV (evidence of falling prices)", ar: "تخفيض مخزون إلى صافي القيمة البيعية (دليل هبوط الأسعار)" }, cr: { en: "Inventory (or allowance)", ar: "المخزون (أو مخصص)" } },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Going concern is the exception that cuts across the split: post-period evidence that the entity will NOT continue → re-draft the statements on a break-up basis, whatever the timing.",
          ar: "الاستمرارية هي الاستثناء العابر للتصنيف: فأي دليل لاحق بعدم الاستمرار ← تعاد صياغة القوائم على أساس التصفية أيًّا كان التوقيت.",
        },
      },
    ],
  },

  {
    code: "IFRS 1",
    title: { en: "First-time Adoption of IFRS", ar: "التبني الأول للمعايير الدولية" },
    topic: "presentation",
    effective: { en: "Effective 1 Jan 2011 · the one-off pathway into IFRS", ar: "سارٍ من ١ يناير ٢٠١١ · بوابة العبور لمرة واحدة إلى IFRS" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "An entity's first IFRS financial statements must contain full IFRS-quality information — at the date of transition and every period presented — with cost-benefit-relief exemptions and a bridge from previous-GAAP to IFRS retained earnings.",
          ar: "يجب أن تتضمن أول قوائم IFRS للمنشأة معلومات بكامل جودة المعايير — بتاريخ الانتقال وفي كل فترة معروضة — مع إعفاءات توازن التكلفة والعائد وجسر من حقوق ملكية المعايير السابقة إلى IFRS.",
        },
      },
      { kind: "h", text: { en: "The mechanics", ar: "الآلية" } },
      {
        kind: "steps",
        items: [
          { en: "Set the DATE OF TRANSITION — the opening SOFP date of the earliest comparative period presented", ar: "حدد تاريخ الانتقال — تاريخ مركز مالي افتتاحي لأقدم فترة مقارنة معروضة" },
          { en: "Prepare an OPENING IFRS SOFP at that date — this is the launchpad", ar: "أعد مركز مالي افتتاحيًا وفق IFRS بذلك التاريخ — وهذه نقطة الانطلاق" },
          { en: "Write a reconciliation: previous-GAAP equity and total profit → IFRS figures, for the transition date and the latest previous-GAAP period", ar: "اكتب تسوية من حقوق ملكية وربح المعايير السابقة إلى أرقام IFRS، لتاريخ الانتقال وآخر فترة سابقة" },
          { en: "Apply IFRS 15/IFRS 16 etc. using the RESTATEMENT approach (as if IFRS had always applied)", ar: "طبق IFRS 15 وIFRS 16 وغيرها بمنهج إعادة البيان (كأن IFRS كانت مطبقة دائمًا)" },
        ],
      },
      { kind: "h", text: { en: "Key exemptions", ar: "الإعفاءات الجوهرية" } },
      {
        kind: "list",
        items: [
          { en: "OPTIONAL: business combinations before the transition date are NOT restated (keep old goodwill — keep the old carrying amounts); leases/split off land & buildings; cumulative FX translation; deemed cost for PPE and intangibles (fair value or revaluation as deemed cost); share-based payment awards already vested; borrowing costs; decommissioning liabilities", ar: "اختيارية: عمليات اندماج قبل تاريخ الانتقال لا يعاد عرضها (تبقى الشهرة القديمة)؛ الإيجارات؛ فروق الترجمة التراكمية؛ التكلفة المفترضة للممتلكات وغير الملموسة (القيمة العادلة أو إعادة التقييم بوصفها تكلفة)؛ مكافآت الدفع بالأسهم المستقرة بالفعل؛ تكاليف الاقتراض؛ التزامات تفكيك المنشآت" },
          { en: "MANDATORY: derecognition of financial assets/liabilities is NOT revisited; hedge accounting restarts only prospectively; estimates must reflect conditions AT THE TRANSITION DATE (hindsight allowed only for what IFRS would have required)", ar: "إلزامية: عدم الرجوع عن إنهاء الاعتراف بالأصول/الالتزامات المالية؛ ومحاسبة التغطية تبدأ من جديد مستقبليًا فقط؛ والتقديرات تعكس ظروف تاريخ الانتقال ذاته" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "The transition-date estimates must be what IFRS would have required with the information available THEN — new information is ignored unless it falls within IAS 10-style adjusting evidence.",
          ar: "تقديرات تاريخ الانتقال يجب أن تكون بما كان IFRS سيقتضيه بالمعلومات المتاحة حينها — والمعلومات الأحدث تُهمل ما لم تكن دليلًا معدلًا في حكم IAS 10.",
        },
      },
    ],
  },

  {
    code: "IAS 33",
    title: { en: "Earnings per Share", ar: "ربح السهم" },
    topic: "presentation",
    effective: { en: "Effective 1 Jan 2010", ar: "سارٍ من ١ يناير ٢٠١٠" },
    blocks: [
      { kind: "h", text: { en: "Objective & scope", ar: "الهدف والنطاق" } },
      {
        kind: "p",
        text: {
          en: "Every entity with ordinary shares (or in the process of issuing them) presents basic and diluted EPS on the face of the profit or loss, for continuing operations, discontinued operations and the total — with equal prominence.",
          ar: "كل منشأة لديها أسهم عادية (أو بصدد إصدارها) تعرض ربح السهم الأساسي والمخفف بوجه قائمة الأرباح، للعمليات المستمرة والمتوقفة والإجمالي — بالبروز ذاته.",
        },
      },
      {
        kind: "formula",
        title: { en: "The two formulas", ar: "المعادلتان" },
        lines: [
          { en: "Basic EPS = profit attributable to ordinary shareholders ÷ weighted-average ordinary shares outstanding", ar: "الأساسي = الربح المخصص لحملة الأسهم العادية ÷ المتوسط المرجح للأسهم القائمة" },
          { en: "Diluted EPS = (profit + add-back of convertible interest/convertible preference dividends) ÷ (weighted shares + all potential dilutive ordinary shares)", ar: "المخفف = (الربح + رد فوائد القابلة للتحويل/توزيعات الأسهم التفضيلية القابلة للتحويل) ÷ (الأسهم المرجحة + جميع الأسهم المحتملة المميعة)" },
        ],
      },
      {
        kind: "list",
        items: [
          { en: "Bonus issue / share split — adjust the denominator for ALL periods (no extra resources)", ar: "إصدار مجاني / تقسيم أسهم — عدل المقام لكل الفترات (لا موارد إضافية)" },
          { en: "Rights issue — time-weight from issue, using the theoretical ex-rights price for the pre-issue comparatives", ar: "إصدار حقوق — وزن زمنيًا من الإصدار بسعر ما قبل الاستحقاق النظري للمقارنات" },
          { en: "Dilution order: MOST dilutive first (options → convertibles) — stop adding once diluted EPS starts rising (anti-dilutive)", ar: "ترتيب التمييع: الأكثر تمييعًا أولًا (خيارات ← قابلة للتحويل) — ويتوقف الإدراج متى ارتفع المخفف (مضاد للتمييع)" },
          { en: "Options/warrants use the TREASURY STOCK method (average market price); convertibles the IF-CONVERTED method", ar: "الخيارات والشهادات بطريقة أسهم الخزينة (بسعر السوق المتوسط)؛ والقابلة للتحويل بطريقة الافتراض-تحويل" },
        ],
      },
      {
        kind: "example",
        title: { en: "Worked example", ar: "مثال عملي" },
        lines: [
          { en: "Profit 500k; 800k shares; 200k options at 15 (average price 25)", ar: "الربح ٥٠٠ ألف؛ ٨٠٠ ألف سهم؛ ٢٠٠ ألف خيار بسعر ١٥ (متوسط السعر ٢٥)" },
          { en: "Basic = 500 ÷ 800 = 0.625", ar: "الأساسي = ٥٠٠ ÷ ٨٠٠ = ٠٫٦٢٥" },
          { en: "Treasury shares = 200 − (200×15÷25) = 80k → diluted = 500 ÷ 880 = 0.568", ar: "أسهم خزينة = ٢٠٠ − (٢٠٠×١٥÷٢٥) = ٨٠ ألفًا ← المخفف = ٥٠٠ ÷ ٨٨٠ = ٠٫٥٦٨" },
        ],
      },
    ],
  },

  {
    code: "IAS 34",
    title: { en: "Interim Financial Reporting", ar: "التقارير المالية المرحلية" },
    topic: "presentation",
    effective: { en: "Effective 1 Jul 1999 · not mandatory, but securities regulators demand it", ar: "سارٍ من ١ يوليو ١٩٩٩ · غير إلزامي لكن الهيئات الرقابية تشترطه" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "A condensed but complete-enough interim report: a condensed SOFP, condensed P&L, condensed cash-flow statement, changes in equity, selected notes — on the same policies as the annual statements.",
          ar: "تقرير مرحلي مختصر لكنه وافٍ: مركز مالي وأرباح وتدفقات وتغيرات حقوق ملكية مختصرة مع إيضاحات مختارة — بالسياسات ذاتها المتبعة في القوائم السنوية.",
        },
      },
      { kind: "h", text: { en: "The measurement philosophy", ar: "فلسفة القياس" } },
      {
        kind: "list",
        items: [
          { en: "DISCRETE view (measure as a stand-alone period) vs INTEGRAL view (a fraction of the year): IAS 34 is mostly discrete, with integral smoothing for budgeted costs", ar: "رؤية منفصلة (قياس الفترة بذاتها) مقابل مدمجة (جزء من السنة): IAS 34 منفصلة غالبًا مع تنعيم مدمج للتكاليف المقدرة" },
          { en: "Revenue and expenses recognised when they occur — NOT smoothed by deferring/accruing outside IFRS (do NOT accrue a planned annual bonus by a formula)", ar: "الإيرادات والمصروفات تعترف عند حدوثها — لا تنعيم بتأجيل/استحقاق خارج المعايير (لا تستحق مكافأة سنوية مخططة بقاعدة قسمة)" },
          { en: "Costs benefiting more than one interim → allocate across them (e.g. an annual audit fee, insurance, advertising)", ar: "التكاليف المفيدة لأكثر من فترة مرحلية توزع عليها (كأتعاب المراجعة السنوية والتأمين والإعلان)" },
          { en: "Use the SAME annual-end estimation techniques, shortened for speed — no new methods", ar: "استخدم أساليب التقدير ذاتها المستخدمة سنويًا مختصرة — دون أساليب جديدة" },
          { en: "Estimates refined within the final interim → a change in estimate (IAS 8 prospective), not an error", ar: "تحسين التقدير في الفترة الأخيرة ← تغير تقدير (بأثر مستقبلي وفق IAS 8) لا خطأ" },
        ],
      },
      {
        kind: "tip",
        text: {
          en: "Seasonal revenue is recognised when it occurs — never prorated across quiet interims (the ski resort keeps its losses in summer).",
          ar: "الإيراد الموسمي يعترف به عند حدوثه — ولا يوزع على الفترات الخامدة أبدًا (منتجع التزلج يحتفظ بخسائر الصيف حيث هي).",
        },
      },
    ],
  },

  {
    code: "IAS 24",
    title: { en: "Related Party Disclosures", ar: "الإفصاح عن الأطراف ذات العلاقة" },
    topic: "presentation",
    effective: { en: "Effective 1 Jan 2011 · revised (government-related entities)", ar: "سارٍ من ١ يناير ٢٠١١ · بعد المراجعة (المنشآت المرتبطة بالحكومات)" },
    blocks: [
      { kind: "h", text: { en: "Objective", ar: "الهدف" } },
      {
        kind: "p",
        text: {
          en: "Disclosures that make the financial statements complete: where control, joint control or significant influence exists, and where transactions with such parties occurred — because related-party prices may not be at arm's length.",
          ar: "إفصاحات تكتمل بها القوائم المالية: حيث توجد سيطرة أو سيطرة مشتركة أو تأثير كبير، وحيث وقعت معاملات مع تلك الأطراف — لأن أسعار الأطراف ذات العلاقة قد لا تكون على أساس المعاملة بين الغرباء.",
        },
      },
      { kind: "h", text: { en: "Who is a related party?", ar: "من الطرف ذو العلاقة؟" } },
      {
        kind: "list",
        items: [
          { en: "Entities of the same group (parent, subsidiaries, fellow subsidiaries, joint ventures, associates)", ar: "منشآت المجموعة ذاتها (الأم، التابعة، الشقيقات، المشروعات المشتركة، الزميلة)" },
          { en: "Key management personnel (KMP) and their close family members — plus entities they control or significantly influence", ar: "الإدارة العليا الرئيسية وأفراد أسرهم المقربين — والمنشآت التي يسيطرون عليها أو يؤثرون فيها تأثيرًا كبيرًا" },
          { en: "Post-employment benefit plans for the entity's own workers", ar: "خطط مزايا ما بعد التوظيف الخاصة بعاملي المنشأة" },
          { en: "GOVERNMENT-RELATED: a government controlling/reporting entity discloses ONLY material transactions with other government entities (partial exemption)", ar: "المرتبط بالحكومة: يفصح عن المعاملات الجوهرية مع كيانات حكومية أخرى فقط (إعفاء جزئي)" },
        ],
      },
      { kind: "h", text: { en: "What to disclose", ar: "ماذا يُفصح" } },
      {
        kind: "p",
        text: {
          en: "Relationships + transactions (purchase/sale of goods, property, services, leases, transfers of R&D, licences, finance incl. guarantees, settlement of liabilities) with amounts, outstanding balances, terms, commitments and doubtful debts — NOT the pro-forma arm's-length equivalents. KMP compensation in total (short-term, post-employment, equity-based, termination) is mandatory.",
          ar: "العلاقات + المعاملات (شراء/بيع سلع وأصول وخدمات، إيجارات، نقل بحث وتطوير، تراخيص، تمويل وضمانات، تسوية التزامات) بمبالغها وأرصدتها القائمة وشروطها والتزاماتها والديون المشكوك فيها — دون الأرقام الافتراضية على أساس الغرباء. وإجمالي تعويضات الإدارة العليا إلزامي.",
        },
      },
      {
        kind: "tip",
        text: {
          en: "Two safe harbours: no disclosure needed for intra-group transactions eliminated on consolidation, or for the state as a customer/supplier at arm's-length normal terms.",
          ar: "مرفآن آمنان: لا إفصاح عن معاملات داخل المجموعة المستبعدة بالتجميع، ولا عن الحكومة بوصفها عميلًا/موردًا بشروط عادية بين غرباء.",
        },
      },
    ],
  },
]
