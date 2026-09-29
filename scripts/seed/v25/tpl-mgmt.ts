/** v25 management-accounting cluster — costing, CVP, variances, budgeting
 *  and decision-making templates for the MA and PM papers. */
import { type Template, egp, fmt, numericOptions } from "./gen-lib"

const BOTH = ["MA", "PM"] as const

export const MGMT_TEMPLATES: Template[] = [
  {
    tag: "Costing", area: "accounting", difficulty: 1, fams: [...BOTH],
    make: (r, e) => {
      const units = r.pick([5_000, 8_000, 10_000])
      const vc = r.pick([36, 42, 48])
      const fc = r.pick([240_000, 320_000, 400_000])
      const cost = Math.round(vc + fc / units)
      const { options, optionsAr, answerIndex } = numericOptions(
        cost, [vc, Math.round(vc + fc / (units * 2)), Math.round(fcost(fc, units))],
        (n) => `EGP ${n}`, (n) => `${n} جنيه`
      )
      return {
        stem: `${e.en} produces ${fmt(units)} units with variable cost EGP ${vc} per unit and fixed costs EGP ${fmt(fc)}. The total unit cost is:`,
        stemAr: `تنتج ${e.ar} ${fmt(units)} وحدة بتكلفة متغيرة ${vc} جنيه للوحدة وتكاليف ثابتة ${egp(fc)}. تكلفة الوحدة الإجمالية:`,
        options, optionsAr, answerIndex,
        explanation: `Unit cost = VC + FC ÷ units = ${vc} + ${fmt(fc)} ÷ ${fmt(units)} = EGP ${cost}.`,
        explanationAr: `تكلفة الوحدة = المتغيرة + الثابتة ÷ الوحدات = ${cost} جنيه.`,
      }
    },
  },
  {
    tag: "High-low", area: "accounting", difficulty: 1, fams: [...BOTH],
    make: (r, e) => {
      const hq = r.pick([9_000, 10_000])
      const lq = r.pick([5_000, 6_000])
      const hc = r.pick([470_000, 520_000])
      const lc = r.pick([290_000, 330_000])
      const vc = Math.round((hc - lc) / (hq - lq))
      const { options, optionsAr, answerIndex } = numericOptions(
        vc, [Math.round(hc / hq), Math.round(lc / lq), Math.round((hc + lc) / (hq + lq))],
        (n) => `EGP ${n}`, (n) => `${n} جنيه`
      )
      return {
        stem: `At ${fmt(hq)} units, total cost of ${e.en} is EGP ${fmt(hc)}; at ${fmt(lq)} units it is EGP ${fmt(lc)}. Using the high-low method, variable cost per unit is:`,
        stemAr: `عند ${fmt(hq)} وحدة تبلغ التكلفة الكلية لـ ${e.ar} ${egp(hc)}، وعند ${fmt(lq)} وحدة ${egp(lc)}. بطريقة الأعلى والأدنى، التكلفة المتغيرة للوحدة:`,
        options, optionsAr, answerIndex,
        explanation: `VC per unit = (cost at high − cost at low) ÷ (units at high − units at low) = (${fmt(hc)} − ${fmt(lc)}) ÷ (${fmt(hq)} − ${fmt(lq)}) = EGP ${fmt(vc)}.`,
        explanationAr: `المتغيرة للوحدة = (الأعلى − الأدنى) ÷ فرق الكميات = ${vc} جنيه.`,
      }
    },
  },
  {
    tag: "CVP", area: "accounting", difficulty: 1, fams: [...BOTH],
    make: (r, e) => {
      const [price, vc] = r.pick([
        [90, 54], [120, 72], [150, 90], [120, 90], [150, 72], [90, 72],
      ])
      const fc = r.pick([360_000, 540_000])
      const cm = price - vc
      const be = Math.round(fc / cm)
      const { options, optionsAr, answerIndex } = numericOptions(
        be, [Math.round(fc / price), Math.round(fc / cm * 1.25), Math.round(cm * 1000)],
        (n) => `${fmt(n)} units`, (n) => `${fmt(n)} وحدة`
      )
      return {
        stem: `${e.en} sells at EGP ${price}/unit, variable cost EGP ${vc}/unit, fixed costs EGP ${fmt(fc)}. The break-even volume is:`,
        stemAr: `تبيع ${e.ar} بسعر ${price} جنيه ومتغيرة ${vc} جنيه وثابتة ${egp(fc)}. حجم التعادل:`,
        options, optionsAr, answerIndex,
        explanation: `Break-even = FC ÷ contribution per unit = ${fmt(fc)} ÷ ${fmt(cm)} = ${fmt(be)} units.`,
        explanationAr: `التعادل = الثابتة ÷ هامش المساهمة = ${fmt(be)} وحدة.`,
      }
    },
  },
  {
    tag: "CVP", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const price = r.pick([200, 250])
      const vc = r.pick([120, 150])
      const fc = r.pick([640_000, 800_000])
      const target = r.pick([160_000, 200_000])
      const cm = price - vc
      const vol = Math.round((fc + target) / cm)
      const { options, optionsAr, answerIndex } = numericOptions(
        vol, [Math.round(fc / cm), Math.round((fc + target) / price), Math.round((fc + target) / vc)],
        (n) => `${fmt(n)} units`, (n) => `${fmt(n)} وحدة`
      )
      return {
        stem: `To earn a target profit of EGP ${fmt(target)}, with price EGP ${price}, variable cost EGP ${vc} and fixed costs EGP ${fmt(fc)}, ${e.en} must sell:`,
        stemAr: `لتحقيق ربح مستهدف ${egp(target)} بسعر ${price} ومتغيرة ${vc} وثابتة ${egp(fc)}، يلزم ${e.ar} بيع:`,
        options, optionsAr, answerIndex,
        explanation: `Volume = (FC + target) ÷ contribution = (${fmt(fc)} + ${fmt(target)}) ÷ ${fmt(cm)} = ${fmt(vol)} units.`,
        explanationAr: `الكمية = (الثابتة + المستهدف) ÷ هامش المساهمة = ${fmt(vol)} وحدة.`,
      }
    },
  },
  {
    tag: "Margin", area: "accounting", difficulty: 2, fams: ["PM"],
    make: (r, e) => {
      const price = r.pick([40, 50, 60])
      const vc = r.pick([24, 30, 36])
      const ratio = Math.round(((price - vc) / price) * 100)
      const { options, optionsAr, answerIndex } = numericOptions(
        ratio, [Math.round((vc / price) * 100), Math.round(((price - vc) / vc) * 100), 50],
        (n) => `${n}%`, (n) => `${n}%`
      )
      return {
        stem: `${e.en} prices at EGP ${price} per unit with variable cost of EGP ${vc}. The contribution-to-sales (C/S) ratio is:`,
        stemAr: `تسعن ${e.ar} ${price} جنيه بمتغيرة ${vc}. نسبة هامش المساهمة إلى المبيعات:`,
        options, optionsAr, answerIndex,
        explanation: `C/S ratio = (${price} − ${vc}) ÷ ${price} = ${ratio}%.`,
        explanationAr: `النسبة = (${price} − ${vc}) ÷ ${price} = ${ratio}%.`,
      }
    },
  },
  {
    tag: "Variances", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const sqty = r.pick([2.5, 3, 4])
      const aqty = r.pick([2.8, 3.2, 4.4])
      const price = r.pick([80, 100, 120])
      const output = r.pick([8_000, 9_000, 12_000])
      const usage = Math.round((aqty - sqty) * output * price)
      const { options, optionsAr, answerIndex } = numericOptions(
        usage, [-usage, Math.round((sqty - aqty) * output * price * 0.5), 0]
      )
      return {
        stem: `The standard material usage of ${e.en} is ${sqty} kg per unit; actual usage was ${aqty} kg for ${fmt(output)} units at standard cost EGP ${price}/kg. The material usage variance is:`,
        stemAr: `المعيار لـ ${e.ar} هو ${sqty} كجم للوحدة والفعلي ${aqty} كجم لإنتاج ${fmt(output)} وحدة بتكلفة معيارية ${price} جنيه/كجم. انحراف الاستخدام:`,
        options, optionsAr, answerIndex,
        explanation: `Usage variance = (actual qty − standard qty for actual output) × standard price = (${fmt(aqty)} − ${sqty}) × ${fmt(output)} × ${price} = EGP ${fmt(usage)} adverse.`,
        explanationAr: `انحراف الاستخدام = (الفعلي − المعياري) × الكمية × السعر = ${egp(usage)} غير مواتٍ.`,
      }
    },
  },
  {
    tag: "Variances", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const srate = r.pick([60, 75, 90])
      const arate = r.pick([66, 82, 98])
      const hours = r.pick([12_000, 15_000, 18_000])
      const rate = (arate - srate) * hours
      const { options, optionsAr, answerIndex } = numericOptions(
        rate, [-rate, Math.round(rate * 0.5), 0]
      )
      return {
        stem: `Actual labour hours at ${e.en} were ${fmt(hours)} at an actual rate of EGP ${arate}/hour against a standard rate of EGP ${srate}/hour. The labour rate variance is:`,
        stemAr: `بلغت ساعات العمل الفعلية ${fmt(hours)} بمعدل فعلي ${arate} جنيه مقابل معياري ${srate} جنيه. انحراف معدل العمل:`,
        options, optionsAr, answerIndex,
        explanation: `Rate variance = actual hours × (actual rate − standard rate) = ${fmt(hours)} × (${arate} − ${srate}) = EGP ${fmt(rate)} adverse.`,
        explanationAr: `انحراف المعدل = الساعات × (الفعلي − المعياري) = ${egp(rate)} غير مواتٍ.`,
      }
    },
  },
  {
    tag: "Variances", area: "accounting", difficulty: 3, fams: ["PM"],
    make: (r, e) => {
      const sprice = r.pick([50, 60])
      const aprice = r.pick([56, 66])
      const kg = r.pick([10_000, 15_000])
      const priceVar = (aprice - sprice) * kg
      const { options, optionsAr, answerIndex } = numericOptions(
        priceVar, [-priceVar, Math.round(priceVar * 0.4), 0]
      )
      return {
        stem: `${e.en} bought ${fmt(kg)} kg of material at EGP ${aprice}/kg versus the standard EGP ${sprice}/kg (purchases measured at purchase). The material price variance is:`,
        stemAr: `اشترت ${e.ar} ${fmt(kg)} كجم بسعر ${aprice} جنيه مقابل معياري ${sprice} جنيه. انحراف السعر:`,
        options, optionsAr, answerIndex,
        explanation: `Price variance = actual quantity × (actual price − standard price) = ${fmt(kg)} × (${aprice} − ${sprice}) = EGP ${fmt(priceVar)} adverse.`,
        explanationAr: `انحراف السعر = الكمية × فرق السعر = ${egp(priceVar)} غير مواتٍ.`,
      }
    },
  },
  {
    tag: "Mix & yield", area: "accounting", difficulty: 3, fams: ["PM"],
    make: (r, e) => {
      const planned = r.pick([10_000, 12_000])
      const yieldPct = r.pick([0.9, 0.95])
      const out = Math.round(planned * yieldPct)
      const loss = planned - out
      const { options, optionsAr, answerIndex } = numericOptions(
        loss, [out, Math.round(planned * (1 - yieldPct) * 2), 0],
        (n) => `${fmt(n)} kg`, (n) => `${fmt(n)} كجم`
      )
      return {
        stem: `A process of ${e.en} inputs ${fmt(planned)} kg with an expected yield of ${Math.round(yieldPct * 100)}%. The expected yield loss is:`,
        stemAr: `تدخل عملية ${e.ar} ${fmt(planned)} كجم بمردود متوقع ${Math.round(yieldPct * 100)}%. الفاقد المتوقع:`,
        options, optionsAr, answerIndex,
        explanation: `Yield loss = input × (1 − yield) = ${fmt(planned)} × ${Math.round((1 - yieldPct) * 100)}% = ${fmt(loss)} kg.`,
        explanationAr: `الفاقد = المدخل × (1 − المردود) = ${fmt(loss)} كجم.`,
      }
    },
  },
  {
    tag: "ABC", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const pool = r.pick([420_000, 560_000, 630_000])
      const drivers = r.pick([12_000, 14_000])
      const uses = r.pick([240, 300, 350])
      const rate = Math.round((pool / drivers) * uses)
      const { options, optionsAr, answerIndex } = numericOptions(
        rate, [Math.round(pool / drivers), Math.round(uses * 100), Math.round(pool / uses)]
      )
      return {
        stem: `${e.en} has a setup cost pool of EGP ${fmt(pool)} and ${fmt(drivers)} setup hours as the cost driver. A product needing ${uses} setup hours absorbs:`,
        stemAr: `لدى ${e.ar} مجموعة تكاليف تجهيز ${egp(pool)} وعدد ${fmt(drivers)} ساعة تجهيز كمُحفِّز. المنتج المستخدم ${uses} ساعة يحمّل:`,
        options, optionsAr, answerIndex,
        explanation: `ABC rate = pool ÷ drivers = ${egp(pool)} ÷ ${fmt(drivers)}; product absorbs × ${uses} hours = EGP ${fmt(rate)}.`,
        explanationAr: `معدل ABC = المجموعة ÷ المحفزات؛ وتحميل المنتج = ${egp(rate)}.`,
      }
    },
  },
  {
    tag: "Relevant cost", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (r, e) => {
      const mv = r.pick([36_000, 48_000])
      const nbv = r.pick([20_000, 28_000])
      const cont = r.pick([15_000, 18_000])
      const relevant = mv + cont
      const { options, optionsAr, answerIndex } = numericOptions(
        relevant, [nbv + cont, mv, nbv],
      )
      return {
        stem: `A one-off contract requires materials already held by ${e.en}: net realisable value on resale EGP ${fmt(mv)}, original cost EGP ${fmt(nbv)}, plus further conversion costs of EGP ${fmt(cont)}. The relevant cost is:`,
        stemAr: `عقد خاص يحتاج موادًا لدى ${e.ar}: قيمة بيع صافية ${egp(mv)} وتكلفة أصلية ${egp(nbv)} وتكاليف تشغيل إضافية ${egp(cont)}. التكلفة الملائمة:`,
        options, optionsAr, answerIndex,
        explanation: `Relevant cost = opportunity cost of resale (EGP ${fmt(mv)}) + future conversion costs (EGP ${fmt(cont)}) = EGP ${fmt(relevant)}; sunk original cost is irrelevant.`,
        explanationAr: `التكلفة الملائمة = تكلفة الفرصة ${egp(mv)} + التشغيل المستقبلي ${egp(cont)} = ${egp(relevant)}؛ والتكلفة الغارقة لا تُعتبر.`,
      }
    },
  },
  {
    tag: "Make or buy", area: "accounting", difficulty: 2, fams: ["PM"],
    make: (r, e) => {
      const makeVc = r.pick([54, 66, 78])
      const buy = r.pick([60, 72, 84])
      const fcSaved = r.pick([6, 8, 10])
      const diff = buy - (makeVc - fcSaved)
      const { options, optionsAr, answerIndex } = numericOptions(
        diff, [-diff, Math.round(fcSaved * 2), 0],
        (n) => `EGP ${n} per unit`, (n) => `${n} جنيه للوحدة`
      )
      return {
        stem: `A component of ${e.en} can be made at variable cost EGP ${makeVc} (avoidable fixed cost EGP ${fcSaved}/unit if outsourced) or bought for EGP ${buy}. Buying changes cost by:`,
        stemAr: `يمكن تصنيع قطعة ${e.ar} بمتغيرة ${makeVc} جنيه (ثابتة قابلة للتجنب ${fcSaved} جنيه عند الشراء) أو شراؤها بـ ${buy} جنيه. يشتراء يغير التكلفة بمقدار:`,
        options, optionsAr, answerIndex,
        explanation: `Buy price − (make VC − avoidable fixed) = ${buy} − (${makeVc} − ${fcSaved}) = EGP ${diff} per unit (positive = dearer).`,
        explanationAr: `سعر الشراء − (المتغيرة − الثابتة المتجنبة) = ${diff} جنيه للوحدة (موجب = أغلى).`,
      }
    },
  },
  {
    tag: "Pricing", area: "accounting", difficulty: 3, fams: ["PM"],
    make: (r, e) => {
      const vc = r.pick([60, 80, 100])
      const markup = r.pick([0.3, 0.4, 0.5])
      const price = Math.round(vc * (1 + markup))
      const { options, optionsAr, answerIndex } = numericOptions(
        price, [Math.round(vc + vc * markup * 0.5), Math.round(vc * (1 + markup * 2)), vc],
        (n) => `EGP ${n}`, (n) => `${n} جنيه`
      )
      return {
        stem: `A marginal-cost-plus price at ${e.en}: variable cost EGP ${vc}/unit with a ${Math.round(markup * 100)}% markup on marginal cost. The price is:`,
        stemAr: `تسعير هامشي لدى ${e.ar}: متغيرة ${vc} جنيه وهامش ${Math.round(markup * 100)}%. السعر:`,
        options, optionsAr, answerIndex,
        explanation: `Price = VC × (1 + markup) = ${vc} × ${Math.round(1 + markup)} = EGP ${price}.`,
        explanationAr: `السعر = المتغيرة × (1 + الهامش) = ${price} جنيه.`,
      }
    },
  },
  {
    tag: "Target costing", area: "accounting", difficulty: 2, fams: ["PM"],
    make: (r, e) => {
      const price = r.pick([250, 300, 350])
      const margin = r.pick([0.2, 0.25, 0.3])
      const est = r.pick([210, 260, 300])
      const target = Math.round(price * (1 - margin))
      const gap = est - target
      const { options, optionsAr, answerIndex } = numericOptions(
        gap, [target - est, Math.round(price * margin), 0]
      )
      return {
        stem: `${e.en} targets a selling price of EGP ${price} with a ${Math.round(margin * 100)}% profit margin; the estimated cost is EGP ${est}. The cost gap to close is:`,
        stemAr: `تستهدف ${e.ar} سعرًا ${price} جنيه بهامش ${Math.round(margin * 100)}%؛ والتكلفة المقدرة ${est} جنيه. فجوة التكلفة الواجب سدها:`,
        options, optionsAr, answerIndex,
        explanation: `Target cost = ${price} × (1 − ${Math.round(margin * 100)}%) = ${target}; gap = estimate − target = ${gap}.`,
        explanationAr: `التكلفة المستهدفة = ${target}؛ والفجوة = المقدرة − المستهدفة = ${gap}.`,
      }
    },
  },
  {
    tag: "Throughput", area: "accounting", difficulty: 3, fams: ["PM"],
    make: (r, e) => {
      const price = r.pick([150, 180, 220])
      const mat = r.pick([40, 50, 60])
      const bmin = r.pick([10, 12, 15])
      const tpr = Math.round((price - mat) / bmin)
      const { options, optionsAr, answerIndex } = numericOptions(
        tpr, [Math.round(price / bmin), Math.round((price - mat) / (bmin * 2)), Math.round(price - mat)],
        (n) => `EGP ${n}/hr`, (n) => `${n} جنيه/ساعة`
      )
      return {
        stem: `A product of ${e.en} sells at EGP ${price} with material cost EGP ${mat}; the bottleneck machine takes ${bmin} minutes per unit. The throughput accounting ratio per bottleneck hour (return/factory cost excluded) — the throughput per bottleneck hour is:`,
        stemAr: `منتج ${e.ar} يباع ${price} جنيه بمواد ${mat} جنيه؛ وتستهلك الوحدة ${bmin} دقيقة على قيد العنق. الإنتاجية لكل ساعة عنق:`,
        options, optionsAr, answerIndex,
        explanation: `Throughput per bottleneck hour = (price − material) ÷ bottleneck minutes × 60 = (${price} − ${mat}) ÷ ${bmin} × 60 = EGP ${fmt(tpr)}/hr.`,
        explanationAr: `الإنتاجية = (السعر − المواد) ÷ دقائق العنق × 60 = ${fmt(tpr)} جنيه/ساعة.`,
      }
    },
  },
  {
    tag: "Budgeting", area: "accounting", difficulty: 1, fams: [...BOTH],
    make: (_r, e) => ({
      stem: `Which budgeting approach BEST supports ${e.en} when activity levels are uncertain during the year?`,
      stemAr: `أي نهج موازنات يناسب ${e.ar} عند عدم يقين مستويات النشاط خلال السنة؟`,
      options: [
        "Flexible budgeting — recosting the plan at the actual activity level",
        "Zero-based budgeting applied weekly",
        "A fixed budget approved once a year",
        "Rolling cash budget only",
      ],
      optionsAr: [
        "الموازنات المرنة — إعادة احتساب الخطة عند مستوى النشاط الفعلي",
        "الموازنة الصفرية أسبوعيًا",
        "موازنة ثابتة تعتمد مرة سنويًا",
        "موازنة نقدية متجددة فقط",
      ],
      answerIndex: 0,
      explanation: "Flexible budgets restate costs for the actual volume, making control comparisons meaningful; fixed budgets compare apples with oranges when volume shifts.",
      explanationAr: "الموازنات المرنة تعيد عرض التكاليف عند الحجم الفعلي فتجعل المقارنات الرقابية ذات معنى.",
    }),
  },
  {
    tag: "Budgeting", area: "accounting", difficulty: 2, fams: ["PM"],
    make: (_r, e) => ({
      stem: `Under zero-based budgeting at ${e.en}, every budget line must be:`,
      stemAr: `في الموازنة الصفرية لدى ${e.ar} يلزم أن يُبرَّر كل بند:`,
      options: [
        "Justified from a zero base as if the activity were new — decision packages ranked by cost-benefit",
        "Increased by last year's inflation rate",
        "Copied from the prior year budget",
        "Set equal to the industry average",
      ],
      optionsAr: [
        "من نقطة الصفر كأن النشاط جديد — حزم قرار مرتبة بالتكلفة والمنفعة",
        "زيادة بمعدل تضخم العام السابق",
        "نسخ من موازنة العام السابق",
        "مساوًا لمتوسط الصناعة",
      ],
      answerIndex: 0,
      explanation: "ZBB starts each period from zero: activities are justified in decision packages and ranked — historically efficient but administratively heavy.",
      explanationAr: "تبدأ الموازنة الصفرية من الصفر: تبرر الأنشطة في حزم قرار وترتب — فعالة لكنها إداريًا مكلفة.",
    }),
  },
  {
    tag: "Performance", area: "accounting", difficulty: 2, fams: ["PM", "APM"],
    make: (_r, e) => ({
      stem: `Which balanced-scorecard perspective of ${e.en} tracks employee satisfaction and skills development?`,
      stemAr: `أي منظور لبطاقة الأداء المتوازن لـ ${e.ar} يتتبع رضا الموظفين وتطوير المهارات؟`,
      options: ["Learning and growth", "Financial", "Customer", "Internal business process"],
      optionsAr: ["التعلم والنمو", "المالي", "العملاء", "العمليات الداخلية"],
      answerIndex: 0,
      explanation: "The four BSC perspectives: financial, customer, internal process, learning and growth — the last covers people, systems and culture.",
      explanationAr: "مناظر البطاقة الأربعة: المالي والعملاء والعمليات والتعلم والنمو — والأخير يشمل الأفراد والأنظمة والثقافة.",
    }),
  },
  {
    tag: "Transfer pricing", area: "accounting", difficulty: 3, fams: ["PM"],
    make: (r, e) => {
      const mc = r.pick([40, 50, 60])
      const sp = r.pick([70, 80, 90])
      const cap = r.pick([0.5, 0.6])
      const tp = Math.round(mc + (sp - mc) * cap)
      const { options, optionsAr, answerIndex } = numericOptions(
        tp, [mc, sp, Math.round((mc + sp) / 2)],
        (n) => `EGP ${n}`, (n) => `${n} جنيه`
      )
      return {
        stem: `A division of ${e.en} with spare capacity negotiates a transfer price: marginal cost EGP ${mc}, intermediate market price EGP ${sp}; head-office policy shares the contribution ${Math.round((1 - cap) * 100)}/${Math.round(cap * 100)}. The transfer price is:`,
        stemAr: `قسم لدى ${e.ar} بطاقة فائضة يتفاوض على سعر تحويل: تكلفة حدية ${mc} جنيه وسعر سوق وسيط ${sp} جنيه؛ وتقاسم الإدارة الهامش ${Math.round((1 - cap) * 100)}/${Math.round(cap * 100)}. سعر التحويل:`,
        options, optionsAr, answerIndex,
        explanation: `TP = MC + share × (market − MC) = ${mc} + ${Math.round(cap * 100)}% × (${sp} − ${mc}) = EGP ${tp}.`,
        explanationAr: `سعر التحويل = الحدية + النسبة × فرق السوق = ${tp} جنيه.`,
      }
    },
  },
  {
    tag: "Investment", area: "accounting", difficulty: 2, fams: ["MA", "FM"],
    make: (r, e) => {
      const profit = r.pick([420_000, 560_000, 680_000])
      const cap = r.pick([2_800_000, 3_500_000])
      const roi = Math.round((profit / cap) * 100)
      const { options, optionsAr, answerIndex } = numericOptions(
        roi, [Math.round((cap / profit) * 100), Math.round((profit / cap) * 50), 20],
        (n) => `${n}%`, (n) => `${n}%`
      )
      return {
        stem: `A division of ${e.en} earns controllable profit EGP ${fmt(profit)} on capital employed of EGP ${fmt(cap)}. Return on investment (ROI) is:`,
        stemAr: `يحقق قسم ${e.ar} ربحًا رقابيًا ${egp(profit)} على رأس مال مستخدم ${egp(cap)}. العائد على الاستثمار:`,
        options, optionsAr, answerIndex,
        explanation: `ROI = controllable profit ÷ capital employed = ${fmt(profit)} ÷ ${fmt(cap)} = ${roi}%.`,
        explanationAr: `العائد = الربح الرقابي ÷ رأس المال = ${roi}%.`,
      }
    },
  },
  {
    tag: "Investment", area: "accounting", difficulty: 2, fams: ["PM", "MA"],
    make: (r, e) => {
      const profit = r.pick([420_000, 560_000])
      const cap = r.pick([2_800_000, 3_500_000])
      const cost = r.pick([0.1, 0.12])
      const imputed = cap * cost
      const ri = Math.round(profit - imputed)
      const { options, optionsAr, answerIndex } = numericOptions(
        ri, [Math.round(profit + imputed), Math.round(profit * 0.5), Math.round(cap * cost * 2)]
      )
      return {
        stem: `With controllable profit EGP ${fmt(profit)}, capital employed EGP ${fmt(cap)} and an imputed interest rate of ${Math.round(cost * 100)}%, the residual income (RI) of ${e.en}'s division is:`,
        stemAr: `بربح رقابي ${egp(profit)} ورأس مال ${egp(cap)} ومعدل محتسب ${Math.round(cost * 100)}%، الدخل المتبقي لقسم ${e.ar}:`,
        options, optionsAr, answerIndex,
        explanation: `RI = profit − (capital × imputed rate) = ${fmt(profit)} − ${fmt(Math.round(cap))} × ${Math.round(cost * 100)}% = EGP ${fmt(ri)}.`,
        explanationAr: `الدخل المتبقي = الربح − (رأس المال × المعدل) = ${fmt(ri)} جنيه.`,
      }
    },
  },
  {
    tag: "Costing", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (_r, e) => ({
      stem: `Under absorption costing at ${e.en}, fixed production overheads are:`,
      stemAr: `في التحميل الكامل لدى ${e.ar} تعالج التكاليف الصناعية الثابتة:`,
      options: [
        "Absorbed into unit inventory cost via an OAR and released to P&L when sold",
        "Expensed entirely as period costs",
        "Ignored for inventory valuation",
        "Treated as marketing expenses",
      ],
      optionsAr: [
        "تحمّل على تكلفة الوحدة وتقفل في الربح والخسارة عند البيع",
        "تحمّل مصروفات فترة بالكامل",
        "تتجاهل في تقييم المخزون",
        "تعالج كمصروفات تسويق",
      ],
      answerIndex: 0,
      explanation: "Absorption costing includes fixed production overhead in inventory (via OAR); marginal costing expenses it in the period incurred — the profit difference is inventory movement × OAR.",
      explanationAr: "يشمل التحميل الكامل الثابتة في المخزون، بينما تقفلها التكلفة الحدية في الفترة — والفرق حركة المخزون × معدل التحميل.",
    }),
  },
  {
    tag: "Economic order", area: "accounting", difficulty: 3, fams: ["MA", "FM"],
    make: (r, e) => {
      const usage = r.pick([36_000, 48_000, 60_000])
      const order = r.pick([150, 200, 250])
      const hold = r.pick([6, 8, 10])
      const eoq = Math.round(Math.sqrt((2 * usage * order) / hold))
      const { options, optionsAr, answerIndex } = numericOptions(
        eoq, [Math.round(Math.sqrt((usage * order) / hold)), Math.round(usage / 12), Math.round(order * 10)],
        (n) => `${fmt(n)} units`, (n) => `${fmt(n)} وحدة`
      )
      return {
        stem: `Annual demand at ${e.en} is ${fmt(usage)} units; ordering cost EGP ${order} per order and holding cost EGP ${hold} per unit per year. The EOQ is closest to:`,
        stemAr: `الطلب السنوي ${fmt(usage)} وحدة؛ وتكلفة الطلب ${order} جنيه والحفظ ${hold} جنيه للوحدة سنويًا. الكمية الاقتصادية تقارب:`,
        options, optionsAr, answerIndex,
        explanation: `EOQ = √(2 × demand × order cost ÷ holding cost) = √(2 × ${fmt(usage)} × ${order} ÷ ${hold}) = ${fmt(eoq)} units.`,
        explanationAr: `الكمية = جذر (2 × الطلب × تكلفة الطلب ÷ تكلفة الحفظ) = ${fmt(eoq)} وحدة.`,
      }
    },
  },
  {
    tag: "Relevant cost", area: "accounting", difficulty: 2, fams: [...BOTH],
    make: (_r, e) => ({
      stem: `In a shutdown decision for one of ${e.en}'s product lines, which cost is RELEVANT?`,
      stemAr: `في قرار إيقاف أحد خطوط ${e.ar}، أي تكلفة ملائمة؟`,
      options: [
        "Avoidable fixed costs specific to the line and the lost contribution",
        "Already-committed head-office apportionment",
        "Last year's advertising campaign",
        "The line's accumulated depreciation",
      ],
      optionsAr: [
        "الثابتة القابلة للتجنب والهامش المفقود",
        "المخصص من المركز الرئيسي الملتزم",
        "حملة العام السابق الإعلانية",
        "مجمع إهلاك الخط",
      ],
      answerIndex: 0,
      explanation: "Relevant = future cash flows that differ between alternatives: lost contribution plus avoidable fixed costs; committed apportionments and sunk costs are irrelevant.",
      explanationAr: "الملائمة تدفقات مستقبلية تتغير بالبديلين: الهامش المفقود والثابتة المتجنبة؛ والمخصصات والغارقة غير ملائمة.",
    }),
  },
  {
    tag: "Risk", area: "accounting", difficulty: 2, fams: ["MA", "PM", "APM"],
    make: (r, e) => {
      const [risk, ex, exAr] = r.pick([
        ["price", "the selling price may fall with new competition", "احتمال هبوط السعر بمنافسة جديدة"],
        ["demand", "customer demand may be lower than forecast", "احتمال كون الطلب أقل من المتوقع"],
        ["cost", "input prices may rise with inflation", "احتمال ارتفاع مدخلات التكلفة بالتضخم"],
      ])
      return {
        stem: `When budgeting, ${e.en} notes that ${ex}. This is best described as ${risk} risk, managed by:`,
        stemAr: `عند الموازنة تلاحظ ${e.ar} أن ${exAr}. يوصف ذلك بخطر ${risk === "price" ? "السعر" : risk === "demand" ? "الطلب" : "التكلفة"} ويدار بـ:`,
        options: [
          "Sensitivity analysis / expected values on the affected variable",
          "Ignoring it as uncontrollable",
          "Doubling the contingency to 100%",
          "Reducing the budget horizon to one month",
        ],
        optionsAr: [
          "تحليل الحساسية أو القيم المتوقعة للمتغير",
          "تجاهله لعدم التحكم",
          "مضاعفة الطارئ إلى 100%",
          "تقصير أفق الموازنة لشهر",
        ],
        answerIndex: 0,
        explanation: "Operational risks (price, demand, cost) are modelled with sensitivity analysis, expected values, simulation or flexible budgets.",
        explanationAr: "تدار مخاطر السعر والطلب والتكلفة بتحليل الحساسية والقيم المتوقعة والمحاكاة والموازنات المرنة.",
      }
    },
  },
  {
    tag: "Information", area: "accounting", difficulty: 2, fams: ["PM", "APM"],
    make: (_r, e) => ({
      stem: `Which quality makes management information at ${e.en} fit for decision-making?`,
      stemAr: `أي خاصية تجعل معلومات ${e.ar} الإدارية صالحة للقرارات؟`,
      options: [
        "Accuracy, timeliness and relevance to the decision at hand",
        "Maximum detail regardless of cost",
        "Preparation only annually",
        "Strictly financial content only",
      ],
      optionsAr: [
        "الدقة والتوقيت والملاءمة للقرار",
        "أقصى تفصيل بغض النظر عن الكلفة",
        "الإعداد سنويًا فقط",
        "محتوى مالي بحت فقط",
      ],
      answerIndex: 0,
      explanation: "Good management information is accurate, timely, relevant and cost-beneficial — detail beyond the decision need destroys clarity and costs money.",
      explanationAr: "المعلومة الجيدة دقيقة وموقوتة وملائمة ومتوازنة مع كلفتها — والتفصيل الزائد يضيع الوضوح.",
    }),
  },
]

/** helper used by the unit-cost template (never exported to the app) */
function fcost(fc: number, units: number): number {
  return fc / units
}
