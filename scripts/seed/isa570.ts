import { SeedCourse } from "./types"

export const isa570: SeedCourse = {
  slug: "isa-570-going-concern",
  code: "ISA-570",
  title: "Going Concern: The Opinion-Defining Standard",
  subtitle: "Evaluate management's assessment, identify doubt, and master all four reporting outcomes.",
  description:
    "No judgement shapes an audit opinion more dramatically than going concern. This course walks through ISA 570 end to end: the responsibilities allocation, the events and conditions that cast doubt, the escalation of procedures when doubt arises, and the four distinct reporting scenarios — with special attention to Egyptian economic stress cases: FX-driven working capital strain, covenant pressure and bank facility withdrawal.",
  category: "International Standards",
  level: "Advanced",
  cpeHours: 4,
  instructorName: "Karim Mansour",
  instructorTitle: "CPA (US) · IFRS & Technical Assurance Specialist",
  instructorBio:
    "Karim has spent eighteen years between Big-4 technical departments and listed-company reporting teams, specializing in distressed-entity audits, IFRS conversions and opinion-level judgements across Egypt and Saudi Arabia.",
  rating: 4.9,
  ratingCount: 198,
  studentsCount: 743,
  icon: "scale",
  accent: "rose",
  featured: false,
  order: 5,
  modules: [
    {
      title: "Evaluating Going Concern",
      description: "The framework of responsibilities, the indicators of doubt, and the procedures that escalate when doubt is identified.",
      lessons: [
        {
          title: "Management's Assessment & the Auditor's Role",
          type: "lesson",
          durationMin: 14,
          xp: 10,
          content: {
            intro:
              "Going concern is a two-layer judgement. Management prepares its assessment using its own process; the auditor evaluates that assessment. The distinction matters because the auditor's job is not to predict the future but to challenge whether management's forward-looking picture is adequately supported and adequately disclosed.",
            sections: [
              {
                heading: "Who Does What",
                body: "Management's responsibility: perform a going concern assessment covering at least twelve months from the reporting date, using a defined process, and disclose material uncertainty where it exists. The auditor's responsibility under ISA 570: obtain sufficient appropriate evidence about whether material uncertainty exists, and conclude on the appropriateness of management's use of the going concern basis, the adequacy of disclosure, and the impact on the audit report. The auditor does not certify survival — the auditor evaluates whether a disclosed, supported basis for the going concern assumption exists.",
                bullets: [
                  "Management: assessment covering ≥ 12 months from the reporting date",
                  "Auditor: evaluate the assessment's process, assumptions and disclosure",
                  "The auditor challenges — never substitutes — management's judgement",
                ],
              },
              {
                heading: "The Look-Forward Period",
                body: "The twelve-month horizon from the date the financial statements are authorized for issue (post the 2024 revisions, clarified as from the date of approval for issue) is the minimum look-forward. The auditor's evaluation may need to extend further where the entity's cash burn, facility maturities or covenant timeline run beyond twelve months — a facility expiring at month fifteen matters at month zero if refinancing is not committed. 'It's beyond the look-forward period' is not a defence when the stress is visible inside it.",
              },
              {
                heading: "What the Auditor Must Do Before Any Doubt Exists",
                body: "Baseline procedures are mandatory on every engagement: stand-back evaluation of whether events or conditions cast doubt, regardless of any risk assessment. The auditor reviews budget-versus-actual and forecast data, debt maturity schedules, board minutes, and subsequent-event evidence. In the Egyptian context, the stand-back has become substantive work: import-dependent clients with EGP payables against USD revenues, or floating-rate borrowers after rate spikes, deserve a genuine cash-flow stress read even when management labels itself stable.",
              },
            ],
            keyPoints: [
              "Management assesses, the auditor evaluates — roles never merge",
              "Minimum look-forward: 12 months from authorization of the financial statements",
              "The stand-back evaluation is mandatory on every engagement",
              "Commitments beyond 12 months matter if stress is visible within them",
            ],
            example: {
              title: "Reading the Maturity Wall",
              context:
                "A Alexandria shipping company's primary working-capital facility matures in eleven months. Management's forecast assumes renewal at similar pricing. The relationship bank has publicly retracted from the sector.",
              analysis:
                "The maturity sits inside the look-forward period, so the assumption 'renewal as usual' is load-bearing for the entire going concern basis. The auditor must evaluate support: is there a letter of intent, a term sheet, board-level correspondence? A forecast premised on an uncommitted renewal is not adequately supported, and the auditor's procedures must escalate — this is how a routine review becomes a material uncertainty evaluation.",
            },
            takeaway:
              "Your role is disciplined challenge: interrogate the process, the assumptions and the support behind management's forward picture — before forming any view of your own.",
          },
        },
        {
          title: "Events & Conditions That Cast Doubt",
          type: "lesson",
          durationMin: 13,
          xp: 10,
          content: {
            intro:
              "ISA 570 organizes doubt into financial, operating and other indicators. No single indicator is decisive — the judgement is cumulative, directional and deeply tied to the entity's capacity to respond.",
            sections: [
              {
                heading: "The Financial Indicators",
                body: "The classic financial stress signs: net liability or net current liability positions, negative operating cash flow, recurring operating losses, arrears on dividends, debt restructuring or defaults, reliance on asset sales for liquidity, and — critically in Egypt — inability to service FX obligations or rolling short-term facilities into permanent working capital. Each indicator shifts weight depending on trajectory: a net current liability position in a business with committed revolving facilities differs from the same position with a withdrawing lender.",
                bullets: [
                  "Net current liability / net total liability positions",
                  "Negative operating cash flow with fixed repayment schedules",
                  "Defaults, restructurings, covenant waivers or breaches",
                  "FX exposure without matching revenue currency or hedging",
                ],
              },
              {
                heading: "Operating & Other Indicators",
                body: "Operating indicators include loss of a key customer or supplier (concentration risk), labor unrest or loss of key management, and supply-chain interruption. 'Other' indicators include litigation that could produce damaging judgments, changes in legislation or regulation (a licence revocation, a tariff change), and catastrophic events. In the Egyptian environment, the post-2022 import-letter-of-credit constraints taught the market how quickly a regulatory change can break a working-capital cycle — that memory now informs how auditors weigh regulatory indicators.",
              },
              {
                heading: "Management's Plans: The Response Dimension",
                body: "Doubt is never evaluated in isolation from the response. ISA 570 requires evaluation of management's plans: asset disposals (is there a buyer, a price, a timeline?), borrowing or equity injections (term sheets, not intentions), cost restructuring (agreed with unions?), and business divestments. The auditor tests the feasibility of each plan element and — the harsher test — whether management's plans are even capable of being effectively implemented in the timeframe the cash clock demands. A disposal plan that nets EGP 200m in a market with no comparable transactions is a slide, not a plan.",
              },
            ],
            keyPoints: [
              "Indicators are cumulative: financial, operating, regulatory, litigation",
              "Trajectory and concentration amplify individual indicators",
              "Management plans must be supported by evidence: buyers, term sheets, approvals",
              "Feasibility within the cash timeline is the operative test",
            ],
            example: {
              title: "The 'Committed' Equity Injection",
              context:
                "A family-owned manufacturer faces a covenant breach. The shareholders' plan: inject EGP 150m of equity. The supporting evidence: a board minute recording the intention and a letter from the chairman 'confirming commitment'.",
              analysis:
                "ISA 570 requires the auditor to evaluate whether plans are supported by evidence and feasible. A board minute records intention, not capability: where does the family's liquidity come from — property sales with six-month timelines? listed shares under margin pressure? The auditor's procedures: confirm the funding source, examine the shareholders' own liquidity evidence, and assess timing against the entity's cash-out date. An intention without traceable funding does not neutralize a material uncertainty.",
            },
            takeaway:
              "Doubt is a cumulative judgement: stack the indicators honestly, then stress every element of management's response plan for evidence, feasibility and timing.",
          },
        },
        {
          title: "Procedures When Doubt Arises",
          type: "lesson",
          durationMin: 12,
          xp: 10,
          content: {
            intro:
              "When events or conditions cast material doubt, the auditor's procedures escalate: deeper cash-flow analysis, sensitivity testing of assumptions, written representations, and possibly element-by-element verification of management's plans.",
            sections: [
              {
                heading: "The Escalation Package",
                body: "The required escalation: analyze cash flow, profit and other forecasts (focusing on assumptions over the period of doubt), analyze the subsequent-events period for cash-relevant developments, read board and shareholders' minutes for financing or restructuring discussions, obtain written representation that management acknowledges responsibility for its assessment, and request management's future plans and feasibility evidence. Where forecasts drive the conclusion, the auditor's own scepticism must be applied to each material assumption — growth rates, margin recovery, collection cycles — not merely to their arithmetic.",
                bullets: [
                  "Re-perform or recompute the cash-flow forecast arithmetic",
                  "Challenge each material assumption with independent evidence",
                  "Review post-year-end trading and cash data to the audit date",
                  "Obtain specific written representations (ISA 570 Annex)",
                ],
              },
              {
                heading: "Sensitivity: The Downside Case",
                body: "A single base-case forecast supports nothing: the question is survival under plausible downside. Professional practice: evaluate the forecast against the most recent actuals (a forecast that assumes immediate margin recovery against a declining trend deserves challenge), and test the sensitivity of headroom — if the forecast shows minimum cash of EGP 8m against a EGP 200m turnover business, a 3-day collection delay erases the cushion. The auditor's judgement is whether the downside scenario is remote — or whether the base case itself is optimistic.",
              },
            ],
            keyPoints: [
              "Challenge assumptions, not just arithmetic",
              "Compare forecast to the most recent actual trend",
              "Test headroom sensitivity — thin minimum-cushions are fragile",
              "Written representations are required but never sufficient alone",
            ],
            example: {
              title: "The 8-Million-Cushion",
              context:
                "A retailer's 12-month cash forecast shows a minimum balance of EGP 8m — 'positive throughout', management concludes. Daily cash outflows average EGP 4m. Collection cycles slipped 9 days in the last quarter.",
              analysis:
                "Headroom of two days' spend is not a cushion; it is a rounding error. The sensitivity that matters: if collection slips another week — a continuation of an existing trend, not a stress scenario — the entity breaches. The auditor's escalation here is not more arithmetic but assumption challenge: why will the slip reverse? The base case embeds an unsupported assumption of improvement, and ISA 570 requires the auditor to say so.",
            },
            takeaway:
              "Escalated procedures exist to break the base case: stress the assumptions, stress the headroom, and let the downside — not the deck — drive your conclusion.",
          },
        },
      ],
    },
    {
      title: "Reporting Scenarios",
      description: "Disclosure evaluation and the four reporting outcomes under ISA 570.",
      lessons: [
        {
          title: "Uncertainty Disclosures & Adequacy",
          type: "lesson",
          durationMin: 12,
          xp: 10,
          content: {
            intro:
              "When a material uncertainty exists, disclosure becomes the bridge between the entity's reality and the reader's understanding. The auditor evaluates whether disclosure adequately indicates the nature of the uncertainty, its potential impact, and management's response — and disclosure adequacy directly determines the audit report.",
            sections: [
              {
                heading: "What 'Adequate Disclosure' Must Contain",
                body: "Adequate going concern disclosure identifies the principal events or conditions giving rise to doubt, management's evaluation of their significance, and the plans management has to address them — with the explicit statement that material uncertainty may cast significant doubt on the entity's ability to continue. The disclosure must be specific enough that a reader understands the mechanism of risk: 'the USD 12m facility maturing in March with refinancing dependent on [X]' rather than 'the company faces liquidity challenges'. Boilerplate uncertainty language is an adequacy failure and flows straight into the opinion paragraph.",
              },
              {
                heading: "When the Basis Itself Is Inappropriate",
                body: "A separate scenario: management uses the going concern basis when it is not appropriate — the entity is in liquidation or administration, or no realistic plan exists at all. Here the framework collapses: financial statements on a going concern basis become materially misstated, and the auditor's response escalates from 'Material Uncertainty Related to Going Concern' paragraph to an adverse opinion (if disclosure is adequate but the basis is wrong) or qualified opinion (where disclosure is also inadequate). Recognizing which scenario you are in is the diagnostic skill.",
              },
              {
                heading: "The Egyptian Disclosure Landscape",
                body: "For FRA-supervised listed entities, going concern disclosure intersects with market-disclosure rules: material developments must be announced to the exchange on an ongoing basis, meaning an entity that files an audit report containing a MURGC has usually already made — or must immediately make — a market announcement. The auditor's evaluation should consider this ecosystem: a disclosure that satisfies the accounting framework but contradicts prior market announcements creates its own credibility problem.",
              },
            ],
            keyPoints: [
              "Adequate disclosure = specific events/conditions + management plans + explicit uncertainty statement",
              "Boilerplate uncertainty language fails adequacy and drives the report outcome",
              "Inappropriate basis = material misstatement → adverse opinion territory",
              "Listed entities' disclosures must cohere with market announcements",
            ],
            example: {
              title: "Two Drafts, One Verdict",
              context:
                "Draft 1: 'The Group faces liquidity challenges and is pursuing financing options.' Draft 2: 'The Group's EGP 340m facilities mature between March and June 20X5. Refinancing is not committed. If refinancing is not secured on acceptable terms, the Group may be unable to realize assets and discharge liabilities in the normal course. Management is pursuing [specific plan elements]'.",
              analysis:
                "Draft 1 fails: no identifiable condition, no mechanism, no consequence, no plan. Draft 2 succeeds: a reader can price the risk. The auditor's adequacy evaluation is not stylistic — it determines whether a Material Uncertainty paragraph is framed appropriately and whether readers of the financial statements receive the information ISA 570 exists to protect. Evaluating disclosure is a procedure, and this comparison is its working paper.",
            },
            takeaway:
              "Disclosure adequacy is the pivot of going concern reporting — demand specificity, mechanism and consequence, because the audit report inherits whatever the disclosure achieves or fails.",
          },
        },
        {
          title: "The Four Reporting Outcomes",
          type: "lesson",
          durationMin: 14,
          xp: 10,
          content: {
            intro:
              "ISA 570 produces exactly four reporting outcomes. Mastering the decision tree — doubt identified or not, disclosure adequate or not, basis appropriate or not — is what separates a controlled conclusion from an improvised one.",
            sections: [
              {
                heading: "The Decision Tree",
                body: "Outcome 1: No material doubt identified → standard unmodified report. Outcome 2: Material doubt, adequate disclosure → unmodified opinion with a 'Material Uncertainty Related to Going Concern' section (not a qualification — a communication of the uncertainty). Outcome 3: Material doubt, inadequate disclosure → qualified or adverse opinion (material misstatement exists in the financial statements). Outcome 4: Going concern basis inappropriate → adverse opinion (with a 'Material Misstatement Related to Going Concern Basis' basis-for-adverse section). Emphasis of Matter may complement but never substitute a MURGC paragraph when use of the basis is not a material uncertainty but disclosure deserves attention.",
                bullets: [
                  "No doubt → clean report",
                  "Doubt + adequate disclosure → MURGC section, opinion still unmodified",
                  "Doubt + inadequate disclosure → qualified/adverse on misstatement grounds",
                  "Wrong basis → adverse opinion",
                ],
              },
              {
                heading: "Why MURGC Is Not a Qualification",
                body: "Teams and clients routinely misunderstand this: a Material Uncertainty Related to Going Concern paragraph does not modify the opinion. The financial statements are fairly presented — the uncertainty is real, disclosed, and the opinion remains unmodified. The MURGC section exists to highlight the disclosure, and its language is prescribed. Explaining this to audit committees is a professional skill: the market reaction to a MURGC is real, but it reflects the underlying condition, not an audit defect.",
              },
              {
                heading: "The Withdrawal Question",
                body: "Where management refuses to perform or extend its assessment, or where evidence cannot be obtained, the auditor faces a scope limitation — qualified opinion or disclaimer, and where the threat is fundamental, withdrawal under the IESBA Code before the report date. Withdrawal is rare but real in going concern engagements: a management team that neither assesses nor permits assessment of solvency is signalling something the auditor cannot audit around.",
              },
            ],
            keyPoints: [
              "Four outcomes map to: doubt × disclosure × basis decisions",
              "MURGC highlights uncertainty but leaves the opinion unmodified",
              "Inadequate disclosure converts an uncertainty into a misstatement",
              "Refused access or refused assessment = scope limitation → withdrawal analysis",
            ],
            example: {
              title: "Choosing Outcome 3 Over Outcome 2",
              context:
                "A software group shows genuine material doubt. Management's disclosure states only: 'The Board continues to monitor liquidity.' No events, no amounts, no plans, no explicit uncertainty language.",
              analysis:
                "The doubt is real; the disclosure is inadequate. The auditor cannot issue Outcome 2 (MURGC) because that outcome presupposes disclosure adequate to frame the uncertainty. The correct outcome is a qualified or adverse opinion — the financial statements contain a material misstatement (inadequate disclosure). If management revises the note to specify conditions and plans, the report moves to Outcome 2 with an unmodified opinion. The lever is disclosure, and the auditor's leverage is the opinion.",
            },
            takeaway:
              "Know the four outcomes cold: they are the complete decision space of going concern reporting, and every fieldwork debate resolves into one of them.",
          },
        },
        {
          title: "Knowledge Check: ISA 570 Going Concern",
          type: "quiz",
          durationMin: 8,
          xp: 25,
          content: {
            intro: "Confirm mastery of going concern. 70% to pass.",
            sections: [],
            keyPoints: [],
            takeaway: "",
          },
          quiz: {
            title: "ISA 570 — Going Concern Knowledge Check",
            passScore: 70,
            questions: [
              {
                question:
                  "The minimum look-forward period for management's going concern assessment runs from:",
                options: [
                  "The balance sheet date, covering the next 12 months",
                  "The date the financial statements are authorized for issue, covering at least 12 months",
                  "The audit report date, covering the next 6 months",
                  "The date of the auditor's fieldwork completion, covering 12 months",
                ],
                correctIndex: 1,
                explanation:
                  "ISA 570 requires management's assessment to cover at least twelve months from the date the financial statements are authorized for issue — not merely from the balance sheet date.",
              },
              {
                question:
                  "A material uncertainty related to going concern exists and disclosure is adequate. The auditor should issue:",
                options: [
                  "A qualified opinion with a MURGC paragraph",
                  "An unmodified opinion with a Material Uncertainty Related to Going Concern section",
                  "An adverse opinion",
                  "A disclaimer of opinion",
                ],
                correctIndex: 1,
                explanation:
                  "With adequate disclosure, the financial statements are fairly presented: the opinion stays unmodified and the MURGC section highlights the disclosed uncertainty. A MURGC is not a qualification.",
              },
              {
                question:
                  "Which of the following provides the WEAKEST support for management's plan to address going concern doubt?",
                options: [
                  "A signed term sheet for new financing",
                  "A board minute recording intention to inject equity, with no identified funding source",
                  "A signed sale-and-purchase agreement for asset disposal",
                  "Committed cost-reduction agreements negotiated with unions",
                ],
                correctIndex: 1,
                explanation:
                  "Intention without a traceable funding source is not support. Term sheets, signed SPAs and executed agreements are evidence; minutes of intention are narrative.",
              },
              {
                question:
                  "Management uses the going concern basis, but the entity is subject to a liquidation order. Disclosure of this fact is complete. The auditor should issue:",
                options: [
                  "An unmodified opinion with MURGC section",
                  "A qualified opinion for inadequate disclosure",
                  "An adverse opinion because the going concern basis is inappropriate",
                  "An unmodified opinion with an Emphasis of Matter",
                ],
                correctIndex: 2,
                explanation:
                  "When the going concern basis is inappropriate and disclosure is adequate, the financial statements are materially misstated as a whole → adverse opinion with a Basis for Adverse Opinion on the inappropriateness of the basis.",
              },
              {
                question:
                  "A forecast shows minimum cash of EGP 5m on a business spending EGP 3m daily, after a quarter in which collection cycles deteriorated 10 days. The auditor's primary concern should be:",
                options: [
                  "The arithmetic of the forecast model",
                  "The sensitivity of headroom — less than two days' spend — against a deteriorating collection trend",
                  "Whether the forecast is in the right spreadsheet format",
                  "Obtaining a management representation letter covering the forecast",
                ],
                correctIndex: 1,
                explanation:
                  "Thin minimum cash against a deteriorating trend means the base case embeds unsupported improvement. ISA 570 requires challenging the assumptions — especially when headroom is measured in days, not months.",
              },
            ],
          },
        },
      ],
    },
  ],
}
