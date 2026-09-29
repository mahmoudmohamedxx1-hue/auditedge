/** v25 financial-reporting cluster — IFRS/IAS question templates for the
 *  FA, FR, SBR and IFRS-diploma (DIP) papers. `fams` keeps syllabus
 *  fidelity: FA draws foundations items, SBR draws the strategic ones. */
import {
  type Template, annuityArrears, annuityDue, egp, fmt, mcq, numericOptions
} from "./gen-lib"

const ALL = ["FA", "FR", "SBR", "DIP"] as const
const SKILLS = ["FR", "SBR", "DIP"] as const
const HARD = ["SBR", "DIP"] as const

export const FINREP_TEMPLATES: Template[] = [
  {
    tag: "Control accounts", area: "accounting", difficulty: 1, fams: ["FA"],
    make: (r, e) => {
      const total = r.pick([318_400, 426_700, 512_900])
      const credit = r.pick([2_300, 4_600, 6_100])
      const { options, optionsAr, answerIndex } = numericOptions(
        total - credit, [total, Math.round(total - credit * 2), Math.round(total + credit)],
        (n) => `EGP ${fmt(n)}`, (n) => `${fmt(n)} \u062c\u0646\u064a\u0647`
      )
      return {
        stem: `${e.en}'s purchases journal totaled EGP ${fmt(total)} for the month; EGP ${fmt(credit)} related to returns outwards. The credit to the payables control account is:`,
        stemAr: `\u0628\u0644\u063a \u0645\u062c\u0645\u0648\u0639 \u0645\u0634\u062a\u0631\u064a\u0627\u062a ${e.ar} ${egp(total)} \u0634\u0647\u0631\u064a\u064b\u0627\u061b \u0645\u0646\u0647\u0627 ${egp(credit)} \u0645\u0631\u062a\u062f\u0627\u062a \u0634\u0631\u0627\u0621. \u0627\u0644\u0642\u064a\u062f \u0627\u0644\u062f\u0627\u0626\u0646 \u0641\u064a \u062d\u0633\u0627\u0628 \u0627\u0644\u0631\u0642\u0627\u0628\u0629 \u064a\u0633\u0627\u0648\u064a:`,
        options, optionsAr, answerIndex,
        explanation: `Payables control = purchases \u2212 returns outwards = ${egp(total)} \u2212 ${egp(credit)} = ${egp(total - credit)}.`,
        explanationAr: `\u0627\u0644\u062f\u0627\u0626\u0646\u0648\u0646 = \u0627\u0644\u0645\u0634\u062a\u0631\u064a\u0627\u062a \u2212 \u0627\u0644\u0645\u0631\u062a\u062f\u0627\u062a = ${egp(total - credit)}.`,
      }
    },
  },
  {
    tag: "Bank reconciliation", area: "accounting", difficulty: 1, fams: ["FA"],
    make: (r, e) => {
      const book = r.pick([482_600, 561_300, 624_800])
      const uncredited = r.pick([18_500, 23_400, 29_700])
      const { options, optionsAr, answerIndex } = numericOptions(
        book + uncredited, [book - uncredited, book, Math.round(book + uncredited * 2)],
        (n) => `EGP ${fmt(n)}`, (n) => `${fmt(n)} \u062c\u0646\u064a\u0647`
      )
      return {
        stem: `${e.en}'s cash book shows EGP ${fmt(book)}; receipts of EGP ${fmt(uncredited)} recorded by the company are not yet credited by the bank. The bank statement balance is:`,
        stemAr: `\u064a\u0638\u0647\u0631 \u062f\u0641\u062a\u0631 \u0627\u0644\u0646\u0642\u062f\u064a\u0629 \u0644\u0640 ${e.ar} ${egp(book)}\u061b \u0648\u0625\u064a\u0635\u0627\u0644\u0627\u062a ${egp(uncredited)} \u0645\u0633\u062c\u0644\u0629 \u0644\u062f\u0649 \u0627\u0644\u0634\u0631\u0643\u0629 \u0648\u0644\u0645 \u062a\u0639\u062f \u0627\u0644\u0628\u0646\u0643. \u0631\u0635\u064a\u062f \u0643\u0634\u0641 \u0627\u0644\u0628\u0646\u0643:`,
        options, optionsAr, answerIndex,
        explanation: `Bank statement = cash book + uncredited deposits (in transit) = ${egp(book)} + ${egp(uncredited)} = ${egp(book + uncredited)}.`,
        explanationAr: `\u0631\u0635\u064a\u062f \u0627\u0644\u0643\u0634\u0641 = \u0627\u0644\u062f\u0641\u062a\u0631 + \u0625\u064a\u0635\u0627\u0644\u0627\u062a \u0641\u064a \u0627\u0644\u0637\u0631\u064a\u0642 = ${egp(book + uncredited)}.`,
      }
    },
  },
  {
    tag: "IFRS 16", area: "accounting", difficulty: 2, fams: [...ALL],
    make: (r, e) => {
      const years = r.pick([3, 4, 5])
      const pay = r.pick([40_000, 50_000, 60_000, 80_000])
      const rate = r.pick([0.08, 0.1])
      const rou = Math.round(pay * annuityArrears(years, rate))
      const { options, optionsAr, answerIndex } = numericOptions(
        rou,
        [pay * years, Math.round(pay * annuityDue(years, rate)), Math.round(rou + pay)]
      )
      return {
        stem: `${e.en} signs a ${years}-year lease paying EGP ${fmt(pay)} annually in arrears; the incremental borrowing rate is ${Math.round(rate * 100)}%. The initial right-of-use asset (no initial direct costs) is closest to:`,
        stemAr: `توقع ${e.ar} عقد إيجار ${years} سنوات بقسط سنوي ${egp(pay)} يدفع آخر كل سنة، ومعدل الاقتراض الحدي ${Math.round(rate * 100)}%. أصل حق الاستخدام الابتدائي (بلا تكاليف مباشرة) يقارب:`,
        options, optionsAr, answerIndex,
        explanation: `ROU = payment × annuity (arrears) = EGP ${fmt(pay)} × ${annuityArrears(years, rate).toFixed(3)} = EGP ${fmt(rou)}.`,
        explanationAr: `أصل حق الاستخدام = القسط × معامل السنة العادية = ${egp(pay)} × ${annuityArrears(years, rate).toFixed(3)} = ${egp(rou)}.`,
      }
    },
  },
  {
    tag: "IFRS 16", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (r, e) => {
      const rou = r.pick([220_000, 260_000, 300_000])
      const years = r.pick([4, 5, 8])
      const dep = Math.round(rou / years)
      const { options, optionsAr, answerIndex } = numericOptions(
        dep, [Math.round(rou / (years - 1)), Math.round(rou / (years + 2)), Math.round(rou * 0.25)]
      )
      return {
        stem: `${e.en} capitalised a right-of-use asset of EGP ${fmt(rou)} over a ${years}-year lease term (straight-line, no residual). The annual depreciation charge is:`,
        stemAr: `رسملت ${e.ar} أصل حق استخدام بقيمة ${egp(rou)} على مدة إيجار ${years} سنوات (قسط ثابت بلا متبقي). قسط الإهلاك السنوي يساوي:`,
        options, optionsAr, answerIndex,
        explanation: `Depreciation = ROU ÷ lease term = EGP ${fmt(rou)} ÷ ${years} = EGP ${fmt(dep)}.`,
        explanationAr: `الإهلاك = أصل حق الاستخدام ÷ المدة = ${egp(rou)} ÷ ${years} = ${egp(dep)}.`,
      }
    },
  },
  {
    tag: "IAS 36", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (r, e) => {
      const cv = r.pick([900_000, 1_200_000, 1_500_000])
      const rv = r.pick([700_000, 850_000, 950_000])
      const vi = Math.round(rv * 1.05)
      const higher = Math.max(rv, vi)
      const loss = cv - higher
      const { options, optionsAr, answerIndex } = numericOptions(
        loss, [cv - rv, cv - vi, Math.round(loss * 0.5)]
      )
      return {
        stem: `${e.en} carries a cash-generating unit at carrying amount EGP ${fmt(cv)}. Fair value less costs of disposal is EGP ${fmt(rv)}; value in use is EGP ${fmt(vi)}. The impairment loss is:`,
        stemAr: `تحمل ${e.ar} وحدة مولدة للنقد بقيمة دفترية ${egp(cv)}. والقيمة العادلة مخصومة التكاليف ${egp(rv)} والقيمة الاستخدامية ${egp(vi)}. خسارة الاضمحلال تساوي:`,
        options, optionsAr, answerIndex,
        explanation: `Recoverable amount = higher of FVLCD (EGP ${fmt(rv)}) and VIU (EGP ${fmt(vi)}) = EGP ${fmt(higher)}; loss = ${egp(cv)} − ${egp(higher)} = ${egp(loss)}.`,
        explanationAr: `المبلغ القابل للاسترداد = الأعلى من ${egp(rv)} و${egp(vi)} = ${egp(higher)}؛ والخسارة = ${egp(cv)} − ${egp(higher)} = ${egp(loss)}.`,
      }
    },
  },
  {
    tag: "IAS 36", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (r, e) => {
      const cv = r.pick([600_000, 750_000, 800_000])
      const ra = r.pick([500_000, 600_000])
      const prev = r.pick([120_000, 150_000])
      const reversal = Math.min(prev, ra - (cv - prev))
      const { options, optionsAr, answerIndex } = numericOptions(
        reversal, [prev, Math.round(ra * 0.2), 0]
      )
      return {
        stem: `${e.en} impaired a CGU two years ago by EGP ${fmt(prev)} (allocated to goodwill). The CGU now has a recoverable amount of EGP ${fmt(ra)} against a carrying amount of EGP ${fmt(cv)} (after depreciation). The MAXIMUM reversal under IAS 36 is:`,
        stemAr: `اضمحلت ${e.ar} وحدة نقدية قبل عامين بمقدار ${egp(prev)} (محملة على الشهرة). والآن مبلغها القابل للاسترداد ${egp(ra)} مقابل قيمة دفترية ${egp(cv)} (بعد الإهلاك). أقصى رد للاضمحلال وفق IAS 36 هو:`,
        options, optionsAr, answerIndex,
        explanation: `Reversals are capped at the carrying amount that would have existed (net of depreciation) had no impairment occurred — goodwill impairment is never reversed.`,
        explanationAr: `يُحد رد الاضمحلال بالقيمة الدفترية التي كانت ستقوم لولا الاضمحلال (صافي الإهلاك)، ولا يرد اضمحلال الشهرة أبدًا.`,
      }
    },
  },
  {
    tag: "IAS 2", area: "accounting", difficulty: 1, fams: [...ALL],
    make: (r, e) => {
      const units = r.pick([4_000, 5_000, 6_000])
      const cost = r.pick([220_000, 260_000, 300_000])
      const nrv = r.pick([200_000, 235_000, 275_000])
      const lower = Math.min(cost, nrv)
      const write = cost - lower
      const { options, optionsAr, answerIndex } = numericOptions(
        write, [Math.abs(nrv - cost), Math.round(cost * 0.1), 0]
      )
      return {
        stem: `${e.en} holds ${fmt(units)} units of finished inventory at cost EGP ${fmt(cost)}; estimated selling costs reduce net realisable value to EGP ${fmt(nrv)}. The write-down to profit or loss is:`,
        stemAr: `تحتفظ ${e.ar} بـ ${fmt(units)} وحدة مخزون تام بتكلفة ${egp(cost)}؛ وتكاليف البيع المتوقعة تخفض القيمة الصافية القابلة للتحقق إلى ${egp(nrv)}. التخفيض المحمل على الربح والخسارة يساوي:`,
        options, optionsAr, answerIndex,
        explanation: `IAS 2: inventory is measured at the LOWER of cost and NRV → write-down = ${egp(cost)} − ${egp(lower)} = ${egp(write)}.`,
        explanationAr: `معيار IAS 2: يقاس المخزون بالأدنى من التكلفة والقيمة الصافية ← التخفيض = ${egp(cost)} − ${egp(lower)} = ${egp(write)}.`,
      }
    },
  },
  {
    tag: "IAS 16", area: "accounting", difficulty: 1, fams: [...ALL],
    make: (r, e) => {
      const cost = r.pick([500_000, 800_000, 1_100_000])
      const life = r.pick([8, 10, 12])
      const res = r.pick([40_000, 60_000, 80_000])
      const dep = Math.round((cost - res) / life)
      const { options, optionsAr, answerIndex } = numericOptions(
        dep, [Math.round(cost / life), Math.round((cost - res) / (life - 2)), Math.round((cost + res) / life)]
      )
      return {
        stem: `${e.en} bought machinery for EGP ${fmt(cost)} with residual value EGP ${fmt(res)} and a ${life}-year useful life (straight-line). The annual depreciation charge is:`,
        stemAr: `اشترت ${e.ar} آلة بقيمة ${egp(cost)} بقيمة متبقية ${egp(res)} وعمر إنتاجي ${life} سنة (قسط ثابت). قسط الإهلاك السنوي يساوي:`,
        options, optionsAr, answerIndex,
        explanation: `Depreciation = (cost − residual) ÷ life = (${egp(cost)} − ${egp(res)}) ÷ ${life} = ${egp(dep)}.`,
        explanationAr: `الإهلاك = (التكلفة − المتبقي) ÷ العمر = (${egp(cost)} − ${egp(res)}) ÷ ${life} = ${egp(dep)}.`,
      }
    },
  },
  {
    tag: "IAS 16", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (r, e) => {
      const cost = r.pick([200_000, 240_000, 280_000])
      const acc = r.pick([90_000, 110_000, 130_000])
      const sale = r.pick([85_000, 100_000, 150_000])
      const nbv = cost - acc
      const gain = sale - nbv
      const { options, optionsAr, answerIndex } = numericOptions(
        gain, [-gain, Math.round(sale - cost), Math.round(nbv * 0.1)]
      )
      return {
        stem: `${e.en} sold equipment costing EGP ${fmt(cost)} (accumulated depreciation EGP ${fmt(acc)}) for EGP ${fmt(sale)}. The gain/(loss) in profit or loss is:`,
        stemAr: `باعت ${e.ar} معدات بتكلفة ${egp(cost)} (مجمع إهلاك ${egp(acc)}) بمبلغ ${egp(sale)}. المكسب/(الخسارة) في الربح والخسارة يساوي:`,
        options, optionsAr, answerIndex,
        explanation: `NBV = ${egp(cost)} − ${egp(acc)} = ${egp(nbv)}; gain = proceeds − NBV = ${egp(sale)} − ${egp(nbv)} = ${egp(gain)}.`,
        explanationAr: `القيمة الدفترية = ${egp(cost)} − ${egp(acc)} = ${egp(nbv)}؛ والمكسب = الثمن − الدفترية = ${egp(gain)}.`,
      }
    },
  },
  {
    tag: "IFRS 15", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (r, e) => {
      const price = r.pick([600_000, 900_000, 1_200_000])
      const stand = r.pick([200_000, 300_000, 400_000])
      const share = stand / price
      const { options, optionsAr, answerIndex } = numericOptions(
        Math.round(share * 100), [Math.round(100 - share * 100), 50, 40],
        (n) => `${n}%`, (n) => `${n}%`
      )
      return {
        stem: `A bundle sold by ${e.en} has total consideration EGP ${fmt(price)}; the standalone selling price of the delivered element is EGP ${fmt(stand)}. Under the residual approach, revenue allocated to that element is:`,
        stemAr: `باقة باعتها ${e.ar} بمقابل إجمالي ${egp(price)} وسعر البيع المستقل للعنصر المسلم ${egp(stand)}. وفق الأسلوب المتبقي، الإيراد المخصص للعنصر:`,
        options, optionsAr, answerIndex,
        explanation: `Allocation % = standalone price ÷ total = ${fmt(stand)} ÷ ${fmt(price)} = ${Math.round(share * 100)}% (five-step model, step 4: allocate the transaction price).`,
        explanationAr: `نسبة التخصيص = السعر المستقل ÷ الإجمالي = ${Math.round(share * 100)}% (نموذج الخطوات الخمس — الخطوة الرابعة: توزيع سعر الصفقة).`,
      }
    },
  },
  {
    tag: "IFRS 15", area: "accounting", difficulty: 2, fams: [...ALL],
    make: (_r, e) => ({
      stem: `Under IFRS 15, revenue from a product sale by ${e.en} is recognised when:`,
      stemAr: `وفق IFRS 15، يعترف بإيراد بيع منتج لـ ${e.ar} عندما:`,
      options: [
        "Control of the goods transfers to the customer",
        "Cash is received in full",
        "The purchase order is confirmed",
        "The goods leave the production line",
      ],
      optionsAr: [
        "تنتقل السيطرة على البضاعة إلى العميل",
        "يحصَّل النقد كاملًا",
        "يؤكد أمر الشراء",
        "تغادر البضاعة خط الإنتاج",
      ],
      answerIndex: 0,
      explanation: "IFRS 15's core principle: recognise revenue when (or as) the customer obtains control of the promised goods or services.",
      explanationAr: "مبدأ IFRS 15: يعترف بالإيراد عند حصول العميل على السيطرة على السلع أو الخدمات.",
    }),
  },
  {
    tag: "IFRS 9", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (r, e) => {
      const gross = r.pick([2_000_000, 3_000_000, 4_000_000])
      const pct = r.pick([0.03, 0.04, 0.05])
      const ecl = Math.round(gross * pct)
      const { options, optionsAr, answerIndex } = numericOptions(
        ecl, [Math.round(gross * pct * 1.5), Math.round(gross * 0.5), Math.round(gross * pct * 0.5)]
      )
      return {
        stem: `${e.en} applies a simplified approach to trade receivables of EGP ${fmt(gross)} with an expected loss rate of ${Math.round(pct * 100)}%. The loss allowance (lifetime ECL) is:`,
        stemAr: `تطبق ${e.ar} النهج المبسط على ذمم عملاء ${egp(gross)} بمعدل خسارة متوقع ${Math.round(pct * 100)}%. مخصص الخسارة (ECL مدى الحياة) يساوي:`,
        options, optionsAr, answerIndex,
        explanation: `Loss allowance = gross carrying amount × ECL rate = ${egp(gross)} × ${Math.round(pct * 100)}% = ${egp(ecl)}.`,
        explanationAr: `المخصص = القيمة الإجمالية × معدل الخسارة المتوقعة = ${egp(gross)} × ${Math.round(pct * 100)}% = ${egp(ecl)}.`,
      }
    },
  },
  {
    tag: "IFRS 9", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (_r, e) => ({
      stem: `An investment in equities held by ${e.en} is designated at fair value through other comprehensive income (FVOCI). Dividends received are:`,
      stemAr: `استثمار في أسهم لدى ${e.ar} مصنف بالقيمة العادلة عبر الدليل الشامل (FVOCI). التوزيعات المستلمة تعالج:`,
      options: [
        "Recognised in profit or loss (unless a return on investment recovery)",
        "Recognised in other comprehensive income",
        "Added to the cost of the investment",
        "Not recognised at all",
      ],
      optionsAr: [
        "في الأرباح أو الخسائر (إلا أن تكون استردادًا للاستثمار)",
        "في الدليل الشامل الآخر",
        "مضافة إلى تكلفة الاستثمار",
        "لا تعترف إطلاقًا",
      ],
      answerIndex: 0,
      explanation: "IFRS 9: equity FVOCI — fair-value movements go to OCI (never recycled), but DIVIDENDS are recognised in P&L unless they represent a recovery of the investment.",
      explanationAr: "معيار IFRS 9: في FVOCI للأسهم تذهب فروق القيمة إلى OCI دون إعادة تدوير، أما التوزيعات فتعترف في الأرباح والخسائر ما لم تكن استردادًا للاستثمار.",
    }),
  },
  {
    tag: "IFRS 13", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (r, e) => {
      const [lvl, ex, exAr] = r.pick([
        ["Level 1", "quoted prices in active markets for identical assets", "أسعار مقتبسة في أسواق نشطة لأصول مماثلة"],
        ["Level 2", "observable inputs other than quoted prices (e.g. matrix pricing)", "مدخلات قابلة للملاحظة غير الأسعار المقتبسة مثل التسعير المصفوفي"],
        ["Level 3", "unobservable inputs such as internal cash-flow models", "مدخلات غير قابلة للملاحظة مثل نماذج التدفقات الداخلية"],
      ])
      return {
        stem: `${e.en} values a financial asset using ${ex}. Under IFRS 13 this sits in:`,
        stemAr: `تقيم ${e.ar} أصلًا ماليًا باستخدام ${exAr}. وفق IFRS 13 يقع هذا في:`,
        ...mcq(
          lvl === "Level 1"
            ? ["Level 1", "المستوى الأول"]
            : lvl === "Level 2"
              ? ["Level 2", "المستوى الثاني"]
              : ["Level 3", "المستوى الثالث"],
          [
            ["Level 1", "المستوى الأول"],
            ["Level 2", "المستوى الثاني"],
            ["Level 3", "المستوى الثالث"],
            ["No level — the asset stays at cost", "لا يقع في مستوى — يحمل بالتكلفة"],
          ]
        ),
        answerIndex: 0,
        explanation: "IFRS 13 fair-value hierarchy: L1 quoted prices; L2 other observable inputs; L3 unobservable inputs.",
        explanationAr: "تسلسل IFRS 13: المستوى الأول أسعار مقتبسة، والثاني مدخلات ملاحظة أخرى، والثالث مدخلات غير ملاحظة.",
      }
    },
  },
  {
    tag: "IAS 37", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (_r, e) => ({
      stem: `${e.en} is defending a lawsuit likely to be lost, with a reliable estimate between EGP 800,000 and EGP 1,200,000. IAS 37 requires a provision of:`,
      stemAr: `تدافع ${e.ar} عن دعوى يرجح خسارتها بتقدير موثوق بين 800,000 و1,200,000 جنيه. يوجب IAS 37 مخصصًا بمقدار:`,
      options: [
        "The best estimate within the range — expected value or the most likely amount",
        "EGP 800,000 — always the minimum",
        "EGP 1,200,000 — always the maximum",
        "No provision until the court rules",
      ],
      optionsAr: [
        "أفضل تقدير داخل النطاق — القيمة المتوقعة أو المبلغ الأرجح",
        "800,000 — الحد الأدنى دائمًا",
        "1,200,000 — الحد الأقصى دائمًا",
        "لا مخصص حتى يحكم القضاء",
      ],
      answerIndex: 0,
      explanation: "IAS 37: a provision is the BEST estimate of the outflow — for a continuous range the expected value; a single mid-point is often used if no better indicator exists.",
      explanationAr: "معيار IAS 37: المخصص أفضل تقدير للتدفق — وفي النطاق المستمر تُستخدم القيمة المتوقعة أو منتصفه عند غياب مؤشر أفضل.",
    }),
  },
  {
    tag: "IAS 37", area: "accounting", difficulty: 2, fams: [...HARD],
    make: (_r, e) => ({
      stem: `A present obligation of ${e.en} arises from a past event, but an outflow is only possible (not probable) and cannot be reliably measured. The correct treatment is:`,
      stemAr: `يلتزام حالي على ${e.ar} من واقعة سابقة لكن التدفق محتمل فقط (غير مرجح) ولا يمكن قياسه موثوقًا. المعالجة الصحيحة:`,
      options: [
        "Disclose a contingent liability — no provision",
        "Recognise a provision at the maximum amount",
        "Ignore the matter completely",
        "Recognise a contingent asset instead",
      ],
      optionsAr: [
        "الإفصاح عن التزام عارض — دون مخصص",
        "إثبات مخصص بالحد الأقصى",
        "تجاهل المسألة كليًا",
        "إثبات أصل عارض بدلًا منه",
      ],
      answerIndex: 0,
      explanation: "IAS 37: possible-but-not-probable outflows, or unreliable estimates, are contingent liabilities — disclosed, not recognised.",
      explanationAr: "معيار IAS 37: التدفقات المحتملة غير المرجحة أو غير القابلة للقياس التزامات عارضة تفصح ولا تثبت.",
    }),
  },
  {
    tag: "IAS 12", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (r, e) => {
      const ca = r.pick([1_000_000, 1_400_000, 1_800_000])
      const ta = r.pick([700_000, 900_000, 1_200_000])
      const rate = r.pick([0.225, 0.25])
      const dtl = Math.round((ca - ta) * rate)
      const { options, optionsAr, answerIndex } = numericOptions(
        dtl, [Math.round((ta - ca) * rate), Math.round(ca * rate), Math.round(ta * rate)]
      )
      return {
        stem: `${e.en} has a fixed asset with tax base EGP ${fmt(ta)} and carrying amount EGP ${fmt(ca)}. At ${Math.round(rate * 100)}%, the deferred tax recognised is:`,
        stemAr: `لدى ${e.ar} أصل ثابت بأساس ضريبي ${egp(ta)} وقيمة دفترية ${egp(ca)}. بمعدل ${Math.round(rate * 100)}%، الضريبة المؤجلة المعترف بها:`,
        options, optionsAr, answerIndex,
        explanation: `Taxable temporary difference = ${egp(ca)} − ${egp(ta)} = ${egp(ca - ta)} → deferred tax LIABILITY = ${egp(ca - ta)} × ${Math.round(rate * 100)}% = ${egp(dtl)}.`,
        explanationAr: `الفرق الضريبي الخاضع = ${egp(ca)} − ${egp(ta)} = ${egp(ca - ta)} ← التزام ضريبي مؤجل = ${egp(dtl)}.`,
      }
    },
  },
  {
    tag: "IAS 10", area: "accounting", difficulty: 1, fams: [...ALL],
    make: (_r, e) => ({
      stem: `After the reporting date, ${e.en} announced a dividend. Under IAS 10 the dividend is:`,
      stemAr: `بعد تاريخ التقرير أعلنت ${e.ar} توزيعات. وفق IAS 10 تعامل التوزيعات:`,
      options: [
        "Not recognised as a liability at the reporting date (non-adjusting)",
        "Recognised as a liability in the statements",
        "Added to retained earnings",
        "Adjusted against revenue",
      ],
      optionsAr: [
        "لا تعترف التزامًا بتاريخ التقرير (حدث غير معدل)",
        "تعترف التزامًا في القوائم",
        "تضاف للأرباح المرحلة",
        "تسوى مقابل الإيراد",
      ],
      answerIndex: 0,
      explanation: "IAS 10: dividends declared after the reporting date are non-adjusting — no liability is recognised at the reporting date.",
      explanationAr: "معيار IAS 10: التوزيعات المعلنة بعد تاريخ التقرير غير معدلة ولا يعترف بالتزام بتاريخ التقرير.",
    }),
  },
  {
    tag: "IAS 1", area: "accounting", difficulty: 1, fams: [...ALL],
    make: (_r, e) => ({
      stem: `The statement of financial position of ${e.en} distinguishes:`,
      stemAr: `يميز قائمة المركز المالي لـ ${e.ar} بين:`,
      options: [
        "Current and non-current assets and liabilities",
        "Operating and financing items only",
        "Monetary and non-monetary items only",
        "Productive and consumable items",
      ],
      optionsAr: [
        "الأصول والالتزامات المتداولة وغير المتداولة",
        "البنود التشغيلية والتمويلية فقط",
        "البنود النقدية وغير النقدية فقط",
        "البنود الإنتاجية والاستهلاكية",
      ],
      answerIndex: 0,
      explanation: "IAS 1 requires a current/non-current presentation unless a liquidity presentation is more relevant.",
      explanationAr: "يتطلب معيار IAS 1 عرضًا متداولًا/غير متداول إلا أن يكون العرض حسب السيولة أكثر ملاءمة.",
    }),
  },
  {
    tag: "IAS 8", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (_r, e) => ({
      stem: `${e.en} changed its inventory costing method. Under IAS 8, a change in accounting policy is applied:`,
      stemAr: `غيرت ${e.ar} طريقة تكلفة المخزون. وفق IAS 8 تطبق تغييرات السياسات المحاسبية:`,
      options: [
        "Retrospectively, with comparative figures restated unless impracticable",
        "Prospectively from the current year only",
        "Through equity, bypassing profit or loss",
        "Only when required by the auditor",
      ],
      optionsAr: [
        " بأثر رجعي مع إعادة عرض المقارنات إلا إذا تعذر ذلك",
        "بأثر مستقبلي من السنة الجارية فقط",
        "عبر حقوق الملكية متجاوزة الربح والخسارة",
        "فقط بطلب من المراجع",
      ],
      answerIndex: 0,
      explanation: "IAS 8: changes in policy are retrospective (restate comparatives); changes in estimates are prospective.",
      explanationAr: "معيار IAS 8: تغيير السياسة بأثر رجعي وتغيير التقديرات بأثر مستقبلي.",
    }),
  },
  {
    tag: "IFRS 10", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (r, e) => {
      const cs = r.pick([60, 70, 80])
      const fv = r.pick([4_000_000, 5_000_000, 6_000_000])
      const nci = 100 - cs
      const { options, optionsAr, answerIndex } = numericOptions(
        nci, [cs, 100, Math.round(100 - cs / 2)], (n) => `${n}%`, (n) => `${n}%`
      )
      return {
        stem: `${e.en} acquired ${cs}% of a subsidiary whose identifiable net assets' fair value is EGP ${fmt(fv)} at acquisition. The non-controlling interest ownership share is:`,
        stemAr: `استحوذت ${e.ar} على ${cs}% من شركة تابعة قيمة صافي أصولها القابلة للتحديد ${egp(fv)}. حصة الملكية غير المسيطرة:`,
        options, optionsAr, answerIndex,
        explanation: `NCI % = 100% − controlling stake = ${100 - cs}%. IFRS 10 requires presenting NCI within equity, separately from owners of the parent.`,
        explanationAr: `حصة غير المسيطرين = 100% − ${cs}% = ${nci}%. ويتطلب IFRS 10 عرضها ضمن حقوق الملكية منفصلة عن مالكي الأم. ${e.ar}`,
      }
    },
  },
  {
    tag: "IFRS 3", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (r, e) => {
      const inv = r.pick([10_000_000, 12_000_000])
      const fvg = r.pick([2_400_000, 3_000_000])
      const ncip = r.pick([0.2, 0.25])
      const nci = Math.round(fvg * ncip)
      const { options, optionsAr, answerIndex } = numericOptions(
        nci, [Math.round(fvg * (1 - ncip)), fvg, Math.round(inv * ncip)]
      )
      return {
        stem: `${e.en} acquired 80% of a subsidiary; the fair value of the identifiable net assets acquired is EGP ${fmt(fvg)}. The NCI is measured at its proportionate share. The non-controlling interest at acquisition is:`,
        stemAr: `استحوذت ${e.ar} على 80% من تابعة بقيمة عادلة لصافي الأصول المكتسبة ${egp(fvg)}، وتقاس حصة غير المسيطرين بنسبتها. قيمة الحصة عند الاستحواذ:`,
        options, optionsAr, answerIndex,
        explanation: `NCI (proportionate) = FV of net assets × 20% = ${egp(fvg)} × 20% = ${egp(nci)} (IFRS 3 allows proportionate share or full fair value).`,
        explanationAr: `الحصة النسبية = ${egp(fvg)} × 20% = ${egp(nci)} (يجيز IFRS 3 الحصة النسبية أو القيمة العادلة الكاملة).`,
      }
    },
  },
  {
    tag: "IFRS 3", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (_r, e) => ({
      stem: `In a business combination, ${e.en} measures contingent consideration at fair value at the acquisition date. A subsequent change in that fair value (not a measurement-period adjustment) is:`,
      stemAr: `في اتحاد أعمال، تقيس ${e.ar} المقابل المحتمل بالقيمة العادلة بتاريخ الاستحواذ. تغير لاحق في تلك القيمة (وليس تسوية فترة القياس) يعالج:`,
      options: [
        "In profit or loss (IFRS 3), unless equity-classified",
        "Always in other comprehensive income",
        "By restating goodwill",
        "By reversing the acquisition",
      ],
      optionsAr: [
        "في الأرباح أو الخسائر وفق IFRS 3 إلا أن يكون مصنفًا في حقوق الملكية",
        "دائمًا في الدليل الشامل الآخر",
        "بإعادة عرض الشهرة",
        "بعكس عملية الاستحواذ",
      ],
      answerIndex: 0,
      explanation: "IFRS 3: post-measurement-period changes in contingent consideration go to P&L; equity-classified consideration is never remeasured through P&L.",
      explanationAr: "معيار IFRS 3: التغيرات اللاحقة لفترة القياس تذهب للربح والخسارة، والمصنف في حقوق الملكية لا يعاد قياسه.",
    }),
  },
  {
    tag: "IAS 28", area: "accounting", difficulty: 2, fams: [...HARD],
    make: (r, e) => {
      const inv = r.pick([4_000_000, 5_000_000])
      const share = r.pick([0.25, 0.3])
      const profit = r.pick([800_000, 1_200_000])
      const shareP = Math.round(profit * share)
      const { options, optionsAr, answerIndex } = numericOptions(
        inv + shareP, [inv, inv - shareP, Math.round(inv + profit)], 
      )
      return {
        stem: `${e.en} holds a ${Math.round(share * 100)}% associate stake carried at EGP ${fmt(inv)}; the associate reports profit of EGP ${fmt(profit)} and pays no dividend. The period-end carrying amount under IAS 28 is:`,
        stemAr: `تمتلك ${e.ar} حصة ${Math.round(share * 100)}% في شريك بقيمة دفترية ${egp(inv)}؛ ويحقق الشريك ربحًا ${egp(profit)} دون توزيعات. القيمة الدفترية نهاية الفترة وفق IAS 28:`,
        options, optionsAr, answerIndex,
        explanation: `Equity method: carrying amount + share of profit = ${egp(inv)} + ${Math.round(share * 100)}% × ${egp(profit)} = ${egp(inv + shareP)}.`,
        explanationAr: `طريقة حقوق الملكية: ${egp(inv)} + ${Math.round(share * 100)}% × ${egp(profit)} = ${egp(inv + shareP)}.`,
      }
    },
  },
  {
    tag: "IAS 33", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (r, e) => {
      const earn = r.pick([3_000_000, 4_500_000, 6_000_000])
      const shares = r.pick([1_500_000, 2_000_000])
      const eps = r.round(earn / shares, 2)
      const { options, optionsAr, answerIndex } = numericOptions(
        Math.round(eps * 100), [Math.round(eps * 100 * 1.25), Math.round(eps * 100 * 0.75), Math.round(eps * 100 * 2)],
        (n) => `EGP ${(n / 100).toFixed(2)}`, (n) => `${(n / 100).toFixed(2)} جنيه`
      )
      return {
        stem: `${e.en} reports profit attributable to ordinary shareholders of EGP ${fmt(earn)} with ${fmt(shares)} ordinary shares. Basic EPS is:`,
        stemAr: `تحقق ${e.ar} ربحًا منسوبًا لمساهمي الأسهم العادية ${egp(earn)} بعدد ${fmt(shares)} سهم. ربحية السهم الأساسية:`,
        options, optionsAr, answerIndex,
        explanation: `Basic EPS = earnings ÷ weighted shares = ${fmt(earn)} ÷ ${fmt(shares)} = EGP ${eps.toFixed(2)}.`,
        explanationAr: `ربحية السهم = الأرباح ÷ الأسهم المرجحة = ${eps.toFixed(2)} جنيه.`,
      }
    },
  },
  {
    tag: "IAS 38", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (_r, e) => ({
      stem: `Which item acquired by ${e.en} qualifies as an intangible asset under IAS 38?`,
      stemAr: `أي بند مكتسب من ${e.ar} يعد أصلاً غير ملموسًا وفق IAS 38؟`,
      options: [
        "A purchased patent with a remaining legal life",
        "Internally generated goodwill",
        "Staff training costs",
        "Relocation costs of head office",
      ],
      optionsAr: [
        "براءة اختراع مشتراة بمدة حماية قانونية متبقية",
        "شهرة داخلية المنشأ",
        "تكاليف تدريب الموظفين",
        "تكاليف نقل المركز الرئيسي",
      ],
      answerIndex: 0,
      explanation: "IAS 38: identifiable, non-monetary, no physical substance, controlled — a purchased patent qualifies; internally generated goodwill and training are never recognised.",
      explanationAr: "معيار IAS 38: ملموسيته معدومة وقابل للتحديد وخاضع للسيطرة — براءة الشراء تصلح، والشهرة الداخلية والتدريب لا يعترف بهما.",
    }),
  },
  {
    tag: "IAS 38", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (r, e) => {
      const cost = r.pick([300_000, 480_000, 600_000])
      const life = r.pick([5, 6, 8])
      const amort = Math.round(cost / life)
      const { options, optionsAr, answerIndex } = numericOptions(
        amort, [Math.round(cost / (life * 2)), Math.round(cost * 0.1), 0]
      )
      return {
        stem: `${e.en} capitalised development costs of EGP ${fmt(cost)} with a useful life of ${life} years (straight-line from availability for use). The annual amortisation is:`,
        stemAr: `رسملت ${e.ar} تكاليف تطوير ${egp(cost)} بعمر إنتاجي ${life} سنوات (قسط ثابت منذ الجاهزية). الإهلاك السنوي:`,
        options, optionsAr, answerIndex,
        explanation: `Amortisation = EGP ${fmt(cost)} ÷ ${life} = ${egp(amort)} (IAS 38 amortises finite-life intangibles systematically).`,
        explanationAr: `الإهلاك = ${egp(cost)} ÷ ${life} = ${egp(amort)}.`,
      }
    },
  },
  {
    tag: "IAS 40", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (r, e) => {
      const cost = r.pick([2_000_000, 3_000_000])
      const fv = r.pick([2_400_000, 3_500_000])
      const gain = fv - cost
      const { options, optionsAr, answerIndex } = numericOptions(
        gain, [Math.round(gain * 0.5), 0, Math.round(fv * 0.05)]
      )
      return {
        stem: `${e.en} transfers a property from owner-occupied (cost EGP ${fmt(cost)}) to investment property measured at fair value (EGP ${fmt(fv)}) with no residual carrying depreciation. Under IAS 40 the revaluation gain in P&L is:`,
        stemAr: `تنقل ${e.ar} عقارًا من محتل (تكلفة ${egp(cost)}) إلى استثماري بالقيمة العادلة (${egp(fv)}). وفق IAS 40 مكسب إعادة التقييم في الربح والخسارة:`,
        options, optionsAr, answerIndex,
        explanation: `IAS 40 (fair-value model): transfers from PPE to IP at fair value — the difference ${egp(fv)} − ${egp(cost)} = ${egp(gain)} goes to P&L (per IAS 16/40 transition rules).`,
        explanationAr: `معيار IAS 40: عند التحويل بالقيمة العادلة يذهب الفرق ${egp(gain)} إلى الربح والخسارة.`,
      }
    },
  },
  {
    tag: "IAS 41", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (r, e) => {
      const trees = r.pick([10_000, 12_000])
      const cost = r.pick([1_800_000, 2_400_000])
      const fv = r.pick([2_600_000, 3_200_000])
      const gain = fv - cost
      const { options, optionsAr, answerIndex } = numericOptions(
        gain, [0, Math.round(gain * 0.4), -gain]
      )
      return {
        stem: `${e.en} grows ${fmt(trees)} trees; accumulated costs to maturity-equivalent stage are EGP ${fmt(cost)} and fair value less point-of-sale costs is EGP ${fmt(fv).replace("EGP", "EGP")}. The biological-asset gain under IAS 41 is:`,
        stemAr: `تزرع ${e.ar} ${fmt(trees)} شجرة؛ والتكاليف المتراكمة ${egp(cost)} والقيمة العادلة بعد خصم تكاليف البيع ${egp(fv)}. مكسب الأصل الحيوي وفق IAS 41:`,
        options, optionsAr, answerIndex,
        explanation: `IAS 41: biological assets are measured at FV less point-of-sale costs; the change (${egp(fv)} − ${egp(cost)} = ${egp(gain)}) is recognised in P&L as it occurs.`,
        explanationAr: `معيار IAS 41: تقاس الأصول الحية بالقيمة العادلة بعد تكاليف البيع ويقر في الربح والخسارة (${egp(gain)}).`,
      }
    },
  },
  {
    tag: "IAS 21", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (r, e) => {
      const usd = r.pick([100_000, 200_000])
      const r1 = r.pick([30.5, 31.0])
      const r2 = r.pick([32.0, 33.0])
      const loss = Math.round(usd * (r2 - r1))
      const { options, optionsAr, answerIndex } = numericOptions(
        loss, [-loss, 0, Math.round(usd * (r2 - r1) * 2)]
      )
      return {
        stem: `${e.en} holds a USD ${fmt(usd)} monetary receivable booked at ${r1} EGP/USD; the closing rate is ${r2}. The exchange difference in P&L is:`,
        stemAr: `تحتفظ ${e.ar} بذمة نقدية ${fmt(usd)} دولار مسجلة بمعدل ${r1} جنيه/دولار ومعدل الإقفال ${r2}. فرق العملة في الربح والخسارة:`,
        options, optionsAr, answerIndex,
        explanation: `IAS 21: monetary items are retranslated at the closing rate — loss = USD ${fmt(usd)} × (${r2} − ${r1}) = EGP ${fmt(loss)}.`,
        explanationAr: `معيار IAS 21: يعاد ترجمة البنود النقدية بمعدل الإقفال — الخسارة = ${fmt(usd)} × (${r2} − ${r1}) = ${egp(loss)}.`,
      }
    },
  },
  {
    tag: "IAS 24", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (_r, e) => ({
      stem: `Which disclosure does IAS 24 require of ${e.en} about related-party transactions?`,
      stemAr: `أي إفصاح يطلبه IAS 24 من ${e.ar} عن عمليات الأطراف ذات العلاقة؟`,
      options: [
        "The nature of the relationship, transaction amounts and outstanding balances",
        "Only the names of the directors",
        "Full working papers of every transaction",
        "Nothing if amounts are confidential",
      ],
      optionsAr: [
        "طبيعة العلاقة ومبالغ العمليات والأرصدة القائمة",
        "أسماء المديرين فقط",
        "أوراق عمل كاملة لكل عملية",
        "لا شيء إذا كانت المبالغ سرية",
      ],
      answerIndex: 0,
      explanation: "IAS 24: disclose relationships, transaction amounts, outstanding balances and terms — even for exempt government-related entities, key management compensation is disclosed.",
      explanationAr: "معيار IAS 24: يفصح عن العلاقات والمبالغ والأرصدة والشروط، ومكافآت الإدارة العليا في كل الأحوال.",
    }),
  },
  {
    tag: "IFRS 18", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (_r, e) => ({
      stem: `IFRS 18 (replacing IAS 1) requires ${e.en}'s income statement to present:`,
      stemAr: `يتطلب IFRS 18 (البديل عن IAS 1) عرض قائمة الدخل لـ ${e.ar}:`,
      options: [
        "Defined categories — operating, investing, financing, income taxes and discontinued operations",
        "A single column of all income and expenses",
        "Only cash receipts and payments",
        "Value-added statements",
      ],
      optionsAr: [
        "فئات محددة — تشغيلي واستثماري وتمويلي وضرائب دخل وأنشطة متوقفة",
        "عمودًا واحدًا لكل الإيرادات والمصروفات",
        "المقبوضات والمدفوعات النقدية فقط",
        "قوائم القيمة المضافة",
      ],
      answerIndex: 0,
      explanation: "IFRS 18: five categories of income and expenses with defined subtotals, e.g. operating profit — enhancing comparability of performance reporting.",
      explanationAr: "معيار IFRS 18: خمس فئات مع إجماليات فرعية محددة كالربح التشغيلي لتعزيز قابلية المقارنة.",
    }),
  },
  {
    tag: "IAS 7", area: "accounting", difficulty: 1, fams: [...ALL],
    make: (_r, e) => ({
      stem: `Interest paid by ${e.en} appears in the statement of cash flows under:`,
      stemAr: `الفوائد المدفوعة من ${e.ar} تظهر في قائمة التدفقات النقدية ضمن:`,
      options: [
        "Operating or financing activities (per its policy for interest)",
        "Investing activities only",
        "Non-cash disclosure only",
        "Equity movements only",
      ],
      optionsAr: [
        "الأنشطة التشغيلية أو التمويلية وفق سياسة الفوائد المعتمدة",
        "الأنشطة الاستثمارية فقط",
        "إفصاح غير نقدي فقط",
        "حركات حقوق الملكية فقط",
      ],
      answerIndex: 0,
      explanation: "IAS 7: interest paid may be operating or financing under the entity's stated policy; interest/dividends received — operating or investing.",
      explanationAr: "معيار IAS 7: يمكن عرض الفوائد المدفوعة تشغيلية أو تمويلية وفق السياسة المعلنة.",
    }),
  },
  {
    tag: "Conceptual", area: "accounting", difficulty: 1, fams: [...ALL],
    make: (r, e) => {
      const [qc, def, defAr] = r.pick([
        ["prudence", "including a degree of caution in exercising judgement under uncertainty", "إدراج قدر من الحذر عند إصدار الأحكام في ظل عدم اليقين"],
        ["neutrality", "freedom from bias — information is not slanted to influence decisions", "التحرر من الانحياز حتى لا تميل المعلومة للتأثير في القرارات"],
        ["completeness", "including all information needed for users not to be misled", "شمول كل ما يلزم لئلا يضل المستخدمون"],
        ["faithful representation", "information that is complete, neutral and free from error", "معلومة كاملة محايدة خالية من الخطأ"],
      ])
      return {
        stem: `Preparing ${e.en}'s financial statements, management exercises judgement — ${def}. Which concept does this describe?`,
        stemAr: `أي خاصية نوعية توصف بـ: ${defAr}؟`,
        options: [
          qc === "prudence" ? "Prudence (supporting neutrality)" : qc === "neutrality" ? "Neutrality" : qc === "completeness" ? "Completeness" : "Faithful representation",
          "Relevance",
          "Timeliness",
          "Verifiability",
        ],
        optionsAr: [
          qc === "prudence" ? "الحذر (داعم الحياد)" : qc === "neutrality" ? "الحياد" : qc === "completeness" ? "الاكتمال" : "التمثيل الصادق",
          "الملاءمة",
          "التوقيت المناسب",
          "قابلية التحقق",
        ],
        answerIndex: 0,
        explanation: "The Conceptual Framework: faithful representation (complete, neutral, free from error) supported by prudence; relevance and faithful representation are the fundamental characteristics.",
        explanationAr: "الإطار المفاهيمي: التمثيل الصادق (كامل محايد خال من الخطأ) بدعم الحذر؛ والملاءمة والتمثيل الصادق هما الخاصيتان الأساسيتان.",
      }
    },
  },
  {
    tag: "IFRS 15", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (r, e) => {
      const total = r.pick([900_000, 1_500_000])
      const alloc = r.pick([300_000, 500_000])
      const rest = total - alloc
      const { options, optionsAr, answerIndex } = numericOptions(
        rest, [total, alloc, Math.round(rest * 0.5)]
      )
      return {
        stem: `A customer pays ${e.en} EGP ${fmt(total)} upfront for a 12-month service; EGP ${fmt(alloc)} is allocated to the installation delivered immediately and the remainder to the service period. The contract liability after installation is:`,
        stemAr: `يدفع عميل لـ ${e.ar} ${egp(total)} مقدمة لخدمة 12 شهرًا؛ ويخصص ${egp(alloc)} للتركيب المسلم فورًا والباقي لفترة الخدمة. التزام العقد بعد التركيب:`,
        options, optionsAr, answerIndex,
        explanation: `Contract liability = unallocated (undelivered) consideration = ${egp(total)} − ${egp(alloc)} = ${egp(rest)}, recognised as revenue over the service period.`,
        explanationAr: `التزام العقد = المقابل غير المسلم = ${egp(total)} − ${egp(alloc)} = ${egp(rest)} ويعترف به كإيراد على فترة الخدمة.`,
      }
    },
  },
  {
    tag: "IAS 19", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (r, e) => {
      const dbo = r.pick([800_000, 1_200_000])
      const plan = r.pick([1_000_000, 1_400_000])
      const net = plan - dbo
      const { options, optionsAr, answerIndex } = numericOptions(
        net, [dbo - plan, plan, dbo]
      )
      return {
        stem: `${e.en} reports a defined-benefit plan with plan assets at fair value EGP ${fmt(plan)} and a defined-benefit obligation of EGP ${fmt(dbo)}. The net defined-benefit asset/(liability) is:`,
        stemAr: `لدى ${e.ar} خطة منافع محددة بأصول عادلة ${egp(plan)} والتزام منافع ${egp(dbo)}. صافي أصل/(التزام) المنافع المحددة:`,
        options, optionsAr, answerIndex,
        explanation: `Net position = plan assets − DBO = ${egp(plan)} − ${egp(dbo)} = ${egp(net)} (IAS 19 — an asset is capped at the asset-liability ceiling).`,
        explanationAr: `الصافي = أصول الخطة − الالتزام = ${egp(net)} وفق IAS 19 مع سقف للأصل.`,
      }
    },
  },
  {
    tag: "IFRS 5", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (_r, e) => ({
      stem: `${e.en} classifies a disposal group as held for sale. Measurement is at the:`,
      stemAr: `تصنف ${e.ar} مجموعة أصول معروضة للبيع. القياس يكون عند:`,
      options: [
        "Lower of carrying amount and fair value less costs to sell; depreciation ceases",
        "Fair value through profit or loss",
        "Historical cost with continued depreciation",
        "Net realisable value of the whole entity",
      ],
      optionsAr: [
        "الأدنى من القيمة الدفترية والقيمة العادلة مخصومة تكاليف البيع، مع وقف الإهلاك",
        "القيمة العادلة عبر الربح والخسارة",
        "التكلفة التاريخية مع استمرار الإهلاك",
        "القيمة القابلة للتحقق الصافية للكيان كله",
      ],
      answerIndex: 0,
      explanation: "IFRS 5: held-for-sale assets stop being depreciated and are measured at the lower of carrying amount and FV less costs to sell.",
      explanationAr: "معيار IFRS 5: تتوقف أصول عرض البيع عن الإهلاك وتقاس بالأدنى من الدفترية والقيمة العادلة بعد التكاليف.",
    }),
  },
  {
    tag: "IAS 16", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (r, e) => {
      const cost = r.pick([800_000, 1_000_000])
      const acc = r.pick([300_000, 400_000])
      const reval = r.pick([900_000, 1_200_000])
      const nbv = cost - acc
      const surplus = reval - nbv
      const { options, optionsAr, answerIndex } = numericOptions(
        surplus, [reval - cost, Math.round(surplus * 0.4), Math.round(surplus * 1.5)]
      )
      return {
        stem: `${e.en} revalues land: cost EGP ${fmt(cost)}, accumulated depreciation EGP ${fmt(acc)} (transferred historically), valuation EGP ${fmt(reval)}. The revaluation surplus recognised in OCI is:`,
        stemAr: `تعيد ${e.ar} تقييم أرض: التكلفة ${egp(cost)} ومجمع الإهلاك ${egp(acc)} والتقييم ${egp(reval)}. فائض إعادة التقييم في الدليل الشامل:`,
        options, optionsAr, answerIndex,
        explanation: `Surplus = valuation − carrying amount = ${egp(reval)} − ${egp(nbv)} = ${egp(surplus)} (IAS 16 — credited to the revaluation surplus in equity).`,
        explanationAr: `الفائض = التقييم − الدفترية = ${egp(surplus)} ويرحل لفائض إعادة التقييم في حقوق الملكية.`,
      }
    },
  },
  {
    tag: "Consolidation", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (r, e) => {
      const intra = r.pick([120_000, 180_000, 250_000])
      const upm = r.pick([0.3, 0.4])
      const adj = Math.round(intra * upm)
      const { options, optionsAr, answerIndex } = numericOptions(
        adj, [intra, Math.round(intra * (1 - upm)), 0]
      )
      return {
        stem: `During consolidation of ${e.en}'s group, intra-group inventory sales of EGP ${fmt(intra)} include unrealised profit (UPM) of ${Math.round(upm * 100)}% still in closing inventory. The adjustment to group profit is a reduction of:`,
        stemAr: `أثناء تجميع مجموعة ${e.ar}، مبيعات مخزون داخل المجموعة ${egp(intra)} تتضمن ربحًا غير محقق بنسبة ${Math.round(upm * 100)}% ما زال في مخزون آخر الفترة. تخفيض ربح المجموعة:`,
        options, optionsAr, answerIndex,
        explanation: `Unrealised profit = intra-group sales × UPM% = ${egp(intra)} × ${Math.round(upm * 100)}% = ${egp(adj)} — eliminated on consolidation (IFRS 10/IAS 27).`,
        explanationAr: `الربح غير المحقق = ${egp(intra)} × ${Math.round(upm * 100)}% = ${egp(adj)} ويستبعد عند التجميع.`,
      }
    },
  },
  {
    tag: "IFRS 10", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (_r, e) => ({
      stem: `${e.en} holds 55% of a company but a shareholder agreement gives another investor control of the board. Consolidation is required when ${e.en}:`,
      stemAr: `تمتلك ${e.ar} 55% من شركة لكن اتفاقًا يعطي مستثمرًا آخر السيطرة على المجلس. يجب التجميع عندما:`,
      options: [
        "Has POWER over the investee, exposure to variable returns and the ability to use that power — which the facts indicate it lacks here",
        "Owns more than 50% of the shares regardless of agreements",
        "Is the largest shareholder by book value",
        "Has board representation",
      ],
      optionsAr: [
        "تملك السلطة والتعرض لعوائد متغيرة والقدرة على استخدام السلطة — والوقائع هنا تنفيها",
        "تملك أكثر من 50% من الأسهم بغض النظر عن الاتفاقات",
        "تكون أكبر مساهم بالقيمة الدفترية",
        "لها تمثيل في المجلس",
      ],
      answerIndex: 0,
      explanation: "IFRS 10's three-element control model can be outweighed by substantive rights of other parties — shareholding alone is not decisive.",
      explanationAr: "نموذج السيطرة ثلاثي العناصر في IFRS 10 قد تربحه حقوق جوهرية لأطراف أخرى — والملكية وحدها ليست حاسمة.",
    }),
  },
  {
    tag: "IFRS 9", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (_r, e) => ({
      stem: `A bond held by ${e.en} under the business model of collecting contractual cash flows (SPPI-compliant) is classified as:`,
      stemAr: `سند تحتفظ به ${e.ar} ضمن نموذج أعمال تحصيل التدفقات التعاقدية (مستوفٍ لاختبار SPPI) يصنف:`,
      options: [
        "Amortised cost",
        "Fair value through profit or loss",
        "Fair value through OCI (mandatorily)",
        "Equity at cost",
      ],
      optionsAr: [
        "التكلفة المطفأة",
        "القيمة العادلة عبر الربح والخسارة",
        "القيمة العادلة عبر الدليل الشامل إلزاميًا",
        "حقوق ملكية بالتكلفة",
      ],
      answerIndex: 0,
      explanation: "IFRS 9: business model test + SPPI test passed → amortised cost; fails either → FVTPL (debt) with FVOCI as the designated option.",
      explanationAr: "معيار IFRS 9: اجتياز اختباري نموذج الأعمال وSPPI يعني التكلفة المطفأة، وإلا FVTPL.",
    }),
  },
  {
    tag: "IAS 36", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (_r, e) => ({
      stem: `Corporate goodwill of ${e.en} is tested for impairment:`,
      stemAr: `تختبر شهرة ${e.ar} للاضمحلال:`,
      options: [
        "Annually, and whenever there is an indication — by comparing the CGU's carrying amount with its recoverable amount",
        "Monthly, using the asset's net selling price",
        "Only when the auditor requests it",
        "Never — goodwill is not tested under IFRS",
      ],
      optionsAr: [
        "سنويًا وعند كل مؤشر — بمقارنة القيمة الدفترية للوحدة بمبلغها القابل للاسترداد",
        "شهريًا بسعر البيع الصافي للأصل",
        "فقط بطلب من المراجع",
        "أبدًا — لا تختبر الشهرة وفق IFRS",
      ],
      answerIndex: 0,
      explanation: "IAS 36: goodwill is allocated to CGUs and tested annually regardless of indicators (and more often if indicators arise).",
      explanationAr: "معيار IAS 36: توزع الشهرة على الوحدات وتختبر سنويًا بغض النظر عن المؤشرات وعند وجودها.",
    }),
  },
  {
    tag: "IFRS 15", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (_r, e) => ({
      stem: `Under IFRS 15, variable consideration in ${e.en}'s contracts (rebates, penalties) is included in the transaction price only to the extent it is:`,
      stemAr: `وفق IFRS 15، يدرج المقابل المتغير (خصومات، غرامات) في سعر الصفقة بقدر:`,
      options: [
        "Highly probable not to reverse significantly when the uncertainty resolves",
        "Contractually guaranteed in writing",
        "Equal to last year's rebate",
        "Approved by the customer's auditors",
      ],
      optionsAr: [
        "رجحان عدم انعكاسه جوهريًا عند زوال عدم اليقين",
        "ضمانه تعاقديًا كتابةً",
        "مساواته بخصم العام السابق",
        "موافقة مراجعي العميل",
      ],
      answerIndex: 0,
      explanation: "IFRS 15 variable-constraint: estimate (expected value or most likely amount) and include only the highly-probable-not-to-reverse portion.",
      explanationAr: "قيد المقابل المتغير في IFRS 15: يقدر (قيمة متوقعة أو أرجح مبلغ) ويدرج الجزء المرجح عدم انعكاسه.",
    }),
  },
  {
    tag: "IAS 12", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (_r, e) => ({
      stem: `${e.en} recognises a deferred tax asset on unused tax losses. The critical condition is:`,
      stemAr: `تعترف ${e.ar} بأصل ضريبي مؤجل عن الخسائر الضريبية غير المستخدمة. والشرط الحاسم:`,
      options: [
        "Future taxable profits are probable in the period of reversal, beyond the carryforward window limits",
        "The tax authority has approved the plan",
        "The losses arose from fraud",
        "The auditor has re-computed the tax return",
      ],
      optionsAr: [
        "ترجيح أرباح خاضعة مستقبلية خلال فترة الترجيح",
        "موافقة مصلحة الضرائب على الخطة",
        "نشوء الخسائر عن احتيال",
        "إعادة احتساب المراجع للإقرار",
      ],
      answerIndex: 0,
      explanation: "IAS 12: a DTA on losses is recognised only to the extent future taxable profits are probable; uncertain prospects → recognise when convincing evidence exists.",
      explanationAr: "معيار IAS 12: يعترف بالأصل المؤجل بقدر رجحان الأرباح الخاضعة، وإلا انتظر الدليل المقنع.",
    }),
  },
  {
    tag: "IAS 33", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (r, e) => {
      const basic = r.pick([2.0, 2.5])
      const price = r.pick([20, 25])
      const avg = r.pick([24, 26, 28])
      const dil = r.round(basic * (1 - price / avg), 2)
      const { options, optionsAr, answerIndex } = numericOptions(
        Math.round(dil * 100), [Math.round(basic * 100), Math.round(dil * 200), Math.round(basic * 100 - 40)],
        (n) => `EGP ${(n / 100).toFixed(2)}`, (n) => `${(n / 100).toFixed(2)} جنيه`
      )
      return {
        stem: `${e.en} reports basic EPS of EGP ${basic.toFixed(2)} and has options outstanding (exercise price EGP ${price}, average share price EGP ${avg}). The diluted EPS is closest to:`,
        stemAr: `تعلن ${e.ar} ربحية أساسية ${basic.toFixed(2)} جنيه ولديها ملكيات تنفيذية بسعر ${price} ومتوسط سعر السهم ${avg}. ربحية السهم المخففة تقارب:`,
        options, optionsAr, answerIndex,
        explanation: `Treasury-stock (reverse) method: dilution = basic × (1 − exercise ÷ average) = ${basic.toFixed(2)} × (1 − ${price}÷${avg}) = EGP ${dil.toFixed(2)}.`,
        explanationAr: `طريقة الأسهم الخزائنية: التخفيف = الأساسية × (1 − سعر التنفيذ ÷ المتوسط) = ${dil.toFixed(2)} جنيه.`,
      }
    },
  },
  {
    tag: "IAS 1", area: "accounting", difficulty: 2, fams: [...SKILLS],
    make: (_r, e) => ({
      stem: `Which item is presented WITHIN other comprehensive income for ${e.en}?`,
      stemAr: `أي بند يعرض ضمن الدليل الشامل الآخر لـ ${e.ar}؟`,
      options: [
        "Actuarial gains and losses on a defined-benefit plan (IAS 19)",
        "Revenue from contracts with customers",
        "Cost of sales",
        "Impairment loss on inventory",
      ],
      optionsAr: [
        "المكاسب والخسائر الاكتوارية لخطة منافع محددة (IAS 19)",
        "إيراد العقود مع العملاء",
        "تكلفة المبيعات",
        "خسارة اضمحلال المخزون",
      ],
      answerIndex: 0,
      explanation: "IAS 19 remeasurements go to OCI and are never recycled; the other items are P&L items.",
      explanationAr: "إعادة قياسات IAS 19 تذهب للدليل الشامل دون إعادة تدوير، والبقية بنود ربح وخسارة.",
    }),
  },
  {
    tag: "IFRS 12", area: "accounting", difficulty: 3, fams: [...HARD],
    make: (_r, e) => ({
      stem: `${e.en} holds significant influence over an investee. IFRS 12 disclosure requirements include:`,
      stemAr: `تمارس ${e.ar} تأثيرًا مهمًا على مستثمَر. يتطلب IFRS 12 الإفصاح عن:`,
      options: [
        "Nature of the relationship, financial summary of associates/JVs and risks",
        "Nothing — disclosure applies to subsidiaries only",
        "The investee's full statutory books",
        "Personal data of the investee's directors",
      ],
      optionsAr: [
        "طبيعة العلاقة وملخص مالي للشركاء والمخاطر",
        "لا شيء — الإفصاح للتابعات فقط",
        "دفاتر المستثمَر القانونية كاملة",
        "بيانات مديري المستثمَر الشخصية",
      ],
      answerIndex: 0,
      explanation: "IFRS 12: disclose interests in subsidiaries, joint arrangements and associates — nature, risks and summarised financial information.",
      explanationAr: "معيار IFRS 12: يفصح عن المصالح في التابعات والترتيبات المشتركة والشركاء — الطبيعة والمخاطر وملخص مالي.",
    }),
  },
  {
    tag: "IFRS 3", area: "accounting", difficulty: 2, fams: [...HARD],
    make: (r, e) => {
      const cons = r.pick([7_000_000, 8_000_000])
      const nwa = r.pick([5_500_000, 6_200_000])
      const gw = cons - nwa
      const { options, optionsAr, answerIndex } = numericOptions(
        gw, [nwa - cons, Math.round(nwa * 0.1), Math.round(gw * 2)]
      )
      return {
        stem: `${e.en} pays EGP ${fmt(cons)} for 100% of a target whose identifiable net assets' fair value is EGP ${fmt(nwa)}. Goodwill is:`,
        stemAr: `تدفع ${e.ar} ${egp(cons)} لاقتناء 100% من شركة صافي أصولها العادل ${egp(nwa)}. الشهرة:`,
        options, optionsAr, answerIndex,
        explanation: `Goodwill = consideration − FV of identifiable net assets = ${egp(cons)} − ${egp(nwa)} = ${egp(gw)}.`,
        explanationAr: `الشهرة = المقابل − صافي الأصول العادل = ${egp(gw)}.`,
      }
    },
  },
]
