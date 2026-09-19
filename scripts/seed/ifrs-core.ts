import { SeedCourse } from "./types"

export const ifrsCore: SeedCourse = {
  slug: "ifrs-essentials-auditors",
  code: "IFRS-CORE",
  title: "IFRS Essentials for External Auditors",
  subtitle: "IFRS 15, IFRS 9, IFRS 16, IAS 36 — the standards that generate audit findings, through an auditor's lens.",
  description:
    "Auditors do not need to be IFRS preparers — they need to know exactly where the judgement lives and how it breaks. This course covers the four highest-risk IFRS areas for external audit: IFRS 15 revenue, IFRS 9 expected credit losses, IFRS 16 leases, and IAS 36 impairment. Each lesson ends with the auditor's angle: the misstatement patterns, the estimate surfaces and the procedures that work.",
  category: "IFRS",
  level: "Intermediate",
  cpeHours: 6,
  instructorName: "Karim Mansour",
  instructorTitle: "CPA (US) · IFRS & Technical Assurance Specialist",
  instructorBio:
    "Karim has spent eighteen years between Big-4 technical departments and listed-company reporting teams, specializing in distressed-entity audits, IFRS conversions and opinion-level judgements across Egypt and Saudi Arabia.",
  rating: 4.9,
  ratingCount: 287,
  studentsCount: 1093,
  icon: "book-open-check",
  accent: "gold",
  featured: true,
  order: 3,
  modules: [
    {
      title: "Revenue & Receivables",
      description: "IFRS 15's five steps and IFRS 9's ECL model — the two judgement engines of the modern income statement.",
      lessons: [
        {
          title: "IFRS 15: The Five Steps & Audit Hotspots",
          type: "lesson",
          durationMin: 16,
          xp: 10,
          content: {
            intro:
              "IFRS 15 replaced industry-specific revenue rules with one five-step model. For auditors, that standardization is a gift: the misstatement patterns now cluster at predictable points in the model — and you can test each one.",
            sections: [
              {
                heading: "The Five Steps, Rapidly",
                body: "Step 1: identify the contract (enforceable rights and obligations — side agreements kill this step). Step 2: identify performance obligations (distinct goods/services — bundling is where separation judgement lives). Step 3: determine the transaction price (variable consideration, financing components, non-cash elements). Step 4: allocate the price to obligations (standalone selling prices — estimation surface). Step 5: recognize revenue when (point in time) or as (over time) obligations satisfy. Egyptian practice note: EAS 40/41 largely mirror IFRS 15, so the same hotspots apply domestically.",
                bullets: [
                  "Step 1-2 hotspots: side letters, undelivered bundles, distinctness judgement",
                  "Step 3 hotspots: variable consideration constraints, financing elements",
                  "Step 4 hotspots: SSP estimation for discounts and bundles",
                  "Step 5 hotspots: over-time criteria, percentage-of-progress inputs",
                ],
              },
              {
                heading: "The Auditor's Angle: Where IFRS 15 Breaks",
                body: "The recurring misstatement patterns: recognizing revenue on shipment when acceptance clauses remain open (step 5 timing); estimating variable consideration too optimistically — rebates, penalties, returns not constrained (step 3); gross vs net presentation on agent arrangements (step 2 identity); and percentage-of-progress manipulation through cost-to-cost inputs that include uninstalled materials (step 5). Each pattern maps to specific procedures: acceptance-clause contract review, historical-returns analytics against recorded estimates, agent-vs-principal indicator testing, and cost-input reconciliation to installed quantities.",
              },
              {
                heading: "Egyptian Sector Patterns",
                body: "Real estate developers: over-time recognition on 'reasonable progress + customer control' criteria is the single largest judgement area in Egyptian audit — collectability thresholds and progress measures are inspected relentlessly. Telecom and software: multi-element bundles with SSP estimation. Manufacturing: acceptance clauses on equipment. Distributors: returns and rebate provisions. Sector-pattern awareness converts generic revenue testing into targeted challenge.",
              },
            ],
            keyPoints: [
              "Misstatements cluster at steps 3, 4, 5 — variable consideration, SSP, timing",
              "Acceptance clauses and side letters are step-1/5 kill switches",
              "Over-time criteria (esp. real estate) are Egypt's highest-scrutiny revenue judgement",
              "Match procedures to pattern: history analytics for estimates, contract review for timing",
            ],
            example: {
              title: "The Acceptance Clause That Moved a Quarter",
              context:
                "An equipment maker ships a production line on 26 December. Revenue recognized on shipment. The contract's acceptance clause requires a 30-day production-rate test at the customer's facility.",
              analysis:
                "Under IFRS 15, control has not transferred when acceptance criteria remain and the customer can reject — the revenue belongs to Q1, not Q4. The audit procedure is contract-level: identify all shipments near period-end with open acceptance clauses (data analytics over the shipping and contract databases), then examine acceptance documentation and post-date correspondence. Timing misstatement of this shape is the classic IFRS 15 finding — mechanical, material, and entirely testable.",
            },
            takeaway:
              "Know the model's five judgement points cold, learn your client's sector pattern, and aim your procedures where the model breaks — not at invoice samples generically.",
          },
        },
        {
          title: "IFRS 9: Expected Credit Losses",
          type: "lesson",
          durationMin: 15,
          xp: 10,
          content: {
            intro:
              "Expected Credit Loss transformed impairment from an incurred-loss formula into a forward-looking probability model. For auditors, ECL is now the most technical estimate on most balance sheets — and the audit response is model-and-assumption work, not sampling.",
            sections: [
              {
                heading: "The Three-Stage Model",
                body: "Stage 1: performing — 12-month ECL, interest on gross carrying. Stage 2: significantly increased credit risk (SICR) — lifetime ECL, still gross interest. Stage 3: credit-impaired — lifetime ECL, net interest. The staging judgement (SICR criteria) is a first-order manipulation surface: entities delay lifetime migration because it front-loads losses. Auditors test staging criteria against observable data — days past due (the rebuttable 30-day presumption), credit grades, and macro overlays.",
                bullets: [
                  "Stage 1: 12-month ECL; Stage 2: lifetime ECL on SICR; Stage 3: impaired",
                  "30-days-past-due is the rebuttable SICR presumption",
                  "Staging discipline is a manipulation surface in itself",
                ],
              },
              {
                heading: "The Model's Assumptions",
                body: "The ECL amount = Probability of default (PD) × Loss given default (LGD) × Exposure at default (EAD), discounted, with forward-looking macro scenarios weighted. Every input is an estimate surface: PD from internal historical rates (data quality!) or external benchmarks; LGD from recovery experience (collateral valuation — real estate in Egypt!); macro scenarios and their weights (which scenario mix flatters the answer?). The auditor's work: understand the model, test the historical data's completeness, challenge the scenario weights, and evaluate collateral valuations feeding LGD.",
              },
              {
                heading: "The Auditor's Response Package",
                body: "Standard high-quality ECL audit responses: recompute a sample through the model; benchmark loss rates against the portfolio's actual realized history (hindsight testing — how did last year's model predict actual write-offs?); test the aging data's integrity to the ledger; challenge macro scenario selection against independent forecasts (CBE inflation path, sector outlooks); and evaluate the sensitivity — how much does ECL move if one notch more pessimistic? For significant portfolios, an auditor's expert in model validation is increasingly standard.",
              },
            ],
            keyPoints: [
              "ECL = PD × LGD × EAD with forward-looking overlays — test each surface",
              "Staging (SICR) discipline is as important as the loss measurement",
              "Hindsight testing against realized write-offs is the anchor procedure",
              "Scenario weights and collateral valuations are the softer, biased-prone inputs",
            ],
            example: {
              title: "The Optimistic Scenario Weights",
              context:
                "A leasing company's ECL uses three scenarios: base (60% weight), upside (25%), downside (15%). Independent forecasts for the sector lean materially negative; the company's own arrears trend deteriorated all year.",
              analysis:
                "The weights are where judgement quietly becomes bias: shifting 10 points from upside to downside moves lifetime ECL by EGP 35m. The audit response: benchmark weights against central-bank and IMF scenario probabilities, evaluate the deterioration trend's consistency with scenario selection, and test sensitivity of the provision to a realistic re-weighting. ECL audit is argument-with-numbers: the file must show why the weights chosen are supportable against independent evidence, not merely computed correctly.",
            },
            takeaway:
              "Audit ECL as a model, not a balance: staging discipline, historical anchoring, scenario challenge and sensitivity — that is where the estimate holds or breaks.",
          },
        },
      ],
    },
    {
      title: "Assets & Liabilities",
      description: "IAS 16, IFRS 16 and IAS 36 — capitalization, leases and impairment through the audit lens.",
      lessons: [
        {
          title: "IAS 16 & the Capitalization Line",
          type: "lesson",
          durationMin: 13,
          xp: 10,
          content: {
            intro:
              "Property, plant and equipment audits look mechanical until the capitalization line moves: what belongs in PPE cost — and what is secretly expense or secretly not-expense — is where PP&E audits generate findings.",
            sections: [
              {
                heading: "Cost's Real Definition",
                body: "PPE cost includes purchase price plus costs directly attributable to bringing the asset to working condition: site preparation, delivery, installation, professional fees, dismantling obligations. It excludes: staff training (even if essential to operate), initial operating losses, administration overheads, and 'supervision' that is really general management. The classic manipulation: capitalizing operating costs into a construction-in-progress (CIP) account — expense dodging through the balance sheet. The mirror-image: expensing genuine asset-enhancing costs for tax reasons (common in Egyptian private companies), which understates assets and profit simultaneously.",
                bullets: [
                  "Include: directly attributable costs to working condition",
                  "Exclude: training, initial operating losses, general overheads",
                  "CIP is the classic expense-hiding account — age and vouch it",
                ],
              },
              {
                heading: "Subsequent Expenditure & Depreciation Judgement",
                body: "After recognition: replacements of components are capitalized (if future-benefit criteria met); repairs and maintenance are expensed; the distinction is 'does it extend useful life or capacity?'. Depreciation judgement — useful lives, residual values, methods — is an annual estimate requiring impairment-side thinking (a mine with shortened reserve life, a machine made obsolete by technology). Depreciation method changes are changes in estimate (prospective), not policy changes (retrospective) — misclassification shows up in inspection findings.",
              },
              {
                heading: "The Auditor's Package for PP&E",
                body: "The effective PP&E response set: additions vouching (invoice + physical existence + authorization), CIP aging analysis (old CIP is either abandoned expense or missing impairment), repairs-vs-capitalization boundary testing via GL account analytics (monthly expense volatility analysis around the boundary accounts), componentization review for major overhauls, and useful-life reasonableness against actual asset retirement history. Plus the recurring Egyptian specific: land and buildings at decades-old book values in inflationary EGP — revaluation and fair-value discipline questions that belong to IAS 16's revaluation model and IFRS 13.",
              },
            ],
            keyPoints: [
              "CIP aging is the cheapest high-yield procedure in PP&E audit",
              "The capitalization boundary is where P&L manipulation hides",
              "Depreciation estimates need retirement-history reality checks",
              "Component replacements capitalize; repairs expense — test the boundary",
            ],
            example: {
              title: "The CIP Account That Ate Payroll",
              context:
                "A construction-phase factory's CIP balance grows all year. Aging shows EGP 18m older than 15 months. Payroll analysis shows project-management salaries capitalized, and the 'factory' has been mechanically complete for eight months.",
              analysis:
                "The findings write themselves: capitalized costs post-completion belong in expense (depreciation starts at ready-to-use, not at management's convenience), and the CIP aging exposes both. Procedures: the additions-vouch, the aging schedule, and the operational-status confirmation through utilities (a consuming electricity meter is ready-to-use testimony). CIP is meant to be a temporary account — permanence is the anomaly.",
            },
            takeaway:
              "Watch the capitalization line — CIP aging, boundary-account analytics and retirement-history checks will find more than any sample of invoices ever will.",
          },
        },
        {
          title: "IFRS 16 Leases: The Auditor's Angle",
          type: "lesson",
          durationMin: 14,
          xp: 10,
          content: {
            intro:
              "IFRS 16 moved nearly all leases onto the balance sheet: right-of-use assets and lease liabilities, recognized on present value. For auditors, this means leases are now a measurement population with completeness, discounting and judgement surfaces — not a footnote disclosure.",
            sections: [
              {
                heading: "The Recognition Mechanics",
                body: "Lessee accounting: recognize a right-of-use asset and lease liability at lease commencement, liability = PV of lease payments discounted at the rate implicit in the lease (or incremental borrowing rate when implicit isn't determinable — almost always the case for lessees). Exemptions: short-term (≤12 months) and low-value assets. The discount rate is the highest-impact estimate: in Egypt's rate environment, the IBR assumption moves liabilities materially. Auditors benchmark the rate against the entity's actual financing costs and market yields.",
                bullets: [
                  "Liability = PV of payments at implicit rate or IBR",
                  "Exemptions: ≤12-month terms and low-value assets",
                  "Discount rate = the single highest-impact estimate",
                ],
              },
              {
                heading: "Completeness: The Lease Population",
                body: "The completeness problem: leases hide in service contracts, hosting agreements and 'rental' arrangements with purchase obligations embedded. The identification judgement — is there a right to control identified asset for a period in exchange for consideration? — sweeps in arrangements never labelled 'lease'. Procedures that work: interrogate property costs and new-contract populations with lease-identification screens; read renewals and variable-payment clauses; reconcile the lease register to the actual contract cabinet; and test that renewals reasonably assured (extension options) are in term.",
              },
              {
                heading: "Subsequent Measurement & Modification Traps",
                body: "After initial recognition: liability amortizes with interest; ROU asset depreciates (or follows the leased-asset's depreciation pattern). Modifications (renegotiated scope or consideration) require remeasurement and often a new discount rate; reassessment of extension options triggers remeasurement too. The audit traps: modifications mis-booked as catch-up adjustments to ROU without liability remeasurement; impairment of ROU assets when the underlying property sits vacant (a real Egyptian retail-sector reality) — ROU impairment flows through IAS 36 logic.",
              },
            ],
            keyPoints: [
              "Lease identification sweeps in unlabelled contracts — screen the contract population",
              "Discount rate assumption is the biggest measurement lever",
              "Modifications and option reassessments require remeasurement discipline",
              "Vacant leased property = ROU impairment surface",
            ],
            example: {
              title: "The Store That Closed",
              context:
                "A retail chain closed four branches in October; the leases run three more years. The ROU assets keep depreciating normally; no impairment discussion exists in the file.",
              analysis:
                "Vacant leased space is an IAS 36 indicator for the ROU asset: recoverable amount falls below carrying amount, impairment needed unless sublease income supports recovery. The procedures: sublease market evidence, vacancy-period cash-flow projections for value-in-use, and measurement of the write-down. This is where IFRS 16 audit meets IAS 36 audit — and where retail-sector files generate findings when teams treat ROU as 'just depreciation'.",
            },
            takeaway:
              "Leases are now a measurement population: screen for hidden leases, challenge the discount rate, and let modification and vacancy events trigger the remeasurement and impairment machinery.",
          },
        },
        {
          title: "IAS 36: Auditing Impairment Estimates",
          type: "lesson",
          durationMin: 14,
          xp: 10,
          content: {
            intro:
              "Impairment is the most judgement-dense audit area: discounted cash-flow models owned by management, terminal values stretching decades, and discount rates that no one can 'confirm'. The auditor's leverage is in the model's architecture — assumptions, data and bias — not in recalculation alone.",
            sections: [
              {
                heading: "The Impairment Machinery",
                body: "Impairment triggers (external: market declines, rate moves, regulation; internal: obsolescence, damage, worse-than-expected economics) require recoverable amount testing: higher of fair value less costs of disposal and value in use. VIU = PV of cash-flow projections over the asset's remaining life, with growth caps (long-term growth cannot exceed the economy's), and a discount rate reflecting the asset's specific risks. Goodwill tests at CGU level annually regardless of triggers. The standard's architecture deliberately constrains management optimism — the auditor tests those constraints.",
                bullets: [
                  "Triggers external & internal; goodwill tested annually regardless",
                  "VIU growth rate capped at long-term economy growth",
                  "Discount rate must reflect the asset's specific risk profile",
                  "Budget vs actual hindsight: 'was last year's forecast achieved?'",
                ],
              },
              {
                heading: "The Five Surfaces to Test",
                body: "Surface 1: cash-flow projections — compare with last year's budget-versus-actual (the hindsight test that anchors credibility); Surface 2: growth assumptions — beyond the cap means restating economics; Surface 3: discount rate — benchmark against WACC evidence, sector multiples and the entity's own borrowing cost; Surface 4: CGU composition — has goodwill been 'relocated' to a bigger, healthier CGU to dilute impairment?; Surface 5: sensitivity — how close is headroom to zero? Thin headroom with aggressive assumptions is a flag pattern requiring expanded challenge, and where headroom is negligible, the model's least-supportable assumption effectively decides profit.",
              },
              {
                heading: "The Egyptian Discount-Rate Reality",
                body: "Egyptian discount rates are a study in themselves: sovereign yields, inflation dynamics and EGP risk premia make WACC estimation genuinely difficult — and easily gamed in either direction. Best practice evidence: recent transaction multiples in the sector, the entity's actual debt pricing (the most defensible anchor), and quoted-peer implied returns. Where the client's rate sits meaningfully below demonstrable financing costs with no support, the auditor has found the model's soft spot — every 1% of discount rate can swing VIU by double-digit percentages.",
              },
            ],
            keyPoints: [
              "Hindsight-test last year's forecast before believing this year's",
              "Growth caps and CGU composition are structural anti-manipulation constraints",
              "Discount rate anchored to actual financing cost is the defensible benchmark",
              "Thin headroom + aggressive assumptions = expanded challenge pattern",
            ],
            example: {
              title: "The Convenient Discount Rate",
              context:
                "A hospitality CGU with EGP 900m carrying value shows VIU of EGP 930m — 3% headroom. The discount rate used: 14%. The group's actual new debt prices at 22%. Re-running the model at 22% drops VIU to EGP 610m.",
              analysis:
                "The 800bp gap between assumed and actual financing cost is the entire audit finding: at the defensible rate, the CGU is impaired by ~EGP 290m. The procedure sequence: document actual borrowing evidence, benchmark sector rates, demand model re-runs at supported rates, and evaluate the sensitivity disclosure. Impairment audits are won at the rate — this is why discount-rate evidence is not optional, and why thin-headroom models get expanded review.",
            },
            takeaway:
              "Impairment is model architecture: hindsight-anchor the forecasts, cap the growth, anchor the rate to real financing evidence — and treat thin headroom as the alarm it is.",
          },
        },
        {
          title: "Knowledge Check: IFRS for Auditors",
          type: "quiz",
          durationMin: 10,
          xp: 25,
          content: {
            intro: "Test your IFRS audit judgement across the four core standards. 70% to pass.",
            sections: [],
            keyPoints: [],
            takeaway: "",
          },
          quiz: {
            title: "IFRS Essentials for Auditors — Knowledge Check",
            passScore: 70,
            questions: [
              {
                question:
                  "An equipment seller ships on 26 December; the contract requires a 30-day customer acceptance test before title risk passes. Under IFRS 15, revenue should generally be recognized:",
                options: [
                  "On shipment in December",
                  "When the acceptance criteria are met, likely next period",
                  "When cash is collected",
                  "Evenly over the acceptance period",
                ],
                correctIndex: 1,
                explanation:
                  "Where the customer can reject the asset until acceptance criteria are met, control has not transferred — recognition waits for acceptance. Open acceptance clauses near period-end are a prime IFRS 15 audit target.",
              },
              {
                question:
                  "In an ECL model, which input pair drives the largest estimate manipulation surface?",
                options: [
                  "Currency denomination and payment format",
                  "Probability of default, loss given default and scenario weights",
                  "Customer name and invoice number",
                  "Interest calculation day-count convention",
                ],
                correctIndex: 1,
                explanation:
                  "PD, LGD and forward-looking scenario weights are the estimate engine of ECL — each is a judgement surface the auditor must anchor to historical data and independent forecasts.",
              },
              {
                question:
                  "Under IAS 16, which cost should NOT be capitalized into PPE?",
                options: [
                  "Installation and site preparation costs",
                  "Staff training to operate the new asset",
                  "Initial delivery costs",
                  "Professional fees for installation engineering",
                ],
                correctIndex: 1,
                explanation:
                  "Training costs — even essential ones — are expensed: they do not bring the asset to working condition. Installation, delivery and directly attributable professional fees capitalize.",
              },
              {
                question:
                  "A lessee cannot reliably determine the rate implicit in the lease. The discount rate used should be:",
                options: [
                  "The risk-free government yield",
                  "The lessee's incremental borrowing rate",
                  "The lessor's published margin",
                  "Any rate management selects",
                ],
                correctIndex: 1,
                explanation:
                  "IFRS 16: where the implicit rate is not determinable (the usual case for lessees), the lessee's incremental borrowing rate applies — benchmarked against actual financing evidence, especially in high-rate environments.",
              },
              {
                question:
                  "A CGU's value-in-use shows 3% headroom. The discount rate used is 14% while the group borrows at 22%. The auditor's primary concern is:",
                options: [
                  "The arithmetic of the discounting",
                  "The discount rate is unsupported by financing evidence, likely overstating VIU materially",
                  "The CGU is too small",
                  "Nothing — headroom is positive",
                ],
                correctIndex: 1,
                explanation:
                  "Thin headroom plus a discount rate well below demonstrable borrowing cost means the model's least-supportable assumption decides the outcome. Rate anchoring to actual financing evidence is the decisive procedure.",
              },
              {
                question:
                  "Which IFRS 15 step is most affected by undisclosed side agreements granting return rights?",
                options: [
                  "Step 1 — identifying the contract, since enforceability and substance are compromised",
                  "Step 5 — timing only",
                  "Step 3 — pricing only",
                  "None — side agreements are irrelevant if invoices exist",
                ],
                correctIndex: 0,
                explanation:
                  "Side letters undermine the contract's identification and the transaction's substance — affecting variable consideration, timing and even whether a contract exists. Contract-population completeness (including side letters) is the foundation step.",
              },
            ],
          },
        },
      ],
    },
  ],
}
