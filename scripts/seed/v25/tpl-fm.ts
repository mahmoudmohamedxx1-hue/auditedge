/** v25 financial-management cluster — NPV, WACC/CAPM, working capital,
 *  forex risk and Islamic finance templates for FM and AFM papers. */
import { type Template, egp, fmt, mcq, numericOptions } from "./gen-lib"

const BOTH = ["FM", "AFM"] as const

export const FM_TEMPLATES: Template[] = [
  {
    tag: "NPV", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const outlay = r.pick([500_000, 800_000, 1_200_000])
      const inflow = r.pick([260_000, 400_000, 620_000])
      const years = r.pick([3, 4])
      const rate = r.pick([0.1, 0.12])
      const pv = Math.round(inflow * ((1 - (1 + rate) ** -years) / rate))
      const npv = pv - outlay
      const { options, optionsAr, answerIndex } = numericOptions(npv, [-npv, Math.round(inflow * years - outlay), Math.round(pv * 0.5)])
      return {
        stem: `${e.en} invests EGP ${fmt(outlay)} now for ${years} equal annual inflows of EGP ${fmt(inflow)}; the cost of capital is ${Math.round(rate * 100)}%. The NPV is closest to:`,
        stemAr: `تستثمر ${e.ar} ${egp(outlay)} مقابل ${years} تدفقات سنوية متساوية ${egp(inflow)} بتكلفة رأس مال ${Math.round(rate * 100)}%. صافي القيمة الحالية يقارب:`,
        options, optionsAr, answerIndex,
        explanation: `PV of inflows = ${egp(inflow)} × annuity(${Math.round(rate * 100)}%, ${years}y) = ${egp(pv)}; NPV = ${egp(pv)} − ${egp(outlay)} = ${egp(npv)}.`,
        explanationAr: `القيمة الحالية = ${egp(pv)}؛ وصافي القيمة = ${egp(npv)}.`,
      }
    },
  },
  {
    tag: "NPV", area: "accounting", difficulty: 3, fams: ["AFM"],
    make: (r, e) => {
      const outlay = r.pick([1_000_000, 1_500_000])
      const yr1 = r.pick([300_000, 400_000])
      const yr2 = Math.round(yr1 * r.pick([1.4, 1.6]))
      const rate = 0.1
      const npv = Math.round(yr1 / 1.1 + yr2 / 1.21 - outlay)
      const { options, optionsAr, answerIndex } = numericOptions(
        npv, [Math.round(yr1 + yr2 - outlay), -npv, Math.round(npv * 0.4)]
      )
      return {
        stem: `${e.en} invests EGP ${fmt(outlay)}; cash inflows are EGP ${fmt(yr1)} in year 1 and EGP ${fmt(yr2)} in year 2, then nil. At a 10% cost of capital the NPV is closest to:`,
        stemAr: `تستثمر ${e.ar} ${egp(outlay)}؛ والتدفقات ${egp(yr1)} بالسنة الأولى و${egp(yr2)} بالثانية. بتكلفة 10% يقارب صافي القيمة الحالية:`,
        options, optionsAr, answerIndex,
        explanation: `NPV = ${fmt(yr1)}/1.1 + ${fmt(yr2)}/1.21 − ${fmt(outlay)} = EGP ${fmt(npv)}.`,
        explanationAr: `الصافي = ${fmt(yr1)}/1.1 + ${fmt(yr2)}/1.21 − ${fmt(outlay)} = ${egp(npv)}.`,
      }
    },
  },
  {
    tag: "WACC", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const ke = r.pick([0.14, 0.16])
      const kd = r.pick([0.08, 0.09])
      const tax = 0.225
      const we = r.pick([0.5, 0.6])
      const wd = 1 - we
      const wacc = r.round(we * ke + wd * kd * (1 - tax), 4)
      const { options, optionsAr, answerIndex } = numericOptions(
        Math.round(wacc * 10000), [Math.round((we * ke + wd * kd) * 10000), Math.round(ke * 10000), Math.round(kd * 10000)],
        (n) => `${(n / 100).toFixed(2)}%`, (n) => `${(n / 100).toFixed(2)}%`
      )
      return {
        stem: `${e.en} is financed ${Math.round(we * 100)}% equity (cost ${Math.round(ke * 100)}%) and ${Math.round(wd * 100)}% debt (pre-tax ${Math.round(kd * 100)}%, tax 22.5%). The WACC is:`,
        stemAr: `تمول ${e.ar} بـ ${Math.round(we * 100)}% حقوق (كلفتها ${Math.round(ke * 100)}%) و${Math.round(wd * 100)}% دين (قبل الضريبة ${Math.round(kd * 100)}%، ضريبة 22.5%). WACC:`,
        options, optionsAr, answerIndex,
        explanation: `WACC = We·Ke + Wd·Kd(1−t) = ${Math.round(we * 100)}%×${Math.round(ke * 100)}% + ${Math.round(wd * 100)}%×${Math.round(kd * 100)}%×(1−22.5%) = ${(wacc * 100).toFixed(2)}%.`,
        explanationAr: `WACC = وزن الحقوق × كلفتها + وزن الدين × كلفته بعد الضريبة = ${(wacc * 100).toFixed(2)}%.`,
      }
    },
  },
  {
    tag: "CAPM", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const rf = r.pick([0.09, 0.1])
      const rm = r.pick([0.13, 0.15])
      const beta = r.pick([1.2, 1.4, 0.8])
      const ke = r.round(rf + beta * (rm - rf), 4)
      const { options, optionsAr, answerIndex } = numericOptions(
        Math.round(ke * 10000), [Math.round((rf + rm) / 2 * 10000), Math.round((rm - rf) * 10000), Math.round(rm * 10000)],
        (n) => `${(n / 100).toFixed(2)}%`, (n) => `${(n / 100).toFixed(2)}%`
      )
      return {
        stem: `The risk-free rate is ${Math.round(rf * 100)}% and the market return ${Math.round(rm * 100)}%. A share of ${e.en} has a beta of ${beta}. Its cost of equity under CAPM is:`,
        stemAr: `معدل بلا مخاطر ${Math.round(rf * 100)}% وعائد السوق ${Math.round(rm * 100)}%؛ وسهم ${e.ar} بيتا ${beta}. كلفة حقوق الملكية وفق CAPM:`,
        options, optionsAr, answerIndex,
        explanation: `Ke = Rf + β(Rm − Rf) = ${Math.round(rf * 100)}% + ${beta} × ${Math.round((rm - rf) * 100)}% = ${(ke * 100).toFixed(2)}%.`,
        explanationAr: `الكلفة = بلا مخاطر + بيتا × علاوة السوق = ${(ke * 100).toFixed(2)}%.`,
      }
    },
  },
  {
    tag: "Working capital", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const sales = r.pick([3_600_000, 4_800_000, 7_200_000])
      const dso = r.pick([55, 65, 73])
      const days = r.pick([360, 365])
      const rec = Math.round((sales / days) * dso)
      const { options, optionsAr, answerIndex } = numericOptions(
        rec, [Math.round((sales / days) * (dso - 15)), Math.round(sales / 12), Math.round(sales * 0.05)]
      )
      return {
        stem: `${e.en} sells EGP ${fmt(sales)} a year on credit and allows ${dso} days; a ${days}-day year is assumed. The average trade receivables are:`,
        stemAr: `تبيع ${e.ar} ${egp(sales)} سنويًا بالأجل وتمنح ${dso} يومًا (سنة ${days} يومًا). متوسط الذمم المدينة:`,
        options, optionsAr, answerIndex,
        explanation: `Receivables = credit sales ÷ days × debtor days = ${fmt(sales)} ÷ ${days} × ${dso} = ${egp(rec)}.`,
        explanationAr: `الذمم = المبيعات الأجلية ÷ الأيام × مدة التحصيل = ${egp(rec)}.`,
      }
    },
  },
  {
    tag: "Working capital", area: "accounting", difficulty: 2, fams: ["FM", "AFM"],
    make: (r, e) => {
      const cogs = r.pick([2_400_000, 3_000_000])
      const dio = r.pick([45, 60])
      const days = r.pick([360, 365])
      const inv = Math.round((cogs / days) * dio)
      const { options, optionsAr, answerIndex } = numericOptions(
        inv, [Math.round((cogs / days) * dio * 1.5), Math.round(cogs / 12), Math.round(cogs * 0.02)]
      )
      return {
        stem: `${e.en} has annual cost of sales of EGP ${fmt(cogs)} and holds inventory for ${dio} days (${days}-day year). Average inventory is:`,
        stemAr: `تكلفة مبيعات ${e.ar} ${egp(cogs)} وتحفظ المخزون ${dio} يومًا (سنة ${days}). متوسط المخزون:`,
        options, optionsAr, answerIndex,
        explanation: `Inventory = COGS ÷ days × inventory days = ${fmt(cogs)} ÷ ${days} × ${dio} = ${egp(inv)}.`,
        explanationAr: `المخزون = التكلفة ÷ الأيام × أيام المخزون = ${egp(inv)}.`,
      }
    },
  },
  {
    tag: "Cash cycle", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const dio = r.pick([60, 70])
      const dso = r.pick([45, 55])
      const dpo = r.pick([30, 40])
      const cycle = dio + dso - dpo
      const { options, optionsAr, answerIndex } = numericOptions(
        cycle, [dio + dso + dpo, Math.abs(dio - dso), Math.round((dio + dso) / 2)],
        (n) => `${n} days`, (n) => `${n} يومًا`
      )
      return {
        stem: `${e.en} operates with ${dio} inventory days, ${dso} receivable days and ${dpo} payable days. The cash operating cycle is:`,
        stemAr: `تعمل ${e.ar} بمخزون ${dio} يومًا وذمم ${dso} وائتمان موردين ${dpo}. دورة النقد التشغيلية:`,
        options, optionsAr, answerIndex,
        explanation: `Cash cycle = inventory days + receivable days − payable days = ${dio} + ${dso} − ${dpo} = ${cycle} days.`,
        explanationAr: `الدورة = أيام المخزون + الذمم − الدائنين = ${cycle} يومًا.`,
      }
    },
  },
  {
    tag: "Forex", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const usd = r.pick([200_000, 500_000])
      const spot = r.pick([30.8, 31.2])
      const fwd = r.pick(spot > 31 ? [31.5, 31.8] : [31.1, 31.4])
      const diff = Math.round(usd * (fwd - spot))
      const { options, optionsAr, answerIndex } = numericOptions(
        diff, [-diff, 0, Math.round(usd * (spot - fwd) * 2)]
      )
      return {
        stem: `${e.en} will receive USD ${fmt(usd)} in 3 months. The spot rate is EGP ${spot}/USD and the 3-month forward is ${fwd}. A forward hedge locks an EGP value differing from spot by:`,
        stemAr: `ستحصل ${e.ar} على ${fmt(usd)} دولار بعد 3 أشهر؛ السعر الفوري ${spot} والأجل ثلاثة أشهر ${fwd}. يثبت التحوط الآجل فرقًا عن الفوري بمقدار:`,
        options, optionsAr, answerIndex,
        explanation: `Forward value − spot value = USD ${fmt(usd)} × (${fwd} − ${spot}) = EGP ${fmt(diff)} (forward premium on USD).`,
        explanationAr: `الفرق = ${fmt(usd)} × (${fwd} − ${spot}) = ${egp(diff)}.`,
      }
    },
  },
  {
    tag: "Forex", area: "accounting", difficulty: 3, fams: ["AFM"],
    make: (_r, e) => ({
      stem: `${e.en} has a 6-month USD payable and is considering a money-market hedge versus a forward contract. The two hedges give:`,
      stemAr: `لدى ${e.ar} التزام دولاري بعد 6 أشهر وتقارن تحوط السوق النقدي بالعقد الآجل. يعطي التحوطان:`,
      options: [
        "Effectively the same locked EGP cost (covered-interest parity), differing mainly in execution and credit lines",
        "The money-market hedge always cheaper",
        "The forward always cheaper",
        "Both leave the exposure fully open",
      ],
      optionsAr: [
        "نفس التكلفة المقفلة فعليًا (تعادل الفائدة المغطى) مع اختلاف التنفيذ وحدود الائتمان",
        "تحوط السوق النقدي أرخص دائمًا",
        "الآجل أرخص دائمًا",
        "كلاهما يترك المخاطر مفتوحة",
      ],
      answerIndex: 0,
      explanation: "Under covered-interest parity, money-market hedges and forwards converge to the same locked rate; practical differences are credit limits and transaction spreads.",
      explanationAr: "وفق تعادل الفائدة المغطى يتقارب التحوطان لنفس المعدل؛ والفروق عملية فقط.",
    }),
  },
  {
    tag: "Islamic finance", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const [mode, ex, exAr] = r.pick([
        ["Murabaha", "cost plus an agreed mark-up, deferred payment", "التكلفة بهامش متفق عليه بسداد مؤجل"],
        ["Ijara", "an asset leased with ownership transferring at the end", "تأجير أصل مع انتقال ملكيته نهاية المدة"],
        ["Sukuk", "certificates each representing a share in an asset or venture", "شهادات تمثل حصصًا في أصل أو مشروع"],
        ["Musharaka", "an equity partnership sharing profit and loss", "شراكة حقوق تتشارك الربح والخسارة"],
      ])
      return {
        stem: `${e.en} is offered Sharia-compliant finance: ${ex}. This structure is:`,
        stemAr: `عرض على ${e.ar} تمويل متوافق شرعًا: ${exAr}. هذا العقد هو:`,
        ...mcq(
          mode === "Murabaha" ? ["Murabaha", "المرابحة"]
            : mode === "Ijara" ? ["Ijara", "الإجارة"]
            : mode === "Sukuk" ? ["Sukuk", "الصكوك"]
            : ["Musharaka", "المشاركة"],
          [
            ["Murabaha", "المرابحة"],
            ["Ijara", "الإجارة"],
            ["Sukuk", "الصكوك"],
            ["Musharaka", "المشاركة"],
            ["Mudaraba", "المضاربة"],
          ]
        ),
        answerIndex: 0,
        explanation: "Islamic finance structures: Murabaha (cost-plus), Ijara (lease), Sukuk (asset certificates), Musharaka/Mudaraba (partnerships) — returns come from assets/trade, not interest.",
        explanationAr: "عقود التمويل الإسلامي: المرابحة والإجارة والصكوك والمشاركة — والعائد من الأصول والتجارة لا الفائدة.",
      }
    },
  },
  {
    tag: "Valuation", area: "accounting", difficulty: 3, fams: ["AFM"],
    make: (r, e) => {
      const profit = r.pick([1_200_000, 1_800_000])
      const multiple = r.pick([6, 8, 10])
      const val = profit * multiple
      const { options, optionsAr, answerIndex } = numericOptions(
        val, [Math.round(profit * multiple * 1.5), Math.round(profit * (multiple - 2)), Math.round(profit / multiple)]
      )
      return {
        stem: `A target of ${e.en} earns sustainable earnings of EGP ${fmt(profit)}; sector P/E multiples imply ${multiple}×. Its equity value is closest to:`,
        stemAr: `تحقق شركة مستهدفة لـ ${e.ar} أرباحًا مستدامة ${egp(profit)}؛ ومضاعف القطاع ${multiple}×. قيمة حقوقها تقارب:`,
        options, optionsAr, answerIndex,
        explanation: `Value = earnings × P/E = ${fmt(profit)} × ${multiple} = ${egp(val)}.`,
        explanationAr: `القيمة = الأرباح × المضاعف = ${egp(val)}.`,
      }
    },
  },
  {
    tag: "Capital structure", area: "accounting", difficulty: 3, fams: ["AFM"],
    make: (_r, e) => ({
      stem: `According to Modigliani & Miller (WITH corporate tax), as ${e.en} adds cheap debt:`,
      stemAr: `وفق موديلياني وميلر (مع وجود ضرائب)، كلما زاد دين ${e.ar} الرخيص:`,
      options: [
        "The WACC falls and firm value rises, because of the tax shield on interest — until distress risks dominate",
        "The WACC stays exactly constant",
        "Firm value falls because debt is risky",
        "Only the cost of equity changes, WACC rises",
      ],
      optionsAr: [
        "ينخفض WACC وترتفع القيمة بسبب الدرع الضريبي للفوائد — حتى تطغى مخاطر التعثر",
        "يثبت WACC تمامًا",
        "تنخفض القيمة لأن الدين خطر",
        "تتغير كلفة الحقوق فقط ويرتفع WACC",
      ],
      answerIndex: 0,
      explanation: "M&M with tax: V_L = V_U + t·D — the interest tax shield adds value; at high gearing, distress and agency costs reverse the effect (the trade-off theory).",
      explanationAr: "نظرية م وم مع الضرائب: الدرع الضريبي يرفع القيمة، وتعكسها مخاطر التعثر العالية.",
    }),
  },
  {
    tag: "APV", area: "accounting", difficulty: 3, fams: ["AFM"],
    make: (r, e) => {
      const base = r.pick([2_000_000, 2_500_000])
      const debt = r.pick([1_000_000, 1_500_000])
      const rate = r.pick([0.1, 0.12])
      const tax = 0.225
      const shield = Math.round(debt * rate * tax)
      const apv = base + shield
      const { options, optionsAr, answerIndex } = numericOptions(
        apv, [base, Math.round(base + debt * rate), Math.round(base + debt * tax)]
      )
      return {
        stem: `The base-case NPV of ${e.en}'s project (all-equity) is EGP ${fmt(base)}; it is financed with EGP ${fmt(debt)} of debt at ${Math.round(rate * 100)}% (tax 22.5%). The adjusted present value (APV) is closest to:`,
        stemAr: `صافي القيمة بتمويل كامل بالحقوق ${egp(base)}؛ ومول بدين ${egp(debt)} بمعدل ${Math.round(rate * 100)}% (ضريبة 22.5%). القيمة الحالية المعدلة:`,
        options, optionsAr, answerIndex,
        explanation: `APV = base NPV + debt × rate × tax = ${fmt(base)} + ${fmt(debt)} × ${Math.round(rate * 100)}% × 22.5% = ${egp(apv)}.`,
        explanationAr: `APV = الأساس + الدين × المعدل × الضريبة = ${egp(apv)}.`,
      }
    },
  },
  {
    tag: "Risk management", area: "accounting", difficulty: 3, fams: ["AFM"],
    make: (_r, e) => ({
      stem: `${e.en} wants to hedge a floating-rate exposure. Using an INTEREST-RATE SWAP:`,
      stemAr: `تريد ${e.ar} تحوط تعرض لمعدل عائم. باستخدام مقايضة فائدة:`,
      options: [
        "It pays fixed and receives floating, converting the exposure to a fixed rate",
        "It pays floating and receives fixed, doubling the exposure",
        "The bank guarantees the principal",
        "The exposure is eliminated at zero cost",
      ],
      optionsAr: [
        "تدفع ثابتًا وتستلم عائمًا فتحول التعثر إلى معدل ثابت",
        "تدفع عائمًا وتستلم ثابتًا فتضاعف التعرض",
        "يضمن البنك رأس المال",
        "يزول التعرض بلا تكلفة",
      ],
      answerIndex: 0,
      explanation: "A payer swap (pay fixed / receive floating) neutralises floating-rate borrowing; only the net interest difference is settled — principal never changes hands.",
      explanationAr: "المقايضة الدافعة تحول الاقتراض العائم إلى ثابت، ويسوى صافي الفرق فقط دون رأس المال.",
    }),
  },
  {
    tag: "Working capital", area: "accounting", difficulty: 3, fams: ["AFM"],
    make: (_r, e) => ({
      stem: `${e.en} faces a cash shortfall. Which funding source is MOST appropriate for a temporary seasonal build-up of inventory?`,
      stemAr: `تواجه ${e.ar} عجزًا نقديًا. أي مصدر تمويل أنسب لتراكم موسمي مؤقت في المخزون؟`,
      options: [
        "A short-term working-capital facility matched to the season",
        "Long-term bonds",
        "Equity issue",
        "Cutting the dividend permanently",
      ],
      optionsAr: [
        "تسهيل قصير الأجل لرأس المال العامل يوازي الموسم",
        "سندات طويلة الأجل",
        "زيادة رأس المال",
        "خفض التوزيعات نهائيًا",
      ],
      answerIndex: 0,
      explanation: "The matching principle: fund temporary current-asset swings with short-term finance; long-term sources fund permanent capital.",
      explanationAr: "مبدأ المواءمة: تمول التقلبات الموسمية بتمويل قصير الأجل والرأسمال الدائم بمصادر طويلة.",
    }),
  },
  {
    tag: "IRR", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (_r, e) => ({
      stem: `Which statement about the IRR of ${e.en}'s projects is CORRECT?`,
      stemAr: `أي عبارة عن معدل الخصم الداخلي لمشروعات ${e.ar} صحيحة؟`,
      options: [
        "IRR is the discount rate at which NPV = 0; mutually exclusive projects are better ranked by NPV",
        "IRR always equals the cost of capital",
        "IRR cannot be computed for uneven cash flows",
        "Higher IRR always means the better project",
      ],
      optionsAr: [
        "المعدل الذي يجعل صافي القيمة صفرًا؛ وتفاضل المشروعات المتبادلة يتم بصافي القيمة",
        "يساوي دائمًا تكلفة رأس المال",
        "لا يحسب للتدفقات غير المنتظمة",
        "الأعلى دائمًا أفضل",
      ],
      answerIndex: 0,
      explanation: "IRR solves NPV=0; for mutually exclusive or differently-scaled projects, NPV at the cost of capital is the superior decision rule.",
      explanationAr: "المعدل يجعل الصافي صفرًا؛ ولمشروعات المتبادلة صافي القيمة هو المعيار الأفضل.",
    }),
  },
  {
    tag: "Islamic finance", area: "accounting", difficulty: 3, fams: ["AFM"],
    make: (_r, e) => ({
      stem: `Under a Mudaraba arrangement between ${e.en}'s bank and an entrepreneur:`,
      stemAr: `في مضاربة بين بنك ${e.ar} ورائد أعمال:`,
      options: [
        "The bank provides capital, the entrepreneur provides effort; profits are shared by ratio and losses are borne by the capital provider",
        "Both share losses equally",
        "The entrepreneur guarantees the capital",
        "The bank takes a fixed interest margin",
      ],
      optionsAr: [
        "البنك يقدم رأس المال وصاحب العمل الخبرة؛ والربح بنسبة والخسارة على ممول رأس المال",
        "يتقاسمان الخسارة بالتساوي",
        "يضمن صاحب العمل رأس المال",
        "يأخذ البنك هامش فائدة ثابتًا",
      ],
      answerIndex: 0,
      explanation: "Mudaraba: rab-al-mal (financier) bears financial loss; mudarib (entrepreneur) loses effort — profit split per agreed ratio.",
      explanationAr: "المضاربة: الخسارة المالية على ممول المال والعامل على جهده، والربح بالنسبة المتفق عليها.",
    }),
  },
  {
    tag: "FX risk", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (_r, e) => ({
      stem: `${e.en} invoices imports in EUR while its revenues are in EGP. This mismatch creates:`,
      stemAr: `تفوتر ${e.ar} وارداتها باليورو وإيراداتها بالجنيه. يخلق هذا التعارض:`,
      options: [
        "Transaction and economic exposure — hedgeable by forwards, futures or invoicing alignment",
        "Only translation exposure",
        "No risk at all under a pegged regime",
        "Pure credit risk",
      ],
      optionsAr: [
        "تعرض معاملات واقتصادي — يمكن تحوطه بالآجلات أو المستقبليات أو مواءمة الفوترة",
        "تعرض ترجمة فقط",
        "لا مخاطر في نظام مربوط",
        "مخاطر ائتمانية بحتة",
      ],
      answerIndex: 0,
      explanation: "Mismatched currencies create transaction exposure (known future flows) and economic exposure (competitiveness); natural hedges come from matching currency of revenues and costs.",
      explanationAr: "ينشأ تعرض المعاملات والاقتصادي، والتحوط الطبيعي من مواءمة عملات الإيرادات والتكاليف.",
    }),
  },
  {
    tag: "Dividend", area: "accounting", difficulty: 2, fams: ["FM", "AFM"],
    make: (r, e) => {
      const earnings = r.pick([4_000_000, 6_000_000])
      const payout = r.pick([0.3, 0.4, 0.5])
      const total = Math.round(earnings * payout)
      const { options, optionsAr, answerIndex } = numericOptions(
        total, [Math.round(earnings * (1 - payout)), Math.round(earnings * payout * 0.5), Math.round(earnings * 0.1)]
      )
      return {
        stem: `${e.en} reports earnings of EGP ${fmt(earnings)} and follows a stable ${Math.round(payout * 100)}% payout ratio. The total dividend is:`,
        stemAr: `تحقق ${e.ar} أرباحًا ${egp(earnings)} وتتبع نسبة توزيع ${Math.round(payout * 100)}%. إجمالي التوزيعات:`,
        options, optionsAr, answerIndex,
        explanation: `Dividend = earnings × payout = ${fmt(earnings)} × ${Math.round(payout * 100)}% = ${egp(total)}.`,
        explanationAr: `التوزيع = الأرباح × النسبة = ${egp(total)}.`,
      }
    },
  },
]

/** silence unused-var lint in the template above */
export const _unused = egp
