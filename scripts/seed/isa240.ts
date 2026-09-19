import { SeedCourse } from "./types"

export const isa240: SeedCourse = {
  slug: "isa-240-fraud",
  code: "ISA-240",
  title: "Fraud Responsibilities Under ISA 240",
  subtitle: "The fraud triangle, brainstorming that works, override procedures and reporting obligations.",
  description:
    "Fraud is where professional scepticism becomes real work. This course covers the auditor's fraud responsibilities end to end: the fraud triangle as an analysis engine, identifying fraud risk factors, running engagement-team brainstorming sessions that actually surface risks, the mandatory management-override procedures, and the reporting decision tree when fraud is found. Includes Egyptian fraud case patterns from recent enforcement.",
  category: "International Standards",
  level: "Intermediate",
  cpeHours: 4,
  instructorName: "Nour Abdel-Rahman",
  instructorTitle: "CFE, ESA · Forensic & Regulatory Specialist",
  instructorBio:
    "Nour leads forensic and regulatory advisory work for financial institutions in Cairo, trains bank audit teams on AML and fraud obligations, and lectures on the Egyptian regulatory framework for professional qualification candidates.",
  rating: 4.8,
  ratingCount: 203,
  studentsCount: 812,
  icon: "shield-alert",
  accent: "rose",
  featured: false,
  order: 7,
  modules: [
    {
      title: "The Fraud Mindset",
      description: "The fraud triangle, risk factor recognition, and brainstorming discipline.",
      lessons: [
        {
          title: "The Fraud Triangle & Professional Scepticism",
          type: "lesson",
          durationMin: 14,
          xp: 10,
          content: {
            intro:
              "Every fraud, from the EGP 2m payroll ghost to the EGP 4bn fictitious revenue empire, requires the same three conditions: incentive, opportunity and rationalization. The fraud triangle is not theory — it is the auditor's diagnostic grid for reading a client like a fraudster would.",
            sections: [
              {
                heading: "Incentive: What Does Management Need to Happen?",
                body: "Incentive is the pressure that makes fraud attractive: bonus targets tied to profit, debt covenants requiring ratios, analyst guidance the market will punish for missing, family shareholders needing dividends, or personal guarantees on company debt. In the Egyptian context, the last decade's macro volatility added its own incentives: entities under FX pressure overstate export revenue or understate USD liabilities to preserve facility headroom. The auditor's discipline: read the incentive map before fieldwork — whose compensation and survival depends on which numbers?",
                bullets: [
                  "Bonus and covenant structures point to the manipulated metrics",
                  "Analyst guidance and dividend expectations create reporting pressure",
                  "FX and rate stress historically correlate with misstatement clusters",
                ],
              },
              {
                heading: "Opportunity: Where Are the Controls Weak?",
                body: "Opportunity is control weakness as seen through a fraudster's eyes: dominant owner-managers who override controls, revenue cycles with manual credit notes, related-party channels without independent verification, ERP master data with broad access, and consolidations performed on spreadsheets by one person. Note the asymmetry: auditors assess controls for error-prevention; fraudsters hunt for override-potential. A control environment that is 'fine for errors' can be wide open for management override — which is why override procedures are mandatory, not risk-based.",
              },
              {
                heading: "Rationalization & Scepticism in Practice",
                body: "Rationalization is the internal story: 'I'll fix it next quarter', 'everyone in this sector books revenue this way', 'the tax authority takes too much anyway'. The auditor cannot observe rationalization directly, but its presence shows in language and pattern: defensiveness about standard queries, urgency around specific accounts, explanations that reference fairness rather than facts. Professional scepticism under ISA 240 means a questioning mind and critical evaluation of evidence — with the operational test: 'what evidence, independent of management's assertion, supports this?'",
              },
            ],
            keyPoints: [
              "Incentive map: whose pay/survival depends on which numbers",
              "Opportunity = override potential, not just error-prevention weakness",
              "Scepticism test: what independent evidence supports the assertion?",
              "Fraud triangle turns anecdote into structured client reading",
            ],
            example: {
              title: "Reading the Incentive Map",
              context:
                "A family-owned industrial group: the chairman personally guarantees EGP 300m of company debt; his son's bonus is tied to EBITDA; the daughter runs procurement.",
              analysis:
                "Three fraud-lens readings: the guarantee creates incentive to keep the company's ratios above facility thresholds (debt-related assertions, going concern); the EBITDA bonus points to expense timing and capitalization judgement; procurement under family control concentrates opportunity with weak segregation. None of this proves fraud — but it tells the team exactly where scepticism earns its budget: covenant math, capitalized costs, and vendor master data.",
            },
            takeaway:
              "Read every client through the triangle: what do they need to happen (incentive), where can it happen unseen (opportunity), and what story makes it acceptable (rationalization).",
          },
        },
        {
          title: "Fraud Risk Factors: Recognition Patterns",
          type: "lesson",
          durationMin: 13,
          xp: 10,
          content: {
            intro:
              "ISA 240's appendix catalogues dozens of fraud risk factors, but auditors who memorize the list miss the skill: pattern recognition. Risk factors cluster — and clusters, not individual factors, are what should redirect your audit strategy.",
            sections: [
              {
                heading: "The Clusters That Matter",
                body: "Fraudulent financial reporting clusters: (pressure + complexity) — growth targets with multi-element revenue contracts; (pressure + judgement) — covenant stress with fair-value-heavy balance sheets; (opportunity + override) — dominant owner with weak governance. Misappropriation clusters: (access + rationalization) — the trusted long-serving cashier with the personal crisis; (weak monitoring) — remote branches with no surprise counts. The auditor's craft is mapping which cluster the client sits in, and which accounts sit at the cluster's center.",
                bullets: [
                  "Pressure + complexity → revenue manipulation cluster",
                  "Pressure + judgement → estimates manipulation cluster",
                  "Dominant owner + weak governance → override cluster",
                  "Access + tenure → misappropriation cluster",
                ],
              },
              {
                heading: "The Auditor's Behavioural Read",
                body: "Non-financial signals carry weight when they cluster too: excessive interest in the audit timeline around specific accounts, organizational churn in finance roles, unusual dominance of a single executive in all audit communications, reluctance to provide routine documentation, and a pattern of last-minute adjustments that 'solve' problems. Individually these are noise; combined with an incentive map, they are diagnostic. Document behavioural observations factually in the risk assessment — 'CFO refused branch warehouse access for two weeks' is data; 'we felt uncomfortable' is not.",
              },
            ],
            keyPoints: [
              "Clusters redirect audit strategy; single factors rarely do",
              "Map the client to a cluster, then identify the accounts at its center",
              "Behavioural observations are data when documented factually",
              "Pressure + judgement accounts (estimates) are the classic manipulation zone",
            ],
            example: {
              title: "The Cluster Around the Valuation Report",
              context:
                "An investment-property-heavy client: covenant pressure, a single external valuer engaged and paid by management, valuation gains representing 80% of the year's profit, and the audit team's request for the valuer's model answered after three weeks.",
              analysis:
                "Every factor lands in the same cluster: pressure (covenants), judgement (fair value), opportunity (management-engaged expert, model opacity), behavior (documentation delay). The response writes itself: the valuation becomes a significant risk requiring auditor's expert involvement, model assumption challenge, and corroboration from market transaction data. Cluster recognition converts diffuse unease into a designed audit response.",
            },
            takeaway:
              "Do not collect risk factors like stamps — assemble them into clusters, locate the accounts at the center, and let the cluster dictate a targeted response.",
          },
        },
        {
          title: "Brainstorming Sessions That Actually Work",
          type: "lesson",
          durationMin: 12,
          xp: 10,
          content: {
            intro:
              "ISA 240 requires an engagement-team discussion on fraud susceptibility — brainstorming — before or during planning. Done well, it is where a team's combined pattern-recognition gets onto paper. Done badly, it is five minutes of 'revenue, as usual'. The difference is structure.",
            sections: [
              {
                heading: "The Standard's Expectations",
                body: "The discussion must address: how the financial statements might be susceptible to material misstatement due to fraud (fraudulent reporting and misappropriation), how management could perpetrate and conceal fraud, and how the entity's assets could be misappropriated — plus, critically, an exchange on the team's knowledge of the entity's business and prior-year fraud issues. The engagement partner participates; attendance and substance are documented. The output feeds the significant-risk identification and the ISA 330 response design.",
              },
              {
                heading: "A Structure That Surfaces Real Risks",
                body: "Effective sessions follow a script: (1) refresh the incentive map — who needs what number this year; (2) walk the override surfaces — journals, estimates, unusual transactions; (3) walk the misappropriation surfaces — cash, inventory, vendor master, payroll; (4) mine the team's observations — what felt odd last year, what did fieldwork trip over; (5) commit: which identified risks become significant risks, and what changes in the plan this year. Ten structured minutes outperform an hour of free-form conversation, because the script forces coverage of surfaces nobody volunteers to discuss.",
                bullets: [
                  "Script: incentive map → override surfaces → misappropriation surfaces → team observations → commitments",
                  "Junior staff hold fieldwork observations seniors never see — extract them",
                  "Document attendance, substance, and the plan changes the session produced",
                ],
              },
              {
                heading: "The Anti-Patterns",
                body: "Three failures repeat across files: the template session (risk factors recited from last year), the senior-only session (juniors excluded, fieldwork intelligence lost), and the no-consequence session (risks identified, plan unchanged — the tell-tale of a compliance exercise). Reviewers spot all three instantly: if the brainstorming memo identifies risks that appear nowhere in the audit program, the session documented itself into irrelevance.",
              },
            ],
            keyPoints: [
              "Documented, attended by the partner, and substantive — all three required",
              "Structure beats free-form: surfaces and incentives, not open discussion",
              "Every identified fraud risk must surface again in the ISA 330 responses",
              "A session that changes nothing in the plan documented nothing worth reading",
            ],
            example: {
              title: "The Junior's Observation",
              context:
                "In a structured brainstorm, a first-year mentioned that the client's warehouse manager 'always insists count teams start from aisle C, never aisle A'. Last year's count had one team; this year's script sent two teams — one starting from aisle A.",
              analysis:
                "Aisle A held EGP 9m of inventory recorded in the ledger but physically absent — a channel-stuffed distributor's returned goods awaiting re-invoicing. The finding surfaced because the session structure explicitly mined junior observations, and because 'unusual count behaviour' was on the misappropriation-surfaces script. Structured brainstorming is not a meeting; it is a procedure that harvests distributed information.",
            },
            takeaway:
              "Run the session on a script that covers override surfaces, misappropriation surfaces and team observations — then prove its worth by the changes it makes to the plan.",
          },
        },
      ],
    },
    {
      title: "Responding & Reporting",
      description: "The mandatory override procedures and the fraud-reporting decision tree.",
      lessons: [
        {
          title: "Unpredictability & Management Override Procedures",
          type: "lesson",
          durationMin: 14,
          xp: 10,
          content: {
            intro:
              "Management override of controls is the irrebuttable significant risk: no matter how good the control environment, the people who run it can step over it. ISA 240 therefore mandates three specific responses on every engagement — journal testing, estimate-bias review, and unusual transaction evaluation — plus unpredictability in the audit itself.",
            sections: [
              {
                heading: "Journal Entry Testing (JET)",
                body: "The mandatory JET framework tests the journal population for entries indicating override: entries posted at odd hours, by unexpected users, on weekends or holidays, round-number amounts, entries to/from unusual account combinations, and post-closing adjustments. Modern practice runs full-population analytics over the journal listing (the tools are standard now), followed by targeted examination of flagged entries with inquiry support. The craft: defining the journal population completely (including direct GL postings, consolidating entries and top-side adjustments — the classic hiding places) and obtaining explanations that are corroborated, not narrated.",
                bullets: [
                  "Population must include top-side entries, consolidating entries, direct GL postings",
                  "Flag patterns: timing (weekend/holiday), user identity, round sums, unusual pairings",
                  "Full-population analytics over sampling — the tooling is standard now",
                ],
              },
              {
                heading: "Reviewing Estimates for Management Bias",
                body: "Estimates are the highest-judgement surface for override: ECL assumptions, impairment triggers, useful lives, standalone selling prices. The mandated response is hindsight review — comparing prior-year estimates with actual outcomes to detect systematic bias (every estimate conveniently flattering profit) — plus assessment of whether current-year estimates reflect similar bias. A pattern of one-directional estimation error is a bias indicator that must be evaluated and, where found, addressed by expanded substantive testing of estimate inputs.",
              },
              {
                heading: "Unusual Transactions & Unpredictability",
                body: "The third mandated response: evaluate the business rationale for significant transactions outside the entity's normal course — late-year 'advisory fees', transactions with newly-formed entities, complex multi-step arrangements with no clear purpose. Separately, the auditor should incorporate unpredictability: unannounced inventory counts, rotational testing locations, sampling ranges reviewers cannot predict. Override succeeds against predictable audits; unpredictability taxes it.",
              },
            ],
            keyPoints: [
              "JET, estimate-bias review, and unusual-transaction evaluation are mandatory",
              "Journal population completeness (top-side, consolidating entries) is the JET foundation",
              "One-directional estimate patterns signal bias — hindsight review finds them",
              "Unpredictability is a designed control over the audit itself",
            ],
            example: {
              title: "The 11:47 PM Top-Side Entry",
              context:
                "Full-population JET at a manufacturer flags a EGP 14m entry posted at 23:47 on 31 December by the CFO's personal login — a debit to a distributor receivable, credit to sales, description: 'December volume program'.",
              analysis:
                "Every JET dimension fires simultaneously: timing (year-end, after hours), user (CFO personally), nature (top-side, manual), subjectivity ('volume program' with no contract), and counterpart (distributor later found related to the chairman). Corroborated inquiry produced no program documentation — the entry reversed in February. The pattern indicates concealed channel stuffing through override. JET works when the population is complete and the flags are examined with corroborated inquiry, not just read aloud.",
            },
            takeaway:
              "Override procedures are non-negotiable and technical: complete journal populations, hindsight-bias analytics, business-rationale challenge — plus a dose of unpredictability in your own testing.",
          },
        },
        {
          title: "Communication & Reporting Obligations",
          type: "lesson",
          durationMin: 13,
          xp: 10,
          content: {
            intro:
              "When fraud is found — or suspected — the auditor enters a decision tree with legal, professional and personal dimensions. ISA 240 structures the internal escalation; Egyptian law shapes the external reporting perimeter; and the IESBA code governs your own position.",
            sections: [
              {
                heading: "Internal Escalation Ladder",
                body: "Discovery triggers evaluation: (1) re-assess risk and the audit's remaining procedures — fraud changes the risk landscape; (2) communicate to management and those charged with governance at a level matching the involvement's seniority — fraud by a clerk: senior management; fraud implicating the CEO: the audit committee or supervisory board, potentially directly; (3) request management's evaluation of the fraud's effect and their response; (4) document everything — the finding, the communications, the responses. Where the entity's response is inadequate, the auditor's own obligations escalate.",
                bullets: [
                  "Match communication seniority to the seniority of involvement",
                  "Where senior management is implicated, communicate to the committee/board level",
                  "Documentation: finding, communication, response, evaluation — all four",
                ],
              },
              {
                heading: "The External Reporting Question",
                body: "External reporting — to regulators, or disclosure to parties beyond the entity — is a counsel-informed decision. Considerations: statutory reporting duties under Egyptian law for particular entity types and findings; the duty of confidentiality to the client (IESBA) as the default constraint; exceptions where law requires disclosure or where the auditor must comply with a valid court/regulator order; and the withdrawal analysis when the entity refuses to address a fundamental fraud finding. There is no universal rule — there is a documented reasoning path, and professional advice, on every branch.",
              },
              {
                heading: "Protecting the Auditor's Own Position",
                body: "The auditor's personal exposure — reputational and, in extreme cases, legal — is managed through discipline: contemporaneous documentation of the evaluation path, engagement-quality reviews on sensitive matters, legal counsel engaged early, and a firm position on the reporting threshold. The professionals who navigate fraud discoveries safely are not the ones who improvise bravely; they are the ones whose files show a reasoned, documented decision tree at every branch.",
              },
            ],
            keyPoints: [
              "Re-assess audit risk first; communication follows seniority-matched escalation",
              "External reporting is a legal-analysis decision, never a reflex",
              "Confidentiality is the default; law and valid orders carve exceptions",
              "Your protection is documentation: every branch of the tree, reasoned and recorded",
            ],
            example: {
              title: "The Committee Meeting at 7 AM",
              context:
                "JET evidence implicates the CFO in fabricated year-end entries. The CEO asks the partner to 'hold it internal while we investigate quietly'.",
              analysis:
                "The correct architecture: communicate the finding to the audit committee (seniority-matched — the CFO's level requires committee-level communication), document the finding and the request, and evaluate the entity's response adequacy. If the committee commissions a genuine forensic investigation and remediates, the audit concludes with that evidence. If the entity buries it, the auditor faces the escalation ladder: opinion implications, possible withdrawal, and the counsel-informed external reporting analysis — each step documented. The 7 AM committee meeting is the professional standard; 'holding it internal' is not on the tree.",
            },
            takeaway:
              "Fraud reporting is a decision tree you walk deliberately: escalate internally by seniority, evaluate the entity's response, and make every external-reporting branch a documented, counsel-informed reasoning — your file is your position.",
          },
        },
        {
          title: "Knowledge Check: ISA 240 Fraud",
          type: "quiz",
          durationMin: 8,
          xp: 25,
          content: {
            intro: "Verify your fraud-response judgement. 70% to pass.",
            sections: [],
            keyPoints: [],
            takeaway: "",
          },
          quiz: {
            title: "ISA 240 — Fraud Responsibilities Knowledge Check",
            passScore: 70,
            questions: [
              {
                question:
                  "Which fraud risk is treated as a significant risk on EVERY engagement, with no possibility of rebuttal?",
                options: [
                  "Revenue recognition fraud",
                  "Management override of controls",
                  "Inventory misappropriation",
                  "Payroll ghost employees",
                ],
                correctIndex: 1,
                explanation:
                  "ISA 240 treats management override of controls as a significant risk on every engagement — irrebuttable. Revenue fraud is presumed rebuttable; misappropriation risks are assessed case by case.",
              },
              {
                question:
                  "The three fraud triangle conditions are:",
                options: [
                  "Pressure, controls, detection",
                  "Incentive, opportunity, rationalization",
                  "Motive, means, concealment",
                  "Greed, access, weak governance",
                ],
                correctIndex: 1,
                explanation:
                  "The fraud triangle: incentive/pressure (what makes fraud attractive), opportunity (where controls allow it), rationalization (the internal story that makes it acceptable).",
              },
              {
                question:
                  "Which of the following is NOT one of the three mandatory management-override procedures under ISA 240?",
                options: [
                  "Testing the appropriateness of journal entries and adjustments",
                  "Reviewing accounting estimates for biases reflecting management bias",
                  "Evaluating the business rationale for significant unusual transactions",
                  "Confirming all customer balances at year-end",
                ],
                correctIndex: 3,
                explanation:
                  "The three mandated override procedures are journal entry testing, estimate-bias (hindsight) review, and unusual-transaction evaluation. Confirmations are a substantive procedure, not an override response.",
              },
              {
                question:
                  "In journal entry testing, 'top-side' entries deserve specific attention because:",
                options: [
                  "They are automatically fraudulent",
                  "They post at consolidation level where segregation is weakest and management access is direct",
                  "They only occur in decentralized groups",
                  "Auditors cannot obtain evidence about them",
                ],
                correctIndex: 1,
                explanation:
                  "Top-side entries (post-closing, consolidating adjustments) sit closest to management, often bypass entity-level controls, and historically host override activity — hence mandatory population coverage in JET.",
              },
              {
                question:
                  "A fraud implicating the CFO is confirmed. The auditor's communication should go to:",
                options: [
                  "The CFO directly, for explanation",
                  "Senior management only, to preserve confidentiality",
                  "Those charged with governance (audit committee) at a level matching the seniority of involvement",
                  "No one until the next scheduled committee meeting",
                ],
                correctIndex: 2,
                explanation:
                  "ISA 240 requires seniority-matched communication: findings implicating senior management go to those charged with governance — the audit committee/board — not to the implicated parties or only to operational management.",
              },
            ],
          },
        },
      ],
    },
  ],
}
