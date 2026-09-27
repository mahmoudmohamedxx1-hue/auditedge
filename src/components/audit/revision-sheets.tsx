"use client"

/**
 * v21 — Revision Sheets: five printable bilingual one-pagers for exam week —
 * the materiality ladder, the opinion decision tree, the going-concern
 * ladder, the risk model and the auditor's ratio sheet. Rendered inside the
 * Library; each sheet opens a print-optimized modal (browser → PDF).
 */

import { useState } from "react"
import { useAppStore } from "@/store/useAppStore"
import { cn } from "@/lib/utils"
import { BookMarked, Printer, X } from "lucide-react"

type Block =
  | { kind: "p"; en: string; ar: string }
  | { kind: "list"; en: string[]; ar: string[] }
  | { kind: "steps"; en: [string, string][]; ar: [string, string][] }

type Sheet = {
  id: string
  code: string
  title: { en: string; ar: string }
  blocks: Block[]
}

const SHEETS: Sheet[] = [
  {
    id: "materiality",
    code: "RS-01",
    title: { en: "The materiality ladder (ISA 320 / 450)", ar: "سُلَّم الأهمية النسبية (ISA 320 / 450)" },
    blocks: [
      {
        kind: "steps",
        en: [
          ["1 · Pick the benchmark", "What users focus on: PBT (5%), revenue (0.5–1%), total assets (1–2%), equity. Ask: is it stable? volatile? does it turn negative?"],
          ["2 · Apply the percentage", "Overall materiality (OM) = benchmark × %. Justify both the benchmark and the percentage in the memo (ISA 320.10)."],
          ["3 · Derive performance materiality", "PM = 50–75% of OM — the buffer for undetected misstatements. Lower it for high risk / poor controls."],
          ["4 · Set the clearly-trivial threshold", "CTT = 1–5% of OM. Misstatements BELOW CTT are still recorded in the SAD but presumed trivial."],
          ["5 · Evaluate the SAD", "Aggregate uncorrected < CTT → trivial · < PM → evaluate with management · ≥ PM → obtain correction or the opinion is at risk."],
        ],
        ar: [
          ["١ · اختر الأساس", "ما يركز عليه المستخدمون: الربح قبل الضريبة (٥٪)، الإيراد (٠٫٥–١٪)، إجمالي الأصول (١–٢٪)، حقوق الملكية. اسأل: هل الأساس مستقر أم متقلب؟"],
          ["٢ · طبّق النسبة", "الأهمية الإجمالية = الأساس × النسبة. علّل اختيار الأساس والنسبة في المذكرة (ISA 320.10)."],
          ["٣ · احسب أهمية الأداء", "٥٠–٧٥٪ من الإجمالية — هامش أمان لما لم يُكتشف. اخفضها عند ارتفاع المخاطر أو ضعف الضوابط."],
          ["٤ · حدد عتبة التافه", "١–٥٪ من الإجمالية. الفروقات دونها تُسجل في الملخص لكن يُفترض أنها تافهة."],
          ["٥ · قوّم الملخص", "الأقل من التافهة → تافه · الأقل من أهمية الأداء → ناقش الإدارة · البالغ لها → صحّح أو يتعرض الرأي للخطر."],
        ],
      },
      { kind: "p", en: "Qualitative always wins: a 5,000 EGP misstatement that flips profit to loss, breaches a covenant, or hides a fraud is material regardless of the arithmetic (ISA 450.11-12).", ar: "النوعي يغلب دائمًا: فرق بسيط يقلب النتيجة إلى خسارة أو يخالف تعهدًا أو يخفي احتيالًا هو جوهري مهما صغُر رقميًا (ISA 450.11-12)." },
    ],
  },
  {
    id: "opinion",
    code: "RS-02",
    title: { en: "The opinion decision tree (ISA 700 / 705 / 706)", ar: "شجرة قرار الرأي (ISA 700 / 705 / 706)" },
    blocks: [
      {
        kind: "steps",
        en: [
          ["Misstatement, material, not pervasive", "→ QUALIFIED — 'except for' the effects of the matter."],
          ["Misstatement, material AND pervasive", "→ ADVERSE — the FS as a whole are misleading."],
          ["Unable to obtain evidence, material, not pervasive", "→ QUALIFIED (scope limitation)."],
          ["Unable to obtain evidence, material AND pervasive", "→ DISCLAIMER — no basis for an opinion at all."],
          ["Uncorrected but immaterial", "→ UNMODIFIED opinion. Consider EoM/KAM routing only."],
        ],
        ar: [
          ["تحريف جوهري غير منتشر", "→ رأي متحفظ — «فيما عدا» أثر المسألة."],
          ["تحريف جوهري ومنتشر", "→ رأي سلبي — القوائم مضللة في مجملها."],
          ["تعذر الحصول على دليل، جوهري غير منتشر", "→ متحفظ (تقييد نطاق)."],
          ["تعذر الحصول على دليل، جوهري ومنتشر", "→ امتناع عن إصدار الرأي أصلًا."],
          ["فروقات غير جوهرية", "→ رأي غير معدل. راجع فقط توجيه فقرات التركيز والمسائل الجوهرية."],
        ],
      },
      { kind: "list", en: ["KAM (701): listed entities — matters most significant in the audit, communicated to TCWG.", "EoM (706): properly-presented disclosure the user must not miss — no opinion change.", "Other Matter (706): anything else material to understanding — e.g., refusal of predecessor's access."], ar: ["المسائل الجوهرية (701): للمنشآت المدرجة — أهم مسائل المراجعة المتواصل بشأنها مع الحوكمة.", "فقرة التركيز (706): إفصاح سليم لا يجوز أن يفوته المستخدم — دون تغيير الرأي.", "فقرة المسألة الأخرى (706): ما يجدر إيضاحه لفهم التقرير — كرفض سابق المراجع تمكينه."] },
    ],
  },
  {
    id: "going-concern",
    code: "RS-03",
    title: { en: "The going-concern ladder (ISA 570)", ar: "سُلَّم الاستمرارية (ISA 570)" },
    blocks: [
      {
        kind: "steps",
        en: [
          ["Triggers to spot", "Net liability position · repeated losses · loan defaults / withdrawn facilities · arrears · disposal-based survival plans needing unrealistic margins."],
          ["The horizon", "At least 12 months from APPROVAL of the FS — not from year-end (classic exam trap)."],
          ["Evaluate management's assessment", "Cash-flow forecasts (verify assumptions vs history), financing commitments, cost-cutting plans — WFGI."],
          ["Events after the reporting period", "New defaults or withdrawals after year-end may require the auditor to ask management to reassess."],
          ["Disclosure adequate?", "YES → unmodified opinion + MURGC paragraph. NO / refused → qualified or adverse."],
        ],
        ar: [
          ["مؤشرات تُرصد", "مركز خصوم صافٍ · خسائر متكررة · تعثر قروض أو سحب تسهيلات · متأخرات · خطط نجاة تبيع أصولًا بهوامش غير واقعية."],
          ["الأفق الزمني", "١٢ شهرًا على الأقل من تاريخ اعتماد القوائم — لا من نهاية السنة (فخ امتحانات شهير)."],
          ["قيّم تقييم الإدارة", "تدفعات نقدية متوقعة (اختبر الافتراضات مقابل التاريخ)، التزامات تمويل، خطط خفض التكاليف — وتواصل مع الحوكمة."],
          ["الأحداث اللاحقة", "تعثر جديد بعد نهاية الفترة قد يستوجب طلب إعادة تقييم من الإدارة."],
          ["هل الإفصاح كافٍ؟", "نعم → رأي غير معدل مع فقرة عدم يقين جوهري. لا أو رفض → متحفظ أو سلبي."],
        ],
      },
    ],
  },
  {
    id: "risk-model",
    code: "RS-04",
    title: { en: "The risk model & what breaks where (ISA 315 / 330)", ar: "نموذج المخاطر وأين تنكسر القوائم (ISA 315 / 330)" },
    blocks: [
      {
        kind: "steps",
        en: [
          ["The arithmetic", "AR = IR × CR × DR. You influence only DR — through nature, timing, extent of procedures."],
          ["Significant risks", "Get STAND-ALONE responses; for fraud risks: include tests of details — no controls-only reliance."],
          ["Assertions map", "EX existence · C completeness · A accuracy · VA valuation & allocation · RO rights & obligations · CO cut-off · CL classification · PR presentation & disclosure."],
          ["What usually breaks", "Revenue → C + CO (early recognition) · Inventory → VA + EX · Receivables → VA (ECL) · Estimates (540) → VA + PR · Related parties → C + PR."],
        ],
        ar: [
          ["الحساب", "خطر المراجعة = المتأصل × الضوابط × الاكتشاف. تتحكم فقط في خطر الاكتشاف — عبر طبيعة الإجراءات وتوقيتها ومداها."],
          ["المخاطر الجوهرية", "استجابة مستقلة بذاتها؛ ومخاطر الاحتيال: اختبار تفاصيل ضمنها — لا اعتماد على الضوابط وحدها."],
          ["خريطة التأكيدات", "الوجود · الاكتمال · الدقة · التقييم والتوزيع · الحقوق والالتزامات · الاستقطاع · التصنيف · العرض والإفصاح."],
          ["ما ينكسر عادة", "الإيراد → الاكتمال والاستقطاع · المخزون → التقييم والوجود · الذمم → التقييم (الخسائر الائتمانية) · التقديرات (540) → التقييم والإفصاح · الأطراف ذات العلاقة → الاكتمال والإفصاح."],
        ],
      },
    ],
  },
  {
    id: "ratios",
    code: "RS-05",
    title: { en: "The field ratio sheet (substantive analytics)", ar: "ورقة النسب الميدانية (التحليلات الجوهرية)" },
    blocks: [
      {
        kind: "list",
        en: [
          "GM% = gross profit ÷ revenue — expect it stable; a jump without a price/cost story = cut-off or classification risk.",
          "DSO = receivables ÷ credit sales × 365 — rising DSO = revenue quality / ECL staging question.",
          "DIO = inventory ÷ COGS × 365 — rising DIO = NRV / slow-moving provision question.",
          "Current ratio = current assets ÷ current liabilities — feeds the going-concern picture.",
          "Interest cover = EBIT ÷ finance cost — covenant headroom (and hidden covenant breaches) live here.",
          "Benford first-digit MAD: < 0.006 close · 0.006–0.012 suspicious · 0.012–0.015 nonconforming — JE-testing primer.",
        ],
        ar: [
          "هامش الربح الإجمالي = مجمل الربح ÷ الإيراد — يُتوقع استقراره؛ وقفزته بلا قصة أسعار أو تكاليف = خطر استقطاع أو تصنيف.",
          "فترة تحصيل الذمم = الذمم ÷ المبيعات الآجلة × ٣٦٥ — ارتفاعها = سؤال جودة الإيراد ومراحل الخسائر الائتمانية.",
          "فترة بقاء المخزون = المخزون ÷ تكلفة المبيعات × ٣٦٥ — ارتفاعها = سؤال صافي القيمة البيعية ومخصص البطيء.",
          "نسبة التداول = الأصول المتداولة ÷ الالتزامات المتداولة — تغذي صورة الاستمرارية.",
          "غطاء الفوائد = الربح التشغيلي ÷ تكلفة التمويل — هنا تُقرأ هوامش التعهدات (واختراقاتها الخفية).",
          "انحراف بنفورد للرقم الأول: أقل من ٠٫٠٠٦ قريب · ٠٫٠٠٦–٠٫٠١٢ مشتبه · ٠٫٠١٢–٠٫٠١٥ غير مطابق — مدخل اختبار القيود.",
        ],
      },
    ],
  },
  {
    id: "assertions-evidence",
    code: "RS-06",
    title: { en: "Assertions → evidence map (ISA 500 / 530)", ar: "خريطة التأكيدات → الأدلة (ISA 500 / 530)" },
    blocks: [
      {
        kind: "list",
        en: [
          "Existence / occurrence → physical inspection & observation, third-party confirmations, sample from LEDGER to source (directional testing).",
          "Completeness → sample from SOURCE to ledger (the reverse direction), reconciliations, cut-off testing around year-end, unrecorded liabilities search.",
          "Valuation → ECL models, NRV computations, impairment tests (VIU vs FVLCD — take the HIGHER), specialist valuations re-performed.",
          "Rights & obligations → contracts, title deeds, confirmations with custodians, loan agreements for charges and covenants.",
          "Presentation & disclosure → completeness of notes vs trial balance, accounting-policy check against the standard's disclosure checklist.",
          "Substantive analytics (ISA 520) are evidence when the expectation is precise enough — combine with tests of details for significant risks.",
          "Sampling (ISA 530): statistical selection allows projection; judgemental selection never projects — it targets the riskiest items.",
        ],
        ar: [
          "الوجود/الحدوث → المعاينة والمراقبة الفعلية، تأكيدات الأطراف الخارجية، عينة من الدفتر إلى المستند (الاتجاه الصحيح للاختبار).",
          "الاكتمال → عينة من المستند إلى الدفتر (الاتجاه المعاكس)، التسويات، اختبار الاستقطاع حول نهاية السنة، البحث عن التزامات غير مسجلة.",
          "التقييم → نماذج الخسائر الائتمانية، صافي القيمة البيعية، اختبارات الاضمحلال (الأعلى من القيمة الاستخدامية والقيمة العادلة ناقصة تكاليف التصرف)، إعادة أداء تقييمات الخبراء.",
          "الحقوق والالتزامات → العقود، مستندات الملكية، تأكيدات الأمناء، اتفاقيات القروض للرهون والتعهدات.",
          "العرض والإفصاح → اكتمال الإيضاحات مقابل ميزان المراجعة، ومطابقة السياسات مع قوائم الإفصاح في المعيار.",
          "التحليلات الجوهرية (ISA 520) دليل متى كان التوقع دقيقًا بما يكفي — وتُقرن باختبارات تفصيلية للمخاطر الجوهرية.",
          "المسح (ISA 530): الاختيار الإحصائي يسمح بالإسقاط؛ والاختيار الحكمي لا يُسقط أبدًا — بل يستهدف أخطر البنود.",
        ],
      },
    ],
  },
  {
    id: "ifrs-big5",
    code: "RS-07",
    title: { en: "The IFRS big-five quick sheet", ar: "ورقة الخمس الكبار في المعايير الدولية" },
    blocks: [
      {
        kind: "list",
        en: [
          "IFRS 15 Revenue — 5 steps: contract → performance obligations → price → allocate → recognize as each obligation is satisfied (over time only if criteria met).",
          "IFRS 16 Leases — single lessee model: ROU asset + lease liability; exemptions ≤ 12 months / low-value; P&L = depreciation + interest (front-loaded vs old straight line).",
          "IFRS 9 Instruments — classification by business model + cash-flow test; ECL (12-month vs lifetime); equity FVOCI without recycling.",
          "IAS 36 Impairment — carrying vs recoverable (HIGHER of FVLCD and VIU); goodwill tested annually at the CGU level; reversal banned for goodwill.",
          "IAS 37 Provisions — present obligation (legal or constructive) + probable outflow + reliable estimate; contingent liabilities disclosed, never provisioned; discounting when material.",
          "The going-to-exams trick: read the question's verb — 'recognize' → measurement rule, 'present' → IAS 1 / IFRS 18, 'disclose' → the standard's disclosure section.",
        ],
        ar: [
          "IFRS 15 الإيراد — ٥ خطوات: العقد → الالتزامات → السعر → التوزيع → الاعتراف عند الوفاء بكل التزام (عبر الزمن فقط باستيفاء الشروط).",
          "IFRS 16 الإيجارات — نموذج واحد للمستأجر: أصل حق استخدام والتزام إيجار؛ إعفاءات حتى ١٢ شهرًا أو منخفض القيمة؛ والربح والخسارة = إهلاك + فوائد (تحميل أمامي مقابل القسط المستقيم القديم).",
          "IFRS 9 الأدوات — التصنيف بنموذج الأعمال واختبار التدفقات؛ الخسائر الائتمانية المتوقعة (١٢ شهرًا أو طوال العمر)؛ وحقوق الملكية بالقيمة العادلة عبر الدخل الشامل دون إعادة تدوير.",
          "IAS 36 الاضمحلال — الدفترية مقابل القابلة للاسترداد (الأعلى من القيمة العادلة ناقصة تكاليف التصرف والقيمة الاستخدامية)؛ الشهرة تُختبر سنويًا على مستوى وحدة توليد النقد؛ ولا يُعكس اضمحلال الشهرة.",
          "IAS 37 المخصصات — التزام قائم (قانوني أو ضمني) + تدفق مرجح + تقدير موثوق؛ الالتزامات المحتملة تُفصح ولا تُخصص أبدًا؛ والخصم عند الجوهرية.",
          "حيلة الامتحانات: اقرأ فعل السؤال — «اعترف» → قاعدة القياس، و«اعرض» → IAS 1 / IFRS 18، و«أفصح» → قسم الإفصاح في المعيار.",
        ],
      },
    ],
  },
  {
    id: "fraud-flags",
    code: "RS-08",
    title: { en: "Fraud & related-party red flags (ISA 240 / 550)", ar: "مؤشرات الغش والأطراف ذات العلاقة (ISA 240 / 550)" },
    blocks: [
      {
        kind: "list",
        en: [
          "Revenue red flags: growth far above peers, year-end spikes, round-sum invoices, receivables aging faster than sales, constant gross margin across very different products.",
          "JE red flags (240.32): entries late/weekend/period-close, round amounts, unfamiliar accounts, bypassed approval trails — test via CAATs / Benford.",
          "Management override: unjustified estimates changed late, journal entries pushed through by senior staff, stubborn refusal to correct known errors.",
          "Incentive/pressures: bonus thresholds just reached, covenant headroom razor-thin, listing/job-security pressure around results day.",
          "Related parties to always map: dominant shareholder, directors' interests, entities sharing an address or bank account, sales 'outside the normal course'.",
          "Response, not just detection: unpredictability in procedures, corroboration of management claims, and unwinding the transaction to its economic substance.",
        ],
        ar: [
          "مؤشرات الإيراد: نمو يفوق أقران السوق، ذروة نهاية سنوات، فواتير بأرقام مقربة، أعمار ذمم تنمو أسرع من المبيعات، وهامش إجمالي ثابت لمنتجات شديدة الاختلاف.",
          "مؤشرات القيود (240.32): قيود متأخرة أو بعطلات أو عند الإقفال، مبالغ مقربة، حسابات غريبة، ومسارات اعتماد متجاوزة — تختبر بأدوات المراجعة بمساعدة الحاسوب وبنفورد.",
          "تجاوز الإدارة: تقديرات غير مبررة تغيرت متأخرًا، قيود يدخلها كبار الموظفين، ورفض عنيد لتصحيح أخطاء معلومة.",
          "الدوافع والضغوط: عتبات مكافآت تُلامس بالكاد، هوامش تعهدات ضيقة، وضغوط إدراج أو استقرار وظيفي حول يوم النتائج.",
          "أطراف يجب رصدها دائمًا: المساهم المسيطر، مصالح أعضاء المجلس، كيانات تتشارك العنوان أو الحساب البنكي، ومبيعات «خارج النشاط الاعتيادي».",
          "الاستجابة لا الاكتشاف فقط: عدم قابلية التنبؤ بالإجراءات، تأييد أقوال الإدارة بأدلة مستقلة، وفك العملية إلى جوهرها الاقتصادي.",
        ],
      },
    ],
  },
]

export function RevisionSheets() {
  const lang = useAppStore((s) => s.lang)
  const ar = lang === "ar"
  const [openId, setOpenId] = useState<string | null>(null)
  const open = SHEETS.find((s) => s.id === openId) ?? null

  return (
    <section className="rounded-2xl border bg-card p-5 shadow-soft" aria-label={ar ? "أوراق المراجعة" : "Revision sheets"}>
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
          <BookMarked className="h-4.5 w-4.5" />
        </span>
        <div>
          <h2 className="font-serif text-[16px] font-semibold tracking-tight">
            {ar ? "أوراق المراجعة — لليلة الامتحان" : "Revision sheets — for exam night"}
          </h2>
          <p className="text-[12px] text-muted-foreground">
            {ar ? "خمس ورقات ثنائية اللغة قابلة للطباعة: الأهمية، شجرة الرأي، الاستمرارية، نموذج المخاطر، النسب." : "Five printable bilingual one-pagers: materiality, the opinion tree, going concern, the risk model, ratios."}
          </p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {SHEETS.map((s) => (
          <button
            key={s.id}
            onClick={() => setOpenId(s.id)}
            className="rounded-full border border-gold/35 bg-gold/[0.06] px-3 py-1.5 text-[12px] font-medium text-gold-deep transition-colors hover:bg-gold/15 focus-ring"
          >
            <span className="me-1.5 font-mono text-[10.5px] opacity-70">{s.code}</span>
            {ar ? s.title.ar : s.title.en}
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-foreground/30 p-4 pt-10 backdrop-blur-sm"
          onClick={() => setOpenId(null)}
          role="dialog"
          aria-modal="true"
          aria-label={ar ? open.title.ar : open.title.en}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border bg-card p-6 shadow-pop sm:p-8 print:border-0 print:shadow-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 print:hidden">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">{open.code}</p>
                <h3 dir="auto" className="mt-1 font-serif text-[20px] font-semibold leading-snug tracking-tight">
                  {ar ? open.title.ar : open.title.en}
                </h3>
              </div>
              <div className="flex shrink-0 gap-1.5">
                <button
                  onClick={() => window.print()}
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-3 text-[12.5px] font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-ring"
                >
                  <Printer className="h-3.5 w-3.5" /> {ar ? "اطبع / PDF" : "Print / PDF"}
                </button>
                <button
                  onClick={() => setOpenId(null)}
                  aria-label="close"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary focus-ring"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-5 space-y-5">
              {open.blocks.map((b, bi) => {
                if (b.kind === "p")
                  return (
                    <p key={bi} dir="auto" className="rounded-xl border-s-2 border-primary/40 bg-primary/[0.04] ps-4 text-[13px] leading-[1.8]">
                      {ar ? b.ar : b.en}
                    </p>
                  )
                if (b.kind === "list")
                  return (
                    <ul key={bi} className="space-y-2.5">
                      {(ar ? b.ar : b.en).map((li, i) => (
                        <li key={i} dir="auto" className="flex gap-2.5 text-[13px] leading-[1.75]">
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-deep" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  )
                return (
                  <ol key={bi} className="space-y-3">
                    {(ar ? b.ar : b.en).map(([step, detail], i) => (
                      <li key={i} className="rounded-xl border bg-secondary/25 p-3.5">
                        <p dir="auto" className="text-[13px] font-semibold text-foreground">
                          <span className="me-2 font-mono text-[11px] text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                          {step}
                        </p>
                        <p dir="auto" className="mt-1 text-[12.5px] leading-[1.7] text-foreground/75">
                          {detail}
                        </p>
                      </li>
                    ))}
                  </ol>
                )
              })}
            </div>

            <p className="mt-6 border-t pt-3 text-center text-[10.5px] text-muted-foreground print:hidden">
              AuditEdge Academy · {ar ? "ورقة مراجعة — تحقق من نص المعيار في المكتبة قبل الامتحان" : "Revision sheet — verify against the standard's text in the Library before the exam"}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
